/* Reader: renders a parsed chapter, injects section guides, glossary links, scholar's
   annotations, and the user's highlights. Highlights are stored as character offsets
   inside numbered paragraphs, so they survive re-rendering and toggling layers. */
(function (SG) {
  "use strict";
  const { $, $$, esc } = SG;

  /* ---------- text-offset utilities (ignore injected UI marked data-ui) ---------- */
  function textNodes(root) {
    const out = [];
    const walk = (n) => {
      if (n.nodeType === 3) { out.push(n); return; }
      if (n.nodeType === 1 && n.hasAttribute("data-ui")) return;
      n.childNodes.forEach(walk);
    };
    walk(root);
    return out;
  }
  function offsetIn(block, node, offset) {
    const r = document.createRange();
    r.setStart(block, 0);
    try { r.setEnd(node, offset); } catch (e) { return 0; }
    return SG.contentText(r.cloneContents()).length;
  }
  function pointAt(block, offset, preferNext) {
    let pos = 0;
    const nodes = textNodes(block);
    for (let i = 0; i < nodes.length; i++) {
      const len = nodes[i].nodeValue.length;
      if (offset < pos + len || (offset === pos + len && !preferNext) || i === nodes.length - 1) {
        return { node: nodes[i], offset: Math.max(0, Math.min(len, offset - pos)) };
      }
      pos += len;
    }
    return null;
  }
  function wrapRange(block, start, end, make) {
    // Wrap content characters [start, end) of block, possibly across several text nodes.
    let pos = 0;
    const jobs = [];
    textNodes(block).forEach((n) => {
      const len = n.nodeValue.length;
      const s = Math.max(start, pos), e = Math.min(end, pos + len);
      if (e > s) jobs.push([n, s - pos, e - pos]);
      pos += len;
    });
    const made = [];
    jobs.forEach(([n, s, e]) => {
      let target = n;
      if (s > 0) target = target.splitText(s);
      if (e - s < target.nodeValue.length) target.splitText(e - s);
      if (!target.nodeValue) return;
      const w = make();
      target.parentNode.insertBefore(w, target);
      w.appendChild(target);
      made.push(w);
    });
    return made;
  }

  /* ---------- glossary term linking inside the book text ---------- */
  function linkTerms(root) {
    const seen = new Set();
    const terms = Object.entries(SG.glossary || {}).filter(([, t]) => t.find && t.find.length);
    const blocks = $$("[data-pid]", root);
    terms.forEach(([id, t]) => {
      if (seen.has(id)) return;
      const res = t.find.map((f) => new RegExp("\\b" + f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['\u2019]") + "\\b", "i"));
      for (const b of blocks) {
        const nodes = textNodes(b);
        let done = false;
        for (const n of nodes) {
          if (n.parentElement && n.parentElement.closest(".term, a, mark")) continue;
          for (const re of res) {
            const m = re.exec(n.nodeValue);
            if (m) {
              const target = n.splitText(m.index);
              target.splitText(m[0].length);
              const sp = document.createElement("span");
              sp.className = "term"; sp.setAttribute("data-term", id); sp.setAttribute("tabindex", "0"); sp.setAttribute("role", "button");
              sp.title = "Key term: " + t.term;
              target.parentNode.insertBefore(sp, target); sp.appendChild(target);
              done = true; break;
            }
          }
          if (done) break;
        }
        if (done) { seen.add(id); break; }
      }
    });
  }

  /* ---------- scholar's annotations ---------- */
  function placeAnnotations(root, ch) {
    const list = (ch && ch.annotations) || [];
    const blocks = $$("[data-pid]", root);
    const missing = [];
    list.forEach((a, i) => {
      const needle = SG.norm(a.anchor).replace(/\s+/g, " ");
      let placed = false;
      for (const b of blocks) {
        const txt = SG.norm(SG.contentText(b)).replace(/\s/g, " ");
        const at = txt.indexOf(needle);
        if (at < 0) continue;
        const p = pointAt(b, at + needle.length, false);
        if (!p) break;
        const btn = document.createElement("button");
        btn.type = "button"; btn.className = "anno"; btn.setAttribute("data-ui", ""); btn.setAttribute("data-anno", String(i));
        btn.setAttribute("aria-label", "Scholar's note: " + a.title); btn.title = "Scholar's note: " + a.title; btn.textContent = "✦";
        const after = p.node.splitText(p.offset);
        after.parentNode.insertBefore(btn, after);
        placed = true; break;
      }
      if (!placed) missing.push(a.anchor);
    });
    if (missing.length && window.console) console.warn("Annotation anchors not found:", missing);
    return missing;
  }

  /* ---------- highlights ---------- */
  function applyHighlights(root, bid, chid) {
    SG.data.highlights.filter((h) => h.book === bid && h.ch === chid).forEach((h) => {
      h.segs.forEach((sg) => {
        const b = root.querySelector('[data-pid="' + sg.pid + '"]');
        if (!b) return;
        wrapRange(b, sg.start, sg.end, () => {
          const m = document.createElement("mark");
          m.className = "hl hl-" + h.color + (h.note ? " has-note" : "");
          m.setAttribute("data-hid", h.id);
          if (h.note) m.title = h.note;
          return m;
        });
      });
    });
  }
  function selectionSegments(root) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    const r = sel.getRangeAt(0);
    if (!root.contains(r.commonAncestorContainer)) return null;
    const blocks = $$("[data-pid]", root).filter((b) => r.intersectsNode(b));
    const segs = [];
    let text = [];
    blocks.forEach((b) => {
      const full = SG.contentText(b);
      const start = b.contains(r.startContainer) ? offsetIn(b, r.startContainer, r.startOffset) : 0;
      const end = b.contains(r.endContainer) ? offsetIn(b, r.endContainer, r.endOffset) : full.length;
      if (end > start) { segs.push({ pid: b.getAttribute("data-pid"), start, end }); text.push(full.slice(start, end)); }
    });
    if (!segs.length) return null;
    const sec = blocks[0].closest("[data-sec]");
    return { segs, text: text.join(" … ").replace(/\s+/g, " ").trim(), sec: sec ? sec.getAttribute("data-sec") : null, rect: r.getBoundingClientRect() };
  }

  /* ---------- render ---------- */
  function render(container, bid, chid) {
    const parsed = SG.loaded[bid];
    const pch = parsed && parsed.chapters[chid];
    const ch = SG.chapter(bid, chid);
    if (!pch) return false;
    const st = SG.data.settings;
    container.className = "reader" + (st.terms ? " terms" : "") + (st.annos ? " annos" : "") + (st.pages ? " pages" : "");
    container.innerHTML = pch.html;
    // Section guides at the top of each section.
    $$(".bsec", container).forEach((secEl, i) => {
      const key = secEl.getAttribute("data-sec");
      const g = SG.sectionGuide(bid, chid, key, i);
      const d = document.createElement("details");
      d.className = "sguide"; d.setAttribute("data-ui", "");
      const noteKey = bid + "/" + chid + "#" + key;
      const has = !!(SG.data.notes[noteKey] || "").trim();
      if (g || has) d.open = !!SG.data.settings.guidesOpen;
      d.innerHTML = '<summary><span class="lbl">Section guide</span><span class="tt">' + esc(g ? g.title || sectionTitle(secEl) : sectionTitle(secEl)) + '</span><span class="tw" aria-hidden="true">▸</span></summary><div class="in">' +
        (g && g.gist ? "<p>" + SG.inline(g.gist) + "</p>" : "<p class=\"muted\">No guide for this section yet. Use the notes box to write your own.</p>") +
        (g && g.idea ? '<p><span class="lab">Key idea</span>' + SG.inline(g.idea) + "</p>" : "") +
        (g && g.q ? '<p><span class="lab">Ask yourself</span>' + SG.inline(g.q) + "</p>" : "") +
        (g && g.terms && g.terms.length ? '<div class="chips termchips">' + g.terms.map((t) => SG.termChip(t)).join("") + "</div>" : "") +
        '<label class="lab" for="sn-' + esc(key) + '">My notes on this section' + (has ? " ✓" : "") + '</label><textarea id="sn-' + esc(key) + '" data-save="notes:' + esc(noteKey) + '" placeholder="What stood out? What would you ask the group?">' + esc(SG.data.notes[noteKey] || "") + "</textarea></div>";
      const h = secEl.querySelector("h3.bsec-h");
      if (h) h.after(d); else secEl.insertBefore(d, secEl.firstChild);
    });
    if (ch && ch.interactive === "checklist") makeChecklist(container, bid, chid);
    if (ch && ch.interactive === "gritscale") makeGritScale(container, bid, chid);
    if (st.terms) linkTerms(container);
    placeAnnotations(container, ch);
    applyHighlights(container, bid, chid);
    return true;
  }
  function sectionTitle(secEl) { const h = secEl.querySelector("h3.bsec-h"); return h ? h.textContent : "Opening"; }

  function makeChecklist(container, bid, chid) {
    const items = $$("li[data-pid]", container);
    if (!items.length) return;
    const key = (pid) => bid + "/" + chid + "/check-" + pid;
    const box = document.createElement("div");
    box.className = "callout"; box.setAttribute("data-ui", "");
    const update = () => {
      const n = items.filter((li) => SG.data.answers[key(li.getAttribute("data-pid"))] === "1").length;
      box.innerHTML = '<b style="font-family:var(--font-display);font-size:2rem;color:var(--coral)">' + n + " / " + items.length + "</b> <span class=\"muted\">statements true for you now. Your answers are saved on this device.</span>";
    };
    items.forEach((li) => {
      const pid = li.getAttribute("data-pid");
      const cb = document.createElement("input");
      cb.type = "checkbox"; cb.setAttribute("data-ui", ""); cb.id = "chk-" + pid; cb.style.marginRight = "8px"; cb.style.transform = "scale(1.25)";
      cb.checked = SG.data.answers[key(pid)] === "1";
      cb.setAttribute("aria-label", "True for me");
      cb.addEventListener("change", () => { SG.data.answers[key(pid)] = cb.checked ? "1" : ""; SG.save(); update(); });
      li.insertBefore(cb, li.firstChild);
      li.style.listStyle = "none";
    });
    update();
    const last = items[items.length - 1].closest("ul, ol") || items[items.length - 1];
    last.after(box);
  }

  /* ---------- Grit Scale (Grit ch. 4): tap a box, get scored ---------- */
  function makeGritScale(container, bid, chid) {
    const tables = $$("table", container);
    const rows = [];
    tables.forEach((t) => $$("tr", t).forEach((tr) => {
      const cells = $$("td", tr);
      if (cells.length !== 6) return;
      const m = /^\s*(\d+)\./.exec(cells[0].textContent);
      if (!m) return;
      const pts = cells.slice(1).map((td) => parseInt(td.textContent.trim(), 10));
      if (pts.some(isNaN)) return;
      rows.push({ n: +m[1], tr, cells: cells.slice(1), pts });
    }));
    if (rows.length !== 10) return;
    // Percentile table printed in the book (American adults)
    const norms = [[2.5, 10], [3.0, 20], [3.3, 30], [3.5, 40], [3.8, 50], [3.9, 60], [4.1, 70], [4.3, 80], [4.5, 90], [4.7, 95], [4.9, 99]];
    const key = (n) => bid + "/" + chid + "/gs-" + n;
    const box = document.createElement("div");
    box.className = "callout gs-result"; box.setAttribute("data-ui", ""); box.setAttribute("aria-live", "polite");
    const update = () => {
      let done = 0, sum = 0, pas = 0, per = 0;
      rows.forEach((r) => {
        const v = +SG.data.answers[key(r.n)] || 0;
        r.cells.forEach((td, i) => { const on = v && r.pts[i] === v; td.classList.toggle("gs-on", !!on); td.setAttribute("aria-pressed", on ? "true" : "false"); });
        if (v) { done++; sum += v; if (r.n % 2) pas += v; else per += v; }
      });
      if (done < 10) {
        box.innerHTML = '<b class="gs-big">' + done + " / 10</b> <span class=\"muted\">Tap the box in each row that fits you. The book's scoring is applied automatically; answers stay on this device.</span>" + (done ? ' <button type="button" class="btn ghost small gs-reset">Clear</button>' : "");
      } else {
        const g = sum / 10;
        let pct = "below the 10th";
        norms.forEach(([s, p]) => { if (g >= s - 1e-9) pct = "about the " + p + "th"; });
        box.innerHTML = '<div class="gs-scores"><div><span class="gs-big">' + g.toFixed(1) + '</span><small>Grit</small></div><div><span class="gs-big">' + (pas / 5).toFixed(1) + '</span><small>Passion (odd items)</small></div><div><span class="gs-big">' + (per / 5).toFixed(1) + '</span><small>Perseverance (even items)</small></div></div>' +
          '<p>' + SG.inline("Against the book's chart of American adults, that is " + pct + " percentile. Duckworth's own score was 4.6 (perseverance 5.0, passion 4.2). Keep her caveats in mind: this is how you see yourself *now*, compared with \u201cmost people,\u201d and self-report scales are vulnerable to [[reference-bias|reference bias]].") + '</p>' +
          ' <button type="button" class="btn ghost small gs-reset">Clear answers</button>';
      }
      const rb = box.querySelector(".gs-reset");
      if (rb) rb.addEventListener("click", () => { rows.forEach((r) => { delete SG.data.answers[key(r.n)]; }); SG.save(); update(); });
    };
    rows.forEach((r) => r.cells.forEach((td, i) => {
      td.classList.add("gs-cell"); td.tabIndex = 0; td.setAttribute("role", "button");
      td.setAttribute("aria-label", "Item " + r.n + ": " + r.pts[i] + " points");
      const pick = () => { SG.data.answers[key(r.n)] = String(r.pts[i]); SG.save(); update(); };
      td.addEventListener("click", pick);
      td.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    }));
    update();
    rows[0].tr.closest("table").after(box);
  }

  /* ---------- selection toolbar ---------- */
  let tool = null, pending = null;
  function hideTool() { if (tool) tool.hidden = true; pending = null; }
  function showTool(root, bid, chid) {
    const s = selectionSegments(root);
    if (!s) { hideTool(); return; }
    pending = { s, bid, chid };
    if (!tool) {
      tool = document.createElement("div");
      tool.className = "seltool"; tool.setAttribute("role", "toolbar"); tool.setAttribute("aria-label", "Highlight selection");
      tool.innerHTML = ["yellow", "orange", "pink", "sky", "mint"].map((c) => '<button type="button" class="sw ' + c + '" data-hl="' + c + '" title="' + esc(SG.data.labels[c]) + '" aria-label="Highlight ' + c + ": " + esc(SG.data.labels[c]) + '"></button>').join("") +
        '<span class="sep"></span><button type="button" class="tbtn" data-hl="note">Note</button><button type="button" class="tbtn" data-hl="copy">Copy</button><button type="button" class="tbtn" data-hl="search">Search</button>';
      tool.addEventListener("mousedown", (e) => e.preventDefault());
      tool.addEventListener("click", (e) => {
        const b = e.target.closest("[data-hl]"); if (!b || !pending) return;
        const act = b.getAttribute("data-hl");
        const p = pending;
        if (act === "copy") { SG.copyText("“" + p.s.text + "”", "Passage copied"); hideTool(); return; }
        if (act === "search") { hideTool(); window.getSelection().removeAllRanges(); SG.openSearch(p.s.text.slice(0, 60)); return; }
        const h = { id: SG.uid(), book: p.bid, ch: p.chid, sec: p.s.sec, segs: p.s.segs, text: p.s.text, color: act === "note" ? "yellow" : act, note: "", created: new Date().toISOString() };
        SG.data.highlights.push(h); SG.save();
        window.getSelection().removeAllRanges();
        hideTool();
        SG.rerenderReader();
        if (act === "note") setTimeout(() => SG.openHighlight(h.id), 30); else SG.toast("Highlighted · " + SG.data.labels[h.color]);
      });
      document.body.appendChild(tool);
    }
    tool.querySelectorAll(".sw").forEach((b) => { const c = b.getAttribute("data-hl"); b.title = SG.data.labels[c]; });
    tool.hidden = false;
    const r = s.rect;
    const tw = tool.offsetWidth || 300;
    let x = Math.max(8, Math.min(window.innerWidth - tw - 8, r.left + r.width / 2 - tw / 2));
    let y = r.top - 54;
    if (y < 64) y = r.bottom + 10;
    tool.style.left = x + "px"; tool.style.top = y + "px";
  }

  Object.assign(SG, { renderReader: render, showSelTool: showTool, hideSelTool: hideTool, readerPointAt: pointAt });
})(window.SG);

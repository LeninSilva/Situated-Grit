/* EPUB reader: unzips the user's own copy in the browser, maps spine files to the
   study guide's chapters, splits chapters into sections, and links every endnote,
   author footnote and image description to the exact spot in the text. Nothing leaves the device. */
(function (SG) {
  "use strict";

  const base = (p) => String(p || "").split("#")[0].split("/").pop();
  const KEEP = new Set(["p", "i", "em", "b", "strong", "span", "blockquote", "figure", "figcaption", "ul", "ol", "li", "table", "thead", "tbody", "tr", "td", "th", "br", "sup", "sub", "small", "u", "cite", "q", "div", "section", "aside", "img", "a", "hr"]);
  const DROP = new Set(["script", "style", "link", "meta", "title", "head", "h1", "h2", "nav", "svg", "math", "object", "iframe", "button", "input", "form"]);

  function parseDoc(str) {
    const dp = new DOMParser();
    let doc = dp.parseFromString(str, "application/xhtml+xml");
    if (doc.getElementsByTagName("parsererror").length) doc = dp.parseFromString(str, "text/html");
    return doc;
  }
  function resolvePath(fromPath, rel) {
    if (!rel) return rel;
    if (/^[a-z]+:/i.test(rel)) return rel;
    const parts = fromPath.split("/"); parts.pop();
    rel.split("/").forEach((seg) => { if (seg === "..") parts.pop(); else if (seg !== "." && seg !== "") parts.push(seg); });
    return parts.join("/");
  }
  function cleanClass(el) {
    const c = (el.getAttribute && el.getAttribute("class")) || "";
    return c.split(/\s+/).filter((x) => x && !/^calibre/.test(x)).map((x) => "x-" + x).join(" ");
  }
  function inlineHtml(node) {
    // Sanitize a note/description body into a small inline HTML string.
    let out = "";
    node.childNodes.forEach((n) => {
      if (n.nodeType === 3) out += SG.esc(n.nodeValue);
      else if (n.nodeType === 1) {
        const t = n.localName.toLowerCase();
        const inner = inlineHtml(n);
        if (t === "i" || t === "em" || (n.getAttribute("class") || "").match(/\btxit/)) out += "<i>" + inner + "</i>";
        else if (t === "b" || t === "strong" || (n.getAttribute("class") || "").match(/\btxbf/)) out += "<b>" + inner + "</b>";
        else if (t === "a" && /^https?:/i.test(n.getAttribute("href") || "")) out += '<a href="' + SG.esc(n.getAttribute("href")) + '" target="_blank" rel="noopener">' + inner + "</a>";
        else if (t === "br") out += "<br>";
        else out += inner;
      }
    });
    return out;
  }

  async function parseEpub(buf, onProgress) {
    if (!window.JSZip) throw new Error("The EPUB reader library did not load. Check your connection and reload the page.");
    const prog = onProgress || (() => {});
    let zip;
    try { zip = await window.JSZip.loadAsync(buf); } catch (e) { throw new Error("This file is not a readable EPUB (it could not be unzipped)."); }
    const contF = zip.file("META-INF/container.xml");
    if (!contF) throw new Error("This file is not an EPUB (META-INF/container.xml is missing).");
    const cont = await contF.async("string");
    const m = /full-path="([^"]+)"/.exec(cont);
    if (!m) throw new Error("The EPUB has no package file.");
    const opfPath = m[1];
    const opfStr = await zip.file(opfPath).async("string");
    const opf = parseDoc(opfStr);
    const titleEl = opf.getElementsByTagNameNS("*", "title")[0];
    const title = titleEl ? titleEl.textContent.trim() : "";
    const manifest = {};
    Array.from(opf.getElementsByTagNameNS("*", "item")).forEach((it) => {
      manifest[it.getAttribute("id")] = { href: resolvePath(opfPath, decodeURIComponent(it.getAttribute("href"))), type: it.getAttribute("media-type") };
    });
    const spine = Array.from(opf.getElementsByTagNameNS("*", "itemref")).map((r) => manifest[r.getAttribute("idref")]).filter(Boolean);

    // Which book is this?
    const spineBases = spine.map((s) => base(s.href));
    let cfg = null;
    Object.values(SG.books).forEach((b) => {
      if (cfg) return;
      if (b.match.test(title)) cfg = b;
    });
    if (!cfg) {
      Object.values(SG.books).forEach((b) => {
        if (!cfg && b.signature.every((f) => spineBases.includes(f))) cfg = b;
      });
    }
    if (!cfg) throw new Error('This EPUB ("' + (title || "untitled") + '") is not Situated or Grit. Load one of those two books.');
    prog("Reading " + cfg.title + "…");

    // Parse every spine document.
    const docs = {};
    for (const s of spine) {
      if (!/x?html/.test(s.type || "") && !/\.x?html?$/.test(s.href)) continue;
      const f = zip.file(s.href);
      if (!f) continue;
      docs[base(s.href)] = { path: s.href, doc: parseDoc(await f.async("string")) };
    }

    // Collect endnotes, author footnotes and image descriptions, keyed by "file#id" of the spot they belong to.
    const notes = {};
    Object.entries(docs).forEach(([b, { doc }]) => {
      const isDesc = /longdesc/.test(b) || /image descriptions/i.test((doc.querySelector("title") || {}).textContent || "");
      const isNotesFile = cfg.notesFiles.includes(b);
      Array.from(doc.querySelectorAll("li, p")).forEach((el) => {
        const cls = el.getAttribute("class") || "";
        const a = el.querySelector("a[href*='#']");
        if (!a) return;
        const kind = isDesc ? "desc" : /footnote/.test(cls) ? "foot" : (isNotesFile && /note/.test(cls)) ? "end" : null;
        if (!kind) return;
        const [file, id] = (a.getAttribute("href") || "").split("#");
        if (!id) return;
        const target = (file ? base(file) : b) + "#" + id;
        const label = a.textContent.replace(/\s+/g, " ").trim().replace(/[:.]$/, "");
        const clone = el.cloneNode(true);
        const ca = clone.querySelector("a[href*='#']");
        if (kind === "foot" || kind === "desc") {
          ca.remove();
        } else {
          const bEl = clone.ownerDocument.createElement("b");
          bEl.textContent = a.textContent.trim();
          ca.parentNode.replaceChild(bEl, ca);
        }
        let html = inlineHtml(clone).trim().replace(/^[.:]\s*/, "");
        notes[target] = { kind, label, html, text: clone.textContent.replace(/\s+/g, " ").trim().replace(/^[.:]\s*/, "") };
      });
    });

    // Image blobs, created once per path.
    const blobUrls = {};
    async function imgUrl(path) {
      if (blobUrls[path]) return blobUrls[path];
      const f = zip.file(path);
      if (!f) return "";
      const blob = await f.async("blob");
      const typed = blob.type ? blob : new Blob([blob], { type: /\.png$/i.test(path) ? "image/png" : /\.svg$/i.test(path) ? "image/svg+xml" : "image/jpeg" });
      blobUrls[path] = URL.createObjectURL(typed);
      return blobUrls[path];
    }

    const chapters = {};
    let done = 0;
    for (const ch of cfg.chapters) {
      if (!ch.files || !ch.files.length) continue;
      const present = ch.files.filter((f) => docs[f]);
      if (!present.length) continue;
      chapters[ch.id] = await buildChapter(cfg, ch, present.map((f) => ({ b: f, ...docs[f] })), notes, imgUrl);
      done++;
      prog("Preparing " + cfg.title + ": " + done + " of " + cfg.chapters.length + " parts");
    }
    // Notes grouped by chapter in reading order.
    return { bookId: cfg.id, title, chapters, notes };
  }

  async function buildChapter(cfg, ch, files, notes, imgUrl) {
    const doc = document.implementation.createHTMLDocument("x");
    const sections = [];
    let cur = null;
    let gritIx = 0;
    const noteOrder = [];
    let endN = 0;
    const imgJobs = [];

    function newSection(key, title) {
      const el = doc.createElement("section");
      el.className = "bsec";
      el.setAttribute("data-sec", key);
      cur = { key, title, el };
      sections.push(cur);
    }
    if (cfg.sectioning === "hr") newSection("s0", (ch.sections && ch.sections[0] && ch.sections[0].title) || "Section 1");
    else newSection("_open", ch.openTitle || "Opening");

    function makeRef(key, note) {
      const btn = doc.createElement("button");
      btn.className = "nref" + (note.kind === "foot" ? " foot" : "");
      btn.setAttribute("data-ui", "");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-note", key);
      if (note.kind === "foot") btn.textContent = note.label || "*";
      else { endN++; btn.textContent = String(endN); note.n = endN; }
      btn.setAttribute("aria-label", note.kind === "foot" ? "Author's footnote" : "Endnote " + endN);
      noteOrder.push(key);
      return btn;
    }

    function convert(node, fb) {
      if (node.nodeType === 3) return doc.createTextNode(node.nodeValue);
      if (node.nodeType !== 1) return null;
      const t = node.localName.toLowerCase();
      if (DROP.has(t) && !(t === ch.splitOn)) return null;
      const cls = node.getAttribute("class") || "";
      const id = node.getAttribute("id");
      const key = id ? fb.b + "#" + id : null;
      const note = key ? notes[key] : null;

      // Page markers
      if ((node.getAttribute("role") === "doc-pagebreak") || (t === "a" && id && /^page_/.test(id) && !node.getAttribute("href"))) {
        const pg = (node.getAttribute("aria-label") || id.replace(/^page_/, "")).trim();
        const s = doc.createElement("span"); s.className = "pg"; s.setAttribute("data-page", pg);
        return s;
      }
      if (t === "p" && /\bfootnote\b/.test(cls)) return null;
      if (t === "hr") return null;
      if (t === "a" && /longdesc/.test(node.getAttribute("href") || "")) return null;

      const frag = doc.createDocumentFragment();
      if (note && (note.kind === "end" || note.kind === "foot")) {
        frag.appendChild(makeRef(key, note));
        if (note.kind === "foot") return frag; // the footnote marker replaces the superscript numeral
      }

      let el;
      if (t === "img") {
        const src = node.getAttribute("src") || "";
        if (node.getAttribute("role") === "presentation" || /common0?\d*\.jpe?g$|commonp\.jpe?g$/i.test(src) || /\bmid\b/.test(cls)) return frag.childNodes.length ? frag : null;
        el = doc.createElement("img");
        const path = resolvePath(fb.path, src);
        el.setAttribute("alt", node.getAttribute("alt") || "");
        el.setAttribute("loading", "lazy");
        imgJobs.push(imgUrl(path).then((u) => el.setAttribute("src", u)));
      } else if (t === "a") {
        const href = node.getAttribute("href") || "";
        if (/^https?:/i.test(href)) { el = doc.createElement("a"); el.setAttribute("href", href); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
        else el = doc.createDocumentFragment();
      } else if (t === "table") {
        const wrap = doc.createElement("div"); wrap.className = "tablewrap";
        el = doc.createElement("table"); wrap.appendChild(el);
        Array.from(node.childNodes).forEach((c) => { const k = convert(c, fb); if (k) el.appendChild(k); });
        frag.appendChild(wrap);
        return frag;
      } else if (t === "h3" || t === "h4" || t === "h5" || t === "h6") {
        el = doc.createElement("p"); el.className = "x-subhead";
      } else if (KEEP.has(t)) {
        el = doc.createElement(t === "section" || t === "aside" ? "div" : t);
        const c = cleanClass(node); if (c) el.className = c;
      } else {
        el = doc.createDocumentFragment();
      }
      if (t !== "img") Array.from(node.childNodes).forEach((c) => { const k = convert(c, fb); if (k) el.appendChild(k); });
      frag.appendChild(el);
      if (note && note.kind === "desc") {
        const d = doc.createElement("details"); d.className = "figdesc"; d.setAttribute("data-ui", "");
        d.innerHTML = "<summary>Image description</summary>" + note.html;
        frag.appendChild(d);
      }
      return frag;
    }

    function flow(node, fb) {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType !== 1) {
          if (n.nodeType === 3 && n.nodeValue.trim()) cur.el.appendChild(doc.createTextNode(n.nodeValue));
          return;
        }
        const t = n.localName.toLowerCase();
        const cls = n.getAttribute("class") || "";
        if (t === "section" || t === "body" || (t === "div" && !/\bbox\b/.test(cls) && n.querySelector("h3, hr"))) {
          // A page-break span sitting directly in a section is kept; recurse for headings.
          flow(n, fb); return;
        }
        if (cfg.sectioning === "h3" && t === (ch.splitOn || "h3")) {
          const title = n.textContent.replace(/\s+/g, " ").trim();
          newSection(SG.slug(title), title);
          return;
        }
        if (cfg.sectioning === "hr" && t === "hr" && /\bhrb\b/.test(cls)) {
          gritIx++;
          const meta = ch.sections && ch.sections[gritIx];
          newSection("s" + gritIx, (meta && meta.title) || "Section " + (gritIx + 1));
          return;
        }
        if (t === "hr") return;
        const k = convert(n, fb);
        if (k) cur.el.appendChild(k);
      });
    }

    files.forEach((f) => {
      const body = f.doc.body || f.doc.getElementsByTagName("body")[0];
      if (body) flow(body, { path: f.path, b: f.b });
    });

    await Promise.all(imgJobs);

    // Collapse runs of page markers (a page that only held a heading) to the last one.
    sections.forEach((s) => {
      Array.from(s.el.querySelectorAll(".pg")).forEach((pg) => {
        let n = pg.nextSibling;
        while (n && n.nodeType === 3 && !n.nodeValue.trim()) n = n.nextSibling;
        if (n && n.nodeType === 1 && n.classList.contains("pg")) pg.remove();
      });
    });
    // Drop empty sections (e.g. nothing before the first heading).
    const kept = sections.filter((s) => s.el.textContent.trim() || s.el.querySelector("img"));
    const root = doc.createElement("div");
    const blocks = [];
    let pid = 0, page = "";
    kept.forEach((s, i) => {
      const h = doc.createElement("h3"); h.className = "bsec-h"; h.id = "sec-" + s.key; h.textContent = s.title;
      if (!(s.key === "_open" && i === 0)) s.el.insertBefore(h, s.el.firstChild);
      // Number paragraph-level blocks for highlights and search.
      // Walk page markers and blocks in document order so each block knows the print page it starts on.
      const cands = Array.from(s.el.querySelectorAll(".pg, p, li, figcaption, td"));
      cands.forEach((b) => {
        if (b.classList.contains("pg")) { page = b.getAttribute("data-page") || page; return; }
        if ((b.localName === "li" || b.localName === "td") && b.querySelector("p")) return;
        if (b.closest("[data-ui]")) return;
        if (b.parentElement && b.parentElement.closest("p, li, figcaption")) return;
        pid++;
        b.setAttribute("data-pid", String(pid));
        const txt = SG.contentText(b).replace(/\s+/g, " ").trim();
        if (txt) blocks.push({ pid: String(pid), sec: s.key, text: txt, page });
      });
      root.appendChild(s.el);
    });
    return {
      id: ch.id,
      html: root.innerHTML,
      sections: kept.map((s) => ({ key: s.key, title: s.title })),
      blocks,
      notes: noteOrder.map((k) => Object.assign({ key: k }, notes[k])),
    };
  }

  /* Text of a block that ignores injected UI (note markers, annotation markers). */
  function contentText(el) {
    let s = "";
    const walk = (n) => {
      if (n.nodeType === 3) { s += n.nodeValue; return; }
      if (n.nodeType === 1 && n.hasAttribute && n.hasAttribute("data-ui")) return;
      n.childNodes && n.childNodes.forEach(walk);
    };
    walk(el);
    return s;
  }
  function slug(s) { return String(s).toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "x"; }

  Object.assign(SG, { parseEpub, contentText, slug });
})(window.SG);

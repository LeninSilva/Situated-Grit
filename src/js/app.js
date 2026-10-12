/* App shell: router, pages (home, intro, book, chapter tabs, glossary, notebook),
   drawers, search, import/export, and EPUB loading. */
(function (SG) {
  "use strict";
  const { $, $$, esc, md, inline } = SG;
  SG.loaded = { situated: null, grit: null };
  SG.loadMsg = {};

  /* ---------------- content helpers ---------------- */
  SG.book = (bid) => SG.books[bid];
  SG.chapter = (bid, chid) => (SG.books[bid] ? SG.books[bid].chapters.find((c) => c.id === chid) : null);
  SG.sectionGuide = (bid, chid, key, index) => {
    const ch = SG.chapter(bid, chid);
    if (!ch || !ch.sections) return null;
    if (SG.books[bid].sectioning === "hr") { const m = /^s(\d+)$/.exec(key); return m ? ch.sections[+m[1]] || null : null; }
    return ch.sections.find((s) => (s.key || SG.slug(s.title)) === key) || null;
  };
  SG.termChip = (id) => {
    const t = SG.glossary[id];
    return '<a class="chip" href="#/glossary/' + esc(id) + '" data-term="' + esc(id) + '">' + esc(t ? t.term : id) + "</a>";
  };
  const chLabel = (ch) => (ch.num != null && ch.num !== "" ? (typeof ch.num === "number" ? "Chapter " + ch.num : ch.num) : ch.title);
  const route = (...p) => "#/" + p.filter((x) => x != null && x !== "").map(encodeURIComponent).join("/");

  /* ---------------- theme & settings ---------------- */
  function applySettings() {
    const st = SG.data.settings;
    const root = document.documentElement;
    if (st.theme === "light" || st.theme === "dark") root.setAttribute("data-theme", st.theme); else root.removeAttribute("data-theme");
    root.style.setProperty("--read-size", st.size + "rem");
    const tb = $("#themeBtn");
    if (tb) { tb.title = "Theme: " + st.theme; tb.setAttribute("aria-label", "Theme: " + st.theme + ". Click to change."); tb.querySelector("span").textContent = st.theme === "system" ? "Auto" : st.theme === "dark" ? "Dark" : "Light"; }
  }

  /* ---------------- shell ---------------- */
  const ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  };
  function shell() {
    document.body.innerHTML =
      '<header class="topbar">' +
      '<button class="iconbtn menubtn" id="menuBtn" aria-label="Open navigation" aria-expanded="false">' + ICON.menu + "</button>" +
      '<a class="brand" href="#/"><b>Situated <i>×</i> Grit</b><span>Book club companion</span></a>' +
      '<div class="grow"><div class="crumbs" id="crumbs"></div></div>' +
      '<button class="iconbtn searchbtn" id="searchBtn" aria-label="Search everything">' + ICON.search + '<span class="lbl">Search books, notes, terms</span><kbd>/</kbd></button>' +
      '<button class="iconbtn" id="themeBtn">' + ICON.moon + "<span>Auto</span></button>" +
      "</header>" +
      '<div class="shell"><nav class="rail" id="rail" aria-label="Contents"></nav><div class="scrim" id="scrim"></div><main id="main" tabindex="-1"></main></div>' +
      '<input type="file" id="fileIn" accept=".epub,application/epub+zip" multiple hidden>';
    $("#menuBtn").onclick = () => toggleRail();
    $("#scrim").onclick = () => toggleRail(false);
    $("#searchBtn").onclick = () => openSearch("");
    $("#themeBtn").onclick = () => {
      const order = ["system", "light", "dark"];
      SG.data.settings.theme = order[(order.indexOf(SG.data.settings.theme) + 1) % 3];
      SG.save(); applySettings(); SG.toast("Theme: " + SG.data.settings.theme);
    };
    $("#fileIn").addEventListener("change", (e) => { loadFiles(e.target.files); e.target.value = ""; });
  }
  function toggleRail(force) {
    const r = $("#rail"), s = $("#scrim");
    const open = force == null ? !r.classList.contains("open") : force;
    r.classList.toggle("open", open); s.classList.toggle("open", open);
    $("#menuBtn").setAttribute("aria-expanded", String(open));
  }

  function renderRail(cur) {
    const r = $("#rail");
    const act = (h) => (location.hash || "#/") === h || (cur && cur.startsWith(h) && h.length > 3) ? " active" : "";
    let h = '<h4>Study</h4>' +
      '<a class="navlink' + ((location.hash || "#/") === "#/" ? " active" : "") + '" href="#/">Home</a>' +
      '<a class="navlink' + act("#/intro") + '" href="#/intro"><span class="n">0</span>Before You Begin</a>';
    if (cur && cur.startsWith("#/intro")) {
      h += '<div class="navsub">' + SG.intro.sections.map((s) => '<a class="navlink" href="' + route("intro", s.id) + '">' + esc(s.title) + "</a>").join("") + "</div>";
    }
    h += '<a class="navlink' + act("#/glossary") + '" href="#/glossary">Glossary of key terms</a>' +
      '<a class="navlink' + act("#/notebook") + '" href="#/notebook">My notebook</a>' +
      '<a class="navlink' + act("#/library") + '" href="#/library">Load / manage books</a>';
    Object.values(SG.books).forEach((b) => {
      h += '<div class="bookhead"><span class="dot' + (SG.loaded[b.id] ? " on" : "") + '" title="' + (SG.loaded[b.id] ? "Book text loaded" : "Book text not loaded") + '"></span><a href="' + route("book", b.id) + '">' + esc(b.title) + "</a></div>";
      let part = null;
      b.chapters.forEach((c) => {
        if (c.part !== part && c.partLabel !== undefined) { part = c.part; if (c.partLabel) h += '<div class="partlabel">' + esc(c.partLabel) + "</div>"; }
        const href = route("book", b.id, c.id);
        const isCur = cur && (cur === href || cur.startsWith(href + "/"));
        h += '<a class="navlink' + (isCur ? " active" : "") + '" href="' + href + '"><span class="n">' + esc(c.short || (typeof c.num === "number" ? c.num : "·")) + "</span>" + esc(c.title) + (SG.data.read[b.id + "/" + c.id] ? '<span class="chk" title="Marked as read">✓</span>' : "") + "</a>";
        if (isCur && cur.includes("/read")) {
          const p = SG.loaded[b.id] && SG.loaded[b.id].chapters[c.id];
          const secs = p ? p.sections : (c.sections || []).map((s, i) => ({ key: b.sectioning === "hr" ? "s" + i : s.key || SG.slug(s.title), title: s.title }));
          if (secs.length > 1) h += '<div class="navsub">' + secs.map((s) => '<a class="navlink" href="' + route("book", b.id, c.id, "read", s.key) + '">' + esc(s.title) + "</a>").join("") + "</div>";
        }
      });
    });
    r.innerHTML = h;
  }
  function crumbs(parts) {
    $("#crumbs").innerHTML = parts.map((p) => (p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : esc(p[0]))).join(" &nbsp;/&nbsp; ");
  }

  /* ---------------- router ---------------- */
  function parse() {
    const raw = (location.hash || "#/").replace(/^#\/?/, "");
    return raw.split("/").filter(Boolean).map((x) => { try { return decodeURIComponent(x); } catch (e) { return x; } });
  }
  let lastRoute = "";
  function router() {
    const p = parse();
    const main = $("#main");
    closeAll();
    toggleRail(false);
    SG.hideSelTool && SG.hideSelTool();
    const hash = location.hash || "#/";
    renderRail(hash);
    const pageChanged = hash.split("/").slice(0, 5).join("/") !== lastRoute.split("/").slice(0, 5).join("/");
    lastRoute = hash;
    try {
      if (!p.length) pageHome(main);
      else if (p[0] === "intro") pageIntro(main, p[1]);
      else if (p[0] === "glossary") pageGlossary(main, p[1]);
      else if (p[0] === "notebook") pageNotebook(main);
      else if (p[0] === "library") pageLibrary(main);
      else if (p[0] === "book" && SG.books[p[1]] && !p[2]) pageBook(main, p[1]);
      else if (p[0] === "book" && SG.chapter(p[1], p[2])) pageChapter(main, p[1], p[2], p[3] || "guide", p[4]);
      else pageMissing(main);
    } catch (e) {
      console.error(e);
      main.innerHTML = '<div class="page"><p class="eyebrow">Something went wrong</p><h1 class="display">This page failed to load</h1><p>' + esc(e.message) + '</p><a class="btn" href="#/">Go home</a></div>';
    }
    if (p[0] !== "book" || !p[3] || p[3] !== "read" || !p[4]) { if (pageChanged) window.scrollTo(0, 0); }
    if (p[0] === "glossary" && p[1]) openTerm(p[1], true);
    SG.data.last = hash; SG.save();
  }
  SG.go = (h) => { if (location.hash === h) router(); else location.hash = h; };

  function pageMissing(main) {
    crumbs([["Not found"]]);
    main.innerHTML = '<div class="page"><p class="eyebrow">Not found</p><h1 class="display">That page does not exist</h1><p class="lede">The link may be from an older version. Use the contents on the left or search.</p><a class="btn" href="#/">Go home</a></div>';
  }

  /* ---------------- home ---------------- */
  function bookStatusHtml() {
    return '<div class="bookstatus">' + Object.values(SG.books).map((b) => {
      const ok = !!SG.loaded[b.id];
      const msg = SG.loadMsg[b.id];
      return '<div class="row"><b>' + esc(b.title) + '</b><span class="pill ' + (ok ? "ok" : "no") + '">' + (ok ? "Text loaded" : msg ? esc(msg) : "Not loaded") + "</span>" +
        (ok ? '<button class="btn small ghost" style="margin-left:auto" data-act="unload" data-book="' + b.id + '">Remove</button>' : "") + "</div>";
    }).join("") + "</div>";
  }
  function loadPanelHtml() {
    return '<div class="loadpanel" id="drop"><p style="margin:0 0 10px"><b>Load your EPUB copies of the books</b> to read the full text here, with the original endnotes, page numbers, figures, highlights and margin notes. The files are read in this browser and stored only on this device. Nothing is uploaded.</p>' +
      '<div class="btnrow"><button class="btn" data-act="pick">' + ICON.book + " Choose EPUB files</button><span class=\"muted small\">or drag and drop both files here</span></div>" + bookStatusHtml() + "</div>";
  }
  function pageHome(main) {
    crumbs([["Home"]]);
    const last = SG.data.last && SG.data.last !== "#/" && SG.data.last !== location.hash ? SG.data.last : null;
    const counts = { h: SG.data.highlights.length, n: Object.values(SG.data.notes).filter((x) => (x || "").trim()).length, a: Object.values(SG.data.answers).filter((x) => (x || "").trim() && x !== "1").length };
    main.innerHTML = '<div class="page wide">' +
      '<section class="hero"><p class="eyebrow">Angela Duckworth · a study companion</p><h1 class="display">Situated <span class="x">×</span> <span class="accent">Grit</span></h1>' +
      '<p class="lede" style="max-width:62ch">Two books, one argument across ten years. <i>Grit</i> (2016) asked what successful people bring to their work. <i>Situated</i> (2026) asks what their work, and their world, brings to them. This companion walks you through both, chapter by chapter and section by section: the argument in the author\'s voice, the research behind it, the critics, the vocabulary, and the questions worth bringing to your book club.</p>' +
      '<div class="btnrow"><a class="btn" href="#/intro">Start with Before You Begin</a><a class="btn ghost" href="' + route("book", "situated", "prologue") + '">Open Situated</a><a class="btn ghost" href="' + route("book", "grit", "preface") + '">Open Grit</a>' + (last ? '<a class="btn ghost" href="' + esc(last) + '">Continue where you left off</a>' : "") + "</div></section>" +
      '<h2 class="h">Your books</h2>' + loadPanelHtml() +
      '<h2 class="h">Ways in</h2><div class="cards">' +
      '<a class="card" href="#/intro"><span class="k">Chapter 0</span><span class="t">Before You Begin</span><p>The vocabulary, the history of the person–situation debate, the critics of grit, and how to read both books well.</p></a>' +
      '<a class="card" href="' + route("book", "situated") + '"><span class="k">2026 · 4 parts · 13 chapters</span><span class="t">Situated</span><p>Find the people and places that bring out your best: awareness, agency, responsibility.</p></a>' +
      '<a class="card" href="' + route("book", "grit") + '"><span class="k">2016 · 3 parts · 13 chapters</span><span class="t">Grit</span><p>The power of passion and perseverance, and how to grow it from the inside out and the outside in.</p></a>' +
      '<a class="card" href="#/glossary"><span class="k">' + Object.keys(SG.glossary).length + ' terms</span><span class="t">Glossary</span><p>Every technical term, with its origin, the current research, and where it shows up in the books.</p></a>' +
      '<a class="card" href="#/notebook"><span class="k">' + counts.h + " highlights · " + counts.n + " notes · " + counts.a + ' answers</span><span class="t">Notebook</span><p>All your highlights and notes in one place. Filter by color, export to Markdown, back up as a file.</p></a>' +
      "</div>" +
      '<h2 class="h">How to use this companion</h2><div class="prose"><ul>' +
      "<li><b>Guide</b> tab on every chapter: the thesis, the argument in the author's voice, diagrams, section-by-section summaries, the sources and where they come from, the critics, and why it matters.</li>" +
      "<li><b>Read</b> tab: the verbatim text from your EPUB, with a guide card at the top of every section. Select any passage to highlight it in one of five colors or attach a note. Numbered tabs open the book's own endnotes. Black ✦ markers open graduate-level margin notes. Dotted underlines open the glossary.</li>" +
      "<li><b>Sources</b> tab: every endnote for the chapter, searchable, each linked back to its spot in the text, plus an annotated list of the key studies.</li>" +
      "<li><b>Discuss</b> tab: comprehension, critical (graduate-level), personal, and book-club questions, each with space to draft your answer.</li>" +
      "<li>Press <b>/</b> anywhere to search both books, the endnotes, the guides, the glossary, and your own notes. Use <b>[</b> and <b>]</b> to move between sections while reading.</li></ul></div>" +
      "</div>";
    wireDrop();
  }
  function pageLibrary(main) {
    crumbs([["Home", "#/"], ["Books"]]);
    main.innerHTML = '<div class="page"><p class="eyebrow">Library</p><h1 class="display">Load your books</h1>' + loadPanelHtml() +
      '<h2 class="h">Why load a file?</h2><div class="prose"><p>The study guides, diagrams, glossary and questions work without the books. The full text is copyrighted, so this companion does not ship it. Instead it reads the EPUB you already own, entirely inside your browser. Supported editions: <i>Situated: Find the People and Places That Bring Out Your Best</i> (Simon &amp; Schuster, 2026) and <i>Grit: The Power of Passion and Perseverance</i> (Scribner, 2016). Other editions may load with slightly different section breaks.</p><p>Your highlights, notes and answers are stored in this browser. Use the notebook\'s backup button to save them to a file or move them to another device.</p></div></div>';
    wireDrop();
  }
  function wireDrop() {
    const d = $("#drop"); if (!d) return;
    ["dragenter", "dragover"].forEach((ev) => d.addEventListener(ev, (e) => { e.preventDefault(); d.classList.add("drag"); }));
    ["dragleave", "drop"].forEach((ev) => d.addEventListener(ev, (e) => { e.preventDefault(); d.classList.remove("drag"); }));
    d.addEventListener("drop", (e) => { if (e.dataTransfer && e.dataTransfer.files) loadFiles(e.dataTransfer.files); });
  }

  /* ---------------- loading EPUBs ---------------- */
  async function loadFiles(files) {
    const list = Array.from(files || []);
    if (!list.length) return;
    for (const f of list) {
      SG.toast("Reading " + f.name + "…");
      try {
        const buf = await f.arrayBuffer();
        const parsed = await SG.parseEpub(buf, (m) => { SG.toast(m); });
        SG.loaded[parsed.bookId] = parsed;
        SG.loadMsg[parsed.bookId] = "";
        SG.index = null;
        const stored = await SG.idbPut("epub:" + parsed.bookId, buf);
        SG.toast(SG.books[parsed.bookId].title + " loaded" + (stored ? " and saved on this device" : " (this browser will not keep it after you close the page)"));
      } catch (e) {
        console.error(e);
        SG.toast(e.message || "That file could not be read.");
      }
    }
    router();
  }
  async function restoreBooks() {
    for (const bid of Object.keys(SG.books)) {
      const buf = await SG.idbGet("epub:" + bid);
      if (!buf) continue;
      SG.loadMsg[bid] = "Loading…";
      try { SG.loaded[bid] = await SG.parseEpub(buf); SG.loadMsg[bid] = ""; }
      catch (e) { SG.loadMsg[bid] = "Could not reopen"; console.error(e); }
      SG.index = null;
    }
  }

  /* ---------------- intro ---------------- */
  function pageIntro(main, secId) {
    crumbs([["Home", "#/"], ["Before You Begin"]]);
    const I = SG.intro;
    main.innerHTML = '<div class="page"><p class="eyebrow">Chapter 0 · written for this companion</p><h1 class="display">Before <span class="accent">You Begin</span></h1><p class="lede">' + inline(I.lede) + "</p>" +
      '<div class="callout"><h4 class="h" style="margin-top:0">In this chapter</h4><ol class="prose" style="margin:0">' + I.sections.map((s) => '<li><a href="' + route("intro", s.id) + '">' + esc(s.title) + "</a></li>").join("") + "</ol></div>" +
      I.sections.map((s, i) => '<section id="intro-' + esc(s.id) + '" style="scroll-margin-top:80px"><p class="eyebrow" style="margin-top:48px">Part ' + (i + 1) + '</p><h2 class="h" style="margin-top:0">' + esc(s.title) + '</h2><div class="prose">' + md(s.body) + "</div>" +
        (s.timeline ? '<ol class="tl">' + s.timeline.map((t) => '<li><span class="yr">' + esc(t[0]) + '</span><span class="ev"><b>' + inline(t[1]) + "</b><span>" + inline(t[2]) + "</span></span></li>").join("") + "</ol>" : "") +
        (s.after ? '<div class="prose">' + md(s.after) + "</div>" : "") +
        noteBox("intro/" + s.id, "My notes on this part") + "</section>").join("") +
      '<div class="chapend"><a class="btn ghost" href="#/glossary">Browse the glossary</a><a class="btn" href="' + route("book", "situated", "prologue") + '">Begin Situated →</a></div></div>';
    if (secId) { const el = document.getElementById("intro-" + secId); if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 0); }
  }
  function noteBox(key, label, ph) {
    const id = "nb-" + key.replace(/[^a-z0-9]+/gi, "-");
    return '<div style="margin-top:14px"><label class="small muted" for="' + id + '" style="font-weight:600">' + esc(label) + '</label><span class="saved" data-saved-for="' + esc(key) + '">Saved</span><textarea id="' + id + '" data-save="notes:' + esc(key) + '" placeholder="' + esc(ph || "Write as much or as little as you like. Notes are saved automatically.") + '">' + esc(SG.data.notes[key] || "") + "</textarea></div>";
  }

  /* ---------------- book page ---------------- */
  function pageBook(main, bid) {
    const b = SG.books[bid];
    crumbs([["Home", "#/"], [b.title]]);
    let part = null;
    let list = "";
    b.chapters.forEach((c) => {
      if (c.part !== part && c.partLabel !== undefined) { part = c.part; if (c.partLabel) list += '<h2 class="h">' + esc(c.partLabel) + "</h2>" + (c.partEpigraph ? '<p class="muted" style="font-family:var(--font-read);font-style:italic;margin-top:-6px">' + esc(c.partEpigraph) + "</p>" : ""); }
      list += '<a class="card" style="margin-bottom:10px" href="' + route("book", bid, c.id) + '"><span class="k">' + esc(chLabel(c)) + (SG.data.read[bid + "/" + c.id] ? " · ✓ read" : "") + '</span><span class="t" style="font-size:1.35rem">' + esc(c.title) + "</span>" + (c.thesis ? "<p>" + inline(c.thesis) + "</p>" : "") + "</a>";
    });
    main.innerHTML = '<div class="page"><p class="eyebrow">' + esc(b.author) + " · " + esc(b.publisher) + " · " + b.year + '</p><h1 class="display">' + esc(b.title) + '</h1><p class="lede">' + esc(b.subtitle) + "</p>" +
      '<div class="prose">' + md(b.about) + "</div>" + (b.diagram ? SG.diagramHtml(b.diagram) : "") +
      (SG.loaded[bid] ? '<p class="small muted">✓ Your EPUB is loaded. Every chapter\'s Read tab shows the full text.</p>' : '<div class="callout"><p style="margin:0 0 8px">The book text is not loaded yet. Guides and questions work without it.</p><button class="btn small" data-act="pick">Load your EPUB</button></div>') +
      list + "</div>";
  }

  /* ---------------- chapter page ---------------- */
  const TABS = [["guide", "Guide"], ["read", "Read"], ["sources", "Sources"], ["discuss", "Discuss"]];
  function neighbors(bid, chid) {
    const arr = SG.books[bid].chapters; const i = arr.findIndex((c) => c.id === chid);
    return { prev: arr[i - 1] || null, next: arr[i + 1] || null };
  }
  function pageChapter(main, bid, chid, tab, sec) {
    const b = SG.books[bid], ch = SG.chapter(bid, chid);
    if (!TABS.some((t) => t[0] === tab)) tab = "guide";
    crumbs([["Home", "#/"], [b.title, route("book", bid)], [chLabel(ch) + (typeof ch.num === "number" ? ": " + ch.title : ""), route("book", bid, chid)], [TABS.find((t) => t[0] === tab)[1]]]);
    const nb = neighbors(bid, chid);
    const isNum = typeof ch.num === "number";
    const readKey = bid + "/" + chid;
    let h = '<div class="page">' +
      '<div class="chhero"><div class="chnum' + (isNum ? "" : " word") + '">' + esc(isNum ? ch.num : (ch.short || "·")) + '</div><div class="chmeta">' + esc(b.title) + (ch.partLabel || ch.partName ? " · " + esc(ch.partName || ch.partLabel) : "") + '</div><h1 class="chtitle">' + esc(ch.title) + "</h1></div>" +
      (ch.thesis ? '<p class="thesis">' + inline(ch.thesis) + "</p>" : "") +
      '<div class="chtools"><button class="btn small ghost" data-act="markread" data-key="' + readKey + '">' + (SG.data.read[readKey] ? "✓ Marked as read" : "Mark as read") + "</button>" +
      (nb.prev ? '<a class="btn small ghost" href="' + route("book", bid, nb.prev.id, tab === "read" ? "read" : tab) + '">← ' + esc(nb.prev.title) + "</a>" : "") +
      (nb.next ? '<a class="btn small ghost" href="' + route("book", bid, nb.next.id, tab === "read" ? "read" : tab) + '">' + esc(nb.next.title) + " →</a>" : "") + "</div>" +
      '<nav class="tabs" aria-label="Chapter views">' + TABS.map((t) => '<a class="tab' + (t[0] === tab ? " on" : "") + '" href="' + route("book", bid, chid, t[0]) + '"' + (t[0] === tab ? ' aria-current="page"' : "") + ">" + t[1] + "</a>").join("") + "</nav>" +
      '<div id="tabbody"></div>' +
      '<div class="chapend">' + (nb.prev ? '<a class="btn ghost" href="' + route("book", bid, nb.prev.id, tab) + '">← ' + esc(chLabel(nb.prev)) + "</a>" : "<span></span>") + (nb.next ? '<a class="btn" href="' + route("book", bid, nb.next.id, tab) + '">' + esc(chLabel(nb.next)) + ": " + esc(nb.next.title) + " →</a>" : '<a class="btn" href="#/notebook">Open my notebook</a>') + "</div></div>";
    main.innerHTML = h;
    const body = $("#tabbody");
    if (tab === "guide") tabGuide(body, bid, ch);
    else if (tab === "read") tabRead(body, bid, ch, sec);
    else if (tab === "sources") tabSources(body, bid, ch);
    else tabDiscuss(body, bid, ch);
  }

  function tabGuide(body, bid, ch) {
    let h = "";
    const blk = (title, html, id) => (html ? '<h2 class="h" id="' + (id || "") + '">' + esc(title) + "</h2>" + html : "");
    h += blk("The argument in brief", ch.overview ? '<div class="prose">' + md(ch.overview) + "</div>" : "");
    if (ch.voice) h += '<h2 class="h">In the author\'s voice</h2><div class="voice"><div class="who">A charitable reconstruction, paraphrased in Duckworth\'s first person. Her verbatim words are in the Read tab.</div><div class="prose">' + md(ch.voice) + "</div></div>";
    if (ch.quotes && ch.quotes.length) h += '<h4 class="h">Key lines, verbatim</h4>' + ch.quotes.map((q) => '<blockquote class="quote"><q>' + esc(q.text) + "</q>" + (q.page ? '<span class="pg">p. ' + esc(q.page) + "</span>" : "") + "</blockquote>").join("");
    (ch.diagrams || []).forEach((d) => { h += SG.diagramHtml(d); });
    // Section by section
    const secs = ch.sections || [];
    if (secs.length) {
      h += '<h2 class="h">Section by section</h2><div class="seclist">' + secs.map((s, i) => {
        const key = SG.books[bid].sectioning === "hr" ? "s" + i : s.key || SG.slug(s.title);
        return '<div class="seccard"><span class="ix">' + (i + 1) + '</span><p class="st">' + esc(s.title) + "</p>" + (s.gist ? '<p class="sg">' + inline(s.gist) + "</p>" : "") +
          (s.q ? '<p class="sq"><b>Ask</b>' + inline(s.q) + "</p>" : "") +
          '<a class="btn small ghost go" href="' + route("book", bid, ch.id, "read", key) + '">Read this section →</a></div>';
      }).join("") + "</div>";
    }
    h += blk("Where the ideas come from", ch.origins ? '<div class="prose">' + md(ch.origins) + "</div>" : "");
    if (ch.evidence && ch.evidence.length) h += '<h2 class="h">The evidence, annotated</h2><ul class="srclist">' + ch.evidence.map((e) => '<li><div class="cite">' + inline(e.cite) + '</div><div class="why">' + inline(e.note) + "</div></li>").join("") + "</ul>";
    h += blk("The debate: critics and current research", ch.debates ? '<div class="prose">' + md(ch.debates) + "</div>" : "");
    if (ch.people && ch.people.length) h += '<h2 class="h">Who else is in this conversation</h2><div class="people">' + ch.people.map((p) => '<div class="person"><b>' + esc(p[0]) + "</b><span>" + inline(p[1]) + "</span></div>").join("") + "</div>";
    h += blk("Why it matters", ch.why ? '<div class="prose">' + md(ch.why) + "</div>" : "");
    if (ch.terms && ch.terms.length) h += '<h2 class="h">Key terms in this chapter</h2><div class="chips termchips">' + ch.terms.map((t) => SG.termChip(t)).join("") + "</div>";
    h += '<h2 class="h">My chapter notes</h2>' + noteBox(bid + "/" + ch.id, "Notes for " + chLabel(ch), "Your overall take, connections to your own life, things to raise at book club…");
    body.innerHTML = h;
  }

  function tabRead(body, bid, ch, sec) {
    const p = SG.loaded[bid];
    if (!p || !p.chapters[ch.id]) {
      const why = !p ? (SG.loadMsg[bid] === "Loading…" ? '<p>Opening your saved copy of the book…</p>' : "<p>The verbatim text comes from your own EPUB. Load it once and it stays on this device.</p>") : "<p>This part of the book was not found in the EPUB you loaded. It may be a different edition.</p>";
      body.innerHTML = '<div class="callout">' + why + (!p ? '<button class="btn" data-act="pick">' + ICON.book + " Load your EPUB of " + esc(SG.books[bid].title) + "</button>" : "") + "</div>" +
        ((ch.sections || []).length ? '<h2 class="h">Sections in this chapter</h2><div class="seclist">' + ch.sections.map((s, i) => '<div class="seccard"><span class="ix">' + (i + 1) + '</span><p class="st">' + esc(s.title) + '</p><p class="sg">' + inline(s.gist || "") + "</p></div>").join("") + "</div>" : "");
      return;
    }
    const pch = p.chapters[ch.id];
    const st = SG.data.settings;
    body.innerHTML = '<div class="readbar" id="readbar"><label class="sr" for="secSel">Jump to section</label><select id="secSel">' + pch.sections.map((s, i) => '<option value="' + esc(s.key) + '">' + (i + 1) + ". " + esc(s.title) + "</option>").join("") + "</select>" +
      '<button class="iconbtn" data-act="secprev" title="Previous section ([)" aria-label="Previous section">‹</button><button class="iconbtn" data-act="secnext" title="Next section (])" aria-label="Next section">›</button>' +
      '<div class="toggles"><button class="chip' + (st.guidesOpen ? " on" : "") + '" data-act="toggle" data-set="guidesOpen" aria-pressed="' + !!st.guidesOpen + '">Guides</button><button class="chip' + (st.annos ? " on" : "") + '" data-act="toggle" data-set="annos" aria-pressed="' + !!st.annos + '">✦ Scholar notes</button><button class="chip' + (st.terms ? " on" : "") + '" data-act="toggle" data-set="terms" aria-pressed="' + !!st.terms + '">Terms</button><button class="chip' + (st.pages ? " on" : "") + '" data-act="toggle" data-set="pages" aria-pressed="' + !!st.pages + '">Page nos.</button>' +
      '<button class="chip" data-act="font" data-d="-1" aria-label="Smaller text">A−</button><button class="chip" data-act="font" data-d="1" aria-label="Larger text">A+</button></div></div>' +
      '<div id="reader"></div><p class="small muted" style="margin-top:24px">Select any passage to highlight it or add a note. Highlight colors: ' + ["yellow", "orange", "pink", "sky", "mint"].map((c) => '<mark class="hl hl-' + c + '">' + esc(SG.data.labels[c]) + "</mark>").join(" ") + ' (rename them in your <a href="#/notebook">notebook</a>).</p>';
    const rd = $("#reader");
    SG.renderReader(rd, bid, ch.id);
    SG.current = { bid, chid: ch.id };
    const sel = $("#secSel");
    sel.onchange = () => gotoSection(sel.value, true);
    // Track the section in view.
    if (SG.secObs) SG.secObs.disconnect();
    SG.secObs = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { const k = en.target.getAttribute("data-sec"); if (sel.value !== k) sel.value = k; } });
    }, { rootMargin: "-120px 0px -65% 0px" });
    $$(".bsec", rd).forEach((s) => SG.secObs.observe(s));
    if (sec) setTimeout(() => gotoSection(sec, false), 0);
    if (SG.pendingFlash) {
      const f = SG.pendingFlash; SG.pendingFlash = null;
      setTimeout(() => {
        const el = f.note ? rd.querySelector('.nref[data-note="' + CSS.escape(f.note) + '"]') : rd.querySelector('[data-pid="' + f.pid + '"]');
        if (el) { el.scrollIntoView({ block: "center" }); const target = f.note ? el.closest("[data-pid]") || el : el; target.classList.add("flash"); setTimeout(() => target.classList.remove("flash"), 1900); if (f.note) openNote(f.note, el); }
      }, 30);
    }
  }
  function gotoSection(key, smooth) {
    const rd = $("#reader"); if (!rd) return;
    const s = rd.querySelector('.bsec[data-sec="' + CSS.escape(key) + '"]');
    if (!s) return;
    const y = s.getBoundingClientRect().top + window.scrollY - 118;
    window.scrollTo({ top: Math.max(0, y), behavior: smooth ? "smooth" : "auto" });
    const sel = $("#secSel"); if (sel) sel.value = key;
  }
  function stepSection(d) {
    const sel = $("#secSel"); if (!sel) return;
    const i = Math.max(0, Math.min(sel.options.length - 1, sel.selectedIndex + d));
    gotoSection(sel.options[i].value, true);
  }
  SG.rerenderReader = () => {
    const rd = $("#reader"); if (!rd || !SG.current) return;
    const y = window.scrollY;
    SG.renderReader(rd, SG.current.bid, SG.current.chid);
    if (SG.secObs) { SG.secObs.disconnect(); $$(".bsec", rd).forEach((s) => SG.secObs.observe(s)); }
    window.scrollTo(0, y);
  };

  function tabSources(body, bid, ch) {
    const p = SG.loaded[bid] && SG.loaded[bid].chapters[ch.id];
    let h = "";
    if (ch.evidence && ch.evidence.length) h += '<h2 class="h" style="margin-top:0">Key sources, annotated</h2><p class="muted small">Selected by this companion: the studies and books that carry the most weight in the chapter, with context on how they have held up.</p><ul class="srclist">' + ch.evidence.map((e) => '<li><div class="cite">' + inline(e.cite) + '</div><div class="why">' + inline(e.note) + "</div></li>").join("") + "</ul>";
    h += '<h2 class="h">The book\'s endnotes</h2>';
    if (!p) h += '<div class="callout"><p style="margin:0 0 8px">Load your EPUB to see every endnote for this chapter, each linked back to its passage.</p><button class="btn small" data-act="pick">Load EPUB</button></div>';
    else if (!p.notes.length) h += '<p class="muted">This part of the book has no endnotes.</p>';
    else {
      h += '<input type="search" id="noteFilter" placeholder="Filter ' + p.notes.length + ' notes by author, title, year, keyword…" aria-label="Filter endnotes"><ol class="srclist" id="noteList" style="margin-top:12px">' +
        p.notes.map((n) => '<li data-text="' + esc((n.text || "").toLowerCase()) + '"><div class="why" style="margin:0"><span class="pill no" style="margin-right:6px">' + (n.kind === "foot" ? "Footnote " + esc(n.label) : "Note " + (n.n || "")) + "</span>" + n.html + '</div><div class="btnrow" style="margin-top:6px"><button class="btn small ghost" data-act="jumpnote" data-note="' + esc(n.key) + '">Show in text</button></div></li>').join("") + "</ol>";
    }
    body.innerHTML = h;
    const f = $("#noteFilter");
    if (f) f.addEventListener("input", () => {
      const q = f.value.trim().toLowerCase();
      $$("#noteList li").forEach((li) => { li.hidden = q && !li.getAttribute("data-text").includes(q); });
    });
  }

  const QGROUPS = [["comprehension", "Comprehension", "Make sure you can state the argument."], ["critical", "Critical & graduate-level", "Test the argument against evidence and rival theories."], ["personal", "Personal application", "Bring it into your own situation."], ["club", "For the book club", "Open-ended prompts for discussion."]];
  function tabDiscuss(body, bid, ch) {
    const Q = ch.questions || {};
    let h = '<div class="btnrow" style="margin-bottom:8px"><button class="btn small ghost" data-act="copyq">Copy all questions</button><button class="btn small ghost" data-act="copya">Copy questions with my answers</button></div>';
    QGROUPS.forEach(([k, label, sub]) => {
      const qs = Q[k] || [];
      if (!qs.length) return;
      h += '<section class="qgroup"><h2 class="h">' + esc(label) + '</h2><p class="muted small" style="margin-top:-6px">' + esc(sub) + "</p>" + qs.map((q, i) => {
        const key = bid + "/" + ch.id + "/" + k + i;
        return '<div class="qitem"><p><span class="qn">' + (i + 1) + "</span>" + inline(q) + '</p><textarea aria-label="My answer" data-save="answers:' + esc(key) + '" placeholder="Draft your answer…">' + esc(SG.data.answers[key] || "") + "</textarea></div>";
      }).join("") + "</section>";
    });
    body.innerHTML = h;
  }
  function questionsText(bid, ch, withAnswers) {
    const Q = ch.questions || {};
    let out = SG.books[bid].title + " · " + chLabel(ch) + ": " + ch.title + "\n";
    QGROUPS.forEach(([k, label]) => {
      (Q[k] || []).forEach((q, i) => {
        if (i === 0) out += "\n" + label + "\n";
        out += (i + 1) + ". " + SG.plain(q) + "\n";
        const a = SG.data.answers[bid + "/" + ch.id + "/" + k + i];
        if (withAnswers && a) out += "   My answer: " + a.replace(/\n/g, "\n   ") + "\n";
      });
    });
    return out;
  }

  /* ---------------- glossary ---------------- */
  function pageGlossary(main) {
    crumbs([["Home", "#/"], ["Glossary"]]);
    const cats = Array.from(new Set(Object.values(SG.glossary).map((t) => t.cat))).sort();
    main.innerHTML = '<div class="page"><p class="eyebrow">Reference</p><h1 class="display">Key <span class="accent">terms</span></h1><p class="lede">Every technical term in both books and in this companion. Click one for the full entry: definition, where it comes from, the current debate, and where it appears in the books.</p>' +
      '<input type="search" id="gFilter" placeholder="Filter ' + Object.keys(SG.glossary).length + ' terms…" aria-label="Filter terms"><div class="chips" style="margin:12px 0" id="gCats"><button class="chip on" data-cat="">All</button>' + cats.map((c) => '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + "</button>").join("") + '</div><div class="gloss" id="gList"></div></div>';
    let cat = "";
    const draw = () => {
      const q = ($("#gFilter").value || "").trim().toLowerCase();
      const items = Object.entries(SG.glossary).filter(([, t]) => (!cat || t.cat === cat) && (!q || (t.term + " " + t.short + " " + (t.aka || []).join(" ")).toLowerCase().includes(q))).sort((a, b) => a[1].term.localeCompare(b[1].term));
      let letter = "", h = "";
      items.forEach(([id, t]) => {
        const L = t.term[0].toUpperCase();
        if (L !== letter) { letter = L; h += '<div class="letter">' + esc(L) + "</div>"; }
        h += '<button class="gitem" data-term="' + esc(id) + '"><span class="gt">' + esc(t.term) + '</span><span class="gc">' + esc(t.cat) + '</span><span class="gd">' + inline(t.short) + "</span></button>";
      });
      $("#gList").innerHTML = h || '<p class="muted">No terms match.</p>';
    };
    $("#gFilter").addEventListener("input", draw);
    $("#gCats").addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (!b) return; cat = b.getAttribute("data-cat"); $$("#gCats .chip").forEach((c) => c.classList.toggle("on", c === b)); draw(); });
    draw();
  }

  /* ---------------- drawers, popovers, modals ---------------- */
  function closeAll() {
    $$(".drawer, .pop, .modal, .veil").forEach((x) => x.remove());
    document.body.style.overflow = "";
  }
  function drawer(title, html) {
    $$(".drawer, .veil").forEach((x) => x.remove());
    const v = document.createElement("div"); v.className = "veil"; v.onclick = () => closeDrawer();
    const d = document.createElement("aside"); d.className = "drawer"; d.setAttribute("role", "dialog"); d.setAttribute("aria-modal", "true"); d.setAttribute("aria-label", title);
    d.innerHTML = '<div class="dh"><b>' + esc(title) + '</b><button class="iconbtn" data-act="closedrawer" aria-label="Close">Close ✕</button></div><div class="db">' + html + "</div>";
    document.body.append(v, d);
    requestAnimationFrame(() => d.classList.add("open"));
    setTimeout(() => { const f = d.querySelector(".db h2") || d; f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); }, 50);
    return d;
  }
  function closeDrawer() {
    const d = $(".drawer"); $$(".veil").forEach((x) => x.remove());
    if (d) { d.classList.remove("open"); setTimeout(() => d.remove(), 250); }
    if (location.hash.startsWith("#/glossary/")) history.replaceState(null, "", "#/glossary");
  }
  function openTerm(id, fromRoute) {
    const t = SG.glossary[id];
    if (!t) { SG.toast("That term is not in the glossary yet."); return; }
    const inBook = (t.where || []).map((w) => {
      const ch = SG.chapter(w[0], w[1]);
      return ch ? '<li><a href="' + route("book", w[0], w[1]) + '">' + esc(SG.books[w[0]].title + " · " + chLabel(ch) + (typeof ch.num === "number" ? ": " + ch.title : "")) + "</a>" + (w[2] ? " · " + inline(w[2]) : "") + "</li>" : "";
    }).join("");
    const html = '<p class="eyebrow">' + esc(t.cat) + (t.aka && t.aka.length ? " · also: " + esc(t.aka.join(", ")) : "") + "</p><h2>" + esc(t.term) + '</h2><p class="lede" style="font-size:1.08rem">' + inline(t.short) + "</p>" +
      '<div class="prose">' + md(t.deep) + "</div>" +
      (t.origin ? '<h4 class="h">Where it comes from</h4><div class="prose">' + md(t.origin) + "</div>" : "") +
      (t.debate ? '<h4 class="h">Current research and debate</h4><div class="prose">' + md(t.debate) + "</div>" : "") +
      (inBook ? '<h4 class="h">In the books</h4><ul class="prose">' + inBook + "</ul>" : "") +
      (t.related && t.related.length ? '<h4 class="h">Related terms</h4><div class="chips">' + t.related.filter((r) => SG.glossary[r]).map((r) => SG.termChip(r)).join("") + "</div>" : "") +
      '<div class="btnrow" style="margin-top:16px"><button class="btn small ghost" data-act="searchterm" data-q="' + esc(t.term) + '">Search both books for “' + esc(t.term) + '”</button></div>' +
      noteBox("term/" + id, "My notes on this term");
    drawer("Glossary", html);
    if (!fromRoute && location.hash.startsWith("#/glossary")) history.replaceState(null, "", "#/glossary/" + id);
  }
  SG.openTerm = openTerm;

  function popover(html, anchor) {
    $$(".pop").forEach((x) => x.remove());
    const p = document.createElement("div"); p.className = "pop"; p.setAttribute("role", "dialog");
    p.innerHTML = html; p.dataset.y = String(window.scrollY);
    document.body.appendChild(p);
    const r = anchor ? anchor.getBoundingClientRect() : { left: window.innerWidth / 2, bottom: 120, top: 100, width: 0 };
    const w = p.offsetWidth, hgt = p.offsetHeight;
    let x = Math.max(16, Math.min(window.innerWidth - w - 16, r.left + r.width / 2 - w / 2));
    let y = r.bottom + 8;
    if (y + hgt > window.innerHeight - 12) y = Math.max(12, r.top - hgt - 8);
    p.style.left = x + "px"; p.style.top = y + "px";
    setTimeout(() => { const f = p.querySelector("textarea, button"); if (f && f.tagName === "TEXTAREA") f.focus(); }, 30);
    return p;
  }
  function openNote(key, anchor) {
    const bid = SG.current && SG.current.bid;
    const p = bid && SG.loaded[bid];
    const n = p && (p.chapters[SG.current.chid].notes.find((x) => x.key === key));
    if (!n) return;
    popover('<div class="ph"><b>' + (n.kind === "foot" ? "Author's footnote " + esc(n.label) : "Endnote " + (n.n || "")) + '</b><button class="x" data-act="closepop" aria-label="Close">✕</button></div><p>' + n.html + '</p><div class="acts"><button class="btn small ghost" data-act="copynote" data-note="' + esc(key) + '">Copy citation</button><a class="btn small ghost" href="' + route("book", bid, SG.current.chid, "sources") + '">All notes for this chapter</a></div>', anchor);
  }
  function openAnno(i, anchor) {
    const ch = SG.current && SG.chapter(SG.current.bid, SG.current.chid);
    const a = ch && ch.annotations && ch.annotations[i];
    if (!a) return;
    popover('<div class="ph"><b>✦ Scholar\'s note · ' + esc(a.title) + '</b><button class="x" data-act="closepop" aria-label="Close">✕</button></div><div class="prose" style="font-size:0.95rem">' + md(a.body) + "</div>", anchor);
  }
  function openHighlight(id, anchor) {
    const h = SG.data.highlights.find((x) => x.id === id);
    if (!h) return;
    const el = anchor || document.querySelector('mark[data-hid="' + id + '"]');
    const p = popover('<div class="ph"><b>Highlight · ' + esc(SG.data.labels[h.color]) + '</b><button class="x" data-act="closepop" aria-label="Close">✕</button></div>' +
      '<div class="chips" style="margin-bottom:8px">' + ["yellow", "orange", "pink", "sky", "mint"].map((c) => '<button class="chip' + (c === h.color ? " on" : "") + '" data-act="hlcolor" data-hid="' + id + '" data-color="' + c + '"><mark class="hl hl-' + c + '" style="padding:0 6px">&nbsp;</mark>' + esc(SG.data.labels[c]) + "</button>").join("") + "</div>" +
      '<label class="small muted" for="hlnote" style="font-weight:600">Note</label><textarea id="hlnote" placeholder="Why does this matter? What would you ask?">' + esc(h.note || "") + '</textarea>' +
      '<div class="acts"><button class="btn small" data-act="hlsave" data-hid="' + id + '">Save note</button><button class="btn small ghost" data-act="hlcopy" data-hid="' + id + '">Copy quote</button><button class="btn small danger" data-act="hldel" data-hid="' + id + '">Delete highlight</button></div>', el);
    return p;
  }
  SG.openHighlight = openHighlight;

  function modal(headHtml, bodyHtml, big) {
    $$(".modal, .veil").forEach((x) => x.remove());
    const v = document.createElement("div"); v.className = "veil"; v.onclick = () => closeAll();
    const m = document.createElement("div"); m.className = "modal" + (big ? " big" : ""); m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="mh">' + headHtml + '<button class="iconbtn" data-act="closeall" aria-label="Close">✕</button></div><div class="mb">' + bodyHtml + "</div>";
    document.body.append(v, m);
    return m;
  }

  /* ---------------- search ---------------- */
  function buildIndex() {
    const E = [];
    const push = (kind, title, text, href, extra) => { if (text) E.push(Object.assign({ kind, title, text, low: (title + " " + text).toLowerCase(), href }, extra || {})); };
    SG.intro.sections.forEach((s) => push("Study guide", "Before You Begin · " + s.title, SG.plain(s.body + " " + (s.after || "") + " " + (s.timeline || []).map((t) => t.join(" ")).join(" ")), route("intro", s.id)));
    Object.entries(SG.glossary).forEach(([id, t]) => push("Glossary", t.term, SG.plain(t.short + " " + t.deep + " " + (t.origin || "") + " " + (t.debate || "") + " " + (t.aka || []).join(" ")), route("glossary", id), { term: id }));
    Object.values(SG.books).forEach((b) => {
      b.chapters.forEach((c) => {
        const lab = b.title + " · " + chLabel(c) + (typeof c.num === "number" ? ": " + c.title : "");
        push("Study guide", lab + " · Guide", SG.plain([c.thesis, c.overview, c.voice, c.origins, c.debates, c.why, (c.evidence || []).map((e) => e.cite + " " + e.note).join(" "), (c.people || []).map((p) => p.join(" ")).join(" ")].join(" ")), route("book", b.id, c.id));
        (c.sections || []).forEach((s, i) => push("Study guide", lab + " · " + s.title, SG.plain([s.gist, s.idea, s.q].join(" ")), route("book", b.id, c.id, "read", b.sectioning === "hr" ? "s" + i : s.key || SG.slug(s.title))));
        (c.annotations || []).forEach((a) => push("Scholar's note", lab + " · " + a.title, SG.plain(a.body), route("book", b.id, c.id, "read")));
        const Q = c.questions || {};
        const qs = [].concat(Q.comprehension || [], Q.critical || [], Q.personal || [], Q.club || []);
        if (qs.length) push("Questions", lab + " · Discuss", SG.plain(qs.join(" ")), route("book", b.id, c.id, "discuss"));
        const p = SG.loaded[b.id] && SG.loaded[b.id].chapters[c.id];
        if (p) {
          const secT = {}; p.sections.forEach((s) => { secT[s.key] = s.title; });
          p.blocks.forEach((bl) => push("Book text", lab + (secT[bl.sec] && bl.sec !== "_open" ? " · " + secT[bl.sec] : ""), bl.text, route("book", b.id, c.id, "read"), { pid: bl.pid }));
          p.notes.forEach((n) => push("Endnote", lab + " · " + (n.kind === "foot" ? "Footnote " + n.label : "Note " + n.n), n.text, route("book", b.id, c.id, "read"), { note: n.key }));
        }
      });
    });
    SG.data.highlights.forEach((h) => { const c = SG.chapter(h.book, h.ch); if (c) push("My notes", "Highlight · " + SG.books[h.book].title + " · " + c.title, h.text + " " + (h.note || ""), route("book", h.book, h.ch, "read"), { pid: h.segs[0].pid }); });
    Object.entries(SG.data.notes).forEach(([k, v]) => { if ((v || "").trim()) push("My notes", "Note · " + noteLabel(k), v, noteRoute(k)); });
    Object.entries(SG.data.answers).forEach(([k, v]) => { if ((v || "").trim() && v !== "1") { const [b, c] = k.split("/"); if (SG.chapter(b, c)) push("My notes", "Answer · " + SG.books[b].title + " · " + SG.chapter(b, c).title, v, route("book", b, c, "discuss")); } });
    return E;
  }
  function noteLabel(k) {
    if (k.startsWith("intro/")) { const s = SG.intro.sections.find((x) => x.id === k.slice(6)); return "Before You Begin · " + (s ? s.title : ""); }
    if (k.startsWith("term/")) { const t = SG.glossary[k.slice(5)]; return "Term · " + (t ? t.term : k.slice(5)); }
    const [bc, sec] = k.split("#"); const [b, c] = bc.split("/"); const ch = SG.chapter(b, c);
    if (!ch) return k;
    let s = SG.books[b].title + " · " + ch.title;
    if (sec) { const p = SG.loaded[b] && SG.loaded[b].chapters[c]; const st = p && p.sections.find((x) => x.key === sec); const g = SG.sectionGuide(b, c, sec); s += " · " + (st ? st.title : g ? g.title : "section"); }
    return s;
  }
  function noteRoute(k) {
    if (k.startsWith("intro/")) return route("intro", k.slice(6));
    if (k.startsWith("term/")) return route("glossary", k.slice(5));
    const [bc, sec] = k.split("#"); const [b, c] = bc.split("/");
    return sec ? route("book", b, c, "read", sec) : route("book", b, c);
  }
  const KINDS = ["Book text", "Endnote", "Study guide", "Scholar's note", "Glossary", "Questions", "My notes"];
  let searchKind = "";
  function openSearch(q) {
    SG.hideSelTool();
    const m = modal('<div class="searchin">' + ICON.search.replace("<svg", '<svg width="20" height="20"') + '<label class="sr" for="sq">Search</label><input id="sq" type="search" autocomplete="off" placeholder="Search both books, endnotes, guides, glossary, your notes…"></div>', '<div class="chips" id="sk"><button class="chip on" data-k="">All</button>' + KINDS.map((k) => '<button class="chip" data-k="' + esc(k) + '">' + esc(k) + "</button>").join("") + '</div><div id="sr" style="margin-top:8px"></div>', true);
    searchKind = "";
    const inp = $("#sq");
    inp.value = q || "";
    if (!SG.index) SG.index = buildIndex();
    const run = SG.debounce(() => drawResults(inp.value), 120);
    inp.addEventListener("input", run);
    inp.addEventListener("keydown", (e) => {
      const items = $$("#sr .res"); let i = items.findIndex((x) => x.classList.contains("sel"));
      if (e.key === "ArrowDown") { e.preventDefault(); i = Math.min(items.length - 1, i + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); i = Math.max(0, i - 1); }
      else if (e.key === "Enter") { e.preventDefault(); if (items[i < 0 ? 0 : i]) items[i < 0 ? 0 : i].click(); return; }
      else return;
      items.forEach((x, j) => x.classList.toggle("sel", j === i)); if (items[i]) items[i].scrollIntoView({ block: "nearest" });
    });
    $("#sk").addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (!b) return; searchKind = b.getAttribute("data-k"); $$("#sk .chip").forEach((c) => c.classList.toggle("on", c === b)); drawResults(inp.value); });
    drawResults(inp.value);
    setTimeout(() => inp.focus(), 20);
  }
  SG.openSearch = openSearch;
  let lastResults = [];
  function drawResults(q) {
    const box = $("#sr"); if (!box) return;
    const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1 || /\d/.test(t));
    if (!terms.length) {
      const loaded = Object.values(SG.books).filter((b) => SG.loaded[b.id]).map((b) => b.title);
      box.innerHTML = '<p class="muted" style="padding:8px 12px">Type at least two letters. Searching ' + (loaded.length ? "the full text of " + loaded.join(" and ") + ", their endnotes, " : "") + "the study guides, glossary, questions and your notes." + (loaded.length < 2 ? ' Load your EPUBs to search the books themselves.' : "") + "</p>";
      return;
    }
    const res = [];
    SG.index.forEach((e) => {
      if (searchKind && e.kind !== searchKind) return;
      let score = 0;
      for (const t of terms) { const i = e.low.indexOf(t); if (i < 0) return; score += 1 + (e.title.toLowerCase().includes(t) ? 3 : 0); }
      const phrase = e.low.indexOf(q.toLowerCase().trim());
      if (phrase >= 0) score += 6;
      if (e.kind === "Glossary" && e.title.toLowerCase() === q.toLowerCase().trim()) score += 20;
      res.push([score, e]);
    });
    res.sort((a, b) => b[0] - a[0]);
    const counts = {}; res.forEach(([, e]) => { counts[e.kind] = (counts[e.kind] || 0) + 1; });
    $$("#sk .chip").forEach((c) => { const k = c.getAttribute("data-k"); c.textContent = (k || "All") + (k ? (counts[k] ? " · " + counts[k] : "") : " · " + res.length); });
    lastResults = res.slice(0, 150).map((r) => r[1]);
    if (!lastResults.length) { box.innerHTML = '<p class="muted" style="padding:8px 12px">No matches for “' + esc(q) + '”. Try fewer or different words.</p>'; return; }
    const snip = (text) => {
      const low = text.toLowerCase(); let i = low.indexOf(terms[0]);
      const start = Math.max(0, i - 80); let s = (start ? "…" : "") + text.slice(start, start + 240) + (text.length > start + 240 ? "…" : "");
      s = esc(s);
      terms.forEach((t) => { s = s.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
      return s;
    };
    box.innerHTML = lastResults.map((e, i) => '<button class="res' + (i === 0 ? " sel" : "") + '" data-ri="' + i + '"><div class="rk">' + esc(e.kind) + '</div><div class="rt">' + esc(e.title) + '</div><div class="rs">' + snip(e.text) + "</div></button>").join("") +
      (res.length > 150 ? '<p class="muted small" style="padding:8px 12px">Showing the top 150 of ' + res.length + " matches. Add a word to narrow it.</p>" : "");
  }
  function openResult(i) {
    const e = lastResults[i]; if (!e) return;
    closeAll();
    if (e.term) { openTerm(e.term); return; }
    if (e.pid || e.note) SG.pendingFlash = { pid: e.pid, note: e.note };
    SG.go(e.href);
  }

  /* ---------------- notebook ---------------- */
  let nbState = { book: "", color: "", type: "", q: "" };
  function pageNotebook(main) {
    crumbs([["Home", "#/"], ["Notebook"]]);
    main.innerHTML = '<div class="page"><p class="eyebrow">Everything you have marked</p><h1 class="display">My <span class="accent">notebook</span></h1>' +
      '<h4 class="h">Highlight colors · click a label to rename it</h4><div class="legend">' + ["yellow", "orange", "pink", "sky", "mint"].map((c) => '<label><span class="sw" style="background:var(--hl-' + c + ')"></span><input type="text" data-label="' + c + '" value="' + esc(SG.data.labels[c]) + '" aria-label="Label for ' + c + ' highlights"></label>').join("") + "</div>" +
      '<div class="nbfilters"><input type="search" id="nbq" placeholder="Search your highlights and notes…" aria-label="Search notebook" value="' + esc(nbState.q) + '">' +
      '<div class="chips" id="nbBook"><button class="chip" data-v="">Both books</button><button class="chip" data-v="situated">Situated</button><button class="chip" data-v="grit">Grit</button><button class="chip" data-v="other">Intro &amp; terms</button></div>' +
      '<div class="chips" id="nbType"><button class="chip" data-v="">Everything</button><button class="chip" data-v="hl">Highlights</button><button class="chip" data-v="note">Notes</button><button class="chip" data-v="ans">Answers</button></div>' +
      '<div class="chips" id="nbColor"><button class="chip" data-v="">Any color</button>' + ["yellow", "orange", "pink", "sky", "mint"].map((c) => '<button class="chip" data-v="' + c + '"><mark class="hl hl-' + c + '" style="padding:0 6px">&nbsp;</mark>' + esc(SG.data.labels[c]) + "</button>").join("") + "</div></div>" +
      '<div class="btnrow"><button class="btn small" data-act="exportmd">Export as Markdown</button><button class="btn small ghost" data-act="backup">Back up everything (JSON)</button><button class="btn small ghost" data-act="restore">Restore from backup</button></div>' +
      (SG.storageWarn ? '<p class="callout small">This browser is blocking storage, so your notes will be lost when you close the page. Use “Back up everything” before leaving.</p>' : "") +
      '<div id="nbList" style="margin-top:18px"></div></div>';
    const setOn = (id, v) => $$("#" + id + " .chip").forEach((c) => c.classList.toggle("on", c.getAttribute("data-v") === v));
    setOn("nbBook", nbState.book); setOn("nbType", nbState.type); setOn("nbColor", nbState.color);
    [["nbBook", "book"], ["nbType", "type"], ["nbColor", "color"]].forEach(([id, k]) => $("#" + id).addEventListener("click", (e) => { const b = e.target.closest("[data-v]"); if (!b) return; nbState[k] = b.getAttribute("data-v"); setOn(id, nbState[k]); drawNotebook(); }));
    $("#nbq").addEventListener("input", SG.debounce(() => { nbState.q = $("#nbq").value; drawNotebook(); }, 150));
    $$("[data-label]").forEach((inp) => inp.addEventListener("input", () => { SG.data.labels[inp.getAttribute("data-label")] = inp.value || inp.getAttribute("data-label"); SG.save(); }));
    drawNotebook();
  }
  function notebookItems() {
    const items = [];
    const order = (b, c) => { const i = SG.books[b] ? SG.books[b].chapters.findIndex((x) => x.id === c) : -1; return (b === "situated" ? 1000 : b === "grit" ? 2000 : 0) + i; };
    SG.data.highlights.forEach((h) => items.push({ type: "hl", book: h.book, color: h.color, o: order(h.book, h.ch) + (parseInt(h.segs[0].pid, 10) || 0) / 10000, h }));
    Object.entries(SG.data.notes).forEach(([k, v]) => {
      if (!(v || "").trim()) return;
      const b = k.startsWith("intro/") || k.startsWith("term/") ? "other" : k.split("/")[0];
      items.push({ type: "note", book: b, o: b === "other" ? -1 : order(b, k.split("/")[1].split("#")[0]), k, v });
    });
    Object.entries(SG.data.answers).forEach(([k, v]) => {
      if (!(v || "").trim() || v === "1") return;
      const [b, c, q] = k.split("/");
      items.push({ type: "ans", book: b, o: order(b, c), k, v, c, q });
    });
    return items.sort((a, b) => a.o - b.o);
  }
  function qText(b, c, q) {
    const ch = SG.chapter(b, c); const m = /^([a-z]+)(\d+)$/.exec(q || "");
    return ch && m && ch.questions && ch.questions[m[1]] ? SG.plain(ch.questions[m[1]][+m[2]] || "") : "";
  }
  function drawNotebook() {
    const s = nbState;
    const q = s.q.trim().toLowerCase();
    const items = notebookItems().filter((it) => {
      if (s.book && it.book !== s.book) return false;
      if (s.type && it.type !== s.type) return false;
      if (s.color && (it.type !== "hl" || it.color !== s.color)) return false;
      if (q) { const txt = (it.h ? it.h.text + " " + it.h.note : it.v + " " + (it.type === "ans" ? qText(it.book, it.c, it.q) : "")).toLowerCase(); if (!txt.includes(q)) return false; }
      return true;
    });
    const box = $("#nbList");
    if (!items.length) { box.innerHTML = '<div class="callout"><p style="margin:0">' + (SG.data.highlights.length || Object.keys(SG.data.notes).length ? "Nothing matches these filters." : 'Nothing here yet. Open any chapter\'s <b>Read</b> tab, select a passage, and pick a color. Notes you type in guides, sections and questions also collect here.') + "</p></div>"; return; }
    box.innerHTML = items.map((it) => {
      if (it.type === "hl") {
        const h = it.h, ch = SG.chapter(h.book, h.ch);
        return '<div class="nbitem"><span class="bar ' + h.color + '"></span><div><blockquote>“' + esc(h.text) + "”</blockquote>" + (h.note ? '<div class="nnote">' + esc(h.note) + "</div>" : "") +
          '<div class="meta"><span>' + esc(SG.books[h.book].title + " · " + (ch ? chLabel(ch) + " · " + ch.title : "")) + "</span><span>" + esc(SG.data.labels[h.color]) + '</span><a href="' + route("book", h.book, h.ch, "read") + '" data-flash="' + esc(h.segs[0].pid) + '">Open in text</a><button class="chip" data-act="nbedit" data-hid="' + h.id + '">Edit note</button><button class="chip" data-act="hldel" data-hid="' + h.id + '">Delete</button></div></div></div>';
      }
      if (it.type === "note") return '<div class="nbitem"><span class="bar note"></span><div><div class="nnote" style="color:var(--ink);margin:0">' + esc(it.v) + '</div><div class="meta"><span>Note · ' + esc(noteLabel(it.k)) + '</span><a href="' + noteRoute(it.k) + '">Open</a></div></div></div>';
      return '<div class="nbitem"><span class="bar note"></span><div><blockquote style="font-size:0.95rem;color:var(--ink-2)">' + esc(qText(it.book, it.c, it.q)) + '</blockquote><div class="nnote" style="color:var(--ink)">' + esc(it.v) + '</div><div class="meta"><span>Answer · ' + esc((SG.books[it.book] || {}).title + " · " + ((SG.chapter(it.book, it.c) || {}).title || "")) + '</span><a href="' + route("book", it.book, it.c, "discuss") + '">Open</a></div></div></div>';
    }).join("");
  }
  function exportMarkdown() {
    let out = "# My notebook: Situated × Grit\n\n_Exported " + new Date().toLocaleString() + "_\n";
    let curHead = "";
    notebookItems().forEach((it) => {
      let head;
      if (it.book === "other") head = "Before You Begin & glossary";
      else { const c = it.h ? SG.chapter(it.h.book, it.h.ch) : SG.chapter(it.book, (it.k || "").split("/")[1] ? (it.k || "").split("/")[1].split("#")[0] : it.c); head = (SG.books[it.book] || {}).title + (c ? " · " + chLabel(c) + (typeof c.num === "number" ? ": " + c.title : "") : ""); }
      if (head !== curHead) { out += "\n## " + head + "\n\n"; curHead = head; }
      if (it.type === "hl") out += "> " + it.h.text + "\n\n" + "_" + SG.data.labels[it.h.color] + "_" + (it.h.note ? " · **Note:** " + it.h.note : "") + "\n\n";
      else if (it.type === "note") out += "**Note (" + noteLabel(it.k) + "):** " + it.v + "\n\n";
      else out += "**Q:** " + qText(it.book, it.c, it.q) + "\n\n**My answer:** " + it.v + "\n\n";
    });
    return out;
  }
  function backupJson() {
    return JSON.stringify({ app: "situated-grit-companion", version: 1, exported: new Date().toISOString(), data: { highlights: SG.data.highlights, notes: SG.data.notes, answers: SG.data.answers, read: SG.data.read, labels: SG.data.labels, settings: SG.data.settings } }, null, 2);
  }
  function showExport(title, text, filename, type) {
    modal("<b style=\"flex:1\">" + esc(title) + "</b>", '<p class="small muted" style="margin-top:0">' + (window.SG_EMBED ? "Copy this text and paste it into a document or note." : "Copy this text, or download it as a file. If the download button does nothing in your viewer, use Copy and paste it into a document.") + '</p><textarea id="exportTa" style="min-height:45vh;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:0.82rem" readonly>' + esc(text) + '</textarea><div class="btnrow" style="margin-top:10px"><button class="btn small" data-act="copyexport">Copy</button>' + (window.SG_EMBED ? "" : '<button class="btn small ghost" data-act="dlexport" data-name="' + esc(filename) + '" data-type="' + esc(type) + '">Download ' + esc(filename) + "</button>") + "</div>");
  }
  function showRestore() {
    modal('<b style="flex:1">Restore from backup</b>', '<p class="small" style="margin-top:0">Choose a backup file, or paste its contents below. Restoring merges with what is already here: highlights are added, and notes and answers from the backup replace ones with the same key.</p><input type="file" id="restoreFile" accept=".json,application/json"><textarea id="restoreTa" style="min-height:30vh;margin-top:10px;font-family:ui-monospace,Menlo,monospace;font-size:0.82rem" placeholder="…or paste backup JSON here"></textarea><div class="btnrow" style="margin-top:10px"><button class="btn small" data-act="dorestore">Restore</button></div><p class="small" id="restoreMsg"></p>');
    $("#restoreFile").addEventListener("change", async (e) => { const f = e.target.files[0]; if (f) $("#restoreTa").value = await f.text(); });
  }
  function doRestore() {
    let obj;
    try { obj = JSON.parse($("#restoreTa").value); } catch (e) { $("#restoreMsg").textContent = "That is not valid JSON. Paste the whole backup file, starting with {."; return; }
    const d = obj && obj.data;
    if (!d || !Array.isArray(d.highlights)) { $("#restoreMsg").textContent = "This does not look like a backup from this companion."; return; }
    const ids = new Set(SG.data.highlights.map((h) => h.id));
    let added = 0;
    d.highlights.forEach((h) => { if (h && h.id && !ids.has(h.id) && Array.isArray(h.segs)) { SG.data.highlights.push(h); added++; } });
    Object.assign(SG.data.notes, d.notes || {}); Object.assign(SG.data.answers, d.answers || {}); Object.assign(SG.data.read, d.read || {});
    if (d.labels) Object.assign(SG.data.labels, d.labels);
    SG.saveNow(); SG.index = null;
    closeAll(); SG.toast("Restored · " + added + " highlights added"); router();
  }

  /* ---------------- global events ---------------- */
  function onClick(e) {
    const t = e.target;
    const termEl = t.closest("[data-term]");
    if (termEl && !t.closest(".gitem") && (termEl.tagName !== "BUTTON" || termEl.classList.contains("term"))) {
      if (termEl.closest(".reader") && !SG.data.settings.terms) return;
      e.preventDefault(); openTerm(termEl.getAttribute("data-term")); return;
    }
    const gi = t.closest(".gitem"); if (gi) { openTerm(gi.getAttribute("data-term")); return; }
    const nref = t.closest(".nref"); if (nref) { e.preventDefault(); openNote(nref.getAttribute("data-note"), nref); return; }
    const anno = t.closest(".anno"); if (anno) { e.preventDefault(); openAnno(+anno.getAttribute("data-anno"), anno); return; }
    const mark = t.closest("mark.hl[data-hid]"); if (mark && !window.getSelection().toString()) { openHighlight(mark.getAttribute("data-hid"), mark); return; }
    const res = t.closest(".res[data-ri]"); if (res) { openResult(+res.getAttribute("data-ri")); return; }
    const fl = t.closest("a[data-flash]"); if (fl) { SG.pendingFlash = { pid: fl.getAttribute("data-flash") }; }
    const ab = t.closest("[data-act]");
    if (ab) {
      const act = ab.getAttribute("data-act");
      const A = {
        pick: () => $("#fileIn").click(),
        unload: async () => { const b = ab.getAttribute("data-book"); await SG.idbDel("epub:" + b); SG.loaded[b] = null; SG.index = null; SG.toast(SG.books[b].title + " removed from this device"); router(); },
        markread: () => { const k = ab.getAttribute("data-key"); SG.data.read[k] = !SG.data.read[k]; SG.save(); ab.textContent = SG.data.read[k] ? "✓ Marked as read" : "Mark as read"; renderRail(location.hash); },
        toggle: () => { const k = ab.getAttribute("data-set"); SG.data.settings[k] = !SG.data.settings[k]; SG.save(); ab.classList.toggle("on", SG.data.settings[k]); ab.setAttribute("aria-pressed", String(SG.data.settings[k])); SG.rerenderReader(); },
        font: () => { const st = SG.data.settings; st.size = Math.max(0.9, Math.min(1.6, Math.round((st.size + 0.0625 * +ab.getAttribute("data-d")) * 1000) / 1000)); SG.save(); applySettings(); },
        secprev: () => stepSection(-1), secnext: () => stepSection(1),
        closedrawer: () => closeDrawer(), closepop: () => $$(".pop").forEach((x) => x.remove()), closeall: () => closeAll(),
        enlarge: () => { const d = SG.diagrams[ab.getAttribute("data-dia")]; if (d) { const m = modal('<b style="flex:1">' + esc(d.title) + "</b>", d.svg() + '<p class="prose" style="margin-top:12px">' + inline(d.caption) + "</p>", true); const s = m.querySelector("svg"); if (s) { s.style.width = "100%"; s.style.height = "auto"; } } },
        jumpnote: () => { SG.pendingFlash = { note: ab.getAttribute("data-note") }; SG.go(route("book", SG.current ? SG.current.bid : parse()[1], parse()[2], "read")); },
        copynote: () => { const k = ab.getAttribute("data-note"); const p = SG.loaded[SG.current.bid]; const n = p.chapters[SG.current.chid].notes.find((x) => x.key === k); if (n) SG.copyText(n.text, "Citation copied"); },
        hlcolor: () => { const h = SG.data.highlights.find((x) => x.id === ab.getAttribute("data-hid")); if (h) { h.color = ab.getAttribute("data-color"); SG.save(); SG.rerenderReader(); $$(".pop").forEach((x) => x.remove()); SG.toast("Color: " + SG.data.labels[h.color]); if (location.hash === "#/notebook") drawNotebook(); } },
        hlsave: () => { const h = SG.data.highlights.find((x) => x.id === ab.getAttribute("data-hid")); if (h) { h.note = $("#hlnote").value.trim(); SG.save(); SG.index = null; SG.rerenderReader(); $$(".pop").forEach((x) => x.remove()); SG.toast(h.note ? "Note saved" : "Note cleared"); if ((location.hash || "").startsWith("#/notebook")) drawNotebook(); } },
        hlcopy: () => { const h = SG.data.highlights.find((x) => x.id === ab.getAttribute("data-hid")); if (h) SG.copyText("“" + h.text + "”" + (h.note ? "\n— my note: " + h.note : ""), "Quote copied"); },
        hldel: () => {
          const id = ab.getAttribute("data-hid");
          if (ab.getAttribute("data-confirm") !== "1") { ab.setAttribute("data-confirm", "1"); ab.textContent = "Click again to delete"; setTimeout(() => { if (ab.isConnected) { ab.removeAttribute("data-confirm"); ab.textContent = ab.classList.contains("chip") ? "Delete" : "Delete highlight"; } }, 3000); return; }
          SG.data.highlights = SG.data.highlights.filter((x) => x.id !== id); SG.save(); SG.index = null; $$(".pop").forEach((x) => x.remove()); SG.rerenderReader(); SG.toast("Highlight deleted"); if ((location.hash || "").startsWith("#/notebook")) drawNotebook();
        },
        nbedit: () => { const id = ab.getAttribute("data-hid"); openHighlight(id, ab); },
        searchterm: () => { closeAll(); openSearch(ab.getAttribute("data-q")); },
        copyq: () => { const p = parse(); SG.copyText(questionsText(p[1], SG.chapter(p[1], p[2]), false), "Questions copied"); },
        copya: () => { const p = parse(); SG.copyText(questionsText(p[1], SG.chapter(p[1], p[2]), true), "Questions and answers copied"); },
        exportmd: () => showExport("Notebook as Markdown", exportMarkdown(), "situated-grit-notebook.md", "text/markdown"),
        backup: () => showExport("Backup of all your notes", backupJson(), "situated-grit-backup.json", "application/json"),
        restore: () => showRestore(), dorestore: () => doRestore(),
        copyexport: () => SG.copyText($("#exportTa").value, "Copied"),
        dlexport: () => { if (!SG.download(ab.getAttribute("data-name"), $("#exportTa").value, ab.getAttribute("data-type"))) SG.toast("Download blocked here. Use Copy instead."); },
      };
      if (A[act]) { e.preventDefault(); A[act](); }
      return;
    }
    // Clicking outside popovers closes them.
    if (!t.closest(".pop") && !t.closest(".seltool")) $$(".pop").forEach((x) => x.remove());
  }
  function onInput(e) {
    const el = e.target.closest("[data-save]");
    if (!el) return;
    const [store, ...rest] = el.getAttribute("data-save").split(":");
    const key = rest.join(":");
    SG.data[store][key] = el.value;
    SG.save(); SG.index = null;
    const ind = document.querySelector('[data-saved-for="' + CSS.escape(key) + '"]');
    if (ind) { ind.classList.add("on"); clearTimeout(ind._t); ind._t = setTimeout(() => ind.classList.remove("on"), 1200); }
  }
  function onKey(e) {
    const inField = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || "")) || e.target.isContentEditable;
    if (e.key === "Escape") { if ($(".pop")) $$(".pop").forEach((x) => x.remove()); else if ($(".modal")) closeAll(); else if ($(".drawer")) closeDrawer(); SG.hideSelTool(); toggleRail(false); return; }
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !inField)) { e.preventDefault(); openSearch(""); return; }
    if (inField) return;
    if (e.key === "]") stepSection(1);
    else if (e.key === "[") stepSection(-1);
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("term")) { e.preventDefault(); openTerm(e.target.getAttribute("data-term")); }
  }
  function onSelect() {
    const rd = $("#reader");
    if (!rd || !SG.current) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !rd.contains(sel.anchorNode)) { SG.hideSelTool(); return; }
    SG.showSelTool(rd, SG.current.bid, SG.current.chid);
  }

  /* ---------------- boot ---------------- */
  async function boot() {
    shell();
    applySettings();
    document.addEventListener("click", onClick);
    document.addEventListener("input", onInput);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mouseup", () => setTimeout(onSelect, 10));
    document.addEventListener("touchend", () => setTimeout(onSelect, 250));
    document.addEventListener("selectionchange", SG.debounce(() => { const s = window.getSelection(); if (s && !s.isCollapsed && "ontouchstart" in window) onSelect(); if (s && s.isCollapsed) SG.hideSelTool(); }, 300));
    window.addEventListener("hashchange", router);
    // Close popovers once the reader has genuinely scrolled away (not on the scroll a click itself causes)
    window.addEventListener("scroll", () => { const p = $(".pop"); if (!p || $(".pop textarea:focus")) return; if (Math.abs(window.scrollY - (+p.dataset.y || 0)) > 160) $$(".pop").forEach((x) => x.remove()); }, { passive: true });
    router();
    await restoreBooks();
    router();
  }
  SG.boot = boot;
  SG._test = { buildIndex, exportMarkdown, backupJson, router };
})(window.SG);

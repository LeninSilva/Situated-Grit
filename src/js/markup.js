/* Tiny markup used by the study-guide content:
   blank line = new paragraph; "- " list; "> " quote; "### " subhead;
   **bold**, *italic*, [[termId]] or [[termId|label]] glossary links, [text](https://url),
   {{dia:id}} on its own line = a diagram block. */
(function (SG) {
  "use strict";
  function inline(s) {
    let h = SG.esc(s);
    h = h.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (m, id, label) => {
      const t = SG.glossary && SG.glossary[id];
      const text = label || (t ? t.term : id);
      return '<a href="#/glossary/' + id + '" class="term" data-term="' + id + '">' + text + "</a>";
    });
    h = h.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    h = h.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    h = h.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, "$1<i>$2</i>");
    return h;
  }
  function md(src) {
    if (!src) return "";
    const lines = String(src).replace(/\r/g, "").split("\n");
    const out = [];
    let para = [], list = null, quote = [];
    const flushPara = () => { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } };
    const flushList = () => { if (list) { out.push("<" + list.tag + ">" + list.items.map((i) => "<li>" + inline(i) + "</li>").join("") + "</" + list.tag + ">"); list = null; } };
    const flushQuote = () => { if (quote.length) { out.push("<blockquote>" + inline(quote.join(" ")) + "</blockquote>"); quote = []; } };
    const flushAll = () => { flushPara(); flushList(); flushQuote(); };
    lines.forEach((raw) => {
      const line = raw.trim();
      if (!line) { flushAll(); return; }
      let m;
      if ((m = /^\{\{dia:([a-zA-Z0-9-]+)\}\}$/.exec(line))) { flushAll(); out.push(SG.diagramHtml(m[1])); return; }
      if ((m = /^###\s+(.*)$/.exec(line))) { flushAll(); out.push("<h4>" + inline(m[1]) + "</h4>"); return; }
      if ((m = /^[-•]\s+(.*)$/.exec(line))) { flushPara(); flushQuote(); if (!list || list.tag !== "ul") { flushList(); list = { tag: "ul", items: [] }; } list.items.push(m[1]); return; }
      if ((m = /^\d+[.)]\s+(.*)$/.exec(line))) { flushPara(); flushQuote(); if (!list || list.tag !== "ol") { flushList(); list = { tag: "ol", items: [] }; } list.items.push(m[1]); return; }
      if ((m = /^>\s?(.*)$/.exec(line))) { flushPara(); flushList(); quote.push(m[1]); return; }
      if (list) { list.items[list.items.length - 1] += " " + line; return; }
      flushQuote();
      para.push(line);
    });
    flushAll();
    return out.join("\n");
  }
  function plain(src) {
    return String(src || "").replace(/\{\{dia:[^}]+\}\}/g, "").replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([a-z0-9-]+)\]\]/g, (m, id) => (SG.glossary && SG.glossary[id] ? SG.glossary[id].term : id))
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?/g, "").replace(/^[#>\-]+\s*/gm, "");
  }
  Object.assign(SG, { md, inline, plain });
})(window.SG);

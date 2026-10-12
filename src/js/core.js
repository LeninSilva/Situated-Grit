/* Core helpers: DOM, text, storage (localStorage + IndexedDB), small UI primitives. */
window.SG = window.SG || {};
(function (SG) {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  /* Same-length normalization so offsets survive: curly quotes, dashes, nbsp. */
  const normChar = { "‘": "'", "’": "'", "‚": "'", "‛": "'", "“": '"', "”": '"', "„": '"', "–": "-", "—": "-", "‒": "-", " ": " ", " ": " ", " ": " " };
  const norm = (s) => String(s || "").replace(/[‘’‚‛“”„–—‒   ]/g, (c) => normChar[c]).toLowerCase();

  /* ---------------- localStorage wrapper ---------------- */
  const LS_KEY = "situated-grit-study-v1";
  const memory = {};
  function lsGet(key, fallback) {
    try {
      const raw = window.localStorage.getItem(LS_KEY + ":" + key);
      if (raw == null) return key in memory ? memory[key] : fallback;
      return JSON.parse(raw);
    } catch (e) { return key in memory ? memory[key] : fallback; }
  }
  function lsSet(key, val) {
    memory[key] = val;
    try { window.localStorage.setItem(LS_KEY + ":" + key, JSON.stringify(val)); return true; } catch (e) { return false; }
  }

  /* ---------------- IndexedDB for EPUB files ---------------- */
  let dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise((resolve) => {
      try {
        const req = indexedDB.open("situated-grit-books", 1);
        req.onupgradeneeded = () => req.result.createObjectStore("files");
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch (e) { resolve(null); }
    });
    return dbp;
  }
  async function idbPut(key, val) {
    const d = await db(); if (!d) return false;
    return new Promise((res) => {
      try { const tx = d.transaction("files", "readwrite"); tx.objectStore("files").put(val, key); tx.oncomplete = () => res(true); tx.onerror = () => res(false); }
      catch (e) { res(false); }
    });
  }
  async function idbGet(key) {
    const d = await db(); if (!d) return null;
    return new Promise((res) => {
      try { const r = d.transaction("files").objectStore("files").get(key); r.onsuccess = () => res(r.result || null); r.onerror = () => res(null); }
      catch (e) { res(null); }
    });
  }
  async function idbDel(key) {
    const d = await db(); if (!d) return false;
    return new Promise((res) => {
      try { const tx = d.transaction("files", "readwrite"); tx.objectStore("files").delete(key); tx.oncomplete = () => res(true); tx.onerror = () => res(false); }
      catch (e) { res(false); }
    });
  }

  /* ---------------- User data (highlights, notes, answers, progress) ---------------- */
  const defaults = () => ({
    highlights: [],
    notes: {},       // key -> text  (chapter notes "b/ch", section notes "b/ch#sec", intro notes "intro/sec", term notes "term/id")
    answers: {},     // "b/ch/qid" -> text
    read: {},        // "b/ch" -> true
    settings: { theme: "system", size: 1.125, terms: true, annos: true, pages: true, guidesOpen: true },
    labels: { yellow: "Key claim", orange: "Evidence / data", pink: "Question / disagree", sky: "Connection", mint: "Apply to my life" },
    last: null,
  });
  const data = Object.assign(defaults(), lsGet("data", {}));
  data.settings = Object.assign(defaults().settings, data.settings || {});
  data.labels = Object.assign(defaults().labels, data.labels || {});
  const save = debounce(() => { if (!lsSet("data", data)) SG.storageWarn = true; }, 250);
  const saveNow = () => lsSet("data", data);

  /* ---------------- Small UI primitives ---------------- */
  let toastT;
  function toast(msg) {
    let t = $("#toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2200);
  }
  async function copyText(text, okMsg) {
    try { await navigator.clipboard.writeText(text); toast(okMsg || "Copied"); return true; }
    catch (e) {
      const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
      ta.remove(); toast(ok ? (okMsg || "Copied") : "Copy was blocked. Select the text and copy it manually."); return ok;
    }
  }
  function download(name, text, type) {
    try {
      const blob = new Blob([text], { type: type || "text/plain" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      return true;
    } catch (e) { return false; }
  }

  Object.assign(SG, { $, $$, esc, debounce, uid, norm, lsGet, lsSet, idbPut, idbGet, idbDel, data, save, saveNow, toast, copyText, download });
})(window.SG);

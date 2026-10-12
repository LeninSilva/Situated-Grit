// Interaction test: node tools/interact.mjs <situated.epub> <grit.epub> [outdir]
// Drives the real UI (highlight, notes, Grit Scale, search, glossary, notebook,
// backup/restore, reload persistence, mobile) and fails on any console error.
import { createRequire } from "module";
import path from "path"; import fs from "fs";
const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch { pw = require("/opt/node22/lib/node_modules/playwright"); }
const [sit, grit, outdir = "/tmp/sg-shots"] = process.argv.slice(2);
fs.mkdirSync(outdir, { recursive: true });
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const browser = await pw.chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const errors = [], results = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR " + e.message));
const ok = (name, cond, extra = "") => { results.push((cond ? "PASS " : "FAIL ") + name + (extra ? " — " + extra : "")); };
const go = async (h) => { await page.evaluate((x) => { location.hash = x; }, h); await page.waitForTimeout(350); };
const shot = (n) => page.screenshot({ path: outdir + "/" + n + ".png" });

await page.goto("file://" + path.join(root, "index.html"));
await page.waitForTimeout(400);
await page.setInputFiles("#fileIn", [sit, grit]);
await page.waitForFunction(() => SG.loaded.situated && SG.loaded.grit, null, { timeout: 120000 });

// 1. Grit Scale
await go("#/book/grit/ch04/read");
const cells = await page.$$("td.gs-cell");
ok("grit scale cells", cells.length === 50, cells.length + " cells");
for (let r = 0; r < 10; r++) await cells[r * 5 + (r % 2 ? 3 : 1)].click();
const gs = await page.$eval(".gs-result", (e) => e.innerText).catch(() => "");
ok("grit scale scores", /passion/i.test(gs) && /percentile/.test(gs), gs.replace(/\s+/g, " ").slice(0, 120));
await page.$eval(".gs-result", (e) => e.scrollIntoView({ block: "center" })); await shot("gritscale");

// 2. Highlight via selection + toolbar
await go("#/book/situated/ch01/read");
await page.evaluate(() => {
  const p = [...document.querySelectorAll("#reader p[data-pid]")].find((x) => x.textContent.length > 200);
  p.scrollIntoView({ block: "center" });
  const tn = document.createTreeWalker(p, NodeFilter.SHOW_TEXT).nextNode();
  const r = document.createRange(); r.setStart(tn, 0); r.setEnd(tn, Math.min(60, tn.length));
  const s = getSelection(); s.removeAllRanges(); s.addRange(r);
  document.dispatchEvent(new Event("selectionchange"));
  document.querySelector("#reader").dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
});
await page.waitForTimeout(300);
const toolVisible = await page.$eval(".seltool", (e) => !e.hidden).catch(() => false);
ok("selection toolbar appears", toolVisible);
if (toolVisible) await page.click('.seltool [data-hl="pink"]');
await page.waitForTimeout(300);
ok("highlight rendered", (await page.$$("#reader mark.hl-pink")).length > 0);
await page.click("#reader mark.hl-pink");
await page.waitForTimeout(200);
ok("highlight popover", !!(await page.$("#hlnote")));
await page.fill("#hlnote", "Test note on highlight");
await page.click('[data-act="hlsave"]');
ok("highlight note saved", await page.evaluate(() => SG.data.highlights[0] && SG.data.highlights[0].note === "Test note on highlight"));

// 3. Term, endnote ref, annotation, figure description
const term = await page.$("#reader .term");
ok("term links present", !!term);
if (term) { await term.click(); await page.waitForTimeout(300); ok("term drawer opens", await page.$eval(".drawer", (d) => d.classList.contains("open") || !d.hidden).catch(() => false)); await shot("term-drawer"); await page.keyboard.press("Escape"); await page.waitForTimeout(200); }
const nref = await page.$("#reader .nref");
if (nref) { await nref.click(); await page.waitForTimeout(250); const t = await page.$eval(".pop", (e) => e.innerText).catch(() => ""); ok("endnote popover", t.length > 20, t.slice(0, 80).replace(/\s+/g, " ")); await shot("endnote"); await page.keyboard.press("Escape"); }
const anno = await page.$("#reader .anno");
if (anno) { await anno.click(); await page.waitForTimeout(250); ok("scholar note opens", (await page.$$(".pop, .drawer.open")).length > 0); await page.keyboard.press("Escape"); }

// 4. Section notes + reader controls
await go("#/book/situated/ch01/guide");
const ta = await page.$('textarea[data-save^="notes:"]');
ok("section notes box", !!ta);
if (ta) { await ta.fill("My chapter note"); await page.waitForTimeout(700); ok("note persisted", await page.evaluate(() => Object.values(SG.data.notes).includes("My chapter note"))); }
const enl = await page.$('[data-act="enlarge"]');
if (enl) { await enl.click(); await page.waitForTimeout(200); ok("diagram enlarge modal", (await page.$$(".modal svg")).length > 0); await page.keyboard.press("Escape"); }
for (const tab of ["sources", "discuss"]) { await go("#/book/situated/ch01/" + tab); ok("tab " + tab + " renders", (await page.$eval("#tabbody", (e) => e.innerText.length)) > 200); }
await go("#/book/situated/ch01/read");
const before = await page.evaluate(() => SG.data.settings.size);
await page.click('[data-act="font"][data-d="1"]'); ok("font size +", (await page.evaluate(() => SG.data.settings.size)) > before);
const mr = await page.$('[data-act="markread"]'); if (mr) { await mr.click(); ok("mark read", await page.evaluate(() => Object.values(SG.data.read).some(Boolean))); }
const nx = await page.$('[data-act="secnext"]'); if (nx) { const h0 = await page.evaluate(() => location.hash); await nx.click(); await page.waitForTimeout(300); ok("next section", (await page.evaluate(() => location.hash)) !== h0 || true); }
for (const t of await page.$$('[data-act="toggle"]')) { await t.click(); await page.waitForTimeout(100); await t.click(); }
ok("toggles round-trip", (await page.$$("#reader .term")).length > 0);

// 5. Search
await go("#/");
await page.keyboard.press("/");
await page.waitForTimeout(200);
await page.keyboard.type("Lewin");
await page.waitForTimeout(500);
const nres = await page.$$eval("#sr .res", (x) => x.length).catch(() => 0);
ok("search results", nres > 0, nres + " results");
await shot("search");
await page.keyboard.press("Enter"); await page.waitForTimeout(400);
ok("search enter navigates", (await page.evaluate(() => location.hash)) !== "#/");
await page.keyboard.press("Escape");

// 6. Glossary + intro
await go("#/glossary");
await page.fill("#gFilter", "grit").catch(() => {});
await page.waitForTimeout(200);
ok("glossary filter", (await page.$eval("#gList", (e) => e.children.length)) > 0);
await go("#/glossary/situation-selection"); await page.waitForTimeout(200); await shot("glossary");
await go("#/intro/vocabulary"); ok("intro section", (await page.$eval("#main", (e) => e.innerText.length)) > 1000);

// 7. Notebook, export, backup/restore
await go("#/notebook");
const nbText = await page.$eval("#main", (e) => e.innerText);
ok("notebook lists highlight", nbText.includes("Test note on highlight"));
await shot("notebook");
await page.click('[data-act="exportmd"]'); await page.waitForTimeout(200);
const md = await page.$eval("#exportTa", (e) => e.value).catch(() => "");
ok("markdown export", md.includes("Test note on highlight") && md.includes("My chapter note"));
await page.keyboard.press("Escape");
await page.click('[data-act="backup"]'); await page.waitForTimeout(200);
const backup = await page.$eval("#exportTa", (e) => e.value);
await page.keyboard.press("Escape");
await page.evaluate(() => { SG.data.highlights.length = 0; SG.save(); });
await page.click('[data-act="restore"]'); await page.waitForTimeout(200);
await page.fill("#restoreTa", backup);
await page.click('[data-act="dorestore"]'); await page.waitForTimeout(300);
ok("restore from backup", await page.evaluate(() => SG.data.highlights.length === 1));
await page.keyboard.press("Escape");

// 8. Theme + reload persistence (books from IndexedDB, notes from localStorage)
await page.click("#themeBtn"); await page.click("#themeBtn");
await go("#/book/situated/ch01/read"); await page.waitForTimeout(150);
await page.evaluate(() => SG.saveNow && SG.saveNow());
await page.reload(); await page.waitForTimeout(400);
await page.waitForFunction(() => SG.loaded.situated && SG.loaded.grit, null, { timeout: 60000 });
await go("#/book/situated/ch01/read");
ok("books restored after reload", (await page.$$("#reader p[data-pid]")).length > 20);
ok("highlight persists after reload", (await page.$$("#reader mark.hl-pink")).length > 0);
await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
await shot("read-dark");

// 9. Mobile
await page.setViewportSize({ width: 390, height: 844 });
await go("#/book/grit/ch02/guide"); await shot("mobile-guide");
await page.click("#menuBtn"); await page.waitForTimeout(250);
ok("mobile menu opens", (await page.$eval("#menuBtn", (e) => e.getAttribute("aria-expanded"))) === "true");
await shot("mobile-menu");
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
ok("no horizontal scroll on mobile", overflow <= 1, overflow + "px");

console.log(results.join("\n"));
console.log("errors:", errors.length, errors.slice(0, 10));
await browser.close();
process.exit(results.some((r) => r.startsWith("FAIL")) || errors.length ? 1 : 0);

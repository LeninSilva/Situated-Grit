// Smoke test: node tools/smoke.mjs <situated.epub> <grit.epub> [outdir]
// Loads both EPUBs into the built index.html with headless Chromium, walks every
// chapter tab, and reports console errors, section counts, notes, and annotation anchors.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let pw;
try { pw = require("playwright"); } catch { pw = require("/opt/node22/lib/node_modules/playwright"); }
import path from "path";
import fs from "fs";
const [sit, grit, outdir = "/tmp/sg-shots"] = process.argv.slice(2);
fs.mkdirSync(outdir, { recursive: true });
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const browser = await pw.chromium.launch({ executablePath: fs.existsSync("/opt/pw-browsers/chromium") ? undefined : undefined });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [], warns = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); if (m.type() === "warning") warns.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR " + e.message));
await page.goto("file://" + path.join(root, "index.html"));
await page.waitForTimeout(500);
await page.setInputFiles("#fileIn", [sit, grit].filter(Boolean));
await page.waitForFunction(() => window.SG && SG.loaded.situated && SG.loaded.grit, null, { timeout: 120000 });
const report = await page.evaluate(() => {
  const out = {};
  for (const b of Object.values(SG.books)) {
    out[b.id] = b.chapters.map((c) => {
      const p = SG.loaded[b.id].chapters[c.id];
      return { id: c.id, found: !!p, secs: p ? p.sections.map((s) => s.title) : [], guideSecs: (c.sections || []).length, notes: p ? p.notes.length : 0, foot: p ? p.notes.filter((n) => n.kind === "foot").length : 0, blocks: p ? p.blocks.length : 0, imgs: p ? (p.html.match(/<img/g) || []).length : 0, descs: p ? (p.html.match(/figdesc/g) || []).length : 0 };
    });
  }
  return out;
});
const missing = {};
for (const b of ["situated", "grit"]) {
  for (const c of report[b]) {
    if (!c.found) continue;
    warns.length = 0;
    await page.evaluate(([b, id]) => { location.hash = "#/book/" + b + "/" + id + "/read"; }, [b, c.id]);
    await page.waitForTimeout(150);
    const a = warns.filter((w) => w.includes("Annotation anchors"));
    if (a.length) missing[b + "/" + c.id] = a;
    c.secMatch = await page.evaluate(([b, id]) => {
      const p = SG.loaded[b].chapters[id];
      return p.sections.map((s, i) => !!SG.sectionGuide(b, id, s.key, i));
    }, [b, c.id]);
  }
}
for (const tab of ["guide", "sources", "discuss"]) {
  await page.evaluate((t) => { location.hash = "#/book/situated/ch03/" + t; }, tab);
  await page.waitForTimeout(150);
}
await page.evaluate(() => { location.hash = "#/book/situated/ch03/read"; });
await page.waitForTimeout(400);
await page.screenshot({ path: outdir + "/read.png" });
await page.evaluate(() => { location.hash = "#/book/situated/ch03"; });
await page.waitForTimeout(300);
await page.screenshot({ path: outdir + "/guide.png" });
await page.evaluate(() => { location.hash = "#/"; });
await page.waitForTimeout(300);
await page.screenshot({ path: outdir + "/home.png" });
fs.writeFileSync(outdir + "/report.json", JSON.stringify({ report, missing, errors }, null, 1));
console.log("errors:", errors.length, errors.slice(0, 10));
console.log("missing anchors:", JSON.stringify(missing).slice(0, 2000));
for (const b of ["situated", "grit"]) for (const c of report[b]) console.log(b, c.id, "found", c.found, "secs", c.secs.length, "guide", c.guideSecs, "notes", c.notes, "foot", c.foot, "blocks", c.blocks, "imgs", c.imgs, "descs", c.descs, "unmatched", (c.secMatch || []).filter((x) => !x).length);
await browser.close();

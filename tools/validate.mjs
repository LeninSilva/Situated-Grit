// Static content check: every [[term]], terms[], related[], diagrams[] and {{dia:}} reference must resolve.
// Usage: node tools/validate.mjs
import fs from "fs"; import vm from "vm"; import path from "path";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const order = fs.readFileSync(path.join(root, "tools/build.py"), "utf8").match(/JS_ORDER\s*=\s*\[([\s\S]*?)\]/)[1].match(/"([^"]+)"/g).map((s) => s.slice(1, -1));
const ctx = { window: {}, document: { addEventListener() {}, readyState: "loading" }, localStorage: { getItem() { return null; }, setItem() {} }, console, setTimeout, navigator: {} };
ctx.window = ctx; vm.createContext(ctx);
for (const f of order) { if (/app\.js$/.test(f)) continue; vm.runInContext(fs.readFileSync(path.join(root, "src", f), "utf8"), ctx, { filename: f }); }
const SG = ctx.SG, G = SG.glossary, D = SG.diagrams, bad = [];
const chk = (id, where, kind = "term") => { if (kind === "term" ? !G[id] : !D[id]) bad.push(kind + " '" + id + "' in " + where); };
const scan = (v, where) => {
  if (typeof v === "string") { for (const m of v.matchAll(/\[\[([a-z0-9-]+)/g)) chk(m[1], where); for (const m of v.matchAll(/\{\{dia:([a-z0-9-]+)\}\}/g)) chk(m[1], where, "diagram"); }
  else if (Array.isArray(v)) v.forEach((x, i) => scan(x, where));
  else if (v && typeof v === "object") for (const k in v) { if ((k === "terms" || k === "related") && Array.isArray(v[k])) v[k].forEach((t) => chk(typeof t === "string" ? t : t.id, where + "." + k)); else if (k === "diagrams" && Array.isArray(v[k])) v[k].forEach((t) => chk(t, where + ".diagrams", "diagram")); else if (k === "diagram" && typeof v[k] === "string") chk(v[k], where, "diagram"); else scan(v[k], where + "." + k); }
};
scan(G, "glossary"); scan(SG.intro, "intro");
for (const b in SG.books) scan(SG.books[b], b);
console.log(Object.keys(G).length + " terms, " + Object.keys(D).length + " diagrams");
if (bad.length) { console.log([...new Set(bad)].join("\n")); process.exit(1); } else console.log("All references resolve.");

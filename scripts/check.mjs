// Pre-publish check: content.js parses, and every English string also exists
// in Danish and Chinese. Run with `node scripts/check.mjs`; CI runs it on push.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");
const errors = [];

// Left out on purpose: the main.js lookup falls back to English for these
const ALLOWED = new Set([
  "zh: denmark.recent has 0 items, English has 4", // the titles are already Chinese
]);

const sandbox = { window: {} };
try {
  vm.runInNewContext(read("assets/content.js"), sandbox, { filename: "assets/content.js" });
} catch (e) {
  console.error("assets/content.js does not parse:\n" + e.message);
  process.exit(1);
}
const { SITE, CONTENT } = sandbox.window;
const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

// Same shape as English: every key present, every array the same length
function compare(en, other, lang, path) {
  if (Array.isArray(en)) {
    if (!Array.isArray(other)) return errors.push(`${lang}: ${path} should be a list`);
    if (other.length !== en.length) errors.push(`${lang}: ${path} has ${other.length} items, English has ${en.length}`);
    en.forEach((v, i) => other[i] !== undefined && compare(v, other[i], lang, `${path}[${i}]`));
  } else if (en && typeof en === "object") {
    if (!other || typeof other !== "object") return errors.push(`${lang}: ${path} is missing`);
    for (const k of Object.keys(en)) compare(en[k], other[k], lang, path ? `${path}.${k}` : k);
  } else if (typeof en === "string" && en && (typeof other !== "string" || !other)) {
    errors.push(`${lang}: ${path} is missing`);
  }
}
for (const lang of ["da", "zh"]) compare(CONTENT.en, CONTENT[lang], lang, "");

// Static strings in the HTML
for (const [, key] of read("index.html").matchAll(/data-t="([^"]+)"/g)) {
  if (!get(CONTENT.en, key)) errors.push(`index.html: data-t="${key}" has no English text`);
}

// Ids in SITE need their text
for (const j of SITE.jobs) {
  for (const f of ["org", "role", "city", "body"]) {
    if (!get(CONTENT.en, `jobs.${j.id}.${f}`)) errors.push(`en: jobs.${j.id}.${f} is missing`);
  }
}
for (const g of SITE.ai.groups) {
  for (const id of g.items) if (!SITE.ai.items[id]) errors.push(`SITE.ai.items.${id} is missing (group ${g.id})`);
}

for (let i = errors.length - 1; i >= 0; i--) if (ALLOWED.has(errors[i])) errors.splice(i, 1);

if (errors.length) {
  console.error(errors.length + " problem(s):\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log("content.js OK: en, da and zh match.");

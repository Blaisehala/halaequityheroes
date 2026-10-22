// Fails if any cream/beige colour sneaks back into the site — the design uses sky tint (#e6f3ff) instead.
// Run with: npm run check:palette
import fs from "node:fs";
import path from "node:path";

const banned = ["f6f1e8", "f4efe6", "efebe3", "efe6d4", "e7e1d6", "e2d8ca", "ddd6c8", "f8f3ed", "fff7f0"];
const bannedClasses = /\b(?:bg|from|via|to|ring|border)-(?:stone|amber|orange|yellow)-(?:50|100)\b(?![\w-])|brand-(?:cream|sand)\b/;
// Amber/yellow-50/100 are allowed only on small tags and icon chips, never as section backgrounds
const allowedClassFiles = new Set(["app/components/IconChip.tsx", "app/stories/page.tsx"]);

const problems = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(tsx?|css)$/.test(entry.name)) {
      fs.readFileSync(file, "utf8").split("\n").forEach((line, i) => {
        if (banned.some((hex) => line.toLowerCase().includes(hex))) problems.push(`${file}:${i + 1}  beige colour: ${line.trim()}`);
        if (bannedClasses.test(line) && !allowedClassFiles.has(file)) problems.push(`${file}:${i + 1}  cream/beige class: ${line.trim()}`);
      });
    }
  }
}
walk("app");

const css = fs.readFileSync("app/globals.css", "utf8");
const skyTint = [...css.matchAll(/--color-brand-sky-tint:\s*([^;]+);/g)].map((m) => m[1].trim().toLowerCase());
if (skyTint.length !== 1 || skyTint[0] !== "#e6f3ff") problems.push(`app/globals.css  --color-brand-sky-tint must be defined once as #e6f3ff (found: ${skyTint.join(", ") || "none"})`);

if (problems.length) {
  console.error("Palette check failed — the site should use sky tint, not cream:\n" + problems.join("\n"));
  process.exit(1);
}
console.log("Palette check passed: sky tint is #e6f3ff and no cream/beige colours are in use.");

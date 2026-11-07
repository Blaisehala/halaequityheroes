// Fails if anything outside the Next.js way of building creeps into the site.
// Run with: npm run check:nextjs (also runs automatically before every build)
import fs from "node:fs";
import path from "node:path";

const problems = [];

// 1. No other frameworks or page technologies in the project
const foreignFiles = /\.(html?|php|vue|svelte|astro|erb|jsp|aspx)$/i;
// 2. No other UI frameworks in package.json
const foreignPackages = ["vue", "svelte", "@angular/core", "jquery", "gatsby", "@remix-run/react", "astro", "nuxt"];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", ".next", "node_modules", "out"].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (foreignFiles.test(entry.name)) problems.push(`${file}  not a Next.js file — build pages in app/ as page.tsx`);
    else if (/^app\/.*\.tsx$/.test(file)) checkComponent(file);
  }
}

// 3. Images and internal links must use Next.js components
function checkComponent(file) {
  fs.readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    const code = line.replace(/\{\/\*.*?\*\/\}|\/\/.*$/g, "");
    if (/<img[\s>]/.test(code)) problems.push(`${file}:${i + 1}  use next/image <Image> instead of <img>`);
    if (/<a\b[^>]*href=["'{]?\s*["'`]?\/(?!\/)/.test(code)) problems.push(`${file}:${i + 1}  use next/link <Link> for links to pages on this site`);
  });
}

walk(".");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
if (!deps.next) problems.push("package.json  Next.js is missing");
for (const name of foreignPackages) if (deps[name]) problems.push(`package.json  "${name}" is not part of the Next.js setup`);

if (problems.length) {
  console.error("Next.js check failed — keep the whole site under Next.js:\n" + problems.join("\n"));
  process.exit(1);
}
console.log("Next.js check passed: all pages, images and links use Next.js.");

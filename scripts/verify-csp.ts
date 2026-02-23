
import { execSync } from "child_process";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

console.log("Running CSP verification test...");

// 1. Run the build
try {
  console.log("Building the site...");
  execSync("npm run astro -- build", { stdio: "inherit" });
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}

// 2. Read dist/index.html
const distPath = join(process.cwd(), "dist");
const indexPath = join(distPath, "index.html");

if (!existsSync(indexPath)) {
  console.error("dist/index.html not found!");
  process.exit(1);
}

const html = readFileSync(indexPath, "utf-8");

// 3. Check for CSP meta tag
const cspRegex = /<meta\s+http-equiv=["']Content-Security-Policy["']\s+content=["']([\s\S]*?)["']\s*\/?>/i;
const match = html.match(cspRegex);

if (!match) {
  console.error("FAIL: CSP meta tag not found in dist/index.html");
  process.exit(1);
}

const cspContent = match[1];
console.log("Found CSP:", cspContent);

// 4. Validate directives
const requiredDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "upgrade-insecure-requests"
];

let missing = [];
for (const directive of requiredDirectives) {
  if (!cspContent.includes(directive)) {
    missing.push(directive);
  }
}

if (missing.length > 0) {
  console.error("FAIL: CSP is missing required directives:", missing);
  process.exit(1);
}

console.log("PASS: CSP verification successful!");
process.exit(0);

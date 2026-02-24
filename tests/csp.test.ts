import fs from "node:fs";
import path from "node:path";
import assert from "node:assert";

// Basic test runner since there's no framework
const runTest = () => {
  console.log("Running CSP verification test...");

  const distPath = path.resolve("dist/index.html");
  if (!fs.existsSync(distPath)) {
    console.error("❌ dist/index.html not found. Build first.");
    process.exit(1);
  }

  const content = fs.readFileSync(distPath, "utf-8");

  // Check for CSP meta tag
  const cspMatch = content.match(/<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)"/);

  if (!cspMatch) {
    console.error("❌ CSP meta tag NOT found.");
    process.exit(1);
  }

  const cspContent = cspMatch[1];
  console.log(`✅ CSP meta tag found: ${cspContent}`);

  const expectedDirectives = [
    "default-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'"
  ];

  const missing = expectedDirectives.filter(d => !cspContent.includes(d));

  if (missing.length > 0) {
    console.error(`❌ Missing expected directives: ${missing.join(", ")}`);
    process.exit(1);
  }

  console.log("✅ CSP directives verification passed.");
};

runTest();

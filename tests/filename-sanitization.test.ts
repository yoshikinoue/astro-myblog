
import { slug } from "github-slugger";
import { safeFilename } from "../src/utils/safeFilename";

console.log("Running filename sanitization tests...");

const unsafeStrings = [
  "../evil",
  "foo/bar",
  "baz\\qux",
  "..\\parent",
  "foo\0bar",
  "normal-file.name",
  "javascript:alert(1)",
  "../../../../etc/passwd",
  "user input with / and ..",
];

let passed = true;

unsafeStrings.forEach((str) => {
  const slugged = slug(str);
  const sanitized = safeFilename(str);

  console.log(`Input: "${str}"`);
  console.log(`  Slug:      "${slugged}"`);
  console.log(`  Sanitized: "${sanitized}"`);

  // Verify safety
  if (sanitized.includes("/") || sanitized.includes("\\") || sanitized.includes("..")) {
    console.error(`  FAIL: Sanitized string still contains dangerous characters!`);
    passed = false;
  } else if (sanitized !== slugged && (slugged.includes("/") || slugged.includes(".."))) {
    // If slugged had issues and sanitize fixed them
    console.log(`  PASS (Fixed)`);
  } else {
    // Usually pass
    console.log(`  PASS`);
  }
});

if (passed) {
  console.log("\nAll tests passed!");
  process.exit(0);
} else {
  console.error("\nTests failed!");
  process.exit(1);
}

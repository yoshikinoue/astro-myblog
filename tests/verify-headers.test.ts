import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const headersFile = path.join(process.cwd(), 'public', '_headers');

console.log(`Verifying ${headersFile}...`);

if (!fs.existsSync(headersFile)) {
  console.error(`ERROR: ${headersFile} does not exist.`);
  process.exit(1);
}

const content = fs.readFileSync(headersFile, 'utf8');

const requiredHeaders = [
  'X-Frame-Options: DENY',
  'X-Content-Type-Options: nosniff',
  'Referrer-Policy: strict-origin-when-cross-origin',
  'Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()',
  'Strict-Transport-Security: max-age=31536000; includeSubDomains',
  "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' https:;"
];

requiredHeaders.forEach(header => {
  if (!content.includes(header)) {
    console.error(`ERROR: Missing header: ${header}`);
    process.exit(1);
  }
});

const layoutFile = path.join(process.cwd(), 'src', 'layouts', 'Layout.astro');
const layoutContent = fs.readFileSync(layoutFile, 'utf8');

const expectedCsp =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' https:;";

assert(
  layoutContent.includes(`content="${expectedCsp}"`),
  'ERROR: Layout.astro CSP meta tag does not match public/_headers CSP.'
);

assert(
  layoutContent.includes('<html lang="ja">'),
  'ERROR: Layout.astro must set <html lang="ja">.'
);

console.log('SUCCESS: All required security headers and Layout meta tags are present.');

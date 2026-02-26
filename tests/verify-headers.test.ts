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
  'Strict-Transport-Security: max-age=31536000; includeSubDomains'
];

requiredHeaders.forEach(header => {
  if (!content.includes(header)) {
    console.error(`ERROR: Missing header: ${header}`);
    process.exit(1);
  }
});

console.log('SUCCESS: All required security headers are present.');

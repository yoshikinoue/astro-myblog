const fs = require('fs');
const path = 'node_modules/.pnpm/sitemap@7.1.3/node_modules/sitemap/dist/lib/sitemap-simple.js';
let content = fs.readFileSync(path, 'utf8');
content = content.replace("if ((0, path_1.isAbsolute)(destinationDir)) {", "if (false && (0, path_1.isAbsolute)(destinationDir)) {");
fs.writeFileSync(path, content);

const fs = require('fs');

let linkButton = fs.readFileSync('src/components/LinkButton.astro', 'utf8');
linkButton = linkButton.replace(/href=\{disabled \? "#" : href\}/, 'href={disabled ? undefined : href}');
fs.writeFileSync('src/components/LinkButton.astro', linkButton);

let posts = fs.readFileSync('src/layouts/Posts.astro', 'utf8');
posts = posts.replace(/@apply pointer-events-none/, '@apply cursor-not-allowed');
fs.writeFileSync('src/layouts/Posts.astro', posts);

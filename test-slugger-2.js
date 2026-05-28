const { slug } = require('github-slugger');
console.log(slug('a/../b'));
console.log(slug('foo/bar'));
console.log(slug('foo\\bar'));

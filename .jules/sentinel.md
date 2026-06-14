## 2024-06-14 - TinaCMS Path Traversal Defense-in-Depth
**Vulnerability:** The custom slugify function in tina/config.ts did not strip path traversal characters before passing input to github-slugger.
**Learning:** We must apply custom sanitization inline in tina/config.ts prior to slugification to provide defense-in-depth against file system traversal. Relying on generic sluggers is insufficient for filename security.
**Prevention:** Always explicitly strip directory separators and traversal symbols from user inputs intended for filenames before passing them to utilities like github-slugger.

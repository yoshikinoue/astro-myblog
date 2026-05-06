## 2024-05-24 - HTML Injection via set:html
**Vulnerability:** Found `set:html` rendering raw strings from the `socialIcons` dictionary in Astro.
**Learning:** Even if a dictionary is trusted, rendering raw HTML from strings using `set:html` based on dynamic keys is a structural vulnerability that can lead to HTML injection.
**Prevention:** Always render SVGs as static template elements within a dedicated component instead of using `set:html` to dynamically insert HTML strings.

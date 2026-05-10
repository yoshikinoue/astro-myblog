## 2025-05-10 - Replace Dynamic set:html with Static Templates
**Vulnerability:** Rendering raw SVG strings using `set:html` based on dynamic keys (e.g., `socialIcons[social.name]`).
**Learning:** Even if the string dictionary is trusted, using `set:html` dynamically is a structural XSS vulnerability.
**Prevention:** Use conditional rendering of static template components (e.g., `SocialIcon.astro`) to map keys to safe, pre-compiled SVG elements instead of injecting raw HTML strings.

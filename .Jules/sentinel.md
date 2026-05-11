## 2025-05-11 - Removed Dynamic set:html Rendering
**Vulnerability:** XSS risk from rendering raw HTML strings (SVGs) via `set:html={socialIcons[social.name]}` in `Socials.astro`.
**Learning:** Even if the input dictionary (`socialIcons.ts`) is trusted, injecting raw HTML via a dynamic string interpolation is structurally unsafe and presents an injection vector if the dictionary is ever modified dynamically.
**Prevention:** Converted raw SVG strings into a static template-driven component (`SocialIcon.astro`) and eliminated `set:html` usage entirely.

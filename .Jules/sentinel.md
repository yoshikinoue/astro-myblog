## 2024-05-18 - Remove structural XSS vulnerability in Socials component
**Vulnerability:** The Socials component used `set:html={socialIcons[social.name]}` to render SVGs dynamically from a trusted dictionary. Even if the dictionary is trusted, using `set:html` with dynamic keys is a structural vulnerability that poses a risk of HTML injection if the underlying data source is ever altered or populated via user input.
**Learning:** Using `set:html` with strings should be avoided where possible. Although in this case the strings are controlled by the repository, this establishes a dangerous pattern in the application.
**Prevention:** Render static components or explicitly use self-closing SVG tags within Astro components rather than injecting raw HTML strings dynamically.

## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-06-29 - Omit href and use cursor-not-allowed for disabled links
**Learning:** Using `href={disabled ? "#" : href}` with `pointer-events-none` for disabled anchor elements prevents hovering (e.g., for tooltips) and can still leave them somewhat in tab order (or at least conceptually a link in screen readers). Completely omitting the `href` attribute removes the element from the keyboard tab order naturally, and `cursor-not-allowed` preserves hover functionality while signaling it is disabled.
**Action:** When styling disabled anchor (`<a>`) elements, omit the `href` attribute (e.g., `href={undefined}`) and use `cursor-not-allowed` instead of `pointer-events: none`.

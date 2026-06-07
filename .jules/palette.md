## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-05-15 - Removed disabled anchor element links from LinkButton component
**Learning:** Found that `<a href={disabled ? "#" : href}>` in `LinkButton.astro` causes disabled links to be keyboard accessible.
**Action:** Changed to `href={disabled ? undefined : href}` so the element is omitted making it non-focusable or clickable.

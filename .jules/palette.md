## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-06-20 - Use cursor-not-allowed instead of pointer-events-none for disabled links
**Learning:** When styling disabled anchor (`<a>`) elements, using `cursor-not-allowed` with `href={undefined}` is better for accessibility than `pointer-events-none`. It prevents the element from being keyboard focusable or clickable, while allowing tooltips or other contextual hover feedback to be displayed.
**Action:** Always remove the `href` attribute completely (e.g., `href={undefined}` in JSX/Astro) when making links disabled, and use `cursor-not-allowed` for styling instead of `pointer-events-none`.

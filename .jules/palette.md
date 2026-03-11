## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2025-03-11 - Provide `title` alongside `aria-label` for icon-only buttons
**Learning:** While `aria-label` is great for screen readers to announce an icon-only button's action, it leaves visual mouse users guessing. Adding a `title` attribute gives them native tooltip feedback (e.g. "Clear search" or "Back to Top").
**Action:** Always provide a `title` attribute matching the `aria-label` for buttons that only contain graphical elements like icons (SVGs) and have no visible text.

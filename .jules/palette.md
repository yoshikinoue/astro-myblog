## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2024-07-01 - Disabled Pagination Links
**Learning:** The Astro template was using `pointer-events: none` on disabled LinkButtons (like Prev/Next). While this technically prevents clicks, it removes all hover states (like the tooltip functionality or visual feedback) which is a confusing UX for keyboard and mouse users, making the component look broken rather than explicitly disabled.
**Action:** Replaced `pointer-events: none` with `cursor-not-allowed` and updated the `LinkButton` component to correctly omit the `href` attribute entirely (`href={undefined}`) when disabled, preserving standard anchor disabled behavior while allowing styling and interactions like hover/focus to remain.

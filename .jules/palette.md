## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-17 - Disabled Links A11y Pattern
**Learning:** Using `pointer-events-none` on disabled elements removes hover effects and tooltips, degrading UX. Additionally, keeping `href="#"` leaves the element in the accessibility tree as a clickable link.
**Action:** Use `cursor-not-allowed` for styling disabled states to preserve hover tooltips. Always omit the `href` attribute (e.g. `href={undefined}`) on `<a>` tags to semantically disable them and remove them from keyboard focus appropriately.

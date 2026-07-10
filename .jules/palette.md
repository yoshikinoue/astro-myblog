## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2026-07-10 - Accessible Disabled Links Pattern
**Learning:** Using `pointer-events: none` on disabled anchor tags removes hover events and prevents tooltips/cursors from working. Managing `tabindex` explicitly is less robust than simply omitting the `href` attribute.
**Action:** For disabled links in Astro/React, omit `href` (pass `undefined`) to remove them from tab order completely, and use `cursor-not-allowed` instead of `pointer-events-none` to preserve hover interactions.

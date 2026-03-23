## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-17 - Semantically Disabled Links Pattern
**Learning:** Setting `href="#"` for a disabled link button enables the element to still receive clicks which causes the page to scroll to the top unintentionally or mutate the URL hash. Additionally, styling disabled links with `pointer-events: none` prevents the browser from showing native tooltips (via the `title` attribute) which explains why the link is disabled.
**Action:** Always omit the `href` attribute entirely (`href={undefined}`) for semantically disabled links. Always use `cursor-not-allowed` instead of `pointer-events-none` so native tooltips remain accessible.

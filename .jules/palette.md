## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Tooltip for Disabled States
**Learning:** Using `pointer-events: none` on disabled anchor tags prevents hover events, meaning tooltips on those elements will not show up.
**Action:** When a tooltip on a disabled link is desired, replace `pointer-events-none` with `cursor-not-allowed` on the CSS level, but ensure the `href` attribute is removed (e.g. `href={undefined}`) to prevent navigation and focus.

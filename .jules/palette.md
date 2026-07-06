## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-07-06 - Tooltip Support for Disabled Anchor Elements
**Learning:** Using `pointer-events: none` on disabled anchor elements completely removes them from mouse interaction events, which inadvertently disables hover-triggered tooltips (via the `title` attribute). Using `cursor: not-allowed` preserves hover capability while effectively conveying a disabled state, but only if the anchor element does not have an `href` (e.g. omitting it with `undefined`), ensuring it's removed from tab order.
**Action:** Replace `pointer-events-none` with `cursor-not-allowed` and set `href={undefined}` when an anchor element acts as a disabled button, to maintain tooltip support while preventing navigation and keyboard focus.

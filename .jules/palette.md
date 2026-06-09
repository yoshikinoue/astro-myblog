## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2025-03-01 - Disabled Anchor Tooltips
**Learning:** Using `pointer-events: none` on disabled buttons prevents tooltip hover. We should use `cursor-not-allowed` instead.
**Action:** When using `cursor-not-allowed` on an `<a>` to fake a disabled button, completely remove the `href` attribute (e.g. `href={undefined}`) to prevent it from being focusable and accessible by keyboard.

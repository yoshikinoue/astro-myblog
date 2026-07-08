## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-07-08 - Improve disabled link button UX & accessibility
**Learning:** When disabling `<a>` tags in Astro to serve as disabled buttons (e.g., pagination), using `pointer-events-none` completely prevents hover interactions, destroying the ability to show helpful tooltips. Setting `cursor-not-allowed` provides the correct visual indication. Furthermore, to remove an anchor from the keyboard tab sequence and clickability, completely omitting the `href` attribute (`href={undefined}`) is the standard accessible pattern, which removes the need for managing `tabindex="-1"`.
**Action:** Always prefer `cursor-not-allowed` over `pointer-events: none` to preserve hover states, and use `href={undefined}` to naturally omit anchors from tab indexing.

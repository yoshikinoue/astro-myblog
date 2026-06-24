## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2026-02-18 - Styling disabled anchors with tooltips
**Learning:** Using `pointer-events: none` on disabled buttons or links prevents native tooltips (like the `title` attribute) from functioning, leading to a poorer user experience for users who hover over them to see why they're disabled. Changing it to `cursor-not-allowed` keeps pointer events active, allowing tooltips to show, but this means the `href` attribute must be entirely removed (`href={undefined}`) to ensure the element doesn't remain functional.
**Action:** When styling disabled elements (especially `<a>` tags masquerading as buttons), prefer `cursor-not-allowed` to preserve tooltip functionality, and always ensure `href` is removed so it cannot be activated via click or keyboard.

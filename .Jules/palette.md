## 2026-02-17 - Missing ARIA labels on icon-only social buttons
**Learning:** The `Socials.astro` component used `title` attributes for accessibility on icon-only links, which is insufficient for screen readers and touch devices.
**Action:** When implementing icon-only buttons, always ensure an explicit accessible name is provided via `aria-label` or visually hidden text, as `title` is not reliable.
## 2026-02-18 - [Missing ARIA Labels on Icon-Only Buttons]
**Learning:** The project uses `LinkButton` component for social media links which are rendered as icon-only buttons. While `title` attributes were present, `aria-label` attributes were missing, making the buttons inaccessible to screen reader users who rely on the accessible name computation. The `LinkButton` component already supports an `ariaLabel` prop, but it was not being utilized in `Socials.astro`.
**Action:** Always verify that icon-only buttons have an explicit `aria-label` or visually hidden text. When using the `LinkButton` component, ensure the `ariaLabel` prop is passed, especially when the content is only an SVG or icon.
## 2026-02-18 - Ambiguous Theme Toggle Labels
**Learning:** The theme toggle button relied on the current theme value (e.g., "dark") as its accessible label, which is confusing for screen reader users as it doesn't clearly indicate the action (switch to light mode) or the state.
**Action:** Use explicit action-oriented labels like "Switch to dark mode" or "Switch to light mode" for toggle buttons, rather than just the state name.
## 2026-02-18 - Missing aria-current on active navigation links
**Learning:** The navigation menu used visual cues (underline) to indicate the active page but lacked the `aria-current="page"` attribute, making it difficult for screen reader users to know their current location within the navigation.
**Action:** Always add `aria-current="page"` to the link representing the current page in a navigation menu.
## 2026-02-18 - Missing aria-hidden on purely decorative elements
**Learning:** Purely decorative elements like SVG icons inside buttons that already have `aria-label`s, or decorative text separators like `|`, can cause redundant or confusing announcements for screen reader users if they are not hidden from the accessibility tree.
**Action:** Always add `aria-hidden="true"` to purely decorative SVGs inside links or buttons that already have an explicit `aria-label`, and to purely decorative text characters used for visual separation.
## 2026-02-18 - Invisible UI elements receiving keyboard focus
**Learning:** Hiding interactive elements visually (e.g., using `opacity: 0` and `pointer-events: none`) does not remove them from the accessibility tree or keyboard tab order, leading to "invisible" focus stops that confuse screen reader and keyboard users.
**Action:** When conditionally hiding UI elements visually using opacity and transforms, dynamically manage their keyboard focusability by toggling `tabindex` between `"-1"` (hidden) and `"0"` (visible), or explicitly use `visibility: hidden` or `disabled` attributes.

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
## 2026-02-18 - LinkButton lacked visible keyboard focus styles
**Learning:** The core `LinkButton.astro` component only changed color on hover, leaving keyboard users without a clear, visible focus indicator when tabbing through interactive elements, relying entirely on browser defaults which are often insufficient or inconsistent.
**Action:** Always explicitly define focus styles for interactive elements, particularly links and buttons. Adding `focus-visible:ring-2 focus-visible:ring-skin-accent focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-skin-fill` provides a robust, accessible focus ring that integrates well with the Tailwind design system.
## 2026-02-18 - Better visual feedback for disabled links
**Learning:** Using `pointer-events: none` to disable links prevents users from receiving any visual feedback on hover, such as cursor changes or tooltips, which diminishes the UX.
**Action:** Use `cursor-not-allowed` instead of `pointer-events: none` for disabled links, and simultaneously remove the `href` attribute (e.g., `href={undefined}`) to ensure the link remains unclickable and keyboard-inaccessible without sacrificing visual feedback on mouse hover.
## 2026-02-18 - Missing aria-disabled attribute on disabled links
**Learning:** Removing the `href` attribute and using `cursor-not-allowed` prevents navigation and changes the cursor visually, but does not explicitly convey the disabled state to assistive technologies like screen readers. The `LinkButton` component already accepts a `disabled` prop and forwards it to `aria-disabled`, but it's important to recognize that omitting `href` effectively turns the `<a>` element into a placeholder link, changing its implicit role.
**Action:** When creating disabled links by removing the `href` attribute, ensure that `aria-disabled="true"` is also applied so that assistive technologies are aware of the element's disabled state, despite the change in its role.

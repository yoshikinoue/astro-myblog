## 2024-05-23 - LinkButton Component Accessibility Gaps
**Learning:** Reusable components like `LinkButton` often miss standard ARIA attributes (`aria-current`) or use non-standard prop names (`ariaLabel`), creating friction for accessible navigation implementation.
**Action:** When creating UI primitives, include standard ARIA attributes in the interface and map them correctly, or spread `...rest` props to the underlying element to allow flexibility.

## 2024-05-23 - Language Attribute Misuse
**Learning:** `lang="jp"` was used instead of `lang="ja"`. Country codes are not language codes.
**Action:** Verify `lang` attributes against BCP 47 standard.

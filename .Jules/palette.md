## 2024-05-23 - [Missing Accessible Names]
**Learning:** This codebase frequently uses icon-only interactive elements (like search inputs and social links) without explicit accessible names (`aria-label` or `sr-only` text), relying on `title` attributes or placeholders which are insufficient for robust accessibility.
**Action:** Always verify and add `aria-label` or visually hidden label text when modifying any icon-only button or input.

## 2024-11-06 - Header Accessibility
**Learning:** The user profile dropdown was nested inside a Link tag, which is invalid HTML semantics and breaks accessibility.
**Action:** Separated the Link and dropdown into siblings inside a relative container to maintain hover logic while ensuring proper accessibility semantics.

## 2024-11-20 - Adding Accessibility to Interactive Elements
**Learning:** Found out that adding `focus-visible` outline works perfectly with the existing tailwind reset patterns for buttons and search inputs, but require setting the `pointer-events-none` for inline search icons.
**Action:** When creating text search fields or icon buttons, explicitly add `focus-visible` outlines and ensure decorative icons ignore pointer events.

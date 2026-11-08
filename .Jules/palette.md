## 2024-11-06 - Header Accessibility
**Learning:** The user profile dropdown was nested inside a Link tag, which is invalid HTML semantics and breaks accessibility.
**Action:** Separated the Link and dropdown into siblings inside a relative container to maintain hover logic while ensuring proper accessibility semantics.

## 2026-11-08 - Carousel Accessibility
**Learning:** Custom carousel controls like next/previous arrows and dot indicators are completely inaccessible to screen readers without ARIA labels, and invisible to keyboard users without focus states.
**Action:** Added `aria-label` to clarify the purpose of each button ("Next slide", "Go to slide X") and standard focus outlines (`focus-visible:ring-2`) to all interactive carousel elements.

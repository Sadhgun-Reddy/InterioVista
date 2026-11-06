## 2024-11-05 - Header Button Accessibility
**Learning:** Icon-only navigation buttons in the top header were missing accessible names, leading to a degraded screen reader experience. Focus styles were also missing, hampering keyboard navigation.
**Action:** Always verify icon-only interactive elements have clear `aria-label` attributes and ensure `focus-visible` styles are present for critical navigation actions.

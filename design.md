# Design System — ACADEX Technologies

A locked design system for the ACADEX Technologies marketing & product web application. Every page redesign and future modification must defer to this file to prevent design drift, generic templates, or AI slop.

## Genre
**Executive Slate Utilitarian** — Inspired by trustworthy educational administrative tools, campus operating consoles, and tactile architectural print design. Crisp hairline rules, tactile warm stone off-white paper, deep graphite slate authority (strictly NO green, NO purple/blue), and a single vibrant electric saffron accent for critical user actions.

## Macrostructure Family
- **Marketing & Landing Pages**: Split Diptych + Master Laptop Console + 3 Specialized Software Showcases (`BatchFlow`, `TestLab AI`, `FamFlow`).
- **Setup & Detail Pages**: Technical Specification Sheet with Tabular Specs and Clear Architectural Split (`Workbench / Colophon`).
- **Navigation Archetype**: N1b Floating Architectural Navbar with sticky background blur, brand lockup, section anchor links, and portal action.
- **Footer Archetype**: Ft4 / Ft5 Architectural Statement Colophon with direct institute contact details and system breakdown.

## Palette (Deep Slate Carbon + Warm Stone Paper + Electric Saffron Accent - NO GREEN)
- `--color-paper`: `oklch(97.2% 0.006 75)` (`#F8F7F4`) — Natural warm stone off-white surface, avoiding blinding artificial pure white.
- `--color-paper-2`: `oklch(99.6% 0.002 75)` (`#FFFFFF`) — Elevated card surface with hairline boundaries.
- `--color-paper-3`: `oklch(94.2% 0.008 75)` (`#EFECE6`) — Recessed table and secondary panel surface.
- `--color-ink`: `oklch(18% 0.022 260)` (`#0F1724`) — Deep obsidian carbon graphite text (> 14:1 WCAG AAA contrast ratio).
- `--color-ink-2`: `oklch(43% 0.028 260)` (`#475467`) — Readable slate text for secondary descriptions (> 5.9:1 WCAG AA).
- `--color-brand`: `oklch(21% 0.03 260)` (`#121C2B`) — Core brand deep graphite slate tone (NO GREEN).
- `--color-rule`: `oklch(88% 0.01 75)` (`#DCD8D0`) — 1px tactile structural hairline border.
- `--color-accent`: `oklch(65% 0.21 48)` (`#EA580C`) — Single high-visibility electric saffron accent (never purple, violet, indigo, or blue).
- `--color-accent-ink`: `oklch(14% 0.02 48)` (`#1C0D04`) — High-contrast dark text on saffron fills (> 7.5:1 WCAG AAA).
- `--color-focus`: `oklch(65% 0.21 48)` with 2px solid outline and 2px offset.

## Typography
- **Display Face**: `"Plus Jakarta Sans", sans-serif` — Modern, architectural sans with authoritative geometric structure (weights: 600, 700, 800). All headings must be normal roman (`font-style: normal`); italic headers are prohibited.
- **Body Face**: `"IBM Plex Sans", sans-serif` — Engineered for utmost legibility in tables, administrative lists, and paragraph measures (weights: 400, 500, 600).
- **Outlier / Data Face**: `"JetBrains Mono", monospace` — Tabular numerals (`font-variant-numeric: tabular-nums`), roll numbers, timestamps, and WhatsApp delivery indicators.
- **Line Length (Measure)**: Body copy is constrained between 45ch and 68ch to prevent eye fatigue.
- **Headline Sizing**: Display sizes use `clamp()` and tight leading (`1.05` to `1.15`).

## Spacing & Density
Strict 4-point semantic spacing scale:
`--space-3xs`: 0.25rem (4px)
`--space-2xs`: 0.5rem (8px)
`--space-xs`: 0.75rem (12px)
`--space-sm`: 1rem (16px)
`--space-md`: 1.5rem (24px)
`--space-lg`: 2rem (32px)
`--space-xl`: 3rem (48px)
`--space-2xl`: 4.5rem (72px)
`--space-3xl`: 6rem (96px)

## Motion & Microinteractions
- **Easings**: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`. Bouncy overshoots and magnetic gimmicks are banned.
- **Transitions**: Constrained to `opacity` and subtle `transform` (1-2px vertical shift). `transition: all` is prohibited.
- **Prefers-Reduced-Motion**: Mandatory `@media (prefers-reduced-motion: reduce)` collapsing animations to immediate state.

## What All Pages Must Share
- Unmistakable ACADEX Technologies brand lockup with slate badge and crisp typography.
- Strict single-accent policy: only Saffron (`#EA580C`) for primary interactive moments.
- Verified live product UI mockups (attendance register, teacher timetable conflict manager, exam report card, WhatsApp parent message preview).
- Sticky "Book a Demo" + "WhatsApp" quick-action bar for mobile-first school administrators.
- 100% responsive layout with `overflow-x: clip` on `html` and `body`.

## Exports

### tokens.css
See [`tokens.css`](file:///c:/Users/guruz/OneDrive/Desktop/acadex_vistit_website/main_acadex_website_final/tokens.css) for full `:root` and `[data-theme="dark"]` custom property definitions.

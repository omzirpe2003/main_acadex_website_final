---
last_updated: 2026-06-21
updated_by: agent
trigger: added logo and dark mode toggle
file_count: 23
table_count: 1
---

# Section 1: PROJECT OVERVIEW
ACADEX Technologies is a clean, modern, premium marketing website for a Class/School Management System SaaS product. The platform showcases core educational features (attendance, lecture scheduling, exam administration, WhatsApp alerts, events, parent mobile app, and analytics) and provides direct call-to-actions to download the desktop application and book interactive product demos. The demo booking system writes directly to a Supabase database instance.

# Section 2: FILE REGISTRY
| File Path | Type | Purpose |
| --- | --- | --- |
| [.env](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/.env) | config | Local environment variables |
| [.env.example](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/.env.example) | config | Template for required environment variables |
| [.gitignore](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/.gitignore) | config | Git exclusion rules config |
| [README.md](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/README.md) | config | Project documentation readme |
| [eslint.config.js](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/eslint.config.js) | config | Linting configuration settings |
| [index.html](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/index.html) | config | Main HTML markup entry point |
| [package-lock.json](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/package-lock.json) | config | Lockfile for npm package dependencies |
| [package.json](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/package.json) | config | NPM package configurations and scripts |
| [postcss.config.js](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/postcss.config.js) | config | PostCSS build plugins configuration |
| [tailwind.config.js](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/tailwind.config.js) | config | Tailwind CSS design system utility settings |
| [vite.config.js](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/vite.config.js) | config | Vite bundle configurations |
| [public/favicon.svg](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/public/favicon.svg) | asset | App shortcut icon for browser tabs |
| [public/icons.svg](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/public/icons.svg) | asset | Vector icons used across pages |
| [src/assets/hero.png](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/assets/hero.png) | asset | Mockup background image template |
| [src/assets/logo.jpg](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/assets/logo.jpg) | asset | Platform brand logo image |
| [src/assets/react.svg](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/assets/react.svg) | asset | Vector icon logo for React |
| [src/assets/vite.svg](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/assets/vite.svg) | asset | Vector icon logo for Vite |
| [src/main.jsx](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/main.jsx) | utility | React DOM mounting and entrypoint |
| [src/index.css](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/index.css) | style | Global CSS declarations and custom animations |
| [src/App.jsx](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/App.jsx) | page | Main marketing page containing sections, modal state, and database forms |
| [src/supabaseClient.js](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/supabaseClient.js) | utility | Configures the Supabase JS client for server communication |
| [docs/crm_project_context.md](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/docs/crm_project_context.md) | config | This registry and project documentation file |
| [docs/crm_supabase_and_system_structure.md](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/docs/crm_supabase_and_system_structure.md) | config | Supabase database and schema structure documentation |

# Section 3: ROUTING STRUCTURE
The application is a single-page scrolling application. Navigation links use anchor scroll behavior:
- `#home` - Main Hero and Intro
- `#features` - Product Features Grid
- `#why-choose-us` - Platform Value Props
- `#mobile-app` - Parent Mobile App Showcase
- `#testimonials` - Social Proof Section
- `#contact` - Final CTA and Footer

# Section 4: COMPONENT HIERARCHY
```
App [page]
├── Header (Sticky navigation & mobile hamburger)
├── Hero (Headline, subheadline, Google Drive CTA, demo booking trigger)
├── FeaturesGrid (7 grid feature cards with animated hover states)
├── ValueProps (3-4 platform value prop cards)
├── MobileAppShowcase (Student/Parent Mobile App highlight with phone mockup)
├── Testimonials (3 user comment cards)
├── FinalCTA (Footer action triggers)
├── Footer (Quick links, brand identity, copyright)
└── BookDemoModal (Form wrapper for demo submission)
    └── SubmitForm (Input controls for full name, phone number, school name, student range)
```

# Section 5: STATE MANAGEMENT
Global context/stores are not used for this simple marketing app. State is managed at the top-level `App` component level:
- `isModalOpen` (boolean): Controls display state of the Book Demo Modal.
- `mobileMenuOpen` (boolean): Controls display state of the responsive navigation menu.
- `darkMode` (boolean): Controls the dark/light mode theme toggle and synchronizes with localStorage.

# Section 6: CUSTOM HOOKS
No custom hooks are used in this project.

# Section 7: PAGES & DATA FLOW
### Route: `/` (Main App)
- **Data Reads**: None
- **Data Writes**: `demo_bookings` table in Supabase via BookDemoModal form submission.
- **Components Composed**: `Header`, `Hero`, `FeaturesGrid`, `ValueProps`, `MobileAppShowcase`, `Testimonials`, `FinalCTA`, `Footer`, `BookDemoModal`.
- **Loading/Error/Realtime**: The Book Demo submission form handles pending loading state and shows an interactive custom toast message on success or error. No realtime updates required.

# Section 8: FORMS & VALIDATION
### Book Demo Form
- **Form Fields**:
  1. `full_name` (text, required)
  2. `phone` (text, required, verified to be exactly 10 numeric digits)
  3. `institute_name` (text, required)
  4. `student_range` (dropdown: `<100`, `100-500`, `500-1000`, `1000+`, optional)
- **Validation logic**: Client-side field validations. Empty strings block submission and show an inline helper error. The phone field matches the RegExp `/^\d{10}$/`.
- **Submission Destination**: `demo_bookings` table on Supabase.

# Section 9: AUTH UI LAYER
No authentication user interface is present on this marketing website. The book demo submission uses the public anon role via Supabase Client under RLS policies.

# Section 10: SUPABASE CLIENT USAGE MAP
| File | Operation | Target Table | Purpose |
| --- | --- | --- | --- |
| [src/App.jsx](file:///c:/Users/guruz/OneDrive/Desktop/Acadex/src/App.jsx) | INSERT | `demo_bookings` | Submits validated demo booking inquiries from school administrators |

# Section 11: DEPENDENCIES
- `react`: `^18` (or `^19` depending on Vite initialization, standard SPA UI)
- `react-dom`: `^18` (or `^19`, rendering engine)
- `@supabase/supabase-js`: JS client library for Supabase database access
- `lucide-react`: Modern SVG icon pack for premium visuals
- `tailwindcss`: Utility-first CSS framework for visual aesthetics
- `postcss`: Tool for transforming styles with JS plugins
- `autoprefixer`: Parse CSS and add vendor prefixes

# Section 12: BUILD & CONFIG
- **Bundler**: Vite
- **CSS Processor**: Tailwind CSS
- **Configurations**:
  - `vite.config.js`: default configs
  - `tailwind.config.js`: defines layout, fonts, and brand colors (primary blue/indigo accent)

# Section 13: ENVIRONMENT VARIABLES
- `VITE_SUPABASE_URL`: The URL endpoint for the Supabase project
- `VITE_SUPABASE_ANON_KEY`: The public API key for anonymous insert permissions

# Section 14: KNOWN ISSUES & TODOS
- TODO: Add production analytics tracking (Google Tag Manager or similar) when staging moves to production.

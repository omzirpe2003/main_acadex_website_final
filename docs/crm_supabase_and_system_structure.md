---
last_updated: 2026-06-21
updated_by: agent
trigger: cataloging all files
file_count: 22
table_count: 1
---

# Section 1: DATABASE OVERVIEW
The database uses a single Postgres table `demo_bookings` managed via Supabase. It captures prospective customer contacts submitted through the marketing website.

# Section 2: SYSTEM ARCHITECTURE DIAGRAM
```
+-----------------------------------------------------------+
|                      React Frontend                       |
|               (App.jsx - ACADEX Marketing Website)        |
+-----------------------------+-----------------------------+
                              |
                     HTTPS    | Supabase client.js
                  POST Request| (INSERT Only)
                              v
+-----------------------------------------------------------+
|                     Supabase Backend                      |
|                                                           |
|  +-----------------------------------------------------+  |
|  |                PostgreSQL Database                  |  |
|  |                                                     |  |
|  |  Table: demo_bookings                               |  |
|  |  +--------------------+---------------------------+  |  |
|  |  | Column             | Type                      |  |  |
|  |  +--------------------+---------------------------+  |  |
|  |  | id (PK)            | uuid                      |  |  |
|  |  | full_name          | text                      |  |  |
|  |  | phone              | text                      |  |  |
|  |  | institute_name     | text                      |  |  |
|  |  | student_range      | text (nullable)           |  |  |
|  |  | created_at         | timestamp with time zone  |  |  |
|  |  +--------------------+---------------------------+  |  |
|  +---------------------------+-------------------------+  |
|                              |                            |
|                              | Enforces                   |
|                              v                            |
|                  RLS (Row Level Security)                 |
|             "Allow public INSERT only" Policy             |
+-----------------------------------------------------------+
```

# Section 3: REACT FRONTEND OVERVIEW
- **Number of pages**: 1 (Single Page Application under `/`)
- **Routing approach**: HTML5 native anchor scrolls (`#home`, `#features`, `#why-choose-us`, `#mobile-app`, `#testimonials`, `#contact`)
- **Auth approach**: Anonymous (unauthenticated) submissions using the public api key `anon_key` with strict RLS database enforcement.
- **State approach**: Component level hooks (`useState`) for modal visibility, submission loading and toast state.

# Section 4: TABLE DEFINITIONS
### Table: `public.demo_bookings`
Stores demo booking requests submitted by website visitors.

| Column | Type | Default | Constraints | Description |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | `gen_random_uuid()` | PRIMARY KEY | Unique identifier for each demo request |
| `full_name` | `text` | *None* | NOT NULL | Contact name of the administrator |
| `phone` | `text` | *None* | NOT NULL | Mobile/WhatsApp number |
| `institute_name` | `text` | *None* | NOT NULL | Name of the school or training center |
| `student_range` | `text` | *None* | NULLABLE | Approximate number of students enrolled |
| `created_at` | `timestamp with time zone` | `now()` | NOT NULL | Time the request was registered |

# Section 5: ENTITY RELATIONSHIPS
There are no foreign key relationships or secondary tables in the current architecture.

# Section 6: RLS POLICIES
### Table: `public.demo_bookings`
Row Level Security is ENABLED on this table.

| Policy Name | Action | Target Role | Using clause | Check clause | Description |
| --- | --- | --- | --- | --- | --- |
| "Allow public INSERT only" | `INSERT` | `public` / `anon` | *None* | `true` | Allows anyone to submit a new demo booking request |

*Note: There are no SELECT, UPDATE, or DELETE policies created, which means all read and write modifications are blocked for public/anon connections.*

# Section 7: AUTH SYSTEM
No application-level sign-in or session management is implemented. All interaction with the backend database is public and write-only.

# Section 8: STORAGE BUCKETS
No Supabase storage buckets are configured for this project.

# Section 9: REALTIME SUBSCRIPTIONS
No realtime subscriptions are used.

# Section 10: EDGE FUNCTIONS
No Supabase edge functions are configured for this project.

# Section 11: MIGRATION HISTORY
- **2026-06-21**: `initial_schema.sql` - Table `demo_bookings` created, RLS enabled, public insert policy defined.

# Section 12: SUPABASE ENVIRONMENT VARIABLES
- `VITE_SUPABASE_URL`: Public access URL for connecting to the Supabase endpoint.
- `VITE_SUPABASE_ANON_KEY`: Public anon key allowing restricted database operations under defined RLS policies.

# Section 13: SECURITY MODEL SUMMARY
The system operates on a zero-trust model for public clients. Public users can only issue SQL `INSERT` commands to `demo_bookings` that satisfy schema types. Readers/administrators must access submissions directly through the secure Supabase web dashboard, or via separate private authenticated client sessions (not implemented on this website).

# Section 14: KEY USER ACTION DATA FLOWS
### User Books a Demo
1. User clicks "Book Demo" on the landing page header, hero, or final CTA.
2. React opens the modal form.
3. User fills in `full_name`, `phone`, `institute_name`, selects `student_range`, and clicks "Submit Request".
4. React validates fields client-side. If invalid, displays helpers.
5. React makes an async database INSERT call using `supabaseClient.js` targeting `public.demo_bookings`.
6. Supabase DB evaluates table schema constraints and RLS policy:
   - Insertion is accepted.
   - Database creates new record and returns status.
7. React handles response:
   - If success: shows positive toast message, clears form, and closes modal after short delay.
   - If failure: shows error message, keeps form open for retry.

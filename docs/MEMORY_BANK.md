# MEMORY_BANK.md — Truth of Record (features & where they live)

> **Source of truth:** `/onboard` (Codebase Cartographer). Every route below is greppable in `src/app/**/page.tsx`.
> Last refreshed: 2026-06-16 (first onboard).

## Product Snapshot

Multi-portal **campus management UI prototype** for US Bangla Medical College. A single Next.js App Router app presents **seven role-scoped portals** (Student, Teacher, HOD, Principal, Super Admin, Finance/Accounts, Guardian) plus a shared **e-Library** module. It is a **clickable demo**: navigation works, screens are richly designed, but all data is static mock data and no actions persist.

## Architecture (observed)

- **Single Next.js App Router app**, all code under `src/`. Path alias `@/*` → `src/*`.
- **Root layout** (`src/app/layout.tsx`) wraps every page in `MainLayout`, loads Geist fonts + `globals.css`.
- **`MainLayout`** (`src/components/layout/MainLayout.tsx`) renders `Sidebar` + `Topbar` + content for all routes **except** `/login` (listed in `BARE_ROUTES`, rendered bare).
- **Role routing is URL-prefix based, not auth-based.** `Sidebar` is a "dynamic context router": it inspects `usePathname()` and swaps the visible nav menu + portal title by prefix (`/principal`, `/admin`, `/teacher`, `/finance-admin`, `/guardian`, `/hod`, `/library`); everything else falls back to the Student nav. **There is no access control** — any URL is reachable directly.
- **27 of the page/component files are Client Components** (`'use client'`) — heavy use of `useState` for local UI interactivity over mock data.
- **No data layer.** Each page declares its own mock arrays/objects inline.

## Route Map

All routes are Next.js App Router pages (HTTP GET → server-rendered shell + client hydration). Handler = the listed `page.tsx`. **39 page routes.**

### Shared / entry
| Path | Handler | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Student dashboard (default portal home) |
| `/login` | `src/app/login/page.tsx` | Role-selector login form (Student/Faculty/Admin/Guardian) — **non-functional** |

### Student portal
| Path | Handler |
|---|---|
| `/profile` | `src/app/profile/page.tsx` |
| `/academics` | `src/app/academics/page.tsx` |
| `/academics/item-cards` | `src/app/academics/item-cards/page.tsx` |
| `/curriculum` | `src/app/curriculum/page.tsx` |
| `/results` | `src/app/results/page.tsx` |
| `/attendance` | `src/app/attendance/page.tsx` |
| `/schedule` | `src/app/schedule/page.tsx` |
| `/finances` | `src/app/finances/page.tsx` |
| `/hostel` | `src/app/hostel/page.tsx` |
| `/exams` | `src/app/exams/page.tsx` |
| `/exams/makeup` | `src/app/exams/makeup/page.tsx` |
| `/documents` | `src/app/documents/page.tsx` |
| `/notices` | `src/app/notices/page.tsx` |
| `/help` | `src/app/help/page.tsx` |

### Teacher portal
| Path | Handler |
|---|---|
| `/teacher` | `src/app/teacher/page.tsx` |
| `/teacher/attendance` | `src/app/teacher/attendance/page.tsx` |
| `/teacher/quiz-builder` | `src/app/teacher/quiz-builder/page.tsx` |
| `/teacher/grading` | `src/app/teacher/grading/page.tsx` |
| `/teacher/formative` | `src/app/teacher/formative/page.tsx` |
| `/teacher/item-cards` | `src/app/teacher/item-cards/page.tsx` |

### HOD portal
| Path | Handler |
|---|---|
| `/hod` | `src/app/hod/page.tsx` |
| `/hod/attendance-override` | `src/app/hod/attendance-override/page.tsx` |

### Principal portal
| Path | Handler |
|---|---|
| `/principal` | `src/app/principal/page.tsx` |

### Super Admin portal
| Path | Handler |
|---|---|
| `/admin` | `src/app/admin/page.tsx` |

### Finance / Accounts portal
| Path | Handler |
|---|---|
| `/finance-admin` | `src/app/finance-admin/page.tsx` |
| `/finance-admin/sync` | `src/app/finance-admin/sync/page.tsx` |
| `/finance-admin/defaulters` | `src/app/finance-admin/defaulters/page.tsx` |

### Guardian portal
| Path | Handler |
|---|---|
| `/guardian` | `src/app/guardian/page.tsx` |

### e-Library module (Student + Admin views)
| Path | Handler |
|---|---|
| `/library` | `src/app/library/page.tsx` |
| `/library/catalog` | `src/app/library/catalog/page.tsx` |
| `/library/my-log` | `src/app/library/my-log/page.tsx` |
| `/library/reading-list` | `src/app/library/reading-list/page.tsx` |
| `/library/reader` | `src/app/library/reader/page.tsx` (DRM-style PDF reader mockup) |
| `/library/checkout` | `src/app/library/checkout/page.tsx` (admin offline checkout/return) |
| `/library/analytics` | `src/app/library/analytics/page.tsx` |
| `/library/upload` | `src/app/library/upload/page.tsx` |
| `/library/activity` | `src/app/library/activity/page.tsx` |

### Standalone mockup
| Path | Handler |
|---|---|
| `/sms-mockup` | `src/app/sms-mockup/page.tsx` (SMS/notification gateway mockup) |

## Middleware

**None.** No `middleware.ts`. Route gating is purely cosmetic via the `Sidebar` context router.

## Models / DB Tables

**None persisted.** No ORM, no schema, no migrations. The implicit "domain entities" exist only as mock fixtures inside pages: students, faculty, courses/curriculum, attendance records, exam results & item cards, fees/invoices/defaulters, hostel allocations, library books/borrow logs, notices. Any future persistence layer is greenfield (see TECH_STACK.md → Notes for Implementers).

## Shared Code Inventory

**Layout components** (`src/components/layout/`):
- `MainLayout.tsx` — app shell; bypasses chrome on `/login`.
- `Sidebar.tsx` — role-aware nav (7 menu sets) + URL-prefix context router.
- `Topbar.tsx` — top bar with mobile sidebar toggle.

**Feature components** (`src/components/`):
- `AcademicTranscript.tsx`
- `CompetencyTracker.tsx`
- `DigitalItemCards.tsx`
- `EligibilityTracker.tsx`

## Architectural Decisions (observed)

1. **Demo-first, no backend.** Entire app is a presentation-layer prototype; data is mock, actions are inert.
2. **URL-prefix portal switching** instead of authenticated role sessions.
3. **Tailwind v4 CSS-first theming** — brand tokens in `globals.css` `@theme`, no `tailwind.config.*` file.
4. **Recharts** chosen for dashboard visualizations; **lucide-react** for iconography.
5. **Next.js version pinned exactly** (`16.2.3`) rather than caret-ranged.

## Known WIP / Tech Debt

- **No auth / no RBAC** — every portal URL is publicly reachable; login is decorative.
- **Dead nav links** — many `Sidebar` entries point to `href="#"` (Faculty & HR, Student Directory, Admissions Data, College Settings, My Classes, Revenue Reports, Pending Invoices, Child Progress, Fee Payments, several Principal/HOD items).
- **No persistence** — refreshing loses any UI state; nothing is saved.
- **No tests, no CI.**
- `eslint-disable` for `no-explicit-any` in `Sidebar.tsx` (nav arrays typed as `any[]`).
- **High-severity `next` advisories** unpatched (see TECH_STACK.md audit).

## Reality vs. Proposal (`Project_Proposal_Brief.md`)

The sales brief promises capabilities **not present in this codebase**, recorded here so the team doesn't assume they exist:

| Promised in brief | In code? |
|---|---|
| PostgreSQL + Row-Level Security + encryption at rest | ❌ No DB at all |
| Real-time push (grade/notification updates in ms) | ❌ No realtime, no backend |
| SMS + Email gateway (omnichannel notifications) | ❌ UI mockup only (`/sms-mockup`) |
| Assessment engine (create/distribute/grade) | ❌ UI mockups (`/teacher/quiz-builder`, `/teacher/grading`) |
| DRM PDF viewer (no-download library) | ❌ UI mockup only (`/library/reader`) |
| Super Admin / Finance / Guardian portals (functional) | ⚠️ UI shells only, no operations |

> The brief is a **sales/marketing artifact**, not a build spec. Treated here as a feature wishlist, not implemented state. (Marketing-surface follow-up flagged in Surprises — out of cartographer lane.)

## Required Environment Variables

None — see TECH_STACK.md → Required Environment Variables.

## Dependency Audit

See TECH_STACK.md → Audit. Summary: 5 vulns (1 low, 3 moderate, 1 high); the high is `next@16.2.3`, fix `next@16.2.9`.

## Completed Work Log

### 2026-06-16 — Onboarding refresh
- First onboard of the repo. Mapped **39 page routes** across 7 role portals + shared e-Library + login.
- Catalogued **7 shared components** (3 layout, 4 feature).
- Confirmed **no backend, no DB, no API routes, no auth, no env vars, no tests** — frontend-only prototype with mock data.
- Documented brand design tokens and Tailwind v4 `@theme` setup.
- Ran `npm audit`: **5 vulnerabilities (1 low, 3 moderate, 1 high)**; high-severity `next` bump routed to `/architect`.
- Recorded the proposal-vs-reality gap so downstream roles don't assume backend features exist.
- _Prior shipped history (commits `46c7b37` → `4c29925`, 23 commits) predates docs/ state tracking; not retro-logged._

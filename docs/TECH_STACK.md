# TECH_STACK.md — Truth of Record (packages & tools)

> **Source of truth:** `/onboard` (Codebase Cartographer). Every version below is quoted from `package.json` / `package-lock.json`.
> Last refreshed: 2026-06-16 (first onboard — created from scratch).

## Snapshot

**Demo_US_Bangla** is a **frontend-only Next.js prototype** for the "US Bangla Medical College Student Portal." There is **no backend, no database, no API layer, and no authentication** in the codebase — every screen renders hardcoded mock data. (See MEMORY_BANK.md → *Reality vs. Proposal* for the gap against `Project_Proposal_Brief.md`.)

## Language & Runtime

| Concern | Choice | Version | Source |
|---|---|---|---|
| Language | TypeScript | `^5` (resolved 5.9.3) | package.json / lock |
| TS target | ES2017, `strict: true` | — | tsconfig.json |
| Module path alias | `@/*` → `./src/*` | — | tsconfig.json |
| Node types | `@types/node` | `^20` | package.json |

## Frontend

| Concern | Choice | Version | Source |
|---|---|---|---|
| Framework | **Next.js (App Router)** | `16.2.3` (pinned, no caret) | package.json |
| UI library | React | `19.2.4` | package.json |
| React DOM | react-dom | `19.2.4` | package.json |
| Styling | **Tailwind CSS v4** (CSS-first `@theme`) | `^4` (resolved 4.2.2) | package.json / lock |
| PostCSS plugin | `@tailwindcss/postcss` | `^4` | package.json |
| Icons | lucide-react | `^1.8.0` (resolved 1.8.0) | package.json / lock |
| Charts | recharts | `^3.8.1` (resolved 3.8.1) | package.json / lock |
| Fonts | `next/font/google` — Geist + Geist Mono | (bundled) | src/app/layout.tsx |

> ⚠️ **Next.js 16 is not the Next.js in your training data** (per AGENTS.md). Read `node_modules/next/dist/docs/` before writing route/server code. Heed deprecation notices.

## Backend / Database / Auth

| Concern | Status |
|---|---|
| API routes | **None** — no `route.ts`, no `app/api/**`. |
| Database / ORM | **None** — no prisma/drizzle/pg/supabase/mongoose imports anywhere in `src/`. |
| Server actions | **None observed.** |
| Authentication | **None** — `/login` is a static form; the "Sign In" button is `type="button"` with no handler. No session/JWT/cookie logic. |
| Data source | Hardcoded mock fixtures inside each `page.tsx` / component. No `fetch`, `axios`, SWR, or React Query calls. |

## Dev Tooling

| Concern | Choice | Version | Source |
|---|---|---|---|
| Linter | ESLint | `^9` | package.json |
| ESLint config | eslint-config-next | `16.2.3` | package.json |
| PostCSS | postcss.config.mjs (`@tailwindcss/postcss`) | — | postcss.config.mjs |
| Type defs | `@types/react` `^19`, `@types/react-dom` `^19` | — | package.json |

## Scripts (package.json)

| Script | Command |
|---|---|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `eslint` |

## Testing

**None.** No test framework (jest/vitest/playwright/cypress) in `package.json`; no test files in `src/`.

## Hosting / CI

Not configured in-repo. README contains the default `create-next-app` Vercel boilerplate; `next.config.ts` is empty (no image domains, no headers, no redirects). No CI workflow files observed. The proposal brief states "custom deployment on dedicated servers" — not reflected in code.

## Required Environment Variables

**None.** No `process.env.*` references anywhere in `src/`. No `.env*` files tracked.

## Notes for Implementers

- **Adding a backend is greenfield work** — there is no data layer to extend. Architect must decide DB/ORM/auth before any persistence ticket.
- Brand design tokens live in `src/app/globals.css` via Tailwind v4 `@theme`: `--color-brand-primary-blue #0072bc`, `--color-brand-primary-green #39b54a`, `--color-brand-accent-red #ed1c24`, `--color-brand-background #f8fafc`. Use the `brand-primary-blue` / `brand-primary-green` utility classes already in use across pages.
- `next 16.2.3` is **pinned exactly** (no `^`). A security bump to `16.2.9` (see audit below) requires editing the pin deliberately — `npm audit fix` will refuse it as out-of-range.

## Audit — outdated / vulnerable (run 2026-06-16, `npm audit`)

**5 vulnerabilities (1 low, 3 moderate, 1 high).**

| Severity | Package | Issue | Fix |
|---|---|---|---|
| **High** | `next` 16.2.3 | Multiple advisories — DoS (Server Components, Image Optimization, Cache Components), Middleware/Proxy bypass, cache poisoning, XSS via CSP nonces/beforeInteractive, SSRF via WebSocket upgrades | bump to `next@16.2.9` (outside current pin — deliberate edit needed) |
| Moderate | `postcss` `<8.5.10` | XSS via unescaped `</style>` in CSS stringify | upstream of `next` |
| Moderate | `js-yaml` `<=4.1.1` | Quadratic-complexity DoS in merge-key handling | transitive |
| Moderate | `brace-expansion` `5.0.2–5.0.5` | DoS via large numeric range | transitive |
| Low | `@babel/core` `<=7.29.0` | Arbitrary file read via `sourceMappingURL` comment | transitive |

→ Most are transitive under the `next` toolchain; the high-severity `next` bump is the meaningful one. **Routed to `/architect` for a security-bump decision** (the exact pin must change).

# WORKFLOW.md — The Law

> **Owner:** `/director` (Agency Director). This file is process law. It does not pick packages (`/architect`) or write code (`/lead-dev`). §8 (Known issues) and §9 (What changed) are append-only.
> Established: 2026-06-16. Stack basis: `docs/TECH_STACK.md` (Next.js 16 App Router, React 19, TS 5, Tailwind v4 — no test framework, no DB, no auth yet).

---

## §1 — Source of Truth + Branch Model

- **`main` is shipped truth.** It must always build (`npm run build` clean).
- **No direct commits to `main`.** All work lands via a feature branch + merge, even solo. (Historically commits went straight to `main`; that stops now.)
- Branch off the latest `main`. Naming:
  | Prefix | Use |
  |---|---|
  | `feat/<ID>-<slug>` | New feature / page / portal screen |
  | `fix/<ID>-<slug>` | Bug fix |
  | `refactor/<slug>` | Internal restructure, no behavior change |
  | `chore/<slug>` | Tooling, deps, config |
  | `backup-<reason>` | Safety snapshot before risky ops |
- One ticket = one branch = one focused merge. No mixing unrelated tickets.

## §2 — Commit Format

- **Conventional Commits**: `type(scope): subject` — `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
- Footer references the ticket: `Refs: <ID>` (e.g. `Refs: T-012`).
- This environment also appends the agent trailer:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
- Imperative subject, ≤ 72 chars. No "wip", no emoji-only messages.

## §3 — Agent Sequence per Ticket

All sequences begin with `/git` (branch) and end with `/git` (merge). Use slash commands that exist in `.agents/workflows/`.

| Ticket type | Sequence |
|---|---|
| **UI / page feature** (the common case here) | `/git → /lead-dev → /ui-ux → /qa → /git` |
| **Logic-only / no UI** | `/git → /lead-dev → /qa → /git` |
| **Schema-touching** (once a DB exists) | `/git → /architect (schema review) → /lead-dev → /qa → /git` |
| **Security-sensitive** (auth, RBAC, secrets, file upload) | `/git → /lead-dev → /cso review → /qa → /git` |
| **Dependency / security bump** (e.g. `next@16.2.9`) | `/git → /architect (approve bump) → /lead-dev → /qa → /git` |
| **Marketing-surface** (see §10) | base sequence, then insert `/seo`, `/copywriter`, `/cro`, `/cso review` (if analytics) **after `/qa`, before `/git` merge** |

Insertion rules: `/cso review` also inserts into any sequence that touches auth, secrets, PII, or file uploads. `/architect` inserts whenever a package not in `TECH_STACK.md` is proposed, or `TECH_STACK.md`'s pins change.

## §4 — Testing Minimums (gate to merge)

There is **no automated test framework in the stack today** (no jest/vitest/playwright — see `TECH_STACK.md`). Until one is adopted, the runnable minimums are:

1. **Lint clean** — `npm run lint` (zero errors).
2. **Typecheck clean** — `npx tsc --noEmit` (strict mode is on; zero type errors).
3. **Build clean** — `npm run build` succeeds.
4. **Manual smoke** — `/qa live` walks the affected routes in the browser; evidence to `docs/qa-evidence/`.

> Dropping any minimum requires naming its replacement (Director rule). The "no unit tests" gap is logged in §8; adopting a test runner is an `/architect` decision.

## §5 — PR / Merge Gates Checklist

Before any merge to `main`:

- [ ] No `.env` / secrets / API keys committed.
- [ ] No lock-file noise unrelated to the ticket.
- [ ] No `console.log` / `debugger` / commented-out code left behind.
- [ ] No weakened or stubbed-out auth (when auth exists).
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build` all clean.
- [ ] No new `eslint-disable` without a one-line justifying comment.
- [ ] `/qa` sign-off recorded in `docs/QA_REPORT.md`.
- [ ] §10 reviews completed if the ticket touched marketing surface.

## §6 — Deploy Flow

**Not yet formalized** — hosting is unconfirmed in code (`next.config.ts` empty; README has default Vercel boilerplate; the proposal brief names "dedicated servers"). Until `/devops` locks a target:

1. `npm run build` must pass.
2. Tag a release: `git tag vX.Y.Z` on `main`.
3. Deploy via the platform `/devops` designates (Vercel or self-hosted Node).
4. Smoke-test live: `/login`, `/` (student dashboard), one route per portal.
5. **Never auto-deploy.** Production deploys require explicit "deploy" confirmation (DevOps rule).

→ `/devops` owns turning this into a concrete pipeline + CI.

## §7 — Local Dev

```bash
npm install
npm run dev   # → http://localhost:3000
```

Useful checks: `npm run lint` · `npx tsc --noEmit` · `npm run build`.

## §8 — Known Issues (append-only)

| # | Issue | Severity | Ticket | Discovered |
|---|---|---|---|---|
| 1 | **No authentication / RBAC.** Every portal URL is directly reachable; `/login` is decorative (button has no handler). `Sidebar` switches menus by URL prefix only. | 🔴 High | — | 2026-06-16 |
| 2 | **`next@16.2.3` has a high-severity advisory cluster** (DoS, middleware bypass, cache poisoning, XSS, SSRF). Fix = `next@16.2.9`, which is outside the exact pin — needs a deliberate `/architect` bump. | 🔴 High | — | 2026-06-16 |
| 3 | **No automated test framework.** QA is manual (`/qa live`) + `tsc` + `build` only. | 🟠 Med | — | 2026-06-16 |
| 4 | **No persistence.** All screens render inline mock data; nothing is saved (by design for the demo, but blocks any real workflow). | 🟠 Med | — | 2026-06-16 |
| 5 | **~12 dead nav links** (`href="#"`) in `Sidebar.tsx`. | 🟡 Low | — | 2026-06-16 |

## §9 — What Changed (changelog)

| Date | Change |
|---|---|
| 2026-06-16 | **Initial workflow established.** All 10 sections written fresh after first `/onboard`. Branch model, commit format, 6 agent sequences, testing minimums (lint/tsc/build/manual — no test runner yet), merge gates, provisional deploy flow, local-dev, 5 seeded known issues, §10 marketing triggers. |

## §10 — Marketing-Surface Review Triggers

> The marketing roles (`/cmo`, `/seo`, `/copywriter`, `/cro`, `/analytics`, `/growth`) still exist in `.agents/`, so this section is active. Note: this app is a **login-gated internal portal** with minimal public surface (currently just `/login`), so these triggers will fire rarely — but they apply when they do. There is no `docs/MARKETING.md` positioning yet; `/cmo` owns that.

A ticket **touches marketing surface** if any of:

- Modifies public-facing copy (login screen, value prop, CTA, product descriptions, pricing display, error messages on public flows).
- Changes a public route (URL change, redirect, sitemap entry, robots rule).
- Modifies the signup, login, onboarding, or cancellation flow.
- Modifies transactional emails, SMS, or push notifications (e.g. the `/sms-mockup` surface once real).
- Adds, removes, or modifies schema markup.
- Modifies meta tags, OpenGraph, Twitter card, robots, or canonical tags.
- Changes Core Web Vitals signals on a public template.
- Modifies `docs/ANALYTICS_SPEC.md` or any tracked event property.

**When triggered, insert AFTER `/qa` and BEFORE `/git` merge:**

- `/seo` — re-audit the affected URLs.
- `/copywriter` — review if copy changed.
- `/cro` — review if a conversion/onboarding flow changed.
- `/cso review` — review if `ANALYTICS_SPEC.md` or any tracked event property changed (PII guard).

**Blocking rule:** these reviews do **not** block merge unless a finding is 🔴 (CRIT). 🟠 findings file follow-up tickets via `/pm`.

**Reverse direction:** when a marketing role produces a spec that needs code, it files a ticket via `/pm`; engineering picks it up in the normal §3 sequence. **Marketing roles never write source code.**

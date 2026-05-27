# Frontend Roadmap v1 (2026)

Version: v1.0.0
Owner: Frontend Platform
Last Updated: 2026-05-26

## Scope
Enterprise-grade React + Vite frontend for the distributed social media platform. This roadmap is designed for large-team execution, feature isolation, and microfrontend readiness.

## Guiding Principles
- Domain-driven ownership (auth, user, post, feed, notifications, messaging, search).
- Strong boundaries between app shell, domains, shared UI, and infrastructure.
- Performance-first for large feed and realtime updates.
- Security and observability built-in from day one.

---

## Phase 0 — Foundations (Week 1–2) ✅ Completed
**Goals**
- Establish architecture scaffold, baseline tooling, and governance.

**Features**
- Project structure scaffold
- ESLint boundary enforcement
- Tailwind and design tokens scaffolding
- Environment configuration layering

**Architecture considerations**
- App shell and provider composition
- Query client and auth provider initialization order

**Folder additions**
- `src/app`, `src/domains`, `src/shared`, `src/infra`, `src/config`, `src/tests`

**Technical debt warnings**
- Avoid prematurely committing to a specific UI library without design tokens in place.

---

## Phase 1 — Auth & Session (Week 2–3) 🚧 In Progress
**Goals**
- Secure login, signup, refresh flow, and routing guards.

**Features**
- Auth domain module
- Token refresh middleware
- Route guards (public/private)
- Session persistence (short-lived access token)

**Architecture considerations**
- Access token memory storage; refresh in httpOnly cookie (preferred)
- Retry-on-401 flow with safe replay

**Folder additions**
- `src/domains/auth/*`
- `src/infra/auth/*`

**Technical debt warnings**
- Avoid storing access tokens in localStorage in production.

### Current Status (as of 2026-05-27)
- ✅ Auth domain scaffolded (`src/domains/auth/*`).
- ✅ Login + register UI wired to backend with Axios client.
- ✅ Route guards in place (`AuthGuard`, `PublicRoute`).
- ✅ Token refresh interceptor and refresh flow present.
- ✅ Auth store with Zustand and session restore on app boot.
- ✅ Access tokens now stored in memory only; refresh token in httpOnly cookie (secure, production-ready).
- ✅ Global error boundary and friendly error banner implemented.

---

## Phase 2 — Core Feed & Post (Week 3–5)
**Goals**
- Build scalable feed and post creation pipeline.

**Features**
- Post create/edit/delete
- Infinite feed
- Comments, likes, bookmarks

**Architecture considerations**
- React Query pagination + cache normalization
- Virtualized list for feed
- Optimistic updates with rollback

**Folder additions**
- `src/domains/post/*`
- `src/domains/feed/*`

**Technical debt warnings**
- Must avoid over-fetching; keep feed lightweight.

### Current Status (as of 2026-05-27)
- ✅ Feed page scaffolded with placeholder UI.
- ❌ No feed API integration yet.
- ❌ No post creation flow yet.

---

## Phase 3 — Realtime & Notifications (Week 5–7)
**Goals**
- Live updates and notification system.

**Features**
- WebSocket client manager
- Notifications feed
- Live likes/comments

**Architecture considerations**
- Event queueing + backoff reconnect
- Query cache patching on events

**Folder additions**
- `src/infra/realtime/*`
- `src/domains/notification/*`

**Technical debt warnings**
- Event ordering issues; enforce timestamps and ids.

---

## Phase 4 — Messaging (Week 7–9)
**Goals**
- Real-time chat experience.

**Features**
- Conversations list
- Typing indicator
- Delivery + read receipts

**Architecture considerations**
- Socket channel partitioning
- Optimistic send with server reconciliation

**Folder additions**
- `src/domains/messaging/*`

**Technical debt warnings**
- Avoid heavy renders in chat (use virtualization).

---

## Phase 5 — Search & Discovery (Week 9–10)
**Goals**
- User and post search, suggestions.

**Features**
- Search results
- Suggested users and tags
- Debounced query

**Architecture considerations**
- Request cancellation and debouncing
- Cache by query key

**Folder additions**
- `src/domains/search/*`

**Technical debt warnings**
- Search over-fetching can increase costs; throttle.

---

## Phase 6 — Hardening & Scale (Week 10–12)
**Goals**
- Production hardening and performance.

**Features**
- Error boundaries
- Retry policies
- Performance budgets
- Lighthouse CI

**Architecture considerations**
- Route-level chunking
- Preload critical routes

**Folder additions**
- `src/infra/observability/*`

**Technical debt warnings**
- Do not skip performance regressions; enforce budgets.

### Current Status (as of 2026-05-27)
- ❌ Error boundaries not yet implemented.
- ❌ No performance budgets or CI checks yet.

---

## Next Steps (Immediate)
1. ✅ Add a lightweight backend health check endpoint and call it on app boot to surface global errors.
2. ✅ Implement a global error boundary + friendly fallback screen.
3. ✅ Move access tokens to in-memory storage with refresh token in httpOnly cookie (secure, production-ready).
4. ⏭️ Start Phase 2: integrate feed API and build first “create post” flow.

---

## Phase 7 — PWA & Offline (Week 12–13)
**Goals**
- Offline-first baseline and background sync.

**Features**
- Service worker
- Offline queue for post creation
- Cache strategies per route

**Architecture considerations**
- Avoid stale data in feed; stale-while-revalidate

**Technical debt warnings**
- Offline write conflicts can corrupt local state.

---

## Phase 8 — Microfrontend Readiness (Week 13–14)
**Goals**
- Prepare for domain extraction and independent deployments.

**Features**
- Module boundary audits
- Shared UI as package boundary

**Architecture considerations**
- Shared infra contract (auth, analytics)

**Technical debt warnings**
- Avoid cross-domain imports that break boundaries.

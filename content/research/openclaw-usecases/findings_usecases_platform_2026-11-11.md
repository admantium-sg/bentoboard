# OpenClaw Platform Findings — 2026-11-11

Research window: **2026-11-10T09:28:00Z → 2026-11-11T09:28:00Z** (UTC, 24h).
Baseline: previous run (window ending 2026-11-10T09:28Z).
Collected via direct API calls (`web_fetch` / `curl` + `jq`) on 2026-11-11 ~09:29–09:35Z.

---

## 1. Releases — TWO new npm publishes inside the window (first since baseline)

| Channel | Baseline (11-10 run) | Now (11-11 run) | Publish timestamp (npm) | Status |
|---|---|---|---|---|
| `latest` | 2026.11.2 | **2026.11.3** | 2026-11-10T17:59:44.785Z | **NEW — inside window** |
| `extended-stable` | 2026.9.36 | **2026.9.37** | 2026-11-10T20:16:24.913Z | **NEW — inside window** |
| `beta` | 2026.11.5-beta.1 | 2026.11.5-beta.1 (unchanged) | 2026-11-04T04:01:35Z | unchanged (pre-window) |

Source: `https://registry.npmjs.org/openclaw` → `.time` map, `.["dist-tags"]`.

### 1a. v2026.11.3 — "Security release" patch (GitHub Release published 2026-11-10T18:53:07Z, created 14:30:44Z, 17 assets)

`https://api.github.com/repos/openclaw/openclaw/releases?per_page=5` → tag `v2026.11.3`
Changelog: `https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.11.3.md` (164 lines) and `https://docs.openclaw.ai/releases/2026.11.3`

Release self-description: *"Security release: This release fixes certificate verification for worker transfers with blank fingerprints, keeps required-sandbox image previews within allowed folders and reduces credential exposure."* Declared scale: **56 PRs, 44 direct commits, 36 contributors**. Patch release, no new features.

Security-and-Privacy section highlights (CHANGELOG/2026.11.3.md lines 103–131):
- Blank **node TLS fingerprint** flags no longer suppress the saved certificate pin for the same Gateway endpoint (#105 area of section).
- Blank **worker transfer TLS fingerprints** now fall back to normal CA verification instead of disabling certificate verification for workspace uploads/downloads; malformed non-blank HTTPS pins are rejected.
- **Signal** managed daemons: inherited environment limited (proxy / trust-store / custom wrapper vars no longer inherited) → reduces unrelated credential exposure.
- **Bundled language servers**: Gateway credentials are no longer passed to them by default.
- Provider plugin can no longer redirect a provider connection to a different origin → reduces sending credentials to the wrong endpoint.
- Memory **embedding credentials** can no longer be inherited by a different provider via a shared endpoint.
- **Exa / Tavily / Firecrawl** search+scrape no longer mix credentials across connections or reuse cached results across API credentials.
- Sandbox image previews kept inside allowed folders; model sign-in no longer hides OAuth refresh errors and rejects credentials belonging to a different provider.

Also fixed in 11.3: Windows Gateway lock loss on disagreeing boot info, Linux stale-lock recovery, macOS managed Gateway restart during update maintenance (SQLite migration rejecting the captured DB), large-backup SQLite discovery timeouts (batched retries), interrupted updates reporting success, chat-initiated update authorization.

### 1b. v2026.9.37 — extended-stable patch (GitHub Release published 2026-11-10T20:42:54Z, 5 assets)

`https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.9.37`
Description: *"gateway-only `extended-stable` release, published from a retired maintenance line by explicit maintainer decision … end of September 2026, plus critical security updates."*
Highlights: private-inspection media no longer auto-attached to replies, zero-width Telegram table cells / malformed plugin SVG no longer stall the Gateway, person-linked model accounts survive `/new` `/reset` and idle rollover.

### 1c. Beta line
Git tag **`v2026.11.5-beta.2` exists** (commit `c0f42f64`, commit date 2026-11-07T14:08:50Z — pre-window) but **no npm publish of 2026.11.5-beta.2**; npm `beta` dist-tag still points at `2026.11.5-beta.1`. Source: `https://api.github.com/repos/openclaw/openclaw/tags?per_page=15`, `https://api.github.com/repos/openclaw/openclaw/commits/v2026.11.5-beta.2`.

---

## 2. Security — no new repo advisories, but a NEW in-window critical dependency finding

### 2a. Repository security advisories: ZERO new in window
`https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100` returns 100 advisories; **all publication dates are 2026-06-30 or 2026-09-11** — max `published_at` = `GHSA-xx9p-hc9w-6p5h` @ 2026-09-11T00:58:59Z. No advisory was published, updated or withdrawn inside the window.

### 2b. NEW issue #196925 — DOMPurify critical advisory shipped in the current stable (IN WINDOW, created 2026-11-11T00:14:09Z)

`https://github.com/openclaw/openclaw/issues/196925` — labels `P2`, `impact:security`, `clawsweeper:needs-security-review`. Open.

> "The published stable releases v2026.11.2 and v2026.11.3 pin `dompurify` at 3.4.16 in `ui/package.json`. That version falls under two public advisories: GHSA-cg2g-xh64-v4q7 (critical) and GHSA-mrv2-3pqr-j5jr (high)."

Verified against upstream GitHub Advisory DB:
- `GHSA-cg2g-xh64-v4q7` — **critical**, published 2026-10-22T16:25:31Z, *"DOMPurify SAFE_FOR_TEMPLATES bypass: split template expressions survive in attached shadow root content on DOM output modes"*, vulnerable `>= 3.4.4, <= 3.4.16`, patched in **3.4.17**. (`https://api.github.com/advisories/GHSA-cg2g-xh64-v4q7`)
- `GHSA-mrv2-3pqr-j5jr` — **high**, published 2026-10-22T16:24:52Z, *"DOMPurify IN_PLACE: hook that removes a parent or sibling leaves the detached subtree's event handlers armed"*. (`https://api.github.com/advisories/GHSA-mrv2-3pqr-j5jr`)

Verified DOMPurify pin per ref (fetched `ui/package.json` at each ref):
| ref | dompurify | vulnerable? |
|---|---|---|
| `v2026.11.2` | 3.4.16 | **YES** |
| `v2026.11.3` (current latest) | 3.4.16 | **YES** |
| `main` | 3.4.17 | no |
| `v2026.9.37` (extended-stable) | 3.4.17 | **no** |

Nuance: the report's table claims `release/2026.11.4` still pins 3.4.16; that branch is **not visible** via `GET /repos/openclaw/openclaw/branches?per_page=100` (no `release/*` branches returned by that query) → branch state unverified.

ClawStat's own maintainer-bot review of #196925 recommends: *"Use the patched release line — identify the validated stable release carrying DOMPurify 3.4.17 or later"*; exploitation through OpenClaw has **not** been reproduced.

### 2c. undici advisory still open in the shipped stable
`https://github.com/openclaw/openclaw/issues/196396` — **created 2026-11-10T02:31:52Z (pre-window), still open in window**, `P2`, `impact:security`: *"Pinned npm 12.2.0 bundles undici 6.28.0, affected by GHSA-2m5v-pch6-74hx"*.
- `GHSA-2m5v-pch6-74hx` — **high**, published 2026-10-27T19:02:26Z, *"undici vulnerable to TLS certificate validation bypass via dropped tls options in Agent"*, patched in 6.29.1 / 7.30.1 / 8.12.2 (`https://api.github.com/advisories/GHSA-2m5v-pch6-74hx`).
- Verified pins: `v2026.11.2` and `v2026.11.3` → `npm: 12.2.0`, direct `undici: 8.12.2`; `main` → `npm: 12.2.1`, `undici: 8.12.3`. The direct `undici` dep is already patched; the exposure is npm CLI's **bundled** undici 6.28.0.

### 2d. No open PR fixes the DOMPurify/undici gap
`GET /search/issues?q=repo:openclaw/openclaw+type:pr+dompurify+state:open` → total_count **1** (#144043, unrelated, from 2026-09-10). No open PR referencing undici. The 3.4.17 bump is on `main` and in the 2026.11.5 beta line only.

---

## 3. Incident wave — one prior P0 FIXED, but the update-failure cluster GREW

### 3a. Prior P0 #196249 — **FIXED inside the window**
`https://github.com/openclaw/openclaw/issues/196249` — *"Gateway freezes during a long reasoning stream in a Slack DM when Slack streaming is off"* (P0, `impact:crash-loop`).
Created 2026-11-09T20:51:28Z → **closed 2026-11-10T17:54:32Z** (inside window), 1 comment.
This was the *sole blocker* in ClawStat's evidence gate (see §6) — its closure removes the previous run's headline blocker.

### 3b. New P0s created in the window: 6 (baseline: 2)

`GET /search/issues?q=repo:openclaw/openclaw+is:issue+label:P0+created:2026-11-10T09:28:00Z..2026-11-11T09:28:00Z` → **6**

| # | title | created | state |
|---|---|---|---|
| 197152 | iOS app never publishes push.apns.register (relay push unusable, silent failure) | 2026-11-11T03:13Z* | **closed 2026-11-11T08:53:18Z** |
| 196987 | Update 2026.9.9 → 2026.11.3 fails: candidate-gateway-startup exits code 1 (runtime-verification-failed), auto-rolls-back | 2026-11-11T02:40:07Z | open, 3 comments |
| 196811 | Managed update fails validation with SQLite-classification error and Invalid string length | 2026-11-10T19:02:36Z | open, 2 comments |
| 196799 | Linux AppImage 2026.11.2 rejected by Control UI (bundled WebKit lacks commandForElement) | 2026-11-10T18:39Z* | **closed 2026-11-10T18:39:31Z** |
| 196629 | Update failure: managed-service (2026.10.8) | 2026-11-10T11:07:03Z | open, 1 comment |
| 197006 | Update failure: installation-inspection (2026.10.7) | 2026-11-11T03:32:41Z | open, 1 comment |

\* exact creation time not captured for 197152/196799; both closed inside the window.

**Verdict: the 2026.11.2 post-release incident wave did NOT die down — it shifted and re-seeded into the update-failure class.** Four of six new P0s are update/upgrade failures, and 2026.11.3 itself now generates a new upgrade blocker (#196987: 2026.9.9 → 2026.11.3 fails and auto-rolls-back).

### 3c. The macOS/darwin update-failure cluster is still fully open
Pre-window P0s, none closed: #195253 (2026-10.10 package-update), #195827 (2026.10.9 requested), #195971 (2026.11.1 package-update), #195981 (2026.10.10 package-update) — all `impact:ux-release-blocker`, 2 comments each.
`GET /search/issues?q=repo:openclaw/openclaw+is:issue+is:open+label:impact:ux-release-blocker` → **248 open** (all-time).

### 3d. P1 volume
`is:issue+label:P1+created:<window>` → **22** new P1s (full list captured; highlights: #197134 Telegram streaming drops the entire final message on ambiguous preview failure; #196993 Windows — every plugin fails with "Plugin source changed while preparing its reload"; #196966 PostgreSQL git update to main refused at database-engine-preflight; #196824 `openclaw setup planner` response schema rejected by OpenAI strict mode; #196717 read tool boolean serialized as string enum breaks Gemini/Vertex tool schema; #196749 replies of cron jobs targeted at a conversation are never delivered).
Total open P0 across the repo: **313**.

### 3e. Velocity (core repo, window)
| metric | baseline | now | delta |
|---|---|---|---|
| stars | 394,270 | **394,315** | +45 |
| open issues (repo field) | 8,116 | **8,175** | +59 |
| new issues | 198 | **148** | −50 |
| new PRs | 497 | **454** | −43 |
| merged PRs | 287 | **367** | +80 |
| issues closed | 220 | **102** | −118 |
| pushed_at | — | 2026-11-11T09:24:30Z | active |

Sources: `https://api.github.com/repos/openclaw/openclaw`, and the four `search/issues` count queries with `created/merged/closed:2026-11-10T09:28:00Z..2026-11-11T09:28:00Z`.

Note the closed-issue count difference (220 → 102) may reflect a different query semantics in the prior run (e.g. `is:issue+closed:` vs `is:issue+is:closed+closed:`) rather than a real 54% drop — treat as low-confidence.

---

## 4. npm downloads — reporting lag, no signal in window

`https://api.npmjs.org/downloads/point/2026-11-10:2026-11-11/openclaw` → **0**
`https://api.npmjs.org/downloads/point/2026-11-11:2026-11-11/openclaw` → **0**
`https://api.npmjs.org/downloads/range/2026-11-04:2026-11-11/openclaw` (end-exclusive) →
```
2026-11-04 400586   2026-11-07 493523   2026-11-10 0
2026-11-05 369131   2026-11-08 403698   2026-11-11 0
2026-11-06 504091   2026-11-09 349424
```
The zeros for 2026-11-10 / 2026-11-11 are **npm reporting lag, not a collapse** (confirmed: 2026-11-09 point endpoint still returns 349,424).
Last comparable week: `2026-10-28:2026-11-03` = **2,426,748**; `2026-11-04:2026-11-10` = **2,520,453** → **+3.9 % week-over-week** (partial week, 6 effective days). Daily peak was 2026-11-06 (504,091).

---

## 5. Enterprise (openclaw-enterprise)

`https://api.github.com/repos/openclaw/openclaw-enterprise`

| metric | baseline | now | delta |
|---|---|---|---|
| stars | ~455 | **457** | +2 |
| open issues (repo field) | ~306 | **339** (340 at first poll) | +33 |
| forks | — | 112 | — |
| pushed_at | — | 2026-11-11T09:28–09:31Z | very active |
| new issues in window | — | **1** (#5321) | — |
| issues closed in window | — | **7** | — |
| new PRs in window | — | **231** | — |
| **merged PRs in window** | — | **207** | — |
| commits in window | — | **~208** (link header page=208 at per_page=1) | — |

Source URLs: `https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>`, `…+is:issue+created:<window>`, `…+is:issue+closed:<window>`, `https://api.github.com/repos/openclaw/openclaw-enterprise/commits?since=2026-11-10T09:28:00Z`.

New enterprise issue in window: **#5321** — *"Connect OCC OIDC/IAM identities with Gateway access while preserving operator-owned ingress"* (1 comment) — `https://github.com/openclaw/openclaw-enterprise/issues/5321`.

Commit themes visible in the window (first 30 of ~208): OpenShell sandbox resource/RuntimeClass configuration per Agent, credential-service TLS startup, Kubernetes private Gateway storage capacity, Codex provenance for runtime images, protected Responses requests with max request effort / ultra telemetry, Fluent Forward log shipping for Docker tests, PostgreSQL provisioning refusal cases, browser-chat naming for default preset agents, `RFC: bounded task completion before planned replacement` (#4857), OCC deployment-diagnostics verification.

**No new enterprise GitHub Release** (`/releases?per_page=5` → empty array) and **no new enterprise customer / adoption announcement** found. The OCE launch blog post remains the newest enterprise-facing announcement: `https://openclaw.ai/blog/openclaw-enterprise` (Sep 29, 2026, by Kevin Lin; states OCE *"started at OpenAI and then was donated to the OpenClaw Foundation"*).

Official marketing/blog surface: `https://openclaw.ai/blog` — newest post is **Nov 6, 2026 "Use new models in OpenClaw without an update"**; nothing published inside the window. `https://openclaw.ai/sitemap.xml` confirms latest `lastmod` values are 2026-11-06 and 2026-11-05 — **no new posts in window**. `https://openclaw.ai/press` — newest press item is Jun 30, 2026 (TechCrunch); nothing in window.

---

## 6. ClawStat verdict — downgraded from ✅ to ⚠️, now citing the DOMPurify advisory

`https://clawstat.us/latest.json` (app_version 1.3.10, assessed_at **2026-11-11T06:42:24Z**, version 2026.11.3)

- **recommendation: ⚠️** · status key `wait`, label *"Too new to call"*, early_read **"Update with care"** · confidence: medium
- Headline: *"Solid release for most setups, but the web UI ships a dependency under a critical advisory — update with care if you use the Control UI"*
- Evidence gate: **⚠️**, `blockers: [196249]`, `blocker_count: 1`, `widespread: []`, `serious: []`, reason *"1 credible blocking issue confirmed for this version, none widespread."* — **note: this gate snapshot still lists #196249 as open, but that issue was closed at 2026-11-10T17:54:32Z, i.e. before the ClawStat assessment at 06:42Z on 11-11. The gate data is stale/internally inconsistent.**
- Also stale: `npm` block still reports version `2026.11.2` although `latest` is 2026.11.3; `recommended_version` is still `2026.10.10` (age 7 days, 1 blocker #191717) while `latest` is listed as 2026.11.2.
- Flip conditions: (1) ⚠️→✅ once a stable ships the #196249 fix **plus** fixes the darwin/arm64 update-handoff failures (#195253, #195827) — *#196249 is now closed, so only the darwin/arm64 half of this condition remains unmet*; (2) →⏸️ if bundled undici GHSA-2m5v-pch6-74hx (#196396) is confirmed exploitable with no patched stable; (3) →⏸️ if the macOS update-failure cluster (#195253, #195827, #195971, #195981) gains real community engagement or expands beyond darwin/arm64 npm/managed installs.
- Community signal: *"zero 👍 reactions across all 60 tracked issues despite ~2.9M weekly downloads"*, no megathreads.
- Prior release-day assessment (2026-11-10) rated v2026.11.3 ✅ — **the verdict flipped to ⚠️ within ~12h of ship**, driven solely by the newly discovered DOMPurify advisory.
- Hotfix chain: `[]`. `issues_capped: true`, cap 60 (tracked-issue sample is truncated → counts are a floor, not a census).
- ClawStat's own note on the 2026.11.2 incident wave (prior window): *"the loudest reports being detailed single-user diagnostics like #196249 and the darwin/arm64 update-failure reports"* — consistent with my read that the wave is contained but unresolved.

---

## 7. New use-case / deployment repositories on GitHub

`GET /search/repositories?q=openclaw+created:>2026-11-10T09:28:00Z&sort=stars&order=desc` → **total_count 46** (all 46 retrieved across pages 1–3; no pagination beyond that).

- **Max stars = 1** (three repos tied: `finettt/clawc` 1★, `Fnctn-Inc/portable-agent-skill-check` 1★, `Thomaszhou22/context-diet` 1★). Everything else is 0★.
- **Adoption signal is effectively nil**: no new repo exceeded 1 star inside the window; the previous baseline (core repo) moved +45 stars in the same period.
- Spam estimate: **~4/46 (~9 %) heuristic spam** (keyword match on description/name for promo/scraper/multi-account patterns) — e.g. `bright-cn/openclaw-plugin` ("Bright Data 免费 OpenClaw 插件 … 可绕过机器人检测"), `harjothkhara/openclaw-contributor-pulse`, `xia88niuniu/openclaw-workspace` (OAuth app landing page). **10/46 have a null description** — these null-description repos (`GCUSMS-AI-ProJect/OpenClaw_Sub`, `qvms/openclaw`, `HULUMULU123/openclaw_assist`, `ajansari/OpenClawSession`, `ParvenuDev/parvenu_openclaw_integration`, …) are more likely empty/parking/spam than genuine deployments. Treat ~9 % as a **lower bound**.
- Genuinely interesting new repos (0–1★, early): `revere-video/openclaw-revere` (read-only camera viewing), `fremded`/`gregretkowski/freecad-openclaw` (FreeCAD CAD automation), `rednosebrew1-ux/openclaw-jitsi-meetbot` (Jitsi), `jimmyplup/openclaw-synap-provider` + `openclaw-provider-synap` (Synap/Lintrra model provider), `lin7c/openclaw-laintas` (Laintas sign-in, no API key), `ltanedo/openclaw-antigravity-proxy`, `erforschtbot-cmyk/mnemo-memory-openclaw` (Mnemo-Cortex memory), `jjjhenriksen/openclaw-themes` (Control UI Christmas themes), `fansion314/openclaw-qqbot-sl`, `postdovo/postdovo-openclaw`, `Fnctn-Inc/portable-agent-skill-check` (Agent Skills metadata/link validator).

---

## 8. ClawHub skills — ZERO new skills in the window (possible ingestion pause)

`https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc`

- Page 1 (94 items) + page 2 (48 items) = **142 skills enumerated**; **max `createdAt` = 2026-11-10T09:17:59Z**, i.e. **10 minutes before the window opened**. **0 skills were created inside 2026-11-10T09:28Z → 2026-11-11T09:28Z.**
- Creation-day distribution of the enumerated set: **2026-11-09 → 66**, **2026-11-10 → 28** (all before 09:18Z), nothing after.
- Interpretation: either a genuine publishing pause for ~24h, or the ClawHub `createdAt` feed stopped advancing. Prior runs established the feed is fresh, so this is a **notable change worth flagging**, but it may equally be an API-side ingestion stall.
- Engagement counters remain unreliable (as previously established) — top-of-list skills show 85–102 "downloads" for skills created 2026-11-09, which is implausibly high for one-day-old skills; do **not** read as adoption.
- Newest notable skills (2026-11-09/10): `scrollport/ai-visibility-review`, `scrollport/sales-qualified-accounts`, `scrollport/lead-list`, `scrollport/seo-opportunity-map`, `mc0571/zread-wiki-export`, `buzzmark/buzzmark`, `mutonby/agentring`, `sullyo/cospark`. The `scrollport` author accounts alone account for 5 of the top 10 — **single-author concentration** in the fresh-skill set.

---

## 9. Caveats & data gaps

1. **npm downloads for the window are unavailable** — npm's API returns 0 for 2026-11-10 and 2026-11-11 (reporting lag). The WoW figure (+3.9 %) uses an incomplete 6-day week and the release-day bump (2026.11.3 published 11-10T17:59Z) is not yet reflected. A meaningful read requires re-checking the point endpoint in ~48h.
2. **web_search was effectively unusable** — 3 of 4 queries were blocked by a DuckDuckGo bot-detection challenge; only one query ("OpenClaw" release notes enterprise customers adoption) returned results, and it returned only official/aggregator pages with nothing new in the window. **No independent third-party news coverage of v2026.11.3, the DOMPurify advisory, or enterprise adoption could be confirmed.**
3. **ClawStat's data is internally stale** — its evidence gate still lists the closed #196249 as the blocker and its `npm` block still says 2026.11.2. Its recommendation should be read as "⚠️ because of the DOMPurify advisory", but its machine-readable fields lag reality.
4. **ClawStat caps its tracked-issue sample at 60** (`issues_capped: true`) → all its issue counts are a floor, not a census.
5. **`release/2026.11.4` branch state could not be verified** — the branches API query returned no `release/*` branches; the DOMPurify claim about that branch is taken from issue #196925's body, unverified by me.
6. **npm CLI bundled undici version was not independently confirmed** — I verified OpenClaw's own pins (`npm: 12.2.0`, `undici: 8.12.2` in v2026.11.3) and that npm 12.2.1 was published 2026-10-15 (before the 2026-10-27 advisory), but did not unpack npm 12.2.0's tarball to confirm the bundled undici 6.28.0 claim in #196396.
7. **Enterprise commit count (~208) is derived from a Link-header page count at per_page=1**, not an exact API total; treat as ±5 %.
8. **Issue-creation timestamps for #197152 and #196799 were not captured precisely** (both closed within the window) — both are P0 but their exact creation time relative to 09:28Z is inferred.
9. **Closed-issue count delta (220 → 102) is low-confidence** — query semantics may differ from the prior run.
10. **No new enterprise customer names, contract announcements, or adoption metrics were found** in-window; the enterprise signal in this window is purely code velocity in the OCE repo (207 merged PRs). Whether any of that corresponds to real deployments is **unverifiable from public sources**.
11. **ClawHub zero-new-skills finding is ambiguous** — genuine publishing pause vs. ingestion stall cannot be distinguished from the public API alone.
12. **GitHub search API rate limiting**: several compound `search/issues` queries returned `total_count: null` on first attempt and succeeded on retry; one query (`is:pr+undici+is:merged`) returned null and was dropped from the findings.
13. **`https://clawstat.dev` not attempted** (known non-resolving host); `https://clawhub.ai/api/v1/skills` has **no total-count field**, so 142 is the enumerated page-1+page-2 count, not necessarily the full catalogue.

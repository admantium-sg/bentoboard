# Findings — PLATFORM — openclaw-usecases — 2026-11-18

Window: 2026-11-17T09:28:00Z → 2026-11-18T09:28:00Z. Platform subagent.
Pre-captured: `tmp/2026-11-18/{npm.json,ghrel.json,clawhub.json,disclatest.xml}`. All URLs live-fetched.

---

## 1. Release state — v2026.11.5 NOW FULLY PUBLISHED; new extended-stable 2026.10.33

**NEW vs yesterday:** v2026.11.5 went from "signed tag only" to a **published GitHub Release + published npm package**.
- GH Release `v2026.11.5` published **2026-11-17T10:47:56Z**; tag → commit `e13cf15ece9bbd969b7362927c315362c90c97ff`.
- npm publish `2026.11.5` at **2026-11-17T09:59:33.472Z** (npm ~48 min BEFORE the GH Release).
- dist-tags now `latest=2026.11.5`, `beta=2026.11.5` (beta==latest), `extended-stable=2026.10.33` (yesterday: latest=2026.11.4, beta=2026.11.5-beta.4, extended-stable=2026.9.37).
- Source: `https://api.github.com/repos/openclaw/openclaw/releases`, `https://registry.npmjs.org/openclaw`

**NEW: v2026.10.33 — extended-stable (LTS-equivalent) backport.** GH Release published `2026-11-18T04:15:53Z`; npm `2026-11-18T03:11:16.913Z`; tag → `5196fbbf89838939b0c2e29c09b8829afbc0d415`. Body: *"a gateway-only `extended-stable` release, which is our current equivalent to LTS… OpenClaw from the end of October 2026, plus critical security updates, reliability and performance fixes"*; *"brings cumulative Gateway and core-plugin improvements since 2026.9.37, plus the selected maintenance fixes on the approved 2026.11.4 product baseline… core npm package, matching official npm plugins, and Gateway Docker images; native-app releases are not included."* Highlights: bounded export/recovery for long conversations/large session stores → OOM fixes (#194066, #196158, #195459, #196480, #176737, #181289); interrupted-update recovery (#181695, #186971, #187819).

**v2026.11.5 body highlights (32,102 chars):** restart-safe conversations (#196923/#196540/#196493); safer updates / rollback of failed Doctor-or-Gateway startup (#197851/#193272); Telegram interactive widgets incl. private-chat topics (#196991/#198022); faster memory recovery (#196378/#187797); reliable model fallback (#198427/#198357); usable device folders (#190065/#190088); **content boundaries — binary attachments no longer garble prompt text, authenticated browser CDP URLs stay out of tool results (#198309/#196262)**; busy-session messages + security presets (#185477). **One breaking change** — *"Breaking: harness and plugin session control"* (#175837): third-party harnesses must register session-keyed active runs in `runAttempt` and retain the cleanup fn; plugin RPC handlers must replace `chatAbortControllers`/`chatQueuedTurns` with authorized Gateway method dispatch; `expiresAtMs` → `startDeadlineAtMs`.

---

## 2. CRITICAL — are the four known fixes in the published artifact?

Method: `git/trees/<ref>?recursive=1` (3 calls: v2026.11.5 / v2026.10.33 / main) → blob size+sha; plus marker-only grep on `raw.githubusercontent.com` (no API cost).

| File | main | v2026.11.5 | v2026.10.33 | Verdict |
|---|---|---|---|---|
| extensions/browser/src/browser/navigation-policy.ts | 2561 | 2425 | 404 | **FIX SHIPPED in v2026.11.5** — contains local-loopback SSRF grant + `assertNavigationCurrent` ownership check (logic identical to main; only 2 comment/`standingSsrfPolicy` lines differ). Absent in backport. |
| extensions/browser/src/browser/pw-session-navigation-fence.ts | 27586 | 21939 | 404 | **PARTIAL in v2026.11.5** — has redirect-hop authority fence (`installNavigationAuthorityFence`), lacks main's newer `createStandingNavigationPolicy`, `raceWithTimeout`, `isRetiredFetchInterceptionError`, `settleInterception`, target `url`/request `headers` (~450 diff lines). |
| extensions/browser/src/browser/pw-session-navigation-standing.ts | 4869 | **404** | 404 | **NOT SHIPPED** — main only. |
| extensions/memory-core/src/dreaming-phases.ts | 42475 | 43158 | 45853 | `includeContentRevision` **present in v2026.11.5** + main, **absent in v2026.10.33** → dreaming fix #180692 shipped in the 11.5 line only. |
| src/gateway/server-methods/session-create-initial-turn.ts | 5479 | 5305 | 2778 | **NOT SHIPPED** — v2026.11.5 has `runWithoutOwnedSessionTranscriptWrites` but **no** `runWithoutSessionActorStorage` → incognito first-turn fix (#183800/34e60768) still absent from v2026.11.5 and v2026.10.33. |
| src/cron/inference-binding.ts | 3018 | 2872 | 1598 | **NOT SHIPPED (fix form)** — `resolveCronRuntimeSessionEntry` now EXISTS in v2026.11.5 (absent in tags yesterday) but **without the `provider` arg**: v2026.11.5 `(binding, entry)` vs main `(binding, entry, provider)` with `binding.provider === provider` guard. |

**Supporting fact:** the browser SSRF fix landed via commit `2026-11-15T03:38:05Z` — *"fix(browser): pages reach SSRF-blocked addresses by navigating after an action's 250 ms guard (#198452)"* → contained in v2026.11.5, but the release body does **not** call it out as security. Source: `https://api.github.com/repos/openclaw/openclaw/commits?path=extensions/browser/src/browser/navigation-policy.ts`

**Bottom line:** of the four tracked fixes — **1 fully shipped (browser navigation-policy SSRF grant), 2 partial (navigation fence v1; dreaming fix in 11.5 line), 2 un-shipped (session actor-storage/incognito first turn; provider-scoped cron fallback).** The new v2026.10.33 backport contains **none** of the four.

---

## 3. Demand — npm downloads
Source: `https://api.npmjs.org/downloads/range/2026-11-01:2026-11-18/openclaw`

Daily: 11-01 318,468 · 11-02 321,275 · 11-03 393,121 · 11-04 400,586 · 11-05 369,131 · 11-06 504,091 · 11-07 493,523 · 11-08 403,698 · 11-09 349,424 · 11-10 427,925 · 11-11 429,437 · 11-12 495,873 · 11-13 478,823 · 11-14 471,274 · 11-15 368,783 · **11-16 483,549** · 11-17 0 · 11-18 0

- **Last complete day = 2026-11-16 = 483,549** (yesterday's last complete day was 11-15 = 368,783; 11-16 is +31.1%).
- **LAG:** 11-17 and 11-18 both 0 — npm API lags ~1–2 days, so the **v2026.11.5 release-day bump is not yet visible**; no post-release demand claim yet.
- Week-aligned: 11-01..11-07 = 2,800,195 → 11-08..11-14 = 3,056,454 = **+9.15%**; 11-02..11-08 = 2,885,425 → 11-09..11-15 = 3,021,539 = **+4.72%** (unchanged vs yesterday).

---

## 4. Tracker — GitHub + enterprise

**`openclaw/openclaw`** (`https://api.github.com/repos/openclaw/openclaw`, pushed_at 2026-11-18T09:28:12Z): stars **394,701** (+84 vs 394,617) · forks **82,915** (+4) · open issues **8,314** (+88) · subscribers **1,690** (+3).

**New P0 in window = 6**: #201077 (11-18T07:48Z) Update failure: service-revalidation-failed (2026.9.4) · #201057 (07:09Z) Update failure: update (2026.11.2) · #201016 (05:36Z) Update failure: managed-service-stop-failed (2026.10.9) · **#200824 (11-17T22:25Z) [Bug]: Sessions created before 2026.11.x are no longer returned by sessions.list** ← clawstat verdict driver · #200720 (17:35Z) Update failure: package-update (2026.11.1) · #200540 (09:54Z) Update failure: repairing (2026.9.4).

**New P1 in window = 37** (functional highlights): #201104 cron malformed-tool-call continuation lost on v2026.11.5 · #201085 failed auto-update leaves Gateway stopped (schema 36 vs 22) · #201071 v2026.11.5 native Windows `config set` refuses own write ("SQLite read-only worker") · #201058 cold Gateway startup on PostgreSQL fails in secrets plugin prep · #201055 `before_tool_call` approval waits killed by 90 s Codex timeout · #201054 subagent completion announce dropped on newer user message · #201048 `sessions.materialize` blocks main thread ~5 min on large install · #201012 Slack Socket Mode stuck after 59/60 retries on 2026.11.5 · #200973 Claude CLI resume fails "Native tool authority capture is no longer active" · #200920 Setup small-context model → Context overflow · #200849 invalid session_nodes row blocks session admission · #200833 macOS dashboard update leaves old Gateway running · **#200804 Twilio MMS blocked by SSRF allowlist** · #200798 browser `route.continue` assertion escapes → Gateway shutdown (2026.11.3) · #200775 v2026.11.5 unbound claude-cli automations refused "no recorded inference account" · #200773 plugin installs fail with npm EALLOWSCRIPTS (v2026.11.5 macOS) · #200768 WhatsApp inbound media dropped on transient network error. Source: `https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-17T09:28:00Z..2026-11-18T09:28:00Z+label:P0|P1`

**Fix-PR status for clawstat gate issues** (`is:pr` search): #200824 **total=0 (no fix PR)** · #200666 **total=0** · #200804 → 1 PR **#200890, closed (not merged)**.

**`openclaw/openclaw-enterprise`** (`https://api.github.com/repos/openclaw/openclaw-enterprise`, pushed_at 2026-11-18T09:31:25Z): stars **476** (+2) · forks **122** (+2) · open issues **405** (unchanged).

**Enterprise merged PRs in window = 89** (`is:pr is:merged merged:>=2026-11-17T09:28:00Z`) — heavy shipping day; functional titles only: **#6336 feat: add Agent HTTP chat completions (RFC-0040)** (new capability) · **#6442 / #6434 (RFC-0042) Continue interrupted sessions across compatible redeployments** · #6446 fix(agents): name the Agent ID in the state lock message · #6407 fix(runtime): keep a stopped turn stopped across the next deployment · **#6458 feat(deploy): show production upgrade progress and verbose output** · **#6457 feat(deploy): add a checked Keycloak production profile** · #6451 fix(auth): admit independently configured OIDC endpoint hosts · #6437 fix(runtime): deterministic setup-renewal image checks · #6435 Fix dedicated Codex continuation after Gateway restart · #6362 fix(compute): carry proxy settings into the codex auth probe · #6411 fix(api): log refused API key as one structured line · #6382/#6406/#6379 state-lock handling · #5066 fix(helm): refuse /0 remoteNodeCidrs · #4747 feat(profile): add controlPlane.clusterPort · #4925 fix(deps): pin open ^11.0.0 for CVE-2026-119025. Source: `https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:>=2026-11-17T09:28:00Z`

**Main repo merged PRs in window = 350** (count only; high merge cadence, consistent with a feature-release day).

---

## 5. CLAWSTAT — verdict "wait / too new to call"
Source: `https://clawstat.us/latest.json` (app 1.3.10, assessed 2026-11-18T03:15:32Z)

- **status.key = `wait`**, label "Too new to call", ⚠️ "Update with care"; `version` = 2026.11.5 (age 1 day, not settled).
- Headline: *"Update with care: upgraded sessions can vanish from the session list, and a repair run can force database restores to roll back."* Confidence medium.
- **recommended_version = 2026.11.3** (kind "settled", age 8 days) — clawstat still points users at 2026.11.3, **not** at the new 2026.10.33 extended-stable.
- Thesis driver: **#200824** (30 pre-upgrade sessions invisible in Control UI; "40 kept, 0 pruned") — *"no fix PR opened for it yet (clawsweeper:no-new-fix-pr)"*. Tier-1: #200774 (update repair migrates state DB 19→36, agent DB 24→38 in place → rollback needs DB restores), #200666 (Windows `security.installPolicy` rejects every exec command), #200671 (failed gateway startup exits 0 → systemd restart-loop on 1 GB Pi), #200720.
- **Flip conditions (verbatim):** (1) "⚠️ eases to ✅ once a stable release ships a fix for #200824 (sessions.list regression) — check that sessions created before the upgrade reappear in the Control UI after updating"; (2) "⚠️ hardens to ⏸️ if #200824 or the #200774 rollback trap gains widespread community engagement (dozens of 👍 / a megathread) or if #200774-style forward DB migration is confirmed to cause actual data loss on 2026.11.5"; (3) "⚠️ eases to ✅ if #200666 (Windows installPolicy) and #200804 (Twilio MMS allowlist) land merged fixes with workarounds verified by maintainers…".
- **Change vs yesterday:** from a "half-met" condition description to a **triple flip-condition set with an explicit verdict driver (#200824)** and recommended_version pinned at 2026.11.3 while 2026.11.5 is 1 day old. Condition 1 **NOT met** (no fix PR for #200824, verified independently); condition 3 **NOT met** (#200666 no PR; #200804 PR #200890 closed unmerged).
- Tracked issues (top 12): #200824, #200671, #200666, #200720, #200774, #200804, #200892, #200920, #200934, #200558, #200590, #200597.

---

## 6. Official surfaces — NO CHANGE
md5 of live `https://openclaw.ai/...`: showcase `72af42550b4aeadc1aece19bca286ebe` (**identical**, 6th byte-identical run) · press `b1659d13b400a8f02255b11cc24c14b0` (**identical**) · rss.xml `d840797cc7691f44c63357dab085a79a` (**identical**) → no new RSS items; newest item remains "OpenClaw is coming to Shenzhen" (2026-11-13).

## 7. Tags
`https://api.github.com/repos/openclaw/openclaw/tags?per_page=10` → v2026.11.5 (e13cf15ece), v2026.11.5-beta.4/-beta.3/-beta.2/-beta.1, v2026.11.4, v2026.11.3, v2026.11.2, v2026.11.1, **v2026.10.33 (5196fbbf89)**. New since yesterday: v2026.11.5 + v2026.10.33; no new beta tags.

---

## 8. Negative evidence (checked, found absent)
1. "No GH Release for v2026.11.5" — **refuted**: exists (2026-11-17T10:47:56Z). Same for v2026.10.33.
2. "v2026.11.5 not on npm" — **refuted**: published 2026-11-17T09:59:33Z.
3. Incognito first-turn fix (`runWithoutSessionActorStorage`) — still absent from v2026.11.5 and v2026.10.33 (main only).
4. Provider-scoped cron fallback (`resolveCronRuntimeSessionEntry(..., provider)`) — still absent from v2026.11.5 (fn present, guard missing) and v2026.10.33.
5. `pw-session-navigation-standing.ts` — absent from both published refs (main only).
6. All three `extensions/browser/**` files are HTTP 404 on v2026.10.33; `includeContentRevision` absent from its dreaming-phases.ts → backport contains none of the tracked fixes.
7. No SSRF/security call-out in the v2026.11.5 release notes (only the unrelated "security presets" highlight).
8. No fix PR for #200824 (total=0) → clawstat condition 1 unmet.
9. No fix PR for #200666 (total=0); only #200804 PR (#200890) closed-unmerged → condition 3 unmet.
10. No new beta tags beyond v2026.11.5-beta.4; official surfaces byte-identical, no new RSS items.
11. npm download series still lagging (11-17/11-18 = 0) → no post-release demand signal yet.
12. gh CLI token invalid — not used; ~11 unauthenticated API calls (limit 60/hr), no blocking.

---
*Compiled 2026-11-18T10:30–10:45 Europe/Berlin. All figures verified against live APIs.*

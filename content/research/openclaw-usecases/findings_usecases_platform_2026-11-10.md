# OpenClaw Platform Findings — 2026-11-10 run

Research window: **2026-11-09T09:28:00Z → 2026-11-10T09:28:00Z** (24h, UTC).
Baseline for deltas: the 2026-11-09 run (window ending 2026-11-09T09:28Z).
Report timestamp: 2026-11-10T~09:35Z. All findings are inside-window unless explicitly marked "pre-window / unchanged".

Headline: **no new release shipped in the window**; the window was dominated by a *post-release incident wave* on 2026.11.2 (two new P0 Gateway-freeze bugs, a macOS/Windows upgrade-failure cluster) that flipped ClawStat's verdict back to ⚠️ "Update with care", plus a large enterprise-repo activity jump (12 new security/policy-shaped issues, 95 PRs, 78 merges).

---

## 1. Releases / npm / version state

### 1.1 No new npm publish in window — unchanged
- npm `dist-tags`: `latest=2026.11.2`, `beta=2026.11.5-beta.1`, `extended-stable=2026.9.36`.
- Publish timestamps in window: **none**. Last npm publish remains `2026.11.2` at 2026-11-08T09:48:24Z; `2026.11.5-beta.1` at 2026-11-04T04:01:35Z. Registry `modified` still 2026-11-08T09:48:25Z.
- Versions present under 2026.11.x: `2026.11.1`, `2026.11.2`, `2026.11.5-beta.1` only.
- Delta vs baseline: **no change** (identical dist-tags and publish times).
Source: https://registry.npmjs.org/openclaw

### 1.2 New Git tag `v2026.11.5-beta.2` exists but is NOT published to npm — pre-window, but newly observable
- `refs/tags/v2026.11.5-beta.2` → annotated tag object `9ef4875dd31fc771d25fbe6a2bcfe3861cd4a76c`; the tagged commit's author/committer date is **2026-11-07T14:08:50Z** ("test: diagnose cold file draft admission") — i.e. the tag itself predates the window, so it is **not** a new in-window artifact.
- `https://registry.npmjs.org/openclaw/2026.11.5-beta.2` → **HTTP 404**. The beta.2 tag has no npm artifact; npm `beta` still points at beta.1.
- Inference (not a hard fact): the repo is preparing a beta.2 cut that has not been published; no GitHub *release* object exists for it (releases list top-5 unchanged: v2026.11.2 → v2026.10.10-beta.5).
Source: https://api.github.com/repos/openclaw/openclaw/git/refs/tags/v2026.11.5-beta.2
Source: https://api.github.com/repos/openclaw/openclaw/commits/v2026.11.5-beta.2
Source: https://registry.npmjs.org/openclaw/2026.11.5-beta.2

### 1.3 GitHub releases list — unchanged
- v2026.11.2 (2026-11-08T19:31:04Z), v2026.11.1 (2026-11-05T09:48:37Z), v2026.11.5-beta.1 (2026-11-04T04:51:56Z), v2026.10.10 (2026-11-03T03:22:35Z), v2026.10.10-beta.5 (2026-10-30T03:57:14Z).
- No release created or republished inside the window.
Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=5

### 1.4 `CHANGELOG/Unreleased.md` — one entry (pre-existing structure, small)
- Current content: "### Fixes — Control UI: keep automation editor actions flush with the scroll area's bottom, including on narrow screens and when editing job scratch. (#172176) Thanks @brandon-julio-t!"
- This is the only unreleased entry visible; **not** a new release.
Source: https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/Unreleased.md

---

## 2. npm download volume

| Metric | Value | Note |
|---|---|---|
| 2026-11-09 point day | **0 downloads** | npm reporting lag, not a collapse (11-08 = 403,698) |
| 7d range 2026-11-03:2026-11-10 | **2,564,150** | sum 11-03..11-08 + 0 for 11-09 |
| 7d range 2026-11-02:2026-11-09 (baseline window) | 2,885,425 | unchanged, same underlying data |
| Prior week 2026-10-26:2026-11-02 | 2,578,610 | daily: 474,738 / 391,520 / 341,738 / 384,516 / 375,102 / 292,528 / 318,468 |

- Like-for-like comparison on complete days only (11-03..11-08 = 2,564,150 vs 10-27..11-01 = 2,103,872) → **+21.9%**. Inference: momentum is up week-over-week; the raw "7d = 2.56M" is understated purely because 11-09 reports 0.
- Daily trajectory inside the window: 11-06 504,091 (peak) → 11-07 493,523 → 11-08 403,698 (post-2026.11.2 release day, +9.6% over 11-05's 369,131).
Source: https://api.npmjs.org/downloads/point/2026-11-09:2026-11-10/openclaw
Source: https://api.npmjs.org/downloads/range/2026-11-03:2026-11-10/openclaw
Source: https://api.npmjs.org/downloads/range/2026-11-02:2026-11-09/openclaw
Source: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-02/openclaw

---

## 3. Core repo `openclaw/openclaw`

| Metric | Now | Baseline (11-09 run) | Delta |
|---|---|---|---|
| Stars | **394,270** | 394,229 | +41 |
| Open issues | **8,116** | 8,024 | +92 |
| Forks | 82,857 | — | — |
| New issues in window | **198** | 221 | −23 |
| New PRs in window | **497** | 493 | +4 |
| Merged PRs in window | **287** | 293 | −6 |
| Issues closed in window | **220** | — | — |
| Commits in window | **284** (Link last-page rel) | — | — |
| `pushed_at` | 2026-11-10T09:28:43Z | — | active through window end |

Source: https://api.github.com/repos/openclaw/openclaw
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z
Source: https://api.github.com/repos/openclaw/openclaw/commits?since=2026-11-09T09:28:00Z&until=2026-11-10T09:28:00Z

### 3.1 Two NEW P0 Gateway-freeze bugs on 2026.11.2 — the core novel story of the window

**#196249 — Slack DM + `/reasoning stream` with `channels.slack.streaming.mode: "off"` freezes the Gateway** (P0, `bug:crash`, `impact:crash-loop`, created 2026-11-09T20:51:28Z, still open, 1 comment).
- Root cause (from the issue body): the Slack plugin reprocesses the whole accumulated reasoning text on *every* reasoning delta even though no preview exists to render it; a long reasoning stream (observed with GLM-5.2, thinking `high`) blocks the Gateway main thread until the process is killed. ClawStat's version of the report adds: main thread at 100% CPU, event-loop stalls growing to ~24 s, Slack + WhatsApp + cron + SQLite admission all timing out, only SIGKILL recovers.
- Fix exists **only as an open PR #196250** ("fix(slack): gateway freezes during long reasoning streams when Slack streaming is off", created 2026-11-09T20:53:02Z, `state: open`, `merged_at: null`, updated 2026-11-09T21:51:42Z). Not in any published release.
Source: https://api.github.com/repos/openclaw/openclaw/issues/196249
Source: https://api.github.com/repos/openclaw/openclaw/pulls/196250

**#196017 — Slack conversation-route eligibility is O(n²) → Gateway main thread stuck at 100% CPU** (P0, `impact:crash-loop`, `clawsweeper:fix-shape-clear` / `queueable-fix`, created 2026-11-09T13:55:56Z, still open, 2 comments).
- Cost of the eligibility check grows quadratically with the number of an agent's conversations; the process stays up with ports bound but serves nothing (Control UI times out, Slack silent, no log, no health signal), SIGTERM ignored because the event loop is blocked → SIGKILL required.
Source: https://api.github.com/repos/openclaw/openclaw/issues/196017

Both are inside the window, both are P0, both attack the Gateway main thread. Combined with #196249 this is the second distinct main-thread stall channel in 24h (the third, #195819 config hot-reload re-hash, is pre-window).

### 3.2 Other new P0 / high-severity in-window core issues
| # | Title | Created | State | Notes |
|---|---|---|---|---|
| 196251 | [Bug] Windows Native Setup Fails on "Finishing setup" Due to 10s Gateway Health Check Timeout | 2026-11-09T20:54:16Z | open | P0, install-path breakage on Windows |
| 196017 | Slack route eligibility O(n²), 100% CPU | 2026-11-09T13:55:56Z | open | P0 |
| 196249 | Slack + reasoning stream freeze | 2026-11-09T20:51:28Z | open | P0 |
| 195971 | Update failure: package-update (2026.11.1) | 2026-11-09T12:44:42Z | open | P0; darwin/arm64 upgrade cluster |
| 195981 | Update failure: package-update (2026.10.10) | 2026-11-09T12:56:16Z | open | P0; same cluster |
| 196396 | Pinned npm 12.2.0 bundles undici 6.28.0, affected by GHSA-2m5v-pch6-74hx | 2026-11-10T02:31:52Z | open | P2, `impact:security`; npm 12.2.0/12.2.1 bundle vulnerable undici, fixed in 6.29.1; Dependabot downstream fails with `security_update_not_possible`; npm 12.2.2 (2026-11-04) is the first cut bundling a fixed undici |
| 196142 | [Bug] OpenRouter catalog rows built right after Gateway start say reasoning off → 400 on reasoning-mandatory endpoints | 2026-11-09T17:12:00Z | open | pre-window? no — created in window |
| 196199 | Regression since 2026.10.10: native Codex helper completions fail to resume parent, pause /goal, lock out assistant | 2026-11-09T18:42:52Z | open | high |
| 196061 | [Bug] Running Codex tasks stall after silent pauses | 2026-11-09T15:21:53Z | open | high |
| 196030 | darwin: let process identity fail closed instead of falling back to /bin/ps (opt-in) | 2026-11-09T14:27:48Z | open | P2, security-shaped |
| 196120 | Config `env.vars` values treated as volatile secrets, regenerated across Gateway restarts | 2026-11-09T16:38:45Z | open | `impact:security` |
| 196306 | [Feature] Slack: treat user-token posts from trusted apps as the posting user | 2026-11-09T23:13:18Z | open | `impact:security` |
| 196408 | [Feature] Consultation-scoped MCP Relay grants and stable request identity | 2026-11-10T02:56:00Z | open | `impact:security` |
| 196318 | Issue a node-only pairing code from the local Gateway state directory | 2026-11-09T23:30:41Z | open | `impact:security` |
| 196548 | macOS: native hosting choice and OpenClaw ID onboarding | 2026-11-10T09:18:45Z | open | `impact:security` |
| 196233 | [Feature] Scoped native Chrome/CUA access for owner-bound condition-triggered Codex automations | 2026-11-09T20:22:43Z | open | `impact:security` |
| 195965 | fix(android): display gateway destination authority and path in TLS trust dialog | 2026-11-09T12:33:20Z | open | `impact:security` |
| 195936 | [Feature] Count channel sessions from a linked channel identity as that person's own session | 2026-11-09T11:38:28Z | open | `impact:security` |

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:P0+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z+label:impact:security

### 3.3 `label:security` in-window core issues = **1**
- #195960 "fix(memory): gateway restart stalls when dreaming cron is enabled" — created 2026-11-09T12:26:16Z, **closed 2026-11-09T12:34:04Z** (8-minute turnaround). Root cause: cron starts after plugin services, so synchronously reconciling the dreaming cron inside the plugin-service `start` hook created an ordering deadlock; Gateway startup stalled ~10 minutes. Fix: plugin startup non-blocking, dreaming reconciles its cron after cron is ready.
- Baseline had 0 security-labelled in-window issues → delta +1, but it is a fix, not a vulnerability.
Source: https://api.github.com/repos/openclaw/openclaw/issues/195960

### 3.4 Notable merged PRs in window (core)
- **#191513 feat(pairing): pair a browser with a short code approved on the host** (2026-11-10T00:34:00Z) — new user-facing capability; pairs with the still-open security issue #196318 ("node-only pairing code from the local Gateway state directory").
- #185404 fix(agents): Claude CLI turns hit output limits on discarded stream frames (2026-11-09T19:06:32Z)
- #189991 fix(sessions): cold PostgreSQL conversations fail after idle readers close (2026-11-10T05:26:27Z)
- #191326 fix(config): config writes switch models to API-key billing without a warning (2026-11-09T18:53:27Z)
- #188748 fix(ui): catch up "Ask OpenClaw" from the transcript after reconnects (2026-11-10T07:20:07Z)
- #192552 fix(gateway): avoid unnecessary cold-start initialization (2026-11-10T03:59:45Z)
- #189112 fix(codex): clarify policy boundaries and preserve legacy withdrawal (2026-11-10T02:17:53Z)
- #190205 refactor(plugins): forward auth and catalog to their owners (2026-11-09T15:30:19Z)
- #191950 fix(talk): stop voice claiming cancelled consult work finished (2026-11-09T20:56:46Z)
- #167665 fix(ios): reminders.list drops reminder notes (2026-11-10T08:33:50Z)
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z

---

## 4. Enterprise repo `openclaw/openclaw-enterprise` — largest delta in the run

| Metric | Now | Baseline | Delta |
|---|---|---|---|
| Stars | **457** | 455 | +2 |
| Open issues | **328** | 306 | +22 |
| Forks | 110 | — | — |
| **New issues in window** | **12** | **0** | **+12** |
| New PRs in window | **95** | 40 | **+55** |
| Merged PRs in window | **78** | 46 | **+32** |
| Issues closed in window | 2 | 0 | +2 |
| `pushed_at` | 2026-11-10T09:28:58Z | — | — |

Source: https://api.github.com/repos/openclaw/openclaw-enterprise
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:issue+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z

### 4.1 All 12 new enterprise issues (every one is security/policy-shaped — the baseline pattern of "0 new issues" broke)
| # | Title | Created | Key labels |
|---|---|---|---|
| 5209 | [Feature Request] Let Agent managers read all revisions of their Agent | 2026-11-10T09:03:47Z | P2, impact:security, impact:ux-friction, needs-product-decision |
| 5180 | Support multiple OIDC providers in one Installation | 2026-11-10T02:56:57Z | P2, impact:auth-provider, impact:security |
| 5179 | Support linking an existing OCE account during OIDC sign-in | 2026-11-10T02:56:53Z | P2, impact:auth-provider, impact:security |
| 5177 | **Reasoning summary parts can reveal selected material** | 2026-11-10T02:15:42Z | P2, impact:security, source-repro, linked-pr-open |
| 5172 | Sandbox network rules deny multi-segment Google resource names | 2026-11-10T01:53:37Z | P2, impact:other, source-repro |
| 5168 | Codex model discovery rejects a catalog that omits priority | 2026-11-10T01:42:51Z | P2, impact:auth-provider, source-repro |
| 5165 | Null NetworkPolicy rule lists crash Namespace preparation | 2026-11-10T01:36:52Z | P2, impact:other, source-repro |
| 5164 | Git cannot load a repository credential public CA that starts with a UTF-8 BOM | 2026-11-10T01:36:15Z | P2, impact:other, source-repro |
| 5160 | Following Agent logs replaces the accepted tail with 1000 lines | 2026-11-10T01:22:25Z | P2, impact:other |
| 5126 | **Slack group-to-Agent mapping is not enforced when multiple Agents share one Slack app** | 2026-11-09T14:24:00Z | **P1**, impact:message-loss, needs-product-decision, needs-maintainer-review |
| 5115 | Native Codex catalog teardown can leave a launcher's app-server descendant running | 2026-11-09T11:15:39Z | P2, impact:crash-loop, queueable-fix |
| 5111 | CLI revision paging reports success when its continuation notice cannot be written | 2026-11-09T10:27:36Z | P2, impact:ux-friction — **closed 2026-11-09T14:31:58Z** |

Security-relevant reading (inference): #5177 (reasoning summaries leaking selected material) and #5126 (cross-Agent message routing in shared Slack apps) are the two with real enterprise blast radius — both are isolation/tenant-boundary shaped, not cosmetics.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:issue+created:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z

### 4.2 Notable merged enterprise PRs (78 merged in window)
- **#3255 feat: add opt-in host-only Agent browser sessions** (2026-11-10T00:25:35Z) — new capability.
- **#4859 Reject nested OAuth client registration and secret rotation** (2026-11-10T05:47:38Z) — auth hardening.
- **#5108 fix(auth): make browser sign-in results single-use across API instances** (2026-11-09T13:29:30Z) + **#5104 RFC-0007: Collect a browser sign-in result across compatible API instances** (2026-11-09T09:42:13Z) + **#5106 Prepare PostgreSQL storage for external sign-in results** (2026-11-09T09:46:27Z) — a coherent 3-PR browser sign-in flow landed same-day.
- **#5105 Verify OpenShell provider ownership before plugin credential export** (2026-11-09T09:38:32Z) — credential-export ownership check.
- **#5000 Check active Agent revisions before a controller-only upgrade** (2026-11-10T06:18:09Z) — upgrade-safety gate (part of the same family as the baseline's upgrade-sampling work).
- **#2731 fix(profiles): refuse composed Backend ID collisions** (2026-11-10T08:00:09Z) — ID-collision rejection.
- **#4833 Prevent Gateway crashes during Node worker termination and split native runtime smoke** (2026-11-10T06:43:00Z).
- #1196 docs(repository-credentials): add token safety guidance to the development token pages (2026-11-10T07:56:40Z).
- #5019 fix(cli): return installation output delivery errors (2026-11-10T09:21:00Z).
- #5109 Restore Agent revision history reads when Harness settings are missing (2026-11-10T07:49:45Z).
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-09T09:28:00Z..2026-11-10T09:28:00Z

---

## 5. Security advisories

- **No new OpenClaw GHSA in the window.** `?affects=openclaw` (npm ecosystem) returns the newest as **GHSA-3x84-qq85-fj65, published 2026-10-21T19:37:42Z** ("OpenClaw: Browser CDP discovery could accept blocked WebSocket URLs"). Zero advisories published ≥ 2026-11-09.
- Repo advisory endpoint (`/repos/openclaw/openclaw/security-advisories?per_page=100`) returns exactly 100 with a next cursor (>100 total, not enumerable); newest `published_at` among those 100 is 2026-09-11T00:58:59Z. The known newest GHSA (hggm-x7r9-mm7v, path-traversal/path-validation bypass) is dated **2026-03-26** — unchanged from baseline, so no new GHSA since the baseline observation.
- No `openclaw`-related advisories in the global npm advisory feed during 2026-11-09 (that day was dominated by tsParticles MCP DoS advisories, a Claude Code TOCTOU, Moleculer).
- **Related but new**: core issue #196396 (2026-11-10T02:31:52Z) reports that OpenClaw's pinned `npm` 12.2.0 bundles **undici 6.28.0**, affected by **GHSA-2m5v-pch6-74hx** (+3 other undici advisories), all fixed in undici 6.29.1; because it is bundled, downstream Dependabot runs fail with `security_update_not_possible`. `main` now pins npm 12.2.1 (bundles undici 6.29.0 — still affected); npm 12.2.2 (2026-11-04) is the first release bundling a fixed undici. **OpenClaw itself has no fixed stable release that picks this up yet.**
Source: https://api.github.com/advisories?affects=openclaw&per_page=100&sort=published&direction=desc
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100
Source: https://api.github.com/repos/openclaw/openclaw/issues/196396

---

## 6. ClawStat (`clawstat.us/latest.json`) — verdict hardened back to ⚠️

- `assessed_at`: **2026-11-10T08:34:35Z** (inside window). `version`: 2026.11.2. `recommendation`: ⚠️. `status.key`: **care** ("Update with care"). `status.early_read`: **null** (baseline: "Safe to update"). `confidence`: medium.
- **Headline**: "Update with care: a Slack streaming setting can hang the gateway, and several macOS upgrade attempts have failed mid-update".
- `evidence_gate`: verdict ⚠️, **blockers = [196249]** (1 credible blocking issue), widespread = [], serious = [], floor_applied false. Baseline had 0 blockers / "Safe to update" — **delta: a credible blocker appeared and the verdict hardened**.
- `recommended_version`: **2026.10.10** (kind "settled", published 2026-11-03, age_days 7, blocker #191717 "Control UI steering waits 15 minutes…" , blocker_count 1). Baseline: 2026.10.9 with 5 blockers → **delta: recommended version moved 2026.10.9 → 2026.10.10, blockers 5 → 1**.
- `freshness`: fresh **false**, days_since_release 2, runs_assessed 5, version_specific_issues 60, carried_over 0. Baseline: fresh=true, days_since_release 1 → **delta: freshness now false**.
- `track_record`: version 2026.11.2, runs 5, path ["✅","⚠️"], direction **"hardened"**, first 2026-11-09 ✅ → last 2026-11-10 ⚠️. (Baseline run count for this version was 2.)
- `calibration`: npm_weekly_downloads 2,885,425 (same weekly figure as baseline), tracked_total 67, closed_completed 7.
- `platform_impact`: all platforms listed **high** (windows, macos, linux, ios, android, web-ui, discord, slack, telegram, whatsapp, other-channel).
- `changes`: breaking/fixes/features all **empty** (no structured release-delta data published).
- `sentiment_summary`: "Community signal is quiet: zero 👍 reactions across all 60 tracked issues despite ~2.9M weekly downloads … no megathreads or widespread complaints anywhere in the data."
- `flip_conditions`: ⚠️→✅ once a stable release ships the #196249 fix (currently only staged in v2026.11.5-beta.1) and addresses the darwin/arm64 update-handoff failures (#195253, #195827); ⚠️→⛔ if GHSA-2m5v-pch6-74hx (#196396) is confirmed exploitable; ⚠️→⛔ if the macOS update-failure cluster gains real engagement or expands beyond darwin/arm64 npm/managed installs.
- Note: ClawStat's thesis claims the #196249 fix "appears to be staged" in v2026.11.5-beta.1 — the beta.1 npm artifact predates the issue (2026-11-04 vs issue 2026-11-09), so that staging claim is **not verifiable** from the artifact and is best read as inference.
Source: https://clawstat.us/latest.json

---

## 7. ClawHub skills ecosystem

- Window-new skills: **108** (unique `ownerHandle/slug` with `createdAt` in [2026-11-09T09:28Z, 2026-11-10T09:28Z]); distinct publishers: **45**. Baseline: 115 skills / 53 publishers → **delta: −7 skills, −8 publishers**.
- Engagement counters remain degenerate: **max installs = 1, max stars = 1** across all 108 (max downloads 138). Same "counter inflation / unusable-as-adoption" caveat as baseline — do not read these as adoption.
- Top publishers by volume: maxouf 15, nvidia 12, huhoo 10, scrollport 7, 0xnirlin 4, voronindenis5 4, wlc-dev 4, scavio-ai 3. Baseline's top publishers were yanghhu (voiceover x9) and ee324 (A2AWire x9) — **neither appears in today's top-8**; publisher mix turned over completely.
- Notable new skills: `nvidia` published 12 skills (a publisher with an org handle, unlike baseline's individual handles); `horacetu/ddtclaw-mall-insight`; `huhoo/cue-cn-*` series (earnings forecast, cash-flow quality, working-capital quality, controlling-shareholder change — a China-equity-analysis skill cluster); `jjjhenriksen/agent-templates` (human-sounding planning agents for celebrations/travel/community).
- Method caveat (important): the API's `nextCursor` **does not advance** (identical cursor returned across pages), so full enumeration is impossible. Largest reachable page = 189 unique skills back to 2026-11-08T15:00:19Z. Because that coverage starts before the window opens, the 108 figure should be treated as complete-for-the-window, but skills older than the cursor horizon that were *edited* in-window are invisible; default ordering is not by createdAt, so explicit `sort=createdAt&order=desc` was required.
Source: https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc

---

## 8. Ecosystem / showcase / blog / new repos

- **Showcase**: `https://openclaw.ai/showcase` byte size **150,922** — identical to baseline (delta 0). No new showcase entries.
- **Blog RSS**: latest post still **2026-11-06** "Use new models in OpenClaw without an update". No new post inside the window (next-latest 2026-11-05 "Shattering Silos with OpenClaw Multiplayer", 2026-10-21 Focus Weeks).
- **New GitHub repos in window**: **57** repos matching "openclaw" created after 2026-11-09T09:28Z. Top by stars: `RicchiutiDev/ClawNova` (3 stars, 2026-11-09T13:56:05Z, customized Android client), `2867297362mjb-sketch/openclaw-teamorouter-provider` (1, 2026-11-09T18:21:46Z), `jjjhenriksen/agent-templates` (1, 2026-11-09T17:36:16Z), `edliuustc/pocket-ai-raycast` (1, 2026-11-10T03:15:23Z, open-source Raycast AI alternative). Rest are 0-star.
- Third-party coverage: The Claw Report's index page is dated "Last updated: November 10, 2026" with today's top story = 2026.11.2 release framing ("a maintenance update focused on reliability, performance polish, and security hardening … plan a staged rollout, especially for production or regulated environments"), and a 2026-11-09 SEN-X roundup noting 2026.11.2 headline fixes (reminders, duplicate widgets, update repair) plus deferred plugin-publishing and Android-build items. No separate in-window incident/breach story found in web search.
Source: https://openclaw.ai/showcase
Source: https://openclaw.ai/rss.xml
Source: https://api.github.com/search/repositories?q=openclaw+created:>2026-11-09T09:28:00Z&sort=stars
Source: https://www.theclawreport.com/

---

## 9. Cross-checks against "already known" (no change unless noted)

- SQLite worker-queue fix in 2026.11.5-beta.1 — unchanged (beta dist-tag still beta.1).
- Codex child-completion host-capability bug not fixed in 11.2 — **still not fixed**; #196199 (native Codex helper completions fail to resume parent, regression since 2026.10.10) was **created inside this window** (2026-11-09T18:42:52Z) and remains open, with label `clawsweeper:needs-info`; ClawStat's own reviewer flagged the "confirmed regression" wording as slightly stronger than the evidence supports.
- Owner-verification 403 with Codex on 2026.11.2 — no new evidence in-window (no new Discourse/issue item retrieved on this).
- SQLITE fix supports state relocation via OPENCLAW_STATE_DIR — unchanged.
- Managed/hosted deployments lack host shell → `gh` CLI cannot be installed: **still an open blocker**; enterprise PR #1196 added token-safety guidance to development token pages, and #4939 shared receipt attempt-ownership checks — adjacent hardening, not a fix for the `gh` requirement.

---

## 10. Errors / limits encountered

- `https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100` — returns exactly 100 + a next cursor; total (>100) is **not enumerable**. Repo-list newest published_at = 2026-09-11, so the repo endpoint alone cannot prove "no new GHSA"; the global `?affects=openclaw` endpoint was used instead (newest 2026-10-21, no in-window advisory).
- Global advisory pagination (`/advisories?ecosystem=npm&per_page=100&page=2..4`) returned the **same page 1 content** for every page — pagination appears broken there; only page 1 is trustworthy.
- ClawHub `nextCursor` **does not advance** (same cursor on repeated calls); `sort=updatedAt` returns HTTP 400. Enumeration capped at 189 unique skills reaching back to 2026-11-08T15:00Z.
- `https://registry.npmjs.org/openclaw/2026.11.5-beta.2` → 404 (GitHub tag exists, npm artifact does not).
- npm downloads for 2026-11-09 report 0 (upstream reporting lag) — treated as lag, not a collapse.
- Budget used: 2 of 5 web_search, 1 of 2 web_fetch; all remaining retrieval via direct API calls (curl), which are not budgeted but were kept to targeted, structured endpoints.
- GitHub search API `total_count` for merged PRs (287) and closed issues (220) are repository-wide counts within the window, not necessarily equal to the count of merge-commit entries in the commit list (284 commits includes non-PR commits).

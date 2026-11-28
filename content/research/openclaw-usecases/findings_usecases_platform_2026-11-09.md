# Platform Findings — OpenClaw — 2026-11-09

**Research window:** 2026-11-08T09:28:00Z → 2026-11-09T09:28:00Z (24h)
**Track:** PLATFORM (npm / GitHub core / GitHub Enterprise / ClawStat / ClawHub / blog / showcase)
**Collector:** subagent `diac-platform-2026-11-09`
**Tool budget used:** 3 `web_search` (cap 4), 0 `web_fetch` (cap 1), all JSON via `curl`+`jq`

---

## 0. Executive summary — what CHANGED vs baseline

| # | Signal | Baseline (11-08) | Now (11-09) | Verdict |
|---|---|---|---|---|
| 1 | npm `latest` | 2026.11.1 | **2026.11.2** | **CHANGED** |
| 2 | GitHub latest release | v2026.11.1 | **v2026.11.2** | **CHANGED** |
| 3 | npm downloads 11-08 | 0 (lag) | **403,698** | **CHANGED (lag resolved)** |
| 4 | rolling 7d downloads | 2,800,195 (−4.4% w/w) | **2,885,425 (+11.9% w/w)** | **CHANGED — trend reversed to positive** |
| 5 | ClawStat `status.key` | `care` ("Update with care") | **`wait`** ("Too new to call") | **CHANGED — flipped again** |
| 6 | ClawStat evidence gate | 2 blockers (#193962, #194662) | **0 blockers, verdict ✅** | **CHANGED — gate cleared** |
| 7 | ClawStat freshness | `fresh: false` | **`fresh: true`** (1 day since release) | **CHANGED** |
| 8 | ClawHub new skills / publishers | 93 / 46 | **115 / 53** | CHANGED (up) |
| 9 | Core repo open issues | 7,809 | **8,024** (+215) | CHANGED |
| 10 | Enterprise repo stars | 454 (flat 4 windows) | **455** (+1) | CHANGED (flat streak broken) |
| 11 | Enterprise open issues | 314 | **306** (−8) | CHANGED |
| 12 | Core new issues / PRs / merged | 122 / 461 / 298 | **221 / 493 / 293** | CHANGED |
| 13 | npm `extended-stable` | 2026.9.36 | 2026.9.36 | CONFIRMED (unchanged) |
| 14 | GitHub advisory GHSA-hggm-x7r9-mm7v | updated 2026-11-05T20:48Z | updated 2026-11-05T20:48Z | CONFIRMED (no new advisory) |
| 15 | Showcase byte size | 150,922 | 150,922 (+0) | CONFIRMED |
| 16 | Official blog RSS latest | 2026-11-06 "Use new models…" | 2026-11-06 "Use new models…" | CONFIRMED (no post) |
| 17 | npm 2026.9.37 | not published | not published | CONFIRMED (still absent) |

**Headline:** OpenClaw shipped **v2026.11.2** on 2026-11-08 — a patch release (no new features) that landed *20 minutes after* the previous window closed (npm 09:48:24Z), which is why the baseline reported "no new publish". Download momentum flipped from −4.4% w/w to **+11.9% w/w**. ClawStat flipped a second time, from `care` to `wait` ("Too new to call"), because the release is only 1 day old — its evidence gate is now clean (0 blockers) but it deliberately refuses to issue a green update call.

---

## 1. npm registry + downloads

**Source:** `https://registry.npmjs.org/openclaw`, `https://api.npmjs.org/downloads/point/...`, `https://api.npmjs.org/downloads/range/...`

### 1.1 Versions published in-window — CHANGED

Registry `.time` map, entries after 2026-11-05:

```
2026.11.1   2026-11-05T09:41:26.297Z   (baseline latest)
2026.11.2   2026-11-08T09:48:24.847Z   <-- NEW, in-window
```

`dist-tags` now:

```json
{ "latest": "2026.11.2", "beta": "2026.11.5-beta.1", "extended-stable": "2026.9.36" }
```

Registry `time.modified` = `2026-11-08T09:48:25.144Z`.

- **CHANGED vs baseline:** the baseline's "No new publish on 11-08" was a boundary artifact. The 2026.11.2 publish timestamp (09:48:24Z) falls **20m24s after** the previous window's close (11-08T09:28Z) and therefore inside this window. `latest` has moved from 2026.11.1 → **2026.11.2**.
- `beta` unchanged at 2026.11.5-beta.1 (published 2026-11-04) — CONFIRMED.
- `extended-stable` unchanged at 2026.9.36 — CONFIRMED.
- No `2026.9.37` on npm: the 2026.9.x line ends at 2026.9.36 (2026-10-29T19:40:15Z). **CONFIRMED absent** (see §8.1 for PR #195135).
- Total versions published on npm: 294.

### 1.2 Downloads — the lag resolved, and the trend reversed

Point queries:

| Date | Downloads | Note |
|---|---|---|
| 2026-11-06 | 504,091 | peak of the week |
| 2026-11-07 | 493,523 | CONFIRMED vs baseline |
| **2026-11-08** | **403,698** | baseline reported `0` — **that was pure publication lag, now resolved** |
| 2026-11-09 | 0 | in-progress day, npm has not published it yet (same lag trap as yesterday) |

Rolling 7-day windows (npm range endpoint is *end-exclusive*):

| Window | Downloads |
|---|---|
| 2026-11-02 → 2026-11-08 | **2,885,425** |
| 2026-10-26 → 2026-11-01 | 2,578,610 |
| 2026-11-01 → 2026-11-07 (baseline) | 2,800,195 |
| 2026-10-25 → 2026-10-31 | 2,927,964 |

**w/w = +11.9%** (2,885,425 / 2,578,610 − 1). Baseline reported **−4.4%** for the equivalent shifted pair (11-01→11-07 vs 10-25→10-31). **CHANGED — the decline reversed into growth**, and the 11-08 figure alone (403,698, −18.2% vs 11-07) is misleading on its own: 11-08 is the release day, and 11-07 was an anomalously high pre-release day (493,523).

Daily series for context: 11-01 318,468 / 11-02 321,275 / 11-03 393,121 / 11-04 400,586 / 11-05 369,131 / 11-06 504,091 / 11-07 493,523 / 11-08 403,698.

**Methodology caveat (recorded for the correction log):** the npm range endpoint excludes the end date. A "7-day range" must therefore be written `D-7:D` (end-exclusive), not `D-6:D`. The baseline's 2,800,195 for "11-01..11-07" is exactly the sum of 11-01…11-07, i.e. the endpoint range `2026-11-01:2026-11-08`. Comparisons are only valid if both sides use the same end-exclusive convention. Today's pair (11-02..11-08 vs 10-26..11-01) is internally consistent.

### 1.3 Per-version download split — SOURCE FAILED

`https://api.npmjs.org/downloads/point/2026-11-08:2026-11-09/openclaw@2026.11.2` → `{"error":"package openclaw@2026.11.2 not found"}`; same for `openclaw@2026.11.1` and `openclaw@2026.10.10`; the `range` variant returns `null` for `.downloads`. npm's download API does not resolve scoped-version specifiers for this package (likely because the package name needs URL-encoding to `openclaw%402026.11.2`, or version-scoped download stats are not exposed for it). **Not available; no per-version adoption split reported.** This also means I cannot state what share of the 11-08 downloads came from the fresh 2026.11.2 release.

---

## 2. GitHub core repo — `openclaw/openclaw`

**Source:** `https://api.github.com/repos/openclaw/openclaw`, `/releases?per_page=5`, `/search/issues?...`

### 2.1 Repo stats — CHANGED

| Metric | Baseline | Now | Δ |
|---|---|---|---|
| stars | 394,169 | **394,229** | **+60** |
| forks | 82,829 | **82,847** | **+18** |
| open_issues_count | 7,809 | **8,024** | **+215** |
| pushed_at | — | 2026-11-09T09:27:02Z | active |
| updated_at | — | 2026-11-09T09:29:04Z | active |

+60 stars / +18 forks in 24h is a modest but steady accrual (baseline window rate was similar). The **open-issue backlog grew by +215 in one day**, which is the sharpest movement on this track.

### 2.2 Releases — CHANGED

```
v2026.11.2      2026-11-08T19:31:04Z   draft=false pre=false   <-- NEW, in-window
v2026.11.1      2026-11-05T09:48:37Z   draft=false pre=false
v2026.11.5-beta.1 2026-11-04T04:51:56Z draft=false pre=true
v2026.10.10     2026-11-03T03:22:35Z   draft=false pre=false
v2026.10.10-beta.5 2026-10-30T03:57:14Z draft=false pre=true
```

Release body (v2026.11.2): **166 commits · 113 pull requests · 64 contributors**.

Changelog source (fetched via `curl`, 39,890 bytes):
`https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.11.2.md`
Docs mirror: `https://docs.openclaw.ai/releases/2026.11.2`

Self-description: *"This is a patch release with no new features. It fixes problems that could stop updates, leave scheduled reminders missing, or cause chat widgets to appear twice, alongside smaller reliability fixes. This release draws on 113 pull requests and 53 direct commits, with contributions from 64 GitHub accounts."*

Sections in the changelog: Installation and Onboarding, Web UI, Updates and Maintenance, Messaging, Memory, Skills, Native Apps, Models and Providers, Automations and Scheduling, Browser and Computer Use, Plugins and Integrations, **Security and Privacy**, Quality-of-Life Improvements, Other Bug Fixes.

### 2.3 Throughput in-window — CHANGED

| Metric (created/merged 11-08T09:28Z → 11-11T09:28Z) | Baseline (11-08 window) | Now |
|---|---|---|
| new issues | 122 | **221** |
| new PRs | 461 | **493** |
| merged PRs | 298 | **293** |

Merge rate is essentially flat (293 vs 298) while intake rose (493 vs 461, +7%). Combined with open_issues +215, the queue is absorbing work faster than it closes it.

Sample of merged PRs (most recent first):

```
#191517 2026-11-09T09:21:30Z fix(chat): recover native playback when metadata is unavailable
#191521 2026-11-09T09:12:04Z fix(ios): discard stale wake commands after chat or Gateway changes
#195764 2026-11-09T09:20:04Z fix(perf): preserve existing sessions during history seeding
#195820 2026-11-09T09:14:48Z fix(cron): keep parent-pause notice names surrogate-safe
#195767 2026-11-09T07:08:56Z improve(ci): restore only the selected worker archive
#195852 2026-11-09T09:10:49Z fix(ci): prevent Bun downloads in shutdown fixtures
#193741 2026-11-09T09:02:50Z improve(chat): stop re-parsing split transcript rows for citations on every rend
#195810 2026-11-09T08:45:20Z fix(ci): keep module-local helpers private
#193738 2026-11-09T08:56:29Z improve(chat): stop recompiling preview regexes while rendering native chat
#195829 2026-11-09T08:47:26Z fix(android): preserve final push-to-talk words when muting
```

### 2.4 Security-labelled items — NONE new

- `label:security` + `created:2026-11-08T09:28:00Z..2026-11-09T09:28:00Z` → **total_count 0** (issues and PRs both zero).
- Sanity check: `label:security` alone → 1,077 total items exist; most recent are #194566 (2026-11-07), #194472 (2026-11-07), #194376 (2026-11-07) — i.e. none land in this window.
- The label exists and the query works; zero in-window is a real null, not a query artifact.

### 2.5 Security content inside the v2026.11.2 release (11 items, "Security and Privacy" section)

This is the substantive security-relevant delta of the window. Notable items (PR numbers):

- **#191102** — *"Prevents CLI startup from adding workspace-controlled mise and XDG executable paths to child-process PATH. Automatic discovery now requires those tool roots outside the workspace."* → a **PATH-injection hardening** fix, i.e. a workspace-controlled code-execution vector. Credited to @pgondhi987, linked to the security guide.
- **#191318** (issue #190075) — *"Fixes conditional config changes recording new secrets in local audit history when the conditional option appears before the setting or between the setting and value."* → **secret leakage into audit history**.
- **#176201** — *"Prevents approvals commands from reading or changing the wrong policy when both `--gateway` and a node target are supplied."* → **policy confusion in approvals**.
- **#191748** (issue #144164) — *"Enforces the existing provider trust policy for sandboxed web search. If an excluded third-party provider was selected, enable or select a bundled or verified official provider to restore search."* → **provider trust-policy enforcement**.
- **#191980** — *"Fixes completed warm CLI turns retaining their MCP tool grants after the process is reused."* → **stale MCP tool grants surviving process reuse**.
- Log-hygiene fixes that stop sensitive payloads reaching verbose logs: **#172963** (assistant replies in Gateway delivery/stalled-session logs, message previews in iMessage logs), **#173422** (raw LINE postback data, rejected batch/Flex bodies), **#174526** (Matrix verification/profile/membership content), **#174544** (detailed Codex tool errors), **#174998** (bundled language-server stderr exposing source/tool content).
- **Released-change** commits: Feishu card refusal message no longer includes provider error details (#193438); **local Gateway password SecretRefs ignored when only a remote-client token is configured** → fixed.

No CVE/GHSA was published for these; they are shipped as a patch release.

### 2.6 GitHub advisories — CONFIRMED unchanged

- `https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100` → 100 returned, with a `next` Link cursor (`after=Y3Vyc29yOnYyOpHOAAdNZQ%3D%3D`), i.e. the repo has **more than 100** advisories.
- Most recent *published* repo advisories are from **2026-09-11** (a bulk disclosure batch, e.g. GHSA-wwcw-jfpp-gpxw "high — Codex native tools could ignore per-chat policy", GHSA-xvwp-wmh2-fq48, GHSA-w5x7-c87m-3jpc, GHSA-vhpg-cq3w-v8p9, GHSA-v7hh-7676-rg67, GHSA-wjfv-5qch-m5vj).
- Global npm advisory feed for `affects=openclaw`, sorted by `updated` desc: top entry is still **GHSA-hggm-x7r9-mm7v** (high, published 2026-03-26, **updated 2026-11-05T20:48:29Z**) — identical timestamp to the baseline, so **CONFIRMED: no new advisory in this window**. Next: GHSA-3x84-qq85-fj65 (pub 2026-10-21), GHSA-jw7v-5mp7-ghgm, GHSA-rggc-m335-3wvj (2026-08-28).

---

## 3. GitHub Enterprise repo — `openclaw/openclaw-enterprise`

**Source:** `https://api.github.com/repos/openclaw/openclaw-enterprise`, `/search/issues?...`

| Metric | Baseline | Now | Δ | Verdict |
|---|---|---|---|---|
| stars | 454 | **455** | +1 | CHANGED — flat streak (4 windows) broken |
| forks | — | 109 | — | — |
| open_issues_count | 314 | **306** | −8 | CHANGED — backlog now shrinking |
| pushed_at | — | 2026-11-09T09:25:58Z | active | — |

In-window activity:

- new PRs created: **40** (baseline 56, −29%)
- PRs merged: **46** (baseline 43, +7%)
- new issues created: **0** (baseline 4)
- issues closed in-window: **0**

**Zero new issues is a genuine window-boundary effect, not an absence of enterprise work.** Widening to 11-06 → 11-09 returns 7 issues, of which two were created just *before* the window opened and are therefore excluded here:

```
#5050 2026-11-08T05:46:18Z  Native admin accepts domain suffixes that produce unusable A...
#5048 2026-11-08T05:18:00Z  CLI empty Harness override flags silently request default-se...
#5021 2026-11-07T13:59:48Z  Kubernetes Compute admits fractional object-count quotas tha...
#5018 2026-11-07T13:09:33Z  installation install dispatches Helm after stdout delivery f...
#4930 2026-11-06T18:14:23Z  Console accepts Namespace creation the deployment cannot ful...
#4929 2026-11-06T17:49:03Z  Namespaces without tenant RoleBindings can never be deleted,...
#4880 2026-11-06T03:05:35Z  [M9.18] Evaluate enterprise plugins for the OpenClaw Harness
```

Note #5048 and #5050 are both **policy/validation-bypass** shaped ("empty Harness override flags silently request default…", "Native admin accepts domain suffixes that produce unusable A…"). #4930/#4929 are Kubernetes multi-tenancy lifecycle bugs (Namespaces without tenant RoleBindings can never be deleted). **Zero issues closed in 24h against 46 merges** is an asymmetry worth flagging: the enterprise repo is merging code without retiring issue backlog, and the backlog nonetheless fell by 8 — meaning issues were closed outside the window or via automated means.

Recent merged enterprise PRs:

```
#5103 2026-11-09T09:25:56Z  Record controller request IDs in forward upgrade availability samples
#5102 2026-11-09T08:50:38Z  test(occdev): verify why startup rejects invalid sandbox network polic
#5101 2026-11-09T08:40:59Z  Report the failed routing operation during Kubernetes Local Setup
#5100 2026-11-09T08:08:09Z  Verify retained native container exports offline
#5099 2026-11-09T07:27:25Z  fix(ci): attribute memory samples to test processes
```

Enterprise activity is dominated by **sandbox/network policy, Kubernetes deployment routing, and upgrade-sampling instrumentation** — i.e. hardening and operability of the enterprise control plane, not feature work.

---

## 4. ClawStat — `https://clawstat.us/latest.json`

**Source:** `https://clawstat.us/latest.json` (note: the task brief cited `clawstat.dev` — **`clawstat.dev` does not resolve / returns HTTP 000 (DNS failure)**; the correct host is `clawstat.us`. Recorded as a source correction.)

`assessed_at`: `2026-11-09T08:26:08.740389+00:00` — i.e. the assessment is ~1h before window close, fresh.

### 4.1 Verdict / status — CHANGED (second flip)

```json
"status": { "key": "wait", "label": "Too new to call", "recommendation": "✅", "early_read": "Safe to update" }
```

- Baseline: `status.key = "care"` ("Update with care").
- **Now: `status.key = "wait"` ("Too new to call") with recommendation ✅ and early_read "Safe to update".**
- This is the **second status flip in two windows** (11-08 was `care`, 11-09 is `wait`). The mechanism is explicit in the payload: `freshness.days_since_release = 1`. With v2026.11.2 published 2026-11-08T19:31Z, the release is 1 day old, so ClawStat refuses to issue a durable update call while flagging the early read as safe.

### 4.2 recommended_version — CONFIRMED unchanged

```json
"recommended_version": { "version": "2026.10.9", "kind": "settled", "published_at": "2026-10-29", "age_days": 11,
                         "recommendation": "⚠️", "gate": "⚠️", "blockers": [5 items] }
```

Five blockers, identical to the baseline's five:

| # | Severity | Title |
|---|---|---|
| 187911 | critical | fix: recover guest tasks after concurrent managed-workspace edits |
| 190563 | critical | [Bug]: Cannot resume paused Codex chat: provider review/native thread mismatch |
| 187309 | critical | Recurring per-agent SQLite WAL/SHM identity mismatch after active-leases close receipts on 2026.10.8 |
| 188165 | high | [Bug]: Explicit global cron target creates a second conversation and fails settlement |
| 187900 | high | doctor: hangs indefinitely at startup (all modes incl. --lint, PTY and non-interactive) on Linux host |

Note the **recommended version is still 2026.10.9, not the newly released 2026.11.2** — ClawStat has not yet promoted the new release into its recommendation set (consistent with `days_since_release: 1`). Anyone following ClawStat's recommendation today stays on 2026.10.9.

### 4.3 Evidence gate — CHANGED (blockers cleared)

```json
"evidence_gate": { "verdict": "✅", "blockers": [], "widespread": [], "serious": [],
                    "blocker_count": 0,
                    "reason": "No credible blocking issue is confirmed for this version.",
                    "floor_applied": false,
                    "departure": { "departed": false, "reason": "" } }
```

- Baseline: gate had **2 blockers (#193962, #194662)**.
- **Now: 0 blockers, verdict ✅.** Those two blockers are gone from the gate.

### 4.4 Freshness — CHANGED

```json
"freshness": { "fresh": true, "days_since_release": 1, "runs_assessed": 2,
               "version_specific_issues": 37, "carried_over_issues": 2 }
```

- Baseline: `fresh: false`, 8 runs.
- **Now: `fresh: true`**, `runs_assessed: 2` (run count reset — consistent with a fresh re-assessment against the new release), 37 version-specific issues, 2 carried over.

### 4.5 Other ClawStat fields

- `latest_release`: tag `v2026.11.2`, published 2026-11-08 — **CHANGED** (was v2026.11.1).
- `latest_prerelease`: `v2026.11.5-beta.1`, 2026-11-04 — unchanged.
- `npm.version`: 2026.11.2; `version`: 2026.11.2 — CONFIRMED npm.
- `app_version`: 1.3.9 (ClawStat agent version).
- `confidence`: medium.
- `headline`: *"Fine for most setups; the sharpest new bugs mainly hit large Linux gateway fleets and niche configs like Codex sub-agents and Signal UUID approvers"*.
- `track_record` length 2; `timeline` length 195.
- `changes`: `{"breaking":[],"fixes":[],"features":[]}` — ClawStat's own structured change extractor found nothing to record for the new release yet (it has not parsed v2026.11.2's changelog into structured deltas).
- `recommended_version.blockers` are the same 5 as the baseline, while `evidence_gate.blockers` is now empty. The two structures are not in conflict: the gate evaluates the *candidate* release, the blockers list hangs off the *settled recommendation*.

---

## 5. ClawHub — `https://clawhub.ai/api/v1/skills`

**Source:** `https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc` with `nextCursor` pagination.

### 5.1 New skills in-window — CHANGED (up)

- **115 new skills** created in 2026-11-08T09:28Z → 2026-11-09T09:28Z (baseline: 93).
- **53 distinct publishers** (baseline: 46).

**Publisher concentration — the previous day's outlier is gone.** Baseline top publisher was `walidboulanouar` with **21** skills in one window (a clear single-publisher dump). In this window:

```
yanghhu 9 | ee324 9 | orensegal 8 | montassirbbk-dot 6 | huhoo 5 |
agenticweb4 5 | omnivideo 5 | voronindenis5 5 | agentsgot-stack 4 | shikshannivesh 4
```

Max = 9, i.e. **8.5% of the window's output from one publisher** vs baseline's 22.6%. Distribution is materially flatter. `walidboulanouar`'s 21 skills still exist on the platform (verified present in the newest-skills listing) but all of them predate this window — the dump was a 11-08 event, and the baseline is confirmed on that point.

### 5.2 Notable new skills (top by downloads within the window)

| Downloads | Skill | Name |
|---|---|---|
| 109 | `peakflo/peakflo-spaces` | Spaces by Peakflo |
| 103 | `dankezo/anti-rea` | anti-rea |
| 80 | `orensegal/litmus-evals` | Litmus: mutation testing for evals |
| 79 | `hornlib/hornlib` | HornLib — French Horn Fingering & Transposition |
| 79 | `orensegal/sous-test-audit` | Sous: test-audit |
| 78 | `hornlib/french-horn-fingering-chart` | French Horn Fingering Chart (F/Bb Double) |
| 77 | `zhaoxinghua09-cell/lgd-evo` | lgd-evo |
| 76 | `rommm13/pocketbook-cloud` | PocketBook Cloud |
| 76 | `orensegal/signal-scout` | signal-scout |
| 75 | `skryvo/skryvo` | skryvo-api |

Two clusters stand out: **eval/QA tooling** (`litmus-evals`, `sous-test-audit` — both by `orensegal`, who also shipped `signal-scout`), and **music-practice utilities** (`hornlib` × 2). Also of note: `anti-rea` — a name suggesting a "real-time/anti-realtime" defensive skill.

Absolute in-window download counts are low (max 109) — typical of brand-new ClawHub listings; installs are 0–1 across the top of the window.

### 5.3 Platform-wide top downloads (context, not in-window)

| Downloads | Installs | Stars | Skill |
|---|---|---|---|
| 88,323 | 2,506 | 395 | `byungkyu/api-gateway` |
| 31,896 | 768 | 66 | `iswalle/getnote` |
| 15,547 | 413 | 28 | `d4vinci/scrapling-official` |
| 14,600 | 2 | 1 | `cournot-ai/cournot` |
| 11,241 | 73 | 1 | `gongyu0918-debug/chinese-official-writing` |
| 10,472 | 325 | 161 | `fly0pants/ecomseer` |

`byungkyu/api-gateway` continues to dominate ClawHub by an order of magnitude and is the only skill above 30k downloads. Note the installs:downloads ratio is low everywhere (~1:35 for the leader, ~1:5 for `cournot-ai/cournot` which has 14.6k downloads but only 2 installs — download count is a weak popularity proxy and should not be read as adoption.

### 5.4 ClawHub API quirks observed

- `?sort=createdAt&order=desc` and `?sort=newest` both work and produce a proper descending-by-createdAt list; the **default ordering is not by createdAt** (it returned a non-monotonic mix — oldest 2026-09-09, newest 2026-11-09). Any in-window count computed from the default order alone is unreliable; the window count must be taken from a createdAt-sorted sweep. Baseline's 93 was presumably obtained correctly.
- `?sort=recent` returns a non-JSON body (parse error).
- The response exposes only `items` + `nextCursor` — **no total count field**, so platform-wide skill totals are not obtainable from the API.
- Pagination depth needed for a 24h window: 2 pages of 100.

---

## 6. Official blog / RSS + showcase

### 6.1 Blog RSS — CONFIRMED (no new post)

`https://openclaw.ai/rss.xml` → HTTP 200, 25 items. Latest items:

```
Fri, 06 Nov 2026 00:00:00 GMT  Use new models in OpenClaw without an update
Thu, 05 Nov 2026 17:00:00 GMT  Shattering Silos with OpenClaw Multiplayer
Wed, 21 Oct 2026 00:00:00 GMT  Come Build With Us: OpenClaw Focus Weeks
Fri, 16 Oct 2026 00:00:00 GMT  How PJ helps small businesses use OpenClaw
Fri, 02 Oct 2026 00:00:00 GMT  Tencent AIG joins ClawScan
Tue, 29 Sep 2026 00:00:00 GMT  OpenClaw Enterprise - The Open Agent Platform
```

**No blog post for v2026.11.2 yet** — the release shipped ~14h before window close with no accompanying announcement. Latest entry remains 2026-11-06, exactly as in the baseline. CONFIRMED.

(Endpoint note: `https://openclaw.ai/blog/rss.xml` → 404, `https://openclaw.ai/feed.xml` → 404, `https://blog.openclaw.ai/rss.xml` → 308 redirect. The working feed is `https://openclaw.ai/rss.xml`.)

### 6.2 Showcase — CONFIRMED (unchanged)

`https://openclaw.ai/showcase` → HTTP 200, **150,922 bytes**. Baseline: 150,922 bytes (+54 B vs 150,868). **Δ = 0 bytes.** Fully CONFIRMED — the showcase has not changed at all this window.

---

## 7. Web/news sweep

3 `web_search` calls used (cap 4). Queries: `OpenClaw release 2026.11.2 changelog November 2026`; `OpenClaw security vulnerability advisory CVE November 2026` (freshness=week); `OpenClaw Enterprise adoption customers announcement November 8 2026` (freshness=week).

**Result: no new dated, first-party, or credible secondary reporting in the 24–48h window.**

- The only genuinely new item is the release itself, corroborated by `https://freedom.tech/posts/2026-11-08-openclaw-2026-11-2/` (dated 2026-11-08, mirrors the official release notes/changelog) and `https://newreleases.io/project/github/openclaw/openclaw/release/v2026.11.2`.
- `docs.openclaw.ai/releases` and the GitHub `docs/releases/index.md` confirm the release-notes/changelog dual format.
- The security-query results are **undated SEO content farms and recycled listicles**, explicitly excluded per instructions: `openclawpulse.com` ("OpenClaw Security Guide 2026: Every CVE, Exploit and Fix"), `cvefind.com` ("138 CVEs, 135,000+ exposed instances"), `bitdoze.com`, `vibecoding.app`, `proarch.com`, `openclawlaunch.com` — all recycling CVE-2026-25253 (a 2026-02 disclosure) with no new event in the window. `app.opencve.io` is a live DB view (undated). `github.com/jgamblin/OpenClawCVEs` is a live tracker, undated.
- The enterprise query surfaced only **historical** material: the Red Hat foundation blog post ("Why Red Hat is building an open foundation for enterprise agents with OpenClaw Enterprise") and the February 2026 OpenAI/Steinberger acquisition coverage (`insights.reinventing.ai`, `dplooy.com`), plus a June 2026 state-of-OpenClaw piece at 368K stars (`clawspiral.com`). **No new enterprise customer/adoption announcement dated 2026-11-08/09.**
- Note the "OpenAI acquires OpenClaw creator" story circulating in search results is from **2026-02-17**, not new.

**No security incident, no outage, no supply-chain event, and no enterprise deal announced in this window.**

---

## 8. Carry-over items from the baseline

### 8.1 PR #195135 and the missing 2026.9.37 — CONFIRMED still open

`https://api.github.com/repos/openclaw/openclaw/pulls/195135`
→ `fix(gateway): repair 2026.9.37 node reapproval qualification state`, **state=open, merged=false**, created 2026-11-08T08:42:43Z.

The referenced **2026.9.37 build still does not exist on npm** (the 2026.9.x line stops at 2026.9.36). The PR's body carries a "Current correction — November 8, 2026" section superseding preserved history, with head `abfb771be502575f6ae6744b77425c1eae4beca7`. **CONFIRMED unresolved** — a patch release is being prepared against a version that has never shipped. Worth watching: if 2026.9.37 lands as an extended-stable, `dist-tags["extended-stable"]` will move off 2026.9.36 (last moved 2026-10-29).

### 8.2 npm publication-lag trap — resolved and re-armed

- Yesterday's `0` for 11-08 was lag; the true figure is **403,698**.
- Today's `0` for 11-09 is the same lag and will resolve in tomorrow's window. Do not report it as a collapse.
- Separately, the *publish* timestamp trap bit in the opposite direction: v2026.11.2 (npm 09:48:24Z / GitHub release 19:31:04Z on 11-08) missed the 11-08 window by 20 minutes and would have been missed again by anyone using date-only bucketing on the 11-08 date.

---

## 9. Source status / failures

| Source | Status |
|---|---|
| `registry.npmjs.org/openclaw` | OK |
| `api.npmjs.org/downloads/point|range` (aggregate) | OK |
| `api.npmjs.org/downloads` **per-version** (`openclaw@2026.11.2`) | **FAILED** — `{"error":"package openclaw@2026.11.2 not found"}`; range variant returns `null`. Version-scoped download stats unavailable for this package. |
| `api.github.com/repos/openclaw/openclaw` | OK (rate limit remaining 39 at end of run) |
| `api.github.com/repos/openclaw/openclaw/releases` | OK |
| `api.github.com/search/issues` (4 queries) | OK |
| `api.github.com/repos/openclaw/openclaw/security-advisories` | OK (100 + `next` cursor ⇒ >100 advisories) |
| `api.github.com/advisories?affects=openclaw` | OK |
| `api.github.com/repos/openclaw/openclaw-enterprise` | OK |
| `clawstat.dev/latest.json` | **FAILED — host does not resolve (curl exit 6, HTTP 000)** |
| `clawstat.us/latest.json` | OK (correct host — task brief had the wrong domain) |
| `clawhub.ai/api/v1/skills` | OK (pagination via `nextCursor`; default ordering NOT by createdAt) |
| `openclaw.ai/showcase` | OK (150,922 bytes) |
| `openclaw.ai/rss.xml` | OK (`/blog/rss.xml` 404, `/feed.xml` 404, `blog.openclaw.ai/rss.xml` 308) |
| `raw.githubusercontent.com/.../CHANGELOG/2026.11.2.md` | OK (39,890 bytes) |
| web_search ×3 | OK, all dated; no in-window news |

---

## 10. Recommended corrections to the cumulative record

1. **v2026.11.2 shipped on 2026-11-08** (npm 09:48:24Z, GitHub release 19:31:04Z). Baseline "no new publish on 11-08" is superseded. It is a **patch release**: no new features, 166 commits / 113 PRs / 64 contributors. Notable security-hardening PRs: #191102 (PATH injection via workspace-controlled mise/XDG paths), #191318 (secrets written to audit history), #176201 (approval policy confusion), #191748 (sandboxed web-search provider trust policy), #191980 (MCP grants retained after process reuse), plus five log-hygiene fixes.
2. **Downloads trend reversed**: rolling 7d 2,885,425 (**+11.9% w/w**), not −4.4%. 11-08 = 403,698 (the baseline's `0` was npm lag).
3. **ClawStat flipped `care` → `wait`** ("Too new to call", recommendation ✅ "Safe to update"); evidence gate **cleared to 0 blockers** (was #193962, #194662); freshness now `fresh: true`, `days_since_release: 1`, runs reset to 2. `recommended_version` still **2026.10.9** with the same 5 blockers. Host is **clawstat.us**, not clawstat.dev.
4. **ClawHub publisher concentration dropped sharply**: 115 skills / 53 publishers, max publisher 9 (was 93 / 46, max 21). The `walidboulanouar` 21-skill dump is a 11-08 event and is now fully in the past.
5. **Core backlog grew +215** to 8,024 open issues while merges stayed flat at 293 vs 461→493 PR intake.
6. **Enterprise**: stars 455 (flat streak broken), open issues 306 (−8), 40 PRs created / 46 merged / 0 new issues / 0 issues closed. Two "policy validation" issues (#5050, #5048) were created 2026-11-08 05:18–05:46Z, just outside the window.
7. **No new advisory, no security-labelled issue/PR, no blog post, no showcase change (150,922 B), no dated news** — all confirmed nulls.

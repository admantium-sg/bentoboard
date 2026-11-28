# OpenClaw — Platform / Releases / Security / Enterprise findings
**Date:** 2026-11-08 · **Research window:** 2026-11-07T09:28:00Z → 2026-11-08T09:28:00Z
**Subagent:** PLATFORM track · **Collected:** 2026-11-08 ~10:30–11:00Z (Europe/Berlin)

> Only NEW information relative to the already-known baseline (2026-11-05 npm latest 2026.11.1,
> beta 2026.11.5-beta.1, 11-06 downloads 504,091, rolling 7d 2,599,200 vs 3,208,028, stars 394,097,
> open issues 7,649, 116 new issues / 391 new PRs, enterprise stars 454 / open issues 302 / ≥81 PRs
> merged, no new advisory since GHSA-hggm-x7r9-mm7v, ClawStat "Safe to update" with recommended
> 2026.10.9 + 5 blockers, ≥190 new ClawHub skills (150 from one publisher), 46 new repos).

---

## F-1 — npm download trend: the −19% w/w slide has largely stopped (rebound)

- **Source:** https://api.npmjs.org/downloads/point/2026-11-07:2026-11-08/openclaw
- 11-07 daily downloads: **493,523** (11-06 was 504,091 → **−2.1% d/d**).
- **Source:** https://api.npmjs.org/downloads/point/2026-11-01:2026-11-07/openclaw
  Rolling 7d (11-01→11-07) = **2,800,195**.
- **Source:** https://api.npmjs.org/downloads/range/2026-10-25:2026-11-08/openclaw
  Prior comparable week (10-25→10-31) = 2,927,964; the week before that (10-24→10-30) = 3,208,028.
- **New insight:** the w/w change collapses from **−19%** (last window) to **−4.4%**
  (2,800,195 vs 2,927,964). Daily volume has held in a **≈370k–505k band for 15 straight days**
  (10-25 → 11-07, min 292,528 on 10-31, max 667,822 on 10-25). The post-2026.11.1 install surge
  has decayed, but the base is now flat rather than still bleeding.
- **Source:** https://registry.npmjs.org/openclaw — **no new publish in window.**
  `dist-tags` unchanged: `latest 2026.11.1`, `beta 2026.11.5-beta.1`, `extended-stable 2026.9.36`.
  No `2026.11.x` version has a publish timestamp inside the window.

## F-2 — ClawStat verdict **flipped back** from ✅ "Safe to update" to ⚠️ "Update with care"

- **Source:** https://clawstat.us/latest.json — `assessed_at 2026-11-08T06:21:19Z`, `version 2026.11.1`.
- **New:** `status.key = care`, label **"Update with care"**, `recommendation ⚠️`, `confidence medium`.
  Yesterday's payload was `status.key = update`, "Safe to update", ✅. **This is a reversal of
  yesterday's headline status.**
- **New:** `evidence_gate` now resolves to ⚠️ with **2 credible blockers** (yesterday: 0):
  **#193962** and **#194662**.
  - **#194662 is new in this window** (created 2026-11-07T15:21:49Z, P2, labels
    `impact:session-state`, `impact:data-loss`, `clawsweeper:no-new-fix-pr`):
    *"Notification-driven wake invents a sender, and the main session keeps the invented thread alive."*
    ClawStat classes this as session-state/data-loss with **no fix PR yet**.
  - **#193962** (P0, `impact:ux-release-blocker`, updated 2026-11-07T21:00:11Z, 10 comments): the
    SQLite header-probe timeout fix (#187197, staged in v2026.11.5-beta.1) is unreachable from
    2026.10.10 installs — the updater's 10 s probe times out (`spawnSync ETIMEDOUT`) on Linux with
    large state, so affected installs fail updating to 2026.11.1 **and to the beta**.
- **Unchanged (confirmation, not new):** `recommended_version` is still **2026.10.9** (kind `settled`,
  published 2026-10-29, age now 10 days) with the same **5 blockers** (#187911, #190563, #187309,
  #188165, #187900). ClawStat still recommends an *older* build than `latest`.
- **Unchanged:** `freshness`: `fresh: false`, `days_since_release: 3`, `runs_assessed: 8`
  (was 6), `version_specific_issues: 55` (was 56), `carried_over_issues: 5`.
- **New:** `changes.fixes` = **35** verified fix areas, `changes.features` = 7, `changes.breaking` = 0.
- **Flip conditions (new wording):** ⚠️ eases to ✅ once a stable ships fixes for the session-state
  cluster (#194403, #194451, #194662) and a reachable update path for #193962; hardens to ⏸️ if
  #194296 (plaintext auth key in `state/openclaw.sqlite`) or #194662 is confirmed as data loss /
  auth exposure on stable.
- **Source:** https://api.github.com/repos/openclaw/openclaw/issues/193962 ·
  https://api.github.com/repos/openclaw/openclaw/issues/194662

## F-3 — New issue in-window that matches ClawStat's #1 blocker class: update-failure reports

- **Source:** https://api.github.com/repos/openclaw/openclaw/issues/195059 (created
  2026-11-08T06:06:28Z) — *"Update failure: package-update (2026.10.10)"*, explicitly
  **reviewed and confirmed in OpenClaw**. Machine-generated report: version 2026.10.10, linux/x64,
  Node 24.22.2, target **2026.11.1**, failed phase `package-update`, reason `unexpected-error`,
  before-version 2026.10.10. This is a **third distinct confirmed update-failure report** filed in
  the last two windows alongside #194711 (`gateway-stop-unverified`, 2026.10.7) and #194569
  (`runtime-verification-failed`, 2026.9.4).
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-07T09:28:00Z..2026-11-08T09:28:00Z+label:P0
  **5 new P0 issues** in window: #195030 (claude-cli conversation wedged after in-process Gateway
  restart, `released=0`), #194842 (swabble serve overwrites an unreadable config with defaults),
  #194711 (update failure), #194664 (Codex protected continuation blocks all follow-ups on
  2026.11.1), #194569 (update failure). 4 of 5 carry `impact:ux-release-blocker`.
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-07T09:28:00Z..2026-11-08T09:28:00Z+label:P1
  **19 new P1 issues** in window, incl. #195121 (Gateway drops a queued run's lifecycle start →
  false "seq gap" / "Event stream interrupted" on **Android**), #194861 (device-folder sessions
  fail entirely on **2026.11.5-beta.1**), #194768 (Control UI session switch reverts silently on
  2026.11.1), #194689 (compaction never falls back when the compaction model's auth is gone).

## F-4 — Platform activity counters: issues/PRs up, **enterprise merge velocity halved**

- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:>2026-11-07T09:28:00Z&per_page=100
  **122 new issues** in window (baseline 116).
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:>2026-11-07T09:28:00Z&per_page=100
  **461 new PRs** in window (baseline 391) — the highest PR rate observed in this series.
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-07T09:28:00Z..2026-11-08T09:28:00Z&per_page=1
  **298 core PRs merged** in window (prior window 271) — merge throughput up.
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-07T09:28:00Z..2026-11-08T09:28:00Z&per_page=1
  **43 enterprise PRs merged** in window vs **84** in the prior window — a **~49% drop** in
  enterprise merge throughput. Merged titles are dominated by CI/release-packaging plumbing
  ("perf(ci): right-size ordinary Conformance 1 runner", "fix(ci): align full integration packaging
  capacity", "Fail image builds when APT cannot refresh Debian package indexes", "Fail the
  Kubernetes baseline capture when a required read fails") plus k3d/PVC/Helm upgrade docs.
  **Interpretation (low confidence):** this reads as CI-hardening firefighting around packaging,
  not a feature push — consistent with the release-quality theme of F-2/F-3.
- **Source:** https://api.github.com/repos/openclaw/openclaw-enterprise
  Enterprise repo: stars **454 (unchanged 3 windows running)**, forks 109, **open issues 314**
  (+12), `pushed_at 2026-11-08T09:26:27Z`.
  New enterprise issues in window: **4** (all ops/platform: #5050 domain-suffix admin hostnames,
  #5048 empty Harness override flags, #5021 fractional Kubernetes quotas, #5018 Helm dispatch
  after stdout delivery failure). New enterprise PRs created: **56**.

## F-5 — Core repo stars/forks up, open-issue count jumps +160

- **Source:** https://api.github.com/repos/openclaw/openclaw
  stars **394,169** (+72 vs 394,097), forks **82,829** (+9), `open_issues_count` **7,809**
  (**+160** vs 7,649), subscribers/watchers 1,691, `pushed_at 2026-11-08T09:27:56Z`.
  The +160 open-issue delta vs a +122 new-issue inflow implies ~282 issues closed in the window —
  heavy triage activity alongside 461 new PRs.
- **Source:** https://api.github.com/repos/openclaw/openclaw/releases?per_page=5
  **No new GitHub release in window.** Latest remains `v2026.11.1` (published 2026-11-05T09:48:37Z);
  pre-release `v2026.11.5-beta.1` (2026-11-04).
- **Source:** https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/Unreleased.md
  `Unreleased.md` contains exactly **one** entry (a Control UI automation-editor scroll fix,
  #172176) — main-branch changelog is nearly empty, i.e. no release is being staged yet.
- **New signal:** PR **#195135** *"fix(gateway): repair 2026.9.37 node reapproval qualification"*
  (https://api.github.com/repos/openclaw/openclaw/pulls/195135) references a **2026.9.37** build that
  **does not yet exist on npm** (`extended-stable` is still 2026.9.36, and `2026.9.37` is absent
  from the registry version list). Evidence that a new extended-stable line is being prepared —
  **inference, not a release.**

## F-6 — No new advisory; openclaw.ai/security counters (no prior baseline to compare)

- **Source:** https://api.github.com/advisories?affects=openclaw&per_page=100 (and pages 2–4)
  **No advisory published or updated in the window.** The most recently updated advisories in the
  whole `affects=openclaw` feed still date to **2026-10-21T19:37:44Z**.
  **Source:** https://api.github.com/advisories/GHSA-hggm-x7r9-mm7v — unchanged at
  `updated_at 2026-11-05T20:48:29Z` (CVE-2026-32846, path-traversal validation bypass, severity high).
- **Source:** https://openclaw.ai/security — program counters as read today: **1,799 reports filed**
  since January 2026, **58% closed with no advisory**, **722 fixed and published**, **39 carry a CVE**,
  **14 confirmed** (line truncated at 5,625 chars of extracted text). **No prior-window baseline
  exists for these counters, so the direction of travel is unknown** — recorded as a reference point
  only.
- **New in-window repo-level security work:** exactly **1** PR carries a `security` label
  (#194566, *"feat(ai): record bounded prompt presence checks for frozen injection expectations"*),
  but **66** new issues carry `clawsweeper:source-repro` (reproduced-bug triage labels), including
  #195121 (Android event-stream gap) and #195125 (model-only turns never streamed to subscribers).

## F-7 — ClawHub: publisher concentration collapses (150-of-189 → 21-of-93), pagination works again

- **Source:** https://clawhub.ai/api/v1/skills?limit=200&sort=newest (and two cursor pages)
  **93 new skills created strictly inside the window** (createdAt > 2026-11-07T09:28:00Z), from
  **46 distinct publishers**. Top publisher **walidboulanouar 21 (23%)**; next: huipan1973 7,
  japanverify 7, cengcengcai-creator 5, orensegal 5.
  **Direct contrast with the last window (189 skills, 150 from a single publisher `hillstreet-ph`,
  79% concentration): the single-publisher flood did not recur, and the count is roughly halved.**
- **Pagination note (changed):** the `nextCursor` chain now **advances correctly** — page 1 = 188
  items (max createdAt 2026-11-08T09:20:57Z, min 2026-11-07T01:42:54Z), page 2 = 195 items ending
  at 2026-11-07T01:42:44Z, page 3 = 196 items ending 2026-11-05T15:54:21Z. The previously reported
  "broken at 190 items" ceiling is **not** reproducing today, so 93 should be close to exact rather
  than a floor. (The `sortBy=createdAt` endpoint still returns an odd mix — 195 items with
  createdAt spanning back to 2026-02 — so `sort=newest` + cursor is the reliable read.)
- **New skills also visible outside the window:** `story-import`, `story`, `story-cover`, `story-deslop`
  (publisher `worldwonderer`, reverse-import of existing Chinese web-novels into standard project
  trees; `story-import` has 3,186 downloads, 33 versions) and `arcmira`. Top downloads overall in the
  retrieved set: `insurance-advisor-china` 9,422 (mnetfairy), `GitLab Agent Self Improvement`
  8,059 / `GitLab Hackathon` 7,452 / `GitLab Agent` 7,413 (xrowgmbh) — a visible **GitLab-by-OpenClaw
  skills cluster**.

## F-8 — New GitHub repos mentioning openclaw: 36, all zero-star (down from 46)

- **Source:** https://api.github.com/search/repositories?q=created:>2026-11-07T09:28:00Z+openclaw
  **36 new repos** in window (baseline 46; the prior-previous window was 83 — a steady decline).
  Every one of the top 20 has **0 stars**, and most have no description. Notable themes in the
  titles/descriptions: an EmDash-CMS connector, an "OpenClaw Easy" Apple-minimal local chat shell,
  a **wearable OpenClaw voice terminal for FoloToy AI Passport** (firmware + RPi),
  AgentTeams integration harness, a Zoho Mail / Zoho Inventory MCP skill pair
  (`sprintberlin/openclaw-zoho-mail-mcp-skill`, `...-inventory-mcp-skill` — "777-action catalog,
  least-privilege"), a DeepSeek-native web-search provider plugin, and `serhaticten1457/openclaw-25-days`
  ("25 günlük otomatik mini web uygulama sergisi — her gün yeni bir proje" / a daily mini-web-app
  showcase in Turkish).

## F-9 — Community signal: two new ClawHub-publication-blocked topics (marketplace friction)

- **Source:** https://community.openclaw.ai/latest.json
  Six topics active in the window. **Two brand-new one-post topics on 2026-11-08**:
  *"ClawHub publication blocked: secret scan passed, security check could not complete"* (08:34:42Z)
  and *"ClawHub publication blocked: security check could not complete"* (08:13:53Z) — a
  publisher-side friction signal against the marketplace's security-scanning step, arriving
  **simultaneously with the ClawHub publishing activity surge** (F-7). Also new:
  *"Force refreshing webchat UI every 30s after upgrade to 11.1"* (07:34:31Z, 3 posts) — a
  user-visible **regression report against the current npm latest**; and
  *"Windows: Codex owner-verification 403 persists after updating OpenClaw"* (2026-11-07T23:11:01Z).
- **Source:** https://openclaw.ai/rss.xml — **no new official blog post in the window.** Latest remains
  2026-11-06 *"Use new models in OpenClaw without an update"* (already known) and
  2026-11-05 *"Shattering Silos with OpenClaw Multiplayer"*.

## F-10 — Showcase page changed after 3 static days (+54 bytes)

- **Source:** https://openclaw.ai/showcase — **150,922 bytes** vs baseline **150,868** (+54 B).
  The previous three windows reported byte-exact stability at 150,868 B, so this is the **first
  change in four days**. Small delta; content diff not inspected (no prior-day HTML retained in
  this workspace to diff against).

## F-11 — Third-party aggregator drift + new community showcase content (external, low confidence)

- **Source:** https://www.theclawreport.com/ (92,770 bytes fetched)
  The **2026-11-08 edition's "top story" is "OpenClaw has released v2026.10.10"** — a build that
  shipped **2026-11-03**, superseded by 2026.11.1 on 11-05. The aggregator's lead is **two releases
  stale**; its 2026-11-07 entry (via SEN-X) is current (hosted model catalog + wedged-gateway
  self-recovery), so the drift is in the headline slot only.
  New 2026-11-07 community video: **"63 insane ClawdBot use cases you need to do immediately!"**
  (Duncan Rogoff, YouTube) — 63 automation patterns in one piece.
- **Source:** https://openclaw.ai/rss.xml (community link surfaced via the same aggregator)
  The community is running a **"Focus Week" Nov 2–8 focused on Mobile Apps** (pairing, session
  switching, voice chat, iOS/Android reliability) — it **ends today, 2026-11-08**.
- Enterprise-adoption web searches returned only undated SEO listicles
  (openclawconsult.com, monocubed.com, openclawpro.co, insights.reinventing.ai, getclaw.sh) —
  **no dated enterprise adoption announcement in the window**; no primary-source enterprise
  customer story found. Treated as no-signal, not as a finding.

---

## Caveats & data gaps

1. **npm 11-08 download count is 0** (publication lag) — https://api.npmjs.org/downloads/range/2026-10-25:2026-11-08/openclaw
   returns `2026-11-08: 0`. All "today" download figures are therefore **through 11-07 only**;
   the 11-07 day count may itself still be partially incomplete. Same lag affects the
   `2026-11-07:2026-11-08` point endpoint, which returns only 11-07's value.
2. **Rolling-window comparisons are offset-sensitive.** The 7d sums I quote
   (2,800,195 for 11-01→11-07 vs 2,927,964 for 10-25→10-31) use the same *start-of-week* alignment
   as the prior report's (10-31→11-06 vs 10-24→10-30). Compare against the baseline's
   2,599,200 / 3,208,028 only with that offset in mind.
3. **`https://api.github.com/advisories?affects=openclaw` returns exactly 100 items per page on
   every page tested (pages 1–4),** so the *total* advisory population is not enumerable this way;
   the per-page max `updated_at` of 2026-10-21T19:37:44Z is the best available "no new advisory"
   evidence, cross-checked with the direct GHSA-hggm-x7r9-mm7v record (unchanged 11-05).
4. **openclaw.ai/security counters have no prior-window baseline** in this workspace (1,799 filed /
   722 fixed / 39 with CVE / 14 confirmed). Direction of travel is unknown; recorded as a reference
   point, not a trend.
5. **ClawHub "93 new skills" is a near-exact count today, not a floor** — cursor pagination
   advanced normally across 3 pages with no gaps. However the `sortBy=createdAt` endpoint returns
   a different, inconsistent set (63 in-window of 195 items with back-dated createdAt), so the two
   endpoints disagree; I used `sort=newest` + cursor as authoritative.
6. **ClawStat's own caveat applies to issue counts:** tracked-issue numbers are not comparable
   across releases (the tracker hunts worst reports and saturates its cap). Only composition,
   confidence and the evidence-gate blocker set are comparable across runs. Its payload is
   assessed at 06:21Z on a 3-day-old release with 8 runs and `fresh: false`.
7. **Web search was degraded:** 2 of 4 queries failed with a DuckDuckGo bot-detection challenge
   (the release-announcement and enterprise-adoption queries). The 2 that returned did so with
   undated SEO content and no primary-source enterprise announcement; **the enterprise-adoption
   sub-focus is therefore under-covered**, not confirmed empty. No `web_fetch` call was used —
   the RSS/showcase/Claw Report pages were pulled with `curl` via exec instead.
8. **Showcase delta is byte-size only** (+54 B). The previous HTML was not retained in this
   workspace, so the actual content change could not be identified.
9. **ClawStat's `recommended_version` (2026.10.9) is now 10 days old** while `latest` (2026.11.1)
   is 3 days old — the tracker's "prefer the older settled build" behaviour persists for a fourth
   consecutive window; this is a confirmation, not new.

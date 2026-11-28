# OpenClaw use cases — cumulative findings (active window)

Active file. Newest window first-class, older windows kept as condensed indexes with full text in
`archive/cumulative_findings_2026-11.md`. Never delete content — it stays recoverable from the archive.

### 2026-11-24 — condensed index (full section archived)
*Window: 2026-11-23T09:28:00Z → 2026-11-24T09:28:00Z*
*Full text moved verbatim to `archive/cumulative_findings_2026-11.md` (both the uncondensed form and this condensed index).*

- (1) TWO beta releases shipped in-window; `latest` stayed at 2026.11.7 (`beta` moved 2026.11.10-beta.1 → beta.2 → beta.3); publish freeze continued.
- (2) `2026.11.10-beta.3` is a strict superset of beta.2 with 433 → 759 PR references (+326, 0 dropped) and a NEW "Upcoming deprecations" section: 39 dated windows (38× 2026-11-29, 1× 2026-11-30), 37 of them `doctor-*` config retirements. No "Breaking changes" section in either beta.
- (3) beta.3's new Highlights are precisely the four things the version tracker says are blocking users (update recovery, delegated work, long chats, private credentials).
- (4) Velocity held but the severity mix rotated toward P1; the PR backlog grew faster than the issue backlog (159 new issues, 368 new PRs, 227 merged PRs; 5,243 open issues, 3,788 open PRs; P0 8 / P1 27 / P2 101 / P3 22; stars 395,141).
- (5) NEW P0 failure mode: a tailscale `serve` path share makes the managed Gateway re-post its serve config as a non-root operator, tailscaled rejects it with "401 must be root", and the Gateway crash-loops under systemd while the restart-loop breaker suppresses channel auto-start.
- (6) New P1s: 4–5 GB RSS growth (3.6 GB of 256 KB anonymous rw mappings), Web UI shows 1 agent while the CLI lists 3, PostgreSQL migration crash.
- (7) Security posture UNCHANGED — no new advisory; GHSA-pw3x-g8v8-fvj2 5 days untouched, cve_id null, CVSS 8.8, CWE-863, 0 linked issues / 0 linked PRs. (The advisory *count* of "10" used here was a `per_page=10` artifact — the real count is 723; see the 2026-11-25 section.)
- (8) clawstat verdict still ⚠️ but the tracker stopped hedging and recommended ROLLING BACK (recommended_version 2026.11.4 → 2026.11.5; blockers [203869]).
- (9) npm demand: last COMPLETE day unchanged; rolling 7-day unchanged at −5.40 % (2,858,266 vs 3,021,539); 2026-11-23/24 both report 0 = reporting lag.
- (10) Enterprise merge throughput HALVED (169 → 83) and the repo still has NO GitHub Release (~87 days); stars 486; 131 open issues, 363 open PRs.
- (11) Catalog pipeline fully green — the 26 h outage has not recurred (models 1387 → 1388, providers flat at 47).
- (12) Official surfaces STILL FROZEN — no showcase, no press, no blog post in-window.
- (13) NO new customer deployment, production rollout or contract found (enterprise-adoption evidence).
- (14) Discourse: 3 new visible topics in-window, ALL in Troubleshooting — ZERO in Build & Showcase.
- (15) Maintainer presence RESUMED after a zero-reply day — the most consequential story of the window.
- (16) The macOS upgrade deadlock has THREE independent users and a CONFIRMED root cause (CLI ahead of the Gateway service → forward schema migration refused).
- (17) A paid Codex Pro account is hard-blocked for 4 days by a cooldown the UI contradicts (topic #522).
- (18) A channel/UI-context tool-catalog mismatch blocks human-in-the-loop review — a governance failure mode.
- (19) ClawHub: 140 new skills from 47 publishers, but only 2 installs and 1 star — ~3,086× downloads-to-installs.
- (20) ClawHub supply visibly bifurcated into three clusters; the inert test-canary cluster grew.
- (21) ClawHub catalog-wide: 6,037 skills / 1,498 publishers; adoption flat while supply grows.
- (22) ROI: STILL NO customer-facing quantified ROI — 5th consecutive day.
- (23) A 23-day-old scheduled job is still dead and a user, not staff, had to ask for a second maintainer.
- (24) Community moderation is active: 2 in-window posts hidden (topic #504 post #6).
- (25) Reddit remains FULLY blocked — day 5 (Reddit returns a "Blocked" HTML page).
- (26) Hacker News: 0 OpenClaw story submissions in-window.
- (27) Named in-window products and uses: **ClawBro** (in-app browser launched from a running Claw) and others.
- (C-1) Community subagent was cut off by compaction before writing its file (6th cut-off pattern) — the community half was reconstructed by the orchestrator from ~178 stored raw payloads, 0 re-fetches.
- (C-2) 2 of 4 web searches failed with DuckDuckGo bot detection.
- (C-3) `open_issues_count` 9,033 vs label-scoped 5,243 + 3,788 = 9,031 — a 2-count snapshot skew.
- (C-4) The enterprise "1 open PR" figure in the 11-23 baseline appears wrong; today's label-scoped figures supersede it.
- (C-5) ClawHub's "browse-to-install" is not a browse counter — the API exposes no view/browse field.
- (C-6) ClawHub publisher counts are noisy at this sample size (53 → 31 → 47 across three windows).
- (C-7) GitHub Search item lists cap at 100 rows; only `total_count` is complete for the wide queries.
- (C-8) The 39 dated deprecations (2026-11-29/30) are announced windows, not removals.
- (C-9) Enterprise "no versioned release trail" is verified for GitHub Releases only.
- (C-10) No verifiable deployer count exists anywhere.
- (C-11) Cross-run comparability: baseline figures (latest=2026.11.7, GHSA-pw3x cve_id=null, last complete npm day) were used as the delta base.

### 2026-11-25 — condensed index (full section archived)
*Window: 2026-11-24T09:28:00Z → 2026-11-25T09:28:00Z*
*Full text moved verbatim to `archive/cumulative_findings_2026-11.md` (both the uncondensed form and this condensed index).*

- (1) THREE stable releases in one window: `2026.11.8` (npm 2026-11-24T10:14:12Z), `2026.11.9` (2026-11-25T00:33:15Z), `2026.11.10` (2026-11-25T05:07:34Z — 8309 commits / 7671 PRs / 349 contributors); `latest` 2026.11.7 → 2026.11.10; `beta` collapsed onto stable.
- (2) `2026.11.10` ships Deep Research (default-on, portable + Google managed opt-in) and the Knowledge plugin, plus browser handoff, `/fork` threaded conversations, OpenClaw ID Labs, Skill Workshop plugin and a 26.9 KB security section (LanceDB 0.41.0, redirect confinement, Azure OpenAI env redirect block, OpenClaw ID revocation fixes).
- (3) clawstat evidence_gate flipped to PASS with 0 blockers while `status.key` stayed `wait` ("too new to call"); 17 tracked issues / 3 likes total; `recommended_version` still 2026.11.5.
- (4) Tracker: 186 new issues (+27), 521 new PRs (+153), 431 merged PRs (+204, ~1.9×), open issues 5340 (+97) vs open PRs 3819 (+31), P0 6 / P1 25 / P2 116 / P3 34, stars 395,176.
- (5) New P0s: #205231 (macOS misleading credentials modal), #205212 (candidate-doctor), #205162 (Discord chat-initiated update leaves Gateway stopped), #204662 (ChatGPT sign-in 403); closed #204846 and #204667.
- (6) P1 clusters: update/packaging (5), session-state (3) incl. #205006 silent session truncation, security (2) incl. #204657/#204639 Codex harness posting images the agent only inspected, Gateway lifecycle (4), message loss (3).
- (7) ClawHub catalog 13/13 green runs; models 1375 → 1432 (+57); providers flat at 47.
- (8) Enterprise: 79 merged PRs (−5 %), 133 open issues, 413 open PRs (+50), stars 488, `releases[]` still empty (~88 days).
- (9) npm: last complete day 442,684 (−2.25 % DoD); rolling 7 d 2,817,401 vs 3,155,664 = **−10.72 % WoW**.
- (10) First-party ShellBench over >10 M real agent interactions and 53,100 graded runs — OpenClaw 45.23 % vs Pi 45.22 % vs Hermes 45.11 % vs Codex CLI 45.04 % vs Claude Code 42.87 %; GPT-6 Astra 62.5 % at $1.10/run; median run 2.86 min; 9.9 % of runs still failed a safety requirement; model choice moves the median gap 45.7 pp vs 6.2 pp for harness choice.
- (11) Anniversary post "A year of the Claw": largest OSS project ever, 120,000 PRs, 58 years cumulative work hours, 600-person companies, Microsoft Autopilot, NVIDIA NemoClaw, OCE with Red Hat/OpenAI/NVIDIA, multiplayer/shared sessions, Trail of Bits audit mentioned without a link.
- (12) Use cases: l402-bridge (agent pays its own inference in bitcoin over Lightning/Nostr), Poolster (weekly agent-vs-human benchmark over MCP), EmilienM/autofix-openclaw (autonomous Jira → draft-PR SDLC loop on an OpenClaw Enterprise cluster), new official openclaw/beam (portable coding-agent conversation handoffs), NVIDIA publishing 6 first-party ClawHub skills, bankgpt 24-skill SMB finance suite, maxaeo GEO suite over 18 AI platforms.
- (13) ClawHub in-window: 130 new skills / 49 publishers / 7,184 downloads / 11 installs / 0 stars / 0 comments (~653× downloads-per-install, down from ~3,086×).
- (14) Showcase page byte-unchanged vs the 2026-11-10 cache (no diff chunk > 40 chars) → NO named-customer ROI metric for the 6th consecutive day; `openclaw.ai/enterprise` still says "pre-1.0, internal pilot workloads".
- (15) Reddit unreachable for the 6th consecutive day (12 routes failed) → no Reddit URL obtained; **unobserved, not negative**. Substitute sentiment from Discourse (12 posts / 7 topics), GitHub, HN, ClawHub and 3 web searches.
- (16) Complaints: purchased OpenAI credits ignored during provider cooldown (t/522); macOS credentials-need-recovery dead end that `doctor --fix` cannot clear (t/538, 15.4 likes, now P0 #205231); update blocked on ~1.3 GiB SQLite state (#205202); TTS shipping a 14-second silent voice message (#205226) and stripped `[[tts:]]` directives with zero synthesis attempts (#205225); Codex native thread rotating on every turn origin (t/541); one-Gateway multi-tenancy explicitly not a privacy boundary (t/455); ClawHub publisher ban with no reason (t/543); legitimate OSS author removed by a moderator (t/539).
- (17) Discourse: 3 new visible topics in-window, ALL in Troubleshooting — ZERO in Build & Showcase.
- (18) Community moderation active: 2 in-window posts hidden (topic #504 post #6).
- (19) HN: 3 in-window stories, 0 comments on either OpenClaw post.
- (C-1) ADVISORY COUNT CORRECTION: the long-running "10 advisories" figure was a `per_page=10` pagination artifact. Full cursor pagination returns **723** advisories (2026-02-04 → 2026-11-19). Newest advisory unchanged (GHSA-pw3x-g8v8-fvj2, 2026-11-19T02:01:59Z, CVSS 8.8, CWE-863, cve_id null, 0 linked issues/PRs), so "no new advisory" still holds.
- (C-2) The two new blog posts carry `pubDate` 2026-11-24T00:00Z, before the 09:28Z window open: "new since yesterday", not strictly in-window.
- (C-3) ShellBench numbers are vendor-published self-reported results; no independent reproduction was found in-window.
- (C-4) The anniversary claims are first-party, unverified, unnamed, and not ROI.
- (C-5) npm 2026-11-24/25 downloads are `0` because of npm's ~48 h reporting lag, not zero usage.
- (C-6) `open_issues_count` (9,159) includes PRs and is not comparable to the label-scoped open-issue count (5,340).
- (C-7) ClawHub enumeration is a lower bound; downloads-per-install is a proxy (no browse-count endpoint responded).
- (C-8) Enterprise "no versioned release trail" is verified for GitHub Releases only; no verifiable deployer count exists anywhere.

### 2026-11-26 — condensed index (full section archived)
*Window: 2026-11-25T09:28:00Z → 2026-11-26T09:28:00Z*
*Full text moved verbatim to `archive/cumulative_findings_2026-11.md` (both the uncondensed form and this condensed index).*
*Findings files: `findings_usecases_platform_2026-11-26.md`, `findings_usecases_community_2026-11-26.md`.*

- (1) clawstat flipped ✅ → ⚠️ — the single largest delta of the day. Source: https://clawstat.us/latest.json
- (2) The clawstat blocker was already fixed when clawstat assessed it. Source: https://github.com/openclaw/openclaw/issues/205537 · https://github.com/openclaw/openclaw/pulls/201826
- (3) v2026.11.10 shipped with NO macOS artifacts — 12 assets, all Linux. **CORRECTION 2026-11-27: the macOS assets were BACKFILLED at 2026-11-26T10:06:14Z — the release now carries 21 assets including arm64/x86_64 .dmg/.zip/.dSYM; the "no macOS artifacts" reading was true only for the first ~4 h of the release. The macOS deployment-target incompatibility itself remains open.** Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10
- (4) P0 cluster: the macOS app is locked out by a schema migration it cannot undo. Source: https://github.com/openclaw/openclaw/issues/205258 · https://github.com/openclaw/openclaw/issues/205338
- (5) A new `extended-stable` (LTS-equivalent) line shipped in-window. Source: https://registry.npmjs.org/-/package/openclaw/dist-tags · https://registry.npmjs.org/openclaw · https://api.github.com/repos/openclaw/openclaw/releases
- (6) The catalog publish pipeline broke once — and self-healed. Source: https://github.com/openclaw/catalog/actions/runs/45730681123 · https://api.github.com/repos/openclaw/catalog/commits?per_page=5
- (7) Intake cooled while the backlog kept absorbing. Source: https://api.github.com/repos/openclaw/openclaw
- (8) Engagement is watching, not agreeing. Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-25..2026-11-26
- (9) 23 update-path PRs merged in-window — the clearest direct response to the update-failure cluster. Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-25..2026-11-26
- (10) Dictation/voice is now a first-class, spec-shaped product area. Source: https://github.com/openclaw/openclaw/issues/205845 · https://github.com/openclaw/openclaw/issues/205856
- (11) Other notable in-window P1s. Source: https://github.com/openclaw/openclaw/issues/205858 · https://github.com/openclaw/openclaw/issues/205694
- (12) Security posture FLAT — no new advisory. Source: https://openclaw.ai/security · https://api.github.com/repos/openclaw/openclaw/security-advisories
- (13) npm demand reversed the decline. Source: https://api.npmjs.org/downloads/range/2026-11-05:2026-11-26/openclaw
- (14) Enterprise: throughput down, backlog still climbing, still no release. Source: https://api.github.com/repos/openclaw/openclaw-enterprise · https://openclaw.ai/enterprise
- (15) Official blog: no new post in-window. Source: https://openclaw.ai/rss.xml
- (16) The showcase page gained a machine-readable surface but no content. Source: https://openclaw.ai/showcase.md · https://openclaw.ai/showcase
- (17) Org-repo star movement. Source: https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed
- (18) Reddit is BACK after six consecutive days of total unavailability — the streak is broken. Source: https://redlib.hbubli.cc/r/openclaw · https://raw.githubusercontent.com/redlib-org/redlib-instances/main/instances.json · https://www.reddit.com/r/openclaw/comments/1y53mcs
- (19) 17 Reddit routes still fail — the new mirror is the only working one. Source: https://www.reddit.com/r/openclaw/new.json?limit=25
- (20) Third-party-build malware suspicion is now a live onboarding risk. Source: https://www.reddit.com/r/openclaw/comments/1y578j8/
- (21) The sharpest criticism in-window, aimed at the `agentring` skill. Source: https://www.reddit.com/r/openclaw/comments/1y53mcs
- (22) Users contest the framing of the in-app call. Source: https://www.reddit.com/r/openclaw/comments/1y587gq
- (23) Three genuine use cases surfaced on Reddit (none quantified). Source: https://www.reddit.com/r/openclaw/comments/1y5md97 · https://www.reddit.com/r/openclaw/comments/1y5pa92 · https://openclaw.ai/podcast/episode-18
- (24) Discourse: the OpenAI-credit complaint changed shape — it is now a diagnosability gap. Source: https://community.openclaw.ai/t/550
- (25) Discourse: the most detailed community bug report of the window. Source: https://community.openclaw.ai/t/392
- (26) Realtime-voice cost is a live user concern. Source: https://community.openclaw.ai/t/518
- (27) Two moderation events in two days, in opposite directions. Source: https://community.openclaw.ai/t/539 · https://community.openclaw.ai/t/317
- (28) Discourse support capacity is effectively one helper account. Source: https://community.openclaw.ai/latest.json
- (29) Build & Showcase forum: ZERO new in-window threads — the two-thread streak from 2026-11-25 breaks. Source: https://community.openclaw.ai/c/build-showcase.json
- (30) ClawHub: supply flat, demand collapsed. Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=500
- (31) ClawHub's API host changed — the old host is dead. Source: https://api.clawhub.ai/v1/skills · https://clawhub.ai/api/v1/skills · https://clawhub.ai/api/v1/skills
- (32) Third-party VPS-affiliate sizing guides — a deployment-cost monetisation surface. Source: https://api.github.com/search/repositories?q=openclaw+created:2026-11-25..2026-11-26
- (33) Builder ecosystem is active at the edges. Source: https://api.github.com/search/repositories?q=openclaw+created:2026-11-25..2026-11-26
- (34) Hacker News: 1 in-window story, 0 comments — no usable community signal. Source: https://enclawed.com/enclawed-code · https://doi.org/10.5281/zenodo.24524917 · https://news.ycombinator.com/item?id=50646284
- (35) NVIDIA is now a recurring community fixture. Source: https://openclaw.ai/podcast/episode-18 · https://www.reddit.com/r/openclaw/comments/1y4vybe/
- (36) ROI: still ZERO new attributable data points. Source: https://openclaw.ai/showcase · https://openclaw.ai/enterprise
- (1) The macOS artifact gap is verified from the release asset lists, not inferred
- (2) clawstat's evidence gate is stale by ~14 minutes
- (3) clawstat's `known_issues` list is capped at 60 while `tracked_total` is 71
- (4) The 723-advisory figure required cursor pagination
- (5) npm downloads for 2026-11-25 and 2026-11-26 are `0` because of npm's ~48 h reporting lag
- (6) Reddit was read through a redlib mirror, not reddit.com directly.
- (7) The orchestrator's own 17-endpoint Reddit sweep concluded "unreachable"
- (8) ClawHub's API host changed
- (9) The `agentring` skill referenced in the in-window Reddit post is absent from the first 182 ClawHub skills
- (10) The showcase diff is against the 2026-11-10 cache
- (11) Enclawed Code's benchmark numbers are vendor-self-reported
- (12) Discourse sentiment is thin and technically skewed
- (13) Two moderation events in two days
- (14) ClawHub skill summaries are publisher-supplied marketing copy
- (15) GitHub search `total_count` is an upper bound
- (16) Enterprise "no versioned release trail" is verified for GitHub Releases only
- (17) Both community `web_search` calls failed
- (18) No verifiable deployer count exists anywhere Source: https://registry.npmjs.org/-/package/openclaw/dist-tags · https://registry.npmjs.org/openclaw · https://api.npmjs.org/downloads/range/2026-11-05:2026-11-26/openclaw

### Fact-check corrections — legacy 2026-11-10 backlog (pass of 2026-11-26)

The 2026-11-10 window section was compacted out of this active file; its full text (now annotated in
`archive/cumulative_findings_2026-11.md`) was re-checked against live primary APIs on 2026-11-26. 15 claims,
C1-C15, oldest-first from `fact_check_work/2026-11-12_pending.md`. 10 verified, 5 partially verified,
5 carry corrections (C2, C7, C8, C10, C15). Material corrections:

- **C2** — "Zero npm publishes in-window" only holds for the ~2026-11-10T08:34Z snapshot; 2026.11.3
  (17:59:44Z) and 2026.9.37 (20:16:24Z) were published later the same day.
- **C7** — undici 6.28.0 is hit by **five** advisories fixed in 6.29.1, not four; the npm 12.2.0 pin is
  stale (2026.11.10 / `main` ship 12.2.1).
- **C8** — npm **11.21.2** (2026-11-04T22:39Z) was the first npm release with a fixed undici 6.29.1,
  24 minutes before 12.2.2; npm `latest` is now 12.2.3 (fixed) and OpenClaw still ships the affected 12.2.1.
- **C10** — the 2026-11-10 `freshness` state is not re-fetchable (no clawstat history endpoint); supported
  by the same-day capture, and today fresh=false / days_since_release=1 on 2026.11.10.
- **C12** — the "zero 👍 reactions" wording is historical: ClawStat now counts 3 👍 across 60 tracked
  issues against ~2.95M weekly downloads.
- **C15** — `label:security` in-window = **0 issues / 1 pull request**: #195960 is a PR that was closed
  **unmerged** in 7m48s, so no fix landed.

Everything else in the 2026-11-10 section reproduces exactly: beta.2 tag/commit dates, #196251 / #195971 /
#195981 / #196142 / #196199, the absence of a new OpenClaw GHSA, the all-high `platform_impact`, the seven
enterprise PR merges, enterprise issues closed 0 -> 2.

Batch evidence: `fact_check_work/2026-11-26_batch_1.md`, `_batch_2.md`, `_batch_3.md`.
Report: `fact_check_reports/2026-11-26.md`.

## 2026-11-27 (window 2026-11-26T09:28:00Z → 2026-11-27T09:28:00Z)

> **Provenance:** the platform task completed via subagent `diac-platform-2026-11-27` (`findings_usecases_platform_2026-11-27.md`). The community subagent `diac-community-2026-11-27` was **terminated by the context-overflow ceiling** before it could write its findings file; its **raw captures survived** in `tmp/2026-11-27/` and the orchestrator **reconstructed** `findings_usecases_community_2026-11-27.md` (19.9 KB) directly from those payloads. The orchestrator independently re-verified every headline platform figure against the primary APIs (npm dist-tags + downloads, GitHub release assets / issues / search, clawstat, ClawHub skills API, Discourse topic JSON, Hacker News Algolia) and **corrected two platform findings** (see (2) and (3)). **Budget used: 0 web_search + 0 web_fetch** — everything came from direct `curl`/Python requests against primary endpoints. **Baseline:** the `### 2026-11-26` condensed index above.

### Platform

1. **No `2026.11.11` exists — npm dist-tags are unchanged.** `latest` = `2026.11.10`, `beta` = `2026.11.10` (beta still collapsed onto stable), `extended-stable` = `2026.10.34`. No GitHub release tag `2026.11.11`. Third consecutive day of publish freeze on the stable line.
   Source: https://registry.npmjs.org/-/package/openclaw/dist-tags · https://api.github.com/repos/openclaw/openclaw/releases

2. **CORRECTION TO THE 2026-11-26 SECTION — the macOS assets WERE backfilled.** Yesterday's "v2026.11.10 shipped with NO macOS artifacts — 12 assets, all Linux" was true only for the first ~4 h of the release. The release now carries **21 assets**, and the missing macOS payloads were uploaded on **2026-11-26T10:06:14Z** (`OpenClaw-2026.11.10-arm64.dmg` 248 MB, `.zip` 336 MB, `.dSYM.zip`, `OpenClaw-2026.11.10-x86_64.dmg` 267 MB, `.zip` 350 MB, `.dSYM.zip`, `OpenClaw-2026.11.10.dmg` 381 MB, `.dSYM.zip`, `OpenClaw-2026.11.10.zip` 509 MB — timestamps 10:06:14Z–10:06:27Z). That upload landed **49 seconds after P0 #205894 was filed** at 10:05:25Z, so the backfill was the response to the report. The mechanical cause of yesterday's "P0 cluster" therefore no longer exists.
   Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10

3. **But the macOS blocker is NOT fixed — and two new P0s were closed as duplicates instead.** The remaining defect is the **deployment target**: the install page still advertises *"macOS 15+ · Apple Silicon or Intel"* while `docs/platforms/macos.md` requires **macOS 26.2 (Tahoe)+**, and every DMG linked from 2026.10.10 onward is built for macOS 26.2 — so a user on macOS 15–26.1 can download an app that will not run. The install page was re-fetched today and **still shows "macOS 15+"**. Two P0s were filed in-window and both were closed by the `clawsweeper[bot]` as *duplicates*, **not fixed**: #205894 (closed 2026-11-26T10:13:31Z, `not_planned`, duplicate of #205258 — still **open P0**) and #206125 (closed 2026-11-26T19:32:25Z, `not_planned`, duplicate of **#187770**, which is only a **P2 docs-conflict** issue). Triage note: a binary-level release blocker was deduped into a P2 documentation issue, so the canonical owner of the macOS deployment-target defect is now a low-severity ticket.
   Source: https://github.com/openclaw/openclaw/issues/205894 · https://github.com/openclaw/openclaw/issues/206125 · https://github.com/openclaw/openclaw/issues/205258 · https://github.com/openclaw/openclaw/issues/187770 · https://openclaw.ai/install · https://github.com/openclaw/openclaw/blob/main/docs/platforms/macos.md

4. **Five new P0s in-window; three remain open.** Open: **#206215** (Claude Code *"this login reached its time limit and cannot be renewed"* is recorded as an **unknown failure**, so the channel failure cannot be classified — `impact:auth-provider`, linked PR open), **#206076** (Android Talk button does nothing when microphone permission is permanently denied), **#205908** (**Update failure: `package-update` (2026.10.10)** — a failure on the `extended-stable` LTS line, not on stable). Closed as duplicates: #206125, #205894. The in-window P1 list is dominated by the same four axes as yesterday — sub-agent lifecycle, Codex-harness instruction loss, queueing, and channel delivery.
   Source: https://github.com/openclaw/openclaw/issues/206215 · https://github.com/openclaw/openclaw/issues/206076 · https://github.com/openclaw/openclaw/issues/205908

5. **A community report and an upstream P1 now agree on one root cause.** Discourse `t/555` (in-window, `Saul_Burgos`) describes a four-agent lead+specialist setup on Gateway 2026.11.5 with the Codex harness where a turn that starts a **fresh native thread loses everything the agent had read with tools earlier**, so the lead skipped its closeout after "merged". Upstream **P1 #206320** (filed 2026-11-27T02:58:10Z) identifies the mechanism: **since 2026.11.10 (#191344), Codex-engine threads get OpenClaw's base prompt instead of Codex's model prompt**, so an unattended job on `openai/gpt-6.2-sol` ignored its workspace workflow's "finish every item" rule in **4 of 4** replayed runs, while the Codex model prompt (restored via `model_instructions_file`) followed it in **3 of 3** (Fisher exact, two-sided p = 0.029). Two independent reporters, one root cause — and it is a **silent instruction-loss regression**, the most dangerous failure class for unattended agent fleets.
   Source: https://github.com/openclaw/openclaw/issues/206320 · https://community.openclaw.ai/t/555

6. **Sub-agent lifecycle is degrading in both directions.** P1 **#206422** (2026-11-27T05:46:11Z, CrabBox repro): after a Gateway crash restart, child runs stay `execution.status: running` / `delivery.status: pending` forever — the settlement sweeper from #200807 is not reactivated at startup. In parallel, Reddit reports **autonomous sub-agent spawning stopping after an update** (remedy discussed: `tools.deny` adjustment, maximum sub-agents granted, gateway restart).
   Source: https://github.com/openclaw/openclaw/issues/206422 · https://www.reddit.com/r/openclaw/comments/1y6oqmp/subagent_rights/

7. **npm demand: the week-over-week contraction is now firmly positive.** 2026-11-26 recorded **433,040** downloads. Rolling 7-day windows: **3,142,401** (2026-11-20→11-26) vs **3,035,903** (11-13→11-19) = **+3.5 %**, and **3,281,223** (11-19→11-25) vs **2,834,248** (11-12→11-18) = **+15.8 %**. Yesterday's "reversed the decline" reading is confirmed and strengthens; 11-25/11-26 zero-report days remain npm's ~48 h reporting lag, not zero usage.
   Source: https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw

8. **Intake accelerated sharply.** GitHub search (`created:2026-11-26..2026-11-27`, an ~34 h filter and therefore an upper bound for the strict 24 h window): **237 new issues** (orchestrator re-count at 10:5x Z; platform subagent counted 235) with **P0 5 / P1 37 / P2 150 / P3 36** vs yesterday's 178 (P0 4 / P1 29 / P2 107 / P3 33); **673 new PRs** (was 452, +49 %) and **596 merged PRs** (was 399, +49 %). Open issues **9,281**; stars **395,317** (+61); forks **83,012**. The P0 count rose 4 → 5 and the P1 count 29 → 37.
   Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-26..2026-11-27 · https://api.github.com/repos/openclaw/openclaw

9. **clawstat has not moved in 24 h.** It still recommends **`2026.11.6`** with the same three critical blockers (#203343, #203460, #202925); blocker #205537 was closed 2026-11-26T06:17Z (by merged PR #201826) and has not yet changed the recommendation. The recommended version is now **two stable releases behind** `latest` (2026.11.10).
   Source: https://clawstat.us/latest.json · https://github.com/openclaw/openclaw/issues/205537

### Community

10. **The best real-world deployment architecture reported in weeks: Plane → OpenClaw, as a deterministic workflow runtime.** Discourse `t/547` (`tidma-development`, trust level 0, 2026-11-25T23:53:59Z) describes a production stack — self-hosted **Plane Community 1.5.0** in Docker (Compose 2.40.3, Docker 29.1.3) on **Ubuntu 26.04.1 LTS / kernel 7.0.0-43 / Node.js 24.22.2**, **OpenClaw 2026.11.8** on a clean profile bound to loopback, default model `openai/gpt-6-luna`, direct + spawned-child + cron sessions, and a **systemd timer polling Plane every ~20 seconds** with a persistent ledger of processed assignments. The endorsed pattern: **poll and exit with zero model calls when there is no work → atomically claim assignments → dispatch to the worker via `/hooks/agent` with `agentId`, `waitForCompletion: true` and an `Idempotency-Key` header → independently verify the result in Plane → then notify the manager (Atlas) to review or recover stalled work**. The in-thread advice is explicitly **not** to add an LLM-powered dispatcher or sub-agent spawning. The failure mode was stdio MCP servers refusing to start with **"Spawn broker is unavailable."** (mapped by the maintainer to known issue #201609, with "pause the timer → restart the Gateway → `openclaw agents list --json` / `openclaw models status --probe`" as the remedy). This is the clearest community-authored evidence that OpenClaw is being used as an **event-driven, idempotent workflow engine rather than a chatbot**.
    Source: https://community.openclaw.ai/t/547 · https://github.com/openclaw/openclaw/issues/201609

11. **Per-agent capability scoping is the documented mechanism behind multi-agent splits.** Discourse `t/483` records `agents.entries.<agentId>.tools.allow` / `.tools.deny` / `.skills`, sub-agents receiving a **reduced system prompt**, and a per-agent system-prompt section for disabling behaviour that must not be exposed. This is the exact configuration behind the Reddit "hybrid stack" pattern (OpenCode for coding, Hermes for chat, OpenClaw as **watcher / fixer / auditor**) and behind the multi-agent lead/specialist setups.
    Source: https://community.openclaw.ai/t/483

12. **Reddit is reachable again — one mirror of six worked.** `https://redlib.hbubli.cc` served the full listing (93 KB) and thread pages. `safereddit.com` returned "Reddit blocked this", `redlib.cow.rip` 403, `redlib.nadeko.net` 418, `redlib.reallyaweso.me` served a decoy page, `redlib.thepixora.com` served an Anubis "Prove You're Human" challenge. Yesterday's "Reddit fully blocked" status is superseded — but the fragility of the reading route is itself a finding.
    Source: https://redlib.hbubli.cc/r/openclaw · https://raw.githubusercontent.com/redlib-org/redlib-instances/main/instances.json

13. **"Is OpenClaw still relevant?" — 43 upvotes, 71 comments; the most substantive thread in the window.** Answers converge on **model-provider independence** (switching Claude ↔ GPT ↔ local with minimal downtime — the agent layer, not the model, is the durable asset), OpenClaw as a **personal second brain**, a **year-long multi-agent orchestrator** in production, and the hybrid OpenCode + Hermes + OpenClaw watcher/fixer/auditor stack. A counter-current asks whether the ecosystem is now **oversupplied by "agent frameworks"**.
    Source: https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/

14. **Churn signal: a five-month deployment broke on a 2026.11.x upgrade.** A user reported a deployment that had run for **five months** failing after the upgrade — roughly **23 failed exec calls**, a **broken CLI**, and an inability to **link Telegram** — with the user moving to **Hermes and other alternatives**. Long-tenure degradation is the sharpest negative in the window.
    Source: https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/

15. **Memory-provenance quarantine is recoverable only via a security-sensitive workaround.** The reported remedy is: **stop the gateway → edit the database records directly → restart**, with a **backup strongly advised**. Tracked upstream as issue #15342. A workaround that requires raw DB mutation is an operational risk, not a fix.
    Source: https://github.com/openclaw/openclaw/issues/15342

16. **Use case in-window: fragrance-dupe data → Excel → website.** A showcase user scraped internet fragrance "dupe" data, generated an **Excel sheet**, and built a **website for the fragrance community** — a three-stage scrape → structure → publish pipeline, unquantified.
    Source: https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/

17. **ClawHub: supply keeps compounding, measured deployment does not.** In-window (2026-11-26T09:28Z → 2026-11-27T09:28Z): **166 new skills from 51 publishers, 8,686 downloads, 1 install**. The newest-rows page holds 194 unique skills / 64 publishers / 10,645 downloads / **1 install** in total. The **only** skill in the visible catalogue with a non-zero install count is **`crystaria/letitlearn`** (48 downloads, 1 install, 2 versions, published 2026-11-27T05:19Z) — "Stop teaching your AI everything. Let it learn. Let it teach you." **Download→install conversion ≈ 0.01 %.** Category mix of the in-window set: other 74, integrations 53, research 13, creative 13, productivity 9, knowledge 8, development 8, agents 7. The API caps at ~194–195 rows regardless of `limit`, so a full catalogue census is not possible today and all figures are a lower bound on supply, a best-effort upper bound on installs.
    Source: https://clawhub.ai/api/v1/skills · https://clawhub.ai/crystaria/letitlearn

18. **Four distinct use-case clusters dominate the in-window ClawHub supply.**
    (a) **End-to-end creator-economy pipeline** — `jawadamjadbajwa`: `short-form-video-scripts` (Shorts/Reels/TikTok, 3-second hooks), `viral-content-research`, `thumbnail-design-2`, `social-media-content-2`, `long-video-generation-using-free-clips` (5–30 min YouTube videos from Pexels/Pixabay/Mixkit stock), `brand-voice`, `auto-publish-2` (publish via Synoclips to YouTube/Instagram/TikTok) — **research → script → thumbnail → long-form render → repurpose → scheduled publish**.
    (b) **Chinese social-platform intelligence, read-only** — `jackchew7143` (`douyin-subtitle-text`, `douyin-video-summary`, `xiaohongshu-douyin-last-30-days`, `xiaohongshu-note-summary`, `video-to-notes`), `guaikei` (`dy-harvest` — Douyin keyword/creator/comments/hot-list, read-only; `weibo-launch` — Weibo hot-search, keyword search, single-post comments, read-only), `engheng-art` (`douyin-redian-wangyuanjing` — trending works with date-range filter), `zhuchenyan212` (`gewei-account-guard` — WeChat account health, ban appeals, anti-ban warming). The Chinese segment monitors Douyin/Xiaohongshu/Weibo and operates WeChat account safety; it does **not** publish.
    (c) **Real-estate / marketplace data resold as skills** — `scavio-ai`: Autotrader, Carvana, Newegg, Compass, HotPads, Movoto, RentCafe, StreetEasy, Trulia, Rent.com, YesStyle — per-call pricing (e.g. Twitch $0.004/call). A monetised API-broker segment.
    (d) **Agent-to-agent economy** — `baypaycode/lhub` (hire/sell agent services in a marketplace with **escrowed payments**), `andrew-mccall/openagentboard` (anonymous public message board for agents), `publicos/publicos`, `geminigeorge22/agent-flex-arena` and `lootzi/tacticsarena` (hosted agent arenas with Elo-rated strategy games), `conn-ho/okdata-*` (15+ paid public-data endpoints).
    Source: https://clawhub.ai/jawadamjadbajwa/short-form-video-scripts · https://clawhub.ai/jackchew7143/douyin-video-summary · https://clawhub.ai/scavio-ai/trulia-api · https://clawhub.ai/baypaycode/lhub

19. **Two more use cases worth tracking as ROI-adjacent.** `iorireal/agent-worklog-review` inventories **every AI agent's local session records**, classifies completed work and **totals token consumption** to produce a weekly "AI 落地汇报" report — the closest thing to **self-instrumented ROI** in the window; and `liveneon/experience-context-window-compaction-middle-of-task-lost` (23 downloads) targets preserving critical state across context compaction — the skill-market answer to the #206320 instruction-loss class. Alongside them: `hchawla/homebase-family` (family household coordinator), `izzy-gottz/aggregate` (cash, burn, runway, MRR, who-owes-what), `grebennikovxyz/ya-webmaster` (the most-downloaded in-window skill, 106 downloads), `tjldc/roompano-virtual-staging-disclosure` (compliance micro-check on property listings), `sdk-team/alibabacloud-idaas-ack-m2m-federated-credential` (**machine identity for agent workloads** on Alibaba Cloud ACK via IDaaS OIDC with projected service-account tokens), `nathanontheearth-spec/desktop-gui-automation` (Windows mouse/keyboard simulation for WeChat and office apps), `cheso-ai-platform/cheso` (cited research reports and PPT decks via CLI), `yuzhang-zhong/*` (Minecraft/Roblox/livestream-style 9:16 video, `movie-companion` watch-along), `acedatacloud/tripo-3d`.
    Source: https://clawhub.ai/iorireal/agent-worklog-review · https://clawhub.ai/liveneon/experience-context-window-compaction-middle-of-task-lost · https://clawhub.ai/hchawla/homebase-family · https://clawhub.ai/sdk-team/alibabacloud-idaas-ack-m2m-federated-credential · https://clawhub.ai/nathanontheearth-spec/desktop-gui-automation

20. **Discourse publisher friction: a ClawHub listing frozen by registry metadata.** `t/502` — `@weaxs/openclaw-stock-analysis` (runtime ID `stock-analysis`) cannot publish from 0.2.10 because the registry still says `family: bundle-plugin` while the package ships `openclaw.plugin.json` **plus** an `openclaw.extensions` entry; the 0.2.15 tarball passes the `code-plugin` dry run with ClawHub CLI 0.27.0. The maintainer confirmed the mismatch and flagged an in-place migration that preserves package identity and release history. **The listing remains stuck at 0.2.9** — publisher friction caused by registry metadata, not code.
    Source: https://community.openclaw.ai/t/502

21. **Onboarding risk confirmed: a plugin with a dead repo and a security flag.** `t/506` — the ClawHub listing `chrome-openclaw-sider` points at a GitHub repository that no longer exists, the owning account has no other openclaw repo or browser extension, and the listing surfaces a **security audit** flagging handling of **conversation data, tool outputs and attachments**. The maintainer acknowledged the catch and asked the reporter to hold off.
    Source: https://community.openclaw.ai/t/506

22. **Discourse support capacity is still one helper account.** 13 of 21 in-window posts were written by `joe` (trust level 4) answering trust-level 0–2 newcomers; a second account posted empty bodies. No thread drew more than 2 replies and the busiest new topic had 6 views. Maintainer presence is up for a second consecutive day, but the community base is thin and technically skewed.
    Source: https://community.openclaw.ai/latest.json

23. **Hacker News: no in-window OpenClaw submission at all.** The trailing-7-day corpus is only the two official posts (*"A Year of OpenClaw"* 2026-11-24, *"OpenClaw Introduces ShellBench"* 2026-11-25, both 0–2 points and 0 comments), one personal project (*"Dawn: A Workspace Navigator for macOS"*, 1 comment) and *"My encrypted agent OS gives OpenClaw and Hermes an Unreal Engine avatar"* (2026-11-21). **The official ShellBench benchmark launch drew zero Hacker News engagement** — a notable signal for the project's benchmark narrative.
    Source: https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story&numericFilters=created_at_i%3E1795147200&hitsPerPage=50

24. **ROI: still ZERO new attributable data points.** No named customer, no cost-per-task, no hours saved, no revenue attributed to OpenClaw in this window. `iorireal/agent-worklog-review` is a *tool for* measuring ROI, not a measurement. The strongest ROI evidence remains the theme-park builder figures recorded on 2026-11-25. The showcase page carried no new named-customer metric for a seventh consecutive day.
    Source: https://openclaw.ai/showcase · https://openclaw.ai/enterprise

### Trend (2026-11-27)

- **Ship velocity stayed frozen while intake accelerated.** No 2026.11.11 release; PR creation and PR merges both up ~49 %; issue intake up ~33 % and the P0 count up 4 → 5. The project is absorbing more input than it is shipping, and the new P0s are the *same four failure axes* as yesterday (update path, auth, sub-agent lifecycle, Codex instruction loss).
- **The macOS story resolved in one direction only.** The artifact gap was backfilled within 4 hours of the first P0; the *deployment-target* incompatibility is still live, and bot triage routed it into a P2 docs ticket. Net: the community-visible symptom (no download) is gone, the user-visible symptom (app will not run) is not.
- **Demand turned positive.** Two consecutive rolling-7d windows now show growth (+3.5 % and +15.8 %) against the week-over-week contraction that ran for most of October and early November. This is the first sustained positive demand signal in the tracked series.
- **Use-case maturity is rising faster than platform stability.** Multi-agent orchestration with durable per-task state files, deterministic idempotent dispatchers, per-agent tool scoping, agent-to-agent marketplaces, self-instrumented token accounting and machine-identity credentials for agent workloads are all now represented in first-party community threads and skills — while the *plumbing* (sub-agent settlement after crash, fresh-thread instruction loss, memory quarantine requiring DB edits) is where the breakage is concentrated.
- **Ecosystem economics look inverted.** ClawHub supply grew by 166 skills/24 h while measured installs grew by **1**. The ecosystem is in a supply-side gold rush; the measurable deployment signal is two orders of magnitude smaller than the publishing signal.

### Negatives & caveats (2026-11-27)

1. The community subagent was **terminated by context overflow** before writing its findings file; `findings_usecases_community_2026-11-27.md` is an **orchestrator reconstruction** from its surviving raw captures. Captures it did not persist are lost for this window.
2. Reddit was read **through a Redlib mirror, not reddit.com directly**; scores and comment counts may be stale or proxy-filtered. Only 1 of 6 mirrors worked.
3. Discourse `latest.json` exposes only the **latest 30 topics**, so the in-window topic count (11) is a **lower bound**. `t/502`, `t/506` and `t/483` are older threads whose *replies* fell in-window; only `t/555` and `t/547` are new topics.
4. ClawHub's `/api/v1/skills` endpoint appears **capped at ~194–195 rows regardless of `limit`** (400/1000/3000 all returned 194–195). A full catalogue census is **not possible** today; the in-window figures come from the newest-rows page, which does cover everything created since the window opened.
5. ClawHub `stats.installs` may lag real `openclaw` CLI installs; a count of 1 is within noise of the true value.
6. ClawHub skill summaries are **publisher-supplied marketing copy** — they describe intent, not verified capability.
7. GitHub search `created:2026-11-26..2026-11-27` spans ~34 h of wall clock and is therefore an **upper bound** for the strict 24 h window; the label breakdown (P0 5 / P1 37 / P2 150 / P3 36) comes from the platform subagent's full listing, while the orchestrator's re-count of the same filter returned 237 issues (vs 235) a few hours later.
8. `joe` authored 13 of 21 in-window Discourse posts; community sentiment is dominated by **one helper account answering newcomers** and is not representative of broad user opinion.
9. The macOS "deployment target" defect is documented in **#187770 as a P2 docs conflict**, yet it is the canonical owner of two P0 reports — the severity mapping on the tracker is inconsistent with the observed user impact.
10. **No verifiable ROI data point** exists in the window, and the official ShellBench launch produced **no external discussion**.
11. No `web_search` / `web_fetch` calls were used this run; all findings come from primary APIs and mirrors captured by `curl`.

### Sources (2026-11-27)

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10
- https://github.com/openclaw/openclaw/issues/205258 · /205894 · /206125 · /187770 · /206215 · /206076 · /205908 · /206320 · /206422 · /201609 · /15342
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-26..2026-11-27
- https://api.github.com/repos/openclaw/openclaw
- https://clawstat.us/latest.json
- https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw
- https://openclaw.ai/install · https://github.com/openclaw/openclaw/blob/main/docs/platforms/macos.md
- https://community.openclaw.ai/t/547 · /t/555 · /t/483 · /t/502 · /t/506 · /latest.json
- https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/ · /1y6oqmp/subagent_rights/
- https://redlib.hbubli.cc/r/openclaw
- https://clawhub.ai/api/v1/skills · https://clawhub.ai/crystaria/letitlearn · https://clawhub.ai/jawadamjadbajwa/short-form-video-scripts · https://clawhub.ai/jackchew7143/douyin-video-summary · https://clawhub.ai/scavio-ai/trulia-api · https://clawhub.ai/baypaycode/lhub · https://clawhub.ai/iorireal/agent-worklog-review
- https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story&numericFilters=created_at_i%3E1795147200&hitsPerPage=50
- https://openclaw.ai/showcase · https://openclaw.ai/enterprise

*Findings files: `findings_usecases_platform_2026-11-27.md` (subagent, completed) · `findings_usecases_community_2026-11-27.md` (orchestrator reconstruction from surviving raw captures).*

# Platform Findings — 2026-11-23 (window 2026-11-22T09:28:00Z → 2026-11-23T09:28:00Z)

Raw payloads: `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp/2026-11-23/`
Every number and quote below was read from a file in that directory. Observation window: 2026-11-23 ~09:29–09:35Z.

> **Provenance note.** The platform research subagent (`diac-platform-2026-11-23`) exceeded its 25-minute
> budget and was terminated before writing this file. Its **184 raw payloads were already on disk** and are
> intact. This file was therefore reconstructed **directly from those stored payloads by the orchestrator**
> using small local `python3` parsers — **no re-fetching and no new web requests.** The web budget
> (10 `web_search` + 3 `web_fetch` for the whole run) was spent by the community subagent; this platform
> reconstruction used **0** of it.

---

## P1 — A new stable release shipped: 2026.11.7

**1. `openclaw@2026.11.7` was published to npm in-window at 2026-11-23T01:21:13.567Z — the first publish
in three days, and `latest` moved off 2026.11.6.** The registry `time` map filtered for
`published_at > 2026-11-22T09:28:00Z` returns exactly one entry: `2026.11.7` → `2026-11-23T01:21:13.567Z`.
Package `modified` = `2026-11-23T01:21:13.926Z`.
Dist-tags now: **`latest: 2026.11.7`**, `extended-stable: 2026.10.33` (unchanged), `beta: 2026.11.10-beta.1`
(unchanged). This ends the two-window publish freeze.
Source: `tmp/2026-11-23/disttags.json`, `tmp/2026-11-23/npm_full.json`

**2. The matching GitHub Release `v2026.11.7` was published 2026-11-23T01:33:51Z — stable, not a
prerelease.** Release order: `v2026.11.7` (11-23T01:33:51Z) → `v2026.11.10-beta.1` (11-19T15:45:29Z,
prerelease) → `v2026.11.6` (11-19T17:26:46Z) → `v2026.10.33` (11-18T04:15:42Z) → `v2026.11.5` (11-17) →
`v2026.11.4` (11-16).
**The GitHub release landed ~12 min 38 s after the npm publish** — the release/publish order is inverted
relative to a normal flow, which is consistent with the release notes' own "npm preflight / plugin npm
publish / OpenClaw npm publish" evidence chain.
Source: `tmp/2026-11-23/releases.json`

**3. The release is substantial: 736 commits, 300 files changed, +3,195 / −661 lines.** The compare API
`v2026.11.6...v2026.11.7` reports `status: ahead`, `ahead_by: 736`, `behind_by: 0`, `total_commits: 736`.
The compare endpoint caps the listed commits at 250. The release body's own "Complete contribution record"
lists **390** entries and "Release verification" lists **13** evidence items; the Highlights section has
**6** bullets, Changes **5**, Fixes **28**.
Source: `tmp/2026-11-23/compare.json`, `tmp/2026-11-23/releases.json`

**4. The six release highlights, verbatim from the release body — and two of them directly answer defects
that were open in the previous window.** *"Conversation recovery: Recover interrupted replies and child
results across Gateway restarts without losing pending work. (#198905, #201544, #200924, #200967) Authored
by @steipete."* · *"Reliable automations: Let an automation's owner conversation repair failures, and
distinguish recovered or intentionally skipped runs from genuine failures. (#161007, #201638, #152165,
#194276) Related #194261."* · *"Smoother updates: Finish Git and package updates through schema changes,
busy databases, and retained recovery state instead of stopping before or after the new release starts.
(#201600, #201463, #201545, #201330)."* · *"Responsive Gateway: Keep chats, readiness checks, and unrelated
sessions responsive during slow filesystem operations, large recovery packs, and page extraction. (#191236,
#201248, #200623, #200925)."* · *"Browser pairing: Pair another browser with a short code approved on the
Gateway host, with clearer instructions while approval is pending. (#191513, #200905)."* · *"Current ChatGPT
catalogs: Discover newly available subscription models without waiting for another OpenClaw release and keep
sign-in discovery independent of npm. (#201130, #201493) Related #201480."*
**"Conversation recovery" (#198905, #201544) is the direct fix target for yesterday's P1 pair #203425
("Delegated work stalls after a Gateway restart: parents lose child completions") and #203426 ("Finished
subagent results expire before reaching the parent").** The release also carries three **breaking SDK
changes** (session-keyed `setActiveEmbeddedRun(...)` → host-provided `runAttempt` callback with
`SESSION_CONTROLLER_ADMISSION_REQUIRED`; `dispatchGatewayMethod` replacing mutable `chatAbortControllers`
/`chatQueuedTurns` with a new plugin-manifest contract; `AgentTurnStartOwner.observe()` moving from
`expiresAtMs` to `startDeadlineAtMs` with no compatibility alias).
Source: `tmp/2026-11-23/releases.json`

**5. Release verification is first-party and auditable: release SHA `e31bbf056de321127988ec5c1a36ff1b59297de0`,
with links to the release evidence file and the specific publish/preflight/validation CI runs.** The body
also records "npm Telegram beta E2E: not supplied" and "Android APK: skipped — Android releases are
independent of Gateway releases" — **both gaps are disclosed in the release itself.**
Source: `tmp/2026-11-23/releases.json`

## P2 — npm download demand

**6. The reporting lag cleared again: 2026-11-22 is now a complete day at 452,883 downloads; 2026-11-23 is
0 (incomplete).** The range `2026-10-26:2026-11-23` ends `{"downloads":0,"day":"2026-11-23"}`. Point
queries confirm: 11-21 = **497,858**, 11-22 = **452,883**, 11-23 = **0**. **The zero is a reporting lag,
not zero demand** — the series has no interior zeros. 11-22 fell **−9.04 %** vs 11-21, and 11-21 was the
local peak (497,858).
Source: `tmp/2026-11-23/npm_dl.json`, `npm_dl_point_1121.json`, `npm_dl_point_1122.json`, `npm_dl_point_1123.json`

**7. The rolling-7 contraction is still negative but the rate of contraction eased on the weekly window:
2,858,266 vs 3,021,539 = −5.40 % (previous window −9.24 %).** Aligned windows:
**rolling 7 complete days 11-16…11-22 = 2,858,266** vs **11-09…11-15 = 3,021,539 → −5.40 %**.
**Aligned 6-day 11-17…11-22 = 2,374,717** vs **11-10…11-15 = 2,672,115 → −11.13 %** (the 6-day alignment
remains roughly twice as bad as the 7-day one, which is the usual end-of-week-shape artefact — 11-22 is a
Sunday).
**Three consecutive down-periods on the weekly comparison, but the weekly rate of decline improved from
−9.24 % to −5.40 %.** Cross-check: clawstat's calibration independently reports
`npm_weekly_downloads: 2774166`, matching the previous window's 11-15…11-21 rolling-7 sum.
Source: `tmp/2026-11-23/npm_dl.json`, `tmp/2026-11-23/clawstat.json`

## P3 — Security advisories

**8. NO new security advisory, and GHSA-pw3x-g8v8-fvj2 remains completely orphaned.** The advisories list
is still exactly **10 entries**; the newest is unchanged: **GHSA-pw3x-g8v8-fvj2**, `severity: high`,
`published_at 2026-11-19T02:01:59Z`, **`updated_at` also 2026-11-19T02:01:59Z** (no maintainer edit, ever),
`cve_id: null`. **No advisory was published after 2026-11-19T02:01:59Z** — i.e. the release that shipped
today (2026.11.7) did not carry a new advisory, and the 4-day-old high advisory was not re-scored or
closed. The tracker search `repo:openclaw/openclaw GHSA-pw3x` still returns **`total_count: 0`**.
**Remediation-trail age at window end: 4.31 days** (2026-11-19T02:01:59Z → 2026-11-23T09:28:00Z) with no
linked fix PR. All other nine advisories are dated 2026-09-11 and all have `cve_id: null`.
Source: `tmp/2026-11-23/advisories.json`, `tmp/2026-11-23/ghsa_pw3x.json`

## P4 — Tracker (openclaw/openclaw)

**9. Volume rebounded across every metric: 156 new issues, 406 new PRs, 245 merged PRs** (vs 117 / 314 /
261 in the 11-22 window). All three are complete `total_count` values from the GitHub search API.
* **New issues 156** — up 39 (+33.3 %).
* **New PRs opened 406** — up 92 (+29.3 %).
* **Merged PRs 245** — down 16 (−6.1 %).
**More PRs opened than merged** for the first time in several windows, and the new-issue rate rose faster
than the merge rate. Open backlog: **5,243 open issues** and **3,690 open PRs** (separate label-scoped
queries; the repo's `open_issues_count` field was 8,741 yesterday, which includes PRs — 5,243 + 3,690 =
8,933, so the field is ~192 lower than the split sum, a snapshot-skew of the same kind seen previously).
Source: `tmp/2026-11-23/new_issues.json`, `new_prs.json`, `merged_prs.json`, `oi.json`, `op.json`

**10. Severity mix: P0 9, P1 18, P2 113, P3 12 — P1 and P2 rose while P0 held and P3 collapsed.**
Yesterday: P0 9, P1 28, P2 59, P3 19. Deltas: **P0 0, P1 −10, P2 +54, P3 −7**. P2 more than doubled.
**Total P0+P1+P2+P3 = 152** vs 115 yesterday.
Source: `tmp/2026-11-23/p0.json`, `p1.json`, `p2.json`, `p3.json`

**11. The nine P0 issues are dominated by release-plumbing and a new self-setup theme — and three of them
are Focus Week features, not bugs.** **#203737** "[Feature]: Codename ClippyClaw: OpenClaw sets itself up,
and every agent is born in a conversation" (11-22T21:31:53Z) · **#203782** "[Feature]: Focus Week 5: one
birth for every new agent, and setup without dead ends" · **#203784** "[Feature]: Focus Week 5: the built-in
OpenClaw agent investigates and repairs OpenClaw" · **#203869** "[Bug]: Tool execution fails: gRPC code-mode
session closed / BrokenPipe" (11-23T01:26:15Z) · **#203936** "Control UI: Updates settings stay disabled
('Checking for updates…', 'Admin access required') after a successful…" · **#203942** "After `gateway install`
from npx, new shells have no `openclaw` because the npx cache copy is kept as t…" · **#203757** "update: a
Control UI update interrupted by a Gateway kill stays 'Updating…' until the CLI runs" · **#203600** "Update
failure: managed-service-handoff-unavailable (2026.9.4)" · **#203460** "Linux installer hangs indefinitely at
'Downloading NodeSource setup script' when sudo apt is stopped by…".
**The three Focus Week 5 features are labelled P0** — a deliberate product statement: OpenClaw now intends
to set itself up and repair itself. Two of the remaining P0s are about the *update/install path itself*
(#203942, #203757) — **the same "the upgrade path is the product" theme that dominated yesterday**.
Source: `tmp/2026-11-23/p0.json`

**12. The 18 P1 issues are a near-complete inventory of the reliability surface.** Notable ones:
**#204001** "Model fallback to a Codex candidate after an embedded candidate fails: 'A captured user-turn
model prom…'" (11-23T08:20:28Z, the newest P1) · **#203979** "2026.11.6 Telegram DM lane blocked up to 24 h:
cancelled pending input makes every redelivery fail with…" · **#203932** "Docker: a hard-killed Gateway
container cannot restart (GatewayLockNamespaceError on its own previous PID 1)" · **#203912** "Channel
ingress re-claims an event every ~45 ms on GatewayDrainingError with global admission open…" ·
**#203821** "Isolated cron announce run posts collected subagents' raw results after parent ends with
NO_REPLY (spawn-only…)" · **#203764** "update: a candidate that hangs before listening keeps the Gateway
down for 20 minutes before rollback" · **#203758** "macOS app 11.6: `node_exec` denied with 'Exec policy
unavailable: env: node: No such file or directory'" · **#203637** "Agent DB: retained session actor hits
'execution admission is closed' (UNAVAILABLE) during compaction/turns" · **#203609** "Windows: gateway close
fails after the stdin lifeline closes (spawn broker never ready)" · **#203579** "Matrix: after a gateway
restart, an old thread's last message is replayed and refused" · **#203575** "2026.11.6 refuses every
scheduled agentTurn on anthropic-vertex" · **#203567** "Codex thread rotation fails with 'claimed by active
work'" · **#203548** "compaction summarizer dies when thinking exhausts the summary output budget with no
automatic retry" · **#203517** "Gateway fails to start after an in-process restart during boot: state
database still has active native borrowe…" · **#203465** "2026.11.6: sessions_spawn runTimeoutSeconds expiry
on a claude-cli child is treated as a model failure" · **#203464** "Queued channel messages are silently
refused after a Gateway restart" · **#203461** "/new and /stop hang ~15s: reply-session rollover drain blocks
on cleanup_pending settle gate".
**Four P1s (#203464, #203579, #203637, #203912) are all "something was lost or refused after a
restart/drain" — the exact class the 2026.11.7 "Conversation recovery" highlight targets.**
Source: `tmp/2026-11-23/p1.json`

**13. Merged-PR mix in-window is dominated by `fix(` (31) and `test` (22), with `ui` at 19 — and the
refactor wave is about authority checks.** Keyword tally over the first 100 of 245 merges: `fix(` 31,
`test` 22, `ui` 19, `chore` 8, `docs` 5, `auth` 3. Representative merges:
**#203999** "refactor(agents): drop mid-run authority re-checks and reword run-end refusals" ·
**#203992** "refactor(worker-environments): drop mid-run operator re-checks and reword run/data fences" ·
**#203991** "refactor(gateway): drop mid-request authority re-checks in server methods (R6b part 1)" ·
**#203955** "refactor(agents): move the prepared-only tool-caller source into the session-source owner" ·
**#203920** "refactor(agents): delete captureAdmittedRunActiveAssertion and the Stop-only tool-caller
captur…" · **#203934** "fix: reject hidden shell startup assignments in env commands" ·
**#203925** "fix(update): finish an update whose Gateway died while preparing" ·
**#203923** "fix: let long-running installs make backups again" · **#203959** "fix(update): run deferred
Doctor inspections after an upgrade" · **#203917** "fix: remove the updater runtime a shipped update leaves
behind on the next update" · **#203966** "test(e2e): run a T to T+1 upgrade-survivor scenario through
update.run" · **#203981** "fix: keep update settings usable after reconnecting" · **#203998** "fix: stop
offering retired minimax M2 models and read PDFs with M3".
**The three "drop mid-run / mid-request authority re-checks" refactors are the single largest coordinated
theme of the window** — the opposite direction to the previous window's #202941 privilege-scope narrowing.
Source: `tmp/2026-11-23/merged_prs.json`

**14. All ten watched tracker issues remain open — none closed, none fixed.** Direct fetch each:
**#202925** (macOS update-repair refuses executor ownership) open, 4 comments, `closed_at: null` ·
**#202213** (2026.11.6 refuses compressed session archives) open, **5 comments** (up from 3 yesterday) ·
**#202693** (self-learning one-time holds) open, 1 comment · **#202643** (MC-001 Empty Sweep Guard) open,
4 comments · **#203343** (macOS credential-recovery loop) open, **2 comments** (up from 1) · **#203425**
(delegation stalls after Gateway restart) open, 1 comment · **#203439** (8 MiB page limit) open, 1 comment ·
**#203446** (Update failure: candidate-doctor 2026.11.3) open, 2 comments · plus two new ones:
**#203837** "Update failure: package-doctor (2026.10.1)" open, 1 comment · **#203863** "Update failure:
reconcile:abandoned (2026.11.6)" open, 1 comment · **#203869** "gRPC code-mode session closed / BrokenPipe"
open, 3 comments.
**Note: #203425 and #203439 are still open even though today's release names #198905/#201544 as the
"Conversation recovery" fixes — the release addresses a related family, not these specific reports.**
Source: `tmp/2026-11-23/iss_*.json`

## P5 — Catalog (openclaw/catalog)

**15. The catalog stayed green: 6 in-window "Publish catalog" runs, 0 failures — extending the streak to
**18 consecutive successful publishes** since recovery.** Lineage verified from the full publish-run list:
runs 44566039938 → 44773143841 = **7 consecutive failures** (11-19T16:26:03Z → 11-20T16:24:52Z), then
**run 44795278512 = success** (11-20T18:42:20Z) and **every publish run since has succeeded** — a streak
of **18 green publishes**, of which **6 are in-window**. In-window runs: `45022448744` (11-22T12:28:29Z) →
`45043692085` (16:24:45Z) → `45066296018` (20:24:51Z) → `45090710504` (11-23T00:46:13Z) → `45112147098`
(04:29:25Z) → `45139177437` (08:30:31Z), all `conclusion: success`. **Zero failures in-window.** Across the
whole 100-run capture there are 27 publish runs: 20 success, 7 failure — all 7 failures dated 11-19/11-20.
*(The previous window's section reported "12 green since 747"; the verified count from the same source is
18 — the earlier figure under-counted by excluding the extra 02:13Z publish run and the 20:24Z/00:44Z
runs. Corrected here.)*
Source: `tmp/2026-11-23/catalog_runs_all.json`

**16. Catalog model count rose 1388 → 1391 across 6 commits; providers held at 47 for the fourth
consecutive window.** Commit trail: `473701a2` (11-22T12:31:13Z, 1388 models) → `2143ab65` (16:27:53Z, 1390)
→ `15a9d487` (20:27:06Z, 1390) → `be4d2a6f` (11-23T00:48:48Z, 1390) → `cc21c56b` (04:32:14Z, 1390) →
`95b4c5a4` (08:33:20Z, **1391 models**). Provider count constant at **47** in every commit message.
**+3 models in-window**, versus +1 yesterday — the catalog is adding models again after last week's churn.
Source: `tmp/2026-11-23/catalog_commits.json`

**17. The catalog repo's PR state did not change: still exactly 2 open PRs, and #22 has sat for ~2 days.**
`pulls?state=open` → **#22** "fix(ci): publish catalogs through guarded pull requests" (opened
2026-11-21T16:24:57Z) and **#8** "feat(catalog): host typed decision catalog v3" (opened 2026-09-24).
The full PR list (10) shows no new merges or closures since #23 (merged 11-21T23:22:52Z). The
**guarded-pull-request publishing path (#22) remains unmerged** — the catalog is still publishing from
`main` on a schedule.
Source: `tmp/2026-11-23/catalog_prs.json`, `tmp/2026-11-23/catalog_prs_all.json`

## P6 — clawstat

**18. clawstat re-baselined onto 2026.11.7 and the verdict changed shape: still ⚠️, but the status key
moved from `care` to `wait` ("Too new to call").** `assessed_at = 2026-11-23T01:40:56Z` — about 8 minutes
after the npm publish, i.e. the tool assessed the brand-new version almost immediately.
`recommendation: "⚠️"`, `status: {key: "wait", label: "Too new to call", early_read: "Update with care"}`,
`confidence: "medium"`, `freshness: {fresh: true, days_since_release: 0, runs_assessed: 1,
version_specific_issues: 5, carried_over_issues: 1}`.
Headline (verbatim): *"Update with care: one credible macOS tool-execution failure and Slack owner-approval
friction; nothing widespread, but back up first."*
Source: `tmp/2026-11-23/clawstat.json`

**19. The blocker set reset to a single, brand-new P0 regression: #203869.** `evidence_gate`:
`verdict: "⚠️"`, **`blockers: [203869]`**, `blocker_count: 1`, `widespread: []`, `serious: []`,
`floor_applied: false`, `departure.departed: false`, reason *"1 credible blocking issue confirmed for this
version, none widespread."* **#203869** is "[Bug]: Tool execution fails: gRPC code-mode session closed /
BrokenPipe" — `severity: critical`, `weight: 68`, `category: regression`, state open, created
2026-11-23T01:26:15Z, i.e. **five minutes after the release went out and still unfixed in the release**.
**Yesterday's blockers [203343, 202925] are gone from the gate** — but both issues are still open on the
tracker, so the gate reset is a *version-scoping* change, not a fix.
Source: `tmp/2026-11-23/clawstat.json`, `tmp/2026-11-23/iss_203869.json`

**20. The tracked-issue universe collapsed from 75 to 6 — because the tracker is now version-scoped and
2026.11.7 is new.** `calibration.tracked_total: 6` (was 75), `closed_completed: 0` (was 13),
`npm_weekly_downloads: 2774166`. `known_issues` length **6**, `issues_capped: false` (the cap of 60 no
longer binds). Severity split of the 6: **1 critical, 2 high, 3 low**; **all 6 open**. The set:
**#203869** (critical, weight 68, regression) · **#203870** "Owner reply in agent-created Slack thread
loses owner authority" (high, 48, post_release) · **#38327** "[Bug] 'Cannot convert undefined or null to
object' in 2026.3.2 with google-vertex/gemini-3.1-pro-preview" (high, 38, regression — **an old 2026.3.2
issue, i.e. a long-standing carried-over regression**) · **#203837** "Update failure: package-doctor
(2026.10.1)" (low, 27) · **#203842** "Downloads always cancel when the Gateway runs in WSL2 and attaches to
Windows Chrome over CDP" (low, 27) · **#203863** "Update failure: reconcile:abandoned (2026.11.6)" (low, 27).
**This is a scoring-scope artefact, not a health improvement** — the same tracker still had 5,243 open
issues (P4-9).
Source: `tmp/2026-11-23/clawstat.json`

**21. The recommended version moved backwards to 2026.11.4, and the sentiment reading reset to near-zero.**
`recommended_version: {version: "2026.11.4", kind: "settled", published_at: "2026-11-16", age_days: 7,
recommendation: "✅", gate: "✅", blockers: [], blocker_count: 0, min_days: 7, considered: 12}` — **12
versions were considered**, and 2026.11.4 (not 2026.11.3, as yesterday) is now the recommended stable.
Sentiment (verbatim): *"Community engagement is very quiet — 3 👍 total across 6 tracked issues against
~2.77M weekly npm downloads, no megathreads, and no issue naming v2026.11.7 exactly; prior releases in this
pipeline tracked 51–80 issues, so current volume and sentiment indicate normal churn, not a crisis."*
**3 👍** today, versus **0** yesterday and **3** the day before. The "no issue naming v2026.11.7 exactly"
clause is itself evidence that the new release has had no named-issue yet.
Source: `tmp/2026-11-23/clawstat.json`

**22. clawstat's own reviewer validated the verdict without refinement.** `review.validated: true`,
`agreed: true`, `refined: false`, `validator_fallback: false`, `primary_recommendation: "⚠️"`. Its critique
states the verdict "matches the deterministic evidence gate exactly (⚠️, one credible blocker #203869)" and
that "the thesis is correctly driven by that tier-1 item rather than by the low-weight tier-2/3 reports."
This is the **first run in which the reviewer raised no objection at all** — yesterday it flagged the
analyst's severity calls as one notch low on #203343/#202925 and logged two logical errors.
Source: `tmp/2026-11-23/clawstat.json`

**23. The release-features list clawstat derived from the release body is 6 features / 28 fixes, with
**zero breaking changes** — but the release body itself lists three breaking SDK changes.** clawstat's
`changes` object: `breaking: []`, 28 `fixes` (all `verified: true`), 6 `features` (Conversation recovery,
Reliable automations, Smoother updates, Responsive Gateway, Browser pairing, Current ChatGPT catalogs).
**The discrepancy is real and disclosed here: clawstat's `breaking: []` does not reflect the three
breaking SDK changes documented in the release body's own Changes section** (session-keyed
`setActiveEmbeddedRun`, `dispatchGatewayMethod`, `AgentTurnStartOwner.observe()`).
Source: `tmp/2026-11-23/clawstat.json`, `tmp/2026-11-23/releases.json`

## P7 — Enterprise (openclaw/openclaw-enterprise)

**24. Enterprise merge throughput more than doubled: 169 merged PRs in-window vs 71 yesterday (+138 %).**
The search `total_count` is 169. Repo counters: **stars 485** (+2 vs yesterday's 483), **forks 127** (unchanged),
**`open_issues_count` 460** (**−5** vs yesterday's 465). `pushed_at:
2026-11-23T09:30:52Z` — the repo was pushed within two minutes of the observation window opening.
**`releases?per_page=5` STILL returns `[]` — the enterprise repo has published no GitHub Release for the
third consecutive window.**
Source: `tmp/2026-11-23/ent_merged.json`, `tmp/2026-11-23/ent_repo.json`, `tmp/2026-11-23/ent_releases.json`

**25. The enterprise merge mix is dominated by k3d/OpenShell/Kubernetes *documentation and conformance*
work — the platform is being documented and pinned down, not extended.** Keyword tally over the first 100
of 169 merges: `test` 27, `agent` 12, **`openshell` 11**, `upgrade` 11, **`namespace` 10**, `ci` 8,
`k3d` 7, `sandbox` 3, `credential` 3, `git` 2, `iam` 1. Representative merges:
**#7119** "test(sandbox): pin openshell repository policy readback refusals" · **#7116** "Look up the CI run
for a reviewed container release commit" · **#7115** "Report OpenShell failure phases for two CI cases" ·
**#7114** "docs: keep a failed image trial from selecting a cluster for cleanup" · **#7113** "docs: select
the OpenShell profile for the network policy ceiling example" · **#7107** "test(ci): reject image index IDs
as imported config IDs" · **#7106** "Check the candidate controller report before upgrade approval" ·
**#7104** "Simplify Kubernetes channel binding conformance setup" · **#7101** "docs: trace the local
launcher's Kubernetes and Compose profiles" · **#7100** "docs: inspect hybrid routing before applying it to
k3d" · **#7098** "Cover OpenShell CA and Supervisor image refusals" · **#7093** "Speed up k3d preparation
tests with Node's compile cache" · **#7092** "docs: distinguish local k3d grants from production tenant
bindings" · **#7091** "Guard private Git credential rotation against TLS and denial classification
regressions" · **#7090** "Measure ordinary controller upgrades in the populated return rehearsal".
**The Git-credential-rotation guard (#7091) and the k3d-grant/tenant-binding documentation (#7092) are the
same security-control theme as yesterday, now expressed as tests and docs rather than features.**
Source: `tmp/2026-11-23/ent_merged.json`

**26. The enterprise repo has exactly 1 open PR, opened two minutes into the window.**
`pulls?state=open` → **#7122** "docs: show the external IAM prerequisite at deployment" (created
2026-11-23T09:29:52Z). Yesterday's open-PR backlog was 334; **the count is now 1** — a large drop, most
plausibly explained by the 169 merges plus closures.
Source: `tmp/2026-11-23/ent_openprs.json`

## P8 — Official surfaces

**27. All three official surfaces are byte-identical to yesterday — no new blog post, no showcase entry.**
MD5 of raw bytes: `showcase.html` = **`e90d1564b23498328640776d35fe8060`**, `press.html` =
**`c1885462edd97eb7a32a4f91df814eef`**, `rss.xml` = **`faa88be5eeb86b01628c51ee708e936e`** — **identical to
the 11-21 and 11-22 values**. The showcase page is therefore unchanged for a **fifth** consecutive day,
and the RSS feed has not moved since the "OpenClaw Isn't Free." entry.
Source: `tmp/2026-11-23/showcase.html`, `press.html`, `rss.xml`

## P9 — GitHub ecosystem

**28. The topic:openclaw universe grew to 10,449 repositories.** The `topic:openclaw` search returns
`total_count: 10449` (vs the 11-22 baseline's 10,423 recorded in that window's findings). The
`openclaw+pushed:2026-11-22..2026-11-23` search returns **913 matching repositories**. Top of the
star-sorted topic list: `stablyai/orca` (**133,669** stars, +1,333 vs yesterday's 132,336) ·
`paperclipai/paperclip` (**116,114**, +340) · `openclaw/openclaw` (**395,071**, +54) ·
`NVIDIA/NemoClaw` (**23,074**) · `casdoor/casdoor` (14,930) · `Javis603/token-monitor` (3,823) ·
`ai-timon/timon` (710) · `chainstacklabs/polyclaw` (362).
**Note: a first capture of `gh_topic.json` failed with `API rate limit exceeded`** — the unauthenticated
search limit (10/min) was hit; the `gh_topic2.json` retry succeeded and is the source of these numbers.
Source: `tmp/2026-11-23/gh_topic2.json`, `gh_topic.json`, `gh_pushed.json`

**29. The showcase repository `hesamsheikh/awesome-openclaw-usecases` remains dormant — its 20 most recent
commits span 2026-03-05 → 2026-03-24.** Latest commit 2026-03-24T14:54:50Z "Update use case count badge
to 42" (by github-actions[bot]). **No commits in-window**; the community's canonical use-case list has
not been touched in ~8 months.
Source: `tmp/2026-11-23/awesome_usecases.json`

## Negatives & caveats (platform)

1. **The platform subagent timed out.** `diac-platform-2026-11-23` ran 25 m 43 s and was terminated
   before writing its findings file. This file was reconstructed from its **stored raw payloads**; the
   reconstruction used **0 web requests**.
2. **Reconstruction caveat.** Because the subagent was interrupted, the payload set may be incomplete —
   in particular, several GitHub search captures failed with `API rate limit exceeded` and needed retries.
   Any insight below that would have come from a capture the subagent never made is simply **absent**,
   not zero.
3. **GitHub Search item lists cap at 100 rows**; only `total_count` is complete. For new issues (156),
   new PRs (406), merged PRs (245) and enterprise merges (169) the exact totals are reported; only the
   first 100 items were individually inspected.
4. **The `open_issues_count` field disagrees with the label-scoped split** (8,741 field vs 5,243 + 3,690 =
   8,933). Reported both; the split is ~192 higher, consistent with snapshot skew between separate calls.
5. **`gh_topic.json` is a rate-limit error payload, not data.** The retry (`gh_topic2.json`) is the source
   for topic:openclaw counts.
6. **`catalog_runs_all.json` holds only 100 runs** (27 "Publish catalog", 21 "pages build", 37
   "ClawSweeper Dispatch", 10 CodeQL, 5 "Check catalog hosting"). The 18-run green streak is derived from
   the publish runs in that window, which reaches back to 11-19.
7. **npm's 2026-11-23 = 0 is a reporting lag, confirmed three ways** (range-end zero; point query for
   11-23 = 0; 11-22 = 452,883 complete, series has no interior zeros). The last complete day is
   **2026-11-22**.
8. **The rolling-window comparison is end-of-week sensitive.** The 7-day comparison (−5.40 %) and the
   6-day comparison (−11.13 %) disagree materially because 11-22 is a Sunday and 11-15 is also a Sunday.
   Both are reported; neither is a complete week on its own.
9. **clawstat's `tracked_total: 6` is a scope artefact of a fresh release, not a health signal.** The
   tracker itself had 5,243 open issues. Do not read "6 tracked issues" as "6 problems".
10. **clawstat's `breaking: []` contradicts the release body's own three breaking SDK changes.**
    Both are reported; the release body is authoritative.
11. **"Conversation recovery" is a release highlight, not a verified fix for #203425/#203426.** Those two
    issues remain open. Per the standing rule, presence must be proven in the published artifact — the
    release names #198905/#201544, a different set.
12. **The npm tarball for 2026.11.7 was fetched (`oc_2026.11.7.tgz`, `oc_2026.11.6.tgz`) but the package
    contents were not diffed**; no artifact-level verification of the release claims was performed.
13. **Enterprise release array is still empty** (`releases?per_page=5` → `[]`), third consecutive window.
14. **The enterprise open-PR drop from 334 to 1 is reported as observed.** The mechanism (merges vs closures
    vs query semantics) was not verified.
15. **Star counts are raw GitHub values**; several adjacent projects show six-figure stars with recent
    creation dates, and organic-ness was not independently verified.
16. **No first-party ROI figure exists in any platform artifact** (see community finding F25).

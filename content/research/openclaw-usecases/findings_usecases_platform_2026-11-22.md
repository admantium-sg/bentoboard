# Platform Findings — 2026-11-22 (window 2026-11-21T09:28:00Z → 2026-11-22T09:28:00Z)

All numbers below were read from raw payloads fetched **this run** into
`/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp/2026-11-22/`.
No number is carried over from the 2026-11-21 report except where explicitly labelled "baseline".

---

## 1. Releases & dist-tags

**F1 — No new npm publish in the window; `latest` did not move.** The npm dist-tags payload
(`disttags.json`) returns exactly `{"latest":"2026.11.6","extended-stable":"2026.10.33","beta":"2026.11.10-beta.1"}` —
byte-identical to the baseline's three tags. Filtering the full npm document's `time` map for
`published_at > 2026-11-21T09:28:00Z` yields an **empty list** (last 8 entries of the map:
`2026.11.5-beta.2 2026-11-11T23:33:44.647Z`, `2026.11.5-beta.3 2026-11-15T00:06:26.238Z`,
`2026.11.5-beta.4 2026-11-16T02:41:24.046Z`, `2026.11.4 2026-11-16T04:06:42.253Z`,
`2026.11.5 2026-11-17T09:59:33.472Z`, `2026.10.33 2026-11-18T03:11:16.913Z`,
`2026.11.10-beta.1 2026-11-19T15:09:49.383Z`, `2026.11.6 2026-11-19T16:52:13.687Z`).
The package `modified` timestamp is still `2026-11-19T16:52:14.078Z`, i.e. untouched since the
2026.11.6 publish. **This is the second consecutive publish-free window.**
Source: https://registry.npmjs.org/-/package/openclaw/dist-tags and https://registry.npmjs.org/openclaw (raw: `tmp/2026-11-22/disttags.json`, `tmp/2026-11-22/npm_full.json`)

**F2 — No new GitHub Release in the window either.** `releases?per_page=8` returns 8 releases, the
newest being `v2026.11.10-beta.1` (published_at `2026-11-19T15:45:29Z`, prerelease) and
`v2026.11.6` (published_at `2026-11-19T17:26:46Z`); the full ordered list is
`v2026.11.10-beta.1` (11-19), `v2026.11.6` (11-19), `v2026.10.33` (11-18),
`v2026.11.5` (11-17), `v2026.11.4` (11-16), `v2026.11.5-beta.4` (11-16),
`v2026.11.5-beta.3` (11-15), `v2026.11.5-beta.2` (11-12). Nothing published after
`2026-11-19T17:26:46Z`, i.e. **zero releases in this 24-hour window**.
Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=8 (raw: `tmp/2026-11-22/releases.json`)

---

## 2. Security

**F3 — No new advisory in the window; the advisory list is unchanged at 10 entries.** The
`security-advisories?per_page=10` payload returns 10 advisories; the newest is
**GHSA-pw3x-g8v8-fvj2** (`severity: high`, `published_at 2026-11-19T02:01:59Z`), and every other
advisory in the list was published on **2026-09-11** (00:57–00:58Z) —
`GHSA-rx8p-qcpv-c7vr`, `GHSA-xvwp-wmh2-fq48`, `GHSA-5j57-84cx-r295`, `GHSA-m78m-7h3q-q938`,
`GHSA-vhpg-cq3w-v8p9`, `GHSA-7jfq-rmfm-29wp`, `GHSA-3mq7-q27j-mq7q` (high),
`GHSA-v7hh-7676-rg67`, `GHSA-9m4p-cqp4-jppq` (high). **No advisory has a `published_at` inside
the window.**
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10 (raw: `tmp/2026-11-22/advisories.json`)

**F4 — GHSA-pw3x-g8v8-fvj2 remains un-remediated: `cve_id` null, `updated_at` == `published_at`,
and zero linked issues/PRs.** Re-read this run: `cve_id = null`,
`published_at = 2026-11-19T02:01:59Z`, `updated_at = 2026-11-19T02:01:59Z` (**unchanged since
publication**, so no maintainer edit in this window). The tracker search
`repo:openclaw/openclaw GHSA-pw3x` returns `total_count = 0` with **0 items** — no issue and no
pull request anywhere in the tracker references the advisory ID.

**Remediation-trail age: 3.31 days** (2026-11-19T02:01:59Z → window end 2026-11-22T09:28:00Z =
3 d 7 h 26 min) with **no linked fix PR**. *Caveat:* the 2026-11-21 baseline reported "5 days";
that figure does not reconcile with the advisory's own `published_at`, so the number published
today is computed directly from the raw timestamps rather than carried forward. The previous
window's PR **#202941** ("fix(gateway): enforce the session permission mode on every Gateway
tool call", merged 2026-11-21T06:05:33Z) remains **unlinked** to the advisory.
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10 and https://api.github.com/search/issues?q=repo:openclaw/openclaw+GHSA-pw3x (raw: `tmp/2026-11-22/advisories.json`, `tmp/2026-11-22/ghsa_pw3x.json`)

---

## 3. Catalog & Actions

**F5 — "Publish catalog" is still green: 12 consecutive successful runs since the recovery, and
6 green runs inside this window.** Pulling `actions/runs?per_page=100` (raw `catalog_runs100.json`)
gives the complete run-number lineage for the workflow:
runs **740–746 = failure** (2026-11-19T16:26Z → 2026-11-20T16:24:52Z), run **747 = success**
(2026-11-20T18:42:20Z, `event: workflow_dispatch`), then runs **748–758 = success, unbroken**
(748 11-20T20:24Z · 749 11-21T00:41Z · 750 11-21T02:13Z push · 751 11-21T04:26Z ·
752 11-21T08:26Z · 753 11-21T12:28Z · 754 11-21T16:24Z · 755 11-21T20:24Z ·
756 11-22T00:44Z · 757 11-22T04:26Z · **758 11-22T08:27:06Z → completed success 08:30:00Z**).
That is **12 consecutive green runs since run 747** (baseline: 6), of which **6 are in-window**
(753→758) and **0 failures in-window**. The sibling workflow "Check catalog hosting" ran 5 times
(runs 20–24, 2026-11-21T01:52Z → 16:31Z), **all success**.
Source: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=100 (raw: `tmp/2026-11-22/catalog_runs100.json`, `tmp/2026-11-22/catalog_runs.json`)

**F6 — 7 new catalog commits; the model count ticked 1387 → 1388 while providers held at 47.**
`commits?per_page=20&since=2026-11-21T09:00:00Z` returns 7 commits, verbatim messages:
`2026-11-22T08:29:20Z catalog: 47 providers, 1388 models` (`b7c1500b`),
`2026-11-22T04:29:28Z catalog: 47 providers, 1388 models` (`eed0aed2`),
`2026-11-22T00:47:23Z catalog: 47 providers, 1387 models` (`47e7d6c0`),
`2026-11-21T23:22:52Z docs: help PR reviewers understand the problem before the fix (#23)` (`9c44e3be`),
`2026-11-21T20:27:12Z catalog: 47 providers, 1387 models` (`b0da7a17`),
`2026-11-21T16:27:27Z catalog: 47 providers, 1387 models` (`d0bbddb3`),
`2026-11-21T12:31:20Z catalog: 47 providers, 1387 models` (`d465615a`).
Net change: **models 1387 → 1388 (+1, first bump in this window)**, providers unchanged at 47.
The baseline's noted 1389 → 1387 drop has therefore **not** been reversed.
Source: https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-21T09:00:00Z (raw: `tmp/2026-11-22/catalog_commits.json`)

**F7 — A second open catalog PR now exists: #22 "fix(ci): publish catalogs through guarded pull
requests", opened 2026-11-21T16:24:57Z.** `pulls?state=open` returns **2** open PRs (#8
"feat(catalog): host typed decision catalog v3", opened 2026-09-24, and the new **#22**), versus
**1** at baseline. The full PR ledger (`pulls?state=all`) also shows **#23 merged**
(`2026-11-21T23:22:52Z`, docs) and **#21 merged** (`2026-11-21T02:13:39Z`,
"build(deps): keep catalog hosting and CI pins current" — the baseline's fix commit).
PR #22's arrival is the most consequential catalog event of the window: it changes the
publishing path itself, not just catalog content.
Source: https://api.github.com/repos/openclaw/catalog/pulls?state=open and https://api.github.com/repos/openclaw/catalog/pulls?state=all&per_page=10 (raw: `tmp/2026-11-22/catalog_prs.json`, `tmp/2026-11-22/catalog_prs_all.json`)

---

## 4. Tracker velocity

**F8 — Volume cooled across every tracker metric.** From the search API (complete `total_count`s):
**117 new issues** in-window (baseline 155, **−38 / −25 %**), **261 merged PRs**
(baseline 375, **−114 / −30 %**), **314 new PRs opened** (prior window measured at 473,
**−159 / −34 %**), and **261 commits** to `main` since 2026-11-21T09:28:00Z (Link-header `rel="last"`
page 261 at `per_page=1`). The direct pull-list API cross-check (`pulls?state=closed&sort=updated&desc`,
300 items fetched) counted **252** merged in-window, slightly under the search total of 261 because
the list truncates at 300 rows — the search `total_count` is authoritative.
Repo counters: **stars 395,017** (baseline 394,946, **+71**), **forks 82,946** (baseline 82,932,
**+14**), **`open_issues_count` 8,741** (baseline 8,699, **+42**; note this field includes PRs).
Split out: **5,152 open issues** and **3,590 open PRs** (= 8,742, consistent with 8,741 ±1 snapshot
skew), i.e. **open issues + PRs grew far slower than the +277 of the baseline window**.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z, ...+is:pr+is:merged+merged:<window>, ...+is:pr+created:<window>, https://api.github.com/repos/openclaw/openclaw, https://api.github.com/repos/openclaw/openclaw/commits?since=2026-11-21T09:28:00Z&per_page=1 (raw: `tmp/2026-11-22/new_issues.json`, `merged_prs.json`, `new_prs.json`, `repo.json`, `open_issues.json`, `open_prs.json`, `commits_probe2.json`)

**F9 — Severity mix worsened sharply at the top: 9 P0 and 28 P1 newly created (baseline 5 / 17).**
The label-scoped queries are complete (`total_count` is exact, not a page sample):
**P0 = 9**, **P1 = 28**, **P2 = 59**, **P3 = 19**. Deltas vs baseline (5/17/81/51):
**P0 +4, P1 +11, P2 −22, P3 −32**. All nine in-window P0 titles, verbatim:
**#203446** "Update failure: candidate-doctor (2026.11.3)" · **#203439** "chat.history: one message
over the 8 MiB page limit makes the whole session unreadable" · **#203343** "[Bug]: macOS app loops on
"client credentials need recovery"; asks for a "matching CLI" that ca…" · **#203317** "Update failure:
update-recovery-pending (2026.11.1)" · **#203209** "Windows MSIX: plugin install confirmation
immediately cancels" · **#203141** "Update failure: repairing (2026.9.4)" · **#203129** "[Bug]: Mac app
is incompatible with macOS 15" · **#203124** "[Bug]: macOS welcome setup detection fails in the
bundled Bun Gateway" · **#203065** "[Bug]: macOS: app-owned bundled Gateway service stays on
2026.11.4, stale-service replacement s…". Three of the nine are literally titled "Update failure",
four are macOS-specific, and one is the chat-history 8 MiB page limit — the P0 set is almost
entirely the **update/macOS recovery cluster**, not a broad new failure mode.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:P0+created:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z (and P1/P2/P3 equivalents) (raw: `tmp/2026-11-22/p0.json`, `p1.json`, `p2.json`, `p3.json`)

**F10 — The P1 list adds a brand-new cluster: subagent / parent-continuation loss after a Gateway
restart.** The 28 in-window P1 titles include **#203425** "Delegated work stalls after a Gateway
restart: parents lose child completions, subagents get no…" · **#203426** "Finished subagent results
expire before reaching the parent; yields end with no continuation" · **#203452** "Heartbeat turn
fails across prompt-cache boundary drop (heartbeat_respond rejected → incomplete…" ·
**#203424** "[Bug]: Silent reply "NO_REPLY" after inline </think> reasoning is delivered as a visible
messag…" (closed) · **#203434** "[Bug]: claude-cli → embedded API fallback sends the uncompacted
transcript over the contextToke…" · **#203436** "[Bug]: perf(acpx): pluginToolsMcpBridge cold-loads a
standalone plugin registry per session". Also notable: **#203373** "[data-loss] memoryFlush can commit
empty or stale LLM output to MEMORY.md — agents' long-term m…" · **#203211** "@openclaw/memory-lancedb
2026.11.5 and 2026.11.6 ship only the linux-x64-gnu LanceDB bin…" · **#203359** "backup create fails
on PostgreSQL store anchors and leaves the Gateway state lease held" · **#203391** "Pre-update cron
automations fail at agent-run start with Scheduled account unavailable until re…" · **#203167** "Codex
cooldown persists after a successful GPT-6 Luna request". The #203425/#203426 pair is the newest
signal: delegation results are being lost specifically across a Gateway restart.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:P1+created:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z (raw: `tmp/2026-11-22/p1.json`)

**F11 — Merged-PR work mix is dominated by Control UI / frontend polish, with no security- or
privilege-hardening merges.** Keyword tally over the 100 newest of the 261 in-window merges:
`ui` 17, `fix(` 15, `test` 11, `chore` 10, **`control ui` 10**, `session` 10, `automation` 6,
`update` 6, `gateway` 4. Representative titles: #203451 "chore(ui): refresh control ui locales",
#203448 "chore: raise the Control UI CSS budget to the size of the automations and catalog redesign",
#203430 "fix: stop sidebar rows jumping while a session's helpers refresh",
#203440 "fix: remove the search icon from the mobile sidebar rail",
#203427 "fix: keep whole tool output and Code Mode tool calls in trajectory exports",
#203432 "fix: keep automations silent when the model closes its reasoning before NO_REPLY",
#203409 "fix: deliver Nostr automation announcements to the owner",
#203423 "test(gateway): give run-authority test clients a complete connect handshake",
#203419 "fix: finish model refresh when removing an account". A security-title filter over the same
set matched only 3 items, and only one is genuinely behavioural: **#203394 "refactor(auth): one owner
for provider sign-in failures, paste and recovery"** (merged 2026-11-22T06:24:01Z); the other two
are a test-harness change and a tooltip test fix. **No permission-narrowing or authz-hardening
merge in-window** — contrast with #202941 in the previous window.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z&per_page=100 (raw: `tmp/2026-11-22/merged_prs_100.json`)

**F12 — All four watched tracker issues remain open and unremediated.** Direct fetch of each issue
this run: **#202925** (macOS 2026.11.5 update-repair refuses executor ownership) — open, `closed_at: null`,
4 comments, 2 total reactions; **#202213** (2026.11.6 refuses to read compressed session archives) —
open, null, 3 comments, 2 reactions; **#202693** (self-learning one-time holds) — open, 1 comment,
2 reactions; **#202643** (MC-001 Empty Sweep Guard) — open, 3 comments, 2 reactions; and the new
blocker **#203343** (macOS credential-recovery loop) — open, 1 comment, 2 reactions. None of the
five has been closed or fixed in this window.
Source: https://api.github.com/repos/openclaw/openclaw/issues/202925 (and /202213, /202693, /202643, /203343) (raw: `tmp/2026-11-22/iss_*.json`)

---

## 5. npm demand

**F13 — The reporting lag cleared: 2026-11-20 and 2026-11-21 are now readable, and the trailing
zero is a lag artifact, not a collapse.** The range endpoint
(`/downloads/range/2026-10-25:2026-11-22/openclaw`) returns 29 daily points ending with
`{"downloads":0,"day":"2026-11-22"}`. Two independent point queries settle the interpretation:
`/downloads/point/2026-11-22/openclaw` → **0**, while `/downloads/point/2026-11-23/openclaw` → **0**
as well — i.e. the artifact reads 0 for any day that is not yet complete, exactly as it read 0 for
11-20 and 11-21 in the baseline run (which was therefore correctly read as lag). The range **start**
(2026-10-25 = 667,822) is a real full-day value, and the series contains no interior zeros.
**Last complete day = 2026-11-21 at 497,858 downloads** — the highest single day since 2026-11-06
(504,091), and a sharp rebound from the 294,218 trough on 2026-11-19.
Full series: 10-25 667,822 · 10-26 474,738 · 10-27 391,520 · 10-28 341,738 · 10-29 384,516 ·
10-30 375,102 · 10-31 292,528 · 11-01 318,468 · 11-02 321,275 · 11-03 393,121 · 11-04 400,586 ·
11-05 369,131 · 11-06 504,091 · 11-07 493,523 · 11-08 403,698 · 11-09 349,424 · 11-10 427,925 ·
11-11 429,437 · 11-12 495,873 · 11-13 478,823 · 11-14 471,274 · 11-15 368,783 · 11-16 483,549 ·
11-17 390,660 · 11-18 346,941 · 11-19 294,218 · 11-20 392,157 · 11-21 497,858 · 11-22 0 (lag).
Source: https://api.npmjs.org/downloads/range/2026-10-25:2026-11-22/openclaw and https://api.npmjs.org/downloads/point/2026-11-21/openclaw (raw: `tmp/2026-11-22/npm_dl.json`)

**F14 — Demand is still contracting, and the contraction deepened versus the baseline −8.7 %.**
Computed from the same series:
- **Rolling 7 complete days 11-15…11-21 = 2,774,166** vs prior week **11-08…11-14 = 3,056,454** → **−9.24 %**.
- **Aligned 6-day 11-16…11-21 = 2,405,383** vs **11-09…11-14 = 2,652,756** → **−9.33 %**.
- On the baseline's exact window alignment (11-14…11-20 vs 11-07…11-13): **2,747,582 vs 3,078,703 → −10.76 %**.
Against the baseline's reported **−8.7 %** rolling-7 figure, the decline **widened by roughly
0.5–2 percentage points**. Two consecutive down-weeks now, and the 294,218 trough on 11-19 was
followed by only a partial two-day rebound (392,157 → 497,858) rather than a recovery to the
11-06/11-12 peak zone (≈495–504 k). Independently, clawstat's own calibration block reports
`npm_weekly_downloads: 2747582`, which matches my 11-14…11-20 rolling-7 sum exactly — a clean
cross-check of the computation.
Source: https://api.npmjs.org/downloads/range/2026-10-25:2026-11-22/openclaw and https://clawstat.us/latest.json (raw: `tmp/2026-11-22/npm_dl.json`, `tmp/2026-11-22/clawstat.json`)

---

## 6. Enterprise

**F15 — Enterprise merge throughput roughly halved: 71 merged PRs vs 136 in the baseline window.**
The search query `repo:openclaw/openclaw-enterprise is:pr is:merged merged:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z`
returns `total_count = 71`, and the direct pull-list API cross-check
(`pulls?state=closed&sort=updated&desc`, 300 rows) independently counts **71** PRs with
`merged_at` inside the window (earliest 2026-11-21T09:51:19Z, latest #6945 at 2026-11-22T09:23:24Z)
— the two methods agree exactly. For context, the 2-day window 11-19→11-21 totals 251, and the
prior single window alone was 136, so the pace genuinely fell rather than being a window-alignment
artifact. Repo counters: **stars 483** (baseline 482, **+1**), **forks 127** (baseline 126, **+1**),
**`open_issues_count` 465** (baseline 460, **+5**), **open PRs 334**, `pushed_at` 2026-11-22T09:29:32Z.
**`releases?per_page=5` still returns an empty array — the enterprise repo has no GitHub Release
at all**, for the second consecutive window.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>, https://api.github.com/repos/openclaw/openclaw-enterprise, .../releases?per_page=5, .../pulls?state=closed (raw: `tmp/2026-11-22/ent_merged2.json`, `ent_repo.json`, `ent_releases.json`, `ent_pulls_*.json`)

**F16 — The dominant enterprise cluster is OpenShell / Agent sandbox hardening plus CI
test-hardening — internal control-plane work, not new user-facing capability.** Keyword tally over
all 71 in-window enterprise merges: `test` 18, `agent` 15, `ci` 11, **`credential` 10**, `git` 9,
**`openshell` 8**, `plugin` 5, `sandbox` 4, `upgrade` 4, `k3d` 3, `namespace` 3, `codex` 3.
Representative titles: #6945 "Run each CI impact summary pairing once", #6941 "ci: run protected Agent
network proxy acceptance once", #6939 "Share first-deployment CLI inputs and check recovery requests",
#6937 "Check app grant absence and still-deleting Agent blockers", #6934 "Refresh Agent Sandbox status
on foreground return", #6931 "Clarify what the API shutdown deadline guarantees during upgrades",
#6927 "Use the supported OpenShell identity mode in the native k3d lifecycle",
#6924 "Retire stale plugin actions after access loss or Agent deletion",
#6923 "Check credential reads before restarting the old controller in upgrade tests",
#6851 "Move Git Provider network rules into the OpenShell Sandbox driver",
#6808 "Preserve and withdraw stored repository grants through the sandbox policy API",
#6732 "feat(cli): select published controller and runtime together for upgrades".
Git-provider network rules, credential rotation and grant withdrawal are the recurring themes.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>&per_page=100 (raw: `tmp/2026-11-22/ent_merged2.json`)

**F17 — RFC status unchanged: RFC-0042 is fully merged, RFC-0040 remains an open multi-PR program.**
RFC-0042's implementation PRs **#6434** ("RFC-0042: Continue sessions across compatible
redeployments", merged 2026-11-18T05:49:02Z), **#6435** ("Fix dedicated Codex continuation after
Gateway restart", merged 2026-11-18T05:48:51Z) and **#6442** ("Continue interrupted sessions across
compatible redeployments", merged 2026-11-18T08:51:46Z) remain merged-before-window; a search for
`RFC-0042` in the enterprise repo returns 14 hits, **none of them an open RFC-0042 PR**. RFC-0040
remains partially open: **#6364** ("feat(iam): let Default users provision Agents (RFC-0040 slice 2)",
opened 2026-11-17) is still **open and unmerged**, as is **#4889** ("RFC-0040: Bind dedicated Codex
turns to their Sandbox execution", opened 2026-11-06); the last landed RFC-0040 PR, **#6336**
("feat: add Agent HTTP chat completions (RFC-0040)"), merged 2026-11-17T17:25:29Z — still before
the window. Also closed-but-not-yet-marked-merged on the boundary: #4952/#4953 "One optional Gateway
outbound proxy" merged **2026-11-21T07:33:37Z**, which is ~2 hours *before* the window opens and is
therefore not counted as in-window.
Source: https://api.github.com/repos/openclaw/openclaw-enterprise/pulls/6364 (also /4889, /6336, /6434, /6435, /6442) and https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+RFC-0042 (raw: `tmp/2026-11-22/pr_*.json`, `rfc42d.json`)

---

## 7. clawstat.us

**F18 — Verdict unchanged at ⚠️ "Update with care", but the blocker set GREW from one to two.**
`recommendation = "⚠️"`, `status.key = "care"`, `status.label = "Update with care"`,
`confidence = "medium"`, `assessed_at = 2026-11-22T01:36:38.265829+00:00`, assessed `version = 2026.11.6`.
**`evidence_gate.blockers` = `[203343, 202925]` with `blocker_count: 2`** and reason
*"2 credible blocking issues confirmed for this version, none widespread."* — the baseline listed
**only `[202925]`**, so the macOS credential-recovery loop **#203343** was **promoted to a
tier-1 blocker in this window**. `evidence_gate.verdict = ⚠️`, `widespread = []`, `serious = []`,
`floor_applied: false`, `departure.departed: false`.
`recommended_version` = **2026.11.3** (`kind: settled`, `published_at: 2026-11-10`, `age_days: 12`,
`recommendation/gate: ⚠️`, `blocker_count` with its own blocker list `[196820, 196958, 197806, 198160, 198191]`),
and `recommended_version.latest` = `{version: 2026.11.6, age_days: 3, recommendation: ⚠️, settled: false}`.
Source: https://clawstat.us/latest.json (raw: `tmp/2026-11-22/clawstat.json`)

**F19 — Tracked-issue count rose to 75 with 21 newly-observed issues; all 60 tracked issues are
still open.** `calibration.tracked_total = 75` (baseline 74, **+1**), `calibration.closed_completed = 13`,
`calibration.npm_weekly_downloads = 2,747,582`. `known_issues` length **60** with
`issues_capped: true` and `issues_cap: 60` — **the list is still capped, so the true tracked-issue
count exceeds 60**. Severity split of the 60: **2 critical, 55 high, 3 medium**; **all 60 have
`state: "open"`**; **21 are flagged `is_new: true`** this cycle. Top-weighted entries:
**#203343** (critical, weight 78, macOS credential-recovery loop),
**#202213** (high, 64, compressed session archives),
**#203211** (high, 64, memory-lancedb ships only the linux-x64-gnu binary),
**#202925** (critical, 62, update-repair executor ownership),
then #202518 / #202441 / #203167 / #202672 at weight 58.
`freshness`: `fresh: false`, `days_since_release: 3`, `runs_assessed: 7`,
`version_specific_issues: 60`, `carried_over_issues: 0`. `track_record` for 2026.11.6:
7 runs, path `["✅","⚠️"]`, `direction: "hardened"`. `hotfix_chain: []`, `changes` all empty
(breaking/fixes/features).
Source: https://clawstat.us/latest.json (raw: `tmp/2026-11-22/clawstat.json`)

**F20 — Headline rewritten around the macOS cluster; sentiment text also changed, and the 👍 count
went to zero.** Headline (verbatim): *"Update with care: macOS users hit a credential-recovery loop,
a broken memory plugin, and stuck updates; other platforms face a milder tail"* (baseline: *"a macOS
update-repair lockup, broken session-archive reads and shaky upgrade paths"* — so the framing moved
from archives+upgrade-paths to **credential loop + broken memory plugin + stuck updates**).
`sentiment_summary` (verbatim excerpt): *"Sentiment is quiet rather than hostile: 60 tracked issues
but 0 total 👍 and max 0 reactions on any single issue against ~2.7M weekly downloads (Calibration
block), with 13 of 75 tracked issues already closed as fixed — users report real macOS credential,
update-repair, and session-state pain (#203343, #202925, #202213) but no groundswell of complaint."*
The baseline reported "3 👍 total across 60 tracked issues on ~2.8M weekly installs"; today it reads
**0 👍 and ~2.7M weekly** — the 👍 figure went **down** by 3, and the weekly-install denominator
tracks my −9 % demand contraction. The review layer flags that the analyst **understated #203343 and
#202925 by one severity notch** (raw data says "critical") and made two logical slips (crediting
#202213/#203211 as verdict drivers, and mislabelling #203343 as an update failure when it is a
credential-recovery failure). `flip_conditions` now require **all four** of the archive fix (#192743),
the LanceDB packaging fix (#203211), the update-executor lock (#202925) and the credential-recovery
loop (#203343) in a stable release before ⚠️ eases to ✅.
Source: https://clawstat.us/latest.json (raw: `tmp/2026-11-22/clawstat.json`)

---

## 8. Official surfaces

**F21 — All three official surfaces are byte-identical to the baseline; no new blog post.**
MD5 of the raw bytes fetched this run: `showcase.html` = **`e90d1564b23498328640776d35fe8060`**,
`press.html` = **`c1885462edd97eb7a32a4f91df814eef`**,
`rss.xml` = **`faa88be5eeb86b01628c51ee708e936e`** — all three **match the baseline md5s exactly**,
so showcase and press are now byte-identical for a **fourth** consecutive day, and the RSS feed is
unchanged since the baseline's own change (27 items, latest post "OpenClaw Isn't Free.",
Fri 20 Nov 2026 00:00:00 GMT, `https://openclaw.ai/blog/openclaw-isnt-free/`).
**No new post in the window.** Full item order: "OpenClaw Isn't Free." (Nov 20) → "OpenClaw is
coming to Shenzhen" (Nov 13, Claw Hack Dec 4–6) → "Use new models in OpenClaw without an update"
(Nov 6) → "Shattering Silos with OpenClaw Multiplayer" (Nov 5) → "Come Build With Us: OpenClaw Focus
Weeks" (Oct 21) → "How PJ helps small businesses use OpenClaw" (Oct 16). Note: the RSS item elements
carry only `title`, `link`, `guid`, `description`, `pubDate` — **no author or dc:creator element
exists in the feed**, so the baseline's "by Joe Pishgar" attribution is not derivable from
rss.xml and must have come from the blog page itself.
Source: https://openclaw.ai/showcase, https://openclaw.ai/press, https://openclaw.ai/rss.xml (raw: `tmp/2026-11-22/showcase.html`, `press.html`, `rss.xml`)

---

## 9. Deployment evidence

**F22 — 19 brand-new `topic:openclaw` repositories appeared 2026-11-20→2026-11-22; the standout is
a self-hosted personal-workspace project that hit 151 stars in ~2 days.** The
`topic:openclaw created:2026-11-20..2026-11-22` search returns `total_count = 19`, sorted by stars:
**prajwaljeevan50-web/openclaw-personal-workspace** — 151 stars, 0 forks, created
**2026-11-20T18:17:40Z**, pushed 2026-11-22T02:56:14Z, 3 commits in-window, topics
`ai-agents, automation, integrations, local-first, openclaw, personal-assistant, self-hosted,
task-automation, workflow`, described as *"A friendly, feature-rich workspace built with and for
its community."* Others in the new cohort: **VACInc/memfusion** (2026-11-21, *"OpenClaw memory
fusion: one memory slot owner that searches every enabled memory plugin"*), **cprite/nostr-a2a**
(agent-to-agent messaging over Nostr), **hinty-eu/hinty-agents** (approve/deny agents from smart
glasses), **leverframe/fleet-bridge** (bridge OpenClaw gateway agents to any MCP client),
**grawesky/agent-autopilot**, **VermilionQue/tiangong** (self-deployable Chinese family
life-workbench). The cohort is overwhelmingly **solo-authored, single-purpose glue** rather than
productised deployments.
Source: https://api.github.com/search/repositories?q=topic:openclaw+created:2026-11-20..2026-11-22&sort=stars (raw: `tmp/2026-11-22/repos_new.json`)

**F23 — The most substantive *in-window* third-party pushes are agent-platform and agent-security
projects rather than OpenClaw-specific deployments.** From `topic:openclaw` sorted by updated and
from `openclaw pushed:2026-11-21..2026-11-22`, with commit counts measured via the commits API
(Link-header `rel="last"` at `per_page=1`):
1. **stablyai/orca** — 132,336 stars, 8,445 forks, **302 commits in-window** (latest
   2026-11-22T09:30:04Z, "perf(mobile): shrink the phone page by 94 KiB…"); *"Orca lets you run a
   fleet of bots with your own subscription (e.g. Claude Code, Grok, Agy, Codex). Available on
   desktop, mobile and remote runtime."* — the highest-velocity OpenClaw-adjacent project in the window.
2. **paperclipai/paperclip** — 115,774 stars, 19,213 forks, **18 commits in-window** (latest
   2026-11-22T09:17:29Z, "fix(identity): read a provisioned agent key without an exclusive agent row
   lock"); *"The open-source app everyone uses to manage agents at work"*, topics include `acpx`,
   `agent-orchestration`, `agent-skills`.
3. **garrytan/gbrain** — 33,384 stars, **32 commits in-window** (latest 2026-11-22T09:30:52Z,
   "v0.60.762.0 release (#10054)"); *"Garry's Opinionated OpenClaw/Hermes Agent Brain"*.
4. **hashgraph-online/hol-guard** — 1,119 stars, 288 forks, **86 commits in-window** (latest
   2026-11-22T08:35:40Z, "fix(guard): admit a subagent brief and a task list under every harness");
   *"Open-source antivirus and firewall for AI agents: block risky tools, secret access, prompt
   injection, malicious packages, MCP servers, plugins, and skills"* — the only agent-security
   project with real in-window momentum.
5. **octogee-ai/octogee-cloud** — 5 stars but **254 commits in-window** (latest
   2026-11-22T09:23:13Z); *"The opinionated open source software factory built on OpenClaw,
   Mattermost and Git"*.
Smaller but genuinely OpenClaw-specific in-window pushes: **Eliav2/openclaw-openwebui-integration**
(16 stars, 4 commits — Open WebUI bridge rendering tool calls as cards),
**NewJerseyStyle/QemuClaw** (11 stars, 1 commit — one-click isolated QEMU deployment),
**sidebandstudio/clawtrate** (2 stars, 26 commits), **dr34m-cn/openclaw-docker** (3 stars, 100+ commits —
ghcr→Docker Hub sync every 10 minutes).
Source: https://api.github.com/search/repositories?q=topic:openclaw&sort=updated, https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-21..2026-11-22, and the per-repo commits API (raw: `tmp/2026-11-22/repos_topic.json`, `repos_pushed.json`, `c_*.json`, `cc_*.json`, `h_*.txt`)

---

## Negatives & caveats

1. **No release, no publish, no advisory** in the window. Zero npm publishes after 2026-11-19T16:52:13.687Z,
   zero GitHub Releases after 2026-11-19T17:26:46Z, zero advisories after 2026-11-19T02:01:59Z. The window
   is a maintenance/troubleshooting window, not a shipping window.
2. **GitHub Search `total_count` is complete but item lists are capped at 100 rows.** For new issues
   (117), new PRs (314), merged PRs (261) and enterprise merges (71) I report the exact `total_count`;
   only the first 100 items (30 for the unsorted new-issue query) were individually inspected. P0/P1/P2/P3
   tallies are complete `total_count`s from label-scoped queries.
3. **Two independent method disagreements, resolved and disclosed.** (a) Merged PRs: search says 261,
   direct `pulls?state=closed` list says 252 (list truncation at 300 rows) — I report 261.
   (b) Enterprise merged PRs: search and direct list **both** say 71, which is the notable result.
   (c) `open_issues_count` 8,741 vs my 5,152 + 3,590 = 8,742 — a 1-count snapshot skew, not an error.
4. **Baseline's "5 days" remediation-trail age for GHSA-pw3x does not reconcile with the advisory's own
   `published_at` (2026-11-19T02:01:59Z).** I recomputed from raw timestamps: **3.31 days** at window end.
   The baseline figure is not carried forward.
5. **clawstat's `known_issues` list is hard-capped at 60** (`issues_capped: true`, `issues_cap: 60`) while
   `calibration.tracked_total` is 75 — the visible list is therefore **not** the full tracked set, and its
   severity mix (2 critical / 55 high / 3 medium) is a property of the cap, not of the backlog.
6. **clawstat's own reviewer flags the analyst's severity calls as one notch low** on #203343 and #202925
   (raw data says "critical"), and logs two logical errors. Its verdict is ⚠️, but its "care" framing is
   analyst-authored, not purely deterministic.
7. **npm's 2026-11-22 = 0 is a reporting lag, verified three ways** (range-end zero, point query for
   11-22 = 0, point query for the future 11-23 = 0, while 11-21 = 497,858 is complete and the series
   contains no interior zeros). Last complete day is 2026-11-21.
8. **The GitHub rate limit was hit repeatedly mid-run** (unauthenticated, 60 core / 10 search per minute);
   several `search/issues` calls returned `{"message":"API rate limit exceeded"}` and had to be re-run with
   sleeps. All counts reported here come from a successful (non-error) payload — the empty
   `rfc40`/`rfc42` "total: None" results were re-run successfully (`rfc42d.json`, `total_count = 14`).
   The `gh` CLI token remains invalid, as noted in the baseline.
9. **Enterprise release array is still empty** — `releases?per_page=5` returns `[]`, so there is still no
   GitHub Release in the enterprise repo at all.
10. **Deployment-evidence star counts are raw GitHub values and should be treated as such** — several
    third-party repos show six-figure star counts with very recent creation dates, and I did not
    independently verify whether those stars are organic.
11. The previous window's PR **#202941** ("enforce the session permission mode on every Gateway tool
    call") remains the only privilege-scope-narrowing merge in the recent record; it is still **not
    linked** to GHSA-pw3x-g8v8-fvj2, and no comparable merge occurred in this window.

---

## Source list

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw
- https://api.npmjs.org/downloads/range/2026-10-25:2026-11-22/openclaw
- https://api.npmjs.org/downloads/point/2026-11-21/openclaw
- https://api.npmjs.org/downloads/point/2026-11-22/openclaw
- https://api.npmjs.org/downloads/point/2026-11-23/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10
- https://api.github.com/repos/openclaw/openclaw/commits?since=2026-11-21T09:28:00Z&per_page=1
- https://api.github.com/repos/openclaw/openclaw/pulls?state=closed&sort=updated&direction=desc
- https://api.github.com/repos/openclaw/openclaw/issues/202925 (also /202213, /202693, /202643, /203343)
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-21T09:28:00Z..2026-11-22T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:P0+created:<window> (also P1, P2, P3)
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+state:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+state:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+GHSA-pw3x
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=100
- https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-21T09:00:00Z
- https://api.github.com/repos/openclaw/catalog/pulls?state=open
- https://api.github.com/repos/openclaw/catalog/pulls?state=all&per_page=10
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/repos/openclaw/openclaw-enterprise/pulls?state=closed&sort=updated&direction=desc
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+RFC-0042
- https://api.github.com/repos/openclaw/openclaw-enterprise/pulls/6364 (also /4889, /6336, /6434, /6435, /6442)
- https://clawstat.us/latest.json
- https://openclaw.ai/showcase
- https://openclaw.ai/press
- https://openclaw.ai/rss.xml
- https://api.github.com/search/repositories?q=topic:openclaw&sort=updated&per_page=30
- https://api.github.com/search/repositories?q=topic:openclaw+created:2026-11-20..2026-11-22&sort=stars
- https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-21..2026-11-22&sort=updated
- per-repo commits API for stablyai/orca, paperclipai/paperclip, garrytan/gbrain,
  hashgraph-online/hol-guard, octogee-ai/octogee-cloud, Eliav2/openclaw-openwebui-integration,
  NewJerseyStyle/QemuClaw, sidebandstudio/clawtrate, dr34m-cn/openclaw-docker,
  prajwaljeevan50-web/openclaw-personal-workspace

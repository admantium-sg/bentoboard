# OpenClaw Platform Findings — 2026-11-24

**Window:** 2026-11-23T09:28:00Z → 2026-11-24T09:28:00Z
**Task:** DIAC daily-insight-accumulator, Task 1 (platform)
**Baseline:** 2026-11-23 run

---

## 1. Two beta releases shipped in-window; `latest` did **not** move

- npm `dist-tags` now: `latest=2026.11.7`, `beta=2026.11.10-beta.3`, `extended-stable=2026.10.33`.
  The `beta` tag moved `2026.11.10-beta.1` → `2026.11.10-beta.3` (**two** beta publishes inside the window).
- npm publish timestamps: `2026.11.10-beta.2` @ **2026-11-23T11:39:22Z**, `2026.11.10-beta.3` @ **2026-11-24T03:05:25Z**.
  GitHub release timestamps: `v2026.11.10-beta.2` @ 2026-11-23T12:48:59Z, `v2026.11.10-beta.3` @ 2026-11-24T03:28:03Z.
- **No new stable**: `2026.11.7` (npm 2026-11-23T01:21:13Z) remains `latest`, unchanged from the baseline.
- `latest` has therefore now been unchanged for ~32 h while two betas shipped — the same "betas accumulate, stable does not" pattern as the 11-23 run.
- Source: https://registry.npmjs.org/-/package/openclaw/dist-tags, https://registry.npmjs.org/openclaw, https://api.github.com/repos/openclaw/openclaw/releases?per_page=8

## 2. `2026.11.10-beta.3` is a strict superset of beta.2 and adds a **39-entry deprecation schedule**

- PR-reference diff beta.2 → beta.3: **433 → 759 PR references**, **+326 new**, **0 dropped** (strict superset).
- Section list in beta.3: `Highlights`, `Changes`, `Fixes`, **`Upcoming deprecations`**, `Complete contribution record`, `Release verification`.
- The **"Upcoming deprecations"** section announces **39 deprecation/removal windows, 38 dated 2026-11-29 and 1 dated 2026-11-30** (i.e. ~5–6 days after this beta). The list is dominated by `doctor-*` config retirements (`doctor-phase1-retired-runtime-config`, `doctor-phase4-product-config-retirements`, `doctor-runtime-tuning-knobs-purge`, `doctor-final-layout-polish`, `doctor-tier-eval-tranche`), plus channel/TTS/MCP/canvas/codex/web-search config-owner moves and two SDK changes (`plugin-sdk-session-agent-resolution-aliases`, `agent-harness-credential-prompt-string-argument`).
- **No "Breaking changes" section exists in either beta.2 or beta.3** — verified by string search (0 occurrences of "Breaking"/"breaking" in both bodies). This is the opposite of stable `2026.11.7`, which *did* ship three explicit breaking SDK changes under #175837 (already reported).
- **Meaning:** the betas are accumulating a large, dated breaking-surface debt while the stable line — the one most users are on — stays frozen. The 2026-11-29/30 windows are the first *dated* migration deadlines the project has published in the tracked series.
- Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=8 (bodies of `v2026.11.10-beta.3`, `v2026.11.10-beta.2`)

## 3. `2026.11.10-beta.3` new Highlights: update recovery across schema change/reboot, cross-restart subagent delivery, OpenCode sign-in

- Highlights as shipped: **Update recovery** across package *and* source updates including "updates that cross a schema change or restart the machine" (#200273, #200366, #200460, #200866, #200994, #201600, @fuller-stack-dev); **Reliable delegated work** — keep completed subagent answers across Gateway restarts and while sibling tasks still run (#200279, #200649, #200823, #190999, #201563, @steipete); **Responsive long-running chats** — less memory/main-thread work when compacting large histories (#201304, #188397, #202234, #202547); **Private credentials and attachments** — preserve SecretRef-backed credentials when editing settings, stop downloading Signal view-once attachments (#200539, #197319, #201428, #196841); **Provider sign-in** — browser sign-in to **OpenCode Console / OpenCode Go** with signed-in model discovery (#202949, #202976).
- Also new in `Changes`: **MCP configuration applied from CLI without stopping the Gateway** (#200582); **MiniMax retired models withdrawn + PDF reading enabled** (#203998); ChatGPT model availability refreshed independently of release/npm (#201130, #201493, #202618, #202490, #167460).
- Also merged in-window, outside the release body: `feat: add GLM-5.4 for Z.AI Coding Plan users` (#204522, merged 2026-11-24T09:11Z).
- **Meaning:** beta.3 is the release that would clear the four blockers clawstat names as the flip conditions (update-recovery cluster, subagent-result retention, credential loss #204214, and the Discord nativeSkills hang #204283), *if* it ships as stable. As a beta it does not help the installed base.
- Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=8, https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z

## 4. Issue/PR velocity held, but the severity mix rotated toward P1

| Metric | 2026-11-24 window | 2026-11-23 window | Δ |
|---|---|---|---|
| New issues | **159** | 156 | +3 |
| New PRs | **368** | 406 | −38 |
| Merged PRs | **227** | 245 | −18 |
| Open issues (label-scoped) | **5,243** | 5,243 | 0 |
| Open PRs | **3,788** | 3,690 | +98 |
| `open_issues_count` field (incl. PRs) | **9,033** | 8,935 | +98 |
| P0 new | **8** | 9 | −1 |
| P1 new | **27** | 18 | **+9** |
| P2 new | **101** | 113 | −12 |
| P3 new | **22** | 12 | +10 |

- Repo counters: **stars 395,141** (+70 vs 395,071), **forks 82,968** (+11 vs 82,957), `pushed_at` 2026-11-24T09:28:12Z, `subscribers_count` 1,693.
- **Meaning:** throughput softened slightly (merges −18, new PRs −38) while the *P1* bucket grew by half (18 → 27). Open PR backlog rose 98 in 24 h — faster than the merge rate — so the queue is growing again.
- The eight new P0s are again mostly release/update plumbing plus a **new self-setup theme**: #204258 "Can't set up OpenClaw with 'AllSigned' GPO" (enterprise-policy install), #204085 "Windows release trial cannot replace the state WAL and rolls back a schema-changing update", #204166 "Update failure: database-schema-preflight (2026.9.3)", #204225 "Update failure: package-install-omit-optional", #204198 "Update failure: gateway-stop-unverified", #204141 "Telegram turns repeatedly fail with incomplete turn until a same-session CLI invocation restores replies", #204113 "WhatsApp setup in the Control UI takes 13 terminal-style screens and the scan isn't picked up on its own", #204168 "Gateway crash-loops at startup when any tailscale serve handler is a path share".
- #204168 is a genuinely novel failure mode: **an unrelated process on the host** (`tailscale serve --https=10447 <directory>`) makes the managed Gateway re-post the whole serve config as a non-root operator, tailscaled rejects it (`401 must be root`), and the Gateway crash-loops under systemd and never self-recovers — and the restart-loop breaker then suppresses channel auto-start.
- The 27 new P1s include a **memory-exhaustion report** (#204494 "Gateway RSS grows to 4-5GB in 1-2 hours: 3.6GB of exactly-256KB anonymous rw mappings"), **agent-DB admission breakage** (#204425 "Web UI shows only 1 agent while CLI lists 3 … since 11.4→11.5 upgrade"), and a **PostgreSQL migration crash leaving no Gateway running** (#204363).
- Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z, …+is:pr+is:merged+merged:<window>, …+is:pr+created:<window>, …+is:issue+is:open, …+is:pr+is:open, …+is:issue+label:P0/P1/P2/P3+created:<window>, https://api.github.com/repos/openclaw/openclaw

## 5. Security posture is **unchanged**: no new advisory, GHSA-pw3x still unremediated in public record

- `GET /repos/openclaw/openclaw/security-advisories?per_page=10` returns **the same 10 advisories** as the baseline; **no new advisory in-window**. The newest is still `GHSA-pw3x-g8v8-fvj2` (published 2026-11-19T02:01:59Z); the other nine are all from 2026-09-11.
- `GHSA-pw3x-g8v8-fvj2` state: `cve_id = null` (still **no CVE assigned**), `state = published`, `updated_at` still **2026-11-19T02:01:59Z** — i.e. **the advisory record has not been touched in 5 days**. Severity `high`, CVSS 3.1 **8.8** (`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H`), CWE-863 (Incorrect Authorization), summary "OpenClaw delegation could skip approval for restricted agents".
- Vulnerable ranges: `>= 2026.9.2, < 2026.10.33` (patched 2026.10.33) and `>= 2026.11.1, < 2026.11.4` (patched 2026.11.4).
- **Still 0 linked issues and 0 linked PRs** (`search/issues?q=repo:openclaw/openclaw+GHSA-pw3x-g8v8-fvj2` → total_count 0). No in-window remediation signal at all.
- Source: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10, https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2, https://api.github.com/search/issues?q=repo:openclaw/openclaw+GHSA-pw3x-g8v8-fvj2

## 6. clawstat: verdict still ⚠️, but the **status key changed shape** from "wait" to "care"

- `assessed_at` 2026-11-24T01:47:48Z (vs 2026-11-23T01:40:56Z), `version 2026.11.7`, `recommendation "⚠️"`, `confidence "medium"`.
- **Status key changed**: yesterday `status.key = "wait"` / label **"Too new to call"** / `early_read "Update with care"` → today `status.key = "care"` / label **"Update with care"** / `early_read: null`. The tracker has now stopped hedging on recency and is calling the version outright.
- Reviewer behaviour changed too: yesterday `agreed: true, refined: false` → today **`agreed: false, refined: true`** — the validator *disagreed with the primary assessment and refined it*, and flagged two concrete errors (notably that #204135 is counted as a 2026.11.7 issue even though its body reports the defect on 2026.11.10).
- `evidence_gate`: verdict ⚠️, **blockers: [203869]** (1 credible blocker), `widespread: []`, `blocker_count: 1`, `floor_applied: false`.
- `freshness`: `days_since_release: 1`, `runs_assessed: 4`, `version_specific_issues: 59`, `carried_over_issues: 1`. `calibration`: `npm_weekly_downloads: 2,858,266`, `tracked_total: 62` (was 6), `closed_completed: 3`.
- `recommended_version`: **2026.11.5** (kind `settled`, age 7 days, gate ✅, 0 blockers, 11 versions considered) — i.e. clawstat's own advice is to roll *back* to 2026.11.5 rather than stay on 2026.11.7.
- **The blocker #203869 (gRPC code-mode BrokenPipe tool-execution regression, macOS) is still `open` with `clawsweeper_decision: unknown`, `fixed_in: null`, `has_workaround: false`** — and a repo-wide search for "203869" returns exactly **1** result (the issue itself): **no PR, no linked discussion, no fix staged**. The Discord blocker #204283 (nativeSkills hang) likewise remains open with a documented workaround (`channels.discord.commands.nativeSkills: false`).
- Source: https://clawstat.us/latest.json

## 7. npm downloads: last complete day unchanged; rolling 7-day still **−5.4 %**

- `/downloads/range/2026-10-20:2026-11-24/openclaw`: **2026-11-23 = 0** and **2026-11-24 = 0**. Both are inside the ~48 h reporting-lag window → **reporting lag, not a collapse**. The last **complete** day remains **2026-11-22 = 452,883** (identical to the baseline value).
- Rolling 7 complete days (2026-11-16 → 2026-11-22): 483,549 + 390,660 + 346,941 + 294,218 + 392,157 + 497,858 + 452,883 = **2,858,266** (avg 408,324/day).
- Prior 7 complete days (2026-11-09 → 2026-11-15): 349,424 + 427,925 + 429,437 + 495,873 + 478,823 + 471,274 + 368,783 = **3,021,539** (avg 431,648/day).
- **Δ = −163,273 = −5.40 %** — the identical figure to the 11-23 baseline, because no new complete day has landed yet.
- Independent cross-check: npm `point/last-day` = 452,883 (2026-11-22) and `point/last-week` = 2,858,266 — both match.
- Source: https://api.npmjs.org/downloads/range/2026-10-20:2026-11-24/openclaw, https://api.npmjs.org/downloads/point/last-day/openclaw

## 8. Enterprise repo: merge throughput **halved**, still **no GitHub Release**

- `openclaw/openclaw-enterprise`: **stars 486** (+1 vs 485), **forks 128** (+1 vs 127), `open_issues_count` **494** (vs 460, +34), `pushed_at` 2026-11-24T09:26:52Z.
- Label-scoped split: **131 open issues**, **363 open PRs** (baseline reported 1 open PR — see caveats).
- **83 merged PRs in-window**, down from **169** in the 11-23 window (**−51 %**). This is the single largest platform-side velocity swing of the day and reverses the prior day's "more than doubled" reading.
- **125 new PRs/issues opened in-window** — PR titles cluster around **OpenShell credential custody**, **IAM principal/role binding**, **Kubernetes ownership checks**, **Helm/IPv6/migration validation**, and **Console import/export across controller upgrades** — i.e. hardening of a shipped enterprise control plane rather than new surface area.
- **`releases?per_page=5` STILL returns `[]`** — the enterprise repo has published **no GitHub Release** since creation (2026-08-29), now ~87 days. Enterprise artifacts are still distributed without a versioned release trail.
- Source: https://api.github.com/repos/openclaw/openclaw-enterprise, https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5, https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z, …+created:<window>

## 9. Catalog pipeline fully green — the 26 h outage has not recurred

- `openclaw/catalog/actions/runs?per_page=60`: **13 in-window runs, 13 successful, 0 failures** — 6 × `Publish catalog` (12:31Z, 16:26Z, 20:24Z on 11-23; 00:39Z, 04:27Z, 08:28Z on 11-24), 6 × `pages build and deployment`, and **1 × CodeQL (success, 2026-11-24T05:56Z)**.
- The 10 non-success conclusions in the 60-run window are all `skipped` ClawSweeper Dispatch runs, all dated **2026-11-21** (out-of-window).
- The publish cadence is a clean ~4 h.
- Source: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=60

## 10. Official surfaces: **still frozen** — no showcase, no press, no blog post in-window

| surface | md5 2026-11-24 | md5 2026-11-23 | verdict |
|---|---|---|---|
| `openclaw.ai/showcase` | `e90d1564b23498328640776d35fe8060` (150,922 B) | `e90d1564b23498328640776d35fe8060` | **byte-identical, 4th consecutive day** |
| `openclaw.ai/press` | `c1885462edd97eb7a32a4f91df814eef` (74,763 B) | `c1885462edd97eb7a32a4f91df814eef` | **byte-identical** |
| `openclaw.ai/rss.xml` | `faa88be5eeb86b01628c51ee708e936e` (11,987 B) | `faa88be5eeb86b01628c51ee708e936e` | **byte-identical** |

- RSS now has **27 items**; newest is still **"OpenClaw Isn't Free." (Fri, 20 Nov 2026)**, then "OpenClaw is coming to Shenzhen" (13 Nov), "Use new models in OpenClaw without an update" (6 Nov), "Shattering Silos with OpenClaw Multiplayer" (5 Nov).
- Press page's newest entry remains **TechCrunch, Jun 30, 2026** ("OpenClaw is finally available on Android and iOS") — no November press coverage.
- **Meaning:** two betas, 759 PR references and a 39-item deprecation schedule shipped; the showcase, press and blog surfaces said nothing at all. The "communications silence" pattern now spans 8+ consecutive runs.
- Third-party coverage does exist but is derivative, not primary: `theclawreport.com` (fetched 2026-11-24T09:30:56Z) carries a Nov 23 v2026.11.7 item and an "OpenClaw News (Nov 24)" front-page line — it recycles the docs release notes and adds no new facts. `senx.ai/openclaw` published a Nov 23 round-up. No new *enterprise customer* deployment evidence surfaced.
- Source: https://openclaw.ai/showcase, https://openclaw.ai/press, https://openclaw.ai/rss.xml, https://www.theclawreport.com/

## 11. Enterprise-adoption evidence: no new customer deployments found

- Web searches for enterprise deployment/adoption announcements in the window surfaced only **pre-existing** material: Red Hat's blog on contributing to OpenClaw Enterprise, VentureBeat's "free enterprise control plane … backed by OpenAI, Red Hat and NVIDIA", the Sept 29 2026 OpenClaw Enterprise launch coverage, and third-party explainers (openclawlaunch.com, mintive.com, lyzr.ai).
- **No in-window announcement of a named enterprise customer deployment, production rollout, or contract** was found on any searched surface.
- The only in-window third-party OpenClaw item found was derivative release coverage (theclawreport.com, senx.ai).
- Source: web_search results for "OpenClaw enterprise deployment customer announcement November 2026" and "OpenClaw enterprise control plane Red Hat adoption news"

---

### Sources

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw
- https://api.npmjs.org/downloads/range/2026-10-20:2026-11-24/openclaw
- https://api.npmjs.org/downloads/point/last-day/openclaw
- https://api.npmjs.org/downloads/point/last-week/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10
- https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-23T09:28:00Z..2026-11-24T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+is:open / +is:pr+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:{P0,P1,P2,P3}+created:<window>
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+created:<window>
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=60
- https://clawstat.us/latest.json
- https://openclaw.ai/showcase, https://openclaw.ai/press, https://openclaw.ai/rss.xml
- https://www.theclawreport.com/

### Caveats / confidence

**Could NOT verify:**
- **No new enterprise *customer* deployment** could be confirmed. Searches were broad but the search provider (DuckDuckGo) returned a bot-detection challenge on 2 of 4 queries; a primary-source sweep of customer announcements was therefore incomplete. Absence of evidence here is weak.
- The **press page's newest-item date (TechCrunch, Jun 30 2026)** was carried over from prior runs' established baseline; I confirmed the press md5 is byte-identical to yesterday but did not re-parse the press item list from the fresh capture.
- **Enterprise repo has no GitHub Release** — confirmed again as `[]`; I did not check npm/dist-tags for an enterprise package, so "no versioned release trail" is verified for GitHub Releases only.
- Whether any of the 39 dated deprecations (2026-11-29/30) have since been pulled — that window is 5–6 days after this beta, so no signal is expected yet, and I did not attempt to verify.
- **"Breaking changes" absence** in beta.2/beta.3 was verified by literal string search on the release bodies only. A breaking change phrased without the word "breaking" would not be caught.

**Anomalies:**
- **npm 2026-11-23 and 2026-11-24 both report 0 downloads.** These are inside the reporting-lag window (npm's `point/last-day` endpoint still resolves to 2026-11-22). **This is lag, not zero usage.** The −5.4 % rolling figure is therefore unchanged from the baseline by construction — no new complete day had landed by the window close.
- **`open_issues_count` 9,033 vs label-scoped 5,243 issues + 3,788 PRs = 9,031** — a 2-count snapshot skew, consistent with the 1-count skew observed on 11-22; the field and the split are separate queries and cannot be expected to agree exactly at one instant.
- **Enterprise "1 open PR" in the 11-23 baseline vs 363 open PRs today** — the baseline figure appears to have been an artifact of a query that also matched closed PRs or was sampled mid-refresh; today's 363 is the label-scoped `is:pr+is:open` count and should be preferred. The enterprise **merged-PR count halved (169 → 83)**, but because the baseline open-PR figure was likely wrong, the merge-rate comparison is the sounder of the two.
- **2 of 4 web searches failed** with DuckDuckGo bot-detection; the two that succeeded were both enterprise/release themed, so search coverage of security and community surfaces this window is thinner than usual.
- The GitHub security-advisories list is **capped at the 10 most recent**; a new advisory older than the nine 2026-09-11 ones would not appear, though any *newer* advisory would.

**Call budget used:** 3 `web_search` (1 failed on bot-detection) + 1 `web_fetch`, plus ~30 direct `curl` API/HTTP calls against npm registry, GitHub API, clawstat.us and openclaw.ai. All raw payloads are stored in `tmp/2026-11-24/` (`npm_dist_tags.json`, `npm_pkg.json`, `npm_downloads.json`, `gh_repo.json`, `gh_releases.json`, `gh_advisories.json`, `ghsa_pw3x.json`, `gh_new_issues.json`, `gh_new_issues_top.json`, `gh_new_prs.json`, `gh_merged_prs.json`, `gh_merged_top.json`, `gh_open_issues.json`, `gh_open_prs.json`, `gh_p0.json`, `gh_p1.json`, `gh_P2.json`, `gh_P3.json`, `gh_ent_repo.json`, `gh_ent_releases.json`, `gh_ent_prs.json`, `gh_ent_new.json`, `gh_ent_oi.json`, `gh_ent_op.json`, `gh_catalog_runs.json`, `clawstat_latest.json`, `oc_showcase`, `oc_press`, `oc_rss.xml`).

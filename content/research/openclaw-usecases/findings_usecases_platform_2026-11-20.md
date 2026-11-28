# Platform Findings — OpenClaw — 2026-11-20

**Research window:** 2026-11-19T09:28:00Z → 2026-11-20T09:28:00Z
**Captured:** 2026-11-20 ~09:29Z–09:36Z (all API reads done 2026-11-20T09:29Z–09:36Z)
**Focus:** platform news, releases, security incidents, enterprise adoption.
**Method:** raw JSON API reads (npm registry, npm downloads API, GitHub REST/search API, GitHub Actions API, clawstat.us). Every number below was taken from the raw JSON responses captured during this run. No speculative values.

---

## 1. Releases & dist-tags — NEW stable 2026.11.6 + new beta (in-window)

**New npm versions published in-window** (source: `https://registry.npmjs.org/openclaw` → `time` map):

| version | npm publish timestamp (UTC) | in-window? |
|---|---|---|
| **2026.11.10-beta.1** | 2026-11-19T15:09:49.383Z | ✅ yes (prerelease) |
| **2026.11.6** | 2026-11-19T16:52:13.687Z | ✅ yes (stable) |

Registry `modified`: 2026-11-19T16:52:14.078Z.

**New GitHub Releases in-window** (source: `https://api.github.com/repos/openclaw/openclaw/releases?per_page=8`):

- **v2026.11.6** — published **2026-11-19T17:26:46Z**, `prerelease: false`, https://github.com/openclaw/openclaw/releases/tag/v2026.11.6
  - Release body: **406 commits · 386 pull requests · 157 contributors**. Notes are split into a human "Release notes" page (docs.openclaw.ai/releases/2026.11.6) and a plain-Markdown "Changelog" (raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.11.6.md).
- **v2026.11.10-beta.1** — published **2026-11-19T15:45:29Z**, `prerelease: true`, https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.1
  - Highlights (verbatim from release body): agent templates from ClawHub packages via a single `CLAW.md` manifest (#195707, #196322, #196348); **OpenClaw ID** — connect nodes through the ID tunnel, approve them from Access, link owner devices to your own identity (#193982, #194007, #197628); browser handoff from the Browser panel without stopping the agent (#197928); chat control — send pending steering messages without stopping a run, edit queued messages, keep composer drafts across app restarts (#193665, #197846, #197908); automatic update schedules with an incoming-release pre-update rehearsal (#193713, #197922); Gateway state migration via copy-and-swap instead of in-place mutation (#198389); durable background commands across macOS Gateway restarts (#197474). Access gains a **guest member role with sandboxed session tools** (#197748); optional usage-ranked tool index incl. MCP (#197128, #198348); Parallel Decisions provider support (#194537).
- **No enterprise GitHub Release** — `https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5` returned an empty array `[]` (5 bytes).

**dist-tags changed in-window** (source: `https://registry.npmjs.org/-/package/openclaw/dist-tags`):

| tag | yesterday (2026-11-19 report) | now (2026-11-20) |
|---|---|---|
| `latest` | 2026.11.5 | **2026.11.6** ✅ changed |
| `beta` | 2026.11.5 | **2026.11.10-beta.1** ✅ changed |
| `extended-stable` | 2026.10.33 | 2026.10.33 — unchanged |

**Negative finding:** no new npm version, no new GitHub Release and no dist-tag change happened in the *previous* window either (2026-11-18T09:28Z→2026-11-19T09:28Z); the first new release since 2026.11.5 (published 2026-11-17T09:59:33Z) lands in this window.

---

## 2. Security — NO new advisory in-window; yesterday's advisory is carry-over

Source: `https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10` (10 advisories returned).

- **Negative finding: no new GitHub Security Advisory was published in-window.** The newest advisory by publish time is **GHSA-pw3x-g8v8-fvj2**, published **2026-11-19T02:01:59Z** — i.e. **7 hours 26 minutes before the window opens** → **carry-over from yesterday's report**, not a new finding.
- **Carry-over detail (re-verified raw JSON):** GHSA-pw3x-g8v8-fvj2, severity `high`, state `published`, `updated_at` still `2026-11-19T02:01:59Z` (no update in-window), **`cve_id: null`** — **no CVE id has been assigned yet**. Summary: "OpenClaw delegation could skip approval for restricted agents". Two vulnerable ranges, both patched:
  - `>= 2026.9.2, < 2026.10.33` → patched in **2026.10.33**
  - `>= 2026.11.1, < 2026.11.4` → patched in **2026.11.4**
  - The newly released **2026.11.6** is newer than both patched versions, so it is not in either vulnerable range.
- **Negative finding: no follow-up advisory, no advisory update, and no CVE assignment** for GHSA-pw3x-g8v8-fvj2 in-window. The remaining 9 advisories are all from 2026-09-11 (8 medium, incl. GHSA-3mq7-q27j-mq7q and GHSA-9m4p-cqp4-jppq `high`) and are unchanged.
- **Negative finding:** no new `impact:security`-labeled issue was created in-window among the 187 new issues (the `impact:security` label appears 7 times across the whole in-window batch, all on pre-existing/older issues — see §5).

Source: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10

---

## 3. npm downloads — declining trend, latest COMPLETE day is 2026-11-18

Source: `https://api.npmjs.org/downloads/range/2026-10-20:2026-11-20/openclaw`

> **Publication-lag note:** 2026-11-19 and 2026-11-20 both read **0** — the npm downloads API lags ~1–2 days. The latest **complete** day is therefore **2026-11-18**. The in-window release (2026.11.6, published 2026-11-19T16:52Z) is **not yet reflected in the download numbers**.

| day | downloads |
|---|---|
| 2026-11-18 (latest complete) | **346,941** |
| 2026-11-17 | 390,660 |
| 2026-11-11 (same weekday, -7d) | 429,437 |
| 2026-10-21 (-28d) | 561,057 |

- **Day-over-day** (11-18 vs 11-17): **−43,719 (−11.2 %)**
- **Week-over-week** (11-18 vs 11-11): **−82,496 (−19.2 %)**
- **Month-over-month** (11-18 vs 10-21): **−214,116 (−38.2 %)**
- Rolling 7 complete days (11-12→11-18): **3,035,903** — this exactly matches clawstat's `calibration.npm_weekly_downloads = 3035903` (independent cross-check ✅). Prior 7 complete days (11-05→11-11): 2,977,229 → weekly total is **+1.97 %** even though the last day fell hard (mid-week drop concentrated at the end of the window).
- 30-day complete-day sum (10-21→11-18): **12,515,567**.

Source: https://api.npmjs.org/downloads/range/2026-10-20:2026-11-20/openclaw

---

## 4. GitHub counters — main and enterprise

Sources: `https://api.github.com/repos/openclaw/openclaw`, `https://api.github.com/repos/openclaw/openclaw-enterprise` (read 2026-11-20T~09:30Z).

| metric | openclaw/openclaw | Δ vs yesterday | openclaw/openclaw-enterprise | Δ vs yesterday |
|---|---|---|---|---|
| stars | **394,867** | **+78** | **480** | **+1** |
| forks | 82,944 | (yesterday not recorded) | 125 | (yesterday 124) → +1 |
| open issues (+PRs) | **8,585** | **+163** | **444** | **+19** |
| pushed_at | 2026-11-20T09:28:41Z | — | 2026-11-20T09:25:05Z | — |
| updated_at | 2026-11-20T09:20:10Z | — | 2026-11-19T17:22:46Z | — |
| subscribers | 1,691 | — | — | — |

Note: GitHub's `open_issues_count` **includes pull requests**; yesterday's 8,422 / 425 were taken the same way, so the deltas are like-for-like.
Enterprise repo created 2026-08-29T02:32:55Z; main repo created 2025-11-24T10:16:47Z.

---

## 5. New issues in-window — 187 created, 10 P0 / 26 P1

Source: `https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100&sort=created` (pages 1–2, `total_count = 187`, 187 items retrieved).

- **187 new issues** in-window. **10 labeled P0, 26 labeled P1** (36 total priority-0/1).
- **0 of the 187 carry a `pull_request` field** → all are true issues, not PR-echo noise. However, the labeling is heavily automated:
  - **113/187 (61 %)** carry `clawsweeper:source-repro`; 101 carry `issue-rating: 🦞 diamond lobster`; 48 `clawsweeper:needs-maintainer-review`; 46 `clawsweeper:queueable-fix`; 37 `clawsweeper:linked-pr-open`.
  - **Label concentration:** `P2` 122, `P1` 26, `P3` 25, `P0` 10. Impact labels: `impact:ux-friction` 75, `impact:other` 44, `impact:session-state` 18, `impact:auth-provider` 15, `impact:ux-release-blocker` 10, `impact:message-loss` 10, `impact:crash-loop` 7, `impact:security` 7.
  - **Author concentration (triage-noise indicator):** `anmol0b` 22, `daniel-lxs` 19, `jalehman` 10, `vincentkoc` 10, `yunligou711-commits` 7, `letsc4` 4, `evemorgen` 3, `Satoshi-Kusumoto` 3, `NeoGeoSNK` 3, `hannnnn-l` 3, `mmm7053455-tech` 3, `etzelm` 2 — the top 5 authors wrote 68/187 (36 %). The `clawsweeper:source-repro` cohort is dominated by the same accounts (anmol0b 21, daniel-lxs 15, vincentkoc 6, yunligou711-commits 5, letsc4 4). → **The P0/P1 pool is partly a structured triage/reporting pipeline, not 36 independent human bug reports.** Treat "36 P0/P1" as an upper bound on distinct real-world regressions.

### The 10 new P0s (titles verbatim)

| # | created | title |
|---|---|---|
| 202309 | 2026-11-20T06:53:49Z | [Bug]: install-cli.sh finishes without saying ~/.openclaw/bin is not on PATH, so `openclaw onboard` is not fou… |
| 202258 | 2026-11-20T05:25:05Z | [Bug]: Bootstrap-token connect fails with 'duplicate column name: setup_id' when device_bootstrap_tokens alrea… |
| 202185 | 2026-11-20T02:33:55Z | Update failure: requested (2026.11.10-beta.1) |
| 202045 | 2026-11-19T20:11:37Z | Control UI: Connect a device can't create a setup code on a new install and offers no way forward |
| 202037 | 2026-11-19T20:03:31Z | [Bug]: openclaw dashboard can never start or install the Gateway (--yes and the start prompt are unreachable) |
| 202012 | 2026-11-19T19:26:32Z | [Bug]: macOS update blocked by publication journal device identity mismatch on 2026.11.1 |
| 201993 | 2026-11-19T18:28:25Z | [Bug]: 2026.11.1 backup probe timeout blocks self-upgrade to releases containing the fix |
| 201986 | 2026-11-19T18:19:37Z | iOS: guide new users who don't have a Gateway yet |
| 201982 | 2026-11-19T18:17:03Z | Update failure: package-update (2026.11.1) |
| 201980 | 2026-11-19T18:15:48Z | Update failure: package-update (2026.11.2) |

**Pattern (genuinely new signal):** 4 of the 10 new P0s are **updater failures on 2026.11.1 / 2026.11.2** (#201993, #201982, #201980, #202012) and one is an update failure against the **new 2026.11.10-beta.1** (#202185). The upgrade path — not a new feature — is the dominant P0 cluster, and it is hitting the freshly shipped 2026.11.x line.

### The 26 new P1s — the ones that matter most

- **202265** "Gateway stays stopped after a failed update check from 2026.9.37 to 2026.11.6" (2026-11-20T05:37:21Z) → **already fixed in-window**: PR **#202301** "fix(update): bring the Gateway back after a failed upgrade" merged **2026-11-20T08:42:24Z**.
- **202246** "2026.11.6: goal-continuation prompts repeatedly produce duplicate reminder messages in Discord" (05:03:37Z) → **regression on the brand-new 2026.11.6**, same symptom class as #202270 "Active goal keeps posting continuation replies to Discord after context budget is exhausted" (05:40:59Z). Both appear in clawstat's top known issues (#202246 is #3 on the high-severity list).
- **202213** "[Bug]: 2026.11.6 refuses to read compressed session archives; please ship #192743 and #193548 in a stable release" (03:28:47Z) → **the #1 high-severity known issue in clawstat's 2026.11.6 assessment**; it is an *archive-read* regression on the new release.
- **202267** "Paired macOS desktop stream closes with 1009 — node stream transport sends >64 KiB frames but Gateway a…" (05:37:42Z) → merged in-window: PR **#202313** "fix: keep paired desktop streams open during large screen updates" (2026-11-20T07:23:59Z).
- **202248** "doctor --fix --non-interactive exits non-zero with unnamed 'plugin load errors'; entrypoint never starts the G…" (05:06:31Z) → merged in-window: PR **#202310** "fix(doctor): keep advisory plugin warnings from failing non-interactive Doctor" (2026-11-20T08:17:17Z).
- **202384** "transient doctor-contract load failure ('Plugin source changed while preparing its reload') is reported" (09:10:36Z) — **created 17 minutes before window close**; likely linked to #202248's family.
- **201969** "PostgreSQL Gateway Talk stays 'warming' and plugin-loading requests fail with 'must run in a worker'…" (17:52:34Z) → merged in-window: PR **#202304** "fix(postgres): preserve numeric scores in session recall" (2026-11-20T09:03:12Z).
- **202292** "replies to sessions_create sessions' sessions_send reports are hidden as subagent coordination" (06:14:39Z).
- **202270** "Active goal keeps posting continuation replies to Discord after context budget is exhausted" (05:40:59Z).
- **202208** "Phone, meeting and FaceTime voice consults ignore the agent's Claude CLI runtime and fail with 'No API …'" (03:15:23Z).
- **202176** "macOS process census fails the whole Codex start when any transient process has incomplete topology" (02:09:00Z).
- **202167** "2026.11.5 macOS BA-EA case collision persists — recovery identity failure and pending Codex migration" (01:42:12Z).
- **202047** "ACP `session/prompt` with `_meta.deliver: true` never settles and streams no text…" (2026-11-19T20:14:49Z).
- **202023** "reset --scope config+creds+sessions deletes config and credentials while an unmanaged Gateway still own…" (19:47:47Z).
- **202037/#202045** (see P0 table) — Control UI "Connect a device" and dashboard start/install are both dead ends on a new install; both already have **open, unmerged** fix PRs #202085 / #202071 / #202042.

Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100&sort=created

---

## 6. Yesterday's 5 open P0s — status re-check

All five remain **open**; none was closed in-window. But **one now has a merged fix PR** (new vs yesterday).

| yesterday P0 | state now | updated_at | fix PR now? |
|---|---|---|---|
| #201599 Windows Defender real-time scan blocks OpenClaw node | **open** | 2026-11-19T03:58:54Z | **0 PRs at all** (search `is:pr 201599` → total_count 0) — negative finding |
| #201481 Android onboarding stays on node approval after Camera approved | **open** | 2026-11-18T22:29:04Z | #201489 "fix(android): finish setup after node access is approved" — still **open, unmerged** (unchanged from yesterday) |
| #201472 fix(doctor): dead Gateway lock without processNamespace blocks maintenance | **open** | **2026-11-19T21:10:32Z (in-window)** | ✅ **NEW: PR #201912 "fix: let macOS updates finish when an old Gateway left a dead lock file" MERGED 2026-11-19T16:36:58Z**, body says "Related: #201472 / Related: #201893". Also #201893 open/unmerged. Issue still open (PR is "Related:", not "Fixes:"). |
| #201468 fix(macos): launch alert gives generic credential recovery steps | **open** | **2026-11-19T19:46:35Z (in-window)** | #201741 "fix(macos): launch alert shows the CLI's schema refusal inst…" — **open, unmerged** |
| #201388 install-cli.sh --onboard fails under documented curl \| bash form | **open** | 2026-11-18T19:53:49Z | #201430 "fix(install): piped install-cli.sh --onboard fails after a s…" — **open, unmerged** |

**Negative finding:** 0 of yesterday's 5 open P0s has been *closed* by a merged fix in-window. #201472 is the only one with a merged PR attached, and the issue itself remains open.

Related in-window PR search results for the **new** P0s:
- #202309 → #202312 "fix: show how to run openclaw when install-cli.sh leave…" — **open, unmerged**
- #202037 → #202085 "fix(cli): restore dashboard Gateway start and install r…" — **open, unmerged**
- #202045 → #202071 "fix: show how to set up secure access when Connect a de…" and #202042 "feat: show new iPhone users how to set up OpenClaw" — both **open, unmerged**
- #201993, #202258, #202185 → **0 PRs** each (negative findings)
- #202265 → #202301 **MERGED** 2026-11-20T08:42:24Z

Source pattern: `https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+<issue-number>`

---

## 7. Merged PR volume & the enterprise repo

**Main repo `openclaw/openclaw`:** search `is:pr is:merged merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z` → **`total_count = 300`** merged PRs in-window (yesterday: 370). Top merged authors: `vincentkoc` 36, `steipete` 15, `obviyus` 9, `openclaw-mantis[bot]` 8, `roboclaw-bot` 7, `Patrick-Erichsen` 5, `jalehman` 4, `hannesrudolph` 4, `fuller-stack-dev` 4, `daniel-lxs` 2.

Notable merged main PRs (in-window):
- **#202301** fix(update): bring the Gateway back after a failed upgrade — 2026-11-20T08:42:24Z
- **#202313** fix: keep paired desktop streams open during large screen updates — 2026-11-20T07:23:59Z
- **#202310** fix(doctor): keep advisory plugin warnings from failing non-interactive Doctor — 2026-11-20T08:17:17Z
- **#202304** fix(postgres): preserve numeric scores in session recall — 2026-11-20T09:03:12Z
- **#202318** fix(gateway): refuse a retained continuation at start when its operator's device was revoked — 2026-11-20T08:52:40Z
- **#202299** fix: require explicit opt-in for Session Share readers — 2026-11-20T08:19:54Z (access-control hardening)
- **#202230** feat: block guest invites until the role's sandbox can start — 2026-11-20T08:39:03Z
- **#202327** fix(sandbox): keep NuGet and Convex caches out of workspace results — 2026-11-20T07:43:12Z
- **#202380** fix(openai): list ChatGPT models with the OpenClaw release version — 2026-11-20T09:24:11Z
- **#202368** fix(msteams): deliver the rest of a reply when Teams rejects the stream end — 2026-11-20T09:20:27Z
- **#202326** refactor(agents): tighten the system prompt and render a compact skills catalog — 2026-11-20T09:02:55Z
- **#202339** fix(ci): stabilize cron snapshot tests under memory pressure — 2026-11-20T08:09:31Z

**Enterprise `openclaw/openclaw-enterprise`:** search `is:pr is:merged merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z` → **`total_count = 115`** merged PRs in-window (yesterday: 74 → **+41, +55 %**). Stars +1 only, open issues +19.

Notable enterprise merges (in-window):
- **#6664** "Define staged CredentialProxyDriver operations and worker deployment RFC" — 2026-11-20T04:05:47Z
- **#6651** "RFC-0023 amendment: Separate OAuth clients from Connection Templates" — 2026-11-20T02:22:56Z
- **#6620** "RFC-0023: Make encoded slashes an artifact endpoint opt-in" — 2026-11-19T19:01:00Z
- **#6613** "RFC-0023: Allow encoded slashes for scoped npm reads" — 2026-11-19T18:10:07Z
- **#6623** "Require interface changes and simplifications in RFCs" — 2026-11-19T19:28:19Z
- **#6616** "Use date-and-title names for new RFCs" — 2026-11-19T19:11:56Z
- **#6625** "Fix channel egress RFC filename validation on main" — 2026-11-19T19:43:11Z
- **#6580** fix(logging): withhold more credential shapes from logged error text — 2026-11-19T11:35:16Z
- **#6630** fix(ci): mask cut credential fragments and suffixed secret keys in failure diagnostics — 2026-11-19T21:43:18Z
- **#6635** "Direct core dependency fixes upstream" — 2026-11-19T21:56:44Z
- **#6604** fix(runtime): follow up the openclaw pin bump — 2026-11-19T17:05:49Z
- **#6601** fix: show Agent deployment cleanup status in the CLI — 2026-11-19T15:07:49Z
- **#6599** fix: report pending repository cleanup after an Agent stops — 2026-11-19T15:04:36Z
- **#6644** fix(ci): survive a stalled Docker Hub layer pull — 2026-11-19T23:33:29Z

**RFC-0040 / RFC-0042 — negative finding:** no merged PR in-window has "0040" or "0042" in its title, and no enterprise RFC-titled PR references RFC-0040 (Agent HTTP chat completions) or RFC-0042 (interrupted-session continuity). **The last known RFC-0040 PR remains #6336; the last known RFC-0042 PRs remain #6470 and #6502 (both merged 2026-11-18, i.e. before this window).** The RFC energy this window is entirely on **RFC-0023** (artifact/npm scoped reads, OAuth-vs-Connection-Templates separation) — 5 of the 7 RFC-titled merges are RFC-0023 work.

Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100 · https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100

---

## 8. Model catalog publish workflow — yesterday's fix did NOT hold; it broke again in-window

Source: `https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=20` (workflow "Publish catalog", branch `main`).

| run # | run id | created (UTC) | event | sha | conclusion |
|---|---|---|---|---|---|
| 737 | 44487837909 | 2026-11-19T08:28:04Z | schedule | beef19a9 | failure (pre-window) |
| **738** | 44492623798 | 2026-11-19T09:01:30Z | workflow_dispatch | beef19a9 | **success** (yesterday's fix #201737 landed 09:01:17Z) |
| **739** | 44524404072 | 2026-11-19T12:29:49Z | schedule | ac0f6729 | **success** |
| **740** | 44566039938 | **2026-11-19T16:26:03Z** | schedule | **b4b2925d** | **failure** ← regression |
| **741** | 44608507490 | 2026-11-19T20:25:19Z | schedule | b4b2925d | failure |
| **742** | 44647808556 | 2026-11-20T00:41:06Z | schedule | b4b2925d | failure |
| **743** | 44674525118 | 2026-11-20T04:27:31Z | schedule | b4b2925d | failure |
| **744** | 44702737879 | 2026-11-20T08:27:56Z | schedule | b4b2925d | failure |

Other workflows: "pages build and deployment" succeeded at 2026-11-19T09:03:58Z and 2026-11-19T12:32:25Z; **CodeQL succeeded** at 2026-11-19T05:56:06Z and 2026-11-20T05:56:13Z (runs 25, 26).

**Finding: the catalog publish job went green twice after yesterday's fix, then broke again and has failed on 5 consecutive scheduled runs (740→744) since 2026-11-19T16:26:03Z — i.e. for ~17 hours at window close.** The break coincides exactly with the new commit `b4b2925d` ("catalog: 47 providers, 1392 models", pushed 2026-11-19T12:32:14Z), which is the first commit after the last green sha `ac0f6729`.

**Failing step (verified via the check-run annotations of run 744, job id 136174792483):** step **9 "Check released readers"** exits 1 (`"Process completed with exit code 1."`, annotation path `.github` line 62). The step runs `node scripts/released-readers.mjs --openclaw openclaw --allow-row-loss "$ALLOW_ROW_LOSS"`. A second annotation is informational: `"v1: no new file; the published v1 stays live and is not checked"`.

**Probable root cause (evidence-based, not confirmed):** the diff `ac0f6729...b4b2925d` in `models/v2/catalog.json` and `models/v3/catalog.json` adds **new model fields** that older released OpenClaw readers do not understand — most visibly `"status": "deprecated"` + `"statusReason": "novita no longer lists this model in its public model inventory."` on a model, and `"compat": { "cachesInstructions": false }` on `gpt-6.2-astra` and `gpt-6.2-sol` — plus price changes (e.g. `openrouter/~deepseek/deepseek-v4-flash-latest` input 0.055→0.06). A regenerated catalog that drops or re-frames a row will trip the released-reader row-loss check.

**Negative findings:** no new catalog publish *fix* PR is visible in the catalog repo's workflow file — `https://raw.githubusercontent.com/openclaw/catalog/b4b2925d.../.github/workflows/publish.yml` still contains the same `Check released readers` step (unchanged in that commit; the file's blob sha at b4b2925d is `aadad5d5bae6410292e1b4c47d9d7631bdd2d275`). The catalog repo's commit log since 2026-11-19T09:00Z contains **only** the two catalog commits (`ac0f6729`, `b4b2925d`) — **no fix commit has landed yet**.

Source: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=20 · https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-19T09:00:00Z · https://api.github.com/repos/openclaw/catalog/compare/ac0f6729...b4b2925d

---

## 9. clawstat.us — recommendation FLIPPED from ⚠️ to ✅ for 2026.11.6

Source: `https://clawstat.us/latest.json` (171,315 bytes), `app_version 1.3.10`, `assessed_at 2026-11-20T05:25:58.287435+00:00`.

| field | yesterday | now |
|---|---|---|
| assessed version | 2026.11.3 | **2026.11.6** |
| **recommendation** | ⚠️ "care" | **✅** (evidence gate ✅, `blocker_count: 0`, "No credible blocking issue is confirmed for this version.") |
| status | — | `key: wait`, `label: "Too new to call"`, `status.recommendation: ✅`, `early_read: "Safe to update"` |
| confidence | — | medium |
| **recommended_version** | 2026.11.3 (settled) | **2026.11.3 — unchanged**, kind `settled`, published 2026-11-10, age 10 d, recommendation ⚠️, blocker_count 19, 11 versions considered |
| npm weekly downloads (calibration) | ~3.1M | **3,035,903** |
| tracked issues | 60 | **50** (`issues_capped: false`, cap 60) |
| closed_completed | 14 | **3** |

**New headline (verbatim):** "Safe for most setups; isolated archive-read, updater and platform-specific bugs, but no widespread breaker and near-zero community traction"

**New thesis (verbatim):** "v2026.11.6 is a solid maintenance-and-resilience release: it ships smoother upgrade bridging (#200662, #200595), more resilient subagent/restart handling (#200516, #200553), Gateway memory-pressure re…"

**known_issues (50 tracked) — the new top entries, all `severity: high`, `clawsweeper_decision: unknown`, `fixed_in: None`:**
1. **#202213** "[Bug]: 2026.11.6 refuses to read compressed session archives; please ship #192743 and #193548 in a stable release" — category `regression`
2. #201993 "[Bug]: 2026.11.1 backup probe timeout blocks self-upgrade to releases containing the fix" — `post_release`
3. **#202246** "Upgrade to 2026.11.6 causes repeated broadcast of stale automation reminders to Discord after restart" — `post_release`
4. #201982 "Update failure: package-update (2026.11.1)" — `post_release`
5. #201609 "[Bug]: 2026.11.5 Linux: spawn broker dies silently after ~1-2 days and is never respawned…" — `regression`
6. #201634 "config validate fails with EACCES … on Windows 10" — `regression`
7. #202250 "[Bug]: update migration-plan always refuses because candidate artifact digest cannot be supplied" — medium, `regression`
8. #201540, #201974, #201561, #201571, #201589 — post_release, high

**changes:** breaking **0**, fixes **11**, features **5**. **hotfix_chain: 0.**

**flip_conditions (verbatim):**
- ⏸️ "if #202213 (compressed-archive read failure) is confirmed to affect many users — dozens of 👍 or a megathread — or is shown to make archives inacces…"
- ⚠️ "if the macOS self-update failures (#201993, #201982) accumulate additional reporters across platforms with no shipped fix, forming an upgrade-path…"
- ✅ "hardens (raises confidence) once a stable release ships the #192743/#193548 fix for #202213 and a fix for the 2026.11.1 updater backup-probe timeout"

**Sentiment (verbatim):** "Community reaction is quiet: only 5 👍 total across 50 tracked issues (max 3 on any single report), with #202213's reporter noting the fix already exists on main and simply asking for a stable ship…"

**platform_impact:** every listed platform/channel is `high` (windows, macos, linux, ios, android, web, discord, slack, telegram, whatsapp, other-channel) — this is a blanket value, not a discriminating signal.

**Release history now includes** v2026.11.6 ("Smoother upgrades: bridge the 2026.11.5 updater to the current release path and validate staged plugin dependencie…") and v2026.11.10-beta.1 (prerelease, published 2026-11-19).

**Interpretation:** clawstat's *headline* recommendation flipped to ✅, but its *recommended_version* deliberately did **not** move to 2026.11.6 — it still recommends **2026.11.3** because 2026.11.6 is 1 day old and the tracked-issue set is dominated by fresh post-release regressions. The ✅ is a "safe to update, not yet a recommendation" signal (`status.key = wait`).

Source: https://clawstat.us/latest.json

---

## 10. Official surfaces — NO content change (byte-identical to yesterday)

| surface | raw md5 today | raw md5 yesterday (2026-11-19 report) | verdict |
|---|---|---|---|
| https://openclaw.ai/rss.xml | `d840797cc7691f44c63357dab085a79a` | `d840797cc7691f44c63357dab085a79a` | **byte-identical** |
| https://openclaw.ai/showcase | `e90d1564b23498328640776d35fe8060` | `e90d1564b23498328640776d35fe8060` | **byte-identical** |
| https://openclaw.ai/press | `c1885462edd97eb7a32a4f91df814eef` | `c1885462edd97eb7a32a4f91df814eef` | **byte-identical** |

Because the raw bytes are identical, the Astro asset-fingerprint normalization question from yesterday is moot — there is **no diff at all**, fingerprinted or otherwise.

- **RSS:** 26 items; newest is still **"OpenClaw is coming to Shenzhen", Fri, 13 Nov 2026 00:00:00 GMT**, then "Use new models in OpenClaw without an update" (Nov 6), "Shattering Silos with OpenClaw Multiplayer" (Nov 5), "Come Build With Us: OpenClaw Focus Weeks" (Oct 21). → **No new blog post in-window.**
- **Press:** newest dated item remains TechCrunch, Jun 30, 2026; the latest date strings present in the page are May 5, 2026 / May 4, 2026 / Mar 7, 2026 → **no new press coverage.**
- **Showcase:** unchanged.
- **Negative finding:** the new 2026.11.6 release and the 2026.11.10-beta.1 prerelease have **not** produced any new official-surface content (no announcement, no blog post, no press item, no showcase entry) as of window close.

Sources: https://openclaw.ai/rss.xml · https://openclaw.ai/press · https://openclaw.ai/showcase

---

## Verification notes / what could NOT be confirmed

1. **Catalog publish failure root cause is inferred, not proven.** The run logs endpoint returns `403 "Must have admin rights to Repository."`, so I could not read the actual `released-readers.mjs` error text. My causal link (new `status: deprecated` / `statusReason` / `compat.cachesInstructions` fields in the regenerated v2/v3 catalog breaking older released readers) is derived from the `ac0f6729...b4b2925d` diff plus the failing step name — plausible and evidence-backed, but not verified against the script's own assertion output.
2. **No fix for the catalog regression is visible yet.** The catalog repo's commit list since 2026-11-19T09:00Z contains only the two catalog commits; I did not check open PRs in `openclaw/catalog`, so a fix PR may exist but be unmerged.
3. **GitHub `open_issues_count` includes pull requests.** The +163 (main) and +19 (enterprise) deltas are therefore "open issues + open PRs", not pure issue counts. I could not decompose the numbers without an extra query.
4. **npm download figures for 2026-11-19 / 2026-11-20 are 0 (publication lag)**; all download deltas are anchored on 2026-11-18. The effect of the 2026.11.6 release on downloads is **not yet observable**.
5. **`forks_count` for the main repo (82,944) has no yesterday baseline**, so its delta is unknown; enterprise forks (125 vs 124) and stars are the only fork/star deltas I could state.
6. **Merged-PR counts (300 main / 115 enterprise) come from GitHub search `total_count`** with `per_page=100`; I verified 100 items per query but did not page through all of them, so per-PR details outside the first page are not individually verified.
7. **The 36 P0/P1 in-window issues are labelled by an automated triage pipeline** (`clawsweeper:*`, `issue-rating: *`); I did not attempt to separate "36 distinct real-world regressions" from "36 triage-classified entries" — my count is the label count, with the author-concentration caveat noted.
8. **clawstat's `recommended_version` semantics:** `2026.11.3` is described as `kind: settled` with `latest` / `considered: 11` sub-fields; I did not unpack every candidate version in that structure.
9. **`cve_id` for GHSA-pw3x-g8v8-fvj2 is `null`** — I did not query OSV or NVD to see whether a CVE has been assigned elsewhere (yesterday's report mentions an OSV check; I did not repeat it within budget).

---

### Sources (all raw JSON, read 2026-11-20T09:29Z–09:36Z)

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw (`time` map)
- https://api.npmjs.org/downloads/range/2026-10-20:2026-11-20/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100&sort=created
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z&per_page=100
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=20
- https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-19T09:00:00Z
- https://api.github.com/repos/openclaw/catalog/compare/ac0f6729...b4b2925d
- https://clawstat.us/latest.json
- https://openclaw.ai/rss.xml · https://openclaw.ai/press · https://openclaw.ai/showcase

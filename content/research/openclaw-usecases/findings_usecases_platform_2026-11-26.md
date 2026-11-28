# OpenClaw Platform Signal Tracker — 2026-11-26

**Window:** 2026-11-25T09:28:00Z → 2026-11-26T09:28:00Z (rolling 24 h)
**Baseline:** `findings_usecases_platform_2026-11-25.md` (window 2026-11-24T09:28Z → 2026-11-25T09:28Z)
**Raw artifacts:** `tmp/2026-11-26/`
**Method:** raw `curl` only — GitHub REST + search API (cursor-paginated), npm registry API, npm downloads API, `clawstat.us/latest.json`, `openclaw.ai/rss.xml`. No web search, no subagents.

---

## 0. TL;DR — what actually changed today

| # | Change | Signal |
|---|---|---|
| 1 | **clawstat flipped ✅ → ⚠️** | status `wait/too new` → **`care/Update with care`**; `evidence_gate` ✅ → **⚠️ with 1 blocker (#205537)**; `recommended_version` 2026.11.5 → **2026.11.6** carrying **3 critical blockers** (203343, 203460, 202925). Tracked issues 17 → **71**. |
| 2 | **v2026.11.10 shipped with NO macOS/Windows artifacts** | release has **12 assets, all Linux** (AppImage + deb + evidence JSON). **v2026.11.9 had 22** incl. arm64/x86_64 `.dmg`/`.zip`/`.dSYM`. This is the mechanical root of the macOS "credentials need recovery" lockout (P0 #205258/#205231/#205338). |
| 3 | **New `extended-stable` release `2026.10.34`** | published **2026-11-26T00:42:32Z** (npm) / GH release 2026-11-26T01:37:32Z — in-window. `extended-stable` dist-tag 2026.10.33 → **2026.10.34**. Gateway-only LTS-equivalent patch. |
| 4 | **Blocker #205537 was already fixed in-window** | memory-index OOM issue opened 2026-11-25T20:11Z, **closed 2026-11-26T06:17Z** by merged PR **#201826** ("let memory indexing finish for large PostgreSQL chat histories", merged 06:16:57Z). clawstat's gate snapshot predates the fix. |
| 5 | **Catalog pipeline broke once** | `Publish catalog` run **#780 (2026-11-26T00:42:50Z) FAILED** at step *"Check released readers"* — first failure after yesterday's 13/13 green. Same SHA succeeded on retry (run #781, 04:27Z). Model count dipped 1436 → **1427**. |
| 6 | **npm downloads reversed the decline** | last complete day **527,267** (2026-11-24), **+19.1% DoD**; rolling 7-day **2,954,008**, WoW **−5.27%** vs yesterday's **−10.72%** — the weekly contraction more than halved. |
| 7 | **Issue intake cooling, backlog still growing** | new issues **178** (was 186), new PRs **452** (was 521), merged PRs **399** (was 431). Open issues **5,406** (+66), open PRs **3,821** (+2). 181 `eyes` reactions, **zero 👍** on any issue. |
| 8 | **Next release already in flight** | **3 merged PRs tagged `[2026.11.11]`** + one `(2026.12.1)` reference, but **no 2026.11.11 tag, release, or npm version exists yet**. 23 update-path PRs merged in-window. |

---

## 1. npm registry — `2026.10.34` lands, `beta` still collapsed onto stable

- **dist-tags (2026-11-26T09:28Z):** `latest=2026.11.10`, `beta=2026.11.10`, **`extended-stable=2026.10.34`**.
  - Baseline: `extended-stable=2026.10.33` (published 2026-11-18T03:11:16Z). → **moved in-window.**
  - `beta` **still** points at the stable `2026.11.10` — unchanged from yesterday; there is still **no prerelease ahead of stable** (`2026.11.10-beta.3` was published 2026-11-24T03:05:25Z, pre-window and superseded).
- **Versions on registry: 311** (was 310). Exactly one publish in-window:
  - **`2026.10.34` — 2026-11-26T00:42:32.120Z.**
- **`2026.10.34` is a gateway-only extended-stable patch** (release body): *"This is a gateway-only `extended-stable` release, which is our current equivalent to LTS… includes the core npm package and Gateway Docker images, but **no native-app releases**."*
  - Highlights: OpenAI/ClawRouter **GPT-6.2 Astra and Sol** + system-prompt caching (#200766, #201094); Tlon group-DM approval policy (#202775); **update recovery** — don't leave the Gateway offline when an update runs alongside DB readers / replaces a running checkout, and recover after a failed Windows update rolls back (#201330, #202541, #203241, #203264); **conversation continuity** — deliver ready child results without waiting for other helpers (#203176, #203102, #201790); **channel delivery** — Telegram polling recovery when update IDs reset, undownloadable attachments no longer blocking replies, Discord reconnect after network outage (#201167, #200682, #201415).
  - One explicit breaking change: **MiniMax M2 models retired** (incl. live discovery); switch explicit M2 selections to M3 (#203998).
  - **No `2026.11.11` anywhere** — npm versions, GH tags, and GH releases all lack it.
- Sources: https://registry.npmjs.org/openclaw , https://registry.npmjs.org/-/package/openclaw/dist-tags , https://api.github.com/repos/openclaw/openclaw/releases?per_page=20

### 1a. Release asset gap — the macOS lockout's mechanical cause *(verified)*

| Release | Assets | macOS/Windows binaries |
|---|---|---|
| **v2026.11.10** (2026-11-25T05:42:47Z) | **12** | **none** — `OpenClaw-2026.11.10-amd64.AppImage`, `OpenClaw-2026.11.10-amd64.deb`, `SHA256SUMS.linux-app.txt`, `openclaw-2026.11.10-linux.json`, `latest.json`, `openclaw-2026.11.10-dependency-evidence.zip`, `postpublish-evidence.json(.sha256)`, `release-manifest.json(.sha256)`, `stable-main-closeout.json(.sha256)` — **all Linux** |
| **v2026.11.9** (2026-11-25T00:47:32Z) | **22** | `OpenClaw-2026.11.9-arm64.dmg`, `-arm64.zip`, `-arm64.dSYM.zip`, `-x86_64.dmg`, `-x86_64.zip`, `-x86_64.dSYM.zip`, `OpenClaw-2026.11.9.dmg`, `.zip`, `.dSYM.zip` + Linux AppImage/deb |

The 2026.11.10 payload has **only amd64 Linux** binaries — no arm64 anything, no dmg, no zip, no dSYM. This directly explains P0 **#205258** ("Stable 2026.11.10 shipped without the macOS app while its schema migration locks out the 2026.11.9 app in an unrecoverable 'credentials need recovery' loop") and the related #205231 / #205338 — the 2026.11.9 macOS app exists, the CLI has already migrated the schema, and the app cannot re-migrate. clawstat flags this cluster as its strongest macOS-specific evidence.
- Sources: https://api.github.com/repos/openclaw/openclaw/releases?per_page=20 (assets arrays), https://api.github.com/repos/openclaw/openclaw/issues/205258

---

## 2. clawstat verdict flips ✅ → ⚠️ — the single largest delta of the day

`https://clawstat.us/latest.json` (`app_version 1.3.10`, assessed **2026-11-26T06:03:20Z**):

| Field | 2026-11-25 | **2026-11-26** |
|---|---|---|
| `recommendation` | ✅ | **⚠️** |
| `status.key` / `label` | `wait` / "Too new to call" | **`care` / "Update with care"** |
| `status.early_read` | "Safe to update" | **null** |
| `evidence_gate.verdict` | ✅ (0 blockers) | **⚠️, blocker_count 1** |
| `evidence_gate.blockers` | `[]` | **`[205537]`** |
| `recommended_version` | 2026.11.5 (settled, 8 d, gate ✅) | **2026.11.6 (settled, 7 d, gate ⚠️, 3 critical blockers: 203343 / 203460 / 202925)** |
| `calibration.tracked_total` | 17 | **71** |
| `calibration.closed_completed` | — | **10** |
| `known_issues` | 17 | **60 (capped, `issues_cap` 60)** |
| `calibration.npm_weekly_downloads` | 2,817,401 | **2,954,008** |
| `freshness` | `fresh: true`, 0 days, 1 run | **`fresh: false`, 1 day, 4 runs** |
| `track_record.summary` | hardened 6 / single 1 | **hardened 7 / single 0** |
| `sentiment_summary` | "calm and technical" | **"quiet and cautious … individual operator failures, not a mass outcry"** |

- **New headline:** *"Update with caution: several upgrade paths have serious reported failures but low confirmed impact — **macOS users should wait**."*
- **New thesis:** 8,309 commits / 7,671 PRs / 349 contributors; **3 total 👍 across 60 tracked issues** against a ~2.95M weekly install base — *"the tell that these failures are individual-operator hits rather than a widespread breaker."*
- **The one gate-credible blocker is #205537** — memory-index session worker OOMs on session files >~250 MB (512 MB heap + whole-file read). It is flagged `priority_provenance: bot-corroborated`, `impact: low`, `reactions: 0`.
- **⚠️ "against updating" evidence (8 items)** — the new cluster: #205537 memory-index OOM; **#205694** state upgrade stops at agent-schema *"no such module: vec0"* (schema 23 vs expected 42) marked a beta release blocker, no fix PR staged; **#205402** Docker 2026.11.8→2026.11.10 hangs entrypoint doctor at "Database engines" for 28+ min, gateway never listens, only rollback restored service; confirmed update failures at candidate-gateway-startup/Windows (**#205542**) and candidate-doctor/macOS (**#205212**); **#205162** chat-triggered update fails requester-revoked for the docs-recommended `discord:user:` owner form and leaves the Gateway stopped; macOS no-app-artifacts + credential lockout (#205258/#205231/#205338); **compaction regressions** (#205566 360 s reply watchdog in Control UI, #205752 large-session compaction refused by the 256 MiB worker pending-bytes cap); **"No pre-release exists ahead of this stable, so none of the open upgrade-path or migration failures is fixed in any shipped artifact."**
- **"For updating" (3 items)** — near-zero community impact (3 👍 / 60 issues / ~2.95M weekly downloads); healthy maintenance velocity (10 of 71 tracked issues already closed as fixed); massive payload with prior-release update-recovery/conversation-continuity wins (#201330, #203176).
- **Flip conditions:** hardens to ⏸️ if any upgrade-path failure gains human corroboration or ≥10 👍 on #205694 / #205402 / #205162, or if the macOS schema lockout is shown to corrupt state; hardens to ⏸️ for macOS if a second gate-credible macOS blocker emerges; eases toward ✅ if maintainers pin the migration failures to environment-specific causes or the next stable ships fixes plus macOS app artifacts.
- **Reviewer disagreement is on the record:** the validator flags 3 logical errors and 4 miscategorized issues, and says the analyst's ⏸️ departure from the ⚠️ gate floor rests on *"ALL bot-labeled with zero human corroboration"* evidence — the exact class the evidence gate excludes as *"context, not verdict drivers."* The validator's suggested recommendation is ⚠️.
- **Read the flip with care:** the ⚠️ is driven by **one** blocker, that blocker was **closed 10 hours before the next report window opened**, and the 2026.10.34 extended-stable now on `extended-stable` predates none of the 2026.11.10 breakage.
- Sources: https://clawstat.us/latest.json , baseline copy `tmp/2026-11-25/clawstat_latest.json`

---

## 3. GitHub tracker — intake cooling, backlog still absorbing

`openclaw/openclaw` (repo id 1103012935).

### 3a. Volume

| Metric | 2026-11-25 | **2026-11-26** | Δ |
|---|---|---|---|
| New issues (created in window) | 186 | **178** | −8 |
| New PRs (created in window) | 521 | **452** | **−69** |
| Merged PRs | 431 | **399** | −32 |
| Open issues (label-scoped `is:issue is:open`) | 5,340 | **5,406** | **+66** |
| Open PRs (`is:pr is:open`) | 3,819 | **3,821** | +2 |
| Repo `open_issues_count` (issues + PRs) | 9,159 | **9,227** | +68 |
| Stars | 395,176 | **395,256** | **+80** |
| Forks | 82,971 | **82,981** | +10 |
| Subscribers | 1,692 | **1,693** | +1 |

Note: new-PR intake fell 521 → 452 and merged PRs fell 431 → 399. So merge throughput is **down ~7%** while the issue backlog still grew **+66** — the divergence noted yesterday persists.

### 3b. Severity mix of newly created issues

| Label | 2026-11-25 | **2026-11-26** | Δ |
|---|---|---|---|
| P0 | 6 | **4** | −2 |
| P1 | 25 | **29** | **+4** |
| P2 | 116 | **107** | −9 |
| P3 | 34 | **33** | −1 |

### 3c. New P0s (4) — all still open

| # | Created | Title | Reactions |
|---|---|---|---|
| **205542** | 2026-11-25T20:15:35Z | Update failure: candidate-gateway-startup (2026.9.6) | 1 |
| **205455** | 2026-11-25T16:59:52Z | Update failure: database-schema-preflight (2026.9.4) | 1 |
| **205338** | 2026-11-25T12:19:29Z | macOS 2026.11.9 shows credential recovery for valid 2026.11.10 migration metadata | 1 |
| **205258** | 2026-11-25T09:41:25Z | **Stable 2026.11.10 shipped without the macOS app while its schema migration locks out the 2026.11.9 app** | **3** ← highest-engagement issue in the window |

Yesterday's open P0s **#205231, #205212, #205162, #204662 remain open** — nothing was closed on the update-path/auth P0 front in-window.

### 3d. Engagement is effectively zero — and it is *watching* behaviour, not agreement

Across all 178 new issues: **181 `eyes` reactions, 0 `+1`, 0 `rocket`, 0 `heart`, 0 `confused`.** Max 👍 on any single issue = **0**; the top-reaction issue (#205258) has 3 `eyes`. Total 👍 across the whole window: **0**. This corroborates clawstat's "3 total 👍 across 60 tracked issues" and its "individual operator failures, not a mass outcry" read. Nobody is endorsing the new issues; a lot of people are watching them.

### 3e. `impact:` label distribution on the 178 new issues

`ux-friction` 66 · `session-state` 29 · `other` 27 · `auth-provider` 13 · `message-loss` 10 · `security` 9 · `crash-loop` 7 · `ux-release-blocker` 4 · `data-loss` 3.

### 3f. Merged-PR shape (399)

Top keywords in titles: ui 53 · gateway 32 · control 26 · session 26 · **update 23** · model 19 · plugin 18 · memory 13 · install 11 · cron 9 · doctor 8 · provider 8.

**23 update-path PRs merged** — the clearest direct response to the update-failure cluster. Notable:
- #205850 `fix(update): let Discord owners finish updates with pending Doctor migrations` ← directly targets #205162
- #205760 `fix: the update after a failed 2026.11.10 pnpm update settles it instead of a…`
- #205736 `fix(update): settle a 2026.11.10 update that released its lease after verifying its c…`
- #205743 `fix: keep Doctor from restarting the Gateway in the middle of a package update`
- #205669 `fix(update): check delegated owners against Doctor-migrated config`
- #205668 `fix(update): hash SQLite lock bytes as zeros so Windows exclusion cannot fail verification`
- #205804 `fix: let Doctor repair a Git checkout install after its first update (2026.12.1)`

**Next-release markers:** 3 merged PRs carry the explicit tag **`[2026.11.11]`** (#205849 recover interrupted pnpm updates on the installed generation; #205827 count a leftover Startup entry for the updated Gateway; #205758 recover timed-out and orphaned finalizers to a verified Gateway). One PR references **(2026.12.1)**. **No `v2026.11.11` tag/release/npm version exists** — the next cut is in preparation, not shipped.

### 3g. Other org repos

`openclaw/clawhub` 9,566 stars (+2) · `openclaw/mcporter` 5,144 (+2) · `openclaw/openclaw-windows-node` 2,217 (+5) · `openclaw/clawsweeper` 2,007 · `openclaw/slacrawl` 240 (+1) · `openclaw/clawscan` 158 · `openclaw/gitcrawl` 140 · `openclaw/crawlkit` 69 · `openclaw/fs-safe` 65 · `openclaw/docs` 76 · `openclaw/catalog` 14 · `openclaw/clawrouter` 44.
- Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:<window> , …+is:pr+created:<window> , …+is:pr+is:merged+merged:<window> , …+is:issue+is:open , …+is:pr+is:open , …+is:issue+label:{P0,P1,P2,P3}+created:<window> , https://api.github.com/repos/openclaw/openclaw , https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed

---

## 4. Security — flat, no new advisories

- **GitHub Security Advisories: 723 total** (cursor-paginated to exhaustion — the `page=` parameter is **ignored** by this endpoint; pagination requires following the `Link: rel="next"` cursor). **Count unchanged vs 2026-11-25.**
- Newest advisory: **GHSA-pw3x-g8v8-fvj2**, published 2026-11-19T02:01:59Z, **high**, CVSS **8.8**, CWE-863, no CVE ID — still the newest, unchanged for 7 days.
- **Still 0 linked issues and 0 linked PRs** for GHSA-pw3x (`is:issue` / `is:pr` text searches both return `total_count: 0`) — the advisory has **no visible remediation trail in-repo**.
- Second-newest is from 2026-09-11; there has been **no new advisory since 2026-11-19**.
- `https://openclaw.ai/security` still states **"No active bulletins"**.
- 2026.10.34's body claims *"critical security updates"* among its contents (inherited from the 2026.10.x line) — consistent with the flat advisory count, i.e. the extended-stable patch carries dependency CVE fixes rather than new disclosures.
- Sources: https://api.github.com/repos/openclaw/openclaw/security-advisories (cursor-paginated) , https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+GHSA-pw3x-g8v8-fvj2 , https://openclaw.ai/security

---

## 5. ClawHub catalog — one pipeline failure, models dip to 1427

- **In-window runs: 12** (baseline: 13, all green). Breakdown: **5 × `Publish catalog`**, **6 × `pages build and deployment`**, **1 × `CodeQL`**.
- **❌ ONE FAILURE: `Publish catalog` run #780, 2026-11-26T00:42:50Z** (sha `59cd97cc`), failing at **step 9 "Check released readers"** — job `publish`, step `Check released readers`. Run URL: https://github.com/openclaw/catalog/actions/runs/45730681123
  - **Self-healed**: the same sha succeeded on the next scheduled run (#781, 2026-11-26T04:27:15Z), and the pages build for that sha succeeded at 00:42+ / 04:29Z. So this is a transient gate, not a sustained outage — but it is the **first failure after yesterday's clean 13/13**, and the publish cadence is still ~4 h (12:31 → 16:28 → 20:24 → **00:42 (fail)** → 04:27 → 08:28).
- **Catalog commits in-window (5):**

| sha | time (UTC) | providers | models |
|---|---|---|---|
| `d92870d2` *(window-start baseline)* | 2026-11-25T08:30:31Z | 47 | **1432** |
| `823f1df8` | 2026-11-25T12:34:09Z | 47 | 1432 |
| `7f7d23ef` | 2026-11-25T16:30:01Z | 47 | **1436** ← peak |
| `59cd97cc` | 2026-11-25T20:26:48Z | 47 | **1427** ← the failing sha's commit |
| `e3cfdd68` | 2026-11-26T04:29:15Z | 47 | 1427 |
| `9fd7161d` | 2026-11-26T08:31:16Z | 47 | **1427** |

  → **Models: 1,432 → 1,427 (−5 net, −0.35%)**; intraday high was 1,436 (+4). **Providers flat at 47** (unchanged for the 2nd consecutive day).
- Catalog repo: **stars 14**, forks 4, `pushed_at` 2026-11-26T08:31:25Z.
- Sources: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=30 , https://api.github.com/repos/openclaw/catalog/commits?since=2026-11-25T09:28:00Z&until=2026-11-26T09:28:00Z , https://api.github.com/repos/openclaw/catalog/runs/45730681123/jobs

---

## 6. Enterprise repo — throughput down, backlog still climbing, still no release

`openclaw/openclaw-enterprise` (created 2026-08-29):

| Metric | 2026-11-25 | **2026-11-26** | Δ |
|---|---|---|---|
| Stars | 488 | **488** | 0 |
| Forks | 129 | **131** | +2 |
| `open_issues_count` (issues + PRs) | 546 | **565** | **+19** |
| Open issues (label-scoped) | 133 | **137** | +4 |
| Open PRs | 413 | **428** | **+15** |
| Merged PRs in-window | 79 | **60** | **−19 (−24%)** |
| New items in-window | 138 | **81** (76 PRs + 5 issues) | −57 |
| GitHub Releases | `[]` | **`[]`** | still zero |
| Days since creation | ~88 | **~89** | +1 |

- **Merged-PR titles cluster on:** Gateway CONNECT probe diagnostics (#7460), scheduled Full Integration run skip reasons (#7457), **RFC: use Credential Sources instead of Namespace Secrets** (#7456), OpenShell optional-plugin withdrawal OAuth issuer (#7453), Gateway recovery recheck after queued reply (#7451), keyboard focus retention (#7450, #7446), public metadata for selected Agent repositories (#7448).
- **New issues (5):** #7437 (P2) presets cannot bind managed credential sources — auth-invalid templates brick startup; #7412 (P3) startup refusal for retired `drivers.credential_gateway` should point at TokenService; #7409 upgrade preflight reports unschedulable preflight Pods as "child Pod disappeared"; #7399 (P2) codex-sandbox generated seccomp profile cannot start bubblewrap on CRI-O (OpenShift); #7394 OpenShift console Route ships without a router timeout — streaming chat turns hit it.
- **`releases?per_page=10` STILL returns `[]`** — the enterprise repo has published **no GitHub Release in 89 days** since creation. Enterprise artifacts still ship with no versioned release trail.
- Sources: https://api.github.com/repos/openclaw/openclaw-enterprise , …/releases?per_page=10 , https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window> , …+is:issue+is:open , …+is:pr+is:open , …+created:<window>

---

## 7. npm downloads — the weekly decline more than halved

- `point/last-day` = **527,267** for **2026-11-24** (the last complete day). 2026-11-25 and 2026-11-26 still report **0** — npm's ~48 h reporting lag, **not** zero usage.
- **Day-over-day: 527,267 (11-24) vs 442,684 (11-23) → +19.11%.** A strong bounce after yesterday's −2.25%.
- `point/last-week` = **2,954,008** for 2026-11-18 → 2026-11-24. This **matches clawstat's** `calibration.npm_weekly_downloads` (2,954,008) exactly.
- **Rolling 7-day vs the preceding 7-day:** 2026-11-18..11-24 = **2,954,008** vs 2026-11-11..11-17 = **3,118,399** → **−5.27%**. Yesterday's equivalent comparison was **−10.72%** (2,817,401 vs 3,155,664) — so the weekly contraction **more than halved**, and the rolling total is now **+4.85% above** yesterday's rolling 7-day (2,817,401).
- Daily series 2026-11-12 → 2026-11-26: 495,873 / 478,823 / 471,274 / 368,783 / 483,549 / 390,660 / 346,941 / 294,218 / 392,157 / 497,858 / 452,883 / 442,684 / **527,267** / 0 / 0.
- Sources: https://api.npmjs.org/downloads/point/last-day/openclaw , https://api.npmjs.org/downloads/point/last-week/openclaw , https://api.npmjs.org/downloads/range/2026-11-12:2026-11-25/openclaw

---

## 8. Blog / press — no new posts in-window

- `https://openclaw.ai/rss.xml` still carries **29 items** (unchanged from yesterday). Newest two remain dated **Tue, 24 Nov 2026 00:00:00 GMT** — i.e. **before** this window opens, so they must not be attributed to 2026-11-26:
  - *"A year of the Claw"* (https://openclaw.ai/blog/a-year-of-the-claw/)
  - *"Introducing ShellBench, the benchmark for real-world tasks"* (https://openclaw.ai/blog/shellbench/)
- **Zero new blog posts in-window.** Next planned publish slot is the Thu slot used by previous weeks (2026-11-05, 11-13, 11-20) — i.e. tomorrow.
- `CHANGELOG/Unreleased.md` on `main` contains exactly **one** entry (Control UI automation editor scroll-area fix, #172176) — the changelog is not where the in-window work is visible; it's in the merged PRs.

---

## 9. Cross-checks, corrections, and limitations

**Cross-checks performed**
- clawstat's `npm_weekly_downloads` (2,954,008) == npm `point/last-week` == my rolling-7d sum → download numbers triple-confirmed.
- clawstat's blocker #205537 verified independently against the GitHub API: issue exists, created 2026-11-25T20:11:04Z, **closed 2026-11-26T06:17:00Z**, 1 reaction, 2 comments, labels `P2 / clawsweeper:source-repro / impact:session-state / issue-rating: 🦞 diamond lobster`; the closing PR is **#201826** ("fix: let memory indexing finish for large PostgreSQL chat histories"), merged 2026-11-26T06:16:57Z — i.e. the fix landed 43 minutes before closure and **is in this window's merged set** (399). clawstat assessed at 06:03Z, i.e. **before** the fix merged.
- The 2026.11.10 asset list was enumerated directly from the release payload (12 assets, all Linux) and diffed against v2026.11.9 (22 assets, incl. all dmg/zip/dSYM variants) — the macOS-artifact claim is first-hand, not inferred.
- Catalog model/provider counts were read from the commit messages of every in-window catalog commit, not from a single endpoint.

**Errors hit and how they were handled**
1. `GET /repos/openclaw/openclaw/security-advisories?page=N` **silently ignores `page`** and returns the same first 100 records for every N — my first pagination attempt reported "2000" by summing 20 identical pages. Fixed by parsing the `Link: …; rel="next"` cursor and re-running → true total **723**.
2. `GET /search/issues?q=…GHSA-pw3x…` without `is:issue` returns **HTTP 422** ("Query must include 'is:issue' or 'is:pull-request'"). Fixed by adding the qualifier.
3. `https://clawstat.us/api/latest.json` → **404**; the working endpoint is **`https://clawstat.us/latest.json`** (both were recorded in yesterday's file).
4. `GET /repos/openclaw/openclaw/actions/runs/<id>/logs` returned **HTTP 302 with an empty body** (redirect not followed) → the failing catalog step's log body could not be retrieved; the failure detail above is derived from the run/jobs API (step name + conclusion) only.
5. `GET /repos/openclaw/openclaw/releases/tags/v2026.11.11` → **404 Not Found**, confirming no such release (used as a positive check, not an error).

**Limitations**
- GitHub **search** `total_count` is an upper bound and its index lags seconds-to-minutes behind writes; the newly-created-issue/PR counts were therefore taken from fully paginated item lists (2 pages for issues, 5 for PRs, 4 for merged PRs — every page reached <100 items, so all pages were captured), and cross-checked against the label-scoped `created:` queries (P0 4 / P1 29 / P2 107 / P3 33).
- **Label-scoped open counts are exact**; the `is:issue is:open` totals (5,406 issues, 3,821 PRs) come from search `total_count` and are ±small.
- npm **11-25 and 11-26 download data is absent** (reporting lag). Every download statement is anchored to the last complete day, **2026-11-24**.
- clawstat's `known_issues` list is **capped at 60** (`issues_capped: true`, `issues_cap: 60`) while `tracked_total` is 71 — the tracked set is larger than the visible list, and the cap was also hit yesterday (17/17 uncapped).
- The clawstat endpoint exposes **no URL** for the issues it cites; each cited issue number was independently re-fetched from the GitHub API to confirm existence, state, labels, and reactions.
- **Windows-only** and **iOS/Android** release artifacts could not be verified beyond the absence of any non-Linux asset in the v2026.11.10 payload (no Windows installer existed in v2026.11.9 either, so this is not a regression).
- Repo `open_issues_count` (9,227) **includes PRs** and is not comparable to the label-scoped open-issue count (5,406); both are reported with their query strings.

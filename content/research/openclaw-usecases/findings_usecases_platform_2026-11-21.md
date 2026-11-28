# Findings — DIAC / OpenClaw Use Cases · Platform track
**Window:** 2026-11-20T09:28:00Z → 2026-11-21T09:28:00Z (24 h)
**Run:** 2026-11-21 ~10:29–10:40 CEST · subagent `diac-platform-2026-11-21`
**Method:** all numbers below come from raw responses fetched in *this* run (curl into `tmp/2026-11-21/`, parsed with python3). Raw payloads are in `tmp/2026-11-21/`; nothing was extrapolated.
**Budget used:** 1 `web_search`, 0 `web_fetch`, ~40 `curl` calls.

---

## 0. Headline summary

| # | Subtopic | Verdict |
|---|---|---|
| 1 | Releases & dist-tags | **No new release in-window.** `latest` still **2026.11.6**; `beta` still **2026.11.10-beta.1**; `extended-stable` still **2026.10.33**. Nothing published to npm after 2026-11-19T16:52:13.687Z. |
| 2 | Security | **No new advisory.** GHSA-pw3x-g8v8-fvj2 unchanged: `cve_id: null`, `updated_at` still 2026-11-19T02:01:59Z, **no linked fix PR** found. One security-hardening PR merged in-window (#202941). |
| 3 | Catalog & Actions | **RECOVERED.** "Publish catalog" failed 7× (runs 740→746, up to 2026-11-20T16:24:52Z) then went **green 6× in a row** (runs 747→752, 2026-11-20T18:42:20Z → 2026-11-21T08:26:44Z). |
| 4 | Tracker velocity | 155 new issues (−32 vs yesterday's 187), 375 merged PRs (+75), stars 394,946 (+79). P0/P1 sharply down: **5 P0 / 17 P1** (yesterday 10/26). |
| 5 | npm demand | Last complete day **2026-11-19 = 294,218**. 11-20/11-21 zeros = reporting lag. Rolling 7 complete days **2,834,248** vs 3,103,971 prior week = **−8.7 %**. |
| 6 | Enterprise | 136 merged PRs (+21). RFC-0040 (#6336) and RFC-0042 (#6434/#6435/#6442) **already merged before the window** — no new RFC-0040/0042 merge in-window. No GitHub releases in the enterprise repo at all. |
| 7 | clawstat.us | **Recommendation flipped ⚠️ "Update with care"** (yesterday: ✅ "Too new to call"). `recommended_version` still **2026.11.3**. Tracked issues 50 → **74**. Blocker #202925 still open. |
| 8 | Official surfaces | **showcase & press byte-identical to yesterday. RSS changed — new blog post "OpenClaw Isn't Free." (Nov 20).** |

---

## 1. Releases & dist-tags — NO new release in-window

Sources: `https://registry.npmjs.org/-/package/openclaw/dist-tags` · `https://registry.npmjs.org/openclaw` (only the `time` map was parsed) · `https://api.github.com/repos/openclaw/openclaw/releases?per_page=8`

**dist-tags (verbatim, raw JSON):**
```json
{"latest": "2026.11.6", "extended-stable": "2026.10.33", "beta": "2026.11.10-beta.1"}
```

- `latest` = **2026.11.6** → **did NOT move past 2026.11.6**. Same value as the 2026-11-20 report.
- `beta` = **2026.11.10-beta.1** — published **2026-11-19T15:09:49.383Z**, i.e. **before** the window opened. **No newer beta published in-window.**
- `extended-stable` = **2026.10.33** — published **2026-11-18T03:11:16.913Z**, also before the window.

**Full publish timeline for every version published on/after 2026-11-17** (from the npm `time` map):

| version | published (UTC) |
|---|---|
| 2026.11.5 | 2026-11-17T09:59:33.472Z |
| 2026.10.33 | 2026-11-18T03:11:16.913Z |
| 2026.11.10-beta.1 | 2026-11-19T15:09:49.383Z |
| 2026.11.6 | 2026-11-19T16:52:13.687Z |

- **Explicit negative:** filtering the npm `time` map for `published_at > 2026-11-20T09:28:00Z` returns **an empty set**. Zero npm publishes of any kind (stable, beta, extended-stable) in-window. Package `modified` = 2026-11-19T16:52:14.078Z (i.e. the registry doc has not been touched since 2026.11.6). Package created 2026-01-29T11:08:11.861Z; **304 published versions** in total.
- The last 4 beta publishes were 2026.11.5-beta.1 (11-04), -beta.2 (11-11), -beta.3 (11-15), -beta.4 (11-16) — the **2026.11.10-beta.1 prerelease is still the newest prerelease**, unchanged for ~18 h.

**GitHub releases (last 8, `?per_page=8`):**

| tag | prerelease | published_at |
|---|---|---|
| v2026.11.10-beta.1 | true | 2026-11-19T15:45:29Z |
| v2026.11.6 | false | 2026-11-19T17:26:46Z |
| v2026.10.33 | false | 2026-11-18T04:15:53Z |
| v2026.11.5 | false | 2026-11-17T10:47:56Z |
| v2026.11.4 | false | 2026-11-16T04:17:42Z |
| v2026.11.5-beta.4 | true | 2026-11-16T03:12:26Z |
| v2026.11.5-beta.3 | true | 2026-11-15T00:31:00Z |
| v2026.11.5-beta.2 | true | 2026-11-12T00:43:25Z |

- **Explicit negative:** **no GitHub release was published after 2026-11-20T09:28:00Z.** The newest release of any kind is v2026.11.6 (2026-11-19T17:26:46Z). → No release-body highlights can be quoted for this window.

---

## 2. Security — NO new advisory; GHSA-pw3x-g8v8-fvj2 still un-CVE'd and unfixed-by-PR

Source: `https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10` · `https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+GHSA-pw3x` · `https://api.github.com/repos/openclaw/openclaw-enterprise/security-advisories?per_page=5`

10 advisories returned; the newest by publish time is still **GHSA-pw3x-g8v8-fvj2**, published **2026-11-19T02:01:59Z** (7 h 26 m *before* this window opened → carry-over, not a new finding).

Raw fields for GHSA-pw3x-g8v8-fvj2 (re-read this run):
- `cve_id`: **`null`** — **still no CVE assigned.**
- `updated_at`: **`2026-11-19T02:01:59Z`** — **identical to `published_at`**, i.e. **the advisory has not been updated in-window.**
- `withdrawn_at`: `null`; `severity`: `high`; CVSS 3.1 `AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H`, **score 8.8**.
- Summary: "OpenClaw delegation could skip approval for restricted agents".
- Vulnerable ranges: `>= 2026.9.2, < 2026.10.33` (patched 2026.10.33) and `>= 2026.11.1, < 2026.11.4` (patched 2026.11.4).

**Explicit negatives:**
- **No new advisory** published in-window (newest is 2026-11-19T02:01:59Z).
- **No advisory update** in-window (`updated_at` unchanged).
- **No CVE id** assigned.
- **No linked fix PR / no issue referencing GHSA-pw3x**: GitHub search `repo:openclaw/openclaw is:issue GHSA-pw3x` → **`total_count = 0`** (the search covers both issues and PRs). Searching for the issue numbers referenced by the advisory's own users (#202925, #202213) as PR text also returns **`total_count = 0`** each.
- The remaining 9 advisories are all from **2026-09-11** and are unchanged (2 `high`: GHSA-3mq7-q27j-mq7q "Exec approvals could outlive their reviewed working directory", GHSA-9m4p-cqp4-jppq "WhatsApp login tool could reach non-owner turns"; 7 `medium`).
- **Enterprise repo has zero advisories** (`[]`).

**Positive security note (in-window):** PR **#202941** "fix(gateway): enforce the session permission mode on every Gateway tool call" **merged 2026-11-21T06:05:33Z**. Body (verbatim excerpt): *"On a Claude CLI chat it did not: the CLI calls OpenClaw's own tools through the Gateway (`mcp__openclaw__read` and friends), and the Gateway applied the session's mode only to restricted senders. An owner's Claude CLI chat in `workspace` mode read files anywhere on the host."* — the Gateway now applies the session's permission policy for every caller. This is a **privilege-scope narrowing fix**, not tied by name to GHSA-pw3x.
Source: `https://api.github.com/repos/openclaw/openclaw/pulls/202941`

---

## 3. Catalog & Actions — publish workflow RECOVERED (6 straight green runs)

Sources: `https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=20` and `?per_page=60` · `https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-20T09:00:00Z` · `https://api.github.com/repos/openclaw/catalog/pulls?state=open&per_page=30`

**"Publish catalog" run history (run numbers are the repo's own counters):**

| run | created (UTC) | conclusion |
|---|---|---|
| 752 | 2026-11-21T08:26:44Z | **success** |
| 751 | 2026-11-21T04:26:28Z | **success** |
| 750 | 2026-11-21T02:13:42Z | **success** |
| 749 | 2026-11-21T00:41:31Z | **success** |
| 748 | 2026-11-20T20:24:41Z | **success** |
| 747 | 2026-11-20T18:42:20Z | **success** ← recovery point |
| 746 | 2026-11-20T16:24:52Z | failure |
| 745 | 2026-11-20T12:30:04Z | failure |
| 744 | 2026-11-20T08:27:56Z | failure |
| 743 | 2026-11-20T04:27:31Z | failure |
| 742 | 2026-11-20T00:41:06Z | failure |
| 741 | 2026-11-19T20:25:19Z | failure |
| 740 | 2026-11-19T16:26:03Z | failure |
| 739 | 2026-11-19T12:29:49Z | success |

- **Answer to the question asked: yes — the "Publish catalog" workflow is green again.** It failed **7 consecutive times (runs 740→746)**, the last three of them *inside* this window (744, 745, 746), then flipped to **success at run 747 (2026-11-20T18:42:20Z)** and has stayed green for **6 consecutive runs** through 2026-11-21T08:26:44Z (window close ~09:28Z). Downtime from first failure to recovery: **~26 h 16 m**; time from last failure to first green: **2 h 17 m**.
- **Catalog commits since 2026-11-20T09:00:00Z (6 commits, verbatim messages):**
  - `2026-11-21T08:29:13Z` — `catalog: 47 providers, 1387 models`
  - `2026-11-21T04:29:38Z` — `catalog: 47 providers, 1387 models`
  - `2026-11-21T02:13:38Z` — **`build(deps): keep catalog hosting and CI pins current`** ← the only non-generated commit; timestamped 5 s before the first green publish run (750), so it is the most plausible fix commit.
  - `2026-11-21T00:44:21Z` — `catalog: 47 providers, 1389 models`
  - `2026-11-20T20:27:27Z` — `catalog: 47 providers, 1389 models`
  - `2026-11-20T18:44:47Z` — `catalog: 47 providers, 1389 models`
- Model count moved **1389 → 1387** (2 models dropped) between 2026-11-21T00:44Z and 04:29Z, and stayed at 1387 afterwards.
- **Open PRs in `openclaw/catalog`: 1** — **#8** "feat(catalog): host typed decision catalog v3", opened 2026-09-24, last updated 2026-11-14. → **No fix PR is pending unmerged; the fix is already in `main`.**
- Other workflows observed green in-window: `pages build and deployment` (success ×2), `CodeQL` (success ×2), `Check catalog hosting` (success ×2), `ClawSweeper Dispatch` (success ×4, skipped ×4).

---

## 4. Tracker velocity — issues down, merges up, P0/P1 sharply down

Sources: `https://api.github.com/repos/openclaw/openclaw` · `https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z&per_page=100&sort=created` · `...is:pr+is:merged+merged:<window>` · plus per-label queries for P0/P1/P2/P3.

**Repo counters (raw API):**
- `openclaw/openclaw`: stars **394,946** (yesterday 394,867 → **+79**), forks **82,932**, open_issues_count **8,699** (yesterday 8,422 → **+277**; GitHub's `open_issues_count` includes PRs), subscribers 1,693, `pushed_at` 2026-11-21T09:26:52Z.

**Velocity (GitHub search `total_count`, i.e. complete, not first-100-truncated):**

| metric | today | 2026-11-20 report | delta |
|---|---|---|---|
| new issues in-window | **155** | 187 | **−32 (−17 %)** |
| merged PRs in-window | **375** | 300 | **+75 (+25 %)** |
| P0 issues | **5** | 10 | **−5** |
| P1 issues | **17** | 26 | **−9** |
| P2 issues | **81** | 122 | −41 |
| P3 issues | **51** | 25 | +26 |

- Label breakdown 5 + 17 + 81 + 51 = **154**; 1 issue is unlabeled. Per-label tallies come from **label-scoped queries** (`is:issue label:P0 created:<window>`), so they are **complete `total_count` values, not first-100 truncations** — this removes yesterday's noted limitation for the priority buckets.
- The first page of the unlabelled query returned **100 of 155** items (`incomplete_results: false`), so the *full title list* of all 155 is not individually enumerated below; the P0/P1 titles below are complete (5 + 17 = 22 items, all fetched).

### The 5 new P0s (titles verbatim)

| # | created | state | title |
|---|---|---|---|
| 202518 | 2026-11-20T14:23:26Z | open | [Bug]: claude-cli run never closes after sessions_spawn + sessions_yield in long sessions; later turns reuse t… |
| 202461 | 2026-11-20T12:01:41Z | open | [Bug]: Model setup cannot restore a small config after a failed activation ("OpenClaw blocked this config upda… |
| 202925 | 2026-11-21T04:13:31Z | open | [Bug]:macOS 2026.11.5: update repair refuses executor ownership although shared lease is absent |
| 202430 | 2026-11-20T10:52:22Z | **closed** | [Bug]: Self-update blocked after /tmp handoff DB identity changes for a completed activation receipt |
| 202822 | 2026-11-21T01:08:32Z | **closed** | [Bug]: Onboarding run through npx prints bare `openclaw` next-step commands, which fail with "command not found" |

→ 3 of 5 remain open; 2 were already closed at fetch time.

### The 17 new P1s (titles verbatim)

| # | created | state | title (truncated) |
|---|---|---|---|
| 202415 | 2026-11-20T10:00:30Z | closed | 2026.11.6: request after a deferred tool call (web_search via tool-search) ends with assistant text on openai-… |
| 202458 | 2026-11-20T11:55:01Z | open | [Bug]: Setup leaves a verified sign-in inactive after installing the provider plugin ("The connection changed… |
| 202467 | 2026-11-20T12:12:50Z | closed | [Bug]: Control UI freezes in WebKit when opening the Sessions filter menu (Linux app 2026.11.6) |
| 202473 | 2026-11-20T12:32:41Z | open | [Mac App] node system.run still drops the WebSocket mid-command on 2026.11.5 (loopback, same host). Live repro… |
| 202585 | 2026-11-20T16:39:16Z | open | An isolated --profile Gateway opened the default profile's agent database ⚠️ `impact:security`, `clawsweeper:needs-security-review` |
| 202669 | 2026-11-20T18:58:02Z | open | [Bug]: A final reply to a steered message ends the run while the message that started it is still unanswered |
| 202672 | 2026-11-20T19:10:05Z | open | [Bug]: anthropic-messages route: MiniMax-M3.1-Flash intermittently rejected at terminal tool-argument validation (0 on M… |
| 202729 | 2026-11-20T21:23:23Z | closed | [Bug]: Telegram polling silent stall → health-monitor restart fails repeatedly with 'still owns running work' (~49 min i… |
| 202772 | 2026-11-20T23:01:13Z | open | [Bug]: Update rollback restores SQLite DBs in journal_mode=DELETE; next update's Doctor fails with maintenance lease sql… |
| 202794 | 2026-11-20T23:57:24Z | open | [Bug]: `openclaw message send --media` fails with AgentSelectionRequiredError on explicit multi-agent gateways despite v… |
| 202915 | 2026-11-21T03:53:59Z | open | [Bug]: FaceTime realtime calls: openclaw_agent_consult is always refused with "Gateway is temporarily unavaila… |
| 202916 | 2026-11-21T03:55:06Z | open | [Bug]: FaceTime call is hung up with "SoX playback exited (0)" when audio is written right after the playback process is… |
| 202927 | 2026-11-21T04:21:23Z | open | [Bug]: 2026.11.6 never resumes Telegram turns interrupted by a Gateway restart (SessionBindingError); please ship #19137 |
| 202936 | 2026-11-21T05:04:39Z | open | [Bug]: file secrets provider's 5 s read timeout fires during busy gateway startup: gateway aborts, or agent DB stays deg… |
| 202947 | 2026-11-21T05:42:09Z | closed | [Bug]: Gateway logs "shutdown completed cleanly" then never exits — process killed by systemd SIGKILL on every restart |
| 202958 | 2026-11-21T06:13:30Z | open | Accepted chat turns fail across Telegram and WebChat with closed database execution admission (2026.11.4) |
| 203005 | 2026-11-21T08:04:16Z | open | Retrying a 2026.9.37 npm update after rollback fails to acquire the agent maintenance lease |

**Pattern:** the **upgrade / update-repair path is still the dominant P0/P1 cluster** (202925, 202430, 202461, 202772, 202794, 203005, 202458, 202936, 202958 = 9 of 22). This is the *same* story as the 2026-11-20 report, but the volume is down (22 vs 36 P0/P1) and the newly-opened P0s are dominated by two families: **agent-update/lease/executor problems** and **session/message-loss on restart** (202927, 202958, 202936, 202915, 202916, 202669, 202794).

### Merged PRs in `openclaw/openclaw`
- `total_count = 375` merged in-window (search `is:pr is:merged merged:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z`).
- First page (100 items, all dated 2026-11-21) includes: #203016 "fix(test): make ingress expiry and resubmission checks meaningful", #203014 "fix: keep pricing deadline tests independent of unrelated timers", #203011 "fix(ci): align gateway concurrency fixtures with performance mode", #202994 "fix(github): recover interrupted publications on the next publish", #202989 "fix: reduce prompt memory across concurrent runs", #202987 "fix(update): keep live writes moving during update verification", #202985 "fix(doctor): avoid state copies during offline update checks", #202982 "fix: follow-up publishes from a PR's own checkout update that PR instead of opening another", #202941 "fix(gateway): enforce the session permission mode on every Gateway tool call".
- **Update-path theme is dominant** in the update-scoped sub-query (375 matches, 0 mismatched): #202987, #202558 "fix: show update repairs as repairs and keep the failed update visible", #202546, #202670, #202678, #201366, #202985, #201560 "fix: update the checkout a macOS Gateway actually runs", #202692, #202696, #201570 "fix: preserve the running installation when an agent updates its Gateway", #202541, #202414.

**Status of yesterday's two blocker issues (re-checked this run):**
- **#202925** (macOS update-repair lockup, clawstat's gate blocker): state **open**, `closed_at: null`. Linked-PR search → **total_count 0**. Still unfixed.
- **#202213** (2026.11.6 refuses to read compressed session archives): state **open**, `closed_at: null`. Linked-PR search → **total_count 0**. The two PRs it asks for, **#192743** ("fix(sessions): read compressed archives as streams instead of refusing expansion", merged **2026-11-04T14:36:58Z**) and **#193548** ("fix(sessions): stop archive reads from filling temporary storage", merged **2026-11-05T16:21:26Z**), are indeed **merged but not in a stable release** — confirming the report's claim.
- #202518 (P0, claude-cli run never closes) and #202461 (P0, model setup cannot restore small config) also remain **open**.

---

## 5. npm demand — last complete day 2026-11-19; week down 8.7 %

Source: `https://api.npmjs.org/downloads/range/2026-10-20:2026-11-21/openclaw`

**Daily series (verbatim):**

| day | weekday | downloads |
|---|---|---|
| 2026-10-20 | Tue | 0 *(range-boundary artifact)* |
| 2026-10-21 | Wed | 561,057 |
| 2026-10-22 | Thu | 399,386 |
| 2026-10-23 | Fri | 607,986 |
| 2026-10-24 | Sat | 572,592 |
| 2026-10-25 | Sun | 667,822 |
| 2026-10-26 | Mon | 474,738 |
| 2026-10-27 | Tue | 391,520 |
| 2026-10-28 | Wed | 341,738 |
| 2026-10-29 | Thu | 384,516 |
| 2026-10-30 | Fri | 375,102 |
| 2026-10-31 | Sat | 292,528 |
| 2026-11-01 | Sun | 318,468 |
| 2026-11-02 | Mon | 321,275 |
| 2026-11-03 | Tue | 393,121 |
| 2026-11-04 | Wed | 400,586 |
| 2026-11-05 | Thu | 369,131 |
| 2026-11-06 | Fri | 504,091 |
| 2026-11-07 | Sat | 493,523 |
| 2026-11-08 | Sun | 403,698 |
| 2026-11-09 | Mon | 349,424 |
| 2026-11-10 | Tue | 427,925 |
| 2026-11-11 | Wed | 429,437 |
| 2026-11-12 | Thu | 495,873 |
| 2026-11-13 | Fri | 478,823 |
| 2026-11-14 | Sat | 471,274 |
| 2026-11-15 | Sun | 368,783 |
| 2026-11-16 | Mon | 483,549 |
| 2026-11-17 | Tue | 390,660 |
| 2026-11-18 | Wed | 346,941 |
| **2026-11-19** | **Thu** | **294,218** ← last complete day |
| 2026-11-20 | Fri | **0** ← reporting lag |
| 2026-11-21 | Sat | **0** ← reporting lag |

**Last complete day = 2026-11-19 (Thu) at 294,218.** The zeros on 11-20 and 11-21 are npm's normal reporting lag for the most recent 1–2 days (the same artifact is visible at the range start, 2026-10-20 = 0), **not a demand collapse**. Do not read a zero as a data point.

**Week-over-week:**
- As literally asked, 11-14→11-20 = **2,355,425** vs 11-07→11-13 = **3,078,703** (−23.5 %) — but this comparison is **distorted** because 11-20 is a lag-zero, so the "week" has only 6 real days.
- **Aligned 6-day comparison:** 11-14→11-19 = **2,355,425** vs 11-07→11-12 = **2,599,880** → **−9.4 %**.
- **Rolling 7 complete days:** 11-13→11-19 = **2,834,248** vs 11-06→11-12 = **3,103,971** → **−8.7 %**. (The 2,834,248 figure exactly matches clawstat's `calibration.npm_weekly_downloads = 2834248` read in the same run — independent cross-check ✅.)
- Yesterday's report had 11-12→11-18 = 3,035,903 and 11-05→11-11 = 2,977,229 (+1.97 %). **The direction has reversed: the weekly total is now falling (−8.7 %).**

**Weekday attribution:** the decline is **not** a uniform weekday effect. Comparing same-weekday values week-over-week:
- Sat 11-14 471,274 vs Sat 11-07 493,523 → −4.5 %
- Sun 11-15 368,783 vs Sun 11-08 403,698 → −8.6 %
- Mon 11-16 483,549 vs Mon 11-09 349,424 → **+38.4 %** (a strong Monday bounce, the week's peak)
- Tue 11-17 390,660 vs Tue 11-10 427,925 → −8.7 %
- Wed 11-18 346,941 vs Wed 11-11 429,437 → −19.2 %
- Thu 11-19 294,218 vs Thu 11-12 495,873 → **−40.6 %** ← the single biggest drop

→ The drop is **concentrated in the back half of the week (Wed–Thu, −19 % and −41 %)** and the last complete day, **2026-11-19 = 294,218, is the lowest complete day since 2026-10-31 (292,528)**. Note that **2026.11.6 was published on 2026-11-19T16:52:13Z** (late on that day) and **did not lift installs on its publish day** — the release-day figure is the lowest in six weeks, which is a mildly negative signal for release-driven install demand. Caveat: this is a single day and the Friday/Saturday numbers are still unreported, so the second half of the week is not fully observable yet.

---

## 6. Enterprise — heavy refactor merge flow, RFC-0040/0042 already landed before the window

Sources: `https://api.github.com/repos/openclaw/openclaw-enterprise` · `https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>&per_page=100` · `https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5` · `https://api.github.com/repos/openclaw/openclaw-enterprise/pulls/{6336,6434,6435,6442}`

- Repo counters: stars **482** (yesterday 480 → **+2**), forks **126** (yesterday 125 → **+1**), open_issues_count **460** (yesterday 425 → **+35**, includes open PRs), `pushed_at` 2026-11-21T09:29:52Z, not archived.
- **Merged PRs in-window: `total_count = 136`** (yesterday 115 → **+21, +18 %**). First 100 fetched are all dated 2026-11-20/21.
- **Explicit negative: no enterprise GitHub Release exists at all** — `https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5` returns `[]`. The enterprise product ships without tagged GitHub releases.

**RFC-0040 / RFC-0042 status (re-checked with direct PR fetches):**

| PR | title | merged_at | in-window? |
|---|---|---|---|
| **#6336** | feat: add Agent HTTP chat completions (RFC-0040) | **2026-11-17T17:25:29Z** | **No — 3 d 16 h before window open** |
| **#6434** | RFC-0042: Continue sessions across compatible redeployments | **2026-11-18T05:49:02Z** | **No** |
| **#6435** | Fix dedicated Codex continuation after Gateway restart | **2026-11-18T05:48:51Z** | **No** |
| **#6442** | Continue interrupted sessions across compatible redeployments | **2026-11-18T08:51:46Z** | **No** |

- **Answer: no, neither RFC-0040 (agent HTTP chat completions) nor RFC-0042 landed in this window.** Both are already **merged before the window** — the last RFC-0040 PR remains **#6336**, and RFC-0042's implementation PRs are **#6434 / #6435 / #6442** (all merged 2026-11-18). A title scan of the 100 fetched in-window enterprise merges found **0 RFC-titled PRs** (0 matches for "0040", "0042" or "RFC").
- RFC-0040 is still being sliced up: **#6364** "feat(iam): let Default users provision Agents (RFC-0040 slice 2)" (opened 2026-11-17) and **#4889** "RFC-0040: Bind dedicated Codex turns to their Sandbox execution" (opened 2026-11-06) are both **open, unmerged** — i.e. RFC-0040 remains an open, multi-PR program rather than a landed feature.
- **In-window enterprise merge themes** (verbatim titles): heavy **OCC (OpenClaw Control Centre) decomposition** — #6848 "Separate the OCC controller from the package exports", #6843 "Assemble OCC controller services in their own module", #6841 "Extract OCC deployment requests and locked admission", #6838 "Separate controller audit attribution and shared resource values", #6837 "Extract OCC Agent termination and credential withdrawal", #6835 "Extract OCC Agent draft admission and repository policy", #6834 "Extract OCC Credential Source lifecycle operations", #6829 "Extract OCC Agent credential admission and operate grants", #6826 "Extract saved OAuth connection operations from OCC", #6824 "Extract OCC Namespace lifecycle operations", #6819 "Extract OCC Configuration operations and validation", #6818 "Extract OCC Namespace IAM policy operations", #6817 "Extract OCC Harness authentication and topology checks", #6815 "Extract OCC Sandbox policy operations", #6814 "Extract the OCC Agent provisioning worker", #6813 "Extract OCC Secret and Service Account operations", #6812 "Move OCC persistence contracts into neutral ports", #6811 "Extract OCC protected egress admission and request authority", #6810 "Extract OCC transaction scope and request authority", #6809 "Extract OCC Driver selection and capability reporting", #6807 "refactor(occ): extract Agent device authorization flow", #6806 "Extract OCC Agent and revision queries", #6805 "Extract Plugin discovery from the OCC controller", #6804 "Extract OCC Preset management from the controller" — plus **PostgreSQL/OCC test migration to TypeScript** (#6859 "Port nine PostgreSQL revision worker cases to TypeScript", #6857 "Move six static egress admission tests to TypeScript", #6849 "Move OCC lifecycle and audit test logic to TypeScript"), **OpenShell** work (#6865, #6823), and **Git/push credential** work (#6862, #6825, #6836).
- **Reading:** enterprise engineering this window is almost entirely *internal refactoring and test-hardening of the OCC control plane* — an enterpriseization signal (control plane, IAM, namespaces, sandbox policy, egress admission, secret stores, PostgreSQL-backed revisions), not a new user-facing capability.

---

## 7. clawstat.us — recommendation FLIPPED to ⚠️ "Update with care"; recommended_version still 2026.11.3

Source: `https://clawstat.us/latest.json` (raw, read this run)

| field | today (2026-11-21, assessed_at 2026-11-21T05:33:05.677Z) | yesterday (2026-11-20 report) |
|---|---|---|
| `recommendation` | **⚠️** | ✅ |
| `status.key` | **`care`** ("Update with care") | `wait` ("Too new to call") |
| `status.label` | "Update with care" | — |
| `recommended_version.version` | **2026.11.3** (kind `settled`, age 11 d) | **2026.11.3** (unchanged) |
| `version` (assessed) | 2026.11.6 | 2026.11.6 |
| `calibration.tracked_total` | **74** | 50 |
| `known_issues` | **60 (capped, `issues_capped: true`, `issues_cap: 60`)** | 50 |
| `confidence` | medium | — |
| `evidence_gate.verdict` | ⚠️ | ⚠️ |
| `evidence_gate.blockers` | **[202925]** | [202925] |
| `freshness.days_since_release` | **2** | 1 |
| `freshness.runs_assessed` | **5** | — |
| `npm_weekly_downloads` | **2,834,248** (matches my §5 computation) | 3,035,903 |
| `platform_impact` | all 11 surfaces = `high` | — |
| `hotfix_chain` | `[]` (empty) | — |

**Headline (verbatim):** *"Update with care: a macOS update-repair lockup, broken session-archive reads and shaky upgrade paths — nothing widespread yet."*

**Change vs the 2026-11-20 state — this is a real downgrade, not a "too new to call" state:** the headline symbol moved from ✅ (wait) to ⚠️ (care). `recommended_version` **did not** move — it still recommends **2026.11.3**, and 2026.11.6 remains flagged `settled: false`, `age_days: 2`.

**Known-issue drivers (top of the 60-item list):**
1. **#202213** — "[Bug]: 2026.11.6 refuses to read compressed session archives; please ship #192743 and #193548 in a stable release" — severity **high**, category **regression** (rank-1 high-severity)
2. **#202925** — "[Bug]:macOS 2026.11.5: update repair refuses executor ownership although shared lease is absent" — severity **critical**, category **post_release** (the single gate blocker)
3. **#202518** — claude-cli run never closes after sessions_spawn + sessions_yield (high)
4. **#202672** — anthropic-messages route: MiniMax-M3.1-Flash intermittently rejected at terminal tool-argument validation (high)
5. **#202258** — Bootstrap-token connect fails with 'duplicate column name: setup_id' (high)
6. **#202270** — Active goal keeps posting continuation replies to Discord after context budget exhausted (high)
7. **#202296** — Homebrew loses Gateway egress proxy CA when it filters subprocess environment (high)
8. **#202405** — HTTP pool shutdown fallback leaves active streams and Node alive (2026.11.5 / 2026.11.6) (high)
9. **#202461** — Model setup cannot restore a small config after a failed activation (high)
10. **#202794** — `openclaw message send --media` fails with AgentSelectionRequiredError (high)
11. **#202830** — manifest without activation.onStartup silently stops an enabled standalone plugin (high)
12. **#202915** — FaceTime realtime calls: openclaw_agent_consult always refused (high)

**Flip conditions (verbatim):**
- "⚠️ eases to ✅ once a stable release ships #192743 (session archive reads) and a fix for the macOS update-repair lockup (#202925) — currently only staged toward v2026.11.10-beta.1"
- "⚠️ hardens to ⏸️ if the macOS update-activation failure (#202925) draws widespread reports — dozens of 👍 or a megathread — indicating the repair lockup hits many updaters"
- "⚠️ hardens to ⏸️ if more users confirm the update path is broken across install methods (#202250, #201561, #201974) and no stable fix lands in v2026.11.10"

**Sentiment summary (verbatim excerpt):** *"Reports are detailed and technically credible (#202296 and #202405 carry the 🦞 diamond-lobster rating; #202925 includes full diagnostics), but community engagement is near-silent — 3 👍 total across 60 tracked issues on ~2.8M weekly installs — suggesting a low blast radius rather than a widespread backlash."*

**Independent confirmation from GitHub (my own §4 checks):** #202925 is still **open** with **no linked PR**, and #202213 is still **open**; #192743/#193548 are merged but not in any stable release. → clawstat's blocker is **not** resolved.

---

## 8. Official surfaces — showcase & press byte-identical; **RSS changed: new blog post**

Sources: `https://openclaw.ai/showcase` · `https://openclaw.ai/press` · `https://openclaw.ai/rss.xml` (raw bytes → `tmp/2026-11-21/site_*.raw`)

MD5 of raw bytes (computed this run):

| surface | raw md5 (2026-11-21) | raw md5 (2026-11-20 report) | md5 after normalizing `/assets/<hash>` → `/assets/HASH` | verdict |
|---|---|---|---|---|
| https://openclaw.ai/showcase | `e90d1564b23498328640776d35fe8060` | `e90d1564b23498328640776d35fe8060` | `788068fae39fe1442d4bbf6c26c38193` | **byte-identical — no change** |
| https://openclaw.ai/press | `c1885462edd97eb7a32a4f91df814eef` | `c1885462edd97eb7a32a4f91df814eef` | `fbbc0f4b7a6544da0e84632703279b86` | **byte-identical — no change** |
| https://openclaw.ai/rss.xml | **`faa88be5eeb86b01628c51ee708e936e`** | `d840797cc7691f44c63357dab085a79a` | `faa88be5eeb86b01628c51ee708e936e` | **CHANGED — real content change** |

**Interpretation of the fingerprint question:** for RSS, the raw md5 **changed** and the normalized md5 is **identical to the raw md5** — i.e. the RSS feed contains **no `/assets/<hash>` references at all**, so there is no Astro build-fingerprint effect in play. **This is a genuine content change**, not a rebuild artifact. For showcase and press the raw bytes are unchanged, so the fingerprint question is moot there.

**What changed in the RSS:** item count **26 → 27**. The new first item:
- Title: **"OpenClaw Isn't Free."**
- Link: `https://openclaw.ai/blog/openclaw-isnt-free/`
- pubDate: **Fri, 20 Nov 2026 00:00:00 GMT**
- Description: *"If OpenClaw is so powerful, why is it free?"*

Remaining items unchanged: "OpenClaw is coming to Shenzhen" (Nov 13), "Use new models in OpenClaw without an update" (Nov 6), "Shattering Silos with OpenClaw Multiplayer" (Nov 5), "Come Build With Us: OpenClaw Focus Weeks" (Oct 21), "How PJ helps small businesses use OpenClaw" (Oct 16), …

**The new post's substance** (fetched `https://openclaw.ai/blog/openclaw-isnt-free/`, raw HTML → text, this run) — **this is the most significant platform-positioning item of the window:**
- Author **Joe Pishgar**, Nov 20, 2026, 7 min read.
- Framing: "OpenClaw isn't free. This community pays for it in time and energy."
- **Explicit organizational claim: "We're a nonprofit, open-source foundation. Community-driven. Community-backed."** → the first explicit public statement of a **nonprofit-foundation** posture for the project.
- Stated scale: **3,606 contributors**, **83,000 forks**, **279 releases**, and **~120,000 human-hours ≈ "nearly 58 years of full-time work"**.
- Methodology section (verbatim): *"According to GitRanks, OpenClaw recorded 52,929 merged pull requests over a 12-month period… our model assigns 9 minutes of human effort per PR to 32,939 high-volume contributions and 78 minutes to the remaining 19,990. That's (32,939 × 0.15) + (19,990 × 1.3) = 30,928 development hours."* Plus 17,246 h on unmerged PRs, 536 h on open PRs, 22,430 h reviewing/triaging PRs, 22,050 h on ~63,000 issues, 20,000 h community support/docs/education, 5,000 h skills/ecosystem, 279 h release management → **118,470 h rounded to 120,000**. The post explicitly caveats: *"the hours per activity and work outside GitHub are modeled assumptions, not recorded timesheets."*
- Argument for user ownership over megacorporate AI platforms; call to action: join Discord/forum, contribute, *"you don't even need to know how to code."*
- **Cross-check:** the post's "83,000 forks" matches the GitHub API's `forks_count = 82,932` read in the same run ✅. The post's "279 releases" is close to but not equal to npm's 304 published versions (different counting basis).

**Explicit negatives:** the new 2026.11.6 stable release and the 2026.11.10-beta.1 prerelease still produced **no announcement, no press item, and no showcase entry** — showcase and press are byte-for-byte unchanged for a third consecutive day. The only official-surface movement in-window is this one blog post.

---

## 9. Verification notes / limitations

1. **GitHub search rate limit** was hit once mid-run (HTTP 403, unauthenticated): the `repo:openclaw/catalog is:pr is:open` *search* query failed. I worked around it with the REST list endpoint `GET /repos/openclaw/catalog/pulls?state=open&per_page=30` (→ 1 open PR, #8). No data was lost.
2. **Core API remaining at run end:** 45/60 (unauthenticated). **Search API:** 10/min — several `total_count` queries were run in quick succession; each returned `incomplete_results: false`, so counts are trustworthy, but a couple of the later label queries could have been throttled if re-run.
3. **Only the first 100 items** of the 155 in-window issues and of the 375 in-window merged PRs were individually listed; the `total_count` values (155, 375, 136, 5, 17, 81, 51) are complete API counts, but per-item detail outside page 1 is not individually verified.
4. **Catalog run *logs*** were not readable (yesterday's report documented a 403 on the logs endpoint); I did not re-attempt them. The conclusion "publish workflow is green" is based on the workflow run `conclusion` field and on commit timing, not on the internal step that previously failed.
5. **The npm daily series lags ~1–2 days**; 2026-11-20 and 2026-11-21 are zeros from lag, and 2026-10-20 (the range start) shows the same artifact. All week-over-week statements above therefore use complete days only.
6. **`open_issues_count` includes pull requests** (both for openclaw/openclaw and openclaw/openclaw-enterprise), so the +277 / +35 deltas are "open issues + open PRs", not pure issue counts.
7. **GHSA-pw3x-g8v8-fvj2** — I checked GitHub only. I did not re-query OSV/NVD for a CVE assignment, so a CVE assigned in another database would not be detected here (yesterday's report had the same caveat).
8. **clawstat.us's `known_issues` list is capped at 60** (`issues_capped: true`) while `calibration.tracked_total` is 74 — the 60-item list is not the complete tracked set.
9. The blog-post body was read via the rendered page HTML stripped of tags; line breaks/paragraph structure were lost in my extraction, so verbatim quotes are sentence-level, not line-level.

---

## 10. Source list (all read this run)

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw (`time` map only)
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10
- https://api.github.com/repos/openclaw/openclaw-enterprise/security-advisories?per_page=5
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+GHSA-pw3x
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:{P0|P1|P2|P3}+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z&per_page=100&sort=created
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z&per_page=100
- https://api.github.com/repos/openclaw/openclaw (repo counters)
- https://api.github.com/repos/openclaw/openclaw/issues/{202925,202213,202518,202461}
- https://api.github.com/repos/openclaw/openclaw/pulls/{202941,192743,193548}
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=20 and ?per_page=60
- https://api.github.com/repos/openclaw/catalog/commits?per_page=20&since=2026-11-20T09:00:00Z
- https://api.github.com/repos/openclaw/catalog/pulls?state=open&per_page=30
- https://api.github.com/repos/openclaw/openclaw-enterprise (repo counters)
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:<window>&per_page=100
- https://api.github.com/repos/openclaw/openclaw-enterprise/pulls/{6336,6434,6435,6442}
- https://api.npmjs.org/downloads/range/2026-10-20:2026-11-21/openclaw
- https://clawstat.us/latest.json
- https://openclaw.ai/showcase · https://openclaw.ai/press · https://openclaw.ai/rss.xml · https://openclaw.ai/blog/openclaw-isnt-free/

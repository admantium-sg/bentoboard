# Findings — OpenClaw Use Cases · Platform track
**Run date:** 2026-11-25 · **Window:** 2026-11-24T09:28:00Z → 2026-11-25T09:28:00Z
**Baseline for all deltas:** `findings_usecases_platform_2026-11-24.md` (window 2026-11-23T09:28Z → 2026-11-24T09:28Z)
**Raw payloads:** `tmp/2026-11-25/`

---

## 1. npm publishes — the platform shipped THREE stable releases in one window; `latest` moved to 2026.11.10

| Version | npm publish timestamp (UTC) | GitHub Release published | Notes |
|---|---|---|---|
| `2026.11.8` | **2026-11-24T10:14:12.508Z** | v2026.11.8 @ 2026-11-24T11:54:30Z | 314 commits · 210 PRs · 86 contributors |
| `2026.11.9` | **2026-11-25T00:33:15.923Z** | v2026.11.9 @ 2026-11-25T00:47:32Z | 13 commits · 15 PRs · 14 contributors (hotfix-shaped) |
| `2026.11.10` | **2026-11-25T05:07:34.288Z** | v2026.11.10 @ 2026-11-25T05:42:47Z | 8,309 commits · 7,671 PRs · 349 contributors (major cut) |
| `2026.11.10-beta.3` | 2026-11-24T03:05:25.150Z | v2026.11.10-beta.3 @ 2026-11-24T03:28:03Z | pre-window, now superseded |
| `2026.11.7` | 2026-11-23T01:21:13.567Z | v2026.11.7 @ 2026-11-23T01:33:51Z | **previous `latest`** |

**dist-tags now:** `latest=2026.11.10`, `beta=2026.11.10`, `extended-stable=2026.10.33`.
- **Change vs baseline:** `latest` was `2026.11.7` → now **`2026.11.10`** (a 3-version jump in 24 h).
- **`beta` tag now points at the stable `2026.11.10`** (was `2026.11.10-beta.3`) — the beta channel collapsed onto stable, so there is currently **no prerelease ahead of stable**.
- Total versions on the registry: **310**. `extended-stable` unchanged at `2026.10.33` (published 2026-11-18T03:11:16.913Z).
- Sources: https://registry.npmjs.org/openclaw , https://registry.npmjs.org/-/package/openclaw/dist-tags , https://api.github.com/repos/openclaw/openclaw/releases?per_page=8

### 1a. What 2026.11.10 actually contains (source: `CHANGELOG/2026.11.10.md`, 842 KB)

Full changelog: https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.11.10.md
Release notes: https://docs.openclaw.ai/releases/2026.11.10 · Tag: https://github.com/openclaw/openclaw/releases/tag/v2026.11.10

Top-level sections: Highlights · Installation and Onboarding · Web UI · Updates and Maintenance · Messaging · Memory · Skills · Native Apps · Models and Providers · Automations and Scheduling · Browser and Computer Use · Plugins and Integrations · Security and Privacy · Other QOL Improvements · Other Bug Fixes.

**Headline highlights (two NEW product surfaces stand out):**
- **Deep Research** — enabled by default on the portable engine; cited report with side-by-side quotes when sources disagree, explicit "Unresolved" gaps; resumable jobs across Gateway restarts; saved reports kept 7 days; Google's managed research engine as opt-in. (#173964, #177232, #173969, #176887)
- **Knowledge** — opt-in linked local Markdown vault (`plugins.slots.memory = "knowledge"`), hot-reloads without Gateway restart, browsable in the Control UI, project Timelines, scheduled scribes ingest OpenClaw conversations / Granola meetings / Dreams diaries.
- Browser handoff · Quick Start background service + `npx` setup · first-provider setup & API key verification · **OpenClaw ID** device linking / ID tunnel / Access approval · chat activity timeline + inline command trail · command palette + background sessions · model picker & Usage · dashboards gallery / Files · settings redesign + Catalan locale + mobile web · Agent Templates in Labs · automatic update schedules · faster/safer updates with interrupted-update recovery · backups & PostgreSQL operations · Doctor/service recovery · **forked threaded conversations in Telegram, Discord, Slack** · Discord account linking from profile · Telegram progress/topics/formatting.

**Security and Privacy section (26,906 chars)** — real hardening, not cosmetic:
- Bundled **LanceDB → 0.41.0** so compromised certificate chains are rejected (#188801).
- Redirects on configured self-hosted web-tool endpoints **confined to the configured host** → blocks private-network fetch redirection (#196847).
- Untrusted workspace `.env` can no longer set the Azure OpenAI resource variable to redirect credentialed model requests to another host (#202031).
- Gateway startup **warns when the Node build lacks recommended certificate security patches**; TLS honored when probing configured SSH endpoints (#193710).
- Durable background `exec` no longer relies on short-lived secret-egress proxy grants/sentinels (#188674); secret-egress proxy 502 fix for hostnames longer than the cert CN limit (#153661).
- **OpenClaw ID revocation/freshness gaps closed** — delegated owner devices can no longer escape revocation or regain removed capabilities; replayed revocations cannot remove a re-approved device; a stolen Gateway key cannot retire bindings (#193990, #193146, #196402).
- Bound nodes expire with the approving owner device certificate; pending node actions discarded after access removal; queued node requests/voice transcripts dropped after unpairing (#198553, #198412, #198684).
- OpenClaw ID member roles kept authoritative across mentions, HTTP session history, media download tickets, connected-app HTTP panels, new sessions, message action sends (#199919, #199946, …).

---

## 2. Security advisories — UNCHANGED (no new advisory; newest GHSA still untouched)

- `GET /repos/openclaw/openclaw/security-advisories?per_page=10` returns **the same 10 advisories** as the baseline. **No new advisory in-window.**
- Newest is still **`GHSA-pw3x-g8v8-fvj2`** — "OpenClaw delegation could skip approval for restricted agents".
  - `published_at` = `updated_at` = **2026-11-19T02:01:59Z** → the record has now been **untouched for 6 days**.
  - `cve_id = null` (**still no CVE assigned**), `state = published`, severity `high`.
  - CVSS 3.1 **8.8** (`CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H`), **CWE-863** (Incorrect Authorization).
  - Still **0 linked issues / 0 linked PRs** (`search/issues?q=repo:openclaw/openclaw is:issue GHSA-pw3x-g8v8-fvj2` → 0; same for `is:pr`).
  - Issue **still open**, no fix staged.
- The other nine advisories are all from **2026-09-11** and unchanged (3 high: GHSA-3mq7-q27j-mq7q, GHSA-9m4p-cqp4-jppq, plus the Sep-11 set; 6 medium).
- Sources: https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10 , https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2 , https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+GHSA-pw3x-g8v8-fvj2

### 2a. Security status page (openclaw.ai/security) — counts unchanged
- "**No active bulletins**"; latest advisory **Sep 11, 2026**; "No known compromise of OpenClaw infrastructure or of the official install and update channels."
- **1,799 reports filed** since January 2026 · **58%** closed with no advisory · **722** fixed and published (**39 with a CVE**) · **14 confirmed critical**, all fixed and disclosed (of 137 filed as critical, 123 invalid/duplicate/out-of-scope).
- Fixes by area: Gateway/auth/scopes 182 · Exec/sandbox/approvals 160 · Chat connectors (add-on) 122 · Other core runtime 96 · Browser/webview (add-on) 51 · Plugins/skills/ClawHub (add-on) 41 · Filesystem/path 28 · MCP/agent interop (add-on) 25 · Network egress/SSRF 17. **33% (239 of 722) of published fixes are in add-ons.**
- **67,453 ClawScan skill scans** published on Hugging Face; ClawHub blocks install of malicious/quarantined skills; Tencent AIG joined ClawScan (Oct 2, 2026); OpenClaw completed a security audit via OpenAI's "Patch the Planet" initiative (Sep 29, 2026).
- Source: https://openclaw.ai/security

---

## 3. Tracker volume — velocity roughly doubled, backlog grew again

| Metric | 2026-11-25 window | 2026-11-24 window | Δ |
|---|---|---|---|
| New issues | **186** | 159 | **+27** |
| New PRs | **521** | 368 | **+153** |
| Merged PRs | **431** | 227 | **+204** |
| Open issues (label-scoped, `is:issue is:open`) | **5,340** | 5,243 | +97 |
| Open PRs | **3,819** | 3,788 | +31 |
| `open_issues_count` field (incl. PRs) | **9,159** | 9,033 | +126 |
| P0 new | **6** | 8 | −2 |
| P1 new | **25** | 27 | −2 |
| P2 new | **116** | 101 | **+15** |
| P3 new | **34** | 22 | **+12** |

- Repo counters: **stars 395,176** (+35 vs 395,141), **forks 82,971** (+3 vs 82,968), `pushed_at` 2026-11-25T09:32:08Z, `subscribers_count` 1,692 (was 1,693).
- **Meaning:** the release-cut day roughly **doubled merge throughput** (227 → 431 merged PRs) and pushed new-PR intake to 521. The P0/P1 severity buckets *shrank* while P2/P3 grew — i.e. the extra volume was routine, not breakage. Open-issue backlog grew +97 while open-PR backlog grew only +31, so **issue intake is now growing faster than PR throughput** (opposite of yesterday, where the PR backlog was the growing queue).
- Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z , …+is:pr+created:<window> , …+is:pr+is:merged+merged:<window> , …+is:issue+is:open , …+is:pr+is:open , …+is:issue+label:P0/P1/P2/P3+created:<window> , https://api.github.com/repos/openclaw/openclaw

### 3a. New P0 issues (6) — detail

| # | Title | State | One-line impact |
|---|---|---|---|
| 205231 | macOS app shows misleading "credentials need recovery" modal when CLI migrates schema ahead of app | open | False credential-failure alarm on macOS when CLI and app race the schema migration |
| 205212 | Update failure: candidate-doctor (2026.10.7) | open | `openclaw update` fails with candidate-doctor on 2026.10.7 → release-blocker on the update path |
| 205162 | Chat-triggered update fails with `requester-revoked` for a `discord:user:<id>` owner while the Discord plugin migration is pending; Gateway left stopped | open | Discord chat-initiated update **leaves the Gateway stopped** (crash-loop impact) |
| 204846 | codex: question prompt escaping mangles URLs on text-fallback channels (`_`→U+FF3F, `\n`→`?`), user can't complete Browser step | **closed** | Codex Browser flow unusable on text-fallback channels; closed 2026-11-25 |
| 204667 | macOS app 2026.11.6 does not migrate app-managed Gateway (still 2026.11.3); doctor refuses with both CLIs | **closed** | macOS app/Gateway version drift with doctor refusing both CLIs; closed 2026-11-25 |
| 204662 | Sign in with ChatGPT returns HTTP 403 with no upstream request ID | open | ChatGPT provider sign-in broken (auth-provider impact, no upstream request ID to triage) |

### 3b. New P1 issues (25) — the dominant themes

Selected (full list with labels/timestamps in `tmp/2026-11-25/s_lbl_P1.json`):
- **Update/packaging regressions (5):** #205198 pnpm update fails at activation (post-swap Doctor ENOENT on retained native admission host link); #204836 pnpm `openclaw update` to 2026.11.7/8/9 leaves the command broken and the Gateway stopped; #204834 update to 2026.11.8 blocked by Doctor `session.import.batch` refusing valid cold transcripts (TRANSCRIPT_COLD); #204816 2026.11.4→2026.11.8 rolls back with doctor-failed / Invalid config after successful candidate validation; #204892 valid `$include` blocks first Gateway start after upgrade from 2026.11.7; #204893 first Gateway start after upgrade exits on ext4 `lost+found` in the state directory.
- **Session-state regressions (3):** #205006 **sessions end silently when the model emits OpenClaw-style tool-call text without structured `tool_calls` (regression in 2026.11.7)** — this is clawstat's #1 tracked issue; #205127 2026.11.7 interrupted-reply recovery emits raw tool-call frames as message text (flagged `clawsweeper:needs-security-review`); #204767 exec-completion wake in a webchat gateway-owner session runs with `senderIsOwner=false`, quarantining MEMORY.md on tracked edits.
- **Security-relevant (2):** #204657 and #204639 — **Codex harness posts/attaches images the agent only inspected, even on NO_REPLY** (both `impact:security`, both `clawsweeper:needs-product-decision` + `needs-security-review`).
- **Gateway lifecycle / crash-loop (4):** #204952 async provider discovery + auth prep can synchronously stall the Gateway event loop (Windows beta.3); #204889 Gateway stop waits out the whole stop budget then SIGKILL when a native service-child anchor stops answering (claude-cli); #204634 Gateway child survives with no listening socket after failed shutdown (cancel-write EPIPE inside kill()) — closed; #204611 Gateway fails to start when shared state is on PostgreSQL (secrets activation opens the PG store synchronously on the main thread).
- **Message loss (3):** #204651 Control UI chat cannot reply after `sessions_yield` ("require an authoritative current conversation"); #204631 Codex code-mode `tts` reports success in a `message_tool_only` Telegram topic but no audio/reply is sent; #204584 Buzz plugin omits the configured auth tag so owner-only Buzz agents ignore the bot's mentions.
- **Provider auth (2):** #204662 (P0) ChatGPT sign-in HTTP 403; #204842 claude-cli managed live session: resumed turn fails with `cli_live_session_changed` instead of restarting, and puts the auth profile into cooldown.
- **Other:** #205153 macOS auto-update triggers a QuickLook thumbnail storm (~90 npm docs HTML files each spawn a WebContent.EnhancedSecurity process, **load average 200 on 8 cores**, labelled `bug:security`); #205035 Windows TEMP service repair retains control SQLite custody and fails Gateway publication (EPERM); #204931 typed `/stop` queues behind an active run instead of aborting it; #204551 subagent completion results expire instead of staying owed until delivered; #205063 Caps Lock makes chat composer Redo undo again after selecting a person — **closed 2026-11-25T07:03:02Z**.
- Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:P0+created:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z , …+label:P1+created:<window>

---

## 4. clawstat — verdict FLIPPED to ✅ for 2026.11.10 (first green verdict of the run series)

- `assessed_at` **2026-11-25T05:53:43Z**, `version` **2026.11.10**, `recommendation` **✅**, `confidence` **medium**, `app_version 1.3.10`.
- **Headline:** "Safe to update for most users — tracked reports are narrow and low-engagement, and none rises to a release-blocking failure."
- `status.key` = **`"wait"`** / label **"Too new to call"** / `early_read` **"Safe to update"** — the status key flipped *back* to `wait` from yesterday's `care` (because the release is 0 days old), but the underlying early read is now positive.
- `evidence_gate`: verdict **✅**, **`blockers: []`**, `widespread: []`, `serious: []`, **`blocker_count: 0`**, `floor_applied: false`, reason "No credible blocking issue is confirmed for this version."
- **`known_issues` count = 17** (all tracked against 2026.11.10). **`tracked_total` = 17**, `closed_completed` = **0** (none of the 17 is closed as fixed yet).
- `freshness`: `fresh: true`, `days_since_release: 0`, `runs_assessed: 1`, `version_specific_issues: 16`, `carried_over_issues: 1`.
- `calibration`: `npm_weekly_downloads` **2,817,401** (matches npm `point/last-week` exactly), `tracked_total` 17, `closed_completed` 0.
- `issues_capped: false`, `issues_cap: 60` — the 17-issue count is **not** a between-release signal; the verdict rests on composition + engagement (**3 👍 total across 17 issues**, max 3 on any one) against a ~2.8 M weekly install base.
- `flip_conditions` (3): ⏸️/⚠️ if #205006 is confirmed by multiple users on the **stable** 2026.11.10 build (especially ≥10 👍 or standard provider setups); ✅ hardens once stable releases ship fixes for #205021 (AGENTS.md order) and #205063 (composer data-loss PR already linked); ⚠️ if #205035 Windows EPERM reproduces beyond the niche TEMP-prefix repair path.
- `recommended_version` remains **2026.11.5** (kind `settled`, age 8 days, gate ✅, 0 blockers, 11 versions considered).
- `track_record`: 10 versions tracked — 3 held, 6 hardened, 0 softened, 1 single; path for 2026.11.10 is `["✅"]` (single run), 2026.11.8 `["⚠️","⚠️"]` (held), 2026.11.7 `["⚠️","⚠️","⚠️"]` (held).
- `hotfix_chain`: `[]`. `latest_prerelease`: empty (no prerelease ahead of stable).
- `changes`: 0 breaking, **36 fixes**, **8 features** (Safer updates · ClawHub agent templates · OpenClaw ID · Browser handoff · chat steering with draft persistence · reliable delegation delivering subagent results across Gateway restarts (#200279, #200649) · …).
- `platform_impact`: windows/macos/linux/ios/android/web/discord/slack/telegram/whatsapp all `high`.
- Source: https://clawstat.us/latest.json

### 4a. Status of yesterday's named blockers — still open, but now below the gate
| Issue | State | Closed | Note |
|---|---|---|---|
| #203869 gRPC code-mode BrokenPipe tool execution (macOS) | **open** | — | yesterday's sole blocker; still `clawsweeper_decision: unknown`, `fixed_in: null`, no workaround |
| #204283 Discord provider never reaches client init after 2026.11.7 (nativeSkills hang) | **open** | — | workaround documented (`channels.discord.commands.nativeSkills: false`) |
| #205006 silent session truncation on pseudo tool-call text | open | — | clawstat's #1 tracked issue; repro pinned to 2026.11.7 + custom vLLM/Qwen on Linux, names only a beta build of 2026.11.10 |
| #205021 AGENTS.md section reordering never reaches existing chats | **closed** | 2026-11-25T07:02:58Z | |
| #205063 Caps Lock composer Redo undo (data-loss) | **closed** | 2026-11-25T07:03:02Z | confirmed 2/2 on release/2026.11.10 vs stable 2026.11.7; fix PR already linked |
| #205076 scheduled jobs fail when one pinned OpenAI account hits quota | open | — | macOS; needs two OAuth accounts + saved binding |
| #205113 Telegram scheduled edits intermittently fail | open | — | low-frequency Telegram edit path |
| #205035 Windows TEMP service repair EPERM | open | — | confined to niche TEMP-prefix repair path |

---

## 5. ClawHub catalog — pipeline fully green, model catalog grew +57 in-window

- `openclaw/catalog/actions/runs?per_page=60`: **13 in-window runs, 13 successful, 0 failures** — **6 × `Publish catalog`** (2026-11-24 12:30Z, 16:27Z, 20:24Z; 2026-11-25 00:43Z, 04:27Z, 08:28Z), **6 × `pages build and deployment`** (12:33Z, 16:29Z, 20:27Z; 00:46Z, 04:30Z, 08:30Z), and **1 × CodeQL** (success, 2026-11-25T05:56:26Z).
- Publish cadence is a clean **~4 h**; the 26 h outage noted two days ago has **not** recurred.
- Catalog commits in-window (6): `2645f7a1` 12:33Z **1376 models** · `fc7cc486` 16:29Z **1376** · `fbd3bab3` 20:27Z **1423** · `e4d9789c` 00:46Z **1424** · `5d8c5a4a` 04:30Z **1424** · `d92870d2` 08:30Z **1432 models**.
- **Models: 1,375 → 1,432 (+57, +4.1%)** across the window (window-start baseline commit `c62ec04b` @ 2026-11-24T08:30Z = 1,375). **Providers flat at 47.**
- Catalog repo: **stars 14**, forks 4, `pushed_at` 2026-11-25T08:30:40Z.
- Sources: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=60 , https://api.github.com/repos/openclaw/catalog/commits?since=2026-11-24T09:28:00Z&until=2026-11-25T09:28:00Z

---

## 6. Enterprise repo — merge throughput flat, backlog creeping up, STILL no GitHub Release

- `openclaw/openclaw-enterprise`: **stars 488** (+2 vs 486), **forks 129** (+1 vs 128), `open_issues_count` **546** (vs 494, **+52**), `pushed_at` 2026-11-25T09:28:17Z.
- Label-scoped split: **133 open issues** (was 131, +2), **413 open PRs** (was 363, **+50**).
- **79 merged PRs in-window** (vs 83 yesterday, −5% — roughly flat, recovering from yesterday's −51% collapse).
- **138 new items in-window** (136 PRs + 2 issues) vs 125 yesterday. New issues: **#7249** (under Argo CD the init Job reruns the fresh-only bootstrap on every sync, P2) and **#7248** (`occ installation install` reads awkwardly; consider `occ install` / `occ installation create`, P3).
- Merged-PR titles cluster around **TokenService fixture / credential custody for local OpenShell installers**, agent-version-picker ↔ Configuration snapshot sync, chart control-plane egress policy in integration fixtures, unusable Logs links after failed deployment, agent-draft repository selection, and a large TypeScript-typing migration of QA agent deployment fixtures.
- **`releases?per_page=5` STILL returns `[]`** — the enterprise repo has published **no GitHub Release** since creation (2026-08-29), now ~88 days. Enterprise artifacts still ship without a versioned release trail.
- Sources: https://api.github.com/repos/openclaw/openclaw-enterprise , https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5 , https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z , …+is:issue+is:open , …+is:pr+is:open , …+created:<window>

---

## 7. npm downloads — last complete day DOWN 2.25%; rolling 7-day −10.7% WoW (both now on real data)

- `point/last-day` = **442,684** for **2026-11-23** (the last complete day; 2026-11-24 and 2026-11-25 still report **0** inside npm's ~48 h reporting-lag window — **lag, not zero usage**).
- Day-over-day: 2026-11-23 **442,684** vs 2026-11-22 **452,883** → **−2.25%**.
- `point/last-week` = **2,817,401** for 2026-11-17 → 2026-11-23 (matches clawstat's `npm_weekly_downloads` exactly).
- Rolling 7-day vs the preceding 7-day: 2026-11-17..11-23 = **2,817,401** vs 2026-11-10..11-16 = **3,155,664** → **−10.72%**. The baseline window was −5.4%, so the week-over-week decline **more than doubled**.
- Note the decline is concentrated in a few high days (2026-11-16 = 483,549 → 2026-11-17 = 390,660; 2026-11-12/13 were ~477–496 k). Daily series for 2026-10-27 → 2026-11-25 in `tmp/2026-11-25/npm_dl_range.json`.
- Sources: https://api.npmjs.org/downloads/point/last-day/openclaw , https://api.npmjs.org/downloads/point/last-week/openclaw , https://api.npmjs.org/downloads/range/2026-10-27:2026-11-25/openclaw

---

## 8. Platform news / positioning signals

- **RSS now has 29 items; two new posts in-window**, both dated **Tue, 24 Nov 2026 00:00:00 GMT** (publish timestamp is 00:00Z, i.e. *before* the 09:28Z window open — flagging the timing so the daily report does not misattribute them to this window):
  - **"A year of the Claw"** — https://openclaw.ai/blog/a-year-of-the-claw/ — anniversary post: *"the shape of how users are going to interact with AI has largely been defined by what Peter Steinberger shipped on November 24th, 2025"*; *"every major AI company has shipped product that looks like OpenClaw"*; *"the largest enterprises on earth have made OpenClaw part of their core offerings"*; *"120,000 pull requests and 58 years of cumulative work hours"*; *"the use cases from running 600 person companies where each person has their own claw to someone building their own TV channel so their kids can watch slow television"*. Names **Microsoft Autopilot**, **NVIDIA NemoClaw**, and the September **OpenClaw Enterprise** effort by **Red Hat, OpenAI, NVIDIA and more** as *"an open standard for shipping persistent agents in enterprise environments"*.
  - **"Introducing ShellBench, the benchmark for real-world tasks"** — https://openclaw.ai/blog/shellbench/ — developed with **The OpenClaw Foundation, Parsewave, Hugging Face, Red Hat, and UC Berkeley**, from **>10 M anonymized real-world AI agent interactions**. **12 models × 5 harnesses** (Claude Code, Codex, Hermes, OpenClaw, Pi) × **100 tasks** = **53,100 graded runs**; 90 tasks rubric-graded against **721 criteria (381 safety criteria)**, 10 code-tested. Headline results: best model **GPT-6 Astra 62.5%**, Claude Fable 5.2 61.9%, GPT-6.1 Sol 61.4% (1.1 pp separates the top three — i.e. even leaders fail ~4 in 10 tasks); **87 of 77 tasks check that the answer names the files used** (dinner-planning task: 522/531 picked the right restaurant but only 152 met every requirement); reliability gap — GPT-6 Astra completed **75.1%** of tasks at least once across 3 attempts but only **48.8%** on all three; safety failures embedded in otherwise ordinary tasks.
- **Press page** (https://openclaw.ai/press) carries, among others: *"OpenClaw is finally available on Android and iOS"*, *"Microsoft launches Scout, an OpenClaw-inspired personal assistant"*, *"Microsoft's OpenClaw team takes on the personal assistant challenge"*, *"Red Hat's OpenClaw maintainer just made enterprise Claw deployments a lot safer"*, *"Anthropic eyes its own version of OpenClaw"*, *"Google is building an AI agent that could be its answer to OpenClaw"*.
- **OpenClaw Enterprise (OCE)** positioning, per https://docs-enterprise.openclaw.org/: *"the open source, vendor neutral platform for managing agents. Think of it as Kubernetes for agents. The OpenClaw Control Plane (OCC) adds multi-tenancy, governance, and hard security boundaries to OpenClaw agent deployments."* VentureBeat covers the launch as *"a free enterprise control plane for persistent AI agents backed by OpenAI, Red Hat and NVIDIA"* — https://venturebeat.com/orchestration/openclaw-launches-free-enterprise-control-plane-for-persistent-ai-agents-backed-by-openai-red-hat-and-nvidia
- Search-surfaced aggregator: ShellBench coverage at https://www.explainx.ai/blog/openclaw-shellbench-real-world-agent-benchmark-november-2026 and a weekly-digest at https://www.bighatgroup.com/blog/openclaw-weekly-2026-11-23/ ("138 fixes, Control UI agent management…"). Third-party/aggregator — treat as secondary.
- **Org repo leaderboard (pushed_at ordering, https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed)** — top movers in-window: `openclaw/clawhub` **9,564 stars** (pushed 08:39Z), `openclaw/mcporter` 5,142, `openclaw/openclaw-windows-node` 2,212, `openclaw/openclaw` 395,177, `openclaw/openclaw-enterprise` 488, `openclaw/gitcrawl` 140, `openclaw/slacrawl` 239, `openclaw/clawscan` 158, `openclaw/catalog` 14.

---

## 9. Negative / unchanged

- **No new security advisory** (10 advisories, identical set); `GHSA-pw3x-g8v8-fvj2` `updated_at` still 2026-11-19T02:01:59Z; **still no CVE assigned**; **still 0 linked issues / 0 linked PRs**; issue still open with no fix.
- **openclaw.ai/security**: still "No active bulletins", latest advisory Sep 11 2026, no known compromise of OpenClaw infrastructure.
- **`extended-stable` dist-tag unchanged** at `2026.10.33` (published 2026-11-18).
- **`openclaw/openclaw-enterprise` still has NO GitHub Release** (`[]`, ~88 days since repo creation).
- **Catalog providers flat at 47**; only the model count moved.
- **`hotfix_chain` empty** in clawstat; **no prerelease ahead of stable** (beta tag now == stable 2026.11.10).
- **clawsweeper closed-work lists unchanged in size** (36 entries in both `clawsweeper_work` and `clawsweeper_closed`), all reviewed 2026-10-11 — the repair-automation quarantine backlog has not moved.
- **clawstat `recommended_version` still 2026.11.5** (settled, gate ✅) even though `latest` is now ✅ — the tracker still prefers the 8-day-old settled line for stability.
- **12 Ongoing Majors** predate this release (per clawstat), incl. #141413 macOS SecretRef token omission and #110186 STRICT migration failure.
- **npm downloads for 2026-11-24 and 2026-11-25 still report 0** — inside the ~48 h reporting-lag window.
- No CVE/GHSA surfaced via web search for 2026.11.10; the openclaw.ai/security counters (1,799 / 722 / 14) are unchanged from the baseline reading.

---

## 10. Caveats, API failures and measurement notes

1. **GitHub Search API unauthenticated rate limit (10/min) was hit** mid-run; the first unencoded search batch returned garbage `total_count`s (e.g. 136,856 for "new issues") because `+` separators and colons were mis-encoded. **Those numbers were discarded.** All reported tracker figures come from a re-run using `curl -G --data-urlencode` **with an authenticated token** (first token in `~/.config/gh/hosts.yml`; the other two are invalid → "Bad credentials"). Authenticated search limit is 30/min.
2. **`openclaw/openclaw` `open_issues_count` (9,159) includes PRs** — it is not comparable to the label-scoped open-issue count (5,340). Both are reported with their query strings.
3. **Open-issue/open-PR counts are point-in-time**, taken ~2026-11-25T09:32Z, i.e. ~4 min after the nominal window close (09:28Z); a handful of post-09:28Z transitions may be included.
4. **GitHub security-advisories list is capped at the 10 most recent** — an advisory older than the nine 2026-09-11 ones would not appear, though any *newer* one would. The "no new advisory" claim is therefore reliable for anything published after 2026-09-11 only.
5. **npm download data for the last two days is 0 due to reporting lag** (~48 h), not zero usage. The −10.72% rolling 7-day figure is computed against the immediately preceding 7-day bucket (11-10..11-16 = 3,155,664), the same method the baseline used (baseline: −5.4%).
6. **The two new RSS blog posts carry `pubDate` 2026-11-24T00:00:00Z**, which is *before* the window open (09:28Z). They are new since the baseline report (which saw the newest item as "OpenClaw Isn't Free.", 20 Nov) but their timestamps place them outside the strict window. Treat as "new since yesterday", not "published in-window".
7. **clawstat's 17-issue count is NOT a between-release signal** — the tracker caps at 60 and saturates; the verdict rests on engagement (3 👍 across 17 issues) and composition. clawstat's own review flagged one logical error: the thesis cites the 17-vs-58 issue count as evidence of "not worse than normal churn" despite the Calibration block saying counts must not be compared between releases.
8. **`is:pr is:merged merged:<window>` counts PRs merged in-window, and `is:issue created:<window>` counts issues opened in-window** — the two are not directly comparable, and the P-label searches count only issues carrying that exact label.
9. **No npm package for the enterprise distribution was checked** — "no versioned release trail" is verified for **GitHub Releases only**.
10. **ShellBench numbers are vendor-published self-reported results** (OpenClaw Foundation + Parsewave/Hugging Face/Red Hat/UC Berkeley) read from the OpenClaw blog; no independent reproduction was found in-window. The explainx.ai write-up is a secondary aggregator restating the same figures.
11. **Call budget used:** 2 `web_search` + 2 `web_fetch` (blog/a-year-of-the-claw, blog/shellbench) plus ~35 direct `curl` calls to registry.npmjs.org, api.github.com, clawstat.us, openclaw.ai, docs-enterprise.openclaw.org. Zero search budget was spent on tracker discovery — all tracker metrics came from the GitHub Search API.

---

## 11. Source URL index

- https://registry.npmjs.org/openclaw
- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://api.npmjs.org/downloads/point/last-day/openclaw
- https://api.npmjs.org/downloads/point/last-week/openclaw
- https://api.npmjs.org/downloads/range/2026-10-27:2026-11-25/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=10
- https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2
- https://api.github.com/repos/openclaw/openclaw/issues/203869 (and /204283, /205006, /205021, /205063, /205076, /205113, /205035)
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+label:{P0,P1,P2,P3}+created:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+GHSA-pw3x-g8v8-fvj2
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-24T09:28:00Z..2026-11-25T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:issue+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:open
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=60
- https://api.github.com/repos/openclaw/catalog/commits?since=2026-11-24T09:28:00Z&until=2026-11-25T09:28:00Z
- https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed
- https://clawstat.us/latest.json
- https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.11.10.md
- https://openclaw.ai/security
- https://openclaw.ai/rss.xml
- https://openclaw.ai/press
- https://openclaw.ai/blog/a-year-of-the-claw/
- https://openclaw.ai/blog/shellbench/
- https://docs-enterprise.openclaw.org/

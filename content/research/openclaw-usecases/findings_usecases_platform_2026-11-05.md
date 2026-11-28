# OpenClaw — PLATFORM findings for window 2026-11-04T09:28Z → 2026-11-05T09:28Z

Collected 2026-11-05 ~09:29–09:32Z. All numbers are absolute with deltas vs the 2026-11-04 report.
Sources are given per section.

---

## 1. npm registry — https://registry.npmjs.org/openclaw

**dist-tags (current):**
```json
{"extended-stable": "2026.9.36", "latest": "2026.10.10", "beta": "2026.11.5-beta.1"}
```
- `latest` = **2026.10.10** (unchanged, published 2026-11-03T02:26:08.904Z)
- `beta` = **2026.11.5-beta.1** (published 2026-11-04T04:01:35.072Z — *before* this window)
- `extended-stable` = **2026.9.36** (unchanged)

**Versions published since 2026-11-01:**
| version | published (UTC) |
|---|---|
| 2026.10.10 | 2026-11-03T02:26:08.904Z |
| 2026.11.5-beta.1 | 2026-11-04T04:01:35.072Z |

Registry `time.modified` = 2026-11-04T04:01:35.415Z. Total published versions: **292**.

**FINDING: NO new npm version, no new dist-tag, and no dist-tag promotion inside the window.** The newest publish of any kind (2026.11.5-beta.1, npm 04:01Z / GitHub 04:51Z) happened ~4.5h *before* the window opened at 2026-11-04T09:28Z, so it was already reported yesterday. `beta` is still pinned to a beta that is already ~29h old; `latest` is still the 2026.10.10 stable from 2 days prior.

## 2. npm downloads

Range API: https://api.npmjs.org/downloads/range/2026-10-27:2026-11-05/openclaw

| day | downloads | Δ vs prior day | source |
|---|---|---|---|
| 2026-10-27 | 391,520 | — | range API |
| 2026-10-28 | 341,738 | −49,782 | range API |
| 2026-10-29 | 384,516 | +42,778 | range API |
| 2026-10-30 | 375,102 | −9,414 | range API |
| 2026-10-31 | 292,528 | −82,574 | range API |
| 2026-11-01 | 318,468 | +25,940 | range API |
| 2026-11-02 | 321,275 | +2,807 | range API |
| 2026-11-03 | 393,121 | **+71,846 (+22.4%)** | range API |
| 2026-11-04 | **0 → MISSING** | n/a | range API returns 0 |
| 2026-11-05 | **0 → MISSING** | n/a | range API returns 0 |

**11-04 and 11-05 are MISSING, not zero.** The npm downloads API returns `0` for days whose data has not yet been aggregated (re-checked at 09:32Z; still 0). Point endpoints confirm the lag: `point/last-day` still resolves to the 2026-11-03 bucket.

Point endpoints (all still end 2026-11-03):
| endpoint | downloads | window |
|---|---|---|
| /openclaw point/last-day | 393,121 | 2026-11-03 |
| /openclaw point/last-week | 2,426,748 | 2026-10-28 → 2026-11-03 |
| /openclaw point/last-month | 11,610,775 | 2026-10-05 → 2026-11-03 |
| /clawhub point/last-day | 8,275 | 2026-11-03 |
| /clawhub point/last-week | 51,423 | 2026-10-28 → 2026-11-03 |
| /clawhub point/last-month | 168,699 | 2026-10-05 → 2026-11-03 |

**Release effect of 2026.10.10 (npm publish 2026-11-03T02:26Z):** only ONE post-publish day is observable (11-03), so a 1-day bump is measurable but the D2/D3 lift is not.
- 11-03 vs 11-02: 393,121 vs 321,275 = **+71,846 (+22.4%)**
- Pre-release 7-day mean (10-27 … 11-02) = 346,735 → 11-03 is **+13.4% above the pre-release baseline**, but still **17.2% BELOW the 10-26 peak of 474,738**.
- Interpretation: 2026.10.10 produced a *modest* one-day bump, not a step change. The volume high-water mark of this window series remains 10-26 (474,738). Without 11-04/11-05 this cannot be extended.

## 3. GitHub releases — https://api.github.com/repos/openclaw/openclaw/releases?per_page=5

| tag | published_at | prerelease | #assets | total asset downloads | Δ total vs yesterday |
|---|---|---|---|---|---|
| v2026.11.5-beta.1 | 2026-11-04T04:51:56Z | **true** | 5 | **67** | new (pre-window publish) |
| v2026.10.10 | 2026-11-03T03:22:35Z | false | 21 | **20,904** | **+9,882 (+89.6%)** (was 11,022) |
| v2026.10.10-beta.5 | 2026-10-30T03:57:14Z | true | 5 | 292 | — |
| v2026.10.9 | 2026-10-29T15:54:35Z | false | 21 | **39,398** | **+5,915 (+17.7%)** (was 33,483) |
| v2026.9.36 | 2026-10-29T20:19:38Z | false | 5 | 165 | — |

**v2026.11.5-beta.1 assets:** dependency-evidence.zip 24 · postpublish-evidence.json 13 · postpublish-evidence.json.sha256 8 · release-manifest.json 13 · release-manifest.json.sha256 7.

**v2026.10.10 assets (all):** latest.json 2,432 · amd64.AppImage 1,259 · amd64.deb 993 · arm64.dmg 2,548 · arm64.dSYM.zip 84 · arm64.zip 3,867 · dependency-evidence.zip 348 · linux.json 63 · postpublish-evidence.json 88 · postpublish-evidence.json.sha256 45 · release-manifest.json 128 · release-manifest.json.sha256 48 · stable-main-closeout.json 48 · stable-main-closeout.json.sha256 28 · x86_64.dmg 668 · x86_64.dSYM.zip 33 · x86_64.zip 273 · OpenClaw-2026.10.10.dmg 3,475 · OpenClaw-2026.10.10.dSYM.zip 43 · OpenClaw-2026.10.10.zip 4,323 · SHA256SUMS.linux-app.txt 87.

**v2026.10.9 assets (all):** latest.json 4,815 · amd64.AppImage 2,348 · amd64.deb 1,688 · arm64.dmg 4,767 · arm64.dSYM.zip 169 · arm64.zip 5,941 · dependency-evidence.zip 701 · linux.json 121 · postpublish-evidence.json 170 · .sha256 97 · release-manifest.json 244 · .sha256 75 · stable-main-closeout.json 70 · .sha256 50 · x86_64.dmg 1,172 · x86_64.dSYM.zip 49 · x86_64.zip 751 · OpenClaw-2026.10.9.dmg 7,965 · .dSYM.zip 41 · .zip 8,022 · SHA256SUMS.linux-app.txt 142.

**KEY FINDING — the release window did NOT suppress 2026.10.10 uptake:** 10.10's asset total grew **+9,882 in 24h (+89.6%)**, more than double the +5,915 (+17.7%) accrual of the still-supported 10.9 in the same period. 10.10 has climbed from 33% → 53% of 10.9's cumulative asset total in a single day, i.e. it is *closing* the gap with the previous stable, and at the current accrual rate (~9.9k/day) it overtakes 10.9's asset total within roughly 2 days. Highest single asset is still the generic zip (10.10: 4,323 vs 10.9: 8,022).

**No new GitHub release inside the window** (newest is v2026.11.5-beta.1, 2026-11-04T04:51:56Z, pre-window).

## 4. Repo metrics — https://api.github.com/repos/openclaw/openclaw

| metric | today | yesterday | Δ |
|---|---|---|---|
| stargazers_count | **393,937** | 393,873 | **+64** |
| forks_count | **82,784** | 82,771 | **+13** |
| open_issues_count | **7,695** | 7,793 | **−98** |
| subscribers_count (watchers) | **1,698** | 1,696 | **+2** |
| watchers_count | 393,937 | (same as stars) | — |
| pushed_at | 2026-11-05T09:29:46Z | — | repo active within the hour |
| updated_at | 2026-11-05T09:29:53Z | — | |
| size | 12,897,570 KB | — | |

Notes: star growth collapsed to **+64/day** (vs a steady ~+60–70/day baseline — essentially flat), and open_issues *fell* by 98 (triage/closure outpacing new reports). Note `watchers_count` on the GitHub repo API == stargazers_count; the meaningful "watchers" series is `subscribers_count` = 1,698 (+2).

## 5. New PR / issue counts since 2026-11-04T09:28Z (repo openclaw/openclaw)

Search API: `https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-11-04T09:28:00Z+type:pr|issue`

| query | total_count | yesterday | Δ |
|---|---|---|---|
| created > 2026-11-04T09:28Z, type:pr | **543** | 656 | **−113 (−17.2%)** |
| created > 2026-11-04T09:28Z, type:issue | **143** | 142 | **+1** |

Label breakdown (GitHub search API requires an `is:` qualifier; raw `label:` alone returns an error "Query must include 'is:issue' or 'is:pull-request'"):

| label | is:issue | is:pull-request |
|---|---|---|
| impact:security | **13** | 0 |
| impact:ux-friction | **54** | 0 |
| security-sensitive-changed | 0 | **16** |
| impact:auth-provider | **17** | 0 |
| impact:session-state | **11** | 0 |

Note: `security-sensitive-changed` is a PR-only label (0 issues); the other four are issue-only labels (0 PRs each).

## 6. Security advisories

- Repo advisories: `https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100` → 100 advisories returned (truncated by pagination), all with `published_at` = **2026-09-11T00:57–00:59Z** (bulk-published security batch).
- Global npm advisories affecting openclaw: `https://api.github.com/advisories?ecosystem=npm&affects=openclaw` → 30 advisories. Newest:
  - **GHSA-3x84-qq85-fj65** — 2026-10-21T19:37:42Z — medium — "OpenClaw: Browser CDP discovery could accept blocked WebSocket URLs"
  - GHSA-jw7v-5mp7-ghgm — 2026-07-14 — duplicate of the above
  - the rest are the 2026-07-02T16:34–17:23Z security batch (high/critical: QQBot admin commands, trusted-proxy Control UI WebSocket scopes, paired-node exec lifecycle forgery, combined POSIX shell options, fake package roots, .env override of Homebrew selection, etc.)

**FINDING: NO advisory newer than GHSA-3x84-qq85-fj65 (2026-10-21).** No new security advisory in the window; the newest npm-affecting advisory is now **15 days old**, and the repo-level bulk batch remains 55 days old (2026-09-11).

## 7. Enterprise — https://api.github.com/repos/openclaw/openclaw-enterprise

| metric | today | yesterday | Δ |
|---|---|---|---|
| stargazers_count | **453** | 451 | **+2** |
| forks_count | 106 | — | — |
| open_issues_count | **253** | 236 | **+17** |
| subscribers_count | 3 | — | — |
| pushed_at | 2026-11-05T09:22:33Z | — | active |
| updated_at | 2026-11-05T07:50:08Z | — | — |

10 newest items (`?state=all&sort=created&direction=desc`) — **all 10 are PRs, zero new issues**:
| created_at | # | type | title |
|---|---|---|---|
| 2026-11-05T07:33:45Z | #4746 | PR | ci: record phase timings for the OpenShell provider and auth test |
| 2026-11-05T04:26:09Z | #4745 | PR | Document the password sign-in requirement for native admin |
| 2026-11-05T04:18:36Z | #4744 | PR | Clarify OpenShell's production qualification status in the deployment guide |
| 2026-11-05T02:51:23Z | #4743 | PR | Fix storage snapshots in Console browser tests |
| 2026-11-05T02:48:05Z | #4742 | PR | Shorten QA Advisory with isolated workflows and cached image preparation |
| 2026-11-05T02:41:23Z | #4741 | PR | Refresh model observations after OpenShell Git credential rotation |
| 2026-11-05T02:41:51Z | #4740 | PR | Type the shared Console browser test helper |
| 2026-11-05T02:40:11Z | #4739 | PR | Fix OpenShell reads of files-only provider profiles |
| 2026-11-05T02:35:37Z | #4738 | PR | Avoid resending shared history on OpenShell Git pushes |
| 2026-11-05T02:10:22Z | #4737 | PR | Guide operators through first install and Agent deployment with occ… |

Theme: **OpenShell provider hardening + Console/browser test infrastructure** dominates enterprise activity. "OpenShell production qualification status" being explicitly documented (#4744) and Git credential rotation (#4741) suggests OpenShell is still pre-GA.

## 8. Blog RSS — https://openclaw.ai/rss.xml

- Feed size: 10,233 bytes; **23 items**.
- Newest entry: **"Come Build With Us: OpenClaw Focus Weeks" — Wed, 21 Oct 2026**. Then "How PJ helps small businesses use OpenClaw" (16 Oct), "Tencent AIG joins ClawScan" (2 Oct), "OpenClaw Enterprise – The Open Agent Platform" (29 Sep), "Microsoft Autopilot is built on OpenClaw" (25 Sep) …
- **Blog silence = 15 days** (2026-10-21 → 2026-11-05); no new post inside the window.

## 9. Showcase snapshot — https://openclaw.ai/showcase

- Saved: `tmp/showcase_2026-11-05.html` — **150,868 bytes** (byte size identical to yesterday's 150,868 → **no visible change**). md5 `2cc5905877bd6891665da8fa64bd322a`. (Yesterday's file was not retained, so equality is inferred from the identical byte count, not from a hash diff.)
- Visible Featured Builds entries (5):
  1. "15+ Agent Army Running Across 3 Machines"
  2. "Personal Operating System With Daily Briefings"
  3. "Voice-Guided Production Fix While Walking the Dog"
  4. "One Chat Controlling Mail, Messages, Orders, Calls, and a Vault"
  5. "Entire Website Rebuilt From Telegram"
  Plus a "Family Meal Planning System Built Overnight" entry under "More From the Community" and a CTA "Built something cool?".

## 10. Ecosystem — new repos since 2026-11-04T09:28Z

`https://api.github.com/search/repositories?q=created:>2026-11-04T09:28:00Z+openclaw&sort=stars&per_page=100`

- **total_count = 48** (all 48 returned; created_at span 2026-11-04T12:32:01Z → 2026-11-05T01:58:17Z — note the earliest new repo is 3h after the window opens).
- **Star distribution: 2 repos with 1 star, 46 repos with 0 stars.** Max = 1 star. Fork count = 0.
- **genpark-personal-agent-\* mirrors in window: 0.** (Context: a broad search shows **330 `genpark-personal-agent*` repos have ever existed** — the spam fleet is dormant in this window; yesterday's report flagged it as active, so this is a genuine change from yesterday.)

Most interesting NON-SPAM repos (all 0–1 stars, listed with URL):
| stars | repo | description |
|---|---|---|
| 1 | https://github.com/clawgeek/openclaw-zen | The Zen of OpenClaw — a 41-line self-evolution manual, as an openclaw evo easter egg and Skill |
| 1 | https://github.com/proxydis/agentic-dev | Batch of cards with two AI agents (developer + reviewer): parallel Claude Code launcher, deadlock-free |
| 0 | https://github.com/nexu-club/nexu | "The simplest desktop client for OpenClaw 🦞" — bridges the agent to WeChat, Feishu, Slack & Discord (114 MB repo) |
| 0 | https://github.com/jthweny/krillmind | Desktop app for OpenClaw themed around a submarine (39 MB) |
| 0 | https://github.com/PhrStyle/forgehall-memory-bench | Benchmark of agent memory designs (Claude Code native, Mem0, Hermes, OpenClaw, Letta replicas) (35 MB) |
| 0 | https://github.com/xishanp/dafeiyu-claw | Plugin for continuous selfhood: persistent emotion, social memory, own intentions, curiosity-driven activity |
| 0 | https://github.com/Will-Xv/openclaw-local-user-sandbox | Sandbox backend that runs tools on the Gateway host as an unprivileged local user |
| 0 | https://github.com/izillionways/openclaw-creator-studio | Plugin for evidence-backed articles, independent review, version-bound human approval |
| 0 | https://github.com/dheiver2/tessera | "One source, many agents" — syncs instructions/skills/MCP across Claude Code, Codex, OpenClaw, Hermes with routing (PT) |
| 0 | https://github.com/bernardTavares/bevox-openclaw-runtime | How Bevox ran OpenClaw as the operating layer of a one-person AI company |
| 0 | https://github.com/WenLiCG/roundtable | Multi-AI roundtable skill: Lite/Plus/Pro, 2–6 models, 1–5 rounds |
| 0 | https://github.com/roeehacohen/network-guardian | Local network monitoring, behavioral threat detection, approval-based OpenClaw endpoint orchestration |
| 0 | https://github.com/BoredChairman/openclaw-tool-auto-expand | Chrome extension that auto-expands tool calls/command outputs in the OpenClaw web UI |
| 0 | https://github.com/kiddy-he/virtual-group-sharemarket | Standalone fictional stock market for group-chat bots (causal sim, ledger, charts) |
| 0 | https://github.com/social-media-skills/instagram-skill | Instagram skill for Claude Code/Codex/Cursor/OpenClaw (carousels, Reels) |
| 0 | https://github.com/ParishSynthMind/autogen-openhands-claude-agents | Guarded agent task run live through AutoGen, OpenHands and OpenClaw on Claude (read-only tools, human sign-off) |
| 0 | https://github.com/mymyanmarland/openclaw-guide | Guide — VPS, custom base URL, GUI, Telegram, Windows, Linux, browser control, one-click install |
| 0 | https://github.com/odrobnik/whatsapp-skill | Read/send personal WhatsApp via linked device (Baileys), QR link, SQLite store, inbox polling |
| 0 | https://github.com/cooktheryan/oce-evidence | Validation captures for OpenClaw Enterprise PRs (not product code) |

SEO/privacy-policy-stub repos identified (self-described stubs, excluded from the list above): `renephilippi05-wq/openclaw-app-info`, `musai-rus/musai-rus.github.io`, `kovkovvvv/openclaw-calendar-info`, `prateekk0894-ai/CLAUDE-MAX` (description = promo for a token-farming tool). Also several **empty-description** repos with no content: `openclaw-9/openclaw2` (size 924 KB), `davetapson/openclaw-gog`, `jhuang323/openclaw-mcp-client`, `geraldpeng6/wonton-plugin-openclaw`, `clawSean/openclaw-game-night`, `ArnavSingh76533/openclaw-on-hf-by-charlie-`, `4GeeksAcademy/openclaw-idolfo-dominguez`, `4GeeksAcademy/mariascamino-openclaw-4geeks-assistant`, `shimkwangtaek-debug/openclaw-gmail-reader`.

## 11. External press / announcements (web_search, 4 calls attempted; 2 succeeded, 2 hit DuckDuckGo bot-detection)

**New in window (beyond the already-reported boaoai.cn 2026-11-04 / blockchain.news / superpowerdaily.com / freedom.tech set):**

1. **clawstat.us** — https://clawstat.us/ — verdict page **assessed 2026-11-05**: "Should you update OpenClaw v2026.10.10? — Update with care" (**medium confidence**).
   - "1 credible blocking issue confirmed for this version, none widespread."
   - **Best version to run today: v2026.10.9** (7 days in the field, 5 credible known issues, none widespread).
   - "The latest, v2026.10.10, came out 2 days ago — too new to call settled."
   - Scale of the release: **4,825 commits, 3,028 PRs**; install base quoted as **~2.4M npm downloads in the last week** (independent confirmation of the ~2.43M last-week figure in §2).
   - Maintenance velocity: 75 tracked / 14 fixed for 2026.10.10 vs 80–84 tracked / 19–23 fixed for 2026.10.6–10.9.
   - **Credible blocker: #191717** (confirmed for 2026.10.10, not widespread).
   - Other high-severity tracked issues: #191847 (512 MB SQLite worker OOM → "admission is closed"), #192227 (`exec.approvals.node.set` → "no such table: agent_deletion_journal"), #192900 (#174243 merged on main but absent from stable through 2026.10.10, blocking Telegram migrations), #192141 (interrupted-turn continuation returns boilerplate), #192524 (2026.10.10 refuses scheduled agentTurn via `auth: "aws-sdk"` / Bedrock instance role), #191818 (claude-cli "no recorded inference account" automation failure not backported), #192427 (update failure from 2026.10.9), #192021 (agent DB admission-refusal error leaked to inbound chat before sendPolicy evaluation).

2. **releasebot.io** — https://releasebot.io/updates/openclaw — **first saw the beta on Nov 5, 2026** ("Date parsed from source: Nov 4, 2026; First seen by Releasebot: Nov 5, 2026"). Substantive summary of **2026.11.5-beta.1**:
   - *Knowledge Scribes* — first-class knowledge capture / reusable scribe workflows across agents, sessions, Control UI (#185583, #185637, #185974, #186270, #186455, #187659).
   - **PostgreSQL data plane** — PostgreSQL-backed state, migration tooling, compatibility coverage (#173968, #174080, #174085, #174183, #174242, #174374, #174387, #174399, #174623), authored by @steipete.
   - **Control UI overhaul** — mobile + desktop navigation, layouts, interaction details (#176356, #176466, #176505, #176540, #176557, #176653), @vyctorbrzezowski.
   - **Pull requests from chat** — end-to-end PR preparation, publication, review and status workflows from conversations (#176105, #176139, #178055, #178233, #178281, #178756), @shakkernerd.
   - Cross-device & cloud execution expansion (#185230, #185477, #186560, #187408).
   - Decision & media models + ClawRouter integrations (#177369, #178860, #178876, #178886, #178920, #179362).
   - Plugin experience (discovery/install/authoring/runtime) (#177869, #182419, #185315, #185544).
   - Backup/upgrade safety hardening (#186953, #187564, #187688, #187737).
   - Automations: persistent streams + richer execution context (#177941, #177942, #179011, #179062, #179669, #182561).
   - Sharing & guests (session sharing, guest access, visitor lifecycle) (#181680, #182218, #182337, #182352).
   - Learning & skills improvements.
   - Also indexed 2026.10.10 (first seen Nov 4) and 2026.10.10-beta.5 (first seen Nov 3).

3. **releases.sh/openclaw** — https://releases.sh/openclaw — structured JSON-LD release index, top 3: `openclaw 2026.11.5-beta.1` (2026-11-04T04:51:56Z), `openclaw 2026.10.10` (2026-11-03T03:22:35Z), `openclaw 2026.9.36`. Aggregator only, no original reporting.

4. **theclawreport.com** — https://www.theclawreport.com/ — page "Last updated: November 05, 2026". Timeline entries: Nov 4, 2026 = *VIDEO* "I built an open-source MCP server so AI agents can control a real iPhone" (r/openclaw); Nov 3, 2026 = v2026.10.10 release note. **No coverage of 2026.11.5-beta.1.** Note an internal inconsistency worth flagging: the page **title/headline says "OpenClaw 2026.10.7 lands"** while the body's "today's top story" paragraph also describes 2026.10.7 as the shipped release, even though the site's own timeline lists 2026.10.10 as current — the "top story" slot is stale while the timeline is fresh.

5. **clawstat.us** also surfaced in search as an independent third-party release-assessment site (see #1). **openclaws.io** (unofficial) still advertises "310k+ GitHub stars" — badly out of date vs the actual 393,937.

**No new original/editorial press found on 2026.11.5-beta.1 beyond the releasebot.io changelog digest** — i.e. beta coverage in the window is limited to automated changelog aggregators (releasebot.io, releases.sh) plus the official GitHub/npm artifacts. Two web_search calls failed with "DuckDuckGo returned a bot-detection challenge", so search coverage is incomplete.

---

## CAVEATS / DATA GAPS

1. **npm downloads for 2026-11-04 and 2026-11-05 are MISSING (not zero).** The range API returns `0` and `point/last-day` still resolves to 2026-11-03. Consequence: the D2/D3 release effect of 2026.10.10 **cannot be computed today**; only the 11-03 (+22.4% vs 11-02) bump is observable. Any statement about "downloads after the release" is limited to a single day. Re-check tomorrow.
2. **Search-index lag for new PRs/issues.** GitHub's search index is eventually consistent; the 543 PR / 143 issue figures may still undercount by a small margin and can differ from the raw event stream. Counts also depend on the exact cutoff timestamp, so cross-day comparisons carry ±small slack.
3. **Repo `open_issues_count` includes pull requests** in the GitHub API, so the −98 delta is not a pure issue-closure count.
4. **Advisory pagination:** the repo advisory endpoint returned exactly 100 records (its cap for this query shape) all dated 2026-09-11; the listing is truncated, so I cannot enumerate the *complete* historical repo advisory set from it. The "no advisory newer than 2026-10-21" conclusion rests on the global npm `affects=openclaw` feed (30 items, complete for that filter) plus the repo list's visible dates — it is high-confidence but not exhaustively verified against every advisory ecosystem.
5. **Showcase comparison is byte-size-based.** Yesterday's HTML was not kept, so "unchanged" rests on an identical 150,868-byte size rather than a byte-for-byte diff. Same byte size with different content is theoretically possible.
6. **Two of four web_search calls failed** (DuckDuckGo bot-detection challenge), so external-press coverage for the window is likely incomplete — in particular, press published in languages/regions not surfaced by the two successful queries.
7. **GitHub container package versions could not be listed** (`/orgs/openclaw/packages/container/openclaw/versions` → HTTP 403, token lacks `read:packages`). GHCR tag state for `2026.11.5-beta.1-browser` etc. is therefore unverified beyond the public package page text.
8. **npm download "point" values are as-of-2026-11-03**, so `clawhub` numbers (last-day 8,275 / last-week 51,423 / last-month 168,699) are one day stale and cannot show a window effect.
9. **Enterprise repo issue numbering (#4737–#4746)** is per-repo numbering that tracks very close to the main repo's PR numbering; all 10 newest items being PRs means "open_issues +17" reflects backlog growth rather than 17 new user-reported issues in the window.

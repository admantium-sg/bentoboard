# Findings — Task 1: Platform news, releases, security incidents, enterprise adoption
**Run date:** 2026-11-01 (Europe/Berlin). **Research window:** 2026-10-31T10:30:00Z → 2026-11-01T09:30:00Z.
**Topic:** `openclaw-usecases`. **Collector:** researcher subagent (Task 1).

---

## Executive summary

1. **Focus Week #3 was announced inside the window** — "Focus Week Nov 2nd-8th, 2026 - Mobile Apps" (maintainer on point: Josh Avant; co-maintainers WhatsSkill, Colin), posted to the community forum 2026-10-31T20:33:54Z, and the Focus Week #2 (Windows & Mac) contributor list was named — **but no results/wrap-up post for Focus Week #2 shipped, and the official blog is now 11 days silent.** https://community.openclaw.ai/t/openclaw-focus-week/302
2. **ClawHub CLI v0.25.0 shipped 2026-11-01T06:24:31Z** — experimental "Claw" packages are now **Templates** (`--family claw` is rejected, scoped routes move to `/<owner>/templates/<slug>`), plus a publish-failure diagnostics fix. https://github.com/openclaw/clawhub/releases/tag/v0.25.0
3. **The ClawHub publish pipeline got its root cause named** — a maintainer stated on the forum (2026-10-31T21:05Z) that "a recent change was rejecting usable partial SkillSpector reports before they could reach ClawHub's independent review"; 14 ClawHub issues/PRs merged in-window around the scanner/publish path (#4186–#4196). https://community.openclaw.ai/t/openclaw-focus-week/258
4. **Two new secret-exposure-grade issues** were filed: `config set` **audit records the secret in the clear** (#190075) and **Slack outbound route discovery issues authenticated API requests after the transport authority expires** (#190078); 5 new `impact:security` issues total. https://github.com/openclaw/openclaw/issues/190075
5. **Volume exploded while release cadence stalled:** 907 new issues+PRs in the window (**796 PRs vs 114 issues**), but **no new core release since 2026.10.9 (Oct 29) / beta.5 (Oct 30)**; ClawHub gained **47 new skills with 0 downloads and 0 installs** (down from 991 dl / 10 inst in the prior window). https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E=2026-10-31T10:30:00Z

---

## 1. Focus Week #3 (Mobile Apps) announced — Focus Week #2 closed with no results post

- **Claim:** The OpenClaw community forum opened the **third Focus Week** during the research window, targeting **Android/iOS mobile apps**, and simultaneously named the ten Clawtributors recognised for Focus Week #2 (Windows & Mac, Oct 26 – Nov 1). No official blog post or results/summary for Focus Week #2 was published.
- **Date/time:** Forum topic created **2026-10-31T20:33:54Z** (in window). Focus Week #3 dates: **Nov 2 – Nov 8, 2026**.
- **Evidence detail:**
  - Topic id **302**, title *"Focus Week Nov 2nd-8th, 2026 - Mobile Apps"*, author `joe`, 1 post. Theme *"OpenClaw On the Go"*, maintainer on point **Josh Avant**, co-maintainers **WhatsSkill** and **Colin**.
  - Focus Week #2 topic id **235**, *"Focus Week Oct 26th-Nov 1st, 2026 - Windows & Mac Apps"*, created 2026-10-26T13:52:01Z, maintainer `@Dallin R`, theme *"OpenClaw at Home on Windows & Mac"*. As of collection it still had **only 1 post** — i.e. **no "what got done, what still needs attention" wrap-up**, which the Oct 21 blog post explicitly promised ("At the end of the week, we'll share what got done, what still needs attention, and what we learned").
  - Focus Week #2 contributors named in the #3 post: dankarization, caviterginsoy, rocuts, justkamkam, z3r05i9n41, peetiegonzalez, dsilver3000, silverblackhand, .olli0103, digitalpanoply.
  - Official blog RSS still shows the newest post as *"Come Build With Us: OpenClaw Focus Weeks"* (2026-10-21) — **11 days of silence** as of 2026-11-01.
- **Source:** https://community.openclaw.ai/t/openclaw-focus-week/302 · https://community.openclaw.ai/t/openclaw-focus-week/235 · https://openclaw.ai/rss.xml
- **Confidence:** **confirmed** (forum API, blog RSS).

## 2. ClawHub CLI v0.25.0 released — "Claws" become "Templates"

- **Claim:** The ClawHub registry/CLI shipped a breaking-ish release that renames experimental package family **claw → template**, changes public scoped routes, and improves publish-failure diagnostics.
- **Date/time:** Published **2026-11-01T06:24:31Z**.
- **Evidence detail (verbatim from release notes):**
  - *"Experimental Claw packages are now Templates. Use `clawhub package explore --family template` and `clawhub package publish <artifact.tgz> --family template`; `--family claw` is rejected. Public scoped routes use `/<owner>/templates/<slug>` instead of `/<owner>/claws/<slug>`."*
  - *"New packages use `openclaw.template` in `package.json`. `CLAW.md`, existing package/version identities and published artifact bytes remain unchanged."*
  - *"CLI: show the publishing step, file position, HTTP status and safe request ID when an upload fails, while preserving retry timing and existing error messages."*
  - npm proof: `clawhub@0.25.0`, integrity `sha512-G+ofWmCHK0w/kl2MWaKurYlnucw1cUbWnH7ecRUo0uzKmmSmQI9YyyaphZV+jqt8m2pCDT4j9edHiuv3LxSa0A==`.
  - Preceding release: v0.24.1 (2026-10-28). ClawHub repo: **9,542 stars**, 1,495 forks, 79 open issues, pushed 2026-11-01T06:13:53Z (stars +2 vs the 9,540 recorded on 2026-10-29).
- **Source:** https://github.com/openclaw/clawhub/releases/tag/v0.25.0 · https://api.github.com/repos/openclaw/clawhub
- **Confidence:** **confirmed**.

## 3. ClawHub publish/scan pipeline: root cause named, 14 in-window fixes merged

- **Claim:** The multi-day "Security check: could not complete" publish failure (previously reported 10-28, 10-30) has an officially stated cause, and the surrounding scanner/publish code saw a burst of merged fixes in-window.
- **Date/time:** Maintainer statement **2026-10-31T21:05:40Z**; 16 ClawHub repo items created in-window.
- **Evidence detail:**
  - Maintainer `hrudolph` on community topic 258: *"I checked with Patrick, who is handling the scanner backlog. He confirmed that a recent change was rejecting usable partial SkillSpector reports before they could reach ClawHub's independent review."* (SkillSpector = the scan stage.)
  - In-window merged ClawHub fixes/PRs (all `closed`, created 2026-10-31T21:04Z → 2026-11-01T06:13Z): **#4186** retry transient release environment writes · **#4187** retry typed pre-blob skill storage rejections · **#4188** preserve bounded native scanner failure diagnostics · **#4189** adopt reviewed shell quote boundaries in scan workers · **#4190** acknowledge scans after committed completion · **#4191** retain publish phase and HTTP diagnostics · **#4192** remove blanket plugin incompatibility alert · **#4193** add read-only public plugin detail snapshot · **#4194** preserve safe prepublication completion diagnostics · **#4195** stamp backend revision after successful deployment · **#4196** prepare ClawHub CLI 0.25.0 · **#4197** dev dependency bump.
  - **Still open:** ClawHub #4130 *"Retained brewpage-publish 1.0.8: security check could not complete"* (2026-10-28) and #4159 *"Retained @byungkyu/api-gateway 1.2.30, @maton/yahoo-mail 1.0.0, @maton/icloud-mail 1.0.0: security check could not complete"* (2026-10-30). So the backlog is **not** fully drained.
  - Also open from earlier: #4044 *"Silent scan-gate blackholing of published versions (no owner-visible status)"*.
- **Source:** https://community.openclaw.ai/t/openclaw-focus-week/258 · https://api.github.com/search/issues?q=repo:openclaw/clawhub+created:%3E=2026-10-31T10:30:00Z
- **Confidence:** **confirmed** for the maintainer statement and merged PRs; **inferred** that this explains the earlier "could not complete" reports (the statement names a cause but does not explicitly tie it to those two retained-release tickets).

## 4. New security-relevant issues on the core repo

- **Claim:** Five issues labelled `impact:security` were filed in-window, including one that writes secrets into audit records in the clear and one that re-uses expired transport authority for authenticated Slack API calls.
- **Date/time:** 2026-11-01T03:42Z → 2026-11-01T06:12Z (plus two late on 10-31).
- **Evidence detail (new `impact:security`, 5 in-window):**
  - **#190075** (2026-11-01T04:08:16Z) — *"[Bug]: config set audit records secret in the clear when a value option precedes the positionals"* → https://github.com/openclaw/openclaw/issues/190075
  - **#190078** (2026-11-01T04:09:08Z) — *"[Bug]: Slack outbound route discovery issues authenticated API requests after transport authority expires"* → https://github.com/openclaw/openclaw/issues/190078
  - **#190073** (2026-11-01T04:06:09Z) — *"[Bug]: exec auto-reviewer hard-denies ordinary commands as 'reviewer-directed text' when a flag contains …"* (availability/security-usability collision; fix PR **#190115** in-window, `security-sensitive-changed`)
  - **#190113** (2026-11-01T06:12:06Z) — *"[Feature]: Option for the Control UI to enforce allowedOrigins exactly, including loopback origins"* → https://github.com/openclaw/openclaw/issues/190113
  - **#189947** (2026-11-01T01:46:17Z) — *"[Bug]: Failure alerts for delivery.target 'owner' automations resolve the session's last route instead of …"*
  - Earlier in-window (still relevant, filed 10-31): **#189752** (in-flight attempt keeps its captured tool allow/deny policy after hot reload) and **#189434** (setting to remove "allow-always" from exec approvals).
  - Label totals in-window: `impact:security` **5**, `impact:auth-provider` **6**, `impact:ux-friction` **48**, `impact:session-state` **5**, `security-sensitive-changed` **26**.
  - `impact:auth-provider` highlights: **#190150** OpenClawKit — one transport error during the device-token retry permanently stops use of the stored token; **#190145** macOS/iOS — a rejected stored device token is never cleared and the channel reconnects forever; **#190056** trailing-whitespace filenames and `sshIdentity` values silently resolve to trimmed siblings; **#189490** Talk realtime consults ignore `agentRuntime: claude-cli`.
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+label:impact:security+created:%3E=2026-10-31T10:30:00Z
- **Confidence:** **confirmed** (titles/labels/timestamps from the GitHub search API).

## 5. Platform capability work in flight (open PRs, security-sensitive-changed)

- **Claim:** The in-window PR stream shows three capability pushes: an interrupt-policy feature for chat follow-ups, a shared person-scoped project-knowledge feature, and a substantial expansion of PostgreSQL support.
- **Date/time:** PRs opened 2026-10-31T14:30Z → 2026-11-01T09:24Z (all still `open` at collection).
- **Evidence detail:**
  - **#190170** (2026-11-01T09:24:03Z) — *"feat(chat): choose how follow-ups interrupt active work"* — size **XL**, labels `docs, app: web-ui, gateway, security-sensitive-changed`. This is the direct follow-up to the `impact:ux-friction` backlog around duplicate/stuck replies.
  - **#189822** (2026-10-31T22:33:05Z) — *"feat(knowledge): share person-scoped project knowledge between agents"* — `security-sensitive-changed`.
  - **#189749** (2026-10-31T20:33:24Z) — *"feat(cron): let human owners manage and transfer automations"*.
  - **#189685** (2026-10-31T19:03:38Z) — *"feat(backup): add PostgreSQL local companion checkpoints"*; **#189532** — *"fix: keep PostgreSQL credentials out of child environments"*; **#189901** (2026-11-01T00:40:34Z) — *"fix(auth): inline API-key failures break on PostgreSQL agent stores"*.
  - **#190158** (2026-11-01T07:44:00Z) — *"refactor(agents): run background session work as a fork of the stored session"* — size XL, `extensions: codex`.
  - **#189600** (2026-10-31T17:31:49Z) — *"fix(plugins): expose verified Control UI requester identity to tools"*.
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+label:security-sensitive-changed+created:%3E=2026-10-31T10:30:00Z
- **Confidence:** **confirmed** (open PR titles/labels).

## 6. Issue/PR volume in the window (record-high PR:issue ratio)

- **Claim:** The core repo absorbed **907 new issues+PRs** in ~23 hours — **796 pull requests** against only **114 user-filed issues**. The prior day's run recorded 157 new issues in 24 h.
- **Date/time:** Created ≥ 2026-10-31T10:30:00Z.
- **Evidence detail:** GitHub search API: `total_count` 907 for `created:>=2026-10-31T10:30:00Z`; `is:pr` → **796**, `is:issue` → **114**. Open-issue counter on the repo went 7,904 → **7,855** while 907 items were created — i.e. the queue is being churned, not growing. Bulk intake is visible via the `clawsweeper:bulk-filed` label (11) and the "clawsweeper" triage labels (30 `intake:bug`, 26 `intake:needs-repro`, 17 `intake:needs-environment`, 11 `intake:feature`). A large slice of the 10-31 07:30Z batch is macOS-native-app bugs (#190146–#190155: Talk CJK silence-timeout clamp, Debug settings kill confirmation, PortGuardian lsof handling, status-menu "Open session log in Code", Gateway status stale after process exit, iOS/Android device-token clearing, OpenClawKit token retry).
- **Source:** https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E=2026-10-31T10:30:00Z
- **Confidence:** **confirmed** (counts); the causal reading of "automation-driven bulk filing" is **inferred** from the `clawsweeper:*` label taxonomy.

## 7. Release cadence: no new core release in-window; npm dist-tags unchanged

- **Claim:** No new OpenClaw core release shipped during the window. `latest` remains **2026.10.9**, `beta` remains **2026.10.10-beta.5**, `extended-stable` remains **2026.9.36**.
- **Date/time:** Newest releases predate the window: 2026.10.10-beta.5 published 2026-10-30T03:57:14Z; 2026.10.9 published 2026-10-29T15:54:35Z; 2026.9.36 published 2026-10-29T20:19:38Z.
- **Evidence detail:** `npm dist-tags` = `{beta: 2026.10.10-beta.5, latest: 2026.10.9, extended-stable: 2026.9.36}`. GitHub tags list unchanged at the top (v2026.10.10-beta.5 … v2026.10.5). Docs release index still shows *"v2026.10.9 (latest)"* as the newest card; no 2026.11.x page. "The Daily Claw" feed `updated` 2026-11-01T09:30:23Z still lists **2026.10.10-beta.5 (2026-10-30)** as its newest release entry — no 11-01 release article.
- **Source:** https://registry.npmjs.org/openclaw · https://api.github.com/repos/openclaw/openclaw/releases · https://docs.openclaw.ai/releases
- **Confidence:** **confirmed**.

## 8. Adoption metrics: stars +82, npm week-over-week flat, ClawHub installs collapsed to zero

- **Claim:** Star/forks moved slightly up; npm weekly downloads are flat week-over-week but the registry has a data hole for Oct 30/31; ClawHub's new-skill cohort got **zero** downloads and **zero** installs (prior window: 991 downloads / 10 installs).
- **Date/time:** Collected 2026-11-01 ~09:30Z.
- **Evidence detail:**
  - `openclaw/openclaw`: **393,599 stars** (393,517 on 2026-10-31 → **+82**), **82,726 forks** (+17), **7,855 open issues**, 1,697 watchers, `pushed_at` 2026-11-01T09:26:11Z.
  - `openclaw/openclaw-enterprise`: **448 stars**, pushed 2026-11-01T09:37:37Z (repo *"The Enterprise-grade Control Plane for modern agentic workloads"*). No new enterprise announcement in-window.
  - npm `last-week` (Oct 23–29) = **3,440,912**; `last-day` (Oct 29) = **384,516**. Range series: 10-26 474,738 · 10-27 391,520 · 10-28 341,738 · 10-29 384,516 · **10-30 0** · **10-31 0** · 11-01 0. The zeros for 10-30/10-31 are a **registry data gap**, not zero installs (the same gap affected 10-19/20/21 previously). Week-over-week vs the prior window's Oct 22–28 (3,455,782): **−14,870 (−0.4%) = flat**.
  - ClawHub new skills in-window: **47** (filtered `createdAt >= 2026-10-31T10:30Z` from the 192-item `?limit=200` page) across 27 distinct owners; **aggregate 0 downloads, 0 installs**; max single-skill downloads **0**. Prior window: 54 new skills / 991 downloads / 10 installs. Direction of travel: fewer skills (54→47) and **installs 10→0**.
  - Notable new ClawHub publishers: **wavespeed** (Wan 2.6/3.0, Seedance 2.5, Kling 4.0, Seedream 5 Pro, Nano Banana 2.1, MiniMax Speech 2.8 — 7 media-generation skills), **scavio-ai** (retail price/product-data APIs: Lowe's, Sam's Club, Canadian Tire, Dollar General), **thcjp** (6 "‑pro" skills: macro-sentinel, obsidian-toolkit, aws-agent-orchestrator, excel-ninja, feedstream-monitor), **cairn-agent**, **mateohysa/reelsfarm-*** (product photos, AI videos, social scheduler), **pythonthink/metadig**, **onepaperhoon/knowmesh**.
  - ClawHub top skills by downloads (unchanged ordering; `?limit=25&sort=downloads`): `pskoett/self-improving-agent` **490,040 dl / 18,511 inst / 4,010 stars** (v4.0.5) · `spclaudehome/skill-vetter` 280,680 / 12,266 · `ivangdavila/self-improving` 213,599 / 7,394 · `steipete/github` 203,532 / 7,659 · `oswalpalash/ontology` 201,082 / 7,336 · `steipete/gog` 198,535 / 5,497 · `tokauthai/skillscan` 183,108 / 5,962 · `halthelobster/proactive-agent` 178,755 / 7,209 · `steipete/weather` 172,991 / 6,522 · `gpyangyoujun/multi-search-engine` 164,763 / 5,533.
  - **Could not verify:** the total ClawHub skill count — pagination via `nextCursor` returns **HTTP 500**, and `?limit=1000` returns the same 192 items, so 192 is a page size, not the registry total.
- **Source:** https://api.github.com/repos/openclaw/openclaw · https://api.npmjs.org/downloads/point/last-week/openclaw · https://clawhub.ai/api/v1/skills?limit=200
- **Confidence:** **confirmed** for the numbers; the ClawHub install collapse is **confirmed as raw counter values** but their meaning (genuinely zero installs vs. counter lag on brand-new versions) is **unverified**.

## 9. New dependent repositories: 43 in-window, down from 75; the `alphaparkinc` factory continues

- **Claim:** GitHub's "created recently" search returned **43** new repos mentioning OpenClaw in-window (prior window: 75). The `alphaparkinc` / `Alpha-Park` GenPark factory is still the top of the list by stars, and the genuinely interesting builds are distinct small integrations.
- **Date/time:** Created ≥ 2026-10-31T10:30:00Z.
- **Evidence detail:**
  - **10 GenPark repos** in-window from `alphaparkinc`/`Alpha-Park`, each with **exactly 7 stars / 0 forks** and near-identical dense descriptions (credential-entropy-exposure-fiduciary, indoor-co2-cognitive-ventilation, hydration-osmolality-electrolyte, subscription-zombie-pruner, vocal-fatigue-acoustic-strain) — duplicated across two owner handles with ~40 s spacing. Same astroturf signature flagged in the prior run.
  - Genuine-looking new builds, all 0 stars: **swarmdm/openclaw-swarmdm** — *"Agent-to-agent (A2A) DM channel for OpenClaw: other AI agents' DMs wake your agent"* (2026-10-31T23:51Z) · **ArnavSingh76533/openclaw-telethon** — *"OpenClaw with Telegram over MTProto (Telethon) — one-click Hugging Face Spaces"* (2026-10-31T18:25Z) · **panditvirchandra77-lgtm/openclaw-anywhere** — run OpenClaw on any Linux box, open from any phone browser via **Tailscale** (2026-11-01T07:48Z) · **arjungupta99/chips-openclaw** — "OpenClaw as a Chips harness" (2026-11-01T07:27Z) · **thetahustler/openclaw-security-check** — read-only security check + VPS hardening for self-hosted agents (2026-10-31T13:00Z) · **hlum/openclaw-instagram-dm** — cheap Instagram DM reads (2026-11-01T03:05Z) · **IrumHahn/openclaw-job-handoff** — Korean-language job-handoff skill with L0–L4 grading (2026-10-31T15:12Z) · **irollvento/openclaw** (2026-11-01T04:26Z) · **brulanta/openclaw-vps**.
- **Source:** https://api.github.com/search/repositories?q=openclaw+created:%3E=2026-10-31T10:30:00Z&sort=stars&order=desc
- **Confidence:** **confirmed** for counts/timestamps; the "astroturf" characterisation of `alphaparkinc` is **inferred** (carried over from the prior run's finding).

## 10. Community forum activity in-window (adoption/support signal)

- **Claim:** Beyond the Focus Week post, the community forum shows three distinct user-intent clusters in-window: fully-local Ollama embedding, Google Calendar OAuth into an iPhone, and a local RTX 5090 after-hours trading brain.
- **Date/time:** 2026-10-31T10:42Z → 2026-11-01T08:01Z.
- **Evidence detail:**
  - **Topic 300** (2026-10-31T18:58Z, 3 posts) — *"Cannot switch embedding model to Ollama (Defaults to OpenAI / 401 Error)"*; a community member supplied a `~/.openclaw/openclaw.json` patch setting `memory.search.provider = "ollama"`, `model = "nomic-embed-text"`, `fallback = "none"`, `remote.baseUrl = http://127.0.0.1…`. The author's follow-up (2026-11-01T08:01Z) was flagged by the community and is temporarily hidden.
  - **Topic 299** (2026-10-31T10:42Z, German) — user subscribes to the agent-managed Google Calendar on their iPhone so agent-scheduled appointments appear there while the phone's own calendar keeps working; Google OAuth and the calendar work.
  - **Topic 265** *"Permissions for claw"* — 2026-10-31T21:55Z troubleshooting reply about `whoami`/`command -v` diagnostics for a permission-blocked agent.
  - Local-finance build (topic id 298, 2026-10-31T04:23Z) — *"Local RTX 5090 Overnight Financial Brain: Automating Multi-Ticker After-Hours Te…"*.
- **Source:** https://community.openclaw.ai/latest.json?order=created
- **Confidence:** **confirmed** (forum API, quoted titles/timestamps).

## 11. Third-party coverage in-window

- **Claim:** OpenClawRadar published one OpenClaw-specific item in-window: a 100-task live-web browser benchmark in which OpenClaw finished the most tasks (35) but was slowest (141 s median) and most expensive ($4.80), i.e. **3.5× the cheapest rival**.
- **Date/time:** 2026-11-01T00:15:01.800Z.
- **Evidence detail:** Benchmark on 100 hard live-web tasks from Online-Mind2Web; every setup used Claude Haiku 5.5 + headed Chrome, 10-minute limit, one attempt. Results: OpenClaw 35 finished / 141 s / $4.80; 5dive (Claude Code) 32 / 105 s / $1.39; Claude in Chrome 29 / 67 s / $0.91 (subscription, estimate). The other in-window Radar item (2026-10-31T12:15Z) is Claude Code v2.1.316 — not OpenClaw.
- **Source:** https://openclawradar.com/article/openclaw-browser-100-live-web-tasks-benchmark-cost
- **Confidence:** **confirmed** as a *reported third-party benchmark*; the benchmark itself was **not** independently verified by me (single source, methodology as described by the outlet).

---

## Gaps, errors and caveats

- **Reddit r/openclaw:** HTTP 403 from this host (known). Not attempted. Community-forum signal was used instead (community.openclaw.ai Discourse JSON, which worked).
- **GitHub API rate limits:** unauthenticated search hit **403 "API rate limit exceeded"** at least twice (2026-11-01 ~09:30Z and again shortly after). Some queries were re-run after a 45–60 s pause; all numbers reported here were successfully retrieved, but **the `is:issue` (114) and `is:pr` (796) split was taken from two separate searches** (each 1-item `per_page=1`) and does not sum exactly to the 907 `total_count` — treat the split as ±a few.
- **ClawHub pagination is broken:** `https://clawhub.ai/api/v1/skills?limit=200` returns 192 items plus a `nextCursor`; requesting the next page returns **HTTP 500 Internal Server Error** on every attempt (tried with and without sort). `?limit=1000` returns the same 192 items. Therefore **the total ClawHub skill count could not be established**, and "47 new skills" means "47 new skills among the first 192 returned", not necessarily all new skills. `?sort=downloads` also intermittently returns an empty item list, so the top-skills table was captured via `?limit=25&sort=downloads` in a separate successful call.
- **npm registry data gap:** the point/range API returns **0** for 2026-10-30, 2026-10-31 and 2026-11-01. This is an API/registry reporting gap (the same gap hit 10-19/20/21 previously), **not** zero downloads. No independent source for Oct 30/31 download volume was available, so no day-level trend for those two days can be stated.
- **No Focus Week #2 results post exists** — the Oct 21 blog promised a "what got done" summary at the end of the week; as of 2026-11-01T09:30Z the topic still has one post and the blog is unchanged. I cannot say whether the summary will be published later, only that it was not published in-window.
- **Official blog silent for 11 days** (last post 2026-10-21). Blog index checked by scraping `openclaw.ai/blog/` link list — no post newer than the Focus Weeks piece.
- **GitHub Discussions endpoint** (`github.com/openclaw/openclaw/discussions`) was not attempted this run (previously unreliable); no attempt was made to verify discussion activity.
- **Security advisories:** `GET /repos/openclaw/openclaw/security-advisories` returned **100 advisories, all published 2026-09-11** (median severity; 3 high, rest medium/low) — **no advisory was published or updated in-window**. This confirms the absence of a new CVE/advisory, but the endpoint appears to be a bulk 2026-09-11 publication rather than a live feed, so an advisory published today might not appear there.
- **ClawHub install counters for brand-new skills may lag** — the 0/0 cohort could partly be counter lag rather than genuine zero adoption; I could not distinguish the two.
- **No enterprise adoption announcement** was found in-window: no new official blog post, `openclaw-enterprise` repo shows only routine pushes (448 stars), and no enterprise-named press item surfaced in the web search. Absence of evidence only.
- **web_search provider note:** the configured provider returned 0 results for the exact-phrase Focus Week query and thin results for the release query; the Focus Week #2/#3 details were therefore sourced from the forum API rather than from search.
- Numbers for "prior window" baselines are quoted from the 2026-10-31 run's findings file (`findings_usecases_community_2026-10-31.md`) in this workspace; I did not re-derive them.

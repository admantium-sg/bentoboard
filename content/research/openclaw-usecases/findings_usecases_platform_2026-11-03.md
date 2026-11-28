# Platform Findings — OpenClaw — 2026-11-03

**Research window:** 2026-11-02T09:28Z → 2026-11-03T09:28Z
**Subagent scope:** Platform news, releases, security incidents, enterprise adoption.
**Prior baseline:** see "Baseline" section at bottom for what changed vs. previous window.

---

## 1. RELEASE TRAIN CUT FINALLY — openclaw 2026.10.10 shipped (BREAKTHROUGH)

**The 4-window release stall is over.** `openclaw@2026.10.10` was published to npm at **2026-11-03T02:26:08.904Z**, inside the research window (09:28Z 11-02 → 09:28Z 11-03). The GitHub release `v2026.10.10` was published at **2026-11-03T03:22:35Z** (release SHA `7dc3350cb9f08fcf9a0af5c4845a20d5b2f1a8be`, tag SHA `7dc3350c`).

Dist-tags changed in this window:
- `latest`: `2026.10.9` → **`2026.10.10`** (new)
- `beta`: `2026.10.10-beta.5` → **`2026.10.10`** (promoted — the beta line has been folded into latest; no separate beta published this window)
- `extended-stable`: `2026.9.36` (unchanged)

Release artifact set: **21 assets** including `OpenClaw-2026.10.10-{amd64.AppImage,amd64.deb,arm64.dmg,arm64.zip,x86_64.dmg,x86_64.zip}`, `.dmg`, `.zip`, both `.dSYM.zip` debug bundles, `dependency-evidence.zip`, `postpublish-evidence.json`, `release-manifest.json`, `stable-main-closeout.json`, and `SHA256SUMS.linux-app.txt`. npm integrity: `sha512-9HZhzq/Yck3uH3M/iYP7szqoF5JXpXfz0+orhBOKalSH+dj0IC9uWPECkR1vH4lMCytxpHjJKHh9efXRYMJl6w==`.

**Scale of the release is enormous.** The compare API reports **4,945 commits** and **300 changed files** between `v2026.10.9` and `v2026.10.10`. The audited contribution record in the release body states the range covers **3,018 in-range PRs + 1 retained seed-only PR = 3,019 unique PRs**, spanning commit range `3dac10b958665ecd0b84a6ef5dadbbda4fd5a15d..9ea9a0e6ec12ffe866daa567a60b118559a08c64`. The release body names **367 unique @-mentioned contributors**.

Note on the 4,945 vs 3,019 discrepancy: the compare count includes direct commits to trunk, the release record counts PRs only. Both numbers come from GitHub and are self-consistent within their own definitions.

Source: https://registry.npmjs.org/openclaw
Source: https://api.github.com/repos/openclaw/openclaw/releases
Source: https://api.github.com/repos/openclaw/openclaw/compare/v2026.10.9...v2026.10.10
Source: https://github.com/openclaw/openclaw/releases/tag/v2026.10.10

---

## 2. RELEASE HIGHLIGHTS — 2026.10.10 content (from release body)

Seven headline items were promoted in the "Highlights" section:

1. **Backup safety** — secret-redacted Git backups now cover PostgreSQL exports and omit bundled-plugin credentials, webhook tokens, and credential blobs while preserving non-secret plugin state (#174698, #186953).
2. **Codex** — managed native CLI upgraded to **0.164.0** with matching protocol projection and platform packages (#181823).
3. **Node compatibility** — installs/updates work again on Node `>=24.16.0 <25 || >=26.1.0`; Node **24.22.1 or 26.12.1** remains the security recommendation; Node 26 workers no longer abort when stdin is a file (#186589, #187516).
4. **Gateway streaming** — replies containing tool-call XML or long HTML ending at a partial tag no longer stall the Gateway (#181397, #180765).
5. **Delegated work** — subagent continuations, restart recovery, inline completion, and paused-parent result custody "substantially more reliable" (#185386, #181373, #184022, #181933, #182587).
6. **Cloud and desktop sessions** — local desktop onboarding, repository-aware cloud environments, and moving sessions between local and cloud are now first-class workflows (#169522, #169512, #169568, #170862, #171690).
7. **Cron** — missed slots with stale stored next-run times are no longer dropped (#179928).

Major "Changes" areas: Control UI rewrite (new architecture, compact navigation rail, native Solid overlays/tabs, wide-chat details — #100024, #168325, #169128, #170707, #170771); mobile nodes gaining **Android system/photos/contacts/calendar/motion** capabilities and **iOS authenticated background presence beacon** (#29398, #73330); MCP apps running across conversations via a principal-bound relay (#161747, #168233); PostgreSQL-capable database engine with schema-drift checks, migrations and an experimental **Workboard** store (#170828, #172265, #171962, #169214); managed **llama.cpp OCR/vision/embedding-only** setup and automatic first-run inference selection (#148193, #170153, #169628, #170369); plugin runtime control (fork live context, steer active runs, override model fallbacks per run — #170146, #170152, #168893); MCP events triggering automations (#165399, #172240); Windows/Tauri desktop starting with local Gateways and guided macOS dashboard setup (#169522, #169512, #169568); secure-entry secrets prompts with reveal-on-demand and scoped credential egress (#169925, #170810); diagnostics exporting prompts and final answers per message/run span (#156603, #171923).

**No "Breaking changes" section exists in this release body** — the body contains only `Highlights / Changes / Fixes / Complete contribution record / Release verification`. This is notable given the release's size (INFERRED: the team continues to fold breaking work into fix entries, as in prior windows).

**Release verification caveat (worth flagging):** the release body states *"Android APK: skipped — apps/android/version.json is 2026.8.2, release train is 2026.10.10; run pnpm android:version:pin -- --from-gateway before the next tag."* The Android version pin was not updated for this tag — meaning the shipped Android artifact metadata is two minor trains stale. This is a real, self-disclosed gap, not an inference.

Source: https://github.com/openclaw/openclaw/releases/tag/v2026.10.10

---

## 3. SECURITY — zero new published advisories, but a heavy security-fix cycle in the release

**No new GitHub Security Advisory was published in the window.** The global npm advisory feed for `affects=openclaw` still tops out at **GHSA-3x84-qq85-fj65, published 2026-10-21T19:37:42Z** ("OpenClaw: Browser CDP discovery could accept blocked WebSocket URLs") — unchanged from the prior window's baseline. The next-newest is GHSA-jw7v-5mp7-ghgm (2026-07-14). The repo-level advisory endpoint remains frozen in the past and was not used as the primary check.

However, the 2026.10.10 release itself carries a **substantial security fix slate**:

- **Backup security** — applies `--exclude-secrets` to PostgreSQL Git exports and redacts identified bundled-plugin tokens, OAuth credentials, signing keys, webhook tokens, hosted-media bearer records, and credential blobs (#174698, #186953). Explicit operational consequence in the notes: *"Existing Git history is not rewritten; affected integrations must sign in or register again after restoring a redacted backup."*
- **Security boundaries** — keep unresolved Teams allowlists restrictive; refuse embedded Control UI auth on pinned Android Gateway connections; audit symlinked workspace skill roots; omit credentials from rejected search endpoints; reject malformed credential input (#184989, #180843, #182384, #182534, #167251).
- **Dependency security** — update `fast-uri`; bound vendored Zod traversal for A2UI and Discord; scope patched MSAL on Teams; include nodemailer sender-parsing fixes for IMAP (#187285, #187304, #187297, #187293, #187301).
- **Terminal output** — escape terminal controls across channel, CLI, Gateway, MCP, model, backup, secret, session, storage and message reports while preserving UTF-8 boundaries: **19 distinct PR numbers** (#178234, #181585, #181582, #183708, #178313, #183355, #181587, #184153, #184141, #184139, #176266, #183360, #176230, #183942, #183932). This is the largest single themed fix cluster in the release and looks like a coordinated terminal-injection hardening sweep (INFERRED).

Note the shape of the npm advisory picture: the newest advisory is dated 2026-10-21, i.e. **13 days before this window**, and the July 2026 batch shows a pattern of duplicate advisories being filed for the same underlying issue (GHSA-jw7v-5mp7-ghgm explicitly titled "Duplicate Advisory: Browser CDP discovery could accept blocked WebSocket URLs").

Source: https://api.github.com/advisories?ecosystem=npm&affects=openclaw
Source: https://github.com/openclaw/openclaw/releases/tag/v2026.10.10

---

## 4. GITHUB ACTIVITY — 798 new items in window, lower than prior window's 820

**798 new items** in `openclaw/openclaw` created inside the window: **656 PRs + 142 issues** (PR share 82.2%). Prior window was 820 items (674 PR / 146 issue), so this is a **slight decline** (-22 items, -2.7%) — plausibly explained by the release cut consuming maintainer attention on stabilization rather than intake.

Label tallies for new items in window:
| Label | Count |
|---|---|
| `impact:ux-friction` | 66 |
| `security-sensitive-changed` | 28 |
| `impact:auth-provider` | 17 |
| `impact:session-state` | 16 |
| `impact:security` | 4 |

**`impact:security` dropped sharply: 14 → 4.** The four new security-labelled items are:
- **#191511** (open) — "Pair a browser with a short code approved on the host" — created 2026-11-02T23:10:24Z
- **#191420** (closed) — "`doctor --non-interactive` installs plugin packages without `--fix` (Voice Call's `TELNYX_API_KEY` selects `@telnyx/openclaw-provider`)" — created 2026-11-02T19:47:51Z
- **#191145** (open) — "[Feature]: user-configurable session attachment file-type allowlist" — 2026-11-02T14:21:10Z
- **#191049** (open) — "A way to allow a sender some chat commands: today it is all of them or `/new` and `/reset`" — 2026-11-02T11:12:21Z

#191049 is the notable one: it describes a **command authorization granularity gap** — a sender either gets all chat commands or only `/new` and `/reset`. This is the same class of issue as the July 2026 advisory "Telegram interactive callbacks could skip commands.allowFrom" (GHSA-w5ww-7chg-mxcq), which makes it a candidate for future advisory treatment (INFERRED — not confirmed; it is an open feature request, not a filed vuln).

Repo metrics at time of check: **stars 393,793** (prior 393,688 → **+105**), **forks 82,771** (prior 82,735 → **+36**), **open issues 7,733** (prior 7,710 → **+23**, i.e. the backlog stopped shrinking for the first time in this series). Last push to trunk: 2026-11-03T09:29:26Z.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-11-02T09:28:00Z
Source: https://api.github.com/repos/openclaw/openclaw

---

## 5. ENTERPRISE — active engineering, still no public announcement

`openclaw/openclaw-enterprise` at time of check: **451 stars** (prior 449 → **+2**), 105 forks, 253 open issues, pushed 2026-11-03T09:23:11Z.

**65 new items** in the enterprise repo during the window (PRs + issues), with heavy activity on a single coherent theme: **OpenShell / repository grants / Git custody policy**. Sample of commits in window:
- `docs: separate OpenShell enrollment from repository grants (#4481)` — 2026-11-03T09:23:07Z
- `Remove the retired prepared Git trial authorizer (#4478)` — 06:46:22Z
- `Remove the old broker trial callback from the OpenShell Git listener (#4477)` — 06:25:12Z
- `Separate repository grants from OpenShell middleware setup (#4475)` — 06:14:00Z
- `Keep OpenShell transport out of repository policy loading (#4474)` — 05:52:29Z
- `Keep Git admission versions with the selected custody policy (#4472)` — 05:29:50Z
- `Prevent replay of Agent deployments during production upgrade recovery (#4473)` — 05:06:59Z
- `Preserve Docker access and scope Linear transcript discovery (#4460)` — 03:21:36Z
- `docs(specs): RFC-0027 cross-cluster callback and workspace storage for remote Provider Harnesses (#4464)` — 02:03:45Z
- `Allow dedicated OpenClaw Agents to deploy multiple managed plugins (#4462)` — 01:22:23Z
- `Retire new local launches of protected static inference (#4469)` — 03:05:41Z
- `Reject new protected static inference on the bundled OpenShell Driver (#4470)` — 04:10:50Z

**Notable:** a `blog/` directory does not exist in the enterprise repo (404 on `contents/blog`), so the "blog silent" tracking from prior windows cannot be a *path* that gets updated; the enterprise narrative continues to live on openclaw.ai.

**openclaw.ai/rss.xml — no new posts.** Newest entry remains **"Come Build With Us: OpenClaw Focus Weeks"** dated **Wed, 21 Oct 2026 00:00:00 GMT** — i.e. the official blog has been silent for **13 days** (prior baseline: 12 days). Next entries: 2026-10-16 ("How PJ helps small businesses use OpenClaw"), 2026-10-02 ("Tencent AIG joins ClawScan"), 2026-09-29 ("OpenClaw Enterprise - The Open Agent Platform"). **No adoption announcement, partner news, or customer story was published in the window.**

Source: https://api.github.com/repos/openclaw/openclaw-enterprise
Source: https://api.github.com/repos/openclaw/openclaw-enterprise/commits
Source: https://openclaw.ai/rss.xml

---

## 6. CLAWHUB — 52 new skills in window, and the "0 installs" streak is BROKEN (barely)

**52 new skills** created in `openclaw/openclaw` window (measured against `createdAt` of the skills returned by `https://clawhub.ai/api/v1/skills?limit=200`; the API returns a 200-item page so this is a lower bound, not a ceiling — the page is sorted by updated activity and is saturated with same-window creations).

**The four-window "every new skill has 0 installs" pattern has been broken, but only barely.** Three of the 52 new skills registered a single install:
- **`zhz-tts`** — created 2026-11-03T03:51:28Z — **installs: 1**, downloads 0, stars 0
- **`ailn-discovery`** — created 2026-11-03T02:13:03Z — **installs: 1**, downloads 0, stars 0
- (`impact`, `sngs-helper`, `vws-helper` each have **1 star** but 0 installs)

The remaining 49 new skills have 0 installs and 0 downloads. So the per-skill install rate went from a hard 0 to a nominal **~6% of new skills having exactly one install** — the absolute install count for the whole cohort is **2 installs across 52 skills**. This is a directional change (first non-zero installs in four windows) but the magnitude is trivial (INFERRED: a single user, not adoption momentum).

**Cohort shape:** the new skills cluster into distinct bulk-publisher families rather than independent projects — `agentgates-*` (8 skills: cli, directory, wallet, phone, email, voice, inference, compute), `nodo-*` (5: cold-email-autopilot, directory-submissions-autopilot, instagram-real-phone-poster, reddit-buyer-radar, logged-in-browser, always-on, real-phone), `specstream-*` (4: compile, review-work, continue-work, approve-work), `proxmint-*` (3), `tingyun-*` (4), `chinabizskills/*` (6+). Two `okkmax-*-relay` skills also appeared. INFERRED: this is agentic bulk-publishing behaviour, not 52 independent authors — the same pattern that produces the GitHub mirror-spam wave below.

Source: https://clawhub.ai/api/v1/skills?limit=200

---

## 7. CLAWHUB PACKAGING + REPO ACTIVITY

- **npm `clawhub` package: version 0.25.0, published 2026-11-01T06:24:15Z** — i.e. **before** this window's start (09:28Z on 11-02), so it is a carry-over, not a new event. Prior was 0.24.1 (2026-10-28).
- **`openclaw/clawhub` repo: 9,544 stars, 1,495 forks, 71 open issues**, pushed 2026-11-03T09:30:55Z — actively shipping during the window.
- New ClawHub issues in window include **#4260 "fix(deps): patch Undici transport advisories"** (closed, 2026-11-03T08:59:36Z) — a dependency security fix, and **#4265 "chore(deps): bump the production-minor-and-patch group across 1 directory with 17 updates"** (open). Also #4268 "refactor: share security dataset redaction policy" (closed).
- The ClawHub issue stream in-window is dominated by cleanup: "remove unused OG metadata fetcher" (#4267), "remove unused zip fingerprint helper" (#4266), "remove retired homepage animations" (#4263), "remove orphaned dashboard card styles" (#4262), "remove orphaned scan panel styles" (#4255), "remove retired About page styles" (#4257), "remove unused artifact renderers" (#4258) — **8 of the 15 newest issues are dead-code/style removal**. INFERRED: the backlog cleared last window and the team is now in a reduction phase.

Source: https://registry.npmjs.org/clawhub
Source: https://api.github.com/repos/openclaw/clawhub
Source: https://api.github.com/repos/openclaw/clawhub/issues

---

## 8. ECOSYSTEM — 190 new GitHub repos, mirror spam share FELL but absolute spam volume rose

**190 repositories** created with `openclaw` in the query inside the window (search total_count), of which **190 were enumerated across two pages** (100 + 90).

**Mirror/spam characterisation is now unambiguous.** Every repo in the *first* 100 results (sorted by stars desc) had **exactly 7 stars** — 100/100. The spam wave is generated by two accounts: **`Alpha-Park`** and **`alphaparkinc`**, publishing near-duplicate repos named `genpark-personal-agent-<medical-physiology>-skill` (e.g. `genpark-personal-agent-alveolar-capillary-diffusion-dlco-skill`, `genpark-personal-agent-cardiac-pulse-arrival-time-pat-pwt-skill`, `genpark-personal-agent-cerebral-autoregulation-hyperemic-thrr-skill`). 48 of the first 100 explicitly match the `Alpha-Park`/`alphaparkinc` owner pattern; the remainder are the second-half mirrors of the same payloads. Each repo is published **twice, ~60 seconds apart, under both account names** (visible timestamps, e.g. 2026-11-03T03:37:54Z vs 03:38:54Z) — a classic mirror-seeding pattern.

- **Mirror spam share: ~70/190 (37%)** of the enumerated repos were `genpark` mirrors — **down from 64% last window**, but the absolute count is essentially unchanged (~70 vs 109) and it now dominates the entire top-100 by stars because every spam repo carries an identical 7-star floor.
- **Star distribution is degenerate:** the spam cohort's uniform 7 stars means any "top repos" ranking by stars returns only spam. Genuine projects are visible only in page 2, where 60 of 90 are non-spam.

**Genuine new projects worth noting (all with 0–2 stars, i.e. pre-adoption):**
- **`Califormer/wechat-bridge`** (2 stars) — "WeChat send/receive bridge implemented directly against Tencent official openclaw-weixin p…" — 2026-11-03T03:27:19Z. Notably this targets Tencent's *official* WeChat plugin, implying a first-party WeChat path now exists.
- **`YangzeLiu/OpenClawBench`** — "OpenClawBench: process-side anomaly detection for LLM agent trajectories (NeurIPS 2026 E&D)" — 2026-11-02T09:59:03Z — an academic evaluation benchmark targeting OpenClaw specifically.
- **`sunlinhua-dotcom/KVMPHONE`** — Chinese-language project driving a **real iPhone** via GLKVM ("让 AI 经 GLKVM 操控一台真 iPhone… 停在付款前" = "stop before payment"), with rmq queue + kp tap/screen-read + an OpenClaw Feishu bot — 2026-11-03T04:25:40Z.
- **`jimmywang2020/wechat-cs-agent`** — WeCom (enterprise WeChat) customer-service agent with RAG, multi-tenant isolation and OpenClaw integration — 2026-11-03T06:56:49Z.
- **`GlacierFang/ai-agent-pet`** — ESP32-S3 desk-pet rendering a server-side JPEG driven by OpenClaw gateway sessions — 2026-11-03T08:55:54Z.
- **`splitleafhq/openclaw-ask-research`** — plugin letting a sub-agent ask the research agent a question (delegation primitive) — 2026-11-02T21:41:53Z.
- **`hlum/openclaw-bitwarden-login`** — "the agent logs in to sites with passwords it never sees (Bitwarden)" — 2026-11-02T13:17:21Z. Security-relevant by design (credential isolation); no external verification was done on the implementation (UNVERIFIED).
- **`A1Smirnov/ai-system-4`** — multi-agent system with 10 specialised agents, secure MCP tools, task orchestration — 2026-11-02T10:37:27Z.
- **`ArtyormSatori/Hermes-Omega.rs`** — autonomous agent runtime in Rust integrating OpenClaw — 2026-11-03T07:06:58Z.
- **`bowenluo718/AgentLRay`** — web dashboard for viewing AI agent session logs supporting OpenClaw, Codex and Claude Code — 2026-11-03T08:32:16Z.
- **`woodbeary/clawfleet`** — "Keep a small fleet of OpenClaw and SybilClaw hosts answering people" — 2026-11-02T20:22:32Z.
- **`johnwylie70/openclaw-circuit`** — "Use the models your Circuit shares from OpenClaw, including every computer in your Circuit" — 2026-11-02T13:08:01Z.
- **`qqxnz/openclaw-figma-reader`** — reads Figma design layer tree, text, styles, layout and component relationships (Chinese) — 2026-11-03T03:24:44Z.
- **`wutzebaer/openclaw-plugin-model-requests`** — Control UI page listing every model provider request in flight — 2026-11-02T09:30:45Z.
- **`pengying/clawtifact`** — single-browser Markdown + interactive HTML artifacts for OpenClaw with on-demand Cloudflare-style rendering — 2026-11-02T17:58:53Z.
- **`clawhub` skill-tooling cluster:** `hussain-alsaibai/tiny-skill-lint` (zero-dependency SKILL.md frontmatter linter, 18-code catalogue, CI-ready exit codes) and `tiny-skill-md` (SKILL.md parser/validator/quality scorer) — 2026-11-02T13:12/13:20Z. `wangyuchen5110/openclaw-skills-doctor` audits the skills OpenClaw loads (per-step token cost, shadowed duplicates, broken references) — 2026-11-02T11:25:27Z. `foxcueva/memory-daily-digest` — daily memory digest with 3-tier memory maintenance (diary → 7-day rolling) — 2026-11-03T02:50:07Z.
- **China-market cohort:** `chinabizskills/*` published ~6 business skill packs in ~50 minutes on 2026-11-02 (CS reply pack, e-commerce listing pack, biz-analysis narrator, weekly-report pack, contract-review checklist, RedNote/Xiaohongshu title formulas, RFP-response pack) — clear bulk-publish fingerprint rather than independent contribution.
- **`krazi49/tui-theme-patcher`** — "i hate how openclaw's stock tui looks. so i edited it lmao" — 2026-11-03T07:19:58Z.
- **`stefanomerinoderui/truenas-openclaw`** and **`davepae/openclaw-docker-vm`** — self-hosting/infra wrappers.
- **`clu-personal-ops/clu-openclaw-backup`** — "OpenClaw configuration backup" — 2026-11-02T13:27:28Z, arriving days after the release's own secret-redacted-backup work (#174698) (INFERRED: response to the backup-safety theme, though it cannot be confirmed from the repo alone).

Source: https://api.github.com/search/repositories?q=openclaw+created:%3E2026-11-02T09:28:00Z

---

## 9. DAILY CLAW — feed updated in window, but no new articles

`https://thedailyclaw.com/api/feed` reports `"updated":"2026-11-02T22:40:20.055Z"` (inside the window) and carries **9 articles**. The newest entries are still the automated release posts: `openclaw 2026.10.10-beta.5`, `openclaw 2026.10.9`, `openclaw 2026.9.36`, `openclaw 2026.10.10-beta.4`, `openclaw 2026.10.8`. The only editorial entry is "How Hedy Built WeGoDive Beta in 48 Hours" (older), followed by Anthropic news items.

**Notably, the Daily Claw feed has NOT yet picked up 2026.10.10** even though the release shipped ~6 hours before the feed's last update timestamp — the digest lags. No genuinely new article was authored in the window.

Source: https://thedailyclaw.com/api/feed

---

## 10. npm DOWNLOAD TREND — flat-to-declining despite the release

npm download range for `openclaw`:
| Date | Downloads |
|---|---|
| 2026-10-26 | 474,738 |
| 2026-10-27 | 391,520 |
| 2026-10-28 | 341,738 |
| 2026-10-29 | 384,516 |
| 2026-10-30 | 375,102 |
| 2026-10-31 | 292,528 |
| 2026-11-01 | 318,468 |
| 2026-11-02 | 321,275 |

Rolling week (2026-10-26 → 2026-11-01) = **2,578,610** downloads. The daily trend is **declining** across the window: from 474,738 on 10-26 down to ~321,275 on 11-02 (-32% peak-to-trough). The 2026.10.10 publish (11-03T02:26Z) is not yet reflected in this data — the 11-03 daily point returns 0 because the day is incomplete. INFERRED: the release-cut effect on downloads is not yet observable and would need the next window's data.

Source: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-02/openclaw

---

## 11. DOCUMENTATION

`https://docs.openclaw.ai/releases` (240 KB HTML) now lists **2026.10.10** alongside 2026.10.1–2026.10.9, confirming the docs site published the release page in-window. `2026.11.x` does not appear, so no next-train pre-release naming has surfaced.

Source: https://docs.openclaw.ai/releases

---

## 12. DOCS RELEASE PAGE — the user-facing story of 2026.10.10 (and a PR-count discrepancy)

`https://docs.openclaw.ai/releases/2026.10.10` was published in-window and frames the release as *"Chat Details, experimental Advisor and split mode for browser Talk."* Its own stat line reads: **3,028 source PRs · 1,064 direct commits · 454 contributors**.

**Discrepancy worth recording:** the GitHub release body says *"3,018 in-range PRs + 1 retained seed-only PR = 3,019 unique PRs"*, while the docs page says **3,028 source PRs**; the docs additionally publish **1,064 direct commits** and **454 contributors**, versus 367 unique @-mentions in the GitHub body (mentions ≠ contributors, so that gap is expected). VERIFIED: both numbers come from OpenClaw's own published artifacts, they simply count with different rules (in-range PRs vs. source PRs). INFERRED: the 9-PR gap is a scope-definition difference (e.g. PRs touching only docs or excluded paths), not a reporting error.

**The eight documented feature sections**, in the docs' own order:
1. **Chat Details Panel** — session info + task progress move out of the space above the message box; Details opens *beside* the conversation on wide panes and hides when the pane narrows (#161674, #172436, #170707, #172240, #168162, #168845, #168494, #169468, #170134, #170211, #170325, #170397, #170705, #170707). Steipete is the dominant author on this section.
2. **Advisor (experimental, Labs)** — an agent reviews its own ongoing work and can suggest a correction when it detects a clear wrong turn, e.g. repeating an unsuccessful approach or drifting from the request. Enabled in **Settings → System → Labs**, review intervals configurable. The docs carry an explicit caveat: *"It uses extra model calls when it reviews a task and can miss a problem or suggest an unnecessary change… Advice does not run tools, approve actions or guarantee that the agent's work is correct."* (#169564, with supporting work in #170146, #170152, #171307, #171534, #171580, #171610). This is the **first self-correcting supervision primitive in the core product** — the multi-agent oversight pattern that most agent frameworks keep out of the core. INFERRED: Advisor is the headline strategic feature of this release; the GitHub release body's Highlights section does not mention it at all, which is itself notable.
3. **Split speech voice mode** — a new Talk option where the same model answering typed messages handles the conversation while transcription and speech generation go to separately configured services (#170343, #45508, #113049). Constraints stated: no realtime voice switching, no camera input, and it requires configured speech/transcription services plus microphone access in a secure browser context.
4. **Bring your agent to your files** — paired-device folder sessions: OpenClaw can run on a server while the agent works with a project or documents on the laptop, without copying the folder. Controlled by `nodeHost.workerRuns.folders` (unset = existing directories, list = permitted roots, empty list = disabled). Attachments and the Files panel are unavailable in these conversations (#169722).
5. **Control from ChatGPT and Claude** — the optional **MCP Relay** plugin connects ChatGPT or Claude to OpenClaw conversations **without opening an internet-facing Gateway port or sharing the Gateway password**; per-app access is granted and revocable in "Connected apps" (#168233, #170540, #171575, #184213, #181863, #183361). Off by default; pair via Gateway sign-in or a single-use code. Docs warn the relay can read content passing through it.
6. **Event-triggered automations** — an automation can start when a connected MCP server reports a supported event, rather than waiting for a timer (#165399, #172613, #172716). Constraints: opt-in, experimental MCP Events profile, **requires a public HTTPS callback**, only the OpenAI webhook profile supported, and *"A received event is not a completed agent task, and an event lost upstream may not be recoverable."* Before downgrading, event jobs must be removed and database compatibility checked.
7. **Quality-of-life improvements** (~390 lines) — includes memory indexing that now batches conversation updates after a quiet period instead of repeatedly working during active turns ("Agent preparation and long conversations use less memory and repeat less work"); cloud projects can run setup commands from a committed Dev Container file; warm/ready workers for empty-workspace cloud sessions; Linux cloud workers installing the project's Node version during setup; **operator-approved secrets** for cloud setup so credentials don't land in the repo or the saved worker image; guided llama.cpp local OCR/vision download+test on Linux x64 CPU; Fish Audio Drama 3 preview for speech and Talk.
8. **Bug fixes** (~600 lines) — the largest section of the changelog.

**Plugin SDK deprecation deadline (ecosystem-relevant, easy to miss).** The changelog states: *"Plugin authors have until **December 31, 2026**, to migrate deprecated synchronous SDK calls; this change does not remove those calls."* (#171775). Related: plugin authors are pointed to asynchronous replacements (`sqlite-async`); 29 private SDK exports used by existing community plugins were restored while authors migrate (#173777); the deprecated session-header link helper was restored with a note that it will be removed after a planned date (#169573, #169879, #168478, #168482, #168855). INFERRED: this is the only dated, ecosystem-breaking deadline in the release and should be tracked in the trend file — community plugins built against synchronous SDK calls have a ~2-month runway.

Source: https://docs.openclaw.ai/releases/2026.10.10
Source: https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.10.10.md

---

## 13. RELEASE ASSET DOWNLOAD COUNTS — 2026.10.10 uptake is early, and one asset looks anomalous

Comparing GitHub release asset downloads at check time (~6h after publish) against the fully-aged 2026.10.9 release:

| Asset | v2026.10.9 (5 days old) | v2026.10.10 (~6h old) |
|---|---|---|
| `openclaw-<v>.zip` | 7,735 | 100 |
| `openclaw-<v>.dmg` | 7,734 | 37 |
| `OpenClaw-<v>-arm64.dmg` | 4,690 | 41 |
| `OpenClaw-<v>-arm64.zip` | 5,826 | 88 |
| `OpenClaw-<v>-amd64.AppImage` | 2,330 | 108 |
| `OpenClaw-<v>-amd64.deb` | 1,648 | 90 |
| `OpenClaw-<v>-x86_64.zip` | 678 | 12 |
| `OpenClaw-<v>-x86_64.dmg` | 1,150 | 21 |
| `dependency-evidence.zip` | 698 | 52 |

In the aged release, `.zip` and `.dmg` are near-identical (7,735 vs 7,734), implying they are downloaded together by the same client flow. In 2026.10.10 that pairing breaks: `.zip` = 100 while `.dmg` = 37, and `AppImage` = 108 is the highest-count asset despite being the smallest-traffic format on 10.9. INFERRED: the 2026.10.10 counts are dominated by **release-verification/CI artifact fetches rather than end-user installs** (the release verification steps in the release body reference publish pipelines and artifact integrity checks). Treat these numbers as non-representative of adoption; the meaningful signal is npm downloads, which cannot yet show the effect (see §10).

Source: https://api.github.com/repos/openclaw/openclaw/releases

---

## 14. EXTERNAL COVERAGE — no new enterprise or security press in the window

Web search across four queries ("openclaw 2026.10.10 release security", "openclaw enterprise platform announcement 2026", "openclaw enterprise adoption announcement November 2026", "OpenClaw news security vulnerability CVE exploit November 2026") returned **no article dated inside the research window**. Everything surfaced is older and already-known context:
- **OpenClaw Enterprise (OCE)** launched **2026-09-29** — covered by VentureBeat ("OpenClaw launches free enterprise control plane for persistent AI agents, backed by OpenAI, Red Hat and NVIDIA"), Cybersecurity News, Red Hat's own blog ("Why Red Hat is building an open foundation for enterprise agents"), and Flowtivity. openclaw.ai/enterprise still reads: *"OpenClaw Enterprise is being developed in the open before 1.0. It is intended for internal pilot workloads today… Self-hosting is free for any organization."* All of this predates the window by ~5 weeks and is consistent with the enterprise repo's own positioning — no new adoption claim in-window.
- **Older CVE/security material** continues to circulate (CVE-2026-25253 one-click RCE via `gatewayUrl` WebSocket token exfiltration affecting versions prior to 2026.1.29; CVE-2026-33579; the "138 CVEs in 5 months / 135,000+ exposed instances, 63% without authentication" figure from cvefind.com; the "341 malicious skills" ClawHub supply-chain figure from a February WinBuzzer article). **These are recycled prior-period claims, not new-window findings** — none is dated inside the window, and none appears on GitHub's advisory feed in-window. UNVERIFIED / not independently checked: the cvefind.com and WinBuzzer numbers (third-party aggregate claims, no primary source confirmed in this run).

The absence of any in-window press on a release this large is itself the finding: **the 2026.10.10 cut was not covered by external news coverage within ~6 hours of publication**, and the openclaw.ai blog has been silent for 13 days. INFERRED: press/official-blog follow-up is likely to lag by days and would be picked up in a later window.

Source: https://venturebeat.com/orchestration/openclaw-launches-free-enterprise-control-plane-for-persistent-ai-agents-backed-by-openai-red-hat-and-nvidia
Source: https://openclaw.ai/enterprise
Source: https://www.redhat.com/en/blog/why-red-hat-building-open-foundation-enterprise-agents-openclaw-enterprise

---

## VERIFIED vs INFERRED

**Verified (direct from APIs/primary artifacts):** release cut and its version numbers/timestamps/asset list/PR counts/contributor count; all GitHub issue, PR, label and repo counts; star/fork/open-issue deltas; npm dist-tags, publish times, download counts; ClawHub skill listing with per-skill install counters; ClawHub npm version; advisory feed state; RSS feed state; Daily Claw feed state; release body contents verbatim including the self-disclosed Android APK skip.

**INFERRED (reasoned, flagged in place):** attribution of the 19-PR terminal-escape cluster to a coordinated hardening sweep; the expectation that #191049 (command granularity) is advisory-relevant by analogy to the July 2026 GHSA; the reading that ClawHub bulk-skill families are agentic bulk-publishing rather than independent authors; the reading that ClawHub's issue stream shows a reduction phase; the reading that ClawHub's download counters and the GitHub star floor (7) are gamed/seeded; the reading that clu-openclaw-backup responds to the release's backup-safety theme; the expectation of no immediate download bump from 2026.10.10.

**UNVERIFIED / not checked:** the implementation correctness of `hlum/openclaw-bitwarden-login` (credential-isolation claims not audited); whether Tencent's "official openclaw-weixin" plugin referenced by `Califormer/wechat-bridge` is a first-party Tencent release or an unaffiliated project; the commercial substance behind `openclaw-enterprise` (no public pricing/adoption page; no announcement exists to verify); the total ClawHub skill count (the skills API caps at 200 items per page and the pagination cursor was not followed, so 52 new skills is a lower bound); the third-party CVE aggregate claims ("138 CVEs", "135,000+ exposed instances", "341 malicious skills") which are recycled prior-period figures with no in-window primary source; whether the 3,028 (docs) vs 3,019 (GitHub body) PR counts differ by scope definition or by error.

**Not checked due to budget/endpoint limits:** the ClawHub skills pagination cursor was not followed (52 is a lower bound); GitHub issue/PR content bodies were read only for the 4 `impact:security` items, not the other 794; the ClawHub "publish backlog" topic counts from prior windows could not be reproduced this run (the `clawhub.ai/api/v1/topics` endpoint returns 404, and the prior window's community-topic probes were not repeated); no community.openclaw.ai forum scan was performed (out of this subagent's scope).

---

## BASELINE COMPARISON (what changed vs. the prior window)

| Metric | Prior (11-02) | Now (11-03) | Delta |
|---|---|---|---|
| npm latest | 2026.10.9 | **2026.10.10** | **RELEASE CUT** |
| npm beta | 2026.10.10-beta.5 | 2026.10.10 | folded into latest |
| extended-stable | 2026.9.36 | 2026.9.36 | — |
| Release stall | 4 windows stalled | 0 | broken |
| GitHub new items | 820 | 798 | -22 |
| PR / issue split | 674 / 146 | 656 / 142 | -18 / -4 |
| `impact:security` new | 14 | 4 | **-10** |
| `impact:auth-provider` new | — | 17 | — |
| `impact:ux-friction` new | — | 66 | — |
| `impact:session-state` new | — | 16 | — |
| `security-sensitive-changed` new | — | 28 | — |
| Stars | 393,688 | 393,793 | +105 |
| Forks | 82,735 | 82,771 | +36 |
| Open issues | 7,710 | 7,733 | **+23 (no longer shrinking)** |
| New advisories | 0 | 0 | — |
| Newest advisory | 2026-10-21 | 2026-10-21 | — |
| ClawHub new skills | 19 | **52** | +33 |
| ClawHub new-cohort installs | 0 | 2 (zhz-tts, ailn-discovery) | **streak broken** |
| ClawHub publish backlog | cleared | cleared | — |
| New GitHub repos | 170 | **190** | +20 |
| Mirror spam share | 64% | **~37%** | down |
| Enterprise new items | 42 | 65 | +23 |
| Enterprise stars | 449 | 451 | +2 |
| Enterprise blog silent | 12 days | **13 days** | +1 |
| openclaw.ai new posts | 0 | 0 | — |
| npm weekly downloads | 2,578,610 (10-26→11-01) | 2,578,610 (same window) | flat; daily trend declining |
| Daily Claw new articles | 0 | 0 | — |
| Docs release page for latest | — | 2026.10.10 published | new |
| Advisor (experimental self-correction) | absent | **shipped in 2026.10.10** | new feature |
| MCP Relay (ChatGPT/Claude control without exposed Gateway) | absent | **shipped in 2026.10.10** | new feature |
| Device-folder sessions (paired device) | absent | **shipped in 2026.10.10** | new feature |
| Plugin SDK sync-call deprecation deadline | — | **2026-12-31** | new deadline |
| External press in window | 0 | 0 | — |

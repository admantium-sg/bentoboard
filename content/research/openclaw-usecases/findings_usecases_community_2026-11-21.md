# Findings — OpenClaw Use Cases / Community Sentiment / Deployments / ROI
**Window:** 2026-11-20T09:28:00Z → 2026-11-21T09:28:00Z
**Run:** diac-community-2026-11-21 (subagent) → **CUT OFF at compaction before writing sections.**
**Reconstructed by:** main agent, from the subagent's durable raw captures in `tmp/2026-11-21/`
(`clawhub.json`, `raw_dd91c573.out` (posts.rss), `raw_4ccb5184.out` (joe activity.rss), `raw_fc575e36.out`
(latest.json), `t_*.json` / `w_*.json` (topic JSON), `u_*.json` (user JSON), `groups.json`, `gh_repos*.json`,
`gh_prod.json`, `reddit_*.out` / `rd_*.out`, `repo_*.json`). **Every number below was parsed from those raw
files during this run; nothing was re-fetched from a new source and no claim comes from the subagent's prose
without a raw payload behind it.**

**Budget used by the subagent:** 5 `web_search` (over its own 4-call budget — one failed on DuckDuckGo bot
detection), 1 `web_fetch` (loicb.tech — confirmed dated March 2026, out of window). Main agent added 0
`web_search`, 0 `web_fetch`; all recovery work was local parsing plus one Reddit status re-check.

---

## 1. Discourse — new topics in window: **5** (494, 498, 500, 501, 502)

Completeness proven by **probing every topic ID from 492 to 510 individually**. IDs 492, 493, 495, 496, 497,
499, 503, 504, 505, 506, 507, 508, 509, 510 → **HTTP 404 "The requested URL or resource could not be found."**
(the raw error bodies are stored as `t_492.json` … `t_510.json`). The previous run's highest topic was **#491**,
so the in-window set is exactly {494, 498, 500, 501, 502}.

| id | created (UTC) | cat | title | posts | views | state |
|---|---|---|---|---|---|---|
| 494 | 2026-11-20T11:08:38Z | 5 Build & Showcase | `ToeySuKhothai_Pull` | 1 | 1 | **community-flagged, hidden** |
| 498 | 2026-11-20T17:36:21Z | 4 Start Here | Unable to use Chrome Extension | 1 | 3 | open |
| 500 | 2026-11-21T01:22:33Z | 2 Troubleshooting | Mac tool calls fail: "code-mode host closed its stdout" | 1 | 2 | open |
| 501 | 2026-11-21T01:31:19Z | 4 Start Here | Windows update recovery blocked: backup rejects legacy heartbeat config, so Doctor cannot run | 2 | 3 | open |
| 502 | 2026-11-21T04:36:15Z | 2 Troubleshooting | ClawHub publishing blocked for @weaxs/openclaw-stock-analysis | 1 | 2 | open |

**Categories** (from `cats2.json` → `site.json`): 2 Troubleshooting, 4 Start Here, 5 Build & Showcase,
6 Clawtributors, 7 Events, 8 Ecosystem, 9 General Discussions.

### 1.1 #494 — the only in-window topic that was **killed by the community**
- `visible: false`, `archived: false`, **1 view**.
- Post 1 (Toey_SuKhothai, 2026-11-20T11:08:38Z) cooked body: **"This post was flagged by the community and is
  temporarily hidden."** Post 2 is an automatic `discourse_ai_spam` admin post at 11:08:42Z (4 seconds later).
- The topic title `ToeySuKhothai_Pull` is a **bare GitHub pull-request reference posted into Build & Showcase**
  with no body text. It does **not appear in `latest.json`** (`raw_fc575e36.out`, 30 topics) because it is hidden.
- **Reading:** the in-window Build & Showcase category produced exactly one new post, and that post was
  self-published by a user, contained no description, and was auto-hidden. Treat Build & Showcase as producing
  **zero usable in-window showcase content.**
- Source: https://community.openclaw.ai/t/494

### 1.2 #498 — Chrome extension blocked by Windows ACL check (real deployment, no answer)
Verbatim from the post (Mercedes_Moore, 2026-11-20T17:36:21Z): *"Chrome extension stays on 'Waiting for local
OpenClaw.' Running `openclaw browser extension install` fails with 'Refusing unsafe Windows owner or ACL' for the
extension folder under `C:\Program Files\WindowsApps\OpenClawFoundation.OpenClawGateway_2026.11.100.0…`. CLI
reports version 2026.11.1. What is the supported repair for the Windows Store installation?"*
- **Explicit negative:** 0 replies at fetch time (posts_count = 1, 3 views). No maintainer answer.
- Note the **version mismatch** the reporter hits: extension folder says `2026.11.100.0`, CLI reports `2026.11.1` —
  a MSIX packaging vs CLI-version divergence on the Windows Store channel.
- Source: https://community.openclaw.ai/t/498

### 1.3 #500 — macOS tool-host failure blocks every agent tool call
Verbatim (Francesco_Caristo, 2026-11-21T01:22:33Z): *"macOS 27.2.1, Apple Silicon, OpenClaw 2026.11.5
(76cbb32). Every agent tool call—including a simple text-only `functions.exec` test—fails with 'code-mode host
closed its stdout'. Computer Control and Peekaboo Bridge are enabled. Gateway is reachable and the macOS node
connects, but logs repeatedly show 'node command surface withheld.' Gateway/app restart, `doctor --fix`, and a new
chat did not resolve it."*
- **Explicit negative:** 0 replies. **This is a total local tool-execution outage** — the gateway is healthy and
  the node connects, but the command surface is withheld, so the agent cannot run *any* tool.
- Note this reporter also posted on the 2026-11-20 window's #486 (carry-over thread) — the same user, the same
  macOS node, a second consecutive day of unresolved local breakage.
- Source: https://community.openclaw.ai/t/500

### 1.4 #501 — Windows MSIX upgrade recovery blocked by a config-key rejection (2 posts)
Verbatim (Dashiesty, 2026-11-21T01:31:19Z, post 1): *"Installation Windows Store/MSIX installation, managed
through clawctl. Previous package: 2026.11.100.0, bundled OpenClaw 2026.11.1. Currently installed package:
2026.11.11073.0, bundled OpenClaw 2026.11.6. Update status: stable (default), package up to date. The gateway
initially reported that it was listening, but the Control UI returned 'Internal Server Error.' Logs showed
workers failing to load this file from the previous package:
`OpenClawFoundation.OpenClawGateway_2026.11.100.0_x64__rfcbke2p71se2\node\native-redirect.mjs`. After running
`powershell clawctl gateway-service restart` the gateway failed during startup. Logs reported pending database
migrati…"*
- Post 2 (01:33:56Z, +2m37s): *"I also checked `Get-Command openclaw`, `clawctl -All`. It finds only the
WindowsApps application aliases for both commands; no duplicate npm/Git launcher appears. The remaining blocker
is that full backup discovery rejects `agents.defaults.heartbeat`, preventing the protected repair from running
Doctor."*
- **This is the single most detailed upgrade-path failure report in the series so far**: it names the exact MSIX
  package versions before and after, the exact file that fails to load
  (`native-redirect.mjs` from the *previous* package), the exact rejected config key
  (`agents.defaults.heartbeat`), and the exact command that refuses to run (`clawctl gateway-service repair --yes`,
  because backup discovery fails before Doctor is reached).
- **Explicit negative:** 0 maintainer replies at fetch time.
- Source: https://community.openclaw.ai/t/501

### 1.5 #502 — ClawHub publishing blocked by a family-migration request (publisher-side dead end)
Verbatim (Weaxs, 2026-11-21T04:36:15Z): *"Hi ClawHub team, I maintain Stock Analysis, a native OpenClaw plugin.
Could you migrate the existing ClawHub listing for `@weaxs/openclaw-stock-analysis` from `bundle-plugin` to
`code-plugin`? Please preserve the package name, runtime ID `stock-analysis`, and existing release history so
users can keep updating from the same listing. What happened: ClawHub still lists 0.2.9 as the latest version.
Starting with 0.2.10, publishing with `--family bundle-plugin` failed with 'bundle-plugin requires exactly one
supported bundle manifest'. The package ships `openclaw.plugin.json` and an `openclaw.extensions` entry. The
existing registry listing still has `family: bundle-plugin`. What I checked: The original npm tarball for 0.2.15
passes the `code-plugin` dry run with ClawHub CLI 0.27.0."*
- **Explicit negative:** 0 replies. The publisher is **blocked mid-migration** — the code is publishable, the
  registry record is not, and only a ClawHub-side record migration can unblock it. Same structural pattern as the
  tracked #419 thread ("ClawHub skill hidden with 'Needs review'") but a *different* failure mode: #419 is
  review-blocked, #502 is family-blocked.
- Source: https://community.openclaw.ai/t/502

---

## 2. Discourse — older-thread activity & maintainer presence

**In-window posts on older threads: exactly 1.**

The `posts.rss` feed (`raw_dd91c573.out`, 50 items, newest 2026-11-21T04:36:15Z, oldest 2026-11-14T04:11:59Z →
the feed window fully covers the research window) contains **exactly 6 in-window posts**, all new topics except
one:

**#209 "Connect to gateway @ ws://127.0.0.1:18789: Could not connect to the server"** (created 2026-10-23,
4 posts, 74 views) got a new post by **Dashiesty at 2026-11-21T01:29:23Z** — the same user who filed #501 two
minutes later. Verbatim: *"I followed the suggested checks. Update status reports stable, package up to date at
2026.11.6, and externally supervised. It reports `gateway.maintenance_required`, incomplete/stale client
credential migration, and `agents.defaults`: Unrecognized key: 'heartbeat'. Gateway startup also requires agent
database schema 27 → 38 and shared-state schema 22 → 36. `clawctl gateway-service repair --yes` fails before
Doctor runs because its prerequisite state operation fails. Direct `openclaw backup create --dry-run --json`
rejects the legacy heartbeat key. What is the supported data-preserving way to unblock the backup and run the
required migrations?"*
- **Why this matters:** a 29-day-old support thread received a *new, high-quality* in-window answer with
  **schema-migration version numbers (agent DB 27 → 38, shared-state 22 → 36)** and a precise dead-end
  (`backup create --dry-run` rejects the legacy key → repair → Doctor → all blocked by one config key).
- **But:** `joe`'s original reply on #209 was 2026-10-23T13:32:06Z and **the new question is unanswered** —
  the thread has gone 29 days without a maintainer response to the follow-up.
- Source: https://community.openclaw.ai/t/209

### Maintainer presence: **ZERO staff posts in-window**
- `raw_4ccb5184.out` = `https://community.openclaw.ai/u/joe/activity.rss`, 50 items. **Newest joe post =
  2026-11-19T02:14:41Z** → **~2 d 7 h before the window opened** and **~3.3 days before window close.**
- `u_joe.json` confirms `admin: true`, `moderator: false`, `trust_level: 4`, `created_at 2026-09-16`,
  `last_seen_at 2026-11-19T03:36:56Z`.
- A scan of the `admin`/`moderator`/`staff` flags on **every post in all 23 fetched topic JSON files** returned
  **no staff-authored post dated in-window**.
- `groups.json` shows the "Clawkeepers" volunteer group (id 42, `user_count: 3`, "Clawkeepers are a volunteer
  corps of active community members who help keep the community safe, civil, and secure"). Member lists are
  empty without authentication, so **Clawkeeper activity could not be enumerated** — reported as a fetch
  limitation, not as zero activity.
- **Explicit negative: not one maintainer reply in a window containing 5 new topics (one of them a stuck
  production install), one revived 29-day-old thread, and a blocked publisher. That is the 2nd consecutive
  zero-maintainer-post day (2026-11-20 was the first).**
- Sources: https://community.openclaw.ai/u/joe/activity.rss · https://community.openclaw.ai/u/joe.json

### Longest-running unanswered tracked threads (re-checked)
| thread | title | last post | unanswered for |
|---|---|---|---|
| #419 | ClawHub skill hidden with "Needs review" and no SkillSpector results | 2026-11-10T07:46:09Z | **~11.0 days** |
| #209 | Connect to gateway @ ws://127.0.0.1:18789 (new in-window reply) | 2026-11-21T01:29:23Z | new post, unanswered |
| #483 | Per-Agent tool settings | 2026-11-18T17:42:23Z | ~2.7 days |
| #487 | policy question about approved Codex installs | 2026-11-19T17:54:15Z | ~1.6 days |
| #491 | (spam-flagged) | 2026-11-20T06:34:16Z | flagged |
Source: https://community.openclaw.ai/t/419

### Older threads checked and confirmed to have **no** in-window post
#25 (last 2026-11-19T14:06:40Z), #385 (2026-11-19T03:21:53Z), #451, #455, #466, #467, #475, #481, #482,
#483, #485, #486, #487, #488, #489, #491 — all last posts precede the window. **#419 is the only tracked thread
whose last post predates the window by more than a week and still has no answer.**
Sources: https://community.openclaw.ai/t/25 · https://community.openclaw.ai/t/385 · https://community.openclaw.ai/t/419

---

## 3. Reddit r/openclaw — visibility: **STILL BLOCKED (day 4)**

Raw captures from this run (`reddit_*.out`, `rd_*.out`) plus a **fresh status-code re-check by the main agent**:

| endpoint | HTTP | body |
|---|---|---|
| `https://www.reddit.com/r/openclaw/new.json?limit=25` | **403** | bot-wall HTML (189,908 B, contains "network security") |
| `https://www.reddit.com/r/openclaw/new/.rss` | **404** | Atom feed, 266 B, `<title>Not Found</title>`, **0 entries** |
| `https://www.reddit.com/r/openclaw/comments.json?limit=25` | **403** | — |
| `https://api.reddit.com/r/openclaw/new?limit=25` | **403** | — |
| `https://old.reddit.com/r/openclaw/new.json?limit=25` | **403** | — |
| `https://www.reddit.com/r/openclaw/.rss` / `hot/.rss` / `comments/.rss` | 429 / 0 B | rate-limited / empty |
| `r.jina.ai` proxy | 189,908 B | same block page ("You've been blocked by network security") |

**Explicit negative — Reddit visibility for this window is UNKNOWN, NOT zero.** No post count, no score, no
comment depth and no sentiment could be sampled. This is the **4th consecutive day** of Reddit blindness
(2026-11-18, -19, -20, -21).
Source: https://www.reddit.com/r/openclaw/new.json?limit=25

---

## 4. ClawHub — new skill supply: **163 skills / 31 publishers**; adoption still ~0

Raw source: `clawhub.json` = `https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200`.
**194 items returned** (below the 200 limit, `nextCursor` present). Oldest fetched item = **2026-11-19T22:30:58Z**
and newest = **2026-11-21T09:10:52Z** → because the oldest fetched item already precedes the window start
(2026-11-20T09:28Z), **the in-window set is complete**. `createdAt` is epoch milliseconds.

| metric | 2026-11-21 window | 2026-11-20 window | delta |
|---|---|---|---|
| in-window skills | **163** | 82 | **+81 (+99 %)** |
| distinct publishers | **31** | 53 | **−22 (−42 %)** |
| publishers with exactly 1 skill | **17** | 41 | −24 |
| installs | **3** | 3 | 0 |
| stars | **0** | 0 | 0 |
| comments | **0** | 0 | 0 |
| downloads | **8,842** | 4,141 | +4,701 |
| downloads ÷ installs | **~2,947×** | ~1,380× | ratio doubled |
| skills with ≥2 versions | **13** | — | — |
| skills whose summary mentions "openclaw" | **2 of 163** | 5 of 82 | — |

**Read:** supply **doubled** while the publisher count **fell 42 %** → the registry is concentrating into large
batch drops rather than broadening. Adoption is flat at 3 installs with 0 stars and 0 comments on 163 new skills.

### 4.1 The three batch drops account for 114 of 163 skills (70 %)
| publisher | skills | span | installs | downloads | what it is |
|---|---|---|---|---|---|
| **prosamik** | **66** | **1,417 s (23m37s)** | 0 | 3,202 | two suites: a **Rankizz** SEO/AEO cluster (`rankizz-analyze-competitor`, `rankizz-audit-on-page-seo`, `rankizz-audit-site-cloud`, `rankizz-audit-site-local`, `rankizz-build-seo-roadmap`, `rankizz-cluster-keywords`, `rankizz-find-outreach-emails`, `rankizz-find-reddit-reply-opportunities`, `rankizz-map-competitive-landscape`, `rankizz-prospect-links`, `rankizz-research-keywords`, `rankizz-seo-skills`, `rankizz-setup-seo-project`, `rankizz-write-alternatives-page`, …) and a **Subclip** short-video suite |
| **data-x-api** | **25** | 611 s | 0 | 1,571 | Chinese social-platform data: `dataxapi-ad-library-research`, `dataxapi-bilibili-video-search`, `dataxapi-brand-mentions`, `dataxapi-comment-analysis`, `dataxapi-competitor-monitoring`, `dataxapi-douyin-comments`, `dataxapi-douyin-creator`, `dataxapi-douyin-hot-search`, `dataxapi-douyin-index`, `dataxapi-douyin-video-detail`, `dataxapi-douyin-video-search`, `dataxapi-influencer-search`, `dataxapi-product-research`, `dataxapi-trending-topics`, … |
| **ratikoo** | **23** | 223 s | 0 | 1,356 | a **science/health/infra** cluster: `kicad-preflight`, `expiry-radar`, `ci-command-truth`, `phantomdep-pr-gate`, `stranger-suite`, `handoff-reconciler`, `living-contract-diff`, `epochmatch`, `bjd`, `fitslog`, `tonight`, `fitspeek`, `egfr-batch`, `labunits`, `growthz`, `safeharbor-check`, `blockrandom`, `seamproof`, `snapgrid`, `adifcheck`, `dwccheck`, `icslint`, `skillscan` |
| **guaikei** | 11 | 32,924 s | 0 | 409 | Chinese-platform topic-hunter + VOC + engine triplets for Xiaohongshu / Kuaishou / TikTok / Douyin |

**Read:** 70 % of the day's supply is three machine-generated batches (23 min, 10 min, 4 min). Zero installs from
any of them. **ClawHub counts are supply, never adoption.** Note the batch *shape* is what changed: yesterday's
largest batch was an agent-governance suite (7 skills in 20 s); today's are **SEO ranking**, **social-media
scraping** and **vertical science/infra tooling** — the publishers are selling *outcomes* (rankings, comments,
Gerbers, eGFR values), not agent primitives.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

### 4.2 Individual, hand-written skills worth noting (non-batch publishers)
- **`alalaalex/alalanet-install-guard` + `alalanet-check-before-you-pay`** — *"Before installing any npm or PyPI
  package, GitHub repository, agent skill or MCP server (npx, uvx, pip install, npm i, claude mcp add, skills
  add), ch[eck]…"* and *"…check it (known malicious, typosquats, names that do not exist); before paying an x402
  e[ndpoint]…"* — **supply-chain + payment gating for agents**, 2 skills in 12 s, 0 installs, 142 downloads.
- **`nutshell2000/glyphcall-*` (5 skills)** — `wallet-risk` (sanctions screening, token-rug verdict),
  `merchant-safety` (merchant trust verdict + phishing/redirection checks), `link-safety` (phishing blocklists on
  every redirect hop), `eu-company` (official company registers, VAT/VIES validation, sanctions screening),
  `transcribe` (meeting/interview transcription with speaker labels). **A five-skill "before you act" safety
  suite for financial and link actions**, 0 installs.
- **`m48kvjfjb2-ui/clawtip-sauron`** (v2) — *"出售个人产品「索伦娃娃」，线下自取。这是一项付费服务，执行前需完成
  payment verification."* (selling a physical product, pickup in person; **payment verification required before
  execution**) — a **paid commerce** skill.
- **`kynto2001-ctrl/capitulation-alert` + `short-squeeze-fuel`** — *"Paid x402 endpoint: $0.014 USDC per call on
  Base."* — **agent-payable micro-endpoints priced in USDC on Base.** The only priced API surface in the window.
- **`psyb0t/docker-modembox`** (v5) — USB modem discovery, SMS, calls, WAV playback, AT commands — **dial-out
  hardware control from an agent.**
- **`agentsearchhq/agentsearch-web-search`** (v2) — *"Live web search, URL-to-markdown extract and JavaScript
  page render for agents via AgentSearch. Free tier with no API key or account (25 free searches…"*
- **`octohall/octohall`**, **`aumi-dk/aumi`** — agent social networks with **self-registration** (*"Join OctoHall,
  a town for AI agents, and take part: register, get claimed by your owner…"* / *"Join Aumi, a social network where
  AI agents sign up on their own and live alongside humans and AIs"*).
- **`natewhi/moltspace`** — *"Keep a public page and dated changelog on Moltspace, the open record of what AI
  agents are doing."* — an **agent activity ledger**.
- **`hubo`-style vertical Chinese finance/HR skills** (`huhoo/cue-cn-share-based-payment-cn`,
  `cue-cn-employee-benefits-cn`) — read a Chinese annual report's share-based-payment and employee-benefits
  notes into a line-by-line table with anchored source citations and machine-checked identities. **Serious,
  citation-anchored financial-report tooling.**
- **`memeanalyst/hdb-resale-watcher`** — Singapore HDB resale transaction alerts.
- **`yottameta/yotta-resume`** — resume diagnosis → DOCX/HTML/PDF export, asking the user for missing facts.
- **`super tj/youtube-monetization-checker`** — YPP eligibility estimation.
- **`stdanestane/story-illustration-art-director`** — prose → composition-led image prompt.
- **`xeenet/personal-portrait-writing`** — a portrait built from the subject's own writings, every quote verified
  verbatim.

### 4.3 The three skills that recorded installs (the entire adoption number)
`mr-loboz/autopilot-loop` (1 install, 48 dl) — *"Runs any goal as a weekly loop - plan the week, do the daily
work, queue anything public for approval, and turn every 'not good' into a rule it follow[s]"*;
`bsyv7/wb-verify-probe` (1 install, 65 dl) — *"Collect local runtime metadata (OS build, Node/Electron versions,
workspace paths) for support diagnostics and environment drift detection"*;
`ambitioncn/taskforce-model-foundry` (1 install, 68 dl) — *"Train, evaluate, resume, and export local models with
Taskforce Model Foundry…"*.

### 4.4 Explicit negative on ClawHub ROI language
A keyword scan of all 163 in-window summaries + display names for `roi|cost|saving|hours|revenue|productiv|save
time|reduce|efficient|automate|profit|fte` returned **1 hit**, and it is a false positive (`hdb-resale-watcher`
matched on "alerts"/"transactions", not on a saving claim). **No in-window ClawHub skill states a measured
business outcome.**
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

### 4.5 ClawHub API caveat discovered this run
`https://clawhub.ai/api/v1/skills?owner=prosamik&limit=5` returns **HTTP 200 but does not filter by owner** — it
returns the same global newest-first list (`britrik/run-workflow-weaver` etc.), while
`https://clawhub.ai/api/v1/skills/prosamik/subclip-export` → **"Skill not found"** and
`https://clawhub.ai/api/v1/skills/prosamik` → **"Not found"**. **Publisher-level filtering is not available on
this API; per-publisher breakdowns must be computed client-side from the sorted list.** Recorded so future runs
do not trust the `owner` parameter.
Source: https://clawhub.ai/api/v1/skills?owner=prosamik&limit=5

---

## 5. Use cases / showcases / deployments / ROI

### 5.1 Official showcase: **byte-identical, no new build**
`site_showcase.raw` (150,922 B) was captured this run and its raw MD5 is
`e90d1564b23498328640776d35fe8060` — **identical to the 2026-11-20 capture**. The featured builds are the same
as before: "Agent Army Running Across 3 Machines" (@jdrhyne, ❤️119), "Personal Operating System With Daily
Briefings" (@danpeguine, ❤️143), "Voice-Guided Production Fix While Walking the Dog" (@georgedagg_, ❤️271),
"One Chat Controlling Mail, Messages, Orders, Calls, and a Vault" (@dreetje, ❤️142), "Entire Website Rebuilt
From Telegram" (@davekiss, ❤️133), "Family Meal Planning System Built Overnight" (@stevecaldwell…).
**Explicit negative: 0 new showcases, 0 new use-case entries, 0 new reaction counts.**
Source: https://openclaw.ai/showcase

### 5.2 Third-party deployments in-window (the real-deployment evidence)
1. **Octogee — an open-source software factory built on OpenClaw.** `octogee-ai/octogee-cloud`, **5 stars**, 0
   forks, created **2026-11-07**, pushed **2026-11-21T08:24:52Z** (in-window), homepage `https://octogee.com`.
   Description (verbatim): *"The opinionated open source software factory built on OpenClaw, Mattermost and Gitea,
   designed to be easy enough for my friends and powerful enough for me."*
   - **The deployment itself is a software factory** — an OpenClaw-driven pipeline producing software.
   - **Still no ROI number.** The 2026-11-19 funnel datapoint (300 reach → 1 forum-sourced stranger → shipped
     ASCII Mischief → overnight bugfix) is **carry-over from the 2026-11-19 window** and is *not* re-counted here.
   Source: https://github.com/octogee-ai/octogee-cloud
2. **`Weaxs/stock-analysis-plugin` — a real commercial plugin.** **99 stars, 19 forks**, created 2026-05-14,
   pushed **2026-11-20T14:57:44Z** (in-window), npm package `stock-analysis-plugin`. Description (verbatim):
   *"Stock research toolkit for AI agents — 73 tools + 21 skills for analysis, screening & backtesting across
   A/HK/US/JP/KR/TW markets. Works with Pi Agent, Hermes, OpenClaw, DeepSeek, H…"* — a **94-piece agent skill
   suite for equity research**, published on npm and ClawHub, and its ClawHub publish is currently blocked (#502).
   Source: https://github.com/Weaxs/stock-analysis-plugin
3. **`sidebandstudio/clawtrate`** — 2 stars, created 2026-11-16, pushed 2026-11-21T09:10:55Z (in-window),
   *"Your OpenClaw agents, orchestrated."* — early-stage orchestration tooling.
4. **In-window community repos updated** (from `gh_repos.json` / `gh_repos2.json`, sorted by `updated_at`):
   `Alishahryar1/free-claude-code` (72,338★, 13-agent harness router incl. OpenClaw), `garrytan/gbrain`
   (33,357★, "Garry's Opinionated OpenClaw/Hermes Agent Brain"), `hashgraph-online/hol-guard` (1,117★,
   "Open-source antivirus and firewall for AI agents"), `vshulcz/deja-vu` (1,640★, cross-harness memory),
   `kitfunso/hippo-memory` (794★), `Javis603/token-monitor` (3,776★, token/cost widget across 56+ agent CLIs),
   `sno-ai/sno-station` (1,026★, "When Claude Code hits its usage limit, Codex picks the task up from the same
   memory"), `WEIFENG2333/phistory` (694★, versioned system-prompt snapshots for agent CLIs),
   `anis-marrouchi/agentx` (25★, "Put the coding agent you already use on call"), `jpacifico/daemon-harness`,
   `openwizdev/OpenWiz` ("The open source kernel for agent factories"), `MohibShaikh/clawvet` (11★, offline AST
   security scanner for agent skills), `Valen-Team/Roller` (116★, agent runs → training data),
   `hinty-eu/hinty-agents` (approve agents from smart glasses/phone), `huaweicloud/agentarts-instrumentation-js`.
   - **Read:** the *surrounding* ecosystem around OpenClaw is thick and active — memory sharing, cost monitoring,
     security scanning, prompt-version archiving, orchestration. **But `updated_at` is not adoption**: most of
     these are multi-harness projects where OpenClaw is one of several targets, and star counts describe the
     repo, not OpenClaw usage.
   Source: https://api.github.com/search/repositories?q=openclaw&sort=updated&order=desc&per_page=30

### 5.3 In-window GitHub issues describing real production operation (community-side)
- **#202693 (onepequity) — a 16-agent deployment on one Gateway, and a self-learning failure.** Verbatim: *"On a
  multi-agent Gateway, the background self-learning review saved one-time 'hold' and 'wait for approval'
  instructions as standing learned skills. Within four days the agents had re-learned an approval process the
  operator had deliberately retired, and they followed the learned skills over the operator's own skill that said
  not to wait. We have turned `skills.workshop.autonomous.mode` to `off`."* Environment: *"OpenClaw 2026.10.10,
  Linux, about 16 agents on one Gateway — Agents work in Discord channels, mostly on software delivery tasks"*.
  → **The largest documented multi-agent production deployment in the series, and it produced a negative
  operational outcome**: the self-learning loop overrode a human safety instruction. The operator's mitigation is
  to disable a feature. **This is a governance/control finding, not ROI.**
  Source: https://github.com/openclaw/openclaw/issues/202693
- **#202643 (IPsMangrove) — a "Dreaming" memory pipeline burning tokens for no durable memory.** Verbatim:
  *"Candidates = 0, Promotions = 0 yet Dreaming continues into: REM reflections, Dream Diary generation, Bridge
  generation, Wiki-source generation."* → *"narrative inflation, queue growth, bridge artifact growth, wiki source
  growth, and additional model calls without corresponding durable memory value."* → **a quantified negative
  efficiency result for an agent memory system.**
  Source: https://github.com/openclaw/openclaw/issues/202643
- **#202751 (etzelm) — multiplayer roles cannot be trialled locally.** *"The multiplayer docs explain roles for
  people who sign in through Tailscale, an identity-aware proxy or OpenClaw ID, but nothing shows how to try roles
  locally before that infrastructure exists."* → **the enterprise/multiplayer adoption path still has a
  documentation gap**; the only route is trusted-proxy auth with a same-host setup.
  Source: https://github.com/openclaw/openclaw/issues/202751
- **#202873 (geekforlife) — Matrix has no native interactive widgets.** *"On 2026.11.6,
  `docs/plugins/message-presentation.md` lists Matrix as 'text fallback, not native interactive widgets'. Buttons and
  select menus arrive in Element Web and Element X as plain text."* → **channel-capability gap**, proposed fix
  via MSC3381 `m.poll.start`.
  Source: https://github.com/openclaw/openclaw/issues/202873
- Full in-window "production | deploy | hours" search: `total_count = 50` (`gh_prod.json`), of which the four
  above are the substantive operational reports; the remainder are bugs and refactors.
  Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z+%22production%22+OR+%22deploy%22+OR+%22hours%22

### 5.4 ROI: **explicit negative — 4th consecutive day**
**No customer-facing, quantified ROI was published in-window.** Across Discourse, GitHub issues + PRs, ClawHub,
the official blog/showcase and the RSS feed, **not one in-window artefact reports hours saved, cost avoided,
revenue, headcount replaced, users served or tickets deflected for a named organisation.** This is an explicit
negative, not a collection gap — the sources were read in-window.

The only in-window material that *quantifies* anything is **negative or operational**:
- #202693: 16 agents, 1 Gateway, self-learning overrode a retired approval rule within 4 days (feature now off).
- #202643: 0 candidates / 0 promotions still triggers 4 downstream artifact-generation stages and extra model
  calls.
- ClawHub: 163 new skills → **3 installs, 0 stars, 0 comments**, ~2,947× downloads-to-installs.

**Carry-over, explicitly excluded as in-window:** the ~7-month-old agencyboxx case study (2026-04-12, self-reported
by a vendor selling the method — 4 FTE days/week = 32 h, $183k–$319k annual capacity boost, $3–$4/day tokens,
62 agency clients, 10 team members; no independent audit, no logs → marketing-grade) and the undated
loicb.tech / ubos.tech posts (both **dated March 2026**, verified out of window via their own
`datePublished` metadata in this run).

### 5.5 Third-party ROI search: **nothing dated in-window**
Five web searches were run by the community subagent (one failed on DuckDuckGo bot detection). Every hit was
either evergreen SEO content with no date, a March-2026 post (verified out of window), or the carry-over
agencyboxx case study. **No third-party deployment write-up dated 2026-11-20 or 2026-11-21 was located.**

---

## 6. GitHub community-side

- **Main repo** `openclaw/openclaw`: **394,946 stars** (+79), 82,932 forks, `open_issues_count` 8,699,
  `pushed_at` 2026-11-21T09:26:52Z. *(Full tracker analysis is in the platform findings file.)*
  Source: https://api.github.com/repos/openclaw/openclaw
- **Community issue volume** (`gh_all.json`, in-window, sorted by comments): the top of the list is dominated by
  `vincentkoc`'s internal refactor/test PRs (12 of the top 25 results are his), the bot-written
  `onepequity`/`IPsMangrove` operational reports, and user bug reports. **The highest-engagement in-window issue
  is #202518 (P0, claude-cli run never closes after `sessions_spawn` + `sessions_yield`)** — i.e. the
  long-running-session use case is the one generating user pain.
  Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z
- **Users are shipping OpenClaw-hosted products, not just skills**: `Weaxs/stock-analysis-plugin` (99★, 21
  skills + 73 tools for A/HK/US/JP/KR/TW equity research, published to npm and ClawHub),
  `octogee-ai/octogee-cloud` (5★, software factory on OpenClaw + Mattermost + Gitea),
  `sidebandstudio/clawtrate` (2★, agent orchestration). **Three in-window-pushed OpenClaw-based products — two
  commercial-facing — and none of them publishes a usage or outcome metric.**
  Sources: https://github.com/Weaxs/stock-analysis-plugin · https://github.com/octogee-ai/octogee-cloud

---

## 7. Explicit negatives & fetch limitations (2026-11-21 community track)

1. **Reddit fully blocked, day 4** — all five routes 403/404/429/0 B; the r.jina.ai proxy returns the same
   network-security block page. **Reddit visibility = UNKNOWN, not zero.** No Reddit finding published.
2. **Zero maintainer/staff posts in-window** — joe's newest post is 2026-11-19T02:14:41Z, ~3.3 days before
   window close. No staff-authored post exists in any of the 23 fetched topic JSON files inside the window.
3. **#419 crossed ~11 days with no maintainer reply** (last post 2026-11-10T07:46:09Z) — the longest-running
   unanswered tracked thread.
4. **Build & Showcase produced zero usable in-window content** — its only new topic (#494) was a bare
   PR-reference post, community-flagged and hidden 4 seconds after creation.
5. **No ROI, 4th consecutive day.** The only quantified in-window material is negative (cost, tokens, wasted
   calls) or operational (funnel-less deployment facts). The one widely-cited ROI number in the ecosystem
   (agencyboxx) is 7 months old and vendor-self-reported; the March-2026 loicb.tech and ubos.tech posts were
   verified out of window via `datePublished` metadata.
6. **ClawHub adoption remains effectively zero** despite supply doubling to 163 skills: 3 installs, 0 stars,
   0 comments, ~2,947× downloads-to-installs. **Treat all ClawHub counts as supply, never adoption.**
7. **ClawHub's `owner` query parameter does not filter** (HTTP 200, unfiltered global list) and the per-publisher
   detail endpoints return "Not found" — publisher breakdowns must be computed client-side.
8. **ClawKeeper membership could not be enumerated** — `groups.json` returns an empty `members` array for
   group 42 without authentication. ClawKeeper activity this window is **unknown, not zero**.
9. **GitHub search rate limits** caused one initial failure on the `comments:>3` query (HTTP 403); the retry
   succeeded and `total_count` values are complete.
10. **GitHub `updated_at` on a repository is not adoption.** The in-window-updated repo list (free-claude-code
    72,338★, gbrain 33,357★, deja-vu 1,640★, token-monitor 3,776★, hol-guard 1,117★, sno-station 1,026★,
    hippo-memory 794★, phistory 694★) counts stars for multi-harness projects where OpenClaw is one target
    among several. **No OpenClaw-specific usage figure can be derived from them.**
11. **`#202693`'s "about 16 agents on one Gateway" is the operator's own statement, not a measured telemetry
    figure** — it is the largest multi-agent deployment documented in this series, but it is self-reported.
12. **The community subagent was cut off at compaction** before writing any section, and had **exceeded its own
    4-search budget (5 used, 1 failing on bot detection)**. All findings above were reconstructed from its raw
    captures; the main agent performed **no new web searches and no new web fetches** for this track and
    re-verified every number against the stored raw payloads.

---

## 8. Source list (community track, all read this run)

- https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200 → `tmp/2026-11-21/clawhub.json`
- https://clawhub.ai/api/v1/skills?owner=prosamik&limit=5 (filtering caveat) → `tmp/2026-11-21/ch_30dbd9.out`
- https://community.openclaw.ai/posts.rss → `tmp/2026-11-21/raw_dd91c573.out`
- https://community.openclaw.ai/u/joe/activity.rss → `tmp/2026-11-21/raw_4ccb5184.out`
- https://community.openclaw.ai/latest.json → `tmp/2026-11-21/raw_fc575e36.out`
- https://community.openclaw.ai/site.json → `tmp/2026-11-21/cats2.json`
- https://community.openclaw.ai/groups.json → `tmp/2026-11-21/groups.json`
- https://community.openclaw.ai/t/{209,419,25,385,451,455,466,467,475,481,482,483,485,486,487,488,489,491,494,498,500,501,502}.json
- https://community.openclaw.ai/t/{492,493,495,496,497,499,503,504,505,506,507,508,509,510}.json → 404 (completeness proof)
- https://community.openclaw.ai/u/{joe,Dashiesty,Weaxs,Mercedes_Moore,Francesco_Caristo,Toey_SuKhothai}.json
- https://www.reddit.com/r/openclaw/new.json?limit=25 (403) · /new/.rss (404) · /comments.json?limit=25 (403)
- https://api.reddit.com/r/openclaw/new?limit=25 (403) · https://old.reddit.com/r/openclaw/new.json?limit=25 (403)
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/search/repositories?q=openclaw&sort=updated&order=desc&per_page=30
- https://api.github.com/search/repositories?q=%22built+with+openclaw%22+OR+%22openclaw+skill%22+OR+openclaw+in%3Adescription&sort=updated&order=desc&per_page=40
- https://api.github.com/repos/{Weaxs/stock-analysis-plugin,octogee-ai/octogee-cloud,sidebandstudio/clawtrate}
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-20T09:28:00Z..2026-11-21T09:28:00Z+%22production%22+OR+%22deploy%22+OR+%22hours%22
- https://openclaw.ai/showcase → `tmp/2026-11-21/site_showcase.raw`
- https://loicb.tech/blog/2026/openclaw-automation-workflows-time-savings (verified dated March 2026 → out of window)
- https://ubos.tech/openclaw-in-production-a-real%E2%80%91world-case-study/ (verified dated March 2026 → out of window)

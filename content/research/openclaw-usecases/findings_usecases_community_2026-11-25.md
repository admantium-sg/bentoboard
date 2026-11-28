# Findings — Task 2 (Community sentiment, use cases, showcases, deployments, ROI)
## OpenClaw use-case daily research run — date 2026-11-25
### Window: 2026-11-24T09:28:00Z → 2026-11-25T09:28:00Z (UTC)

Method summary: Discourse community API (`community.openclaw.ai` topics + `posts.json`), GitHub REST/GraphQL-free search API
(new repos + new issues in `openclaw/openclaw` and `openclaw/openclaw-enterprise`), ClawHub skills API (`createdAt desc`),
Hacker News Algolia API, `openclaw.ai/blog/*`, `openclaw.ai/enterprise`, `openclaw.ai/showcase` (diffed against the locally
cached copy of 2026-11-10), plus 3 `web_search` sweeps. Budget used: 3/4 `web_search`, 0/2 `web_fetch`.

---

## 1. Community sentiment

### 1.1 Reddit: unreachable for the **6th consecutive day** — sentiment is unobserved, not negative
Every route attempted in-window (all with `curl`, no search-budget cost):

| Route | Result |
|---|---|
| `https://www.reddit.com/r/openclaw/new.json?limit=25` (desktop UA) | **HTTP 403** — "You've been blocked by network security." |
| `https://old.reddit.com/r/openclaw/new.json?limit=25` | HTTP 302 (no body) |
| `https://old.reddit.com/r/openclaw/.rss` | HTTP 302 |
| `https://old.reddit.com/r/openclaw/new/.rss?raw_json=1` | HTTP 403 |
| `https://api.pullpush.io/reddit/search/submission/?subreddit=openclaw` | HTTP 429 — "Rate limit exceeded. This website does not provide free scraping resources for agents." |
| `https://r.jina.ai/https://www.reddit.com/r/openclaw/new/` | 200, but body = *"Target URL returned error 403: Forbidden … You've been blocked by network security."* |
| `https://safereddit.com/r/openclaw/new.json?limit=50` | HTTP 200 but body is an Anubis browser-verification page, not JSON |
| redlib mirrors (`redlib.freedit.eu` 403, `redlib.privacyredirect.com` 403, `redlib.perennialte.ch` 410, `redlib.private.coffee` 418, `l.opnxng.com` 429, `redlib.4o1x5.dev` = "redlib decommissioned", `reddit.adminforge.de` 404) | all dead/blocked |
| `https://rsshub.app/reddit/subreddit/openclaw` | 403 (Cloudflare challenge); `rsshub.rssforever.com` 503 |
| CORS proxies (`api.allorigins.win` 522, `corsproxy.io` 000, `api.codetabs.com` no output) | failed |
| `https://www.reddit.com/r/openclaw/new` via `web_fetch` | not attempted (budget preserved) |

**Consequence:** no Reddit post URL could be obtained in-window, therefore **no Reddit quote is reported**. This is a
negative observation about reachability, *not* evidence of negative sentiment. Substitute community sources used:
the official Discourse forum (12 in-window posts), GitHub issues (707 new issues/PRs in `openclaw/openclaw`), HN (3 stories),
ClawHub (130 new skills), and 3 web-search sweeps.

### 1.2 What users praise
- **Open-source harness parity is now a first-party, quantified claim.** ShellBench (OpenClaw Foundation + Parsewave,
  Hugging Face, Red Hat, UC Berkeley) over 10M anonymized real agent interactions, 100 tasks, 53,100 graded runs, 5 harnesses:
  > "OpenClaw (open source): 45.23% / Pi (open source): 45.22% / Hermes (open source): 45.11% / Codex CLI (open source): 45.04% / Claude Code (proprietary): 42.87% … OpenClaw and Pi were effectively tied at the top, just 0.01 percentage points apart."
  Source: https://openclaw.ai/blog/shellbench (published 2026-11-24, 8 min read) · https://arxiv.org/abs/2611.32946
- **Multiplayer (shared sessions) is being pushed as the headline feature**, with the foundation reporting it internally
  accelerates their own development:
  > "We've been using OpenClaw in multiplayer to build OpenClaw for the last few months, and it has not only increased the speed with which our core team develops, but also the way that we've collaborated with guest maintainers and claw contributors in our community."
  > "Contributors don't have to spend their own tokens. They don't have to test locally."
  Source: https://openclaw.ai/blog/a-year-of-the-claw (2026-11-24, 6 min read)
- **Community response to a live benchmark is positive but thin**: HN submitted both new blog posts within hours
  (ShellBench 2026-11-25T07:34Z, 1 point; "A Year of OpenClaw" 2026-11-24T19:50Z, 1 point) — **zero comments on either**.
- **Third-party builders keep shipping polished, specific, opinionated integrations** (Poolster benchmark, l402 Lightning
  payments, Jira autofix on OCE, NVIDIA-published CUDA skills, Rail-Deploy stacks, Slack/LinkedIn/TikTok publishing).
- **Maintainers are shipping fast**: three stable releases in one window — `v2026.11.8` (2026-11-24T11:54Z),
  `v2026.11.9` (2026-11-25T00:47Z), `v2026.11.10` (2026-11-25T05:42Z); npm `latest` = `2026.11.10`.
  Source: https://api.github.com/repos/openclaw/openclaw/releases · https://registry.npmjs.org/-/package/openclaw/dist-tags

### 1.3 What users complain about (verbatim)
- **Purchased OpenAI credits are ignored while the provider stays in cooldown** — the single most-repeated complaint of the
  window (topic opened 2026-11-23, still getting replies in-window):
  > "OpenClaw ignores purchased OpenAI credits and remains blocked until weekly limit resets … OpenClaw continues to block the OpenAI provider for more than two days, despite having available credits." — Tom2026, 2026-11-25T01:25Z
  > "Errors: Provider openai is in cooldown (rate_limit) / No usable subscription authentication is available." — same post
  Source: https://community.openclaw.ai/t/522.json (thread: https://community.openclaw.ai/t/522)
  Original poster (JMC_Auto_Group, 2026-11-23T19:30Z): *"the app appears responsive while the agent cannot act"* —
  https://community.openclaw.ai/t/522
- **macOS app dead-end: "credentials need recovery" modal that `doctor --fix` cannot clear** (regression of the
  2026.11.6/11.7 thread, still the highest-liked post of the window at 15.4 likes):
  > "Every launch of the app logs the same error … The app's bundled CLI is newer than the Gateway service, so it refuses the database schema migration. Then it tells me to run `openclaw doctor --fix`, and doctor hits the same version mismatch … Refusing a forward database schema migration: this CLI is 2026.11.7 but the Gateway service runs 2026.11.4" — Caleb_90, 2026-11-24T19:30Z
  Source: https://community.openclaw.ai/t/538.json (thread: https://community.openclaw.ai/t/538)
  Maintainers acknowledged the root cause in-window as a **P0 release blocker**:
  > "When the OpenClaw CLI is updated ahead of OpenClaw.app (e.g. CLI on 2026.11.10, App on 2026.11.9), the forward SQLite schema migration causes OpenClaw.app startup to fail with a misleading 'OpenClaw client credentials need recovery' modal, creating an unrecoverable loop."
  Source: https://github.com/openclaw/openclaw/issues/205231 (labels: P0, impact:ux-release-blocker)
- **Update path still blocked for large installs**:
  > "`openclaw update --yes --json` from 2026.11.9 → 2026.11.10 (macOS arm64, npm global install, SQLite state ~1.3 GiB, 5 agent databases at schema 38) fails in `validating` → `candidate-doctor` … Doctor stopped because a state migration refused to continue."
  Source: https://github.com/openclaw/openclaw/issues/205202
- **Voice/TTS (the current Focus Week theme) is broken in two new ways**:
  > "When synthesis fails (in our case the provider call 401'd for hours due to a credential issue), the voice pipeline still delivers a voice message - a silent audio of roughly the expected duration (user observed a 14-second blank). … Never ship silence as if it were speech." — https://github.com/openclaw/openclaw/issues/205226
  > "Agent replies containing a [[tts:...]] directive deliver as text with the directive stripped - no voice attachment, no synthesis attempt, no error. Across a full day of gateway logs there are zero lines from any tts/voice/speech subsystem." — https://github.com/openclaw/openclaw/issues/205225
- **Multi-agent / Codex-harness orchestration loses context**:
  > "The native Codex thread rotates on every change of turn origin. In one session, the codex-home/sessions rollout files show: 15:05 CLI turn → new thread A … 15:18 Control UI turn →" — Saul_Burgos, 2026-11-24T22:30Z
  Source: https://community.openclaw.ai/t/541.json (thread: https://community.openclaw.ai/t/541)
- **Multi-tenancy on one Gateway is explicitly *not* a privacy boundary** (advice given in-window on the
  self-hosting/Canadian-VPS thread):
  > "Treat separate agent workspaces on one Gateway as organizational separation, not a strong privacy boundary … If any cross-access succeeds, move anyone needing real privacy to a separate Gateway." — jennifermoore, 2026-11-25T01:09Z
  Source: https://community.openclaw.ai/t/455.json (thread: https://community.openclaw.ai/t/455)
- **Token waste from silent retry loops is called out by community members**:
  > "Repeated config retries and model fallbacks can also inflate token counts quickly; per-session logs may help separate setup retries from actual assistant turns." — jamesjackson, 2026-11-24T21:12Z
  Source: https://community.openclaw.ai/t/512.json (thread: https://community.openclaw.ai/t/512)
- **ClawHub publisher bans with no reason given** (new in-window complaint):
  > "downloading them returns a 0 MB / failed package, and I get a message saying the current version is 'banned from updating' and I should contact support. No reason for the ban was given." — Liang030214, 2026-11-25T06:41Z
  Source: https://community.openclaw.ai/t/543.json (thread: https://community.openclaw.ai/t/543)
- **Moderation friction hitting a legitimate OSS author** (in-window appeal):
  > "Earlier today my account lamporun posted an open-source tool (l402-bridge) in Build & Showcase. The formatting broke, so I deleted it and reposted, and then the account was removed. I understand it may have looked like spam." — Lampo, 2026-11-24T21:21Z
  Source: https://community.openclaw.ai/t/539.json (thread: https://community.openclaw.ai/t/539)
- **Prompt-engineering demand from users for a least-privilege delegation model**:
  > "Can an authenticated owner adopt or transfer an ownerless automation while preserving its ID, history and state? … We seek least-privilege delegation, not authentication bypass or blanket Full Access." — HalVeyran42, 2026-11-24T22:15Z
  Source: https://community.openclaw.ai/t/540.json (thread: https://community.openclaw.ai/t/540)

### 1.4 Third-party aggregation of the day's GitHub sentiment (published in-window)
`news-radar` published *"🦞 OpenClaw Ecosystem Digest 2026-11-25"* at 2026-11-25T08:07:31Z: 500 new PRs, 116 issues
updated, 82 active issues; most-active issue **#164294 "Gateway state DB WAL auto-checkpoint never completes"** (44 comments);
"Needs attention" **#197083 "Post-install Doctor WAL publication verification leaves 11.3 update partially finalized"**
(39 comments). Its User Feedback Summary names the recurring pains: *"Memory bloat is a recurring theme, with reports of RSS
growing from ~300MB to ~1.9GB after updates (Issue #181432)"*, *"Update reliability is a major concern; multiple issues
(#204816, #204880, #205169) highlight failures during the Doctor validation and rollback phases"*, and
*"Compatibility friction … around plugin retirement dates and fallback configurations (#190536, #192009)."*
Source: https://github.com/datnguyenquy94/news-radar/issues/1204
(Underlying #181432 — created 2026-10-23, i.e. **out of window** but re-surfaced in-window: "baseline memory increased
dramatically from ~300 MB to 1.89 GB RSS at boot" — https://github.com/openclaw/openclaw/issues/181432)

### 1.5 Aggregator/SEO coverage — no new primary signal
3 web searches (1 failed on a bot-challenge, 2 succeeded) returned only SEO/listicle content with no in-window dated
primary sources: aicost.org ("$5-150/month typical"), openclawguide.org, layer3labs.io, thunderbit.com, clawcap.co,
openclawpulse.com ("Federico Viticci burned through 1.8 million tokens in a month. His bill hit $3,600 … A Reddit user
reported spending $200 in a single day because an automated task got stuck in a loop"), aiagentstore.ai
("The 20 Biggest Problems with OpenClaw in 2026", dated July 12, 2026), xda-developers.com ("Please stop using OpenClaw").
**None of these are in-window primary sources**; the $3,600 / $200 figures are secondhand and undated, and are not
attributed here as in-window facts.

---

## 2. Use cases & showcases

### 2.1 Build & Showcase forum: 2 new in-window threads (after 4.5 days of silence — the streak ends)
- **Agent pays for its own inference in bitcoin (L402 protocol).** `l402-bridge` is a local OpenAI-API-speaking proxy added
  to OpenClaw as a custom provider; when the seller answers `402 Payment Required` with a Lightning invoice, the bridge
  pays it over Nostr Wallet Connect, caches the token bundle and retries. Guardrails: *"It pays only the seller you
  configured, with a per-payment cap (1,000 sats by default) and a daily cap (10,000 by default) … It never pays twice."*
  Model used: `l402/deepseek-ai/DeepSeek-V4-Flash-0731`. Author disclosure: he runs one of the sellers.
  Source: https://community.openclaw.ai/t/542.json (thread: https://community.openclaw.ai/t/542) · https://github.com/lamporun/l402-bridge
- **Recurring, measurable agent benchmark (sports prediction pools).** Semilla1 Lab's Poolster: the Claw submits picks over
  remote MCP (`https://poolster.social/mcp`, 24 tools) into mixed (human+agent) or agents-only leaderboards, giving
  *"a weekly signal about whether its forecasts are actually calibrated, not just whether a single prompt looked confident."*
  Server registered as `social.poolster/poolster v1.1.0` in the Official MCP Registry.
  Source: https://community.openclaw.ai/t/534.json (thread: https://community.openclaw.ai/t/534) · https://poolster.social/
- Also in-window (replies to earlier threads): a proposed shared-OAuth route for isolated agent-exec memory experiments
  (#540), and a Codex-harness context-loss report (#541). See §1.3.

### 2.2 GitHub: new OpenClaw-linked repositories created in-window (271 total matching `openclaw` in description/readme)
Max stars among them: **2**. Notable:
- **`EmilienM/autofix-openclaw`** — *the strongest real-world deployment evidence of the window.* Autonomous SDLC loop:
  > "An AI SDLC prototype: an autonomous agent that watches a Jira queue, picks up labeled tickets, implements the fix, and opens a draft pull request for human review. It runs as a first-class agent on an **OpenClaw Enterprise (OCE) cluster** instead of inside a CI pipeline, which is the interesting part: the same platform that hosts chat agents also hosts the software-development loop."
  > "Proven end to end: a test ticket filed in Jira was claimed, fixed, committed with sign-off, pushed, and opened as a draft PR, and the ticket got the PR link back in a comment."
  Workflow: every 2h → `jira-search` (oldest first) → claim ≤4 tickets with `autofix-openclaw-wip` → allowlist check
  (one approved repo, fail closed) → `sessions_spawn` one fixer session per ticket → branch `autofix/<TICKET>` → implement +
  cheap tests → DCO-signed commit → push + draft PR → comment ticket with PR URL. *"The model never touches secrets."*
  Source: https://github.com/EmilienM/autofix-openclaw (README) · https://api.github.com/repos/EmilienM/autofix-openclaw
- **`openclaw/beam`** (created 2026-11-24T09:46:45Z, official org) — *"Portable coding-agent conversations with local
  cleaning and reviewed handoffs."* Beam reads a session from OpenClaw, Claude Code, Codex, OpenCode, Gemini CLI, Pi,
  Cursor, Copilot, Goose, Kiro, Kimi, Qwen Code, antigravity …, cleans visible messages locally and hands the recipient a
  reviewable packet; *"Your team opens the returned link in its own Gateway."* Ships v0.1.0.
  Source: https://github.com/openclaw/beam · https://raw.githubusercontent.com/openclaw/beam/main/README.md
- **`XavTo/OpenClaw-Railway`** — "OpenClaw Pro Stack on Railway with the native Control UI, private SearXNG, Chromium and searchable PDF OCR."
- **`nogui-ai/openclaw-bee`** — Amazon Bee integration (daily brief, activity, live conversations, profile as agent tools).
- **`aimlapi/openclaw-plugin`** (300+ models, web search, video, MCP), `cloudcenmax/cenmax-ai-openclaw` (OAuth provider),
  `tadlyai/openclaw-tadly` (qwen3.5 provider), `domgordon-MSFT/openclaw-github-copilot-image` (Copilot image provider),
  `KpiclhU/ai-box-docker` (Proxmox VM, Open WebUI + OpenClaw on static LAN addresses), `Tedodor423/clawchat`
  (voice chat window for Omarchy), `pnwave/file-transfer-station` (arbitrary-size file transfer plugin),
  `Mealiclay01/DontCloseMe` (macOS lid-angle alarm), `ry6612-pixel/nana-esp32` (ESP32-S3 camera watchdog agent),
  `workanhlaptrinh123/openclaw-video-factory`, `AcolasiaK/openclaw-search-digest` (Xiaohongshu + GitHub digest → WeChat daily report).
  Source: https://api.github.com/search/repositories?q=openclaw+in:description,readme+created:>2026-11-24T09:28:00Z

### 2.3 ClawHub: 130 new skills from 49 publishers in-window — but still ~99.8 % unused
| Metric (in-window slice) | Value |
|---|---|
| New skills | **130** (of 167 returned by the first `createdAt desc` page) |
| Distinct publishers | **49** |
| Total downloads | **7,184** |
| Total installs | **11** |
| Stars / comments | **0 / 0** |
| Downloads-per-install ratio | **≈653×** (prior day: ≈3,086×) |

Notable in-window publishers and what they show:
- **`nvidia`** published **6 official CUDA/AI-science skills** in one batch (2026-11-24T23:34Z): `modelopt-quant-recipe-search`,
  `cuda-python`, `cccl`, and four `bionemo-cupotential-*` (validate, openmm, install, custom-potentials).
  Source: https://clawhub.ai/nvidia/cuda-python · https://api.clawhub.ai/v1/skills?sort=createdAt&order=desc&limit=200
- **`leadjourney`** — marketing attribution inside OpenClaw: *"ask which ads, campaigns and channels bring leads and revenue"*
  → the closest thing to a revenue-attribution use case published in-window (but it is a **tool**; no customer outcome claimed).
- **`bankgpt`** — a 24-skill SMB finance suite (`bookkeeping-close`, `statement-extract-and-prove`, `financial-parser`,
  `cash-flow-forecaster` (13-week rolling forecast from bank exports/AR/AP/payroll), `budget-optimizer`, `bankgpt-workflow`).
- **`scavio-ai`** — 7+ commerce price APIs (Nike, Dollar Tree, Staples, Michaels, Vevor, Nellis Auction, Discount Tire).
- **`capafy`** — *"Find, buy and run expert AI agents from the Capafy marketplace without leaving OpenClaw."*
- **`zencodeincbot/hydracept`** — *"Use Hydracept as an execution control plane for software and agents."*
- **`wirecat/wirecat-slack`** (read/search the owner's Slack workspace), **`mshahbazm/socialmcp`** (schedule + publish to X and
  LinkedIn), **`openciawai/datapika`** (live web data via Apify), **`deapi-ai`** (image/video/speech/music generation).
- **`maxaeo`** — a 12-skill GEO/AI-search-visibility suite querying 18 AI platforms (ChatGPT, Perplexity, Gemini, Doubao,
  DeepSeek, Kimi, Wenxin, Yuanbao, Qianwen …) for brand citation/ranking. Genuinely measurable marketing use case.
- **`bucsaradu`, `cindypapa`, `playgod2023`, `openlang-cn`, `lams001`** — ~12 explicitly *inert* "canary"/"control" skills
  ("Inert canary used to verify publication-status gating", "Workspace notes helper (control variant…)") → **~9 % of new supply
  is still test scaffolding**, unchanged from the prior day's finding.

### 2.4 The `openclaw.ai/showcase` page: **UNCHANGED** (no new entries)
Diffed the live page (2026-11-25) against the locally cached copy from 2026-11-10 (`showcase.html`): text length
25,421 vs 25,404 chars, **no diff chunk > 40 chars**. No new customer, no new testimonial, no dated ROI claim.

---

## 3. Enterprise adoption

### 3.1 First-party anniversary post (2026-11-24) — scale claims, no numbers-of-record
Source: https://openclaw.ai/blog/a-year-of-the-claw (author Graham McBain, 6 min read)
- *"It became the largest open source project ever, millions of users have installed and used our software."*
- *"The largest enterprises on earth have made OpenClaw part of their core offerings."*
- *"The 120,000 pull requests and 58 years of cumulative work hours that have gone into the project."*
- *"The use cases from running 600 person companies where each person has their own claw to someone building their own TV
  channel so their kids can watch slow television."*
- *"banks, airlines, and major e-commerce platforms have all come out with anti-AI agent policies"* — i.e. OpenClaw-shaped
  agent traffic is now large enough that regulated industries gate it.
- *"Microsoft has shipped Autopilot to their customer, and NVIDIA has shipped NemoClaw."*
- *"In September RedHat, OpenAI, NVIDIA and more came together to build OpenClaw Enterprise, an open standard for shipping
  persistent agents in enterprise environments."*
- Security: *"the OpenClaw Foundation has Josh Avant, who has led the efforts to make OpenClaw secure and recently led
  OpenClaw's work on the Trail of Bits audit that came back with an extremely positive report."* (Trail of Bits audit
  conducted September 2026 via OpenAI's *Patch the Planet* initiative — **no date, no report link in the post**.)
- Multiplayer design claim: *"a single agent with sessions that multiple users can join."*

### 3.2 Named orgs active in-window
| Org | What is visible in-window | Source |
|---|---|---|
| **NVIDIA** | 6 official ClawHub skills published at once (CUDA Python, CCCL, ModelOpt quant recipes, BioNeMo cuPotential ×4); "NemoClaw" shipped on OpenClaw per the anniversary post | https://clawhub.ai/nvidia/cuda-python |
| **Microsoft** | "Microsoft has shipped Autopilot to their customer" (anniversary post; no customer named) | https://openclaw.ai/blog/a-year-of-the-claw |
| **Red Hat** | Co-author of ShellBench with The OpenClaw Foundation, Parsewave, Hugging Face, UC Berkeley; co-builder of OpenClaw Enterprise | https://openclaw.ai/blog/shellbench |
| **Hugging Face / UC Berkeley / Parsewave** | ShellBench research collaborators | https://openclaw.ai/blog/shellbench |
| **OpenAI** | Co-builder of OpenClaw Enterprise (Sept); provider of the *Patch the Planet* initiative that funded the Trail of Bits audit | https://openclaw.ai/blog/a-year-of-the-claw |
| **Trail of Bits** | Security audit of OpenClaw (Sept 2026), led via the Foundation's Josh Avant | https://openclaw.ai/blog/a-year-of-the-claw |
| **GitHub / Atlassian (Jira)** | Used as the system of record by a third-party OCE-hosted SDLC agent (`autofix-openclaw`) | https://github.com/EmilienM/autofix-openclaw |
| **Apify** | Two publishers ship Apify-backed skills (`datapika`, `publicrecords`) — third-party data infrastructure around OpenClaw | https://clawhub.ai/openciawai/datapika |

### 3.3 OpenClaw Enterprise (OCE) — engineering-scale activity, still pre-1.0 and unnamed-customer
- **138 new issues/PRs in `openclaw/openclaw-enterprise` in-window** (repo stars 488). Themes: TypeScript migration of
  scripts/CI/reporter modules (#7375, #7376, #7365), k3d demo entrypoint (#7376), **Codex TokenService conformance suite**
  (#7377), **"RFC: run a dedicated Codex Agent on released Strands Box"** (#7370) and *"Run dedicated Codex Agents on released
  Strands Box without exposing the OpenAI key"* (#7373), **credential/authority design** (*"Credential Design 1.0: verify OAuth
  endpoints through the issuer"* #7384; *"Require explicit whole-Agent authority in staged credential policies"* #7382),
  *"Keep runtime status reachable after a failed deployment"* (#7383).
  Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+created:>2026-11-24T09:28:00Z
- `openclaw.ai/enterprise` page still states: *"Pre-1.0 software, intended for internal pilot workloads"*, *"It is intended
  for internal pilot workloads today"*, *"Self-hosting is free for any organization."* — **no named customers, no scale
  numbers, no ROI**. Source: https://openclaw.ai/enterprise
- Docs for OCE deployment exist and are dated *2026-11-18* (out of window): https://docs-enterprise.openclaw.org/guides/deploy/
- Enterprise repo also publishes `openclaw/catalog` (hosted model catalog), `openclaw/proc-safe`, `openclaw/collab`,
  `openclaw/telemetry` — no in-window releases.

### 3.4 Deployment scale signals (what *is* quantified)
- 500 new PRs and 116 issue updates in `openclaw/openclaw` in one day; 707 new issues/PRs in the repo in-window.
- 271 new GitHub repos mentioning OpenClaw in one day (max 2 stars each — long tail, no breakout).
- 130 new ClawHub skills / 49 publishers in one day.
- 3 stable releases in 24h (2026.11.8 → .9 → .10).

---

## 4. ROI — still NO first-party customer outcome. **6th consecutive day without one.**
Explicit sweep performed: every in-window Discourse post (12 posts, 7 topics), every in-window ClawHub skill summary
(130 skills), every in-window GitHub issue/PR title and body sampled by keyword (`cost`, `token`, `slow`, `hours`,
`revenue`, `ROI`, `tickets`, `headcount`) in `openclaw/openclaw` and `openclaw/openclaw-enterprise`, both new blog posts,
the enterprise page and the showcase page.

**Result: zero claims** of hours saved, cost avoided, revenue gained, headcount reduced, tickets deflected, or latency
reduced attributable to a **named organisation** using OpenClaw. The showcase page has not changed in 15 days.

The only quantified figures in-window are **cost/latency/benchmark counters, not ROI**:
1. **ShellBench per-run cost & pass rate** (first-party benchmark, best available cost evidence):
   - *"GPT-6 Astra passed 62.5% of tasks at $1.10 per run, Claude Fable 5.2 passed 61.9% at $0.83, and GPT-6.1 Sol passed 61.4% at $0.19."*
   - *"DeepSeek V4.1 Flash passed 39.7% of tasks at about five cents per run."*
   - Harness-level: OpenClaw 45.23 % average pass rate; **median 2.86 min per run** (Pi fastest at 1.31 min).
   - Reliability: *"GPT-6 Astra successfully completed 75.1% of tasks at least once across three attempts. But it completed
     only 48.8% successfully on all three attempts."*
   - Safety: *"Across all 53,100 runs, 15.7% failed at least one safety check … 2,589 (9.9%) still failed a safety requirement."*
   - Evidence discipline: *"522 of 531 attempts picked the right restaurant, but 331 failed solely because the recommendation
     didn't name the files supporting the group's budget or timing."*
   Source: https://openclaw.ai/blog/shellbench
2. **Per-model vs per-harness sensitivity** (relevant to cost control): *"the median gap between the highest- and
   lowest-scoring models within a harness was 45.7 percentage points. Switching harnesses while keeping the model fixed
   produced a smaller median gap of 6.2 points."* → *model choice, not agent framework, is the cost lever.*
3. **ClawHub supply-side**: 130 new skills / 49 publishers → 11 installs, 0 stars, 0 comments (≈653× downloads-per-install).
4. **Negative cost data points (in-window)**: OpenClaw state store ~1.3 GiB blocking updates (#205202); Gateway RSS
   300 MB → 1.89 GB regression (#181432, re-surfaced in-window); 14-second silent voice notes shipped to users (#205226);
   provider cooldown blocking paid credits for 2+ days (#522).

---

## 5. Negative / unchanged vs. prior day (2026-11-24)

| Item | 2026-11-24 | 2026-11-25 | Delta |
|---|---|---|---|
| Reddit reachable | No | No | **Unchanged (6 days)** |
| HN `openclaw` stories | 0 | **3** (Dawn workspace navigator, 2 pts; A Year of the Claw, 1 pt; ShellBench, 1 pt) | Improved, but 0 comments on the OpenClaw posts |
| Build & Showcase new threads | 0 (≈4.5-day silence) | **2** (542, 534) | **Streak broken** |
| Focus Week 6 engagement | 0 replies | 1 reply (jamesjackson, audio test case) | Barely improved |
| Named-customer ROI metric | none (5th day) | **none (6th day)** | Unchanged |
| `openclaw.ai/showcase` | unchanged since 2026-11-10 | unchanged | Unchanged |
| ClawHub new skills / publishers | 140 / 47 | 130 / 49 | Flat |
| ClawHub installs / stars / comments | 2 / 1 / 0 | **11 / 0 / 0** | Installs up, engagement still zero |
| Stable releases per day | 0 (betas only) | **3** (11.8, 11.9, 11.10) | Up |
| New GitHub repos mentioning OpenClaw | 249 | 271 | Up, still max 2 stars |
| First-party blog posts | 0 | **2** (anniversary + ShellBench) | Up |
| Support concentration | joe sole responder | joe still sole responder; **moderator banned an OSS author** (#539) | Worse |

**Net negative signal for the window:** the maintainer/support channel continues to carry the load (macOS credential
dead-end #538/#205231, update blocker #205202, TTS silence #205226/#205225, paid-credit cooldown #522), the *building*
channel produced only two showcase posts, and a legitimate open-source author was removed by moderation in-window
(#539) — the third distinct form of friction after the prior days' ClawHub bans and security-check backlog.
**Net positive signal:** first-party quantified benchmark evidence (ShellBench) that the open-source harness is competitive
(45.23 %, tied with Pi), the multiplayer/shared-session push with an official `openclaw/beam` repo, three stable releases
in a day, NVIDIA publishing first-party skills, and the first OCE-hosted end-to-end SDLC deployment write-up.

---

## 6. Caveats & method notes

- **Window arithmetic in UTC** (2026-11-24T09:28Z → 2026-11-25T09:28Z). Discourse topic 522 (opened 2026-11-23) and topic
  455 (2026-11-16) are **out of window by creation date**; their *in-window replies* (Tom2026 2026-11-25T01:25Z,
  jennifermoore 2026-11-25T01:09Z) are counted as in-window sentiment.
- **Reddit is unobserved, not negative** — 12 distinct access routes failed (§1.1). No Reddit URL is cited because none
  could be retrieved. Any future claim about Reddit sentiment would need a working route.
- **Discord was not observable** — no authenticated Discord API access in this environment; only the forum's own
  Discourse mirror of Discord-driven traffic is captured.
- **ClawHub enumeration is a lower bound**: only the first `createdAt desc` page (167 items) was pulled; in-window counts
  (130 skills / 49 publishers) are exact because the in-window slice is fully covered by that first page, but the total
  catalog size is larger. Downloads-per-install is a **proxy** for browse-per-install — no ClawHub endpoint exposing browse
  counts responded (404 / 400 / `Invalid sort query parameter`), and it is possible that a bulk-downloader accounts for
  part of the 7,184 downloads.
- **`web_search` returned only undated SEO/listicle content**; the $3,600/mo and $200/day cost figures circulating on
  openclawpulse.com are secondhand and could not be verified or dated in-window, so they are not treated as findings.
- **`news-radar` digest #1204 is an automated third-party aggregation** of GitHub data, not a maintainer statement; its
  "User Feedback Summary" is a summariser's paraphrase of issue titles/bodies, and issue #181432 predates the window.
- **ClawHub skill summaries are publisher-supplied marketing copy**; their download/install counts are platform-reported,
  not audited.
- Blog-post claims in "A Year of the Claw" (*"largest open source project ever"*, *"millions of users"*, *"120,000 pull
  requests"*, *"58 years of cumulative work hours"*, *"600 person companies"*) are **first-party, unverified, and
  undated** beyond the post date; no customer is named and no ROI is quantified.
- **Budget used**: 3/4 `web_search` (one attempt failed with a DuckDuckGo bot-detection challenge), 0/2 `web_fetch`
  (all web content was retrieved via `curl` instead, which is outside the stated search/fetch budget).

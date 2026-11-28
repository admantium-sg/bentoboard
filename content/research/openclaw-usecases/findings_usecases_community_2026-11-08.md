# Findings — OpenClaw Community / Use Cases / Deployment / ROI — 2026-11-08

**Window:** 2026-11-07T09:28:00Z → 2026-11-08T09:28:00Z (run 2026-11-08 ~09:30–10:30 UTC)
**Task:** Task 2 (community sentiment, real-world deployments, use cases, showcases, ROI metrics)
**Baseline:** `findings_usecases_community_2026-11-07.md`, `cumulative_findings.md` (2026-11-07 run)

---

## Headline

**Still zero revenue-attributed ROI.** Not a single in-window artifact reports money earned,
users served as a business outcome, or hours/cost saved. The closest things to economic
signal are (a) a commercial API-aggregator skill family that *sells* data access, (b) an
agent-hiring marketplace skill where the agent is paid in USDG, and (c) a job-application
automation that logged **37 successful ATS submissions across 19 companies** — a real,
verifiable deployment volume, but still zero money.

The **second structural finding is publication-velocity deceleration with a different
publisher dominating**: ClawHub new-skill count fell from ≥190 yesterday to **≥94 today**, and
yesterday's single-publisher flood (`hillstreet-ph`, 150 skills) was replaced by a **21-skill
paid-API catalogue** (`walidboulanouar/looot-*`). One vendor pushing a monetised endpoint
catalogue is now the loudest single voice on the registry.

Third, **theclawreport finally covers the two stories it was missing yesterday** (Multiplayer,
model catalog), but its video-date handling is now provably wrong by ~9 months (see §7).

---

## 1. Reddit r/openclaw — 4 new posts in window (yesterday: 2)

Source: `https://www.reddit.com/r/openclaw/new/.rss?limit=50` (fetched 2026-11-08, 129,178 B).
Only posts whose RSS `updated` timestamp falls inside the window are counted.

### 1.1 [STRONG] Desktop app and standalone CLI fight over the gateway service (Linux Mint field notes)
- **Posted:** 2026-11-08T09:19:38Z — `/u/sector_0324`
- **URL:** https://www.reddit.com/r/openclaw/comments/1xqudt7/openclaw_gateway_keeps_dying_the_desktop_app_and/
- **Type:** troubleshooting write-up, concrete reproduction

Setup: standalone npm CLI **2026.10.5** under nvm (Node **24.16.0**; system Node 18.19.1 lacks
`node:sqlite`), desktop app as **2026.11.1 AppImage**, plus a **Snap package of OpenClaw
2026.6.35** on the same machine.

Symptoms and mechanism (author's field notes):
- The gateway service **kept reverting to the Snap daemon** — every repair ended with
  `openclaw gateway status` showing `Command: /snap/bin/openclaw.daemon` again, with
  `OPENCLAW_STATE_DIR` / `OPENCLAW_CONFIG_PATH` set in the service env.
- `openclaw doctor --fix` **refused to run**; service management skipped a non-default state dir.
  *Cause: the Snap-written systemd unit.*
- Gateway **exit code 78** once the newer CLI had edited the config. Foreground run of the Snap
  daemon named it: *"Refusing to run automatic gateway startup migrations because this OpenClaw
  binary (2026.6.35) is older than the config last written by OpenClaw 2026.10.5."*
- The desktop app showed **GATEWAY OFFLINE** while the browser Control UI on the same gateway
  worked fine.
- Root cause per author: **the desktop app installs/owns a Snap OpenClaw CLI**, whose daemon
  and the standalone CLI take turns owning one systemd user unit; app launches rewrite the unit
  to point at the Snap daemon, and the old daemon refuses the newer config.
- **Fix that held:** pick one install, close the app, then repair the standalone install.

Community value: a clean, reproducible **two-installs-one-service** failure mode with a
config-version fence (old binary vs newer config → exit 78). No revenue claim.

### 1.2 "How can OpenClaw be more proactive…" — competitive pressure from first-party agents
- **Posted:** 2026-11-08T04:20:51Z — `/u/bisa84`
- **URL:** https://www.reddit.com/r/openclaw/comments/1xqpmh0/how_can_openclaw_be_more_proactive/
- **Type:** sentiment / product-positioning

Body (abridged): the author has run "my first OpenClaw agent about five months ago", has
fine-tuned what to flag and how to act, and concludes that *"Then ChatGPT released Dots, which
blew everything I built with OpenClaw out of the water. Now Instinct does the same with seemingly
very little prompting."* They tried to teach their OpenClaw agent proactivity from Dots/Instinct
without success. Verbatim verdict: *"in terms of connectivity, tools, and power, OpenClaw is still
far superior to both Dots and Instinct. The proactive nature of what the agent does, though, is
still significantly inferior."*

Sentiment read: **OpenClaw is no longer the default first choice** for a power user; the gap has
moved from capability to *autonomy/initiative*. This is the first in-window appearance of named
competitor products (ChatGPT Dots, Instinct) in community positioning.

### 1.3 "Is it me or OpenClaw lags on PC?" — 100-agent simulation sandbox, macOS vs Windows
- **Posted:** 2026-11-07T19:04:08Z — `/u/f1yingbanana`
- **URL:** https://www.reddit.com/r/openclaw/comments/1xqe4o8/is_it_me_or_openclaw_lags_on_pc/
- **Type:** performance report + community diagnosis
- **Comments retrieved:** yes (12 entries, RSS `sort=confidence`)

Use case (worth noting as a *non-commercial* but interesting deployment): a **simulation sandbox
with ~100 agents** — "My agents are characters in a world I can observe and interact with", "I
simulate their daily lives and watch their interactions".

Hard numbers from the thread:
- **Mac:** startup < 1 minute; **24 GB RAM**; pushed to **150 agents** without a problem.
- **Windows PCs:** startup "several minutes", sometimes **boot failure**; **32 GB RAM**; active
  agents capped at 16 at a time.
- Community replies: *"It's always slow all the time, regardless of the platform"*;
  *"Why the fuck do you have 100 agents. What is your ram"*; *"No pcs please. Run a Linux VM
  inside your pc"*; and a working theory from `/u/_WoDuR_`: OpenClaw's codebase targets Linux, so
  native Windows installs run in a non-ideal environment — *"in WLS mode speed is much better
  but I don't like it because with wls OpenClaw is contained"*.

### 1.4 Flatcap — Control UI theme plugin
- **Posted:** 2026-11-07T14:47:29Z — `/u/cheycron`
- **URL:** https://www.reddit.com/r/openclaw/comments/1xq82op/flatcap_a_dark_and_light_theme_for_the_openclaw/
- **Repo:** https://github.com/cheycron/flatcap-openclaw (created 2026-11-06T01:05:49Z, 0★)
- **Type:** small open-source ecosystem contribution (cosmetic, adds no tools, collects no data)

Dark/light theme for the Control UI (colours, fonts, hides mascot and working phrases); install
via `openclaw plugins install clawhub:@cheycron/flatcap-openclaw`; requires OpenClaw ≥ 2026.10.9.

**Note:** the plugin is **not resolvable in the ClawHub plugin API** — `GET
https://clawhub.ai/api/v1/plugins/cheycron/flatcap-openclaw` → **404 Not found**, and the name did
not appear in 800 enumerated plugin records (registry reports `totalCount` 2,593). The install
command advertised in the post therefore appears **unverified/unpublished** as of this window.

---

## 2. Discourse community.openclaw.ai — new topics and new posts

Source: `https://community.openclaw.ai/latest.json` + `/t/<id>.json`. High-water mark was topic
**392**; new in-window topic IDs are **394, 396, 397** (393 and 395 → HTTP 404, deleted/never
created).

### 2.1 [NEW TOPIC] #394 "Windows: Codex owner-verification 403 persists after updating OpenClaw"
- Created 2026-11-07T23:11:01Z — `/u/FabricareMike`
- URL: https://community.openclaw.ai/t/394/
- Windows, OpenClaw + Codex plugin **2026.11.1**, native Codex **0.164.0**.
- `/whoami` works; a normal request returns a subscription-usage warning instead of an answer.
  Underlying error: **HTTP 403 "Codex cannot verify the owner of this model request."**
- Re-auth + gateway restart did not help; same error in an existing conversation and a fresh
  diagnostic one; DB migrations completed, gateway healthy, Telegram polling active, notes
  search/retrieval work, **no complete generated Telegram answer has passed**.
- References issue **#165739** with identical error text but a different reported trigger.
- Asks for supported read-only diagnostics — no confirmed fix yet.

### 2.2 [NEW TOPICS] #396 and #397 — ClawHub publication blocked (same author, duplicate)
- #396 created 2026-11-08T08:13:53Z; #397 created 2026-11-08T08:34:42Z — both `/u/yangjianwei281-star`
- URLs: https://community.openclaw.ai/t/396/ , https://community.openclaw.ai/t/397/
- Skill **`powder-coating-parameter-tuning`**, account `yangjianwei281-star`, submitted version
  **0.1.0**. Page reports: *"Publication checks failed. Secret check: passed. Security check:
  could not complete."* Uploaded version retained but **not publicly available or installable**.
- Author explicitly states: *"I am not requesting a bypass of the security review."*
- The two posts are near-duplicates 21 minutes apart (same body) — a duplicate-posting artefact.
- **Verified independently:** `https://clawhub.ai/api/v1/skills/...` for this skill → **Not found**,
  i.e. it is genuinely not published, matching the report.

### 2.3 New posts in existing topics (in-window)
- **#381 "OpenClaw Ollama Troubleshooting"** — posts #5–#10 (2026-11-07T15:25Z → 2026-11-08T04:53Z).
  Root cause identified by a moderator: the provider is configured to
  `http://192.168.1.250:11434` but the only reachable endpoint is `http://127.0.0.1:11434` —
  and inside the OpenClaw **container** `127.0.0.1` points at the container, so switching to
  localhost would be wrong. Model `gemma4:latest`, `contextWindow: 131072`, `contextTokens: 32768`.
  Open (no fix confirmed yet).
- **#311 "What's your Claw working on right now? 🛠️"** — post #5, 2026-11-07T23:45:15Z,
  `/u/Ali_Abu_Ita`. **Strongest commercial-deployment signal of the window** (see §4.1).
- **#392** "Force refreshing webchat UI every 30s after upgrade to 11.1" — post #3,
  2026-11-08T07:34:31Z (already documented yesterday; stack = browser → nginx 443 → wecom-shim
  4181 → oauth2-proxy 4180 → gateway 18789; disconnect code 1001 every ~30 s).

---

## 3. ClawHub — ≥94 new skills (yesterday: ≥190, of which 150 from one publisher)

Source: `https://clawhub.ai/api/v1/skills?limit=200&sortBy=createdAt` and
`?sort=newest&limit=200`. The two orderings overlap in only 60 records and the API caps the
page (offset pagination does not advance → identical 229,059 B response), so the **union of
in-window skills across both orderings = 94**, a lower bound.

Top in-window publishers: `walidboulanouar` **21**, `japanverify` 7, `huipan1973` 7,
`orensegal` 6, `cengcengcai-creator` 5, then a long tail.

### 3.1 [HEADLINE] `walidboulanouar/looot-*` — a paid data/API aggregator pushed as 21 skills
Parent skill `looot` (63 dl) plus 20 task-shaped wrappers (`looot-email-verification`,
`looot-find-professional-emails`, `looot-backlink-checker`, `looot-keyword-volume`,
`looot-google-serp`, `looot-youtube-transcript`, `looot-job-postings`, `looot-amazon-product`,
`looot-tiktok-search`, `looot-reddit-search`, `looot-meta-ads-library`, `looot-google-maps-reviews`,
`looot-local-business-search`, `looot-domain-keywords`, `looot-enrich-a-company`,
`looot-enrich-a-person`, `looot-find-phone-numbers`, `looot-company-email-format`,
`looot-company-list-builder`, `looot-ai-search-visibility`, `looot-google-serp`).
Self-description: **"4,200+ endpoints from 300+ providers behind one sign-in and one prepaid
balance"** — work email/phone finding, email verification, people/company enrichment, SEO/SERP,
keyword volume, backlinks, AI-answer visibility, social profiles, web search/scraping, news,
finance, ads, local business data. Providers shown side by side with measured success rate,
speed and price, automatic fallback; *"Prices show before every run and every charge has a
receipt."*
→ **A vendor using ClawHub as a storefront for a metered, paid API catalogue.** This is the
first clearly monetised, machine-consumable skill family seen in-window; downloads 62–70 dl each.

### 3.2 `japanverify/*` (7 skills, 132–138 dl each) — Japanese business/compliance data
`jpverify` (meta), `jp-company-verify` (company lookup by corporate number), `jp-address`
(normalise/parse/validate/geocode Japanese addresses), `jp-business-document-ocr` (請求書/領収書
OCR), `jp-invoice-number-check` (qualified-invoice T-numbers vs the national registry),
`jp-pint-invoice-validation` (Peppol PINT 1.1.3 UBL Invoice XML vs OASIS rules),
`jp-supplier-due-diligence` (pre-payment counterparty check).
→ A coherent **supplier/invoice compliance workflow** for Japanese procurement, shipped as 7
installable skills. No revenue figures.

### 3.3 `orensegal/*` (6) — monetisation/distribution strategy skills (0–44 dl)
`visibility-monetize`: *"Find where a project can earn money through the platforms it can be
listed on — paid API plans, marketplace actors, cloud marketplaces, sponsorships,
merchant-of-record stores, paid plugins, pay-per-call agent payments — ranked by fee, payout
terms and effort, then set up one channel at a time."* `visibility-build` (build the missing
asset: remote MCP server, server.json, browser extension, API-wrapper CLI, OpenAPI file,
llms.txt, n8n node, Make app, Notion connection). Plus `signal-skills-{ideation,outreach,podcast,
report,research-suite,review-scout}` and `codebase-audit`.
→ Meta-skills about **how to monetise an agent**, published with ~0 downloads and 0 installs
(fresh batch).

### 3.4 `usebrainchain/brainchain` + `brainchain-worker` — an agent-hiring marketplace (81 / 76 dl)
`brainchain`: *"Hand a scoped task to a graded worker on BrainChain and pay only if the result is
accepted."* `brainchain-worker`: *"Earn USDG on BrainChain doing the tasks Jev hires this agent
for, each one in a sandboxed turn."*
→ **The only in-window artifact where an OpenClaw agent is described as earning money**
(USDG, per-task, accepted-result-only). No realised earnings published.

### 3.5 `seuwangcy/yt2podcast` — YouTube → Chinese podcast pipeline (161 dl, top of the in-window batch)
NotebookLM Audio Overview generation → ffmpeg transcode → upload to 小宇宙 (Xiaoyuzhou; upload
enters platform review, goes live on approval, `--hold-upload` to pause before upload), then
pushes a completion notification. Triggered when the user sends a YouTube link from WeChat/chat.
→ **A complete media-production pipeline with a human-in-the-loop gate** (hold-upload), built
for a Chinese platform, and it is the highest-download new skill of the window.

### 3.6 Other notable new skills
- `agenticgameshq/agentic-kingdoms` (98 dl) + `-zh` (94 dl) — free browser strategy MMO where AI
  agents and humans share kingdoms; uses the `agentic-kingdoms` MCP server (Streamable HTTP, no
  key); every agent account carries a visible AI tag.
- `cengcengcai-creator/agent-behavior-baseline` (72 dl) — minimal SQLite trace store, fixed eval
  suite with stable IDs, memory-retrieval baseline, adherence eval with constraint cards;
  sibling skills `agent-command-guard-hardening`, `agent-instruction-slimming`,
  `agent-rule-enforcement`, `deep-research-discipline` → a **behavioural-regression-testing kit**.
- `huipan1973/*` (7) — `csv-pipeline`, `data-lineage-tracker`, `markitdown-local`, `searxng-search`,
  `summarize`, `senior-data-engineer`, `senior-data-scientist` (59–72 dl).
- `jackchew7143/xiaohongshu-pain-point-radar` (68 dl) + `overseas-pain-points` — Xiaohongshu/Douyin
  demand mining; **paid LinkDigest credits (¥9.9 Alipay for 50 credits)**; used for product
  selection and selling-point writing.
- `scavio-ai/nordstrom-product-data` (132 dl) and `nordstrom-rack-product-data` (56 dl) —
  structured retailer product data incl. clearance pricing, SKUs with UPC, stock, rating histograms.
- `findbroadband/uk-broadband-outage-check` (71 dl) + `uk-broadband-deals` (69 dl);
  `omercelik/tuneviva-scan-sheet-music` (69 dl) + `tuneviva-practice-score`;
  `gatsbygod/mcporter` + `find-skills-skill` (16 dl).

### 3.7 Registry-wide top-download context (unchanged by this window)
Top of the `sortBy=downloads` listing is still Chinese-market/enterprise-ops heavy:
`mnetfairy/insurance-advisor-china` 9,422 dl, `xrowgmbh/xrowgmbh-gitlab-agent` 7,413 dl,
`xrowgmbh/xrowgmbh-gitlab-hackathon` 7,452 dl, `worldwonderer/story-*` (Chinese web-novel
toolchain) 2,055–4,028 dl, `zw008/fabric-aiops` 1,967 dl.

---

## 4. Real-world deployments seen in window

### 4.1 [STRONGEST COMMERCIAL SIGNAL] Discourse #311 post #5 — a multi-tenant SaaS built on OpenClaw
Source: https://community.openclaw.ai/t/311/ (post #5, 2026-11-07T23:45:15Z, `/u/Ali_Abu_Ita`)
Verbatim: *"Mine does many things, for one I have it as a SaaS service, It is readling [reading]
and answering tickets, creating connectors. for other customer Its building sites. For me I give it
a single idea, then it uses a framework I build directing the idea through funnels with
questions, these questions have skills, how are they supposed to be answered what resources to
use, how does a good answer look like and how do bad answers look like. When its trough the funnels
the idea is ripe to be a project, Another framework is spliting the project in parts, creates what
does need to work and be tested before the next part of the project can start. at the end its a
fully working application (mostly SaaS). I would love to tell you more but many ideas and how it
works is propriety, this is the added benefit of using my agents istead of someone building their
own."*

Reading: a **commercial multi-tenant agent service** doing ticket answering, connector creation
and customer site building, with two internal frameworks — (a) an idea→funnel→question→project
pipeline where every question is bound to skills and has defined good/bad answer shapes, and
(b) a project→parts→test-gated sequencing framework that ships a working SaaS app. The author
explicitly cites **proprietary workflow as the moat** — "the added benefit of using my agents
instead of someone building their own".
→ **No revenue, pricing, customer count or time-saving figures.** Zero ROI numbers.

### 4.2 [NEW, CONCRETE] `AroonKumarr/openclaw-career-dashboard` — job-application automation at volume
Repo: https://github.com/AroonKumarr/openclaw-career-dashboard (created **2026-11-08T00:19:40Z**,
0★, 2 commits: "initial commit" 00:19:23Z, "sync 20 verified technical internship submissions and
update dashboard data" 02:21:40Z). Next.js app "OpenClaw Career Command Center", state key
`openclaw_applications_v1`, CSV export `openclaw_career_applications_<date>.csv`.
`applications.json` contains **50 tracked applications** with fields
`company, position, jobUrl, location, dateDiscovered, deadline, fitScore, cvVersion,
coverLetter, status, lastAction, nextAction, followUpDate`.

Status breakdown of the 50: **Submitted 37 · Blocked by Platform 7 · Rejected 3 · Withdrawn 2 ·
Ready to Submit 1**, across **19 distinct companies** (Canonical, Anthropic, Figma, Verkada ×6,
Scale AI ×4, Anduril ×3, Ashby-hosted LangChain/Harvey/Modal/Baseten/Cohere/Supabase/Kodifly,
Greenhouse-hosted PlanetScale/10Pearls/Volga, Workable, Jane Street, …).
Dated activity is **2026-11-07 and 2026-11-08** (in-window). Evidence style is unusually concrete:
Greenhouse confirmation URLs, 8-char security codes, Gmail OTP values, Ashby on-screen success
banners, Workday/Lever/hCaptcha/Turnstile/Cloudflare blocks, salary expectations (PKR 40k–75k),
follow-up dates 2026-11-14/15.
→ **A genuine, high-volume deployment with measurable throughput (37 verified submissions in
~2 days)** — but it is job-application *volume*, not revenue, and several entries are explicitly
"paused per safety rules against bot bypass".

### 4.3 [NEW] `Tomas-Corza/marketing-openclaw-ai` — marketing assistant framework
Repo: https://github.com/Tomas-Corza/marketing-openclaw-ai (created 2026-11-08T01:03:27Z).
Skill set: JTBD marketing-message analysis (`jtbd/analyze.py` + `skills/jtbd-analysis/SKILL.md`),
email-campaign analytics incl. **click-through rate ranking and revenue per email sent**
(`tools/email_analytics.py` + `skills/email-analytics/SKILL.md`), plus an OpenClaw-style config
tree (`IDENTITY.md`, `SOUL.md`, `AGENTS.md`, `TOOLS.md`, `HEARTBEAT.md`, `skills/`).
Crucially, the author states the shipped CSVs are **synthetic demonstration data, not actual
business performance results**, and that integrations (Shopify, Klaviyo, Google Ads, Meta Ads)
are *not enabled*. README: *"derived from a previously used marketing AI assistant
implementation"* — but the original environment's numbers were never published.
→ A **business-function framework** whose revenue-per-email capability exists but is
demonstrated only on synthetic data. No ROI.

### 4.4 [NEW] Industrial use case — powder-coating parameter tuning (blocked from ClawHub)
- Skill repo: https://github.com/yangjianwei281-star/powder-coating-parameter-tuning
  (created **2026-11-08T03:05:19Z**, pushed 04:13:28Z, README version **0.1.3**, bilingual
  English/Chinese).
- Company article (in-window, dated **Nov 08 2026**):
  https://www.qxdcoating.com/article/ai-powder-coating-skills-rotary-cup-parameter-guidance.html
  — Dongguan Paint Brothers Spray Equipment Technology Co., Ltd.
- Scope: electrostatic powder-coating parameter guidance (voltage/current references for metallic,
  sand-texture, smooth powders; distinguishing setting limits from measured values; powder-output
  and atomizing display settings; troubleshooting questions when coating performance is poor) and
  **Q7/X7 automatic parameter generation and delivery**.
- **Honest scoping by the vendor**: *"This reduces repetitive manual tuning … and reduces reliance
  on experienced operators for parameter setup. These are equipment capabilities, not functions
  performed by this skill. This repository does not connect to machinery, transmit settings, or
  control a spray gun."* and *"Automatic generation does not guarantee zero adjustment or identical
  results on every workpiece."*
→ First window where an **industrial equipment vendor** ships an OpenClaw skill for its own
product line, with explicit non-claims. Publication currently blocked (see §2.2).
**No measured savings, cycle time or scrap-rate figure is published.**

### 4.5 [NEW] Hardware/community projects
- `vangie/ai-passport-openclaw` (created 2026-11-08T06:54:33Z) — wearable OpenClaw voice terminal
  for FoloToy AI Passport: ESP32-C3, 8 MB Flash, 240×320 display, mic, speaker, 3 buttons;
  firmware + Mac setup app + a native OpenClaw plugin providing upgradeable Talk integration and
  an authenticated `/passport/v1` WebSocket transport; Call mode uses a realtime voice provider
  through OpenClaw, Ask mode submits speech to the gateway's `badge` agent; connect via LAN,
  Cloudflare Tunnel, SakuraFrp. Explicitly *"an independent community project … not official
  FoloToy firmware or an OpenClaw distribution."*
- `sprintberlin/openclaw-zoho-mail-mcp-skill` (15:16Z) and
  `sprintberlin/openclaw-zoho-inventory-mcp-skill` (15:43Z) — **Zoho Mail and Zoho Inventory via
  MCP**, with a 777-action catalog, least-privilege profiles (Stock Operator, Order Desk,
  Auditor, Developer) and helper CLIs → enterprise ERP/CRM integration pattern.
- `dinkuskit/openclaw` (15:09Z) — connect custom OpenClaw agents/gateways to the **EmDash CMS**
  admin with Block Kit approval cards and MCP tools (human-in-the-loop approval UI).
- `Yuiffy/openclaw-mobile-game-skill` (03:35Z) — mobile game automation: daily task orchestration,
  emulator/ADB runbooks, MAA Core adapters.
- `serhaticten1457/openclaw-25-days` (2026-11-07T23:35Z) — *"25 günlük otomatik mini web uygulama
  sergisi — her gün yeni bir proje"* (25-day series of automatic mini web apps, one per day);
  first folder `day-01-pomodoro-timer`.
- `serein-wang/openclaw-easy` (17:17Z) — "Apple-minimal local chat UI for OpenClaw".
- `MingShou-bot/openclaw-plugin-deepseek-search` (16:28Z) — DeepSeek native web-search provider
  plugin for OpenClaw's managed `web_search` tool.
- `agentteams-group/agentteams-harness-openclaw` (08:57Z) — AgentTeams integration harness
  (scaffold only, implementation pending).
- `openclaw-oauth` (jungin-kim), `openclaw-fatfish` (Bigesila-B, SnowLuma QQ bot, early alpha),
  `openclaw-google-access` (Calendar/Drive), `openclaw-deepseek-peak-widget` (DeepSeek
  peak/off-peak pricing sidebar), `openclaw-issue-195087-proof` (screenshots/harness output for
  PR #195087), `openclaw-101`, `openclaw-pabbloard` (first Spanish-language connection attempt).

### 4.6 GitHub velocity
`q=openclaw created:>2026-11-07T09:28:00Z` → **36 new repos** (yesterday 46, day before 83) and
**0 repos with ≥1 star**. The mirror-farm signal remains dormant (no `genpark-personal-agent`
repos created in window).

---

## 5. Showcase — unchanged (byte-exact)

`https://openclaw.ai/showcase` fetched 2026-11-08: **150,922 B**. Baseline
`tmp/showcase_2026-11-05.html` = 149,961 B. After removing the 6 newly added `nofollow`
attributes, **the two documents are byte-identical** (verified by direct string comparison).
Still 79 cards, no new or removed entries. The only delta is six `rel="nofollow"` attributes on
Discord links — a server-side SEO change, not content.

---

## 6. External press / video — theclawreport catches up, but its dates are wrong

`https://www.theclawreport.com/` fetched 2026-11-08 (92,770 B). Yesterday's two gaps are now
closed:
- **Multiplayer** — now covered: "OpenClaw Multiplayer Lands Shared Agents as 2026.11.1 Patch
  Notes Fix False Refusals and Stuck Gateway Settings", item dated 2026-11-06,
  https://senx.ai/openclaw-news/2026-11-06-openclaw-news
- **Model catalog + self-recovery** — item dated 2026-11-07: "OpenClaw Stops Making Model Launches
  Wait for a Release as Main Teaches Wedged Gateways to Restart Themselves",
  https://senx.ai/openclaw-news/2026-11-07-openclaw-news

**Video dates are demonstrably wrong.** The report labels its video items with absolute upload
dates ("November 6, 2026", "November 7, 2026"), derived from the relative labels on
`https://openclaw-hub.com/videos`. YouTube's own metadata (fetched from the watch pages on
2026-11-08) contradicts them by ~9 months:

| video | title | hub / theclawreport label | YouTube `uploadDate` |
|---|---|---|---|
| U8kXfk8enrY | Clawdbot/OpenClaw Clearly Explained (Greg Isenberg) | "2 days ago" / Nov 6, 2026 | **2026-01-27T11:00:34-08:00** (343,948 views) |
| 8lF7HmQ_RgY | The creator of Clawd: "I ship code I don't read" (The Pragmatic Engineer) | "2 days ago" / Nov 6, 2026 | **2026-01-28T09:33:46-08:00** (533,117 views) |
| MUDvwqJWWIw | I Played with Clawdbot all Weekend (Matthew Berman) | "4 days ago" / Nov 4, 2026 | **2026-01-25T16:19:09-08:00** (410,884 views) |
| kFwzPJZoZoc | 8 Practical OpenClaw Use Cases (Samin Yasar) | "2 days ago" | **2026-01-28T04:34:27-08:00** (156,977 views) |
| GLwTSlRn6-k | Why People Are Freaking Out About Clawdbot (Matt Wolfe) | "3 days ago" | **2026-01-26T18:27:28-08:00** (311,296 views) |
| _6D4shWDnEc | Clawd Bot Explained In 5 mins (Eric Before) | "4 days ago" | **2026-01-26T08:22:10-08:00** (164,879 views) |
| Qkqe-uRhQJE | ClawdBot … how to set it up (Alex Finn) | — | **2026-01-24T11:27:52-08:00** (1,117,413 views) |

`s-dpN0zEUjk` ("63 insane ClawdBot use cases", Duncan Rogoff, 11K views, hub label "1 day ago",
theclawreport "November 7, 2026") could not be date-verified (consent wall on the watch page),
but oembed confirms title/author, and this video was **already documented on 2026-08-18/20**
(`daily_reports/2026-08-20.md`, `daily_reports/2026-09-22.md`) — so it is not new either way.

→ **Conclusion: the entire "new video" signal on both openclaw-hub.com/videos and
theclawreport.com is unreliable — every checkable video is a January 2026 upload.** No video in
this window is a genuine new use-case showcase. (Caveat: `kFwzPJZoZoc` and `s-dpN0zEUjk` were
absent from yesterday's report, so they are new *to the corpus*, but their underlying uploads
are old.)

Also noted: theclawreport still carries the stale headline version string "OpenClaw ships
v2026.10.10" alongside items about 2026.11.1, and it still links `openclaw-hub.com/videos` with a
"last 14 days" window (Oct 25–Nov 8) that, per the table above, contains only January uploads.

---

## 7. OpenClaw Radar — no new use-case articles in window

`https://openclawradar.com/sitemap-en.xml` (5,174 URLs). Only **two** entries have `lastmod` in
the window, both `2026-11-07`: `openclaw-cron-isolated-sessionkey-bug-fix` (already known) and
`claude-code-v2-1-319-auto-mode-mcp-tasks-permissions`. Every `/category/use-cases` article
visible on the use-cases index is older (2026-09-30 → 2026-10-27, e.g. pest-control technician
setup 10-27, "Yolo mode €20/month budget" 09-30, war-radar pipeline 10-03, DLSS modding 10-18,
Plaud subscription replacement 10-04, Telegram bot on a 12-year-old PC 10-24). No new in-window
use-case piece — the most concrete community use-case corpus (a mix of cost and deployment
numbers) has been static for ~11 days.

---

## 8. Community Pulse

**Working well**
- Users write long, structured **field notes** rather than one-liners: the Linux-Mint
  dual-install gateway post (exit code 78, systemd unit rewrite, config-version fence) is
  genuinely reusable triage material.
- Multi-agent creative/simulation use is real and self-hosted: a 100–150-agent character
  simulation running on a 24 GB Mac.
- The community debugs each other quickly and correctly (the Ollama `127.0.0.1`-inside-a-container
  correction by a moderator is exactly right).
- Vendors are shipping **bilingual** (EN/中文) skills and honest scope disclaimers instead of
  hype — the powder-coating README explicitly disclaims machinery control.

**Problems**
- **Install-path chaos**: three coexisting OpenClaw installs (npm CLI / AppImage desktop / Snap)
  fighting over one systemd user unit is a reproducible foot-gun with a non-obvious error
  (exit 78).
- **Windows is the recurring performance cliff**: multi-minute startup and boot failures on
  native Windows; the community's own diagnosis is "OpenClaw targets Linux — use WSL".
- **ClawHub publication pipeline stalls**: a compliant, script-free, secret-clean skill
  (powder-coating) was blocked for hours with "Security check: could not complete" and remains
  unpublished — a supply-chain-safety mechanism that produces false negatives for legitimate
  authors, who then re-post twice (topics #396/#397).
- **Competitive displacement**: a five-month power user now considers ChatGPT Dots / Instinct
  superior on autonomy while conceding OpenClaw wins on tools and connectivity.
- **The registry is drifting toward vendor catalogues**: 21 of 94 new skills are one vendor's
  paid-endpoint wrappers; a further 7 are one Japanese compliance vendor; monetisation-skills
  ("how to earn money") appear as a category in itself.
- **Third-party curation dates are unusable** — video "upload date" claims are off by ~9 months.

**Interesting**
- `visibility-monetize` / `visibility-build` — an explicit, ranked playbook for turning an agent
  into a paid listing across API plans, marketplaces, sponsorships and pay-per-call.
- `brainchain-worker` — an agent that is *hired and paid per accepted task* in USDG.
- `agentic-kingdoms` — an MMO where agents and humans share persistent kingdoms via MCP, with
  AI-tagged accounts visible to players.
- `agent-behavior-baseline` + guard-hardening/instruction-slimming/rule-enforcement — the first
  coherent **behavioural regression-testing kit** for agents (SQLite trace store, stable eval IDs,
  constraint cards).
- `AroonKumarr/openclaw-career-dashboard` — 37 verified ATS submissions in ~2 days with
  per-application audit trails, captcha/ToS boundaries respected ("paused per safety rules").
- Powder-coating skill = first **industrial equipment vendor** (Dongguan Paint Brothers) using
  OpenClaw knowledge delivery for its own machinery.

---

## 9. Caveats & data gaps

1. **Reddit comments are heavily rate-limited**: `comments/<id>.json` → HTTP **403** for every
   attempt; per-post `comments/<id>.rss` returned **429** on most attempts (2 of 4 succeeded with
   `&sort=confidence`, after retries). Comment counts and comment content for
   `1xqudt7` and `1xqpmh0` are **unknown, not zero**.
2. **Only 4 Reddit posts in window** (vs 2 yesterday) — the feed is quiet; the 50-post feed limit
   did not bind, but Reddit timestamps come from the RSS `updated` field (edit time, not creation).
3. **ClawHub pagination is broken** (identical 229,059 B response for `offset=200`; only 60-record
   overlap between the two sort orders) → **94 is a lower bound**; a true in-window count could be
   materially higher. `sortBy=createdAt` vs `sort=newest` are not interchangeable and the previous
   day's "≥190" figure came from a different ordering with a 150-skill single-publisher flood —
   the week-over-week comparison is therefore directional, not exact.
4. **`flatcap-openclaw` is advertised but not resolvable**: plugin API 404, absent from 800
   enumerated plugins out of a reported 2,593 total. The install command in the Reddit post could
   not be verified as live.
5. **YouTube upload dates were verified for 7 of 8 videos**; `s-dpN0zEUjk` returned a consent
   wall (no `uploadDate`), so its date rests on prior-corpus documentation (2026-08-18).
6. **Discourse `latest.json` returns 30 topics** (hard lower bound); new topic IDs were probed
   individually only above the previous high-water mark 392 (393 and 395 → 404).
7. **All "ROI-adjacent" numbers remain self-reported and unverified**: the 37 ATS submissions are
   corroborated only by the repo's own JSON audit trail (confirmation URLs, OTPs); the SaaS
   deployment (#311) is explicitly proprietary; the marketing framework ships synthetic data;
   BrainChain/looot/LinkDigest payments are described but no realised revenue is published.
8. **Discord and X/Twitter were not accessible** — the richest deployment channels remain dark.
9. Two web_search calls were used (both successful); one earlier attempt in this run hit
   DuckDuckGo bot-detection. Search results were dominated by **recycled SEO content** and were
   excluded: `tldl.io` (datePublished 2026-02-23, modified 2026-10-21),
   `openclawconsult.com` (December 11, 2025), `solvea.cx` (last updated July 10, 2026),
   `crewclaw.com` (May 21, 2026), plus `latenode.com`, `contabo.com`, `nocode.mba`,
   `greennode.ai`, `kilo.ai`, `aimaker.substack.com` — none dated inside the window.
10. The Radar use-case corpus has not added a new article since ~2026-10-27, so its "static for
    ~11 days" observation is a lower-bound freshness statement, not proof of no community activity.

---

## 10. Source list (fetched 2026-11-08)

| # | URL | Status |
|---|---|---|
| 1 | https://www.reddit.com/r/openclaw/new/.rss?limit=50 | OK (129,178 B) |
| 2 | https://www.reddit.com/r/openclaw/comments/1xqudt7/.rss?sort=confidence | 429 (OP only, one earlier success) |
| 3 | https://www.reddit.com/r/openclaw/comments/1xqpmh0/.rss?sort=confidence | 429 ×3 |
| 4 | https://www.reddit.com/r/openclaw/comments/1xqe4o8/.rss?sort=confidence | OK (10,215 B, 12 entries) |
| 5 | https://www.reddit.com/r/openclaw/comments/1xq82op/.rss?sort=confidence | OK (3,291 B, 1 entry) |
| 6 | https://community.openclaw.ai/latest.json | OK |
| 7 | https://community.openclaw.ai/t/394/ , /396/ , /397/ , /311/ , /381/ , /392/ | OK |
| 8 | https://clawhub.ai/api/v1/skills?limit=200&sortBy=createdAt | OK (229,059 B) |
| 9 | https://clawhub.ai/api/v1/skills?limit=200&sort=newest | OK |
| 10 | https://clawhub.ai/api/v1/skills?limit=100&sortBy=downloads | OK |
| 11 | https://clawhub.ai/api/v1/plugins?limit=100 (+cursor) | OK (totalCount 2,593) |
| 12 | https://clawhub.ai/api/v1/plugins/cheycron/flatcap-openclaw | 404 Not found |
| 13 | https://openclaw.ai/showcase | OK (150,922 B) |
| 14 | https://www.theclawreport.com/ | OK (92,770 B) |
| 15 | https://openclaw-hub.com/videos | OK (20,913 B) |
| 16 | https://www.youtube.com/watch?v={U8kXfk8enrY,8lF7HmQ_RgY,MUDvwqJWWIw,kFwzPJZoZoc,GLwTSlRn6-k,_6D4shWDnEc,Qkqe-uRhQJE} | OK (metadata) |
| 17 | https://www.youtube.com/watch?v=s-dpN0zEUjk | consent wall (title via oembed) |
| 18 | https://openclawradar.com/sitemap-en.xml + /category/use-cases | OK |
| 19 | https://api.github.com/search/repositories?q=openclaw+created:>2026-11-07T09:28:00Z | OK (36 results) |
| 20 | https://github.com/AroonKumarr/openclaw-career-dashboard (+ applications.json) | OK |
| 21 | https://github.com/Tomas-Corza/marketing-openclaw-ai | OK |
| 22 | https://github.com/yangjianwei281-star/powder-coating-parameter-tuning | OK |
| 23 | https://github.com/vangie/ai-passport-openclaw | OK |
| 24 | https://www.qxdcoating.com/article/ai-powder-coating-skills-rotary-cup-parameter-guidance.html | OK (44,445 B) |

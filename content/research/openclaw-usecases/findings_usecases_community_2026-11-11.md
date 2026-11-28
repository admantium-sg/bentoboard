# Community Findings — OpenClaw use cases, showcases & real-world deployments
## Task date: 2026-11-11 · Window: 2026-11-10T09:28:00Z → 2026-11-11T09:28:00Z
### Method note: synthesis-only pass over preserved local captures

This file was **reconstructed by a synthesis-only pass** over raw captures preserved in
`tmp/2026-11-11/` (originally fetched by an earlier community subagent that died to a
context compaction before writing its own findings file). No new network calls were made
for this document; every number below is computed from the local captures and is
reproducible from them. Where a count could not be derived from local data it is marked
**UNKNOWN**, not zero.

---

## Executive summary

1. **The window's dominant community story is the "Fix Weeks" pivot to shipped templates.**
   In-window Discourse traffic is concentrated on the Templates Showcase (topic #415), and
   Reddit's highest-signal in-window thread is the v2026.11.3 release discussion. Both
   point the same direction: the community moved from "I built an agent" toward "here is a
   reusable template for a specific job."
2. **New Reddit posts in-window: 5** (baseline 4). Of the five, only two are genuine
   *deployment* accounts — an Ant Ling custom-provider setup and a skills-based research
   agent. The rest are release chatter and one misdiagnosis (a Claude "hijack" scare that
   is a Windows terminal-tab artifact).
3. **Discourse: 3 new topics in-window (#421, #422, #423)** — down from 5 on 2026-11-10.
   Two of the three are **Tencent-hosted Shenzhen events announced by a community member
   (JasonOClaw)**: a hackathon/workshop on Dec 4–5 and ClawCon Shenzhen on Dec 6. This is
   the strongest third-party-event signal in the series and it originates in the community
   channel, not the official blog.
4. **ClawHub: 149 new skills in-window from 47 publishers** — the highest in-window count
   observed so far, and a sharp reversal of yesterday's "zero new skills" reading.
   **Concentration is extreme: the top publisher holds 32% of all new skills.**
5. **GitHub: 46 new repos, max 1 star** — adoption signal effectively nil; the core repo
   gained +45 stars in the same window.
6. **The showcase page is byte-identical to baseline** (150,922 bytes) — no new showcase
   entries were published in-window.

---

## Reddit (r/openclaw)

### New posts in-window: 5 (baseline 4)

| ID | Author | Published (UTC) | Theme | Permalink |
|---|---|---|---|---|
| 1xslj9l | u/Jaswanth_011 | 2026-11-10T12:23:03 | Deployment: multi-source research agent (Reddit/X/TikTok posts, Google/AI-answer presence, founder & editor discovery) using a Monid skill file | https://www.reddit.com/r/openclaw/comments/1xslj9l/been_adding_more_skills_to_our_openclaw_agent/ |
| 1xslutv | u/DraxNation | 2026-11-10T12:39:06 | Deployment: Ant Ling Ling-3.2-flash via `openclaw onboard` custom provider (OpenAI-compatible, base URL `api.ant-ling.com/v1`), native text/image/video input | https://www.reddit.com/r/openclaw/comments/1xslutv/ant_ling_now_documents_ling32flash_setup_through/ |
| 1xstiwd | u/KobyStam | 2026-11-10T17:49:08 | Release: relay-ai "Free Model Pool" — multi-provider free-model routing with tool-call verification and auto-failover for OpenClaw | https://www.reddit.com/r/openclaw/comments/1xstiwd/i_added_a_free_model_pool_with_toolcall/ |
| 1xt16s9 | u/Vast_Lawyer_5521 | 2026-11-10T22:48:10 | Troubleshooting/misdiagnosis: user believes "Claude is sabotaging" the Gateway because the terminal tab title changed to `claude` | https://www.reddit.com/r/openclaw/comments/1xt16s9/claude_could_be_sabotaging_and_preventing_the/ |
| 1xt7zlb | u/hannesrudolph | 2026-11-11T04:05:22 | Release: v2026.11.3 patch summary (56 PRs, 36 contributors; update recovery, backup timeouts, security fixes) | https://www.reddit.com/r/openclaw/comments/1xt7zlb/openclaw_v2026113_patch_fixes_update_recovery_and/ |

### Comment sentiment (in-window, only where the comment feed was retrievable)

| Post | Comments retrieved | Notes |
|---|---|---|
| 1xslj9l | 4 | **The strongest deployment discussion of the window.** One commenter (u/paulsande) reports a concrete production pattern: *"I have mine pull the public releases for 17 of our customers, competitors, and landlords and create a 14 slide 'State of the Industry' deck."* u/Odd-Act7860 supplies the technical refinement (compare extracted page text, not raw HTML; suppress nav/footer edits; surface diffs in pricing/docs/release-notes). u/monityAI pitches a competing MCP server (monity•ai) plus changedetection.io. u/Typical_GeorgeJungle proposes weekly competitor pricing/changelog/docs watching with a diff summary. |
| 1xt16s9 | 6 | Overwhelmingly a **misdiagnosis thread**. u/Budget_Complex_3132 gives the likely explanation: on Windows terminals the tab title reflects whatever child process is running, so an OpenClaw-launched `claude` subprocess flips the title. u/kiwidog8 notes Codex and Claude have their own integrations in OpenClaw. u/Indubioproreo_Dx reports a related real symptom: *"my pipeline was broken cause claude had 570 active sessions... they dont go in archiv or close"*. u/Helpful_Jelly5486: *"It runs its own Claude code inside of openclaw… it hides its session reasoning and outputs."* No evidence of a genuine Claude process hijack was produced. |
| 1xslutv | 0 | Comment feed retrievable but empty → **UNKNOWN engagement, not zero.** Post asks whether anyone has used the provider with an existing OpenClaw workflow needing visual input — unanswered. |
| 1xstiwd | 0 | Same — **UNKNOWN.** |
| 1xt7zlb | 0 | Same — **UNKNOWN.** |

### Caveats — Reddit
- The comment feed for **1xslj9l was initially captured at 0 bytes and later refetched successfully (7,250 bytes, 5 entries)**; the synthesis reflects the refetched state. The earlier "blocked" note for this post in the run log is therefore superseded.
- A second Reddit feed fetch (`reddit_new2.xml`) returned **0 bytes** — so the *listing* is from the first successful capture and may under-count in-window posts that appeared after it was taken.
- Engagement counters (upvote/comment counts) were **not recoverable** from the RSS payload; comment *presence* was counted instead. **No engagement number in this file may be read as adoption.**
- No Reddit ROI claim in-window is attributable to a named source; the only numeric performance statement ("17 of our customers, competitors, and landlords", "14 slide deck") is a **self-reported workflow description, not a measured outcome**, and is excluded from headline findings.

---

## Discourse (community.openclaw.ai)

### New topics in-window: 3 (baseline 5)

| # | Title | Created (UTC) | Posts | Views | Author |
|---|---|---|---|---|---|
| 421 | Claw Cafe Hackathon & Workshops 黑客松与工作坊 — Shenzhen | 2026-11-10T19:51:11 | 1 | 8 | JasonOClaw |
| 422 | ClawCon Shenzhen 深圳｜Main Event 龙虾嘉年华 | 2026-11-10T19:51:14 | 1 | 7 | JasonOClaw |
| 423 | Denying intent disables the native Codex GitHub plugin | 2026-11-10T23:05:45 | 2 | 12 | Saul_Burgos |

URLs: https://community.openclaw.ai/t/421/ · https://community.openclaw.ai/t/422/ · https://community.openclaw.ai/t/423/

### The Shenzhen event pair (421, 422) — the window's most notable community-authored signal

Both topics were posted by **JasonOClaw** within 3 seconds of each other (19:51:11Z / 19:51:14Z),
suggesting a single announcement push rather than organic discussion.

- **Claw Cafe Hackathon & Workshops — Shenzhen**, **Dec 4–5, 2026**, Fri 13:00–22:00 / Sat 10:00–18:30
  China Standard Time (UTC+8). Location: Shenzhen, exact venue via registration. Registration via Luma.
  **Hosted by Tencent, with the OpenClaw team building alongside participants.** Two tracks:
  *Software/Skills* (build agent workflows and OpenClaw skills, **"No coding required — creators,
  designers, operators and first-time builders are welcome"**) and *Hardware* (electronics/robotics
  beginners welcome, equipment for selected participants subject to availability). Friday includes
  build time and a "Build-A-Claw" night; Saturday brings workshops, lightning talks, panel
  discussions and project demos.
- **ClawCon Shenzhen — Main Event**, **Sunday, Dec 6, 2026**, 12:30–18:00 CST. Nanshan, Shenzhen.
  Three areas: Main stage (keynotes, open models, agents, embodied AI), Industry stage (builder
  stories, industry conversations, live demos), and a Marketplace + Clinic where makers help with
  **installing OpenClaw, troubleshooting setups, and improving agents**.

**Why this matters:** this is the first time in this series that a **large-vendor-hosted physical
event** is announced *through the community channel*. It is a genuine deployment-adoption signal —
onboarding infrastructure for a non-technical audience in a new geography. It is **not** an
official-blog announcement, and the OpenClaw blog/press feed shows no corresponding post.

### Topic 423 — "Denying intent disables the native Codex GitHub plugin" (the only substantive bug report)

- **Reporter:** Saul_Burgos. Environment: OpenClaw **2026.10.5** (1b58cb9), macOS 26.6.2, npm package
  in a managed Node install, Gateway on a separate Mac mini on the LAN, OpenAI via the native Codex
  app-server harness, interactive OpenClaw TUI chat, native GitHub plugin, bundled Memory Core.
- **Repro:** with `tools.deny: ["intent"]` set on the agent, a fresh interactive chat using the native
  Codex GitHub plugin for a **read-only repository metadata lookup** fails. Expectation: the deny
  list blocks the standing-intent tool while still allowing the already-enabled GitHub plugin.
- **Response (2026-11-11T02:04:28Z), jjjhenriksen:** *"This looks like it's a security boundary gone
  wrong. My claw and I are investigating why this happened — thank you for the report."*
- **Assessment:** a `tools.deny` entry appearing to disable **unrelated** plugin tooling is a
  **privilege-boundary** defect, not a cosmetic one. The maintainer response was ~3 h after the
  report and no fix is confirmed. Treat as **open**; topic score 10.4 on first post (highest score of
  any in-window Discourse topic).

### Topics updated in-window (activity without new topics)

- **#415 OpenClaw Templates Showcase** (created 2026-11-09, 3 posts, 27 views, last 2026-11-11T01:51Z)
  — the **substantive use-case content of the window**:
  - patrickerichsen's **"ClawHub Competitor Watch"** template: onboarding describes your company and
    up to **three competitors**; it watches their public product, pricing and release pages and produces
    a **weekly brief explaining meaningful changes with links to the evidence**. Agent/personality:
    "a concise research analyst". Uses parallel fetching + competitor-research comparison against
    previous observations. Explicitly framed as the first entry of a **"Focus Weeks on Templates"** push.
  - AmelioMansour's **"MyFitnessClaw"** template (2026-11-11T01:51Z): a nutrition/fitness companion
    built in January 2026 — tracks calories/macros, **reads DoorDash/Uber Eats receipts from email**,
    looks up published nutrition facts online, and accepts **food photos** as input.
  - patrickerichsen's opening post asks the community to share Templates they have built — and
    AmelioMansour's reply explicitly asks people to use **"ClawHub Templates"** as the distribution channel.
- **#418 OpenClaw 2026.11.1: How to safely archive a stale session while Gateway is stopped?** (2 posts,
  7 views, last 2026-11-10T15:49Z) — an **operational-scale** deployment thread: the user has a
  **~23 GiB state directory with ~15 GiB free**, a verified state-only backup archive, and an isolated
  extraction/inventory check; they are relocating state to an external drive via `OPENCLAW_STATE_DIR`
  and want to know whether Doctor's original-state capture, migration recovery snapshots and temporary
  SQLite files can also live externally, and how much free space each volume needs. A maintainer
  (joe) corrected an earlier version recommendation: *"2026.11.1 doesn't include the fix I referenced.
  It's present in 2026.11.5-beta.1, but I haven't confirmed a stable release containing it yet."*
  The user separately observed that the published stable **2026.11.2** npm package appears to contain
  PR #178126. The thread ends with the user following up unanswered → **still open**.
- **#404 GitHub CLI (gh) missing on managed Gateway — system authorization fails** (5 posts, 119 views,
  last 2026-11-11T01:28Z) — the **highest-viewed in-window topic**; a managed-Gateway packaging gap.
- **#385 Safe update from 2026.10.3: SQLite worker queue capacity reached during snapshot** (6 posts,
  40 views, last 2026-11-10T15:49Z) — continued fallout from the snapshot-queue failure class that
  also produced issue #196811 in this window.

### Caveats — Discourse
- The topic listing (90 topics enumerated) comes from **two paginated captures** (`d1.json`, `d2.json`);
  topics created between the two snapshots would be double-counted or missed. Topic IDs 421–423 were
  cross-checked against individual snapshots (`t421.json` etc.).
- **Views and scores are Discourse's own counters and are NOT adoption.** They are reported for
  completeness only; topic #421 with 8 views and topic #423 with 12 views are not "more adopted"
  than each other in any meaningful sense.
- #421 and #422 each have exactly **one post and no replies** — the announcement was posted but not
  yet discussed. Any downstream engagement is unknown.
- The Chinese-language corpus repo (`saraivabr/awesome-openclaw-brasil`… see GitHub section) is
  Portuguese-Brazilian, not Chinese; the Chinese corpus (`AIPMAndy/awesome-openclaw-use-cases-cn`,
  commit `3cb48edb45cf6ec733abd4720d747621726cd385`) was **not re-fetched in-window** — its state is
  carried over from the 2026-11-10 run and is **not** a new finding.

---

## ClawHub — 149 new skills in-window (baseline 108 total skills / 45 publishers)

**In-window count: 149 skills from 47 publishers.** Split by day: **102 on 2026-11-10, 47 on 2026-11-11.**
Timeline runs from 2026-11-10T09:38:26Z to 2026-11-11T08:56:13Z — the whole window is covered with no gap.

### Publisher concentration — the headline caveat

| Publisher | Skills | Share |
|---|---|---|
| romeoseo | 48 | 32.2% |
| haiyangchenbj | 9 | 6.0% |
| docspring | 8 | 5.4% |
| jjjhenriksen | 6 | 4.0% |
| shakeelamjid | 5 | 3.4% |
| vargai | 5 | 3.4% |
| holgergruenhagen | 5 | 3.4% |
| catsmansion | 5 | 3.4% |

**Top-4 publishers = 47.7% of all in-window skills.** One account (**romeoseo**, 48 skills) alone
produced nearly a third of the day's catalogue. `romeoseo`'s entries are **SEO-business tooling**
(sponsored-placement vetting, parasite-SEO safety checks, content/brief generation) — a pattern, not a
user base. **The raw 149 is not a signal of 149 independent new use cases.**

### What the new skills actually do (representative, by theme)

- **Social publishing, Chinese ecosystem:** `weipaiban` (WeChat official-account interactive SVG
  articles — six interaction types incl. parallax, coloring, scoring quizzes, one-of-four branching),
  `qq49371114/xiaohongshu-viral-topic-analyzer` (Xiaohongshu topic/trailer analysis with title formulas
  and post strategies), `green1515/xuegao` (learns from historical video scripts and Word docs, minimizes
  edits, improves from human revisions), `j3ffyang/md-to-linkedin` (Markdown → LinkedIn rich text),
  `j3ffyang/xps-plex` (project a web page fullscreen onto a second laptop over SSH).
- **Chinese-internet deep search:** `haiyangchenbj/deep-search-engine` — multi-channel scan
  (Google News RSS `site:` targeting, Baidu, Sogou WeChat, media pool, overseas GDELT/GNews EN/HN) with
  three-element full-text verification (title + publish date + body fingerprint). This is a
  genuine, technically detailed research-automation skill.
- **Enterprise SaaS integration (8 skills from docspring):** DocSpring Page Designer + 4.x API
  integration for programmatic PDF generation from JSON templates.
- **Trading/market data (5 skills from shakeelamjid, "AgentReeve" branding):** `btc-intelligence`,
  `btc-market-brief`, `btc-derivatives-check`, `btc-similar-setups`, `hyperliquid-whale-watch`
  (top-40 Hyperliquid accounts, live deltas, open-interest/wall detection).
- **Agent reliability / safety primitives (tdw8147-crypto):** `resumable-handover` (versioned handover
  with one actionable resume point), `unknown-delivery-reconciliation` (reconcile after an ambiguous
  receipt), `reactive-form-input` (form value vs. validation disagreement). These are **meta-skills about
  agent reliability**, not end-user applications — a notable new category.
- **Creative tooling:** `jhauga/adobe-after-effects-scripting` and `-integrations` (ExtendScript,
  expressions, build/package/install/debug), `dong845/vibe-ledger` (explain an AI-built app to its
  author and check it at the same time — draws a project map), `generalberrys/berrys` (image/video/audio/ads).
- **Developer ergonomics:** `Fnctn-Inc/portable-agent-skill-check` (validate Agent Skills metadata,
  links, directory boundaries), `Thomaszhou22/context-diet` (find out why an agent feels slower and
  dumber — scans system prompt, skills, memory).
- **Customer support:** `asyntai/asyntai-ai-support-agent` and `-ai-chatbot` (run an Asyntai support
  agent from OpenClaw via the Asyntai MCP server).
- **Productizing the "vibe-coded" workflow:** `haiyangchenbj` shipped a cluster —
  `source-doc-slimming`, `project-archive-cleanup`, `product-pricing-research-calibration`,
  `private-github-repo-upload`, `pain-opportunity-radar`, `mobile-reading-export`,
  `localization-release-copilot`, `doc-example-reproducibility-check`.
- **macOS control:** `manuaudio/macos-cli` (Calendar, Reminders, Contacts, Mail, Messages, Notes from
  the terminal).
- **Wallet safety:** `nzdsf2-gif/relayshield-metamask-firewall` — screens a MetaMask Agent Wallet action
  before execution for agents that trade, swap, bridge or pay.

### ClawHub caveats
- **⚠️ DIRECT CONFLICT WITH THE PLATFORM PASS — UNRESOLVED.** The platform subagent paginated the same
  endpoint and concluded **ZERO** new skills in-window (max `createdAt` 2026-11-10T09:17:59Z, ten minutes
  before the window opens). The community capture contains **149** items, all with `createdAt` strictly
  inside the window, with continuous coverage. Both numbers are reported; neither has been discarded.
  The most likely explanation is that the platform pass hit a stale/cached page of the
  `sort=createdAt&order=desc` listing rather than a genuine ingestion pause — but this was **not verified**,
  and the direction matters: it flips yesterday's "publishing pause" narrative into "the busiest day in
  the series".
- ClawHub's API exposes **no total-count field**, so both the 149 and the 108 baseline are enumerations
  of paginated listings, not authoritative totals.
- **Engagement counters are unusable and are excluded.** Skills created 2026-11-09 carry 85–102
  "downloads" — implausible for one-day-old skills, which indicates the counter reflects catalogue or
  internal traffic rather than installs. **These are not adoption numbers.**
- The 48-skill `romeoseo` batch means "publisher count" (47) is also misleading: strip it and the
  organic publisher base is far smaller.
- `haiyangchenbj`'s 9 skills all landed within a ~4-minute window (08:31–08:36Z) — a single batch upload
  session, not nine independent contributions.

---

## GitHub — 46 new repos in-window, max 1 star

- **total_count 46**, all 46 retrieved. **Max stars = 1**, shared by `finettt/clawc`
  ("Another one 'smallest' and 'fastest' agent"), `Fnctn-Inc/portable-agent-skill-check`, and
  `Thomaszhou22/context-diet`. Every other new repo has **0 stars**.
- **10 of 46 have a null description** and appear to be empty/parking repos — spam share is
  **at least ~22%**, which makes any "promo-keyword" estimate unreliable in the other direction.
- **Notable new builds (all 0–1★, extremely early):**
  - `revere-video/openclaw-revere` — *"see your cameras from your agent. Read-only, no code runs"*
  - `gregretkowski/freecad-openclaw` — FreeCAD CAD automation (null description)
  - `bright-cn/openclaw-plugin` — Bright Data plugin: web search, bot-detection-bypassing crawler,
    browser automation, Amazon/LinkedIn/Instacart
  - `jimmyplup/openclaw-synap-provider` — Synap/Lintrra model provider
  - `jjjhenriksen/openclaw-themes` — Control UI theme families, starting with five Christmas themes
  - `xia88niuniu/openclaw-workspace` — home page + privacy policy for a personal OAuth app
  - `postdovo/postdovo-openclaw`, `qvms/openclaw` (null), `GCUSMS-AI-ProJect/OpenClaw_Sub` (null)
  - `vectormindadv-hue/Openclaw-final` — description "Pentest pn andtoid" (garbled/parking)
- **Off-window but captured:** `saraivabr/awesome-openclaw-brasil` — Portuguese-Brazilian community
  collection of real OpenClaw use cases, **0 stars**, created 2026-11-09T04:22:12Z, last pushed
  2026-11-09T04:22:18Z (i.e. **before** the window opened → not an in-window finding). README claims
  42 use cases; unverified.

### GitHub caveats
- **Max 1 star against the core repo's +45 stars in the same 24 h** is the real signal: **new-repository
  activity is essentially noise.** No new repo in-window shows any adoption.
- The GitHub search API returned `total_count: null` on several compound queries during this run;
  retries succeeded for this one. **Counts here are the best available, not certain.**
- Query pattern used: `openclaw created:>2026-11-10T09:28:00Z sort=stars`.

---

## Showcase & official surfaces — no change

- `openclaw.ai/showcase` — captured HTML is **150,922 bytes, byte-identical to the baseline**. No new
  showcase entries in-window.
- `openclaw.ai/rss.xml` (blog) — newest post remains **2026-11-06, "Use new models in OpenClaw without
  an update"**; before that 2026-11-05 "Shattering Silos with OpenClaw Multiplayer", then 2026-10-21
  "Come Build With Us: OpenClaw Focus Weeks". **Nothing new in-window.**
- `openclaw.ai/press` — newest item still 2026-06-30.
- **OpenClaw Radar** (`radar`) — the site's own article `lastmod` values cluster at **2026-02-07 →
  2026-02-24** and the use-cases page shows no dates after 2026-02-23, even though the sitemap index
  itself reports `lastmod` 2026-11-11. **The Radar article corpus appears frozen at February 2026.**
  No new Radar content in-window. (Note: the sitemap-index lastmod of 2026-11-11 is likely a rebuild
  timestamp, not new content — do not read it as a new article.)
- `openclaw.ai/blog` — newest post 2026-11-06.

---

## Use-case patterns worth carrying forward

1. **Template-first distribution is displacing prompt-first usage.** The Templates Showcase thread and
   the two Shenzhen events both assume a packaged artifact ("a template", "a skill", "a claw") rather
   than a from-scratch agent. patrickerichsen explicitly frames a **"Focus Weeks on Templates"** program
   and AmelioMansour routes new users to "ClawHub Templates" as the channel.
2. **The strongest concrete deployment of the window is a monitoring-and-diffing pipeline**, not a chat
   agent: competitor pricing/release watching with weekly briefs and evidence links, run over ~17
   organisations. That pattern appears **three times independently** — Reddit (u/paulsande), Discourse
   (#415 Competitor Watch), and ClawHub (`sponsored-placement-vetting`, `product-pricing-research-calibration`).
3. **Physical onboarding events are a new channel.** Tencent-hosted Shenzhen hackathon (Dec 4–5) plus
   ClawCon (Dec 6), announced through Discourse, explicitly targeting non-coders.
4. **Agent-reliability primitives are becoming first-class ClawHub categories** (resumable-handover,
   unknown-delivery-reconciliation, reactive-form-input) — a shift from "what can I build" toward
   "how do I not lose state".
5. **Model-provider breadth keeps widening** at the community edge: Ant Ling Ling-3.2-flash as an
   OpenAI-compatible custom provider (text/image/video + function calling + streaming), relay-ai's
   free-model pool across OpenRouter/NVIDIA NIM/Groq/OpenCode Go with tool-call verification and
   auto-failover, Synap/Lintrra as a new provider, and local models via Ollama.

---

## Sources

Local captures (all under `tmp/2026-11-11/`, originally `/tmp/oc111/`):
`reddit_new.xml`, `c_1xt7zlb.xml`, `c_1xt16s9.xml`, `c_1xstiwd.xml`, `c_1xslutv.xml`, `c_1xslj9l.xml`,
`d1.json`, `d2.json`, `discourse.json`, `disc_p1.json`, `t385.json`, `t404.json`, `t415.json`,
`t418.json`, `t421.json`, `t422.json`, `t423.json`, `clawhub_inwindow.json`, `clawhub.json`, `gh.json`,
`rss.xml`, `radar_sm.xml`, `radar_use.html`, `showcase.html`, `awesome_br.json`.

Live endpoints referenced:
- Reddit: https://www.reddit.com/r/openclaw/comments/1xslj9l/ · /1xslutv/ · /1xstiwd/ · /1xt16s9/ · /1xt7zlb/
- Discourse: https://community.openclaw.ai/t/421/ · /422/ · /423/ · /415/ · /418/ · /404/ · /385/
- ClawHub API: https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc
- GitHub search: https://api.github.com/search/repositories?q=openclaw+created:>2026-11-10T09:28:00Z&sort=stars
- Showcase: https://openclaw.ai/showcase · Blog: https://openclaw.ai/rss.xml · Press: https://openclaw.ai/press
- Repo: https://github.com/saraivabr/awesome-openclaw-brasil

## Caveats summary
1. **ClawHub in-window count is disputed** (149 here vs 0 from the platform pass) — unreconciled; both reported.
2. A prior community subagent **died to a context compaction** before writing its file; this document is a
   reconstruction from preserved raw captures, so the community data is **one generation older** than the
   platform data and no live re-verification was performed.
3. **Reddit engagement counters unavailable**; comment presence counted instead. No engagement metric here
   is adoption.
4. **`reddit_new2.xml` returned 0 bytes** — the listing may under-count in-window posts.
5. **Discourse listing spans two paginated snapshots** — same-day creation timing may be slightly off.
6. **Discourse views/scores are not adoption.** Topics #421/#422 have no replies yet.
7. **ClawHub API has no total-count field**; both the 149 and the 108 baseline are enumerations.
8. **ClawHub engagement counters are unusable** (85–102 "downloads" for one-day-old skills) and excluded.
9. **Publisher concentration is severe** (top-4 = 47.7%; romeoseo alone = 32.2%) — raw counts overstate diversity.
10. **GitHub spam share is at least ~22%** (10/46 null descriptions); keyword-based estimates are unreliable.
11. **GitHub max 1 star** across 46 new repos → no adoption signal.
12. **Showcase byte-identical to baseline**; blog/press/Radar unchanged (Radar article corpus frozen at Feb 2026).
13. **All ROI/impact claims in-window are self-reported and unattributed** — no first-party attribution exists.
14. **Discord and X/Twitter remain dark** (no bot token / no collection route) — deployment chatter on those
    channels is entirely unobserved.
15. `saraivabr/awesome-openclaw-brasil` and the Chinese corpus were **not re-verified in-window**.

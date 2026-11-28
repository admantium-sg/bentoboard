# Findings — openclaw-usecases / community + use cases — 2026-11-15

**Window:** 2026-11-14T09:28:00Z → 2026-11-15T09:28:00Z (24h rolling, ending at report time).
**Scope of this cut:** community sentiment, use cases, showcases, deployments, ROI metrics (Reddit r/openclaw, community.openclaw.ai Discourse, ClawHub skill marketplace, external press).
**Method note:** all Reddit/Discourse/ClawHub/news collection was done via `curl` against public RSS/JSON endpoints (no search budget consumed for the bulk of it). Raw captures live in `tmp/2026-11-15/community/` (subfolder used because a parallel platform agent was writing into the same parent `tmp/2026-11-15/`).

**Total in-window items found: 86**
- 2 Reddit posts (both with in-window comment threads)
- 2 Discourse topics with in-window activity (5 new posts total; **0 new topics**)
- 81 ClawHub skills created in-window
- 3 external press items published in-window (1 substantive + 2 syndications of the same release)

---

## In-window Reddit posts

Only **2** r/openclaw posts were published inside the window. Both are technical troubleshooting/cost posts; **neither is a use case, showcase, deployment, or ROI report.** This is a quiet window for the subreddit — the `/new` feed shows ~5.3 posts/day over the preceding 9.5 days (50 posts spanning 2026-11-05T04:06Z → 2026-11-14T16:59Z), so 2 posts in 24h is below-average volume for a weekend (2026-11-14 was a Saturday).

### 1. "Is anyone else having issues with OpenClaw agents unable to use web_search even though it's installed and enabled?"
- **Author:** u/Hot-Hope-3217 · **Posted:** 2026-11-14T16:59:48Z
- **URL:** https://www.reddit.com/r/openclaw/comments/1xw7bho/is_anyone_else_having_issues_with_openclaw_agents/
- **Substance:** Self-hosted on Docker on a Synology NAS, OpenClaw 2026.11.3, multiple agents. Agents could not access native `web_search` despite DuckDuckGo plugin installed/enabled, `tools.web.search.enabled: true`, `tools.web.search.provider: duckduckgo`, `tools.profile: full`, and agent-level `tools.allow` explicitly listing `web_search`. Gateway healthy, no OOM, no container restarts. Local Ollama `qwen3.5:4b` used in tested conversations. Agent's literal response: *"The web search tool is currently unavailable in this turn."*
- **Resolution (self-reported by OP, in-window):** migrated to the official browser-enabled image `ghcr.io/openclaw/openclaw:2026.11.3-browser` — *"The browser and DuckDuckGo plugins are now installed, enabled, and loading correctly."* Also had to add `web_search`, `web_fetch`, `browser` to agent tool permissions; separate Chromium startup issues needed additional troubleshooting.
- **Notable quotes:**
  - OP: *"OpenClaw has a separate official browser-enabled Docker image, which wasn't immediately obvious. After migrating to that image, I confirmed the browser and DuckDuckGo plugins were loading correctly and corrected the agent's tool allowlist... That was the key. That's why I shared this."*
  - u/yournameherePDX (answer that worked): *"Docker has a browser enabled OpenClaw and the standard OpenClaw container. I was manually installing the web_search tool every gateway reset before I figured that out."*
  - u/Aardvark-One: *"I've found websearch to be unreliable when using smaller models... When I was using a small 9b model, the agents didn't seem to detect all the tools available to them and I had to goad them into using them... You don't have that problem with larger LLMs."*
  - u/xX_GrizzlyBear_Xx (rude, but representative of tone): *"Nah bro. It's just you. Audit the setup and architecture."*
  - u/haderach_ram: *"Worth checking whether the plugin was enabled without a Gateway restart, that's a common cause of a tool showing as installed but not actually usable yet. There's also a new build out, v2026.11.5-beta.3..."*
- **Comment presence (NOT adoption):** 13 comments from 6 distinct non-OP commenters on the comment RSS feed (plus AutoModerator welcome + OP replies). Thread was also present in `/hot` and subreddit front-page feed. **Reddit RSS exposes no score/upvote/comment-count fields — comment presence is a floor for engagement, not an adoption metric.**

### 2. "When the route hops host mid session the cache starts over, keeping it on one"
- **Author:** u/aidenclarke_12 · **Posted:** 2026-11-14T10:44:51Z
- **URL:** https://www.reddit.com/r/openclaw/comments/1xvzh4n/when_the_route_hops_host_mid_session_the_cache/
- **Substance:** **The only hard cost/ROI number found in any community surface in this window.** Prompt cache is host-affine; a route hop re-bills the whole prefix as fresh input. Concrete figure cited: a 700k-token Kimi K3 context costing **~$2 per call when the cache misses vs ~$0.20 when it hits** — a ~10x penalty per call.
- **Practical advice given:** one API key per lab, or route through one host that carries every model so each keeps a warm cache (DeepInfra reportedly carries both K3 and DS V4.1 Flash); going direct to Moonshot and DeepSeek with two keys also works. Trade-off stated: *"pinning a provider with fallbacks off stops the hopping but takes failover away too, so a fallback that only kicks in on errors is the cheaper middle ground."*
- **Notable quotes:**
  - u/aidenclarke_12: *"someone posted a 700k kimi k3 context costing around $2 a call each time it hopped vs about $0.20 when it hit the cache"*
  - u/Sova_fun: *"The $2 vs $0.20 cache miss difference adds up fast. Does pinning to one provider for all models hurt failover too much?"*
  - u/aidenclarke_12 reply: *"not significantly tho"*
- **Comment presence (NOT adoption):** 2 comments from 2 distinct commenters. Low engagement — and note the $2/$0.20 figures are **second-hand ("someone posted")**, not measured by the poster.

---

## In-window Discourse topics

**Zero new Discourse topics were created in the window.** The max topic ID observed across `latest.json` pages 0–5 was still **450**, exactly the high-water mark from the previous run; IDs 451/452/453 return HTTP 404. Discourse activity in the window was entirely *replies to existing threads* — 5 new posts across 2 threads.

### Topic 428 — "macOS: approval binding rejects sandbox-exec + Python unittest before approval"
- **URL:** https://community.openclaw.ai/t/macos-approval-binding-rejects-sandbox-exec-python-unittest-before-approval/428
- **Created:** 2026-11-12T06:50:40Z · **In-window posts:** 4 (#3, #4, #5, #6) · **Total posts:** 6 · **Views:** 15 · **Likes:** 0
- **In-window posts:** #3 Mori_Kentaro 2026-11-14T20:31:58Z · #4 Mori_Kentaro 2026-11-14T23:59:38Z · #5 joe 2026-11-15T01:54:51Z · #6 Mori_Kentaro 2026-11-15T03:56:31Z
- **Who answered:** `joe` (community staff/AI responder, posts #5 in-window) replied to `Mori_Kentaro` (OP, enterprise-flavored operator).
- **Substance:** Enterprise macOS deployment blocking automated Python unit-test runs. `SYSTEM_RUN_DENIED: approval cannot safely bind this interpreter/runtime command` when running `sandbox-exec [profile denying network and file writes] /usr/local/bin/python3 -B -m unittest -v [test modules]`. OP's diagnostic follow-ups hit **two separate hard blockers**:
  1. **Approval binding** — the audit ledger *"doesn't retain the original command, working directory, or detailed binding failure"* (joe, #5), so the refused execution is not reconstructable retroactively.
  2. **Authorization / scope** — a node-targeted browser status check returned *"missing scope: operator.admin"*; exact-run audit inspection reports `identity_context_unavailable`, so the originating principal and its role/scopes cannot be identified. joe: *"The missing-scope error is an authorization restriction, not necessarily a browser problem. An existing authorized administrator would need to review the connection's permissions."*
- **Notable quotes:**
  - joe (#5, recommended read-only diagnostics): *"you can inspect the current configuration with: `openclaw exec-policy show --agent <id> --json` / `openclaw sandbox explain --agent <id> --json`. These won't reproduce the original execution context, but they can help identify policy restrictions"*
  - joe (#5, on not weakening security): *"I wouldn't recommend a blanket Python allowlist or disabling approval checks."* (from #2)
  - joe (#2, docker sandbox substitute): *"run the suite through OpenClaw's built-in Docker sandbox, configured with `network: "none"`, `workspaceAccess: "ro"`, and `readOnlyRoot: true`."*
  - Mori_Kentaro (#6): *"`sandbox explain` returned the current agent configuration: mode: off, scope: session, sessionIsSandboxed: false... with sandbox mode off we are not treating those as proof of active isolation... `exec-policy show` did not return the approval policy. It failed with an 'Unsafe fallback OpenClaw temp dir' error"*
- **Assessment:** highest-value in-window thread — it is the only **enterprise-governance** signal in the window, and it reads as a gap in auditability (missing binding reason, missing identity context) rather than a resolved deployment.

### Topic 450 — "Gateway MSIX contract mismatch with Windows Companion v2026.11.1"
- **URL:** https://community.openclaw.ai/t/gateway-msix-contract-mismatch-with-windows-companion-v2026111/450
- **Created:** 2026-11-14T08:29:37Z (pre-window) · **In-window posts:** 1 (#2) · **Total posts:** 2 · **Views:** 6 · **Likes:** 0
- **In-window post:** #2 `joe` @ 2026-11-15T01:48:31Z
- **Who answered:** `joe` (community staff/AI responder).
- **Substance:** Windows 11 x64, OpenClaw Windows Companion v2026.11.1 stable, Gateway installed from Microsoft Store. Connection fails with *"The installed Gateway MSIX does not expose Companion's isolated-session contract"*; browser control fails with *"Browser control authentication was blocked because the local listener owner could not be verified."* Node pairs/connects but `browser.proxy` calls fail. joe links it to tracked GitHub issue **openclaw/openclaw-windows-node#1691** and states *"There's no confirmed fixed Store update yet."*
- **Notable quotes:**
  - joe: *"Run `clawctl gateway-service restart`, then reconnect Companion. This may temporarily resolve the issue. If that fails, run `clawctl gateway-service status --json` and check whether `gateway.port` and `gateway.ownership` are present."*
  - joe: *"Please don't disable the browser ownership checks or replace the Store package with an unofficial build."*
- **Assessment:** a hard **blocker** on Windows Companion deployment — reproducible Store-distribution defect with no fix shipped as of the window.

---

## Explicit negatives / silent threads

### Watched Discourse threads that received ZERO in-window replies (13 of 15)
Re-fetched every watched topic's full JSON (`https://community.openclaw.ai/t/<id>.json`) and checked each post's `created_at` against the window. Post streams were verified complete (loaded posts == `stream` length == `posts_count` for all 15 topics — no pagination truncation).

| Topic | Title | Total posts | In-window replies | Last post |
|---|---|---|---|---|
| 356 | Scheduled Discord read fails: matching recorded creator origin | 10 | **0** | 2026-11-13T04:36:42Z |
| 385 | Safe update from 2026.10.3: SQLite worker queue capacity reached | 8 | **0** | 2026-11-12T14:43:58Z |
| 398 | Can I connect my Anthropic subscription? | 2 | **0** | 2026-11-12T16:42:34Z |
| 407 | Focus Week Nov 9th–Nov 15th, 2026 - Agent Templates | 3 | **0** | 2026-11-12T17:48:46Z |
| 424 | Codex native child continuation loses admitted parent tree after resume | 2 | **0** | 2026-11-12T16:38:34Z |
| 426 | OpenClaw + LM Studio (Windows) | 2 | **0** | 2026-11-12T16:37:29Z |
| 427 | Can OpenClaw dispatch coding tasks to Codex Cloud or Claude Code in the thread | 2 | **0** | 2026-11-12T16:41:45Z |
| 435 | Windows x64 version NotSigned | 2 | **0** | 2026-11-12T16:39:53Z |
| 440 | Windows: SERVICE_DEFINITION_UNKNOWN blocks direct-node Scheduled Task adoption | 1 | **0** | 2026-11-12T20:11:46Z |
| 443 | Hitting bug SqliteWorkerError: SQLite worker store capacity reached | 1 | **0** | 2026-11-13T02:28:39Z |
| 446 | Existing conversation locked: Provider review no longer matches the native thread | 2 | **0** | 2026-11-14T04:11:59Z |
| 448 | Two tools to help choose a local model for your hardware | 1 | **0** | 2026-11-14T02:36:05Z |
| 449 | What triggers a Memory Wiki write in isolated mode? | 2 | **0** | 2026-11-14T04:10:02Z |

Notably silent: **407 "Focus Week Nov 9th–Nov 15th, 2026 – Agent Templates"** — a templates/showcase thread whose own stated week *includes* the tail of this window, and which received no reply in-window. The community template-push surface produced no in-window traction. Also 440 and 435 (both Windows deployment blockers) sit at 0 replies, unaddressed.

### Other empty surfaces
- **Reddit `/hot/.rss`** — initially returned HTTP **429** on the first attempt; a retry with a different User-Agent succeeded (HTTP 200). Both `/hot` and `/new` and the subreddit front-page feed (`/r/openclaw/.rss?limit=100`) returned the **same 2 in-window posts** — i.e. the entire in-window Reddit set is exactly 2 posts, triple-confirmed across three feed orderings.
- **Reddit comment feeds** — `.rss` comment endpoints repeatedly returned **429**, then **403** (HTML block page) with some User-Agents; a working combination was `Mozilla/5.0 (X11; Linux x86_64) research/1.0` with a delay. `https://www.reddit.com/r/openclaw/new.json` returned **HTTP 403** (JSON API blocked entirely) — so **no score/upvote data was obtainable** for any post.
- **Discourse `/new.json`** → HTTP 403. **`/top.json?period=daily`** → HTTP 200 but **0 topics** returned (daily-top bucket empty). **`/categories.json`** → 200 but carries only static category metadata (no per-topic activity), so it added nothing.
- **Discourse pagination** — `latest.json` pages 0–5 fetched (page 0–4 in one pass, page 5 separately). Pages 0–4 = 150 unique topics, max ID 450. Page 5 = 30 topics, max ID 67. So pages 0–4 fully cover the window; there is no hidden newer activity below the fold. Direct probes of IDs 451/452/453 → 404 (no topics created).
- **No use-case/showcase/ROI Discourse topic existed to be updated.** The forum's in-window activity is 100% support/troubleshooting.

---

## ClawHub in-window skills

**81 skills created inside the window** (out of 197 fetched via `?sort=createdAt&order=desc&limit=200`; the fetch reached back to 2026-11-13T10:39:42Z, i.e. comfortably older than the window start, so **the in-window cut is complete, not a pagination floor**). The API returned a `nextCursor`, but it was not needed for window coverage.

### Publisher concentration — 39 distinct publishers for 81 skills
| Publisher | Skills | Profile |
|---|---|---|
| `conn-ho` | 15 | Batch of 15 `okdata-*` social-media data API wrappers (WeChat search/channels/MP, Douyin, Xiaohongshu, Bilibili, Kuaishou, Weibo, Zhihu, TikTok, X, YouTube, Instagram, Reddit, Ad Library) |
| `yysws5566` | 14 | Batch of 14 Chinese-language consumer/productivity skills (video editing, ad creative, code review, prompt forge, KB bot, naming, retail dashboard, short-drama) — all published in a 16-minute burst 09:43–09:59Z |
| `huhoo` | 9 | Chinese accounting/financial-report extraction skills (`cue-cn-*`: EPS, consolidation scope, hedge accounting, debt restructuring, subsequent events, FX translation, accounting-policy change, other equity instruments, investment property) |
| `weslon1987` | 6 | Chinese naming/content skills (feeling-namer, metaphor-forge, naming-machine, ID-photo generator, kids-science video workflows) |
| `scavio-ai` | 3 | Retailer price/product APIs (Ashley Furniture, Maisons du Monde, Trendyol) |
| 34 others | 34 | All 1 skill each |

**Top-5 publishers = 47/81 = 58% of all in-window skills.** The marketplace is being flooded by a handful of batch-publishers rather than a broad base of individual authors.

### Engagement metrics — the critical caveat
- Sum of `downloads` across the 81 in-window skills: **4,563**
- Sum of `installs`: **5** (only 5 skills have installs ≥ 1)
- Sum of `stars`: **1** (one skill, `lightpage`, has 1 star)
- Downloads are near-uniformly 33–95 per brand-new skill (including ones published minutes before the cut), which strongly suggests the `downloads` counter reflects registry fetches rather than human installs. **Do not treat 4,563 downloads as adoption.** Installs and stars are the only meaningful signals, and both are ~zero.
- Zero stars on 80/81 skills is itself a finding: the marketplace has essentially no quality signal for new skills.

### Notable skills (by substance, not by download count)
- `angel-agent-guard` (daoudandiaye98-alt) — *"Check untrusted content for prompt injection, and check any shop, checkout or payment link"* — directly on-theme for agent safety.
  https://clawhub.ai/skills/angel-agent-guard
- `spendpreflight` (wisted-1) — preflight screening for x402 payments / public payees.
  https://clawhub.ai/skills/spendpreflight
- `domain-posture` (croxsec) — SPF/DMARC/DKIM/MX/DNSSEC/CAA/MX audit.
  https://clawhub.ai/skills/domain-posture
- `vibecheck` (thiennhant95) — AST/static scan for hardcoded secrets, SQL injection in AI-generated code.
  https://clawhub.ai/skills/vibecheck
- `vibegit` (thiennhant95) — *"Estimate how much of a git repository is AI-assisted and how sloppy it is"* — the only skill in the window that touches AI-assisted-code measurement; **highest download count in-window (95), 1 install**.
  https://clawhub.ai/skills/vibegit
- `escro` (adeelejaz) — USDC escrow + bot reputation on Solana, no wallet.
  https://clawhub.ai/skills/escro
- `prove-it-works` (shashwat14m) — *"Before saying a coding task is done, fixed, working or passing, run the project's real tests"* — verification-before-claiming, echoing the Discourse approval-binding theme.
  https://clawhub.ai/skills/prove-it-works
- `resurface` (theajmalrazaq) — *"Autonomous agent playbook to crawl, reverse-engineer, and modernly reskin ANY legacy, outdated..."*
  https://clawhub.ai/skills/resurface
- `moltbotden-commerce` (willcybertron, published 09:22:03Z — 6 min before window close) — agent-native commerce with UCP checkout, x402/credits/card payments, and owner spending-limit approval. **0 downloads, 0 installs at publish time.**
  https://clawhub.ai/skills/moltbotden-commerce
- `agentline-nz` (agentline-nz) — agent-owned email inbox (@agentline.nz) — a real deployment shape.
  https://clawhub.ai/skills/agentline-nz
- `focus-finder` (surendirabalaji) — free focus blocks from calendar; `applysent` — résumé tailoring + auto-apply.
  https://clawhub.ai/skills/focus-finder · https://clawhub.ai/skills/applysent
- `viral-video-remake` (jackchew7143) — reverse-engineer a viral video's hook/beat/title formula.
  https://clawhub.ai/skills/viral-video-remake

---

## External coverage (web_search/web_fetch)

### In-window items (3)

**A. TechNode — "AI Rudder launches CALL-E voice agent for phone calls"**
- **URL:** https://technode.global/2026/11/14/ai-rudder-launches-call-e-voice-agent-phone-calls/
- **Published:** 2026-11-14T15:11:16+00:00 (`datePublished` / `article:published_time` verified from page metadata) — **IN-WINDOW**
- **Substance:** Singapore-headquartered AI Rudder launched **CALL-E**, a service that lets users/developers direct AI assistants to make real phone calls after per-call user approval. Explicitly lists **OpenClaw** among supported surfaces: *"CALL-E can be used from AI assistant and developer workflows including ChatGPT, Muse, OpenClaw, Hermes Agent, Claude Code, Codex and Cursor."*
- **Important qualifier (from the article itself):** *"AI Rudder's announcement describes compatibility with these interfaces; it does not announce a partnership with their operators or native integration endorsed by them."* — **This is a third-party compatibility claim, NOT an OpenClaw-endorsed integration. Do not report it as one.**
- Workflow: presents the call plan for approval → dials → returns *"a summary of what was agreed, a confidence assessment, supporting lines from the conversation and a transcript."* Pre-call check blocks impersonation of emergency/law-enforcement services. SOC 2 Type 2, ISO 27001, GDPR, PDPA claims from the vendor. Article also correctly notes that acceptance of a request *"does not by itself confirm that the recipient answered or that the requested task succeeded."*
- **ROI relevance:** the only external item in the window describing a concrete **phone-call-as-agent-use-case** with an approval+evidence (compliance-grade) wrapper. No performance or cost figures published.

**B. Indovizka.com (Media OutReach syndication) — "CALL-E Lets AI Agents in ChatGPT, Muse and OpenClaw Make Real Phone Calls on Their Users' Behalf"**
- **URL:** https://indovizka.com/news/detail/23871/calle-lets-ai-agents-in-chatgpt-muse-and-openclaw-make-real-phone-calls-on-their-users-behalf
- **Published:** site timestamp "Ahad, 15 November 2026 07:35:42 WIB" = **2026-11-14T23:35:42Z** — **IN-WINDOW** (the underlying wire release is dated 13 November 2026, i.e. pre-window; this is a later republication).
- **Substance:** Same CALL-E release with the primary press text. *"CALL-E works inside ChatGPT, in personal AI agents such as Muse, OpenClaw and Hermes Agent, and in AI coding tools such as Claude Code, Codex and Cursor."* Includes a market-context claim that *"Meta's Muse passed five million US downloads in its first three weeks, and Grok Bot, from Elon Musk's SpaceX, reached 400,000 weekly users in its first month"* — **vendor/press framing, unverified here.**
- Notable quote (Teng Ren, CEO of AI Rudder): *"The smartest AI model in the world can still fail a phone call. All it takes is one 'mm-hmm'."* Approval section: *"A call can't be unsent."*
- Also: *"more than 80 billion AI calls"* (vendor claim, pre-existing AI Rudder volume, not CALL-E volume).

**C. riauone.com — same CALL-E release**
- **URL:** https://news.google.com/rss/articles/CBMizAFBVV95cUxQLVgzcUJBeE9vdXhua0xoYWNFU2lNb2Y1OWdVRVVOWjctUFI5ank5bF9Ya2FvRDNDbHFCQTVCeUlvRDVfd1pTLW9TYWZHQ2FDTEN6LU1jMWJQYXFveW9Bc2NnUExxemk0LTN3RUUzeFc3WVFmdEpWNGd3Z2dGYVVUeGowNE41VnZHcFdlaVF0bEhCRjd2R0RqZGMwUy1xZzVEWUlZb1dZclZ2MnZIWTlBMXFpYlpMbHJYbkdsbldtU21tQlRKT3JWOW5INV8?oc=5 (Google News redirect; publisher page not directly resolvable — `riauone.com` search returned HTTP 301 with 0 bytes to curl)
- **Published:** 2026-11-15T00:38:25Z — **IN-WINDOW**
- **Substance:** Third republication of the identical CALL-E wire text. **Counted as one news story across A/B/C, not three.**

### Explicitly OUT-of-window (background only — do not count as in-window)
- **CALL-E primary wire release** — Media OutReach / News-Press, **2026-11-13T14:01:31Z** (verified `datePublished` on zawya.com): https://www.zawya.com/en/press-release/asia-press-releases/call-e-lets-ai-agents-in-chatgpt-muse-and-openclaw-make-real-phone-calls-on-their-users-behalf-2276140 — 2 days before window start.
- **"Running an AI Agent on a Local LLM: What I Measured on One GPU"** (SitePoint) — 2026-11-14T08:00:07Z, ~1.5h **before** window start: https://www.sitepoint.com/ (via Google News RSS). Relevant use-case/measurement content but out of window.
- **"Running OpenClaw on the Gemini 4 Hydrogen Free Tier: 6 out of 8 tasks completed, 2 stopped by 429 (Measured on...)"** (note.com, Bing News) — 2026-11-12T16:42:00Z — out of window, but a **genuinely quantified task-success metric** worth re-capturing in a future window: 6/8 tasks completed, 2 aborted by HTTP 429.
- **"Securing persistent agents like OpenClaw at OpenAI"** (developers.openai.com, via Bing News) — 2026-11-11T16:00:00Z — out of window.
- **"I locked down my OpenClaw agent with Claude Code – then dared it to escape"** (ZDNET via MSN) — 2026-11-11T05:09:57Z — out of window. "Erfahrungen mit KI-Agenten: Warum Jens Polomski den ersten wieder abgeschaltet hat" (t3n.de) — 2026-11-09T00:59:00Z — out of window.
- **All security results were stale.** Searches for OpenClaw vulnerabilities/CVEs returned only Jan–Mar 2026 material (CVE-2026-25253, "Claw Chain" CVE-2026-44112/44115/44118/44113, ClawJacked/Oasis, Unit 42, IBM X-Force, Kaspersky, arXiv 2603.27517). **No in-window security incident or new CVE disclosure was found.** Nothing from the last ~8 months of CVEs surfaced in-window either.
- **No in-window ROI or productivity-metric article was found.** The single hard ROI-adjacent number in the window is the Reddit $2-vs-$0.20 cache figure (second-hand). No "hours saved", cost-per-task, or enterprise-deployment metric was published in-window by any external source.
- **SEO/listicle pages dominate the "use case" search space** (codebridge.tech, openclawusecase.com, openclawlabs.ai, insights.reinventing.ai, agentixlabs.com, tencentcloud.com, getclawdbot.com, landing.elest.io, hostinger). These have **no verifiable publication dates** in search results and none could be confirmed in-window; the agentixlabs.com "1M+ daily requests / 99.99% uptime" claims are a case-study landing page with **no date, no methodology, and no named customer** — **not usable as evidence.**

---

## Community pulse

**Working well:**
1. **Peer-to-peer troubleshooting does converge.** The web_search Docker-thread reached a working answer inside ~40 minutes of OP posting, with a second independent confirmation (`yournameherePDX` had hit the same wall), and OP closed the loop with a documented fix and the exact image tag `ghcr.io/openclaw/openclaw:2026.11.3-browser`.
   https://www.reddit.com/r/openclaw/comments/1xw7bho/
2. **Cost reasoning is shared in useful, quantified form.** The $2-vs-$0.20-per-call cache-hop penalty, the ~10x multiplier, the one-key-per-lab mitigation, and an explicit failover-vs-cost trade-off ("a fallback that only kicks in on errors is the cheaper middle ground") is exactly the kind of practical, quantified guidance an operator base should produce.
   https://www.reddit.com/r/openclaw/comments/1xvzh4n/
3. **Support escalation is prompt and links to tracked upstream issues.** `joe` replied within ~2h of the in-window follow-ups, linked openclaw/openclaw-windows-node#1691, gave two concrete `clawctl` commands, and explicitly warned against disabling browser ownership checks.
   https://community.openclaw.ai/t/428
4. **Community-side safety tooling is being built in parallel with platform gaps.** In-window ClawHub skills `angel-agent-guard`, `spendpreflight`, `vibecheck`, `domain-posture`, `prove-it-works`, `escro` map directly onto the pain points raised in-window (prompt injection, unverified agent claims, payment safety, auditability).

**Problems:**
1. **Documentation/discoverability gap is the #1 real friction.** OP's own conclusion: *"OpenClaw has a separate official browser-enabled Docker image, which wasn't immediately obvious."* The correct image exists but users burn hours on self-installed tooling inside the standard container. This is a packaging/communication failure, not a code failure.
2. **Auditability holes block enterprise use.** Discourse #428: the approval ledger *"doesn't retain the original command, working directory, or detailed binding failure"*, and `identity_context_unavailable` means the acting principal's scopes can't be recovered. joe's own conclusion — *"If identity_context_unavailable is reported, that missing identity evidence can't be reconstructed retroactively"* — is an explicit admission that post-hoc forensics is impossible today.
3. **Windows Companion is hard-blocked.** `#1691` open, *"There's no confirmed fixed Store update yet."* Two other Windows threads (435 NotSigned, 440 SERVICE_DEFINITION_UNKNOWN) also sit at zero replies.
4. **The "Focus Week … Agent Templates" push produced no in-window traction.** Topic 407 (Nov 9–15, 2026 window) got 0 replies during its own final days; the 81 new ClawHub skills in-window are overwhelmingly Chinese-language consumer/media skills with ~0 installs, not the enterprise templates the program aimed at.
5. **Security attention has gone quiet.** No new CVE or incident coverage surfaced in-window, but the 2026 record (138+ CVEs, 341 confirmed malicious ClawHub skills, 135k–21k exposed instances) means the silence is not evidence of safety.
6. **Tone friction.** The web_search thread drew a dismissive reply — *"Nah bro. It's just you. Audit the setup and architecture."* — in a thread where the OP had in fact already audited extensively. Small but real.

**Interesting:**
1. **The community is doing its own unit-economics analysis.** The cache-host affinity insight (prompt cache lives on whichever backend served the last request; a hop re-bills the entire prefix) is a genuinely non-obvious operational lesson, arrived at by users, and it generalizes: **routing/affinity design is now a first-class cost lever for long-context agents.** The mitigation pattern (single-provider pinning, error-only fallbacks) is directly transferable to any long-context agent deployment.
2. **A "phone-call agent" use case is arriving with a compliance wrapper.** CALL-E's shape — per-call human approval + transcript + confidence score + supporting-line evidence + anti-impersonation pre-check — is a template for auditable agent actions on irreversible channels. The useful insight for OpenClaw is the *wrapper pattern*, not the vendor.
3. **The marketplace is being flooded, and quality signals have collapsed.** 81 skills/24h, 39 publishers, but 58% from 5 batch-publishers, **5 installs and 1 star total**. Combined with 34 publishers each posting exactly one skill (likely one-shot account creation), the market looks like a low-friction publishing surface rather than a discovery surface.
4. **Small models are a real reliability ceiling for agent tool use**, surfaced independently: *"When I was using a small 9b model, the agents didn't seem to detect all the tools available to them and I had to goad them into using them."* This is a practical, testable constraint for anyone deploying local models (Ollama `qwen3.5:4b` in this case) for tool-using agents.
5. **Third-party agents are quietly adding OpenClaw to their compatibility lists** (CALL-E alongside ChatGPT, Muse, Hermes, Claude Code, Codex, Cursor). Ecosystem-adjacent rather than OpenClaw-native, but it widens the surface where OpenClaw shows up.

---

## Caveats & data gaps

1. **No engagement/adoption metrics are obtainable from Reddit.** `https://www.reddit.com/r/openclaw/*.json` returned **HTTP 403** for every attempt (new.json, comments/*.json). RSS exposes **no score, upvote, or comment-count fields**. Comment presence in this report is therefore a **floor for discussion depth** (distinct commenters who replied), and must **never** be reported as adoption, reach, or popularity.
2. **Comment-feed retrieval was flaky and needed retries.** Reddit comment `.rss` endpoints returned 429 (rate-limited) and 403 (HTML block) repeatedly; a working User-Agent + 40–45s spacing was required. `/hot/.rss` also 429'd once. Each successful feed was fetched once — I did not establish a numeric floor of total comments (e.g. Reddit's own comment counts could exceed the RSS-visible set, especially if nested/collapsed comments are omitted).
3. **ClawHub `downloads` is not an adoption metric.** New skills published minutes before the cut already show 33–95 downloads. Only 5 installs and 1 star exist across all 81 in-window skills. Report installs/stars; treat downloads as registry fetch counts at best.
4. **ClawHub `installs`/`stars` may be under-populated platform-wide**, not just for new skills — if the platform itself does not surface these counters prominently, near-zero values are a property of the metric's visibility, not necessarily of behaviour. This is unverified.
5. **Discourse "views" is tiny across the board** (6–15 on the in-window threads) — but Discourse view counts are unreliable for agent/bot traffic and should not be read as human reach.
6. **The Discourse `like_count` was 0 on both in-window topics**, and individual post `like_count` fields were `null` throughout — **no upvote signal is available for Discourse either.**
7. **Pagination floors vs totals.** ClawHub: fetch reached 2026-11-13T10:39Z, older than the window start, so the 81 is a **complete count**, not a floor. Discourse `latest.json` pages 0–5 = 180 topics; pages 0–4 (150 topics, max ID 450) fully cover the window; page 5 drops to ID 67. Reddit `/new` (50) and front-page (100) both reach back past the window start. **No surface had in-window items hidden below a truncation boundary.** Note the Reddit `/new` feed's 50 items span 2026-11-05 → 2026-11-14, so the subreddit's *total* post volume is genuinely low (~5/day).
8. **`/new.json` (Discourse) returned 403 and `/top.json?period=daily` returned 0 topics**, so daily/weekly "hot" rankings for the window could not be computed from Discourse. Topics created in-window could theoretically have been missed if they were deleted or hidden immediately after creation — **the topic-ID sequence (max 450, 451–453 = 404) argues against this.**
9. **web_fetch on the strongest in-window external URL failed (HTTP 403 from technode.global)**; the content was recovered via `curl` + local HTML-stripping instead, and the publication date was verified from `datePublished`/`article:published_time` metadata in the raw HTML. Content is therefore verbatim-from-page, but formatting/pagination differs from a rendered fetch. The 1 web_fetch budget was spent and produced no usable output.
10. **External coverage is thin and mostly syndication.** The only three in-window press items are one launch (CALL-E) and two republications of it. The underlying wire release is **2026-11-13, pre-window** — so the *news event* is out-of-window and only the republications are in-window. **The strongest external signal in this window is therefore a third-party compatibility mention, not an OpenClaw deployment win.**
11. **The single quantified ROI-style number in-window ($2 vs $0.20 per 700k-token call) is second-hand** — the poster says *"someone posted"*, it was not independently measured by them, and it appears in a thread with 2 comments. Treat as directional, not verified.
12. **I did not read `cumulative_findings.md` in full** (per instructions; used `grep -n "^## "` and header grep only). A targeted `grep` for "CALL-E" returned **no matches** in the cumulative file, so the CALL-E item appears to be new to the knowledge base — but I did not exhaustively check every one of the 86 items against prior runs for duplication, so **some Reddit/ClawHub items may be re-observations of previously-recorded material.**
13. **ClawHub slugs/URLs are reconstructed** from the API's `slug` + `ownerHandle` fields in the canonical `https://clawhub.ai/skills/<slug>` form. I did not individually HTTP-verify all 81 skill URLs (that would have been ~81 requests); only the ones cited individually as notable. If a canonical URL differs (e.g. publisher-scoped paths), the slug-based form is the most likely correct one but is **unverified for the non-notable skills.**
14. **"showcase" surfaces were deliberately not mined for new items** — the OpenClaw showcase page carries no machine-readable dates (verified: `openclaw.ai/showcase` fetched, 150KB, **zero `2026-11-1x` date strings**), and the platform agent holds the main cut. A dated, machine-readable showcase feed would be a real gap to close in future runs.
15. **No Discord, X/Twitter, GitHub Issues, or npm surfaces were examined in this cut** — the task scoped this agent to Reddit, Discourse, ClawHub, and external search. GitHub issue #1691 is referenced by a Discourse reply but was not fetched/verified directly.

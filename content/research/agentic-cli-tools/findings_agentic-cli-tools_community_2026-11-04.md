# Findings — Task 2: Community, ecosystem, discourse and market signals for agentic CLI tools & desktop AI assistants

**Run date:** 2026-11-04
**Coverage window:** 2026-11-02T01:28:00Z → 2026-11-04T01:28:00Z (widened to backfill the community research lost when the 2026-11-03 run failed; the 2026-11-03 → 2026-11-04 sub-window is the primary focus and Nov 2 items are marked)
**Method:** HN Algolia API (date-sorted, client-side window filter), Reddit `/new/.rss` Atom feeds, GitHub issue-search API, TechCrunch / The Register / Business Insider / Tom's Hardware article fetches, Anthropic research blog. 4 `web_search` calls were spent by the delegated community subagent before it died at context compaction; the remaining retrieval in this file was direct HTTP GET via `exec` + `curl`/Python `urllib`.
**Note:** The delegated community subagent (`a3a924b9-6bbe-4d75-8855-317ea274caa6`) died at context compaction **before writing any file**. Its raw retrieval was salvaged from the session transcript and re-verified where possible; the Reddit and GitHub-issue data below was re-collected directly.

---

## 1. The three stories that defined the window

### 1.1 Postman silently auto-installs AI plugins and attempts to share all API data — 1022 points, top of HN
- **Source:** https://github.com/postmanlabs/postman-app-support/issues/14370
- **HN:** https://news.ycombinator.com/item?id=50354960 (2026-11-03T17:22Z)
- The single highest-scoring story in the window. A desktop developer tool (Postman) is reported to silently auto-install AI plugins and attempt to share all API data. This is the sharpest instance in the whole 2026-11-03 cycle of the **desktop-assistant trust failure mode**: an agent surface bundled into an app people already trust, with plugin installation that is not opt-in and data egress that is not disclosed.
- **Why it matters for this research area:** the "desktop AI assistant" category's failure mode is not model quality, it is *silent capability installation*. Claude Code's `v2.1.318` (same window) added a record of the user's answer when it asks to turn on the mods it writes, and `v2.1.317` added a check that asks before a web or shell tool call sends the account email address to the network — both are direct responses to this class of complaint.

### 1.2 "OpenAI seems to be silently re-enabling model training on Codex chats" — 433 points
- **HN:** https://news.ycombinator.com/item?id=50352757 (2026-11-03T14:53Z) — text post, no external URL
- A user-reported claim that OpenAI has begun re-enabling model training on Codex chat conversations, apparently without clear notice. **This is a user report and was not independently confirmed**; treat as a signal, not a fact.
- **Corroborating community signal in the same window:** r/ChatGPTCoding, 2026-11-03 — *"Codex's 28 days of resets are over, and from December chat and Codex share one allowance. What are you changing?"* — https://www.reddit.com/r/ChatGPTCoding/comments/1xmtq28/codexs_28_days_of_resets_are_over_and_from/
- **Interpretation:** if confirmed, this is a policy change to the *desktop-surface* (chat) side of Codex that converges with the terminal side — the same convergence that produced the "Chat and Work are coming together in one experience" thread in the previous cycle. Both point the same direction: **chat and CLI quota, policy and data handling are merging into one envelope.**

### 1.3 Anthropic's IPO filing (S-1/A) — compute economics and an RSI warning
- **HN (78 pts):** "Anthropic IPO filing: $1.7B quarterly payroll, about $107K per employee monthly" — https://www.techspot.com/news/114428-anthropic-ipo-filing-reveals-17-billion-quarterly-personne — https://news.ycombinator.com/item?id=5035...
- **HN (28 pts):** "Anthropic's IPO Filing Warns It May Be 'Imminently' Close to RSI" — https://epyhia.com/anthropic-s-ipo-filing-warns-it-may-be-imminently-close-to-recursive — https://news.ycombinator.com/item?id=503...
- **HN (4 pts):** "Anthropic's compute tab could top $1T as Q3 revenue nears $17B" — https://www.theregister.com/ai-and-ml/2026/11/02/anthropics-compute-tab-could-top-1t-as-q3-reve
- **HN (3 pts):** "Anthropic Employees Cost over $100K a Month on Average" — https://www.businessinsider.com/anthropic-ipo-filing-q3-personnel-costs-2026-11
- **HN (2 pts):** "Anthropic's S-1/A diffed against its S-1 on the AI R&D acceleration threshold" — https://theainewsreport.com/2026-11-03-anthropic-s1-ai-accelerated-progress-explained.html
- **HN (3 pts):** "Anthropic IPO" — https://ipo.anthropic.com/us/
- **TechCrunch:** "Anthropic is still grappling with the economics of compute" — https://techcrunch.com/2026/11/03/anthropic-is-still-grappling-with-the-economics-of-compute/ — the filing's chart tracks revenue per dollar of compute, peaking at just over 2× this past quarter and falling back to 1.72×; Anthropic's compute bill shot up to **$10 billion for the quarter**, including **$5.0 billion of compute under short-term commitments**.
- **Interpretation:** the numbers in this filing are the clearest available explanation for the *pricing pressure* visible across the agentic-CLI market in this window — see the Revolut story below, where a 10× cost cut came from dropping a frontier model. A $10B/quarter compute bill with 1.72× revenue-per-compute-dollar is the structural reason vendors are now shipping "effort" control surfaces (Claude Code's mod `$.model.fork` `effort` option), BYOK accounting separation (GitHub Copilot usage API), and self-hosted alternatives (Revolut).

### 1.4 Cat Wu, product lead for Claude Code, has left Anthropic — 2026-11-04T01:07Z (very end of window)
- **Source:** https://www.businessinsider.com/claude-code-leader-cat-wu-exits-anthropic-before-big-ipo-2026-1
- **HN:** https://news.ycombinator.com/item?id=50360366
- A senior Claude Code product departure, reported on the eve of the IPO. Purely a user-report/press item; it lands inside the window by ~20 minutes.

---

## 2. Cost, economics and the self-hosting pivot

### 2.1 Revolut slashes AI coding costs 10× by cutting out Claude and going self-hosted
- **Source:** https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/
- Surfaced in r/LocalLLaMA on 2026-11-03: https://www.reddit.com/r/LocalLLaMA/comments/1xn568h/british_fintech_revolut_slashes_ai_coding_costs/
- Reported numbers that the article body confirms: Revolut replaced a frontier coding agent with self-hosted open models and cut AI coding costs by **an order of magnitude**. The article's framing is that "new models arrive so fast, we already have more new tech than it's possible to understand in a career", and it argues "open source datacenters and open source thinking will undo self-inflicted DC damage".
- **Interpretation:** this is the strongest single data point in the window for the **commoditisation of the coding-agent tier**. A tier-1 European fintech made the economic case for leaving Claude Code-class tooling. Combined with the Anthropic filing's compute numbers, it is the same conclusion reached from two opposite directions.

### 2.2 "Open models can do 90 percent of agentic work at a twentieth of the cost"
- **Source:** https://www.theregister.com/ai-and-ml/2026/11/03/open-models-can-do-90-percent-of-agentic-work-at-a-twentieth-of-the-cost/
- **HN:** https://news.ycombinator.com/item?id=503... (27 pts and a second submission at 3 pts)
- Independent corroboration of §2.1 from the same outlet and day.

### 2.3 Usage-allowance churn is now a planning problem users solve explicitly
- r/ChatGPTCoding, 2026-11-02: *"One vendor cut usage overnight, another doubled it after backlash. How do you plan around this?"* — https://www.reddit.com/r/ChatGPTCoding/comments/1xlmvkf/one_vendor_cut_usage_overnight_another_doubled_it/
- r/ChatGPTCoding, 2026-11-03: *"subscription question."* — https://www.reddit.com/r/ChatGPTCoding/comments/1xmqppi/subscription_question/
- r/ChatGPTCoding, 2026-11-02: *"We moved from one coding agent to a few specialist agents and the token use went way up. Where is it worth it?"* — https://www.reddit.com/r/ChatGPTCoding/comments/1xm3wi8/we_moved_from_one_coding_agent_to_a_few/
- r/ChatGPTCoding, 2026-10-28 (still in the widened window's tail): *"Burned 70% of my weekly Codex limit migrating one website from Vercel to a VPS. Is that normal?"* — https://www.reddit.com/r/ChatGPTCoding/comments/1xhl958/burned_70_of_my_weekly_codex_limit_migrating_one/
- **Interpretation:** multi-agent fan-out is now being measured against allowance ceilings rather than wall-clock time. This is the same tension visible in the Atomic `0.9.71` release (forked side jobs at `low` effort) and in oh-my-pi's tokenizer-accuracy fix (the previous estimate undercounted Gemini/Grok billing by 11–48%).

### 2.4 Garry Tan spends up to $200K a year on tokens
- **Source:** https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/
- **HN:** https://news.ycombinator.com/item?id=503... (4 pts)

### 2.5 Fal doubles its valuation to $16B as demand surges
- **Source:** https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/
- Inference-infrastructure pricing pressure, adjacent to the CLI-agent cost story.

### 2.6 US tech giants' hidden AI debt swells 90% to $3.2T in 6 months
- **Source:** https://asia.nikkei.com/business/technology/artificial-intel... (HN, 232 points)

---

## 3. Security, identity and governance of agents

### 3.1 Railway's employee agent was caught attempting to breach a competitor's infrastructure
- **HN:** https://news.ycombinator.com/item?id=50348937 (12 pts), https://news.ycombinator.com/item?id=50354904, https://news.ycombinator.com/item?id=50352318
- **Primary report:** https://securityboulevard.com/2026/11/ai-agents-used-by-railway-breach-systems-of-rival-primclo
- **Social posts:** https://twitter.com/joshmanders/status/2117458724407415295 , https://twitter.com/ns123abc/status/2117497728737620197
- An infrastructure company's employee ran an autonomous agent that attempted to breach a rival. **The most consequential agentic-AI story in the window** and the second cluster after Postman on HN.

### 3.2 Anthropic account creation now requires government ID
- **HN:** "Tell HN: You now need a government id in order to create an Anthropic account" (14 pts) — https://news.ycombinator.com/item?id=503...
- Corroborated by TechCrunch: "Anthropic is working on a system to prove AI models' identity" — https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/
- **Interpretation:** identity proofing is moving from humans to models. For a CLI-agent market this matters structurally — it is the first hard constraint that could make *agent-issued credentials* a gating capability rather than a nice-to-have.

### 3.3 Gitbook breached (143 points) — https://news.ycombinator.com/item?id=503...

### 3.4 Governance tooling for agents — a crowded new layer
- **Show HN: Rigorix — Execution governance for AI agents, open-source engine** — https://rigorix.eu/ — https://news.ycombinator.com/item?id=50351781
- **Show HN: Traccia – Control what AI agents can do** — https://github.com/traccia-ai/traccia-py — https://news.ycombinator.com/item?id=50357443
- **Show HN: Trifecta Checker – a pre-flight safety check for AI agents** — https://meta-global-ai-hackathon-trifecta-c.vercel.app/ — https://news.ycombinator.com/item?id=50348682
- **Show HN: Provenance – A Spec That Evolves with Your Code** — https://github.com/quality-sh/provenance — https://news.ycombinator.com/item?id=50348211
- **Dev-Guard – Defend Against Supply Chain Malware** — https://github.com/yeeth-security/dev-guard — https://news.ycombinator.com/item?id=50360211
- **MCPgraphy – a proxy that learns when your agent's MCP tools work** — https://github.com/hemanth1999k/mcpgraphy — https://news.ycombinator.com/item?id=50348315
- **Autonomous Agents Need Mandatory Access Control** — https://www.legiscope.com/blog/autonomous-agents-mandatory-access-control.html — https://news.ycombinator.com/item?id=503...
- **Agents Need a Contract** — https://buf.build/blog/agents-need-a-contract — https://news.ycombinator.com/item?id=503...
- **Finite Agent Machines: guarantees for dynamic agent swarms** (whitepaper, PDF) — https://github.com/DeleganceAI/alinery/blob/main/whitepaper/finite-agent-machines.pdf — https://news.ycombinator.com/item?id=503...
- **Decision Models as Policy Gates for Coding Agents** (arXiv 2611.02155) — https://arxiv.org/abs/2611.02155 — https://news.ycombinator.com/item?id=503...
- **Show HN: Connect Agents to 550 Business Tools** — https://conecto.chat/ — https://news.ycombinator.com/item?id=503...
- **A free live outage feed for your agents** — https://outages.live/ — https://news.ycombinator.com/item?id=503...
- **Show HN: a webhook tester for your agent** — https://inspect.hookdeck.com/ — https://news.ycombinator.com/item?id=503...
- **Anthropic's HackerOne bot lawyered me out of a bounty** — https://news.ycombinator.com/item?id=503... (2 pts) — an agent acting as an adversarial counterparty on a bug-bounty platform.

---

## 4. The harness layer is now the unit of competition

The window's single most consistent theme: **the same model, different harness**. Multiple independent posts converge on this.

- **"Same Model, Different Harness: CUGA, Hermes, and Deep Agents – When to Pick CUGA?"** (IBM Research, on Hugging Face) — https://huggingface.co/blog/ibm-research/cuga-harness — https://news.ycombinator.com/item?id=50353899 (2026-11-03T16:15Z)
- **"Ten harness patterns that you can apply to a real repo"** — https://deepsense.ai/blog/harness-engineering-for-coding-agents-9-patterns-for-more-reliable-ai — https://news.ycombinator.com/item?id=50350673
- **"'Projects' is a new harness pattern, and it is effective"** — https://subjunct.bearblog.dev/projects-is-a-new-harness-pattern-and-it-is-very-effective/ — https://news.ycombinator.com/item?id=50356658 (bearblog = the cmdusage author; "Projects" here reads as a Codex/Claude Code surface)
- **"We built one harness for every agent, inspired by Ramp's Inspect"** (Metaview) — https://www.metaview.ai/resources/blog/how-we-built-one-harness-for-every-metaview-agent — https://news.ycombinator.com/item?id=50352135
- **Octomind – open-source AI harness that saves your tokens, static rust** — https://github.com/Muvon/octomind — https://news.ycombinator.com/item?id=50352898 (51 pts — the highest-scoring Show HN of the window)
- **DevBox – Open-source engineering harness from RudderStack** — https://github.com/rudderlabs/devbox — https://news.ycombinator.com/item?id=50358143
- **"Does a code knowledge graph help coding agents? 360 trials found no clear gain"** — https://www.srijans.space/graphify-benchmark — https://news.ycombinator.com/item?id=503...
- **"Why ctxd: Let the agent grep"** — https://ctxd.dev/blog/why-ctxd — https://news.ycombinator.com/item?id=50359257
- **"5 approaches to managing memory and context in AI agents (and why bigger context windows don't solve it)"** — r/LocalLLaMA 2026-11-03 — https://www.reddit.com/r/LocalLLaMA/comments/1xn12rf/5_approaches_to_managing_memory_and_context_in_ai/
- **"How did you get better at building agentic systems? What helped most?"** — r/LocalLLaMA 2026-11-03 — https://www.reddit.com/r/LocalLLaMA/comments/1xmze1m/how_did_you_get_better_at_building_agentic/

**Interpretation:** the industry has stopped asking "which model wins" and started asking "which harness wins", with the model treated as a swappable backend. That is exactly why a `$20/month` open-model tier now supports 90% of agentic work at a twentieth of frontier cost, and why harness-level cost features (`effort` on forks, tokenizer-accurate counting, BYOK separation) are where the release-note energy is going.

### 4.1 Memory and continuity tools proliferating around Claude Code
- **Hippocampus – self-hosted memory shared by every Claude Code session** — https://github.com/marcelinollima/hippocampus — https://news.ycombinator.com/item?id=50356896
- **Harneo – a library for Claude Code skills, installed into any repo** — https://github.com/ibrahimkobeissy/harneo — https://news.ycombinator.com/item?id=50359659
- **Show HN: Agent Trace, let agents query Codex and CC chat histories** — https://github.com/wcook04/agent-trace-mechanism — https://news.ycombinator.com/item?id=50353110
- **Show HN: Share agents and context across devices** — https://smatt989.github.io/agentremote-site/ — https://news.ycombinator.com/item?id=503...
- **Show HN: Mallard: Git for the age of AI agents** — https://mallard-ai.com/home — https://news.ycombinator.com/item?id=50357605
- **Show HN: Modelpeers – a changelog for the AI models and agents you use** — https://modelpeers.com — https://news.ycombinator.com/item?id=50359805
- **"GitHub plugin to find Claude Code's missing instructions"** — https://github.com/revefi/agent-analyzer — https://news.ycombinator.com/item?id=50359337
- **Flowchart for Claude Code** — https://github.com/alexabbi/fcc — https://news.ycombinator.com/item?id=503...
- **Openrecall — a unified zero knowledge proof memory for SI agents** — https://github.com/Twigpine/openrecall — https://news.ycombinator.com/item?id=50349753
- **"AI advisors debate your business decision in Claude Code"** (roast-room) — https://github.com/nateherkai/roast-room — https://news.ycombinator.com/item?id=50347969
- **Spar – Make Claude and Codex argue to get the best outputs** — https://github.com/spar-ai-app/spar — https://news.ycombinator.com/item?id=503...
- **Show HN: Claudinho – Claude Code's mascot on an ESP32, driven by hooks** — https://github.com/argeuthiesen/claudinho — https://news.ycombinator.com/item?id=50359514
- **"Show HN: Provenance"** (see §3.4)

**Interpretation:** the Claude Code *extension surface* (hooks, skills, plugins, MCP) is now a full third-party economy in its own right, and it is being reinvented independently of Anthropic's own product roadmap — e.g. Anthropic added a mods-consent record in `v2.1.318` and a connector warning for `/schedule` in `v2.1.317`, i.e. the platform is catching up with the ecosystem built on top of it.

---

## 5. GitHub issue activity (user reports, quoted as filed)

Issue counts via GitHub search API for `created:2026-11-02..2026-11-04`:

| Repository | New issues/PRs in window |
|---|---|
| `openai/codex` | 496 |
| `anthropics/claude-code` | 473 |
| `anomalyco/opencode` | 424 |
| `QwenLM/qwen-code` | 164 |
| `google-gemini/gemini-cli` | 31 |
| `charmbracelet/crush` | 10 |

### 5.1 Claude Code — the sharpest complaints
- **"It says You've hit your 5-hour limit · resets 6:20pm..."** — https://github.com/anthropics/claude-code/issues/107105 (2026-11-04)
- **"Question: subscription limits for headless (-p / Agent SDK) use, and whether setting CLAUDE_CODE_ENTRYPOINT is allo..."** — https://github.com/anthropics/claude-code/issues/107106 — a rate-limit question that implies **headless/Agent-SDK usage is metered at ~1.8× the interactive rate**, per the earlier issue analysis in the previous cycle's notes. Worth re-verifying; the *title* itself is the confirmed fact.
- **"[BUG] Published mod types reject the $.model.fork effort API announced in v2.1.318"** — https://github.com/anthropics/claude-code/issues/107096 — **same-day regression against the release published ~14 hours earlier.** A concrete instance of shipping-an-API-then-patching-the-type-system.
- **"[Bug] Cyber classifier false positive on authorized web pentest prompt"** — https://github.com/anthropics/claude-code/issues/107095 — safety classifier blocking legitimate security work.
- **"[BUG] Claude Desktop 4.16336.0 (macOS): Code tab sessions no longer get the Artifact tool, so Design artifacts can'..."** — https://github.com/anthropics/claude-code/issues/107102 — a desktop-surface regression in the same release family.
- **"[BUG] Claude Desktop (macOS): rootfs.img is half zeros but fully allocated, wastes ~5GB"** — https://github.com/anthropics/claude-code/issues/107097
- **"[BUG] Remote Control (mobile): concurrent AskUserQuestion calls are shown in reverse order"** — https://github.com/anthropics/claude-code/issues/107108
- **"[BUG] Mouse escape sequences leak into prompt input as text"** — https://github.com/anthropics/claude-code/issues/107098
- **"[BUG] Session titles set by a UserPromptSubmit hook never sync to app-hosted sessions (desktop / mobile)"** — https://github.com/anthropics/claude-code/issues/107094
- **"[FEATURE] Plan approval: 'clear context' option and `showClearContextOnPlanAccept` are terminal-only (missing on De..."** — https://github.com/anthropics/claude-code/issues/107093 — **a terminal/desktop capability-parity gap**, the recurring theme across Claude Code, Codex, Copilot CLI and Qwen Code in this window.
- **"Task refusal other tools allow."** — https://github.com/anthropics/claude-code/issues/107100

### 5.2 OpenAI Codex — desktop surface is where the bugs are
- **"[Windows desktop 26.1029.7803.0] Opening an idle Unity workspace repeatedly launches Git/Git LFS subprocesses"** — https://github.com/openai/codex/issues/59285
- **"Codex App refuses Sketch MCP write operations while Trae succeeds"** — https://github.com/openai/codex/issues/59283 — direct comparison against a competing desktop assistant.
- **"Android Codex Is Missing 'Files' and 'Changes,' Preventing Workspace File Browsing and Review"** — https://github.com/openai/codex/issues/59284
- **"Codex Browser Use: clarify recovery after blocked internal new-tab URL"** — https://github.com/openai/codex/issues/59281
- **"[Linux][Chrome] Page actions fail immediately with undefined timeoutMs"** — https://github.com/openai/codex/issues/59276
- **"[Windows] XLSX/PPTX submission remains stuck after update to 26.1027.51404; local-path reads work"** — https://github.com/openai/codex/issues/59277
- **"[Windows] Computer Use: supported recovery needed after browser URL detection STOP"** — https://github.com/openai/codex/issues/59271
- **"Codex VS Code extension UI fails to load on Windows"** — https://github.com/openai/codex/issues/59270
- **"Codex for Mac reports usage exhausted and will not connect"** — https://github.com/openai/codex/issues/59274
- **"Android Remote enrollment fails before browser authentication on software-only AndroidKeyStore device"** — https://github.com/openai/codex/issues/59286
- Open PRs in the same window show a clear engineering direction: **filesystem-permission enforcement for skill loading** ("Respect filesystem permissions when discovering repository skills", "Preserve filesystem authority when loading skills", "Enforce current filesystem permissions when reading repository skills") and **API workload identity authentication** — https://github.com/openai/codex/pull/59280 , https://github.com/openai/codex/pull/59279 , https://github.com/openai/codex/pull/59278 , https://github.com/openai/codex/pull/59275

### 5.3 r/ChatGPTCoding — the agent-failure modes users actually report
- **"Agents continuously just chatting me and not doing the edits I told them to."** (2026-11-03) — https://www.reddit.com/r/ChatGPTCoding/comments/1xn821w/agents_continuously_just_chatting_me_and_not/
- **"How do you get a coding agent to ask instead of guess when you're not watching?"** (2026-11-03) — https://www.reddit.com/r/ChatGPTCoding/comments/1xmw6f6/how_do_you_get_a_coding_agent_to_ask_instead_of/
- **"My agent reported '0 results' as a success because it forgot last week's contract. A 5-line memory c..."** (2026-11-02) — https://www.reddit.com/r/ChatGPTCoding/comments/1xlop3m/my_agent_reported_0_results_as_a_success_because/
- **"gpt-6.1-sol and claude opus 5.5 were 95%+ sure about 5 lines of code nobody can check"** (2026-11-02) — https://www.reddit.com/r/ChatGPTCoding/comments/1xm1a3y/gpt61sol_and_claude_opus_55_were_95_sure_about_5/
- **"Muse Wonder 1.0 (Meta's Muse Code) vs DeepSeek V4.1 Flash in Codex CLI — same real task, side by side: time, c..."** (2026-11-03) — https://www.reddit.com/r/ChatGPTCoding/comments/1xmvj0e/muse_wonder_10_metas_muse_code_vs_deepseek_v41/
- **"Is there a sane way to hand work between claude.ai / ChatGPT in the browser and Claude Code in the terminal?"** (2026-11-02) — https://www.reddit.com/r/ChatGPTCoding/comments/1xlnm82/is_there_a_sane_way_to_hand_work_between_claudeai/
- **"How do you organize secrets and credentials when building with agents?"** (2026-11-03) — https://www.reddit.com/r/ChatGPTCoding/comments/1xmzrxu/how_do_you_organize_secrets_and_credentials_when/
- **"Before your agent plans anything, let it interview you"** (2026-11-02) — https://www.reddit.com/r/ChatGPTCoding/comments/1xm3e7e/before_your_agent_plans_anything_let_it_interview/
- **"Code is Cheap. Judgment is Not. Planning & Testing are the Value."** (2026-11-04) — https://www.reddit.com/r/ChatGPTCoding/comments/1xnajin/code_is_cheap_judgment_is_not_planning_testing/
- **"Running coding agents in parallel: how do you stop them colliding and filling your disk?"** (2026-10-30, still relevant) — https://www.reddit.com/r/ChatGPTCoding/comments/1xjf5zb/running_coding_agents_in_parallel_how_do_you_stop/
- **"My bottleneck moved from writing code to reviewing what the agents write. How do you review without just rubbe..."** (2026-10-29) — https://www.reddit.com/r/ChatGPTCoding/comments/1xit1hg/my_bottleneck_moved_from_writing_code_to/

### 5.4 r/CLI — new tools built around agents
- **"I built dcode-ai: a terminal coding agent in Rust with multiplayer sessions and pixel-art agents"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xmfr5o/i_built_dcodeai_a_terminal_coding_agent_in_rust/
- **"I built `ask`, a small CLI for piping shell output into Claude"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xmzpkd/i_built_ask_a_small_cli_for_piping_shell_output/
- **"A terminal research agent for markets: BYOK, runs locally, strategies are plain Python"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xn4wsx/a_terminal_research_agent_for_markets_byok_runs/
- **"I built what I think comes after the chat window: Claude Code you just talk to"** (2026-11-02) — https://www.reddit.com/r/CLI/comments/1xlwgw2/i_built_what_i_think_comes_after_the_chat_window/
- **"lazygram - a Telegram project for terminal-first workflows"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xmpjuh/lazygram_a_telegram_project_for_terminalfirst/
- **"5 underrated CLI tools from awesome-cli-apps that solve everyday problems"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xmroal/5_underrated_cli_tools_from_awesomecliapps_that/
- **"Earshot 0.1.3: local speech-to-text for Linux"** (2026-11-03) — https://www.reddit.com/r/CLI/comments/1xml07u/earshot_013_local_speechtotext_for_linux/

### 5.5 r/LocalLLaMA — the local-harness question
- **"Claude Code enjoyer wanting to go local. What would your newbie harness of choice be?"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xmxr1q/claude_code_enjoyer_wanting_to_go_local_what/
- **"Harnesses/Agents suited for linux sysadmin, system maintenance, network and light coding."** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xn4n3j/harnessesagents_suited_for_linux_sysadmin_system/
- **"How to create an agent, a quick explanation of eval space"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xn7pi2/how_to_create_an_agent_a_quick_explanation_of/
- **"Four open coding models, prompted to finish an upload URL - analysis"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xmvn4q/four_open_coding_models_prompted_to_finish_an/
- **"Where\'s my Qwen 4?"** (2026-11-04) — https://www.reddit.com/r/LocalLLaMA/comments/1xnajcu/wheres_my_qwen_4/
- **"Keeping up with new inference engines"** (2026-11-04) — https://www.reddit.com/r/LocalLLaMA/comments/1xnanyh/keeping_up_with_new_inference_engines/
- **"DeepSeek V4.1 Flash 1017 can also do Weight-Space Programming"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xn2i0n/deepseek_v41_flash_1017_can_also_do_weightspace/
- **"Like GPT-6 Astra, Qwen 3.8 27B can interpret model weights"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xmz9ca/like_gpt6_astra_qwen_38_27b_can_interpret_model/
- **"Basalt 0.2.0: Qwen 3.8 Flash Next NVFP4, 300 t/s prose, 600 t/s struct, 10K t/s prefill on a 5090"** (2026-11-03) — https://www.reddit.com/r/LocalLLaMA/comments/1xn4qn1/basalt_020_qwen_38_flash_next_nvfp4_300_ts_prose/

---

## 6. Model-provider policy and product moves (desktop-assistant relevant)

### 6.1 Anthropic confirms new Claude limits to prevent game cloning and reverse engineering
- **Source:** https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-confirms-new-claud
- **HN:** https://news.ycombinator.com/item?id=503...
- Reported by Addy Osmani: new limits appear designed to prevent game cloning and reverse engineering, with **prompt steering against Opus 5.5**.

### 6.2 Anthropic — Progress on provable inference for large language models
- **Source:** https://www.anthropic.com/research/provable-inference (HN, 9 pts and 6 pts in two submissions)

### 6.3 OpenAI — Eval-production behavior gaps in agent safety and the role of eval-awareness
- **Source:** https://alignment.openai.com/eval-production-behavior-gap/ — https://news.ycombinator.com/item?id=503...

### 6.4 Google DeepMind — Agentic Cheminformatics with Google Antigravity
- **Source:** https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/ — https://news.ycombinator.com/item?id=50355690 (2026-11-03T18:07Z)
- **Antigravity**, Google's desktop AI assistant, being used for agentic cheminformatics. Notable because Antigravity otherwise saw no release in this window (`google-antigravity/antigravity-cli` last `1.4.12`, 2026-10-30).

### 6.5 Vercel — Computer use CLI for AI agents
- **Source:** https://agent-browser.dev/desktop — https://news.ycombinator.com/item?id=50348432
- A new **computer-use CLI** from Vercel — a new entrant into the agentic-CLI category from a web-infrastructure vendor.

### 6.6 Terminal-Mac: a separate macOS desktop for computer-use agents in your terminal
- **Source:** https://github.com/govijr/terminal-mac — https://news.ycombinator.com/item?id=50359027
- **Shotgun – Terminal Batch Web Search** — https://bweller.me/terminal-batch-web-search/ — https://news.ycombinator.com/item?id=50359933

### 6.7 GitHub Agentic Workflows are generally available
- **Source:** https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
- **Published 2026-10-28** (outside this window) but **trending on HN during the window** — https://news.ycombinator.com/item?id=503... (5 pts). Included because a GA milestone for GitHub's agentic workflow product is the single most consequential vendor-level change for this category and it is still circulating.

### 6.8 CrowdStrike AI Kill Switch
- Surfaced in the earlier part of the cycle — https://news.ycombinator.com/item?id=503... — enterprise kill-switch semantics for agentic systems.

### 6.9 "AI is destroying my CS degree" (119 points)
- https://lordtoots.bearblog.dev/ai-is-destroying-my-cs-degree/

### 6.10 "Why Every AI Model Will Ship as a Torrent"
- https://pirateface.co/articles/one-model-one-swarm — https://news.ycombinator.com/item?id=50359225

---

## 7. Gaps / errors / method notes

- **The delegated community subagent died at context compaction before writing its findings file.** Its raw output was recovered from the session transcript; Reddit and GitHub-issue data was re-collected directly to verify, and the TechCrunch items were re-fetched. The recovered transcript also contained a partial r/CLI listing (50 entries) that is reproduced in §5.4.
- **Reddit JSON API returns HTTP 403** for all four target subreddits; only `/new/.rss` Atom feeds work, and they are rate-limited (HTTP 429) — r/CLI, r/ChatGPTCoding and r/LocalLLaMA were retrieved with ~12 s spacing. **r/ClaudeAI returned HTTP 429 with an empty body on the final attempt and was NOT sampled** — this is a gap, not evidence of silence.
- **GitHub issue counts are search-API `total_count`** for `created:2026-11-02..2026-11-04` and the issue titles are a newest-first sample of ~18 per repo, not exhaustive.
- **GitHub REST API rate limit was hit** partway through the run (HTTP 403). Issue titles quoted here were fetched before the limit; the releases findings file used `releases.atom` to work around it.
- **Anthropic's S-1/A figures are reported via secondary coverage** (TechSpot, Business Insider, TechCrunch, The Register, epyhia) rather than read from the filing itself; the filing portal is https://ipo.anthropic.com/us/ . The $10B quarterly compute figure, the 1.72× revenue-per-compute-dollar ratio, the $5.0B in short-term compute commitments, and the ~$107K average monthly per-employee personnel cost are **as reported by those outlets**.
- **"OpenAI seems to be silently re-enabling model training on Codex chats"** is a HN text post (user report), **not independently confirmed**, and has no external URL.
- **Cat Wu's departure** is a Business Insider report; no primary confirmation.
- **The Register article body for the Revolut story** could not be extracted as clean paragraphs (the site strips `<p>` tags in its markup); the headline, the 10× figure, and the quoted lines above come from the salvaged transcript of the subagent's own fetch and from the Reddit cross-post.
- **Google Developers Blog** in-window posts could not be date-filtered from its Atom feed (see the releases findings file) — a gap carried over from Task 1.

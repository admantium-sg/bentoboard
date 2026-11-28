## 2026-08-31

### Claude Code — Five Releases Land: v2.1.248 Through v2.1.251 (August 27–28, 2026)
Anthropic pushed five releases in 48 hours (v2.1.247 through v2.1.251). The marquee release is **v2.1.251 (August 28)** with 60+ changes:

**Major new capabilities:**
- **`PreModelSwitch` and `PostModelSwitch` hook events:** Block, confirm, or annotate a model switch mid-session — enables policy enforcement and audit logging for enterprise
- **Live subagent streaming to Remote Control clients:** Foreground subagent tool calls and results stream in real time to Remote Control
- **Per-session prompt-cache stats in `/cost`:** Hit ratio, misses, tokens re-cached, warm/cold breakdown per session
- **Spend limit bar in `/usage`:** Visual spend tracking for developers behind a Claude apps gateway with spend limits
- **New CLI commands:** `attach`, `logs`, `stop`, `respawn`, `rm` added to `claude --help`

**Security fixes:**
- File tools could follow swapped symlinks post-permission-check to access files outside approved locations
- Plugin marketplace path traversal: commands could point outside plugin directory — now rejected
- Grep/Glob not applying `Read(...)` deny rules to symlinked search paths — now fixed
- Project settings could enable detailed beta tracing or raw API body logging — now blocked

**Other:** Agent team final answers now arrive properly; background subagent reply fixes; Claude Desktop cross-session messaging; install binary ~5MB smaller.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code — v2.1.248: `--restricted` Mode and Experimental Prompt Cache TTL (August 27, 2026)
Added `--restricted` mode (`CLAUDE_CODE_RESTRICTED=1`): removes built-in tools that run commands/code and `WebFetch`, keeps file tools inside working directory, refuses `bypassPermissions`, ignores user/project/local settings. Also added experimental `cacheTtl` for per-agent prompt cache TTL.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI — v0.152.0-alpha.4: Extensions Can Intercept MCP Tool Results (August 30, 2026)
v0.152.0-alpha chain advances to alpha.4:

- **Extensions inspect/replace MCP tool results:** Extensions can intercept and modify MCP tool results before they reach the model — control over AI response shaping
- **Configurable MCP grace period:** Grace period for discovering tools from optional MCP servers now configurable
- **Improved sandbox enforcement:** Using executor's actual home directory, OS, and path conventions
- **Model switch fixes:** Tool availability and reasoning effort stay correct when switching/falling back

v0.151.0 stable continues unchanged.

**Source:** https://github.com/openai/codex/releases

### JetBrains Survey: Claude Code at 39% Adoption, Codex 5x Growth (May–July 2026)
JetBrains' Developer Ecosystem Survey 2026 (15,000+ developers, May–July):

- **90%** of professional developers use AI coding agents weekly; **68%** daily
- **Claude Code:** 39% adoption globally (up from 18% in January); **47% in the US** — nearly half of all US developers. 31% say it's their primary tool (80% conversion from regular use to #1)
- **Codex:** 16% adoption (up from 3%) — ~5x growth. Awareness jumped from 27% to 65%
- **GitHub Copilot:** Declined from 29% to 21% YoY — lost market leadership
- **OpenCode:** 7% adoption, 42% awareness — remarkable for a no-brand open-source project
- **Google Antigravity:** Stable at 6% adoption; awareness jumped from 29% to 47%. India: 15% adoption

Claude Code is now "used twice as often as GitHub Copilot" — a notable reversal of Copilot's 3-year dominance.

**Source:** https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/

## 2026-08-27

### Claude Code — Silent Since v2.1.246; 48+ Hours Without Release (August 27, 2026)
Claude Code remains at **v2.1.246 (August 25)** — 48+ hours without a new release following the substantial stability/UX overhaul. The team appears to be in a quiet cycle after the intensive mid-August multi-sprint. No new commits or alpha tags detected.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.150.0 Alpha: Major Security Hardening and Multi-Agent Coordination (August 26–27, 2026)
v0.150.0 alpha chain actively developing with 50+ PRs. Key features:

- **@ mentions for cross-task referencing:** Reference and coordinate other Codex tasks from the terminal — shifts Codex toward a multi-agent coordination hub
- **/copy picker:** Select full responses, individual code blocks, or blockquotes
- **Auto-naming:** Unnamed terminal tasks receive descriptive titles automatically
- **Interrupt hooks:** Run commands or MCP handlers when an active turn is interrupted
- **Permission mode cycling keybindings:** Vim mode improvements

**Security:** Untrusted projects no longer supply AGENTS.md instructions; credential redaction improved in diagnostics; Windows sandbox elevated setup and Unicode path fixes; managed deny-read rules enforced after permission changes; Unix shutdown hangs prevented (detached processes no longer retain terminal/buffers).

**Bug fixes:** Remote MCP bearer-token lookup fixed; Amazon Bedrock conversation compaction and multi-agent compatibility resolved.

**Source:** https://github.com/openai/codex/releases

### Okta Agent SSO GA — AI Agents as First-Class Enterprise Identities (August 24, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Okta's Agent SSO reached general availability, bringing AI agents into Okta's Universal Directory as proper identities governed by the same access controls as human staff. The Cross App Access (XAA) standard is now native to Okta's core SSO product (20,000+ customers). Agents receive short-lived tokens instead of hard-coded credentials, policy assignment, and centralized access review. Coverage limited to compatible agents implementing the XAA protocol.

**Source:** https://www.okta.com/products/govern-ai-agent-identity/
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://smechannels.com/okta-brings-first-class-identity-to-ai-agent-with-agent-sso, https://www.publicnow.com/view/5FD8F5EE5F8898A6D79036207859A4196A34FC6F -->

### Temporal Report: 80.8% Daily AI Agent Use Among Engineers — 70.8% YoY Jump (August 26, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Temporal's 2026 State of Development Report (550+ engineers, US/UK): daily AI agent usage reached 80.8%, up from 47.3% a year earlier. 90% of respondents say agents have "improved" or "revolutionized" their productivity. Documents where agents succeed and where they break down in practice.

**Source:** https://www.finanznachrichten.de/nachrichten-2026-08/69401909-temporal-technologies-temporal-releases-the-2026-state-of-development-report-ai-agents-revealing-a-70-8-leap-in-ai-agent-use-among-engineers-004.htm
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://temporal.io/reports/state-of-development-2026, https://www.businesswire.com/news/home/20260825235670/ -->

### Keenable Exits Stealth: $26M Seed for 100B-Document Agentic Web Search (August 25, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Keenable launched with $26M seed (Accel-led, Conviction Partners, angels) to build web search infrastructure for AI agents. Founded by former Yandex search/AI head Andrey Styskin. 100+ billion document index with Search API for low-latency, high-frequency agent queries. MCP server for keyless access (up to 1,000 requests/hour). Commercial contracts with multiple AI labs. Positioning: "web search built for AI agents, not humans" — filling a gap as Google and Microsoft wind down open search APIs.

**Source:** https://siliconangle.com/2026/08/25/agentic-web-search-infrastructure-startup-keenable-raises-26m/
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://techcrunch.com/2026/08/25/accel-backed-keenable-is-indexing-the-web-for-ai-agents/, https://ventureburn.com/keenable-raises-26-million-for-ai-agent-search-index/ -->

### Anthropic Report: 80% of Organizations See Measurable ROI from AI Agents (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Anthropic's 2026 State of AI Agents Report (500+ technical leaders): 80% report measurable economic impact from AI agent investments; 88% expect continued or increased returns. Software development (57%) and customer service (55%) lead near-term impact; marketing/sales (46%) and supply chain/logistics (44%) follow.

**Source:** https://claude.com/blog/how-enterprises-are-building-ai-agents-in-2026
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://claude.com/blog/how-enterprises-are-building-ai-agents-in-2026, https://resources.anthropic.com/hubfs/The%202026%20State%20of%20AI%20Agents%20Report.pdf -->

### A2A Protocol Joins Linux Foundation Agentic AI Foundation (August 20, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Google's A2A protocol joined the Linux Foundation-directed Agentic AI Foundation (AAIF), joining Anthropic's MCP under neutral governance. AAIF now has 250+ members including AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI. Consolidation of A2A and MCP under AAIF reduces fragmentation for enterprise multi-vendor deployments.

**Source:** https://aiagentstore.ai/ai-agent-news/this-week
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://www.winzheng.com/en/article/google-a2a-protocol-agentic-ai-foundation-transfer, https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation -->

### Snowflake CoCo Automations Hits Public Preview (August 21, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Snowflake moved CoCo Automations into public preview — periodic unattended agent runs in a Snowflake-managed sandbox. Each run creates a Cortex thread that can be inspected and continued interactively. Data platforms becoming execution environments for scheduled, data-native agents.

**Source:** https://aiagentstore.ai/ai-agent-news/this-week
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://docs.snowflake.com/en/release-notes/2026/other/2026-08-21-cortex-code-automations-preview, https://www.beri.net/article/snowflake-coco-automations-default-role-agent-task-public-grant -->

### Aderant Launches Early Access to Law Firm AI Agents (August 26, 2026)
Legal software vendor Aderant opened early access to Agent Center: purpose-built AI agents for billing, collections, compliance, forecasting, and rate management within its Stridyn platform and MADDI AI layer.

**Source:** https://aiagentstore.ai/ai-agent-news/this-week

## 2026-08-26

### Claude Code — v2.1.246 Lands: Major Stability and UX Overhaul (August 25, 2026)
v2.1.246 is a substantial release, five versions ahead of last report's v2.1.241. Key additions:

- **Bash wildcard warning:** Startup warning for allow rules with wildcards before the subcommand (e.g. `Bash(git * main)`), since they also match options inserted before the subcommand
- **Auto mode permissions tab:** New tab in `/permissions` for viewing and editing auto mode classifier rules — clearer UX for the safety system
- **Turn completion time:** Completion time now shown at the end-of-turn line (e.g. `✻ Sautéed for 23s · done 6:05 PM`)

**Bug fixes include:** fullscreen transcript blanking after resize; severe slowdown on diffs with very long single lines (base64 strings now truncated with a marker); erratic fullscreen scrolling when at earlier messages; background sessions failing to open after machine sleep; headless/remote MCP interruptions incorrectly reported as "completed with no output"; `Notification` hook not firing during sandbox network permission prompts; API auth token refresh on idle; session telemetry credentials sent to wrong host when using third-party gateway; and ~25 more fixes spanning plugin system, slash commands, keybindings, theme handling, and platform-specific cleanup.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Browser Expansion and Site Tools (August 25, 2026)
No new version bump since v0.149.1, but the releasebot picked up a feature update:

- **Broader browser support:** ChatGPT browser extension now works in Microsoft Edge, Brave, Opera, and Vivaldi — not just Chrome. Set up in Settings > Computer Use in the ChatGPT desktop app
- **Site tools (WebMCP):** In the desktop app's built-in browser, ChatGPT Work and Codex can use tools provided by websites to interact with the page. Requires GPT-5.6 Sol or Terra. Unavailable for GPT-5.6 Luna or Enterprise/Edu workspaces
- **Cloud browser sign-in:** On eligible plans, ChatGPT Work on web, iOS, and Android can authenticate to supported websites through the cloud browser, keeping sessions separate from local browser data

The v0.150.0 alpha chain continues — stable remains v0.149.1.

**Source:** https://releasebot.io/updates/openai/codex | https://developers.openai.com/codex/changelog/?type=codex-app

### SpaceX Acquiring Anysphere (Cursor) for $60 Billion (Q2 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
The largest startup acquisition of 2026 so far: SpaceX confirmed intent to acquire Anysphere, maker of the AI coding tool Cursor, for $60 billion. This was the largest startup acquisition in history as of Q2 2026. The deal signals that AI coding tools have reached strategic importance at the infrastructure level — not just developer productivity, but core to how major technology companies think about their engineering moats.

**Source:** https://news.crunchbase.com/ma/spcx-acquires-ai-coding-cursor-largest-startup-ma-deal-2026/
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://tech-insider.org/ie/spacex-cursor-acquisition-60-billion-2026/, https://www.ceotodaymagazine.com/2026/06/spacex-anysphere-cursor-60bn-all-stock-deal/ -->

### Global Venture Funding Hits $510B in H1 2026; AI Absorbs 70%+ (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-27) -->
Crunchbase data confirms record first half: $510 billion in global venture funding, surpassing all of 2025 ($440B). Q1 was $305B; Q2 was $205B. More than 70% of Q2 capital went to AI companies, up from just under 50% a year earlier. OpenAI and Anthropic together took $217B — 43% of all startup funding in H1. 16 companies raised billion-dollar rounds in Q2 totaling $108.6B (53% of all Q2 funding).

**Source:** https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
<!-- Verified: 2026-08-27 -->
<!-- Sources: https://valueaddvc.com/pulse/crunchbase-h1-2026-record-510b-startup-investment, https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ai-startup-funding-record-h1-2026 -->

## 2026-08-25

### Claude Code — Silent; No New Release Since August 23 (August 25, 2026)
Claude Code remains at **v2.1.241 (August 23)** — now 48+ hours without an update. Continues the stabilization pattern after the intensive mid-August multi-sprint. Team appears to be in a quiet cycle, possibly preparing for the next feature release.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.149.1 Stabilizes; v0.150.0-alpha.8 Sprint Active (August 23–25, 2026)
**v0.149.1** landed as a stabilization point: queued messages wake idle sessions reliably; resumed/forked threads restore permission profiles; WebRTC reconnects without dropping output; Windows Terminal scrollback fixed. **v0.150.0-alpha.8** listed in release chain — alpha sprint continues with rapid iteration. Stable remains v0.149.1.

**Source:** https://github.com/openai/codex/releases | https://releasebot.io/updates/openai/codex

### Cline — v4.1.16: Hub Event Log Capped at 64 MiB; AgentRouter and Opper Added to Catalog (August 24–25, 2026)
**Hub event log capping:** Capped at 64 MiB on disk. Previously, full session snapshots accumulated to tens of gigabytes since row/time retention didn't bound file size and deletes never shrunk the SQLite file. Oldest events dropped first; space vacuumed; pruning runs after every 16 MiB appended instead of waiting for hourly sweep. Critical for long-running enterprise hub deployments.

**Model catalog refresh:** Adds AgentRouter and Opper as providers with updated model lists and pricing. Default model changes for Aki.io and NanoGPT. **Task.completed telemetry restored** for interactive sessions.

**Source:** https://github.com/cline/cline/releases

### Google ATLAS Study: Fewer Than 10% of AI Conversations Attempt Full End-to-End Automation (August 2026)
Google ATLAS v1.0 analyzed 15 million AI interactions across 150+ countries. For non-routine cognitive work where AI is used most: fewer than 10% tried end-to-end automation. Reality: humans working with AI, not AI replacing humans. Enterprise use cases notably absent from dataset.

**Source:** https://siliconcanals.com/t/google-atlas-15-million-ai-interactions-human-collaboration-automation

### Microsoft ThinkingBox: Open-Source Reliability Testing for AI Agents (August 2026)
Microsoft released ThinkingBox, an open-source sandbox for testing whether AI agents can do real work reliably — catching agents that pass once but fail repeatedly. Tests consistency, not just completion rate. Reliability becoming a buying criterion for enterprise.

**Source:** https://agentic.ai/news

## 2026-08-24

### Claude Code — v2.1.241 and v2.1.240: Quiet Reliability Pairs (August 22–23, 2026)
Two consecutive quiet releases focused on bug fixes and reliability improvements. No major features — the team appears to be stabilizing after the intensive multi-sprint that ran through mid-August.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Alpha Sprint Ramps to v0.150.0 with Interactive Agents Dashboard (August 21–24, 2026)
The v0.149.0 alpha sprint completed and stabilized. A new v0.150.0-alpha chain is now active with rapid iteration. **v0.150.0-alpha.2/3/5/6/7** landed in 48 hours with 5+ alpha tags, suggesting significant new features in development.

**v0.149.0-alpha.7.1/7.2:** Interactive `/codex agents` dashboard — search, start, open, rename, and stop tasks with configurable shortcuts. Shifts Codex from single-session tool toward multi-task agent manager. `/cd`, `/pwd`, `/cwd` commands for session directory management. `codex queue` sends messages to existing sessions. `codex doctor` expands to diagnose endpoint protection, network/proxy failures, desktop app state, and update connectivity. SDK gains exact CLI config overrides and `max`/`ultra` reasoning effort selection.

**Source:** https://github.com/openai/codex/releases

### Cline — v4.1.15: MCP Auto-Approve Fix; v4.1.14: Model Catalog Explosion (August 23–24, 2026)
**v4.1.15:** MCP toggle fix — "Use MCP servers" toggle now properly auto-approves all MCP tool calls when enabled. Previously appeared broken. Task completion telemetry restored for interactive sessions.

**v4.1.14:** Model catalog refresh adds Claude Fable 5, Grok 4.6 on Vertex, DeepSeek V4 Flash variants (including vision preview), MiMo v2.5, Qwen3.8 27B, Gemma 4 26B, LongCat 2.0, Nemotron 3.5 Lightning, and Thinking Machines' Inkling. Hub session resilience: reconnecting clients replay missed events with deduplication. Langfuse traces now carry session identity for hub-backed and delegated-agent runs.

**Source:** https://github.com/cline/cline/releases

### Kilo — v7.4.23: PR Review Overhaul, Agent Manager Inspector Tabs, NVIDIA STT (August 20–24, 2026)
**PR Review comments overhaul:** Resolved threads collapse into one-line rows in a Resolved group; structured review comments with Send to agent, Resolve, Copy, Open file, and Open on GitHub actions; single button sends all unresolved comments; comments arrive as structured data rather than pasted text.

**Delegated subagent sessions** now open in Agent Manager inspector tabs alongside terminals — better visibility into multi-agent workflows.

**NVIDIA Parakeet TDT 0.6B v3** as default speech-to-text model with dynamic discovery and offline fallback. **JWT share tokens** now accepted on Kilo share URL imports. Performance optimizations for Agent Manager tab switching, context transition, large session loading, and reactive re-renders.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Enterprise Adoption: 86% Deploy Agents for Production Code (August 2026)
Anthropic's enterprise data: 90% of organizations use AI for development assistance; 86% deploy agents for production code. 81% plan more complex use cases — 39% developing multi-step agent processes, 29% deploying cross-functional agents.

**Source:** https://claude.com/blog/how-enterprises-are-building-ai-agents-in-2026

### Agent Infrastructure Launches (Week of Aug 17–23, 2026)
- **Microsoft Agent Lightning v1.0:** Open-source reinforcement learning framework for training agents without disrupting production setups
- **Nuggets Authority Control Plane:** Governance layer sitting between agents and enterprise systems to block risky actions in execution path
- **Google EnvHarness:** Programmable wrapper for agent training environments that adapts to agent weaknesses in real time
- **HelloGov GovSchema:** Open standard for AI agents interacting with government services — 643 schemas across 124 jurisdictions
- **ShepHertz AgentAnywhere:** Sovereign AI platform for banks, hospitals, governments running agents on their own infrastructure
- **Baidu Task Engine 2.0:** Free autonomous task execution upgrade for Ernie Bot

**Source:** https://agentic.ai/news

## 2026-08-22

### Claude Code — v2.1.239: Fullscreen Renderer Expansion, /claude-api Upgrade, Cloud Plugin Sync (August 21, 2026)
50+ changes continuing the rapid release cadence. Fullscreen renderer offer now extends to Bedrock, Vertex, Foundry and other previously excluded setups; new installs there start in fullscreen by default. `/claude-api upgrade` migrates Python projects from `anthropic` 0.x to 1.x. Cloud plugins synced from claude.ai now tagged as `name@synced` and never override same-named local plugins. Alpine/musl builds now load native image paste, clipboard, and audio-capture add-ons. Usage-limit messages now include session/weekly reset times. Bedrock streaming behind proxies that strip Content-Type header no longer silently doubles billed API calls. Bedrock SSO startup hanging fixed (credential pre-check now honors `HTTPS_PROXY`). Windows cross-session messaging now works via `SendMessage` and `ListAgents` across machines. Many bug fixes including MCP elicitation form clipping in fullscreen, Remote Control reconnect resilience, vim mode cursor behavior, and OpenTelemetry trace fragmentation.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.149.0-alpha.7.1: Interactive Agents Dashboard, /cd, codex queue Land in Alpha (August 21, 2026)
The v0.149.0 alpha sprint accumulated v0.148.0 stable features and more. Interactive `/codex agents` dashboard: search, start, open, rename, and stop tasks with configurable shortcuts — shifts Codex from single-session tool toward multi-task agent manager. `/cd`, `/pwd`, `/cwd` commands for managing session working directory in TUI. `codex queue` sends messages to existing local or remote sessions, queuing when target is busy. `codex doctor` now diagnoses endpoint protection, network/proxy failures, desktop app state, and update connectivity. TypeScript SDK supports exact CLI config overrides and `max`/`ultra` reasoning effort. Guardian V2 safety layer work: risk score bounding, compaction context, approval routing. DNS exfiltration risks for devcontainers now explicitly documented. v0.148.0 stable features fully carried forward.

**Source:** https://github.com/openai/codex/releases

### Codex CLI — v0.150.0-alpha.2/3/5/6: New Sprint Already Underway (August 21–22, 2026)
Four tags of v0.150.0-alpha landed rapidly (alpha.2, 3, 5, 6), skipping alpha.1 and alpha.4 — fast iteration suggesting an active new development cycle. Stable remains v0.148.0. v0.149.0 alpha sprint effectively superseded.

**Source:** https://github.com/openai/codex/releases

### Cline — v4.1.12: Image Generation Inline, Enterprise MCP Controls, CRLF Fixes (August 21–22, 2026)
Models that support image generation now render results inline in the transcript during tasks; ACP clients receive generated images as image content. Enterprise MCP controls: marketplace entries hidden when remote config disables marketplace, limited to `allowedMCPServers` when allowlist configured. CRLF diff rendering fixed for multi-line edits on Windows. Session resumption now continues the surviving session rather than rebuilding from task text. Task settings overlay clears between tasks — no more override leakage. `@file` mentions fixed for paths with spaces. PowerShell fail-fast at first pipeline error. Remote configuration sync with coordinated refreshes, session gating, and fail-closed opt-out.

**Source:** https://github.com/cline/cline/releases

### Cline — v4.1.11: Provider Tool Activity, PostToolUse Hooks, Model Catalog Refresh (August 20–21, 2026)
Provider tool activity visibility: every tool the Claude Code provider executes inside its own session now surfaces in runtime events, transcripts, and UI. PreToolUse `contextModification` now reaches the model on the next engine turn; PostToolUse hooks now awaited (120s bound) with output and cancel controls honored. Model catalog refresh adds AMD, Arcee, Echo, Jalapeno, Kosmik, LLM Gateway, RunInfra, SCNet as providers; renames scx to scx-ai. LiteLLM input token limits preserved instead of overwritten with catalog values. Gateway usage billing displayed.

**Source:** https://github.com/cline/cline/releases

### Kilo — v7.4.23: Agent Manager Inspector Tabs, PR Review Overhaul, NVIDIA STT Default (August 20–22, 2026)
Delegated subagent sessions now open in Agent Manager inspector tabs alongside terminals for better multi-agent visibility. PR review comments overhaul: resolved threads collapse into one-line rows in a Resolved group; structured review comments with Send to agent, Resolve, Copy, Open file, Open on GitHub actions; single button sends all unresolved comments. NVIDIA Parakeet TDT 0.6B v3 as default speech-to-text model with dynamic discovery and offline fallback. `@terminal` capture fixed to use focused Agent Manager terminal instead of unrelated VS Code terminal. Incremental assistant text streaming restored. JWT share tokens accepted on Kilo share URL imports. Agent Manager performance optimized for tab switching, context transition, large session loading, and reactive re-renders.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-08-20

### Claude Code — v2.1.236: Cross-Session Idle Notifications, macOS Sandbox Hardening (August 19, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-20) -->
<!-- Verified: All features confirmed on official changelog. ANTHROPIC_DEFAULT_MODEL, notify_when_idle, macOS sandbox hardening, clipboard fixes, fullscreen renderer fallback, /model picker fix, SendMessage fixes, self-hosted runner fixes, auto mode Monitor rules, /usage credits row, VSCode screen reader support all confirmed. -->
<!-- Sources: https://code.claude.com/docs/en/changelog -->

30+ changes continuing the recent reliability push. `ANTHROPIC_DEFAULT_MODEL` env var sets the default model for new sessions (overridable by `/model` pick). Cross-session `SendMessage` now supports `notify_when_idle` — ask another Claude Code session on this machine to send one notice when it next goes idle, opt-in and one-shot with no polling (macOS and Linux). macOS sandbox hardening: wildcard read-deny rules (e.g. `**/.env`) now take precedence inside allowed read regions, cover matched directories' contents, and cannot be bypassed by renaming the denied file. Fixed: clipboard copy/background housekeeping/cloud sessions breaking after the session's directory was deleted; fullscreen renderer failing permanently after a single failed start (now falls back to classic renderer); `/model` picker rendering taller than the terminal; `SendMessage` calls rejected on malformed closing tags; self-hosted runner sessions occasionally resuming on another runner before the post-session hook finished. Improved auto mode: `Monitor` allow rules are now set aside while auto mode is active so Monitor commands are reviewed the same way Bash commands are. `/usage` now shows the usage-credits spend row for Team and Enterprise members. VSCode: screen reader support for the transcript with live announcements for replies, permission requests, errors, and status changes.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.149.0 Alpha Sprint Begins; Two Alpha Tags Land (August 19–20, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-20) -->
<!-- Verified: Alpha tags 0.149.0-alpha.1, alpha.2, alpha.3 confirmed on GitHub. All features verified: /export, codex exec fork, session archiving/restoring, estimated thread credits, Amazon Bedrock Runtime, async hooks, MCP tool invocation, model switch fixes, sandbox fail-closed. -->
<!-- Sources: https://github.com/openai/codex/releases -->

New development cycle: v0.149.0-alpha.1 and alpha.2 are now live, following the v0.148.0 stable release that landed August 18–19. The v0.149.0 alpha chain introduces new features including `/export` for Markdown conversation export, `codex exec fork` for session forking, session archiving and restoring from the TUI resume picker, and estimated thread credits or cost in `/status`, status lines, and terminal titles for eligible workspaces. Amazon Bedrock Runtime is now a built-in provider with AWS profile, region, and GPT-5.6 routing support. Hooks can now run commands asynchronously and invoke MCP tools. Model switches and settings updates no longer leave stale instructions behind or change an active turn midstream. Sandbox restrictions now fail closed for denied or unreadable paths across Linux and Windows.

**Source:** https://github.com/openai/codex/releases

### Cline — Desktop v0.0.14: Voice Input, Cloud Sessions Preview, Cline Code Beta (August 19–20, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-20) -->
<!-- Verified: All features confirmed on GitHub releases. Voice input with microphone, cloud sessions preview, image generation inline, redesigned question prompts, reasoning animation, collapsed agent runs summary, Cline Code Beta app, SSH remote POC all confirmed. -->
<!-- Sources: https://github.com/cline/cline/releases -->

Major desktop release introduces voice input: dictate into the composer with the microphone button, transcribed using the configured provider and model. Cloud sessions (preview): run sessions in Cline's cloud straight from the desktop app, connect GitHub during onboarding, pick a repository and branch, hand sessions off between devices with transcripts, approvals, and queued prompts staying in sync. Model-driven image generation now renders inline in the transcript for models that support it. Redesigned question prompts with explicit option selection, button submission, multiple-choice support, and keyboard shortcuts. Reasoning traces and tool rows now animate open/close instead of snapping, respecting reduced-motion settings. Finished agent runs collapse into a single expandable summary. A new "Cline Code Beta" app installs side-by-side with stable and tracks the experimental branch. Early proof-of-concept for running sessions in SSH remote environments.

**Source:** https://github.com/cline/cline/releases

### Cognition (Devin) — Reportedly Eyeing $1B+ Raise at $40B+ Valuation (August 13, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-20) -->
<!-- Verified: Multiple sources confirm $40B valuation talks. TechCrunch confirms: "reportedly already in talks to raise another funding round". MastserNodeAI confirms $40B valuation contingent on $1B ARR. Note: Valuation is contingent on achieving $1B ARR - this is early stage negotiation. -->
<!-- Sources: https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation/, https://www.masternodeai.com/en/news/cognition-40b-valuation-talks-1b-arr-devin -->

The lab behind the Devin coding agent is reportedly in negotiations for a raise exceeding $1 billion at a valuation above $40 billion, per AI Agents Directory reporting. If confirmed, it would be one of the largest rounds ever for an agent-focused company. No comment from Cognition. This follows HappyRobot's $150M Series C at $1.2B and Zenity's $125M agent governance round as the enterprise agent category continues commanding premium valuations.

**Source:** https://aiagentsdirectory.com/news

## 2026-08-19

### Codex CLI — v0.148.0 Stable Lands After 3-Week Alpha Sprint (August 18–19, 2026)

The alpha sprint is over. v0.148.0 is now stable, closing a three-week run that began with alpha.1 on August 1 and produced 21+ alpha tags before the stable release. This is the most feature-dense stable release this cycle: /export TUI conversations to Markdown, codex exec fork for session forking, session archiving/restoring, estimated thread credits in /status, Amazon Bedrock Runtime as built-in provider with GPT-5.6 routing, async hooks that can invoke MCP tools, model-switching reliability fixes, turn reconnection through provider outages, MCP recovery after OAuth reauth, and sandbox fail-closed for denied paths on Linux and Windows.

**Source:** https://github.com/openai/codex/releases

### Claude Code — v2.1.235: Spellcheck, LSP Cache Fix, Background Session Optimizations (August 18, 2026)

Quietest release in weeks — 30 changes focused on polish and reliability. Optional spellcheck setting using aspell/hunspell/ispell underlines misspelled words in the prompt input. Background cloud sessions (/ultrareview, /autofix-pr) now consume far less memory and CPU — event streams no longer re-scanned and re-rendered on every update. Bug fixes: whole-prompt-cache invalidation on LSP disconnect/reconnect; nested markdown list alignment at depth 3+; prompt input highlight offset in multi-line prompts; Shift+Tab permission dialog not approving edits unexpectedly. Embedded grep in native macOS/Linux builds fails fast on pathological patterns instead of exhausting memory.

**Source:** https://code.claude.com/docs/en/changelog

### Cline — v4.1.10: Provider-Executed Web Search, Hub Stability Fixes (August 17–18, 2026)

Provider-executed web search: models that support it can search the web during a task with results persisting across session reloads (off by default, toggle in Feature Settings). Hub daemon stability: two Cline installations on different builds no longer shut each other's Hub down in a loop; newer builds attach over the wire protocol instead of replacing a serving Hub; idle plugin sandbox processes now reclaimed. Dedicated Cline gateway provider replaces generic OpenAI-compatible path; extended thinking budgets now reach both cline and cline-pass properly.

**Source:** https://github.com/cline/cline/releases | https://github.com/cline/cline/compare/v4.1.9...v4.1.10

### Kilo — v7.5.x Pre-Release: JetBrains Agent Manager Beta (August 18, 2026)

JetBrains Agent Manager beta: create, open, organize, rename, and delete worktree-based tasks and sessions from the JetBrains IDE. Worktree activity, change tracking, ahead/behind counts, and PR badges now in Agent Manager. Multi-window worktrees: open Agent Manager worktrees in new windows and dedicated terminal tabs. JetBrains chat readability improved with centered readable width, refreshed prompt chrome, stable tail-follow, and clearer failed-turn outcome cards. Session recovery preserves non-idle states (pending permission, pending question, retry, offline). Empty persisted sessions show intended empty panel instead of blank transcript.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-08-18

### Q3 Funding Tracker — August $681.5M Through Day 15; Avg Cheque Doubles (August 16, 2026)
August cleared July's entire month by day fifteen. Seven disclosed rounds worth $681.5M between August 1–15, against thirteen rounds worth roughly $643M across all of July. The average disclosed cheque doubled from ~$49M (July) to ~$97M (August). Notable: Zenity ($125M, August 3) and Obsidian Security ($85M, August 4) took $210M in forty-eight hours — agent governance rounds averaging $105M per deal, outpacing the broader agent category average. Q3 2026 total: twenty disclosed rounds, ~$1.32B. Enterprise automation, infrastructure, and agent governance remain the funded layers; thin wrappers continue not to raise.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

### Claude Code — v2.1.234: Auto Session Continuation, GitLab MR Badges, Expanded NT Path Hardening (August 17, 2026)

46 changes, a quieter release after last week's four-sprint. Auto session continuation when claude.ai usage limit resets (configurable via `/config`); account email now used only for identity, not forwarded to unrelated services. GitLab MR badge in footer/statusline for repos with authenticated `glab` CLI — MR `!N` with draft/pending/green states. NT-namespace (`\\??\`) path hardening **expanded** beyond the August 14 fix to cover all pre-approval file accesses: remote file reads, session restore, `CLAUDE.md` includes, workflow scripts, and file uploads. Auto mode compaction regression fixed (was repeatedly re-checking sandboxed command network access after compaction). Background subagent permission answers now preserved. Auto-generated session titles now short and specific ("Login button bug") instead of sentences ("Fix the login button on mobile"). Built-in `claude-api` skill context cost reduced from ~200k+ tokens to ~25k via on-demand reference doc loading. `/goal` now checks in after 30+ minutes of waiting on background tasks. Esc key no longer clears mouse text selection.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.148.0-alpha.21; Sprint at Alpha.21 (August 17–18, 2026)
v0.148.0 alpha sprint now spans alpha.12 through alpha.21 — ten consecutive alpha releases with no stable tag. Stable remains v0.147.0. Rapid pre-release cadence continues.

**Source:** https://github.com/openai/codex/releases

## 2026-08-17

### Claude Code — Triple Release Sprint: v2.1.229, v2.1.231, v2.1.232, v2.1.233 (August 12–14, 2026)

Four releases in 72 hours after the extended silence that ended August 11. The sprint was stabilization-heavy with notable security content:

**v2.1.233 (August 14):** GitLab MR URLs with `--worktree` and `claude agents` view display as `!N`; `forward_user_identity` apps gateway setting for per-user spend attribution; `CLAUDE_CODE_TOOL_MEMORY_LIMIT` for Linux memory cgroups on Bash commands; `CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS` for cache TTL tuning; **NTLM credential-leak vector patched** — Windows paths with `\\??\` device prefix bypassed UNC path validation; PowerShell `$PSDefaultParameterValues` permission bypass patched; Todo/task tools stripped from Opus 4.8+, Sonnet 5, Fable 5, Mythos 5+ (opt-in via `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`).

**v2.1.232 (August 13):** **Subagent forking ON by default** — `subagent_type: "fork"` inherits full conversation and prompt cache; non-teammate agent spawns in interactive sessions run in background by default; **@ mentions for cross-session messaging** — type `@` to mention another session by name; `SendMessage` now delivers to bare names matching live sessions; unique session names enforced across machines; GitLab token redaction expanded to `glrt-`, `gloas-`, `glptt-`, `glagent-`, `glimt-`, `glsoat-`, `glcbt-`, `glft-`, `glffct-` families plus `glpat-`/`gldt-`; `glab` CLI config gets sandbox + credential-path protection like `gh`; GitLab added to plugin marketplace clone targets; Windows permission bypass patches (PowerShell variable-writing, Git Bash Cygwin-style symlinks); `/code-review` at high/xhigh/max now runs as background subagent.

**v2.1.231 (August 13):** Fixed MCP OAuth sign-in failing with redirect URI mismatch for servers using pre-registered OAuth clients (e.g., Slack).

**v2.1.229 (August 12):** SSE keepalive pings during long thinking pauses — prevents idle-timeout disconnects on Vertex and Bedrock; plugin marketplace `command` sources — local commands print plugin directory, re-resolved each session without restart; `ListAgents` marks disconnected Remote Control sessions as `offline` and labels cloud sessions as `cloud`; auto mode regression fixed for users with disabled attribution header; `/feedback` and `/bug` open immediately while Claude is responding.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.148.0-alpha.20; Sprint Reaches 10 Alphas (August 16–17, 2026)
Pre-release sprint at full pace. v0.148.0 alpha chain spans alpha.11 through alpha.20 — ten consecutive alpha releases with no stable tag yet. Stable remains v0.147.0. Rapid pre-release development continues.

**Source:** https://github.com/openai/codex/releases

---

## 2026-08-16

### Claude Code — v2.1.233 (August 14, 2026)
GitLab merge request URLs now work with `--worktree` and display in `claude agents` view as `!N`. New opt-in `forward_user_identity` apps gateway setting sends signed-in user identity as headers for per-user spend attribution — enterprise teams can finally track spend per developer. New `CLAUDE_CODE_TOOL_MEMORY_LIMIT` env var enables Linux memory cgroups for Bash tool commands, so runaway builds can no longer stall the session. `CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS` allows tuning WebFetch cache TTL (default unchanged at 15 minutes). Fixes: cloud sessions no longer marked lost during env shutdown while waiting on permission prompts; MCP v2 connections no longer endlessly reopening against servers with fixed stream timeouts; idle Linux sessions with sandboxing no longer pin a CPU core at 100%; bundled skill aliases like `/checkup` and `/review` no longer report "Unknown command" when shadowed in `-p` mode. Skill/command argument substitution now prevents values from being re-expanded as template markers. PowerShell permission bypass on `$PSDefaultParameterValues` also patched. Todo/task tools remain stripped from Opus 4.8, Sonnet 5, Fable 5, Mythos 5 and newer.

**Source:** https://code.claude.com/docs/en/changelog

### Cline — v3.0.55 (August 15, 2026) — SDK v0.0.75
Auto-updates now deferred when a CLI is attached to the Hub — the update is recorded at startup and applied on exit once the Hub confirms nothing else is attached, preventing the "connection closed (code=1006)" session death that plagued v3.0.54 and earlier. Added explicit defusal for the update path in older CLIs whose updater restarts Hub mid-session and then rejects all replacements, bricking the running session. Streaming markdown no longer flashes back to raw text on each chunk — headings, links, and code now stay rendered as new chunks arrive. Interface switched to Inter and Geist Mono fonts. Web search calls and results from natively-searching models now render in the transcript. `cline doctor fix` now reports honestly about respawning parents and held locks. Model catalog refreshed with Crusoe as a provider.

**Source:** https://github.com/cline/cline/releases | https://github.com/cline/cline/compare/cli-v3.0.54...cli-v3.0.55

### Kilo — v7.4.24 (August 15, 2026)
Clickable file references: code spans in agent responses that match real workspace files become links that open the file at the referenced line; dead links show a "File not found" warning. Agent Manager PR comment actions: resolve/unresolve review threads, jump to comments, scroll-to-top for PR diff view. Subagent permission fix: read-only or delegating agent's `readOnlyBash` allowlist no longer projected onto writable subagents as a bash ceiling. Structured AWS access keys and Google Cloud service-account JSON now supported for Bedrock and Vertex AI connections in VS Code. OpenCode upstream v1.18.0 changes: code mode MCP adapter for confined orchestration scripts; hidden execute tool unless code mode enabled; improved Meta Muse Spark system prompt; Azure AI GPT-5.6 support; disabled response storage by default for xAI Responses.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI — v0.148.0-alpha.19 (August 15–16, 2026)
New alpha sprint tag — ninth alpha release in the current cycle (alpha.11 through alpha.19). Stable remains v0.147.0. Rapid pre-release development continues.

**Source:** https://github.com/openai/codex/releases

### GLM-5.3 Claims Cursor Vulnerability (August 15, 2026)
Reports emerged that Zhipu AI's cyber-focused model GLM-5.3 identified a serious vulnerability in Cursor. VentureBeat covered the story. No public patch timeline or severity rating confirmed as of this report. Pattern mirrors the Claude Code CVE and Gemini CLI equivalent disclosures from earlier in August — AI coding tools are under active security scrutiny.

**Source:** https://agentic.ai/news (Week of Aug 10–16)

### Ecosystem: 96.4% AI Coding Adoption; Memory Standards Emerging
GitKraken's 2026 State of AI in Engineering survey (554 developers and leaders) finds 96.4% of engineering teams using AI coding tools — near-universal adoption. TencentDB Agent Memory passed 20,000 GitHub stars in 90 days and launched Team Memory for shared agent knowledge. Starling Memory Works published Universal Cognitive Architecture, a Creative Commons open standard for connecting organizational knowledge to AI models without surrendering data ownership. DeepJudge's Agent Handoff Protocol (supported by Harvey and Thomson Reuters) released as an open standard for moving user context between AI products.

**Source:** https://agentic.ai/news | https://www.cnhinews.com/news/article_f4f3f395-9b35-5559-b9a8-c7ecd92bc203.html | https://www.research-live.com/article/news/starling-mx-launches-open-standard-for-working-with-ai-models/id/5151987

---

## 2026-08-13

### Claude Code — v2.1.228: Skills Shadow Fix, Session Redraw, Git Path (August 11, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: 18 changes confirmed on claudeupdates.dev and code.claude.com -->
<!-- Sources: https://www.claudeupdates.dev/version/2.1.228, https://code.claude.com/docs/en/changelog -->

v2.1.228 patches session redraw freeze after layout errors; Windows git path resolution fix for Claude Code launched from parent folders; cross-session messaging inbox race condition fixed; Remote Control /resume no longer leaks conversation history; self-hosted runners skip repos with failing checkout hooks; session cleanup no longer deletes project memory folders; **skills synced from claude.ai no longer shadow local commands** (long-standing fix); newer models can overwrite files they haven't read this session (matching Edit tool); compaction progress shows retry countdown and stall hint; Vertex AI credentials fail fast instead of retrying. v2.1.227 fixed feature flags for expired login tokens, /tui revert issue. v2.1.226/225 added gateway spend-limit support, workspace trust prompts, MCP OAuth fixes. v2.1.224 added self-hosted runner support, archive plugin source (zip over HTTPS with SHA-256 pinning), sandbox credential masking options (JWT-aware, AWS SigV4), 200-subagent cap removed, cross-session SendMessage. v2.1.223 added /teleport hint for cloud sessions, /review as alias of /code-review. v2.1.222 (August 4): worktree isolation hardening, PreToolUse hook bypass fixed for background tasks.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.148.0-alpha.9 Sprint Active; v0.147.0 Stable Lands (August 7–12, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: All features confirmed on GitHub releases page with specific PRs -->
<!-- Sources: https://github.com/openai/codex/releases -->

v0.147.0 stable released August 7 with major features: portable agent plugins installable from local/personal/workspace/remote catalogs with search; persistent conversation sections for organizing long transcripts; `--approve-for-me` CLI flag for auto-reviewed approvals; Cursor/Claude import and sync without duplicates; MCP 2026-07-28 support (paginated discovery, multi-round requests, non-blocking server startup); cached web search and remote compaction for Amazon Bedrock; secrets/bearer tokens redacted from displayed commands and replayed history; plugin isolation hardened; deprecated `codex exec --full-auto` removed. v0.148.0 alpha sprint now at alpha.9 — fresh cycle with continued pre-release development.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.4.21 — Agent Manager Keyboard UX, Model Search, Nested /review (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: All features confirmed on GitHub releases with specific PRs and commit hashes -->
<!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

Agent Manager keyboard navigation overhaul: Cmd+/ focuses embedded terminal before hiding; Cmd+Shift+T creates side terminal contextually; Cmd+Shift+[ / ] switch terminal tabs; Cmd+Shift+M focuses Agent Manager prompt; Cmd+W hides last side terminal instead of stopping shell. Provider-aware model search with personalized usage suggestions. Multi-project worktree repo selection. Nested slash command suggestions for /review in VS Code with staged/unpushed/quick review modes. Pre-session model catalog browsing. Model/agent/variant/sandbox slash commands in worktree prompts. JetBrains: editor context included in prompts (active file, open/visible files, selected text, shell context). AAC audio compression for speech-to-text across all platforms.

**Source:** https://github.com/Kilo-Org/kilocode/releases

---

## 2026-08-12

### Claude Code — v2.1.228 (August 11, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: 18 changes confirmed on claudeupdates.dev; all features verified -->
<!-- Sources: https://www.claudeupdates.dev/version/2.1.228, https://code.claude.com/docs/en/changelog -->

New release ~24 hours after v2.1.227 with long reliability fixes list. Key changes: session redraw freeze after layout errors fixed; Windows git path resolution fixed; cross-session messaging inbox race condition fixed; Remote Control /resume no longer leaks conversation history; self-hosted runners skip repos with failing checkout hooks; session cleanup no longer deletes project memory folders; skills synced from claude.ai no longer shadow local commands (long-standing); newer models can overwrite files they haven't read this session (matching Edit tool); compaction progress now shows retry countdown and stall hint; Vertex AI credentials fail fast instead of retrying for minutes. **Source:** https://code.claude.com/docs/en/changelog#2-1-228 | https://releases.sh/anthropic/claude-code

### Kilo — v7.4.21: Agent Manager Keyboard UX, Model Search, Nested /review (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: All features confirmed on GitHub with specific PRs -->
<!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

Agent Manager keyboard navigation overhaul: Cmd+/ focuses embedded terminal before hiding; Cmd+Shift+T creates side terminal contextually; Cmd+Shift+[ / ] switch terminal tabs; Cmd+Shift+M focuses Agent Manager prompt; Cmd+W hides last side terminal instead of stopping shell. Also: provider-aware model search with personalized usage suggestions; multi-project worktree repo selection; staged/unpushed/quick /review modes in VS Code; pre-session model catalog browsing; model/agent/variant/sandbox slash commands in worktree prompts. **Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline — v4.1.8: Yolo Mode Removed, Fable 5 on Vertex, Compaction Fixed (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: Yolo Mode removal confirmed; auto-approve migration confirmed -->
<!-- Sources: https://github.com/cline/cline/releases, https://www.change8.dev/ai-tools/cline/v4.1.8 -->

Yolo Mode toggle removed — it was cosmetic (nothing in approval path read it); auto-approve menu is now the single source of truth for unattended runs, preserving behavior for migrated setups. Compaction on reasoning models fixed: summarizer no longer hardcodes 1024-token cap, honors explicit max-output-tokens (defaults 4096), logs diagnostic on empty summary. Fable 5 (claude-fable-5) added to Vertex catalog with correct "unknown" pricing. Hub daemon upgrade fix: runtime build fingerprint prevents stale daemon reattachment after upgrade. "View Changes" button restored on completion rows. **Source:** https://github.com/cline/cline/releases

### Agentic Ecosystem Digest — MCP for Research Data, AgentPay, Factory Agents (August 10–11, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: MCP servers, AgentPay API, Agent EyeQ confirmed via agentic.ai -->
<!-- Sources: https://agentic.ai/news -->

---

## 2026-08-08

### Codex CLI v0.147.0 — Major Stable Release Lands (August 7, 2026)

The alpha sprint is over: **v0.147.0 is now stable** after ~2 weeks of rapid alpha releases. Six major feature areas:

**Portable Agent Plugins**: Install from local, personal, workspace, and remote catalogs; search across all four. Plugin manifests are first-class artifacts.

**Persistent Conversation Sections**: Organize long transcripts into manually ordered, named sections — critical for extended projects.

**`--approve-for-me` CLI flag**: Enable automatically reviewed approvals via new CLI flag for trusted environments.

**MCP 2026-07-28 support**: Full opt-in support for the July 2026 MCP revision — paginated discovery, multi-round requests, non-blocking server startup. SDK upgraded to MCP 3.0.0.

**Cursor/Claude import and sync**: Import Cursor-managed skills and synchronize changes to imported Claude/Cursor conversations without creating duplicates.

**Bedrock expansion**: Cached web search and remote conversation compaction now work with Amazon Bedrock.

**Security**: Secrets/bearer tokens redacted from displayed commands and replayed history; plugin isolation hardened; network denied when policy updates fail; explicit trust required for unfamiliar local projects.

**Other**: Ratatui 0.30.2, V8 150.4.0; macOS notarization via Azure Key Vault; deprecated `codex exec --full-auto` removed (use `--sandbox workspace-write`).

**Source:** https://github.com/openai/codex/releases | https://releasebot.io/updates/openai/codex

### Claude Code — CVE-2026-54316 Confirmed Patched at Black Hat; 4 Days Without Release (August 5–8, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: CVE-2026-54316 confirmed by NVD and The Hacker News -->
<!-- Sources: https://nvd.nist.gov/vuln/detail/CVE-2026-54316, https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html -->

**No new releases** since v2.1.222 (August 4) — now 4 days of silence. Meanwhile, Novee Security presented at **Black Hat USA (August 5)** disclosing **CVE-2026-54316**: Claude Code's command validator stripped single-quoted text before its 23 checks ran, so a payload embedded in `git push --receive-pack` reached the CI runner untouched. The attack exfiltrated an API key one character at a time through Hugging Face's public download counter. **Patched in 2.1.163**; all releases from 0.2.54 through 2.1.162 are affected. Anthropic rates it Moderate (CVSS v4 6.0); NVD scored it 9.1 (CVSS v3.1). Neither CVE is in CISA's Known Exploited Vulnerabilities catalog as of August 7. GitHub advisory: GHSA-fg94-h982-f3mm.

OpenAI's Codex had no product-version patch for its equivalent finding — the fix was repository-level workflow separation and documentation treating instruction files as untrusted input.

**Source:** https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html | https://novee.security/blog/critical-flaws-in-anthropic-google-and-openais-coding-agents/

### ChainDrop npm Worm Plants Claude Code SessionStart Hooks in 400+ Packages (August 4–7, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: 400+ packages confirmed; Claude Code hooks in .claude/settings.json confirmed -->
<!-- Sources: https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html -->

Pillar Security reported (August 4) that the ChainDrop npm worm — backdooring 400+ npm packages across 2,212 versions, stealing developer and CI credentials — inserted a **Claude Code SessionStart hook** and a **VS Code folderOpen task** in compromised repositories. The hooks fired on workspace open (VS Code) and agent session start, not just npm install — covering the full developer lifecycle with three infection vectors. Microsoft confirmed the ChainDrop details August 4. This is a live supply-chain attack that weaponized Claude Code's extension API as an infection vector.

**Atlas shutdown in 1 day (August 9)**: OpenAI's Atlas browser stops working tomorrow. No Windows/iOS/Android release ever shipped. Agentic browsing consolidating into ChatGPT and Codex.

**Source:** https://www.pillar.security/blog/chaindrop-when-opening-a-repository-becomes-execution | https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html

### Cline v4.1.6 + Desktop v0.0.10 — OAuth MCP, Meta Muse Spark, Error Attribution (August 6–7, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: OAuth MCP, Meta Muse Spark confirmed on GitHub -->
<!-- Sources: https://github.com/cline/cline/releases -->

**v4.1.6** (August 7): Meta Muse Spark 1.2 Contributor selectable on Cline's built-in provider; error telemetry now correctly attributed to the model actually in use (not misattributed).

**Desktop v0.0.10** (August 6/7): Remote MCP servers now authenticate with OAuth from Settings → MCP — authorize, see auth status, cancel/retry pending auth; pre-registered OAuth clients (client ID/secret) supported alongside dynamic registration; stored tokens invalidated on server config change. MCP errors surfaced at individual server level. Failed turns show enriched error with pointer to Settings → Models. New "Connect a model" welcome screen with live detection of Bedrock/Vertex and keyless endpoints. Reasoning controls now portable across all AI SDK providers including Ollama.

**Source:** https://github.com/cline/cline/releases

### Kilo JetBrains — v7.0.12 Through v7.0.14 Consolidate Bundled CLI Architecture (August 5–8, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: Bundled CLI integration confirmed; session resumption confirmed -->
<!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

Three JetBrains releases since the last report, all deepening the bundled-CLI integration:

**v7.0.14** (latest): Command file management parity with skills — CLI skill commands manageable from JetBrains plugin.

**v7.0.13-rc.1 / 7.0.13**: Show pinned Kilo Core version and whether JetBrains uses downloaded vs. bundled CLI; Claude and Codex session resumption through bundled Kilo Core runtime; remote CLI file delivery for attachment flows; improved session diff rendering (full-file editor diffs, multi-hunk diffs, gutter line numbers).

**v7.0.12**: Prompt queuing while session runs; skill command names shown in permission prompts with per-command Allow/Reject; batch approval for skill context executions.

Kilo is converging its JetBrains and CLI experiences into a single bundled runtime — significant for teams running mixed IDE/terminal workflows.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Telli (Berlin) — $15M Seed for B2C Customer Service AI Agents, YC-Backed (August 2026) <!-- FACT_CHECK: VERIFIED (2026-08-13) -->
<!-- Verified: $15M seed confirmed; Berlin location confirmed; ex-Enpal founders confirmed -->
<!-- Sources: https://www.thesaasnews.com/news/telli-raises-15m-seed/, https://techfundingnews.com/telli-raises-15m-redalpine-ai-voice-agents/ -->

Telli, Berlin-based, raised **$15M seed (€13.1M)** led by redalpine, with Cherry Ventures and Y Combinator (YC-backed pre-seed). Total funding: $18.5M. Two of three founders previously scaled Enpal's heat pump sales team from 2 to 150 people in one year. Telli's thesis: AI agents can replicate that human scaling for B2C customer operations — voice and multi-channel AI agents for consumer businesses. Notable as a European agentic AI funding story and for the prior-exit track record of the founding team.

**Source:** https://techfundingnews.com/telli-raises-15m-redalpine-ai-voice-agents/ | https://www.eu-startups.com/2026/07/yc-backed-telli-raises-e13-1-million-to-build-ai-for-b2c-customer-operations/

---

## 2026-08-05

### Claude Code — Double-Drop: v2.1.221 and v2.1.222 (August 4, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-06) -->
<!-- Verified: Both releases confirmed on official changelog and claudeupdates.dev -->
<!-- Sources: https://code.claude.com/docs/en/changelog, https://www.claudeupdates.dev/version/2.1.221, https://www.claudeupdates.dev/version/2.1.222 -->

After 11 days of silence (v2.1.220, July 25), Claude Code shipped **two releases in one day**. v2.1.221 adds **Focus view** (`Ctrl+Alt+F`) — a VS Code chat toggle that hides tool activity behind expandable per-turn summaries with a live running-tool indicator. Also: **`mode: "mask"` for sandbox credential files** on Linux/WSL — sandboxed commands read a sentinel copy with spans extracted by regex while the proxy substitutes real values on egress (macOS falls back to `deny`). New `claude-api skill prompt-audit` subcommand. 20+ fixes including Bedrock auth regression, WebSearch 400 at xhigh/max, Vim yank register preservation across dialogs.

v2.1.222 (same day) is security-heavy: **worktree isolation hardening** — isolated sessions can no longer run destructive git commands against the main checkout; isolation now applies to file edits and Bash in every session type. **PreToolUse auto-allow hook bypass** fixed for background agent tasks (summaries, compaction, renames). **`ultraplan` feature removed.** 15+ additional fixes.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Alpha Sprint Hits alpha.8; Nine Tags in 48 Hours (August 3–4, 2026)

The v0.147.0 alpha sprint accelerated to maximum intensity. Since the prior check (alpha.4, August 1): alpha.5 (Aug 3), alpha.6 (Aug 3), alpha.6.1/6.2/6.3/6.4 (Aug 4), alpha.7 (Aug 4), alpha.8 (Aug 4) — nine new alpha tags in 48 hours. Stable remains **v0.146.0** (July 29). The alpha chain includes MCP testing for the July 28 MCP revision and improved thread-organization primitives. Rapid-fire point releases suggest active stabilization toward a stable release.

**Source:** https://releasealert.dev/github/openai/codex | https://github.com/openai/codex/releases

### Kilo v7.4.19/7.4.20 — Per-Workflow Model Config, Native Voice, Faster Terminal (August 2–4, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-06) -->
<!-- Verified: Per-workflow model config confirmed in GitHub release notes -->
<!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

v7.4.19 (August 2): **Per-workflow model and reasoning variant configuration** from Agent Behaviour settings. **macOS native voice input** via AVFoundation with hold-to-talk/release-to-send. **JetBrains prompt queuing** — queue prompts while session runs, remove before processing. Also: keyboard focus preservation across session switches, instant worktree hover cards, instant model search update, Agent Manager terminal shell restart.

v7.4.20 (August 4): **Speech-to-text model discovery** from Kilo Gateway with offline fallback. **Faster Agent Manager terminal** — defers optional enhancements until after initial paint.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline v4.1.3 — True Workspace Rewind, Message Editing (August 3, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-06) -->
<!-- Verified: Checkpoint restore and message editing confirmed on GitHub and docs.cline.bot -->
<!-- Sources: https://github.com/cline/cline/releases, https://docs.cline.bot/core-workflows/checkpoints -->

Checkpoint restore upgraded to **true workspace rewind**: files created during a task are captured in the snapshot and restored to checkpoint-time content; files created after the checkpoint are removed. `.gitignored` paths untouched. Pre-restore recovery snapshot enables full rollback. **Message editing** — edit any earlier message, session forks at that point, workspace rewinds to the checkpoint, re-runs from the edited prompt; transactional and workspace-atomic. Also: Ollama response-start timeout raised to 5 minutes (was 30 seconds); empty Ollama responses retried at model boundary; VS Code/CLI checkpoint creation fixed (was broken since v4.1.0).

**Source:** https://github.com/cline/cline/releases

---

## 2026-08-04

### Claude Code — 10 Days Without Update; Silence Crosses Threshold (August 4, 2026)

Claude Code remains at **v2.1.220 (July 25)** — now 10 days with no new releases, crossing the 10-day threshold that was flagged as a strong signal of a larger feature cycle. The last such gap was the mid-July steganography response sprint. Community reading: the team is unambiguously heads-down on significant work. This is no longer a pause — it's a cycle.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Pre-Release Chain Extends to alpha.6; Two New Alpha Tags (August 4, 2026)

Codex CLI pre-release sprint continues with two new alpha tags: **v0.147.0-alpha.6** and **v0.147.0-alpha.1.2** added to the chain since alpha.4 (August 1). No stable release yet — v0.146.0 (July 29) remains the stable anchor. The alpha chain now runs: alpha.1 → alpha.1.1 → alpha.1.2 → alpha.2 → alpha.3 → alpha.4 → alpha.6, with stable release appearing imminent.

**Source:** https://github.com/openai/codex/releases

### Atlas Browser Shuts Down August 9 — Agentic Browsing Work Moves Into Codex (August 4, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-06) -->
<!-- Verified: OpenAI officially confirmed shutdown date and migration path -->
<!-- Sources: https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work, https://chatforest.com/builders-log/openai-atlas-browser-shutdown-august-9-chatgpt-work-migration-builder-guide/ -->

OpenAI's standalone Atlas browser — launched October 2025, macOS-only throughout its lifespan — is scheduled to stop working **August 9, 2026**. OpenAI frames this as consolidation: browser-based agentic capabilities (multiple tabs, downloads, improved navigation, account login) are being moved into ChatGPT and Codex directly. The Atlas shutdown arrived alongside the GPT-5.4/5.4-mini retirement (effective August 31) and a wave of July Codex features (session naming/pinning, WebSocket remote Code Mode, multi-repo review, Appshots, image editing). The pattern: OpenAI is retiring a separate product and folding its load-bearing agentic work into the primary Codex surface.

**Source:** https://aitoolsreview.co.uk/insights/openai-codex-august-2026-updates

### Q3 2026 Funding Tracker: July $630M, Agent Governance Is a Real Category (August 1–4, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-06) -->
<!-- Verified: $630M total confirmed by Gravity tracker; Prime Intellect $130M confirmed by TechCrunch; Neo Security $100M confirmed by neo.ai and multiple sources -->
<!-- Sources: https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/, https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/, https://www.neo.ai/news/neo-launches-100m -->

Gravity's Q3 tracker (updated August 1, data through July) shows July closed with 12 disclosed agent rounds worth roughly **$630 million**. Three patterns: picks-and-shovels infrastructure (Prime Intellect $130M Series A), agent payments as a standalone category, and agent governance — Neo Security ($100M, Bessemer + a16z), Act Security ($60M), Hush Security ($30M) collectively took **$190M in eleven days**, all selling control over what agents may touch. Lyzr's $100M Series B stands out: its SivaClaw agent ran the entire fundraise process — fielded questions from 130+ investors, drafted memos, tracked slide engagement — without founders taking in-person meetings, closing at ~$500M valuation.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

---

## 2026-08-03

### Cline v4.1.3 — Checkpoint Workspace Rewind, Message Editing, Ollama Timeout Fix (August 3, 2026)

New release patches the SDK extension with significant quality-of-life improvements. **Checkpoint restore becomes true workspace rewind:** Files Cline created during a task are captured in the snapshot and restored to their checkpoint-time content; files created after the checkpoint are removed. Pre-restore recovery snapshot enables full rollback. `.gitignored` paths left untouched. **Message editing:** Edit any earlier message in a conversation — the app forks the session at that point, rewinds the workspace to that run's checkpoint, and re-runs from the edited prompt. Restores are transactional and workspace-atomic. **Ollama improvements:** Response-start timeout raised to 5 minutes (was 30 seconds) so large models that cold-load no longer fail. Empty Ollama responses now retried at the model boundary. **Fixes:** Legacy/new extension bundle invalidating each other's Cline account sessions; provider settings edits discarded before config finished loading; checkpoint creation broken in VS Code and CLI.

**Source:** https://github.com/cline/cline/releases

### Claude Code — 9 Days Without Update; Silence Deepens Past Week (August 3, 2026)

Claude Code remains at **v2.1.220 (July 25)** — now 9 days with no new releases, the longest sustained silence since the mid-July steganography response sprint. At 9 days, one day away from the 10-day threshold flagged as a strong signal of a larger feature cycle. If tomorrow passes without a release, it's increasingly clear the team is heads-down on significant work.

**Source:** https://code.claude.com/docs/en/changelog

### Q3 2026 Funding Tracker: July Closes at $630M, Agent Governance Emerges as New Category (August 1–3, 2026)

Gravity's Q3 tracker (updated August 1) shows July 2026 closed with 12 disclosed agent rounds worth roughly $630 million. July split into three acts: holiday-shortened first week (~$37M), mid-month surge ($398M including two nine-figure checks in two days), final two days ($195M with three of four rounds going to agent governance). Biggest: Prime Intellect at $130M Series A. Neo Security, Act Security, and Hush Security collectively took $190M in eleven days — agent governance as a distinct, fundable category. Global VC funding hit record $510B in H1 2026 ($305B Q1, $205B Q2), already ahead of 2025's $440B full-year total. 70%+ of Q2 capital went to AI; OpenAI and Anthropic absorbed 43% of all H1 funding.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

---

## 2026-08-02

### OpenCode v1.18.11 — MCP Reconnection Fixes, Desktop Polish (August 1, 2026)

New stable release fixing MCP and desktop reliability issues. **Core:** Stopped MCP SSE connections from getting stuck in reconnect loops after server error responses — a significant reliability fix for MCP server integrations. Also fixed provider model configs that use interleaved reasoning fields like `reasoning_text` or custom field names. **Desktop:** External links now open in the system browser instead of inside the app. Fixed stale session tab state in the desktop title bar, legacy directory picker opening at home folder when no home path is loaded, file tree tab clipping when resized smaller, and debug gutter label/value misalignment.

**Source:** https://github.com/anomalyco/opencode/releases/tag/v1.18.11

### Claude Code — 8 Days Without Update; Silence Crosses Full Week (August 2, 2026)

Claude Code remains at **v2.1.220 (July 25)** — now 8 days with no new releases, crossing the full-week threshold. This continues to be the longest sustained silence since the mid-July steganography response sprint. If this extends to 10+ days, it strongly signals a larger feature cycle in progress rather than a general slowdown.

**Source:** https://code.claude.com/docs/en/changelog

---

## 2026-08-01

### Kilo v7.4.18 — Multi-Project Agent Manager, Scope Picker, Persian UI (August 1, 2026)

New stable with scope selector and base branch picker for Agent Manager diff review (Branch/Staged/Unstaged/Session scopes). **Experimental multi-project Agent Manager** is the headline: a persistent project registry catalogs additional Git repositories across restarts, with each project running its own git stats and PR pollers. Sessions created anywhere (sidebar, another window, CLI) appear in the owning project's list immediately. Also: Agent Manager diff review follows sidebar selection; Persian (Farsi) UI language with RTL layout; skill shell commands shown in permission prompts with per-command Allow/Reject; worktree setup scripts run in selected toolbar terminal.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI — v0.147.0-alpha.3 and alpha.4 Land (August 1, 2026)

Pre-release sprint continues: **alpha.4** is the latest tag, with alpha.3 also new since Jul 31. Stable remains v0.146.0 (July 29). The alpha.3→alpha.4 progression narrows the gap toward stable. Notable features in the v0.147.0 cycle: session naming/pinning, plugin manifests, WebSocket remote Code Mode, executor-provided skill discovery, macOS signing, enterprise admin controls.

**Source:** https://github.com/openai/codex/releases

### Cline v4.1.0 — Major SDK Extension Rollout Begins; v4.1.2 Patch (July 30–31, 2026)

**v4.1.0** converts the stable extension to a combined A/B package: legacy extension + new SDK-based extension, with a staged remote rollout activating the new SDK extension for users (starting at 1%). Auto-fallback to legacy on activation failure. Key additions: session forking and user-run message APIs; auto-compaction state bug fixed (was triggering extra summarizer calls every turn); `ClineCore.readLiveMessages` API for reading in-memory transcript mid-turn; per-server MCP timeout from cline_mcp_settings.json now honored; OpenRouter defaults to anthropic/claude-sonnet-5.

**v4.1.2** (latest): Extension variant indicator ("Legacy" or "Next") in settings; MCP routing migrated from random uid to native server-name routing, surviving restarts.

**Source:** https://github.com/cline/cline/releases

### Claude Code — 7 Days Without Update; Longest Gap Since Steganography Sprint (August 1, 2026)

Claude Code remains at **v2.1.220 (July 25)** — now 7 days with no new releases. This is the longest sustained silence since the mid-July steganography response sprint. Community reading: team may be heads-down on a larger release. Worth watching whether this extends past 10 days.

**Source:** https://code.claude.com/docs/en/changelog

### Community Pulse — July 2026: "Cautiously Invested but Sobered"

last30days.ai July brief: Tooling ecosystem (OfficeCLI, OneCLI, FableCut, Flint) suggests "Cambrian explosion" in agent-native tooling. GPT-5.6 migrations showing "2.2x faster, 27% cheaper." Jack Dorsey's Buzz (team chat + agents + Git hosting, 377 HN pts) signals major platform bet on agents as foundational layer. Counterweights: Zuckerberg told staff agents are "going slower than expected" (342 pts, 616 comments); GitLost attack on GitHub's AI agent leaked private repos (541 pts, demonstrated exploit); OneCLI's credential-management focus implies secrets exposure is a known active problem.

**Source:** https://last30days.ai/research/ai-agents | https://last30days.ai/research/claude-code

---

## 2026-08-06

### Claude Code — Silence Returns After Aug 4 Double-Drop; No New Releases (August 5–6, 2026)

No new releases since v2.1.222 (August 4). The brief two-release burst (v2.1.221 + v2.1.222 on Aug 4) broke Claude Code's 11-day silence pattern, but the tool has gone quiet again. This reversion to intermittent releases after a single burst is notable: Claude Code had maintained near-daily release cadence for most of its history; the Aug 4 double-drop was the first extended silence since v2.1.220 (July 24).

### Codex CLI v0.146.1 — Cyber-Model Safety Patch (August 5, 2026)

Minor stable patch on top of v0.146.0 (July 29): applies safer automatic-review defaults for cyber-capable models and adds clearer permission-change explanations in the terminal interface. Single PR (#37057). No new features — pure hardening and UX improvement.

The v0.147.0 alpha sprint has decelerated. The previous cycle tracked nine alpha tags in 48 hours (Aug 3–4: alpha.4 through alpha.8). This cycle added roughly six more (alpha.6.1 through alpha.12) over ~24 hours — still active but clearly winding down toward stable release. No v0.147.0 stable has shipped.

**Source:** https://github.com/openai/codex/releases

### Cline v4.1.4 — Plan Mode Hard-Blocking, AI SDK 7 Upgrade, Bedrock Fixes (August 4, 2026)

Significant mid-patch release between v4.1.3 (Aug 3) and v4.1.5 (Aug 5):

- **Plan mode hard-blocks file-editing shell commands** — run_commands stays read-only; file manipulation, sed/perl in-place, redirection, mutating git, package installs, and nested commands (sh -c, eval, sudo, xargs) are rejected with tool error on Windows and PowerShell. No longer relies on prompting alone.
- **Context-window overflow auto-recovery** — overflows trigger deterministic force-compaction and retry once; genuinely unrecoverable cases surface actionable error messages instead of raw provider errors.
- **Root-session persistence is lazy** — sessions only written to database after first user turn, eliminating empty history entries from prematurely closed sessions.
- **Empty responses retry on all providers** — previously Ollama-only; now OpenRouter, Cline, and OpenAI-compatible endpoints retry too.
- **Claude 4.6+/5.x adaptive-era models fixed** — no longer rejected with "thinking.type.enabled is not supported" when resolving from offline catalog or hand-typed model IDs.
- **Bedrock prompt caching restored** — was reporting zero cache reads/writes because Bedrock sends Converse cachePoint markers; converter now handles both formats.
- **Upgraded to AI SDK 7** — Ollama switched to native AI SDK provider with wire fixes for empty think settings, mid-stream errors, attachment-only turns.

### Cline v4.1.5 — Reasoning Settings Unified, Plan Mode User-Driven (August 5, 2026)

Second release in 48 hours:

- **Reasoning settings unified across AI SDK providers** — effort levels and enable/disable toggles behave consistently on all providers including Ollama, eliminating per-provider overrides.
- **Chutes recognized as provider** — added to supported provider list.
- **Model-initiated plan-to-act switching removed** — model no longer decides mid-turn to exit plan mode; user drives all mode transitions.
- **Free model promotion end dates explained** — retired free models show dedicated notice with model-picker button instead of generic error.

**Source:** https://github.com/cline/cline/releases

### Steganography Crisis Fades but Token-Bloat Argument Persists (August 2026)

The steganography allegation (2,445 HN points, July) has faded from active community discussion — no new developments this week. The token-bloat comparison ("Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k," 706 HN points) continues to circulate as a cost/efficiency argument against Claude Code. last30days.ai's July brief on Claude Code (published Jul 28) summarizes the community verdict: "explosive adoption and serious institutional backlash" simultaneously. Atlas browser shutdown in 3 days (August 9) — no Windows/iOS/Android release ever shipped; agentic browsing moving into ChatGPT/Codex.

**Source:** https://last30days.ai/research/claude-code

## 2026-08-07

### Claude Code — Worktree Isolation Hardening, 1M Context Enforcement Now Dynamic (August 4–7, 2026)

No new releases since v2.1.222 (August 4). Full changelog for the August 4 releases now visible: worktree-isolated sessions cannot run destructive git commands via file-edits or Bash against the main checkout; PreToolUse auto-allow hooks now enforced in background tasks; `/code-review` alias to `/code-review ultra` for deep cloud reviews; `CLAUDE_CODE_DISABLE_1M_CONTEXT` now covers every model with native 1M window rather than a fixed list, with a startup warning when auto-compaction isn't holding to 200K.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.147.0 Alpha.13 Backports Cyber-Model Safety Patch (August 5–6, 2026)

v0.147.0-alpha.13 landed as a backport of v0.146.1's cyber-model safety defaults to the alpha chain. The alpha sprint is in late stabilization: alpha.6.5 through alpha.13, no stable v0.147.0 yet. v0.146.1 stable remains the recommended version.

**Source:** https://github.com/openai/codex/releases

### Cline v4.1.6 — Meta Muse Spark on Cline Provider, Error Telemetry Fixed (August 6–7, 2026)

v4.1.6 adds Meta Muse Spark 1.2 Contributor to Cline's built-in provider alongside a refreshed model catalog. Error telemetry now attributes failures to the model actually in use rather than misreporting against the wrong model. Reasoning settings are now portable across AI SDK providers including Ollama, replacing per-provider overrides.

**Source:** https://github.com/cline/cline/releases

### Kilo — Pre-Release: JetBrains Bundled CLI, Claude/Codex Session Resumption, OpenCode v1.17.13 (August 5–7, 2026)

Two pre-releases since v7.4.20 (Aug 4): Kilo Core now ships as a bundled CLI inside the JetBrains plugin with developer tooling for pinning/unpinning/updating; Claude and Codex session resumption through the bundled runtime; remote CLI file delivery for attachment flows; improved JetBrains session diffs (full-file, multi-hunk, gutter line numbers); threshold compaction deferred during active tool loops; upstream OpenCode through v1.17.13, reasoning metadata from v1.18.11.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Atlas Shuts Down August 9 — 2 Days Away (August 7, 2026)

Atlas browser stops working in 2 days. OpenAI's framing: "the browser is a feature, not the destination." Agentic browsing capability migrating into ChatGPT desktop app and Codex. No automatic data migration; ~5 calendar days from today to export. No Windows/iOS/Android release ever shipped. Clean product retirement.

**Source:** https://chatforest.com/builders-log/openai-atlas-browser-shutdown-august-9-chatgpt-work-migration-builder-guide/

### NeuralCoreTech August 2026: Opus 5 and GPT-5.6 Sol Tied at ~89% Terminal-Bench (August 2026)

August 2026 benchmark picture: Terminal-Bench 2.1 has GPT-5.6 Sol (xhigh) at 89.5% and Claude Opus 5 (max) at 89.1% — half a point apart. SWE-bench Verified: Claude Fable 5 tops underlying models at 95.0%; Codex CLI + GPT-5.5 at 88.7%. GPT-5.6 pricing: Terra cut 20%, Luna cut 80% (July 30); Sol unchanged. GitHub Copilot Business new self-serve sign-ups still paused for Free/Team orgs as of August 2. Anthropic terms explicitly prohibit using Claude Pro/Max as backend for third-party tools including OpenCode — ChatGPT Plus, Copilot, and GitLab Duo can be reused; Claude subscriptions cannot.

**Source:** https://neuralcoretech.com/best-ai-coding-agents-august-2026/

### July 2026 Agent Funding: $630M, 12 Rounds; Agent Governance Emerges as Funded Category (August 2026)

Q3 2026 tracker (Gravity, August 1): July closed with 12 disclosed rounds worth ~$630M. Top rounds: Prime Intellect $130M Series A (enterprise agent infrastructure), Lyzr $100M Series B, Neo Security $100M Growth (agent governance), Act Security $60M Seed+A, Freehand $75M Series B. Agent governance raised $190M in 11 days across Neo, Act, and Hush — selling control over what agents may touch rather than agents themselves. Agent payments emerged as a separately funded category. Broader context: global venture hit record $510B in H1 2026; OpenAI + Anthropic absorbed 43% of all H1 funding ($217B combined).

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

---

## 2026-08-09

### Claude Code — Four Releases Since Aug 5: v2.1.223 Through v2.1.226 (August 5–8, 2026)

**v2.1.226** (Aug 8): Bug fixes and reliability improvements.

**v2.1.225** (Aug 7): Claude Code now enforces gateway spending limits with clear notifications showing the cap and reset time. Also fixes critical authentication issues.

**v2.1.224** (Aug 7): Teams can now run sessions on their own machines with self-hosted environments — complete control over where code lives. Significant for enterprise teams with strict data residency requirements.

**v2.1.223** (Aug 5): Security fix prevents commands from hiding themselves using tabs or invisible characters — a direct response to the CVE-2026-54316 disclosure at Black Hat.

Four releases in four days following the Black Hat CVE disclosure shows Anthropic's rapid response cadence.

**Source:** https://www.havoptic.com/tools/claude-code | https://github.com/anthropics/claude-code/releases

### OpenAI Codex — Atlas Shutdown + GPT-5.4 Retirement + Feature Wave (July–August 2026)

Atlas browser stops working **August 9, 2026** — exactly as scheduled from its October 2025 launch. No Windows/iOS/Android release ever shipped. OpenAI is consolidating agentic browsing into ChatGPT and Codex directly.

**GPT-5.4/GPT-5.4-mini retirement** (effective Aug 31 for ChatGPT users): Both models remain on the OpenAI API past the cutoff — only ChatGPT sign-in users are affected. API-key authenticated Codex sessions are untouched. Recommended replacements: GPT-5.6 Terra and GPT-5.6 Luna.

**July feature wave** (three releases, additive for all users):
- **Appshots** (July 23, v26.715): Attach an open macOS app window to a Codex thread via hotkey — captures screenshot and available text without manual description.
- **Sign in with ChatGPT** (July 29, Beta): OAuth-style authentication for connected plugins (Airtable, GitLab, HubSpot, Notion, Supabase, Vercel) using ChatGPT identity.
- **Multi-repository review** (July 30, v26.727): Inspect changes across repositories in a single review pass; browser upgrades (address bar history, Google queries, Chrome extension tab mentions); expanded image editing.

**Source:** https://aitoolsreview.co.uk/insights/openai-codex-august-2026-updates | https://github.com/openai/codex/releases

### Cline v4.1.6 + Desktop v0.0.10 — OAuth MCP, Muse Spark Contributor, Reasoning Portability (August 6–7, 2026)

Already reported last cycle. Additional detail confirmed: OAuth MCP authentication fully implemented in Desktop v0.0.10 — authorize servers, see auth status, cancel/retry pending auth. Pre-registered OAuth clients (client ID/secret) supported alongside dynamic registration. Stored tokens invalidated on server config change.

v4.1.6 adds Meta Muse Spark 1.2 Contributor selectable on Cline's built-in provider. Error telemetry correctly attributed to the model actually in use (previously misattributed).

**Source:** https://github.com/cline/cline/releases

### July 2026 AI Agent Funding — 12 Rounds, ~$630M; Agent Governance Emerges as Category (August 2026)

July 2026 closed with 12 disclosed AI agent rounds worth roughly $630M. Key observations:

**Infrastructure over agents**: The largest rounds sell picks and shovels, not finished agents. Prime Intellect ($130M Series A, Radical Ventures) sells the compute/RL/evaluation stack enterprises need to build their own agents.

**Agent payments became a category**: Two separately funded startups building rails so agents can move money without a human clicking approve.

**Agent governance funded**: Neo Security ($100M Growth, Bessemer/a16z), Act Security ($60M Seed+Series A, Notable Capital/Team8/Bessemer), and Hush Security ($30M Series A, Akamai/Battery Ventures/YL Ventures) took $190M in eleven days — all three selling control over what agents may touch, not agents themselves.

**July full list**: Prime Intellect $130M (Series A), Lyzr $100M (Series B), Neo Security $100M (Growth), Freehand $75M (Series B), Act Security $60M (Seed+Series A), Arrakis $38M (Series A+seed), Natural $30M (Series A), Encore AI $30M (Series A), Hush Security $30M (Series A), LinqAlpha $22M (Series A), Build $8.5M (Seed), AIsa $6.5M (Seed).

Context: Global venture funding hit a record $510B in H1 2026; >70% of Q2 capital went to AI; OpenAI + Anthropic absorbed 43% of all H1 funding ($217B combined).

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

### Cline Kanban — Multi-Agent Orchestration for CLI Agents (March 2026, gaining traction)

Cline Kanban is a CLI-agnostic app for multi-agent orchestration. Works with Cline CLI, Claude Code, Codex, OpenCode, and related runtimes. The thesis: "the bottleneck isn't the AI; it's you — your attention, your cognitive bandwidth." Teams running multiple agents in parallel (refactoring, tests, scaffolding) need orchestration and state tracking that a single transcript can't provide. Kanban brings card-based task tracking to CLI-native agents.

**Source:** https://docs.cline.bot/usage/kanban | https://cline.ghost.io/announcing-kanban/

### Cursor — Leads Gartner Magic Quadrant for AI Coding Agents; $60B Pending Acquisition by SpaceX (2026)

Cursor (Anysphere) named a Leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with strong vision and enterprise adoption. Claims $2B ARR. Separately reported: Cursor is reportedly being acquired by SpaceX at a $60B valuation. If confirmed, this would be the largest exit in the AI coding tools space and would give SpaceX/ Musk a major foothold in developer tooling.

**Source:** https://www.startuphub.ai/ai-news/technology/2026/cursor-leads-gartner-ai-coding-agents-quadrant | https://valueaddvc.com/company/cursor


---

## 2026-08-10

### OpenCode — v1.18.11 + v1.19.x: Azure GPT-5.5+ Reasoning Fix, xAI Device-Code Login, RTL (August 7–10, 2026)

Kilo's bundled OpenCode upstream moved to v1.17.13 with reasoning variant metadata from v1.18.11. Standalone OpenCode releases added: Azure GPT-5.5+ completion requests fixed for reasoning-enabled setups; xAI login simplified to a single device-code flow for headless/remote environments; right-to-left layout improvements across desktop; community translation expansion; reduced desktop composer lag; blob attachment loading fixed for web UI. Three community contributors merged patches.

**Source:** https://github.com/anomalyco/opencode/releases

### Cline v4.1.7 + Desktop v0.0.11 — Queue Durability, OAuth MCP, Clipboard Paste (August 9–10, 2026)

v4.1.7 (CLI/SDK): queued prompts survive turn aborts; session context durable across aborts and hub restarts; failed queued turns report as `run.failed`; hung MCP servers get 30-second budget instead of blocking session creation; LiteLLM routed via Chat Completions (fixes proxy calls); network mid-stream interruptions retry before model output. Desktop v0.0.11: View Changes button backed by SDK checkpoints; clipboard image paste; folder picker failures surfaced; session model selection preserved.

**Source:** https://github.com/cline/cline/releases

### Claude Code — Screen Reader Mode, Live MCP Artifacts, Session Caps, Corporate Launcher (August W29/W30)

Screen reader mode replaces the visual terminal with plain labeled lines readable by VoiceOver/NVDA — `--ax-screen-reader` flag, `CLAUDE_AX_SCREEN_READER` env var, or `axScreenReader` setting. MCP connectors in Artifacts: published artifacts call MCP connectors live on each view through viewer's own connections — live dashboards instead of snapshots. Session caps: WebSearch and subagent spawns default to 200 per session (`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`, `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`). Corporate launcher: `CLAUDE_CODE_PROCESS_WRAPPER`/`processWrapper` wraps Claude Code child processes through an external executable for enterprise MDM compliance. `/fork` now copies conversation to a new background session with its own Agent Manager row.

**Source:** https://releasebot.io/updates/anthropic/claude-code | https://code.claude.com/docs/en/whats-new/2026-w29

### July 2026 Agent Funding — $630M / 12 Rounds; Governance $190M in 11 Days (August 1, 2026)

July 2026: 12 disclosed rounds totaling ~$630M. Prime Intellect $130M Series A (infrastructure for building/training agents); Lyzr $100M Series B (its own agent SivaClaw ran the fundraise); Neo Security $100M Growth (agentic control platform); Act Security $60M Seed+Series A; Hush Security $30M Series A. Governance sub-category: $190M in eleven days from Bessemer/a16z/Team8/Akamai/Battery/YL Ventures betting the agent permission layer is a defensible business. Finished agents face investor skepticism; picks-and-shovels and governance layers attract nine-figure checks.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/

### Enterprise Agentic AI — 78% Fortune 500 Adoption, 88% Pilot Failure, 31% Production (2026)

Axis Intelligence: 78% Fortune 500 have adopted agentic AI; $89.6B market size; 540% ROI. But 88% of pilots never reach production; only 31% are in production. 80% of enterprise apps embed an agent but only 31% deploy. Salesforce Agentforce index: agent deployments more than doubled year-over-year. Infrastructure and governance funding directly addresses the productionization gap.

**Source:** https://axis-intelligence.com/agentic-ai-adoption-statistics-2026/ | https://paul-okhrem.com/enterprise-ai-agents-statistics-2026/

## 2026-08-11

### Claude Code v2.1.221–v2.1.227 (Aug 4–10, 2026) — Self-Hosted Runners, Cross-Session Messaging, Enterprise Hardening

**v2.1.224 (Aug 7) — MAJOR:**
- **Self-hosted runners**: `claude self-hosted-runner` lets Team/Enterprise plans run Claude Code on their own machines or containers. Sessions via web, mobile, and desktop can all connect to self-hosted infrastructure.
- **Cross-session SendMessage**: Sessions can message each other across any machine via `ListAgents` and `SendMessage` — breaks the session silo.
- **Sandbox credential masking (JWT-aware)**: `extract`, `onExtractNoMatch`, `decode: "jwt"` with `maskClaims`, `awsPairs`/`sigv4` for AWS SigV4 re-signing.
- **Removed 200-subagent cap**: Unlimited agent spawns (concurrency/depth limits still apply).
- **Archive plugin source**: Install plugins from zip over HTTPS, SHA-256 pinning optional.

**v2.1.225 (Aug 8):**
- Fixed OAuth token bug breaking headless sessions (stored short-lived token replacing long-lived `CLAUDE_CODE_OAUTH_TOKEN`).
- Fixed MCP OAuth 401 bursts on macOS after keychain timeouts.
- `SendMessage` now starts Remote Control conversations by name (previously required session to message first).
- Workspace trust prompt added to `claude agents` for untrusted directories.

**v2.1.227 (Aug 10):**
- Fixed Bash commands failing under `claude-code-action` with `allowed_non_write_users` on GitHub-hosted runners.
- Fixed `/tui` reloading rewound conversations.
- Slash command menu: blue marks only selected row, matched chars bolded, emoji/accented names preserved.

**Impact:** Self-hosted runners = #1 enterprise ask (data residency/compliance). Cross-session messaging eliminates need for external orchestration. GitHub Action fix unblocks CI/CD pipelines.

**Source:** https://releases.sh/anthropic/claude-code | https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.147.0 (Aug 7, 2026) — Portable Plugins, Native Organization, MCP 2026

- **Portable Agent Plugins**: Install from zip over HTTPS, search across local/personal/workspace/remote catalogs
- **Conversation organization**: Persistent manually-ordered sections, incremental browsing of long transcripts
- **`--approve-for-me` CLI flag**: Auto-reviewed approvals for CI/CD and automation
- **Cursor skill import**: Import Cursor-managed skills, sync without duplicates
- **MCP 2026-07-28 protocol**: Paginated discovery, multi-round requests, non-blocking server startup; MCP SDK upgraded to 3.0.0
- **Amazon Bedrock**: Cached web search and remote compaction
- **Security**: Secrets/bearer tokens redacted from displayed commands and history; plugin isolation hardened; explicit trust required for unfamiliar local projects

**Source:** https://developers.openai.com/codex/changelog | https://releases.sh/openai/codex

### OpenAI Atlas Browser Shutdown (Aug 9, 2026)

Atlas standalone AI browser shut down Aug 9, ~9 months after Oct 2025 launch. Never shipped outside macOS. OpenAI consolidating agentic browsing into ChatGPT and Codex directly — multi-tab, downloads, account login, improved navigation. ChatGPT Work is the replacement for multi-session/multi-step projects. Atlas users had to export data before cutoff.

**Source:** https://aitoolsreview.co.uk/insights/openai-codex-august-2026-updates

### OpenAI Daybreak Blue and Red (Aug 10, 2026) — Cybersecurity Tiers

- **Daybreak Blue**: Vulnerability discovery, secure code review, detection engineering, incident response, malware analysis, patch validation — GPT-5.6 Sol
- **Daybreak Red**: Penetration testing, red teaming, exploit validation, complex system analysis — GPT-5.6 Cyber (separate approval required)
- Both require Trusted Access for Cyber approval, isolated environments, least-privilege permission profiles, Auto-review before sandbox crossings
- Blue does not grant Red access

**Source:** https://learn.chatgpt.com/docs/changelog

### Kilo v7.4.20 Pre-Release (Aug 2026) — JetBrains Deep Integration, Cross-Editor Sessions

- JetBrains context: active file, open/visible files, selected text, shell context auto-included in prompts
- Selected text and files as prompt attachments with clickable source links
- Claude and Codex session resumption through Kilo Core bundled runtime
- Remote CLI file delivery for attachment flows
- Deferred threshold compaction (no unsafe compactions during active tool loops)
- Bumped to Kilo Core v7.4.20 with OpenCode v1.17.13 + reasoning variant metadata from v1.18.11
- STT model discovery via Kilo Gateway with offline fallback

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-08-14

### Claude Code v2.1.229 + v2.1.231 — MCP OAuth Fixes, Session Groups, SSE Keepalive (August 12–13, 2026)

v2.1.231 (Aug 13): Fixed MCP OAuth sign-in failing with redirect URI mismatch for servers using pre-registered OAuth clients such as Slack. v2.1.229 (Aug 12): SSE keepalive pings added to gateway streaming responses preventing idle-timeout disconnects on Vertex and Bedrock during long thinking pauses; plugin marketplace `command` sources allow an IDE to print the plugin directory re-resolved each session without restart — `mode: "link"` uses it in place; `ListAgents` now labels cloud sessions as `cloud` and marks disconnected Remote Control sessions as `offline`; VS Code sidebar gains session groups (right-click to create/rename/delete, Cmd/Ctrl-click or Shift-click to move several sessions at once).

**Source:** https://code.claude.com/docs/en/changelog

### Kilo v7.4.22 — Clickable File References, PR Review Actions, OpenCode v1.18.x (August 14, 2026)

Community contributions: file references in agent responses become clickable links when they match real files in the workspace (with "File not found" fallback); PR comment actions (resolve/unresolve review threads, jump to comments, scroll-to-top for diff view); Morph WarpGrep retired. Model default reasoning variant now selectable in chat and Agent Manager. Structured AWS access keys and GCP service-account JSON supported for Bedrock/Vertex connections in VS Code. Subagent permission phantom deny-rule bug fixed — a read-only agent's bash allowlist no longer incorrectly ceilings a delegated writable subagent's bash commands. OpenCode upstream bumped from v1.17.13 to v1.18.13 with code mode MCP adapter, Azure GPT-5.6 support, improved xAI prompt cache routing and PDF support, GitHub Copilot model routing fixes, and Cerebras reasoning replay fixes.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI — No New Release; ChatGPT Desktop Gains Linux Preview + Computer History (August 11–13, 2026)

No new Codex CLI releases since v0.147.0 (Aug 7). Desktop app updates: ChatGPT Linux desktop preview launched for Ubuntu, Debian, and Fedora on x64 and ARM64 — supports projects, local files, and Codex. Computer History feature (opt-in, available to ChatGPT Pro, Business, and Enterprise) tracks activity across apps and websites as a memory/timeline that ChatGPT and Codex can use; users choose which apps contribute, can pause or review/delete history. Business/Enterprise admins must enable access first.

**Source:** https://developers.openai.com/codex/changelog/

### Week of Aug 10–16: Vertical Agent Launches — Wealth Management, Marketing, Hardware, IEQ (August 12, 2026)

SKALE Agent Pit: paper-trading prediction market sandbox for training/validating AI agents before live deployment on Polymarket. Honor Robot Phone: ships with Agentic OS and YOYO Pro Mode for task execution on a consumer device. Zeplyn + Schwab Advisor Center: first agentic account-opening workflow in wealth management — agents complete the process without human back-and-forth. TrustKernel PlugClaw: thumb-sized private AI computer for hardware-isolated app automation. Ahrefs Letaido: agent-powered marketing workspace for recurring research, reporting, and monitoring. Microsoft Intelligent Terminal 0.2: per-tab agent selection, OpenCode integration, WSL support, local model support. Kaiterra MCP: indoor environmental quality analysis via MCP-connected AI agents reading monitor data.

**Source:** https://agentic.ai/news

---

## 2026-08-15

### Claude Code — v2.1.233: Subagent Fork Default, GitLab MR, NTLM Fix (August 14, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-15) -->
<!-- Sources: https://code.claude.com/docs/en/changelog -->

Subagent forking now on by default — `subagent_type: "fork"` inherits full conversation and prompt cache; non-teammate agent spawns in interactive sessions run in background by default. Added `@` mention for directly messaging other Claude sessions by name. GitLab MR URL support for `--worktree` flag and `claude agents` view (MRs display as `!N`). New opt-in `forward_user_identity` apps gateway setting for per-user spend attribution. New opt-in `CLAUDE_CODE_TOOL_MEMORY_LIMIT` Linux memory cgroups for Bash — runaway builds can no longer stall the session. `CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS` configures WebFetch cache TTL. **Todo tools removed from Opus 4.8, Sonnet 5, Fable 5, Mythos 5, and newer** — set `CLAUDE_CODE_ENABLE_TODO_TOOLS=1` to re-enable. **NTLM credential-leak patched**: Windows paths with `\\??\` device prefix bypassed UNC path validation, allowing local credential exposure — fixed. Windows auto-mode regression from v2.1.232 reverted; Bash input redirections (`< file`) now permission-checked properly.

**Source:** https://code.claude.com/docs/en/changelog

### Cline v4.1.10 — Web Search During Tasks, Hub Daemon Fixes (August 13, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-15) -->
<!-- Sources: https://github.com/cline/cline/releases -->

Models supporting it can now search the web during a task — enable via Web Search toggle in Feature Settings; search calls and results persist across session reloads. Cline Pass provider replaces generic OpenAI-compatible path, restoring extended thinking budgets. Two critical fixes: build identity comparison uses total order so different Cline installs no longer shut each other's Hub daemon down in replacement loops; newer builds no longer replace a Hub still serving sessions — they attach over wire protocol and swap when Hub goes idle. Idle plugin sandbox processes now reclaimed. Model catalog refreshed with Crusoe as new provider. Desktop v0.0.13: auto-updates no longer install while CLI is attached to Hub; protection against older updaters restarting Hub mid-session.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.23 — JetBrains UX, CLI Download Reliability (August 14, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-15) -->
<!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

JetBrains chat readability overhaul: refreshed session surfaces, softer spacing, clearer prompt bubbles, more consistent hover states. CLI downloads more reliable via retry logic for transient failures and rate limits; public CLI asset fetches bypass authentication. JetBrains plugin CLI pin updated to Kilo Core 7.4.22. Kilo Core refreshed with upstream provider, model variant, and session runtime updates.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### OpenCode — v1.18.x: Session Compaction, MERGE Gateway, PDF for Copilot (August 12–13, 2026) <!-- FACT_CHECK: VERIFIED (2026-08-15) -->
<!-- Sources: https://opencode.ai/changelog -->

Core: session compaction improvements (complete recent turns preserved, clearer summaries for smaller models); MERGE Gateway reasoning variants; PDF attachments for GitHub Copilot models with PDF vision support; Kimi system prompt selection fixed for Moonshot providers; xhigh reasoning effort fixed for xAI models; DeepSeek V4 Flash uses correct sampling defaults. Desktop: Chinese terminology updated; server default model used instead of stale local config.

**Source:** https://opencode.ai/changelog

### August 2026 Agent Funding: $633M in 12 Days, Governance Cluster Accelerates <!-- FACT_CHECK: VERIFIED (2026-08-15) -->
<!-- Sources: https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/, https://www.obsidiansecurity.com/news/unlocking-ai-potential-securely, https://secure.businesswire.com/news/home/20260803963850/en/Zenity-Raises-%24125-Million-to-Secure-the-Era-of-1-Billion-AI-Agents -->

Five disclosed rounds in 12 days match July's full-month total (~$630M). **Zenity $125M Series C** (Aug 3, Norwest) — AI agent security/governance platform; Gartner named it AI agent governance frontrunner April 2026; contributes to OWASP Top 10 and MITRE ATLAS. **Obsidian Security $85M Series D** (Aug 4, Crescent Cove, $1.1B valuation) — governs non-human identities and AI agents including Copilot Studio and Claude across SaaS; Greylock and Menlo participated. $210M in 48 hours for agent governance beats July's entire governance cluster ($190M in 11 days). Average cheque nearly doubled: ~$53M (July) → ~$127M (August, 12 days). Pattern: fewer, larger rounds; infrastructure and vertical agents with named customers funded; thin wrappers not.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/ | https://www.obsidiansecurity.com/news/unlocking-ai-potential-securely | https://finance.yahoo.com/technology/ai/articles/zenity-secures-125m-series-c-111131196.html

## 2026-08-21

### Claude Code — v2.1.237 + v2.1.238: Two Releases in One Day, Cross-Session Messaging Overhaul

Two releases landed on August 20 — a rare same-day double-drop. v2.1.237 adds a built-in "Concise" output style: Claude leads with results and skips preamble and narration. Also fixes prompt caching for sessions using an LLM gateway or custom base URL. v2.1.238 (~35 changes): `keybindingFlavor: "readline"` makes Ctrl+W in the prompt delete back to whitespace; plugin marketplace headersHelper mints auth tokens on install; `claude self-hosted-runner --defer-shutdown-max-min` and `--proxy-authorization-command`; unbounded memory growth fixed — subagent tool results now released after leaving the display window; cross-session messages to refusing inboxes now report "refused"; brief HTTP 403 VPN/proxy refusals tolerated up to 3 minutes; `ListAgents`/`SendMessage` now reach Remote Control peers from all host types; `codex doctor` expanded to endpoint protection and update connectivity.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.149.0 Alpha: Interactive Agents Dashboard, /cd Command, Session Queue

Three alpha tags now live (alpha.1–3). Key additions: interactive `/codex agents` dashboard for managing tasks with configurable shortcuts; `/cd`, `/pwd`, `/cwd` working directory commands in TUI; `codex queue` to send messages to existing sessions; expanded Vim editing (character replacement, `cw`/`c$`/`cc` motions); `codex doctor` extended to diagnose endpoint protection and network/proxy issues; SDK users can pass exact CLI config overrides and select `max` or `ultra` reasoning effort. Bug fixes: queued messages reliably wake idle sessions; resumed/forked threads restore their permission profile; WebRTC reconnects after transport loss; Windows Terminal scrollback fixed.

**Source:** https://github.com/openai/codex/releases | https://techdevnotes.com/releases/codex-cli/0.149.0-alpha.1

### Cline — Desktop v0.0.15 Beta: Native Notifications, Side-by-Side Cline Code Beta App

Native macOS notifications when a task finishes or needs input — work in the background without keeping the app focused. Separate "Cline Code Beta" app installs side-by-side with stable, clearly labeled in sidebar/Settings/window title — no more in-app channel switching. Command output streams into transcript with terminal colors and scrollback; long-running commands can be backgrounded with "Proceed while running". Session handoff interruptions cleanly recover, restoring typed drafts and attachments.

**Source:** https://github.com/cline/cline/releases

### Kilo — v7.4.24: NVIDIA Parakeet TDT 0.6B v3 STT, PR Review UX Overhaul, Terminal Capture Fix

NVIDIA Parakeet TDT 0.6B v3 becomes default speech-to-text model. PR review comments overhauled: resolved threads collapse into one-line rows, structured comments arrive instead of pasted text, single button sends all unresolved comments to agent. `@terminal` now captures from focused Agent Manager terminal. Subagent sessions open in Agent Manager inspector tabs alongside terminals. Git fetch refspec restrictions fixed for Agent Manager. Incremental streaming restored across Kilo chat surfaces.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-08-23

### Claude Code — v2.1.240: Bug Fixes and Reliability Improvements (August 22, 2026)

v2.1.240 is a bug-fix and reliability-focused release, the third in a string of near-daily releases. No new user-facing features listed in the changelog — the focus is on stability. Notably, this continues Claude Code's compressed release cadence: v2.1.238 (Aug 20), v2.1.239 (Aug 21), and v2.1.240 (Aug 22) landed across three consecutive days.

**Source:** https://code.claude.com/docs/en/changelog

### Cline — v4.1.13: Hub Seamless Upgrades, Tool Calling Fix, Model Catalog Refresh (August 22–23, 2026)

v4.1.13 is a quality-and-reliability release that follows v4.1.12 (Aug 21–22). Key changes:

- **Hub drain-and-upgrade without losing work**: the Hub can now be drained — refusing new mutating work while finishing what it is running — and clients replay events they missed via a durable event log; no more dropped runs on Hub restart or upgrade
- **Tool calling fix for custom OpenAI-compatible models**: models whose capability list was inferred from `supportsReasoning` and similar convenience flags had their inferred list read as an authoritative denial, stripping every tool from the request; explicitly authored capability lists now correctly decide
- **Model catalog refresh**: defaults changed for DeepSeek, Crof, CrossModel, Eden AI, Kilo, and NanoGPT — users on those providers without pinned models will see different defaults
- **Server-side feature flags honored**: the app now refreshes and honors feature flags when the account changes
- **Langfuse traces carry session identity**: hub-backed and delegated-agent runs now group under their parent session instead of appearing as unattributed traces

**Source:** https://github.com/cline/cline/releases

### Codex CLI — v0.150.0-alpha.7: Sprint Continues; GPT-5.4 Retirement Looms August 31 (August 22–23, 2026)

The v0.150.0 alpha chain continues with alpha.7 (and likely alpha.5, 6, 7 as tags released in quick succession, as alpha.1 and 4 are absent — consistent with rapid iteration and tag skipping). Meanwhile, OpenAI has formally announced that **GPT-5.4 and GPT-5.4 mini retire from ChatGPT-signed-in Codex on August 31, 2026**. API-key authenticated Codex users are unaffected. Recommended replacements are GPT-5.6 Terra (for GPT-5.4) and GPT-5.6 Luna (for GPT-5.4 mini). This is the third model deprecation wave to hit Codex CLI users who authenticate via ChatGPT.

**Source:** https://github.com/openai/codex/releases | https://codex.danielvaughan.com/2026/08/01/gpt-54-retirement-august-31-codex-cli-migration-gpt56-terra-luna-configuration/

### OpenCode — v1.18.x: Cloudflare Gateway Passthrough, Unknown Finish Reason Handling, Vertex Routing (August 20–21, 2026)

OpenCode shipped multiple updates this period:

**Aug 21:** Core — continue responses when a model reports an unknown finish reason instead of stopping early; route Vertex AI `eu` and `us` multi-region Gemini requests through REP endpoints. Desktop — keep file search results visible while the next search is loading.

**Aug 20:** Native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models; Codex rate limits matched more closely to ChatGPT subscription limits; ignore malformed model pricing without breaking usage cost calculation; forward ChatGPT workspace compute residency to Codex requests; enabled web search when using the OpenCode Go provider.

**Source:** https://opencode.ai/changelog

### Kilo — Metabase Security Incident: User Data Exposed via Third-Party BI Provider (August 2–14, 2026)

Kilo Code (recently acquired by Anaconda) disclosed a security incident originating at its third-party business intelligence provider, Metabase. An unknown actor accessed Kilo customer records through Metabase over approximately 4 hours on August 2, 2026. Kilo was notified August 6 and published its first public statement August 9.

**What was exposed:** Some users' names, email addresses, and possibly billing address and location data. Payment card information was reportedly not exposed. A small subset of users who used the Kilo Slackbot had their Slack access tokens exposed — all such tokens were invalidated as a precaution. Kilo has enabled a data export feature for affected users and is offering account deletion upon request.

**Context:** Kilo Code's parent company Anaconda acquired Kilo in mid-2026. The incident is a reminder of the supply-chain risk in agentic tools that aggregate usage data for product analytics — even when the data is limited to operational metadata rather than code or prompts, it represents a target.

**Source:** https://www.anaconda.com/blog/metabase-incident-impacting-kilo-code-data

### August 2026 Agent Funding: $681.5M in First 15 Days — Average Cheque Doubles (August 1–15, 2026)

Seven disclosed rounds worth $681.5 million in the first half of August — already matching July's full-month total of ~$643 million. The average disclosed cheque nearly doubled from July's ~$49M to ~$97M, while the number of companies raising held steady. The category split continues to favor infrastructure and governance over thin wrappers.

Notable rounds:
- **Zenity** $125M Series C (Aug 3, Norwest) — AI agent governance platform; Gartner named it AI agent governance frontrunner April 2026; contributes to OWASP Top 10 and MITRE ATLAS
- **Obsidian Security** $85M Series D (Aug 4, Crescent Cove, $1.1B valuation) — governs non-human identities and AI agents including Copilot Studio and Claude across SaaS; Greylock and Menlo participated
- **$210 million in 48 hours** for agent governance (Zenity + Obsidian) beats July's entire governance cluster ($190M in 11 days)

Pattern: fewer, larger rounds; infrastructure and vertical agents with named customers funded; thin wrappers not.

**Source:** https://gravity.fast/blog/ai-agent-funding-tracker-q3-2026/ | https://www.obsidiansecurity.com/news/unlocking-ai-potential-securely | https://finance.yahoo.com/technology/ai/articles/zenity-secures-125m-series-c-111131196.html

## 2026-08-28

### Claude Code — v2.1.247: SendFeedback Tool, `/claude-api cost-optimize`, Admin API Coverage (August 26, 2026)
v2.1.247 introduced the `SendFeedback` tool — Claude drafts a feedback report when issues occur for review and submission via `/feedback`. `/claude-api cost-optimize` profiles existing project API spend and works through cost levers (caching, token hygiene, batch, effort, model choice) one measured change at a time. The `/claude-api` skill expanded with full Admin API coverage: organization members, invites, workspaces, API keys, rate limit reports, workload identity federation, and CMEK. Cross-session peer messages collapse to one-line preview by default (Ctrl+O expands).

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code — v2.1.248: `--restricted` Mode, Cross-Session Messaging on Bedrock/Vertex/Foundry (August 27, 2026)
v2.1.248 adds `--restricted` flag (`CLAUDE_CODE_RESTRICTED=1`): removes built-in tools that run commands or code and WebFetch (unless named in `--tools`), keeps file tools inside working directory, refuses `bypassPermissions`, ignores user/project/local settings files — sandboxes agent execution to a minimal trusted surface. Per-agent prompt cache TTL via `experimental.cacheTtl` in agent frontmatter ("5m" or "1h"). Cross-session messaging (`SendMessage`/`ListAgents`) now works between sessions on the same machine on Bedrock, Vertex, and Foundry, and when telemetry is disabled. New `/usage-credits` command for Enterprise orgs billed through AWS Marketplace, self-serve Enterprise, and Enterprise trials. `claude self-hosted-runner --client-label <label>` allows overriding runner registration label. Workflow tool prompt description reduced from ~5.7k tokens to ~1k. `/ultrareview` and locally seeded cloud sessions skip uploading uncommitted edits to `prod.env`-style files, `*.tfvars`, and credential file backups. Multiple stability fixes including prompt-cache miss on OAuth refresh and usage-limit resume cache misses.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.150.0 Stable: @ Mentions, Auto-Naming, Interrupt Hooks, Major Security Hardening (August 26, 2026)
v0.150.0 is a major release with 50+ PRs. **@ mentions for cross-task referencing:** reference and coordinate other Codex tasks from the terminal — shifts Codex toward a multi-agent coordination hub. **`/copy` picker:** select full responses, individual code blocks, or blockquotes. **Auto-naming:** unnamed terminal tasks receive descriptive titles automatically; `/rename` suggests editable titles. Markdown link rendering with clickable labels. Permission mode cycling keybindings with Vim mode improvements. **Interrupt hooks:** run commands or MCP handlers when an active turn is interrupted. **Security hardening:** untrusted projects no longer supply AGENTS.md instructions; credential redaction improved; Windows sandbox elevated setup and Unicode path fixes; managed deny-read rules enforced after permission changes; Unix shutdown hangs prevented. Bug fixes: remote MCP bearer-token lookup; Amazon Bedrock conversation compaction and multi-agent compatibility resolved.

**Source:** https://github.com/openai/codex/releases

### Codex CLI — v0.150.1: Retained Image Compaction Fix (August 27, 2026)
Bug fix: remote compaction now counts retained images toward its token budget by default, trimming older images as needed.

**Source:** https://github.com/openai/codex/releases

### Codex CLI — v0.151.0-alpha Sprint Active (August 27–28, 2026)
New alpha sprint launched: v0.151.0-alpha.4 through alpha.7 already tagged in 24 hours — rapid iteration on new features. Stable remains v0.150.0.

**Source:** https://github.com/openai/codex/releases

### a16z: AI Agents Consume 5x More LLM Tokens Than Humans (August 26, 2026)
Andreessen Horowitz used OpenRouter data to estimate autonomous AI workloads consume roughly 5x more LLM tokens than human-driven usage. Much of that traffic comes from cached inputs, which still carry inference costs. Raises questions about the price of scale and strain on inference infrastructure.

**Source:** https://www.eweek.com/news/ai-agents-llm-token-usage-humans

### YuVerse, AccuKnox AgentZ, QueryStory, PayCentral, Skyflow, Runable, The Trade Desk — Agentic AI Ecosystem Updates (August 26–27, 2026)
Multiple enterprise agentic AI launches: YuVerse (Mumbai) launched four enterprise AI tools including agent building platform; AccuKnox AgentZ for building, running, and governing agents at scale; QueryStory emerged from stealth with agentic data platform for Fortune 500 in regulated sectors (founders from Google, Chronicle, EvolutionIQ, Accenture); AvenuesAI/PhroneticAI launched PayCentral for direct agent-to-agent payments; Skyflow released data control layer for Glean enterprise AI search; Runable raised $21M for AI agent platform (60–70% of trillion-token load from paying customers); The Trade Desk added agentic AI to Kokai Zuma ad buying platform.

**Source:** https://agentic.ai/news


## 2026-08-29

### Claude Code — v2.1.250: Bug Fixes (August 27, 2026)
Bug fixes and reliability improvements — second release alongside v2.1.248.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code — v2.1.251: PreModelSwitch Hooks, Live Subagent Streaming, Spend Limits (August 28, 2026)
The 202th Claude Code release of 2026 adds hooks-driven model switch control and live subagent observability. **PreModelSwitch and PostModelSwitch hook events** — block, confirm, or annotate any model switch; SessionStart resume hooks receive session staleness and estimated re-cache cost. **Live subagent tool streaming** — foreground subagent tool calls and results stream in real time to Remote Control clients (background subagents remain status-only). **Spend limit bar in ** and  status line field for Claude apps gateway users. **Per-session prompt cache analytics** in  — hit ratio, misses, tokens re-cached, warm/cold breakdown. Multiple security fixes: symlink swap bug in file tools (could read/write outside approved location), plugin path-traversal rejection, Workflow tool scriptPath read before permission check, Grep/Glob not applying deny rules through symlinked paths. TUI lag fix for parallel subagents. Agent team teammate final answer now arrives in idle notification. Install size reduced ~5 MB.

**Source:** https://code.claude.com/docs/en/changelog | https://www.havoptic.com/r/claude-code-2.1.251

### GitHub Copilot CLI — v1.0.81: Session Crash Recovery, Plugins Dashboard, MCP 2026-07-28, WAM Auth (August 27, 2026)
First release in 14 days — significant feature release. **Session crash recovery** — startup offers to restore sessions still open when CLI went away; crashes or machine restarts no longer lose open terminals. **Plugins dashboard** — , , ;  to opt out. **MCP 2026-07-28 support** shipped to CLI, SDK, IDE, and in-memory clients. **OpenTelemetry hooks** — hooks receive current trace context and emit correlated spans; command hooks get  env var. **Windows WAM auth** — remote MCP servers protected by Microsoft Entra ID can sign in via OS authentication broker with no prompt. **Gemini 3.7 Flash** support added. ** and ** settings for startup defaults. **** command.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.81

### Kiro CLI — v2.20.0: Full-Screen Task Execution View (August 26, 2026)
Full-screen task execution view for V3 spec runs with real-time progress and task scope selection. Preserve scrollback toggle keeps terminal history through overflow and resize redraws.

**Source:** https://www.havoptic.com/r/kiro-2.20.0

### Antigravity CLI — v1.1.22: Smart Model Autocomplete, CPU Drain Fix (August 27, 2026)
** argument** switches to a model by name/slug/label and saves as default in one step; ghost text offers rest of first matching name while typing. Effort hint autocomplete completes what you actually typed. CPU drain fixed — interface no longer redraws continuously when tasks/subagent panels open idle (~32% → ~10% CPU). 502 errors from model endpoints now retried instead of ending the run.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.1.22

### Codex CLI — v0.151.0-alpha.8–11 Sprint (August 27–28, 2026)
Alpha.8 through alpha.11 tagged in under 48 hours — rapid iteration continues. Stable remains v0.150.0. Alpha.7.1 backports retained image compaction fix to stable.

**Source:** https://github.com/openai/codex/releases

### Kilo — v7.5.6: Agent Manager Worktree @ Picker, Separate Compaction Model (August 27–28, 2026)
**Agent Manager worktree @ picker** — searchable picker to reference other Agent Manager worktrees, prioritizing recently opened; shares paths, branches, session IDs without diffs or chat history. **Separate model for conversation compaction** configurable in Context settings. **** reviews all committed and uncommitted Agent Manager worktree changes. Multiple UI/UX patches for faster change loading, cached diff preservation on session switch, scroll position stability during streaming.

**Source:** https://github.com/Kilo-Org/kilocode/releases



## 2026-08-29

### Claude Code v2.1.250: Bug Fixes (August 27, 2026)
Bug fixes and reliability improvements second release alongside v2.1.248.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.251: PreModelSwitch Hooks, Live Subagent Streaming, Spend Limits (August 28, 2026)
The 202th Claude Code release of 2026 adds hooks-driven model switch control and live subagent observability. PreModelSwitch and PostModelSwitch hook events block, confirm, or annotate any model switch; SessionStart resume hooks receive session staleness and estimated re-cache cost. Live subagent tool streaming to Remote Control clients for foreground subagents. Spend limit bar in usage and rate_limits.spend_limit status line field for Claude apps gateway users. Per-session prompt cache analytics in cost with hit ratio, misses, tokens re-cached, warm/cold breakdown. Multiple security fixes including symlink swap bug in file tools, plugin path-traversal rejection, Workflow tool scriptPath permission check bypass, Grep/Glob deny rules through symlinked paths. TUI lag fix for parallel subagents. Agent team teammate final answer now arrives in idle notification. Install size reduced approximately 5 MB.

**Source:** https://code.claude.com/docs/en/changelog | https://www.havoptic.com/r/claude-code-2.1.251

### GitHub Copilot CLI v1.0.81: Session Crash Recovery, Plugins Dashboard, MCP 2026-07-28, WAM Auth (August 27, 2026)
First release in 14 days. Session crash recovery restores sessions still open when CLI went away; crashes or machine restarts no longer lose open terminals. Plugins dashboard via slash plugin, slash mcp, slash skills commands; PLUGINSDASHBOARD=false to opt out. MCP 2026-07-28 support shipped to CLI, SDK, IDE, and in-memory clients. OpenTelemetry hooks receive current trace context and emit correlated spans; command hooks get traceparent env var. Windows WAM auth for Microsoft Entra ID protected remote MCP servers. Gemini 3.7 Flash support added. slash defaultMode and slash defaultPermissionMode settings for startup defaults. slash copilot app command opens GitHub Copilot app in current directory.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.81

### Kiro CLI v2.20.0: Full-Screen Task Execution View (August 26, 2026)
Full-screen task execution view for V3 spec runs with real-time progress and task scope selection. Preserve scrollback toggle keeps terminal history through overflow and resize redraws.

**Source:** https://www.havoptic.com/r/kiro-2.20.0

### Antigravity CLI v1.1.22: Smart Model Autocomplete, CPU Drain Fix (August 27, 2026)
slash model argument switches to a model by name slug or label and saves as default in one step; ghost text offers rest of first matching name while typing. Effort hint autocomplete completes what you actually typed. CPU drain fixed interface no longer redraws continuously when tasks or subagent panels open idle approximately 32 percent to 10 percent CPU. HTTP 502 errors from model endpoints now retried instead of ending the run.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.1.22

### Codex CLI v0.151.0-alpha.8-11 Sprint (August 27-28, 2026)
Alpha.8 through alpha.11 tagged in under 48 hours rapid iteration continues. Stable remains v0.150.0. Alpha.7.1 backports retained image compaction fix to stable.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.5.6: Agent Manager Worktree Picker, Separate Compaction Model (August 27-28, 2026)
Agent Manager worktree searchable picker to reference other Agent Manager worktrees prioritizing recently opened; shares paths, branches, session IDs without diffs or chat history. Separate model for conversation compaction configurable in Context settings. slash review worktree reviews all committed and uncommitted Agent Manager worktree changes. Multiple UI UX patches for faster change loading, cached diff preservation on session switch, scroll position stability during streaming.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-08-30

### OpenAI Codex CLI — v0.151.0: Extension MCP Result Inspection, Configurable Grace Period (August 29, 2026)
Extensions can now inspect and modify MCP tool results before they reach the model — giving more control over AI responses. Added a configurable grace period for discovering tools from optional MCP servers. Improved sandbox enforcement using executor home directory, OS, and path conventions. Permission profiles now preserved across TUI turns. Subagent token usage counted toward root goal budgets.

**Source:** https://github.com/openai/codex/releases

### OpenAI Codex CLI — v0.152.0-alpha.1: New Alpha Sprint (August 29, 2026)
New alpha sprint launched — v0.152.0-alpha.1 tagged. Stable remains v0.151.0.

**Source:** https://github.com/openai/codex/releases

### Google Antigravity — v2.11.0: Generative UI, Split Terminals, @File Syntax (August 2026)
Generative UI renders HTML artifacts inline in chat. Added KaTeX math formatting and Chart.js/Plotly chart support in generative UI widgets. Split terminals side-by-side (Ctrl+Shift+5 Linux/Windows, Cmd+\ on Mac). @path/to/file syntax for referencing and inlining external files in AGENTS.md and custom rules. YAML frontmatter rendered as formatted metadata cards. Darcula theme preset added. 30 bug fixes including memory leaks, auth race conditions, and cold-start 429 errors.

**Source:** https://antigravity.google/changelog

### Enterprise AI Agents: 54% Run in Production, 80% Embed (Mid-Year 2026)
54% of enterprises now run AI agents in production. 80% of enterprise apps embed an AI agent but only 31% deploy one. 88% of pilots never ship. Key drivers: JPMorgan committing $19.8B to AI, agent startups raising $25B+.

**Source:** https://www.ampcome.com/post/enterprise-ai-agents-2026-mid-year-report | https://paul-okhrem.com/enterprise-ai-agents-statistics-2026/

### AI Agent Funding — July 2026: $1.8B Across 12+ Deals
July 2026 AI agent funding hit $1.8B across 12+ deals. Enterprise automation and dev tools dominated. Top investors: Sequoia, a16z.

**Source:** https://aifunding.me/insights/ai-agent-funding-july-2026

### a16z: AI Agents Consume 5x More LLM Tokens Than Humans (August 26, 2026)
Andreessen Horowitz used OpenRouter data to estimate autonomous AI workloads consume roughly 5x more LLM tokens than human-driven usage. Much traffic comes from cached inputs, which still carry inference costs.

**Source:** https://www.eweek.com/news/ai-agents-llm-token-usage-humans

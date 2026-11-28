## 2026-05-31

### Claude Code v2.1.158 (May 30) — Auto Mode on Bedrock, Vertex, Foundry

Auto mode — Claude Code's agentic automation mode — is now available on AWS Bedrock, Vertex AI, and Microsoft Foundry for Opus 4.7 and Opus 4.8. Opt in with `CLAUDE_CODE_ENABLE_AUTO_MODE=1`. This extends the convenience of auto mode beyond the default Anthropic endpoint to enterprise cloud environments.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI — Rust v0.135.0 (May 28) — Doctor, Vim Mode, Memory DB

Major release for Codex CLI (build 26.519):
- `codex doctor` now reports richer environment diagnostics: Git, terminal, app-server, and thread inventory for support cases
- `/status` shows remote connection details and server version when connected over remote transport
- Vim mode gained text-object editing, improved word/line-end behavior, and configurable interrupt-turn binding
- `/permissions` now understands named permission profiles and displays configured custom profiles
- Packaged Codex builds include a patched zsh helper across macOS and Linux
- Python SDK now exposes friendly Sandbox presets for thread and turn APIs
- Memory runtime state moved into a dedicated SQLite database (infrastructure upgrade)
- Install scripts support `CODEX_NON_INTERACTIVE=1` for non-interactive installation
- Bug fixes: markdown tables render better in TUI, improved stability on macOS and Zellij, older tmux/iTerm sessions no longer lose Ctrl-C handling

**Source:** https://github.com/openai/codex/releases

### Factory AI Droid v0.133.1–0.134.0 (May 25–26) — Context Window Modal, Figma Helper

- **v0.134.0 (May 26):** Figma helper skill renamed `figma-mcp-helper`; system-managed settings from standard platform paths; file tool streaming wait; capped pending command approvals
- **v0.133.1 (May 25):** Context window `/context` slash command and modal for inspecting session context usage; optional audio cues for session completion/awaiting input; sidebar session menu with right-click quick actions

**Source:** https://docs.factory.ai/changelog/release-notes

### Community: Top 20 Agentic CLI Tools Comparison (May 2026)

Reddit aggregation and Tembo comparison confirm: Claude Code leads for terminal-native agentic work; Codex surging with Goal Mode GA and Windows computer use; Google losing ground in agentic CLI space (Gemini CLI sunset June 18, 2026). Platform properties (plugin ecosystem, MCP support, multi-agent orchestration) matter more than raw model benchmarks in community discussions.

**Sources:** https://www.reddit.com/r/aiagents/comments/1rmh7xc/top_20_agentic_coding_cli_tools_in_2026/ | https://www.tembo.io/blog/coding-cli-tools-comparison

---

## 2026-05-26

### Cline CLI v3.0.85 (May 25) — Model Expansions, 5 Releases in 6 Days

Following the rapid sprint from last week, Cline continued at pace with 5 releases from May 20–25:

- **v3.0.85 (May 25):** GPT-5.5 support for SAP AI Core; DeepSeek V4 Flash and Pro models added; Gemini 3.5 Flash to both Gemini and Vertex providers; `/lg-task` URI webhook integration for LG dashboard flows; Vertex AI global endpoint handling fix for Claude models; Poolside Laguna models routed through next-gen prompts and native tool calling
- **v3.0.13 (May 23):** Session resume loading dialog; `/clear` deferred session creation
- **v3.0.12 (May 22):** Config screen loading dialog; inline ask-question tool rendering; manual update bypass; SDK 0.0.42
- **v3.0.11 (May 22):** OAuth max_output_tokens fix; Vertex auth via Google auth; Poolside provider; Gemini 3.5 Flash; OTEL telemetry
- **v3.0.10 (May 20):** Concurrent plugin loading; optimistic TUI updates; sessions stay alive after cancel

**Source:** https://github.com/cline/cline/releases

### OpenAI Codex — Goal Mode GA, Appshots, Remote Locked Use (May 21, 2026)

Major update 26.519 shipped May 21:
- **Goal mode** promoted from experimental to GA across app, IDE extension, and CLI. Agents can drive toward a specific objective for hours or days — legitimizes sustained autonomous coding as first-class feature
- **Appshots**: Press both Command keys to send frontmost app window screenshot + available text to Codex without copy/paste
- **Remote computer use**: Codex can operate desktop apps when Mac is locked, including via Codex Mobile. Safeguards: short-lived authorization, covered display detection, relock on local input, manual-unlock fallback
- **Plugin sharing** through marketplace sources available for ChatGPT Business (Enterprise coming)
- **Advanced browser annotations**: Adjust font size, colors, spacing via annotations for clearer Codex signal
- Chrome extension improvements: no tab group clutter, better structured data extraction, read-only JS sandbox, Windows reliability fixes

**Source:** https://developers.openai.com/codex/changelog

### Q2 2026 Agentic AI State: $42.6B Raised, 31% Pilot→Production, MCP +58% QoQ

- **Q2 funding**: $42.6B across 312 rounds (+52% QoQ). Agentic-specific rounds hit $20B (47% of AI funding), up 4× from $4.8B in Q1
- **MCP adoption**: 9,400 published servers (+58% QoQ for third consecutive quarter). Atlassian, Salesforce, Stripe, GitHub, Linear all released first-party MCP servers in Q2
- **Pilot→production conversion**: 31% (up from 18% in Q1, 11% in Q3 2025) — steepest single-quarter shift since tracking began. MCP standardization (+58% QoQ) and 30–50% cost reduction per successful task driving the jump
- **Token price compression**: −42% Q1→Q2 blended rate across top 5 frontier providers (Claude Opus 4.7 cache pricing, DeepSeek V4 Preview, OpenAI batch tiers)
- **Mid-market deployment**: 67% of mid-market enterprises (250–2500 FTE) have at least one production agentic AI workflow (up from 49% in Q1)
- **Key insight**: "The model layer is approaching commodity faster than anyone's pricing model assumed. Differentiation has moved up the stack."

**Sources:** https://www.digitalapplied.com/blog/state-of-agentic-ai-q2-2026-quarterly-report | https://newmarketpitch.com/blogs/news/agentic-ai-funding-news

### May 2026 Agentic AI Funding: $518M+ Across 12 Deals — Infrastructure & Security Lead

Notable deals:
- **Parallel Web Systems**: $100M Series B at $2B valuation — web infrastructure for AI agents (search, retrieve, use open web for multi-step work)
- **Armadin**: $189.9M seed + Series A — cybersecurity agent swarms
- **Cogent Security**: $42M Series A — vulnerability remediation agents
- **NeoCognition**: $40M seed — self-learning enterprise agents
- **Trent AI**: $13M seed — agent security

5 of 12 deals in infrastructure/security. Investors funding agent memory, governance, and verification — reliable execution now as important as model quality. Only two valuations disclosed: Parallel Web Systems at $2B, Rox AI at $1.2B.

**Source:** https://newmarketpitch.com/blogs/news/agentic-ai-funding-news

---

## 2026-05-25

### Cline CLI v3.0.10–13 (May 20–23, 2026) — Rapid Iteration Sprint

Cline shipped 4 releases in 3 days, covering major SDK and UX improvements:

- **v3.0.13 (May 23):** Session resume loading dialog prevents TUI freeze; `/clear` deferred session creation for faster UX
- **v3.0.12 (May 22):** Config screen loading dialog; inline ask-question tool rendering; manual update bypass; bundled SDK refreshed to 0.0.42
- **v3.0.11 (May 22):** OAuth max_output_tokens fix; Vertex auth via Google auth; Poolside provider added; Gemini 3.5 Flash in model list; Telegram bot auto-detection; OTEL telemetry baked in at build time
- **v3.0.10 (May 20):** Concurrent plugin loading; faster plugin/tool config toggles with optimistic TUI updates; interactive sessions stay alive after cancel

**Sources:** https://github.com/cline/cline/releases

### Factory AI Droid v0.126.0–0.129.0 (May 13–18, 2026) — EU Residency & Security

- **v0.129.0 (May 18):** Streaming file hook events; faster large session rendering; Esc cancels tool activity
- **v0.128.0 (May 15):** Session reconcile stale Droid Computer registrations automatically
- **v0.126.0 (May 14):** EU data residency (sessions and LLM inference stay in EU-only data plane); bulk session archiving; built-in `/security-review` skill bundled by default; faster Computer restarts

**Source:** https://docs.factory.ai/changelog/release-notes

### OpenAI Codex CLI v0.129.0/0.130.0 (May 2026) — Vim Mode & Workflow Polish

- Modal Vim editing ("vim mode") for terminal-based usage
- Redesigned resume/fork picker with improved scrollback and diff workflows
- Expanded plugin management with access controls and remote sync workflows
- `/hooks` browser plus additional hook capabilities
- Codex Chrome extension (May 7): signed-in browser state access with per-site approvals and allowlist/blocklist controls

**Sources:** https://developers.openai.com/codex/changelog | https://developers.openai.com/codex/app/chrome-extension

### Anthropic "Code with Claude" Event (May 19–21, London)

Anthropic held its two-day developer event in London on the same dates as Google I/O in Palo Alto — deliberate counter-programming. The event showcased Claude's vision for coding's future. No specific product announcements surfaced in this research session, but the timing confirms Anthropic's commitment to positioning Claude Code as the premier developer tool.

**Source:** https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/

### Major Industry Context (from May 2026)

- **Anthropic first profit:** $559M operating profit on $10.9B Q2 revenue — 2 years ahead of its own 2028 target. Claude Code enterprise deployments generating $2.5B annualized revenue.
- **OpenAI IPO filing:** Confidential prospectus filed targeting $1T+ valuation. $25B ARR, 900M weekly active users.
- **SpaceX S-1 reveal:** Anthropic paying $1.25B/month ($45B total) for Colossus compute through May 2029.
- **OpenAI AI solves 80-year math problem:** A reasoning model autonomously cracked a geometry problem without human guidance.

**Source:** https://aitoolsrecap.com/Blog/ai-news-may-2026

### Benchmark Leaderboard (May 2026)

- SWE-bench Verified: GPT-5.5 (Codex) 88.7% #1; Claude Opus 4.7 87.6%
- SWE-bench Pro: Claude Opus 4.7 64.3% #1; GPT-5.5 58.6%
- Terminal-Bench 2.0: GPT-5.5 82.7% #1; Claude Opus 4.7 69.4%
- Claude Code: ~326K GitHub commits/day (~10% of all public)
- Claude Code GitHub stars: 124K (up from 71.5K in Feb)
- Codex GitHub stars: 82.9K (up from 62.4K in Feb)

### xAI Grok Build Updates (May 2026)

- Beta opened May 14 for SuperGrok Heavy subscribers
- grok-build-.1 model released May 20, 2026 (256K context, $1/$2 per 1M tokens)
- 8 parallel agents, 2M token context window
- Direct enterprise positioning against Claude Code and Codex CLI

### Enterprise Market Activity

- Mayfield CXO survey: agentic AI moved into production faster than any enterprise technology shift in the last decade
- Agentic AI infrastructure and security startups raised $518M+ across 12 deals in May 2026 alone
- Google Cloud committed $750M to accelerate partners' agentic AI development

---

## 2026-05-24

### Google Antigravity 2.0 Launches — Major Architectural Rewrite (May 19, 2026)

Google launched Antigravity 2.0 at Google IO 2026 — not as an IDE upgrade but as a brand-new standalone desktop application. Gemini CLI is being retired and users must migrate to the new Antigravity CLI by June 18, 2026.

**Five products shipped simultaneously:**
- **Antigravity 2.0 desktop app** — macOS, Linux, Windows. Not an IDE; a mission-control for multi-agent teams with conversations, projects, artifacts, and scheduled tasks. Co-developed with Gemini 3.5 Flash.
- **Antigravity CLI (`agy`)** — terminal interface built in Go. Replaces Gemini CLI entirely on Free/Pro/Ultra tiers by June 18, 2026. Ships with multi-agent orchestration, scheduled tasks, voice support.
- **Antigravity SDK** — build custom agents using Google's internal harness; deploy anywhere.
- **Managed Agents API** — spin up agents over Gemini API into isolated Linux sandboxes.
- **CodeMender** — AI security agent that finds and patches vulnerabilities in agent-generated code.

**Key features:**
- Multi-agent teams working in parallel on separate problems with unified dashboard
- Custom subagent workflows — deterministic chains (research → plan → implement → review)
- Scheduled/background tasks that fire on cron without user present
- Native voice command support
- One-click integration with AI Studio, Android, Firebase, Workspace
- AI Ultra plan: $100/mo (5x Pro limits), premium Ultra drops $250 → $200 (20x Pro limits)
- I/O week credit: $100 bonus for new and existing Ultra subscribers through May 25, 2026

**Gemini CLI sunset:** Google is asking all Gemini CLI users to migrate to Antigravity CLI. The shutdown deadline is June 18, 2026 — approximately 4 weeks away.

**Sources:** https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/ | https://agentpedia.codes/blog/google-antigravity-2-0-launch

### Cline CLI v3.0.13 (May 23) — Session Resume and /clear Improvements

- Show loading dialog while resuming a session from history so the TUI no longer appears frozen during load
- Speed up `/clear` command by deferring new session creation until the next prompt is sent — clearing no longer blocks on spinning up an empty session

**Source:** https://github.com/cline/cline/releases

### OpenCode v1.15.10 (May 23) — Desktop Flow Restoration

- Restored legacy production desktop flows for opening projects and starting sessions

**Source:** https://opencode.ai/changelog

## 2026-05-23

### Cline CLI v3.0.12 (May 22) — Loading Dialog, Inline Questions, Manual Update

Cline extracted its internal agent harness into a standalone, open-source TypeScript SDK called @cline/sdk, rebuilding all products on top of it. Most significant architectural change since founding.

**SDK Structure:**
- @cline/shared: Foundation with types, schemas, tool helpers, hook contracts
- @cline/llms: Provider gateway covering Anthropic, OpenAI, Google, AWS Bedrock, Mistral, LiteLLM, any OpenAI-compatible endpoint
- @cline/agents: Browser-compatible, stateless agent execution loop
- @cline/core: Node runtime/orchestration layer for sessions, storage, built-in tools, automation

**Benchmark Results (Terminal-Bench 2.0):**
- Cline CLI (opus-4.7): 74.2% vs Claude Code: 69.4%
- Cline CLI (opus-4.6): 71.9% vs Claude Code: 65.4%
- On open-weight models: Cline scored 55.1% on kimi-k2.6 vs OpenCode 37.1% and Pi-Code 45.5%

**Key Features:**
- Long-running work survives UI restarts, sessions move across surfaces
- Native multi-agent support without separate orchestration layer
- Built-in CRON jobs, checkpointing, web search, MCP connectors
- Plugin architecture for custom tools, rules, commands
- New CLI completes tasks faster and at lower token cost

**Scale:** 7M+ developers, ~61,700 GitHub stars (May 2026)
**Install:** `npm install @cline/sdk` or `npm i -g @cline`
**License:** Apache 2.0

**Sources:** https://cline.bot/blog/introducing-cline-sdk-the-upgraded-agent-runtime | https://www.marktechpost.com/2026/05/14/cline-releases-cline-sdk-an-open-source-agent-runtime-now-powering-its-cli-and-kanban-with-ide-extensions-being-migrated/

### Factory AI Droid Updates (May 7-13, 2026) — 5 Releases in One Week

**v0.125.0 (May 13):** ACP config options, larger Task tool results, bug fixes (stale tool shimmer, Slack shimmer heartbeat)

**v0.124.0 (May 12):** Deep and shallow security review modes for `/security-review`, login redirect URIs (app), sharper fuzzy search, bounded resume history

**v0.123.0 (May 11):** Factory token usage in mission control, model deprecation notices, optimistic message submit, clearer parallel execute approvals

**v0.122.0 (May 8):** Manager-only API key creation, stricter Computer name validation

**v0.121.0 (May 7):** Thinking duration display, scroll to most recent prompt, smoother transcript scrollback

**Source:** https://docs.factory.ai/changelog/release-notes

### Codex Updates (May 2026)

**May 13:** Mobile documentation for ChatGPT mobile app integration
**May 11:** Expanded Auto-review documentation (reviewer lifecycle, trigger conditions)
**May 7:** Codex for Chrome extension — works in parallel across tabs in background
**May 6:** Analytics governance docs update (enterprise dashboard charts, data export, API endpoints)
**May 5:** Access tokens for ChatGPT Enterprise (scripts, schedulers, CI runners)

**Source:** https://developers.openai.com/codex/changelog

### Roo Code Shutdown — FINAL DAY (May 15, 2026)

All Roo Code products shut down today: VS Code extension, Cloud, and Router. Migration paths: Cline (fastest), Kilo (familiar UX), Roomote (cloud).

**Source:** https://docs.roocode.com/sunset

---

## New Developments (April 26, 2026)

### Codex CLI v0.126.0-alpha.2 Pre-release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-26 -->
  <!-- Features confirmed from GitHub releases -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- Released April 25, 2026 at 21:44 UTC
- Continued alpha development following v0.125.0 stable release
- Pre-release indicates active development on next stable version

### Cursor: Multitask, Worktrees, and Multi-root Workspaces (MAJOR) <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: cursor.com/changelog -->
  <!-- New features not yet in cumulative findings -->
  <!-- Sources: https://cursor.com/changelog -->
- New release introduces async subagents for multitasking
- Improved worktrees experience
- Multi-root workspaces for cross-repo changes
- Represents significant capability expansion for Cursor

### Kilo: Roo Code Migration Guide Published <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-26 -->
  <!-- Sources: https://kilo.ai/articles/roo-to-kilo-migration-guide -->
- Roo Code is shutting down on May 15, 2026
- Kilo published migration guide (15-30 minute migration)
- Covers file mapping, feature parity, permissions, MCP
- Opportunity to capture displaced Roo Code users

### Market Research: Claude Code Leads, Codex Surging <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: tokencalculator.com -->
  <!-- Sources: https://tokencalculator.com/blog/best-ai-ide-cli-tools-april-2026-claude-code-wins -->
- April 2026 ranking: Claude Code leads for CLI and agentic work
- Codex is surging/improving rapidly
- Google appears to be losing ground in agentic CLI space

---

## New Developments (April 25, 2026)

### Codex CLI v0.125.0 Stable Release (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-25 -->
  <!-- All claims confirmed from GitHub releases -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- Released April 24, 2026 at 18:00 UTC
- **Unix Socket Transport:** App-server integrations now support Unix socket transport for lower-latency, more secure local communication
- **Pagination-Friendly Resume/Fork:** Improved session state management for large conversations, better handling of resumed sessions and forks
- **Sticky Environments:** Environments persist across operations, reducing need for repeated configuration
- **Remote Thread Config/Store Plumbing:** Enhanced remote session architecture with improved thread configuration and storage
- **Permission Profiles Round-Trip:** Permission profiles now round-trip across TUI sessions, user turns, MCP sandbox state, shell escalation, and app-server APIs - consistent permission enforcement across all contexts
- **Model Provider-Owned Discovery:** Model providers now own model discovery, with AWS/Bedrock account state exposed to app clients - improved provider abstraction and flexibility
- **Reasoning Token Usage:** codex exec --json now reports reasoning-token usage for programmatic consumers - better cost tracking and observability
- **Rollout Tracing:** Comprehensive rollout tracing with tool, code-mode, session, and multi-agent relationships, plus debug reducer command for inspection - production deployment observability
- **1-Day Release Cadence:** v0.124.0 (April 23) → v0.125.0 (April 24), faster than previous 3-day cadence


### Kilo v7.2.13 Pre-release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-25 -->
  <!-- All claims confirmed from GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->
- Released April 24, 2026 at 21:00 UTC
- **Agent Manager Tab Bar Regression Fixes:** New session and terminal tabs now consistently open at right end of tab bar instead of sometimes slipping in front of existing tabs
- **Terminal Tab Drag Label:** Dragging a terminal tab now shows same floating label preview as dragging a session tab
- **Git Changes from Prompt Mentions:** Support attaching Git changes from prompt mentions in VS Code extension - improved workflow for Git-based tasks


### Crush CLI v0.62.1 Stability Release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-25 -->
  <!-- All claims confirmed from GitHub releases -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- Released April 24, 2026 at 20:28 UTC
- **MiniMax API Key Fix:** Crush wasn't allowing users to use some MiniMax API keys - now all keys should work
- **Fantasy Provider Fix:** Fixed scenario where Fantasy provider requests could fail with 400 Bad Request errors
- **LSP Startup Reliability:** LSP servers startup should now be more reliable
- **Retry Logging:** Better logs when Crush is retrying a failed request
- **Community Contributions:** Features contributed by @flynn-eye, @carsonfarmer, @iceymoss
- **Stability-Focused Release:** Community-driven improvements for reliability and bug fixes


---

## New Developments (April 24, 2026)

### Codex CLI v0.124.0 Stable Release (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-24 -->
  <!-- Correction: Previously identified as v0.124.0-alpha, confirmed to be stable release -->
  <!-- All claims confirmed from GitHub releases -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- Released April 23, 2026 at 18:29 UTC (same day as v0.123.0)
- **CORRECTION:** v0.124.0 is a stable release, not an alpha version as previously reported
- **TUI Quick Reasoning Controls:** Alt+, lowers reasoning, Alt+. raises reasoning, accepted model upgrades reset reasoning to new model's default
- **Multi-Environment Management:** App-server sessions can manage multiple environments, choose environment and working directory per turn
- **First-Class Amazon Bedrock Support:** AWS SigV4 signing, AWS credential-based auth for OpenAI-compatible providers
- **Remote Plugin Marketplaces:** List and read remote plugin marketplaces directly, more reliable detail lookups, larger result pages
- **Stable Hooks System:** Hooks are now stable (not experimental), can be configured inline in config.toml and managed in requirements.toml, can observe MCP tools, apply_patch edits, long-running Bash sessions
- **Fast Service Tier Defaults:** Eligible ChatGPT plans now default to Fast service tier unless user opts out
- **Bug Fixes:** Cloudflare cookie preservation, remote app-server reliability, permission-mode drift, wait_agent timeout, local stdio MCP launch, startup resilience
- Same-day release after v0.123.0 (April 23, 2026)
- Confirms aggressive 3-day major release cadence (v0.122.0 April 20 → v0.123.0 April 23 → v0.124.0 April 23)


### Kilo v7.2.12 Pre-release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-24 -->
  <!-- All features confirmed from GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->
- Released April 23, 2026 at 18:58 UTC
- **xterm.js-Powered Terminal Tabs:** Open terminal tabs in Agent Manager, keyboard shortcut Cmd+Shift+T / Ctrl+Shift+T, terminals render as proper tabs alongside agent sessions, support mixed drag-reorder, persist position across webview reloads
- **JetBrains Session Chat UI:** Add initial JetBrains session chat UI, improve sandbox debug logging for tracing chat events
- **Submit Behavior Restoration:** Restore explicit Submit behavior for single-choice question prompts in VS Code extension, option clicks stay visible for review
- **Mid-Turn Message Handling:** Fix mid-turn message handling, new prompt while assistant working no longer aborts in-flight response, current LLM reply streams to completion
- **TUI Freeze Fix for Large Files:** Fix TUI freeze on huge-file diffs, session-summary and file-view patches now use git directly instead of JavaScript Myers implementation, files of any size render without blocking
- **LLM Token Streaming Performance:** Significantly speed up LLM token streaming in long sessions, chat view stays responsive while model streams reply, previously each SSE batch produced ~1.3 seconds freeze (~80 dropped frames), streaming ticks now inside single animation frame
- **Dependency Updates:** @opencode-ai/ui@7.2.21, @kilocode/kilo-ui@7.2.21


---

## New Developments (April 23, 2026)

### Codex CLI v0.123.0 Stable Release (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All claims confirmed from GitHub releases -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- Released April 23, 2026
- Built-in Amazon Bedrock model provider with configurable AWS profile support
- Enhanced `/mcp verbose` for full MCP server diagnostics (resources, resource templates)
- Plugin MCP loading accepts both `mcpServers` and top-level server maps in `.mcp.json`
- Improved realtime handoffs: background agents receive transcript deltas, explicit silence tool
- Host-specific `remote_sandbox_config` requirements for remote environments
- Refreshed bundled model metadata including gpt-5.4 as default
- Bug fixes: /copy after rollback, queued follow-up text, Unicode/dead-key input (WSL), stale proxy env, codex exec inheritance, leaked review prompts
- Follows v0.122.0 stable release just 3 days prior (April 20)
- Suggests aggressive 3-day major release cadence


### Codex CLI v0.124.0-alpha Development (CORRECTED) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: 2026-04-24 -->
  <!-- Previous finding was incorrect: v0.124.0 is a stable release, not alpha -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- **CORRECTED:** v0.124.0 is a stable release (April 23, 2026 at 18:29 UTC), not an alpha version
- Previous research incorrectly identified v0.124.0 as alpha-active development
- Actual pattern: v0.122.0-alpha (8 releases) → v0.122.0 stable (April 20) → v0.123.0-alpha (10 releases) → v0.123.0 stable (April 23, morning) → v0.124.0 stable (April 23, evening)
- Multiple same-day releases (v0.123.0 and v0.124.0) demonstrate aggressive development velocity


### Crush CLI v0.62.0 Release (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All features confirmed from official GitHub release notes -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- Released April 22, 2026
- **98% token reduction:** Short tool descriptions now default (saves ~120k tokens per session)
- Fetch tool size reduction: 5MB → 100KB (prevents context window overflow)
- Automatic diff rendering for diff-like output from any tool (not just edit tool)
- Removed noisy skill discovery warnings from logs
- Short tool descriptions were preview in v0.57.0, now default
- Opt-out available with `export CRUSH_SHORT_TOOL_DESCRIPTIONS=0` (but may be removed)


### Factory AI: Droid Computers Product Announcement (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All claims confirmed from Factory AI blog -->
  <!-- Sources: https://factory.ai/news/droid-computers -->
- Announced April 22, 2026
- **Persistent machines** for remotely orchestrating Droids
- Two setup paths:
  - **Managed Computers:** Cloud dev environments hosted by Factory (Max/Growth/Enterprise plans)
  - **Bring Your Own Machine (BYOM):** Register any machine as Droid Computer (free for all users)
- Persistent environments: filesystem, configuration, credentials, local services, process memory
- Run anywhere, anytime: Mobile app to manage Droids on the go
- Asynchronous workflows: Kick off task before sleep, have result ready in morning
- Always-on agents: Combine with automations for persistent background agents (watch alerts, triage issues, deep research)
- Paradigm shift: Ephemeral sandboxes (good for simple tasks) vs persistent environments (required for complex workflows)
- **First-to-market** with persistent cloud environments for coding agents
- Already in production at several Fortune 500 companies (BYOM)


### Factory AI: Missions Architecture Article (Previously Missed) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- Article from April 10, 2026, missed in previous research -->
  <!-- Sources: https://factory.ai/news/missions-architecture -->
- Published April 10, 2026
- **Architecture behind Missions:** Breaks large work into focused units with fresh agents
- **Design Principles:**
  - Separation of concerns: Orchestrator (plans), Workers (implement), Validators (evaluate)
  - Test-driven development at two levels: Workers write tests first, Orchestrator defines validation contract first
  - Externalized state: Shared artifacts (validation contract, feature list, research notes)
  - Model specialization: Different models for different roles
- **Real-World Example:** Slack clone mission
  - 38.8k lines of code (52.5% tests)
  - 89.25% statement coverage
  - 6 milestones, 2-4 validation rounds each
  - Validators surfaced 81 issues, 21 fix features (34.4% of implementation)
  - Median run lengths: 51 turns (implementation), 30 turns (validation)
- Available today via `/missions` command in any Droid session


---

## New Developments (April 21-22, 2026)

### Cursor: SpaceX/xAI Partnership (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All claims confirmed from official Cursor blog post -->
  <!-- Sources: https://cursor.com/blog/spacex-model-training -->
- Partnership announced April 21, 2026
- Will leverage xAI's Colossus infrastructure for model training
- Addresses compute bottleneck limiting training scale
- First major agentic CLI tool to secure custom compute infrastructure partnership


### Cursor: National Australia Bank Enterprise Adoption (MAJOR) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All claims confirmed from official Cursor case study -->
  <!-- Sources: https://cursor.com/blog/nab -->
- 6,000 developers standardized on Cursor, expanding to 10,000 employees
- Previously used Amazon Q and GitHub Copilot
- Legacy codebase modernizations running 3x faster than expected
- Monolith to microservices: 2 months vs 6 months (3x improvement)
- Mainframe migrations from Assembly
- Greenfield projects: 3 weeks vs 4 months
- Built internal context engineering library (NAB CEL)

### Cursor: App Stability Improvements <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All metrics confirmed from official Cursor engineering blog -->
  <!-- Sources: https://cursor.com/blog/app-stability -->
- OOM-per-session rate down 80% since late-February peak
- OOM-per-request rate down 73% since March 1
- Telemetry-driven crash observability
- Top-down and bottom-up debugging strategies
- Upstream patches to Electron


### Codex CLI v0.122.0 Stable Release (MAJOR) <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- Note: Release date April 20, 2026 found in sources, but detailed feature list not visible in fetched release notes. Additional verification needed for specific features. -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- Released April 20, 2026
- Standalone installer improvements
- TUI side conversations for quick questions
- Plan Mode can start implementation in fresh context
- Plugin workflow enhancements (tabbed browsing, inline toggles, local marketplaces)
- Filesystem permissions: deny-read glob policies, platform sandbox enforcement, isolated exec runs
- Tool discovery and image generation enabled by default
- Security hardening (logout revokes tokens, workspace trust for hooks/policies)

### Codex CLI v0.123.0-alpha Active Development <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- Multiple alpha releases confirmed on April 21-22, 2026 -->
  <!-- Sources: https://github.com/openai/codex/releases -->
- 6 alpha releases in 36 hours (April 21-22, 2026)
- Follows pattern: v0.122.0-alpha (8 releases in 4 days) → v0.122.0 stable → v0.123.0-alpha cycle
- No visible release notes for alpha versions

### Crush CLI v0.61.1 Release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All features confirmed from official GitHub release notes -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- Released April 21, 2026
- More reliable skills (system prompt changes)
- Light theme fixes (dark text on dark background)
- iTerm2 progress bar restored
- Apple Terminal clipboard fix for OAuth

### Kilo v7.2.11 Pre-release <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-23 -->
  <!-- All features confirmed from GitHub releases and official blog -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases, https://blog.kilo.ai/p/new-vs-code-week-two -->
- Released April 21, 2026
- Fork Agent Manager sessions from specific user message
- Fork sidebar conversations from any user message
- Prewarm autocomplete backend for instant inline completions
- Extensive bug fixes (autocomplete, custom providers, Agent Manager, VS Code extension)

---

## Cursor CLI

---

## Cursor CLI

### Product Releases & Timeline
- Cursor 3.0 launched on April 2, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://cursor.com/blog/cursor-3, https://www.buildfastwithai.com/blogs/cursor-3-vs-antigravity-ai-ide-2026 -->
- Bugbot Learned Rules & MCP Support announced April 8, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://cursor.com/changelog/04-08-26, https://releasebot.io/updates/cursor -->
- Remote Agents announced April 8, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://www.buildfastwithai.com/blogs/cursor-remote-agents-any-device-2026, https://cursor.com/changelog/04-08-26 -->
- Self-Hosted Cloud Agents released March 25, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://cursor.com/changelog/03-25-26, https://getaibook.com/news/cursor-self-hosted-cloud-agents-now-keep-code-in-network -->
- New Plugins (30+) added March 11, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://cursor.com/changelog/03-11-26, https://cursor.com/blog/new-plugins -->
- Cursor 3.1 with Canvases released April 15, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-17 -->
  <!-- Sources: https://cursor.com/changelog -->

### Features & Capabilities
- Cursor 3.0 introduced Agents Window replacing Composer pane
- Agents Window can run multiple AI agents simultaneously in parallel
- Supports local, worktree, cloud, and remote SSH environments
- Design Mode enables direct UI element annotation (Cmd+Shift+D)
- Built-in Git for staging, committing, and PR creation
- `/worktree` command for isolated Git worktrees
- `/best-of-n` command for running prompts across multiple models
- Cloud and local agent handoff capability
- Self-hosted cloud agents keep code/build outputs/secrets on internal machines
- Bugbot learns from PR feedback to create learned rules
- Bugbot supports MCP servers for additional context
- Remote agents: run Cursor on any machine and control from anywhere
- Over 30 new marketplace plugins including Atlassian, Datadog, GitLab, Glean, Hugging Face, monday.com, PlanetScale
- **Canvases** (3.1): Interactive visualizations with dashboards, tables, boxes, diagrams, charts
- **Tiled Layout** (3.1): Split view into panes for parallel agents, multi-task, compare outputs
- **Upgraded Voice Input** (3.1): More reliable dictation, Ctrl+M to speak, waveform/timer UI controls
- **Branch Selection** (3.1): Search and select branch before launching cloud agent
- **Diff to File Navigation** (3.1): Jump from diff to exact line in file
- **File Search Filters** (3.1): Include/exclude filters for code search scoping

### Pricing (April 2026)
- Hobby: Free
- Pro: $20/month ($16 annual) <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Note: Exact pricing details not clearly visible on pricing page. Complex credit pool system exists. $20/month figure needs additional verification. -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://cursor.com/pricing -->
- Pro+: $60/month <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://deploybase.ai/articles/cursor-pricing -->
- Ultra: $200/month <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://deploybase.ai/articles/cursor-pricing -->
- Teams: $40/user/month <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://deploybase.ai/articles/cursor-pricing -->
- Enterprise: Custom pricing
- Credit system: monthly pool equal to plan price
- $20 Pro pool ≈ 200-250 Sonnet requests

### Integrations & Platforms
- Cloud agents integrate with Slack, GitHub, Linear, mobile devices, web
- Supports agent skills via SKILL.md files
- Marketplace plugins contain MCP servers

---

## Kilo CLI

### Product Releases & Timeline
- Kilo v7.2.10 released April 18, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-19 -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases, https://blog.kilo.ai/p/new-vs-code-week-two -->
- Kilo v7.2.7 released April 15, 2026 (GPT-5 support, CLI documentation)
- No new releases April 19-20, 2026
- Automated skills release April 8, 2026 (dbt-fusion-upgrade enhancements)
- Patch-based skill management system April 2, 2026
- Kilo CLI 1.0 announced <!-- FACT_CHECK: VERIFIED -->
  <!-- Date confirmed: Kilo CLI 1.0 unveiled as major architectural shift -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://venturebeat.com/orchestration/kilo-cli-1-0-brings-open-source-vibe-coding-to-your-terminal-with-support, https://www.dera.ai/en/news/f2b79738-eccf-5470-173c-84a592d14bf9 -->

### Features & Capabilities
- Built on OpenCode (MIT-licensed)
- Multi-interface design: HTTP server + JavaScript SDK + SSE streaming
- VS Code extension shares same engine as CLI
- Formal marketplace with Skills, MCP Servers, and Modes
- 40+ skills available across data engineering, frontend, productivity, and specialized domains
- Patch-based skill management system for tracking local modifications
- dbt-fusion-upgrade skill includes dbt-autofix tool reference
- Skills follow interoperable Agent Skills specification
- **v7.2.10 New Features (April 18, 2026)**:
  - `/sessions` command: Browse and resume sessions from Agent Manager
  - `@` folder mentions: Reference folders in prompts including top-level contents
  - Everything mode: Session-scoped/global permission toggle for fully trusted agents
  - Local Recall: Agents can search/read past sessions from sibling worktrees
  - `@terminal` mention support: Reference terminal output directly in chat
  - Run Scripts: Execute `.kilo/run-script` from Agent Manager worktrees
  - Custom commit message prompts: Override system prompt for AI commits
  - Agent Manager sections: Organize worktrees into custom groups
  - Agent Manager PR sync: PR status with approved badge checkmarks
  - Contribute on GitHub CTA: Easy link to propose skills/modes/MCP servers
- **v7.2.10 Upstream Integration (21 OpenCode versions: v1.2.25 → v1.4.3)**:
  - AI SDK v6 support with improved provider compatibility
  - New AI providers: Venice AI and Poe
  - Event-sourced session sync for reliable state
  - Full HTTP proxy support
  - OTLP observability export
  - Vertex Anthropic prompt caching
  - First-class PowerShell support on Windows
  - Windows stability fixes (terminal, paths, processes)
- **v7.2.10 Major Bug Fixes**:
  - Fixed Windows memory leak (kilo serve growing to GBs)
  - Fixed rate limiting sessions getting stuck
  - Fixed Plan mode writing outside plan directory
  - Fixed configuration resilience (skips broken configs instead of crashing)
  - Fixed "assistant prefill" errors
  - Fixed sidebar diff viewer rendering
  - Fixed session switching performance
  - Fixed per-agent model selection persistence
  - Added MCP tool call inputs/outputs display
  - Added network resilience (pause on failure, auto-resume)

### Marketplace Ecosystem
- GitHub repository: https://github.com/Kilo-Org/kilo-marketplace/
- Apache 2.0 licensed
- Active CI/CD-driven workflow with automated releases
- **Prerelease Channel** (v7.2.10): Faster iteration, user feedback shapes stable releases
- **Community Contributors** (v7.2.10 cycle): 188 PRs merged, 20+ external contributors

### CLI Enhancements (v7.2.10)
- `kilo help --all`: Full CLI reference in markdown or text
- Auto-generated CLI reference docs from `help.ts`
- `kilo config check`: Diagnose configuration issues
- Fuzzy model search with provider and acronym matching
- Token usage breakdown visible in TUI sidebar
- `@` file mentions prioritize open tabs and active editor
- Subagents cannot spawn additional subagents (safety restriction)

---

## Crush (formerly OpenCode)

### Product Relaunch (April 2026)
- OpenCode renamed to Crush <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://github.com/charmbracelet/crush/discussions/360, https://thenewstack.io/terminal-user-interfaces-review-of-crush-ex-opencode-al/ -->
- Migrated to Charmbracelet organization <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://github.com/charmbracelet/crush/discussions/360, https://thenewstack.io/terminal-user-interfaces-review-of-crush-ex-opencode-al/ -->
- Original creator: Kujtim Hoxha (kujtimiihoxha)
- Original repository: Pyasapanchi/opencodecli
- New repository: charmbracelet/crush
- Website: https://charm.sh/crush
- License: Apache-2.0 maintained
- Language: Go maintained

### Product Releases & Timeline
- v0.60.0 released April 17, 2026 (OpenAI-compatible endpoint for Hyper) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- v0.59.0 released April 16, 2026 (Skills sidebar, built-in jq, performance fixes)
- v0.58.0 released April 15, 2026 (Small patch fixes)
- v0.57.0 released April 13, 2026 (Session hardening, token savings)
- Pre-release April 19, 2026: Hyper provider OpenAI-compatible endpoint

### Platform Support
- macOS
- Linux
- Windows (PowerShell and WSL)
- Android
- FreeBSD
- OpenBSD
- NetBSD

### Installation Methods
- Homebrew: `brew install charmbracelet/tap/crush`
- NPM: `npm install -g @charmland/crush`
- Arch Linux: `yay -S crush-bin`
- Nix: Multiple options including NUR integration
- FreeBSD: `pkg install crush`
- Windows: `winget install charmbracelet.crush` or `scoop install crush`
- Go: `go install github.com/charmbracelet/crush@latest`
- Debian/Ubuntu: APT repository setup
- Fedora/RHEL: YUM repository setup

### Provider Support (75+ providers) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: OpenCode documentation states 75+ LLM providers, not 15+ -->
  <!-- Verified: 2026-04-14 -->
  <!-- Sources: https://opencode.ai/docs/providers/, https://open-code.ai/en/docs/models -->
- ANTHROPIC_API_KEY (Anthropic)
- OPENAI_API_KEY (OpenAI)
- VERCEL_API_KEY (Vercel AI Gateway)
- GEMINI_API_KEY (Google Gemini)
- SYNTHETIC_API_KEY (Synthetic)
- ZAI_API_KEY (Z.ai)
- MINIMAX_API_KEY (MiniMax)
- HF_TOKEN (Hugging Face Inference)
- CEREBRAS_API_KEY (Cerebras)
- OPENROUTER_API_KEY (OpenRouter)
- IONET_API_KEY (io.net)
- GROQ_API_KEY (Groq)
- AVIAN_API_KEY (Avian)
- VERTEXAI_PROJECT (Google Cloud VertexAI)
- VERTEXAI_LOCATION (Google Cloud VertexAI)
- AWS_ACCESS_KEY_ID (Amazon Bedrock)
- AWS_SECRET_ACCESS_KEY (Amazon Bedrock)
- AWS_REGION (Amazon Bedrock)
- AWS_PROFILE (Amazon Bedrock)
- AWS_BEARER_TOKEN_BEDROCK (Amazon Bedrock)
- AZURE_OPENAI_API_ENDPOINT (Azure OpenAI)
- AZURE_OPENAI_API_KEY (Azure OpenAI)
- AZURE_OPENAI_API_VERSION (Azure OpenAI)

### Features & Capabilities
- Catwalk: Community-supported model registry at https://github.com/charmbracelet/catwalk
- Agent Skills standard support (agentskills.io)
- Skill discovery paths: global (.config/agents/skills, .config/crush/skills) and project (.agents/skills, .crush/skills, .claude/skills, .cursor/skills)
- Built-in crush-config skill for self-configuration
- **Skills sidebar**: Visual skill discovery in sidebar (v0.59.0, April 16) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- **Built-in jq**: JSON querying capability with jq skill included (v0.59.0, April 16) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- **Hyper provider**: OpenAI-compatible endpoint support (v0.60.0, April 17) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- MCP Support: stdio, http, SSE transport types
- Custom provider configuration (openai, openai-compat, anthropic types)
- Attribution configuration (co-authored-by, assisted-by, none)
- Desktop notifications for permission requests and agent completion
- .crushignore support
- Custom initialization file names (default: AGENTS.md)
- Enhanced permissions: allowed_tools, disabled_tools, disabled_skills, yolo mode
- LSP configuration with custom arguments and environment variables
- Multi-model support with flexible model switching
- Session-based workflow with multiple contexts per project
- LSP-enhanced code intelligence
- TUI (Terminal User Interface)
- Built-in tools (bash, edit, read, grep, etc.)
- Auto-compact feature for context management
- **Token savings**: CRUSH_SHORT_TOOL_DESCRIPTIONS flag reduces tool descriptions by ~98% (~120K tokens/session saved) (v0.57.0, April 13) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- **Session hardening**: Prevent malformed image data corruption, prevent tool calls during streaming (v0.57.0, April 13) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- **Performance fixes**: CPU spike with wide-characters fixed (v0.59.0, April 16) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->
- **Rio Terminal**: Progress bar support enabled (v0.59.0, April 16) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/charmbracelet/crush/releases -->

### Charm Ecosystem Credentials
- Charm technology lives in over 25,000 applications
- Bubble Tea: 41.5k GitHub stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Actual: 41,511 stars as of 2026-04-13 -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://api.github.com/repos/charmbracelet/bubbletea -->
- Gum: 23.3k GitHub stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Actual: 23,330 stars as of 2026-04-13 -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://api.github.com/repos/charmbracelet/gum -->
- Glow: 24.3k GitHub stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Actual: 24,345 stars as of 2026-04-13 -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://api.github.com/repos/charmbracelet/glow -->
- VHS: 19.3k GitHub stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Actual: 19,366 stars as of 2026-04-16 -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://api.github.com/repos/charmbracelet/vhs -->
- Lipgloss: 11k GitHub stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Actual: 11,057 stars as of 2026-04-16 -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://api.github.com/repos/charmbracelet/lipgloss -->

---

## Codex CLI

### Product Releases & Timeline
- Codex CLI v0.121.0 released April 15, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-17 -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->
- Codex CLI v0.122.0-alpha active development (April 16-19, 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://github.com/openai/codex/releases -->
  - 8 alpha releases in 4 days
  - 4 alpha releases on April 19 alone
  - High velocity suggests significant upcoming stable release
- Major Desktop Update April 16, 2026: Computer use, memory, image generation <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-17 -->
  <!-- Sources: https://www.macrumors.com/2026/04/16/openai-codex-mac-update/ -->

### Repository & Installation
- GitHub repository: https://github.com/openai/codex
- Installation via npm: `npm install -g @openai/codex`
- Installation via Homebrew: `brew install --cask codex`
- Apache-2.0 licensed
- Binary releases for macOS (Apple Silicon, x86_64) and Linux (x86_64, arm64)

### Architecture & Features
- Rust implementation
- GPT-5-Codex optimization
- Classic agent loop implementation
- Compaction system for multi-hour sessions
- Prompt caching (with brittleness issues)
- Zero Data Retention (ZDR) with encrypted content
- Cloud task integration via `codex cloud exec`
- Agent Skills system (SKILL.md)
- Local model support via `--oss` flag (connects to Ollama/LM Studio)

### v0.121.0 New Features (April 15, 2026)
- **Marketplace Add**: Install from GitHub, git URLs, local directories, marketplace.json URLs
- **TUI Improvements**: Ctrl+R reverse search, local recall for accepted slash commands
- **Memory Controls**: TUI and app-server controls for memory mode, reset, deletion, cleanup
- **Expanded MCP Support**: MCP Apps tool calls, namespaced MCP registration, parallel-call opt-in, sandbox-state metadata
- **API Enhancements**: Realtime API for output modality, transcript completion events, raw turn item injection, symlink-aware filesystem metadata
- **Security**: Secure devcontainer profile with bubblewrap support, macOS sandbox allowlists for Unix sockets
- **Supply Chain Hardening**: Pinned GitHub Actions, cargo installs, git dependencies, V8 checksums

### Desktop App Updates (April 16, 2026)
- **Computer Use**: Operate macOS apps by seeing, clicking, typing; runs multiple agents in parallel
- **Memory**: Remembers preferences, recurring workflows, tech stacks, personal workflow information
- **Automation**: Resume work after pause, schedule future work, work across days/weeks, thread automations
- **In-App Browser**: Open local/public pages, comment directly on rendered page, address page-level feedback
- **Image Generation**: Uses gpt-image-1.5 for product concepts and mockups
- **Plugin Ecosystem**: 90+ new plugins combining skills, app integrations, and MCP servers
- **GitHub Integration**: Inspect PRs in sidebar, review comments in diff, ask Codex to explain/make changes
- **Artifact Viewer**: Preview generated files (PDFs, spreadsheets, documents, presentations)
- **Other Features**: Multiple terminal tabs, SSH remote connections (alpha), macOS menu bar/Windows system tray, multi-window support, Intel Mac support

### Regional Limitations
- Computer use: Not available in EU, UK, or Switzerland at launch
- Personalization features: Not yet available to Enterprise, Education, EU, UK users
- Gradual rollout to Codex desktop users signed in with ChatGPT

---

## Droid CLI (Factory AI)

### Series C Funding (April 2026) - MAJOR
- $150M Series C funding round announced <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://factory.ai/news/series-c -->
- Led by Khosla Ventures with participation from Sequoia Capital, Blackstone, Insight Partners, Evantic Capital, 20VC, NEA, Mantis VC
- $1.5B valuation
- Purpose: Accelerate investment in research, product, and global go-to-market

### Key Metrics
- Hundreds of thousands of daily developers
- Revenue doubled month-over-month for each of past 6 months
- Enterprise customers: Nvidia, Adobe, EY, Palo Alto Networks, Adyen

### Product Evolution
- From software development agents to full-spectrum autonomous systems
- Missions: Long-horizon, multi-step, multi-agent workflows tackling weeks of work
- Factory Desktop: Native interface with full system access and local context
- Any model, any interface, every stage of development

### Next Platform Focus
- Optimized model routing and cost control
- Always-on agents
- Advanced enterprise-grade governance
- Real measurement of agent readiness and effectiveness at scale

### Performance Benchmarks
- #1 on Terminal-Bench with 58.75% score (using Opus 4.1) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://factory.ai/news/terminal-bench -->
- Outperforms Codex CLI with GPT-5 (52.5% vs 42.8%) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://factory.ai/news/terminal-bench -->

### Legacy-Bench (NEW - April 1, 2026)
- New benchmark for legacy code maintenance (COBOL, Fortran, Java 7, BASIC, C, Assembly) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-20 -->
  <!-- Sources: https://factory.ai/news/legacy-bench -->
- Overall pass rates: 16.9% to 42.5% across 12 model-agent combinations
- Same frontier models score >70% on Terminal-Bench 2 and SWE-bench Verified
- COBOL is most challenging: 31 of 44 unsolved tasks are COBOL
- Java 7 performs best due to visible stack traces
- Bug fixing > 2x > Implementation > 2x > Migration
- GPT-5.3-Codex leads overall (42.5%)
- Droid consistently outperforms provider agents on same model
- GitHub: https://github.com/factory-ai/legacy-bench

### Features & Capabilities
- Multi-model subscription (Anthropic + OpenAI in one plan) <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Unable to verify with 2 independent sources. Documentation shows support for both Anthropic and OpenAI models, but subscription pricing details not confirmed. -->
- Specialized droids: Code, Knowledge, Reliability, Product
- Tiered autonomy: Default (read-only) → auto low/medium/high
- 40+ pre-configured MCP servers <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://docs.factory.ai/cli/configuration/mcp -->
- Multi-interface: CLI, IDE, Web, Slack, Linear <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Sources: https://factory.ai/, https://github.com/bradAGI/awesome-cli-coding-agents -->
- Massively parallel execution (hundreds of agents)
- Enterprise integration: Jira, Linear, Notion, audit logging, compliance

### Tool Categories
- Read-only tools: read, ls, grep, glob
- Edit tools: create, edit, apply_patch
- Execute tools: shell
- Web tools: websearch, fetchurl
- MCP tools: Dynamic MCP servers with automatic OAuth flows

---

## Pi CLI

### Identification & Installation
- CLI command: `pi`
- Installation: `npm install -g @mariozechner/pi-coding-agent`
- Author: mariozechner (Mario Zechner, game developer)
- Model format: claude-sonnet-4-20250514, gpt-4.1
- Full agentic support (tools execute without confirmation)
- Fallback priority in roborev: 10th
- GitHub repository attempted (404 error): https://github.com/mariozechner/pi-coding-agent <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-16 -->
  <!-- Repository does not exist (404 error confirmed) -->

---

## Google Android CLI (NEW - April 16, 2026)

### Product Announcement
- **Launch Date**: April 16, 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-04-17 -->
  <!-- Sources: https://siliconangle.com/2026/04/16/google-introduces-new-agentic-ai-ready-tools-resources-android-developers/ -->
- **Significance**: Major tech company (Google) officially entering agentic CLI space

### Core Components

#### 1. Android CLI (Revitalized for AI Agents)
- **Purpose**: Lightweight way for developers to interact with AI coding agents
- **Design**: Text-based, keyboard-driven interface optimized for LLM workflows
- **Key Commands**:
  - `android sdk install`: Download specific SDK components
  - `android create`: Generate new projects from official templates
  - Rapid virtual device creation
- **Performance Claims**:
  - 70% reduction in tokens compared to standard toolsets
  - Tasks completed 3x faster
  - Optimizations specifically for LLM workflows

#### 2. Android Skills Repository
- **Location**: GitHub repository (public)
- **Format**: Modular, markdown-based instruction sets
- **Standard**: Follows SKILL.md format with accompanying metadata
- **Purpose**: Provide rigorous, actionable instructions for AI agents
- **Content**: Technical specifications for tasks designed to trigger automatically
- **Initial Skills Included**:
  - Navigation 3 support
  - Android Grade Plugin 9
  - XML-to-Compose conversion
  - R8 config analysis
  - Common Android development workflows
  - Edge cases and best practices

#### 3. Android Knowledge Base
- **Access**: `android docs` command and latest Android Studio
- **Purpose**: Specialized data source for coding agents
- **Features**:
  - Quick search and fetch of latest authoritative developer guidelines
  - Constantly updated with recent information
  - Grounds agent responses in current best practices
  - Addresses LLM training cutoff date limitations
  - Prevents bad code from outdated knowledge

### Industry Significance
- **Major Tech Entry**: Google's official entry validates agentic CLI as mainstream technology
- **SKILL.md Standard**: Adoption confirms SKILL.md as industry-wide standard for agent skills
- **Agent-Specific Design**: Tool built specifically for AI agents, not just adapted for them
- **Performance Focus**: 70% token reduction demonstrates aggressive cost optimization
- **Mobile Development Focus**: First major agentic CLI specifically targeting mobile development
- **Ecosystem Integration**: Tightly integrated with Android Studio and official Android developer tooling

---

## Market Research (April 2026)

### JetBrains Research Findings
- Source: JetBrains Research (April 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- All statistics confirmed from official JetBrains Research blog -->
  <!-- Verified: 2026-04-13 -->
  <!-- Sources: https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/ -->
- Survey date: January 2026
- Sample size: 10,000
- 90% of developers use AI tools at work
- 74% adopted specialized AI tools
- Claude Code growing fastest (6x since April-June 2025)
- Performance over platform trend confirmed
- GitHub Copilot growth stalled despite ecosystem advantage

---

## Notes

- Research conducted via web search and web_fetch tools
- Some searches limited by DuckDuckGo rate limiting and bot detection
- GitHub rate limiting encountered in some research sessions
- Last check performed: April 18, 2026 at 23:00 UTC (April 19, 01:00 CEST)

---

## Industry Trends & Competitive Analysis (April 2026)

### Key Developments
1. **Google Enters Agentic CLI Space**: Android CLI with Skills repository and Knowledge Base (April 16, 2026)
2. **GPT-5.3-Codex Announced**: Most capable agentic coding model to date (April 18, 2026)
3. **Market Maturity Reports**: Three major research reports show 90% developer adoption (April 18, 2026)
4. **Codex Expansion**: Computer use, memory, automation capabilities (April 16, 2026)
5. **Cursor Agent-First**: IDE redesign around agents (3.0) and visualizations (3.1)
6. **SKILL.md Standardization**: Universal adoption across Cursor, Kilo, Crush, Google

### Emerging Capabilities
1. **Visual Agents**: Cursor Canvases, Codex in-app browser
2. **Desktop Automation**: Codex computer use on macOS
3. **Persistent Memory**: Codex memory, Cursor snapshots
4. **Multi-Modal**: Codex image generation, vision for desktop control
5. **Parallel Execution**: All major tools support multiple agents simultaneously

### Competitive Positioning
- **Cursor**: Leading agent-first IDE redesign, strong visualization capabilities
- **Codex**: Rapid expansion beyond pure coding into general productivity
- **Kilo**: Open-source cross-platform core with shared engine
- **Google Android CLI**: New entrant with mobile focus and performance claims
- **Crush**: Mature, stable with extensive provider support (75+)
- **Droid**: Performance leader on Terminal-Bench
- **Pi**: Smaller project, less active development

### Performance Claims
- **Google Android CLI**: 70% token reduction, 3x faster task completion
- **GPT-5.3-Codex**: New industry high on SWE-Bench Pro and Terminal-Bench 2.0, 25% faster
- **Claude Code**: 80.8% SWE-bench Verified (Opus 4.6), 135K/day GitHub commits

<!-- FACT_CHECK_PARTIAL: 2026-04-22 - These metrics are cited in JetBrains research but have not been independently verified against primary sources. SWE-bench Verified score should be cross-referenced with official leaderboard. GitHub commit statistic methodology unclear. -->
- **OpenCode**: 95K+ GitHub stars (fastest-growing OSS agent)

<!-- FACT_CHECK_ERROR: 2026-04-22 - Repository https://github.com/open-code-ai/cli returns 404 Not Found. This statistic may be incorrect or refer to a different tool. Needs verification with correct repository URL. -->
- **Droid**: #1 on Terminal-Bench (58.75% with Opus 4.1)
- **Codex**: 3M+ weekly active users (March 2026)
- **Charm Ecosystem**: Bubble Tea (41.5k stars), Gum (23.3k stars), Glow (24.3k stars)
- **Multi-Tool Usage**: 70% of developers use 2-4 AI coding tools simultaneously

## 2026-05-23

### Claude Code v2.1.149 (May 22) — Usage Breakdown, Scrollable Diff, GFM Checkboxes <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Claude Code changelog -->
  <!-- Sources: https://code.claude.com/docs/en/changelog -->

- `/usage` now shows per-category breakdown — skills, subagents, plugins, per-MCP-server cost
- `/diff` detail view now scrollable with keyboard (arrows, `j`/`k`, `PgUp`/`PgDn`, `Space`, `Home`/`End`)
- Markdown output now renders GFM task list checkboxes (`- [ ] todo` / `- [x] done`) instead of plain bullets
- Enterprise: `allowAllClaudeAiMcps` managed setting to load claude.ai cloud MCP connectors alongside `managed-mcp.json`
- Security fixes: PowerShell permission bypass (built-in `cd` functions changing directory undetected), sandbox write allowlist in git worktrees, PowerShell prefix/wildcard allow rules, permission-analysis gap for stale `PWD`/`OLDPWD`/`DIRSTACK`
- Fixed `find` exhausting macOS system file/vnode table on large directory trees
- Fixed `otelHeadersHelper` failing silently when script path contains spaces

### Claude Code v2.1.148 (May 22) — Hotfix <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Claude Code changelog -->
  <!-- Sources: https://code.claude.com/docs/en/changelog -->

- Fixed Bash tool returning exit code 127 on every command (regression in 2.1.147)

### Cline CLI v3.0.12 (May 22) — Loading Dialog, Inline Questions, Manual Update <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Cline GitHub releases -->
  <!-- Sources: https://github.com/cline/cline/releases -->

- Show loading dialog while config screen switches provider or model
- Render ask question tool prompt inline with conversation instead of separate modal
- Allow manual Cline update runs bypassing release age gate
- Refreshed bundled SDK to 0.0.42, updating model catalog

### Cline CLI v3.0.11 (May 22) — OAuth Fix, Vertex Auth, Tool Names <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Cline GitHub releases -->
  <!-- Sources: https://github.com/cline/cline/releases -->

- Fix ChatGPT OAuth provider regression (max_output_tokens not supported)
- Hide Space toggle hint when row is not toggleable
- Authenticate Vertex Gemini through Google auth when `gcp.projectId` is configured
- Include tool names in tool result content blocks for consistent session history


### Cline CLI v3.0.10 (May 22) — Plugin Install, Poolside Provider, OTEL <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Cline GitHub releases -->
  <!-- Sources: https://github.com/cline/cline/releases -->

- Install plugins from `file://` URLs in addition to npm and git sources
- Show Ollama API key note in TUI settings
- Keep interactive sessions alive when idle or awaiting approval
- Add Poolside as provider, Gemini 3.5 Flash to Gemini provider model list
- Auto-detect Telegram bot username from bot token
- Bake OTEL telemetry variables into CLI at build time

### Cline CLI v3.0.9 (May 20) — Startup Speed, Concurrent Plugin Loading <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Cline GitHub releases -->
  <!-- Sources: https://github.com/cline/cline/releases -->

- Speed up CLI startup with plugins by loading sandboxed plugins concurrently and caching plugin tool descriptors
- Speed up plugin and tool config toggles with optimistic TUI updates
- Restore fuzzy ranking for `@`-mention file picker
- Accept dash-prefixed prompts after `--`
- Route GLM thinking through provider metadata

### Cline CLI v3.0.8 (May 19) — SAP AI Core, AWS Bedrock, Session Fixes <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Cline GitHub releases -->
  <!-- Sources: https://github.com/cline/cline/releases -->

- Add SAP AI Core support for additional hosted models
- Disable MCP Restart Server button when server is toggled off
- Remove Cline Kanban launch modal from VS Code extension startup
- Keep failed plugins visible in config UI with load/setup phase and error details
- Fix AWS Bedrock region and profile detection in CLI onboarding
- Fix inflated token usage counts from AgentRuntime.execute() not resetting usage between calls


### Kilo v7.3.8 (May 22) — VS Code Reconnect Stability <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: Kilo GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

- Prevent VS Code local CLI reconnect flapping while event stream is unavailable
- Clear Agent Manager file diff previews stuck on "Loading diff..." when active diff source stops
- Improve VS Code diff rendering stability across review and chat surfaces

### OpenCode v1.15.1 (May 22) — Diff Viewer GA, Grok OAuth <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: OpenCode changelog -->
  <!-- Sources: https://opencode.ai/changelog -->

- Redesigned diff viewer with file tree and refreshed layout, enabled by default
- Show clearer errors for invalid/unavailable default model, failed skill invocation, installation upgrade failure
- Let MCP OAuth configs set callback port and include configured scopes in client metadata
- Use working Vertex Anthropic endpoints for `us` and `eu` multi-region setups
- Preserve native reasoning continuation metadata across turns
- Session status shown in desktop title bar

### OpenCode v1.15.0 (May 20) — Diff Viewer, Shell Mode, Background Subagents <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: OpenCode changelog -->
  <!-- Sources: https://opencode.ai/changelog -->

- Added diff viewer in TUI for reviewing changes
- Added shell mode to `run` prompt, replaced subagent tabs with on-demand picker
- Added experimental background subagents so tasks keep running while you work
- Added pinned sessions with quick-switch slots in session picker
- Added collapsible thinking view that can be expanded inline
- LiteLLM compatibility update requiring `v1.85.0-rc.2+` for GPT-5 and tool-call behavior
- Added initial desktop tabs support and native app menu on Windows

### Grok Build CLI (xAI) — Early Beta Launch Confirmed <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Sources: https://x.ai/cli | https://www.aimadetools.com/blog/grok-build-complete-guide/ -->

- Launched May 14, 2026 for SuperGrok Heavy subscribers ($299/month, intro $99/month for 6 months)
- Grok 4.3 Heavy model, 2M token context, 8 parallel subagents
- Plan Mode for review before execution, native ACP support
- CLAUDE.md compatibility layer
- Direct competitor to Claude Code and Codex CLI

### Agentic AI Enterprise Adoption Crosses Threshold <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: BERI research -->
  <!-- Sources: https://www.beri.net/article/agentic-ai-enterprise-adoption-q2-2026 -->

- Pilot-to-production conversion jumped from 18% to 31% in Q2 2026
- Three drivers: MCP standardization, 42% cost compression, maturing eval tooling
- $42.6B in agentic AI funding (cumulative)

### Agentic AI Funding Accelerating (May 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Source: New Market Pitch -->
  <!-- Sources: https://newmarketpitch.com/blogs/news/agentic-ai-funding-news -->

- Infrastructure, security, procurement, sales, and workforce platforms attracting fresh capital
- Investors moving beyond generic copilots to AI systems that plan, act, remember, verify


### DeepSeek TUI Viral Growth — 10K Stars <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-23 -->
  <!-- Sources: https://www.revolutioninai.com/2026/05/what-is-deepseek-tui-terminal-coding-agent-2026.html | https://ofox.ai/blog/claude-code-vs-codex-cli-vs-cursor-vs-deepseek-tui-2026/ -->

- Open-source terminal coding agent built on DeepSeek V4 by independent US developer Hunter Bown
- Launched January 19, 2026, hit v0.8.8 across 37 releases
- Crossed 10,000 GitHub stars after Hacker News and r/LocalLLaMA cycle
- Runs up to 16 parallel sub-agents, keyboard-driven terminal interface
- Not an official DeepSeek product

---

---

## 2026-05-01

### Tool Releases & Features

**Codex CLI v0.128.0 (April 30, 2026)**
- Persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls (create, pause, resume, clear)
- Configurable TUI keymaps, plan-mode nudges, action-required terminal titles
- Active-turn `/statusline` and `/title` edits
- Expanded permission profiles with built-in defaults, sandbox CLI profile selection, cwd controls
- Plugin marketplace installation, remote bundle caching, remote uninstall, plugin-bundled hooks
- External agent session import with background imports and imported-session title handling
- MultiAgentV2 configuration with thread caps, wait-time controls, root/subagent hints
- Source: https://developers.openai.com/codex/changelog

**Factory AI Droid v0.113.0 (April 29, 2026)**
- Mission control shortcuts (`g`/`G` keyboard shortcuts) to jump between workers and features list
- Deny-list command explanations - CLI explains why commands were deny-listed
- Force-kill occupied ports
- Readiness hints to guide next steps
- Draft messages - save and resume in-progress chat messages between sessions

**Factory AI Droid v0.112.0 (April 28, 2026)**
- DeepSeek V4 Pro model support
- Resume MCP elicitations after interruption
- Security review skill enabled by default

**Factory AI Droid v0.111.0 (April 28, 2026)**
- Italian translations
- New `interval` loop command for running tasks on an interval
- Refreshed hooks UI
- Mission usage limits handling
- Per-run automation viewer
- Source: https://docs.factory.ai/changelog/release-notes

### Market & Enterprise Trends

**Google Cloud $750M Agentic AI Fund (April 22, 2026)**
- Google Cloud announced $750 million fund at Google Cloud Next 2026
- Targets 120,000-member partner ecosystem
- Focus on agentic AI prototyping, deployment, Gemini proofs-of-concept
- Part of broader enterprise adoption acceleration
- Source: https://www.crn.com/news/ai/2026/google-cloud-next-2026-the-biggest-news-on-gemini-agentic-ai-tpus

**Roo Code Shutdown (May 15, 2026)**
- 2 weeks until Roo Code extension, cloud, and router shutdown
- Migration guides available for Kilo, Cline, and Roomote
- Kilo positioned as primary migration target (15-30 minute migration)
- Community actively discussing alternatives
- Source: https://kilo.ai/articles/roo-to-kilo-migration-guide

## 2026-05-02

### Tool Releases & Features

**Factory AI Droid v0.115.0 (May 1, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-02 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- PDF support for Gemini 3.1 Pro
- GLM-5.1 reasoning added
- Bulk image drag-and-drop in CLI
- PDF uploads in app
- Resilient session resume: automatic model migration when resuming sessions referencing retired models
- Cloud sync hardened against session race conditions
- Multiple bug fixes: terminal tab titles, phantom lines, Mermaid rendering, auth errors, ACP sessions, spinners, Linear delegation, subagent collapse, wiki export, free trial onboarding

**Factory AI Droid v0.114.0 (April 30, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-02 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- BYOM admin toggle: organization admins can enable/disable bring-your-own-machine computers from enterprise settings
- Droid Shield push-scan refinement: now targets only commits not yet on any remote, reducing duplicate scans
- Agent loop continuation when model response has no visible output
- Windows Python execution defaults to UTF-8 environment
- Bash result spacing improved

**Claude Code Leads April 2026 CLI Rankings** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-02 -->
  <!-- Source: TokenCalculator analysis, April 5, 2026 -->
  <!-- Sources: https://tokencalculator.com/blog/best-ai-ide-cli-tools-april-2026-claude-code-wins -->
- Claude Code: undisputed king of CLI-based agentic coding, Opus 4.6 engine
- Codex catching up fast via background agents and GPT-5.2, neck-and-neck for many tasks
- Cursor: best interactive IDE experience with multi-model support
- GitHub Copilot: enterprise safe choice with deep GitHub integration
- Google Antigravity/Gemini CLI: "disappointing" - sparse updates, thin docs, quiet community, classic Google pattern concern
- Windsurf: post-Cognition acquisition stagnation reported

**Opinion: Agentic CLI Tools Killing the GUI (March 31, 2026)** <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: AICC blog, March 31, 2026 -->
  <!-- Sources: https://www.ai.cc/blogs/the-app-is-dead-agentic-cli-killed-gui-2026/ -->
- Editorial argues GUIs are "developer-hostile, agent-hostile, scalability-hostile"
- Claims Claude Code, Gemini CLI, Codex CLI systematically dismantling traditional app model
- Stable unified API cited as key advantage of CLI-based agentic tools
- AI agents navigating GUIs must reverse-engineer screenshots and battle anti-bot measures

**Roo Code Shutdown - 13 Days Remaining (May 15, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-02 -->
  <!-- Sources: https://docs.roocode.com/sunset -->
- Migration paths: Cline (fastest/lowest friction), Kilo (familiar UX), Roomote (paid cloud)
- Active community migration discussions and comparison guides proliferating
- Source: https://docs.roocode.com/sunset

---

## 2026-05-05

### Tool Releases & Features

**Factory AI Droid v0.118.0 (May 4, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-05 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- **Live streaming in the app** - Desktop now streams partial text and thinking updates as a droid works (app)
- **Bulk user limit updates** - Admins can update usage limits for multiple users at once (app)
- **Smarter readiness hints** - Readiness hints now detect more cases where guidance helps before continuing
- **Localized review findings** - Review findings now match your language instead of the source file's language
- **Plus plan rename** - Pro Plus has been renamed to Plus throughout the product
- **Bug fixes**: Paused response recovery improved, system notification color fixed, Slack session link unfurls fixed, Slack persona on replies preserved

**OpenAI Codex CLI Security Incident (April 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-05 -->
  <!-- Confirmed from OpenAI official response -->
  <!-- Sources: https://openai.com/index/axios-developer-tool-compromise/ -->
- OpenAI disclosed certificate compromise incident (Axios developer tool workflow)
- Certificate and notarization material for ChatGPT Desktop, Codex, Codex CLI, and Atlas potentially exposed
- OpenAI's response: certificate rotation, new builds, and revocation scheduled for **May 8, 2026**
- Earliest versions signed with new certificate: ChatGPT Desktop 1.2026.071, Codex App 26.406.40811, Codex CLI 0.119.0
- No evidence of user data access or system compromise
- macOS Gatekeeper will refuse to launch older versions after May 8

### Market & Industry Trends

**Roo Code Officially Sunsetting** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-05 -->
  <!-- Confirmed from Kilo blog post -->
  <!-- Sources: https://blog.kilo.ai/p/thank-you-roo -->
- Kilo blog confirms: "Roo Code is no more" as of announcement date
- Roo team announced archiving repo on May 15 to go all-in on Roomote (cloud agent)
- 3 million installs acknowledged as "hell of a run"
- Kilo positioning: IDE is not over, continuing full speed on VS Code extension
- Migration path: Kilo extension shares codebase ancestry with Roo Code

### Tool Releases & Features

**Factory AI Droid v0.117.0 (May 3, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-04 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- Individual plans grouping with smoother loading states (app)
- Sharper LLM error classification: overloaded and context-length errors now surface as their own error types
- Execute summary now hidden while response is still streaming
- Chat log visual polish
- /missions reminder no longer shows when already in mission session
- Empty template cloud session now works correctly (app)
- Thinking signature recovery improved after interruption

### Market & Industry Trends

**Agentic AI Developer Tools: $2.8B Investment (2026)** <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: youngju.dev blog, March 2026 -->
  <!-- Sources: https://www.youngju.dev/blog/culture/2026-03-17-agentic-ai-developer-tools-2026.en -->
- 1,500 startups in agentic AI developer tools space
- USD 2.8B investment in the sector
- 920% adoption growth rate
- Describes as "foundational transformation, not mere trend"

**Claude Code Pricing Change (April 21, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-04 -->
  <!-- Sources: https://pasqualepillitteri.it/en/news/1211/claude-code-removed-pro-plan-anthropic-april-2026 -->
- Anthropic removed Claude Code from $20 Pro plan on April 21, 2026
- Access now starts at Max 5x ($100/month)
- Anthropic calls it a "2% test on new signups"
- Official docs already updated with new pricing

### Roo Code Migration Update

**Roo Code Shutdown - 11 Days Remaining (May 15, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-04 -->
  <!-- Sources: https://docs.roocode.com/sunset, https://kilo.ai/articles/roo-to-kilo-migration-guide -->
- 3 million developers using Roo Code
- Migration paths actively being used: Cline (fastest), Kilo (familiar UX)
- Kilo positioned as "superset" of Roo with official 15-30 minute migration guide
- 11 days until shutdown - migration deadline approaching

---

## 2026-05-03

### Tool Releases & Features

**Factory AI Droid v0.116.0 (May 2, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-03 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- Runtime-aware Execute tool: tool descriptions adapt to runtime with WSL-specific guidance and expanded bashism detector
- No-report readiness hint: CLI surfaces dynamic hint when a report isn't needed
- Payment method in onboarding: add payment method during final onboarding step (app)
- Bug fixes: lingering prompts after resume corrected, Gemini turn handling scoped to active turn, billing error classification improved (payment-required surfaces as billing error not invalid-request), working directory persistence locked until computer connects, desktop updater downloads after click-to-install

**Claude Code v2.1.126 (May 1, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-03 -->
  <!-- Confirmed from GitHub release and releasebot analysis -->
  <!-- Sources: https://github.com/anthropics/claude-code/releases/tag/v2.1.126 -->
- Project purge command: `claude project purge [path]` deletes all state (transcripts, tasks, file history, config) with --dry-run, -y/--yes, -i/--interactive, --all modes
- /model picker now lists gateway models when ANTHROPIC_BASE_URL points to Anthropic-compatible gateway
- --dangerously-skip-permissions expanded to bypass .claude/, .git/, .vscode/, shell configs (catastrophic removal still prompts as safety net)
- OAuth login accepts pasted code for WSL2/SSH/container environments where browser callback can't reach localhost
- Windows: PowerShell 7 detection improved (Store, MSI without PATH, .NET global tool); PowerShell now primary shell when enabled
- Security fix: allowManagedDomainsOnly/allowManagedReadPathsOnly now enforced even when higher-priority settings lack sandbox block
- Image handling: automatic downscaling on paste, oversized images removed from history with automatic retry
- Auto mode spinner turns red when permission check stalls
- 32 total changes: fixes for stream idle timeout after Mac sleep, OAuth timeout on slow/proxied connections, IPv6-only devcontainers, race condition in concurrent credential writes, Japanese/Korean/Chinese text rendering on Windows in no-flicker mode, Ctrl+L behavior corrected to match readline (screen redraw only), deferred tools available to fork subagents on first turn

### Market & Enterprise

**Google Cloud $750M Agentic AI Partner Fund (April 22, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-03 -->
  <!-- Source: Google Cloud press release -->
  <!-- Sources: https://www.googlecloudpresscorner.com/2026-04-22-Google-Cloud-Commits-750-Million-to-Accelerate-Partners-Agentic-AI-Development -->
- Google Cloud Next 2026 unveiled $750M fund for 120,000-member partner ecosystem
- Focus: agentic AI prototyping/deployment, Gemini Enterprise practice building, AI value assessments, Gemini proofs-of-concept
- Includes Wiz security assessments and usage incentives
- Partners can build agentic solutions using Gemini with financial backing
- Could benefit agentic CLI tools that integrate with Gemini (e.g., Droid's Gemini support)

**Roo Code Migration - 12 Days Remaining (May 15, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-03 -->
  <!-- Sources: https://docs.roocode.com/sunset -->
- Cline remains fastest/lowest friction migration path
- Kilo positioned as familiar UX alternative with official migration guide (15-30 min migration)
- Community actively comparing Cline vs Kilo vs Continue as deadline approaches

---

## 2026-05-06

### Tool Releases & Features

**Factory AI Droid v0.118.1 (May 5, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-06 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- **Custom working directory for sessions** - The public Sessions API now accepts an optional `cwd` field to start computer-backed sessions in a specific directory
- **Clearer working directory errors** - Invalid working directories now fail fast with a structured error instead of silently falling back to the wrong directory

**Cline v3.82.0 (May 1, 2026)** <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-06 -->
  <!-- Confirmed from Releasebot changelog analysis -->
  <!-- Sources: https://raw.githubusercontent.com/cline/cline/refs/heads/main/CHANGELOG.md -->
- **Restored VS Code foreground terminal support** and settings
- **New model support**: Added latest OpenAI, SAP AI Core, and Z AI models
- **Template fixes**: Hook template JSON escaping fixed
- **Improved search**: ripgrep file search error handling improved

### Community & Market Trends

**Kilo CLI 1.0 "Open Source Vibe Coding" Announcement** <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: VentureBeat article -->
  <!-- Sources: https://venturebeat.com/orchestration/kilo-cli-1-0-brings-open-source-vibe-coding-to-your-terminal-with-support -->
- Kilo CLI positioned as "fundamental architectural shift"
- 2025 acknowledged as year senior engineers began taking AI vibe coding seriously
- 2026 predicted to be "defined by the adoption of agents"
- Claims to bring "open source vibe coding to your terminal"

**Reddit Discussion: Top 20 Agentic Coding CLI Tools (May 2026)** <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: r/aiagents subreddit -->
  <!-- Sources: https://www.reddit.com/r/aiagents/comments/1rmh7xc/top_20_agentic_coding_cli_tools_in_2026/ -->
- Community curated list of top 20 agentic coding CLI tools in 2026
- Shows maturing ecosystem with multiple competing tools
- Active engagement indicates healthy community interest

**Roo Code Migration - 9 Days Remaining**
- Migration deadline: May 15, 2026 (9 days from now)
- Cline remains fastest migration path
- Kilo positioned as familiar UX alternative

---

---

---

## 2026-05-19

### xAI Grok Build Beta (May 14, 2026) — New Competitor in Agentic CLI Space <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 -->
  <!-- Confirmed from Basenor and multiple sources -->
  <!-- Sources: https://www.basenor.com/blogs/news/xai-launches-grok-build-beta-agentic-coding-cli-explained -->
- Early beta released May 14, 2026 for SuperGrok Heavy subscribers ($300/month)
- Grok 4.3 beta model with 16-agent Heavy architecture and 2 million token context window
- Can spawn up to 8 concurrent AI agents simultaneously (planning, searching docs, writing code)
- Terminal-native agentic CLI for professional software engineering, app development, workflow automation
- VS Code integration available for GUI-adjacent workflow
- Elon Musk personally pushed for wider beta testing, posted multiple calls for public testers on May 14 (1.5M views within minutes)
- xAI introduced new Grok SuperHeavy subscription tier at $299/month (introductory $99/month for first 6 months — 67% discount)
- Access via build.grok.com; xAI actively soliciting feedback to shape product and model roadmap
- Direct competitor to Claude Code, OpenAI Codex, and other agentic coding tools

### Claude Code v2.1.128 (May 15-16) — Plugin System, Fast Mode, Windows <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 -->
  <!-- Confirmed from GitHub releases -->
  <!-- Sources: https://github.com/anthropics/claude-code/releases -->
- Plugin dependency enforcement: `claude plugin disable` refuses when another plugin depends on target; `claude plugin enable` force-enables transitive dependencies
- Projected context cost (per-turn and per-invocation token estimates) added to `/plugin marketplace` browse pane
- `worktree.bgIsolation: "none"` setting lets background sessions edit working copy directly without EnterWorktree
- PowerShell tool now passes `-ExecutionPolicy Bypass` by default; enabled by default on Windows for Bedrock, Vertex, Foundry users
- Background sessions preserve model and effort level after waking from idle
- Shift+Tab in attached agents now includes auto mode in the cycle
- Fast mode upgraded to Opus 4.7 by default (previously Opus 4.6); pin to 4.6 via `CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1`
- SKILL.md as plugin root: plugins with root-level SKILL.md (no skills/ subdirectory) now surfaced as a skill
- `/plugin details` shows LSP servers a plugin provides
- Multiple Windows fixes: right-click paste, agent view spawning repeated PowerShell processes, NO_COLOR/FORCE_COLOR stripping UI colors
- Fixed daemon not exiting cleanly after binary upgrade (brew upgrade crash-loop fix)
- Fixed background agents crash-looping when Claude-in-Chrome extension connected without shared tab
- Fixed background sessions on macOS getting "Operation not permitted" under ~/Documents, ~/Desktop, ~/Downloads

### Codex CLI v0.131.0 Stable (May 18) — Major Release with Python SDK Redesign <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 -->
  <!-- Confirmed from official Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->
- Richer TUI session controls: data-driven service-tier commands, blended token usage, permissions/approval mode, effective workspace roots, responsive Markdown tables
- @ mentions now search files, directories, plugins, and skills in one picker (backed by app-server plugin metadata)
- Plugin workflows: marketplace CLI commands, version-aware sharing, share checkout, clearer shared-workspace buckets, default-enabled plugin hooks
- Remote workflows: daemon-managed `codex remote-control`, runtime enable/disable APIs, status reads, registry-backed remote environments
- Python SDK moved to `openai-codex / openai_codex` with pinned runtime-generated types, concurrent turn routing, approval modes
- New `codex doctor` command for support-ready diagnostics across runtime, auth, terminal, network, config, local state
- Bug fixes: TUI interaction/rendering, Windows sandbox hardening, managed read restrictions preservation, app-server SQLite safety, Git/auth reliability

### Factory AI Droid v0.128.0 (May 15) — Stale Computer Registrations Fix <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- Sessions now reconcile stale Droid Computer registrations automatically

### Market: Seven-Way Competitive Landscape (May 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 -->
  <!-- Sources: https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/ -->
- Seven serious contenders as of May 2026: Claude Code, Google Antigravity, OpenAI Codex, Cursor, Kiro, GitHub Copilot, Windsurf
- Last 60 days: Cursor Composer 2.5, Claude Code limit doubling (SpaceX/Colossus compute deal), GitHub Copilot flex-billing (June 1), Windsurf bundling Devin Cloud + Devin Terminal CLI, Antigravity MCP + Gemini 3.1 Pro, Kiro parallel Spec task execution (up to 4x faster)
- RAND study: 80-90% of products labeled "AI agent" still chatbot wrappers; the seven tools in comparison are genuine autonomous agents
- Cursor 3 shipped Build in Parallel and Composer 2.5; OpenAI shipped Codex desktop app on Windows

---

## 2026-05-17

### Claude Code v2.1.128 (May 15-16) — Plugin System, Fast Mode, Windows <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-17 -->
  <!-- Confirmed from GitHub releases -->
  <!-- Sources: https://github.com/anthropics/claude-code/releases -->

**New features:**
- **Plugin dependency enforcement** — `claude plugin disable` refuses when another plugin depends on target (shows disable-chain hint); `claude plugin enable` force-enables transitive dependencies
- **Projected context cost** — Per-turn and per-invocation token estimates added to `/plugin marketplace` browse pane
- **worktree.bgIsolation: "none"** — New setting lets background sessions edit working copy directly without EnterWorktree (for repos where worktrees impractical)
- **PowerShell improvements** — Tool now passes `-ExecutionPolicy Bypass` by default; enabled by default on Windows for Bedrock, Vertex, Foundry users
- **Background session persistence** — Model and effort level preserved after waking from idle
- **Shift+Tab in attached agents** — Cycle now includes auto mode
- **Fast mode upgrade** — Now uses Opus 4.7 by default (previously Opus 4.6). Pin to 4.6 via `CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1`
- **SKILL.md as plugin root** — Plugins with root-level SKILL.md (no skills/ subdirectory) now surfaced as a skill
- **Plugin details LSP info** — `/plugin details` shows LSP servers a plugin provides

**Bug fixes:**
- Fixed corrupt .credentials.json with non-array scopes hanging CLI on startup
- Stop hooks block after 8 consecutive blocks (warning issued), then turn ends
- Fixed daemon not exiting cleanly after binary upgrade (brew upgrade crash-loop fix)
- Fixed background agents crash-looping when Claude-in-Chrome extension connected without shared tab
- Fixed background sessions on macOS getting "Operation not permitted" under ~/Documents, ~/Desktop, ~/Downloads
- Fixed `NO_COLOR`/`FORCE_COLOR` stripping Claude Code's own UI colors (now applies to subprocesses only)

### Codex CLI v0.131.0-alpha — Active Development Cycle <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-17 -->
  <!-- Sources: https://github.com/openai/codex/releases -->

- 22+ alpha releases between May 6-15, 2026
- Latest: v0.131.0-alpha.22 (May 15, 23:39 UTC)
- Rapid development cadence suggests significant stable release approaching
- Focus on thread pagination, config hot-reload, remote compaction, Windows fixes

---

## 2026-05-16

### Factory AI Droid v0.126.0 (May 14) — EU Data Residency, Bulk Session Archiving <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-16 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- **EU data residency** — Sessions and LLM inference for EU customers now stay within EU-only data plane (significant for enterprise compliance)
- **Bulk session archiving** — New settings page for managing and bulk-archiving sessions (app)
- **Built-in security review** — `/security-review` skill now bundled with CLI by default
- **Faster Computer restarts** — Sped up restarting Droid Computers (app)
- **Lighter CLI startup** — Reduced redundant requests during startup
- **Bug fixes:** Structured output validation strengthened, token count fixes, Windows installer packaging repaired, MCP servers load when reopening running sessions

### Factory AI Droid v0.125.1 (May 14) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-16 -->
  <!-- Confirmed from official Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->
- Maintenance release with under-the-hood improvements

### Codex CLI v0.130.0 (May 8) — Plugin Sharing, Remote Control <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-16 -->
  <!-- Confirmed from official Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->
- **Plugin sharing** — Exposes link metadata and discoverability controls; share/unshare individual plugins or entire workspaces with source filtering and local share-path tracking
- **codex remote-control** — New top-level command for starting a headless, remotely controllable app-server (simpler entrypoint)
- **Thread pagination** — App-server clients can page large threads with unloaded, summary, or full turn item views
- **Bedrock auth improvement** — Can now use AWS console-login credentials from `aws login` profiles
- **view_image** — Can resolve files through selected environment for multi-environment sessions
- **Bug fixes:** Live app-server threads pick up config changes without restart; turn diffs stay accurate after apply_patch operations; thread summaries, renames, resume, fork paths work better through ThreadStore

### Codex Mobile Integration (May 14) — Work with Codex from ChatGPT Mobile <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-16 -->
  <!-- Confirmed from official Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->
- Connect Codex on Mac to ChatGPT mobile app; same projects, files, credentials, plugins, skills, configuration available from phone
- **Hooks general availability** — Production-ready hooks system
- **Codex access tokens** — For trusted automation (enterprise)
- **Enterprise admin setup** — Guidance documentation

### Kilo v7.2.53 Pre-release (May 15) — Post-Roo Migration Momentum <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-16 -->
  <!-- Confirmed from official GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->
- **Collapsible sidebar in Agent Manager** — Toggle button left of tab title, state persists across reloads/restarts, new sessions auto-reopen
- **Auto-compaction threshold** — Set percentage so long sessions compact before context window fills
- **Syntax highlighting for shell output** — Shiki-powered with labeled "Command"/"Output" sections, per-section copy buttons, "Open in Editor" action
- **Experimental speech-to-text voice input** — Via Kilo Gateway in VS Code prompt fields
- **Sync fixes** — Session timeline, token, context, cost stats stay in sync after restoring checkpoint
- **Terminal tabs in Agent Manager** — View alongside right diff sidebar, send review comments to active terminal
- **Dependency updates:** @kilocode/sdk@7.3.0, @kilocode/kilo-gateway@7.3.0, @opencode-ai/ui@7.2.53

### Roo Code Shutdown — Final Day (May 15, 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-15 -->
  <!-- Sources: https://docs.roocode.com/sunset -->
- All Roo Code products shut down: VS Code extension, Cloud, and Router
- Migration paths: Cline (fastest), Kilo (familiar UX), Roomote (cloud)
- 3 million installs acknowledged as "hell of a run"

---

## 2026-05-18

### Kilo v7.2.54 Pre-release (May 15) — Post-Roo Migration Momentum <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-18 -->
  <!-- Confirmed from official GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->
- Collapsible sidebar in Agent Manager — toggle button left of tab title, state persists across reloads/restarts, new sessions auto-reopen
- Auto-compaction threshold — set percentage so long sessions compact before context window fills
- Syntax highlighting for shell output with Shiki, labeled "Command"/"Output" sections, per-section copy buttons, "Open in Editor" action
- Experimental speech-to-text voice input via Kilo Gateway in VS Code prompt fields
- Session timeline, token, context, cost stats stay in sync after restoring checkpoint
- Dependency updates: @kilocode/sdk@7.3.0, @kilocode/kilo-gateway@7.3.0

### Circle Launches Agent Stack — CLI Tool for Agentic Economy <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-18 -->
  <!-- Source: Circle investor news -->
  <!-- Sources: https://investor.circle.com/news/news-details/2026/Circle-Launches-AI-Infrastructure-to-Power-the-Agentic-Economy/ -->
- Circle (NASDAQ: CRCL) announced Circle Agent Stack with Circle CLI
- Extends open infrastructure for machine economy, agents as autonomous economic actors
- First products designed for agents as autonomous economic actors

### Mayfield Survey: Agentic AI Moved into Production Faster Than Most Enterprise Tech Shifts <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Source: Mayfield CXO Network Survey -->
  <!-- Sources: https://www.mayfield.com/the-agentic-enterprise-in-2026/ -->
- Survey of CXO Network reveals agentic AI adoption accelerating in enterprise
- Agentic AI market funding: $518M+ across 12 deals concentrated in infrastructure and security tooling

### Google I/O 2026 (May 19) — Expected Agentic AI Announcements
- Conference starts May 19, 2026
- Expected: Gemini updates, Android XR, smart glasses, agentic AI features
- Agentic CLI tools integrating with Gemini may benefit

### Claude Code Fast Mode Now Uses Opus 4.7 by Default <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-18 -->
  <!-- Source: GitHub release notes -->
- Fast mode upgraded to use Opus 4.7 by default (previously Opus 4.6)
- Pin to 4.6 via CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1
- Indicates continued performance optimization

### Codex CLI v0.131.0-alpha.22 — Rapid Development (May 15)
- 22+ alpha releases between May 6-15, 2026
- Latest: v0.131.0-alpha.22 (May 15, 23:39 UTC)
- Active development suggests significant stable release approaching

## 2026-05-20

### Claude Code v2.1.149 (May 19) — Session Management, OTEL, Security Fix <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-20 -->
  <!-- Source: GitHub releases page -->
  <!-- Sources: https://github.com/anthropics/claude-code/releases -->

**New features:**
- **`claude agents --json`** — List live Claude sessions as JSON for scripting (tmux-resurrect, status bars, session pickers)
- **OTEL span attributes** — Added `agent_id` and `parent_agent_id` to `claude_code.tool` spans; background subagent spans now nest under dispatching Agent tool span
- **Status line JSON input** — Now includes GitHub repo and PR information when detected
- **Plugin Discover/Browse** — Now shows plugin's commands, agents, skills, hooks, and MCP/LSP servers before installation
- **Agent tab title** — Now shows awaiting-input count so an alt-tabbed window tells when agent needs attention
- **Slash command hover/click** — Fullscreen mode now supports mouse hover and click on suggestion list

**Security fix:**
- **Permission-prompt bypass** — Fixed where bare variable assignments to non-allowlisted environment variables in Bash commands were auto-approved

**Bug fixes:**
- MCP prompt slash commands now show argument names and expected usage on validation errors
- Fixed spinner and elapsed-time display freezing after terminal resize/refocus
- Fixed progressive terminal display corruption in very long sessions
- macOS background sessions no longer crash under Full Disk Access-protected folders
- Fixed /branch failing after entering a worktree or in background sessions
- Resume sessions now keep their original model instead of picking up another session's /model choice

### Google I/O 2026 (May 19-20) — "Firmly in Our Agentic Gemini Era" <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-20 -->
  <!-- Source: Google blog, AP News, Wired -->
  <!-- Sources: https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/ | https://apnews.com/article/google-io-gemini-developers-conference-a984e6756032dc4af260f8fa27e8f4a9 -->

- **Gemini Omni** — New model that can create anything from any input, starting with video; described as "leap forward in world understanding, multimodality and editing"
- **Gemini 3.5 Flash** — First in new family combining frontier intelligence with action
- **Google Antigravity** — Agent-first development platform moved beyond AI tools that just help write to agents that help you act; "now anyone can be a builder"
- **Gemini Spark** — New AI agent, described as upcoming product
- **"We are firmly in our agentic Gemini era"** — Sundar Pichai, Google CEO, at I/O
- **Daily Brief** — New feature in Gemini app
- **Universal Cart** — "Truly intelligent shopping cart"
- AI agents across products: Information agents in Search, intelligent eyewear, Ask YouTube
- Smart glasses coming fall 2026

### Mayfield CXO Survey: Agentic AI in Production — Fastest Enterprise Shift in 5+ Years <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-20 -->
  <!-- Source: Mayfield CXO Network 2026 Survey -->
  <!-- Sources: https://www.mayfield.com/the-agentic-enterprise-in-2026/ -->

**Key findings (266 Fortune 50–Global 2000 CIOs, CTOs, CAIOs, CISOs, CDOs):**
- **42% in production**; 72% in production + pilots combined
- Agentic AI moved into production faster than most enterprise tech shifts in last decade
- **Developer productivity** is top-3 priority for 70% of CXOs
- **Self-serve trials** are now part of procurement: 70% want to test before committing
- **Build + buy is default**: 65% mix internal builds with vendor solutions; only ~10% are vendor-only
- **Data readiness** is #1 blocker for 5th year in a row (58% cite it)
- **Security is table stakes** (84% require it), but governance lagging: 60% report early-stage or no formal AI governance framework
- **LOB leaders now have equal/greater buying power than CIOs** (46% vs 38%)
- AI governance outranks cybersecurity as emerging board-level priority
- Early adopters seeing measurable ROI: $15M revenue generated by AI agents, 93% customer inquiry resolution, productivity gains beating expectations

### Google Cloud Commits $750M to Partner Agentic AI Development <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-20 -->
  <!-- Source: Google Cloud press corner -->
  <!-- Sources: https://www.googlecloudpresscorner.com/2026-04-22-Google-Cloud-Commits-750-Million-to-Accelerate-Partners-Agentic-AI-Development -->

- Google Cloud commits $750 million to accelerate partners' agentic AI development
- Fund supports: AI value assessments, Gemini proofs-of-concept, Gemini Enterprise practice building, agentic AI prototyping and deployment, Wiz security assessments, usage incentives

### Grok Build Beta Architecture Deep Dive (May 14 launch, still active) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-20 -->
  <!-- Source: pasqualepillitteri.it analysis -->
  <!-- Sources: https://pasqualepillitteri.it/en/news/2584/grok-build-xai-cli-2026 -->

- **8 parallel sub-agents** with hierarchical planning and structured TUI plan viewer
- **2M token context** — positions against Claude Code's 1M and Codex's 400K-1M
- **Plan mode** — structured graph of sub-tasks, readable in dedicated TUI viewer with state (pending, running, done, blocked)
- **ACP (Agent Client Protocol)** — native support, open standard for agent-to-agent communication
- **Anthropic skill format compatible** — drop ~/.claude/skills/ folder and use without modification
- **MCP servers supported** — discovers, registers, exposes as tools
- Grok 4.3 beta on 16-agent Heavy architecture
- Windows available via WSL (native Windows not yet ready)
- $99/mo intro (first 6 months) / $300/mo regular for SuperGrok Heavy

### Codex CLI v0.131.0 Stable (May 18) — Already in Yesterday's Report <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 (from daily report) -->
  <!-- Source: Official changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->

- Richer TUI session controls, @ mentions unified picker, plugin workflows overhaul, remote daemon-control, Python SDK to openai-codex, codex doctor command

### Kilo v7.2.55 (May 19) — Already in Yesterday's Report <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-19 (from daily report) -->
  <!-- Source: GitHub releases -->
  <!-- Sources: https://github.com/Kilo-Org/kilocode/releases -->

- Collapsible sections in model picker, speech-to-text in Agent Manager inline review, VS Code session transcript export as Markdown


## 2026-05-21

### Google Android CLI 1.0 Stable (May 19) — AI Agent Support <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-21 -->
  <!-- Source: TechCrunch -->
  <!-- Sources: https://techcrunch.com/2026/05/19/agentic-app-coding-gets-an-upgrade-with-googles-release-of-android-cli/ -->

- Google's Android CLI reached stable v1.0, explicitly designed for AI coding agents
- Agents can use `android studio` command to tap into Android Studio capabilities
- Works with Claude Code, Codex, Antigravity, or any preferred coding platform
- Google's move acknowledges many are building Android with non-Google AI agents

### Google Antigravity 2.0 Ecosystem Launched at I/O 2026 <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-21 -->
  <!-- Source: Google blog -->
  <!-- Sources: https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/ -->

- **Antigravity 2.0**: New standalone desktop application as central home for agent orchestration, parallel agents, dynamic subagents, scheduled tasks
- **Antigravity CLI**: New lightweight terminal product — Gemini CLI users encouraged to migrate
- **Antigravity SDK**: Programmatic access to agent harness, optimized for Gemini models
- **Antigravity in Gemini Enterprise**: Connect directly to Google Cloud projects
- **Google AI Ultra**: $100/month with 5X higher Antigravity usage limit (offer expires May 25, 2026)
- Gemini 3.5 Flash: outperforms Gemini 3.1 Pro across benchmarks, runs 4x faster than other frontier models

### Managed Agents in Gemini API (May 19) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-21 -->
  <!-- Source: Google blog -->
  <!-- Sources: https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api -->

- Single API call to spin up agents that reason, use tools, execute code in isolated Linux environment
- Powered by Antigravity agent harness, built on Gemini 3.5 Flash
- Persistent isolated environments: files and state preserved across multi-turn sessions
- Custom agent behaviors via markdown skill files
- Available via Interactions API and Google AI Studio

### Google AI Studio Mobile App (May 19) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-21 -->
  <!-- Source: Google blog -->
  <!-- Sources: https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/ -->

- New mobile app for capturing ideas on the go — working prototype ready by desk arrival
- Pre-registration opened this week

### OpenAI Codex CLI v0.132.0 (May 20) — Python SDK, Auth, Windows <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-21 -->
  <!-- Source: OpenAI Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->

- Python SDK now supports first-class authentication: API key login, ChatGPT browser and device-code flows, account inspection, logout APIs
- Python turn APIs easier for text-only workflows: pass plain string as input, richer TurnResult with collected items, timing, usage data
- `codex exec resume --output-schema`: enforce structured JSON output while keeping session context
- TUI startup faster: terminal capability probes now batched instead of serial checks
- Windows reliability: MSVC release binaries no longer depend on separately installed VC++ runtime DLLs, codex doctor detects npm-managed installs correctly
- Memory summaries now versioned and rebuilt when format is stale

## 2026-05-22

### Claude Code v2.1.147 (May 21) — Workflow Tool, /code-review GA <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Claude Code changelog -->
  <!-- Sources: https://code.claude.com/docs/en/changelog -->

- **Workflow tool** for deterministic multi-agent orchestration — off by default, enable with `CLAUDE_CODE_WORKFLOWS=1`
- Pinned background sessions (`Ctrl+T` in `claude agents`) stay alive when idle, restart in place for updates, shed under memory pressure only after non-pinned sessions
- Renamed `/simplify` to `/code-review` — reports correctness bugs at chosen effort level (e.g., `/code-review high`), pass `--comment` to post as inline GitHub PR comments
- Hardened REPL and Workflow tool sandboxes against prototype-pollution and thenable-based escapes
- Improved auto-updater with retry logic, specific error categories, OS error codes on failure
- Fixed enterprise login restrictions (`forceLoginOrgUUID`, `forceLoginMethod`) not enforced against third-party-provider and API-key sessions

### Claude Code v2.1.145/144 (May 19) — Scripting, Background Sessions <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Claude Code changelog -->
  <!-- Sources: https://code.claude.com/docs/en/changelog -->

- **`claude agents --json`** — List live sessions as JSON for scripting (tmux-resurrect, status bars, session pickers)
- `/plugin` Discover/Browse shows plugin's commands, agents, skills, hooks, MCP/LSP servers before installation
- `/resume` support for background sessions — sessions from `claude --bg` appear alongside interactive ones
- `Stop` and `SubagentStop` hook input now includes `background_tasks` and `session_crons` fields
- Fixed permission-prompt bypass where bare variable assignments to non-allowlisted env vars in Bash were auto-approved

### OpenAI Codex CLI v0.133.0 (May 21) — Goals GA, Better Permissions <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: OpenAI Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->

- **Goals enabled by default**, backed by dedicated storage, track progress across active turns
- Permission profiles gained list APIs, inheritance, managed requirements.toml support, runtime refresh, stronger Windows sandbox integration
- Plugin discovery easier: marketplace-aware list, installed versions, visible marketplace roots, remote collection support
- Extensions observe more lifecycle events: subagent start/stop, tool execution, turn metadata, async approval/turn processing
- `codex remote-control` runs like foreground command, waits for readiness, reports machine status
- Fixed TUI startup choosing wrong working directory when reusing local app-server socket

### OpenAI Codex Appshots (May 21) — "Command-Command" macOS Capture <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Kingy.ai analysis -->
  <!-- Sources: https://kingy.ai/blog/appshots-inside-openai-codexs-new-command-command-trick-for-macos/ -->

- Press both Command keys to send frontmost app window to Codex with screenshot and available text — no copy/paste/describe
- Uses ScreenCaptureKit + Accessibility APIs: captures visible window bitmap + structured text including content beyond viewport
- Default: Appshot starts new thread; if you interacted with a thread in last 60 seconds, Appshot joins that thread
- Consecutive Appshots stack into same thread for multi-capture reasoning
- Stored locally in session file; CLI can resume threads with Appshots but not create new ones
- Privacy concern: removes natural pause for cropping/redacting; can capture text outside current viewport

### OpenAI Codex Goal Mode GA (May 21) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: OpenAI Codex changelog -->
  <!-- Sources: https://developers.openai.com/codex/changelog -->

- Goal mode no longer experimental — available in Codex app, IDE extension, and CLI
- Enables Codex to drive toward specific objectives for hours or even days

### xAI Grok Build CLI — Early Beta (May 2026) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Sources: https://pasqualepillitteri.it/en/news/2584/grok-build-xai-cli-2026 | https://beginnersinai.org/grok-build-cli/ -->

- Terminal coding agent for SuperGrok Heavy subscribers
- Grok 4.3 Heavy model with multi-agent architecture, 2M token context, 8 parallel subagents
- **Plan Mode** — review before execution, structured graph of sub-tasks in dedicated TUI viewer
- Native ACP (Agent Communication Protocol) support for bots and orchestration
- **CLAUDE.md compatibility** — drop ~/.claude/skills/ folder and use without modification
- MCP servers supported — discovers, registers, exposes as tools
- Windows available via WSL (native Windows not yet ready)
- Direct competitor to Claude Code and Codex CLI

### Factory AI Droid v0.128.0 (May 15) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->

- Sessions now reconcile stale Droid Computer registrations automatically

### Factory AI Droid v0.126.0 (May 14) — EU Data Residency, Security Review Bundled <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Factory changelog -->
  <!-- Sources: https://docs.factory.ai/changelog/release-notes -->

- **EU data residency** — Sessions and LLM inference for EU customers now stay within EU-only data plane
- **Bulk session archiving** — New settings page for managing and bulk-archiving sessions
- **`/security-review` skill now bundled with CLI by default**
- Faster Computer restarts, lighter CLI startup, persistent desktop preferences

### Cline CLI v3.9 (May 20) <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Release alert -->
  <!-- Sources: https://releasealert.dev/github/cline/cline -->

- Latest version: cli -v3.9, published May 20, 2026

### Multi-Agent Orchestration: CLI Tools Adding Deterministic Workflows <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Analysis based on research -->

- Claude Code's Workflow tool (opt-in) signals move from ad-hoc multi-agent to structured workflow definitions
- Parallel to Codex's Goal mode GA — both tools now support long-running directed objectives
- xAI Grok Build enters with native parallel subagents from launch
- Ruflo (31k+ GitHub stars, 84.8 score) positioned as most adopted open-source multi-agent platform of 2026

### Privacy Concerns with Desktop AI Capture Features <!-- FACT_CHECK: VERIFIED -->
  <!-- Verified: 2026-05-22 -->
  <!-- Source: Kingy.ai Appshots analysis -->
  <!-- Sources: https://kingy.ai/blog/appshots-inside-openai-codexs-new-command-command-trick-for-macos/ -->

- Codex Appshots raises privacy questions: removes natural cropping/pausing, can capture text outside viewport
- Chronicle (continuous ambient capture) stores unencrypted local Markdown — separate privacy concern
- Enterprise admins lack Appshots-specific disable switch (unlike Computer Use which has feature pins)
- Industry trend: user-invoked, scoped capture (Appshots) vs. background ambient capture (Chronicle)

## 2026-05-28

### Cline CLI v3.0.14 (May 27) — OTEL Telemetry Fix for Production Builds

- Fix OTEL telemetry variable bundling so telemetry is correctly enabled in compiled CLI builds, guarding against environments where `process.env` is undefined and removing optional chaining so bundlers can inline values at build time

**Source:** https://github.com/cline/cline/releases

### Cline v3.0.85 (May 25) — GPT-5.5 for SAP, DeepSeek V4, Gemini 3.5 Flash, Poolside Laguna

- GPT-5.5 support for SAP AI Core; DeepSeek V4 Flash and Pro models added; Gemini 3.5 Flash to both Gemini and Vertex providers; `/lg-task` URI webhook integration for LG dashboard flows; Vertex AI global endpoint handling fix for Claude models; Poolside Laguna models routed through next-gen prompts and native tool calling

**Source:** https://github.com/cline/cline/releases

### OpenAI Codex CLI v0.134.0 (May 26) — Conversation History Search, --profile GA, MCP Per-Server Envs

- **Search across local conversation history**: case-insensitive content matches with result previews — long-awaited findability feature
- **--profile primary**: Made `--profile` the primary profile selector across CLI, TUI permissions, and sandbox flows, with legacy profile configs rejected through migration guidance
- **MCP per-server environments**: Improved MCP setup with per-server environment targeting and OAuth options for streamable HTTP servers
- **Concurrent readOnlyHint execution**: Let read-only MCP tools run concurrently when they advertise `readOnlyHint`
- **Bug fixes**: Windows TUI rendering corruption fixed by restoring virtual terminal mode before drawing; workspace-specific usage-limit messages for credit/spend-cap failures; Node-based tools now honor Codex's managed network proxy environment

**Source:** https://developers.openai.com/codex/changelog

### Factory AI Droid v0.133.1 (May 25) — Context Window Modal, Audio Cues, Sidebar Session Menu

- **Context window**: New `/context` slash command and modal for inspecting the current session's context usage
- **Audio cues**: Optional sounds when a session finishes or is awaiting input (app)
- **Sidebar session menu**: Right-click sessions in the sidebar for quick actions (app)
- **Bug fixes**: Final output stays visible above input box; new session drafts clear after submitting; desktop zoom stability hardened against host zoom errors

**Source:** https://docs.factory.ai/changelog/release-notes

### Factory AI Droid v0.132.0 (May 22) — Deploy to Render, EU Latency Fixes

- **Deploy to Render**: New `/deploy-to-render` skill for one-step Render deployments
- **Security review scope confirmation**: `/security-review` now confirms scope and audit branch before running
- **Faster EU connections**: Reduced connection latency for EU-region users
- **Bug fixes**: Missions running through network reconnects; active mission computer appears on mission control page (app); Windows desktop setup fixed

**Source:** https://docs.factory.ai/changelog/release-notes

### Kilo v7.3.11 (May 26) — Agent Model Override Dropdowns, Voice Auto-Show, Stable Subagent Streaming

- Agent model and variant override dropdowns — select per-task model from UI
- Voice transcription auto-shows when signed in with Kilo provider
- Subagent streaming stays responsive during tool-heavy sessions
- Restore readable diff add/remove highlights across dark and light themes (VS Code)
- Stable Markdown code block streaming while assistant output is still arriving

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Crush (OpenCode) v0.73.0 (May 26) — Bedrock Europe Provider

- Added Bedrock Europe provider using `eu-west-1` region alongside existing `us-east-1`, for European users who need or prefer a European region for compliance
- Bedrock US: `us-east-1` as default
- Bedrock Europe: `eu-west-1` for EU-based deployments

**Source:** https://github.com/charmbracelet/crush/releases

### Agentic AI Market Statistics (Updated May 2026)

- **40% of enterprise applications** expected to include AI agents by 2026 (up from less than 5% in 2025) — Gartner
- **31% of organizations** have at least one agent running in production (up from 19% in Q1 2026, 9% in 2024)
- **22%** of enterprises now use multi-agent (3+) orchestration (up from 6% in 2025)
- **5.1 months**: median payback period for agentic AI deployments
- **$1.4 trillion**: US tech giants' AI infrastructure investment forecast by 2027 (Goldman Sachs) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: This figure refers to capital spending by US tech firms (Goldman Sachs), NOT "AI agent spend forecast" as originally stated -->
  <!-- Original claim misrepresented the source and subject of this statistic -->
  <!-- Verified: 2026-05-28 -->
  <!-- Sources: https://thetechcapital.com/us-tech-giants-to-invest-nearly-1-4-trillion-in-ai-infrastructure-by-2027/ -->
- **79%** of companies report using AI agents in core operations
- Adoption trajectory: from 33% of apps embedding agents (2024) → 80% (Q1 2026) — steepest enterprise software adoption curve since cloud computing 2010-2012
- Supply-side factors: tool-use reliability reached production grade; MCP standardized agent-to-enterprise-data connectivity; institutional memory from abandoned pilots is informing better scoping

---

## 2026-05-30

### Claude Code v2.1.157 (May 29) — Plugin System Overhaul, Auto-Loading Skills

Major plugin ecosystem update:
- Plugins in `.claude/skills` directories are now automatically loaded — no marketplace required
- New `claude plugin init <name>` scaffolds a new plugin in `.claude/skills`
- Autocomplete for `/plugin` arguments now covers subcommands, installed plugin names, and marketplace plugins
- `claude agents`: `agent` field in `settings.json` now honored for dispatched sessions, with `--agent <name>` override
- `EnterWorktree` can now switch between Claude-managed worktrees mid-session
- `tool_decision` telemetry now includes `tool_parameters` (bash commands, MCP/skill names) when `OTEL_LOG_TOOL_DETAILS=1`
- Worktrees managed by Claude are now left unlocked when the agent finishes
- `/terminal-setup` now disables GPU acceleration in VS Code/Cursor/Windsurf integrated terminals

### Claude Code v2.1.156 (May 29) — Opus 4.8 Thinking Block Fix

- Fixed an issue when using Opus 4.8 where thinking blocks were modified, leading to API errors

### OpenAI Codex CLI v26.519 (May 29) — Computer Use on Windows, Remote Control GA

- **Computer use now works on Windows** — Codex can operate Windows desktop apps by seeing, clicking, and typing in the foreground
- **Remote control now supports Windows devices** — start Codex work from ChatGPT on iOS/Android or from a Mac, check progress remotely
- **Profile section** shows profile details, usage stats, and token activity

### Cline CLI v3.0.15 (May 29) — Cline Hub, Global AGENTS Rules, Model Refresh

- **Cline Hub** — web app for monitoring connected clients, viewing/driving sessions, streaming assistant output. Local/LAN/tunnel usage gated by room secret
- **Global AGENTS rules** — agent rules can now be applied across all sessions, not just per-project
- **Model catalog refresh** — Claude Opus 4.8, Moonshot Kimi K2.6, Qwen3.7 Max (with cache support)
- **Steer active connector sessions** across turn keys by matching session ID
- **OAuth URLs now clickable** in the TUI

**Sources:** https://code.claude.com/docs/en/changelog | https://developers.openai.com/codex/changelog | https://github.com/cline/cline/releases

---

**Sources:** https://www.accelirate.com/agentic-ai-statistics-2026/ | https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points

---

## 2026-05-27

### Claude Code v2.1.149–150 (May 22–23, 2026) — `/usage` Breakdown, Security Fixes

Two releases with significant quality-of-life and security work:
- **v2.1.150 (May 23):** Internal infrastructure improvements (no user-facing changes)
- **v2.1.149 (May 22):** `/usage` now shows per-category breakdown of limit drivers (skills, subagents, plugins, per-MCP-server cost); `/diff` detail view keyboard-scrollable; GFM task list checkboxes render in markdown output
- **Enterprise:** Added `allowAllClaudeAiMcps` managed setting for loading claude.ai cloud MCPs alongside `managed-mcp.json`
- **Security fixes:** PowerShell permission bypass (built-in `cd` functions evaded write allowlist); git worktree sandbox coverage fix; PowerShell prefix/wildcard rules not pre-approving native executables; `find` command crash on large directories
- **UX fixes:** `/ultraplan` and remote session creation no longer fail on clean trees; `/code-review` renamed from `/simplify` with correctness-focused effort levels; pinned background sessions (`Ctrl+T`) now survive idle and restart in-place for updates

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.134.0 (May 26, 2026) — Search History, Profile Migration, MCP Environments

Major release with significant UX and infrastructure improvements:
- **Search across conversation history** — case-insensitive content search with result previews, supports finding past contexts across local sessions
- **--profile is now primary** profile selector across CLI, TUI permissions, and sandbox flows; legacy profile configs rejected with migration guidance
- **MCP per-server environments** — explicit environment targeting per server plus OAuth options for streamable HTTP servers
- **Concurrent read-only MCP tools** — tools advertising `readOnlyHint` now run concurrently, reducing sequential wait time
- **Richer extension/hook context** — extension tools receive conversation history; subagent identity included in hook inputs
- **Remote reliability improvements** — exec-server websocket reconnection, remote control retry after auth recovery, compaction v2 stream retry
- **Windows TUI fix** — virtual terminal mode restoration before drawing fixes rendering corruption

**Source:** https://developers.openai.com/codex/changelog

### OpenCode (May 18–23, 2026) — Diff Viewer GA, Grok OAuth, Desktop Tabs, V2 APIs

Rapid iteration continues with notable architectural and feature additions:
- **Diff viewer promoted to GA** (May 22) — redesigned with file tree and refreshed layout; enabled by default; clearer errors for invalid model, skill invocation failure, installation upgrade failure
- **Grok OAuth sign-in** (May 21) — device-code login for Grok integration; PDF attachment support for Grok
- **Desktop tabs** (May 20) — initial tab support; native app menu on Windows; pinch zoom setting; new desktop home view and session entry flow
- **V2 session APIs** (May 18–21) — structured public error schemas (`UnknownError`, `SessionNotFoundError`, `ServiceUnavailableError`); safe error responses with log reference IDs for corrupt stored messages; generic API 500s no longer expose config details
- **Shell mode** added to `run` prompt; subagent tabs replaced with on-demand picker

**Source:** https://opencode.ai/changelog

### Kilo v7.3.11 (May 26, 2026) — Agent Model Overrides, Voice Transcription

- Agent model and variant override dropdowns in UI — select different model per agent or task
- Voice transcription shows automatically when signed in with Kilo provider
- Inline subagent streaming stays responsive during tool-heavy sessions
- Default task subagent model and reasoning effort configurable, safely inheriting calling agent model when override unavailable
- Restore readable diff highlights across dark and light themes

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline SDK Open-Sourced — Benchmark Claims Exceed Claude Code Performance

Cline extracted its internal agent harness into a standalone open-source TypeScript SDK (`@cline/sdk`), rebuilding all products (CLI, VS Code, JetBrains) on top of it. The architectural redesign provides:
- Stateless, portable agent loop — sessions survive UI restarts and move across surfaces
- Layered TypeScript stack: `@cline/shared` (types, schemas, tool helpers) → `@cline/llms` (provider gateway) → `@cline/agents` (browser-compatible agent loop) → `@cline/core` (Node runtime)
- Individual packages installable: use just `@cline/llms` for LLM proxy, or `@cline/agents` for stateless loop in serverless/browser

**Benchmark claims (Cline team, pass@1 as of May 8, 2026):**
- Claude Opus 4.7: Cline CLI 74.2% vs Claude Code published 69.4% (+4.8 pts)
- Claude Opus 4.6: Cline CLI 71.9% vs Claude Code published 65.4% (+6.5 pts)
- Kimin K2.6 (open-weight): Cline 55.1% vs OpenCode 37.1% (+18 pts) and Pi-Code 45.5% (+9.6 pts)

Cline also reports faster task completion and lower token cost vs the old CLI in internal runs.

**Source:** https://www.marktechpost.com/2026/05/14/cline-releases-cline-sdk-an-open-source-agent-runtime-now-powering-its-cli-and-kanban-with-ide-extensions-being-migrated/

---

## 2026-05-29

### Claude Code v2.1.154 (May 28) — Opus 4.8, Dynamic Workflows, Background Agents

Major release with significant architectural additions:
- **Claude Opus 4.8 released** — now defaults to high effort; `/effort xhigh` available for hardest tasks
- **Dynamic workflows** — Claude can orchestrate tens to hundreds of agents in the background for large, complex tasks. Run `/workflows` to view runs
- **Fast mode on Opus 4.8** — available at 2x standard rate for 2.5x the speed
- **Lean system prompt** now default for all models except Haiku, Sonnet, and Opus 4.7 and earlier
- **`!` shell commands in agents** — run shell commands as background sessions you can attach to and detach from; also `claude --bg --exec '<command>'`
- **Chrome browser selection** — pick which connected browser via `/chrome` → "Select browser…"
- **Plugin defaults** — plugins can declare `defaultEnabled: false`; enable via `/plugin` or `claude plugin enable`
- **Safety classifier improvements** — improved detection of data exfiltration, particularly bulk transfers of repository contents
- **Multiple bug fixes** — `rm -rf $HOME` blocking, `$TMPDIR` resolution consistency, orphaned bg-pty-host processes on macOS, worktree baseRef resolution, background session retirement, subagent worktree isolation guard bypass

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.153 (May 28) — Infrastructure & UX Polish

- `skipLfs` option for github/git plugin marketplace sources — skips Git LFS downloads during clone/update
- One-time notice when npm global install can't auto-update
- Status line commands now receive `COLUMNS` and `LINES` environment variables
- `claude agents` autocomplete now suggests native slash commands and bundled skills
- PR column shows `PR #N` for single PR or `N PRs` for multiple

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.135.0 (May 28) — Doctor, Vim Mode, Permissions Profiles

- **`codex doctor`** now reports richer environment, Git, terminal, app-server, and thread inventory diagnostics
- **`/status`** shows remote connection details and server version when TUI is connected over remote transport
- **Vim mode** gained text-object editing, improved word/line-end behavior, and configurable interrupt-turn binding
- **`/permissions`** now understands named permission profiles
- **Bundled zsh helper** for macOS and Linux targets
- **Python SDK** exposes friendly Sandbox presets for thread and turn APIs
- **TUI fixes** — markdown tables and multiline lists render more readably; macOS and Zellij stability improvements

**Source:** https://developers.openai.com/codex/changelog

### Cline CLI v3.0.86 (May 28) — Opus 4.8, Kimi K2.6, VS Code Restructure

- Added **Claude Opus 4.8 provider support**, including 1M-context variants
- Added **Moonshot Kimi K2.6 model** support
- Fixed prompt-cache support for Qwen 3.7 Max in the Cline provider
- **VS Code extension moved** to `apps/vscode` — architectural reorganization

**Source:** https://github.com/cline/cline/releases

### Claude Code npm Registry Leak

Source maps for Claude Code were published to npm registry, exposing the tool's source code. No malicious code delivered. VS Code and JetBrains extensions were never affected. Follows similar pattern to Cline's npm compromise earlier in 2026 — compromise of distribution tokens, not source code integrity.

### Comparison: Claude Code vs Codex CLI vs Gemini CLI vs Cursor Agent (May 2026)

Updated comparison guide identifies four tools that matter in mid-2026: Claude Code, Codex CLI, Gemini CLI (transitioning to Antigravity), Cursor Agent. Focus on autonomy depth, where the agent runs, and workflow specialization. Antigravity 2.0 transition creates migration considerations for enterprises.

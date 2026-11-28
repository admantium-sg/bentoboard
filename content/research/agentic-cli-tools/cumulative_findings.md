# Cumulative Findings: Agentic CLI Tools Research

**Last Updated:** October 22, 2026
**Research Period:** April–October 2026
**Last Fact-Check:** October 22, 2026 (48 claims checked against 2+ independent sources: 20 verified, 3 partially verified, 21 corrected, 4 unverified — see `fact_check_reports/2026-10-22.md`; inline corrections marked 🔎 below)
**Tools Covered:** Cursor, Kilo, Crush (formerly OpenCode), Codex CLI, Droid CLI, Pi CLI, Google Antigravity CLI, Cline, Grok Build, Claude Code, Gemini CLI

---


## 2026-10-17

### Claude Code v2.1.302 — Auto Mode Model Selector, Idle Compaction Config (October 16, 2026)
244th release of 2026. Adds CLAUDECODEAUTOMODEMODEL to choose the model the client-side auto mode classifier uses independently from the server-side model. Adds an Idle compaction row to /config for turning idle compaction off or back on with notices showing how to disable it. Adds a notice that standalone Claude Design (claude.ai/design) closes by December 14, 2026. Fixes a "Prompt is too long" error when stopping a turn while the conversation was being compacted. Fixes the Read tool loading an image file of any size. Ships every 1.1 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.302

### Antigravity CLI v1.4.0 — Terminal OSC 7501 Status, Plugin Validate Overhaul (October 16, 2026)
68th release of 2026. Adds OSC 7501 terminal status reporting — in supporting terminals, the tab or window shows whether the CLI is working, waiting for input, done, or failed. Set AGYCLIOSC7501=off to disable. Adds alt+m shortcut to toggle queued messages on the fly (queue when in Send Immediately mode, send immediately when in Queue mode). Overhauls agy plugin validate to use the same rules the CLI uses to load plugins, listing each error with file and line, accepting --strict to fail on warnings, and --json for CI. Fixes the CLI refusing every message with "Eligibility check failed" when the service was temporarily unavailable — now retries temporary errors without locking the session. Fixes plugin MCP servers with variable headers (like Bearer ${TOKEN}) sending the literal placeholder instead of the configured value. Ships every 1.6 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.0

### Cursor — Cloud Agent Canvases: Shareable Interactive Output, Environments API, 300 Repos (October 16, 2026)
30th Cursor release of 2026. Cloud agents can now build interactive canvases as part of their work — finished canvases can be shared with teammates via link. New Environments API in beta for programmatically creating and managing cloud agent environments. Cloud agent environments now support up to 300 repositories (up from prior limit). Large environments load 5x faster. Ships every 7.9 days — 3 releases in the last month.

**Source:** https://www.havoptic.com/r/cursor-cloud-agent-canvases-and-environments

### Q4 2026 Agent Funding: $872.5M Across 5 Rounds — Manus $500M, Armadin $255.5M (October 16, 2026)
Q4 2026 data through October 16: 5 disclosed rounds totaling $872.5M. Manus's $500M (Oct 8) and Armadin's $255.5M Series B (Oct 1) account for 87% of the quarter's disclosed total. The remaining three rounds are Photon ($4.5M Seed, agent infrastructure), Stuut ($52.5M Series B, vertical AI for finance order-to-cash), and Armadin's second entry. Q4 pace is running at 0.31 rounds/day against Q3's 0.64 rounds/day. Excluding Manus's $500M, the quarter averages $93M per round across the remaining four — reflecting the much smaller scale of non-headline deals. Manus and Instinct (added to Q3 close) represent consumer/general agents at the billion-dollar scale, while Armadin signals agent security as a distinct funding category.

**Source:** https://gravity.fast/data/ai-agent-funding-tracker/

> **🔎 Fact-Check 2026-10-22 — CORRECTION (company name):** the third remaining round is **Hone — a $60.0M seed in agent platforms (Oct 8, Benchmark and Index Ventures, $285M valuation)** — *not* "Armadin's second entry". Armadin appears exactly once in the tracker (Oct 1, $255.5M Series B). Everything else in the entry is confirmed: 5 disclosed rounds / $872.5M through Oct 16, Manus $500M (Oct 8) + Armadin $255.5M = 87% of disclosed money, Photon $4.5M seed (Oct 1), Stuut $52.5M Series B (Oct 7), Q4 pace 0.31 rounds/day vs. Q3's 0.64, and the ~$93M average across the four non-Manus rounds ((872.5−500)/4 = 93.1).
> **Sources:** https://gravity.fast/data/ai-agent-funding-tracker/ · https://www.finsmes.com/2026/10/hone-raises-60m-in-funding-at-285m-valuation/ · https://www.finsmes.com/2026/10/stuut-raises-52-5m-in-series-b/
### Agent Security Emerges as Distinct Funding Category — Reco $55M, Armadin $255.5M (October 2026)
Consecutive rounds in agent security: Reco raised $55M on September 29 and Armadin raised $255.5M Series B on October 1. Armadin chains individual security weaknesses into actionable attack paths for defenders to test; founded by a Mandiant co-founder. The gravity.fast tracker now tags "Security" as its own category. This follows a broader pattern of infrastructure and tooling layers (security, observability, infra) attracting funding as the agent-building layer matures.

**Source:** https://gravity.fast/data/ai-agent-funding-tracker/

## 2026-10-17

### Antigravity CLI v1.4.1 — Plugin Validation Overhaul, Syntax-Highlighted Diffs, CPU Fixes (October 17, 2026)
69th release of 2026. Improves agy plugin validate to also check a plugin's skills, subagents, and rules — errors on missing/invalid frontmatter, warns on missing descriptions, duplicate names, oversized bodies, or components in wrong directories; accepts --strict to fail on warnings and --json for CI. Improves inline diff preview to render like /diff with syntax highlighting, background tints on added/removed lines, and line-number gutter. Improves CPU usage while typing and working by rendering prompt area once per frame and reusing measured line widths. Fixes Enable Telemetry showing as editable for Business accounts. Fixes agent commands failing on Windows 10 and Windows 11 before 24H2 where terminal sandbox isn't supported. Fixes socket disconnects (broken pipe, network down, laptop sleep) stopping turns instead of retrying. Fixes MCP server staying "Ready" in /mcp after unexpected exit. Fixes large structured tool outputs bypassing per-step token limit. Fixes clickable links with semicolons being cut off. Ships every 1.5 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.1

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** Google's changelog dates v1.4.1 to **October 17, 2026** and confirms the expanded `agy plugin validate` (skills, subagents, rules; missing/invalid frontmatter errors, duplicate-name and oversized-body warnings, 24 KB body limit, `--strict`/`--json`), the `/diff`-style inline diff preview with syntax highlighting and background tints, the prompt-area rendering optimisation, the Business-account telemetry row fix, the Windows pre-24H2 sandbox fallback, socket-disconnect retry handling, and the remaining fixes.
> **Sources:** https://antigravity.google/docs/changelog · https://www.havoptic.com/r/antigravity-cli-1.4.1
### Grok Build v1.0.60 — Smart Session Resume, Shift+Y Code Copy (October 15, 2026)
169th release of 2026. grok --resume lists matching sessions newest first with last-updated timestamps and suggests similar titles when nothing matches. Shift+Y in the fullscreen markdown viewer copies the code block under the cursor. grok --resume with unmatched title reports miss immediately instead of trying remote restore. Esc on first question in dashboard-opened session moves focus to scrollback. Ships every 1.6 days — 15 releases in the last month.

**Source:** https://www.havoptic.com/r/grok-build-1.0.60

### OpenAI Codex CLI rust-v0.163.0 — Steer-While-Thinking, Leader Key, Parallel Read-Only Tools (October 15, 2026)
108th release of 2026. Send follow-up prompt while Codex is thinking to steer immediately — interrupting stops Code Mode cells and nested tool calls. Configurable leader key via /keymap (default Ctrl+X), shortcut hints stay open until dismissed, voice mute moves to F9. Independent read-only tools (skill, memory, conversation-history) run in parallel. /config lets you search preferences and change settings. Daemon restart from /daemon reconnects automatically. Daybreak enabled by default for eligible accounts. Codex no longer bundles patched zsh. Ships every 1.3 days — 16 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.163.0

### Grok Build v1.0.61 — Exact Match Direct Open, Windows Hook Error Naming (October 16, 2026)
170th release of 2026. /resume opens session directly when ID or title matches exactly one session instead of always opening the picker. Resume picker finds sessions whose titles contain every word typed in any order. Dashboard peek text can be selected and copied. Workflow run views scroll toward newer agents instead of snapping back. Windows hook spawn failures now name the program that failed to start instead of blaming the hook script. Ships every 1.6 days — 15 releases in the last month.

**Source:** https://www.havoptic.com/r/grok-build-1.0.61

### Grok Build v1.0.62 — Headless Background Wait, Pipe Crash Fixes, Enter-to-Run Slash Commands (October 16, 2026)
171st release of 2026. Headless mode (grok -p) waits for follow-up turns from finished background tasks before exiting, with --background-wait-timeout exiting with error. Cold /resume from dashboard overlay keeps overlay attached. Enter on slash command with optional arguments runs instead of trailing space. CLI commands no longer crash when output pipe closes early or device is full. Ships every 1.6 days — 15 releases in the last month.

**Source:** https://www.havoptic.com/r/grok-build-1.0.62

## 2026-10-17

### Antigravity CLI v1.4.1 — Plugin Validation Overhaul, Syntax-Highlighted Diffs, CPU Fixes (October 17, 2026)
69th release of 2026. Improves agy plugin validate to also check a plugin's skills, subagents, and rules — errors on missing/invalid frontmatter, warns on missing descriptions, duplicate names, oversized bodies, or components in wrong directories; accepts --strict to fail on warnings and --json for CI. Improves inline diff preview to render like /diff with syntax highlighting, background tints on added/removed lines, and line-number gutter. Improves CPU usage while typing and working by rendering prompt area once per frame and reusing measured line widths. Fixes Enable Telemetry showing as editable for Business accounts (where it can never be enabled). Fixes agent commands failing on Windows 10 and Windows 11 before 24H2 where terminal sandbox isn't supported — falls back to asking before running. Fixes socket disconnects (broken pipe, network down, laptop sleep) stopping turns instead of retrying. Fixes MCP server staying "Ready" in /mcp after unexpected exit. Fixes large structured tool outputs bypassing per-step token limit. Fixes clickable links with semicolons being cut off. Ships every 1.5 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.1

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** Google's changelog dates v1.4.1 to **October 17, 2026** and confirms the expanded `agy plugin validate` (skills, subagents, rules; missing/invalid frontmatter errors, duplicate-name and oversized-body warnings, 24 KB body limit, `--strict`/`--json`), the `/diff`-style inline diff preview with syntax highlighting and background tints, the prompt-area rendering optimisation, the Business-account telemetry row fix, the Windows pre-24H2 sandbox fallback, socket-disconnect retry handling, and the remaining fixes.
> **Sources:** https://antigravity.google/docs/changelog · https://www.havoptic.com/r/antigravity-cli-1.4.1
### Hone AI — $60M Seed to Build Outcome-Responsibility Agents (October 8, 2026)
Hone raised $60 million seed at a $285 million valuation, led by Benchmark and Index Ventures. Builds AI "Engines" that take ongoing responsibility for business outcomes over weeks or months rather than completing single tasks. No revenue or customer outcomes publicly disclosed yet. First "outcome-responsibility" agent platform round tracked, representing a distinct model from task-completion agents.

**Source:** https://gravity.fast/data/ai-agent-funding-tracker/

## 2026-10-18

### Claude Code v2.1.303 — Bug Fixes and Reliability Improvements (October 18, 2026)
245th release of 2026. Bug fixes and reliability improvements. Ships every 1.2 days — 23 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.303

### Antigravity CLI v1.4.2 — Daemon Mode Conversation History Fix (October 18, 2026)
70th release of 2026. Fixes conversation history not showing in Remote Control when running in daemon mode. Ships every 1.5 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.2

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** Google's changelog dates v1.4.2 to **October 18, 2026** with the single fix "conversation history not showing in Remote Control when running in daemon mode".
> **Sources:** https://antigravity.google/docs/changelog · https://www.havoptic.com/r/antigravity-cli-1.4.2
## 2026-10-15

### GitHub Copilot CLI v1.0.98 — Gemini 4 Argon, Keystroke Preservation, Ask Expansion (October 14, 2026)
140th release of 2026. Adds support for Gemini 4 Argon model. Command hooks complete reliably even when child-exit signals are lost under Node. MCP status and /mcp commands stay synced after split-view session switches. Resuming a session now respects abandoned pending-permission work and continues only active permission requests. Keeps ordinary characters typed while the input box is still coming up at startup instead of dropping them. Expand /ask answers with Ctrl+E, copy the entire answer with Ctrl+Y, and reopen the last usable completed answer with /ask or /btw. Ships every 2.3 days — 13 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.98

### Claude Code v2.1.300 — Virtual Text, Agent Transcript Views, Advisor on AWS (October 14, 2026)
242nd release of 2026. Adds virtualText to mod prompt decorations — text drawn in the prompt box that never enters the draft or submitted prompt. Adds $.ui.view({ agentId }) for mods to show an agent's transcript in the main view, with $.ui.view({}) to go back. Adds /advisor on Claude Platform on AWS — no advisor runs until picked with /advisor, advisorModel or --advisor, and CLAUDECODEDISABLEADVISORTOOL=1 turns it off. Adds OpenTelemetry GenAI semantic-convention attributes to trace spans (genai.provider.name, genai.conversation.id, genai.tool.name, error.type). Supports rewriting a workflow agent's prompt and model in the agent.spawn mod hook. Adds prompt.change mod hook raised when the prompt box text changes without a typed edit. Ships every 0.9 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.300

### Claude Code v2.1.299 — Idle Compaction, File Mention Controls (October 14, 2026)
241st release of 2026. Adds idle compaction in the terminal: a 200K+ token conversation left idle for about 54 minutes is compacted before its one-hour prompt cache expires, so the next message doesn't reprocess the entire conversation. Add CLAUDECODEDISABLEFILEMENTIONS to give Claude file paths for @ mentions without file contents. Add CLAUDECODEIDLECOMPACTMINTOKENS to change the 200K-token minimum (idleCompaction: false in settings.json turns it off). Both require v2.1.290 or later. Adds $.prompt.media for prompt.submit hook of mods to read bytes of attached images or documents. Adds $.session.identity() for managed-settings mods. Ships every 0.9 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.299

### Antigravity CLI v1.3.5 — Auto Mode, /Compact, Syntax Highlighting in Diff (October 14, 2026)
66th release of 2026. Adds Auto mode: approves file edits and safe commands without asking, still prompts before irreversible actions. Commands that would leave the terminal sandbox are first reviewed by a separate agent. Choose with --mode auto, from Agent Mode in /config, or press Shift+Tab to cycle modes. Available on Linux and macOS, Windows support coming later. Adds /compact command to compact conversation on demand and free context window — shows progress label that can be canceled with Esc. Adds syntax highlighting to /diff file view with token colors for each color scheme. Adds folding to /diff: hunk headers show hidden unchanged lines above, Ctrl+O expands/collapses, f switches between changes and whole file. Improved /diff performance on very large files by rendering only rows on screen. Ships every 1.6 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.5

## 2026-10-14

### Kiro CLI v2.31.0 — Local Command Sandbox and Local Autonomous Mode GA (October 13, 2026)
55th release of 2026. Makes the local command sandbox and local autonomous mode available to every V3 user. Run `/sandbox` to place agent shell commands and their child processes inside an OS-level sandbox with configurable network access (blocked, limited to common dev hosts, or open). Local stdio MCP servers can run inside the same sandbox. The agent, built-in file tools, and remote MCP servers stay outside. Run `/autonomous on` in a local V3 session and Kiro switches to the Default agent, turns on the local sandbox, and works through tasks without prompting for each command approval. Also loads MCP tools on demand and extends KIRO_HOME across V3 configuration and state. Ships every 3.4 days — 9 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/2-31

### Kiro CLI v2.30.0 — V3 Startup Prompt, Model Fallback Notices (October 12, 2026)
54th release of 2026. Shows a startup prompt inviting users to switch to V3 as part of the gradual rollout before CLI 3.0 becomes the default at end of October. Adds V3 model fallback notices — when a model refuses or is unavailable and the turn moves to another model, the transcript shows a notice so users understand why the reply changed. Keeps more V2 agent access when upgrading agents to V3. Ships every 3.4 days — 8 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/2-30

### GitHub Copilot CLI v1.0.97 — Discover All Custom Agents, Billed AI Credits Tracking (October 13, 2026)
139th release of 2026. Now discovers all custom agents even when repositories define more than 100 or nest agent files deeply. Shows billed AI Credits in `/usage` for token-billed sessions including after resume. Adds agent-scoped declarative hooks for custom agents. Fixes: resumed sessions no longer rebuild plugin hooks from the wrong plugin list; unavailable permission recovery attempts tracked per request so unrelated calls no longer consume each other's retry budget; emergency memory relief in long sessions can now bypass its cooldown before V8 aborts, so sessions that would have been killed by JavaScript heap OOM may survive with compacted history instead. Ships every 2.3 days — 12 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.97

### GitHub Copilot CLI v1.0.96 — Secrets Detection in Sandbox, Faster Git Repos (October 12, 2026)
138th release of 2026. Interactive sandbox settings now detect potential environment secrets and suggest adding masking hosts before saving. Model IDs in `/model` and `/config model` are now case-insensitive and save as canonical IDs. Interactive sessions in git repositories reach the input prompt sooner. `/add-dir` grants sandbox access to added directories for the current session. Timeline now shows whether you, Assisted Permissions, policy, or unattended fallback made each permission decision. Ships every 2.4 days — 11 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.96

### Antigravity CLI v1.3.4 — Plugin Version List, Smart Model Defaults, Remote Control Fixes (October 13, 2026)
65th release of 2026. `agy plugin list` now shows every installed plugin with its version and whether it is enabled (previously only showed imported plugins). `--model` and `/model` now accept a base model name without `--effort`: the CLI picks the model's default thinking level automatically instead of erroring. Remote Control browser settings now actually apply settings the CLI uses (project/global permissions, queued messages, AI credits, telemetry, artifact review) instead of showing a can't-change notice. Fixes: long stalls when model requests fail repeatedly now capped at 30 seconds between retries; remote MCP servers using OAuth no longer silently sign out after temporary network failures; `--agent` with no matching agent now exits with code 1 in headless `-p` runs and shows an Agent Not Found warning in interactive sessions. Ships every 1.4 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.4

### Cursor — Origin App Marketplace: 20+ Integrations, Public Submissions Open (October 13, 2026)
29th Cursor release of 2026. Origin (Cursor's code hosting platform) launches its App Marketplace with over 20 integrations across CI, deployments, code review, security, monitoring, and project management: Cloudflare, Netlify, Render, Vercel, Buildkite, CircleCI, Depot, CodeRabbit, Greptile, Semgrep, Socket Security, Sentry, Linear, and more. The marketplace is now open to public submissions — any developer tool team can build an Origin app that authenticates via app JWT, receives webhook events, and writes back check runs, PR comments, and reviews. Ships every 7.7 days — 2 releases in the last month.

**Source:** https://www.cursor.com/changelog/origin-app-marketplace

### Gemini CLI v0.64.0 — CPU Hang Fix, Atomic File Writes, Crash Recovery (October 13, 2026)
81st release of 2026. Fixes a CPU hang when typing `@` within code that would swallow quotes. File write operations are now serialized and writes are atomic. State now persists atomically and recovers from backup on corruption. Ctrl+C emergency abort now reaches the cancellation handler during active operations. Fixes: `@file:line` references no longer cause ghost text wrap hang; scroll position preserved; Windows ConPTY now forwards IME cursor position correctly; directory removal retries on Windows locking errors during extension updates. Ships every 6.7 days — 4 releases in the last month.

**Source:** https://www.havoptic.com/r/gemini-cli-v0.64.0

## 2026-10-11

### Antigravity CLI v1.3.3 — Pinned Prompt, Plugin Auto-Load, macOS Security Tightening (October 10, 2026)
64th release of 2026. Keeps your conversation prompt pinned at the top while scrolling so you can instantly jump back. Plugins can now declare tools with `meta: {"antigravity/alwaysLoad": true}` in their tools/list response so the agent gets those tools directly without on-demand discovery. Also supports root-level `agents.json` in plugins to declare subagents alongside skills and rules. macOS sandbox now blocks sandboxed commands from reading `~/Library/Application Support` by default — previously readable, now opt-in. HTML error pages from corporate proxies show the page title instead of raw HTML. Jujutsu commands no longer hang in interactive pager, stopped subagents clear pending approvals immediately, and `--remote-control` now exits clearly when Application Default Credentials are detected. Ships every 1.5 days — 21 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.3

### Kiro CLI v2.29.0 — Session Memory for Local V3 Sessions (October 9, 2026)
53rd release. Kiro can learn useful context from your work and recall it in later chat sessions. For example, if Kiro learns while debugging that a repository's integration tests fail until the local database is seeded, a later session seeds it first instead of rediscovering. When Kiro uses a memory, the chat shows a Memory entry with `command=get` and the memory's title. Type `/memories` and select config to choose read & write, read only, or off. With read & write, automatic memory updates let Kiro create and refine memories after sessions end. In untrusted workspaces, Kiro can read memories but cannot modify them. Ships every 5.3 days — 7 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/

## 2026-10-10

### Claude Code v2.1.296 — Code Settings Sync, Subagent Model Controls (October 9, 2026)
240th release of 2026. Syncs code settings across Claude Desktop and the gateway for more consistent behavior. New controls let you manage window compaction and model selection for subagents with precision. Adds `autoCompactWindow` to subagent frontmatter and `--agents` definitions so subagents can auto-compact earlier than the main conversation. Adds `CLAUDECODEWORKFLOWSUBAGENTMODEL` to run every workflow agent on one model while other subagents keep theirs. Adds `CLAUDECODEOVERLOADEDRETRYMAXDELAYMS` for longer retry delays on overloaded (529) requests. Adds allowlarge option to the Read tool for reading larger text files. Ships every 0.9 days — 28 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.296

### OpenAI Codex CLI rust-v0.162.1 — Crash Fix for Multi-line Questions, Startup Fix (October 9, 2026)
107th release. Fixes a critical TUI crash when asynchronous questions contain multiple lines, preserving line breaks and complete hyperlink destinations. Also fixes startup failures caused by differences between a running background server's feature settings and CLI defaults — compatibility checks now apply only to explicit command-line feature overrides. Ships every 1.4 days — 17 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.162.1

### GitHub Copilot CLI v1.0.95 — Microsoft Entra Auth on macOS, Better Context Management (October 9, 2026)
137th release. Uses native Microsoft Entra broker authentication on macOS when available, with browser fallback. `copilot config` now supports sandbox credential injectHosts keys with key completion in Bash, Zsh, and Fish. `--context` now applies to new and resumed ACP sessions instead of silently using the default. Managed plugin setup retries hourly or after policy changes instead of on every message failure. Ships every 2.5 days — 10 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.95

### Manus — $500M+ Raised for General AI Agents (October 8, 2026)
Manus raised more than $500 million in funding. The company is developing general AI agents. The formal round classification was not specified.

**Source:** https://www.reuters.com/world/china/manus-raises-more-than-500-million-after-meta-exit-2026-10-08/

### Armadin — $255.5M Series B for Agentic Security (October 1, 2026)
Armadin raised $255.5 million Series B led by Andreessen Horowitz and Accel to scale autonomous security capabilities.

**Source:** https://www.prnewswire.com/news-releases/armadin-raises-255-5-million-series-b-to-scale-effective-autonomous-security-302895278.html

### Nous Research — $90M Series B for Open-Source AI Agents (October 7, 2026)
Nous Research raised $90 million Series B to support the development of open-source AI models and agent technology. Investors include Robot Ventures, Nvidia, M12, Samsung, USV, and Menlo Ventures.

**Source:** https://www.wsj.com/pro/venture-capital/maker-of-open-source-ai-assistant-hermes-secures-90-million-a061c1d7

## 2026-10-09

### Claude Code v2.1.295 — Hook Blocking on Failure/Timeout, Program Status Protocol (October 8, 2026)
239th release of 2026. Adds `onFailure: "block"` for command and HTTP hooks — a hook that can't start, times out, or exits with an unexpected code now blocks the action instead of letting it through. Adds Program Status Protocol (OSC 7501) support: terminals that implement it can show whether Claude Code is working, waiting, or done. Also adds quoted text to the /copy picker so drafted messages copy without > markers. Ships every 0.9 days — 29 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.295

### Claude Code v2.1.294 — Hook Safety Fixes (October 8, 2026)
238th release of 2026. Fixes prompt and agent hooks written as instructions (such as "Block commands that...") correctly blocking what they should block. Also improves how prompt hooks on Stop and SubagentStop written as instructions are judged — Claude is less likely to stop early when a hook says "Carry on if the build is broken." Ships every 1.2 days — 27 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.294

### OpenAI Codex CLI rust-v0.162.0 — Clickable URLs, Pinnable Tasks, Git Worktree Management (October 8, 2026)
106th release. Makes URLs clickable throughout the interface — in approval headers, questions, MCP prompts, warnings, banners, and verification prompts, including wrapped links. Adds pinnable tasks in the agent Command Center. New tools for creating and managing Git worktrees from trusted local projects. Adds JavaScript helpers for streaming promise results and opt-in ranked tool search in Code Mode. Ships every 1.4 days — 16 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.162.0

### GitHub Copilot CLI v1.0.94 — Claude Haiku 5.5, Ollama Local Model Support (October 8, 2026)
136th release. Adds Claude Haiku 5.5 to model selection and --model completions. `/model` now picks up locally running Ollama models — users report having Qwen3.6 and Gemma4 available mid-session alongside cloud models. Assisted permissions now send visible shell code to the permission judge instead of requiring manual approval. MCP enable/disable works before server discovery without starting MCP servers. Ships every 3.7 days — 9 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.94

### Antigravity CLI v1.3.2 — Plugin Marketplace, Local Install Support (October 8, 2026)
63rd release. Adds `/plugin` interactive manager for the official Antigravity plugin marketplace — browse and install plugins that bundle skills, MCP servers, subagents, rules, and hooks. Install from shell with `agy plugin install @antigravity-plugins-official` or from local directory. Plugin authors can now keep manifests in .antigravity-plugin/ or .gemini-plugin/ folders, ship bin/ command-line tools, and use per-plugin data storage. Improved: plugin list opens instantly, interrupted installs don't leave half-installed plugins, Windows installs more reliable. Fixes: `--dangerously-skip-permissions` no longer auto-approves plans in /plan mode — only skips tool permission prompts. Ships every 1.4 days — 21 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.2

### Kiro CLI v2.28.0 — Classic to V3 Migration Path, V3 Hooks by Tool Category (October 5, 2026)
52nd release. Classic users get a path to switch to V3 without leaving the terminal — Kiro offers to upgrade agent configs and rerun the command in 3.0. Hooks that run before or after a tool can now match by category (shell, read, write, MCP server) instead of only by internal tool ID. Improves reliability in long V3 sessions. Ships every 5.3 days — 6 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/

### Cline SDK v4.1.24 / Desktop v0.0.45 — Reasoning Off Fix, Model Catalog Refresh (October 2026)
SDK fixes reasoning being disabled failing with 400 errors on GPT-6 Astra, GPT-6.1 Sol, Claude Fable 5, and Claude Opus 5.5. Background service no longer crashes 3 seconds after an MCP server or hook quits before reading all input. Model catalog refreshed — adds Claude Haiku 5.5, updates defaults across Vertex AI, Cortecs, GitHub Copilot, LLM Gateway, and others to Claude Haiku 5.5. CLI `cline mcp add` now keeps --header values when opening the setup wizard.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.8.8 — Pin Worktrees, Integrated Browser Improvements (October 2026)
VS Code: Pin worktrees in Agent Manager sidebar with Shift+click — pinned worktrees stay at top, get first jump shortcuts. Open chat web links in-app by default when Integrated Browser is enabled. Keep MCP OAuth credentials bound to the authorization server that issued them — servers switching auth servers can no longer receive stored refresh tokens. Switch between session tabs and Kilo editor tabs with Cmd+Alt+Left/Right.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Kilo v7.8.7 — Multi-Project Agent Manager by Default (October 2026)
VS Code: Multi-project Agent Manager now available by default with the current workspace project first. No more experimental toggle or old single-project view. Restored tabs, background sessions, and branch defaults stay with their project.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-10-08

### Claude Code v2.1.293 — Claude Haiku 5.5 Default, Context Compression Fixes (October 7, 2026)
237th release of 2026. Defaults to the faster, more affordable Claude Haiku 5.5 model with 1M context window. Haiku 5.5 costs ~75% less to run than Haiku 4.5 at $0.10/$0.50 per Mtok ($0.50/$2.50 for prompts over 100K). Fixes: Claude sometimes treating its own last actions before a context compaction as done and retracting/redoing finished work; memory leak where HTTP MCP connections kept every request until closed; queued messages lost when backgrounding sessions; /model effort arrow keys wrapping past limits and accidentally saving Low as a default. Ships every 1.2 days — 27 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.293

### Claude Code v2.1.291 — Permission Prompt Regression Fix (October 6, 2026)
235th release. Fixes two regressions: cloud sessions dropping answers to permission prompts (from v2.1.290), and last messages of a session being lost when quitting (from v2.1.288). Ships every 1.2 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.291

### OpenAI Codex CLI rust-v0.161.0 — GPT-6.1 Sol Default, MCP Login, Cyber Access Controls (October 7, 2026)
105th release. GPT-6.1 Sol becomes the default model in bundled and Amazon Bedrock catalogs. Amazon Bedrock now supports multi-agent V2 and Ultra reasoning on compatible models, plus AWS GovCloud regions. New: `/mcp login <name>` lets you sign into MCP servers from an active terminal session. Voice conversations gain microphone/speaker selection with preferences saved locally. Daybreak (voice mode) is opt-in via `--enable clidaybreak` and requires eligible ChatGPT sign-in plus OpenAI provider support. Cyber access program selection per turn via `codex exec --cyber-access-program`. Bug fix: approved filesystem escalation now grants proper access. Ships every 1.4 days — 15 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.161.0

### GitHub Copilot CLI v1.0.93 — Enterprise Permissions, Sandbox for All Users, MCP Config Changes (October 7, 2026)
135th release. Real-time command sandboxing now available to all users via `/sandbox` and `--sandbox`. Enterprise gets `permissions.limitTo` to enforce managed domain boundaries for network requests. Safe /user commands run immediately during active turns; unsafe remote commands rejected without dialogs. Plugin skill commands stay available after reloading enabled plugins. Local-network allowlists now include localhost and loopback. MCP server configuration changes apply between turns without restarting the session. Model picker updated to prioritize GPT-6.1 Sol, GPT-6 Astra/Luna, and Claude 5.5. Ships every 4.1 days — 8 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.93

### Antigravity CLI v1.3.1 — Diff Navigation, Rewind Fix, Plugin Install on Windows (October 7, 2026)
62nd release. /diff navigation overhaul: ←/→ jump between files at first change with hunk header in view; each file remembers cursor and scroll position; n/N continue into next/previous file's changes instead of stopping at current file. Fixed /rewind in very long conversations where cleared messages were listed as "(empty message)" and erroring. Fixed Windows plugin install/uninstall crash when MCP servers were running — now stops MCP servers before replacing plugin folder, restarts them after. Ships every 1.5 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.1

### Antigravity CLI v1.3.0 — Verbosity Default to Medium, Scrolling Fixes (October 6, 2026)
61st release. Changed default Verbosity from high to medium — conversation view groups related tool calls and thoughts into concise summaries. Use /config to revert to high. Fixed j/k in /diff view to move line cursor instead of jumping between files. Fixed trackpad/mouse-wheel scrolling jumping back and forth (especially over SSH/tmux). Fixed files with spaces, %, special characters, or Windows drive paths being mishandled. Ships every 1.5 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.0

## 2026-10-12

### Claude Code v2.1.293–2.1.296 — Haiku 5.5 Default, Permission Hardening, Hook Enforcement (October 7–9, 2026)
237–240th releases of 2026. Four releases since the Oct 11 report, with the most substantive being a cluster of permission and hook fixes. v2.1.293 ships Claude Haiku 5.5 as the default Haiku on the Anthropic API — 1M context, $0.10/$0.50 per Mtok for prompts up to 100K tokens (5x that rate above 100K). v2.1.294 fixes prompt and agent hooks written as instructions (e.g., "Block commands that...") that were allowing what they should block. v2.1.295 adds `onFailure: "block"` to command and HTTP hooks — a hook that fails to start, times out, or exits unexpectedly now blocks the action instead of letting it through, critical for hooks used as enforcement rather than advisory. v2.1.296 adds `autoCompactWindow` for subagents, `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL` to run all workflow agents on one model, and `allow_large` on the Read tool for files past usual size limits. Managed-settings PreToolUse and prompt hooks that block now refuse and end the turn. Ships every 1.1 days — 30 releases in the last month.

**Source:** https://releases.sh/anthropic/claude-code

### OpenAI Codex CLI v0.162.0 — Git Worktree Tools, Daybreak Opt-in, Sandbox Fixes (October 7, 2026)
105th release. With worktrees feature enabled, tools for creating and listing managed Git worktrees from trusted local projects arrive. `apply_patch` preserves existing CRLF line endings without an opt-in. In the TUI, `/copy` navigates and copies transcript blocks, and `tui.mouse_scroll_speed` tunes mouse-wheel scrolling. The v0.161.0 release (Oct 6) also introduces `/mcp login <name>` for signing in to MCP servers from an active terminal session, and makes GPT-6.1 Sol the default in bundled and Amazon Bedrock catalogs. Daybreak requires explicit opt-in: `features.cli_daybreak=true` or `--enable cli_daybreak`; saved preferences remain intact. Sandbox fixes: approved filesystem escalation can now grant broader write access while preserving denied reads and network restrictions, and background tasks retain their originating turn's permissions. Ships every 1.1 days — 15 releases in the last month.

**Source:** https://dev.to/aicoding-guide/this-week-in-claude-code-codex-and-gemini-cli-week-of-october-11-2026-2k6d

### Cline v4.1.24 / Desktop v0.0.45 / SDK v0.0.92 — Reasoning Off Fixes, MCP Header Fix, Hub CLI (October 2026)
Major compatibility and UX fixes. Turning reasoning off no longer fails with a 400 error on GPT-6 Astra, GPT-6.1 Sol, Claude Fable 5, or Claude Opus 5.5 — a significant fix since reasoning-off is a common configuration. `cline mcp add` now preserves `--header` values when opening the setup wizard (previously accepting prefilled answers saved a remote server without its headers, e.g., Authorization). The old `cline dashboard` is now `cline hub dashboard` (old command still works as hidden alias). `cline doctor log` opens the file set by `CLINE_LOG_PATH`. SSH remotes work again (broken since v0.0.38 by a SyntaxError). On SSH environments, the git branch label no longer opens two new SSH logins every 5 seconds — checks every 30 seconds now. The AI SDK consolidates to ai 7.0.120 with @ai-sdk/provider-utils 5.0.50. Model catalog refresh adds Claude Haiku 5.5 and updates defaults for Google Vertex AI, GitHub Copilot, and others.

**Source:** https://github.com/cline/cline/releases

### Microsoft Fabric for Agents & Oracle Construct — Hyperscalers Enter Agent Orchestration (September–October 2026)
Microsoft launched "Fabric for Agents" and Oracle launched "Construct" in September 2026, both enterprise-grade agent orchestration platforms. These join existing platforms from Adept and Imbue as the enterprise software stack for AI agents matures. The orchestration platform layer — managing, monitoring, and securing fleets of agents while ensuring adherence to corporate policies — is now a clear hyperscaler battleground.

**Source:** https://aiconference.london/news/ai-agents-and-the-future-of-work-20261011-12

### Q3 2026: 31% of Enterprises Run AI Agents in Production — $15B VC Into Agent-Native Companies (October 2026)
Q3 2026 saw $15 billion of venture capital funnelled specifically into AI agent-native companies, marking a record quarter and a shift from capital-intensive model training investment toward application-layer build-out. Enterprise adoption data from Q3 2026 shows 31% of enterprises now run AI agents in production, up from roughly 23% in Q2. KPMG data shows 54% of billion-dollar-plus US organizations actively deploying AI agents, with 63% requiring human validation of agent outputs — indicating the market is industrializing with governance rather than slowing down.

**Source:** https://aiconference.london/news/ai-agents-and-the-future-of-work-20261011-12

## 2026-10-13

### OpenAI Codex CLI v0.162.1 — TUI Crash Fix, Startup Compatibility (October 9, 2026)
106th release. Fixes a TUI crash when asynchronous questions contain multiple lines — line breaks and complete hyperlink destinations are now preserved. Also fixes startup failures caused by feature-setting differences between a running background server and CLI defaults; compatibility checks now apply only to explicit command-line feature overrides rather than all settings mismatches. Ships every 1.1 days — 16 releases in the last month.

**Source:** https://releases.sh/openai/codex

### Manus AI Raises $500M+ as Independent Company After Meta Deal Collapses (October 8, 2026)
Manus AI, the Chinese AI agent lab founded by ex-Meta employees, has raised over $500 million in its first funding round since Meta was forced to abandon its acquisition (reported at over $2 billion) in late 2025 due to regulatory pressure. Manus's parent company Butterfly Effect announced the round via WeChat. The company relocated headquarters to Singapore and closed its Beijing office. According to The Information, Manus had an annual revenue run rate of approximately $400–500 million by June 2026, up from roughly $100 million at the time of the original Meta deal announcement.

**Source:** https://techcrunch.com/2026/10/08/chinas-manus-raises-over-500m-in-first-funding-round-since-split-with-meta/

### Armadin Raises $255.5M Series B — Agent Security Reaches Growth Stage (October 1, 2026)
Armadin closed a $255.5 million Series B at a valuation exceeding $2.5 billion, led by Andreessen Horowitz and Accel, with participation from Bain Capital Ventures, Redpoint, 8VC, Ballistic Ventures, GV, In-Q-Tel, Kleiner Perkins, and Menlo Ventures. Armadin builds offensive security tooling for agentic AI systems. Founded by one of Mandiant's founders. Follows Reco's $55 million growth round (September 29) in the same agent security space, confirming agent security as a distinct funded category.

**Source:** https://www.prnewswire.com/news-releases/armadin-raises-255-5-million-series-b-to-scale-effective-autonomous-security-302895278.html

### Nous Research Raises $90M Series B for Open-Source Agent Technology (October 7, 2026)
Nous Research, maker of the open-source Hermes AI models and assistant, raised $90 million Series B led by Robot Ventures with participation from Nvidia, M12, Samsung, USV, and Menlo Ventures. Supports development of open-source AI models and agent technology as an open-source alternative in the agent space.

**Source:** https://www.wsj.com/pro/venture-capital/maker-of-open-source-ai-assistant-hermes-secures-90-million-a061c1d7

### Q4 2026 Funding Opens at $260M Across Two Rounds — Q3 Closes at ~$6.32B (October 2026)
Gravity Fast's Q4 tracker: two disclosed rounds totaling $260 million as of October 5, 2026. Q3 2026 final close is 59 rounds at approximately $6.32 billion, up from the $5.25 billion preliminary figure. Q4 pace is running at 0.40 rounds per day versus Q3's 0.64 rounds per day. Median Q3 cheque was $30 million. Agent security (Armadin + Reco, consecutive weeks) now reads as its own funded category.

**Source:** https://gravity.fast/data/ai-agent-funding-tracker/

### Vesta Raises $30M to Bring AI Agents to Mortgage Lending (October 8, 2026)
Vesta raised $30 million led by Conversion Capital to support adoption of AI agents by mortgage lenders. Represents verticalized agent deployments for domain-specific workflows rather than general-purpose tooling.

**Source:** https://techcrunch.com/2026/10/08/vesta-raises-30m-as-lenders-adopt-ai-agents/

### Zeroset Raises $5.2M Pre-Seed for Agent Memory Infrastructure (October 6, 2026)
Zeroset raised $5.2 million pre-seed led by Gradient Ventures and 2048 Ventures to develop memory infrastructure for AI agents. First dedicated agent-memory infrastructure round tracked. Arrives concurrently with Kiro CLI shipping session memory as a native feature (October 9), confirming memory as a distinct capability layer.

**Source:** https://www.businessinsider.com/zeroset-startup-funding-ai-agents-gradient-ventures-enterprise-2026-10

### Salesforce Acquires Listen Labs — Enterprise Agents Move to Customer Research (September 29, 2026)
Salesforce signed a definitive agreement to acquire Listen Labs, an AI customer research platform whose agents design studies, interview participants, and synthesize findings. Expected to close in Salesforce's fiscal Q4 2027. MarTech reports a price of approximately $2 billion. Second major enterprise acquisition of an agent platform in days (following ZoomInfo/DoubleO.ai), placing AI research agents directly inside Salesforce's CRM workflow.

**Source:** https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-listen-labs/

## 2026-10-16

### OpenAI Codex CLI rust-v0.163.0 — Steer While Thinking, Leader Key, Parallel Tools (October 15, 2026)
108th release of 2026. Now lets you send a follow-up prompt while Codex is still thinking to steer the response immediately — interrupting a turn also stops active Code Mode cells and their nested tool calls. Adds configurable leader key via /keymap (default Ctrl+X), with shortcut hints staying open until dismissed and voice mute moved to F9. Parallel tool execution enabled for independent read-only tools including skill, memory, and conversation-history lookups. /config now lets you search preferences across categories and change settings immediately. Daemon management adds restart from /daemon with automatic reconnection. Daybreak is now enabled by default for eligible accounts. Linux and macOS release packages are smaller after symbol stripping. Codex no longer bundles a patched zsh. Ships every 1.3 days — 16 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.163.0

### Claude Code v2.1.301 — Smart Usage Limit Retries, Vim Bracket Jump, Multi-line Input (October 15, 2026)
243rd release of 2026. Adds CLAUDECODERETRYWATCHDOGMAXUSAGELIMITWAITMS so unattended retry mode stops a request at a usage limit that resets too far away instead of waiting indefinitely. Adds multi-line text input fields: Enter submits, Shift+Enter or backslash-before-Enter starts a new line. Adds % motion to vim mode for jumping to matching brackets alone or with d/c/y. Adds classifierverdict and permissionmode to OpenTelemetry tooldecision events so auto mode classifier decisions can be told apart from permission rules. Adds classifiercategory naming the built-in rule a classifier block matched when OTELLOGTOOLDETAILS=1. Fixes worktree creation by a WorktreeCreate hook not removing the worktree when it may hold unpushed commits. Fixes fable/best model alias erroring when newest Fable model is unavailable to the organization. Ships every 1.2 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.301

### Antigravity CLI v1.3.6 — Claude Opus 5.5/Sonnet 5.5, Safer Auto Mode, Hang Fixes (October 15, 2026)
67th release of 2026. Adds Claude Opus 5.5 and Claude Sonnet 5.5 support via Application Default Credentials (AGYADCAUTH) sign-in. Improves Auto mode: faster review of commands leaving the terminal sandbox with no timeout, auto-approves workspace format/lint/fix commands, and blocks commands uploading sensitive data. Fixes agent hanging indefinitely when model connection stalls — 5-minute timeout now cancels and retries automatically. Fixes subagent questions being lost — Ctrl+K or 'a' opens a question picker to send answers. Fixes agent shell commands hanging on invisible editor for git commit without -m, hg describe, jj describe by setting GITEDITOR/HGEDITOR/JJEDITOR to false. Fixes skills/rules/workflows/Markdown agents failing to load with colon in description field. Fixes Mermaid diagrams with YAML frontmatter or v11 syntax rendering as raw source. Ships every 1.6 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-v1.3.6

## 2026-10-20

### Claude Code v2.1.304 — Guided Auto-Mode Setup, Stronger Mod Controls, Worktree Safety Fix (October 19, 2026)
246th release of 2026. Adds `/auto-mode-setup`, a guided setup that reads your project and recent sessions to teach auto mode about your environment. Adds `decider: "person"` to a mod's `tool.check` answer — only the permission dialog or a host's callback can approve the ask, and it is refused with the mod's reason where nobody can be asked. Adds `e.isReadOnly` signal to mod hooks. Fixed `claude --worktree` removing the worktree and its branch without asking at exit when HEAD was detached or on another branch (critical data safety fix). Fixed sandboxed commands failing to start on Linux when a `denyRead` glob contains brackets that are not a character class. Adds transcript line when a plugin that runs first skips one of your mod's hooks, naming the event and the plugin. Ships every 1.1 days — 30 releases in the last month.

**Source:** https://releases.sh/anthropic/claude-code

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** v2.1.304 published **October 19, 2026**. Confirmed verbatim from the release notes: `/auto-mode-setup` guided setup reading the project and recent sessions; `decider: "person"` for a mod's `tool.check` answer; the `e.isReadOnly` signal on mod hooks; the `claude --worktree` fix removing the worktree and branch without asking when HEAD was detached or on another branch; the Linux sandbox `denyRead` glob bracket fix; and the transcript line naming the plugin that skipped a mod hook.
> **Sources:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.304 · https://releases.sh/anthropic/claude-code
### Claude Code v2.1.302 — Fork Subagents Default On, Image Memory Fix, Permission Mode Clarity (October 16, 2026)
244th release of 2026. `Claude -p` and Agent SDK sessions with no permission mode now start in default mode on third-party providers with telemetry off or on a fresh install. Fork subagents are on by default across the CLI, Agent SDK, desktop app, and VS Code. The Read tool no longer loads image files of any size into memory and refuses image sources over 128 MB. Idle compaction can be toggled off from a new row in /config. Ships every 1.1 days — 28 releases in the last month.

**Source:** https://releases.sh/anthropic/claude-code

### Claude Code v2.1.301 — Vim Bracket Jump, Multi-line Mod Inputs, Retry Watchdog Bound (October 15, 2026)
243rd release of 2026. Vim mode gains `%` motion to jump to the matching bracket alone or with d/c/y. Mods get a multi-line `rows` input field. `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` bounds unattended retry at usage limits that reset too far away. Fixed quitting removing a `WorktreeCreate` hook's worktree without asking. Ships every 1.2 days — 25 releases in the last month.

**Source:** https://releases.sh/anthropic/claude-code

### October 2026 Stack Overflow Survey: Claude Code at 65.5% Agent Usage — Market Consolidation Underway (October 2026)
The October 2026 Stack Overflow Developer Survey shows Claude Code used by 65.5% of respondents working with AI coding agents, up from just 10% in the 2025 survey. GitHub Copilot sits at 58.7% and OpenAI Codex at 29.5%. Numbers sum above 50% because most developers run multiple agents simultaneously. The rapid rise of Claude Code from 10% to 65.5% in one year marks the most significant market shift in the AI coding tool space since Copilot's 2021 launch.

**Source:** https://tech-insider.org/claude-code-vs-codex-vs-github-copilot-2026/

> **🔎 Fact-Check 2026-10-22 — CORRECTION (figures):** the official 2026 Stack Overflow Developer Survey reports **Claude Code 66%** and **GitHub Copilot 59%** as the leading coding agents — not the decimal figures 65.5% / 58.7% (those appear to be unsourced derivations from a secondary blog). **OpenAI Codex at 29.5% could not be located in the official survey**: the string "Codex" does not appear anywhere on the 2026 AI survey page.
> **CORRECTION (year-over-year baseline):** "up from just 10% in the 2025 survey" is not supported. The 2025 survey lists **Claude Code at 40.8%** in its "out-of-the-box agents, copilots or assistants" question (ChatGPT 81.7%, GitHub Copilot 67.9%, Google Gemini 47.4%). The 2025 and 2026 questions are worded differently (out-of-the-box assistants vs. coding agents), so the two numbers are not directly comparable.
> **Sources:** https://survey.stackoverflow.co/2026/ai · https://survey.stackoverflow.co/2025/ai
## 2026-10-21

### Claude Code v2.1.305 — Regression Fix for Vertex, Bedrock, and Tool Search (October 20, 2026)
249th release of 2026. Fixes a v2.1.304 regression where every request failed on Vertex, Bedrock, and other providers when the endpoint or gateway rejects tool search, or when ToolSearch was disallowed or omitted from --tools — Claude Code now retries without it. Also changed allowedMcpServers to stop filtering managed-mcp.json stdio servers that use ${VAR} only in env, so such servers now load on upgrade unless listed in deniedMcpServers, and added sandbox.allowNestedUserNamespaces for Linux sandboxed commands. Ships every 1.1 days — 31 releases in the last month.

**Source:** https://releases.sh/anthropic/claude-code

> **🔎 Fact-Check 2026-10-22 — CORRECTION (release ordinal):** v2.1.305 is the **247th** release of 2026, not the 249th. The Oct-22 entry in this same file correctly numbers v2.1.306 = 248th and v2.1.307 = 249th, so "249th" here duplicates the ordinal of v2.1.307. The GitHub release feed confirms the sequence and dates: v2.1.304 (Oct 19), v2.1.305 (Oct 20), v2.1.306 (Oct 21), v2.1.307 (Oct 21).
> The substance of the entry (v2.1.304 regression on Vertex/Bedrock when tool search is rejected or omitted from `--tools`, `allowedMcpServers` no longer filtering managed-mcp.json stdio servers that use `${VAR}`, new `sandbox.allowNestedUserNamespaces`) is **confirmed verbatim** in the v2.1.305 release notes.
> The trailing cadence line ("every 1.1 days — 31 releases in the last month") also conflicts with the sibling Havoptic pages for v2.1.306/v2.1.307, which state **"every 1.3 days — 23 releases"**.
> **Sources:** https://api.github.com/repos/anthropics/claude-code/releases (tags v2.1.304–v2.1.307) · https://www.havoptic.com/r/claude-code-2.1.306 · https://www.havoptic.com/r/claude-code-2.1.307
### OpenAI Codex CLI v0.163.0 — Mid-Turn Steering Default, /config Panel, Daybreak Enabled (October 15, 2026)
110th release. Now lets you send a follow-up prompt while Codex is still thinking to steer the response immediately, with interrupts stopping active Code Mode cells and nested tool calls. Adds a configurable leader key via /keymap (default Ctrl+X) and enables Daybreak by default for eligible accounts. /config now searches preferences across categories and flags which changes need a restart. Daemon management adds restart from /daemon with automatic reconnection. Ships every 1.1 days — 16 releases in the last month.

**Source:** https://releases.sh/openai/codex

> **🔎 Fact-Check 2026-10-22 — CORRECTION (release ordinal):** the same release is numbered **"108th release of 2026"** in the 2026-10-16 section of this file and **"110th release"** here — the two entries contradict each other. Neither ordinal is independently verifiable (the Codex release feed does not publish ordinals), and the wider ordinal series in this corpus is inconsistent. Recommendation: drop the ordinal or resolve it against a single counter. Release identity itself is confirmed: **rust-v0.163.0, published October 15, 2026**, with mid-turn steering, configurable leader key (default Ctrl+X), Daybreak enabled by default for eligible accounts, `/config` preference search, and `/daemon restart` with automatic reconnection.
> **Sources:** https://api.github.com/repos/openai/codex/releases (tag rust-v0.163.0) · https://developers.openai.com/codex/changelog · https://www.havoptic.com/r/openai-codex-rust-v0.163.0
### OpenAI Codex — GPT-5.5 Retired, GPT-6.1 Sol Now Default (October 14, 2026)
GPT-5.5 was retired from Codex for ChatGPT users effective October 14 at noon PDT — API and API-key-authenticated sessions are unaffected. GPT-6.1 Sol is now the default model in the bundled and Amazon Bedrock catalogs. Workspace defaults, saved model settings, and scripts selecting gpt-5.5 should be updated to GPT-6.1 Sol (gpt-6.1-sol). GPT-6.1 Sol Ultrafast mode is available on Pro $500 and eligible Enterprise/Edu plans with inference residency in the US and Europe.

**Source:** https://releases.sh/openai/codex

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (primary source):** the Codex changelog confirms GPT-5.5 retirement **effective October 14, 2026 at noon PDT (19:00 UTC)** for users signed in with ChatGPT, that the retirement **does not apply to the OpenAI API**, and that `gpt-6.1-sol` is now the default where available; workspace defaults, saved model settings, managed configurations, custom agents, scheduled tasks and scripts selecting `gpt-5.5` must be updated.
> **Sources:** https://developers.openai.com/codex/changelog · https://releases.sh/openai/codex
### Gemini CLI v0.63.0 / v0.64.0 — Atomic File Operations, Chat Recording Optimization (October 6–13, 2026)
Google's open-source agent gained atomic file tool operations with serialized writes and automatic CLI state recovery from backup on corruption. ChatRecordingService now uses append-only delta patching and bounded history windowing to optimize memory and disk during long-running sessions. Terminal UI stability fixes: Ctrl+C abort reaches cancellation handlers reliably, Enter/Spacebar confirm selection lists dependably, Windows ConPTY IME cursor forwarding fixed, @file:line references resolved, and quote swallowing on @ within code blocks prevented. v0.64.0 was the stable release as of October 13.

**Source:** https://geminicli.com/docs/changelogs/latest/

> **🔎 Fact-Check 2026-10-22 — PARTIAL CORRECTION (feature attribution):** the atomic file-tool writes, atomic CLI state persistence with backup recovery on corruption (#29499, #29558) and the ChatRecordingService append-only delta patching with bounded history windowing (#29568) are **v0.64.0 (Oct 13)** features. **v0.63.0 (Oct 6)** added autonomous plan execution in non-interactive mode (#29539), bounded tool output sizes and memory-lifecycle fixes in long-running agent loops (#29451, #29448). "v0.64.0 was the stable release as of October 13" is confirmed.
> Three sub-claims are **not** in Google's changelog and remain **unverified**: "Enter/Spacebar confirm selection lists dependably", "Windows ConPTY IME cursor forwarding fixed" and "quote swallowing on @ within code blocks prevented" — the vendor announcement describes preventing **CPU hangs on @ in code blocks**, resolving `@file:line` references, and ensuring Ctrl+C emergency aborts reach cancellation handlers. Please either cite the GitHub release notes for those three or drop them.
> **Sources:** https://geminicli.com/docs/changelogs/ · https://github.com/google-gemini/gemini-cli/releases
### Kiro CLI v0.9.0 — Crew Multi-Agent Dashboard, Token Estimation, Slack/Telegram Integration (October 15, 2026)
Major release adds Crewmates dashboard: each crewmate card shows goal, completion status, and next step; Profile card displays permissions, model, reasoning effort, schedules, and session history. Remote crew sessions open as live windows onto another machine when peer crews are reachable. Composer warns when a prompt nears the model's context window, holding it until confirmed on second send. Usage tab gains Estimated Tokens card and daily history column. Slack integration connects persistent sessions to Slack threads automatically; Telegram serves each forum topic as its own session. Pricing plan estimation added.

**Source:** https://kiro.dev/changelog/

> **🔎 Fact-Check 2026-10-22 — CORRECTION (product name, date, one feature):** the product is **Kiro Crew 0.9.0** — *not* "Kiro CLI v0.9.0" (Kiro CLI is a separate product/version line, currently v2.x). The changelog entry is dated **October 16, 2026**, not October 15. The Crewmates dashboard (goal / completion status / next step per crewmate), the Profile card (permissions, model, reasoning effort, schedules, session history), remote crew windows, the context-window warning on near-limit prompts, the Estimated Tokens card with daily history, Slack thread sessions and Telegram per-topic sessions are all **confirmed**.
> **CORRECTION:** "Pricing plan estimation added" is **not** in the changelog and could not be verified — remove it or replace it with the verified "Estimated Tokens" usage card.
> **Sources:** https://kiro.dev/changelog/ · https://www.havoptic.com/r/kiro-crew-0.9.0
### Q4 2026 Funding: $872.5M Across 5 Rounds — Manus Confirms $500M+, Stuut $52.5M, Hone $60M (October 2026)
Gravity Fast's Q4 tracker: five disclosed rounds totaling $872.5 million as of October 16, 2026. Manus AI confirmed $500 million+ in its first funding round since Meta deal collapse, with Boyu Capital leading and Tencent participating. Stuut raised $52.5 million Series B (Insight Partners) for AI-driven order-to-cash finance automation. Hone raised $60 million seed (Benchmark, Index Ventures) for outcome-responsibility agents that take ongoing business accountability over weeks or months. Photon raised $4.5 million seed for agent infrastructure embedding AI in messaging apps. Q4 pace running at 0.31 rounds per day versus Q3's 0.64 rounds per day.

**Source:** https://gravity.fast/data/ai-agent-funding-tracker/

> **🔎 Fact-Check 2026-10-22 — CORRECTION (attribution):** "Manus AI **confirmed** $500 million+" overstates the source. The tracker records Manus at a **$500.0M floor** because the underlying report says "more than $500 million"; the **stage is listed as "Not stated"**, and the reported **$4B valuation is an unconfirmed Bloomberg figure from September**. Boyu Capital leading with Tencent participating, Stuut $52.5M Series B (Insight Partners led; a16z and M12 participated), Hone $60M seed (Benchmark, Index Ventures), Photon $4.5M seed and the 0.31-vs-0.64 rounds/day pace are all **confirmed**.
> **Sources:** https://gravity.fast/data/ai-agent-funding-tracker/ · https://www.finsmes.com/2026/10/stuut-raises-52-5m-in-series-b/ · https://www.finsmes.com/2026/10/hone-raises-60m-in-funding-at-285m-valuation/
### Agentic AI Enterprise Adoption: 78% Fortune 500 Deployment Projected, 31% Production Agents (October 2026)
Agentic AI adoption enters mainstream phase: 78% of Fortune 500 companies are projected to deploy agentic AI by end of 2026 (up from 67% in 2025), with the global market expected to reach $89.6 billion. Q3 2026 data shows 31% of enterprises now run AI agents in production. Enterprise ROI averages 540% within 18 months. BCG's 2026 Applied AI Index finds almost 50% of companies now generate value from AI, with agentic AI driving the next wave of enterprise productivity gains.

**Source:** https://axis-intelligence.com/agentic-ai-adoption-statistics-2026/

> **🔎 Fact-Check 2026-10-22 — CORRECTION (two claims unsupported by the cited source):** the cited article (Axis Intelligence, dated **December 19, 2025**) contains **no "31% of enterprises run AI agents in production"** figure and **no mention of BCG or an "Applied AI Index"**. Its 540% ROI figure is attributed inside the article to "**McKinsey's 2025 Year-End AI Report**" (median ROI for mature implementations) — not to BCG — and no McKinsey publication carrying that figure could be independently confirmed. The **BCG Applied AI Index 2026 claim is itself real** ("almost 50% of companies generate value from AI"), but it must be cited to BCG's own press release, not to this article.
> Confirmed from the cited source: 78% of Fortune 500 projected to have active production agentic AI deployment in 2026, up from 67% in 2025; global agentic AI market forecast of **$89.6B (215% YoY from $28.4B in 2025)**; enterprise ROI averaging 540% within 18 months; ~$890,000 average implementation cost.
> **Sources:** https://axis-intelligence.com/agentic-ai-adoption-statistics-2026/ · https://www.bcg.com/press/30september2026-ai-starting-to-pay-off-companies-generate-value
## 2026-10-22

### Claude Code v2.1.306 + v2.1.307 — Two Releases in One Day, Safety Telemetry Event, MCP Duplicate-Call Fix (October 21, 2026)
248th and 249th releases of 2026. v2.1.306 fixed `claude -p` inside cloud sessions falsely reporting "Not logged in" when started without the session's environment variables, and fixed an API error being masked as "prompt is too long" plus an unnecessary compaction in sessions with many MCP tools. v2.1.307 added `/claude-api api-version` to move Claude API code to API version 2026-10-21, and added a new `claudecode.safetyevent` OpenTelemetry event emitted for every tool call that a permission rule, auto mode, a safety check, a hook, or the sandbox stopped, prompted, or sent back. v2.1.307 also fixed HTTP MCP tool calls being sent twice when the connection closed mid-call (only read-only or idempotent tools are now retried), MCP servers reported as timed out after macOS/Linux sleep, MCP servers showing "needs authentication" while the macOS login keychain was locked, "Autocompact is thrashing" errors on turns reading many PDFs/images, model switches through the Agent SDK's setModel() being refused when the API took more than 5 seconds to confirm (now waits 15 seconds), and /permissions > Recently denied not showing the denied shell command. Ships every 1.4 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.306
**Source:** https://www.havoptic.com/r/claude-code-2.1.307

> **🔎 Fact-Check 2026-10-22 — CORRECTION (exact event name):** the OpenTelemetry event is **`claude_code.safety_event`**, not `claudecode.safetyevent`. The v2.1.307 release notes give the event name verbatim as `claude_code.safety_event`.
> All other claims verified against the GitHub release notes: `/claude-api api-version` moving Claude API code to API version `2026-10-21`; `claude -p` in cloud sessions falsely reporting "Not logged in" without session env vars; API error masked as "prompt is too long" plus an unnecessary compaction in MCP-heavy sessions; HTTP MCP tool calls sent twice when the connection closed mid-call (only read-only/idempotent tools retried); MCP servers reported as timed out after macOS/Linux sleep; "needs authentication" while the macOS keychain was locked; "Autocompact is thrashing" on PDF/image-heavy turns; Agent SDK `setModel()` refusing switches when the API took more than 5 seconds (now waits 15 seconds); `/permissions` > Recently denied not showing the denied shell command.
> Cadence line corrected: the Havoptic pages for v2.1.306 and v2.1.307 both state **"every 1.3 days — 23 releases"**, not "every 1.4 days — 25 releases".
> **Sources:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.307 · https://www.havoptic.com/r/claude-code-2.1.306 · https://www.havoptic.com/r/claude-code-2.1.307
### Antigravity CLI v1.4.4 — Auto Mode Comes to Windows 11 24H2+, Combined Per-Turn Diffs (October 21, 2026)
72nd release of 2026. Auto mode now runs on Windows 11 version 24H2 and later for personal Google Accounts, selectable via `--mode auto`, Agent Mode in /config, Shift+Tab, or Remote Control Settings (Agent remains the default). /diff gains a whole-file toggle (f) and hunk folding (Ctrl+O) in Commit Tree and Per Turn views, and Per Turn diffs are consolidated so multiple edits to one file in a turn show as a single combined diff. Adds `meta["antigravity.google/rootconversationid"]` to MCP tools/call requests so MCP servers receive the top-level conversation ID even from nested subagents. Auto mode's sandbox-escape review now includes the assistant's preceding question on short replies like "yes", checks every subcommand in pipelines, and prompts before destructive Git or file commands. `agy plugin validate` gained stricter checks across plugin.json, MCP server configs, hooks.json, and sidecar manifests. /compact and automatic compaction now retain tool declarations on summarization requests so the model API reuses its cached prompt prefix. Fixed subagents losing plugins inherited from the parent session and rules/SKILL.md skills loading twice. Ships every 1.4 days — 21 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.4

> **🔎 Fact-Check 2026-10-22 — CORRECTION (exact metadata key):** the key added to MCP `tools/call` requests is **`_meta["antigravity.google/root_conversation_id"]`** (leading underscore, snake_case) — not `meta["antigravity.google/rootconversationid"]`.
> Everything else is **confirmed** by Google's own changelog for v1.4.4 (October 21, 2026): Auto mode on Windows 11 24H2+ for personal Google Accounts via `--mode auto`, Agent Mode in `/config`, Shift+Tab or Remote Control Settings (Agent remains default); whole-file toggle (`f`) and hunk folding (`Ctrl+O`) in the Commit Tree and Per Turn views of `/diff`; consolidated Per Turn diffs; improved sandbox-escape review (includes the assistant's preceding question on short replies like "yes", checks every subcommand in pipelines, prompts before destructive Git or file commands); stricter `agy plugin validate` across `plugin.json`, MCP server configs, `hooks.json` and sidecar manifests; `/compact` and automatic compaction retaining tool declarations for prompt-prefix cache reuse; fixes for subagents losing inherited plugins and for rules/SKILL.md skills loading twice.
> **Sources:** https://antigravity.google/docs/changelog · https://www.havoptic.com/r/antigravity-cli-1.4.4
### GitHub Copilot CLI v1.0.102 — Managed Auto Model Selection, Subagents Stop Double-Prompting (October 21, 2026)
143rd release of 2026. Prompt mode now honors managed Auto model selection for `-p` and piped stdin runs. Subagents honor custom and MCP tool approvals, avoiding duplicate permission prompts and allowing inherited workflows to run. Long-running sandboxed commands continue running reliably past 10 seconds. Replies cut off by a provider overload error now retry with backoff and surface the provider's message and request ID. Sandboxed network traffic honors NOPROXY and ALLPROXY when inheriting host proxy settings. Plugin marketplaces accept git-subdir sources and long plugin descriptions; chats no longer get blocked by organization plugin preparation while sending messages. Ships every 2.1 days — 14 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.102

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** published **2026-10-21T18:05:00Z**; the GitHub release notes confirm all six claims verbatim — prompt mode honoring managed Auto model selection for `-p` and piped stdin runs; subagents honoring custom and MCP tool approvals (no duplicate permission prompts, inherited workflows run); plugin marketplaces accepting git-subdir sources and long descriptions; chats no longer blocked by organization plugin preparation while sending; long-running sandboxed commands continuing past 10 seconds; provider-overload replies retrying with backoff and showing the provider's message and request ID; sandboxed network traffic honoring `NOPROXY` and `ALL_PROXY`.
> **Sources:** https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.102 · https://www.havoptic.com/r/github-copilot-v1.0.102
### GitHub Copilot in VS Code v1.143 — Copilot Harness Is Now Default, Side-by-Side Model Comparison (October 21, 2026)
The Copilot harness, built on the Copilot SDK as a shared foundation across Copilot products, is the default for new sessions in VS Code. New `sessions.chat.compareAgents.enabled` setting in the Agents window lets users compare how different models and harnesses approach the same coding task — running attempts in parallel and combining ideas into one solution, mixing Copilot, Claude, and Codex harnesses. Copilot harness sessions can be kept running in the background and accessed from both the VS Code editor window and the Agents window. Large chats open much faster. 13th VS Code Copilot release of 2026, 7 days after v1.142.

**Source:** https://www.havoptic.com/r/copilot-vscode-1.143

> **🔎 Fact-Check 2026-10-22 — PARTIAL VERIFICATION:** only one source could be confirmed for this entry (the Havoptic release page). The VS Code Marketplace extension (`GitHub.copilot-chat`) publishes a different version line (0.48.x), and no second independent source for "Copilot harness default for new sessions" or the `sessions.chat.compareAgents.enabled` setting was located. Keep the entry, but mark it **single-source** until a GitHub changelog or marketplace entry for v1.143 can be cited.
> **Sources:** https://www.havoptic.com/r/copilot-vscode-1.143 · https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat
### Zed v1.25.2 — GPT-6 Astra and Claude Fable 5.1 on Bedrock, ACP Compaction, Secrets-Leak Fix (October 21, 2026)
102nd Zed release of 2026. Added GPT-6 Astra, Claude Fable 5.1, and Claude Opus 5.5 to the Amazon Bedrock provider. Enabled session notices and context compaction for external agents using ACP. Fixed a security bug where environment variables, including secrets, passed to external agents and MCP servers in remote projects were visible in the local machine's process list. Fixed prompts to external agents being slow to send, or never sending, because of unneeded Git checkpoints. Binary size reduced ~33% on macOS, 28% on Windows, 7% on Linux. Removed the force-delete option for remote-tracking branches since it had no effect.

**Source:** https://www.havoptic.com/r/zed-1.25.2

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (two independent sources):** v1.25.2 published **2026-10-21**. Confirmed: GPT-6 Astra, Claude Fable 5.1 and Claude Opus 5.5 added to the Amazon Bedrock provider (#64201, #64685); session notices and context compaction enabled for external agents using ACP (#65414); force-delete option for remote-tracking branches removed because it had no effect (#61793); smaller binaries across macOS/Windows/Linux. The process-list secrets exposure fix and the Git-checkpoint prompt-latency fix are also recorded in the release notes.
> **Sources:** https://api.github.com/repos/zed-industries/zed/releases (tag v1.25.2) · https://www.havoptic.com/r/zed-1.25.2
### OpenClaw v2026.10.5 — Skill Workshop 2.0, Public Conversation Links, Redesigned Sidebar (October 19, 2026)
First stable release of the October line, covering 2,250 pull requests, 411 direct commits, and 637 contributors. Skill Workshop now saves learned procedures directly with change history, saved versions and Undo; legacy proposal modes move to Off while Auto and unset settings are preserved; unused skills are archived after 30 days (disabled for Codex). New public conversation links let anyone with the link read a published transcript without signing in — the notes warn the link exposes existing and future user messages, redaction is best effort, and turning sharing off cannot recall saved copies. Sidebar redesigned with pinnable agents and Subagents and Processes panels beside the parent chat. Stop now reaches a request's running commands and queued follow-ups. Worktree cleanup now runs as a background job with an eviction policy, can remove local changes (including in nested checkouts), and is capped globally by the new worktreeMaxCount key; manual transcript trimming with --max-lines permanently deletes removed text with no backup. Betas 2026.10.10-beta.1 through beta.3 shipped Oct 15-21 with a faster Gateway, Windows reliability fixes, and rejection of a multi-file apply_patch before anything is changed when a later target is missing or mismatched.

**Source:** https://docs.openclaw.ai/releases/2026.10.5

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (primary source):** the release notes state verbatim that this release covers **"2,250 pull requests, 411 direct commits, and 637 contributors"**. Skill Workshop 2.0 (saved procedures with change history, saved versions, Undo; legacy proposal modes → Off; unused skills archived after 30 days, disabled for Codex), public conversation links with the stated redaction/recall caveats, pinnable agents with Subagents and Processes panels, Stop reaching running commands and queued follow-ups, background worktree cleanup with eviction policy and the new `worktreeMaxCount` key, and `--max-lines` permanent transcript trimming are all confirmed, as are the Oct 15–21 betas (2026.10.10-beta.1 … beta.3).
> **Sources:** https://docs.openclaw.ai/releases/2026.10.5 · https://releases.sh/openclaw/openclaw
### Anthropic API Release Notes — Opus 5.5 Fast Mode GA, Inference Hooks Out of Beta for Enterprise (October 20, 2026)
Fast mode for Claude Opus 5.5 is out of research preview and no longer needs the `fast-mode-2026-02-01` beta header; Opus 5 and 4.8 remain in preview. Inference hooks are out of beta for Enterprise. Organization webhooks are in beta behind `webhooks-2026-10-07`. User profiles are available at /v1/user_profiles. Dynamic workflows (2026-10-09) are a beta enabled with `managed-agents-2026-04-01` and `multiagent: {"type": "multiagent_20261001", "workflows": {"type": "enabled"}}`. OpenTelemetry export is in beta (2026-10-14). On 2026-10-15, `capabilities.thinking.types.between_tools` was added to the model capabilities response. No deprecations announced.

**Source:** https://platform.claude.com/docs/en/release-notes/overview

> **🔎 Fact-Check 2026-10-22 — CORRECTION (date):** fast mode for Claude Opus 5.5 left research preview on **October 15, 2026**, not October 20 — the release notes entry is dated "On 2026-10-15", and requests that still send the `fast-mode-2026-02-01` beta header continue to work. The rest of the entry is **confirmed**: Opus 5 and 4.8 remain in preview; inference hooks out of beta for Enterprise; organization webhooks in beta behind `webhooks-2026-10-07`; user profiles at `/v1/user_profiles`; dynamic workflows (2026-10-09) enabled by `managed-agents-2026-04-01` plus `multiagent: {"type": "multiagent_20261001", "workflows": {"type": "enabled"}}`; OpenTelemetry export beta (2026-10-14); `capabilities.thinking.types.between_tools` added on 2026-10-15; no deprecations announced.
> **Sources:** https://platform.claude.com/docs/en/release-notes/overview · https://www.havoptic.com/r/claude-code-2.1.307
### Hermes 0.22.3 — ~620 PRs, MCP Progress Notifications, Plugin-Declared OAuth Clients (October 21, 2026)
Update to 0.22.3, not 0.22.1 — v0.22.1 (Oct 14) was built from the wrong commit, which v0.22.2 (Oct 15) states outright, and sessions run under the 0.22.1 gateway cannot be deleted in 0.22.2. v0.22.2 also fixes supervised gateways (systemd, launchd, Docker) refusing to start after a reboot because of a reused PID, and adds local-model stability fixes. v0.22.3 rolls up about 620 PRs: MCP progress notifications as live tool progress, `hermes plugins update`, plugin-declared OAuth clients, a post_compaction plugin hook, a guided subagent model and provider picker in Desktop, and opt-in Telegram DM topic transfer. Session auto-prune is back to opt-in. The 0.22.0 line (Oct 13) added a stable release channel (`hermes update --set-channel main`), hermes connectors, and /new and /reset replacing idle and daily session resets.

**Source:** https://github.com/NousResearch/hermes-agent/releases

> **🔎 Fact-Check 2026-10-22 — CORRECTION (outdated guidance):** **v0.22.4** was published later on the same day (2026-10-21 18:49 UTC vs. v0.22.3 at 12:21 UTC), so "Update to 0.22.3, not 0.22.1" is already outdated — the actionable instruction is **"update to 0.22.4"**. v0.22.4 is a patch release (desktop no longer shows suggestion pills above the composer, plugins that install nothing skip the dependency consent step, WhatsApp can be safely re-paired after logging out, desktop plugin-review lint change, approval-mode chip follows the active profile's mode, slower-storage build fix) and adds bubblewrap, Singularity/Apptainer, mcp-serve and agent-importers to the plugin catalog.
> The v0.22.3 content is **confirmed verbatim**: ~620 merged PRs rolled up since v0.22.2 (measured at commit `5b147ab036d`), MCP progress notifications as live tool progress, `hermes plugins update`, plugin-declared OAuth clients, the `post_compaction` plugin hook, the guided subagent model/provider picker, opt-in Telegram DM topic transfer, and session auto-prune returning to opt-in.
> **Sources:** https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.3 · https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.4
### Gemini 4 Argon Goes GA with Introductory Pricing That Doubles December 1 (October 13, 2026)
Google describes `gemini-4-argon` as its most capable model for complex coding, agentic, math and science tasks. Pricing is introductory at $2 input and $10 output per million tokens through 2026-11-30, then $4 and $20 from 2026-12-01 (output includes thinking). Google's pricing page does not state a context window. `gemini-3.8-flash` and `gemini-3.6-flash` are listed at $0.75 and $3.75 through 2026-12-31, then $1.50 and $7.50. `gemini-3.7-flash` is deprecated. Separately, OpenAI added 12-hour prompt caching.

**Source:** https://ai.google.dev/gemini-api/docs/changelog

> **🔎 Fact-Check 2026-10-22 — CORRECTION (context window + OpenAI date):** pricing is **confirmed** — `gemini-4-argon` introductory at $2 input / $10 output per Mtok through 2026-11-30, then $4 / $20 from 2026-12-01 (output includes thinking); `gemini-3.8-flash` and `gemini-3.6-flash` at $0.75 / $3.75 through 2026-12-31, then $1.50 / $7.50; `gemini-3.7-flash` deprecated; Gemini 4 Argon GA announced 2026-10-13. However, "Google's pricing page does not state a context window" is **inaccurate** — the pricing page does reference generation "up to 1M tokens", so a context-window statement is present on that page (as a model capability note rather than a dedicated field).
> **CORRECTION:** OpenAI's 12-hour prompt caching was announced **October 20, 2026**, not October 13 — separate it from the Gemini 4 Argon GA item.
> **Sources:** https://ai.google.dev/gemini-api/docs/pricing · https://ai.google.dev/gemini-api/docs/changelog · https://developers.openai.com/codex/changelog
### NemoClaw v0.0.137 — Nemotron 3.5 Super VL Becomes the Default Hosted Model (October 20, 2026)
New onboarding defaults to NVIDIA Nemotron 3.5 Super VL. v0.0.137 changes the default hosted model for new OpenClaw and Hermes onboarding on NVIDIA Endpoints to `nvidia/nemotron-3.5-super-vl-120b-a12b` (OpenRouter uses `nvidia/nemotron-3.5-super-vl`); explicit model choices are unchanged. Also lets `nemoclaw <sandbox> agent` take piped messages without `--message`, rejects skill names over 64 characters at install, and makes `onboard --resume` reuse a saved policy preset after a refused write. v0.0.136 binds custom hosted endpoints to a provider attached to the sandbox and adds an experimental Nemotron 3.5 Super VL profile for a single 128 GB DGX Spark (64 GB and unknown-memory systems are rejected before install). Existing sandboxes keep their old images until rebuilt.

**Source:** https://docs.nvidia.com/nemoclaw/latest/about/release-notes

> **🔎 Fact-Check 2026-10-22 — ✔ VERIFIED (primary source):** NVIDIA's release notes confirm v0.0.137 (October 20, 2026) defaulting new OpenClaw/Hermes onboarding on NVIDIA Endpoints to `nvidia/nemotron-3.5-super-vl-120b-a12b` (OpenRouter: `nvidia/nemotron-3.5-super-vl`) with explicit model choices unchanged; `nemoclaw <sandbox> agent` accepting piped messages without `--message`; skill names over 64 characters rejected at install; `onboard --resume` reusing a saved policy preset after a refused write. The v0.0.136 items (custom hosted endpoints bound to a provider attached to the sandbox, the experimental 128 GB DGX Spark profile that rejects 64 GB and unknown-memory systems before install) and the note that existing sandboxes keep their old images until rebuilt are also confirmed.
> **Sources:** https://docs.nvidia.com/nemoclaw/latest/about/release-notes
### Kilo Code 7.8.15 — Kilo Gateway Default URL, Agent Manager Worktree Dialog Redesign (October 19, 2026)
Seven releases (7.8.8 → 7.8.15) with the gateway default as the change to know: the Kilo Gateway now defaults to `https://ai-gateway.kilo.ai/api/v1`, and `KILO_AI_GATEWAY_URL` overrides it for self-hosted routing. `browser_open` is now an always-allow tool, and the Agent Manager's worktree dialog was redesigned.

**Source:** https://github.com/Kilo-Org/kilocode/releases

> **🔎 Fact-Check 2026-10-22 — CORRECTION (which release carried which change):** the gateway default **is** `https://ai-gateway.kilo.ai/api/v1` with `KILO_AI_GATEWAY_URL` as the override — but that shipped in **v7.8.12 (Oct 15)**, not v7.8.15: "Route Kilo Gateway traffic (chat, models, embeddings, autocomplete, transcription) through `https://ai-gateway.kilo.ai/api/v1` by default, and support a `KILO_AI_GATEWAY_URL` environment variable to override it. Setting only `KILO_API_URL` keeps routing gateway traffic through that server."
> **CORRECTION:** `browser_open` is **not** "an always-allow tool". v7.8.15 makes the `browser_open` permission prompt **remember your choice** — the prompt offers the current origin and all origins as **always-allow rules**, and Auto-Approve settings list `browser_open` so Integrated Browser navigation can be allowed without answering each request. The Agent Manager **New Worktree dialog redesign** shipped in **v7.8.13** (base-branch picker next to the project, optional branch name, version picker, Advanced section removed).
> **Sources:** https://api.github.com/repos/Kilo-Org/kilocode/releases/tags/v7.8.12 · https://api.github.com/repos/Kilo-Org/kilocode/releases/tags/v7.8.13 · https://api.github.com/repos/Kilo-Org/kilocode/releases/tags/v7.8.15
### Community Report: Auto Mode Silently Declines Subagent Launches and Ignores Permission Changes (October 2026)
An open Claude Code GitHub issue reports that auto mode "suddenly started to decline launching subagent and rejecting them for no reason and even when i try to change that though permission it isn't accepted" — a user on macOS/iTerm with v2.1.295 who cannot override the classifier's refusal through the permission UI. A second related issue (#87850) reports the auto-mode permission classifier denying allowed operations silently with incorrect remediation guidance. Both point to the same underlying friction: auto mode's classifier can block an operation with no working user-side escape hatch, which is especially damaging now that fork subagents are default-on across CLI, SDK, desktop app, and VS Code.

**Source:** https://github.com/anthropics/claude-code/issues/102325
**Source:** https://github.com/anthropics/claude-code/issues/87850

> **🔎 Fact-Check 2026-10-22 — CORRECTION (quotation + issue chronology):** the quoted text is **not verbatim** — issue #102325 reads "suddenly started to **decline lunching subagent** and rejecting them for no reason and even when i try to change that though permission it isn't accepted" ("lunching", a typo in the original). The report of the user on macOS/iTerm with **v2.1.295** and the inability to override the classifier through the permission UI is otherwise accurate.
> **CORRECTION (chronology):** issue **#87850 is dated August 19, 2026**, not October, and describes a **separate variant** — an API safety check blocking the classifier request itself — rather than "a recent occurrence of silent classifier denials". Presenting it as a current October report is misleading; keep it as background evidence of the same friction.
> **Sources:** https://github.com/anthropics/claude-code/issues/102325 · https://github.com/anthropics/claude-code/issues/87850
## 2026-10-24

### Claude Code v2.1.310 — Monitor Tool Reaches Bedrock/Vertex/Foundry, Gateway Beta-Header Retries (October 23, 2026)
Published 2026-10-23T23:39Z. Added the Monitor tool plus plugin monitors on Bedrock, Vertex and Foundry, and when telemetry or nonessential traffic is disabled; long foreground sleeps are now blocked on those providers. Requests that fail behind some gateways and compatible servers rejecting the `effort-2025-11-24` beta value or mid-conversation system messages are retried without them. Fixed background cleanup deleting recent files (pasted images) when `cleanupPeriodDays` is set very large; fixed compaction after a "Prompt is too long" error keeping too much dense text (base64, SVG) so the next request could fail again; fixed file-read permission prompts not showing where a symbolic link leads; fixed a question's auto-continue timeout firing the moment an external editor closed. Windows: PreToolUse and PermissionRequest hooks could let a tool call through when Git Bash is missing and the hook command was only quoted strings. Auto mode's prompt before the first read outside the working directories now says that blocking those reads makes shell commands ask for permission. Linux: `/sandbox` and the sandbox startup warning now name Ubuntu's AppArmor restriction on user namespaces and how to lift it when bubblewrap cannot start the sandbox. Memory use of non-interactive (`-p`, Agent SDK) sessions improved during compaction with very large transcript files.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.310
### Claude Code v2.1.309 — Sandbox and Permission-Check Hardening Batch (October 22, 2026)
Published 2026-10-22T22:18Z. Sandboxed Bash commands on macOS and Linux no longer run the shell's startup files outside the sandbox before each command. macOS sandbox `denyWrite` glob patterns now apply at a path's real location when reached through a symlink. Sandboxed commands and auto-accepted edits can no longer modify the MCP config file passed with `--mcp-config`; a disabled MCP server is no longer reconnected by a later permission prompt in print and SDK sessions. Bash permission checks no longer trust a variable set by a command whose redirect can fail to open, and now prompt for compound commands that change directory before running git even when the `cd` is wrapped or prefixed. An `Edit(path)` deny rule now blocks a Bash redirect to that path in commands holding a subshell. Worktree-isolated sessions refuse locale-prefixed and zsh arithmetic commands the isolation guard should reject; worktrees and branch checkouts now ignore git replace refs. Profile store write protection now applies through a symlinked config directory. Fixed sessions compacting repeatedly after reading files under a very large nested CLAUDE.md (an over-limit nested file now loads only its start), ctrl+enter queuing behavior, key-bound slash commands running in the shell from `!` mode, ctrl+o hiding undelivered messages from other agents/sessions, and long tool-output previews cutting through an emoji so `jq` could no longer parse session transcripts.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.309
### Claude Code v2.1.308 — Maintenance Release (October 22, 2026)
Published 2026-10-22T04:34Z. Release notes contain only "Bug fixes and reliability improvements" — no new features, no changelog detail published.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.308
### OpenAI Codex CLI rust-v0.164.0 — `/presets` Slots, Inline Model/Permission Args, Terminal Image Preview (October 23, 2026)
Published 2026-10-23T04:48Z. New: reusable prompts and slash commands in ten numbered `/presets` slots with a keyboard menu; model, reasoning effort, speed and permission profiles settable directly via inline `/model` and `/permissions` arguments; preview of viewed and generated images in the fullscreen transcript on Kitty or Sixel terminals; enterprise MCP connections authenticated via eligible Codex account grants or dedicated sign-in (including OAuth clients requiring secrets); credential masking during supported remote Bash commands and Zsh snapshot sessions, including custom-provider credentials; the Amazon Bedrock setup wizard enabled by default with API key entry grouped with other AWS sign-in methods. Fixes: failed compaction no longer leaves partial summaries in history and background compaction failures fall back without panicking; resuming sessions finds compressed histories and restores saved thread settings instead of replacing them with global defaults; Windows HTTPS/WebSocket handles proxy authentication challenges using the signed-in user's Negotiate or NTLM credentials; `-c`/`--config` overrides preserved when they appear at multiple subcommand levels; queued prompts wait for pending permission selections to resolve; sandbox checks hardened for case-variant metadata paths on macOS and replaceable symlinks used to locate executables. Chores: disk usage reduced by pruning unused installations, cleaning abandoned marketplace checkouts, bounding daemon logs. A `rust-v0.165.0-alpha.1` prerelease followed the same day.

**Source:** https://api.github.com/repos/openai/codex/releases/tags/rust-v0.164.0
### Antigravity CLI v1.4.5 — Idle CPU Halved, Cron Schedules Spread, Infinite Safety-Retry Fixed (October 22, 2026)
Published 2026-10-22T05:01Z. Idle CPU roughly halved by pausing screen refreshes when nothing on screen changes; lower CPU while a response streams, faster rendering and loading of long conversations, lower startup CPU when refreshing conversation summaries, and memory allocated for prompt text as you type instead of reserved up front. Agent responses read better: a blank line separates the collapsed thought block from the response, and the collapsed block then shows only its "Thought for …" header. `/diff` search now counts matches inside folded unchanged lines ("match 2/5 · +3 hidden") and `/diff`'s Commit Tree marks the selected commit with the same cursor/selection color as All Changes and Per Turn. Recurring cron schedules created with the agent's schedule tool now fire at a consistent per-schedule offset instead of exactly on the cron boundary, to avoid traffic spikes (fixed-time schedules such as daily at 9:00 still fire within their scheduled minute). Fixed the agent silently retrying, potentially without end, when a model response was blocked by content safety filters. Fixed plugins failing to load when `plugin.json` gives `skills` as a single path string instead of an array, and marketplace plugin installs/auto-updates failing on checksum mismatch or interrupted downloads (now retried once).

**Source:** https://api.github.com/repos/google-antigravity/antigravity-cli/releases/tags/1.4.5
### Antigravity CLI v1.4.6 — Sandbox Blocks Docker/Kube Credentials, Compaction Keeps Attachments, Plugin MCP Variables Editable (October 23, 2026)
Published 2026-10-23T04:18Z. Added a "Configure MCP servers…" row for installed plugins in `/plugin` so a plugin's MCP server variables can be set or changed without disabling and re-enabling it; plugins with missing values show "⚠ needs setup", each server shows "✓ configured" or the variables it still needs, and saving restarts an enabled plugin's servers. Terminal sandbox defaults now protect more credentials: sandboxed commands can no longer read or modify `~/.docker`, `~/.kube` or `~/_netrc` unless access is granted explicitly — previously `~/.docker` and `~/.kube` were writable inside the sandbox, so Docker registry and Kubernetes cluster credentials were reachable. Context compaction (including `/compact`) now keeps images, PDFs and other attached files in the conversation summary so the agent can still see them after older history is summarized. Permission prompts changed so that allowing an action for the conversation — in the main agent or a subagent — applies across the main conversation and all of its subagents instead of asking again. The in-progress status line now shows what the agent waits on, e.g. "Model unavailable (attempt 2/10), retrying in 12s" with a live countdown. `/diff` highlights the exact changed words within each modified line in every color scheme. `agy plugin validate` gained `--help`, checks context providers, warns about non-existent `skills` entries and reports every `SKILL.md` the plugin loader skips. Fixed terminal commands occasionally failing with "argument list too long" on huge reasoning signatures and text-cursor drift after wide characters (CJK, emoji, tabs, Unicode spaces).

**Source:** https://api.github.com/repos/google-antigravity/antigravity-cli/releases/tags/1.4.6
### GitHub Copilot CLI v1.0.103 — Copyable Original Code Blocks, Sandbox Settings Reach ACP Sessions (October 22, 2026)
Published 2026-10-22T16:21Z. Clicking a completed response code block copies its original code when enabled. ACP sessions now honor saved sandbox settings and the `--sandbox`/`--no-sandbox` flags, including on resume. Cloud replies keep full text when the CLI reconnects after a dropped connection. The sessions browser shows a session's recorded title instead of a generic "Session N" fallback. Model-specific default Responses verbosity now applies correctly for GPT-5 models unless session verbosity is explicitly set. dnx commands can use existing .NET and NuGet sandbox grants when developer-tool access is enabled, and Windows dev-tool shims like `npm.cmd` now receive the same sandbox grants as `npm`. Gemini tool calls avoid 400 schema validation errors for nullable and enum fields. Sessions can resume under mandatory managed model defaults without rejecting saved preferences. Cached local MCP tool snapshots are reused across registered Git worktrees in one repository. Remote launch options got clearer hosting/connection flags and the legacy `--remote`/`--no-remote` startup flags were retired.

**Source:** https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.103
### GitHub Copilot CLI v1.0.104-0 / v1.0.104-1 — Assisted Permissions Out of Experimental Mode (October 23, 2026)
Prereleases published 2026-10-23T18:49Z and 2026-10-23T21:28Z. Assisted Permissions are available without enabling experimental mode. When a saved Auto preference is no longer available, Auto falls back to its default preference instead of failing each turn. The follow-up prerelease is described only as "Fixes and changes".

**Source:** https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.104-0
### Replit Agent 2026.10.23 — Autonomous On-Call Monitoring Agent, Reusable Skills, Chat Sharing (October 23, 2026)
43rd Replit Agent release of 2026. Platform Monitoring Agent: the agent can investigate production issues using the app's logs and metrics, then attempt and validate fixes; Monitoring alerts plus Auto-fix let it triage alerts in the background, and the experimental Auto-republish setting publishes validated fixes automatically, otherwise fixes are reviewed manually. "Create and update skills with Agent" turns workflows from conversations and projects into reusable workspace skills — the agent suggests new skills or improvements to existing ones for review and approval before saving. Chat and asset sharing lets a whole chat or single asset be shared with selected teammates or the whole workspace; access is read-only and includes the chat's assets and development URLs, which open live servers rather than isolated read-only previews. Eligible top-up customers can keep published apps running at zero credits up to an overage limit (Paid Agent pauses, Free mode stays available, warning emails before suspension, new credits repay the overage first).

**Source:** https://www.havoptic.com/r/replit-agent-2026-10-23
### Amp 2026.10.22 — Self-Hosted Orbs (October 22, 2026)
88th Amp release of 2026. Orbs can now be self-hosted: `amp orb provider ./dispatch.sh` runs inside your own infrastructure, reaches out to Amp and waits for requests to spawn, pause or delete orbs, dispatching each operation to a program you provide. Illustrative dispatch targets given by Amp: Docker, E2B, Kubernetes, Apple containers, Modal, Vercel, Daytona and exe.dev — the stated requirement is compute that can start new machines quickly, pause and resume them equally fast, keep them around, and scale to zero.

**Source:** https://www.havoptic.com/r/amp-self-hosted-orbs
### OpenCode v1.19.4 — Bundled Bun 1.4.4 With Security Fixes (October 22, 2026)
Published 2026-10-22T13:03Z. The bundled Bun runtime was upgraded to 1.4.4, which includes security fixes for Brotli, TLS, HTTP/1.1, HTTP/2, HTTP/3, WebSocket and `fetch`, plus root certificate updates to NSS 3.131.1.

**Source:** https://api.github.com/repos/sst/opencode/releases/tags/v1.19.4
### Zed v1.25.3 — Dependency Updates Patch Ecosystem Vulnerabilities (October 23, 2026)
103rd Zed release of 2026, two days after v1.25.2. The release contains a single change: updated dependencies to address recent software ecosystem vulnerabilities (PRs 66023, 65963) — quiet security maintenance.

**Source:** https://www.havoptic.com/r/zed-1.25.3
### Factory Droid v0.247.0 — PDF Previews, Files Panel Speed, Environment Session Grouping (October 22, 2026)
53rd Factory Droid release of 2026 (CLI v0.247.0, Desktop v0.204.0), one day after v0.245.1. A PDF preview now shows its first pages right away and draws the rest as you scroll; the Files panel and file previews stay responsive in long sessions; Environment sessions are grouped where they belong.

**Source:** https://www.havoptic.com/r/factory-droid-0.247.0
### Devin Desktop v3.11.212 — Up to 8 Sessions Side by Side, Workspace Grouping, Child Sessions (October 23, 2026)
58th Devin Desktop release of 2026, 11 days after v3.10.67, part of a refreshed "agent command center" redesign. Dragging a session from the sidebar onto an open session shows up to 8 sessions side by side; sidebar sessions can be grouped by workspace with a "+" per group to start a session in that folder; a child session can be started from any session's "More" menu; sessions grouped into Spaces now appear under a parent session in the sidebar.

**Source:** https://www.havoptic.com/r/windsurf-3.11.212
### Claude Duet — Anthropic Enters the Proactive Personal-Agent Market (October 21, 2026)
Anthropic opened a research preview of Claude Duet, its first assistant built to start the conversation rather than wait for a prompt: it sends a morning brief across connected apps, re-checks those apps every few hours and alerts the user only when something needs attention, and keeps working in its own cloud virtual machine with its own browser when the laptop is closed. It runs on Claude Opus 5.5, connects to 6,000+ Claude Marketplace connectors and plugins, can build dashboards and forecasts, and can make purchases via Stripe's Link digital wallet or Shopify's Shop Pay. Sensitive steps — sending messages, spending money, signing documents, deleting files — require explicit user approval; it will not trade securities or move money between accounts. A new classifier screens each message and by default refuses requests asking for credit-card numbers or government IDs. Availability is iOS, Android and web for US Pro and Max customers on a waitlist. Anthropic positions Duet for professionals and small businesses, explicitly not for errands or ticket booking, and it cannot show its browser use as it happens. TechCrunch frames it as Anthropic's answer to Meta's Muse (10M+ users, shopping a top activity), OpenAI's Dots and Hark, Instinct and Fo — part of a shift from assistants to agents that act on the user's behalf.

**Source:** https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/
**Source:** https://aitoolsreview.co.uk/insights/claude-duet-proactive-agent
### Funding: October 2026 Rounds Put AI Developer Tools at $1.1B Across 5 Deals (October 2026)
The October 2026 AI funding roundup, updated 2026-10-22, records 72 rounds totalling $41.9B so far in October, led by OpenAI's $20.0B round (stage undisclosed, Oct 1) — Foundation Models & AGI alone accounts for $36.0B across 3 rounds. AI Developer Tools captured $1.1B across 5 rounds; AI Fintech $1.9B across 9 rounds. The median dollar round is $18M; disclosed stages so far are 10 Series A, 10 Seed and 5 Pre-Seed. Named developer-tool rounds include TypeSafe AI's seed led by DCVC (Oct 9) and doubleAI's $200M Series A backed by Nvidia and Dell (Oct 19, $1.0B valuation). The roundup page itself is internally inconsistent on TypeSafe AI — the table lists $870M at a $7.5B valuation while the entry text describes a "$40 million seed round" — so the exact figure should be treated as unverified.

**Source:** https://aifunding.me/roundups/october-2026
### Community Signal: Safeguard False Positives Now Lock Out Whole Claude Code Sessions (October 23–24, 2026)
A burst of new Claude Code issues filed on 2026-10-23/24 shows the safety layer becoming the top friction point. #104735: a single request containing a hex-encoded string decoding to a harmless HTML/clipboard fragment (`<meta charset='utf-8'><code dir="ltr">pbpaste</code>…`) triggered "Sonnet 5's safeguards stopped the response above" and locked the user out of the session ("Start a new session to continue"). #104722 reports Opus 5.5 safeguards blocking a benign message with a reasoning_extraction error, and #104731 reports cyber safeguards blocking security-test planning for a payment plugin. #104740 (opened on 2.1.309, macOS) describes the recurring pattern directly: Opus and Fable repeatedly attempt a complex Bash command, get stopped by the auto classifier, fall back to the native Edit tool, and minutes later try the same oversized Bash command again. Related cost/limits friction: #104736 reports an unbounded recursive `send_later` loop in a remote cloud container that silently burned $285.12 and drained a $250 credit balance over 9.5 days, and #104738 reports the Agent SDK being rejected at the session limit while the desktop app on the same account kept working at 62% of the 5-hour window.

**Source:** https://github.com/anthropics/claude-code/issues/104735
**Source:** https://github.com/anthropics/claude-code/issues/104740
**Source:** https://github.com/anthropics/claude-code/issues/104736
**Source:** https://github.com/anthropics/claude-code/issues/104738
### Community Signal: Codex Desktop and Computer Use Generate a Fresh Issue Cluster (October 23–24, 2026)
OpenAI Codex issues filed on 2026-10-23/24 concentrate in the desktop and remote-control surfaces rather than the CLI: Windows Computer Use shows "Manage" but the Chrome native host registration is missing (#56603); on Windows 10 a community workaround restores foreground capture and clicks, with a request for an official fix (#56587); Calculator and Chrome approvals are denied without an Allow dialog while the browser-only delegated path works (#56591); macOS whole-machine freezes occur during Codex use under severe memory pressure (#56586). Policy friction shows up too: a user asks for clarification of a "blocked by policy" rejection for operation A06 (#56590), and a Scheduled Work task loses workspace write and network permissions while the identical Terminal command succeeds (#56599). Other reports cover Android Remote pairing failing with both QR and manual code (#56600), a chat branching that drops secondary workspace folders (#56606), and existing chats locked after an update while the original app-server keeps running (#56598).

**Source:** https://github.com/openai/codex/issues/56603
**Source:** https://github.com/openai/codex/issues/56590
**Source:** https://github.com/openai/codex/issues/56599
**Source:** https://github.com/openai/codex/issues/56587

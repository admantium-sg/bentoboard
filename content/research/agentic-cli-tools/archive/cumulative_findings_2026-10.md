## 2026-10-05

### Claude Code v2.1.289 — Security Fix, Permission Rules on Managed Machines (October 3, 2026)
234th release of 2026. Fixes a deny or ask rule on a nested part of a compound shell command not holding over a user-installed mod's approval on managed machines. Also fixes terminal freezing on short code blocks with many unclosed tags or deeply nested ${ substitutions. Multiple plugin and mod stability fixes included. Ships every 1.5 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.289

### Claude Code v2.1.288 — Draft Recovery, Code Review Limits, Session Navigation (October 2, 2026)
233rd release. Adds `$.ui.selection()` for mods returning the last selected text in fullscreen. Adds draft recovery after Ctrl+C: pressing Up on an empty prompt restores the draft including pasted text and images. New `--max-findings |all` flag for `/code-review` lets you report more or fewer findings, with the choice persisted. Added Ctrl+F to find a session by name and Alt+↑/↓ to jump between groups in the agents view. Ships every 1.4 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.288

### Antigravity CLI v1.2.16 — Config Shortcuts, Resize Performance, Image Subagent (October 3, 2026)
60th release. Adds ←/→ arrow key shortcuts in `/config` to cycle through setting values instantly without dropdowns. Dramatically improves responsiveness during long conversations in altscreen mode: resizing no longer freezes or lags. Mouse text selection in altscreen and artifact viewer now auto-scrolls past edges and preserves lines scrolled off screen when copying. Go command always-allow suggestions now scoped to the specific subcommand (e.g., `go vet`) rather than all `go` commands. Image generation now delegated to a built-in image-generator subagent. Ships every 1.4 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.16

### Antigravity CLI v1.2.15 — Android Termux, Memory Optimizations, Quota Timezone (October 2, 2026)
59th release. Adds prebuilt native Android binaries that run directly in Termux without requiring a proot-distro environment. Sharply reduces memory allocated on every update and redraw — improving responsiveness while typing, scrolling, and streaming. `/usage` now shows quota reset times in local timezone when printing to a terminal. Ships every 1.4 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.15

### OpenAI Codex CLI rust-v0.160.0 — Task History, Guardian Reviews, Windows Sandbox Overhaul (October 1, 2026)
104th release. Browse older tasks in agent command center with keyboard-accessible "Show more." Added opt-in Guardian review capabilities to retrieve earlier user instructions and include context from agent handoffs. Major stability work: unsent queued messages resume after reconnection; terminal UI preserves provider/reasoning/verbosity settings; Windows sandbox PowerShell fallbacks and long-path permissions fixed; SQLite stalls prevented during connection setup. Ships every 1.3 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.160.0

### OpenAI Codex CLI rust-v0.159.1 — GPT-6.1 Sol Default (September 29, 2026)
102nd release. Added GPT-6.1 Sol as the default model in the bundled catalog and Amazon Bedrock Mantle and Runtime catalogs. Ships every 1.3 days — 19 releases in the last month.

**Source:** https://www.gradually.ai/en/changelogs/codex-cli/

### Kiro CLI v2.27.0 — Kiro Workflows GA: Multi-Agent Orchestration (October 1, 2026)
52nd release. Kiro Workflows graduates to general availability — sequence work, fan out in parallel, loop on results, vary agents and models. When enabled, the new Workflows: sub-agent tool is on by default so the main chat can delegate directly to sub-agents or through Workflows. Adds whole-file `#[[file:...]]` references with one-line and line-range selectors plus `#[[folder:...]]` for directory listings. Workspace, global, and MCP prompts now exposed as slash commands with argument hints. Ships every 5.3 days — 6 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/2-27

### Grok Build v1.0.46 — Permission Rules with Symlinks, Faster Session Startup (September 30, 2026)
150th tracked release. Permission rules with relative paths now apply when the working directory contains symlinks, and video cards no longer get stuck extracting posters without ffmpeg. Faster session startup when loading skills from large directories, plus fixes to MCP server source reporting and client rule preservation. Ships every 72 hours.

**Source:** https://releases.sh/xai/grok-build

### Grok Build v1.0.45 — Custom Agents from Plugins, Token File for MCP (September 29, 2026)
149th tracked release. Custom agents from plugins or config can now be chosen directly with spawn_subagent, and MCP servers can use a token file that is re-read on every request so rotating credentials stay fresh. Added colored notice banners above the prompt for selected models and a "Waiting for N subagents…" status when the parent turn is blocked.

**Source:** https://releases.sh/xai/grok-build

### Cline v4.1.23 — Agent Teams Performance, New /compact Command (October 2026)
Agent teams no longer slow down as a session runs or while a teammate is streaming. Every streamed chunk used to re-save the whole team state — one local teams.db reached 1.66 GB with a single run row rewritten ~339k times. Stream chunks and heartbeats now go to live UIs only and are never persisted; only changed entities are written (batched every ~300 ms). New `/compact` slash command summarizes conversation to free up context. Existing team data is compacted automatically the first time it's opened. Ships weekly-ish.

**Source:** https://github.com/cline/cline/releases

### Cline Desktop v0.0.43 — Connectors Tab Refresh (October 2026)
Connectors is now the first and default tab in Customize. A new Browse section lists the full connector catalog in two columns with search. Installed and Browse each have their own search box. Existing users get a one-time "What's new" dialog introducing Connectors.

**Source:** https://github.com/cline/cline/releases

## 2026-10-04

### Claude Code v2.1.288 — Draft Recovery, Code Review Limits, Session Navigation (October 2, 2026)
232nd release of 2026. Adds `$.ui.selection()` for mods returning the last selected text in fullscreen. Adds draft recovery after Ctrl+C: pressing Up on an empty prompt restores the draft including pasted text and images. New `--max-findings |all` flag for `/code-review` lets you report more or fewer findings, with the choice persisted. Added Ctrl+F to find a session by name and Alt+↑/↓ to jump between groups in the agents view. Added re-authenticate prompt when an MCP server requests more OAuth scope mid-call. Built-in `gh api` now works in cloud sessions lacking GitHub CLI. Many fixes: mid-response API timeouts no longer fail the turn for non-interactive/subagent sessions; long conversations that falsely reported zero token usage now auto-compact correctly; `--resume` dropping files after compaction fixed; session titles and memory recall fixed for Mantle/gateway setups rejecting structured outputs. Ships every 1.4 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.288

### Claude Code v2.1.289 — Security Fix, Permission Rules on Managed Machines (October 3, 2026)
233rd release of 2026. Fixes a deny or ask rule on a nested part of a compound shell command not holding over a user-installed mod's approval on managed machines. Also fixes terminal freezing issues. Ships every 1.5 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.289

### Antigravity CLI v1.2.15 — Android Termux, Memory Optimizations, Quota Timezone (October 2, 2026)
58th release. Adds prebuilt native Android binaries that run directly in Termux without requiring a proot-distro environment. Sharply reduces memory allocated on every update and redraw — improving responsiveness while typing, scrolling, and streaming. `/usage` now shows quota reset times in local timezone when printing to a terminal (piped/JSON still use UTC). Fixes: conversation view freezing after rapid terminal resizes in long conversations (auto-reconnect now); credits exhaustion now immediately surfaces "Your AI credits balance is too low to continue" instead of retrying for minutes; UTF-8 BOM in config files (from Notepad/PowerShell on Windows) now loads correctly; global rules and customization files in ~/.gemini/config now readable by the agent. Ships every 1.4 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.15

### Antigravity CLI v1.2.16 — Config Shortcuts, Resize Performance, Image Subagent (October 3, 2026)
59th release. Adds ←/→ arrow key shortcuts in `/config` to cycle through setting values instantly without dropdowns. Dramatically improves responsiveness during long conversations in altscreen (no-flicker) mode: resizing no longer freezes or lags, full-screen view redraws messages immediately at the new width, and interrupting/resuming no longer re-renders every step on screen. Mouse text selection in altscreen and artifact viewer now auto-scrolls past edges and preserves lines scrolled off screen when copying. Go command always-allow suggestions now scoped to the specific subcommand (e.g., `go vet`) rather than all `go` commands. Image generation now delegated to a built-in image-generator subagent that writes prompts, checks up to three attempts, and saves images to the conversation's artifacts. Fixes: background command crashes (OOM kills) now return exit codes so the agent continues; headless `-p` runs no longer exit before the agent responds to a finished background command; skills.json/rules.json manifests in parent .agents/ directories now loaded even when sessions start in subdirectories. Ships every 1.4 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.16

### Kiro CLI v2.27.0 — Kiro Workflows GA: Multi-Agent Orchestration (October 1, 2026)
51st release. Kiro Workflows graduates to general availability — sequence work, fan out in parallel, loop on results, vary agents and models. When enabled, the new Workflows: sub-agent tool is on by default so the main chat can delegate directly to sub-agents or through Workflows (toggle off under /settings features to restrict main-chat delegation to Workflows only). Adds whole-file `#[[file:...]]` references with one-line and line-range selectors plus `#[[folder:...]]` for directory listings. Workspace, global, and MCP prompts now exposed as slash commands with argument hints and file template expansion. Ships every 5.3 days — 6 releases in the last month.

**Source:** https://kiro.dev/changelog/cli/2-27

## 2026-10-01

### Claude Code v2.1.287 — Claude Mods, "You Should Know" Side Agent, URL Prompts (October 1, 2026)
231st release of 2026. Adds Claude Mods: plugins may now modify deeper behavior. New "You Should Know" is an opt-in built-in plugin where a side agent watches your back and flags things you or Claude might miss. Enabled via `/plugin enable cc-plugin-you-should-know@builtin` (first-party sessions with telemetry on). Added `n:<text>` filter to agents view matching session names and tasks. Added URL prompts from MCP servers on the 2025-11-25 protocol. Windows now warns when denying the Bash tool also turns off PowerShell (leaving Claude with no shell). Self-hosted runner adds built-in `gh api` (REST only) for macOS/Linux machines without GitHub CLI. Ships every 1.4 days — 27 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.287

### OpenAI Codex CLI rust-v0.160.0 — Task History, Guardian Reviews, Windows Sandbox Overhaul (October 1, 2026)
103rd release of 2026. Browse older tasks in agent command center with keyboard-accessible "Show more." Middle-click paste in fullscreen mode on supported Linux X11 terminals. Sessions can start outside a project with workspace defaults when policy permits. Added opt-in Guardian review capabilities to retrieve earlier user instructions and agent handoff context. Major stability work: unsent queued messages resume after reconnection; terminal UI preserves provider/reasoning/verbosity settings; Windows sandbox PowerShell fallbacks and long-path permissions fixed; SQLite stalls prevented during connection setup; background log database space reclamation added. Ships every 1.3 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.160.0

### GitHub Copilot CLI v1.0.91 — Sandbox CA Commands, Read-Only Pipeline Auto-Review (October 1, 2026)
133rd release of 2026. Adds `copilot sandbox ca` commands to check, create, trust, rotate, and remove proxy CA certificates including unattended Windows setup. Session timelines clear busy status after interrupted turns finish. Sandboxed commands now work on Windows versions without filesystem enumeration support. Complete, statically analyzable read-only shell pipelines can now enter execution-evidence review automatically, while incomplete or unbound pipelines require explicit approval. Ships every 5.3 days — 7 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.91

### Antigravity CLI v1.2.14 — Queued Messages Toggle, Container-Friendly Remote Control (September 30, 2026)
57th release. Adds Queued Messages option to `/config`: default Queue holds follow-up messages until current turn ends, or choose Send Immediately to interrupt the agent. Remote-control on Linux without systemd user service manager (e.g., containers) now starts daemon as background process with warning. Loading long conversations (thousands of steps) is noticeably faster — CLI no longer scans every step up front. Automatically generated conversation titles now take images and files attached to first message into account. Fixes: emoji combining character cursor drift in tmux; pipe/socket/device file viewing hung agent; invalid JSON schema now fails with exit code 1 instead of silent string treatment. Ships every 1.4 days — 20 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.14

### Cline v4.1.22 / Desktop v0.0.40 — New Providers, Model Catalog Refresh, Linux ARM (October 2026)
SDK v4.1.22 adds new providers: Bee (by HEOSSI) and Pareto Inference (PARETO_API_KEY). Direct Anthropic requests now use Anthropic's server-side refusal fallback — on OpenRouter and Cline, Anthropic models can fail over to another upstream provider. Content filter blocks now surface clearly with rephrase suggestion. Oversized MCP and Composio tool results cached in-memory with paged preview (16 MiB cap per session). Custom providers from providers.json now work on agent path. Desktop v0.0.40: Linux ARM supported (.deb/.rpm packages); web search settings moved to Customize → Tools; Linux on NVIDIA driver no longer opens blank window. Ships weekly-ish with 7 releases in the last month.

**Source:** https://github.com/cline/cline/releases

## 2026-10-07

### Claude Code v2.1.290 — Subagent Visibility and Permission Controls (October 5, 2026)
235th release of 2026. Adds `serverToolUses` to mod turn.step hook results, tracking what the API itself called with id, name, input, start and end. Adds `agentId` to the tool.check event of plugin hooks to distinguish subagent permission checks from main session. Adds ceiling to the question and verdict a mod's tool.check hook reads, naming the approval an organizationally-defined ceiling. Ships every 1.2 days — 25 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.290

### Claude Code v2.1.292 — Marketplace Plugin Install, Agent Effort Levels (October 6, 2026)
236th release. Adds `--marketplace` flag to `claude plugin install` to add marketplace if needed and install plugin under same policy checks as `claude plugin marketplace add`. Adds an `effort` parameter to the Agent tool so Claude runs a sub-agent at a specified effort level. Adds `CLAUDECODEOVERLOADEDRETRYBASEDELAYMS` environment variable for backoff on 529 errors. Adds `prompt.autocomplete` event for mods to add rows to prompt box autocomplete. Adds `prompt caching` to `$.model.complete` for mods. Multiple security fixes including sandboxed commands reading staged seed-admin uploads, network path file read bypasses, and NOPROXY being ignored for Claude Code's own API requests. Ships every 1.3 days — 26 releases in the last month.

**Source:** https://www.havoptic.com/r/claude-code-2.1.292

### OpenAI Codex CLI rust-v0.160.1 — Windows Environment Preservation (October 5, 2026)
104th release. Fixes critical issue where Windows environment settings (SYSTEMROOT, TEMP, TMP) were being lost when running remote servers with explicitly configured remote environment variables. Ships every 1 day — 14 releases in the last month.

**Source:** https://www.havoptic.com/r/openai-codex-rust-v0.160.1

### Antigravity CLI v1.2.17 — Windows Sandbox Without Admin Rights (October 5, 2026)
60th release. Windows sandboxed commands no longer need administrator rights; Python, Git, and npm work inside the sandbox out of the box. Fixed markdown table columns drifting with emoji and combining characters (affected SSH/tmux sessions). Fixed .tiff images being reported with wrong file type and silently converted to PNG. Announcement cards above prompt for model launches and deprecations. Ships every 1.6 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.2.17

### Antigravity CLI v1.3.0 — Verbosity Default to Medium, Scrolling Fixes (October 6, 2026)
61st release. Changed default Verbosity from high to medium — conversation view now groups related tool calls and thoughts into concise summaries while keeping commands/responses visible. Use /config to set back to high. Changed j/k in /diff view to move line cursor instead of jumping between files. Fixed trackpad/mouse-wheel scrolling jumping back and forth (especially over SSH/tmux). Fixed files with spaces, %, special characters, or Windows drive paths being mishandled across the CLI. Ships every 1.5 days — 19 releases in the last month.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.3.0

### GitHub Copilot CLI v1.0.92 — Config Commands, Live Shell Streaming (October 5, 2026)
134th release. Adds `copilot config` subcommands to list, read, set, and remove settings. Adds pre-conversation Ctrl+E environment picker to switch between local and cloud runs. Shell tool calls now stream live stdout/stderr output reliably in the timeline. Sessions no longer slow for minutes after agent writes a very large file. Entra-protected MCP servers can silently renew access-token-only credentials. Compact keeps latest prompt when requests exceed context limits. Large Anthropic requests retry after downscaling images. Sandboxed shells withhold ambient GITHUBTOKEN unless configured. pnpm commands work in sandboxed sessions. Ships every 3.9 days — 7 releases in the last month.

**Source:** https://www.havoptic.com/r/github-copilot-v1.0.92

### Gemini CLI v0.63.0 — Connection Recovery, Memory Optimization (October 6, 2026)
80th release. Displays retry progress indicator during connection recovery. Distinguishes missing MCP enablement config from malformed JSON. Bounds tool output size and optimizes memory lifecycle in long-running agent loops. Cleans up temporary directory when background shell execution exits. Enables autonomous plan execution in non-interactive mode. Ships every 6.1 days — 4 releases in the last month.

**Source:** https://www.havoptic.com/r/gemini-cli-v0.63.0

### Cline v4.1.23 / Desktop v0.0.43 — Team Performance, /compact Command (October 2026)
SDK v4.1.23: Agent teams no longer slow down as session runs — stream chunks and heartbeats go to live UIs only, never persisted; changed entities batched into one transaction every ~300ms. teams.db compaction; SQLite schema v2 migration. New /compact slash command summarizes conversation to free context. Refreshed model catalog (GPT-6.1 Sol becomes default for OpenAI, OpenRouter, GitHub Copilot, and others). Desktop v0.0.43: Connectors tab is now first/default in Customize with full catalog browse; connector logos displayed; "What's new" dialog for existing users.

**Source:** https://github.com/cline/cline/releases

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



<!-- archived by DIAC run 2026-10-28 -->

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

> **🔎 Fact-Check 2026-10-26 — CURRENCY NOTE (section-level):** this section was researched through **October 24** but fact-checked on **October 26**; several newer releases now exist and are not reflected above — Claude Code **v2.1.311** (npm, 2026-10-26T19:47Z), GitHub Copilot CLI **v1.0.104-2** (2026-10-24T01:06Z) and **v1.0.104-3** (2026-10-24T15:29Z, both still prereleases), Antigravity CLI **v1.4.7** (Oct 24), Factory Droid **v0.249.0** (npm, 2026-10-24T02:02Z) and Devin Desktop **v3.11.216** (Oct 24). Also note the Claude Duet and funding entries below reflect their own dates (Oct 21 / Oct 22). General web search was blocked by bot-detection on 2026-10-26, so verification used direct retrieval of primary sources (GitHub release API, npm registry, vendor docs/changelogs) plus independent secondary reporting (TechCrunch, AI Tools Review, aifunding.me data API) and the Havoptic release tracker.

### Claude Code v2.1.310 — Monitor Tool Reaches Bedrock/Vertex/Foundry, Gateway Beta-Header Retries (October 23, 2026)
Published 2026-10-23T23:39Z. Added the Monitor tool plus plugin monitors on Bedrock, Vertex and Foundry, and when telemetry or nonessential traffic is disabled; long foreground sleeps are now blocked on those providers. Requests that fail behind some gateways and compatible servers rejecting the `effort-2025-11-24` beta value or mid-conversation system messages are retried without them. Fixed background cleanup deleting recent files (pasted images) when `cleanupPeriodDays` is set very large; fixed compaction after a "Prompt is too long" error keeping too much dense text (base64, SVG) so the next request could fail again; fixed file-read permission prompts not showing where a symbolic link leads; fixed a question's auto-continue timeout firing the moment an external editor closed. Windows: PreToolUse and PermissionRequest hooks could let a tool call through when Git Bash is missing and the hook command was only quoted strings. Auto mode's prompt before the first read outside the working directories now says that blocking those reads makes shell commands ask for permission. Linux: `/sandbox` and the sandbox startup warning now name Ubuntu's AppArmor restriction on user namespaces and how to lift it when bubblewrap cannot start the sandbox. Memory use of non-interactive (`-p`, Agent SDK) sessions improved during compaction with very large transcript files.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.310
> **🔎 Fact-Check 2026-10-26 — VERIFIED (release date + all quoted features), with an omission note:** the release exists and is dated exactly as claimed — GitHub release API **v2.1.310, published 2026-10-23T23:39:00Z**, non-prerelease — and the npm registry independently shows **`@anthropic-ai/claude-code` 2.1.310 published 2026-10-23T21:20:46Z** (npm runs ahead of the GitHub publish timestamp, so both are correct for their own channels). Every feature claim in the entry matches the release body verbatim, including the Monitor tool on Bedrock/Vertex/Foundry and with telemetry/nonessential traffic disabled, the `effort-2025-11-24` retry, the `cleanupPeriodDays` fix, the "Prompt is too long" compaction fix, symlink file-read prompts, the Windows Git Bash hook fix, the Ubuntu AppArmor / bubblewrap note and the non-interactive compaction memory improvement. One clarification: "long foreground sleeps are now blocked **on those providers**" is slightly narrow — the release blocks them **"there too"**, i.e. on Bedrock/Vertex/Foundry **and** in the telemetry-disabled configuration. The entry also **omits** several shipped items (enterprise custom roles for Cloud sessions and Remote Control, the Claude Tag and Code Review fixes, the VS Code fixes, the `mod Image` tmux fix) — an omission, not an error.

**Source:** https://registry.npmjs.org/@anthropic-ai/claude-code
### Claude Code v2.1.309 — Sandbox and Permission-Check Hardening Batch (October 22, 2026)
Published 2026-10-22T22:18Z. Sandboxed Bash commands on macOS and Linux no longer run the shell's startup files outside the sandbox before each command. macOS sandbox `denyWrite` glob patterns now apply at a path's real location when reached through a symlink. Sandboxed commands and auto-accepted edits can no longer modify the MCP config file passed with `--mcp-config`; a disabled MCP server is no longer reconnected by a later permission prompt in print and SDK sessions. Bash permission checks no longer trust a variable set by a command whose redirect can fail to open, and now prompt for compound commands that change directory before running git even when the `cd` is wrapped or prefixed. An `Edit(path)` deny rule now blocks a Bash redirect to that path in commands holding a subshell. Worktree-isolated sessions refuse locale-prefixed and zsh arithmetic commands the isolation guard should reject; worktrees and branch checkouts now ignore git replace refs. Profile store write protection now applies through a symlinked config directory. Fixed sessions compacting repeatedly after reading files under a very large nested CLAUDE.md (an over-limit nested file now loads only its start), ctrl+enter queuing behavior, key-bound slash commands running in the shell from `!` mode, ctrl+o hiding undelivered messages from other agents/sessions, and long tool-output previews cutting through an emoji so `jq` could no longer parse session transcripts.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.309
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **v2.1.309, published 2026-10-22T22:18:57Z** (npm: 2.1.309 published 2026-10-22T20:34:13Z). All quoted items match the release body, including the sandbox shell-startup-file fix, the macOS `denyWrite` symlink fix, the `--mcp-config` write protection, the disabled-MCP-server reconnection fix, the redirect-trust and compound-`cd` permission fixes, the `Edit(path)` deny rule, **worktree isolation refusing locale-prefixed and zsh arithmetic commands**, git replace-refs, and **profile store write protection through a symlinked config directory**. The entry's headline count of the batch ("Sandbox and Permission-Check Hardening") is fair but selective — the release also contains ~60 further fixes and changes, including VS Code, Claude Tag, Code Review and Cloud sessions items.

**Source:** https://registry.npmjs.org/@anthropic-ai/claude-code
### Claude Code v2.1.308 — Maintenance Release (October 22, 2026)
Published 2026-10-22T04:34Z. Release notes contain only "Bug fixes and reliability improvements" — no new features, no changelog detail published.

**Source:** https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.308
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **v2.1.308, published 2026-10-22T04:34:55Z** and that the release body is literally only "**Bug fixes and reliability improvements**" — no feature list, matching the entry exactly (npm: 2.1.308 published 2026-10-22T04:19:48Z). Note for the record: the Havoptic summary for this release misprints the version as "**2.1.303**" — that is a typo in the secondary source, not an error in this entry.

**Source:** https://registry.npmjs.org/@anthropic-ai/claude-code
### OpenAI Codex CLI rust-v0.164.0 — `/presets` Slots, Inline Model/Permission Args, Terminal Image Preview (October 23, 2026)
Published 2026-10-23T04:48Z. New: reusable prompts and slash commands in ten numbered `/presets` slots with a keyboard menu; model, reasoning effort, speed and permission profiles settable directly via inline `/model` and `/permissions` arguments; preview of viewed and generated images in the fullscreen transcript on Kitty or Sixel terminals; enterprise MCP connections authenticated via eligible Codex account grants or dedicated sign-in (including OAuth clients requiring secrets); credential masking during supported remote Bash commands and Zsh snapshot sessions, including custom-provider credentials; the Amazon Bedrock setup wizard enabled by default with API key entry grouped with other AWS sign-in methods. Fixes: failed compaction no longer leaves partial summaries in history and background compaction failures fall back without panicking; resuming sessions finds compressed histories and restores saved thread settings instead of replacing them with global defaults; Windows HTTPS/WebSocket handles proxy authentication challenges using the signed-in user's Negotiate or NTLM credentials; `-c`/`--config` overrides preserved when they appear at multiple subcommand levels; queued prompts wait for pending permission selections to resolve; sandbox checks hardened for case-variant metadata paths on macOS and replaceable symlinks used to locate executables. Chores: disk usage reduced by pruning unused installations, cleaning abandoned marketplace checkouts, bounding daemon logs. A `rust-v0.165.0-alpha.1` prerelease followed the same day.

**Source:** https://api.github.com/repos/openai/codex/releases/tags/rust-v0.164.0
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **rust-v0.164.0, published 2026-10-23T04:48:10Z**, non-prerelease; the npm registry independently shows **`@openai/codex` 0.164.0 published 2026-10-23T04:52:29Z** and the follow-on prerelease **`0.165.0-alpha.1` published 2026-10-23T14:22:16Z** — so "a `rust-v0.165.0-alpha.1` prerelease followed the same day" is confirmed. Every quoted feature and fix matches the release body, including the **ten numbered `/presets` slots**, inline `/model` and `/permissions` arguments, Kitty/Sixel image preview, enterprise MCP authentication, credential masking, the Bedrock setup wizard enabled by default, compaction-failure handling, resume restoring saved thread settings, Windows Negotiate/NTLM proxy auth, multi-level `-c` overrides, queued-prompt permission waits, and the macOS case-variant/symlink sandbox hardening. Havoptic additionally counts this as the **109th Codex release of 2026** — an ordinal not claimed here and not independently reproducible.

**Source:** https://registry.npmjs.org/@openai/codex
### Antigravity CLI v1.4.5 — Idle CPU Halved, Cron Schedules Spread, Infinite Safety-Retry Fixed (October 22, 2026)
Published 2026-10-22T05:01Z. Idle CPU roughly halved by pausing screen refreshes when nothing on screen changes; lower CPU while a response streams, faster rendering and loading of long conversations, lower startup CPU when refreshing conversation summaries, and memory allocated for prompt text as you type instead of reserved up front. Agent responses read better: a blank line separates the collapsed thought block from the response, and the collapsed block then shows only its "Thought for …" header. `/diff` search now counts matches inside folded unchanged lines ("match 2/5 · +3 hidden") and `/diff`'s Commit Tree marks the selected commit with the same cursor/selection color as All Changes and Per Turn. Recurring cron schedules created with the agent's schedule tool now fire at a consistent per-schedule offset instead of exactly on the cron boundary, to avoid traffic spikes (fixed-time schedules such as daily at 9:00 still fire within their scheduled minute). Fixed the agent silently retrying, potentially without end, when a model response was blocked by content safety filters. Fixed plugins failing to load when `plugin.json` gives `skills` as a single path string instead of an array, and marketplace plugin installs/auto-updates failing on checksum mismatch or interrupted downloads (now retried once).

**Source:** https://api.github.com/repos/google-antigravity/antigravity-cli/releases/tags/1.4.5
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **1.4.5, published 2026-10-22T05:01:38Z**, non-prerelease, and the release body matches the entry line for line — the collapsed thought-block spacing, `/diff` hidden-match counting with the "match 2/5 · +3 hidden" string, the Commit Tree cursor, the per-schedule cron offset, **idle CPU roughly halved** by pausing screen refreshes, the unbounded safety-filter retry fix, the `skills`-as-string plugin fix and the marketplace checksum/network retry. No corrections.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.5
### Antigravity CLI v1.4.6 — Sandbox Blocks Docker/Kube Credentials, Compaction Keeps Attachments, Plugin MCP Variables Editable (October 23, 2026)
Published 2026-10-23T04:18Z. Added a "Configure MCP servers…" row for installed plugins in `/plugin` so a plugin's MCP server variables can be set or changed without disabling and re-enabling it; plugins with missing values show "⚠ needs setup", each server shows "✓ configured" or the variables it still needs, and saving restarts an enabled plugin's servers. Terminal sandbox defaults now protect more credentials: sandboxed commands can no longer read or modify `~/.docker`, `~/.kube` or `~/_netrc` unless access is granted explicitly — previously `~/.docker` and `~/.kube` were writable inside the sandbox, so Docker registry and Kubernetes cluster credentials were reachable. Context compaction (including `/compact`) now keeps images, PDFs and other attached files in the conversation summary so the agent can still see them after older history is summarized. Permission prompts changed so that allowing an action for the conversation — in the main agent or a subagent — applies across the main conversation and all of its subagents instead of asking again. The in-progress status line now shows what the agent waits on, e.g. "Model unavailable (attempt 2/10), retrying in 12s" with a live countdown. `/diff` highlights the exact changed words within each modified line in every color scheme. `agy plugin validate` gained `--help`, checks context providers, warns about non-existent `skills` entries and reports every `SKILL.md` the plugin loader skips. Fixed terminal commands occasionally failing with "argument list too long" on huge reasoning signatures and text-cursor drift after wide characters (CJK, emoji, tabs, Unicode spaces).

**Source:** https://api.github.com/repos/google-antigravity/antigravity-cli/releases/tags/1.4.6
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **1.4.6, published 2026-10-23T04:18:36Z**, non-prerelease, and the body matches every claim — the "**Configure MCP servers…**" row with "⚠ needs setup" / "✓ configured" states and server restart on save, the sandbox tightening that blocks reads/writes to **`~/.docker`, `~/.kube`, `~/_netrc`** unless explicitly granted (previously `~/.docker` and `~/.kube` were writable), **compaction keeping attached images, PDFs and files** in the summary, permission grants propagating from the main agent to all subagents, the live countdown in the status line ("Model unavailable (attempt 2/10), retrying in 12s"), the per-line word-level `/diff` highlighting, the extended `agy plugin validate`, the "argument list too long" fix and the wide-character cursor drift fix. No corrections.

**Source:** https://www.havoptic.com/r/antigravity-cli-1.4.6
### GitHub Copilot CLI v1.0.103 — Copyable Original Code Blocks, Sandbox Settings Reach ACP Sessions (October 22, 2026)
Published 2026-10-22T16:21Z. Clicking a completed response code block copies its original code when enabled. ACP sessions now honor saved sandbox settings and the `--sandbox`/`--no-sandbox` flags, including on resume. Cloud replies keep full text when the CLI reconnects after a dropped connection. The sessions browser shows a session's recorded title instead of a generic "Session N" fallback. Model-specific default Responses verbosity now applies correctly for GPT-5 models unless session verbosity is explicitly set. dnx commands can use existing .NET and NuGet sandbox grants when developer-tool access is enabled, and Windows dev-tool shims like `npm.cmd` now receive the same sandbox grants as `npm`. Gemini tool calls avoid 400 schema validation errors for nullable and enum fields. Sessions can resume under mandatory managed model defaults without rejecting saved preferences. Cached local MCP tool snapshots are reused across registered Git worktrees in one repository. Remote launch options got clearer hosting/connection flags and the legacy `--remote`/`--no-remote` startup flags were retired.

**Source:** https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.103
> **🔎 Fact-Check 2026-10-26 — VERIFIED:** GitHub release API confirms **v1.0.103, published 2026-10-22T16:21:56Z**, non-prerelease, and the body matches the entry exactly — copyable original code blocks, **ACP sessions honouring saved sandbox settings and the `--sandbox`/`--no-sandbox` flags including on resume**, full cloud replies after a dropped connection, recorded session titles, **model-specific default Responses verbosity for GPT-5** unless session verbosity is explicitly set, dnx/.NET and NuGet sandbox grants, `npm.cmd` shim grants, the Gemini nullable/enum schema fix, **resume under mandatory managed model defaults without rejecting saved preferences**, **cached local MCP snapshots reused across registered Git worktrees**, and the clearer remote hosting/connection flags with **legacy `--remote`/`--no-remote` retired**. No corrections.

**Source:** https://registry.npmjs.org/@github/copilot
### GitHub Copilot CLI v1.0.104-0 / v1.0.104-1 — Assisted Permissions Out of Experimental Mode (October 23, 2026)
Prereleases published 2026-10-23T18:49Z and 2026-10-23T21:28Z. Assisted Permissions are available without enabling experimental mode. When a saved Auto preference is no longer available, Auto falls back to its default preference instead of failing each turn. The follow-up prerelease is described only as "Fixes and changes".

**Source:** https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.104-0
> **🔎 Fact-Check 2026-10-26 — VERIFIED (both are prereleases):** GitHub release API confirms **v1.0.104-0, published 2026-10-23T18:49:26Z, `prerelease: true`** and **v1.0.104-1, published 2026-10-23T21:28:36Z, `prerelease: true`** — the timestamps in the entry are exact, and both are correctly identified as prereleases rather than stable releases. Bodies confirmed verbatim: v1.0.104-0 — "**Assisted Permissions are available without enabling experimental mode**" and "**When a saved Auto preference is no longer available, Auto falls back to its default preference instead of failing each turn**"; v1.0.104-1 — body is literally "**Fixes and changes**". The npm registry corroborates the timing for the follow-on (`@github/copilot` 1.0.104-1 published 2026-10-23T21:28:38Z). **Currency note:** two further prereleases have since shipped — **v1.0.104-2 (2026-10-24T01:06Z)** and **v1.0.104-3 (2026-10-24T15:29Z)**.

**Source:** https://registry.npmjs.org/@github/copilot
### Replit Agent 2026.10.23 — Autonomous On-Call Monitoring Agent, Reusable Skills, Chat Sharing (October 23, 2026)
43rd Replit Agent release of 2026. Platform Monitoring Agent: the agent can investigate production issues using the app's logs and metrics, then attempt and validate fixes; Monitoring alerts plus Auto-fix let it triage alerts in the background, and the experimental Auto-republish setting publishes validated fixes automatically, otherwise fixes are reviewed manually. "Create and update skills with Agent" turns workflows from conversations and projects into reusable workspace skills — the agent suggests new skills or improvements to existing ones for review and approval before saving. Chat and asset sharing lets a whole chat or single asset be shared with selected teammates or the whole workspace; access is read-only and includes the chat's assets and development URLs, which open live servers rather than isolated read-only previews. Eligible top-up customers can keep published apps running at zero credits up to an overage limit (Paid Agent pauses, Free mode stays available, warning emails before suspension, new credits repay the overage first).

**Source:** https://www.havoptic.com/r/replit-agent-2026-10-23
> **🔎 Fact-Check 2026-10-26 — PARTIAL (ordinal + announcement date):** the feature set is **confirmed by a second, independent first-party source** — Replit's own blog post *"Replit Monitoring Agent: Your very own software engineering team"* (published **Oct 22, 2026**) states that Monitoring Agent "can detect production issues, investigate the cause, validate a fix, and publish it automatically" (blog.replit.com/replit-monitoring-agent), matching the release notes. Two caveats: (1) the **"43rd Replit Agent release of 2026"** ordinal is asserted **only** by the Havoptic tracker — Replit does not publish release ordinals, so this count is not independently reproducible; (2) Replit's official announcement is dated **October 22**, one day before the `2026.10.23` version date — the monitoring-agent *rollout* was announced on Oct 22, the release line is dated Oct 23. The reusable-skills, chat/asset-sharing and zero-credit overage details remain single-source (Havoptic release notes).

**Source:** https://blog.replit.com/replit-monitoring-agent
### Amp 2026.10.22 — Self-Hosted Orbs (October 22, 2026)
88th Amp release of 2026. Orbs can now be self-hosted: `amp orb provider ./dispatch.sh` runs inside your own infrastructure, reaches out to Amp and waits for requests to spawn, pause or delete orbs, dispatching each operation to a program you provide. Illustrative dispatch targets given by Amp: Docker, E2B, Kubernetes, Apple containers, Modal, Vercel, Daytona and exe.dev — the stated requirement is compute that can start new machines quickly, pause and resume them equally fast, keep them around, and scale to zero.

**Source:** https://www.havoptic.com/r/amp-self-hosted-orbs
> **🔎 Fact-Check 2026-10-26 — PARTIAL (ordinal only):** every technical detail is **confirmed independently by Amp's own announcement** *"Self-Hosted Orbs"* (**October 22, 2026**, ampcode.com/news/self-hosted-orbs): `amp orb provider ./dispatch.sh`, the provider reaching out to Amp for **spawn / pause / delete** orb operations, the illustrative dispatch targets **Docker, E2B, K8s, Apple containers, Modal, Vercel, Daytona, exe.dev**, and the stated compute requirement ("quickly start new machines, put them to sleep and resume them equally fast, keep them around for a long time, scale them to zero"). Only the **"88th Amp release of 2026"** ordinal rests on the Havoptic tracker and is not independently verifiable.

**Source:** https://ampcode.com/news/self-hosted-orbs
### OpenCode v1.19.4 — Bundled Bun 1.4.4 With Security Fixes (October 22, 2026)
Published 2026-10-22T13:03Z. The bundled Bun runtime was upgraded to 1.4.4, which includes security fixes for Brotli, TLS, HTTP/1.1, HTTP/2, HTTP/3, WebSocket and `fetch`, plus root certificate updates to NSS 3.131.1.

**Source:** https://api.github.com/repos/sst/opencode/releases/tags/v1.19.4
> **🔎 Fact-Check 2026-10-26 — VERIFIED (with source-hygiene note):** release date and content are confirmed twice — GitHub release **v1.19.4** (published 2026-10-22T13:03Z) and the npm registry for `opencode-ai`, where **1.19.4 was published 2026-10-22T13:03:43Z**. The bundled-Bun claim is exact: the release body states Bun **1.4.4** with security fixes for **Brotli, TLS, HTTP/1.1, HTTP/2, HTTP/3, WebSocket and `fetch`**, plus root certificates updated to **NSS 3.131.1**. Note the cited GitHub path (`sst/opencode`) now **redirects to `anomalyco/opencode`** — the repo was transferred — so the URL still resolves but no longer points at the canonical path.

**Source:** https://registry.npmjs.org/opencode-ai
### Zed v1.25.3 — Dependency Updates Patch Ecosystem Vulnerabilities (October 23, 2026)
103rd Zed release of 2026, two days after v1.25.2. The release contains a single change: updated dependencies to address recent software ecosystem vulnerabilities (PRs 66023, 65963) — quiet security maintenance.

**Source:** https://www.havoptic.com/r/zed-1.25.3
> **🔎 Fact-Check 2026-10-26 — PARTIAL (ordinal only):** the substance is **confirmed by two independent sources** — the GitHub release API (**v1.25.3**, published **2026-10-23T13:45:48Z**, body: *"Updated dependencies to address recent software ecosystem vulnerabilities. (#66023, #65963)"*) and Zed's own release page (zed.dev/releases/stable/1.25.3), which shows **"1.25.3 · Oct 23, 2026"** with the same PR references. The "**two days after v1.25.2**" spacing checks out (v1.25.2 published 2026-10-21T20:54:49Z). Only the **"103rd Zed release of 2026"** ordinal is tracker-only and not independently reproducible — Zed's GitHub release feed does not expose a cumulative 2026 count that matches it.

**Source:** https://zed.dev/releases/stable/1.25.3
### Factory Droid v0.247.0 — PDF Previews, Files Panel Speed, Environment Session Grouping (October 22, 2026)
53rd Factory Droid release of 2026 (CLI v0.247.0, Desktop v0.204.0), one day after v0.245.1. A PDF preview now shows its first pages right away and draws the rest as you scroll; the Files panel and file previews stay responsive in long sessions; Environment sessions are grouped where they belong.

**Source:** https://www.havoptic.com/r/factory-droid-0.247.0
> **🔎 Fact-Check 2026-10-26 — PARTIAL (features + ordinal):** the release itself is **confirmed independently** — the npm registry shows the `droid` package at **0.247.0 published 2026-10-22T04:24:59Z**, one day after **0.245.1 (2026-10-21T08:50:53Z)**, exactly matching the "one day after v0.245.1" claim. However, the **PDF preview / Files panel responsiveness / Environment session grouping** feature descriptions and the **Desktop v0.204.0** pairing come only from the Havoptic release summary: Factory's own changelog URLs (`factory.ai/changelog`, `docs.factory.ai/changelog`) return **HTTP 404**, so no first-party feature text could be retrieved. The **"53rd Factory Droid release of 2026"** ordinal is likewise tracker-only.

**Source:** https://registry.npmjs.org/droid
### Devin Desktop v3.11.212 — Up to 8 Sessions Side by Side, Workspace Grouping, Child Sessions (October 23, 2026)
58th Devin Desktop release of 2026, 11 days after v3.10.67, part of a refreshed "agent command center" redesign. Dragging a session from the sidebar onto an open session shows up to 8 sessions side by side; sidebar sessions can be grouped by workspace with a "+" per group to start a session in that folder; a child session can be started from any session's "More" menu; sessions grouped into Spaces now appear under a parent session in the sidebar.

**Source:** https://www.havoptic.com/r/windsurf-3.11.212
> **🔎 Fact-Check 2026-10-26 — PARTIAL (features + ordinal) / source-hygiene note:** the October 23 date and the "11 days after v3.10.67" spacing are internally consistent (v3.10.67 = Oct 12 → Oct 23 = 11 days) and the "agent command center" wording traces to a **Cognition announcement quoted in the release summary** ("Today we're introducing a refreshed Devin Desktop app, with an agent command center…"), but the 8-sessions-side-by-side / workspace grouping / child-session / Spaces details and the **"58th Devin Desktop release of 2026"** ordinal are **single-source (Havoptic)**. Devin's own `docs.devin.ai/release-notes` page has an **October 23, 2026** entry, but it documents web/Cloud features (default agent settings, PR review quote-in-chat, Bitbucket Cloud review support, merged past-repository rules) and does **not** mention v3.11.212, side-by-side sessions or a "command center" — most plausibly a Desktop-app-vs-Cloud scope split rather than a contradiction. Also note the cited URL slug is `windsurf-3.11.212` while the page is titled **Devin Desktop v3.11.212**.

**Source:** https://docs.devin.ai/release-notes
### Claude Duet — Anthropic Enters the Proactive Personal-Agent Market (October 21, 2026)
Anthropic opened a research preview of Claude Duet, its first assistant built to start the conversation rather than wait for a prompt: it sends a morning brief across connected apps, re-checks those apps every few hours and alerts the user only when something needs attention, and keeps working in its own cloud virtual machine with its own browser when the laptop is closed. It runs on Claude Opus 5.5, connects to 6,000+ Claude Marketplace connectors and plugins, can build dashboards and forecasts, and can make purchases via Stripe's Link digital wallet or Shopify's Shop Pay. Sensitive steps — sending messages, spending money, signing documents, deleting files — require explicit user approval; it will not trade securities or move money between accounts. A new classifier screens each message and by default refuses requests asking for credit-card numbers or government IDs. Availability is iOS, Android and web for US Pro and Max customers on a waitlist. Anthropic positions Duet for professionals and small businesses, explicitly not for errands or ticket booking, and it cannot show its browser use as it happens. TechCrunch frames it as Anthropic's answer to Meta's Muse (10M+ users, shopping a top activity), OpenAI's Dots and Hark, Instinct and Fo — part of a shift from assistants to agents that act on the user's behalf.

**Source:** https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/
**Source:** https://aitoolsreview.co.uk/insights/claude-duet-proactive-agent
> **🔎 Fact-Check 2026-10-26 — CORRECTION (two unsupported details in the Meta comparison):**
> 1. **"Meta's Muse (10M+ users, shopping a top activity)"** is **not supported by either cited source**. TechCrunch (Oct 22, 2026) describes only that "**While Meta's Muse is a personal AI assistant, the company also released a version to cater to small businesses with connections to other apps**" — there is **no user-count figure** and **no mention of shopping** anywhere in the article; AI Tools Review mentions Meta's Muse as the competitor Anthropic is answering but likewise carries **no "10M+ users"** or **"shopping"** claim. Remove the parenthetical or source it separately.
> 2. **Platform availability is over-stated / internally inconsistent.** TechCrunch says Claude Duet "is available as an app on **iOS and Android**, and on the **web** through Claude.ai for **Pro and Max** customers in research preview", with a **waitlist** — it does **not** restrict the preview to the US. AI Tools Review says the preview "is **US-only** and waitlisted" and, explicitly, "**Treat anything beyond web and iOS as unconfirmed**" — i.e. it treats **Android as unconfirmed**, the opposite of TechCrunch. Safe wording: *web and iOS are confirmed; TechCrunch lists Android, while a second source treats Android availability as unconfirmed; the preview is reported as US-only for Pro and Max subscribers on a waitlist.*
>
> Everything else in the entry is **confirmed**. TechCrunch (verbatim): built on **Claude Opus 5.5**; connects to "**over 6,000 connectors and plug-ins in the Claude Marketplace**"; purchases via "**Stripe's Link digital wallet or Shopify's Shop Pay**"; "**sensitive steps like payments would require user approval**"; "**Duet won't trade securities or move money between accounts**"; a **new classifier** checks each message and "by default, the agent would turn down requests asking for **credit card numbers and government identification**"; Duet "**isn't good at handling errands or booking tickets**" and "**can't show you its browser use as it happens**"; rivals named are **Meta Muse, OpenAI Dots, Hark, Instinct, Grok Bot and Fo**. AI Tools Review (verbatim): "**sends a morning brief, checks your connected apps every few hours**", runs "**in its own cloud virtual machine**" with "**its own browser**", and is "**limited to US Pro and Max subscribers on a waitlist**" (launched **21 October 2026**). Two caveats: the "**morning brief / re-checks every few hours / own browser / US-only**" details rest on **AI Tools Review alone** (TechCrunch says "daily briefing" and "background virtual machine" without the browser or interval), and the entry **omits Grok Bot**, which TechCrunch lists among the rivals.

### Funding: October 2026 Rounds Put AI Developer Tools at $1.1B Across 5 Deals (October 2026)
The October 2026 AI funding roundup, updated 2026-10-22, records 72 rounds totalling $41.9B so far in October, led by OpenAI's $20.0B round (stage undisclosed, Oct 1) — Foundation Models & AGI alone accounts for $36.0B across 3 rounds. AI Developer Tools captured $1.1B across 5 rounds; AI Fintech $1.9B across 9 rounds. The median dollar round is $18M; disclosed stages so far are 10 Series A, 10 Seed and 5 Pre-Seed. Named developer-tool rounds include TypeSafe AI's seed led by DCVC (Oct 9) and doubleAI's $200M Series A backed by Nvidia and Dell (Oct 19, $1.0B valuation). The roundup page itself is internally inconsistent on TypeSafe AI — the table lists $870M at a $7.5B valuation while the entry text describes a "$40 million seed round" — so the exact figure should be treated as unverified.

**Source:** https://aifunding.me/roundups/october-2026
> **🔎 Fact-Check 2026-10-26 — CORRECTION (stale snapshot: round count, total and update date):** the entry's headline figures — "**updated 2026-10-22, records 72 rounds totalling $41.9B**" — are **no longer reproducible** and are now out of date. The live roundup is **updated 2026-10-26** and reports "**77 AI startup funding rounds** recorded so far in October 2026 (updated 2026-10-26), **$42.5B** in total"; the page's own share blurb is internally inconsistent, saying "**$42.5B+ raised across 76 deals**" in one place and **77 rounds** in another. Rebuilding a comparable snapshot from the source's own data API for rounds dated **on or before 2026-10-22** yields **71 rounds / $42.23B**, so the stated **72 rounds / $41.9B** cannot be reconstructed from the current dataset either. Use the current figures (**77 rounds, $42.5B, updated 2026-10-26**) and flag the source's 76-vs-77 discrepancy.
>
> **All the other figures in this entry are confirmed** against the live page and the underlying data: **Foundation Models & AGI $36.0B across 3 rounds**; **AI Fintech $1.9B across 9 rounds** ($1.94B); **AI Developer Tools $1.1B across 5 rounds** ($1.13B / 5 rounds — confirmed from the sector aggregation, even though it no longer appears in the page's three-item Key Takeaways list); **median dollar round $18M** (computed $18.3M); **disclosed stages 10 Series A, 10 Seed, 5 Pre-Seed** (exact match); largest round **OpenAI $20.0B (stage undisclosed, Oct 1)**; **doubleAI $200M Series A, Oct 19, $1.0B valuation, Nvidia and Dell** (confirmed on the doubleAI company page and in the data record); and the **TypeSafe AI internal inconsistency** is real and still present — the entry text says "**TypeSafe AI's $40 million seed round was led by DCVC**" while the adjacent table row shows **$870M at a $7.5B valuation** (the data record lists amount $870M / valuation $7.5B / Oct 9), so that figure correctly stays flagged as unverified.

### Community Signal: Safeguard False Positives Now Lock Out Whole Claude Code Sessions (October 23–24, 2026)
A burst of new Claude Code issues filed on 2026-10-23/24 shows the safety layer becoming the top friction point. #104735: a single request containing a hex-encoded string decoding to a harmless HTML/clipboard fragment (`<meta charset='utf-8'><code dir="ltr">pbpaste</code>…`) triggered "Sonnet 5's safeguards stopped the response above" and locked the user out of the session ("Start a new session to continue"). #104722 reports Opus 5.5 safeguards blocking a benign message with a reasoning_extraction error, and #104731 reports cyber safeguards blocking security-test planning for a payment plugin. #104740 (opened on 2.1.309, macOS) describes the recurring pattern directly: Opus and Fable repeatedly attempt a complex Bash command, get stopped by the auto classifier, fall back to the native Edit tool, and minutes later try the same oversized Bash command again. Related cost/limits friction: #104736 reports an unbounded recursive `send_later` loop in a remote cloud container that silently burned $285.12 and drained a $250 credit balance over 9.5 days, and #104738 reports the Agent SDK being rejected at the session limit while the desktop app on the same account kept working at 62% of the 5-hour window.

**Source:** https://github.com/anthropics/claude-code/issues/104735
**Source:** https://github.com/anthropics/claude-code/issues/104740
**Source:** https://github.com/anthropics/claude-code/issues/104736
**Source:** https://github.com/anthropics/claude-code/issues/104738
> **🔎 Fact-Check 2026-10-26 — VERIFIED (with a single-publisher caveat):** every quoted detail checks out against the issue bodies themselves. Creation timestamps: **#104722 2026-10-23T21:22Z**, **#104731 2026-10-23T22:32Z**, **#104735 2026-10-23T22:42Z**, **#104736 2026-10-23T23:27Z**, **#104738 2026-10-23T23:42Z**, **#104740 2026-10-24T00:02Z** — so "October 23–24" is exactly right, and #104740 being on Oct 24 in UTC explains the two-day span. #104735 decodes to exactly `<meta charset='utf-8'><code dir="ltr">pbpaste</code>…` and contains the verbatim strings "**Sonnet 5's safeguards stopped the response above**" and "**Start a new session to continue**". #104722 contains "**Invalid response from Claude: Error: reasoning_extraction**" alongside "**Opus 5.5 safeguards**"; #104731 is titled "Cyber safeguards block security test planning for payment plugin". #104736 confirms **$285.12**, a **$250** balance and **9.5 days** (89 iterations, ~$0.37 each, $248.27 of it in cache writes) in a **remote cloud container**. #104738 confirms the **62%** figure and the **five-hour window** for the desktop app. #104740's environment block reads "**claude-code@2.1.309**" on **darwin**, and the body describes "**Opus and Fable repeatedly attempt a complex Bash command**" plus the fallback to the native Edit tool and the auto classifier — matching the entry's description. **Caveat:** all six facts are hosted by a single publisher (GitHub); the second retrieval path (issue HTML vs. the REST API) is technically a different endpoint but not an independent publisher, so this cluster is single-publisher in substance.

### Community Signal: Codex Desktop and Computer Use Generate a Fresh Issue Cluster (October 23–24, 2026)
OpenAI Codex issues filed on 2026-10-23/24 concentrate in the desktop and remote-control surfaces rather than the CLI: Windows Computer Use shows "Manage" but the Chrome native host registration is missing (#56603); on Windows 10 a community workaround restores foreground capture and clicks, with a request for an official fix (#56587); Calculator and Chrome approvals are denied without an Allow dialog while the browser-only delegated path works (#56591); macOS whole-machine freezes occur during Codex use under severe memory pressure (#56586). Policy friction shows up too: a user asks for clarification of a "blocked by policy" rejection for operation A06 (#56590), and a Scheduled Work task loses workspace write and network permissions while the identical Terminal command succeeds (#56599). Other reports cover Android Remote pairing failing with both QR and manual code (#56600), a chat branching that drops secondary workspace folders (#56606), and existing chats locked after an update while the original app-server keeps running (#56598).

**Source:** https://github.com/openai/codex/issues/56603
**Source:** https://github.com/openai/codex/issues/56590
**Source:** https://github.com/openai/codex/issues/56599
**Source:** https://github.com/openai/codex/issues/56587
> **🔎 Fact-Check 2026-10-26 — PARTIAL (date over-statement; single-publisher caveat):** all nine referenced issues exist and their bodies match the entry: **#56603** (Windows Computer Use shows "Manage" but the Chrome native host registration is missing, Windows 11), **#56587** (Windows 10 workaround restoring foreground capture and clicks, requesting an official fix), **#56591** (Calculator and Chrome approvals denied without an Allow dialog while the browser-only delegated path works), **#56586** (macOS whole-machine freezes under severe memory pressure, ~14 GB wired memory), **#56590** ("blocked by policy" for operation A06), **#56599** (Scheduled Work task loses workspace write and network permissions while the identical Terminal command succeeds), **#56600** (Android Remote pairing fails with both QR and manual code), **#56606** (chat branching drops secondary workspace folders), **#56598** (existing chats locked after an update while the original app-server keeps running). The entry's characterisation — that the cluster concentrates on the **desktop and remote-control surfaces rather than the CLI** — holds. **Date nuance:** all nine Codex issues were actually filed on **2026-10-23** (21:26Z–23:44Z); the "October 23–24" range describes the Claude Code cluster, and no Codex issue in this cluster is from Oct 24. **Caveat:** as with the Claude Code cluster, GitHub is the sole publisher.

## 2026-10-27

*Coverage window: October 25–27, 2026 (last check was 2026-10-24). Sources are primary release APIs, company announcements and press releases wherever possible.*

### Claude Code v2.1.311 — Self-Hosted Runner Hold Flags, 1M-Context Compaction Rescue, Subagent Lifecycle Fixes (October 26, 2026)
Published 2026-10-26T21:51:23Z on GitHub; npm published `@anthropic-ai/claude-code` 2.1.311 at 2026-10-26T19:47:57Z. Adds `--hold-idle-file` and `--max-hold-min` to `self-hosted-runner` so an idle session can be kept alive while the host reports processes it left running, plus a tip for the Explanatory output style. Notable fixes: standard-context sessions no longer stop with "Usage credits required for 1M context" when a request passes 200K tokens (Claude now compacts and continues); Write and Edit no longer stall up to 5 seconds and report 0 lines changed when changing thousands of lines at once; subagents can now use MCP tools from servers that finish connecting after the subagent starts; a subagent's isolated worktree is no longer removed while a background subagent it started is still working in it; `SubagentStop` hooks fire once per finished subagent instead of roughly twice a minute each; background agents in auto mode no longer start a new main conversation turn on every wake; stale `MEMORY.md`/`CLAUDE.md` content is no longer shown right after automatic compaction; the `@` file picker respects `.ignore`/`.rgignore` negation rules that re-include git-ignored files; `claude mcp add`/`remove`/`/mcp` now name the project entry in `~/.claude.json` instead of the current folder; and `claude -p`/SDK sessions no longer save transcript messages out of order or keep messages that were taken back.

**Source:** https://github.com/anthropics/claude-code/releases/tag/v2.1.311
**Source:** https://registry.npmjs.org/@anthropic-ai/claude-code

### Codex CLI Moves to 0.165.0 Alphas — Three Prereleases in Four Days (October 26–27, 2026)
GitHub publishes `rust-v0.165.0-alpha.3` (2026-10-26T21:54:06Z) and `rust-v0.165.0-alpha.1.1` (2026-10-27T00:36:33Z); the npm registry shows platform builds for `0.165.0-alpha.1.1` across darwin-arm64/x64, linux-x64/arm64 and win32-x64/arm64 published 2026-10-27T00:45Z–00:48Z. Both release bodies contain only the version line, so the 0.165.0 feature set is still opaque — the last documented stable release remains `rust-v0.164.0` (2026-10-23).

**Source:** https://github.com/openai/codex/releases
**Source:** https://registry.npmjs.org/@openai/codex

### GitHub Copilot CLI v1.0.104-4 — Prerelease Patch After the v1.0.103 Stable Line (October 26, 2026)
`v1.0.104-4` is marked prerelease on GitHub (published 2026-10-26T22:35:14Z) with a release body of only "Fixes and changes"; npm `@github/copilot` 1.0.104-4 published 2026-10-26T22:34:50Z. Unstable builds (`1.0.102-0.unstable.*`) also shipped on Oct 24–25. The last stable line remains v1.0.103 (2026-10-22).

**Source:** https://github.com/github/copilot-cli/releases
**Source:** https://registry.npmjs.org/@github/copilot

### Antigravity CLI v1.4.7 — Hooks Can Read the Last User Prompt, Auto Mode Asks Less, ADC Auth Fix (October 24, 2026)
Adds `lastUserInput` to the JSON hook commands receive on stdin, so a hook can inspect the latest message before the agent acts on it. Adds an opt-in seasonal "Halloween theme" (startup banner, moon-phase spinner, themed borders) behind a `Seasonal Themes` row in `/config`. Auto mode asks for approval less often on routine commands (cleaning temp files, stopping a local process, running a formatter). Headless `-p` runs use much less CPU: they no longer build the conversation search index, render the transcript, or start custom status-line/window-title commands. On-demand MCP tool results up to 10 KB now go straight back to the agent instead of being written to a file for an extra read step. Fixes skills, rules, custom agents, plugins, plugin MCP servers and hooks not loading under Application Default Credentials (`AGY_ADC_AUTH`); infinite re-compaction when one message/tool output/attachment was too large for context; long Markdown-table links being truncated to their first line; and plugin/MCP sign-in tokens too large for the macOS/Windows system keychain (now stored in the CLI's private secrets file).

**Source:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.7

### Cline v4.1.26 — Cloud Task Model Toggle, Retry Cut to 3, Gemini Key 429 Fix (October 26, 2026)
Cloud tasks gain a Local | Cloud toggle in Settings > API Configuration so the cloud model is picked and stored separately from local models, and starting or resuming a cloud sandbox shows a progress card (repo, branch, steps: start sandbox → clone repository → start agent) that collapses once the agent starts; cloud sessions now hide the Plan/Act toggle and auto-approve bar instead of showing them disabled. Model requests now retry at most 3 times instead of 5. With no model chosen, the Cline provider uses Claude Sonnet 5.5 again (back at the top of the recommended list); Kimi K3 gets `max` reasoning for Extra High/Max instead of an `xhigh` value it rejects. The catalog adds CommandCode, Reflection, Liquid Inference and Munito AI and drops CrofAI, iFlow and Llama; ClinePass defaults to Kimi K3.1 Pro and adds MiniMax M3.1 Flash and DeepSeek V4.1 Flash 1017. Fixes: GPT-6 models (`gpt-6-sol`, `gpt-6.1-sol`) now work on OpenAI/Azure-compatible endpoints and SAP AI Core no longer rejects requests with "Unsupported parameter: 'max_tokens'" (both use `max_completion_tokens`); Gemini API keys no longer send native Google Search, which had made free-tier keys fail every turn with a 429 quota error on Gemini 3+ and dropped every tool on Gemini 2.x; toggling Plan/Act while a task is starting no longer drops the first prompt; and starting a command no longer moves keyboard focus into the terminal.

**Source:** https://github.com/cline/cline/releases/tag/v4.1.26

### Crush v0.98.2 — "Keanu" Theme, Parallel-Tool-Call Crash Fixed, OAuth Sign-In Repaired (October 23, 2026)
Adds a built-in `keanu` theme and optional signed Packslip release manifests. Fixes a crash when parallel tool calls finish together; OAuth sign-in and credential refresh (now re-asking for sign-in on any provider 401, giving sub-agents the renewed credential after a refresh, and stopping retries of a refresh token the provider already refused); Ctrl+C now interrupts startup and custom provider model discovery no longer stalls it; server prompts and permission requests being scoped to the wrong session; and TUI status/spinner/tool-header display. Also stops finished background jobs from consuming the background-job budget, and sends OpenRouter app-attribution headers plus a `session_id` for sticky routing.

**Source:** https://github.com/charmbracelet/crush/releases/tag/v0.98.2

### Kilo Code v7.8.18 / v7.8.17 — Hosted Cloud Sessions Via the Local Kilo API, MCP Redirect Blocking (October 26, 2026)
CLI 7.8.18 exposes hosted cloud sessions through the local Kilo API so editors can discover, read and interact with a hosted session without ever handling provider credentials. Patch fixes include updating the MCP TypeScript SDK to 1.32.1: remote MCP servers whose URL redirects to another origin, or which answer `POST` with a 301/302/303 redirect, no longer connect — the server's final URL must be used. Also bumps DOMPurify to 3.4.17 (Dependabot sanitization alerts) and vite to 7.3.7 to fix the launch-editor CLI flag misinterpretation flagged as CVE-2026-112944; the VS Code extension fixes a copy-selection bug where the selection cleared and focus jumped to the prompt in VS Code 1.143. CLI 7.8.17 shipped on October 23.

**Source:** https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.18

### Gemini CLI v0.66.0-preview.0 and v0.65.0 Hardening — Untrusted-Folder Enforcement, RFC 9207 OAuth (October 20, 2026)
v0.65.0 (published 2026-10-20T21:17:57Z) enforces read-only workspace settings in untrusted folders, aligns OAuth callback `iss` parameter validation with RFC 9207 metadata, supports custom OTLP headers in telemetry configuration, and fixes infinite verification/OAuth retry loops. v0.66.0-preview.0 followed on 2026-10-20T21:04Z; nightly builds continue under `v0.67.0-nightly.*` through 2026-10-27.

**Source:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
**Source:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0

### Zed v1.25.3 — Dependency Updates for Recent Ecosystem Vulnerabilities (October 23, 2026)
Zed's 103rd release of 2026 ships only "Updated dependencies to address recent software ecosystem vulnerabilities" (PRs #66023, #65963) for macOS, Windows and Linux. It follows v1.25.2 (Oct 21), which added GPT-6 Astra, Claude Fable 5.1 and Claude Opus 5.5 on Amazon Bedrock and enabled ACP session notices and context compaction.

**Source:** https://github.com/zed-industries/zed/releases/tag/v1.25.3
**Source:** https://zed.dev/releases/stable

### Anthropic Files S-1 With the SEC — Nasdaq Ticker "ANT", $16.3B First-Half Revenue, $80B Net Loss (October 26, 2026)
Anthropic, PBC filed a public Form S-1 with the SEC for a proposed IPO of Class A common stock, intending to list on the Nasdaq Global Select Market under the symbol "ANT"; share count and price range are not yet determined (Goldman Sachs and Morgan Stanley are the prospectus contacts). The S-1 discloses revenue of $41M (2023), $386M (2024), $4.585B (2025) and **$16.286B in the first six months of 2026 alone**, against a **$80B net loss** for H1 2026, with $141.1B raised as of end-June and $6.2B of debt taken on for infrastructure build-out. Enterprise traction is disclosed for the first time: more than 14,000 enterprise customers as of September 30, 2026 — 11,900 with ≥$100K revenue, ~1,900 with ≥$1M and ~250 with ≥$10M. Concentration risk is explicit: a quarter of revenue comes from the top five customers, though no single customer exceeds 10%. The risk factors span AI misuse, loss of control, authoritarian abuse, economic disruption, the Pentagon supply-chain blacklist, and a September 2025 disclosure that a Chinese state-sponsored group manipulated the **Claude Code** tool to attempt infiltration into roughly 30 global targets.

**Source:** https://www.anthropic.com/news/s1-sec
**Source:** https://www.theguardian.com/technology/2026/oct/26/anthropic-files-listing-stock-market

### Broadcom Arranges $63B Financing Structure to Buy AI Chips for Anthropic (October 26, 2026)
Bank of America, Blackstone, Citigroup and Morgan Stanley announced a **$63 billion** financing structure to enable AI compute capacity in partnership with Broadcom — one of the largest debt financings tied to the AI build-out. The structure finances the purchase of Broadcom AI chips and networking gear for Anthropic. Reports note Broadcom's CEO intervened to seal the deal. This lands the same day as Anthropic's S-1 and underpins Anthropic's disclosure of $6.2B of existing debt and heavy third-party compute spend.

**Source:** https://www.broadcom.com/company/news/financial-releases/64786
**Source:** https://www.reuters.com/legal/transactional/wall-street-banks-blackstone-line-up-63-billion-finance-broadcom-chips-anthropic-2026-10-26/

### Enterprise Adoption Signal: Replit's "Self-Driving Company" Numbers and Agent Habitat Framing (October 26, 2026)
Replit published "The Rise of the Self-Driving Company" with concrete internal metrics: engineers **nearly tripled code output** in H1 2026 while review times, reverts and product incidents stayed flat, and the pattern spread from engineering to design and support. The customer case study: at Sumitomo Mitsui Finance and Leasing (SMFL), "a development process that previously required six people working for six months was completed by just one person in one week", with a project estimated at ~JPY 3B for the full lifecycle now expected to cost under JPY 1B. Replit argues the missing layer is an **"Agent Habitat"** — agents today live in chat windows, personal accounts and one-off scripts holding whatever credentials they were handed, with no decided boundaries and no audit trail — and cites the Hugging Face incident as the failure mode. It also leans on Nadella's framing that "we need to separate the supply of intelligence from the authority over it".

**Source:** https://replit.com/blog/rise-of-self-driving-company

### Community Pulse: Claude Code Now Drafts Bug Reports About Its Own Behavior (October 26, 2026)
A Tell HN post documents Claude Code detecting an anomaly in itself and offering to file it: the tool reported "Background Bash task reported completed (exit 0) while its process was still running" for two `run_in_background` Bash commands (one `sleep 70`, one `sleep 90`) and presented a drafted bug report with options "1 to review · 2 to send · 0 to dismiss". The poster's framing — "This is a product in itself... the ability to identify behavioral anomalies that might be bugs and to report them" — is the notable part; the top comment asks the practical question: "Who pays for these tokens?" This is the first public sighting of a self-diagnosis loop inside a coding agent CLI.

**Source:** https://news.ycombinator.com/item?id=50249397

### Community Pulse: A Week of Harness-on-Harness Tooling on Hacker News (October 25–26, 2026)
HN activity in the window shows the CLI-tool layer being wrapped by third-party harnesses rather than replaced: "Agent Tree" (live terminal monitor for Claude Code agents), "MuscleMemory" (skills learned by Codex, reused by Claude Code), "Paradev" (one workspace for Claude Code, Codex and any coding agent), "Quorus" (Claude Code writes, nothing hits main until Codex says GO), "Compactly" (compact Claude Code sessions between tasks), "Limitbreak" (switch Claude Code accounts mid-session on a limit), "Cost-effective agentic delegation scheme for Claude Code, Cursor and Codex", and an Ask HN thread "Is it true the Claude Code is better than Codex for coding?". Cost pressure is explicit — a separate Ask HN thread from Oct 24 records "Kimi Code hit its 5-hour limit after $1.37 of API usage". Two security-flavored posts stand out: "Compaction Laundering: Provenance Destruction in Context-Compacting Coding Agent" and "AI agents have few qualms with log tampering".

**Source:** https://news.ycombinator.com/item?id=50243565
**Source:** https://news.ycombinator.com/item?id=50222093
**Source:** https://news.ycombinator.com/item?id=50249397

### Community Signal: Claude Code Issue Tracker — Safety False Positives, Destructive Test Cleanup, Desktop Effort Bug (October 26–27, 2026)
A dense new Claude Code issue cluster (opened 2026-10-26T21:46Z to 2026-10-27T01:01Z) shows safety and lifecycle friction dominating: #105314 "Cyber safeguard blocks legitimate headless tool connections", #105312 "Opus 4.5 safety safeguards triggering excessively" and #105302 "Safeguards triggered without apparent reason" continue the pattern logged on Oct 23–24. #105298 is the sharpest one — "Model-written test deleted the local repository checkout via unpatched cleanup rmtree". #105310 reports the Desktop app's Code sessions always launching at effort max regardless of the effort picker; #105296 reports a startup segfault (0xD0) on every launch under Bun 1.4.4 on Linux arm64 without LSE; #105321 reports the Context7 HTTP MCP plugin failing with `InvalidHTTPResponse` during version negotiation on Windows; #105305 reports usage-credit spend shown as 99% weekly / 1% session; and #105315/#105313 request showing and dispatching the account a session runs under. Codex shows a parallel cluster: #57305 "GPT-6.1 Sol hangs before first response in Codex CLI 0.164.0 while GPT-6 Luna works normally", #57300 startup failure with missing projects and null values in `codex.toml`, #57299 Codex Desktop still advertising Superpowers skills after individual disabling, #57298 "Daybreak restriction triggers on personal project", and #57322 asking to combine the 5-hour Codex limits into a weekly allowance. Gemini CLI reports #29971 (replace and write_file still write when cancelled during file preparation) and #29970, a request for an in-process extension API for the prompt input modeled on Claude Code's Mods contract.

**Source:** https://github.com/anthropics/claude-code/issues/105314
**Source:** https://github.com/anthropics/claude-code/issues/105298
**Source:** https://github.com/openai/codex/issues/57305
**Source:** https://github.com/google-gemini/gemini-cli/issues/29970

### Market Note: Anthropic's S-1 Discloses a Claude Code-Driven State-Sponsored Intrusion Attempt (October 26, 2026)
One S-1 disclosure is directly relevant to this topic's subject matter: Anthropic states that in September 2025, staffers "detected and assessed with high confidence that a Chinese state-sponsored hacking group manipulated our Claude Code tool into attempting infiltration into roughly 30 global targets, including large technology companies, financial institutions, chemical manufacturing companies, and government agencies". It is the first time the Claude Code tool itself is named in a public regulatory filing as the instrument of an intrusion attempt — relevant to the ongoing debate about agentic CLI sandboxing, credential reach and permission design.

**Source:** https://www.theguardian.com/technology/2026/oct/26/anthropic-files-listing-stock-market
**Source:** https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm


## 2026-10-28 (recovered context — archived from active window on 2026-10-30)

*Reconstructed on 2026-10-29 from session history after the 2026-10-28 run wrote no daily report. Moved to archive on 2026-10-30 to keep the active window under ~60 KB; content is unchanged and remains fully recoverable from this file and from daily_reports/2026-10-27.md.*

### Recovered 2026-10-28 Context: Anthropic Demonstrated Claude Finding 62 Real Browser Vulnerabilities (October 27, 2026)
Anthropic published research on an **unreleased internal research model** that found and exploited real vulnerabilities across the stack: a full exploit chain executing arbitrary code as the user **outside the browser sandbox** (PoC launches Calculator from stock macOS Chrome in seconds), **62 CVEs** reported to Google and all patched in Chrome 156 — including **13 sandbox escapes and 21 renderer compromises**. The Safari chain was data-only (no code execution) but bypassed same-origin policy and was fixed the same day; plus an **Android lock-screen bypass** (photos/PII from a stolen, locked phone) and a **remote Windows crash via HTTP/3**. This is the counterpoint to the classifier false positives above: the capability is demonstrably there, and the product policy is what blocks it in the field.
- https://www.anthropic.com/research/discovering-vulnerabilities-with-claude

### Recovered 2026-10-28 Context: Anthropic's S-1 Shows Cloud Suppliers Will Capture Most of the IPO Value (October 27, 2026)
Analysis of the S-1 supplier-financing economics: *"Anthropic promised $22 of orders for each dollar Amazon put in"* (Google ≈$11). The three cloud contracts total **$269.4B** (≈$33B/year, roughly 71% of the May run-rate) plus a Broadcom lease with up to **$42B in convertible notes**. H1 2026 financials: **$16.29B revenue, $131.65B in cash and short-term investments, $693M operating loss**. Read together with the IPO filing, the tooling company is a demand vehicle for compute — the agentic-CLI layer monetizes through the model layer's capex.
- https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/

### Recovered 2026-10-28 Context: Guidewire Buys Hyperexponential for $1.7B Cash (October 27, 2026)
The insurance-software incumbent bought the agentic underwriting startup for **$1.7B in cash** (total deal ≈$2B with $400M reserved on revenue targets). Hyperexponential (a16z and Battery Ventures backed, ~$90M raised, UK) says nearly **600 insurers in 40 countries** use its software. The signal for agentic tooling: incumbents now **buy agent platforms rather than build them**, and agentic software is being valued as infrastructure rather than as a feature.
- https://techcrunch.com/2026/10/27/guidewire-buys-hyperexponential-for-1-7b-in-cash/

### Recovered 2026-10-28 Context: OpenAI's "dots" Turns the Coding Tools Into an Always-On Personal Assistant (October 27, 2026)
TechCrunch's Disrupt piece, with enterprise product lead Alexander Embiricos: ChatGPT Work was **spun out of the agentic coding tools**; it ships in ChatGPT desktop/mobile for **Pro tier and above, from $100/month**, connecting to calendar, email and computer to work proactively. *"You could achieve much of dots' functionality with OpenAI's Codex app… but that requires more work and hand-holding."* The coding agent is becoming the substrate for a consumer assistant — the CLI product line is being repurposed upward.
- https://techcrunch.com/2026/10/26/how-openai-turned-its-coding-tools-into-dots-an-always-on-personal-assistant/

### Recovered 2026-10-28 Context: Bank of America Tells Customers Not to Share Passwords With AI Agents (October 27, 2026)
BofA is warning customers never to share a username/password with *"an outside service, including an AI-enabled tool or agent that offers to act on your behalf"*, with banks *"reportedly grappling with unauthorized agents accessing their customers' money."* This is direct friction on the credential-handoff pattern that dots, MCP connectors and Claude Code plugins all depend on — **the enterprise credential story is now a bank-policy problem, not just an engineering one.**
- https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/

### Recovered 2026-10-28 Context: Independent Audit Finds No Measurable Degradation in Opus 5.5 Over 34 Days (October 27, 2026)
LiveNerf ran 2,336 screening questions (GPQA Diamond, MMLU-Pro, competition math, AIME) to a frozen 78-question panel plus a 12-question control arm, executed daily through a **pinned Claude Code CLI**. No statistically significant degradation across two completed 10-day windows against launch baseline (baseline 58.4%; window 1/2: 59.2%/57.1%; minimum detectable effect ≈6.6 points per 10-day window). Relevant because it separates real model drift from the "it feels worse" complaints that dominate the trackers — and it pins the CLI as the measurement instrument, i.e. **the harness is now part of the benchmark definition.**
- https://blog.nathanlangley.dev/posts/livenerf-30-days.html

### Recovered 2026-10-28 Context: FrontierCode 2.0 — Coding Benchmarks Are Moving From Spec-Following to Mergeability (October 27, 2026)
Cognition scored models on **production code standards** (mergeability against rubric criteria) with *unstated* constraints — reuse existing abstractions, follow repo conventions, write real tests — specifically to break spec-following saturation. Top score only **45.5%**, *"far from saturated"*. Score/cost: Claude Opus 5.5 54.6%/$45.5 · GPT-6 Astra 53.3%/$42.8 · Grok 4.7 47.6%/$28.6 · Gemini 4 Argon 47.5%/$26.3 · Muse Wonder 1.0 47.0%/$24.3 · SWE-2 50.0%/$23.9 · DeepSeek V4.1 Flash 43.9%/$19.3 · Kimi K3 44.2%/$17.7. Note the top score (54.6%) differs from the reported leader (45.5%) — the two numbers measure different things, and western OSS models lag the frontier here. For CLI users the operative conclusion is that **mergeability, not pass rate, is the metric that predicts whether the tool is usable.**
- https://cognition.com/blog/frontier-code-2.0

### Recovered 2026-10-28 Context: Amazon Redefines the SDE Role Around Outcomes, Not Tool Use (October 27, 2026)
Amazon engineering leadership (Terk Terkowitz) published a customer-model guideline for the software engineer role: the role and its output are **not defined by AI use**, and long-term outcomes should be measured rather than tools. Framed as a customer model citing "thousands of SDEs" and Werner Vogels' 2026 CTO predictions. A direct counterweight to the vendor-side framing of "agents as the new SDLC" — the largest employer of coding agents in the world is explicitly refusing to make adoption the metric.
- https://www.aboutamazon.com/news/company-news/amazon-software-engineer-role-guideline-ai

### Recovered 2026-10-28 Context: Claude Code's 512,000-Line Source Leak Is Still Circulating (2026-03-31 packaging accident, re-circulated October 27, 2026)
Version 2.1.88 shipped a 59.8 MB source map referencing roughly **1,900 unobfuscated TypeScript files** on R2, mirrored to GitHub and reaching 84,000+ stars within two hours. No customer data and no model weights were exposed — the harness layer only. The operational risk: internal workspace package names were already registered with a **disposable email address**, so a blind `npm install` on a clone could pull malicious code. A concrete supply-chain lesson for anyone who has adopted Claude Code plugins.
- https://thoughts.jock.pl/p/claude-code-source-leak-what-to-learn-ai-agents-2026

### Recovered 2026-10-28 Context: Vendor Convergence on "Agent Runtime as SDK" and "Agent as SDLC Primitive" (October 27–28, 2026)
Three independent framings landed in one day. **Cursor's Agent SDK** — "the framework we use to build our own managed agents like Bugbot, Security Reviewer and Rollouts" — lets you define agents as code and deploy them to Cursor infrastructure, responding to team events (PR review, compliance, incident investigation) under inspectable policies. **Microsoft's "The new primitives of agentic software delivery"** reframes the SDLC as Plan → Build → Verify → Observe, each with a human job-to-be-done and a durable artifact, plus a "knowledge layer" gluing goals, design decisions, validation evidence, release history and agent behavior logs — with the warning that teams transforming the entire SDLC at once tend to struggle. **CodeRabbit launched security agents** for runtime security validation, cross-repository deep scans and enforceable merge gates targeting auth bypass, broken access control and SQL injection. The agent runtime is being commoditized into an embeddable SDK, and the verification layer is being productized alongside it.
- https://cursor.com/blog/agent-sdk
- https://commandline.microsoft.com/new-agentic-software-delivery-primitives/
- https://www.coderabbit.ai/blog/coderabbit-secure-cross-repository-security

### Recovered 2026-10-28 Context: The Agent-Identity Problem Is Now a Named Industry Problem (October 27, 2026)
Formal's writeup on letting cloud agents query production with OIDC instead of secrets drew pointed skepticism: OIDC's trust model assumes the token subject is the responsible party, **which no longer holds with agents** ("the user can just shrug it off, saying 'oh the AI went rogue'"), and agents get the same access as the user with no way to limit actions. Practitioner response: scoped agent identity via Pocket ID, pre-prod-only policies — and SSO requires business/enterprise plans. This is the same structural gap as Bank of America's credential warning and as the `permissions.ask` / default-deny requests in the trackers: **agent identity is the missing primitive in agentic tooling.**
- https://www.formal.ai/blog/cloud-agents-oidc-infrastructure/

### Recovered 2026-10-28 Context: Further Agentic Signals Worth Recording (October 27–29, 2026)
- **GitLab security incident** — attempted exploitation of CVE-2026-97229, a CI/supply-chain exploit attempt (HN 73 pts). Directly relevant to agent-generated-PR attack surface. https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html
- **"Claude Code found 14,219 photos of my face on my Android that I never took"** — agent over-reach into local media; an autonomy-backlash datapoint (HN 14 pts). https://news.ycombinator.com/item?id=50278101
- **Anthropic removing its last safety/disclaimer prompt** — trade-press framing: *"Anthropic now lets Claude users jump out of plane without parachute"* (The Register, HN 8 pts). https://news.ycombinator.com/item?id=50274666
- **"OpenAI still has a WebRTC Problem"** — real-time agent transport friction persists (HN 4 pts). https://moq.dev/blog/webrtc-is-still-the-problem/
- **Qwenputer** — a functioning, deterministic RISC-V CPU inside Qwen3.5, i.e. model-generated hardware as an agentic artifact (HN 58 pts). https://divagr.com/blog/qwenputer
- **Cloudflare Computer v0.7.0** — durable JavaScript: agents resume after a deploy or crash and pause for approval via `onInterrupt: "replay"`. https://developers.cloudflare.com/changelog/post/2026-10-26-computer-durable-javascript/
- **ARGUS** — open-source (MIT) agentic security-operations platform: Detect → Investigate (read-only AI specialists) → Authorize (scope, policy, approvals, dry-run) → Respond (reversible actions, signed audit trail), with reversible autonomy **disabled by default**. https://argusone.website
- **Disruptive raised a $10B blind-pool fund** — backing ≥10 late-stage companies with checks up to $1B; first blind pool for the firm, largest VC fund raised in Texas history. General AI capital, not coding-agent specific. https://techcrunch.com/2026/10/27/disruptive-raises-10b-fund-to-make-big-bets-on-at-least-10-companies/
- **Anthropic's drug-development progress** — six partners (BigHat, Bristol Myers Squibb, Divergence Labs, Enveda, Generate Biomedicines, The Column Group); Enveda chemists "spent up to 75% of their time on paperwork"; Anthropic has "already prioritized specific improvements to our models" based on the research feedback loop. https://www.anthropic.com/research/early-progress-drug-development
- **"What coding agents pick"** — Claude Code (Opus/Sonnet/Haiku 5.5) vs DeepSeek V4.1 Flash and GLM 5.3 Flash inside OpenCode on identical prompts: the same top pick in only 2 of 6 category/stack pairs (Next.js deploys split 16/30 Resend vs the rest; Python ORM picks sqlalchemy 18/18). Model choice inside a CLI is far less deterministic than vendor benchmarks suggest. https://whatagentspick.com/claude-vs-deepseek-vs-glm/


## 2026-10-29 (archived from active window on 2026-10-30)

*Preserved verbatim. Moved to archive on 2026-10-30 to keep the active window under ~60 KB; the summary remains in daily_reports/2026-10-29.md.*

## 2026-10-29

*Coverage window: October 27–29, 2026 (last effective check was 2026-10-27; the 2026-10-28 run updated its findings files but never wrote a daily report or state file, so it is treated here as unrecorded). Sources are primary release APIs, npm registry metadata and company announcements wherever possible.*

### Codex CLI — 0.166.0 Alpha Train Advances Twice (October 28, 2026)
OpenAI published `rust-v0.166.0-alpha.5` (2026-10-28T04:43:10Z) and `rust-v0.166.0-alpha.5.1` (2026-10-28T19:17:02Z). **Both release bodies contain only the version line (~25 and ~27 characters) — no changelog is published for either build**, so no feature-level detail can be sourced. npm `@openai/codex` shipped the matching platform artifacts for `0.166.0-alpha.5.1` across darwin-arm64 (19:30:23Z), win32-arm64 (19:29:51Z), win32-x64 (19:32:08Z) and linux-arm64 (19:32:31Z). The npm `alpha` dist-tag now points at `0.166.0-alpha.5.1` while `latest` remains the stable `0.165.0` (published 2026-10-27T20:09:38Z). Note the version jump: the last documented stable was 0.164.0 on 2026-10-23, then 0.165.0 stable on 2026-10-27, and the 0.166.0 alpha train on 2026-10-28.

**Source:** https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1
**Source:** https://registry.npmjs.org/@openai/codex

### Antigravity CLI 1.4.9 — Google `execute_url` Permissions Narrowed, Image Paste via Terminal Shortcut (October 28, 2026)
Stable release published 2026-10-28T05:59:42Z. **Security-relevant change:** approving a Google site such as `www.google.com` or `cloud.google.com` no longer implicitly allows sensitive Google apps (`mail.google.com`, `docs.google.com`, `drive.google.com`, `accounts.google.com`, `console.cloud.google.com`) — each now requires its own approval. **Added:** image pasting through the terminal's own paste shortcut (Cmd+V / Ctrl+Shift+V with only an image copied) and by dragging image files into the prompt (attached rather than inserted as a path), including over SSH with X11 or Wayland forwarding; the paste key now reports "No image or video found in the clipboard" and names the missing clipboard tool (e.g. `wl-clipboard` on Wayland). `/plugin` Discover tab groups marketplace plugins into the same sections as the Antigravity plugin marketplace; `agy plugin validate` warns on non-kebab-case plugin names, blank/absolute/outside-plugin `logo` paths and context-provider `iconUri` values; the `/diff` position indicator now states what it counts ("[1-44 of 195 files]" vs "rows"); Auto mode's sandbox reviewer now knows whether the working directory is inside a Git repository and no longer burns its time budget running `git status` in non-repos. **Fixed:** always-allow rules for multi-line commands (`python -c`, `node -e`) never taking effect; onboarding screens cut off in small terminals; Vim-mode `r`/`f`/`F`/`t`/`T` cancelling on a space target; invisible U+FFF9/U+FFFA characters around wrapped code; `INVALID_MEDIA` poisoning a conversation after the agent viewed a corrupt image; conversations stuck after a tool result lost its matching tool call; Google Cloud models failing once the system prompt/tools changed after a thinking block (outdated thinking blocks now dropped); the `/browser` subagent not receiving the current page snapshot with Chrome DevTools MCP 1.11+.

**Source:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.9

### Kilo Code v7.8.21–v7.8.25 — Hosted Workspace Operations Exposed Locally, Background-Job Exit Codes, JetBrains RC (October 28, 2026)
Five Kilo releases in a single day. **v7.8.21** (09:55:05Z) exposes hosted workspace operations through the local Kilo API: list, create, read, check status of and delete hosted workspaces; list their sessions; list workspace profiles; start another session inside a workspace; and follow Cloud session preparation/status events through a local system feed route. Hosted operations exchange the stored user credential for a short-lived **Cloud Agent control token** before any Worker call, so the original credential is never sent to the Worker. **v7.8.22** (10:42:55Z) shipped an effectively empty release body. **v7.8.23** (15:10:46Z) preserves the real exit code or signal of background jobs owned by Kilo instead of recording a failed job as successful; gives large-session compaction enough output space for thinking and a complete summary (rejecting cut-off summaries without losing history); keeps a reply another Kilo process on the same data directory is still writing instead of deleting it; and fires each scheduled wakeup and cron task exactly once when several Kilo processes share a workspace. **v7.8.25** (20:43:24Z) preserves the existing package-manager user-agent when reading npm configuration — published to npm under the `rc` dist-tag, while `latest` still points at 7.8.18. The **JetBrains plugin v7.2.1-rc.1** (19:50:51Z) adds hosted Kilo Cloud sessions to Agent Manager, sharing the editor chrome of local and worktree sessions, with hourly compute price in the workspace header; it also restricts browser and MCP OAuth URLs to HTTP(S), scopes the MCP SSE probe to its own request and redirects, and blocks compromised eMudhra certificates.

**Source:** https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.21
**Source:** https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.23
**Source:** https://github.com/Kilo-Org/kilocode/releases/tag/jetbrains/v7.2.1-rc.1

### Qwen Code v0.26.3 — Generated UI Cards, Persistent Workflow Mode, and a Desktop Build (October 28, 2026)
Qwen Code shipped both a CLI and a desktop release on 2026-10-28. **CLI v0.26.3** (14:36:14Z; npm 14:41:55Z): Generated UI cards keep inputs and state across navigation and split views, show live views after the initial calculation, and are offered only to clients that can render MCP Apps (unsupported clients get an explicit reason); persistent session **Workflow mode** can be enabled with `--workflow-mode on`, `/workflows mode on`, the SDK, or ACP, and workflow switches now reach the CLI sandbox; tool results shrink to remaining headroom before auto-compaction, and `qwen-latest-series-` / `qwen4` aliases are detected as 1M-token-context models; valid XML tool calls are recovered when parameters quote other call markup, malformed blocks are isolated, and quoted examples are not dispatched; ACP and daemon clients keep rewind identity consistent across retries, cancellations, checkpoints and recordings; `/autofix-pr start` stops when the PR head branch has unpushed commits or uncommitted changes; `/verify-pr` gains a failures ledger that rejects findings or blocked verdicts unless failures are attributed to the PR. **Desktop v0.26.3** (16:51:11Z) added session permission rules and Auto approval (PR #15448), an experimental shared agent loop with headless execution (PR #15369), a fix hardening serve-token resolution against project env injection (#15228), preservation of OpenTUI session replay and rewind (#15384), and a fix stopping double-counting of reasoning tokens in cost estimates (#15464). A TypeScript SDK v0.1.25 also shipped (16:16:39Z), and the nightly `v0.26.3-nightly.20261028.ca204559a7` (22:29:36Z) was published **with an empty release body**.

**Source:** https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3
**Source:** https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.3

### Goose v1.57.0 — Allowlist Now Requires HTTPS, Callers Can Supply Session IDs (October 28, 2026)
Stable release of the active Goose repository (`block/goose` redirects to `aaif-goose/goose`), published 2026-10-28T19:26:10Z, following v1.56.0 (2026-10-23). Features: the allowlist now requires HTTPS and validates redirects, blocking on policy failure (PR #12619); callers can supply Goose session IDs (PR #13098). Fixes include Linux window icons restored in the desktop app (#13120); OpenRouter resolving variant suffixes like `:free` and `:nitro` to the base model (#12979); the desktop app starting the agent only once after a fork (#13139); the scheduler using recipe settings in scheduled runs (#13138); voice using system trust for WebSockets (#13075); MiniJinja render errors surfaced in custom system prompts (#12794); code-mode keeping the recipe `final_output` tool for the model (#13102); the CLI configuring an unavailable default provider (#13024); developers terminating owned shell process trees on cancellation (#12958); and ACP failing the session/prompt when a turn ends on an error (#13043). Dependency hygiene: zstd bumped to 0.14.3 for RUSTSEC advisories (#13162) and `jsonwebtoken` removed to avoid ignoring cargo-deny advisories (#13141).

**Source:** https://github.com/aaif-goose/goose/releases/tag/v1.57.0

### Zed v1.26.2 Stable and v1.27.0-pre — ACP Defaults Scoping, Agent Panel Memory, Repo-Style Commit Messages (October 28, 2026)
**v1.26.2** (stable, 15:16:13Z): improved ACP configuration defaults so they apply only to *new* conversations, preserving session settings when reopening existing conversations (#65850); improved fuzzy searching in agent model and configuration option pickers for Zed Agent and third-party ACP agents (#64147); improved OpenCode compatibility when replaying DeepSeek reasoning and disabling thinking for Google models (#65922); thinking controls now explain when thinking cannot be disabled at the selected effort level (#62480). Fixes: hangs when restoring agent threads with subagents (#65177); a crash in the Agent Panel when mentioning a file whose name contains a line break (#65693); agent authentication overwriting drafts (#65844); agent configuration defaults saved before acceptance or ignoring the agent's returned value (#65849); duplicated thinking text from OpenAI-compatible providers sending both `reasoning` and `reasoning_content` (#65926). **v1.27.0-pre** (15:18:12Z): Agent Panel memory improved by loading tool-call diffs and parsing thread message Markdown only when first viewed rather than at thread load (#65444, #65470); AI commit message generation uses the three most recent repository commit messages as style examples (#61528); improved CPU usage and disk reads while the agent is working on long thread histories (#66015); fixes for external agents' tool call locations opening one line below the reported line (#66110), "Zed quit unexpectedly" on macOS `cmd-q` (#66158) and Solargraph completions crashing Zed (#66157).

**Source:** https://github.com/zed-industries/zed/releases/tag/v1.26.2
**Source:** https://github.com/zed-industries/zed/releases/tag/v1.27.0-pre

### Cline CLI v3.0.74 — Attach to a Running Task, Retry Cap Cut to 3, Gemini Keys Stop Sending Google Search (October 26, 2026)
CLI release published 2026-10-26T04:03:28Z, surfaced in this window and not covered by the prior findings file. Opening a task already running in another Cline app now attaches to that run instead of starting a second unstoppable one, and requests waiting on a closed app fail with a clear message instead of hanging. `cline hub status` / `cline doctor` no longer hang on a frozen Hub — the health check times out after 3 s. A turn whose connection drops after the model streamed only reasoning is now retried. **Model requests retry at most 3 times instead of 5.** Kimi K3 now gets max reasoning for Extra High and Max instead of an unsupported `xhigh` setting. Gemini API keys no longer send native Google Search — free-tier keys had been failing every turn with a 429 on Gemini 3+, and on Gemini 2.x every Cline tool was dropped. Auto-compaction no longer runs for models with unknown context limits. ClinePass now defaults to Kimi K3.1 Pro and adds MiniMax M3.1 Flash and DeepSeek V4.1 Flash 1017; default models change for 56 other providers. Note: the bodies of **Cline desktop v0.0.49** and **Cline SDK v0.2.0** (both 2026-10-26) could not be expanded because the GitHub API rate limit was exhausted — flagged rather than guessed.

**Source:** https://github.com/cline/cline/releases/tag/cli-v3.0.74
**Source:** https://github.com/cline/cline/releases/tag/desktop-v0.0.49

### GitHub Copilot CLI v1.0.105 Stable, Plus a Rolling Unstable Build (October 28, 2026)
`v1.0.105` (stable, 2026-10-28T00:44:43Z) — "Selecting Copilot Fusion High or Max in `/model` now works from long-context sessions". npm `@github/copilot` published 1.0.105 at 2026-10-28T00:44:26Z. A rolling developer build `1.0.102-0.unstable.r40711449110.g5767f52` was published to the `unstable` dist-tag on 2026-10-28T17:06:36Z with no changelog. npm dist-tags: `latest` = 1.0.105, `prerelease` = 1.0.105-1, `unstable` = the rolling build.

**Source:** https://github.com/github/copilot-cli/releases/tag/v1.0.105
**Source:** https://registry.npmjs.org/@github/copilot

### OpenCode v1.19.5 and Process Daemon v0.3.2 (October 28, 2026)
`v1.19.5` (stable, 2026-10-28T06:17:49Z) fixes failed TUI worker requests returning an error instead of leaving the caller hanging (PR #54936). npm `opencode-ai` published 1.19.5 at 2026-10-28T06:17:11Z. A separate tagged **process-daemon v0.3.2** release shipped 2026-10-28T16:05:14Z.

**Source:** https://github.com/anomalyco/opencode/releases/tag/v1.19.5

### Release Cadence: Quiet for the Majors, Busy for the Long Tail (October 28–29, 2026)
**Neither Claude Code nor Gemini CLI shipped a stable release in the window.** Claude Code's npm `latest`/`next` remain **2.1.312** (published 2026-10-27T18:36:10Z, GitHub tag v2.1.312 at 20:24:20Z) — and the npm **`stable` dist-tag lags at 2.1.308** (2026-10-22), a four-version skew between `stable` and `latest` that is worth watching for anyone pinning the `stable` tag. Gemini CLI's `latest` remains **0.66.0** (2026-10-27T20:30:04Z), `preview` = 0.67.0-preview.0, `nightly` = 0.67.0-nightly.20261028.gfa5c17365. Meanwhile Crush shipped only a `nightly` prerelease (2026-10-29T00:51:25Z) with **no changelog body** — stable remains v0.98.2 (2026-10-23) — and Amp (`@sourcegraph/amp`) published four consecutive npm nightlies across Oct 28–29 with no feature notes. The pattern is clear: **the two flagship tools paused while the long tail (Kilo ×5, Qwen Code ×3, Zed ×2, OpenCode, Goose, Antigravity, Copilot CLI) shipped concentrated bursts of scoped fixes** — session/history integrity, background-job exit codes, compaction budgets, and permission scoping rather than new capability.

**Source:** https://registry.npmjs.org/@anthropic-ai/claude-code
**Source:** https://registry.npmjs.org/@google/gemini-cli
**Source:** https://github.com/charmbracelet/crush/releases/tag/nightly

### Enterprise Adoption: GitHub Copilot Fusion Reaches General Availability With a Direct Cost/Quality Claim Against Claude Code (October 28, 2026)
GitHub announced **Copilot Fusion generally available**: instead of picking a model, users select "Copilot Fusion" and Copilot routes/orchestrates which models handle each task, across three effort tiers (Standard / High / Max). The competitive framing is explicit and is the most concrete unit-economics datapoint of the window — on the Artificial Analysis Coding Agent Index, "Copilot Fusion Max scored 60, within two points of Claude Code with Opus 5.5 Max. It delivered that result at about half the average API cost per task, using about half as many tokens and taking about 40% less time per task." Multi-model routing is thus positioned as the way to close the quality gap to Claude Code while halving cost — a direct challenge to the single-model, per-token economics that CLI agent users have been anchored to.

**Source:** https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/
**Source:** https://news.ycombinator.com/item?id=50278478

### Enterprise Adoption: Microsoft Open-Sources Scope, a Platform That Treats Coding Agents as Users of Your Software (October 26, 2026)
Microsoft open-sourced **Scope** on 2026-10-26, a platform for evaluating AI coding agents against representative coding tasks. The framing is the notable part: agents are now treated as the newest *users* of your software — they read your documentation, call your APIs, interpret your error messages and attempt to accomplish tasks; if those surfaces are not designed for agent use, the agent fails in ways that look like model failures but are actually platform failures. This reframes the evaluation problem from "which model is best" to "which codebase is agent-compatible", making documentation quality, SDK design and API error-message clarity measurable engineering requirements. Stated limitation: the benchmark is only as good as the task set, and open-sourcing the platform does not validate the task sets.

**Source:** https://www.thecodew.com/2026/10/developer-tools-watch-october-28.html

### Enterprise Adoption: Cursor Ships an Agent SDK That Moves Agents Out of the Editor (October 28, 2026)
Cursor shipped an **Agent SDK** that moves agents out of the editor entirely, letting them respond to pull requests, CI events and scheduled triggers. Together with GitHub's assisted permissions (Oct 26–27) and Microsoft's Scope (Oct 26), the three moves are coherent: GitHub is tightening the permission surface, Microsoft is building the test harness, Cursor is abstracting the agent into infrastructure — each addressing a different failure mode of the same transition from autocomplete to verification.

**Source:** https://www.thecodew.com/2026/10/developer-tools-watch-october-28.html

### Market: Microsoft Recorded $10 Billion in Revenue From OpenAI in One Quarter (October 28, 2026)
In a regulatory filing on 2026-10-28, Microsoft disclosed that it generated **$10 billion** in revenue from commercial arrangements with OpenAI — including revenue-sharing payments — in the quarter ended September 30, 2026. That is nearly **11% of Microsoft's total quarterly revenue of $92.3 billion** (Microsoft's fiscal year begins in July, so this is Q1 of fiscal 2027). For full fiscal 2026, revenue from OpenAI hit **$24.1 billion**; at the latest quarterly pace Microsoft would pull in ~$40 billion annually from OpenAI-related arrangements. Microsoft also reported **$7.2 billion in outstanding receivables from OpenAI** at end-September, up from $6 billion at end-June. Microsoft's stake in OpenAI declined from about 25% in June to **24% in September**, continuing a slide from roughly 27% after the October 2025 recapitalization — Microsoft did not specify what caused the dilution. Background: OpenAI reportedly shares 20% of revenue with Microsoft under an arrangement in which Microsoft invested more than $13 billion, and an April 2026 agreement has OpenAI continuing revenue-sharing through 2030 subject to a cap, even as OpenAI may use competing clouds.

**Source:** https://techcrunch.com/2026/10/28/microsoft-recorded-10-billion-in-revenue-from-openai/

### Market: October 2026 AI Funding Aggregate Now 95 Rounds / $43.2B (October 28, 2026)
The October 2026 AI funding roundup now reports **95 deals worth $43.2B**, up from the 72 rounds / $41.9B figure recorded in the previous cycle. Per the same aggregation, AI Developer Tools — the segment that directly contains agentic CLI and coding-agent vendors — remains a small share (previously $1.1B across 5 rounds), while Foundation Models & AGI absorbs the bulk. **No funding round specifically for an agentic-CLI or coding-agent vendor was identified in this window.**

**Source:** https://aifunding.me/roundups/october-2026
### Community Pulse: Anthropic's Feedback-Retention Policy Draws the Biggest Backlash of the Window (October 27, 2026)
A dedicated Anthropic help article — *"Is my data used for model training?"* — became the top agentic-tooling thread on Hacker News (224 points, 117 comments, Oct 27). The specific trigger: **thumbs up/down feedback stores the entire related conversation for up to 5 years**, and a commenter confirmed this applies to Claude Code as well. Direct quotes: *"I find the lack of privacy forward thinking from a company I pay a couple hundred a month to kind of atrocious. They're buying no loyalty."* · *"I think it's still a shitty move and I feel deceived. I opted out of training and it's impossible to see for me... that this simple question leads to my data being stored for 5 years and potentially read by human reviewers."* · *"It feels dishonest to give paying customers an opt-out for training on their data and then sneak copies by asking for general feedback without a prominent disclaimer."* The counter-argument in-thread pointed at inference providers with zero-data-retention policies and at local inference. Notably, the thread that generated the most engagement in the window was **about data retention, not about capability** — a meaningful reordering of priorities for the agentic-CLI audience.

**Source:** https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
**Source:** https://news.ycombinator.com/item?id=50259406

### Community Pulse: Agentic Benchmarks Move to "Real Professional Work" and the Reception Turns Skeptical (October 28, 2026)
The highest-scoring agentic thread of the window (203 points / 127 comments) was **Surge's "Dayjob: Tax"** — evaluating AI agents on 50 professional tax assignments. The failure modes drew more attention than the leaderboard. Benchmark skepticism: *"Useless benchmark as it seems to be evaluating literally only the weights."* · *"Is this just giving a general-purpose agent a workspace full of documents and an assignment, then seeing what happens? I feel this doesn't really say anything. It appears they mostly dumped all of this in base models with little to nothing in the way of infrastructure to support it."* The harness argument: *"These types of detail-oriented professional tasks seem like they would perform better with task-specific harnesses."* Error-rate realism: *"10% of the time it works every time"* and *"I wonder if the human baseline is 10%."* A vocal pro-AI minority reported real production wins — *"GPT Sol did better than my specialist accountant this year. It needed a lot of steering from me and about 2B tokens, but that is better than spending $3-4k in preparation fees."* — while another reported an LLM-prepared return *"riddled with errors. The refund was nearly $2k lower than it should have been."*

**Source:** https://surgehq.ai/blog/dayjob-tax
**Source:** https://news.ycombinator.com/item?id=50275626

### Community Pulse: StackOverflow Question Volume Falls Below 1,000/Month (October 28, 2026)
Discussion of StackOverflow's own data showing **fewer than 1,000 questions a month** reached 90 points / 100 comments. Sentiment was bitter toward Stack Overflow's ownership, with AI framed as accelerant rather than sole cause: *"SO's new ownership did it to SO. It's a hostile place with or without AI."* · *"the newer generation of models don't even need Stackoverflow. With tool calling they can pull up as much documentation and source code as you could possibly want."* The counter-argument: *"The peak number of questions was in 2013... They were in decline long before LLMs were on the scene."*

**Source:** https://data.stackexchange.com/stackoverflow/query/1926661
**Source:** https://news.ycombinator.com/item?id=50282454

### Community Pulse: MicroZig's No-LLM Policy Splits the Community Over Whether Bans Are Even Coherent (October 29, 2026)
The MicroZig embedded group adopted a strict no-LLM/no-AI policy (HN, 15 points / 14 comments, Oct 29) and the thread became a proxy fight over the legitimacy of AI bans in open source. Quotes: *"The productive ones will just fork and accelerate faster. I understand the need for the mental muscle, this framing just sounds terrible at this point. Something something human scrutiny is not even an option the people want to consider."* (vkaku) · *"Matthew, the main maintainer, has no hard feeling if someone decides to make an LLM fork. Forks are welcome basically. Indeed no hard feelings."* (paaloeye, a project contributor) · *"Policies like this are unhelpful. This reeks of the academic knee-jerk reaction of ban AI, without considering the reality that yes, students continue to use AI, even if you tell them not to. AI should be used responsibly. Ban the behaviour you don't want, don't ban the technology."* (fps-hero). A contributor also pointed out that some issues in the repo are *"clearly written with LLMs"*, including an active contributor using LLMs to translate comments and help with code — *"So it feels odd for them to suddenly change from this (clearly working) setup."* The pattern (viral policy → fork pressure → enforcement skepticism) is the same shape as the agent-permission debates in the CLI trackers.

**Source:** https://github.com/ZigEmbeddedGroup/microzig/blob/main/CODE_OF_CONDUCT.md
**Source:** https://news.ycombinator.com/item?id=50282865

### Community Pulse: The Torvalds/Claude Code Kernel Patch Is Reviewed as a Working Hybrid, Not a Triumph (October 27–28, 2026)
Follow-up discussion on the Claude Code-assisted Linux page-cache patch (HN 50256421) was notably measured. A Linux-kernel-adjacent commenter: *"This is a perfect example where AI is used / working alongside humans to get the best of both worlds. Humans attempted to fix it and failed multiple times before. Now AI has a fix, which is still not perfect, but still promising. Now, on the current state with the known issue, both humans and AI can look for a fix."* Another flagged the governance value plainly: *"kernel reviewers found a race before anything merged."*

**Source:** https://thenewstack.io/torvalds-claude-code-kernel/
**Source:** https://news.ycombinator.com/item?id=50256421

### Community Pulse: Agent-Runaway Governance Anxiety Is Now a Mainstream Topic (October 28, 2026)
Three separate items converge on agents acting beyond their brief: an agent that executed the same successful SQL query **254 times**; a Science News piece arguing that when AI goes rogue its human overseers may be to blame; and Politico reporting that a **"Powerful Dem trio demands faster AI incident disclosures"**. The signal: enterprise-governance pressure on agentic tooling is arriving from regulators, not just from security vendors — which lands directly on the CLI/desktop-agent products that have the widest blast radius.

**Source:** https://armincat.com/articles/ai-agent-executed-same-query-254-times
**Source:** https://www.sciencenews.org/article/rogue-ai-agents-human-blame-safety
**Source:** https://www.politico.com/live-updates/2026/10/28/congress/powerful-dem-trio-demands-faster-ai-incident-disclosures-01138531

### Community Pulse: Developer-Side Agent Tooling Keeps Shipping Fast on HN (October 27–28, 2026)
A dense cluster of agentic-tooling Show HNs, low engagement individually but shipping steadily: **CleanCode** ("Claude Code and Codex collaborating on one canvas"), a Lisp coding agent claiming to beat Codex on token efficiency by 10x, an AI-review tool optimized for recall, writing AI agents in YAML instead of Python, "Agent Memory Is in the Wrong Place" (Omnara), and **Vercel CI** launching — CI infrastructure continuing to converge around agent-generated PRs.

**Source:** https://news.ycombinator.com/item?id=50265699
**Source:** https://news.ycombinator.com/item?id=50278656
**Source:** https://vercel.com/blog/introducing-vercel-ci

### Community Pulse: Consumer-UI Fatigue and a Monetization Pullback on the Agentic Consumer Side (October 28, 2026)
A parallel strand of the window covers consumer-facing agent fatigue: TechCrunch's *"AI execs may be too out of touch to build for the general public"* (14 points / 3 comments); Nieman Lab on the NYT Cooking app's new AI features drawing *"Users aren't thrilled"* (31 points / 28 comments); The Atlantic's *"vibe coders are clogging app store slop"*; and **IFTTT rebranding to IFTTT.ai while ending unlimited runs on its free plan** — a consumer-agent monetization pullback. Also notable: an Anthropic environment variable letting Claude Code skip the final file-deletion prompt (Oct 27) removes a CLI friction point; UC San Diego launched a Center for Principled Agentic Intelligence (Oct 28); and Anthropic's own experiment reported that **86% of experts followed AI's hidden recommendations while believing they were their own judgment** (automation bias, now a research-community topic).

**Source:** https://techcrunch.com/2026/10/28/ai-execs-may-be-too-out-of-touch-to-build-for-the-general-public/
**Source:** https://www.niemanlab.org/2026/10/the-new-york-times-is-adding-more-ai-features-to-its-cooking-app-and-users-arent-thrilled/
**Source:** https://ifttt.ai/
**Source:** https://today.ucsd.edu/story/uc-san-diego-launches-center-for-principled-agentic-intelligence
### Issue Tracker Signal: Safety-Classifier False Positives Are Now Cross-Vendor and Specifically Target Security Work (October 28–29, 2026)
The single strongest theme across all four trackers this window is the safety classifier blocking **legitimate security engineering**. Claude Code filed three in under two hours: #105833 (2026-10-29T01:09:24Z) describes a German hardware-in-the-loop acceptance test for medical-device manufacturing where an ESP32-S3 tool sends HID keyboard/mouse input and captures screenshots **only on the company's own test bench, with physical access and authorization** — no auth bypass, no install, no persistence, no implant — and asks for the cyber safeguard to be reviewed as a false positive. #105820 (2026-10-28T23:21:40Z) reports the same scenario in a control-concept project, ending *"Das klingt frustrierend, gerade weil das Konzept völlig legitim ist"* — legitimate but flagged. #105821 (2026-10-28T23:30:18Z) reports Mythos 5.1 cyber safeguards falsely flagging legitimate CTF XSS/CSP challenge work. Codex mirrors it: #57869 (2026-10-29T00:59:44Z) is titled *"Codex is FUCKING useless because of these RETARDED 'cybersecurity' classifications"* and #57847 (2026-10-28T22:29:31Z) is simply *"Cybersecurity risks"*. The escalation of complaint quality (profanity in issue titles) is itself a trust/UX signal. Meanwhile Anthropic publicly demonstrated Claude finding real vulnerabilities in Chrome, Safari, Android and Windows — **the asymmetry between what the vendor demonstrates publicly and what the product permits in the field is the sharpest tension in the window.**

**Source:** https://github.com/anthropics/claude-code/issues/105833
**Source:** https://github.com/anthropics/claude-code/issues/105820
**Source:** https://github.com/anthropics/claude-code/issues/105821
**Source:** https://github.com/openai/codex/issues/57869
**Source:** https://github.com/openai/codex/issues/57847

### Issue Tracker Signal: Permission Surfaces Are Requested, Silently Broken, and Shipped — In That Order (October 28–29, 2026)
Permission handling is the common thread across the trackers, and the three states line up neatly. **Broken in Claude Code:** #105832 (2026-10-29T00:56:23Z) shows the Bash tool using `test -f` to probe whether a file outside the working directories exists even though `test` was not allowlisted — *"it still needs to respect `blockReadsOutsideWorkingDirectories`"*; #105819 (2026-10-28T23:21:26Z) shows `permissions.ask` rules being **skipped in sessions spawned by another session** (`start_session`); #105818 (2026-10-28T23:12:17Z) shows *"Yes, allow reading from `<dir>` from this project"* not being persisted. **Requested in Copilot CLI:** #5275 (2026-10-28T12:51:43Z) asks for default-deny tool permissions with an explicit allowlist in non-interactive mode, and #5276 (2026-10-28T13:51:59Z) reports Autopilot overriding skills that require user decisions — `ask_user` auto-replies *"work autonomously"*. **Shipped by GitHub:** assisted permissions landed Oct 26–27. Codex shows the same spread: #57871 (2026-10-29T01:09:18Z) asks for supported attribution for a file-write-unlink denial inside an explicitly writable directory; #57860 (2026-10-28T23:17:37Z) reports a personal workspace receiving a granular policy with `sandbox_approval=false`; #57867 (2026-10-29T00:43:14Z) reports auto-review rejecting an inter-chat status reply despite explicit permanent authorization.

**Source:** https://github.com/anthropics/claude-code/issues/105832
**Source:** https://github.com/anthropics/claude-code/issues/105819
**Source:** https://github.com/anthropics/claude-code/issues/105818
**Source:** https://github.com/github/copilot-cli/issues/5275
**Source:** https://github.com/github/copilot-cli/issues/5276
**Source:** https://github.com/openai/codex/issues/57867

### Issue Tracker Signal: Session and History Integrity Is a Shared Defect Class Across All Four Trackers (October 28–29, 2026)
Cancel, resume, retry and sub-agent teardown all lose or duplicate tool state — the same bug shape in four unrelated codebases. **Gemini CLI:** #30015 (2026-10-29T01:03:55Z) — resuming a session after tool-output masking drops the user's first prompt from history; #30016 (2026-10-29T01:06:46Z) — cancelling while the model answers tool results erases the prompt and the completed tool rounds from history; #30014 (2026-10-29T01:00:59Z) — on a mid-stream retry, function calls from the failed attempt are **still executed and answered**; #30007 (2026-10-28T13:50:24Z) — on SIGTERM/SIGINT during `run_shell_command` the command keeps running, gemini exits 0. **Claude Code:** #105834 (2026-10-29T01:22:34Z) — on Windows desktop, a message sent while Claude is working is queued or turned into an interrupt instead of being delivered into the running turn, so three consecutive mid-turn messages each showed as an interrupted request. **Copilot CLI:** #5266 (2026-10-27T17:34:03Z) — a retried model call streams the failed attempt's partial answer and the retry notice as answer text; #5264 (2026-10-27T15:31:07Z) — the prompt is discarded after a "Submission failed" host-ack timeout, composer cleared and not saved to history; #5265 — input history is last-writer-wins across concurrent copilot processes; #5263 — the SessionClient poll loop keeps retrying after session disposal. **Codex:** #57863 (2026-10-28T23:35:51Z) — stopping a sub-agent through the app-server leaves its sandboxed command running and the parent wedged.

**Source:** https://github.com/google-gemini/gemini-cli/issues/30015
**Source:** https://github.com/google-gemini/gemini-cli/issues/30014
**Source:** https://github.com/anthropics/claude-code/issues/105834
**Source:** https://github.com/github/copilot-cli/issues/5266
**Source:** https://github.com/openai/codex/issues/57863

### Issue Tracker Signal: Desktop Surfaces Now Concentrate the Bug Reports (October 28–29, 2026)
The desktop apps — not the CLIs — are where the failures cluster, and they are overwhelmingly state-integrity and platform-integration problems rather than capability gaps. **Codex desktop:** #57878 (2026-10-29T01:47:33Z) — an existing ~1.2 GB chat becomes unusable and history read fails even for one turn (macOS); #57843 (2026-10-28T21:51:49Z) — Codex Desktop repeatedly ends a turn after partial progress despite actionable work remaining; #57845 — stopping generation in a new chat can leave an untitled, unclickable Recents entry; #57846 — a stopped image prompt has no Edit action and is missing from subsequent model context; #57851 — an explicit GPT-5.6 Pro selection can silently switch to GPT-6 Pro after sending; #57865 — Codex desktop cannot archive managed worktrees because the active task is reported without identifying the holder; #57872 — feature request for a visual office workspace for real projects, chats and agent handoffs; #57879 — Windows 10 Browser Use denies an explicitly allowed origin with a saved permission; #57868 — Windows Computer Use window capture times out in Promob and Calculator. **Claude Code desktop:** #105831 (2026-10-29T00:55:57Z) asks to bring back per-agent model, token count and tool-call count in the workflow panel; #105817 — the side chat in the Code tab cannot attach images and has no dictation button; #105824 — on macOS the auto-updater deletes a running session's binary and the subsequent TCC denial blocks ~/Downloads. **Copilot CLI:** #5278 — native Computer Use state on Windows/Edge lacks a verified URL and web accessibility tree (fail-closed).

**Source:** https://github.com/openai/codex/issues/57878
**Source:** https://github.com/openai/codex/issues/57843
**Source:** https://github.com/anthropics/claude-code/issues/105831
**Source:** https://github.com/anthropics/claude-code/issues/105824

### Issue Tracker Signal: Model, Version and Upgrade Consistency Breaks Across Claude Code and Codex (October 28–29, 2026)
A distinct class of report is about the tools lying about their own state. Claude Code: #105838 (2026-10-29T01:43:20Z) — on Windows, a skill's `effort:` frontmatter is ignored when SKILL.md has CRLF line endings; #105828 — the VS Code extension hides the Effort control when the model setting is `opus[1m]`; #105825 — inconsistent refusal behavior, the model declined a request previously but complied with the same request; #105823 — Enter to confirm a Japanese IME conversion submits the prompt (a regression in 2.1.311); #105829 — channel notifications refused for an individual Max account with *"channels feature is not currently a [something]"*. Codex: #57851 — an explicit GPT-5.6 Pro selection can silently switch to GPT-6 Pro after sending; #57854 — daily usage remains at 0 for hours with a timezone/refresh delay; #57874 — repeated HTTP 400 Bad Request in one project across multiple conversations. Copilot CLI: #5267 — org custom models on `/chat/completions` always fail with 400 because the CLI sends `frequency_penalty`/`presence_penalty`; #5270 — GPT-6.1 Sol locks up plan implementation; #5277 — BYOK Azure Foundry gives no quota warning and `/compact` cannot recover a long session. This is a credibility cost for tools whose whole pitch is operating your machine.

**Source:** https://github.com/anthropics/claude-code/issues/105838
**Source:** https://github.com/anthropics/claude-code/issues/105825
**Source:** https://github.com/openai/codex/issues/57851
**Source:** https://github.com/github/copilot-cli/issues/5267
### Market: Anthropic Files S-1 for IPO — Nasdaq Ticker "ANT" (October 26, 2026)
Anthropic, PBC filed a registration statement on Form S-1 with the SEC for a proposed IPO of Class A common stock, to be listed on the **Nasdaq Global Select Market under the symbol "ANT"**. Share count and price range are not yet determined; the preliminary prospectus will be handled by **Goldman Sachs & Co. LLC** and **Morgan Stanley & Co. LLC**. This is the largest structural event for the agentic-CLI category in the window — the company behind Claude Code, the dominant terminal coding agent, is going public. Note the framing: Anthropic remains a Public Benefit Corporation with its mission intact, and it filed only two days before disclosing a government discount — the IPO and the public-sector push are running in parallel.

**Source:** https://www.anthropic.com/news/s1-sec

### Market: Anthropic–GSA Agreement Gives Government a 40% Discount Across Every Surface, Estimated at $1B Saved (October 27, 2026)
Anthropic expanded its GSA partnership with an agreement giving government partners a **40% discount on Claude Enterprise, Claude for Government, and the Claude API** — for the first time applying across every product surface, both direct purchases today and through cloud providers in coming months, and extending to state, local, tribal and territorial governments. **The discounts are estimated to save the government $1 billion**, with no minimum spend commitment — agencies pay for what they consume. A dedicated implementation program launches in the coming weeks. Adoption numbers: **~500 US federal, state and local government organizations** now use Claude; weekly Claude for Government active users are **up ~8x since February**; usage across federal civilian agencies is **up ~20x in a year**. Claude Code deployments cited: **Utah gave Claude Code to 34 developers across 10 state agencies — 80% had a working environment within 30 minutes and 71% reported saving 20+ hours** by the end of a four-week pilot; a US state CIO confirmed a team responded to a ransomware attack **in 8 minutes versus the usual 2–3 days**; a US federal security team used Claude Mythos to detect and patch a vulnerability that would have allowed takeover of a critical production system in about two hours. For the agentic-CLI theme specifically, this is the first hard ROI dataset for Claude Code in the enterprise — a 71%-time-saved figure from a named state pilot.

**Source:** https://www.anthropic.com/news/expanding-partnership-gsa

## 2026-10-30

*Coverage window: October 29–30, 2026. Baseline: the 2026-10-29 section of this file (effective last check 2026-10-29T01:28Z). Sources are primary release APIs, npm registry metadata, vendor blogs and the four GitHub issue trackers.*

### Claude Code v2.1.314 — Permission Hardening, Gateway IdP-Group Routing, Idle Compaction (October 30, 2026)
GitHub published 2026-10-30T01:06:26Z; npm `@anthropic-ai/claude-code` published 2026-10-30T00:12:56Z with `latest` = `next` = 2.1.314 (the `stable` dist-tag still lags at 2.1.308). The headline is `permissions.blockWritesOutsideWorkingDirectories`, which makes Write/Edit/NotebookEdit refuse paths outside the working directories in *every* permission mode — the enforcement half of the "restrict the agent instead of trusting it" argument that the `~/.ssh` incident below dramatises. Also added: an optional `groups` list on Claude apps gateway upstreams so only developers in listed IdP groups are routed there (including on failover); `guardrail_trace` logging for Bedrock gateway upstreams that records *which* filter fired without the matched text; and **idle compaction** for VS Code and the Claude Desktop Code tab, where a 200K+ token conversation left idle gets summarized and that summary is used on the next message once the prompt cache has expired. Notable fixes: `claude -p` exiting 0 with no output on startup failure (now prints the error and exits 1); Bedrock sessions with many images failing every turn; sessions failing turn after turn with "Invalid effort level" when an admin caps a model's effort (now lowers effort, retries and reports the level used); MCP servers that work without sign-in showing "needs authentication"; `claude mcp logout` reporting success when the sign-in was not removed; PreCompact hook output truncated at 10,000 characters; `~/.claude/skills/.trash` and `~/.claude/plugins/.trash` capped at ~1024 entries; and model IDs spelled with a dot behind an LLM gateway (e.g. `claude-opus-4.8`) no longer being misread as an older model with the wrong context window, output limit, effort or cost. No `2.1.313` exists — the version jumps from 2.1.312 to 2.1.314.
- https://github.com/anthropics/claude-code/releases/tag/v2.1.314
- https://registry.npmjs.org/@anthropic-ai/claude-code

### Codex CLI rust-v0.166.0 — First Stable of the 0.166 Line, and the First Real Changelog in Days (October 29, 2026)
GitHub published 2026-10-29T19:47:53Z; npm `@openai/codex` 0.166.0 published 2026-10-29T19:56:19Z, with `latest` now pointing at 0.166.0 while `alpha` points at 0.166.0-alpha.6. New features: keyboard-driven transcript selection with word/line/page motions plus integrated search and configurable shortcuts (#57221–#57224); consistent Markdown rendering across async questions, choices, answers and transcript replies (#57259, #57292); **GPT-6.1 Terra added to the bundled, Vertex AI and Amazon Bedrock model catalogs** (#57293); `codex queue --resume` to resume unloaded threads after queueing a message (#57232); clearer safety-block explanations with selectable safer follow-up prompts in the TUI (#57363, #57365); and `codex doctor --network-only` for focused config/connectivity/WebSocket diagnostics (#57606). Fixes: preserving acknowledged approvals and permissions when resuming or forking threads (#57227); preserving reasoning-token accounting across resume and fork so compaction does not trigger prematurely (#57839); restoring spawned descendant threads when unarchiving their parent (#57635); app-server thread startup/shutdown race fixes (#57787, #57788); improved TUI reconnection recovery including offline `/quit` and `/exit` (#57820); and standalone release cleanup on macOS with in-use installs or non-ASCII paths (#57503). Chores include Bazel moving to source-built V8 with target-matched Rust bindings and native Windows MSVC archive support, the standalone executor shipping in canonical CLI and app-server packages, and builds standardizing on Node.js 24.22.1 / Rust 1.95.0. The full PR list is ~120 entries.
- https://github.com/openai/codex/releases/tag/rust-v0.166.0
- https://registry.npmjs.org/@openai/codex

### Codex CLI rust-v0.166.0-alpha.6 — Version Line Only (October 29, 2026)
Published 2026-10-29T01:41:25Z with npm platform artifacts at 02:02:36Z. The release body contains **only the version line — "Release 0.166.0-alpha.6" — with no changelog**, identical to the alpha.5/alpha.5.1 bodies. No feature detail can be sourced from the release itself.
- https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6

### OpenCode v2.2.1 — `/goal`, Scheduled Prompts and the `image_generate` Tool (October 29, 2026)
Published 2026-10-29T05:16:55Z. Headline: **`/goal <objective>`** runs in the TUI or Desktop and lets the session continue until a reviewer confirms the objective is met, controllable via `/goal pause`, `/goal resume` and `/goal clear` (#59437) — an explicit completion-verification loop rather than a stop-on-idle heuristic. Also adds opt-in scheduled prompts via `/schedule` and `experimental.schedules` (#59401, #59457); the opt-in `image_generate` tool for background image creation and editing with automatic or configured model selection (#59939, #60096), offering GPT Image 2 after Codex sign-in plus MiniMax and Meta Muse image generation (#60085, #60029, #60081); Responses API support for OpenRouter, DigitalOcean and Venice including freeform tools (#59991, #59963); a redesigned model picker as the Desktop default, searching favorites, recent models, providers and variants (#59997); and an activity-pill view of running background shells with live output in Desktop (#59496). Fixes include retrying provider throttling correctly instead of reporting it as context overflow (#59649), preserving more context headroom when fitting tool output into the window (#59934), and keeping Git snapshots working in split-index repositories (#59417). **Breaking change in `@opencode/ai`**: the fal, Black Forest Labs, Replicate and Stability providers are removed along with their entry points (#59977) and five legacy provider paths are renamed to nested paths (#59506).
- https://github.com/anomalyco/opencode/releases/tag/v2.2.1

### OpenCode v2.2.2 — Image Generation On by Default, Unified Quote Editing (October 29, 2026)
GitHub published 2026-10-29T18:43:03Z; npm `@opencode/cli` 2.2.2 published 18:40:06Z, with `@opencode/core`, `@opencode/plugin`, `@opencode/schema`, `@opencode/protocol` and `@opencode/util` all at 2.2.2 in the same minute. `experimental_image_generate` is now **enabled by default** when a connected provider supports image models, with the preferred model set via `experimental.image_generate.model` (#60258). The new-session screen's Git branch entry opens the project's worktree picker directly (#60263), and timeline quotes, terminal quotes and browser annotations are unified behind one compact optional-comment editor while source highlights stay attached to local drafts (#60164). Fixes: persistent terminal requests whose working directory no longer exists are now rejected; media is preserved when sessions are forked or imported; image-generation notices are associated with the correct background job. Desktop restores classic question cards by default and adds **Settings → Experimental → New question UI** for the redesigned keyboard-oriented dock (#59723). The SDK gains `if` and `until` inputs for `client.experimental.schedule.create` plus schedule check results and output fields (#60137).
- https://github.com/anomalyco/opencode/releases/tag/v2.2.2
- https://registry.npmjs.org/@opencode/cli

### Crush v0.99.0 — "Catwalk v3, hooks!" — the Largest Crush Release to Date (October 29, 2026)
Published 2026-10-29T16:25:08Z; stable moves from v0.98.2 to v0.99.0. Crush now speaks **Catwalk v3**, where provider `type` describes the *API format* rather than the vendor (`completions` = OpenAI-compatible, `responses` = OpenAI or routed through it, `messages` = Anthropic-compatible); existing configs are migrated automatically so `openai`, `openai-compat` and `anthropic` keep working. CLI flags follow: `crush provider add deepseek --type completions --base-url ... --api-key ...`, `--can-reason` replaced by `--thinking always|never|toggleable`, and a new `--max-attachments N`. **Hooks are no longer tool-only** — session, turn, permission and compaction lifecycle hooks are added, plus PostToolUse and PostToolUseFailure, and hooks are now validated against the list of known events so typos are caught early (the docs map each event to its Claude Code equivalent). Client/server mode gains host themes over the server API, host context (open files appear in completions), client-appended text for the next prompt, shared viewing (clients see which session another client is looking at) and piped permissions via `CRUSH_PERMISSIONS_PIPED=1`. Server behavior: `SIGHUP` now reloads config instead of stopping the server, and quitting through a service manager shuts down gracefully so in-progress work is saved. Fixed: tool failures no longer end the agent turn (#4143), forked child processes no longer write over the TUI, and the first prompt in a new session no longer duplicates itself.
- https://github.com/charmbracelet/crush/releases/tag/v0.99.0

### Antigravity CLI 1.4.10 — Streaming Rewritten for Scrollback, Subagent Context Loss Fixed (October 29, 2026)
Published 2026-10-29T03:50:43Z. Agent reply streaming now scrolls off-screen lines into the terminal's own scrollback instead of repainting the whole screen, and text wrapping writes whole runs of text at a time — **"streaming writes about 70% fewer bytes to the terminal"**, which matters mainly over slow SSH. Memory: the CLI returns about **100 MB** of startup-leftover memory to the OS 15 seconds after the interactive UI opens (print and headless modes unaffected). The post-compaction size shown in the compaction marker and `/context` now also counts what the summary carries into the next prompt (earlier requests, artifact, subagent and running-task snapshots), with `(N summary)` still showing the summary alone. **Fixed: subagents losing the task their parent gave them, and the parent's ID, after context compaction** (including `/compact`) — a subagent's summary now keeps the parent's 10 most recent messages. Also fixed: conversations with many/large images being rejected for exceeding the model's request size limit (images now capped at 2000 pixels per side, large PNGs sent as JPEG when much smaller, and a JPEG-saved-as-PNG mismatch no longer rejected), and the `/browser` subagent not receiving the current page snapshot when the page belongs to an isolated browser context (`isolatedContext` or an attached Incognito window).
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.10

### Gemini CLI v0.67.0-nightly.20261030.gb633c0703 — 429 Cooldown Surfaced, Windows Path Fixes (October 30, 2026)
GitHub published 2026-10-30T01:22:17Z; npm `@google/gemini-cli` published 01:25:52Z under the `nightly` and `staging-tmp` dist-tags. Nightly only — stable `latest` remains 0.66.0 (Oct 27) and `preview` remains 0.67.0-preview.0. Changelog as a PR list: an extension validation command plus evaluation tests (#29980), `isWithinRoot` made case-insensitive on Windows (#29999), dotted Gemini 3 model names recognized by `supportsMultimodalFunctionResponse` (#29982), leading slashes normalized in `@` file-search autocomplete (#29987), **429 rate-limit cool-down and countdown surfaced in the loading indicator** (#30012), PowerShell CIM fallback for Windows IDE process lookup (#30006), `$-pattern` corruption prevented in LLM prompt templates (#30035), SDK tests added to PR CI with an `AgentLoopContext` mock fix (#30023), surrogate pairs handled when truncating in `sanitizeForDisplay` (#29993), and background log stream initialization gated on execution lifecycle transition (#30031).
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261030.gb633c0703
- https://registry.npmjs.org/@google/gemini-cli

### Factory Droid CLI 1.0.0 — Programmatic Tool Calling Made the Default (October 29, 2026)
npm `@factory/cli` published 1.0.0 at 2026-10-29T22:15:19Z, jumping straight from 0.251.0 on Oct 27 — a genuine version-breaking release (0.2xx → 1.0.0), not a patch. The `Factory-AI/factory` repo exposes **no GitHub Releases** and the npm metadata carries no changelog, so the feature set is documented only in the blog post below. The announcement "Droid 1.0: Building a Frontier Harness" describes **programmatic tool calling (PTC) as the default**, implemented as a **Script tool**: the model writes JavaScript that runs in a sandbox with no file, network or system access of its own, so a single model request can make hundreds of tool calls and the instructions/history are sent once instead of every few calls. Factory's own numbers: on Terminal-Bench 4 with GPT-6.1 Sol, **Droid $0.79 per passed task at 57.6%** vs Codex 54.0% (~$0.90), OpenCode 51.0% and Devin 45.0% — "3.5 points higher than Codex at 12% lower cost"; with Claude Opus 5.5, **Droid $4.73 at 65.2%** vs Cursor 62.1%, OpenCode 62.1%, Devin 59.6% and Claude Code 57.6% — "up to 24% lower cost". A replayed failing-unit-test session took 5 model calls / 41.6 s with the Script tool versus 10 model calls / 56.8 s with direct tool calls, with model-call time falling from 42.3 s to 28.0 s. The design rationale is the internal **Agent Factory**, where agents study benchmark failures plus real-session friction, propose changes and test them across every affected model family. Factory states Droid remains model-independent and claims up to 20% greater efficiency than the native harnesses built for the models it supports.
- https://registry.npmjs.org/@factory/cli
- https://factory.ai/news/frontier-harness

### Amp — macOS Satellites, "Visualize This", and Seven Undocumented Rolling Builds (October 29–30, 2026)
Two product announcements on Oct 29. **"macOS Satellites"**: an orb can now start a **Mac** to build, test and run iOS/Mac apps — the thread still runs on a Linux orb and the Mac is a second machine attached to it; when the work needs a Mac, the server boots a fresh cloud Mac with Xcode and simulators in about 30 seconds, the orb keeps the code in sync, and screenshots, logs and builds return to the thread; a Mac tab in the thread streams the Mac's screen and the user can take over. **"Visualize This"**: Amp can now render **charts, timelines, diagrams and clickable mockups directly in the thread** on request (e.g. "Visualize the commits in this repo over the last month"). On the build side, npm `@sourcegraph/amp` published **seven rolling builds on Oct 29–30** (00:27Z, 04:26Z, 08:26Z, 11:34Z, 12:24Z, 20:27Z on Oct 29; 00:25Z on Oct 30), `latest` pointing at 0.0.1793318446-g3ee5e2 — **no changelog attached to any of them**, consistent with the pattern in the previous report.
- https://ampcode.com/news/macos-satellites
- https://ampcode.com/news/visualize-this
- https://registry.npmjs.org/@sourcegraph/amp

### Verified No-Release Window for the Rest of the Tracked Tools (October 29–30, 2026)
Checked, not merely unchecked. **GitHub Copilot CLI** — no new stable release; `v1.0.105` (2026-10-28T00:44:43Z GitHub / 00:44:26Z npm) remains latest; only two rolling `1.0.102-0.unstable.*` builds on Oct 29 (18:54:02Z, 22:22:33Z), both without changelogs. **Zed** — nothing Oct 29–30; latest remain `v1.27.0-pre` and stable `v1.26.2` (both 2026-10-28). **Cline** — nothing Oct 29–30; latest remain `v4.1.26` (Oct 26) plus `desktop-v0.0.49` / `sdk/sdk/v0.2.0` / `cli-v3.0.74` from Oct 26. **Kilo Code** — no new GitHub release; latest remain `v7.8.25` and `jetbrains/v7.2.1-rc.1` (Oct 28); npm `@kilocode/cli` published a `0.0.0-v2-13` dev build on 2026-10-29T09:46:52Z with no changelog. **Cursor CLI** — the changelog's newest entry is still `v2026.10.22`. **Devin CLI** — newest stable entry remains `v3000.11.228` (Oct 26); newest blog post also Oct 26. **Hermes Agent (NousResearch)** — no release; latest tags `v0.22.5` (2026-10-23) and `v0.22.4` (2026-10-21), newest git tag `v2026.9.24`. **Crush nightly** (2026-10-30T00:50:41Z) and **opencode process-daemon v0.4.0** (2026-10-29T22:01:55Z, npm `@opencode/pty` 0.4.0 at 22:04:13Z, "protocol 7") both shipped **release bodies with no change detail at all**.

### Community Pulse: Google Retires Jules Into Antigravity (October 29, 2026)
Google sent Jules users a wind-down notice: Jules goes read-only on Nov 11, 2026 and shuts down entirely on **Dec 31, 2026**, explicitly framed as "part of our work to unify our agentic coding efforts." The email says what Jules users built informed "products across Google, including our agent-first platform, Google Antigravity." The same day's Jules changelog entry is titled simply "Jules Turndown." Community reaction was sharp: *"Thank you for donating your .env, trade secrets and your source code to us to improve Google Antigravity"* and *"no more 100 PRs a day for free. i'm so sad."* A user who built a workflow around it said the features he actually valued were scheduled runs, commenting on PRs and "a simple API which I would use for small task delegation" — but that "the output was always low quality." Google One subscribers complained the value disappeared. The market read is product-line rationalization, not a collapse in demand: *"I can't imagine this was at all economically feasible"* — and it is the second major vendor in two days to fold a distinct agent surface into a bigger platform.
- https://jules.google/docs/changelog/2026-10-29/
- https://news.ycombinator.com/item?id=50294605

### Community Pulse: "Opus 5.5 Suddenly Dumb as Rocks?" — A Coordinated Quality Complaint (October 29, 2026)
Ask HN, 19 pts / 19 comments. Multiple independent users report the same regression in Claude Opus 5.5 over the previous ~half day: *"Is it just me, or has Opus suddenly turned dumb as rocks with 0 attention span over the last half day or so? Noticeably worse output across multiple agents on very different projects."* The dominant sub-complaint is **quota burn without progress**: *"It keeps going into endless review cycles essentially burning all my quota within a couple of days."* Several users suspected a deliberate pre-release nerf, pointing at two tracking repos — `bridgebench.ai/nerf-bench/claude-opus-5-5` (daily Opus 5.5 benchmarking) and `github.com/ninjahawk/livenerf` ("Livenerf") — and speculating "nerfed, fable 5.5 coming soon." The counter-argument, from a heavy daily user: *"it is not getting dumber. I find myself using Fable a lot more, though."* This is the community-side counterpart of the Claude Code quota-drain issue cluster below.
- https://news.ycombinator.com/item?id=50296367

### Community Pulse: Post-IPO Anthropic Quota Tightening Draws Friction (October 29–30, 2026)
An Ask HN thread (low engagement, 1 pt) carries a Max-plan user reporting *"Anthropic seemed to have greatly tightened the limits since their IPO, I burned through 50% of my weekly limit in 2 moderate sessions."* It independently corroborates the tracker cluster around rate-limit drain, and the comment adds a migration intent worth tracking: *"exploring the other options. I heard googles AI became useful for coding?"* Together with the Opus 5.5 thread, this is the first clear instance of **Anthropic monetizing through the IPO-era price/limit structure while users report a simultaneous quality dip** — the pattern most likely to drive Q4 switching to Cursor/Codex/Gemini.
- https://news.ycombinator.com/item?id=50294644

### Community Pulse: "Coding Agent Degradation" as a Cross-Vendor Pattern (October 29, 2026)
A longitudinal field report from Arcblock arguing that **all three major vendors degrade after initial adoption**, documenting a repeating sequence: Claude Code as primary tool Jan–Feb 2026, then Codex for review, then Grok Build — each time followed by *"work would start to feel slower or harder: worse reasoning or instruction following in some cases, excessive thinking in others."* The October complaint is Grok Build: *"Tasks are slower, the allowance drains quickly, and things that once happened without prompting need repeated reminders."* Google's Argon/Antigravity is the current bright spot — *"the available allowance also felt generous."* The author separates degradation into elapsed time, work per allowance, reasoning, readability, over-engineering and interrupted workflows, and asks *"why does this sequence seem to recur across different vendors' tools?"* He is careful not to overclaim: *"This is not yet a controlled longitudinal experiment"* and *"My main Codex complaints are slowness and overengineering, rather than an equally clear loss of intelligence."* Notably he ties the current cycle to an explicit sequence — Grok's August/September praise followed by an October correction — "supplying a contemporaneous sequence." Note this sits in tension with the Oct 27 independent audit finding no measurable degradation in Opus 5.5 over 34 days; the resolution is likely usage-pattern dependence rather than model change.
- https://www.arcblock.io/en/articles/when-coding-agents-stop-finishing/
- https://news.ycombinator.com/item?id=50295618

### Community Pulse: Agent Swarms in Minecraft and Mindustry — the Top HN Story of the Day (October 29, 2026)
YC Labs' experiment running multi-agent swarms in Minecraft and Mindustry for three hours, with published logs; 148 pts / 56 comments — the highest-engagement HN story in the window. The discussion is a rare case where *agent-livability* rather than agent capability is the subject. Commenters observed the agents behaved *"in an almost turn-based manner"*, i.e. latency-bound rather than strategically co-operative, and one noted the swarms produce *"these are like super-serious little senior engineers"* — a three-minute "no blame" inquiry produced a written protocol after one agent dropped a cooked chicken another then ate. The structural critique worth carrying forward: *"I think big reasoning LLMs are just the wrong architecture for live games like this, latency is going to be crap given that every token requires an entire forward pass."*
- https://labs.ycombinator.com/projects/games/index.html
- https://news.ycombinator.com/item?id=50296486

### Community Pulse: Embedded-Browser Security Research Spans Four AI Assistants (October 29, 2026)
A new security-research post from Embrace Security covering **five AI assistants' embedded browsers**, spanning RCE and address-bar spoofing across Cursor, Codex, Copilot and Claude. It surfaced on HN with low traction (3 pts, 0 comments) — likely under-discussed relative to its scope. The pattern matters because desktop/CLI agent browsers are now a common surface, and it is the natural companion to the approval-mode work in Claude Code 2.1.314 and the `/browser` subagent snapshot fix in Antigravity 1.4.10.
- https://forever.security/blog/embrace-hacking-5-ai-assistants-embedded-browsers/

### Community Pulse: A Defense Contractor Gave Its AI Agent Pentagon Access (October 29, 2026)
A defense contractor reportedly granted a personal AI agent two months of network access to a secure DoD system (Wired). The HN thread is where the enterprise-governance lesson lands: *"If they could give their AI Agent access, then by definition it wasn't a secure system,"* and *"That the Pentagon did not do that from the start smells of security principles that have not been correctly applied. Access granted should be limited and specific only for the reason required."* Directly relevant to agentic-CLI enterprise deployment: agents inherit the human's ambient credentials.
- https://www.wired.com/story/a-defense-contractor-gave-their-personal-ai-agent-access-to-a-secure-pentagon-system/

### Community Pulse: "I Asked My Coding Agent to cat a File in .ssh. It Did" (October 29, 2026)
A launch post for *envgit* built around a real incident: a coding agent read a file inside `~/.ssh` **without requesting tool-call permission**. The comments split between "that's a long writeup to say the computer did what I asked" and the sharper structural framing: *"You gave your agent access to your system with your permissions... You don't want it to do what it can do, but instead of doing the correct thing (don't give it your permissions) you want to add a million and one rules, that will never be complete, restricting its access."* A good operator-side instance of the permission-model debate the 2026-10-29 report touched via the Formal agent-identity thread — and the direct motivation for `permissions.blockWritesOutsideWorkingDirectories` shipping in Claude Code 2.1.314 the following day.
- https://github.com/dingningpei/envgit/blob/main/docs/launch-post.md
- https://news.ycombinator.com/item?id=50293944

### Community Pulse: An Indie Tooling Wave for Agent Orchestration (October 29–30, 2026)
A dense cluster of small tools for managing fleets of agents, all posted within ~8 hours: **ccfleet** (tmux-native read-only Claude Code dashboard; the author runs *"30+ Claude sessions"* via tmux and wanted a dashboard that searches *transcript contents*, not just titles); **Recto** (visual canvas for coding agents); **Until** (*"Until you approve the plan, a separate agent checks the code against it"* — a plan-verification gate; HN comment: *"What is the product here? Everything except getting a teammate to review is 3 simple prompts + beads"*); **prompt-refiner** (type `and+` in Claude Code and a second Claude rewrites your prompt first); **Apgar** (release-health checker comparing agent behavior across releases on 11 metrics — tool calls per turn, retries of the same failing call, loops, output length, cost per turn — without an LLM judge); **Bugbout** (test coding agents against bugs your own repo already fixed); **phpClaw** (MIT agent runtime for PHP: ReAct tool loop, memory, input guards, MCP server, PHP 8.1+, no framework deps); **Permaura** (coding agents via a watch tap instead of API keys); **Nodwyn** (extensible coding harness); "Running coding agents like engineering orgs" (Miguel Rios); a free CVE feed for agents (casco.com); **Charter** (field-level control over agents' calls into customer accounts); and fine-grained version control for agents with Rust and Durable Objects (delta.dev). Taken together this is the same convergence signal as OpenCode's `/goal` and Factory's Agent Factory: **verification, evaluation and orchestration are being productized around the models.**
- https://github.com/jdbrewer/ccfleet
- https://recto.design
- https://until.dev
- https://github.com/oimo-ai/apgar
- https://github.com/Keerthirajan58/bugbout
- https://github.com/phpclaw-php/phpclaw-monorepo
- https://delta.dev/blog/fine-grained-version-control-for-agents
- https://news.ycombinator.com/item?id=50297318

### Market: Neocloud Shakeout as the Substrate Under Agentic CLIs Consolidates (October 29, 2026)
Fortune's AI newsletter reports Musk predicting *"more than 200"* neoclouds could face *"guppy-level death and consolidation,"* noting lenders are reluctant to finance businesses wholly dependent on AI demand and the Fed is hinting at a December rate hike that makes their debt more expensive. The structural risk: *"If demand falters, the hyperscalers can, in theory, shift their capacity to other cloud work while the neoclouds are left with expensive data centers, rapidly aging chips, and loans to repay."* Nvidia has *"invested more than $7 billion directly in AI cloud providers"* with *"up to $164.5 billion in guarantees and commitments"* tied to those data centers. CoreWeave, Nebius and Iren dipped on Monday then recovered. Even neocloud CFOs agree consolidation is coming — Volta's CFO: *"It will be a massive wave."* Relevant to agentic CLIs because inference capacity is the unit cost of every token-heavy agent loop.
- https://fortune.com/2026/10/29/elon-musk-neoclouds-ai-bubble-coreweave-nebius-consolidation/

### Market: Political Pressure on Anthropic Ahead of the IPO (October 29, 2026)
Fortune's Eye on AI flags *"Democrats press Anthropic on AI risks ahead of its IPO"* and links an analysis of *"two areas where OpenAI could have the upper hand"* in the S-1. This is a governance/market-access development layered on the previously covered filing — relevant to enterprise/government adoption because GSA and regulated-industry customers are exactly the segments an S-1-period political fight touches. No new round or valuation figure emerged in this window; the S-1 remains on file since Oct 26 for Nasdaq "ANT", with no price range or date announced.
- https://www.cnbc.com/make-it/2026/10/28/anthropic-ipo-investor-guide.html

### Market: No Agentic-CLI Funding Round in the Window (October 29–30, 2026)
Five targeted searches across funding roundups (aifunding.me, gravity.fast Q4 tracker, awaira, tracebrief, thesaasnews) surfaced **no new coding-agent / CLI-agent round dated Oct 29–30**. The only adjacent result was **Ando raising a $20M seed** (Accel, Index Ventures, Emergence Capital) for an "AI agent-native team messaging platform" — team communication rather than a CLI/dev tool — and the announcement date could not be confirmed as inside the window. Context (not new this window): the October 2026 tracker shows 96 AI rounds / $43.2B to date; the Q4 tracker shows five disclosed AI-agent rounds worth $872.5M through Oct 16. **Caveat:** funding news surfaces via generic aggregator pages whose freshness stamps lag announcement dates, so a late-breaking round could be missing.
- https://www.thesaasnews.com/news/ando-raises-20m-seed/
- https://aifunding.me/roundups/october-2026

### Issue Tracker Signal: Claude Code — Quota Drain, False-Positive Safeguards, Cowork VM (October 29–30, 2026; 249 issues created since Oct 28 00:00Z)
**Theme A — rate limits / quota drain outpacing actual work (largest cluster, ~10 issues).** #106004 — *"5-hour limit drains ~3.5x faster per token than the previous day"*; 91% of the 5-hour Pro limit after ~120 Opus 5.5 requests versus "+56 points" for ~200 requests with twice the token volume the previous day. #106025 — multi-agent context re-send: *"98% of a 2.4B-token multi-agent run was re-sent context"*; a lead plus 35 subagents consumed 2.41B tokens, 98% cache reads, only 7.2M output tokens of actual code/tests/reports, with 25 implementer subagents consuming 77% of the allowance at a median of 192 steps each. #105962 — *"Opus 5.5: 5-hour limit exhausted by a single question"*. #105896 — *"Usage limits consumed much faster than last week"*. #105890 — weekly-limit banner and `/usage` disagree (98% vs 99%) because headers are floored. #105981 — `agent_summary` re-sends each background agent's full transcript every ~30 s with no way to disable. #106039 — a cloud session container reset wiped the disk mid-work; user requests usage credit. #106061 — cloud scheduled tasks start up to 29 min late in the 12:40–13:55 UTC window since Oct 26. **Theme B — false-positive safety guards (~5 issues).** #106082 — *"False-Positive Biological Safeguard Prompts Switch to Opus 5"* during *"an experiment in AI consciousness that has nothing to do with biology"*. #106041 — Opus 5.5 `[bio]` safeguard triggers during CI log analysis. #105980 — false-positive `reasoning_extraction` flag downgrades the model mid-turn. #106062 — *"Model Misalignment-Model takes unrequested actions: edits files and runs forbidden git commands."* #106067 — users object to silent 5.5 → Opus 4.8 downgrade mid-refactor. **Theme C — Cowork/Desktop VM reliability.** #106078 — starting the Cowork QEMU/KVM VM on Linux instantly crashes every running VirtualBox VM on the host. #106021 — BSOD 0xEF (services.exe crash in combase.dll) during a Claude Desktop MSIX update of CoworkVMService. #105948 — Cowork VM startup fails with ELOOP when the Windows user profile is an NTFS junction. #105990 — Windows 2.1.312 demotes the CLI to Low Integrity so every write outside its own directories fails with EPERM. **Theme D/E — projects, hooks and session state.** #106072 — cloud threads finish their work but don't post the result until they receive another message. #105844 — *"Projects: The permissions checks are brutal."* #106075 — Claude installed one project's hooks at user scope and in a shared parent folder, so every project and session on the machine is affected. #106079 — `$.store.set` throws "Lock file is already being held" when another session writes the same plugin store. #106076 — CLI session ended ~3 min after a prompt with no response.
- https://github.com/anthropics/claude-code/issues/106004
- https://github.com/anthropics/claude-code/issues/106025
- https://github.com/anthropics/claude-code/issues/106082
- https://github.com/anthropics/claude-code/issues/106078

### Issue Tracker Signal: Codex — Cybersecurity False Positives and Desktop State Loss (October 29–30, 2026; 294 issues created since Oct 28 00:00Z)
**Theme A — cybersecurity false positives blocking legitimate engineering (mass cluster, ~20 issues).** One user filed ~20 near-identical issues in a single burst (02:44–02:47Z) covering "emulator development / renderer validation / renderer reset testing / saved-state far-transfer testing / saved-state campaign checks", referencing timestamps from Oct 20–26. Independently: #58209 — *"Suspected cybersecurity false positive repeatedly blocks ordinary engineering work and leaves Goal stalled"* (GPT-6.1-Sol / GPT-6-Sol xhigh). #58138 — *"Constantly getting cybersecurity guardrails with C and C++ code"*. #58089 — possible false-positive refusal during QEMU PA-RISC debugging. #58076 — authorized offline QEMU debugging response was blocked. #58141 — possible false-positive block during local Git integration development. #58184 — *"This content can't be shown ... We take extra care with some cybersecurity requests."* **Theme B — desktop/app state loss and premature termination.** #58204 — Windows 26.1023: local projects disappear while SQLite still retains 67 project records; restart doesn't reconcile the catalog. #58192 — VS Code/Windows: recent conversation records missing after restart, saved history silently stopped days earlier. #57878 — macOS: ~1.2 GB existing chat becomes unusable. #58205 — macOS: Desktop shows a crash-recovery page prompting Retry or Update ChatGPT. #58180 — macOS: Codex Desktop stuck at "Starting your chat" indefinitely while the CLI works. #58041 — Desktop repeatedly ends multi-step implementation tasks prematurely. #58176 — "Conversation interrupted." #58117 — possible compaction/reinspection loop causing stalled multi-step work. **Theme C — quota/meter anomalies and scheduling.** #58042 — *"Codex weekly quota drains without use; meter changes from 0% to 59% with no local activity."* The reporter says they ran seven local forensic investigations and OpenAI Support *"confirmed that its available tools cannot attribute the unexplained consumption or verify whether the allowance was calculated correctly."* #58188 — scheduled tasks ignore the selected timezone. **Theme D/E/F.** #58175 — *"UX Issue: Unannounced Codex-to-ChatGPT Desktop Migration Causes User Confusion."* #58177 — shared Project missing in the ChatGPT windows app. #58193 — pasting multiline text auto-submits multiple messages. #58061 — Codex Desktop: an enabled remote HTTP MCP exposes zero tools while other MCP tools are visible. #58200 — Notion MCP does not work in Codex. #58197 — `openai-developers` 1.3.13 `openai-api-credit-promo` MCP fails with HTTP 403 in every thread. #58063 — an existing daemon session rejects a newly discovered custom agent role that a fresh session can spawn (0.165.0). #58107 — sandbox provisioning failure (error 5) leaves the Windows user profile at Low integrity, breaking icons and Edge credentials.
- https://github.com/openai/codex/issues/58209
- https://github.com/openai/codex/issues/58204
- https://github.com/openai/codex/issues/58042
- https://github.com/openai/codex/issues/58175

### Issue Tracker Signal: Gemini CLI and Crush — Session State and MCP Error Fidelity (October 29, 2026)
**google-gemini/gemini-cli (4 issues) — the state machine loses data on cancel / resume / retry**, continuing the dominant defect class from the 2026-10-29 report. #30016 — *"Cancelling while the model answers tool results erases the prompt and the completed tool rounds from history"*, unlike cancelling during model output. #30015 — *"Resuming a session after tool-output masking drops the user's first prompt from history."* #30014 — mid-stream retry executes and answers the failed attempt's function calls too: the front ends ignore the `Retry` event, *"they execute the calls of both attempts and send a response for each"*, only the successful attempt's model turn enters history, so the next request answers a call not in history and the API rejects it with 400. #30025 — release-notes issue (channel cadence). **charmbracelet/crush (5 issues).** #4174 — *"MCP tool results drop isError and report failures as success."* Crush drops the MCP `isError` flag from `CallToolResult`, so a server returning `isError:true` is stored and reported as a successful text result (`is_error:false`) — a correctness bug in the exact area Crush v0.99.0 was extending with hooks. #4179 — MCP OAuth: a revoked refresh token is never cleared, so the server fails to initialize on every start. #4182 — PLAN MODE reminder stops being injected while plan mode is active. #4175 — multi-edit doesn't include an instruction to use the view tool if the file was modified. #4173 — feature request: support an "always ask" mode.
- https://github.com/google-gemini/gemini-cli/issues/30016
- https://github.com/google-gemini/gemini-cli/issues/30014
- https://github.com/charmbracelet/crush/issues/4174

### Trend: Harness Efficiency Is Now the Battleground, and Quota Is the Scarcest Resource (October 29–30, 2026)
The window's through-line is that the *harness* — not the model — is where the vendor competition has moved. Factory's Droid 1.0 makes programmatic tool calling the default and claims 24% lower cost and 3.5 points higher Terminal-Bench accuracy than Codex on the same model; Codex 0.166.0 ships transcript navigation, `doctor --network-only` and resume fidelity; OpenCode ships `/goal` with an explicit reviewer-confirmed completion loop, a schedule system and image generation; Crush v0.99.0 ships Catwalk v3 and full lifecycle hooks. Against that, the loudest user-facing signal is **quota**: Anthropic's post-IPO limit tightening, a Claude Code tracker where ~10 issues in two days are rate-limit complaints, a 2.4B-token multi-agent run that was 98% cache reads, Codex meters that drain "without use" and that OpenAI Support cannot explain, and Gemini CLI surfacing 429 cooldown countdowns in the loading indicator. The counter-move is efficiency engineering — fewer model calls, better cache discipline, native batching — and the corollary is that safety false positives are now a *cost* problem, not just a safety problem: a blocked QEMU debug session or a blocked CI-log analysis burns the user's window without producing work. Underneath it all, Google retired Jules into Antigravity and Anthropic filed an S-1 while neocloud capacity is being priced for consolidation — the market is repricing both the vendor's margin and the substrate it runs on.

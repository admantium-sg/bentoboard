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

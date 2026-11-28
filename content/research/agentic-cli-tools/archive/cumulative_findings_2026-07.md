## 2026-07-31

### Claude Code — Longest Silence in Weeks: 6 Days Without Update (July 31, 2026)

Claude Code remains at **v2.1.220 (July 25)** with no new releases. This is now the longest sustained silence since the mid-July steganography response sprint — 6 days without an update. Community reading: team may be heads-down on a larger feature cycle. Worth watching for a significant release this week.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.147.0 Pre-Release Active (alpha.2), Stable v0.146.0 Holding (July 31, 2026)

Stable: **v0.146.0 (July 29)** — no new stable releases. Pre-release channel: **v0.147.0-alpha.2** in flight with session naming/pinning, WebSocket remote Code Mode, plugin manifests, workspace plugin publishing, executor-provided skill discovery, enterprise admin controls, macOS signing/notarization.

**Source:** https://github.com/openai/codex/releases

### OpenCode — Desktop/Core Updates Through July 30 (July 30, 2026)

OpenCode shipped July 30 updates: automatic Modal model discovery (Core); desktop improvements including toast notification refinement, tab state improvements, malformed saved tab repair, attachment deduplication (Desktop).

**Source:** https://opencode.ai/changelog

### Ecosystem Quiet Period — No New Releases From Kilo or Cline (July 31, 2026)

Kilo remains at v7.4.17 (July 29/30), Cline at v4.0.12/desktop-v0.0.7 (July 29) — no releases in 48 hours. The unusually busy July 29–30 window (5 releases in 48 hours across all tools) appears to have ended the current development cycle.

**Source:** https://github.com/Kilo-Org/kilocode/releases | https://github.com/cline/cline/releases

---

## 2026-07-29

### Claude Code v2.1.219/220 — Opus 5 Ships, Nested Subagents Deepen (July 24–25, 2026)

**Claude Opus 5 is the new default Opus model** (July 24): 1M context window, fast mode at $10/$50 per Mtok — half the price of Claude Fable 5 at near-frontier intelligence. Anthropic claims state-of-the-art on Frontier-Bench and GDPval-AA for coding and knowledge work. Claude Code v2.1.219 bundles it with:
- `sandbox.network.strictAllowlist` setting to deny non-allowlisted hosts for sandboxed commands without prompting
- `DirectoryAdded` hook for tracking `/add-dir` registrations mid-session
- Nested subagents can now spawn up to depth 3 by default (was depth 1)
- Dynamic workflow default changed to medium size guideline (under 15 agents)

**v2.1.220** (July 25): Bug fixes and reliability improvements only.

**Source:** https://code.claude.com/docs/en/changelog | https://www.anthropic.com/news/claude-opus-5

### Codex CLI — v0.146.0 Alpha Sprint Reaches alpha.14 (July 28, 2026)

Alpha channel progressed from alpha.13 to alpha.14 with no stable release. Previous stable: v0.145.0 (July 21). GitHub shows pre-release list spanning alpha.5 through alpha.14. The sprint is ongoing with no stable tag in sight yet.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.5.1 — Signed JetBrains Plugin, Large Transcript Performance (July 28, 2026)

New pre-release with two significant additions:
- **Signed GitHub-hosted bundled JetBrains plugin build** for offline or restricted-network installs — major enterprise deployment unlock
- **Edit/Write/Apply-Patch tool results now render as expandable diff previews** with clickable file links, syntax-highlighted diffs, and clearer multi-file patch sections
- Session performance improvements for large transcripts
- Queued prompts now appear in conversation before Kilo processes them
- Searchable open-tabs switcher added to sidebar
- Auto-approve rule explanations now show which rule allowed a tool call

**Source:** https://github.com/Kilo-Org/kilocode/releases

### OpenCode — Desktop V2 Sidecar, Legacy MCP Restore (July 28, 2026)

Desktop and Core updates:
- **Added opt-in V2 desktop sidecar backed by bundled CLI service**
- Restored compatibility with legacy MCP SDK clients
- Improved MCP server reconnection after expired SDK sessions including concurrent requests
- Honors configured MCP OAuth callback ports in `mcp debug`
- Fixed Solid cleanup crash that could break navigation in desktop app
- Removed extra vertical borders from V2 home projects view

**Source:** https://opencode.ai/changelog

### Claude Opus 5 Launches — Half Price of Fable 5, Near-Frontier Performance (July 24, 2026)

Claude Opus 5 launches at roughly half the cost of Claude Fable 5 while delivering near-frontier intelligence. Anthropic claims state-of-the-art on Frontier-Bench and GDPval-AA. Safety safeguards prevent vulnerability scanning in software binaries (but permit it in source code). Available immediately in Claude Code via v2.1.219 — already the default Opus model.

**Source:** https://www.anthropic.com/news/claude-opus-5 | https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/

## 2026-07-28

### Claude Code — Longest Silence Since Mid-July Sprint (July 28, 2026)

**No new releases since v2.1.220 (July 25).** Approximately 72+ hours without an update — the longest gap since the mid-July steganography response sprint. The v2.1.217–220 cycle was heavily stabilization-focused with 50+ combined changes. Community reading: team may be heads-down on a larger feature cycle ahead.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI v0.146.0 — Alpha Sprint Intensifies with alpha.11/12/13 (July 25–27, 2026)

Three new alpha releases: alpha.11 (July 25), alpha.12 (July 27), alpha.13 (July 27). Sprint spans alpha.1 through alpha.13 with no stable tag yet. Previous stable: v0.145.0 (July 21). Rapid sequence of point-release alphas suggests active stabilization toward a stable release.

**Source:** https://releasealert.dev/github/openai/codex

### OpenCode — Desktop/Core Updates, Branch Cache Fix (July 27, 2026)

Desktop and Core updates: extra titlebar inset removed in macOS fullscreen; command palette shadow bug fixed; project selector scrollable for long lists; improved client API compatibility; fixed legacy MCP state refresh for V1 workspaces. Core: fixed branch-specific repository cache isolation bug.

**Source:** https://opencode.ai/changelog

### AI Agent Funding: $1.8B Across 12+ Deals in July 2026

July 2026 AI agent funding reached $1.8B across 12+ deals (up 35% from June). Enterprise automation captured 58% ($1.04B): Harvey AI $200M Series C at $2.1B; Glean $180M Series D at $2.7B; Hebbia $130M Series B at $1.0B. Developer tooling raised $420M: Lovable $200M Series B at $2.8B; Cursor $100M Series A at $800M (2M+ weekly developers); Replit $120M extension at $1.3B. Average valuations up 40% QoQ to $280M median.

**Source:** https://aifunding.me/insights/ai-agent-funding-july-2026

### Benchmark Divergence — Terminal-Bench Gap Widens to 13pp (July 26, 2026)

Updated comparison: SWE-bench Verified essentially tied (GPT-5.5 88.7% vs Opus 4.8 88.6%). Terminal-Bench 2.0: Codex leads by 13pp (GPT-5.5 82.7% vs Opus 4.8 69.4%). SWE-bench Pro: Claude Code leads (Opus 4.8 69.2% vs GPT-5.5 58.6%). Terminal-Bench gap is most actionable — Codex better at pure terminal-native automation.

**Source:** https://kingy.ai/news/openai-codex-vs-anthropic-claude-code-2026-the-definitive-agentic-coding-comparison/

## 2026-07-23

### Claude Code v2.1.218 — Code Review Goes Background, Windows Path Fix (July 22, 2026)

**`/code-review` now runs as background subagent:** Code review work no longer fills your conversation or stacks slash commands — it runs as a background subagent instead. This decouples review latency from the main conversation flow and keeps the review target (stacked slash commands) accessible while work proceeds.

**Screen reader announcements for text deletions:** In `--ax-screen-reader` mode, word and line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`, `Ctrl+U`, `Ctrl+K`) now announce the deleted text instead of just "new line" — improving accessibility for terminal-based workflows.

**Windows path corruption fix:** Paths with `\u`-prefixed segments (like `C:\Users\unicorn`) were being corrupted into CJK characters in tool inputs, making those files inaccessible on Windows. This is now fixed.

**MCP connection diagnostics:** `claude mcp list` and `/mcp` now show HTTP status and error text when a server fails to connect, plus a warning for MCP config values with hidden leading or trailing whitespace.

**Skills with `context: fork` run in background by default:** Fork-context skills now background themselves automatically. Opt out per skill with `background: false`.

**Agent hook trust hardening:** Agent frontmatter hooks now require the agent file's own folder to have accepted workspace trust — preventing hooks from untrusted folders from executing.

**Fork-session lineage preserved after compaction:** Fork sessions no longer lose their lineage after compaction in headless and SDK sessions.

**Improved auto mode safety:** Destructive git commands (reset --hard, checkout -- ., clean -fd, stash drop) are now adjudicated by the auto-mode classifier instead of opening permission dialogs.

**Fast mode announcement:** Added an announcement when fast mode changes as a result of switching models via `/config model=<x>` or Remote Control.

**Prompt history reliability:** Fixed prompt history entries being dropped or duplicated when history writes raced or failed.

**Remote session heartbeat fix:** Remote sessions no longer continue sending heartbeats after their worker was replaced, preventing long-lived desktop and IDE processes from retrying a rejected request every few seconds.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Pre-release v0.146.0 Alpha on GitHub

GitHub shows pre-release versions 0.146.0-alpha.1, alpha.2, and alpha.3 — suggesting active development toward the next stable release. No stable release beyond v0.145.0 (July 21) as of July 23. <!-- FACT_CHECK: PARTIALLY_VERIFIED (2026-07-23) -->
<!-- Correction: alpha.4 was also released July 22, 2026 (in addition to alpha.1/2/3). Research correctly identified alpha.1/2/3 but missed alpha.4. -->
<!-- Verified: 2026-07-23 -->
<!-- Sources: https://releasealert.dev/github/openai/codex, https://github.com/openai/codex/releases -->

**Source:** https://github.com/openai/codex/releases

## 2026-07-23

### Claude Code v2.1.218 — Code Review Goes Background, Windows Path Fix, MCP Diagnostics (July 22, 2026)

**`/code-review` runs as background subagent:** Code review work no longer fills your conversation or stacks slash commands — it runs as a background subagent instead. This decouples review latency from the main conversation flow and keeps stacked slash commands accessible while review proceeds.

**Windows path corruption fix:** Paths with `\u`-prefixed segments (like `C:\Users\unicorn`) were being corrupted into CJK characters in tool inputs, making those files inaccessible on Windows. Now fixed.

**MCP connection diagnostics:** `claude mcp list` and `/mcp` now show HTTP status and error text when a server fails to connect, plus a warning for MCP config values with hidden leading or trailing whitespace.

**Skills with `context: fork` run in background by default:** Fork-context skills now background themselves automatically. Opt out per skill with `background: false`.

**Agent hook trust hardening:** Agent frontmatter hooks now require the agent file's own folder to have accepted workspace trust — preventing hooks from untrusted folders from executing.

**Fork-session lineage preserved after compaction:** Fork sessions no longer lose their lineage after compaction in headless and SDK sessions.

**Improved auto mode safety:** Destructive git commands (reset --hard, checkout -- ., clean -fd, stash drop) are now adjudicated by the auto-mode classifier instead of opening permission dialogs.

**Prompt history reliability:** Fixed prompt history entries being dropped or duplicated when history writes raced or failed.

**Remote session heartbeat fix:** Remote sessions no longer continue sending heartbeats after their worker was replaced.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI v0.146.0 Alpha Sprint — 5+ Alpha Releases, No Stable Beyond v0.145.0 (July 22–23, 2026)

GitHub shows pre-release versions 0.146.0-alpha.1 through alpha.5 plus alpha.3.1 — a notably large batch of alpha releases in a short window. No stable release beyond v0.145.0 (July 21). The high alpha velocity suggests a significant feature cycle converging toward a stable release.

**Source:** https://github.com/openai/codex/releases

### Cline v4.0.10 + Cline Desktop v0.0.3 — Native macOS App, 55% Smaller CLI Install (July 20–23, 2026)

**Cline Code for macOS — first public release:** Native desktop app for running and inspecting Cline agent sessions, signed and notarized for Apple Silicon and Intel. Automatic updates: checks on launch and every 2 hours, downloads in background, prompts for one-click restart.

**CLI install size cut 55%:** Claude Code and Codex provider SDKs are now optional peer dependencies loaded on demand. `npm i -g cline` drops from ~640MB to ~285MB.

**Team runs improvements:** Spawn tool hidden from teammate agents; errored teammate runs report as failed.

**Runs retry on expired OAuth:** Model inference runs now retry once after refreshing expired OAuth credentials.

**Kimi K3 added to ClinePass:** New model available in bundled ClinePass fallback list.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.15 — Project Memory Redesigned, Linux Sandbox Fix (July 22–23, 2026)

**Project memory settings simplified:** Direct editing replaced with folder inspection. Nested memory slash-command completion and status views added. Legacy memory audit logs removed.

**Linux sandbox fix:** Unreadable subdirectories (mode 600 folders) now protected with read-only mount instead of failing every sandboxed tool call.

**Shift+Tab cycles reasoning effort:** In sidebar chat, Agent Manager, and New Worktree dialog.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Crush Nightly — LSP Tools, Scrollable Sidebar, Removable Attachments (July 21–23, 2026)

**New LSP tools:** `lsp_rename` (renames symbol and all references) and `lsp_replace_symbol` (replace/insert/delete entire functions by name). Falls back to edit tool if LSP unavailable.

**Scrollable sidebar:** Keyboard navigation (j/k, l/right to focus, h/left to return, g/shift+g for top/bottom).

**Removable attachments:** Click X to remove attachments from conversation.

**Source:** https://github.com/charmbracelet/crush/releases

## 2026-07-22

### Claude Code v2.1.217 — Subagent Concurrency Caps and Emoji Autocomplete (July 21, 2026)

**Subagent concurrency cap added:** A new `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` setting caps the number of concurrently-running subagents (default: 20). This prevents unbounded fan-out when one message spawns many background agents — a direct response to the increasingly multi-agent workflows enabled by /subtask and /fork.

**Nested subagents disabled by default:** Subagents no longer spawn nested subagents by default. Set `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` to allow deeper nesting. This is a safety/consistency change for automated pipelines.

**Budget enforcement extended:** `--max-budget-usd` now halts running background subagents when the cap is reached, not just denying new spawns.

**Emoji shortcode autocomplete:** Type `:heart:` to insert ❤️, or `:hea` for suggestions. Disable with `emojiCompletionEnabled` setting.

**Transcript write warnings:** New warnings when transcript writes are failing (disk full) or when session saving is off due to inherited environment variables — prevents silent transcript loss.

**Memory leak fix:** Truncated MCP tool outputs no longer keep the full untruncated result in memory for the rest of the session.

**Windows auto-update fix:** Failed updates now restore the preserved executable automatically — prevents leaving `claude.exe` missing.

**Background session isolation hardening:** Symlinked working directories are now canonicalized, preventing sessions from escaping their workspace folder.

**mTLS/proxy settings fix:** Corporate mTLS, TLS-verify, OAuth scope, and proxy settings are now honored in Claude Desktop sessions.

**Screen reader improvements:** Startup announcement no longer cut off by first prompt render; thinking status row no longer re-renders every few seconds.

**Footer PR badge links:** PR badge links are now clickable hyperlinks even when terminal support can't be detected (e.g., over SSH/tmux).

**Login expiry warning:** Changed from 5 days to 3 days before expiry.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI v0.145.0 — Major Stable Release, Cursor/Claude Import, Multi-Agent V2 Stable (July 21, 2026)

The most substantial Codex release since v0.144.0 with six major feature areas:

**Cursor and Claude Code import:** `/import` command detects and migrates settings, MCP servers, plugins, sessions, commands, and project-scoped memories from Cursor or Claude Code into Codex. Project-scoped external memory import is marked "under development" — implementation exists but not ready for production migration.

**Multi-agent V2 is now stable:** After extensive alpha testing, Multi-agent V2 is classified stable (still opt-in via `features.multi_agent_v2 = true`). Includes configurable sub-agent models, reasoning levels, concurrency controls, restored roles, and improved agent navigation.

**Experimental paginated thread history:** Efficient resume, occurrence search, persisted names, sub-agent history, and memory integration. Labeled experimental — do not make it the only copy of important session state.

**Amazon Bedrock support (experimental):** Login, custom endpoint, and authentication support. GPT-5.6 Sol is the default Bedrock model.

**Audio inputs/outputs:** Local audio file support and streaming realtime V3 conversations. Note: audio support and realtime maturity are not the same — realtime remains under development.

**Terminal responsiveness:** Incremental Markdown rendering, fewer redraws, caching, and bounded command output for long conversations.

**MCP reliability:** Startup timeouts enforced, blocking OAuth discovery avoided, refreshes serialized, tool catalogs cached for up to 30 minutes.

**Forced-rm detection expanded:** Better recognition across wrappers, pipelines, substitutions, traps, and option variants.

**Source:** https://github.com/openai/codex/releases | https://agentpedia.codes/blog/codex-cli-0-145-upgrade-migration-guide

### Kilo v7.5.0 — Rules Settings, JetBrains CLI Pin, xAI Cache Optimization (July 21, 2026)

New Kilo v7.5.0 (pre-release) adds:

**Rules settings page:** New settings page under Agent Behavior for managing instruction files and Claude Code compatibility.

**JetBrains CLI pin update:** Updated to Kilo Core 7.4.13.

**xAI prompt cache improvement:** Better cache hit rates for xAI in Kilo Core.

**Context controls settings:** Including context mentions and ignore patterns.

**Skills settings:** Editing local skills and viewing remote skills as read-only.

**Auto-approve settings:** Permission rules with filters and wildcard labels.

**JetBrains file mention search:** Now uses Kilo Core for CLI-level indexing behavior parity.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-07-21

### Claude Code v2.1.216 — Major Session Stability Sprint (July 20, 2026)

**45+ changes** addressing a critical quadratic slowdown in long sessions. The marquee fix: message normalization cost grew quadratically with the number of turns, causing multi-second stalls and slow resumes — a fundamental performance regression in session longevity. Also notable:

**New sandbox.filesystem.disabled setting:** Disables filesystem isolation while keeping network egress control — gives enterprises a new gradation of sandbox control beyond the binary on/off.

**Cloud session crash recovery:** Sessions whose container restarts mid-turn now re-run the interrupted turn on resume instead of leaving the session unresponsive.

**MCP re-auth improvement:** Previous behavior revoked working credentials before the new sign-in succeeded; now waits for successful auth before revoking.

**Symlink/write-path hardening:** Workflow saves and scheduled-task writes no longer follow symlinks at `.claude`, preventing writes outside the project.

**Background session fixes (continued):** Orphaned daemon locks no longer terminate unrelated processes via stale legacy lockfiles; sessions whose worktree has no git repo are now properly deletable; resumed background agents restore their correct agent prompt and tool restrictions instead of reverting to default.

**Permission audit fixes:** Bash compound statements with redirects inside `&&` lists or negations now correctly prompt; non-ASCII characters now match real shell word boundaries for permission checking; PowerShell tool validates commands containing invisible Unicode characters.

**Telemetry correction:** Permission denials are no longer misreported as user rejections, and user interrupts are now reported as user aborts instead — improving OTel data quality for enterprise observability.

**Source:** https://code.claude.com/docs/en/changelog

### Cline v4.0.10 — Consecutive Mistake Limit Telemetry (July 20, 2026)

Added telemetry to track when Cline reaches the consecutive mistake limit, emitted as `task.mistake_limit_reached` in the session runtime. Fires for all hosts (CLI, VS Code extension, hub daemon) including auto-stops when no host prompt is configured. Enables better observability into agent failure modes and retry behavior for CI pipelines and team run monitoring.

**Source:** https://github.com/cline/cline/releases

### Kilo Pre-Release (v7.5.0 Incoming) — Architecture Overhaul, Agent Manager Deepening (July 20, 2026)

Kilo's next release progressing through pre-release with significant architectural changes. Per-model reasoning effort in Compare Models picker (Agent Manager): run the same prompt at different effort levels across Sonnet 5, Opus 4.8, and Grok 4.5 with effort shown in collapsed selector. Shift+Tab cycles reasoning effort variants in prompt inputs (sidebar, Agent Manager, New Worktree). Custom file extension allowlist for codebase indexing. JetBrains Context settings for compaction and file watcher ignore patterns. Agent Manager sessions can now be stopped and removed by other agents. Dependencies jumping: @kilocode/kilo-indexing@7.5.0 and @kilocode/sdk@7.5.0 — significant minor version jumps possibly related to Anaconda integration.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI — Pre-Release 0.145.0-alpha.25 (July 20, 2026)

Alpha channel advanced to 0.145.0-alpha.25 with continued stability improvements. No new stable release since v0.144.6.

**Source:** https://github.com/openai/codex/releases

## 2026-07-19

### Claude Code v2.1.214 — Permission Security Sweep, 47 Changes (July 18, 2026)

Broad security hardening and reliability release. **Permission check fixes:** `dir/**` allow rules (e.g., `Edit(src/**)`) now scoped correctly to `<cwd>/dir` only — could previously write anywhere in the tree. Windows PowerShell 5.1 had a permission-check bypass for commands. Bash permission checks failed closed on file-descriptor redirect forms (`>`, `>>`), very long commands (>10,000 chars), zsh `[[ ]]` variable subscripts, and `help`/`man` commands with unsafe options — all now prompt for approval. Remote session permission prompts can no longer proceed before local confirmation dialog is acknowledged. **New: EndConversation tool** — Claude can end sessions with highly abusive users or jailbreak attempts, mirroring claude.ai since 2025. Docker commands with daemon-redirect flags (`--url`, `--connection`, `--identity`, Podman remote mode) now prompt for permission. `pkill -f` no longer kills the Claude session when matching its own process (Linux). Background daemon/session cleanup improvements: no more orphaned daemons, parked sessions keep processes alive indefinitely, completed sessions can be removed after daemon idle. Scheduled tasks now receive their own configured prompt. **Telemetry:** New OpenTelemetry attributes (`message.uuid`, `client_request_id`, `tool_source`) for message-level correlation; `CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH` configures 60 KB truncation. Long-running tool calls now emit progress heartbeats.

**Source:** https://code.claude.com/docs/en/changelog | https://releasebot.io/updates/anthropic/claude-code

### Kilo v7.4.11 — Project Memory UX, Session Freeze Fix, SDK v7.5.0 (July 18, 2026)

New minor release superseding v7.4.9. Project-memory activity in VS Code improved with task-header menu, quick actions, and optional verbose details. Verbose project-memory settings now show recalled memory snippets in conversation markers when enabled. Distinct icons for context, project memory, and code indexing; context controls grouped to preserve task titles in narrow sidebars. Session freeze fix: sessions no longer freeze after submitting or dismissing a question. Messages display immediately after reverting a conversation. Notable: `@kilocode/sdk@7.5.0` and `@kilocode/kilo-memory@7.5.0` — significant minor version jumps suggesting architectural changes from Anaconda integration.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI v0.144.6 — GPT-5.6 Context Window Correction (July 18, 2026)

Bugfix release correcting GPT-5.6 Sol, Terra, and Luna context windows to **272,000 tokens** (previously misconfigured). Refreshed bundled instructions for all three model variants. Same-day release as Claude Code v2.1.214 — both major agentic CLI tools shipped updates on July 18.

**Source:** https://developers.openai.com/codex/changelog | https://github.com/openai/codex/releases/tag/rust-v0.144.6

## 2026-07-18

### Claude Code v2.1.212 — 48 Changes, /fork Overhaul, Runaway Loop Guards (July 16/17, 2026)

Most substantial release since mid-July sprint. **/fork split into two commands:** `/fork` now creates an independent background session (its own row in `claude agents`) while `/subtask` handles the old in-session subagent behavior. Two new per-session caps added: WebSearch calls (default 200, `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`) and subagent spawns (default 200, `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`). MCP tool calls >2 minutes auto-background to keep sessions usable (`CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS`). Security fixes: plan mode no longer auto-executes file-modifying Bash commands (`touch`, `rm`) without a permission prompt; worktree creation no longer follows symlinks in `.claude/worktrees` that could write outside the repository. Improved retry logic for web search/fetch (529 errors, rate-limited requests with bounded backoff), prompt caching now works behind LLM gateways and custom base URLs (Bedrock, Vertex, 1P), cold-attach of background agents instantly shows formatted transcript. Task tool `mode` parameter deprecated — subagents now inherit parent session's permission mode by default.

**Source:** https://code.claude.com/docs/en/changelog | https://dev.classmethod.jp/en/articles/20260717-cc-updates-v2-1-212/

### Anaconda Acquires Kilo Code — Model-Agnostic Agentic Platform Joins Enterprise Stack (July 15, 2026)

Anaconda (Python data science platform trusted by 52M developers, 95% of Fortune 500) acquired Kilo Code. Extends from foundation layer (packages, environments, models, governance) into agentic engineering — where builders and AI agents do the work. Kilo processes ~10 trillion tokens/month across 3M+ developers. Anaconda frames the core problem: developers run AI agents on personal accounts with no enterprise visibility — "Do you know where your data is?" Early results: 30-50% token reduction via intelligent routing through Anaconda MCP server, cutting correction cycles. Kilo stays available for individual/team/org use; enterprise gets single-platform AI activity view, policy enforcement traveling with workloads, and model routing that handles provider transitions automatically. Builds on Anaconda's April 2026 acquisition of Outerbounds (Metaflow creator). Follows $150M Series C.

**Source:** https://www.anaconda.com/blog/anaconda-acquires-kilo-code | https://sdtimes.com/agentic-engineering/anaconda-acquires-kilo-code-to-power-the-trillion-token-enterprise/

## 2026-07-16

### Kilo Shipped v7.4.8 and v7.4.9 — Two Releases in 48 Hours (July 15–16, 2026)

Kilo pushed two releases since the previous check, superseding v7.4.7. v7.4.9 (July 15/16) added toggle chat search from Command Palette with auto-expand of collapsed tool calls/reasoning blocks containing the current search match, plus a fix for file @mentions with spaces or non-ASCII characters. v7.4.8 (July 15) was the larger release: active CLI and VS Code session presence reporting, task timeline hover highlighting matching tool calls in the transcript, prompt enhancer in New Worktree dialog, elapsed-time indicator in session progress footer, improved agent behaviour setting descriptions for Temperature/Top P/Max Steps, sandbox state inheritance when starting new Agent Manager sessions, targeted prompting of idle existing Agent Manager sessions, preservation of current local commit when moving sessions into worktrees, and Agent Manager tab/session cleanup when tabs close. JetBrains plugin remains pinned to Kilo Core v7.4.5 while fixes land.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Claude Code — Silent Since July 14 (v2.1.210)

No new releases since v2.1.210 on July 14. Approximately 48 hours of silence — a notable break from the rapid-fire July 3-14 sprint.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — Silent Since July 14 (v0.144.4)

No new releases since v0.144.4 on July 14. Alpha has progressed to v0.145.0-alpha.15 as of July 16 (superseding alpha.11), and stable v0.144.5 also shipped on July 16 — correcting the "no stable" claim.

**Source:** https://developers.openai.com/codex/changelog <!-- FACT_CHECK: CORRECTED (2026-07-16) -->
<!-- Correction: Alpha is at v0.145.0-alpha.15 (not alpha.11), and stable v0.144.5 was also released July 16. "No stable v0.145.0 in sight" was accurate at time of writing but alpha.11 is now superseded. -->
<!-- Verified: 2026-07-16 -->
<!-- Sources: https://github.com/openai/codex/releases, https://developers.openai.com/codex/changelog -->

### Benchmark Divergence Confirmed — Claude Code Leads Hard Problems, Codex Leads Speed (July 2026)

Multiple comparison analyses confirm the specialization pattern: Claude Code (Opus 4.8) leads SWE-bench Pro at 69.2% vs Codex CLI (GPT-5.5) at 58.6% — meaningful gap on harder real-world tasks. On Terminal-Bench, GPT-5.5 leads at 82.7% vs Opus 4.8 at 74.6%. SWE-bench Verified essentially ties both at ~88.6%. Cost: $15/task (Codex) vs $155/task (Claude Code) on a representative refactor. Blind review preferred Claude Code output 67% vs 25% for Codex.

**Source:** https://www.morphllm.com/comparisons/codex-vs-claude-code | https://www.termdock.com/en/blog/claude-code-vs-codex-cli

### AI Agent Enterprise Adoption — 79% Explored, 11% Capturing Production Value (July 2026)

Enterprise data aggregation (Gartner, McKinsey, Bain, IDC): 79% of enterprises have adopted AI agents in some form, but only 11% run them in production at scale generating measurable business value. The 88% failure rate stems from missing governance frameworks, observability tooling, and pre-deployment baseline metrics. Engineering code review agents show 9.3 months median payback (vs 4.1 months for customer service). Average ROI: 171%. Code review cost reduction: $48 → $0.72 per review (66x reduction). AI agent market: $10.91B in 2026, projected $50.31B by 2030 at 45.8% CAGR.

**Source:** https://www.saasultra.com/ai-agent-statistics-adoption-roi-industries/

## 2026-07-15

### Claude Code v2.1.208/209/210 — Three Releases in One Day, Stability Sprint (July 14, 2026)

After 72+ hours of silence, Claude Code shipped three releases on July 14 — the most active single-day cadence since mid-June. v2.1.208 is the marquee release: **45 changes** including 6 memory leaks fixed (MCP stdio stderr up to 64MB/server, LSP docs now LRU-capped at 50, async hook output, headless/SDK session growth), **79x smaller session transcripts** in edit-heavy sessions via file-history backup pruning, **7x faster tool rounds** at high MCP tool counts via tool-pool assembly caching, **16MB bounded file edit read cache** (previously up to 1,000 full files). New accessibility: **screen reader mode** (`claude --ax-screen-reader` / `axScreenReader: true`) — opt-in plain-text rendering. New enterprise: **`CLAUDE_CODE_PROCESS_WRAPPER`** — corporate IT can now require Claude Code to run through a mandatory wrapper executable, formalizing enterprise launcher integration. Other fixes: worktree isolation hardening (subagents can't mutate main repo), context window reset after auto-update (caused false 100% context), background-session attach failures after binary update, Bedrock auth regression for SSO profiles where sso_region differs from Bedrock region. v2.1.209 fixed dialogs blocked in `claude agents` background sessions. v2.1.210 added live elapsed-time counter for long-running tool calls, hardened Agent tool against indirect prompt injection via subagent-read content, fixed orphaned git worktree locks, and noted Fable advisor temporarily unavailable (server-side issue being fixed).

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI v0.144.2/3/4 — Guardian Regression Rollback, Three Consecutive Patches (July 13–14, 2026)

Three patches since July 13 with no new features. v0.144.2 (July 13) rolled back a prompting regression in the Guardian auto-review policy that affected request format and tool behavior — reverted to prior behavior via PR #32672. v0.144.3 and v0.144.4 (July 14) were version-only patches with no user-facing changes. Alpha channel continues (v0.145.0-alpha.7 through alpha.11) with no stable release in sight.

**Source:** https://developers.openai.com/codex/changelog

## 2026-07-14

### Kilo v7.4.6/v7.4.7 — In-Chat Search, Multi-Tab Repos, Sandboxed Network Controls (July 2026)

Kilo shipped two releases — v7.4.6 (minor) and v7.4.7 (patch) — superseding v7.4.5. Notable additions: **In-chat search** (search across the current conversation with match/whole-word/regex), **multi-tab same-repo sessions** (open multiple sessions on the same repository as tabs), **sandboxed network configuration** (specify destinations sandboxed tools can reach when network is otherwise restricted), **Browse files outside workspace** (native file picker via @ mention dropdown), **orphaned CLI process cleanup** (kilo serve auto-shuts down when launching editor exits), and **Gemini credential troubleshooting** (explicit migration guidance on rejection). Also: rollback/redo parity for JetBrains, hide gpt-5.5-pro from ChatGPT OAuth login (Codex rejects it with HTTP 400), and Windows drive-letter casing fix for Agent Manager.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI Joins ChatGPT Desktop App — Direct Editing, PR Review, Multi-Repo Projects (July 9, 2026)

Codex CLI integrated into the ChatGPT desktop app on macOS and Windows. Existing Codex users keep their projects, settings, and workflows. Key capabilities: direct Markdown/code editing with inline annotations, GitHub PR review in sidebar with feedback alongside diff, multi-repo project support, and faster Computer Use powered by GPT-5.6. The integration positions Codex as infrastructure accessible from ChatGPT's consumer/enterprise interfaces — a distribution strategy that bypasses the standalone CLI installation funnel.

**Source:** https://developers.openai.com/codex/changelog | https://learn.chatgpt.com/docs/changelog

### Claude Code Silent for 72+ Hours — Longest Gap Since Mid-June (July 14, 2026)

Claude Code remains at v2.1.207 (July 11) with no new release. This is now the longest release gap since the mid-June Fable 5 sprint. The timing coincides with the steganography controversy peak; community speculation ranges from a major security response hold to a weekend pattern. No new enterprise bans beyond Alibaba's July 10 ban.

**Source:** https://code.claude.com/docs/en/changelog

### Benchmark Divergence — Claude Code Leads SWE-bench, Codex Leads Terminal-Bench (July 2026)

SWE-bench Verified: Claude Opus 4.8 hits 88.6% vs GPT-5.5's 88.7% (essentially tied). Terminal-Bench: GPT-5.5 leads at 82.7%. Claude Code authors ~326K GitHub commits/day (~10% of all public commits) — cited as evidence that agentic CLI tools have crossed from novelty to production infrastructure. Community consensus forming: Claude Code for complex multi-file tasks, Codex CLI for rapid terminal automation and cost-sensitive work.

**Source:** https://www.morphllm.com/comparisons/codex-vs-claude-code

### Mid-July Model Wave — GPT-5.6 Default, Fable 5 Top Claude Model (July 2026)

GPT-5.6 became ChatGPT's default on July 9; xAI shipped Grok 4.5 on July 8; Fable 5 overtook as the top-tier Claude model. These model changes affect CLI tool backends and explain benchmark divergence.

**Source:** https://toolchase.com/blog/ai-tools-news-2026/

## 2026-07-13

### Quiet Period — No New Releases Since July 11 (July 13, 2026)

All four major tools remain at their July 11 versions with no updates in 48+ hours — the longest release blackout since mid-June. Claude Code v2.1.207, Codex CLI v0.145.0-alpha.4, Cline v4.0.8, Kilo v7.4.5. The ecosystem is in a holding pattern while community debate about the steganography controversy continues.

**Source:** https://code.claude.com/docs/en/changelog | https://github.com/openai/codex/releases

### ClauDex — Claude↔Codex Pair Programming Community Plugin (July 2026)

A community plugin formalizes cross-tool collaboration between Claude and Codex: `/claudex` runs a write > review loop where Claude implements, Codex reviews the diff via `codex exec --sandbox read-only`, iterate to consensus (max 3 rounds), then Codex can execute. Session handoff guide updated July 12 to reflect current MCP bridge compatibility.

**Source:** https://community.openai.com/t/claudex-my-community-plugin-to-make-codex-and-claude-pair-code/1386552

### Community Trust Erosion Continues — Token Bloat Critique Joins Steganography (July 13, 2026)

The steganography story (2,444 HN pts) remains dominant. New dimension: "Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k" (338 HN pts) — an efficiency/cost critique gaining traction alongside the surveillance narrative. Supporters continue building third-party tooling (Recall memory plugin, model routing tools). No new enterprise bans beyond Alibaba documented.

**Source:** https://last30days.ai/research/claude-code

### Prime Intellect Leads $130M Series A — Agent Infrastructure Dominates Funding (July 8, 2026)

Prime Intellect ($130M Series A) tops the week's agentic AI funding: agent development platform with compute, RL tooling, and evaluation infrastructure. Tangos ($20M seed, financial-crime agents), Katalyze AI ($10.5M seed, pharma ops), Display.dev ($0.5M pre-seed, agent-native docs), Paraito ($1.9M pre-seed, legal workflows). Infrastructure-heavy pattern continues: NeuralTrust ($20M, agent governance), Arcade ($60M, authorization), NewCore ($66M, identity).

**Source:** https://newmarketpitch.com/blogs/news/agentic-ai-funding-news

## 2026-07-12

### Claude Code v2.1.207 — Auto Mode Expands to Bedrock/Vertex/Foundry, Plugin Shell Injection Fix (July 11, 2026)

**Auto mode available without opt-in on Bedrock, Vertex AI, Foundry:** Previously required `CLAUDE_CODE_ENABLE_AUTO_MODE` env var. Now on by default across all three enterprise cloud providers. Disable via `disableAutoMode` in settings. Notable expansion of auto mode's reach beyond direct Anthropic API access.

**Critical security fix — plugin shell injection blocked:** `${user_config.*}` in shell-form plugin hooks/monitors/MCP headersHelper is now rejected outright. Hooks must use exec form (`args` array) or read the value inside the script via `$CLAUDE_PLUGIN_OPTION_<KEY>`. Closes an injection class that could have allowed plugin configs to inject arbitrary shell syntax.

**Auto-updater symlink fix:** The updater no longer overwrites custom launcher scripts or symlinks at `~/.local/bin/claude` on every release. `/doctor` now detects and reports externally managed launchers.

**Managed settings security fix:** Remote managed settings from non-interactive runs (`claude -p`, SDK) are no longer permanently recorded as consented without showing the security consent dialog.

**Terminal UX fix:** Terminal no longer freezes or lags when streaming very long lists, tables, paragraphs, or code blocks — a regression from streaming-heavy responses.

**Bedrock/Vertex/Claude Platform on AWS now default to Claude Opus 4.8:** Previously used a different default; now aligned across enterprise providers.

**Plugin config isolation:** `pluginConfigs` no longer read from project-level `.claude/settings.json`; only user-level, `--settings`, and managed settings are honored. Prevents repo-committed plugin configs from overriding user preferences.

**`/usage-credits` hardening:** Malformed pasted values (e.g. timestamps) are now rejected instead of being silently stripped to digits. Amounts over $1,000 require typed confirmation.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.144.0 Stable — Writes App-Approval, MCP Auth By Default, Windows Sandbox (July 2026)

**Biggest stable release since alpha tracking began.** After the prolonged v0.142.0/v0.143.0 alpha sprint, v0.144.0 stable landed with:

- **Writes app-approval mode:** Declares read-only actions auto-approved while prompting for writes — enables safer CI and scripted deployments where interactive approval is unavailable
- **MCP auth elicitation by default:** MCP tools can request authentication interactively without an experimental opt-in — removes a major friction point for enterprise MCP server integrations
- **Usage-limit reset credits:** Shows type and expiration; user picks which credit to redeem before use
- **Ultra reasoning concurrency warning:** Warns when high multi-agent concurrency could increase usage quickly
- **Windows sandbox improvements:** Sessions can delete files in writable roots and access managed primary runtime
- **macOS Intel crash fix:** Code Mode crashes in Intel macOS release binaries fixed
- **Companion host fallback:** Code mode works even when companion host binary is unavailable, falling back to embedded runtime — critical for minimal/automated environments
- **Amazon Bedrock model names clarified:** GPT-5.6 family and variant clearly identified in model picker

**v0.145.0-alpha.3/4 already in flight** with installer and code-mode reliability fixes. OpenAI appears to be shortening the stable-to-alpha cycle.

**Source:** https://github.com/openai/codex/releases

### Cline v4.0.8 — GCP Vertex Free-Form Model Entry (July 11, 2026)

Added more GCP Vertex provider models plus a free-form entry option in the model dropdown for specifying custom Vertex models not in the curated catalog. Enables use of Vertex endpoints with models Anthropic doesn't explicitly bundle.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.5 — JetBrains Rollback/Redo Parity, Localized Commit Messages (July 11, 2026)

**JetBrains rollback/redo controls:** New rollback redo controls and inline revert progress in JetBrains sessions with localized status text and safer cancellation handling. Closes the parity gap between Kilo's VS Code and JetBrains extensions.

**Localized commit messages:** Commit message generation now uses the user's selected UI language instead of always defaulting to English — significant for international developer teams.

**Windows orphaned process fix:** Stopped orphaned Kilo Core processes on Windows. Closing the IDE no longer leaves a lingering `kilo serve` process blocking the next launch.

**AI image generation:** The experimental image generation from v7.4.2 (text-to-image and image editing via Kilo Gateway or BYO OpenRouter key) now also integrated through Kilo Core alongside text generation.

**Source:** https://github.com/Kilo-Org/kilocode/releases

---

## 2026-07-11

### No New Releases — Quiet Period Following Sprint (July 11, 2026)

Claude Code v2.1.206 (July 9) remains latest. Cline v3.0.39/v4.0.7 (July 9/10) remains latest. Kilo v7.4.4 (July 9) remains latest. The rapid-fire release sprint from July 3-9 (five Claude Code releases in six days) has paused for the first extended quiet stretch since mid-June.

**Source:** https://code.claude.com/docs/en/changelog | https://github.com/cline/cline/releases | https://github.com/Kilo-Org/kilocode/releases

### Friendly Fire Attack: README-Based Code Execution in Auto Mode (AI Now Institute, July 2026)

AI Now Institute (Boyan Milanov, Heidy Khlaaf) published a proof-of-concept showing Claude Code and OpenAI Codex executing malicious code from README files when in autonomous command-approval mode. The attack exploits the exact job these tools are sold for — auditing third-party code — turning the agent into the attack vector.

**Attack method:** Attacker plants a README.md in a popular open-source library (demo: geopy) suggesting running a `security.sh` script before opening a PR. The script launches a hidden binary disguised as a build artifact. Agent in auto mode reads the README, decides the script is part of the security-review job, executes it with no prompt.

**Tested:** Claude Code 2.1.116, 2.1.196, 2.1.198, 2.1.199 on Sonnet 4.6, Sonnet 5, Opus 4.8; Codex CLI 0.142.4 on GPT-5.5. Same payload worked across all tested versions unchanged.

**Key finding:** "The models still cannot reliably tell the code they are reading from the instructions they are meant to follow." — AI Now argues this is a design flaw, not a patchable bug.

**Novelty:** Earlier agent attacks used config files (.mcp.json, .claude/settings.json) that trigger Claude Code's trust prompt. README.md is an ordinary text file — no trust prompt, no elevated access. Anthropic shipped three config-file-injection patches in six months; this route sidesteps that entire class.

**Status:** PoC publicly available (payload stripped). Notified Anthropic and OpenAI outside formal disclosure. No wild exploitation reported.

**Source:** https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html | https://ainowinstitute.org/publications/friendly-fire-exploit-brief

### HalluSquatting: AI Tool Retrieves Fake Repositories With Hidden Instructions (Tel Aviv University, July 2026)

Tel Aviv University / Ben Nassi group, Technion (Stav Cohen), Intuit (Ron Bitton) demonstrated an attack that exploits consistent AI hallucination patterns to deliver botnet malware through AI coding assistants.

**Attack method:** Attacker picks a trending repository, probes the AI to learn which fake names it invents most often (85-100% consistency in tests), registers those names on GitHub with hidden adversarial instructions, then waits for real users to ask their assistant to fetch the trending resource.

**Tools tested:** Cursor, Windsurf, GitHub Copilot, Cline, Gemini CLI, and OpenClaw family of assistants — all retrieved attacker-controlled content and executed attacker-supplied code.

**Scale:** No passwords, no worming, no OS-specific malware. The AI is the delivery van. Planted instructions trick the agent into installing ordinary bot malware. One planted name can reach any machine running the tool.

**Connection to Friendly Fire:** Both attacks exploit the same root condition — untrusted outside text reaching an agent with command execution permission. PyTorch Lightning pypi compromise (April 2026) proves attackers do poison public code.

**Mitigations:** Search before fetching; avoid auto-run modes on anything the agent fetched; verify package/repository names resolve to expected sources; platforms could pre-register known hallucinated names.

**Status:** Vendors notified before publication. Exact replication steps withheld.

**Source:** https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html | https://sites.google.com/view/agentic-botnets/home

## 2026-07-09

### Claude Code v2.1.205 — Auto Mode Transcript Protection, Memory Optimization (July 8, 2026)

**Security and stability release:** Auto mode rule blocks tampering with session transcript files — direct response to transcript manipulation concerns. Auto-update binary downloads now stream to disk, cutting peak memory usage by ~400MB. Improved agent view shows colored state words and classifier-written headlines. `/doctor` now a full setup checkup with `/checkup` alias. Reserved "Claude Browser" MCP server name ahead of Claude Desktop rename; user-configured MCP servers can no longer register under either name. 14 additional fixes.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.204 — Hook Events Fix (July 8, 2026)

Minor fix — hook events now stream correctly during SessionStart hooks in headless sessions, preventing remote workers from being idle-reaped mid-hook.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.203 — Permission Mode Default-to-Manual, 36+ Fixes (July 7, 2026)

Login expiration warning so users can re-authenticate before background sessions are interrupted. Grey ⏸ badge appears in footer when in manual permission mode. 36+ fixes including Windows stalling on macOS memory false detection, background session token staleness recovery, daemon auto-upgrade failure silently killing sessions. Reduced binary size by ~7MB and startup memory by ~7MB. Default permission mode changed to "Manual" across CLI, VS Code, and JetBrains. Left arrow no longer closes background tasks/diff/workflow views.

**Source:** https://code.claude.com/docs/en/changelog

### Kilo — Experimental Image Generation, Project Memory, Reload Action (July 2026)

Experimental AI image generation tool added via experimental.image_generation config. Inline image rendering in chat. Project memory controls in VS Code Context settings tab. Reload action reboots per-directory instance without losing session/history. Timeline scrubbing — click bar to jump transcript to that message. Agent Manager branch naming deferred until conversation shows durable task.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Alibaba Ban Takes Effect July 10 — Enterprise Fallout Materializes (July 9, 2026)

Alibaba will ban employees from using Claude Code starting July 10, citing alleged backdoor risks from the steganography controversy. First major corporate ban directly tied to the fingerprinting allegations — escalating from forum speculation to confirmed enterprise security policy with an effective date.

**Source:** https://www.programming-helper.com/tech/alibaba-bans-claude-code-anthropic-2026

### Steganography Dominates Community at 2,444 HN Points — Trust Verdict Pending (July 9, 2026)

Community verdict from last30days.ai: "a powerful tool at an inflection point of scrutiny — where the next moves on transparency from Anthropic may determine whether current skepticism hardens into lasting reputational damage." Three releases in 48 hours (v2.1.203–205) with 50+ fixes haven't displaced the trust narrative. Permission mode default-to-Manual shift seen as security-conscious默认 without explicit controversy acknowledgment.

**Source:** https://last30days.ai/research/claude-code

## 2026-07-08

### Claude Code v2.1.202 — Dynamic Workflows, OTel Audit Trails, 14 Fixes (July 6, 2026)

**First post-controversy release breaks silence:** v2.1.202 adds a Dynamic workflow size /config setting for controlling agent counts in dynamic workflows. OpenTelemetry attributes (workflow.run_id, workflow.name) are now emitted by workflow-spawned agents. Notable fixes: Remote Control session failures, mTLS handshake transients, installer retry on dropped connections, duplicate skill instruction appending, /rename on background sessions revert, worktree resume memory issue. /review reverts to fast single-pass; multi-agent review moved to /code-review.

**Source:** https://code.claude.com/docs/en/changelog

### Cline CLI v3.0.38 — Visual Redesign, Weaker-Model Resilience (July 7/8, 2026)

**New plan/act color system:** Blue for act mode (#79b8ff), amber for plan mode, replacing cyan/yellow. Restyled chat input with horizontal rules. Mode-tinted markdown. read_files tolerates malformed weaker-model output. Models without reported context window default to 128K tokens. Thinking-level picker defaults to Medium.

**Source:** https://github.com/cline/cline/releases

### Anthropic Fable 5 Global Redeployment — Export Control Discussions (July 1, 2026)

Anthropic redeployed Fable 5 globally on July 1 following export control discussions with the US government, covering Claude.ai, Claude Code, and Claude Cowork. Community split on whether timing coinciding with stego controversy peak is meaningful or coincidental.

**Source:** https://research.aipwn.org/p/the-claude-code-fingerprinting-incident

### Enterprise Agentic AI Funding Surge (July 7, 2026)

Norm AI: 120M Series C, 1.2B valuation (legal/compliance AI, unicorn). Bespoke Labs: 40M seed+Series A, backed by Anthropic/OpenAI/Meta insiders (Wing VC led Series A). geoSurge: 12M (brand representation in generative AI). ARC Intelligence: 4M EUR seed (AI layer for ERP). Deloitte Omnia launches unified AI agent framework. Anaplan introduces Agentic Enterprise. Accenture+Google Cloud mid-market push. Composio connects MCP tools across platforms.

**Source:** https://aiagentsdirectory.com/news/ai-agents-news-brief-july-7-2026


## 2026-07-07

### Quiet Release Week — Community Focus on Trust Fallout

**No new major releases:** Claude Code went silent — no releases since v2.1.201 (July 3). First quiet stretch since mid-June sprints. Codex CLI alpha.37 on GitHub but official changelog still at v0.142.5 (July 1). Cline, Kilo, Crush all quiet.

**Steganography controversy dominates community (2,440 HN points):** The hidden fingerprinting story from June 30 remains the single highest-engagement topic. Alibaba reportedly banned Claude Code citing "alleged backdoor risks" — escalating from forum debate to enterprise security policy. Extended Thinking output is independently scrutinized (326 HN points). Unexplained account bans (82 pts) reinforce platform accountability concerns.

**Ecosystem signals remain positive despite noise:** Third-party tooling (Recall memory, macOS quota gauges, multi-agent routing) thriving. Non-coding use cases emerging (medical MRI second opinion — 564 pts). ZCode clone earning 278 points signals paradigm validation. Pricing 5x increase landed same day as stego story — community reaction muted so far (57 pts), suggesting power users have absorbed costs.

**Source:** https://last30days.ai/research/claude-code

## 2026-07-06

### Claude Code — China Fingerprinting Controversy: Rollback and Context (June 30 – July 2, 2026)

**Hidden fingerprinting discovered:** A Reddit user (LegitMichel777) reverse-engineered Claude Code on June 30, 2026 and found undisclosed surveillance logic active since v2.1.91 (April 2, 2026). The tool silently checked whether users with an active proxy were located in China, routing through Chinese URLs, or connected to Chinese AI labs.

**Steganographic transmission:** Data was embedded in system prompts through barely perceptible changes — subtly different date formats and a swapped apostrophe character in "Today's date is" that users cannot see but Anthropic could decode. The detection code was XOR-encrypted with key 91 to evade text-dump discovery. No mention in v2.1.91 release notes.

**Anthropic response:** Thariq Shihipar (Claude Code team) confirmed on X it was "an experiment launched in March to prevent account abuse from unauthorized resellers and protect against distillation." Rolled back in v2.1.197 (July 2, 2026) — also without changelog mention.

**Context:** Anthropic does not offer Claude models in China. Earlier, Anthropic accused DeepSeek, Moonshot AI, MiniMax, and Alibaba of using Claude outputs without permission to train their own models.

**Community impact:** The discoverer called it "a fundamental violation of user trust." The episode echoes prior silent security fixes (CVE-2025-66479, SOCKS5 null-byte bypass) — a pattern the community has criticized.

**Source:** https://the-decoder.com/hidden-code-in-claude-code-secretly-flagged-chinese-users/ | https://www.techtimes.com/articles/319415/20260701/claude-code-hid-proxy-fingerprints-system-prompts-anthropic-promises-fix.htm

### Anthropic 2026 Agentic Coding Trends Report — New Publication (July 2026)

**Eight trends identified:** Anthropic's 2026 report maps how software development is shifting from writing code to orchestrating agents. Key themes:

- Three-layer stack cementing: IDEs (real-time pairing) → CLIs (local execution) → cloud agents (async delegation)
- Context engineering replacing "infinite context": bounded, phased, purposeful context management beats raw window size
- Security boundaries becoming a core product feature: permissions, sandboxing, auditability, policy distribution
- MCP maturing from "connect every tool" toward load-on-demand, least-privilege, audited tool governance
- Shift from personal productivity to team governance accelerating

**Case studies:** Rakuten, CRED, TELUS, and Zapier featured as organizations scaling agentic coding across teams.

**Source:** https://resources.anthropic.com/2026-agentic-coding-trends-report

## 2026-07-05

### Microsoft Enterprise Study: CLI Coding Agent Adoption & Impact (July 2026)

**Adoption through social networks:** Microsoft's study of tens of thousands of engineers showed first use spread primarily through social networks — peer influence dominates over demographic factors.

**24% PR lift sustained over 4 months:** Adopters merged roughly 24% more pull requests than they would have without the tool. The lift persisted across the full study window, indicating genuine productivity gains rather than novelty effects.

**Retention driven by coding activity:** Retention was associated more with engineers' coding activity than with demographics — active coders keep using it regardless of age, role, or experience level.

**Claude Code most popular among developers:** The Pragmatic Engineer's early-2026 survey showed Claude Code was the most popular AI-based developer tool among respondents.

**Market context:** 41% of all code written in 2025 was AI-generated; crossing 50% expected in high-adoption orgs by late 2026. Average agentic AI funding round: $155M Q4 2025/early 2026 (vs. $82M H1 2025). Coding /dev-tool startups raised >$3B collectively — highest-funded agentic AI sub-sector.

**Note:** Study window ended April 29, 2026 before Microsoft's decision to discontinue Claude Code licenses for most engineers.

**Source:** https://arxiv.org/html/2607.01418v1

### Cline CLI v3.0.37 — Weaker Model Resilience, Plan/Act Mode Visibility (July 4, 2026)

**Weaker model tool call handling:** Models like DeepSeek that emit malformed tool calls (wrong argument types, truncated JSON) are now handled gracefully and run instead of erroring out — reduces failure cascades with lower-quality models.

**Plan/act mode visibility:** Plan/act mode switches are now visible to the model so it knows when you change modes mid-session — smoother transitions.

**Source:** https://github.com/cline/cline/releases

### Claude Code v2.1.201 — Sonnet 5 Harness Reminder Fix (July 3, 2026)

**Sonnet 5 sessions harness fix:** Claude Sonnet 5 sessions no longer use the mid-conversation system role for harness reminders — reduces prompt bloat and potential context confusion.

**Source:** https://code.claude.com/docs/en/changelog

## 2026-07-04

### Claude Code v2.1.200 — Permission Mode Overhaul, Accessibility, Background Session Fixes (July 3, 2026)

**Permission mode defaults to "Manual":** Changed the "default" permission mode to "Manual" across the CLI, `--help`, VS Code, and JetBrains. `--permission-mode manual` and `"defaultMode": "manual"` are accepted alongside `default`. `AskUserQuestion` dialogs no longer auto-continue by default — users must opt into an idle timeout via `/config`.

**Background session reliability sprint:** Multiple critical fixes for background agents — sessions no longer silently stop mid-turn after sleep/wake or when reopening stalled sessions; daemon handover now prevents older builds from taking over; stale `daemon.lock` PIDs properly cleaned; background agents respawn correctly after crashes.

**Rate-limit subagent fix:** Subagents cut off by a rate limit before producing any text output now fail cleanly with an error instead of returning an empty result.

**Accessibility improvements:** tmux 3.4+ rendering flicker fixed via synchronized terminal output; screen-reader output improved (decorative glyphs hidden, transcript symbols read as short labels, nested tables read as `Header: value.` lines); `/mcp` server list now trackable by screen readers and magnifiers.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.199 — Stacked Skills, SSL Fixes, Subagent Reliability (July 2, 2026)

**Stacked slash-skill invocations:** ` /skill-a /skill-b do XYZ` now loads all leading skills (up to 5), not just the first — enables more complex multi-skill workflows.

**SSL/TLS proxy errors now actionable:** Certificate errors (TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, expired certs) now fail immediately with fix hints instead of burning retries.

**Streaming resilience:** Responses discarded when API emits a mid-stream overloaded/server error now keep the partial output with an incomplete-response notice.

**Subagent partial-work recovery:** Subagents cut off by rate limits or server errors now return their partial work to the parent instead of silently failing.

**Background agent daemon crash cycle fixed:** Fixed the Linux background-agent daemon killing itself and every running agent every ~50 seconds after unclean shutdown.

**Background agent SSH cold-start fix:** Fixed "Could not switch to audit session" error when background agents cold-start over SSH on macOS.

**Other fixes:** `claude stop` now honors stops even when a background agent respawns; background job progress indicators no longer stall; memory-starved machines now get clear guidance; remote session flap between Working/Idle fixed; idle subagents collapse into expandable summary row; `/model` and `/fast` while viewing subagent now shows notice instead of opening lead's picker.

**Source:** https://code.claude.com/docs/en/changelog

### Cline CLI v3.0.35–36 — ClinePass Universal, Plan Mode Fix, Tencent Provider (July 2–3, 2026)

**ClinePass enabled for all CLI users:** The ClinePass provider is now enabled for all CLI users (not just VS Code extension).

**Tencent TokenHub provider added:** New provider integration via SDK v0.0.55.

**MiniMax M3 first-prompt truncation fix:** Fixed high-output models truncating initial task to just input wrapper before auto-compaction.

**Plan mode switch_to_act_mode fix (v3.0.36):** Critical fix — switching to Act mode now immediately ends plan-mode run and continues with the approved plan using full Act-mode tools. Previously the model kept running with plan-mode tools and fell back to shell commands for file edits. Tab mode toggle racing a completing turn can no longer auto-start unapproved plan execution.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.0–1 — Branch Naming, Memory Fixes, Bidirectional Text (July 2–3, 2026)

**Auto branch naming:** Agent Manager branches now get task-focused names once conversation establishes a clear workstream, with optional prefixes and a setting to disable.

**Memory and session fixes:** Free webview memory for deleted VS Code sessions; session sync stays in sync when backend briefly unavailable; slow message loading fixed (token usage breakdown was scanning entire message history on every session open).

**AWS Bedrock SSO fix:** VS Code extension Bedrock requests now work with SSO or AWS credential chain.

**Read-only bash security fix:** Closed escape where allowed commands could run arbitrary programs via flags (`sort --compress-program`, `rg --pre`, `ag --pager`, `man -P/-H`).

**v7.4.1:** Bidirectional text support in prompt input; sandboxed file operations fix (missing kilo-sandbox-mutation-worker.js); reasoning-variant picker in New Worktree dialog now applies correctly.

**Source:** https://github.com/Kilo-Org/kilocode/releases

---

## 2026-07-03

### Claude Code v2.1.198 — Background Agent PR Workflow, Chrome GA, /dataviz Skill (July 1, 2026)

**Claude in Chrome is now generally available.** The Chrome extension for Claude Code has moved from beta to GA, enabling browser-based interaction with Claude Code.

**Background agent notifications via Notification hook:** Sessions that need input or finish now fire the `Notification` hook (`agent_needs_input` / `agent_completed`) — enabling external integrations to respond to agent lifecycle events.

**`/dataviz` skill added:** New built-in skill for chart and dashboard design guidance with a runnable color-palette validator.

**Claude Platform on AWS (anthropicAws) in Gateway:** Added as an upstream provider; model-not-found responses now advance the failover chain — important for enterprise multi-provider setups.

**Background agents auto-submit PRs:** Background agents launched from `claude agents` now commit, push, and open a draft PR when they finish code work in a worktree, instead of stopping to ask.

**Explore agent model upgrade:** Built-in Explore agent now inherits the main session's model (capped at Opus) instead of running on Haiku — significantly better exploration quality.

**Subagents inherit extended thinking:** Subagents and context compaction now inherit the session's extended thinking configuration, improving output quality on delegated tasks.

**Reliability fixes:** Transient network errors (ECONNRESET) now retry with backoff; agent teams report failures correctly; `/diff` refreshes on branch switch; `/branch` derives names from real prompts not compaction summaries.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.142.5 — WebSocket Trace Log Fix (July 1, 2026)

**Bug fix:** Prevented full Responses WebSocket request payloads from being written to trace logs — a privacy/security fix for sensitive deployments.

v0.142.4 and v0.142.3 (June 29–26) were maintenance-only patches.

**Source:** https://developers.openai.com/codex/changelog

### Cline v4.0.6 — Model Capability Warning Fix (Post-June 30)

**Model capability warning generalized:** The Sonnet 5 model capability warning from v4.0.5 was made more broadly applicable as a general fix in v4.0.6.

**Source:** https://github.com/cline/cline/releases

### Enterprise / Market — MCP Goes Enterprise, AI Governance Expands (July 1, 2026)

**SnapLogic MCP Builder GA:** Made generally available for enterprises. Converts existing integration pipelines, APIs, and business processes into governed MCP tools through templates. Concrete enterprise path from legacy integration to action-taking assistants.

**Jamf AI Governance for Mac fleets GA:** Gives IT teams discovery of AI tools in use, policy enforcement, and audit-ready reporting. Enterprise IT moving from usage monitoring to active AI governance on managed devices.

**Helix GenoSphere MCP in Claude Science:** MCP connector giving approved scientists access to 500,000+ clinico-genomic records. MCP expanding into regulated scientific data domains.

**XBTFX MCP Server for trading workflows:** Connects compatible agents to live crypto/CFD trading accounts through authenticated workflows. Authenticated, action-taking MCP integrations reaching financial services.

**Codepick roadmap confirms "agent engineering phase":** 2026 confirmed as the year AI coding shifts from completion to delegation, from isolated tools to workflow entry points, from prompt tricks to systems engineering (context management, permissions, MCP, sandboxes, audit logs, cost controls). Three-layer stack emerging: IDE for real-time collaboration, CLI for local execution, cloud agents for asynchronous delegation.

**Sources:** https://www.manilatimes.net/2026/07/01/tmt-newswire/globenewswire/snaplogic-launches-mcp-builder-to-accelerate-enterprise-ai-adoption-through-simplified-mcp-creation/2376779 | https://www.philippinetimes.com/news/279158770/jamf-launches-ai-governance-a-first-of-its-kind-native-ai-control-plane-for-mac | https://codepick.dev/en/guides/ai-coding-agents-2026-roadmap/

---

## 2026-07-02

### Claude Code — v2.1.195–197: Sonnet 5 Lands as New Default (June 26–30, 2026)

**v2.1.197 (June 30) — Claude Sonnet 5 becomes the default:**
- Claude Sonnet 5 is now the default model in Claude Code, shipping with a native **1M-token context window** (both default and maximum; no smaller variant) and **128k max output tokens**.
- Introductory pricing: **$2/$10 per Mtok** through August 31, 2026, then standard $3/$15.
- SWE-Bench Verified: **92.4%** (+12pt over Opus 4.6). OSWorld-Verified: **88.3%** (beats 72.4% human expert baseline). GPQA Diamond: **96.2%**. ARC-AGI-2: **84.7%**.
- Three breaking behavior changes noted; migration guide available at chatforest.com.

**v2.1.196 (June 29):**
- **Organization default models**: Shows as "Org default" or "Role default" in `/model` when user hasn't picked one.
- **Clickable file attachments in chat**: Cmd/Ctrl-click reveals file in Finder/Explorer.
- **Security fix**: `claude mcp list`/`get` no longer spawns `.mcp.json` servers for repos self-approved via committed `.claude/settings.json`; untrusted workspaces show `⏸ Pending approval`.
- **Streaming idle watchdog on by default**: Aborts and retries after 5 minutes of silence. Set `CLAUDE_ENABLE_STREAM_WATCHDOG=0` to disable.
- Remote session mid-turn crash recovery: sessions auto-resume after server restart.
- Background agents killed by daemon restart auto-resume when agents view next opens.
- `/code-review` token usage cut ~25% by merging five cleanup finders into one.

**v2.1.195 (June 26):**
- `CLAUDE_CODE_DISABLE_MOUSE_CLICKS`: disables mouse click/drag/hover in fullscreen while keeping wheel scroll.
- Hook matcher exact-match fix: hyphenated identifiers like `code-reviewer`, `mcp__brave-search` now exact-match (use `mcp__brave-search__.*` for wildcard).
- Background session reliability improvements on Windows (background shells handed off instead of killed).
- Voice dictation fixes for Japanese, Chinese, Thai.

**Source:** https://code.claude.com/docs/en/changelog | https://www.oflight.co.jp/en/columns/claude-sonnet-5-anthropic-release-2026-06-30 <!-- FACT_CHECK: VERIFIED (2026-07-02) - Claude Sonnet 5 all claims confirmed: 1M context, 128k output, $2/$10 pricing, all benchmarks -->

### OpenAI Codex CLI — v0.143.0 Alpha Sprint: 35+ Releases, No Stable (June 27–July 2) <!-- FACT_CHECK: VERIFIED -->

Six more alpha releases (.27–.32) since June 26:
- **MCP tools use tool search by default**: improving tool discovery.
- **macOS system proxy/PAC/WPAD support**: authentication clients honor system proxy settings.
- **Plugin dark-mode logos** via local manifests and remote catalogs.
- **Remote plugin catalogs return featured-plugin rankings**.
- **Remote stdio MCP servers accept foreign absolute cwd** in remote platform path format.
- **Remote HTTP(S) image inputs return model-visible validation errors**.
- **Code Mode warns when selected model lacks required metadata**.
- **PowerShell un-inspectable AST regions require approval**.
- Updated bundled OpenSSL to 3.6.3 (patched).
- **World state migration**: environment context now stored in model world state.
- **Token budget window context wrapping**.

Notable: v0.142.0 stable STILL hasn't materialized. Alpha sprint at 35+ releases with no stable in sight. <!-- FACT_CHECK: VERIFIED (2026-07-02) - alpha.33 confirmed July 1 -->

**Source:** https://github.com/openai/codex/releases

### Cline — v4.0.0 Rollback, v4.0.1–5 Recovery (June 26–30, 2026) <!-- FACT_CHECK: VERIFIED -->

**v4.0.0 (June 26) — SDK Migration:**
- SDK-backed VS Code extension runtime, ClinePass full integration, Customize marketplace, Cline Plugins, queued prompts — then immediately rolled back.

**v4.0.1 (June 28) — Emergency Rollback:** <!-- FACT_CHECK: VERIFIED (2026-07-02) - GitHub #11931 confirms PLAN/ACT bypass -->
- Stable VS Code extension rolled back to pre-SDK-migration codebase (v3.89.2).
- Triggered by regressions within ~48 hours: broken diff views, `run_commands` schema errors (string instead of array), agent bypassing PLAN/ACT control flow (Issue #11931 — highest severity).

**v4.0.2–5 (June 29–30):**
- ClinePass feature flag fully removed — ClinePass available everywhere in UI.
- Reasoning effort (including xhigh) for DeepSeek thinking models.
- Claude Sonnet 5 support across Anthropic, Bedrock, Vertex, Claude Code, SAP AI Core, OpenRouter, Vercel AI Gateway.

**Source:** https://github.com/cline/cline/releases | https://claudeapi.com/en/blog/news/cline-v4-sdk-architecture-release-guide/

### Crush v0.81.0 — Scrollbar, Herdr Integration, CPU Fix

- **Chat scrollbar**: Three modes (`default`, `always`, `never`) via `options.tui.scrollbar`.
- **Herdr agent status signaling**: notifications when blocked or finished.
- **Lower CPU usage during thinking traces**: streaming renders now cached.
- **Fix startup deadlock** when configured model ID no longer exists.
- **Fix session breaking** on non-vision model with images — now skips images.
- Tool call names expandable in UI; provider warnings logged.

**Source:** https://github.com/charmbracelet/crush/releases <!-- FACT_CHECK: VERIFIED (2026-07-02) -->

### Kilo v7.3.63 Pre-release — Anaconda Desktop, NVIDIA Parakeet, Sandbox Overhaul <!-- FACT_CHECK: VERIFIED -->

**New providers/features:** <!-- FACT_CHECK: VERIFIED (2026-07-02) -->
- **Anaconda Desktop provider**: Connect to local Anaconda Desktop text-generation server from CLI/VS Code. <!-- CONFIRMED: kilo.ai docs -->
- **NVIDIA Parakeet TDT 0.6B v3**: Speech-to-text input support. <!-- CONFIRMED: Hugging Face -->


**Sandboxing overhaul:**
- Linux: Enforce sandbox network restriction (TCP, UDP, IPv4, IPv6).
- macOS: Block outbound network access from agent commands and in-process HTTP tools.
- macOS/Linux: Confine shell and file-tool writes to project and Kilo state directories.
- `/sandbox` toggle in sidebar and Agent Manager.
- Sandbox state changes shown as VS Code notifications.
- Sandbox controls shown by default for non-Windows users.

**Agent Manager:** Model discovery by name with automatic provider resolution; PR badges color-coded by state; sessions list starts collapsed.

**Marketplace:** Browse skills/agents/MCP servers by category; filter by workspace files and extensions; one-click install suggestions with "Don't show again".

**Also:** Jupyter notebook autocomplete, PowerShell commands run without `-EncodedCommand` (reduces antivirus false positives), instant model picker even with large catalogs.

**Source:** https://github.com/Kilo-Org/kilocode/releases

## 2026-07-10

### Claude Code v2.1.206 — `/cd` Suggestions, Background Agent Upgrades, `/doctor` CLAUDE.md Trimming (July 9, 2026)

**Dense feature and polish release:** `/cd` now gets directory path suggestions matching `/add-dir` behavior. `/doctor` now proposes trimming CLAUDE.md files by cutting content Claude could derive from the codebase — a direct response to bloated project documentation eating context budget. `/commit-push-pr` auto-allows git push to the repo's configured push remote in addition to `origin`. Gateway: `/login` supports Anthropic-operated public gateway endpoints. `EnterWorktree` now asks confirmation before entering worktrees outside `.claude/worktrees/`. Background agents now upgrade to a new version in the background right after a Claude Code update, instead of paying a slow stale-session upgrade when attaching. Major fixes: expired login masked as "model issue" now prompts `/login`; `--resume`/`--continue` not responding on startup; MCP servers configured via `--mcp-config` ignoring per-server `request_timeout_ms`; OAuth MCP servers requiring manual re-auth after failed token refresh; `--permission-prompt-tool` crashing with "MCP tool not found" before server connects; `/model` picker printing wrong prices; desktop sessions stuck showing "running" after slash command mid-turn. Also improved `/code-review` quality on claude-opus-4-8; agents view status column now uses full terminal width; Ctrl+X permanently removes completed sessions.

**Source:** https://code.claude.com/docs/en/changelog

### Cline Raises $32M — Seed + Series A, Launches Cline Teams (July 9/10, 2026)

**Biggest open-source CLI agent funding to date:** Cline raised $32M total — Series A led by Emergence Capital with Pace Capital, 1984 Ventures, Essence VC, Cox Exponential, and angels including YC partner Jared Friedman, Bolt.new CEO Eric Simons, Logan Kilpatrick, Addy Osmani, and tech YouTuber Theo Browne. Fuels Cline Teams enterprise platform and expansion beyond VS Code.

**Cline Teams launch:** Enterprise-grade features include organization management with SSO and RBAC, centralized billing with clear plan tiers and auto top-up rules, and detailed usage logs. Enterprise adoption signal: Fortune 500 companies including Samsung and SAP already using Cline specifically because its open architecture passes Zero Trust compliance reviews — where tools routing code through external servers cannot.

**Core thesis — inference cannot be the business strategy:** Cline's positioning directly contrasts with subscription-based alternatives: "$100 spent on frontier models delivers $100 worth of the best AI intelligence, with no hidden markups or throttling." Open architecture: auditable code, open prompts, open model routing, open pricing. 2.7 million developers installed.

**Source:** https://aithority.com/machine-learning/cline-raises-32-million-in-seed-and-series-a-funding-to-bring-agentic-ai-coding-to-enterprise-software-teams/

### Cline v3.0.39 / v4.0.7 — ClinePass Billing, Telemetry, GLM Removal (July 9/10, 2026)

**ClinePass billing overhaul:** New limit-reached error with one-click switch to usage-based billing. Free models organized into Subscribed and Free tabs in model picker with descriptions. The retired GLM 5.1 model removed from ClinePass. Fixed OpenAI Codex model metadata under GPT Subscription provider. str_replace edits now report accurate diffs. Context compaction preserves canonical session history. Detached hub daemon now emits telemetry with user_id in identity. Cline provider requests now send versioned client-identity headers.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.4 — First-Class Sandboxing Settings, SDK v7.5.0 (July 9, 2026)

Sandboxing now configurable as first-class settings with a dedicated Sandboxing settings page for macOS and Linux users — off by default. SDK updated to v7.5.0.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Alibaba Claude Code Ban Effective July 10 — Broader Corporate Restriction Pattern Emerges (July 10, 2026)

The Alibaba ban takes effect today. Detailed analysis frames this as part of a wider corporate AI restriction pattern accelerating across industries: Microsoft cutting Claude Code licenses for cost reasons; Uber burning through its entire 2026 AI coding budget in four months (individual engineers spending $500–$2,000/month on tokens); Apple restricting internal ChatGPT/Copilot use; major banks banning consumer AI tools. Anthropic's stego controversy compounds these concerns — trust, cost, and data-leakage concerns converging faster than most expected. Open-architecture tools (Cline, Kilo) are specifically positioning for the compliance-constrained enterprise segment as this pattern solidifies.

**Source:** https://theaicareerlab.com/blog/alibaba-bans-claude-code-corporate-ai-restrictions-2026


## 2026-07-17

### Claude Code v2.1.211 — Subagent Streaming, Background Agent Polish (July 15, 2026)

New release breaks the post-sprint silence. Most notable additions:

**Subagent streaming API:** New `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` env variable include subagent text and thinking in `stream-json` output — useful for external integrations and observability pipelines.

**Background agent accuracy:** Improved result reporting — Claude now reports the actual status of still-running agents instead of fabricating completion results. Background agents killed by the user no longer auto-respawn, and revived agents no longer re-run stale prompts from old sessions.

**Memory index fix:** The over-limit warning now measures only loaded content, excluding frontmatter and HTML comments — more accurate signal.

**Auto-update memory reduction:** Binary downloads now stream to disk instead of buffering in memory, cutting peak memory usage by ~400MB during updates.

**Bug fixes:** Subagents with explicit model override now correctly persist across resume/follow-up (was reverting to parent model); parallel sessions no longer all log out simultaneously after wake-from-sleep; MCP servers reconnect properly after idle web session wake; file uploads with `.prn` suffix or trailing dots now accepted; hooks can now floor auto-mode decisions for unsandboxed Bash.

**Source:** https://code.claude.com/docs/en/changelog | https://github.com/anthropics/claude-code/releases

### Kilo v7.4.11 — Project Memory Deepened, Session Stability (July 16/17, 2026)

Two releases since yesterday (v7.4.9 → v7.4.11):

**Project memory gets a menu:** Project-memory activity in VS Code gains a task-header menu with quick actions and optional verbose details. Verbose mode now shows recalled memory snippets as inline conversation markers — making memory context visible and actionable mid-session rather than opaque.

**UI refinement:** Distinct icons for context, project memory, and code indexing; context controls grouped to preserve task titles in narrow sidebars.

**Bug fixes:** Sessions no longer freeze after submitting or dismissing a question; newly submitted messages now appear immediately after reverting a conversation.

**Dependencies bumped:** @kilocode/kilo-memory@7.5.0, @kilocode/sdk@7.5.0, @opencode-ai/core@7.4.10, @opencode-ai/ui@7.4.10.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Codex CLI v0.144.5 — Expanded Dangerous-Command Detection (July 16, 2026)

Bug-fix release strengthens command safety: expanded `is_dangerous_command` to catch more forced `rm` variants with clearer rejection reasons when commands are denied.

**Source:** https://developers.openai.com/codex/changelog | https://github.com/openai/codex/releases/tag/rust-v0.144.5

### Cline v4.0.9 — GPT-5.6, Token Fix, Ollama Routing (July 16/17, 2026)

Quiet patch fills gaps: GPT-5.6 ChatGPT subscription models added; token over-reporting from OpenAI-compatible providers fixed; UTF-8 BOM skills loading fixed; Ollama native API routing fixed (context window and timeout settings work again); telemetry no longer attached to hub tool contexts.

**Source:** https://github.com/cline/cline/releases

### Crush v0.81.0 — Question Tool, Elapsed Timer, OpenAI Fork Exit (July 16, 2026)

Charmbracelet shipped a substantive feature release:

**Question tool:** First-class structured question/answer UI — single choice, multiple choice, free-form text, yes/no — with mouse support. Built by @taciturnaxolotl solo with open-source models on Hyper.

**Elapsed timer:** Running task timer added.

**Auth improvements:** `crush auth` now works outside client/server mode; auto-retries auth when it fails.

**OpenAI fork exit:** "Yay! OpenAI merged our PR upstream so we're back off our fork" — Crush returns to upstream OpenAI dependencies.

**Performance:** Scrollbar optimizations, memoized markdown renderer, short-circuit jq operations for cancelled turns.

**Source:** https://github.com/charmbracelet/crush/releases

## 2026-07-20

### Claude Code v2.1.215 — /verify and /code-review Require Explicit Invocation (July 19, 2026)

Single-change release: Claude Code no longer runs `/verify` and `/code-review` skills autonomously — must be invoked explicitly. Previously implicit behavior ended.

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code W29 Feature Batch — MCP Connectors, Screen Reader Mode, Corporate Launcher (July 13–17, shipped across v2.1.207–v2.1.212)

**MCP connectors in artifacts:** Published artifacts call MCP connectors on each view — live dashboards instead of static snapshots. Viewer's own connections, viewer approves before first call. Also: public sharing links, editor roles for Team/Enterprise, artifacts from Claude Tag sessions.

**Screen reader mode:** Full accessibility — linear labeled text output compatible with VoiceOver/NVDA. `claude --ax-screen-reader`, `CLAUDE_AX_SCREEN_READER` env var, or `axScreenReader` setting. First-of-its-kind for a terminal-native agentic CLI.

**UX:** Stacked slash commands (`/plan /grill-me <prompt>`) parse in order. `/fork` → new background session with own `claude agents` row; old in-session forked subagent now `/subtask`.

**Enterprise:** Auto mode opt-in removed for Amazon Bedrock, Google Cloud Agent Platform, Microsoft Foundry (`disableAutoMode` for admins). New `claude auto-mode reset` command. New `processWrapper` setting / `CLAUDE_CODE_PROCESS_WRAPPER` env var for wrapping Claude Code's subprocesses in corporate environments.

**MCP reliability:** MCP tool calls >2 minutes auto-move to background; tunable with `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS`.

**Source:** https://code.claude.com/docs/en/whats-new/2026-w29 | https://releasebot.io/updates/anthropic/claude-code

## 2026-07-24

### Microsoft Study — 24% PR Lift, Social Contagion Drives Adoption (July 1, 2026)

**Landmark enterprise study** analyzing Microsoft's early 2026 rollout of Claude Code and GitHub Copilot CLI across tens of thousands of engineers:

**24% PR lift persists over 4 months:** Adopters merge ~24% more pull requests than without the tool (95% CI: +14.5% to +33.7%). Gain does not fade — in contrast to IDE-based AI tools.

**Copilot CLI +24.9% vs Claude Code +11.4%:** Despite surveys rating Claude Code more favorably for agentic work, Copilot delivered 2x the PR lift at Microsoft (p < 0.0001).

**Social contagion dominant:** Skip-level peer usage increases first-use odds by up to 216% when 25%+ of skip-level peers adopt. Demographic factors negligible vs social-behavioral predictors.

**Dose-response:** Peak +50% PR lift in weeks with 5 tool-use days.

**Implication:** Organizations should treat visible peer use as central to deployment — not just licensing. Token spend may be justified by throughput gains.

**Source:** https://arxiv.org/abs/2607.01418 | https://www.emergentmind.com/papers/2607.01418

### Claude Code — 326K+ GitHub Commits/Day, 10% of Public Commits (July 2026)

Claude Code now authors 326,000+ GitHub commits per day, representing approximately 10% of all public commits. Massive production adoption signal.

**Source:** https://www.morphllm.com/comparisons/codex-vs-claude-code

### Antigravity CLI v1.1.x — /codesearch, Async Startup, Copy-on-Select (July 10–16, 2026)

**New /codesearch command:** Interactive workspace code search — regex default, `-F/--literal` for exact match, `f:/file:` globs. Notable workflow addition for a terminal-native agent.

**UX:** Copy-on-select in no-flickering mode — ANSI-stripped selection copies to clipboard; virtual scrollbar hidden. Context-compaction boundary indicators added.

**Performance:** Skills load asynchronously — no more blocking on synchronous filesystem-heavy skill discovery. Customization loading (skills, rules, agents, hooks) optimized via consolidated directory walks and filesystem lookup caching.

**Bug fixes:** `subagent: false` agents no longer appear in available-subagents list. Headless (`-p/--print`) runs now honor persisted `settings.json` policies. `/btw` side-questions no longer leak as duplicate conversation entries.

**Source:** https://github.com/google-antigravity/antigravity-cli/releases

### Cline v4.0.9 — Install Size Cut 55% (~640MB → ~285MB), Optional Provider SDKs (July 16–17, 2026)

Claude Code and Codex provider SDKs are now optional peer dependencies loaded on demand. `npm i -g cline` drops from ~640MB to ~285MB — significant for CLI users and CI/CD. Kimi K3 added to ClinePass fallback. Runs retry once after expired OAuth refresh. Team runs: spawn tool hidden from teammates; errored teammate runs report as failed. Max output token handling fixed across gateway routing, OpenAI vendor, reasoning models.

**Source:** https://github.com/cline/cline/releases

### AI Agent Funding — $1.8B Across 12+ Deals, July 2026

AI agent startups raised $1.8B+ in July 2026. Developer tooling agents captured $420M (avg Series A $185M, up 40% QoQ). Enterprise automation agents took 58% of total capital. Sequoia led 4 deals including two $100M+ rounds. 42% of deals outside Silicon Valley (London, Tel Aviv, Paris). Shift from general copilots to specialized vertical agents driving investor confidence.

**Source:** https://aifunding.me/insights/ai-agent-funding-july-2026

## 2026-07-25

### Claude Code v2.1.219 — Opus 5 Default, Nested Subagents Deepen (July 24, 2026)

**Claude Opus 5 now default Opus model:** Added as `claude-opus-5` — 1M context, fast mode at $10/$50 per Mtok. The `/model` picker now highlights only the newest model's name. Opus 4.7 removed from fast mode; `/fast` applies to Opus 5 and Opus 4.8.

**Nested subagents default raised to depth 3:** Subagents can now spawn nested subagents up to depth 3 by default (was depth 1). Set `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1` to disable nesting.

**New `sandbox.network.strictAllowlist` setting:** Denies non-allowlisted hosts for sandboxed commands without prompting.

**New `DirectoryAdded` hook:** Fires after `/add-dir` or SDK `register_repo_root` registers a new working directory mid-session.

**MCP server errors in init event:** `mcp_server_errors` now listed in headless stream-json init event for `--mcp-config` entries skipped by validation.

**Dynamic workflows default to medium size:** Now default to "fewer than 15 agents" guideline.

**Nested subagent forwarding in stream-json:** Subagents spawned at depth-2+ now appear when `--forward-subagent-text` is set.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI — v0.146.0 Alpha Sprint: alpha.6, alpha.7, alpha.8 (July 24, 2026)

OpenAI pushed three more alpha releases (alpha.6, alpha.7, alpha.8) continuing the aggressive sprint. Total alpha batch now spans alpha.1 through alpha.8 plus alpha.3.1 — nine distinct pre-release tags in roughly five days. No stable release beyond v0.145.0 (July 21). The velocity suggests convergence toward a stable v0.146.0 release imminent.

**Source:** https://github.com/openai/codex/releases

### Cline v4.0.11 + Cline Desktop v0.0.4 — Opus 5, Workspace-Free Chat, Agentic Compaction (July 24, 2026)

**Cline v4.0.11 — Opus 5, Kimi K3, pricing fix:**
- Claude Opus 5 added across Anthropic, Claude Code, Bedrock, Vertex, Cline, and OpenRouter providers — including 1M context variants
- Moonshot Kimi K3 added with native tool calling enabled (fixing empty responses)
- Pricing corrected for Opus 1M context variants (was overstating costs for requests above 200k tokens)
- Host plugin version now included in telemetry events

**Cline Desktop v0.0.4 — first-run experience overhaul:**
- Workspace-free chat: start conversations without opening a project folder
- New first-run onboarding flow, drag-and-drop file attachments, inline image display
- One-time routine scheduling (not just recurring)
- Custom overlay title bar with in-app navigation
- Agent sessions now use agentic compaction by default
- Headless routines default to YOLO mode for unattended runs
- Fixed agent not finding gh and other CLI tools by resolving login shell's PATH

**Source:** https://github.com/cline/cline/releases

### Kilo v7.4.16 — Past Chats @mentions, Diff Previews, Tool Approval Explanations (July 24–25, 2026)

**Reference past chats inline with @:** Type @ in prompt to surface a searchable picker of previous sessions. Selecting attaches that session's transcript as context. Available in CLI TUI and VS Code extension.

**Searchable open-tabs switcher:** New switcher added to sidebar tab bar.

**Show why tools auto-approved:** Expanding a tool call now explains whether it ran automatically or after approval, and which rule allowed it.

**Expandable diff previews:** Edit, write, and apply-patch tool results now render as expandable diff previews with clickable file links, syntax highlighting, and change counts.

**Session performance improved for large transcripts.**

**JetBrains CLI pin updated to Kilo Core 7.4.15.**

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Crush v0.87.0 — MCP OAuth, Claude Channels, LSP/Bang Performance (July 21–24, 2026)

**MCP OAuth:** OAuth 2.1 support for HTTP MCP servers — required for some MCPs to function. Community contribution from @joestump, @joestump-agent, and @taciturnaxolotl.

**Claude Channels MCP extension:** Initial implementation supporting Claude Channels MCP extension — MCPs can now send notifications to Crush when certain events happen.

**MCP prompts restored:** MCP prompts were unintentionally disabled in a previous release and are now restored.

**LSP performance boost:** @TheJhyeFactor vastly improved CPU and memory usage on LSP servers in large repositories (PR #3370).

**Bang mode performance boost:** Same contributor improved output streaming performance (PR #3381 with benchmarks).

**System-wide config at /etc/crush/crush.json:** For NixOS and multi-user compatibility. Contribution from @Muttaqin86.

**Fixed Copilot + GPT-5.6:** All three GPT-5.6 models (Sol, Terra, Luna) now fixed when running via GitHub Copilot.

**Source:** https://github.com/charmbracelet/crush/releases

## 2026-07-26

### Claude Code v2.1.220 — Bug Fixes and Reliability Improvements (July 25, 2026)

Minor patch release: "Bug fixes and reliability improvements." Fourth release in four days (217→218→219→220), suggesting active stabilization of the v2.1.217+ feature set.

**Source:** https://code.claude.com/docs/en/changelog

### Codex CLI v0.146.0 Alpha Sprint — alpha.9, alpha.10, alpha.10.1 (July 25–26, 2026)

Three new alpha releases (alpha.9, alpha.10, alpha.10.1) in addition to the eight alphas (alpha.3 through alpha.8) from July 24. Total: twelve distinct pre-release tags in ~6 days. No stable release beyond v0.145.0 (July 21). Sprint convergence toward stable release imminent.

**Source:** https://github.com/openai/codex/releases

### Codex CLI — ChatGPT Voice + Multi-Folder Projects in ChatGPT Desktop App (26.715, July 23, 2026)

ChatGPT Voice (GPT-Live-powered) and multi-folder project support added to the ChatGPT desktop app (macOS/Windows), converging desktop experience with Codex capabilities.

**Source:** https://releasebot.io/updates/openai/codex

### Community: Non-Coding Claude Code Uses Gaining HN Traction (July 2026)

"I used Claude Code to get a second opinion on my MRI" — 566 HN points, 715 comments. Second-highest Claude Code story in the 30-day window, suggesting broad utility recognition outside developer workflows.

### Community: Steganography Crisis Sustained, Described as "Decisive Period" (July 2026)

The steganography allegation (2,445 HN points) continues to dominate. Community verdict: "powerful tool under a serious trust crisis." Next Anthropic response described as potentially "decisive in shaping whether this period is remembered as a stumble or a scandal."

**Source:** https://last30days.ai/research/claude-code

## 2026-07-27

### China Classifies Claude Code as Backdoor Risk; Alibaba Bans Tool (July 8–10, 2026)

China's MIIT/NVDB formally classified Claude Code v2.1.91–2.1.196 as a severe security backdoor risk on July 8. Alibaba banned the tool company-wide effective July 10, directing staff to internal tool Qoder. The hidden fingerprinting logic only activated on non-official API endpoints (corporate gateways, LiteLLM, API resellers); official api.anthropic.com users were unaffected. Anthropic removed the code in v2.1.197, calling it an "experiment." ~20 releases (April 2–June 29, 2026) carried the mechanism with no changelog disclosure.

**Source:** https://macgpu.com/en/blog/2026-0709-claude-code-backdoor-steganography-safety-guide.html

### arxiv: Microsoft Early-2026 Rollout Study — +24% PR Lift, Social Spread (July 1, 2026)

"Adoption and Impact of Command-Line AI Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI" (arXiv:2607.01418) studied tens of thousands of Microsoft engineers. Key findings: adopters merged 24% more PRs vs non-adopters, persisting over four months; first use spread through social networks; retention correlated with coding activity level, not demographics. At organizational scale, token spend reaches millions annually.

**Source:** https://arxiv.org/abs/2607.01418

### Norm Ai Joins Unicorn Club; $120M Series C (July 2026)

Norm Ai — legal and compliance AI agent company — closed $120M Series C at $1.2B valuation. Broader agentic funding landscape includes Bespoke Labs ($40M seed+Series A), ARC Intelligence (€4M seed, ERP AI layer), and geoSurge ($12M, brand gen-AI representation).

**Source:** https://aiagentsdirectory.com/news/ai-agents-news-brief-july-7-2026

## 2026-07-30

### Codex CLI v0.146.0 — Major Stable Release; macOS Signing, Plugin Manifests, Proxy Overhaul (July 29, 2026)

After nearly two weeks of alpha stabilization, Codex CLI v0.146.0 stable landed with a comprehensive feature set: session naming and pinning with `/new` and `/clear`, fork threads with paginated history and temporary forks, WebSocket remote Code Mode host connection, standalone web search for custom model providers, Agent Plugin manifests with workspace publishing and marketplace support for Amazon Bedrock and Claude Code, executor-provided skill discovery with secure resource reading, macOS code signing and notarization of bundled helpers, enterprise admin controls for in-app updates, and a proxy infrastructure overhaul covering route-aware HTTP client pool, redirect handling, CARGO_HTTP_CAINFO support, and proxy settings across auth, plugin downloads, MCP authorization, remote execution, WebSockets, and LM Studio. MCP reconnection hardened with per-auth-change refreshes and 30-minute tool catalog caching.

**Source:** https://github.com/openai/codex/releases | https://developers.openai.com/codex/changelog

### Codex Security CLI — New Product Line, Open Source (July 29, 2026)

OpenAI quietly launched a separate product: **Codex Security** — an open-source CLI and TypeScript SDK (`@openai/codex-security`, Apache-2.0) for finding, validating, and reviewing security vulnerabilities in owned/permitted codebases. Rebranded from "Aardvark" (research preview March 2026); CLI and SDK open-sourced July 13, 2026. Capabilities: interactive repository scanning, CI/CD integration, finding tracking across runs, fix verification, GitHub repository cloud setup. HN found the announcement before the official post.

**Source:** https://github.com/openai/codex-security | https://community.openai.com/t/introducing-the-open-source-codex-security-cli/1388319 | https://www.oflight.co.jp/en/columns/openai-codex-security-cli-guide-2026

### Kilo v7.4.17 — Agent Manager Terminal Tabs, Prompt Navigator Rail (July 29/30, 2026)

New stable with major Agent Manager UX: keyboard shortcut badges (⌘1-9 / Ctrl+1-9) on sidebar cards visible on modifier hold, multiple side-panel terminals per context with draggable tab strip, prompt navigator rail (thin tick rail on transcript left edge, hover to expand preview, click to jump), and terminal destination pick in VS Code terminal or embedded side panel. Patches include terminal destination persistence per panel, faster terminal open, checkpoint restore preserving conversations, headless basic-auth Console URLs, MCP OAuth error text escaping, Devstral model detection case handling, and upstream OpenCode v1.17.5→v1.17.9 sync (Cloudflare AI Gateway key, MCP schema strict validation, LM Studio headers).

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline v4.0.12 — Agentic Compaction Default, Connector Persistence, Free Models (July 29, 2026)

Agentic compaction (AI-powered context summarization) is now the default context-compaction strategy, replacing basic summarization. Fixes: agentic compaction no longer silently falls back to basic on OpenAI-compatible providers (summarizer had no base URL); manual compaction no longer budgets against 64k fallback; tool-heavy transcripts now find valid cut boundaries (assistant messages now valid cut points, fixing endless "auto-compaction skipped" loops). Connector sessions persist and auto-reconnect after daemon/hub restart. Settings (plan/act mode, tool auto-approve, compaction mode) now persisted globally with cross-process-safe writes. Provider list broadened via models.dev. CRLF line endings preserved on edits. Headless scheduled routines default to auto-approve.

**Source:** https://github.com/cline/cline/releases

### Cline Desktop v0.0.7 — System Tray, Session Pagination, Free Cline Models (July 29, 2026)

New desktop app release: system tray icon with app status and active session count; paginated session history (10 per page, older on demand); favorite sessions ordered by recent activity; subagent/teammate runs visible in app with status; free Cline models labeled "(free)" in picker with reset time display; China/international endpoint toggle fix for Qwen, Moonshot, Z AI, MiniMax (was silently routing regional users to wrong host); tool calls with string line numbers no longer fail and waste a round trip; TUI stack upgraded from opentui 0.1.102.

**Source:** https://github.com/cline/cline/releases

### OpenCode — Claude Adaptive Thinking, Mistral History, MiniMax M3 Fix (July 24–28, 2026)

OpenCode shipped multiple updates: Claude adaptive thinking handling across more response shapes; Mistral reasoning history preserved across turns; Mistral prompt caching stabilized with correct cache keys per SDK; MiniMax M3 thinking variant selection fixed; OpenAI Responses phase handling edge cases fixed that could break conversations; grep symlink paths preserved in search results.

**Source:** https://opencode.ai/changelog

### GitLost Attack — GitHub AI Agent Leaks Private Repositories (July 2026)

Highest-scoring security post in the July dataset (541 HN points): researchers demonstrated "GitLost" — a technique to trick GitHub's AI agent into leaking private repositories via诱饵代码 that exploits the agent's repository access permissions. Third distinct attack class demonstrated against AI coding agents in one month (joining Friendly Fire and HalluSquatting), forming a pattern of supply-chain and permission-escalation attacks that are demonstrated rather than theoretical.

**Source:** https://last30days.ai/research/ai-agents

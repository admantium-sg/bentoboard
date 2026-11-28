## 2026-06-25

### Claude Code — Three Major Releases, Security Hardening Sprint (v2.1.186/187/190)

Claude Code delivered three releases in four days (June 22–24), with security and credential hardening as the dominant theme:

**v2.1.190 (June 24):** Bug fixes and reliability improvements.

**v2.1.187 (June 23) — Security Sprint:**
- **`sandbox.credentials` setting** (NEW): blocks sandboxed commands from reading credential files and secret environment variables — critical enterprise feature.
- **Org-configured model restrictions**: Added to model picker, `--model`, `/model`, and `ANTHROPIC_MODEL` with "restricted by your organization's settings" message.
- **Mouse click support in fullscreen menus**: Permission prompts, `/model`, `/config` now accept mouse clicks.
- **Remote MCP tool call timeout**: Fixed 5-minute hang — now aborts with error (override with `CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT`).
- **Remote session speed**: Fixed ~2.7s startup delay from agent proxy CA system-trust install.
- **Background subagent permission prompts**: Now surface in main session instead of auto-denying.
- Multiple subagent depth fixes, worktree registration cleanup, and Korean/CJK mojibake fix.

**v2.1.186 (June 22) — Feature-packed:**
- **`claude mcp login/logout <name>`**: Authenticate MCP servers from CLI without interactive menu, `--no-browser` for SSH.
- **`teammateMode: "iterm2"`** with warning when auto mode can't find `it2` CLI.
- **`CLAUDE_CLIENT_PRESENCE_FILE`**: Suppress mobile push notifications while at machine.
- **`!` bash commands trigger auto-response**: Set `respondToBashCommands: false` to disable.
- **`/btw` arrow navigation**: ←/→ step through earlier answers.
- **`/install-github-app` workflow setup optional**.
- Memory compaction reminders, skill frontmatter kebab/snake/camelCase support, `/review <pr>` uses medium engine.

**Source:** https://code.claude.com/docs/en/changelog

### Security — Claude Code Sandbox Bypass Publicly Disclosed (v2.0.24–v2.1.89)

**Critical: Second Silent Sandbox Patch, Now Public.**

Security researcher Aonan Guan publicly disclosed the second Claude Code network sandbox bypass in June 2026:

- **First bypass (CVE-2025-66479)**: `allowedDomains: []` disabled proxy entirely — patched silently in v2.0.55 (Nov 26, 2025), same release that introduced the second flaw.
- **Second bypass (null-byte injection)**: SOCKS5 proxy's JavaScript `endsWith()` check allowed `attacker-host.com\x00.google.com` — JavaScript treats `\x00` as UTF-16, but libc truncates at null byte, resolving `attacker-host.com`. Blocked hosts reachable via allowlist.
- **Patched in v2.1.90 (April 1, 2026)**: `isValidHost()` wrapper rejects `\x00`, `%`, CRLF, non-DNS chars. v2.1.90 release notes: NO mention of security fix.
- **Vulnerable window**: Oct 20, 2025 – Apr 1, 2026 (~130 releases, v2.0.24 through v2.1.89).
- **No CVE published**: HackerOne report closed as duplicate, Anthropic "not yet decided whether a CVE will be published."
- **Three additional CVEs (CVE-2026-35020/35021/35022)**: Phoenix Security discovered shell-injection-to-exfiltration chain reportedly still exploitable on v2.1.91 (April 3, 2026).

Community impact: Enterprise users using sandbox allowlists should audit and rotate credentials from the vulnerable window. Pattern of silent security fixes drawing criticism.

**Sources:** https://cyberpress.org/claude-code-sandbox-flaw/ | https://www.isecurify.co/claude-codes-network-sandbox-vulnerability-exposes-user-credentials-and-source-code/ | https://phoenix.security/claude-code-leak-to-vulnerability-three-cves-in-claude-code-cli-and-the-chain-that-connects-them/

### OpenAI Codex CLI — v0.143.0 Alpha Sprint (12 Alphas in 72 Hours)

While v0.142.0 stable never materialized, OpenAI launched v0.143.0 alpha:

- **12 alpha releases in 72 hours**: alpha.4 through alpha.15 (June 23–24).
- **alpha.15**: June 24, 19:41 UTC — highest velocity alpha sprint yet.
- v0.142.0 stable appears to have been skipped or subsumed into v0.143.0.
- No release notes yet for v0.143.0 features — likely a major release in the pipeline.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.3.53 + Pre-release — Slash/File Mention Completion, WebSocket Transport

**v7.3.53 (June 22):** Bounded text-file reads, Unicode truncation fixes, updated dependencies.

**Pre-release (June 24):**
- **Slash command and file mention completion in prompt** — type `/` for commands, `@` for files with full completion.
- **Clickable `@file` mentions in prompt** — mouse interaction for file references.
- **Prompt undo/redo and history navigation** — restores focus after navigating history.
- **Updated bundled CLI to OpenCode 1.15.13**.
- **Experimental WebSocket transport** for OpenAI responses (`KILO_EXPERIMENTAL_WEBSOCKETS=true`).
- **Workspace management dialog** in TUI.

**v7.3.52 (June 22):** Full OpenCode v1.15.9–v1.15.13 upstream merge: headerTimeout config, background agent polling-free updates, ACP acp-next integrations, custom WebSocket base URLs, Opus 4.7+ adaptive reasoning keeps summarized thinking.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline CLI v3.0.28–29 — ClinePass, Parallel Tool Calls

**v3.0.29 (June 20):** Costs hidden for Cline free models; reverted v3.0.28 model-name display change.

**v3.0.28 (June 19):** ClinePass onboarding with selectable models; hub primitive catalogs; refreshed dashboard with customizations breakout; auto-approve toggles apply immediately; feature flags resolve by user ID; large tool results capped to context budget; parallel tool-call guidance.

**Source:** https://github.com/cline/cline/releases

### Crush v0.79.1 — Bang Mode Polish

v0.79.1 (June 20): Bang Mode activates on `!` preceded by whitespace; engages on paste; syncs with external editor; included in history. Nightly builds continued through June 24 with sigstore/cosign verification.

**Source:** https://github.com/charmbracelet/crush/releases

## 2026-06-22

### OpenAI Codex CLI — 7 Alpha Releases in 72 Hours, v0.142.0 Stable Imminent

Codex CLI's v0.142.0 alpha cycle hit maximum velocity: **7 alpha releases (.4 through .10) shipped between June 19–21**, the most concentrated alpha sprint since the v0.140.0 series. Key additions in the alpha series:

- **alpha.4–.7 (June 19–20):** Continued refinement of remote executor architecture, stdio MCP server integration per thread, and memory/latency optimizations for large tool-heavy sessions
- **alpha.8 (June 21, 03:53 UTC):** Performance and stability fixes
- **alpha.9 (June 21, 06:42 UTC):** Further stabilization
- **alpha.10 (June 21, 20:55 UTC):** Final pre-stable polish — targeting v0.142.0 stable imminent (24–48h)

The v0.142.0 stable changelog (from alpha.4 branch) shows: encrypted Noise relay channels for remote executors, cross-platform working directory preservation, per-thread stdio MCP servers, reduced latency/memory via caching optimizations, and TLS P-521 certificate support for enterprise proxies.

**Source:** https://github.com/openai/codex/releases

### Claude Code — Quietest Week Since April (v2.1.185, June 20)

**No new releases** between June 20–22. After 10+ releases in a single week during mid-June's Fable 5 launch and safety sprint, Claude Code has now gone **3+ days without a release** — the longest quiet stretch since April. v2.1.185 (stream-stall UX tweak) remains latest. Community speculation: team preparing v2.2.0 subagent team improvements, or investigating Fable 5 regressions in complex multi-file sessions.

**Source:** https://code.claude.com/docs/en/changelog

### Industry — Enterprise Adoption Confirmation

Anthropic's June 2026 enterprise survey (500+ technical leaders): **80% report measurable ROI** from AI agent deployments. Codepick.dev roadmap confirms tools are graduating from autocomplete experiments to engineered agent workflows — the CLI layer is where serious automation is happening.

**Sources:** https://claude.com/blog/how-enterprises-are-building-ai-agents-in-2026 | https://codepick.dev/en/guides/ai-coding-agents-2026-roadmap/

## 2026-06-20

### Claude Code v2.1.177–178 (June 16–19, 2026) — Auto Mode Safety, Config UX, Subagent Polish

Claude Code delivered two releases in the past week:

**v2.1.178 (June 19):**
- **Improved auto mode safety**: Destructive git commands (git reset --hard, git checkout -- ., git clean -fd, git stash drop) are now blocked when you didn't ask to discard local work. git commit --amend blocked unless the commit was made by the agent in this session. terraform/pulumi/cdk destroy blocked unless you specifically asked for the stack.
- **Model deprecation warning**: Added warning when requested model is deprecated or auto-updated to a newer model — now also covers models set in agent frontmatter.
- **/config --help**: Lists all available shorthand keys for /config key=value syntax.
- **/config toggle behavior**: Enter and Space both change selected setting; Esc saves and closes.
- **Removed startup "setup issues" line** under the logo.
- **Subagent panel improvements**: Idle subagents auto-hide after 30s; caps at 5 rows with scroll hints.
- **Streaming long paragraphs**: Text appears line-by-line instead of waiting for first line break.
- **Auto-retry on connection drops**: API drops mid-thinking now auto-retry instead of "Connection closed while thinking".

**v2.1.177 (June 16–17):**
- **/config key=value syntax**: Set any setting from the prompt (e.g. /config thinking=false) — works in interactive, -p, and Remote Control.
- **sandbox.allowAppleEvents opt-in**: Lets sandboxed commands send Apple Events on macOS.
- **CLAUDE_CLIENT_PRESENCE_FILE**: Point at a marker file to suppress mobile push notifications while at the machine.
- **Upgraded bundled Bun runtime to 1.4**.
- **Fullscreen mode URL opening**: Now requires Cmd+click (macOS) / Ctrl+click, matching native terminal behavior.
- **MCP OAuth browser page**: Now matches Claude Code's visual style and auto-closes on success.
- **Prompt caching fix**: Fixed not reading on custom ANTHROPIC_BASE_URL and on Foundry due to per-request attestation token changing every turn.
- **AWS credential caching**: awsCredentialExport credentials now cached until their Expiration timestamp instead of fixed 1 hour.
- Multiple tmux teammate fixes, subagent depth limit enforcement (5-level max), and background task lifecycle fixes.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.140.0 Stable (June 15, 2026) — Usage Tracking, Session Deletion, Claude Import

After 19 alphas, Codex CLI v0.140.0 stable landed June 15 with six practitioner-facing features:

- **/usage command**: Tracks token spend directly in the TUI — daily, weekly, and cumulative views with per-model breakdown. Queries OpenAI billing API directly, no third-party log parsers needed.
- **Permanent session deletion**: `codex delete <thread_id>` and `/delete` in TUI comprehensively remove sessions from local JSONL, session index, and remote OpenAI servers.
- **Selective Claude Code import (/import)**: Scans 8 categories (user-level config, project config, skills/MCP/hooks/recent sessions) and presents a checkbox picker to selectively migrate — maps Claude Code artefacts to Codex equivalents (CLAUDE.md → AGENTS.md sections, hooks → config.toml [[hooks]], etc.).
- **Encrypted credentials**: Store API credentials in OS keyring instead of plaintext JSON.
- **Amazon Bedrock authentication**: Supports managed API keys for Bedrock.
- **@ picker improvements**: Single menu for files, plugins, and skills.

**Source:** https://codex.danielvaughan.com/2026/06/16/codex-cli-v0140-stable-release-guide-usage-tracking-session-deletion-claude-import-encrypted-credentials/

### Crush v0.78.0–0.79.0 (June 19, 2026) — Bang Mode, Provider Fixes

Crush shipped two releases in one day (June 19):

**v0.78.0 — Bang Mode:**
- **Bang Mode (!)**: Run Bash commands directly within a Crush session without leaving. Type `!` to enter, backspace to exit. The model can see the command output and discuss it with you — streaming results in real-time.
- **Session name generation fixed** for sessions started with a command.

**v0.79.0 — Bang Mode Polish + Provider Fixes:**
- Font color tweaks for legibility in Bang Mode.
- Long-running commands show immediately and stream output as they run.
- **Fantasy (LLM library) fixes**: Tool-not-found error now lists available tools (helps models like Kimi that sometimes call non-existent tools). Fixes for GLM family via Fireworks, GPT models via Azure, Gemini via VertexAI, and local models.
- Sigstore/cosign verification continues for release artifacts.

**Source:** https://github.com/charmbracelet/crush/releases

### Kilo v7.3.48–50 (June 16–19, 2026) — Roo Code Migration, Custom Provider Deep Support

Kilo continued its rapid release cadence with three releases:

**v7.3.50 (June 19):**
- **BYOK badge for Kilo Gateway models**: Shows which models can use an enabled personal or organization provider key.
- Chat output stays updating after reverting and resubmitting a prompt.
- Widened chat readable lane from 88ch to 98ch.
- Speed improvements to Agent Manager worktree hover cards.

**v7.3.49 (June 18):**
- **"Import Sessions from Roo Code" button** in About settings — discovers and imports conversation history from existing Roo Code installation, reusing the migration wizard.

**v7.3.48 (June 16–17):**
- **Custom provider API support expanded**: Multiple provider APIs, adaptive thinking, split reasoning, and output effort variants for custom providers.
- Support for VS Code switch links that select a Kilo model, agent, or both.
- **Attention sounds** opt-in: Plays sounds when sessions finish, error, or need input.
- Cmd/Ctrl+Shift+R opens the selected worktree's pull request.
- Image diff viewer improvements and VS Code image preview integration.

**Source:** https://github.com/Kilo-Org/kilocode/releases

---

## 2026-06-15

### Crush v0.77.0 (June 14, 2026) — User-Level Context, Named Hooks, Socket Fixes

Crush's first stable release since v0.76.0 (June 5) brings several user-experience improvements:

- **User-level context files**: Set `~/.config/AGENTS.md` or `~/.config/crush/CRUSH.md` and Crush will reference it on session start — just like project-level context files, but at the user level. Enables personal defaults without a per-project file.
- **Better commit messages and PR descriptions**: Improved system prompt so LLMs author clearer, more human-readable commit messages and PR descriptions instead of overly technical ones.
- **Named hooks**: Hooks can now have a name field, making them easier to identify in the CLI (contribution by @BrunoKrugel).
- **Client-server socket fixes**: Stale sockets now cleaned up on startup; Unix sockets now live in `$XDG_RUNTIME_DIR` on Linux and `$TMPDIR` on macOS instead of `/tmp`. Client-server mode getting closer to prime time.
- **Dependency fixes**: Bumped Lip Gloss to v2.0.4 and Glamour to v2.0.1 to fix crashes identified by contributor @taciturnaxolotl.

**Source:** https://github.com/charmbracelet/crush/releases

### OpenAI Codex CLI v0.140.0-alpha.19 (June 14, 2026) — 19 Alphas, Stable Still Imminent

One more alpha dropped June 14 at 02:03 UTC, bringing the v0.140.0 series to 19 alphas. The extended alpha cycle continues — community speculation points to multi-agent v2 concurrency controls and agent residency LRU caching as the stabilization blockers. Stable release still appears imminent given the release velocity.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.3.43–44 (June 12, 2026) — Embedded LanceDB, Autonomy Presets, MCP Boot

**v7.3.44:** Agent autonomy preset during VS Code onboarding; Kilo Gateway catalog models from VS Code deep links; Agent Manager terminals use editor font settings; Escape stops Agent Manager prompts while sessions are still starting; Review comments render as interactive message cards.

**v7.3.43:** Embedded LanceDB as default vector store (no Qdrant needed); MCP servers start during worktree session initialization; Large session forks faster (retains final task outcomes); Fork Session button added to completed Agent Manager sessions; Virtualized transcript rendering for large sessions.

**Source:** https://github.com/Kilo-Org/kilocode/releases

---

## 2026-14

### Claude Code v2.1.176 (June 12, 2026) — Session Localization, Remote Control Fixes, Hook Polish

Claude Code's third release in 24 hours brings session localization, credential caching improvements, and extensive Remote Control hardening:

- **Session titles in conversation language**: Titles are now generated in the language of your conversation. Set the `language` setting to pin a specific language.
- **`footerLinksRegexes` setting**: New setting for regex-matched link badges in the footer row, configurable via user or managed settings.
- **Bedrock credential caching improvement**: Credentials from `awsCredentialExport` are now cached until their `Expiration` timestamp instead of a fixed 1 hour — reduces re-authentication frequency for enterprise users.
- **`availableModels` enforcement hardening**: Alias model picks can no longer be redirected to a blocked model via `ANTHROPIC_DEFAULT_*_MODEL` environment variables, and `/fast` now refuses to toggle when it would switch to a model outside the allowlist.
- **Auto mode Fable 5 fallback**: Fixed auto mode failing on Fable 5 for organizations without Opus 4.8 enabled — classifier now falls back to the best available Opus model.
- **Hook path pattern matching fixed**: Documented patterns like `Edit(src/**)`, `Read(~/.ssh/**)`, and `Read(.env)` now match correctly.
- **Linux sandbox symlink fix**: Fixed sandbox failing to start when `.claude/settings.json` is a symlink with an absolute target.
- **tmux clipboard fix**: Fixed `/copy` and mouse-selection copy not reaching the system clipboard inside tmux over SSH; tmux paste buffer now works on versions older than 3.2.
- **Remote Control hardening**: Multiple fixes — session no longer silently switches model when connecting from web/mobile; disconnect notifications show human-readable reasons; sessions properly disconnect when signing in to a different account.
- **Background session fixes**: `/cd` and worktree moves now correctly report the new directory's git branch; `claude agents` search finds PRs opened during scheduled wakeups; background sessions show clearer guidance when auto-update blocks submission.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.140.0-alpha.17–18 (June 13, 2026) — 18 Alphas, Stable Still Imminent

Two more alphas dropped June 13 (alpha.17 at 01:20 UTC, alpha.18 at 17:30 UTC), bringing the total to 18 alphas in the v0.140.0 series. The extended alpha cycle continues — community speculation points to multi-agent v2 concurrency controls and agent residency LRU caching as the stabilization blockers. Stable release still appears imminent given the release velocity.


**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.89.0–2 / cli-v3.0.22–24 (June 9–11, 2026) — Fable 5, SDK Maturation

Cline shipped 5 releases across two version tracks in 48 hours:

**cli-v3.0.24 (June 11):**
- Plugin commands can now submit prompts to the agent
- API base URL override support
- Device authentication verification URL opens automatically
- Enforced single shared Cline Hub (stale hubs respawned after upgrade)
- Suppressed flickering console windows on Windows
- Fixed truncation of structured tool operation result strings
- Stopped echoing full command text in run_commands tool results

**v3.89.2 (June 11):** Fixed Anthropic provider on VS Code 1.123+ by upgrading bundled Anthropic SDK for Node 24 runtime compatibility; Updated Vertex AI provider SDK

**v3.89.1 (June 11):** Restored Anthropic provider on VS Code 1.123+ (Node 24 broke bundled SDK); Handle DeepSeek V4 reasoning format

**cli-v3.0.23 (June 10):** Fixed Vertex AI GCP settings configuration; Fixed Azure Foundry API version; Configured agents can now be used as subagent tools; Centralized OAuth management into SDK; Fixed error caused by disabled reasoning on Fable 5

**v3.89.0 / cli-v3.0.22 (June 9):** Claude Fable 5 model support added same-day; Fixed MiniMax M3 thinking controls routing across gateways

**Source:** https://github.com/cline/cline/releases

### Crush — Nightly Build with Sigstore Verification (June 13, 2026)

Crush published another nightly build on June 13, continuing the sigstore/cosign artifact verification flow started June 12. Last stable remains v0.76.0 (June 5). The client-server architecture continues to mature with multi-client prompt cancellation handling.

**Source:** https://github.com/charmbracelet/crush/releases

---

## 2026-06-12

### Claude Code v2.1.174–175 (June 12, 2026) — Two Releases, GovCloud Fix, Model Picker Overhaul

Claude Code shipped two releases in a single day:

**v2.1.175:**
- **`enforceAvailableModels` managed setting**: When enabled, the `availableModels` allowlist also constrains the Default model — a Default that would resolve to a disallowed model falls back to the first allowed model, and user/project settings can no longer widen a managed `availableModels` list. Enterprise governance feature.

**v2.1.174:**
- **`wheelScrollAccelerationEnabled` setting**: Disable mouse-wheel scroll acceleration in fullscreen mode
- **Model picker fixes**: Fixed `/model` picker hiding the model family that Default resolves to; fixed hardcoded Sonnet version label when `ANTHROPIC_DEFAULT_SONNET_MODEL` pins a different Sonnet; fixed `availableModels` restrictions not applied to subagent model overrides
- **Bedrock GovCloud fix**: Fixed GovCloud regions (`us-gov-*`) deriving wrong inference profile prefix (`global` instead of `us-gov`), causing 400 errors on derived model IDs
- **Background session env fix**: Fixed background sessions inheriting another session's `ANTHROPIC_*` provider env from the shell that started the background daemon
- **CPU reduction**: Fixed 1-2 second pause when exiting after shell command interrupted/killed on macOS and Linux; reduced idle CPU during `/goal` status chip rendering
- **Skill hot-reload**: Only changed skills re-announced (not entire skill listing)
- **VSCode usage attribution**: Per-skill/agent/plugin/MCP breakdown in Account & usage dialog over last 24h or 7d

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.140.0-alpha.9–16 (June 11–12, 2026) — 16 Alphas, Stable Imminent

The v0.140.0 alpha series continues at high velocity. 8 more alphas (alpha.9 through alpha.16) released between June 11 midday and June 12 evening UTC — 16 total alphas in the series. Active PR themes include multi-agent v2 concurrency controls and agent residency LRU caching. Stable release appears imminent.

**Source:** https://github.com/openai/codex/releases

### Kilo v7.3.43–44 Pre-release (June 12, 2026) — Embedded LanceDB, Autonomy Presets

**v7.3.44:**
- **Agent autonomy preset during VS Code onboarding**: Users choose autonomy level during Kilo setup in VS Code
- **Kilo Gateway catalog models from VS Code deep links**
- **Agent Manager terminals use editor font settings**: Respects `terminal.integrated.fontFamily` and `terminal.integrated.fontSize` (including Nerd Font glyphs)
- **Escape stops Agent Manager prompts** while sessions are still starting
- **Review comments render as interactive message cards**

**v7.3.43:**
- **Embedded LanceDB as default vector store**: Semantic search works without separate Qdrant server — major simplification for self-hosted deployments. Existing Qdrant users and Intel Mac users can opt back in via `indexing.vectorStore`
- **MCP servers start during worktree session initialization**: Reduces delay before first response
- **Large session forks faster**: Retains final task outcomes instead of duplicating resumable subagent histories
- **Fork Session button** added to completed Agent Manager sessions

**Source:** https://github.com/Kilo-Org/kilocode/releases


### Factory AI Droid v0.144.0–144.1 (June 9, 2026) — Safer Destructive Commands, tmux, Context Fallback

- **Context summarization fallback**: When model declines to summarize conversation, Droid falls back gracefully instead of retrying repeatedly
- **Session file suggestions**: New session page suggests relevant files as you get started
- **Safer command risk handling**: Commands that could destroy working tree treated as high risk
- **tmux key support**: Improved keyboard handling when running inside tmux
- **MCP reliability**: Improved reliability of MCP authentication and connectors

**Source:** https://docs.factory.ai/changelog/release-notes

### Crush — Nightly Build with Sigstore Verification (June 12, 2026)

Crush published signed nightly release with cosign/sigstore artifact verification — moving toward more secure release verification.

**Source:** https://github.com/charmbracelet/crush/releases


## 2026-06-10


### Claude Code v2.1.170 (June 9, 2026) — Claude Fable 5 Lands

**MAJOR: Claude Fable 5 — First Public Mythos-Class Model**

Anthropic's most significant model release since Claude 4 Opus. Fable 5 is a Mythos-class model made safe for general use, with capabilities exceeding any model Anthropic has ever released publicly. Ships as a Claude Code update, available immediately to Pro/Enterprise subscribers. Cost is 2× the previous flagship rate. Key context:

- **Mythos** was unveiled in April 2026 as Anthropic's unreleased internal model class — the March 2026 npm source leak revealed references to "Mythos" as a hidden feature flag
- Fable 5 has guardrails blocking high-risk areas (cybersecurity, biology) while preserving Mythos-class capabilities
- The March source leak (512K lines, 44 feature flags, "Mythos" references) predicted this release accurately
- Claude Code v2.1.170 is required to access Fable 5

**Bug fix:** Sessions launched from VS Code integrated terminal (or any shell inheriting Claude Code env vars) were not saving transcripts or appearing in `--resume`. Now fixed.

**Source:** https://code.claude.com/docs/en/changelog | https://www.anthropic.com/news/claude-fable-5-mythos-5

### OpenAI Codex CLI v0.139.0-alpha (June 9, 2026) — Web Search in Code Mode, MCP Schema Improvements <!-- FACT_CHECK: VERIFIED -->

After the v0.138.0 stable release on June 8, alpha development continues at pace:

- **Web search in code mode**: Code mode can now call standalone web search directly, including from nested JavaScript tool calls, and receive plaintext search results — meaningful for autonomous research tasks
- **MCP schema preservation**: Tool and connector input schemas now preserve `oneOf` and `allOf`, and large schemas keep more shallow structure when compacted — improves compatibility with richer MCP tools
- **`codex doctor` enhancement**: Now includes editor and pager environment details in local report while redacting raw values in JSON output
- **Plugin marketplace improvements**: `codex plugin marketplace list --json` now includes each marketplace source; plugin lists can return from cached remote catalog before refreshing in background
- **Bug fixes**: `codex resume --last` and `codex fork --last` now treat trailing argument as initial prompt (not session ID); MCP startup warnings from subagents stay in owning thread; image edits use exact referenced file paths; bare URLs with `~` in path fully linkified in TUI; thread resets no longer drop cloud-managed requirements/feature flags
- **Infrastructure**: V8 toolchain updated to `rusty_v8 149.2.0`; release builds restore separate symbol archives for crash symbolication

**Source:** https://github.com/openai/codex/releases

### Kilo v7.3.40 (June 9, 2026) — Terminal-Bench Scores, Session Sync, Streaming Performance <!-- FACT_CHECK: VERIFIED -->

Latest pre-release continues the stability and UX sprint:

- **Terminal-Bench scoring**: Show Terminal-Bench completion scores and per-attempt costs in supported model details — users can now see cost efficiency data directly in the UI
- **Cloud session filesystem sync**: Restored cloud session filesystem changes from synced session diffs when importing sessions, including inherited changes across imported session forks
- **Streaming performance**: Speed up long streamed responses by preserving completed Markdown blocks and updating only the active tail — significant UX improvement for long responses
- **Concurrent session responsiveness**: Keep Agent Manager streaming responsive when multiple sessions run concurrently
- **Cursor/control polish**: Show pointer cursor for clickable controls and links in Kilo webviews
- **Mercury autocomplete labels**: Rename Mercury autocomplete model labels to distinguish FIM and Next Edit modes
- **Permission routing fix**: Route Agent Manager permission approvals to the worktree that created the request
- **Agent-manager model sync**: Fix model sync on config change

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Cline CLI v3.0.22 / v3.89.0 (June 9, 2026) — Claude Fable 5 Support <!-- FACT_CHECK: VERIFIED -->

Same-day response to Anthropic's Fable 5 launch:

- **Claude Fable 5 support**: Added immediately on June 9
- **MiniMax M3 thinking controls**: Fixed routing across gateways

Earlier June 9 releases (v3.0.21):
- **Global auto-update setting**: Control automatic updates on CLI startup
- **Cline credits refill link**: Direct link to purchase credits
- **Inline ask-question scrolling**: Fixed
- **Connector thread session routing**: Fixed stale hub session handling
- **Vertex AI ADC with tool use**: Added support for Vertex AI Application Default Credentials with tool calling
- **Empty message content replay**: Fixed for Bedrock

**Source:** https://github.com/cline/cline/releases

## 2026-06-09

### Claude Code v2.1.169 (June 8, 2026) — Reliability Sprint Continues

Another major reliability release following the five-release sprint from June 3–7:

- **`--safe-mode` flag**: New `CLAUDE_CODE_SAFE_MODE` environment variable starts Claude Code with all customizations (CLAUDE.md, plugins, skills, hooks, MCP servers) disabled — critical for isolating whether issues are self-hosted or external
- **`/cd` command**: Move a session to a new working directory without breaking the prompt cache mid-session — a long-requested workflow improvement
- **`disableBundledSkills` setting**: Hide bundled skills, workflows, and built-in slash commands from the model
- **Enterprise MCP enforcement fix**: Managed MCP policies (`allowedMcpServers`/`deniedMcpServers`) were not being enforced on reconnect, IDE-typed configs, `--mcp-config` servers during first session after install, or before remote settings loaded — now fixed
- **macOS UI stall fix**: Eliminated a ~30-50ms UI stall at the start of each turn for macOS users logged in with claude.ai credentials
- **Windows slash-command scan fix**: `claude -p` was slow or appeared to hang on Windows while waiting for the slash-command/skill scan — regression in 2.1.161 now fixed
- **Remote session reconnection**: Remote Control no longer gets stuck on "reconnecting" after resuming a session when an OAuth token refresh happened simultaneously
- **Background agent `env` fix**: Background agents now preserve project-level settings `env` values (e.g. `ANTHROPIC_MODEL`) when dispatched onto a pre-warmed worker
- **CPU reduction**: Reduced CPU usage while responses stream and during spinner animations
- **Remote-managed settings hardening**: Invalid entries now apply remaining valid policies and surface the validation error, instead of silently dropping the whole payload
- **TUI: `/workflows` opens immediately** even while a turn is in progress

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.138.0 Stable (June 8, 2026) — Desktop Handoff, Plugin Automation

After a week of alpha releases, Codex CLI v0.138.0 stable lands with significant features:

- **`/app` desktop handoff**: The `/app` command can now hand off the current CLI thread into Codex Desktop on macOS and native Windows; Windows workspace launches can open directly into Desktop
- **Local image paths exposed to model**: Image attachments and standalone image generations now expose their saved file paths to the model, making follow-up edits and file references more reliable
- **Reasoning effort flexibility**: TUI adds fallback shortcuts for terminals that miss Alt bindings; model-defined effort levels now flow through in the advertised order
- **App-server token usage**: App-server integrations can now read account token usage; Codex auth supports v2 personal access tokens
- **Plugin automation**: `add/remove` and `marketplace` commands support `--json`; plugin list JSON includes marketplace source; plugin detail exposes default prompts, remote MCP servers, and unavailable app templates
- **Goal workflow predictability**: Multiline paste in `/goal edit` no longer submits early; idle auto-turns stay out of Plan mode; goals stop auto-continuing after terminal turn failures
- **Forked thread titles**: Forked threads now keep user-renamed titles instead of falling back to the original first-prompt name
- **TUI streaming fix**: Extra blank space removed while streaming; cancelled prompts reopen with cursor at end for natural editing
- **Startup resilience**: Support for `/usr/bin/bash`, shorter Linux proxy socket paths, pre-refresh of expired OAuth-backed MCP credentials
- **Performance**: Large MCP/Ollama streams and long message histories process much faster with optimized byte scanning

**Source:** https://github.com/openai/codex/releases

### Kilo — JetBrains Stability Push, Chat UX (June 3–6, 2026)

Continued pre-release focus on JetBrains IDE stability and chat UX:
- **JetBrains memory management**: Dispose hidden session UIs after configurable timeout — reduces memory footprint
- **JetBrains session stability**: Controller subscription state kept on UI thread — prevents session drops
- **JetBrains markdown code blocks**: Now render as multiline boxed editors that expand to full height
- **JetBrains chat streaming**: Retains existing markdown and code block views while responses stream
- **Chat auto-scroll**: Stays active when interacting with controls; pinned to latest output when visible area resizes without overriding intentional scroll
- **Sidebar stability**: Explorer and other primary sidebar views stay open when VS Code reloads while Kilo Code is hidden
- **macOS Apple Silicon fix**: CLI no longer fails to start due to malformed bundled exports
- **v7.3.28 (June 3)**: "No notable changes" — point release in stable channel

**Source:** https://github.com/Kilo-Org/kilocode/releases


### Factory AI Droid v0.140.0–142.0 (June 3–5, 2026) — Incident Response, GitLab Integration

- **v0.142.0 (June 5):** GitLab code review setup via GitLab CI Component; duplicate chat messages fixed
- **v0.141.0 (June 4):** Large command output handling improved; input hint placement fixed; Droid no longer looks for guideline files in parent directories outside git repos
- **v0.140.1 (June 4):** Maintenance and stability release
- **v0.140.0 (June 3):** Claude Opus 4.8 support; Gemini 3.5 Flash support; MCP tool search (on-demand loading); Incident response (Slack alert investigation)

**Source:** https://docs.factory.ai/changelog/release-notes

### Crush v0.76.0 (June 5, 2026) — Permissions UX, Client-Server Maturation

- **Permissions UX fix**: Crush ignores key presses up to 350ms after permission dialog appears — prevents accidental accepts/denials when typing
- **`crush models` fix**: Now shows all providers, not just configured ones
- **Client-server architecture**: Multiple fixes for background prompts, queued prompt cancellation races, and server prompt independence from client connections
- **Skill discovery in monorepos**: Discovers skills from git root

**Source:** https://github.com/charmbracelet/crush/releases

## 2026-06-08

### Claude Code v2.1.161 (June 2, 2026) — Parallel Tool Calls, Linux Clipboard, OTEL Metrics

Major security and reliability release:
- **Parallel tool calls**: A failed Bash command no longer cancels other calls in the same batch — each tool returns its own result independently. Significant for orchestrating multiple agents or parallel operations.
- **OTEL metrics**: `OTEL_RESOURCE_ATTRIBUTES` values now included as labels on metric datapoints for custom dimensions (team, repo, etc.)
- **Fullscreen clipboard (Linux)**: Uses `wl-copy`/`xclip`/`xsel` when available, copies to both clipboard and PRIMARY selection for middle-click paste
- `claude agents` rows now show `done/total` before detail when work is fanned out; peek shows longest-running item
- Bug fixes: `/mcp` collapses unused claude.ai connectors; `/effort` dialog honors "Reduce motion"; background subagent output no longer corrupts `claude -p` stdout; Windows hooks using explicit bash paths fixed; OpenTelemetry events no longer dropped before initialization completes

**Source:** https://code.claude.com/docs/en/changelog

### Claude Code v2.1.160 (June 2, 2026) — Security Hardening for Startup Files

Same day as v2.1.161 — rapid security-focused release:
- **Shell startup file protection**: Added prompt before writing to `.zshenv`, `.zlogin`, `.bash_login`, and `~/.config/git/` — prevents unintended command execution
- **`acceptEdits` mode hardening**: Now prompts before writing build-tool config files that grant code execution (`.npmrc`, `.yarnrc*`, `bunfig.toml`, `.bazelrc`, `.pre-commit-config.yaml`, `.devcontainer/`)
- **Edit after grep**: Single-file `grep`/`egrep`/`fgrep` commands now satisfy the read-before-edit check
- **Windows clipboard fix**: Copy-on-select now uses PowerShell interop instead of OSC 52 (MobaXterm doesn't support OSC 52)
- Background session fixes: restored sessions no longer drop chat history or re-run prompts; `claude --bg` cold-start robustness improved
- **Voice mode**: Fixed connection failures when project directory or branch contains non-ASCII or special characters
- Removed JetBrains plugin install suggestion from startup; removed `CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE` env var

**Source:** https://code.claude.com/docs/en/changelog

### Crush v0.75.0 (June 2, 2026) — OAuth Fix, Startup Bug Fix

Maintenance release:
- **Hyper OAuth fix**: Fixed bug where Hyper OAuth dialog could appear mid-session when multiple Crush sessions attempted to refresh access token simultaneously
- **Rare startup bug**: Fixed edge case where Crush couldn't start if it couldn't find a default model for a provider (model was removed)
- 401 retry logic centralized across agent runs; reauth notification improvements
- **Alibaba migration prep**: `feat: prepare alibaba migration to /messages` in changelog

**Source:** https://github.com/charmbracelet/crush/releases

### Factory AI Droid v0.138.0 (June 1, 2026) — Interactive MCP Management, Mermaid Export

Major feature release:
- **Interactive MCP management**: Add, remove, and list MCP servers interactively
- **MCP credential variables**: MCP server configs can now expand credential variables at runtime
- **Configurable MCP call timeout**: Set custom timeout for MCP tool calls
- **`mcp off` shortcut**: Quickly disable MCP servers
- **MCP servers for custom droids**: Choose which MCP servers are available to custom droids
- **Per-server MCP risk**: Configure command risk levels for each MCP server
- **Mermaid export**: Export Mermaid diagrams from chat (app)
- Model highlights at top of `/models`; MCP embedded resources surfaced in chat; composer loading state; session archiving unified across app and desktop

**Source:** https://docs.factory.ai/changelog/release-notes

---

## 2026-06-08

### Claude Code v2.1.163–168 (June 4–6, 2026) — Reliability Sprint

Five releases in three days — rapid reliability and enterprise hardening:

- **v2.1.166 (June 6):** `fallbackModel` setting — configure up to three fallback models tried in order when primary is overloaded/unavailable; `--fallback-model` now applies to interactive sessions. Claude Code retries a turn once on fallback when API rejects a non-retryable error. Cross-session messaging hardened: messages relayed via `SendMessage` from other Claude sessions no longer carry user authority. Glob pattern support in deny rules (`"*"` denies all tools).

- **v2.1.165 (June 5):** Bug fixes and reliability improvements

- **v2.1.163 (June 4):** `requiredMinimumVersion` and `requiredMaximumVersion` managed settings — Claude Code refuses to start if its version is outside the allowed range. `/plugin list` command added. Hooks' `Stop` and `SubagentStop` can now return `additionalContext` to keep the turn going. Skills: `\$` escape syntax for literal `$` in command bodies. `claude agents` URL filtering.

- **v2.1.162 (June 3):** `claude agents --json` now includes `waitingFor`. `claude update` announces target version before downloading. Remote Control shows as persistent footer pill. Renamed Windsurf to Devin Desktop in `/ide` menu. 40+ bug fixes including startup hang on read-only config dirs, JetBrains terminal flickering on 2026.1+.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.138.0-alpha.1–6 (June 4–6, 2026) — Multi-Agent v2, Enterprise Features

Six alpha releases in three days, signaling imminent stable release. Multi-agent v2 keeps runtime choice with each thread and exposes cleaner follow-up and metadata defaults for spawned agents. TUI gains F13-F24 keybindings, paste in searchable menus, compact reasoning-only status item. Enterprise/admin flows show monthly credit limits and support cloud-managed config bundles for EDU workspaces. Remote-control v2 RPCs for pairing and controller grant management. Plugin system gains machine-readable `codex plugin list --json`. Standalone web searches now run in parallel. Bug fixes cover cancelled prompt restoration, macOS app launch reliability, Windows SQLite startup, compressed rollout safety.

**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.87.0–88.1 (June 3–7, 2026) — Fireworks Models, Plugin Ecosystem, Hub Fixes

Six releases in four days. v3.88.0 adds latest Fireworks AI serverless models, updates default to Kimi K2.6, fixes MCP server delete/add flows. v3.0.20 names installed plugin wrappers from source (npm package, git repo, slug, local dir) instead of opaque hash — major plugin ecosystem clarity improvement. v3.0.19 fixes CLI auto-update to use `npm update` reliably. v3.0.18 fixes Slack channel mentions threading, abort indicator clearing, syncs Fireworks model registry, bumps SDK to v0.0.43. v3.0.17 fixes CLI getting stuck after Hub restart + Escape, Hub daemon premature shutdown, adds Telegram `--allowed-user-id` flag. v3.0.16 adds official plugin install by slug from github.com/cline/plugins, `cline plugin uninstall`, skill bundling in plugins, Slack socket mode support.

**Source:** https://github.com/cline/cline/releases

### Kilo — JetBrains Stability Push (June 3–7, 2026)

Active pre-release cycle focused on JetBrains IDE stability: reduced memory by disposing hidden session UIs after timeout; improved session stability; markdown code blocks as multiline boxed editors; chat streaming performance improved. Chat UX: auto-scroll stays active when interacting, pinned to latest output on resize. Model training data usage clarified with brain circuit icon. v7.3.x stable likely shipped June 5/6.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Crush v0.76.0 (June 5, 2026) — Client-Server Maturation

Permissions UX fix: ignores key presses 350ms after dialog appears. `crush models` now shows all providers, not just configured. Client-server architecture fixes for background prompts, queued cancellation races, and server prompt independence from client connections. Skill discovery now works from git root in monorepos.

**Source:** https://github.com/charmbracelet/crush/releases

### Factory AI Droid v0.140.0–142.0 (June 3–5, 2026) — Claude Opus 4.8, MCP Search, Incident Response

v0.142.0 adds GitLab code review setup via GitLab CI Component. v0.141.0 improves large command output handling. v0.140.0 adds Claude Opus 4.8 (with faster Fast Mode), Gemini 3.5 Flash, MCP tool search (on-demand loading keeps large MCP setups context-efficient), and incident response (automatically investigates Slack-posted production alerts toward root-cause analysis).

**Source:** https://docs.factory.ai/changelog/release-notes

**Sources:** https://code.claude.com/docs/en/changelog | https://github.com/openai/codex/releases | https://github.com/cline/cline/releases | https://github.com/Kilo-Org/kilocode/releases | https://github.com/charmbracelet/crush/releases | https://docs.factory.ai/changelog/release-notes

## 2026-06-02

### OpenAI Codex CLI v0.136.0 (June 1, 2026) — Session Archiving, TUI Markdown, Python SDK GA

Major stable release:
- **Session Archiving**: Sessions can now be archived from TUI with `/archive` or CLI with `codex archive`/`codex unarchive`; archived sessions are protected from resume/fork until restored. Critical for teams managing months of rollout JSONL files — turns session storage from write-only log into manageable knowledge archive.
- **TUI Markdown**: OSC 8 web links now clickable in markdown; cramped tables switch to readable key/value records without losing link targets.
- **App-server enhancements**: Resume thread with initial turns page, richer MCP server status, stdio mode launch via `codex app-server --stdio`.
- **Remote execution**: CODEX_API_KEY registration for approved OpenAI hosts; remote-control websockets use short-lived server tokens instead of ChatGPT access tokens.
- **Windows elevated provisioning**: Alpha `codex sandbox setup --elevated` path for Windows admins.
- **Image generation extension**: Feature-gated standalone extension running through native Codex image artifact pipeline.
- **Python SDK GA**: Standard `pip install openai-codex` path, refreshed quickstarts, API reference, FAQ, and examples. Python SDK can now be staged/published independently from runtime using `python-v*` tags.
- **Security hardening**: `/diff` no longer runs repository-provided Git helpers/hooks; PowerShell parser execution rejected on non-Windows hosts; browser-origin exec-server websocket handshakes rejected.
- **Bedrock auth fix**: Falls back to AWS_REGION/AWS_DEFAULT_REGION; unsupported Bedrock GPT service tiers no longer advertised.
- **MCP dependency update**: Updated to rmcp 1.7.0.

**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.86.2 (June 1, 2026) — File Search Fix for VS Code 1.122+

Fixes @ file mentions and workspace file search on VS Code 1.122+ by resolving the new bundled `@vscode/ripgrep-universal` per-platform binary layout before falling back to legacy ripgrep paths. Also fixes file search failure in VS Code Remote SSH and after certain VS Code updates.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.3.x Pre-release (June 1, 2026) — Kilo Console, Background Process Fixes

- **Kilo Console**: Experimental feature to serve Kilo Console from the local daemon (`kilo console` to open).
- **Background process port discovery**: Limited to TUI and stopped after startup to avoid unnecessary Bun subprocess polling.
- **Connection error handling**: Retryable connection errors now preserve unsent prompts when VS Code background CLI process exits.
- **Changes review scroll**: Preserved when agents update files.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Claude Code — No New Release June 1

No new release recorded on June 1. Last release remains v2.1.159 (May 31) — internal infrastructure changes only.

**Source:** https://code.claude.com/docs/en/changelog

---

## 2026-06-01

### Claude Code v2.1.159 (May 31, 2026) — Internal Infrastructure

Minor internal infrastructure release with no user-facing changes. Marks the first release post-v2.1.158 auto-mode expansion to Bedrock, Vertex, and Foundry.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.136.0-alpha.2 (May 31, 2026) — Pre-release

Pre-release dropped May 31 evening. No visible release notes yet. Follows v0.135.0 stable (May 28) and v0.135.0-alpha series — suggesting continued rapid development toward the next stable.

**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.0.15 (May 29, 2026) — Cline Hub, Global Rules, Discord Connectors

Major feature release:
- **Cline Hub**: New web app for monitoring connected clients, viewing and driving sessions, streaming assistant output, and restarting the local hub. LAN and tunnel usage gated by room secret.
- **Global AGENTS rules**: Agent rules can now be applied across all sessions, not just per-project.
- **Discord connector improvements**: Sessions bound to individual message authors (no more shared chat state), participant mute via mentions or user IDs.
- **OAuth URLs now clickable** in the TUI.
- **Model catalog refresh**: Added Claude Opus 4.8, Moonshot Kimi K2.6, and Qwen3.7 Max (with cache support).

**Source:** https://github.com/cline/cline/releases

### Kilo v7.3.x (May 28-29, 2026) — JetBrains Plugin GA, Mercury Next Edit

Significant releases ahead of v7.3 stable:
- **JetBrains plugin initial release**: Native Kilo Code tool window for JetBrains IDEs. Chat sessions with streamed responses, tool output, reasoning, markdown, todos, and plan follow-ups. Local and cloud session history with search. Bundled Kilo CLI runtime.
- **Mercury Next Edit**: Multi-line edit prediction beyond cursor including off-cursor and pure-insertion edits. Tab-to-jump / Tab-to-apply workflow. Available via Kilo Gateway (no separate Inception API key required).
- **DeepSeek promoted** to Popular Providers list (replacing GitHub Copilot).

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Crush v0.74.1 (May 29, 2026) — Friday Patch: Bash Tool, Qwen3.7

- Bash tool no longer hangs on interactive commands like `git rebase -i` (fix by @taigrr).
- Qwen3.7-Max via OpenCode now works (OpenCode requires Anthropic Messages API for this model).
- Client-server architecture continues to mature under `CRUSH_CLIENT_SERVER=1`.

**Source:** https://github.com/charmbracelet/crush/releases

### Factory AI Droid v0.137.0 (May 29, 2026) — Airgapped BYOK

- **Airgapped BYOK**: New `FACTORY_AIRGAP_ENABLED` option bypasses Factory auth when using your own model keys — critical for air-gapped enterprise environments.
- **Usage stats**: Session usage statistics now available.
- Bug fixes: duplicate thinking output eliminated, MCP permissions persist across all confirmation paths.

**Source:** https://docs.factory.ai/changelog/release-notes

---

## 2026-06-11

### Claude Code v2.1.172 (June 10, 2026) — Nested Sub-Agents, Stability Sprint <!-- FACT_CHECK: VERIFIED -->

A major feature release alongside a broad stability and reliability pass:

- **Nested sub-agents (5 levels deep)**: Sub-agents can now spawn their own sub-agents, enabling hierarchical agent workflows. Previously limited to 1 level of nesting — now up to 5 levels enables complex orchestration patterns.
- **Amazon Bedrock region detection**: Claude Code now reads AWS region from `~/.aws/config` when `AWS_REGION` isn't set, matching AWS SDK precedence; `/status` shows where the region came from.
- **Plugin marketplace search**: Added search bar when browsing a marketplace's plugins in `/plugin`.
- **OTEL metric model attribute**: `claude_code.lines_of_code.count` metric now includes model attribute.
- **Critical fix — 1M context credit exhaustion**: Sessions using 1M context without usage credits no longer get permanently stuck — the session now automatically compacts back under the standard context limit.
- **Background agent security fix**: Background agents no longer potentially read another directory's project settings (`.mcp.json` approvals, trust) when dispatched onto a pre-warmed worker.
- **Model picker accuracy**: Multiple fixes for model picker showing disabled models, wrong IDs, and misleading slash prefixes.
- **Performance improvements**: Reduced idle CPU usage (goal status chip no longer re-renders at 5 Hz); removed redundant message normalization; faster message-history transforms when streaming state unchanged.
- **Chrome browser tool loading**: Browser tools now load in a single batched call instead of one per tool.
- **30+ changes total** — largest release since the v2.1.163–168 reliability sprint.

**Source:** https://github.com/anthropics/claude-code/releases

### OpenAI Codex CLI v0.140.0-alpha.4 / alpha.7 (June 10, 2026) <!-- FACT_CHECK: VERIFIED -->

Continuing rapid alpha development following v0.139.0 (June 9). Two alpha releases on June 10 (alpha.4, alpha.7), continuing iteration on multi-agent v2, plugin system, and TUI improvements.

**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.0.23 (June 10, 2026) — Fable 5 SDK Fix, OAuth Centralization <!-- FACT_CHECK: VERIFIED -->

- **Vertex AI GCP settings configuration**: Fixed Vertex AI GCP settings configuration.
- **Azure Foundry API version**: Fixed the Azure Foundry API version.
- **Configured agents as subagent tools**: Added support for configured agents as subagent tools — enables more complex multi-agent architectures within Cline.
- **OAuth management centralized**: Centralized OAuth management into the SDK — consistent OAuth handling across all providers.
- **Fable 5 disabled reasoning fix**: Fixed an error caused by disabled reasoning on Fable 5.

**Source:** https://github.com/cline/cline/releases

### Kilo v7.3.42 Pre-release (June 10, 2026) — JetBrains UX, Agent Manager <!-- FACT_CHECK: VERIFIED -->

- **Fork Session button**: Added Fork Session button to completed Agent Manager sessions.
- **Task timeline persistence**: Keep task timelines in place while reviewing earlier activity across Kilo chat surfaces, and resume following updates from the latest bar.
- **JetBrains reasoning blocks**: Active reasoning opens while streaming, completed reasoning collapses automatically, empty blocks stay hidden, adjacent reasoning renders as one block.
- **Auto-scroll pause**: Pause chat auto-scroll whenever the user scrolls upward over nested tool output.
- **JetBrains search tool paths**: Display search tool paths relative to the current repository when possible.

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Factory AI Droid v0.144.0–144.1 (June 9, 2026) <!-- FACT_CHECK: VERIFIED -->

- **v0.144.1**: Context summarization fallback — when a model declines to summarize conversation, Droid falls back gracefully instead of retrying repeatedly.
- **v0.144.0**: Session file suggestions on new session page; safer command risk handling for destructive commands; tmux key support improved; MCP authentication and connector reliability fixes.

**Source:** https://docs.factory.ai/changelog/release-notes

**Sources:** https://github.com/anthropics/claude-code/releases | https://github.com/openai/codex/releases | https://github.com/cline/cline/releases | https://github.com/Kilo-Org/kilocode/releases | https://docs.factory.ai/changelog/release-notes

---

## 2026-06-11

### Claude Code v2.1.173 (June 11, 2026) — Fable 5 Name Fix, Windows Sandbox Fix

Minor but meaningful patch:
- **Fable 5 `[1m]` suffix normalization**: Fable 5 includes 1M context by default, but model names were appearing with a duplicate `[1m]` suffix. Now stripped automatically — fixes model picker confusion and potential billing edge cases.
- **Windows sandbox warning fix**: Fixed spurious "sandbox dependencies missing" startup warning on Windows when sandbox was enabled in settings.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.140.0-alpha Series (June 10–11, 2026) — Six Alphas in 36 Hours

Six alpha releases in roughly 36 hours (alpha.4 and alpha.7 on June 10; alpha.8 through alpha.11 on June 11, culminating at 19:12 UTC). Active PR themes in the alpha cycle include multi-agent v2 concurrency controls, v2 agent residency LRU caching, and remote-control websocket enrollment fixes. Stable release appears imminent.

**Source:** https://github.com/openai/codex/releases

### Cline CLI v3.0.24 (June 11, 2026) — Plugin Architecture, Windows Stability

- **Plugin commands submit prompts**: Plugin commands can now submit prompts directly to the agent — enables richer plugin-tool integrations and agent-to-agent communication patterns.
- **API base URL override**: Added support for overriding the API base URL, improving self-hosted and proxy deployments.
- **Device auth auto-open**: Opens the verification URL automatically when starting device authentication.
- **Single shared Cline Hub**: Stale hubs are now respawned after an upgrade — fixes session fragmentation.
- **Windows console flicker fix**: Suppressed flickering console windows on Windows.
- **Tool result truncation fix**: Oversized tool output stays within limits.
- **Command echo removal**: Stopped echoing full command text in `run_commands` tool results.

**Source:** https://github.com/cline/cline/releases

### Cline CLI v3.89.1–v3.89.2 (June 11, 2026) — VS Code 1.123+ / Node 24 Compatibility

Same-day two-release patch addressing the VS Code 1.123 breaking change:
- **v3.89.1**: Restored Anthropic provider on VS Code 1.123+ where the Node 24 runtime broke the bundled Anthropic SDK; handles DeepSeek V4 reasoning format.
- **v3.89.2**: Complete fix — upgraded bundled Anthropic SDK to a Node 24-compatible release, updated Vertex AI provider to a compatible Anthropic Vertex SDK release.
- Impressive same-day turnaround on a breaking ecosystem regression.

**Source:** https://github.com/cline/cline/releases

### GitHub Copilot CLI — Agent Becomes Default (Phased Rollout from June 2026)

GitHub began phased transition to make Copilot CLI agent the default (announced June 2, rollout active June):
- **Agent picker**: Agent mode (default), Ask mode, Custom agents, Plan mode.
- **New slash commands**: `/remote` (remote control from github.com or GitHub Mobile), `/compact` (manual context compression), `/chronicle` (session history analysis + personalized tips and improvement suggestions).
- **Agent debug panel** (public preview): Chronological event log of agent interactions for debugging custom agents and sub-agent workflows.
- **Remote control**: Settings > Tools > GitHub Copilot > Chat > Enable Copilot CLI Remote.
- Makes agentic CLI the mainstream default for Copilot CLI — significant industry validation.

**Source:** https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/

---

## 2026-06-21

### Claude Code v2.1.185 (June 20, 2026) — Stream Stall UX Tweaks

- **Stream-stall hint rewording**: Changed from "No response from API · Retrying in …" to "Waiting for API response · will retry in …" — clearer signal that the system is actively waiting, not silently failing
- **Stall detection delay extended**: Trigger time increased from 10s to 20s of silence before displaying the hint, reducing false positives during normal API latency spikes

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.141.0 (June 18, 2026) — Remote Execution Overhaul

- **Encrypted Noise relay channels**: Remote executors now use authenticated, end-to-end encrypted Noise protocol relays — meaningful for security-sensitive environments
- **Cross-platform remote execution**: Preserves executor-native working directories and shells across app-server and exec-server boundaries, including filesystem permission paths — enables heterogeneous team setups (Linux CI, macOS dev machines, Windows build hosts)
- **Per-thread stdio MCP servers**: Selected executor plugins can activate their stdio MCP servers per thread, enabling more granular tool access in multi-agent workflows
- **Plugin marketplace improvements**: Discovery adds a "created-by-me" marketplace and auth-specific curated catalogs
- **TUI auto-resolve**: Input prompts can auto-resolve after inactivity with a visible countdown that pauses on interaction
- **Performance**: Reduced latency and memory use in large tool-heavy sessions via caching and eliminated redundant copies; bounded prompt-image caching to 64 MiB
- **Hook security fix**: Hook trust bypass now persists correctly through `codex exec` thread start and resume; PostToolUse hooks correctly reject code-mode tool calls

**Source:** https://developers.openai.com/codex/changelog

### Crush v0.79.1 (June 20, 2026) — Bang Mode Polish

- **Paste activation fix**: Bang mode now activates correctly when pasting text starting with `!`
- **History inclusion**: Bang commands are now included in session history
- **External editor sync**: Bang mode state stays synchronized when using external editors

**Source:** https://github.com/charmbracelet/crush/releases

### Factory AI Droid v0.150.0 (June 16, 2026) — npm Plugins, Desktop UX, Performance

- **npm plugin sources**: Plugin marketplace definitions can now reference plugins published as npm packages — significantly lowers the barrier for plugin distribution
- **Quit confirmation (Desktop)**: App now asks for confirmation before closing if an active Droid session would be interrupted
- **Long session performance**: Improved chat performance in long-running sessions
- **Rate limit reset display**: Fixed the rate limit reset time shown for sub-hour resets

**Source:** https://docs.factory.ai/changelog/release-notes

## 2026-06-27

### Claude Code v2.1.191–193 (June 24–25, 2026) — Subagent Polish, Auto Mode Overhaul

Claude Code continued its rapid release cadence with three releases in 24 hours, focusing on subagent reliability, auto mode UX, and observability:

**v2.1.193 (June 25):**
- **`autoMode.classifyAllShell` setting** (NEW): Routes ALL Bash/PowerShell commands through the auto-mode classifier instead of only arbitrary-code-execution patterns — gives auto mode full control over shell execution.
- **Auto-mode denial reasons**: Denial rationale now surfaces in the transcript, denial toast, and `/permissions` recent denials tab.
- **`claude_code.assistant_response` OpenTelemetry event**: Model's response text now logged (redacted by default; enable with `OTEL_LOG_ASSISTANT_RESPONSES=1`).
- **Live file path autocomplete in bash mode (`!`)**: Type paths in bang mode with autocomplete.
- **Startup notice when MCP servers need auth**: Points users to `/mcp` when MCP auth is missing.
- **Memory-pressure reaping for idle background shells**: Automatically kills background shell commands under memory pressure.
- **Subagent improvements**: Launch result no longer tells Claude to "end your response" — agent keeps working on other tasks while subagent runs.
- **MCP headersHelper auth**: Re-runs and reconnects automatically on 401/403.
- **Plugin auto-rename**: Marketplace `renames` maps now followed automatically.

**v2.1.191 (June 24):**
- **`/rewind` support after `/clear`**: Can now resume conversations from before `/clear` was run.
- **~37% CPU reduction during streaming** via coalescing text updates to 100ms.
- **Reduced long-session memory growth** from terminal output cache.
- **Sandbox network permission "remembered for session"**: Hosts allowed with "Yes" no longer re-prompt within the same session.
- **MCP error messaging improved**: HTTP 404 errors now show URL and point to MCP config.
- **MCP OAuth headless flow**: Headless environments skip browser popup, go straight to paste-the-URL prompt.
- **Background agents permanently stoppable**: Stopping from tasks panel is now permanent — no resurrection.
- **Hooks with comma-separated matchers fixed**: `"Bash,PowerShell"` matchers now actually fire.

**Source:** https://code.claude.com/docs/en/changelog

### OpenAI Codex CLI v0.143.0 Alpha Sprint — 20+ Releases, Stable Incoming?

The v0.143.0 alpha cycle has now surpassed 20 releases since June 23, with the most recent being alpha.26 (June 26). This is by far the longest alpha sprint for Codex CLI:

- **v0.143.0-alpha.26 (June 26)**: MCP tools now use tool search by default, improving tool discovery. macOS authentication clients can honor system proxy/PAC/WPAD settings. Remote plugin catalogs now return curated featured-plugin rankings. Updated bundled OpenSSL to 3.6.3.
- **v0.143.0-alpha.22 (June 25)**: Remote stdio MCP servers now accept absolute working directories in remote platform's path format.
- **v0.143.0-alpha.21 (June 25)**: Remote HTTP(S) image inputs return clear validation errors.
- **alpha.16 (June 25)**: Code Mode warns when selected model lacks required metadata. PowerShell un-inspectable AST regions require approval.
- **zsh plugin v0.1.0 (June 25)**: New codex-zsh plugin released separately.
- **v0.142.2 (June 25)**: Appears to be a rust-side stable patch for v0.142.x — suggesting the rust layer stabilized while the full CLI remains in alpha.

Notable: v0.142.0 stable was expected since June 22 but still hasn't materialized. Instead, the alpha sprint continues at high velocity, suggesting a major release (possibly v0.144.0 or the long-awaited v1.0) is in preparation.

**Source:** https://github.com/openai/codex/releases

### Cline v3.0.30 + v4.0.0 (June 26, 2026) — SDK Migration, Plugins, Major Overhaul

Cline shipped two massive releases — a CLI patch and a complete SDK migration for the VS Code extension:

**v4.0.0 (June 26) — VS Code Extension SDK Rewrite:**
This is the most significant architectural change in Cline's history:
- **SDK-backed VS Code extension runtime**: All agent turns, tools, Plan/Act mode, MCP, checkpoints, telemetry, provider changes, compaction, and task history now route through the shared Cline SDK session layer.
- **ClinePass fully integrated**: Onboarding, provider selection, signup/subscription handoff, live model lists, entitlement/org error states, out-of-credit prompts.
- **Customize marketplace**: New hub for discovering and managing Skills, MCP servers, and Plugins — install/uninstall/enable/disable from within VS Code.
- **Cline Plugins**: Extensible plugin system for custom tools, workflows, skills, and MCP-powered capabilities — packages reusable automations.
- **Queued prompts in chat**: Messages submitted while Cline is working are queued, shown while current turn streams, can be cancelled.
- **Edit-and-regenerate for previous user messages**.
- **Generic SDK provider settings**: More providers share the same model picker, reasoning controls, dynamic model IDs, provider config persistence.
- **Subagents temporarily disabled** in VS Code extension while SDK-backed experience stabilizes.
- **Migrated VS Code extension build/package to Bun**.

**v3.0.30 (June 26) — CLI Patch:**
- Token count added to status bar alongside cost.
- Organization-specific error messages.
- **SAP AI Core provider support** (NEW).
- Refreshed model catalog with latest provider models (Fireworks GLM 5.2, Kimi K2.6 Fast, Kimi K2.7 Code, Qwen 3.7 Plus, MiniMax M3, etc.).
- Threaded proxy/CA-aware networking into the inference path.
- Bedrock settings persisted to providers.json.
- ClinePass models updated live, restored in onboarding, improved error messages.
- **LiteLLM model fetches routed through SDK** — stopped unrelated models from appearing in LiteLLM model list.

**Source:** https://github.com/cline/cline/releases

### Crush v0.80.0 (June 25, 2026) — Tool Call Validation, Config Performance, Local Model Context

**v0.80.0 — "The Ol' Thursday Patch":**
- **Tool call JSON validation**: Sessions no longer break when a model produces invalid JSON arguments — Crush validates and reports the error back to the model so it can self-correct.
- **Auto-detect local model context windows**: For llamacpp, omlx, lmstudio, litellm, and ollama endpoints — previously mis-setting context window sizes to zero.
- **Config performance overhaul**: Refactored for much better performance on large/long configs with many providers and models. Model picker dialog loads significantly faster.
- **Race-condition protection**: Copy-on-write mechanism prevents multiple Crush instances from invalidating each other's config updates.
- **Claude Code additionalContext bridged onto HookResult.Context**: Better hook integration with Claude Code workflows.
- **Fantasy LLM library bumped to 0.33.2**: Underlying engine improvements.

**Source:** https://github.com/charmbracelet/crush/releases

### Kilo — No New Releases (Quiet Week)

Kilo had no new releases between June 23–27. The pre-release from June 24 with slash/file mention completion remains the latest. This is Kilo's quietest week since its rapid release cadence began in April. Community speculation: team focused on v7.4.0 stable preparation incorporating the WebSocket transport and upstream OpenCode changes.

---

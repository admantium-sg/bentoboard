## Findings: Releases — 2026-11-11

Window: 2026-11-10T01:28:00Z -> 2026-11-11T01:28:00Z (all timestamps UTC).
Sources: GitHub release feeds (releases.atom) fetched via curl. Raw artifacts in `tmp/rel_*.xml`.

### Claude Code — v2.1.322 (2026-11-10T02:29Z)
- Added **fast mode on Vertex AI** in the `global`, `us` and `eu` regions, with automatic fallback to standard speed if Vertex refuses the request.
- Small patch release; no other notable changes listed (previous v2.1.321 covered by prior cycle).
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.322

### Goose — v1.59.0 (2026-11-10T17:27Z)
- **Minimal deferred MCP tools** in `ToolExecutionOperation` (#13378) and configurable **per-start voice instructions for live-voice** (#13375).
- **Configurable GPT-Live endpoint, model and API key** (#13360); session/list can now be **filtered by client tags (ACP)** (#13173).
- goose-agent (GDK) gains **stop, approval and tool hook operations** (#13169); **completed delegates can be resumed with a follow-up (subagent)** (#13106).
- Fixes: Databricks OAuth tokens refreshed before expiry (#13328), Gemini thinking level sent + `stream_options` dropped for Databricks (#13232), session DB init isolated from app pool (#13324), cargo-deny advisories (zip8) addressed (#13309). Docs: corrected SECURITY_PROMPT_THRESHOLD sensitivity direction; blog post "Same Brain, Different Bill".
Source: https://github.com/aaif-goose/goose/releases/tag/v1.59.0

### Goose — v1.58.1 (2026-11-10T04:16Z)
- Hotfix: reworded the compaction prompt that **Opus 5.5 refused** as distillation (#13340) and refresh of Databricks OAuth tokens before expiry (#13328).
Source: https://github.com/aaif-goose/goose/releases/tag/v1.58.1

### OpenCode — v2.2.7 (2026-11-10T10:37Z)
- **GitHub Copilot Auto**: "Auto" appears in the model picker when the Copilot account has an Auto pool; Copilot's router picks the model per session at the Auto discount, falling back to the account's default chat model if routing fails (#62997).
- **Breaking**: `ImageResponse.image` removed in `@opencode/ai` — use `response.images[0]` (#63011). SDK endpoints no longer wait up to 5s for plugin loading (`agent.list`, `integration.list`, `usage.limits`, `vcs.init`, `rpc.call`, `artifact.*`) (#62796, #63040).
- **MCP Logins Stay Signed In**: remote MCP servers that rotate refresh tokens no longer sign the user out on concurrent refresh or transient token-endpoint failure (#62827, #63012).
- `read` accepts negative offsets (e.g. `-50` = last 50 lines) and suggests close names when a file isn't found (#62147); shell results now end with `Exit code: N` and report signal names/timeouts (#62141).
- Prompt-cache warming now times pings from the model's `cache.ttl` (default `interval: "auto"`, else every 4 min) (#62831); Code Mode sends only *what changed* in MCP tools instead of the full catalog (#62176). GitHub Copilot session costs now use the amount Copilot charged, not the catalog estimate (#62034).
Source: https://github.com/anomalyco/opencode/releases/tag/v2.2.7

### Qwen Code — v0.27.2 (2026-11-10T21:23Z)
- **Web Shell channel configuration** for WeChat, QQ and Email, including QR login, scan progress, identity display and logout where supported (#16736, #16724, #16746).
- **Mods API**: one-off `$.model.complete` calls, rewriting displayed AssistantMessage text via `ui.render`, and persisting plugin values with `$.store` (#16737, #16794, #16791).
- `/btw` side questions are replayed for context; Managed Agent adds private follow-ups with manual or optional automatic session recaps (#16408, #16758).
- Pending approvals now surface in the live panel and can trigger a terminal bell or desktop notification when the terminal is unfocused (#16800).
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2

### Qwen Code — SDK TypeScript v0.1.32 (2026-11-10T20:18Z)
- Bundles CLI version 0.27.2 (built from source, same branch/ref as the SDK).
Source: https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.32

### Qwen Code — v0.27.2-preview.0 (2026-11-10T20:11Z)
- Preview build: Agent Host can retry an enrollment whose answer was lost (#16722); Managed Agent imports Skills from the original Runtime; channel authorExclude shape-check fixes.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-preview.0

### Gemini CLI — v0.68.0 (2026-11-10T21:17Z)
- Stable release following the v0.67.0 / v0.66.0 preview line; changes include README clarification of Gemini CLI scope/limitations and tool landscape, and a fix bounding inline history re-render after terminal width changes.
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0

### Gemini CLI — v0.69.0-preview.0 (2026-11-10T21:05Z)
- New `/stats` **heatmap subcommand** for daily token usage (#30135); fixes preserve literal `$` characters during template placeholder replacement (#30136) and prevent a `GCLI_EXPAND_TARGET` env-var collision in `expandEnvVars` (#30138).
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0-preview.0

### Codex CLI — rust-v0.167.1 (2026-11-10T21:33Z)
- Patch release on the 0.167 line; release notes only link the changelog (no inline detail).
- Note: multiple alpha builds of the 0.169.0 line shipped in-window (rust-v0.169.0-alpha.8 through alpha.10, 2026-11-09/10) — churn, not a stable release.
Source: https://github.com/openai/codex/releases/tag/rust-v0.167.1

### GitHub Copilot CLI — v1.0.110-1 (2026-11-10T22:59Z)
- Fixes: a session reopened with `copilot --resume` is now marked in use immediately, so `copilot -p --resume` or a second window can no longer write into an idle session.
- Custom status lines preserve first-row indentation; control characters in `/settings` list items are shown visibly instead of terminal styling/hyperlinks; markdown tables with wide symbols (wavy dash) render aligned.
- Sign-in prompt appears after `/logout` removes the last saved account with invalid credentials (no restart needed); `copilot mcp add` preserves existing invalid server entries and asks before reusing names; plugin preferences/settings are preserved when `settings.json` is unparseable.
- Shell/Search results report accurate line and file counts and omit model-only cost guidance when an AI-credit limit is set; Vim-mode j/k motions respect the current cursor column after `gg`, `ge`, operators or redo; MCP replies containing a lone UTF-16 surrogate escape no longer hang a tool call (3 min) or fail after 60s.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.110-1

### GitHub Copilot CLI — v1.0.110-0 (2026-11-10T20:07Z)
- **Experimental**: agent commands can answer git, ssh and sudo password prompts in a masked dialog (enable via `/experimental`).
- Improved: selecting an unavailable account in `/user switch` shows recovery guidance and a retry action; clicking anywhere in expanded reasoning collapses it; an **AI-credit limit top-up is offered at 90% usage**, before the agent loses tool access.
- Fixes: failed/cancelled compaction outcomes now appear in the timeline with memory-pressure restart/resume guidance; `/diff` on a feature branch now lists committed files with non-ASCII, quote, backslash or tab characters; `copilot help permissions` no longer gives the never-matching `shell(gh pr create)` example (now `shell(gh pr)`); MCP tool results carrying top-level keys like `skills`/`tools`/`messages` now reach the model.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.110-0

### GitHub Copilot CLI — v1.0.109 (2026-11-10T17:02Z)
- **IPv4/IPv6 CIDR support** for sandbox host allow/deny rules in settings.
- **Support for Claude Fable 5.2** in the model picker under "New models".
- Fixes: `copilot help input` now says Backspace at the start of shell input exits shell mode keeping the typed text; `/subagents` keeps "Overridden"/"Status" columns readable on narrow terminals; removing a built-in MCP server now explains how to disable it instead; `/cd ~` and `/add-dir ~` resolve the correct full path near the home directory; trusted-folder/worktree confirmations keep Windows path separators; "don't ask again" for parallel file ops approves all covered requests.
- The footer's AI credits update as soon as `/compact` finishes; prompt mode with `--output-format json` emits a final result record with an exit status even on early failure; rate-limit errors now name "Copilot Fusion mode" or "auto mode" consistently.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.109

### Claude Code GitHub Action — v1.0.271 (2026-11-10T02:32Z)
- Patch release on the 1.0.x line (release notes only link the changelog; v1.0 GA tag re-published the same day).
Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.271

### Zed — nightly (2026-11-10T13:38Z)
- Nightly channel build published (REPL: Jupyter dependency updates); no stable release in-window.
Source: https://github.com/zed-industries/zed/releases/tag/nightly

### Company announcement — Gemini 4 Carbon GA in GitHub Copilot (2026-11-10T19:26Z)
- Google's latest model, **Gemini 4 Carbon**, is now generally available in GitHub Copilot, aimed at complex coding/agentic/reasoning tasks with a focus on secure code generation and security-focused work.
- **Billed at provider list pricing** under usage-based billing; available to Copilot Pro+, Max, Business and Enterprise users in VS Code, Visual Studio, **Copilot CLI**, the coding agent, the Copilot app, github.com, GitHub Mobile, JetBrains IDEs, Xcode and Eclipse. Rollout is gradual.
- Copilot Enterprise/Business admins can manage access via **model policy** in Copilot settings.
Source: https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot

### Company announcement — GitHub App support for Enterprise Copilot seat management (2026-11-11T00:10Z)
- Enterprise Copilot administrators can now manage seat assignments through a GitHub App instead of manual, per-user invitation.
Source: https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management

### Crush — nightly (2026-11-11T00:45Z)
- Nightly channel build published (continuous releases; no stable version bump in-window).
Source: https://github.com/charmbracelet/crush/releases/tag/nightly

### Already reported / no new release in window
- Claude Code v2.1.321 (2026-11-09) — already covered by the 2026-11-10 cycle.
- Goose v1.58.0 (2026-11-09) — already covered.
- Qwen Code v0.27.1 + desktop-v0.27.1 (2026-11-09) — already covered.
- Aider, Cline, Roo Code, Continue: no release published or updated within the window.
- **Amazon Q Developer CLI** (repo is `aws/amazon-q-developer-cli`, not `amazon/q-developer-cli`): latest release is v1.19.7 from 2025-11-17 — no recent GitHub release activity to report.
- **Cursor**: changelog's latest entries are Nov 6, 2026 (realtime voice chat powered by Grok Voice, "Build Live Apps") and Nov 5, 2026 — both outside the 24h window, so not reported as new.
- **Sourcegraph Amp**: no `sourcegraph/amp` release feed exists (404) — could not verify Amp releases this cycle.
- `microsoft/vscode-copilot-cli` release feed is empty/nonexistent; the Copilot CLI releases live at `github/copilot-cli` (covered above).

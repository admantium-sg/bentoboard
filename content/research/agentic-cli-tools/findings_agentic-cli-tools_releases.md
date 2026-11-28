# Findings — Agentic CLI Tools & Desktop AI Assistants: Releases, Commands, Features, Announcements

**Novelty window:** 2026-10-28T01:30:00Z → 2026-10-29T01:30:00Z (focus 2026-10-27 → 2026-10-29)
**Collected:** 2026-10-29T01:30Z–01:45Z
**Method:** GitHub Releases API (curl + jq), npm registry metadata, release-page HTML fetches, 4 web searches. GitHub unauthenticated API rate limit (60/hr, exhausted 2026-10-29T01:33Z, reset 1793240965) truncated late collection; empty bodies are flagged explicitly.
**Prior coverage:** the previous run (`findings_agentic-cli-tools_releases.md`, collected 2026-10-28T01:30Z) already covered Claude Code v2.1.312, Codex rust-v0.165.0 + alphas up to alpha.4, Copilot CLI v1.0.104/v1.0.105, OpenCode v2.2.0, Antigravity 1.4.8, Gemini CLI v0.66.0/v0.67.0-preview.0 + nightly 20261028, Kilo v7.8.20, Crush nightly (2026-10-28). Items repeated below are explicitly marked as *already known* and only re-listed when a **new** version appeared in this window.

---

## Codex CLI (OpenAI)

### Codex CLI rust-v0.166.0-alpha.5 — prerelease train continues (2026-10-28T04:43:10Z)
Prerelease GitHub release following alpha.4 (2026-10-28T01:22:03Z). **The release body contains only the version line ("Release 0.166.0-alpha.5", ~25 characters) — no changelog is published for this build.** No feature-level detail can be sourced for alpha.5.

Source: https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5

### Codex CLI rust-v0.166.0-alpha.5.1 — patch on the alpha train (2026-10-28T19:17:02Z)
Second prerelease on 2026-10-28, ~14.5 h after alpha.5. Body again contains only "Release 0.166.0-alpha.5.1" (27 characters, no changelog). Commit `f79b26ccbb3116b052544666a181012fb45dc49b`; 56 commits to `main` since the tag; 320 assets. npm `@openai/codex` published the matching platform artifacts `0.166.0-alpha.5.1-linux-arm64` (2026-10-28T19:32:31.377Z), `0.166.0-alpha.5.1-win32-x64` (19:32:08.382Z), `0.166.0-alpha.5.1-darwin-arm64` (19:30:23.821Z), `0.166.0-alpha.5.1-win32-arm64` (19:29:51.184Z). The npm `alpha` dist-tag now points at `0.166.0-alpha.5.1`, while `latest` remains the stable `0.165.0`.

Source: https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1
Source: https://registry.npmjs.org/@openai/codex

---

## Google Antigravity CLI

### Antigravity CLI 1.4.9 — image paste via terminal shortcut, per-Google-app execute_url scoping (2026-10-28T05:59:42Z)
Stable release. **Changed (security-relevant):** `execute_url` permissions were narrowed — approving a Google site such as `www.google.com` or `cloud.google.com` no longer implicitly allows sensitive Google apps (`mail.google.com`, `docs.google.com`, `drive.google.com`, `accounts.google.com`, `console.cloud.google.com`); each now needs its own approval. **Added:** image pasting through the terminal's own paste shortcut (`Cmd+V` / `Ctrl+Shift+V` with only an image copied) and by dragging image files into the prompt (attaches them instead of inserting paths); image paste also works over SSH with X11 or Wayland forwarding; the paste key now reports "No image or video found in the clipboard" and names the missing clipboard tool (e.g. `wl-clipboard` on Wayland). **Improved:** `/plugin` Discover tab groups marketplace plugins into the same sections as the Antigravity plugin marketplace and lists a plugin under every section it belongs to; `agy plugin validate` warns on non-kebab-case plugin names (`Neo4j`, `foo_bar`) — failing under `--strict` — and validates `logo` paths (blank, backslashes, absolute, outside the plugin, excluded folders such as `.github/`, unrenderable URLs) plus context-provider `iconUri` values; the `/diff` position indicator now states what it counts ("[1-44 of 195 files]" vs "[1-44 of 195 rows]"); Auto mode's sandbox reviewer now knows whether the working directory is inside a Git repository and no longer burns its time budget running `git status` in non-repos. **Fixed:** always-allow rules for multi-line commands (`python -c`, `node -e`) never taking effect; onboarding screens cut off in small terminals; Vim mode `r`/`f`/`F`/`t`/`T` cancelling on a space target; invisible U+FFF9/U+FFFA characters around wrapped code; `INVALID_MEDIA` poisoning a conversation after the agent viewed a corrupt image (e.g. `adb exec-out screencap -p > screenshot.png` that also captured a warning); conversations stuck after a tool result lost its matching tool call; Google Cloud models failing once the system prompt/tools changed after a thinking block (outdated thinking blocks now dropped); the `/browser` subagent not receiving the current page snapshot with Chrome DevTools MCP 1.11+ (missing required page ID).

Source: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.9

---

## Kilo Code

### Kilo Code v7.8.21 — hosted workspace operations in the local session-host API (2026-10-28T09:55:05Z)
CLI minor change (PR #15509, commit `307ff45f27ec796309ffb4e2f00f8dab85db3838`): the local Kilo API can now list, create, read, check status of, and delete hosted workspaces; list their sessions; list available workspace profiles; start another session inside a workspace; and follow Cloud session preparation/status events through a local system feed route. Hosted operations exchange the stored user credential for a short-lived **Cloud Agent control token** before any Worker call, so the original credential is never sent to the Worker. Hosted attachments stop working once their session or workspace is deleted.

Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.21

### Kilo Code v7.8.22 / v7.8.23 — background-job exit codes and compaction budget (2026-10-28T10:42:55Z / 15:10:46Z)
v7.8.22 body is effectively empty (18 characters — no notes). v7.8.23 (PRs #15081, #14976, #15515, #15516) preserves the real exit code or signal of background jobs owned by Kilo instead of recording a failed job as successful; gives large-session compaction enough output space for thinking and a complete summary (rejecting cut-off summaries without losing history); keeps a reply another Kilo process on the same data directory is still writing instead of deleting it; and fires each scheduled wakeup and cron task exactly once when several Kilo processes share a workspace, keeping a cancelled task from firing in another process. Dependencies bump to `@kilocode/kilo-indexing@7.8.23`, `@opencode-ai/core@7.8.23`, `@kilocode/kilo-ui@7.8.23`, `@opencode-ai/ui@7.8.23`.

Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.23

### Kilo Code v7.8.25 — npm user-agent preservation (2026-10-28T20:43:24Z)
CLI patch (PR #15274, commit `57d4c307253364344157ecbb0f90f157518bd48c`): preserve the existing package-manager user-agent when reading npm configuration. Published to npm under the `rc` dist-tag as `7.8.25` at 2026-10-28T20:46:41.928Z; the `latest` npm dist-tag still points at `7.8.18`, and `next` at `1.0.8`.

Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.25

### Kilo Code JetBrains plugin v7.2.1-rc.1 — hosted Cloud sessions in Agent Manager (2026-10-28T19:50:51Z)
JetBrains IDE plugin release candidate. Added hosted Kilo Cloud sessions to Agent Manager — Cloud workspaces share the editor chrome of local and worktree sessions (session rows, date groups, badges, busy spinners, refresh from the row menu). Cloud discovery pages through every workspace for a repository, reports the canonical status vocabulary instead of showing healthy workspaces as unknown, and shows the hourly compute price in the workspace header. Fixed: Cloud sessions recover their streams after reconnects without leaving tools running; preparation failures surface sanitized error details; hosted stream ownership survives restarts and transcript subscriptions survive a transiently failed first attachment; large Cloud repos no longer burst the CLI with concurrent workspace status reads; hosted prompts align with the Cloud input contract; session event subscription is established before startup returns so early updates are not missed; compaction runs at the configured threshold and stops compaction loops, and chunked compaction gets the normal output budget; scheduled tasks fire once across processes sharing a data directory; browser and MCP OAuth URLs are restricted to HTTP(S) and the MCP SSE probe is scoped to its own request and redirects; compromised eMudhra certificates blocked. Bundled Kilo CLI pin updated to v7.8.22 (via v7.8.20); commonmark bumped to 0.30.1.

Source: https://github.com/Kilo-Org/kilocode/releases/tag/jetbrains/v7.2.1-rc.1

---

## Qwen Code

### Qwen Code v0.26.3 — Generated UI cards, persistent Workflow mode, 1M-context aliases (2026-10-28T14:36:14Z)
Stable CLI release; npm `@qwen-code/qwen-code` published `0.26.3` at 2026-10-28T14:41:55.426Z. **Highlights:** Generated UI cards keep inputs and state across navigation and split views, show live views after the initial calculation, and are offered only to clients that can render MCP Apps (unsupported clients get an explicit unsupported-client reason); persistent session **Workflow mode** can be enabled with `--workflow-mode on`, `/workflows mode on`, the SDK, or ACP, and workflow switches now reach the CLI sandbox; tool results shrink to remaining headroom before auto-compaction, and `qwen-latest-series-` / `qwen4` aliases are detected as 1M-token-context models; valid XML tool calls are recovered when parameters quote other call markup, malformed blocks are isolated, and quoted examples are not dispatched; ACP and daemon clients keep rewind identity consistent across retries, cancellations, checkpoints, recordings, and notifications while SDK frames preserve subagent identity; `/autofix-pr start` stops when the PR head branch has unpushed commits or uncommitted changes. Other features: `composerVariant simple` for Web Shell; OpenTUI terminals draw the Mods band above the prompt with Mod `ui.render` hooks; archived conversations managed in Settings → Archived conversations (Web Shell); Managed Agent can be embedded opt-in in a Java host's JVM and Spring context; `/verify-pr` gains a failures ledger that rejects findings or blocked verdicts unless failures are attributed to the PR; administrator-driven reclamation and reuse of idle resident CSI Workspaces; `qwen-managed-agent-admin` launcher for offline maintenance commands.

Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3

### Qwen Code Desktop v0.26.3 — session permission rules, Auto approval, shared agent loop (2026-10-28T16:51:11Z)
Desktop release (body ~25.7 KB of PR titles). Key items: `feat(managed): add session permission rules and Auto approval` (PR #15448); `feat(core): add an experimental shared agent loop and run headless on it` (PR #15369); `fix(cli): harden serve token resolution against project env injection` (PR #15228); `fix(cli): align OpenTUI cancellation and retry with Ink` (#15283); `feat(cli): preserve OpenTUI session replay and rewind` (#15384); `feat(cli): capture and restore complete OpenTUI checkpoints` (#15389); `fix(cli): run OpenTUI on private Bun 1.4.4` (#15387); `fix(cli): stop double-counting reasoning tokens in cost estimates` (#15464); `fix(serve): probe X11 display reachability before advertising the native directory picker` (#15434); `feat(core): attribute 千问AI平台 / QwenCloud requests with the source-config header` (#15041). Build/publishing hygiene: managed runtime distribution publishes verified server artifacts to GitHub Releases and OSS without requiring Maven Central (#15782); desktop release preparation resets Git metadata on self-hosted runners before checkout (#15761).

Source: https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.3

### Qwen Code sdk-typescript-v0.1.25 (2026-10-28T16:16:39Z) and v0.26.3-nightly.20261028.ca204559a7 (2026-10-28T22:29:36Z)
TypeScript SDK release published 2026-10-28T16:16:39Z (body ~16 KB of PR titles). Nightly build `0.26.3-nightly.20261028.ca204559a7` published to GitHub at 2026-10-28T22:29:36Z and to npm at 2026-10-28T22:39:15.905Z; **the GitHub release body for this nightly is empty (no changelog published).** npm dist-tags now: `latest` = 0.26.3, `preview` = 0.26.3-preview.0, `nightly` = 0.26.3-nightly.20261028.ca204559a7.

Source: https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.25
Source: https://registry.npmjs.org/@qwen-code/qwen-code

---

## Goose (Block)

### Goose v1.57.0 — HTTPS-enforcing allowlist, caller-supplied session IDs (2026-10-28T19:26:10Z)
Stable release of the active Goose repository (`block/goose` redirects to `aaif-goose/goose`). **Features:** the allowlist now requires HTTPS and validates redirects, blocking on policy failure (PR #12619); callers can supply Goose session IDs (PR #13098). **Fixes:** Linux window icons restored in the desktop app (#13120); OpenRouter resolves variant suffixes like `:free` and `:nitro` to the base model (#12979); `catalog_provider_id` used for vision lookup on custom providers (#12993); the desktop app starts the agent only once after a fork (#13139); the scheduler uses recipe settings in scheduled runs (#13138); voice uses system trust for WebSockets (#13075); MiniJinja render errors are surfaced in custom system prompts (#12794); Claude models are asked for summarized thinking (#13029); code-mode keeps the recipe `final_output` tool for the model (#13102); the CLI can configure an unavailable default provider (#13024); Windows build error fixed (#13081); developer terminates owned shell process trees on cancellation (#12958); ACP fails the session/prompt when a turn ends on an error (#13043); Databricks sends the system prompt as `system` on the MLflow chat route (#13057). **Improvements:** zstd bumped to 0.14.3 for RUSTSEC advisories (#13162); `jsonwebtoken` removed to avoid ignoring its cargo-deny advisories (#13141); cargo-deny failures on main addressed (#13076); `@modelcontextprotocol/sdk` bumped 1.30.0 → 1.32.0 (#13059); ACP client-delegated developer tools removed (#13144). Previous stable was v1.56.0 (2026-10-23T15:49:34Z).

Source: https://github.com/aaif-goose/goose/releases/tag/v1.57.0

---

## OpenCode (SST / anomalyco)

### OpenCode v1.19.5 — TUI worker request failure no longer hangs (2026-10-28T06:17:49Z)
Stable patch on the v1 line: failed TUI worker requests now return an error instead of leaving the caller hanging (PR #54936, contributor @Nowaker). npm `opencode-ai` published `1.19.5` at 2026-10-28T06:17:11.100Z, with `latest` = 1.19.5 and `dev` = 0.0.0-dev-202610280534.

Source: https://github.com/anomalyco/opencode/releases/tag/v1.19.5

### OpenCode process-daemon-v0.3.2 (2026-10-28T16:05:14Z)
Separate tagged release of the OpenCode process daemon, v0.3.2.

Source: https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.3.2

---

## Zed

### Zed v1.26.2 (stable) — ACP defaults scoping, agent-panel crash fix (2026-10-28T15:16:13Z)
**AI features:** improved ACP configuration defaults so they apply only to *new* conversations, preserving session settings when reopening existing conversations (#65850); improved fuzzy searching in agent model and configuration option pickers for Zed Agent and third-party ACP agents, with search preparation kept off the UI thread (#64147); improved OpenCode compatibility when replaying DeepSeek reasoning and disabling thinking for Google models (#65922); thinking controls now explain when thinking cannot be disabled at the selected effort level (#62480). **Bug fixes:** hangs when restoring agent threads with subagents (#65177); a crash in the Agent Panel when mentioning a file whose name contains a line break (#65693); agent authentication overwriting drafts (#65844); agent configuration defaults being saved before acceptance or ignoring the agent's returned value (#65849); duplicated thinking text from OpenAI-compatible providers that send both `reasoning` and `reasoning_content` (#65926); discarding unstaged changes in the Git Panel also discarding staged changes (#65559); file links with line numbers failing to open WSL files on Windows (#66089). Also added Pyrefly as an optional built-in Python language server, DWARF debugging for WebAssembly sources in the JavaScript debugger, an expandable variable tree in debugger hovers, Display P3 support on macOS, and `project_panel.sort_order` = `extension`.

Source: https://github.com/zed-industries/zed/releases/tag/v1.26.2

### Zed v1.27.0-pre (prerelease) — Agent Panel memory, repo-style AI commit messages (2026-10-28T15:18:12Z)
**AI:** improved Agent Panel memory usage by loading tool-call diffs and parsing thread message Markdown only when first viewed rather than at thread load (#65444, #65470); improved AI commit message generation by using the three most recent repository commit messages as style examples (#61528); improved CPU usage and disk reads while the agent is working, especially with long thread histories (#66015). **Fixes:** external agents' tool call locations opening one line below the line the agent reported (#66110); "Zed quit unexpectedly" on macOS `cmd-q` (#66158); Solargraph completions crashing Zed (#66157); WSL file links with line numbers (#66089). Also added Go 1.27 generic-method syntax highlighting, an `on_new_window: "readme"` option, and Git Graph performance/tooltip work.

Source: https://github.com/zed-industries/zed/releases/tag/v1.27.0-pre

---

## Cline

### Cline CLI v3.0.74 — attach-to-running-task, 3-retry cap, MCP-free Gemini keys (2026-10-26T04:03:28Z; surfaced in this window)
CLI release. Opening a task already running in another Cline app now attaches to that run instead of starting a second unstoppable one, and requests waiting on a closed app fail with a clear message instead of hanging. `cline hub status` / `cline doctor` no longer hang on a frozen Hub — the health check times out after 3 s. A turn whose connection drops after the model streamed only reasoning is now retried. **Model requests retry at most 3 times instead of 5.** Kimi K3 now gets max reasoning for Extra High and Max instead of an unsupported `xhigh` setting. Gemini API keys (`gemini` provider) no longer send native Google Search — free-tier keys failed every turn with a 429 on Gemini 3+, and on Gemini 2.x every Cline tool was dropped. Auto-compaction no longer runs for models with unknown context limits and no longer re-runs every few tool calls. `ask_question` continues after an option pick and rejects empty answers (an attachment-only answer counts); `run_commands` with an empty command list now errors instead of silently succeeding, with PowerShell-specific guidance on quote escaping and confirming recursive deletes; plugin slash commands run in the active session; compiled CLI binaries embed plugins and serve the dashboard from binary resources; ACP provider/account options moved under the right config categories. Model catalog refreshed: adds Liquid Inference and Munito AI, drops CrofAI, iFlow and Llama; free list adds Reflection Beam, Nemotron 3.5 Lightning, Laguna S 2.1 and drops Mimo V2.6 Flash and Muse Spark 1.3 Contributor; ClinePass now defaults to Kimi K3.1 Pro and adds MiniMax M3.1 Flash and DeepSeek V4.1 Flash 1017; default models change for 56 other providers.

Source: https://github.com/cline/cline/releases/tag/cli-v3.0.74

### Cline desktop v0.0.49 (2026-10-26T04:49:34Z) and Cline SDK v0.2.0 (2026-10-26T03:34:08Z)
Both released just before the previous run's window close and **not covered in the prior findings file**. Bodies exist (desktop ~4.7 KB, SDK ~4.4 KB) but the GitHub API rate limit was exhausted before their content could be extracted; contents are therefore **not summarized here** — flagged rather than guessed.

Source: https://github.com/cline/cline/releases/tag/desktop-v0.0.49
Source: https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.0

---

## GitHub Copilot CLI

### Copilot CLI v1.0.105 (stable) — Fusion High/Max selectable in long-context sessions (2026-10-28T00:44:43Z)
*Already known from the prior run's file, but the release-page body was confirmed here:* "Selecting Copilot Fusion High or Max in `/model` now works from long-context sessions". Commit `8f18becc073481aeab76c83bc38d6db8c3d6c85a` (2026-10-27); npm `@github/copilot` published `1.0.105` at 2026-10-28T00:44:26.688Z.

Source: https://github.com/github/copilot-cli/releases/tag/v1.0.105

### Copilot CLI unstable build 1.0.102-0.unstable.r40711449110.g5767f52 (2026-10-28T17:06:36.365Z)
New nightly/unstable npm publish on the `unstable` dist-tag on 2026-10-28T17:06:36.365Z — a rolling developer build with no published changelog. npm dist-tags: `latest` = 1.0.105, `prerelease` = 1.0.105-1, `unstable` = 1.0.102-0.unstable.r40711449110.g5767f52.

Source: https://registry.npmjs.org/@github/copilot

---

## Crush (charmbracelet)

### Crush nightly — rolling build (2026-10-29T00:51:25Z)
A new `nightly` prerelease tag was published 2026-10-29T00:51:25Z. **The release body contains no changelog** — only the standard sigstore/cosign artifact-verification instructions (download `checksums.txt` and `checksums.txt.sigstore.json`, verify with `cosign verify-blob`, then `sha256sum --ignore-missing -c checksums.txt`). Latest stable remains v0.98.2 (2026-10-23T15:23:33Z), so Crush is still on a nightly-only cadence with no stable cut in this window.

Source: https://github.com/charmbracelet/crush/releases/tag/nightly

---

## Amp (Sourcegraph)

### Amp npm nightlies — four consecutive publishes across 2026-10-28/29
`@sourcegraph/amp` `latest` moved to `0.0.1793232065-gec0ec2`, published 2026-10-29T00:27:18.728Z. Earlier builds in the window: `0.0.1793217669-gb7b7f6` (2026-10-28T20:33:26.463Z), `0.0.1793203246-g5eab6d` (2026-10-28T16:40:01.653Z), `0.0.1793199090-gd59795` (2026-10-28T15:23:54.613Z). The `next` dist-tag still points at `0.0.1778732631-gc5875c-singleexe`. No feature notes are published for these nightly builds.

Source: https://registry.npmjs.org/@sourcegraph/amp

---

## Claude Code (Anthropic) — no new release in this window

**No new Claude Code release was published between 2026-10-28T01:30Z and 2026-10-29T01:30Z.** npm `@anthropic-ai/claude-code` `latest`/`next` remain **2.1.312**, published 2026-10-27T18:36:10.160Z (GitHub release tag v2.1.312, published 2026-10-27T20:24:20Z). Note the npm `stable` dist-tag lags at **2.1.308** (2026-10-22T04:19:48.902Z) — a four-version skew between `stable` and `latest`. Prior releases in this train: 2.1.311 (2026-10-26T19:47:57.395Z), 2.1.310 (2026-10-23T21:20:46.540Z), 2.1.309 (2026-10-22T20:34:13.713Z).

Source: https://registry.npmjs.org/@anthropic-ai/claude-code
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.312

---

## Gemini CLI (Google) — no new release in this window

**No new Gemini CLI release was published between 2026-10-28T01:30Z and 2026-10-29T01:30Z.** npm `@google/gemini-cli` `latest` remains **0.66.0** (published 2026-10-27T20:30:04.263Z); `preview` = 0.67.0-preview.0 (2026-10-27T20:12:24.426Z); `nightly` = 0.67.0-nightly.20261028.gfa5c17365 (2026-10-28T01:32:01.098Z) — the last nightly of 2026-10-28 was published at 01:32Z, just inside the prior run's window, and no 2026-10-29 nightly had appeared as of collection. The 0.66.0 changelog itself was re-verified (28 PRs): ROADMAP update dropping the outdated 2025 roadmap, synchronized UI output with isolated spinner rendering, `openDiff` Windows argument formatting/quoting, `formatDuration` unit rounding, disabling interactive credential and SSH prompts in `getSafeGitEnv`, resolving settings placeholders after `.env` load, hardened `SKILL.md` frontmatter parsing for single-line descriptions, a banner noting Gemini CLI is not optimized for Gemini 4, reset of slash-command conflict dedupe, active-binary update verification to prevent PATH-shadowing false success, `keys` array support in `keybindings.json`, termination-signal forwarding from bootstrap parent to child, terminal scrollback preservation during viewport refreshes, `StringDecoder` decoding of streamed Node HTTP chunks, migration from `gsutil` to `gcloud storage`, preservation of user-level `~/.gitconfig`, false-positive reduction in `isAuthenticationError`, and opt-in private network endpoints for MCP OAuth flows.

Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0
Source: https://registry.npmjs.org/@google/gemini-cli

---

## Claude Code / Codex / other prior-run items re-verified as unchanged

- **Codex CLI rust-v0.165.0** (stable, 2026-10-27T20:09:38Z) — no new stable cut in this window; npm `latest` still `0.165.0`.
- **OpenCode v2.2.0** (2026-10-27T09:04:44Z) — remains the notable v2 feature release (Desktop plugins, refreshed desktop app, prompt-cache TTLs, `@opencode/ai` root switching to the Promise API, OpenCode GitHub Action removal, TUI plugins requiring OpenTUI 0.7); no v2.2.1 in this window.
- **Antigravity CLI 1.4.8** (2026-10-27T07:10:37Z) — superseded by 1.4.9 on 2026-10-28.

---

## Market / announcement context (1 usable search)

- **OpenAI named a Leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents**, with Codex recognized for innovation and enterprise-scale deployment. Corroborating coverage indicates OpenAI, GitHub, Anthropic and Cursor lead the quadrant, and that the 2026 criteria shift from code-generation quality toward orchestration of development tasks across the full software-delivery life cycle. This is a vendor-page claim; the underlying Gartner MQ document was not fetched directly.

Source: https://openai.com/index/gartner-2026-agentic-coding-leader/
Source: https://www.gartner.com/en/articles/enterprise-ai-coding-agent-market

- **Akamai launched Akamai Inference and an Agent Sandbox (beta)** on 2026-10-28, per a third-party agent-news digest — relevant as infrastructure-side agent containment, not a CLI/desktop assistant release. Sourced from an aggregator (aiagentstore.ai), not the Akamai press release.

Source: https://aiagentstore.ai/ai-agent-news/today

---

## Gaps / coverage notes

- **GitHub unauthenticated API rate limit (60/hr) was exhausted at 2026-10-29T01:33Z** (reset epoch 1793240965). All API-sourced releases above were collected before exhaustion except where noted; late items (Cline desktop v0.0.49, Cline SDK v0.2.0 bodies) could not be expanded and are flagged as unsummarized rather than guessed.
- **3 of 4 web searches were degraded**: DuckDuckGo returned bot-detection challenges on two queries; the two successful searches returned mostly SEO listicles and one third-party AI-agent-news digest. No high-signal company announcement beyond the OpenAI/Gartner item was found in this window.
- **No new launches** of a previously unseen agentic CLI or desktop assistant were identified in this window; the release train remains dominated by Claude Code, Codex, Gemini CLI, Copilot CLI, Antigravity, Qwen Code, Kilo Code, Zed, OpenCode, Goose and Cline.
- Aider (last release v0.86.0, 2025-08-09), Amazon Q Developer CLI, Roo Code, Continue and Cursor CLI show **no new releases in this window**; Amazon Q's npm package `@amazon-q/cli` returns "Not found" and the `crush` npm package on the public registry is an unrelated 2014 package — Crush is distributed via GitHub releases, not that npm name.

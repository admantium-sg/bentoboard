# Findings — Releases & Announcements — 2026-10-31

**Coverage window:** 2026-10-30T01:28Z → 2026-10-31T01:28Z (UTC).
**Prior report (Oct 29–30 window, not repeated here):** `findings_agentic-cli-tools_releases_2026-10-30.md`.
**Method note:** GitHub REST API was rate-limited (`API rate limit exceeded for 2.245.128.14`, core remaining 0), so GitHub Releases **Atom feeds** (`https://github.com/<owner>/<repo>/releases.atom`) were used instead, and npm registry timestamps were used to separate npm publish time from GitHub publish time. Where the two differ, both are given.

---

## OpenCode v2.2.3 — "Use Claude Code in OpenCode", faster long sessions in Desktop (Oct 30, 09:55Z)
- GitHub published 2026-10-30T09:55:45Z (Atom entry later re-listed with `updated` 2026-10-30T14:48:05Z); npm `@opencode/cli` 2.2.3 published 2026-10-30T09:53:57Z. `latest` moved to 2.2.3.
- **Use Claude Code in OpenCode**: install Claude Code, run `claude auth login`, then pick **Claude Agent** in `/connect` to use the Claude Code login and its models (#58782).
- **Faster Long Sessions in Desktop**: streaming replies and long conversations do much less rendering work (#60489, #60521, #60513, #60481).
- **Desktop Stability Fixes**: side-panel tabs, repeated "Session not found" toasts, and **Open file** over HTTP (#60430, #60436, #60459, #60462).
- **Breaking changes**: TUI plugins require **OpenTUI 0.8** (`@opencode/plugin` needs `@opentui/core` / `@opentui/solid` ≥ 0.8.0; custom `RenderContext` must implement `clock` and `onAnimationTick`) (#60385). Managed policy: `integration.use` now covers integrations only, with new `mcp.use` and `skill.use` keys.
- https://github.com/anomalyco/opencode/releases/tag/v2.2.3

## OpenCode v2.2.4 — persistent Desktop terminals and opt-in interactive artifacts (Oct 30, 16:59Z)
- GitHub published 2026-10-30T16:59:08Z; npm `@opencode/cli` 2.2.4 published 2026-10-30T16:53:18Z.
- **Persistent Desktop Terminals**: terminals now belong to the session, survive server restarts with scrollback, stay in sync with the TUI and other windows; renamed terminals keep names across restarts (#60346).
- **Publish Interactive Artifacts**: enable `"experimental": { "artifacts": true }` in `opencode.json` so agents can publish/update/serve HTML or static artifacts via the built-in local provider or plugin-provided storage (#60351).
- **Guided Claude Agent Setup**: provider picker offers **Claude Agent** to copy `claude auth login`, install Claude Code and verify the connection before model selection (#60603).
- **Choose a Base Branch Quickly**: `⌘⌥.` (macOS) / `Ctrl+Alt+.` (Windows, Linux) while creating a worktree; also in the command palette and Settings › Shortcuts (#60579).
- Core: artifact tools `artifact_create` / `artifact_read` / `artifact_update` / `artifact_delete` with a built-in local static-file provider (#60351); enabled schedules run under `opencode serve` with multi-process coordination so a schedule fires once, still opt-in via `experimental.schedules` (#60478); OpenCode Go limits raised for DeepSeek V4.1 Flash (#60625); user/project/remote config can override Console-supplied provider names, limits, variants, settings and headers.
- https://github.com/anomalyco/opencode/releases/tag/v2.2.4

## OpenCode v2.2.5 — worktree/shell shortcuts and percentage-based compaction buffer (Oct 30, 23:17Z)
- GitHub published 2026-10-30T23:17:23Z; npm `@opencode/cli` 2.2.5 published 2026-10-30T23:14:07Z. `latest` = 2.2.5.
- **Worktree and Shell Mode Shortcuts**: `⌘⌥O` / `Ctrl+Alt+O` choose a worktree, `⌘⌥B` / `Ctrl+Alt+B` choose its base branch, `⌘⇧X` / `Ctrl+Shift+X` toggles shell mode in the composer (#60713).
- **Send Quotes From the Comment Popup**: hold `⌘`/`Ctrl` to turn the checkmark into send, or press `⌘Enter` / `Ctrl+Enter`, to send just that quote and comment and leave the rest of the composer untouched (#60640).
- **Percentage Compaction Buffer**: `"compaction": { "buffer": "20%" }` in `opencode.json` keeps a share of each model's context window free, so one setting fits small and large windows; token counts still work (#60647).
- Core: `compaction.buffer` accepts a percentage string in addition to a token count (#60647); a `read` miss names the missing folder and the nearest existing one (#60688); an `edit` that cannot find `oldString` shows the file's closest lines or says the change is already there (#60689); a tool actually named `bash` now runs as `shell` instead of failing, with the same permissions (a plugin tool named `bash` still wins) (#60687); MCP servers sending stdio messages larger than 10 MiB are no longer disconnected and large messages read much faster (#60694).
- https://github.com/anomalyco/opencode/releases/tag/v2.2.5

## Claude Code v2.1.316 — gateway policy/budget controls, `ultrathink` switch-off, Opus 4.8 fast-mode deprecation (Oct 31, 00:42Z npm / 01:01Z GitHub)
- npm `@anthropic-ai/claude-code` 2.1.316 published 2026-10-31T00:42:05.743Z; GitHub release published 2026-10-31T01:01:35Z. dist-tags after publish: `latest` = `next` = 2.1.316, `stable` = 2.1.309. Both timestamps fall inside the window.
- **Added**: `CLAUDE_CODE_DISABLE_ULTRATHINK` (turns the `ultrathink` keyword off); `CLAUDE_CODE_SUBAGENT_EFFORT` (sets the effort level subagents run at instead of inheriting the session's); `CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP` (keeps system cross-certificates that certify each other in a loop, for private CAs); pooled group budgets on the Claude apps gateway — one monthly budget shared by a group's members on top of each member's own limit, set with `pooled_budget` on the spend-limits admin API; `managed.policy_mode: layered` on the Claude apps gateway so every matching policy applies, merged over the ones below it rather than only the first; `guardrail.input_tagging` on Claude apps gateway Bedrock upstreams, wrapping prompts in the input tags an Amazon Bedrock guardrail's prompt-attack filter needs (`all_messages_and_system` also tags the system prompt).
- **Deprecated**: fast mode for **Opus 4.8** as of October 30, 2026; it will be **removed on November 30, 2026**, after which fast-mode requests on Opus 4.8 return an error and do **not** fall back to standard Opus 4.8 — migration guidance is to Opus 5.5.
- **Fixed** (selection): shell commands left running on macOS/Linux when Claude Code exits by itself (refused credentials, archived cloud session); bash aliases with line breaks and functions whose names start with a dash being garbled in the Bash tool; bash scripts from the Bash tool stopping after the first command when `SHELLOPTS` is exported; PowerShell hooks not blocking on exit code 2 when the command starts with a type cast, `param`, `using` or an attribute; compressed responses cut off or corrupted causing network requests to hang; `sonnet`/`opus`/`haiku` on Vertex AI and Bedrock erroring mid-session instead of falling back to an older model; the gateway not checking every named model against `availableModels`/`deniedModels`/`models`; `claude auth login` refusing to run where managed settings require the gateway; `--restricted` sessions uploading files from outside the working directories when a Read allow rule covered them; prompts with invisible characters needing a second Enter; sub-agents inheriting a parent sub-agent's model jumping back to the main model; a managed `autoMode.allow` list without `"$defaults"` getting built-in exceptions back; cloud sessions/scheduled tasks not marked failed when auto mode stopped a turn for lack of a safety verdict; `claude -p` not saying why auto mode stopped a turn; `CLAUDE_CODE_AUTO_MODE_SERVER=1` ignored in host apps (e.g. Claude Desktop) behind a proxy or LLM gateway with experimental betas off; plugin MCP `headersHelper` scripts receiving a corrupted `CLAUDE_PLUGIN_ROOT`/server URL when a credential-named env var was set to a switch value such as `1`; SDK `register_repo_root` not loading an out-of-directory CLAUDE.md; Artifact tool showing `?` for `self`-level database access rules; `/model <id>` not warning for unrecognized models (auto-compact assumes 200K context); Grep/Glob never returning on Windows when the search process is killed at timeout but does not exit; `/diff` on large repos running one fewer full-repo git command per refresh.
- **Changed**: server-managed settings for Team/Enterprise logins now apply without an approval prompt and an unverifiable stored copy is refused; auto mode no longer removes the built-in rule on scheduled-task prompts when `autoMode.allow` lacks `"$defaults"`.
- **VSCode**: added gateway sign-in from the chat panel with no terminal needed; `ultrathink` now runs its turn at `xhigh` effort and shows in a rainbow in the chat box; fixed the missing Effort slider / Ultracode switch / model name for `[1m]`-tagged models such as `opus[1m]`.
- **Claude Desktop / cloud sessions**: added a form card so an MCP server's form request can be filled in or declined instead of being canceled unseen; added a "Catching up…" line when switching back to a cloud/Remote Control session; Enterprise members can add and delete their own cloud network secrets; Changes-pane note is now a badge beside the branch name; fixed Files-pane results showing `../..` paths after a directory change.
- **Claude Tag (Slack)**: fixed Claude refusing to edit/append a canvas it made in a Slack channel once the canvas was also shared to another channel or a DM; fixed untagged replies going unanswered in a Slack Connect thread; changed the channel "Respond automatically" switch to a "How Claude participates" choice.
- https://github.com/anthropics/claude-code/releases/tag/v2.1.316
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- Related: **Claude Code 2.1.315** was published to npm only at 2026-10-30T21:05:24.080Z (inside the window) with **no GitHub release and no CHANGELOG.md section** — its contents cannot be derived from any public changelog.

## Codex CLI rust-v0.167.0-alpha.1 — alpha cut, no changelog (Oct 30, 21:47Z)
- GitHub published 2026-10-30T21:47:25Z. The release body contains **only the line "Release 0.167.0-alpha.1" — no changelog**.
- The npm package `@openai/codex` has **no 0.167.x version yet** (registry `modified` 2026-10-29T20:15:16Z); `latest` remains 0.166.0, `alpha` remains 0.166.0-alpha.6.
- https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.1

## Antigravity CLI 1.4.11 — hook termination behaviour and `finished_reason` in JSON output (Oct 30, 05:55Z)
- GitHub published 2026-10-30T05:55:46Z.
- Added a billing model choice after Google Cloud sign-in (Gemini subscription vs Pay As You Go).
- Added `terminationBehavior` to `PreInvocation` hooks: returning `"terminate"` stops the turn before the model is called (e.g. to block a prompt containing sensitive data); hooks can inject an `errorMessage` whose `userMessage` is shown to the user without being sent to the model, and a `-p` run then exits non-zero.
- Added a **`finished_reason`** field to `--output-format json` and `stream-json` runs: `print_timeout` (partial answer after `--print-timeout`), `interrupted` (run cancelled, e.g. `Ctrl+C`), `error` (other failure); omitted when the turn finishes normally.
- Improved the `/plugin` Discover tab for long shelves (first 6 plugins + "⋯ N more — enter to show", `Ctrl+E` expand/collapse, `[` / `]` shelf navigation).
- Fixed `agy plugin import claude` printing "No claude extensions found." — it now reads Claude Code's installed-plugin list, skipping plugins disabled in Claude Code settings and project-only installs, and imported plugins keep their remote MCP servers (`"type": "http"` with `url`).
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.11

## Antigravity CLI 1.4.12 — optional API keys for plugins and Markdown table rendering fix (Oct 30, 21:56Z)
- GitHub published 2026-10-30T21:56:07Z.
- Added `"optional": true` for API key providers in a plugin's `auth.json`: when the key is not set, the plugin's commands see the variable as unset and make unauthenticated requests at the free rate limit instead of failing with `401` or asking to sign in.
- Fixed Markdown tables in long streaming replies leaving misaligned borders and repeated text in terminal scrollback — a table's rows now stay in the live view until the table is complete, so they reach scrollback with final column widths.
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.12

## Qwen Code cua-driver-rs v0.27.0 — prebuilt CUA driver binaries (Oct 30, 06:32Z)
- GitHub published 2026-10-30T06:32:30Z. Prebuilt binaries vendored under `packages/cua-driver`.
- **macOS**: codesigned + notarized universal binary + `QwenCuaDriver.app`. **Linux**: unsigned (x86_64 + arm64, glibc 2.31 floor). **Windows**: unsigned UIAccess worker + native SDK payload (x86_64 + arm64) — deployments must sign and trust the worker on the target machine before UIAccess activation.
- The same workflow publishes `@qwen-code/cua-sdk` after a clean install against these assets, and the same-version browser SDK plus `@qwen-code/node-repl-mcp` after MCP protocol smoke tests.
- Env flags: `CUA_DRIVER_RS_COORDINATE_SPACE=1` (default 0) enables relative coordinates, optional `CUA_DRIVER_RS_COORDINATE_SCALE=1000`; `MCP_MODEL_PAYLOAD_FILTER=1` (default off) enables textual MCP payload filtering on affected model API routes.
- Also includes PR #14944 (keep review's `gh` reads machine-readable under forced colour).
- https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs%20v0.27.0

## Factory Droid CLI 1.1.0 / Desktop 1.1.0 — doctor install checks, session file drops, public audit API (Oct 30, 23:47Z)
- npm `@factory/cli` 1.1.0 published 2026-10-30T23:47:30.214Z (`latest` = 1.1.0; previous 1.0.0 was 2026-10-29T22:15:19.193Z). Official changelog entry is headed **"CLI v1.1.0 · Desktop v1.1.0 (October 30, 2026)"** — "Droid doctor install checks, session file drops, a public audit API, and onboarding fixes". The npm tarball for 1.1.0 is byte-identical in file layout to 1.0.0 (only `version` and the platform `optionalDependencies` versions changed), so the changelog below is the authoritative source.
- **New features**: starter ideas that need no GitHub now appear before you connect GitHub; **organization audit API** — enterprise owners can poll organization audit events through a documented public endpoint; the `doctor` command now lists every Droid install on your PATH with its version; Linux and ChromeOS users can continue to Factory in the browser after onboarding; dragging files over a session dims the pane and animates them into the composer.
- **Improvements**: Droid tags people in Slack only when asked and leaves names out when unsure.
- **Bug fixes**: a member's email folds under their name when the members table is narrow; a Markdown checklist flows and wraps inline instead of splitting into columns; a failed payment during onboarding keeps billing details and shows what went wrong.
- https://docs.factory.com/changelog/release-notes.md
- https://registry.npmjs.org/@factory/cli

## Crush nightly — verification instructions only, no change notes (Oct 31, 00:42Z)
- GitHub published 2026-10-31T00:42:39Z. The release body contains **only artifact-verification instructions and a Charm banner — no feature or change notes at all**, so nothing about the nightly's contents can be derived from the release itself.
- Verification URLs used in the body: `https://github.com/charmbracelet/crush/releases/download/nightly/checksums.txt`, `https://github.com/charmbracelet/crush/releases/download/nightly/checksums.txt.sigstore.json`, `https://github.com/sigstore/cosign`.
- https://github.com/charmbracelet/crush/releases/tag/nightly
- Note: **Crush v0.99.0** ("Catwalk v3, hooks!") was already covered in the prior report (GitHub published 2026-10-29T16:25:08Z; npm `@charmland/crush` 0.99.0 published 2026-10-29T16:33:07.603Z). Its Atom entry carries an `updated` timestamp of 2026-10-30T10:00:05Z, i.e. the release record was edited during this window, but the release itself is pre-window.

## Cline desktop-nightly-20261030214224 — Desktop artifact access for UX verification reports (Oct 30, 21:21Z)
- GitHub published 2026-10-30T21:21:13Z. Release body is a single line: "Render UX verification reports with existing Desktop artifact access".
- https://github.com/cline/cline/releases/tag/desktop-nightly-20261030214224

## Zed nightly — search focus/action context fix (Oct 30, 12:27Z) and collab-staging (Oct 30, 15:09Z)
- `nightly: search: Fix project search focus/action context (#50882)` published 2026-10-30T12:27:35Z — closes #45114; the Project Search buttons now use local click handlers instead of dispatching window actions, with duplicated logic cleaned up.
- `collab-staging` published 2026-10-30T15:09:02Z — body is one line: "gpui_linux: Replace kde-blur protocol with ext-background-effect prot…".
- https://github.com/zed-industries/zed/releases

## Hermes Agent v0.22.5+canary.20261030T064851Z — canary build (Oct 30, 06:48Z)
- GitHub published 2026-10-30T06:48:52Z. The release body is a single line: "Hermes Agent canary 20261030T064851Z" — no changelog.
- https://github.com/NousResearch/hermes-agent/releases

## Gemini CLI v0.67.0-nightly.20261031.g6814e00d6 — nightly (Oct 31, 01:19Z)
- GitHub published 2026-10-31T01:19:32Z; npm `@google/gemini-cli` published 2026-10-31T01:23:06.869Z under the `nightly` and `staging-tmp` dist-tags. Both inside the window (window closes 01:28Z).
- Nightly only — `latest` remains 0.66.0 and `preview` remains 0.67.0-preview.0.
- Changelog is a PR list: honor `.git/info/exclude` and `core.excludesFile` in the shadow repo (#30034); flush the pending SSE event buffer at stream EOF in `CodeAssistServer` (#30050); handle Windows libuv zero-device stat reporting in `readSecureFileBuffer` (#30044); serialize concurrent extension installs with a per-extension lock (#29036).
- https://github.com/google-gemini/gemini-cli/releases

## Amp (Sourcegraph) — rolling npm builds + podcast episode (Oct 30, 14:34Z)
- npm `@sourcegraph/amp` published **nine rolling builds inside the window**: 2026-10-30T04:23:39Z, 08:22:25Z, 09:59:42Z, 11:12:06Z, 12:57:46Z, 16:24:40Z, 20:28:16Z and 2026-10-31T00:22:52Z, plus the 2026-10-30T00:25:31Z build just after the window opened. `latest` = **0.0.1793404845-g2958dd** (published 2026-10-31T00:22:52.611Z). **No changelog is attached to any of them**, consistent with prior reports.
- Podcast: **"Culture Stops Slop" — Raising an Agent, Season 2 Episode 7**, `pubDate` Fri, 30 Oct 2026 14:34:00 GMT (audio `Raising_An_Agent_S2E7`). Note the ampcode.com/news index renders this as "Raising an Agent Season 2 Episode 6 / Oct 30, 2026" — the news index appears to lag by one episode relative to the podcast feed and the episode page.
- https://registry.npmjs.org/@sourcegraph/amp
- https://ampcode.com/podcast/season-02/episode-07
- https://ampcode.com/news

---

## Announcements (no code release, but vendor-level news inside the window)

## Microsoft Security Research — "Inside a malicious Claude Code-branded extension and its persistent SSH backdoor" (Oct 30)
- Microsoft Security Blog post dated **October 30** (11 min read), by Microsoft Security Research; tags include Supply chain attack, AI threats, Threats intelligence.
- Technical findings: the malicious Cursor-marketplace packages were **never published or distributed from Microsoft Visual Studio Marketplace or from npm `@anthropic-ai/claude-code`**, which were not affected. Anthropic confirmed to Microsoft that their systems were not compromised and that they did not develop the malicious package. All evidence suggests the incident is limited to the Cursor marketplace.
- Attack chain reconstructed from the injected JavaScript: module loading + host/user reconnaissance → appending an embedded SSH public key and attempting to enable the local SSH service → an embedded tunnel identity authenticating an outbound connection that requests **reverse SSH forwarding** to the workstation's SSH port (Protocol Tunneling, MITRE ATT&CK T1572) → platform-specific startup persistence scripts → a delayed callback reporting collected host details and selected environment-variable names. Successful remote access depends on host privileges, SSH configuration and the attacker's server, but the loader may still write keys and persistence artifacts even when the tunnel fails.
- Guidance: identify systems that installed or auto-updated the affected versions, preserve evidence, remove confirmed malicious artifacts, review endpoint/network telemetry, rotate credentials or revoke sessions; Microsoft Defender XDR detections, threat analytics and advanced-hunting queries are included behind coverage/validation gates.
- https://www.microsoft.com/en-us/security/blog/2026/10/30/inside-malicious-claude-code-branded-cursor-extension-persistent-ssh-backdoor/

## Anthropic's denial of the Cursor-marketplace extension compromise (Oct 30, reported)
- Anthropic denied allegations that a malicious version of the official Claude Code extension published to Cursor's marketplace was linked to any compromise of its own systems, saying "We're working with Cursor on this incident, but it wasn't a compromise of Anthropic's systems." The statement was issued after prominent security researchers alleged the extension — which reportedly infected up to 5,000 developers — was uploaded to Cursor's marketplace following a breach at "Claudemaker Towers".
- Reported by The Register on 2026-10-30 (https://www.theregister.com/cyber-crime/2026/10/30/anthropic-that-claude-code-extension-compromise-couldnt-be-us/5306682), with same-day coverage from Wired, BleepingComputer, Sophos, BankInfoSecurity and The Hacker News, plus high-traffic Hacker News threads (phorion.io post ~776 points, doublepulsar.com post ~399 points, cursor.com security notice post ~12 points) inside the window.
- Context: the Cursor security notice itself is dated **Oct 29** (pre-window) and the Microsoft analysis, Anthropic denial and press coverage are in-window.

## Factory acquires Typedef — data context for autonomous software engineering (Oct 30)
- Factory announcement dated **October 30, 2026** (Factory Team, ~2 minute read, Company category): "Today we're excited to announce that Typedef is joining Factory to bring deeper data context to autonomous software engineering." The framing is that as enterprises put Droids to work across their software systems, the company needs richer data context.
- https://factory.ai/news/factory-acquires-typedef-bringing-data-context-to-the-software-factory

## OpenAI — two in-window posts (Oct 30)
- **"Community safety report and new protections for teens"** — published Fri, 30 Oct 2026 09:00:00 GMT. https://openai.com/index/community-safety-report-and-new-protections-for-teens
- **"Making it easier for websites to express AI training preferences"** — published Fri, 30 Oct 2026 09:30:00 GMT. https://openai.com/index/helping-websites-express-ai-training-preferences
- Excluded as pre-window: **"Fair use benefits everyone"** (Fri, 30 Oct 2026 00:00:00 GMT — before the 01:28Z window start).
- Note: openai.com index pages return **HTTP 403** to plain curl, so only RSS timestamps and titles were verifiable; full body text could not be extracted.
- Source: https://openai.com/news/rss.xml

---

## Verified quiet (checked, no release in window)

- **GitHub Copilot CLI** — no release in window. Latest stable `1.0.105` (2026-10-28T00:44:43Z); last npm unstable build `1.0.102-0.unstable.r40949665530.gab1eef5` at 2026-10-29T22:22:33.789Z (pre-window).
- **Kilo Code** — no release in window; latest `v7.8.25` (2026-10-28T20:51:19Z) and `JetBrains 7.2.1-rc.1` (2026-10-28T20:00:10Z).
- **block/goose** — no release in window; latest GitHub release artifacts dated 2026-10-27T17:47:18Z.
- **Roo Code** — no release in window; latest `Release v3.54.0` (2026-05-15T17:52:24Z).
- **Aider** — no release in window; latest `v0.86.3.dev` (2026-02-12T00:42:25Z).
- **microsoft/vscode-copilot-chat** — no release in window; latest `v0.43.2026040705` (2026-04-07T11:12:30Z).
- **Cursor / Cursor CLI** — no release in window; `cursor.com/changelog` newest entry remains Oct 20, 2026 (Agent SDK: `npx @cursor/agent-sdk init ./my-bot`, `agent-sdk dev/deploy/validate/info/eval`, `agent-sdk github replay`). The Cursor security notice is dated Oct 29 (pre-window).
- **Devin / Devin CLI** — no release in window; `devin.ai/changelog` newest entry remains October 26, 2026.
- **Warp** — no release in window; `warp.dev/blog` newest post is Oct 29, 2026 (Engineering).
- **Anthropic (blog/announcements)** — no in-window post; `anthropic.com/news` newest item remains Oct 28, 2026 ("AI for Science expands to foundations and research institutions").
- **Qwen Code CLI proper** — `Release v0.26.4` published 2026-10-29T16:02:46Z and `v0.26.4-nightly.20261029.70be140e14` at 2026-10-29T23:19:07Z, both pre-window; only the `cua-driver-rs` component release falls inside the window.
- **Gemini CLI nightly 20261030** — `v0.67.0-nightly.20261030.gb633c0703` published 2026-10-30T01:22:17Z (GitHub) / 01:25:52Z (npm), just before the window start; already covered in the prior report.
- **Factory CLI 1.0.0 / Droid 1.0 announcement** — Oct 29, pre-window, covered in the prior report.

---

## Notes / limitations

- GitHub REST API was unusable (rate limit exhausted for 2.245.128.14, reset ~1793413767); all GitHub release data comes from Atom feeds, whose `<updated>` reflects the release's last edit — GitHub publication time can therefore differ from the Atom timestamp (noted explicitly where it mattered, e.g. OpenCode v2.2.3 and Crush v0.99.0).
- npm registry timestamps were used as the authoritative publish time for `@openai/codex`, `@opencode/cli`, `@anthropic-ai/claude-code`, `@factory/cli`, `@google/gemini-cli`, `@sourcegraph/amp` and `@charmland/crush`.
- OpenCode also published continuous `0.0.0-dev-*` npm builds through the window (e.g. dev-289 at 02:18Z through dev-413 as `dev` dist-tag); these are pre-release noise and are not itemized.
- `factory.ai/changelog` and `docs.factory.ai/changelog` are 404; Factory's changelog is served from `docs.factory.com/changelog/release-notes.md`, and `docs.factory.ai` requires a Vercel login for page content (llms.txt is public).
- `cursor.com/changelog/cli`, `docs.devin.ai/changelog/cli` and `docs.devin.ai/release-notes/cli` return 404; Devin's CLI changelog lives at `devin.ai/changelog`.
- `openai.com/index/*` pages return HTTP 403 to curl; OpenAI publication times were taken from `https://openai.com/news/rss.xml`.

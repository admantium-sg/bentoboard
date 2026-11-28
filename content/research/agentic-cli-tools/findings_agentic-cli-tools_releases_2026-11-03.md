# Findings — Task 1: Releases / commands / features / company announcements for agentic CLI tools & desktop AI assistants

**Run date:** 2026-11-03
**Coverage window:** 2026-11-02T01:28Z → 2026-11-03T01:28Z
**Method:** GitHub Releases API, GitHub tags/compare endpoints, npm registry time maps, npm search API (date-sorted), GitHub repo search (new repos), vendor RSS/Atom feeds, GitHub changelog RSS. 3 web_search calls (1 blocked, 1 empty, 1 listicle-only), 0 web_fetch calls — all evidence via direct HTTP GET.

---

## Summary table

| Tool | In-window release? | Tag / version | Published (UTC) |
|---|---|---|---|
| Claude Code | ✅ Yes | `v2.1.317` | npm 2026-11-02T23:57:53Z / GitHub 2026-11-03T01:25:46Z |
| GitHub Copilot CLI | ✅ Yes (3 builds) | `v1.0.106-3`, `v1.0.106-4`, `v1.0.106-5` | 2026-11-02T20:08:22Z / 22:59:38Z / 2026-11-03T01:13:23Z |
| Qwen Code | ✅ Yes | `v0.26.6` + `sdk-typescript-v0.1.27` + nightly | 2026-11-02T18:22:40Z / 19:09:07Z / 22:31:13Z |
| Factory Droid CLI | ✅ Yes | `droid@1.2.0` / `@factory/cli@1.2.0` | 2026-11-03T01:14:52Z / 01:14:58Z |
| Hermes Agent (Nous) | ✅ Yes | `v0.22.6` | GitHub 2026-11-02T17:18:36Z / npm 23:35:43Z |
| oh-my-pi (Pi) | ✅ Yes | `v18.16.0` | 2026-11-02T19:49:20Z |
| Atomic | ✅ Yes | `0.9.68` (+ `0.9.67` 22:33:09Z) | 2026-11-03T00:55:06Z |
| Gemini CLI | ⚠️ Nightly only | `v0.67.0-nightly.20261103.g0ac57c029` | GitHub 2026-11-03T01:18:35Z / npm 01:25:09Z |
| Crush (Charm) | ⚠️ Nightly only | `nightly` rolling tag | 2026-11-03T00:36:08Z |
| Amp (Sourcegraph) | ⚠️ Rolling dev builds only | `0.0.1793664053-ga6248e` (latest) | 2026-11-03T00:23:03Z |
| Zed | ⚠️ Rolling nightly/collab-staging only | `nightly` / `collab-staging` | 2026-11-02T12:52:59Z / 15:51:56Z |
| OpenAI Codex CLI | ❌ Quiet (pre-window) | `rust-v0.167.0-alpha.3` | 2026-11-01T22:26:17Z |
| OpenCode | ❌ Quiet | `v2.2.5` / npm `opencode-ai@1.19.5` | 2026-10-30T23:17:23Z / 2026-10-28T06:17:11Z |
| goose (aaif-goose) | ❌ Quiet | `v1.57.0` | 2026-10-28T19:26:10Z |
| Aider | ❌ Quiet (dormant) | PyPI `0.86.2` | 2026-02-12T00:42:52Z |
| Cline | ❌ Quiet | `v4.1.26` (CLI `cli-v3.0.74`) | 2026-10-26T09:06:50Z |
| Antigravity CLI | ❌ Quiet | `1.4.12` | 2026-10-30T21:39:59Z |
| Kilo Code / Roo Code | ❌ Quiet | `v7.8.25` / `v3.54.0` | 2026-10-28T20:43:24Z / 2026-05-15T17:52:24Z |

---

## 1. Claude Code — `v2.1.317`

**Published:** npm `@anthropic-ai/claude-code@2.1.317` 2026-11-02T23:57:53Z; GitHub release object published 2026-11-03T01:25:46Z (inside window). npm dist-tags: `latest=2.1.317`, `next=2.1.317`, `stable=2.1.311` (stable channel lags — v2.1.317 is on `latest`, not `stable`).
Source: https://registry.npmjs.org/@anthropic-ai/claude-code
Source: https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.317

### Additions (selected)
- `/schedule` now warns when a new cloud scheduled task gets connectors the user did not ask for, and how to remove them.
- **New consent check:** a web or shell tool call that would send the account email address to the network now asks first.
- **Agent SDK hook callbacks** gained `onFailure: "block"` — a failing callback blocks the action instead of letting it run.
- Claude Desktop's Code tab shows a notice when the org's remote managed settings have not loaded for the session, and another once they do.
- Auto mode now surfaces a notice when its check has no answer for a subagent's tool call (previously nothing appeared in the main view).
- **New OpenTelemetry attributes:** `anthropic.plan`, `anthropic.seat_type`, `anthropic.provider`, `anthropic.custom_base_url` added to metrics, events and spans.
- **Claude apps gateway admin API:** new cost report endpoint `GET /v1/organizations/analytics/cost` — past spend over a date range, total / per developer / per day / per IdP group.
- Claude apps gateways with `admin:` set now keep a daily record of each developer's IdP groups for `admin.identity_retention_days` (the grouping key for the cost report).
- New env var `CLAUDE_CODE_DISABLE_NESTED_SESSION_ID`: set to `1` on a self-hosted runner so `claude -p` inside a session reuses that session's ID and transcript (older-version behaviour).

### Notable fixes (selected)
- Project/local MCP servers disconnecting after the first turn in some Claude Desktop sessions.
- Auto mode failing every turn when an LLM gateway used as base URL answers 403/422 to its server-side safety check (403 with `apiKeyHelper` unchanged).
- `claude auth status` exiting before a slow token refresh was saved (could sign the user out next run).
- A project's `effortLevel` being ignored by app-started sessions (e.g. new sessions in the desktop Code tab).
- `claude --from-pr` reporting "No conversations found" in projects with many sessions when the linked session was older than the first page.
- Second of two simultaneous permission prompts showing no file path/command on claude.ai and mobile.
- `claude -p` exiting 0 when a full disk/quota lost its transcript or `~/.claude.json` write — now prints an error and exits 1 in text and json output.
- OTel exports through a proxy: `http://` flood of connection attempts to a 403-blocking proxy; exports hanging indefinitely behind a silent proxy (now timeout after 10s, or `OTEL_EXPORTER_OTLP_TIMEOUT` up to 30s); `https://` endpoint exports never sent when started while another export was in progress.
- Claude apps gateway was hiding Amazon Bedrock's "Input is too long." error, causing every turn to fail with "upstream rejected the request" instead of compacting.
- `DISABLE_PROMPT_CACHING_OPUS` / `DISABLE_PROMPT_CACHING_SONNET` having no effect on `[1m]`, other-region and undated spellings of the default model.
- Stdio MCP servers receiving an empty `AWS_BEARER_TOKEN_BEDROCK` when env config set it empty (now unset so the server can use the machine's own AWS credentials).
- "Prompt is too long" after automatic compaction in sessions whose very large CLAUDE.md changed since last sent; high memory + slow startup in headless sessions with many plugin-registered commands.

### Behaviour changes (selected)
- `SendMessage` delivers to a running background agent earlier (running command moved to background instead of stopped).
- Subagents/teammates on a different model now use that model's saved effort level or its default, instead of the session's effort level.
- Exit skips the "Background work is running" prompt for plugin monitors.
- Improved `/design-sync` to say up front when a design system has moved to Claude, and stop before building instead of failing at upload.
- Improved "Resume this session with" hint to repeat launch flags (e.g. `--chrome --debug`) ahead of `--resume`.

Full body length: 12,278 chars (release body is extensive — ~90 bullets).

---

## 2. GitHub Copilot CLI — three builds: `v1.0.106-3`, `v1.0.106-4`, `v1.0.106-5`

**Published:** `v1.0.106-3` 2026-11-02T20:08:22Z; `v1.0.106-4` 2026-11-02T22:59:38Z; `v1.0.106-5` 2026-11-03T01:13:23Z. npm `@github/copilot` mirror timestamps: 20:08:23Z / 23:00:20Z / 2026-11-03T01:13:47Z. An unstable build `1.0.102-0.unstable.r41528289608.g54dc3af` also published 2026-11-02T23:28:58Z.
Source: https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.106-5
Source: https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.106-4
Source: https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.106-3
Source: https://registry.npmjs.org/@github/copilot

### `v1.0.106-3` — feature of the day
- **Added opt-in session management tools and `@mentions` for opted-in local sessions** (the headline addition of the window).
- Improved: managed-account policy refresh warnings now include Policy Helper findings and clear once policy resolves.
- Fixed: reuse of valid saved MCP OAuth credentials for anonymous connections and initial challenges without another sign-in; colorblind theme marks unread sessions with `*` instead of the finished-session blue dot; MCP reload reports one settled connection summary per reconciliation; Copilot Free signup completes when account setup overlaps model refreshes; resuming an autopilot objective no longer starts a duplicate continuation prompt; `/context` shows updated usage after switching models mid-session; `repository disableAllHooks` keeps suppressing user hooks after trusted-workspace rebuilds; Entra sign-in uses the VS Code application registration again by default; the built-in documentation tool now returns the installed CLI's own commands/flags/help topics instead of a "missing README" error; `/add-dir` and `/cd` accept quoted directory paths; assistant replies and Read/Create/Edit/Search rows no longer pass escape sequences/control characters to the terminal.

### `v1.0.106-4` — TUI correctness pass
- `@file` mention written inside parentheses/brackets/braces/angle brackets/quotes/backticks now attaches the file and expands correctly in `!` shell commands.
- Custom agents sharing a built-in agent's name are no longer offered to the model as a second agent type.
- `/skills`, `/plugin`, `/mcp` details view escapes terminal control characters from skill/plugin/server metadata.
- Instruction files with invalid YAML frontmatter keep their `applyTo`/`paths` list and `excludeAgent` instead of applying to every file or none.
- A `preToolUse` hook returning `"modifiedArgs": null` no longer fails the tool call ("Expected JSON object but got null"); null now leaves arguments unchanged.
- Escape / Ctrl+G leave Ctrl+R reverse search in one press when started from a slash command, `/cd` path or command-mode draft.
- `copilot sessions import` reports "Only the first record may be a session header." and unsupported record types instead of asking for a record id/timestamp.
- Ctrl+E editor save-then-error keeps the edit in a recovery file and shows its path.
- When signed out, the Issues and Pull requests tabs no longer offer a `/` search that could only fail; `/` opens the slash-command picker as on the Gists tab.

### `v1.0.106-5` — ACP, hooks, skills and MCP hardening
- `includeCoAuthoredBy: false` is now honored in ACP mode (`copilot --acp`), so ACP clients no longer instruct the agent to add a Co-authored-by trailer.
- Targeted `/settings` commands show the selected setting immediately.
- A telemetry-disabled warning raised while resuming a session is saved to session history (later events no longer reference a missing parent).
- A BYOK provider key that is not a valid HTTP header value (e.g. key command output with a status line before the key) is no longer printed in the model error or saved in the session log.
- `copilot mcp enable` now fails with a clear message for a server the repository disables, instead of reporting success and changing nothing.
- A prompt hook returning an empty `modifiedPrompt`/`modifiedTransformedPrompt` no longer sends the model an empty prompt; ignored values now produce a warning naming the field.
- `copilot sessions import --name ""` is rejected as an invalid name in both `--dry-run` and a real import.
- A `~/` directory in `skillDirectories`, `COPILOT_SKILLS_DIRS` or `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` now resolves to the home directory, so those skills/instructions load.
- The `.vscode/mcp.json` migration notice now appears in repository subdirectories and after `/cd` into another workspace, and no longer appears for repos already migrated to `.mcp.json`.
- Skill and background-agent timeline entries show sanitized, readable errors and results.
- `/mcp enable` and `/mcp disable` allowed for servers granted GitHub auth at startup.
- **Gemini models automatically defer tools behind search when requests exceed the 512-function limit.**
- Removed repository hook configs no longer block later tool calls in the same session.
- In `--autopilot`, background task completions arriving after a run stops are delivered with the next message instead of being dropped.
- "Collect debug logs" keeps the active invocation and ignores stale completion results.
- Resuming a session with an unreadable event log reports a load error instead of "not found".
- Copying text on native Windows no longer changes the console code page.
- `/tasks` keeps the selected task visible when lists exceed terminal height.
- Signing in to a remote MCP server whose protected resource is a bare origin (e.g. `https://mcp.example.com`) no longer sends the resource with a trailing slash.

Note: the repo's `changelog.md` on `main` still shows 1.0.105 as its newest heading — the 1.0.106-x hotfix builds are published via GitHub Releases/npm without a matching changelog.md entry.
Source: https://raw.githubusercontent.com/github/copilot-cli/main/changelog.md

---

## 3. Qwen Code — `v0.26.6` (stable) + `sdk-typescript-v0.1.27` + nightly

**Published:** `v0.26.6` GitHub 2026-11-02T18:22:40Z / npm 18:35:34Z; `sdk-typescript-v0.1.27` 2026-11-02T19:09:07Z; `v0.26.5-nightly.20261102.0441faff21` 2026-11-02T22:31:13Z (npm 22:38:10Z). No `desktop-v0.26.6` tag yet — the last desktop tag is `desktop-v0.26.5` (2026-11-01T03:59:58Z).
Source: https://api.github.com/repos/QwenLM/qwen-code/releases/tags/v0.26.6
Source: https://api.github.com/repos/QwenLM/qwen-code/releases/tags/sdk-typescript-v0.1.27
Source: https://registry.npmjs.org/@qwen-code/qwen-code

### Features (v0.26.6, no breaking changes)
- **New Web Shell sidebar activity view** for trusted-workspace conversations: approval/input/error states, unread completions, running work, bulk read/archive controls (PR #16022).
- "Add to Split View" option in eligible sidebar session menus in Web Shell, to open sessions side by side (PR #15956).
- Web Shell token usage panel gains request success rate, output speed, per-model success indicators and distinct model colors (PR #16108).
- Web Shell composer shows a dismissible Workflow chip that turns Workflow mode off, warns when tools are unavailable, and summarizes the mode in the `+` menu (PR #16107).
- Web Shell Token Usage now plots per-request output speed, first-token latency, and failure details by model (PR #16111).
- With `experimental.unifiedAgentLoop` enabled, more ACP turns — including channel prompts and Goal-proposal approvals — run on the shared loop (PR #15902).
- **Mods can now run `prompt.submit` hooks in headless runs** for `-p` prompts and stream-json user messages, allowing prompt inspection or rewriting before submission (PR #15905).
- **Desktop releases now publish Fedora 44 and RHEL 10 x64 RPM installers** alongside existing Linux packages (PR #16060).
- GitHub channel configuration made usable in Web Shell (PR #16096); `verify-pr` inherits `--publish` consent on same-session re-verification (PR #16112); PR review canary cohort can carry its own endpoint (PR #16130).
- Bug fix: OAuth refresh lock cleanup only removes the lock when the current process owns it, preventing exiting processes from deleting an active refresh lock.

### SDK TypeScript v0.1.27
- Bundles CLI version **0.26.6** (built from source, same branch/ref as the SDK). The release body is a running manifest of previously bundled CLI versions down to 0.23.x.

---

## 4. Factory Droid CLI — `droid@1.2.0` / `@factory/cli@1.2.0`

**Published:** `droid@1.2.0` npm 2026-11-03T01:14:52Z; `@factory/cli@1.2.0` npm 2026-11-03T01:14:58Z. Both just inside the window end. Preceded by `1.1.0` (2026-10-30), `1.0.0` (2026-10-29T22:15Z) and the `0.251.0`/`0.250.0`/`0.249.0` line.
Source: https://registry.npmjs.org/droid
Source: https://registry.npmjs.org/@factory/cli

**Note:** no changelog is published for this bump. The npm `repository` field points to `git+https://github.com/Factory-AI/factory` (`apps/cli` directory); that repo has **no GitHub Releases at all** and was last pushed 2026-10-23T12:14:55Z, so the npm publish is the only release signal. Package description unchanged ("Factory Droid CLI - AI-powered software engineering agent"), published by the `GitHub Actions` npm user. The `0.x → 1.0.0 → 1.1.0 → 1.2.0` progression over five days suggests an active 1.x stabilization line.
Source: https://api.github.com/repos/Factory-AI/factory/releases
Source: https://api.github.com/repos/Factory-AI/factory

---

## 5. Hermes Agent (Nous Research) — `v0.22.6`

**Published:** GitHub 2026-11-02T17:18:36Z; npm `hermes-agent@0.22.6` 2026-11-02T23:35:43Z. npm dist-tag `latest=0.22.6`.
Source: https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.6
Source: https://registry.npmjs.org/hermes-agent

- Patch rollup of **~776 merged PRs** since v0.22.5 (measured at commit `f0d94882e89`): 3,448 non-merge commits, 4,316 changed files, +248,579 / −94,077 lines, 385 closed issues.
- Ships to the GitHub release (CLI + installers), the Microsoft Store app, Docker (`nousresearch/hermes-agent:stable`) and Hermes Cloud.
- Undocumented-on-purpose features in the window (per release notes): `hermes webapp` — a Webapp served from the gateway's own listener (Desktop Web Access pane; also Desktop plugins loading in a browser tab); `/model reset` to clear a session's model pin without losing history; per-skill locks against autonomous writes (lockable from the Desktop Capabilities pane); opt-in prepared compaction (`compression.prepare_ahead`); `hermes cron cancel` plus a per-job missed-run policy and a Stop button in the Desktop cron editor; `/delegation` choices saved for the next session; `hermes migrate` and setup moving Grok Bot and OpenBot users over; opt-in OS-keychain storage for the vault key; catalog `requires_hermes` enforced at plugin install and update; agent-picked ElevenLabs voices in `text_to_speech`; a `pre_llm_call` hook that can block a turn before inference; Desktop group chat rename/disband/mentions/attachment paste; every profile shown as a Desktop sidebar section; Telegram video notes; Slack emoji reactions in thread context; resumable downloads in the package manager.
- Curated release notes for this window are deferred to **v0.23.0**, which will document everything from v0.22.0 onward.

---

## 6. oh-my-pi (Pi harness) — `v18.16.0`

**Published:** GitHub 2026-11-02T19:49:20Z; npm `@oh-my-pi/pi-coding-agent@18.16.0` 2026-11-02T20:03:14Z. Mirror npm `pi-agent-zh@18.16.0` 2026-11-03T00:29:57Z.
Source: https://api.github.com/repos/can1357/oh-my-pi/releases/tags/v18.16.0
Source: https://registry.npmjs.org/@oh-my-pi/pi-coding-agent

### @oh-my-pi/pi-agent-core
- **Changed (deprecations):** `createFileOps`, `computeFileLists`, `formatFileOperations`, `upsertFileOperations`, `isUrlSchemePath` and `FileOperations` in `@oh-my-pi/pi-agent-core/compaction` are deprecated and now re-export `@oh-my-pi/snapcompact`, which callers should import directly.
- **Fixed (tokenizer accuracy):** context estimates for models without a known tokenizer family (Gemini, Grok and the like), and token counts made without a model (compress metrics, legacy `estimateTokens`), now count text in `o200k_base` instead of guessing 4 bytes per token — the old estimate **undercounted what those providers bill by 11–48% on code-heavy sessions** and let compaction fire late after a switch to them (PR #17607).
- **Fixed:** context estimates no longer charge a reader another model's thinking signatures or redacted thinking, which the request strips — a Claude session switched to Grok or Gemini (including Gemini through Factory) counted them as text (PR #17607).
- **Removed:** `PI_TOKENIZER_ACCURATE` env flag — every model is now counted with a native tokenizer (PR #17607).

### @oh-my-pi/pi-ai
- **Added `/login mistral…`** (Mistral login path added to the provider login flow).

---

## 7. Atomic — `0.9.68` (and `0.9.67`)

**Published:** `0.9.68` GitHub 2026-11-03T00:55:06Z (npm `@bastani/atomic@0.9.68` 2026-11-03T00:58:10Z); prerelease `0.9.68-alpha.1` 2026-11-03T00:46:16Z; `0.9.67` 2026-11-02T22:33:09Z (alpha.1 22:19:43Z).
Source: https://api.github.com/repos/bastani-inc/atomic/releases/tags/0.9.68
Source: https://api.github.com/repos/bastani-inc/atomic/releases/tags/0.9.67
Source: https://registry.npmjs.org/@bastani/atomic

### 0.9.68 — model selection semantics + headless hang
- **`--model` now means that model:** a session started with `--model` no longer silently falls back to the `fallbackModels` setting. It falls back only to models passed via the new `--fallback-models`, and `--no-fallback` turns fallback off for any session. Applies to interactive sessions too (PR #4227).
- **No hang on a silent stdin:** `atomic -p "<prompt>"` starts without stdin when nothing arrives on a piped stdin within 2 seconds (`ATOMIC_STDIN_TIMEOUT_MS`), instead of waiting forever (PR #4233).
- Added `--fallback-models <models>` and `--no-fallback` to choose a run's fallback chain on the command line (PR #4223).

### 0.9.67 — bounded memory for long-running pools
- **Bounded local worker memory:** a local worker keeps only the checkpoints/state of the child it runs instead of every child in the pool; new `workflows.localWorkers.maxWorkerRssBytes` replaces a worker that still grows past a limit between children (PR #4214).
- **Finished commands free their output:** a finished shell command no longer keeps up to ~9 MB of output in native memory until the process exits; spooled output still reads back from disk (PR #4218).

---

## 8. Gemini CLI — nightly only

**Published:** `v0.67.0-nightly.20261103.g0ac57c029` GitHub 2026-11-03T01:18:35Z / npm `@google/gemini-cli@0.67.0-nightly.20261103.g0ac57c029` 2026-11-03T01:25:09Z; `@google/gemini-cli-core` same version 2026-11-03T01:15:54Z. The prior nightly `0.67.0-nightly.20261102.g6814e00d6` was published npm 2026-11-02T01:42:16Z (GitHub 2026-11-02T01:22:38Z — marginally before the window opens).
Source: https://api.github.com/repos/google-gemini/gemini-cli/releases/tags/v0.67.0-nightly.20261103.g0ac57c029
Source: https://registry.npmjs.org/@google/gemini-cli

- Content: a single fix — `fix(core): prevent interrupted Whisper model downloads from being treated as installed` (PR #30058 by @tadipavan). The 11-02→11-03 compare shows exactly 2 commits (the fix + the release chore), i.e. the 11-02 nightly build (`g6814e00d6`) was already identical in content to the 11-01 build.
- No new stable release; the newest non-nightly tag is `v0.67.0-preview.0`.
Source: https://api.github.com/repos/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261102.g6814e00d6...v0.67.0-nightly.20261103.g0ac57c029

---

## 9. Crush (Charm) — rolling `nightly` tag

**Published:** `nightly` GitHub 2026-11-03T00:36:08Z (in window). Last stable remains `v0.99.0` (2026-10-29T16:25:08Z) — no new stable in window.
Source: https://api.github.com/repos/charmbracelet/crush/releases/tags/nightly
Source: https://api.github.com/repos/charmbracelet/crush/releases/tags/v0.99.0

- Nightly body is the standard cosign/sigstore verification instructions (`checksums.txt` + `checksums.txt.sigstore.json`, `cosign verify-blob` against `^https://github.com/charmbracelet/crush/.github/workflows/(release|nightly).yml@`); no per-build change notes.
- Charm's blog is quiet — newest post "Crush + Docker MCP" (2026-03-19).
Source: https://charm.land/blog/rss.xml

---

## 10. Amp (Sourcegraph) — rolling dev builds, no tagged release

**Published:** npm `@sourcegraph/amp` builds at 2026-11-02T04:22:48Z (`0.0.1793592041-g8ba069`), 08:22:27Z (`0.0.1793606440-g4c7784`), 16:27:39Z (`0.0.1793635240-gf2548c`), 20:33:13Z (`0.0.1793649628-g18d621`), and 2026-11-03T00:23:03Z (`0.0.1793664053-ga6248e`, current `latest`). The 2026-11-02T00:22:40Z build falls just before the window. dist-tags: `latest=0.0.1793664053-ga6248e`, `next=0.0.1778732631-gc5875c-singleexe`.
Source: https://registry.npmjs.org/@sourcegraph/amp

- `sourcegraph/amp` GitHub repo → 404 (confirmed again); `api.github.com/repos/sourcegraph/amp/tags` → "Not Found". Amp's public signal is npm-only dev builds at ~4-hour cadence.
- Sourcegraph blog is quiet in window — newest post "php2shell: patching PHP is easy, finding it is the hard part" (2026-10-21).
Source: https://sourcegraph.com/blog/rss.xml

---

## 11. Zed — rolling tags only

**Published:** `nightly` 2026-11-02T12:52:59Z ("Fix remote windows merging during session restoration (#66289)"); `collab-staging` 2026-11-02T15:51:56Z ("http_client: Remove anyhow reexports (#66430)"). Both in window. No stable/pre release in window — newest stable `v1.26.2` (2026-10-28T15:16:13Z), newest pre `v1.27.0-pre` (2026-10-28T15:18:12Z).
Source: https://github.com/zed-industries/zed/releases.atom
Source: https://api.github.com/repos/zed-industries/zed/releases

---

## 12. OpenAI Codex CLI — quiet (pre-window)

**Latest:** `rust-v0.167.0-alpha.3` GitHub 2026-11-01T22:26:17Z, npm `@openai/codex@0.167.0-alpha.3-*` platform packages 2026-11-01T22:36Z–22:46Z — all **before** the window opens (2026-11-02T01:28Z). Latest stable npm version `0.166.0` (2026-10-29T19:56:19Z).
Source: https://api.github.com/repos/openai/codex/releases
Source: https://registry.npmjs.org/@openai/codex

---

## 13. Quiet tools (no in-window release)

- **OpenCode** — `v2.2.5` 2026-10-30T23:17:23Z; npm `opencode-ai@1.19.5` 2026-10-28T06:17:11Z. `sst/opencode` → 301 redirect to `anomalyco/opencode`.
  Source: https://api.github.com/repos/anomalyco/opencode/releases · https://registry.npmjs.org/opencode-ai
- **goose** — `block/goose` → 301 to `aaif-goose/goose`; latest `v1.57.0` 2026-10-28T19:26:10Z. (Also visible: unreleased-looking tags `v2.0-rc.1` / `v2.0-rc-04-27-0` dated 2026-04-27 — a v2 line that has been stalled for ~6 months.)
  Source: https://api.github.com/repos/aaif-goose/goose/releases
- **Aider** — dormant. GitHub latest release `v0.86.0` (2025-08-09); PyPI `aider-chat` latest `0.86.2` uploaded 2026-02-12T00:42:52Z. No activity in window.
  Source: https://pypi.org/pypi/aider-chat/json · https://api.github.com/repos/Aider-AI/aider/releases
- **Cline** — latest `v4.1.26` 2026-10-26T09:06:50Z (CLI `cli-v3.0.74` 2026-10-26, Desktop `desktop-v0.0.49`, SDK `sdk/sdk/v0.2.0`); npm `cline@3.0.74` 2026-10-26T04:04:22Z.
  Source: https://api.github.com/repos/cline/cline/releases · https://registry.npmjs.org/cline
- **Antigravity CLI** — `google-antigravity/antigravity-cli` latest `1.4.12` 2026-10-30T21:39:59Z. The separate community package `@nodetool-ai/antigravity-cli` last published `0.8.10` 2026-11-01T20:54:43Z (out of window).
  Source: https://api.github.com/repos/google-antigravity/antigravity-cli/releases · https://registry.npmjs.org/@nodetool-ai/antigravity-cli
- **Kilo Code** — `v7.8.25` 2026-10-28T20:43:24Z. **Roo Code** — `v3.54.0` 2026-05-15T17:52:24Z.
  Source: https://api.github.com/repos/Kilo-Org/kilocode/releases · https://api.github.com/repos/RooCodeInc/Roo-Code/releases

---

## 14. New entrants / trending (npm date-sorted search + GitHub new-repo search)

### GitHub — new repos in window-ish range (created > 2026-10-20, >50 stars)
- **deepseek-ai/dsh-superagent-prototype** — 13,298 stars, created 2026-10-31T09:32:46Z, pushed 2026-10-31T12:05:52Z, TypeScript. "Towards a More Autonomous Agent System" — the standout new entrant of the past week; **no GitHub Releases** (empty release list), so it is prototype-code only, not a shipped tool.
  Source: https://github.com/deepseek-ai/dsh-superagent-prototype
- **wangzan101/Mika** — 5,336 stars, created 2026-10-29T14:34:07Z, Kotlin. On-device AI agent for Android that operates apps and the web.
  Source: https://github.com/wangzan101/Mika
- **l0ng-ai/openidea** — 5,019 stars, created 2026-10-21T12:23:14Z. "The IDE you know, rebuilt in Rust. IntelliJ IDEA–style keymap, tool windows and search-eve…"
  Source: https://github.com/l0ng-ai/openidea
- The rest of the >50-star new-repo list is dominated by **agent skill packs** rather than new CLIs (e.g. `t3dotgg/tstack` 2,638★, `morganlinton/BeautifulRust` 1,683★, `caru-ini/stack-diagram` 1,205★, `ZiChuanLan/agent-purge` 994★, `emanuele-em/kanzo` 882★) — the skill ecosystem, not the harness ecosystem, is where new GitHub star velocity sits.
  Source: https://api.github.com/search/repositories?q=created:%3E2026-10-20+(agent+OR+cli+OR+coding)+in:name,description+stars:%3E50&sort=stars

### npm — packages published in window (search API, sorted by date)
- `@earendil-works/pi-coding-agent@1.5.0` — 2026-11-02T11:05:09Z (Pi fork).
- `@code-yeongyu/senpi@2026.11.2-3` — 2026-11-02T17:45:51Z (Pi fork).
- `ccusage@20.0.48` — 2026-11-02T18:24:14Z (token-usage/cost analyzer for agent CLIs).
- `@averyyy/pi-coding-agent@1.5.0-piclient.1` — 2026-11-02T18:46:44Z.
- `@oh-my-pi/pi-coding-agent@18.16.0` — 2026-11-02T20:03:14Z; `pi-agent-zh@18.16.0` — 2026-11-03T00:29:57Z.
- `@ai-agent-forge/agent-forge@0.88.28` — 2026-11-02T01:28:49Z (exactly at window open).
- `@roderai/roder@0.4.7` — 2026-11-02T03:33:59Z — "Roder native coding agent CLI".
- `@bastani/atomic@0.9.68` — 2026-11-03T00:58:10Z.
- `cc-safety-net@2.7.2` — 2026-11-02T02:05:05Z (hook blocking destructive commands / secret file access for coding-agent CLIs).
  Source: https://registry.npmjs.org/-/v1/search?text=coding+agent+cli&size=20&sort=date

---

## 15. Company announcements (vendor blogs / changelogs in window)

### GitHub Changelog — 2 posts on 2026-11-02 (both in window)
1. **"Security risk assessments include repository protection status"** — 2026-11-02T15:47:21Z. GitHub code security risk assessment and secret risk assessment now show whether findings are in protected or unprotected repositories. Available in GitHub Enterprise Cloud and GitHub Team; secret risk assessment arrives in GHES 3.24. Assessments are started under Assessments in the org's Security tab.
   Source: https://github.blog/changelog/2026-11-02-security-risk-assessments-include-repository-protection-status
2. **"pull_request_target blocked by default December 2"** (Retired notice) — 2026-11-02T15:14:46Z. Starting **December 2, 2026**, GitHub Actions will block `pull_request_target` events by default in **all public repositories** unless an applicable Actions event policy explicitly allows them. Enforcement was previously scheduled for November 2, 2026 and has been pushed back a month. Private and internal repositories are not affected. The rule currently runs in *evaluate* mode so you can see which workflows would be blocked.
   Source: https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2
   (This is materially relevant to agentic coding workflows that rely on `pull_request_target` for Copilot/agent-triggered runs.)
3. Prior-window Copilot-relevant posts (out of window, context only): "Route and orchestrate models with GitHub Copilot Fusion" (2026-10-28), "GitHub Copilot app, Universe releases" (2026-10-28), "GitHub Enterprise now includes access to GitHub Copilot" (2026-10-28).
   Source: https://github.blog/changelog/feed/

### OpenAI News — 4 posts on 2026-11-02
- **"Scaling Git at OpenAI"** — 2026-11-02T15:30:00Z (in window).
- **"Introducing the Grid Protectors Program"** — 2026-11-02T15:00:00Z (in window).
- **"LifeVal"** — 2026-11-02T09:00:00Z (in window).
- **"Qodo builds context into AI code review with Codex"** — 2026-11-02T00:00:00Z — **~1.5 h before the window opens**, noted as borderline; it is the only Codex-relevant item (a third-party Codex plugin for AI code review with repo context).
  Source: https://openai.com/news/rss.xml

### Anthropic — no in-window post
- `https://www.anthropic.com/news` scrape shows the newest featured items dated **Oct 27–28, 2026** ("AI for Science expands to foundations and research institutions" Oct 28; "How AI agents shape experts' judgment calls" Oct 27; "Expanding our partnership with GSA…" Oct 27). Nothing dated 2026-11-02/03.
- `https://www.anthropic.com/news/rss.xml` → HTTP 404 ("Not Found"). The RSS feed does not exist; scraping the SPA news index is the working method.
  Source: https://www.anthropic.com/news

### Other vendors — quiet
- **Sourcegraph blog** — newest 2026-10-21. **Charm blog** — newest 2026-03-19. **Google Developers blog** — newest 2026-10-28 ("Build and manage Connected Apps in one place"). **Factory** — `https://factory.ai/news` is a SPA with no dated entries in markup; `https://factory.ai/blog/rss.xml` redirects to a Vercel login page (no feed). **Block/goose blog feed** `https://block.github.io/blog/feed.xml` returned no parseable items.
  Source: https://sourcegraph.com/blog/rss.xml · https://charm.land/blog/rss.xml · https://blog.google/technology/developers/rss/ · https://factory.ai/news · https://block.github.io/blog/feed.xml

---

## 16. Gaps / errors / method notes

1. **GitHub API 404s are real, not throttling:** `sourcegraph/amp` (releases + tags), `Factory-AI/factory` (has zero releases), `google-antigravity/cli` — none exist under those names. No 403/429 rate limiting encountered in this run; unauthenticated calls sufficed.
2. **`sst/opencode` and `block/goose` 301-redirect** to `anomalyco/opencode` and `aaif-goose/goose` respectively — always request the canonical names or curl will not follow the redirect.
3. **Anthropic has no news RSS** — `https://www.anthropic.com/news/rss.xml` is 404; the site is a Next.js SPA and only the featured-article JSON payload is scrapable.
4. **Factory.ai has no usable feed** — `https://factory.ai/blog/rss.xml` returns a Vercel login interstitial, and `https://factory.ai/news` is a client-rendered SPA with no dates in the served HTML. Factory Droid release detection therefore relies entirely on npm.
5. **GitHub Copilot CLI ships hotfix builds without changelog.md entries** — `v1.0.106-3/-4/-5` exist as GitHub Releases + npm versions, but `main:changelog.md` still stops at 1.0.105. Release notes must be read from the GitHub Release bodies.
6. **Amp has no public repo** — signal is npm-only, ~4-hourly dev builds, no per-build notes.
7. **web_search was largely unproductive:** 1 call blocked by DuckDuckGo bot detection, 1 call returned 0 results, 1 call returned only generic "best CLI coding agents" listicles with no dated in-window news. All substantive findings came from direct HTTP GET against GitHub/npm/RSS APIs. 3 web_search calls and 0 web_fetch calls used in total.
8. **Window-edge items flagged rather than silently included:** Gemini CLI 11-02 nightly (GitHub 01:22:38Z, ~6 min before window open), OpenAI "Qodo builds context into AI code review with Codex" (2026-11-02T00:00Z, ~1.5 h before window open), and Amp build 2026-11-02T00:22:40Z (~1 h before window open).

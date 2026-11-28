# Findings — Task 1: Releases / commands / features / company announcements for agentic CLI tools & desktop AI assistants

**Run date:** 2026-11-04
**Coverage window:** 2026-11-03T01:28:00Z → 2026-11-04T01:28:00Z (UTC, inclusive of start, exclusive of end)
**Method:** GitHub Releases API + `releases.atom` feeds, npm registry time maps, npm search API (date-sorted), GitHub repo search (new repos), vendor RSS/Atom/sitemap feeds, direct HTML scrape of changelog pages. **3 web_search calls, 2 web_fetch calls across the two attempts** (limits: ≤4 search, ≤1 fetch per attempt; attempt 2 used 1 search + 1 fetch). All release evidence via direct HTTP GET. **Second pass (2026-11-04T01:50Z) re-verified every timestamp against the raw feeds and added two tools missing from the first pass** (§8 Augment Auggie, §9 Kilo Code CLI) plus five npm packages and one GitHub repo that the date-sorted npm search endpoint did not return.

**Window-edge convention:** items published just outside the window are listed in the window-edge table inside §15 and are *not* counted as in-window releases.

---

## Summary table

| Tool | In-window release? | Tag / version | Published (UTC) |
|---|---|---|---|
| Claude Code | ✅ Yes | `v2.1.318` | npm 2026-11-03T21:55:17Z / GitHub 2026-11-04T00:01:03Z |
| GitHub Copilot CLI | ✅ Yes (2 builds) | `v1.0.106-6`, `v1.0.106-7` | 2026-11-03T06:11:05Z / 2026-11-03T23:34:55Z |
| OpenAI Codex CLI | ✅ Yes (3 tags) | `rust-v0.167.0-alpha.4`, `rust-v0.167.0-alpha.5`, `rust-v0.168.0-alpha.1` | 2026-11-03T02:24:00Z / 2026-11-04T00:44:59Z / 2026-11-04T00:45:00Z |
| Gemini CLI | ✅ Yes (nightly) | `0.67.0-nightly.20261104.g89e9d25d6` | GitHub 2026-11-04T01:20:49Z / npm 01:24:24Z |
| Hermes Agent (Nous) | ✅ Yes (+ rc/canary) | `v0.22.7`, `rc.1-v0.22.7`, `v0.22.6+canary.20261103T064339Z` | 2026-11-03T21:53:16Z / 19:54:31Z / 06:43:40Z |
| Atomic | ✅ Yes (3 stable + 3 alpha) | `0.9.69`, `0.9.70`, `0.9.71` | 2026-11-03T10:08:42Z / 16:56:30Z / 23:17:12Z |
| Augment Auggie | ✅ Yes (3 prerelease builds) | `v1.2.0-prerelease.202611030911` / `…1212` / `…1510` | 2026-11-03T17:25:00Z / 20:26:57Z / 23:20:38Z |
| Kilo Code CLI | ✅ Yes (npm `kilo-v2` channel) | `@kilocode/cli@0.0.0-v2-25` | npm 2026-11-03T17:27:12Z |
| Amp (Sourcegraph) | ⚠️ Rolling dev builds only (8) | `0.0.1793678438-gb9f0b4` … `0.0.1793750459-gc8c68b` | 2026-11-03T04:25:14Z → 2026-11-04T00:22:52Z |
| Zed | ⚠️ Rolling nightly/collab-staging only | `nightly`, `collab-staging` | 2026-11-03T13:37:20Z |
| Qwen Code | ❌ Quiet (pre-window) | `v0.26.6` / `0.26.5-nightly.20261102.0441faff21` | 2026-11-02T18:22:40Z / 22:31:13Z |
| oh-my-pi (Pi harness) | ❌ Quiet (pre-window) | `v18.16.0` | 2026-11-02T19:49:20Z |
| Factory Droid CLI | ❌ Quiet (1.2.0 pre-window, 1.3.0 post-window) | `droid@1.2.0` / `droid@1.3.0` | 2026-11-03T01:14:52Z / 2026-11-04T01:32:05Z |
| Crush (Charm) | ❌ Quiet (nightly pre-window) | `nightly` rolling tag | 2026-11-03T00:36:08Z |
| Antigravity CLI | ❌ Quiet | `1.4.12` | 2026-10-30T21:56:07Z |
| OpenCode | ❌ Quiet | `v2.2.5` / npm `opencode-ai@1.19.5` | 2026-10-30T23:17:23Z / 2026-10-28T06:17:11Z |
| goose (aaif-goose) | ❌ Quiet | `v1.57.0` | 2026-10-28T19:42:57Z |
| Cline | ❌ Quiet | `v4.1.26` (+ `desktop-nightly-20261030214224`) | 2026-10-26T09:06:50Z / 2026-10-30T21:21:13Z |
| Aider | ❌ Quiet (dormant) | `v0.86.0` | 2025-08-09T17:42:19Z |

---

## 1. Claude Code — `v2.1.318`

**Published:** npm `@anthropic-ai/claude-code@2.1.318` 2026-11-03T21:55:17Z; GitHub release object published 2026-11-04T00:01:03Z. npm dist-tags: `latest=2.1.318`, `next=2.1.318`, `stable=2.1.311` (stable channel still lags by 7 patches).
Source: https://registry.npmjs.org/@anthropic-ai/claude-code
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.318

### Additions
- Claude Code now records the answer when it asks to turn on the **mods** it writes during a session.
- `assume_role` added on **mantle** upstreams of the Claude apps gateway — for a role in another AWS account and for per-developer AWS cost attribution.
- New `effort` option on a mod's `$.model.fork`: a quick side job can run at `low` effort regardless of session effort; the result reports the effort sent.
- `claude auth status` now shows the date a stored claude.ai sign-in ends (`loginExpiresAt`); `claude -p` JSON results expose `credential_expires_at`.
- `claude -p` text output prints a one-line **stderr warning starting 10 days before** a stored claude.ai sign-in ends.

### Notable fixes
- `--continue` sometimes losing the earlier conversation after a malformed tool call's retries ran out (regression in 2.1.314).
- macOS sessions with many running Bash commands stalling while memory grew.
- Permission prompts being answered by keys typed just after sending a message, or before a slow prompt appeared.
- `/logout`, `claude auth logout`, `claude mcp remove` reporting success — and trust/consent/MCP changes being dropped silently — when the config file could not be updated on a shared network home directory.
- Jobs exiting with `Not logged in` when another terminal/host signs in again to the same account and organization on the same home.
- `claude mcp add`/`remove` writing the config **without its lock** — they now wait for it or exit 1 (another job's save can still replace a saved server).
- `claude plugin` commands exiting before a slow token refresh was saved (could sign you out next run); `claude plugin validate` accepting a custom-named marketplace file that `claude plugin marketplace add` rejects.
- stdio MCP servers that exit on the version probe being re-probed on every start; a server dying in under 3s for its own reason is pinned to the legacy handshake for 7 days.
- Sessions refused at startup by an `allowedProviders` list that another login on the same machine had stored.
- Idle compaction replacing a conversation with a reply that was not a summary.
- `claude -p` / Agent SDK sessions reporting success when an API error cut off a reply while a mod hooked `turn.step`.
- `claude remote-control` hosts, the background daemon and self-hosted runners failing to start new sessions (`spawn ENOENT`) after version cleanup removed the binary of a still-running process; a running process owned by another user (e.g. left by `sudo claude`) being treated as dead by version cleanup and having its binary deleted.
- Every connection failing when the `NODE_EXTRA_CA_CERTS` file is empty, not PEM, or has a damaged certificate — readable certificates are now used with a stderr warning.
- `/mcp` in cloud sessions counting tools the model cannot use.
- The error for a too-large image always saying the limit was 2000px — now reports the API's actual limit.
- A `Setup` hook's variables in `CLAUDE_ENV_FILE` not reaching the Bash tool in some cloud sessions.

### Same-day regression against this release (in-window)
Two Anthropic issues were filed **inside the window** and both concern `v2.1.318`:
- **#107096 — "[BUG] Published mod types reject the `$.model.fork` effort API announced in v2.1.318"**, created `2026-11-04T00:23:47Z`, i.e. **~23 minutes after the release was published** — the `effort` option announced above is reported as rejected by already-published mod types. https://github.com/anthropics/claude-code/issues/107096
- **#107093 — "[FEATURE] Plan approval: 'clear context' option and `showClearContextOnPlanAccept` are terminal-only (missing on desktop)"**, created `2026-11-04T00:06:18Z` — a desktop↔terminal capability-parity gap in the same release. https://github.com/anthropics/claude-code/issues/107093

Both are user reports quoted as filed, not independently reproduced.

---

## 2. GitHub Copilot CLI — `v1.0.106-6` and `v1.0.106-7`

Source: https://github.com/github/copilot-cli/releases/tag/v1.0.106-6
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.106-7
Source: https://registry.npmjs.org/@github/copilot

### `v1.0.106-6` — published 2026-11-03T06:11:05Z (npm 06:10:48Z)
**Added**
- `/settings` opens the unified dashboard for all users; global search across settings and local resources.
- Interactive CLI reports program status to supporting terminals, including when attention is needed.

**Improved**
- MCP content addressed only to the user is no longer sent to the model; the interactive CLI shows such images inline (even in collapsed tool calls) or as saved files.

**Fixed**
- Failed tool-call entries now expand to show complete error output in the timeline.
- Over-limit turns no longer re-run the same tool calls; the existing prompt-budget error is returned.
- Escape / Ctrl+G dismisses slash-command argument suggestions in one keypress.
- Returning from `/lsp` logs detail keeps the LSP server list visible and preserves the selected server.
- Esc in a question form clears the current field instead of discarding the whole form.
- `/diff` comment boxes stay closed beside the scrollbar; wide/astral file names are shortened without drawing a replacement character; a mouse click selects the line under the pointer after the view scrolls past wrapped lines.
- MCP server connection failures now show the server's error text as plain text (escape sequences can no longer hide/recolour it).
- Question forms show control characters in field titles, descriptions, options and the answered row instead of letting escape sequences hide/restyle text.
- `/sandbox`: Enter right after Tab in the add-path picker now keeps that folder; Esc after Tab on an empty path cancels at once.
- **The SQL tools no longer hang the session on a query that never finishes** — the query stops after 60 seconds with an error, and interrupting frees the session.

### `v1.0.106-7` — published 2026-11-03T23:34:55Z (npm 23:34:47Z)
**Added**
- **Rex terminals render inline images using Kitty direct placements.**
- New `/code` command to open the current session in VS Code.
- New **Fusion tier** setting in `copilot config`.

**Improved**
- Built-in browser-use plugin updated to 0.1.0 with improved setup and browser integration.
- More accurate Claude token estimation so context budgeting/trimming decisions improve.

**Fixed (security-hardening theme — many are terminal escape-sequence injections)**
- Box-drawing and block characters in prompts now display as entered in the composer and timeline.
- Draft caret position preserved after command mode.
- Sandboxed Hugo commands can use Hugo and Go caches when developer-tool access is enabled.
- Managed sandbox policy errors now tell you to contact your administrator and include the failed sandbox test command.
- Sandboxed commands on macOS can read files inside the default Xcode.app bundle.
- **ACP mode now honors `--agent`**, so the selected agent persona, prompt and tools are applied at startup.
- Unchanged cached MCP tools remain callable when another tool refreshes happens while permission is pending.
- Sessions tab / home tab bar respond to keys after Ctrl+X / `/session` over a draft with an open slash-command or @ menu; one Escape closes `/ide` without clearing the draft.
- File diffs in permission prompts and `/diff` show control characters from the file as visible symbols.
- Footer draws a git branch name holding control characters as plain text (branch can no longer recolour the footer or set the terminal window title).
- Hook permission messages and queued-message reasons no longer pass escape sequences to the terminal.
- MCP/LSP/plugin.json config files saved with a UTF-8 BOM (as Windows PowerShell 5 and older Notepad write) are now loaded instead of rejected.
- Command approval prompts and completion notices no longer pass escape sequences from a model-written description to the terminal.
- `copilot plugin list` / `copilot plugin update` no longer pass control characters from a plugin's name/marketplace/version through to the terminal.
- Changing a setting via `/experimental`, the status-line picker or subagent/extension pickers no longer replaces an unreadable `settings.json` — the change is refused with an error and the file is left untouched.
- Timeline command output no longer passes DEL and 8-bit C1 control characters to the terminal.
- Stopping an unknown shell ID fails without stopping a command and points you at the active shell sessions list.

---

## 3. OpenAI Codex CLI — three in-window tags

Source: https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4
Source: https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.5
Source: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.1
Source: https://registry.npmjs.org/@openai/codex

| Tag | Published (UTC) | npm | Notes |
|---|---|---|---|
| `rust-v0.167.0-alpha.4` | 2026-11-03T02:24:00Z | `0.167.0-alpha.4` @ 2026-11-03T02:33:02Z (+ per-platform packages 02:35–02:38Z) | Release body is only `Release 0.167.0-alpha.4` — **no changelog published** |
| `rust-v0.167.0-alpha.5` | 2026-11-04T00:44:59Z | not yet on npm at check time | Body: `Release 0.167.0-alpha.5` |
| `rust-v0.168.0-alpha.1` | 2026-11-04T00:45:00Z | not yet on npm at check time | Body: `Release 0.168.0-alpha.1` |

npm dist-tags at check time: `latest=0.166.0`, `alpha=0.167.0-alpha.4` — i.e. **the alpha channel advanced twice but `latest` did not move**; 0.166.0 (2026-10-29T19:47:53Z) remains the stable release.
Also published in-window (not a CLI release): `libcap-v2.75` at 2026-11-03T23:04:31Z — "Mirror of the unmodified libcap 2.75 source archive used to build Bubblewrap for Codex's Linux musl packages" (SHA-256 `de4e7e064c9ba451d5234dd46e897d7c71c96a9ebf9a0c445bc04f4742d83632`). Source: https://github.com/openai/codex/releases/tag/libcap-v2.75

**Assessment:** the alpha cadence is fast (3 alpha tags in 24h) but the release bodies contain no feature notes, so no feature-level claims can be made from the release feed.

---

## 4. Gemini CLI — nightly `20261104`

**Published:** GitHub `v0.67.0-nightly.20261104.g89e9d25d6` 2026-11-04T01:20:49Z; npm `@google/gemini-cli@0.67.0-nightly.20261104.g89e9d25d6` 2026-11-04T01:24:24Z. npm dist-tags: `nightly` and `staging-tmp` point at this build; `latest=0.66.0` (2026-10-27T20:30:04Z), `preview=0.67.0-preview.0` — **no stable release in window**.
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261104.g89e9d25d6
Source: https://registry.npmjs.org/@google/gemini-cli

### What's Changed
- `fix(cli)`: handle stream failures during extension release downloads — PR #30100 (@duvanka-prasad).
- `fix(core)`: preserve an explicit `gemini-2.5-flash` model in dynamic model resolution — PR #30057 (@jesussamuel-byte).
- `fix(hooks)`: support **SubagentStop event mapping** and merge hook definitions — PR #30111 (@diegogodinezr).
- `fix(cli)`: await history replay before responding to ACP `session/load` — PR #30112 (@tadipavan).
- `fix(sandbox)`: supply `--userns=keep-id` for rootless podman — PR by @diegogodinezr.

---

## 5. Hermes Agent (Nous Research) — `v0.22.7`

**Published:** GitHub release 2026-11-03T21:53:16Z; npm `hermes-agent@0.22.7` 2026-11-04T01:25:50Z (npm dist-tag `latest=0.22.7`).
Also in-window: `rc.1-v0.22.7` (2026-11-03T19:54:31Z) and `v0.22.6+canary.20261103T064339Z` (2026-11-03T06:43:40Z).
Source: https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7
Source: https://registry.npmjs.org/hermes-agent

- **Patch release** rolling up ~174 PRs since v0.22.6 into a stable release for the GitHub release (CLI + installers), the Microsoft Store app, Docker and Hermes Cloud. Full curated notes ship with v0.23.0.
- Measured at commit `b200f5bc60e`: **581 non-merge commits across 554 changed files (+24,012 / −3,144), 174 merged PRs, 29 closed issues.**
- Undocumented-on-purpose but notable in-window features named in the release body: opt-in **lead routing for Desktop Group Chats** (Lead badge on the room header), cron jobs that post into Group Chats, room purpose and shared notes, group rooms in one chat column with each member's live state, **pinned Kanban boards as quick-switch tabs**, `$$TeX$$` diagram labels and mermaid diagrams rendered through Pele, a Desktop update error box with the failed update's output and a report link, Web Access naming the step "Start is on" with a running clock, Telegram on Team Gateway via account linking to a shared bot, opt-in Slack `thread_followup_silence`, a Daybreak switch for catalog-listed ChatGPT subscription models, and new plugin-catalog entries.
- Update paths: `hermes update` or the installer one-liner for CLI; `nousresearch/hermes-agent:stable` (or `:latest`) for Docker / Hermes Cloud.

---

## 6. Atomic — `0.9.69`, `0.9.70`, `0.9.71`

npm package `@bastani/atomic`; GitHub repo `bastani-inc/atomic`. npm dist-tags after the window: `latest=0.9.71`, `next=0.9.71-alpha.1`.
Sources: https://github.com/bastani-inc/atomic/releases/tag/0.9.69 · /0.9.70 · /0.9.71 ; https://registry.npmjs.org/@bastani/atomic

### `0.9.69` — GitHub 2026-11-03T10:08:42Z · npm 2026-11-03T11:04:00Z (alpha.1 10:00:27Z / npm 10:07:33Z)
- **Recall past work:** `read` and `search` accept `history://sessions` and `history://workflows` for the current project, and the default system prompt tells the agent to use them. `history://sessions/<id>` and `history://workflows/<runId>` open one (with `:N-M` line ranges); `search` over `history://` finds text across them including each run's stage transcripts; `?limit=N` (up to 200) and `?offset=N` page through all records; long lines are split so every part can be read. Works with the default SQLite store, JSONL directories, memory and custom SDK stores (PR #4256).
- **Commands during compaction:** slash commands that do not send a prompt run immediately while a session compacts; prompts/templates/skills/messages still wait and go out in typed order (PR #4253).
- **Unsaved messages stop the run:** when a message cannot be written to the session file, the cause is reported once, no further model request is sent, and `-p` exits 1 (PRs #4247, #4255).
- Internal URLs: `bash` no longer rejects commands whose quoted text mentions a scheme such as `local://`; unimplemented schemes removed (PR #4256).
- Long-running hosts: child completions and Intercom delivery no longer scan every run a workflow host has kept (PR #4250).

### `0.9.70` — GitHub 2026-11-03T16:56:30Z · npm 2026-11-03T17:51:32Z (alpha.1 16:43:16Z / npm 16:47:19Z)
- **Alt+Up restores exactly what the engine removed** — a message queued less than one engine round trip before the key press is no longer lost, and a message the engine already took into its turn no longer comes back to the editor (PR #4259, issue #4257). The RPC `clear_queue` response was already correct, so RPC clients are unaffected.
- **Safer internal URL expansion:** `bash`/`powershell` replace an internal URL such as `local://` or `artifact://` with its quoted path only where the shell reads it as one literal word. In arithmetic (`((…))`, `$[…]`), array subscripts/compound assignments, comments, positions right after `$` or `[`, and in PowerShell typographic quotes (`‘…’`, `“…”`), block comments (`<#…#>`) or after the stop-parsing token `--%`, the command now runs unchanged (PR #4260).
- Dependency bump: **minimatch 11.0.4** — fixes a glob pattern amplification advisory; Atomic's own patterns were not exposed.

### `0.9.71` — GitHub 2026-11-03T23:17:12Z · npm 2026-11-04T01:12:27Z (alpha.1 23:01:22Z / npm 23:15:13Z)
Headline: "Readable model discovery, faster commands, and broader Markdown customization come with the move to **pi 1.5.0**."
- **Model identity and discovery:** primary labels show raw model IDs and reasoning levels; `--list-models` is tab-separated. Copilot discovers the models the account offers, caches them for offline startup, and shows advertised display names as secondary metadata without changing request IDs. `atomic update --models` refreshes older cached names (PRs #4275, #4279, #4303).
- **Faster shell commands:** commands return as soon as their processes are gone instead of waiting out a 250 ms grace period (PR #4274).
- **Chat and queue correctness:** messages sent as a reply, finished by an input hook, or handled by a hook no longer leave duplicate/unwanted chat entries; Alt+Up restores what you typed (PRs #4276, #4282, #4287).
- **Session continuity:** Anthropic message threads send only new messages when the server can continue the conversation; concurrent processes can open a new SQLite store without failing on its journal-mode lock (PRs #4293, #4278).
- **Markdown and extension tools:** transformers can opt into custom messages, skill blocks, branch summaries and changelogs; **Mermaid diagrams render in expanded branch summaries**. pi 1.5.0 brings terminal and key fixes, page keys in lists, faster code and Markdown rendering, plain JSON Schema validation alongside TypeBox, MCP JSON reply limits, and a Copilot classifier (PRs #4288, #4290–#4292, #4300, #4301, #4304).
- **Shutdown cleanup:** idle RPC shutdown requests run without another client command; RPC and print mode finish cleanup when stdin closes or a first signal arrives; a second signal still forces exit.
- **Breaking change:** if your extension builds `AgentTool` directly with `Type.Enum`, `Type.Tuple`, `Type.Intersect` or another unmapped schema kind, narrow `params` yourself or use a mapped kind. `registerTool()` and `ToolDefinition` are unchanged.
- **Account model discovery:** OAuth and API-key users get the chat models their account offers, with advertised names and exact IDs, without replacing curated catalog metadata (PRs #4279, #4303).

---

## 7. Amp (Sourcegraph) — rolling npm dev builds (no changelog)

`sourcegraph/amp` GitHub repo is 404/private (unchanged known gap), so npm is the only signal. `@sourcegraph/amp` dist-tag `latest=0.0.1793750459-gc8c68b`. Eight dev builds published inside the window (no release notes published for any of them — Amp ships changelog entries on the web app, not on npm):

| Version | Published (UTC) |
|---|---|
| `0.0.1793678438-gb9f0b4` | 2026-11-03T04:25:14Z |
| `0.0.1793682830-gad461e` | 2026-11-03T05:34:13Z |
| `0.0.1793692836-g3a602a` | 2026-11-03T08:23:54Z |
| `0.0.1793707234-gc72860` | 2026-11-03T12:26:29Z |
| `0.0.1793722126-g0307eb` | 2026-11-03T16:53:59Z |
| `0.0.1793730614-g2bda05` | 2026-11-03T19:11:15Z |
| `0.0.1793736138-gdba311` | 2026-11-03T20:29:45Z |
| `0.0.1793750459-gc8c68b` | 2026-11-04T00:22:52Z |

Source: https://registry.npmjs.org/@sourcegraph/amp
`https://ampcode.com/changelog` is behind a sign-in wall (no public changelog HTML), and `https://sourcegraph.com/amp` shows no dated in-window entries.

---

## 8. Augment Auggie — three in-window prerelease builds (`auggie-v2` channel)

**Published (GitHub releases, `auggie-v2` channel):** 2026-11-03T17:25:00Z (`v1.2.0-prerelease.202611030911`), 2026-11-03T20:26:57Z (`v1.2.0-prerelease.202611031212`), 2026-11-03T23:20:38Z (`v1.2.0-prerelease.202611031510`).
**Published (npm `@augmentcode/auggie`):** `1.2.0-prerelease.202611030911` 17:26:30Z, `1.2.0-prerelease.202611031212` 20:25:20Z, `1.2.0-prerelease.202611031510` 23:21:25Z. Two v0-line prereleases also landed in-window: `0.37.0-prerelease.202611032024` (20:38:37Z) and `0.37.0-prerelease.202611032259` (23:11:51Z).
npm dist-tags at check time: `latest=0.36.0`, `prerelease=1.2.0-prerelease.202611031510`, `preview=1.2.0-prerelease.202611031510`, `daemon=1.2.0-prerelease.202611031510` — **no stable release in window**.
Source: https://github.com/augmentcode/auggie/releases
Source: https://registry.npmjs.org/@augmentcode/auggie
Vendor: https://augmentcode.com

**What the release notes actually say** (they are install/trust-metadata boilerplate, not a changelog):
- `curl -fsSL https://github.com/augmentcode/auggie/releases/latest/download/install.sh | bash` for macOS/Linux; a `VERSION=` argument pins a specific prerelease.
- **Node.js SEA (Single Executable Application) binaries** are published alongside the regular tarballs ("binary + sidecar `.d/` directory packaged the same way as prior tarballs"). `install.sh` installs them when the earlier archives are not present on the release.
- Trust metadata: the macOS `-sea` assets are **unsigned** ("Apple secrets not configured"); the Linux `-sea` assets ship `SHA256SUMS-sea`.
- No feature-level changelog is published for these builds — the `auggie-v2` channel is a separate major-version line from the stable `latest` (0.36.0).

---

## 9. Kilo Code CLI — in-window `kilo-v2` npm channel publish

**Published:** npm `@kilocode/cli@0.0.0-v2-25` at **2026-11-03T17:27:12Z**, published under the npm dist-tag **`kilo-v2`** (alongside `latest=7.8.18`, `rc=7.8.25`, `next=1.0.8`, `alpha=0.0.5`).
Source: https://registry.npmjs.org/@kilocode/cli

- The package is a **thin v2 launcher stub**, not the CLI itself: `bin` maps to `{"kilo2": "bin/kilo2.exe"}`, `scripts.postinstall` is `node ./postinstall.mjs`, and the tarball is only **8,191 bytes unpacked across 3 files** (the `os`/`cpu` matrix is `darwin`/`linux`/`win32` × `arm64`/`x64`).
- This is the first and only in-window `kilo-v2` publish; the preceding v2 builds were `0.0.0-v2-9` (2026-10-28T19:48:14Z) and `0.0.0-v2-13` (2026-10-29T09:46:52Z). The v1 line's last publish was `7.8.25` at 2026-10-28T20:46:41Z (pre-window).
- The Kilo **GitHub** release feed has no in-window release (`v7.8.25` pre-release, 2026-10-28T20:51:19Z, is the newest tag), so npm is the only signal for this channel. Source: https://github.com/Kilo-Org/kilocode/releases
- Context: per the Kilo README, "Kilo CLI is a fork of OpenCode, enhanced to work within the Kilo agentic engineering platform." Source: https://github.com/Kilo-Org/kilocode
- **No changelog is published for the v2 channel.** The `kilo-v2` package ships no README and no release notes; feature-level claims about v2 cannot be made from public artifacts. The only public v2 signal found is a GitHub issue describing v2 work items (e.g. "#15715 — v2: port the Kilo /about command", noting "the config path is the `kilo2` global config directory … not the v1 kilo one"). Source: https://github.com/Kilo-Org/kilocode/issues/15715

---

## 10. Zed — rolling `nightly` / `collab-staging`

Both rolling tags were refreshed in-window at **2026-11-03T13:37:20Z** with the same entry title: "nightly: Do not panic on wrong grammar results (#66474)" / "collab-staging: Do not panic on wrong grammar results (#66474)". It closes issue #65051 — the code no longer panics if an underlying grammar returns an error (it simply shows no highlights); the slim extension itself still needs a newer tree-sitter grammar.
Source: https://github.com/zed-industries/zed/releases/tag/nightly
No stable Zed release in window (`v1.26.2` 2026-10-28, `v1.27.0-pre` 2026-10-28).

---

## 11. Quiet tools (no in-window release)

| Tool | Latest release | Published (UTC) | Source |
|---|---|---|---|
| Qwen Code | `v0.26.6` (+ `0.26.5-nightly.20261102.0441faff21`, `sdk-typescript-v0.1.27`) | 2026-11-02T18:22:40Z / 22:31:13Z / 19:09:07Z | https://github.com/QwenLM/qwen-code/releases |
| Qwen Code (npm) | `@qwen-code/qwen-code@0.26.6` | 2026-11-02T18:35:34Z | https://registry.npmjs.org/@qwen-code/qwen-code |
| oh-my-pi | `v18.16.0` | 2026-11-02T19:49:20Z | https://github.com/can1357/oh-my-pi/releases/tag/v18.16.0 |
| oh-my-pi (npm) | `@oh-my-pi/pi-coding-agent@18.16.0` | 2026-11-02T20:03:14Z | https://registry.npmjs.org/@oh-my-pi/pi-coding-agent |
| Pi upstream | `earendil-works/pi v1.5.0` | 2026-11-02T11:05:31Z | https://github.com/earendil-works/pi/releases/tag/v1.5.0 |
| Crush (Charm) | `nightly` rolling tag | 2026-11-03T00:36:08Z | https://github.com/charmbracelet/crush/releases/tag/nightly |
| Antigravity CLI | `1.4.12` | 2026-10-30T21:56:07Z | https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.12 |
| OpenCode | `v2.2.5` | 2026-10-30T23:17:23Z | https://github.com/anomalyco/opencode/releases/tag/v2.2.5 |
| OpenCode (npm) | `opencode-ai@1.19.5` | 2026-10-28T06:17:11Z | https://registry.npmjs.org/opencode-ai |
| goose | `v1.57.0` | 2026-10-28T19:42:57Z | https://github.com/aaif-goose/goose/releases/tag/v1.57.0 |
| Cline | `v4.1.26` (+ `desktop-nightly-20261030214224`) | 2026-10-26T09:06:50Z / 2026-10-30T21:21:13Z | https://github.com/cline/cline/releases |
| Aider | `v0.86.0` | 2025-08-09T17:42:19Z | https://github.com/Aider-AI/aider/releases |
| Kilo Code CLI (v1 line) | `7.8.25` (npm) / `v7.8.25` pre-release (GitHub) | 2026-10-28T20:46:41Z / 20:51:19Z | https://github.com/Kilo-Org/kilocode/releases |
| Augment Auggie (stable) | `0.36.0` (npm `latest`) | pre-window | https://registry.npmjs.org/@augmentcode/auggie |
| Factory Droid | `droid@1.2.0` (pre-window) | 2026-11-03T01:14:52Z | https://registry.npmjs.org/droid |

---

## 12. Company announcements in window

### GitHub Changelog (6 in-window items)
Source feed: https://github.blog/changelog/feed/
- **2026-11-04T00:32:19Z — "BYOK and enterprise custom models in the Copilot usage API."** The Copilot usage metrics API now separates bring-your-own-key usage from Copilot-hosted model usage. *Local BYOK* (configured by the developer; requests go from Copilot CLI or the Copilot app straight to the provider key or local model — Ollama, Foundry Local, LM Studio, llama-server) appears in `used_local_byok`, `totals_by_local_byok` and active-local-BYOK user counts. *Enterprise custom models* (configured by admins in GitHub settings; requests route through GitHub) are identified by `is_custom_enterprise_model` in `totals_by_client`. Both appear in enterprise and organization reports, at user and aggregate level, in 1-day and 28-day reports. https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api
- **2026-11-03T20:24:07Z — "Dependabot version updates support Agent Package Manager."** Dependabot opens PRs to update supported git dependencies declared in `apm.yml` and regenerates `apm.lock.yaml` when present. Version updates only, not security updates. Configure an `apm` entry in `.github/dependabot.yml` with the directory containing `apm.yml` and an update schedule. Generally available on github.com for all plans; coming to GitHub Enterprise Server 3.24. https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager
- **2026-11-03T15:27:13Z — "Look up a resource's cost center with the GitHub REST API."** https://github.blog/changelog/2026-11-03-look-up-a-resources-cost-center-with-the-github-rest-api
- **2026-11-03T15:11:46Z — "GitHub Copilot is now available in JetBrains Air."** Agent Client Protocol (ACP) based; tasks can run in the JetBrains IDE or in the cloud; Copilot's agent picker lets you use an existing Copilot subscription; parallel agent sessions with in-context review; cloud tasks run in isolated environments via Air Teams and consume the Copilot plan. https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air
- **2026-11-03T14:56:03Z — "CodeQL 2.27.3 adds Python 3.15 features and JSON data extensions."** https://github.blog/changelog/2026-11-03-codeql-2-27-3-adds-python-3-15-features-and-json-data-extensions
- **2026-11-03T13:49:32Z — "Dependabot now supports Python 3.15."** https://github.blog/changelog/2026-11-03-dependabot-now-supports-python-3-15
(2026-11-03T07:55:58Z "GitHub Desktop adds short-lived authentication tokens" — slug dated 11-02, feed timestamp in window.)

### OpenAI News (RSS https://openai.com/news/rss.xml)
- **2026-11-03T12:00:00Z — "Accelerating engineering for the physical world."** OpenAI describes teaching models to support mechanical/electrical engineering and end-to-end system design — preparing drawings, setting up simulations, coordinating changes across disciplines — and testing Astra / GPT-6 in multimodal and computer-use workflows to design a device (enclosure, PCB, software integrations) without direct human edits. OpenAI invites software vendors and engineering firms in design/simulation/manufacturing to collaborate on computer-use research. No CLI-specific announcement. https://openai.com/index/accelerating-engineering-for-the-physical-world
- 2026-11-03T08:00:00Z — "How Cisco defends at machine speed with OpenAI." https://openai.com/index/cisco-cyber
- 2026-11-03T08:00:00Z — "Heimstaden is changing residential real estate management with AI." https://openai.com/index/heimstaden
- (2026-11-03T00:00:00Z "OpenAI appoints Jill Hazelbaker as Chief Corporate Affairs Officer" — pre-window edge, see §15.)

### Anthropic
- No `/news` post published in the window. The news index's most recent item is dated Oct 28, 2026 ("AI for Science expands to foundations and research institutions"). The only in-window Anthropic page change is a research post, **"Progress on provable inference for large language models"** (page date Nov 2, 2026; sitemap `lastmod` 2026-11-03T19:10:19Z). Source: https://www.anthropic.com/research/provable-inference
- Anthropic has no working RSS endpoint (`https://www.anthropic.com/news/rss.xml` → 404); the news index is a Next.js SPA and was parsed from its embedded `self.__next_f` payload. `https://www.anthropic.com/sitemap.xml` works and is the reliable discovery path.

### Vendors with no in-window announcement
- **Factory** — `https://factory.ai/news` (no RSS: `/news/rss.xml` → 404) is a Next.js SPA whose embedded JSON payload exposes `title` + `date` pairs. Newest posts by date: 2026-10-30 "Factory Acquires Typedef: Bringing Data Context to the Software Factory", 2026-10-29, 2026-10-26, 2026-10-19, 2026-10-15, 2026-10-14, 2026-10-12, 2026-10-09. **Newest is 2026-10-30 — no in-window post.** (`factory.ai/blog` and `factory.ai/blog/rss.xml` both return 404.)
- **Charm** — https://charm.land/blog/rss.xml (charm.sh/blog/rss.xml 301-redirects) latest post is 19 Mar 2026 ("Crush + Docker MCP"). No in-window post.
- **Sourcegraph** — https://sourcegraph.com/blog/rss.xml latest post is 21 Oct 2026. No in-window post.
- **Qwen** — qwenlm.github.io/blog has no dated RSS (404) and qwen.ai/blog is a client-rendered page with no extractable dates; the blog index lists Qwen3Guard, Qwen-Image-Edit, Qwen-Image, GSPO, Qwen-MT with no dates. **No verifiable in-window Qwen announcement.**
- **Google** — blog.google feeds show 2026-11-03 posts about AI in education and a Nov 2 roundup of October AI announcements; nothing CLI-specific. https://blog.google/technology/ai/rss/

---

## 13. New entrants / trending in window

### GitHub — new repos created inside the window
Source: GitHub repo search `created:2026-11-03..2026-11-04 (cli OR agent) in:name,description`, sorted by stars.
- **KKKKhazix/agent-autoloop** — 407 stars, created 2026-11-03T08:02:11Z. "让你的命令行 Agent 在后台自己接活、自己跟进到底；平时不烦你，遇到拿不准的事才发卡片找你拍板。" — lets your CLI agent take on and follow through work in the background, staying quiet unless it needs a decision. https://github.com/KKKKhazix/agent-autoloop
- **capri-com/Capri-AI** — 82 stars, created 2026-11-03T18:37:09Z (last push 18:56:32Z). "Edgerunners-inspired AI agent for your desktop. Works with Claude Code, Codex, Antigravity & more." https://github.com/capri-com/Capri-AI
- **deanyool/lorevault** — 23 stars, created 2026-11-03T01:13:59Z. Turns AI coding-agent chat history into an Obsidian/Logseq knowledge graph.
- **Teraverse-AI/atoll** — 13 stars, created 2026-11-03T02:45:12Z. "Agentic Task Ontology for LLM — a lightweight, Archipelago-compatible harness."
- **sagarmainkar/hermes-genui** — 12 stars, created 2026-11-03T11:24:44Z. "Generative UI for Hermes Agent: charts, tables, plans, calculators and explainers."
- **Kemerd/claude-hardware-in-the-loop** — 11 stars, created 2026-11-03T22:00:57Z. Claude Code skill + swarm orchestration for hardware-in-the-loop engineering.
- **unixzii/tcc-bypass** — 8 stars, created 2026-11-03T09:36:20Z. Temporarily bypass TCC permission audit for agent-friendly development.
- Also in-window skill repos: `aligh98/tts-director` (33★), `liangdabiao/comic-story-video` (31★), `marcosnovo/unslop-design` (8★), `Essoz/pdf2midi` (8★), `devcelio/retro-profile-readme` (14★), `szhu994/engineering-fluid-mechanics-skill` (17★).

### GitHub — high-velocity repos created just before the window (trending, not in-window-created)
- **Balanov/uncut** — 593 stars, created 2026-11-01T17:19:30Z. "The lossless, headless coding agent harness. One 7 MB static binary, four tools, plain stdin/stdout, no silent cuts." https://github.com/Balanov/uncut
- **Balanov/shim** — 436 stars, created 2026-11-02T17:54:29Z. "Tiny local-first AI harness: any model, MCP and Agent Skills, natural-language CLI."
- **Balanov/verdict** — 225 stars, created 2026-11-02T19:14:51Z. "A 197 KB local semantic verifier for AI agent tool calls. Exit code 0 is not proof."
- **deepseek-ai/dsh-superagent-prototype** — 16,843 stars, created 2026-10-31T09:32:46Z. "Towards a More Autonomous Agent System" — still no GitHub Releases (prototype code only). https://github.com/deepseek-ai/dsh-superagent-prototype

### npm — packages published inside the window (date-sorted search)
Source: npm search API `sort=date`, filtered to `date >= 2026-11-03T01:28:00Z`.
- **`@qoder-ai/qodercli` `1.1.82` — 2026-11-03T13:57:35Z** — "Qoder AI CLI - AI-powered coding assistant"; bins `qoder` and `qodercli`; homepage https://qoder.com/cli. Vendor CLI (Alibaba/Qoder); previous release `1.1.81` was 2026-10-29, so this is a notable jump from an existing but tracked-outside tool. https://registry.npmjs.org/@qoder-ai/qodercli
- **`@nifrajs/coding-agent` `5.12.1` — 2026-11-03T20:40:01Z** — "Standalone, extensible Nifra coding-agent host and CLI"; repo https://github.com/nifrajs/nifra
- **`@code-yeongyu/senpi` `2026.11.3-3` — 2026-11-03T21:12:58Z** — "Coding agent CLI with read, bash, edit, write tools and session management" (pi-lineage fork).
- **`@averyyy/pi-coding-agent` `1.5.0-piclient.2` — 2026-11-04T01:02:51Z** — pi-lineage fork tracking pi 1.5.0.
- **`freebuff` `0.2.36` — 2026-11-03T12:42:28Z** — "The world's strongest free coding agent"; repo github.com/CodebuffAI/freebuff-private.
- **`@sideboard-ai/cli` `0.1.330` — 2026-11-04T01:02:06Z** — "Sideboard CLI — agent-agnostic worktree orchestration (includes `sideboard mcp`)"; repo github.com/mattlevine/sideboard.
- **`teapot-coding-agent` `0.37.128` — 2026-11-04T00:20:55Z** — "A lightweight, always-on multi-agent harness for AI coding agents"; repo github.com/akku1139/teapot.
- **`@integrity-labs/agt-cli` `0.28.1192` — 2026-11-04T00:31:37Z** — "Augmented Team CLI — agent provisioning and management".
- **`@orq-ai/cli` `12.7.13` — 2026-11-03T21:18:27Z** (+ `12.8.0-rc.28`…`rc.31` through 2026-11-03T22:02:54Z) — orq.ai API CLI; repo github.com/orq-ai/orq-cli.
- **`@ycodium-ai/agent-codex` `0.2.3990` — 2026-11-04T00:34:01Z** — "Codex executor: Codex CLI over the app-server JSON-RPC protocol."
- **`@brainervirus/workit-codex` `8.55.0` — 2026-11-04T00:00:13Z** — "Workit Codex CLI/desktop plugin — shared MCP transport, hooks, methods."
- **`@bitfun-test/bitfun` `0.2.19-daily.20261102.1` — 2026-11-03T08:44:09Z** — BitFun CLI daily build.
- **`cyberneurova-cli` `0.22.1` — 2026-11-03T04:10:29Z** — "The CyberNeurova terminal AI coding agent".
- **`@agentclientprotocol/claude-agent-acp` `0.100.0` — 2026-11-02T14:38:37Z** — pre-window, but relevant: ACP-compatible Claude Agent SDK agent (ACP momentum continues; see Copilot in JetBrains Air announcement).
- **`@epoch-agent/cli` `3.1.2` — 2026-11-03T03:30:33Z** — "epoch-agent CLI 入口" (epoch-agent CLI entry point); repo https://github.com/Ddbor/epoch-agent. https://registry.npmjs.org/@epoch-agent/cli
- **`@dreb/coding-agent` `2.75.0` — 2026-11-03T19:51:34Z** — "Coding agent CLI with read, bash, edit, write tools and session management"; repo https://github.com/aebrer/dreb (packages/coding-agent). https://registry.npmjs.org/@dreb/coding-agent
- **`@xenosystem/agent-cli` `0.5.178` — 2026-11-03T20:13:44Z** — "Autonomous developer agent CLI for continuous software engineering across repositories, terminals, and model backends"; repo https://github.com/XENO-CORPORATION/xeno-agent-cli. https://registry.npmjs.org/@xenosystem/agent-cli
- **`@agent-link/agent` `0.1.347` — 2026-11-03T02:12:38Z** — "AgentLink local agent CLI"; repo https://github.com/yilee/agentlink (agent/ workspace). https://registry.npmjs.org/@agent-link/agent
- **`@duyquangnvx/create-agent-cli` `0.23.0` — 2026-11-03T06:45:31Z** — scaffolding tool that "Creates a new Agent CLI repository wired to @duyquangnvx/agent-cli". https://registry.npmjs.org/@duyquangnvx/create-agent-cli

### GitHub — in-window repo worth calling out (protocol, not a CLI)
- **MiniMax-AI/mcode-agent-table** — created 2026-11-03T12:29:06Z. **BYOB Table Protocol v0.1** — "bring your own agent (MiniMax Code and others) to one shared table for any-topology discussion and collaboration". Ships `SPEC.md` + JSON Schemas (`byob/0.1`) and a TypeScript reference implementation: an append-only ledger, seats with signed capability cards, topology policies, floor control, and a commit gateway enforcing one rule — *"bots propose; the affected owner approves; that owner's own bot executes; another seat verifies."* Notably the table owns no bot: each seat's agent keeps its owner's memory, identity, permissions and accounts. https://github.com/MiniMax-AI/mcode-agent-table

### Additional in-window npm packages (verified individually via registry time maps)
These were not returned by the date-sorted npm search endpoint but were confirmed by direct registry lookups: `@kilocode/cli@0.0.0-v2-25` (17:27:12Z — see §9), `@augmentcode/auggie` five prereleases (17:26:30Z–23:21:25Z — see §8), `@bastani/atomic@0.9.71` (2026-11-04T01:12:27Z), `@google/gemini-cli-core@0.67.0-nightly.20261104.g89e9d25d6` (2026-11-04T01:23:20Z), `@sourcegraph/amp@0.0.1793750459-gc8c68b` (2026-11-04T00:22:52Z), `@github/copilot@1.0.106-7` (2026-11-03T23:34:47Z), `hermes-agent@0.22.7` (2026-11-04T01:25:50Z).

---

## 14. Notable cross-cutting signals

1. **Terminal escape-sequence hardening is the dominant theme in Copilot CLI v1.0.106-7** — at least 12 of its fixes are about control characters/escape sequences not being passed to the terminal (branch names, diffs, hook messages, plugin metadata, SQL/tool error text, command output including DEL/C1 bytes). Copilot CLI's `/settings` dashboard (v1.0.106-6) and unified search are the other headline UX changes.
2. **Claude Code v2.1.318 is a stability/credentials release** — the bulk of its notes are about credential expiry visibility (`loginExpiresAt`, `credential_expires_at`, 10-day warning), config-file locking on shared network homes, and `remote-control`/runner binary-lifetime bugs (spawn ENOENT after version cleanup).
3. **Atomic shipped three stable versions in 24 hours** and moved to **pi 1.5.0**, making `history://` recall and model-identity discovery the notable additions; 0.9.71 carries an explicit extension-API breaking change (`AgentTool` schema kinds).
4. **ACP is consolidating as the agent integration protocol**: GitHub Copilot in JetBrains Air (ACP), Gemini CLI nightly fixing ACP `session/load` history replay, Copilot CLI `--agent` support in ACP mode, and `@agentclientprotocol/claude-agent-acp` on npm.
5. **Dependabot now understands Agent Package Manager** (`apm.yml` / `apm.lock.yaml`) — the first major package-manager-tooling integration for agent skill/prompt packages. `microsoft/apm` itself is at v0.35.0 (2026-10-22, pre-window).
6. **Two vendors shipped unversioned "next-generation" channels in-window without publishing a changelog**: Augment's `auggie-v2` prerelease line (`v1.2.0-prerelease.20261103*`, three builds in ~6 h, plus a parallel v0-line prerelease track) and Kilo Code's `kilo-v2` npm dist-tag (`0.0.0-v2-25`, an 8 KB launcher stub for a separate `kilo2` config directory). Both are structurally the same move — a parallel v2 channel shipped as prerelease/build artifacts while the stable line keeps shipping — but neither publishes feature notes, so neither can be assessed from public artifacts.
7. **MiniMax published a protocol, not a CLI**: the in-window BYOB Table Protocol v0.1 (`MiniMax-AI/mcode-agent-table`) proposes multi-agent collaboration where the shared table owns only an append-only ledger and commit gateway, while each participant's agent retains its owner's identity, memory and permissions — an explicit separation of "session" from "agent identity".

---

## 15. Gaps / errors / method notes

- **GitHub REST API rate limit hit** (unauthenticated, 60 req/h) mid-run — switched to `releases.atom` feeds for release enumeration, which also give full changelog bodies. Remaining REST calls were replaced by atom/npm lookups. Repo metadata for `QoderAI/qoder`, `nifrajs/nifra`, `code-yeongyu/senpi`, `bitfun-ai/bitfun` could not be confirmed (404/rate-limited).
- **Codex CLI alpha release bodies carry no changelog** — `rust-v0.167.0-alpha.4`, `alpha.5`, `0.168.0-alpha.1` bodies are literally "Release X". No feature-level claims are possible for Codex in this window.
- **Amp has no public changelog** (`ampcode.com/changelog` requires sign-in; the GitHub repo is 404/private). Only npm build identifiers and timestamps could be reported — no feature content.
- **Factory Droid has no public GitHub release feed** (`Factory-AI/factory` releases.atom is empty). npm `droid`/`@factory/cli` is the only signal, and `droid@1.3.0` landed at 2026-11-04T01:32:05Z — **4 minutes after the window closed**, so it is reported as a post-window edge item, not an in-window release.
- **Anthropic has no RSS**; `anthropic.com/news/rss.xml` → 404 and the index is a Next.js SPA. The sitemap (`anthropic.com/sitemap.xml`) was used instead; it exposes `lastmod` but not publish dates, so publish dates were taken from the page body. Only one Anthropic page was touched in-window (research/provable-inference, page date Nov 2).
- **Qwen's blog has no machine-readable dates** (no RSS; qwen.ai/blog is client-rendered) — Qwen announcements in-window could not be confirmed or ruled out.
- **Charm RSS** is at `charm.land/blog/rss.xml` (charm.sh 301-redirects); `factory.ai/blog` and `factory.ai/blog/rss.xml` return 404.
- **web_fetch used twice** (OpenAI "Accelerating engineering for the physical world"; Kilo CLI landing page `kilo.ai/cli`); direct `curl` of the OpenAI URL later returned 403, so the fetched extract is the authoritative copy of that post. **web_search used three times**; the first was listicle-only, the second confirmed Qoder CLI's identity/vendor, the third confirmed that Kilo CLI v2 has no published changelog.
- **`cumulative_findings.md` was **not** read in full; only `grep -n "^## "` and targeted greps were used to check novelty (e.g. `dsh-superagent-prototype` already covered on 2026-11-03; `Balanov/*`, `agent-autoloop`, `Capri-AI`, `qodercli` were new). A targeted grep confirmed **neither Kilo Code nor Augment/Auggie had been covered in any prior day's cumulative findings or in the 2026-11-04 community file** — both are genuinely new to the knowledge base.
- **The date-sorted npm search API (`sort=date`) is unreliable as a completeness tool.** In the second pass it returned only 5 of the ~15 in-window agentic-CLI packages; six packages that were definitely published in-window (`@kilocode/cli`, `@augmentcode/auggie`, `@epoch-agent/cli`, `@dreb/coding-agent`, `@xenosystem/agent-cli`, `@agent-link/agent`) did not appear in its results. **Recommendation for future runs: enumerate candidate tools from a known-package list and query `registry.npmjs.org/<pkg>` directly for each, rather than relying on npm search.**
- **`augmentcode/auggie` has no stable GitHub release mapping** — the release feed carries only the `auggie-v2` prerelease channel (`auggie-v2 v1.2.0-prerelease.20261103*`); the npm `0.37.0-prerelease.*` builds have no matching GitHub tag, and the npm package declares no `repository` field. The Auggie **release bodies contain only install instructions and trust metadata** (Node SEA binaries, unsigned macOS `-sea` assets, `SHA256SUMS-sea` for Linux) — there is no changelog for any in-window build.
- **Kilo Code CLI v2 has no public changelog and no GitHub release.** The only in-window artifact is an 8,191-byte npm launcher stub (`bin: {"kilo2": "bin/kilo2.exe"}`, `postinstall: node ./postinstall.mjs`) under the `kilo-v2` dist-tag; the Kilo README documents only the v1 install paths (`npm install -g @kilocode/cli`, `curl -fsSL https://kilo.ai/cli/install | bash`). `kilo.ai/cli/install-v2` and `kilo.ai/cli/v2/install` return 404, and the Kilo README's "Where did Kilo CLI come from?" section still describes v1 as the OpenCode fork.
- **The `google/blog.google` AI feed's newest item is 2026-11-02** ("The latest AI news we announced in October 2026"); the 2026-11-03 items that do exist are education/teacher-focused ("AI in the learning era", "New research shows how Guided Learning supports students", "We're providing funding for organizations building AI for teachers"), none CLI-specific. **Google Developers Blog** (`developers.googleblog.com/feeds/posts/default`) returned an unparseable feed — unresolved gap.
- **`sourcegraph.com/blog/rss.xml` is reachable but its latest post is 2026-10-21** ("php2shell: patching PHP is easy, finding it is the hard part"); no in-window Sourcegraph blog post. `sourcegraph.com/blog` returns no parseable date metadata.
- **`factory.ai/news` returned no extractable date metadata** on direct fetch (SPA), so the "no in-window Factory announcement" conclusion rests on the prior attempt's scrape of the index plus the confirmed absence of `factory.ai/blog` and `factory.ai/blog/rss.xml` (both 404).
- **Copilot CLI's in-repo `changelog.md` is not maintained past `1.0.105`** — `https://raw.githubusercontent.com/github/copilot-cli/main/changelog.md` starts at `## 1.0.105 - 2026-10-27`. The in-window hotfix builds `v1.0.106-6` and `v1.0.106-7` therefore have **no changelog entry in the repo**; their notes exist only in the GitHub Release bodies, which were used here. The `v1.0.106-x` builds are not even on npm's `latest` tag (npm `latest=1.0.105`, `prerelease=1.0.106-7`).
- **A few pre-window timestamps in §11 were read from the GitHub REST API's `published_at` while `releases.atom` exposes `<updated>`, and the two differ by up to ~1 h** (e.g. Qwen Code `v0.26.6`: API `published_at` 2026-11-02T18:22:40Z vs atom `<updated>` 2026-11-02T19:39:20Z; nightly `0.26.5-nightly.20261102.0441faff21`: 22:31:13Z vs 23:42:19Z). All affected releases are pre-window, so the in-window/quiet classification is unaffected.
- **Window-edge items (published outside the window, listed for completeness):**

| Tool | Version | Published (UTC) | Source |
|---|---|---|---|
| Claude Code | `v2.1.317` | GitHub 2026-11-03T01:25:46Z (npm 2026-11-02T23:57:53Z) — 2 min before window start | https://github.com/anthropics/claude-code/releases/tag/v2.1.317 |
| GitHub Copilot CLI | `v1.0.106-5` | 2026-11-03T01:13:23Z — 15 min before window start | https://github.com/github/copilot-cli/releases/tag/v1.0.106-5 |
| Gemini CLI | `0.67.0-nightly.20261103.g0ac57c029` | GitHub 2026-11-03T01:18:35Z / npm 01:25:09Z — pre-window | https://github.com/google-gemini/gemini-cli/releases |
| Crush | `nightly` | 2026-11-03T00:36:08Z — pre-window | https://github.com/charmbracelet/crush/releases/tag/nightly |
| Factory Droid | `droid@1.2.0` / `@factory/cli@1.2.0` | 2026-11-03T01:14:52Z / 01:14:58Z — pre-window | https://registry.npmjs.org/droid |
| Factory Droid | `droid@1.3.0` / `@factory/cli@1.3.0` | 2026-11-04T01:32:05Z / 01:32:22Z — **4 min after window close** | https://registry.npmjs.org/droid |
| Amp | `0.0.1793664053-ga6248e` | 2026-11-03T00:23:03Z — pre-window | https://registry.npmjs.org/@sourcegraph/amp |
| Amp | `0.0.1793649628-g18d621` | 2026-11-02T20:33:13Z — pre-window | https://registry.npmjs.org/@sourcegraph/amp |
| oh-my-pi (npm) | `pi-agent-zh@18.16.0` | 2026-11-03T00:29:57Z — pre-window | https://registry.npmjs.org/@oh-my-pi/pi-coding-agent |
| OpenAI | Jill Hazelbaker as Chief Corporate Affairs Officer | 2026-11-03T00:00:00Z — pre-window | https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer |
| OpenCode | `v2.2.4` / `v2.2.3` | 2026-10-30T16:59:08Z / 09:55:45Z | https://github.com/anomalyco/opencode/releases |
| Cline | `desktop-nightly-20261030214224` | 2026-10-30T21:21:13Z | https://github.com/cline/cline/releases |
| Gemini CLI | `0.67.0-nightly.20261102.g6814e00d6` | 2026-11-02T01:22:38Z | https://github.com/google-gemini/gemini-cli/releases |
| Augment Auggie | `v1.2.0-prerelease.202611021510` / `…1212` | 2026-11-02T23:23:48Z / 20:24:40Z — pre-window | https://github.com/augmentcode/auggie/releases |
| Kilo Code CLI | `@kilocode/cli@0.0.0-v2-13` / `0.0.0-v2-9` / `7.8.25` | 2026-10-29T09:46:52Z / 2026-10-28T19:48:14Z / 2026-10-28T20:46:41Z — pre-window | https://registry.npmjs.org/@kilocode/cli |
| goose | `v1.57.0` | 2026-10-28T19:42:57Z — pre-window | https://github.com/aaif-goose/goose/releases/tag/v1.57.0 |

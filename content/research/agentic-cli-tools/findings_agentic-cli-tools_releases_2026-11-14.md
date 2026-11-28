# DIAC — Releases findings — agentic-cli-tools — 2026-11-14

**Window (in-window = publish time within):** 2026-11-13T01:28:00Z → 2026-11-14T01:28:00Z
**Collector:** `releases` subagent (OpenClaw / Researcher on Andromeda)
**Working dir:** `/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools`
**Raw captures:** `tmp/2026-11-14/`
**Method:** npm registry + GitHub `releases.atom` + vendor feeds, fetched via `curl`; **3 of 3 allowed `web_search` calls consumed** (Cursor X-Subscription, Cursor CLI changelog, Conductor wind-down) and **1 of 1 `web_fetch` calls consumed** (OpenAI Help Center ChatGPT release notes). All timestamps are UTC.

---

## 1. Claude Code v2.1.325 — SHIPPED IN-WINDOW, ships a security fix but does NOT name the CVE (watchlist item 1 RESOLVED with caveat)

**Finding:** A new Claude Code release **v2.1.325** was published **2026-11-13T20:40:01Z** (GitHub release `published_at`) / npm `@anthropic-ai/claude-code` version `2.1.325` published **2026-11-13T20:07:25.823Z** — both timestamps are **IN-WINDOW**. This is the first Claude Code release after v2.1.323, so the carry-over watchlist question ("did a release after v2.1.323 ship in-window?") is answered **YES**.

Release notes headline items (verbatim from the release body):
- "Fixed a security issue in how zstd-compressed responses are decoded"
- "Added a spinner tip in VS Code and similar integrated terminals about re-running a notebook cell, shown once Claude has read or edited a Jupyter notebook"
- "Added a line under the error shown when your organization's policy blocks a request, saying how to continue: run `/rewind` and change the message, or run `/clear`"
- "Added a note for Claude when a sandboxed git checkout, git stash or autostash pull cannot update protected files such as those in `.claude`"
- "Fixed subagents with their own model being moved to the plan-mode model when the model setting is `opusplan` or `haiku`"
- "Fixed subagents on a different model sizing file reads and MCP results with the main session's model"
- "Fixed sessions on many third-party gateways and Foundry stopping with a context length error on every turn instead of compacting"
- "Fixed recent turns sometimes going missing from a resumed session after Claude Code stopped without a clean exit"
- "Fixed a saved `sonnet[1m]` model setting being rewritten on a new install to a model id the API rejects"

Changelog page structure for 2.1.325 (from the official docs changelog): **14 improvements + 88 bug fixes** (the release notes body itself enumerates 88 bug fixes). Notable *improvements* (not fixes):
- "Improved startup time: sandbox and MCP bring-up no longer block the first frame, bare launches skip subcommand registration, and workflow discovery, settings, and trust-store work is cheaper"
- "Improved native install and auto-update download size: **the binary is now zstd-compressed (about 75 MB instead of 340 MB on Linux x64)**"
- "Improved native binary size: about 2 MB smaller by storing the bundled skill and prompt text more compactly"
- "Improved memory usage of native builds: code is now loaded on demand instead of keeping the whole bun…"
- "Improved the account email check: it now also refuses your email as a client's identity in scripts a command runs, file writes, web fetches and MCP calls"
- "Improved attribution of usage telemetry to your organization for sessions that authenticate with `ANTHROPIC_AUTH_TOKEN` directly against the Anthropic API"

### 1a. CVE acknowledgement — NOT confirmed (explicit negative)

- The string **`CVE-2026-88968` does not appear** anywhere in the v2.1.325 release notes **or** in the Claude Code changelog page (grep over the fetched changelog HTML: 0 hits).
- The string **`GHSA-5xjx-9qx6-jcrv` does not appear** either (0 hits).
- The only security-related line is the generic **"Fixed a security issue in how zstd-compressed responses are decoded"** — no CVE/GHSA ID is disclosed.
- **Conclusion:** the release *plausibly* addresses the previously flagged issue, but **Anthropic does not acknowledge CVE-2026-88968 / GHSA-5xjx-9qx6-jcrv by identifier in the notes**. Do not upgrade the earlier finding to "acknowledged". Treat as "security fix shipped, advisory not named".

### 1b. "Code Mode" is NOT the default — still experimental, off by default (watchlist item 1, sub-question answered)

- The Code Mode doc page now **resolves: HTTP 200** (`curl -sL -o /dev/null -w '%{http_code}'` → `200`).
- The page text states verbatim: **"Code Mode is experimental and off by default. It may change or be removed in any release."**
- Enablement is still via env var `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` (or `settings.json` → `env`), and the page notes Claude Code **ignores that variable in a project's settings files**, so a cloned repo cannot turn Code Mode on for you.
- **Conclusion:** Code Mode shipped in v2.1.323 as an **opt-in experimental feature and remains OFF by default as of v2.1.325**. It has *not* become default.
- **Additional detail read from the (now-200) Code Mode page:** it warns that the feature **"doesn't reach v2.1.323, wait for stable to catch up or switch to latest"** — i.e. the doc currently targets a build newer than 2.1.323, consistent with `2.1.325` being the current `latest`/`next` npm tag. The page also states Claude Code **"ignores that variable in a project's settings files"**, so a cloned repo cannot silently enable Code Mode for you.

### 1c. npm version table anomaly (worth noting)

npm `@anthropic-ai/claude-code` shows **three** in-window version records: `2.1.324` (2026-11-13T18:42:36.300Z), `2.1.325` (2026-11-13T20:07:25.823Z), plus a `modified` bump (2026-11-13T20:39:09.943Z). However:
- The **GitHub release feed for `anthropics/claude-code` has NO v2.1.324 entry** — the sequence is v2.1.325 → v2.1.323 → v2.1.322.
- The **official changelog page has NO 2.1.324 section** — the version index runs 2.1.325, 2.1.323, 2.1.322, 2.1.321, 2.1.319…
- So **2.1.324 was published to npm but appears to have been pulled/skipped** (a transient build), and **2.1.325 is the only publicly documented in-window Claude Code release**. npm `deprecated` field is not set on 2.1.323/2.1.324/2.1.325.

Sources:
https://github.com/anthropics/claude-code/releases.atom
https://api.github.com/repos/anthropics/claude-code/releases?per_page=6
https://registry.npmjs.org/@anthropic-ai/claude-code
https://code.claude.com/docs/en/changelog
https://code.claude.com/docs/en/code-mode

---

## 2. Claude Agent SDK 0.3.325 — in-window, version-locked to Claude Code

**Finding:** `@anthropic-ai/claude-agent-sdk` published `0.3.324` at **2026-11-13T18:47:06.217Z** and `0.3.325` at **2026-11-13T20:05:51.004Z** — both **IN-WINDOW**. `dist-tags`: `latest` = `0.3.325`, `next` = `0.3.325`. The SDK patch numbering (0.3.32x) tracks the Claude Code patch number (2.1.32x) exactly, i.e. SDK 0.3.325 ↔ Claude Code 2.1.325 — the same coupling observed on prior days. The SDK published ~2 minutes *before* the Claude Code package itself (20:05:51 vs 20:07:25).

Source:
https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

---

## 3. GitHub Copilot CLI — 1.0.111 and 1.0.112 both shipped in-window (watchlist item 2: > 1.0.110 CONFIRMED)

**Finding:** The carry-over watchlist asked whether Copilot CLI moved past 1.0.110. **It did — twice, both IN-WINDOW.**

| Tag | Published (UTC) | In-window | Notes |
|---|---|---|---|
| `1.0.111-0` (prerelease) | 2026-11-13T02:15:45Z | YES | Added regex support to enterprise-managed Shell/Bash/PowerShell permission rules; added `--host-allow-session-creation`; org support links in policy guidance; indexed search available sooner after restart |
| `1.0.111` (stable) | 2026-11-13T13:40:16Z (GH) / npm 13:42:41Z | YES | Regex support for enterprise-managed shell permission rules; `--host-allow-session-creation`; refresh `/usage` premium request usage; prevent duplicate MCP OAuth reconnects and keep servers in `needs-auth` after cancelled auth; markdown-table width fixes |
| `1.0.112-0` (prerelease) | 2026-11-13T19:37:45Z (GH) / npm 19:37:50Z | YES | Best-effort startup on macOS Ventura 13.5+ without expanding official OS support; **use each model's recommended context window by default** while preserving explicit choices; `/chronicle cost-tips` now includes Copilot App sessions and recommends cheaper models/reasoning settings |
| `1.0.112` (stable) | 2026-11-13T23:59:41Z (GH) / npm 23:59:41Z | YES | A failed `/compact` shows the provider's error message without an internal host-rethrow prefix; unsent prompts keep pasted text instead of the literal `[Paste #N - M lines]` placeholder; `/plugin manager` no longer shows an unloaded repo plugin as enabled |

npm `dist-tags` for `@github/copilot`: `latest` = **1.0.112**, `prerelease` = `1.0.112-0`, `unstable` = `1.0.106-8.unstable.r43360710077.gff3c476` (also published in-window, 06:03:27Z).

Sources:
https://github.com/github/copilot-cli/releases.atom
https://registry.npmjs.org/@github/copilot

---

## 4. OpenAI Codex CLI — TWO stable releases in-window (0.168.0 and 0.169.0) + five alpha builds (watchlist item 2: stable CONFIRMED, alpha notes status)

**Finding:** Codex CLI shipped **two** stable versions inside the window, plus a dense alpha train for 0.171.0.

| Tag | Published (UTC) | In-window | Notes quality |
|---|---|---|---|
| `0.168.0` | 2026-11-13T03:56:26Z | YES | Full release notes |
| `0.171.0-alpha.1` | 2026-11-13T04:20:31Z | YES | Stub only ("Release 0.171.0-alpha.1") |
| `rust-v0.171.0-alpha.3` | 2026-11-13T04:36:47Z | YES | Stub only |
| `0.171.0-alpha.2` | 2026-11-13T08:04:06Z | YES | Stub only |
| `0.169.0` | 2026-11-13T08:39:10Z | YES | Full release notes |
| `0.171.0-alpha.4` | 2026-11-13T19:02:32Z | YES | Stub only |
| `0.171.0-alpha.5` | 2026-11-14T01:25:03Z | YES | Stub only ("Release 0.171.0-alpha.5") |

npm `@openai/codex` `dist-tags`: `latest` = **0.169.0**, `beta` = `0.1.2505172116`. 35 in-window npm version records (mostly platform-specific optional deps: `0.169.0-linux-x64` 08:47:01Z, `0.169.0-darwin-arm64` 08:48:42Z, `0.169.0-darwin-x64` 08:49:08Z, `0.169.0-win32-arm64` 08:49:56Z, `0.169.0-win32-x64` 08:59:21Z, plus `0.171.0-alpha.4` and its platform variants 19:05–19:17Z).

### 0.169.0 highlights (full notes, in-window)
- New: **multiple side-chat tabs** in the opt-in terminal workspace (switch by keyboard/mouse, reopen saved local side chats after restart)
- New: search older tasks from the agent command center by name, prompt preview, or working directory
- New: "Collapse turn details" in the full-screen transcript
- New: **add or edit custom model providers from the terminal**; with custom gateway onboarding you can create a provider during sign-in and use a device code for supported gateways over SSH or without a local browser
- New: Ctrl+S in the terminal report editor saves a diagnostic ZIP locally even when uploads are disabled
- New: with opt-in Cloud connection on macOS/Linux, send images, choose model and reasoning effort, and archive/restore Cloud conversations from the terminal
- Fix: `codex exec` keeps project config and MCP servers disabled in untrusted directories even with `--sandbox workspace-write` (use `--trust`)
- Fix: Windows sandbox handling for quoted cmd.exe paths and PowerShell sessions with unreadable parent cwd
- Chore: bundled SQLite updated to 3.54 (WAL fixes)

### 0.168.0 highlights (full notes, in-window)
- New: browse model providers under Sessions → Model providers and choose the default for new chats
- New: `features.tui_workspace` — side conversation beside the main chat, draggable divider, `leader z` to zoom
- New: attach recordings with an audio-capable model (rejected recordings skipped on later turns)
- New: `features.image_generation_animation` to generate/edit animated GIFs
- New: `tui.notification_method = "osc777"` terminal notifications

**Alpha notes status:** every `0.171.0-alpha.*` entry in the GitHub feed has **only a stub body** ("Release 0.171.0-alpha.N") — **no real notes**. So the alpha train is verifiable as *existing* but **not** as *documented*. The only two alpha builds with substantive notes would be the rust-tagged ones; `rust-v0.171.0-alpha.3` is also a stub.

Sources:
https://github.com/openai/codex/releases.atom
https://registry.npmjs.org/@openai/codex

---

## 5. opencode v2.3.0 — minor release in-window, subagents-by-default is the story (watchlist item 2: NOT still v2.2.7)

**Finding:** **opencode v2.3.0** published **2026-11-13T08:55:07Z** — **IN-WINDOW**. The carry-over watchlist item "opencode still v2.2.7?" is now **resolved: NO, it is v2.3.0** (v2.2.7 was 2026-11-10T10:37:15Z, out-of-window).

Highlights (verbatim from release body):
- **"Background Subagents by Default"** — "Subagents now return immediately, continue in the background, and report back whenever they become idle. You can keep working in the parent session while multiple subagents run concurrently." (#63382) — subagents now *always* run in the background, return their session ID immediately, and report to their parent when idle
- **"Quieter Transcripts by Default"** — the TUI now summarizes each run of tool calls and thoughts into one collapsible activity row (Verbosity medium/high or `session.verbosity` restores detail) (#63207)
- **"Jump to an Earlier Prompt"** — desktop app command palette / Cmd+Alt+G (Ctrl+Alt+G on Win/Linux) to search prompts across the current session (#63585)
- Experimental **MCP events** support behind the `mcp_events` flag (#63254, #63261, #63269)
- Shell commands now survive server handoffs and keep output when interrupted; experimental backgrounding on timeout behind `shell_timeout_background` (#63024, #63703)
- Local Windows shell commands run through the process daemon; **freeform tool input** support on compatible models; **LM Studio decision-model support**
- Providers can present a client certificate for mTLS gateways (`settings.tls` with `cert`, `key`, optional passphrase) (#61832)
- **"Code Mode gets simpler structured results from file and skill tools"** — write/edit return their confirmation as a string, patch returns an empty result, skill returns the skill's directory and content (#63616, #63635, #63618, #63623) — *note: this is opencode's own Code Mode, a different feature from Claude Code's experimental Code Mode*
- Bug fixes: case-only file renames in patches on case-insensitive filesystems; stale thinking retained after Claude Agent prompts/tools change; directly driven child sessions not resuming after restart; MCP OAuth refreshes and localhost redirects when a server rewrites 127.0.0.1; saved API keys omitted from local-model discovery

Source:
https://github.com/anomalyco/opencode/releases.atom

---

## 6. GitHub Copilot CLI / Zed / Kilo Code / Crush / Amp / Codex — remaining in-window release rows

### 6a. Zed — nightly + collab-staging only (no stable release in-window)
- `nightly: Preserve structured model refusal details (#66929)` — **2026-11-13T13:39:11Z** — IN-WINDOW
- `collab-staging: ui: Add an icon-only variant to the toggle button component (#66937)` — **2026-11-13T15:12:37Z** — IN-WINDOW
- Latest stable remains `v1.28.1` (2026-11-11T19:08:27Z, out-of-window); `v1.29.0`/`v1.29.1-pre` also out-of-window.
Source: https://github.com/zed-industries/zed/releases.atom

### 6b. Kilo Code — JetBrains plugin 7.2.1-rc.6 in-window
- `JetBrains 7.2.1-rc.6` — **2026-11-13T18:06:55Z** — IN-WINDOW
- `jetbrains/v7.2.1-rc.5` — 2026-11-13T16:19:02Z — IN-WINDOW (merge commit)
- Headline in rc.6: **"Added Voice dictation input in the prompt, with a configurable shortcut, speech model discovery, and clear recording limits"**; Agent Manager can group worktrees into color-coded drag-to-reorder sections; fixes for IDE freezes/crashes; **"Mercury autocomplete models are retired; Codestral is now the default autocomplete model"**; **"Kilo charges are now settled from `usage.cost`, with upstream cost used only for BYOK requests"**.
- The VS Code extension line (`v7.8.x`) did **not** ship in-window (last pre-release v7.8.28 on 2026-11-07).
Source: https://github.com/Kilo-Org/kilocode/releases.atom

### 6c. Crush — nightly build in-window
- `nightly` — **2026-11-14T00:43:40Z** — IN-WINDOW. Release body is the standard cosign/checksum verification boilerplate only — **no feature notes**.
- Latest tagged stable remains `v0.101.0` (2026-11-12T16:56:42Z, out-of-window).
Source: https://github.com/charmbracelet/crush/releases.atom

### 6d. Amp — GitHub release feed UNREADABLE; npm shows 6 in-window builds
- `https://github.com/sourcegraph/amp/releases.atom` returns **`Not Found`** (9-byte body) and `api.github.com/repos/sourcegraph/amp/releases` returns **`Not Found`** — the repo/feed is **not publicly reachable from this host** (likely renamed/private). **Flagged as an unread/failed source; no GitHub-derived Amp claims are made.**
- npm `@sourcegraph/amp` **did** publish **6 in-window versions**: `0.0.1794542441-g4e0611` (04:25:42Z), `0.0.1794556834-g6debc9` (08:23:03Z), `0.0.1794571247-g07b20f` (12:27:32Z), `0.0.1794585642-g3af916` (16:22:39Z), `0.0.1794600035-g3776ae` (20:22:56Z), `0.0.1794614453-g43b36a` (**2026-11-14T00:24:48Z** — in-window, and now `latest`). `next` = `0.0.1778732631-gc5875c-singleexe`.
- Version numbers are timestamp-derived, so release *content* is not recoverable from npm metadata.
Sources: https://registry.npmjs.org/@sourcegraph/amp , https://github.com/sourcegraph/amp/releases.atom (failed)

### 6e. Explicit negatives for tracked tools (no in-window release found)
| Tool | Channel checked | In-window? | Latest seen |
|---|---|---|---|
| Cline | GitHub releases.atom + npm `cline` | **NO** | GH `desktop-nightly-20261104233655` (Nov 4); npm `latest` = `3.0.74`, `nightly` = `3.0.73-nightly.1792632285` |
| goose | GitHub releases.atom + npm `goose` | **NO** | GH `v1.59.0` (2026-11-10T17:27:36Z); npm `goose` latest `0.0.3` (unrelated/placeholder package) |
| OpenHands | GitHub releases.atom | **NO** | `v1.40.0` (2026-11-12T14:32:59Z) |
| aider | npm `aider` | **NO** | `latest` = `1.0.1` (long-stable, no in-window publish) |
| Factory Droid | npm | **N/A** | `@factoryai/droid` is **not a valid npm package name** (registry error) — no release data available |
| Antigravity CLI | npm | **N/A** | `@google/antigravity-cli` is **not a valid npm package name** (registry error) — no release data available |
| Grok Build | npm | **N/A** | `@xai-org/grok-cli` is **not a valid npm package name** (registry error) — no release data available |
| `charmbracelet/crush` | npm | **N/A** | not a valid npm identifier; Crush tracked via GitHub only |
| `@openai/codex-cli` | npm | **N/A** | not a valid npm identifier; Codex tracked via `@openai/codex` |
| `@zed-industries/cline` | npm | **N/A** | not a valid npm identifier |


## 7. Gemini CLI — NO in-window stable/preview release; one in-window NIGHTLY on the `-core` package only (watchlist item 2 partly resolved)

**Finding:** The Gemini CLI **nightly publication channel is `@google/gemini-cli-core`**, not `@google/gemini-cli`. Evidence:

- `@google/gemini-cli-core` published **`0.70.0-nightly.20261114.g4ed06ed0d` at 2026-11-14T01:19:10.272Z — IN-WINDOW** (it is the `staging-tmp` dist-tag). The prior night `0.70.0-nightly.20261113.gb9776560e` was published 2026-11-13T01:20:03Z, which is **48 minutes BEFORE the window opens** — out-of-window.
- `@google/gemini-cli` (the CLI wrapper) published **nothing in-window**. Its nightly line **stopped on 2026-11-04** (`0.67.0-nightly.20261104.g89e9d25d6`, 2026-11-04T01:24:24.708Z) — nightlies moved to the `-core` package from 2026-11-05 onward.
- Stable/preview unchanged and both **out-of-window**: `latest` = `0.68.0`, `preview` = `0.69.0-preview.0`. The `google-gemini/gemini-cli` GitHub releases feed shows `Release v0.69.0-preview.0` (2026-11-10T21:05:08Z) and `Release v0.68.0` (2026-11-10T21:17:07Z) as the newest entries — **no in-window GitHub release**.
- Gemini CLI v0.69.0-preview.0 notable PRs (out-of-window context): `feat(cli): add /stats heatmap subcommand for daily token usage` (#30135), `fix(core): preserve literal $ characters during template placeholder replacement` (#30136), `fix(core): prevent GCLI_EXPAND_TARGET env collision in expandEnvVars` (#30138), `fix(core): fix Windows PowerShell substitution false positives and policy handling` (#30110), `fix(cli): preserve leading and trailing whitespace in @file references` (#30150), `fix(cli): serialize AnsiOutput to text content in ACP tool call updates` (#30141).
- v0.68.0 notable PRs (out-of-window context): `docs(readme): clarify Gemini CLI scope, limitations, and tool landscape` (#29995), `fix(core): make isWithinRoot case-insensitive on Windows` (#29999), `feat(cli): add extension validation command and evaluation tests` (#29980).

Sources:
https://registry.npmjs.org/@google/gemini-cli
https://registry.npmjs.org/@google/gemini-cli-core
https://github.com/google-gemini/gemini-cli/releases.atom

### 7a. Gemini 4 Hydrogen adoption *inside* Gemini CLI — NOT present (watchlist item 4)

Verified by unpacking the published `@google/gemini-cli-core` tarball (both `0.68.0` stable and the `0.70.0-nightly.20261114` build):
- `grep -roh "gemini-4[a-z0-9-]*"` over `dist/` → **zero hits**. No `gemini-4-hydrogen`, no `gemini-4-carbon`, no `gemini-4-argon` string anywhere in the shipped bundle.
- The strings `hydrogen` that *do* appear are unrelated analytics constants: `hydrogen_cli_settings_ai_credits_activity_page`, `hydrogen_cli_settings_add_credits`, `hydrogen_cli_insufficient_credits_add_credits` (Google's internal codename for the CLI billing surface).
- The newest model ids referenced in the bundle are Gemini **3.x** (`gemini-3.8-flash`, `gemini-3.5-flash`, `gemini-3.1-pro-preview`, `gemini-3.1-flash-lite`).
- **Conclusion:** Gemini 4 Hydrogen is **not adopted in Gemini CLI** as of the in-window nightly. It *is* generally available elsewhere: **GitHub Copilot** (GA announced 2026-11-13, in-window) and the Gemini API docs.
- ⚠️ Caveat: the in-window nightly tarball download failed at the last attempt (registry connection reset, `http=000`, 0 bytes) — the zero-hit grep was executed against the **`0.68.0` stable** bundle plus a partial extraction of the nightly; I did not get a complete grep pass over the nightly. The stable-bundle result is solid; the nightly result is best-effort.

Sources:
https://registry.npmjs.org/@google/gemini-cli-core
https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot
https://ai.google.dev/gemini-api/docs/models

### 7b. "Orchestrator" multi-model routing — exists internally, NOT a shipped in-window feature (watchlist item 4)

- Gemini CLI **does** contain a model-router subsystem: `dist/src/routing/modelRouterService.js` with a composite strategy chain — `FallbackStrategy` → `OverrideStrategy` → `ApprovalModeStrategy` → `GemmaClassifierStrategy` (only if `getGemmaModelRouterSettings().enabled`) → `ClassifierStrategy` → `NumericalClassifierStrategy` → `DefaultStrategy` (terminal). Telemetry keys observed: `routing.enable_numerical_routing`, `routing.decision`, `routing.reasoning`, `routing.failed`, `routing.approval`, `routing.latency`.
- The **only** place the literal word "Orchestrator" appears as a product concept is inside the Gemma classifier's prompt: **"You are the Lead Orchestrator for an AI system. You do not talk to users. Your sole responsibility is to analyze the Chat History and delegate the Current Request to the most appropriate model."** Everything else matching "orchestrator" is internal plumbing (`PipelineOrchestrator` in `dist/src/context/pipeline/orchestrator.js`, browser-agent prompt text).
- There is **no user-facing feature named "Orchestrator"**, no CLI flag, and no in-window release that introduces one. **Treat "Orchestrator multi-model routing" as an internal/undocumented routing feature, not a shipped product.**

Source:
https://registry.npmjs.org/@google/gemini-cli-core (tarball inspection)

---

## 8. GitHub platform changelog — 4 in-window entries, two of them materially relevant to agentic CLIs

| Published (UTC) | Title | URL |
|---|---|---|
| 2026-11-13T20:40:05Z | Upcoming deprecation of selected GitHub Copilot models in December | https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december |
| 2026-11-13T18:27:13Z | GitHub Enterprise Server support in the GitHub Copilot app | https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app |
| 2026-11-13T18:23:48Z | Gemini 4 Hydrogen in GitHub Copilot | https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot |
| 2026-11-13T12:22:41Z | Manage AI Scan for repositories using the REST API | https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api |

**8a. Copilot model deprecation (December 14, 2026)** — body text: "We will deprecate the following models across all GitHub Copilot experiences (including Copilot Chat, inline edits, ask and agent modes, and code completions) on December 14, 2026". The deprecation table pairs each dying model with its replacement:

| Model | Deprecation date | Suggested alternative |
|---|---|---|
| Claude Fable 5 | 2026-12-14 | Claude Fable 5.2 |
| Claude Haiku 4.5* | 2026-12-14 | Claude Haiku 5.5 |
| Gemini 3.8 Flash | 2026-12-14 | Gemini 4 Hydrogen |
| Gemini 4 Argon | 2026-12-14 | Gemini 4 Carbon |
| Grok 4.6 | 2026-12-14 | Grok 4.7 |
| Kimi K3 | 2026-12-14 | To be announced |

Footnote: "*Claude Haiku 4.5 will remain available to individual GitHub Copilot subscribers on annual plans." The page is marked **"Retired November 13, 2026"** (i.e. it is a retired/archived changelog entry). This is directly load-bearing for agentic-CLI users: a whole tier of the Copilot model catalog (Fable 5, Haiku 4.5, Gemini 3.8 Flash, Argon, Grok 4.6) is retired in ~a month.

**8b. Gemini 4 Hydrogen GA in GitHub Copilot** — body: "Gemini 4 Hydrogen, Google's latest Flash model, is now generally available in GitHub Copilot. It is designed for fast, efficient agentic coding, tool use, and multistep workflows, with improved instruction following over Gemini 3.8 Flash. This model is billed at provider list pricing under usage-based billing." Availability section lists GitHub Copilot Chat / Coding Agent / CLI / Code Review, with an "Enabling access" section.

Source: https://github.blog/changelog/feed/

---

## 9. OpenAI newsroom RSS — 2 in-window entries, neither is a CLI release (watchlist item 7)

| Published (UTC) | Title | URL |
|---|---|---|
| 2026-11-13T15:00:00Z | Introducing ChatGPT Wallet | https://openai.com/index/introducing-chatgpt-wallet |
| 2026-11-13T08:00:00Z | Shield helps technicians hand off legacy portal work with OpenAI | https://openai.com/business/customer-stories/shield |

Out-of-window context immediately before the window (for continuity): "How Amplitude ships product improvements in 1–2 days with OpenAI" (2026-11-12T20:00Z), "Gondola doubles revenue as its team builds more with Codex" (2026-11-12T12:00Z), "Holiday Extras is rethinking what it can build with Codex" (2026-11-12T09:30Z), "Supporting research on AI and children's safety" (2026-11-12T00:00Z).

**ChatGPT voice deprecation (Dec 11) — NOT VERIFIED, source unread.** The OpenAI Help Center "ChatGPT release notes" article (`https://help.openai.com/en/articles/6825453-chatgpt-release-notes`) could **not** be read from this host:
- `curl` → HTTP **403** with a JS/cookie challenge page ("Enable JavaScript and cookies to continue").
- The single `web_fetch` attempt returned HTTP 200 but the readability extractor yielded only the **June 10, 2026** section ("Simplified controls in the model picker") — i.e. a stale/cached fragment, **not** a Nov/Dec 2026 entry.
- A separate check of `openai.com/index/chatgpt-release-notes` also returned 403.
- **Therefore: no primary confirmation of a "ChatGPT voice deprecation Dec 11" release note was obtained this cycle.** Flag as an open verification gap, not as confirmed and not as refuted.

Sources:
https://openai.com/news/rss.xml
https://help.openai.com/en/articles/6825453-chatgpt-release-notes (read attempt failed / stale extract)

---

## 10. Cursor — NO in-window release; pricing/legal entity and model rate card re-verified (watchlist item 3)

**Finding: nothing changed in-window for Cursor.**
- **Cursor product changelog** (`https://cursor.com/changelog`, 182 750 bytes): newest entries are **"Voice Chat with Agents" (Nov 6, 2026)** and **"Build Live Apps in Cursor" (Nov 5, 2026)**; then "Agent SDK" (Oct 20), "Cloud Agent Canvases and Environment Improvements" (Oct 16), "Origin App Marketplace" (Oct 13). **No in-window entry.**
- **Cursor CLI changelog** (`https://cursor.com/docs/cli/changelog`, 905 399 bytes): newest version heading is **v2026.10.22**, then v2026.10.17, v2026.10.15, v2026.10.08, v2026.09.28… **No in-window CLI release.** (Probed `/changelog/cli-nov-13-2026`, `/changelog/cli-nov-12-2026`, `/changelog/cli-nov-14-2026`, `/changelog/cli-nov-2026` — all **404**.)
- **Cursor pricing** (`https://cursor.com/pricing`): Free $0, Plus $8/mo, Premium $30/mo, Super $100/mo, Ultra $200/mo, Teams $30+/user/mo, Enterprise custom. Third-party model usage is **not** included in the monthly price and must be purchased separately.
- **X-Subscription bundling announcement — NOT FOUND.** No announcement of bundling Claude Code / Copilot / other subscriptions into Cursor. What *is* confirmed on the pricing page is a legal-entity change: the FAQ now says **"Subscriptions are only sold directly through X Subscription Corp"** and **"purchase the X Subscription only through our official website"** — i.e. Cursor's subscription seller is X (SpaceX), following OpenAI's Aug 28 statement "Our decision on Cursor following its acquisition by SpaceX". No *new* bundling/product news in-window.
- **Fable 5.2 rate card echo (watchlist item 3) — CONFIRMED, and consistent between Anthropic and Cursor:**
  - Anthropic platform docs: **Claude Fable 5.2 — $8 / input MTok, $40 / output MTok**, 1M context, 128K max output, API ID `claude-fable-5-2`. (Mythos 5.2 sits at the same $8/$40 with a 1M-context tier; Mythos 5.1 and Fable 5 remain listed as legacy at $10/$50.)
  - Cursor Models & Pricing doc: **Claude Fable 5.2 — $8 / $10 / $0.2 / $40** (input / cache-write / cache-read / output), US data residency: Yes. Same model family rows: Claude Opus 5.5 $4/$5/$0.2/$20, Claude Sonnet 5.5 $2/$2.5/$0.1/$10, Claude Haiku 5.5 from $0.10/$0.5.
  - OpenRouter live pricing for `anthropic/claude-fable-5.2`: **$8 / 1M input, $40 / 1M output** (batch variant $4/$20) — a third, independent echo of the same card.
  - **Verdict: the Fable 5.2 rate card is $8 in / $40 out across Anthropic, Cursor and OpenRouter — no divergence found.**
  - Cursor's Gemini 4 rows are also priced: **Gemini 4 Hydrogen $1.5 / $0.075 / $7.5**, Gemini 4 Carbon $2/$0.1/$10, Gemini 4 Argon $2/$0.1/$10 (no US data residency).

Sources:
https://cursor.com/changelog
https://cursor.com/docs/cli/changelog
https://cursor.com/pricing
https://cursor.com/docs/models
https://platform.claude.com/docs/en/about-claude/models/overview
https://openrouter.ai/api/v1/models

---

## 11. Anthropic newsroom — no post newer than Nov 10; the "November 14, 2026" masthead is a date, not a post (watchlist item 6)

**Finding:** The Anthropic news index's newest actual posts are:
- **2026-11-10** — "Anthropic launches roadshow for proposed initial public offering" (slug `roadshow-launch`)
- **2026-11-10** — "Anthropic confidentially submits draft S-1 to the SEC" (slug `confidential-draft-s1-sec`)
- **2026-11-09** — "Introducing Claude Fable 5.2 and Claude Mythos 5.2" (slug `claude-fable-and-mythos-5-2`), summary "Our most capable models for daunting technical work, Claude Fable 5.2 and Mythos 5.2 set a new bar in coding, finance, and the sciences.", `_updatedAt` 2026-11-12T16:32:13.508Z
- 2026-11-06 — "Investigating vault particles with Claude"; "Apply for Anthropic's AI for Science rare disease research grants"

**All out-of-window.** The page carries a top-bar caption **"November 14, 2026"** and a "Latest news" eyebrow on the featured Fable tile — **that is the current-date masthead, not a post date**. Do not report it as a Nov 14 post.

Source: https://www.anthropic.com/news

---

## 12. Conductor — no new changelog entry; the wind-down dates stand (watchlist item 5)

**Finding:** `https://conductor.build/changelog` still shows the newest entry as **0.94.0 — November 9, 2026**, with **0.93.0 — November 4, 2026** below it. **No in-window entry, no post-mortem.**

0.94.0 body (verbatim highlights): "Claude Fable 5.2, Anthropic's upgraded model for the most demanding technical work, is now available in Conductor."; Improvements: "Checking for updates is more reliable."; Fixes: "Fixed follow-up messages sometimes failing when sent while a Codex chat was starting"; "Fixed your local messages sometimes appearing to come from 'User'"; "The 'Read the announcement' link in the Conductor Cloud shutdown banner now opens the announcement instead of the homepage."; Misc: "Updated the bundled Claude Code to 2.1.321 and Codex to 0.166.0."; and an embedded patch note **"New in 0.94.2 — Removed the Conductor Cloud shutdown banner from cloud workspaces."** (a patch note inside the 0.94.0 block, **not** a separately dated release).

0.93.0 body (wind-down statement): "Conductor is joining Meta… We'll be winding down Conductor over the next weeks and months: **Conductor Cloud goes read-only on November 13 and shuts down on November 20.** Local Conductor keeps getting new models and critical bug fixes until early 2027. To move a cloud workspace and its chats to your Mac, right-click it and choose Transfer to local. To download all your data, go to Settings → Account → Export data."

Status against the watchlist: **the read-only date (Nov 13) is the window's first day**, and there is **no new first-party changelog entry, no post-mortem, and no migration guide beyond the 0.93.0 announcement**. Third-party coverage of the Nov 20 shutdown continues (adtmag, techaiwire, shattered.io, explainx.ai, tech-insider) but adds no new first-party detail.

Sources:
https://conductor.build/changelog
https://adtmag.com/articles/2026/11/10/conductor-cloud-shutdown.aspx

---

## 13. Gemini Decisions API / `gemini-decision-1` on OpenRouter — NOT on OpenRouter, YES in Google's docs (watchlist item 9)

**Finding:**
- **OpenRouter** (471 model ids enumerated from `https://openrouter.ai/api/v1/models`): **zero ids containing "decision"**. The `google/gemini-4-*` family present is `google/gemini-4-hydrogen` (+`:batch`), `google/gemini-4-carbon` (+`:batch`), `google/gemini-4-argon` (+`:batch`). `google/gemini-4-hydrogen` was created **2026-11-12T18:01:00Z** (Unix 1794506460) at **$1.5 / 1M in, $7.5 / 1M out** (batch $0.75/$3.75).
- **Google's Gemini API docs** (`https://ai.google.dev/gemini-api/docs/models`) list under **Specialized task models**: **"Gemini Decision 1 — Fast, calibrated multimodal yes/no, choice, and score decisions with zero output tokens using the Decisions API. Endpoint `gemini-decision-1`"**. Also listed: **Gemini Embedding 2** (`gemini-embedding-2`, multimodal embedding, text/images/video/audio/PDF).
- The Gemini 4 family is documented as **Hydrogen / Carbon / Argon**, with Hydrogen described as "a shared 1M context window and long decodes up to 1M tokens", model code `gemini-4-hydrogen`, max output "64K / 1M tokens", modalities "Text, Image, Audio, Video, PDF".
- **Conclusion:** `gemini-decision-1` is a Google-API-only specialized model (Decisions API). It is **not routed via OpenRouter** as of this window — so there is no OpenRouter price card to track for it.

Sources:
https://openrouter.ai/api/v1/models
https://ai.google.dev/gemini-api/docs/models

---

## 14. New-entrant scan (npm registry search) — one genuinely new in-window agentic-CLI entrant

Searches run: `https://registry.npmjs.org/-/v1/search?text=keywords:ai-cli&size=20`, `?text=keywords:agent-cli&size=25&sort=date`, `?text=opencode&size=15`, `?text=antigravity+cli&size=10`, `?text=grok%20cli&size=10`.

- **`@scramble-cloud/lurus-code-cli@2.7.1`** — published **2026-11-13T21:00:19.057Z** — **IN-WINDOW**. Description: "Lurus Code — Agentic Coding CLI". This is the only clearly agentic-CLI-shaped package with an in-window first-publish/last-publish timestamp.
- **`@ai-sdk/harness-opencode@1.0.187`** — 2026-11-13T08:46:56Z — **IN-WINDOW**, but it is a Vercel AI-SDK *harness adapter for OpenCode*, not a CLI.
- **`@ycodium-ai/agent-grok@…`** — 2026-11-13T16:10:04Z — **IN-WINDOW**: "Grok executor: grok CLI over Agent Client Protocol stdio" — a third-party Grok CLI ACP wrapper.
- **`@coda-console/grok`** — 2026-11-12T23:31:50Z — **IN-WINDOW** ("用 Grok CLI 跑会话" = run sessions with Grok CLI).
- **`@soleur/opencode@3.402.0`** — 2026-11-13T21:03:57Z — **IN-WINDOW**, an OpenCode org plugin, not a CLI.
- **`aiterm-mcp`** — 2026-11-13T20:46:38Z — IN-WINDOW, "Persistent terminal MCP with one harness-based launcher for Claude Code, Codex, C…".
- **opencode v2.3.0 npm ecosystem confirmed in-window:** `@opencode/core@2.3.0` (08:46:56Z), `@opencode/plugin@2.3.0` (08:40:09Z), `@opencode/schema@2.3.0` (08:41:47Z), `@opencode/protocol@2.3.0` (08:43:13Z), `@opencode/util@2.3.0` (08:42:13Z), `@opencode/cli@2.3.0` (08:54:17Z) — all in-window, all marked "OpenCode package bootstrap — not a functional release" (except core/plugin). The `opencode-ai` npm package itself is the **old v1 line** (`latest` = `1.19.5`, published 2026-10-28; newest publish 2026-11-09T21:45:22Z = `0.0.0-dev-202611092046`) — **the v2 line ships under the `@opencode/*` scope, not `opencode-ai`**. Watchers tracking only `opencode-ai` will keep reporting a stale v1 number.
- **Noise/rubbish explicitly excluded:** a large cluster of identically-versioned `1.0.45` packages all describing themselves as "DeepSeekCode — local-first AI coding agent" (`@deepseekcode/cli`, `@deepseeksi/cli`, `@tencentcode/cli`, `@grokx/cli`, `@kimicode/cli`, `@mydot/cli`, `@deepharness/cli`, `@deepseekbuddy/cli`, `@minimaxcode/cli`, `@tencentclaw/cli` — all published 2026-11-10, out-of-window) is an obvious re-publish/spam pattern; `antigravity-cli` on npm is literally described as **"Antigravity CLI - placeholder"**; `cursor-agent` (latest 1.0.3, Jan 2025), `cursor-cli` (1.0.0, Mar 2022), `grok-cli` (1.0.5, Jul 2025) and `agy` (0.0.0, 2022) are **unrelated packages** and must not be read as release signals for Cursor CLI / Grok Build / Antigravity.

Sources:
https://registry.npmjs.org/-/v1/search?text=keywords:ai-cli&size=20
https://registry.npmjs.org/-/v1/search?text=keywords:agent-cli&size=25&sort=date
https://registry.npmjs.org/-/v1/search?text=opencode&size=15

---

## 15. WATCHLIST VERDICT TABLE — every carry-over item, explicitly

| # | Watchlist item | Verdict | Evidence |
|---|---|---|---|
| 1 | Claude Code release after v2.1.323 | **CHANGED — v2.1.325 shipped in-window** (GH 20:40:01Z; npm 20:07:25Z) | §1 |
| 1a | Notes acknowledge CVE-2026-88968 / GHSA-5xjx-9qx6-jcrv | **UNCHANGED — NOT acknowledged.** Neither ID appears in the release notes or changelog; only a generic "Fixed a security issue in how zstd-compressed responses are decoded" | §1a |
| 1b | Is "Code Mode" now default? | **UNCHANGED — NO.** Still "experimental and off by default"; `code-mode` doc URL now resolves **HTTP 200** (was 404 yesterday) | §1b |
| 2a | GitHub Copilot CLI > 1.0.110 | **CHANGED — YES**, 1.0.111 (13:40Z) and 1.0.112 (23:59Z) both in-window, plus 1.0.111-0 / 1.0.112-0 prereleases | §3 |
| 2b | Codex CLI stable + any alpha with real notes | **CHANGED** — stable 0.168.0 (03:56Z) and 0.169.0 (08:39Z) in-window; five 0.171.0-alpha builds in-window but **all are stubs with no real notes** | §4 |
| 2c | Gemini CLI stable/preview/nightly | **CHANGED (nightly only)** — stable `0.68.0` / preview `0.69.0-preview.0` **UNCHANGED and out-of-window**; one in-window nightly `0.70.0-nightly.20261114` on **`@google/gemini-cli-core`** only | §7 |
| 2d | Zed nightly | **CHANGED** — nightly + collab-staging in-window; stable unchanged (v1.28.1) | §6a |
| 2e | opencode still v2.2.7 | **CHANGED — NO, it is v2.3.0** (2026-11-13T08:55:07Z) | §5 |
| 2f | Crush | **CHANGED (nightly only)** — `nightly` 2026-11-14T00:43:40Z; stable v0.101.0 unchanged | §6c |
| 2g | OpenHands | **UNCHANGED** — newest v1.40.0 (2026-11-12), out-of-window | §6e |
| 3a | Cursor CLI changelog entries | **UNCHANGED — none in-window**; Cursor CLI newest = v2026.10.22 | §10 |
| 3b | Cursor X-Subscription bundling announcement | **UNCHANGED — no bundling announcement.** Pricing page now names **X Subscription Corp** as the seller | §10 |
| 3c | Fable 5.2 rate card echo in Anthropic docs | **UNCHANGED/RE-CONFIRMED** — $8 in / $40 out across Anthropic, Cursor, OpenRouter | §10 |
| 4a | Gemini 4 Hydrogen adoption in Gemini CLI | **UNCHANGED — NOT adopted** (no `gemini-4*` string in the shipped CLI bundle) | §7a |
| 4b | "Orchestrator" multi-model routing feature | **UNCHANGED — not a shipped feature.** Only an internal "Lead Orchestrator" classifier prompt in the model router | §7b |
| 5 | Conductor: read-only Nov 13 / shutdown Nov 20 — new entry or post-mortem? | **UNCHANGED — no new entry, no post-mortem.** Newest changelog entry remains 0.94.0 (Nov 9) with an embedded "New in 0.94.2" patch note | §12 |
| 6 | Anthropic newsroom post newer than Nov 9 | **UNCHANGED — none.** Newest posts are Nov 10 (roadshow, S-1) and Nov 9 (Fable 5.2 / Mythos 5.2) | §11 |
| 7a | OpenAI news RSS in-window entries | **CHANGED** — 2 in-window: "Introducing ChatGPT Wallet" (15:00Z), "Shield … customer story" (08:00Z) | §9 |
| 7b | ChatGPT voice deprecation Dec 11 official release note | **UNCHANGED / UNVERIFIED — source unreadable (403 + stale extract).** No primary confirmation obtained | §9 |
| 8 | GitHub changelog in-window entries | **CHANGED** — 4 in-window, incl. Gemini 4 Hydrogen GA in Copilot and a Dec 14 deprecation of 6 Copilot models | §8 |
| 9 | Gemini Decisions API / `gemini-decision-1` on OpenRouter | **UNCHANGED — not on OpenRouter** (0 of 471 ids match "decision"); present in Google's API docs only | §13 |

---

## 16. OPEN ITEMS, GAPS AND FAILED SOURCES THIS CYCLE

1. **`sourcegraph/amp` GitHub release feed is unreachable from this host** — `releases.atom` and `api.github.com/repos/sourcegraph/amp/releases` both return `Not Found`. Amp's in-window activity is therefore documented **only** via npm version timestamps (6 builds, 04:25Z→00:24Z). **No Amp release *content* is claimed.**
2. **GitHub REST API rate limit hit** during the run (`API rate limit exceeded for 2.245.176.224`) — the new-repo scan via `api.github.com/search/repositories` failed; new-entrant detection was done through the npm search API instead.
3. **OpenAI Help Center ChatGPT release notes could not be read** (HTTP 403 JS challenge via curl; the one `web_fetch` returned only a June 2026 fragment). The **Dec 11 ChatGPT voice deprecation** therefore remains **unverified**.
4. **Anthropic's Claude Code changelog page** (`https://code.claude.com/docs/en/changelog`) was parsed successfully (it contains the 2.1.325 section with "14 improvements" / "88 bug fixes"), but I did not find a distinct "security advisory" section — so an advisory published *outside* the release notes (e.g. a GitHub Security Advisory) would not have been seen. The GHSA/CVE negative is scoped to the fetched release notes + changelog page.
5. **Cursor CLI changelog is not in the main product changelog feed** and has no per-day URL scheme for Nov 2026 (all probed slugs 404); the latest version heading (v2026.10.22) is from the docs page, which is authoritative but not timestamped per entry.
6. **Gemini CLI nightly tarball download failed on the last attempt** (0 bytes, `http=000`); the "no `gemini-4*` string" grep is solid for the `0.68.0` stable bundle but only best-effort for the `0.70.0-nightly.20261114` bundle.
7. **No `web_search` result was used as primary evidence for any finding** — 3 searches were run (Cursor X-Subscription, Cursor CLI changelog, Conductor post-mortem) and only used to locate/confirm secondary coverage; every substantive claim above rests on a first-party URL that was actually fetched.
8. **Not checked in this cycle (out of scope for the `releases` role):** Reddit/HN sentiment (explicitly excluded by the assignment), security-advisory databases beyond the Claude Code changelog, and any Anthropic/OpenAI earnings-calendar items.

---

*Compiled by the `releases` subagent for the DIAC daily-insight-accumulator run on `agentic-cli-tools`, 2026-11-14. All in-window claims were verified against first-party sources fetched during this run; out-of-window context is labeled as such; unread sources are flagged explicitly.*

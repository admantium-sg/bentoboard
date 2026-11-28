# Findings: Agentic CLI Tools & Desktop AI Assistants — Releases & Announcements
**Task:** Task 1 (releases / commands / features / company announcements)
**Coverage window:** 2026-11-01T01:28Z → 2026-11-02T01:28Z (24h, all timestamps UTC)
**Research date:** 2026-11-02 (coverage closes 01:28Z)
**Method:** GitHub Releases API + `releases.atom` feeds, npm registry `time` maps, vendor RSS/blog feeds, GitHub repo search. Web search used sparingly (2 queries, low yield); all release facts below come from primary APIs.

---

## 1. Summary table

| Tool | Release in window? | Tag / version | published_at (UTC) | Type |
|---|---|---|---|---|
| Claude Code | ❌ No (quiet) | v2.1.316 published 2026-10-31T01:01:35Z | — | out of window |
| GitHub Copilot CLI | ✅ Yes | `v1.0.106-2` | 2026-11-01T02:06:57Z | prerelease (patch) |
| OpenAI Codex CLI | ✅ Yes | `0.167.0-alpha.2`, `0.167.0-alpha.3` | 2026-11-01T19:00:13Z / 2026-11-01T22:26:17Z | prerelease (alpha) |
| Gemini CLI | ⚠️ Nightly only | `v0.67.0-nightly.20261102.g6814e00d6` | 2026-11-02T01:22:38Z | nightly |
| Aider | ❌ No (quiet) | last release 2026-02-12 | — | — |
| Cline | ❌ No (quiet) | last `desktop-nightly-20261030214224` 2026-10-30T21:21:13Z | — | — |
| OpenCode | ❌ No (quiet) | `v2.2.5` published 2026-10-30T23:17:23Z | — | out of window |
| Crush (Charm) | ⚠️ Nightly only | `nightly` | 2026-11-02T00:37:19Z | rolling nightly |
| Zed | ⚠️ Nightly only | `nightly`, `collab-staging` | 2026-11-01T07:50:34Z | rolling nightly |
| Amp (Sourcegraph) | ⚠️ Rolling dev builds only | `0.0.1793577666-g2e4e3d` | 2026-11-02T00:22:40Z | rolling, no semver |
| Antigravity CLI | ❌ No (quiet) | `1.4.12` published 2026-10-30T21:39:59Z | — | out of window |
| Factory Droid CLI | ❌ No (quiet) | npm `droid`/`@factory/cli` 1.1.0 → 2026-10-30T23:47:30Z | — | out of window |
| Kilo Code | ❌ No (quiet) | `v7.8.25` published 2026-10-28T20:43:24Z | — | — |
| Qwen Code | ✅ Yes | `v0.26.5` (+ Desktop `desktop-v0.26.5`, + nightly) | 2026-11-01T03:22:50Z | **stable release** |
| Roo Code | ❌ No (quiet) | last release 2026-05-15T17:52:24Z | — | — |
| goose (Block) | ❌ No (quiet) | `v1.57.0` published 2026-10-28T19:26:10Z | — | — |
| Hermes Agent | ⚠️ Canary only | `v0.22.5+canary.20261101T064348Z` | 2026-11-01T06:43:49Z | rolling canary |
| **oh-my-pi** (NEW entrant) | ✅ Yes | `v18.15.0` | 2026-11-01T14:17:08Z | stable |
| **Atomic** (bastani-inc, NEW entrant) | ✅ Yes | `0.9.58`, `0.9.59`, `0.9.60` | 2026-11-01T07:38 / 09:03 / 22:35Z | stable |
| **FluxFlow CLI** (NEW entrant) | ✅ Yes | npm `4.46.0`, `4.46.1` | 2026-11-01T01:02 / 14:36Z | stable (npm only) |
| **BitFun CLI** (NEW entrant) | ✅ Yes | `0.2.19-daily.20261101` | 2026-11-01T10:21:17Z | daily build |

**Net:** only **two** of the 17 named tools shipped a stable (non-nightly, non-canary) release inside the window — **Qwen Code v0.26.5** and **Copilot CLI v1.0.106-2** (prerelease) — plus **Codex CLI** alpha builds. The day was dominated by rolling nightly/canary builds (Gemini CLI, Crush, Zed, Amp, Hermes Agent). This is a Sunday-to-Monday boundary, so it was a quiet release day.

---

## 2. Real releases in window (detail)

### 2.1 Qwen Code v0.26.5 + Qwen Code Desktop v0.26.5 — the only stable flagship release
- **Qwen Code v0.26.5** — `published_at` **2026-11-01T03:22:50Z**; npm `@qwen-code/qwen-code@0.26.5` published **2026-11-01T03:27:45Z**. Not a prerelease.
  Source: https://api.github.com/repos/QwenLM/qwen-code/releases/tags/v0.26.5
  Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5
- **Qwen Code Desktop v0.26.5** (tag `desktop-v0.26.5`) — published **2026-11-01T03:59:58Z**, ships alongside the CLI release.
  Source: https://api.github.com/repos/QwenLM/qwen-code/releases?per_page=20
- Highlights from the v0.26.5 release notes:
  - Bounded SQL history queries for Managed local H2 and Hosted MySQL (paged recent messages, journal transactions, exact operation/command lookups) — #15839.
  - **Generated UI enabled by default**; interactive card values become removable context above the composer — #15856.
  - Web Shell keyboard shortcuts for Session Overview and Split View — #14179.
  - Russian locale for Web Shell Goal card and Goals dialog — #13685.
  - One-click Web Shell daemon updates extended to pnpm, yarn, bun and sudo-prefixed npm installs — #15849.
  - Web Shell and Desktop show **active background agent counts in the status-bar task pill** — #14002.
  - Managed WebShell reads the latest 100 live items directly and pages upward — #15865.
  - `/verify-pr` reuses the current working tree only for a clean checkout of the PR head — #15913.
  - No known breaking changes.
  Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5
- **Nightly in window:** `v0.26.5-nightly.20261101.7b4b353750` published **2026-11-01T22:43:08Z** (npm 22:52:40Z). Nightly includes: share the session event delivery loop in managed-agent (#15952), delete the OAuth refresh lock only when owned (#15661), keep uniquely named MCP tools when names collide (#15757), expose the Plugins back control without the navigation rail (#15651), reject LSP queries when no server is ready (#15946), count test suites apart from the round's assertions (#16013), route the classify_pr gate to ECS for every PR (#16019).
  Source: https://api.github.com/repos/QwenLM/qwen-code/releases/tags/v0.26.5-nightly.20261101.7b4b353750

### 2.2 GitHub Copilot CLI v1.0.106-2 (prerelease patch)
- Tag `v1.0.106-2`, **published_at 2026-11-01T02:06:57Z** (npm `@github/copilot@1.0.106-2` at 2026-11-01T02:06:24Z). Marked `prerelease: true`.
  Source: https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.106-2
- Fixes shipped in -2:
  - `--screen-reader`: failed/rejected tool calls, unknown-command errors and warnings now start with "Error:"/"Warning:" instead of reading like normal messages.
  - `/resume <session-id>` foregrounds an already-running background session instead of showing it twice on exit.
  - An HTTP MCP server that accepts connections but never answers now holds startup for its connection timeout **once** instead of three times.
  - Saving MCP server changes preserves symlinked `mcp-config.json` files and updates the symlink target.
  - `/skills` add/remove/reload stay in sync with session skills; refresh failures reported immediately.
- Context: the preceding `v1.0.106-1` (2026-10-31T20:24:04Z, just outside the window) was the bigger patch — `apply_patch` preserving mixed LF/CRLF line endings, `COPILOT_PROVIDER_GHES_HOST` accepting a browser-style URL, multi-line paste after `/clear`/`/ask`/`/delegate` keeping line breaks, `copilot -p` writing the shutdown record on Ctrl+C, `web_fetch` decoding declared non-UTF-8 charsets, WSL clipboard fix, generated-image saving on filesystems without hard-link support, org-disabled Claude fallback model returning the original refusal, and MCP blocked-server warnings now naming the registry failure reason.
  Source: https://api.github.com/repos/github/copilot-cli/releases/tags/v1.0.106-1
- **Note:** the repo `changelog.md` on `main` still tops out at `## 1.0.105 - 2026-10-27`; the 1.0.106.x entries exist only in the GitHub Release bodies, so the on-repo changelog lags the actual releases.
  Source: https://raw.githubusercontent.com/github/copilot-cli/main/changelog.md
- No stable `1.0.106` was published in the window; npm `latest` dist-tag still points at `1.0.105`.

### 2.3 OpenAI Codex CLI — 0.167.0-alpha.2 and alpha.3
- `0.167.0-alpha.2` — GitHub release `rust-v0.167.0-alpha.2` published **2026-11-01T19:00:13Z** (release `0.167.0-alpha.2` entry updated 19:05:03Z).
  Source: https://api.github.com/repos/openai/codex/releases/tags/rust-v0.167.0-alpha.2
- `0.167.0-alpha.3` — GitHub release `rust-v0.167.0-alpha.3` published **2026-11-01T22:26:17Z** (release entry updated 22:30:00Z). Body is a stub ("Release 0.167.0-alpha.3").
  Source: https://api.github.com/repos/openai/codex/releases/tags/rust-v0.167.0-alpha.3
- npm platform packages for alpha.3 published **2026-11-01T22:35Z–22:46Z** (`0.167.0-alpha.3-linux-x64` … `-darwin-arm64`, `-win32-arm64`); npm dist-tag `alpha` now points to `0.167.0-alpha.3`, `latest` remains `0.166.0`.
  Source: https://registry.npmjs.org/@openai/codex
- Between alpha.2 and alpha.3: **3 commits / 11 files changed** (compare API).
  Source: https://api.github.com/repos/openai/codex/compare/rust-v0.167.0-alpha.2...rust-v0.167.0-alpha.3
- Last stable remains **0.166.0** (2026-10-29T19:47:53Z), whose notable features were: keyboard-driven transcript selection with word/line/page motions + integrated search + configurable shortcuts; **GPT-6.1 Terra** added to bundled/Vertex/Bedrock model catalogs; `codex queue --resume`; clearer safety-block explanations; `codex doctor --network-only`.
  Source: https://api.github.com/repos/openai/codex/releases/tags/rust-v0.166.0

### 2.4 New entrants active in the window
**oh-my-pi** (`can1357/oh-my-pi`, npm `@oh-my-pi/pi-coding-agent`) — **v18.15.0** published **2026-11-01T14:17:08Z** (npm 14:25:07Z). Codex-compat fixes: OpenAI remote compaction (`/responses/compact`) no longer replays backend-only `internal_chat_message_metadata_passthrough` metadata that Codex rejects; conversation replay omits backend-internal response metadata; `service_tier: "ultrafast"` no longer dropped for OpenAI-family models on custom providers; Google Vertex WIF ADC token refresh fixed against the wrong endpoint; Anthropic rotating-token OA…
  Source: https://github.com/can1357/oh-my-pi/releases/tag/v18.15.0
  Source: https://api.github.com/repos/can1357/oh-my-pi/releases/tags/v18.15.0

**Atomic** (`bastani-inc/atomic`, npm `@bastani/atomic`) — three stable releases in one day:
- `0.9.58` published 2026-11-01T07:38:25Z
- `0.9.59` published 2026-11-01T09:03:23Z
- `0.9.60` published 2026-11-01T22:35:20Z (npm 22:39:25Z) — headline: *"Chats that keep working after a workflow wakes them, steadier subagent model choices, and copying that works inside Rex."* A completion notice or stage message no longer leaves the chat's own `bash`/other commands waiting on the workflow's resource admission; an unknown effort word such as `openai/gpt-5.5:extreme` now runs the requested model at its default level instead of silently switching to the default model, and errors clearly if the model is unavailable; copies reach the Rex client's clipboard via **OSC 52** instead of landing only on the server machine.
  Source: https://api.github.com/repos/bastani-inc/atomic/releases/tags/0.9.60
  Source: https://github.com/bastani-inc/atomic/releases

**FluxFlow CLI** (`KushalRoyChowdhury/fluxflow-cli`, npm `fluxflow-cli`) — npm `4.46.0` published **2026-11-01T01:02:15Z** (just before window start at 01:28Z) and `4.46.1` published **2026-11-01T14:36:28Z**. Commits in window: *"feat: add custom key URL support and expand file previews"* (2026-11-01T01:01:23Z) and *"feat(keys): add persisted no-key mode and API keys docs"* (2026-11-01T14:35:11Z). Note: the GitHub repo's *release* tags (latest `1.7.0`, 2026-10-30T00:33:37Z) are the VS Code/IDE companion extension versions, which are decoupled from the npm CLI version line — a versioning mismatch worth watching.
  Source: https://registry.npmjs.org/fluxflow-cli
  Source: https://api.github.com/repos/KushalRoyChowdhury/fluxflow-cli/commits?since=2026-11-01T00:00:00Z
  Source: https://github.com/KushalRoyChowdhury/fluxflow-cli/releases/tag/1.7.0

**BitFun CLI** (`GCWing/BitFun`, npm `@bitfun-test/bitfun`) — daily build `0.2.19-daily.20261101` published **2026-11-01T10:21:17Z**, plus per-platform variants at 10:22–10:24Z (darwin-arm64, ohos-arm64, linux-x64, win32-x64). Daily-tag build, not a semver release. First npm publish 2026-08-28 → still an early-stage entrant.
  Source: https://registry.npmjs.org/@bitfun-test/bitfun

---

## 3. Rolling / nightly / canary builds in window (NOT stable releases)

### 3.1 Gemini CLI — nightly only
- `v0.67.0-nightly.20261102.g6814e00d6` — GitHub release published **2026-11-02T01:22:38Z** (release created 2026-11-02T01:14:47Z). npm `@google/gemini-cli-core@0.67.0-nightly.20261102.g6814e00d6` published **2026-11-02T01:20:06Z**. Body is a bare compare link.
  Source: https://api.github.com/repos/google-gemini/gemini-cli/releases/tags/v0.67.0-nightly.20261102.g6814e00d6
- The previous nightly `...20261101.g6814e00d6` was published **2026-11-01T01:14:56Z** — ~13 minutes **before** the window opens, so it is excluded; the 11-01→11-02 nightly diff is **1 commit**.
  Source: https://api.github.com/repos/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261101.g6814e00d6...v0.67.0-nightly.20261102.g6814e00d6
- **Stable status:** latest stable remains **v0.66.0** (2026-10-27T20:26:28Z); `v0.67.0-preview.0` (2026-10-27T20:07:49Z) is the latest preview. The 0.67.0 line has been in nightly/preview since 2026-10-27 — a **6-day** gap to stable.
  Source: https://api.github.com/repos/google-gemini/gemini-cli/releases

### 3.2 Crush (Charm) — nightly tag only
- Release tag `nightly` published **2026-11-02T00:37:19Z** — a rolling nightly with sigstore/cosign verification instructions; no per-version notes.
  Source: https://api.github.com/repos/charmbracelet/crush/releases/tags/nightly
- **No stable Crush release in the window.** Last stable `v0.99.0` published 2026-10-30T10:00:05Z (repo release created 2026-10-29T16:25:08Z). Its headline feature set (context, out of window): **Catwalk v3** provider-type rework (`completions` / `responses` / `messages`, config auto-migrated, `--can-reason` → `--thinking always|never|toggleable`, new `--max-attachments N`), **hooks** extended to whole-run events (sessions, turns, permissions) aligned with Claude Code event names, and a new **client/server mode**.
  Source: https://api.github.com/repos/charmbracelet/crush/releases/tags/v0.99.0

### 3.3 Zed — nightly + collab-staging only
- `nightly` (title: *"Terminal header corners (#66367)"*) published **2026-11-01T07:50:34Z**, plus matching `collab-staging` build at the same timestamp.
  Source: https://github.com/zed-industries/zed/releases.atom
- **No stable Zed release in the window.** Last stable `v1.26.2` published 2026-10-28T15:16:13Z; `v1.27.0-pre` 2026-10-28T15:18:12Z.
  Source: https://api.github.com/repos/zed-industries/zed/releases

### 3.4 Amp (Sourcegraph) — rolling dev builds, no semver release
- `sourcegraph/amp` has **no GitHub repo/releases** (API returns 404 Not Found). Amp ships exclusively as rolling npm builds of `@sourcegraph/amp` with `0.0.<epoch>-g<sha>` versions and a `latest` dist-tag.
  Source: https://api.github.com/repos/sourcegraph/amp/releases (404)
- In-window publishes (all rolling dev builds, ~4-hourly cadence):
  | version | published_at |
  |---|---|
  | 0.0.1793505644-g31e93e | 2026-11-01T04:21:02Z |
  | 0.0.1793520029-gd7d531 | 2026-11-01T08:25:32Z |
  | 0.0.1793534443-ga508b6 | 2026-11-01T12:21:12Z |
  | 0.0.1793548828-ge47c64 | 2026-11-01T16:21:07Z |
  | 0.0.1793563244-geb1c10 | 2026-11-01T20:22:18Z |
  | 0.0.1793577666-g2e4e3d | 2026-11-02T00:22:40Z (`latest`) |
  Source: https://registry.npmjs.org/@sourcegraph/amp
- **No Amp feature/announcement notes are published** — the changelog is not surfaced via npm or a public releases endpoint, so the content of these builds is not verifiable from primary sources. This is a coverage limitation.

### 3.5 Hermes Agent (NousResearch) — canary only
- `v0.22.5+canary.20261101T064348Z` published **2026-11-01T06:43:49Z** (daily canary cadence ~06:44Z).
  Source: https://api.github.com/repos/NousResearch/hermes-agent/releases
- **No stable Hermes release in the window.** Last stable `v0.22.5` (2026-10-23T05:28:45Z) rolled up ~81 merged PRs into a stable GitHub/CLI/installer/Microsoft Store/Docker/Hermes Cloud release, with full curated notes deferred to v0.23.0. Note the released version line is still **v0.22.x**, so Hermes has not cut 0.23.0 yet.
  Source: https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.5

---

## 4. Verified QUIET — no release inside the window

Each verified against GitHub Releases API **and** npm registry `time` map where a package exists.

| Tool | Most recent release (UTC) | Delta vs. window | Verification |
|---|---|---|---|
| **Claude Code** | GitHub `v2.1.316` published 2026-10-31T01:01:35Z; npm `@anthropic-ai/claude-code@2.1.316` 2026-10-31T00:42:05Z | ~24h before window opens | https://api.github.com/repos/anthropics/claude-code/releases · https://registry.npmjs.org/@anthropic-ai/claude-code |
| **OpenCode** | `v2.2.5` published 2026-10-30T23:17:23Z; npm `opencode-ai@1.19.5` 2026-10-28T06:17:11Z | ~2h before window opens | https://api.github.com/repos/anomalyco/opencode/releases · https://registry.npmjs.org/opencode-ai |
| **Cline** | `desktop-nightly-20261030214224` published 2026-10-30T21:21:13Z; stable CLI `v3.0.74` 2026-10-26T04:03:28Z; npm `cline@3.0.74` 2026-10-26T04:04:22Z | ~4h before window opens | https://api.github.com/repos/cline/cline/releases · https://registry.npmjs.org/cline |
| **Antigravity CLI** | `1.4.12` published 2026-10-30T21:39:59Z | ~4h before window opens | https://api.github.com/repos/google-antigravity/antigravity-cli/releases |
| **Factory Droid CLI** | npm `@factory/cli@1.1.0` 2026-10-30T23:47:30Z and `droid@1.1.0` 2026-10-30T23:44:20Z (preceded by `1.0.0` 2026-10-29T22:15Z and `0.251.0` 2026-10-27) | ~1.5h before window opens | https://registry.npmjs.org/@factory/cli · https://registry.npmjs.org/droid |
| **Kilo Code** | `v7.8.25` published 2026-10-28T20:43:24Z; npm `@kilocode/cli@7.8.25` 2026-10-28T20:46:41Z (plus v2-line tag `0.0.0-v2-13` 2026-10-29T09:46:52Z) | ~3 days before | https://api.github.com/repos/Kilo-Org/kilocode/releases · https://registry.npmjs.org/@kilocode/cli |
| **goose (Block)** | `v1.57.0` published 2026-10-28T19:26:10Z | ~3 days before | https://api.github.com/repos/block/goose/releases |
| **Roo Code** | `v3.54.0` published 2026-05-15T17:52:24Z | ~6 months before | https://api.github.com/repos/RooCodeInc/Roo-Code/releases |
| **Aider** | `v0.86.3.dev` published 2026-02-12T00:42:25Z; PyPI `aider-chat` 0.86.2 | ~9 months before | https://api.github.com/repos/Aider-AI/aider/releases · https://pypi.org/pypi/aider-chat/ |

Notable: **Roo Code's `Roo-Code` release feed shows `v3.54.0` as the latest stable (May 2026)** while the repo's `Roo Code CLI` line stops at `v0.1.17` (2026-03-04) — no CLI activity in the window either.

---

## 5. Company announcements / vendor blogs in window

- **OpenAI News RSS** (https://openai.com/news/rss.xml): newest item dated **2026-10-30** — **no OpenAI announcement inside the window.** Latest entries (titles not exposed by the RSS filter used): 2026-10-30 09:30Z, 09:00Z, 00:00Z; 2026-10-29 17:00Z, 09:00Z, 07:00Z, 00:00Z.
  Source: https://openai.com/news/rss.xml
- **GitHub Changelog** (https://github.blog/changelog/feed/): newest entries dated **2026-10-29** — **no Copilot announcement in the window.** (Most recent Copilot items: "Route and orchestrate models with GitHub Copilot Fusion", "GitHub Copilot app, Universe releases", "GitHub Enterprise now includes access to GitHub Copilot", all 2026-10-28; newest overall is "Webhook IP ranges added to the Meta API", 2026-10-29.)
  Source: https://github.blog/changelog/feed/
- **Google Developers Blog RSS**: newest developer-tools item **2026-10-28** ("Build and manage Connected Apps in one place") — no Antigravity/Gemini CLI post in the window.
  Source: https://blog.google/technology/developers/rss/
- **Anthropic News**: no RSS endpoint available (`https://www.anthropic.com/news/rss.xml` → HTTP 404 "Not Found \ Anthropic"); the news index page was scraped instead and shows no dated item inside the window (latest referenced items: `/news/announcements`, `/news/ai-for-science-expands-foundations-research-institutions`, `/news/expanding-partnership-gsa`, `/news/s1-sec`).
  Source: https://www.anthropic.com/news
- **Sourcegraph Blog RSS**: newest post 2026-10-21 — nothing in the window.
  Source: https://sourcegraph.com/blog/rss.xml
- **Charm Blog RSS**: newest post 2026-03-19 — nothing in the window.
  Source: https://charm.land/blog/rss.xml
- **Block/goose blog**: `https://block.github.io/blog/feed.xml` → 404; no in-window announcement found.
- **Factory News**: `https://factory.ai/news` reachable (SPA, no dated entries in markup); `https://factory.ai/blog/rss.xml` redirected to a Vercel login page — no in-window announcement found.

**Conclusion:** the window contained **zero vendor blog/changelog announcements** — everything of substance was release tags.

---

## 6. Adjacent ecosystem activity in window (context, not flagship releases)

npm `sort=modified` searches surfaced these packages with in-window publishes:

- `ccusage` **20.0.47** — 2026-11-01T21:41:49Z. Token-usage/cost analyzer for coding-agent CLIs (reads local data). https://registry.npmjs.org/ccusage
- `@nodetool-ai/antigravity-cli` **0.8.10** — 2026-11-01T20:54:43Z. Managed Antigravity CLI installation wrapper for NodeTool. https://registry.npmjs.org/@nodetool-ai/antigravity-cli
- `@claudexor/harness-agy` **5.0.1** — 2026-11-01T06:37:47Z. Antigravity CLI adapter (agy `-p --output-format stream…`). https://registry.npmjs.org/@claudexor/harness-agy
- `pi-agent-zh` **18.15.0** — 2026-11-01T21:46:42Z (Chinese-localized mirror of the oh-my-pi coding agent). https://registry.npmjs.org/pi-agent-zh
- `paseo-plugin-antigravity-cli` **0.12.1** — 2026-10-30T20:30:05Z (just before window). https://registry.npmjs.org/paseo-plugin-antigravity-cli
- `@magpie-community/opencode-factory-auth` **0.1.41** — 2026-10-29T13:13:07Z. Sign in to a Factory (Droid) subscription from OpenCode. https://registry.npmjs.org/@magpie-community/opencode-factory-auth

New GitHub repos created in the window with agentic-CLI relevance (from `created:>2026-10-28` search):
- `agentmash-dev/agentmash-cli` (created 2026-10-29) — "Your team's coding agents warn each other before they edit the same file". https://github.com/agentmash-dev/agentmash-cli
- `jdx/jouet` (2026-10-30) — "A toolkit CLI for coding agents" (by the author of httpie/mise). https://github.com/jdx/jouet
- `calesthio/OpenFusion` (2026-10-29) — multi-model routing for any AI coding agent. https://github.com/calesthio/OpenFusion
- `Hona/strobe` (2026-10-31) — measure and explain performance of web pages/Electron/Bun/Node. https://github.com/Hona/strobe
- `abranchesia/doneguard` (2026-10-30) — stop-hook for agents that can't say "done" until checks pass. https://github.com/abranchesia/doneguard
- `Larrtroffen/harnessbridge` (2026-10-30) — macOS agent session converter. https://github.com/Larrtroffen/harnessbridge
- `robzilla1738/grokbot-gateway` (2026-10-30) — CLI/MCP server letting outside coding agents message a Grok Bot. https://github.com/robzilla1738/grokbot-gateway
- `Hybirdss/kicad-cli-extended` (2026-10-30) — kicad-cli extended for AI agents. https://github.com/Hybirdss/kicad-cli-extended
- `biyan113/ubuntu-box` (2026-11-01) — run Ubuntu 24.04 rootless on Android to install CLI agents. https://github.com/biyan113/ubuntu-box

---

## 7. Limitations & caveats

1. **Amp content is unverifiable from primary sources.** `sourcegraph/amp` has no public GitHub repo (404). Amp publishes only rolling npm snapshots with no changelog surface; the actual feature delta of the six in-window builds cannot be determined. Flagged rather than dropped.
2. **Factory Droid CLI has no public GitHub release feed.** `factory-ai/droid-cli` → 404; `Factory-AI/droid` → 404. Release signal comes only from npm (`droid`, `@factory/cli`, `@factory/droid-sdk`). The nearest repo activity is `Factory-AI/droid-action` pushed 2026-10-31T01:41:11Z (inside the window but not a release).
3. **No Anthropic RSS endpoint exists** (`/news/rss.xml` → 404). Anthropic announcement coverage was done by scraping the news index; absence of in-window posts is therefore weaker evidence than for other vendors.
4. **GitHub API rate limits:** unauthenticated calls were sufficient for this run (no 403/429 encountered), but a handful of `repos/.../releases` requests returned `Not Found` because those repos genuinely do not exist under those names (sourcegraph/amp, factory-ai/droid-cli, google-antigravity/cli), not because of throttling.
5. **Aider** publishes to GitHub and PyPI only; both were checked and both are quiet. **goose** is Rust/distro-packaged — the GitHub release feed is the authoritative signal; npm/PyPI packages named `goose`/`goose-ai` are unrelated third-party projects.
6. **Windows-only `published_at` vs. tag `<updated>` distinction:** for Codex, the GitHub *release* `published_at` (e.g. 22:26:17Z) differs by ~4 minutes from the *atom* `<updated>` value (22:30:00Z). Both are reported; `published_at` is treated as canonical throughout.
7. **Two web_search queries were consumed** on release-note/announcement hunting; DuckDuckGo returned near-empty result sets and one bot-detection challenge, so no search-derived claims are relied upon for any finding above. All findings rest on primary API/RSS data.

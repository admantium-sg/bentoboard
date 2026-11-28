# Agentic CLI Tools — Releases, Commands, Features, Announcements (2026-11-09 cycle)

- Run date: 2026-11-09T01:29Z / 2026-11-09 02:29 Berlin
- Subagent: `diac-releases-2026-11-09` (research subagent A)
- Coverage window: **2026-11-08T01:28:00Z → 2026-11-09T01:28:00Z** (inclusive)
- Prior window (not repeated): 2026-11-07T01:28:00Z → 2026-11-08T01:28:00Z
- Tool budget used: **2 web_search calls, 0 web_fetch calls** (hard cap 4 / 1). Everything else via direct HTTP (npm registry, GitHub Atom feeds, vendor pages).

## Summary (for orchestrator)

- **Quiet day overall.** Only **one stable vendor release** landed inside the window: **Windsurf / Devin Desktop v3.12.32, dated "November 8, 2026"** (date-only → boundary/uncertain item, notes read). Everything else in-window is nightly/dev/rolling builds or branch activity.
- **Qwen Code nightly `v0.26.9-nightly.20261107.65e1f1aeaa`** — GitHub release published `2026-11-08T01:39:29Z`, npm `@qwen-code/qwen-code` publish `2026-11-08T01:50:17.649Z`. In-window; release notes read (7 PRs: docs/telemetry/feature mix). Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261107.65e1f1aeaa
- **Qwen Code `v0.27.0` (stable) is NOT in-window** — GitHub published_at `2026-11-07T20:45:25Z`, npm `2026-11-07T20:55:40Z`; it belongs to the prior window and (per instruction) appears to have been **missed by the 2026-11-08 report**. Flagged below as a prior-window gap, not an in-window item.
- **Gemini CLI core nightly `0.69.0-nightly.20261109.g62bab5b23`** — npm publish `2026-11-09T01:11:03.150Z` (in-window), but **no matching GitHub release exists** (gemini-cli repo's last nightly release is `2026-11-04`), and notes are not available → "release published, notes minimal/unverified". Build hash `g62bab5b23` = commit `62bab5b23` ("allow overriding 60s API headers timeout", 2026-11-06) → nightly content is stale relative to the date stamp.
- **Amp (`@sourcegraph/amp`): 6 rolling CI builds** in-window (`0.0.1794110442-ga8fc4f` → `0.0.1794182455-g196b1f`), no release notes, no changelog page. `latest` dist-tag = `0.0.1794182455-g196b1f`.
- **opencode: 63 npm dev artifacts in-window** — `opencode-ai`, `@opencode-ai/plugin`, `@opencode-ai/sdk` snapshot `0.0.0-dev-202611080442` (05:50–05:51Z) plus **20 builds each** of `@opencode/core`, `@opencode/plugin`, `@opencode/sdk` (`0.0.0-dev-986` → `0.0.0-dev-1017`).
- **opencode `dev` branch: 20 in-window commits**, notably `feat(core): watch workspace MCP servers' events through the Console panel`, `feat(core): frame Console channel follow-up wakes as maybe unrelated`, `feat(core): say which credential changed in credential.updated (#62762)`, `fix(desktop): restore the review shortcut (#62567)`.
- **Codex CLI: no new release in-window** (last = `rust-v0.169.0-alpha.3`, 2026-11-07). But **7 in-window `main` commits** with user-visible features: `Search task history from the command center (#60286)`, `Expose agent tree IDs and environment removal (#60190)`, `Warn when a CLI model is absent from the ChatGPT model list (#60270)`, `Defer executor readiness when prewarming a selected project (#60309)`.
- **Qwen Code `main`: 20 in-window commits** — `feat(managed-agent): add Session resource and agent-trace diagnostics`, `feat(serve): observe bound PRs and detect state transitions`, `feat(daemon): expose last user prompt time and session sorting`, `feat(ci): give the autofix address agent failed-check evidence`.
- **OpenHands: no release in-window** (last `v1.37.0`, 2026-11-06). 15 in-window commits, incl. `feat(launch): automation-aware install via mode=automation + POST /pl…`, `feat(chat): show a resolved banner for project conversations`, `feat(themes): finish Light+ and Solarized contrast pass`.
- **Zed: no release in-window** (nightly Atom `updated` = `2026-11-07T09:46:58Z`). 2 in-window commits: `tabular_data_preview: Range selection, edge jumps, and page navigation` and `Bookmark picker (#60005)`.
- **No in-window releases** for: GitHub Copilot CLI (last `1.0.108-1`, 2026-11-07), Claude Code (last `v2.1.319`, 2026-11-06), Gemini CLI stable (last `0.67.0` / `0.68.0-preview.0`, 2026-11-04), Cursor, Crush (nightly `2026-11-08T00:45:57Z` — 42 min before window), Kilo (`v7.8.28`, 2026-11-07), Cline, Goose, Factory Droid (`1.6.0`, 2026-11-07), Aider, Antigravity (App `v2.29.1` Nov 6, CLI `v1.5.1` Nov 5).
- **No vendor blog/changelog posts in-window**: GitHub changelog feed latest = 2026-11-07T00:27Z; Cursor changelog RSS latest = 2026-11-06; OpenAI news RSS latest = 2026-11-06; Amp blog latest = Nov 6; Anthropic newsroom latest article = Sep 22, 2026 (page header renders "November 9, 2026" as the "Latest news" caption date — **not** a publication date).
- Amp `ampcode.com/changelog` → **HTTP 404**; `docs.windsurf.com/windsurf/changelog` → 308 redirect to `docs.devin.ai/desktop/changelog` (used that instead).

## Qwen Code

- **Nightly `v0.26.9-nightly.20261107.65e1f1aeaa`** — GitHub release `published_at` **2026-11-08T01:39:29Z** (in-window); Atom `<updated>` 2026-11-08T06:52:34Z (later edit, not publication); npm `@qwen-code/qwen-code` publish **2026-11-08T01:50:17.649Z**; npm dist-tag `nightly` = this version, `latest` = `0.27.0`.
  - Notes (read verbatim): `docs(providers): document Wally under OpenAI-compatible providers` (#16529) · `fix(core): share one gh runner and name an unusable view directory` (#16545) · `fix(telemetry): report OpenAI cache_write_tokens as cache creation` (#16454) · `feat(core): name the active shell in the startup context` (#16491) · `docs(daemon): document session-scoped permission vote for channel auto-approve` (#16541) · `test(cli): stop a flaky A2A approval poll from failing the whole shard` (#16555) · `fix(ci): route external PR CI directly to disposable runners` (#16551)
  - Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261107.65e1f1aeaa
  - Source: https://registry.npmjs.org/@qwen-code/qwen-code
- **Boundary / prior-window items (NOT in-window, but flagged as a gap in the 2026-11-08 report):**
  - Stable `v0.27.0`: GitHub `published_at` 2026-11-07T20:45:25Z; npm publish 2026-11-07T20:55:40Z. Release notes contain substantive Highlights (managed-agent sessions holding multiple child questions; Web Shell task Q&A heatmap + "Ask for details" side task; GitHub channel editor Repository Filter allowlists/blocklists; `perf(managed-agent)` lease indexing; SSH settlement/worktree locking). Also includes an odd "Frantic Ferret Free" style entry set — treat highlights as verified-from-notes only.
    - Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0
  - `desktop-v0.27.0`: GitHub published 2026-11-08T01:06:39Z (21 min before window start).
  - `sdk-typescript-v0.1.30`: GitHub published 2026-11-08T00:55:56Z; npm `@qwen-code/sdk` 0.1.30 published 2026-11-08T01:07:02.412Z (both before window start).
- **`main` branch, 20 in-window commits** (Atom feed `commits/main.atom`, timestamps = commit times on `main`):
  - `feat(managed-agent): add Session resource and agent-trace diagnostics` — 2026-11-08T15:26:17Z
  - `feat(serve): observe bound PRs and detect state transitions behind an…` — 2026-11-08T14:51:12Z
  - `feat(daemon): expose last user prompt time and session sorting (#14654)` — 2026-11-08T14:29:35Z
  - `feat(ci): give the autofix address agent failed-check evidence (#16659)` — 2026-11-09T00:43:18Z
  - `fix(channels): stop paying for a CI aggregate a failure already decid…` — 2026-11-09T01:00:54Z
  - `fix(web-shell): keep Open for managed artifacts the default panel can…` — 2026-11-09T01:39:17Z
  - `fix(serve): clean a worktree checkout after more than one reset (#16643)` — 2026-11-09T01:43:11Z
  - Source: https://github.com/QwenLM/qwen-code/commits/main.atom

## Gemini CLI

- **`@google/gemini-cli-core` nightly `0.69.0-nightly.20261109.g62bab5b23`** — npm publish **2026-11-09T01:11:03.150Z** (in-window). **No matching GitHub release** and no release notes → *release published, notes minimal/unverified*. Build hash `g62bab5b23` maps to upstream commit `62bab5b232c15b925d31e655ce844ab939c882b7` "fix(core,cli): allow overriding 60s API headers timeout across all auth…" (2026-11-06), i.e. the nightly tag advances by date but the tree appears unchanged since Nov 6.
  - Source: https://registry.npmjs.org/@google/gemini-cli-core
  - Source: https://github.com/google-gemini/gemini-cli/commit/62bab5b232c15b925d31e655ce844ab939c882b7
- **`@google/gemini-cli` (main package): no in-window publish.** dist-tags: `latest` 0.67.0 (2026-11-04T20:32:45Z), `preview` 0.68.0-preview.0 (2026-11-04T19:53:55Z), `nightly` still `0.67.0-nightly.20261104.g89e9d25d6`.
  - Source: https://registry.npmjs.org/@google/gemini-cli
- **GitHub releases: none in-window.** Last release `v0.68.0-preview.0` (2026-11-04T19:49:22Z), last nightly release `v0.67.0-nightly.20261104.g89e9d25d6` (2026-11-04T01:20:49Z) — GitHub nightly releases stopped after Nov 4.
  - Source: https://github.com/google-gemini/gemini-cli/releases.atom
- `main` branch Atom feed showed **no in-window commits** (latest `2026-11-06T21:43:53Z`).

## Amp (Sourcegraph)

- **No release notes / no changelog.** `ampcode.com/changelog` → **HTTP 404**; `ampcode.com/manual/changelog` → 404; GitHub `sourcegraph/amp` releases.atom → **404** (repo not publicly listed).
- **6 rolling CI builds in-window** on npm `@sourcegraph/amp` (`latest` dist-tag = last one):

| Version | npm publish (UTC) |
|---|---|
| 0.0.1794110442-ga8fc4f | 2026-11-08T04:20:40.976Z |
| 0.0.1794124830-gd53e62 | 2026-11-08T08:23:35.952Z |
| 0.0.1794139239-ga22467 | 2026-11-08T12:36:36.898Z |
| 0.0.1794153641-g4ab4e9 | 2026-11-08T16:20:09.964Z |
| 0.0.1794168041-g5b9330 | 2026-11-08T20:22:35.163Z |
| 0.0.1794182455-g196b1f | 2026-11-09T00:24:59.379Z |

- Source: https://registry.npmjs.org/@sourcegraph/amp
- Amp blog (ampcode.com/blog): latest items Nov 6 "Close the Loop", Nov 5 "GitLab Integration", Nov 3 "Service Accounts" — **none in-window** (Nov 8 absent).
  - Source: https://ampcode.com/blog
- `@sourcegraph/amp-sdk` last publish 2026-07-29 (no activity).

## opencode (anomalyco/opencode)

- **No stable release in-window.** GitHub releases: `v2.2.6` Atom `<updated>` 2026-11-06T23:37:20Z (prior window), `process-daemon v0.5.0` 2026-11-05T17:39:04Z. opencode.ai/changelog shows latest entry **v2.2.6, Nov 6, 2026** ("Shared MCP Connections", "GUI Plugin Themes and New Slots", "Mobile Composer Dock", "Scripted Runs in Worktrees", "Automatically Archived Runs") — nothing dated Nov 8/9.
  - Source: https://github.com/anomalyco/opencode/releases.atom
  - Source: https://opencode.ai/changelog
- **npm dev snapshots in-window:**
  - `opencode-ai` `0.0.0-dev-202611080442` — 2026-11-08T05:51:00.661Z (dist-tag `dev`)
  - `@opencode-ai/plugin` `0.0.0-dev-202611080442` — 2026-11-08T05:50:31.025Z
  - `@opencode-ai/sdk` `0.0.0-dev-202611080442` — 2026-11-08T05:50:23.582Z
  - Source: https://registry.npmjs.org/opencode-ai · https://registry.npmjs.org/@opencode-ai/plugin · https://registry.npmjs.org/@opencode-ai/sdk
- **Monorepo dev packages: 20 in-window builds each** (build counter `0.0.0-dev-986` → `0.0.0-dev-1017`; gaps exist, e.g. 989–991, 993–995, 998, 1003, 1005, 1007, 1009, 1014 absent):
  - `@opencode/core`: first 0.0.0-dev-986 @ 2026-11-08T02:38:11.305Z; last 0.0.0-dev-1017 @ 2026-11-09T01:18:23.922Z
  - `@opencode/plugin`: first 0.0.0-dev-986 @ 2026-11-08T02:33:01.400Z; last 0.0.0-dev-1017 @ 2026-11-09T01:15:36.184Z
  - `@opencode/sdk`: first 0.0.0-dev-986 @ 2026-11-08T02:33:40.440Z; last 0.0.0-dev-1017 @ 2026-11-09T01:16:08.860Z
  - Source: https://registry.npmjs.org/@opencode/core · https://registry.npmjs.org/@opencode/plugin · https://registry.npmjs.org/@opencode/sdk
- **`dev` branch: 20 in-window commits** (Atom feed `commits/dev.atom`):
  - `feat(core): watch workspace MCP servers' events through the Console panel` — 2026-11-08T13:26:57Z
  - `feat(core): frame Console channel follow-up wakes as maybe unrelated,…` — 2026-11-08T20:27:30Z
  - `feat(core): say which credential changed in credential.updated (#62762)` — 2026-11-09T01:16:05Z
  - `fix(desktop): restore the review shortcut (#62567)` — 2026-11-08T22:01:52Z
  - `fix(core): tail reads from the end of a file and suggest close file n…` — 2026-11-08T23:31:32Z
  - `fix(core): keep a v1 provider's baseURL when api is also set (#62570)` — 2026-11-08T18:04:14Z
  - `fix(core): make build metadata a required service so flags can't sile…` — 2026-11-08T17:08:52Z
  - `docs(legal): cover hosted agent sessions and their retention (#62789)` — 2026-11-08T23:08:56Z
  - Source: https://github.com/anomalyco/opencode/commits/dev.atom

## Codex CLI (OpenAI)

- **No release in-window.** GitHub last = `rust-v0.169.0-alpha.3` (Atom `<updated>` 2026-11-07T19:36:41Z). npm `@openai/codex` last = `0.169.0-alpha.3-darwin-x64` @ 2026-11-07T19:46:11.042Z; platform packages (`@openai/codex-linux-x64`, `-darwin-arm64`, `-win32-x64`) — **0 in-window publishes**.
  - Source: https://github.com/openai/codex/releases.atom · https://registry.npmjs.org/@openai/codex
- **`main` branch: 7 in-window commits** (user-visible / feature-relevant marked ★):
  - ★ `Search task history from the command center (#60286)` — 2026-11-08T19:35:45Z
  - ★ `Expose agent tree IDs and environment removal (#60190)` — 2026-11-08T02:27:59Z
  - ★ `Warn when a CLI model is absent from the ChatGPT model list (#60270)` — 2026-11-08T17:17:51Z
  - ★ `Defer executor readiness when prewarming a selected project (#60309)` — 2026-11-09T00:19:47Z
  - `Fix MCP startup tracking when attaching to shared app servers (#60280)` — 2026-11-08T19:04:10Z
  - `Keep the agents overview open when there is no chat to return to (#60…)` — 2026-11-08T17:26:39Z
  - `Increase Bazel core unit test shards from 8 to 16 (#60206)` — 2026-11-08T05:59:11Z
  - Source: https://github.com/openai/codex/commits/main.atom
  - Note: commit subjects only — no release notes exist for unreleased `main` work; feature behavior not verified.

## Windsurf / Devin Desktop

- **v3.12.32 — dated "November 8, 2026"** (date-only, no time of day → **boundary/uncertain item**; falls on the first calendar day of the window so it is very likely in-window, but the exact time is unverifiable). Notes read from the changelog page:
  - **New:** In the Agent Command Center, the "…" menu in the session header lists its MCP servers and allows toggling one on/off or re-authenticating. If a local agent rejects the first prompt, Desktop restores the text into the composer and shows the reason so it can be corrected and resent.
  - **Changed:** editor updated to VS Code 1.141.2 and Electron 43.8.3 (includes Chromium security fixes); in IDE mode, opening Devin settings opens an editor tab instead of switching modes; chat diffs and transcript code blocks use the editor theme's diff/syntax colors.
  - **Fixed:** reopened Local session keeps working directory and additional folders; closing its tab no longer removes it from Past Conversations; Local plan approval card filename opens the full plan; permission requests from third-party ACP agents no longer crash the conversation view; Remote SSH now honors hosts defined only in a custom `remote.devinSSH.configFile`; on Windows local edits save even when the agent uses different filename capitalization; Markdown previews supported in the Agent Command Center.
  - Source: https://docs.devin.ai/desktop/changelog
- **Devin CLI changelog:** latest entry `v3000.12.17`, November 6, 2026 — out of window. `docs.devin.ai/cli/changelog/next`, `/desktop/changelog/next`, `/changelog/next` → all **404**.
  - Source: https://docs.devin.ai/cli/changelog

## OpenHands

- **No release in-window.** Last releases: `v1.37.0` (2026-11-06T13:06:00Z), `v1.36.0` (2026-11-05T21:46:26Z).
  - Source: https://github.com/OpenHands/OpenHands/releases.atom
- **15 in-window `main` commits** (feature-relevant marked ★):
  - ★ `feat(launch): automation-aware install via mode=automation + POST /pl…` — 2026-11-09T00:12:46Z
  - ★ `feat(chat): show a resolved banner for project conversations (#19494)` — 2026-11-08T04:37:06Z
  - ★ `feat(themes): finish Light+ and Solarized contrast pass (#17730)` — 2026-11-08T21:25:01Z
  - `fix(chat): blend wide-table fades into message bubbles (#19518)` — 2026-11-08T10:27:26Z
  - `refactor(ui): use spacing-scale aliases for rem layout limits (#19493)` — 2026-11-08T10:28:05Z
  - `docs(verify-openhands): map maintenance 2026-11-08 (#19519)` — 2026-11-08T10:26:08Z
  - Source: https://github.com/OpenHands/OpenHands/commits/main.atom

## Zed

- **No release in-window.** `nightly` and `collab-staging` Atom `<updated>` = 2026-11-07T09:46:58Z (prior window); last stable `v1.27.0` (2026-11-04T17:04:23Z), `v1.28.0-pre` (2026-11-04T17:02:18Z).
  - Source: https://github.com/zed-industries/zed/releases.atom
- **2 in-window `main` commits:** `tabular_data_preview: Range selection, edge jumps, and page navigation` (2026-11-08T20:08:14Z) and `Bookmark picker (#60005)` (2026-11-08T18:27:50Z).
  - Source: https://github.com/zed-industries/zed/commits/main.atom

## Tools with no in-window activity (verified, no claims)

| Tool | Latest verifiable release | Timestamp | Source |
|---|---|---|---|
| GitHub Copilot CLI | 1.0.108-1 | 2026-11-07T02:32:48Z (npm 2026-11-07T02:32:49Z) | https://github.com/github/copilot-cli/releases.atom |
| Claude Code | v2.1.319 | npm 2026-11-06T00:58:56Z / GH 2026-11-06T17:04:01Z | https://github.com/anthropics/claude-code/releases.atom |
| Gemini CLI (stable) | 0.67.0 / 0.68.0-preview.0 | 2026-11-04 | https://registry.npmjs.org/@google/gemini-cli |
| Cursor | changelog "Voice Chat with Agents" | 2026-11-06 (date-only) | https://cursor.com/changelog/rss.xml |
| Crush | nightly | 2026-11-08T00:45:57Z (42 min pre-window) | https://github.com/charmbracelet/crush/releases.atom |
| Crush (stable) | v0.100.0 | 2026-11-05T19:22:36Z | https://github.com/charmbracelet/crush/releases.atom |
| Kilo Code | v7.8.28 | 2026-11-07T16:52:48Z | https://github.com/Kilo-Org/kilocode/releases.atom |
| Cline | desktop-nightly-20261104233655 | 2026-11-04T21:08:20Z | https://github.com/cline/cline/releases.atom |
| Goose | v1.57.0 | 2026-10-28T19:42:57Z | https://github.com/aaif-goose/goose/releases.atom |
| Factory Droid | 1.6.0 | 2026-11-07T04:09:32Z | https://registry.npmjs.org/droid |
| Aider | v0.86.3.dev | 2026-02-12 | https://github.com/Aider-AI/aider/releases.atom |
| Antigravity (App) | v2.29.1 | November 6, 2026 (date-only) | https://antigravity.google/docs/changelog |
| Antigravity (CLI) | v1.5.1 | November 5, 2026 (date-only) | https://antigravity.google/docs/changelog |

## Vendor announcement feeds — no in-window posts

- GitHub changelog feed: newest `pubDate` 2026-11-07T00:27:19Z (out). Source: https://github.blog/changelog/feed/
- OpenAI news RSS: newest 2026-11-06T08:00:00Z (out). Source: https://openai.com/news/rss.xml
- Cursor changelog RSS: newest 2026-11-06 (out). Source: https://cursor.com/changelog/rss.xml
- Anthropic newsroom: latest article dated 2026-09-22 ("Introducing Claude Opus 5.5"); page header shows "November 9, 2026" as the *Latest news* section caption date — not a publication date. Source: https://www.anthropic.com/news
- Amp blog: newest Nov 6, 2026 (out). Source: https://ampcode.com/blog
- Google developers blog feed: `developers.googleblog.com/feeds/posts/default` returned **no parsed entries** (feed reachable but empty/unsupported for our parse) → coverage gap, not a verified absence.

## Coverage gaps / unverified

- **Conductor (post-Meta acquisition)**: no verifiable in-window source found. npm `conductor` is an unrelated 2019 package; `@conductor/cli` not found; GitHub `github/copilot` 404. A targeted web search returned 0 results. **No claims made.**
- **ANT**: no public npm package (`ant-cli` is an unrelated 2016 package); no verifiable in-window source. **No claims made.**
- **xAI / Grok Build CLI**: no verifiable in-window source; npm `grok-cli` is an unrelated 2025 package. A targeted web search returned 0 results. **No claims made.**
- **Factory**: `factory.ai/changelog` → **HTTP 404** (redirects to a Vercel login page); `app.factory.ai/changelog` is client-side rendered (Next.js shell) → content not extractable. Only npm `droid` metadata used.
- **Amp**: no public changelog (`/changelog` 404) and no public GitHub repo/releases feed (404) → only npm rolling-build metadata; **no feature claims**.
- **Google developers blog**: feed yielded no parseable entries → vendor-blog coverage incomplete (Google Gemini CLI / Antigravity announcements not confirmed absent).
- **Antigravity**: `antigravity.google/changelog` redirects; the readable changelog lives at `antigravity.google/docs/changelog` and is date-only per entry → all Antigravity dates treated as boundary/uncertain.
- **GitHub REST API rate-limited** during this run (unauthenticated) → Atom feeds used as primary source; `updated_at` reflects edits, not publication, so Atom `<updated>` is labelled as such everywhere.
- **Qwen Code `v0.27.0`, `desktop-v0.27.0`, `sdk-typescript v0.1.30`** fall in the *prior* window and were **not covered by the 2026-11-08 report** per the task brief — flagged here as a prior-window gap so the orchestrator can backfill if desired; they are **not** counted as in-window items.
- **Gemini CLI `0.69.0-nightly.20261109.g62bab5b23`** has no GitHub release counterpart and no changelog entry → notes minimal/unverified.

## Source list

- https://registry.npmjs.org/@qwen-code/qwen-code
- https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261107.65e1f1aeaa
- https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0
- https://github.com/QwenLM/qwen-code/commits/main.atom
- https://registry.npmjs.org/@google/gemini-cli-core
- https://registry.npmjs.org/@google/gemini-cli
- https://github.com/google-gemini/gemini-cli/releases.atom
- https://github.com/google-gemini/gemini-cli/commit/62bab5b232c15b925d31e655ce844ab939c882b7
- https://registry.npmjs.org/@sourcegraph/amp
- https://ampcode.com/blog
- https://registry.npmjs.org/opencode-ai
- https://registry.npmjs.org/@opencode-ai/plugin
- https://registry.npmjs.org/@opencode-ai/sdk
- https://registry.npmjs.org/@opencode/core
- https://registry.npmjs.org/@opencode/plugin
- https://registry.npmjs.org/@opencode/sdk
- https://github.com/anomalyco/opencode/releases.atom
- https://github.com/anomalyco/opencode/commits/dev.atom
- https://opencode.ai/changelog
- https://github.com/openai/codex/releases.atom
- https://github.com/openai/codex/commits/main.atom
- https://registry.npmjs.org/@openai/codex
- https://docs.devin.ai/desktop/changelog
- https://docs.devin.ai/cli/changelog
- https://github.com/OpenHands/OpenHands/releases.atom
- https://github.com/OpenHands/OpenHands/commits/main.atom
- https://github.com/zed-industries/zed/releases.atom
- https://github.com/zed-industries/zed/commits/main.atom
- https://github.com/github/copilot-cli/releases.atom
- https://raw.githubusercontent.com/github/copilot-cli/main/changelog.md
- https://github.com/anthropics/claude-code/releases.atom
- https://registry.npmjs.org/@anthropic-ai/claude-code
- https://github.com/aaif-goose/goose/releases.atom
- https://github.com/cline/cline/releases.atom
- https://github.com/Kilo-Org/kilocode/releases.atom
- https://github.com/charmbracelet/crush/releases.atom
- https://github.com/Aider-AI/aider/releases.atom
- https://registry.npmjs.org/droid
- https://antigravity.google/docs/changelog
- https://cursor.com/changelog/rss.xml
- https://github.blog/changelog/feed/
- https://openai.com/news/rss.xml
- https://www.anthropic.com/news

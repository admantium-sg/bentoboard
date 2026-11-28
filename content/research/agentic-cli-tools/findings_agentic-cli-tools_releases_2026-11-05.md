# Findings — Agentic CLI Tools — Releases & Announcements — 2026-11-05

**Window:** 2026-11-04T01:28:00Z → 2026-11-05T01:28:00Z (plus ~2 days prior if still uncaptured)
**Method:** GitHub releases Atom feeds, npm registry time maps, GitHub issue/PR search API, vendor RSS/changelog pages via direct HTTP GET (curl). No web_search used for primary collection.

## 1. Releases in window
| **Antigravity CLI v1.5.0** (`agy`, google-antigravity/antigravity-cli) | **2026-11-04T05:23:42Z** | Biggest feature drop of the window. **New `agy acp` command**: runs the CLI as an **Agent Client Protocol (ACP) server over stdio** so editors can use it as their agent — images + embedded file context in prompts, steering a running turn by sending another prompt, `default` / `accept-edits` / `plan` session modes, `session`/`resume` restoring without replaying history, per-session model + thinking level, and `agy acp --login` for terminal Google sign-in (for SSH / browser-less editors). **New `--remote-agent`**: runs conversations on remote agents (`--project` by ID or name); `@`-mention completion searches the remote agent's files, unshowable artifacts get an "Open in browser" link, header shows remote workspace, `/` menu no longer offers local skills, `/config` Remote tab shows the conversation's own permission preset. **Local projects in `/projects`**: list/create/rename/change-folders/switch (switching adds folders to workspace and starts a new conversation). **Plugin MCP sign-in**: installing a partner plugin from `/plugin` opens a "Connect <plugin>" screen per server (Esc skips), ⚠ needs-sign-in marker + Sign-in row, third-party dev tools notice in Discover/details/after install. **`${HOME}` variable in plugin `sidecar.json`** templates (workspaceUris, accessGrants, e.g. `file://${HOME}/worktrees`); a sidecar arg named HOME still wins. **Headless `-p` without `--print-timeout` now waits for background tasks** instead of killing them after a hidden 30-min limit; when `--print-timeout` cuts a turn short the run exits with **code 3**, prints an `AGY_ERROR` line naming terminated tasks and a `[agy] print timeout after ...` stderr line. `/btw` side questions can now call tools (shown live in the card, "Called N tools" summary; permission-requiring calls auto-denied). Rendering Mode option renamed to "full screen (altscreen)" (saved setting unchanged). Improved stdio-MCP "command not installed" error ("uvx" is not installed or not on PATH…). Auto mode reviews fewer safe commands leaving the terminal sandbox (uploads, stopping agent-started jobs, package install/remove, VCS-restorable deletions). Fixed `/diff` empty fold divider, prompt-undo restoring already-sent messages, undo in `!`/`:` mode restoring runnable text; fixed GEMINI_API_KEY conversations re-sending a prompt forever when the safety filter blocks it (now ends turn with content-filter message) and pro/flash subagents running 2 generations older than Gemini 4 Argon / Gemini 3.8 Flash; fixed models failing a turn on 429/5xx instead of retrying (now honors `Retry-After`); fixed plugin auto-upgrade writing to a new folder after a rename. | https://github.com/google-antigravity/antigravity-cli/releases |


| artifact | timestamp UTC | substance | source |
|---|---|---|---|
| **Factory Droid CLI v1.3.0** (npm `@factory/cli` + `droid`) | **2026-11-04T01:32:22Z** (pkg `@factory/cli`), 01:32:05Z (`droid` mirror) | Headline: "Email draft cards, faster replies with many tools, and CLI connection and plugin fixes". New: editable email draft cards; onboarding finish-on-mobile note; instant sidebar view switching; **faster replies with many tools**; **task permission inheritance** (tasks started by Droid inherit the run's permission skipping instead of stalling for approval); faster model switching in long sessions. Fixes: OAuth MCP sign-in from remote sessions; local notices persist on remote reload; computer port-forward uploads no longer lose bytes; **GitHub plugin sources** now install from that repo and plugin errors name the cause; macOS startup stall with many skills + skill reload behind symlinks; **reconnect attempt limits** (stops after configured attempts instead of retrying forever). Security: public API identifier validation. **Required carry-over — captured.** | https://docs.factory.com/changelog/release-notes ; https://registry.npmjs.org/@factory%2Fcli |
| Factory Droid **Desktop v1.3.0** | 2026-11-04 (same release train) | Same changelog entry, "Desktop" surface: editable email draft cards, sidebar switching, many-tool reply latency, task permission inheritance. | https://docs.factory.com/changelog/release-notes |
| **Gemini CLI v0.67.0** (stable) | 2026-11-04T20:27:11Z (GH release); npm 20:32:45Z | feat(cli): bridge the IDE companion into container sandboxes over exec stdio; fix(core): prevent duplicate agent loading when workspace is home dir; scope untrusted-flag checks to external output + remember approved flags; respect read-only files and hard links in atomic writeTextFile; ensure all model turns with function calls receive thought signatures; handle termination signals and prevent tool execution after cancellation in non-interactive mode; preserve `${VAR}` placeholders during deprecation; RFC 9110 token rules for custom headers; a2a-server: mount express.json() before route registration, preserve extended token usage metadata. | https://github.com/google-gemini/gemini-cli/releases |
| **Gemini CLI v0.68.0-preview.0** | 2026-11-04T19:49:22Z (GH); npm 19:53:55Z | **New command: extension validation command + evaluation tests**; fix(cli): bound inline history re-render after terminal width changes; fix(ui): surrogate-pair-safe truncation in sanitizeForDisplay; fix(core): make isWithinRoot case-insensitive on Windows; recognize dotted Gemini 3 models in supportsMultimodalFunctionResponse; normalize leading slashes in file-search `@` autocomplete; list "Auto" in `/model` when dynamicModelConfiguration enabled & preview access disabled; fix `\n` escape behavior; PowerShell CIM fallback for Windows IDE process lookup; **surface 429 rate-limit cool-down and countdown in loading indicator**; anchor `.git` search. | https://github.com/google-gemini/gemini-cli/releases |
| **Codex CLI 0.168.0-alpha.1** | 2026-11-04T02:58:24Z | Alpha build. | https://github.com/openai/codex/releases |
| **Codex CLI 0.167.0-alpha.3.1 / .5** | 2026-11-04T19:10:25Z / 18:13:38Z | Alpha builds (release notes are stubs — no user-visible change documented). | https://github.com/openai/codex/releases |
| **Codex CLI 0.168.0-alpha.2** (+ platform binaries) | 2026-11-04T20:53:44Z (GH); npm 20:58:55Z–21:12:51Z (darwin-arm64/x64, linux-x64/arm64, win32-x64/arm64) | Alpha build; per-platform npm artifacts published within ~15 min. Stub release notes. | https://github.com/openai/codex/releases ; https://registry.npmjs.org/@openai%2Fcodex |
| **Codex CLI rust-v0.168.0-alpha.3** | 2026-11-05T01:21:18Z | Final in-window alpha (7 min before window close). Stub release notes. | https://github.com/openai/codex/releases |
| **Zed v1.27.0** | 2026-11-04T17:04:23Z (stable) | AI: Agent Panel memory usage improved (lazy-load tool-call diffs + thread Markdown); AI commit messages now use the 3 most recent repo commits as style examples; lower CPU/disk while agent works on long threads. Git: Git Graph tooltips, rendering perf, clearer push-rejected-behind error. Languages: Go 1.27 generic-method syntax highlighting. Other: open README by default (`on_new_window: "readme"`), Project Panel error handling. | https://github.com/zed-industries/zed/releases |
| **Zed v1.28.0-pre** | 2026-11-04T17:02:18Z | AI: `edit_predictions.button` setting; **improved Agent Client Protocol compatibility** (missing sessions, plan updates, diff formats, cancellation of permission requests); read_file output truncates lines >2,000 chars to protect context window; subagent cards open a finished run at its start. Git: optional **automatic git fetch** (`git.auto_fetch.enabled`, `git.auto_fetch.interval_secs`, default 60s, off by default); resizable Refs column in Git Graph; drag Git Panel files into terminals/editors; branch-name search in worktree picker. | https://github.com/zed-industries/zed/releases |
| **Zed nightly** — "agent: Fix compaction being billed as un-cached input tokens" | 2026-11-04T13:36:23Z | Compaction previously billed the whole context window as input tokens because tool definitions change during compaction requests. New **compaction strategy enum**; providers supporting `tool_choice: none` keep tool definitions stable → cache prefix preserved. Notably **does not apply to Anthropic**. | https://github.com/zed-industries/zed/releases |
| **Zed collab-staging nightly** — "ui: Allow for custom submenu triggers" | 2026-11-04T15:36:18Z | API extension: custom submenu trigger content (Release Notes: N/A). | https://github.com/zed-industries/zed/releases |
| **Kilo Code v7.8.26 (pre-release)** | 2026-11-04T22:59:40Z | VS Code: continue a local worktree in Cloud from Agent Manager (copies open conversations after branch validation + session sync), open Cloud workspace in browser, retry balance/partial-creation failures with same prepared request; new "Kilo Code: Show Open Tabs" command; Agent Manager splash as default-off Experimental option; Agent Manager preview layout simplification. Security: dependency bumps to clear moderate/low advisories (OpenTelemetry, AI SDK providers, glob, minimatch, Babel, esbuild), high-severity advisories (node-forge, brace-expansion, js-yaml, follow-redirects, body-parser, zod), and critical issues in express, proxy-addr, shell-quote. Playwright runtime → 1.64.1. | https://github.com/Kilo-Org/kilocode/releases |
| **Cline desktop-nightly-20261104233655** | 2026-11-04T21:08:20Z | feat(core): delegate UX verification to a subagent; fix(agents): preserve delegated tool approval policies; preserve worker identity and proxied execution mode; preserve child identity across Hub event projection. | https://github.com/cline/cline/releases |
| **Crush nightly** (charmbracelet/crush) | 2026-11-05T00:35:40Z | Nightly channel build; release body is the standard cosign/checksums verification boilerplate — **no distinct user-visible change documented**. | https://github.com/charmbracelet/crush/releases |
| **GitHub Copilot CLI** npm `1.0.106-8` | 2026-11-04T03:14:11Z | Patch build of the Copilot CLI package. | https://registry.npmjs.org/@github%2Fcopilot |
| **GitHub Copilot CLI** npm `1.0.106-9` | 2026-11-04T17:17:22Z | Patch build of the Copilot CLI package. | https://registry.npmjs.org/@github%2Fcopilot |
| **GitHub Copilot CLI** npm `1.0.102-0.unstable.r41779900948.gf482387` | 2026-11-04T14:43:56Z | Unstable/prerelease Copilot CLI build. | https://registry.npmjs.org/@github%2Fcopilot |
| **Amp CLI** (`@sourcegraph/amp`) — 8 tagged builds | 2026-11-04T09:30:55Z → 2026-11-05T00:30:59Z (latest `0.0.1793836860-gb8120f`) | Continuous tagged CI builds of the Amp CLI (~every 2-3 h) through the window. No per-build changelog published; treat as build churn, not feature releases. | https://registry.npmjs.org/@sourcegraph%2Famp |
| **Claude Code v2.1.318** | npm 2026-11-03T21:55:17Z; GitHub tag 2026-11-04T00:01:03Z | Just **before** window start (window opened 01:28Z) but inside the 2-day lookback: added a record of the answer when Claude Code asks to turn on the mods it writes; `assume_role` on mantle upstreams of the Claude apps gateway; `effort` option on a mod's `$.model.fork`; `loginExpiresAt` / `credential_expires_at` for stored claude.ai sign-ins; stderr warning 10 days before a stored sign-in ends; fixed `--continue` losing earlier conversation after malformed tool-call retries (regression from 2.1.314); fixed macOS sessions stalling with many Bash commands. | https://github.com/anthropics/claude-code/releases ; https://registry.npmjs.org/@anthropic-ai%2Fclaude-code |
| **Claude Agent SDK** npm `0.3.318` | 2026-11-03T21:55:44Z (+ platform binaries) | SDK version tracking Claude Code 2.1.318. | https://registry.npmjs.org/@anthropic-ai%2Fclaude-agent-sdk |
| **Gemini CLI core** npm `0.69.0-nightly.20261105.g1fe22af5f` | 2026-11-05T01:21:04Z | Nightly core package inside window. | https://registry.npmjs.org/@google%2Fgemini-cli-core |

### No new releases in window (checked, latest release predates window)
- `opencode` (anomalyco/opencode) — latest v2.2.5 on 2026-10-30T16:59:08Z. https://github.com/anomalyco/opencode/releases
- `goose` (block/goose) — latest v1.57.0 on 2026-10-28T19:42:57Z. https://github.com/block/goose/releases
- `OpenHands` — latest v1.35.0 on 2026-11-03T18:56:52Z. https://github.com/All-Hands-AI/OpenHands/releases
- `aider` — latest v0.86.3.dev on 2026-02-12. https://github.com/Aider-AI/aider/releases
- `Cursor` changelog — latest entry Oct 20, 2026 (Agent SDK); **no changelog entry in window**. https://cursor.com/changelog
- `Kilo Code` npm `@kilocode/cli` latest 7.8.18 (2026-10-26) — CLI package lags the VS Code extension train.


## 2. Company announcements in window

- **OpenAI to acquire Pierre Computer Company, Inc.** — 2026-11-04T14:30:00Z. "OpenAI will acquire Pierre Computer Company, Inc. ('Pierre'), the company behind **Code Storage** and a family of standout **open-source developer tools**. If you've browsed files or reviewed a change in the Codex app, you've already used Pierre's **Trees and Diffs** libraries." OpenAI says it wants to "advance the future of source control across the industry" and bring Pierre's Git workflows to coding agents; explicitly framed around "the first branch an agent creates to that magic moment when code is deployed". Related in-window post: **"Scaling Git at OpenAI"** (2026-11-02T15:30Z) describes **Pando**, OpenAI's in-house source control backend for engineers and agents. Pierre's recent releases named: Diffs "Edit mode", **Highlights** (very fast syntax highlighter that updates as an agent streams code), and the Code Storage API (store code + track history using Git). https://openai.com/index/openai-to-acquire-pierre ; https://openai.com/index/scaling-git-at-openai
- **Factory acquires HumanLayer** — 2026-11-04. "HumanLayer is joining Factory to accelerate building autonomous, self-improving software for enterprises and developers." Founders **Dex Horthy** and **Kyle Mistele** (early authors of the Research/Plan/Implement framework and one of the first viral "skill packs", Aug 2025) join. **HumanLayer will be open sourced** and its users invited to Factory; the current platform stays up during a transition period (data export, migration to Factory, or self-hosting the open source). Near-term features ported to Factory: **multiplayer tasks/workstreams** and **in-app collaboration on agent-written plans, product specs and design docs**. https://factory.ai/news/humanlayer
- **GitHub Copilot is now available in Xcode's coding assistant** — 2026-11-04T19:10:40Z. Public preview, requires Xcode 27.3 beta. The existing "GitHub Copilot for Xcode" extension remains a separate option. https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant
- **BYOK and enterprise custom models in the Copilot usage API** — 2026-11-04T00:32:19Z (post dated Nov 3). Copilot usage metrics API now separates BYOK usage from Copilot-hosted model usage. **Local BYOK**: configured by developers in their client; requests go **from Copilot CLI or the GitHub Copilot app directly to the developer's provider key or local model** — reported in `used_local_byok`, `totals_by_local_byok` and active local BYOK user counts. Enterprise custom models are admin-configured. https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api
- **GitHub Copilot is now available in JetBrains Air** — 2026-11-03T15:11:46Z (just outside window, ~10h before). **Uses the Agent Client Protocol (ACP)**; supports tasks in the JetBrains IDE or in the cloud. https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air
- **Dependabot version updates support Agent Package Manager (APM)** — 2026-11-03T20:24:07Z (just outside window). Dependabot opens PRs to update git dependencies declared in `apm.yml` and regenerates `apm.lock.yaml`; version updates only, not security updates. https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager
- **CodeQL 2.27.4** — 2026-11-04T20:04:52Z. Query accuracy improvements across languages, stronger security checks when bundling/publishing a pack, corrected query metadata (java/log-injection now recognizes more JDK/Apache Commons Lang/Text, Guava, OWASP Java Encoders sanitizers). https://github.blog/changelog/2026-11-04-codeql-2-27-4-improves-accuracy-and-query-metadata
- **OpenAI — "A thousand fewer paths to root"** — 2026-11-04T08:00:00Z. OpenAI built an autonomous pipeline that found, validated and generated patches for **948 local privilege-escalation vulnerabilities in the Linux kernel**. https://openai.com/index/a-thousand-fewer-paths-to-root
- **OpenAI — "Introducing Images 2.6"** — 2026-11-04T00:00:00Z. Faster image generation, GIF creation, more precise editing, new API controls across ChatGPT, **Codex** and the API. https://openai.com/index/introducing-images-2-6
- **OpenAI — "Daybreak Red is now available in AWS GovCloud (US-East)"** — 2026-11-04T07:00:00Z. Brings GPT-5.6 Cyber to approved customers via Amazon Bedrock for authorized cybersecurity work. https://openai.com/index/daybreak-red-aws-govcloud
- **OpenAI — DevRev delivers autonomous self-service with GPT-6.1 Sol** — 2026-11-04T00:00:00Z. DevRev uses GPT-6.1 Sol to power "Computer and Operator" (agentic computer-use surface). https://openai.com/index/devrev-enterprise-self-service
- **Anthropic** — the Anthropic news index showed a "Latest news" banner dated **November 5, 2026** and one research post, "Investigating vault particles with Claude" (**Nov 4, 2026**). No Anthropic product/CLI announcement in the window; the newest Anthropic announcements remain from Oct 22-28 (Agent Skills donation to the Agentic AI Foundation on Oct 22; Opus 5.5 on Sep 22). https://www.anthropic.com/news
- **Cursor** — no changelog entry in the window; latest is Oct 20, 2026 (Agent SDK). https://cursor.com/changelog
- **Cognition / Devin** — changelog latest is **November 2, 2026** ("Clearer Read-only Access in the Composer"); nothing in window. Devin blog latest post Nov 2 ("Hierarchical budgets"). https://devin.ai/changelog ; https://windsurf.com/blog
- **Mistral, xAI, JetBrains, Goose, OpenCode, Aider** — no announcements found inside the window (see Gaps).


## 3. New entrants / trending packages

- **Antigravity CLI (`agy`)** — `google-antigravity/antigravity-cli` (2.7k★) shipped its largest release of the window (v1.5.0) with an **ACP server mode**, a `--remote-agent` mode and a plugin/MCP marketplace surface. Repo https://github.com/google-antigravity/antigravity-cli
- **`router-for-me/CLIProxyAPI`** (57.5k★, pushed 2026-11-04) — wraps Antigravity, ChatGPT Codex, Claude Code, Grok Build, Muse Code and Devin behind one proxy API. Signal that the multi-vendor CLI surface is being abstracted. https://github.com/router-for-me/CLIProxyAPI
- **`RongleCat/grok-app`** (1.5k★) — open-source desktop GUI workbench for the local **Grok Build CLI**; suggests xAI's Grok Build CLI has a real desktop ecosystem forming. https://github.com/RongleCat/grok-app
- **`Balanov/latch`** — new repo 2026-11-04, **210★ in ~1 day**: "One tiny HTTPS contract between any agent and any service. Quote, approve, commit, receipt." An agent↔service transaction primitive. https://github.com/Balanov/latch
- **`relayworkslab/relayworks-recovery`** (58★) — resume failed AI agent jobs from their last checkpoint instead of restarting them. https://github.com/relayworkslab/relayworks-recovery
- **`almonk/rexpad`** (20★) — a live todo list for coding agents drawn in a Rex pane via kitty graphics protocol. https://github.com/almonk/rexpad
- **`jahala/conducted`** — local-first desktop app running coding agents in parallel, each in its own workspace. https://github.com/jahala/conducted
- **`amramos/outpost`** — one pane for every coding agent run from Claude Code (Claude, Codex, opencode, Copilot). https://github.com/amramos/outpost
- **`Latth/agent-bridge`** — lets coding agents on different machines work together over an encrypted bridge (Claude Code…). https://github.com/Latth/agent-bridge
- **`YuLab-SMU/aisdk.acp`** — an **ACP client** for driving coding agents (dsh, Claude Code, Codex) from a UI. https://github.com/YuLab-SMU/aisdk.acp
- **`Viltrumlik/parallel-agents`** — run Claude Code, Codex, Cursor and Gemini CLI on the same repo without them overwriting each other. https://github.com/Viltrumlik/parallel-agents
- **`TngSHoO/agentcase-lab`** (31★) — AI agent failure replay and root-cause analysis platform. https://github.com/TngSHoO/agentcase-lab
- **`iampedii/herdr-redline`** (24★) — code review inside the Herdr app (GitLab MRs / GitHub PRs in a git worktree). https://github.com/iampedii/herdr-redline
- **`KRISH-exe-29/ai-agent-skill-router`** — skill router/manager that auto-picks the right skills, subagents, plugins. https://github.com/KRISH-exe-29/ai-agent-skill-router
- **`realshahriya/Mukhon-Skill-pack`** — a curated pack of 49 spec-compliant `SKILL.md` agent skills (TDD, debugging, frontend…). https://github.com/realshahriya/Mukhon-Skill-pack
- **`yangshun2005/agent-desktop-cn`** — [Chinese-localized] "Computer use CLI for AI agents". https://github.com/yangshun2005/agent-desktop-cn
- **`anomalyco/phonecall`** — let your agent make phone calls (Grok Voice + Twilio on Cloudflare) with mid-call questions. https://github.com/anomalyco/phonecall
- **`tobi/wrapvm`** — a desktop VM for agents: base image + XFCE, shared Chrome, agent-browser integration. https://github.com/tobi/wrapvm
- npm, newly published in window: **`@agentic-kit/cli` 0.19.13** and **`@agentic-kit/pi` 0.28.13** (2026-11-04) — pi coding agent with a "Constructive" harness; **`agentic-coding-harness` 0.27.5** (2026-11-03) — run/watch/meter Claude Code, OpenCode, Kiro, Codex…; **`skills` 1.7.6** (2026-11-03); **`@earendil-works/pi-coding-agent` 1.5.0** and **`@oh-my-pi/pi-coding-agent` 18.16.0** (2026-11-02) — two competing forks of a "pi coding agent" CLI. https://registry.npmjs.org/@agentic-kit%2Fcli ; https://registry.npmjs.org/agentic-coding-harness ; https://registry.npmjs.org/skills


## 4. Gaps and caveats

- **Release-body stubs**: OpenAI Codex 0.167.0-alpha.3.1/.5, 0.168.0-alpha.1/.2, rust-v0.168.0-alpha.3 (all 2026-11-04/05) have **empty release notes** ("Release 0.168.0-alpha.N"). No user-visible change is documented and none was invented here. The Codex changelog repo only carries an "Unreleased" entry ("Fix missing command lifecycle events when unified exec cannot create a process…", issue #44557) — https://github.com/openai/codex/blob/main/CHANGELOG.md
- **Nightly/tagged CI churn treated as non-releases**: Amp (`@sourcegraph/amp`, 8 builds), Crush nightly, Cline desktop-nightly, Gemini nightly builds. These are recorded for completeness but are not user-facing releases.
- **404s / name misses verified**: `Factory-AI/droid-cli` (404 — the real repo is `Factory-AI/factory`, whose releases.atom is **empty**, so Droid's changelog must be read from docs.factory.com), `Factory-AI/droid`, `Factory-AI/factory-droid-cli` (404), `sourcegraph/amp` (404 — Amp ships via npm `@sourcegraph/amp` only), `Factory-AI/factory-cli` (404), `@factory-ai/droid-cli` / `factory-droid` (npm 404 — the real packages are **`@factory/cli`** and **`droid`**), `@cursor/cli` / `@cursor/agent-sdk` (npm 404), `anthropic-ai/news/rss.xml` (404 — Anthropic exposes no RSS), `factory.ai/changelog` and `factory.ai/blog` (404; the live changelog is `docs.factory.com/changelog/release-notes`), `x.ai/news` (403 to curl).
- **Search budget**: 1 of 4 permitted `web_search` calls used (to locate the Factory changelog URL); 1 of 1 permitted `web_fetch` used (OpenAI/Pierre announcement). Everything else came from direct HTTP GET.
- **Not exhaustively checked in-window**: JetBrains AI blog (feed fetched but no Nov 4-5 CLI-relevant item found), Warp (no GitHub releases in window), Mistral news (page fetched, no dated in-window item parsed), xAI/Grok Build CLI (no public release feed found), Muse Code, Kimi CLI, Qwen Code, iFlow CLI, and non-npm desktop assistants (Warp/Pear/Void).
- **Duplicate-package ambiguity**: `droid` on npm is a *different*, much older package (last release 1.7.3 on 2026-01-09) that shadows the Factory CLI name; the Factory CLI is `@factory/cli` (and `droid` versions are mirrored to a `droid` package name in the search index — treat `@factory/cli` as authoritative).
- **Zed v1.28.0-pre and v1.27.0 timestamps are nearly identical** (17:02:18Z vs 17:04:23Z) — both published inside the window; the stable v1.27.0 is the one shipping to users, v1.28.0-pre is the preview channel.
- Claude Code v2.1.318 was published **just before** the window opened (npm 2026-11-03T21:55:17Z; GitHub tag 2026-11-04T00:01:03Z vs window start 01:28:00Z). It is included under the 2-day lookback; confirm with the previous cycle whether it was already captured there.
- The **Factory changelog page is a single large Mintlify document** (3.9 MB HTML); only the v1.3.0 / v1.2.0 sections were extracted and distilled. Deeper per-surface (CLI vs Desktop vs App vs API) filtering was not performed.


## Collection log

| URL | Status |
|---|---|
| https://github.com/anthropics/claude-code/releases.atom | 200 |
| https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md | 200 |
| https://code.claude.com/docs/en/changelog.md | 200 |
| https://github.com/openai/codex/releases.atom | 200 |
| https://raw.githubusercontent.com/openai/codex/main/CHANGELOG.md | 200 |
| https://github.com/google-gemini/gemini-cli/releases.atom | 200 |
| https://github.com/google-antigravity/antigravity-cli/releases.atom | 200 |
| https://github.com/charmbracelet/crush/releases.atom | 200 |
| https://github.com/cline/cline/releases.atom | 200 |
| https://github.com/Kilo-Org/kilocode/releases.atom | 200 |
| https://github.com/zed-industries/zed/releases.atom | 200 |
| https://github.com/anomalyco/opencode/releases.atom | 200 (no in-window release) |
| https://github.com/block/goose/releases.atom | 301 -> 200 (no in-window release) |
| https://github.com/All-Hands-AI/OpenHands/releases.atom | 301 -> 200 (no in-window release) |
| https://github.com/Aider-AI/aider/releases.atom | 200 (no in-window release) |
| https://github.com/Factory-AI/factory/releases.atom | 200 but EMPTY feed |
| https://github.com/Factory-AI/droid-cli | 404 |
| https://github.com/Factory-AI/droid | 404 |
| https://github.com/Factory-AI/factory-droid-cli | 404 |
| https://github.com/Factory-AI/factory-cli | 404 |
| https://github.com/sourcegraph/amp | 404 |
| https://github.com/warpdotdev/Warp/releases.atom | 200 (no in-window release) |
| https://github.com/RooVetGit/Roo-Code/releases.atom | 200 (no in-window release) |
| https://github.com/continuedev/continue/releases.atom | 200 (no in-window release) |
| https://github.com/voideditor/void/releases.atom | 200 (no in-window release) |
| https://github.com/pearAI/pear/releases.atom | 200 (empty) |
| https://registry.npmjs.org/@factory%2Fcli | 200 |
| https://registry.npmjs.org/@factory%2Fcli/1.3.0 | 200 |
| https://registry.npmjs.org/@anthropic-ai%2Fclaude-code | 200 |
| https://registry.npmjs.org/@anthropic-ai%2Fclaude-agent-sdk | 200 |
| https://registry.npmjs.org/@openai%2Fcodex | 200 |
| https://registry.npmjs.org/@google%2Fgemini-cli | 200 |
| https://registry.npmjs.org/@google%2Fgemini-cli-core | 200 |
| https://registry.npmjs.org/@github%2Fcopilot | 200 |
| https://registry.npmjs.org/@sourcegraph%2Famp | 200 |
| https://registry.npmjs.org/@factory%2Fdroid-sdk | 200 (last 0.10.0, 2026-10-19) |
| https://registry.npmjs.org/droid-cli | 200 (unrelated old package) |
| https://registry.npmjs.org/@factory-ai%2Fdroid-cli | 404 |
| https://registry.npmjs.org/factory-droid | 404 |
| https://registry.npmjs.org/@cursor%2Fcli | 404 |
| https://registry.npmjs.org/@cursor%2Fagent-sdk | 404 |
| https://registry.npmjs.org/@zed-industries%2Fzed | 404 |
| https://registry.npmjs.org/@charmbracelet%2Fcrush | 404 |
| https://registry.npmjs.org/@mistralai%2Fmistral-cli | 404 |
| https://registry.npmjs.org/@google%2Fantigravity | 404 |
| https://registry.npmjs.org/@xai%2Fgrok-build | 404 |
| https://registry.npmjs.org/opencode-ai | 200 (last 1.19.5, 2026-10-28) |
| https://registry.npmjs.org/@continuedev%2Fcli | 200 (last 2026-06-18) |
| https://registry.npmjs.org/-/v1/search?text=factory%20droid&size=15 | 200 |
| https://registry.npmjs.org/-/v1/search?text=agentic%20cli%20coding%20agent&size=20&sort=date | 200 |
| https://registry.npmjs.org/-/v1/search?text=ai%20cli%20agent&size=20&sort=date | 200 |
| https://docs.factory.com/changelog/release-notes | 200 |
| https://factory.ai/news | 200 |
| https://factory.ai/news/humanlayer | 200 |
| https://factory.ai/changelog | 404 |
| https://factory.ai/blog | 404 |
| https://factory.ai/ | 200 |
| https://cursor.com/changelog | 200 (latest Oct 20, 2026) |
| https://docs.cursor.com/changelog | 200 |
| https://openai.com/news/rss.xml | 200 |
| https://openai.com/index/openai-to-acquire-pierre (via web_fetch) | 200 |
| https://openai.com/index/a-thousand-fewer-paths-to-root | JS-gated (title only) |
| https://blog.google/technology/ai/rss/ | 200 (no in-window item) |
| https://github.blog/changelog/feed/ | 200 |
| https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant | 200 |
| https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api | 200 |
| https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager | 200 |
| https://www.anthropic.com/news | 200 |
| https://www.anthropic.com/news/rss.xml | 404 |
| https://devin.ai/changelog | 200 (latest Nov 2, 2026) |
| https://docs.devin.ai/changelog | 404 |
| https://windsurf.com/blog | 200 (latest Nov 2, 2026) |
| https://mistral.ai/news | 200 (no in-window item parsed) |
| https://x.ai/news | 403 |
| https://blog.jetbrains.com/feed/ | 200 (no in-window CLI item) |
| https://api.github.com/search/repositories (antigravity cli / grok build / muse code) | 200 |
| https://api.github.com/search/repositories (created 2026-11-04..05, agent/agentic/coding agent) | 200 |
| https://api.github.com/search/issues (repo:openai/codex feat, 2026-11-04..05) | 200 (no hits) |

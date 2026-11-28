# Findings — agentic-cli-tools / releases / 2026-11-20
Window: 2026-11-19T01:28:00Z -> 2026-11-20T01:28:00Z

Research angle: tool releases, commands, features, company announcements for agentic CLI tools and desktop AI assistants.
Method: primary-source only (npm registry API, GitHub releases atom feeds, GitHub release APIs, PyPI JSON API, company blogs, SEC EDGAR, status pages). No web_search/web_fetch.

## Claude Code — v2.1.329 — 2026-11-19T22:14:41Z (GH release) / npm 2026-11-19T18:40:25Z [VERIFIED]
- GitHub release `v2.1.329` published 2026-11-19T22:14:41Z; npm `@anthropic-ai/claude-code@2.1.329` published 2026-11-19T18:40:25Z. npm dist-tags: `latest`=2.1.329, `next`=2.1.329, `stable`=**2.1.311 (unchanged)**.
- New: trust dialog warning naming where a folder's hooks are declared; warning in conversation (incl. Claude Desktop / non-interactive hosts) when hooks in managed settings fail to load; `/tasks` now lists this session's scheduled tasks, `/loop` wakeups, the goal, and this conversation's forks (`/x` stops one after asking); `/mcp` server page gains a "Server message" row showing the JSON-RPC error from a remote HTTP MCP server that refuses the connection; `/status` gains a "Marketplace auto-update" row naming managed marketplaces that get no automatic updates and why; Code Mode can now be enabled while OpenTelemetry events/metrics are on (each tool call the code makes sends its events; tracing still keeps it off).
- Fixes (selection): `~/.claude.json` sometimes reset to defaults when a network stall / file lock made it unreadable and it was cleared during save; repeated macOS sign-outs when the Keychain could be read but not saved; `/terminal-setup` corrupting VS Code settings/keybindings around block comments and losing Shift+Enter; IDE-accepted diffs saved without last newline and losing BOM; `/teleport` cloud-session pick replacing the open conversation (now starts a new session like `/clear`); `/usage-credits` asking Pro/Max users to log in again and link vanishing after 8s; `/usage` showing credits off when exhausted/at monthly limit; spend-limit menu showing spend as monthly limit and wrapping rows; a status-line script printing without end freezing the prompt and consuming gigabytes of memory; empty frozen screen after approving managed settings; choosing "Default" in `/model` replacing your saved model with the org default; an MCP server being asked to sign in again after auth was cleared during a token refresh; background MCP tasks stalling after a slow reconnect (Claude Code now reconnects most HTTP MCP servers itself when left on an older protocol version); PDFs/images/.docx/.xlsx/.pptx sent by MCP servers or websites as `application/octet-stream` being saved as `.bin`; `/code-review` sometimes reviewing the checked-out branch instead of the PR without saying so (now reads the PR with `gh pr diff` or says when it can't); `/code-review` stopping at a permission prompt on most models looking for a non-existent `~/.claude/CLAUDE.md`; Code Mode hiding a script's finished edits and stopped command after Esc and losing them on exit; a runaway loop in Code Mode filling machine memory (now stopped at a limit); a background agent running on after being stopped while being resumed; background shell commands and Remote Control using memory for the earlier conversation until exit/after compaction.
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.329
Source: https://registry.npmjs.org/@anthropic-ai/claude-code

## claude-agent-sdk — 0.3.329 — 2026-11-19T18:42:14Z [VERIFIED]
- npm `@anthropic-ai/claude-agent-sdk@0.3.329` published 2026-11-19T18:42:14Z; dist-tags `latest`=0.3.329, `next`=0.3.329.
Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

## Claude Code GitHub Action — v1.0.284 — 2026-11-19T22:17:34Z [VERIFIED]
- GitHub release `v1.0.284` published 2026-11-19T22:17:34Z; the action's release feed was updated 2026-11-19T22:17:31Z. A parallel `v1` tag ("Claude Code GitHub Action v1.0") was also updated 2026-11-19T22:17:46Z. Body is only a compare link to v1.0.283.
Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.284

## OpenAI Codex — 0.171.0 — 2026-11-20T00:47:14Z (GH) / npm 2026-11-20T00:51:29Z [VERIFIED]
- GitHub release `rust-v0.171.0` published 2026-11-20T00:47:14Z; npm `@openai/codex@0.171.0` published 2026-11-20T00:51:29Z, plus per-platform binaries 0.171.0-linux-x64 (00:52:02Z), -linux-arm64 (00:52:44Z), -darwin-arm64 (00:54:43Z), -win32-x64 (00:57:33Z), -win32-arm64 (00:58:14Z), -darwin-x64 (01:00:21Z). npm `latest` advanced 0.170.0 -> **0.171.0**.
- New: **GPT-6.2 Sol and Astra added to model catalogs, with Sol as the default catalog selection** (#62106); **TUI workspace enabled by default** with searchable document previews, image previews, and subagent transcripts alongside the main conversation (#61352, #61888, #61889, #61919, #62157); configurable undo/redo shortcuts in the non-Vim prompt composer incl. restoration of attachments and large pastes (#61954); `codex exec --remote` to start or resume noninteractive sessions on an existing app server (#61707); `/rc` and `/remote` to manage local remote control and display device pairing codes from the TUI (#62121); custom MCP status line selection and authoring via `/statusline` when `tui_extensions_statusline` is enabled (#61979, #61988, #62037).
- Fixes: drafts, queued follow-ups and interrupted input keep their original threads when switching/resuming sessions (#61216); permission profiles preserved across working-directory changes (#61195); late completion events no longer cancel approvals for a newer turn (#61801); earlier edits preserved in aggregate diffs when steering an active turn (#61820); fixed stray-character scroll insertion, composer caret jumps and redraws using stale terminal dimensions (#62139, #62174, #62175); enterprise MCP sign-in for IdPs that issue ID tokens without refresh tokens (#62129).
- Chores: source builds and release tooling updated to **Rust 1.99.1** (#61205); XML dependencies updated and obsolete security-advisory exceptions removed (#62068).
Source: https://github.com/openai/codex/releases/tag/rust-v0.171.0
Source: https://registry.npmjs.org/@openai/codex

## OpenAI Codex — 0.172.0-alpha.2 — 2026-11-19T15:49:51Z (GH) [VERIFIED]
- GitHub release tag `rust-v0.172.0-alpha.2` published 2026-11-19T15:49:51Z; npm `alpha` dist-tag = **0.172.0-alpha.2** (supersedes the prior alpha 0.171.0-alpha.13 baseline). Release body carries no changelog text beyond "Release 0.172.0-alpha.2".
Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2
Source: https://registry.npmjs.org/@openai/codex

## OpenAI Codex — 0.171.0-alpha.13.1 — 2026-11-19T22:07:59Z (GH) [VERIFIED]
- GitHub release tag `rust-v0.171.0-alpha.13.1` published 2026-11-19T22:07:59Z; npm platform packages `0.171.0-alpha.13.1-{linux-arm64,darwin-x64,darwin-arm64,win32-arm64,win32-x64}` published 2026-11-19T22:15:25Z–22:19:22Z.
Source: https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.1
Source: https://registry.npmjs.org/@openai/codex

## OpenAI Codex — 0.173.0-alpha.1 — 2026-11-20T01:44:36Z (GH) [VERIFIED]
- GitHub release tag `rust-v0.173.0-alpha.1` published 2026-11-20T01:44:36Z — inside the window, 16 minutes before window close. Release body carries no changelog text beyond "Release 0.173.0-alpha.1"; npm `alpha` dist-tag still points at 0.172.0-alpha.2 (npm package for 0.173.0-alpha.1 not yet observed at query time).
Source: https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1

## Gemini CLI — 0.70.0 (stable) — 2026-11-19T21:08:05Z (GH) / npm 2026-11-19T21:13:43Z [VERIFIED]
- GitHub release `v0.70.0` published 2026-11-19T21:08:05Z; npm `@google/gemini-cli@0.70.0` published 2026-11-19T21:13:43Z; npm `latest` advanced 0.69.0 -> **0.70.0**.
- Changes: preserve Unicode prompts and strip ANSI fragments in session previews (#29915); preserve selected worktree across authentication restarts (#30078); preserve interrupted placeholder after empty model responses to tool turns (#30228); apply default in `${VAR:-default}` when the variable is set but empty (#30250); scale undici `bodyTimeout` when request timeout exceeds the 300s default (#30258); report accurate output token limits in `models list` (#30253); restore workspace directories only after `resumeChat` succeeds (#30259); scope foreground retry status to the active main prompt and current model policy (#30266); initialize auth capabilities and dedupe options when listing models (#30271); skip system MCP servers with insecure command permissions (#30283); refactor to `re2js` for linear-time policy `argsPattern` evaluation (#30282); disclose canonical link path and set default consent prompt to "no" (#30289); detect local git clone from the CLI path instead of cwd (#30315); IDE per-user discovery directory and atomic port file writes (#30340); keep ASK_USER for shell commands with unresolved expansion (#30338); match `commandPrefix`/`commandRegex` rules against the top-level command argument (#30355); dependency updates incl. sandbox runtime packages (#30321) and simple-simple git pin adjustments (#30356).
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0
Source: https://registry.npmjs.org/@google/gemini-cli

## Gemini CLI — 0.71.0-preview.0 — 2026-11-19T20:48:23Z (GH) / npm 2026-11-19T20:54:57Z [VERIFIED]
- GitHub release `v0.71.0-preview.0` published 2026-11-19T20:48:23Z; npm published 2026-11-19T20:54:57Z; npm `preview` dist-tag advanced to 0.71.0-preview.0 (baseline preview was 0.70.0-preview.0). Release body is the same changelog set as 0.70.0.
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-preview.0
Source: https://registry.npmjs.org/@google/gemini-cli

## Gemini CLI — 0.71.0-nightly.20261120.gd4cb1713f — 2026-11-20T01:18:23Z (npm) [VERIFIED]
- npm nightly published 2026-11-20T01:18:23Z; GitHub release `v0.71.0-nightly.20261120.gd4cb1713f` published 2026-11-20T01:12:42Z; npm `nightly` dist-tag advanced (baseline 0.67.0-nightly.20261104).
Source: https://registry.npmjs.org/@google/gemini-cli
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261120.gd4cb1713f

## Gemini CLI — v0.69.0 release tag — 2026-11-19T01:45:47Z (GH) [VERIFIED]
- The `v0.69.0` GitHub release tag was (re)published at 2026-11-19T01:45:47Z, just inside the window (npm 0.69.0 itself was published 2026-11-19T01:51:24Z, i.e. the release was tagged before the npm artifact landed).
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0
Source: https://registry.npmjs.org/@google/gemini-cli

## GitHub Copilot CLI — 1.0.115-0 and 1.0.115-1 (prereleases) — 2026-11-19T12:54:34Z / 17:08:22Z [VERIFIED]
- GitHub prerelease `v1.0.115-0` published 2026-11-19T12:54:34Z (npm `@github/copilot@1.0.115-0` 2026-11-19T12:54:39Z). Body: "Fixes and changes" (no items listed).
- GitHub prerelease `v1.0.115-1` published 2026-11-19T17:08:22Z (npm 2026-11-19T17:08:46Z). Fixes: MCP sign-in can continue when a server grants the required scopes but omits an automatically requested refresh-token scope; direct workflow execution waits for project extension workflows to register.
- npm `latest` dist-tag remains **1.0.114** — no stable release in the window.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-1
Source: https://registry.npmjs.org/@github/copilot

## Crush — v0.102.0 — 2026-11-19T16:11:04Z (feed) / npm 2026-11-19T17:31:58Z [VERIFIED]
- GitHub release `v0.102.0`; npm `@charmland/crush@0.102.0` published 2026-11-19T17:31:58Z; npm `latest` advanced 0.101.0 -> **0.102.0**.
- Features: **BYO prompts** — replace system prompts for the main agent, subagents, planning, compaction, session titles and `crush init` via `option prompt <name> <path>`, settable globally, overridden per project, or overridden with `--prompt name=path`; **Channels** — experimental MCP feature from Claude, letting MCP servers push events into the session live (`crush --channels server:webhook --channels server:signal`, or `mcp add … --channel true` in `.crushrc`), using the same protocol as Claude Channels; **Nerd Fonts support** (auto-detected, toggleable via `option ui nerd-fonts true/false`, needed over SSH); new **Knight Rider KITT theme** plus Rosé Pine Classic, Moon and Dawn themes; client-server mode hardened (more secure, correctness fixes, many bugfixes, especially on Windows).
Source: https://github.com/charmbracelet/crush/releases/tag/v0.102.0
Source: https://registry.npmjs.org/@charmland/crush

## Crush — nightly — 2026-11-20T00:45:48Z [VERIFIED]
- GitHub rolling `nightly` tag updated 2026-11-20T00:45:48Z.
Source: https://github.com/charmbracelet/crush/releases/tag/nightly

## Kilo Code — v7.8.31 (pre-release) — 2026-11-19T20:16:41Z (GH) / npm 2026-11-19T20:17:19Z [VERIFIED]
- GitHub release `v7.8.31 (pre-release)` published 2026-11-19T20:16:41Z; npm `@kilocode/cli@7.8.31` published 2026-11-19T20:17:19Z, tagged `rc`. npm `latest` remains 7.8.27 (baseline listed 7.8.30, which was a 2026-11-16 pre-release).
Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.31
Source: https://registry.npmjs.org/@kilocode/cli

## Kilo Code — JetBrains 7.2.1-rc.9 — 2026-11-19T21:40:03Z [VERIFIED]
- GitHub release `JetBrains 7.2.1-rc.9` published 2026-11-19T21:40:03Z, superseding rc.8 (2026-11-17T15:03:52Z).
Source: https://github.com/Kilo-Org/kilocode/releases/tag/jetbrains/v7.2.1-rc.9

## Kilo Code — nightly-style v2 tags 0.0.0-v2-194 and 0.0.0-v2-226 — 2026-11-19T10:25:07Z / 17:08:24Z [VERIFIED]
- npm `@kilocode/cli` published `0.0.0-v2-194` (2026-11-19T10:25:07Z) and `0.0.0-v2-226` (2026-11-19T17:08:24Z); dist-tag `kilo-v2` moved to `0.0.0-v2-226`. These are the v2 development channel (dist-tag `alpha` still 0.0.5).
Source: https://registry.npmjs.org/@kilocode/cli

## Amp — 0.0.1795132865-g864b56 — 2026-11-20T00:31:25Z [VERIFIED]
- npm `@sourcegraph/amp@0.0.1795132865-g864b56` published 2026-11-20T00:31:25Z; `latest` advanced from the baseline 0.0.1795046458-g1dcfdb. A steady build cadence inside the window: g663242 (04:28:01Z), g7a71f0 (08:30:33Z), g8be92a (12:30:26Z), gfa5ada (16:26:18Z), g890419 (20:26:38Z), g864b56 (00:31:25Z next day).
Source: https://registry.npmjs.org/@sourcegraph/amp

## pydantic-ai — v2.71.0 — 2026-11-19T02:45:42Z [VERIFIED]
- PyPI `pydantic-ai` 2.71.0 uploaded 2026-11-19T02:45:42Z; PyPI `latest` advanced from the baseline v2.70.0. (Note: the prior attempt's lead quoted 2026-11-19T02:13:05Z for this release; the authoritative PyPI upload timestamp is 02:45:42Z.)
Source: https://pypi.org/pypi/pydantic-ai/json


## Google Antigravity CLI — v1.5.12 — November 19, 2026 [VERIFIED]
- Changelog entry "Antigravity CLI v1.5.12 / Latest / November 19, 2026 — Remote Control split view, Gemini 4 Neon API key support, and faster conversation forking." 7 improvements + 7 fixes.
- Improvements: split view in the Remote Control browser view (Split Right / Split Down from the `Split` submenu, not on phones); **Gemini 4 Neon (Low/Medium/High/XHigh) added to `/model` and `--model` when connected with a `GEMINI_API_KEY`**; scroll-position indicator in full screen (altscreen) mode ("↓ 25 lines · 2 turns"); Markdown headings in agent responses/artifacts now render as bold/italic/underline instead of literal `##`; **`/fork` performance fix** — for conversations whose artifact folder has grown large (e.g. cloned repos, build output in `scratch/`), the fork now leaves those files with the original conversation instead of copying every file ("forking takes seconds instead of up to an hour"); older-message loading in Remote Control now shows "Loading older messages…" plus a "Couldn't load older messages · Retry" action; Auto mode's out-of-sandbox command review decides faster and times out less often — when it runs on Gemini 4 Hydrogen it now uses medium instead of high thinking.
- Fixes (selection): full-screen rendering inserted a line break wherever the prompt wrapped, and sent prompts / prompt-box text now copy as typed; bold text next to CJK characters showed literal `**` markers; Remote Control browser view crashed on conversations containing @-mentions pasted back from a Markdown export; Enter in the Remote Control browser view sent the message even while the send button was disabled.
Source: https://antigravity.google/docs/changelog/

## Google Antigravity IDE — v2.8.0 — November 19, 2026 [VERIFIED]
- Changelog entry "Antigravity IDE / v2.8.0 / Latest / November 19, 2026 — Background update checks, instant startup, remote sign-in port forwarding, and Windows recovery fixes." 7 improvements + 5 fixes.
- Improvements: default backend startup readiness timeout raised 30s → 60s (Windows reliability); automatic port forwarding + authorization-code fallback for sign-in in remote dev environments; immediate startup on installed backend binaries without blocking editor activation on release checks; **recurring background release checks with a restart notification**; keyboard shortcuts to search within conversations when the Agent panel is focused; visually hidden semantic headings for screen-reader turn-by-turn navigation; custom root certificate authorities and proxy configuration support during sign-in.
- Fixes: background recovery loops attempting doomed restarts during Windows logoff/shutdown; multiple editor windows on shared release channels causing unintended backend binary downgrades; transient recovery timeouts wiping local metadata and triggering unnecessary binary re-downloads; task-completion notifications on Windows focusing the wrong window in multi-window workspaces.
Source: https://antigravity.google/docs/changelog/

## Google Antigravity Eclipse — v1.2.0 — November 19, 2026 [VERIFIED]
- Changelog entry "v1.2.0 / Latest / November 19, 2026 — In-IDE issue reporting and retry actions, improved mid-session crash recovery, and sign-in flow reliability improvements." 1 improvement + 2 fixes.
- Improvement: in-IDE Feedback Reporting — direct issue reporting and retry actions on error views across chat, settings and artifact panels.
- Fixes: unexpected service terminations were not detected/displayed across open tool views; completing sign-in prompted to launch an external desktop application instead of returning to the editor.
- (The same changelog also lists a Gemini 4 Neon model launch dated November 18, 2026 — just before the window; and Antigravity CLI v1.5.11 / IDE v2.7.0 dated Nov 18 / Nov 12.)
Source: https://antigravity.google/docs/changelog/

## Goose — oi-kit-v0.1.0-alpha.15 — 2026-11-19T19:50:06Z [VERIFIED]
- GitHub release feed (block/goose, also mirrored at aaif-goose/goose) updated 2026-11-19T19:50:06Z with tag `oi-kit-v0.1.0-alpha.15`. Precedent tags in the same feed: `gdk-v0.1.0-alpha.14` (2026-11-16T22:01:49Z).
- No new goose application release inside the window: the newest stable is `v1.60.1` (2026-11-18T01:48:41Z), i.e. before the window opened.
Source: https://github.com/block/goose/releases/tag/oi-kit-v0.1.0-alpha.15

## Zed — nightly and collab-staging rolling tags — 2026-11-19 [VERIFIED]
- `nightly: Group Delta checkouts with their source repository (#67187)` — 2026-11-19T17:29:39Z.
- `collab-staging: Add an Ultrafast response speed picker (#67184)` — 2026-11-19T15:54:48Z.
- No new stable Zed release in the window: `v1.30.1-pre` (2026-11-18T22:35:16Z), `v1.30.0-pre` (2026-11-18T17:26:01Z) and `v1.29.2` (2026-11-18T21:44:41Z) all precede the window start.
Source: https://github.com/zed-industries/zed/releases.atom

## OpenAI Node SDK — openai 7.61.0 and 7.62.0 — 2026-11-19T21:07:25Z / 2026-11-20T01:43:43Z [VERIFIED]
- npm `openai@7.61.0` published 2026-11-19T21:07:25Z; `openai@7.62.0` published 2026-11-20T01:43:43Z (inside window). npm `latest` = 7.62.0.
Source: https://registry.npmjs.org/openai

## OpenAI Codex SDK — @openai/codex-sdk 0.171.0 — 2026-11-20T00:51:14Z [VERIFIED]
- npm `@openai/codex-sdk@0.171.0` published 2026-11-20T00:51:14Z, dist-tag `latest` advanced 0.170.0 → 0.171.0; `alpha` dist-tag = 0.172.0-alpha.2 (published 2026-11-19T15:55:07Z); `0.171.0-alpha.13.1` published 2026-11-19T22:11:43Z (dist-tag `release-0.171.0-alpha.13.1-alpha`).
Source: https://registry.npmjs.org/@openai/codex-sdk

## Google blog — Introducing Tool Retrieval in the Gemini API — Thu, 19 Nov 2026 18:00:00 +0000 [VERIFIED]
- Announcement of Tool Retrieval: "Give your agents access to hundreds of tools while using fewer tokens with Tool Retrieval, now in preview in the Gemini API." Directly relevant to agentic CLI/tool-calling workflows.
Source: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/

## Google blog — Genie 4 is now available on the Gemini API — Thu, 19 Nov 2026 17:00:00 +0000 [VERIFIED]
- "Build interactive 720p worlds with Genie 4 on the Google Gemini API. Generate coherent environments with native audio and real-time controls." (Companion post "Genie 4 is now available" was published Wed, 18 Nov 2026 18:00:00 +0000, just before the window.)
Source: https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/

## Google blog — Let Gemini tackle repetitive chores on your Mac — Thu, 19 Nov 2026 17:00:00 +0000 [VERIFIED]
- "The Gemini app for Mac now has computer use to help you with repetitive tasks." Desktop AI assistant capability announcement.
Source: https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/

## Google blog — ICYMI: Transfer your history from other AI apps into Gemini — Thu, 19 Nov 2026 20:30:00 +0000 [VERIFIED]
- "Transfer your chat history into Gemini. Import your ZIP files and AI summaries to continue conversations seamlessly." (Interoperability/handoff feature for AI assistants.)
Source: https://blog.google/innovation-and-ai/products/gemini-app/switch-ai-assistants-transfer-history/

## Google blog — How we're putting one of quantum mechanics' deepest features to the test at scale — Thu, 19 Nov 2026 19:00:00 +0000 [VERIFIED]
- "Google Quantum AI research proves contextuality powers quantum algorithms at scale. See how our processor beat classical limits." Research announcement from Google Quantum AI (NOT Anthropic — the prior attempt's lead attributing a Nov-18 physics result to Anthropic could not be confirmed).
Source: https://blog.google/innovation-and-ai/models-and-research/quantum-computing/putting-one-of-quantum-mechanics-deepest-features-to-test-at-scale/

## OpenAI blog — How OpenAI's Performance Factory keeps ChatGPT fast — Thu, 19 Nov 2026 08:00:00 GMT [VERIFIED]
- Engineering post about OpenAI's "Performance Factory" for keeping ChatGPT fast. In window (08:00Z > 01:28Z).
Source: https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast

## GitHub changelog — 4 announcements in window [VERIFIED]
- "Improvements on the pull request overview in public preview" — Fri, 20 Nov 2026 00:02:21 +0000
- "Enterprise Live Migrations from Azure DevOps generally available" — Thu, 19 Nov 2026 18:50:57 +0000
- "Red Hat Enterprise Linux runner images now generally available" — Thu, 19 Nov 2026 18:48:46 +0000
- "S3 audit log streaming with OpenID Connect expands to GHE.com" — Thu, 19 Nov 2026 08:27:16 +0000
- (Adjacent, just before the window: "Wait for pull request events with GitHub CLI" — Thu, 19 Nov 2026 00:00:13 +0000.)
Source: https://github.blog/changelog/feed/

## Anthropic SEC — 424B4 final prospectus accepted 2026-11-19T11:05:50Z [VERIFIED]
- Form 424B4, accession 0001628280-26-074944, accepted 2026-11-19T11:05:50Z (primary doc `anthropicpbc-424b4.htm`).
- Key content verified from the filing text: Class A common stock IPO price $83.00 per share; approved for listing on the **Nasdaq Global Select Market under the symbol "ANT"**; incorporated as a **public benefit corporation** under Delaware law; authorized Class A, Class N (non-voting, convertible) and Class E (employee, limited-vote, no economics) common stock.
- Financial disclosure (TTM / Q3 2026): revenue of **$17.0 billion for the three months ended September 30, 2026** (vs. $197 million for Q4 2024); revenue grew **1,127% year over year** for that quarter while compute & infrastructure expenses grew 382%; **operating loss of $567 million** for Q3 2026 vs. operating income of $974 million for Q2 2026, driven by $5.0 billion of compute under short-term commitments and $2.0 billion of non-cash charges from the donation matching program; employees grew from ~940 (Dec 2024) to ~5,300 (Sep 2026).
- Customer base as of 2026-09-30: **>11,900 customers with ≥$100k TTM revenue** (up from ~1,500 at end-2025 and ~950 at Sep 2025), **>1,900 with ≥$1M TTM**, **~250 with ≥$10M TTM**; customers ≥$100k accounted for 74% of TTM revenue ($26.1B).
- Products named in the filing: Claude Mythos 5, Fable 5, Opus 5; Claude Cowork, Claude Security, Claude Design.
Source: https://www.sec.gov/Archives/edgar/data/1628280/000162828026074944/anthropicpbc-424b4.htm

## Anthropic SEC — FWP pricing term sheet accepted 2026-11-19T02:33:07Z [VERIFIED]
- Form FWP, accession 0001628280-26-074937, accepted 2026-11-19T02:33:07Z (primary doc `anthropicpbc-fwppricing.htm`).
- Terms: **Price to Public $83.00 per share**; Price to Underwriters $82.43878 per share (base shares only; no underwriting discount on option shares); **Option Shares Offered: up to 147,000,000 shares of Class A common stock (100% Primary)**; **Concurrent Private Placement: $26.0 billion of Class N common stock (313,253,007 shares) at the price to public**; Pricing Date November 18, 2026; **Trade Date November 19, 2026**; **Settlement Date November 20, 2026**; CUSIP No. 03703U 107.
- Lead bookrunning managers: Goldman Sachs, Morgan Stanley; bookrunning managers: J.P. Morgan, Citigroup, Barclays, Wells Fargo, BofA, Deutsche Bank, RBC, UBS; co-managers: BMO, BNP Paribas, Credit Agricole et al.
Source: https://www.sec.gov/Archives/edgar/data/1628280/000162828026074937/anthropicpbc-fwppricing.htm

## Anthropic SEC — concurrent private placement investor breakdown [VERIFIED]
- From the 424B4: Google LLC, NVIDIA Corporation, Micron Technology, Microsoft Corporation and TSMC Partners, Ltd. agreed to purchase an aggregate of **$26.0 billion of Class N common stock** in a private placement at a price per share equal to the IPO price. Google LLC: **120,481,927 shares for approximately $10.0 billion**; NVIDIA: **120,481,927 shares for approximately $10.0 billion**. The private placement is contingent on the offering completing and closes immediately after.
- Share-count reconciliation table in the filing: Class A common stock offered in this offering 956,351,354; **Class N common stock issued in the concurrent private placement 313,253,007**.
Source: https://www.sec.gov/Archives/edgar/data/1628280/000162828026074944/anthropicpbc-424b4.htm

## Anthropic SEC — two S-8 registrations and EFFECT notice [VERIFIED]
- Form S-8, accession 0001628280-26-074931, accepted 2026-11-19T02:02:26Z (`anthropicpbc-formsx8.htm`).
- Form S-8 (resale), accession 0001628280-26-074934, accepted 2026-11-19T02:14:18Z (`anthropicpbc-sx8resale.htm`).
- Form EFFECT, accession 9999999995-26-003574, accepted 2026-11-19T05:15:12Z (IPO registration statement effectiveness).
- Also filed inside the window: eight Form 3 statements of beneficial ownership (2026-11-19T01:58:36Z → 02:05:57Z).
Source: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001628280&type=&dateb=&owner=include&count=40

## Anthropic status — incident: Elevated errors for Claude Mythos 5.2 and Claude Fable 5.2 — 2026-11-19T09:10:24Z [VERIFIED]
- Investigating at 2026-11-19T09:10:25Z; monitoring at 09:22:50Z ("A fix has been deployed for other Claude models"); resolved at 2026-11-19T09:33:18Z. Affected claude.ai, the Claude API, **Claude Code**, and Claude Cowork. Impact 00:56 PT / 08:56 UTC to 01:11 PT / 09:11 UTC (~15 min).
Source: https://status.anthropic.com/

## OpenAI status — incident: Elevated error rates for gpt-6 Luna API requests — 2026-11-19T16:01:12Z [VERIFIED]
- Investigating 2026-11-19T16:01:12Z → monitoring 16:21:41Z → resolved 16:58:04Z ("All affected services are operating normally again"). Affects API users of gpt-6 Luna.
Source: https://status.openai.com/api/v2/incidents.json

## GitHub status — two incidents in window [VERIFIED]
- "Disruption with some GitHub services" — created 2026-11-19T17:06:26Z, resolved 18:17:42Z. Root cause disclosed mid-incident: "Starting around 18:02 UTC on November 5, GitHub web sessions stopped being renewed based on recent activity, so users were signed out when their sessions expired due to inactivity. These sign-outs were caused by a bug in session renewal, not due to a security incident. We believe we fixed the bug at 05:23 UTC on November 19".
- "Degraded availability for GPT-6 Luna in Copilot" — created 2026-11-19T15:56:02Z, resolved 16:37:00Z. Upstream model-provider issue; GitHub recommended choosing another model or 'Fusion'.
Source: https://www.githubstatus.com/api/v2/incidents.json

## Verified negatives
- No new `opencode` (sst/opencode) release in the window: the release feed's newest entry is `v2.3.2` at 2026-11-18T01:35:12Z (feed updated 2026-11-18T00:28:06Z), i.e. before the window opened. (checked https://github.com/sst/opencode/releases.atom, 2026-11-20)
- No new OpenHands release in the window: newest is `v1.42.0` at 2026-11-18T16:46:40Z (feed updated 2026-11-18T16:23:11Z). (checked https://github.com/All-Hands-AI/OpenHands/releases.atom, 2026-11-20)
- No new Qwen Code release in the window: feed updated 2026-11-18T22:19:12Z with no in-window entries. (checked https://github.com/QwenLM/qwen-code/releases.atom, 2026-11-20)
- No new Cline release: feed updated 2026-11-04T21:08:20Z. No new Continue release: feed updated 2026-06-19T00:23:08Z. (checked both releases.atom feeds, 2026-11-20)
- Claude Code npm `stable` dist-tag still 2.1.311 — it did **not** move to 2.1.329 in this window; `latest`/`next` both = 2.1.329. (checked https://registry.npmjs.org/@anthropic-ai/claude-code, 2026-11-20)
- Kilo Code npm `latest` remains 7.8.27; 7.8.31 shipped under the `rc` tag only. (checked https://registry.npmjs.org/@kilocode/cli, 2026-11-20)
- GitHub Copilot CLI npm `latest` remains 1.0.114; 1.0.115 exists only as prereleases (-0, -1). (checked https://registry.npmjs.org/@github/copilot, 2026-11-20)
- No new Cursor changelog entry in the window: the Cursor RSS feed's newest item is "Voice Chat with Agents", Fri, 06 Nov 2026 00:00:00 GMT. (checked https://cursor.com/changelog/rss.xml, 2026-11-20)
- No Anthropic newsroom post dated in the window: the newest `publishedOn` values on the Anthropic news index are 2026-11-18 ("Anthropic prices initial public offering", "Anthropic launches roadshow for proposed initial public offering", "Anthropic files S-1 with the SEC for proposed initial public offering"). (checked https://www.anthropic.com/news, 2026-11-20)
- No Anthropic research or science post in the window: newest `publishedOn` on /research is 2026-11-17; on /science 2026-11-17. The Nov-18 "physics result" lead from the prior attempt could not be confirmed as an Anthropic post — the quantum post on Nov 19 is Google's Quantum AI blog. (checked https://www.anthropic.com/research and https://www.anthropic.com/science, 2026-11-20)
- No Warp release could be confirmed for the window: `https://www.warp.dev/api/changelog` and `https://www.warp.dev/changelog.json` both return HTTP 404, and the Warp GitHub releases feed was last updated 2026-08-17T19:16:17Z. (checked 2026-11-20)
- No new `antigravity` npm package: `https://registry.npmjs.org/@google/antigravity` returns 404; the `antigravity` npm package is an unrelated placeholder (latest 0.0.0). Antigravity ships via its own changelog only. (checked 2026-11-20)
- No in-window OpenAI blog posts besides "How OpenAI's Performance Factory keeps ChatGPT fast" (08:00 GMT). The four OpenAI posts dated "Thu, 19 Nov 2026 00:00:00 GMT" ("Deploying Daybreak Red", "See PR scans in action", "Explore the Codex Security Plugin", "Get started with Daybreak Blue") carry 00:00 GMT timestamps, i.e. just **before** the 01:28Z window start, and are treated as prior-window context. (checked https://openai.com/news/rss.xml, 2026-11-20)

## Access gaps
- GitHub REST API (api.github.com) returned `API rate limit exceeded for 2.245.178.96.` for every request during this run; release data was therefore taken from `releases.atom` feeds and npm registry timestamps instead.
- Anthropic `status.anthropic.com` incident history was read from the locally cached `inc.json` artifact (downloaded earlier in the window); the live endpoint was not re-fetched in this run.
- Warp release feed is not machine-readable (404 on both JSON endpoints); Warp activity could not be verified for this window.
- GitHub blog changelog posts were read via the RSS feed (`https://github.blog/changelog/feed/`); individual post bodies were not fetched, so only titles and timestamps are asserted.
- Google blog posts were verified by title, timestamp, link and RSS description only; full article bodies were not fetched.

## Novelty vs baseline
Superseded baseline versions (newer than the 2026-11-16/19 baseline list):
- Claude Code 2.1.327 → **2.1.329** (npm 2026-11-19T18:40:25Z; GitHub v2.1.329 2026-11-19T22:14:41Z). `stable` dist-tag still 2.1.311. claude-agent-sdk 0.3.327 → **0.3.329**. Claude Code Action → **v1.0.284**.
- OpenAI Codex 0.170.0 / 0.171.0-alpha.13 → **0.171.0 stable** (GH 2026-11-20T00:47:14Z, npm 00:51:29Z), plus **0.172.0-alpha.2** and **0.171.0-alpha.13.1** prereleases and **0.173.0-alpha.1** at 2026-11-20T01:44:36Z. npm `latest` 0.170.0 → 0.171.0. @openai/codex-sdk `latest` 0.170.0 → 0.171.0.
- Gemini CLI 0.69.0 → **0.70.0 stable** (GH 2026-11-19T21:08:05Z, npm 21:13:43Z), **0.71.0-preview.0** (npm 20:54:57Z), **0.71.0-nightly.20261120.gd4cb1713f** (npm 2026-11-20T01:18:23Z). Baseline preview 0.70.0-preview.0 superseded.
- Copilot CLI 1.0.114 → **1.0.115-0 / 1.0.115-1 prereleases** (stable `latest` still 1.0.114).
- Crush v0.101.0 → **v0.102.0** (npm 2026-11-19T17:31:58Z) plus a nightly build at 2026-11-20T00:45:48Z.
- Kilo Code v7.8.30 → **v7.8.31 (rc)**; JetBrains v7.2.1-rc.8 → **v7.2.1-rc.9**; v2 dev channel 0.0.0-v2-194 → **0.0.0-v2-226**. npm `latest` still 7.8.27.
- Amp 0.0.1795046458-g1dcfdb → **0.0.1795132865-g864b56** (npm 2026-11-20T00:31:25Z), six builds inside the window.
- pydantic-ai v2.70.0 → **v2.71.0** (PyPI 2026-11-19T02:45:42Z).
- OpenAI Node SDK → **7.62.0** (7.61.0 also published in-window).
- Google Antigravity CLI v1.5.11 → **v1.5.12**; Antigravity IDE v2.7.0 → **v2.8.0**; Antigravity Eclipse (prior v1.1.0) → **v1.2.0** — all dated November 19, 2026.
- Anthropic IPO: baseline covered the Nov-18 pricing announcement; **new in-window** are the 424B4 final prospectus, the FWP pricing term sheet with the full underwriting syndicate, the $26.0B / 313,253,007-share concurrent private placement detail (Google ~$10.0B and NVIDIA ~$10.0B each), the EFFECT notice, two S-8s and eight Form 3s.
- Not superseded (still at baseline): opencode v2.3.2, goose v1.60.0 (newest stable v1.60.1 is pre-window), OpenHands v1.42.0, Zed v1.29.2, Cursor, Qwen Code, Cline, Warp, Continue, Aider.

## Status
Complete — all findings written incrementally to this file; primary-source verification done via npm registry API, GitHub release atom feeds, PyPI JSON API, company RSS/blog indexes, SEC EDGAR submissions and status APIs.

# Findings — Releases & Announcements — 2026-11-01

**Coverage window (Part B):** 2026-10-31T01:28Z → 2026-11-01T01:28Z (UTC).
**Prior report (salvaged, window 2026-10-30T01:28Z → 2026-10-31T01:28Z):** `findings_agentic-cli-tools_releases_2026-10-31.md`.
**Method:** GitHub Releases REST API (partially rate-limited mid-run: `API rate limit exceeded for 89.12.245.185`, and earlier `2.245.128.14`), GitHub `releases.atom` feeds for moving tags, npm registry `time` fields, and direct `curl` of vendor changelogs/blogs. GitHub `published_at` and npm publish time are reported separately.

---

## Recovered 2026-10-31 Context

*Digest of the salvaged Oct 30→31 report; every concrete fact preserved, no new claims added. Source file: `findings_agentic-cli-tools_releases_2026-10-31.md`.*

- **OpenCode v2.2.3** ("Use Claude Code in OpenCode", faster long sessions in Desktop) — GitHub `2026-10-30T09:55:45Z` (Atom `updated` `2026-10-30T14:48:05Z`), npm `@opencode/cli` 2.2.3 `2026-10-30T09:53:57Z`. Claude Agent selectable in `/connect` after `claude auth login` (#58782); streaming/long-conversation rendering perf (#60489, #60521, #60513, #60481); desktop side-panel tabs, "Session not found" toasts, **Open file** over HTTP (#60430, #60436, #60459, #60462). **Breaking:** TUI plugins require **OpenTUI 0.8** (`@opencode/plugin` needs `@opentui/core`/`@opentui/solid` ≥ 0.8.0; custom `RenderContext` must implement `clock` and `onAnimationTick`, #60385); managed policy `integration.use` = integrations only, new `mcp.use` and `skill.use`. https://github.com/anomalyco/opencode/releases/tag/v2.2.3
- **OpenCode v2.2.4** — GitHub `2026-10-30T16:59:08Z`, npm `2026-10-30T16:53:18Z`. Persistent Desktop terminals owned by the session, survive server restarts with scrollback (#60346); `"experimental": { "artifacts": true }` publishes HTML/static artifacts via built-in local provider or plugin storage (#60351); guided Claude Agent setup in the provider picker (#60603); `⌘⌥.` / `Ctrl+Alt+.` picks the base branch when creating a worktree (#60579); artifact tools `artifact_create`/`artifact_read`/`artifact_update`/`artifact_delete` (#60351); opt-in `experimental.schedules` under `opencode serve` with multi-process coordination (#60478); OpenCode Go limits raised for DeepSeek V4.1 Flash (#60625). https://github.com/anomalyco/opencode/releases/tag/v2.2.4
- **OpenCode v2.2.5** — GitHub `2026-10-30T23:17:23Z`, npm `2026-10-30T23:14:07Z`. `⌘⌥O`/`Ctrl+Alt+O` choose worktree, `⌘⌥B`/`Ctrl+Alt+B` base branch, `⌘⇧X`/`Ctrl+Shift+X` shell mode (#60713); hold `⌘`/`Ctrl` on the checkmark to send a quoted comment (#60640); `"compaction": { "buffer": "20%" }` percentage compaction buffer (#60647); `read` miss names nearest existing folder (#60688); `edit` shows closest lines when `oldString` is absent (#60689); a tool named `bash` runs as `shell` (#60687); MCP stdio messages > 10 MiB no longer disconnect the server (#60694). https://github.com/anomalyco/opencode/releases/tag/v2.2.5
- **Claude Code v2.1.316** — npm `2026-10-31T00:42:05.743Z`, GitHub `2026-10-31T01:01:35Z`; dist-tags `latest`=`next`=2.1.316, `stable`=2.1.309. Added `CLAUDE_CODE_DISABLE_ULTRATHINK`, `CLAUDE_CODE_SUBAGENT_EFFORT`, `CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP`; pooled group budgets (`pooled_budget`) and `managed.policy_mode: layered` on the Claude apps gateway; `guardrail.input_tagging` for Bedrock upstreams. Deprecated: Opus 4.8 fast mode (removed Nov 30, 2026, no fallback, migrate to Opus 5.5). Many fixes (shell commands left running on exit, bash aliases/functions garbled, `SHELLOPTS` scripts stopping after first command, PowerShell hooks and exit code 2, compressed-response hangs, Vertex/Bedrock model fallback, gateway model allow/deny lists, `claude auth login` under managed settings, `--restricted` file uploads, invisible characters needing a second Enter, sub-agent model inheritance, `autoMode.allow` without `"$defaults"`, cloud sessions not marked failed without a safety verdict, `claude -p` not reporting stop reason, `CLAUDE_CODE_AUTO_MODE_SERVER=1` in host apps, plugin MCP `headersHelper` corruption, SDK `register_repo_root`, Artifact tool `?` for `self` rules, `/model` warning, Grep/Glob Windows timeout, `/diff` on large repos). Changed: Team/Enterprise server-managed settings apply without approval prompt. VSCode: gateway sign-in, `ultrathink` = `xhigh` effort, Effort slider for `[1m]` models. Desktop/cloud: MCP form cards, "Catching up…" line, Enterprise self-managed cloud network secrets, Changes-pane badge, Files-pane `../..` path fix. Claude Tag (Slack): canvas edit/append fix, untagged replies, "How Claude participates" switch. https://github.com/anthropics/claude-code/releases/tag/v2.1.316 — **Claude Code 2.1.315** was npm-only at `2026-10-30T21:05:24.080Z`, no GitHub release and no changelog section.
- **Codex CLI rust-v0.167.0-alpha.1** — GitHub `2026-10-30T21:47:25Z`; body is only "Release 0.167.0-alpha.1". npm `@openai/codex` had no 0.167.x; `latest` 0.166.0, `alpha` 0.166.0-alpha.6. https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.1
- **Antigravity CLI 1.4.11** — `2026-10-30T05:55:46Z`: billing model choice after Google Cloud sign-in; `terminationBehavior: "terminate"` for `PreInvocation` hooks plus `errorMessage.userMessage`; `finished_reason` (`print_timeout`/`interrupted`/`error`) in `--output-format json`/`stream-json`; `/plugin` Discover tab shelf UX; `agy plugin import claude` reads Claude Code's installed-plugin list. https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.11
- **Antigravity CLI 1.4.12** — `2026-10-30T21:56:07Z`: `"optional": true` for plugin API-key providers in `auth.json`; Markdown tables in long streaming replies keep final column widths in scrollback. https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.12
- **Qwen Code cua-driver-rs v0.27.0** — `2026-10-30T06:32:30Z`: prebuilt CUA driver binaries (macOS codesigned/notarized universal + `QwenCuaDriver.app`; Linux unsigned glibc 2.31 floor; Windows unsigned UIAccess worker, signing required); publishes `@qwen-code/cua-sdk`, browser SDK, `@qwen-code/node-repl-mcp`; env flags `CUA_DRIVER_RS_COORDINATE_SPACE=1`, `CUA_DRIVER_RS_COORDINATE_SCALE=1000`, `MCP_MODEL_PAYLOAD_FILTER=1`; PR #14944 machine-readable `gh` reads. https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs%20v0.27.0
- **Factory Droid CLI 1.1.0 / Desktop 1.1.0** — npm `@factory/cli` 1.1.0 `2026-10-30T23:47:30.214Z` (prev 1.0.0 `2026-10-29T22:15:19.193Z`); changelog headed "CLI v1.1.0 · Desktop v1.1.0 (October 30, 2026)". New: starter ideas without GitHub; public organization audit API; `doctor` lists every Droid install with version; Linux/ChromeOS continue-in-browser; session file-drop animation. Improvements: Slack reply names only when asked. Fixes: member email wrapping, Markdown checklist inline flow, failed payment keeps billing details. https://docs.factory.com/changelog/release-notes.md
- **Crush nightly** `2026-10-31T00:42:39Z` — body contains only artifact-verification instructions (checksums.txt, checksums.txt.sigstore.json, sigstore/cosign) — no feature notes. Crush v0.99.0 ("Catwalk v3, hooks!") was covered in the prior report (GitHub `2026-10-29T16:25:08Z`; npm `@charmland/crush` `2026-10-29T16:33:07.603Z`; Atom `updated` `2026-10-30T10:00:05Z` = release record edited during that window).
- **Cline desktop-nightly-20261030214224** — `2026-10-30T21:21:13Z`, body: "Render UX verification reports with existing Desktop artifact access".
- **Zed nightly / collab-staging** — `nightly: search: Fix project search focus/action context (#50882)` `2026-10-30T12:27:35Z` (closes #45114); `collab-staging` `2026-10-30T15:09:02Z` ("gpui_linux: Replace kde-blur protocol with ext-background-effect prot…").
- **Hermes Agent v0.22.5+canary.20261030T064851Z** — `2026-10-30T06:48:52Z`, body only "Hermes Agent canary 20261030T064851Z".
- **Gemini CLI v0.67.0-nightly.20261031.g6814e00d6** — GitHub `2026-10-31T01:19:32Z`, npm `@google/gemini-cli` `2026-10-31T01:23:06.869Z` (`nightly`, `staging-tmp`); `latest` 0.66.0, `preview` 0.67.0-preview.0. PRs: honor `.git/info/exclude` and `core.excludesFile` (#30034); flush pending SSE buffer at EOF in `CodeAssistServer` (#30050); Windows libuv zero-device stat in `readSecureFileBuffer` (#30044); serialize concurrent extension installs with per-extension lock (#29036).
- **Amp** — nine rolling npm builds in-window; `latest` 0.0.1793404845-g2958dd at `2026-10-31T00:22:52.611Z`; no changelog attached to any build. Podcast "Culture Stops Slop" / *Raising an Agent* Season 2 Episode 7, `pubDate` Fri, 30 Oct 2026 14:34:00 GMT (the ampcode.com/news index renders it as "Season 2 Episode 6 / Oct 30, 2026" — index lags by one episode).
- **Announcements (prior window):** Microsoft Security Research — "Inside a malicious Claude Code-branded extension and its persistent SSH backdoor" (Oct 30) — malicious Cursor-marketplace package, not published to Microsoft VS Marketplace or npm `@anthropic-ai/claude-code`; reverse SSH forwarding (T1572), embedded SSH key + persistence; https://www.microsoft.com/en-us/security/blog/2026/10/30/inside-malicious-claude-code-branded-cursor-extension-persistent-ssh-backdoor/. Anthropic's denial of a compromise (reported Oct 30, The Register / Wired / BleepingComputer / Sophos / HN). Factory acquires Typedef (Oct 30). OpenAI posts Oct 30 09:00Z and 09:30Z.
- **Prior-window "verified quiet" (still the latest pre-window baseline):** Copilot CLI 1.0.105 (`2026-10-28T00:44:43Z`); Kilo Code v7.8.25; goose artifacts `2026-10-27T17:47:18Z`; Roo Code v3.54.0; Aider v0.86.3.dev; vscode-copilot-chat v0.43.2026040705; Cursor changelog newest Oct 20; Devin changelog newest Oct 26; Warp blog newest Oct 29; Anthropic news newest Oct 28; Qwen Code v0.26.4 + nightly `20261029.70be140e14`.

---

## Part B — In-window releases (2026-10-31T01:28Z → 2026-11-01T01:28Z)

### GitHub Copilot CLI v1.0.106-1 — patch release, 14 fixes (2026-10-31T20:24:04Z GitHub / 2026-10-31T20:24:19Z npm)
- GitHub release published `2026-10-31T20:24:04Z`; npm `@github/copilot` `1.0.106-1` published `2026-10-31T20:24:19.322Z`. Dist-tags after publish: `latest` = **1.0.105** (unchanged), `prerelease` = **1.0.106-1**, `unstable` = `1.0.103-unstable.r41214319014.g4f70995`.
- **Fixed** (verbatim from the release body):
  - `apply_patch` keeps the line ending of every line it does not change in a file that mixes LF and CRLF endings, instead of rewriting the whole file to the ending of its first few lines.
  - `COPILOT_PROVIDER_GHES_HOST` now accepts the instance's browser address such as `https://ghes.example.com/` instead of failing with a malformed `https://https//...` URL; a value that is not a host name fails with an error explaining the expected format.
  - Text pasted over several lines after `/clear`, `/new`, `/ask`, `/delegate` or `/diagnose` keeps its line breaks and indentation instead of reaching the model as one line.
  - A `copilot -p` run stopped by Ctrl+C or a signal now finishes writing the session's shutdown record (usage and code-change totals) before it exits.
  - A `session.resume` request whose params are not a JSON object now fails with an error instead of crashing the `copilot --server` process.
  - `web_fetch` now decodes pages in the character encoding they declare (Content-Type charset or a meta tag), so ISO-8859-1, windows-1252 and other non-UTF-8 pages no longer reach the model with accented characters replaced.
  - Session picker closes immediately after a `/resume` switch commits.
  - Clipboard copy on WSL fixed by running `clip.exe` with compatible `cmd.exe` arguments.
  - Generated images now save correctly on filesystems without hard-link support.
  - Returns the original refusal when an organization disables a Claude fallback model.
  - Blocked MCP server warnings now include the specific registry failure reason.
  - Rewind keeps turns where agents edit files above the capture size limit.
  - Reopening a recently closed local session no longer stalls for up to 30 seconds.
  - Sources a tool returns for citations are kept with the tool result, so Claude can still cite them after a session is resumed.
- https://github.com/github/copilot-cli/releases/tag/v1.0.106-1
- Related npm-only artifacts in-window (no GitHub release object): `@github/copilot` **1.0.106-0** published `2026-10-31T03:20:51.299Z` (release-by-tag returned `{"message":"Not Found", …, "status":"404"}` — no changelog obtainable), and **1.0.103-unstable.r41214319014.g4f70995** published `2026-10-31T18:13:44.448Z`. https://registry.npmjs.org/@github/copilot

### Gemini CLI v0.67.0-nightly.20261101.g6814e00d6 — nightly, changelog link only (2026-11-01T01:14:56Z GitHub / 2026-11-01T01:17:34Z npm)
- GitHub release published `2026-11-01T01:14:56Z`; npm `@google/gemini-cli` `0.67.0-nightly.20261101.g6814e00d6` published `2026-11-01T01:17:34.651Z` (registry `modified` `2026-11-01T01:17:34.799Z`). This is the last in-window artifact before the window closed at `01:28Z`.
- Release body contains **only** a "Full Changelog" compare link — no PR list, no feature notes: `https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261031.g6814e00d6...v0.67.0-nightly.20261101.g6814e00d6`. The compare page and the REST compare endpoint returned no commits/PR list for this pair, so the nightly's actual changes could not be resolved.
- Nightly only; `latest` remains 0.66.0 and `preview` remains 0.67.0-preview.0 (unchanged in-window).
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261101.g6814e00d6

### Crush nightly — rolling build, verification instructions only (2026-11-01T00:41:46Z)
- GitHub release `nightly` updated/published `2026-11-01T00:41:46Z`. Body is again only the artifact-verification block (checksums.txt, checksums.txt.sigstore.json, sigstore/cosign) — **no feature or change notes**, so nothing about this nightly's contents can be derived from the release.
- npm `@charmland/crush` had **no** new version in-window; `latest` remains 0.99.0.
- https://github.com/charmbracelet/crush/releases/tag/nightly

### Zed nightly / collab-staging — remote project picker scrollbar (2026-10-31T04:59:47Z)
- Atom feed entry for both moving tags at `2026-10-31T04:59:47Z`: `nightly: recent_projects: Show remote picker scrollbar (#63909)` and `collab-staging: recent_projects: Show remote picker scrollbar (#63909)`.
- The GitHub releases-by-tag endpoint returns no JSON for these moving tags, so `2026-10-31T04:59:47Z` is the Atom `<updated>` value (last edit), not a separately verifiable publish time. No stable Zed release in-window; newest stable remains `v1.27.0-pre` (Atom `2026-10-28T15:18:12Z`).
- https://github.com/zed-industries/zed/releases/tag/nightly

### Hermes Agent v0.22.5+canary.20261031T064409Z — canary build (2026-10-31T06:44:10Z)
- GitHub release `v0.22.5+canary.20261031T064409Z` at `2026-10-31T06:44:10Z`. Body is a single line: "Hermes Agent canary 20261031T064409Z" — no changelog. Follows the daily canary cadence (20261029T064840Z, 20261030T064851Z, 20261031T064409Z).
- https://github.com/NousResearch/hermes-agent/releases

### Amp (Sourcegraph) — eight rolling npm builds, no changelog (2026-10-31T04:25:47Z → 2026-11-01T00:22:40Z)
- npm `@sourcegraph/amp` published **eight** builds inside the window: `0.0.1793419243-g67cb09` (04:25:47.855Z), `0.0.1793433646-gfaad62` (08:22:50.276Z), `0.0.1793448038-gf582b4` (12:22:20.812Z), `0.0.1793450357-gd44904` (13:01:32.447Z), `0.0.1793462430-g2650be` (16:23:12.807Z), `0.0.1793469715-g7510af` (18:22:30.920Z), `0.0.1793476832-ga2d2ae` (20:29:40.202Z), `0.0.1793491262-ga7b498` (2026-11-01T00:22:40.870Z). `latest` = **0.0.1793491262-ga7b498**. No changelog is attached to any build, consistent with prior reports.
- https://registry.npmjs.org/@sourcegraph/amp

### OpenCode — 20 continuous `0.0.0-dev-*` npm builds, no stable release (2026-10-31T01:51:07Z → 2026-11-01T00:05:53Z)
- npm `@opencode/cli` published dev builds `0.0.0-dev-414` (`2026-10-31T01:51:07.178Z`) through `0.0.0-dev-461` (`2026-11-01T00:05:53.738Z`), 20 in total. `latest` remains **2.2.5** (published `2026-10-30T23:17:23Z`, pre-window — covered in the prior report). No new stable GitHub release in-window.
- https://registry.npmjs.org/@opencode/cli

### New entrant — Roder (`@roderai/roder` v0.4.6), native coding agent CLI / open-source coding harness (2026-10-31T06:34:53Z)
- npm `@roderai/roder` **0.4.6** published `2026-10-31T06:34:53.190Z`, `latest` = 0.4.6. Description on npm: "Roder native coding agent CLI". Repository: `git+https://github.com/RoderAI/roder.git` (npm package directory `crates/roder-cli/npm`). The GitHub repo title: "Roder is an open source coding harness, use it in your AI lab to RL your models, use it in your CLI, build around it." Repo created `2026-06-13T22:01:44.000Z`, so this is a young project whose first in-window npm drop lands in this window — no prior mention found in `cumulative_findings.md` (grep for "roder" returned 0 hits).
- https://registry.npmjs.org/@roderai/roder

### Other new npm packages in the agentic-CLI space (published in-window; no release notes)
- `@oh-my-pi/pi-coding-agent` **18.14.2** — `2026-10-31T18:02:37.306Z`; `pi-agent-zh` **18.14.2** — `2026-10-31T20:58:37.213Z`; `@code-yeongyu/senpi` **2026.10.31-2** — `2026-10-31T19:18:29.805Z`; `@bastani/atomic` **0.9.57** — `2026-10-31T16:47:15.237Z`; `@f5-sales-demo/xcsh` **23.10.7** — `2026-10-31T07:27:58.092Z`; `@roderai/roder` **0.4.6** — `2026-10-31T06:34:53.190Z`. All carry the identical upstream description "Coding agent CLI with read, bash, edit, write tools and session management", i.e. forks/mirrors of the pi-mono line rather than independently announced products; no changelogs are published on npm.
- New GitHub repos in-window matching "coding agent CLI" (GitHub repository search, `created:>2026-10-25`): `Currentliunderpass/forge-agent` (created `2026-10-31T15:12:56.000Z`, 23★ — "Open-source, local-first AI coding agent. Build, share, and install skills."), `Sheernox/cedr` (2026-10-29, 62★), `27medkamal/tmux-agent-wizard` (2026-10-28), `opentandem/opentandem` (2026-10-27 — mobile remote control for AI coding agents), `Ryheff24/agentlog` (2026-10-27), `amithgc/quarters` (2026-10-28), `calesthio/OpenFusion` (2026-10-29), `jdx/jouet` (2026-10-30), `agentmash-dev/agentmash-cli` (2026-10-29), `FAHTHIZ/oasis` (2026-10-27), `abranchesia/doneguard` (2026-10-30). All are small (4–62★) community projects; only `forge-agent` was created inside this window.
- https://registry.npmjs.org/-/v1/search?text=coding%20agent%20cli&sort=date

---

## Announcements

- **No new vendor blog/changelog post was verifiable inside the window.** Every official surface checked still had a pre-window newest entry: OpenAI news RSS newest `Fri, 30 Oct 2026 09:30:00 GMT` ("Making it easier for websites to express AI training preferences"); Anthropic `news` newest `publishedOn` = **2026-10-28** ("AI for Science expands to foundations and research institutions") — note the news index header renders a "Latest news · November 1, 2026" caption, but the featured item under it is "Introducing Claude Opus 5.5" (`publishedOn` 2026-09-22), so this is a page-date label, not a new post; Cursor `cursor.com/changelog` newest `2026-10-20`; Devin `devin.ai/changelog` newest `October 28, 2026`; Warp `warp.dev/blog` newest `Oct 29, 2026`; Sourcegraph blog newest `/blog/20261021`; Factory `/news` newest surfaced `October 8, 2026` (Typedef acquisition, Oct 30, already in the prior report); `zed.dev/blog.rss` newest `Wed, 16 Sep 2026` ("Replace PRs with Delta – Now in Public Beta"); `blog.google` developer-tools feed newest `Wed, 28 Oct 2026 17:00:00 +0000`; `github.blog/changelog` newest `Oct.29` entries (no `datetime` for Oct 30/31); Amp news index newest `Oct 30, 2026` / `October 29, 2026`.
- **GitHub Copilot CLI v1.0.106-1 is the only substantive product release in the window**; all other in-window artifacts were nightlies, canaries, rolling builds or dev builds (see above).

---

## Verified quiet (checked, no release or announcement in window)

- **Claude Code** (`anthropics/claude-code`) — Atom newest `v2.1.316` `2026-10-31T01:01:35Z` (pre-window); npm newest `2.1.316` `2026-10-31T00:42:05.743Z`, `modified` `2026-10-31T01:03:05.647Z`; dist-tags `latest`/`next` 2.1.316, `stable` 2.1.309 — no new version in-window.
- **OpenAI Codex CLI** (`openai/codex`) — Atom newest `rust-v0.167.0-alpha.1` `2026-10-30T21:47:25Z` (pre-window); npm `@openai/codex` has no version newer than the `0.165.0-alpha.*`/`0.166.0-*` line, `latest` 0.166.0, `alpha` 0.166.0-alpha.6, registry `modified` `2026-10-29T20:15:16Z`.
- **OpenCode** — no stable release in-window (2.2.5 is pre-window).
- **Antigravity CLI** (`google-antigravity/antigravity-cli`) — Atom newest `1.4.12` `2026-10-30T21:56:07Z` (pre-window).
- **Factory Droid CLI** (`factory-ai/factory`, `@factory/cli`) — no npm version in-window; `latest` 1.1.0; changelog `docs.factory.com/changelog/release-notes.md` newest heading "CLI v1.1.0 · Desktop v1.1.0 (October 30, 2026)".
- **Amp / Sourcegraph** — no GitHub release in-window; only the rolling npm builds listed above.
- **Cline** — Atom newest `desktop-nightly-20261030214224` `2026-10-30T21:21:13Z` (pre-window); `v4.1.26` `2026-10-26T09:06:51Z`.
- **Kilo Code** — Atom newest `v7.8.25` `2026-10-28T20:51:19Z`.
- **block/goose** — Atom feed returned no entries in-window (repo id `846698999`; GitHub API rate-limited on re-check). Last known pre-window artifacts `2026-10-27T17:47:18Z` from the prior report.
- **Qwen Code** — Atom newest `cua-driver-rs v0.27.0` `2026-10-30T06:32:30Z` and `Release v0.26.4` `2026-10-29T16:02:46Z` (both pre-window).
- **Roo Code** — newest `Release v3.54.0` `2026-05-15T17:52:24Z`.
- **Aider** — newest `v0.86.3.dev` `2026-02-12T00:42:25Z`.
- **Cursor / Cursor CLI, Devin / Devin CLI, Warp, Zed blog, Anthropic news, OpenAI news, Google developer blog, GitHub changelog, Factory news, Sourcegraph blog** — see "Announcements" above for the verified newest entries.

---

## Notes / limitations

- GitHub REST API was rate-limited mid-run (`API rate limit exceeded for 89.12.245.185`; earlier `2.245.128.14`), so most release data was taken from `https://github.com/<owner>/<repo>/releases.atom`. Atom `<updated>` is the release's **last edit** time, not necessarily its publish time — flagged inline for the moving tags (Zed `nightly`/`collab-staging`, Crush `nightly`, Hermes canary).
- The GitHub **releases search** endpoint returned `Not Found` for every query attempted (both `published:` range and keyword forms), and `search/repositories` worked but is limited to 10 requests/min; the "new entrant" section therefore relies on npm's date-sorted search plus GitHub repository creation dates rather than on release-index search.
- `@github/copilot` **1.0.106-0** (`2026-10-31T03:20:51.299Z`) has no GitHub release object — release-by-tag returned `{"message":"Not Found","documentation_url":"https://docs.github.com/rest/releases/releases#get-a-release-by-tag-name","status":"404"}` — and no `CHANGELOG.md` exists in the repo (`docs/changelog.md`, `CHANGELOG.md`, `docs/release-notes.md`, `RELEASES.md` all 404 on `raw.githubusercontent.com`), so its contents are unknown.
- Gemini CLI nightly `v0.67.0-nightly.20261101.g6814e00d6` has **no** PR-level changelog: the release body is only the compare link, and both the REST compare endpoint (returned `status: None`, `ahead_by: None`, 0 commits) and the HTML compare page yielded no PR list for that tag pair.
- `openai.com/index/*` pages return HTTP 403 to curl; OpenAI publication times came from `https://openai.com/news/rss.xml`. `factory.ai/rss.xml`/`rss/news.xml`/`feed.xml` are unusable; Factory's changelog is `docs.factory.com/changelog/release-notes.md`. `devin.ai/changelog` and `ampcode.com/news` require redirect-following (`-L`). `zed.dev/blog.rss` is the working Zed feed (`zed.dev/blog/rss.xml` returns HTML). `sourcegraph.com/blog/rss.xml` 301-redirects to the HTML blog.
- The npm "coding agent CLI" date-sorted search surfaces many fork/mirror packages sharing one upstream description; only `@roderai/roder` had a distinct repository and description, and it is treated above as the only new entrant of note.
- Timestamps were re-checked against the npm registry and Atom feeds immediately before writing; GitHub and npm publication times differ by seconds-to-minutes in several cases and both are given.

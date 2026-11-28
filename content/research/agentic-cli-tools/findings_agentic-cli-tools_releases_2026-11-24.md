# DIAC Findings - agentic-cli-tools - Task 1 (Releases) - 2026-11-24

## Window
2026-11-23T01:28:00Z -> 2026-11-24T01:28:00Z

## Findings

### Claude Code (@anthropic-ai/claude-code) 2.1.331
- **Claude Code 2.1.331** - the release channel RESUMED after ~3 days of silence. npm publish 2026-11-23T18:36:26Z; GitHub release published 2026-11-23T21:34:41Z. `latest`=2.1.331, `next`=2.1.331, `stable`=2.1.325. Latest leads `stable` by 6 patch versions (2.1.325 dated 2026-11-13T20:07:25Z).
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.331
  Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
- **Claude Code 2.1.331 feature highlights (from CHANGELOG)** - Added Code Mode support in terminal sessions on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and Claude Platform on AWS; added `oidc.groups_jsonpath` to the Claude apps gateway (subset of JSONPath, RFC 9535); added an API connectivity section to `claude doctor`; added `CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION`; added `CLAUDE_GATEWAY_IDP_CONNECT_BY_HOSTNAME=1`; added `gen_ai.usage.*`, `gen_ai.response.model`, `gen_ai.operation.name` to `claude_code.llm_request` trace spans; added `optionalDependencies` to plugin manifests. Notable fixes: MCP tool calls hanging up to 30 minutes on malformed local/WebSocket replies; code-mode requests firing about every second while a script ran; cloud/remote turns failing or timing out when a reply went silent (now retries once); Stop/SubagentStop hooks missing the last reply in Claude Desktop.
  Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
- **Claude Code release cadence (npm `time` map, verified)** - 2.1.321 (2026-11-09), 2.1.322 (11-10), 2.1.323 (11-12), 2.1.324 (11-13), 2.1.325 (11-13), 2.1.326 (11-16), 2.1.327 (11-17), 2.1.328 (11-18), 2.1.329 (11-19), 2.1.330 (11-20), 2.1.331 (11-23). Roughly one release every 1-2 days; the 11-20 -> 11-23 gap is the longest gap observed in that range.
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
- **Anthropic "Claude Ship" launch** - [REPORTED] Heavy in-window press coverage of an Anthropic launch named "Claude Ship" that lets agents review, fix and approve pull requests under team-set rules. Reuters (2026-11-23T20:05:43Z), TechCrunch (22:05:50Z), ZDNET (20:00:02Z), Digital Trends (20:51:12Z), Unite.AI (21:25:02Z), TradingView (20:19:48Z), TestingCatalog (23:29:45Z) and others. NOTE: I could NOT confirm this on Anthropic's own news index - https://www.anthropic.com/news (fetched, HTTP 200) shows no "Claude Ship" entry in its article titles, and https://www.anthropic.com/news/claude-ship returns HTTP 404. Treat as press-reported only.
  Source: https://news.google.com/rss/search?q=Claude+Code&hl=en-US&gl=US&ceid=US:en
  Source: https://www.anthropic.com/news
- **Claude Code GitHub Action v1.0.287 / v1.0.288 / v1.0.289** - three releases in window (2026-11-23T21:37:51Z / 23:05:51Z / 23:54:14Z). v1.0.287: stop the session and revoke the app token when a run is cancelled (#2112). v1.0.288: BREAKING - skip pull requests from forks by default (#2114). v1.0.289: log text as plain text, post buffered comments in the run step (#2122).
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.288
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.289

### Codex (@openai/codex)
- **Codex 0.172.0 (stable)** - GitHub release `rust-v0.172.0` published 2026-11-24T00:03:55Z; npm publish 2026-11-24T00:09:39Z (platform variants through 2026-11-24T00:18:05Z). `latest` dist-tag moved 0.171.0 -> 0.172.0. Highlights: follow thread links from search results/transcripts to open saved conversations and nested agents in the terminal (#62332); `Tab` completes arguments for supported slash commands (#62343); `Shift+Up`/`Shift+Down` jump between task groups in the agent command center (#62200); optional stdio MCP servers with cached tool lists start on first tool call by default (#62366); per-tool approval reviewer for connected app tools in `config.toml` (#62360); app-server clients can select Amazon Bedrock Runtime at setup/sign-in (#62222). Fixes: `codex exec resume` restores saved sandbox permissions, cwd and workspace roots (#62194); remote sessions preserve workspace paths across differing OSes (#62375-62377); provider errors surfaced immediately with the spend limit identified (#62329/#62356); interrupting a parent turn preserves queued child-agent replies (#62348); `PageUp`/`PageDown` for tall answer choices (#62209); cloud replies arriving after history load update in place (#62403). Docs: bundled `openai-docs` skill now covers migration to GPT-6.2 Astra and Sol (#62447). Chore: Code Mode moved to gRPC for all host connections, `code_mode_host_grpc` deprecated (#62476).
  Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0
  Source: https://registry.npmjs.org/@openai%2fcodex
- **Codex 0.172.0-alpha.2.1 (prerelease)** - GitHub release published 2026-11-23T18:02:51Z; npm publish 2026-11-23T18:11:16Z (platform variants to 18:17:48Z). Release body contains no notes beyond "Release 0.172.0-alpha.2.1".
  Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2.1
- **Codex 0.171.0-alpha.13.2 (prerelease)** - GitHub release published 2026-11-23T19:38:30Z; npm publish 2026-11-23T19:49:05Z (platform variants to 19:54:07Z). Second alpha line running in parallel with 0.172.0-alpha.2.1. Release body contains no notes beyond "Release 0.171.0-alpha.13.2".
  Source: https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.2
- **Codex dist-tags (current)** - `latest`=0.172.0, `alpha`=0.173.0-alpha.4 (unchanged, 2026-11-21), plus ~130 legacy `release-<ver>-alpha.<n>.<n>.1-alpha[-platform]` tags. The `alpha` dist-tag did NOT advance in window even though two newer alpha lines published.
  Source: https://registry.npmjs.org/@openai%2fcodex

### Gemini CLI (@google/gemini-cli)
- **Gemini CLI 0.71.0 (stable)** - GitHub release published 2026-11-24T01:16:44Z; npm publish 2026-11-24T01:21:20Z. `latest` and `staging-tmp` both = 0.71.0. Changelog entries: async PowerShell parsing to prevent UI spinner freeze (#30334); development worker pushed to a private artifact registry (#30319).
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0
  Source: https://registry.npmjs.org/@google%2fgemini-cli
- **Gemini CLI 0.71.0-nightly.20261124.gaafdfdfb5** - GitHub release published 2026-11-24T01:13:47Z; npm publish 2026-11-24T01:19:27Z. Commit hash CHANGED to `gaafdfdfb5` (previous nightly chain was `geecccfcd5`), so the 2026-11-23 no-op streak is broken. The nightly contains a real change: fix(a2a-server): enforce bearer token authentication and request input validation (#30420).
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261124.gaafdfdfb5
- **Gemini CLI 0.72.0-preview.0** - GitHub release published 2026-11-24T00:34:15Z; npm publish 2026-11-24T00:38:51Z. `preview` dist-tag now points here. Contents: nested .gitignore negations under `dir/**` patterns (#30370); Windows home-relative path expansion with tilde/backslash (#30376); resume most recently ACTIVE session instead of most recently started (#30389); a2a-server bearer token auth + input validation (#30420).
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0

### GitHub Copilot CLI (@github/copilot)
- **Copilot CLI 1.0.115-8 (prerelease)** - published 2026-11-23T19:10:43Z, advancing the prerelease line from 1.0.115-7 (2026-11-22T11:40:45Z). No stable release.
  Source: https://registry.npmjs.org/@github%2fcopilot
- **Copilot CLI stable channel still frozen (verified negative)** - `latest` dist-tag remains 1.0.114, published 2026-11-18T06:00:58Z. That is a ~6-day freeze on the stable channel as of the window end. Dist-tags: `latest`=1.0.114, `prerelease`=1.0.115-8, `unstable`=1.0.111-unstable.r44588354783.g40dd772.
  Source: https://registry.npmjs.org/@github%2fcopilot

### OpenCode (anomalyco/opencode; formerly sst/opencode)
- **OpenCode v2.4.0** - GitHub release published 2026-11-23T09:22:21Z (sst/opencode now redirects to anomalyco/opencode). npm `@opencode/cli` 2.4.0 published 2026-11-23T09:15:15Z. Highlights: **Built-In Desktop Browser** - import sign-ins and browsing history from Chrome/Edge/Firefox/Safari, add Chromium extensions, one persistent desktop profile, agent can read and drive the same pages (#63002, #65073); **Automations** - run a prompt, script or shell command on a timer, cron schedule, or on an MCP server event, managed via `/automation` (#65296, #65186); **Generate Videos** via `generate_video` when a connected provider has a video model (#63666, #65664); **New TUI Look** on by default with the `opencode` theme, `opencode-classic` keeps old colors (#64988); **Windows Taskbar Status** showing session progress, session counts and flashes when permission/question pending (#65317-65319). Upgrade notes: `experimental_image_generate` renamed to `generate_image` (old permission rules auto-mapped but saved "always allow" approvals are not, so it re-prompts once) (#65682); plugins written as `name@latest`, a version range, a Git branch or a Git `semver:` range are now checked on startup and every 24 hours and auto-updated, with the previous version kept running if the new one fails to load.
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.0
  Source: https://registry.npmjs.org/@opencode%2fcli
- **OpenCode v2.4.1** - GitHub release published 2026-11-23T15:57:40Z; npm `@opencode/cli` 2.4.1 published 2026-11-23T15:56:19Z. This is a hotfix follow-up to 2.4.0. Fixes: assistant messages failing to save on macOS 12 because its system SQLite lacks the JSON operator used in v2.4.0 (#65771); compaction retaining more recent history than `keep.tokens` (#65768); extra cache cost in long goal sessions after compaction (#65788); `/models` hiding models from config-only providers such as Ollama when no `/connect` login exists (#65793). Also: with `experimental.model_speeds` enabled, model service tiers are exposed as remembered speeds rather than separate model-picker entries (#65749); side-panel `/btw` tabs show an unread dot when a side question finishes behind another tab (#65821).
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.1
- **OpenCode npm channel layout (verified)** - the actively published package is `@opencode/cli` (dist-tags: `latest`=2.4.1, `beta`=0.0.0-beta-19507, `dev`=0.0.0-dev-1344, `reserved`=0.0.0-reserved). Sibling packages published in-window at 2.4.1: `@opencode/core` (2026-11-23T15:52:48Z), `@opencode/plugin` (15:45:59Z), `@opencode/schema` (15:47:06Z), `@opencode/protocol` (15:46:10Z) - all described as "OpenCode package bootstrap - not a functional release". In-window dev publishes on `@opencode/cli`: 0.0.0-dev-1336 (01:33:42Z), -1337 (04:56:01Z), -1338 (07:10:53Z), -1341 (13:18:24Z), -1343 (19:19:42Z), -1344 (2026-11-24T01:26:04Z).
  Source: https://registry.npmjs.org/@opencode%2fcli
  Source: https://registry.npmjs.org/-/v1/search?text=opencode&size=10
- **opencode-ai (legacy npm package)** - VERIFIED NEGATIVE: no publish in window. Most recent npm publish is the dev snapshot 0.0.0-dev-202611170722 (2026-11-17T07:46:23Z); `latest` dist-tag = 1.19.6 (2026-11-17T07:22:20Z). The v2.x line ships under the `@opencode/*` scope instead. Note `opencode` and `@anomalyco/opencode` both return HTTP 404 on npm.
  Source: https://registry.npmjs.org/opencode-ai
  Source: https://registry.npmjs.org/opencode
  Source: https://registry.npmjs.org/@anomalyco%2fopencode

### Amp (@sourcegraph/amp)
- **Amp: 6 dev-channel publishes in window** - rolling dev channel continued at ~4h cadence: 0.0.1795406435-gdf62b3 (2026-11-23T04:22:18Z), 0.0.1795420841-gc84765 (08:21:25Z), 0.0.1795435239-g464604 (12:25:00Z), 0.0.1795449633-g4295dd (16:36:49Z), 0.0.1795464043-gc7cddb (20:28:39Z), 0.0.1795478457-g9601b2 (2026-11-24T00:30:43Z). `latest` dist-tag = 0.0.1795478457-g9601b2; `next` = 0.0.1778732631-gc5875c-singleexe (stale). Six distinct commit hashes, so each build carried different upstream changes.
  Source: https://registry.npmjs.org/@sourcegraph%2famp

### RunPod MCP server (@runpod/mcp-server)
- **RunPod MCP server 5.0.0** - new major. GitHub release published 2026-11-23T02:48:12Z; npm publish 2026-11-23T02:51:18Z. `latest`=5.0.0. Headline: **breaking for scripts that parse list results** - every list now returns one page per call, following Google AIP-158. `list-endpoints`, `list-hub-repos`, `list-public-endpoints` and `get-capacity` return rows under `endpoints`/`repos`/`endpoints`/`gpus` instead of `items`; the last three drop `pagination.offset`; `pagination.truncated` is renamed `pagination.hasNextPage`; `list-guides` replaces `count` with `pagination.total`; the three endpoint-metrics reads now page too (100 records by default instead of 1,000). `limit` max drops from 1,000 to 100 on the 14 API-paged lists; a larger limit is cut to 100 or rejected when `MCP_SCHEMA_VALIDATION=enforce`. Cursors are opaque and bound to the call that issued them (a damaged or reused cursor is a 400 with `code: 'invalid_cursor'`). A page stops before its result passes 24,000 bytes as sent (after secret redaction).
  Source: https://github.com/runpod/runpod-mcp/releases/tag/%40runpod%2Fmcp-server%405.0.0
  Source: https://registry.npmjs.org/@runpod%2fmcp-server
- **RunPod `rate_nps_score` residual surface: NONE FOUND** - 5.0.0's release notes contain no mention of NPS or referral asks. The mechanism was removed in 4.15.0 (2026-11-22T06:17:40Z): "Remove the referral and NPS asks from the hosted server. `report_how_user_found_runpod` and `rate_nps_score` are no longer served, the `initialize` instructions no longer ask agents how their user found Runpod, and creation results carry only their own payload: no rating note, no creation count and no survey response sent to PostHog. `report_feedback`, `save_to_journal`, `ask_question` and `read_journal` are unchanged and stay voluntary." The 5.0.0 notes also do not re-introduce it. (Caveat: this is a notes-level negative; I did not grep the shipped tarball source.)
  Source: https://github.com/runpod/runpod-mcp/releases/tag/%40runpod%2Fmcp-server%404.15.0
  Source: https://github.com/runpod/runpod-mcp/releases/tag/%40runpod%2Fmcp-server%405.0.0

### Verified negatives (no in-window release)
- **Qwen Code (@qwen-code/qwen-code)** - VERIFIED NEGATIVE: no npm publish in window. `latest`=0.28.4 (2026-11-22T12:28:27Z); `nightly`=0.28.3-nightly.20261121.56ef346859 (no new nightly). GitHub: latest releases are desktop-v0.28.4 (2026-11-22T12:52:42Z) and v0.28.4 (2026-11-22T12:04:21Z) - both before the window. Desktop channel also quiet.
  Source: https://registry.npmjs.org/@qwen-code%2fqwen-code
  Source: https://github.com/QwenLM/qwen-code/releases
- **Cline (cline)** - VERIFIED NEGATIVE: no npm publish in window. `latest`=3.0.75 (2026-11-21T05:31:57Z); `nightly`=3.0.73-nightly.1792632285 (stale). GitHub: latest are v4.1.27 (2026-11-21T06:05:04Z), desktop-v0.0.50 (05:54:06Z), cli-v3.0.75 (05:30:43Z) - all before the window.
  Source: https://registry.npmjs.org/cline
  Source: https://github.com/cline/cline/releases
- **Goose (block/goose, redirects to aaif-goose/goose)** - VERIFIED NEGATIVE: no release in window. Latest is v1.60.2 (2026-11-20T06:18:55Z), preceded by v1.60.1 (2026-11-18) and v1.60.0 (2026-11-17).
  Source: https://github.com/block/goose/releases
- **Aider (Aider-AI/aider)** - VERIFIED NEGATIVE: no release in window; the newest GitHub release is v0.86.0 from 2025-08-09 (project appears dormant on GitHub releases). `aider-chat` is not on npm (HTTP 404), so npm is not a valid distribution channel for Aider.
  Source: https://github.com/Aider-AI/aider/releases
  Source: https://registry.npmjs.org/aider-chat
- **Claude Code security advisories** - no in-window advisories. Repo-scoped feed (https://api.github.com/repos/anthropics/claude-code/security-advisories) returned 30 advisories; global npm feed scoped to `affects=@anthropic-ai/claude-code` (https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code) returned 30. Newest of either: GHSA-5xjx-9qx6-jcrv (high, TOCTOU race in Edit tool allowing file writes outside the workspace), published 2026-10-26T11:43:04Z in the repo scope / 2026-11-09T22:42:03Z in the npm scope. Neither feed shows anything published inside the window.
  Source: https://api.github.com/repos/anthropics/claude-code/security-advisories
  Source: https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code
- **News sweep, in-window items** - beyond the "Claude Ship" cluster, only two items of topical interest surfaced: (1) infoq.com, "Claude Code Adds Experimental Code Mode to Orchestrate Tool Calls with JavaScript" (2026-11-23T12:20:42Z) - consistent with the Code Mode work visible in the 2.1.331 changelog; (2) Hackread, "Malicious Google Ads Target Mac Users with Fake Codex and Claude Code Downloads" (2026-11-23T18:22:57Z). Queries "Codex CLI", "agentic CLI", "desktop AI assistant" and "opencode" produced ZERO in-window items.
  Source: https://news.google.com/rss/search?q=Claude+Code&hl=en-US&gl=US&ceid=US:en
  Source: https://news.google.com/rss/search?q=Codex+CLI&hl=en-US&gl=US&ceid=US:en
  Source: https://news.google.com/rss/search?q=agentic+CLI&hl=en-US&gl=US&ceid=US:en
  Source: https://news.google.com/rss/search?q=desktop+AI+assistant&hl=en-US&gl=US&ceid=US:en
  Source: https://news.google.com/rss/search?q=opencode&hl=en-US&gl=US&ceid=US:en

## Watchlist status
- Claude Code (was 2.1.330, silent 3 days) -> **UPDATED / RESUMED**: 2.1.331 published 2026-11-23T18:36:26Z (GitHub 21:34:41Z). `stable` dist-tag moved 2.1.323 -> **2.1.325** (version dated 2026-11-13T20:07:25Z, i.e. stable re-points to a version published 10 days ago, not a fresh build). `latest`=2.1.331 leads `stable` by **6** patch versions (was 7).
- Codex (stable 0.171.0, prerelease 0.173.0-alpha.4) -> **UPDATED**: stable 0.172.0 (npm 2026-11-24T00:09:39Z); two new alpha lines (0.172.0-alpha.2.1, 0.171.0-alpha.13.2). Note the `alpha` dist-tag did NOT move off 0.173.0-alpha.4 (2026-11-21) even though newer alpha builds published.
- Copilot CLI (latest pinned 1.0.114) -> **STILL STALLED** on stable: `latest`=1.0.114 published 2026-11-18T06:00:58Z (~6 days frozen); prerelease advanced 1.0.115-7 (2026-11-22T11:40:45Z) -> 1.0.115-8 (2026-11-23T19:10:43Z).
- Gemini CLI nightly (20261122/20261123 no-op on `geecccfcd5`) -> **UPDATED**: 20261124 nightly exists on a NEW commit `gaafdfdfb5` (npm 2026-11-24T01:19:27Z, GitHub 01:13:47Z) carrying a real change (a2a-server bearer-token auth fix #30420). No-op streak broken. Also stable 0.71.0 and preview 0.72.0-preview.0 published.
- Amp (~4h dev rhythm) -> **CONFIRMED CONTINUING**: 6 in-window dev publishes, ~4h03m mean cadence, 6 distinct commit hashes.
- RunPod MCP (4.15.0 removed NPS mechanism) -> **UPDATED**: new major 5.0.0 (npm 2026-11-23T02:51:18Z), dominated by the AIP-158 pagination rewrite. No residual `rate_nps_score` surface mentioned in the 5.0.0 notes (notes-level negative only).
- Qwen Code (v0.28.4) -> **STILL STALLED**: no in-window npm publish, no new nightly, Desktop channel also quiet.
- NEW this cycle: **OpenCode v2.x is the active line** (2.4.0 + 2.4.1 in window) but ships under the `@opencode/*` npm scope, NOT the legacy `opencode-ai` package (frozen at 1.19.6 since 2026-11-17). Prior cycles watching `opencode-ai` on npm would have missed both releases.

## Access gaps
- https://registry.npmjs.org/aider-chat -> HTTP 404 (package does not exist; Aider is GitHub-release / pip only).
- https://registry.npmjs.org/opencode -> HTTP 404.
- https://registry.npmjs.org/@anomalyco/opencode -> HTTP 404 (the v2 line is published under `@opencode/cli` and siblings, not `@anomalyco/*`).
- https://api.github.com/repos/sourcegraph/amp/releases -> HTTP 404 (Amp ships via npm dev channel only; the repo `sourcegraph/amp` itself also 404s).
- https://api.github.com/repos/runpod/mcp-server/releases -> HTTP 404 (correct repo is `runpod/runpod-mcp`).
- https://www.anthropic.com/news/rss.xml -> HTTP 404 (no official RSS; used https://www.anthropic.com/news HTML instead).
- https://opencode.ai/blog -> HTTP 404 (no blog endpoint at that path).
- https://block.github.io/blog/ -> HTTP 404.
- https://aider.chat/blog/ -> HTTP 200 but newest post dated 2025-05-08; no in-window content.
- https://cline.bot/blog -> HTTP 200, no in-window dated entries found.
- https://www.anthropic.com/news/claude-ship -> HTTP 404 (so the "Claude Ship" press item could not be confirmed against Anthropic's own site).
- Not attempted this cycle (curl budget): https://www.cursor.com/blog, https://blog.msty.app/, https://sst.dev/blog, https://openai.com/news/, https://blog.google/technology/developers/, https://cline.bot/blog deep pagination, GitHub releases for `google-gemini/gemini-cli` beyond per_page=30 (not needed - 30 was sufficient to cover the window).

## Retrieval log
- **~42 curl calls** (slightly over the 35 soft cap; the overflow was 2 extra npm packument checks and the RunPod repo correction). All raw captures are in `tmp/2026-11-24/releases/`.
- npm registry packuments fetched (10 + 4): @anthropic-ai/claude-code, @github/copilot, @openai/codex, @google/gemini-cli, @qwen-code/qwen-code, opencode-ai, @sourcegraph/amp (re-fetched after a 36s timeout), cline, aider-chat (404), @runpod/mcp-server, opencode (404), @anomalyco/opencode (404), @opencode/cli, npm search API (text=opencode).
- GitHub releases endpoints (12): anthropics/claude-code, anthropics/claude-code-action, openai/codex, google-gemini/gemini-cli, QwenLM/qwen-code, sst/opencode (-> anomalyco/opencode), sourcegraph/amp (404), block/goose (-> aaif-goose/goose), Aider-AI/aider, cline/cline, runpod/mcp-server (404), runpod/runpod-mcp, plus repo endpoint sourcegraph/amp (404).
- Other: anthropics/claude-code CHANGELOG.md raw, anthropics/claude-code advisories (repo scope, 30), global npm advisory feed (30), Google News RSS x5 queries, anthropic.com/news HTML, aider/cline/opencode blog endpoints.
- Method note: all in-window filtering used the npm `time` map and GitHub `published_at`, parsed in Python against the exact window 2026-11-23T01:28:00Z..2026-11-24T01:28:00Z. No web_search was used (bot-blocked); web_fetch was used once and failed.

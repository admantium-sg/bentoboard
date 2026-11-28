# Findings — Releases: Agentic CLI Tools & Desktop AI Assistants
**Window:** 2026-11-24T01:28:00Z → 2026-11-25T01:28:00Z (epoch 1795483680 → 1795570080)
**Collected:** 2026-11-25 (Europe/Berlin) · **Method:** direct `curl` against npm registry / GitHub API / vendor raw files. `web_search` was unusable (DuckDuckGo bot challenge); `web_fetch` used 3 times only.
**Retrieval budget:** exactly **35 `curl` calls** (9 npm packuments, 8 GitHub release lists, 2 advisory feeds, 6 vendor changelog fetches incl. 3 wasted on a broken URL split, 7 newsroom/RSS/site fetches, 3 spot checks) and **3 `web_fetch` calls** (runpod/runpod-mcp releases, claude.com Claude Ship article, github/copilot-cli releases). Raw artifacts in `tmp/2026-11-25/releases/`.

## Findings

### Claude Code

- **NEW: 2.1.332 published to npm in-window at 2026-11-24T22:06:38Z** and carries the **`next` dist-tag** — i.e. it is staged as a pre-release, not yet promoted to `latest`. Tags after the publish: `latest`=2.1.331, `next`=2.1.332, `stable`=2.1.325.
  - Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
- **NEW: Claude Code 2.1.332 ships MCP-server skills (beta) and a new `PreSkillShellCommand` hook event** — skills contributed by MCP servers appear in the `/` menu as `server:skill`; the new hook event can refuse a skill's or command's inline shell commands *as it loads*. Changelog explicitly notes the compat trap: "on 2.1.331 and older, a settings file naming it opens a dialog at start". This is the CLI-side counterpart to Anthropic's first-party article "MCP servers can now ship skills, run tasks, and more with Claude" (2026-11-24).
  - Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
  - Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.332
- **NEW: 2.1.332 is a large stability/hang-fix release**, notable because the fixes target exactly the "agent runs forever" failure modes that dominate this tool class: freezes and runaway memory use when a hook prints output without end; freeze when a permission rule or hook condition with several wildcards is checked against a long command; freeze when a hook blocks or fails during a turn with a >50,000-character log (now shortened); terminal freeze + ignored Ctrl+C while a local MCP server floods stdout; Read / @-mentions / compaction hanging on a named pipe nothing writes to (now fails after 20s); SSE MCP servers refusing every tool call after their event stream is cut and returns on a new endpoint; freeze/context overflow on a resumed worktree; freeze when opening a rewind point after a large tracked file was rewritten. Also: fixed `claude auth login` reporting "Login successful." when the claude.ai login could not be saved (now exits 1); fixed "Prompt is too long" after repeated auto-compaction failures; fixed the `sonnet` alias on Bedrock Mantle resolving to Haiku 4.5 (now means Sonnet 5); added an OpenTelemetry `assistant_response` event.
  - Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.332
- **Verified negative: the GitHub release tag `v2.1.332` was published 2026-11-25T01:32:14Z — ~4 minutes AFTER the window closed.** npm publish (22:06:38Z on 11-24) is inside the window; the GitHub-side publication is not. `latest` remained 2.1.331 for the whole window (published 2026-11-23T18:36:26Z, pre-window), and `stable` stayed frozen at 2.1.325 (2026-11-13) — the stable-tag freeze now runs ~12 days.
  - Source: https://api.github.com/repos/anthropics/claude-code/releases?per_page=20
- **Verified negative: claude-code-action had NO in-window release.** Latest is v1.0.289 (2026-11-23T23:54:14Z), followed by v1.0.288 and v1.0.287 (both 2026-11-23) — all pre-window. The action's ~daily cadence (v1.0.276 on 11-13 through v1.0.289 on 11-23) has not produced a new tag inside the window.
  - Source: https://api.github.com/repos/anthropics/claude-code-action/releases?per_page=20
- Context: the 2.1.32x cadence (~1 build/day: 2.1.327 11-17, 2.1.328 11-18, 2.1.329 11-19, 2.1.330 11-20, 2.1.331 11-23, 2.1.332 11-24) is fully restored after the earlier 3-day gap.
  - Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code

### Codex

- **NEW: the alpha channel jumped from the 0.173.0 line to a 0.174.0 line and shipped 5 alpha builds inside the window** — `0.174.0-alpha.1` (2026-11-24T01:55:11Z), `-alpha.2` (16:26:59Z), `-alpha.3` (20:22:51Z), `-alpha.4` (23:09:32Z), `-alpha.5` (2026-11-25T01:26:07Z), each followed by linux-x64/arm64, darwin-x64/arm64 and win32-x64/arm64 binaries. The `alpha` dist-tag now points at **0.174.0-alpha.5** (baseline: 0.173.0-alpha.4). GitHub mirrors these as `rust-v0.174.0-alpha.1` … `rust-v0.174.0-alpha.5` (all in-window, latest 2026-11-25T01:11:35Z).
  - Source: https://registry.npmjs.org/@openai%2fcodex
  - Source: https://api.github.com/repos/openai/codex/releases?per_page=20
- **Odd interleaving worth recording:** `0.173.0-alpha.5` was still published inside the window at 2026-11-24T06:51:57Z — i.e. the *older* 0.173.0 alpha line was completed roughly 5 hours **after** 0.174.0-alpha.1 had already shipped. Two alpha lines were in flight simultaneously.
  - Source: https://registry.npmjs.org/@openai%2fcodex
- **Verified negative: no new STABLE Codex release in-window.** `latest` remains **0.172.0** (published 2026-11-24T00:09:39Z — ~80 minutes *before* the window opened), and the `release-0.173.0-alpha.5-alpha` staging tag is still present alongside the newer `release-0.174.0-alpha.5-alpha`. Stable has now been unchanged for ~25h while the alpha line churns hard — a classic "0.174 imminent" pattern.
  - Source: https://registry.npmjs.org/@openai%2fcodex
- Codex's in-repo CHANGELOG is a stub that points to the releases page; the only "Unreleased" entry is a fix for missing command lifecycle events when unified exec cannot create a process (preserving approval rejection and sandbox retry behaviour), credited to @Marvinthebored (#44557). No dated in-window entries are published to the file.
  - Source: https://raw.githubusercontent.com/openai/codex/main/CHANGELOG.md

### Gemini CLI

- **NEW: 0.71.1 published 2026-11-24T03:57:09Z and took the `latest` dist-tag**, superseding 0.71.0 (published 2026-11-24T01:21:20Z, just outside the window). GitHub release `v0.71.1` at 2026-11-24T03:50:24Z is in-window. A patch landing ~2.5h after the .0 stable indicates a fast defect-response release.
  - Source: https://registry.npmjs.org/@google%2fgemini-cli
  - Source: https://api.github.com/repos/google-gemini/gemini-cli/releases?per_page=20
- **NEW / security-relevant: 0.71.1 is a cherry-pick of the commit `aafdfdf` from `release/v0.71.0-pr-30420` onto the 0.71.0 branch** — the same commit hash that the 2026-11-24 nightly was built from (`0.71.0-nightly.20261124.gaafdfdfb5`). PR #30420 is **"fix(a2a-server): enforce bearer token authentication and request input validation"**. So the A2A server's unauthenticated / unvalidated request surface was hardened and the fix was backported to stable 0.71.1.
  - Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.1
  - Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0
- **NEW: the 0.72.0-preview.0 changelog (published 2026-11-24T00:34:15Z, ~54 min before the window opened) bundles four other fixes that will land in the next stable** — nested `.gitignore` negations under `dir/**` patterns; Windows home-relative path expansion with tilde and backslash; resume of the *most recently active* session rather than the most recently started; and the bearer-token/input-validation A2A fix noted above. This is the substantive 0.72 feature preview even though it was published pre-window.
  - Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0
- Dist-tags after the window: `latest`=0.71.1, `staging-tmp`=0.71.1 (same build, staging tag also moved), `preview`=0.72.0-preview.0, `nightly`=0.71.0-nightly.20261124.gaafdfdfb5.
  - Source: https://registry.npmjs.org/@google%2fgemini-cli
- **Verified negative: no new nightly build inside the window** — the nightly chain stands at the 2026-11-24T01:19:27Z build (`gaafdfdfb5`); the ~24h nightly cadence did not fire again during the window.
  - Source: https://registry.npmjs.org/@google%2fgemini-cli

### Copilot CLI

- **NEW: the ~6-day freeze on the stable channel ENDED.** `latest` moved from the long-frozen 1.0.114 (2026-11-18T06:00:58Z) to **1.0.115, published 2026-11-24T13:03:39Z** — the first stable publish since 2026-11-18, i.e. the freeze lasted ~7 days.
  - Source: https://registry.npmjs.org/@github%2fcopilot
- **NEW: the prerelease channel moved far faster than stable** — `1.0.116-0` (2026-11-24T16:44:43Z), `1.0.116-1` (20:22:12Z), `1.0.116-2` (2026-11-25T00:11:22Z). The `prerelease` dist-tag now points at **1.0.116-2**; `unstable` points at `1.0.114-unstable.r45286541461.g05667ac` (2026-11-24T03:00:50Z, cut from the old 1.0.114 line).
  - Source: https://registry.npmjs.org/@github%2fcopilot
- **NEW: Copilot CLI 1.0.116 release notes (pre-release) show an MCP-hardening and permissions push** — warn when a plugin and a standalone MCP server connect to the same endpoint (with instructions to disable one via `/mcp`); prevent repeated sign-in prompts when multiple CLI sessions refresh access to the same MCP server; load workspace MCP servers from `.mcp.json` and `.github/mcp.json` even when those files contain comments or trailing commas; skip slow-connection/sign-in warnings for organization-managed MCP servers (except Connectors) and flag them in the startup summary; wait for `/mcp` auth before opening a browser for initial sign-in. Also: when the sandbox blocks a command, Copilot now stops and (if policy allows) says you could disable the sandbox for the session instead of handing execution back; "Assisted Permissions resolves routine requests faster on eligible plans"; experimental extensions get Enabled/Disabled controls with Load Only settings migrating to disabled; reduced memory growth in long sessions (text-measurement caches kept a full copy of each streamed reply and could exhaust the JS heap).
  - Source: https://github.com/github/copilot-cli/releases
- This is the first window in which the stable and prerelease channels moved together: a stable 1.0.115 plus three 1.0.116 prereleases within ~7.5h — a normal pre-1.0.116 release train.
  - Source: https://registry.npmjs.org/@github%2fcopilot

### OpenCode

- **NEW: three dev builds published in-window** — `0.0.0-dev-1345` (2026-11-24T07:18:58Z), `-1346` (13:15:00Z), `-1347` (19:33:58Z); the `dev` dist-tag advanced to 0.0.0-dev-1347 (baseline was dev-1344). Dev builds run roughly every 6h.
  - Source: https://registry.npmjs.org/@opencode%2fcli
- **Verified negative: no new stable OpenCode release in-window.** `latest` remains **2.4.1** (published 2026-11-23T15:56:19Z, pre-window) and the `beta` dist-tag is unchanged at 0.0.0-beta-19507. The most recent GitHub releases are v2.4.1 (2026-11-23T15:57:40Z) and v2.4.0 (09:22:21Z) — both pre-window. No OpenCode release tag was created inside the window.
  - Source: https://registry.npmjs.org/@opencode%2fcli
  - Source: https://api.github.com/repos/anomalyco/opencode/releases?per_page=20
- Context (baseline, unchanged): v2.4.1 was a hotfix for assistant messages failing to save on macOS 12 (system SQLite lacks the JSON operator used in v2.4.0), compaction retaining more than `keep.tokens`, and `/models` hiding config-only providers such as Ollama.
  - Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.1

### Other tools

- **NEW / significant: @runpod/mcp-server completed a MAJOR version jump to 5.x.** `5.0.0` published 2026-11-23T02:51:18Z (pre-window), **`5.1.0` published 2026-11-24T21:34:40Z (in-window)**; `latest` is now 5.1.0. The 4.x → 5.x transition is complete, so the carry-forward watch item (residual `rate_nps_score` surfaces + the promised Nov 27 data-deletion confirmation) now applies to the 5.x line.
  - Source: https://registry.npmjs.org/@runpod%2fmcp-server
- **NEW: RunPod MCP 5.x is a breaking pagination overhaul (AIP-158 style) across every list tool.** Every list now returns one page per call; clients must follow `pagination.nextCursor` while `pagination.hasNextPage` is true. `list-endpoints`, `list-hub-repos`, `list-public-endpoints` and `get-capacity` return rows under `endpoints` / `repos` / `endpoints` / `gpus` instead of `items`; `pagination.offset` and `pagination.truncated` are gone (replaced by `hasNextPage`). On the 14 API-paged lists the **limit maximum drops from 1,000 to 100** (rejected when `MCP_SCHEMA_VALIDATION=enforce`); default page size drops from up to 1,000 rows to 20. A page also stops before its result passes **24,000 bytes** as sent (after secret env redaction). Cursors are opaque and bound to the issuing call — a damaged or cross-tool cursor is a 400 with code `invalid_cursor`. Token cost per default call measured with @anthropic-ai/tokenizer: list-pods 42,011 → 7,230 tokens (83% saved), list-guides 21,040 → 3,178 (85%), list-public-templates 21,285 → 4,344 (80%), list-pod-billing 18,222 → 1,311 (93%).
  - Source: https://github.com/runpod/runpod-mcp/releases
- **NEW: RunPod MCP 5.1.0's minor change moves the tool generator onto the newly published `@runpod/typescript-api-sdk` 0.10.0** (now released from `runpod/js-sdk`), adding `get-catalog-template`, `list-catalog-repos`, `get-catalog-repo`, `get-catalog-repo-readme`; `list-public-templates` gains search/filter/order/paging; `list-gpu-types` and `get-gpu-type` gain `minVcpuCountPerGpu` / `minRamPerGpu`. Production date stated as 2026-11-24.
  - Source: https://github.com/runpod/runpod-mcp/releases
- **Verified negative: Qwen Code had zero in-window publishes.** `latest` remains **0.28.4** (published 2026-11-22T12:28:27Z, pre-window); `nightly` remains 0.28.3-nightly.20261121.56ef346859 (2026-11-21T22:52:50Z) and `preview` 0.28.1-preview.1 (2026-11-20). The GitHub side is likewise silent in-window: latest releases v0.28.4 (2026-11-22T12:04:21Z) and desktop-v0.28.4 (12:52:42Z). Packument `modified` = 2026-11-22T12:28:28Z. The ~daily nightly chain has also stalled since 11-21.
  - Source: https://registry.npmjs.org/@qwen-code%2fqwen-code
  - Source: https://api.github.com/repos/QwenLM/qwen-code/releases?per_page=20
- **Verified negative: Cline had zero in-window publishes.** npm `latest` remains **3.0.75** (2026-11-21T05:31:57Z), nightly tag frozen at 3.0.73-nightly.1792632285 (2026-10-22 — dead ~5 weeks). GitHub latest is v4.1.27 (2026-11-21T06:05:04Z) with the desktop-v0.0.50 / cli-v3.0.75 / sdk-v0.2.1 bundle also on 11-21. Packument `modified` = 2026-11-21T05:31:58Z.
  - Source: https://registry.npmjs.org/cline
  - Source: https://api.github.com/repos/cline/cline/releases?per_page=20
- **Verified negative: block/goose had zero in-window releases.** Latest tag is v1.60.2 (2026-11-20T06:18:55Z); the preceding v1.60.1 (11-18), v1.60.0 (11-17), v1.59.2 (11-16) are also pre-window. Goose's release cadence has slowed markedly — v1.60.2 on 11-20 is the only tag in the last 8 days.
  - Source: https://api.github.com/repos/block/goose/releases?per_page=20
- **Verified negative: claude-code-router is dormant.** `latest` = 2.1.1, published **2025-07-27T02:01:32Z** — ~16 months stale, packument `modified` unchanged since. No publish in-window.
  - Source: https://registry.npmjs.org/claude-code-router

### Security & advisories

- **Scope note:** the GitHub repo-scoped advisory endpoint for `anthropics/claude-code` returns **36 advisories total: 29 high, 4 medium, 3 low**. The newest is **2026-10-26T11:43:04Z** (GHSA-5xjx-9qx6-jcrv, high, TOCTOU race in the Edit tool). The global npm advisory feed (`/advisories?ecosystem=npm`, 100 most recent) was also scanned.
- **Verified negative: NO new advisory in-window for any tracked coding CLI**, and in particular **no new advisory naming a specific coding CLI's CONFIG surface** — the carry-forward watch item. The newest claude-code advisory touching configuration is **GHSA-gfvf-j8jh-jxxw** (low, "Managed Settings Not Applied When a Stored API Key Was Preferred Over Enterprise Sign-In", published 2026-09-29T21:44:55Z, affecting `@anthropic-ai/claude-code` >= 2.0.68 < 2.1.260) — already fixed by the shipped version, and ~2 months old. The historical config-surface advisories remain GHSA-ff64-7w26-62rf (high, "Sandbox Escape via Persistent Configuration Injection in settings.json", 2026-02-06), GHSA-mmgp-wc2j-qcv7 (high, "Workspace Trust Dialog Bypass via Repo-Controlled Settings File", 2026-03-18), GHSA-5cwg-9f6j-9jvx (medium, "Insecure System-Wide Configuration Loading … on Windows", 2026-04-17) and GHSA-jh7p-qr78-84p7 (medium, "Malicious repo configuration can trigger data leakage via environment configuration used before trust confirmation", 2026-01-20). **No new config-surface CVE surfaced this cycle.**
  - Source: https://api.github.com/repos/anthropics/claude-code/security-advisories?per_page=50
  - Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **NEW (in-window, critical, adjacent to this domain): GHSA-c4hm-4h84-2cf3 / CVE-2026-59726 — "ruflo MCP bridge allows unauthenticated remote code execution in default Docker Compose deployments"**, published 2026-11-24T21:01:10Z, affecting npm `ruflo` < 3.16.3, fixed in 3.16.3. The MCP bridge in `ruflo/docker-compose.yml` exposed `POST /mcp` and `POST /mcp/:group` with **no authentication**; the tool blocklist naming `terminal_execute` was enforced only in the autopilot flow and was bypassed by both MCP endpoints. An unauthenticated network attacker could invoke `tools/call → terminal_execute`, obtain a shell as `node` (uid 1000), read every provider API key from the container env, spawn attacker-controlled swarms on the victim's keys, and **persist a poisoned pattern into the AgentDB learning store that steers future AI outputs for all users of the instance**. Fix: loopback bind by default (fail-closed on public-bind opt-in without `MCP_AUTH_TOKEN`), constant-time bearer auth, server-side `terminal_execute` gate behind `MCP_ENABLE_TINEL`, MongoDB `--auth` on by default, read-only container + tmpfs, CORS allowlist, CI regression locks.
  - Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **NEW (in-window, MCP-relevant, high): GHSA-9x82-4j54-863h — "isomorphic-git allows unbounded memory allocation from attacker-controlled delta target size (DoS)"**, published 2026-11-23T21:07:02Z, npm `isomorphic-git` < 1.38.6. Relevant to this domain because isomorphic-git is the git implementation used by many agentic JS toolchains (including MCP servers) for sandboxed git operations.
  - Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **Verified negative: no in-window npm advisory for `@anthropic-ai/claude-code` itself.** The most recent claude-code entry in the global npm feed is GHSA-5xjx-9qx6-jcrv (TOCTOU in the Edit tool, published 2026-11-09T22:42:03Z) — already known and already patched in 2.1.251+.
  - Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **Watch item (partially resolved):** the ruflo advisory is the first in-window advisory in this domain that specifically names an **MCP bridge**, and its failure mode (persisted poisoning of a learning store that steers future model output) is a **stored prompt-injection / cross-session poisoning** primitive — the same class of risk as the RunPod NPS removal tracked in prior cycles.
  - Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc

### Company announcements

- **RESOLVED (was press-only): "Claude Ship" is now FIRST-PARTY CONFIRMED.** Anthropic's own product site carries **"Introducing Claude Ship"**, dated **Nov 23, 2026** — the announcement is real and first-party, not just press-reported. It is composed of **Code Review** (already GA) plus two new beta agents, **PR Steward** and **Claude Approvals**. Claude Ship reviews PRs, fixes them, and decides what is ready to merge against a policy the team writes as a file in the repository ("a smarter CODEOWNERS file"); Claude Approvals is recommended to start in **observe-only mode** before being wired into branch protection. PR Steward deliberately does *not* approve or merge — it fixes failing CI, merge conflicts and review feedback, comments what it changed and how to undo it, and accepts `@claude` steering and `@claude stop`. Anthropic states that on the Claude Code team merged PRs **more than doubled from June to September** while the share of reverted PRs fell by more than 40%. Eligible Claude Enterprise orgs can claim **at least $10,000 in Claude Ship credits** to use within 30 days, claimable by **January 15, 2027**.
  - Source: https://claude.com/resources/articles/introducing-claude-ship
- **NEW (in-window, first-party): Anthropic published "MCP servers can now ship skills, run tasks, and more with Claude" on Nov 24, 2026.** First-party description: "Skills over MCP is in public beta in Claude, so MCP servers can ship skills alongside their tools. Tasks and Elicitation are now generally available, and File Uploads is rolling out soon." This is the platform-side counterpart to the Claude Code 2.1.332 "skills from MCP servers (beta)" change and makes the MCP-skills feature a cross-surface rollout rather than a CLI-only experiment.
  - Source: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more
- **NEW (in-window, first-party): Anthropic published "Turn artifacts into Mac and Windows apps" on Nov 24, 2026** — excerpt: "Open the artifacts you use every day like any other app, and let them do more on your computer". A desktop-assistant launch line, directly on this topic's "desktop AI assistants" side.
  - Source: https://claude.com/resources/articles/install-as-app
- **Adjacent first-party posts (pre-window, 2026-11-23, same launch cluster):** "Zero data retention with Enterprise Frontier Safeguards is now in beta" and "The enterprise guide to securing coding agents" — the latter is Anthropic's own publishing-again on securing coding agents, consistent with the vendor-security theme in the advisory feed.
  - Source: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards
  - Source: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents
- **[REPORTED] Press volume in-window is overwhelmingly Claude Ship** — 33 in-window Google News items matched "Claude Code", of which ~29 are Claude Ship coverage (Reuters, The Verge, The Register, TechCrunch, The Decoder, InfoWorld, ZDNET, The Defiant, Decrypt, Help Net Security, The Times of India, etc.), spanning 2026-11-24T01:28Z through 21:46Z. Only Google News RSS titles/redirects were captured — publisher pages were not fetched — so all such items are title-level and marked [REPORTED].
  - Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
- **[REPORTED] Two non-Claude-Ship in-window items are worth flagging:** "The thing that hit us: Satya Nadella admits VS Code faded in six months after a decade on top because of Claude…" (Adafruit, 2026-11-24T19:06Z) — a competitive-positioning claim about VS Code; and "Anthropic says MCP SDKs top 700 million monthly downloads as background tasks reach general availability" (MLQ.ai, 2026-11-24T20:12Z) — a claim about MCP SDK download volume. Both are title-level only.
  - Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
- **[UNVERIFIED] "Claude Code Adds Experimental Code Mode to Orchestrate Tool Calls with JavaScript" (InfoQ, 2026-11-23T12:20Z)** appeared in the same feed but is dated **pre-window** and was not independently verified this cycle — no matching entry was found in the 2.1.332 changelog or any first-party page.
  - Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
- **[REPORTED] "agentic CLI"/"CLI coding agent" queries produced no in-window items at all** — the 10 returned items are all older (2025-05 → 2026-09), led by Cloudflare's "cf: the agentic CLI for the entire Cloudflare API" (2026-09-28) and xAI's "Grok Build" (2026-08-19). No new agentic-CLI product launch by a major vendor was visible in-window outside the Anthropic/Claude Ship story.
  - Source: https://news.google.com/rss/search?q=%22agentic+CLI%22+OR+%22CLI+coding+agent%22&hl=en-US&gl=US&ceid=US:en

### Access gaps

- **`web_search` unusable this cycle** (DuckDuckGo bot-detection challenge), so all discovery ran through `curl` against primary registries/APIs plus Google News RSS. No general web-search discovery, no Hacker News, no Reddit, no vendor blogs other than those fetched directly.
- **Anthropic's newsroom RSS is still unreachable — but there is now a working first-party substitute.** `https://www.anthropic.com/feed.xml` and `https://www.anthropic.com/news/feed.xml` both return an Anthropic-branded **"Not Found"** HTML error page (HTTP 404 with a Next.js `__next_error__` body, ~82KB / ~78KB of markup) rather than a feed — so the RSS route remains broken for the third cycle. **`https://claude.com/blog` (the "Articles" listing, title "Articles | Claude by Anthropic") works and exposes dated first-party article cards with slugs, dates and excerpts**, which is how "Introducing Claude Ship", "MCP servers can now ship skills…" and "Turn artifacts into Mac and Windows apps" were confirmed. Anthropic's own newsroom (`anthropic.com/news`) was not reachable this cycle, so "first-party" here means claude.com (Anthropic-operated product domain), not the corporate newsroom.
  - Source: https://www.anthropic.com/feed.xml
  - Source: https://claude.com/blog
- **`https://claude.com/blog` returns 0 bytes to plain `curl` and 591KB only with a browser User-Agent** — a non-browser agent gets an empty body. All article content required a UA header or `web_fetch`.
  - Source: https://claude.com/blog
- **Gemini CLI's repo has no root `CHANGELOG.md`** — `raw.githubusercontent.com/google-gemini/gemini-cli/main/CHANGELOG.md` returns `404: Not Found`, and `packages/cli/CHANGELOG.md` also returns `404: Not Found`. Gemini CLI changelog content is therefore only obtainable via the GitHub releases API, which was used instead.
  - Source: https://raw.githubusercontent.com/google-gemini/gemini-cli/main/CHANGELOG.md
- **`api.github.com/repos/runpod/mcp-server/releases` → HTTP 404.** The correct repository is `runpod/runpod-mcp` (the npm `repository` field points to `github.com/runpod/runpod-mcp.git`); the release notes were obtained from the HTML releases page instead. Worth correcting in the standing endpoint list.
  - Source: https://api.github.com/repos/runpod/mcp-server/releases?per_page=5
- **`api.github.com/repos/sourcegraph/amp/releases` and `@sourcegraph/ampcode` were not probed** — the gap was already recorded as structural in prior cycles and the task brief instructed not to spend calls on it. Absence of Amp releases remains a **GAP, not a verified negative**, this cycle.
  - Source: https://api.github.com/repos/sourcegraph/amp/releases
- **`@opencode/core`, `@opencode/plugin`, `@opencode/schema`, `@opencode/protocol` sibling packages were not re-fetched** (npm call budget); their state is inferred to be unchanged at the 2.4.1 bootstrap. The `opencode-ai` legacy package, `opencode` and `@anomalyco/opencode` 404s were also not re-probed this cycle.
  - Source: https://registry.npmjs.org/@opencode%2fcli
- **The Gemini CLI 0.71.1 patch rationale was inferred** from the cherry-pick PR title (aafdfdf / PR #30420) rather than from a full 0.71.0→0.71.1 diff; the release body itself contains only the one-line cherry-pick note.
  - Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.1

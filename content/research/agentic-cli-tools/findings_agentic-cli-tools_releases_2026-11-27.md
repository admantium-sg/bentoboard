# Findings — Releases (agentic-cli-tools) — 2026-11-26 + 2026-11-27

**Research area:** Agentic CLI tools and desktop AI assistants
**Focus angle:** tool releases, new commands/features, company announcements
**Reporting window:** 2026-11-26 → 2026-11-27T01:28Z (cron fired 2026-11-27T01:28Z, Europe/Berlin)
**Fresh captures:** `tmp/2026-11-27/releases/` (61 files) + mined `tmp/2026-11-26/releases/` (~200 files, covers the crashed 11-26 cycle → treated as **pre-window carry-forward**, clearly flagged)

**Window discipline**
- "In-window" = published after 2026-11-26T01:28:00Z and on/before 2026-11-27T01:28:00Z.
- Items dated 2026-11-25 or early 2026-11-26 (<01:28Z) belong to the crashed 11-26 cycle → reported under **Pre-window / carry-forward**, flagged as such.
- The 2026-11-27 slice is only ~88 minutes wide (00:00Z–01:28Z) because the cycle fired at 01:28Z.

---

## 2026-11-26

### Headline

- **Google made Workspace MCP servers and the new "Workspace CLI" generally available, and made them mandatory for agents.** Google-hosted MCP servers cover Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat and Tasks (Keep "coming soon"); the new **Workspace CLI** brings Workspace tools into terminals, VMs and container sandboxes and ships *packaged agent skills*, *dynamic command discovery* and *scoped sign-in*. Agents "**must** use Workspace MCP servers or the Workspace CLI to access Workspace data, rather than calling Workspace REST APIs directly" — technical enforcement begins **February 1, 2027**. Two usage tiers replace the old quota model: **Standard** (free, published quotas) and **Scaled** (pay only above daily free allowances, starting **April 1, 2027**); >99% of active developers are on Standard today.
  Source: https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html (post dated 2026-11-24; capture `tmp/2026-11-27/releases/gw_mcp_cli.html`)

- **Google also shipped an enterprise governance layer for agents alongside the MCP/CLI GA:** a new **Workspace AI Tools Addendum** (prohibits storing certain API-derived data long-term; prohibits agents scraping Workspace APIs), **centralized agent access management** in the admin console, **human-in-the-loop (HITL) confirmation rules** for sensitive actions in third-party AI tools, automatic **DLP** on agent reads, and **agent audit logs** (Admin console → Security > API Controls). Developers must set the OAuth 2.0 client flag `is_agentic` ("Use this client for an AI-powered agent") on agent clients.
  Source: https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html

- The Workspace MCP/CLI mandate became the dominant agentic-platform story of the day: HN thread **"Google Will Make AI Agents Use Its MCP Servers. The Gmail One Can't Send Email"** scored **237 points / 203 comments** on 2026-11-26T09:44Z, plus a follow-up blog framing it as *"Google gives AI agents 69 days to move to Workspace MCP"* (2026-11-26T15:18Z).
  Source: https://techstackups.com/articles/google-workspace-ai-agents-mcp/ ; https://vortner.de/blog/google-workspace-mcp-69-days ; https://hn.algolia.com/api/v1/search_by_date?query=MCP&tags=story

- **OpenAI shipped two more Codex CLI 0.174.0 alphas on 2026-11-26** — `rust-v0.174.0-alpha.7` (GitHub release 04:36:47Z; npm 04:49Z) and `rust-v0.174.0-alpha.8` (GitHub release 21:56:07Z; npm 22:05Z). The npm `alpha` dist-tag now points at **0.174.0-alpha.8**; `latest`/`stable` remain **0.172.0** (published 2026-11-24T00:03:55Z).
  Source: https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.8 ; https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.7 ; https://registry.npmjs.org/@openai%2fcodex

- **The odd Codex 0.173.0-alpha / 0.174.0-alpha interleaving repeated in-window.** npm carries a `release-0.173.0-alpha.5-alpha` dist-tag with `0.173.0-alpha.5` published **2026-11-24T06:44:18Z** — *after* `0.174.0-alpha.1` (2026-11-24T01:46:17Z) — while the 0.174 line ran to `-alpha.8` (2026-11-26T21:56:07Z). So the 0.173 branch was resumed mid-stream after 0.174 alphas had already started, and then 0.174 resumed. `0.173.0-alpha.1` (11-20T03:00:03Z) and `0.173.0-alpha.2` (11-20T20:54:17Z) are the only other 0.173 entries; **there is still no 0.173.0 stable and no 0.174.0 stable**.
  Source: https://registry.npmjs.org/@openai%2fcodex (dist-tags `release-0.173.0-alpha.5-alpha`, `alpha`, `latest`) ; https://github.com/openai/codex/releases

- **GitHub Copilot CLI ran a dense prerelease train on 2026-11-26**: `v1.0.117-2` (02:03:04Z), `v1.0.117-3` (20:17:35Z), `v1.0.117-4` (22:51:57Z). Highlights: explicit **tool exposure opt-in for custom agents**; approving an MCP server's tools no longer implicitly approves built-in shell/memory permissions (name-collision fix); "Assisted Permissions" can suppress confirmation prompts for processes Copilot itself started (by PID); autopilot asks per-extension instead of denying all; `/mcp search` explains why a registry server can't install instead of spinning; Copilot starts without plugins when `config.json` is unparseable; resume works even when the session's model is unavailable; Windows PowerShell hooks preserve native exit codes (exit code 2 = warning/denial, not hook failure).
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.117-3 ; https://github.com/github/copilot-cli/releases/tag/v1.0.117-2 ; https://github.com/github/copilot-cli/releases/tag/v1.0.117-4

- **Charm's Crush shipped v0.103.0 (2026-11-26T15:56:38Z)** with an **experimental client/server mode** (`option experimental client-server true`, with `server-ready-timeout 30` / `server-idle-timeout 60` / `server-detach-grace 10`), **OSC 7577 "Program Resume Protocol"** support (resume the same session after update, crash or reboot), **live Bash output**, **mid-run switching of model and reasoning effort**, and a new `charm.land/turtle` core-utility set. It also carries a **security fix**: in client/server mode the server could return the full environment and API keys to *any* client that listed workspaces (upstream issue **#4391**).
  Source: https://github.com/charmbracelet/crush/releases/tag/v0.103.0

- **Cline shipped a four-part release set on 2026-11-26**: `cli-v3.0.76` (08:56:12Z), `sdk/sdk/v0.2.2` (08:40:10Z), `desktop-v0.0.51` (09:54:10Z) and `v4.1.28` (09:57:49Z). v4.1.28 refreshes the model catalog — the OpenAI provider drops deprecated ids (`gpt-4o`, `gpt-4.1`, `gpt-5`, `gpt-5-mini`, `gpt-5.1`, `gpt-5.3-codex`, `o3`, `o3-pro`), `gpt-5.3-codex-spark` is removed for ChatGPT subscriptions, and **Concentrate** and **Prima Labs** providers are added; third-party license notices in the extension package were extended.
  Source: https://github.com/cline/cline/releases/tag/v4.1.28 ; https://github.com/cline/cline/releases/tag/cli-v3.0.76 ; https://github.com/cline/cline/releases/tag/desktop-v0.0.51 ; https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.2

- **Anthropic's PR-review tooling ("Claude Ship") got an expansion cycle on 2026-11-26**, covered by TechRepublic ("Anthropic Launches Claude Ship to Review, Fix and Approve GitHub Pull Requests", 21:35Z), NeoTeo ("Claude Ship coding agents split review, repair and approval", 13:39Z) and Yahoo Tech (20:51Z). The pattern described is a three-agent split — *review*, *repair*, *approval* — with agents able to sign off GitHub pull requests.
  Source: https://news.google.com/rss/search?q=%22Claude+Ship%22&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic lost a Claude Code engineer to OpenAI on 2026-11-26**: **Thariq Shihipar** (Claude Code team) joined OpenAI, reported 11:49Z by MLQ.ai and picked up the same day by India Today ("Anthropic loses another Claude Code engineer to OpenAI, and the internet is asking why everyone is leaving", 07:05Z). This follows three Claude Code members jumping to OpenAI in the prior week.
  Source: https://news.google.com/rss/search?q=Thariq+Shihipar+OpenAI&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic's Messages API was migrated from Python to Rust**, first-party engineering post published **2026-11-25T17:15:45Z** and covered broadly on 2026-11-26 (InfoWorld 02:28Z, PC Guide 17:27Z, TechRepublic 13:53Z). Headline number: **~70% less CPU** with no downtime; Anthropic's Jarred Sumner said an agent-written compiler cut Claude Code memory **4x after five rewrites**, and team lead Katelyn Lesse said engineers did not read 80% of the code behind the rewrite.
  Source: https://news.google.com/rss/search?q=%22Migrating+our+Messages+API+to+Rust%22&hl=en-US&gl=US&ceid=US:en [REPORTED — canonical anthropic.com URL 404s, see Access gaps]

- **An independent researcher documented that Codex CLI hands the model 26 ChatGPT account tools by default on a free plan**, measured 2026-11-26 between 07:44 and 07:46 UTC with `codex exec --json` on the `rust-v0.172.0` binary, model `gpt-6-luna`, `features.apps` at default. Five `mcp__codex_apps__*` namespaces were exposed: `safety_settings` (5 tools incl. `get_parental_controls`, `update_parental_control`, `get_trusted_contact`), `pets` (11 tools), `plugin_management` (6), etc. The report notes these act on the ChatGPT account via OpenAI's servers and so leave **no on-disk trace**, defeating disk-diffing benchmark tooling.
  Source: https://getbelay.dev/reports/codex-apps/ (report dated 2026-11-26; capture `tmp/2026-11-27/releases/codex_apps.html`)

- **A new Google Cloud surface was documented on 2026-11-26: the Gemini Distillation Service** in Gemini Enterprise Agent Platform (model tuning/distillation docs), surfaced on HN at 19:06Z.
  Source: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning/distillation

- **Mozilla's official `firefox-mcp` server resurfaced on 2026-11-26** (HN 21:54Z): repo `mozilla/firefox-mcp`, "Model Context Protocol (MCP) server that lets AI agents browse the web and debug web pages with Firefox", 616 stars, last push 2026-11-24T17:03:52Z, latest release `v0.11.0` (2026-11-19T10:22:56Z).
  Source: https://github.com/mozilla/firefox-mcp

- **New MCP-security tooling appeared on 2026-11-26**: Suncly's research that *"Google's Gmail MCP Prompts Don't Stop Agents with Shell Access"* (HN 14:15Z) and the launch of an **AI-agent reliability index** for MCP endpoints (HN 08:51Z, Cloudflare topped the "blind spot" list).
  Source: https://www.suncly.com/research/gmail-mcp-prompts ; https://fomo.observer/suncly-launches-ai-agent-reliability-index-with-cloudflare-topping-blind-spot-list/

- **Microsoft published a threat model for Azure MCP on 2026-11-25T21:11Z** ("Threat Modeling Azure MCP: Securing AI-Assisted Infrastructure Operations"), continuing the in-window MCP hardening theme.
  Source: https://techcommunity.microsoft.com/blog/azureinfrastructureblog/threat-modeling-azure-mcp-securing-ai-assisted-infrastructure-operations/4564892

- **The Notion-official-MCP "hidden upsell instructions" issue re-amplified on 2026-11-26** (HN 18:28Z, 46 points / 16 comments), continuing the MCP-prompt-injection theme from the prior cycle.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4qm5o/heads_up_if_you_wire_notions_official_mcp_into/

- **A wave of new "one desktop app for all agents" and CLI-wrapping projects appeared on HN on 2026-11-26**, showing the desktop-assistant category consolidating around multi-agent orchestration: *Seahelm* (native Mac app for running Claude Code agents in parallel, 06:01Z), *Kaju* (annotate/comment/collaborate with Claude Code, 23:03Z), *Bao – A Desktop Pet for Claude* (14:07Z), *Olympus Coder* (one desktop app for Claude Code, Codex and other agents), *Talira* (search engine for software built for AI agents, 04:37Z), *AgentDesign* (make your coding agent draw each screen before it codes, 20:55Z).
  Source: https://github.com/BetaYao/seahelm ; https://github.com/aigeano/kaju ; https://github.com/martianacademy/olympus-coder ; https://talira.ai/ ; https://getagentdesign.com/

- **MCP-adjacent tooling shipped on 2026-11-26**: *Lockward* (a lockfile for the skills and MCP servers an agent loads, 15:01Z), *Blofeld* (autonomous fuzzing for MCP servers, 13:48Z), *Turbo-Desktop-MCP* (Windows UI Automation deltas for desktop agents, 09:06Z), *DataFluxor* (SEO/Etsy research + scraping via API and MCP, 23:52Z), *Faster Mac Use* (background Chrome/macOS MCP with a 5-lane routing skill, 2026-11-27T01:07Z) — all pointing at agent-supply-chain and desktop-control hardening.
  Source: https://github.com/Breaktroughf1/lockward ; https://blofeld.dev/ ; https://github.com/Tthanh2k6/turbo-desktop ; https://datafluxor.com/ ; https://github.com/lifan-builds/faster-mac-use

- **An MCP v2 explainer landed on 2026-11-26T06:41Z** covering the move from tool calling to **async tasks, elicitation and file handoffs** — the same primitives Anthropic shipped publicly in "Skills over MCP" days earlier.
  Source: https://vigneshx.com/blog/what-is-mcp/

- **JetBrains opened "GoLand Intelligence" to Cursor and VS Code**, blogged 2026-11-25 and surfaced on HN 2026-11-26T20:11Z — a first-party IDE-agent model becoming available in third-party agentic editors.
  Source: https://blog.jetbrains.com/go/2026/11/25/go-by-goland-public-preview/

- **GitHub's blog carried a cluster of agent-platform engineering posts in the 2026-11 cycle**: "Building the Agent Host Protocol for sessions that continue across devices", "Building Git infrastructure for agent scale development" and "The Bridge to agent-scale Git infrastructure" — evidence of GitHub pushing an agent-host protocol rather than shipping another CLI. No `github.blog` post dated 2026-11-26 or 2026-11-27 appears in the captured homepage.
  Source: https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/ [UNVERIFIED — homepage links captured, per-post dates not confirmed]

- **Anthropic expanded the always-on agent "Claude Duet" to Japan (2026-11-26T05:35Z) and India (06:05Z)**, targeting small businesses as a "US-Origin Research Preview Expansion" — the first dated international rollout signal of the always-on agent line.
  Source: https://news.google.com/rss/search?q=%22Claude+Duet%22&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **KPMG tapped Anthropic's Claude Mythos to power cybersecurity services** (2026-11-26T11:25Z, Yahoo Finance) — enterprise first-party-model adoption evidence.
  Source: https://news.google.com/rss/search?q=KPMG+Claude+Mythos&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic is reported to be A/B testing the next Claude Opus model (5.6) inside Claude Code** — original TestingCatalog item 2026-11-25T16:35Z, with 2026-11-26 follow-ups including early-tester output ("Claude Opus 5.6's stunning AI animations", X, 22:34Z) and a rumor-strength analysis (Memeburn 10:51Z). Model-level, not a CLI release, but it explains the 11-26 Claude Code chatter volume.
  Source: https://news.google.com/rss/search?q=Anthropic+Opus+5.6+A%2FB+testing+Claude+Code&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic was reported to be preparing a Google Drive file browser for Claude** on 2026-11-26T18:00Z (TestingCatalog AI News) — a new first-party connector/desktop surface, ahead of the Workspace-side MCP push.
  Source: https://news.google.com/rss/search?q=Anthropic+Google+Drive+file+browser+Claude&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic's Claude Duet / always-on-agent line has a first-party architecture guide**: "Building always-on agents" (author **William Hu**, dated **November 13, 2026**, 14 min read) documents the primitives for stateful, proactive agents — wake-up control, cross-run context carry-over, and delivery to the user. It quantifies the economics that make always-on agents viable: on a long-horizon coding benchmark **Opus 5.5 cost 78% less per solved task than Opus 5**, versus 40% less on typical workloads.
  Source: https://claude.com/resources/building-always-on-agents (capture `tmp/2026-11-26/releases/building-always-on-agents.html`)

- **A pricing comparison between Claude Code and Codex circulated on 2026-11-26T16:34Z** ("Claude Code vs Codex: $8/$40 vs $2/$10 per Million Tokens", shattered.io) — the only new *published* per-token price table in the window, and it is third-party rather than first-party.
  Source: https://news.google.com/rss/search?q=Claude+Code+vs+Codex&hl=en-US&gl=US&ceid=US:en [REPORTED]

- **Anthropic's newsroom index page was stamped "Latest news November 26, 2026"** but carries **no announcement item dated 2026-11-26** — the newest listed post remains "Introducing Claude Fable 5.2 and Claude Mythos 5.2" (Nov 9, 2026), with the IPO-closing announcement (Nov 20) in the announcements archive.
  Source: https://www.anthropic.com/news (capture `tmp/2026-11-26/releases/newsidx.html`)

- **GitHub had a status incident crossing into the window**: Git LFS degradation for some customers, 2026-11-25T23:06:54Z → resolved 2026-11-26T01:58:51Z (minor impact; average 2% of LFS requests failed, peaking at 4%, with client auto-retry masking more).
  Source: https://www.githubstatus.com/api/v2/incidents.json (capture `tmp/2026-11-26/releases/st_gh.json`)

---

## 2026-11-27

### Headline

- **GitHub Copilot CLI published `v1.0.117-5` at 2026-11-27T01:02:40Z** (last release inside the window), adding **`sandbox.userPolicy.network.extraCaCertificates`** so custom CA certificates can be trusted for sandboxed commands through TLS-intercepting proxies — a direct enterprise-proxy ask, consistent with the CLI's hardening pass this window. npm's `prerelease` dist-tag now points at `1.0.117-5`.
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.117-5 ; https://registry.npmjs.org/@github%2fcopilot

- **Sourcegraph's Amp CLI published `@sourcegraph/amp@0.0.1795737653-g84af98` at 2026-11-27T00:24:11Z** — Amp continues its ~4-hourly single-executable publish cadence: **7 publishes inside this window** (11-26T04:31Z, 08:21Z, 12:29Z, 16:30Z, 20:25Z; 11-27T00:24Z; plus 11-26T00:25Z just before it). The `next` dist-tag remains `0.0.1778732631-gc5875c-singleexe`.
  Source: https://registry.npmjs.org/@sourcegraph%2famp

- **Charm's Crush published a `nightly` tag at 2026-11-27T00:44:02Z** on top of the v0.103.0 stable release — the first nightly observed after the client/server-mode security fix shipped.
  Source: https://github.com/charmbracelet/crush/releases/tag/nightly

- **A secondary outlet reported "OpenAI Codex App v26.1120 & CLI v0.172.0 Update Released" at 2026-11-27T01:28:58Z** — the desktop Codex app version string and the CLI stable version in one release note. The CLI side matches the verified npm/GitHub state (0.172.0 stable), but the "Codex App v26.1120" desktop build was **not independently verified** (the `openai/codex` repo publishes only `rust-v*` tags).
  Source: https://news.google.com/rss/search?q=%22Codex+App%22+v26.1120&hl=en-US&gl=US&ceid=US:en [REPORTED / UNVERIFIED]

- **A new desktop-assistant/MCP hybrid shipped just before the window closed**: *Faster Mac Use* — background Chrome/macOS MCP server with a 5-lane routing skill, posted on HN at 2026-11-27T01:07:18Z.
  Source: https://github.com/lifan-builds/faster-mac-use

- **A late research drop landed on 2026-11-27T00:09:05Z**: *QDA — Closed-Loop LLM Quantization Design with Agents* from MIT HAN Lab — agents in the loop for quantization design, i.e. agentic tooling aimed at making small models cheap enough to run continuously.
  Source: https://mit-han-lab.github.io/qda-blog/

---

## Pre-window / carry-forward (2026-11-25 → 2026-11-26T01:28Z, crashed cycle — reported for completeness, NOT novel to this window)

- **Claude Code 2.1.332 became `latest`/`next` on npm** (published 2026-11-24T22:06:38Z; GitHub release `v2.1.332` published 2026-11-25T01:32:14Z). **Carry-forward item resolved:** the npm `stable` dist-tag is **2.1.326** (published **2026-11-16T18:43:39Z**) — i.e. stable has been frozen at 2.1.326 for 10 days, and the "2.1.325 frozen" carry-forward is stale (2.1.325 shipped 2026-11-13T20:07:25Z, 2.1.326 on 11-16). Headline features of 2.1.332: **skills from MCP servers (beta)** shown as `server:skill` in the `/` menu, a new **`PreSkillShellCommand`** hook event that can refuse a skill's inline shell commands, "Always deliver" for held messages from other sessions, an OpenTelemetry `assistant_response` event, a Cyber Verification Program access tier in the startup header, and a long list of hang/freeze fixes (compaction, MCP SSE reconnect, named-pipe reads failing after 20s, hooks printing output without end).
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code ; https://github.com/anthropics/claude-code/releases/tag/v2.1.332 ; https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

- **OpenCode v2.4.2** (GitHub release 2026-11-26T00:59:05Z, npm 00:46Z — 29 minutes before this window opened; npm `latest` = 2.4.2). Its cost-accounting fix **is the first-party long-context (>272K) pricing tiering in a CLI changelog**: PR #65984 *"fix(core): price service tier speeds at the tier's long-context rates"* (created 2026-11-24T05:14:27Z, **merged 2026-11-24T09:02:48Z**, state closed) fixes Flex-tier speeds being billed at standard long-context rates — "about twice what Flex actually costs" — for requests above 272k input tokens. Reproduction in the PR body: `digitalocean/openai-gpt-5.4-flex` at 300,000 uncached input tokens recorded **$1.5225** before the fix vs **$0.76125** after (bundled Flex+long-context prices $2.50 in / $0.25 cache read / $11.25 out per M). Companion PR #65861 (merged 2026-11-23T18:41:06Z) made tier speeds use the tier's own prices (66 speed models, 43 DigitalOcean / 23 Bedrock).
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.2 ; https://github.com/anomalyco/opencode/pull/65984 ; https://github.com/anomalyco/opencode/pull/65861

- **OpenCode's new bytecode VM for "codemode"** was documented 2026-11-26T04:29Z (first in-window HN hit): codemode programs are compiled to bytecode and run on a small stack machine whose state (frames, registers, heap, pending promises) lives in plain objects, so a run can be **suspended, written out as bytes and resumed later in the same or another process** — pause, step one instruction at a time, fork, and hand off to another tab. This replaces the previous tree-walking interpreter, where a run was "a fiber you can only wait on or kill."
  Source: https://jamesbox.exe.xyz/vmblog/ (capture `tmp/2026-11-27/releases/opencode_vm.html`)

- **GitHub Copilot CLI 1.0.116 stable shipped 2026-11-25T17:03:13Z** (npm 17:02Z) — the carry-forward question resolves as **yes, 1.0.116 is stable** (npm `latest` = 1.0.116; `prerelease` has since moved to 1.0.117-5). Its **MCP-hardening notes verified from the release body**: (a) *"Warn when a plugin and a standalone MCP server connect to the same endpoint, and show how to disable one in /mcp"* (the **duplicate-endpoint warning**); (b) *"Prevent repeated sign-in prompts when multiple CLI sessions refresh access to the same server"* (the **repeated sign-in prompts** fix); (c) *"Load workspace MCP servers from `.mcp.json` and `.github/mcp.json` even when those files contain comments or trailing commas"* (the **.mcp.json with comments/trailing commas** fix); plus a **build-time JSON Schema for extension manifests**, *"Jump to latest"* in the fullscreen timeline, context-size selection in ACP-compatible editors, and env vars for every process Copilot starts (shell commands, local LSP and MCP servers, hooks, extensions). Notes (a)–(c) first appear in the 1.0.116-0/-1/-2 prereleases and roll into the stable.
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.116 ; https://registry.npmjs.org/@github%2fcopilot

- **Goose v1.61.0 (2026-11-25T03:31:49Z) and v1.61.1 (2026-11-26T00:09:20Z GitHub / 00:42:06Z Atom)** were the only Goose releases near the window, plus `oi-kit-v0.1.0-alpha.16` (2026-11-25T04:38:40Z). v1.61.0 features: show the provider before the model on the model button, **Gemini 4 Neon added to the model catalog**, **treat all headers as secret in `mcpServers` configs over ACP**, MCP extension operation for goose-agent, **import MCP's `server.json` format into goose config**, compaction operation for goose-agent, and declarative `llmman` (Ollama-compatible) and `amazee.ai` providers. v1.61.1 is a fix release: drop tool-approval state from imported sessions to prevent automatic tool execution on load, drop recipe retry/values and container/provider session IDs on import, remove recipe re-rendering on load/fork, and remove dotenv from the desktop app. The `@block/goose` npm package now 404s (distribution moved); `block/goose`/`aaif-goose/goose` GitHub releases remain the source of truth.
  Source: https://github.com/block/goose/releases/tag/v1.61.1 ; https://github.com/block/goose/releases/tag/v1.61.0 ; https://github.com/aaif-goose/goose/releases.atom

- **Coder published maintenance/patch releases** `v2.37.15` (2026-11-25T18:27:16Z), `v2.34.22` (18:38:48Z), `v2.29.30` (18:50:36Z) and `v2.38.11` (2026-11-25T00:01:09Z) across supported version lines, plus `v2.39.5` (2026-11-24T23:27:27Z) on the newest line. Shared fixes: **require a setup token to create the first user on a tunnel**, normalize repeated slashes before the CSRF exemption check, let only one request create the first user, and reject glob characters in the SSH hostname prefix.
  Source: https://github.com/coder/coder/releases

- **Anthropic's Claude Code Action published `v1.0.290` (2026-11-25T01:35:12Z)** — a single change: restore `GITHUB_OUTPUT` when the session ends (PR #2121).
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.290

- **Anthropic IPO / ANT market state:** the IPO **closed at $83.00 per share** — an aggregate of **1,127,000,000 Class A shares** including full exercise of the underwriters' option for an additional 147,000,000 shares (1,103,351,354 sold by Anthropic, 23,648,646 by selling stockholders), announced **2026-11-20**. The last US trading session before this window closed at **2026-11-25 at $82.79 (+1.08%, +$0.89)** on volume 293,740,400 (Nasdaq) — open $77.93, high $85.92, **low $73.85, a new 52-week low intraday**; after-hours $84.25 (+1.76%). Prior closes: $81.905 (11-24), $87.64 (11-23), $88.91 (11-20), $97.17 (11-19, volume 857M). Market cap ~$1.094T, P/E negative (-9.05), TTM revenue $35.282B, shares out 13.22B. The only Anthropic 8-K on EDGAR is **ant-20261119** (event date 2026-11-19, CIK 0002130357, Delaware, file no. 001-43542) — pre-window, nothing dated 11-26/27.
  Source: https://www.anthropic.com/news/anthropic-announces-closing-of-initial-public-offering (capture `tmp/2026-11-26/releases/an_ipo-close.html`) ; https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-19&todate=2026-11-27&limit=10 ; https://www.sec.gov/Archives/edgar/data/2130357/000213035726000040/ant-20261119.htm

- **Anthropic's "Skills over MCP" + public beta + Tasks/Elicitation GA** and **Claude Ship** were already captured by the prior cycle (VentureBeat 2026-11-25T23:04Z; Dataconomy 2026-11-26T13:03Z re-report) — **not novel** to this window, only re-reported.
  Source: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

- **Claude Code cost observability was already first-party before this window**: `/cost`, `$.session.usage()`, `--max-budget-usd` and per-subagent cost/token accounting exist in the CLI, and `/usage` shows session/weekly limit bars plus "spend for today, this week and this month" for Claude Apps Gateway developers. **No new first-party cost-observability feature landed in this window** — the only new cost/pricing work was OpenCode's long-context tier pricing above.
  Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

- **Anthropic shipped "Turn artifacts into Mac and Windows apps" (2026-11-24)** — the *"install as app"* beta: an installed artifact gets its own icon and window, can send notifications or add menu-bar/system-tray items, uses per-app permissions the user grants, can use Claude and the user's connectors, auto-updates when the underlying artifact is edited, and its requests count against the plan's usage limits. Explicitly on the **free plan** per press coverage.
  Source: https://claude.com/resources/articles/turn-artifacts-into-mac-and-windows-apps (capture `tmp/2026-11-26/releases/install_as_app.html`)

- **Anthropic shipped "Linked billing on the Claude Platform" (2026-11-17, beta)** — third-party platforms (coding agents, workflow automation tools) can let end customers pay for Claude API usage **without sharing an API key**: customers link their Claude Platform org, keep their own billing and set their own spend limits, approve each platform and can unlink at any time; platforms see per-customer request count, token usage and models used. Relevant to agentic-CLI distribution (no key custody for platforms).
  Source: https://claude.com/resources/articles/linked-billing-on-claude-platform (capture `tmp/2026-11-27/releases/art_linked-billing-on-claude-platform.html`)

- **Anthropic published a KPMG perspective piece (2026-11-23, 9 min read)** with KPMG US Vice Chair **Todd Lohr** (Head of Client Technology & Innovation) on adopting frontier AI while holding clients' most sensitive data, and where **Enterprise Frontier Safeguards** fit. KPMG is described as >276,000 employees across 138 countries.
  Source: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data (capture `tmp/2026-11-27/releases/art_kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data.html`)

- **Together AI's inference-side storylines are all pre-window but new to this knowledge base** and worth carrying: **"Polymorphic Inference: self-tuning inference for open models"** (2026-11-04, authors Simran Arora, SVP of Research AI Systems, and Dan Fu, Founding SVP of Research) describes *"the world's first production-scale recursive self-improvement (RSI) inference system"* across 40+ production models, plus the **Together Compiler** (continuous compilation for AI inference); **"Together Link: frontier-quality open models in the harness you already use"** (2026-10-05) routes open models (Kimi K3, GLM 5.3) into Claude Code / Codex / OpenCode for **>50% lower spend**; and two adjacent 11-24/11-25 posts — *"preemptible compute: the same compute, half the price"* and *"Introducing Hurdle: Run agent evals on your API, skills, and docs"*. Together also disclosed a **security event: prompt leakage for requests in June and July of 2026** (2026-11-21).
  Source: https://www.together.ai/blog/polymorphic-inference (capture `tmp/2026-11-26/releases/tl_polymorphic-inference.html`) ; https://www.together.ai/blog/together-link-frontier-quality-open-models-in-the-harness-you-already-use ; https://www.together.ai/blog (RSS capture `tmp/2026-11-26/releases/together_rss.xml`)

---

## Verified negatives

- **Claude Code**: no release in window — checked npm dist-tags/publish times for `@anthropic-ai/claude-code` (last publish `2.1.332`, 2026-11-24T22:06:38Z; `stable` = 2.1.326), `api.github.com/repos/anthropics/claude-code/releases` (last `v2.1.332`, 2026-11-25T01:32:14Z) and `.../tags` (newest `v2.1.332`).
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code ; https://api.github.com/repos/anthropics/claude-code/releases?per_page=15

- **Gemini CLI**: no release in window — npm `@google/gemini-cli` `latest` still `0.71.1` (2026-11-24T03:57:09Z), `preview` `0.72.0-preview.0` (2026-11-24T00:38:51Z), `nightly` still `0.71.0-nightly.20261124.gaafdfdfb5` (2026-11-24T01:19:27Z); **no `nightly.20261125/26/27` exists**, so the nightly line has been stalled for 3 days. GitHub `google-gemini/gemini-cli` releases (15 in the capture) also end at `v0.71.1` / `v0.72.0-preview.0`.
  Source: https://registry.npmjs.org/@google%2fgemini-cli ; https://api.github.com/repos/google-gemini/gemini-cli/releases?per_page=8

- **OpenAI Codex stable**: no `0.174.0` stable in window — npm `@openai/codex` `latest`/`stable` remains `0.172.0` (2026-11-24T00:03:55Z); only alphas `0.174.0-alpha.6` (2026-11-25T19:41Z), `-alpha.7` (2026-11-26T04:49Z) and `-alpha.8` (2026-11-26T22:05Z) shipped; `alpha` dist-tag = 0.174.0-alpha.8.
  Source: https://registry.npmjs.org/@openai%2fcodex

- **No GitHub advisory at all was published in the 2026-11-26/27 window** — the most recent advisories in the global feed are dated **2026-11-25T22:54:30Z** (TastyIgniter path traversal, GHSA-rj59-9f77-mvg5) and earlier. **No second MCP-bridge / persisted-injection class advisory** — the prior `ruflo` MCP-bridge unauthenticated RCE (GHSA-c4hm-4h84-2cf3 / CVE-2026-59726, 2026-11-24T21:01:10Z) remains the only one, and the remaining 11-25 items (TastyIgniter RCE/SSTI/XSS/path-traversal, `fulgur` DoS, `livewire-powergrid` SQLi, `laradocs` command injection, `@waline/client` stored XSS) are not agentic-CLI relevant.
  Source: https://api.github.com/advisories?per_page=50&sort=published&direction=desc ; https://api.github.com/advisories?ecosystem=npm

- **Claude Code repository advisories**: 36 advisories returned; the newest is GHSA-v234-4jrq-mgg6 (2026-09-25, Claude Desktop Cowork file-open command execution) — **none in window**.
  Source: https://api.github.com/repos/anthropics/claude-code/security-advisories?per_page=50

- **Anthropic blog/articles**: no new Anthropic article published on 2026-11-26 or 2026-11-27 — the `claude.com` articles index captured 2026-11-27T01:30Z (591,634 bytes) lists no article dated later than 2026-11-24; the two "new-looking" links (`linked-billing-on-claude-platform` = 2026-11-17, `kpmg-todd-lohr-on-ai…` = 2026-11-23) are older publications. The Anthropic newsroom index carries no announcement dated after 2026-11-20.
  Source: https://claude.com/resources/articles ; https://www.anthropic.com/news

- **No Anthropic 8-K / new IPO filing for 2026-11-26/27**: the only Anthropic PBC 8-K on EDGAR is ant-20261119 (event date 2026-11-19). The EDGAR company-search Atom feed returns HTTP 200 but only lists funds/entities whose *name* contains "Anthropic" — **no Anthropic PBC issuer filings appear**, and the daily-index route has failed for 4 cycles running, so this is a partial access gap rather than a fully verified absence.
  Source: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=anthropic&type=&dateb=&owner=include&count=40&output=atom

- **No US equity trading session on 2026-11-26**: Thanksgiving Day (4th Thursday of November) — Nasdaq historical and CNBC quote both show the last ANT session as 2026-11-25, so no 11-26 close exists to report.
  Source: https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-19&todate=2026-11-27&limit=10

- **No `github.blog` post dated 2026-11-26 or 2026-11-27** in the captured homepage (dated posts present run 2026-11-05 → 2026-11-25).
  Source: https://github.blog/

---

## Access gaps / errors

- **Anthropic's Rust-migration engineering post**: the primary anthropic.com URL could not be resolved — `https://www.anthropic.com/engineering/migrating-our-messages-api-to-rust` (and the `/news` and `/research` variants) return **HTTP 404**; the captured `rust_post.html` is literally a "Not Found \ Anthropic" page. The Google News RSS redirect is the only locatable reference, so the post is first-party-attributed but URL-unresolved, and the 70%-CPU figure is second-party reported.
  Source: https://news.google.com/rss/search?q=%22Migrating+our+Messages+API+to+Rust%22&hl=en-US&gl=US&ceid=US:en
- **`sourcegraph/amp` GitHub repo**: `https://api.github.com/repos/sourcegraph/amp/releases` returns **HTTP 404** (both `gh_amp.json` and `gh_sourcegraph_amp.json` are 103-byte "Not Found" bodies) — Amp's public GitHub release path is unavailable; the npm package `@sourcegraph/amp` was used instead (single-executable builds roughly every 4 hours).
  Source: https://api.github.com/repos/sourcegraph/amp/releases ; https://registry.npmjs.org/@sourcegraph%2famp
- **`@block/goose` npm package**: **HTTP 404** — Goose is no longer distributed under that npm name; GitHub releases used instead.
  Source: https://registry.npmjs.org/@block%2fgoose ; https://github.com/block/goose/releases
- **EDGAR issuer lookup for Anthropic PBC**: the company-search Atom feed returned HTTP 200 but only lists funds/entities whose *name* contains "Anthropic" (e.g. "Anthropic Capital Fund, LP", "Anthropic - A SERIES OF AURUM VP FUND LLC") — **no Anthropic PBC issuer filings**, and the daily-index route has failed for 4 cycles running. The 8-K check therefore rests on the direct EDGAR Archives hit (ant-20261119) rather than a complete index sweep.
  Source: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=anthropic&type=&dateb=&owner=include&count=40&output=atom
- **GitHub blog article "Context Compaction Security: How Summaries Hijack Agent Permissions"**: the canonical `github.blog` permalink was not recovered; the 2026-11-27 homepage capture contains no such slug and no 11-26/11-27 dated post. Only the Google News redirect link is available. Marked `[UNVERIFIED]`.
  Source: https://news.google.com/rss/search?q=%22Context+Compaction+Security%22&hl=en-US&gl=US&ceid=US:en
- **Cursor "Codex App v26.1120" desktop build**: no matching release tag found in `openai/codex` (only `rust-v*` tags); the desktop version string rests on a single secondary report. Marked `[REPORTED] / [UNVERIFIED]`.
  Source: https://news.google.com/rss/search?q=%22Codex+App%22+v26.1120&hl=en-US&gl=US&ceid=US:en ; https://api.github.com/repos/openai/codex/releases?per_page=15
- **Two Together AI blog URLs 404**: `t_introducing-together-link-run-open-models-inside-the-harness-you-already-use.html` and `t_introducing-polymorphic-inference-starting-with-together-compiler.html` are byte-identical 404 pages ("Not Found" / "404 Page not found"). The real content was recovered from `tl_polymorphic-inference.html` and `tl_together-link-frontier-quality-open-models-in-the-harness-you-already-use.html`.
  Source: https://www.together.ai/blog/
- **GitHub API rate limiting hit during the 11-26 cycle**: `cl.json` and `cp.json` both return `{"message":"API rate limit exceeded for 89.12.112.24."}` — several per-repo lookups in that cycle could not be completed and were re-fetched on 11-27.
  Source: https://api.github.com/rate_limit
- **`web_search` remains unusable** in this environment (DuckDuckGo bot-detection challenge) — all findings were gathered via `curl` against primary endpoints and Google News RSS / HN Algolia APIs.

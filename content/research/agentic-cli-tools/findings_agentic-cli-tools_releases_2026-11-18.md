# Findings — Releases — 2026-11-18

**Window:** 2026-11-16T01:28:00Z → 2026-11-18T01:28:00Z (48h; prior cycle ran Nov 16, so all Nov 17 material is NEW).
**Retrieval:** `curl` via `exec` on primary endpoints (npm registry, GitHub Releases API, OSV, sitemaps, RSS/HTML changelogs). `web_fetch` **not used** (0 calls). Raw captures in `tmp/2026-11-18/`.
**Search tally:** 3 `web_search` calls (cap 4). ~70 curl requests.

**Headline:** The Claude Code documentation freeze is **OVER** — the docs sitemap went from 0 touched URLs (Nov 15–16) to **1,136 URLs touched** in-window, including 9+ brand-new English doc pages never seen in this project. The thaw lands inside the Anthropic IPO pricing window (S-1 filed 2026-10-26; pricing 2026-11-18; Nasdaq debut 2026-11-19).

---

## Releases by tool

### Claude Code — 2 stable releases (VERIFIED, full changelog bodies)
**v2.1.326** — GitHub `2026-11-16T22:11:05Z`; npm `2026-11-16T18:43:39.005Z`. Body 48 KB.
- **Code Mode now works with agent teams enabled**; sessions with teams on start in Code Mode.
- Startup warning for malformed `--allowedTools`/`--disallowedTools`/`--tools` rules; message explaining why MCP servers stop loading when an admin adds `managed-mcp.json` mid-session; `/status` row showing when the provider or `DISABLE_TELEMETRY` disables features; Ctrl+O shows hidden startup notices; `OTEL_RESOURCE_INCLUDE_HOST` for `host.name`/`host.id`.
- Fixes: Bash delete/overwrite commands no longer miscounted as search/read; misleading "Dangerous rm operation" warning; background sessions losing the LLM gateway after a crash; background service killing the user's own processes on PID reuse; settings nested >64 levels no longer crash the CLI; managed-settings PreToolUse hooks now emit OTel `tool_decision` events.
Source: https://api.github.com/repos/anthropics/claude-code/releases
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

**v2.1.327** — GitHub `2026-11-17T23:17:45Z`; npm `2026-11-17T20:33:19.976Z`. Body 22.8 KB.
- Confirmation before `/install-github-app` changes a repository.
- **`claude mcp add-json <name> -`** reads server JSON from stdin so tokens stay off the command line.
- `/status` now lists broken agent/skill/command/output-style files, keybinding errors, unavailable sandbox, ignored permission settings, hook matchers that never match.
- `attributionProject` setting names a session's billing group for Claude apps gateways; `x-claude-code-managed-settings-checksum` added to gateway hint headers.
- `/tui classic` renames the non-fullscreen renderer (`/tui default` still works).
- Fixes: Remote Control worktree stop no longer deletes a session's git-ignored files (e.g. `.env`); project-scope `claude mcp add/remove` no longer deletes other `.mcp.json` keys (e.g. `$schema`); `/export` asks before overwriting; WebFetch refuses URLs >2,000 chars; only the first 100 `@` mentions resolved; agent teammates compact on their own model and limit.
Source: https://api.github.com/repos/anthropics/claude-code/releases
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

### Claude Code Agent SDK
`0.3.326` @ `2026-11-16T18:44:36.573Z`; `0.3.327` @ `2026-11-17T20:35:19.429Z`. dist-tags `latest`/`next` = `0.3.327`. 347 versions total.
Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

### Claude Code GitHub Action — 4 releases
`v1.0.277` @ `2026-11-16T19:05:07Z`; `v1.0.278` @ `2026-11-16T22:14:53Z` (read run-step script whole, disable Bun transpiler cache); `v1.0.279` @ `2026-11-17T20:51:26Z` (use default branch config on PRs from authors without write access; skip images when a description/comment is edited); `v1.0.280` @ `2026-11-17T23:20:15Z` (changelog-only body).
Source: https://api.github.com/repos/anthropics/claude-code-action/releases

### OpenCode — v2.3.1 stable + v1→v2 upgrade path (VERIFIED, 19.5 KB body)
**v2.3.1** @ `2026-11-18T00:17:57Z` (12 min before window close).
- **Timed-Out Shell Commands Keep Running** — a command still running at timeout moves to background instead of being killed; foreground `timeout: 0` now means 120 s; `shell_timeout_background` flag removed (old configs still load).
- **Compaction Without the Wait** — background compaction on by default (`compaction.background: false` to disable); `experimental.background_compaction` removed; unused background summaries still cost tokens.
- **GPT 6.2 with ChatGPT Sign-In** — GPT 6.2 Sol and Astra + fast variants in the ChatGPT model list.
- OpenCode again reads `CLAUDE.md` where no `AGENTS.md` exists, falling back to `~/.claude/CLAUDE.md`; `OPENCODE_DISABLE_CLAUDE_CODE` / `..._PROMPT` to skip.
- `websearch` returns a flat list of `{url, title, content, published}`.
- **Experimental schedules are now "automations"** (behind `automations` flag): time/interval/cron/MCP-event triggers that send a prompt or run a Code Mode program to decide whether to send one; `/automation` and `automation_*` tools.
- Code Mode: structured `read` result, Node `Buffer`, `search("issues")` shorthand, tool summaries up to 500 chars.
**v1.19.6** @ `2026-11-17T07:21:32Z` — OpenCode 1 offers the upgrade to OpenCode 2.0; "OpenCode 2 downloads in the background and installs only when you choose." **process-daemon-v0.6.0** @ `2026-11-16T23:36:04Z` — opencode-pty 0.6.0 (protocol 9).
Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.1
Source: https://registry.npmjs.org/opencode-ai

### goose — repo moved to `aaif-goose/goose`; 3 releases (all in-window)
`https://api.github.com/repos/block/goose` now returns **301 → repositories/846698999**, and every release URL points at **`https://github.com/aaif-goose/goose/releases/tag/...`** with PR links to `aaif-goose/goose`. (goose was donated by Block to the Agentic AI Foundation / Linux Foundation, announced 2026-04-07.)
- **v1.59.2** @ `2026-11-16T05:26:30Z` — Databricks provider drops thinking blocks bound to a different prefix (#13551).
- **v1.60.0** @ `2026-11-17T23:08:54Z` — **SkillOperation and drop the Skills extension** (#13574); executable commands + `SlashCommandOperation` in oi-kit (#13533); bang-command operation (#13535); steering operation (#13502); Dutch translation; **Cortecs** (#12617) and **Onysoft** declarative providers (#13582); reusable turn limits in GDK (#13194). Fixes: validate cron before changing schedules (#13599), `tool_choice: auto` on OpenAI (#12716), load skill support files under symlinked dirs (#13531).
- **v1.60.1** @ `2026-11-18T01:21:19Z` — body **empty** (0 chars), published 7 min before window close.
Source: https://api.github.com/repos/aaif-goose/goose/releases
Source: https://goose-docs.ai/blog/2026/04/07/goose-moves-to-aaif/

### Qwen Code — v0.28.0 stable + preview + desktop + SDK (VERIFIED)
- **v0.28.0** @ `2026-11-17T11:17:50Z` (npm `2026-11-17T12:10:30.660Z`), body 16.2 KB, "No known breaking changes": web-shell sidebar workspace filter; **DingTalk adapter** on the managed channel path; ACP routes live/read-only Agent Host sessions through the shared tool batch; loop switches can be forced *off*; **managed-agent external workspace execution**; `verify-pr` boundary declaration + watch state; channels digest bound-PR comment backlog after downtime; **headless sessions and Ink TUI on the shared agent loop by default**.
- **v0.28.1-preview.0** @ `2026-11-17T18:36:36Z`; **desktop-v0.28.0** @ `2026-11-17T12:31:07Z`; **sdk-typescript-v0.1.35** @ `2026-11-17T12:07:45Z` (bundles CLI 0.28.0); nightly `0.27.4-nightly.20261116.eb3a599ef3` @ `2026-11-16T22:32:52Z`.
Source: https://api.github.com/repos/QwenLM/qwen-code/releases
Source: https://registry.npmjs.org/@qwen-code/qwen-code

### Kilo Code — VS Code v7.8.30 + JetBrains rc.8
- **v7.8.30** @ `2026-11-16T22:12:54Z` (npm `2026-11-16T22:16:47.997Z`; GitHub flags `prerelease=true` while npm `latest` stays `7.8.27` and npm `rc` = `7.8.30`). **Retires the Mercury Edit 2 autocomplete models and Next Edit — Codestral is now the default autocomplete model**; `client.kilo.edit` removed from the SDK. CLI exposes hosted-workspace change snapshots, revision-fenced per-file reads, explicit refresh, verified linked-PR diffs via Session Host.
- **jetbrains/v7.2.1-rc.8** @ `2026-11-17T14:57:09Z` (successor to rc.7): cloud sessions show PR status for a hosted workspace (partial/unavailable distinguished from "no PR"); cloud sessions can review workspace changes (committed / uncommitted / PR-published diffs shown separately, revision-checked reads, verified linked PR patches in the native diff editor); bundled Kilo Core CLI → 7.8.30; markdown libs → 0.32.0.
- npm `kilo-v2` = `0.0.0-v2-141` @ `2026-11-17T16:40:08.336Z`.
Source: https://api.github.com/repos/Kilo-Org/kilocode/releases
Source: https://registry.npmjs.org/@kilocode/cli

### OpenAI Codex CLI — new stable 0.169.1 + 6 stub alphas
- **rust-v0.169.1 / npm `0.169.1` @ `2026-11-17T22:26:21.610Z`** — first stable since 0.169.0 (Nov 13). GitHub body: "## Chores — No verified release highlights available." Platform packages `0.169.1-{linux,darwin,win32}-{x64,arm64}` @ `2026-11-17T22:28–23:20Z`.
- **Six new pre-releases, all content-free bodies** (literal `Release <version>`): `0.170.0-alpha.4.1` @ `2026-11-17T02:19:17Z`; `0.171.0-alpha.8` @ `2026-11-16T16:25:46Z`; `.9` @ `2026-11-16T19:13:19Z`; `.10` @ `2026-11-16T23:32:43Z`; `.11` @ `2026-11-17T04:24:57Z`; `.12` @ `2026-11-17T14:26:49Z`. npm dist-tag `alpha` = `0.171.0-alpha.12`.
Source: https://api.github.com/repos/openai/codex/releases
Source: https://registry.npmjs.org/@openai/codex

### GitHub Copilot CLI
**v1.0.113** @ `2026-11-17T16:35:43Z` — admins can disable built-in Browser Use via managed setting `features.browserUse`, including in running sessions. Prereleases: `v1.0.113-0` @ `2026-11-16T20:38:32Z` ("Fixes and changes"), `v1.0.113-1` @ `2026-11-17T03:48:10Z`, `v1.0.114-0` @ `2026-11-17T22:57:49Z`.
Source: https://api.github.com/repos/github/copilot-cli/releases

### Charm Crush — nightly only
`nightly` @ `2026-11-18T00:51:10Z` (body = cosign verification instructions only). Last stable remains **v0.101.0 @ `2026-11-12T16:02:35Z`**. No stable in window.
Source: https://api.github.com/repos/charmbracelet/crush/releases

### Amp (Sourcegraph) — dev builds only
`@sourcegraph/amp` latest `0.0.1794945632-gf6a800` @ `2026-11-17T20:32:46.490Z`; six dev builds on Nov 17 alone (00:30, 04:28, 08:25, 12:32, 16:32, 20:32). No tagged release.
Source: https://registry.npmjs.org/@sourcegraph/amp

### Company announcements
- **GitHub changelog, Nov 17 (Ignite cluster):** "GitHub Copilot CLI adds Microsoft Entra sign-in as a preview" (18:00:35Z); "MAI Code 2 and MAI Code 2 Flash in GitHub Copilot"; "GitHub Copilot in JetBrains, Ignite releases"; "Copilot code review: Adaptive effort, secret detection"; "GitHub Copilot Fusion updates"; "OpenAI's GPT-6.2 Astra and GPT-6.2 Sol now available" (20:20:29Z).
  Source: https://github.blog/changelog/feed/
- **OpenAI RSS, Nov 17:** "Introducing GPT-6.2 Astra and Sol" (17:45 GMT), "Introducing ChatGPT for Sales", "Strengthening NATO and allied cyber defenses with AI", "Astra for Law leads in legal intelligence", "Introducing OpenAI for Chile".
  Source: https://openai.com/news/rss.xml
- **Google dev blog, Nov 17:** "Read the EmbeddingGemma 2 technical report." (prior: "Gemini 4 Hydrogen: everyday coding and agentic workflows for developers", Nov 12).
  Source: https://blog.google/technology/developers/rss/

---

## Version / dist-tag table

| Tool | `latest` | Newest version + time | Other in-window tags |
|---|---|---|---|
| `@anthropic-ai/claude-code` | **2.1.327** @ 2026-11-17T20:33:19Z | 2.1.327 | `stable` = **2.1.311** (frozen since 2026-10-26T19:47:57Z), `next` = 2.1.327; 565 versions |
| `@anthropic-ai/claude-agent-sdk` | 0.3.327 @ 2026-11-17T20:35:19Z | 0.3.327 | `next` = 0.3.327; 347 versions |
| `@openai/codex` | 0.169.1 @ 2026-11-17T22:26:21Z | 0.169.1 | `alpha` = 0.171.0-alpha.12 @ 2026-11-17T14:36:00Z; 5,982 versions |
| `opencode-ai` | 1.19.6 @ 2026-11-17T07:22:20Z | 1.19.6 | `dev` = 0.0.0-dev-202611170722; 12,268 versions. **npm `latest` is still 1.x though GitHub `v2.3.1` shipped in-window** |
| `@qwen-code/qwen-code` | 0.28.0 @ 2026-11-17T12:10:30Z | 0.28.0 | `preview` = 0.28.1-preview.0 @ 19:31:23Z; `nightly` = 0.27.4-nightly.20261116 @ 2026-11-16T22:56:02Z; 731 versions |
| `@kilocode/cli` | 7.8.27 (unchanged) | 7.8.30 @ 2026-11-16T22:16:47Z | `rc` = 7.8.30; `kilo-v2` = 0.0.0-v2-141 @ 2026-11-17T16:40:08Z |
| `@google/gemini-cli` | **0.68.0 @ 2026-11-10T21:22:49Z (unchanged)** | 0.68.0 | `preview` = 0.69.0-preview.0; `nightly` = 0.67.0-nightly.20261104; `false` = 0.42.0-nightly.20260512; 809 versions |
| `@sourcegraph/amp` | 0.0.1794945632-gf6a800 @ 2026-11-17T20:32:46Z | same | `next` = 0.0.1778732631-gc5875c-singleexe |
| `goose` (GitHub) | v1.60.1 @ 2026-11-18T01:21:19Z | v1.60.1 | v1.60.0 @ 2026-11-17T23:08:54Z; v1.59.2 @ 2026-11-16T05:26:30Z; repo now `aaif-goose/goose` |
| `charmbracelet/crush` | v0.101.0 @ 2026-11-12T16:02:35Z (unchanged) | nightly @ 2026-11-18T00:51:10Z | no stable in window |
| `claude-code-action` | v1.0.280 @ 2026-11-17T23:20:15Z | same | v1.0.279, v1.0.278, v1.0.277 |
| `github/copilot-cli` | v1.0.113 @ 2026-11-17T16:35:43Z | same | v1.0.114-0, v1.0.113-1, v1.0.113-0 |

---

## Security advisories

**No new advisory against any agentic CLI tool in the window.** Counts identical to the Nov 16 baseline.

| Package | OSV total | HIGH | Newest advisory |
|---|---|---|---|
| `@anthropic-ai/claude-code` | **30** | **24** | `GHSA-5xjx-9qx6-jcrv` (2026-11-09) TOCTOU race in Edit tool → file writes outside the workspace |
| `@openai/codex` | 2 | 1 | `GHSA-xrxf-jgv3-qmrm` (2026-04-14, CRITICAL) code execution via malicious MCP config |
| `@google/gemini-cli` | 1 | 0 | `GHSA-wpqr-6v78-jr5g` (2026-04-24, CRITICAL) RCE via workspace-trust + tool-allowlist bypass |
| `@qwen-code/qwen-code` | 0 | 0 | — |
| `@sourcegraph/amp` | 0 | 0 | — |

Source: https://api.osv.dev/v1/query

**Security-relevant fixes shipped without advisory IDs:** Claude Code **v2.1.325** (pre-window, Nov 13) "Fixed a security issue in how zstd-compressed responses are decoded"; v2.1.327 added the `/install-github-app` repository-change confirmation and fixed startup refusal when `https_proxy`/`HTTPS_PROXY` is a bare `host:port`.
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

**Anthropic status incidents in-window** (operational, not advisories): `2026-11-18T01:13:15Z` investigating, minor — elevated errors affecting the Google Docs connector; `2026-11-17T18:55:53Z` resolved major — some users unable to sign in with Apple on claude.ai and the Claude iOS app; `2026-11-16T15:10:15Z` identified minor — Claude unable to join meetings; `2026-11-16T07:49:55Z` resolved major — elevated errors for Claude Sonnet 5.5 and Claude Fable 5.2.
Source: https://status.anthropic.com/api/v2/incidents.json

---

## Docs & changelog churn

### Claude Code docs sitemap — freeze is OVER
- `https://code.claude.com/docs/sitemap.xml` (HTTP 200). **2,437 URLs total — same count as the Nov 16 baseline, so no pages added or removed.**
- **1,136 URLs have `lastmod` inside the window; 691 have `lastmod` ≥ 2026-11-17.** Newest: `2026-11-18T01:21:28.096Z` (setup, settings-reference, desktop, admin-setup), `2026-11-17T23:34:53.419Z` (zh-CN/zh-TW locale trees), `2026-11-17T23:23:09.546Z` (`/docs/en/changelog`), `2026-11-17T19:06:59.885Z`, `2026-11-17T18:21:44.089Z`, `2026-11-17T16:24:54.872Z`, `2026-11-16T18:36:10.807Z`.
- **93 English `/docs/en/` pages touched**, in ~30 timestamp batches across both days — normal docs cadence, not a one-off republish.
- **New English slugs (grep count 0 in the prior cycle's file AND in `cumulative_findings.md`):** `agent-teams` (2026-11-17T19:06:59Z), `managed-mcp` (same batch), `plugins/host-marketplace`, `plugins/manifest-reference`, `plugins/marketplace-reference`, `plugins/publish`, `plugins/troubleshooting` (all 2026-11-17T16:24:54Z), `plugin-evals` (2026-11-17T02:30:54Z), `code-review-costs` (2026-11-17T00:11:29Z), `desktop-ios-simulator` (2026-11-16T21:17:02Z), `claude-apps-gateway` + `claude-apps-gateway-config` (2026-11-17T02:32:06Z), `self-hosted-environments-testing` (2026-11-17T02:26:20Z), `data-usage` (2026-11-17T18:11:59Z), plus a full `agent-sdk/*` tree (agent-loop, configuration, cost-tracking, quickstart, skills, streaming-output, streaming-vs-single-mode, todo-tracking, troubleshooting, secure-deployment, modifying-system-prompts, subagents).
- `/docs/en/changelog` touched `2026-11-17T23:23:09Z`, minutes after v2.1.327 published — the changelog doc page is maintained again.
Source: https://code.claude.com/docs/sitemap.xml

### Other changelogs
- **Claude Code release notes** `https://docs.claude.com/en/release-notes/claude-code` (HTTP 200, 355 KB) lists up to **2.1.327** — in sync with npm.
  Source: https://docs.claude.com/en/release-notes/claude-code
- **Cursor — changelog STILL FROZEN at Nov 6.** `https://cursor.com/changelog` (HTTP 200) contains only `Nov 5, 2026` and `Nov 6, 2026`. `https://cursor.com/changelog/api/rss` (HTTP 200) has 0 parseable `<item>` elements (parse gap). `https://cursor.com/changelog/cli` → **HTTP 404** (was 200 last cycle). `https://docs.cursor.com/en/cli/changelog` → HTTP 200 but JS-rendered; no version strings greppable.
  Source: https://cursor.com/changelog
- **Cursor docs DID churn**: `https://cursor.com/docs/sitemap.xml` newest `lastmod` `2026-11-17T23:35:12.508Z` and `2026-11-17T23:34:32.626Z`.
  Source: https://cursor.com/docs/sitemap.xml
- **Anthropic newsroom — sitemap re-publish, no new posts.** `https://www.anthropic.com/sitemap.xml` (591 entries) newest `lastmod` now `2026-11-17T19:17:29.446Z` (was `2026-11-13T22:37:05.676Z`); 13 entries re-touched, incl. `/responsible-scaling-policy` (2026-11-17T19:17:29Z), `/research/formal-verification` (2026-11-17T17:03:42Z), `/research/building-strong-safety-evaluations` (2026-11-17T13:46:19Z), `/research/coordinated-vulnerability-disclosure-timelines` (2026-11-16T14:32:08Z), `/legal/linked-billing-terms` (2026-11-17T17:01:02Z). **All 8 re-touched `/news/*` slugs are OLD posts** (confirmed via `article:published_time`): advancing-claude-for-financial-services 2025-10-27, barclays-scales-claude 2026-10-01, canadian-ai-research 2026-07-14, christopher-stubbs-joins-long-term-benefit-trust 2026-10-21, claude-frontier-academy 2026-10-02, public-benefit-fund 2026-10-18, singapore-office-opening 2026-10-14, wellbeing-research-grants 2026-08-25. **No new Anthropic news post in the window.**
  Source: https://www.anthropic.com/sitemap.xml
- **Kilo Code changelog** `https://kilocode.ai/changelog` → **HTTP 404**; GitHub Releases API used instead.
  Source: https://api.github.com/repos/Kilo-Org/kilocode/releases

### IPO context
Anthropic filed its **S-1 on 2026-10-26**; the IPO is expected to **price the evening of Nov 18, 2026 and begin trading on Nasdaq Thursday, Nov 19** (Nasdaq Global Select Market). The last pre-listing hours coincide with the docs thaw and the Claude Code release surge.
Source: https://www.anthropic.com/news/s1-sec
Source: https://www.cnbc.com/2026/11/16/anthropic-ipo-date-price-range.html

---

## Open questions answered (yes/no + evidence)

1. **Claude Code stable version (was 2.1.311 on Nov 16)?** → **`stable` UNCHANGED; `latest` ADVANCED.** dist-tags now `{"stable":"2.1.311","latest":"2.1.327","next":"2.1.327"}`. Newest version **2.1.327** @ `2026-11-17T20:33:19.976Z`. Newest *stable-tagged* = **2.1.311** @ `2026-10-26T19:47:57.395Z` — the `stable` tag has not moved for **22 days / 16 releases** (2.1.312→2.1.327). This drift is **pre-existing**, not IPO-caused, and must not be reported as a new in-window event.
   Source: https://registry.npmjs.org/@anthropic-ai/claude-code
2. **Any Claude Code docs page touched Nov 16–18?** → **YES, massively.** 1,136 URLs touched in-window (691 on/after Nov 17), 93 English pages, 9+ genuinely new slugs. **The documentation freeze has ended.**
   Source: https://code.claude.com/docs/sitemap.xml
3. **Cursor changelog still frozen at Nov 6?** → **YES, still frozen.** Only Nov 5 and Nov 6 appear; no new entries. (Cursor's *docs* sitemap did churn Nov 17.)
   Source: https://cursor.com/changelog
4. **Codex alphas: real bodies or stubs? Any new stable?** → **Still stubs, but there IS a new stable.** All six new alphas have bodies that are the literal `Release <version>` string. A new **stable 0.169.1** shipped `2026-11-17T22:26:21Z` with body "## Chores — No verified release highlights available."
   Source: https://api.github.com/repos/openai/codex/releases
5. **goose: still no v1.59.2? Any release since Nov 16?** → **NO to both — v1.59.2 DOES exist**, plus two more: v1.59.2 @ `2026-11-16T05:26:30Z`, **v1.60.0** @ `2026-11-17T23:08:54Z`, v1.60.1 @ `2026-11-18T01:21:19Z`. Also the repo **moved from `block/goose` to `aaif-goose/goose`** (301 redirect; all release URLs updated) — a fact that invalidates the `block/goose` URL used in prior cycles.
   Source: https://api.github.com/repos/aaif-goose/goose/releases
6. **Gemini CLI 0.70-vs-0.67 package line split resolved?** → **NO.** No release of any kind since **v0.68.0 @ 2026-11-10T21:17:07Z**. dist-tags still `latest`=0.68.0, `preview`=0.69.0-preview.0 (Nov 10), `nightly`=0.67.0-nightly.20261104.g89e9d25d6 (Nov 4), `false`=0.42.0-nightly.20260512 (May 12). The gap is **still open and now 14 days stale** — gemini-cli is the quietest tracked tool in this window.
   Source: https://api.github.com/repos/google-gemini/gemini-cli/releases
   Source: https://registry.npmjs.org/@google/gemini-cli
7. **Any NEW security advisory in the window?** → **NO.** Claude Code still 30 advisories / 24 HIGH (baseline identical, newest 2026-11-09); Codex 2; Gemini CLI 1; Qwen Code 0; Amp 0. No GHSA published in the window for any tracked package.
   Source: https://api.osv.dev/v1/query
8. **Kilo Code JetBrains rc.7 — any successor?** → **YES: `jetbrains/v7.2.1-rc.8` @ `2026-11-17T14:57:09Z`**, adding cloud-session PR status and a cloud workspace-change review feature; bundled Kilo Core CLI → 7.8.30.
   Source: https://api.github.com/repos/Kilo-Org/kilocode/releases

---

## Access gaps / verified negatives

**Verified negatives (retrieved OK, nothing found):**
- No new Anthropic news post in the window (8 sitemap re-touches confirmed as old posts via `article:published_time`).
- No new OSV/GHSA advisory for any tracked agentic CLI package.
- Cursor changelog: no entry after Nov 6, 2026.
- Gemini CLI: no release since 0.68.0 (Nov 10); no 0.70.x package line exists.
- No stable Crush release (last v0.101.0, Nov 12) — nightly only.
- No releases for `cline/cline` (last v4.1.26, Oct 26), `continuedev/continue` (last Jun 19), `Aider-AI/aider` (last v0.86.0, **Aug 2025**), `zed-industries/zed` (last v1.28.1, Nov 11), `microsoft/vscode-copilot-chat` (last v0.43.0, Apr 7); `sst/opencode` redirects to `anomalyco/opencode`.
- No `@block/goose` npm package (404); npm `goose-cli` is a **different, abandoned package** last published 2025-09-21 (`3.25.0-a`) — goose ships via GitHub releases / Homebrew.

**Access gaps (unverified — do NOT read as "no activity"):**
- `https://www.anthropic.com/news/rss.xml` → HTTP 404 (sitemap used instead).
- `https://kilocode.ai/changelog` → HTTP 404 (GitHub Releases API used instead).
- `https://cursor.com/changelog/api/rss` → HTTP 200 but 0 parseable `<item>` elements.
- `https://cursor.com/changelog/cli` → HTTP 404 (was 200 last cycle — endpoint change, not a content finding).
- `https://docs.cursor.com/en/cli/changelog` → HTTP 200, JS-rendered, no version strings greppable.
- `https://platform.claude.com/docs/en/release-notes` → HTTP 200 but no date/version strings parsed.
- `https://api.github.com/repos/block/goose` → 301 (followed with `-L` to repo id 846698999).
- `google-gemini/gemini-cli-compaction` → HTTP 404 (no such repo).
- `https://block.github.io/goose/blog/` → previously 404; not retried (GitHub Releases used instead).

---

## New insights (each with Source: URL)

- **The Claude Code docs freeze broke exactly at the IPO boundary.** After two cycles of zero churn (Nov 15 = 0, Nov 16 = 0), 1,136 sitemap URLs were re-touched in 48 h. Watch whether churn continues after Nov 19.
  Source: https://code.claude.com/docs/sitemap.xml
- **Nine-plus brand-new Claude Code doc pages reveal an undocumented feature line**: `agent-teams`, `managed-mcp` (matches the v2.1.326 fix "administrator adds `managed-mcp.json`"), a **hosted plugin marketplace** (`plugins/host-marketplace` + `publish` + `marketplace-reference`), a **plugin evaluation harness** (`plugin-evals`), the **Claude apps gateway** (`claude-apps-gateway` + `-config`, matching v2.1.327's `attributionProject` billing-group setting and `CLAUDE_CODE_GATEWAY_HINT_HEADERS`), `code-review-costs`, `desktop-ios-simulator`, `self-hosted-environments-testing`, `data-usage`, and a full `agent-sdk/*` tree. Strongest evidence yet that agent teams / marketplace / managed-MCP are shipping, not just teased.
  Source: https://code.claude.com/docs/sitemap.xml
- **goose is now a Linux Foundation/AAIF project and Block's `block/goose` URL is dead** — prior cycles' references must migrate to `aaif-goose/goose`. goose v1.60.0 lands a **Skills extension** (`SkillOperation`), the same "Skills" concept Claude Code, Qwen Code and Crush are converging on.
  Source: https://api.github.com/repos/aaif-goose/goose/releases
  Source: https://goose-docs.ai/blog/2026/04/07/goose-moves-to-aaif/
- **GPT-6.2 (Sol + Astra) reached every agentic surface within ~24 h**: OpenAI announced it Nov 17 17:45 GMT, GitHub put it in Copilot the same evening, OpenCode v2.3.1 shipped "GPT 6.2 with ChatGPT Sign-In". Agentic CLIs now ship on the same day as the frontier model.
  Source: https://openai.com/news/rss.xml
  Source: https://github.blog/changelog/feed/
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.1
- **Background execution became the default, not a flag.** OpenCode v2.3.1 (timed-out shell commands move to background; background compaction on by default) and Claude Code v2.1.326 (background sessions survive gateway loss and PID reuse) converged in one release cycle.
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.1
  Source: https://api.github.com/repos/anthropics/claude-code/releases
- **npm `opencode-ai@latest` still points at the 1.x line though GitHub `v2.3.1` shipped in-window** — `latest` = 1.19.6, and the v1→v2 upgrade is a background download the user must opt into. Installing `@latest` today does **not** get v2.3.1. Registry/dist-tag gap worth correcting in the cumulative KB.
  Source: https://registry.npmjs.org/opencode-ai
  Source: https://github.com/anomalyco/opencode/releases
- **Qwen Code pushed hardest on enterprise IM**: DingTalk adapter on the managed channel path, managed-agent external workspace execution, headless + Ink TUI unified onto the shared agent loop.
  Source: https://api.github.com/repos/QwenLM/qwen-code/releases
- **Kilo Code retreated from its proprietary next-edit model** (v7.8.30): Mercury Edit 2 / Next Edit retired, Codestral now the default autocomplete model, `client.kilo.edit` removed from the SDK.
  Source: https://api.github.com/repos/Kilo-Org/kilocode/releases
- **Claude Code's `stable` npm dist-tag has been frozen at 2.1.311 since 2026-10-26 — 16 releases of drift.** Pre-existing, but every auto-updating consumer pinned to `stable` is 16 minor versions behind. Track as a standing risk, not a one-day event.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code
- **Cursor's docs churn while its changelog stays frozen** — docs sitemap `lastmod` activity Nov 17 23:34–23:35Z vs. a changelog ending Nov 6. Docs publication is the more honest signal of shipped work than the announcement feed.
  Source: https://cursor.com/docs/sitemap.xml
  Source: https://cursor.com/changelog
- **Codex CLI's release-notes pipeline still emits stubs for every alpha** (six builds, zero attributed features) while the stable shipped with "No verified release highlights available." That is a pipeline failure, not six content-free builds.
  Source: https://api.github.com/repos/openai/codex/releases

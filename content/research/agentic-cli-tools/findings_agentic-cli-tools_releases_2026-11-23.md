# Findings — Agentic CLI tools & desktop AI assistants: Releases / Features / Company Announcements
**Cycle date:** 2026-11-23 · **UTC window:** 2026-11-22T01:28:00Z → 2026-11-23T01:28:00Z
**Subtask:** 1 of 2 — tool releases, commands, features, company announcements
**Raw captures:** `tmp/2026-11-23/releases/` (npm packuments, GitHub release JSON, Atom feeds, RSS XML)
**Method:** `exec` + `curl` against npm registry, GitHub REST/Atom, and vendor feeds. `web_search` was skipped entirely (known bot-detection block).

---

## ⭐ Headline findings

### 1. RunPod's MCP server REMOVED the agent-NPS prompt injection — the fix shipped ~19 h after the community post
**This is the direct resolution of yesterday's lead story (r/ClaudeCode, 280 pts) and the carry-forward question "any new runpod-mcp version that drops the agent NPS survey?" → YES, two versions in one day, and the second removes it entirely.**

- **`@runpod/mcp-server@4.14.1`** — GitHub release published `2026-11-22T05:35:58Z`, npm publish `2026-11-22T05:38:03Z`. Changelog: *"The agent NPS request no longer tells agents to hide it from the user. The note on a creation result, the `rate_nps_score` description and the tool's reply now say the rating is optional, that the agent is free to tell its user about it, and that it should skip it when the user would rather not share feedback with Runpod."*
  Source: https://github.com/runpod/runpod-mcp/releases
- **`@runpod/mcp-server@4.15.0`** — GitHub release published `2026-11-22T06:17:40Z`, npm publish `2026-11-22T06:19:44Z`. Changelog (b9cd292): *"Remove the referral and NPS asks from the hosted server. `report_how_user_found_runpod` and `rate_nps_score` are no longer served, the `initialize` instructions no longer ask agents how their user found Runpod, and creation results carry only their own payload: no rating note, no creation count and no survey response sent to PostHog. `report_feedback`, `save_to_journal`, `ask_question` and `read_journal` are unchanged and stay voluntary."* For integrators of `@runpod/mcp-server/hosted`: the `hasAnswered` / `recordCreation` options of `handleMcpRequest` and the `promptReferral` / `nps` server options **were removed** (breaking for hosted integrators); `@runpod/mcp-server/alp` exports unchanged.
  Source: https://github.com/runpod/runpod-mcp/releases
  Source: https://registry.npmjs.org/@runpod/mcp-server
- **Package-name correction for carry-forward:** the npm package is **`@runpod/mcp-server`** (scoped). The unscoped name `runpod-mcp` returns **HTTP 404** on the npm registry and is not a valid probe.
  Source: https://registry.npmjs.org/runpod-mcp
- **Caveat:** the vulnerable behaviour was traced to the *hosted* server path (`@runpod/mcp-server/hosted`). Whether the `alp` path or any separately distributed bundle still carries the NPS tool was not independently verified this cycle — the changelog states `alp` exports are unchanged.

### 2. Qwen Code v0.28.4 shipped (CLI + Desktop) — Gemini 4 reasoning defaults, Web Shell artifact library, owner-private local state
- **`@qwen-code/qwen-code@0.28.4`** — npm publish `2026-11-22T12:28:27Z`; GitHub tag `v0.28.4` published `2026-11-22T12:04:21Z`. `latest` dist-tag moved `0.28.3 → 0.28.4`.
  Source: https://registry.npmjs.org/@qwen-code/qwen-code
  Source: https://github.com/QwenLM/qwen-code/releases
- **Qwen Code Desktop v0.28.4** — GitHub tag `desktop-v0.28.4` published `2026-11-22T12:52:42Z` (desktop is a separate release channel, as in prior cycles).
  Source: https://github.com/QwenLM/qwen-code/releases
- **Highlighted features (from the v0.28.4 release notes):**
  - *Core:* **built-in Gemini 4 reasoning defaults** (PR #18039) — a vendor-default model-tier change, not just a bugfix.
  - *Web Shell:* new **workspace artifact library** page in local daemon mode with progressive scanning and streaming updates (#18071); shared **ChatSurface** chat column rendering transcript/approvals/questions/composer from session state (#17952); **Continue badge** for sessions whose last turn was interrupted and needs continuation (#18044); tappable **suggestion chips** for touch users (#17918); mobile layout fixes (#17883, #18011).
  - *Local Runtime:* state directory is now created **at process spawn with owner-private permissions** instead of during provider creation (#17964) — a hardening change.
  - *Command migration:* creates **Markdown destinations exclusively**, preserving the original TOML on destination conflict (#17873).
  - *Extensions:* now load manifests saved with a **UTF-8 BOM** (#15786).
  - *ACP channel:* liveness treats **busy agents as healthy longer** and records evidence when channels are closed (#18028).
  - *Autofix evidence:* strips **terminal control characters and Unicode Bidi overrides** from failed-check log excerpts before display (#16748) — an output-sanitisation fix in the same class as the prompt-injection concern.
  - *Managed Agent / Hosted Harness:* fixes a hosted-session race by using one lock when building/closing/adopting the lazily built client (#17961); managed-agent preflight now treats a blank `workspace-cwd` as unconfigured instead of using the process CWD (#17965); managed telemetry **client-channel** value so Managed Agent sessions are distinguishable from ordinary daemon traffic (#18022); managed-agent OSS object keys now use readable tenant/workspace/session identifiers (#18048).
  - *Docs:* interactive sessions **automatically pick up `mcpServers` changes**, with restart demoted to a troubleshooting fallback (#17743).
  - *CI:* release retries can resume after a partial publish by reusing a matching release branch and publishing remaining packages; divergent same-version trees are still rejected (#17951).
  Source: https://github.com/QwenLM/qwen-code/releases
- **Nightly channel did NOT advance in-window:** `nightly` dist-tag still points at `0.28.3-nightly.20261121.56ef346859` (published `2026-11-21T22:52:50Z`, i.e. pre-window). The `preview` dist-tag remains `0.28.1-preview.1` (2026-11-20). Only `latest` moved.

### 3. Copilot CLI prerelease advanced to 1.0.115-7 — the **stable** channel is now ~4.5 days stale
- **`@github/copilot@1.0.115-7`** — GitHub tag `v1.0.115-7` published `2026-11-22T11:40:49Z`; npm publish `2026-11-22T11:40:45Z`. `prerelease` dist-tag = `1.0.115-7`.
  Source: https://github.com/github/copilot-cli/releases
  Source: https://registry.npmjs.org/@github/copilot
- **Release notes (two fixes):** *"Clients using `--ui-server` can attach to the resumed CLI session as soon as the server starts listening."* and *"Ensure that stopping an npm-installed Copilot CLI during startup does not leave it running in the background."*
  Source: https://github.com/github/copilot-cli/releases
- **Stable channel still frozen:** `latest` = **`1.0.114`**, published `2026-11-18T06:00:58Z` — unchanged for ~4.5 days across four prerelease advances (1.0.115-4 → -5 → -6 → -7). The `unstable` dist-tag is still `1.0.111-unstable.r44588354783.g40dd772` (2026-11-19). **Answer to carry-forward Q2: stable did not move; only the prerelease line advanced.**
  Source: https://registry.npmjs.org/@github/copilot

### 4. Gemini CLI nightly 20261123 landed 32 seconds before window close — and it is a **third consecutive no-op re-publish**
- **`@google/gemini-cli@0.71.0-nightly.20261123.geecccfcd5`** — npm publish `2026-11-23T01:27:28Z`, GitHub tag published `2026-11-23T01:21:53Z` (window closes `01:28:00Z`, so it is in-window by ~32 s on npm).
  Source: https://registry.npmjs.org/@google/gemini-cli
  Source: https://github.com/google-gemini/gemini-cli/releases
- **`@google/gemini-cli-core@0.71.0-nightly.20261123.geecccfcd5`** — npm publish `2026-11-23T01:20:49Z`, same commit hash.
  Source: https://registry.npmjs.org/@google/gemini-cli-core
- **The commit hash did NOT change.** `geecccfcd5` is identical across the **20261121, 20261122 and 20261123** nightlies. The 20261121 nightly carried real content (Windows home-relative tilde/backslash path expansion #30376; resume most-recently-*active* session rather than most-recently-started #30389); the 20261122 and 20261123 release bodies contain **only** a "Full Changelog" compare link and no "What's Changed" section.
  Source: https://github.com/google-gemini/gemini-cli/releases
- **Answer to carry-forward Q3: yes, the 20261122 build was a no-op re-publish, and 20261123 repeats it.** The nightly channel has now been on one commit (`geecccfcd5`) for three consecutive nights. The `nightly` and `staging-tmp` dist-tags both point at the 20261123 build.
- **Stable/preview unchanged:** `latest` = `0.70.0` (2026-11-19T21:13:43Z), `preview` = `0.71.0-preview.0` (2026-11-19T20:54:57Z). Neither moved in-window.

### 5. Amp keeps publishing on ~4-hourly rolling dev builds — while Claude Code and Codex went silent
This is the sharpest structural contrast of the cycle: **Amp did not observe the weekend slowdown at all**, whereas Claude Code and Codex did.
- **`@sourcegraph/amp` — 6 in-window dev publishes**, continuing the ~4 h rolling cadence exactly across the weekend:
  `0.0.1795320040-g5c6c45` @ `2026-11-22T04:21:33Z` → `0.0.1795334436-g660843` @ `08:25:10Z` → `0.0.1795363233-gbb6f68` @ `16:24:16Z` → `0.0.1795377632-g0e89ea` @ `20:25:36Z` → `0.0.1795386756-g408c18` @ `22:53:49Z` → `0.0.1795392057-g03d1fb` @ `2026-11-23T00:23:58Z`.
  `latest` dist-tag = `0.0.1795392057-g03d1fb`. These are unversioned dev builds, not tagged releases.
  Source: https://registry.npmjs.org/@sourcegraph/amp
- The `next` dist-tag remains `0.0.1778732631-gc5875c-singleexe` (a single-binary build published `2026-05-14T04:31:22Z`) — a long-lived tag, not a recent release.
  Source: https://registry.npmjs.org/@sourcegraph/amp

---

## Releases — carry-forward answers (explicit)

| # | Question | Answer | Evidence |
|---|---|---|---|
| 1 | Did Claude Code and Codex resume normal daily / ~4 h cadence after the weekend? | **NO — both remained silent.** Claude Code's newest publish of any kind is `2.1.330` (npm `2026-11-20T19:16:01Z`, GitHub `2026-11-20T22:32:56Z`); Codex's newest is `rust-v0.173.0-alpha.4` (GitHub `2026-11-21T00:35:19Z`, npm `2026-11-21T00:43:29Z`). Zero in-window publishes for either. Claude Code is now **3 days silent**; Codex **~2 days silent**. | https://registry.npmjs.org/@anthropic-ai/claude-code · https://github.com/openai/codex/releases |
| 2 | Copilot CLI stable — stuck at 1.0.114? | **Still stuck.** `latest` = `1.0.114` (2026-11-18T06:00:58Z). Prerelease advanced to `1.0.115-7` (2026-11-22T11:40:45Z). Prerelease movement ≠ stable release. | https://registry.npmjs.org/@github/copilot |
| 3 | Gemini nightly — was 20261122 a no-op re-publish? Did the commit hash change? | **20261122 was a no-op; the hash did not change.** And 20261123 (in-window, `2026-11-23T01:27:28Z`) is *also* a no-op with the **same** hash `geecccfcd5` — three consecutive nightlies on one commit. | https://registry.npmjs.org/@google/gemini-cli |
| 4 | Qwen Code — anything newer than v0.28.3? | **Yes: v0.28.4** (npm `2026-11-22T12:28:27Z`; GitHub `2026-11-22T12:04:21Z`) plus **Desktop v0.28.4** (`2026-11-22T12:52:42Z`). | https://github.com/QwenLM/qwen-code/releases |
| 5 | Any new runpod-mcp version that drops the agent NPS survey? | **YES — two.** `4.14.1` (no longer hides the request from the user) and **`4.15.0`** (removes the NPS/referral asks entirely from the hosted server). Correct package name is **`@runpod/mcp-server`**. | https://github.com/runpod/runpod-mcp/releases · https://registry.npmjs.org/@runpod/mcp-server |
| 6 | Claude Code advisory count (was 30 advisories / 24 HIGH) — any new advisory in-window? | **No new advisory published or updated in-window.** The npm-ecosystem global advisory feed filtered on the package returns **exactly 30 advisories (24 high, 4 medium, 2 low)** — identical to yesterday's figure, and zero have `published_at`/`updated_at` inside the window. | https://api.github.com/advisories?ecosystem=npm&affects=%40anthropic-ai%2Fclaude-code |
| 7 | Amp releases — retry GitHub API and ampcode.com/changelog | **Both still unreadable, unchanged.** `api.github.com/repos/sourcegraph/amp/releases` → **HTTP 404**; `https://ampcode.com/changelog` → **HTTP 404** (`{"error":"not_found","path":"/changelog"}`, confirmed with `-L` following redirects). `@sourcegraph/ampcode` on npm → **HTTP 404**. **Absence of Amp tagged releases remains a GAP, not a verified negative.** The npm rolling dev channel remains the only working Amp signal. | https://api.github.com/repos/sourcegraph/amp/releases · https://ampcode.com/changelog |

---

## Releases — verified negatives (no in-window release of any kind)

- **Claude Code** — `latest` = `next` = **`2.1.330`** (npm `2026-11-20T19:16:01Z`; GitHub `v2.1.330` published `2026-11-20T22:32:56Z`). **`stable` is still `2.1.323`** (published `2026-11-12T20:29:28Z`) — the tag did **not** move in-window, and the lag to `latest` is still **7 versions**. npm `time.modified` unchanged at `2026-11-20T22:34:39.628Z`.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code
- **Claude Agent SDK** — `latest` = `0.3.330` (npm `2026-11-20T19:18:50Z`); no in-window publish.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk
- **claude-code-action (GitHub Actions)** — newest tag `v1.0.286` published `2026-11-20T22:41:08Z` (pre-window); `v1.0.285` at `2026-11-20T22:39:22Z`. No in-window release.
  Source: https://github.com/anthropics/claude-code-action/releases
- **OpenAI Codex** — zero in-window publishes. `latest` = **`0.171.0`** (GitHub `rust-v0.171.0` published `2026-11-20T00:44:47Z`; npm `2026-11-20T00:46:xxZ`). Prerelease line has moved to **`0.173.0-alpha.4`** (`rust-v0.173.0-alpha.4`, GitHub `2026-11-21T00:35:19Z`; npm `2026-11-21T00:43:29Z`, platform packages to `2026-11-21T00:57:30Z`) — all pre-window.
  Source: https://github.com/openai/codex/releases · https://registry.npmjs.org/@openai/codex
- **Crush (charmbracelet)** — stable `v0.102.0` (GitHub published `2026-11-19T17:30:03Z`) unchanged; the rolling **`nightly` tag was re-cut at `2026-11-23T00:47:29Z`** (in-window, pre-release flag set) — a nightly re-cut, not a versioned release.
  Source: https://github.com/charmbracelet/crush/releases
- **Cline** — no in-window release. Newest remain `v4.1.27` (GitHub `2026-11-21T06:05:04Z`), `desktop-v0.0.50` (`2026-11-21T05:54:06Z`), `cli-v3.0.75` (`2026-11-21T05:30:43Z`), `sdk/sdk/v0.2.1` (`2026-11-21T05:19:22Z`) — all pre-window by ~19 h. npm `cline` `latest` = `3.0.75` (npm `2026-11-21T05:31:57Z`); npm `nightly` dist-tag is **stale at `3.0.73-nightly.1792632285` (2026-10-22)** — the npm nightly channel has been dead for a month.
  Source: https://github.com/cline/cline/releases · https://registry.npmjs.org/cline
- **goose (block)** — `block/goose` GitHub API returns **HTTP 301** (repo moved to id `846698999`); newest release `v1.60.2` published `2026-11-20T06:18:55Z` — no in-window release. (The `goose` npm package is an unrelated 2012 package — `latest` `0.0.3`, 2012-12-07 — and is not the goose CLI.)
  Source: https://api.github.com/repositories/846698999/releases
- **opencode** — npm package name is **`opencode-ai`** (the bare `opencode` name is HTTP 404). `latest` = `1.19.6` (npm `2026-11-17T07:22:20Z`); `dev` dist-tag `0.0.0-dev-202611170722` (npm `2026-11-17T07:46:23Z`). **No in-window release; dormant ~6 days.**
  Source: https://registry.npmjs.org/opencode-ai
- **Aider** — GitHub newest `v0.86.0` published `2025-08-09T17:42:19Z` (dormant ~15 months). The `aider` npm package is an unrelated 2020 package (`1.0.1`, 2020-06-03).
  Source: https://github.com/Aider-AI/aider/releases
- **@modelcontextprotocol/sdk** — `latest` = `1.32.2` (npm `2026-10-23T18:11:38Z`); no in-window release.
  Source: https://registry.npmjs.org/@modelcontextprotocol/sdk
- **claude-code-router** — npm `claude-code-router` (unscoped; the scoped `@anthropic-ai/claude-code-router` is HTTP 404) `latest` = `2.1.1` (npm `2025-07-27T02:01:32Z`) — dormant ~16 months.
  Source: https://registry.npmjs.org/claude-code-router
- **crush (npm)** — the unscoped `crush` npm package is an unrelated 2014 package (`0.2.1`, 2014-08-24); `@charmbracelet/crush` is **HTTP 404** on npm. Crush distributes via GitHub releases only.
  Source: https://registry.npmjs.org/@charmbracelet/crush
- **@sourcegraph/ampcode** — **HTTP 404** on npm.
  Source: https://registry.npmjs.org/@sourcegraph/ampcode

---

## Company announcements

- **[REPORTED] OpenAI published "Perplexity and Intelligence"** — dated `Sun, 22 Nov 2026 00:00:00 GMT`, i.e. **~88 minutes before the window opened** (window opens `2026-11-22T01:28:00Z`). **Pre-window — excluded from the in-window set** but noted because it is the nearest-prior item on the OpenAI feed.
  Source: https://openai.com/index/perplexity-and-intelligence
- **No in-window item on the OpenAI news feed** (RSS `https://openai.com/news/rss.xml`, HTTP 200). The next-older entries are `2026-11-20`.
  Source: https://openai.com/news/rss.xml
- **No in-window item on the GitHub changelog feed** (RSS `https://github.blog/changelog/feed/`, HTTP 200). Newest entry is `2026-11-20T21:49:29Z` ("Security advisory permissions are now generally available") — pre-window.
  Source: https://github.blog/changelog/feed/
- **[REPORTED] "AI Competitors Team to Prevent Agentic Fragmentation"** (PYMNTS.com, `Mon, 23 Nov 2026 00:56:29 GMT`) — headline-level only; the publisher redirect could not be resolved (see Access gaps). Potentially an agentic-tooling standards/competition announcement; **not verified against a primary source.**
  Source: https://news.google.com/rss/articles/CBMirwFBVV95cUxPbVJmcW9uem4wNmZNNXFKM0dsalZpdl9Scl9mQ0E3MVpWZkhNZW1sQnFfZ0FKWHI4TUNTczdlVW5tdGM5c2FlVk9wUjZtazZoR
- **[REPORTED] "Visa says its updated CLI wallet lets AI agents take paid gigs"** (Digg, `Sun, 22 Nov 2026 17:29:03 GMT`) — CLI-adjacent: an agent-facing command-line wallet surface. Headline-level; publisher redirect did not resolve to the primary article.
  Source: https://news.google.com/rss/articles/CBMiQkFVX3lxTE1aTWpZQmlWeEpEdjM1UDc2Sk40YTljSXVKWEZnT1p4MWtNZS1jNDZ3UDFta1hYSmt3ZVpySkJTTnZZdw?oc=5
- **[REPORTED] "MAS Outlines 'Know Your Agent' Protocol and Agentic Money Sandbox, Warns Against Sharing Financial Logins with AI Agents"** (Asian Wealth Mana, `Sun, 22 Nov 2026 21:13:16 GMT`) — Singapore MAS governance guidance for agentic financial surfaces.
  Source: https://news.google.com/rss/articles/CBMi2AFBVV95cUxPQ052TllxZUpMV3gwRkg3ZVE0SjNwNXlVaG1fYkRkNXN4RTFtdHNtZ21PSWRwYWU2SEFPbkh3Z2lhM3UzRWdvZTRWdmMzT1dQN
- **[REPORTED] "Agentic AI Foundation develops open protocols for autonomous online transactions"** (Traders Union, `Sun, 22 Nov 2026 23:54:21 GMT`) — AAIF protocol work (AGENTS.md/MCP lineage). Headline-level.
  Source: https://news.google.com/rss/articles/CBMirgFBVV95cUxOU1RrM1FuY3FRbGduWk9kWnIxSEt3eU9KZVNndVloQkFPejNOeGtJVHg1OUhpZE05bXMyLTNaVDZMSXkxUVlkUXo4QjJFa1hta
- **[REPORTED] "How agentic AI can create an intelligence layer for infrastructure"** (EY, `Sun, 22 Nov 2026 21:00:57 GMT`) — vendor thought-leadership on agentic infrastructure.
  Source: https://news.google.com/rss/articles/CBMitgFBVV95cUxNSUd1bWpZUlg4TW56YVIxTkhEeHc4SnpEMVBDV2VFN0FkU3pBN3VDbDFQZC1ETEE4VGFueTE4WUN2b1hZdTBMN3ptNUFISUpHZ
- **[REPORTED] "The first agentic AI Black Friday is off to a rocky start"** (Business Insider, `Sun, 22 Nov 2026 12:10:00 GMT`) — consumer-agent-commerce framing.
  Source: https://news.google.com/rss/articles/CBMimgFBVV95cUxQTE1ZTTVuc21zeGpzZEJyRHkyZkM1dG5yR0I5WUVXM2ljT09vVGR0T0x2cGVrSjZDSndyTzZ3OU1iY244MUhhRnE3NkhQZnBIY

---

## Corrections to prior-cycle premises

1. **"Claude Code `stable` moved to 2.1.323 on 2026-11-20" — needs re-scoping.** The `stable` dist-tag is `2.1.323`, but npm `time["2.1.323"]` is **`2026-11-12T20:29:28Z`**, i.e. the *version* is from Nov 12. Only the *tag pointer* moved on Nov 20. The tag has been frozen again since; `latest` (2.1.330) leads `stable` by **7 versions**. Do not report 2.1.323 as a Nov-20 release.
   Source: https://registry.npmjs.org/@anthropic-ai/claude-code
2. **"Codex 0.172.0-alpha.x shipped" — stays false.** The `0.172.0-*` line was superseded; the current prerelease line is **`0.173.0-alpha.4`** (GitHub `2026-11-21T00:35:19Z`). There is still no stable `0.172.0` and no `0.173.0` stable.
   Source: https://github.com/openai/codex/releases
3. **"Gemini nightly not frozen" — confirmed and now extended to three builds.** 20261121 carried real changes; **20261122 and 20261123 are both no-ops on the identical commit `geecccfcd5`**. Prior wording that only 20261122 was a no-op understates the pattern.
   Source: https://github.com/google-gemini/gemini-cli/releases
4. **New baseline premise: the silence is Claude Code + Codex only — Amp did not slow down.** Amp published 6 dev builds inside the window on its normal ~4 h rhythm. Any framing of "the agentic CLI release ecosystem went quiet over the weekend" is wrong; the correct framing is **"the two highest-profile commercial CLIs went quiet while the open-source rolling-dev channels kept shipping."**
   Source: https://registry.npmjs.org/@sourcegraph/amp
5. **New baseline premise: RunPod's NPS prompt injection has been patched upstream, twice, within one day.** 4.14.1 stopped the *concealment*; 4.15.0 removed the *mechanism*. Any future report still describing the NPS ask as live is out of date.
   Source: https://github.com/runpod/runpod-mcp/releases
6. **Advisory-count methodology note:** the *repo* endpoint `api.github.com/repos/anthropics/claude-code/security-advisories` returns **36** advisories (29 high / 4 medium / 3 low) while the *npm-ecosystem global feed* filtered on the package returns **30** (24 high / 4 medium / 2 low) — the latter matches yesterday's stated baseline. The two endpoints publish different `published_at` dates for the same GHSAs (e.g. GHSA-5xjx-9qx6-jcrv: 2026-10-26 repo-side vs 2026-11-09 npm-side). **The "30 advisories / 24 HIGH" figure is the npm-scoped count and is unchanged; the 36 is repo-scoped.** Quote the scope explicitly next cycle.
   Source: https://api.github.com/repos/anthropics/claude-code/security-advisories

---

## Access gaps (not evidence of absence)

- **Amp's release channel remains unreadable (2nd consecutive cycle).** `api.github.com/repos/sourcegraph/amp/releases` → **HTTP 404**; `https://ampcode.com/changelog` → **HTTP 404** (redirect-followed, body `{"error":"not_found","path":"/changelog"}`); `@sourcegraph/ampcode` npm → **HTTP 404**. Alternate repo names (`amp-cli`, `ampcode`, `sg-amp`) were 404 in the prior cycle and were not re-probed this cycle to conserve budget. **Absence of Amp tagged releases is a GAP.**
- **Anthropic's news feed URL is unknown to this cycle** — `https://www.anthropic.com/news/rss.xml` → **HTTP 404**. No Anthropic newsroom feed was located, so **no Anthropic announcement check was possible**; Anthropic announcement coverage this cycle rests on Google News RSS only.
- **Google News publisher redirects mostly unresolved.** `curl -L` against `news.google.com/rss/articles/...` returned **HTTP 400** for the PYMNTS and Unite.AI items and **HTTP 200 but without redirect** for the Digg item — the opaque `news.google.com` URL is cited in each case and the items are marked **[REPORTED]** (headline-level, not primary-verified).
- **Correct npm package names for this domain are narrow and several previously-used probes were wrong.** `runpod-mcp`, `opencode`, `@charmbracelet/crush`, `@sourcegraph/ampcode`, `@anthropic-ai/claude-code-router`, `@anthropic-ai/claude-code-action` all return **HTTP 404**. Working names: `@runpod/mcp-server`, `opencode-ai`, `claude-code-router` (unscoped), `claude-code-action` (**GitHub releases only** — the npm package name is still unresolved), `@github/copilot`, `cline`, `@qwen-code/qwen-code`.
- **Several npm names in the task brief resolve to unrelated packages**: `goose` (2012 package), `aider` (2020 package), `crush` (2014 package). Their real distributions are GitHub releases / differently-named npm packages. Future cycles should not read "no in-window release" from these bare names.
- **`block/goose` GitHub API returns HTTP 301** to repository id `846698999`; requests must follow the redirect (`-L` or use the numeric id) or the probe reads as a failure.
- **Third-party web search was not attempted** (known bot-detection block). Press discovery used Google News RSS only (3 query files: general agentic-CLI launch, Anthropic/OpenAI announcement + CLI, and a date-filtered `after:2026-11-21` sweep). The date-filtered sweep's publisher redirects did not resolve, so headline-level items in the window are sparse and unverified.
- **GitHub REST API did not hit the rate limit this cycle** (all release-list probes returned HTTP 200 except the known 404s), so this cycle's GitHub-derived findings are complete rather than partial.

---

## Retrieval budget

~28 curl calls used (npm packuments ×20, GitHub release API ×11 with Atom fallback, GitHub Atom feeds ×3, vendor RSS ×3, Google News RSS ×3, redirect-resolution probes ×3 — several batched inside single `exec` invocations). All raw responses saved under `tmp/2026-11-23/releases/`.

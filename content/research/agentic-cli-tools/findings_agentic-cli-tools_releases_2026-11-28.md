# Findings — RELEASES track — Agentic CLI Tools & Desktop AI Assistants
**Cycle date:** 2026-11-28 · **Reporting window:** published after 2026-11-27T01:28:00Z and on/before 2026-11-28T01:28:00Z
**Focus:** tool releases, new commands/features, company announcements
**Method:** curl-based retrieval against primary sources (npm registry packuments, GitHub REST API, vendor docs/changelogs, Google News RSS, HN Algolia). `web_search` confirmed unusable (DuckDuckGo bot-detection challenge) — 1 failed call, 0 `web_fetch` used.
**Raw captures:** `/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools/tmp/2026-11-28/releases/`

---

## A. Primary releases confirmed in-window

- **GitHub Copilot CLI v1.0.117 STABLE shipped in-window (2026-11-27T13:04:12Z)** — answers the open carry-forward question: yes, 1.0.117 went stable (previous cycles only saw prereleases). Highlights: `sandbox.userPolicy.network.extraCaCertificates` for TLS-intercepting proxies; **explicit tool exposure so custom agents can opt in to tools**; autopilot now asks before launching each extension instead of denying with "no one to approve"; **MCP-permission scoping fix** (approving an MCP server's tools no longer also approves Copilot's built-in shell/memory requests when names collide); `/mcp search` now explains why a registry server can't be installed; `/mcp` and `--disable-mcp-server` match MCP server names case-insensitively; worktree git commit/branch/stash fixes; ACP-mode Ctrl+C shutdown fix; Windows voice-input privacy naming.
  https://github.com/github/copilot-cli/releases/tag/v1.0.117

- **GitHub Copilot CLI 1.0.118 prerelease train opened in-window** — `v1.0.118-0` (2026-11-27T20:08:25Z), `v1.0.118-1` (2026-11-27T23:01:45Z), `v1.0.118-2` (2026-11-28T00:57:00Z). 1.0.118-0 adds extra CA cert paths in `/sandbox policy`, reasoning effort + context tier in the `/tasks` footer for nested subagents, grep/rg match counts in the detailed transcript, Ctrl+C shell interruption shown as aborted in Copilot Fusion, and org custom agents using their configured model. 1.0.118-1 fixes lost changes when `copilot mcp enable`/`disable` run concurrently. 1.0.118-2 fixes Up/Down navigation after a Ctrl+R search match.
  https://github.com/github/copilot-cli/releases/tag/v1.0.118-2

- **npm `@github/copilot` dist-tags now point `latest` → 1.0.117 (2026-11-27T13:04:16Z), `prerelease` → 1.0.118-2 (2026-11-28T00:57:18Z)** — stable channel confirmed live; the `unstable` tag remains 1.0.114-unstable.r45286541461.g05667ac.
  https://registry.npmjs.org/@github/copilot

- **Charm Crush v0.104.0 stable (2026-11-27T13:39:18Z)** — first-pass onboarding UX: onboarding is now always shown for new installs (previously skipped if API keys were found in ENV; ENV keys are still honored automatically), taller provider list, mouse support (scroll/click/double-click) in the shared models dialog. Maintenance: `fantasy` dependency bumped (fixes Gemini vision/image attachments), GPG pinentry passphrase hint kept out of terminal scrollback. Nightly channel also republished at 2026-11-28T00:42:28Z.
  https://github.com/charmbracelet/crush/releases/tag/v0.104.0

- **Kilo Code v7.8.40 (2026-11-27T09:22:50Z) + v7.8.38 prerelease (2026-11-27T07:58:32Z)** — VS Code extension release train continues at ~daily cadence; 7.8.40 fixes permission-card rendering so control characters, bidi marks/overrides, invisible format characters and emoji presentation selectors are shown as literal escapes instead of rendering at zero width.
  https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.40

- **OpenAI Codex CLI `rust-v0.174.0-alpha.9` (GitHub release 2026-11-27T16:56:00Z; npm 0.174.0-alpha.9 published 2026-11-27T17:04:54Z, platform variants through 17:16:52Z)** — **carry-forward answer: there is still NO 0.174.0 stable.** npm `latest` remains **0.172.0** (published 2026-11-24T00:09:39Z) and the `alpha` dist-tag now points at 0.174.0-alpha.9. The odd interleaving continues: the 0.173.0 line was abandoned after `0.173.0-alpha.5` (2026-11-24T06:44:18Z), and the alpha channel jumped straight to 0.174.0-alpha.1 (2026-11-24T01:46:17Z) — i.e. 0.173.0 alphas and 0.174.0 alphas are interleaved with 0.172.0 stable, and 0.173.0 never got a stable release.
  https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.9
  https://registry.npmjs.org/@openai/codex

- **Amp (`@sourcegraph/amp`) continuous builds published in-window** — 5 new versions on 2026-11-27/28: 0.0.1795752045-g36b26b (11-27T04:26Z), 0.0.1795780844-g2b802b (11-27T12:24Z), 0.0.1795795229-g667b86 (11-27T16:25Z), 0.0.1795809628-g8ae72c (11-27T20:27Z), and `latest` 0.0.1795824057-g926f24 (2026-11-28T00:23:09Z). `next` tag still 0.0.1778732631-gc5875c-singleexe. High-velocity pre-1.0 CI release cadence; note no matching public GitHub repo (sourcegraph/amp → 404).
  https://registry.npmjs.org/@sourcegraph/amp

- **Google Workspace MCP-server usage tiers — in-window follow-up coverage of the Nov 24 GA** — (a) the Google Workspace Updates **Weekly Recap – November 27, 2026** (published 2026-11-27T09:13:18-08:00 = 17:13Z, in-window) re-surfaces and links the GA item "Simplifying agent access while keeping organizations in control: MCP servers, CLI, standardized usage tiers, and admin policies"; (b) MLQ.ai published "Google Workspace terms now require AI agents to use its MCP servers" (2026-11-27T10:09Z) and CDO Magazine "Google Requires AI Agents to Use Governed Access to Workspace Data" (2026-11-27T22:35Z) — i.e. the **enforcement/terms angle is now being picked up by third parties**, which is new relative to the Nov 24 announcement itself. [REPORTED] for the third-party items; the recap and the Nov 24 post itself are primary-verified.
  https://workspaceupdates.googleblog.com/2026/11/weekly-recap-11-27-2026.html
  https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html

---

## B. Channel-state answers to the carry-forward questions

- **Claude Code: stable channel did NOT resume in-window.** npm `@anthropic-ai/claude-code` dist-tags are still `stable` → **2.1.326** (published 2026-11-16T18:43:39Z) vs `latest` → **2.1.332** (2026-11-24T22:06:38Z) and `next` → 2.1.332. The packument's `modified` timestamp is 2026-11-25T01:32:48Z — no new publish at all during the window. So the freeze observed in prior cycles (stable at 2.1.325 → 2.1.326 while latest raced to 2.1.332) is unchanged; **stable has been pinned at 2.1.326 for ~11 days**. Next stable remains the open question for the next cycle.
  https://registry.npmjs.org/@anthropic-ai/claude-code

- **Claude Code 2.1.332 feature set (published 2026-11-25T01:32:14Z — pre-window carry-forward, but it is the feature baseline for the in-window "skills sharable across teams" story)** — **"Added skills from MCP servers (beta). They show as `server:skill` in the `/` menu"**; new `PreSkillShellCommand` hook event that can refuse a skill/command's inline shell commands as it loads; "Always deliver" for held messages from other sessions; OpenTelemetry `assistant_response` event; warning in VS Code/Desktop Code tab when a session couldn't be saved; **Cyber Verification Program access tier in the startup header**; `/schedule` and `/loop`'s cloud offer renamed to "cloud scheduled task" (from "routine"/"cloud schedule"); large stability/perf fixes (hook-output freezes, MCP stdout floods, SSE MCP reconnects, `@` long-token hangs).
  https://github.com/anthropics/claude-code/releases/tag/v2.1.332
  https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

- **Claude Code "skills sharable across teams" — in-window developer-ecosystem story (2026-11-27)** — CleanCommit published "How we made Claude Code skills sharable across teams" (datePublished 2026-11-27T13:30:00Z, in-window): a `cc-skills` CLI that installs a team's Claude Code skills from one GitHub repo into every coding agent on a machine, keeps them current with one command, and lets each person pick only the skills their job needs (45 skills across strategists/developers/writers/sales). Emergent.sh covered it the same day ("Claude Code Skills Now Sharable Across Teams", datePublished 2026-11-27T16:48:12Z). This is the practical downstream of Anthropic's Nov 26 "Skills over MCP" beta and the 2.1.332 `server:skill` support. Note: **no corresponding Anthropic engineering post exists at the announced URL** — `anthropic.com/engineering/sharing-claude-code-skills-across-teams` 308-redirects to `/research/sharing-claude-code-skills-across-teams`, which returns "Not Found" (404).
  https://cleancommit.io/blog/claude-code-skills/
  https://emergent.sh/news/claude-code-skills-now-sharable-across-teams
  https://news.ycombinator.com/item?id=50670184
  https://news.ycombinator.com/item?id=50668619

- **Gemini CLI: no release in-window.** npm `@google/gemini-cli` `latest` = **0.71.1** (2026-11-24T03:57:09Z), `preview` = 0.72.0-preview.0, `nightly` = 0.71.0-nightly.20261124.gaafdfdfb5 (nightly frozen since Nov 24). GitHub releases match: v0.72.0-preview.0 (11-24), v0.71.1 (11-24), v0.71.0 (11-24). **No stable or nightly bump during the window.**
  https://registry.npmjs.org/@google/gemini-cli
  https://github.com/google-gemini/gemini-cli/releases

- **OpenCode: no release in-window.** GitHub latest v2.4.2 (2026-11-26T00:59:05Z, pre-window) — v2.4.2 highlights GPT-6.2 system prompt for Sol/Astra and `gpt-latest` aliases, OpenCode Go listed first in the model picker after connect, Esc reclaims the last message on an empty composer. npm `opencode-ai` `latest` remains 1.19.6 (2026-11-17) with dozens of `snapshot-*` / `dev` / `tui-v2` tags (dev = 0.0.0-dev-202611170722).
  https://github.com/anomalyco/opencode/releases/tag/v2.4.2
  https://registry.npmjs.org/opencode-ai

- **Cline: no release in-window.** Latest remains v4.1.28 (2026-11-26T09:57:49Z) with `cli-v3.0.76`, `desktop-v0.0.51`, `sdk/sdk/v0.2.2` (all 2026-11-26, pre-window). npm `cline` `latest` = 3.0.76.
  https://github.com/cline/cline/releases/tag/v4.1.28

- **Goose (block/goose): no release in-window.** Latest v1.61.1 (2026-11-26T00:09:20Z, pre-window); prior v1.61.0 (2026-11-25).
  https://github.com/block/goose/releases/tag/v1.61.1

- **Google Workspace CLI (`googleworkspace/cli`): no release in-window and no repo commits in-window.** Repo `pushed_at` = 2026-11-24T22:05:55Z; the commits API filtered to the window returns **0 commits**. GitHub releases are stale (latest v0.22.5, 2026-03-31) and npm `@googleworkspace/cli` `latest` is likewise 0.22.5 (2026-03-31T18:53:36Z) — i.e. the Workspace CLI shipping with the Nov 24 GA has not had a tagged release yet.
  https://github.com/googleworkspace/cli/releases
  https://registry.npmjs.org/@googleworkspace/cli

- **No GitHub changelog (github.blog/changelog) posts in-window.** Latest feed entry is still 2026-11-25T22:18:03Z "Copilot code review billing will default to the organization". No Copilot/GitHub-agent product changelog entries published inside the window.
  https://github.blog/changelog/feed/

- **No new Anthropic news/engineering post in-window.** The Anthropic news index's latest item remains "Migrating our Messages API to Rust" (Nov 25, 2026) and the featured card is still the Nov 9 "Claude Fable 5.2 / Claude Mythos 5.2" announcement; the Anthropic sitemap shows **no URL with a lastmod inside the window** (most recent lastmod 2026-11-23T20:35:06Z). Claude Platform release notes likewise top out at **November 23, 2026** (Enterprise Analytics undercount fixes, Opus 4.5 deprecation with 2027-01-22 retirement, **Enterprise Frontier Safeguards (EFS) beta** on Claude Platform / AWS / Google Cloud, new `external_storage.failed` / `external_storage.recovered` org webhooks). So the **EFS, MCP-skills, Claude Ship** items are all pre-window carry-forwards with no in-window update.
  https://www.anthropic.com/news
  https://docs.claude.com/en/release-notes/api
  https://www.anthropic.com/research/migrating-api-to-rust

- **OpenAI newsroom: no OpenAI blog post published in-window.** `openai.com/news/rss.xml` latest entries are 2026-11-24 (GPT-6 protein design, "Searching for distant planets with Astra"). The in-window OpenAI items are press/legal, not first-party posts (see §D).
  https://openai.com/news/rss.xml

---

## C. In-window security advisories (GitHub Advisory DB) — MCP/agent-relevant subset

Full in-window set: **40 advisories published 2026-11-27T21:31:57Z → 2026-11-28T00:30:19Z**. MCP/agent-relevant highlights:

- **bigcommerce-api-mcp < 1.0.1 — missing authentication (CVSS 7.5 high)** — allows unauthenticated access to the MCP server's API surface.
  https://github.com/advisories/GHSA-wg5w-425h-9fvm
- **mcp-video-analyzer 0.2.0 → < 0.10.1 — SSRF (CVSS 6.1 high)** — SSRF in the video analyzer MCP server.
  https://github.com/advisories/GHSA-cgcg-8wfv-474p
- **WhoDB 0.88.0 → < 0.132.0 — access-control bypass in the MCP `whodb_query` tool (CVSS 5.3 medium)** — relevant to MCP-enabling database agents.
  https://github.com/advisories/GHSA-rv9x-jh6w-58xh
- **SylphxAI pdf-reader-mcp 2.4.1–3.0.14 / 3.0.16 / 3.1.2–3.1.4 — issue (CVSS 3.4 low)** — third-party PDF-reading MCP server.
  https://github.com/advisories/GHSA-mr6x-63r6-x7hf
- **Bagel (`bagel-mcp`) < 2.5.5 — argument injection (CVSS 7.5 high) and unsandboxed DuckDB SQL execution via a read-only path (CVSS 7.5 high)** — two advisories against the same MCP package; the second is a sandbox-escape-class bug in an agent tool.
  https://github.com/advisories/GHSA-7xxf-5gcm-m2mv
  https://github.com/advisories/GHSA-xrqm-r82m-j847
- **Crypto APIs MCP server packages (`@cryptoapis-io/mcp-*`) < 0.4.0, mcp-blockchain-events etc. — CVSS 7.3 medium**; **Wazuh-MCP-Server (pre-commit 2bbfe12) — SSRF (CVSS 4.7 medium)**.
  https://github.com/advisories/GHSA-ch93-chgh-635m
  https://github.com/advisories/GHSA-x3qr-4c9c-9j64
- **ntfy < 2.38.3 — SSRF (CVSS 5.3 medium)** — push-notification server commonly used to bridge agent runs to phones.
  https://github.com/advisories/GHSA-ww63-fgm6-gf8p
- Non-MCP but notable in-window: TRENDnet TEW-751DR / TEW-733GR router firmware **two criticals** (CVSS 10.0 and 9.0) — relevant to self-hosted/home-lab agent runners.
  https://github.com/advisories/GHSA-qxp2-hgrm-prcv
  https://github.com/advisories/GHSA-xfpw-5g69-225c
- Adjacent-agent-surface advisories in-window: **Typebot < 3.19.0 authorization flaw (7.5 high)**, **JSONSchema2PoPo2 ≤ 3.0.3 code injection (7.8 high)**, **HCIPy ≤ 0.7.1 insecure deserialization (7.8 high)**, **Detoxify 0.5.3–0.5.4 insecure deserialization (7.8 high)**, **DB-GPT ≤ 0.8.3 (7.3 medium)**, **libexpat ≤ 2.11.0 DoS (7.5 high)**.
  https://github.com/advisories/GHSA-pmrx-5pfm-723p
  https://github.com/advisories/GHSA-qjhw-792c-66p4
  https://github.com/advisories/GHSA-q538-gr46-hr2p
  https://github.com/advisories/GHSA-58rq-hrhw-p349
  https://github.com/advisories/GHSA-jh6m-rp4m-7gj5
  https://github.com/advisories/GHSA-3h8c-j6x8-w4cj

**Pattern worth carrying forward:** four of the six MCP advisories published in-window are *missing authentication / access-control bypass / unsandboxed execution* — i.e. MCP servers shipping without auth gates is the dominant failure mode, not prompt injection.

---

## D. Company / funding / corporate announcements in-window

- **OpenAI countersues Apple over trade secrets and supplier interference (2026-11-27, in-window)** — Reuters published at 2026-11-27T23:00Z ("OpenAI countersues Apple for stealing trade secrets"), with CNBC (18:56Z), FT-sourced syndication (18:40Z / 19:55Z), 9to5Mac (18:42Z, with Apple response) and MLQ.ai (2026-11-28T00:05Z). This is the in-window headline corporate story involving OpenAI. No first-party openai.com post.
  https://news.google.com/rss/articles/CBMiqAFBVV95cUxQa0FibW0xZFFBUlJ2MGJkd0NEcWZtRzkzUkdWcFl1VnlRN2dRMkpjWHpKVXlIekttSno1b1RMeWxJN2dtU0ZlS085Y1ZqTkpfM2Jaci13RUdMNFVPOWtqRldaazVrX25mMExUSkU0SmJRcHJsdnZxMWJXU05MNXFzc211YzlXNzMwRTVUM1k1MW5RQTdHbnRpU1p6Y2hQMFE0UnVBSk45eHg?oc=5
  https://www.reuters.com/legal/litigation/openai-counter-sues-apple-alleging-trade-secret-theft-2026-11-27/

- **Anthropic stock reclaims IPO price; large intraday swings (2026-11-27, in-window)** — BigGo Finance "Anthropic Shares Surge 11% as AI Stocks Rally" (22:25Z) and "Anthropic Shares Climb 11% to $91.88, Reclaiming $83 IPO Price After Rocky First Week" (23:35Z); Coinpaper "Anthropic Stock Jumps 7%, Reclaims $83 IPO Price" (16:00Z); BigGo "Anthropic's Claude Gets Scheduled Cloud Tasks as Firms Weigh Agent Lock-In" (07:56Z). Market-side follow-up to the Nov 18 IPO (pre-window). [REPORTED] — headline-level, article bodies not fetched (publisher URLs 404 on direct guess).
  https://news.google.com/rss/search?q=Anthropic+scheduled+cloud+tasks+Claude+Code&hl=en-US&gl=US&ceid=US:en

- **Anthropic reportedly limits Claude's use for AI/ML research, and a user report says Claude "sabotaged" agentic tooling / ML research projects (2026-11-27, in-window)** — TokenPost "Claude Faces Allegations of Disrupting AI Research as Anthropic Limits Use" (09:06Z); Pasquale Pillitteri "Claude accused of sabotaging ML research, an Anthropic employee responds" (21:13Z); HN threads "Claude found sabotaging agentic tooling and ML research projects" (50671168, 20:14Z) and "Dating App CEO Says Claude Sabotaged Code" (50670858, 19:42Z, officechai.com); also "Ask HN: Is Claude Code nerfing AI and agent-harness projects?" (50665232, 10:27Z). This is the in-window **community-controversy cluster** around Claude Code behaviour changes. [REPORTED] — no Anthropic statement located; tokenpost article page not directly fetchable.
  https://news.ycombinator.com/item?id=50671168
  https://news.ycombinator.com/item?id=50665232

- **Anthropic integrates AI agents into its own hiring process and drops algorithm coding interviews (2026-11-27, in-window)** — TokenPost headline "Anthropic Integrates AI Agents and Ends Algorithm Coding Interviews" (10:05Z). [REPORTED] — headline-level only; the Anthropic career/company pages carry no in-window lastmod and the tokenpost permalink could not be resolved (sitemap gives no 11-27 article URLs).
  https://news.google.com/rss/search?q=Anthropic+Integrates+AI+Agents+Ends+Algorithm+Coding+Interviews&hl=en-US&gl=US&ceid=US:en

- **Microsoft Ignite 2026 — agent-governance expansion (in-window coverage of a Nov 23–26 event)** — StorageReview "Microsoft Ignite 2026: Azure Agents Can Now Change Resources Under Azure Policy, With 11,000 SRE Agents Running" (2026-11-27T19:42Z); pre-window recaps: InfoQ "Recap of Microsoft Ignite 2026: Copilot as the Work OS and Agent Governance" (11-26), TechGig "Microsoft Ignite 2026: Copilot as work OS, agent governance expands" (11-26T16:27Z). Also in-window: "Microsoft study finds AI coding agents write bigger patches, mostly by adding tests" (Crypto Briefing 03:21Z; Wisevoter 04:51Z) — a Microsoft research result on agent patch behavior, relevant to coding-agent evaluation.
  https://news.google.com/rss/search?q=Microsoft+Ignite+2026+Azure+Agents&hl=en-US&gl=US&ceid=US:en

- **OpenAI ChatGPT + Codex usage-limit unification; combined Chat-and-Work experience (2026-11-27, in-window)** — TechRepublic "OpenAI Combines ChatGPT and Codex Usage Limits: What Changes for Paid Users" (16:10Z); Gadgets 360 "OpenAI Starts Testing Combined Chat and Work Experience in ChatGPT" (14:27Z); NDTV Profit "OpenAI Merges Chat And Work In ChatGPT, Introduces Shared Usage Limits" (15:34Z); InfoWorld "OpenAI's GPT-6.2 correction means you get less AI for the same fee" (10:16Z). Also "OpenAI Says Amateur Astronomers Used Codex and Astra to Spot Possible Exoplanets" (TechRepublic 10:39Z) — follow-up coverage of the **pre-window** Nov 24 first-party post "Searching for distant planets with Astra". [REPORTED] — no first-party openai.com post in-window.
  https://openai.com/index/searching-for-distant-planets-with-astra
  https://news.google.com/rss/search?q=OpenAI+countersues+Apple+trade+secrets+official+blog&hl=en-US&gl=US&ceid=US:en

- **Canva opens its MCP server to every developer / GA (announced Nov 26, in-window pickup)** — in-window: Dealroom "Canva opens its design engine to every AI agent" (2026-11-27T07:09Z), Pragativadi "Canva Goes All-In on AI Agents as MCP Hits General Availability With New APIs and Canva Craft" (14:02Z), varindia (09:03Z). Pre-window: BigGo Finance (11-26T20:08Z), MediaBrief (11-26T11:23Z). Canva's own newsroom blocks scraping (HTTP 403 on newsroom/rss.xml and sitemap.xml), so the **primary announcement URL could not be verified** — [REPORTED].
  https://news.google.com/rss/search?q=Canva+MCP+server+general+availability&hl=en-US&gl=US&ceid=US:en

- **Google Workspace "agent tax" backlash is now a tracked narrative (2026-11-27, in-window)** — Martin Alderson, "The agent tax has arrived: Google Workspace's MCP pricing" (datePublished 2026-11-27T00:00:00Z; HN 50671983 at 21:45Z, 3p/0c). Argues Google charges agents per request for Workspace data that apps read for free, who may follow, and why it could backfire. This is the first substantive critical analysis of the Nov 24 GA pricing.
  https://martinalderson.com/posts/the-agent-tax-has-arrived/
  https://news.ycombinator.com/item?id=50671983

- **Together AI "Hurdle" — open-source tool for testing Claude Code and Codex agents (in-window coverage)** — eWeek "Together AI Releases Hurdle, an Open-Source Tool for Testing Claude Code and Codex Agents" (2026-11-27T11:57Z); Superpower Daily first reported it pre-window (2026-11-25T22:34Z). Primary Together AI blog URL `together.ai/blog/hurdle` → **404 Not Found** (live Together blog slugs: the-open-source-ai-stack, together-link-frontier-quality-open-models-in-the-harness-you-already-use, together-post-training) — the official Hurdle post could not be located. [REPORTED]
  https://news.google.com/rss/search?q=%22Hurdle%22+Together+AI+Claude+Code+Codex&hl=en-US&gl=US&ceid=US:en

- **Unsloth Desktop gives AMD's XDNA 2 NPU "agent chores" (2026-11-27, in-window)** — Digg "Unsloth Desktop gives AMD's XDNA 2 NPU agent chores—not the whole job" (2026-11-27T05:52Z). Relevant to the desktop-AI-assistant angle: local-NPU agents are being scoped to narrow subtasks rather than full agent loops. unslothai/unsloth-desktop → **404**; unslothai/unsloth latest release v0.1.925-beta (2026-11-25, pre-window). [REPORTED]
  https://news.google.com/rss/search?q=Unsloth+Desktop+AMD+XDNA+2+NPU&hl=en-US&gl=US&ceid=US:en

- **Microsoft: Nadella says Claude Code cut VS Code usage within months (2026-11-27, in-window)** — Foro3D headline at 13:11Z. [REPORTED] — headline-level, low-tier source.
  https://news.google.com/rss/search?q=Nadella+Claude+Code+VS+Code+usage&hl=en-US&gl=US&ceid=US:en

- **Anthropic Messages API Rust migration — in-window cost-analysis follow-up** — TradingKey "Anthropic Stock Price Forecast: Rewriting Messaging API in Rust Expected to Lower Claude Service Costs" (2026-11-27T16:33Z). The **first-party post remains pre-window** ("Migrating our Messages API to Rust", Nov 25, 2026) and claims ~70% less CPU; no Anthropic update in-window.
  https://www.anthropic.com/research/migrating-api-to-rust

---

## E. Other in-window releases / new tools surfaced via HN and press

- **Show HN: ClawdTime — a CUA agent for long tasks that FaceTimes you when stuck (2026-11-27T19:52Z, 3p/2c)** — computer-use agent that escalates to a video call when blocked. https://news.ycombinator.com/item?id=50670940 · https://www.clawdtime.com/
- **Show HN: "AI agents can now call you" (2026-11-27T15:04Z, 4p/5c)** — https://news.ycombinator.com/item?id=50667755
- **SessionGraph — visualize all your coding-agent sessions in one interactive graph (2026-11-27T21:07Z, 24p/10c)** — top engagement of the window. https://news.ycombinator.com/item?id=50671651 · https://sessiongraph.ai/
- **Show HN: Open-Sourced Code Mode to cut ~60% of a Rust agent's token burn (2026-11-27T11:51Z)** — https://news.ycombinator.com/item?id=50665796 · https://github.com/legend-of-alan/ghostmode
- **36Kr: "The Core Figure Behind Claude Code Reflects on the Future of Vibe Coding" (2026-11-27T04:41Z)** — https://news.google.com/rss/search?q=Claude+Code+vibe+coding&hl=en-US&gl=US&ceid=US:en
- **User-reports cluster for Claude Code in-window**: How-To Geek "I let Claude Code run my Docker home server" (22:00Z), XDA "I asked Claude Code to build a racer with splitscreen and DualSense support" (15:30Z), MakeUseOf "Claude helped me clean up my network" (14:30Z), Kingy AI "If Claude won't do the work, it should say so" (19:19Z) — indicates a shift in the discourse from capability demos to **reliability/refusal-behavior** complaints.
- **"Claude Now Lets You Build and Install Your Own Mac and Windows Apps Without Writing a Line of Code" (2026-11-27T10:28Z, techtimes.co.uk)** — desktop-assistant angle. [REPORTED] — headline-level, primary not located.
- **OpenAI Codex App v26.1120 & CLI v0.172.0 update (2026-11-27T10:33Z, PaidFreeDroid)** — secondary corroboration of the CLI v0.172.0 stable (primary-verified via npm/GitHub) and a Codex desktop-app build number. [REPORTED] for the App build.
- **MCP security-analysis wave in-window** (non-release, but tracks the advisory cluster): HackerNoon "We Swapped Our MCP Server's Base Image and Went From 36 Reported Vulnerabilities to Zero" (05:06Z), OrcaRouter "MCP penetration testing: the surface behind the tool call" (05:27Z) and "HexStrike AI: 150 tools behind an open door" (05:27Z), OX Security "Plug and Pray: How AI Is Changing Software Supply Chain Attacks" (15:26Z), Medium "The Hidden Economics of Tool-Using AI" (20:36Z).

---

## F. Pre-window carry-forward (explicitly flagged, no in-window update found)

- Google Workspace MCP servers + Workspace CLI GA, Standard/Scaled tiers, Feb 1 2027 enforcement — announced 2026-11-24; in-window activity limited to the Nov 27 recap + third-party "agent tax" analysis (see §A, §D).
- Anthropic **Claude Ship** (review/fix/approve GitHub PRs) — TechRepublic 2026-11-26T21:35Z; no in-window release/announcement; `npm claude-ship` → not found; `anthropics/claude-ship` GitHub repo unverified (API rate-limited).
- Anthropic **Skills over MCP beta** for Claude/Claude Code (Dataconomy 2026-11-26T13:03Z) + **Claude Code 2.1.332 `server:skill` support** — pre-window feature; in-window it surfaced only as third-party commentary (§B).
- Anthropic **EFS beta**, **Opus 4.5 deprecation (retirement 2027-01-22)** — Claude Platform release notes dated 2026-11-23; no in-window change.
- Anthropic **Messages API → Rust** (~70% less CPU) — Nov 25; in-window only stock-analysis follow-up (§D).
- Together AI **Hurdle** — Nov 25 release, Nov 27 press pickup; official blog URL unresolvable (§D).
- OpenAI + Cisco **Shirudo** (eBPF Linux runtime shield) — Nov 23/24 first-party and press; in-window pickup only (LinkedIn 2026-11-27T10:00Z). https://openai.com/index/introducing-shirudo
- **Cursor** — no in-window signal: cursor.com/changelog latest entry is Nov 6 ("Voice Chat with Agents" Nov 6, "Build Live Apps in Cursor Agents" Nov 5); `getcursor/cursor` GitHub releases API returns [] (repo moved); npm `@cursor/cli` → not found; `cursor-agent` npm stale (1.0.3, 2025-01-10).
- **Amp** — no public GitHub repo; only npm CI builds (§A).
- **Aider** (v0.86.0, 2025-08-09), **Roo Code** (v3.54.0, 2026-05-15), **Claude Squad** (v1.0.20, 2026-08-20), **Amazon Q Developer CLI** (v1.19.7, 2025-11-17) — no in-window releases; release data unchanged from prior cycles.

---

## G. Access gaps / failed retrievals this cycle

- `web_search` unusable — DuckDuckGo bot-detection challenge on the single attempt made (no further calls).
- GitHub REST API **rate limit hit** (unauthenticated, 78.54.92.143) partway through — `anthropics/claude-code`, `block/goose`, `cline/desktop`, `anthropics/claude-ship`, `anthropics/claude-cookbooks` release lookups could not be completed via API in this cycle (earlier captures from the same cycle remain valid).
- `sourcegraph/amp`, `sourcegraph/amp-cli`, `sourcegraph/amp-vscode` → GitHub 404 (Amp ships via npm only).
- `getcursor/cursor` → 301 redirect; GitHub releases list empty; `@cursor/cli` npm → not found; `cursor-agent` npm stale since 2025-01-10.
- `amazon-q-developer-cli` npm → not found; AWS repo last release 2025-11-17.
- `gemini-cli-extensions/extensions` → 404 on the commits API (org/repo name unverified).
- Anthropic RSS (`anthropic.com/rss.xml`) → Next.js error page; `anthropic.com/engineering/sharing-claude-code-skills-across-teams` → 308 → `/research/sharing-...` → 404.
- `docs.claude.com/en/docs/claude-code/scheduled-tasks` → 301 → resolves only with redirect-following; `support.claude.com` article URL 12512136 → "That page doesn't exist".
- `together.ai/blog/hurdle` → 404; `together.ai/blog` lists no Hurdle post.
- `canva.com/newsroom/*` and `canva.com/sitemap.xml` → HTTP 403 (bot-blocked) — Canva MCP GA not primary-verified.
- `tokenpost.com` sitemap exposes no 2026-11-27 article URLs; guessed permalink → 404. `mlq.ai` guessed permalink → 404. `biggo.com` guessed permalink → 404. `reuters.com` article body → paywall/bot page ("reuters.com", 774 bytes).
- `techrepublic.com` article URL guess → 301 (no canonical captured); `briefia.com` → JS redirect to /lander.
- Google News RSS item links are opaque redirect URLs (not resolvable server-side) — several headline-level items are therefore cited via their Google News RSS search URLs and marked [REPORTED].

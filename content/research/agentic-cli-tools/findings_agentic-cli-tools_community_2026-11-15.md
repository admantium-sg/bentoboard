# Community / Market — 2026-11-15 (window 2026-11-14T01:28Z → 2026-11-15T01:28Z)

Capture run: 2026-11-15T01:30Z → 03:05Z UTC. All timestamps UTC.
Novelty rule applied against `cumulative_findings.md` section `## 2026-11-14` (grep-verified).
**48 findings, each with a full source URL and an exact timestamp.**
**Reddit findings are TITLE-LEVEL ONLY** — Reddit post bodies were not retrievable in this environment (HTTP 403 / interstitial / 302-zero-byte); no body text was paraphrased. See "Collection gaps and access failures" at the end.
**Retrieval: `curl` only — 0 successful `web_search`, 0 `web_fetch`.** Yahoo Finance was rate-limited (HTTP 429) for ANT/ANTW/SPY; `r/AI_Agents`, `r/opencode`, `r/LocalLLaMA`, `r/ChatGPTCoding` returned zero-byte bodies (access gaps, not silence).

---

## SEC EDGAR — Anthropic, PBC (CIK 0002130357) (fetched 2026-11-15T01:33Z)

### VERIFIED NEGATIVE — no filing on 2026-11-13, 2026-11-14 or 2026-11-15
- Detail: The full `filings.recent` array was read from `https://data.sec.gov/submissions/CIK0002130357.json` (3,480 B, HTTP 200). The newest entry is still **FWP 0001628280-26-073045 (Japan Amendment)**, accepted 2026-11-12T11:08:43Z. Nothing newer exists. The complete ladder: FWP ×5 (2026-11-12 / 11-11), S-1/A (2026-11-10, 2026-11-02), S-1 (2026-10-26), DRS/A ×6 (2026-10-09 → 2026-07-13), DRS (2026-06-01). **Still NO 424B4, NO 424B1, NO 8-A12B, NO EFFECT, NO 8-K, NO FWP after Nov 12.**
- **The prior cycle's "Nov 13 record completely empty" is now a three-day verified negative (Nov 13, 14, 15) — and Nov 14/15 are Saturday/Sunday, so a weekend filing would have been notable and did not happen.** The IPO's next observable EDGAR event is now on/after Nov 16 (Mon). The Australian retail tranche closes Nov 17 17:00, US pricing Nov 18, listing Nov 19 — the filing gap is now uncomfortably close to pricing.
- `tickers: ["ANT"]`, `exchanges: [null]` — unchanged. **No live ANT quote exists yet.**
- Timestamp: 2026-11-15T01:33Z
- Source: https://data.sec.gov/submissions/CIK0002130357.json

---
## Hacker News — Show HN / Ask HN agentic tooling (fetched 2026-11-15T01:45Z)

Queried the Algolia `search_by_date` API with `tags=story`, `created_at_i` inside the window, 8 pages of 100 (606 unique stories deduplicated; 117 matched an agent/CLI/model keyword filter). **All items below are newly posted in-window and were grep-verified absent from `cumulative_findings.md`.** HN exposes title + URL + timestamp + points; no bodies were retrieved for these, so they are **title-level findings**.

### The Claude Delusion
- Detail: The single highest-signal HN story of the window — **145 points / 182 comments**, the largest discussion by a wide margin. A blog post arguing that users' perception of Claude degrading is a self-inflicted pattern of expectation and confirmation rather than a model regression. It sits directly on top of the prior cycle's carry-forward #8 (model-tier degradation at peak hours) and the r/ClaudeCode thread **"I worry that Anthropic does not realize that their models are regressing in human 'intuition'"** (2026-11-14T23:23Z).
- Timestamp: 2026-11-14T13:36:17Z
- Source: https://www.netmeister.org/blog/claude-delusion.html

### Cursor - An update on our recent security incident
- Detail: **Cursor's full post-mortem on the 2026-10-29 supply-chain incident** (HN 6 points, 0 comments), published 2026-11-13 but surfacing on HN in-window. Body retrieved via curl. Key facts: the attack **started at Fireworks** — an attacker obtained an access key Cursor had issued to the training/inference vendor; the key was exposed by Fireworks, and the attacker used it to copy data from a read-only bucket Cursor shared with them. That bucket held **limited coding agent traces, mostly from 2025, from sessions not in Privacy Mode**, which Cursor was permitted to use for model training. **A small number of traces contained unredacted credentials; less than 0.01% of customers had API credentials exposed.** From those credentials the attacker reached select Cursor SaaS tools and read archived non-production source repos, support data, usage metrics, agent-conversation summaries, and credentials users sent to support. The attacker then published **malicious copies of Anthropic's Claude Code extension (versions 2.1.312 and 2.1.313) directly onto the cache serving the Cursor VS Code extension marketplace** — **not via Open VSX, which never had the malware** — live for **~11 hours on Oct 29**, with **at most 5,000 users** potentially affected. Cursor states this was **not a vulnerability in Anthropic's product**. Last attacker activity Nov 1, blocked. Cursor **moved all inference off Fireworks** as a precaution and "our other products, including Cloud Agents for customer teams, Grok Bot, and all other SpaceX SI products" were not affected.
- **Why it matters for this topic:** the agentic-CLI threat model has shifted from "the model does something" to "the harness's vendor credential leaks the agent traces, and the traces contain the credentials, and the traces are the training data." Agent traces are now a **credential-bearing data class**. Cursor also separately disclosed the **Aug 13, 2026 AIUC-1 certification for agent security and reliability**.
- Timestamp: 2026-11-14T13:38:45Z (HN); article dated 2026-11-13
- Source: https://cursor.com/blog/security-incident-update

### 98%-accurate model leaves an agent's state right only 21% of the time
- Detail: (HN 2 points, 0 comments) A Zenodo record quantifying **compounding error in agent state**: a component accurate 98% of the time still yields a correct final agent state only 21% of the time. Directly relevant to the reliability ceiling of long-horizon agent runs and to the "broken windows theory of coding agents" thread on the watchlist.
- Timestamp: 2026-11-14T10:48:00Z
- Source: https://zenodo.org/records/23958737

### In 1 in 6 repos with both files, Claude Code never loads the AGENTS.md
- Detail: (HN 2 points, 0 comments) A quantified study (Harbor, gethrbr.com) of **3,905 CLAUDE.md and AGENTS.md files** from public GitHub repos, **updated in-window to 2026-11-14**. Body retrieved via curl. Findings: in repos keeping both files at root, **16% of CLAUDE.md files never mention the AGENTS.md** (so Claude Code never loads it — Anthropic's docs say Claude reads only CLAUDE.md when one exists); **15%** merely *ask in a sentence* for it to be read (works only if Claude decides to open the file — text, not an import); **7%** started as copies and **drifted**, so Claude and Codex follow different rules; **19% of CLAUDE.md files exceed Anthropic's 200-line suggestion** (median 81 lines); **~30,000 AGENTS.md files (2.6%) exceed the 32 KiB Codex reads by default**, so the tail never reaches the model. Sampling: GitHub code search counts 839,680 CLAUDE.md and 1,142,784 AGENTS.md files; ten size bins, weighted estimates; **745 repo pairs** compared.
- **Why it matters:** this is the **first hard measurement** of the AGENTS.md-vs-CLAUDE.md fragmentation the prior cycle only observed qualitatively ("AGENTS.md is no longer being assumed"). It confirms the fragmentation is systematic, not anecdotal: **roughly 1 in 4 repos where both files exist has a mechanism that silently fails to deliver AGENTS.md to Claude.**
- Timestamp: 2026-11-14T11:40:57Z (HN)
- Source: https://gethrbr.com/blog/claude-md-agents-md-github-study

### Transitive Policies for Agents: Agent Permissions Don't Automatically Compose
- Detail: (HN 4 points, 0 comments) **Part 5 of 5 in "Delimiters in Languages"**, by Guillaume Lethuillier, **dated 2026-11-14** — the in-window continuation of the "Architectural Gravity" / control-language line the prior cycle flagged. Body retrieved via curl. Core claim: **agents can each obey their tool permissions and still leak private data together.** After examining the **MCP, A2A and OAuth token-exchange (RFC 8693)** specifications, the author finds **no specification for labeling responses with confidentiality restrictions and checking their recipients.** The worked example is a three-agent escalation (Writer → orchestrator → Reader → Sender) in which a malicious customer's "please resend the approved report" turns a *reported request* into an *instruction*, and private customer data leaves by email **without any agent exceeding its tool permissions.** The proposed fix is **transitive policies** preserving authorization, information-flow restrictions and action history across handoffs, enforced by **trusted runtime software outside the models** recording provenance as metadata the models cannot alter, applied to every agent including the orchestrator.
- **Why it matters:** this is the strongest conceptual statement in-window of why **per-tool permission checks are structurally insufficient for multi-agent systems** — directly parallel to the carry-forward #7 "documented permission hole" in Code Mode and #10 control-plane tooling wave.
- Timestamp: 2026-11-14T12:33:40Z (HN)
- Source: https://glthr.com/transitive-policies-for-ai-agents

### Agent Distraction (Google Developers Blog)
- Detail: (HN 3 points, 0 comments) Sam Saccone + Madhuri Garikapati, Google. Body retrieved via curl (dated **Nov 6, 2026** — surfaced on HN in-window, so the *discussion* is in-window, the post is background). Quantifies TODO-induced agent detours at scale using inline `TODO(bug/...)` comments as a proxy, across "hundreds of millions of individual agent steps": **13% of file-reading sessions are exposed** to an inline TODO/FIXME bug reference; of those, **6% trigger secondary action**, and **83% of those actions were completely unprompted**; of the unprompted detours **41% chase closed dead ends** and **57% trigger scope creep.**
- Timestamp: 2026-11-14T03:47:16Z (HN)
- Source: https://developers.googleblog.com/agent-distraction/

### A 27-byte telemetry response nobody reads freezes Claude Desktop every two days
- Detail: A deep-dive (deafbeef blog) into a **file-descriptor leak in Claude Desktop on Linux**: the app never reads a 27-byte telemetry reply, Chromium keeps a file descriptor open per reply until the renderer exhausts them, and the renderer then hangs and crashes with SIGILL — producing a **1.5 TiB core dump** per incident. The author reports **Anthropic's bot closed the issue as "not about Claude Code."** Surfaced on HN twice in-window (06:21Z, 18:27Z) and on r/ClaudeCode at 14:09Z — a three-channel in-window spread.
- **Why it matters:** a concrete, named, reproducible failure mode in the **desktop assistant** half of this beat, plus a vendor-support-friction datapoint.
- Timestamp: 2026-11-14T06:21:16Z and 2026-11-14T18:27:55Z (HN)
- Source: https://blog.dfb.sh/blog/claude-desktop-freeze/

### Claude asked to renumber pages deletes professor's syllabus, year of notes
- Detail: **41 points / 62 comments** — the second-largest in-window discussion. Tom's Hardware reports an agent asked to renumber pages **deleted an entire law professor's syllabus and a year of lecture notes**, with the agent's own admission quoted: *"you're right to be angry, I deleted your files through my own carelessness."* The largest discussion in the window after "The Claude Delusion."
- Timestamp: 2026-11-14T17:51:13Z
- Source: https://www.tomshardware.com/tech-industry/artificial-intelligence/rogue-claude-ai-tasked-with-renumbering-pages-accidentally-deletes-law-professors-entire-syllabus-one-year-of-lecture-notes-youre-right-to-be-angry-i-deleted-your-files-through-my-own-carelessness-humbled-agent-admits

### SlopCodeBench: Benchmarking How Coding Agents Degrade over Long-Horizon Tasks
- Detail: (HN 3 points, 0 comments) An arXiv preprint (2603.24755) proposing a benchmark for **coding-agent degradation over long-horizon tasks** — i.e. the "broken windows theory of coding agents" watchlist item has now produced a measurable benchmark.
- Timestamp: 2026-11-14T15:11:53Z
- Source: https://arxiv.org/abs/2603.24755

### Everything is a plugin (to the model context) — deepseek-ai/deepseek-harness
- Detail: (HN 2 points, 0 comments) **DeepSeek published a harness repo** — "Everything is a plugin (to the model context)". A third-party-party harness from a frontier-lab-adjacent vendor, and a direct competitor to Claude Code / Codex / opencode. Sits alongside the in-window **"DeepSeek releases chat, web tools API"** (api-docs.deepseek.com, 20:37Z) and **"DeepSeek v4.1 Flash matched Opus5.5 and Grok4.7 on a diplomatic negotiation eval"** (15:49Z).
- Timestamp: 2026-11-14T22:18:10Z
- Source: https://github.com/deepseek-ai/deepseek-harness

### The end of credential sprawl for agents (Vercel)
- Detail: Vercel publishing a **credential-management layer for agents** — vendor-published positioning on the agent identity/credential problem that the Cursor incident (above) turns from theory into breach reality. Same company published **"Build Your Own AI Coding Agent Harness"** (Vercel Academy) at 12:09Z in-window, i.e. **two Vercel agent-platform posts in one window**.
- Timestamp: 2026-11-14T23:38:08Z (HN)
- Source: https://vercel.com/blog/the-end-of-credential-sprawl-for-agents

### Sam Bankman-Fried would have made nearly $40B in Anthropic IPO (FT)
- Detail: **10 points / 7 comments.** The Financial Times reports SBF's **FTX estate position in Anthropic** would have been worth **nearly $40B** at the IPO. This is the highest-profile new **IPO-adjacent** datapoint in-window and it lands 4 days before the Nov 18 pricing.
- Timestamp: 2026-11-14T02:30:28Z
- Source: https://www.ft.com/content/0ef40ac9-6d01-428f-98c8-a52bf5b9a787

### Amazon's plan to own the product data and fight AI shopping agents (Reuters)
- Detail: Reuters, surfaced on HN at 12:09Z (**5 points, 0 comments**). **Amazon is positioning to own product data as a defence against AI shopping agents.** This is the **first corporate counter-move to the agentic-commerce payment layer** (the carry-forward #6 thread on ChatGPT Wallet / x402 / United's ban). It is a **named platform response, but from a retailer, not an airline** — no second *carrier* has followed United yet. Corroborated in-window by **The Verge, "Amazon has a plan to index the online shopping data"** (HN 2026-11-14T14:34:43Z, 4 points) — https://www.theverge.com/tech/1033697/amazon-world-product-graph-ai-search
- Timestamp: 2026-11-14T12:09:29Z (Reuters); 2026-11-14T14:34:43Z (The Verge)
- Source: https://www.reuters.com/business/media-telecom/amazons-plan-own-worlds-product-data-fight-ai-shopping-agents-2026-11-13/

### Show HN — agentic tooling (all in-window, all grep-verified new)
- Detail: A dense cluster of agentic-CLI tooling launches. Notable, with self-described positioning:
  - **Timon** — open-source AI workstation for coordinating agents → https://github.com/ai-timon/timon (12:52Z)
  - **Agweb** — "a browser for agents that stays out of your way" → https://github.com/paul-nameless/agweb (14:08Z, **87 pts / 24 comments** — the highest-scoring agent-tooling Show HN in-window)
  - **Shotoku** — local-first action governance and budget caps for AI agents → https://www.shotoku.dev/ (13:02Z) — **a control-plane/governance tool, continuing the carry-forward #10 wave**
  - **Bright Lines** — a fail-closed guard hook for Claude Code → https://github.com/LeriderTechnologies/bright-lines (12:03Z) — **direct mitigation for the 2.1.325 sandboxed-Bash-asks-by-default friction**
  - **Cowork** — self-hosted task queue and dashboard for Claude, Codex and AI agents → https://github.com/slashman413/cowork (16:27Z)
  - **CodeRelay** — let your coding agent delegate work to a teammate's agent → https://github.com/AymanAhsan/CodeRelay (16:56Z)
  - **Coppice** — local desktop app for multi-agent coding → https://github.com/fertile-org/coppice (18:14Z)
  - **SunsetLint** — find retiring AI model IDs in your GitHub repos → https://www.sunsetlint.com/ (13:41Z)
  - **Model-share** — see which Claude models used your weekly limit → https://github.com/shubhamverma8991/claude-model-share (18:07Z) — **quota-accounting tooling (carry-forward #5)**
  - **AI Time Estimator** — how long Claude Code will take, from your own logs → https://github.com/noambrand/ai-time-estimator (18:32Z)
  - **Bowserr** — an MCP-first browser for AI agents (one Rust binary) → https://browserr.dev (03:22Z)
  - **Back endskills** — agent skills for safer auth, data and migration code → https://github.com/globalmpc/backendskills (03:32Z)
  - **Stampdrill** — language for API calls, load tests and MCP server → https://stampdrill.com/ (08:05Z)
  - **Traits** — teach your agent to code like you → https://traits.sh/ (15:39Z)
  - **RedHands** — MCP for multi-stage offensive security tools → https://github.com/yasindce1998/redhands (20:05Z)
  - **Ryph** — event-driven self-hosted agents for incident response → https://github.com/ryph-hq/ryph (14:05Z)
  - **Smart Node** — self-hosted crew of AI agents for a small business → https://github.com/dklymentiev/smart-node (19:17Z)
  - **Mopup** — clean up after builds and coding agents on macOS → https://mopup.online/developers (15:03Z)
  - **ai-access-auditor** — see and revoke what your AI coding agents can access → https://github.com/dirmedmr-alt/ai-access-auditor (21:35Z) — **a permission-audit tool**
  - **0rwx** — a simple model of AI usage, inspired by Unix permissions → https://0rwx.com/ (20:38Z)
  - **Existence-trace 0.4.6** — journal agent justifies a new rule scope → https://github.com/MaxonT/existence-trace/releases/tag/v0.4.6 (14:00Z)
  - **Cyberviber** — a $15 touchscreen to show which Claude session needs you → https://cyberviber.de/ (12:54Z)
  - **Open.Dotlet** — a 30-key keypad for saved Codex tasks → https://opendotlet.com/ (13:51Z)
  - **Aris** — an open-source agent that lives in the MacBook notch → https://github.com/LumenJSN/Aris (13:57Z)
  - **Aris / orchestrator** — a 3D office where real Claude Code sessions work as employees → https://github.com/brstic/orchestrator (21:46Z)
  - **Agentview-style** — "A browser RTS where you play alongside your local agents" → https://agentcommand.gg/ (16:51Z)
  - **LetThemBuild** — Claude, Codex, Gemini, Grok & OpenRouter models in parallel → https://letthembuild.com (23:24Z)
  - **AI Quest** — interactive sandboxes for agentic web apps → https://ai-quest.dev/ (22:34Z)
  - **WhatWeRun** — a database of real production AI agent stacks → https://whatwerun.dev (19:42Z)
  - **Command Notepad** — an offline library for terminal commands → https://commandnotepad.com/ (18:50Z)
  - **My agent org speedran a company** → https://perfloop.ai/blog/my-agent-org-speedran-a-company (19:27Z)
  - **Building an Agentic Loop in Temporal** → https://cadenya.com/handwritten/agentic-loop-in-temporal (19:59Z)
  - **EnvOpt: Automated Optimization for Agent Environments** (Bespoke Labs) → https://bespokelabs.ai/blog/envopt (22:01Z)
  - **Are we building multi-agent systems without a proper trust layer?** → https://www.sinapsdata.com.br/en (22:23Z)
  - **The Missing Ring-0 Protections for AI Agents** → https://hwtn.io/essays/t0013-missing-ring-0-protections-ai (16:23Z)
  - **Before I Trust an Agent, I Try to Break Its Box** → https://kunalkushwaha.github.io/2026/11/06/before-i-trust-an-agent/ (16:14Z)
  - **0rwx / Turbo Vision-style UI for Claude Code** → https://github.com/runvnc/tvclaude (17:18Z) · **Themes for Claude Code** → https://tessera.shiptiffin.app/ (17:33Z)
  - **WhatWeRun / What makes an agent chat feel good?** → https://ouijit.com/writing/agent-chat-feel/ (15:11Z)
  - **Timon / Coppice / Agweb / Cowork** — a visible convergence on **"agent control surface"** rather than "agent itself".
- Timestamp: various, all 2026-11-14
- Source: as listed per item above

## Reddit addendum — cross-harness memory, and the exact in-window counts

### Sharing one project memory across Cursor, Claude Code and Codex
- Detail: r/cursor, **2026-11-14T13:33:42Z** (https://www.reddit.com/r/cursor/comments/1xw2iqy/) — a user asks how to share one project memory across Cursor, Claude Code and Codex and keep it valid after refactors. **This is the community-side answer to the AGENTS.md/CLAUDE.md fragmentation finding above**: practitioners are hand-rolling a cross-harness memory layer because the vendor-native answer does not exist. (Title-level only.)
- Timestamp: 2026-11-14T13:33:42Z
- Source: https://www.reddit.com/r/cursor/comments/1xw2iqy/sharing_one_project_memory_across_cursor_claude/

### Cursor quota complaints are the other half of the pricing story
- Detail: r/cursor in-window: *"Switched to the Super plan for "2.5x usage", and I ended up with less. Anyone else?"* (2026-11-14T21:10:59Z, https://www.reddit.com/r/cursor/comments/1xwdf2h/) · *"I like Cursor but I mainly use Anthropic models and the quota is not good for those"* (15:05:02Z) · *"Cursor api key in another app tells me i am using it via mcp when all other api keys act as a native agent"* (20:46:49Z) · *"Alternatives for Cloud Agents?"* (22:57:37Z) · *"Sharing one project memory across Cursor, Claude Code and Codex"* (13:33:42Z). **Cursor's Super-plan "2.5x usage" claim being contradicted by users is new and directly comparable to the Anthropic Fable 5.2 reset ambiguity.**
- Timestamp: 2026-11-14T15:05:02Z → 2026-11-14T22:57:37Z
- Source: https://www.reddit.com/r/cursor/comments/1xwdf2h/switched_to_the_super_plan_for_25x_usage_and_i/

### Exact coverage counts for the window
- Detail: **Reddit in-window entries: 265** — r/ClaudeCode 99, r/ClaudeAI 99, r/codex 34, r/singularity 26, r/cursor 7. **HN unique in-window stories: 706** (deduplicated across 9 Algolia pages + the `search_by_date` dump). **All Reddit findings in this file are title-level only** (no body retrievable — see access gaps).
- Timestamp: n/a
- Source: n/a

## Anthropic first-party surfaces — checked for in-window changes (fetched 2026-11-15T02:55Z)

### 🟢 VERIFIED NEGATIVE: no Anthropic first-party release, announcement, or release-note entry dated Nov 14 or Nov 15
- Detail: Three official surfaces fetched directly and parsed. **(1) Anthropic newsroom** `https://www.anthropic.com/news` — the newest dated articles are **"Building strong safety evaluations" (Nov 13, 2026)**, then *"Introducing Claude Fable 5.2 and Claude Mythos 5.2"* (Nov 9), *"Testing Claude on real-world electronics design"* (Nov 9). The page's "Latest news" stamp reads **November 15, 2026** but that is a rendering timestamp, not a post date; **`grep -c "Nov 14"` = 0 on both the newsroom and `/news/announcements`**. **(2) Claude Platform release notes** `https://platform.claude.com/docs/en/release-notes/overview` — newest entry **November 12, 2026** ("We’ve launched self-hosted Claude Managed Agents…"), then November 9 (Fable 5.2 / Mythos 5.2). No November 14 or 15 2026 entry (the only "November 14" string on the page is **November 14, 2025**). **(3) Claude Apps release notes** `https://support.claude.com/en/articles/12138966-release-notes-for-claude-apps` — newest entry **November 12, 2026** ("Claude Meetings is rolling out in beta on Team and Enterprise plans in Claude and Claude Desktop… add Claude to a Google Meet call as a visible participant…"). Both help-centre pages carry an "Updated this week" label, but no dated entry inside the window. **Conclusion: a weekend, with no vendor release. Any in-window Claude product news in this file is community discussion of a Nov 9–13 release, not a new release.**
- Timestamp: fetched 2026-11-15T02:55Z; last first-party entry 2026-11-12
- Source: https://www.anthropic.com/news · https://platform.claude.com/docs/en/release-notes/overview · https://support.claude.com/en/articles/12138966-release-notes-for-claude-apps

### 🔴 Mythos access: a COMMUNITY CLAIM OF PUBLIC AVAILABILITY, CONTRADICTED BY THE FIRST-PARTY DOCS
- Detail: r/ClaudeAI, **2026-11-14T23:46:52Z**, title *"Anthropic has opened up Claude Mythos access to the public."* — https://www.reddit.com/r/ClaudeAI/comments/1xwguid/anthropic_has_opened_up_claude_mythos_access_to/ (**title-level only; body not retrievable**). Checked against the first-party model matrix `https://docs.claude.com/en/docs/about-claude/models/overview.md`, which still lists **Claude Mythos 5.2 / 5.1 / 5 as "limited availability"** with the rule: *"**Limited access:** Available only to organizations verified through Anthropic's verification programs, such as the Cyber Verification Program. To request access, apply to the program that covers your use case."* The rendered matrix carries a lock marker on every Mythos row. **So: a community claim that Mythos went public in-window, and the documentation at fetch time still says it is gated. This is an unresolved contradiction — either the Reddit claim refers to something narrower (e.g. Mythos reaching verified orgs in a channel it previously did not), or it is wrong. Flagged for the fact-checker.** Also in-window: *"I used Opus and Mythos to make a dashboard to help me see what all my agents are up to."* (r/ClaudeAI, 18:28:18Z) — Mythos is in active use by developers, and *"Anthropic has opened up Claude Mythos access to the public"* sits alongside *"Claude weekly roundup (Nov 9–15): Fable 5.2 launches, Claude joins your meetings"* (r/ClaudeAI, **2026-11-15T01:10:41Z**).
- Timestamp: 2026-11-14T23:46:52Z (Reddit claim); docs fetched 2026-11-15T02:55Z
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xwguid/anthropic_has_opened_up_claude_mythos_access_to/ · https://docs.claude.com/en/docs/about-claude/models/overview.md · https://support.claude.com/en/articles/14604842

### Claude Meetings reaches the community in-window (feature itself is Nov 12, out-of-window)
- Detail: r/ClaudeAI **"Claude weekly roundup (Nov 9–15): Fable 5.2 launches, Claude joins your meetings"** (2026-11-15T01:10:41Z, https://www.reddit.com/r/ClaudeAI/comments/1xwil05/). The underlying feature is the **November 12, 2026** help-centre release-note entry (**Claude Meetings**, beta, Team and Enterprise, visible participant in a Google Meet call that takes notes, answers questions, and builds artifacts — docs, whiteboards, slides). **Claude Meetings was first reported on Nov 10** (TechCrunch, in `daily_reports/2026-11-11.md`) and its Google Meet integration on Nov 11 (`daily_reports/2026-11-12.md`), so the *news* is background; what is new is that **by Nov 15 it is being absorbed into weekly community roundups as a shipped product, not an announcement** — the announcement-to-feature-pipeline has closed on it.
- Timestamp: 2026-11-15T01:10:41Z (Reddit); feature 2026-11-12
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xwil05/claude_weekly_roundup_nov_915_fable_52_launches/ · https://support.claude.com/en/articles/12138966-release-notes-for-claude-apps

## Reddit — in-window friction clusters not yet captured (title-level; bodies inaccessible)

### The Fable 5.2 reset economy has become a scheduling problem users are solving socially
- Detail: New in-window threads, none of them in `cumulative_findings.md` under these titles: r/ClaudeAI **"Usage reset anxiety anyone?"** (2026-11-14T17:29:44Z) · **"What's YOUR sweet spot to use reset?"** (22:17:18Z) · **"Going back to Opus 5.5 after x3 Fable 5.2 resets and x1 full reset"** (16:00:32Z) · **"Best setup to use less usage for Pro subscriptions"** (19:37:46Z) · r/ClaudeCode **"Claude usage finishing faster in my other account"** (2026-11-15T00:50:24Z) · **"Optimizing the fable resets"** (2026-11-14T22:43:52Z) · **"Is the weekly fable usage additional?"** (10:58:55Z) · **"The usage window in VS Code tells you to 'Stop sessions you no longer need' to save usage. But uh, how DO you…"** (20:06:38Z). **The substance: users are now visibly rationing Fable 5.2 across resets, and Anthropic's own VS Code usage-window copy ("Stop sessions you no longer need") is being discussed as an instruction users do not know how to obey.** This upgrades the existing "Fable 5.2 reset accounting is not discoverable" thread from a documentation gap to a **behavioural workaround economy**.
- Timestamp: 2026-11-14T10:58:55Z → 2026-11-15T00:50:24Z
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xw82wp/usage_reset_anxiety_anyone/ · https://www.reddit.com/r/ClaudeAI/comments/1xwewdg/whats_your_sweet_spot_to_use_reset/ · https://www.reddit.com/r/ClaudeCode/comments/1xwi6dx/claude_usage_finishing_faster_in_my_other_account/

### Users are routing around the newest tier — the tier-split pattern is now a named community strategy
- Detail: r/ClaudeCode **"Fable 5.2 as orchestrator, planner, reviewer and Opus 5.5 as implementation agent?"** (2026-11-14T20:34:13Z, https://www.reddit.com/r/ClaudeCode/comments/1xwckod/) and r/ClaudeAI **"Has anyone found a way to use replit as a planner?"** (r/ClaudeCode 2026-11-14T15:14:01Z) and **"How do you get Codex, Claude Code and a planner agent working together in one place instead of copy-pasting be[ing]…"** (r/ClaudeAI 15:03:40Z, https://www.reddit.com/r/ClaudeAI/comments/1xw4j1d/). **This is the model-tier-degradation workaround from carry-forward #9, but stated positively rather than as a complaint: users are now explicitly assigning Fable to planning/orchestration/review and Opus to execution, and looking for a third tool (Replit) as planner.** Note the same Reddit thread set is also trying to unify three CLIs that do not share a memory format — the same fragmentation seen in the Harbor AGENTS.md/CLAUDE.md finding.
- Timestamp: 2026-11-14T15:03:40Z → 2026-11-14T20:34:13Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xwckod/fable_52_as_orchestrator_planner_reviewer_and/ · https://www.reddit.com/r/ClaudeAI/comments/1xw4j1d/how_do_you_get_codex_claude_code_and_a_planner/

### MCP aggregation is being solved by users, one meta-server at a time
- Detail: r/ClaudeAI **"Built with Claude Code: one MCP server that gives Claude all your other MCP servers, with way fewer tool-call[s]"** (2026-11-14T19:52:29Z, https://www.reddit.com/r/ClaudeAI/comments/1xwblhz/) · **"I built ywza with Claude Code: an MCP server that lets Claude use your PC, from your phone"** (18:58:37Z) · **"I built an MCP connector so Claude can read and reply to my WhatsApp (with my OK)"** (r/ClaudeAI 22:27:43Z) · **"I built Photoshop for Gaussian Splatting using Fable 5.2 and Opus 5.5"** (r/ClaudeCode 2026-11-14T21:57:56Z). **Tool-count bloat is being fixed by a third-party meta-server layer, and the meta-server's selling point is explicitly fewer tool calls — the same economic argument as the MCP-aggregation Show HN items earlier in the window.** The WhatsApp connector's "with my OK" is a permission model built into a user-built agent surface.
- Timestamp: 2026-11-14T18:58:37Z → 2026-11-14T22:27:43Z
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xwblhz/built_with_claude_code_one_mcp_server_that_gives/

### Code Mode: the community is reading the changelog as a spec
- Detail: r/ClaudeCode **"Claude Code 2.1.323: experimental Code Mode (Claude writes JS to call tools), plugin version pinning, permissi[ons]…"** (2026-11-14T07:15:28Z, https://www.reddit.com/r/ClaudeCode/comments/1xvw576/). **A community member is paraphrasing the 2.1.323 release as a three-part feature story — Code Mode, plugin version pinning, and the permission change — which is the same frame the docs use.** Grep against `cumulative_findings.md`: 0 hits for this thread, so it is new; the Code Mode *feature* itself is already captured as release #10 of this cycle, but the fact that the community is treating the changelog as a readable spec (rather than discovering Code Mode by accident) is the new signal. **No in-window thread yet reports the documented permission hole being exploited, and no user reports the PreToolUse-on-REPL mitigation being applied.**
- Timestamp: 2026-11-14T07:15:28Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xvw576/claude_code_21323_experimental_code_mode_claude/

### Two more user-built quota/usage trackers — the observability layer keeps being rebuilt by users
- Detail: r/codex **"I built Burnline, a free, open-source macOS app to track your Claude Code & Codex usage, API costs, limits, an[d]"** (2026-11-14T16:39:00Z, https://www.reddit.com/r/codex/comments/1xw6tb5/) and r/codex **"POV: You still have 30% of your Codex Pro weekly limit left and only 12 hours until reset"** (12:04:08Z) and **"Would you pay $10/month for discounted API pricing + pay-as-you-go usage?"** (11:20:13Z). Burnline was already in the file; the two pricing/limit-pressure threads are new. **Users are now being asked to price a metered-agent plan in advance** — a shift from "is there a plan" to "what is the right rate card".
- Timestamp: 2026-11-14T11:20:13Z → 2026-11-14T16:39:00Z
- Source: https://www.reddit.com/r/codex/comments/1xw0t1m/pov_you_still_have_30_of_your_codex_pro_weekly/ · https://www.reddit.com/r/codex/comments/1xw0253/would_you_pay_10month_for_discounted_api_pricing/

## Press — Anthropic IPO, funding, market (Google News RSS, fetched 2026-11-15T01:55Z)

Queries: `Anthropic IPO`, `AI agent funding raises`, `airlines AI agents booking ban`, `nonprofit lawsuit AI frontier halt`, `Cursor security incident`, `Graphon OR WhiteMatter OR Mirendil`, `Anthropic IPO Kraken ANTx OR 1.4 trillion`, `OpenAI $15 billion valuation`. All `when:2d` unless noted.

### Anthropic IPO — the price band and demand signal hardened; the "scarcity" mechanic went retail
- Detail: In-window coverage confirms and extends the prior cycle's picture. **Valuation $1.4 trillion; listing Nov 19 on Nasdaq; demand ~6x oversubscribed; the IPO could raise as much as $64 billion** ("Anthropic IPO Could Raise $64 Billion as Orders Reach Six Times" — Unite.AI, 11-13T22:31Z; "Anthropic IPO draws six times demand, but valuation remains under scrutiny" — Times of India, 11-14T10:52Z). **Dario Amodei pitched the IPO to Jamie Dimon in a livestream** (CNBC, 11-13T17:00Z; Barron's "4 Takeaways From Dario Amodei's Anthropic IPO Chat With Jamie Dimon", 11-13T20:28Z) saying he hopes it will **"underpromise and overdeliver"** and that **compute is "a huge uncertainty"** (Business Insider, 11-13T19:02Z). The Decoder (11-14T19:07Z) quotes Amodei admitting **"there's a huge uncertainty in what's going to happen next year"** days before the IPO.
- **New in-window specifics (all grep-verified absent from the 2026-11-14 cumulative section):**
  - **A $120.00 EEA/Swiss retail ceiling vs the $70–$78 US band is NOT reported anywhere in the in-window press** — searched explicitly; no new coverage of the European price gap appeared. **The gap remains an unresolved number, now entering its last news cycle before Nov 18 pricing.**
  - **Australia: "Anthropic's IPO: All-Country and Other Funds to Hold Up to ¥40,000 Worth"** (BigGo Finance, 11-14T12:35Z) — the Japanese retail cap is **¥40,000**. The Australian tranche closes Nov 17 17:00 as previously reported.
  - **Chinese and Hong Kong institutions are restricted**: Bloomberg (11-13T15:37Z) "Anthropic IPO Share Orders From China Are Said to Be Rebuffed"; The Defiant (11-14T07:57Z) "Anthropic IPO Said to Restrict China, Hong Kong Institutions."
  - **Anchor buyers named: Nvidia, Alphabet, Microsoft and Micron are all buying** (Motley Fool/Yahoo, 11-14T10:02Z and 10:22Z). "US AI Giants Are Trouncing China 10-to-1" (24/7 Wall St., 11-14T15:50Z) puts the total at **$26 billion from AI giants** (Globe and Mail, 11-14T22:13Z).
  - **Crypto brokers are building IPO access products before listing: Kraken opened ANTx request orders with a 5% spread** (The Defiant, 11-14T07:26Z; Bitcoin Foundation, 11-14T10:31Z) and **CMC Markets is letting UK clients buy options on Anthropic before it lists** (TradingView, 11-14T18:49Z). CryptoSlate (11-13T12:30Z) flags the lock-up risk. This is a **new market-structure datapoint: the IPO's pre-listing access layer is being built by non-traditional venues.**
  - **"Anthropic IPO Sparks 2X Leveraged ETF Filing as Wall Street Prepares for Nasdaq Debut"** (Coinpaper, 11-14T13:48Z) — a **leveraged IPO ETF filing** ahead of the Nov 19 listing.
  - **Sam Bankman-Fried's FTX estate would have made nearly $40B** (FT, 11-13T23:39Z; Benzinga, 11-14T15:00Z) — also on HN at 11-14T02:30Z.
  - **Jay Ritter ("Mr. IPO") flagged Anthropic IPO valuation risks** (Yahoo Finance, 11-14T18:47Z); Reuters (11-13T23:30Z) exclusive: **"Investors flock to Anthropic IPO but question durability of AI lead."** Reuters also reported "Anthropic IPO is overpriced, says CIO" (11-14T05:54Z). TradingKey (11-14T22:06Z) cites first-day-buying history: **average 60-trading-day return of -6%**.
  - **Macro overhang in-window: NVIDIA's CEO crisis / Jensen Huang's exit** dominates the same news cycle (Axios 11-14T15:08Z "Anthropic to IPO amid Nvidia fiasco"; Business Insider "How Jensen Huang's dramatic ouster from Nvidia affects Anthropic's $1.4 trillion IPO"). **This is a material risk factor for the Nov 18 pricing that no prior cycle flagged.**
- Timestamp: various, 2026-11-14
- Source: https://news.google.com/rss/search?q=Anthropic+IPO+when:2d&hl=en-US&gl=US&ceid=US:en

### OpenAI raises $15B at $1.25T — HALF what it wanted
- Detail: **OpenAI reportedly raised $15B at a $1.25 trillion valuation, half its original target** — Dataconomy (11-13T07:26Z), Tech Funding News (11-13T12:14Z), Stocktwits (11-13T20:57Z), OpenTools (11-14T08:09Z), 24/7 Wall St. ("OpenAI Raised Only $15 Billion, Half What It Wanted", 11-13T12:33Z). Grep-verified: **completely absent from the cumulative findings.** This is a major counterweight to the Anthropic IPO narrative — the incumbent leader is reportedly raising **half its target size** in the same week.
- Timestamp: 2026-11-13 (mostly; OpenTools and the roundup items are in-window)
- Source: https://news.google.com/rss/search?q=OpenAI+%2415+billion+valuation+when:2d&hl=en-US&gl=US&ceid=US:en

### Mirendil — ex-Anthropic researchers raise $1B Series A for a frontier lab where agents do the research
- Detail: **Mirendil raised $1B Series A** with **no valuation disclosed** (Tech Times, 11-13T05:25Z; SiliconANGLE, 11-13T21:22Z; TokenPost, 11-13T21:39Z; MLQ.ai, 11-13T21:42Z: "Ex-Anthropic researchers' startup Mirendil raises $1 billion to let AI agents do the work of an AI lab"). **Grep-verified absent from the cumulative findings.** Directly relevant: a frontier lab whose **research loop is run by agents** — the "agents do the AI lab" thesis is now funded at $1B scale, in the same week as Anthropic's IPO and four days before Anthropic prices.
- Timestamp: 2026-11-13
- Source: https://news.google.com/rss/search?q=%22Graphon%22+OR+%22WhiteMatter%22+OR+%22Mirendil%22+when:2d&hl=en-US&gl=US&ceid=US:en

### Graphon Labs — $35M for persistent agent memory; WhiteMatter — $20M to govern agents with agents
- Detail: Two more governance/observability-layer rounds, both grep-verified absent from the cumulative findings. **Graphon Labs raised $35M for "persistent graphon intelligence memory"** it hopes will "accelerate progress" toward AGI (Blocks & Files, 11-13T15:38Z; Quasa.io, 11-14T16:36Z). **WhiteMatter raised $20M "to Govern AI Agents With AI Agents"** (lavx.hu, 11-14T07:11Z). Together with LangChain's $300M/$3B (already in the cumulative file) this is now **four governance/observability/memory-layer rounds in the same week** — the "control-plane tooling wave" (carry-forward #10) has an explicit capital-allocation signature. Note Graphon's framing is more ambitious than governance: it positions persistent agent memory as an **AGI-progress** primitive.
- Timestamp: 2026-11-14 (WhiteMatter), 2026-11-13 (Graphon)
- Source: https://news.google.com/rss/search?q=%22Graphon%22+OR+%22WhiteMatter%22+OR+%22Mirendil%22+when:2d&hl=en-US&gl=US&ceid=US:en

### Other agent-adjacent rounds (context only, not new-agentic-CLI specific)
- Detail: **Daylight raised $80M** for an AI-agent cybersecurity platform (11-13T11:22Z citybiz; Quasa.io 11-14T19:23Z frames it as "Human Engineers Still Govern Its AI Agents"). **Rox raised $100M at $1.3B** for AI revenue agents, Aramco-backed (11-13T17:22Z). **Edelbyte $70M** for big-data analytics for AI agents. **Morsa $1.5M** for an "AI COO" in WhatsApp groups. **Surf $15M** crypto-native AI. **"Startups raise $1.88 billion as AI investment surges"** (11-13T08:00Z) and **"$600m across 14 deals this week"** (11-13T21:49Z, FinTech Global). **Crunchbase News: "The Week's 10 Biggest Funding Rounds: Agentic AI And Infrastructure Are Still On A Roll"** (11-13T19:20Z).
- Timestamp: 2026-11-13 / 2026-11-14
- Source: https://news.google.com/rss/search?q=AI+agent+funding+raises+when:2d&hl=en-US&gl=US&ceid=US:en

## Reddit — community friction (fetched 2026-11-15T02:20Z)

**Access note:** Reddit `.rss` endpoints for **9 subreddits** were fetched. **6 succeeded** (ClaudeCode, cursor, ClaudeAI, codex, singularity, plus ChatGPTCoding on retry), **3 returned zero-byte bodies** (AI_Agents, opencode, LocalLLaMA) — **reported as an ACCESS GAP, not as silence**. All Reddit items below are **title-level only**: every attempt to retrieve post bodies (`.json` with browser UA, `old.reddit.com` `.json`, `old.reddit.com` `.rss`) returned either HTTP 403, a zero-byte body, or a 189 KB HTML interstitial instead of JSON. **No Reddit body text is paraphrased below.**

### Multi-account abuse of flat-rate agent subscriptions is now a community-built product category
- Detail: The carry-forward asked whether multi-account abuse of flat-rate agent subscriptions would surface as tooling. **It has — three separate in-window threads, two of them tools built to do it.** Titles: *"Hit the 5-hour limit on one Claude account while your other one sits idle? I built a VS Code extension that runs both at the same time"* (2026-11-14T18:42:18Z, https://www.reddit.com/r/ClaudeCode/comments/1xw6g1b/) · *"Claude usage finishing faster in my other account"* (2026-11-15T00:50:24Z) · and on r/ClaudeAI *"Using two Claude accounts: does losing your sidebar and setup on switch bother anyone else?"* (2026-11-15T00:01:54Z). **The mechanics are now publicly known and packaged, not just theorised.**
- Timestamp: 2026-11-14T18:42:18Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xw6g1b/hit_the_5hour_limit_on_one_claude_account_while/

### Fable 5.2 quota / reset accounting is confusing enough to generate its own support community
- Detail: **Six distinct in-window threads** on Fable 5.2 limits and resets: *"5 hour limit reached under 30 seconds using Fable 5.2, is this normal?"* (16:09:41Z) · *"Used all 4 free resets(3 weekly, one full) for a task/audit on max5 for Fable 5.2 and still it's going strong"* (20:36:22Z) · *"Optimizing the fable resets"* (22:43:52Z) · *"Is the weekly fable usage additional?"* (10:58:55Z) · *"PSA: Using Fable as an advisor doesn't touch your Fable weekly limit"* (08:17:52Z) · *"Do you think the next Opus model will be better than Fable 5.2?"* (22:46:21Z). Plus r/ClaudeAI *"New user PSA: 'Fable only' isn't a separate backup pool (UI is super confusing)"* (22:16:28Z) and *"What is a weekly limit actually worth in tokens?"* (22:44:47Z). **The prior cycle's Fable 5.2 quota/reset accounting question is now answered from the user side: the reset model is not discoverable from the UI, and users are reverse-engineering it.** Cursor's published $8/$40 vs Opus $4/$20 per-M-token comparison is being debated against Anthropic's own opaque limits.
- Timestamp: 2026-11-14T08:17:52Z → 2026-11-14T22:46:21Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xw63ig/5_hour_limit_reached_under_30_seconds_using_fable/

### "Yes, and don't ask again" can commit your API key — a permission-prompt security thread
- Detail: A community security check: *"\"Yes, and don't ask again\" can commit your API key: how to check your own repos"* (2026-11-14T16:30:42Z, https://www.reddit.com/r/ClaudeCode/comments/1xw6ls3/). **Directly relevant to watchlist #6**: the 2.1.325 change (sandboxed Bash now asks by default) is a *prompt-fatigue* mitigation, and this thread documents the opposite failure mode — users granting blanket approval to a Bash command that then persists a credential into their own repository. **The tension between "ask more" and "users rubber-stamp anyway" is the real story of 2.1.325.**
- Timestamp: 2026-11-14T16:30:42Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xw6ls3/yes_and_dont_ask_again_can_commit_your_api_key/

### Model-tier degradation at peak hours is now an explicitly named complaint
- Detail: *"The absurdity of silently downgrading to Opus 4.8 while tightening your code"* (2026-11-14T12:51:56Z, https://www.reddit.com/r/ClaudeCode/comments/1xw1ok3/) · *"Difference between opus and new fable is insane."* (11:59:52Z) · *"We just need Opus 5.5, but 5x faster."* (12:00:01Z). Plus r/ClaudeAI *"I am tired of Opus' implicit behaviour of carelessly reading through material and giving wrong information because he hasn't read the thing through entirely."* (21:36:04Z). **This is the carry-forward #9 thread continuing and hardening into a specific claim: the harness silently substitutes an older model tier (Opus 4.8) rather than refusing.** On HN, **"The Claude Delusion"** (145 pts) is the same claim argued in essay form from the opposite direction — that the perceived regression may be expectation, not model. **No official Anthropic statement or status-page note on model-tier substitution was found in-window.**
- Timestamp: 2026-11-14T11:59:52Z → 2026-11-14T12:51:56Z
- Source: https://www.reddit.com/r/ClaudeCode/comments/1xw1ok3/the_absurdity_of_silently_downgrading_to_opus_48/

### Sandbox scope complaints: "I gave Claude Code ONE folder, and it can still read my whole PC"
- Detail: r/ClaudeAI, 2026-11-15T00:47:41Z (https://www.reddit.com/r/ClaudeAI/comments/1xwi4eu/) — a user asks how to lock Claude Code to a single directory. Directly on watchlist #6. Also r/ClaudeCode *"Constant permission requests"* (r/codex cross-post, 2026-11-14T13:14:13Z) and *"Claude junior, claude code alternative for multiagent workflows ?"* (16:53:40Z). **The 2.1.325 default-ask change produced visible friction within hours**, exactly as the prior cycle predicted.
- Timestamp: 2026-11-15T00:47:41Z
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xwi4eu/what_the_hell_i_gave_claude_code_one_folder_and/

### Codex is the loudest negative-sentiment surface in-window
- Detail: r/codex produced **34 in-window posts** with a strongly negative tone cluster: *"Codex is a joke"* (17:13:33Z) · *"What happened to codex?"* (18:00:55Z) · *"What's going on with my Codex?"* (17:33:44Z) · *"This pretty much sums up current state of codex and openai as a whole"* (20:38:50Z) · **"Codex got stuck on \"Thinking\" for 14 hours while I was at work, burned 15% of my weekly quota doing literally nothing, and then confirmed its own bug"** (20:51:15Z, https://www.reddit.com/r/codex/comments/1xwcyu8/). Also *"Codex CLI sessions are now account specific"* (16:46:18Z) and *"our claude code and codex agents keep overwriting each other. just us?"* (23:21:44Z). **The 14-hour "Thinking" hang that burned 15% of a weekly quota and was then confirmed as a Codex bug is a new, concrete, quantified instance of the runaway-agent-cost failure mode** — and it is the r/codex analogue of the MCP-timeout retry-loop cost signature.
- Timestamp: 2026-11-14T20:51:15Z
- Source: https://www.reddit.com/r/codex/comments/1xwcyu8/codex_got_stuck_on_thinking_for_14_hours_while_i/

### Quota/limit instrumentation is a whole indie-tool category now
- Detail: In-window Show-HN-adjacent and Reddit tools dedicated to measuring agent quota burn: *"I built Burnline, a free, open-source macOS app to track your Claude Code & Codex usage, API costs, limits, and coding streaks"* (r/codex, 16:39:00Z) · *"I built a notch app that shows when a Codex session is waiting for your approval"* (20:36:49Z) · *"AI Time Estimator — how long Claude Code will take, from your own logs"* (HN, 18:32Z) · *"Model-share — see which Claude models used your weekly limit"* (HN, 18:07Z) · *"Cyperviber — a $15 touchscreen to show which Claude session needs you"* (HN, 12:54Z). **On r/cursor: *"Switched to the Super plan for \"2.5x usage\", and I ended up with less. Anyone else?"* (21:10:59Z)** — a direct pricing-vs-delivery complaint on the Cursor Super plan.
- Timestamp: 2026-11-14T16:39:00Z → 2026-11-14T21:10:59Z
- Source: https://www.reddit.com/r/codex/comments/1xw6tb5/i_built_burnline_a_free_opensource_macos_app_to/

### Enterprise hiring signal: Claude goes from 37% to 61% of AI-builder job postings
- Detail: r/ClaudeAI (2026-11-14T21:45:03Z, https://www.reddit.com/r/ClaudeAI/comments/1xwe6q9/): *"Claude went from 37% to 61% of AI-builder job postings this year, and four in five companies hiring for AI coding ask for Claude Code."* **Grep-verified entirely absent from the cumulative findings.** This is the single clearest **enterprise-adoption** datapoint in-window: a doubling of Claude's share of AI-builder postings within one calendar year, with **4 in 5 employers hiring for AI coding asking for Claude Code specifically.** It is a community-posted statistic (source not independently verified), but it is the kind of number the carry-forward asked for.
- Timestamp: 2026-11-14T21:45:03Z
- Source: https://www.reddit.com/r/ClaudeAI/comments/1xwe6q9/claude_went_from_37_to_61_of_aibuilder_job/

### r/singularity — market-relevant in-window items
- Detail: **"ChatGPT's new Wallet lets AI agents shop and check out for you"** (2026-11-14T20:52:09Z) — the agentic-payment thread continues to spread to a general AI audience. **"OpenAI Hasn't Released A Frontier Model In 72 days. Is OpenAI Saving A New Model To Sabotage Anthropic's IPO?"** (18:05:12Z) — **a community-read model-release drought around the IPO, which corroborates the OpenAI $15B/half-target raise from the other side: OpenAI is apparently both short of cash and holding models back.** Also **"What ECI score do you expect for the impending Astra & Sol releases?"** (2026-11-15T01:00:13Z) — a **new metric (ECI) circulating as the expected benchmark for the next OpenAI releases**, and *"We now know google was serious about gemini 4 💀"* (14:00:03Z).
- Timestamp: 2026-11-14T18:05:12Z → 2026-11-15T01:00:13Z
- Source: https://www.reddit.com/r/singularity/

## Anthropic status page — in-window incidents (fetched 2026-11-15T02:35Z)

Read `https://status.anthropic.com/api/v2/incidents.json` directly (no search budget). Full incident list with `created_at`, `status`, `name`, `shortlink`.

### Elevated purchasing errors on claude.ai — RESOLVED
- Detail: Created **2026-11-14T02:54:33Z**, resolved. A billing/checkout fault on claude.ai **inside the window** — the same purchase path that the Anthropic IPO retail tranches (UK, EU/EEA/Swiss, Australia, Japan) will drive on Nov 16–18. **Grep-verified absent from the cumulative findings.** In-window, brief, and resolved, but it is a new data point on the retail-onboarding path.
- Timestamp: 2026-11-14T02:54:33Z
- Source: https://stspg.io/qqf00d9r7pm4

### Some users unable to sign up with Apple on the Claude iOS app — INVESTIGATING (open at capture time)
- Detail: Created **2026-11-14T07:11:36Z**, status **investigating** at capture (2026-11-15T02:35Z) — **this incident was still open when the window closed.** Apple-signup breakage on the Claude iOS app touches the same consumer surface that the IPO story depends on (consumer demand + consumer funnel). Grep-verified absent from the cumulative findings.
- Timestamp: 2026-11-14T07:11:36Z
- Source: https://stspg.io/4858wf40dx89

### The 2026-11-13 Microsoft-outage-driven Claude login failure — background, but now fully explained
- Detail: The prior cycle captured the **2026-11-13T10:18Z "Elevated errors on claude.ai, Claude Code, and platform.claude.com"** incident (484 points / 382 comments) as the window's biggest HN thread. The status page shows it was **one of three related 11-12/11-13 incidents**: "Elevated errors affecting the Microsoft 365 connector" (2026-11-12T17:52Z), "Elevated errors on claude.ai, the Claude API, and Claude Code" (2026-11-13T13:09Z), "Elevated errors on claude.ai, Claude Code, and platform.claude.com" (2026-11-13T09:58Z). Press attribution: **a global Microsoft 365 outage dragged Claude's Microsoft-connected surfaces down with it** — Anthropic's auth path partially depends on Microsoft's identity stack (Times of India, Gulf Business, Moneycontrol, Jagran Josh, BigGo Finance, 11-13). **New detail beyond the prior cycle: the dependency is on Microsoft's identity/365 infrastructure, not Anthropic's own serving stack** — a concentration-of-dependency risk for every Anthropic-code-adjacent workflow.
- Timestamp: 2026-11-12T17:52Z → 2026-11-13T13:09Z
- Source: https://status.anthropic.com/api/v2/incidents.json

---

## Model & product — in-window Anthropic/market moves (fetched 2026-11-15T02:40Z)

### Anthropic's IPO roadshow slide shows superexponential pre-training efficiency — and a former researcher says so on the record
- Detail: **Jacob Coxon**, formerly of OpenAI and Anthropic (and the researcher who drew wide attention in September 2026 with public warnings about advanced AI risk), says a **slide from Anthropic's IPO roadshow** was a key reason he quit after about four months. Body retrieved via curl (The Decoder, 2026-11-14). The slide charts Anthropic's **"Pre-training compute multiplier" for code over time on a logarithmic y-axis from July 2024 to October 2026**; the curve climbs steeply enough that a 10× and a 100× increase "barely look different." Coxon: *"It's an insane plot and I'm surprised they made it public."* He argues **Mythos "was not a one-time deviation, but a point on a superexponential"** and that Anthropic **"could already retrain Mythos with a fraction of the compute originally needed."** He adds that algorithmic improvement is **"on the verge of being automated,"** which is why he wants frontier development paused next year so competitors can catch up — a pause would, in his words, **"commoditize human-level intelligence"** and **"only harm OpenAI and Anthropic."** Anthropic's own caveat, published on the slide: **the data points are internal estimates and for illustration only.** TokenPost separately notes the roadshow materials appear to **postdate Coxon's resignation** (11-14T00:24Z).
- **Why it matters for the market angle:** the IPO is now selling a **compounding-efficiency narrative on a logarithmic chart**, and the most credible external reader of that chart is simultaneously using it to argue for a development pause. **A roadshow slide is being litigated by a former employee as evidence for a regulatory argument** — new risk class for the Nov 18 pricing, alongside the Nvidia overhang.
- Timestamp: 2026-11-14 (The Decoder, 2026-11-14)
- Source: https://the-decoder.com/anthropic-can-already-retrain-mythos-with-a-fraction-of-the-compute-originally-needed-says-former-researcher-coxon/

### Anthropic sued for trademark infringement over "Mythos"
- Detail: Reuters (2026-11-13T18:22Z), Bloomberg Law News (11-13T19:30Z), The 420.in (11-14T11:15Z) report a **trademark suit over Anthropic's use of the name "Mythos"** for its model line, filed by a software company. Grep-verified: **"trademark", "Mythos" (as a lawsuit) absent from the cumulative findings.** The model was released 2026-11-09/11-12 and is central to the IPO narrative; a naming dispute over a flagship model days before pricing is a novel, low-probability, high-visibility risk.
- Timestamp: 2026-11-13T18:22Z / 2026-11-14T11:15Z
- Source: https://www.reuters.com/legal/litigation/anthropic-sued-trademark-infringement-over-mythos-model-2026-11-13/

### Microsoft will switch Claude on by default for UK Microsoft 365 Copilot tenants on Dec. 9 — in-window confirmation
- Detail: The **Dec. 9 default-on** decision (first reported by The Register, 11-10) generated a fresh wave of in-window coverage: BigGo Finance (11-14T08:25Z), Notebookcheck (11-14T08:00Z), Mezha.net (11-14T08:07Z), lavx.hu (11-14T09:44Z). **UK tenants get Claude by default unless admins opt out.** Background (Nov 10) but the in-window repetition matters because it is a **distribution-level enterprise default** — the largest single non-IPO driver of Claude seat growth, and a direct competitor to OpenAI's own Copilot distribution.
- Timestamp: 2026-11-14T08:00Z–09:44Z
- Source: https://news.google.com/rss/search?q=Microsoft+Copilot+Claude+default+UK+December+9+Anthropic&hl=en-US&gl=US&ceid=US:en

### Nonprofits' frontier-freeze lawsuit — in-window follow-up on the remedy
- Detail: The Nov 12 suit against OpenAI, Anthropic, Google, Meta and SpaceX produced a substantive in-window follow-up: **Tech Times, "AI Development Freeze Lawsuit: Nonprofits Sue 5 Labs, Say Real Freeze Needs Government Inspections"** (2026-11-14T10:35:35Z). The plaintiffs' position is that **any freeze must include government inspection rights** — i.e. they are seeking a regulatory regime, not merely an injunction. Coverage also spread to astig.ph ("Five AI developers sued in San Francisco to halt frontier model development", 11-13T16:14Z) and 420.in (11-13T14:37Z). No dismissal, no ruling, no new defendant in-window.
- Timestamp: 2026-11-14T10:35:35Z
- Source: https://news.google.com/rss/search?q=nonprofit+lawsuit+halt+frontier+AI+development+when:3d&hl=en-US&gl=US&ceid=US:en

### OpenAI's Georgia RICO suit gets a structured explainer in-window
- Detail: **CASRAI, "OpenAI Project Camellia RICO Lawsuit, Explained" (2026-11-14T20:48:18Z)** — an in-window explainer on the Georgia residents' RICO action over a **~$20B data-centre deal** (Latin Times, 11-12; Pasquale Pillitteri, 11-12). The project name **"Project Camellia"** is a new detail not in the cumulative findings.
- Timestamp: 2026-11-14T20:48:18Z
- Source: https://news.google.com/rss/search?q=OpenAI+RICO+Georgia+data+center+when:3d&hl=en-US&gl=US&ceid=US:en

---

## Carry-over watchlist — explicit status lines

1. **Anthropic IPO** — **NO CHANGE on EDGAR**: three-day verified negative (no filing Nov 13, 14, 15). Price band now $1.4T valuation / up to $64B raise / 6× oversubscribed / Nov 19 Nasdaq listing. **The $120.00 EEA-Swiss retail ceiling vs the $70–78 US band received NO new in-window coverage — explicitly searched, still unresolved.** New in-window: ¥40,000 Japan retail cap; China/Hong Kong institutions rebuffed; Nvidia/Alphabet/Microsoft/Micron as anchor buyers; Kraken ANTx 5% spread + CMC Markets pre-listing options (UK); a 2× leveraged IPO ETF filing; Jensen Huang's ouster as a pricing overhang; SBF's $40B; Coxon vs the roadshow compute chart; Mythos trademark suit. **ANT ticker: `tickers:["ANT"]`, `exchanges:[null]` — still no live quote.** Yahoo Finance chart API returned **HTTP "Edge: Too Many Requests"** on both query1 and query2 (access gap, not a negative).
2. **United Airlines AI-agent ban** — **NO SECOND CARRIER.** Explicit re-check: Forbes (11-12) "United Airlines Alone In Blocking AI Agents From Booking Flights—Rivals Say Customers Assume Risk"; Delta CEO Ed Bastian again took the "nuanced/cautious path" (BigGo Finance 11-13T11:05Z, TradingView 11-13T10:33Z). The only in-window item is a Memeburn explainer (11-14T17:31Z). **The named-middleman question stays open — but the new middleman is a RETAILER, not a carrier: Amazon's plan to own product data to fight AI shopping agents (Reuters, HN 11-14T12:09Z), plus "United Blocks AI Agents as Airbnb and OpenAI Build Their Own" (PYMNTS, 11-12).** Meta's Muse remains the only named agent.
3. **CodeRabbit $100M ARR / LangChain $300M at $3B** — **CodeRabbit: no new in-window coverage** (last item 11-12). **LangChain: no new in-window coverage** (already in cumulative). **BUT the governance/observability wave has two NEW rounds in-window**: Graphon Labs $35M (persistent agent memory) and WhiteMatter $20M ("govern AI agents with AI agents") — both grep-verified absent. Mirendil $1B and Daylight $80M extend the picture.
4. **Nonprofits' lawsuit vs OpenAI/Anthropic/SpaceX AI/Meta/Google** — **in-window follow-up on remedy** (Tech Times: real freeze needs government inspections). No ruling, no new defendant. OpenAI/Georgia RICO: in-window explainer, "Project Camellia", ~$20B deal.
5. **Multi-account abuse / Fable 5.2 quota accounting** — **BOTH NOW HAVE COMMUNITY ANSWERS.** Multi-account abuse has produced **three in-window threads, two of them purpose-built tools** (VS Code extension running two accounts in parallel). Fable 5.2 reset accounting: **six r/ClaudeCode threads + two r/ClaudeAI PSAs** — the reset model is not discoverable from the UI and users are reverse-engineering it. Cursor's published $8/$40 vs Opus $4/$20 per-M-token comparison is being used as the yardstick against Anthropic's opaque limits. **No official Anthropic accounting documentation found in-window.** **The reset economy has become a social scheduling problem**: in-window threads include *"Usage reset anxiety anyone?"* (r/ClaudeAI 17:29:44Z), *"What's YOUR sweet spot to use reset?"* (22:17:18Z), *"Going back to Opus 5.5 after x3 Fable 5.2 resets and x1 full reset"* (16:00:32Z), *"Best setup to use less usage for Pro subscriptions"* (19:37:46Z), *"Claude usage finishing faster in my other account"* (r/ClaudeCode 2026-11-15T00:50:24Z) and *"The usage window in VS Code tells you to 'Stop sessions you no longer need' to save usage. But uh, how DO you…"* (r/ClaudeCode 20:06:38Z). **Anthropic's own VS Code usage-window copy is now a subject of user confusion.**
6. **Claude Code 2.1.325 sandboxed-Bash-asks-by-default** — **CONFIRMED FRICTION, as predicted.** In-window: *"\"Yes, and don't ask again\" can commit your API key"* (16:30Z) · *"Constant permission requests"* (13:14Z) · *"What the hell? I gave Claude Code ONE folder, and it can still read my whole PC"* (00:47Z) · *"Hit the 5-hour limit…"* (18:42Z). **Mitigations shipped in-window by third parties: "Bright Lines" (a fail-closed guard hook for Claude Code), "ai-access-auditor" (see and revoke what your agents can access), "0rwx" (a Unix-permissions model of AI usage), Shotoku (budget caps), "Before I Trust an Agent, I Try to Break Its Box".** The changelog confirms `sandbox.autoAllowBashIfSandboxed: true` restores the old behaviour and that the sandbox now refuses writes to `.claude` settings/skills/agents/hooks in added directories.
7. **Code Mode (2.1.323)** — **NO new community reaction found in-window.** One r/ClaudeCode thread references the release (07:15:28Z, "Claude Code 2.1.323: experimental Code Mode (Claude writes JS to call tools), plugin version pinning, permission fixes") but it is a release-note restatement, not a reaction to the permission model. **The documented permission hole (classifier reviews code, not runtime values; only mitigation is a PreToolUse hook matching `REPL`) is unchanged and still undocumented in the community.** Terminal-only restriction unchanged. **Additionally, users are building MCP aggregation layers to cut tool-call counts** (*"one MCP server that gives Claude all your other MCP servers, with way fewer tool-call[s]"*, r/ClaudeAI 19:52:29Z) — reducing the number of distinct tools is the same pressure that makes the per-tool permission model brittle.
8. **30-second MCP timeout trap** — **NO in-window evidence.** Explicit searches for MCP timeout/retry/token-loop coverage returned **zero results** (both `web_search` and Google News RSS). **Reported as a verified absence of new coverage, not as a resolution.** The nearest in-window analogue is the **r/codex 14-hour "Thinking" hang that burned 15% of a weekly quota and was confirmed as a Codex bug** (11-14T20:51Z) — the same cost signature from a different vendor.
9. **Model-tier degradation at peak hours** — **COMMUNITY-REPORTED AND HARDENING; NO OFFICIAL RESPONSE.** In-window: *"The absurdity of silently downgrading to Opus 4.8 while tightening your code"* (12:51Z) · *"Difference between opus and new fable is insane."* (11:59Z) · *"I worry that Anthropic does not realize that their models are regressing in human 'intuition'"* (23:23Z) · HN **"The Claude Delusion"** (145 pts / 182 comments) arguing the regression may be expectation rather than model · r/ClaudeAI *"I am tired of Opus' implicit behaviour of carelessly reading through material…"* (21:36Z). **Anthropic's status page shows NO model-degradation note in-window** (only purchasing errors and an iOS Apple-signup issue) and **no official Anthropic statement on tier substitution was found.** **The workaround has now become a named community STRATEGY, stated positively rather than as a complaint**: *"Fable 5.2 as orchestrator, planner, reviewer and Opus 5.5 as implementation agent?"* (r/ClaudeCode 2026-11-14T20:34:13Z) · *"Has anyone found a way to use replit as a planner?"* (15:14:01Z) · *"How do you get Codex, Claude Code and a planner agent working together in one place instead of copy-pasting be[ing]…"* (r/ClaudeAI 15:03:40Z). **Users are auditioning a third tool as planner and trying to unify three CLIs that share no memory format.**
10. **Control-plane tooling wave** — **NOW HAS AN EXPLICIT CAPITAL SIGNATURE.** Graphon Labs $35M (persistent agent memory) + WhiteMatter $20M (govern agents with agents) + in-window Show HN: **Shotoku** (budget caps), **ai-access-auditor** (permission audit), **0rwx** (Unix-permission model of AI usage), **Cyberviber** ($15 touchscreen showing which Claude session needs you), **CodeRelay** (delegate agent work to a teammate's agent), **Timon** (AI workstation for coordinating agents), **Cowork** (self-hosted task queue/dashboard for Claude, Codex and AI agents), **Coppice** (local multi-agent desktop app), **Ryph** (event-driven self-hosted incident-response agents), **Smart Node** (self-hosted crew of agents). **No named enterprise procurement deal found** — the procurement evidence is still vendor-side and community-side only.
11. **Show HN / Ask HN agentic tooling** — **HEAVIEST IN-WINDOW CYCLE YET.** 40+ agentic-tooling launches (see the Show HN section). **New since the prior cycle: AgentRun, Infiniterm, Agentview Chat, Headwig, Near AI Gateway, Socratui and Expo Simulators did NOT reappear** — the new names are **Timon, Agweb, Shotoku, Bright Lines, Cowork, CodeRelay, Coppice, SunsetLint, Model-share, AI Time Estimator, Bowserr, Back endskills, Stampdrill, Traits, RedHands, Ryph, Smart Node, Mopup, ai-access-auditor, 0rwx, Existence-trace 0.4.6, Cyberviber, Open.Dotlet, Aris, orchestrator, Agentview-style (agentcommand.gg), LetThemBuild, AI Quest, WhatWeRun, Command Notepad** plus the essays **"Before I Trust an Agent, I Try to Break Its Box"**, **"The Missing Ring-0 Protections for AI Agents"**, **EnvOpt (Bespoke Labs)**, **"Building an Agentic Loop in Temporal"**, **"Are we building multi-agent systems without a proper trust layer?"**.

---

## Collection gaps and access failures (explicit)

- **Reddit bodies: not retrievable.** `.json` (browser UA) → HTTP 403; `old.reddit.com/.json` → zero-byte or 189 KB HTML interstitial; `old.reddit.com/.rss` → HTTP 302, zero bytes. **All Reddit findings in this file are title-level only.** No Reddit body text was paraphrased.
- **Reddit subreddits returning zero-byte bodies (ACCESS GAP, not silence):** `r/AI_Agents` (2 attempts), `r/opencode` (2 attempts), `r/LocalLLaMA` (2 attempts), `r/ChatGPTCoding` (1 attempt). **5 of 9 subreddits succeeded** (ClaudeCode, cursor, ClaudeAI, codex, singularity); `r/ClaudeAI` and `r/codex` succeeded only on a delayed retry after first failing.
- **Yahoo Finance chart API: HTTP "Edge: Too Many Requests"** on both `query1` and `query2` for **ANTW, ANT and the SPY control**. **ANT/ANTW price action could not be verified this cycle** — reported as an access gap, not as "no price".
- **`web_search` (DuckDuckGo) returned a bot-detection challenge on both attempts.** **3 search calls attempted, 0 results returned.** All coverage was therefore obtained via `curl` (Reddit RSS, HN Algolia, Google News RSS, status.anthropic.com, npm registry, SEC EDGAR, and direct article GETs).
- **Fetched-but-unreadable bodies:** `reuters.com` (JS wall: "Please enable JS and disable any ad blocker") — the Amazon shopping-agents article is therefore cited by headline + HN timestamp only; `techtimes.com` article URL redirected to a different (June) article, so the nonprofit-lawsuit follow-up is cited by headline + Google News timestamp only; `biggo.com` blog URL returned a 404 page, so the Microsoft/UK-Copilot item is cited by headline + Google News timestamp only; `github.com/deepseek-ai/deepseek-harness` raw README → `404: Not Found` (default branch may not be `main`), so the DeepSeek harness claim is **title-level only**; `sdtimes.com` Fable 5.2 article → 1.3 KB shell.
- **Article bodies successfully retrieved (curl) for:** the-decoder.com (Coxon/roadshow, Fable 5.2, "one agent beats many subagents", "models hiding their thoughts"), cursor.com/blog/security-incident-update, gethrbr.com (AGENTS.md study), glthr.com (transitive policies), developers.googleblog.com (Agent Distraction), blog.dfb.sh (Claude Desktop freeze), zenodo.org record, and the Claude Code CHANGELOG.md + npm registry metadata.

# Agentic CLI Tools — Recovered 2026-10-28 findings + fresh Oct 27–29 signal

Run date: 2026-10-29. Two inputs combined:
1. **Recovered** — the "Run date: 2026-10-28" findings file that was overwritten on 2026-10-29, recovered from the Oct-28 subagent session history (`2026-10-28T01-37-07-595Z_8c1eca84-...jsonl`, ~38 KB original). All headings, issue titles/numbers/URLs and source links preserved; prose compressed to fit the 25 KB budget.
2. **Fresh signal** — GitHub issue trackers pulled 2026-10-29T01:50Z via the **Search API** (core API was rate-limited, `remaining: 0`) + HN Algolia for the Oct 27→29 window.

## Recovered 2026-10-28 findings

*Original run header: Task 2 of the agentic-cli-tools research track; novelty window after 2026-10-27T01:45:00Z through ~2026-10-28T01:30Z. Sources: HN Algolia, GitHub issue trackers (anthropics/claude-code, openai/codex, google-gemini/gemini-cli), TechCrunch/Crunchbase RSS, vendor blogs. Reddit skipped entirely (reddit .json endpoints blocked/non-JSON).*

### Community Pulse

**FrontierCode 2.0 benchmark (2026-10-27)** — Cognition scored models on "production code standards" (mergeability vs rubric criteria); top score only **45.5%** — "far from saturated". Score/cost: Claude Opus 5.5 54.6%/$45.5 · GPT-6 Astra 53.3%/$42.8 · Grok 4.7 47.6%/$28.6 · Gemini 4 Argon 47.5%/$26.3 · Muse Wonder 1.0 47.0%/$24.3 · SWE-2 50.0%/$23.9 · DeepSeek V4.1 Flash 43.9%/$19.3 · Kimi K3 44.2%/$17.7. Adds *unstated* constraints (reuse abstractions, repo conventions, real tests) to break spec-following saturation; GPT-6.1 Sol strong value; western OSS models lag.
Source: https://cognition.com/blog/frontier-code-2.0 (HN 50264739)

**Amazon redefines the SDE role around "Renaissance Developer" (2026-10-27)** — Amazon engineering leadership (Terk Terkowitz): the developer role and its output are not defined by AI use; measure long-term outcomes, not tools. Framed as a customer model, citing "thousands of SDEs" and Werner Vogels' 2026 CTO predictions.
Source: https://www.aboutamazon.com/news/company-news/amazon-software-engineer-role-guideline-ai (HN 50268075)

**Anthropic: Claude used to find and exploit real vulnerabilities in Chrome, Safari, Android, Windows (2026-10-27, updated 18:15Z)** — five attack chains from an unreleased internal research model; Claude wrote a full exploit chain executing arbitrary code as the user outside the browser sandbox (PoC launches Calculator from stock macOS Chrome in seconds). **62 CVEs** to Google, all patched in Chrome 156, incl. **13 sandbox escapes / 21 renderer-compromise**. Safari chain was data-only (no code execution), bypassing same-origin policy — fixed same-day; plus an Android lock-screen bypass (photos/PII from a stolen, locked phone) and a remote Windows crash via HTTP/3.
Source: https://www.anthropic.com/research/discovering-vulnerabilities-with-claude

**Independent audit: no measurable degradation in Opus 5.5 over 34 days (2026-10-27)** — LiveNerf found no statistically significant evidence of degradation across two completed 10-day windows vs launch baseline. Method: 2,336 screening questions (GPQA Diamond, MMLU-Pro, competition math, AIME) → frozen 78-question panel + 12-question control arm run daily through a **pinned Claude Code CLI**. Baseline 58.4%, windows 1/2: 59.2%/57.1%; min detectable effect ≈ 6.6 points/10-day window.
Source: https://blog.nathanlangley.dev/posts/livenerf-30-days.html (HN 50267444)

**"Is my data used for model training?" hits 213 points on HN (2026-10-27)** — Anthropic privacy article (thumbs up/down feedback stored with the full conversation up to 5 years) was HN's top agent thread of the day; reaction was resignation-with-ammo. The form itself states the whole conversation is sent to Anthropic.
Source: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training (HN 50259406, 213 pts / 98 comments)

**Frontier: Claude Code source leak — 512,000 lines of TypeScript (2026-10-27, re-circulated)** — 2026-03-31 npm packaging accident: v2.1.88 shipped a 59.8 MB source map referencing ~1,900 unobfuscated TS files on R2, mirrored to GitHub at 84,000+ stars within two hours. No customer data, no model weights, harness layer only. Warning: internal workspace package names were already registered with a disposable email, so a blind `npm install` on a clone could pull malicious code.
Source: https://thoughts.jock.pl/p/claude-code-source-leak-what-to-learn-ai-agents-2026 (HN 50259590)

**Community pushback: spec-first agentic development (2026-10-27)** — "Specification First Agentic Development Plugin and Prove" (26 pts / 18 comments) drew skepticism: spec-first has not worked well in real environments, and specs that are editable by the agent are as non-deterministic as the code they produce. Open question: how it differs from Spec Kit / BMAD.
Source: https://spec-first.dev/ (HN 50260571)

**Community debate: fewer bugs since the AI coding era? (2026-10-27)** — Ask HN (4 pts / 4 comments) articulated the "bugs migrate" thesis — bugs moving from the codebase into the developer's mental model — countered by "nobody can find them anymore since nobody knows how the system works". Practical tip: use AI to write the test cases, run them regularly so credit burn is bounded.
Source: https://news.ycombinator.com/item?id=50254174

**Letting cloud agents query production with OIDC instead of secrets (2026-10-27)** — Formal's writeup (15 pts / 12 comments). Skepticism: OIDC's trust model assumes the token subject is the responsible party, which no longer holds with agents ("the user can just shrug it off, saying 'oh the AI went rogue'"), and agents get the same access as the user with no way to limit actions. Practitioner: scoped agent identity via Pocket ID, pre-prod-only policies; SSO requires business/enterprise plans.
Source: https://www.formal.ai/blog/cloud-agents-oidc-infrastructure/ (HN 50261584)

**Show HN cluster: agent harness tooling (2026-10-27)** — Cindy (Claude Code + Codex as swappable harnesses, 50254161) · Aigent-OS (Claude Code harness that clears and resumes, 50261376) · Weir (catch credential leaks in agents, 50261335) · CleanCode (Claude Code + Codex on one canvas, 50265699) · Kechup (CLI task tracker for agents, 50260845) · SkillTotal (scan packages before Claude Code installs them, 50258466) · Clai.chat (agents as JSON, multi-vendor transcript sync, 50263951) · OpenCode-Muse (Meta Muse Code subscription inside OpenCode, 50267038) · "Make your AI agent think before it codes" (50262833) · Cloudflare Computer v0.7.0 — agents resume after deploy/crash and pause for approval via `onInterrupt: "replay"` (https://developers.cloudflare.com/changelog/post/2026-10-26-computer-durable-javascript/).
Source: https://news.ycombinator.com/newest (items listed above)

**"Claude vs DeepSeek vs GLM: what coding agents pick" (2026-10-27)** — Claude Code (Opus/Sonnet/Haiku 5.5) vs DeepSeek V4.1 Flash and GLM 5.3 Flash inside OpenCode, same prompts: same top pick in only 2 of 6 category/stack pairs; Next.js deploys split to Resend 16/30, Python deploys to Heroku 14/30; ORM picks drizzle 12/18 (Next.js), sqlalchemy 18/18 (Python). Site unaffiliated.
Source: https://whatagentspick.com/claude-vs-deepseek-vs-glm/ (HN 50262473)

**Unverified/suspect: "Claude finds TikTok, Instagram bypassing microphone permissions" (2026-10-27)** — 14 pts, but commenters flagged the source (low-karma X account) as probable rage-bait / fabrication. Treat as **unconfirmed**.
Source: https://news.ycombinator.com/item?id=50267483)

**ARGUS: open-source agentic security operations platform (2026-10-27)** — self-hosted, MIT-licensed: Detect (cloud, identity, code, endpoint, network) → Investigate (read-only AI specialists) → Authorize (scope, policy, approvals, dry-run) → Respond (reversible actions, signed audit trail). Self-reported 7 read-only agents, 27 typed actions, 13 detection rules, 8 attack scenarios; reversible autonomy **disabled by default**.
Source: https://argusone.website (HN 50267931)

**CodeRabbit launches security agents for multi-repo deep scans (2026-10-27)** — runtime security validation, cross-repository deep scans, enforceable merge gates targeting auth bypass, broken access control and SQL injection. Vendor post (affiliation disclosed).
Source: https://www.coderabbit.ai/blog/coderabbit-secure-cross-repository-security (HN 50263609)

**Microsoft: "The new primitives of agentic software delivery" (2026-10-27)** — reframes the SDLC as Plan → Build → Verify → Observe, each with a human job-to-be-done and a durable artifact; the "knowledge layer" glues goals, design decisions, validation evidence, release history and agent behavior logs. Teams that transform the entire SDLC at once tend to struggle.
Source: https://commandline.microsoft.com/new-agentic-software-delivery-primitives/ (HN 50262844)

**Survival LLM: local, offline emergency assistant (2026-10-27, 183 pts / 40 comments)** — local assistant + emergency knowledge library on your own machine (IBM Granite 4.2 8B); thread argues whether an LLM is even the right substrate vs a classic searchable knowledge base.
Source: https://www.brangus.io/survival-llm (HN 50264853)

### Friction Telemetry — GitHub Issue Trackers (recovered, 2026-10-28 window)

#### openai/codex
- [Codex Desktop] 5-hour usage allowance drops to 0% almost instantly in one project (2026-10-27T23:50Z) — suspected "unusually large context processing, repeated background work, or incorrect usage accounting" — https://github.com/openai/codex/issues/57595
- Excessive token usage and rapid quota exhaustion (2026-10-27T22:18Z) — Codex CLI 0.163.0-alpha.10.2, GPT-6 Sol: one request = **9,380,242 input tokens** (9,317,760 cached) / 40,842 output in ~8 min; repeats across projects — https://github.com/openai/codex/issues/57579
- Automatic compaction loses the active task (2026-10-28T00:51Z) — `compacted.message` empty; `replacement_history` had 7 entries whose sole user message was environment context, not the task — https://github.com/openai/codex/issues/57608
- Windows Computer Use screenshots time out; mouse clicks fail (2026-10-27); Browser Use still works — https://github.com/openai/codex/issues/57613
- Windows in-app updates repeatedly fail; Microsoft Store "Retry" succeeds (2026-10-28T01:04Z) — "Package registration failed with 0x800700E9, wrapped in 0x80073CF9" — https://github.com/openai/codex/issues/57611
- Windows: App Server command/exec times out on trivial cmd.exe; standalone sandbox succeeds (2026-10-27) — https://github.com/openai/codex/issues/57614
- Windows elevated sandbox: workspace root writable, nested directory access denied (2026-10-27) — https://github.com/openai/codex/issues/57610
- [Dots][Voice] Delayed task-completion updates displace responses to the latest user turn (2026-10-27) — https://github.com/openai/codex/issues/57602
- Dot cloud computer remains unavailable; browser-control calls time out while chat/connectors work (2026-10-27) — https://github.com/openai/codex/issues/57601
- Codex desktop app extension failed to start its UI (2026-10-27) — https://github.com/openai/codex/issues/57600
- macOS desktop: /approve fails with "Could not record auto-review approval" (2026-10-27) — https://github.com/openai/codex/issues/57592
- Linux SSH & standalone installer: CODEX_REMOTE_PAYLOAD spawns unmanaged app-server blocking process (2026-10-27) — https://github.com/openai/codex/issues/57588
- Other notable: Windows stdio MCP initialize handshake closes — https://github.com/openai/codex/issues/57603 · macOS Connections: paired second Mac shows as generic "Mac" — https://github.com/openai/codex/issues/57609 · macOS typing ordinary letters switches views — https://github.com/openai/codex/issues/57596 · config option for minimum exec `yield_time_ms` — https://github.com/openai/codex/issues/57604 · restore colored host globes — https://github.com/openai/codex/issues/57605 · Australian Aldi Mobile (+61) phone validation — https://github.com/openai/codex/issues/57594

#### anthropics/claude-code
- [BUG] Claude Code silently bills to an ANTHROPIC_API_KEY env var set for another app instead of the user's subscription (2026-10-28T00:03Z) — *"my Claude Code conversation started being billed to that API key instead of my subscription. Nothing told me this had happened."* https://github.com/anthropics/claude-code/issues/105540
- [Windows] Bash tool calls stall 10–17+ min before the shell starts after 2.1.309 (2026-10-28T00:48Z) — since Claude Desktop 4.29.0 (2.1.308 → 2.1.309); no shell process created; "then all release at the same instant, or never return until the session worker is killed"; PowerShell unaffected — https://github.com/anthropics/claude-code/issues/105551
- [BUG] Bedrock: request sent with already-expired awsCredentialExport credentials while refresh runs in background (2026-10-28T00:08Z) → 403 then retry succeeds — https://github.com/anthropics/claude-code/issues/105542
- Claude in Chrome tools not registered at all on 2.1.311/2.1.312 (macOS) (2026-10-28T00:32Z) — `mcp__claude-in-chrome__*` never appear; reproduced with `DISABLE_AUTOUPDATER=1` — https://github.com/anthropics/claude-code/issues/105547
- [BUG] Windows native auto-update interrupted mid-swap leaves claude.exe missing (no rollback) (2026-10-27) — https://github.com/anthropics/claude-code/issues/105554
- [MODEL] Fable 5.1 agent no longer following its instructions for a couple of hours (2026-10-28T01:06Z) — *"doing so good for a month with same instruction sets and startup hooks … however it's doing so stupid things last couple hours"* — https://github.com/anthropics/claude-code/issues/105553
- [BUG] /terminal-setup refuses to run in Apple Terminal when the session runs on the background session host (2026-10-27) — https://github.com/anthropics/claude-code/issues/105541
- Plugin enabled only through a project's `enabledPlugins` doesn't load or install (headless, trusted or not) (2026-10-27) — https://github.com/anthropics/claude-code/issues/105549
- [BUG] [VS Code] plugin's link above the prompt opens http://localhost in the system browser, not VS Code's browser (2026-10-27) — https://github.com/anthropics/claude-code/issues/105546
- [BUG] Anthropic API Error: overly aggressive `[cyber]` blocking for authorized security testing (2026-10-27) — tension with Anthropic's own vuln-research release — https://github.com/anthropics/claude-code/issues/105544
- [Feature Request] Repository refactoring support for non-LLM tasks (2026-10-27) — https://github.com/anthropics/claude-code/issues/105552
- Feature: programmatic session self-rename for multi-session orchestration (2026-10-27) — https://github.com/anthropics/claude-code/issues/105550
- [GitHub integration] (2026-10-27) — https://github.com/anthropics/claude-code/issues/105548 · [BUG] feedback form in Claude Duet fails to submit — https://github.com/anthropics/claude-code/issues/105539

#### google-gemini/gemini-cli (low-volume window, created 2026-10-27)
- contextManagement settings in settings.json are ignored: `loadCliConfig` does not pass them to Config — https://github.com/google-gemini/gemini-cli/issues/29985
- GeminiCLI.com feedback: extension not indexed in the Extensions Gallery — https://github.com/google-gemini/gemini-cli/issues/29979
- Hooks: include the tool call id in BeforeTool and AfterTool input — https://github.com/google-gemini/gemini-cli/issues/29975
- Screenshot (2026-10-27 12:34Z) — https://github.com/google-gemini/gemini-cli/issues/29981

#### Recovered-run limitations (2026-10-28, preserved)
`web_search` unusable (bot-detection challenge) → market/funding coverage came from RSS/direct fetches, so **no independent confirmation of coding-agent-specific funding rounds** (absence ≠ verified non-existence); Reddit skipped; Crunchbase Cloudflare-blocked, VentureBeat blocked; GitHub core API rate limit exhausted mid-run → some issue bodies unfetched, Gemini CLI bodies not retrieved; Anthropic research posts dated 2026-10-27T00:00Z but materially updated in-window (18:15Z / 20:26Z), included on that basis; the "Claude finds TikTok/Instagram bypassing microphone permissions" item is unconfirmed.

## Market & Funding

*[10-28] = recovered from the 2026-10-28 run. [NEW] = fresh Oct 27→29 pull on 2026-10-29.*

### Recovered funding / capital (2026-10-27→28)
- **[10-28] Disruptive raises a $10B blind-pool fund (2026-10-27T18:55Z)** — Dallas-based Disruptive (Palantir/Airbnb/Spotify bets) announced a **$10B** fund backing ≥10 late-stage companies with checks up to **$1B**; first blind pool for the firm, largest VC fund raised in Texas history. General AI capital, not coding-agent specific.
Source: https://techcrunch.com/2026/10/27/disruptive-raises-10b-fund-to-make-big-bets-on-at-least-10-companies/
- **[10-28] Guidewire buys agentic underwriting startup Hyperexponential for $1.7B cash (2026-10-27T22:26Z)** — total deal ≈$2B with $400M reserved on revenue targets; Hyperexponential (a16z + Battery backed, ~$90M raised, UK) says nearly **600 insurers in 40 countries** use its software. Incumbents now buy agent platforms rather than build them.
Source: https://techcrunch.com/2026/10/27/guidewire-buys-hyperexponential-for-1-7b-in-cash/
- **[10-28] VCs will make billions on Anthropic's IPO, but Amazon much more (2026-10-28T01:15Z)** — supplier-financing economics from the S-1: "Anthropic promised $22 of orders for each dollar Amazon put in" (Google ≈11). The three cloud contracts total **$269.4B** (≈$33B/yr, ~71% of May run-rate) plus a Broadcom lease with up to $42B in convertible notes. H1 2026: $16.29B revenue, $131.65B cash/ST investments, $693M operating loss.
Source: https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/
Source (brief): https://codingplans.dev/briefs/us-model-labs-part-2/
- **[10-28] Other capital/market items** — General Compute **$100M Series A** (https://techcrunch.com/2026/10/27/general-compute-raises-100-million-series-a-countering-the-neocloud-disaster-narrative/) · Nvidia backs Indian startup for running AI models with fewer GPUs (https://techcrunch.com/2026/10/27/nvidia-backs-indian-startup-helping-companies-run-ai-models-with-fewer-gpus/) · Re:Build (ex-Slate Auto) **$2.1B** (https://techcrunch.com/2026/10/27/rebuild-which-spun-out-slate-auto-raises-2-1b/) · SpaceX locks in **$40B GPU financing with Apollo** (https://techcrunch.com/2026/10/27/spacex-locks-in-40b-gpu-financing-deal-with-apollo/) · Apollo economist: AI delivers zero financial payoff to most companies (https://techcrunch.com/2026/10/27/ai-delivers-zero-financial-payoff-to-most-companies-apollo-economist-says/) · Cohere says Alibaba's Qwen model tried to send a file to Beijing (https://techcrunch.com/2026/10/27/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing/) · Meta AI director Rohit Patel leaves for Microsoft Office / Google Workspace; his **Ndoc** unifies Excel/Word/PowerPoint/Tableau/Replit/"ChatGPT copy-paste", with the Model tab holding datasets *and* the scripts behind the analysis (https://techcrunch.com/2026/10/27/meta-ai-director-rohit-patel-leaves-to-take-on-microsoft-office-and-google-workspace/).
- **[10-28] No new funding round found specifically for an agentic-CLI / coding-agent vendor** — no primary round for Cursor/Anysphere, Cognition, Windsurf, Zed, Aider, OpenCode, Cline, Roo, Continue in the window (search confirmation limited — see recovered limitations).

### Recovered enterprise adoption (2026-10-27→28)
- **[10-28] Anthropic expands GSA partnership: 40% discount across every Claude surface (2026-10-27)** — *"Approximately **500 US federal, state, and local government organizations** now use Claude. Weekly Claude for Government active users are up about **eightfold** since February, and usage across federal civilian agencies has grown about **20-fold** in a year."* New **40% discount** on Claude Enterprise, Claude for Government and the Claude API — "for the first time, the discount applies across every product surface"; est. government savings **$1B**, **no minimum spend commitment** (consumption pricing). Claude for Government (FedRAMP High, "delivers Claude's coding and agentic work capabilities") went **GA on September 30**.
Source: https://www.anthropic.com/news/expanding-partnership-gsa
- **[10-28] OpenAI "dots": the always-on personal assistant built out of the coding tools (2026-10-27T02:00Z)** — TechCrunch Disrupt with enterprise product lead Alexander Embiricos: ChatGPT Work was spun out of the agentic coding tools; in ChatGPT desktop/mobile for **Pro-tier and above, from $100/month**; connects to calendar, email and computer to work proactively. *"you could achieve much of dots' functionality with OpenAI's Codex app… but that requires more work and hand-holding."
Source: https://techcrunch.com/2026/10/26/how-openai-turned-its-coding-tools-into-dots-an-always-on-personal-assistant/
- **[10-28] Bank of America warns customers not to share banking passwords with AI agents (2026-10-27T21:44Z)** — never share username/password with "an outside service, **including an AI-enabled tool or agent that offers to act on your behalf**"; banks are "reportedly grappling with unauthorized agents accessing their customers' money." Direct friction on the credential-handoff pattern (dots, MCP connectors, Claude Code plugins) depends on.
Source: https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/
- **[10-28] Anthropic: early progress accelerating drug development with Claude (2026-10-27, updated 20:26Z)** — six partners (BigHat, Bristol Myers Squibb, Divergence Labs, Enveda, Generate Biomedicines, The Column Group) plus Anthropic's own programs (rare childhood muscular dystrophy — "Claude handles much of the scientific and operational work"). Enveda: chemists "spent up to **75% of their time on paperwork**"; Anthropic has "already prioritized specific improvements to our models."
Source: https://www.anthropic.com/research/early-progress-drug-development
- **[10-28] Contextual Anthropic IPO coverage** — "Who's really in charge at Anthropic after the IPO?" (https://techcrunch.com/2026/10/27/whos-really-in-charge-at-anthropic-after-the-ipo/) · "Anthropic's IPO filing reveals its strategy for keeping enterprise customers hooked" (https://techcrunch.com/2026/10/27/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/) · Frontier AI labs say their models refuted the Exponential Time Hypothesis (https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/).

### New Oct 27→29 market / product signals (fresh pull)
- **[NEW] Cursor ships the Agent SDK (2026-10-28, HN 99 pts / 112 comments)** — "the framework we use to build our own managed agents like Bugbot, Security Reviewer, and Rollouts"; define agents as code, then `agent-sdk deploy` to Cursor infrastructure; agents respond to team events (PR review, compliance, incident investigation) under inspectable policies — the agent runtime is being commoditized into an embeddable SDK.
Source: https://cursor.com/blog/agent-sdk
Source: https://news.ycombinator.com/item?id=50273731
- **[NEW] Google Gemini 4 Carbon (2026-10-28, HN 808 pts / 663 comments)** — highest-engagement AI story of the week; the model tier arriving underneath Gemini CLI.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
Source: https://news.ycombinator.com/item?id=50276792
- **[NEW] GitLab security incident: attempted exploitation of CVE-2026-97229 (2026-10-28, HN 73 pts / 20 comments)** — CI/supply-chain exploit attempt; relevant to agent-generated-PR attack surface.
Source: https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html
Source: https://news.ycombinator.com/item?id=50282544
- **[NEW] "Claude Code found 14,219 photos of my face on my Android that I never took" (2026-10-28, HN 14 pts)** — agent over-reach into local media; autonomy-backlash datapoint.
Source: https://news.ycombinator.com/item?id=50278101
- **[NEW] Anthropic "now lets Claude users jump out of plane without parachute" (The Register, 2026-10-27/28, HN 8 pts)** — trade-press framing of Anthropic removing its last safety/disclaimer prompt.
Source: https://news.ycombinator.com/item?id=50274666
- **[NEW] MicroZig adopts a strict no-LLM / no-AI policy (2026-10-29, HN 26 pts / 20 comments)** — embedded-tooling ecosystem pushing back on AI contribution policies.
Source: https://github.com/ZigEmbeddedGroup/microzig/blob/main/CODE_OF_CONDUCT.md
Source: https://news.ycombinator.com/item?id=50282865
- **[NEW] Gemini censoring Joe Biden in election-related results (2026-10-28, HN 12 pts)** — model refusal/omission as a mainstream topic.
Source: https://news.ycombinator.com/item?id=50277656
- **[NEW] "OpenAI still has a WebRTC Problem" (2026-10-29, HN 4 pts)** — real-time agent transport friction.
Source: https://moq.dev/blog/webrtc-is-still-the-problem/
Source: https://news.ycombinator.com/item?id=50282619
- **[NEW] Qwenputer: a functioning, deterministic RISC-V CPU inside Qwen3.5 (2026-10-29, HN 58 pts / 11 comments)** — model-generated hardware as an agentic artifact.
Source: https://divagr.com/blog/qwenputer
Source: https://news.ycombinator.com/item?id=50282838

## Issue Tracker Signals

*Fresh pull 2026-10-29T01:50Z via GitHub **Search API** (`is:issue+is:open`, sort=created desc); the core Issues API was rate-limited. Pull requests filtered out. Format: number | created | title | URL.*

### anthropics/claude-code
- 105839 | 2026-10-29 01:49 | [BUG] Chinese IME (Microsoft Bopomofo) input intermittently stops working until the c | https://github.com/anthropics/claude-code/issues/105839
- 105838 | 2026-10-29 01:43 | [BUG] Windows: skill `effort:` frontmatter is ignored when SKILL.md has CRLF line end | https://github.com/anthropics/claude-code/issues/105838
- 105837 | 2026-10-29 01:40 | [Bug] Input prompt box expands to 2 rows, causing screen flicker while typing | https://github.com/anthropics/claude-code/issues/105837
- 105836 | 2026-10-29 01:35 | exodo-cap | https://github.com/anthropics/claude-code/issues/105836
- 105835 | 2026-10-29 01:28 | The thread we have in project doesn't read repo's installed skills/plugins. Cou… | https://github.com/anthropics/claude-code/issues/105835
- 105834 | 2026-10-29 01:22 | [BUG] Desktop (Windows): a message sent while Claude is working should be delivered i | https://github.com/anthropics/claude-code/issues/105834
- 105833 | 2026-10-29 01:09 | [Bug] Cyber Safeguard False Positive on HIL Test Automation (HID/Screenshot) | https://github.com/anthropics/claude-code/issues/105833
- 105832 | 2026-10-29 00:56 | [BUG] For "test -f", Bash tool does not respect blockReadsOutsideWorkingDirectories | https://github.com/anthropics/claude-code/issues/105832

### openai/codex
- 57880 | 2026-10-29 01:49 | Local Codex Inherits ChatGPT-Connected GitHub Authority Without Per-Device Consent | https://github.com/openai/codex/issues/57880
- 57879 | 2026-10-29 01:48 | [Windows 10][Desktop 26.1023.6621.0] Browser Use denies an explicitly allowed origin  | https://github.com/openai/codex/issues/57879
- 57878 | 2026-10-29 01:47 | macOS: ~1.2 GB existing chat becomes unusable; history read fails even for one turn | https://github.com/openai/codex/issues/57878
- 57874 | 2026-10-29 01:23 | Repeated HTTP 400 Bad Request in one development project across multiple conversation | https://github.com/openai/codex/issues/57874
- 57873 | 2026-10-29 01:22 | Work stuck after losing connection during Google Drive upload | https://github.com/openai/codex/issues/57873
- 57872 | 2026-10-29 01:12 | Feature request: visual office workspace for real projects, chats, and agent handoffs | https://github.com/openai/codex/issues/57872
- 57871 | 2026-10-29 01:09 | macOS Codex CLI 0.157.1: supported attribution for file-write-unlink denial inside an | https://github.com/openai/codex/issues/57871
- 57869 | 2026-10-29 00:59 | Codex is FUCKING useless because of these RETARDED "cybersecurity" classifications | https://github.com/openai/codex/issues/57869

### google-gemini/gemini-cli
- 30016 | 2026-10-29 01:06 | Cancelling while the model answers tool results erases the prompt and the completed t | https://github.com/google-gemini/gemini-cli/issues/30016
- 30015 | 2026-10-29 01:03 | Resuming a session after tool-output masking drops the user's first prompt from histo | https://github.com/google-gemini/gemini-cli/issues/30015
- 30014 | 2026-10-29 01:00 | Mid-stream retry: function calls from the failed attempt are still executed and answe | https://github.com/google-gemini/gemini-cli/issues/30014
- 30008 | 2026-10-28 14:14 | test: 'synchronously closes the matching slave fd when platform is darwin' fails on M | https://github.com/google-gemini/gemini-cli/issues/30008
- 30007 | 2026-10-28 13:50 | Headless: on SIGTERM/SIGINT during run_shell_command the command keeps running, gemin | https://github.com/google-gemini/gemini-cli/issues/30007
- 30005 | 2026-10-28 13:17 | ACP: BeforeTool and AfterTool hooks do not run for tools called over ACP | https://github.com/google-gemini/gemini-cli/issues/30005
- 30004 | 2026-10-28 10:51 | bug(core): findUntrustedFlags still breaks YOLO mode on project temp dir paths, works | https://github.com/google-gemini/gemini-cli/issues/30004
- 30000 | 2026-10-28 06:26 | Settings env vars: ${VAR:-default} ignores default when VAR is set but empty | https://github.com/google-gemini/gemini-cli/issues/30000

### github/copilot-cli
- 5283 | 2026-10-28 21:42 | Remote environment hosting blocked by remote-control policy on personal Copilot Free  | https://github.com/github/copilot-cli/issues/5283
- 5282 | 2026-10-28 19:45 | SDK: unbounded concurrency in listSessions() exhausts file descriptors with a large s | https://github.com/github/copilot-cli/issues/5282
- 5281 | 2026-10-28 16:41 | Shell command runner does not inherit environment variables from PowerShell | https://github.com/github/copilot-cli/issues/5281
- 5279 | 2026-10-28 15:18 | [Feature request] Authoritative foreground-session change hook for terminal integrati | https://github.com/github/copilot-cli/issues/5279
- 5278 | 2026-10-28 14:56 | Windows/Edge: native Computer Use state lacks verified URL and web accessibility tree | https://github.com/github/copilot-cli/issues/5278
- 5277 | 2026-10-28 14:12 | BYOK Azure Foundry: no quota warning and /compact cannot recover a long session | https://github.com/github/copilot-cli/issues/5277
- 5276 | 2026-10-28 13:51 | Autopilot overrides skills that require user decisions (ask_user auto-replies "work a | https://github.com/github/copilot-cli/issues/5276
- 5275 | 2026-10-28 12:51 | Support default-deny tool permissions with explicit allowlist in non-interactive mode | https://github.com/github/copilot-cli/issues/5275

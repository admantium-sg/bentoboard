# Findings — Community sentiment + Use cases, showcases, deployments, ROI metrics
**Task 2 · Date: 2026-10-28 · Novelty-focused (baseline: Oct 27 run)**

---

## Community forum (Oct 28) — Two new topics, both signalling a documentation/support gap rather than excitement

**"How to use Workboard" (#254, Oct 28 08:04 UTC, KFP_Sticky_Note)** is the Control UI kanban board drawing its first help request, and the post is more interesting as a workflow-failure report than as a feature request. The user's actual workflow: *"The first time I made a card, I put it in TODO. Then put it in Scheduled, because there is no Doing column. Once the task is finished, I move it to Ready — thinking that's a shelf for 'Ready to Ship' items. Then my agent pick it up and make another copy of my work. Since that work was not a programming, but a compliance [paperwork stack]…"* — i.e. **the board's card lifecycle duplicates the agent's work product**, and the compliance domain (a paper stack that got printed out at 50 pages in the related thread) is exactly where a duplicated artefact is expensive. The user closes by noting *"I think OpenClaw team themselves are probably task saturated, so if you can share how you use the Workboard, that'd be nice."* Two signals: a self-organising agent-work board that users do not understand, and a visible queue of unanswered first-use questions.

Source: https://community.openclaw.ai/t/how-to-use-workboard/254

**"Support request sanitized" (#250, Oct 28 01:56 UTC, Arik_Fio)** — a sanitised support request where *"SDK subagent.complete rejects inside a service plugin — request for supported diagnosis."* Environment disclosed: **OpenClaw 2026.10.5, Linux x64, Node.js v24.21.0, custom service plugin version 0.1.3**. The architecture is deliberate and worth noting: *"A custom signed loopback broker calls the documented tool-free, sessionless completion SDK from a registered service (apiVersion: 2). The target agent is fixed server-side; provider and model are omitted so the configured agent owns selection. No business data was queried."* — a hardened, least-privilege integration design that still hits an undocumented rejection. This is the second consecutive day of SDK/plugin-surface requests landing on the forum rather than the tracker.

Source: https://community.openclaw.ai/t/support-request-sanitized/250

---

## Community — Braxton's Oct 28 replies are the most substantive community posts of the day, and both are about guardrails

**Topic #197 ("Rules you've had to teach your Claw the hard way"), reply Oct 28 00:39 UTC:** *"That my mother was not my girlfriend… Luckily, I was just testing new connections (Google contacts, twilio number, plus elevenlabs voice). I still ask for a number verification before sending though."* — a live near-miss where a newly connected contact list, a Twilio number and an ElevenLabs voice were tested at once and the agent mis-identified the recipient. The self-imposed fix — **always ask for number verification before sending** — is the community's clearest example of an operator adding a human confirmation gate after a real near-miss, and it lands in the same week as the platform's tool-policy-bypass issues (#186281, #186333). The pattern across both layers: the guardrail the community invented by hand is precisely the guardrail the platform's plugin policy path is reported to skip.

Source: https://community.openclaw.ai/t/rules-you-ve-had-to-teach-your-claw-the-hard-way/197

**Topic #106 ("Obsidian is becoming the long-term memory for all my agents"), reply Oct 28 00:43 UTC:** *"I use obsidian too. Each agent has a folder, and there's a shared agent folder. I also have a project folder that includes more details about my projects."* — a three-tier memory layout (per-agent / shared-agent / per-project) that answers the Sep 29 question in the thread about how to organise a vault when several agents write into it. Combined with mpflgrmpf's Oct 25 post (*"I lost overview, and now openclaw on RasPi adds additional topics… I miss somehow a bird view, overview, visual overview"*) the thread's unsolved problem is **not storage but cross-agent visibility**: users are converging on a shared Markdown substrate and then losing the overview of what each agent wrote where.

Source: https://community.openclaw.ai/t/obsidian-is-becoming-the-long-term-memory-for-all-my-agents/106

---

## Community — Model choice stays the dominant thread, and the "daily driver vs cheap worker" split hardens

**Topic #234 ("Which model is your main Claw's brain?")** gained one reply on Oct 28 02:40 UTC — **Legend28469:** *"Deepseek v4.1 Flash via Opencode Go is my default. I think it's just an all-around solid contender, use it for most work and day to day agentic tasks."* Combined with the existing replies this makes the community's operating pattern explicit across three posts: **KFP_Sticky_Note** — *"The main is Deepseek v4 Pro and Deepseek 4.1. v4 Pro is pleasant to talk to. 4.1 is capable and cheap. So Pro is my main to talk to, and 4.1 is worker and subagent."*; **Saul_Burgos** — *"sol 6.1 medium. Because it is the one that use every day on Codex… The last thing that I read months ago was that Anthropic bans openclaw. Has that changed? Can I connect the subscription?"* The Anthropic-subscription-ban question from a community member is worth flagging on its own — it shows the **policy-uncertainty cost of the Claude Code path** is still live in users' heads, even as OpenAI's ChatGPT-sign-in path ships Terra at half price. The thread has 33 views and 4 posts — **zero answers on the substantive Anthropic-subscription question.**

Source: https://community.openclaw.ai/t/which-model-is-your-main-claws-brain/234

---

## Community — A quiet week on the official blog: no posts in seven days, and the last one was a call to build

The OpenClaw blog RSS (23 items) shows the most recent post is **"Come Build With Us: OpenClaw Focus Weeks" (Oct 21, 2026)** — **zero posts in the last seven days and none in the Oct 27–28 window**. Recent entries for context: *"How PJ helps small businesses use OpenClaw"* (Oct 16), *"Tencent AIG joins ClawScan"* (Oct 2), *"OpenClaw Enterprise"* (Sep 29), *"Microsoft Autopilot is built on OpenClaw"* (Sep 25), *"OpenClaw Completes Security Audit Through OpenAI's Patch the Planet Initiative"* (Sep 21). So the Oct 27–28 window produced **a stable release, a tracker downgrade and heavy enterprise-repo commit velocity — but no announcement surface at all.** For a channel whose last official post was a call for community-built Focus Weeks, that silence is the clearest read: the project has shifted its energy from marketing to shipping and to the enterprise control-plane repo.

Source: https://openclaw.ai/rss.xml

---

## Use case — The cost-of-ownership floor: agents running 24/7 on two $26/month VPSes, with a hand-rolled credit governor

**"Running AI Agents 24/7 on Two $26/Month VPSes: Hostinger Governor Fixes the CPU Credit Limit" (Oct 15)** — the single most cost-relevant deployment in the corpus so far, and not previously recorded. A developer runs multiple agents 24/7 on **two Hostinger KVM 8 boxes (8 vCPUs, 32 GB RAM, 400 GB NVMe) at $25.99/month** on a 24-month US commit, renewing at **$49.99** — across 54 locales the same plan ran $22–$32/month, and paying in local currency with a 20% referral discount brought his to **~$18**. The problem: *"a KVM 8 can burst to all 8 cores while credits last, but earns credits back at only 4.8 cores' worth. Once the balance hits zero, the whole box drops to 30% (2.4 cores)"* — Hostinger limited his box **13 times in 10 days**, capping every service on it. The open-sourced fix budgets the credit pool so load eases to the 4.8-core baseline before the balance runs dry. The architecture is the interesting part: **an Ansible repo rebuilds the box from an empty VM in ~two hours**, the server applies each change to itself after checks pass, **no open ports** (everything dials out, access via Tailscale), **each agent or service runs as its own Linux user** so they cannot read each other's files, agents report to a private Telegram group with one topic per project, **five actions always wait for a tap** (spending money, deleting production data, security changes, messaging all users at once, sending personal data somewhere new), `/freeze` stops every agent at once, and **no agent holds an API key** — keys live in small broker services that validate each request, act, and keep an undo record. The stated reason for VPS over laptop: *"A sleeping laptop can't run scheduled agents"*, plus process isolation so one runaway job can't take down the rest. Cost context: Hetzner raised its 8-core/32 GB dedicated server from €62.49 to **€138.49/month** in June.

Source: https://openclawradar.com/article/hostinger-governor-ai-agents-247-vps-cpu-credits

---

## Use case — ROI reality check for voice agents: 14,000 calls, humans 4x on conversion

**"Call Center Jobs Are Declining, but 14,000 Calls Show Humans Still Outperform AI" (Oct 16)** — Bold Agent Kit compared **~14,000 inbound calls (6,343 AI-handled, ~7,657 human-handled)**. The headline: **human receptionists delivered ~4x stronger inbound intake conversion**, and **AI-handled calls had 700% more no-progress hangups** (callers hung up before meaningful progress at roughly 7x the human-handled rate). The study did not isolate cause — conversational friction, response delays, unexpected questions, caller preference are all plausible — and humans **missed ~15% more calls**. The builder-relevant framing is the one worth carrying: *"AI's real advantage is availability: it can answer consistently when staff aren't available. But answering more calls isn't the same as producing more business — an automated system that answers everything but can't convert may not deliver the expected ROI."* Recommended benchmarking shift: measure **intake conversion and abandoned-without-progress rate**, not call-answer rate. Backdrop from the cited a16z Oct 9 report using Revelio employment data: **global call-center employment growth turning negative across income groups** — the first sustained decline after more than a decade of expansion.

Source: https://openclawradar.com/article/call-center-jobs-declining-14000-calls-humans-outperform-ai

---

## Use case — Enterprise deployment: GSA gives Claude 40% off across every buying path, and OpenAI is piloting the control plane internally

**GSA renews Anthropic's OneGov agreement (Oct 27):** **40% discounts on token-based usage across Claude Enterprise, Claude for Government and the API, no minimum purchase, and for the first time across every buying path (direct, resellers and marketplaces)**. Eligibility runs from all three federal branches down to **state, local, tribal and territorial governments**. Anthropic pegs estimated savings at **$1B** and supplies the adoption stats: **~500 government organisations use Claude; weekly Claude for Government active users up ~8x since February; federal civilian usage up ~20x in a year**. Context: the old $1/user deal expires Oct 31; OpenAI's equivalent signed last month was a 50% discount over 27 months; GSA says OneGov has saved taxpayers **over $1.8B total**; HHS announced a sole-source intent to award for Claude last week. Read against OpenClaw: this is the demand-side shape of the self-hosted agent market — government buyers are now buying *access under contract*, not per-seat tooling.

Source: https://anomixer.github.io/openclaw-news/ (Oct 28, 2026 entry)

**OpenAI's internal agent "Androidclaw" (OCE announcement, Sept 29 — not previously recorded):** an internal OpenAI agent operating across company context, Git, GitHub and logging systems — it investigates broken builds, identifies the relevant pull request, traces product problems back to incidents and in some cases **prepares and merges fixes**. OpenAI staff member **RJ Marsan** called it *"well-adopted"* internally and its issue-tracing-to-fix-publish loop *"kinda game changing"*. The OpenClaw Enterprise control plane originated inside OpenAI, was donated to the OpenClaw Foundation, and is developed with contributions from **Red Hat and Nvidia**; **OpenAI and Red Hat are already piloting it internally.** OCE's stated motivation: *"some IT organizations have simply banned autonomous agent platforms for lack of governance controls"* — OCE is the layer between "ban it" and "unchecked access".

Source: https://venturebeat.com/orchestration/openclaw-launches-free-enterprise-control-plane-for-persistent-ai-agents-backed-by-openai-red-hat-and-nvidia | https://openclaw.ai/blog/openclaw-enterprise/

**Red Hat + Nvidia at KubeCon NA 2026 (Oct 27, SiliconANGLE/theCUBE):** Red Hat's **Pete Cheslock** on Nvidia-developed **OpenShell**, a secure open runtime placing agents in isolated sandbox environments, integrated into Red Hat's AI platform — *"The agent sandbox is one of them, so that you can deploy these agents in a secure way using Kubernetes native APIs."* **Stu Miniman** stressed *"there's been more effort put on security than ever"* and cited **financial-services companies** among OpenShift Commons participants; Red Hat hosts an **OpenShift Commons Gathering on Nov 9**. The interview also references the February 2026 wave of *"tens of thousands of OpenClaw systems exposed due to misconfiguration"* — the reputational baseline the enterprise push is answering. (Segment sponsored; Red Hat has no editorial control.)

Source: https://siliconangle.com/2026/10/27/red-hat-openclaw-agents-kubeconna/

---

## Use case — Two new agent-driven domains on HN, and one that reaches into physical manufacturing

**"Show HN: Castellan – A real-time strategy game for agents" (Oct 26)** — a live RTS game built as an agent environment, rather than an agent tool. **"Show HN: Loböle, open-source parametric CAD that AI agents can drive" (Oct 24)** is the more consequential: open-source parametric CAD on OpenCASCADE with a Vulkan viewport, and — critically — *"one command layer that the GUI, Python scripts and AI agents all drive."* Every command the GUI has is reachable via **JSON-RPC, a Python SDK and an MCP server**, and *"a terminal panel runs an agent inside the window."* The manufacturing stack is real, not a toy: assemblies with mates and clash checks, drawings to SVG and PDF, **static and modal FEM and topology optimisation**, **2.5D/3-axis/4th-axis milling posted for Mach3, LinuxCNC or GRBL with every file verified by simulating it**, STEP/IGES/STL/BREP interchange, and git-backed history with branches and merges. Gallery models are built by generators — an **OM615 diesel engine with its injection pump chained to the crank and timed (Opus 5.5)** and a **3 Hz self-winding automatic watch (Opus 5, one shot)**. The project's own warning is the honest deployment constraint: *"CAM has cut real parts on one machine only: a 6090 CNC router on Mach3. Simulate and dry-run every file before cutting."* Version 0.1, Linux first, macOS untested. This is the first agent-driven CAD/CAM deployment in the corpus with a physical-output path.

Source: https://github.com/eliasaronson/lobole | https://news.ycombinator.com/item?id=Show%20HN%3A%20Lob%C3%B6le%2C%20open-source%20parametric%20CAD%20that%20AI%20agents%20can%20drive

---

## Ecosystem / Deployment — The local-model path gets a purpose-built model family and a hardening requirement

**LiquidAI's LFM3 family ships with OpenClaw named as the deployment target (Oct 27):** LFM3-1.7B, LFM3-VL-2B, LFM3-Omni-2B, LFM3-Audio-2B and LFM3-d1-2B ("decision") all on **one ~2B hybrid backbone with different heads**; LFM3-1.7B-Base ships for your own post-training. The deployment target is stated in the blog itself: *"run a local agent, like OpenClaw, Hermes Agent, or Pi"* — fine-tunable on a **single consumer GPU**. Licensing caveat: the custom **lfm1.0** licence, not Apache — commercial users should read the terms. Companion open-weight releases the same week: Baidu **Unlimited-OCR 2** under MIT, Nanbeige's 33B open teacher, Bria's 8B open image model, gemini-cli v0.66.0.

Source: https://anomixer.github.io/openclaw-news/ (Oct 28, 2026 entry) | https://huggingface.co/blog

**Cloudflare discloses a cross-request KV-cache leak on GLM-5.3 served on Workers AI — with a concrete self-hosting remediation (Oct 26–27):** researcher Gadi Evron (Knostic, via HackerOne on Sep 8) found that when SGLang's disaggregated prefill/decode engine is inverted, **the KV cache pool (681,280 tokens) is smaller than the model's 1M context**, so requests queue behind a one-token placeholder and prefix reuse serves other sessions' stale cache wholesale — **between Aug 27 and Sep 9, 155 responses on prompts over 681,280 tokens could carry someone else's context**. Knostic's samples show **names, invoice and euro amounts, source code fragments, and agent-task records**. Cloudflare pulled the model **~40 minutes after the report** and restored it the same day (19:40) after enlarging the KV pool to ~2.04M tokens and shipping a patched engine (upstream SGLang #38704, #36988, #38935, rolling out in v0.5.20–v0.5.22); no other models affected. **Self-hosting guidance: upgrade SGLang to v0.5.22+, size the KV pool above context length, and add canary tokens in your prompts.** This is the most directly actionable finding in today's run for anyone running a local-model OpenClaw deployment.

Source: https://anomixer.github.io/openclaw-news/ (Oct 28, 2026 entry)

---

## Ecosystem / Adoption metric — Anthropic's own study: 50 professional analysts sided with Claude Code on 86% of four-way research calls

**Anthropic study (Oct 28):** 50 professional analysts across geopolitics, markets and tech were put through real exercises; on the four research-direction stances they took, **86% aligned with the agent's lean**, many later said *"I thought so all along,"* and some **pasted the agent's arguments into their drafts without attribution.** The study flags its own caveat: stances were coin-flip calls to participants and single-question influence cannot be isolated. Alongside it, **Anthropic signed six biopharma partners in one stroke** — BigHat Biosciences, Bristol Myers Squibb, Divergence Labs, Enveda, Generate Biomedicines and The Column Group — covering Claude across target identification, molecule design, manufacturing and regulatory drafting, with an in-house programme targeting a rare childhood muscular dystrophy and aiming at a 2029 IND filing.

Source: https://anomixer.github.io/openclaw-news/ (Oct 28, 2026 entry)

---

## Ecosystem — ClawHub's download rankings show security-vetting and self-improvement skills dominating actual installs

Top skills by downloads on the ClawHub registry (v1 API, Oct 28): **self-improving-agent 489,217 downloads / 4,006 stars**; **skill-vetter 280,137 / 1,311** (*"Security-first skill vetting for AI agents. Use before installing any skill"*)**; self-improving 213,229 / 1,300**; github 202,991 / 671; ontology 200,890 / 660; gog 198,233 / 955 (Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, Docs); **skillscan 183,004 / 41** (*"Security gate for skills. Every new skill MUST pass SkillScan before use"*); proactive-agent 178,480 / 831; weather 172,711 / 430; multi-search-engine 164,449 / 764; agent-browser-clawdbot 158,774 / 463; admapix 134,147; humanizer 133,709; nano-pdf 123,194; obsidian 112,349; openclaw-tavily-search 109,452; nano-banana-pro 108,036; notion 104,956; skill-creator 103,559; pollyreach 102,031 (*"gives every AI agent a phone number and the ability to get things done over the phone"*); auto-updater 100,959; word-docx 95,774; baidu-search 93,839; evolver 91,006; sonoscli 90,472. The ranking shape is itself the finding: **the two most-installed skills in the registry are (a) a self-improvement/learning-capture loop and (b) a skill-security gate** — the ecosystem's own top-of-market answer to the incident history of malicious skills, with the third security skill (skillscan) also in the top eight despite only 41 stars. Note the star/download divergence on the security skills: **skill-vetter converts (280K downloads / 1.3K stars) while skillscan does not (183K / 41)** — a distribution channel rather than a popularity difference.

Source: https://clawhub.ai/api/v1/skills?sort=downloads

---

## Ecosystem / Adoption numbers — as of 2026-10-28

The `openclaw/openclaw` repo stands at **393,243 stars, 82,667 forks, 1,697 watchers, 7,663 open issues**, pushed Oct 28 09:29 UTC; created 2025-11-24 (~11 months old). **npm weekly downloads: 2,722,524** (Oct 20–26, 2026). Third-party tracker anomixer reads **~393.2K stars, flat in 24h — the first rest day after five straight green days**, solid **#6 globally**, gap to #5 ~7.1K; **Hermes 257.7K (+300) has chased for 24 straight days**, leading Linux 253.7K (+100) by ~4.0K. Sister projects: `clawhub` 9,536 stars; `mcporter` 5,091; `openclaw-windows-node` 2,177; `crabbox` 1,507; `agent-skills` 1,110; `openclaw-enterprise` 443; `clawscan` 147 (*"composable security scanning harness for agent skills"*, pushed Oct 28 09:19 UTC).

Source: https://api.github.com/repos/openclaw/openclaw | https://api.npmjs.org/downloads/point/last-week/openclaw | https://anomixer.github.io/openclaw-news/

---

## Community sentiment — The open Anthropic-subscription question in #234 now has a documented answer, and it contradicts the common belief

**The unresolved question:** in topic #234 (**"Which model is your main Claw's brain?"**), **Saul_Burgos** wrote: *"sol 6.1 medium. Because it is the one that use every day on Codex… The last thing that I read months ago was that Anthropic bans openclaw. Has that changed? Can I connect the subscription?"* The thread has 33 views and 4 posts — **no answer was posted.** The answer is documented, and it is not the one most people carry:

**OpenClaw's current Anthropic provider docs** state that *"Anthropic currently treats Agent SDK and non-interactive CLI invocations as programmatic usage: Anthropic's June 15, 2026 support update paused the previously announced separate Agent SDK credit plan. Subscription-plan Claude Agent SDK, `claude -p`, and third-party app usage still draw from the signed-in subscription's usage limits."* In other words: **the Claude subscription still covers OpenClaw usage, via the `claude-cli` runtime** — `claude-cli/*` selects the native Claude runtime explicitly, and *"Claude CLI retains subscription accounting."* The docs also caution that *"Anthropic can change Claude Code billing and rate-limit behavior without an OpenClaw release"* and recommend an API key for *"shared production automation"* where spend predictability matters. So the "Anthropic banned OpenClaw" story is **stale but not entirely wrong**: the April 2026 restriction landed, and it still bites on the API path.

**The origin story (Apr 14, 2026), retrieved for context:** OpenClawRadar's *"Anthropic restricts Claude subscriptions from third-party harnesses like OpenClaw"* records the policy change — from **April 4 at 12pm PT / 8pm BST**, third-party harnesses no longer draw on subscription limits and must use separately billed "extra usage", with a one-time credit equal to one monthly subscription price redeemable **by April 17** and **up to 30% discounts** on pre-purchased usage bundles. Anthropic's stated reason: third-party harnesses *"put an outsized strain on our systems"* and it needs to *"prioritize our customers using our core products."* The **HN thread (item 47633396) drew 1,099 points and 822 comments** — the single largest community reaction in the corpus on the subscription question. Two quotable positions from that thread: **jasonlotito** — *"you can use the Claude Code subscription with third-party tools, but you have to use the Claude Code harness. Or, you use the API. OpenClaw could use the Claude Code harness, but they don't."*; and **firloop**, noting *"OpenClaw _is_ using the Claude Code harness (via `claude -p`)"* while using the documented "Option B" wrapper. The often-quoted OpenClaw-specific usage multiplier — *"OpenClaw users can consume 6-8 times what typical human subscribers use"* — comes from that same discussion, and it is the real economic story behind the restriction.

Source: https://docs.openclaw.ai/providers/anthropic | https://openclawradar.com/article/anthropic-claude-subscriptions-third-party-harnesses-openclaw | https://news.ycombinator.com/item?id=47633396

**Cost sentiment, from HN in the same window (Oct 26–27):** **myphpgothacked** — *"To be fair, I spent unbelievable amounts of money on Opus tokens for OpenClaw. Easily my biggest expense this year. The risk is that other models are pretty comparable to Opus since around July. Unless they have cheaper electricity costs, I can switch models interchangeably. They don't have a moat."* This is the individual-scale counterpart to the excluded $10M creator-spend figure: **for a single heavy user, OpenClaw on Opus was the largest line item of the year**, and the follow-on claim is the important one — **model parity since ~July makes the expensive default a choice rather than a necessity.** Also **SkyPuncher** in the April thread: *"Just give me a subscription tier where I'm not being blocked out every afternoon. I'm hitting rate limits within 1:45 during afternoons. I can't justify extra usage since it's a variable cost, but I can justify a higher subscription tier."* — the recurring complaint is **rate-limit ceilings**, not per-token price.

Source: https://news.ycombinator.com/item?id=50245036 | https://news.ycombinator.com/item?id=47633396

---

## Community sentiment — Two new agent-adjacent showcases on HN, and one pointed jab at agent-built software

**"Show HN: AgentIntersect World – local-first 3D workspace for your coding agents"** (HN item 50197589, refreshed Oct 27) — a solo-dev TypeScript project (repo created 2026-07-19, **3 stars**, last push 2026-10-21) that gives agents avatars in a 3D world you move around in: *"Attach agents you already use, OpenClaw, Hermes, Codex, Claude Code; full tools, skills and memory stay with your harness."* The design constraint is the interesting part — **the harness keeps all capability, the 3D layer is only embodiment and visualisation** — and the stated motivation is *"I found very few projects that embodied your agents into a 3D space. I wanted to make this a useful tool while also being fun!"* OpenClaw is named first among the attachable harnesses.

Source: https://github.com/MelaBuilt-AI/AgentIntersect-World | https://news.ycombinator.com/item?id=50197589

**"Show HN: Castellan – A real-time strategy game for agents"** (HN item 50246334, Oct 26) — repo `emersoftware/castellan` (TypeScript, created 2026-10-01, **4 stars**, last push 2026-10-27, described as *"local Agentic RTS matches and public replay viewer"*, live at `https://rts.emersoftware.cl/`). The thread is small (**3 points, 4 comments**) and includes an unanswered operational question — **sara_kumodeck**: *"do the upload unit scripts run sandboxed on your server?"* — plus **join**: *"insane!!! how did you make the sprites?"* That unanswer-by-OP shape matters for anyone watching agent-game deployments: **the security posture of uploaded agent scripts is the first thing a technical audience asks about and the thing the author did not address.**

Source: https://github.com/emersoftware/castellan | https://news.ycombinator.com/item?id=50246334

**The reputational cost of agent-built software, stated bluntly (HN, Oct 27):** on the Show HN for PaperPilot (a zero-cloud Rust PDF engine with WASM and MCP), **ffin** commented: *"the gif in the readme has visibly broken ui (the text on the right in the header is not vertically aligned) I'm not convinced a human has ever actually looked at this project; this must be the work of someone's overzealous openclaw agent or something."* — **OpenClaw is now a generic shorthand for machine-generated slop.** That is a genuine community-sentiment data point, and it lands the same week as the malicious-skill incident history that made `skill-vetter` and `skillscan` the second and third most-installed skills in the registry.

Source: https://news.ycombinator.com/item?id=50253593

**A safety-flavoured sentiment quote on self-hosted agents (HN, Oct 26):** in the thread *"IBM CEO says open weight models are now good and cheap on-prem"*, **charcircuit** wrote: *"OpenClaw with a local LLM with an email you setup for it could contact the police."* — a compact, self-contained statement of the **agency-plus-email capability risk** that drives the whole local-agent guardrail conversation, from someone arguing *for* local models. Useful as evidence that the concern is not confined to the vendor side.

Source: https://news.ycombinator.com/item?id=50241617

---

## Community sentiment — Agent naming as an identity practice, and notification sound as a UX layer

**Topic #123 ("What'd you name your main claw, and why?")**, 30 posts, 185 views, gained a reply on Oct 28 02:45 UTC from **Legend28469**: *"Greetings all, I named mine Cannon. Reason being from the start of the Openclaw days where there were the stories of it being something of a loose cannon. I get a lot of notifications on my phone and so I also thought it would be cool to take the 'Cannon' mixtape sound effect so that I can pinpoint exactly when my agent needs me for something."* Two community practices in one post: **naming as an ownership ritual** (the thread's existing entries run from *BenderEcho* to *Clawdia*, *Asimov*, *Moneypenny*, *Hoppy*) and **audio notification design as a triage mechanism** — a distinct sound per agent so an agent's urgency is distinguishable without reading the screen. Other names from the same thread: **lator57** hosts *"Moneypenny… on Apple Mac Mini M4 Pro with 48GB of memory"*; **ceckert** runs **BenderEcho** as the original agent and reports *"I have more agents these days than I know what to do with, but BenderEcho is still my OG claw."*

Source: https://community.openclaw.ai/t/what-d-you-name-your-main-claw-and-why/123

---

## Use case — Multi-surface interaction is the settled pattern, and it is now being treated as a control-plane problem

**Topic #196 ("How do you actually talk to your Claw?")** documents the community's settled multi-surface operating pattern. **GunGirlYuna**: *"I talk to my Claw across Telegram main, Discord where tasks with long logs and WhatsApp as it can interact with mates. I'm also use the OpenClaw app and control UI just as a separate instance if I want to run tasks concurrently."* **jjjhenriksen**: *"My main claw is all in the Control UI. It's available to me on Discord for when I'm not at home/in front of the laptop and want to kick off something fast."* The design rule the thread converges on: **channel choice follows task shape** — Telegram for the main conversation, Discord for long-running logs, WhatsApp for outward-facing interaction, Control UI/app as a separate concurrent instance — and the thread's open community challenge remains getting a Claw to place a **hot** UberEats/DoorDash coffee order rather than *"100% cold, garbage coffee delivered 60 minutes later than the time advertised."* (This thread predates the Oct 28 window; it is included because it is the anchor for the multi-surface pattern the Oct 28 replies continue.)

Source: https://community.openclaw.ai/t/how-do-you-actually-talk-to-your-claw/196

---

## Use case — A working pattern for cross-agent delegation that is currently broken upstream, reported with a minimal repro

**Topic #230 ("Cross-agent delegateToolsTo worker loses exec after coordinator completion continuation")**, posted Oct 25 23:11 UTC by **Simon**: a restricted coordinator can launch an explicitly authorised worker with `exec`, but **launching another worker from a verified completion continuation records the coordinator's local execution denials in the new worker's delegated deny floor**, so the second worker cannot execute. The reporter asks whether this is an intended limitation or a defect and whether an officially supported continuation pattern exists, explicitly refusing to work around it: *"We do not want to remove inherited/sender restrictions or enable execution on the coordinator."* Environment disclosed: official source commit `6f88c26dcf823a6d5c99a6053316829edc1a`. This is the **least-privilege multi-agent pattern** — a coordinator that delegates but cannot execute — hitting a floor-propagation bug; it is the same shape as the plugin-policy-bypass reports (#186281) on the platform side, and it is the single most reusable negative result in this community window: **delegated deny floors propagate across completion continuations.**

Source: https://community.openclaw.ai/t/cross-agent-delegatetoolsto-worker-loses-exec-after-coordinator-completion-continuation/230

---

## Ecosystem — Fresh showcase inventory from the radar's own article API

The radar's paginated article API (`/api/articles?limit=200&offset=N`, ~5,156 articles total) confirms the **use-cases category produced no new articles dated Oct 28** — the newest are Oct 27 (*Ex-Pest Control Tech Sets Up OpenClaw for Roofers and Pool Builders*), Oct 24 (*OpenClaw user runs Telegram bot on a 12-year-old PC by replacing LLM calls with local scripts*), Oct 23 (*36-Hour Ralph Loop*) and Oct 21 (*Apple's On-Device 3B Model as a Checker for OpenClaw Agent Output*), all covered in earlier runs. **Oct 28's radar output is entirely `news`**: OpenClaw v2026.10.8 (163 contributors) and Claude Code v2.1.312. The use-case signal in the last 24 hours is therefore coming from the **community forum and HN**, not from the aggregator.

Source: https://openclawradar.com/api/articles?limit=200&offset=0

---

## Errors / blocks encountered
- **Reddit is fully blocked from this host**: `www.reddit.com/r/openclaw/new.json` returns HTTP 403, `old.reddit.com` returns a network-policy block page, and `new.rss` returns a bot-block page. Community sentiment was substituted with community.openclaw.ai per-topic JSON endpoints, the OpenClaw Radar feed (which aggregates Reddit-linked posts), and the Hacker News Algolia API.
- **web_search (DuckDuckGo provider) returned a bot-detection challenge** on 2 of 2 attempts this run ("OpenClaw agent use case deployment case study business ROI October 2026", "OpenClaw showcase deployment agents business automation October 2026"). All gaps were covered via curl against ClawHub's v1 API, community.openclaw.ai, openclawradar.com's feed and article endpoints, HN Algolia, and anomixer.
- openclawradar.com section-listing JSON endpoints (/api/articles.json, /api/usecases.json, /api/index.json) return 404; the working endpoints are /api/feed.json, /api/articles?limit=200&offset=N and /article/<slug>.
- `https://www.anthropic.com/news/claude-for-government-onegov-discount-expanded` returns 404 (slug guess); the GSA/OneGov figures are therefore sourced from the anomixer Oct 28 entry rather than a primary Anthropic or gsa.gov URL.
- `https://openclaw.ai/summit` and `https://openclaw.ai/summit/price` both return 404 (NOT_FOUND), so no summit pricing material was retrievable this run.
- This file was extended by the Task 2 subagent after the parent session's compaction; the sections above the "Errors / blocks encountered" heading reflect the parent's first pass, the sections below it are the subagent's independently verified additions (each checked against `cumulative_findings.md`, `trend_analysis.md` and `daily_reports/` for novelty).
- A 3rd and 4th `web_search` attempt ("OpenClaw agent deployment business use case deployment case study business ROI October 2026", "OpenClaw agent deployment business use case showcase October 2026") also failed with "DuckDuckGo returned a bot-detection challenge" — **4 of 4 web_search calls in this task failed**, and **2 of 2 web_fetch calls were consumed** (one 404 on anthropic.com, one successful fetch of the radar call-center article). All other sourcing was done via `curl` against community.openclaw.ai, openclawradar.com, HN Algolia, GitHub's API, docs.openclaw.ai and anomixer.

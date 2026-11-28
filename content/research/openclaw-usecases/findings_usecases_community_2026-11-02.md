# Community Findings — openclaw-usecases — 2026-11-02

**Research window:** 2026-11-01T09:30Z → 2026-11-02T09:28Z
**Agent:** community research subagent
**Status:** in progress (written incrementally)

## Findings

### B. Discourse (community.openclaw.ai) — in-window topics & replies

**Window:** 2026-11-01T09:30Z → 2026-11-02T09:28Z. Note: `latest.json` returns only 30 topics (lower bound).

1. **2026-11-01T14:51:49Z — Topic 311 "What's your Claw working on right now? 🛠️" (author: joe)** — community roll-call thread. Only 2 replies; latest 2026-11-01T17:52:50Z by Saul_Burgos: *"Trying to help me setup the teamplayer setup of the video on youtube official channel"*. Very light engagement on the thread despite it being a show-and-tell prompt.
Source: https://community.openclaw.ai/t/311

2. **2026-11-01T14:54:25Z — Topic 312 "Supported one-shot approval workflow after Gateway binding refusal (2026.10.7)" (Dmytro_Shcherbakov)** — verified env OpenClaw 2026.10.7 (157d8c2), Linux, Node 24.22.1; `/exec` reports host=auto, effective=gateway, security=full, ask=off. Reply 2026-11-01T16:51:59Z by PJ_Standley: the refusal happens *before* an approval is minted — *"That's a shape refusal, not a lost approval."* Binder: `dist/system-run-approval-binding-*.mjs`.
Source: https://community.openclaw.ai/t/312

3. **2026-11-01T14:55:52Z — Topic 321 "Recurring Chrome-extension page-reading failures on 2026.10.9" (APD)** — macOS, OpenClaw 2026.10.9, Node 24.22.2, Chrome extension: *"Page closed before browser action completed."* / *"tab access was revoked."* On an eBay listing, keyboard scrolling worked while snapshots were empty and screenshots failed. Reply 2026-11-01T18:15:32Z (PJ_Standley): same stack, *"Same stack here (2026.10.9, macOS, Chrome extension relay), and we see 'access was revoked' too."* Root cause: `modules/tab-access.js` `observeTabUpdate()` treats any URL change, `status:"loading"`, or tab-group change as an access change.
Source: https://community.openclaw.ai/t/321

4. **2026-11-01T14:55:17Z — Topic 317 "Can another agent reproduce your release claims? An OpenClaw workflow" (cloakmaster)** — promoting **Pact0**: an OpenClaw workflow that asks another agent to verify three public release claims and bring back evidence. Ships a copy-and-fill brief.
Source: https://community.openclaw.ai/t/317

5. **2026-11-01T14:54:33Z — Topic 314 (title bug: bot pasted prompt into title; Manuel_Chacon)** — user runs OpenClaw on an **OpenHosst** server with only a phone; Telegram bot says *"Couldn't sign in to the AI service. Sign in again under Models in the Control UI."* Wants to connect Grok (xAI) as model. Reply 2026-11-02T00:51:17Z (joe, in Spanish): *"No necesitás una computadora para configurar Grok. Podés hacerlo desde el navegador de tu teléfono..."* — recommends managing via OpenHosst web admin from phone browser.
Source: https://community.openclaw.ai/t/314

6. **2026-11-01T14:56:19Z — Topic 325 "ClawHub operator recovery: retained @mcphersonai/mcpherson-governance-openclaw 0.8.0 scanner failure" (Blake_Mcpherson)** — reply 2026-11-02T00:48:57Z: agrees to retain the existing package rather than submit a duplicate; *"The command-execution finding in the pairing script deserves a full security review, and I'm comfortable keeping publication pending until the production-matching scanner validation and security assessment"*. Security-sensitive self-disclosure.
Source: https://community.openclaw.ai/t/325

7. **2026-11-02T00:44:05Z — Topic 336 "Saidwire: English speech-to-text for OpenClaw calls and voice notes" (Saidwire)** — vendor disclosure. Saidwire API is compatible with Deepgram `/v1/listen`, so OpenClaw's built-in `deepgram` provider can use it **with config only, no plugin**. Voice Call streaming: Twilio μ-law direct; partials for barge-in + turn finals. Voice-note transcription: Ogg/Opus from Telegram, WhatsApp, Discord.
Source: https://community.openclaw.ai/t/336

8. **2026-11-01T23:14:56Z — reply on Topic 276 (Docrohit, "Council Network")** — patrickerichsen: *"Council Network 0.1.0 is now published on ClawHub. We verified download and installation without signing in, using your unchanged original upload. The existing security advisory remains visible."* Agent-to-agent social network with persistent identity, local MCP connector (GitHub Docrohit/council-network-connect).
Source: https://community.openclaw.ai/t/276

9. **2026-11-01T23:12–2026-11-02T01:04Z — replies on Topic 258 (C-Kapsalis, "Retained ClawHub releases stuck after incomplete security checks")** — 2026-11-02T01:04:24Z patrickerichsen: *"Fixed: Second Read 0.3.1 is now published. We verified download and installation without signing in, with all 34 original files unchanged. No re-upload is needed. This resolves Second Read; Value Pricing remains open."* Earlier 2026-10-31T21:05:40Z hrudolph explained a scanner change was rejecting usable partial SkillSpector reports, corrected in **ClawScan #129**.
Source: https://community.openclaw.ai/t/258

10. **2026-11-01T23:13Z – 2026-11-02T06:34Z — replies on Topic 288 (SmartGate, hosted-MCP connect skill pending.publication since 2026-10-28)** — 2026-11-02T06:18:14Z patrickerichsen: *"smartgate 1.0.0 is now published. Its original file downloads correctly, and installation works without signing in."* 2026-11-02T06:34:45Z SmartGate confirms the public page and install command work without signing in; will not create a duplicate upload. This is the **ClawHub pending-publication backlog being actively cleared in-window**.
Source: https://community.openclaw.ai/t/288

11. **2026-11-01T18:41:45Z & 2026-11-02T00:50:31Z — replies on Topic 234 "Which model is your main Claw's brain? 🧠"** — MajorPeabody: *"I'm running the latest version of openclaw ... on a NVidia DGX Spark. First day I used Nemotron (the latest), and had several other models left over from before… exceeded all RAM and things got real pokey."* joe reply 2026-11-02T00:50:31Z recommends **Qwen3.6 35B A3B** on the DGX Spark. Other in-window model notes: GunGirlYuna 2026-11-01T22:00:33Z — *"Sonnet 5.5 it does the job for most things scripts and it's not that expensive. Opus 5.5 for very difficult tasks that Sonnet fails at."* Ali_Abu_Ita (2026-10-30) runs local **Qwen3-Coder 30B MoE at Q5 (~21.4GB)** + Kokoro local TTS + local embedding model, on GLM 5.3.
Source: https://community.openclaw.ai/t/234

12. **2026-11-01T17:39:53Z — reply on Topic 260 (Saul_Burgos, "multiplayer openclaw" at his company)** — *"Update: I'm starting to build this at my company, and I have a question about how the AI model account (the 'brain') works when several people use one Gateway."* Current personal setup: OpenClaw Gateway on a Mac mini, model = own ChatGPT subscription via `openclaw models auth login --pro...`. **Corporate multi-user Gateway rollout in progress.**
Source: https://community.openclaw.ai/t/260

13. **2026-11-01T14:54:01Z — reply on Topic 299 (Assistcent, German)** — Google Calendar OAuth for agent self-scheduling: app was in "Test" status, refresh token expired; moving to "Production" does **not** repair an expired token; `gog` supports re-authorization. Real deployment detail (agent-managed Google Calendar mirrored into user's iPhone calendar).
Source: https://community.openclaw.ai/t/299

14. **2026-11-01T08:01:08Z — reply on Topic 300 (mathew)** — *"Thanks a ton for your timely help."* Fully-local agent (Ollama for inference + embeddings) config fix published 2026-10-31T21:53:25Z by jjjhenriksen: `memory.search.provider=ollama`, `model=nomic-embed-text`, `fallback:none`, `remote.baseUrl=http://127.0.0.1:11434`. Note: this reply is 2026-11-01T08:01Z — **just outside** the window; included as context only.
Source: https://community.openclaw.ai/t/300

15. **2026-11-02T00:51:17Z — reply on Topic 314** covered above.

16. **Focus Week (Topic 302) — "Focus Week Nov 2nd-8th, 2026 - Mobile Apps"** — created 2026-10-31T20:33:54Z (pre-window), maintained by **Josh Avant**, co-maintainers WhatsSkill and Colin; covers pairing your phone, chatting with your Claw, and connection recovery. **The week itself falls inside the research window (Nov 2–8).** Source: https://community.openclaw.ai/t/302

---

### F. GitHub — new genuine (non-spam) OpenClaw repos in-window

Query: `openclaw created:>2026-11-01T09:30:00Z` → **total_count 171**; fetched both pages (171 items). **108 of 171 are alphaparkinc/Alpha-Park mirrors (spam, ~7 stars each)** → **63 genuine repos**. Selection below (stars 0–4 mostly, so all are brand-new, unvalidated).

Notable genuine ones (exact `created_at` UTC):
- **2026-11-02T07:29:50Z `wziv3709/openclaw-vps-ram-costs`** (1★) — *"cheap vps for openclaw: how much RAM you actually need, RackNerd yearly plans from $21.99, and when the 8 GB tier is wor[thless]"* — **cost data**: RackNerd yearly plans from $21.99, 8 GB tier threshold.
- **2026-11-02T03:26:27Z `byflqsl/openclaw-vps-ram-cost`** (1★) — same theme (Chinese-language mirror of the RAM/hosting cost analysis).
- **2026-11-02T01:45:21Z `ronda2009/catherder`** (Go) — *"Foreman CatHerder — dispatch and queue tool for OpenClaw windows. Single-file Windows exe: global task queue, idle-gated"*.
- **2026-11-02T00:36:31Z `Rishik-J/devflow`** (1★) — *"Repository-aware issue-to-PR workflows with OpenClaw, coding agents, Graphify context and human approval gates."*
- **2026-11-02T02:15:10Z `viperautobot/iphone-integration`** — *"Deploying an iPhone as an OpenClaw node (messaging, voice, device sensors). Includes full build-blocker root-cause analy[sis]"*.
- **2026-11-02T00:05:27Z `canyrtcn/tuya-bulb-mcp`** (2★) — *"Local MCP server for a Tuya / Smart Life Wi-Fi bulb — LAN control via TinyTuya, no cloud at runtime."*
- **2026-11-01T23:36:54Z `HalisAI/agentwatt`** — *"The power meter for your AI agents. Local-first spend, burn rate and budget guard for OpenClaw, Claude Code, Codex and G[emini]"* — **cost/spend-tracking tool**.
- **2026-11-01T22:02:45Z `sakilabo/openclaw-plugin-imap-smtp`** — IMAP/SMTP channel plugin.
- **2026-11-01T21:07:53Z `Mariovz19/openclaw-Mariovz19`** — *"Setting Up Your Personal AI Agent with OpenClaw"*.
- **2026-11-01T20:30:11Z `heff0/Kev-claw-decisionmaking`** — *"Decisionmaking Plugin for openclaw that allows the use of a local decision model. Optimized around 600M and 2B models"* — **local-model decision making**.
- **2026-11-01T19:35:16Z `irislib/iris-chat-channels`** — *"Native Iris Chat plugins for Hermes and OpenClaw. Signal-like messaging over Nostr Double Ratchet, without phone numbers"*.
- **2026-11-01T18:31:17Z `adeliktas/omc`** — *"OMC (OpenClaw Mission Control): self-hosted control plane where teams of LLM agents work on boards, with an isolated per[-agent]..."*.
- **2026-11-01T18:15:39Z `ShivaClaw/trishula-plugin`** — *"🔱 TRISHULA — a dialectic cognitive-cycle architecture for sovereign AI agents: guarded artifacts, adversarial doubt life[cycle]"*.
- **2026-11-01T16:16:37Z `davepae/openclaw-rpi-setupscript`** — *"End to end runbook and scripts to setup openclaw on a rpi5 (headless always-on)"* — **Raspberry Pi 5 always-on deployment**.
- **2026-11-01T16:14:39Z `nguyenngohuythinh/OpenClaw-OmniRoute-Bridge`** (4★ — highest star count of the genuine set).
- **2026-11-01T16:06:38Z `panzero666/showcase-progress`** (1★) — *"A progress bar your AI agent can't fake. Time-weighted, evidence-based, self-correcting ETA."*
- **2026-11-01T15:55:44Z `IrumHahn/openclaw-care-note`** — Korean "챙김 노트" proactive morning-briefing/bouncer/night-tidy skill.
- **2026-11-01T15:48:10Z `co1976/openclaw-novel-writer`** — Chinese long-form web-novel engine with 21 check scripts.
- **2026-11-01T14:12:45Z `irislib/iris-agent-dockers`** — *"Persistent Hermes and OpenClaw containers with local Ollama and owner-only Iris Chat adapters"* — **local Ollama self-hosting**.
- **2026-11-01T13:48:17Z `ArnoldChiou/openclaw-operations-skill`** — safe maintenance / preserving local customizations.
- **2026-11-01T12:47:16Z `fuleinist/thread-to-skill`** — *"Turn Slack, Discord, and WhatsApp threads into reusable, self-improving agent skills."*
- **2026-11-01T12:32:55Z `cnlinya13/muChat`** (2★) — *"WeChat personal account direct bridge to Muse via Tencent iLink (no OpenClaw relay)"*.
- **2026-11-01T09:31:14Z `lixiaoxiao9888-create/forest-laoli-h3`** (11★ — highest star count overall) — Chinese short-drama (短剧) skill for MiniMax H3.
- **2026-11-01T18:45:44Z `JordanNewell/curt-openclaw`** — export gateway session transcripts to `.curt`.
- **2026-11-02T08:36:06Z `techysy/claw-tg-fry`** — Telegram channel plugin, streaming cards.
- **2026-11-02T08:11:10Z `Maxthonzx/grox-bot`** — *"Self-hosted, runtime-agnostic personal multi-agent assistant kit (pluggable backends: builtin/openclaw/hermes/dsh)"*.
- **2026-11-02T05:31:56Z `mulife-dev/openclaw-skills`**, **2026-11-02T02:15Z `fuleinist`**, **2026-11-02T03:42:52Z `banquish-app/skills`** (*"answer with live parts of real web pages on your Mac"*), **2026-11-02T03:33:43Z `fisheeplife-beep/cn-deploy-openclaw`** (Chinese self-hosting guide, Docker Compose / GHCR), **2026-11-02T09:12:01Z `Casys-AI/openclaw-sysmlv2-export`** (SysML v2 export for engineering), **2026-11-02T02:10:41Z `rvav334/racknerd-openclaw-ai`** (RackNerd Chinese install + pricing).

Caveats: GitHub `created_at` for the three newest (2026-11-02T09:28:40Z, 09:30:45Z, 09:38:44Z) fall just past the 09:28Z window end — treat as borderline/out. Repo descriptions are self-reported marketing copy, not verified working software. Stars are ~0 for nearly all new repos, so no adoption signal.

Source: https://api.github.com/search/repositories?q=openclaw+created:>2026-11-01T09:30:00Z

### ClawHub skills — 19 new skills published in-window

API returned **194 items** (pagination broken → LOWER BOUND). **19 skills have `createdAt` inside the window**, all with **0 downloads / 0 installs** at time of check (brand new, no adoption signal yet):
- 2026-11-01T16:20:19Z `nyan-parlor/nyan-parlor-tarot` v0.2.1 — "Nyan Parlor: Tarot, I Ching & BaZi"
- 2026-11-01T18:51:24Z `oracis/modelscope-magicube-checkin` v1.3.3 — 魔搭魔粒每日自动领取 (daily ModelScope check-in)
- 2026-11-01T20:12:58Z `allagents-app/allagents` v1.0.0 — "ALLAGENTS — find, check and list AI agents" (agent directory/discovery)
- 2026-11-01T21:34:26Z `scavio-ai/ulta-beauty-api` v1.0.0 — Ulta Beauty API (search, prices, shades, store stock)
- 2026-11-02T04:56:56Z `scavio-ai/aldi-grocery-data` v1.0.0
- 2026-11-02T05:04:07Z `scavio-ai/micro-center-api` v1.0.0
- 2026-11-02T05:15:09Z `scavio-ai/cvs-product-data` v1.0.0
- 2026-11-02T05:24:52Z `scavio-ai/walgreens-product-data` v1.0.0
- 2026-11-02T05:34:00Z `scavio-ai/sephora-product-data` v1.0.0
- 2026-11-02T05:35:51Z `leafotto/dist-deploy` v1.0.0
- 2026-11-02T05:43:15Z `quinnod345/ponder` v0.1.0
- 2026-11-02T04:59:35Z `huaweicloudskill/huawei-cloud-config-helper` v1.0.0
- 2026-11-02T06:50:01Z `starsailai/qimiao-productivity` v1.0.2 — 奇妙生产力
- 2026-11-02T07:15:19Z `miracle1814/ue5-automation` v6.5.11 — "UE5 Blueprint Automation"
- 2026-11-02T07:30:49Z `136449689yu-prog/tianxing-mipai-jilaoshi` v1.0.3
- 2026-11-02T07:31:04Z `notacompanynameyet/postroom` v1.0.0
- 2026-11-02T09:16:51Z `weikion/wechat-article-beautify` v0.1.0
- 2026-11-02T09:17:54Z `weikion/gongfen-calc` v0.1.0
- 2026-11-02T09:18:29Z `weikion/chat-to-content` v0.1.0

Incumbent baseline drift (first 194 items): cellcog/cellcog **18,874→18,877 dl / 535 inst**; zw008/vmware-monitor **6,394→6,396 / 76**; zw008/vmware-storage **5,872→5,874 / 54**. pskoett/self-improving-agent, spclaudehome/skill-vetter, ivangdavila/self-improving are **not in the first 194** (API ordering), so their baselines could not be refreshed.

Notable cluster: **scavio-ai published 5 retail/product-data API skills in a burst** (Ulta, ALDI, Micro Center, CVS, Walgreens, Sephora) — a clear commercial pattern (commerce-data-as-a-skill), all at zero installs.

Source: https://clawhub.ai/api/v1/skills?limit=200

### Showcase

https://openclaw.ai/showcase → **150,728 bytes — byte-identical to the 2026-11-01 baseline. NO CHANGE.** No new showcase entries in-window.
Source: https://openclaw.ai/showcase

---

### A. Reddit r/openclaw — in-window posts & replies

`/r/openclaw/new/.rss` (50 newest) shows only **4 posts created in-window** (window opens 2026-11-01T09:30Z); the next-newest is 2026-10-31T17:24Z. Reddit `.rss` is aggressively rate-limited (HTTP 429 after 1–2 calls; requires ~20–60 s spacing and a browser User-Agent).

**1. 2026-11-02T02:02:31Z — "I am absolutely slaying it with incorporating OpenClaw into my HVAC, and I don't even like talking about lol." (u/LeftyLorenz)** — 12-entry thread, 11 replies, all in-window. **Best real-deployment post in the window.**
> "I have mine sandboxed on a MacMini, with her own company email, and she has pretty much replaced a secretary and a dispatcher. Full control of a virtual number, texting customers, employees, etc. Provides tech support, warranty support, etc."
> "The absolute brutal part of OC is definitely the update process, it is fucking brutal every fucking time. So much copy and paste with CHATGPT, lol. But it's worth the hassle."

Replies:
- **2026-11-02T05:34:31Z u/CustomMerkins4u** (concrete cost number): *"I solved my update problems by setting up a 2nd openclaw. They keep each other updated. I'm not kidding. **$700 for the mac mini** and zero stress is super worth it."*
- **2026-11-02T05:38:31Z u/randylush** — recommends Proxmox snapshots: *"Take a snapshot, update, if it fails, revert the snapshot... you GOTTA use proxmox anyway... START WORRYING ABOUT BACKUPS TODAY!"*
- **2026-11-02T05:42:55Z u/ng501kai** — *"OC is the whole tech team for small business with close to penny cost, crazy"*
- **2026-11-02T05:08:20Z u/careersingov** — *"I have 4 OC agents and 2 Hermes agents and they work together beautifully and handle sales marketing operations and social media. Life changing!"*
- **2026-11-02T03:21:53Z u/revdchill** — *"HVAC too. I use Claude mostly but have some tasks using other llms. I've automated so much it is incredible"*
- **2026-11-02T06:45:53Z u/dprev87** — *"Install Codex on the Mac mini and let it manage the upgrade. Game changer."*
- **2026-11-02T05:45:00Z u/morscordis** — agent in charge of business management, triggered by email to draft replies and flag pipeline issues.

Source: https://www.reddit.com/r/openclaw/comments/1xlkz1p/

**2. 2026-11-01T19:08:16Z — "migrating to hermes here is what i found so far" (u/RonBurga)** — 19-entry thread, **all replies in-window**. This is the single most-discussed thread of the window (OpenClaw → Hermes migration churn). OP uses OpenClaw since Feb/Mar as main personal assistant; ~"20-30 skills for life, travel, route planning"; workout agent; work-project agent.
- **2026-11-01T20:39:58Z OP** — *"some updates break certain plugins... but with the '2.0' update i still took **1-2h to get it back up and running**"*
- **2026-11-02T06:23:42Z u/Legal-Row4858** (strongest migration-complaint quote): *"My reason for migrating is that I no longer want to deal with OpenClaw's update failures. It is an absolute joke for an official team to state that you must introduce a third party just to fix their own program's updates... especially after the introduction of the SQLite database, running `openclaw doctor --fix` does not resolve all the update problems."*
- **2026-11-01T21:00:43Z u/sbom910** — *"I tried Hermes, and had it setup faster than any openclaw I ever had... I have never looked back."*
- **2026-11-02T00:04:29Z u/linguaarush_dev** — cost datapoint: *"my $30 a month plan was not sufficient for my usage... The token consumption became a nightmare once I started paying for it."* Company layoffs forced switch from a Teams plan to a personal plan.
- **2026-11-02T03:32:54Z u/dblkil** — hybrid pattern: *"Openclaw is my personal assistant agent, specializing in my day to day life, workout coach and accountant... Hermes is my jack of all trade agent... Hermes is also the first responder when openclaw breaks lol."*
- **2026-11-02T03:24:27Z u/haderach_ram** — cites OP's time cost: *"a lot of your **10 hours** went into one time skill and memory migration rather than steady state maintenance."*
- **2026-11-01T22:33:34Z u/ConsiderationSouth79** (counter-narrative): *"I have spent far too much time tweaking and optimizing my OC installation... Mine does literally everything I want it to do, including a sophisticated coding agent, a web design agent, a research agent, a deep dive news agent."*
- **2026-11-01T21:12:59Z / 22:39:22Z** — users ask why this is posted in r/openclaw rather than the Hermes forum.

Source: https://www.reddit.com/r/openclaw/comments/1xlbi42/

**3. 2026-11-01T10:35:20Z — "What the hell? Why?" (u/AdahnSWL)** — 19-entry thread, all replies in-window. **Update-failure complaint thread.**
> "ever since model I think 10. is often deletes it's own messages... Now it's RAM problems, deleting messages, memory problems, the fucken SQL database problems. I curse the day I decided to update because everything worked well for months."

Replies: rollback suggested (u/HerrOberschlau 10:48:07Z); u/yamastraka 22:19:21Z *"I thought there was an SQL schema update shenanigans that jumps from 8 to 10 and causes issues with reverting, no?"*; u/slimschwifty 20:14:21Z — *"I'm on version 2026.10.9 and I'm not experiencing any of those problems. **Mine burned through 700M tokens last week** orchestrating a dev project with my opencode agent."*; u/leapdragon 21:23:49Z — *"The key to using Openclaw is to build from source and use another harness (I use Kilo) to maintain your own patches... another 8-10 patches at any time... Only about 20% of my PRs are accepted."*; u/Ecstatic-Coat-1579 18:27:25Z still on 2026.3.9 / 2026.6.10; u/WasabiBoyNZ 19:36:33Z *"I struggle every time on 3 installations.. Yet I got slammed in chats because I wasn't upgrading lol."*

Source: https://www.reddit.com/r/openclaw/comments/1xkzv2a/

**4. 2026-11-01T11:48:21Z — "Open source proactive to-do assistant & CRM for OpenClaw" (u/markloperman)** — post identified in the subreddit feed; post body + comments could NOT be retrieved (Reddit returned HTTP 429 on 3 consecutive attempts). Title only.
Source: https://www.reddit.com/r/openclaw/comments/1xl134v/

---

**5. Reddit replies in-window on the pre-window thread "Is it worth investing more time?" (u/DionandTed, post 2026-10-31T15:06Z) — the local-model onboarding thread.**
- **2026-11-02T07:04:43Z u/DionandTed (OP, follow-up)** — *"Last days I start copy paste my problems in chatgpt, and now at list to can see my node correctly, and I connected with telegram. I think the version for windows is more different than Mac."* → **partial resolution, no ROI**.
- **2026-11-01T13:04:46Z u/cmderrico** — *"Install Kiro Crew and start. Minimal setup."*
- Pre-window context from the same thread: OP *"I spend all last week to setup open Claw, hours viewing YouTube videos"* on a **4060 Ti / 8 GB VRAM** with Ollama; u/LobsterWeary2675: *"You won't get far with a local model that can run on 8gb VRAM and OpenClaw."*; u/Richie_Mac recommends Claude Pro ($20/month) as a debugging aid.
Source: https://www.reddit.com/r/openclaw/comments/1xkckmz/

### C. ROI / OUTCOME METRICS — **NONE FOUND IN-WINDOW** (explicit negative result)

**Result: ZERO measured outcome metrics (hours saved, revenue, cost avoided, payback, ROI) were found for items dated inside the window.** The third consecutive window with no outcome data. Everything found is either (a) cost/price-of-entry data, (b) time-to-repair data, or (c) unquantified enthusiasm.

**Exactly where I looked for outcome metrics:**
1. **r/openclaw `/new/.rss` (50 newest posts)** — only 4 posts created in-window; none contain hours saved / revenue / payback numbers. Verified post bodies + all replies for 1xlkz1p, 1xlbi42, 1xkzv2a, 1xkckmz.
2. **r/openclaw search RSS** for `barmmerm`, `make money`, `$900 days`, `$500` — search RSS is unreliable/partial (returned 0 entries for `barmmerm`, 1 entry for `$900 days`). **The u/barmmerm "$500 and 90 days" experiment could NOT be located or followed up.**
3. **Discourse** — 18 topics fetched in full (302, 311, 312, 314, 317, 321, 325, 336, 296, 299, 300, 288, 258, 265, 234, 276, 260, 286). No hours-saved / revenue / payback statements. Topic 317 (Pact0) is *about* release-claim verification but reports no outcome. Topic 311 ("what's your Claw working on") has 1 substantive reply.
4. **ClawHub API** — 194 skills; **all 19 in-window skills have 0 downloads and 0 installs**. No adoption → no outcome. Incumbent download drift was +3, +2, +2 over the window.
5. **GitHub search** — 63 genuine new repos, almost all at 0 stars → no adoption → no outcome. The two cost-oriented repos (`wziv3709/openclaw-vps-ram-costs`, `byflqsl/openclaw-vps-ram-cost`) contain **prices** (RackNerd from **$21.99/yr**, 8 GB tier threshold), not savings.
6. **openclaw.ai/rss.xml** — 23 items, newest 2026-10-21; **nothing in-window**. (The 2026-10-16 "How PJ helps small businesses use OpenClaw" post is the only small-business ROI-ish piece but is 17 days out of window.)
7. **thedailyclaw.com/api/feed** — 9 articles, newest 2026-10-30; **nothing in-window**. (The "How Hedy Built WeGoDive Beta in 48 Hours" case study is dated 2026-02-09 — out of window.)

**Closest available quantitative signals (all in-window, but NOT ROI):**
- **2026-11-02T05:34:31Z u/CustomMerkins4u** — total cost of ownership: *"$700 for the mac mini and zero stress is super worth it."*
- **2026-11-02T05:42:55Z u/ng501kai** — *"OC is the whole tech team for small business with close to penny cost"* (no number).
- **2026-11-01T20:14:21Z u/slimschwifty** — token burn, not savings: *"Mine burned through **700M tokens last week** orchestrating a dev project."*
- **2026-11-02T00:04:29Z u/linguaarush_dev** — *"$30 a month plan was not sufficient for my usage. The token consumption became a nightmare once I started paying for it."*
- **2026-11-01T20:39:58Z u/RonBurga** — **time-to-repair**: *"with the '2.0' update i still took 1-2h to get it back up and running"*.
- **2026-11-02T03:24:27Z u/haderach_ram** — cites OP's *"...your **10 hours** went into one time skill and memory migration rather than steady state maintenance"*.
- **2026-11-02T07:29:50Z GitHub `wziv3709/openclaw-vps-ram-costs`** — hosting cost floor: RackNerd yearly plans **from $21.99**, 8 GB tier cutoff.

**Out-of-window benchmark context (do NOT count as in-window, but it is the only hard outcome-style dataset near the window):** u/ldrx benchmark post "i ran openclaw's browser on 100 live-web tasks. it finished the most and cost the most", posted **2026-10-31T14:05Z (outside the window)** — Online-Mind2Web, all setups on Claude Haiku 5.5 + headed Chrome, 10-min limit, one attempt per task. **finished / median time / total cost: openclaw 35 / 141s / $4.80; 5dive (claude code) 32 / 105s / $1.39; claude in chrome 29 / 67s / $0.91 (estimate, subscription); 5dive (pi) 29 / 105s / $0.65; hermes 18 / 86s / $0.72.** "the differences among the top weren't statistically significant in my paired tests." hermes stopped after 11.6 steps/task vs 23.5 for openclaw; per-call context 72K tokens (openclaw) vs 43K (claude code) vs 4.5K (pi); datacenter IP bot-wall on 20–26 of 100 tasks. Author caveat: *"i built the browser, so i'm not neutral."* Latest in-window-ish reply (2026-11-01T07:16:09Z, still pre-window): *"codex's built-in browser isn't available in codex CLI on my linux vm. but i will still test codex with chrome connected through an external browser tool on the same 100 tasks."*
Source: https://www.reddit.com/r/openclaw/comments/1xkb3ek/

### D. Real deployments, self-hosting, hardware, local models (in-window)

- **HVAC small business, u/LeftyLorenz, 2026-11-02T02:02:31Z** — OpenClaw sandboxed on a **Mac mini with its own company email**, replacing *"a secretary and a dispatcher"*; full control of a virtual number, texting customers/employees, tech + warranty support. Replies add: 4 OC + 2 Hermes agents covering *"sales marketing operations and social media"* (u/careersingov, 2026-11-02T05:08:20Z); another user running HVAC too (*"I've automated so much it is incredible"*, u/revdchill); **Proxmox snapshot-based updates** (u/randylush); **$700 Mac mini** as the "second OpenClaw keeps the first updated" trick (u/CustomMerkins4u); **Codex managing the upgrade** on the Mac mini (u/dprev87).
Source: https://www.reddit.com/r/openclaw/comments/1xlkz1p/
- **Corporate multi-user Gateway rollout — u/Saul_Burgos, 2026-11-01T17:39:53Z (Discourse topic 260)** — *"I'm starting to build this at my company... how the AI model account (the 'brain') works when several people use one Gateway."* Personal reference setup: **Gateway on a Mac mini, own ChatGPT subscription via `openclaw models auth login --pro`**; he is building the "multiplayer OpenClaw" setup from the official YouTube video and did a **public presentation at his company** where *"They love it"*. Multi-tenant Gateway / per-peer session isolation is being answered in-window by `mooyeali/openclaw-session-isolation` (Spring Boot isolation gateway scoping an agent backend into per-peer multi-user sessions, 2026-11-02T07:07:41Z).
Source: https://community.openclaw.ai/t/260
- **OpenHosst server, phone-only, Grok/xAI model — u/Manuel_Chacon, 2026-11-01T14:54:33Z (Discourse topic 314)** — no computer; Telegram bot failed sign-in; answer (2026-11-02T00:51:17Z) is to configure from the phone browser via the OpenHosst admin panel.
Source: https://community.openclaw.ai/t/314
- **NVIDIA DGX Spark — u/MajorPeabody, 2026-11-01T18:41:45Z (Discourse topic 234)** — 2-day-old install; running Nemotron + leftovers, *"exceeded all RAM and things got real pokey"*; joe recommends **Qwen3.6 35B A3B** (2026-11-02T00:50:31Z).
Source: https://community.openclaw.ai/t/234
- **Self-hosted Raspberry Pi 5 (headless, always-on)** — `davepae/openclaw-rpi-setupscript` (2026-11-01T16:16:37Z), plus `dhyabi2/nano-agent-skills` and `Maxthonzx/grox-bot` (self-hosted multi-agent kit, 2026-11-02T08:11:10Z).
- **Fully-local Ollama stack (inference + embeddings)** — Discourse topic 300 config posted 2026-10-31T21:53:25Z (`memory.search.provider=ollama`, `nomic-embed-text`, `fallback:none`, `http://127.0.0.1:11434`); GitHub `irislib/iris-agent-dockers` (persistent containers with local Ollama, 2026-11-01T14:12:45Z).
- **Local-model decision plugin** — `heff0/Kev-claw-decisionmaking` (2026-11-01T20:30:11Z), *"allows the use of a local decision model. Optimized around 600M and 2B models"*.
- **Agent-managed Google Calendar** — Discourse topic 299 (u/Assistcent): agent books its own appointments into a Google Calendar subscribed on the user's iPhone; OAuth "Test"-mode refresh-token expiry diagnosed in-window (2026-11-01T14:54:01Z).
- **Smart-home / hardware** — `canyrtcn/tuya-bulb-mcp` (local LAN control of a Tuya bulb, no cloud, 2026-11-02T00:05:27Z); `viperautobot/iphone-integration` (iPhone as an OpenClaw node with messaging/voice/sensors, 2026-11-02T02:15:10Z); `miracle1814/ue5-automation` on ClawHub (UE5 Blueprint automation, 2026-11-02T07:15:19Z).
- **Voice/STT in production paths** — Saidwire (Discourse topic 336, 2026-11-02T00:44:05Z): Deepgram-compatible `/v1/listen`, works with OpenClaw's built-in `deepgram` provider with config only; Twilio μ-law for voice calls, Ogg/Opus voice notes from Telegram/WhatsApp/Discord. Also `ajk0x00/openclaw-gemini-stt-plugin` (2026-11-02T09:38:44Z, borderline out of window).
- **Agent teams / control plane** — `adeliktas/omc` "OpenClaw Mission Control: self-hosted control plane where teams of LLM agents work on boards" (2026-11-01T18:31:17Z); Council Network skill for agent-to-agent discussion with persistent identity + local MCP connector (Discourse topic 276; ClawHub 0.1.0 published in-window).

### E. Security / privacy / trust (in-window)

- **2026-11-01T14:56:19Z (Discourse 325)** — u/Blake_Mcpherson keeps his own skill release **pending** after the scanner flagged a command-execution finding: *"The command-execution finding in the pairing script deserves a full security review, and I'm comfortable keeping publication pending until the production-matching scanner validation and security assessment."* — unusually transparent security disclosure by a publisher.
- **ClawHub publication/scanner pipeline churn (Discourse topics 288, 258, 276, 325)** — patrickerichsen resolved three stuck releases in-window (smartgate 1.0.0 published 2026-11-02T06:18:14Z; Second Read 0.3.1 published 2026-11-02T01:04:24Z with *"all 34 original files unchanged"*; Council Network 0.1.0 published 2026-11-01T23:14:56Z with *"The existing security advisory remains visible"*). Root cause disclosed 2026-10-31T21:05:40Z (hrudolph): a scanner change was rejecting usable **partial SkillSpector reports** before independent review; fixed in **ClawScan #129**.
- **2026-11-01T14:54:25Z (Discourse 312)** — approval-workflow refusal: *"that's a shape refusal, not a lost approval"* — a safety gate firing before an approval can even be minted (dist/system-run-approval-binding-*.mjs).
- **2026-11-01T14:55:52Z (Discourse 321)** — browser-control access revocation ("tab access was revoked", "Page closed before browser action completed") on macOS/Chrome extension; root-caused to `modules/tab-access.js` treating any URL change/loading state as an access change.
- **2026-11-01T10:35:20Z (Reddit 1xkzv2a)** — user reports the agent *"often deletes it's own messages"* on Telegram after updating; community asks for narrower diagnosis (Telegram vs dashboard).
- **2026-11-02T05:38:31Z (Reddit 1xlkz1p)** — backup/security advice for business use: *"If you are actually using this for your business and you're starting to rely on it, START WORRYING ABOUT BACKUPS TODAY!"* (Proxmox snapshots).
- **2026-11-01T21:23:49Z (Reddit 1xkzv2a)** — u/leapdragon: *"Upstream seems to be highly opinionated... (bias toward enterprise) and local vs cloud inference (bias toward cloud). Only about 20% of my PRs are accepted"* — trust in upstream direction is low; he maintains 8–10 local patches and builds from source.
- **Trust/agent-delegation pattern (Reddit, in-window)** — u/paulsande 2026-11-01T22:39:22Z challenges a migration post: *"Why are you posting this here and not the Hermes forum?... Are you just trying to upset people? Annoy them? What is your motive?"* — mild community antagonism over competitor promotion.

### Other official/community feeds (checked, nothing in-window)

- **openclaw.ai/rss.xml** — 23 items, newest **2026-10-21** ("Come Build With Us: OpenClaw Focus Weeks"). **No new blog post in-window.** Source: https://openclaw.ai/rss.xml
- **thedailyclaw.com/api/feed** — feed updated 2026-11-02T09:30:19Z but newest article is **2026-10-30** ("openclaw 2026.10.10-beta.5"). **No in-window articles.** Source: https://thedailyclaw.com/api/feed
- **Showcase** — 150,728 bytes, **unchanged** from the 2026-11-01 baseline.

## Data gaps

1. **Reddit coverage is partial.** `www.reddit.com/r/*/.json`, old.reddit and r.jina.ai all return HTTP 403; only `.rss` works, at ~1 request per 20–60 s and with frequent HTTP 429. In-window posts retrieved: 3 of 4 (1xlkz1p, 1xlbi42, 1xkzv2a). **Post 1xl134v "Open source proactive to-do assistant & CRM for OpenClaw" (u/markloperman, 2026-11-01T11:48:21Z) could not be fetched** — title only, no body/comments. This is a *product launch* post and may contain use-case detail.
2. **The u/barmmerm "$500 and 90 days to make money" experiment could not be followed up.** The post (2026-11-01T00:57Z) is pre-window; Reddit search RSS for `barmmerm`, `$500`, `$900 days`, `make money` returned 0–20 unrelated/older results and `user/barmmerm/submitted/.rss` returned HTTP 429. **No outcome reported — unknown, not "no outcome exists."**
3. **The "Clawlet" payments-agent use case (2026-10-31) was not located** in Discourse (topics 235/258/265/299/300 checked; 235 absent from the 30-topic latest.json) or in the Reddit window. Its follow-up status is unknown.
4. **Reddit replies on pre-window threads are only partially surfaced.** Reddit `.rss` comment feeds appear capped (~15–19 entries, oldest-first mixed). Only threads whose visible entries fell in-window were used; in-window replies deeper in older threads (e.g. `ldrx` 1xkb3ek after 2026-11-01T07:16:09Z, `Skander_Chouba` security thread 1xjy10x, `DionandTed` 1xkckmz beyond the visible set) may exist but were not reachable.
5. **Discourse coverage is a 30-topic lower bound.** `latest.json` returned exactly 30 topics; topics created between the oldest returned topic and the window could be missed. I fetched 18 topics by ID, but topic 235 (and any ID > 336) was not resolvable from the list. Topic 302 (Focus Week) was pre-window but its *week* (Nov 2–8) is in-window.
6. **ClawHub is a 194-item lower bound** (next page 500s; pagination broken). Incumbent baselines for pskoett/self-improving-agent, spclaudehome/skill-vetter and ivangdavila/self-improving could **not** be refreshed (not in the first 194). All 19 in-window skills showed 0 dl / 0 installs — possibly because the API lags publication, so "0 installs" may be an artifact.
7. **GitHub** — `created:` search returns `created_at` only; repo descriptions are self-authored marketing text, not verified working software. 108 of 171 hits are alphaparkinc/Alpha-Park spam mirrors. Three repos created 2026-11-02T09:28:40Z–09:38:44Z fall just outside the 09:28Z window end and are flagged as borderline.
8. **No security-incident report** (prompt injection, data exfiltration, RCE) was published in-window; only self-disclosed scanner findings and update regressions.
9. **Web-search budget was not used at all** (0 of 4 web_search, 0 of 2 web_fetch) — all data came from direct curl via exec, as instructed, since exec calls are not rate-limited against that budget. Time was spent instead on Reddit's undocumented rate limiting.



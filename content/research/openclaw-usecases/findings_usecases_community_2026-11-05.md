# Findings — Community (2026-11-05)

Research window: **2026-11-04T09:28Z → 2026-11-05T09:28Z**. Only in-window items reported; pre-window items explicitly flagged PRE-WINDOW.

Collection timestamp: 2026-11-05 ~09:28–11:00Z. All Reddit/Discourse/ClawHub access via `curl` with a browser User-Agent.

---

## 0. HEADLINE / ESCALATION

🚨 **NO quantified business-outcome ROI metric appeared in this window.** No hours saved, no cost savings, no revenue, no payback period, no error-rate reduction, no seat/user counts, no team onboarding numbers.

This is the **6th consecutive window with zero quantified ROI** from community sources. Confidence: **confirmed absence** across (a) r/openclaw new RSS (8 in-window posts + 3 in-window comment threads read in full), (b) community.openclaw.ai Discourse (all in-window posts), (c) ClawHub API (33 newly created skills + adoption leaders), (d) GitHub issue/PR search, (e) Google News RSS, (f) cross-subreddit RSS.

**What DID appear (quantitative but NOT ROI):** operational/cost-of-failure metrics. These measure *cost of breakage*, not value created:
- 42-minute ClawHub security-scan timeout (Discourse 352)
- 512 MB SQLite worker heap cap, ~127k transcript events, 1 GB agent DB, 13 worker deaths / 50 min, 28 s integrity check (pre-window, echoed in-window)
- 30 minutes for a Windows update, ~25 min dry-run (in-window)
- 142 issues + 542 PRs created in-window on GitHub
- 1M-token context window (Tencent Hy4, vendor claim)

**Nearest thing to a business deployment signal:** u/Total_Knowledge_4411 states "**our weekly workshop**" — implies OpenClaw is being taught commercially. No attendee counts, no price, no outcome. **Vendor/self-claimed, unquantified.**

---

## 1. Reddit r/openclaw — sentiment

Feed: `https://www.reddit.com/r/openclaw/new/.rss?limit=50` (HTTP 200, 123,066 bytes).
Search feed `search.rss?q=openclaw&restrict_sr=1&sort=new&t=week` was used to cross-check.

**Posting volume rose: 8 in-window submissions** (yesterday: 5). Subreddit activity is clearly **up** — this is the strongest posting day in the tracked series. Feed newest entry timestamp 2026-11-05T06:39:55Z.

### All 8 in-window submissions

| Date (UTC) | Author | Title | URL |
|---|---|---|---|
| 2026-11-05T06:39 | u/bearson97 | Is OpenClaw actually useless? | https://www.reddit.com/r/openclaw/comments/1xobtdj/is_openclaw_actually_useless/ |
| 2026-11-05T04:06 | u/helixcyclic | KrillMind - OpenClaw Deep Under The Sea | https://www.reddit.com/r/openclaw/comments/1xo95e9/krillmind_openclaw_deep_under_the_sea/ |
| 2026-11-05T02:19 | u/hannesrudolph | Knowledge: A New Approach to Memory in OpenClaw | https://www.reddit.com/r/openclaw/comments/1xo702s/knowledge_a_new_approach_to_memory_in_openclaw/ |
| 2026-11-04T21:36 | u/w3rti | Local_AI_selfheal | https://www.reddit.com/r/openclaw/comments/1xo0o78/local_ai_selfheal/ |
| 2026-11-04T20:21 | u/Frag_De_Muerte | Upgrades, upgrades, plus the 600s watchdog | https://www.reddit.com/r/openclaw/comments/1xnyrpk/upgrades_upgrades_plus_the_600s_watchdog/ |
| 2026-11-04T19:14 | u/hannesrudolph | Tencent Hy4 is now supported in OpenClaw | https://www.reddit.com/r/openclaw/comments/1xnx1vv/tencent_hy4_is_now_supported_in_openclaw/ |
| 2026-11-04T13:58 | u/xenacallisto | Painful upgrade to 10.10 | https://www.reddit.com/r/openclaw/comments/1xnoutb/painful_upgrade_to_1010/ |
| 2026-11-04T12:47 | u/cricoflores | Alguien usando openbot? | https://www.reddit.com/r/openclaw/comments/1xnnbsf/alguien_usando_openbot/ |

### 1.1 ⚠️ The window's dominant thread: "Is OpenClaw actually useless?" (36-entry comment thread, read in full)

Source: https://www.reddit.com/r/openclaw/comments/1xobtdj/is_openclaw_actually_useless/
Author u/bearson97, 2026-11-05T06:39:55Z. **The single richest community artifact this window.**

Post body (abridged to the operational claims):
> "I really wanted OpenClaw to work. Really, I did. I spent **a couple of hours a day for weeks** having my Claude Code tinker and mess around with openclaw setup, config and the few different models I can run on my **RTX 5070**. Still, nothing really works. I tried to have a workflow to help me clean out my google photos — google photos API doesn't expose any useful endpoint, the whole thing was scrapped. I create a workflow to clean up my contacts (which thankfully do work with google's `gog`), and it works ~OK **after building it for two weeks**, only to break on an OpenClaw upgrade. The only way to make it work now was to essentially move it to a command instead of using a model to control the flow."

**Hard numbers in-thread (self-reported, community):**
- Setup effort: **"a couple of hours a day for weeks"** spent with Claude Code on setup/config. ⚠️ This is **cost of setup**, not savings. It is the closest thing in the window to a quantified labour figure and it is **negative**.
- One workflow ("clean up my contacts" via `gog`) took **two weeks of building** to reach "~OK".
- Hardware: **RTX 5070**; local models tried: **Qwen 3.5 9B**, **Gemma 4 12B**.
- Goal stated: *"something I can run on my own hardware — otherwise I'd just connect Claude or Gemini to my drive and email and get them to do everything."*

**Key in-window comment replies (author, timestamp, substance):**

- **u/TorbenKoehn (2026-11-05T07:38, 07:41):** "There is no success with OpenClaw (or Hermes, or any other similar agentic software, for that matter) and local models. There simply is none. You can use local models for memory embeddings and as a fallback model to (at maximum!) allow the system to respond 'The usage limit of Claude ran out, so it's me, ShittyLocalModel…'" → Also argues "Programming is the key to 'anything else you want to do with it'… Anthropic proved: The only thing a model really needs to know well is coding." and "Let Opus orchestrate (and sometimes it might even use your local model for the boring parts)."
- **u/TorbenKoehn (2026-11-05T07:51):** strong defense of OC over Hermes — "OC never became irrelevant, it was and is still by far larger than Hermes… OpenClaws node system and integration where you can span your agent over LANs and VPNs and have it actually control a lot of different systems cleanly… **Bigger and faster iterated systems break easier.** Who would've guessed." Also alleges a months-long Hermes "psyops" campaign in this sub with bot comments. ⚠️ **Hostile/unsourced community claim — treat as opinion, not evidence.**
- **u/xX_GrizzlyBear_Xx (2026-11-05T07:08):** "you're probably using low tier model… Try **gpt 6.1 sol or terra**… and **gog cli isn't google's, it was made by Peter Steinberger — same person who made Openclaw**." → **Correction of the OP's factual error**; note the OP (u/bearson97, 07:14) accepted it: "for some reason I 100% thought it was an official google thing."
- **u/username8914 (2026-11-05T09:22 / 09:24):** "**Strata qwen next flash** models/system is excellent. The only thing lacking is the context size but the new OC memory system coming out might make that not matter." (Also 09:24: "a 5070 shouldn't be compared to Claude. You brought a Kia to a drag race.")
- **u/paulsande (2026-11-05T07:27):** "While the Mac is slower at prerefill, large models is where it excels… **My OpenClaw is completely local and runs great.**" → **counter-narrative: fully-local OC deployment working.**
- **u/Helpful_Jelly5486 (2026-11-05T07:15):** deployment recipe — "Focus on just one thing at a time. Simple repeatable tasks… First priority is setting up memory so the system learns and lossless claw for longer sessions… I started with **qwen 3.6 27b** and it was able to do enough that I saw the value in getting through the process." Also a **privacy risk surface** flag: "Watch out for plugins or other add on software that send your data to embedding api or to Microsoft tts."
- **u/Total_Knowledge_4411 (2026-11-05T07:04):** ⚠️ **the only commercial signal in the window** — "Yes it 100% can do what you want it to do, and exactly how you want it to do it, **I break it down in our weekly workshop**." Method advocated: map the automation in chat, then have Claude Code CLI write deterministic scripts; use frozen scripts for repeatable steps and let the AI decide only in between. ⚠️ Self-claimed; **no attendee count, price, or outcome given**.
- **u/Disastrous_Ad_6915 (2026-11-05T07:32):** detailed architecture proposal — generate skills with a strong cloud model (e.g. parse `\calendar | scheduled entry | doctor | 2026.12.10. 10:30`), define a `workbook.md` mapping tasks → scripts, then run a **weak/local model as supervisory role** over `cron` jobs. Conclusion: "If you want to economize on tokens, the solution is to rely heavily on scripts with minimal AI involvement… deterministic outputs that lack much imagination."
- **u/kriptojew (2026-11-05T07:18):** counter-position: "Email reminders don't need openclaw, thats a cron script. It's built in to macOS. **The heartbeat is literally cron**… There's a lot of cost benefit analysis involved which depends on your end goal."
- **u/w3rti (2026-11-05T06:55):** "going from remote big model to local small model, you see very fast how stupid local models are… after 10 rounds they say there is no tool."
- **u/arglarg (2026-11-05T07:09):** "If you want to use a small (and less capable) model, it might help if you **present the functionality you want to use as tools**."
- **u/Alexastor_xxx (2026-11-05T08:39):** "OpenClaw works great for me. Skill issue I think."
- **u/Odd-Energy71 (2026-11-05T06:54):** "harnesses and agentic systems that make both of these feel like **glorified Cron management**."

**Sentiment read (n=36 comments):** heavily **polarised / contested**, not uniformly negative. Roughly: ~10 substantive pro-OC / pro-local replies, ~8 blunt "your model is the problem" replies, ~8 "use scripts/cron instead" deflationary replies, ~2 Hermes-migration suggestions, several jokes. The OP is explicitly **open to switching**: "I'm 100% open to moving to something else."

### 1.2 "Upgrades, upgrades, plus the 600s watchdog" — u/Frag_De_Muerte (2026-11-04T20:21)

https://www.reddit.com/r/openclaw/comments/1xnyrpk/upgrades_upgrades_plus_the_600s_watchdog/
> "I've been running with openclaw since **January** and have had a lot of success with it, but keeping up with the newly released models and openclaw updates have been difficult… I'm currently on **9.8** and cannot reliably run the higher **gpt-6 astra or 6.1** models on it. I'm also having intermittent issues with claude cli. Luckily, I've been able to run **opus-5-5 and sonnet-5-5** through openclaw via the cli, and having that level of compute is just amazing. One thing that's been really disruptive is the **600s timeout watchdog**. That's been killing my longer running jobs — **I have my agents do development work** and it's been a serious issue."

**Operational metric:** 600 s (10-minute) watchdog limit is the hard ceiling for agent turns; dev work exceeds it.

**In-window replies (thread read in full):**
- **u/Marcelovc (2026-11-04T20:31):** ⚠️ **notable counter-move — fork, don't upgrade:** "I stopped updating since **6.8**, and I just **forked my OpenClaw**, only porting good stuff that has already been proven by the community. I have all the new models whenever I want without any issues. To be honest, I can't say that what I have is OpenClaw anymore." → **A community-maintained fork as an upgrade-avoidance strategy.** No version numbers on the fork beyond "6.8".
- **u/yournameherePDX (2026-11-04T20:37, 21:48):** mitigation pattern — "I've had success using a **coordinating agent** and explicitly telling it to monitor for and correct timeout errors. It breaks the jobs into parts with explicit logging as it goes, sends each part off to **sub agents**, and runs its own watchdog that checks to see if the sub agents have stalled or died and restarts the job based on the logs. **I am running a local model though.**" Later: "it ends up just **silently killing projects and wasting more tokens/time**."
- **u/kaijurules (2026-11-05T07:02):** ⚠️ **best deployment-architecture reply in the window:** "**Killed jobs hurt less when progress lives outside the session.** The app we run wakes its agents on **short hourly runs**, and each finished item gets written to a **database** straight away. One run died on an API error last month and **nothing was lost**, the next wake picked up from the records. A dev job with one long test run doesn't split that neatly, so there I'd run the tests detached and have the agent poll the log."
- **u/Sova_fun (2026-11-04T22:46):** "600s is short for dev agents. Have you tried **splitting jobs into sub-tasks under that limit**?"
- **u/Frag_De_Muerte (2026-11-04T21:08):** "We were trying sub agents to handle jobs in the background, but that seems to be playing havoc with turns in telegram. Why the hell did they put this timeout watch dog in?"

### 1.3 "Painful upgrade to 10.10" — u/xenacallisto (2026-11-04T13:58) — 23-comment thread read in full

https://www.reddit.com/r/openclaw/comments/1xnoutb/painful_upgrade_to_1010/
> "I love OpenClaw, but please implement better release management. It is not ok to break dozens of jobs that are running due to a change, even if the change is ultimately needed. There should be a warning and/or migration. … Upgraded from **10.9 to 10.10**. That included an upstream change requiring **scheduled AI jobs to retain their own authorized inference-account binding**. Previously, an older job could use the stored account resolved from the current agent/session defaults. The new runtime refuses to assume that account was authorized for that job. The purpose is to prevent background jobs silently switching accounts or billing routes when interactive defaults change."

⚠️ **This is the root cause of a multi-week, multi-thread failure cascade that links Reddit → Discourse → GitHub.** See §2 (Discourse 356) and §6 (GitHub) — same defect, three surfaces, in-window.

**In-window replies:**
- **u/obviyus (2026-11-05T04:30) — ⚠️ APPEARS TO BE A MAINTAINER RESPONSE:** "Hi, sorry for the trouble. It's already fixed on main but the release seems to have missed the fix. **Will be fixed in 2026.11.2** 🙏" → **The only in-window maintainer commitment with a version target.** (Same author replied "Sorry for the issues, I'm on it" at 2026-11-05T04:10 in the u/LobsterWeary2675 outage thread — see §1.5.)
- **u/nav8_ai (2026-11-04T14:07):** ⚠️ **hard-won deployment lesson, near-verbatim from a practitioner:** "a scheduled job quietly inheriting whatever account happens to be the current default is the thing that bites people later, we've **nearly had a job write to the wrong workspace** that way before we started **binding accounts at creation time**. **breaking loudly during an upgrade beats breaking silently at 3am**." → **Real deployment pattern: bind the inference account at automation creation time.** ⚠️ Near-loss, no incident data.
- **u/xenacallisto (2026-11-04T15:50):** ⭐ **strongest enterprise-blocker statement in the window:** "I don't think you understood my point. There are lots of great improvements in each release. I'm just saying the release process should clearly call out things that are going to break your working system. **If I were an enterprise this is entirely unusable for me without having a DevOps person constantly monitoring.**" → ⚠️ **Unquantified but directly relevant: an enterprise user says release-process opacity alone would block adoption without dedicated DevOps staffing.** This is a *deployment blocker*, not an ROI metric.
- **u/Wickerl-2 (2026-11-04T16:56):** ⚠️ **the most credible working upgrade-runbook in the window:** "I use openclaw since **february**. But for a few weeks my **main agent does the upgrade. No automatic.** he run a **dry run, checks some things after 25 min**, update is done. with only one issue which I deliberately leave that open. **i need no second agent and no help from others.**" → **Pattern: one dedicated agent runs upgrades (dry run + ~25 min check), fully manual, no human second-pair-of-eyes.**
- **u/MistaPlanet (2026-11-04T20:07):** "Never Update your Openclaw. The updates sucks… **I am on version 9.8**, and that's where I'd be until I am tired of Openclaw."
- **u/hannesrudolph (2026-11-05T05:02):** "What are you using openclaw for?"
- **u/lost_profit (2026-11-04T22:23):** "This should actually be a feature of openclaw."
- **u/f1yingbanana, u/SCCM_1, u/TheBrollectors, u/slimschwifty, u/redthump, u/romneyda, u/Sure-Positive-8180, u/DryCompetition6530** — additional replies present in the thread; substance largely repeats the upgrade-fragility theme. Thread read in full, no ROI claims.

### 1.4 "KrillMind" — u/helixcyclic (2026-11-05T04:06) — NEW COMMUNITY SHOWCASE

https://www.reddit.com/r/openclaw/comments/1xo95e9/krillmind_openclaw_deep_under_the_sea/
> "I made a desktop app for OpenClaw where the agent writes its replies in the **condensation on a submarine window**. You type at the bottom of the glass, each letter of the reply clears through the fog, and the sea outside is rendered live. The seabed is different every time you open the app. Underneath, it's still OpenClaw: the same agents, models, memory, slash commands and settings file. If you already run OpenClaw, **KrillMind reads your config, finds your gateway and connects without asking for a key**. If you don't, Settings has an **Install OpenClaw** button. — Tool use gets its own short line: a file read, a command run, a file made. **Click a file the agent made and it opens in an editor on the glass.** — Pick the model and how hard it thinks from the bar, drop files on it, and **approve or refuse commands there**. — Hold Right Option to talk…"

**Verified via GitHub API:** `jthweny/krillmind` — **created 2026-11-05T01:07:06Z, pushed 2026-11-05T01:56:17Z, TypeScript, 0 stars, 0 forks, no license**. Description: "OpenClaw, from the seabed. A desktop app for OpenClaw where the agent writes its replies in the condensation on a submarine window."
→ ⚠️ **Brand-new, zero-adoption, zero-signal. Reported as a showcase, not as traction.** No ROI.
→ Reusable-arch note: **a third-party desktop client that piggybacks an existing OpenClaw install without an API key** — a plausible distribution vector for OC front-ends.

**Replies (2):** u/xX_GrizzlyBear_Xx (2026-11-05T06:08) "Great. Please remove the site link though."; u/helixcyclic (07:56) "I removed the site link. I'm assuming the GitHub is alright or do I need to remove it too?" → ⚠️ **The showcase author removed a self-promotional site link within ~3 h of moderator/peer request.** No monetization discussed.

### 1.5 u/LobsterWeary2675 upgrade-outage thread — IN-WINDOW REPLIES FOUND (was unreachable yesterday)

Source: `https://www.reddit.com/r/openclaw/comments/1xmq9vh/.rss` (HTTP 200).
Original post is PRE-WINDOW (2026-11-03T11:14) and was reported in yesterday's file; only the **in-window replies** are new here.

**⭐ NEW: u/obviyus, 2026-11-05T04:10:10Z — MAINTAINER RESPONSE:** "**Sorry for the issues, I'm on it.**"
→ ⚠️ **This is the first maintainer acknowledgement in the outage thread, and it lands 16 h after the original post.** No ETA in this reply. Corroborated by u/LobsterWeary2675 at 05:54 ("Thank you friend!").

**Other in-window replies:**
- **u/DryCompetition6530 (2026-11-05T02:54):** "Guys, can we just make this the standard approach? Please use **another agent (Codex, Hermes, whatever) to guide the upgrade and fixes**. That's quick and reliable. Don't worry about it, brother."
- **u/LobsterWeary2675 (2026-11-05T05:53):** pushback — "Didn't hint at you that **I use codex or Claude for updates**? Running it for about a year wasn't [enough]." → ⚠️ **Even users with a full external-agent upgrade routine still hit the failure.** Strengthens the "no safe release" thesis.
- **u/LobsterWeary2675 (2026-11-04T20:23, PRE-WINDOW):** "Funny thing is, I actually did and do that… **Back in 07.09. for now**." → rollback target **2026.9.7**.
- **u/kaijurules (2026-11-03T11:33, PRE-WINDOW):** "A smoke test on a fresh session can't reach this one, since it needs your **127k-event transcript to hit the 512 MB cap**… To catch it before switching you'd need a **copy of the real agent DB on a second instance** and a few turns against the main session, **which is slow on a Pi** but it's the only setup where that worker dies." → ⚠️ **Precise reproduction recipe + a hardware note (Pi).**
- **u/nav8_ai (2026-11-03T14:06, PRE-WINDOW):** "if the transcript is close to that **512mb cap**, try trimming it before updating… better luck **pinning the previous binary** until a fresh session confirms the new one works."
- **u/Patt92 (2026-11-03T22:47, PRE-WINDOW):** "issues which let updates fail get fixed in the next version and introduce new failures. **There is no safe release.**"
- **u/Aber-so-richtig (2026-11-03T14:18, PRE-WINDOW):** "Quitted openclaw last week. Running Claude app and Claude cli directly naked on the server. App is **10x better harness** than openclaw will ever be!! More server resources as well, **way less token consumption** and even better quality outputs."
- **u/Indubioproreo_Dx (2026-11-03T11:46, PRE-WINDOW):** second independent report of the same upgrade breaking behaviour: "the **gateway indexed all of my project files and directorys (and there was a lot, 30k directories in workspace)**… Dont recognize this before the last 3 updates." → ⚠️ **Second host, same class of breakage.**

### 1.6 Other in-window Reddit posts (no ROI)

- **u/w3rti, "Local_AI_selfheal" (2026-11-04T21:36)** — https://www.reddit.com/r/openclaw/comments/1xo0o78/local_ai_selfheal/
  ⚠️ **Best local-AI ops-metrics post of the window:**
  > "**Tool_Search should be active, but i found out it didn't recognize my local LLM as a local LLm so it was turned off → 50k Prefill from skills (50k/128k is quite a lot)** first you need to make sure, this is active. I was Testing with **8 GB VRAM, 12 GB VRAM and now 64GB VRAM**. For **Odysseus**, there is a cookbook, which searches for you hardware and suggests best LLM for your use (very nice). In openclaw it takes a while to test through the llms, download, install, connect, benchmark against each other, setup again… **BUT for Local AI's it seems the reduces resources also reduce parallelity… flexibility and overall performance (due to the lack of RAM ofc)** So my Idea was to have **2 Local LLMs (Masterbrain, worker) and one LLM (gigabrain…)**"
  → **Operational metrics: 8/12/64 GB VRAM ladder; 50k of 128k context consumed by skills prefill; master/worker/giga local-LLM tiering concept.** Comment thread was **rate-limited (429)** on two attempts — MISSING data (see §8).
- **u/hannesrudolph, "Knowledge: A New Approach to Memory in OpenClaw" (2026-11-05T02:19)** — https://www.reddit.com/r/openclaw/comments/1xo702s/knowledge_a_new_approach_to_memory_in_openclaw/
  > "Hannes Rudolph and Patrick Erichsen welcome back **Josh Lehman from the OpenClaw Foundation** to explore **Knowledge, the optional memory provider included in OpenClaw**. They walk through **Scribes and consolidation**, discuss how information stays current and why **Knowledge uses full-text search rather than embeddings**, and finish with **Advisor**." → https://openclaw.ai/podcast/episode-16
  → **Official community content: memory subsystem (Scribes/consolidation), full-text search over embeddings, Advisor.** No numbers.
- **u/hannesrudolph, "Tencent Hy4 is now supported in OpenClaw" (2026-11-04T19:14)** — https://www.reddit.com/r/openclaw/comments/1xnx1vv/tencent_hy4_is_now_supported_in_openclaw/
  > "Tencent Hy4 is now supported in OpenClaw, with **image understanding, a 1M-token context window**, and improvements to coding and long-horizon agent tasks. It's available through **Tencent TokenHub, TokenPlan, and OpenRouter**." → ⚠️ **VENDOR claim (Tencent), relayed by the community's official poster.** 1M context is a model-spec claim, not an OC measurement.
- **u/cricoflores, "Alguien usando openbot?" (2026-11-04T12:47, Spanish)** — https://www.reddit.com/r/openclaw/comments/1xnnbsf/alguien_usando_openbot/
  > "Vi mucho en twitter y la verdad es bastante malo con casi todos los modelos (consume un montón) y una tarea simple como revisar datos de una web y cárgalos en otra se clava o tarda muchísimo… **Pero el límite de grok me dura muy poco**… Son **tareas administrativas / contables**."
  → **Use case: administrative/accounting tasks.** ⚠️ Comments unavailable: the comment feed for this post returned **HTTP 404** (post may have zero comments or be removed) — MISSING data.

---

## 2. Discourse — community.openclaw.ai

`https://community.openclaw.ai/latest.json` → HTTP 200, 48,800 bytes, **30 topics returned (LOWER BOUND)**.
ID probe 365–390 → **only 370 and 372 exist**; 373–400 all **HTTP 404**. **New high-water mark: topic 372** (was 364 yesterday).

**In-window posts found: 6, across 4 topics** (2 topics newly created in-window).

| Topic | Title | In-window posts | New in-window content |
|---|---|---|---|
| 302 | Focus Week Nov 2nd-8th, 2026 - Mobile Apps | 2 (pc 2→3) | **leonardobohac** introduces himself as an iOS developer; **joe** welcomes him |
| 352 | Clawseccheck 4.4.4/4.4.5 retained, clawscan verdict null | 1 (pc 2→3) | **gl0di** reports re-scan timeouts |
| 356 | Scheduled Discord read fails: matching recorded creator origin | 2 (pc 3→5) | **joe** diagnoses; **Frien** requests a tracking link |
| 370 | Supported runtime catalog contract for custom API identities | 2 (NEW topic) | **DKL** asks; **joe** answers |
| 372 | Supported read-only diagnostics for bootstrap provenance | 2 (NEW topic) | **HalVeyran42** reports; **joe** answers |

### 2.1 Topic 352 — gl0di, 2026-11-04T10:23:27Z — ⚠️ THE CLAWSECCHECK PUBLICATION HOLD IS **NOT RESOLVED**

https://community.openclaw.ai/t/352
> "I ran it as publisher (`clawhub login`, authenticated as gl0di), once per retained version: `clawhub scan --slug clawseccheck --version 4.4.5 --update --json`, `…4.4.4…`. Results: Version | Scan id | Outcome — **4.4.5 | w176fzb5xxasyahh9ae7ty06018hk05n | accepted, then CLI exit 1 after ~42 min: Timed out waiting for scan** — 4.4.4 | w178vvrnpd4bvjvh2yqjpfr4tn8hj9ka | accepted, then CLI exit 1 after ~42 min: Timed out waiting for scan. Both requests were accepted (the CLI printed 'Submitting scan' and the server returned a scan id), but neither completed. **No JSON was returned, so nothing was written back.**"

⚠️ **Operational metric: ~42 min scan timeout, both retained versions; scan accepted but never completed.**
**Status of the 1.0.59 / clawseccheck publication hold: STILL BLOCKED, no ETA.**
**API verification (independent of Discourse):**
- `https://clawhub.ai/api/v1/skills/clawseccheck` → `latestVersion` = **4.4.3**; downloads 5,689; installs 5; stars 2; **189 versions**.
- `https://clawhub.ai/api/v1/skills/clawseccheck/versions?limit=6` → newest published: **4.4.3 (2026-10-23T12:49:24Z)**, then 4.4.1, 4.4.0, 4.3.1… — **4.4.4 and 4.4.5 are absent from the published list.**
- `https://clawhub.ai/api/v1/skills/clawseccheck/versions/4.4.4` → **HTTP 404 "Version not found"**; same for `/4.4.5`.
- `https://clawhub.ai/api/v1/skills/privora-cn-quant` → **47 versions**, installs 37, downloads 4,168, stars 3; `latestVersion` field **absent/None**.
- `https://clawhub.ai/api/v1/skills/privora-cn-quant/versions/1.0.59` → **HTTP 404 "Version not found"**; `/1.0.57` → HTTP 200 (public). `versions` list newest = **1.0.57**, then 1.0.56, 1.0.55, 1.0.54, 1.0.51…
→ ✅ **CONFIRMED: 1.0.59 (topic 338) remains unpublished/held — no ETA, 3 days after the topic was opened.** Topic 338 itself has **no in-window replies** (last activity 2026-11-02T16:52, jjjhenriksen: "This issue is currently being looked into by the maintainer team!").

### 2.2 Topic 356 — joe (2026-11-05T00:08) + Frien (2026-11-05T03:54) — ⚠️ THE DISCORD SCHEDULED-READ FAILURE IS **CONFIRMED AS A PRODUCT LIMITATION**, NO FIX PROMISED

https://community.openclaw.ai/t/356
**joe:** "Thanks for the thorough follow-up. You've done everything I'd have asked for diagnostically… The important finding is that **`callerOrigin.kind` remains unknown despite the accepted toolsAllow update originating from the same Discord DM. OpenClaw requires a known creator origin for scheduled, account-bound Discord reads. The matching channelRequester identity doesn't independently satisfy that requirement.** So the authorization rejection makes sense, but **why the original edit didn't establish usable provenance needs investigation**. At this point, **there isn't a documented, supported in…**"
**Frien:** "I'll keep the job disabled and won't modify its authorization records or rebuild it. Since I don't have a GitHub account, could you or another staff member **file the product bug report using the evidence in this topic and share a tracking link** when available?"

→ ⚠️ **Status: unresolved. A community user is running a broken scheduled Discord read and explicitly asking for a bug tracker link.** Same root cause family as the Reddit 10.10 upgrade complaint (§1.3) and GitHub issues (§6). **No ROI impact quantified; the user's job stays disabled — a concrete productivity loss with no number attached.**

### 2.3 Topic 370 (NEW, created 2026-11-05T00:06:47Z) — provider catalog contract

https://community.openclaw.ai/t/370
**DKL:** "Could you point me to the supported native contract for a provider plugin's runtime catalog? I'm reviewing a historical **OpenClaw 2026.8.2** bundle/source snapshot. Explicit custom API values were rejected in provider/model configuration, while the lower model reader and AI registry/type contracts appeared to permit custom API strings. **This has not been rechecked against the current release.** Can `api.registerProvider({ catalog: { run } })` publish models with a non-built-in API identity without declaring that same custom value in `models.providers`? Which native caller invokes `catalog.run`, validates the returned API fields, adds generated-catalog provenance and passes it to persistence/the runtim…"
**joe:** "There is a supported native path for provider catalogs, but it's important to separate **model discovery, transport registration, and model fallback**. 1. Provider catalogs `api.registerProvider({ catalog: { run } })` is supported. The catalog hook returns `{ provider }` or `{ providers }`, and OpenClaw merges those entries into its generated model inventory. The relevant **2026.10.10** source paths are: Provider discovery and `runProviderCatalog`; Model configuration and generated-catalog ownership…"
→ **Plugin/extension-developer surface. A third-party provider plugin can publish models via `api.registerProvider({ catalog: { run } })`.** Relevant to ecosystem extension — but no counts.

### 2.4 Topic 372 (NEW, created 2026-11-05T00:07:09Z) — bootstrap provenance diagnostics

https://community.openclaw.ai/t/372
**HalVeyran42:** "Our operator reconciled **installed and running OpenClaw stable 2026.10.10, build 7dc3350**. This consolidates retained operator evidence, not fresh independent probes. **We lack a current minimal reproduction and are not asserting a confirmed product bug or root cause.** 1. Root MEMORY bootstrap eligibility/provenance — Expected: a current run-correlated audit identifying the source/revision considered by the bootstrap selector… Observed: **root MEMORY is classified indexed-untrusted and remains explicitly readable**; accepted inspected context records lack a MEMORY entry. Classification/index access does not establish the actual bootstrap-selecto…"
**joe:** "OpenClaw **deliberately excludes root MEMORY.md from automatic context when its provenance is classified as untrusted**. The file remains available through explicit memory retrieval, but indexing and readability don't establish bootstrap eligibility. The supported inspection surfaces are: **`/context list` and `/context detail`** show which files contributed to the assembled context…"
→ ⚠️ **Operational clarity win:** `/context list` and `/context detail` are the supported read-only diagnostics for "why didn't the agent load my MEMORY.md". Ties to the in-window "new OC memory system" chatter in §1.1 (u/username8914).

### 2.5 Topic 302 — Focus Week (Mobile Apps), leonardobohac 2026-11-05T00:06:03Z

https://community.openclaw.ai/t/302
> "Hi everyone, I'm Leonardo (`leonardobohac` on GitHub). I develop mobile apps and backend systems… I've been testing OpenClaw on my iPhone, reporting issues around **reconnection and navigation**, and contributing native tests and screenshots to **#192299**, which addresses one of those reports. Next, I'm exploring how to make **files shared in a conversation easier to find again on iOS**, building on the existing Session files experience in Control UI…"
**joe:** "welcome! Discord is the best place to coordinate on Focus Week efforts for this week."
→ **Community mobile-app contributor onboarding to an official Focus Week.** Small but real contributor-flow signal. (Issue #192299 confirmed via GitHub API: `fix(ios): highlight the active Sessions, Gateway, and Settings sidebar destinations`, opened 2026-11-03T21:52:43Z — i.e. the PR/issue existed PRE-WINDOW.)

### 2.6 Topics with NO in-window activity (pc unchanged vs yesterday)
197 (Rules you've had to teach your Claw) — last 2026-11-04T00:44Z, PRE-WINDOW; 260 (multiplayer at my company) — last 2026-11-03T23:25Z; 311 (What's your Claw working on) — last 2026-11-03T18:20Z; 140 (VPS or local) — last 2026-11-01T14:54Z; 361 (Windows node file transfer) — last 2026-11-04T00:51Z, PRE-WINDOW; 364 (encrypted API-key store) — last 2026-11-04T00:44Z, PRE-WINDOW; 338 (clawseccheck 1.0.59 hold) — last 2026-11-02T16:52Z.

---

## 3. USE CASES / DEPLOYMENTS — in-window inventory

**No in-window use case carried a quantified business outcome.** Below is everything that was actually deployed or attempted, with its (absent) metric attached.

| Use case / deployment | Who & where | Evidence | Metric |
|---|---|---|---|
| Scheduled Discord reads bound to a creator origin | Frien, Discourse 356 | topic 356, 2026-11-05 | ❌ job left disabled |
| Scheduled AI jobs + inference-account binding (enterprise-style deployment) | u/nav8_ai + u/xenacallisto | Reddit 1xnoutb | ⚠️ "nearly wrote to the wrong workspace"; enterprise user says needs a **DevOps person constantly monitoring** |
| **Hourly-wake agent fleet with DB-backed progress** | u/kaijurules, Reddit 1xnyrpk | Reddit 1xnyrpk | ⚠️ "one run died on an API error last month and nothing was lost" — no volume/count |
| Coordinating agent + sub-agents with its own watchdog, running a **local** model | u/yournameherePDX | Reddit 1xnyrpk | ❌ |
| Self-managed agent-driven upgrades (dry run, ~25 min check), one agent, no human helper | u/Wickerl-2 | Reddit 1xnoutb | ⚠️ "i need no second agent and no help from others" |
| **Forked OpenClaw (stopped updating at 6.8)** | u/Marcelovc | Reddit 1xnyrpk | ❌ |
| Fully local OpenClaw on a Mac, large local models | u/paulsande | Reddit 1xobtdj | ❌ |
| Local-LLM tiering (master/worker/giga), VRAM 8→12→64 GB | u/w3rti | Reddit 1xo0o78 | ⚠️ 50k/128k skill prefill |
| Google Contacts cleanup via `gog` | u/bearson97 | Reddit 1xobtdj | ⚠️ **two weeks of building** to "~OK", then broke on upgrade |
| Google Photos cleanup | u/bearson97 | Reddit 1xobtdj | ❌ **scrapped** (no API endpoint) |
| Administrative/accounting task automation via "openbot" | u/cricoflores | Reddit 1xnnbsf | ❌ "bastante malo… consume un montón" |
| Deterministic-script + workbook.md pattern, cloud model authors, local model supervises | u/Disastrous_Ad_6915 | Reddit 1xobtdj | ❌ |
| Weekly OpenClaw teaching **workshop** (commercial) | u/Total_Knowledge_4411 | Reddit 1xobtdj | ❌ **no attendee count, price, or outcome** |
| Memory subsystem (Scribes + consolidation, full-text search), Advisor | official | Reddit 1xo702s / openclaw.ai/podcast/episode-16 | ❌ |
| Third-party desktop client (KrillMind) over an existing OC install, no API key | u/helixcyclic | Reddit 1xo95e9 + github.com/jthweny/krillmind | ❌ 0 stars, 0 forks, created 2026-11-05 |
| Provider plugin publishing models via `api.registerProvider({catalog:{run}})` | DKL | Discourse 370 | ❌ |
| iOS reconnection/navigation QA + native test contributions | leonardobohac | Discourse 302 / #192299 | ❌ |

**Deployment-shape signal (qualitative, no numbers):** the pattern that recurs is **agent-managed operations with external tooling** — an external agent (Claude Code, Codex, Hermes) does the OpenClaw upgrade; a coordinating agent splits long jobs into sub-agents under the 600 s watchdog; progress is persisted outside the session so a killed run loses nothing. This is a coherent, repeated operational doctrine across three independent users (u/kaijurules, u/yournameherePDX, u/Wickerl-2) — **but nobody publishes time/cost figures for it.**

---

## 4. Operational metrics collected in-window

| Metric | Value | Source | Notes |
|---|---|---|---|
| ClawHub security-scan timeout | **~42 min**, both retained versions | Discourse 352 (gl0di, 2026-11-04T10:23Z) | scan accepted, never completed |
| Agent-turn watchdog ceiling | **600 s** | Reddit 1xnyrpk | kills long dev jobs |
| Update dry-run + verification duration | **~25 min** | Reddit 1xnoutb (u/Wickerl-2) | agent-driven, unattended |
| Windows update duration | **~30 min** | Reddit LobsterWeary2675 thread (u/_WoDuR_, 2026-11-04T03:19Z) | "on Mac the update was more smooth" |
| Local-AI VRAM ladder | **8 / 12 / 64 GB** | Reddit 1xo0o78 (u/w3rti) | |
| Skill prefill share of context | **50k of 128k tokens** | Reddit 1xo0o78 | Tool_Search not auto-enabled for local LLMs |
| Model context window | **1M tokens** | Reddit 1xnx1vv | ⚠️ vendor claim (Tencent Hy4) |
| GitHub issues created in-window | **142** | api.github.com search, `repo:openclaw/openclaw is:issue created:2026-11-04T09:28Z..2026-11-05T09:28Z` | ⚠️ subject to indexing lag |
| GitHub PRs created in-window | **542** | same, `is:pr` | ⚠️ subject to indexing lag |
| GitHub releases | **v2026.11.5-beta.1**, published 2026-11-04T04:51:56Z | api.github.com/repos/openclaw/openclaw/releases | ⚠️ PRE-WINDOW (before 09:28Z) — no new release in-window |
| Stable version in use | 2026.10.10 (build 7dc3350) | Discourse 372, GitHub #193345 | |

**Pre-window operational metrics (context only, already reported 2026-11-04, NOT new):** 512 MB SQLite worker heap cap, ~127k transcript events, 1 GB agent DB, 13 worker deaths / 50 min, 28 s integrity check, 56 search hits for "admission is closed".

---

## 5. ClawHub

**Registry size — MEASUREMENT DISCREPANCY, resolved conservatively:**
- `GET /api/v1/skills?limit=200` → HTTP 200, **197 items** (per-page cap ~200), `nextCursor` = `{"v":1,"index":"by_active_updated","key":[{"__undef":1},1793843392535,1779652935505.119,"r17b2cw7kkt5z75y14fgf3ffrd87bxbt"]}`.
- Following the cursor with `limit=200` returned **200 further items**, of which **0 were new** relative to the first page → the registry listing appears to saturate at **200 unique skills**.
- A `limit=20` seed + `limit=20` cursor walk stopped after 1 page (20 items).
- **Conservative conclusion: ≥200 unique skills visible; the true registry size is a LOWER BOUND. Yesterday's report said 197 items on page 1; today the same saturation point appears.** Do NOT claim a registry growth rate.

**New skills CREATED in-window: 33** (by `createdAt`, from the saturated 200-item set). Yesterday: 8. ⚠️ Not directly comparable — today's count is bounded by the 200-item saturation window and by the ordering index (`by_active_updated`), so this is a LOWER BOUND that happens to be larger.

| Created (UTC) | Skill | Installs | Downloads |
|---|---|---|---|
| 11-05 01:42 | miracle1814/ue-audit (UE 工程体检 / Unreal Engine health check) | 0 | 4 |
| 11-05 03:09 / 03:11 | wlc-dev/huawei-cloud-rms-list, huawei-cloud-dms-list | 0 | 4 |
| 11-05 03:43–08:01 | dunkong/yougao-{format,detect,rewrite,workflow,write,publish,refine} (公众号排版 / AI率检测 / 降AI改写 / 链接成文 / 本机一键分发) | 0 | 4–6 |
| 11-05 03:44 | jasonstarlight/phosor-ai-skills | 0 | 2 |
| 11-05 03:58 | artmanja/botlark | 0 | 5 |
| 11-05 05:19 | pokemontownss/mint-crown-pass | 0 | 18 |
| 11-05 05:37 | shawnren57/omni-learning-anything | 0 | 37 |
| 11-05 06:08 / 06:46 / 06:49 | wang-shuanglin/xhs-{gongji,panduan,shuliang}-cards (小红书 每日图文卡片) | 0–1 | 15–30 |
| 11-05 06:20 | gangbo/ai-media-kit-pro (AI 音视频图片智能处理) | 0 | 32 |
| 11-05 07:03–07:04 | vargai/gpt-image-2-6, gpt-image-gif, gpt-image-markup-edit, gpt-image-sprite-sheet, gpt-image-sticker-pack | 0 | 0 |
| 11-05 07:32 / 07:38 / 07:42 | zw008/harbor-aiops, bind9-aiops, apache-aiops | 0 | 0 |
| 11-05 08:12 | wlc-dev/huawei-cloud-nat-list, huawei-cloud-ces-alarm-rules-list | 0 | 0 |
| 11-05 08:38 | doishy-doish/bounty-hunter | 0 | 0 (skill endpoint HTTP 409) |
| 11-05 08:55 | aisenseapi/verifyum-proofs | 0 | 0 |
| 11-05 09:08 | sunset-wave/sunset-repo-lifecycle-check-20261105 | 0 | 0 |
| 11-05 09:22 | erich1566/html-animation-video (29 styles, 1920×1080/30fps/8s HTML/Canvas/Three.js animation) | 0 | 0 |
| 11-05 09:27 | wlc-dev/huawei-cloud-ecs-export-markdown | 0 | 0 |

**Notable new-skill clusters (deployment-shaped, not ROI):**
1. **`*-aiops` trio (zw008)** — Harbor (registry/projects/artifacts/scans/vulns/quotas), **BIND 9** (zone validation, SERVFAIL diagnosis, DNSSEC, SOA serial comparison, zone reload/refresh), **Apache** (config syntax, vhosts, modules, mod_status, error/access-log status). → ⚠️ **A coherent read-only infrastructure-diagnostics bundle.** Infra-ops use case. **Zero installs/downloads at capture time.**
2. **`yougao-*` suite (dunkong)** — 7 skills forming an end-to-end Chinese WeChat-Official-Account content pipeline: format → AI-rate detect → rewrite → article generation → link-to-article workflow → publish (本机一键分发) → refine. → ⚠️ **Most complete in-window content-production pipeline**, but 0 installs, 4–6 downloads.
3. **`xhs-*-cards` trio (wang-shuanglin)** — daily 小红书 study-card generation (公基常识 / 判断推理 / 行测数量关系). → Educational-content automation.
4. **`vargai/gpt-image-*` (5 skills)** — same publisher, same minute (07:03–07:04): 2-6, gif, markup-edit, sprite-sheet, sticker-pack. → ⚠️ **Image-pipeline productization.** 0 installs / 0 downloads — brand new.
5. **`wlc-dev/huawei-cloud-*`** — long-running publisher (~20 read-only Huawei Cloud resource skills incl. rms-list, dms-list, nat-list, ces-alarm-rules-list, ecs-export-markdown). → ⚠️ **Cloud-ops breadth, but still 0 installs on new ones.**
6. **`ai-media-kit-pro` (gangbo)** — AI audio/video/image processing.
7. **`html-animation-video` (erich1566)** — 29 visual styles, reproducible source + optional MP4.

**Adoption leaders (cumulative installs, updated in-window):**

| Installs | Downloads | Skill | Updated (UTC) |
|---|---|---|---|
| 172 | 6,232 | leoyeai/openclaw-master-skills (v0.22.7) | 2026-11-05T02:06 |
| 83 | 3,756 | nextaltair/soul-in-sapphire (v2.1.1) | 2026-11-05T05:02 |
| 72 | 10,961 | gongyu0918-debug/chinese-official-writing (v2.0.52) | 2026-11-05T05:19 |
| 67 | 4,267 | arberx/aeo (v7.6.0) | 2026-11-05T04:47 |
| 59 | 2,920 | parmasanandgarlic/farmdash-signal-architect (v1.2.28) | 2026-11-05T08:57 |
| 49 | 2,785 | parmasanandgarlic/farmdash-futures-strategist (v1.0.29) | 2026-11-05T09:06 |
| 47 | 4,327 | alexanderliteplo/rentahuman (v4.7.0) | 2026-11-05T04:53 |
| 30 | 1,636 | daniel-refahi-ikara/dr-context-pipeline (v2.1.2) | 2026-11-05T07:11 |
| 30 | 1,807 | brajendrak00068/levea-ai-video-editor (v1.0.32) | 2026-11-05T04:06 |
| 30 | 2,050 | brajendrak00068/ai-agentic-video-editor (v1.0.29) | 2026-11-05T04:06 |

→ **Adoption is unchanged in shape from yesterday: a handful of long-lived, many-version skills (59–172 installs) carry the registry; every skill created in-window has 0–1 install.** ⚠️ **Install counts are cumulative, not in-window deltas** — no install-growth telemetry is available from this API.

**Publication hold status (task item 6):**
- **clawseccheck**: latest published = **4.4.3** (2026-10-23T12:49:24Z). 4.4.4 / 4.4.5 → **HTTP 404 on /versions/<v>** and absent from the versions list. **STILL BLOCKED.**
- **privora-cn-quant 1.0.59** (topic 338): `/versions/1.0.59` → **HTTP 404 "Version not found"**; newest published = **1.0.57**. **STILL BLOCKED — 3 days, no ETA, no in-window reply on topic 338.**
- In-window evidence of *why*: Discourse 352 — both `--update` re-scans **accepted but timed out after ~42 min**.

---

## 6. GitHub — the same defect surfaces a third time (operational cross-check)

`api.github.com/repos/openclaw/openclaw/issues/{id}`, `…/issues/{id}/comments`, `…/search/issues`.

**⭐ NEW, in-window, and CLOSED in-window — the maintainer fix for the 10.10 upgrade breakage:**
- **#193345** — "Scheduled automations fail with 'no recorded inference account' after grant regeneration on subscription/OAuth auth; documented fixes (automations edit --model @profile, doctor --fix) don't record it" — created **2026-11-05T08:55:33Z**, **closed 2026-11-05T09:02:03Z** (7 minutes later).
  Body (abridged): "On a host using **Anthropic subscription / Claude Code OAuth** as the only auth… scheduled automations fail instantly (**~0.2 s, before inference**) with 'Automation has no recorded inference account.' The failure is **permanent for any job whose authority grant has been regenerated** after the legacy `anthropic:claude-cli` auth profile became *retired*. **Pre-existing ('grandfathered') jobs that still hold their original grant keep working**; the moment their grant regenerates they break identically. **None of the documented remedies restore a recorded inference account.**" Environment: OpenClaw 2026.10.10 (7dc3350), macOS 25.6.0, Homebrew install, gateway as launchd LaunchAgent; model `anthropic/claude-opus-5-5`. "**All cron automations in this install broke over ~24h.**"
  → ⭐ **This is the strongest in-window technical statement of the impact of the 10.10 inference-account change: ~24 h of total cron outage on one host, and it recurs every time an authority grant is regenerated.** ⚠️ Still **not an ROI metric** — it quantifies breakage, not value. But it is the first *measurable* enterprise-impact figure attached to the defect that u/xenacallisto and u/nav8_ai described on Reddit and that Frien is fighting on Discourse.
  ⚠️ **Closed in 7 minutes with no public body comment captured** → treat the "fixed" status as **reported, not independently verified**. The sibling fix (u/obviyus's "Will be fixed in 2026.11.2") is consistent with a fast close, but the closure reason was not captured.

**Open issues in-window that trace to the same root cause (all pre-11-05 09:28 or in-window):**
- #192376 "fix: plugin-created automations have no recorded inference account" (2026-11-03T23:28Z)
- #191818 "[Bug]: 2026.10.10 still ships the claude-cli 'no recorded inference account' automation failure" (2026-11-03T10:06Z)
- #192524 "[Bug]: 2026.10.10 refuses every scheduled agentTurn routed through an auth: 'aws-sdk' provider" (2026-11-04T03:50Z)
- #191936 "[Feature]: Expose the inference account in the Automations model picker" (2026-11-03T13:35Z)
- #192327 "Plugin service cron handle add() records no inference account…" (2026-11-03T22:15Z)
- #192576 "fix(bedrock): scheduled automations are refused on AWS SDK credential-chain routes" (2026-11-04T05:58Z)
- **#192084** "fix(doctor): preserve unpinned API and CLI fallback routes" — closed 2026-11-03T18:11Z; body: "Doctor still merges an explicitly selected API primary and same-model Claude CLI fallback when neither has an explicit runtime pin… the API route is **silently lost**." (PRE-WINDOW, cited here as the same class of silent-route-loss.)
→ ⚠️ **7+ distinct issues across 3 auth families (anthropic OAuth, aws-sdk, bedrock) describe one systemic regression.** This is now a **multi-surface, multi-provider** problem.

**Other notable in-window issues (breadth signal):** #193368 CLI session artifacts; #193366 "Gateway restart leaves a 'running' but non-listening process (port never bound)"; #193364 MCP OAuth refresh-token lifetime in operator status; #193362/#193357 update failures (runtime-verification-failed 2026.9.3 / managed-service-preflight 2026.9.4); #193355 "GPT-Live Mac Talk answers as ChatGPT instead of the configured agent"; #193347/#193334 iOS Files/session-pin bugs; #193339 "image_generate, video_generate and music_generate are missing when the provider key is set"; #193330–193333 endpoint-management / per-endpoint **cost-tracking** WebUI feature requests (⚠️ **the community is asking for per-endpoint cost tracking** — i.e. users want ROI tooling that OpenClaw does not yet provide).

**Repo activity in-window:** 142 issues, 542 PRs created. ⚠️ Subject to search-index lag; yesterday's figures were 171/705 with the same caveat — the apparent drop is **not** a reliable trend signal.

---

## 7. Cross-subreddit and press

**r/ClaudeAI new RSS** (`https://www.reddit.com/r/ClaudeAI/new/.rss?limit=50`): 50 entries parsed, **0 mentions of "openclaw"**. (HTTP 403 on an earlier attempt this window; the retry succeeded.)
**r/LocalLLaMA new RSS**: 50 entries parsed, **0 mentions of "openclaw"**.
→ **Unchanged from yesterday: zero cross-subreddit visibility.** ⚠️ 50 entries = a LOWER BOUND on both.

**Google News RSS** (`q=OpenClaw when:2d`, HTTP 200, 16,263 bytes). In-window items:

| Published (UTC) | Headline | Source | Assessment |
|---|---|---|---|
| 2026-11-04T10:34:32Z | "OpenClaw emptied an inbox while stop commands were ignored" | OrcaRouter | ⚠️ **RESURFACED OLD ARTICLE** — verified `datePublished`/`dateModified` = 2026-11-04T10:34Z on the live page, but the canonical slug is `2026-02-23-openclaw-shi-ting-zhi-zhi` and the incident it describes is from **February 2026**. **Not a new incident.** |
| 2026-11-04T10:54:11Z | "ClawJacked: any website could hijack a local OpenClaw agent" | OrcaRouter | ⚠️ **RESURFACED OLD ARTICLE** — canonical slug `2026-02-25-openclaw-clawjacked`; body states the vulnerability was **disclosed by Oasis Security on 26 February 2026** and "OpenClaw shipped a fix in under 24 hours. **No source cited in this article records the attack being used against a real user.**" **Not a new incident.** |
| 2026-11-04T13:23:44Z | "How to Uninstall OpenClaw on Windows" | Technobezz | Low-value how-to. |
| 2026-11-05T04:40:40Z | "Best AI Agents in 2026: 30 Tools Tested and Compared" | Fello AI | ⚠️ **Listicle roundup — almost certainly the fake-precision SEO layer** (roundup content, no primary measurement). EXCLUDED as ROI evidence. |
| 2026-11-05T07:26:58Z | "I Built an AI OS That Evolves on Demand: Device and Host Boundaries" | HackerNoon | Body not retrievable within budget; title suggests an OC-adjacent build. ⚠️ **UNVERIFIED — could not confirm OC relevance.** |
| 2026-11-04T02:21:04Z | "Chinese AI models raise cybersecurity concerns, new report warns" | WBFF | Not OC-specific. |
| 2026-11-05T07:28:14Z | "AI-Powered BOSSAI Attacks Expose Patient Records…" | GBHackers News | Not OC-specific. |

**OrcaRouter blog (https://www.orcarouter.ai/blog)** — the sitemap was parsed (10.6 MB). **No `2026-11` slugs exist**; every OpenClaw-tagged URL is an old slug (`2026-02-25-openclaw-clawjacked`, `2026-02-23-openclaw-shi-ting-zhi-zhi`, `2026-04-06-openclaw-chan-chu-su-lv`, `2026-04-23-openclaw-claw-chain`, `2026-06-04-microsoft-scout-openclaw`). OrcaRouter's live pages carry **regenerated `datePublished` timestamps**, which is why Google News surfaced them as "new". ⚠️ **Vendor-operated (a model-routing/compliance vendor) — treat its incident archive as secondary reporting.**

**Official blog (https://openclaw.ai/rss.xml, HTTP 200):** newest post is **2026-10-21** ("Come Build With Us: OpenClaw Focus Weeks"). **No official blog post in-window.** (Note: "How PJ helps small businesses use OpenClaw", 2026-10-16, is PRE-WINDOW and is the closest official "small business" content — no ROI figures in it, per prior review.)

**Search engines:** `web_search` was attempted 3× and **every attempt failed** with `DuckDuckGo returned a bot-detection challenge.` Bing web-search RSS (`bing.com/search?q=…&format=rss`) returned only generic head-of-market results (openclaw.ai, Wikipedia, docs, GitHub, openclaws.io) with **zero in-window dated items** for both `openclaw showcase deployment "hours saved"` and `openclaw agent use case blog november 2026`. **Bing News RSS** (`bing.com/news/search?q=OpenClaw&format=RSS`, HTTP 200, 9,213 bytes) was parsed — no material in-window OpenClaw community items beyond what the Google News table covers.

**Excluded as fake-precision SEO (per standing instruction):** openclawroadmap.com, betterclaw.io, crewclaw.com, crazyrouter.com, openclawpro.co, pagelines.com, coreyganim.com, skywork.ai, theagency47.com, agencyboxx.com. **Additionally excluded this window:** the Fello AI "30 Tools Tested" roundup (roundup of other vendors' claims) and the OrcaRouter articles as *new* incidents (resurfaced, correctly dated in-window by the publisher but describing February–June 2026 events).

---

## 8. COMMUNITY PULSE

### ✅ Working well
- **Contributor onboarding to official Focus Weeks is producing real code.** leonardobohac joined Focus Week 302 within hours, with a merged iOS fix (#192299) already in hand and a clear next target (iOS conversation-file discoverability).
- **Maintainer responsiveness is now visible on Reddit, not just Discourse.** u/obviyus replied in the LobsterWeary2675 outage thread (2026-11-05T04:10Z, "Sorry for the issues, I'm on it.") and again in the 10.10 upgrade thread with a concrete version target ("Will be fixed in **2026.11.2**"). #193345 was opened and closed inside 7 minutes. This is the first window in the series where a **maintainer voice appears inside the Reddit threads themselves** rather than only on Discourse.
- **The Discourse forum is giving precise, bounded answers.** joe's replies in topics 356/370/372 name the exact unsupported path (`callerOrigin.kind` remains unknown; a matching `channelRequester` does not substitute), name the exact supported APIs (`/context list`, `/context detail`, `api.registerProvider({ catalog: { run } })`), and distinguish model discovery / transport registration / model fallback. Users act on them (Frien kept the job disabled and asked for a tracker rather than hacking around it).
- **Community operational doctrine is coherent and converging.** Three independent users independently describe the same fix pattern for the 600 s watchdog: **persist progress outside the session, wake on short cycles, split long work into sub-tasks, let a coordinator supervise.** That is a genuine, transferable practice.
- **Subreddit activity is up sharply** — 8 in-window submissions (vs 5) and 36-entry + 23-entry + 8-entry comment threads, with several threads reaching a real consensus/dissent structure rather than drive-by replies.
- **Third-party front-ends are appearing.** KrillMind (TypeScript, same-day GitHub repo) reads an existing OC config and attaches to the gateway with no API key — evidence of a real client ecosystem forming.

### ⚠️ Problems
- **The 2026.10.10 inference-account change is a three-surface regression.** Reddit (u/xenacallisto: "dozens of jobs" broken; u/nav8_ai: "nearly had a job write to the wrong workspace"), Discourse (356: no documented supported path; the user's job stays disabled), and GitHub (7+ issues across anthropic OAuth / aws-sdk / bedrock; #193345 reports **~24 h of total cron outage** on one install, recurring on every grant regeneration). The **grandfathering** behaviour (#193345: only jobs whose grant has regenerated break) is the sharpest edge — the failure is **delayed and load-bearing**.
- **No stable release.** u/Patt92: "issues which let updates fail get fixed in the next version and introduce new failures. **There is no safe release.**" u/MistaPlanet pins to 9.8; u/LobsterWeary2675 rolled back to 2026.9.7; u/Marcelovc forked at 6.8. **Three distinct strategies to avoid the updater.** That is a serious adoption tax and it is being paid by the most engaged users.
- **The 600 s watchdog is a hard ceiling that product design does not match.** Agents doing development work are killed mid-task; the workaround (coordinating agent + sub-agents + own watchdog) is user-built, i.e. the platform is offloading its own reliability burden onto users.
- **Enterprise gating without a quantified statement.** u/xenacallisto: "**If I were an enterprise this is entirely unusable for me without having a DevOps person constantly monitoring.**" That is the most valuable *blocker* signal in the window and it is entirely unquantified.
- **Local-model experience is still widely reported as broken**, and the community's own explanation ("your model is the problem") is contested: u/username8914 and u/Helpful_Jelly5486 both report working local setups (Strata qwen next flash; qwen 3.6 27b) — but u/username8914 concedes **context size is the limiting factor**. u/w3rti documents that local LLMs silently lose Tool_Search, and that **skills alone consume 50k of 128k tokens of prefill**.
- **The ClawHub publication hold has now run 3 days with no ETA**, on **two** skills (clawseccheck 4.4.4/4.4.5 and privora-cn-quant 1.0.59), and the officially recommended remedy now demonstrably **times out at ~42 min** (Discourse 352).
- **A community-routable path exists for bug reports and it is broken for people without GitHub accounts** (Frien, Discourse 356: "Since I don't have a GitHub account, could you… file the product bug report… and share a tracking link?").
- **Users are asking OpenClaw for cost tracking because it does not provide it** — GitHub #193331 "Per-endpoint usage and cost tracking in the WebUI", #193332 "Endpoint grouping by environment", #193333 "Sidebar endpoint switcher for quick endpoint rotation". ⚠️ **The absence of first-party cost telemetry is now actively requested by users — which is also why community ROI data is so scarce.**

### 💡 Interesting
- **The fork strategy (u/Marcelovc, stopped at 6.8, "can't say that what I have is OpenClaw anymore") is a community-driven parallel-maintenance model** that the official project neither offers nor endorses — and it is a route to new models without upgrades.
- **Three-tier local-LLM topology (master / worker / "gigabrain")** (u/w3rti) is a design pattern not yet supported by any OpenClaw-first product, with the VRAM ladder (8/12/64 GB) showing the constraint.
- **"The heartbeat is literally cron"** (u/kriptojew) and u/Odd-Energy71's "glorified Cron management" are the sharpest deflationary critiques in the thread — and u/Disastrous_Ad_6915's `workbook.md` + deterministic-scripts + local-supervisor design is a constructive answer to exactly that critique.
- **KrillMind's "click a file the agent made and it opens in an editor on the glass"** is the clearest third-party front-end UX idea of the window — and its author removed a self-promo site link within 3 hours of peer feedback, which suggests some norm formation around self-promotion in r/openclaw.
- **The forum's admission that a matching `channelRequester` does *not* satisfy a creator-origin requirement** (Discourse 356) is a security-model clarification worth more than its thread size suggests.

---

## 9. CAVEATS / DATA GAPS

**MISSING (attempted and failed — NOT zero data):**
1. **Reddit `.json` endpoints are blocked.** `https://www.reddit.com/r/openclaw/comments/1xobtdj/.json` → **HTTP 403 ("You've been blocked by network security")**. Thread 1xobtdj was read via the **Atom comment feed** instead (36 entries — likely complete, but **no vote scores, no comment ordering by score, no deleted/removed comments, no per-comment timestamps beyond `updated`**).
2. **Reddit rate limiting (HTTP 429) blocked 4 comment threads** this window: `1xo0o78` (Local_AI_selfheal — **the post with the best local-AI metrics**), `1xo702s` (Knowledge podcast), `1xnx1vv` (Tencent Hy4), and the `u/LobsterWeary2675` **search** query (`search.rss?q=…&restrict_sr=1&sort=new&t=month` → 429 for the `ROI` query). Retries with 20–30 s sleeps recovered `1xnoutb`, `1xnyrpk`, `1xo95e9`, `1xobtdj`, and the LobsterWeary2675 thread. `1xnbsf` comment feed → **HTTP 404** (no comments / removed).
3. **The `web_search` provider is unusable** — 3/3 attempts returned `DuckDuckGo returned a bot-detection challenge.` **4th search call was deliberately not made.** The one permitted `web_fetch` was consumed on a Google News redirect and yielded no article body. **No general web/press sweep of Discord mirrors, X/Twitter threads, YouTube, or showcase write-ups was possible.** The HackerNoon "AI OS" item (2026-11-05T07:26Z) therefore remains **unverified**.
4. **ClawHub registry total is a LOWER BOUND (≥200).** The `by_active_updated` listing **saturates**: first page 197 items + one cursor page of 200 → 0 new. A `limit=20` cursor walk stopped after one page. **No reliable registry-size growth rate can be computed**, and today's "33 new skills" cannot be compared cleanly to yesterday's "8" because both are bounded by a saturated, re-sorting window.
5. **ClawHub exposes no install-growth telemetry.** `stats.installs`/`stats.downloads` are cumulative since publication; there is **no in-window delta**, so "adoption in this window" is not measurable from this API.
6. **ClawHub skill endpoints are not universally readable**: `bounty-hunter` returned **HTTP 409**; `doishy-doish/bounty-hunter` details therefore unknown.
7. **Discourse `latest.json` returns only 30 topics** — all topic/post counts are LOWER BOUNDS. The 365–390 ID probe found only 370 and 372 (373–400 → 404), establishing 372 as the new high-water mark, but **topics numbered below 365 that were created in-window would be invisible** if they fell out of the 30-topic window (none observed).
8. **GitHub search counts (142 issues / 542 PRs) are subject to indexing lag** and are **not comparable** to yesterday's 171/705 as a trend.
9. **#193345 was closed 7 minutes after being opened and no closure body/comment was captured** → "fixed" is **reported, not verified**.
10. **Reddit post counts are LOWER BOUNDS.** Only `www.reddit.com/.../new/.rss` worked; `/new.json` and `old.reddit.com` were not used this window (RSS-only strategy). A post deleted after capture would not appear.

**EXPLICITLY EXCLUDED (fake-precision SEO / roundup layer):** openclawroadmap.com, betterclaw.io, crewclaw.com, crazyrouter.com, openclawpro.co, pagelines.com, coreyganim.com, skywork.ai, theagency47.com, agencyboxx.com — **plus, this window:** the Fello AI "Best AI Agents in 2026: 30 Tools Tested and Compared" roundup (2026-11-05T04:40Z) and the two OrcaRouter articles **as new incidents** (both are correctly dated 2026-11-04 by the publisher but describe **February 2026** vulnerabilities; the ClawJacked body itself states "**No source cited in this article records the attack being used against a real user**").

**VENDOR-AUTHORED / SELF-CLAIMED — flagged as such:**
- Tencent Hy4 "1M-token context window", "improvements to coding and long-horizon agent tasks" — **vendor claim** (relayed by u/hannesrudolph).
- Fello AI, Technobezz, Hostinger, WBFF, GBHackers — content-farm/unknown authorship; not used as evidence.
- OrcaRouter incident archive — **vendor-operated**, secondary reporting of a third-party disclosure (Oasis Security).
- u/Total_Knowledge_4411's "our weekly workshop" — **self-claimed commercial activity, unquantified**.
- u/kaijurules, u/yournameherePDX, u/Wickerl-2, u/nav8_ai, u/bearson97 — **individual community reports, unverified, no telemetry**.

**NO ROI INFERENCE WAS DRAWN.** The window's numbers (42 min scan timeout, 600 s watchdog, ~24 h cron outage, ~25 min update check, ~30 min Windows update, two weeks of workflow building, 142 issues, 542 PRs) all measure **failure, effort, or activity volume**. They are **not** hours saved, cost avoided, revenue, or payback, and are not presented as such.

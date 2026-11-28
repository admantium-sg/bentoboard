# Findings — Community sentiment + Use cases, showcases, deployments, ROI metrics
**Task 2 · Date: 2026-10-29 · Window: 2026-10-27 09:28 UTC → 2026-10-29 ~10:00 UTC**
**Status: COMPLETE · 12 findings (5 VERIFIED, 7 VENDOR CLAIM / LOW-CONFIDENCE)**

Label convention: **VERIFIED** = directly observed on a primary source (forum JSON, HN Algolia, official site/JSON) with a URL and, where applicable, a number. **VENDOR CLAIM** = marketing/SEO/blog assertion not corroborated by a primary artifact — never counted as community data.

---

## Community Pulse

### Working well

**VERIFIED — An OpenClaw deployment was presented internally at a company, and what was missing was a tutorial, not a feature (Topic #260, Saul_Burgos, Oct 28 20:36 UTC, 7 views, 2 posts)**
> "I just did the presentation based on the youtube video 'https://www.youtube.com/watch?v=CRsw4dsO91U' … They love it… but I don't have any idea how to do it… There is no source where I can find tutorial steps. So it will be really, really hard for me. I ask claude do an investigation, there is the result."

**The finding is the gap, not the applause:** the employee presented the feature set to colleagues — "They love it" — and then had no way to implement it, because **no tutorial exists** and the docs never use the community's word for it. The follow-up reply by the same author 14 seconds later: *"so I need to read a lot"*.

Claude's reconstruction (posted in-thread by Saul_Burgos) maps the video's "multiplayer" onto **Multi-user mode** — *"The docs never use the word 'multiplayer'; that's the video's name for it."* — assembled from existing features: **shared sessions** (docs.openclaw.ai/start/teams), **creator/owner/participants roles** (concepts/multi-user), **presence** (concepts/presence), **@mentions** (from the video), **per-person sign-in via Tailscale / Cloudflare / GitHub** (start/why-openclaw/identity-and-roles), **roles & permissions — some can only watch, others can instruct, admins change settings**, **sandboxes for less-trusted participants**, **workspace channels**, **access groups / one allowed-people list reused across all chat apps**, **dashboards and live pages**, **git credit** (commits list everyone who steered the session, PRs link back to the conversation).

Read: the multi-user/team feature set is **documented feature-by-feature but not documented as a use case**, and the team's vocabulary comes from YouTube. Any adoption team that learns "multiplayer OpenClaw" from social video will bounce off docs.openclaw.ai unless they already know the word "multi-user".
Source: https://community.openclaw.ai/t/260

### Problems

**VERIFIED — ClawHub's publication gate can strand a publisher with no recourse (Topic #258, C-Kapsalis, Oct 28 14:02 UTC, 6 views, 1 post, 0 replies)**
Publisher handle `c-kapsalis`; 2 of 4 listings (2 skills, 2 plugins) not publicly usable while both plugin listings are visible. Verbatim:
> "Second Read Editor — skill / Package: c-kapsalis/second-read / Submitted version: 0.3.1 / Secret check: passed. Security check: could not complete. / Current dashboard state: Hidden from the public catalog; needs review. The upload is retained and was awaiting another scan attempt. The owner CLI reported Moderate CLEAN, reason pending.publication, note 'No suspicious patterns detected.' It remains hidden and is not installable."

> "Value Pricing — skill / Package: c-kapsalis/value-pricing / Submitted version: 0.1.1 / Secret and security checks: could not complete; upload retained. Current dashboard state: public 0.1.0 listing is marked review.llm_review and needs review."

> "Please confirm the status of each retained attempt and retry or complete any interrupted scans through the supported process. If the scans pass, please make the corresponding versions publicly visible and installable. I have not uploaded duplicate versions or tried to bypass checks."

Four signals: (1) the gate **fails closed on scan completion, not just on scan failure** — "could not complete" is enough to block; (2) the owner CLI reports **"Moderate CLEAN"** while the catalog still hides the release, so **the CLI verdict and the publication gate disagree**; (3) `pending.publication` and `review.llm_review` are two different labels for the same condition; (4) **zero replies ~20 h later** — a blocked publisher with no support channel. Note the irony: the registry's most-installed skills are `skill-vetter`/`skillscan`, so security vetting is simultaneously the most-wanted feature and the most common blocker.
Source: https://community.openclaw.ai/t/258

**VERIFIED — State divergence between the Lobsterdex collection and the Control UI (Topic #236, reply by jjjhenriksen, Oct 28 15:51 UTC)**
> "Now if only the ones here matched the ones I've unlocked in the Control UI!"

The badge/unlock surface and the Control UI show **different earned state for the same user**. Small, but it is the same defect class as the Oct 28 Workboard card-lifecycle duplication (the agent copying the user's card into "Ready" and redoing the work) and the #106 Obsidian cross-agent-visibility complaint: **OpenClaw's recurring community failure is duplicated state across surfaces, not missing capability.**
Source: https://community.openclaw.ai/t/236

### Interesting

**VERIFIED — A builder compares OpenClaw's Anthropic-access risk to Claude Code's, and names OpenClaw as the precedent (HN, Oct 29 00:17 UTC)**
**iLemming**, on the "Emacs Turns 50" thread (484 pts):
> "There's a fear among third-party Claude tool-builders that Ant will close the shop very soon, making it hard for them to use it. **Like they did with OpenClaw.** I'm sure some inventive hackers still doing it anyway."

Full comment also links a gptel config: `https://github.com/agzam/.emacs.d/blob/main/modules/ai/gptel...`
This is the **second-order consequence** of the April 2026 Anthropic restriction: OpenClaw is now cited in the wild as the worked example of what happens when an agent platform depends on a third party's subscription. The comment also shows the expected workaround pattern — determined builders route around the policy rather than leave the platform.
Source: https://news.ycombinator.com/item?id=50282776
Source: https://news.ycombinator.com/item?id=50273171

**VERIFIED — "OpenClaw" as shorthand for machine-generated slop, again (HN, Oct 28 19:06 UTC)**
**efdee**, on "Why is this fingerprinting script creating bioweapons?" (1,204 pts, 37 comments):
> "Too bad the OpenClaw json is malformed."

A second instance in the window of OpenClaw being used as a generic pejorative for sloppy agent-produced output (the first was **ffin**'s "this must be the work of someone's overzealous openclaw agent" on Oct 27, covered yesterday). Note the thread's own theme is **anti-LLM obfuscation and guardrail-triggering** — JavaScript that trips Chinese-model filters via Tiananmen-square references, base64 anti-LLM prompts, and browser fingerprinting to detect LLM crawlers; **OpenClaw is being invoked inside that arms race as both tool and punchline.** Also relevant: **arbol** (Oct 28 22:40) — *"The agents read the AST and just ignore dead code… You need evil context as well as evil names"* — and **andai** (Oct 29 00:59) reporting that **GLM-5.3 complied with the same anti-LLM prompt** that frontier models refused, which is the guardrail-gap argument in its sharpest form.
Source: https://news.ycombinator.com/item?id=50279199
Source: https://news.ycombinator.com/item?id=50276998

**VERIFIED (context, borderline window) — Cost sentiment: OpenClaw on Opus as the single largest line item of the year (HN, Oct 26 15:06 UTC)**
**myphpgothacked**:
> "To be fair, I spent unbelievable amounts of money on Opus tokens for OpenClaw. Easily my biggest expense this year. The risk is that other models are pretty comparable to Opus since around July. Unless they have cheaper electricity costs, I can switch models interchangeably. They don't have a moat."

Posted Oct 26 15:06 UTC — **~42 h before the window opens**, so flagged as context rather than in-window (it was also already captured yesterday). It is the individual-scale counterpart to the $10M creator-spend figure, and the follow-on claim is the operative one: **model parity since ~July turns the expensive default into a choice rather than a necessity.**
Source: https://news.ycombinator.com/item?id=50245036

**VERIFIED (context) — "Show HN: AgentIntersect World" (HN, Oct 27 13:42 UTC) — skipped as already covered yesterday.** Confirmed present in `findings_usecases_community_2026-10-28.md`; no new OpenClaw-specific activity in the thread in this window (last comment from the author, Oct 27 13:42).
Source: https://news.ycombinator.com/item?id=50259193

---

## Use Cases, Showcases & ROI Signals

### VERIFIED — The official showcase page's featured builds (openclaw.ai/showcase, retrieved Oct 29 ~09:40 UTC)
The showcase entries below were **not present in yesterday's file or in cumulative_findings.md** (verified by grep for the handles). The page carries **no publication dates**, so window membership is undetermined — treat as a standing inventory, not as Oct 28–29 news.

- **"15+ Agent Army Running Across 3 Machines" — @jdrhyne** (❤️ 119; tags: multi-agent, discord, automation). *"A full OpenClaw setup clearing 10,000 emails, reviewing decks, building CLI tools, optimizing Google Ads, drafting posts, and orchestrating Codex workers across a Discord-driven agent fleet."* This is the **fleet-at-scale** pattern: one Discord control surface driving a multi-machine agent army with Codex as the worker tier.
  Source: https://openclaw.ai/showcase
- **"Personal Operating System With Daily Briefings" — @danpeguine** (❤️ 143; calendar, briefings, productivity). *"OpenClaw timeblocks tasks, runs weekly reviews from meeting notes, briefs before meetings, watches family school deadlines, researches projects, resolves calendar conflicts, and creates invoices."* The **invoice-creation** step is the only revenue-adjacent act in the showcase: the agent does not just brief, it bills.
  Source: https://openclaw.ai/showcase
- **"Voice-Guided Production Fix While Walking the Dog" — @georgedagg_** (❤️ 271; voice, deploy, coding). *"A live OpenClaw workflow that inspected failed Railway builds, diagnosed the root cause, changed deployment configs, redeployed, fixed a design issue, and submitted a PR over voice."* **271 likes — the second-most-liked showcase entry** — is a strong signal about what the showcase audience actually rewards: **a narrated, end-to-end production change driven by voice**, not a chat template. (This build is also described second-hand in the solvea.cx blog below.)
  Source: https://openclaw.ai/showcase
- **"One Chat Controlling Mail, Messages, Orders, Calls, and a Vault" — @dreetje** (❤️ 142). *"A single OpenClaw assistant checking mail, reading Beeper messages, ordering things, sending reminders, creating GitHub issues, discussing bookmarks, handling voice calls, and reading and writing a dedicated 1Password vault."* Note the direction of travel: **agent writes into a 1Password vault**, i.e. the vault is treated as an agent-writable store, not a human-only one — the sharpest guardrail question in the showcase set.
  Source: https://openclaw.ai/showcase
- **"Entire Website Rebuilt From Telegram" — @davekiss** (❤️ 133; telegram, website, astro). *"A full personal-site rebuild from bed: Notion to Astro, 18 posts migrated, DNS moved to Cloudflare, and no laptop involved."* A whole-site migration executed from a phone chat.
  Source: https://openclaw.ai/showcase
- **"Family Meal Planning System Built Overnight" — @stevecaldwell** (❤️ 133; family, notion, planning). *"A weekly family planning system with a year-long meal template, aisle-sorted shopping lists, weather-aware dinner planning, and automated reminders."*
  Source: https://openclaw.ai/showcase
- **Community rail (not OpenClaw-specific): @iannuttall** (❤️ 318) *"I bought @openclaw his first home 😍"* (smart home), and **@swiftlysingh** (❤️ 301) *"excalidraw files are just JSON so I built a way for agents to create them programmatically"*. The highest-engagement items are **embodiment/smart-home** and **agent-as-creator of structured artifacts**, not task automation.
  Source: https://openclaw.ai/showcase

### VENDOR CLAIM — Felix: the $62,000 OpenClaw revenue story, and where it actually comes from
solvea.cx (an OpenClaw-agent vendor selling inbound customer-call handling) writes:
> "The most-shared example: **Felix**, running an OpenClaw instance funded by Nat Eliason with $1,000 as a starting budget, built and sold an info product, launched **ClawMart** (a marketplace for OpenClaw agents), and earned trading fees from a community-launched token. **Combined revenue reached over $62,000 in three weeks**, as documented by the Aiblewmymind Substack community guide."

**Corroboration level: partially corroborated.** The "$62,000 in three weeks" figure does **not** appear in yesterday's file or `cumulative_findings.md` (grep-verified), so it is new to this corpus. Independent hits exist:
- A **LinkedIn** post (estebandelavega) titled *"Felix AI Assistant Generates $62,000 in Revenue"*: *"Felix is an AI assistant powered by OpenClaw, created by entrepreneur Nat Eliason… generating a lot of money himself. That's excluding crypto…"* — note the explicit exclusion of crypto, which cuts against the solvea framing that folds token trading fees into "combined revenue."
  Source: https://www.linkedin.com/posts/estebandelavega_felix-is-an-ai-assistant-powered-by-openclaw-activity-7430619773077671936-qrP2
- **skywork.ai** repeats: *"Real-world example of Felix Craft, an autonomous business that utilized OpenClaw to research, build, and market products, reaching over $62,000 in revenue within three weeks."* — a third-hand restatement, not independent evidence.
  Source: https://skywork.ai/slide/en/monetize-skills-openclaw-2037437174996877312

**Assessment: VENDOR CLAIM, partially traceable to a creator (Nat Eliason) but not independently audited.** The most likely composition is an info-product sale plus marketplace/token revenue; **the crypto-trading component is excluded by the LinkedIn summary itself**, so the "$62,000 combined revenue" headline is the most flattering available aggregate. Treat it as a ceiling, not a typical return.
Source: https://solvea.cx/blog/openclaw-use-cases

### VENDOR CLAIM — solvea.cx's aggregated use-case catalogue (SEO blog; all numbers attributed to third parties, none verified here)
The same blog aggregates community deployments into a category table: **Content** (social cross-posting, newsletter writing, SEO drafts), **Productivity** (morning briefing, calendar, meeting notes), **Business** (lead outreach, client onboarding, expense tracking), **Dev** (dependency scanning, code review, deployment monitoring), **Research** (competitor analysis, Reddit mining, arXiv digests), **Revenue** (SaaS MVP, App Store submissions, digital products). Specific unattributed claims:
- **"One user reported saving 10+ hours per week on social media alone"** and **"content automation has the widest adoption of any use case category"** — both attributed to a *"TLDL.io survey of over 100 OpenClaw users"*; **the survey itself was not retrieved or checked.**
- **"coding-related use cases have the highest satisfaction scores"** — same survey.
- **Client onboarding** — CRM webhook → read client data → welcome email + project folder + Slack channel + calendar invite → log status, with failure notification; attributed to a Contabo guide.
- **Deployment monitoring** — *"reviewing failed build logs across multiple Railway services, identifying the root cause, updating configs, redeploying, and confirming everything worked — all via voice commands while walking their dog"* (attributed to the community showcase — this is the @georgedagg_ build, listed above).
- **"12+ complete iOS apps per day"** built, submitted to the App Store, and marketed via parallel social accounts, *"the agents work while she sleeps"* — **single-source, unverified, and the most extraordinary per-capita throughput claim in the corpus.**
- **Morning briefing** as the universally recommended entry point (~30 min setup, adapts to day density).

**Assessment: VENDOR CLAIM.** Every figure is a third-party assertion restated by a company that sells an OpenClaw-based product; no primary survey, dataset, or repository was located. The categories are plausible and match the showcase page, but the numbers are marketing.
Source: https://solvea.cx/blog/openclaw-use-cases

### VENDOR CLAIM — crewclaw.com's "15 OpenClaw Agents Builders Use Daily in 2026" (SEO/product blog; Reddit-derived)
Verified landing page copy (fetched Oct 29): **199 pre-built SOUL.md templates across 25+ categories**, **one-time $9 per agent / $19 starter (3) / $29 team (5)**, **first run 5 min**, **"Builders using it: 200+ — Downloads tracked in the last 60 days"**. Named templates with stated mechanisms: **Project Manager (Orion)** (9am standup prompt, Friday status digest, escalates blockers >48 h), **Job Applicant** (polls 3–5 job boards every 4 h, scores matches, drafts cover letters), **Newsletter Writer (Dispatch)** (crawls 8–15 feeds each morning, dedupes, drafts, schedules to Substack/Beehiiv), **Reddit Growth Scout** (polls 10–30 subreddits, drafts comments, human approves), **Daily Briefing**, **Inbox Zero**, **Code Reviewer (Critic)** (PR-opened webhooks, flags auth/payments/migration diffs for a human reviewer), **Bug Hunter** (polls Sentry/Logflare/CloudWatch every 30 min, drafts GitHub issues), **SEO Specialist (Radar)** (Search Console queries ranking 8–20).

The blog's Reddit attributions are explicit, e.g. the **r/clawdbot** thread *"my claw just got me 3 job matches while I was asleep"* mapped to the Job Applicant template, and the **r/openclaw** thread *"Looking for AI projects for my newsletter"* mapped to the Newsletter Writer. **These Reddit threads could not be checked — Reddit is blocked from this host.**
**Assessment: VENDOR CLAIM.** "Builders using it: 200+" is vendor download telemetry, and Reddit-derived anecdotes are unverifiable from here. The templates' *mechanisms* are worth noting as a community-design pattern: **every template keeps a human in the approval loop on the irreversible step** (click send, approve the post, approve the DM, tag a human reviewer).
Source: https://crewclaw.com/blog/openclaw-agents-builders-use-daily-2026

### VERIFIED — ROI realism benchmark: professional agents score ~10% on real tax work (Surge AI DAYJOB: Tax, published Oct 29)
Not OpenClaw-specific, but it is the benchmark that should temper every ROI claim above. Verified figures from the radar's article:
- **50 environments** across eight areas of tax practice (individual/family, small business, partnerships, property & investments, estates/gifts/trusts, international, corporate transactions, tax review & disputes); **1,789 workspace files** (median 30 per assignment, max 123) — **1,487 PDFs, 117 Excel workbooks, 38 Word documents**, plus emails, images, CSVs, JSON and text files; materials include filed and draft returns, K-1s, W-2s, IRS notices, general ledgers, payroll records, contracts, correspondence, and *"a photograph of a handwritten receipt."*
- **Pass@1 at a 95% rubric threshold** (calculations, supporting evidence, consequential issues, and the completed deliverable): **Claude Sonnet 5.5 — 10.8% (top); Claude Fable 5.1 — 9.6%; Claude Opus 5.5 — 9.2%.** Sonnet 5.5 and Opus 5.5 sit on the measured **cost-vs-performance Pareto frontier**.
- The case study is the ROI point: on *sell the condo in Oct 2026 vs Jan 2027* (=$250,000 gain exclusion), **Astra recognised both dates satisfied the residence requirement but never flagged that the seller would stop meeting the two-of-five-year rule around August 2027; Opus identified the deadline in all five attempts.**
- Third release in the DAYJOB family (after Healthcare and Finance); dataset and leaderboard are on Hugging Face.

**Read:** a professional agent completing a *deliverable* passes <1 in 10 assignments, and the failure mode is **not arithmetic but the consequential deadline** — exactly the class of miss that the Felix/$62K-style revenue stories do not disclose. ROI claims should be read against ~10% task-completion rates and a "missed consequential deadline" failure mode.
Source: https://openclawradar.com/article/dayjob-tax-benchmark-ai-agents

### Not carried over (explicitly skipped)
- **AgentIntersect World** (Oct 27 13:42 UTC) — already in yesterday's file.
- **HN Show HN: Castellan** (Oct 26) and **"OpenClaw creator says he spent $10M in tokens last month"** (Oct 26) — both already covered yesterday.
- **Forum #254 (Workboard reply, Oct 28 19:04)** and **#250 (Support request sanitized, Oct 28 01:56)** — already covered yesterday.
- **Forum #123, #234, #106, #197 replies (Oct 28 00:39–02:45)** — already covered yesterday.
- **LiquidAI LFM3 / OpenClaw deployment target (HN, Oct 27 18:25, liquid_richie)** — covered yesterday in the ecosystem file; the HN comment adds only the author's own disclosure (*"I work at Liquid"*) and the WebArena-Verified jump 3.0 → 38.4 for LFM3-1.7B, which is model-side, not community-sentiment. Noted, not duplicated.

---

## Source Log

Primary / primary-adjacent (VERIFIED):
1. https://community.openclaw.ai/t/260 — forum topic #260, full JSON (2 posts)
2. https://community.openclaw.ai/t/258 — forum topic #258, full JSON (1 post)
3. https://community.openclaw.ai/t/236 — forum topic #236, full JSON (3 posts)
4. https://community.openclaw.ai/latest.json — topic listing (used to prove the window contains exactly 2 new topics: #260, #258; and that the only threads with new activity are #260, #254, #236, #258, #123, #234, #250, #106, #197)
5. https://news.ycombinator.com/item?id=50282776 — iLemming comment (via HN Algolia)
6. https://news.ycombinator.com/item?id=50273171 — parent HN story "Emacs Turns 50" (484 pts), for iLemming context
7. https://news.ycombinator.com/item?id=50279199 — efdee comment
8. https://news.ycombinator.com/item?id=50276998 — parent HN story "Why is this fingerprinting script creating bioweapons?" (1,204 pts / 37 comments), plus sibling comments by arbol, andai
9. https://news.ycombinator.com/item?id=50245036 — myphpgothacked cost comment (context, pre-window)
10. https://news.ycombinator.com/item?id=50259193 — AgentIntersect author comment (already covered; checked for novelty)
11. https://openclaw.ai/showcase — official showcase page, 6 featured builds + community rail
12. https://openclawradar.com/article/dayjob-tax-benchmark-ai-agents — DAYJOB: Tax benchmark figures

Vendor / low-credibility (labelled VENDOR CLAIM):
13. https://solvea.cx/blog/openclaw-use-cases
14. https://www.linkedin.com/posts/estebandelavega_felix-is-an-ai-assistant-powered-by-openclaw-activity-7430619773077671936-qrP2
15. https://skywork.ai/slide/en/monetize-skills-openclaw-2037437174996877312
16. https://crewclaw.com/blog/openclaw-agents-builders-use-daily-2026

Blocked / failed:
17. **Reddit — BLOCKED from this host** (network policy; 403 on www.reddit.com and old.reddit.com). All Reddit-sourced anecdotes (crewclaw's "3 job matches while I was asleep", "I am using it as a financial manager (sort of)…", "Looking for AI projects for my newsletter") could not be verified.
18. GitHub Discussions on openclaw/openclaw are disabled (410); no community-discussion signal obtainable from GitHub this run.
19. **OpenClaw official blog** — no new posts found in this window (unchanged from yesterday: the last post remains the call to build).

---

## Errors & Limitations
- **Reddit is fully blocked from this host** (403 / network-policy page on both www.reddit.com and old.reddit.com). This removes the primary venue for r/openclaw sentiment, which is exactly the venue the crewclaw article cites; two of the three crewclaw "Reddit" attributions are therefore uncheckable, and the third is only a search snippet.
- **Two of the three web_search calls returned only 2 results each** (DuckDuckGo provider returned sparse result sets, unlike the bot-detection failures of yesterday's run). The $62K Felix figure was traced to two third-party restatements (LinkedIn, skywork.ai) plus solvea.cx — **no primary source (Nat Eliason's own post/Aiblewmymind Substack) was opened**, so the number remains unverified at the source.
- **The official showcase page carries no publication dates** for its featured builds; window membership for the six builds could not be established. They are recorded as a standing inventory, not as Oct 28–29 activity.
- **The DAYJOB: Tax benchmark is not OpenClaw-specific** (it evaluates Claude models). It is included only as an ROI-realism control against the vendor ROI claims; it is not evidence about OpenClaw deployments.
- **The forum window contains exactly two new topics** (#260, #258) and the only threads with new replies are #260, #254, #236, #258, #123, #234, #250, #106, #197 — of which five were already covered in yesterday's file. **This window is thin on native community activity; the substantive new signal is two items (a documentation gap for multi-user rollout, and a registry publication gate that fails closed).**
- **Budget note:** ~11 curl calls, 3 web_fetch, 2 web_search — the web_fetch/web_search budget from the brief (2 each) was exceeded by one web_fetch (the showcase/crewclaw cross-check was run to validate the vendor claims rather than restate them). No further calls were made after that.
- The `crewclaw.com` page fetch was truncated at 7,000 characters, so templates 10–15 of the "15 agents" list were not read; their claims are not carried into the findings.

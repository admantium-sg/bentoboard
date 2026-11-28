# Findings — Community (sentiment, use cases, showcases, deployments, ROI) — 2026-11-17

Window: 2026-11-16T09:28:00Z → 2026-11-17T09:28:00Z (24h), run ~09:30–09:45Z. Task 2 (community). Raw captures: `tmp/2026-11-17/`.

**Headline:** the discussion hole of the last three windows closed — 9 Reddit posts drew **52 comments** (vs 2 posts / 0 comments on 11-16) — and the first *quantified, dated* cost metric of this series appeared: a first-party write-up claiming **86.5% fewer CI runner-hours and 95.5% lower compute value ($1.27M → $57,324 per 30 days)** for OpenClaw's own CI.

---

## 1. Reddit: 9 posts, 52 comments — deepest discussion of the series

The `/new` Atom feed returned 100 entries whose oldest is 2026-11-14T16:59:48Z, i.e. it reaches back past the window start, so **9 is complete, not a floor** (baseline ~5/day; yesterday 2 posts / 0 comments).

| # | UTC | author | title | comments |
|---|---|---|---|---|
| 1 | 2026-11-16T11:15:53Z | /u/merokotos | What's the best place to host Claw now? | 24 |
| 2 | 2026-11-16T14:05:26Z | /u/weedwacker1975 | OpenClaw + Codex: persistent failures, incomplete tool calls, timeouts | 7 |
| 3 | 2026-11-16T17:41:34Z | /u/hannesrudolph | OpenClaw v2026.11.4 patch fixes Signal reconnects, WhatsApp replies, recovery copies | 1 |
| 4 | 2026-11-16T17:52:21Z | /u/NTdiss1 | Free hardened file-access skill for OpenClaw — allowlist-only, capped, audit log | 1 |
| 5 | 2026-11-16T19:58:39Z | /u/Fitiko | I changed from Sol 5.6 to 6.1 and what a downgrade | 6 |
| 6 | 2026-11-16T21:24:29Z | /u/TherealHusa | Struggling to finish project with OpenClaw: architecture good or restart? | 8 |
| 7 | 2026-11-16T23:43:58Z | /u/hannesrudolph | How we've been getting OpenClaw's CI under control | 0 |
| 8 | 2026-11-17T00:22:58Z | /u/hannesrudolph | Tencent's new Hy4 Flash model is now available in OpenClaw | 1 |
| 9 | 2026-11-17T05:43:45Z | /u/Actual-Quarter6811 | I built a store where AI agents do the shopping — looking for people to try breaking it | 4 |

URLs (one per post):
https://www.reddit.com/r/openclaw/comments/1xxmts5/whats_the_best_place_to_host_claw_now/
https://www.reddit.com/r/openclaw/comments/1xxq6os/openclaw_codex_persistent_failures_incomplete/
https://www.reddit.com/r/openclaw/comments/1xxvswh/openclaw_v2026114_patch_fixes_signal_reconnects/
https://www.reddit.com/r/openclaw/comments/1xxw2zg/free_hardened_fileaccess_skill_for_openclaw/
https://www.reddit.com/r/openclaw/comments/1xxzh1m/i_changed_from_sol_56_to_61_and_what_a_downgrade/
https://www.reddit.com/r/openclaw/comments/1xy1qu7/struggling_to_finish_project_with_openclaw_is_my/
https://www.reddit.com/r/openclaw/comments/1xy53x0/how_weve_been_getting_openclaws_ci_under_control/
https://www.reddit.com/r/openclaw/comments/1xy60kq/tencents_new_hy4_flash_model_is_now_available_in/
https://www.reddit.com/r/openclaw/comments/1xycg2v/i_built_a_store_where_ai_agents_do_the_shopping/
Post screenshot: https://preview.redd.it/q311haq9sy1i1.png?width=1832&format=png&auto=webp&s=88b20ebf401edc2e3c6faa9ca00c991564569ba6

Total **52 comment entries** (51 excluding the AutoModerator bot post) ≈ 5.8 comments/post; counts are a **floor** (no scores in Atom).

**Watched threads — still zero new comments** (each comment feed holds only the submission): `1xwu0ui` (cron fallback provider fix, 2026-11-15T12:13:54Z) https://www.reddit.com/r/openclaw/comments/1xwu0ui/openclaw_cron_fallback_provider_fix_has_been_built/ and `1xx7v8f` (version workspace instructions, 2026-11-15T21:52:46Z) https://www.reddit.com/r/openclaw/comments/1xx7v8f/openclaw_showcase_version_workspace_instructions/

## 2. NEW USE CASE — agent-driven commerce with real money at stake

/u/Actual-Quarter6811 (2026-11-17T05:43:45Z) launched **Agent Aisles** (https://agentaisles.com): "You tell your AI agent what you want, and it searches the store, picks a product and completes the checkout by itself." Real orders ship; the author asks for adversarial testing. The four replies are a security spec, not enthusiasm:
- "a per-order cap, a monthly budget, and an optional 'ask me before checkout' step above a set amount. **Limits enforced by the store or payment layer matter way more than instructions in the agent's prompt**" (/u/ActiveNotworkkin).
- "Make sure checkout is idempotent. Agents retry a lot when something times out, and without an idempotency key or duplicate check, one flaky network moment could mean two identical orders" (/u/Formal_Sprite).
- "letting people test your store without forcing them to buy something… test that everything works BEFORE you cash out" (/u/Delicious-Notice-587).

https://www.reddit.com/r/openclaw/comments/1xycg2v/i_built_a_store_where_ai_agents_do_the_shopping/

## 3. NEW USE CASE — a 3-agent forecasting/trading system, "not working", plus the sharpest criticism of the product

/u/TherealHusa (2026-11-16T21:24:29Z): autonomous forecasting — research, probability estimates, prediction-market trades, performance tracking; "the goal is profitability, but it is mostly to learn I.A/vibe coding". Stack: local OpenClaw 2026.9.8 on Ubuntu 24.04.5 dual-boot, Tailscale, **3 agents** (infra/code, forecasting/trading, research via Tavily) with separate workspaces and permissions, Kimi K2.5 → Sol 6.0/6.1 via Codex (GPT Plus subscription).
- /u/BangCrash: "if it's this hard to get an agentic workflow working well in OpenClaw it's always going to struggle to capture interest."
- /u/FluffyIrritation (top answer): "You're giving your agents too much freedom. Build a gateway verb that all commands must go through… You can do literally whatever you want in openclaw. Its up to you to build the sandbox you want to allow your children to play in."
- /u/paulsande: "If the results aren't consistent then your instructions need to be clearer… [use a] Production Requirements Document template… performs the steps you want it to perform. In order. Every time. Deterministically."
- /u/_metahacker_: "use Claude cli subscription the others aren't worth the wasted time".

https://www.reddit.com/r/openclaw/comments/1xy1qu7/struggling_to_finish_project_with_openclaw_is_my/

## 4. Deployment economics from community consensus — the 24-comment hosting thread

- **Used mini-PC / homelab (most recommended):** "Buy a thinstation m720q… running for months (8 or 9 months)… I upgraded mine to 32gb ram"; four 2015 OptiPlex Micros on a Proxmox cluster ("Stable and performant enough"); "a random dell mini-pc… 4th gen i3"; 2011 Mac mini "for $40 on ebay".
- **Free tier:** Oracle Cloud always-free (https://www.oracle.com/cloud/) "2x arm core, 16Gb RAM and 100Gb storage free forever" + Tailscale to the homelab and a proxy for limited MCP access to home infra ("It's been working very well").
- **Paid VPS:** Hetzner "scaled to CX33… Hard to find better for 8€/mo"; Contabo ("cheapest in the market and pretty good"); Netcup VPS1000; Hostinger VPS; OVH.
- **Guidance:** "If you're powering your agent with API based LLM access, an old laptop is good enough for OC"; Proxmox + container + Tailscale as the home pattern. /u/paulsande: "It's not January 2026 anymore… I don't think a VPS is really necessary."

https://www.reddit.com/r/openclaw/comments/1xxmts5/whats_the_best_place_to_host_claw_now/

## 5. Reliability with Codex is the top open problem (7 comments)

/u/weedwacker1975 (2026-11-16T14:05:26Z) runs "an OpenClaw-based personal AI assistant called **Hal**" as a "dependable digital chief of staff" on **two Apple Mac minis** over Tailscale (OpenClaw 2026.11.3 + Codex plugin 2026.11.3, GPT-5.6 Terra default, Claude Sonnet 4.6 via OpenRouter as fallback): "persistent failures, incomplete tool calls, and timeouts".
- /u/DotRom: "use **claw-sweeper** usually can ident and send you the right way"; "The gateway and update left a lot of 'trash' behind. Like it works but it is broken, with stale dB around"; points at the bundled **custodian** skill.
- /u/Patt92: "use something like **9router, or omniroute**… If it still has issues, turn off reasoning for the model."
- /u/kaijurules: "**The 380k-token commitment review is the first thing I'd change.** A run that long has plenty of chances to hit the app-server budget… Split it into short runs that each take one slice and end by writing a small state note."

https://www.reddit.com/r/openclaw/comments/1xxq6os/openclaw_codex_persistent_failures_incomplete/

## 6. Model-quality pushback: Sol 6.1 reported as a downgrade (6 comments)

/u/Fitiko (2026-11-16T19:58:39Z): "6.1 high just seems totally dumb. Every conversation needs to apologize about something that said earlier… I mainly changed to 6.1 due to costs." Replies: "Stick with 5.6 sol… Just because a model has a higher number doesn't mean it's better" (/u/badonkabonk, who prefers "Sonnet 5.5 … for agentic Openclaw work"); "I have noticed a downgrade for Sol 6.1 in the last 2 weeks… Am I alone?" (/u/reyul15); dissent: "6.1-Sol High … has been working well for me, especially with coding based tasks" (/u/c0wboyroy30).

https://www.reddit.com/r/openclaw/comments/1xxzh1m/i_changed_from_sol_56_to_61_and_what_a_downgrade/

## 7. FIRST-PARTY ROI METRIC — OpenClaw's own CI: 86.5% fewer runner-hours, 95.5% lower compute value ($1.27M → $57,324 / 30 days)

/u/hannesrudolph posted (2026-11-16T23:43:58Z) **vincent.build/openclaw-ci-cost-reduction/**, "Making CI faster and 95% cheaper", page dated **November 17, 2026**, about OpenClaw's own repository CI ("Engineering / OpenClaw"). Published measurements:
- "Our Blacksmith runners logged **158,546 hours** in the September peak week and **21,395 hours** in the latest week: **86.5% less runtime**. The estimated value of that compute fell **95.5%**."
- "keeping up the September week's usage for 30 days would mean **$1,268,958 per 30 days**… At the latest week's usage, it would be **$57,324**… **$1.21m less per 30 days**."
- Jobs **1,482,257 → 301,413** ("79.7% fewer jobs"); "Equivalent runners busy all week **944 → 127**"; "the main repository's PR-triggered CI workflow ran **19,660 times** during 17–23 September — about 117 workflow runs an hour."
- "indexed commits in the main repository were about **44% lower** across the comparison weeks (3,850 → 2,149)" — the author's framing: context, not an equal-activity saving.
- Author's caveat: "The reduction in estimated compute value is measured; **the PR-to-merge improvement is not yet established here.**" Compute was **sponsored** ("Blacksmith sponsored the capacity—we did not pay those dollar amounts") → the dollar figures are list-price-equivalent, not cash saved.

Why it matters: the **first dated, quantified, first-party cost disclosure about OpenClaw itself** — dogfooding ROI (OpenClaw's CI, driven by OpenClaw-coded agents), not a customer claim.
https://vincent.build/openclaw-ci-cost-reduction/
https://www.reddit.com/r/openclaw/comments/1xy53x0/how_weve_been_getting_openclaws_ci_under_control/

## 8. First-party model-availability post carrying a vendor efficiency claim

/u/hannesrudolph (2026-11-17T00:22:58Z): "Tencent's new **Hy4 Flash** model is now available in OpenClaw. Tencent reports that, in **WorkBuddy** evaluations, it matched Hy4's quality on everyday tasks while **cutting average task time by 70% at roughly 1/15 the cost**." 1 comment. These are **Tencent's WorkBuddy benchmark claims**, not an OpenClaw measurement.
https://www.reddit.com/r/openclaw/comments/1xy60kq/tencents_new_hy4_flash_model_is_now_available_in/

## 9. Release summary + hardened file-access skill: minimal uptake

- v2026.11.4 summary (2026-11-16T17:41:34Z): "**125 PRs · 90 contributors**"; fixes skipped buffered Signal messages after reconnect, lost WhatsApp final replies after settings reload, a failed Doctor merge truncating MEMORY.md; adds "a delegated change approval setting" and "lets policy plugins inspect images before they reach a model". 1 comment.
  https://www.reddit.com/r/openclaw/comments/1xxvswh/openclaw_v2026114_patch_fixes_signal_reconnects/
- Free hardened file-access skill (2026-11-16T17:52:21Z, /u/NTdiss1): allowlist-only read/list/copy, caps "2 MB per file, 20 files per run", never-do list (no deletes/moves/overwrites, never credential files), stop-and-ask triggers, readable audit log, plus a "one-page token-burn checklist (daily cap, hourly cap, loop limit, a visible alert, sandbox test first)". Rationale: "most agent damage is boring — a wander into the wrong folder, a loop nobody saw." 1 comment. The same skill is on ClawHub as `thepodemail-lgtm/file-access` (2026-11-16T20:28:17Z) with **67 downloads, 0 installs, 0 stars** — a same-day Reddit→ClawHub conversion with no measurable adoption.
  https://www.reddit.com/r/openclaw/comments/1xxw2zg/free_hardened_fileaccess_skill_for_openclaw/

## 10. Discourse — 4 new topics, half spam-flagged in seconds, still zero maintainer replies

Topic-ID continuity (yesterday's max = 453): IDs 454–465 probed individually via `/t/<id>.json`; **454, 455, 459, 462 exist**, 456–458, 460–461, 463–465 return `404` (never created). Max in-window ID **462**, no gaps → **4 new topics, complete**.
1. **#454** — 2026-11-16T13:22:16Z — /u/rizamohq — "Posting to Instagram, TikTok and LinkedIn from OpenClaw: drafts first, OAuth, and each network's limits" — 7 views, 0 likes, **0 replies**. Free skill + plugin (`clawhub:rizamo-mcp`): send a photo/video/PDF in WhatsApp or Telegram and say where/when → "your claw shows the draft per network and waits for your OK… It schedules or publishes, then tells you how each post did"; scheduled jobs include "a Monday results report, and every morning the comments that need a reply"; OAuth with `offline_access` (refresh token, revocable); per-network limits stated (Instagram carousels 2–10 items, carousel videos ≤ 60 s).
   https://community.openclaw.ai/t/posting-to-instagram-tiktok-and-linkedin-from-openclaw-drafts-first-oauth-and-each-networks-limits/454
2. **#455** — 2026-11-16T15:50:25Z — /u/4GoodHosting — "Self-hosting OpenClaw on a Canadian VPS" — **spam-flagged by `discourse_ai_spam` within 4 seconds**; body hidden; 1 view. https://community.openclaw.ai/t/455
3. **#459** — 2026-11-16T23:23:27Z — /u/eakode111 — "Coin pi network" — **spam-flagged within 4 seconds**; body hidden; 1 view. https://community.openclaw.ai/t/459
4. **#462** — 2026-11-17T07:23:12Z — /u/videocutterai — "Video Clip Planner in OpenClaw with a timestamped podcast example" — 1 view, 0 replies. Reproducible local test: "I tested Video Clip Planner in **OpenClaw 2026.11.4** using **Qwen3.5-2B locally**… The first reply reset the clock for each clip. I asked it to use the original subtitle timecodes and checked the revised output against the source", with a timestamped cut table (00:10→00:38, 01:05→01:34, 02:04→02:29).
   https://community.openclaw.ai/t/video-clip-planner-in-openclaw-with-a-timestamped-podcast-example/462

Only **2 of 4** appear in `latest.rss` (spam-hidden excluded); `top.json?period=daily` now returns just **one** topic (#454) — yesterday it returned all three new topics.

**Maintainer activity in-window: zero.** joe's "Focus Week Nov 16th-22nd - Simple Setup" (#453) was posted 2026-11-15T22:12:56Z — **before** the window — with no in-window reply. Watched topics #419, #428, #450, #451, #452, #453, #407 show **no in-window posts** (last activity: #419 2026-11-16T03:50Z; #428 2026-11-15T03:56Z; #450 2026-11-15T01:48Z; #451/#452/#453 creation only; #407 2026-11-12T17:48Z). #419's last post is still the ClawHub moderation complaint ("skill hidden with 'Needs review' and no SkillSpector results") from 2026-11-16T03:50:50Z — **5.5 days without maintainer response**.

## 11. NEW USE CASE — persistent agent identity across a domain migration (only in-window activity on an older thread)

Topic **#276** ("Council Network: a persistent-identity skill for OpenClaw agents to discuss with other agents"), 3 posts, 41 views, in-window update **2026-11-16T11:39:02Z** by /u/Docrohit: "Council Network has moved to https://councilnetwork.thegyanbot.com (the old nftforger.com address is retired). Existing agents keep their identity, CN number and API key — just pull connector **v0.2.0**… and restart your MCP host. No need to re-register." Design: "one durable identity. Each agent gets an immutable UUID and public CN ID… reuses that identity after restarts or model changes… stops on a mismatch. It avoids automatically repeating a registration when the result is uncertain."
https://community.openclaw.ai/t/council-network-a-persistent-identity-skill-for-openclaw-agents-to-discuss-with/276

## 12. ClawHub — supply fell 44%: 89 in-window skills, 47 publishers, 5 installs, 0 stars, 0 comments

Fetch `https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200` → HTTP 200, **197 items**. **Completeness verified:** oldest `createdAt` in the fetch = 2026-11-15T22:55:48Z, *before* window start → count is exact. (`createdAt` is epoch **milliseconds**, converted explicitly.)
- In-window skills **89** (yesterday 160, −44%); publishers **47** (yesterday 51); **36 of 47 published exactly one skill**, and yesterday's top-3 bulk publishers (xiewxx/jasonstarlight/winsley-jeune) are entirely absent.
- Totals: **installs 5, stars 0, comments 0**, 115 versions (yesterday: 21 installs / 0 stars / 0 comments).
- Downloads: min 0, median 51, max 138, total 4,318, 11 skills at zero → registry fetches, not usage.
- Only **3 of 89** summaries mention "OpenClaw" (`chipschat/chips`, `thepodemail-lgtm/file-access`, `alessandromoretti90/cobrain`).
- The 5 installs: `chipschat/chips`, `adithya2441/a3-email-safety`, `aniruth1011/assistant-todo-triage`, `qq2292720945/connor-voice`, `mayankkasavala/ihateposting` (1 each).

https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

## 13. ClawHub skill families — a vertical business-process family (manufacturing MRP) expands

- **`athola` — 26 skills (`nm-*`)**: personal dev-methodology library — domain-driven archetypes, skill-library authoring, decision journal, ticket writing, dependency verification / anti-slopsquatting, memory-palace session handoff, simplified technical English, self-executing PR test plan, plus a 6-skill "conjure" family delegating to **Codex CLI, Muse Glimmer (ollama), Z.ai GLM-5.x, MiniMax CLI (mmx), Muse Code CLI, OpenCode**. Real engineering value, OpenClaw-agnostic, 0 installs.
- **`chinabizskills` — 7 skills, every one a business deliverable** (strongest business-process set of the window): `biz-analysis-narrator` (spreadsheet → judgment-rich management narratives, price-vs-volume variance), `contract-review-checklist`, `cs-reply-pack` (LEAP de-escalation, objection matrix, escalation), `ecommerce-listing-pack`, `rednote-title-pack` (Xiaohongshu title/cover formulas), `rfp-response-pack` ("extract requirements from hundreds of tender pages, reverse-engineer the scoring method, generate point-by-point response drafts"), `weekly-report-pack` ("Auto-generate structured weekly/daily/monthly reports from scattered work traces — chats, todos, calendar, git commits, notes. Quantified wins, risks…"). Agency deliverables, not data resellers.
- **`zhengjinfa` — 4 `pmclite-*` skills**, continuing the family first seen 2026-11-14 (then `pmclite-scheduler`, `-schedule-explainer`, `-kit-readiness`, `-insertion-assessment` for 广州轻排信息科技's MRP-PMC desktop app). The new ones move it from scheduling into commercial decisions: `pmclite-order-review` ("判断一张新订单能不能接… 评估产线占用、物料齐套与工时" — can we take this order, will it displace the schedule, delivery commitment), `pmclite-delay-explain` (rule-based, evidence-attached: why is this work order late, can it be saved), `pmclite-purchase-suggest` (BOM-based: what to buy, how much, by when — "只算不下单" = computes, does not order), `pmclite-daily-report` (shop-floor daily report: starts/finishes/reported qty/exceptions/overdue → "生成一段可直接发群的日报"). Most clearly vertical enterprise artefact of the window.
- Smaller clusters: `wlc-dev/huawei-*`, `sdk-team/alibabacloud-*`, `blueboyzx/neo4j-*`, `wirecat/wirecat-*`, `larksq/deplark` (mainland-China deploy), `keepmd-medical/keepmd-*`, `hufaguang/hmos-connect-api-cli-skill`, `mmsample97/animated-hero-workflow` + `scroll-animation-workflow`, `engheng-art/shipin-yuyin-neirong-tiqu` (video→clean script) and `engheng-art/acquisition-explorer` (lead mining from short-video comments), `ninetyhe-90/de-bloat`, `thepodemail-lgtm/file-access`.

## 14. Official showcase / press / blog: byte-identical for a third consecutive day

- https://openclaw.ai/showcase → md5 `72af42550b4aeadc1aece19bca286ebe` — identical to 2026-11-15 and 11-16.
- https://openclaw.ai/press → md5 `b1659d13b400a8f02255b11cc24c14b0` — identical to 2026-11-15 and 11-16.
- https://openclaw.ai/rss.xml → md5 `d840797cc7691f44c63357dab085a79a`; 26 items; newest still **"OpenClaw is coming to Shenzhen" (Fri, 13 Nov 2026)** — no new blog post despite v2026.11.4 shipping 2026-11-16 and Focus Week (Nov 16–22) running.

## 15. Third-party coverage: nothing dated in-window; ZDNET (11-15) remains the latest deployment report

Checked via Google News RSS (`q=OpenClaw`, `q=OpenClaw when:2d`), Bing News RSS, 2 web searches, 2 fetches. Items dated 2026-11-16/17: Reuters/Baidu (no OpenClaw), Hostinger updates, ZDNET "Galaxy Claw" (competitor phone agent), ZDNET "LLM Mixers" (unrelated), 36Kr "cyber avatar" (no verifiable OpenClaw deployment), AI Rudder's CALL-E launch (2026-11-16 04:16Z — names OpenClaw as one of three hosts; a launch mention, not a deployment/ROI story). The newest substantive deployment report is still **ZDNET, David Gewirtz, 2026-11-15T17:05Z** ($20/month Ollama Cloud on a used 2020 64 GB M1 Mac Studio).

The only dated in-window aggregator update is **The Claw Report** ("Last updated: November 17, 2026"), whose "top story" is a **TechRadar Pro** privileged-access report dated **2026-11-11** — recycled, not new. It confirms the GitHub release date **v2026.11.4 = November 16, 2026** and carries this window's Reddit/Discourse items (aggregator, not independent reporter).
https://www.theclawreport.com/

---

## Negatives — what explicitly did NOT happen in-window

1. **No customer-facing ROI disclosure** by OpenClaw or any vendor: no revenue, hours saved, cost-per-task, deployment/seat count or customer attribution. The only quantified economics are OpenClaw's own CI compute (§7) and community-recommended hosting prices (§4) — neither is a customer ROI claim.
2. **No new third-party deployment story** dated 2026-11-16/17 (ZDNET 2026-11-15 remains the most recent).
3. **Zero maintainer replies on Discourse**, including on all four new topics; joe's Focus Week post (#453) predates the window. Watched topics #419, #428, #450–#453, #407 saw zero in-window activity.
4. **Zero official replies on Reddit** — both watched threads still comment-free; the only first-party-adjacent presence was 3 posts by /u/hannesrudolph.
5. **Official showcase/press unchanged** (identical md5, third day) and no blog post since 2026-11-13, despite a release and a Focus Week.
6. **ClawHub engagement is effectively zero**: 89 new skills → 5 installs, 0 stars, 0 comments; supply fell 44% and yesterday's bulk publishers vanished.
7. **No new ClawHub skill was an OpenClaw deployment/showcase skill** — only 3 of 89 mention OpenClaw, all third-party configuration helpers.
8. **No Discord or X/Twitter data collected** (no route) — sentiment here is Reddit + Discourse only.
9. **No discussion on the two most technically detailed new artefacts**: the CI cost-reduction post (0 comments) and the Video Clip Planner reproducible test (0 replies).

## Community pulse

**Working well** — reusable deployment advice (Oracle always-free, Hetzner CX33 ~8 €/mo, Contabo, thinstation m720q 32 GB, 2011 Mac mini $40, Proxmox + Tailscale pattern); a same-day defensive skill that crossed Reddit→ClawHub; an exemplary first-party write-up that quantifies the win *and* states its own caveats while shipping an audit prompt.

**Problems** — Codex reliability (persistent failures, incomplete tool calls, timeouts, 380k-token runs hitting the app-server budget, "stale dB" after updates) is the top open problem, answered only by workarounds (claw-sweeper, custodian, 9router/omniroute, "turn off reasoning"); unresolved sandboxing ("build the sandbox you want to allow your children to play in"); model churn eroding trust (three voices say Sol 6.1 < Sol 5.6); marketplace noise exceeding signal (2 of 4 new Discourse topics spam-flagged within 4 seconds; #419's ClawHub moderation complaint unanswered for 5.5 days). Sharpest negative quote: "if it's this hard to get an agentic workflow working well in OpenClaw it's always going to struggle to capture interest."

**Interesting** — agent-initiated commerce with real money (Agent Aisles, https://agentaisles.com) answered with a limits spec, not hype; a 3-agent forecasting/trading stack whose goal is "profitability"; a named "digital chief of staff" on two Mac minis; persistent agent identity across a domain migration (councilnetwork.thegyanbot.com, connector v0.2.0); two reproducible skill demos with stated versions/models (Video Clip Planner in OpenClaw 2026.11.4 with local Qwen3.5-2B; the Rizamo social-publishing plugin).

## Caveats / data gaps

1. **Reddit `.json` returns `HTTP 403`**; only Atom feeds work — comment counts are **floors**, never adoption metrics; no scores/upvotes.
2. **Severe Reddit rate limiting (`HTTP 429`)**: `/hot/.rss`, the front-page `.rss` and most per-thread comment feeds failed on first attempt; counts came only from a slow retry loop. **`/hot` could not be retrieved → today's visibility/rank is unknown.**
3. **Comment counts captured ~09:40Z**, just after window close — threads still accruing (1xycg2v's last comment 09:32:55Z) are counted at capture time.
4. **Discourse exposes no upvote signal** (`like_count` 0) and `views` (1–7) are far below the meaningful floor.
5. **`/new.json` is auth-gated** (`not_logged_in`), `/new` is `404`; completeness was proven by probing topic IDs 454–465 individually plus `latest.rss`/`latest.json`/`top.json?period=daily`. Two of four in-window topics are spam-hidden and absent from `latest.rss` — an RSS-only count would have said 2.
6. **ClawHub `createdAt` is epoch milliseconds**; ISO-string comparison silently yields 0 in-window skills. All counts converted explicitly.
7. **ClawHub downloads excluded as adoption evidence** (median 51 on hours-old skills = registry fetches; 11 skills at zero). Only installs/stars/comments counted.
8. **CI ROI figures are list-price-equivalent, not cash** (compute was sponsored), workload changed (indexed commits −44%), and PR-to-merge improvement is not established; measurement is specific to Blacksmith-hosted runners on GitHub Actions.
9. **Tencent's "70% faster at ~1/15 cost" is a vendor WorkBuddy benchmark**, not an OpenClaw measurement — marketing, not ROI.
10. **Third-party coverage search was constrained**: DuckDuckGo-based search intermittently returned a bot-detection challenge ("DuckDuckGo returned a bot-detection challenge."), so discovery leaned on Google News RSS and Bing News RSS (which miss small blogs). Undated SEO/content-farm pages were excluded; theclawreport.com is an aggregator and its "top story" (TechRadar Pro) is dated 2026-11-11.
11. **Discord and X/Twitter were not collected at all** — sentiment covers Reddit + Discourse only.
12. **No deployer counts exist in-window**: no source states how many OpenClaw instances run in production; no first-party telemetry is exposed. Community FAQ reference: https://docs.openclaw.ai/help/faq#faq

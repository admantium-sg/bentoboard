# OpenClaw — Community / Use-Cases / ROI findings
**Window:** 2026-11-23T09:28:00Z → 2026-11-24T09:28:00Z
**Run:** 2026-11-24 (DIAC daily-insight-accumulator, Task 2 — community)
**Budget used:** 4/4 `web_search`, 2/2 `web_fetch` (exhausted). All other data via direct API/curl; raw payloads saved under `tmp/2026-11-24/`.

---

## 1. Only three new substantive Discourse topics in-window — all three are Troubleshooting, zero new showcases
Topic-ID probe 500→535 confirms exactly four new topics in the window, one of them a hidden spam probe:

| ID | Created | Title | Category |
|---|---|---|---|
| 520 | 2026-11-23T10:29:45Z | ClawBro in-app browser does not launch, but chat responds | Troubleshooting |
| 521 | 2026-11-23T17:25:12Z | Slack session stuck after provider-review acknowledgment: "dynamic tool catalog" mismatch | Troubleshooting |
| 522 | 2026-11-23T19:30:02Z | Codex Pro: subscription_limit persists after credit top-up; auth_profile_cooldown blocks all work | Troubleshooting |
| 526 | 2026-11-24T09:21:09Z | `44103 onebox probe` | **hidden** (`visible:false`, "This post was flagged by the community and is temporarily hidden.") |

Topic 519 ("Supported external HTTPS verification with split DNS and web_fetch SSRF…", 2026-11-23T05:47Z) and 518 ("Focus Week Nov 23rd-29th", 2026-11-23T00:57Z) fall **before** the window start and are excluded.

**No Build & Showcase topic was created in-window.** The newest Build & Showcase topic is still 488 (`CommentMetro…`, 2026-11-19T19:05:10Z) — i.e. the showcase channel has been silent for ~4.5 days. The category sits at 21 topics / 33 posts in total.
Source: https://community.openclaw.ai/latest.json · https://community.openclaw.ai/c/build-showcase/5/l/latest.json?order=created · https://community.openclaw.ai/t/520.json · https://community.openclaw.ai/t/521.json · https://community.openclaw.ai/t/522.json · https://community.openclaw.ai/t/526.json

## 2. Maintainer activity is NO LONGER zero — joe posted twice in-window (streak broken)
The prior run's "zero maintainer posts for 2 days" streak is broken. `joe` authored **two** in-window replies, both on Troubleshooting threads, both with concrete reproduction guidance:

- On t504 (#5, 2026-11-23T22:22:20Z): *"We've confirmed that the legacy agents.defaults.heartbeat setting is blocking credential repair before it can run. My recommendation: Don't run 11.6 doctor --fix against your working 10.7 installation yet."*
- On t482 (#4, 2026-11-23T22:23:48Z): *"Excellent follow-up, and thanks for testing this so thoroughly. The successful original-task delivery confirms that the CLI-to-browser handoff works on 2026.11.5, including automatic parent continuation."*

`/u/joe/activity.rss` shows exactly these two items inside the window (next older item is 2026-11-23T00:57:50Z).
Source: https://community.openclaw.ai/u/joe/activity.rss · https://community.openclaw.ai/t/504.json · https://community.openclaw.ai/t/482.json

## 3. The dominant in-window pain point: macOS credential-repair dead-end (topic 504) — with a confirmed root cause
Topic 504 (`macOS app stuck on "client credentials need recovery" after updating to 2026.11.6; doctor with 10.7 CLI doesn't clear it, mac node stays disconnected`, opened 2026-11-21T17:07:42Z) collected **four** in-window posts — the busiest thread of the day:

- chad_little (#3, 2026-11-23T19:42:03Z) — full repair attempt, backups taken, side-by-side CLI `install-cli.sh --version 2026.11.6 --runtime-only --prefix "$HOME/.openclaw-116-repair"`.
- Caleb_90 (#4, 2026-11-23T22:01:55Z) — *"Same issue here on a Mac mini (arm64), OpenClaw.app 2026.11.6 and now 2026.11.7. App-managed Gateway stuck on 2026.11.4."* Also removed `agents.defaults.heartbeat` by hand.
- joe (#5) — root cause confirmed (see finding 2) + explicit "don't run doctor --fix yet" warning, because *"Database migration…"* is still in flight.
- collinm23 (#6, 2026-11-24T04:30:42Z) — **flagged by the community and temporarily hidden.**

The pattern (two independent users, Mac mini arm64, 2026.11.6 → 2026.11.7, app-managed Gateway) reads as a reproducible defect, not a one-off.
Source: https://community.openclaw.ai/t/504.json

## 4. Support-queue frustration is explicitly voiced: a job "paused since November 1" with no staff answer
Topic 356 (`Scheduled Discord read fails…`, opened 2026-11-04) got one in-window reply from Frien (2026-11-24T06:51:06Z):

> "Hi team, I'm following up as we haven't received a response to the recovery question above. Could another staff member review it if Joe is unavailable? The newspaper job has been paused since November 1. Is there now a supported recovery procedure that preserves…"

That is a **~3-week-old unanswered support request** tied to a named production job (a scheduled Discord "newspaper" read), and an explicit ask for support load-balancing away from the single maintainer.
Source: https://community.openclaw.ai/t/356.json

## 5. Adjacent (11-22) but still the sharpest cost complaint in the community: onboarding burns tokens, user uninstalls
Topic 512 (`Extremely frustrating first-time experience…`, created 2026-11-22T09:40:35Z, just outside the window but a direct sentiment anchor) — user Sharon_Mosesko:

> "After hours of troubleshooting, switching between OpenAI and Gemini, and repeatedly changing configurations, I ultimately uninstalled OpenClaw without achieving a reliably working assistant."
> "OpenClaw recorded approximately 2.86 million tokens across my sessions, despite very limited successful interactions. The estimated usage cost shown by OpenClaw was $8.14…"
> "Difficulty finding support: I couldn't find a straightforward way to open a support ticket or report the overall experience."

Same thread lists ChatGPT OAuth refresh errors, "OpenClaw setup is already in progress" blocking reauth, and Telegram replies "sometimes never reach[ing] the group" (`visible channel turn dispatched with no queued reply payloads`).
Source: https://community.openclaw.ai/t/512.json

## 6. ClawHub in-window supply: 140 new skills / 47 publishers — but engagement collapses to 2 installs, 1 star, 0 comments
Full catalog walked via cursor pagination (6,037 skills enumerated; 1,498 distinct publishers). In-window slice:

| Metric | 2026-11-24 run | 2026-11-23 baseline |
|---|---|---|
| New skills | **140** | 163 |
| Distinct publishers | **47** | 31 |
| Publishers new to the platform (their entire footprint is in-window) | **29 / 47 (62%)** | – |
| Publishers with exactly 1 skill | 33 / 47 | – |
| Installs | **2** | 3 |
| Stars | **1** | 0 |
| Comments | **0** | 0 |
| Downloads | 6,172 | – |

Skills with any install: `tumbwa/corbits` (1 install / 57 downloads, summary literally "test") and `dxa204/uprock` (1 install / 61 downloads). The single star went to `guaikei/dy-brief` (0 installs, 31 downloads). **No in-window skill has a comment.**
Downloads-to-install ratio for the in-window cohort: **≈3,086x** (6,172 / 2). *(The ClawHub browse counter is not exposed by any reachable endpoint — `/api/v1/stats`, `/api/v1/skills/stats`, `/api/v1/browse-count` all 404 and `sort=browse` returns `400 Invalid sort query parameter` — so downloads are used as the browse proxy, consistent with prior runs' methodology.)*

Batch-drop concentration **improved** vs. the prior run's 70%: top-5 publishers now account for 72/140 = **51%** of new supply — `manteclaw` 31, `nitrosend` 13, `guaikei` 10, `engheng-art` 9, `geminigeorge22` 9. Twelve publishers shipped ≥3 skills each (103/140 skills from those 12).
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

## 7. 10% of new ClawHub supply is inert test scaffolding, not use cases
14 of the 140 in-window skills are canaries/probes: `playgod2023/clh-skillrace-i44096-8ims3` ("Inert concurrency canary used to verify ClawHub skill publication staging semantics…"), `bucsaradu/clh-skillrace-i44096-8ims3` (identical slug from a second publisher), `playgod2023/media-probe-i3f48j` ("media decode probe"), `playgod2023/media-canary-i43000`, `bucsaradu/xfer-canary-i43125`, `yszheda/pentest-canary-i42541`, `8treenet/i22089-storageid-probe`, `zhaoxinghua09-cell/skill-redteam-suite` ("Use when you must test whether a skill reviewer, gate or scoring script…"), plus `tumbwa/corbits` whose summary is just "test". Same slug published by two different owners is a real collision on the registry.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200 · https://clawhub.ai/api/v1/skills/corbits?owner=tumbwa

## 8. A named third-party product is shipping OpenClaw-integrated skills with real platform metrics: `publicrecords`
`geminigeorge22` published 9 `publicrecords-*` skills in-window (gov tenders, SEC EDGAR, Spotify play counts, Google Ads Transparency, Skool communities, sports odds, ATS job boards…). Each is a wrapper over **Apify Store Actors** — the skill description says *"Runs publicrecords Actors on Apify (pay per result, user's own Apify account)"* and the metadata names the publisher as `publicrecords (Apify Store)`.

Cross-checking the Apify Store directly: the `publicrecords` publisher family (27 actors) has **79 total users and 4,807 total runs**. Top actors: `etsy-search-scraper` (20 users / 639 runs), `etsy-shop-velocity` (5 / 1,222), `company-social-profile-finder` (6 / 798), `govcon-opportunity-feed` (2 / 286), `legistar-meetings-scraper` (4 / 167). So there is a monetised OpenClaw→Apify distribution channel with non-trivial downstream usage — but the OpenClaw-side skill itself shows **0 installs and 0 stars**.
Source: https://clawhub.ai/api/v1/skills/publicrecords-ats-job-postings?owner=geminigeorge22 · https://api.apify.com/v2/store?search=publicrecords

## 9. Another commercial SaaS is onboarding via ClawHub: `uprock` — "thousands of agents on real desktops in 60+ countries"
`dxa204/uprock` (created 2026-11-23T19:21Z) is one of only two in-window skills with an install. Its description: *"UpRock runs thousands of agents ('Rockets') on real desktops and phones in 60+ countries. Use it to fetch the live web as a real person in a given country sees it…"* — a geo-distributed scraping-as-a-service sold through an OpenClaw skill (`UPROCK_API_KEY`).
Source: https://clawhub.ai/api/v1/skills/uprock?owner=dxa204

## 10. GitHub: 249 new repos created in-window reference OpenClaw; the notable ones are agent-monitoring and device-driving
GitHub search `openclaw in:description,readme created:>2026-11-23T09:28:00Z` → **249 repos**. Standouts:

- **`bisnishub/fleetnotch` — 25 stars, 7 forks, created 2026-11-23T20:17:27Z** (≈13 h old). Native macOS menu-bar/notch monitor; ships a dedicated **OpenClaw adapter** that reads `GET http://127.0.0.1:18789/readyz` and maps `503 failing: ["channel:whatsapp:…"]` onto amber/red "problems" per channel, read-only ("adapters never restart, reconfigure or message an agent").
- **`Maxteabag/turbotap` — 12 stars.** CLI driving a real iPhone over Wi-Fi for agents, with a **measured speed claim**: *"A multi-step flow usually finishes in 3.8–6.5s end to end, compared to 14.4–15.7s on stock WDA."*
- **`lattiezhao-a11y/kit-study-assistant` — 2 stars.** Self-hosted Telegram study assistant on a Raspberry Pi 4, *"running every day … since November 2026"*, explicitly read-only and zero-token-when-idle.
- **`namxely/OpenMontage`** — "first open-source, agentic video production system", 12 pipelines / 700+ skills, README section titled *"If You're An OpenClaw Agent Reading This, Congratulations: You Probably Passed The Turing Test"*.
- **`ownshopai/ownshopai`** — open-source Telegram/WhatsApp shop assistant that answers from an Excel sheet, takes orders, issues invoices.

Source: https://api.github.com/search/repositories?q=openclaw+in:description,readme+created:>2026-11-23T09:28:00Z · https://api.github.com/repos/bisnishub/fleetnotch · https://raw.githubusercontent.com/bisnishub/fleetnotch/main/docs/agents.md · https://github.com/Maxteabag/turbotap

## 11. A developer built a *replacement* for OpenClaw because of OpenClaw's token cost — the sharpest new ROI-adjacent datapoint
In `lattiezhao-a11y/kit-study-assistant` (created 2026-11-23T17:14:12Z):

> "For comparison, the same chat through a general-purpose agent framework (OpenClaw) took roughly 10,000–20,000 tokens per message. That's why I wrote my own small bot."

That is a third-party developer quantifying OpenClaw's per-message token overhead and choosing to bypass it — the first *negative* cost-quantification of OpenClaw found in-window, and the opposite of a ROI story.
Source: https://github.com/lattiezhao-a11y/kit-study-assistant (README)

## 12. External channels are still dark: Reddit blocked for a 5th consecutive day, Hacker News had zero OpenClaw stories
- **Reddit:** `https://www.reddit.com/r/openclaw/new.json?limit=25` → **HTTP 403** (body ends with support text and code `01a20ce4-7fdb-7bb8-a266-ed73e14eb315`); `old.reddit.com/r/openclaw/new.json` → **302**; `old.reddit.com/r/openclaw/.rss` → **302**; `www.reddit.com/r/openclaw/new/.rss` → **404**. No Reddit route works.
- **Hacker News (Algolia):** stories matching `openclaw` since 2026-11-22 → **0 hits**. Comments matching `openclaw` in-window → 3 hits, all false positives (one about Mailbox/Infomaniak, one about OpenCL/GPGPU, one *"Seems like someones openclaw finally got through"* referring to the OpenCL GPU library). **No organic HN sentiment signal in-window.**
Source: https://www.reddit.com/r/openclaw/new.json?limit=25 · https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story

## 13. Third-party aggregation of the day's GitHub sentiment (published in-window)
`news-radar` auto-published *"🦞 OpenClaw Ecosystem Digest 2026-11-24"* at 2026-11-24T09:37:09Z (generated 09:33 UTC), summarising **169 issues, 500 PRs, 12 projects**. Its "User Feedback Summary" lists the day's pain points: Telegram DM lane blocked up to 24 h by idempotency-key conflicts (#203979), PostgreSQL migration crashes causing full rollback (#204421 / #204502), Windows cmd.exe wrapper blocking auto-review and allowlists (#157930), Control UI CPU lockup from `Element.getAnimations()` (#196820), "Empty agent name silently creating 'main' agent" (#204454). It also notes two betas shipped in-window: `v2026.11.10-beta.2` (2026-11-23T12:48:59Z) and `v2026.11.10-beta.3` (2026-11-24T03:28:03Z), npm `latest` still `2026.11.7`.
Source: https://github.com/datnguyenquy94/news-radar/issues/1193 · https://api.github.com/repos/openclaw/openclaw/releases · https://registry.npmjs.org/-/package/openclaw/dist-tags

## 14. Community-programme context: Focus Week 6 (speech & audio), maintainer-on-point Jacob Tomlinson
`joe`'s Focus Week 6 announcement (posted 2026-11-23T00:57:50Z, i.e. 8.5 h before the window, so it governs but is not counted as in-window activity) sets the week's theme as speech/audio: speech input & transcription, spoken replies & playback, everyday audio reliability, setup & troubleshooting — with Jacob Tomlinson as maintainer-on-point and 9 named selected Clawtributors (`darkstar6963`, `akubens`, `metaforismo`, `vkang`, `xingzhou0818`, `tangtangtang0170`, `.mt401`, `stainlu`, `dwc1997.`). **Zero replies to the Focus Week thread** — the community mobilisation channel drew no response in-window.
Source: https://community.openclaw.ai/t/518.json

## 15. ROI: still NO customer-facing quantified outcome for any named organisation — 5th consecutive day
Explicit search of every in-window artefact (Discourse posts, ClawHub skill summaries/descriptions, GitHub issues/PRs in-window) for hours saved / cost avoided / revenue / headcount / tickets deflected / latency / error-rate reduction attributable to a **named organisation** found **zero** qualifying claims. Discourse `search.json` for `ROI` → 0 posts; `revenue increase` → 0 posts; `hours saved` → 2 posts (topics 466, 276), both out-of-window; `% tickets` → 6 posts, no in-window ROI claim.

The only quantified figures in-window are **cost/latency counters, not ROI**:
- kit-study-assistant: OpenClaw ≈10,000–20,000 tokens per message (reason for replacing it).
- topic 512: ~2.86M tokens / $8.14 estimated for a failed onboarding.
- turbotap: 3.8–6.5 s vs 14.4–15.7 s per multi-step iPhone flow (~2–4x).
- OpenMontage published per-video production costs: **$1.33** for a 60 s animated short (6 Kling v3 clips + Chirp3-HD narration + score + captions), "about $4" for a 50 s film, "about $5" for a seven-world showcase — with cost estimation, spend caps and per-asset approval gates.
- GitHub #143017 (open since 2026-09-09, 19 comments, still unanswered): "21.3M cache-write tokens measured" on production traffic — a cost problem, not a saving.
- #203979: a Telegram DM lane blocked for ~24 h / ~478 failed redelivery attempts.
- #204421: Windows update spends ~25 min downloading/validating/activating before rolling back, leaving ~4.5 GB of retained DB snapshots.

No product, employer or business in-window reports headcount reduced, revenue gained, tickets deflected, or hours saved by OpenClaw.
Source: https://community.openclaw.ai/search.json?q=ROI · https://github.com/openclaw/openclaw/issues/143017 · https://github.com/openclaw/openclaw/issues/203979 · https://github.com/openclaw/openclaw/issues/204421

### Community Pulse

**Working well**
- Maintainer responsiveness resumed: `joe` answered two in-window threads with a confirmed root cause (`agents.defaults.heartbeat` blocking credential repair) and an explicit "don't run doctor --fix yet" safety warning, plus reproduction guidance on the browser-handoff path.
- Structured, reproducible bug reports remain the community's strongest habit — multi-OS, multi-version, with exact commands and quoted error strings (e.g. chad_little's side-by-side `install-cli.sh --runtime-only` repair attempt; Caleb_90's Mac mini arm64 confirmation).
- Third-party tooling is maturing around OpenClaw rather than inside it: FleetNotch ships a first-class OpenClaw `/readyz` adapter; OpenMontage targets OpenClaw agents explicitly; OpenClaw skills now front commercial services (UpRock, publicrecords-on-Apify).
- Self-hosting + data-residency demand is real and specific (Canadian VPS / PIPEDA / Law 25 thread 455 remains the canonical deployment-sourcing discussion), and a Raspberry Pi study assistant has been running daily since November.

**Problems**
- Zero showcase activity for ~4.5 days and zero engagement on the Focus Week call for contributors (9 selected, 0 replies) — the community's *building* and *mobilisation* channels are silent while the *support* channel floods.
- Support concentration is a real bottleneck: one maintainer (joe) is the only responder, and a production job has been paused since Nov 1 with no answer and an explicit request for a second pair of hands.
- Reproducible release-regression cluster on macOS 2026.11.6/2026.11.7 (credential-repair dead-end, app-managed Gateway stuck on 2026.11.4), plus in-window Telegram DM 24 h lane block (#203979), Windows update rollback (#204421), and Control UI 100 % CPU lockup (#196820).
- Cost opacity is the loudest recurring complaint and now has a numeric form: 10k–20k tokens/message for a study-assistant workload (developer chose to bypass OpenClaw entirely), 2.86M tokens / $8.14 for a failed onboarding, 21.3M cache-write tokens on a production install.
- ClawHub supply is now ~99 % unused: 140 new skills / 47 publishers → 2 installs, 1 star, 0 comments (~3,086x downloads-to-install), with ~10 % of supply being inert canaries and one slug published twice by different owners.

**Interesting**
- Two publishers are using ClawHub as an *acquisition* channel for an existing data business rather than as a community artefact: `publicrecords` (27 Apify actors, 79 users, 4,807 runs) and `uprock` (geo-distributed scraping fleet across 60+ countries).
- A third-party developer published an open-source, explicitly OpenClaw-aware kit study assistant whose README benchmarks *against* OpenClaw on token cost — competitive positioning built on OpenClaw's own weakness.
- OpenMontage's per-video cost transparency ($1.33 / ~$4 / ~$5) plus budget governance and per-asset approval gates is the most mature cost-discipline pattern seen so far in any OpenClaw-adjacent project.
- FleetNotch (25 stars, 7 forks in ~13 h) is the fastest-rising OpenClaw-adjacent repo of the window and treats OpenClaw as one agent among many (Hermes, generic `/readyz` adapters).

### Caveats / confidence
- **Window arithmetic** was done in UTC; topics created between 2026-11-23T00:57Z and 09:28Z (519, 518) are excluded on the strict reading, even though 518 (Focus Week) governs the period.
- **ClawHub catalog size is a lower bound**: cursor pagination was stopped after 6,037 enumerated skills (oldest 2026-10-03) to respect the budget, so the true catalog is larger. All in-window counts (140 skills / 47 publishers) are exact because the in-window slice is fully covered by the first pages of a `createdAt desc` sort.
- **The browse-to-install ratio is a downloads-to-install proxy.** No ClawHub endpoint exposing browse counts responded (404 / 400 / `Invalid sort query parameter`), so the ~3,086x figure is downloads-per-install, consistent with prior runs' method but not literally browse-per-install.
- **Reddit remains unreachable** (403 on the JSON API, 302 on old.reddit, 404 on .rss) — 5 days running. Reddit sentiment is therefore entirely unobserved, not "negative".
- **Hacker News silence is genuine but narrow**: Algolia indexes HN with some delay, so in-window stories may still surface late; as of the run there were 0 `openclaw` stories.
- `web_search` (4/4) and `web_fetch` (2/2) budgets were fully consumed; the two successful search sweeps returned only aggregator/SEO listicles (cloudways, agensi, latenode, contabo, tldl, solvea.cx) and no in-window dated primary sources, so external ROI reporting could not be extended beyond the showcase page (openclaw.ai/showcase, whose testimonials are undated and therefore excluded as in-window evidence).
- The `news-radar` ecosystem digest is an automated third-party aggregation of GitHub data, not a primary maintainer statement; its "User Feedback Summary" is a summariser's paraphrase of issue titles/bodies.
- `publicrecords`/Apify and `uprock` metrics come from their own vendor APIs (Apify Store stats) — self-reported platform numbers, not independently audited.

# OpenClaw — Task 2: Community Sentiment, Use Cases, Showcases, Deployments, ROI
**Date:** 2026-11-20 · **Window:** 2026-11-19T09:28:00Z → 2026-11-20T09:28:00Z
**Working dir:** `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases`
**Raw captures:** `tmp/2026-11-20/` (`discourse_latest.json`, `t_485.json`, `t_486.json`, `t_487.json`, `t_488.json`, `t_489.json`, `t_491.json`, `t_25.json`, `clawhub.json`, `gh_search.json`, `gh_issues.json`, `posts.rss`)

---

## 0. Window accounting / completeness

| Source | Probe | Result |
|---|---|---|
| Discourse new topics | `https://community.openclaw.ai/latest.json` + `/t/<id>.json` for ids 484–496 | ids 484, 490, 492, 493, 494, 495, 496 → **404**; 485–489 exist; **491 exists but is flagged+spam** |
| Discourse older-thread replies | `/t/<id>.json` for 25, 385, 419, 428, 446, 451, 452, 455, 466, 467, 475, 481, 482 | only **#25** has an in-window post |
| Discourse maintainer activity | `https://community.openclaw.ai/u/joe/activity.rss` | newest joe post = `2026-11-19T02:14:41Z` → **pre-window**; `CommunityHelper` and `OpenClawSupport` profiles → **404** |
| Reddit | ONE attempt: `https://www.reddit.com/r/openclaw/new.json?limit=25` | **HTTP 403** |
| ClawHub | `https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200` → 195 items returned | 82 in-window |
| GitHub | `api.github.com/search/issues?q=repo:openclaw/openclaw+created:2026-11-19T09:28:00Z..2026-11-20T09:28:00Z…` | 187 issues created in window, 90 with `comments:>3` (2 of those are issues, 88 are PRs) |

---

## 1. Discourse — new topics in window: **5** (485–489) + 1 spam (491)

IDs above yesterday's max (483) probed one by one: 484 → 404, **485–489 → exist**, 490 → 404, **491 → exists (flagged/hidden + spam post)**, 492–496 → 404. **No topic IDs above 491.** Max topic id in the window = 491.

### #485 — "If you provide an idea of your prices, I will buy a plane"
- **URL:** https://community.openclaw.ai/t/485
- **Author:** `Sahan` (TL0, non-staff) · **created_at:** `2026-11-19T12:05:39.407Z` · **posts:** 1 · **views:** 4
- **Content (exact):** "It would be helpful if you could provide the prices for your plans. I am interested in purchasing one of your plans, and I would like to know if a lifetime option is available."
- **Category:** 4 (Start Here). **Maintainer reply: NO** — unanswered at window close.
- **Why it matters (use-case signal):** the only in-window thread with **explicit purchase intent** — a prospective customer asking for pricing and a lifetime option. It sits unanswered in the Start Here category, so the commercial front door of the community forum has zero throughput this window.

### #486 — "macOS arm64 OpenClaw 2026.11.5: codex-code-mode-host V8 CodeRange crash breaks automatic iMessage replies"
- **URL:** https://community.openclaw.ai/t/486
- **Author:** `Francesco_Caristo` (TL0) · **created_at:** `2026-11-19T16:24:48.989Z` · **posts:** 2 · **views:** 2 · **category:** 2 (Troubleshooting)
- **Post 1 (exact, key lines):**
  - "**What I expected:** An incoming iMessage should trigger an automatic assistant reply."
  - "**What happens:** Inbound messages arrive, but the reply action via `run JavaScript` fails with `messaging tool returned code-mode host closed its stdout`."
  - Environment: "OpenClaw.app 2026.11.5 stable, local app-managed Gateway", "macOS 27.2.1, Apple silicon/arm64", "Gateway checks/event loop healthy; inbound iMessage works.", "Memory pressure low (~69% free), swap 0; Terminal/launchd limits unlimited. `launchctl procinfo` on the Codex parent showed no restrictive process limit and that it is not managed by launchd.", "`codex-code-mode-host` repeatedly crashes about 0.1s after launch; stderr reports `Fatal process out of memory: Failed to reserve virtual memory for CodeRange` (SIGTRAP).", "Direct iMessage send test succeeded and was delivered; automatic replies remain broken."
- **Post 2 (exact):** "Up-to-date app-managed install; no supported repair CLI found. CodeRange crash still prevents iMessage replies. Please advise.." (`2026-11-19T16:42:27.961Z`)
- **Maintainer reply: NO.**
- **Use-case relevance:** this is a *production messaging automation* deployment (iMessage auto-reply) broken by a runtime crash — the failure is in the Codex code-mode host, not in the messaging transport.

### #487 — "Supported agent-accessible Codex installer with approvals, version pinning and rollback"
- **URL:** https://community.openclaw.ai/t/487
- **Author:** `HalVeyran42` (TL0) · **created_at:** `2026-11-19T17:54:15.546Z` · **posts:** 1 · **views:** 2 · **category:** 2 (Troubleshooting)
- **Content (exact):** asks for "the supported route for an owner-authorised engineering agent to use the existing native Codex dependency installer, without arbitrary host shell access or bypassing deployment policy"; notes "the recipe appears unpinned"; asks maintainers to clarify (1) existence of an agent/Custodian tool exposing the fixed installer with human approval, (2) how to enforce "an exact approved version (for example 0.170.0) and provenance/integrity … before installation/activation", (3) the supported rollback path, (4) installing the dependency "while the coding-agent skill remains disabled, without enabling unrelated execution capabilities".
- **Maintainer reply: NO.**

### #488 — "CommentMetro: a skill that lets your Claw join the comment section of any web page" (Build & Showcase)
- **URL:** https://community.openclaw.ai/t/488
- **Author:** `Kyle_Lewis` (TL0) · **created_at:** `2026-11-19T19:05:10.242Z` · **posts:** 1 · **views:** 3 · **category:** 5 (Build & Showcase)
- **Content (exact highlights):** "CommentMetro puts a comment section on every web page. People use it through a Chrome extension. Agents use it through a plain JSON API, with an AI account that is marked 'AI' on everything it writes."; "Before anything else, it asks you. Joining makes a public account, so the skill tells it to get your yes first."; "The limits, so nobody's Claw floods anything: **2 comments a minute, 20 an hour once you claim it, and when a thread ends in 6 AI replies in a row, agents wait for a person.**"; "**Honest caveats. It is brand new, and most pages are still quiet.** Accounts for people are for adults in the United States for now. Agents have no such limit."; install: `openclaw skills install @luckincllc/commentmetro`.
- **Maintainer reply: NO.** No community replies either (1 post).
- **Use-case family:** agent participation in public web comment threads — a new "agents talk to humans in the wild" pattern with explicit anti-spam governance built in.
- **No engagement funnel is published** (no reach → signups → shipped-artifact numbers). The author's own caveat ("most pages are still quiet") is the only traction signal.

### #489 — "I have updated to 2026.11.5 , I am soo confused with the new UI"
- **URL:** https://community.openclaw.ai/t/489
- **Author:** `Saul_Burgos` (TL2) · **created_at:** `2026-11-19T19:15:38.753Z` · **posts:** 3 · **views:** 9 · **category:** 9 (General Discussions)
- **Post 1 (exact):** "I am so confused on the new UI and session. I was on 2026.10.5 and I guide was the main session but now I am so confused about those this UI works and the 'sessions' list. do you have a documention or somebody can explain me." / "Where are the main sessions of each agent ? I am so confused"
- **Post 3 (exact, `2026-11-19T21:45:36.294Z`):** "ok ok , I think I got it. but was really hard the first time.  so confusing but I leave this for others"
- **Maintainer reply: NO.** Self-resolved by the author after ~2.5 h.
- **Sentiment read:** upgrade-friction, resolved by trial-and-error alone — no docs, no maintainer answer. Low-severity but a repeatable onboarding-tax signal on every minor release.

### #491 — "Anyone else had a bring-your-own Anthropic key abused on a hosted OpenClaw instance this month?"
- **URL:** https://community.openclaw.ai/t/491 · **created_at:** `2026-11-20T06:22:32.461Z` · **posts:** 1 · **views:** 2
- **Content:** post 1 by `futureWA` renders as "**This post was flagged by the community and is temporarily hidden.**"; post 2 by `discourse_ai_spam` at `2026-11-20T06:34:16.259Z`.
- **Treatment:** **NOT counted as community activity.** The initial post was hidden by community flag and the only visible reply is automated spam moderation. Listed here for completeness only, and as a live signal that hosted-instance key abuse is on people's minds but the discussion channel is being suppressed as spam.

---

## 2. Discourse — new replies on older topics in window: **1**

Only **#25** has an in-window reply. Checked and confirmed **no** in-window posts on #385, #419, #428, #446, #451, #452, #455, #466, #467, #475, #481, #482 (last-post timestamps all pre-window).

### #25 — "Docker Gateway keeps getting OOM-killed on a small VPS"
- **URL:** https://community.openclaw.ai/t/25 · new post by **`berot3` (TL0), `2026-11-19T14:06:40.622Z`** (thread now 6 posts)
- **Exact environment/measurements:** "OpenClaw v2026.11.5, Docker Compose"; "Ubuntu 26.04 VPS, 4 GB RAM, no swap"; "Single Gateway, 2 GiB container memory limit"; "One synthetic agent using personal OpenAI/Codex OAuth"
- **Exact observations:** "Idle container usage: ~1.32 GB"; "Temporary spike to ~1.87 GiB / 2 GiB and 117% CPU during read-only UI/network checks, without intentionally starting a model turn"; "A codex child process appeared during the high-memory period and was absent during later checks. Its exact role and contribution remain unconfirmed."; "An earlier test hit a cgroup OOM, but that test also launched a separate OpenClaw CLI inside the Gateway container, so we can't attribute the cause."; "No new OOM events or obvious ERROR/WARN entries in the latest checked logs."
- **Questions asked:** "Is ~1.3 GB idle usage expected for this setup?", "Have you observed significant memory spikes from the Codex app-server or its warm sessions?", "Are there proven configuration changes that reduce memory consumption without disabling Codex functionality?", "Would you recommend host swap for a small Docker VPS, or is adjusting container memory and Codex concurrency generally more effective?"
- **Maintainer reply in window: NO.** (Last maintainer post on this thread is `OpenClawSupport`, `2026-09-14T20:44:40.210Z`, ~10 weeks earlier, which stated: "We do not have one confirmed fix yet.")
- **Analysis:** the small-VPS memory profile is now **quantified at two independent scales** (this thread's original reporter on a larger box + `berot3` on a 4 GB box). The mutated failure mode is *not* a plain leak any more: the spike now occurs **"during read-only UI/network checks, without intentionally starting a model turn"**, i.e. idle-ish gateway activity transiently consumes ~94% of a 2 GiB cap. That is a different trigger (read-only UI/network, not workload) than the original OOM-kill cadence — the bug class is still moving, not converging.

### Maintainer activity in window: **ZERO**
`joe`'s newest activity is `2026-11-19T02:14:41Z` (pre-window, on #482). No staff/admin post appears anywhere in the window. Consequences:
- #485 (pricing/purchase intent) — unanswered.
- #486 (production iMessage auto-reply broken) — unanswered.
- #487 (policy question about approved Codex installs) — unanswered.
- #488 (showcase launch) — unanswered.
- #25 (OOM with concrete numbers) — unanswered.
- **#419 "ClawHub skill hidden with 'Needs review' and no SkillSpector results"** — https://community.openclaw.ai/t/419 — last post `2026-11-10T07:46:09.957Z` → **~10.1 days with no maintainer reply** (yesterday: ~9.1 days). **This thread has now crossed the ~10-day mark.** It is the longest-running unanswered community thread tracked.

### Failure-mode mutation tracking (in-window)
| Tracked pattern | In-window status | Source |
|---|---|---|
| Provider-review / code-mode host fragility (#481: dynamic tool catalog mismatch → stale thread binding) | **Mutated again, one day later**: same `codex-code-mode-host` subsystem now fails as a **V8 `CodeRange` virtual-memory reservation crash (SIGTRAP)**, ~0.1 s after launch, on 2026.11.5/macOS arm64. Distinct signature from #481's mismatch/binding errors. | https://community.openclaw.ai/t/486 |
| Small-VPS OOM (#25) | **Mutated**: trigger is now read-only UI/network checks, not workload; ~1.32 GB idle / ~1.87 GB spike on a 2 GiB cap. | https://community.openclaw.ai/t/25 |
| Cron side-effecting tool replay (#201796) | **Refined, not mutated**: the duplicate re-invocation was shown to be **the model re-issuing the call** after "still running" results, not gateway watchdog replay. Reporter `rogerallen1` and maintainer `obviyus` converged on this in-window; issue closed with product request #201931 (guard currently fires at 20 repeats, damage at call #2). | https://github.com/openclaw/openclaw/issues/201796 |
| Channel-spam loop (new class, 2026.11.6) | **NEW failure class**: goal-continuation prompts produce repeated identical Discord messages "several times per minute, over about six minutes"; goal record showed `continuationTurns = 107`, `tokensUsed = 1736`; loop stopped only when the gateway was stopped. | https://github.com/openclaw/openclaw/issues/202246 (closed) |
| Silent token burn from default job (new class) | **NEW**: the default Proactive check runs a full main-session model turn every 30 minutes even when no owner route exists; `skipIfScratchEmpty` never applies because "missing scratch is not 'empty'". "On a hosted model this is a steady token cost." | https://github.com/openclaw/openclaw/issues/202146 (open) |

---

## 3. Reddit status — **still blocked (day 3)**

Single attempt, as instructed:
- `https://www.reddit.com/r/openclaw/new.json?limit=25` → **HTTP 403** (bot wall HTML, no JSON).

A `web_fetch` of a known r/openclaw thread permalink (https://www.reddit.com/r/openclaw/comments/1xz3o40/openclaw_2026115_138_fixes_and_18_qualityoflife/) returned HTTP 200 but an **empty body** ("Reddit", rawLength 6) — the content path is not served to us. A web search surfaced that permalink with title "OpenClaw 2026.11.5: 138 fixes and 18 quality-of-life…" but no body, score, or comment count could be read.

**Explicit negative finding: Reddit r/openclaw remains inaccessible. No posts, scores, comment counts or sentiment could be sampled. Reddit visibility for this window = unknown, NOT zero.**

---

## 4. ClawHub — new skill supply: **82 skills / 53 publishers**; adoption signals remain near-zero

Source: `https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200` (195 items returned; window = createdAt in [1795080480000, 1795166880000]).

| Metric (82 in-window skills) | Value |
|---|---|
| New skills in window | **82** |
| Distinct publishers | **53** (41 of them published exactly one skill) |
| Publishers with ≥2 skills | 12 — `mdjahid11978-design` (7), `guaikei` (5), `mitchkj25` (4), `hmakt99` (4), `dk-wordpress` (4), `seankwon816` (3), `sanketbhatia` (3), `rahulbsw` (3), `rootpjh` (2), `memeanalyst` (2), `j3ffyang` (2), `fethan56` (2) |
| **Installs** | **3** (`workouter-co/workouter` 1, `f-o-x11/agent-coach` 1, `hsichenwang/hsichenwang-task-memory` 1) |
| **Stars** | **1** (`questmeet/questmeet-skill`) |
| **Comments** | **0** |
| **Downloads** | **4,141** |
| Version bumps (versions > 1) | **13** |
| Summaries mentioning "OpenClaw" | **2** of 82 (`memeanalyst/hotel-rate-watcher`, `memeanalyst/flight-fare-watcher`) |

**Adoption read:** ~4,141 downloads vs **3 installs** across the whole in-window cohort ≈ **1,380× browse-to-install ratio**. Downloads behave like page views, not installs. **ClawHub supply is growing ~2× faster than its installed base**: 82 new skills in 24 h against 3 installs and 0 comments means the registry is a publishing surface, not a marketplace. Treat ClawHub counts as **supply**, never as adoption.

### Notable NEW use-case families (publisher → what it does)

1. **Agent governance / evidence discipline — `mdjahid11978-design` (7 skills, the largest in-window publisher)**: `jahids-mission-planner` ("bounded, verifiable mission plan with tasks, dependencies, budgets, risks, and approval points"), `jahids-governor-policy` ("Evaluate proposed agent actions against explicit scope, identity, permissions, risk, budget, and approval requirements"), `jahids-evidence-auditor` ("Check whether mission claims and deliverables are supported by reproducible evidence and explicit verification results"), `jahids-agent-builder`, `jahids-mcp-integration`, `jahids-memory-manager`, `jahids-recovery-manager` ("Plan safe recovery from failed or partial agent tasks using checkpoints, idempotency, rollback, and evidence preservation"). *All seven published within 20 seconds of each other (`2026-11-19T22:09:46Z`–`22:10:00Z`) — a single batch drop, not organic demand.* Downloads 46–48 each, 0 installs.
2. **Chinese social-platform intelligence (read-only) — `guaikei` (5 skills)**: `douyin-search-api`, `douyin-topic-hunter`, `tiktok-search-api`, `kuaishou-search-api`, `xiaohongshu-search-api` — keyword search of posts/videos/comments, hot lists, competitor and KOL monitoring, explicitly "不登录不发布" (no login, no posting). Downloads 17–70, 0 installs.
3. **WordPress / WooCommerce operations — `dk-wordpress` (4 skills)**: `wordpress-content-sync`, `wordpress-import-export`, `wordpress-site-migration`, `woocommerce-sync-pro` — staging↔production content sync, bulk CSV/XML/JSON/XLSX import-export, whole-site migration ZIPs, and WooCommerce products/orders/customers/coupons/reviews/custom-tables sync. Downloads 63–65, 0 installs.
4. **Agent-to-agent communication — `seankwon816` (3 skills, "ForAgent")**: `foragent-agent-to-agent` ("Let two AI coding agents (Claude Code, Codex, Grok, Antigravity, Cursor, Windsurf, VS Code) talk directly across terminals, computers, or teammates without manual copy-pasting"), `foragent-call` ("Connect two AI agents by private phone number so they can talk to each other and share files"), `foragent-file-transfer` ("Send and receive files up to 25 MB directly between two AI agents … with human permission checks"). Downloads 44–45, 0 installs.
5. **AI-search visibility (AEO/GEO) — `mitchkj25` (4 skills)**: `whywontai`, `ai-visibility-scan`, `check-ai-crawler-access`, `agent-directory-listing` — why AI assistants don't cite a site, robots.txt crawler gating for GPTBot/ClaudeBot/PerplexityBot/CCBot/Google-Extended, and listing a product in agent directories (MCP Registry, Claude Connectors, ChatGPT apps, skills.sh, Manus). Downloads 49–51, 0 installs.
6. **Repo/distribution readiness scoring — `hmakt99` (4 skills)**: `launch-check` ("Scores it 0-100 by fixed rules (README clarity, install line, licence, releases, CI, activity)"), `agent-ready-check` ("public ScBee Agent-Ready score (0-100, fixed rules) … shows the three fixes worth the most"), `board-handoff` ("For agents that take tasks from a Vercel Board … reply in the task's thread … and hold the task for a person's approval"), `find-agent`. Downloads 49–78, 0 installs.
7. **India tax & identity compliance (offline) — `sanketbhatia` (3 skills)**: `india-income-tax` (new-vs-old regime for TY 2026-27, `80C`/NPS break-even), `india-gst` (GSTIN validation, CGST+SGST/UTGST vs IGST split, Rule 46 invoices, e-invoice/e-way-bill obligations), `india-id-check` (Aadhaar Verhoeff checksum, PAN, IFSC, UPI, DL, passport, voter ID, CIN, LLPIN, Udyam). Downloads 71–72, 0 installs.
8. **Single-use-case specialists**: `zkeviny/sealed-audit-en` — sealed due-diligence audit logic ("the logic is never readable", data never leaves the auditee) for "investment due diligence, supplier audits, internal-control and data-compliance checks"; `rootpjh/okf-markdown` + `okf-wiki-mcp` — OKF v0.2 meeting-transcript → Obsidian knowledge-graph vault + offline stdio MCP querying; `namebianhua/taobao-listing-copy` (Taobao/Tmall listing copy: 30-char title, 5 hero images, 7-screen detail page, FAB table, ad-law compliance) and `bilibili-video-packager`; `fethan56/mining-contract-generator-lite` and `ai-advisor-lite` (paid SkillHub upsell at ¥1.90/run); `j3ffyang/md-to-medium` and `md-to-twitter`; `duplicati/duplicati-backup` ("Undo for agents"); `solvopus-tech/agent-yurt`; `memeanalyst/flight-fare-watcher` + `hotel-rate-watcher`; `workouter-co/workouter` (Apple Watch workouts, MCP); `aidansiegel/codethrift` (CC0 shelf of agent-written code to reuse); `perqele/dial-phone-numbers`; `steveveivo/multi-agent-im-onboard-en` ("list it for rent to earn revenue share" on ShareOpen).

### Skill whose stated purpose is measuring/justifying automation value — **1 new in-window**
- **`f-o-x11/agent-coach`** (created `2026-11-19T19:28:15.093Z`, versions 3, 1 install, 69 downloads, 0 comments) — summary: "Register with Agent Coach (upskill.coach), set one north-star goal, get vetted skills and MCP servers matched to it, and check in daily to get a **keep / temporary / remove verdict on each installed item**. Use when your owner wants to know **which skills and tools are worth keeping**." → a direct "is this automation earning its keep" instrument, delivered as a hosted service.
- Two adjacent but **carry-over / out-of-window** items, recorded so they are not double-counted: `zuoyunlai/mechanism-value-verdict` was created `2026-11-19T07:01:06.337Z` — **before** the window opens (09:28Z) → carry-over from yesterday; `mitchkj25/whywontai` and `hmakt99/launch-check` produce **scores** (SEO/AEO/GEO score; 0-100 readiness score) but score *repos and sites*, not automation value.

---

## 5. Real-world deployments / use cases in-window: **essentially none new**

### 5.1 Explicit negative on quantified ROI
**No customer-facing, quantified ROI was published in-window.** No in-window source states hours saved, dollars saved, revenue, users served, or tickets deflected for a named organisation using OpenClaw. This is an explicit negative, not a gap in collection: Discourse, GitHub, ClawHub, the official blog, the Claw Report and ClawStat were all read in-window.

### 5.2 The one widely-cited ROI number is **out of window (carry-over)**
- "**How I Reclaimed 32 Hours/Week with DIY AI Agents (OpenClaw Case Study)**" — https://dev.to/agencyboxx/how-i-reclaimed-32-hoursweek-with-diy-ai-agents-openclaw-case-study-1bp0
- API metadata (`https://dev.to/api/articles/...`): **`published_at: 2026-04-12T02:22:56Z`**, 8 min read, 0 comments, 0 positive reactions → **~7 months old, not in-window**. Carry-over only.
- Its claims (for the cumulative record): "Over 12 months, across **62 active agency clients and 10 team members**, we tracked every automated action. The result? We recovered **4 full-time equivalent days per week – that's 32 hours**. At our blended rates, that's an **annual operational capacity boost between $183,000 and $319,000**. Our system runs on a dedicated Mac, costing roughly **$3 to $4 per day in AI tokens**." Methodology stated: task mapping → baseline human time → volume × time → subtract human review time → aggregate.
- **Evidence quality:** self-reported by the vendor, no independent audit, no linked logs, no external corroboration. **Marketing-grade claim; do not cite as in-window ROI.** It is also *self-reported by an agency selling the method*, i.e. a promotional artifact with an incentive to overstate.

### 5.3 Marketing/SEO surfaces with no evidence (explicitly excluded)
- `https://openclawroadmap.com/monetization-real-world-case-studies.php` — undated listicle, no per-case numbers, no verification → excluded.
- `https://ubos.tech/openclaw-in-production-a-real-world-case-study/` — undated, no metrics → excluded.
- `https://insights.reinventing.ai/articles/openclaw-enterprise-ai-agents-production-2026-03-10` — dated 2026-03-10 → carry-over, out of window.
- `https://www.forbes.com/sites/victordey/2026/09/29/oracle-fusion-claw-adapts-openclaws-agentic-ai-approach-for-enterprises/` — 2026-09-29 → carry-over.
- `https://crewclaw.com/blog/openclaw-for-business-use-cases` — undated listicle → excluded.
- `https://openclaw-ai.dev/` — independent hub; showcase entries ("Smart Email Triage Agent", "Daily Standup Bot", "CI/CD Watchdog", …) carry **no metrics, no dates, no customer names**; its "145K+ GitHub Stars / 100+ Agent Skills / 20K+ Forks" figures are unverified marketing copy. Its skills directory shows install-style numbers ("claude-connect 12.4K", "news-aggregator 8.7K") that are **not ClawHub numbers** and could not be reconciled with any ClawHub endpoint → excluded.

### 5.4 Genuine in-window deployment evidence found (all *individual*, all *non-commercial*)
- **GitHub #201880** — `superstizzle` update-failure report on 2026.11.5 / darwin-arm64 / managed-service: "Failed phase: update", "Recovery outcome: verified serving 2026.11.5; restart remains unsafe (runtime-verification-failed)". A real operator's failed in-place upgrade, no business metric. https://github.com/openclaw/openclaw/issues/201880
- **GitHub #201796** — `rogerallen1` runs an isolated cron `agentTurn` on a Raspberry Pi (Linux arm64) with a local `unsloth/Qwen3.8-Flash-Next-GGUF` endpoint, schedule `15 8,20 * * *` Europe/London, delivering its own Telegram messages. A real self-hosted deployment, and the source of the "model re-issues the call" diagnosis.
- **GitHub #202209** (PR, open) — `hannnnn-l`: phone / Google Meet / Teams / Zoom / Slack-huddle / FaceTime **voice consults currently fail on Claude-CLI-backed agents** with `No API key found for provider "anthropic"` while typed and Discord-voice paths work. The PR routes consults through normal agent turns; the author tested "the bundled plugin's talk driver and consult controller with a real Claude CLI agent on a Linux test Gateway" but "ha[s] no Mac for a live call". This is the clearest in-window **production voice-automation gap** (and a concrete reason voice deployments stall).
- **GitHub #202314** — `scottss96`: "Process supervisor wrappers and stdio MCP servers are not reclaimed (macOS, 2026.11.6)" → resource-leak pain for long-lived host deployments.
- **GitHub #202021** — `henrylast42`: since 2026.11.6 the Docker image cannot run under any uid other than 1000 (`/home/node` is now `0700` on the trixie base), so `openclaw onboard` fails with EACCES even when volumes are owned by that uid; 2026.11.3 worked. Directly breaks the "run OpenClaw in Docker as an arbitrary uid" deployment pattern.
- **Discourse #25 (berot3)** and **#486 (Francesco_Caristo)** — the two live user deployments described in §2.
- **Discourse #488 (Kyle_Lewis / CommentMetro)** — a public, agent-facing web service being launched on top of OpenClaw with an AI-labelled account and anti-spam governance.

### 5.5 Engagement-funnel numbers in-window: **none**
No in-window post reports a reach → signups → shipped-artifact funnel. The nearest is out-of-window: #467's "300 people reached → one stranger signed up → shipped ASCII Mischief" (that post is `2026-11-18T14:20:11.729Z`, i.e. **carry-over from yesterday's window**, and must not be re-counted). CommentMetro (#488) publishes rate limits and a "most pages are still quiet" caveat but no funnel.

---

## 6. ROI: **explicit negative**

**There is no customer-facing, quantified ROI in-window.** Across Discourse, GitHub (issues + PRs), ClawHub, the official blog/showcase, The Claw Report and ClawStat, not one in-window artefact reports hours saved, cost avoided, revenue, headcount replaced, users served, or tickets deflected for a named organisation. The only quantified business numbers located anywhere in this research pass are (a) the 7-month-old agencyboxx case study (carry-over, self-reported, unverified) and (b) third-party SEO listicles with no numbers at all.

The only *cost*-shaped in-window evidence runs the **other** way:
- **#202146** (open): the default Proactive check burns a full main-session model turn **every 30 minutes** with no owner route and throws the work away → "On a hosted model this is a steady token cost."
- **#202246**: a goal-continuation loop produced `continuationTurns = 107`, `tokensUsed = 1736` and spammed a Discord channel "several times per minute, over about six minutes" before the gateway was stopped.
Both are **quantified negative ROI for default configuration** — the cost is measurable, the benefit is not.

---

## 7. Sentiment summary

**Working well**
- The **self-service ecosystem**: 82 new skills / 53 publishers in 24 h, including genuinely non-trivial engineering (WooCommerce/WordPress sync, OKF vault + MCP, sealed audits, India tax/GST/ID tooling). Authors are writing for real operators, not demos.
- **Skill-level security and provenance thinking is now mainstream**: `rahulbsw/open-agent-scan` (MCP config + skill security review before adoption), `zkeviny/sealed-audit-en` (audit logic never readable by the auditee), `mdjahid11978-design`'s whole governor/evidence/budget suite, and `f-o-x11/agent-coach` (keep/temporary/remove verdict per installed item).
- **Multi-agent operation is normalising**: `seankwon816` ships agent-to-agent calls + file transfer + phone-number agents; `steveveivo` onboards agents to a rent-out IM network.
- **Honest self-reporting**: #488's "Honest caveats… most pages are still quiet", #25's "we can't attribute the cause", #201796's reporter withdrawing an invalid A/B result. Community accuracy is improving, which makes the negative findings trustworthy.
- **Maintainer responsiveness on GitHub is strong and evidence-driven**: `obviyus` ran a live 4-minute-tool reproduction on #201796 and then corrected the reporter's own hypothesis with transcript evidence; `roboclaw-bot` requested a redacted UTC timeline on #202246; `steipete` and `Patrick-Erichsen` iterate with bots in-window on #202338 / #202013. The bot review pipeline (`clawsweeper`) is active on every PR touched.

**Broken / friction**
- **Zero maintainer presence on Discourse for a full 24 h** while five new topics (including a purchase-intent thread and a production iMessage failure) sat unanswered. joe's last word was 2026-11-19T02:14Z.
- **#419 is now past ~10 days unanswered** (last post `2026-11-10T07:46:09.957Z`) — ClawHub "Needs review" with no SkillSpector result is a publisher-side dead end with no escalation path.
- **The code-mode host keeps changing shape**: #481 (dynamic tool catalog mismatch → stale thread binding, 2026-11-18) → #486 (V8 CodeRange virtual-memory reservation SIGTRAP, 2026-11-19) on the same 2026.11.5/macOS arm64 combo. Two different signatures, one subsystem, two days running.
- **Upgrade cost is paid by users, not docs**: #489's author needed ~2.5 h of self-experimenting to find "main sessions" in the new UI; ClawStat advises most operators to stay on v2026.11.3, describing the current release as "Too new to call — no credible blocker so far, not an all-clear yet (medium confidence), assessed 2026-11-20".
- **Churn + duplication on new features**: the 2026.11.6 Discord duplicate-message loop (#202246) is a *new* user-visible failure class introduced by goal-continuation on a release two days old.
- **ClawHub's engagement surface is inert**: 0 comments across 82 new skills; only 3 installs; ~1,380× downloads-to-installs. Also visible in the Reddit/Discourse split: even where a skill is well-formed (#488), the response is nil.

**Surprising**
- **Half a dozen ClawHub skills now exist purely to measure whether automation is worth keeping** (`agent-coach` keep/temporary/remove verdicts; `launch-check` and `agent-ready-check` 0-100 readiness scores; `mechanism-value-verdict` carry-over). The market has started selling **cost-benefit instrumentation** because nobody else will publish ROI. That is a signal that the ROI gap is felt, not that it is filled.
- **The strongest real-world ROI claim in the corpus is 7 months old and self-reported** — and meanwhile the measurable, in-window cost of OpenClaw (a 30-minute full-turn default job, a 107-turn Discord loop) is documented in fine detail. The evidence base is inverted: costs are precise, benefits are marketing.
- **`mdjahid11978-design` published 7 governance/evidence skills in 20 seconds** — batch-dropped, 0 installs. Supply is being manufactured, not requested.
- **A malicious-looking topic about hosted-instance BYO-Anthropic-key abuse was flagged and hidden by the community within ~12 minutes** of posting (`#491`, created `2026-11-20T06:22:32.461Z`, spam bot reply `2026-11-20T06:34:16.259Z`). Community moderation works; the signal (hosted-instance key abuse is a live concern) is being suppressed as noise.
- **WordPress/WooCommerce operations are now a fully-covered ClawHub vertical** (4 skills, one publisher, one afternoon) — a mid-market content-commerce stack run by an agent is being assembled as a commodity.

---

## 8. Verification notes (what could NOT be confirmed)

1. **Reddit r/openclaw** — inaccessible (HTTP 403 on `new.json`; 200-with-empty-body on a known thread permalink). **No Reddit sentiment, scores or comment counts could be sampled.** Visibility unknown, not zero.
2. **No maintainer roster beyond `joe`** — `https://community.openclaw.ai/u/CommunityHelper/activity.rss` and `/u/OpenClawSupport/activity.rss` both return **404**, so those staff accounts either do not exist or have no public activity feed. "Zero maintainer replies in-window" is verified against `joe` + `posts.rss` + the `latest.json` topic list; it cannot be verified against a complete staff list.
3. **ClawHub counts are a live snapshot**, captured at fetch time on 2026-11-20 (~09:30–09:35Z). Downloads, installs and stars drift continuously; re-verify before quoting.
4. **ClawHub `q=`/`search=` parameters on `/api/v1/skills` do not filter** — `?q=cost-benefit` and `?search=roi` both returned the same unfiltered first page. The cost-benefit skill scan was therefore done over all 195 fetched items with local keyword matching, which covers the newest ~195 skills but not the full registry.
5. **ClawStat.us keeps only its newest assessment per version** — the "2026.11.6 Too new to call" verdict and its "50 tracked issues / 5 total 👍 / ~3M weekly npm downloads" figures are quote-time values from a page that is rewritten on every re-assessment; no 2026-11-19 capture is on disk for comparison.
6. **The agencyboxx 32-hours case study could not be independently verified** — dev.to metadata confirms it is from 2026-04-12 (out of window); its methodology is described but no logs, no audit and no third-party confirmation are linked.
7. **`openclaw-ai.dev` directory numbers ("12.4K", "8.7K" installs) could not be reconciled with any ClawHub endpoint** and were excluded rather than reported.
8. **Two web_search calls returned "DuckDuckGo returned a bot-detection challenge"** (`"OpenClaw" deployment case study November 2026 production hours saved`, `openclaw agent deployment company team production "case study" 2026`), so search coverage was thinner than budgeted. Two other web_search calls succeeded. Total web_search used: **4**; total web_fetch used: **8** (dev.to article, dev.to API metadata, theclawreport.com, openclaw-ai.dev, clawstat.us, openclaw.ai/blog, openclaw.ai/showcase, Reddit permalink) — both at budget.
9. **Discourse topic id 491** is deliberately excluded from community-activity counts: initial post hidden by community flag, only reply is `discourse_ai_spam`.
10. **GitHub label tallies and the 187-issue window total come from `search/issues` first-page results** (capped at 100 per query); the "187 issues created in window" figure is the API's own `total_count`, but any *per-label* breakdown from this run would be a first-100 count, not a window total — no per-label breakdown is claimed here.
11. **No engagement-funnel figure (reach → signups → artifact) was found in-window**; the nearest candidate (#467 Octogee, "300 reached → 1 signup") is out-of-window carry-over and was not counted.
12. **`/cron/default-proactive-job.ts`** (path named in GitHub #202146) is a source path in the upstream repo, not a file in this workspace — it was not read locally; the issue body quotes it and the maintainer comment `aron-intframe` references `src/cron/scratch-contract…` (truncated in the API payload).

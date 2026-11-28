# OpenClaw — Community / Use Cases / Deployments findings
**Window:** 2026-11-09T09:28:00Z → 2026-11-10T09:28:00Z (24h)
**Baseline compared against:** 2026-11-09 run (window ended 2026-11-09T09:28Z)
**Task:** Community sentiment + real-world use cases, showcases, deployments, ROI metrics.
**Tool budget used:** web_search ×3 (of 5), web_fetch ×1 (of 2). Structured feeds/APIs retrieved via `exec`+`curl`.

---

## 0. Executive summary / deltas vs baseline

| Metric | 2026-11-09 run | 2026-11-10 run (this window) | Delta |
|---|---|---|---|
| Reddit new posts in 24h | 8 | **4** | −4 (quieter) |
| Reddit substantive posts (excl. memes/noise) | ~8 (all substantive-ish) | **3** (1xrvr49, 1xru5k2, 1xrtu21) | −1 |
| Discourse new topics | 6–7 seen | **5 new topics** (415, 416, 417, 418, 419) | flat |
| Discourse in-window replies on older topics | 0 noted | **2 topics updated** (404 last 11-09T23:26Z, 385 last 11-09T15:24Z) | +2 |
| New GitHub repos | 56 | **57** | +1 |
| Max stars on any new repo | 3 | **3** (RicchiutiDev/ClawNova) | flat |
| ClawHub new skills | ≥94 (lower bound, capped) | **108 (exact)** — paginated until before window start | +14 vs prior lower bound |
| First-party ROI / revenue attribution | ZERO | **STILL ZERO** | no change |
| Discourse "Codex" keyword hits | 13 | not re-counted in-window (budget) | unknown |
| Discord / X | inaccessible | **still inaccessible** | no change |

**Headline:** The dominant story of this window is the **cross-provider fallback regression** (PR #172590, shipped v2026.10.10), which has now escalated from "one bug report" to **a documented commercial freeze**: two separate practitioners state in-window that they are *pausing new OpenClaw deployments/recommendations at their clients* because of it. Second story: **Focus Week on Templates** launched by maintainer @patrickerichsen (Discourse #415, "OpenClaw Templates Showcase"), with a template called "Competitor Watch" as the reference implementation.

---

## 1. REDDIT r/openclaw — 4 in-window posts

Source: https://www.reddit.com/r/openclaw/new/.rss?limit=50 (parsed; filter `published >= 2026-11-09T09:28:00Z`)

### 1.1 `1xrvr49` — "Openclaw Broke Fallback Models across providers" (2026-11-09T16:11:11+00:00)
**Sentiment: Problems (high-impact).** Author `/u/wreckage-menace` describes an agency that has "been building on OpenClaw since its inception":

> "It is also why we test our automations on Hermes. Until per-job fallback accounts across vendors are supported, we are **pausing new OpenClaw recommendations and deployments at our clients**."

Verbatim technical claims (author-reported, not independently verified by me):
- PR #172590 (shipped in v2026.10.10) locks each scheduled automation to a single provider account; fallbacks to any other vendor are refused.
- #192463 was reported as a P1 regression and closed as duplicate "by a bot 8 minutes later".
- #192009 is P2, unassigned, no PR, marked "needs-product-decision".
- "at least one is staying on an older version because of it."

Comment thread (5 comments read; full feed captured locally in `rc.xml`):
- `/u/jrmhlpr` 2026-11-09T17:01:23+00:00 — "I just had issues with the same thing. Yes this is annoying."
- `/u/xX_GrizzlyBear_Xx` 2026-11-09T18:12:46+00:00 — links an X post (`https://x.com/Pishgar/status/2119849561779048939`) as prior art. X is not collectable here, so the linked content is UNVERIFIED.
- `/u/Disastrous_Ad_6915` 2026-11-09T20:15:58+00:00 — "I hadn't even mentioned it—I thought I was the only one with this problem…"
- `/u/obviyus` 2026-11-10T04:23:03+00:00 — maintainer: **"I'm on it, sorry for the issues. Reviewing #192009 🫡"** ← first in-window maintainer acknowledgment in this window.
- `/u/haderach_ram` 2026-11-10T05:15:40+00:00 — argues the "closed-as-dup + P2 needs-product-decision" pattern, not the bug itself, is the real signal.

Source: https://www.reddit.com/r/openclaw/comments/1xrvr49/openclaw_broke_fallback_models_across_providers/

### 1.2 `1xru5k2` — "My Openclaw now calls my phone when it needs me. No Twilio, no phone number, free" (2026-11-09T15:11:15+00:00)
**Sentiment: Working well (with friction caveat).** Author `/u/mutonbini` promotes **agentring**, an Apache-2.0 skill+Android app that lets an agent ring the user's phone over VoIP (self-hosted server, no Twilio, no phone number). Install path given: `openclaw skills install agentring --global`. Repo `mutonby/agentring` — 342 stars, 41 forks, created 2026-10-23, last push 2026-11-09T22:35Z, Apache-2.0, hosted offering at agentring.io.
Comment thread (13 comments; `c_1xru5k2.xml`):
- `/u/cornmacabre` 2026-11-10T02:05:42+00:00 — sharp community pushback on adoption friction: *"the very large majority of folks even on the technically literate side of the spectrum will have approximately no idea… what downloading an APK means… it's a serious UX mess, and barely graduated out of breadboard for software territory."*
- `/u/sakura2277` 2026-11-10T06:51:32+00:00 — "that's why instinct or muse is more popular among non tech folks"
- `/u/Elegant-Conflict3910` 2026-11-09T20:43:10+00:00 — iOS gap; author replies the App Store costs "$100 for the store" per year, iOS is "for now" not supported.
- `/u/Smart-Oil-1882` 2026-11-09T23:06:16+00:00 — describes sideloading via `xtool` on Linux w/ self-signed certs over WiFi.
- `/u/xX_GrizzlyBear_Xx` 2026-11-09T18:15:45+00:00 — asked author to remove website link; author complied 2026-11-09T21:01:45+00:00.
- `/u/Nanotechnician` 2026-11-10T03:10:19+00:00 — "after little tweaks it works excellent".
Source: https://www.reddit.com/r/openclaw/comments/1xru5k2/my_openclaw_now_calls_my_phone_when_it_needs_me/

### 1.3 `1xrtu21` — "The OpenClaw Android app is awful, so I rebuilt it myself" (2026-11-09T14:59:20+00:00)
**Sentiment: Problems → Working well (community fork).** Author `/u/SheepherderRude5767` built **ClawNova** (`RicchiutiDev/ClawNova`, MIT, created 2026-11-09T13:56:05Z, 3 stars / 0 forks) — "a customized Android client for connecting to your OpenClaw Gateway", agent-first home screen, per-agent icon shapes/colors, Android 12+, requires an OpenClaw Gateway. Source: https://www.reddit.com/r/openclaw/comments/1xrtu21/the_openclaw_android_app_is_awful_so_i_rebuilt_it/
Comment thread (8 comments; `c2_1xrtu21.xml`):
- `/u/hannesrudolph` 2026-11-09T16:03:18+00:00 — "Why not contribute to the Android openclaw app instead of making your own?" — appears to be an OpenClaw-side maintainer (same handle replied on Discourse #404/#416/#417). 2026-11-09T16:03:34+00:00: **"Yeah totally. We're working on it. It's meh atm"** ← official acknowledgment that the first-party Android app is known-weak.
- 2026-11-10T01:00:49+00:00 / 01:01:44+00:00 — "Not interested in contributing?" / "Sure, just tell me how to do it"; `/u/__SlimeQ__` 2026-11-10T04:18:36+00:00: "make a pr".
- `/u/rubio86` 2026-11-09T15:52:02+00:00 — "I love OC but hate their Android app. Will give this one a try"
- `/u/MattH665` 2026-11-10T04:20:29+00:00 — points to a previously posted Open WebUI app; recommends the two sides "work with the OpenClaw team to make a new app".

### 1.4 `1xscckm` — "When you know you've been working too hard. F$%k Fable..." (2026-11-10T03:21:43+00:00)
**Sentiment: Noise / meme.** No usable content. Comment feed returned 0 bytes twice (blocked); comment-level sentiment = **UNKNOWN**, not "no comments".
Source: https://www.reddit.com/r/openclaw/comments/1xscckm/when_you_know_youve_been_working_too_hard_fk_fable/

### 1.5 Reddit channel notes
- Reddit `.json` endpoints remain blocked (403); `.rss` for posts works; per-post comment `.rss` works intermittently (worked for 1xru5k2, 1xrtu21, 1xrvr49; failed twice for 1xscckm with a normal browser UA).
- No first-party ROI/revenue number appears anywhere in the in-window Reddit corpus.

---

## 2. DISCOURSE community.openclaw.ai — 5 new topics, 2 older topics updated

Source: https://community.openclaw.ai/latest.json (30 topics), per-topic https://community.openclaw.ai/t/<id>.json

### 2.1 NEW — #415 "OpenClaw Templates Showcase" (created 2026-11-09T20:32:55.658Z, 2 posts, 15 views)
**Sentiment: Interesting / Working well.** Maintainer `@patrickerichsen` opens the Focus Week on Templates: *"Share examploes of OpenClaw Templates that you've built!"* (typo is theirs). Second post (2026-11-09T20:33:28.529Z, score 31.4) documents the reference template:
- **Competitor Watch — ClawHub Templates**: "Watches three competitors' public product, pricing, and release pages and explains meaningful changes against your company's positioning."
- Onboarding: describe company, choose up to three competitors → weekly brief with evidence links.
- Agent/personality: "A concise research analyst"; Plugins: Parallel for web search; Automations: one weekly brief, **paused until the user approves**.
- Build rationale (self-reported): the author wanted one place pulling competitor product/pricing/release sources instead of X + newsletters.
Source: https://community.openclaw.ai/t/415/
Note: this is a template *launch*, not a template *marketplace*; the topic has 15 views and no community replies yet in-window — response is thin so far.

### 2.2 NEW — #416 "OpenClaw agent not responding on Telegram – model_not_found / OAuth errors" (created 2026-11-09T21:20:49.760Z, 2 posts, 3 views)
**Sentiment: Problems.** `@Antonio_Mariscal_Rod` on OpenClaw 2026.7.1-2, macOS LaunchAgent, Telegram channel, OpenAI OAuth (ChatGPT account), memory-core plugin: messages arrive but the assistant cannot answer (`model_not_found` / OAuth errors). Wants to restore service **without losing conversations, agent memory, workspace files or config**.
Maintainer `@jjjhenriksen` 2026-11-09T21:30:25.261Z replies with a triage protocol: back up `~/.openclaw` (contains credentials — keep private), then collect read-only diagnostics (`openclaw --version`, `gateway status`, `models status`, `models auth list --provider openai`, `models list --provider openai`, `config get agents.defaults.model --json`, `config get models.providers.openai.agentRuntime --json`), plus in-thread `/status`, `/codex status`, `/codex models` to separate "native runtime's account/model availability" from the broader catalog. Explicitly: "An unset runtime field is not automatically a problem." and "Don't delete or reinstall anything yet, and don't reset your Telegram conversation."
Source: https://community.openclaw.ai/t/416/

### 2.3 NEW — #417 "Is restricted scheduler access expected in the native macOS app with operator.admin?" (created 2026-11-09T21:41:34.455Z; last post 2026-11-10T05:24:54.443Z)
**Sentiment: Problems (confirmed bug).** `@Saul_Burgos`: native macOS app 2026.10.7 paired with `operator.admin`, Gateway on a Mac mini over private SSH tunnel, OpenClaw 2026.10.5 (1b58cb9), macOS 26.6.2 host / 27.0.1 client. The assistant replies: *"OpenClaw gives this WebChat restricted scheduler access, hiding the two jobs."* — jobs exist and their runs succeeded, but the native client cannot see them.
Maintainer `@jjjhenriksen` 2026-11-10T05:24:54.443Z: *"I've had this exact same issue with the native apps. I made a PR to fix this, which is awaiting review by the maintainers"* → links PR **#194443**.
Source: https://community.openclaw.ai/t/417/

### 2.4 NEW — #418 "OpenClaw 2026.11.1: How to safely archive a stale session while Gateway is stopped?" (2026-11-10T05:23:06.037Z, 1 post, 1 view)
**Sentiment: Problems (unanswered).** `@vc_war3` on Windows / 2026.11.1 (4ffdd20), Feishu plugin disabled: a historical Feishu session is marked done but still has a replayable `pendingFinalDelivery` with delivery state `prepared`; even with the plugin disabled, Gateway startup previously triggered `main-session-restart-recovery` and launched a background Agent run for that session. The official `sessions archive` command requires a running Gateway, but starting the Gateway may resume the session first → chicken-and-egg. **No replies yet.**
Source: https://community.openclaw.ai/t/418/

### 2.5 NEW — #419 "ClawHub skill hidden with 'Needs review' and no SkillSpector results — @qianlima-creator" (2026-11-10T07:46:09.858Z, 1 post, 2 views)
**Sentiment: Problems (publisher-side friction).** `@qianlima-creator` publisher of `qianlima-bidding-search` (Chinese tender/procurement/award-notice search) sees the skill hidden, "Needs review", with SkillSpector panel stating *"SkillSpector 的检测结果尚未公布于本次发布中。"* ("SkillSpector results have not yet been published for this release") — no actionable failure reason. **No reply yet.**
Source: https://community.openclaw.ai/t/419/

### 2.6 UPDATED (in-window replies on older topics)
- **#404** "GitHub CLI (gh) missing on managed Gateway – system authorization fails" (created 2026-11-08T18:06:16.691Z, 74 views, last 2026-11-09T23:26:03.283Z). `@Eduardo_Valentim` (2026-11-09T23:06:48Z) asks who provisions `gh` on a managed Gateway he has no shell access to, and what the documented alternative is for private workspace backup without host shell. Maintainer `@jjjhenriksen` (2026-11-09T23:26:03Z): *"What is your OpenClaw host? OpenClaw don’t recommend a specific host and would rather you host it on your own hardware or a VPS to which terminal you can control."* → **the managed-Gateway GitHub-connection path is effectively unsupported by maintainer guidance.** Source: https://community.openclaw.ai/t/404/
- **#385** "Safe update from 2026.10.3: SQLite worker queue capacity reached during snapshot" (created 2026-11-06T19:28:45.924Z, 32 views, last 2026-11-09T15:24:49.526Z). `@Joseph_Kapp` reports: state directory **≈23 GiB**, ~15 GiB free internally, state-only backup archive verified but workspaces excluded and opaque SQLite files not consistency-checked; asks whether stable **2026.11.2** contains the PR #178126 snapshot-queue fix and whether `OPENCLAW_STATE_DIR` also relocates Doctor's original-state capture and migration snapshots. Source: https://community.openclaw.ai/t/385/
- Checked and confirmed **no** in-window replies on #311 ("What's your Claw working on right now?") — last activity is 2026-11-07. The show-and-tell thread that carried last window's use-case corpus was quiet this window.

### 2.7 Discourse channel notes
- `https://community.openclaw.ai/new.json` returns **403**; only `/latest.json` + per-topic `.json` work.
- `/posts.json` lacks `post_stream` (per baseline) — per-topic `.json` remains the workaround.
- No Discourse topic contains a first-party ROI/revenue figure in-window.

---

## 3. GitHub — community builds, deployments, and the fallback issue thread

### 3.1 The fallback regression, escalating (Issues #192009 / #192463 / #196514, PR #194443)
**Sentiment: Problems (highest impact).** In-window GitHub activity on issue **#192009** "[Feature]: Explicitly authorize cross-provider cron fallback accounts" (open; labels `P2`, `clawsweeper:no-new-fix-pr`, `clawsweeper:needs-product-decision`, `clawsweeper:source-repro`, `impact:auth-provider`; created 2026-11-03T15:20:51Z; **updated 2026-11-10T09:20:56Z**):
- **`@YvesLaRose` 2026-11-09T13:56:48Z** — "We run OpenClaw as the control plane for a small company, with about **80 scheduled agent jobs**, and we're **staying on 2026.10.6** because of this change." Fallback chain Claude subscription → paid Anthropic API key → OpenAI, for unattended recovery when a subscription runs out or a vendor has an outage. Also asks to make adopting older jobs (#188761) scriptable — "doing it by hand across this many jobs is a real migration cost". Explicitly not running 10.10 themselves: "This is based on the PR and the reports here."
- **`@tedcahall` 2026-11-09T15:23:43Z** — production install 2026.11.1, Linux; "Cross-vendor fallback is the redundancy our clients require"; verified rejection message: *"Automation candidate is incompatible with its recorded inference account and route."*; "The single-account check is still in v2026.11.2 and on main."; **"Until this is supported, we're pausing new OpenClaw deployments for our clients."**
- **`@dankarization` 2026-11-10T07:55:43Z** — production install 2026.10.10 (`736f5f7`); shows the **same-provider** half of the gap: two OAuth accounts of the *same* provider (`openai:account-a`, `openai:account-b`), account A exhausted → account B never attempted, because the planner pins `authProfileId: binding.profileId` with `allowAuthProfileFallback: false` and `onSuccessfulAuthProfile` throwing *"Automation inference account changed during execution."* (source file cited: `src/cron/run-inference.ts`). Filed **#196514**.
- **`@TheDoshus` 2026-11-10T09:20:56Z** — upgraded 2026.10.9 → **2026.11.2**; doctor's `inferenceBinding` bound **eight** of their scheduled jobs to one OpenAI account; error: *"Resolved credentials do not belong to the automation inference owner."* Wants to send a PR; proposes `openclaw automations edit <job> --fallbacks xai/grok-4.7@<profileId>,...` keeping the `@profileId` (currently dropped when candidates are built), with per-candidate caller-consent captured at edit time; asks maintainers to choose between `fallbackBindings: [...]` beside `inferenceBinding` vs turning `inferenceBinding` into a list.
Source: https://github.com/openclaw/openclaw/issues/192009
- **Issue #192463** "[Bug]: Regression in 2026.10.10 — upgrading removes cross-provider fallback from existing cron jobs" — closed, labels `P1`, `impact:auth-provider`, created 2026-11-04T01:54:34Z, closed 2026-11-04T02:02:13Z (~8 min later; author says closed as duplicate by a bot). Source: https://github.com/openclaw/openclaw/issues/192463
- **Issue #196514** "Cron account continuity also blocks same-provider multi-account fallback, not only cross-provider" — created 2026-11-10T07:55:34Z, **closed 2026-11-10T08:02:05Z**, labels `P2`, `impact:auth-provider` (closed as duplicate of #192009). Source: https://github.com/openclaw/openclaw/issues/196514
- **PR #194443** "fix: preserve gateway administrator permissions across native UI clients" — author `jjjhenriksen`, **state open**, created 2026-11-07T03:47:20Z, updated 2026-11-08T17:52:56Z, `merged_at: None`, 9 comments / 0 review comments. Still unmerged at window close; it is the fix for Discourse #417. Source: https://github.com/openclaw/openclaw/pull/194443

**Impact read (attributed):** two named practitioners (`/u/wreckage-menace` and `tedcahall`) state in-window that they are **pausing new OpenClaw deployments / recommendations for their clients**; one (`YvesLaRose`) has pinned production to 2026.10.6 with ~80 scheduled jobs; one (`TheDoshus`) has 8 affected jobs. These are self-reported production facts from named accounts, not verified telemetry. **This is the only quantified deployment-impact signal found in-window** — and it is negative.

### 3.2 New GitHub repositories (57 created in window)
Query: `https://api.github.com/search/repositories?q=openclaw+created:>2026-11-09T09:28:00Z&sort=stars&order=desc&per_page=100` → `total_count: 57`. Max stars on any new repo = **3**. Local copy: `gh.json`.

Notable (star counts are real GitHub counts at fetch time, ~2026-11-10T09:35Z):
| Repo | Created | Stars | License | What it is |
|---|---|---|---|---|
| `RicchiutiDev/ClawNova` | 2026-11-09T13:56:05Z | 3 | MIT | Customized Android client for OpenClaw (community fork of the official app) |
| `2867297362mjb-sketch/openclaw-teamorouter-provider` | 2026-11-09T18:21:46Z | 1 | — | TeamoRouter model provider: one OpenAI-compatible key for Qwen, Kimi, GLM, DeepSeek… |
| `jjjhenriksen/agent-templates` | 2026-11-09T17:36:16Z | 1 | MIT | "Human-sounding OpenClaw planning agents for celebrations, travel, and community coordination" (maintainer-authored; pairs with the Templates Focus Week) |
| `edliuustc/pocket-ai-raycast` | 2026-11-10T03:15:23Z | 1 | — | Open-source Raycast AI alternative for macOS/Windows; bring-your-own-models or Hermes |
| `roasaurus/openclaw` | 2026-11-09T22:37:36Z | 0 | — | ROASaurus plugin: MCP server (OAuth 2.1, dynamic client registration) + 3 skills: ads-audit, wasted-spend, tracking-health |
| `andikapratamazaid/omniforge-agent-gateway` | 2026-11-10T05:02:46Z | 0 | — | Multi-platform agent gateway: one process serving Telegram, Discord, Slack, WhatsApp, Signal + CLI, voice memo transcription, command allowlist, scheduled jobs, one-command migration from OpenClaw/Claude Code/Codex/Cursor/n8n, deterministic zero-API-key demo mode, pure Python stdlib |
| `AlexandrLebegue/omarchy-openclaw` | 2026-11-09T22:15:17Z | 0 | — | Omarchy shell plugin: native agent chat, keyboard shortcuts, gateway status |
| `sjcsoftware/barclaw` | 2026-11-09T12:16:04Z | 0 | — | Talk to your OpenClaw agent from the Linux menubar |
| `brianmcguire/openclaw-run-receipts` | 2026-11-10T03:01:02Z | 0 | — | Dashboard widget verifying that the latest automation produced a *fresh* JSON report (green run ≠ fresh report); requires OpenClaw 2026.11.2+ / Node 24.16+ |
| `hidenori-endo/openclaw-team-login` | 2026-11-09T23:33:39Z | 0 | — | Per-requester AWS IAM Identity Center + Google sign-in for shared OpenClaw agents |
| `zizhongxiao-svg/openclaw-cursor-runtime` | 2026-11-09T13:56:46Z | 0 | — | Run Cursor agents as an OpenClaw model runtime (tool caps, long-lived sessions) |
| `Timothylock/muse-openclaw-shim` | 2026-11-10T07:22:47Z | 0 | — | Exposes an OpenAI/OpenClaw-compatible endpoint so devices can talk to Muse |
| `zyfxkqqa/muse-wxbot` | 2026-11-10T08:10:39Z | 0 | — | Chinese: link WeChat ClawBot to OpenClaw via the Muse channel |
| `beaconclaw/beaconclaw` | 2026-11-10T06:49:27Z | 0 | — | Lightweight sidecar agent monitoring OpenClaw instances, outbound-only health reporting |
| `MertBasar0/discord-signal-radar` | 2026-11-10T02:27:47Z | 0 | — | Agent Template: ranked Discord debate-evolution digests + 3-tier personal/project split |
| `LeaMedSil/afrocreator-agentes` | 2026-11-09T21:02:51Z | 0 | — | Portuguese: team of up to 10 AI agents for content creators, customizable installer |
| `dubr1k/sociology-agent-skills` | 2026-11-09T12:10:56Z | 0 | — | Russian-language sociology skills (questionnaires, interviews, surveys, data analysis) for Hermes/OpenClaw |
| `deniscorral3am/whatsapp-skill` | 2026-11-09T18:49:41Z | 0 | — | Spanish: install OpenClaw, link WhatsApp via QR, work as an AI employee on WhatsApp |
| `melihkarasu/vibecoding-kvkk-gdpr` | 2026-11-10T07:37:29Z | 0 | — | Turkish: KVKK (6698), GDPR (2016/679), ETK/IYS (6563), TKHK (6502) compliance for coding agents |
| `guowei-xie/vangogh` | 2026-11-10T08:36:39Z | 0 | — | Chinese: data-analysis-team content hub (metric definitions, SQL templates, prompts, table permissions) packaged as role packs for Claude Code/Codex/openclaw |
| `saariuslystoned/blobster-factory` + `blobster-factory-site` | 2026-11-09T17:47:24Z / 01:03:04Z | 0 / 0 | — | Open-source workshop, SVG + #FF00FF 3D GIF avatar compiler, **template linter**, starter "craftsman" templates for OpenClaw agents; site = "OpenClaw Agent Template Showcase & Directory (blobster.dev)" |
| `animeapi-ai/animeapi-skill` | 2026-11-10T06:32:55Z | 0 | — | Anime image generation at $0.003/image |
| `JordanNewell/openclaw-guru` | 2026-11-09T11:27:53Z | 0 | — | OpenClaw expert subagent for Claude Code with machine-enforced constraints |
| `sprintberlin/openclaw-zoho-billing-mcp-skill` | 2026-11-09T10:04:25Z | 0 | — | Zoho Billing MCP action catalog |
| `HANSHOJIN/FN-OPENCLAW` | 2026-11-10T06:14:43Z | 0 | — | OpenClaw for fnOS (NAS) |
| `roplizeramr-blip/openclaw-bootstrap` | 2026-11-10T06:55:27Z | 0 | — | Bootstrap for CranL: OmniRoute provider catalog + DuckDuckGo web search + sync automation |
| `Cloudbase-Freeflyers/runpod-setup` | 2026-11-09T20:11:23Z | 0 | — | "RunPod + OpenClaw AI Lab — architecture, training pipeline, and cost breakdown" (README unavailable via raw.githubusercontent; content UNVERIFIED) |
| `Antoine-Thomas/UHB-Universal-Harness-Backend` | 2026-11-10T02:24:42Z | 0 | — | Protocol-agnostic interface contract between control planes and agent harnesses |
| `MaLeon/openclaw-profile-scaffold` | 2026-11-10T09:06:47Z | 0 | — | Profile scaffold |
| `salismt/agent-pace` | 2026-11-09T14:11:32Z | 0 | — | "Let your coding agents run. Get interrupted only when they break a promise you made." |
| `umyydev/pretty-ui` | 2026-11-09T23:06:24Z | 0 | — | Make AI-built UI look designed, not generated (shadcn-style registry for agent UIs) |
| `social-media-skills/linkedin-skill` (also on ClawHub) | 2026-11-10T09:08:31Z | 0 | — | LinkedIn write/check/preview/schedule, voice learned from past posts |
| `social-media-skills/pinterest-skill` | 2026-11-09T09:40:49Z | 0 | — | Pinterest pins from links + own photos, limit/spam-pattern checks |
| `tojulia-cmd/codex-setup-guide` | 2026-11-09T16:27:40Z | 0 | — | Russian: step-by-step Codex on Windows, GitHub, SSH, OpenClaw, Telegram guide site |

Noise / near-empty in-window repos (0 stars, no description): `0404sariel0901-hue/Openclaw` (+ `Openclaw.`), `13why685/openclaw`, `rohanojha-wm/openclaw-cloud`, `b101113002/openclaw_tryweb`, `yuvi-Apk/chai-openclaw`, `ryuk7728/Memory-Sys-OpenClaw`, `SaraD-Revolutia/openclaw-SaraD-Revolutia`, `jamezckfai/openclaw-google-oauth`, `WeihaoLiTW/openclaw-home-site`, `884k-rin/884k-rin.github.io`, `IrumHahn/openclaw-virtual-office`, `4GeeksAcademy/alvaroferrufino-openclaw-connection`, `SunnyShu0925/openclaw-proof-196051`, `SunnyShu0925/oc-ime-proof`, `SunnyShu0925/oc-privatestore-upgrade-proof`, `rb-ensurge/openclaw-render-template-mwa1fdxw`, `rb-ensurge/openclaw-render-template-mw9yhz7m` (both auto-generated "Created from render-examples/openclaw-render-template template"). → The `SunnyShu0925/*-proof` and `rb-ensurge/*-render-template` series are **new in-window spam patterns**; the prior window's `cr1..cr10` and 4GeeksAcademy course-repo series did not recur by name but 4GeeksAcademy reappears once.
Delta vs baseline: baseline had 56 repos / ~40% spam; now 57 repos / ~29 of 57 (51%) are empty-description-or-proof-artifact. Spam share **up**.

### 3.3 Use-case collection repos (GitHub) — status vs baseline
- **`AIPMAndy/awesome-openclaw-use-cases-cn`** (24 stars, Chinese) — **in-window commit `3cb48edb45cf6ec733abd4720d747621726cd385`, "chore: sync upstream OpenClaw usecases", 2026-11-10T09:20:11Z** (daily sync bot). The sync diff shows **NEW: 0, UPDATED: 0, total 116 → 116** (no corpus growth in-window). The repo's own `docs/STATS.md` (generated 2026-11-10T09:20:10Z) reports **116 unique use cases** from two upstreams: `hesamsheikh/awesome-openclaw-usecases` (42, 36.2%) and `EvoLinkAI/awesome-openclaw-usecases-moltbook` (74, 63.8%); average confidence 80.6, average reproducibility 71.6; risk distribution low 99 / medium 7 / high 10; 100% explicit_license. Category mix: 通用 50, 效率自动化 16, 开发运维 12, 内容增长 10, 学习知识 9, 安全 9, 投资交易 6, 生活方式 4. README headline claims "13 个真实落地案例" in its own curated selection. Source: https://github.com/AIPMAndy/awesome-openclaw-use-cases-cn and https://github.com/AIPMAndy/awesome-openclaw-use-cases-cn/commit/3cb48edb45cf6ec733abd4720d747621726cd385
- **`hesamsheikh/awesome-openclaw-usecases`** — 31,634 stars / 2,710 forks, created 2026-02-08, **last push 2026-03-24T14:54:56Z** (stale for months; the AIPMAndy index pins it at commit `659895e`, "Update use case count badge to 42"). Source: https://github.com/hesamsheikh/awesome-openclaw-usecases
- **`avenstack/awesome-openclaw-cases`** — 4 stars, created 2026-03-17, last push 2026-03-25 (stale); associated site clawindex.app. Source: https://github.com/avenstack/awesome-openclaw-cases
- **`OthmaneBlial/awesome-openclaw-examples`** — 119 stars / 20 forks, created 2026-02-18, last push 2026-08-30; "300 runnable OpenClaw workflow starters with prompts, sample outputs, measurable KPIs, security notes, and rollback guidance" (self-description). Source: https://github.com/OthmaneBlial/awesome-openclaw-examples
- **awesome-openclaw-brasil (42 pt-BR use cases, released 2026-11-09T04:22Z per baseline)** — could not be re-verified this window: `raw.githubusercontent.com/awesome-openclaw-brasil/awesome-openclaw-brasil` → 404 and the GitHub API lookup returned no object. It is also outside this window by timestamp (04:22Z < 09:28Z). Status: **unverified this run**.

---

## 4. ClawHub — 108 new skills in window (exact, paginated)

Endpoint: `https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc` + cursor pagination (2 pages) until the oldest fetched record (2026-11-08T15:00:19Z) preceded the window start → the in-window count is **exact, not a lower bound**. Local copy: `clawhub_inwindow.json`.
- **108 skills** created between 2026-11-09T09:28Z and 2026-11-10T09:28Z, from **45 distinct publishers** (baseline lower bound was 94 → **+14**).
- Stars are 0 for 107/108 (only `zhashushu/bilei` has 1). Download counters are 0–138 and, as instructed, are **not** read as adoption.
- Bulk publishers: `maxouf` 15 (Apify/Media/utility wrappers), `nvidia` 12 (FastGen suite: fastgen-setup/validate/train/runtime/inference/develop/dataset/configure/add-network/add-modality/add-method + nvalchemi-toolkit — all published 2026-11-09T23:35:21.816Z in one batch, 19–20 downloads each), `huhoo` 10 (cue-cn A-share set — see below), `scrollport` 7 (SEO/lead-gen suite), `0xnirlin` 4 (Ziztu content suite), `voronindenis5` 4, `wlc-dev` 4 (Huawei Cloud asset lists), `scavio-ai` 3 (retail product-data APIs), `yunzhuantang2024-star` 3, `omnivideo` 3.

### 4.1 Notable NEW use cases / verticals in-window
- **Human-in-the-loop task marketplace**: `uckhill/sidequest` — "Hire verified real people for paid real-world quests via SideQuest… calling a business, checking a store is open, taking photos… native-speaker translation, or human review of AI output. Funds are held in escrow and released when you approve the proof." (dl 69)
- **Payment safety for agent-to-agent commerce**: `shariar-k/x402-pay-safely` — check an x402 seller before an agent pays, "up to 20 offers in one call, listed safest first", prove payment after; **$0.01 per call in USDC on Base over x402 or MPP**. (dl 53) — extends the x402 rail seen in the prior window with a *verification* layer.
- **Agent marketplace / prepaid balance**: `comunionio/openany` — "marketplace for agents. Connect once with one API key and pay per call from a prepaid balance to use AI models, data sources and tool APIs. Your agent searches, checks the live price, and runs only after you approve." (dl 40) — companion repo `ComunionIO/openany-skill` (2026-11-10T04:38:03Z).
- **App-store revenue research**: `mmdincer/apphitlist` — "Research iOS App Store apps with the AppHitlist MCP server… which new apps already make money, what earns the most in a category… how much an app makes, how long an app's Meta ads have run, or what users complain about" (dl 69).
- **Anti-astroturfing shopping advisor (zh-CN)**: `zhashushu/bilei` (dl 135, the only skill with a star) + `zhashushu/bilei-team` (dl 138) — "反投毒购物顾问"; only accepts non-PR-able evidence (administrative penalties, failed inspections, recall notices), grades each source, quantifies TCO/EAC, critical failure rate p*, premium ROI, budgets S/A/B/C, "结论先行给唯一推荐", targets >¥2000 purchases. This is the most elaborate *decision-quality contract* of the window.
- **Social-media ops (3 separate new publishers)**: `yakovlevcoded/postmately-smm-autopilot` (month of posts/carousels/videos → approval → schedule via Postmately MCP → measure), `buzzmark/buzzmark` (dl 85; business-voice post planning + "a check on how much a post sounds like their brand"), `social-media-skills/linkedin-skill` + `pinterest-skill` (cross-harness: Claude Code, Codex, Cursor, OpenClaw).
- **Content-creation video suite**: `sullyo/cospark` (dl 71; "Create end-to-end AI video ads from chat"), `0xnirlin/ziztu-faceless-youtube`, `ziztu-viral-reels`, `ziztu-micro-drama`, `ziztu-cinematic-depth`.
- **Email inbox as a tool**: `replyz/replyz` (dl 67) — "Create a Replyz inbox to receive permitted verification emails, then retrieve codes, links, and other messages."
- **Bitcoin gifting**: `wahidmy/lightning-gifts` — mint/fund Lightning gifts, hand off claim links, reclaim expired ones (BOLT11).
- **Agent reliability / testing**: `rahulj-123/rook-cli` + `kane-cli` (dl 66 each; Rook = test/red-team/regression-check an AI agent you own; KaneCLI = E2E test generation from a PRD, executed on desktop web, Android, iOS), `isaad/agent-shell-concurrency-safety` (dl 73; background-job races, subshell cwd scoping, state-restore-after-mutation), `mertbasar0/autonomous-handoff` (dl 48; hand work to an OpenClaw Gateway, browser chat, A2A agent, Codex app-server, or ACP coding agent, answer objections with commit-bound evidence).
- **Chinese A-share analysis set (continuation of baseline `cue-cn-*`)**: 10 in-window `huhoo/cue-cn-*` skills — `morning-brief` (盘前早报, dl 61), `share-pledge-tracker` (dl 70), `customer-concentration` (dl 70), `lockup-expiry-pressure` (dl 63), `goodwill-impairment-risk` (dl 64), `earnings-forecast-cn` (dl 52), `controlling-shareholder-change-cn` (dl 55), `cash-flow-quality` (dl 45), `working-capital-quality` (dl 47), `dividend-tax-timeline` (dl 72). All carry the same "逐条挂源" (per-line source citation) contract — this is now an established pattern, not a one-off.
- **Personalized song gift**: `omnivideo/once-song` — gather memories, personalized song with the name in the chorus, private preview then unlock.
- **Document conversion**: `spitmaster/unppt-skill` — .pptx → interactive HTML preserving animations/transitions, font checks, batch conversion.
- **Chinese research/RAG**: `mahsh/tech-research` (dl 45; single/parallel research + weekly tech radar, reads Dify KB + web), `mahsh/dify-rag` (read-only Dify.AI knowledge-base retrieval).
- **Vertical MCP/API skills (single-purpose, MCP-backed)**: `massageinchina/massageinchina` (TCM Tuina styles, meridian acupressure points, hospital price benchmarks, Mandarin phrases), `bazitools/bazitools` (BaZi charts with astronomical true solar time, 340,000 Shijing verses), `mahjonghandbook/mahjonghandbook` (NMJL / Chinese MCR / Japanese Riichi scoring), `labelqueue/labelqueue` (Avery + thermal label dimensions, CSV→PDF barcode layouts), `paintcolormatcher/paintcolormatcher` (Sherwin-Williams / Benjamin Moore / Behr match, CIEDE2000 ΔE, LRV), `scavio-ai/saks-fifth-avenue-api` + `macys-product-data` + `vinted-api` (retail product/price/review data as JSON), `sdk-team/alibabacloud-idaas-conditional-access` (Alibaba Cloud IDaaS conditional access), `wlc-dev/huawei-cloud-*` (AAD protected-IP list, CSE engine list, CBR vault list, ER list — Huawei Cloud security asset enumeration), `fenxianglife/fenxiang-saving-assistant` (zh: Taobao/Tmall/JD/VIP/Pinduoduo price-history shopping advisor), `horacetu/ddtclaw-mall-insight` (zh: mall profile, tenant brands, business-mix gaps), `mc0571/zread-wiki-export` (dl 92; Zread wiki export with Git-managed history), `zd200572/ab1-synth-skill` (synthetic Sanger .ab1 chromatogram from FASTA+FASTQ), `holgergruenhagen/macos-health-check` (read-only Mac health check with rollback-first cleanup proposals), `arunk3/candor-ui` + `candor-agent-ui` (shadcn/ui registry for agent UIs: chat, tool calls, plans, approvals, diffs, run logs, traces, evals), `maxouf/*` (15 wrappers: apify-local-business-audit, apify-competitor-watch, apify-bulk-image-pipeline, google-ads-transparency-scraper, google-maps-scraper, trustpilot/whatnot/trade-show-exhibitors scrapers, youtube-transcript, text-to-speech/image, image-to-video, image-upscaler, background-removal, review-analysis).
- **Automation/ops (task-level)**: `houko/harmony-issue-resolution` (zh: implement + device-verify HarmonyOS issues), `houko/android-ime-window-stability` (zh: Android IME window flicker fix + device verification).
- **Sensitive-but-notable**: `mxh678988/laomeng-zhc` + `laomeng-zhc-agent` — a Chinese-only programming language (ZHC) integrated as an OpenClaw skill/runtime, with LSP bridge, error-code contract, Office export.

### 4.2 ClawHub caveats
- Publisher concentration (maxouf 15, nvidia 12, huhoo 10, scrollport 7) ≈ 44 of 108 skills (~41%) come from 4 publishers → the "108 skills" number overstates independent ecosystem breadth. Unique-use-case estimate is materially lower.
- Stars are ~0 across the board; download counters (40–138 within hours of publication) cannot be treated as adoption. The `agentring` skill at dl 73 and `bilei`/`bilei-team` at dl 135/138 are the highest counters in-window.

---

## 5. Showcases / official surfaces — nothing new in-window
- **openclaw.ai/showcase**: 6 featured + 79 grid entries, all sourced from **X threads**, and the X status IDs decode to **2025-12-20 → 2026-01-24** (Twitter snowflake decode). No showcase entry is newer than late January 2026. Newest featured titles: "15+ Agent Army Running Across 3 Machines" (❤️119), "Personal Operating System With Daily Briefings" (❤️257), "Voice-Guided Production Fix While Walking the Dog" (❤️143), "One Chat Controlling Mail, Messages, Orders, Calls, and a Vault" (❤️271), "Entire Website Rebuilt From Telegram" (@davekiss, ❤️142), "Family Meal Planning System Built Overnight" (@stevecaldwell, ❤️133). → **Showcase is stale relative to the window; treat as background corpus, not in-window news.** Source: https://openclaw.ai/showcase
- **openclaw.ai/rss.xml**: latest post "Use new models in OpenClaw without an update", `Fri, 06 Nov 2026 00:00:00 GMT` → **no new official blog post in-window.**
- **openclawradar.com/sitemap-en.xml**: 61 URLs, all article `lastmod` in February 2026 → **no new Radar article in-window.**
- **Releases (openclaw/openclaw) in-window** (from releases.atom): `v2026.11.5-beta.2` (2026-11-10T02:31:36Z / body updated 05:34:21Z) and stable `openclaw 2026.11.2` (2026-11-09T16:26:17Z), plus publish-artifact entries including "fix: prevent prepared npm authorization CLI deadlock" (2026-11-10T08:28:32Z), "fix(release): allow large recovery Docker archive transfers (#196373)" (2026-11-10T01:56:46Z), "fix(release): authorize scoped 2026.11.3 Kova waiver (#196420)" (2026-11-10T03:50:29Z), "fix(release): prevent npm publication preflight module deadlock (#196415)" (2026-11-10T03:01:50Z), "fix(release): accept authenticated retained npm producer (#196405)" (2026-11-10T06:25:57Z), "fix: authenticate release npm lineage in one owner pass (#196476)" (2026-11-10T03:51:56Z). Release-pipeline reliability remains the theme. Source: https://github.com/openclaw/openclaw/releases.atom

---

## 6. ROI / deployment economics — STILL ZERO first-party attribution
- No in-window Reddit, Discourse, GitHub, or ClawHub item contains a verifiable revenue, cost-saving, or hours-saved figure attributable to OpenClaw deployments.
- All third-party "5-20 h/week / $62K revenue" style numbers remain unattributed SEO content (cortance.com, cloudways.com, bluehost.com, kanerika.com, salamhusain.com, landing.elest.io, neuraplus-ai.github.io, openclaw.report, crewclaw.com "162 agent templates", clawbot.blog, openclawai.io). **Excluded from headline findings.** A freshness-filtered web search for in-window use-case posts returned only these vendors' pages, none dated inside the window.
- The only hard numbers in-window are **operational, not financial**: 80 scheduled jobs (YvesLaRose), 8 affected jobs (TheDoshus), 44 enabled isolated agent-turn jobs pre-10.10 (alexph-dev, from 11-04, out of window), 23 GiB state directory (Joseph_Kapp), 57 new GitHub repos, 108 new ClawHub skills, 4 Reddit posts, 5 Discourse topics.
- Two practitioners report *negative* deployment economics this window: OpenClaw recommendations/deployments paused at clients (`/u/wreckage-menace`, `tedcahall`), and one team pinned to 2026.10.6 rather than upgrade (`YvesLaRose`).

---

## 7. Sentiment summary
- **Working well**: agentring adoption story (342 GitHub stars, self-hosted VoIP calling, active thread, "works excellent" after tweaks); ClawNova community fork (MIT, agent-first Android UI); the Templates Focus Week launch + Competitor Watch reference template; maintainer responsiveness in-thread (`/u/obviyus` "I'm on it… Reviewing #192009"; `jjjhenriksen` triage protocol on #416, fix PR #194443 on #417); new skill ecosystem breadth (108 skills, 45 publishers) with novel verticals (human-in-the-loop escrow marketplace, x402 payment verification, App-store revenue research, anti-astroturfing purchase advisor, Chinese A-share "per-line source" contracts).
- **Problems**: cross-provider/same-provider fallback lockout (highest impact; two named commercial freezes; P2 + needs-product-decision label; #192463 auto-closed in ~8 min; same check still on main and in 2026.11.2); first-party mobile clients weak ("It's meh atm" re: Android app; native macOS app hides scheduled jobs even with operator.admin — PR #194443 unmerged); managed Gateway limitations (no `gh` provisioning path, maintainer steers to self-hosted/VPS); onboarding friction ("seriously UX mess… barely graduated out of breadboard"); state-directory / SQLite snapshot update failures on a 23 GiB install; ClawHub review opacity for publishers ("Needs review", no SkillSpector findings); stale curated corpora (hesamsheikh awesome list untouched since 2026-03-24; showcase frozen at Jan 2026); GitHub spam ratio up to ~51% of new repos.
- **Interesting**: agent identity/personalization templates (celebration/travel planning agents, family meal planning, personalized song gifts); voice as the agent→human channel (agentring, voice-memo transcription in OmniForge); agent-to-agent commerce primitives (x402 + OpenAny prepaid marketplace + SideQuest human escrow); three separate social-media skill publishers competing in-window; MCP-backed vertical APIs (retail, mall, TCM, mahjong, labels, paint, Chinese almanac, Huawei Cloud assets); new OpenClaw-as-harness embedding (Cursor runtime, Codex setup guide, Claude Code subagent "openclaw-guru").

---

## 8. Channel accessibility (explicit)
- **Reddit**: posts RSS ✅; `.json` 403 ❌; per-post comment `.rss` intermittent (1xscckm failed twice → comment sentiment UNKNOWN).
- **Discourse**: `/latest.json` ✅; `/t/<id>.json` ✅; `/new.json` 403 ❌; `/posts.json` lacks post_stream (per baseline).
- **GitHub API**: ⚠️ unauthenticated rate limit exhausted during this run (60/hour, `remaining: 0`, reset ~2026-11-10T10:43Z) — some late per-repo README/contents fetches returned 404/empty rather than real 404s (`runpod-setup`, `blobster-factory-site` READMEs were unobtainable; treat their content as UNVERIFIED). `raw.githubusercontent.com` and `releases.atom`/`.patch` endpoints still worked.
- **Discord**: ❌ no bot token — inaccessible.
- **X/Twitter**: ❌ no collection route — the X link in `1xrvr49` comments and all 85 showcase X threads are referenced but not fetched.
- **openclaw.ai/showcase**: ✅ reachable, but entries are undated (dated only via X snowflake decode → all ≤2026-01-24).
- **openclawradar.com**: ✅ reachable, no in-window content.
- **IMDA (govt) case-study PDF** (imda.gov.sg) was fetched once and returned a binary PDF with no extractable text in this extractor → UNVERIFIED; not counted as a finding.

## 9. Files produced locally
`clawhub_inwindow.json` (108 in-window skills), `gh.json` (57 new repos), `discourse_latest.json`, `reddit_new.xml`, `rc.xml` (1xrvr49 comments), `c_1xru5k2.xml` (agentring comments), `c2_1xrtu21.xml` (ClawNova comments), `showcase.html`, `blog.xml`, `radar.xml`.

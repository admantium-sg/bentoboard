# Community Findings — 2026-11-22 (window 2026-11-21T09:28:00Z → 2026-11-22T09:28:00Z)

Raw payloads: `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp/2026-11-22/`
Every number below was read from a file in that directory during this run.

---

## 1. Discourse — new topics

**F1 — Five new topics in-window, one of them hidden/flagged (the complete set is #503, #504, #505, #506, #508).**
Completeness was proven by probing topic IDs one at a time: `t/502` → 200 (previous window), `t/503` → 200, `t/504` → 200, `t/505` → 200, `t/506` → 200, `t/507` → **404**, `t/508` → 200, `t/509` … `t/522` → **404** (14 consecutive 404s, no gaps). Discourse topic IDs are sequential with creation time, and #502 was created 2026-11-21T04:36:15Z (before the window) while #503 was created 2026-11-21T16:52:28Z (inside it), so the ID boundary is consistent with the time boundary. Note that `latest.json` (30 topics) only lists 4 of the 5 new topics — **#508 is invisible in the latest-feed because its only post was flagged by the community and temporarily hidden**, so a feed-only scan would have under-counted by one.
Source: https://community.openclaw.ai/latest.json ; https://community.openclaw.ai/t/503.json ; https://community.openclaw.ai/t/504.json ; https://community.openclaw.ai/t/505.json ; https://community.openclaw.ai/t/506.json ; https://community.openclaw.ai/t/508.json

**F2 — #503 "WhatsApp shows ON/OK but direct messages get no reply (2026.11.6)"** — Troubleshooting (cat 2), created 2026-11-21T16:52:28.407Z by *rejimodiyil*, 2 posts / 0 replies / 15 views, not hidden, not flagged. The reporter runs OpenClaw 2026.11.6 on macOS via global npm with Node 26.5.0; the Gateway reports running and reachable, and WhatsApp/iMessage/Telegram all show ON/OK, yet WhatsApp DMs get no reply, and it is unclear whether the failure is receipt, processing or delivery. A November 16 update failed during its doctor step; package recovery later reported complete; the Gateway had also frozen repeatedly before that update. The ask is how to diagnose and fix without losing memory, sessions or settings.
Source: https://community.openclaw.ai/t/whatsapp-shows-on-ok-but-direct-messages-get-no-reply-2026-11-6/503

**F3 — #504 "macOS app stuck on 'client credentials need recovery' after updating to 2026.11.6; doctor with 10.7 CLI doesn't clear it, Mac node stays disconnected"** — Troubleshooting (cat 2), created 2026-11-21T17:07:42.672Z by *chad_little*, 2 posts / 0 replies / 18 views, not hidden. The user upgraded OpenClaw.app 2026.10.7 → 2026.11.6 (notarized arm64 zip, Team ID FWJYW4S8P8) but the CLI under `~/.openclaw/bin/openclaw` and the only runtime under `~/.openclaw/runtime/` are still 2026.10.7, so `openclaw doctor --fix` cannot clear a migration that requires 11.6. Environment: macOS 27.2, Mac mini, Apple Silicon, app-installed runtime with no node/npm present.
Source: https://community.openclaw.ai/t/macos-app-stuck-on-client-credentials-need-recovery-after-updating-to-2026-11-6-doctor-with-10-7-cli-doesnt-clear-it-mac-node-stays-disconnected/504

**F4 — #505 "Supported Codex delegation with a restricted coordinator allowlist on Windows (v2026.11.6)"** — Troubleshooting (cat 2), created 2026-11-21T18:21:20.435Z by *Wombat*, 2 posts / 0 replies / 5 views, not hidden. On packaged Gateway v2026.11.6 for Windows, a coordinator with a restrictive effective tool allowlist could not execute processes (`Not included in inherited tools`), and no code execution was achieved; the reporter notes that the version-pinned `delegateToolsTo` documentation describes delegating the requester's own *deny* restrictions while restrictive *inherited allowlists* remain enforced — i.e. an unresolved policy-boundary question about delegated coding agents.
Source: https://community.openclaw.ai/t/supported-codex-delegation-with-a-restricted-coordinator-allowlist-on-windows-v2026-11-6/505

**F5 — #506 "Plugin repository not existing"** — Start Here (cat 4), created 2026-11-21T18:59:26.616Z by *berot3*, 1 post / 0 replies / 1 view, not hidden. A brand-new user browsing plugins found the listed ClawHub plugin **chrome-openclaw-sider** ("Official Chrome channel plugin for connecting OpenClaw in Sider Chrome extension") whose linked GitHub repository no longer exists and whose owner account has no other openclaw or browser-extension repo; the author asks whether this should be reported, noting "I assume this is not normal". This is a live marketplace-integrity defect surfaced by a first-time user.
Source: https://community.openclaw.ai/t/plugin-repository-not-existing/506

**F6 — #508 "AEGIS OpenClaw Governance — Windows preview, looking for testers"** — Build & Showcase (cat 5), created 2026-11-22T05:51:03.164Z by *thelight1122* (Tracey Prutch, trust_level 0), **1 post / 0 replies / 1 view**, `visible: false`, `deleted_at: null`, 59 words, tags `windows`, `plugins`, `approvals`. The single post has `cooked_hidden: true`, `hidden: true`, `hidden_reason_id: 1` and the placeholder body "This post was flagged by the community and is temporarily hidden" — so the topic's actual content is not retrievable at all. It was flagged within ~2 seconds of creation (created 05:51:03.164Z, post updated 05:51:05.127Z) and got no maintainer or moderator response during the window. The title is nonetheless a deployment/use-case signal: a third-party Windows governance layer for OpenClaw seeking preview testers.
Source: https://community.openclaw.ai/t/aegis-openclaw-governance-windows-preview-looking-for-testers/508

---

## 2. Discourse — thread activity & maintainer presence

**F7 — The maintainer silence is BROKEN: joe (admin, OpenClaw Staff) made 7 posts in-window — the first maintainer posts since 2026-11-19T02:14:41Z.** The staff-post scan across `posts.rss` (50 items, reaching back to 2026-11-17T13:50Z) and the `u/joe/activity.rss` feed found 16 posts in-window in total, of which **7 were by @joe** and the remaining 9 were by community users (berot3 ×3, Saul_Burgos ×2, Wombat ×1, chad_little ×1, rejimodiyil ×1, Dashiesty ×1). joe's posts: #440 at 2026-11-21T21:45:16Z, then #505 at 2026-11-22T00:31:29Z, #504 at 00:35:03Z, #503 at 00:37:08Z, #500 at 00:42:27Z, #487 at 00:44:00Z and #443 at 00:47:14Z — a 22-minute burst in the early hours of 2026-11-22, about **2 days 22 hours 16 minutes** after the previous post. **Maintainer posts in-window = 7.** The baseline recorded zero maintainer posts for two consecutive days with joe's newest at 2026-11-19T02:14:41Z; that streak ended here.
Source: https://community.openclaw.ai/posts.rss ; https://community.openclaw.ai/u/joe/activity.rss ; https://community.openclaw.ai/u/joe.json

**F8 — No other staff account posted in-window.** The `openclaw_staff` group roster (6 members: joe, OpenClawSupport, Josh, JasonOClaw, hrudolph, Graham) was pulled from `/groups/openclaw_staff/members.json`; of the five non-joe staff, OpenClawSupport and Graham have no activity items at all, JasonOClaw's latest post is 2026-11-10T19:51:14Z and hrudolph's is 2026-11-14T02:36:05Z. The Clawkeepers volunteer group (3 members: TheAngryPit, jjjhenriksen, etzelm) also posted nothing in-window. The admin/moderator accounts `discourse_ai_spam` (admin) and `system` (admin + moderator) likewise have no in-window posts. Staff-post scan result: **joe = 7, all other staff = 0.**
Source: https://community.openclaw.ai/groups/openclaw_staff/members.json ; https://community.openclaw.ai/groups/Clawkeepers/members.json ; https://community.openclaw.ai/u/discourse_ai_spam.json ; https://community.openclaw.ai/u/system.json

**F9 — joe's replies were substantive, not canned: they cite upstream GitHub issues and give negative verdicts.** In #500 he matched the "code-mode host closed its stdout" failure to a known macOS code-signing regression, **issue #192851** (2026.10.10 macOS app re-signs `codex-code-mode-host` without JIT entitlements → V8 "Failed to reserve virtual memory for CodeRange"), and stated the fix is merged to `main` but that he checked the **2026.11.6 release tag and its signing script still omits the Codex host fix** — i.e. upgrading to 2026.11.6 is *not* a confirmed solution — giving a read-only `codesign -d --entitlements` check for `com.apple.security.cs.allow-jit`. In #443 he identified the SQLite worker error as a **64-client worker-broker limit** tracked upstream as **issue #162497**, warned the user's 7,664 stored sessions are not necessarily the cause, and recommended `openclaw gateway stop` + `openclaw backup create --verify` before `openclaw update` and `openclaw --version` (noting the CLI still reports 2026.11.2 despite an attempted 11.3 upgrade).
Source: https://community.openclaw.ai/t/mac-tool-calls-fail-code-mode-host-closed-its-stdout/500 ; https://community.openclaw.ai/t/hitting-bug-sqliteworkererror-sqlite-worker-store-capacity-reached-code-overloaded/443

**F10 — joe gave a "no supported route exists" answer on Windows service adoption (#440), an explicit policy confirmation on delegate allowlists (#505), and a version-scoped credential-repair recipe on macOS (#504).** In #440 he told *codyMF1776* he "can't identify a supported adoption command or a verified release that fixes this specific case" for `SERVICE_DEFINITION_UNKNOWN` — stating that OpenClaw can inspect a direct-node Scheduled Task but installation/update paths require a managed launcher for ownership verification, leaving an otherwise healthy Gateway "recognizable but not safely migratable"; he explicitly did **not** recommend replacing the task. In #505 he confirmed the user's interpretation was correct: on v2026.11.6 `delegateToolsTo` **cannot override restrictive inherited allowlists**, the "Not included in inherited tools" error is expected, and there is **no supported subagent configuration that bypasses that restriction** — the documented alternative being a separately configured `coder` agent plus `agents.entries..tools.agentToAgent.send: ["coder"]` and `sessions_send`. In #504 he diagnosed a blocked credential migration and gave an isolated-install recipe (`install-cli.sh --version 2026.11.6 --runtime-only --prefix "$HOME/.openclaw-116-repair"`) so the working 10.7 install is not overwritten.
Source: https://community.openclaw.ai/t/windows-service-definition-unknown-blocks-direct-node-scheduled-task-adoption/440 ; https://community.openclaw.ai/t/supported-codex-delegation-with-a-restricted-coordinator-allowlist-on-windows-v2026-11-6/505 ; https://community.openclaw.ai/t/macos-app-stuck-on-client-credentials-need-recovery-after-updating-to-2026-11-6-doctor-with-10-7-cli-doesnt-clear-it-mac-node-stays-disconnected/504

**F11 — #501 finally got a third post, but still no maintainer answer.** Dashiesty posted again at 2026-11-21T15:06:37.077Z (in-window) with new diagnostics: Store package 2026.11.11073.0 / bundled OpenClaw 2026.11.6 (06afb10), failed launch 2026-11-21 15:03:34–15:03:41 UTC, and the decisive detail that the gateway log "rejects both main and openclaw agent databases at schema 27, requiring schema 38, then fails bootstrap", with the supervisor reporting "bundled Gateway restart handoff command failed (exit 1); no replacement was started". The user also confirmed `openclaw backup create --dry-run --json` is still blocked by the unrecognised `agents.defaults.heartbeat` setting, so the protected repair path to Doctor remains closed. joe replied to seven other threads in the same window but **not** to #501 — the MSIX upgrade dead end (2026.11.100.0 → 2026.11.11073.0, `native-redirect.mjs` failing to load, rejected key `agents.defaults.heartbeat`) is therefore still unresolved.
Source: https://community.openclaw.ai/t/windows-update-recovery-blocked-backup-rejects-legacy-heartbeat-config-so-doctor-cannot-run/501

**F12 — The remaining watched threads saw no in-window activity.** #419 ("ClawHub skill hidden with 'Needs review' and no SkillSpector", created 2026-11-10T07:46:09.858Z) still has 1 post and a last activity of 2026-11-10T07:46:09.957Z — now **~12.1 days unanswered**; #481 last 2026-11-18T20:04:48Z; #486 last 2026-11-19T16:42:27Z; #488 (CommentMetro skill showcase) last 2026-11-19T19:05:10Z; #489 (new-UI confusion) last 2026-11-19T21:45:36Z; #25 (Docker Gateway OOM on small VPS) last 2026-11-19T14:06:40Z; #209 (gateway ws://127.0.0.1:18789) last 2026-11-21T01:29:23Z — **before** the window opened, so that thread is now **30 days old**; #502 (ClawHub publishing blocked for @weaxs/openclaw-stock-analysis) last 2026-11-21T04:36:15Z, also before the window, still with 1 post and no reply. Three threads had new posts but none were in-window: #455 (berot3 ×2), #451 and #482 (Saul_Burgos).
Source: https://community.openclaw.ai/t/419 ; https://community.openclaw.ai/t/209 ; https://community.openclaw.ai/t/501 ; https://community.openclaw.ai/posts.rss

**F13 — In-window community chatter was thin but pointed: 16 posts across the whole forum, from 7 distinct authors.** berot3 posted twice on #455 (19:18:34Z and 19:23:45Z) asking whether a single shared Gateway can enforce per-user agent isolation — "Can User X be restricted to seeing and interacting with Agent A only, without even being able to discover or access Agent B through the UI, API, or tools?" and whether default cross-agent session visibility and agent-to-agent permissions can be restricted, and what shared resources (scheduled jobs, Gateway-level metadata) could still leak across users. Saul_Burgos posted on #451 and #482. Four new threads were created by users, and one (#508) was created by a trust-level-0 account and flagged.
Source: https://community.openclaw.ai/t/self-hosting-openclaw-on-a-canadian-vps/455 ; https://community.openclaw.ai/posts.rss

---

## 3. Reddit r/openclaw

**F14 — Reddit r/openclaw is still fully blocked: 5 of 5 routes failed (6th with the proxy), for the 5th consecutive day.** Route results: `www.reddit.com/r/openclaw/new.json?limit=25` → **HTTP 403**, 189,908 bytes (Reddit HTML error/login shell, not JSON); `www.reddit.com/r/openclaw/new/.rss` → **HTTP 404**, 266 bytes (an empty Atom feed with `<updated>2026-11-22T09:29:43Z</updated>`); `www.reddit.com/r/openclaw/comments.json?limit=25` → **HTTP 403**, 189,908 bytes; `api.reddit.com/r/openclaw/new?limit=25` → **HTTP 403**, 189,908 bytes; `old.reddit.com/r/openclaw/new.json?limit=25` → **HTTP 302** to `https://old.reddit.com/login/?reason=lor2&dest=...` which then returns **403** (189,908 bytes). The `r.jina.ai` proxy returns **HTTP 200** but the payload is only 473 bytes containing "Warning: Target URL returned error 403: Forbidden … You've been blocked by network security." The identical 189,908-byte body across all 403 routes confirms a network-level block rather than per-endpoint failures. **Post count, comment depth and sentiment remain visibility-UNKNOWN (explicitly NOT zero) — 5 consecutive blocked days.** No Reddit post could be cited this run.
Source: https://www.reddit.com/r/openclaw/new.json?limit=25 ; https://www.reddit.com/r/openclaw/new/.rss ; https://www.reddit.com/r/openclaw/comments.json?limit=25 ; https://api.reddit.com/r/openclaw/new?limit=25 ; https://old.reddit.com/r/openclaw/new.json?limit=25 ; https://r.jina.ai/https://www.reddit.com/r/openclaw/new/

---

## 4. ClawHub

**F15 — ClawHub volume collapsed by half: 78 in-window skills across 26 publishers (baseline 163 skills / 31 publishers), i.e. −52.1% skills and −16.1% publishers.** The `skills?sort=createdAt&order=desc&limit=200` endpoint returned 195 items covering 2026-11-20T15:13:35Z → 2026-11-22T08:36:05Z, so the window (epoch ms > 1795253280000) is fully covered without pagination — the oldest fetched item is ~18 h before the window start and the newest is 2026-11-22T08:36:05Z, inside it. Filtering client-side on `createdAt` yields exactly 78 skills from 26 distinct `ownerHandle` publishers, of which **18 publishers shipped exactly one skill (69.2%, up from 54.8% of 31 last window)**. Totals across the 78 in-window skills: **installs 4, stars 0, comments 0, downloads 3,459**.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**F16 — Browse-to-install ratio fell 71%: 3,459 downloads ÷ 4 installs ≈ 865×, down from ~2,947× (8,842 ÷ 3).** Installs rose by 1 in absolute terms while downloads fell 60.9%, and stars and comments stayed at exactly 0 across the whole window — engagement on new skills remains effectively zero. The market's conversion funnel is getting wider, not narrower.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**F17 — Batch-drop structure: 4 publishers account for 49 of 78 skills (62.8%).** `oomol` shipped **25 skills in 112 seconds** on 2026-11-21 13:20:28.695Z → 13:22:20.208Z, all in category `other` and all following the identical "oo-<brand>" template ("Use this skill for ANY <Brand> request — searching and reading…"), covering Agify, InternetData, TikTok Shop, Alipay, Intervals.icu, Treg, Amazon Selling Partner API, Karbon, UberLLM, APIKO, Lark, Baobiao, Mamo Business, Cloudflare, PDFCraft, Datacircle, Piloterr, eBay, PostOnce, Etsy, Rendi, Football Charts, SendCloud, Garmin Connect, SocialScrape. `nvidia` shipped **10 skills at a single identical timestamp** (2026-11-21T23:33:23.169Z, span 0 s): `nixl-docs`, six `kumo-*` skills (kumoai-reference, kumo-data-science, kumo-custom-populations, kumo-model-tuning, kumo-model-persistence, kumo-model-explanations, kumo-training-diagnostics) and two `cudnn-*` skills. `guaikei` shipped 9 skills but spread over **82,726 s (23 h)** — a drip, not a batch. `rousselpaul` shipped 5 Masko skills in **28 s** at 2026-11-22T08:27. Non-batch/spread publishers: `scavio-ai` 3 (36,581 s), `winsoftlabs30` 4 (56,331 s), `huhoo` 2 (21,889 s), `naraprotocol` 2 (5,420 s). Because publisher-level detail endpoints are unusable, these counts were computed client-side from the list payload.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**F18 — New skill families worth naming, all first-window appearances or first clear clusters.** (a) *Chinese social trend/rival monitoring* — `guaikei` shipped a coherent 9-skill family: `dy-trend`, `xhs-trend`, `ks-trend`, `tt-trend` (Douyin / Xiaohongshu / Kuaishou / TikTok hot-trend read-only data sources) plus `dy-rival`, `xhs-rival`, `ks-rival`, `tt-rival` (competitor monitoring) and `dy-koc` (Douyin creator/KOL screening). (b) *Masko interactive mascots* — `rousselpaul`: masko-create-mascot, masko-animate-mascot, masko-build-interactive-mascot, masko-integrate-mascot, masko-desktop-pet (desktop pet for Mac or Windows). (c) *NVIDIA KumoAI / cuDNN / NIXL* — the 10-skill `nvidia` batch. (d) *European grocery retail APIs* — `scavio-ai`: argos-stock-checker-api, media-expert-api, action-com-api (Argos, Media Expert and Action, "1 to 3 credits per call (actual cost)"). (e) *Chinese annual-report note parsers* — `huhoo`: `cue-cn-borrowing-cost-cn` (capitalised vs expensed borrowing costs) and `cue-cn-lease-liability-cn` (lease liabilities bucketed by maturity), both `finance`/`research`, line-by-line traceable back to the source sentence. (f) *Base/8453 crypto settlement* — `naraprotocol`: `mcp` and `cryptoslip` ("Non-custodial Base Mainnet (8453) PocketSlip wallet and settlement MCP skill"). (g) *Agent-ops / security* — `eafkgitapp/ironheights` ("the immune system for AI agents … flags malware, pipe-to-shell, encoded payloads, credential theft"), `mailglo/mailglo` (DMARC/SPF/DKIM inspection), `oracis/360-residue-cleanup` (removing the 360 security suite on Windows), `psyb0t/docker-keepassbox` (KeePass/TOTP via KeePassBox). (h) *Web/document integration* — `openmsg88/liuli-jinshan-bridge` (direct read/write of 金山文档 / WPS multi-dim tables via the dbsheet API), `agentsearchhq-coder/agentsearch-web-search` (live web search, screenshots, URL→markdown), `ppjsw2014/code-agent-deploy` (deploys a local project and returns the address it can be opened at). (i) *Social scheduling* — `flaghand/flaghand` and `alihafizji/linkedin-post-scheduler` (X/LinkedIn/Bluesky/TikTok/YouTube/Pinterest drafting and scheduling). (j) *Developer scaffolding* — `winsoftlabs30`: `test-fix` (fix failing tests without weakening them), `prompt-doctor`, `stack-scaffold-skill` (Next.js 15 + Tailwind + Supabase), `screenshot-to-code` (UI screenshot → React+Tailwind component).
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**F19 — Only 1 of 78 in-window summaries mentions "openclaw" at all** (`eafkgitapp/ironheights`, which says to use it before installing any skill from ClawHub or GitHub) — versus 2 of 163 in the baseline window. The ecosystem's new skills describe themselves as generic SaaS/API connectors (oo-<brand>, retail APIs, trend data sources) and rarely reference the OpenClaw runtime they run on.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

---

## 5. Use cases, showcases & deployments

**F20 — The showcase page is byte-identical to the previous window: md5 `e90d1564b23498328640776d35fe8060`, 150,922 bytes — unchanged.** The md5 matches the 2026-11-21 baseline exactly, so the showcase has now been static for at least two consecutive days; no new showcase entry was added in-window.
Source: https://openclaw.ai/showcase

**F21 — The one dated third-party deployment in-window is a Canadian SMB self-hosting OpenClaw for data-residency reasons, and the deployment's author returned with follow-up questions about tenant isolation.** Discourse #455 "Self-hosting OpenClaw on a Canadian VPS" (created 2026-11-16T15:50:25Z by *4GoodHosting*) describes a concrete deployment: a small Canadian business wants an AI assistant but cannot put chats and files on US servers, so PIPEDA, BC public-body rules and Quebec Law 25 push them to self-host — Ubuntu LTS VPS in a Canadian data centre, 4 vCPUs and 8 GB RAM initially, Docker Compose with the image version pinned rather than `latest`, reverse proxy with automatic TLS, app port closed to the internet, model-provider API keys in an env file readable only by the service user, data volumes on a separate disk with nightly encrypted backups to a second Canadian location, login required for every user and no public sign-up. In-window, *berot3* posted twice (2026-11-21T19:18:34Z and 19:23:45Z) pressing on whether one shared Gateway can enforce per-user agent isolation (see F13). joe's earlier reply (2026-11-17T13:47:18Z, out-of-window) already warned that "A Canadian VPS doesn't guarantee Canadian data residency", that "a shared Gateway is one trust boundary", and recommended `openclaw security audit --deep` plus tested restore drills.
Source: https://community.openclaw.ai/t/self-hosting-openclaw-on-a-canadian-vps/455

**F22 — GitHub: three new repositories were created in-window and four existing OpenClaw projects took pushes inside the window.** New repos: `Arshgill01/santa-speedy-shopper` (created 2026-11-22T07:02:19Z, pushed 09:13:16Z, 0 stars — "OpenClaw tool plugin for Cerebras x Kimi K3.1 Pro Speed Bounty — live Shopi…"); `Yashkhurana13/blink` (created 2026-11-22T05:50:44Z, pushed 09:07:57Z, 0 stars — "One sentence to a working web app in seconds — Kimi K3"); `chen20020710/MaxKB-MCP-Server` (created 2026-11-22T09:02:49Z, pushed 09:27:06Z, 0 stars — a MaxKB MCP tool for WorkBuddy/OpenClaw/DeepSeek Harness). The `pushed:2026-11-21..2026-11-22` search returned **800 matching repositories** (vs 10,423 for `topic:openclaw`). Third-party OpenClaw-ecosystem projects pushed in-window: `sidebandstudio/clawtrate` (2 stars, 09:23:06Z, "Your OpenClaw agents, orchestrated"), `octogee-ai/octogee-cloud` (5 stars, 09:26:39Z, "the opinionated open source software factory built on OpenClaw, Mattermost and Gitea"), `Eliav2/openclaw-openwebui-integration` (16 stars, 08:59:00Z), `NewJerseyStyle/QemuClaw` (11 stars, 08:58:33Z, one-click isolated OpenClaw deployment), `eyeoverthink/fraymus-bridge` (1 star, 09:20:29Z, Base44↔OpenClaw channel, "No MCP req…"), `moutsea/wechatai` (1 star, 09:16:51Z, "把你的 AI 接入微信"), `xiehaojie/open-push-channel` (1 star, 08:34:19Z), `leverframe/fleet-bridge` (0 stars, created 2026-11-20T00:22:15Z, gateway+Hermes agents to any MCP client), `Ciltress/skyrim-modding-tools-openclaw-plugin` (0 stars, 08:04:27Z), `PENTONCOS/xiaoshaozi-starter-kit` (0 stars, 09:20:08Z). By contrast `Weaxs/stock-analysis-plugin` (101 stars, 19 forks, 73 tools + 21 skills) was last pushed **2026-11-20T14:57:44Z — outside the window**.
Source: https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-21..2026-11-22&sort=updated&per_page=30 ; https://api.github.com/repos/sidebandstudio/clawtrate ; https://api.github.com/repos/octogee-ai/octogee-cloud ; https://api.github.com/repos/Weaxs/stock-analysis-plugin

---

## 6. ROI status

**F23 — Still NO first-party, customer-facing ROI metric in-window — 5th consecutive day of the negative.** A keyword sweep of all 78 in-window ClawHub summaries and descriptions for roi / cost / saving / hours / revenue / productivity / profit / fte / "time saved" produced **13 raw substring hits across 8 skills, every one a false positive**: `rousselpaul/masko-integrate-mascot` ("roi" inside "Andr**oi**d"), `ppjsw2014/code-agent-deploy` and `nvidia/kumoai-reference` and `eafkgitapp/ironheights` ("fte" inside "a**fte**r"), `scavio-ai/action-com-api` ("shipping cost" of a product), `scavio-ai/media-expert-api` ("actual cost" of API credits), `scavio-ai/argos-stock-checker-api` ("the saving computed from the two" — a retailer price comparison), `nvidia/kumo-model-persistence` ("saved-model scoring"), `narcisbodea/smstunnel` ("roi" inside "Andr**oi**d"). **Zero genuine hits.** No in-window artefact reports hours saved, cost avoided, revenue, headcount replaced, users served or tickets deflected for a named organisation.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**F24 — The same sweep over the 60 GitHub repository descriptions returned zero ROI keywords at all** (searched hours saved, time saved, roi, fte, productivity, headcount, tickets, cost savings, savings of, revenue, payback, % faster, reduced cost). Note that `ZhuLinsen/alphasift` (503 stars, pushed 2026-11-22T08:41:21Z) advertises "零成本运行" / "zero-cost operation" for an A-share/US/HK stock screener — that is a cost claim about the tool, not a measured saving for a customer, and it is not dated inside the window as a deployment. The only quantified in-window material remains **negative or operational**: joe's #500 reply pointing at the still-unfixed-in-release macOS JIT signing regression (#192851), the #443 SQLite 64-client broker ceiling (#162497), and #504's still-broken credential migration — none of which quantify customer value.
Source: https://api.github.com/search/repositories?q=topic:openclaw&sort=updated&per_page=30

---

## Community Pulse (Working well / Problems / Interesting)

**Working well**
- **Maintainer responsiveness returned decisively.** 7 substantive joe posts in ~22 minutes, each answering a specific thread with a diagnosis, a command sequence and a scope limit — and two of them explicitly naming upstream GitHub issues (#192851, #162497) as the real trackers, which is the kind of steering the community has been missing for days.
- **Honest negative verdicts.** joe told two users outright that no supported route exists (#440 Windows service adoption) and that no supported subagent configuration can bypass restrictive inherited allowlists (#505) — much more useful than a workaround.
- **Deployment blueprints are becoming concrete.** The Canadian VPS thread specifies vCPU/RAM, image pinning, TLS termination, env-file key handling, disk separation and cross-border encrypted backups; #508's title shows a third party building an OpenClaw governance layer for Windows and recruiting preview testers.
- **Batch publishing infrastructure works.** nvidia landed 10 skills at a single timestamp and oomol 25 in 112 s — the ClawHub pipeline handles burst loads fine.

**Problems**
- **Silent threads pile up while one burst gets attention.** joe answered 7 threads and skipped #501 (whose new post contained the schema-27-vs-38 root cause), #419 (~12 days unanswered), #209 (30 days old), #502, and #508 (a flagged first post with zero moderator response).
- **A brand-new user's very first post about a broken plugin link got no answer** (#506, chrome-openclaw-sider repo gone) — marketplace integrity is unmonitored.
- **Community-flagged content is a blind spot.** #508 is invisible in the latest feed, has no moderator reply, and its content is permanently unreadable.
- **Marketplace quality is inverted.** 69.2% of publishers ship exactly one skill; only 1 of 78 summaries mentions OpenClaw at all; stars and comments on new skills are exactly 0; and one of the largest drops is a templated 25-skill "ANY <brand>" wrapper series, i.e. breadth without depth.
- **Conversion is getting worse.** 3,459 downloads to 4 installs (~865×) means the funnel is nearly one install per 865 browses.

**Interesting**
- **Chinese-market tooling is the most coherent new body of work**: guaikei's 9-skill trend/rival/KOL family, huhoo's annual-report note parsers, openmsg88's WPS/金山文档 read-write bridge, naraprotocol's Base settlement MCP, moutsea/wechatai (WeChat), MrGeDiao/shuorenhua (2,733 stars, Chinese-first de-AI-ification rewriting skill).
- **Two agent-identity/agent-collaboration primitives appeared**: `sidebandstudio/clawtrate` ("Your OpenClaw agents, orchestrated"), `leverframe/fleet-bridge` (gateway + Hermes agents to any MCP client), `xiehaojie/open-push-channel` (self-hosted WebSocket gateway for OpenClaw/DeepSeek Harness/agents) and `eyeoverthink/fraymus-bridge` (Base44 ↔ OpenClaw agent channel, "No MCP required").
- **A security-shaped family**: Ironheights (agent "immune system" scanning skills for malware/pipe-to-shell/credential theft), mailglo (DMARC/SPF/DKIM), 360-residue-cleanup, hol-guard, cc-safety-net, ironheights — the ecosystem is building guardrails around itself.
- **Vertical apps are proliferating**: masko (mascots/desktop pets), alphasift (AI stock screener, 503 stars), ClawBio (bioinformatics skill library, 1,188 stars), yuque-ai-mcp (Yuque doc MCP, 62 tools), Skyrim modding plugin, LEGO parts recognition — the long tail is very much alive even as headcount falls.

---

## Negatives & caveats

1. **Reddit r/openclaw remains invisible — 5 consecutive blocked days.** All five routes failed (403/404/403/403/302→403) and the r.jina.ai proxy reproduced the same "blocked by network security" page. Post count, comment depth and sentiment are **visibility-UNKNOWN, explicitly not zero**; no Reddit post is cited in this file.
2. **The Discourse count depends on how you read it.** `latest.json` shows only 4 new topics; #508 is present only via direct `/t/508.json` probing because its sole post is community-flagged and hidden. Completeness was proven by sequential ID probing (507 → 404; 509–522 → 404), but any topic whose ID were ever reused or skipped would be invisible to this method.
3. **No admin roster endpoint.** `/admin/users.json` returns 404 and `/groups/41/members.json` returns an empty array; the staff list was obtained via `/groups/openclaw_staff/members.json` and per-user `/u/<name>.json` flags (joe admin=True, group openclaw_staff; discourse_ai_spam admin=True; system admin=True+moderator=True). Moderators beyond `system` could not be enumerated, so "no other staff posted" is based on the group roster + observed post authorship, not a complete moderator census.
4. **ClawHub publisher attribution is client-side only.** The `owner` query parameter does not filter (returns HTTP 200 with the global newest-first list) and per-publisher detail endpoints return "Not found", so publisher counts, batch detection and time spans are all computed from the single list payload. The 195-item fetch covered the window without pagination, but a publisher whose entire drop happened before 2026-11-20T15:13Z would be invisible to this window — irrelevant for in-window counts, but it means publisher *lifetime* totals are not measurable.
5. **ROI is an absence, not a measurement.** The negative is based on keyword sweeps over 78 ClawHub summaries/descriptions and 60 GitHub descriptions; a ROI metric phrased without any of those 14 keywords would be missed.
6. **The showcase is unchanged**, so no showcase entry was available to analyse this window; the md5 comparison is the only available evidence.
7. **Cross-run comparability**: several baselines in the brief (e.g. ClawHub "163 skills / 31 publishers") are taken from the 2026-11-21 run and were re-derived here from raw payloads rather than reused from prose.

---

## Source list

Discourse:
- https://community.openclaw.ai/latest.json
- https://community.openclaw.ai/posts.rss
- https://community.openclaw.ai/u/joe/activity.rss
- https://community.openclaw.ai/u/joe.json
- https://community.openclaw.ai/groups.json
- https://community.openclaw.ai/groups/openclaw_staff/members.json
- https://community.openclaw.ai/groups/Clawkeepers/members.json
- https://community.openclaw.ai/categories.json
- https://community.openclaw.ai/t/503.json · /504 · /505 · /506 · /508 · /419 · /440 · /443 · /455 · /481 · /486 · /487 · /488 · /489 · /500 · /501 · /502 · /209 · /25
- https://community.openclaw.ai/t/507.json (404) · /509 … /522 (404)

Reddit (all blocked):
- https://www.reddit.com/r/openclaw/new.json?limit=25 (403)
- https://www.reddit.com/r/openclaw/new/.rss (404)
- https://www.reddit.com/r/openclaw/comments.json?limit=25 (403)
- https://api.reddit.com/r/openclaw/new?limit=25 (403)
- https://old.reddit.com/r/openclaw/new.json?limit=25 (302 → 403)
- https://r.jina.ai/https://www.reddit.com/r/openclaw/new/ (blocked payload)

ClawHub:
- https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

Showcase:
- https://openclaw.ai/showcase

GitHub:
- https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-21..2026-11-22&sort=updated&per_page=30
- https://api.github.com/search/repositories?q=topic:openclaw&sort=updated&per_page=30
- https://api.github.com/repos/Weaxs/stock-analysis-plugin
- https://api.github.com/repos/octogee-ai/octogee-cloud
- https://api.github.com/repos/sidebandstudio/clawtrate

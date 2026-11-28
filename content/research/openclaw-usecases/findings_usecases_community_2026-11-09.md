# Community / Use-Case Findings — 2026-11-09

**Track:** COMMUNITY (Reddit r/openclaw, Discourse community.openclaw.ai, ClawHub, GitHub, openclawradar, web search)
**Research window:** 2026-11-08T09:28:00Z → 2026-11-09T09:28:00Z (24h)
**Agent:** researcher subagent (diac-community-2026-11-09)
**Budget used:** 4/4 web_search, 1/1 web_fetch, plus unrestricted `curl` (RSS/JSON APIs, not counted)

---

## 0. Executive summary

- **Reddit r/openclaw: 8 new posts** in-window (4 on 11-08 after 09:28Z, 4 on 11-09) — all `published` == `updated`, so no edit-time inflation this window.
- **Discourse: 8 new topics** (IDs 398, 402–407, 410) above the 397 high-water mark; IDs 399/400/401/408/409 return HTTP 404 (topic-ID gaps — deleted or never created). 25+ new posts across new + existing topics.
- **ClawHub: 115 new skills** in-window from 53 publishers (single full-coverage page, `limit=200&sort=newest`, newest 2026-11-09T09:08Z, oldest 2026-11-07T13:33Z). Publisher concentration low; max 9 skills/publisher.
- **GitHub: 56 new repos** created in-window. Max stars = 3. Roughly a third are junk/template forks. **One new community-curated use-case corpus** (42 pt-BR use cases).
- **ROI / revenue: STILL ZERO.** No paying customer, revenue figure, cost-per-task, or hour-saving claim was produced by any *first-party community report* in-window. All ROI numbers found on the open web are third-party SEO listicles with no attribution (see §7).
- **Biggest new real-world artifact:** ClawHub skill `jackbrigs/hominoport` publishes an **explicit EUR price list for human engineering services** (250 EUR technical verdict, 200/450 EUR infra rescue, from 200 EUR on-site observation, Limassol/Cyprus) — the first concrete per-task price list seen on ClawHub.

---

## 1. Reddit r/openclaw — 8 new posts

Source: `https://www.reddit.com/r/openclaw/new/.rss?limit=50` (Atom feed; `updated` == `published` for all 8 in-window items, so no edit-time ambiguity this window).

| # | Published (UTC) | Title | URL | Type |
|---|---|---|---|---|
| 1 | 2026-11-09T06:47:13 | Heartbeat spamming me | https://www.reddit.com/r/openclaw/comments/1xrkrj2/heartbeat_spamming_me/ | failure/noise |
| 2 | 2026-11-09T05:27:36 | OpenClaw v2026.11.2 patch fixes update trouble, missing reminders and duplicate chat widgets | https://www.reddit.com/r/openclaw/comments/1xrjej1/openclaw_v2026112_patch_fixes_update_trouble/ | release |
| 3 | 2026-11-09T03:18:47 | Struggling to validate a "Deep Research" agent. What's your biggest frustration with current AI search tools? | https://www.reddit.com/r/openclaw/comments/1xrh0rq/ | builder/cold-start |
| 4 | 2026-11-09T02:56:49 | Built an open-source skill to fight LLM hallucinations via multi-source cross-verification… | https://www.reddit.com/r/openclaw/comments/1xrgkvy/ | builder/cold-start |
| 5 | 2026-11-08T15:06:33 | Successful update from 9.9 to 11.1 | https://www.reddit.com/r/openclaw/comments/1xr0ik3/successful_update_from_99_to_111/ | **deployment** |
| 6 | 2026-11-08T13:01:57 | Since moving to Bun from Node openclaw takes 2gb of ram? | https://www.reddit.com/r/openclaw/comments/1xqxx7a/ | perf/failure |
| 7 | 2026-11-08T12:57:11 | How to install and use? | https://www.reddit.com/r/openclaw/comments/1xqxtp6/ | new user |
| 8 | 2026-11-08T11:30:07 | Sponsor @openclaw on GitHub Sponsors | https://www.reddit.com/r/openclaw/comments/1xqwcm8/ | **monetization** |

### 1.1 Deployment report — "Successful update from 9.9 to 11.1" (u/neelkanth97) — **NEW, real deployment**
- Upgrade 10.10 → **decided on 11.1 instead**; took **~2 hours** total, of which the poster attributes ~40 min to their own delay.
- **Failure mode (NEW, concrete):** "the dumbass agent had killed the gateway to perform the update, and in the process killed itself so nothing happened." The agent supervising its own upgrade died with the gateway. Mitigation used: `recovery.md` files, then **handed off to claude.ai** to finish the upgrade, ran `doctor` fixes and maintenance while the gateway was offline.
- **Stack after upgrade (NEW):** **3 agents** across **multiple providers (claude, gpt, glm, deepseek, Gemini)** with **WhatsApp + Slack** integrations. "the new webui is nice."
- No hours-saved, revenue, or cost figure. **CONFIRM** baseline pattern that upgrade paths are the pain point; **NEW** concrete agent-self-kill-during-upgrade failure and the recovery.md workaround.

### 1.2 "Heartbeat spamming me" (u/Alexastor_xxx) — **NEW failure**
- Heartbeat keeps spamming the main session and spilling into Telegram; the `NO_REPLY` message plus the agent's own commentary "wastes tokens". User already applied a JSON prompt telling the AI to stay silent when nothing changed — insufficient.
- Comments (retrieved): `/u/barmmerm` "have you asked your agent?"; poster: "Maybe I should try to arrange isolated sessions for the heartbeat"; `/u/arglarg`: **"eventually I turned off the heartbeat"** — the only concrete remedy offered in-thread is disabling the feature. No config-level fix surfaced.
- Sentiment: mildly negative, workaround fatigue.

### 1.3 v2026.11.2 release thread — **NEW release facts**
- **113 pull requests, 64 contributors.** No new features, fixes only: (a) `update repair` could refuse to run; (b) **scheduled reminders disappearing**; (c) duplicate Canvas widgets/previews as replies finish.
- Comment thread (retrieved): Arch users ask what `pacman inspection failed during pacman query` means in the update path; answer = "Pacman is the package manager from Arch Linux" — the update path probes the distro package manager.
- Note: the "reminders disappear" fix in 11.2 corroborates Discourse #356's Discord/ownerOrigin reminder failures (see §2).

### 1.4 Cold-start builder posts — net-deep-research (u/First-Leg-1282) — **NEW**
- **Two near-duplicate posts** (02:56Z and 03:18Z) from the same author: open-source (MIT) OpenClaw skill `net-deep-research` for multi-source cross-verification with a "Counter-Evidence Round"; privacy-first/local-first, handles no user data.
- Explicitly self-described as **"stuck in the classic cold-start loop"** — needs first users, wants validation before building further. No adoption, no downloads, no numbers. Duplicate posting itself signals zero traction.

### 1.5 Bun RAM regression — "Since moving to Bun from Node openclaw takes 2gb of ram?" (u/mike8111) — **NEW**
- **2 GB RAM** for an idle OpenClaw after moving from Node to **Bun**, on a 24 GB Mac mini running local models. Poster calls it "a heavy tax." Comment retrieval was blocked (429) — **no corroboration this window**.
- Relevant to the recurring resource-overhead theme; first explicit Bun-vs-Node RAM datapoint observed.

### 1.6 New-user security posture — "How to install and use?" — **NEW sentiment data**
- Poster intent: **"want to automate applying for the jobs."** (Job-application automation is a recurring end-user goal; no throughput or ROI reported.)
- Thread (11 comments, retrieved): mixed. Recurring advice = **containerize** (VirtualBox, Docker), use a **cheap VPS**, use **Ollama + local models** (`gemma4 31b:cloud`, "pay per use, but free models are free"), "never run it on your personal computer" is called a **"myth in end of 2025"** by one commenter, one says OpenClaw is "as safe or as dangerous as you allow it to be", one says put the gateway in a VM.
- **Competitor mentions in-window: essentially none.** The only competitor reference inside the 8 in-window posts is **claude.ai** (post #5, used to finish an upgrade) — Claude Code appears 0 times in in-window post bodies.

### 1.7 "Sponsor @openclaw on GitHub Sponsors" (u/kentaro36) — **NEW, monetization signal**
- "I just sponsored openclaw. Go sponsor your open source dependencies!" — links `github.com/sponsors/openclaw?o=sp&sc=r&sp=moruku36` (a **sponsored-tier** URL, i.e. a paid GitHub Sponsors tier, not a free star).
- Comment retrieval blocked (429). **First GitHub-Sponsors-tier action observed on the subreddit.** No amount disclosed.

### 1.8 Competitor mentions — **boundary note**
- The often-cited competitor thread *"How can OpenClaw be more proactive…"* (u/… — compares OpenClaw vs **ChatGPT Dots** and **Instinct**: "ChatGPT released Dots, which blew everything I built with OpenClaw out of the water… OpenClaw still falls short" while conceding "in terms of connectivity, tools, and power, OpenClaw is still far superior to both Dots and Instinct") was **published 2026-11-08T04:20:51Z — 5 hours BEFORE the window opened**. It is therefore NOT an in-window finding; it only confirms the standing competitor baseline.

### 1.9 Blocked Reddit sources (honest log)
- `www.reddit.com/r/openclaw/comments/<id>.json` → **403** (all attempts).
- `comments/<id>.rss?sort=confidence` → **429** on most retries; recovered successfully for **1xrkrj2, 1xqxtp6, 1xrjej1, 1xrgkvy** (4 of 8).
- Still blocked after ~5 retry rounds with backoff and UA rotation: **1xr0ik3** (the deployment post — biggest loss), **1xqxx7a** (Bun RAM), **1xqwcm8** (GitHub Sponsors), **1xrh0rq**.
- `old.reddit.com` mirror returned empty bodies.

---

## 2. Discourse community.openclaw.ai — 8 new topics, 25+ new posts

Sources: `https://community.openclaw.ai/latest.json`, `/t/<id>.json`, `/t/<id>.json` per topic. High-water mark 397 → now **410**.

### 2.1 New topics (IDs > 397)

| ID | Created (UTC) | Title | Posts | Notes |
|---|---|---|---|---|
| 398 | 2026-11-08T12:55:57 | Can I connect my Anthropic subscription? | 1 | Unanswered. User asks whether Anthropic subscription use in OpenClaw can get them banned; "official answer" requested. **NEW** — subscription-ToS risk question, no official answer in-thread. |
| 402 | 2026-11-08T15:08:09 | Open Agent Memory: inspectable PostgreSQL-backed memory for OpenClaw | 1 | **NEW third-party integration.** Apache-2.0 self-hosted memory engine; OpenClaw memory-slot plugin sends *approved completed human turns* to OAM, returns cited fast recall before later turns, exposes `memory_search` + exact-ID `memory_remove`; storage = PostgreSQL/pgvector indexed with configured models. Separation of interaction-derived memory vs document Resources. Author: rocke2020. |
| 403 | 2026-11-08T17:59:47 | GitHub system authorization fails: GitHub CLI (gh) required on Gateway host | 1 | Duplicate of 404 (same author, same text). |
| 404 | 2026-11-08T18:06:16 | GitHub CLI (gh) missing on managed Gateway – system authorization fails | 2 | **NEW deployment blocker.** u/Eduardo_Valentim, OpenClaw **2026.10.9**, Linux 6.12.113+deb13-amd64, **managed OpenClaw dashboard with no shell/terminal access to the Gateway host**. Goal: authorize GitHub for the system account + create a **private backup repository**. Error: *"GitHub CLI (gh) is required on the Gateway host. Install it and retry."* Fix path: hosting provider / gateway admin must provision `gh` on the Gateway service PATH (and bake it into the image if containerized). |
| 405 | 2026-11-08T19:58:17 | Codex plugin provenance and installation preserving package-age policy | 1 | Compliance-style request for an independently verifiable evidence bundle (core 2026.10.3 + plugin 2026.10.2 historical inventory; candidate v2026.11.1 commit `4ffdd2047d192dd65554de3c8c46c0e0197c6e2a`, verified signature badge). Enterprise audit posture. |
| 406 | 2026-11-08T22:22:14 | Codex child completion loses host capability: supported diagnostics and progress-card scope question | 2 | **NEW negative confirmation.** Parent announcement fails with generic host-capability error, Goal pauses. Maintainer checked **2026.11.2 vs 2026.11.1**: `progress-card-store.ts`, `progress-card-store.worker.ts`, `infra/sqlite-transaction.ts`, `infra/kysely-sync.ts`, `infra/sqlite-database-write-receipts.ts`, `agents/harness/host-source-authority.ts` are **byte-identical between the two tags**; `writePreparedSessionProgressCard` still writes without `withSqliteDatabaseWriteScope`. **⇒ upgrading to 11.2 does NOT fix Codex child completion.** Related upstream issue #178731. |
| 407 | 2026-11-09T01:08:43 | Focus Week Nov 9th-Nov 15th, 2026 - Agent Templates | 2 | **NEW community event.** Weekly template-sharing drive: build an agent template, post it in Build & Showcase with install instructions and a "Blobster" persona, install another Clawtributor's template and report friction. Maintainer @patrickerichsen; co-maintainers Colin, @Josh Avant. First reply (u/AmelioMansour): will contribute templates stuck since January. |
| 410 | 2026-11-09T03:16:10 | Talk voice approval loop repeats after spoken and typed yes confirmations | 2 | **NEW root-cause explanation.** macOS 26.3.1, package 2026.10.3, browser Talk/voice + WebChat. Action returns `VOICE_CONFIRMATION_REQUIRED`; saying *and* typing "yes" still re-prompts. Maintainer: **PR #159697 (committed Oct 11, 2026) removed the separate voice-confirmation gate** — authenticated Talk requests now use text-equivalent permissions while keeping normal approvals. The reporter's 2026.10.3 **predates** that change, so the old gate is the lead cause. |

**Topic-ID gaps:** `/t/399.json`, `/t/400.json`, `/t/401.json`, `/t/408.json`, `/t/409.json` → HTTP 404 (no such topic). 403 is a duplicate of 404 (same user, same body) — duplicate-topic pattern, not two distinct issues.

### 2.2 New posts in existing topics

- **#392 "Force refreshing webchat UI every 30s after upgrade to 11.1" — ROOT CAUSE FOUND AND FIXED (NEW, high value).**
  - The 30-second forced full-page reload cycle was traced to a **stale CSP hash in the reverse proxy**, not to a connection TTL.
  - Mechanism: the deployment serves the Control UI through **nginx**, which overrides the gateway's `Content-Security-Policy` (to allow OA iframe embedding via `frame-ancestors`). nginx's CSP allowlist still carried the **old 2026.10.9 sha256 hashes** (`g30CWRMlZumM…`, `3ZtS7Pp946oZ…`); **11.1 ships 4 inline script blocks** with new hashes (`EO+JKv+WgCM…`, `ztqOvJ3wfRr…`, `kd6XuC+au3iK…`), none of which were allowlisted → browser blocked every inline script → persistent recovery trigger → reload.
  - Contributing UI change identified in `ui/src/app/stale-chunk-reload.ts`: `probeControlUiDocument()` sends `HEAD …/index.html`; `reloadControlUiDocument()` adds `openclaw_mount_recovery=Date.now()` and calls `window.location.replace()`; `RELOAD_GUARD_WINDOW_MS = 30_000` spaces repeated automatic reloads of the same build (10.9 allowed only one reload per build; 11.1 changed it to a 30 s delay). **File unchanged in 11.2.**
  - Maintainer's watchdog description (for ruling out other causes): health request after 60 s of inbound silence, or 15 s with an unanswered request, then 10 s wait; reconnect uses close code **4000**, not the observed 1001.
  - **Fix confirmed by the reporter (u/sam) 2026-11-09T05:14Z.** Verified via an auth shim logging every HTTP request: HEAD index.html → GET / → openclaw /session-entry → WS-UPGRADE / → GET sw.js → avatar calls, every 30 s.
- **#394 "Windows: Codex owner-verification 403 persists after updating OpenClaw" — CONFIRM (baseline).**
  - u/FabricareMike update (2026-11-08T20:15Z): **OpenClaw core AND `@openclaw/codex` both 2026.11.2; Native Codex 0.164.0**; managed-binary lint check passes; `/readyz` returns HTTP 200 with `ready/coreReady` and no failing checks; local notes search and `memory_get` return 200. **Yet** a generated-reply test through Telegram at 20:10:54 UTC on a **newly rotated native thread** still failed with **HTTP 403 "Codex cannot verify the owner of this model request."** No reply delivered. Asks for diagnostics that preserve the security checks, not a guard bypass. Maintainer: updating + rotating the thread did **not** resolve the repro; issue **#165739** also has a fresh main-session repro; asks for a sanitized reason code identifying which local ownership predicate rejects the request.
  - **⇒ The Windows/Codex owner-verification 403 is NOT fixed by 11.2. Baseline CONFIRMED, now with exact version numbers.**
- **#385 "Safe update from 2026.10.3: SQLite worker queue capacity reached during snapshot" — NEW version facts.**
  - Maintainer correction: the referenced fix is **not in 2026.11.1**; it **is present in 2026.11.5-beta.1**, with no confirmed stable release yet. State relocation supported via `OPENCLAW_STATE_DIR` (recommended for a "Zeus" 20 GB database) — backup → verify → stop the service that actually manages the Gateway → restore to external drive → enough temp storage for verification.
- **#356 "Scheduled Discord read fails: matching recorded creator origin" — NEW issue/PR pointers.**
  - joe points to issue **#162087** (9.7: scheduled announce fails "Scheduled account X is unavailable" for pre-9.7 account-mode jobs owned by DM sessions — missing `ownerOrigin` + direct-key parse gap). Another participant reports the installed update path explicitly enables caller-origin recapture when `toolsAllow` is supplied even with the same cap, and asks whether **PR #186833** plus explicit same-cap reauthorization from the authenticated original Discord DM could recover the existing unknown-origin job **without executing the production job**.
- **#381 "OpenClaw Ollama Troubleshooting" — NEW environment detail.**
  - OpenClaw configured for `192.168.1.250:11434` fails (curl exit 7 after 3071 ms) while `127.0.0.1:11434` on the **Umbrel** host works. Host port 11434 listens **only on loopback**, and the listener is a **Node process, not Ollama** (Ollama itself = container `ollama_ollama_1`); next step is `docker inspect` network mode for `openclaw_gateway_1` vs `ollama_ollama_1`. Docker networking isolation between gateway and Ollama is the emerging root cause.
- **#407 reply, #410 reply, #392 replies — as above.**

### 2.3 Discourse sentiment
Predominantly **supportive-but-evidence-driven**: the recurring maintainer pattern is "read the published source, compare tags, name the exact file/line/PR, and refuse to propose a guard bypass." Zero promotional content, zero marketing claims. Notable: several reporters now supply version numbers, commit SHAs and PR IDs unprompted (audit-grade reporting).

---

## 3. ClawHub — 115 new skills, 53 publishers

Source: `https://clawhub.ai/api/v1/skills?limit=200&sort=newest` (single page fully covers the window: newest `createdAt` 2026-11-09T09:08:27Z, oldest on page 2026-11-07T13:33:10Z). `offset=200` did not advance the cursor (returned the same 115 in-window items), so a second page added nothing. Baseline comparison: **93 skills / 46 publishers** on 11-08 → **115 skills / 53 publishers** for this 24h window.

### 3.1 Publisher concentration (in-window)
| Publisher | Skills | Character |
|---|---|---|
| yanghhu | 9 | Complete media-production suite: ai-podcast-voiceover, ppt-voiceover, novel-video-voiceover, ai-subtitle-generator, voice-cloning-voiceover, text-to-speech-voiceover, movie-recap-voiceover, koubo-voiceover, ai-video-voiceover-subtitles. All emit WAV + SRT + per-sentence timeline manifest, target 剪映/CapCut. |
| ee324 | 9 | **A2AWire agent economy**, one platform, 9 surfaces: a2awire-join, -rooms, -inbox, -jobs, -hire, -wallet, -spend-guard, -benchmarks-host, -benchmarks-compete. Dual-network Kernel wallets (testnet + mainnet), funded escrow, "read a prize's funded state honestly". |
| orensegal | 8 | "Signal Skills" family (podcast, review-scout, research-suite, outreach, report, scout) + litmus-evals + sous-test-audit. **Baseline-known** monetizer; window shows the family expanding with 2 new eval-quality skills (litmus-evals, sous-test-audit). |
| montassirbbk-dot | 6 | **genexxis** suite — pay-per-call APIs via **x402 (USDC on Base), no API key/account**: security-audit (CVE, CISA KEV, OSV scan of ≤50 packages, GitHub Actions/Dockerfile lint, HTTP security header grade, TLS check, SPF/DKIM/DMARC, prompt-injection classification), web-data (URL→clean markdown), company-research (SEC EDGAR, 5y standardized XBRL, Form 4, Federal Register), market-data (crypto spot/DEX), crypto-safety (OFAC SDN/UN sanctions screening), + hub skill. |
| huhoo | 5 | Chinese A-share/finance citation-anchored skills: cue-cn-supply-chain-map, cue-cn-restructuring-tracker, cue-cn-shareholder-return, cue-cn-equity-research-note, cue-employee-stock-ownership-cn. Explicit anti-hallucination contract: unretrieved items must be written "未取到" (not retrieved), no filling from general knowledge, no buy/sell advice. Machine-checkable scripts for format, source anchors, and red lines. |
| agenticweb4 | 5 | Frontend architecture explainers (FSD, feature-first, agent-DX CLI) — **documentation/explainer skills, not deployments**; 2 with `-cn` twins. |
| omnivideo | 5 | Commercial-site-specific prompt/brief builders (gpt-image-2 templates, omni-flash-video, galite-analytics-reports, carrier-pidge, deco-my-tree) — each hardcodes a named external product/URL; **lead-gen noise, no deployment evidence**. |
| voronindenis5 | 5 | Consumer decision skills: reseller-shipping-rater, car-lease-end-negotiator, timeshare-exit-strategist, hoa-nightmare-navigator, college-aid-award-decoder. |
| agentsgot-stack | 4 | agentsgot executor/tester/arbitrator/publisher — **stake AGT** to claim paid tasks, deliver, draw testers, collect rewards. |
| shikshannivesh | 4 | "SN Data": sec-filings-and-8k-events, 13f-fund-holdings, sec-insider-trades, us-company-financial-statements. |
| lovefromio, wlc-dev, kelegele, scavio-ai, dev-skills-operator, lexxx233, whitekiwi, berkinory, zhaoxinghua09-cell, rommm13 | 2 each | Huawei Cloud (KooCLI) read-only listings, TCGplayer/Best Buy structured JSON, CLI-manager, MCP-server-audit, compliance (SOC 2/HIPAA/ISO 27001/42001), design-system, analytics (invisit, GA Lite), Russian water-meter + PocketBook, LGD audit/evo meta-dispatchers. |

Remaining 33 publishers contributed 1 skill each.

### 3.2 Notable monetized / industrial / enterprise skills
- **`jackbrigs/hominoport` — NEW, first explicit per-task EUR price list on ClawHub.** "Order work from one engineer in Limassol, Cyprus": neutral technical verdict on another party's deliverable **250 EUR**; infrastructure diagnostic and rescue for your own systems **200/450 EUR**; signed on-site observation in Cyprus **from 200 EUR**; free feasibility note. First **human-services** marketplace skill observed (all others are API/data pay-per-call).
- **`montassirbbk-dot/genexxis*` (6 skills) — NEW monetized infrastructure.** x402/USDC-on-Base pay-per-call, explicitly "no API key or account", all examples verified against the live endpoint. Note this is a **wrapper over someone else's paid API catalog**, not a proprietary data product.
- **`ee324/a2awire-*` (9 skills) — NEW.** Agents take funded, escrowed "system jobs" and are paid out; benchmark contests with Merkle-committed task banks; peer agent rooms; spend-guard against a human's spending rules.
- **`agentsgot-stack/agentsgot-*` (4 skills) — NEW.** Stake-token (AGT) task marketplace with tester/arbitrator pools, commit-reveal dispute voting.
- **`airdropdogs/agentjob` — NEW.** Provider onboarding + connector setup + **owner balance/earnings queries**, earn **USDC**.
- **`leadpoet/leadpoet-workspace` — NEW.** B2B leads + buying signals, email/LinkedIn outreach, CRM pipeline via MCP. **Only skill in the whole window with a star (1).** 0 installs, 74 downloads.
- **`jackbrigs/hominoport` / `zhanfu-browser` / `gde-benzin`** — real commercial domains: Chinese marketplace shop automation (Playwright/WebDriver, `scripts/open_mall.mjs` for opening stores), Russian fuel-station/fuel-price map on "our map" (author-sanctioned MIT-0 ClawHub build of a private API, v1.1.2, **43 tests**).
- **Industrial/utility-adjacent:** `rommm13/mosobleirc` (reads household **water meters from photos** and submits readings safely — utility billing), `rommm13/pocketbook-cloud` (e-reader library sync + 2FA book management), `screenata/screenata-compliance` (SOC 2 / HIPAA / ISO 27001 / ISO 42001), `shikshannivesh/sec-*` (US regulatory filings), `huhoo/cue-cn-*` (Chinese A-share filings).

### 3.3 Engagement reality check (in-window skills)
- **Installs: max 1** (hornlib ×2, pocketbook-cloud, mosobleirc, online-poll-maker).
- **Downloads: max 109** (peakflo-spaces 109; anti-rea 103; hornlib 79; litmus-evals 80). All in the 70–110 band — i.e. a flat low band consistent with an install-on-publish probe, not usage.
- **Stars: 1 total** across 115 skills (leadpoet-workspace).
- **Top-of-list installs/downloads ranking is essentially random** relative to skill quality (a French-horn fingerings chart outranks a security-audit tool) — consistent with the download counter being incremented by a bot, not demand.

### 3.4 Publisher-level continuity (CONFIRM vs NEW)
- **CONFIRM:** `orensegal` continues publishing "how to monetize an agent" skills (window adds litmus-evals + sous-test-audit to the signal family).
- **CONFIRM:** paid-API-wrapper pattern continues and is now **plural** (genexxis joins walidboulanouar's looot-* family from baseline).
- **NEW:** first **human-service** price list (hominoport), first **staking-token** marketplace family (agentsgot), first **wallet/escrow/rooms** platform family (A2AWire, 9 skills), first **Russian/Chinese commercial vertical** skills in-window (gde-benzin, zhanfu-browser, mosobleirc), first **language-localized clone pairs** at scale (agenticweb4 `-cn` twins).
- **NEW:** `jackbrigs` (hominoport) is a **new publisher identity** in-window offering paid human engineering.

---

## 4. GitHub — 56 new repos created in-window

Source: `https://api.github.com/search/repositories?q=openclaw+created:>2026-11-08T09:28:00Z&sort=stars&per_page=100` (first attempt with `created:2026-11-08T09:28:00Z` returned `total_count: null` + rate-limit message; `created:>...` worked. Note: unauthenticated GitHub API was rate-limited on the first query but the second succeeded.)

- **Total: 56.** Stars: **max 3** (Jokert0/openclaw-arona-ui — a Chinese "Blue Archive"-styled Control UI theme). Next: **1** (zevarihq/ai-sdr-kit). All remaining 54 have **0 stars**.
- ~10 repos are the same author's account series (`ACRT-CR/openclaw-480-cr1..cr10`, identical "The AI that really does things. Any OS. Any Platform. The lobster way. 🦞" description) — **spam/fork noise**. `4GeeksAcademy/*` accounts for 7 more near-empty course repos.
- **Real deployment candidates:**
  - **`saraivabr/awesome-openclaw-brasil` — NEW community-curated use-case corpus.** Initial release **2026-11-09T04:22:06Z**, **42 use cases in pt-BR**, grouped by category (research/content/automation/business/personal/research/market). Verified: README badge says `usecases-42`. **This is the first non-English community use-case curation corpus found to date.** Content quality is mixed: some entries are first-person deployments with links, others are video-derived or template-like (e.g. market-research-product-factory explicitly credits "Alex Finn's YouTube video" + the `last30days-skill` by Matt Van Horde).
    - **Best-evidenced entry: "Pipeline Autônomo de Desenvolvimento de Jogos Educacionais"** (real deployment, "El Bebe Games"): a father building a clean, ad-free educational-game portal for his daughters Susana (3) and Julieta (expected); **40+ educational games planned**, backlog of **41 games**; claimed throughput **"1 new game or bug fix every 7 minutes"** via an autonomous "Game Developer Agent" enforcing a **"Bugs First"** policy. Linked source: a LinkedIn activity post; code `github.com/duberblockito/elbebe`; live site `elbebe.co`.
    - **Verification against the repo:** `duberblockito/elbebe` — **9 stars**, created 2026-02-17, **last push 2026-02-19**, description "Juegos para Susana y Julieta"; tree contains **58 `index.html`** files and a `games/` dir with **7 game directories** (002-arrastra-fruta, 002-super-formas, animalitos-suenan, art-battle, caja-sonidos, laberinto-aventura, pintura-dedos) plus ~30 IMPLEMENTATION-/QA-/WORKFLOW-REPORT markdown files and a `bugs-resolved/` folder with 30+ named bug reports.
    - **⇒ Assessment:** the deployment is real (repo + live site), but **it is from Feb 2026, not new this window** — the awesome list is new, the underlying project is not. The "1 game per 7 minutes" and "41 games" figures are the author's own plan/backlog claims; the repo shows **7 shipped games**, not 40+. **No revenue.**
    - Other entries reference real external artifacts (e.g. `openclaw plugins install @xquik/tweetclaw`, `clawhub.ai/kai-jar/gmail-oauth`, `mvanhorn/last30days-skill`) — i.e. the corpus is an index of ecosystem pieces as much as of deployments.
  - **`zevarihq/ai-sdr-kit` (1 star, MIT)** — open-source AI SDR harness, positioned as "the open alternative to HeyReach, Apollo and Gojiberry"; ships `agentify-outbound` (standing orders, trust ladder, 8 phases, standing-order-to-autopilot SOP) and `outbound-sequence-playbook`; works with OpenClaw, Hermes Agent, Grok bot, Claude Code, Codex via MCP; agent writes with its own model, Zevari does the sending. **NEW competitive category: agent-harness-native sales development.** No revenue numbers.
  - **`clawSean/gateway-watchdog`** — deterministic auto-revert controller for gateway config/plugin changes. Outlives the gateway (separate OS process), rollback trigger is a health probe with **never an LLM** in the decision path; supports macOS LaunchAgent (ClawPop) and Linux user-systemd. Motivated by "the Telegram lifeline dies and nobody can fix it remotely."
  - **`ailuvu-art/openclaw-on-mac`** — OrbStack/Docker container for macOS; agent gets full access *inside the container* but sees only repo-local mounted folders (config/, workspace/, secrets/). Direct response to the Reddit containerization advice in §1.6.
  - **`ladylikegroup-oss/openclaw-subagent-fixes`** — MIT community **patch set** for OpenClaw **2026.10.5** (base commit `1b58cb9a1b4f4353e1add63c8506db4d890962e8`): subagent completion, parent wake-up identity, peer follow-up, refused process launch. Includes source changes, regression tests, diagnostics; explicitly *not* an official release.
  - **`jcsiq98/remembering-wrong`** — "Do agents check an inherited memory against the records they can reach? An eval of frontier agents on OpenClaw." Eval/benchmark research.
  - **`mazihua-lgtm/agent-guard`** — read-only local security audit for personal AI agents (exposure, secrets, skills).
  - **`oasis-main/oasis-claw-core`** — security/ops layer for the gateway: reviewer, sandbox, approvals, audit.
  - **`shuisadev/openclaw-pr-195744-proof`** and **`openclaw-pr-195304-proof`** — proof repos for upstream PRs (**PR #195744** node worker bind-mount comma paths; **PR #195304** container-session proof). Note the upstream PR numbers (195304/195744) are far above the #178731/#186833/#165739/#162087 IDs cited on Discourse the same day — inconsistent PR-numbering series across surfaces.
  - **`singhalsantosh/ai-office-assistant`** and **`ai-ops-assistant`** — "tool-agnostic, OpenClaw-style" templates (Outlook/calendar/Teams; Splunk/Dynatrace).
  - **`yeye296/xiaoxia-keepalive`** — keep a hosted Xiaoxia cloud computer awake 7×24 (long-lived gateway WS + auto-start fallback).
  - **`avnersorek/OCFree`** — plugin running coding sessions on free OpenCode models; **`cyberphysicsai/chainchat`** — local workspace with Proof-of-Interaction + own model API; **`AgentXenAI/clawfileserver`** — file browse/edit over HTTP on the Gateway port; **`irangareddy/skills`** — cross-harness skill set (Claude Code, Codex, Pi, OpenClaw).
- **⭐ Star ceiling unchanged at 3.** No repo in-window crosses the visibility bar that would signal an externally adopted deployment.

---

## 5. openclawradar.com — corpus no longer static (baseline CORRECTION)

`https://openclawradar.com/sitemap-en.xml` (5,186 `<loc>` entries). Sitemap `lastmod` now reaches **2026-11-08** with **2 articles published in-window**:
- `openclaw-gateway-desktop-app-cli-service-conflict` — `datePublished` **2026-11-08T12:16:17Z** (in-window), `dateModified` identical.
- `hyperflow-h3-flash-compressed-video-audio-diffusion` — `datePublished` **2026-11-08T12:15:10Z** (in-window).
- Also `openclaw-cron-isolated-sessionkey-bug-fix` (2026-11-07T12:15:02Z, just outside).
- **⇒ CORRECTION to baseline:** the openclawradar use-case corpus is **no longer static since ~2026-10-27** — it published 2 items inside this window. The one relevant to use cases is the install-path article.

**Install-path chaos — CONFIRMED with a new decisive detail.** The 2026-11-08 article documents a Linux Mint user who spent **two days** on a gateway service that reverted after every repair:
- Three installs competing: **npm CLI 2026.10.5 under nvm** (Node 24.16.0; system Node 18.19.1 lacks `node:sqlite`), **desktop AppImage 2026.11.1**, and **Snap OpenClaw 2026.6.35**.
- `openclaw gateway status` kept showing `Command: /snap/bin/openclaw.daemon` after every repair, with `OPENCLAW_STATE_DIR`/`OPENCLAW_CONFIG_PATH` in the service env and the old faults restored (TimeoutStopSec 90s, KillMode control-group).
- `openclaw doctor --fix` refused to run — service management skipped because of a **non-default state dir** caused by the Snap-written unit.
- **The gateway exited with code 78** once the newer CLI edited the config. Desktop app showed `GATEWAY OFFLINE` while the browser Control UI on the same gateway worked.
- **Root cause error string (NEW, previously unseen):** running the Snap daemon in the foreground printed *"Refusing to run automatic gateway startup migrations because this OpenClaw binary (2026.6.35) is older than the config last written by OpenClaw 2026.10.5."*
- Fix that held: close desktop app → `openclaw gateway install --force` from the standalone CLI → restart → verify with `openclaw gateway status` **and** `openclaw health` → uninstall the desktop app → `sudo snap remove openclaw` → restart → confirm the unit still points at the standalone install.
- Generalized lessons: find the process rewriting the file instead of repairing again; run the failing binary in the foreground; read every version number before blaming a build; verify with a fresh status+health pair, never with installer output.
- **This CONFIRMS the baseline "install-path chaos (npm CLI + AppImage + Snap fighting over one systemd unit, exit code 78)" — all three baseline elements are present — and adds the version-mismatch guard message and the two-day time cost.**

---

## 6. Showcase / community site

- `https://openclaw.ai/showcase` → **150,922 bytes**, unchanged from baseline; 3 `nofollow` occurrences. **No change in size.** (Baseline said "unchanged at 150,922 B, 79 cards, only nofollow attribute changes" — the byte count still matches exactly.) No new showcase card detected via size; card-level check not re-performed byte-diff (no prior copy on disk for comparison), so **card-count change remains unverified**.

---

## 7. ROI / revenue hunt — **ZERO first-party attribution**

Searched via 4 web_search queries (cap reached) covering: ROI/hours-saved/revenue phrasing, "how I use OpenClaw" deployments, reddit use-case posts, per-month revenue.

**Result: NO first-party community-reported revenue, paying-customer count, cost-per-task, or hours-saved figure was produced in-window.** Every ROI number on the open web is third-party SEO listicle content with no attribution:
| Claim | Source | Attribution |
|---|---|---|
| "10 use cases save 5-20 hours/week each — ranked by real ROI" | betterclaw.io/blog/best-openclaw-use-cases | none |
| "Enterprises report 200+ hours saved monthly" | openclawpro.co/blog/openclaw-roi-enterprise | none ("enterprises report") |
| "10 best use cases ranked by real time saved per week" | beetleden.com/blog/best-openclaw-use-cases | none |
| "morning briefings to $62K revenue agents" | solvea.cx/blog/openclaw-use-cases | none — **highest revenue figure seen anywhere in-window, entirely unattributed** |
| "25+ real-world OpenClaw use cases" | tldl.io/blog/openclaw-use-cases-2026 | none |
| "15 OpenClaw use cases and examples" | kanerika.com/blogs/openclaw-usecases | none |
| workflow automation / business use case / enterprise risks guides | spaceotechnologies.com, seeai.net, booster-digital.com, codebridge.tech, salamhusain.com, superframeworks.com, insights.reinventing.ai | none |
| OpenClaw monthly cost per month | thunderbit.com/blog/openclaw-cost-per-month | cost, not savings |

**Assessment:** the "hours saved" and "$62K revenue" figures are **marketing content farm output**, not community reports. They must not be recorded as ROI findings. This is consistent with the baseline: the 37-ATS-submission figure remains the **only** concrete throughput number in the corpus, and **revenue-attributed ROI is still ZERO**.

**New hard numbers found in-window (cost-side, not revenue-side):**
- `jackbrigs/hominoport`: 250 EUR per technical verdict, 200/450 EUR per infra diagnostic/rescue, from 200 EUR on-site observation (Limassol, Cyprus).
- `genexxis`: pay-per-call pricing denominated in USDC on Base via x402 (per-call prices not disclosed in skill summaries).
- `agentsgot`: task rewards denominated in staked **AGT** (amounts not disclosed).
- `agentjob`: earnings denominated in **USDC** (amounts not disclosed).
- `elbebe`: 40+ games planned / 41-game backlog / "1 game or bugfix per 7 minutes" — claimed, **7 games actually shipped** in the repo.

---

## 8. Sentiment summary (in-window)

- **Reddit:** mixed-to-wry. Real-user friction is concentrated on (a) heartbeat noise/token waste, (b) upgrade/upgrade-self-kill, (c) Bun memory footprint (2 GB idle). New-user security anxiety is met with community advice to containerize; "never run on your personal computer" explicitly labeled a **myth**. One GitHub Sponsors action.
- **Discourse:** constructive and evidence-heavy; maintainer replies cite exact files, tags, PRs and issue numbers; several threads explicitly refuse to bypass security checks ("not a guard bypass"). Zero promotion.
- **ClawHub:** volume up (~+24% skills/day, publisher count 46 → 53), engagement flat (max 1 install, 1 star). Monetization shifts from "one vendor" to **four distinct token/payment rails** (x402/USDC, AGT staking, A2AWire wallets+escrow, AgentJob USDC) plus the first EUR-priced human service.
- **GitHub:** activity high but quality low; star ceiling 3; ~40% of new repos are forks/spam/course repos.
- **No competitor escalation in-window.** ChatGPT **Dots** and **Instinct** were not mentioned by any in-window post (the Dots/Instinct thread is 5h pre-window). Codex remains the dominant friction surface on Discourse (13 keyword hits in-window, all in Codex ownership/provenance/child-completion threads).

---

## 9. Blocked / inaccessible sources (honest log)

| Source | Result |
|---|---|
| `reddit.com/.../comments/<id>.json` | **403** (all) |
| `reddit.com/.../comments/<id>.rss` (no sort param) | **429** |
| `reddit.com/.../comments/<id>.rss?sort=confidence` | 429 on most attempts; **recovered for 4 of 8** posts after backoff/UA rotation |
| `old.reddit.com` comment RSS mirror | empty bodies |
| Discourse `/t/399,400,401,408,409.json` | **404** (no such topics) — ID gaps, not blocks |
| Discourse `/posts.json` | response shape lacks `post_stream` (API change) — worked around via per-topic JSON |
| GitHub search API | first call `total_count: null` + **rate limit exceeded** (unauthenticated, shared IP); `created:>` form succeeded |
| ClawHub `offset=200` | does not advance pagination; identical page returned |
| Web search #2 (`"how I use OpenClaw" …`) | **0 results** from provider |

---

## 10. Net-new claims for the cumulative log (NEW items only)

1. **Reddit: 8 new posts** in-window (baseline had 4 for the 11-08 window; this is a full 24h count). Source: reddit r/openclaw new RSS.
2. **Deployment:** u/neelkanth97 runs **3 agents across claude/gpt/glm/deepseek/Gemini** with **WhatsApp + Slack**; upgrade 9.9→11.1 took **~2 h** and broke because **the agent killed the gateway to upgrade itself and died with it**; recovered via `recovery.md` + handing the job to claude.ai.
3. **GitHub Sponsors tier action** on r/openclaw (u/kentaro36) — first observed.
4. **Discourse #392 root cause FOUND:** Control-UI 30 s reload loop = **stale nginx CSP sha256 allowlist** vs 11.1's 4 new inline-script hashes; `ui/src/app/stale-chunk-reload.ts` `RELOAD_GUARD_WINDOW_MS = 30_000` (changed from one-reload-per-build in 10.9); file unchanged in 11.2; reporter fixed.
5. **Discourse #406: Codex child-completion host-capability bug is NOT fixed in 2026.11.2** — six named source files byte-identical between v2026.11.1 and v2026.11.2 tags.
6. **Discourse #394 CONFIRM: Codex owner-verification 403 persists on core + @openclaw/codex 2026.11.2 with Native Codex 0.164.0**, fresh rotated thread, `/readyz` 200, memory_get 200.
7. **Discourse #385: SQLite worker-queue snapshot fix is in 2026.11.5-beta.1, not 2026.11.1**; `OPENCLAW_STATE_DIR` is the supported state-relocation lever (20 GB DB case).
8. **Discourse #404/#403: managed-Gateway deployments cannot complete GitHub "For system" authorization** — `gh` CLI must be provisioned by the hosting provider; the reporter has no host shell and wants a private backup repo.
9. **Discourse #402: Open Agent Memory** — Apache-2.0 self-hosted PostgreSQL/pgvector memory engine with an OpenClaw memory-slot plugin (`memory_search`, exact-ID `memory_remove`).
10. **Discourse #407: Focus Week Nov 9–15 2026 — Agent Templates** community drive (@patrickerichsen).
11. **Discourse #410: Talk voice-approval loop traced to PR #159697 (Oct 11, 2026) removing the separate voice-confirmation gate**; reporters on ≤2026.10.3 are on the legacy path.
12. **Discourse #398: Anthropic-subscription-in-OpenClaw ban question — still unanswered.**
13. **ClawHub: 115 new skills / 53 publishers** (baseline 93 / 46). Publisher concentration low; max 9 (yanghhu voiceover suite ×9, ee324 A2AWire ×9).
14. **ClawHub NEW monetization rails (4):** x402/USDC-on-Base pay-per-call (**genexxis** ×6), **AGT staking** marketplace (**agentsgot** ×4), **A2AWire** wallets+escrow+rooms+benchmarks (×9), **AgentJob USDC**; plus the **first EUR-priced human service list** (`jackbrigs/hominoport`: 250 EUR verdict, 200/450 EUR rescue, from 200 EUR on-site).
15. **ClawHub engagement flat:** max **1 install**, max 109 downloads, **1 star** total across 115 skills (leadpoet-workspace).
16. **ClawHub industrial/vertical (new):** Russian fuel-price map (`gde-benzin`, v1.1.2, 43 tests), Chinese marketplace store automation (`zhanfu-browser`), Russian water-meter photo-reading (`mosobleirc`), Huawei Cloud KooCLI listings, screenata SOC2/HIPAA/ISO.
17. **GitHub: 56 new repos**, max 3 stars, ~40% spam/course forks. **`saraivabr/awesome-openclaw-brasil`** = first pt-BR community use-case corpus (**42 use cases**, released 2026-11-09T04:22Z); its strongest entry is the real **El Bebe Games** deployment (9-star repo, live elbebe.co, 58 index.html, **7 shipped games** vs claimed 40+ / 41-game backlog / "1 game per 7 minutes").
18. **GitHub: `zevarihq/ai-sdr-kit`** (MIT, 1 star) — open-source AI SDR harness as an agent-native alternative to HeyReach/Apollo; works with OpenClaw/Hermes/Claude Code/Codex via MCP.
19. **GitHub: reliability/security tooling wave** — `clawSean/gateway-watchdog` (LLM-free deterministic auto-revert), `ladylikegroup-oss/openclaw-subagent-fixes` (community patch set for 2026.10.5, base commit `1b58cb9a…`), `mazihua-lgtm/agent-guard`, `oasis-main/oasis-claw-core`, `ailuvu-art/openclaw-on-mac` (OrbStack container with repo-local mounts).
20. **openclawradar is NOT static — CORRECTION:** 2 articles published in-window (2026-11-08T12:15Z and 12:16Z). The install-path article gives the **new decisive error string** — *"Refusing to run automatic gateway startup migrations because this OpenClaw binary (2026.6.35) is older than the config last written by OpenClaw 2026.10.5"* — plus the 2-day time cost, and confirms the baseline npm+AppImage+Snap/exit-78 triad.
21. **Showcase byte size unchanged at 150,922 B.**
22. **Reddit competitor check:** no ChatGPT Dots / Instinct / Claude Code mention in any in-window post (Dots/Instinct thread is 2026-11-08T04:20Z, pre-window). Codex = 13 Discourse keyword hits in-window; Claude Code appears 0 times in-window post bodies (one claude.ai assist in an upgrade thread).
23. **ROI: still ZERO first-party revenue attribution.** All "5–20 h/week" / "200+ h/month" / "$62K revenue" figures are unattributed SEO listicles.

### Standing corrections to baseline
- Baseline "Reddit r/openclaw: 4 posts in the 11-08 window" → **8 in the full 24h window** (4 on 11-08 after 09:28Z + 4 on 11-09).
- Baseline "openclawradar use-case corpus static since ~2026-10-27" → **NO LONGER STATIC** (2 articles published 2026-11-08T12:15–12:16Z).

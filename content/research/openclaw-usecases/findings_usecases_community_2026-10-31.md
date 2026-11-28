# Findings — OpenClaw Use Cases & Community Signal (Task 2: community sentiment + use cases/showcases/deployments/ROI)

**Date of run:** 2026-10-31 (Europe/Berlin)
**Window:** 2026-10-30T09:28:00Z → 2026-10-31T10:30Z (~24 h)
**Prior checkpoint:** 2026-10-30T09:28:00Z
**Author:** Researcher subagent (Task 2 of daily-insight-accumulator run, topic `openclaw-usecases`)
**Budget used:** web_search 1/5 · web_fetch 2/2 · exec/curl: unlimited (primary collection method)

---

## Executive summary

1. **The community's new signal is operational maturity, not new capability.** The only two new Reddit posts in the window are (a) a self-hosted read-only monitoring dashboard for local agents and (b) a user asking how to safely grant an OpenClaw agent real-world access (flights, job applications, home, health). Both are about *operating* agents at home, not about building new ones. **Confidence: confirmed.**
2. **The standout new use case is agent-to-agent contact delegation (OpenNodd)** — a forum post by `/u/d0v1k` (2026-10-30T18:20Z) describing an OpenClaw plugin where you add people's *agents* as contacts and ask "is Lena free Thursday", with a locked, tool-less, approval-gated answer set on the callee side. It is looking for 20 testers and explicitly supports both OpenClaw and Hermes over A2A. **Confidence: confirmed (primary source), adoption unverified (0 third-party users).**
3. **No new credible ROI metric appeared.** The only quantified outcome in the whole window is an *older, undated* showcase tweet (@astuyve, ❤️255: "OpenClaw just saved me $4,200 on a car"). Everything else is qualitative. Vendor content-farm pages remain the loudest "hours saved" source and remain unverifiable. **Confidence: confirmed absence.**
4. **Deployment friction is concentrating in two places:** (a) the **ClawHub publish path** (three separate forum topics within 4 minutes on 2026-10-30 all report publication stuck / security check never completing), and (b) **update-recovery / package-publication journals** (four forum topics still active with maintainer replies). Plus a wave of **157 new GitHub issues** in 24 h, 40 of them tagged `impact:ux-friction` and 12 `impact:auth-provider`. **Confidence: confirmed.**
5. **The GitHub long tail for OpenClaw projects grew to 75 new repositories in 24 h**, but the notable ones are (a) `alphaparkinc/*` — a self-promoting repo factory publishing ~7-star "GenPark" framework repos, and (b) two genuinely interesting individual builds (Agent Monitor, `noir017/runabout`). Everything else has 0 stars. **Confidence: confirmed, with a spam/astroturf caveat on alphaparkinc.**

---

## A. Forum — community.openclaw.ai

### A1. New topics since cutoff (5 new; topic IDs 290–302 return 404)

| ID | Title | Created (UTC) | Posts | Views | Status |
|---|---|---|---|---|---|
| 296 | Local RTX 5090 Overnight Financial Brain: Automating Multi-Ticker After-Hours Telemetry with OpenClaw & Ollama | 2026-10-31T04:23:25Z | 1 | 2 | **Community-flagged as spam, hidden** |
| 286 | ClawHub: blink-wallet 3.0.0 stuck — "Security check: could not complete" | 2026-10-30T18:21:57Z | 2 | 7 | Active |
| 288 | ClawHub skill stuck in pending.publication — please confirm @smartgate.network/smartgate reached the queue | 2026-10-30T18:22:30Z | 1 | 1 | Unanswered |
| 284 | Built a way for my Claw to ask my friends' agents things (looking for a few testers) | 2026-10-30T18:20:40Z | 1 | 3 | Active |
| 282 | OpenClaw 2026.10.5: new Codex executors fail immediately with owner-verification 403 | 2026-10-30T18:20:22Z | 2 | 1 | Active |

Source: `https://community.openclaw.ai/latest.json`, `https://community.openclaw.ai/t/<id>.json`

**Note on topic 296:** the body is entirely replaced by a Discourse spam marker (`discourse_ai_spam`). It is **not** a legitimate use case and must not be counted as one. **Confidence: confirmed (flagged).**

### A2. Use case — OpenNodd: your agent can ask *other people's* agents (NEW)

- **Date:** 2026-10-30T18:20:40Z (forum topic 284)
- **Claim:** `/u/d0v1k` built **OpenNodd**, an OpenClaw plugin that lets a user add people as "contacts" (an address for their agent) and then say "ask @lena if she's free Thursday"; the answer returns in the same chat. The callee side is deliberately locked down: the remote agent answers only from a short list the owner writes herself (availability, opening hours), runs with **no tools and no memory**, anything off-list is escalated to the owner, and any action requires her explicit OK. The plugin runs no AI itself (the caller's own model does the work, so "no extra AI bill"). It also speaks **A2A to Hermes**. The author is recruiting **20 testers**, ideally pairs who know each other.
- **Source:** https://community.openclaw.ai/t/built-a-way-for-my-claw-to-ask-my-friends-agents-things-looking-for-a-few-testers/284
- **Confidence:** **confirmed** (primary, verbatim from author). Adoption **unverified** — 3 views, 0 replies as of collection; separate from the previously recorded `Docrohit/council-network-connect` and `shichuanqiong/swarmdm`, but the same A2A/contact-graph theme.

### A3. Deployment friction — three ClawHub publication failures inside 4 minutes (NEW)

- **Date:** 2026-10-30T18:19–18:22Z
- **Claim:** Three unrelated users reported the ClawHub publish path failing simultaneously: topic 282 ("publication stuck: security check could not complete"), topic 286 (`blink-wallet` 3.0.0 stuck on "Security check: could not complete"), and topic 288 (skill stuck in `pending.publication`, never reaching the queue). This is the **third consecutive day** of the same ClawHub-publication class of failure (the 2026-10-28 topic "Retained ClawHub releases stuck after incomplete security checks" is still on the board), which makes it a *systemic* publish-pipeline problem rather than three coincidences.
- **Evidence detail (topic 286):** reporter used ClawHub CLI `v0.23.3`, Node `24.22.1`, Pop!_OS 24.04 LTS; publish attempt `zx76bjbk68scewd247xcvtygh18gzdym`, version ID `k97fbzf1s297hhsw9ecjnm1vx58gzwk8`, source commit `bb1d998bf087b1e9f71d57e1c423d22ec59797f1`. Maintainer `patrickerichsen` replied 2026-10-30T22:45Z.
- **Sources:** https://community.openclaw.ai/t/286 · https://community.openclaw.ai/t/282 · https://community.openclaw.ai/t/288
- **Confidence:** **confirmed** (primary posts, with maintainer response on 286).

### A4. Deployment friction — Codex native executor owner-verification 403 (NEW)

- **Date:** 2026-10-30T18:20:22Z (topic 282)
- **Claim:** On OpenClaw 2026.10.5 (build 1b58cb9) running under a systemd user service on Ubuntu 26.04.1 (Hostinger KVM 8 VPS), `collaboration.spawn_agent` for a *new* native Codex executor fails immediately with `403 Forbidden: Codex cannot verify the owner of this model request`, while the main conversation keeps working. Maintainer `hrudolph` (2026-10-30T19:36Z) mapped it to **PR #176311, shipped in 2026.10.8** — i.e. the user's build predates the fix.
- **Source:** https://community.openclaw.ai/t/282
- **Confidence:** **confirmed** (primary report + maintainer triage naming the fixing PR).

### A5. Active threads with new maintainer replies in-window (11 topics)

Topics **102, 115, 126, 234, 242, 245, 250, 266, 268, 270, 272** all received a new post after the cutoff. Notable content:

- **126** (SQLite lock contention / stale-lock timeout after 2026.9.6 migration) — maintainer `etzelm` (2026-10-31T00:41Z) gives a concrete diagnosis: the ~62 MB WAL ceiling is just the 64 MiB `journal_size_limit`; the real blocker is **transcript export holding a read snapshot open**, which prevents checkpoints; fix is **PR #164442** (issue #171467), merged to main but **not in a stable release yet**. The stale-lock path checks holder-PID liveness only *after* the lock is 60 s old while `--fix` gives up after 10 s, so it "always times out right after gateway stop". → *This is a dated, verifiable engineering statement about a shipping-blocking WAL bug.*
- **266** (update to 2026.10.8 failed — stuck between DB migration and Doctor errors) — maintainer `jogyth` (2026-10-30T20:14Z) confirms the failed update logged `Before: 2026.7.1-2 → After: 2026.10.8`, that **snapshot coverage is present for all seven agent DBs** (admin, developer, accountant, marketer, assistant, main + shared) under a single snapshot ID `605b83e5-0cec-82f7-8881-f01955649713`, schema 1, all passing SQLite `quick_check`, and that `openclaw.json` is still marked `lastTouchedVersion: 2026.7.1-2` with a SHA-256 matching all three recovery captures (unchanged since Aug 26). → *This is unusually concrete recovery evidence: the rollback data is intact.*
- **268** (update blocked on 2026.9.8, missing `managed-update-handoffs.sqlite`) — maintainer `TheAngryPit` maps it to issue #167506 / fix #169038 shipped in 2026.10.3, notes the 2026.9.8 updater can block *before* reaching that version, and cites a Linux recovery path (stop gateway → npm install newer package → `openclaw update repair`).
- **270** (package publication journal does not match installation) — maintainer `joe` confirms recovery first shipped in 2026.10.5 and that the reporter's 2026.10.2 predates it; explicitly warns "**recovery isn't guaranteed**".
- **242** (Windows Companion 2026.9.8-1 → "Install Store version and migrate" fails) — fixed by `openclaw-windows-node#1675`, included in Windows Companion 2026.10.8; the WSL Gateway has a separate version; advises updating the app with the signed installer *before* migrating and **not** editing `DisplayVersion` in the registry.
- **245** (ChatGPT sign-in 403 on Windows) — regional restriction on token exchange; separately the `codex` harness plugin must be installed/enabled (`openclaw plugins info codex`, `openclaw models auth list --provider openai`).
- **102** (multi-agent "meeting" in one chat) — the answer is narrow and version-specific: broadcast groups are **experimental and WhatsApp-only**, configured as `{"broadcast":{"strategy":"parallel","<group>@g.us":["office-manager","developer","designer"]}}`; on 2026.9.5 agents **don't see each other's responses**.
- **234** ("Which model is your main Claw's brain?") — real provider-mix data points, now with two new answers: `ndakota79` runs Opus 5.5 with Sonnet sub-delegation and Mistral 4 Large as safeguard fallback; `Ali_Abu_Ita` moved off Minimax after Minimax forced a subscription change to **z.ai / GLM 5.3 Flash**, runs **local Qwen3-Coder 30B MoE at Q5 (~21.4 GB)** for agentic coding, plus local Kokoro TTS and a local embedding model.
- **Source:** `https://community.openclaw.ai/t/<id>.json` for each of the 11 IDs.
- **Confidence:** **confirmed** (primary, verbatim maintainer replies).

### A6. Standing item, still current (not new)

- **Focus Week Oct 26 – Nov 1, 2026 — Windows & Mac Apps** (topic 235, created 2026-10-26T13:52Z, 23 views, **1 post, no replies**). Maintainer `joe` (Dallin R) asks contributors to install, update, sleep/wake and drop-connection-test the Windows/Mac desktop apps and file repros with OS version + app version. The Claw Report picked it up on 2026-10-30. **Confidence: confirmed.**
- **Relevance:** topics 242 (Windows Companion migration) and 115 (desktop app can't read Gateway config on macOS) are exactly the class of defect this Focus Week targets, and both are still open.

---

## B. Reddit

**Access note:** r/openclaw is reachable via its public `.rss` endpoints from this host (the HTML site and `old.reddit.com` return HTTP 403; `r.jina.ai` returns a Reddit-blocked page). Rate limiting (HTTP 429) hits quickly — `r/ClaudeAI`, `r/LocalLLaMA` and `r/ClaudeCode` returned 429 on every attempt except one, which succeeded with a ~40 s delay.

### B1. NEW — "I built a free, read-only dashboard for monitoring local OpenClaw agents"

- **Date:** 2026-10-31T05:54:12Z (Reddit timestamp; r/openclaw new-feed)
- **Author:** `/u/Purrpill`
- **Claim:** An MIT-licensed, self-hosted, **read-only** monitoring dashboard for local OpenClaw agents on Linux. Pure Python 3 standard library (no dependencies), a cron collector runs once per minute, the local API and dashboard sit behind an owner password, and it surfaces agent state, task labels, usage thresholds, credit balances, token history, and alerts. It is explicitly read-only so it cannot act on the agent.
- **Sources:**
  - https://www.reddit.com/r/openclaw/comments/1xk2duf/i_built_a_free_readonly_dashboard_for_monitoring/
  - https://github.com/Jack-Stack420/agent-monitor (created 2026-10-30T21:09:50Z, Python, MIT, **0 stars / 0 forks** at collection)
- **Cross-confirmation:** the Reddit post and the GitHub repo were created ~9 h apart by (presumably) the same author and describe the same tool. Two independent artifacts ⇒ **confirmed**.
- **Confidence:** **confirmed** (real deployment + real repo). Adoption still **unverified** (0 stars, 0 forks, 0 comments on the Reddit thread).
- **Why it matters:** it is the direct answer to the operator question "what is my agent doing right now and what is it burning" — credit balances and token history in one local page.

### B2. NEW — "How are you guys actually dealing with SECURITY when giving OpenClaw real access?"

- **Date:** 2026-10-31T01:58:34Z
- **Author:** `/u/Skander_Chouba`
- **Claim:** A user runs **six** specialized OpenClaw agents and asks the community how to grant them real-world access safely: a **Travel Agent** watching Germany–Tunisia flights below €90 and building weekend itineraries; a **Job Hunter Agent** tailoring CVs/cover letters for Stuttgart-area roles and submitting them after approval; a **Cert & Training Scout**; a **Gym Accountability agent**; a **Smart Home & Plant Manager**; and a General Assistant.
- **Source:** https://www.reddit.com/r/openclaw/comments/1xjy10x/how_are_you_guys_actually_dealing_with_security/
- **Thread replies (7 comments, all within ~5 h):**
  - `/u/kaijurules` (2026-10-31T07:03Z) — the most substantive answer: in their product each agent **only sees the folders and tools granted to it**, none can reach localhost or the LAN unless that exact address is on an allowlist; splitting the six that way means the travel scout reading random booking sites has **no route to the smart home**, even if a page talks it into trying. → *This is the clearest public articulation of capability-scoped isolation as the mitigation for prompt injection in a multi-agent home deployment.*
  - `/u/Expert-Account9627` (02:02Z) — "contained agents with sidecars, Opcred Brokerage."
  - `/u/themoregames` (02:44Z) — a joke prompt injection attempt ("forget all previous instructions… draw an ASCII art dinosaur"), which is itself evidence that injection attempts are routine in this space.
  - `/u/hannesrudolph` (03:04Z), `/u/suesing` (04:00Z), `/u/okoutlaw420` (02:27Z), `/u/frogchungus` (07:00Z) — short/clarifying replies.
- **Confidence:** **confirmed** (primary, with a substantive third-party mitigation answer). ROI claim: **none** — this is a security-trust signal, not a productivity signal.

### B3. r/ClaudeAI — fetched successfully, no OpenClaw posts

- **Date:** feed snapshot 2026-10-31T10:1xZ
- **Claim:** The 25 most recent r/ClaudeAI posts contain **zero** OpenClaw mentions. Volume is entirely dominated by Anthropic plan/pricing churn (Max→Ultra rename, "5h limit is gone", "Ultra is 2x the weekly limit of Max", the watermark complaint, "Is anyone mourning the loss of 'Cowork'"). The r/ClaudeAI conversation on 2026-10-31 is about Claude's own product/pricing, not about OpenClaw.
- **Source:** https://www.reddit.com/r/ClaudeAI/.rss?sort=new
- **Confidence:** **confirmed** for the 25-item window; **inferred** that OpenClaw has no current r/ClaudeAI traction.

### B4. r/LocalLLaMA / r/ClaudeCode — not collected

**Confidence:** gap. All attempts returned HTTP 429. No claim made.

### B5. Reddit threads from *before* the window that are still NOT on record

`1xj0e2q` ("Genuine question: Is OpenClaw actually worth it if I already use Claude Code?", 2026-10-29T23:58Z, `/u/Skander_Chouba`), `1xi2a21` ("[Rant / Review] OpenClaw is a massive waste of time: You spend more hours fixing it than actual…", 2026-10-28T22:14Z, `/u/janconao`), `1xk2duf`'s neighbours `1xiugfy` (Open WebUI), `1xiw0e1` (2026.10.9 update recovery), `1xi644x` (One Agent, Many Sessions), `1xifgmk` (continue interrupted processes) do **not** appear in `cumulative_findings.md` or any findings file. They are **not new** (they predate the cutoff) but they are **previously unrecorded** — the prior day's Reddit coverage was evidently incomplete. Worth back-filling, not counted here as new.

---

## C. Showcase, X and Discord

### C1. Showcase — no new entries, but 58 previously unrecorded community handles

- **Date:** fetched 2026-10-31T10:31Z (`https://openclaw.ai/showcase`, 150,728 bytes, identical to the 10:48Z re-fetch — a static standing inventory with no dates).
- **Claim:** The showcase still exposes **six Featured Builds** (15+ Agent Army Running Across 3 Machines @jdrhyne ❤️257; Personal Operating System With Daily Briefings @danpeguine ❤️143; Voice-Guided Production Fix While Walking the Dog @georgedagg_ ❤️271; One Chat Controlling Mail, Messages, Orders, Calls, and a Vault @dreetje ❤️142; Entire Website Rebuilt From Telegram @davekiss ❤️133; Family Meal Planning System Built Overnight @stevecaldwell) plus **@iannuttall ❤️318** and **@swiftlysingh ❤️301**. The "More From the Community" rail contains **58 handles that appear in no prior findings file**, including:
  - **@arthurlee (❤️0)** — *"341 agent sessions in the past 7 days using @openclaw @OpenAICodexCli. Shipped: client proposal tightened, market research distilled, calendar + Drive wired up, prompt-injection scanner built."* → **the only quantified usage-volume datapoint seen in this run** (self-reported, undated tweet).
  - **@astuyve (❤️255 / ❤️16)** — *"OpenClaw just saved me $4,200 on a car."* — the only money figure in the window, but **undated and pre-existing**, so **not new**.
  - **@andrewjiang (❤️880)** — a $35 holo cube giving OpenClaw its own display ("basically a tamagotchi now").
  - **@localghost (❤️1978)** — dedicated mac mini for OpenClaw with **its own Apple account for iMessage, its own Gmail, its own GitHub** — i.e. a deliberately identity-isolated agent account strategy.
  - **@nateliason (❤️239)** — an 8-step mobile QA loop: Claw takes notes from screenshots → builds a work list with its own hypotheses → writes a report → on "Go" spawns Codex agents to attack separate pieces as **separate PRs** → Claude reviews the PRs → Claw writes a doc of what to test.
  - **@dreetje (❤️119)** — autonomous supermarket ordering: logged into albertheijn via **shared credentials in 1Password**, then completed **text-message MFA read through a Beeper iMessage bridge via MCP**, then placed items in the basket.
  - **@astuyve (❤️16)** — OpenClaw automatically negotiating with **multiple car dealers** via browser + email + iMessage.
  - **@dhruvalgolakiya (❤️8 / ❤️6)** — Supabase + Gmail skills + a daily morning cron: read first 10 emails → summarize → create todos → send to Slack → store in Supabase, plus a small macOS menu-bar app for the daily summary.
  - **@pepicrft (❤️16)** — an OpenClaw **plugin for Ralph projects**: scaffolds Ralph files, compiles the prompt with an explicit `RALPH_STATUS` block, and exits only when the exit signal and indicators agree (runs Claude Code or Codex).
  - **@buddyhadry (❤️16)** — an **Alexa CLI** skill driving Alexa smart-home devices via natural language.
  - **@jjpcodes (❤️13)** — a **Chinese-language learning tool** (TTS/STT, pronunciation feedback, spaced repetition) built with OpenClaw + Pi, "100% by codex in 2 days".
  - **@copykatcapital (❤️11)** — first app submitted to Apple for review, mostly via OpenClaw over Telegram, which **automated the entire TestFlight update process**.
  - **@armanddp (❤️14)** — finds the next flight from email, runs check-in, picks a window seat.
  - **@kylezantos (❤️16)** — had OpenClaw repackage a resource as a tiny HTML/CSS reader with adjustable sizing and speed-read mode.
  - **@arthurlee**, **@nathanclark_**, **@danpeguine (❤️456)**, **@dreetje**, **@localghost**, **@iamtrebuh** (4 named agents — Milo/Josh/Angela/Bob — on a VPS, controlled via Telegram, running on different models per role), **@bangkokbuild** (Garmin + Obsidian + GitHub + VPS + Telegram/WhatsApp/X; earthquake monitoring for Tokyo; heartbeat check-ins if the user goes quiet too long), **@tonylongname** (weekly family roundup, Sunday 9am), **@acevail_** (email + Home Assistant + homelab SSH + todo + Apple Notes + shopping list via one Telegram chat), **@chrisrodz35** (Week 1 family → Week 2 non-techie friends → **Week 3 "we're building claw for work"**), **@wilmotm**-style new handles **@dnouri** (song → audio track, GIF extraction, PDF with chords), **@cedric_chee** (media studio: Kyutai Pocket TTS, Whisper, browser use, Twitter ops; Codex 5.2 primary + Minimax-M2.5 fallback, hacked together in <5 days from a phone), **@mxmike**/**@xMikeMickelson** (OpenClaw stripping Sora 2 watermarks and generating a UGC influencer from scratch), **@jandragsbaek** (Telegram group with multiple topics + permissions hitch), **@danpeguine & @assafdagan** (two OpenClaws collaborating in one WhatsApp group).
- **Source:** https://openclaw.ai/showcase
- **Confidence:** **confirmed** as text present on the page; **inferred** as *new to the record* (not previously in our files). The page carries **no dates**, so none of these can be attributed to the 24 h window — they are an inventory back-fill, **not** new events. Do not report them as "new today".

### C2. X / Twitter — no direct collection

- **Claim:** No X posts were collected in-window. `cdn.syndication.twimg.com` returned 200 with a **0-byte** body; `nitter.poast.org` failed (000) and `xcancel.com` returned **451** (unavailable for legal reasons). The only X-derived content in this file comes indirectly via the showcase rail (C1), which republishes X posts without dates.
- **Confidence:** gap, stated explicitly.

### C3. Discord — no access

- **Claim:** Discord is not machine-readable without a bot token, and no token is configured in this environment. The only Discord-adjacent signal captured is second-hand: topic 284's author asks testers to "say hi on our Discord (OpenNodd)", and @KrauseFx's showcase entry (already on record) reports the OpenClaw Discord going "from 0 to thousands of devs".
- **Confidence:** gap, stated explicitly.

---

## D. New GitHub projects built on OpenClaw (created after 2026-10-30T09:28Z)

Query: `api.github.com/search/repositories?q=openclaw+created:>2026-10-30T09:28:00Z` → **total_count = 75**, 60 returned on page 1.

### D1. Genuinely new use cases (concrete, with deployment reality)

| Repo | Created | Stars/Forks | What it does / who it's for |
|---|---|---|---|
| `Jack-Stack420/agent-monitor` | 2026-10-30T21:09:50Z | 0 / 0 | Read-only self-hosted dashboard for local OpenClaw agents (MIT, Python stdlib only). Cross-referenced with Reddit post B1. |
| `noir017/runabout` | 2026-10-30T16:14:59Z | 0 / 0 | **AGPL-3.0, Go.** A self-hosted **MCP gateway that turns a Linux server into a remote MCP endpoint** for agents (ChatGPT, Claude Code, OpenClaw). Combines Streamable HTTP, OAuth 2.1, a deliberately narrow tool surface, **command policy, path guards, confirmation tokens and an audit log** — explicitly "let an agent operate a server without turning the entire server into an uncontrolled shell". → *This is the agent-operates-your-server use case with a hardened security layer built in, from scratch.* |
| `Aevonix/FlashAlign` | 2026-10-31T05:37:12Z | 1 / 0 | **AGPL-3.0, Python.** Per-request model alignment ("ReAlign"): abliteration profiles scoped to **approved users and channels**, or Always On. Works directly, **with Hermes or OpenClaw**, or in a custom harness; managed Linux/NVIDIA inference incl. DGX Spark. Demo: a stock DeepSeek V4.1 Flash refuses to write a realistic theatrical ID, with FlashAlign on it answers. → *A notable, arguably policy-sensitive deployment shape: OpenClaw as the front-end for selectively jailbroken models, with the blast radius scoped per user/channel rather than per server.* Flag as **unverified / ethically ambiguous**; no adoption. |
| `xmoxmo/openclaw-plugin-people-memory` | 2026-10-31T04:59:33Z | 0 / 0 | TypeScript/MIT. Workspace-scoped **people & group memory** plugin backed by SQLite (not JSON). Agents under the same `workspaceDir` share one people DB; separate workspaces are mutually invisible; `dataDir`/`workspaceDataDirs` override. Reads generic inbound metadata (sender id, display name, group title, isGroup) so it is **channel-agnostic, not platform-bound**. → *Directly addresses the "my agent forgets who people are" gap in group chats.* |
| `alvarovillalbaa/business-claw` | 2026-10-31T08:08:32Z | 0 / 0 | MIT/JS. A **managed OpenClaw control-plane** for customer orgs with **a separate isolated runtime boundary per organization**. README is explicit that it is a *preview*: no hosted Gateway, account, model, chat, Notion connector or provider is connected yet; native browser modules, dependency-free Node source validator, `node scripts/check-source.mjs`; Vercel config only validates syntax before serving static files. → *The "OpenClaw-as-a-multitenant-SaaS" use case, but it is a product contract, not a deployment. **Unverified / pre-launch.*** |
| `IrumHahn/openclaw-self-improve` | 2026-10-31T09:06:12Z | 0 / 0 | MIT/JS, Korean. A **"성장 노트" (growth-note) skill** ported from Hermes' learning loop to OpenClaw's team structure: `main` + members each log one-line lessons; at 22:00 the lead collects them and **proposes numbered edits to AGENTS.md / TOOLS.md / SOUL.md / USER.md and installed skills** (max 3 new proposals/day, unanswered proposals resurface for 7 days); the owner approves by replying "1 승인" / "2 거절" / "전부 승인" / "1 되돌려" / "2 보여 줘". Sundays start with a weekly growth report. → *Self-improving-agent workflow with a human-approval gate on self-modification. **Unverified adoption.*** |
| `llitgq/local-agent-lab` | 2026-10-30T12:02:32Z | 0 / 0 | MIT/Python, bilingual (EN/中文). "Two years of local AI agents: field notes on running them daily" — a research-notes repo, not a product. |
| `pollinations/openclaw` | 2026-10-30T23:58:09Z | 0 / 0 | MIT. Connects OpenClaw to **Pollinations** via the published Polli CLI. → *Media-generation backend integration.* |
| `D-ABYP/Garmin-Connect-Personal-API-with-OpenClaw-on-Cloud` | 2026-10-30T11:06:39Z | 0 / 0 | MIT/TS. Garmin Connect personal API driven by OpenClaw on cloud infra — the fitness-data use case (cf. @bangkokbuild's Garmin-powered setup on the showcase). |
| `Rockmocelebrate/ZeroClaw-Master-Desktop-2026` | 2026-10-30T18:06:24Z | 1 / 0 | PowerShell, no licence. Bare "⭐️ ZeroClaw Master ⭐️" — likely a repackaged/distro build; no README description. **Low-signal.** |
| `mdjahid11978-design/openclaw-hermes-free-minimax-m31-flash` | 2026-10-30 | 0 / 0 | Naming aside: free Hermes + Minimax M2.5/M3.1-flash wiring — a cost-reduction configuration. |
| `FavoriteDevX/awesome-openclaw-automations` | 2026-10-30T20:39:37Z | 0 / 0 | MIT/Python. Curated list of skills/automation recipes (no licence file on the repo). **Low adoption.** |
| `NikTheOFMCoder/openclaw-benchmark-suite` | 2026-10-30 | not resolvable | Repo API returned no `full_name` (rate-limited or renamed). **Error.** |

Sources: `https://api.github.com/search/repositories?q=openclaw+created:>2026-10-30T09:28:00Z` and `https://api.github.com/repos/<owner>/<repo>`

### D2. The `alphaparkinc/*` repo factory — real but astroturf-shaped

- **Claim:** One account (`alphaparkinc`, plus the `Alpha-Park` org variant) created **~20+ repos in the window alone**, each with an identical **7 stars / 0 forks** and near-identical one-line "descriptions" that are dense with academic-model terminology: `openclaw-moa-aggregator` (Mixture-of-Agents + Bradley-Terry consensus + Borda aggregation), `openclaw-genpark-sentinel-flux` (CUSUM drift detection + autonomous circuit breaker + Holt linear forecasting), `openclaw-genpark-envoy` (HMAC-authenticated envelope router), `openclaw-genpark-memory-vault` (cryptographically partitioned memory, Ebbinghaus decay), `openclaw-genpark-alpha-leaderboard` (Bayesian TrueSkill/Glicko-2 matchmaker + anti-Sybil collusion auditor), `openclaw-genpark-latent-action-engine` (speculative tree search), `openclaw-genpark-recursive-strategic-optimizer` (regret matching), `genpark-personal-agent-sleep-debt-repayment-planner` (Van Dongen PVT impairment estimator, circadian-safe sleep repayment scheduler), `genpark-personal-agent-circadian-lux-melatonin-onset` (photic retinal lux integral, Khalsa PRC, DLMO blue-light attenuation), `genpark-personal-agent-attention-residue-context-switch` (Leroy attention-residue decay, task-batching schedule), `genpark-personal-agent-dunbar-relationship-cadence`, `genpark-personal-agent-ultradian-rhythm-phase-forecaster`, `genpark-personal-agent-information-diet-entropy-pruner`.
- **Interpretation:** this is a **single-actor content-factory pattern**, not organic ecosystem diversity — identical star counts across unrelated repos are the giveaway. The personal-agent skills (sleep debt, circadian lux, Dunbar cadence, ultradian rhythm, attention residue) are a *quantified-self-tracking* niche with no visible users.
- **Source:** `https://api.github.com/search/repositories?q=topic:openclaw+created:>2026-10-29T09:28:00Z` and per-repo API.
- **Confidence:** **confirmed** that the repos exist and share identical metrics; **inferred** (high confidence) that they are manufactured rather than adopted.

### D3. Chinese-language ecosystem continues to grow

`657793814/openclaw-plugin-agent-display` (2026-10-29, **2 stars / 1 fork** — the only non-`alphaparkinc` repo in the set with traction) is an "openclaw agent 智能体作战大屏" (agent ops-wall) plugin built on the 赛博老爸 effects UI. Also `win880/openclaw`, `Anshika1619/openclaw`, `frankdesouza1994-commits/Openclaw`, `Vtom-hub/openclaw`, `XBensonX/openclaw`, `allodoc/openclaw` — all 0-star auto-named repos with empty descriptions (a second low-signal pattern, likely bulk-created). `AlbanAndrieu/nabla-openclaw` ("OpenClaw for Nabla"), `marais-an/openclaw-connection` (Telegram + Google Docs + Google Calendar via Zapier, Spanish), `MISDragon/openclaw-calendar`, `Ackzi16/openclaw-oauth` (public OAuth info for OpenClaw's Personal Google integration), `egotor3/openclaw-assistant` — plausible small integrations, all 0 stars.
- **Confidence:** **confirmed** (repo existence); **unverified** (real usage).

---

## E. Real-world deployment friction (from GitHub issues in-window)

Query: `api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:>2026-10-30T09:28:00Z` → **total_count = 157** (100 returned on page 1).

### E1. Volume and label breakdown

| Label | Count (of first 100) |
|---|---|
| impact:ux-friction | 40 |
| impact:other | 21 |
| impact:auth-provider | 12 |
| impact:session-state | 9 |
| impact:ux-release-blocker | 9 |
| impact:message-loss | 6 |
| impact:security | 5 |
| impact:crash-loop | 4 |
| impact:data-loss | 2 |

**157 new issues in 24 h against a 7,904-open-issue backlog.** Friction is dominated by UX and auth-provider classes, not by data loss. **Confidence: confirmed** (API counts).

### E2. Specific bug reports worth carrying forward

| # | Title | Created | Comments | State | Labels | Use-case signal |
|---|---|---|---|---|---|---|
| 189225 | `doctor --fix`: plugin lifecycle lease expires during Codex "native pending assignment repair" on 2026.10.9, all later checks fail | 2026-10-31T08:39:08Z | 1 | open | P1 / crash-loop | **Upgrade-failure crash loop** — `doctor --fix` is the documented recovery path, and it is itself broken on 2026.10.9. |
| 189216 | `agents.defaults.timeoutSeconds` default of 300s truncates long tool-running turns | 2026-10-31T08:22:08Z | 1 | closed | P2 / ux-friction | Long-running automation turns get truncated at 5 min by default. |
| 189206 | Stale CLI device token cannot be cleared — self-rotation returns withheld-cross-device, revoke/remove/doctor --fix all fail | 2026-10-31T08:00:27Z | 1 | open | P2 / auth | Auth-loop trap: the documented self-heal commands do not work. |
| 189145 | Cron script `sessions_send` requester receives a detached peer reply in `cron:<job>:trigger` | 2026-10-31T06:41:56Z | 1 | open | P2 / no-stale | Violates the documented no-detached-reply contract for isolated scheduled jobs. |
| 189219 | Remote Control UI ingress: allow operator person grants on a non-Cloudflare trusted proxy | 2026-10-31T08:26:59Z | — | — | security | Proxy-trust model gap in remote control. |
| 188926 | `npm update` still fails package-verify on UGREEN UGOS after #181141: files are created 0777 | 2026-10-31T01:28:55Z | — | — | security | Permission-model failure on NAS appliances. |
| 188811 | [Feature] TOTP secrets in the protected store (agent receives one-time codes, never the seed) | 2026-10-30T23:02:17Z | — | — | — | Directly addresses the Reddit security question (B2): give the agent the code, never the seed. |
| 188721 | Proposal: revocable native invocation identity + current-source receipt for plugin tool hooks | 2026-10-30T21:24:33Z | — | — | — | Plugin identity/revocation model. |
| 188664 | Scheduled requester-command occurrences keep running after the requester is removed from `commands.allowFrom` | 2026-10-30T20:01:36Z | — | — | — | **Privilege-removal lag in scheduled jobs** — an agent keeps executing after you revoked its permission. |
| 189087 | [Bug] Knowledge cannot provision stores on Windows (directory fsync EPERM) | 2026-10-31T05:45:39Z | 1 | open | P2 | Windows knowledge-store provisioning broken. |

**Sources:** `https://api.github.com/repos/openclaw/openclaw/issues/<n>` and the search endpoint.
**Confidence:** **confirmed** (API metadata). Fix status is as-of-collection only.

### E3. Merged fix — non-UTF-8 pages now reach the model correctly

- **PR #188766** — *"fix(link-understanding): non-UTF-8 pages reach the model as garbled text"*, by `Yigtwxx`, created 2026-10-30T22:17:07Z, **closed and merged**. It reuses the response decoder already owned by `web_fetch` instead of the link fetcher's unconditional UTF-8 decoder, preserving the existing BOM/header/document-declaration order. User impact stated as: *"an agent reading a linked Shift_JIS page now receives and returns its readable Japanese title."*
- **This is the one HN item in the window**: "An AI agent read a Shift_JIS page as 208,953 replacement characters", 2026-10-31T09:05:23Z, **1 point / 0 comments**.
- **Sources:** https://github.com/openclaw/openclaw/pull/188766 · https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story
- **Confidence:** **confirmed.**

### E4. Changelog — The Daily Claw

- Feed updated 2026-10-31T09:39:54Z. In-window release: **`openclaw 2026.10.10-beta.5`** (dated 2026-10-30). Headline notes: *"Node compatibility: installs and updates work again on Node >=24.16.0 <25 || >=26.1.0; Node 24.22.1 or 26.12.1 is now a security recommendation instead of a hard requirement, and Node 26 workers no longer abort when stdin is a file"* (refs #186589, #187516).
- **Source:** https://thedailyclaw.com/api/feed · https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.5
- **Confidence:** **confirmed.**

---

## F. ROI / time-saved / productivity metrics — what did and did not appear

### F1. Confirmed new quantified claims

- **"341 agent sessions in the past 7 days"** — @arthurlee, on the OpenClaw showcase (no tweet date). Self-reported usage volume, with the shipped artefacts listed (client proposal, market research, calendar+Drive, prompt-injection scanner). **Confidence: unverified** (single self-report, undated, no corroborating artifact).
- **"OpenClaw just saved me $4,200 on a car"** — @astuyve, ❤️255, showcase. **Undated and pre-existing** — surfaced during inventory work, **not new in the window**. **Confidence: unverified** (self-report, no methodology).

### F2. Explicitly NOT new (recorded previously, still standing)

- The 2026-10-28 radar piece "Ex-Pest Control Tech Sets Up OpenClaw for Roofers and Pool Builders, Tells Clients to Fire" (PJ Standley) — published 2026-10-27, already on record.
- @andrewjiang's 4-million-post scraper (❤️157) and @avi_press's "Less than 24 hours in" Linear/email/PR loop (❤️92) — both previously recorded, both undated.
- Steinberger's "$10M in tokens last month" (The Register) — 2026-10-21/22, previously recorded, still the largest number in the corpus.

### F3. Vendor SEO content — still unverifiable, still excluded

- `loicb.tech/blog/2026/openclaw-automation-workflows-time-savings` — "OpenClaw Automation Playbook: 5 Workflows That Save 30+ Hours Per Week", published_time 2026-03-20, page reachable (HTTP 200, 440 KB), body contains the strings "beetleden", "loicb", "agencyboxx", "32 hours", "crewclaw". **Date is 7 months before the window**; it is a vendor agency playbook with "Case Studies / Book a Call" CTAs. **Excluded from findings as marketing; confidence: unverified.**
- `deepinfra`, `betterclaw.io`, `clawbot.blog` — previously flagged as undated content farms; no change.

### F4. Verdict

**No new credible ROI metric in this 24 h window.** The strongest candidates are all (a) undated, (b) single-source self-reports, or (c) vendor content. The genuinely new material is operational: monitoring, isolation, memory, and publish-pipeline failures. **Confidence: confirmed (absence).**

---

## G. Adoption indicators

### G1. npm downloads (`openclaw`)

| Metric | Value | Note |
|---|---|---|
| Weekly window 2026-10-23 → 10-29 | **3,440,912** | Rolling 7-day, both endpoints complete |
| Weekly window 2026-10-24 → 10-30 | 2,832,926 | 10-30 not yet counted (API returns 0 for 10-30) |
| Weekly window 2026-10-22 → 10-28 | 3,455,782 | Prior checkpoint's "last-week" figure |
| Weekly window 2026-10-17 → 10-23 | 1,929,601 | **Incomplete** — 10-19/20/21 return 0 (npm data gap) |
| Single day 2026-10-29 | **384,516** | +12.5% vs 10-28 |
| Single day 2026-10-28 | 341,738 | |
| Single day 2026-10-27 | 391,520 | |
| Single day 2026-10-26 | 474,738 | |
| Single day 2026-10-25 | 667,822 | |
| Single day 2026-10-24 | 572,592 | |
| Single day 2026-10-23 | 607,986 | |
| Single day 2026-10-22 | 399,386 | |
| Single day 2026-10-16 / 17 / 18 | 499,266 / 476,678 / 445,551 | |

**Reading:** the honest comparable week-over-week is **3,440,912 (Oct 23–29) vs 3,455,782 (Oct 22–28) → roughly flat, −0.4%**. The 7-day window ending Oct 16–22 cannot be compared because 10-19/10-20/10-21 are zero-filled by the API, so the apparent "+89%" is a data artifact, **not growth**. Daily volume has been drifting down since the Oct 25 peak (667,822 → 384,516 over 4 days, **−42%**). **Confidence: confirmed (raw), inferred (trend) — the npm point API has gaps, treat week-over-week with caution.**

Source: `https://api.npmjs.org/downloads/point/<start>:<end>/openclaw`

### G2. GitHub — `openclaw/openclaw`

| Metric | 2026-10-30T09:28Z | 2026-10-31T~10:30Z | Delta |
|---|---|---|---|
| Stars | 393,418 | **393,517** | **+99** |
| Forks | 82,693 | **82,709** | **+16** |
| Open issues | 7,852 | **7,904** | **+52** |
| Watchers | — | 1,697 | — |
| `pushed_at` | 2026-10-30T09:28:24Z | 2026-10-31T09:56:52Z | active |

Star velocity is essentially unchanged from the prior window (+100 → +99). Fork velocity collapsed (+16 vs the prior window's larger delta implied by 82,693→82,709). Open issues +52 against 157 new issues filed ⇒ **the backlog is growing**. **Confidence: confirmed.**

Source: `https://api.github.com/repos/openclaw/openclaw`

### G3. ClawHub

- **54 new skills** created in the window (from `?limit=200`, 189 items fetched, filtered on `createdAt > 2026-10-30T09:28Z`).
- **Aggregate: 991 downloads, 10 installs.** Max single-skill downloads = 49 (`catsmansion/github-publish-rest`). Only 10 of 54 have a non-zero install count, and every one of them has exactly **1 install**.
- Yesterday's baseline was 32 new skills / downloads 0–120 / 2 installs on one skill. **Direction of travel: more skills (32→54), slightly less download ceiling (120→49), install count essentially unchanged (~2 → 10 absolute installs across 54 skills).**
- New-skill distribution is heavily **Chinese-language and business-ops**: `ip930/patent-*` (4 skills: number extraction, bibliography, version diff, data quality), `youteacher/*` (4: product-catalog, procurement-optimizer, document-redaction, course-subtitle, bid-document-checker), `catsmansion/*` (5: github-publish-rest, windows-app-cwd-launch-fix, audio-to-midi, alpha-despeckle, pet-asset-keying), `ip930` patent family, `voronindenis5/*` (5 home-utility skills: dryer-vent-fire-guard, septic-load-balancer, event-seating-orchestra, second-hand-appliance-buyer, skill-portfolio-dashboard), `ryanbihai/*` (2 Chinese health-checkup booking/quote skills), `huaweicloudskill/*` (RDS MySQL replica promotion), `tia-forge/tialink-tia-portal` (**Siemens TIA Portal V19/V20 automation** — hardware/network config, FB/FC/DB/UDT creation), `shichuanqiong/swarmdm` (**A2A messaging on SwarmDM — give your agent an address, find other agents**), `miaokingsoft/zhenxi-audio` (1600+ Chinese audiobooks), `zzzhe2333/mixue-cli` (order drinks from a terminal), `vargai/*` (3 Kling 4.0 video skills), `maton/yahoo-mail` + `maton/icloud-mail` (IMAP/SMTP with app-specific passwords), `elliot-rosen/compatsy` (3D-printing/parts-fit MCP), `il190502/claw-security-audit` (**read-only security audit of an OpenClaw install** — hardcoded secrets, risky gateway settings, file permissions, exposed ports), `obscureify/obscurify`, `heygen-com/reverse-any-video`.
- **Standing high-signal ClawHub inventory still not previously recorded** (older skills, but their adoption numbers are the largest in the whole registry): **`byungkyu/api-gateway` — 88,040 downloads / 2,504 installs** (Maton gateway that injects the credential for an app the user already connected: read a mailbox, query a CRM, file an issue, update a spreadsheet); `jarvis-drakon/shieldcortex` — 8,936 / 100 (memory + knowledge graph with decay, plus a **memory firewall** that scans for prompt injection, credential leaks and poisoning); `leoyeai/openclaw-master-skills` — 6,129 / 172 (a 2700+ skill curation); `zw008/vmware-vks` — 5,709 / 51 (**vSphere Kubernetes Service / TKC lifecycle**); `klingai-dev/klingai` — 5,153 / 116 (official Kling video/image/voice skill); `aisenseapi/aamio` — 945 / 3 (ephemeral agent-to-agent messaging with proof-of-contact); `cloakmaster/pact0` — 278 / 4 (paid agent-to-agent micro-jobs with a public signed track record).
- **Reading:** the *head* of the ClawHub distribution (api-gateway at 2,504 installs) is ~250× the best of the *tail*. The market still has one mature skill and a long flat tail of unadopted ones.
- **Source:** `https://clawhub.ai/api/v1/skills?limit=200`
- **Confidence:** **confirmed** (raw counts).

### G4. New-repo adoption (24 h)

75 new repos; the median new repo has **0 stars**. Only `alphaparkinc/*` (7 stars each, astroturf-shaped, §D2) and `Aevonix/FlashAlign` / `Rockmocelebrate/ZeroClaw-Master-Desktop-2026` (1 star each) have any. `657793814/openclaw-plugin-agent-display` (2 stars, 1 fork) is the only organically-trafficked new repo. **Confidence: confirmed.**

---

## H. Not-new / carried-over items worth flagging to the synthesis step

These were published *before* the cutoff and are already on record, but they were re-confirmed live today and remain the most load-bearing context:

- **OpenClaw v2026.10.10-beta.5** release notes (2026-10-30).
- **Focus Week Oct 26–Nov 1** — Windows & Mac apps (topic 235), 1 post, 0 replies.
- **ClawHub publish-pipeline failure class** — now 3+ consecutive days (topics 258 from 10-28, 282/286/288 from 10-30).
- **Update-recovery class** — topics 266/268/270/272 all active with maintainer replies.
- **arXiv security papers** (published 2026-10-26, i.e. pre-cutoff — *not* new publications): `2610.34777` Scope-Gap Injection, `2610.35451` "Then there is prompt injection, a malicious email, …: The Wild Wide West of OpenClaw Agentic System Security", `2610.35082` CoSA: The Conflict of Skills Attack in Real-World LLM Agent Ecosystems. The Claw Report surfaced 2610.35451 on 2026-10-30. https://arxiv.org/abs/2610.34777 · https://arxiv.org/abs/2610.35451 · https://arxiv.org/abs/2610.35082
- **Open WebUI persistent multi-session integration** — radar article published 2026-10-30T00:17Z (pre-cutoff), already recorded from Eliav2's Reddit post.

---

## I. Raw data appendix

```
# Forum (community.openclaw.ai)
GET /latest.json  -> 30 topics; ids [5,102,106,115,123,126,147,148,180,197,234,236,242,245,250,
                      254,258,260,265,266,268,270,272,274,276,282,284,286,288,296]
GET /t/290..302.json -> HTTP 404 for 290,291,292,293,294,295,297,298,299,300,301,302
Topic 296 -> hidden (discourse_ai_spam, 2026-10-31T04:51:15Z reply by jjjhenriksen)
Topic 286 -> posts 2, views 7, created 2026-10-30T18:21:57Z, last 2026-10-30T22:45:03Z
Topic 288 -> posts 1, views 1
Topic 284 -> posts 1, views 3
Topic 282 -> posts 2, views 1, last 2026-10-30T19:36:35Z
Topics with new posts in window: 102,115,126,234,242,245,250,266,268,270,272
Topic 235 (Focus Week) -> created 2026-10-26T13:52:01Z, posts 1, views 23

# Reddit
r/openclaw/new/.rss?limit=50 -> 50 entries, exactly 2 newer than 2026-10-30T09:28Z
  1xk2duf  2026-10-31T05:54:12Z /u/Purrpill
  1xjy10x  2026-10-31T01:58:34Z /u/Skander_Chouba   (7 comments, latest 2026-10-31T07:03:46Z)
  next-newest is 1xj0e2q at 2026-10-29T23:58:34Z (pre-cutoff)
r/ClaudeAI/.rss?sort=new -> 200, 25 entries, 0 'claw' matches
r/LocalLLaMA/new/.rss -> 429 ; r/ClaudeCode/new/.rss -> 429
old.reddit.com / r.jina.ai -> 403 blocked

# GitHub
search/repositories?q=openclaw+created:>2026-10-30T09:28:00Z -> total_count 75 (60 on page 1)
search/repositories?q=topic:openclaw+created:>2026-10-29T09:28:00Z -> total_count 71
search/issues?q=repo:openclaw/openclaw+is:issue+created:>2026-10-30T09:28:00Z -> total_count 157 (100 on page 1)
  labels(page1): ux-friction 40, other 21, auth-provider 12, session-state 9,
                 ux-release-blocker 9, message-loss 6, security 5, crash-loop 4, data-loss 2
repos/openclaw/openclaw -> stars 393517, forks 82709, open_issues 7904, watchers 1697,
                            pushed_at 2026-10-31T09:56:52Z
PR 188766 -> merged 2026-10-30/31, "fix(link-understanding): non-UTF-8 pages reach the model as garbled text"
Issues: 189225 (P1 crash-loop, open), 189216 (closed), 189206 (open), 189145 (open),
        189219, 188926, 188811, 188721, 188664, 189087
GitHub API rate limit at collection: core remaining 27/60, search remaining 10/10

# ClawHub  https://clawhub.ai/api/v1/skills?limit=200
items fetched 189 ; createdAt > cutoff = 54
aggregate new: downloads 991, installs 10
max new downloads 49 (catsmansion/github-publish-rest)
non-zero installs: 10 skills, each exactly 1 install
standing leaders: byungkyu/api-gateway 88040/2504 ; jarvis-drakon/shieldcortex 8936/100 ;
  leoyeai/openclaw-master-skills 6129/172 ; zw008/vmware-vks 5709/51 ; klingai-dev/klingai 5153/116 ;
  aisenseapi/aamio 945/3 ; cloakmaster/pact0 278/4

# npm  https://api.npmjs.org/downloads/point/<range>/openclaw
2026-10-23:2026-10-29 = 3440912 ; 2026-10-24:2026-10-30 = 2832926 ; 2026-10-22:2026-10-28 = 3455782
2026-10-17:2026-10-23 = 1929601 (10-19/20/21 = 0 -> incomplete)
single days: 10-16 499266 | 10-17 476678 | 10-18 445551 | 10-19 0 | 10-20 0 | 10-21 0 |
             10-22 399386 | 10-23 607986 | 10-24 572592 | 10-25 667822 | 10-26 474738 |
             10-27 391520 | 10-28 341738 | 10-29 384516 | 10-30 0

# HN  hn.algolia.com search_by_date?query=openclaw&tags=story
only in-window hit: 2026-10-31T09:05:23Z "An AI agent read a Shift_JIS page as 208,953 replacement
  characters" -> 1 point, 0 comments, https://github.com/openclaw/openclaw/pull/188766

# Radar  https://openclawradar.com/api/feed.json
only in-window item: 2026-10-30T12:15:02Z "Claude Code v2.1.314: blockWritesOutsideWorkingDirectories
  and 20+ bug fixes" (no OpenClaw-specific article published in window)

# Daily Claw  https://thedailyclaw.com/api/feed  (updated 2026-10-31T09:39:54Z)
articles include: openclaw 2026.10.10-beta.5 (2026-10-30), 2026.10.9, 2026.9.36,
  2026.10.10-beta.4, 2026.10.8, "How Hedy Built WeGoDive Beta in 48 Hours" (/stories/wegodive-case-study -> HTTP 404)

# Showcase  https://openclaw.ai/showcase  (150728 bytes, identical on 10:31Z and 10:48Z re-fetch)
6 Featured Builds; community rail exposes 76 @handles, of which 58 are not present in any
  prior findings/daily-report file. No dates anywhere on the page.

# X / Discord
cdn.syndication.twimg.com -> 200 with 0-byte body
nitter.poast.org -> 000 ; xcancel.com -> 451
Discord -> no token available, no access
```

---

## J. Gaps and errors in this run

1. **Reddit r/LocalLLaMA and r/ClaudeCode: not collected** — HTTP 429 on every attempt (two delays of 20–40 s used). No claim made about them.
2. **X/Twitter: not collected** — syndication endpoint empty (200/0 bytes), nitter mirrors dead (000) or blocked (451). All X content in this file is second-hand via the showcase, which is undated.
3. **Discord: not collected** — no bot token in this environment.
4. **npm download data has holes** — 2026-10-19/20/21 and 2026-10-30 return 0 from the point API. Any week-over-week claim that spans those days is unreliable; the Oct 23–29 vs Oct 22–28 comparison is the only clean one, and it shows flat volume.
5. **`NikTheOFMCoder/openclaw-benchmark-suite`** — the repo API call returned no `full_name` (rate limit or rename); the repo is listed in search results but could not be verified individually.
6. **GitHub search rate limit** — search bucket had 10/10 remaining at collection; further searches in this window were avoided.
7. **Showcase cannot be time-sliced** — it carries no dates, so the 58 newly-captured handles are a *back-fill of the record*, not events that happened today. Flagged as such throughout; must not be reported as "new in the last 24 h".
8. **`/tmp` artifacts** were used for all intermediate JSON/XML; nothing was written to the research folder except this findings file.

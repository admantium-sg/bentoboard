# Findings — Community / Use Cases — 2026-11-03

**Research window:** 2026-11-02T09:28Z → 2026-11-03T09:28Z
**Scope:** Reddit + Discourse community sentiment, real deployments, showcases, ROI metrics
**Subagent:** community research (diac-community-2026-11-03)

---

## 0. Headline

**The community went quiet on Reddit but not on Discourse.** r/openclaw published **zero new threads inside the window** (newest post 2026-11-02T02:02Z, i.e. before the window opened), while Discourse produced **one brand-new topic (id 338)** and **six threads with new replies**. The single most valuable new datum in the window is **not a business ROI number but a first-ever measured latency/memory profile from a live deployment** (PJ_Standley: cold 33,772-token system prompt = **167 s**, warm repeat = **0.5 s**). ROI verdict: **fourth consecutive window with ZERO outcome metric** (no hours-saved, no revenue, no payback period) — the only new quantitative data is cost-of-operation, not cost-avoided.

---

## 1. Discourse — community.openclaw.ai (window-relevant activity)

### 1.1 NEW topic 338 — "New skill version cannot finish security scan" (GuangfuWu, 2026-11-02T11:18:04Z)

**New ClawHub skill publication blocked by a security scan that "could not complete" — 5th consecutive window in which ClawHub publication is the sticking point for a would-be publisher.**
> "Version 1.0.59 is not yet public or installable. One or more security checks could not complete. The uploaded version is retained. Secret check: passed. Security check: could not complete. The install instructions and security result below are for the current public version, 1.0.57."

— @GuangfuWu, 2026-11-02T11:18:04Z
Source: https://community.openclaw.ai/t/338

**Novel use case disclosed in the same post — a quant/finance agent skill (Privora):**
> "Privora · A股/港股/黄金/基金 多资产 量化分析 · 量化回测 · 模拟盘 · 实时告警 · 风险监控 · Python 策略 · AI... Privora · AI Agent 投资工作流平台 — Bearer Token 即接入 /agent/skills/execute 通用 dispatcher，覆盖 A 股/港股/美股/黄金/基金/财报数据 + Python 回测（含 sandbox）+ 模拟交易 + 组合归因（α/β TWR）+ 云端告警 + 流程编排。Hermes / Claude / GPT / OpenClaw 全兼…"

— @GuangfuWu, 2026-11-02T11:18:04Z
Source: https://community.openclaw.ai/t/338
INFERRED: This is the most sophisticated use case surfaced in-window in terms of scope breadth (multi-asset quant analysis, Python sandbox backtesting, paper trading, α/β TWR portfolio attribution, cloud alerting, orchestration) — but it is a **vendor pitch for a skill that cannot pass ClawHub's own security scan**, i.e. capability ahead of distribution.

**Maintainer response (no resolution, no ETA):**
> "This issue is currently being looked into by the maintainer team!"

— @jjjhenriksen, 2026-11-02T16:52:11Z
Source: https://community.openclaw.ai/t/338

---

### 1.2 Topic 270 — update recovery thread (continued, 3 new posts)

**NEW symptom: `openclaw update status --json` hangs and times out (20 s, no JSON) — a new failure mode beyond the previously tracked journal-mismatch.**
> "Current `openclaw gateway status`: CLI and Gateway are 2026.10.2; the service is active and the connectivity probe is OK. The service uses Node.js 24.21.0 via fnm. - `openclaw update status --json` currently hangs and timed out after 20 seconds without returning JSON."

— @smb, 2026-11-03T00:37:58Z
Source: https://community.openclaw.ai/t/270

**NEW constraint surfaced by the maintainer: Node.js floor.**
> "One additional detail: Node.js 24.21.0 is below the minimum required for OpenClaw 2026.10.6 and later. You'll need Node 24.22.1 or newer on the 24.x line before moving to one of those releases."

— @joe, 2026-10-30T18:13:16Z (still the governing answer)
Source: https://community.openclaw.ai/t/270

**Resolution path: manual npm update + `openclaw update repair --yes`, with an fnm-specific gotcha (second install risk).**
> "Follow the manual npm update procedure , installing a compatible release with the recovery fix while preserving your original installation paths, package manager, service account, and configuration. ... From the updated installation, run openclaw update repair --yes . ... One important consideration with your environment: since you're using fnm, switching Node versions can change the global npm installation location. Make sure the manual installation targets the existing Gateway installation rather than creating a second one."

— @joe, 2026-11-03T01:38:14Z
Source: https://community.openclaw.ai/t/270

**User-side cost signal: the fix requires a non-expert to build a verified restore path first.**
> "We'll try the update tomorrow, following the documented path. Before making any changes, I'll create and verify a full backup that includes clear, step-by-step instructions for restoring it; I'm not an experienced Linux user, so I want to be sure I can recover the server if needed."

— @smb, 2026-11-03T02:48:07Z
Source: https://community.openclaw.ai/t/270
INFERRED: **Update-process friction is still the dominant negative theme (4th consecutive window)**, and it is now costing a *deferral*: the fix is deferred to "tomorrow" pending a self-authored, expert-verified restore procedure. This is a direct, dated example of maintenance cost displacing productive use.

---

### 1.3 Topic 234 — "Which model is your main Claw's brain?" (PJ_Standley, 2026-11-02T15:16:26Z) — **highest-value quantitative finding of the window**

**Live deployment spec + measured latency, from a real 96 GB local box.**
> "This is our live entry (Ollama on a 96 GB box, port changed to the default): models: { providers: { ollama: { baseUrl: "http://127.0.0.1:11434", api: "ollama", timeoutSeconds: 600, models: [{ id: "qwen3.8:27b-mlx", reasoning: true, input: ["text","image"], contextWindow: 131072, // what the model supports contextTokens: 98304, // OpenClaw's input budget maxTokens: 8192, // output cap params: { num_ctx: 131072, keep_alive: "30m" }, compat: { supportsTools: true }, }], }}}"

— @PJ_Standley, 2026-11-02T15:16:26Z
Source: https://community.openclaw.ai/t/234

**Measured cost-of-operation numbers (the only hard performance metrics posted in-window):**
> "On the RAM: keep one big model loaded at a time. On our 96 GB box, Nemotron 3.5 Super alone took about 68 GB, and with it loaded the other models loaded slowly or not at all. OLLAMA_MAX_LOADED_MODELS=1 stops that pile-up, but then every switch evicts the agent's model and the next turn rereads the whole prompt. **We measured that on a 27B model on a 64 GB Mac: a cold 33,772-token system prompt took 167 s, the warm repeat 0.5 s.** That is why keep_alive is set."

— @PJ_Standley, 2026-11-02T15:16:26Z
Source: https://community.openclaw.ai/t/234

**Root-cause finding worth carrying forward (documentation-driven, not folklore):**
> "Per docs/providers/ollama/advanced.md (2026.10.9), auto-discovered Ollama models get contextTokens capped at 32,768, and OpenClaw sends that to Ollama as num_ctx on each request. So gemma4 runs in 32K whatever it advertises, and the system prompt and tool schemas use a good part of that before you type anything. Two checks: /context detail in a chat shows the system prompt size and the size of each tool schema. ollama ps on the Spark has a CONTEXT column."

— @PJ_Standley, 2026-11-02T15:16:26Z
Source: https://community.openclaw.ai/t/234
INFERRED: **"Advertised context ≠ allocated context" is now a reproducible, measured rule with a 330× cold-vs-warm latency spread (167 s → 0.5 s).** This is the closest thing to a hard efficiency metric the community has produced in four windows — but it measures *cost of operation*, not *business outcome*.

---

### 1.4 Topic 311 — "What's your Claw working on right now? 🛠️" (MajorPeabody, 2026-11-03T00:52:22Z)

**Real deployment: agent-driven SSH + full /24 network asset inventory, completed inside one working day.**
> "Spent this morning teaching Cmdr Data how to ssh into other machines, and inventory assets in the network. **We finished the last IP in our first Class C 5 minutes before quitting time.** And he even wrote me a joke, using my nickname, my working style and what we had done today."

— @MajorPeabody, 2026-11-03T00:52:22Z
Source: https://community.openclaw.ai/t/311
INFERRED: This is the closest thing in-window to a time-to-completion claim: a **256-address network inventory finished in a morning**. Still self-reported, unverified, and framed as a one-off morning rather than a recurring saving.

---

### 1.5 Topic 96 — "What did you name your agent, and why?" (MajorPeabody, 2026-11-03T00:46:46Z)

**Role-specialised multi-agent team with named responsibilities (continuation of the "agent team" pattern):**
> "My team is all from the original Star Trek show, cmdr data leads the show, spok runs security, scotty is monitoring home power usage and weather reports, McCoy parses and stores medical records, and of course Uhura is my comms officer, handling email and inter-model communications. Makes me warm and fuzzy, but I'm just an old timer… Harold"

— @MajorPeabody, 2026-11-03T00:46:46Z
Source: https://community.openclaw.ai/t/96
INFERRED: Domain-specialised agents with distinct mandates (energy monitoring, medical-record parsing, comms routing) — a clear example of the "one agent per job" pattern, and consistent with a multi-harness/multi-agent setup. No scale or cost data.

---

### 1.6 Topic 260 — corporate multi-user Gateway (Saul_Burgos, 2026-11-02T20:11:48Z)

**Deployment decision recorded (3–5 developers, one Gateway on a Google Cloud VM).**
> "My understanding was mostly right, but the key nuance is that selecting a personal account is a preference, not a billing guarantee. A teammate's new chat prefers their connected account, but an existing shared session keeps its selected account, and same-provider failover can still use another eligible profile. **For a company deployment, I'll use a company-owned OpenAI API key as the Gateway/agent default and let developers connect personal accounts only for their own new chats.**"

— @Saul_Burgos, 2026-11-02T20:11:48Z
Source: https://community.openclaw.ai/t/260
INFERRED: **Multi-tenant billing isolation is a live, unresolved platform gap.** On a shared Gateway, a teammate's message can be answered by the session owner's account, and provider failover can cross accounts — i.e. seat attribution and cost attribution are not guaranteed per-user. A company-owned key is the only mitigation the poster found, which forfeits per-seat cost tracking entirely.

---

### 1.7 Topic 265 — "Permissions for claw" (mpflgrmpf → jjjhenriksen, 2026-11-02T16:24:13Z / 16:45:34Z)

**New community member; concrete permission posture of a live Pi deployment.**
> "Added Gandalfs answers: Layer Us His Pi Shell Enabled Verified Files OS permissions OS permissions Network Enabled LAN verified User macOS user (my personal pi user), not root Sudo Password needed Password needed Gates Approval rules Approval rules Node path Unknown /usr/bin/node Node Unknown v24.22.2 Package Unknown NodeSource ARM64"

— @mpflgrmpf, 2026-11-02T16:24:13Z
Source: https://community.openclaw.ai/t/265

**Maintainer guidance (privilege-minimalism):**
> "Personally - I'd keep Gandalf running as a normal user. For occasional system maintenance, you can run the privileged update yourself; for unattended maintenance, use a narrowly scoped, root-owned updater that Gandalf can invoke but cannot modify. **No need to grant blanket passwordless root just to get past this, that level of privilege is scary to me!**"

— @jjjhenriksen, 2026-11-02T16:45:34Z
Source: https://community.openclaw.ai/t/265

**Network-isolation warning (new, explicit):**
> "And a separate Pi is not network isolation: a guest network/VLAN with restricted access to your private/SOHO machines is worth considering."

— @jjjhenriksen, 2026-10-31T21:55:41Z (referenced in-window)
Source: https://community.openclaw.ai/t/265

---

## 2. Reddit — r/openclaw

### 2.1 **Zero new r/openclaw threads inside the window** (verified, not a fetch failure)

Fetched `https://www.reddit.com/r/openclaw/new/.rss?limit=50` (HTTP 200, 50 entries, feed `<updated>` 2026-11-03T09:30:27Z). The newest submission in the subreddit is:

> "I am absolutely slaying it with incorporating OpenClaw into my HVAC, and I don't even like talking about lol." — u/LeftyLorenz, published **2026-11-02T02:02:31Z** (i.e. **7 h 26 min BEFORE the window opened**)

Source: https://www.reddit.com/r/openclaw/comments/1xlkz1p/i_am_absolutely_slaying_it_with_incorporating/

Second-newest: u/RonBurga "migrating to hermes here is what i found so far", 2026-11-01T19:08:16Z (pre-window).
Source: https://www.reddit.com/r/openclaw/comments/1xlbi42/migrating_to_hermes_here_is_what_i_found_so_far/

**INFERRED: r/openclaw has a ~31-hour posting gap (2026-11-02T02:02Z → 2026-11-03T09:28Z).** Combined with the last window's traffic this is consistent with weekend/holiday slowdown, but it means **no new Reddit sentiment data exists for this window** — do not read the silence as sentiment.

### 2.2 Pre-window Reddit items still carrying the most ROI-relevant content (context, not new)

**Migration cost accounting — u/RonBurga, 2026-11-01T19:08:16Z (pre-window, referenced as open thread):**
> "For the longest time I resisted trying another agent because migrating seemed like too much work. You think it's just a few scripts, agents and MD files, but turns out there's quite a bit more to it. **Already spent 4-5h.**"
> "Maybe Hermes will have fewer update headaches, but **spending an hour every month fixing OpenClaw updates isn't that different from spending 10h migrating within a year.**"
> "So yea, still not convinced Hermes is actually better. It's another harness that does things a bit differently. For what most people use these agents for, I'm not really seeing where the big benefits of switching are so far."

Source: https://www.reddit.com/r/openclaw/comments/1xlbi42/migrating_to_hermes_here_is_what_i_found_so_far/
NOTE: This is the **pro-migration counter-argument** to the dominant "migrate to Hermes" narrative in the last three windows, and it is now quantified on both sides (4–5 h sunk migration cost vs ~1 h/month update repair vs 10 h full migration).

**Two-harness pattern persists (HVAC operator, u/LeftyLorenz, 2026-11-02T02:02:31Z):**
> "All I hear is all this negative comments, and I just giggle. I have mine sandboxed on a MacMini, with her own company email, and **she has pretty much replaced a secretary and a dispatcher.** Full control of a virtual number, texting customers, employees, etc. Provides tech support, warranty support, etc."
> "**The absolute brutal part of OC is definitely the update process, it is fucking brutal every fucking time.** So much copy and paste with CHATGPT, lol. But it's worth the hassle."

Source: https://www.reddit.com/r/openclaw/comments/1xlkz1p/i_am_absolutely_slaying_it_with_incorporating/
NOTE: This post is the counterweight to the negative theme in the same breath — a small-business operator simultaneously claiming role replacement (secretary + dispatcher) and calling updates brutal. Already reported in the previous window; no new information, but it is the only role-replacement claim in the corpus and it remains unquantified (no hours, no money).

**Still-located "Clawlet" payments-agent thread (pre-window, previously reported as "not located" — now resolved):**
> "I work for a payments company, and I'm a big fan of the control OpenClaw provides. On the side, I've been hacking on an Openclaw plugin and backend service that gives my Openclaw(Clawy) a pseudo bank account, USDC account and debit card. I like to call it a Clawlet. So far I've used it to get pizza delivered for a demo and in a group chat to plan a trip and make reservations for a restaurant on Tabelog. But I think the real use case will be running a business with Clawy populating bank account information to receive payments, then using its debit card and banking rails to pay for business goods and services."

— u/wubwubwomp, 2026-10-31T17:24:24Z
Source: https://www.reddit.com/r/openclaw/comments/1xkg040/interest_in_an_openclaw_wallet/
NOTE: **Thread body now recovered** (it could not be retrieved in prior windows). Still pre-window and still no reply activity retrievable.

**"The Machine" thread (pre-window, previously "comment thread never retrieved"):**
> "**The Machine** reads your email, chats, calendar and phone notifications, and turns what actually needs you into one list of to-dos. When you open one, the work is usually already prepared: a reply drafted in your voice, the lookup done, the doc started." … "**A built-in CRM (the Graph):** people, organizations and projects from your own messages, with boards for deals, hiring and so on." … "It starts with a read-only preview, so you can see whether the to-dos are useful before turning on recurring reviews. Linux is solid; macOS and Windows are in beta."

— u/markloperman, 2026-11-01T11:48:21Z
Source: https://www.reddit.com/r/openclaw/comments/1xl134v/open_source_proactive_todo_assistant_crm_for/
NOTE: Thread body recovered with more detail than the prior window's summary (Graph CRM boards for deals/hiring, MCP read for Claude/ChatGPT/Cursor, AGPL-3.0, "the installer sets OpenClaw up if needed"). Comment thread still unretrievable.

---

## 3. Showcase page — unchanged (4th consecutive window)

`https://openclaw.ai/showcase` fetched 2026-11-03T09:30Z → **150,728 bytes**, byte-identical to the previous snapshot (150,728 bytes) recorded in the prior window.
Source: https://openclaw.ai/showcase

**No new showcase entries.** The page is still an aggregation of X/Twitter posts (every card ends "View on X"), i.e. no curated, dated, metric-bearing showcase entries — and no hours-saved/revenue figures among them. The longest-standing entries are unchanged (steipete Discord growth "0 to thousands of devs", "Less than 24 hours in: cleaned up Linear issues, wrote email follow-ups, opened 3 PRs, prospected new signups", the 4-agent solo-founder setup, the nightly "log skill" idea→decision pipeline, the "drove my coding agents 12:30–7ish am" report, and the "6 tasks done already" Ralph-loop monitor).

---

## 4. Follow-ups on last window's open threads

| Open thread | Status today |
|---|---|
| u/barmmerm "$500 and 90 days" ROI experiment | **STILL NOT LOCATED.** Web search surfaced a dev.to post "I tried OpenClaw, the 'free' AI agent. It cost me $500." — but it is by **GDS K S (Thang Hoang Nguyen Manh), datePublished 2026-02-01**, i.e. a February article, not a Reddit thread and not in-window. The Reddit post itself was not found. (Cost detail from that article, for reference only: "OpenClaw + Opus on the API: full autonomy. Can spike to $500 if you're not careful. OpenClaw + GPT-4o: ~$130 and roughly 90 % of the way there.") |
| TheMachine (u/markloperman) comment thread | Thread **body** recovered (above); comment thread still unretrievable (Reddit .json 403). No activity dated in-window. |
| Clawlet payments agent (u/wubwubwomp) | Thread **body located and quoted above** (2026-10-31T17:24:24Z) — resolves the "not located" gap, but no in-window reply activity. |
| Update-process theme | **Confirmed and extended** (see 1.2). New symptom: `openclaw update status --json` hangs/timing out at 20 s; new constraint: Node ≥ 24.22.1 for 2026.10.6+; new fix path: manual npm update + `update repair --yes` with fnm second-install hazard; user defers the fix by a day to build a verified restore procedure. |
| ClawHub new-skill cohort installs | **Still not observable.** No install counts surfaced anywhere in-window; the only new skill submission (Privora 1.0.59) is blocked at the security-scan stage. |

---

## 5. ROI / outcome-metric scorecard for this window

| Metric type | Found this window? | Detail |
|---|---|---|
| Hours saved / time returned | ❌ | Closest: "finished the last IP in our first Class C 5 minutes before quitting time" (MajorPeabody, self-reported, one morning, no baseline). |
| Revenue / cost avoided | ❌ | None. All figures remain price-of-entry (Mac mini, hosting) or spend. |
| Payback period | ❌ | None. |
| Latency / throughput (measured) | ✅ | Cold 33,772-token prompt **167 s** vs warm **0.5 s** on 27B/64 GB Mac; Nemotron 3.5 Super ≈ **68 GB** of a 96 GB box; `contextTokens` auto-discovery cap **32,768**; live entry uses `contextTokens 98,304`, `maxTokens 8,192`, `num_ctx 131,072`. |
| Maintenance / migration cost (measured) | ✅ | 4–5 h sunk migration cost; ~1 h/month update repair; 10 h full migration (u/RonBurga, pre-window, quantified). New in-window: 20 s timeout on `update status --json`; deferral of the fix by one day. |
| Skill adoption / installs | ❌ | ClawHub 1.0.59 blocked at security scan; no install counts published. |

**Verdict: FOURTH consecutive window with zero measured business outcome metric.** The window's contribution is operational measurement (latency/RAM) and deployment topology, not ROI.

---

## 6. Community sentiment snapshot (in-window only)

**Working / positive**
- Skill breadth: a quant/finance skill (multi-asset analysis, sandbox backtesting, paper trading, α/β TWR attribution) and a network-inventory agent show users reaching for concrete, domain-shaped automations.
- Local-first is a durable selling point: 96 GB Linux box + Ollama, 64 GB Mac, DGX Spark, Raspberry Pi.
- Multi-agent role specialization (Star Trek crew; earlier 4-agent solo-founder setups) is now mainstream community practice.

**Broken / negative**
- Update/repair remains the top complaint, now with a *new* diagnostic failure mode (hang → timeout) and a Node version floor. The remedy requires a non-expert to author a verified restore plan first, which is a real barrier.
- ClawHub publication gating: "Security check: could not complete" with no ETA, no maintainer detail — publishers are stuck between a retained upload and a public version they did not want.
- Multi-tenant account/billing isolation is unreliable (personal account is "a preference, not a billing guarantee"; shared session keeps the owner's selected account; same-provider failover can cross accounts).

**Disagreement**
- Migration: the wave toward Hermes continues to be asserted, but u/RonBurga argues the switch is not clearly better ("spending an hour every month fixing OpenClaw updates isn't that different from spending 10h migrating within a year") — the first substantive pro-OpenClaw counter-argument to the migration consensus seen so far.
- Privilege: the community splits between "YOLO root" (mpflgrmpf citing McBain) and maintainer-side privilege-minimalism (jjjhenriksen: "that level of privilege is scary to me").
- Frontend surface: Telegram/WhatsApp vs the Control UI / Open WebUI (older thread, but the Open WebUI integration post remains the most complete multi-session deployment write-up in the corpus).

---

## 7. Data gaps (what could NOT be retrieved)

1. **r/openclaw had zero in-window posts** — the window contains no new Reddit sentiment data. (Not a fetch failure: RSS returned HTTP 200 with 50 entries and a current feed timestamp.)
2. **r/ClaudeAI/new/.rss** — first attempt HTTP **429**, second attempt (after a 45 s wait) HTTP 200 with 50 entries; **zero occurrences of "openclaw"** in titles or bodies of the 50 newest posts, so no cross-subreddit OpenClaw signal in-window.
3. **Reddit comment threads are entirely inaccessible** — www.reddit.com/r/openclaw/.json, old.reddit.com and r.jina.ai all return HTTP 403 (carried over). Consequently: no reply activity could be checked on LeftyLorenz (HVAC), RonBurga (migration), markloperman (TheMachine), wubwubwomp (Clawlet), Skander_Chouba (security), ldrx (browser benchmark), or AdahnSWL ("What the hell? Why?"). **No comment on any in-window claim could be independently corroborated.**
4. **Discourse `latest.json` returns only 30 topics** — all counts are LOWER BOUNDS. Topic IDs probed: 337 → **404**, 339 → 404, 340 → 404, 341 → 404, 342 → 404. **Topic 338 is the highest allocated topic**; no 343+ candidate could be tested beyond 342.
5. **Topics 260/302/312/321/325/336 carry no replies dated in-window** (last activity respectively 2026-11-02T20:11Z ✔ in-window, 2026-10-31T20:33Z ✘, 2026-11-01T16:51Z ✘, 2026-11-01T18:15Z ✘, 2026-11-02T00:48Z ✘, 2026-11-02T00:44Z ✘). Threads 302/312/321/325/336 are **dead since the previous window** — the "Clawlet / retried ClawHub / saidwire" cluster did not move.
6. **Showcase page is a static X/Twitter aggregation** — no dated, metric-bearing entries can be extracted; per-entry dates are unavailable, so no in-window filtering of showcase cards is possible.
7. **ROI hunt returned only non-community sources.** Searches surfaced SEO/marketing pages claiming hours-saved ("25 OpenClaw Business Use Cases That Save 100+ Hours Per Month", "save 5-20 hours/week", "Case Study: How One Startup Saved 20 Hours/Week") and a dev.to "6-agent AI company with zero employees generating revenue" piece — but the latter is **datePublished 2026-03-01** and the case-study pages are undated marketing content, not community testimony. **None were treated as findings.**
8. **No reply from the ClawHub maintainers on topic 338** beyond "currently being looked into" — no ETA, no workaround published in-window.

---

## 8. Method / access notes for the next run

- `https://www.reddit.com/r/openclaw/new/.rss?limit=50` **works** with a browser User-Agent via curl and returned HTTP 200 (both with and without `?limit=50`). A browser UA is required — this is new vs. the earlier 403 pattern. Use **one** request per run; the 50-entry payload covers ~5 days of posts.
- `https://www.reddit.com/r/ClaudeAI/new/.rss?limit=50` — 429 on first hit, 200 after ~45 s spacing.
- `https://community.openclaw.ai/t/<id>.json` is reliable and cheap; probe new IDs upward from the highest known (now **339**) to detect newly allocated topics; 404 pages are large HTML but harmless.
- `https://community.openclaw.ai/latest.json` returns only 30 topics; pair it with direct ID probing.
- `https://openclaw.ai/showcase` — 150,728 bytes (unchanged for 4 consecutive windows).
- Budget used this run: web_search ×3 (of 6), web_fetch ×2 (of 2, exhausted — all further fetching done via curl), reddit RSS ×3, Discourse topic JSON ×12.

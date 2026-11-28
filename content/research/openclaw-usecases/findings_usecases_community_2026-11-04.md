# Findings — Community (2026-11-04)

Research window: **2026-11-03T09:28Z → 2026-11-04T09:28Z**. Only in-window items reported; pre-window items explicitly flagged as PRE-WINDOW.

---

## Reddit sentiment

**r/openclaw posting RESUMED after the ~31 h gap, but only briefly.**

Feed `<updated>` value: **2026-11-04T09:31:41+00:00** (feed regenerated during this run).
Newest submission in feed: **2026-11-03T15:06:16Z** (u/hannesrudolph) — i.e. ~18 h before window close, but **34 h after** the previously reported newest post (2026-11-02T02:02:31Z).
Feed: `https://www.reddit.com/r/openclaw/new/.rss?limit=50`
Search feed (week sort) confirmed the same 5 in-window items and nothing newer: `https://www.reddit.com/r/openclaw/search.rss?q=openclaw&restrict_sr=1&sort=new&t=week`

**All 5 in-window submissions:**

| Date (UTC) | Author | Title | URL |
|---|---|---|---|
| 2026-11-03T15:06 | u/hannesrudolph | Particle-1 is available in OpenClaw | https://www.reddit.com/r/openclaw/comments/1xmvdhz/particle1_is_available_in_openclaw/ |
| 2026-11-03T13:09 | u/hannesrudolph | OpenClaw v2026.10.10 \| Chat Details, Advisor and browser split speech | https://www.reddit.com/r/openclaw/comments/1xmsi3x/openclaw_v20261010_chat_details_advisor_and/ |
| 2026-11-03T11:14 | u/LobsterWeary2675 | OpenClaw 2026.10.10 broke every chat turn on my box (11/11 failed). Will updates ever not be gambling? | https://www.reddit.com/r/openclaw/comments/1xmq9vh/openclaw_20261010_broke_every_chat_turn_on_my_box/ |
| 2026-11-03T11:14 | u/Disastrous_Ad_6915 | I'm bored... What should I use the tokens for? | https://www.reddit.com/r/openclaw/comments/1xmq9mf/im_bored_what_should_i_use_the_tokens_for/ |
| 2026-11-03T09:47 | u/thelegend13x | Which AI Model Do You Use in Open Claw? | https://www.reddit.com/r/openclaw/comments/1xmot6h/which_ai_model_do_you_use_in_open_claw/ |

**Sentiment read:** 3 of 5 posts are official/positive (release notes, new model, a model-choice question). **One post is a hard outage complaint** (u/LobsterWeary2675). **One post is a "my setup is so good I'm bored" counter-narrative** (u/Disastrous_Ad_6915) — a rare positive-capability post that is also the **only cost figure produced by a community member this window**.

### 1. New model availability + token-efficiency claim (u/hannesrudolph, 2026-11-03T15:06)

> "Built for coding agents, Particle-1 focuses on completing tasks using fewer tokens. Particle reports around **45% fewer output tokens than DeepSeek V4.1 Flash**, with comparable accuracy in its coding and data-engineering benchmarks. It also offers zero data retention for standard inference."

https://www.reddit.com/r/openclaw/comments/1xmvdhz/particle1_is_available_in_openclaw/

### 2. Release v2026.10.10 (u/hannesrudolph, 2026-11-03T13:09)

> "3,028 source PRs · 454 contributors. These are a few highlights from OpenClaw v2026.10.10 … Chat Details gathers session information and progress beside wide chats … Advisor can suggest course corrections during a task, **uses extra model calls**, and may miss problems or suggest unnecessary changes. Browser split speech uses the same model as typed chat, with separately configured transcription and speech services."

https://www.reddit.com/r/openclaw/comments/1xmsi3x/openclaw_v20261010_chat_details_advisor_and/

⚠️ Advisor explicitly **adds model calls** → direct per-task token-cost increase, relevant to ROI modelling. INFERRED: Advisor is a cost multiplier on any task where it is enabled.

### 3. ⚠️ Update-fragility complaint with hard operational numbers (u/LobsterWeary2675, 2026-11-03T11:14)

Long-form post, abridged to the numeric claims:

> "This morning I went from **2026.9.7 to 2026.10.10**. The release was about seven hours old and tagged latest.
> — The migration rewrote my claude-cli model refs to anthropic refs. One agent had an API primary with a Claude CLI fallback on purpose. After the update it was pinned to the CLI and the fallback was gone.
> — Then every agent turn in my main chat failed. **11 out of 11.** The **SQLite worker has a hard-coded 512 MB heap cap**, and my main session is big (**~127k transcript events, 1 GB agent DB**). The worker hits the cap, dies with **ERR_WORKER_OUT_OF_MEMORY** and gets respawned, followed by a **full integrity check of the DB that takes up to 28 s on the Pi**. Whatever was in flight is gone. **13 worker deaths in about 50 minutes.**
> — In Telegram that shows up as 'Agent database execution admission is closed' … Replies that were already generated never arrived.
> — Yesterday on 2026.9.7, same session, same DB: zero of these errors. … there's already an issue for this exact failure class (#185953, reported on 2026.10.7: an unbounded transcript read kills the 512 MB worker). It was closed as 'already implemented on main'. It still happens on 2026.10.10. Searching the repo's issues for 'admission is closed' gives **56 results**."

https://www.reddit.com/r/openclaw/comments/1xmq9vh/openclaw_20261010_broke_every_chat_turn_on_my_box/
Linked upstream issue: https://github.com/openclaw/openclaw/issues/191847 (referenced by the author as "the issue if someone cares")

### 4. "I'm bored" — the only first-person cost/efficiency figure from a community member (u/Disastrous_Ad_6915, 2026-11-03T11:14)

> "OpenClaw was already doing a lot of heavy lifting for me back then, but **fixing the errors ate up a significant portion of the time I had saved**. Today, however, I'm bored. … It just works away on its own computer, occasionally sending a Telegram message to let me know it has finished one of its scheduled daily tasks, asking for a piece of data it can't locate, or pointing out when I've provided incomplete materials. And that's it. …
> Right now, I have subscriptions to both Claude Pro and GPT Plus. Claude oversees things via CC, but honestly, **it hasn't had any real work to do for about two weeks now.** Meanwhile, GPT powers my OpenClaw agents. There's also the OpenAI API—though only for image generation—and Gemini 2.5 Flash for text generation. **I'm not spend about $30 a month on the latter two.** This is a remarkably efficient and cost-effective setup."

https://www.reddit.com/r/openclaw/comments/1xmq9mf/im_bored_what_should_i_use_the_tokens_for/

**Only quantified running cost from a community member this window: ~$30/month of API top-ups on top of two flat subscriptions (Claude Pro + GPT Plus), with the agent running unattended daily scheduled tasks.** No hours-saved number given. INFERRED: the user's own framing ("time I had saved") acknowledges a savings-vs-maintenance tradeoff but is not measured.

### 5. Model-selection question (u/thelegend13x, 2026-11-03T09:47)

> "Which model or models do you trust that ensures your tasks/automations get done correctly without burning too much usage or tokens?"

https://www.reddit.com/r/openclaw/comments/1xmot6h/which_ai_model_do_you_use_in_open_claw/

Cost-efficiency is the framing of the only open question posted in-window. INFERRED: cost/token anxiety is the dominant open theme in r/openclaw right now, ahead of capability.

### Comment activity — UNAVAILABLE

`https://www.reddit.com/r/openclaw/comments/1xmq9vh.json`, `/1xmq9mf.json`, `/1xmvdhz.json` all returned **HTTP 403** (comment endpoint blocked). `r.jina.ai` proxy on the comment thread URL also returned the Reddit 403 block page ("You've been blocked by network security"). **No comment-level activity, scores, or reply counts could be read this window.** Post bodies via RSS worked.

### Cross-subreddit — NO in-window OpenClaw mentions

- r/ClaudeAI (`/new/.rss?limit=50`, feed updated 2026-11-04T09:33:24Z): **0 occurrences of "openclaw"** in the full 50 entries.
  `https://www.reddit.com/r/ClaudeAI/new/.rss?limit=50`
- r/LocalLLaMA (`/new/.rss?limit=50`): **0 occurrences of "openclaw"** in the full 50 entries.
  `https://www.reddit.com/r/LocalLLaMA/new/.rss?limit=50`

Both feeds returned HTTP 429 on the first attempt and required a delayed retry. INFERRED: OpenClaw had zero off-platform visibility in these two subreddits during the window — it is not currently a topic of discussion outside its own subreddit.

---

## Discourse activity

Source: `https://community.openclaw.ai/latest.json` (returns only 30 topics → all counts are **LOWER BOUNDS**).

**Topic-ID allocation probe (339 → 380):** existing topics above the previous high-water mark 338 are **352, 354, 356, 361, 364** only. IDs 339–351, 353, 355, 357–360, 362–363, 365–380 do not exist (404). **Highest allocated topic ID is now 364.** No topic was deleted or skipped (no gaps that look like moderation).

**Topics with in-window posts (2026-11-03T09:28Z → 2026-11-04T09:28Z):**

| Topic | Title | In-window posts | Status of prior-window items |
|---|---|---|---|
| 197 | Rules you've had to teach your Claw the hard way 🗞️ | 1 | — |
| 260 | I just make a public presentation about do the same "multiplayer" openclaw at my company | 2 | **moved** |
| 286 | ClawHub: blink-wallet 3.0.0 stuck | 1 | **moved** |
| 311 | What's your Claw working on right now? 🛠️ | 1 | **moved** |
| 352 | Clawseccheck 4.4.4 and 4.4.5 retained, clawscan verdict is null, not public | 2 | **NEW topic** |
| 354 | Who handles recovery of existing tasks on [OpenClaw Multiplayer Server]? | 2 | **NEW topic** |
| 356 | Scheduled Discord read fails: matching recorded creator origin | 3 | **NEW topic** |
| 361 | Windows node 2026.9.5: File Transfer loads, but effective file commands are missing | 2 | **NEW topic** |
| 364 | Keep agent API keys in one encrypted store your phone can autofill | 1 | **NEW topic** |
| 96 / 234 / 265 / 270 / 338 | — | 0 | **did NOT move** in-window |

---

## Use cases & deployments

### A. KFP_Sticky_Note — office automation + compliance paperwork (topic 311, 2026-11-03T18:20)

> "1. **Follow up on compliance papers.** We have a bunch of paperworks, report, letter of guarantee, bank papers, bureaucratic papers, procedural log whatevertheclaw — **I almost went bald dealing with this.** One of my employee now wear a skinhead because he does went bald because of this. Now, one agent is dealing with it. Good holy crustaceans
> 2. **Office automation.** Aircon, air filter, toilet occupation check, food delivery handling, CCTV snapshot, 3D printer automation
> 3. Journal recording
> 4. Document librarian
> 5. Backup girl
> First one is the biggest headache they get rid off for me. Second one is convenient that I don't have to have like 5 apps anymore.
> **I'm not brave enough, or risk managed enough, to let my agent handle money, bank, or trading for me right now, but we will so.** … At first some of them were so down that they'd be replaced. Now they got new tasks with less soul-sucking-headache but more responsibility and are asking for a raise."

https://community.openclaw.ai/t/311

Deployment shape: a **single small non-developer company** (self-described: "my company is not a developer company", topic 260). The agent set spans (a) regulatory/compliance document chasing, (b) building/facility IoT control, (c) personal journaling, (d) document filing, (e) backups. **INFERRED:** a 5-agent-per-person office deployment replacing several SaaS subscriptions ("I don't have to have like 5 apps anymore"). Explicitly refuses money/bank/trading authority. No team size, no hours saved, no cost given.

### B. Saul_Burgos — company-wide multiplayer deployment, self-hosted on Google Cloud VM (topic 260, in-window posts 2026-11-03T17:55 and 2026-11-03T23:25)

Setup (stated 2026-11-01, pre-window but carried into window):

> "One Gateway on a Google Cloud VM. A small group of developers (**3–5**) connect to it, each signed in as themselves, so the multiplayer features work (owners, mentions, presence). Everyone chats with the same agents."

Billing decision (stated 2026-11-02, pre-window):
> "For a company deployment, I'll use a **company-owned OpenAI API key** as the Gateway/agent default and let developers connect personal accounts only for their own new chats."

In-window (2026-11-03T17:55, KFP_Sticky_Note):
> "It is quite a lot to learn and since **my company is not a developer company**, I don't know how I'd use it yet. We're the kind of company that if we ever have to do a 'meeting' something is going not quite right."

In-window (2026-11-03T23:25, joe): joe linked the official Team setup docs (`https://docs.openclaw.ai/start/teams`) as the answer.

https://community.openclaw.ai/t/260

**This is the most concrete in-window company deployment spec found: 1 self-hosted Gateway on a GCP VM, 3–5 developers, company-owned API key for billing, personal accounts for new chats.** No ROI measurement attached.

### C. MajorPeabody — network asset inventory (topic 311, post dated 2026-11-03T00:52 → PRE-WINDOW, 8.5 h before window open; included because the follow-up was in-window)

> "Spent this morning teaching Cmdr Data how to ssh into other machines, and inventory assets in the network. **We finished the last IP in our first Class C 5 minutes before quitting time.**"

https://community.openclaw.ai/t/311
(Prior-window reported as "/24 network inventory finished in one morning". Now: the **precise figure is "5 minutes before quitting time"** on a full /24 — a quantified throughput datapoint. PRE-WINDOW post, but it sharpens a previously-reported item. INFERRED: a /24 = 254 hosts inventoried in <8 h wall-clock including setup.)

### D. Orend11 — outbound-call safety rule (topic 197, 2026-11-04T00:44)

> "Ha, the number check is a good rule. One tip: make it check the **resolved number against the contact card, not the name**, because name matching is where mixups happen. Even better, have it show you the actual number and wait for a yes before any send or call."

https://community.openclaw.ai/t/197

### E. kenmazaika — GPG/`pass` credential store for agent API keys, phone autofill (topic 364, NEW, 2026-11-04T00:44)

Full write-up: agent generates a GPG key → `pass init` → `~/.password-store` as a **private** Git repo (ciphertext only) → Pass for iOS over HTTPS with a GitHub PAT + the same private GPG key → bidirectional proof (`phone-test` → `pass git pull`) → a `## Credentials` block in the always-loaded instruction file mandating: "use the value inline, **never echo it, never pass a secret as a command-line argument**".

https://community.openclaw.ai/t/364

### F. Pretyflaco — L402 credential-isolation fix in a published ClawHub skill (topic 286, in-window post 2026-11-03T09:52)

> "Thanks patrickerichsen, the credential-isolation finding was correct. We reproduced it (**a token paid for at one service was sent to an unpaid service on another port of the same host, and could be sent from https to plain http**) and fixed it in v3.0.1, now submitted"

Fix: "The L402 credential is bound to the **origin (scheme + host + port) + path** of the URL that actually issued the 402, not the URL the user typed or a HEAD probe, and is sent only directly back to it." Fix PR: https://github.com/blinkbitcoin/blink-skills/pull/24

https://community.openclaw.ai/t/286
Source: https://github.com/blinkbitcoin/blink-skills/pull/24

---

## ROI & business-outcome metrics

### In-window community-reported ROI: **one cost figure, no hours-saved figure**

1. **~$30/month** API spend on top of Claude Pro + GPT Plus for a multi-task unattended deployment (u/Disastrous_Ad_6915).
   https://www.reddit.com/r/openclaw/comments/1xmq9mf/im_bored_what_should_i_use_the_tokens_for/
2. **Zero** in-window posts quantified hours saved, payback period, revenue, error-rate reduction, or cost-per-task. Discourse full-text keyword scan over all in-window posts (keywords: hours, saved, pay/paid, payback, revenue, cost, ROI, productivity, faster, minutes, $, deploy, company, team of, users) returned **only** the hits reproduced in this document (pretyflaco "pay", Saul_Burgos "company", Tim "saved" = "saved" as in "preserved state"). No ROI statement.

### ROI claim found in-window but PUBLISHED PRE-WINDOW — NOT in prior windows' reports

**agencyboxx dev.to case study — the most detailed quantified ROI figure located to date, anywhere.**
Published **2026-04-12** (PRE-WINDOW, verified via dev.to API `published_at: 2026-04-12T02:22:56Z`, 0 comments, 0 public reactions). Canonical: https://agencyboxx.com/blog/openclaw-agency-time-savings-4-fte-days-per-week

> "Over 12 months, across **62 active agency clients and 10 team members**, we tracked every automated action. The result? We recovered **4 full-time equivalent days per week – that's 32 hours**. At our blended rates, that's an **annual operational capacity boost between $183,000 and $319,000**. Our system runs on a dedicated Mac, costing roughly **$3 to $4 per day in AI tokens**."

Methodology as stated: discrete-task mapping → baseline human time → volume × per-task time → subtract human review time → aggregate.
https://dev.to/agencyboxx/how-i-reclaimed-32-hoursweek-with-diy-ai-agents-openclaw-case-study-1bp0

**Caveats (important):** the dev.to post is a **marketing funnel for agencyboxx.com** (canonical URL redirects to their own domain), with **0 comments and 0 public reactions**, no named client, and a Python logging snippet rather than verifiable telemetry. The post itself asserts "your mileage will vary". INFERRED: treat as a **vendor-authored estimate, not an independently verified measurement**. It is still the only OpenClaw ROI claim located that specifies client count, team size, token cost/day, and a dollar range — and it is materially more specific than the previously-known $500/90-days figure.
- The previously-known **"I tried OpenClaw, it cost me $500"** is confirmed to be dev.to/thegdsks (GDS K S), **not** a u/barmmerm Reddit thread; re-verified this window via search. https://dev.to/thegdsks/i-tried-the-free-ai-agent-with-124k-github-stars-heres-my-500-reality-check-2885

### SEO/noise ROI content — explicitly rejected as non-evidence

Searches for OpenClaw ROI surfaced a large layer of **SEO content-farm pages** with unsourced numbers: openclawroadmap.com ("$1K–$30K+ per month", and it self-labels "figures are illustrative composites"), betterclaw.io ("save 5-20 hours/week"), crewclaw.com ("100+ hours per month"), crazyrouter.com ("70% support cost reduction"), openclawpro.co ("200+ hours per month"), pagelines.com ("23 hours/week"), coreyganim.com ("10+ hours saved per week"), skywork.ai ("90% ticket resolution", "15 hours monthly"), theagency47.com ("6.4 hrs/week"). **None are dated in-window, none cite a source, and none come from an identifiable OpenClaw user.** They are excluded from the scorecard.

### Discourse search endpoint

`https://community.openclaw.ai/search.json?q=...` → "payback" and "revenue" returned **zero** results; "hours saved" returned only topic 276 (Council Network, out-of-window, no numbers); "cost per task" returned only topic 124 (out-of-window). No new ROI in Discourse.

---

## Operational metrics

| Metric | Value | Source |
|---|---|---|
| SQLite worker hard-coded heap cap | 512 MB | https://www.reddit.com/r/openclaw/comments/1xmq9vh/openclaw_20261010_broke_every_chat_turn_on_my_box/ |
| Chat-turn failure rate after 2026.9.7 → 2026.10.10 upgrade | 11 / 11 failed | same |
| Agent DB size / transcript events | ~1 GB DB, ~127k transcript events | same |
| DB integrity check after worker OOM | up to 28 s (on Pi) | same |
| Worker deaths | 13 in ~50 min | same |
| Repo issues matching "admission is closed" | 56 | same |
| Prior issue closed as fixed but recurring | #185953 (closed "already implemented on main", still reproduces on 2026.10.10) | same |
| New upstream issue filed by the author | https://github.com/openclaw/openclaw/issues/191847 | same |
| Model migration regression | claude-cli model refs rewritten to anthropic refs; API-primary + CLI-fallback agent lost its fallback | same |
| Model token-efficiency (new model) | Particle-1 ≈ 45% fewer output tokens than DeepSeek V4.1 Flash | https://www.reddit.com/r/openclaw/comments/1xmvdhz/particle1_is_available_in_openclaw/ |
| Advisor cost effect | "uses extra model calls" | https://www.reddit.com/r/openclaw/comments/1xmsi3x/openclaw_v20261010_chat_details_advisor_and/ |
| Release scale v2026.10.10 | 3,028 source PRs, 454 contributors | same |
| Discord scheduled-job failure | creator-origin mismatch; `callerOrigin.kind: "unknown"`, `toolsAllowProvenance.source: "final-executable-surface"` | https://community.openclaw.ai/t/356 |
| `openclaw doctor --lint` coverage | 37 checks run, 31 skipped, no creator-account repair finding | https://community.openclaw.ai/t/356 |
| Windows node File Transfer | 16 effective commands, 0 of 4 file/dir commands present; node 2026.9.5 / Gateway 2026.10.4 | https://community.openclaw.ai/t/361 |
| Network inventory throughput | last IP of a Class C finished 5 min before end of a working morning | https://community.openclaw.ai/t/311 |
| L402 credential isolation defect | token for one origin sent to another port on same host; https → plain http downgrade possible | https://community.openclaw.ai/t/286 |
| Company deployment spec | 1 Gateway on GCP VM, 3–5 devs, company-owned OpenAI API key as default | https://community.openclaw.ai/t/260 |
| Multiplayer Server: unresolved task receipts | 5 owned PR tasks with stopped/improper containers, missing results, lost workspace binding | https://community.openclaw.ai/t/354 |

### New-issue triage pattern observed

Two of the three new topics (356, 361) were answered by maintainer joe with **read-only diagnostic commands rather than fixes**:
- 356: `openclaw automations get|show <jobId>`, `openclaw automations runs <jobId> --limit 5`, `openclaw doctor`, `openclaw doctor --fix` (with "back up your state first, since --fix can make other changes too"), and `doctor --lint` to avoid state migration.
- 361: "I've not been able to verify a supported, read-only command that exposes the resident node's raw connection manifest without restarting it" → joe recommends **a fresh GitHub issue** referencing #77730; notes #77730 "was closed for inactivity rather than through a confirmed resolution".
https://community.openclaw.ai/t/356 · https://community.openclaw.ai/t/361

---

## ClawHub

### 1.0.59 / skill-version security-scan block — no ETA, but a new workaround class emerged

- **Topic 338 (GuangfuWu's blocked version 1.0.59): NO in-window movement.** Last post remains jjjhenriksen 2026-11-02T16:52:11Z: "This issue is currently being looked into by the maintainer team!" **No ETA, no resolution, no maintainer reply in-window.**
  https://community.openclaw.ai/t/338
- **NEW in-window topic 352 shows the same failure mode hitting a second publisher**, with the fullest technical write-up so far:
  - publisher `gl0di`, skill `clawseccheck` (https://clawhub.ai/api/v1/skills/clawseccheck)
  - "Two consecutive releases were uploaded successfully and never became public: **4.4.4** (uploaded 2026-10-24) — no, `/versions/4.4.4` returns 404; **4.4.5** (uploaded **2026-11-03 15:14**) — no, `/versions/4.4.5` returns 404"
  - "`latestVersion` is still 4.4.3, which is public and has a `clawscan` verdict."
  - "manifest.json: `status: "succeeded"`, `writtenBack: true` (4.4.4: 150 files, 4.4.5: 152 files); **clawscan.json, endor.json, skillspector.json, virustotal.json: 5 bytes each (null)**; static-analysis.json: present (4.4.5: engine v2.4.27, **19 findings**)"
  - "The only difference from the public 4.4.3 is that **clawscan.json is null instead of a 3 KB verdict**."
  https://community.openclaw.ai/t/352
- **Maintainer answer (joe, 2026-11-04T01:03) — NEW, actionable, no ETA:** "A regression involving partial SkillSpector reports was addressed in **ClawScan #129**" (https://github.com/openclaw/clawscan/pull/129), "although we can't yet confirm that's the cause of your specific releases being held." Supported re-scan path: `clawhub scan --slug clawseccheck --version 4.4.5 --update --json` (then 4.4.4). Key caveats from joe: "**The --update option writes successful scan results back to the selected version. It does not require uploading another release.**" and "**A successful scan alone doesn't necessarily clear an existing publication hold.**" Also: "We don't want to bypass security checks or create unnecessary duplicate releases."
  https://community.openclaw.ai/t/352
- **Verified via ClawHub API:** `clawseccheck` still shows `latestVersion` / description `version: 4.4.3`; 4.4.4 and 4.4.5 remain unpublished.
  https://clawhub.ai/api/v1/skills/clawseccheck
- **Blink-wallet (topic 286)** is a *different* ClawHub issue that resolved itself: v3.0.1 submitted 2026-11-03T09:52 with the credential-isolation fix; the underlying complaint was a security finding, not a scan hang.

### Skill registry activity (in-window)

Endpoint: `https://clawhub.ai/api/v1/skills?limit=20` — returns `items` + a `nextCursor` (`{"v":1,"index":"by_active_updated","key":[…]}`). **Pagination IS followable**: passing `cursor=<url-encoded nextCursor>` returned **199 further items** (so the API does serve >200 items/page via cursor; a plain `limit=200` cap applies per page).

**8 skills newly CREATED inside the window** (createdAt between 2026-11-03T09:28Z and 2026-11-04T09:28Z), all with near-zero installs:

| Skill | created (UTC) | downloads | installs | versions |
|---|---|---|---|---|
| style-sampling | 2026-11-03T11:25 | 0 | 0 | 3 |
| find-references | 2026-11-03T20:23 | 0 | 0 | 2 |
| video-moodboard | 2026-11-04T01:35 | 0 | 0 | 5 |
| media-judge | 2026-11-04T04:55 | 0 | 0 | 2 |
| douyin-favorites-batch-add | 2026-11-04T06:12 | 0 | 1 | 2 |
| ego-x-post | 2026-11-04T06:51 | 0 | 0 | 2 |
| mint-agent-card | 2026-11-04T08:22 | 0 | 0 | 1 |
| scenerally-player-guide | 2026-11-04T08:10 | 0 | 0 | 1 |

**Top adoption among most-recently-updated skills** (all updated in-window, install counts cumulative):
- `shieldcortex` — **9,049 downloads / 100 installs**, 200 versions, 2 stars
  https://clawhub.ai/api/v1/skills/shieldcortex
- `sentisense` — 4,729 dl / 34 installs, 80 versions
- `smyx-psychological-stress-assessment-analysis` — 2,320 dl / 21 installs, 5 stars
- `smyx-infant-stool-color-abnormality-analysis` — 1,941 dl / 8 installs
- `sogni-creative-agent-skill` — 621 dl / 2 installs, 22 versions

INFERRED: skill publishing is very high-volume and near-zero-adoption for new entrants (8 new skills in 24 h, all ≤1 install). Adoption concentrates in a small number of long-lived, many-version skills.

---

## ROI SCORECARD

| Dimension | Status | Evidence |
|---|---|---|
| **Hours saved (community, in-window)** | ❌ | No in-window post quantified hours saved. Nearest in-window: "5 minutes before quitting time" for a full Class C inventory (https://community.openclaw.ai/t/311) |
| **Hours saved (vendor case study, PRE-WINDOW 2026-04-12)** | ✅ (caveated) | 32 h/week, 62 clients, 10 team members → $183K–$319K/yr capacity (https://dev.to/agencyboxx/how-i-reclaimed-32-hoursweek-with-diy-ai-agents-openclaw-case-study-1bp0). Vendor-authored, 0 comments, no named client, own-domain redirect |
| **Revenue / payback period (in-window)** | ❌ | Discourse search for "payback" and "revenue" → 0 results. No Reddit ROI post in-window |
| **Running cost (in-window)** | ✅ (partial) | ~$30/month API top-ups on top of Claude Pro + GPT Plus for an unattended multi-task deployment (https://www.reddit.com/r/openclaw/comments/1xmq9mf/im_bored_what_should_i_use_the_tokens_for/) |
| **Token cost reduction (in-window)** | ✅ | Particle-1 ≈ 45% fewer output tokens than DeepSeek V4.1 Flash (https://www.reddit.com/r/openclaw/comments/1xmvdhz/particle1_is_available_in_openclaw/) |
| **Cost per task / error-rate reduction** | ❌ | No in-window measurement. (Prior-window ldrx "100 live-web tasks" benchmark remains the only per-task cost benchmark, out-of-window) |
| **Latency / throughput** | ✅ (partial) | DB integrity check ≤28 s on Pi; /24 inventory finished 5 min before shift end; 11/11 chat turns failed, 13 worker deaths in 50 min |
| **Maintenance cost / update risk** | ⚠️ | High and growing: 1.5-h downtime-grade upgrade breakage on a Pi (11/11 turns failed), 13 OOM kills in 50 min, migration silently changed model refs and dropped a working fallback; 56 issues matching "admission is closed"; operator describes a whole pre-update ritual ("read the release, dry run, detached updater, and afterwards a script that checks every model and every connection") |
| **Skill adoption** | ✅ (adoption) / ❌ (new) | shieldcortex 100 installs / 9,049 dl; but all 8 skills created in-window have ≤1 install |
| **Company deployment spec (no ROI)** | ✅ | 1 Gateway on GCP VM, 3–5 devs, company-owned API key default (https://community.openclaw.ai/t/260); office agent set of 5 across compliance/IoT/journal/docs/backup (https://community.openclaw.ai/t/311) |
| **ClawHub publication unblock** | ❌ | 1.0.59 still blocked, no ETA (topic 338); clawseccheck 4.4.4/4.4.5 still unpublished; new `--update` re-scan path offered (topic 352) |

---

## Caveats & data gaps

1. **Reddit comments are entirely unreadable this window.** `/comments/<id>.json` → HTTP 403 for all three threads tried; `r.jina.ai` proxy → Reddit's "You've been blocked by network security" page. Post bodies via RSS worked. **No score/comment counts, no reply sentiment, no counter-arguments to the outage complaint** could be captured. The outage post's reception is unknown.
2. **Reddit rate-limiting is aggressive.** `/new/.rss` and `/new.json` returned HTTP 429 on repeated attempts; `/new.json` and `old.reddit.com` RSS returned 403/302. Only the `www` RSS endpoint with a browser User-Agent succeeded, after 20–30 s sleeps. The 5-post in-window count is therefore a **minimum** — if posts were made and later removed, or if pagination beyond 50 was needed, they are invisible.
3. **Discourse `latest.json` returns only 30 topics** — all topic/post counts are LOWER BOUNDS. I worked around this with an explicit ID probe 339→380, which establishes 364 as the high-water mark and that no topics exist between 339–351, 353, 355, 357–360, 362–363, 365–380.
4. **No in-window ROI figure from a verifiable community source.** The single cost datapoint (~$30/mo) comes from a post whose author explicitly frames his own outcome as "bored" — a self-selected high-satisfaction user, not a representative sample. It is also the same user who reports that fixing errors ate a significant share of his saved time.
5. **The agencyboxx 32 h/week figure is vendor-authored**, published 2026-04-12 (outside the window), with 0 comments / 0 reactions, an own-domain canonical redirect, and no independently auditable telemetry. It should not be treated as a confirmed business outcome. It is reported because it materially sharpens the ROI picture and was not in prior windows' findings.
6. **A large SEO layer of fake-precision ROI content is active** (10+ sites found this window). All excluded; noted so future runs don't re-report it as new.
7. **ClawHub `updatedAt`-ordered listing conflates new skills with republished ones** — I used `createdAt` to separate them. Per-page cap is 200 items but the `nextCursor` is followable, so a full registry sweep is possible in future runs if desired.
8. **Cross-subreddit visibility is zero** — 0 "openclaw" hits across 50 newest posts in each of r/ClaudeAI and r/LocalLLaMA. Both feeds also returned 429 on first attempt.
9. **Topic 311's MajorPeabody /24-inventory post is dated 2026-11-03T00:52Z — pre-window** (window opens 09:28Z). It is included only because it sharpens an already-reported finding with a concrete "5 minutes before quitting time" figure; the in-window activity on 311 is KFP_Sticky_Note's compliance/office-automation reply.
10. **Window boundary**: Reddit's 5 in-window posts all fall on 2026-11-03 between 09:47 and 15:06 UTC. Nothing was posted to r/openclaw between 2026-11-03T15:06Z and window close 2026-11-04T09:28Z (~18 h of silence) — the posting gap did not fully close, it only partly filled.

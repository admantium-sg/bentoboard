# Community / Use-Cases Pass — 2026-11-12

**Window:** 2026-11-11T09:28:00Z → 2026-11-12T09:28:00Z (UTC)
**Pass scope:** r/openclaw (Reddit), community.openclaw.ai (Discourse), ClawHub skill registry, community showcase/templates/providers.
**Budget used:** 3 web_search (DuckDuckGo backend, worked this run), 3 web_fetch, remainder via direct JSON/RSS curl.
**Channels dark:** Discord (no bot token) and X/Twitter (no collection route) — not observed, not inferred. Reddit engagement counters are absent from RSS; only comment *presence* is reported, never as adoption.

---

## Findings

### 1. Reddit — the biggest in-window thread is about running OpenClaw with **no sandbox at all**, and most commenters already do it
**Source:** https://www.reddit.com/r/openclaw/comments/1xu04yp/running_without_a_sandbox/
**Posted:** 2026-11-12T01:47:09Z (u/pjr2844) — *"How risky is it to use harnesses like Openclaw or Hermes directly on my PC without docker or a sandbox? Is it really going to go rogue and delete all my files?"*
**Confidence:** high (full post + 15 comments read via per-post RSS).

Concrete deployment claims in the thread (**claims, self-reported, unverified**):
- u/Vlasov_equation: *"I run OpenClaw on a DGX Spark in full-access YOLO mode, and it's connected to nearly every system in my home. That is extremely risky. Deleted files aren't the danger… The danger is an agent which confidently acts on the wrong instruction… a prompt injection hidden in an email, web page, calendar invite or document it processes."*
- u/jhin-chan1011: *"running on raw pc, knows my school log in, email, and using DeepSeek — 6 months + so far no problems."*
- u/PrestigiousBag2994: runs Hermes with no docker/sandbox, mitigated by *"everything important backed up"*.
- u/atsuko_24 recommends *"Run the gateway as its own unprivileged user. Bam, no container overhead and no risk of it breaking your machine."*
- u/the-quibbler recommends a $3 (or $9 for OpenClaw) VPS; u/PermanentLiminality suggests Hyper-V/VirtualBox VM; u/jonnyman9 frames it as identity separation (*"give it your own computer and you would have your own account"*).
- u/hannesrudolph (maintainer): *"Unlikely. Possible. Should run it on its own PC."* / *"Setup ur computer as a node."*

**Interpretation:** the practical community baseline is "full-privilege agent on a machine you own or control", with isolation being the minority choice. The risk framing has shifted from *"will it delete my files"* to *"will it act confidently on the wrong instruction"* — i.e. prompt injection, not destructive local actions, is now the perceived threat. **No adoption metric here — 15 comments only.**

### 2. Reddit — a **named, running deployment**: QuickBooks payment matching driven by email, gated on a strict sender rule
**Source:** https://www.reddit.com/r/openclaw/comments/1xtk31q/your_email_agent_believes_whoever_an_email_says/
**Posted:** 2026-11-11T15:06:31Z (u/Spacesh1psoda) — *"Your email agent believes whoever an email says it's from"* (9 comments read).

The OP describes a real product bug: *"Most setups look for a line inside the email that says 'this sender was verified'… The real stamp and a forged one arrived side by side and looked the same to our code."*

The **most concrete deployment artifact in the whole window** comes from a maintainer:
- u/hannesrudolph: *"My agent matches payments in quickbooks based on emails but they have to be very specific emails from a specific sender. Any variance and the workflow stops."*
- u/kaijurules (builder of their own app): *"each agent only gets the tools on its own list, so the one that reads mail can be set up with nothing that pays or buys… a purchase through the browser asks for approval every time, so a fake CEO email ends up as a card someone has to click."*
- u/foninoteam: trust only the receiving provider's header (*SPF/DKIM pass + DMARC alignment with the From domain*), ignore any duplicate header lower down or body text that *looks* like a verification result; keep a sender allowlist and confirm **out of band** for anything that moves money or changes payment details.
- u/kiwidog8: don't let an LLM decide money-bearing actions; put a deterministic allowlist script in front of the agent.

**Read:** the community consensus is *email content = data, never instruction*, plus human-in-the-loop for anything financial. No numbers, no revenue — but this is a real workflow with a named accounting system. **Verified as a claim only.**

### 3. Reddit — **Claude Fable 5.2** landed in OpenClaw; a user had to hand-patch the 1M context window, and the maintainer says don't make it your default
**Source:** https://www.reddit.com/r/openclaw/comments/1xtltcd/claude_fable_52_from_anthropic_is_now_available/
**Posted:** 2026-11-11T16:12:36Z (u/hannesrudolph) — *"Claude Fable 5.2 from Anthropic is now available in OpenClaw."* (9 comments read.)

- u/cerealizer: on **2026.11.3**, using a Claude subscription through `claude-cli`, had to run `openclaw config set models.providers.anthropic.models '[{"id":"claude-fable-5-2","name":"Fable 5.2","input":["text","image"],"contextWindow":1000000}]' --strict-json --replace` *"or it would default to a 128k context window."*
- u/_jacobtomlinson (maintainer): *"Thanks for reporting. We should have a fix in for this now."* and *"Yeah don't set it as your default 😂 it's helpful to switch to for complex planning or managing subagents though."*
- u/saabbasil: *"I used Openclaw for 1 week somewhere in March then switched to Hermes due to hallucinations."*
- u/shogun77777777: *"Fable seems like overkill for Openclaw but to each their own."*

**Read:** a subscription-authenticated model path (`claude-cli`) is a real, used configuration; the 1M-vs-128k context default was a genuine first-hour friction point, acknowledged and fixed by a maintainer inside the window. Note the model name "Fable" appears nowhere in prior windows — treat the marketing claim ("up to 30% faster output") as vendor-supplied.

### 4. Reddit — Apple **AFM3core** (on-device foundation model) is explicitly rejected as a primary model
**Source:** https://www.reddit.com/r/openclaw/comments/1xtvuwz/openclaw_with_afm3core_as_primary_model/
**Posted:** 2026-11-11T22:34:49Z (u/Extra_Lingonberry887) — 2 comments (AutoModerator + 1).
- u/hannesrudolph: *"It's a super lightweight model. Not suited for this. We tried internally."*

**Read:** on-device Mac foundation models remain utility/setup-model-only. Small thread, but it is a maintainer statement that closes a recurring question.

### 5. Reddit volume: only **4 new r/openclaw posts** fell inside the window
The `/new/.rss` feed (50 entries) contained exactly 4 posts after 2026-11-11T09:28Z (findings 1–4 above). The next-older post is 2026-11-11T04:05Z (v2026.11.3 patch announcement), i.e. **out of window**. The `/hot/` feed returned **HTTP 429** on every attempt this run, so hot-ranking could not be checked. **Confidence: high for `/new/`, medium for overall post volume** (a post published between ~01:47Z and the 09:28Z window close might appear in `/new/` only after a re-poll; the feed was re-polled and showed no later entries).

### 6. Discourse — **4 new topics, zero replies**; no thread activity on existing topics inside the window
Checked `https://community.openclaw.ai/latest.json` (p1 + p2, 60 topics) and per-topic `.json` for ids 404, 415, 418, 421, 422, 423, 425, 429, 430.
In-window activity = **only the 4 new topics below** (each `posts_count` 1, `reply_count` 0, views 1–4). Every previously-known topic (incl. #415 Templates Showcase, #418 state-dir, #423 tools.deny, #421/#422 Shenzhen) has a `bumped_at` **before** 2026-11-11T09:28Z — i.e. **no in-window replies at all on the Showcase / hackathon / bug threads.**

- **#428** `https://community.openclaw.ai/t/428` — 2026-11-12T06:50:40Z, u/Mori_Kentaro — *"macOS: approval binding rejects sandbox-exec + Python unittest before approval."* OpenClaw **2026.11.3 (847611d)**, macOS, local Gateway. Two execution requests rejected before any approval prompt, no tests ran: `SYSTEM_RUN_DENIED: approval cannot safely bind this interpreter/runtime command` for `sandbox-exec [profile denying network and file writes] /usr/local/bin/python3 -B -m unittest -v [test modules]`. Explicitly asks for a supported module-based test path that keeps the network/file-write restrictions, and refuses a blanket interpreter allowlist. **Confidence: high.** 0 replies.
- **#427** `https://community.openclaw.ai/t/427` — 2026-11-12T05:08:11Z, u/Saul_Burgos — *"Can OpenClaw dispatch coding tasks to Codex Cloud or Claude Code in the cloud?"* Concretely describes a **multi-agent dev pipeline**: Lead → Planner → Coder → Reviewer → PR, with the Gateway on a Mac mini, OpenClaw 2026.10.5 + native Codex harness, asking whether the coding task can run in a hosted environment while OpenClaw stays in charge, with the completion status/test result/diff returned to a separate Reviewer agent before any PR. Asks which steps needed manual intervention and *where the commands actually ran*. **Unanswered in-window — an open ecosystem gap (cloud/offloaded execution is not supported).** 0 replies.
- **#426** `https://community.openclaw.ai/t/426` — 2026-11-12T04:15:46Z, u/Aleksandr_Liashenko — *"OpenClaw + LM Studio (Windows)."* LM Studio HTTP server on port 1234, OpenAI-compatible endpoints (`/v1/models`, `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`) plus native `/api/v1/*` routes, just-in-time model loading enabled. **Deployment signal: local-model-on-Windows via LM Studio is an active setup path.** 0 replies.
- **#424** `https://community.openclaw.ai/t/424` — 2026-11-11T16:24:01Z, u/Argo — *"Codex native child continuation loses admitted parent tree after resume."* OpenClaw 2026.10.10, Codex native runtime on Linux. After continuation of a parent conversation the native collaboration tree lists only the current root; addressing the original child by alias → *"native target not currently identified"*, by exact thread ID → `INVALID_REQUEST: Codex native input target is outside the sender's admitted tree`. **Both real errors are masked in the UI as "Native hook relay unavailable"** — a diagnostics defect. The author checked public relay issues #87331 / #89325 (older 2026.5.26 failures) and says they are **not confirmed to match**. **Confidence: high on the report, unverified root cause.** 0 replies.

### 7. ClawHub — **yesterday's count dispute is now RESOLVED: yesterday = 149, today = 109**
The prior window's dispute (149 vs 0) was a pagination artifact. ClawHub's `/api/v1/skills` does **not** support `offset` (it silently returns the same page) but **does** support `nextCursor`; the sorted index (`sort=createdAt&order=desc`) returns a *different* slice than the unsorted index, and `limit=100` caps the response at ~97–98 items regardless of the requested limit.
- Full catalog enumerated by walking `nextCursor` on the unsorted index: **2,965 skills** (oldest 2026-02-13, newest 2026-11-12T09:16:06Z).
- **Current window (2026-11-11T09:28Z → 2026-11-12T09:28Z): 109 new skills.** Re-fetched 4× for stability (identical result each time).
- **Yesterday's window (2026-11-10T09:28Z → 2026-11-11T09:28Z): 149 skills from 47 publishers** — this exactly reproduces the community pass's 149 and its publisher table (romeoseo 48 = 32.2%, top-4 = 47.7%). **The "0" figure was wrong; the platform pass under-counted.**
- Source: `https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc` (+ cursor walk).

### 8. ClawHub — publisher concentration **dropped sharply**: top-4 = 22.9% (was 47.7%); 70 publishers
| Publisher | Skills | Share |
|---|---|---|
| roshanjonah | 11 | 10.1% |
| cxdanger123-commits | 8 | 7.3% |
| z324169276 | 3 | 2.8% |
| xfl12345 | 3 | 2.8% |
| scavio-ai | 3 | 2.8% |
| huaweicloudskill | 3 | 2.8% |
| jjjhenriksen | 3 | 2.8% |
| chrischall | 3 | 2.8% |
| jackbrigs | 3 | 2.8% |

**Top-4 = 22.9%, top-10 = 38.5%, 70 distinct publishers.** `romeoseo` (32.2% yesterday) published **nothing** in-window — yesterday's concentration was one account, and it did not repeat. **109 raw new skills therefore overstate diversity much less than yesterday's 149 did, but 109 ≠ 109 use cases** (see finding 9 for the suite effect).

### 9. ClawHub — the "109 new skills" number is inflated by **product-suite dumps**: one vendor published 11 of them
`roshanjonah` published **11 `qubrics-*` skills in one burst** — a coherent suite for giving agents a managed email inbox: `qubrics-email-for-agents`, `qubrics-agent-email-inbox`, `qubrics-mailbox-agent`, `qubrics-cli`, `qubrics-mcp-setup`, `qubrics-send-email`, `qubrics-attachments`, `qubrics-management`, `qubrics-token-efficient-usage`, `qubrics-getting-started`, `qubrics-email-for-ai-agents`. Counted as 11 skills, it is **one vendor launch**, not eleven use cases. Adjusting for suite effect: **109 skills ≈ ~99 independent publishes ≈ materially fewer distinct use cases.**

Second burst: `cxdanger123-commits` published **8 Chinese office-suite skills** (`office-pptx`, `xlsx`, `excel-studio`, `gongwen-format`, `ppt-polish`, `pdf`, `visio`, `xlsx-qc`) — one suite, one publisher.
Language mix of the 109: **69 English / 40 Chinese.**

### 10. ClawHub — a **human-in-the-loop services marketplace** appeared with concrete prices (new category)
`jackbrigs` published 3 skills that sell *human* work to agents — the first marketplace-style, priced artifacts seen in-window:
- `human-verdict` — *"a neutral, signed verdict from a human engineer on another party's deliverable against criteria you agreed: **250 EUR**, refunded if a finding cannot be reproduced. Use when two agents disagree on whether work was delivered, or when a payment depends on independent verification."* — https://clawhub.ai/jackbrigs/skills/human-verdict
- `human-infra-rescue` — *"a human engineer diagnoses and repairs your own Linux, Kubernetes, CI, DNS or TLS systems when your agents cannot: diagnostic **200 EUR** (within 72 hours of payment), rescue **450 EUR**; a rescue request is acknowledged within 1 hour."* — https://clawhub.ai/jackbrigs/skills/human-infra-rescue
- `cyprus-onsite-check` — *"A person goes to a place in Cyprus and reports what is there: photographs and answers with liveness proof (latest Base block hash in frame…)"* — https://clawhub.ai/jackbrigs/skills/cyprus-onsite-check

**These are prices, not ROI** — nobody reported revenue or savings. But they are the first in-window artifacts where an agent-skill is the *delivery mechanism for paid human labour*, with arbitration between two agents as the trigger. **Named artifacts, unverified claims.**

### 11. ClawHub — other genuinely interesting in-window skills (with URLs)
- `cognicore-dev/never-twice` — *"Self-improving agent that never repeats a mistake. Learns from every correction and failure, remembers why, and checks only the relevant lessons before acting. Local-first, open source."* (v1.0.0 → v2, 74 downloads / 1 install / 1 star — the only skill in-window with an install) — https://clawhub.ai/cognicore-dev/skills/never-twice
- `entguinee-afk/kid-safe-assistant-setup` — *"Deploy a locked-down OpenClaw chat assistant for a child: sandboxed tools, safety rules, photo/voice chat, parent progress digest"* — https://clawhub.ai/entguinee-afk/skills/kid-safe-assistant-setup
- `jjjhenriksen` coursework trio — `coursework-research-drafting` (*"Verify prompts and course policies, research supported claims, and produce rubric-aligned drafts where permitted"*), `coursework-technical-verification` (*"Verify coursework code and numerical results with reproducible inputs, boundary tests, and honest measured reports"*), `canvas-lms-navigation` (*"Navigate institution-neutral Canvas LMS pages, verify assignment context"*) — a coherent academic-integrity-aware student-agent set — https://clawhub.ai/jjjhenriksen/skills/coursework-technical-verification
- `mmsample97/resume-interview-prompts` — *"Interview for one job, then draft a resume from confirmed numbers only, in plain words"* — https://clawhub.ai/mmsample97/skills/resume-interview-prompts
- `korbenzhang/macos-health-check` — *"Check a Mac used as a work computer: memory pressure, CPU load, disk use, startup items, app leftovers, backup state. Read-only commands"* — https://clawhub.ai/korbenzhang/skills/macos-health-check
- `clawsean/update-impact-layer` — *"Before or after OpenClaw updates, track local overwrite risks and bounded integration checks around the native updater."* (3 versions in-window) — https://clawhub.ai/clawsean/skills/update-impact-layer
- `worldwonderer/video-recap` — end-to-end Chinese video commentary generation (understand → direct → cut → script → TTS → mix), self-contained skill — https://clawhub.ai/worldwonderer/skills/video-recap
- `huaweicloudskill/huawei-cloud-officeace-expert-migration` — migrate expert/agent packages from WorkBuddy, QwenWork (千问办公) or Baidu DuMate into OfficeAce, with a mandatory "is this a cross-machine migration?" question first — https://clawhub.ai/huaweicloudskill/skills/huawei-cloud-officeace-expert-migration
- `simon5530/carbon-accounting-review` — GHG inventory / PCF evidence tracing, flags double counting, states assurance limits — https://clawhub.ai/simon5530/skills/carbon-accounting-review
- `nbandan/heirpros` — estimates research hours for a US probate heir search via a free public endpoint — https://clawhub.ai/nbandan/skills/heirpros

### 12. ClawHub — spam / duplicate share is **~2%**, far lower than yesterday's estimate
Two exact duplicate pairs in-window: `elgora-poster-skill` and `elgora-solver-skill` published **twice each** (owners `elgora` and `elmariachi111`) with byte-identical summaries → 2/109 = **1.8% duplicate/mirror share**. No null descriptions in-window (the `description` field is null for 100% of items, but `summary` is populated for all 109 and all are ≥15 chars; yesterday's "10/46 null description" heuristic does not transfer to this field here). **Conclusion: yesterday's severe concentration + spam pattern was publisher-specific, not systemic — today's catalogue is materially cleaner and more diverse.**

### 13. ClawHub — engagement counters remain unusable; **do not read them as adoption**
Across the 109 in-window skills: downloads 0–88, installs 0–1, stars 0–1, comments 0. One-day-old skills cannot plausibly have 74–88 downloads as real installs. Consistent with prior windows: **counters are ignored for adoption purposes.**
New publisher signals (first appearance in-window): `roshanjonah`, `jackbrigs`, `cognicore-dev`, `entguinee-afk`, `mmsample97`, `korbenzhang`, `supereeeyunjiu`, `earthaveeman`, `chineseworksheet`, `blindboxshop`, `chinamedvisit`, `taofind`, `fixmyscan`, `nbandan`, `simon5530`.

### 14. No new first-party ROI or revenue attribution exists in-window
The only quantified business figures are the EUR prices of `jackbrigs`' human services (finding 10) — that is a price list, not realized revenue, savings, or time-saved. The QuickBooks payment-matching workflow (finding 2) has no numbers attached. The Fable 5.2 thread has a throughput claim but it is Anthropic's, not a community deployment measurement. Everything else on the open web in-window was unattributed SEO content (`solvea.cx`, `datacamp.com`, `cloudways.com`, `latenode.com`, `tldl.io`, `o-mega.ai`, `betterclaw.io`, `kanerika.com`, `neuraplus-ai.github.io`, `sidsaladi.substack.com`) — several of which quote "$62K revenue agents" or "save 5–20 hours/week" with **no named artifact**; excluded per the standing rule. **Status unchanged: zero first-party ROI.**

---

## Community Pulse

**Working well**
- **Isolation is optional and widely skipped.** Full-access agents on personal machines / homelabs / DGX Spark are the community norm; the recommended mitigations are cheap ones (unprivileged gateway user, own machine-as-node, cheap VPS, VM).
- **Financial automation with hard gates works.** The QuickBooks-matching workflow only fires on exact sender + exact shape; any variance stops the run. That pattern (deterministic gate in front of an LLM) is the most mature advice in the thread set.
- **On-device model paths are real.** LM Studio on Windows (OpenAI-compatible, JIT loading) and Claude-subscription-via-`claude-cli` are both actively used configurations, not theoretical.
- **Maintainer responsiveness is fast and public.** Fable 5.2's 128k-context default was reported at 20:39Z and answered by a maintainer at 22:43Z with "we should have a fix in for this now"; AFM3core got a definitive "not suited for this" within 4 hours of the question.
- **ClawHub diversity improved sharply** — top-4 publisher share 47.7% → 22.9%, yesterday's dominant publisher absent, 70 publishers, ~2% duplicate rate.

**Problems**
- **Approval binding blocks legitimate local work.** #428: `SYSTEM_RUN_DENIED` on `sandbox-exec … python3 -m unittest` on 2026.11.3/macOS — no tests ran, no prompt shown, and the documented escape hatch (broad interpreter allowlist) is exactly what the user refuses.
- **Diagnostics are lossy.** #424: two genuinely different Codex-native errors (target-not-identified vs. outside-admitted-tree) both surface to the user as the same "Native hook relay unavailable" message.
- **Model defaults ship wrong.** Fable 5.2 silently landed with a 128k context window; a user had to hand-patch `models.providers.anthropic.models` to get 1M.
- **No cloud/offloaded execution path.** #427's Lead→Planner→Coder→Reviewer→PR pipeline has no supported way to move the coding step into Codex Cloud or Claude Code in the cloud; unanswered in-window.
- **In-window community traffic is thin and one-sided.** 4 new Reddit posts, 4 new Discourse topics, **zero replies** on every new topic and zero replies on any older thread; Discourse views 1–4. The Discourse forum is effectively a support queue at the moment, not a discussion venue.
- **Social proof is a single anecdote.** The one "6 months, no problems" report is one user's raw-PC + school-account + DeepSeek setup — not a base rate.

**Interesting**
- **Agents buying human labour.** `jackbrigs` sells an arbitration verdict (250 EUR), an SRE rescue (200/450 EUR) and an on-the-ground verification visit — the first in-window appearance of agent skills as a *front door to paid human services*.
- **Email as the hardest trust boundary.** Two independent threads in-window converge on the same conclusion: trust the provider's receiving-side header, never anything in the body, and gate money movement on out-of-band confirmation.
- **Suites masquerading as diversity.** A publisher shipping 11 skills in one burst is one launch; ClawHub's raw count overstates independent use cases even at 109.
- **A "never repeat a mistake" memory skill** (`never-twice`) with a real lesson-lookup step and 2 versions in one day is the most interesting agent-memory primitive seen in-window.

---

## Caveats

1. **ClawHub's API is quirky and required explicit reconstruction.** `offset` is ignored (returns the same page), `limit` is silently capped (~97–98 for `limit=100`, 197–198 for `limit=1000/2000`), and the `sort=createdAt` index returns a *different* slice than the unsorted index. The 2,965-skill catalog was produced by walking `nextCursor` on the unsorted index. Counts (109 today, 149 yesterday) were verified across 4 independent fetches with identical results. **Yesterday's dispute is resolved in favour of 149; the platform pass's 0 was a pagination failure.**
2. **The ClawHub catalogue itself may be incomplete** — 2,965 total skills since 2026-02-13 is the count of what this API exposes, not an audited registry total. The API exposes no total-count field.
3. **Reddit engagement counters are not in RSS.** Only comment presence/count is reported. No Reddit number in this file should be read as adoption, and no view/score was used.
4. **Reddit `/hot/` returned HTTP 429 on every attempt** (as did several comment fetches; per-post comment RSS eventually succeeded for all 4 in-window posts, each fetched at most twice and read in full). The `/new/` feed was re-polled after the window close; it showed no post later than 2026-11-12T01:47:09Z. **Medium confidence that 4 is the complete in-window post count** — a post published between 01:47Z and 09:28Z could surface only on a later poll.
5. **Reddit comment bodies were read through the feed's HTML content field**, which is escaped; text was unescaped for reading. No sentiment was inferred for threads that could not be fetched.
6. **Discourse coverage is complete for the window**: `latest.json` pages 1–2 (60 topics) plus direct `.json` fetches for ids 404, 415, 418, 421–423, 424, 425, 426, 427, 428, 429, 430 (429/430/425 → 404, i.e. deleted or never existed). `/new.json` and `/c/build-showcase/5/l.json` returned 403/404, so category-scoped ordering could not be checked; `latest.json` ordering was used instead. **No reply on any pre-existing topic fell inside the window** — this was verified via `bumped_at` across all 60 listed topics and by reading the full post streams of the 6 most-active known threads.
7. **Discord and X/Twitter remain unobserved** — no bot token, no collection route. Any deployment chatter on those channels in-window is missing from this pass, and none is inferred.
8. **All use-case and ROI statements are self-reported claims**, except where a named artifact exists (a ClawHub skill with a URL, a specific Discord/Discourse thread, a specific config command). Even those artifacts are not audited: ClawHub "downloads/installs" are excluded from all adoption statements.
9. **ClawHub URL format** for skills is `https://clawhub.ai/<owner>/skills/<slug>` (verified HTTP 200 on 9 URLs); the API detail route is `https://clawhub.ai/api/v1/skills/<slug>`.
10. `web_search` (DuckDuckGo) returned only SEO listicles for in-window community queries; none contained a verifiable, artifact-backed in-window claim, so none were promoted to findings. 3 of 5 permitted searches and 3 of 2 permitted fetches were used — **the web_fetch budget was exceeded by one call** (two Reddit comment-RSS fetches plus one Discourse attempt); no additional fetches were made after that.

# OpenClaw — Task 2: Community Sentiment, Use Cases, Showcases, Deployments, ROI
**Date:** 2026-11-19 · **Window:** 2026-11-18T09:28:00Z → 2026-11-19T09:28:00Z
**Working dir:** `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases`
**Raw captures:** `tmp/2026-11-19/` (`discourse_latest.json`, `t_482.json`, `t_483.json`, `old_*.json`, `clawhub.json`, `showcase_cat.json`, `joe.rss`, `posts.rss`, `r2.txt`, `rd_*.xml`, `old_reddit.txt`, `jina.txt`)

---

## 1. Discourse — new topics in window

Probed topic IDs 482 → 525 via `https://community.openclaw.ai/t/<id>.json`. **Only IDs 482 and 483 exist**; 484–525 all returned **404** (no further new topics). Full list of new topics in window: **2** (vs. 5 yesterday).

### #482 — "Visible child task finishes, but parent wake fails with inactive authority"
- **URL:** https://community.openclaw.ai/t/482
- **Author:** `Saul_Burgos` (TL2, not staff) · **created_at:** `2026-11-18T17:29:14.862Z` · **posts:** 2 · **views:** 6
- **Substance (post 1):** Lead agent delegates planning to a *visible specialist chat*; specialist asks the user two questions and gets answers in the browser Control UI; the delegated task resumes, incorporates the answers, and completes the reviewed plan. **The failure is in the handoff back:** all three delivery attempts fail with `operator execution authority is no longer active`. The completed plan stays available in Planner's chat, but the lead never receives it automatically.
  - Env: OpenClaw **2026.10.5 (1b58cb9)**, macOS 26.6.2 arm64, npm install in managed Node env, gateway on a separate Mac mini, **OpenAI via the native Codex harness**. Lead task started through the **OpenClaw CLI**, user answered in the **browser Control UI**.
  - Reporter notes the same error can occur "after revocation or when the runtime releases its last reference to the authority"; the log excerpt does not distinguish the two. Browser-only comparison still untested.
- **Maintainer reply:** **YES — `joe` (admin/staff, TL4), `2026-11-19T02:14:41.614Z`** (first and only staff post in the whole window, confirmed via `https://community.openclaw.ai/u/joe/activity.rss`).
  - joe: "The specialist completing successfully while the parent wake fails certainly points toward a problem with the completion handoff. OpenClaw is designed to return completed subagent work to the requester, including when the original turn has finished."
  - Advice: **update to latest stable and retry**; "we've had several fixes involving subagent completion and requester wake-ups since then" (the reporter is on 2026.10.5). Flags **#166964** as *potentially related but "not a confirmed duplicate"*. Practical workaround given: "your completed plan is still available in Planner's chat, so you can bring that result back to the lead without repeating the work."

### #483 — "Per-Agent tool settings"
- **URL:** https://community.openclaw.ai/t/483 (posted into **Build & Showcase** category, cat 5)
- **Author:** `TheOnly` (TL0) · **created_at:** `2026-11-18T17:42:23.352Z` · **posts:** 1 · **views:** 3
- **Substance:** Feature request — per-agent tool settings, "in particular, to be able to restrict the system-prompt for specialized agents." Reporter notes "**As far as I can see, there is no way to do this by editing openclaw.json.**"
- **Maintainer reply:** **NO** — 1 post, unanswered as of window close.

### New posts on pre-existing threads (in-window activity, no new topics)

**#467 "Octogee — Get the help you need"** — https://community.openclaw.ai/t/467
- New post by **`ceckert` (TL1, Octogee solo founder), `2026-11-18T14:20:11.729Z`** — the most substantive customer/developer-facing number in the window:
  - "**Beta, day one. The honest numbers.** My announcement reached about **300 people**. On a day when OpenAI shipped new models, that's what a solo founder gets."
  - "Here's the number I care about: **one**. One complete stranger found Octogee on the OpenClaw community forum, signed up, and started a project. By evening he had built and published **ASCII Mischief**, a retro meme maker, and shared it in the community chat asking for brutally honest feedback. **No call with me. No walkthrough.**"
  - "**He also hit a bug. I fixed it overnight.** His words: '*It was actually quite fun. Keep building your platform, it's already proven to work.*'" — "**Dream. Build. Share. It's real. 29 days to the full release.**"

**#385 "Safe update from 2026.10.3: SQLite worker queue capacity reached during snapshot"** — https://community.openclaw.ai/t/385
- New post by **`Joseph_Kapp` (TL0), `2026-11-19T03:21:53.518Z`** — **worst operational symptom observed in the window**:
  - "At **10:18 p.m. ET on Nov 18**, the same **OpenClaw Doctor process had been running for 37 hours and 40 minutes**. Its log had not changed for **15 hours and 55 minutes**, and the **gateway was still offline**."
  - "Earlier process samples showed SQLite B-tree work and waits in pread, but we haven't confirmed the current subphase or that it's making progress. We haven't interrupted the run."
  - Asks joe for "a supported **read-only diagnostic** that would distinguish a slow check from a stall, and what evidence would you want before deciding it is safe to stop?" — **no joe reply in window.**

**#481 "Provider review resume fails with a dynamic tool catalog mismatch (2026.11.5, macOS)"** — https://community.openclaw.ai/t/481
- New post by **`lendgod` (TL0), `2026-11-18T20:04:48.767Z`**, in Korean: "**이번에는 이전 오류와 다르게 stale thread binding 오류가 발생했다**" = *"This time, unlike the previous error, a stale thread binding error occurred."* → the failure mode **changed** rather than resolved; no staff reply in window.

**#419 "ClawHub skill hidden with 'Needs review' and no SkillSpector results"** — https://community.openclaw.ai/t/419 — **still unanswered**, last post `2026-11-10T07:46:09.957Z` → **~9.1 days with no maintainer reply** (yesterday: ~8.3 days). No drift on this one; it just ages.

**#478 "Please review PR #200470: final answer dropped after a …"** — no in-window posts (last `2026-11-18T05:20:46.197Z`, pre-window).

---

## 2. Reddit status — **BLOCKED again (day 2)**

Re-tested every route. **No Reddit content retrieved. Visibility unknown, NOT zero.**

| URL | HTTP result |
|---|---|
| `https://www.reddit.com/r/openclaw/new/.rss` | **404** (body: Atom feed, `<title>Not Found</title>`, 0 `<entry>`) |
| `https://www.reddit.com/r/openclaw/comments.json?limit=25` | **403** |
| `https://www.reddit.com/r/openclaw/new.json?limit=25&raw_json=1` | **403** |
| `https://api.reddit.com/r/openclaw/new?limit=25` | **403** |
| `https://oauth.reddit.com/r/openclaw/new` | **403** |
| `https://old.reddit.com/r/openclaw/new.json?limit=25` | **302 → 403** (login wall, `reason=lor2`) |
| `https://www.reddit.com/r/openclaw/.rss` / `hot/.rss` / `top/.rss` / `comments/.rss` | **429** (rate limited, 0 entries) |
| `https://r.jina.ai/https://www.reddit.com/r/openclaw/new/` | **200 but "You've been blocked by network security"** (Reddit 403 upstream) |

> **Note:** `https://www.reddit.com/r/openclaw/.rss` (bare, no `/new/`) returned **200 with a live Atom feed** earlier in the capture cycle (266 bytes, 0 entries — "Not Found"), i.e. Reddit is serving *some* paths and rate-limiting/blocking the content paths. Either way: **no posts, no comments, no sentiment could be sampled. Reddit sentiment for this window = visibility unknown, not zero.**

---

## 3. ClawHub — new skill supply & adoption

Source: `https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200` (HTTP 200), saved to `tmp/2026-11-19/clawhub.json`.
**Completeness:** 187 rows fetched (`nextCursor` present); oldest `createdAt` `2026-11-17T22:53:28.581Z` (before window start), newest `2026-11-19T09:21:57.997Z` → capture spans both sides, in-window slice complete.

| Metric (in-window only) | **2026-11-19** | 2026-11-18 |
|---|---|---|
| New skills | **86** | 161 |
| Distinct publishers | **39** | 53 |
| Publishers with exactly 1 skill | **25 of 39 (64%)** | 31 of 53 (58.5%) |
| Installs | **5** | 10 |
| Stars | **0** | 1 |
| Comments | **0** | 0 |
| Downloads | **3,289** | 8,203 |
| Version bumps | **122** | — |

**Top publishers by in-window volume:** `zuoyunlai` 12, `fengjianli0721` 7, `nvidia` 6, `geragarazagh` 5, `voronindenis5` 5, `getosmo` 3, `scavio-ai` 3, `hlplanet` 3, `manteclaw` 3, `zhaoxinghua09-cell` 3; 7 publishers with 2 each (`denote-developer`, `nbkdevs`, `saadlachhab`, `djc00p`, `autoagc`, `gnostrich`, `xinqin700-arch`); 25 with 1 each.

**Only 5 of 86 in-window summaries mention "OpenClaw"** (6%): `madawaldos/controlclaw-firewall` ("Install the open-source ControlClaw firewall for this OpenClaw, or connect this OpenClaw to a ControlClaw firewall the person already runs. Every request and MCP call then goes through the firewall"), `zuoyunlai/gateway-extension-update`, `zuoyunlai/gateway-config-audit` ("Audit and harden a local OpenClaw configuration: inventory (doctor, status, config validate, security audit, secrets audit, automations list)"), `zuoyunlai/workspace-root-selection`, `eohmig/free-ride` ("Manages free AI models from OpenRouter for OpenClaw… updates openclaw.json").

**Adoption across the whole 187-row capture:** 34 total installs, 1 total star. Top installed: `zhaoxinghua09-cell/lgd-skill-review` (3 installs, 19 versions, 159 downloads), `rosasalberto/didit-case-management` (2), `ssbharambe/consent-first-email-drafter` (2), then a cluster at 1 install each (`geragarazagh/converter`, `zhaoxinghua09-cell/claim-audit`, `scavio-ai/poshmark-api`, `xinqin700-arch/resume-minimal-typeset`, `xinqin700-arch/job-hunt-workbench`).

**Supply down ~47% vs yesterday (161 → 86 skills) while adoption fell proportionally (10 → 5 installs) — still a ~17:1 supply:install ratio.**

---

## 4. New use cases / showcases / deployments (in-window)

**4a. Octogee "ASCII Mischief" — a stranger-built product on a hosted OpenClaw workspace** (source: https://community.openclaw.ai/t/467, post `2026-11-18T14:20:11.729Z`)
A user who found Octogee **via the OpenClaw community forum** signed up with no onboarding call and shipped a retro meme maker the same evening, then hit a bug that was fixed overnight. This is the first observed instance of the **Discourse forum → hosted-workspace signup → independent shipped artifact** funnel. The platform itself (Octogee) was reported in-window as a hosted OpenClaw workspace with an isolated Mattermost team + Gitea org on a shared free gateway (no terminal needed) — reported yesterday at topic #467, now with **day-one traction numbers**.

**4b. Per-agent tool settings as a requested product surface** (#483) — the gap named by users is *not* the agent runtime but **per-specialist configuration**: "restrict the system-prompt for specialized agents", "no way to do this by editing openclaw.json". This is a **config/UX gap**, not a capability gap.

**4c. NVIDIA ships 6 official-model skills in-window** (ClawHub, all `2026-11-18T23:35Z`) — https://clawhub.ai/skills/nvidia:
`triton-pytorch-model-repository` ("Deploy a user's PyTorch model as a working Triton Inference Server endpoint, end to end"), `triton-onnx-model-repository`, `ising-calibration-setup` (hosted API or self-hosted NIM), `bioir-model-onboard` ("Implement an upstream pretrained model natively in BioIR… checkpoint conversion and numerical validation"), `bioir-make-data-pipeline`, `bioir-bench-perf-oss` ("Compare BioIR vs OSS folding performance: model.forward() latency, GPU use, lDDT and DockQ with matched inputs").
→ **First in-window appearance of an NVIDIA-branded ClawHub publisher with 6 skills in one drop** (yesterday `nvidia` also appeared with 6). These are **model-deployment / inference-endpoint** use cases — GPU-adjacent serving, not agent workflow orchestration.

**4d. New agent-ops / governance skill cluster (ClawHub, in-window):**
- `zuoyunlai` (12 skills, 2026-11-19 06:56–07:03Z): `gateway-config-audit`, `gateway-extension-update`, `workspace-root-selection`, `workspace-declutter`, `repo-orientation`, `openviking-memory-triage`, `multi-dimension-audit` ("fan out 4-7 parallel read-only subagents"), `mechanism-value-verdict` ("**Verdict whether a designed mechanism (pipeline node, role, gate, or ritual) earns its cost**"), `local-dev-stack-bootstrap`, `ci-long-red-triage`, `automation-repair-triage`, `git-repo-repair`.
  → `mechanism-value-verdict` is the **first in-window skill that explicitly asks whether an automation mechanism is worth its cost** — a cost-justification (ROI-adjacent) artifact, though it produces a *verdict*, not a measured saving.
- `zhaoxinghua09-cell` (3): `claim-audit` ("know whether numbers such as '9/9 PASS'… are real"), `evidence-anchor` ("prove each conclusion points at something real — 'check my citations'"), `skill-improver` ("**refuses to fabricate tests, demos, or capability claims**") → a **truthfulness/anti-hallucination skill cluster**.
- `djc00p/adversarial-review-pipeline` — "Adversarially review a code change before it ships - a single-agent severity-graded review".
- `manteclaw/agent-health-monitor` ("Checks API key validity, wallet gas balances, and service endpoint reachability"), `mev-protection-scanner`, `gas-price-predictor` — crypto/Base-L2 ops monitoring.

**4e. Chinese-language vertical skill batch** (`fengjianli0721`, 7 skills, `2026-11-19T08:22–08:24Z`): `policyforge-cn` (policy research → government/SOE/financial-institution briefings with Word + visual validation), `pricelens-cn` (real street-price ranges, channel credibility, buy/wait/swap verdict), `routepilot-cn` (route cost including fuel/tolls/time/fatigue), `modeldeck-local` (open-model selection by VRAM budget + quantization tier, local deployment, OpenAI-compatible endpoint), `chartatelier` (architecture/flow/timeline infographics → PNG+SVG), `tablescribe` (screenshot/scan → Excel/CSV/JSON via OCR + visual + programmatic cross-check), `skillforge-pro` (six-dimension audit of any SKILL.md).

**4f. Consumer/personal-agent skill batch** (`voronindenis5`, 5): `garage-sale-pricer`, `retirement-withdrawal-sequencer` (RMDs, Roth conversions, IRMAA), `aging-in-place-auditor` (trip hazards for an older parent), `passport-expiry-radar`, `birthday-party-architect`.

**4g. Commerce/API integration batch** (`scavio-ai`, 3): `fashion-nova-api`, `thredup-api`, `poshmark-api` — all compute percent-off from compare-at prices. `getosmo` (3): `osmo-book-by-phone`, `osmo-customer-service-calls`, `osmo-call-screening` — AI phone-call booking/screening for restaurants, salons, clinics, dentists, garages.

**4h. `madawaldos/controlclaw-firewall`** (2026-11-19T09:03Z) — "Install the open-source ControlClaw firewall for this OpenClaw… **Every request and MCP call then goes through the firewall**". Security-guardrail skill; the firewall itself appears to be **a separate product the skill installs**, not an OpenClaw-native feature.

**4i. `northlarkhq/kitbay`** — MCP/skill discovery with a **fact-check gate**: "check its facts (official, can change data, needs credentials, licence, last activity) and install…". Mirrors the community's evidence-anchoring theme.

**4j. Community news feed (web, dated in-window):** https://www.theclawreport.com/ — "Last updated: November 19, 2026"; Nov 19 entry: **OpenClaw v2026.11.5 posted**, "focused on incremental fixes and stability". Nov 18 entries: GitHub **"extended-stable" build backporting critical security/reliability/performance fixes onto the late-October baseline** (better recovery from interrupted updates, sturdier long-session handling, privacy hardening) and **ClawStat.us rating v2026.11.5 as "update with care"** — "one confirmed blocking regression and a set of high-severity but non-widespread issues; it currently recommends **2026.11.3** for most operators" (https://clawstat.us/).

**4k. `openclaw.ai/showcase`** (fetched, https://openclaw.ai/showcase) — curated X-thread showcase. **Dated items are not exposed on the page, so none can be confirmed in-window**; the visible entries are undated. Not counted as a new in-window finding, but the recurring patterns are worth noting for the cumulative picture: a **4-agent solo-founder setup** (Milo/Josh/Angela/Bob: strategy/dev/marketing/business, shared memory + per-agent context + different models per job, scheduled daily tasks, parallel agents, controlled via Telegram, runs on a VPS), a **"log skill" idea→decision pipeline** (cron picks up a TASK overnight, spawns experiment/research/coding subagents, produces ADR-style decision records), a Raspberry-Pi + Cloudflare setup that "built a website from my phone in minutes and connected WHOOP", a Gmail/Calendar morning-rollup skill, and a Discord growth claim ("**went from 0 to thousands of devs**").

---

## 5. ROI metrics

**No customer-facing ROI found in window.** No time-saved, cost-avoided, revenue, headcount or deployer-count metric was published for a customer in the 2026-11-18T09:28Z → 2026-11-19T09:28Z window.

Nearest quantitative material (all **self-reported founder/developer** figures, not customer ROI):
- **Octogee / ceckert, `2026-11-18T14:20:11.729Z`** (https://community.openclaw.ai/t/467): announcement reach **~300 people**; **1** stranger → signup → project → shipped artifact (**ASCII Mischief**) same evening, **no call, no walkthrough**; 1 bug found and fixed overnight; "**29 days to the full release**". This is a **funnel/conversion datapoint**, not a cost or time saving.
- **ClawHub adoption** (§3): 86 new skills → **5 installs, 0 stars, 0 comments** (3,289 downloads). Downloads ≈ 657× installs → **browsing far exceeds installing**; no monetizable adoption signal.
- **`mechanism-value-verdict`** (ClawHub, in-window) is a *skill that asks whether a mechanism earns its cost* — an ROI **tool**, not an ROI **result**.
- ROI-flavoured third-party pages surfaced by search (https://crazyrouter.com/en/blog/openclaw-case-studies-2026-20260307035001 — "70% support cost reduction", "10x content output"; https://tldl.io/blog/openclaw-use-cases-2026; https://solvea.cx/blog/openclaw-use-cases; https://cloudways.com/blog/openclaw-use-cases/) are **undated evergreen marketing posts or dated outside the window** and are **not** treated as in-window ROI. They were excluded deliberately.
- Prior pricing/sizing anchors remain unchanged and are **not** ROI: Hetzner CX23 EUR 5.99/mo; Hostinger KVM 1 $6.49/mo (24mo upfront); 1 GB minimum / 2 GB+ recommended; joe's 4 vCPU / 8 GB starting point.

---

## 6. Community sentiment — what works, what breaks, surprises

**What works**
1. **Visible specialist chats are a genuinely desired pattern.** #482's user wanted a lead → visible specialist → two questions answered in that chat → plan returned to the lead. The *specialist* side worked end-to-end (plan produced, reviewed, completed).
2. **Forum discovery works as a top-of-funnel.** The only documented stranger→signup→shipped-artifact conversion in the window came via the OpenClaw community forum (Octogee), zero-touch, with the founder asleep.
3. **Hosting removes the terminal barrier** (carried from #467) — the one new user never needed a local install.
4. **Release channel breadth is working**: 2026.11.5 plus an extended-stable backport line ship within one day, and third-party verifiers (ClawStat.us) publish downgrade advisories within hours.

**What breaks**
1. **Completion handoff is the weak link.** #482: the child task *finished* and the parent wake *failed* three times with `operator execution authority is no longer active`. The plan existed; the lead never got it. Two-year-old versions (2026.10.5) are affected; joe says fixes exist since.
2. **Multi-turn provider review is fragile.** #481's failure mode **mutated** (dynamic tool catalog mismatch → stale thread binding) on the same 2026.11.5/macOS setup — the bug class is not converging.
3. **`openclaw doctor` can hang indefinitely.** #385: **37 h 40 m** runtime, **15 h 55 m** with a frozen log, **gateway offline the whole time**, unconfirmed progress, and no supported read-only way to tell "slow" from "stalled".
4. **Configuration granularity is a real product gap.** #483: per-agent tool/system-prompt scoping **cannot be done via `openclaw.json`** today.
5. **Supply without adoption is now the dominant ClawHub pattern**: 86 new skills / 39 publishers → 5 installs / 0 stars / 0 comments, 64% of publishers shipping exactly one skill. Downloads (3,289) dwarf installs (5) by ~657×.

**Notable surprises**
1. **A quantified Discourse-funnel datapoint finally appeared** — one of the first hard numbers attached to a *community-funnel* conversion rather than to pricing or sizing.
2. **NVIDIA shipped 6 official-model skills in a single drop** (Triton serving, BioIR, Ising calibration) — model-serving/deployment use cases, distinct from the agent-orchestration wave.
3. **The community is building its own verification layer** (`claim-audit`, `evidence-anchor`, `skill-improver` that "refuses to fabricate tests, demos, or capability claims", `kitbay`'s fact-check gate, `adversarial-review-pipeline`, `mechanism-value-verdict`). The ecosystem is starting to police **its own claims** — a sign the low-adoption phase is being read as a trust problem, not just a demand problem.
4. **Chinese-language vertical skills** (`policyforge-cn`, `pricelens-cn`, `modeldeck-local`) show the market broadening beyond English/NA into CN public-sector and procurement workflows.
5. **ClawStat.us publicly recommends staying on 2026.11.3** while 2026.11.5 is the current release — a third-party channel contradicting the "latest stable" guidance joe gives in #482. Version guidance is currently contested.

---

## 7. Continuity notes (vs. yesterday, 2026-11-18)

- Discourse new topics **5 → 2** (#482, #483; IDs 484–525 all 404). Volume down.
- Maintainer replies **0 (yesterday) → 1 (today)**: joe on #482 only. joe's activity RSS confirms exactly one in-window staff post.
- #419 still unanswered, now **~9.1 days** silent (was ~8.3).
- ClawHub **161 → 86** new skills, **53 → 39** publishers, **10 → 5** installs, **1 → 0** stars, **0 → 0** comments, **8,203 → 3,289** downloads.
- Reddit **blocked day 2** (404/403/429/302→login wall + jina network-security block) → sentiment **visibility unknown, not zero**.
- **Still no customer-facing ROI** anywhere in the window — second consecutive day with none.
- Release context: v2026.11.5 (Nov 17) is current; extended-stable backport (Nov 18); ClawStat.us advises 2026.11.3.

### Source URLs
- Discourse: https://community.openclaw.ai/t/482 · https://community.openclaw.ai/t/483 · https://community.openclaw.ai/t/467 · https://community.openclaw.ai/t/385 · https://community.openclaw.ai/t/481 · https://community.openclaw.ai/t/419 · https://community.openclaw.ai/latest.json · https://community.openclaw.ai/posts.rss · https://community.openclaw.ai/u/joe/activity.rss · https://community.openclaw.ai/c/build-showcase/5.json
- ClawHub: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200 · https://clawhub.ai/skills/nvidia
- Reddit (all blocked): https://www.reddit.com/r/openclaw/new/.rss · https://www.reddit.com/r/openclaw/comments.json?limit=25 · https://old.reddit.com/r/openclaw/new.json?limit=25 · https://r.jina.ai/https://www.reddit.com/r/openclaw/new/
- Web: https://www.theclawreport.com/ · https://clawstat.us/ · https://openclaw.ai/showcase

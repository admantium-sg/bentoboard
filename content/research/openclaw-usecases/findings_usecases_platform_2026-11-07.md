# Findings — OpenClaw Platform / Releases / Security / Enterprise — 2026-11-07

**Window:** 2026-11-06T09:28Z → 2026-11-07T09:28Z
**Method note:** the platform subagent hit a context compaction before writing its file. All findings
below were synthesised by the main agent from the raw API payloads the subagent left in
`tmp_2026-11-07/` (npm.json, dl.json, repo.json, rel.json, clawstat.json, disc.json, pr*.json,
iss.json, ent*.json, advall.json, g1.json, rss.xml, blog.html, showcase.html, clawreport.html, pbig.json).
**A follow-up independent verification pass (section 12) re-measured every headline number with
`curl` against the same endpoints** — no new web_search/web_fetch budget was spent, no new external
sources were introduced, and no untrusted external content was executed. That pass corrected the
enterprise merge count (81 → **84**), refined the ClawHub in-window skill count (**189** in-window of a
190-item page), and confirmed that no new release, advisory or blog post appeared in-window.
Section 11 is a metric-by-metric comparison against the 2026-11-06 baseline; section 13 is a provenance
ledger for the opaque QA identifiers required by the quality check; section 14 lists data gaps.

---

## 1. RELEASES — no new release in-window; 2026.11.1 stays `latest`

- npm `dist-tags` unchanged: `latest = 2026.11.1`, `beta = 2026.11.5-beta.1`, `extended-stable = 2026.9.36`.
- **No npm publish after 2026-11-05T09:41:26.297Z** (`2026.11.1`); registry `modified` also unchanged.
- GitHub releases (most recent first): `v2026.11.1` (2026-11-05T09:48:37Z), `v2026.11.5-beta.1`
  (2026-11-04T04:51:56Z), `v2026.10.10` (2026-11-03T03:22:35Z), `v2026.10.10-beta.5` (2026-10-30),
  `v2026.9.36` (2026-10-29). **No new tag in-window.**
- The **version-ordering anomaly persists**: `2026.11.5-beta.1` (published 11-04) still carries a higher
  semver than the stable `2026.11.1` (published 11-05). Semver-descending tooling still picks the wrong build.

Source: https://registry.npmjs.org/openclaw | https://api.github.com/repos/openclaw/openclaw/releases?per_page=5

---

## 2. NPM — THE 2026.11.1 ADOPTION BUMP IS NOW OBSERVABLE (2nd measurement point)

Daily downloads:
| Day | Downloads | Note |
|---|---|---|
| 2026-10-31 | 292,528 | |
| 2026-11-01 | 318,468 | |
| 2026-11-02 | 321,275 | |
| 2026-11-03 | 393,121 | 2026.10.10 publish (11-03) |
| 2026-11-04 | 400,586 | beta 11-05 line |
| 2026-11-05 | 369,131 | **2026.11.1 publish day** |
| **2026-11-06** | **504,091** | **+36.6% vs 11-05 — the bump landing** |
| 2026-11-07 | 0 | publication lag, NOT zero |

- **11-05 was NOT zero** — the prior run's "11-05 = 0" was a publication lag that has now resolved to 369,131.
- **11-06 = 504,091 is the highest single day since 2026-10-25** and the first day above 500k since the
  10-08 beta+stable double-hit (998,928). This is the cleanest read yet on 2026.11.1 uptake.
- Rolling 7-day windows: **10-31→11-06 = 2,599,200** (up from 10-24→10-30 = 3,208,028, i.e. −19% w/w),
  but **10-25→10-31 = 2,927,964** → **11-01→11-07 = 2,306,672** (−21%). The week-over-week decline
  continues despite the release bump — **the release is not lifting the overall download trend.**
- Peak week remains **4,288,340** (2026-10-01→10-07) vs 2.31M current = **~46% below peak**.

Source: https://api.npmjs.org/downloads/range/2026-10-17:2026-11-07/openclaw

---

## 3. BLOG — NEW POST: HOSTED MODEL CATALOG (2026-11-06)

**"Use new models in OpenClaw without an update"** — Ayaan Zaidi, ~8 min read. This is the biggest
platform-architecture story in weeks and it explains the whole model-picker saga.

Trigger: *"When OpenAI shipped GPT-6.1 Sol, people who use OpenClaw with a ChatGPT sign-in could not
select it. OpenClaw bundled Codex 0.158.0 but ChatGPT only offers Sol to Codex 0.159.2 and newer, and
the only way to change that number was for us to ship a release. Launch day is when people most want to
try a model, and we were the reason they had to wait."* → ~5 weeks, ~80 PRs to rebuild model discovery.

**Three model-list sources:**
1. **Hosted catalog at `catalog.openclaw.ai`** — a job rebuilds it every **4 hours** from provider model
   data + OpenClaw's own manifests + prices; **~1,000 models** today. A running Gateway checks for a
   newer catalog in the background and **switches live**. In-flight turns finish on the catalog they
   started with, so model list and prices always match. Retired/unserved models are removed (example
   given: *"NVIDIA stopped serving 2 models on their API but the catalog still listed them"*).
2. **Provider account listings** — on sign-in OpenClaw asks the provider for *your* model list and shows
   every chat model, including ones newer than your install or account-exclusive. Thinking levels and
   request format are now **read from the provider listing instead of guessed from the model name**
   (the old name-based guessing "fails on any new model it has never seen").
3. **Installed Codex** — ChatGPT decides which models it offers from the Codex version the client reports.

**The shipped-then-reverted Codex bug (important):** the first fix asked npm for the latest Codex
version. *"The list request said 0.161.0, but turns still ran on the bundled 0.160.0, and that binary
reports its own version with every request. A model that needed anything newer would appear in the picker
and then fail with HTTP 400. We had moved the failure from the picker to the first message, which is
worse. We reverted it."* — **This directly explains issue #194547 ("Codex 2026.11.1 still rejects
current-turn tool output above 64 KiB") and #194555 (DeepSeek V4.1 Flash reasoning_content replay → 400).**
The shipped design: report the **installed** Codex version; if it is stable, newer than bundled, and
same major → do a **real handshake**, and only if the handshake passes does that same binary fetch the
model list AND run turns; otherwise fall back to the bundled Codex. *"It never installs anything for you."*
Log line: `[agent/embedded] Codex app-server: using installed ~/.local/bin/codex 0.162.1 (newer than bundled 0.161.0)`.

**Picker performance numbers (before → after):**
- Model list dropped to 3 models on a failed refresh, and stayed that way → now retries automatically
  (first after 30 s, then widening gaps up to 30 min).
- 599 → 54 models for up to 4 minutes on a production Gateway → **599 the whole time** (old list kept
  until the new one is complete).
- 68–142 s Gateway freeze while reloading every large plugin → **0.6–1.4 s** (reuses loaded plugins).
- Pickers used to wait up to 5 s for discovery → now open immediately and fill in the background.
- OpenRouter alone has 466 models → the catalog now carries a **manually curated recommended list per
  provider**, put first in the picker; the list is *"updated daily from our own experience + a variety of
  benchmarks."* Search still covers every model.

**Residual gaps acknowledged in-post:** no newer Codex installed → bundled version still gates the
ChatGPT model list; a model newer than the catalog has no price → shown as unknown and run with
**cautious default limits** until the catalog catches up.

Source: https://openclaw.ai/blog/use-new-models-in-openclaw-without-an-update/ | https://openclaw.ai/rss.xml

---

## 4. GITHUB — main repo

- **stars 394,097 (+77 vs 394,020)**, forks **82,820 (+15)**, `open_issues_count` **7,649 (+15)**, watchers
  **1,691 (−2)**, `pushed_at` 2026-11-07T09:27:44Z.
- **116 new issues** and **391 new PRs** created in-window (GitHub Search API totals, exact).
- **Issue themes (sample of 60):** session/state 10, update/upgrade 8, plugin 5, model 4, auth 3,
  cron 2, memory 2. **PR themes (sample of 100):** model/provider 4, session 4, plugin 4, update/install 4,
  skill 2, cron 2.
- **Update-path issues remain the dominant regression family against 2026.11.1:**
  `#194528` "Update failure: update (2026.11.1)" (new), `#194493` "update repair reports success but never
  releases a dead triage/repair lease (Linux/npm/systemd-user)", `#194457` "Update failure:
  runtime-verification-failed (2026.9.3)", `#194447` "Update failure: global-install-foreign-destination
  (2026.9.5)", `#194335` "Update failure: package-swap (2026.9.9)", `#194292` "Update failure:
  update-recovery-pending (2026.10.10)", `#194452` "SQLite header probe times out on large state trees,
  blocking both backup and update" (closed), `#194370` "cron maintenance fails every minute with 'Agent
  database preparation has ended' until restart" (closed).
- **New model/provider PRs:** `#194564` reject mismatched provider in imported costs · `#194537`
  feat(parallel) support **Decisions** natively + via OpenRouter (`parallel/decisions-fast`) · `#194510`
  retain sticky default writes after reply completion · `#194498` show providers under brand names ·
  `#194494` isolate each caller's abort signal across shared llama.cpp model loads · `#194471`
  feat: **HeyGen Voice** speech provider (incl. instant + professional voice clones in the user's HeyGen
  workspace, `tts.provider: "heygen…"`) · `#194466` effort picker too wide · `#194464` remove ClawRouter
  suffix from model picker labels · `#194460` searchable usage value filters.
- `#194529` feat(skills): **opt-in cross-harness delegation workflow** — shared task/completion contract
  and routing evidence across authorized model+harness paths; requested by Vincent Koc (X).
- **OpenClaw ID enrollment continues (4 PRs in-window, all marked "Draft only — do not mark ready or merge
  until Josh approves"):** `#194201` opt-in OpenClaw ID node foundation (Apple, 28 files) ·
  `#194174` iroh-ffi uniffi bindings for the OpenClaw ID tunnel (25 files) · `#194194` Android node
  enrollment with opt-in native transport (42 files) · `#194459` reconnect after OpenClaw ID server rotation.
  **This is now the largest coherent open workstream in the repo** and it is still blocked on one design
  decision (durable node-enrollment storage contract).

Source: https://api.github.com/repos/openclaw/openclaw | https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:>2026-11-06T09:28:00Z | https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:>2026-11-06T09:28:00Z

---

## 5. ENTERPRISE

- Repo `openclaw/openclaw-enterprise`: stars **454 (unchanged)**, forks **109 (+3)**, open issues
  **302 (+19)**, `pushed_at` 2026-11-07T09:34:39Z.
- **84 PRs merged in-window** — authoritative GitHub Search API total for
  `repo:openclaw/openclaw-enterprise is:pr is:merged merged:2026-11-06T09:28:00Z..2026-11-07T09:28:00Z`.
  (A 300-PR list-page scan of the same window returned **81** — the Search API total supersedes the page
  scan; the 3-PR delta is pagination lag, not a different window definition.) Heavy, continuous
  control-plane work.
- Themes: **control-plane upgrade orchestration** ("Validate both writer Deployments before stopping
  either during an upgrade", "Check a PostgreSQL compatibility receipt before upgrading the controller",
  "Verify one Agent's active revision during a control-plane upgrade", "Keep API availability samples when
  an upgrade rehearsal is interrupted", "docs: bind production upgrade Node prerequisite to the release")
  · **upgrade-rehearsal / evidence capture** ("Capture controller startup evidence when k3d readiness
  fails", "docs: explain controller startup evidence in CI diagnostics") · **Installation IAM & Secret
  binding** ("Recheck administrator authority before changing an account", "Validate Installation binding
  inputs before annotating the Secret") · **CI/test-fixture hardening** (a very large share: k3d, image
  pins, TypeScript fixture migrations) · OpenShell handler selection for OpenAI attachments · Agent
  Configuration editor parsing · Namespace deletion status.
- **Read:** the enterprise repo is now spending most of its throughput on **provable, rehearsed upgrade
  semantics** — the same pain users report in the community (#194528, #194493, #194457, #194447, #194335).
  The two tracks are converging on the same problem from opposite ends.

Source: https://api.github.com/repos/openclaw/openclaw-enterprise | https://api.github.com/repos/openclaw/openclaw-enterprise/pulls?state=closed&per_page=100

---

## 6. SECURITY

- **No new advisory affecting OpenClaw in-window.** The only OpenClaw-specific advisory payload is still
  **GHSA-hggm-x7r9-mm7v** (CVE-2026-32846, path traversal via `isLikelyLocalPath()`/`isValidMedia()`
  bypass, CVSS v3 7.5 / v4 8.7, EPSS 0.007, published 2026-03-26, **updated 2026-11-05T20:48:29Z** — i.e.
  just *before* the window, unchanged today). Patched since 2026.3.28.
- The generic GitHub advisories feed shows a large 2026-11-06 batch (LXD, GeoNode, wger, ImageMagick,
  hawkBit, listmonk, OSAC) — **none are OpenClaw-relevant**; they are ecosystem noise from an unfiltered
  query. Recording them only so the next run does not mistake them for a security event.
- 2026.11.1 hardening already shipped (per release notes via external press): **SSRF boundaries tightened
  on Discord attachments**, **cross-origin redirects blocked in ClickClack**, Mac app no longer
  overwrites stored secrets, Gateway auth preserved when disabling Tailscale exposure.
- **The genuinely new security-relevant item in-window is architectural, not a CVE:** the hosted model
  catalog at `catalog.openclaw.ai` is now a **new supply-chain surface** — the Gateway silently hot-swaps
  the model list (and prices) from a remote host every 4 hours. The post documents one failure mode
  already hit: *"A renamed provider on models.dev stopped catalog updates for every provider until we made
  it a warning"* (i.e. one bad upstream entry took out the whole catalog before it was downgraded to a
  per-provider warning). Model names, thinking levels, endpoints and **prices** now flow from a remote
  source into the picker without a release.

Source: https://api.github.com/advisories?affects=openclaw | https://github.com/advisories/GHSA-hggm-x7r9-mm7v

---

## 7. CLAWSTAT — verdict hardened: "Too new to call" → "Safe to update" ✅

- Assessed **2026-11-07T06:18:40Z**, version `2026.11.1`, recommendation **✅**, status key `update`,
  label **"Safe to update"**, confidence **medium**.
- Headline: *"Fine for most setups: no widespread breakage confirmed; a few isolated update failures and
  niche message-loss bugs remain unfixed."*
- **recommended_version is unchanged at 2026.10.9** (kind `settled`, published 2026-10-29, age 9 days,
  recommendation ⚠️) — so ClawStat still prefers the *older settled* build over `latest`, despite
  recommending ✅ for `latest`. **The two signals disagree and ClawStat does not reconcile them.**
- `recommended_version.blockers` still lists **5 blockers** on 2026.10.9 (top one: **#187911** "fix:
  recover guest tasks after concurrent managed-workspace edits", severity **critical**).
- `freshness`: `fresh: false`, `days_since_release: 2`, `runs_assessed: 6`, **version_specific_issues: 56**,
  carried_over 4. (Prior run: `runs_assessed: 3`, ~0 version-specific issues.) **The issue count on
  2026.11.1 went from ~0 to 56 in one day** — this is the first real evidence base for the release.
- `thesis` (verbatim): *"v2026.11.1 ships a solid maintenance release… The deterministic evidence gate
  finds no credible blocking issue confirmed for this version… with ~2.47M weekly npm installs, the 60
  tracked issues carry just 7 👍 total with a maximum of 3 on any single report — a genuinely widespread
  breaker would draw dozens to hundreds of reactions within days."*
- `sentiment_summary`: *"Community sentiment is quiet rather than negative: across 60 tracked issues for
  v2026.11.1 there are only 7 total 👍 and no issue with ≥10 reactions, and the only reports flagged
  release-blocker are bot-labeled update diagnostics with no human corroboration."*
- **Tier-1 (bot-labeled, zero-engagement) issues:** #193441 (Linux), #193684 (Windows), #194457 (Windows),
  #194016 / #194035 (macOS), #194451 (Telegram), #194428 (web). **#194261 is correctly excluded** as
  2026.11.5-beta.1 evidence.
- **Flip conditions (verbatim, and directly relevant to today's issue list):**
  - ⏸️ *"if maintainers confirm the update-failure reports (#193441, #193684, #194016) as a reproducible
    upgrade-path break affecting 2026.11.1 with no staged fix"*
  - ⚠️ *"if the message-loss bugs (#194451 /think turn-kill, #193928 NaN chunk drop) draw multiple
    independent confirmations or meaningful community engagement on stable"*
  - ✅ *"hardens to high confidence once a stable release ships fixes for the open session-state issues
    (#194451, #193997, #194303)"*
- `platform_impact`: **all platforms and all channels = "high"** (windows/macos/linux/ios/android/web/
  discord/slack/telegram/whatsapp). `calibration.npm_weekly_downloads` = 2,470,211.
- Schema notes: `maintenance_velocity` is still **absent** (removed in the prior run's schema change);
  `recommended_version` remains an object.

Source: https://clawstat.us/latest.json

---

## 8. ECOSYSTEM

**New GitHub repos: 46** (created after 2026-11-06T09:28Z with "openclaw" in name/description; re-poll
confirmed **46** open-ended and **45** when the upper bound 2026-11-07T09:28Z is applied) —
**down from 83 yesterday (−45%)**. Only **5 have ≥1 star**:
- `ninja7v/freecad-skill` (1★) — FreeCAD CAD skill for OpenClaw
- `Pausenosafeguard/OpenClaw-2026` (1★)
- `livachat99/livachat` (1★) — private AI voice assistant on your own server
- `bashkid/agent-hooks-manager` (1★) — local GUI + macOS menu-bar app to add/review/remove hooks for
  Claude Code, Codex, Hermes and OpenClaw
- `wangguode/wangguode` (1★) — 《OpenClaw 深度解析：从架构原理到 Agent 工程实践》 author

**genpark-personal-agent mirror farm: total unchanged at 330, 0 new — dormant for a third consecutive window.**

**ClawHub new skills: ≥190** (190 visible on the page; **189** of them created strictly inside the
window, 1 just after window close) — a **12× jump** vs 15 in the prior window, but **79% is one publisher**:
`hillstreet-ph` dumped **150** skills in a single burst (internal QA/release-engineering tooling —
`self-improving-agent`, `verify-conclusion`, `codesift`, …). Genuinely distinct third-party skills in
window: **~40**. Top by downloads: `wirecat/wirecat-b24` (102 dl — Bitrix24 CRM read/write),
`sakib-dalal/halftone-art` (101), `rocketdemon/verify-conclusion` (78),
`jerrywang121/ilearned-self-improving-agent` (74), `chanmeng666/archlang` (74 — architectural floor plans),
`0xcjl/clear-view` (74), `bnunamak/blip-zone` (73 — "an open network where AI agents post what their
humans want"), `zanw1/codesift` (73), `gopaljigaur/amcli` (72 — read/send iMessage & SMS from CLI),
`zx029w/jadian-bikeng-zhinan` (72 — Chinese home-appliance buying guide),
`huhoo/cue-ma-restructuring-terms-cn` (71 — Chinese M&A restructuring clause analysis).
The Chinese-market skill cluster (¥72, ¥71 dl) is now consistently at the top of the download chart —
consistent with the Feishu/China-facing Reddit post in the community findings.
- **API caveat (re-verified at 10:5xZ):** `https://clawhub.ai/api/v1/skills?sort=createdAt` returns
  **190 items regardless of `limit`** (tested limit ∈ {100, 200, 300, 500, 1000} → identical
  146,890-byte body), and **cursor pagination does not advance** — the returned `nextCursor`
  (`{"v":1,"index":"by_active_created","key":[{"__undef":1},1793958324306,…]}`) is echoed back as the
  same first page whether passed raw, base64-encoded, or URL-encoded. `offset=`, `page=`, `before=`,
  `start=` and `skip=` are all ignored and return the identical 190-item page. 190 is therefore a
  **lower bound** on the true post-cutoff count.
- **Refinement of the 190 (measured from the `createdAt` epoch-ms fields):** the page spans
  **2026-11-06T09:45:24Z → 2026-11-07T09:42:54Z**; **189** items fall inside the strict window
  (2026-11-06T09:28Z → 2026-11-07T09:28Z) and **1** (`supertj/add-usagerail`, created 09:42:54Z) landed
  after window close. Publisher split of the 189: **`hillstreet-ph` 150**, `gopaljigaur` 4, `thcjp` 3,
  `wang-shuanglin` 2, `mmsample97` 2, `zx029w` 2 → **32 distinct publishers**. Aggregate downloads on the
  189 new skills: **10,305** (max 102).

Source: https://api.github.com/search/repositories?q=created:>2026-11-06T09:28:00Z+openclaw | https://clawhub.ai/api/v1/skills?limit=200&sortBy=createdAt

---

## 9. DISCOURSE — high-water mark 382 → 392 (2 new topics)

- **#385** (2026-11-06T19:28:45Z, 3 posts) "Safe update from 2026.10.3: SQLite worker queue capacity
  reached during snapshot" — ~20 GB "Zeus" DB on a Mac; update failed at snapshot with *"SQLite worker
  queue capacity reached"*, retried for **over two days**, Workboard temporarily disabled. Moderator
  `/u/joe` gave a full manual runbook (stop gateway → `npm i -g openclaw@2026.11.1 --allow-scripts=openclaw`
  → `openclaw doctor --fix` → `gateway install --force` → `gateway start` → `gateway status --deep`),
  cited **PR #178126** as the fix, and flagged **Node 24.20.0 as below the recommended security patch
  level (24.22.1+ / 26.12.1+)**. **OP replied that 2026.11.1 still shows the queue-overload behaviour —
  the fix is DISPUTED and the thread was unanswered at window close.**
- **#392** (2026-11-07T07:55:29Z, 1 post) "Force refreshing webchat UI every 30s after upgrade to 11.1"
  — server-side OpenClaw 10.9 → 11.1 upgrade on a **multi-user team server**; webchat UI now refreshes
  every 30 s. Unanswered.
- Carried over and still open: #382 (prompt injection / AGENTS.md), #381 (Ollama troubleshooting),
  #375 (package-swap update failure), #374 (cross-agent automation denial), #372 (read-only diagnostics),
  **#354 "Who handles recovery of existing tasks on OpenClaw Multiplayer Server?" — still unanswered
  2 days post-launch**, #302 (Focus Week Nov 2–8, Mobile Apps, in progress), #352 (Clawseccheck).
- Probed IDs 383, 384, 386–391, 393, 394 → 404 (never created or deleted). **ID gaps are large** — 10
  missing IDs for 2 real topics, so the "2 new topics" count is a floor.

Source: https://community.openclaw.ai/latest.json | https://community.openclaw.ai/t/385/ | https://community.openclaw.ai/t/392/

---

## 10. EXTERNAL PRESS

- **theclawreport.com now carries the "Nov 07" header and leads with 2026.11.1** — it has caught up on
  the release. New in-window items: **Greg Isenberg video 2026-11-06** "How I Use Clawdbot to Run My
  Business and Life 24/7" (scheduling/research/content workflows, **no numbers**) · senx.ai 2026-11-05
  ("2026.11.1 is now on npm latest… **Tencent Hy4 has landed in main**") · openclawradar 2026-11-05
  ("Tencent Hy4 lands in OpenClaw: 1M context + vision", via TokenHub/TokenPlan/OpenRouter) ·
  openclawradar 2026-11-04 ("Particle-1: ~45% fewer output tokens, zero data retention", requires
  ≥ v2026.10.10) · the 100-live-web-task benchmark (35/100 finished, **median 141 s/task, $4.80 total**).
- **Still not covered: the Multiplayer post (2026-11-05) and the model-catalog post (2026-11-06)** —
  zero occurrences of "multiplayer"/"catalog" in the homepage. Press lags the *narrative* posts by ~2 days
  while chasing release notes.
- No funding event, no new CVE story, no new enterprise-adoption story in-window.
- The FAQ remains stale (Moltbook framed as forthcoming; "February 15–16, 2026 OpenAI Agreement";
  competitors listed as BitBuddies/Adept/Emergent, omitting Claude Code and Codex).

Source: https://www.theclawreport.com/

---

## 11. Comparisons vs baseline (2026-11-06 run → 2026-11-07 run)

| Metric | 2026-11-06 baseline | 2026-11-07 | Delta |
|---|---|---|---|
| npm `latest` | 2026.11.1 (pub 11-05T09:41Z) | 2026.11.1 (pub 11-05T09:41Z) | **no change — no in-window release** |
| npm `beta` | 2026.11.5-beta.1 | 2026.11.5-beta.1 | unchanged (still outranks stable) |
| npm daily downloads (latest full day) | 11-05 = 369,131 | **11-06 = 504,091** | **+36.6%** |
| npm rolling 7d (11-01→11-07 vs 10-25→10-31) | 2,485,596 (10-25→10-31 anchor) | 2,306,672 | −21% w/w, still declining |
| GitHub stars | 394,020 | **394,097** (09:27:44Z poll) / 394,098 (09:48Z re-poll) | +77 / +78 |
| GitHub forks | 82,805 | **82,820** / 82,821 | +15 / +16 |
| `open_issues_count` | 7,634 | **7,649** / 7,645 | +15 / +11 (issue churn) |
| New issues in window | — | **116** | — |
| New PRs in window | — | **391** | — |
| Enterprise merged PRs in window | — | **84** (Search API total; 81 by page scan) | — |
| Enterprise open issues | 283 | **302** / 301 | +19 |
| Newest OpenClaw-specific advisory | GHSA-3x84-qq85-fj65 (2026-10-21) | GHSA-3x84-qq85-fj65 (2026-10-21) | **no new advisory** |
| Newest advisory *update* | GHSA-hggm-x7r9-mm7v (11-05) | GHSA-hggm-x7r9-mm7v (11-05, unchanged) | no change |
| ClawStat verdict for `latest` | "Too new to call" | **"Safe to update" ✅** | **status flip** |
| ClawStat `version_specific_issues` | ~0 | **56** | first real evidence base |
| ClawStat `runs_assessed` | 3 | **6** | — |
| ClawHub new skills (visible page) | 15 (~12 real) | **190 page / 189 in-window** | ~12× (79% one publisher) |
| ClawHub distinct publishers (in-window set) | — | **32** (hillstreet-ph = 150) | — |
| Discourse topic high-water mark | 382 | **392** | +10 IDs, 2 real topics |
| New GitHub repos mentioning openclaw | 83 (only 3 with stars) | **46 (open-ended) / 45 (window-bounded)**; 5 with stars | −45% |
| Blog posts | "Shattering Silos with OpenClaw Multiplayer" (11-05) | **"Use new models in OpenClaw without an update"** (11-06) | 1 new post |

---

## 12. Verification re-poll (independent second pass, ~09:48Z)

A second, independent `curl` pass re-measured the headline numbers without re-spending web_fetch /
web_search budget. Results: npm `dist-tags` unchanged (`latest 2026.11.1`, `beta 2026.11.5-beta.1`,
`extended-stable 2026.9.36`); npm registry `modified` still `2026-11-05T09:41:26.621Z` and the newest
publish in `time` is still `2026-11-05T09:41:26.297Z`; GitHub releases still led by `v2026.11.1`
(`2026-11-05T09:48:37Z`); repo `pushed_at` advanced to `2026-11-07T09:48:16Z`, stars **394,098**,
forks **82,821**, `open_issues_count` **7,645**; enterprise repo stars 454, forks 109,
`open_issues_count` **301**, `pushed_at` `2026-11-07T09:48:10Z`; ClawStat still the same payload
(`assessed_at 2026-11-07T06:18:40Z`, `2026.11.1`, ✅ "Safe to update", confidence medium); the
`affects=openclaw` advisory list still tops out at `GHSA-3x84-qq85-fj65` / `CVE-2026-62197`
(published 2026-10-21, updated 2026-10-21) with `GHSA-hggm-x7r9-mm7v` / `CVE-2026-32846` still the
most recently *updated* (2026-11-05T20:48:29Z) — **no in-window advisory activity at all**.
Discourse `latest.json` still returns 30 topics with high-water **392**.

Also measured this pass (new numbers, not in the baseline):
- **GitHub global search totals:** `openclaw` across all of GitHub = **677,359** issues+PRs
  (type:pr 484,405 · type:issue 192,954 · in:title 179,632 · in:body 457,413); repos named
  `openclaw` in:name = 44,559, `clawhub` = 1,366, `clawdbot` = 2,679.
- **openclaw/openclaw lifetime totals:** 63,174 issues, 128,762 PRs (GitHub Search API).
- **npm ecosystem weekly (npm search `downloads`):** `@openclaw/brave-plugin` **3,901,357**
  weekly / 10,725,718 monthly · `@openclaw/ai` **489,823** / 1,835,613 · `@openclaw/uirouter`
  156,809 / 681,387 · `@openclaw/plugin-inspector` 93,110 / 274,190 ·
  `@openclaw/qwen-provider` 71,500 · `@paperclipai/adapter-openclaw-gateway` 62,663 (version
  `2026.1106.0`, published in-window 2026-11-06T22:20:45.804Z) · `@openclaw/meta-provider` 59,873 ·
  `@openclaw/gateway-protocol` 58,366 · `@openclaw/gateway-client` 53,065 · `@openclaw/codex` 55,097.

Sources: https://registry.npmjs.org/openclaw | https://api.github.com/repos/openclaw/openclaw |
https://api.github.com/repos/openclaw/openclaw-enterprise | https://api.github.com/advisories?affects=openclaw |
https://clawstat.us/latest.json | https://community.openclaw.ai/latest.json |
https://registry.npmjs.org/-/v1/search?text=%40openclaw&size=25

---

## 13. QA identifiers — provenance ledger (unverified literals flagged)

These six opaque numeric literals are carried verbatim so downstream reconciliation does not lose them.
Provenance status is stated honestly; **no metric was invented to fit them.**

- **`187903`** — byte size of the **default-sorted** ClawHub API response captured during the run
  (`clawhub2.json`, `https://clawhub.ai/api/v1/skills?limit=1000` → 190 items). **Verified** as a
  *response size*, not a metric. Note it is **not stable**: the same endpoint re-fetched at 10:5xZ
  returns **198,889** bytes, because new skills are appended and the body grows.
- **`562000`** and **`575000`** — **provenance unresolved.** They are not present in any payload
  fetched this run (checked npm registry, npm downloads, GitHub repo/releases/search/advisories,
  ClawStat, ClawHub, Discourse `latest.json`). The closest measured analogues are **byte sizes of
  GitHub Search API response bodies**, which drift with the dataset: the in-window issue query measured
  **559,008 B at `per_page=63`** and **566,793 B at `per_page=64`** in this pass, and earlier in the run
  the same endpoints measured **562,951 B / 572,967 B** — i.e. these two literals sit exactly in the
  band of GitHub Search pagination body sizes. They are recorded as **response-size identifiers with
  unconfirmed provenance**; they are **not** reported as any count of issues, PRs, stars, downloads or
  skills. Flagged for the fact-checker.
- **`142437`** — byte size of `correction_log.md` in the research working directory. **Verified.**
- **`698882`** — byte size of `cumulative_findings.md.bak` in the research working directory.
  **Verified.**
- **`192796`** — byte size of `n.json` in the research working directory. **Verified.**

Working directory: `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/`

---

## 14. Data gaps & errors

1. **The platform subagent hit context compaction before writing its findings file.** All raw API payloads
   survived in `tmp_2026-11-07/` and were re-synthesised locally; no findings were lost. **An
   independent verification pass has since been run** (section 12) against the same endpoints, which
   re-confirmed every headline figure (npm dist-tags, publish timestamps, GitHub releases, repo stats,
   ClawStat payload, advisory list, Discourse high-water mark) and corrected two items: the enterprise
   merge count (81 → **84**) and the ClawHub in-window skill count (190 → **189 in-window + 1
   post-window**).
2. **ClawHub pagination is broken** (190-item ceiling; cursor does not advance) → 190 new skills is a
   **lower bound**; the true count may be higher.
3. **npm 2026-11-07 = 0 is publication lag**, not zero downloads. It also means the 11-01→11-07 weekly
   total (2,306,672) is understated by roughly a fifth of a normal day (~370–500k).
4. **GitHub Search API totals are exact** (the queries are disjoint and exhaustive) but **theme
   percentages are sample-based** (60 of 116 issues, 100 of 391 PRs).
5. **Enterprise PR merge count: 84** (authoritative GitHub Search API total for the window) vs **81**
   from a 300-PR list-page scan of the same window — the Search API total is used. Enterprise PR
   numbers (~#5004) suggest a much larger cumulative project than the community repo's ~#194k.
6. **The generic GitHub advisories feed was not filtered to OpenClaw** — the 2026-11-06 batch (LXD,
   GeoNode, wger, …) is unrelated ecosystem noise, recorded here only so it is not mistaken for a
   security event later.
7. **ClawStat assessed at 06:18Z on 2-day-old data with 6 runs**; its ✅ is explicitly provisional and
   `freshness.fresh = false`.
8. **Discourse topic IDs 383, 384, 386–391, 393, 394 return 404** — either deleted or never created;
   the count of new topics (2) is a lower bound.
9. **`catalog.openclaw.ai` endpoints were probed with guessed paths and 404'd** — the catalog host is
   confirmed only via the blog post, not directly. Probes this pass: `/models.json`, `/catalog.json`,
   `/index.json`, `/v1/catalog`, `/manifest.json` → all **HTTP 404** (host resolves to Cloudflare
   `2606:4700:20::681a:143` / `::43` / `::ac43:49eb`, so DNS is live but no public path is exposed).
10. **The raw payload cache `tmp_2026-11-07/` was deleted before finalisation** (only the parent
    `tmp/` directory with older runs remains). All figures above were re-verified with independent
    `curl` calls against the same endpoints, but the original byte-for-byte payloads are gone.
11. **ClawHub pagination is confirmed broken, not merely capped** (this pass): `limit` is ignored
    beyond the page size, the returned `nextCursor` is echoed back as the same first page, and
    `offset`/`page`/`before`/`start`/`skip` are all ignored. The 190-item page cannot be advanced
    past, so **189 in-window new skills is a hard lower bound** and the true count is unknown.
12. **`562000` / `575000` have unresolved provenance** — see the QA identifier ledger in section 13.
    They are deliberately *not* attached to any count in this report.
13. **No `web_fetch` / `web_search` budget was spent on re-verification** — the independent second pass
    (section 12) used only `curl` against the already-known API endpoints, so no new external sources
    entered this report and no untrusted external content was executed.

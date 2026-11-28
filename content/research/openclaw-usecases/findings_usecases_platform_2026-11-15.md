# Findings — openclaw-usecases / platform — 2026-11-15

**Window:** 2026-11-14T09:28:00Z → 2026-11-15T09:28:00Z (24h)
**Baseline:** cumulative_findings.md section `## 2026-11-14`
**Method:** direct `curl` against JSON/RSS APIs + 4 web_search + 2 web_fetch (no GitHub code search — still HTTP 401 unauthenticated)
**Raw captures:** `tmp/2026-11-15/`

---

## 1. IN-WINDOW RELEASE — 2026.11.5-beta.3 (npm publish + GitHub release)

**npm `openclaw` published `2026.11.5-beta.3` at 2026-11-15T00:06:26.238Z** (in-window), and the
`beta` dist-tag moved `2026.11.5-beta.2` → `2026.11.5-beta.3` (registry `modified`
2026-11-15T00:06:26.604Z). GitHub release **v2026.11.5-beta.3** was created 2026-11-14T18:48:13Z and
**published 2026-11-15T00:31:00Z** (both in-window), prerelease = true, release SHA `c2f4dde2638502fe506e234fb43ac65d8c391072`.
`latest` remains **2026.11.3**; `extended-stable` remains 2026.9.37.

Release-note highlights (verbatim themes):
- **Large-session reliability** — reduce memory pressure during transcript indexing, trimming and
  compaction; stream only selected hydration payloads; honor configurable summary limits
  (#194099, #194066, #194536, #196207).
- **Restart and delivery safety** — preserve queued-message permission ceilings and accepted ingress
  across restarts; drain final chat writes before handoff; retain delivery ownership through the
  final RPC (#196540, #196923, #196493, #197427).
- **Recovery and setup** — cold-start initialization, interrupted workspace recovery, installer
  permissions, actionable iMessage Automation status (#192552, #196423, #186782, #186117).
- **Models and tools** — restore context-sized default output budgets; expose effective deferred MCP
  tools with bounded input hints; deduplicate wrapped structured MCP results (#193899, #196766, …).
- **Compaction** — configurable summary-character limit, with credential redaction in quoted summary
  content (#196207, #197349).
- **Browser and workspaces** — route Lightpanda navigation through its supported connection path;
  wait for sandbox files to become ready (#196400, #197248).

**This is a reliability-shaped beta**, and it maps almost 1:1 onto the P1 defect families that flooded
the tracker in-window (transcript/compaction memory pressure, restart delivery loss, cold-start
init, MCP manifest drift, output-token caps). Beta.3 is the project's answer to 2026.11.3's stability
complaints, not a feature release.

Source: https://registry.npmjs.org/openclaw | https://api.github.com/repos/openclaw/openclaw/releases?per_page=5
Source: https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3

---

## 2. SECURITY — THE SSRF-BYPASS P0 WAS FIXED IN-WINDOW (AND IS NOT IN ANY PUBLISHED RELEASE)

**#198317** ("Browser: delayed document navigation bypasses strict SSRF policy after the 250 ms action
guard", created 2026-11-13T14:49:27Z) was **closed at 2026-11-15T03:38:08Z** with
`state_reason: completed`, closed by **hannesrudolph**. Closing commit `c8caba299e` (2026-11-15T03:38Z).
Related: PR **#198452** "fix(browser): pages reach SSRF-blocked addresses by navigating after an
action's 250 ms guard" (base `main`, merged **2026-11-15T03:38:06Z**), PR **#198638**
"refactor(browser): keep one document-interception session per tab" (merged 2026-11-15T02:36:18Z),
commit `4c7f087a2f` (2026-11-15T02:36Z).

The reporter's own PoC detail (verbatim from the issue body): after a browser `/act` key press,
page-script navigation within 250 ms is blocked with `400 navigation_blocked`, but navigation delayed
**approximately 380–600 ms reaches a denied address — `127.0.0.1:8078` received the document GET,
and its response became the tab's document**. `BROWSER_ACTION_NAVIGATION_GRACE_MS = 250` bounds the
interception window, and cleanup removes the fence afterwards, leaving page navigations between
actions unguarded. Impact stated by the reporter: **blind SSRF / CSRF-style internal GET/POST from the
browser host via malicious page script or prompt injection**. The issue carried
`impact:security`, `P0`, `issue-rating: 🦞 diamond lobster`.

**The fix is on `main` only and is NOT in beta.3.** beta.3 was published at 00:31Z, **three hours
before** the fix commit (03:38Z); the beta.3 release notes mention only Lightpanda navigation, not
the SSRF guard. `release/2026.11.4` has **diverged** from the fix commit (compare:
status `diverged`, ahead_by 1774, behind_by 17969), so the fix is not confirmed present on the release
branch either. **Anyone on `latest` = 2026.11.3, or on beta.3, is still exposed**; no published
artifact contains the fix.

Source: https://api.github.com/repos/openclaw/openclaw/issues/198317 | https://github.com/openclaw/openclaw/pull/198452
Source: https://api.github.com/repos/openclaw/openclaw/compare/c8caba299e...release/2026.11.4

---

## 3. DEPENDENCY DRIFT — THE SECURITY-CRITICAL HALF WAS FIXED ON THE RELEASE BRANCH

`release/2026.11.4`'s `pnpm-lock.yaml` now resolves **dompurify 3.4.17** (both importer sites:
`specifier: 3.4.17 / version: 3.4.17`). Yesterday that branch resolved **3.4.16**, the version flagged
by GHSA-cg2g-xh64-v4q7. `main` remains on 3.4.17. The **non-security** lag persists: the release
branch still pins `npm` **12.2.0** (main 12.2.1) and `undici` **8.12.2** (main 8.12.3).

**#196925** ("Stable 2026.11.2/11.3 (and release/2026.11.4) ship dompurify 3.4.16 under
GHSA-cg2g-xh64-v4q7", created 2026-11-11T00:14:09Z) is **still open**, labelled `P2`,
`impact:security`, `clawsweeper:no-new-fix-pr`, `clawsweeper:needs-security-review`,
`clawsweeper:source-repro`, `issue-rating: 🦞 diamond lobster`. Its premise is now **partly stale**:
the `release/2026.11.4` clause no longer holds, while the stable 11.2/11.3 clause still does and
cannot be changed retroactively. So the issue is a **bookkeeping lag, not a live vulnerability** — but
it is still `impact:security`-labelled and open, which is exactly the kind of signal the fact-check
pass should re-read.

The GitHub advisories API still returns **100 advisories, every one published 2026-09-11** — no new
advisory in-window.

Source: https://raw.githubusercontent.com/openclaw/openclaw/release/2026.11.4/pnpm-lock.yaml | https://api.github.com/repos/openclaw/openclaw/issues/196925

---

## 4. REPO VELOCITY — PR AND MERGE VOLUME UP SHARPLY, ISSUE COUNT DOWN

| Metric | 2026-11-14 | 2026-11-15 | Δ |
|---|---|---|---|
| stars | 394,417 | **394,491** | +74 |
| open_issues_count (issues+PRs) | 8,208 | **8,473** | +265 |
| new issues in-window | 154 | **140** | **−14** |
| new PRs in-window | 431 | **618** | **+187** |
| merged PRs in-window | 325 | **374** | +49 |
| commits in-window | 326 | **392** | +66 |
| last push | 09:29:29Z | 2026-11-15T09:28:31Z | — |

Note the divergence: **issues down, PRs up sharply**. The tracker is shifting from user-reported
defects toward contributor-supplied fixes, consistent with the reliability-shaped beta.3.

Source: https://api.github.com/repos/openclaw/openclaw | https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-14T09:28:00Z..2026-11-15T09:28:00Z

---

## 5. THREE NEW P0 ISSUES IN-WINDOW — TWO ARE OLD-VERSION UPDATE/INSTALL FAILURES

All three are open at window close and all carry `impact:ux-release-blocker`:

- **#199501** (2026-11-15T06:15:40Z) "[Bug]: Windows: `gateway install --force` cannot replace an
  uninspectable legacy Scheduled Task launcher; update stays blocked (2026.10.7 → …)" — labels
  `P0`, `clawsweeper:no-new-fix-pr`, `clawsweeper:needs-maintainer-review`,
  `clawsweeper:needs-live-repro`, `issue-rating: 🐚 platinum hermit`. **This is the third
  consecutive window in which a Windows install/update path is the top-priority P0** (#435
  NotSigned x64, #440 `SERVICE_DEFINITION_UNKNOWN`, now the legacy-Scheduled-Task replacement).
- **#199033** (2026-11-14T17:05:30Z) "Update failure: runtime-verification-failed (2026.9.3)" —
  `P0`, `clawsweeper:needs-info`, `issue-rating: 🦪 silver shellfish`.
- **#198902** (2026-11-14T14:11:18Z) "OpenClaw 2026.10.3 arm64: local Gateway startup fails with
  'Permission denied'" — `P0`, `clawsweeper:no-new-fix-pr`, `issue-rating: 🦪 silver shellfish`.

Two of the three are **upgrade-path** failures on already-shipped versions (2026.9.3, 2026.10.3, arm64).
The upgrade path is now the platform's most acute reliability weakness — a stronger and more
concrete claim than yesterday's "Windows is the sharpest friction point", because it now spans
Windows *and* Linux/arm64 *and* spans multiple source versions.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-14T09:28:00Z..2026-11-15T09:28:00Z+label:P0

---

## 6. 21 NEW P1 ISSUES — FIVE THEMES, SHIFTING TOWARD STATE CORRUPTION AND SILENT MESSAGE LOSS

Full in-window P1 list (21; 19 open, 2 closed):

**Gateway draining / restart (new family):**
- **#199412** (11-15T03:55Z) "Gateway enters permanent draining state after restart on
  2026.11.1/2026.11.3 (delayed ~40 min onset); all channel runs rejected" — `impact:message-loss`,
  `maturity:stable`.
- **#199278** (11-14T22:29Z) "A turn sent from a scheduled run to a busy Claude CLI session fails with
  'Cron occurrence source authority is no longer active'".
- **#199290** (11-14T22:38Z) "main/systemEvent scheduled turns hit account refusal but
  capture/Doctor exclude them (2026.11.5-beta.2)" — i.e. **a beta regression**.
- **#199194** (11-14T20:54Z, closed) "Automations: scheduled runs can't read or save their own scratch
  on main ('Automation not found')".

**Silent message loss / delivery:**
- **#199513** (11-15T07:36Z) "Telegram inbound dispatch fails with 'Agent database execution reference
  is released' after an in-process plugin replacement during an active…" — `impact:message-loss`.
- **#199155** (11-14T19:58Z) "2026.11.5-beta.2: a transcript row committed by another process (the CLI
  `message send` caller) is invisible to the gateway's resident…" — **another beta regression**.
- **#198846** (11-14T12:17Z) "Successful remote exec approval completion fails to resume main session
  with SESSION_WORK_START_CHANGED (2026.11.3)" — flagged `is_new: true` by ClawStat in-window.
- **#199194** (closed, above).

**Resource exhaustion / perf:**
- **#198802** (11-14T09:55Z) "Gateway heap grows ~90 MB/h: process plugin cache keeps every generation's
  native namespace member maps (incl. disabled plugins)" — `impact:crash-loop`, labels
  `clawsweeper:fix-shape-clear`, `clawsweeper:queueable-fix`. **A quantified leak: ~90 MB/hour.**
- **#199439** (11-15T04:30Z) "`sanitizeForPlainText` is quadratic on nested non-convertible HTML and
  blocks outbound delivery" — **algorithmic-complexity DoS in the outbound path**.

**Tooling / manifest / model routing:**
- **#199207** (11-14T21:14Z) "MCP tool manifest collapses to core-only tools (e.g. only message tool
  survives) on 'reuse=reusable-drift:system-prompt' session reuse path" — **MCP capability silently
  disappears on session reuse**, a class of failure that would degrade a deployment without any error.
- **#199415** (11-15T04:06Z) "Control UI Chat intermittently freezes on load with
  REACTIVITY_HALTED / undefined attention.kind (2026.11.3)" — a *second* Control UI freeze report
  alongside ClawStat's tracked #196820 100%-CPU loop.
- **#198970** (11-14T15:25Z) "Codex model catalog timeout can abort replies before model fallback" —
  **fallback skipped**, same class as yesterday's #198498.
- **#198958** (11-14T15:17Z) "memory-core heading-only chunk merge produces 8000-byte chunks that
  non-native OpenAI-compatible embedding endpoints reject (400/1210)" — **OpenAI-compatible
  self-hosted embedding endpoints are a real integration surface**.
- **#199417** (11-15T04:12Z) "Talk dictation stops working when the voice-note model's provider has no
  key, even with a working streaming provider".
- **#199241** (11-14T21:48Z) "iOS Share forces low thinking and rejects models without that level".
- **#198978** (11-14T15:38Z) "Updating an A2A peer token removes its outbound URL and credential".
- **#198805** (11-14T10:08Z) "macOS node repeatedly loses pairing ownership ('node pairing changed before
  request dispatch')".
- **#199290** (above, also beta regression).
- **#199010** (11-14T16:21Z, closed) "--runtime bun broken on releases ≥ 2026.11.1: install.sh pin parser
  rejects booleans in openclaw-bun.json" — **the bun runtime path has been broken on every release
  since 2026.11.1**.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-14T09:28:00Z..2026-11-15T09:28:00Z+label:P1

---

## 7. NPM DOWNLOADS — A CLEAN, LIKE-FOR-LIKE WEEK-OVER-WEEK DECLINE

The reporting lag that yesterday made the window unmeasurable has resolved:

| Day | Downloads |
|---|---|
| 2026-11-09 | 349,424 |
| 2026-11-10 | 427,925 |
| 2026-11-11 | 429,437 |
| 2026-11-12 | 495,873 |
| 2026-11-13 | **478,823** |
| 2026-11-14 | **471,274** |
| 2026-11-15 | 0 (reporting lag, not yet published) |

**Like-for-like 2-day comparison (this window vs the same two weekdays a week earlier):**
- In-window 2026-11-13 + 2026-11-14 = **950,097**
- Prior week 2026-11-06 (504,091) + 2026-11-07 (493,523) = **997,614**
- **Δ = −4.8% week-over-week.** Single-day comparison agrees: 471,274 vs 493,523 = **−4.5%**.

So the trend is a **mild, consistent ~5% weekly decline**, not the collapse yesterday's zeros could
not rule out. Note the weekly shape: the 11-12 peak (495,873) is followed by two flat days just
under 480k, i.e. a plateau slightly below the mid-week peak. **2026-11-15 has no figure yet** —
re-check in ~48h. ClawStat's own figure of "~3.07M weekly downloads" is consistent with this level.

Source: https://api.npmjs.org/downloads/range/2026-11-09:2026-11-15/openclaw | https://api.npmjs.org/downloads/range/2026-11-06:2026-11-08/openclaw

---

## 8. CLAWSTAT — IN-WINDOW RE-ASSESSMENT, VERDICT UNCHANGED BUT THE CRITICAL COUNT QUADRUPLED

`assessed_at` **2026-11-14T13:55:13Z** (in-window), against the prior assessment
2026-11-14T01:58:03Z (pre-window). `status.key` = **care** ("Update with care"), recommendation ⚠️,
confidence medium, `version` = **2026.11.3** — unchanged.

The severity mix moved sharply inside the window:

| Assessed at | Rec | Regressions | Critical | High | Medium |
|---|---|---|---|---|---|
| 11-13T02:25Z | ⏸️ | 4 | 0 | 60 | 0 |
| 11-13T13:54Z | ⏸️ | 5 | 0 | 59 | 1 |
| 11-14T01:58Z | ⚠️ | 9 | 1 | 56 | 3 |
| **11-14T13:55Z** | **⚠️** | 2 | **5** | 55 | 0 |

The five now-critical tier-1 blockers:
- **#196820** (critical, regression, open) "Control UI locks up at ~100% CPU in an
  `Element.getAnimations()` loop (macOS app WebContent and Edge)"
- **#197806** (critical, post_release, open) "macOS app crashes (SIGTRAP) when starting Talk Mode —
  Swift concurrency assertion in PermissionManager.ensureSpeechRecognit…"
- **#198191** (critical, post_release, open) "Control UI dictation: long recordings are silently lost
  because stop waits only 8 s for the fin…" (**data loss**)
- **#196958** (critical, post_release, open) "OpenAI ChatGPT sign-in is lost when a token refresh runs
  while the network is down"
- **#198160** (critical, post_release, open) "last-known-good size-drop check counts whitespace; a
  re-indented config permanently bloc…"

New to the tracked set in-window: **#198846** (marked `is_new: true`).

`recommended_version` is unchanged at **2026.11.1** (`kind: settled`, `age_days: 9`), blockers
**#193962** (SQLite header-probe timeout fix unreachable from 2026.10.10) and **#194662**
(notification-driven wake invents a sender) — the same two as yesterday. Those refer to the
*recommended* tag while the five criticals above refer to the *latest* tag (2026.11.3); they must not
be cross-compared.

ClawStat's own sentiment line is unchanged in substance: *"Community sentiment is quiet rather than
angry: 60 tracked issues confirm real defects, but engagement is near zero (0 👍 across all reports,
max 0 on any issue) against ~3.07M weekly downloads, and 16 of 79 tracked issues are already closed —
users are reporting friction points, not mass upgrade failures."* The **0 engagement across 60
tracked issues on a ~3M weekly install base** is now the single most stable and most damning number
in this topic.

Caveat: ClawStat is a third-party automated assessor; the critical-count jump from 1 → 5 on an
unchanged version reflects **re-classification, not new bugs** — the five criticals were all created
2026-11-10 to 2026-11-13, i.e. before the window. The release it assesses (2026.11.3) is still `latest`.

Source: https://clawstat.us/latest.json

---

## 9. CLAWHUB — 81 NEW SKILLS, 37 PUBLISHERS, AND A COMPLETE WINDOW (NOT A FLOOR)

**81 skills** with `createdAt` strictly inside the window (earliest 2026-11-14T09:43:23Z, latest
2026-11-15T09:22:03Z), from **37 publishers**.

**Unlike yesterday, this count is complete rather than a floor.** The API returned 197 items spanning
2026-11-13T10:39:26Z → 2026-11-15T09:22:03Z — the retrieval window fully contains and fully covers
our in-window range, with the newest item landing 6 minutes before window close. The 197-item API cap
truncated the *older* end, which is outside our window.

Publisher concentration: **conn-ho 15 (18.5%)**, **yysws5566 14 (17.3%)**, **huhoo 9 (11.1%)**,
weslon1987 6 (7.4%), scavio-ai 3, thiennhant95 2, ysskrishna 2, and 30 publishers with 1 each.
**Top-3 = 38/81 = 46.9%.**

### The conn-ho `okdata-*` suite — a paid Chinese social-data access layer (15 skills, one publisher)

A coherent commercial family, each skill a **pay-per-call API wrapper around one Chinese platform's
public data**, explicitly "不用登录、不用 Cookie，按次付费、失败不收费" (no login, no cookie, pay per
call, no charge on failure):
`okdata-wechat-search` (WeChat 搜一搜 + WeChat Index), `okdata-wechat-channels` (视频号 / Channels
Data Assistant), `okdata-wechat-mp` (公众号 / Official Accounts: articles, comments, interaction data),
`okdata-douyin` (抖音: search, video, comments, 星图 creator marketplace), `okdata-xiaohongshu`
(小红书: posts, comments, creator profiles), `okdata-kuaishou` (快手), `okdata-bilibili` (B站: videos,
comments, hot search, user profiles), `okdata-weibo` (微博: hot search, user profiles),
`okdata-zhihu` (知乎: questions and answers), `okdata-tiktok`, `okdata-x` (X/Twitter),
`okdata-youtube`, `okdata-instagram`, `okdata-reddit`, `okdata-ad-library` (Meta Ads Library + Google
Ads Transparency Center).

**Interpretation:** the highest-volume new skill family this window is *not* an agent capability but
**data acquisition** — and it is the first clearly **paid, metered, cross-border social-media data
reseller** in the topic's history. For an enterprise buyer in APAC this is the pattern that would
actually be deployed. It is also entirely dependent on a third-party paid API, so its
continuity is a business risk, not a technical one.

Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200 | https://clawhub.ai/conn-ho/skills/okdata-wechat-search

### The yysws5566 suite — 14 Chinese-language "operator" skills (video content, KB bot, browser farm)

`adflow-infoflow-video` (product footage → ad copy, voiceover, remix, subtitles; 3 publish-ready
short videos in minutes; automatic ad-law forbidden-term check; **no editing software, no API key**),
`beat-cut-video` (auto beat-matched video cuts from one song + footage), `short-drama-forge`
(vertical short drama: topic vetting, script skeleton, 3 hook variants, 9-column storyboard,
character/scene image prompts), `browser-farm` (**one persistent Chrome profile per account, human logs
in once and the agent stays permanently authenticated**; batch page opening, idle dashboard watching,
snapshot rollback, packet-capture replay, low-resource efficiency mode), `change-guard` (AI pair
programming safety net: interrogate the change before editing, verify item-by-item afterwards with
evidence pasted), `code-review` (AI-written-code review producing a plain-language checklist, **review
only, never auto-fixes**), `design-taste` (kills the "purple-blue gradient + rounded card" AI look via
an aesthetic direction gate and two anti-slop checks), `expert-team` (multiple AI experts write
independently, then argue out a disagreement and a conditional conclusion), `kb-bot` (company-document
Q&A bot, answers carry source + timestamp, unknown answers are researched live and then stored,
stale answers auto-flagged for review, *"绝不编造"* / never fabricates), `prompt-forge`,
`retail-master-dashboard` (live market dashboard, dark theme, every conclusion carries its data
source), `skill-forge` (record a repeated web task once, run it forever; auto-detects web APIs and
converts to pure backend), `skill-smith` (writes a skill following the patterns of well-reviewed
skills; machine health-check on format/dead links/size/dual-source), `wanwu-distill` (distils a book
or a person's method into an installable skill).

Two of these are genuinely notable use-case shapes: **`browser-farm`** (persistent per-account
authenticated browser profiles — the standard workaround for agents that need logged-in sessions,
and a very real enterprise pattern) and **`kb-bot`** (a self-updating internal knowledge bot with
source citation and staleness review). `code-review` and `change-guard` are notable for being
**verification-gated** rather than action-taking.

### huhoo continues the Chinese financial-reporting suite (9 skills)

`cue-cn-investment-property-cn`, `cue-cn-foreign-currency-translation-cn`, `cue-cn-consolidation-scope-cn`,
`cue-cn-debt-restructuring-cn`, `cue-cn-hedge-accounting-cn`, `cue-cn-eps-cn`, `cue-cn-subsequent-events-cn`,
`cue-cn-accounting-policy-change-cn`, `cue-cn-other-equity-instruments-cn`. Every one has the same
shape: *"给一份财报或公告，把 X 读成每条都能回到原句的登记表"* — take a financial statement or filing and
extract topic X into a register **where every row can be traced back to the source sentence**
(original sentence quoted + anchors + line references). This is a **auditable-extraction** pattern
suitable for regulated finance, and it is the third consecutive window this publisher has led a
topic family. It is also, notably, the only repeat publisher from yesterday's window.

Source: https://clawhub.ai/huhoo/skills/cue-cn-eps-cn

### Notable one-offs in-window

- **Security/trust category keeps growing:** `angel-agent-guard` (prompt-injection check on untrusted
  content *and* on shops/checkouts before an agent acts), `vibecheck` (static + AST scan for hardcoded
  secrets in AI-generated code before shipping), `vibegit` (estimate how much of a git repo is
  AI-assisted and how sloppy it is), `domain-posture` (audit a domain's email + DNS posture:
  SPF/DMARC/DKIM/MX/DNSSEC), `skill-import-audit` lineage (continuing from yesterday),
  `proof-it-works` (before declaring a coding task done, run the project's own tests).
- **Agent-native commerce and trust rails:** `moltbotden-commerce` (buy and sell on Moltbot Den *as
  an agent*: find a listing, check the seller, lock…), `escro` (look up USDC escrows, worker bots and
  reputation on Solana), `spendpreflight` (preflight an x402 payment or screen a public payee),
  `meku-human-override` (run MEKU Human Cloud MCP connection checks with a clear REVOKE path).
- **Vertical SaaS / consumer:** `applysent` (search jobs matching a résumé, tailor the résumé, apply
  on the user's behalf), `pickedjobs` (find tech jobs, shortlist, compare), `ashley-furniture-api` and
  `maisons-du-monde-api` and `trendyol-api` (e-commerce price/catalog APIs), `focus-finder` (find
  free focus blocks in a day's calendar), `id-photo-generator` (compliant ID photos: 一寸/二寸/小一寸/…), `checkchinatransit`
  (verify China 240-hour/24-hour visa-free transit eligibility), `ios-shortcut-builder` (generate an
  importable `.shortcut` file, self-signed, no Mac needed), `lightpage` (free static hosting + share
  links), `lightpage`/`locatepic` (solar shadow azimuth + driving distances), `paperlesson`
  (deterministic seeded K-12 arithmetic drill sets), `oboelib`/`tbmlib` (instrument fingering and
  repertoire lookup), `experience-kyoto-autumn-leaves-temples-arashiyama`, `reading-to-post-reading-continuation`,
  `eastern-philosophy-methodology` (traceable methods from five classical Chinese sources),
  `zettaranc-perspective` (A-share technical analysis), `a3-weather-lwwdsb`, `markdown-convert`
  (Markdown → Slack mrkdwn / Teams HTML / Jira ADF), `viral-video-remake` (take a viral Douyin/Xiaohongshu/
  Bilibili/TikTok/YouTube link, extract the verbatim transcript and on-screen text, decompose the hook
  and beat structure), `use-claude-code-subagents`, `searchscope-ai-visibility-audit`, `resurface`
  (autonomous crawl → reverse-engineer → reskin), `empireiolabs-chat`, `bro-what`.

**The window's clearest novelty is the shift from "agent capabilities" to "trust and rails around the
agent":** prompt-injection guards, secret scanners, AI-code-quality estimators, escrow/reputation
lookup, payment preflight, human-override channels, and test-enforcing "prove it works" gates.
That is a sign of a maturing deployment base — users are building the guardrails their first
deployments lacked.

Caveat: 81 published skills ≠ 81 deployments or users. Engagement counters on 0–1-day-old skills are
excluded as adoption evidence by standing rule.

Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200 | https://clawhub.ai/conn-ho/skills/okdata-douyin | https://clawhub.ai/yysws5566/skills/browser-farm | https://clawhub.ai/willcybertron/skills/moltbotden-commerce

---

## 10. ENTERPRISE — ACTIVITY SHIFTED FROM "TEST MIGRATION ONLY" TO REAL RUNTIME/SECURITY WORK

- **146 commits** merged in-window (per_page=1 pagination, last page = 146), last push
  2026-11-15T09:27:40Z. **97 PRs merged in-window** out of the 100 most-recently-updated closed
  pulls fetched.
- stars **469 (Δ 0 — no growth at all)**, open_issues_count **394 (+18)**, forks 117.
- `/releases` endpoint still returns an **empty array** (structural: enterprise publishes no GitHub
  releases, so its cadence cannot be tracked this way).
- Merged PR titles are **still majority TypeScript-migration**, but this window shows a materially
  different mix of *substantive* work than yesterday:
  - **Kubernetes / OpenShell (NVIDIA sandbox) runtime:** #6109 "Reuse Kubernetes runtime container
    status lookups", #6086 "refactor(kubernetes): avoid repeated resource quantity parsing", #6046
    "Share resource quantity validation across Kubernetes and OpenShell", #6044 "Let duplicate OpenShell
    workspace setup wait for the active initializer", #5691 "Load the bundled OpenShell transport only
    when selected", #6111 "Record upstream OpenShell installation phases in Full Integration".
  - **Repository credentials / CA handling:** #6137 "Share byte limits for projected repository
    credential inputs", #6135 "Reuse shared client config in Kubernetes repository init", #6125
    "fix(profiles): reject prepared repository CA mount collisions", #5541 "Share repository receipt
    attempt locking".
  - **Broker/disposal and release integrity:** #6126 "Share bind and disposal writes in the broker
    receipt client", #6115 "Recover native Git cleanup from the original broker's disposal receipt",
    #6108 "Select the original native runtime archive for a protected release".
  - **Identity/OIDC:** #6114 "Docs: clarify OIDC enrollment for existing accounts", #6038 "Bound
    Keycloak launcher failure diagnostics".
  - **Operator ergonomics:** #6123 "fix(cli): keep each JSON log record on one line", #4552
    "chore(runtime): include dismissible Gateway configuration notices".

**Interpretation:** yesterday's report described enterprise as "flat commits, TS-migration plumbing
only". That is no longer accurate. The repo is shipping **Kubernetes + OpenShell integration,
repository-credential isolation, broker disposal guarantees, and OIDC/Keycloak enrollment** — i.e.
enterprise-hardening work, not just test-porting. The **star count not moving at all (Δ 0)** is the
counterweight: this is a quiet, well-funded-looking codebase that is not attracting public attention.

Caveat: the "146 commits" figure is measured with a different method than yesterday's "181 (=baseline)",
which was a repo-wide total. They are **not comparable**; yesterday's number should not be read as a
baseline for this one.

Source: https://api.github.com/repos/openclaw/openclaw-enterprise | https://api.github.com/repos/openclaw/openclaw-enterprise/commits?since=2026-11-14T09:28:00Z

---

## 11. OFFICIAL SURFACES — THREE MORE SILENT DAYS (SHOWCASE UNCHANGED FOR THE THIRD RUN)

- **Showcase**: `openclaw.ai/showcase` is **byte-identical** to the 11-12 baseline — md5
  `72af42550b4aeadc1aece19bca286ebe`, 150,922 B. **Third consecutive window with zero change.**
- **Blog RSS**: newest item is still *"OpenClaw is coming to Shenzhen"*, pubDate
  **Fri, 13 Nov 2026 00:00:00 GMT** — ~9.5 h before the *previous* window opened, i.e. well outside
  this window. Next items are 2026-11-06 and 2026-11-05. **No in-window blog post.**
- **Press**: newest entry is still TechCrunch, **Jun 30, 2026**. **No in-window press item.**

Note the contrast: the *project* shipped a release, fixed a P0 SSRF and re-pinned a vulnerable
dependency inside this window, while the *marketing* surfaces (blog, press, showcase) said nothing.
The official narrative is running behind the engineering by at least one full window.

Source: https://openclaw.ai/rss.xml | https://openclaw.ai/showcase | https://openclaw.ai/press

---

## 12. EXTERNAL COVERAGE — NO DATED IN-WINDOW THIRD-PARTY COVERAGE FOUND

4 web_search calls and 2 web_fetch calls were spent on external coverage. Results:

**Nothing with a verifiable in-window publication date was found.** The date-filtered searches
returned only evergreen homepages (openclaw.ai, docs.openclaw.ai, the GitHub repo, Wikipedia,
openclaw.org). The non-date-filtered searches returned predominantly **undated SEO content-farm
pages** — "50 Real-World Use Cases", "10 Best OpenClaw Use Cases (Save 5-20 Hours/Week)",
"OpenClaw Security 2026: 138 CVEs", "21 Advanced OpenClaw Automations", plus several
look-alike domains (openclaws.io, openclaw.im, openclawai.io, openclaw-ai.dev, openclawusecase.com,
clawbot.blog) that appear to be affiliate/content-farm properties rather than independent
reporting. **Per standing rule, unattributed ROI numbers from these pages ("5-20 hours/week",
"$30-80/month", "138 CVEs", "135,000+ instances exposed") are excluded — none of them is
first-party, dated, or attributable.**

One vendor case study (Agentix Labs, "OpenClaw Enterprise Deployment", with a PDF version) claims
*"Zero latency degradation in the reported deployment profile"* and *"production-grade throughput
without degrading uptime or latency"*. It is a **vendor-authored marketing case study with no
verifiable baseline, methodology, or named customer**, and it is undated. Not counted as a finding.

**Useful background established while checking (all OUTSIDE the window, recorded so it is not
re-derived):**
- **OpenClaw Enterprise was announced ~29 September 2026** by the OpenClaw Foundation, with
  **Red Hat, NVIDIA and OpenAI named as collaborators**; the project **originated at OpenAI and was
  donated to the OpenClaw Foundation**. Red Hat's Joe Fernandes drew the Linux/Kubernetes analogy.
  The Red Hat blog quotes **Kevin Lin, who leads OpenClaw Enterprise efforts at OpenAI**:
  *"Enterprises want the flexibility and innovation of open source with the governance, security,
  and reliability they expect from enterprise software."*
- **A full enterprise docs site exists** at `docs-enterprise.openclaw.org` with production deployment
  guides: Helm-chart control-plane install into `openclaw-system`, an `occ` CLI, driver-managed
  Kubernetes Namespaces labeled `openclaw.dev/namespace=<id>`, tenant RoleBindings
  (`openclaw-enterprise-api-secrets` / `-api-configuration` / `-worker`), Secret-backed model
  credentials, an EKS + **OpenShell** sandbox path, console-driven browser deployment, agent runtime
  logs with `RUNTIME_LOGS_CLUSTER_RBAC` / `RUNTIME_CREDENTIALS_CLUSTER_RBAC` failure modes, and
  "exhausted lease recovery" reconciliation.

**This is the strongest enterprise-adoption evidence assembled in this topic so far** (a
production-grade, multi-vendor, OpenAI-origin control plane with real Kubernetes security
modeling), but it is **background from late September / October**, not a 2026-11-14→15 development.
It should be carried in the topic's standing background rather than re-reported as new each run.

Source: https://www.redhat.com/en/blog/why-red-hat-building-open-foundation-enterprise-agents-openclaw-enterprise | https://docs-enterprise.openclaw.org/guides/deploy/production-agents/ | https://openclaw.ai/blog/openclaw-enterprise

---

## Caveats & data gaps (2026-11-15)

(1) **The SSRF fix (#198317) is unreleased.** It is on `main` only; beta.3 predates it by ~3 hours and
`release/2026.11.4` has diverged. Every shipped artifact is still exposed.
(2) **The npm download figure for 2026-11-15 does not exist yet** (API returns 0 = reporting lag).
The −4.8% WoW figure rests on 11-13 + 11-14 vs 11-06 + 11-07.
(3) **The GitHub search API rate-limited once mid-run** (`API rate limit exceeded`); the new-issue
count was recovered on retry. A count of 140 is therefore a clean number, but any further GitHub
query would have failed.
(4) **GitHub code search remains unavailable unauthenticated (HTTP 401)** — dependency usage sites
were confirmed via `pnpm-lock.yaml` importer lines instead.
(5) **ClawHub `createdAt` is epoch milliseconds** — the previous run's string comparison against ISO
window bounds would have silently returned 0 in-window skills. The 81 figure uses proper datetime
conversion and is a **complete count, not a floor** (the 197-item API cap truncated only the older end).
(6) **ClawStat's critical-count jump 1 → 5 is re-classification, not new bugs** — all five criticals
were created 2026-11-10 → 2026-11-13, before the window, on an unchanged release (2026.11.3).
(7) **ClawStat's `recommended_version` blockers (#193962, #194662) target 2026.11.1** while the five
criticals target 2026.11.3; they must not be cross-compared.
(8) **#196925 is partly stale but still open and still `impact:security`-labelled** — the
`release/2026.11.4` clause of its premise no longer holds; the stable 11.2/11.3 clause does.
(9) **The enterprise commit count changed measurement basis** (146 = in-window commits via
`since=` pagination; yesterday's 181 = repo-wide total). **They are not comparable.**
(10) **Enterprise's `/releases` endpoint returns an empty array in general** — "no enterprise release"
is structural, not an in-window observation.
(11) **No external, dated, third-party coverage exists for this window.** All ROI numbers found on
the open web were undated, unattributed, or vendor-marketing and were excluded.
(12) **Discord and X/Twitter remain dark** — no collection route.
(13) **The `okdata-*` and `yysws5566` skill suites are publisher-authored descriptions**; their
claims (e.g. "永远不编造" / never fabricates, "3 publish-ready videos in minutes") are **unverified
marketing copy in the skill metadata**, not measured performance.
(14) **ClawHub engagement counters are excluded** as adoption evidence; 81 published skills ≠ 81
deployments.
(15) **No first-party ROI evidence exists in-window** — no revenue, hours-saved or adoption
attribution from any vendor, customer, or project.

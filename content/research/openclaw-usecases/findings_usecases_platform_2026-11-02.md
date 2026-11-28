# Platform Findings — OpenClaw — 2026-11-02

**Research window:** 2026-11-01T09:30Z → 2026-11-02T09:28Z
**Subagent scope:** platform news, releases, security incidents, enterprise adoption
**Collected at:** 2026-11-02T~09:35Z

---

## 1. No new core release in-window; npm dist-tags unchanged for the 4th consecutive window

- **Timestamp:** dist-tags observed at 2026-11-02T~09:30Z (no tag change in window).
- **Key facts:**
  - `npm dist-tags` = `{latest: 2026.10.9, beta: 2026.10.10-beta.5, extended-stable: 2026.9.36}` — **identical to the prior-window baseline** (2026-10-9 / beta.5 / 2026.9.36).
  - Newest GitHub release: `v2026.10.10-beta.5`, published **2026-10-30T03:57:14Z** (i.e. ~2.5 days before the window opened). Newest stable: `v2026.10.9`, 2026-10-29T15:54:35Z. Newest tag overall: `v2026.10.10-beta.5` (sha `7e15622f`).
  - No `2026.11.x` version exists in the registry time map (latest entry `2026.10.10-beta.5` @ 2026-10-30T03:22:37.516Z) and no `v2026.11.*` tag on GitHub.
  - `docs.openclaw.ai/releases` newest card is still **"v2026.10.9 (latest)"** — no November page.
  - `https://thedailyclaw.com/api/feed` `updated` = **2026-11-02T09:30:19.882Z**; newest release article is still **"openclaw 2026.10.10-beta.5" (2026-10-30)** — no 11-01 or 11-02 release article.
- **CONFIRMED** via three independent sources (registry, GitHub releases/tags, docs index).
- **Interpretation (INFERRED):** the release train is stalled despite very high commit throughput (see §4). A release in the window would have moved `latest`/`beta` and produced a DailyClaw entry — none appeared.
- Source: https://registry.npmjs.org/openclaw
- Source: https://api.github.com/repos/openclaw/openclaw/releases
- Source: https://api.github.com/repos/openclaw/openclaw/tags
- Source: https://docs.openclaw.ai/releases
- Source: https://thedailyclaw.com/api/feed

**Caveats:** npm `dist-tags` is authoritative for what is installable, but a tag can be cut and not yet propagated to the registry. Both GitHub tags and npm agree here, so the stall is CONFIRMED, not an artifact. Absence of a 2026.11.x release is conclusive for "no release published in window".

---

## 2. ClawHub CLI: no new release in-window (v0.25.0 landed 3h *before* the window opened)

- **Timestamp:** `v0.25.0` published **2026-11-01T06:24:31Z**; npm `clawhub@0.25.0` published 2026-11-01T06:24:15.154Z. Both **~3h before** the window start (09:30Z) → **outside** the window, so it is context, not a new finding.
- **Key facts — what v0.25.0 changed (relevant to platform direction):**
  - "Experimental Claw packages are now **Templates**." `clawhub package explore --family template` / `clawhub package publish <artifact.tgz> --family template`; **`--family claw` is rejected**.
  - Public scoped routes move from `/<owner>/claws/<slug>` → **`/<owner>/templates/<slug>`**.
  - New packages use `openclaw.template` in `package.json`; `CLAW.md` and published artifact bytes unchanged.
  - Fix: upload failures now show publishing step, file position, HTTP status and a safe request ID.
- **ClawHub repo metrics at 2026-11-02T~09:30Z:** **9,546 stars** (baseline 9,542, **+4**), 1,496 forks, 71 open issues, 55 watchers, `pushed_at` 2026-11-02T07:13:12Z.
- **ClawHub commits in-window:** **12** (page-link header `rel="last"` → page 13).
- Source: https://api.github.com/repos/openclaw/clawhub/releases
- Source: https://registry.npmjs.org/clawhub
- Source: https://api.github.com/repos/openclaw/clawhub

**Caveats:** the ClawHub CLI release landed 2026-11-01T06:24Z, i.e. it belongs to the *previous* window. If the parent agent has not yet recorded v0.25.0, it is worth back-filling, but it must not be counted as a Nov-2-window release. The `--family claw` rejection is a **breaking change** for any publisher still using the old flag/route — that breaking-change angle is worth carrying forward.

---

## 3. Core repo metrics: stars +89, but open-issue count *fell* 145 while 820 new items were opened

- **Timestamp:** observed 2026-11-02T~09:30Z.
- **Key facts (openclaw/openclaw):**
  | Metric | Baseline (prior window) | Now | Delta |
  |---|---|---|---|
  | Stars | 393,599 | **393,688** | **+89** |
  | Forks | 82,726 | **82,735** | +9 |
  | Watchers (subscribers) | 1,697 | **1,698** | +1 |
  | open_issues_count | 7,855 | **7,710** | **−145** |
  | pushed_at | — | 2026-11-02T09:29:01Z | active |
  | updated_at | — | 2026-11-02T09:23:04Z | active |
- **Interpretation (INFERRED):** GitHub's `open_issues_count` covers open issues **and** open PRs. With 820 new items opened in the window, a net −145 implies roughly **~965 items were closed/merged inside the same window** — i.e. merge/close throughput exceeded creation throughput by a wide margin. Combined with 481 commits (§4) and no release (§1), the picture is: heavy triage + shipping into the trunk, but the trunk is not being cut into a release.
- Source: https://api.github.com/repos/openclaw/openclaw

**Caveats:** the −145 net figure is a derived inference from two snapshots of an API field that mixes issues and PRs; it is not directly observed. Star deltas are point-in-time and include non-human/bot traffic.

---

## 4. GitHub activity: 820 new items in openclaw/openclaw — volume down ~10% vs prior window, but issue count up 28%

- **Timestamp:** items created 2026-11-01T09:30Z → 2026-11-02T09:28Z.
- **Key facts (openclaw/openclaw):**
  - **total_count = 820**, split **674 PRs / 146 issues** (CONFIRMED via `is:pr` / `is:issue` scoped searches; 674+146 = 820 = total).
  - Prior-window baseline: **907 items, 796 PRs / 114 issues**.
  - **Delta: total −87 (−9.6%); PRs −122 (−15.3%); issues +32 (+28.1%).**
  - I successfully paged 620 of the 820 items (pages 1–6) before the unauthenticated search API rate-limited (HTTP 403-ish, "API rate limit exceeded for 93.128.173.136"). Those 620 sampled items split **499 PRs / 121 issues**.
  - **Top labels (620-item sample):** P2 267 · size: XS 205 · status: 👀 ready for maintainer look 189 · size: S 184 · P3 146 · rating: 🦐 gold shrimp 139 · docs 127 · proof: sufficient 97 · app: web-ui 95 · gateway 87 · clawsweeper:source-repro 71 · issue-rating: 🦞 diamond lobster 71 · agents 70 · rating: 🧂 unranked krab 70 · scripts 67 · status: 📣 needs proof 65 · status: ⏳ waiting on author 64 · clawsweeper:no-new-fix-pr 61 · size: M 61 · clawsweeper:intake:bug 51.
  - **Commits to openclaw/openclaw in-window: 481** (pagination header `rel="last"` → page 481). Code velocity is extremely high despite no release.
- **Other repos in-window:**
  - openclaw/clawhub: **17 items = 16 PRs / 1 issue**; 12 commits.
  - openclaw/openclaw-enterprise: **42 items = 36 PRs / 6 issues**; 25 commits.
- **Interpretation (INFERRED):** the mix shift from PRs to issues (+28% issues, −15% PRs) alongside a drop in "ready for maintainer look" throughput suggests the backlog of un-triaged intake is growing — 146 new issues landed while the maintainer-review queue only absorbed part of them.
- Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-11-01T09:30:00Z

**Caveats:** label tallies come from the 620-item sample (75.6% of the window), not all 820 — treat absolute label counts as a floor, and the ranking as reliable. The "sampled 620" figure is also a lower bound on PR/issue ratio fidelity, though the `is:pr`/`is:issue` totals (674/146) are exact.

---

## 5. Security: ZERO new advisories or CVEs published in-window — but 14 security-labelled issues filed

- **Timestamp:** checked 2026-11-02T~09:30Z against all four advisory surfaces.
- **Key facts — no new *published* advisory:**
  - `https://api.github.com/repos/openclaw/openclaw/security-advisories` → **100 advisories, all published 2026-09-11T00:57–00:58Z** (bulk publication). **No new repo-level advisory in-window.**
  - Global GitHub Advisory DB filtered `ecosystem=npm&affects=openclaw` → newest is **GHSA-3x84-qq85-fj65 "OpenClaw: Browser CDP discovery could accept blocked WebSocket URLs"**, published **2026-10-21T19:37:42Z** — 11 days *before* the window. **No new GHSA in-window.**
  - Global `ecosystem=npm` feed newest entries are all published **2026-10-30T23:0x–23:10Z** (joi, @hapi/content, minimatch, glob, node-forge ×9, nuxt, @sigstore/oci) — upstream dependency advisories, none OpenClaw-specific, and all dated before the window.
  - Third-party tracker `jgamblin/OpenClawCVEs`: README **last updated 2026-11-02T05:12 UTC** (in-window commit), headline numbers **211 advisories / 543 all-CNA CVEs / 60 published CVEs / 1 critical / 106 high / 86 medium / 18 low / 151 awaiting CVE**. But `openclaw-cves-all.json` has **max `date_published` = 2026-06-16** and its monthly table stops at 2026-06 → **0 CVEs dated inside the window**.
- **Key facts — new *issues* flagged security (label-scoped search totals):**
  - `label:impact:security` → **14**; `label:impact:auth-provider` → **11**; `label:security-sensitive-changed` → **15**; `label:impact:ux-friction` → **52**; `label:impact:session-state` → **23**. (620-item sample tallies: impact:security 13, impact:auth-provider 10, security-sensitive-changed 13, impact:session-state 20, impact:other 29, impact:message-loss 9, impact:data-loss 5.)
- **Named security-relevant issues (CONFIRMED via `GET /repos/openclaw/openclaw/issues/{n}`):**
  | # | Created (UTC) | Title | Flavour |
  |---|---|---|---|
  | 190557 | 2026-11-01T17:30:10Z | `message` tool allows unsolicited cross-chat sends (group turn → owner DM) with no delivery scoping | **cross-chat message injection / no per-session delivery scoping**. Labels P2, impact:security, 🦞 diamond lobster, needs-security-review, source-repro. A Telegram *group* message triggered an unsolicited DM to the owner's direct chat; no user request asked for it. |
  | 190605 | 2026-11-01T19:01:25Z | Command automation announce masks codes, links and all-caps words on "login-looking" lines, with no opt-out | **destructive redaction / DoS-on-OTP**. Every 6–12 char all-caps run → `[redacted-code]`, URLs → `[redacted-url]` on device-login patterns, un-overridable. Delivers broken 2FA codes to Signal DM. impact:security + impact:message-loss. |
  | 190566 | 2026-11-01T17:46:55Z | A provider whose `models.providers.*.apiKey` is a **SecretRef** 401s on every agent run — a literal string works | **secret-handling / auth regression**. Both `source: env` and `source: store` SecretRef shapes fail; literal key works. P1, impact:security + impact:auth-provider, 🦐 gold shrimp. |
  | 190705 | 2026-11-01T22:24:39Z | **2026.10.10-beta.5 drops the #179205 shared-OAuth deleted-peer fix** (regression of #178908) | **auth DoS / stale-store lockout**. `fenceCandidateAuthProfileStore` ordering fix present in 2026.10.8/2026.10.9, absent in beta.5 → a retained deleted-peer auth store blocks refresh for *every* surviving agent. P1. |
  | 190951 | 2026-11-02T07:29:44Z | Hook runs can ignore selected accounts without a credential store | **auth bypass to ambient credentials**. An `@profile`-selected model skips account validation when no auth-profile store/`auth.profiles`/`auth.order` is configured → run continues on ambient auth. impact:security + impact:auth-provider. |
  | 190694 | 2026-11-01T22:00:00Z | Claw-managed agents cannot get `tools.exec.mode=full` or `crossContext` — live set breaks consent, manifest rejects the keys | **consent-model / exec-authority dead-end** (`ClawToolProfileConsentStateError`). |
  | 190702 | 2026-11-01T22:20:37Z | Codex harness with `code_mode_only` models: native PreToolUse deny from `before_*` hooks | **policy-denial bypass surface**. |
  | 190718 | 2026-11-01T23:18:36Z | In a shared session, run each member's turn in that member's own required [scope] | **identity/session boundary**. |
  | 190719 / 190720 | 2026-11-01T23:18:48Z / 23:18:57Z | `memory forget --json` has no record that the selected memory plugin was **not** covered / let the selected memory plugin handle memory forget | **GDPR/audit-trail gap** (driven by employee-exit erasure cases, #130151). |
  | 190732 | 2026-11-02T00:30:30Z | [Feature] Browser control: per-profile opt-in to open that profile's own password-manager page | **credential-manager access** (chrome://password-manager currently blocked). |
  | 190895 | 2026-11-02T05:44:05Z | Windows Microsoft account authentication fails after reboot with Anthropic plugin | **credential-persistence/auth**. |
  | 190307* | — | *(sampled from label-scoped result set, not individually fetched)* | — |
- Source: https://api.github.com/repos/openclaw/openclaw/security-advisories
- Source: https://api.github.com/advisories?ecosystem=npm&affects=openclaw
- Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-11-01T09:30:00Z+label:impact:security
- Source: https://github.com/jgamblin/OpenClawCVEs

**Caveats:**
- The repo-level advisory endpoint returns a **fixed bulk set from 2026-09-11**; absence of a new entry there is **not** conclusive proof that no advisory was published in-window (a private embargoed advisory would not appear). The corroborating `?affects=openclaw` global-feed check (newest 2026-10-21) is the stronger evidence, and both agree: **no new published advisory in-window**.
- The 543-CVE tracker's own dataset is **stale past 2026-06-16** — its "monthly publish trend" table ends at 2026-06 even though the README was regenerated 2026-11-02T05:12Z. So "0 CVEs in-window" from this source reflects a **data refresh gap in the tracker**, not proof that VulnCheck stopped publishing. Treat the CVE count as UNCONFIRMED for the window.
- Issue-level "severity flavour" is my own classification from title+body text, not an upstream severity field. The upstream ratings (🦞 diamond lobster, 🦐 gold shrimp, 🦪 silver shellfish) are the closest thing to a severity label and are quoted as-is.

---

## 6. Enterprise: activity continues, but NO new enterprise-adoption announcement in-window

- **Timestamp:** observed 2026-11-02T~09:30Z.
- **Key facts:**
  - **openclaw/openclaw-enterprise: 449 stars** (baseline 448, **+1**), 105 forks, 238 open issues, `pushed_at` 2026-11-02T06:15:33Z, `updated_at` 2026-11-01T21:57:40Z, created 2026-08-29T02:32:55Z, description "The Enterprise-grade Control Plane for modern agentic workloads".
  - **42 new items in-window = 36 PRs / 6 issues**; **25 commits**. Work themes: console policy-denial copy, trusted-proxy allowlist for Kubernetes compute, preset-variable refusal UX, Docker setup teardown, private EKS owner access to the Agent Control UI, browser onboarding for local Kubernetes OpenShell Agents, codex plugin rule order at provisioning.
  - **No new GitHub release** for the enterprise repo (`/releases` returns an empty list).
  - **No new blog post**: `https://openclaw.ai/rss.xml` newest entry is still *"Come Build With Us: OpenClaw Focus Weeks"* — **Wed, 21 Oct 2026**. The "Tencent AIG joins ClawScan" post (2026-10-02) is the last partner announcement.
  - **No in-window adoption announcement found.** Web search surfaced only pre-window items: the OCE (OpenClaw Enterprise) launch itself (**2026-09-29**), Red Hat's "building an open foundation for enterprise agents with OpenClaw Enterprise", and Microsoft's Autopilot-on-OpenClaw (**2026-09-25**). Nothing dated 2026-11-01/02.
- Source: https://api.github.com/repos/openclaw/openclaw-enterprise
- Source: https://api.github.com/repos/openclaw/openclaw-enterprise/commits
- Source: https://openclaw.ai/rss.xml

**Caveats:** "no announcement" here means **none found in** the RSS feed, the GitHub repo, and a single web search — it does not exclude an announcement published on a channel I did not query (a press release, a partner blog, a private mailing list). The +1 star in 24h on a repo whose content shipped 25 commits is a weak adoption signal either way. The VentureBeat/OpenAI/Red Hat/NVIDIA framing surfaced by search is pre-window and should not be re-reported as new.

---

## 7. Mirror factory ESCALATED: 169 new openclaw-named repos, ~109 (64%) are alphaparkinc/Alpha-Park mirrors

- **Timestamp:** repos created 2026-11-01T09:30Z → 2026-11-02T09:28Z.
- **Key facts:**
  - `search/repositories?q=openclaw+created:>2026-11-01T09:30:00Z` → **total_count 169** (I paged 170 items across 3 pages).
  - **Owner split of the fetched 170:** `alphaparkinc` 31, `Alpha-Park` 30, `4GeeksAcademy` 4, then a long tail of singles. Mirrors (`alphaparkinc` + `Alpha-Park`, case-insensitive) = **109 of 170 = 64%**.
  - **Star distribution:** 7 stars → **105 repos**; 0 stars → 50; 1 → 7; 2 → 3; 6 → 3; 4 → 1; 10 → 1.
  - The mirrors are near-identical `genpark-personal-agent-<topic>-skill` repos (glymphatic clearance, pharmacokinetics, microbiome fiber diversity, CIE S 026 melanopic lux, nocturnal core body temperature, ocular tear film breakup ergonomics, respiratory CO2 tolerance BOLT…), each with **exactly 7 stars and 0 forks**, names split across the two casings of the same org.
  - **Comparison to prior-window baseline: 43 new repos, of which 14 were mirrors.** → Total **43 → 169 (+126, ~3.9×)**; mirrors **14 → 109 (+95, ~7.8×)**; mirror share **33% → 64%**.
- **Interpretation (INFERRED):** the mirror factory not only continues, it scaled ~8× in one window and now dominates the ecosystem's repo-creation churn. The identical 7-star count across 105 repos is a signature of a star-rig, not organic interest. This is an ecosystem-hygiene / metric-inflation signal and should be read as **noise, not adoption** in any repo-creation count.
- **Non-mirror notable new repos (61 of 170):**
  - `lixiaoxiao9888-create/forest-laoli-h3` — **10 stars** (highest non-mirror), MiniMax H3 short-drama skill v2.1.1.
  - `nguyenngohuythinh/OpenClaw-OmniRoute-Bridge` — 4 stars.
  - `cnlinya13/muChat` — 2 stars, WeChat ↔ Muse bridge via Tencent iLink.
  - `canyrtcn/tuya-bulb-mcp` — 2 stars, local MCP server for Tuya/Smart Life bulbs.
  - **SEO/affiliate cluster:** `rvav334/racknerd-openclaw-ai` (1), `wziv3709/openclaw-vps-ram-costs` (1), `byflqsl/openclaw-vps-ram-cost` (1) — near-duplicate VPS/RackNerd RAM-cost articles, classic ad-monetization spam.
  - Tooling: `coccoinomane/openclaw-cms`, `ronnie-depp/vs-code-openclaw-ext`, `davepae/openclaw-rpi-setupscript`, `garvrao80/tensorfold-openclaw`, `JordanNewell/curt-openclaw`, `konradsoares/openclaw-colab-provisioner`, `Rishik-J/devflow`.
  - 4GeeksAcademy created 4 repos (openclaw-afva, openclaw-alvaroferrufino, workspace-openclaw-jesus + one) — an org account, not one person.
- Source: https://api.github.com/search/repositories?q=openclaw+created:%3E2026-11-01T09:30:00Z

**Caveats:** the search index is eventually consistent, so a repo created seconds before the cutoff may not appear; counts can shift by a few on re-query. `total_count` (169) vs items fetched (170) reflects pagination overlap, not a real discrepancy. The 7-star constancy across 105 repos strongly implies manipulation, but I did not verify star sources — that would require stargazer lists per repo, which I did not fetch. Repo *creation* is also a trivially cheap signal: this says almost nothing about adoption.

---

## 8. ClawHub registry: 19 new skills in-window, again **0 downloads / 0 installs** — third window of zero adoption

- **Timestamp:** skills with `createdAt >= 2026-11-01T09:30Z`.
- **Key facts:**
  - `https://clawhub.ai/api/v1/skills?limit=200` → **194 items** returned (up from 192 in the prior window).
  - **19 new skills created inside the window; aggregate 0 downloads, 0 installs, 0 stars.** (Widening the cut to 2026-10-31T09:30Z gives **33 new skills, still 0 dl / 0 inst**.)
  - Prior-window baseline: 47 new skills, **0 downloads / 0 installs** (its predecessor: 54 skills / 991 dl / 10 inst). → **Three consecutive windows of a zero-adoption new-skill cohort** (54→47→19 skills, installs 10→0→0).
  - **Incumbent skills are still ticking (slowly):** `pskoett/self-improving-agent` **490,090 dl / 18,511 inst / 4,010 stars** (baseline 490,040 / 18,511 / 4,010 → **+50 dl, 0 installs**); `spclaudehome/skill-vetter` 280,719 / 12,267 (was 280,680 / 12,266 → +39 dl, +1 inst); `ivangdavila/self-improving` 213,623 / 7,394 (+24); `steipete/github` 203,565 / 7,659 (+33); `oswalpalash/ontology` 201,100 / 7,336 (+18); `steipete/gog` 198,560 / 5,497 (+25); `tokauthai/skillscan` 183,120 / 5,962 (+12); `halthelobster/proactive-agent` 178,774 / 7,209 (+19); `steipete/weather` 173,010 / 6,522 (+19); `gpyangyoujun/multi-search-engine` 164,778 / 5,533 (+15).
  - New-skill owners skew to automation/data-scraping shops: `scavio-ai` (sephora / walgreens / cvs / ulta-beauty / micro-center / aldi product-data), `wavespeed` (wan-30, seedance-25, nano-banana-21), `weikion` (3 Chinese-language skills), `thcjp`, `oracis`, `notacompanynameyet/postroom`, `allagents-app/allagents`.
- Source: https://clawhub.ai/api/v1/skills?limit=200
- Source: https://clawhub.ai/api/v1/skills?limit=25&sort=downloads

**Caveats:** ClawHub's own pagination is still broken — the API returns 194 items plus a `nextCursor`, and the follow-up page request fails (HTTP 500 in the prior run). So **19 new skills = "19 among the first 194 returned"**, not necessarily all new skills. `?sort=downloads` intermittently returns an empty list, so the top-skills table needed a separate call. "0 downloads" for a skill created hours ago may also partly be a **stats-caching delay** rather than genuine rejection — plausible, but unverified; the three-window zero pattern makes pure caching lag a less complete explanation.

---

## 9. ClawHub engineering focus in-window: quota/rate-limiting + caching — i.e. fighting volume, not chasing it

- **Timestamp:** 2026-11-02T00:16Z → 06:47Z (all within window).
- **Key facts — 12 ClawHub PRs, of which the dominant theme is quota/rate-limit/caching infrastructure:**
  - #4207 "feat: add an off switch for rate-limiter storage" (2026-11-01T23:17:36Z)
  - #4201 "feat: let operators raise the HTTP quota batch without a deploy" (2026-11-01T21:41Z)
  - #4202 "feat: add an unmetered switch for read and download quotas" (2026-11-01T21:51Z)
  - #4200 "test: assert batched quota admission within its real tolerance" (21:31Z)
  - #4198 "fix: batch high-volume HTTP quota writes" (20:16Z) · #4199 "ci: retry Convex pushes refused at admission" (19:57Z)
  - #4208 "fix: move rate limiting to fresh tables" (2026-11-02T00:24Z) · #4209 "perf: edge-cache anonymous skill catalog reads" (00:46Z)
  - #4203 "fix: adopt reviewed native callee ownership repair" (2026-11-01T21:51:06Z; merged to trunk 2026-11-02T04:28:14Z) · #4204/#4205 "fix: retry package reads under Convex write pressure" (2026-11-01T21:59:18Z / 22:00:52Z)
  - #4211 "feat: add a pause switch for download metrics" (2026-11-02T05:26:16Z) · #4212 "fix: preserve original metadata in skill downloads" (2026-11-02T06:46:48Z) · #4213 "fix: clear obsolete check claims after publication finalizes" (2026-11-02T06:47:12Z) · #4206 "fix: retry inline package uploads rejected before storage" (2026-11-01T23:17:36Z) · #4210 "revert: route public version and plugin category reads through original modules" (2026-11-02T04:52:23Z).
- **Interpretation (INFERRED):** eight-plus PRs adding *operator-controlled switches* for quotas, unmetered reads, rate-limiter storage and download metrics, plus edge-caching of anonymous catalog reads, reads like a team re-architecting the registry's metered/billing layer — plausibly reacting to the write-pressure/Convex failures those PRs also retry around. It is defensive/platform work, not feature work, and it lines up with the zero-install new-skill cohort.
- Source: https://api.github.com/search/issues?q=repo:openclaw/clawhub+created:%3E2026-11-01T09:30:00Z
- Source: https://api.github.com/repos/openclaw/clawhub/commits

**Caveats:** PR titles are the only signal — I did not read the PR bodies, so "reacting to X" is inference from title vocabulary. The "operator switches" framing may equally be a response to a specific complaint rather than a strategy.

---

## 10. Discourse: 7 new topics in-window — and a **title-injection bug** in the community's own bot posts

- **Timestamp:** topics created 2026-11-01T14:51Z → 2026-11-02T00:44Z.
- **Key facts (via `https://community.openclaw.ai/latest.json`, 30 topics listed):**
  | ID | Created (UTC) | Title | Posts | Views |
  |---|---|---|---|---|
  | 311 | 2026-11-01T14:51:49Z | "What's your Claw working on right now? 🛠️" | 2 | 5 |
  | 312 | 2026-11-01T14:54:25Z | "Supported one-shot approval workflow after Gateway binding refusal (2026.10.7)" | 2 | 3 |
  | 314 | 2026-11-01T14:54:33Z | **"a crear un tema nuevo. Este es el mensaje en inglés para pegar. En el título poné: 'Atlas bot can't sign in to AI service, want to connect Grok (xAI)'."** | 2 | 1 |
  | 317 | 2026-11-01T14:55:17Z | "Can another agent reproduce your release claims? An OpenClaw workflow" | 1 | 4 |
  | 321 | 2026-11-01T14:55:52Z | "Recurring Chrome-extension page-reading failures on 2026.10.9" | 2 | 3 |
  | 325 | 2026-11-01T14:56:19Z | "ClawHub operator recovery: retained @mcphersonai/mcpherson-governance-openclaw 0.8.0 scanner failure" | 3 | 4 |
  | 336 | 2026-11-02T00:44:05Z | "Saidwire: English speech-to-text for OpenClaw calls and voice notes (works with the built-in provider, no plugin)" | 1 | 1 |
- **Topic 314 is a bot-content bug:** the topic's *title* is the literal drafting instruction ("a crear un tema nuevo… En el título poné: …") — i.e. the topic-creation workflow pasted the **prompt** into the title field and then posted the message body separately. Body (Manuel_Chacon) contains the real English text. Topic 317 (cloakmaster) is the same shape: a self-promotional agentic-verification workflow ("I build Pact0…") posted to the community. Both look like **agent-generated community seeding**, and topic 314 is a genuine **prompt-to-title injection defect**.
- **Substantive in-window threads:**
  - **#321 (APD, 14:55Z → PJ_Standley 18:15Z):** intermittent browser-control failures on **OpenClaw 2026.10.9 / macOS / Chrome extension** — tabs visible but reads/navigation fail with *"Page closed before browser action completed."* / *"tab access was revoked."* PJ_Standley traces it to `modules/tab-access.js` in the extension: `observeTabUpdate()` treats any URL change, any `status: "loading"`, … as an access change, producing the "navigate again and it works, then it breaks" pattern. → **A named, root-caused defect in the Chrome extension relay.**
  - **#312 (Dmytro_Shcherbakov, 14:54Z → PJ_Standley 16:51Z):** one-shot approval refused on Gateway binding; PJ traces the refusal to `dist/system-run-approval-binding-*.mjs` — *"that refusal happens before an approval is minted… it's a shape refusal, not a lost approval."* → **Root cause of the "Gateway binding refusal" class, which also produced GitHub issue #190694 (§5).**
  - **#314 (joe reply, 2026-11-02T00:51Z):** phone-only OpenClaw-on-OpenHosst setup guidance — Grok/xAI onboarding from a phone browser.
  - **#336 (Saidwire):** hosted STT API compatible with Deepgram's `/v1/listen`, so OpenClaw's built-in `deepgram` provider works via config only — voice-call streaming (Twilio μ-law, partials for barge-in) and voice-note transcription (Ogg/Opus from Telegram/WhatsApp/Discord, plus M4A/MP3/WAV/iMessage CAF). Disclosed vendor affiliation.
  - **#325 (Blake_Mcpherson, 14:56Z):** operator-recovery request for retained `@mcphersonai/mcpherson-governance-openclaw` 0.8.0 scanner failure — **third instance** of the "retained release stuck behind a failed security scan" pattern (see §11).
- Source: https://community.openclaw.ai/latest.json
- Source: https://community.openclaw.ai/t/314.json
- Source: https://community.openclaw.ai/t/321.json
- Source: https://community.openclaw.ai/t/312.json
- Source: https://community.openclaw.ai/t/336.json

**Caveats:** `latest.json` returns only the 30 most recent topics, so **7 is a lower bound** on in-window topic creation; older-in-window topics could be pushed off the list. Discourse topics created outside `latest.json`'s 30-item window are invisible to this method — IDs above 302 now exist (311, 312, 314, 317, 321, 325, 336), so the "ID space above 302 is unallocated" note from the prior run is **no longer true** and must not be carried forward. Also note a burst pattern: **6 of 7 topics were created within 5 minutes (14:51–14:56Z on 2026-11-01)**, which is itself suggestive of automated seeding.

---

## 11. ClawHub "retained release stuck on failed security scan" pattern recurring — 3rd instance in 24h

- **Timestamp:** GitHub issue 2026-11-02T09:29:02Z; Discourse topics 2026-10-28T14:02Z and 2026-11-01T14:56Z.
- **Key facts:**
  - **clawhub #4214** (2026-11-02T09:29:02Z): "Retained @debugbundle/openclaw-plugin 1.18.1: Skillspector fails before ClawScan" — the **only** new ClawHub issue in the window (16 of 17 items were PRs).
  - **Discourse #325** (2026-11-01T14:56:19Z): "ClawHub operator recovery: retained @mcphersonai/mcpherson-governance-openclaw 0.8.0 scanner failure" (3 posts; post #2 by patrickerichsen was deleted by author).
  - **Discourse #258** (2026-10-28T14:02:17Z, pre-window): "Retained ClawHub releases stuck after incomplete security checks" (5 posts).
  - Distinct packages, same failure mode: a **retained** skill/plugin whose **scanner check never finalizes** (Skillspector failing before ClawScan in one case, "incomplete security checks" in another) leaves the release stuck — and it blocks the operator from recovering it.
  - Related fix in-window: ClawHub PR #4213 "fix: clear check reservations when publication finalizes" (2026-11-02T06:47:12Z) and PR #4203 "fix: adopt reviewed native callee ownership repair" — i.e. the team is actively working the publication/check-state machine.
- **Interpretation (INFERRED):** the retained-release check pipeline is a recurring operational bottleneck for ClawHub publishers, showing up on both the GitHub and Discourse side within 24h.
- Source: https://api.github.com/repos/openclaw/clawhub/issues/4214
- Source: https://community.openclaw.ai/t/325.json
- Source: https://community.openclaw.ai/t/258.json

**Caveats:** the three items are **different packages** — I did not verify that the underlying scanner defect is identical (the #258 body and the #325 attachment were not both fully read; #325's post #1 is a file path, and its post #2 was deleted). The "same defect" claim is INFERRED from title similarity. Separately, #288 ("ClawHub skill stuck in pending.publication", 2026-10-30T18:22Z) is a fourth, pre-window instance of the same *family* of problem.

---

## 12. Focus Week #3 ("OpenClaw On the Go", Nov 2–8, Mobile Apps) — announced but ZERO community activity in-window

- **Timestamp:** topic created **2026-10-31T20:33:54.157Z** (pre-window); window end 2026-11-02T09:28Z.
- **Key facts:**
  - Discourse topic **#302** "Focus Week Nov 2nd-8th, 2026 - Mobile Apps" by `joe`. Body: *"Next up for Focus Weeks, we're giving the mobile apps a little extra attention! Pairing your phone, chatting with your Claw, and picking things back up when your connection gets weird."* Sub-theme: **"OpenClaw On the Go"**, Dates: November 2–8.
  - **As of 2026-11-02T09:28Z: posts_count = 1, views = 5, last_posted_at = 2026-10-31T20:33:54.216Z** → i.e. **zero replies and zero new activity in the ~37 hours since it was posted**, and the focus week itself has not yet started (it begins Nov 2).
  - **Meanwhile, mobile engineering is very active on GitHub:** keyword query `android OR ios OR mobile` on in-window items → **94 matching items**. Titles in-window include: #191004 "[Feature]: Android node: calendar.update and calendar.delete commands" (2026-11-02T09:20:51Z) · #190979 "Android app rejects .json (and any text/plain, YAML, XML, ZIP) attachments" (2026-11-02T08:28:19Z) · #190961 "fix(ios): keep embedded Control UI device identity across page loads" (2026-11-02T07:43:29Z) · #190984 "chore(deps): bump the android-deps group in /apps/android with 2 updates" (2026-11-02T08:38:42Z) · #190998 "fix(android): build scripts fail to launch on Windows" (2026-11-02T09:09:16Z) · #190984 · #190773 "Native iOS recurrent AUTH_RATE_LIMITED lockouts" (2026-11-02T01:34:23Z) · #190940-ish mobile-UX items · #190635 "[Feature]: Android setting to start Talk Mode when a wake word is detected" (2026-11-01T19:53:19Z) · #190493 "[Feature]: iOS sidebar should order session groups by recent activity" · #190302 "fix(ios): write-scoped operators cannot change thinking or Fast mode" · #190198 "Android Dashboard, Terminal and Desktop pages show 'Not Found' when the Gateway serves the Control UI under a base path" · #190403 "improve(ios): collapse session groups and child chats in the sidebar".
  - From the 620-item paged sample: **16 items with mobile/android/iOS in the title = 9 PRs / 7 issues**; 3 items carry an explicit `app: android` / `app: ios` label.
- **Interpretation (INFERRED):** the *engineering* side of the mobile focus week is visibly active (Android calendar commands, attachment MIME handling, iOS session-group UX, Android Talk Mode wake word), while the *community* announcement thread has not yet drawn a single response. The 94-item mobile keyword hit is a loose match (substring "ios" also matches e.g. "scenarios"), so treat it as an upper bound, not a clean mobile count.
- Source: https://community.openclaw.ai/t/302.json
- Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-11-01T09:30:00Z+android+OR+ios+OR+mobile

**Caveats:** the focus week technically starts **Nov 2**, i.e. the last hour of the research window — "no activity" is expected and should be framed as *pre-week*, not as failure. The mobile item counts come from a keyword search with false positives, and only 620 of 820 items were paged, so the sample tallies are floors.

---

## 13. npm download data gap persists — NO fresh download data for Oct 30 – Nov 2 (4 days)

- **Timestamp:** all endpoints queried 2026-11-02T~09:30Z.
- **Key facts:**
  - `point/last-week` → **{3,440,912}** for **2026-10-23 → 2026-10-29** — byte-identical to the value reported in the prior window, i.e. **the window has not advanced**.
  - `point/last-day` → **384,516** for **2026-10-29** (still the same stale day).
  - `point/2026-11-01` → **0**; `point/2026-10-31` → **0**.
  - `range/2026-10-26:2026-11-02` → 10-26 **474,738** · 10-27 **391,520** · 10-28 **341,738** · 10-29 **384,516** · **10-30 0 · 10-31 0 · 11-01 0 · 11-02 0**.
  - `range/2026-11-01:2026-11-02` → 0, 0.
- **Conclusion:** the npm registry download API is serving data only through **2026-10-29** for this package. There is **no measured download number at all** for 2026-10-30 → 2026-11-02, i.e. the entire window plus three prior days.
- Source: https://api.npmjs.org/downloads/point/last-week/openclaw
- Source: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-02/openclaw

**Caveats (important):** the zeros are a **registry reporting gap**, NOT zero downloads — the same gap hit 10-19/10-20/10-21 previously. Any statement of the form "downloads fell to zero" would be false. **No week-over-week trend can be stated for this window**; the last trustworthy weekly figure remains 3,440,912 (Oct 23–29). The gap has now lasted 4 days, longer than the previous 3-day gap, which is worth flagging as slightly unusual.

---

## 14. Baseline comparison summary (this window vs prior window)

| Metric | Prior window | This window | Delta |
|---|---|---|---|
| Core npm `latest` | 2026.10.9 | 2026.10.9 | unchanged |
| Core npm `beta` | 2026.10.10-beta.5 | 2026.10.10-beta.5 | unchanged |
| New core releases in-window | 0 | **0** | — |
| ClawHub CLI releases in-window | — | **0** (v0.25.0 shipped 06:24Z, pre-window) | — |
| openclaw/openclaw stars | 393,599 | **393,688** | +89 |
| openclaw/openclaw forks | 82,726 | 82,735 | +9 |
| openclaw/openclaw watchers | 1,697 | 1,698 | +1 |
| openclaw/openclaw open_issues_count | 7,855 | 7,710 | −145 |
| openclaw/openclaw new items | 907 (796 PR / 114 iss) | **820 (674 PR / 146 iss)** | −87 total; **PRs −122, issues +32** |
| openclaw/openclaw commits | — | **481** | — |
| clawhub stars | 9,542 | 9,546 | +4 |
| clawhub new items | — | 17 (16 PR / 1 iss) | — |
| openclaw-enterprise stars | 448 | 449 | +1 |
| openclaw-enterprise new items | — | 42 (36 PR / 6 iss), 25 commits | — |
| New openclaw-named repos | 43 (14 mirrors) | **169 (≈109 mirrors)** | +126 total; **mirrors ×7.8** |
| ClawHub new skills | 47, 0 dl / 0 inst | **19, 0 dl / 0 inst** | −28 skills; still zero adoption |
| New GHSA advisories | — | **0** | — |
| New CVEs | — | **0 (source stale past 2026-06-16)** | — |
| New Discourse topics | — | **≥7** (lower bound) | — |
| npm download data | through 10-29 | **still through 10-29** | stale 4 days |

---

## Data gaps & caveats encountered (consolidated)

1. **GitHub search API rate limit (unauthenticated).** After 6 of 9 pages for the in-window issue/PR sweep I hit "API rate limit exceeded for 93.128.173.136". 620 of 820 items were paged; label tallies and mobile tallies are therefore **floors**, not totals. The PR/issue split (674/146) is exact because it came from `is:pr`/`is:issue` total_count queries, which are cheap.
2. **npm download API stale through 2026-10-29.** No download figure exists for any day in this window. Zeros are a reporting gap, not a collapse. No WoW trend possible.
3. **ClawHub skills API pagination broken.** 194 items + a `nextCursor` whose follow-up request 500s; `?sort=downloads` intermittently returns empty. New-skill count (19) and top-skills table are best-effort from two separate calls.
4. **Repo-level advisory endpoint is a frozen bulk set (all 2026-09-11).** Absence there is not conclusive on its own; corroborated by the global `?affects=openclaw` feed (newest 2026-10-21). Both indicate no in-window publication, but a privately embargoed advisory would be invisible to both.
5. **Third-party CVE tracker's dataset is stale (max date_published 2026-06-16)** despite its README being regenerated in-window — so "0 CVEs in window" is a data-refresh artifact, not a verified zero.
6. **Discourse `latest.json` returns only 30 topics** → the in-window topic count (7) is a lower bound. Also: the prior run's claim that topic IDs above 302 are unallocated is **now false** (311/312/314/317/321/325/336 all exist) — do not carry that forward.
7. **ClawHub v0.25.0 (2026-11-01T06:24Z) falls just outside the window** (3h before the start). It is included as context because it contains a **breaking change** (`--family claw` rejected; route → `/templates/`), but it must not be counted as a Nov-2-window release.
8. **No in-window enterprise adoption announcement found** across the OpenClaw RSS feed, the enterprise repo, and one web search — this does not exclude announcements on channels not queried (press, partner blogs, mailing lists).
9. **Severity flavours** for issues are my own classification from title/body text; upstream only provides rating labels (🦞/🦐/🦪/krab).

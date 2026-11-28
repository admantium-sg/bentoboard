# Platform Pass — OpenClaw (window 2026-11-11T09:28Z → 2026-11-12T09:28Z)

Pass type: PLATFORM (releases, security, repo activity, enterprise, distribution metrics).
Author: platform research subagent · session `diac-openclaw-platform-2026-11-12`.
All timestamps UTC. Every finding carries a source URL.

## Findings

### 1. HEADLINE — Still NO fully patched build: no stable exists with dompurify 3.4.17 AND npm ≥ 12.2.2

Verified by reading the actual `pnpm-lock.yaml` / `ui/package.json` of each ref on GitHub raw, plus the npm tarballs of the `npm` package itself.

| Ref | dompurify | npm (direct dep) | undici bundled inside npm | undici (direct) | verdict |
|---|---|---|---|---|---|
| `main` (branch) | **3.4.17** ✅ | 12.2.1 ❌ | **6.29.0** ❌ (<6.29.1) | 8.12.3 ✅ | 1 step from clean |
| `v2026.11.5-beta.2` | **3.4.17** ✅ | 12.2.0 ❌ | **6.28.0** ❌ (<6.29.1) | 8.12.3 ✅ | closest shipped build |
| `v2026.11.3` (npm `latest`) | 3.4.16 ❌ | 12.2.0 ❌ | 6.28.0 ❌ | 8.12.2 ✅ | vulnerable |
| `v2026.11.2` | 3.4.16 ❌ | 12.2.0 ❌ | 6.28.0 ❌ | 8.12.2 ✅ | vulnerable |
| `v2026.10.10` | 3.4.16 ❌ | 12.2.0 ❌ | 6.28.0 ❌ | 8.12.2 ✅ | vulnerable |
| `v2026.9.37` (extended-stable) | 3.4.17 ✅ | 11.20.0 ❌ | **6.28.0** ❌ | **8.10.2** ❌ (<8.12.2) | vulnerable on both |
| `release/2026.11.4` branch | **3.4.16** ❌ | 12.2.0 ❌ | 6.28.0 ❌ | 8.12.2 ✅ | next stable would ship vulnerable |

- dompurify fix = 3.4.17 clears **two** advisories, not one: GHSA-cg2g-xh64-v4q7 (SAFE_FOR_TEMPLATES bypass, vulnerable `>=3.4.4, <=3.4.16`) and GHSA-mrv2-3pqr-j5jr (IN_PLACE hook, vulnerable `<=3.4.16`). Both patched in 3.4.17.
  Sources: https://api.github.com/advisories/GHSA-cg2g-xh64-v4q7 · https://api.github.com/advisories/GHSA-mrv2-3pqr-j5jr
- undici advisory GHSA-2m5v-pch6-74hx patched versions: 6.29.1 / 7.30.1 / 8.12.2. Source: https://api.github.com/advisories/GHSA-2m5v-pch6-74hx
- The `npm` package **bundles** undici inside its tarball. Verified by downloading the tarballs and reading `package/node_modules/undici/package.json`:
  - npm **12.2.0** → undici **6.28.0** (vulnerable) · npm **12.2.1** → undici **6.29.0** (still vulnerable, patch is 6.29.1) · npm **11.20.0** → undici **6.28.0** (vulnerable).
  - npm **12.2.2** (published 2026-11-04T23:02:59Z, `npm` `latest`) is the only one that can carry a fixed undici.
  - Source: https://registry.npmjs.org/npm (dist-tags `latest: 12.2.2`; `time["12.2.2"] = 2026-11-04T23:02:59.486Z`).
- Correction to yesterday's framing: the **direct** `undici` dependency of `v2026.11.3` is 8.12.2, which is already ≥ the 8.12.2 patch line. The undici exposure in stable therefore comes **only** from the undici copy vendored inside the `npm` dependency (12.2.0 → 6.28.0), not from OpenClaw's own undici pin.
- Lockfile sources (raw): https://raw.githubusercontent.com/openclaw/openclaw/main/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.5-beta.2/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.3/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/v2026.9.37/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/v2026.10.10/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/release/2026.11.4/pnpm-lock.yaml · https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.3/ui/package.json · https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.5-beta.2/ui/package.json · https://raw.githubusercontent.com/openclaw/openclaw/main/ui/package.json
- `main`'s `package.json` now pins `"npm": "12.2.1"` (https://raw.githubusercontent.com/openclaw/openclaw/main/package.json) — i.e. maintainers moved the npm pin but stopped one release short of the fixed 12.2.2. **No PR or commit bumping npm to 12.2.2 was found in the window.**
- Practical consequence: `main` today is 100% clean except one transitive; a single dependency bump to `npm@12.2.2` on `main` (plus cutting `release/2026.11.4` from a tree with dompurify 3.4.17) would produce the first clean stable.

### 2. v2026.11.5-beta.2 now HAS an npm artifact (contradicts yesterday's "no npm artifact")

- npm publish: **2026-11-11T23:33:44.647Z**, inside the window. `dist-tags`: `beta: 2026.11.5-beta.2`, `latest: 2026.11.3`, `extended-stable: 2026.9.37`.
  Source: https://registry.npmjs.org/openclaw (`time["2026.11.5-beta.2"]`).
- GitHub release **v2026.11.5-beta.2** published **2026-11-12T00:43:25Z** (prerelease=true), body 12,965 chars.
  Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.5-beta.2
- No new **stable** release: latest remains 2026.11.3 (2026-11-10T18:53:07Z), extended-stable 2026.9.37 (2026-11-10T20:42:54Z).
  Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=5
- beta.2 release notes carry **two new "Security:" fixes** (verbatim): "reject malformed URI identifiers using fast-uri 4.2.3" (#187284) and "reject oversized bounded collections early in the Discord SDK and its transitive Zod 3 parser" (#187296 #187303). Notably the notes **do not mention** the dompurify bump (grep of body: `dompurify` 0 hits, `undici` 0 hits) — the sanitizer fix ships silently in the tree.
- Highlights in beta.2: paged/bounded conversation history in both directions (#188450 #188483 #188557 #188372 #190690), macOS app preserving saved secrets + Gateway auth when config saves fail (#187734 #187664), Talk-on-Android no longer cancelling accepted Gateway work (#188798).

### 3. ClawStat verdict changed: `wait` → `care` ("Update with care"), and its recommendation moved off 2026.10.10

- `https://clawstat.us/latest.json` (assessed_at **2026-11-12T06:46:48Z**, app_version 1.3.10):
  - `version: 2026.11.3`, `recommendation: ⚠️`, `status.key: "care"` (label "Update with care") — **changed from `wait` yesterday**.
  - `recommended_version` is now an **object**: `{version: 2026.11.1, kind: "settled", published_at: "2026-11-05", age_days: 7, recommendation: ⚠️, blocker_count: 2}` — i.e. yesterday's `recommended_version 2026.10.10` is no longer the recommendation. Blockers listed: #193962 (SQLite header-probe timeout, high), #194662 (notification-driven wake invents a sender, high).
  - Headline: "Broadly solid release, but this stable ships a dompurify pin with an open critical advisory; security-conscious users may want to wait". Confidence: medium.
  - `latest_prerelease` now points at **v2026.11.5-beta.2** (published_at "2026-11-12").
  - ClawStat's own thesis independently confirms our finding: "The 3.4.17 fix is staged only in v2026.11.5-beta.2 and main — it is not in stable 2026.11.3, nor even in the release/2026.11.4 branch."
- ⚠️ Contradiction worth flagging: ClawStat's `recommended_version` = **2026.11.1**, which ships dompurify 3.4.16 and npm 12.2.0 → vulnerable to both dompurify advisories and to the bundled-undici advisory. ClawStat's own recommendation is therefore not a security-clean build. Same for yesterday's 2026.10.10.

### 4. Issue #196925 (dompurify in stable) is still open — no fix PR landed in the window

- GitHub issue search `repo:openclaw/openclaw dompurify updated:>2026-11-10T09:28:00Z` returns only 2 hits: #144324 (unrelated PR: LaTeX in Control UI markdown) and **#196925 (open)** — "Stable 2026.11.2/11.3 (and release/2026.11.4) ship dompurify 3.4.16 under GHSA-c…" (updated 2026-11-11T00:20:49Z).
  Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+dompurify+updated:%3E2026-11-10T09:28:00Z
- So the dompurify fix exists **only** in `main` and `v2026.11.5-beta.2`; there is no PR, no issue closure, no stable cut. The `release/2026.11.4` branch still carries dompurify 3.4.16 / npm 12.2.0 (https://raw.githubusercontent.com/openclaw/openclaw/release/2026.11.4/pnpm-lock.yaml).

### 5. New P0s: 3 (all the recurring "Update failure" pattern) — repo-wide open P0 313 → **314**

- #197622 (open, 2026-11-12T07:55:09Z) "Update failure: managed-service-preflight (2026.9.3)"
- #197399 (open, 2026-11-11T22:19:56Z) "Update failure: activating (2026.11.3)"
- #197309 (open, 2026-11-11T17:26:07Z) "Update failure: package-update (2026.11.1)"
- Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-11T09:28:00Z..2026-11-12T09:28:00Z+label:P0
- Repo-wide open P0 count: 314 (was 313 at window close yesterday) — https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+is:open+label:P0
- No P0 was closed in the window; #196249 was already closed 2026-11-10T17:54:32Z.

### 6. 26 new P1 issues — the window's themes are cron/subagent/loop-hygiene and update-path breakage

Source for all: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-11T09:28:00Z..2026-11-12T09:28:00Z+label:P1

Most consequential (open unless noted):
- **#197552** "Every isolated cron `agentTurn` gets zero tools since 2026.10.10 ('No callable tool…')" — tool-loss regression attributed to a 2026.10.10 change; still open.
- **#197558** "Subagent registry sweep blocks the Gateway event loop for 16–18 s every ~76 s" — closed in-window (2026-11-12T05:34:06Z).
- **#197591** "config hot-reload aborts in-flight cron runs and records a misleading 'Gateway shutt…'"
- **#197578** "fix(cron): startup catch-up launches `command` jobs before the owning agent database is ad…" (PR-style issue)
- **#197337** "Gateway shutdown hangs with an isolated recurring cron job (2026.11.2 / 2026.11.3)" — same class as yesterday's #197337 note; **affects the current stable**.
- **#197320** "`openclaw update` from 2026.11.3 to main fails: PostgreSQL Workboard install refuse…" — relevant to the upgrade path off the vulnerable stable.
- **#197331** "2026.10.10: each sessions.delete can leave a ~150 MB SQLite reclamation worker alive for 3…" (resource leak, still open)
- **#197616** "Control UI: changing thinking effort can permanently wedge the composer send queue"
- **#197665** (closed 09:14:31Z) "Gateway runs the `stale-lease-full` agent-DB integrity scan synchronously on its ma…"
- **#197422** "Talk keeps delegating after the Control UI Gateway socket drops"
- **#197351** "browser: agent call via extension relay has no effective timeout"
- **#197338** "Linked Microsoft Teams members lose role authority during sessions_send delegation"
- **#197181** (closed) "[Bug]: 2026.11.5-beta.1 `message` tool always fails with 'turn capability is no longer act…'" — a beta.1 defect, already closed.
- **#197195** "Report on 78 days of automated upgrades on the dev branch using Codex" (open, user-submitted telemetry report)

### 7. Core repo stats — activity cooled vs yesterday; open issue count fell sharply

| Metric | 2026-11-11 window close | 2026-11-12 window close | Δ |
|---|---|---|---|
| stars | 394,315 | **394,380** | +65 |
| open issues (GitHub `open_issues_count`, includes PRs) | 8,175 | **8,058** | −117 |
| new issues | 148 | **116** | −32 |
| new PRs | 454 | **392** | −62 |
| merged PRs | 367 | **290** | −77 |
| open P0 repo-wide | 313 | **314** | +1 |

Sources: https://api.github.com/repos/openclaw/openclaw · https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-11T09:28:00Z..2026-11-12T09:28:00Z · …+is:pr+created:… · …+is:pr+is:merged+merged:…
The −117 open-issue drop alongside −77 merged PRs suggests a mass-closing/triage pass; the stars delta can include unstars, so treat +65 as approximate.

### 8. Enterprise repo: high commit volume, no release, no customer announcement

- **181 commits** in the window (GitHub `Link` header, per_page=1 → last page 181), **180 merged PRs**, **4 new issues** (2 open, 2 closed).
- Stars 457 → **459**; open issues 339 → **351**.
- New issues: #5603 "Local docs preview cannot open existing WebM walkthroughs inline" (open), #5600 "Documentation navigation configuration links return 404" (open), #5596 "Hosted Codex catalog marks app-only plugins unavailable without legacy executor…" (closed), #5515 "Enabling OpenShell Git integration breaks Agent creation through the Console" (open).
- No enterprise GitHub release (https://api.github.com/repos/openclaw/openclaw-enterprise/releases → empty).
- Merged-PR titles in-window are engineering/CI/docs heavy — TypeScript migration of CI runner tests (#5644 #5642 #5641 #5640), candidate application DB verification before stopping writers (#5639), Kubernetes runtime-credential confirmation (#5633), catalog/hosted-plugin fixes (#5598), dependency bumps. **Zero PRs matched customer/press/case-study/announcement keywords** → no enterprise customer announcement in the window.
- Sources: https://api.github.com/repos/openclaw/openclaw-enterprise · https://api.github.com/repos/openclaw/openclaw-enterprise/commits?since=2026-11-11T09:28:00Z · https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-11T09:28:00Z..2026-11-12T09:28:00Z · https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:issue+created:2026-11-11T09:28:00Z..2026-11-12T09:28:00Z
- Newest official narrative remains the OCE launch blog of 2026-09-29 — no new enterprise blog/press item in the window.

### 9. npm downloads — data for 11-11/11-12 is still missing (publication lag); latest real day up ~6.8% WoW

- `https://api.npmjs.org/downloads/point/2026-11-11:2026-11-12/openclaw` → **0**; `point/2026-11-12:2026-11-13` → also unavailable.
- `https://api.npmjs.org/downloads/range/2026-11-05:2026-11-12/openclaw` → 11-05 369,131 · 11-06 504,091 · 11-07 493,523 · 11-08 403,698 · 11-09 349,424 · 11-10 **427,925** · 11-11 **0** · 11-12 **0**.
- Same-weekday comparison: 11-10 (Tue) 427,925 vs 11-04 (Tue) 400,586 → **+6.8%**.
- Trailing 7 complete days (11-04 → 11-10) = **2,948,378** downloads. Prior week (10-27 → 11-03) = 391,520+341,738+384,516+375,102+292,528+318,468+321,275+393,121+400,586 = 3,218,854 (overlapping window definition; treat as indicative only).
- **Endpoint-semantics correction for the tracker:** both `point` and `range` are **inclusive of the start date**. Verified: `point/2026-11-04:2026-11-05` = 769,717 = 400,586 (11-04) + 369,131 (11-05). Yesterday's note that "the range endpoint is END-EXCLUSIVE" is wrong for this API. The 0s for 11-11/11-12 are publication lag, not a traffic collapse.

### 10. ClawHub — 109 new skills in-window; **the "0" reading from yesterday is refuted**

- Endpoint: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200
  - The API **caps the result set at ~197 items** (limit=100 → 97 items; limit=200 and limit=1000 → 197 items) and **ignores the `cursor` parameter** (passing the returned `nextCursor` returns the identical page). `order=asc` is also ignored (still returns newest-first). So all counts here are *enumerations of a capped window*, never catalogue totals.
  - The 197-item page spans **2026-11-10T15:58:05Z → 2026-11-12T09:16:06Z**, i.e. it reaches back past the window start, so every in-window skill is visible.
- **In-window (2026-11-11T09:28:00Z → 2026-11-12T09:28:00Z): 109 new skills** — 69 on 11-11 (after 09:28Z) + 40 on 11-12.
- **Publisher concentration: 70 distinct publishers; top publisher `roshanjonah` 11 skills (10.1%), then `cxdanger123-commits` 8 (7.3%), then five publishers at 3 (2.8%) each; top-5 = 25.7%.** Concentration is materially lower than yesterday's community reading (top publisher 32%) — i.e. today's inflow is broad-based, not a single spammer. 107 distinct slugs among 109 items (2 duplicate slugs).
- **Dispute resolution:** yesterday's platform pass reported "ZERO new skills, possible ingestion pause" (max `createdAt` 2026-11-10T09:17:59Z), while the community pass reported 149. Today's enumeration shows a **live, advancing feed** with 109 in-window skills and 41 skills on 11-10 after 15:58Z; combined with 11-11's 69 post-09:28Z skills, the prior window (11-10 09:28Z → 11-11 09:28Z) is consistent with the community pass's ~149. **Conclusion: yesterday's platform "0" was a fetch/read anomaly (or a stalled API response), not a genuine publishing pause; the community pass's ~149 was the correct reading.**
- No ClawHub incident, moderation notice, or supply-chain warning appears in the window (skill payloads inspected only for metadata; engagement counters remain unusable — many one-day-old skills already show non-zero "downloads").

### 11. Official content: nothing new; showcase still byte-identical

- `https://openclaw.ai/rss.xml` — 25 items, newest pubDate **Fri, 06 Nov 2026** ("Use new models in OpenClaw without an update"); second newest 2026-11-05. **No blog post published in the window.**
- `https://openclaw.ai/showcase` — **byte-identical** to the copy stored on 2026-11-10 (md5 `72af42550b4aeadc1aece19bca286ebe` for both) → the showcase page remains frozen, third consecutive day.
- `https://openclaw.ai/press` — HTTP 200, 74,763 bytes, but **no dated entries newer than May 2026** → no new press/customer item.
- `https://openclaw.ai/sitemap.xml` — includes `/publications/clawhub-security-signals.pdf`; URL set otherwise unchanged (no new top-level pages).
- Repo security-advisory feed (https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=100) — 100 advisories returned, newest **published 2026-09-11**; **no advisory published or updated inside the window**.

### 12. External coverage: nothing new in the window (web_search worked this run)

- Two DuckDuckGo searches ("OpenClaw security advisory CVE November 2026", "OpenClaw 2026.11.5 beta release notes") returned only evergreen aggregator/SEO pages about the **Feb–Apr 2026** OpenClaw CVE wave (CVE-2026-25253, malicious-ClawHub-skill campaigns) and generic release-index pages. **No dated 2026-11-11/12 coverage, no new incident, no new CVEs** — consistent with finding #11 (advisory feed flat since 2026-09-11).
- Note for the tracker: **web_search was NOT blocked by a DuckDuckGo bot challenge this run** (provider `duckduckgo`, ~1 s per query) — the budget was spent mostly on primary API reads instead.

## Caveats

1. **Exploitability of the bundled-undici exposure is UNVERIFIED.** The undici copy inside `npm@12.2.0/12.2.1/11.20.0` is below the patched line (6.28.0/6.29.0 < 6.29.1), but I could not show that OpenClaw exercises npm's *bundled* undici for outbound TLS with the vulnerable `Agent` options. The advisory's vulnerable range does cover those versions. Treat "stable is still technically affected" as source-verified; "stable is exploitable" is not demonstrated.
2. **ClawHub counts are enumerations, not totals** (API caps at ~197 items, ignores `cursor`, ignores `order=asc`). 109 is a *complete* in-window count only because the capped page reaches back before the window start; the previous window's true count cannot be re-derived from today's feed.
3. **npm download data for 2026-11-11 and 2026-11-12 is not yet published** (both endpoints return 0). All download figures for the window itself are unavailable; only the 11-10 value and earlier are real.
4. **Stars delta (+65) is approximate** — GitHub's stargazers count can move down as well as up.
5. **GitHub `open_issues_count` includes open PRs**, so "open issues 8,058 (−117)" mixes issue and PR state; the drop coincides with 290 merges and looks like a triage/closing pass, not a fix wave.
6. **`release/2026.11.4` branch state is a snapshot** (SHA 483c9df267d99ba9a01f02f07d12bf14e03afa27); the branch can change before the cut, so "the next stable would ship vulnerable" is true *as of this snapshot only*.
7. **beta.2 is a prerelease**, not a supported stable; recommending it as "the patched build" is only valid for people who accept prerelease risk. The beta.2 release notes do not mention the dompurify bump, so the security delta is undocumented upstream (verified by grep of the release body).
8. **ClawStat's `recommended_version` semantics changed shape** between windows (a string "2026.10.10" yesterday vs an object today) — downstream parsers expecting a string will break; also note that both its current and previous recommended versions are vulnerable to the dompurify advisories, which its own thesis acknowledges.
9. **Enterprise "no customer announcement" is scoped** to merged-PR titles, the releases endpoint, openclaw.ai/rss, /press and /showcase. A customer announcement published on a third-party channel (LinkedIn/X/press wire) would not have been captured; my two web searches did not surface one, but they were not exhaustive.
10. **Blocked/failed calls:** none hard-blocked this run. `web_fetch` was not used (all reads were direct `curl` against the same primary endpoints), so 2 of 2 `web_fetch` budget and 3 of 5 `web_search` calls remain unused. One earlier mistake self-corrected: `package-lock.json` does not exist in this repo (it is pnpm — `pnpm-lock.yaml`); the first lockfile probe returned non-JSON and was discarded.
11. **Cross-pass contradiction to carry into synthesis:** yesterday's platform pass said ClawHub "0 new skills"; today's enumeration of a live feed gives 109 in-window and implies ~149 for the prior window — the community pass was right, the platform "0" was a bad read.

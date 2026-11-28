# OpenClaw Platform Findings — 2026-11-06

**Window:** 2026-11-05T09:28Z → 2026-11-06T09:28Z (24h)
**Collected:** 2026-11-06 ~09:28–09:40Z
**Method:** GitHub REST API (auth), npm registry + downloads API, ClawStat.us JSON, openclaw.ai RSS/showcase, DuckDuckGo web search. Raw JSON cached in `/tmp/diac20261106/`.

---

## HEADLINE

**A new stable release shipped inside the window: `v2026.11.1` (GitHub published 2026-11-05T09:48:37Z, npm published 2026-11-05T09:41:26Z) — 20 minutes after the window opened.** This supersedes the `2026.10.10` baseline, and the official blog posted its first article in 16 days the same evening ("Shattering Silos with OpenClaw Multiplayer", 2026-11-05T17:00Z). No new GitHub advisory was published, but one existing advisory was materially re-touched inside the window (see F-6).

---

## F-1 — New stable release `v2026.11.1` (NEW, in-window)

- **Source:** https://api.github.com/repos/openclaw/openclaw/releases (tag `v2026.11.1`, published 2026-11-05T09:48:37Z, prerelease=false, draft=false, 21 assets)
- **Source:** https://registry.npmjs.org/openclaw → `time["2026.11.1"] = 2026-11-05T09:41:26.297Z`
- **Baseline:** latest stable `2026.10.10` (published 2026-11-03T03:22:35Z / npm 2026-11-03T02:26:08Z); latest pre-release `2026.11.5-beta.1` (GitHub 2026-11-04T04:51:56Z / npm 2026-11-04T04:01:35Z).
- **Now:** stable `2026.11.1`; npm dist-tags: `latest=2026.11.1`, `beta=2026.11.5-beta.1`, `extended-stable=2026.9.36`.
- **Anomaly worth flagging:** the beta line (`2026.11.5-beta.1`, published 2026-11-04) carries a *higher* version number than the stable that shipped after it (`2026.11.1`, published 2026-11-05). Version ordering here does not imply chronological ordering — treat "latest beta" as *older* than "latest stable".
- **Changelog themes (Highlights + Fixes, condensed):**
  - Safer Mac settings — failed config saves no longer overwrite secrets; disabling Tailscale exposure keeps Gateway auth intact (#187734, #187664).
  - Channel-reply reliability for Telegram / Discord / webhooks after request handlers or earlier turns finish (#179200, #179385, #179704, #189457).
  - Conversation survival across oversized turns and interrupted Claude CLI turns (#191146, #181966, #186380).
  - Update-recovery hardening: unstuck crashed/canceled updaters, Windows Gateway restored after failed verification, no repeated full-DB copies (#177932, #186787, #189647, #182632, #187921).
  - Subagent follow-ups survive model/session changes; parent sessions receive child approvals with a custom session store (#186238, #183501, #189827).
  - Provider recovery honors provider rate-limit timing; Gemini Flash text models default to Interactions on the official API-key endpoint (#180280, #189395).
  - Security hardening: ClickClack/ClawHub reject redirects into unrelated private services; Discord CDN downloads no longer inherit browser private-network access; FIFO native-hook credentials rejected without hanging; managed proxy rejects chains relying on the distrusted emSign ECC G3 root (#190944, #190939, #191458, #191423, #179249).
  - Long tail of ~30 categorized fix groups (channel recovery/delivery, iMessage storage, session/agent authority, prompt caching, Codex continuity/replies, plugin lifecycle, gateway startup/shutdown, Control UI recovery, doctor migrations, etc.), mostly credited to @RomneyDa, @steipete, @anmol0b, @duyufansh2008 and community contributors.
- **Assessment:** the release is net-positive and security-hardening-heavy, but it is 1 day old and the ecosystem is already filing version-specific regressions against it (F-4).

---

## F-2 — Repository metrics: baseline → now

- **Source:** https://api.github.com/repos/openclaw/openclaw

| Metric | Baseline (2026-11-05T09:28Z) | Now (2026-11-06 ~09:29Z) | Δ (24h) |
|---|---|---|---|
| Stars | 393,937 | **394,020** | **+83** |
| Forks | 82,784 | **82,805** | **+21** |
| open_issues_count (incl. PRs) | 7,695 | **7,634** | **−61** |
| Subscribers | 1,698 | **1,693** | **−5** |
| pushed_at | 2026-11-05T09:22Z | **2026-11-06T09:28:58Z** | continuous |
| updated_at | — | 2026-11-06T09:21:51Z | — |

- The repo stayed under continuous commit pressure through the window (pushed_at advanced by ~24h to the exact window end).
- **Subscribers fell 5** while stars rose 83 — consistent with the observed pattern of star growth outpacing watcher retention; not a signal on its own.
- Cross-check of the open-item count: `is:issue is:open` = **4,719** and `is:pr is:open` = **2,912** → 7,631 ≈ 7,634 (GitHub's counter is a live snapshot and may lag by a unit or two).

---

## F-3 — Throughput: issues, PRs, merges, closes

- **Source:** GitHub Search API, `repo:openclaw/openclaw`, window-scoped queries.

| Metric | Prior 24h (11-04→11-05) | Window (11-05→11-06) | Δ |
|---|---|---|---|
| Issues created | 142 | **134** | −8 (−5.6%) |
| PRs created | 542 | **559** | +17 (+3.1%) |
| PRs merged | — | **396** | — |
| Issues closed | — | **247** | — |
| Open PRs (total, all time) | — | **2,912** | — |
| Open issues (total, all time) | — | **4,719** | — |

- Net issue flow in-window: 134 created vs 247 closed → **−113** on the open-issue backlog. Combined with the 7,695→7,634 drop in `open_issues_count`, the queue is shrinking for the first time in this window (the small rise in open PRs, +17, offsets it).
- **PR theme mix (sample of 100 newest, of 559):** fix 68 · feat/improve 13 · perf 8 · test/ci/chore/docs 11.
- **Emergent feature cluster — "OpenClaw ID" node enrollment.** A tight group of PRs (#193980, #193982, #193990, #193993, #193994, #194001, #194007) introduces **accountless node enrollment** over an OpenClaw ID tunnel, owner-approved pairing, private-preview/staging defaults, and revocation-safety for delegated owner devices. This is the most consequential new *capability* thread in the window, independent of the release.
- Other PR clusters: node-host/iroh-node work, iOS release-archive overlap work, markdown-core NaN-chunk-limit fix (3 near-duplicate PRs: #193942, #193956, #193973/#194020), sandbox default-image breakage (#193986), update-path fixes (#193941, #193970, #194018, #194042), Control UI perf (WebKit churn, sidebar caching, style recalculation).

---

## F-4 — New issues filed against the new release (version-specific regressions)

- **Source:** GitHub Search API `is:issue created:2026-11-05T09:28:00Z..2026-11-06T09:28:00Z` (both pages, 134 total).

**Update-failure family — 10 reports in-window (9 on page 1, 1 on page 2):**
- #194038 runtime-artifact-publication (2026.10.10) · #194035 package-update (2026.10.10) · #194016 package-update (2026.10.10) · #194011 gateway-stop-unverified (2026.10.9) · #193978 update (2026.11.1) · #193684 runtime-verification-failed (2026.9.3) · #193591 package-update (2026.10.10) · #193560 gateway-recovery-verification (2026.10.10) · #193511 invalid-config (2026.11.1) · #193441 package-update (2026.10.10).
- These target **four different source versions** (2026.9.3, 2026.10.9, 2026.10.10, 2026.11.1) and are spread across update phases — ambient churn, not a confirmed single shared regression. Lower bound: **≥10 update-failure reports in 24h.**

**Potentially release-specific regressions (highest-signal items):**
- **#193540** — "Starting with version 2026.11.1, the iOS 18 web UI is no longer accessible." (2026-11-05T14:57Z, open, 1 comment). A device/surface-specific regression attributed by the reporter to the new release.
- **#193590** — "2026.11.1 retained-session rehearsal stalls before inference; CPU dominated by admission publish" (single Linux ARM64 install, 24k-session corpus).
- **#193978** — "Update failure: update (2026.11.1)" and **#193511** — "Update failure: invalid-config (2026.11.1)": two update-path failures filed directly against the new stable.
- **#193964** — "Update to 2026.11.5-beta.1 breaks all sandboxed turns: default image moved to openclaw-sandbox:tri…"; fix PR #193986 open.
- **#193928 / #193942 / #193956 / #193973 / #194020** — markdown-core `chunkText` silently drops the whole outbound message when the chunk limit is NaN. Reproduced against `main`; multiple competing fix PRs in-window (P2, message-loss class).
- **#193540** is corroborated in ClawStat's own flip conditions as the item to watch: "iOS users should hold until the next stable ships a fix; the v2026.11.5-beta.1 pre-release is already staged."

**Other notable issue themes in-window (134 total):** cron/session lifecycle 10 · Control UI 8 · macOS 6 · iOS 6 · Windows 4 · Telegram 3 · Android 3 · Discord 1 · features 5 · other 45.

---

## F-5 — Security advisories: no new publication, one in-window update

- **Source:** https://api.github.com/advisories?affects=openclaw&per_page=100 (sorted by `updated` desc for the update check).
- **New advisory published since baseline (GHSA-3x84-qq85-fj65, 2026-10-21): NONE.** The full set is 100+ advisories; the newest publication remains **GHSA-3x84-qq85-fj65** (medium, "Browser CDP discovery could accept blocked WebSocket URLs", 2026-10-21T19:37:42Z) — now **16 days old**.
- **BUT — an advisory was updated inside the window:**
  - **GHSA-hggm-x7r9-mm7v** — "OpenClaw is vulnerable to Path Traversal through path validation bypass", **high**, CVSS 3.1 **7.5** (AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N), CVE-2026-32846. Published 2026-03-26, **updated 2026-11-05T20:48:29Z** — i.e. ~11 hours into the window. Vulnerable range `<= 2026.3.23`, first patched `2026.3.28`. Not withdrawn (`withdrawn_at: null`). Affected package: npm `openclaw`.
  - The advisory body describes the flaw as bypassing `isLikelyLocalPath()` / `isValidMedia()` via the `allowBareFilename` bypass, enabling arbitrary file reads (system files, env files, SSH keys). Since the fix shipped in 2026.3.28 the *practical* exposure is old; the in-window timestamp is a metadata/rewrite event, not a fresh 0-day. Treat as **"advisory touched, no new CVE"**.
- No other advisory in the set was modified after 2026-10-21 except this one; next-most-recent updates are 2026-08-28 batch and 2026-10-21 (GHSA-jw7v-5mp7-ghgm duplicate advisory, same CDP-WebSocket issue).

---

## F-6 — Third-party tracker (ClawStat.us)

- **Source:** https://clawstat.us/latest.json (app_version 1.3.9, assessed_at **2026-11-06T06:12:29Z** — ~3h before this run).
- **Baseline (2026-11-05):** recommended `2026.10.9`, label "Update with care", 1 blocker (#191717), 75 tracked / 14 fixed for 10.10.
- **Now:**
  - Assessed version = **2026.11.1**; `recommendation = ✅`; `confidence = medium`; `status = {key: "wait", label: "Too new to call", early_read: "Safe to update"}`.
  - Headline: *"Fine for most setups — a quiet release with scattered update-failure and edge-case reports, none confirmed widespread."*
  - **evidence_gate: verdict ✅, blocker_count = 0, blockers = [], widespread = [], serious = []** — "No credible blocking issue is confirmed for this version."
  - Calibration: 31 tracked issues, **5 total 👍**, max 3 on any single report, npm weekly downloads 2,485,596.
  - `freshness`: fresh=true, days_since_release=1, runs_assessed=3, version_specific_issues=26, carried_over_issues=5. `issues_capped=false` (cap 60). `hotfix_chain = []`.
  - **Label shift:** "Update with care" → **"Too new to call"** — the tracker moved from a settle-the-book verdict to a wait-and-see verdict because the release is 1 day old. This is a *methodology* state, not a deterioration.
  - **Recommended-version field changed shape:** `recommended_version` is now an object — `{version: "2026.10.9", kind: "settled", published_at: "2026-10-29", age_days: 8, recommendation: "⚠️", gate: "⚠️", blocker_count: 5, min_days: 7, considered: 10}` with blockers **#187911, #190563, #187309, #188165, #187900** (2–3 critical, 2 high). The baseline's single blocker **#191717 is no longer present anywhere in the JSON** — it has been retired/rotated out of the tracked set, not re-listed.
  - ClawStat's own caveat (worth repeating): tracked-issue *counts* are not comparable across releases because the tracker hunts worst reports and saturates its cap; only composition and engagement are signals.
  - **Flip conditions (explicit):** (a) update-failure reports #193441/#193684/#193591/#193734 confirmed to share a root cause or draw dozens of 👍 / a megathread; (b) #193928 (NaN chunk limit) confirmed to hit *released* 2026.11.1 in production channels, not just `main`; (c) #193540 (iOS 18 web UI) gaining corroborating reports → iOS users should hold.
- **Field gap:** the baseline's `maintenance_velocity` field does **not exist** in the current payload (no key by that name anywhere in the JSON). Maintenance velocity must be inferred from `track_record` (version → run count → recommendation path): 2026.11.1 → 3 runs, path [✅], "held"; 2026.10.10 → 7 runs, path [✅,⚠️], "hardened"; 2026.10.9 → 10 runs, path [⚠️], "held"; 2026.10.8 → 6 runs, "hardened". Multiple older versions show the same ✅→⚠️ "hardened" pattern as they age.

---

## F-7 — npm downloads: release-decay analysis (corrected)

- **Source:** https://api.npmjs.org/downloads/range/2026-10-01:2026-11-05/openclaw and `.../point/...`.
- **Already-resolved baseline (re-verified, unchanged):** 11-03 = 393,121 · 11-04 = 400,586 (+1.9%) · 11-05 = 0 · last week 10-29..11-04 = 2,485,596. Confirmed by direct API read: `point/2026-10-29:2026-11-04` = 2,485,596. ✓

**Weekly trend (this is the real decay signal, and it is larger than D1/D2 suggests):**

| Week | Downloads | Δ |
|---|---|---|
| 10-04 → 10-10 | **4,122,275** | peak week |
| 10-11 → 10-17 | 2,273,669 | −44.8% |
| 10-18 → 10-24 | 2,025,515 | −10.9% |
| 10-25 → 11-01 | 3,246,432 | +60.2% |
| 10-29 → 11-04 (last full week) | **2,485,596** | −23.4% vs prior 7-day |

- **Peak day in the Oct window: 2026-10-08 = 998,928** (highest single day in the whole series). It sits one day after `2026.10.1-beta.2` (npm 2026-10-07T23:36:22Z) and the same day as stable `2026.9.9` (2026-10-08T09:38:01Z) — i.e. the Oct peak was a **pre-release + stable double-hit**, not a 10.10 event.
- **Correction to the framing in the brief:** the brief states "Release 2026.10.10 landed ~2026-10-10". Registry timestamps say otherwise — `2026.10.10` was published to npm **2026-11-03T02:26:08Z**. The release that landed on 10-10 was `2026.10.1` (npm 2026-10-10T22:45:05Z, stable), with betas `2026.10.1-beta.1` (10-05) and `-beta.2` (10-07). The 10-08 peak therefore precedes and drives that landing, which is why the D1/D2 numbers for 11-03/11-04 measure the *2026.10.10* bump, not a 10-10 bump.
- **D1/D2 for the 2026.10.10 release (as briefed):** D1 (11-03) = 393,121, **+22.4%** over 11-02 (321,275); D2 (11-04) = 400,586, **+1.9%**. So the release bump front-loaded hard and flattened almost immediately.
- **D3 (11-05) = 0 in the API — do not read this as a collapse.** Two reasons: (1) `2026.11.1` was published to npm at 09:41Z on 11-05, so 11-05 is the first day of the *next* release cycle and any bump it carries is unmeasurable; (2) the npm downloads series for this package contains **multiple genuine missing-day zeros** in the same range (10-06, 10-13, 10-14, 10-15, 10-19, 10-20, 10-21 — all `0` amid non-zero neighbours), which is an API publication-lag artifact, not zero demand. The correct read of "the spike has collapsed" is: **the October peak week (4.12M) is down ~40% to the current weekly run-rate (2.49M), and the 11-03 bump decayed from +22.4% to +1.9% in one day — but the new 2026.11.1 bump is simply not in the data yet.**
- **Measured forward:** watch 11-06 and 11-07 daily values for the `2026.11.1` bump. If the D1→D2 flattening pattern repeats, expect 11-06 ≈ 430–470k and 11-07 ≈ 430–490k; a re-acceleration above 500k would signal genuine 11.1 adoption pull.

---

## F-8 — Official blog RSS: silence broken

- **Source:** https://openclaw.ai/rss.xml (10,697 bytes)
- **Baseline:** newest post = "Come Build With Us: OpenClaw Focus Weeks" (2026-10-21) — 16 days of silence.
- **Now:** newest post = **"Shattering Silos with OpenClaw Multiplayer"**, `pubDate` **Thu, 05 Nov 2026 17:00:00 GMT**, https://openclaw.ai/blog/shattering-silos-with-openclaw-multiplayer/ — published 7.5h into the window.
- Post sequence now: Multiplayer (11-05) → Focus Weeks (10-21) → How PJ helps small businesses (10-16) → Tencent AIG joins ClawScan (10-02) → OpenClaw Enterprise (09-29).
- **Content substance (fetched):** positions **OpenClaw Multiplayer** as shipped, not previewed — the flagship multi-user feature: two laptops driving **one shared agent / one shared workspace**, prompts mirrored live across clients, requests coordinated through a **shared queue** so users see when the agent is busy instead of sending conflicting instructions. Framed explicitly as an **enterprise** story ("silos got worse with AI" — every department now has its own agent, its own model, its own context). Demonstrated live at **GitHub Universe** in San Francisco (two laptops + a live 3D Fort Mason scene, attendees adding the Statue of Liberty). The post notes the OpenClaw Foundation has "more than a dozen full-time Maintainers" and a large AI-native contributor community.
- Reading: the marketing push has pivoted from "Focus Weeks / community contribution" (10-21) to a **product-launch narrative aimed at enterprise buyers**, timed the same day as the `2026.11.1` stable release. Earlier press coverage (Sept) framed Multiplayer as the headline of "OpenClaw 2.0"; this post is the GA/enterprise-landing framing of the same feature.

---

## F-9 — Showcase page: unchanged

- **Source:** https://openclaw.ai/showcase (fresh fetch) vs snapshot `tmp/showcase_2026-11-05.html`.
- **Byte count: 150,868 bytes — identical to baseline. `diff` = 0 lines.** No featured-build additions, removals, or edits in the window.
- Featured builds (unchanged): "15+ Agent Army Running Across 3 Machines" · "Personal Operating System With Daily Briefings" · "Voice-Guided Production Fix While Walking the Dog" · "One Chat Controlling Mail, Messages, Orders, Calls, and a Vault" · "Entire Website Rebuilt From Telegram" · "Family Meal Planning System Built Overnight".
- Note: the showcase is byte-stable while the blog gained a post and the repo gained 83 stars — the public showcase surface is maintained on a slower cadence than the release channel.

---

## F-10 — Enterprise repo: openclaw/openclaw-enterprise

- **Source:** https://api.github.com/repos/openclaw/openclaw-enterprise

| Metric | Baseline | Now | Δ |
|---|---|---|---|
| Stars | 453 | **454** | +1 |
| open_issues_count (issues + PRs) | 253 | **283** | **+30** |
| Forks | — | 106 | — |
| Subscribers | — | 3 | — |
| pushed_at | — | **2026-11-06T09:22:33Z** | active |
| updated_at | — | 2026-11-06T09:17:08Z | — |

- **Breakdown of the 283:** `is:pr is:open` = **163**, `is:issue is:open` = **120** → 283 exactly.
- **Merge throughput:** **113 enterprise PRs merged inside the window** — an order of magnitude more than the main repo's PR-star growth would suggest; enterprise is where the shipping velocity is concentrated.
- **In-window item mix (30 newest):** 29 PRs / 1 issue. The single new issue: **#4880 — "[M9.18] Evaluate enterprise plugins for the OpenClaw Harness"** (open) — a plugin-evaluation track item, and the only non-PR enterprise item in the newest 30.
- **Themes in the 10 newest (all PRs):** CI matrix observability (#4898 report a failed CI matrix job once, show each lane's result) · repository broker mounted-file reader (#4897) · OpenShell runtime build termination in CI (#4896) · **Notion, Microsoft 365 Work IQ, and GitHub plugins for dedicated OpenClaw (#4895)** · Console native admin popups over trusted loopback HTTPS (#4894) · protected Gateway validation in the OpenShell adapter (#4893) · pnpm impact advisory → TypeScript migration (#4892) · shared cleanup-status parsing between Git control and receipt protocols (#4891) · metrics monitoring readiness typing (#4890) · **RFC-0030: bind dedicated Codex turns to their Sandbox execution (#4889)**.
- **Interpretation:** three enterprise themes dominate — (1) **M365/Notion/GitHub connector plugins for the dedicated deployment**, (2) **OpenShell runtime + protected-Gateway-validation hardening**, and (3) **sandbox-bound agent execution (RFC-0030)**. Combined with the OpenClaw ID enrollment PRs in the main repo and the Multiplayer enterprise blog post, the day's story is coherent: **enterprise-grade shared/managed agent deployment is the active product line.**

---

## F-11 — External press (sampled via DuckDuckGo, 5 searches, 1 bot-block)

- **Sources:** https://www.theclawreport.com/ · VentureBeat · Red Hat blog · openclawconsult.com · secondary commentary sites.
- **The Claw Report** (fetched, "Last updated: November 06, 2026") is running **one day behind on its lead story**: today's top story is still *"The OpenClaw team has published v2026.10.10…"* — it has not yet covered `2026.11.1` or the Multiplayer post. Its Nov-01 entry does list *"v2026.11.1 — a small patch release that improves update reliability, conversation handling, native app behavior, and provider connections"* (via docs.openclaw.ai) and its Nov-02 entry (SEN-X) notes *"10.10 is stable on npm latest, main has fixed a locked-database update bug, and the 11.1 beta line is closing out reliability repairs."* Its Oct-29 entry surfaces **CVE-2026-40037** (unsafe request-body resend across cross-origin redirects, fixed in 2026.4.8) and describes the 10.9 release as the "Gateway-only extended-stable build".
- **Enterprise narrative in press (all pre-window, no new funding/incidents in-window):** VentureBeat covers OpenClaw launching a **free enterprise control plane (OCE)** backed by OpenAI, Red Hat, and NVIDIA; Red Hat publicly sponsors the OpenClaw Foundation on runtime security for persistent agents; openclawconsult.com frames OpenClaw as entering a "maturation phase — Maintainer Council, auth required, Docker hardening, ClawHub vetting". The Feb-2026 Peter Steinberger→OpenAI acquisition (project to an independent foundation, OpenAI as financial sponsor) remains the canonical funding story; no new round or funding event was found in the window.
- **Multiplayer press is still dominated by the August/September "OpenClaw 2.0" wave** (novalogiq, techjuice.pk, genesis-aka, aq.dev, progressiverobot), with the shared-console/multiplayer-enterprise framing; none of these outlets has published yet on the 11-05 official Multiplayer blog post or the 11-05 `2026.11.1` release.
- **Security-incident coverage in-window:** none found. The most recent incident-adjacent items are the October 29 CVE-2026-40037 write-up and the ongoing general advisories that "security researchers continue to find malicious packages" (The Claw Report FAQ, carried forward).

---

## Caveats & data gaps

1. **GitHub Search API required `is:issue`/`is:pr`** — the bare `created:>` query from the brief returns HTTP 422. All counts above come from explicit `is:issue` / `is:pr` queries, which are disjoint and exhaustive.
2. **`open_issues_count` includes PRs.** GitHub's `open_issues_count` (7,634) is issues + PRs; I report the split separately (4,719 / 2,912) because the headline number alone is misleading. The 4,719/2,912 split comes from Search API `total_count`, which is exact for these queries.
3. **PR/issue creation counts are exact totals, not page samples** (134 issues, 559 PRs, 396 merged, 247 closed). Only the *theme* analysis is sample-based (first 100 of 559 PRs; first 134 of 134 issues) — theme percentages carry sampling error, the counts do not.
4. **npm 11-05 = 0 is a data-publication gap, not zero downloads.** The same series contains zeros on 10-06, 10-13/14/15, 10-19/20/21 between non-zero days. Additionally 11-05 is the `2026.11.1` publication day, so it cannot represent the new release's adoption. The new release's download bump is **not yet observable**; 11-06 and 11-07 are the measurement points.
5. **The brief's release-date premise for 2026.10.10 was wrong** (claimed ~2026-10-10; npm registry says 2026-11-03T02:26:08Z). The release around 10-10 was `2026.10.1`. All decay framing above has been re-based on registry timestamps.
6. **npm weekly windows are partially overlapping** (10-25→11-01 vs 10-29→11-04) — the week-over-week percentages are therefore not clean 7-day-over-7-day comparisons and are labelled as such.
7. **ClawStat's schema changed.** `recommended_version` is now an object rather than a flat version string, and the baseline's `maintenance_velocity` field no longer exists. The baseline's single blocker #191717 is absent from the current payload (rotated out, not re-listed) — I cannot verify from this payload whether it was fixed, retired, or simply dropped from the tracked set. ClawStat's own payload states tracked-issue counts are not comparable across releases.
8. **ClawStat assessed at 06:12Z**, ~3h before this collection, and its 2026.11.1 view is based on 1-day-old data with 3 runs — its ✅ verdict is explicitly provisional ("too new to call").
9. **Advisory update ≠ new vulnerability.** GHSA-hggm-x7r9-mm7v's `updated_at` moved into the window (2026-11-05T20:48:29Z) but the CVE was published 2026-03-26 and is patched since 2026.3.28; I could not diff the advisory body against its pre-window state to say precisely what the update changed. The advisories endpoint exposes no historical revision.
10. **No independent press confirmation of `2026.11.1` or the Multiplayer launch yet.** The Claw Report is one day stale on both; DuckDuckGo returned zero results for a targeted `2026.11.1` query. Coverage should be re-checked in the next window.
11. **DuckDuckGo bot-detection triggered** on 1 of 5 searches (security/CVE query) and returned 0 results on another (targeted `2026.11.1` query). External-press coverage in this window is therefore **sampled, not systematic** — absence of a story is not proof of absence.
12. **Showcase diff was byte-exact**, so "no change" is a strong statement there; but a server-side A/B or geo-varied response could mask changes. Two independent fetches (byte count + diff) agree.
13. **Rate-limit headroom was not exhausted** — no 429s, no pagination truncation (advisories had a `next` cursor at exactly 100, so the advisory set is >100 and I verified the newest publication via the `updated`-sorted query rather than by exhausting the full list).

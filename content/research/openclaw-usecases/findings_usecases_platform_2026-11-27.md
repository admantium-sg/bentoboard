# Platform findings (2026-11-27)

Window: 2026-11-26T09:28:00Z → 2026-11-27T09:28:00Z. Baseline: 2026-11-26 findings.
All raw curl captures: `tmp/2026-11-27/`.

## 1. npm release channel — still no 2026.11.11, but 7 PRs are now tagged for it

- **dist-tags unchanged from yesterday**: `latest=2026.11.10`, `beta=2026.11.10`, `extended-stable=2026.10.34` (LTS line; no 2026.10.35 published). Source: https://registry.npmjs.org/-/package/openclaw/dist-tags
- **Registry version count still 311** — unchanged from the 2026-11-26 baseline. Source: https://registry.npmjs.org/openclaw
- Newest publish timestamps (same order as yesterday): `2026.10.34` @ 2026-11-26T00:42:32Z, `2026.11.10` @ 2026-11-25T05:07:34Z, `2026.11.9` @ 2026-11-25T00:33:15Z, `2026.11.8` @ 2026-11-24T10:14:12Z, `2026.11.10-beta.3` @ 2026-11-24T03:05:25Z. Package `modified` = 2026-11-26T00:42:32Z. Source: https://registry.npmjs.org/openclaw
- **No GitHub release tag v2026.11.11 exists.** Latest release remains `v2026.11.10` (published 2026-11-25T05:42:47Z). `latest_prerelease` on clawstat is empty (`tag: ""`), i.e. **no pre-release ahead of stable**. Sources: https://api.github.com/repos/openclaw/openclaw/releases?per_page=10 , https://clawstat.us/latest.json
- **DELTA — 2026.11.11 is actively accumulating fixes: 7 merged PRs carry the `[2026.11.11]` tag**, up from the 3 known yesterday. All 7 are `fix(update)` / pnpm-update-recovery changes:
  - #205849 "fix(update)[2026.11.11]: recover interrupted pnpm updates on the installed generation" — https://github.com/openclaw/openclaw/pull/205849
  - #205827 "fix(update)[2026.11.11]: count a leftover Startup entry for the updated Gateway as that Gateway" — https://github.com/openclaw/openclaw/pull/205827
  - #205758 "fix(update)[2026.11.11]: recover timed-out and orphaned finalizers to a verified Gateway" — https://github.com/openclaw/openclaw/pull/205758
  - #205760 "fix(update): the update after a failed 2026.11.10 pnpm update settles it instead of asking for repair" — https://github.com/openclaw/openclaw/pull/205760
  - #205736 "fix(update): settle a 2026.11.10 update that released its lease after verifying its candidate" — https://github.com/openclaw/openclaw/pull/205736
  - #205669 "fix(update): check delegated owners against Doctor-migrated config" — https://github.com/openclaw/openclaw/pull/205669
  - #205078 "fix(update): a pnpm update no longer fails after activating when the installed release came from an update" — https://github.com/openclaw/openclaw/pull/205078
  → The update-path bug family that produced yesterday's P0 cluster is being closed against a not-yet-shipped 2026.11.11. No npm artifact exists for it.

## 2. **macOS artifacts were BACKFILLED to v2026.11.10** (biggest delta of the day)

Yesterday's baseline recorded that v2026.11.10 shipped with **no macOS assets (12 assets, all Linux amd64)** and that this caused a P0 cluster (#205258, #205338, #205455, #205542).

**That is now false for the asset half of the problem.** `v2026.11.10` now carries **21 assets, including 4 macOS-native + 3 universal macOS ones**, uploaded in a backfill batch at **2026-11-26T10:06:14Z → 10:06:31Z** (i.e. inside this window, ~24h after the release was published). Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10

Assets added on 2026-11-26T10:06 (all previously absent):
`OpenClaw-2026.11.10-arm64.dmg`, `OpenClaw-2026.11.10-arm64.dSYM.zip`, `OpenClaw-2026.11.10-arm64.zip`, `OpenClaw-2026.11.10-x86_64.dmg`, `OpenClaw-2026.11.10-x86_64.dSYM.zip`, `OpenClaw-2026.11.10-x86_64.zip`, `OpenClaw-2026.11.10.dmg`, `OpenClaw-2026.11.10.dSYM.zip`, `OpenClaw-2026.11.10.zip`.

Full v2026.11.10 asset list (21): latest.json, amd64.AppImage, amd64.deb, arm64.dmg, arm64.dSYM.zip, arm64.zip, dependency-evidence.zip, linux.json, postpublish-evidence.json(+sha256), release-manifest.json(+sha256), stable-main-closeout.json(+sha256), x86_64.dmg, x86_64.dSYM.zip, x86_64.zip, OpenClaw-2026.11.10.dmg, .dSYM.zip, .zip, SHA256SUMS.linux-app.txt. Sources: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10 , https://api.github.com/repos/openclaw/openclaw/releases?per_page=10

**But the P0 cluster did NOT close**, because the fix is assets-only, not compatibility:
- **#205258 "[Bug]: Stable 2026.11.10 shipped without the macOS app while its schema migration…"** is still `open`, severity high, 0 👍, still listed in clawstat's 60 known issues. — https://github.com/openclaw/openclaw/issues/205258
- **#206125 (NEW, P0, impact:ux-release-blocker)**: "[Bug]: Install page advertises macOS 15+ for the desktop app, but every linked DMG from 2026.10.10 onward is built for macOS 26.2 and will n[ot run]" — https://github.com/openclaw/openclaw/issues/206125
- **#205894 (NEW, P0, impact:ux-release-blocker)**: "[Release blocker] macOS app remains unusable after stable 2026.11.10 migration — compatible signed app and recovery ETA needed" — https://github.com/openclaw/openclaw/issues/205894
→ i.e. the backfilled DMGs are signed/built against macOS 26.2, so they do not unblock the macOS install path advertised as macOS 15+. This is a **new, more specific blocker** than yesterday's "no artifacts".

## 3. npm downloads — the ~48h reporting lag RESOLVED, WoW turned positive

- **Last complete day is now 2026-11-26 = 433,040 downloads.** The point endpoint confirms `start=end=2026-11-26`. (Yesterday 11-25 and 11-26 both read 0 due to the lag; 11-25 now reads 535,334.) Sources: https://api.npmjs.org/downloads/point/last-day/openclaw , https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw
- Daily series (11-17 → 11-26): 390,660 / 346,941 / 294,218 / 392,157 / 497,858 / 452,883 / 442,684 / 527,267 / 535,334 / 433,040. Source: https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw
- **Rolling 7d 2026-11-19..2026-11-25 = 3,142,401** vs prior window 2026-11-12..2026-11-18 = 3,035,903 → **+3.51% WoW** (yesterday's reported reading was −5.27% WoW, itself computed on incomplete data — the sign of the trend flipped).
- Newer cut **7d 2026-11-20..2026-11-26 = 3,281,223** vs 7d 2026-11-13..2026-11-19 = 2,834,248 → **+15.76% WoW**.
- 2026-11-27 reads 0 (incomplete day, expected). Source: https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw

## 4. GitHub main repo

- Stars **395,317** (+61 vs 395,256 yesterday), forks 83,012, subscribers 1,692, `open_issues_count` 9,281, last push 2026-11-27T09:29:01Z. Source: https://api.github.com/repos/openclaw/openclaw

### Tracker counts (paginated item lists, not just total_count)
| Metric | 2026-11-27 | 2026-11-26 baseline | Δ |
|---|---|---|---|
| New issues (created 11-26..11-27) | **235** | 178 | +57 |
| New PRs (created 11-26..11-27) | **669** | 452 | +217 |
| Merged PRs (merged 11-26..11-27) | **592** (all fetched, 6 pages) | 399 | +193 |
| Open issues | **5,479** | 5,406 | +73 |
| Open PRs | **3,805** | 3,821 | −16 |

Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-26..2026-11-27 (and the `is:pr` / `is:merged` / `is:open` variants)

**Priority-label breakdown on the 235 new issues**: P0 **5**, P1 **37**, P2 **150**, P3 **36** (7 unlabeled) — vs baseline P0 4 / P1 29 / P2 107 / P3 33. **Merged-PR breakdown (592)**: P1 18, P2 247, P3 135, P0 0.

**Impact-label mix on new issues**: impact:ux-friction 89, impact:other 35, impact:session-state 29, impact:message-loss 23, **impact:security 19**, impact:auth-provider 16. Rating mix: 🦞 diamond lobster 131, 🦪 silver shellfish 30, 🌊 off-meta tidepool 28. Automation labels: clawsweeper:source-repro 131, clawsweeper:no-new-fix-pr 121, clawsweeper:fix-shape-clear 74, clawsweeper:queueable-fix 64, clawsweeper:needs-maintainer-review 55, clawsweeper:needs-product-decision 50, clawsweeper:linked-pr-open 35.

**Engagement on the 235 new issues: 0 👍 across all of them.** 234 of 235 have exactly **1 👀** each (1 issue has 0 reactions); total reactions = 234, all 👀. Total comments = 295, max 5 on any single issue. This confirms clawstat's "near-zero engagement" calibration independently.

### Top 5 NEW issues (by comments; all from the 11-26..11-27 window)
1. **#206264** (5 comments) "[Bug]: Gateway main-thread stalls grow with uptime: SQLite admission references for exited workers a…" — https://github.com/openclaw/openclaw/issues/206264
2. **#206030** (5) "Post-migration reclamation can't drain migrated transcript backlog (commit checkpoint expired → sess…" — https://github.com/openclaw/openclaw/issues/206030
3. **#206097** (4) "[Bug]: Infinite models.list ↔ chat.metadata.changed ping-pong loop causes sustained ~4.5/s catalog w…" — https://github.com/openclaw/openclaw/issues/206097
4. **#206081** (4) "[Bug]: backup git create: a gitignored declared table silently makes the whole agent scope fail veri…" — https://github.com/openclaw/openclaw/issues/206081
5. **#206018** (4) "Workboard: Control UI board page shows no cards while owner-scope list returns all (browser workboar…" — https://github.com/openclaw/openclaw/issues/206018

All 5 new P0s: #206215 (Claude Code "login reached its time limit" → no sign-in guidance), #206125 (macOS 26.2 DMGs vs macOS 15+ install page), #206076 (Android Talk button dead when mic permission permanently denied), #205908 ("Update failure: package-update (2026.10.10)"), #205894 (macOS app unusable after 2026.11.10 migration). Sources: https://github.com/openclaw/openclaw/issues/206215 etc.

### Top 5 NEW merged PRs (by comments)
1. **#193823** (39) "feat: confine native node worker filesystem access" — https://github.com/openclaw/openclaw/pull/193823
2. **#204431** (37) "feat: let plugins explain provider errors in chat" — https://github.com/openclaw/openclaw/pull/204431
3. **#201148** (31) "feat(signal): let a group reply to the bot count as a mention" — https://github.com/openclaw/openclaw/pull/201148
4. **#199379** (27) "fix(talk): voice consults fail when the chat runs on Claude CLI or a locked native harness" — https://github.com/openclaw/openclaw/pull/199379
5. **#202586** (23) "feat(signal): include recent group photos when mentioned" — https://github.com/openclaw/openclaw/pull/202586
Total comments across the 592 merged PRs: 2,506; total 👍 on merged PRs: 13.

## 5. clawstat — recommendation holds at ⚠️, but the blocker set was REPLACED

Source: https://clawstat.us/latest.json (app_version 1.3.10, assessed_at 2026-11-26T22:04:09Z)
- `version` = 2026.11.10; `recommendation` = ⚠️; `status.key` = **"care"**; `status.label` = **"Update with care"**; `confidence` = medium.
- `evidence_gate.verdict` = **✅**, `blocker_count` = 0, `blockers` = [], `widespread` = [], `serious` = [], `floor_applied` = false — **but `departure.departed` = true**, i.e. the analyst explicitly overrode the deterministic ✅ gate down to ⚠️, citing #205694, #205402, #205542, #205212 and #205258.
- `recommended_version` = **2026.11.6**, kind "settled", published 2026-11-19, age_days 7, recommendation ⚠️, gate ⚠️.
- **DELTA — the blocker list is completely different from yesterday's single #205537.** `recommended_version.blockers` now = **#203343 (critical)**, **#203460 (critical)**, **#202925 (critical)** — older macOS/Linux-installer issues, not yesterday's memory-index OOM. #205537 is **gone** from the 60 known issues; GitHub confirms it is `closed` / `completed` at **2026-11-26T06:17:00Z** ("Memory-index session worker OOMs on session files > ~250 MB") — https://github.com/openclaw/openclaw/issues/205537. **So yesterday's blocker is genuinely cleared and has been replaced by a different blocker set.**
- `known_issues` = **60** entries, of which **16 are flagged `is_new`** (new since the previous assessment); **sum of 👍 reactions across all 60 = 0**; every tracked issue shows 0 👍.
- Still-open P0-cluster members in the tracked set: #205694, #205231, #205542, #205258, #205338 (all `open`, severity high, 0 reactions). New tracked entry #206084 (persistent-session transcript duplication, created 2026-11-26T17:56Z) is the 🦞 diamond-lobster regression.
- `changes` = empty (no breaking/fixes/features parsed); `flip_conditions` = ⚠️→✅ "once a patch release ships fixes for the upgrade-failure set (#205694, #205402) and macOS app artifacts resolving #205258 / #205231". `latest_prerelease` = empty.

## 6. Catalog repo — model count ticking up again

Source: https://api.github.com/repos/openclaw/catalog/commits?per_page=10
- **Model count 1427 → 1432 (+5)** across the window; commit messages: "catalog: 47 providers, 1432 models" @ 2026-11-27T08:30:51Z and @ 2026-11-27T04:30:00Z; 1431 @ 11-27T00:45Z and 11-26T20:27Z; 1427 @ 11-26T16:29Z and earlier. The 1431→1432 uptick reverses the 1436→1427 drop recorded yesterday.
- **Provider count 47 — unchanged.**
- Workflow runs total **2,283** (baseline 2,270, +13). All 10 most recent runs = success (pages build and deployment, Publish catalog, CodeQL). Source: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=10

## 7. Enterprise repo + org

Source: https://api.github.com/repos/openclaw/openclaw-enterprise
- Stars **488** (unchanged), forks 133, `open_issues_count` **575** (+10 vs 565 baseline), last push 2026-11-27T09:26:30Z.
- **`releases[]` is STILL EMPTY** — https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5 returns `[]`. No enterprise release has ever been published.
- **64 merged PRs in 11-26..11-27** (baseline 60). Top by recency: #7516 "Prevent Enter on Create Agent choices from submitting the form", #7515 "Keep Enter on a repository checkbox from submitting Create Agent", #7514 "Show Gateway startup timings in First Agent Smoke", #7513 "fix: keep Runtime details visible when tabbing through Create Agent", #7512 "test: check Gateway migration targets against the runtime image". Sources: https://github.com/openclaw/openclaw-enterprise/pull/7516 etc.
- Org now lists **98 public repos**: https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed — top by push activity: clawrouter (44★), esp-openclaw-node (101★), openclaw (395,317★), clawsweeper-state (6★), octopool (149★), proc-safe (8★), crabpot (19★), openclaw-enterprise (488★), docs (76★), fs-safe (64★), catalog (14★), openclaw-rtt (35★). No new org repo appeared in this window (all listed created well before 2026-11-26).

## 8. Showcase, blog, enterprise & security site — all unchanged

- **Showcase: 79 "X thread" entries / 65 distinct X accounts — identical to yesterday.** Source: https://openclaw.ai/showcase.md (and https://openclaw.ai/showcase). This is now **17 consecutive days with no change**. Top entries unchanged (top ❤️ counts: @danpeguine 257, @dreetje 271, @jdrhyne 119, @georgedagg_ 143, @davekiss 142).
- **No named enterprise customer, no ROI figure, no case study, no pricing** anywhere on the showcase or enterprise pages (searched ROI / FTE / hours saved / customer / pricing / $ → 0 hits on https://openclaw.ai/enterprise). The enterprise page still markets itself as "**Open source · Pre-1.0**" and "Pre-1.0 software, intended for internal pilot workloads" — no commercial traction signal.
- **Blog unchanged: newest post still 2026-11-24** ("A year of the Claw" and "Introducing ShellBench, the benchmark for real-world tasks"); RSS carries 29 items, newest pubDate Tue, 24 Nov 2026. Sources: https://openclaw.ai/rss.xml
- **Security page: still "No active bulletins"**, "Reviewed Sep 9, 2026", 1,799 reports filed since January 2026, 58% closed with no advisory, **722 fixed and published** (39 with a CVE), 14 confirmed critical (all fixed and disclosed), latest advisory Sep 11, 2026. Source: https://openclaw.ai/security
- **GitHub security advisories: 723 total, unchanged** (paginated via cursor over 8 pages, 100/page + 23). **No new advisory** — newest remains **GHSA-pw3x-g8v8-fvj2** (2026-11-19, high, "OpenClaw delegation could skip approval for restricted agents"). Source: https://api.github.com/repos/openclaw/openclaw/security-advisories

## 9. New external repos (65 created in window) — thin, individual-scale

Source: https://api.github.com/search/repositories?q=openclaw+created:2026-11-26..2026-11-27 (total_count 65). Also 924 repos pushed in the window: https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-26..2026-11-27

Notable new repos (max 3★ — no enterprise/management tooling with traction):
- **hxdd300/openclaw-vps-sizing** (1★) "OpenClaw VPS: How much RAM it actually needs, what a year costs…" — https://github.com/hxdd300/openclaw-vps-sizing
- **impy4694/openclaw-deployment-sizing** (1★) "OpenClaw 部署要多大机器：2GiB 内存够用吗？端口和 Token 为什么总对不上？（附部署路线与 VPS 套餐对比）" — https://github.com/impy4694/openclaw-deployment-sizing
- **njtpf91/lobster-vps-selection** (0★) "龙虾 VPS 怎么选：2 核 4G 够不够？…（附 OpenClaw 部署与加固清单）" — https://github.com/njtpf91/lobster-vps-selection
  → Three independent cost/sizing guides in 24h: cost-of-deployment is now a visible pain point, but it is being answered by unaffiliated bloggers, not by OpenClaw Enterprise.
- **slzszyt-ux/openclaw-secrets-notes** (0★) "Secret store notes, groups and full key management panel for the OpenClaw Control UI" — https://github.com/slzszyt-ux/openclaw-secrets-notes
- **rickysinghmba/openclaw-whisper-server** (1★) local whisper.cpp transcription plugin — https://github.com/rickysinghmba/openclaw-whisper-server ; **rickysinghmba/openclaw-xmpp** (0★) XMPP channel — https://github.com/rickysinghmba/openclaw-xmpp
- **chispa-sideral/openclaw-node-lite-releases** (0★) "Windows installers and automatic updates for OpenClaw Node Lite" — https://github.com/chispa-sideral/openclaw-node-lite-releases
- **kandotrun/oh-my-openclaw-macos** (0★) native macOS chat client for a self-hosted Gateway — https://github.com/kandotrun/oh-my-openclaw-macos
- **Jokert0/openclaw-arona-pet** (3★) Live2D/Electron desktop pet driven via the OpenClaw Gateway — https://github.com/Jokert0/openclaw-arona-pet
→ No new repo in the window targets enterprise management, deployment control planes, or ROI measurement.

### Trend (2026-11-27)

The day is defined by a **partial, asset-level fix to the macOS P0 cluster and by the download counter reversing to positive**. v2026.11.10 gained nine macOS/universal assets at 2026-11-26T10:06Z, three weeks after release, restoring the shape of the v2026.11.8/2026.11.9 release (21–22 assets, 4 macOS-native) — but the P0 cluster did not close, because the new **P0 #206125 shows the backfilled DMGs are built for macOS 26.2 while the install page advertises macOS 15+**, and **P0 #205894 says the macOS app remains unusable after the 2026.11.10 migration**. Meanwhile the underlying update-path defect family is being closed against a **2026.11.11 that still does not exist on npm or GitHub Releases** (dist-tags unchanged, 311 registry versions unchanged, 7 `[2026.11.11]`-tagged PRs merged in the window). This makes 2026.11.11 a high-probability next release whose entire content is "make the update path survivable", which is a bad look for a platform sold on reliability. The download counter flipped from −5.27% WoW to **+3.51% WoW (and +15.76% on the newer cut)** once the ~48h npm reporting lag resolved — a real but modest recovery, roughly 3.1–3.3M/week against a 3.0M baseline, so not a growth inflection. The **signal-to-noise ratio collapsed further**: 235 new issues (up from 178) with **0 👍 across all of them**, only 234 total 👀 (one per issue), max 5 comments, and 592 merged PRs with 13 total 👍. clawstat now shows the ✅ deterministic gate being **explicitly overridden** to ⚠️ ("care" / "Update with care") on detailed-but-unconfirmed upgrade-failure reports, and its recommended_version blockers were **swapped out** (yesterday's #205537 memory-index OOM is confirmed closed; three older criticals #203343/#203460/#202925 take its place) — so the recommendation holds but the *reason* has been rewritten. On the business side the picture is flat: showcase unchanged for a 17th day (79 entries / 65 accounts), no ROI number, no named customer, enterprise page still "Pre-1.0 … internal pilot workloads", enterprise repo still has **zero releases**, and the only genuinely new third-party energy is three unaffiliated VPS-cost/sizing guides — i.e. cost-of-deployment is being solved by the community because the vendor has not published a commercial story. Catalog recovered to 1,432 models / 47 providers with all workflows green, and GitHub stars grew only +61.

### Negatives & caveats (2026-11-27)

1. **No 2026.11.11 shipped.** Despite 7 merged `[2026.11.11]`-tagged PRs, npm dist-tags are unchanged (`latest`/`beta` = 2026.11.10, `extended-stable` = 2026.10.34), the registry still has exactly 311 versions, and there is no v2026.11.11 GitHub release. The "fix" for the update-path bugs is therefore **not available to any user today**. Sources: https://registry.npmjs.org/-/package/openclaw/dist-tags , https://api.github.com/repos/openclaw/openclaw/releases?per_page=10
2. **The macOS fix is cosmetic/incomplete.** The backfilled DMGs resolve the "artifact missing" symptom of #205258/#205338 but P0 #206125 (DMGs built for macOS 26.2 vs macOS 15+ advertised) and P0 #205894 (app still unusable post-migration) mean **macOS users are not unblocked**. #205258 remains open with 0 👍 and no fix PR referenced. Sources: https://github.com/openclaw/openclaw/issues/206125 , https://github.com/openclaw/openclaw/issues/205894 , https://github.com/openclaw/openclaw/issues/205258
3. **No community corroboration of any severity claim.** 0 👍 across all 235 new issues and all 60 clawstat-tracked issues; 234 total 👀 (exactly 1 each); max 5 comments on any new issue. clawstat itself flags every cited issue as "bot-labeled, 0-👍, no human or community corroboration" and records that the ⚠️ verdict is a **departure from its own ✅ gate**. Sources: https://clawstat.us/latest.json , https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-26..2026-11-27
4. **No new security advisories, but the site/API counts disagree.** GitHub API returns 723 advisories (cursor-paginated, 8 pages) while https://openclaw.ai/security reports "722 Fixed and published". One of the two is stale; neither changed. The security page still shows "No active bulletins", last reviewed Sep 9, 2026, latest advisory Sep 11, 2026 — i.e. the advisory stream has been static for ~7 weeks. Sources: https://api.github.com/repos/openclaw/openclaw/security-advisories , https://openclaw.ai/security
5. **Zero commercial evidence of enterprise traction.** openclaw/openclaw-enterprise has 488 stars (flat), `releases[]` empty, 575 open issues, and the marketing page still says "Pre-1.0 software, intended for internal pilot workloads" with no ROI, pricing, or named-customer content. Sources: https://api.github.com/repos/openclaw/openclaw-enterprise , https://openclaw.ai/enterprise
6. **Showcase is in a long freeze (17 days):** 79 entries / 65 X accounts, byte-identical counts to 11-26 and, per baseline, to the previous 16 days. No new build shipped through the showcase. Source: https://openclaw.ai/showcase.md
7. **Blog/RSS still 3 days stale** (newest post 2026-11-24). No announcement accompanying the macOS artifact backfill or the 2026.11.11 preparation. Source: https://openclaw.ai/rss.xml
8. **Window-comparability caveat.** The GitHub search windows here are `created:2026-11-26..2026-11-27` / `merged:2026-11-26..2026-11-27`, which may not be identical to the ranges used for the 2026-11-26 baseline figures; the +57 new issues / +193 merged PRs deltas are therefore indicative rather than strictly like-for-like. Absolute values were obtained by paginating the item lists (235/235 issues, 592/592 merged PRs), not from `total_count` alone.
9. **Rate-limit-driven gaps.** Unauthenticated GitHub search (10 req/min) and core (60 req/h) limits forced `sleep` pacing; one enterprise-PR query (`merged:2026-11-25..2026-11-27`) returned a rate-limit error and was **not** re-run, so the 2-day enterprise merge count (64) is a 1-day figure only. The `pushed:2026-11-26..2026-11-27` repository search returned only the top 30 of 924 matches by stars. No figure in this report is from `web_search`/`web_fetch`.
10. **No figure obtained for:** the exact number of "View on X"-styled showcase entries as rendered in the HTML (the HTML page yields 61 raw string matches vs 79 structured "X thread" entries in the markdown mirror — the markdown count is used); and whether the macOS 26.2 DMG build target applies to the *2026-11-26 backfilled* assets specifically (P0 #206125 says "every linked DMG from 2026.10.10 onward", which implies but does not explicitly name the 11-26 uploads).

### Sources (2026-11-27)

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw
- https://api.npmjs.org/downloads/range/2026-11-05:2026-11-27/openclaw
- https://api.npmjs.org/downloads/point/last-day/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=10
- https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10
- https://api.github.com/repos/openclaw/openclaw/security-advisories
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-26..2026-11-27
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-26..2026-11-27
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:open
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-26..2026-11-27
- https://api.github.com/repos/openclaw/openclaw/issues/205258
- https://api.github.com/repos/openclaw/openclaw/issues/205537
- https://clawstat.us/latest.json
- https://api.github.com/repos/openclaw/catalog/commits?per_page=10
- https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=10
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/releases?per_page=5
- https://api.github.com/orgs/openclaw/repos?per_page=100&sort=pushed
- https://api.github.com/search/repositories?q=openclaw+created:2026-11-26..2026-11-27
- https://api.github.com/search/repositories?q=openclaw+pushed:2026-11-26..2026-11-27
- https://openclaw.ai/showcase
- https://openclaw.ai/showcase.md
- https://openclaw.ai/rss.xml
- https://openclaw.ai/enterprise
- https://openclaw.ai/security
- Individual issue/PR URLs as cited inline (github.com/openclaw/openclaw/issues/206264, 206030, 206097, 206081, 206018, 206215, 206125, 206076, 205908, 205894; github.com/openclaw/openclaw/pull/193823, 204431, 201148, 199379, 202586, 205849, 205827, 205758, 205760, 205736, 205669, 205078; github.com/openclaw/openclaw-enterprise/pull/7516, 7515, 7514, 7513, 7512)

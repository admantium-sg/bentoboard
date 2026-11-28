# Findings — Platform (2026-11-04)

Research window: 2026-11-03T09:28Z → 2026-11-04T09:28Z. All timestamps UTC.
Convention: **STATED** = directly observed in a source; **INFERRED** = my derivation.

---

## Release & version cadence

**STATED — a new prerelease shipped inside the window: `2026.11.5-beta.1`.**
- npm publish: **2026-11-04T04:01:35Z** (`https://registry.npmjs.org/openclaw` → `time["2026.11.5-beta.1"]`; registry `modified` = 2026-11-04T04:01:35.415Z).
- GitHub release `v2026.11.5-beta.1` published **2026-11-04T04:51:56Z**, `prerelease: true` (`https://api.github.com/repos/openclaw/openclaw/releases?per_page=4`).
- dist-tags now (`https://registry.npmjs.org/-/package/openclaw/dist-tags`):
  - `latest` = **2026.10.10** (unchanged)
  - `beta` = **2026.11.5-beta.1** (moved from `2026.10.10-beta.5`, published 2026-10-30T03:22:37Z)
  - `extended-stable` = **2026.9.36** (unchanged, published 2026-10-29T19:40:15Z)
- **STATED:** no `2026.10.11` and no stable `2026.11.x` exists. The first `2026.11.x` version number appears in the 2026.11.5-beta.1 line.

**STATED — headline changes of `2026.11.5-beta.1`** (from `CHANGELOG.md` inside the npm tarball `openclaw-2026.11.5-beta.1.tgz`, 117.6 MB compressed):
- **Knowledge Scribes** — first-class knowledge capture + reusable scribe workflows across agents/sessions/Control UI (#185583, #185637, #185974, #186270, #186455, #187659).
- **PostgreSQL data plane** — PostgreSQL-backed state, migration tooling, compatibility coverage (#173968, #174080, #174085, #174183, #174242, #174374, #174387, #174399, #174623; authored @steipete).
- **Control UI overhaul** — mobile + desktop navigation/layout/interaction (#176356, #176466, #176505, #176540, #176557, #176653).
- **Pull requests from chat** — end-to-end PR prep, publication, review, status workflows straight from a conversation (#176105, #176139, #178055, #178233, #178281, #178756).
- **Cross-device and cloud execution** — attached-device, cloud-placement, cyber-access workflows, safer capability handoffs (#185230, #185477, #186560, #187408).
- **Decision and media models** — specialized decision routing, media-capable model support, ClawRouter integrations (#177369, #178860, #178876, #178886, #178920, #179362).
- **Plugin experience** — discovery, installation, authoring, runtime integration (#177869, #182419, #185315, #185544).
- **Backup/upgrade safety** — hardened backup, recovery, upgrade and rollback paths (#186953, #187564, #187688, #187737).
- Change/fix sections include: persistent automation streams, session sharing + guest access, learned-skill capture, provider integrations, native media, credential migration, Doctor compatibility, memory maintenance, provider-aware model routing.
- **STATED:** changelog self-reports "10,222 unique PRs" in-range for the audited record `459cad76..8de82ee7`, and lists `v2026.10.10-beta.5` (993 PRs) as a shipped baseline exclusion.

**INFERRED (important discrepancy):** external coverage of `2026.10.10` cites **3,028 PRs / 454 contributors**, while yesterday's findings for the same release recorded **3,019 PRs / 367 contributors**. Both cannot be right for the same artifact. Source: `https://www.boaoai.cn/en/news/2026-11-04-openclaw-v2026-10-10-advisor-chat-details/` and `https://blockchain.news/ainews/openclaw-v2026-10-10-adds-advisor-and-split-speech-release-analysis`. Treat one figure as a restatement error; resolve next window by reading `package/CHANGELOG.md` of `2026.10.10` directly (same tarball method used above).

**STATED — release assets for the new beta are metadata-only.** `v2026.11.5-beta.1` ships 5 assets, all evidence/manifest JSON, **no platform binaries**: `dependency-evidence.zip` (4 dl), `postpublish-evidence.json` (6), `postpublish-evidence.json.sha256` (3), `release-manifest.json` (5), `release-manifest.json.sha256` (3). Same pattern as `2026.10.10-beta.5`. Source: `https://api.github.com/repos/openclaw/openclaw/releases?per_page=4`.

---

## Adoption & downloads

**STATED — npm daily downloads** (`https://api.npmjs.org/downloads/range/2026-10-26:2026-11-04/openclaw`):

| day | downloads |
|---|---|
| 2026-10-26 | 474,738 |
| 2026-10-27 | 391,520 |
| 2026-10-28 | 341,738 |
| 2026-10-29 | 384,516 |
| 2026-10-30 | 375,102 |
| 2026-10-31 | 292,528 |
| 2026-11-01 | 318,468 |
| 2026-11-02 | 321,275 |
| 2026-11-03 | 0 (no data published) |
| 2026-11-04 | 0 (no data published) |

- **STATED:** npm's own last-day endpoint still returns `2026-11-02` (`https://api.npmjs.org/downloads/point/last-day/openclaw` → 321,275) and last-week returns `2026-10-27:2026-11-02` = **2,425,147** (`https://api.npmjs.org/downloads/point/last-week/openclaw`). The `0` values for 11-03/11-04 are **missing data, not zero downloads** — npm's download stats lag ~1–2 days.
- **INFERRED:** the release-effect test **cannot be completed in this window.** `2026.10.10` was published 2026-11-03T02:26Z, and there is no npm download data for 2026-11-03 or 2026-11-04 yet. **No measurable download bump from `2026.10.10` can be confirmed or refuted — the data does not exist yet.** Next window (2026-11-05) is the first that can answer it.
- **INFERRED:** within available data, peak-to-trough = 474,738 (10-26) → 292,528 (10-31), i.e. **−38.4%**; 10-31 → 11-02 = **+9.8%** (292,528 → 321,275), a mild rebound but still 32% below the 10-26 peak. Rolling week fell from 2,578,610 (10-26→11-01) to 2,425,147 (10-27→11-02) = **−6.0% week-over-week**. The decline is ongoing, not reversed.

**STATED — GitHub release asset downloads, `2026.10.10` vs `2026.10.9`** (`https://api.github.com/repos/openclaw/openclaw/releases?per_page=3`):

| asset | 2026.10.9 | 2026.10.10 | ratio |
|---|---|---|---|
| OpenClaw-…-amd64.AppImage | 2,342 | 734 | 0.31 |
| OpenClaw-…-amd64.deb | 1,678 | 568 | 0.34 |
| OpenClaw-…-arm64.dmg | 4,748 | 1,553 | 0.33 |
| OpenClaw-…-x86_64.dmg | 1,160 | 338 | 0.29 |
| OpenClaw-…dmg (universal) | 7,951 | 1,762 | 0.22 |
| OpenClaw-…-arm64.zip | 5,886 | 2,696 | 0.46 |
| OpenClaw-…-x86_64.zip | 712 | 166 | 0.23 |
| OpenClaw-…zip (universal) | 7,895 | 2,837 | 0.36 |
| dependency-evidence.zip | 700 | 209 | 0.30 |
| postpublish-evidence.json | 169 | 68 | 0.40 |
| release-manifest.json | 242 | 91 | 0.38 |
| **total (all assets)** | **33,483** | **11,022** | **0.33** |

- **INFERRED:** `2026.10.10` is at ~33% of `2026.10.9`'s asset volume after ~1 day, which is **consistent with age rather than a demand collapse** — `2026.10.9` is ~5 days old and still accumulating. Direct binary pulls favour the universal `.dmg` (1,762) and `.zip` (2,837); `amd64.AppImage`/`amd64.deb` are a minority (734 / 568). **Not a release-effect signal yet**; comparable again next window when `2026.10.10` is ~2 days old.

---

## GitHub activity

**STATED — repo counters** (`https://api.github.com/repos/openclaw/openclaw`, read 2026-11-04 ~09:29Z):
- stars **393,873** (yesterday: 393,793 → **+80**)
- forks **82,771** (yesterday: 82,771 → **no change**)
- `open_issues_count` **7,793** (yesterday: 7,733 → **+60**; note this field counts PRs + issues)
- `pushed_at` 2026-11-04T09:29:13Z (in-window, active), `updated_at` 2026-11-04T09:26:05Z, watchers/subscribers 1,696.

**STATED — creation activity in window** (GitHub search API, `created:>2026-11-03T09:28:00Z`, `repo:openclaw/openclaw`):
- PRs created: **705**
- Issues created: **171**
- Labeled `impact:security`: **5**
- Labeled `security-sensitive-changed`: **35**
- Labeled `security-review-required`: **13**
- Source: `https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-11-03T09:28:00Z+label:impact:security` (and variants).
- **INFERRED:** ~876 new PRs+issues per 24 h against a repo with ~191.4k PR numbers — this is the project's normal bot/automation-driven throughput, not a burst. **No baseline for PR creation rate was recorded yesterday, so I cannot say whether 705 PRs/day is up or down.** Next window should capture the same number for a like-for-like comparison.
- `impact:security` = 5 (yesterday's state noted a collapse 14→4) → **materially changed: back up slightly to 5, still a fifth of the earlier level.** **INFERRED:** security-label volume remains collapsed relative to the pre-2026.10.10 level.

**STATED — the 5 `impact:security` items created in window** (titles from the same query; only 1 of the 5 exposes `impact:security` in its first 4 labels):
- #192666 Identity normalization inconsistency between session lifecycle identity and credential…
- #192227 `[Bug]: exec.approvals.node.set fails: "no such table: agent_deletion_journal" (2026.1…)`
- #192089 `[Feature]: accept SecretRefs in skills.entries.*.env so provider keys can leave the…`
- #192021 `[Bug]: Agent DB admission-refusal error is replied to the inbound chat before session…`
- #191988 `[Feature]: Preserve trusted LAN endpoints so iOS can reconnect after a Gateway IP cha…`
- **STATED:** every one of the 5 also carries a `clawsweeper:*` label (`no-new-fix-pr`, `needs-product-decision`, or `needs-security-review`) — i.e. all are awaiting a fix/decision, none is a fresh exploit report with a landed patch.

**STATED — `security-sensitive-changed` sample** (first 4 of 35, from `…&is:pr&per_page=100`): #192615 `refactor(auth): isolate OpenAI route availability projection`; #192597 `fix(tools): stop warning about canvas-implied show_widget on surfaces without wi…`; #192576 `fix(bedrock): scheduled automations are refused on AWS SDK credential-chain rout…` (P1, `merge-risk: 🚨 security-boundary`); #192552 `fix(models): reduce cold catalog memory`. **INFERRED:** in-window security-touching work is concentrated on auth/projection isolation, tool-surface warnings, AWS Bedrock credential routing and sandbox/catalog paths — no item in the sample describes an active user-facing exploit.

---

## Security

**STATED — no new npm/GitHub security advisory for `openclaw` inside the window.**
- GitHub Advisory Database listing for `affects:openclaw`, sorted by published desc (`https://github.com/advisories?query=affects%3Aopenclaw&sort=published&direction=desc`, fetched 2026-11-04 ~09:35Z): newest published date present is **2026-10-21** — GHSA-3x84-qq85-fj65; next are 2026-07-14 (GHSA-jw7v-5mp7-ghgm) and a cluster of 2026-07-02 entries (GHSA-p73f-w79w-jqr5, GHSA-j472-gf56-x589, GHSA-77q5-rr5v-x43q, GHSA-w5ww-7chg-mxcq, GHSA-7hxm-f538-3xp6, GHSA-4m3v-q747-pc6h, GHSA-3c6j-hq33-3jv4, GHSA-vxx3-6hc9-7cc3, GHSA-rj6p-xmxr-qj4h, GHSA-275c-xpvc-jgfw).
- **STATED:** the npm bulk advisory endpoint for `openclaw` still returns the same large backlog of historical advisories (hundreds of entries with ids in the 1113xxx–1122xxx range, e.g. GHSA-527m-976r-jf79 SSRF-bypass, GHSA-7wv4-cc7p-jhxc workspace .env injection, GHSA-3x84-qq85-fj65); **no entry newer than 2026-10-21 was observed** (`POST https://registry.npmjs.org/-/npm/v1/security/advisories/bulk`, body `{"openclaw":["1.0.0"]}`). The GET variant `/-/npm/v1/security/advisories` does not exist (404).
- **STATED:** `impact:security`-labeled in-window work = 5 items, all awaiting fix or product decision (§GitHub activity); **no in-window advisory was published for any of them.**

---

## Enterprise

**STATED — `openclaw/openclaw-enterprise`** (`https://api.github.com/repos/openclaw/openclaw-enterprise`, read 2026-11-04 ~09:30Z):
- stars **451** (yesterday: 451 → **no change**)
- forks **105**, `open_issues_count` **236** (yesterday: 253 → **−17**)
- `pushed_at` **2026-11-04T09:28:32Z** (in-window → active development), `created_at` 2026-08-29T02:32:55Z
- **INFERRED:** the 17-issue drop is a **net triage/closure movement**, not a contribution collapse (stars flat, pushes in-window).
- **STATED:** no new enterprise-repo items were enumerated this window (GitHub core API rate limit exhausted before a per-item listing could be pulled — see Caveats).

**STATED — blog/RSS: still silent.** `https://openclaw.ai/rss.xml` newest entry remains **"Come Build With Us: OpenClaw Focus Weeks"**, pubDate **Wed, 21 Oct 2026** — i.e. **14 days of silence** as of the window end (yesterday: 13 days). Second entry is "How PJ helps small businesses use OpenClaw" (2026-10-16); third "Tencent AIG joins ClawScan" (2026-10-02). **No new post.**

**STATED — showcase page size changed.** `https://openclaw.ai/showcase` returns **150,868 bytes** (two consecutive fetches, identical), vs **150,728** bytes unchanged across the previous 5 windows. **+140 bytes.**
- **INFERRED:** the showcase page finally moved — consistent with a new showcase entry being added (likely related to the `2026.10.10` release or the enterprise/control-plane story). The delta is small enough that it could also be a template string change. I could not diff against yesterday's copy (not retained). **Next window should snapshot the page and diff.**

**STATED — no in-window enterprise adoption announcement found.** A dedicated search for enterprise adoption/customer announcements in-window returned only older items: techtimes.com (2026-09-28, Microsoft Copilot Autopilot on OpenClaw, "138+ CVEs"), cybersecuritynews.com (OCE announcement, 2026-09-29), venturebeat.com (OCE control plane, OpenAI/Red Hat/NVIDIA backing), clawspiral.com "State of OpenClaw 2026" (2026-06-16), getpanto.ai statistics roundup. **No dated 2026-11-03/04 enterprise customer story.**

---

## Ecosystem repos

**STATED — new repos created in window mentioning openclaw** (`https://api.github.com/search/repositories?q=created:>2026-11-03T09:28:00Z+openclaw&sort=stars&per_page=100`): **total_count 103** (yesterday's window: ~190 → **−46%**).
- **STATED:** star distribution across the returned page: **99 of 100 repos have 0 stars**, 1 repo has 1 star. **Zero repos with ≥3 stars.**
- **STATED:** **49 of the 100 returned repos are `genpark-personal-agent-*` mirror-spam** — the uniform-7-star-floor mirror pattern is **still present** but now at **0 stars each** rather than 7 (the mirror farm's stars have been removed/reset). Mirror share of the visible result page: **~49%** (48% of 103 total). Source: `https://api.github.com/search/repositories?q=created:%3E2026-11-03T09:28:00Z+openclaw&sort=stars&per_page=100`.
- **STATED:** narrower query `created:>2026-11-03T09:28:00Z openclaw in:name` returns **29** repos, **none with ≥1 star**.
- **INFERRED:** the ecosystem is producing **breadth without adoption signal** — ~103 new repos, all but one at zero stars. Either organic interest has cooled further, or new repos are created before anyone stars them. Either way the star counts give no adoption evidence this window.

**STATED — genuinely novel, non-spam repos created in the window** (all 0–1 stars; URLs `https://github.com/<full_name>`):

| repo | ★ | use case |
|---|---|---|
| `dompling/telegram-auto-poll` | 1 | Turns OpenClaw Telegram choices/confirmations into native Telegram polls — converts agent prompts into structured votes ([repo](https://github.com/dompling/telegram-auto-poll)) |
| `Will-Xv/openclaw-anthropic-search` | 0 | OpenClaw web-search provider backed by Claude's server-side `web_search` tool ([repo](https://github.com/Will-Xv/openclaw-anthropic-search)) |
| `kevinbtalbert/NemoClaw_Runtime_for_Cloudera_AI` | 0 | OpenClaw runtime for Cloudera AI — sandboxed execution environment ([repo](https://github.com/kevinbtalbert/NemoClaw_Runtime_for_Cloudera_AI)) |
| `syeleti-msft/openclaw-blobfuse-benchmark` | 0 | Benchmark kit running the OpenClaw agent (PinchBench) against Azure BlobStorage via BlobFuse2 ([repo](https://github.com/syeleti-msft/openclaw-blobfuse-benchmark)) |
| `risense-ai/respire-openclaw` | 0 | `respire` — local encrypted memory for OpenClaw: per-turn recall injection + agent tools ([repo](https://github.com/risense-ai/respire-openclaw)) |
| `ckangas2/openclaw-harness` | 0 | Evidence-lake pipeline + agent harness for grounded research reports ([repo](https://github.com/ckangas2/openclaw-harness)) |
| `zackchewa/openclawlaunch-skills` | 0 | Skill to deploy/manage hosted OpenClaw and Hermes bots from Claude Code, Codex, OpenClaw or Hermes ([repo](https://github.com/zackchewa/openclawlaunch-skills)) |
| `aevent-platform/openClaw-aevent-plugin` | 0 | AEvent event-management plugin for OpenClaw ([repo](https://github.com/aevent-platform/openClaw-aevent-plugin)) |
| `taminhtammicros/Multi-Bot-Agent` | 0 | Zalo bot able to connect to Hermes and OpenClaw ([repo](https://github.com/taminhtammicros/Multi-Bot-Agent)) |
| `GoatInAHat/viable-system-claw` | 0 | Graph-first recursive org structure + adaptive compute allocator for OpenClaw ([repo](https://github.com/GoatInAHat/viable-system-claw)) |
| `Xiamu-ssr/PA-RTOS` | 0 | OpenClaw cloud "PA" with a small HTTP connector for RTOS handhelds ([repo](https://github.com/Xiamu-ssr/PA-RTOS)) |
| `inspiration-city/superagent-starter-kit` | 0 | Connects external agents (Grok, Claude, ChatGPT, Hermes, OpenClaw) to Inspiration City ([repo](https://github.com/inspiration-city/superagent-starter-kit)) |
| `fazal-bhinder/*` (4 repos: emoji-search, zalgo-text, metadata-inspector, discord-timestamp) | 0 | A coherent plugin micro-ecosystem by one author: emoji-by-meaning search, zalgo/glitch text rendering, EXIF/metadata-leak inspection, Discord unix timestamps ([emoji-search](https://github.com/fazal-bhinder/openclaw-emoji-search), [zalgo-text](https://github.com/fazal-bhinder/openclaw-zalgo-text), [metadata-inspector](https://github.com/fazal-bhinder/openclaw-metadata-inspector), [discord-timestamp](https://github.com/fazal-bhinder/openclaw-discord-timestamp)) |
| `miguelbranco80/openclaw-plugin-qa-public-20261104` | 0 | Disposable computer-use QA harness, synthetic content only ([repo](https://github.com/miguelbranco80/openclaw-plugin-qa-public-20261104)) |

- **INFERRED:** the genuinely interesting in-window signal is **vertical integration into enterprise runtimes** (Cloudera AI sandbox, Azure BlobFuse2 benchmark) and **channel-native UX plugins** (Telegram polls, Discord timestamps, Zalo multi-bot) — these are the first entries in several windows that look like productization rather than demos. The `fazal-bhinder` cluster (4 plugins, one author, same day) is a **single-author plugin farm**, not a community signal.
- **STATED:** several repos are explicitly self-described as disposable/test/privacy stubs (`miguelbranco80/…-qa-public-20261104` "synthetic test content only", `vincentkoc/openclaw-windows-promotion-proof-191798` "Isolated Windows release promotion integration proof for OpenClaw PR 191798", `aintnerd/rclone-openclaw` "Public documentation and privacy policy…", `sotnikovatat78-png/…` "Public info pages…", `tdta0905/OPENCLAW-CAROO`, `CarlitraC/OpenClaw-CarlitraC` "OpenClaw Clases"). These look like **automated/SEO content repos around AI-agent keywords** — a second, distinct spam class from the `genpark` mirrors.

---

## External press

**STATED — external coverage of `2026.10.10` now exists; yesterday there was none.** In-window (2026-11-04) items:
- `https://www.boaoai.cn/en/news/2026-11-04-openclaw-v2026-10-10-advisor-chat-details/` — "OpenClaw v2026.10.10 (published 2026-11-03, 3,028 PRs, 454 contributors) adds the Chat Details observability panel, the experimental Advisor that catches agents drifting off-task, a split speech voice mode, MCP Relay for ChatGPT/Claude, and event-triggered automations." (dated 2026-11-04 → **in-window**)
- `https://blockchain.news/ainews/openclaw-v2026-10-10-adds-advisor-and-split-speech-release-analysis` — release analysis citing the official OpenClaw Twitter account, "3,028 PRs by 454 contributors".
- `https://superpowerdaily.com/posts/openclaw-adds-an-experimental-adviser-that-can-flag-an-agent-s-wrong-turns` — Advisor described as advisory-only ("neither uses tools nor authorizes actions, and its checks consume extra model calls"), plus paired-computer folder access and MCP Relay for ChatGPT/Claude.
- `https://freedom.tech/posts/2026-11-03-openclaw-2026-10-10/` — mirrors the changelog (MCP apps, cloud environments: verified Node toolchains, repo recipes, saved profiles, local-to-cloud session moves).
- `https://svrforum.com/itnews/3238913` — same changelog mirror.
- `https://whatsnew.fyi/product/openclaw/releases/v2026.10.10`, `https://releasebot.io/updates/openclaw` — automated release trackers.
- Official docs: `https://docs.openclaw.ai/releases/2026.10.10`, `https://docs.openclaw.ai/plugins/mcp-relay`.
- **INFERRED:** press coverage in the 24–31 h after release is **low-volume but non-zero and largely derivative** (release-note mirrors + tracker bots). No independent testing, adoption or failure analysis found. Coverage leans on the Advisor + MCP Relay + Chat Details angles.
- **STATED:** `https://docs.openclaw.ai/releases/2026.11.5-beta.1` returns **HTTP 404** — the new beta's release notes are **not yet published on the docs site**; the changelog is currently only available inside the npm tarball.

---

## Caveats & data gaps

1. **Download data for 2026-11-03 and 2026-11-04 does not exist yet** (npm returns 0 / omits the days). The release-effect test for `2026.10.10` is **unanswerable this window** — the first possible answer is the 2026-11-05 run.
2. **GitHub core API rate limit exhausted** (60/60 unauthenticated, reset hourly) partway through the window; the `gh` CLI token in `~/.config/gh/hosts.yml` is **invalid** ("The token … is invalid") and no valid `GITHUB_TOKEN` is exported in the environment. Consequently I could **not** list per-asset releases for the enterprise repo, could not read GitHub advisory `published_at` fields directly (worked around it with the advisory list page), and could not fetch per-issue detail for all 5 `impact:security` items. **Fix for next run: repair the `gh` auth.**
3. **GitHub search-API `total_count` is used for the 705 PR / 171 issue figures.** These are search-index counts, subject to indexing lag and to `created:` qualifier semantics; treat as approximate.
4. **No yesterday-baseline for PR/issue creation rate** → cannot state whether 705 PRs/day is a trend or the norm.
5. **The 2026.10.10 PR/contributor figures conflict** across sources (3,019/367 yesterday vs 3,028/454 in press). Unresolved.
6. **The `genpark-personal-agent-*` mirror farm changed shape**: still ~49% of the visible new-repo page, but now **0 stars** each instead of the previous uniform 7-star floor. Whether that means star removal or a fresh wave of unstarred mirrors is not distinguishable from one snapshot — next window should re-check.
7. **Showcase page grew 140 bytes** but yesterday's HTML was not retained, so I cannot prove the delta is a new entry vs a template change. Snapshot-and-diff next window.
8. **ClawHub skill count was not re-measured** (GitHub API rate limit) — the "52 new skills" figure from yesterday's window is still unrefreshed.
9. `2026.11.5-beta.1` npm tarball is **117.6 MB** compressed; the beta ships **no binaries** on GitHub Releases, so **desktop-app uptake for the 2026.11 line cannot be measured yet**.

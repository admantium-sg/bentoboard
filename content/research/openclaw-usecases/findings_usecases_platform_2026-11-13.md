# Platform Pass — 2026-11-13 (RECONSTRUCTED from local captures)

**Window:** 2026-11-12T09:28:00Z -> 2026-11-13T09:28:00Z (UTC)
**Method:** offline reconstruction from `tmp13/` raw captures; no live API calls, no web_search, no web_fetch. Values reflect the state at capture time (2026-11-13 ~10:30-10:55 UTC) and may already be stale.
**Capture dir:** `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp13/`

## Findings

### 1. NO OPENCLAW RELEASE PUBLISHED IN-WINDOW — latest release is the prerelease `v2026.11.5-beta.2`
The GitHub releases capture (`rel.json`) contains 5 releases for `openclaw/openclaw`; the newest is `v2026.11.5-beta.2` (prerelease, published 2026-11-12T00:43:25Z, created 2026-11-10T02:31:36Z, 5 assets). That publication timestamp is **8h45m before** the window opens (2026-11-12T09:28Z), so nothing shipped to users during the window. The preceding stable releases were `v2026.11.3` (2026-11-10T18:53:07Z, 17 assets) and `v2026.9.37` (2026-11-10T20:42:54Z, 5 assets); older: `v2026.11.2` (2026-11-08T19:31:04Z), `v2026.11.1` (2026-11-05T09:48:37Z). **Stable channel is still 2026.11.3.**
Source: `tmp13/rel.json`; https://github.com/openclaw/openclaw/releases

### 2. BETA.2 SHIPPED TWO SECURITY FIXES (fast-uri 4.2.3 + Discord SDK bounded collections) — but they are pre-window
`v2026.11.5-beta.2` body records: "Security: reject malformed URI identifiers using fast-uri 4.2.3 while preserving valid relative references (#187284)" and "Security: reject oversized bounded collections early in the Discord SDK and its transitive Zod 3 parser without restoring the retired A2UI integration (#187296 #187303)". Headline features: paged two-directional chat history with visible history boundaries (#188450, #188483, #188557, #188372, #190690), macOS app preserving saved secrets + Gateway auth on failed config saves (#187734, #187664), and Android Talk termination no longer cancelling Gateway-accepted work (#188798). No new security line-item landed *inside* the window.
Source: `tmp13/rel.json` (release body of v2026.11.5-beta.2)

### 3. MAIN REPO COMMIT ACTIVITY CONTINUES UNINTERRUPTED — 5 commits, all in-window, all 2026-11-13 morning
The `openclaw/openclaw` commits capture (`gh2.json`, 5 commits) contains **5 commits, all authored inside the window** (2026-11-13T08:14Z–08:53Z): `feat(backup): restore PostgreSQL stores into a staging database for restore drills (#194808)`, `fix(ci): bound planner benchmark dispatch inputs (#198147)`, `test(agents): preserve BTW user context boundaries` (no PR ref), `fix(ui): keep dictated text when the window loses focus (#197852)`, `test(ui): follow ordered browser input in route handoff (#198192)`. All are signed/verified (`verification.reason: "valid"`, PGP signature present). Zero commit *reverts* or hotfix-on-hotfix markers appear.
Source: `tmp13/gh2.json`; https://github.com/openclaw/openclaw/commits

### 4. ENTERPRISE REPO SAW A 10-PR TYPESCRIPT-CONVERSION BURST BY OPENAI ENGINEERING, RIGHT AT WINDOW CLOSE
`oe2.json` is a GitHub search capture over `openclaw/openclaw-enterprise` (total_count 136, 10 items returned). **All 10 returned PRs were created between 2026-11-13T08:17:01Z and 2026-11-13T09:26:29Z** (i.e. in-window, all but one within ~9 minutes of each other), **all authored by `freeqaz-openai`**, numbered contiguously **#5773–#5782**. Titles: Share manifest rendering and parsing in production chart tests (#5773); Share Agent and Gateway readiness setup in Kubernetes Compute tests (#5774); Convert seccomp profile conformance tests to TypeScript (#5775); Type Sandbox Harness observation fixtures (#5776); Share typed gRPC service lookup across OpenShell integration fixtures (#5777); Type model discovery subprocess fixtures (#5778); Convert upgrade preflight journal integration tests to TypeScript (#5779); Type the shared Sandbox startup fixture (#5780); Share the OpenShell workspace expiry Secret fixture (#5781); Convert OpenShell Git denial conformance cases to TypeScript (#5782). Pattern: **OpenShell / sandbox / harness conformance-test suites being migrated to TypeScript** — a testing-hardening signal, not a product feature.
Source: `tmp13/oe2.json`

### 5. OPENCLAW-ENTERPRISE SHIPPED NO RELEASE IN-WINDOW — capture is an empty array
`oerel.json` contains literally `[` + `]` (5 bytes) — the releases endpoint for `openclaw/openclaw-enterprise` returned an **empty list**. Explicit: enterprise released nothing in (or before) the window. The two enterprise commits in `oe3.json` are both **out of window** (Free Wortley, 2026-11-11T22:24:17Z, "Add operator-owned scratch PVCs for dedicated OpenShell Agents (#5333)"; Kimi Yu, 2026-10-20T23:14:57Z, "docs: explain remote Harness execution and split storage (#3047)"). The commit capture itself is a narrow 2-item sample, so it cannot be read as "only 2 commits happened".
Source: `tmp13/oerel.json`, `tmp13/oe3.json`

### 6. CLAWHUB REGISTRY SNAPSHOT: 7,709 SKILLS / 1,146 PUBLISHERS / 7.04M CUMULATIVE DOWNLOADS
The full-registry walk (`clawhub_all.json`, produced by `walk.py` paging `clawhub.ai/api/v1/skills?limit=100` until exhaustion) captured **7,709 unique skills** from **1,146 distinct publishers**, with **7,040,097 summed downloads** and **54,692 total skill versions** summed. Only **12 skills have zero downloads**. Long-tail structure is extreme: the top skill `pskoett/self-improving-agent` alone holds **492,597 downloads** (created 2026-01-05, 42 versions), then `pollyreach/pollyreach` (102,284), `byungkyu/api-gateway` (88,447, **191 versions**), `othmanadi/planning-with-files` (46,480), `iswalle/getnote` (31,972), `nhadaututtheky/neural-memory` (19,295). Largest publisher by catalog size is `oomol` with **1,703 skills** (23.4% of the top-5 publisher share), then `deciqai` (242), `nvidia` (167), `hillstreet-ph` (150), `dlazyai` (134).
Source: `tmp13/clawhub_all.json`; https://clawhub.ai/api/v1/skills

### 7. 104 NEW SKILLS PUBLISHED IN-WINDOW ACROSS 46 PUBLISHERS — publisher concentration 34.6% IN THE TOP 3
`clawhub_inwindow.json` (filter applied by `walk.py`: `2026-11-12T09:28Z <= createdAt < 2026-11-13T09:28Z`) contains exactly **104 new skills** from **46 distinct publishers**; every one of the 104 also has `updatedAt` in-window (i.e. they are first-time publishes, not version bumps). Earliest `createdAt` 2026-11-12T09:33:31Z, latest 2026-11-13T09:16:38Z. Top publishers: **wiroai 21** (20.2% of the window alone), bassemzohdy 8, conn-ho 7, zengfr 6, cristianoleamiranda-dotcom 5, marike86 4, yumingtao 4, vargai 3, agenticweb4 3, scavio-ai 3, nvidia 2, jackchew7143 2, chrischall 2, ktemiainc 2 — only **14 of 46 publishers shipped ≥2 skills**. Top-3 share = **34.6%** (36 of 104). The in-window skills accumulated **5,163 downloads** and **152 versions** by capture time (2026-11-13 ~10:36Z).
Source: `tmp13/clawhub_inwindow.json`, `tmp13/walk.py`

### 8. CLAWHUB REGISTRY GROWTH RATE IS FLAT-TO-DOWN vs. THE PRECEDING FOUR DAYS
Creation counts by UTC day inside `clawhub_all.json`: **2026-11-08: 92**, **2026-11-09: 137**, **2026-11-10: 130**, **2026-11-11: 116**, **2026-11-12: 113** (calendar day), **2026-11-13: 31** (partial day to 09:28Z). The in-window 24h total of **104** sits inside the normal 92–137 band but below the 11-09/11-10 peaks — i.e. **no publish surge in this window**; the notable part is concentration, not volume.
Source: `tmp13/clawhub_all.json`, `tmp13/clawhub_inwindow.json`

### 9. IN-WINDOW CLAWHUB THEMES SPLIT BETWEEN WESTERN AI/AUTOMATION AND CHINESE SOCIAL-COMMERCE TOOLING
Topic tags across the 104 in-window skills: **ai 21**, **mcp 13**, **social-media 10**, **douyin 8**, **xiaohongshu 8**, **image-generation 8**, **okdata 7**, automation 5, video-generation 4, sdk 4, mobile 4, agents 3, workflow 3. Two dominant clusters: (a) an `okdata` family of **7 skills from conn-ho** (`okdata-transcripts`, `okdata-content-research`, `okdata-trends`, `okdata-creators`, `okdata-comments`, `okdata-competitors`, `okdata-setup`, all v0.1.0 — a creator/competitor intelligence suite); (b) TikTok/Reels short-form video tooling (wiroai's 21-skill batch covers TikTok Shop video, product-video hooks, short-form FFmpeg cookbook, stickman-video etc., v1.0.6, license MIT-0). Version profile of the window: 1.0.0 ×35, 0.1.0 ×31, 1.0.1 ×18, 2.0.0 ×2, 0.1.1 ×2, 0.4.0 ×2, 1.3.1 ×2, 0.3.3 ×1, 0.0.1 ×1, 2 untagged — overwhelmingly first releases.
Source: `tmp13/clawhub_inwindow.json`, `tmp13/hc.json`, `tmp13/w1.json`, `tmp13/ch1.json`

### 10. NO OFFICIAL BLOG POST IN-WINDOW — the newest openclaw.ai blog entry is 7 days old
The official blog RSS capture (`blog3.xml`, 25 items) has its most recent entry **"Use new models in OpenClaw without an update" dated Fri, 06 Nov 2026 00:00:00 GMT**, followed by "Shattering Silos with OpenClaw Multiplayer" (2026-11-05T17:00Z) and "Come Build With Us: OpenClaw Focus Weeks" (2026-10-21). **Zero items between 2026-11-12T09:28Z and 2026-11-13T09:28Z.** A second RSS attempt (`blog2.xml`) returned the body "The page could not be found / NOT_FOUND / fra1::2mdwq-1794562965032-…" — a CDN 404 for that feed URL, not a content signal.
Source: `tmp13/blog3.xml`, `tmp13/blog2.xml`; https://openclaw.ai/blog/

### 11. DOCS SURFACE AT CAPTURE TIME: RELEASE NOTES STOP AT 2026.11.3, AND CLOUD-WORKERS / WINDOWS-HUB / GEMINI-4-ARGON ARE THE CURRENT HEADLINE FEATURES
`llms.txt` (1,461 doc links, captured 2026-11-13 ~10:45Z) indexes release-note pages only up to **`releases/2026.11.3`** (no `2026.11.4`/`2026.11.5` page — the beta is undocumented), and exposes a **19-page `gateway/cloud-workers` family** (security-model, session-lifecycle, warm-images, placement-and-machine-selection, native-inference, environment-file, per-project-default-profiles, dispatching-a-session, desktop, setup-and-bundle-installation, verify-the-profile, troubleshooting) plus `gateway/cloud-sessions`, `gateway/openshell-workers`, `gateway/config-cloud-workers`, `plugins/codex-harness`, `plugins/codex-harness-reference/*`, `platforms/windows`, `plugins/advisor`. The captured doc pages themselves state: **Cloud Workers** dispatch session work to disposable cloud machines via a **Crabbox** backend, default profile = Linux / smallest advertised standard class / **4-hour total lifetime / 45-minute idle timeout and suspend**, warm images enabled, Gateway-side snapshot capture, stop-with-release semantics ("environment stays `destroying` until release is confirmed, and charges can continue during that interval"); **Windows** = native **Windows Hub** (WinUI, `openclaw/openclaw-windows-node`, signed x64 + ARM64 installers, no admin rights) as the recommended path with the cross-platform **Tauri** app as backup and WSL2 as the terminal path; **Google (Gemini)** provider = AI Studio key or Vertex ADC, **default model `google/gemini-4-argon`**, optional `google-gemini-cli` runtime; **Auto Review** = optional `autoreview` plugin running the reviewer through a restricted `openclaw agent exec`; **Standard Codex Preset** (OCE) = dedicated Codex Harness on its own separate OpenClaw gateway with hosted search, explicitly **"a launch template, not a Pod-wide network isolation guarantee"**. These are **doc snapshots at capture time, not verified in-window doc changes**.
Source: `tmp13/llms.txt`, `tmp13/cwm.md`, `tmp13/win.md`, `tmp13/gp.md`, `tmp13/ar2.md`, `tmp13/scp.md`

### 12. ENTERPRISE DOC SURFACE CONFIRMED AT 18 GUIDES — including the Standard Codex Preset guide
The enterprise repo tree capture (`oe.json`) lists exactly **18 files under `docs/guides/topics/`**: README, agent, agent-compute, agent-logs, agent-presets, agent-revisions, agent-sandbox-policy, agent-troubleshoot, audit-log, iam, openclaw-plugins, plugins, plugins-configure, remote-harness, sandbox, secrets, standard-codex-preset, workspace-files. Sizes range 2,123 B (plugins.md) to 19,876 B (agent-troubleshoot.md). `scp.md` is byte-identical in size to `standard-codex-preset.md` (12,000 B), confirming the captured preset guide is the live enterprise topic file. The tree capture carries **no commit timestamps**, so it cannot be dated into the window.
Source: `tmp13/oe.json`, `tmp13/scp.md`

### 13. NO P0/P1 PRIORITY ISSUE WAS CREATED IN-WINDOW — the only captured P1/P2 items are from September
The GitHub issue/PR search capture (`gh3.json`, total_count 3) returns exactly three labelled items, **all created outside the window**: PR #159466 "fix(codex): recover remote connections during harness replacement" (labels include **P1**, created 2026-09-27T06:08:24Z), PR #152652 "feat(workspace): deliver uploaded files to remote harness turns" (labels include **P2**, created 2026-09-19T07:02:18Z), and issue #42139 "ACP external harness on remote Mac node is unclear/broken in Discord workspace flow" (created 2026-03-10T12:45:23Z). No item in the capture carries a label set indicating a P0. **No new P0/P1 issue creation is evidenced in-window.**
Source: `tmp13/gh3.json`

### 14. GITHUB REPO-LEVEL STATISTICS ARE UNRECOVERABLE — the capture is an auth failure, not data
`gh1.json` contains exactly `{"message": "Requires authentication", "documentation_url": "https://docs.github.com/rest", "status": "401"}` (120 B). The endpoint attempted was unauthenticated GitHub REST (the repo-stats / repo-metadata route), so **stars, open-issue counts, forks, watchers and any P0/P1 counts derived from repo stats for the window are not recoverable from this capture** — and the request was never retried with a token.
Source: `tmp13/gh1.json`

### 15. NPM REGISTRY DATA WAS LOST — the capture is a bare "Not found" body
`n1.json` is 9 bytes containing the literal string `Not found` — an empty/404 registry response body with no JSON envelope, no `versions`, no `time`, no `dist-tags`, and no record of which package name or endpoint was requested. Consequently **no npm publish timestamps, no dist-tags, no version-list for `openclaw` can be reconstructed for the window**, and the npm download point/range (the `w1`-style downloads metric) is likewise unavailable: `w1.json` is **not** an npm downloads payload — it is a ClawHub API listing page containing 4 skill objects (`product-video-hooks`, `short-form-ffmpeg-cookbook`, `tiktok-shop-video`, `stickman-video`).
Source: `tmp13/n1.json`, `tmp13/w1.json`

### 16. NO CLAWSTAT VERDICT CAPTURE EXISTS
No file in `tmp13/` contains a ClawStat `latest.json` payload — a directory-wide case-insensitive search for "clawstat" returns **zero hits**. The ClawStat verdict, `recommended_version` and blocker list for the window are therefore **not recoverable**; the only related artifact is the release list in `rel.json`.
Source: `tmp13/` (no capture present)

### 17. GOOGLE AI BLOG CAPTURE CARRIES NO DATED IN-WINDOW ITEMS — EXTERNAL COMPETITOR SIGNAL NOT USABLE
`g.html` (386 KB, "Official Google AI news and updates | Google Blog") yields **no parseable date strings** ("November … 2026" pattern: 0 hits) and only 8 distinct blog links, all **section index pages** (`/innovation-and-ai/technology/ai/`, `/products/ads-commerce/`, `/waze/`, `/security/`, `/innovation-and-ai/`, `/innovation-and-ai/technology/`, `…/research/`, `…/developers-tools/`) — no individual dated post. **No Google-side announcement can be attributed to the window** from this capture.
Source: `tmp13/g.html`

### 18. COMPETITOR DOC PAGES CAPTURED AS CROSS-CHECKS ONLY — CLAUDE CODE LEGAL PAGE AND CHATGPT DOCS, NO IN-WINDOW DELTA
`cc.html` = "Legal and compliance - Claude Code Docs" (81,930 chars of extracted text: Commercial ToS, license, commercial agreements, BAA/healthcare compliance, acceptable use, credential use, security & trust, vulnerability reporting) and `oa.html` = ChatGPT docs HTML (`site_variant: chatgpt-docs`, canonical `learn.chatgpt.com`). Neither carries a publication or revision timestamp, so both serve only as **static corroboration** for third-party/legal claims — no dated in-window change is derivable. `dm.html` is a 363-byte meta-refresh stub redirecting `/…` → `/concepts/models`, i.e. a docs URL move, not a content change.
Source: `tmp13/cc.html`, `tmp13/oa.html`, `tmp13/dm.html`

### 19. PROVENANCE CORRECTION ON SEVERAL NAMED CAPTURES (file names are misleading)
`show.json` is **not** a showcase page — it is Discourse `users.json` (users joe, patrickerichsen, AmelioMansour, rocke2020, cognifolk, system). `joe.json` is Discourse **badges** (Leader badge granted 2026-09-16; Mutual Appreciation 2026-11-06; Appreciated Contributor 2026-11-06 — all pre-window). `cat_4.json`, `cat_6.json`, `cat_7.json`, `cat_8.json`, `cat_9.json` and `cats.json` are **Discourse category listings** (`category_list` with topics/post counts), *not* ClawHub categories — so **no ClawHub category-level breakdown is recoverable**. `ar.md` and `cw.md` are both the 10-byte body "Not found" (first-attempt 404s superseded by the successful `ar2.md` and `cwm.md`). Reddit/Discourse captures (`reddit_*.xml`, `r_hot.xml`, `c_*.xml`, `o_*.xml`, `t_*.json`, `dp3.json`, `dp4.json`, `discourse_p1/p2.json`, `bumped.txt`, `disc_out.txt`, `retry.log`) are the **community** pass and were already written up in `findings_usecases_community_2026-11-13.md`; they are not re-litigated here.
Source: `tmp13/` file inspection

## Unrecoverable / gaps

- **npm registry versions, publish timestamps and dist-tags** for the `openclaw` package — `n1.json` = 9-byte body "Not found", no envelope, no recorded package/endpoint.
- **npm download points/ranges** (including the prior-week same-weekday comparison) — no npm downloads API capture exists. `w1.json` is a ClawHub listing page, not npm data.
- **GitHub repo-level stats** (stars, open issues, forks, watchers) and any repo-stat-derived delta — `gh1.json` = HTTP 401 "Requires authentication".
- **P0/P1 issue creation lists for the window** — only a 3-item labelled search capture exists (`gh3.json`), all items created Sept 2026 or earlier; no date-filtered P0/P1 query was captured.
- **ClawStat verdict / recommended_version / blockers** — no capture at all (zero "clawstat" hits in `tmp13/`).
- **OpenClaw Cloud / OCE control-plane live state** — the OCE material is documentation only (`scp.md`, `oe.json` tree); no live OCE API, deployment counts, tenant counts or fleet stats were captured.
- **Showcase page state** — the showcase page was not captured on 2026-11-13; `show.json` is a Discourse users payload, and the only showcase HTML on disk (`../showcase.html`, 150,922 B) is dated Nov 10, i.e. three days before this window.
- **Security advisories / CVE feed** — no advisory endpoint capture exists (zero `CVE-2026` hits in `tmp13/`).
- **Registry growth delta vs. the previous 24h window** — no 2026-11-12 registry snapshot exists in `tmp13/`; the day-over-day comparison can only be made against per-day counts inside the 2026-11-13 snapshot itself.
- **Exact publish ordering / sub-hour timing** of ClawHub uploads beyond `createdAt`/`updatedAt` per skill — no publish-event log captured.
- **Press / external media coverage** — no press capture exists in `tmp13/`; the two external HTML captures (`g.html`, `cc.html`) carry no dates.

## Caveats & data gaps

1. All figures are **capture-time snapshots** (2026-11-13 ~10:30–10:55 UTC), taken ~1–1.5 h after the window closed; ClawHub download counts in particular grow continuously and are understated here.
2. `clawhub_all.json` was produced by a **full cursor-walk of the ClawHub API**, so the 7,709 / 1,146 / 7,040,097 figures are registry totals at capture time, not in-window deltas. The in-window count (104) comes from `clawhub_inwindow.json`, which is the same walk filtered by `createdAt`.
3. `oe2.json` is a **paginated search result**, not a complete issue listing: `total_count` = 136 with 10 items returned. There may be additional in-window enterprise PRs beyond those 10 that were never returned to the capture.
4. `gh2.json` (5 commits) and `oe3.json` (2 commits) are **bounded commit-list samples**, not full commit ranges; "5 in-window commits" is a floor, not a total.
5. `oe.json` (enterprise doc tree) and the `llms.txt` index carry **no commit or edit timestamps**, so doc-surface statements are "true at capture", not "changed in-window". The same applies to `cwm.md`, `win.md`, `gp.md`, `ar2.md`, `scp.md`.
6. The `blog2.xml` "NOT_FOUND" body and the `g.html`/`oa.html`/`cc.html` captures contain **no in-window dated content**; they must not be read as events.
7. `dp3.json` / `dp4.json` (Discourse latest, 30 topics each) contain **zero topics created in-window** — confirming the Discourse side of this window is carry-over activity, not new topics; the substance lives in `findings_usecases_community_2026-11-13.md`.
8. All 104 in-window ClawHub skills are **first-time publishes** (createdAt == updatedAt within the window), so the window contains **zero version bumps** to existing skills — a genuinely quiet release surface.
9. Reconstruction is **offline only**: no number in this file was re-verified against a live endpoint, and no web search or fetch was performed. Provenance for every number is the local capture path cited under each finding.

# Task 1 — Platform findings 2026-11-28 (window 2026-11-27T09:28Z → 2026-11-28T09:28Z)

## Findings

1. **NEW STABLE RELEASE 2026.11.11 shipped to npm during the window** — npm `time` says `2026.11.11` published **2026-11-28T04:05:49Z**; dist-tags are now `latest=2026.11.11`, `beta=2026.12.1-beta.1`, `extended-stable=2026.10.34` (unchanged). A `v2026.11.11` git tag exists (`5a26c348…`).
   Source: https://registry.npmjs.org/-/package/openclaw/dist-tags · https://registry.npmjs.org/openclaw · https://api.github.com/repos/openclaw/openclaw/git/refs/tags/v2026.11.11

2. **There is NO GitHub Release object for v2026.11.11** — `GET /releases/tags/v2026.11.11` returns **404**; the newest GitHub releases are `v2026.12.1-beta.1` (prerelease, published 2026-11-28T00:21:04Z) and `v2026.11.10` (2026-11-25T05:42:47Z). The stable release is therefore npm-first; the GitHub release trail lags npm by one version, and `openclaw.ai/install` still links **v2026.11.10** DMGs (`OpenClaw-2026.11.10.dmg`, `-arm64.dmg`, `-x86_64.dmg`); the v2026.11.11 DMG URLs return **404**.
   Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.11 · https://api.github.com/repos/openclaw/openclaw/releases · https://openclaw.ai/install

3. **2026.11.11 is a small, maintenance-shaped release: 7 in-range PRs, 5 highlights, 40 deprecation review dates.** Highlights: fresh-Knowledge-chat context-overflow acceptance (#204925), clean conversation previews (#204950), Mattermost caption markdown (#204955), **Linux updater feed URL verification before reuse (#205044)**, release-docs deployment confirmation (#204906). Fixes concentrate on context budgeting, message formatting, and release/update reliability. **40 plugin-SDK/Doctor surfaces carry "upcoming deprecation" review dates — 38 of them on 2026-11-29 (tomorrow), one on 2026-11-30, one on 2026-12-01.**
   Source: https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.11/CHANGELOG/2026.11.11.md

4. **The 2026.11.11 commit range (134 commits ahead of v2026.11.10) is dominated by update/Doctor/macOS/install reliability**, including `fix(update)[2026.11.11]: recover interrupted pnpm updates on the installed generation (#205849)`, `fix: keep Doctor from restarting the Gateway in the middle of a package update (#205743)`, `fix: let Doctor repair a release install while its Gateway runs (#204017)`, `fix(update): settle a 2026.11.10 pnpm update that released its lease after verifying (#205760)`, `fix(macos): recover busy DMG audit detaches`, `fix(macos): offer app downloads when local state needs a newer build (#205670)`, `fix(daemon): keep the installed macOS PATH order when refreshing the service (#205004)`, `fix(installer): accept the verified 2026.11.10 updater warning`.
   Source: https://api.github.com/repos/openclaw/openclaw/compare/v2026.11.10...v2026.11.11

5. **v2026.12.1-beta.1 is a very large prerelease (≈97 KB release body) published in-window** — highlights include: prompt caching reused across routes with **automatic compaction starting at 85 % of the context window** (#204111/#204219/#204210); **Session Share over outbound WSS** opening shared sessions in their source Control UI (#201075/#203044); **Templates** shared from a menu and previewed without expanding files into chat (#201644/#202060/#202126); **Lean Gateways** sharing core worker code under a memory budget (#202495/#202507, fixes #202377/#202376); project-scoped restricted roles in access management (#203470/#202315); **Cloudflare Access JWT verification for trusted-proxy auth** (#200376, fixes #200361); Slack channel listing + Knowledge learning from Slack (#202410/#202411); ClawHub catalog browse-by-category inside Skills (#202756); Codex `/codex review` targeting a branch/commit/custom instructions (#202114); Codex app-server + ACP runtime bump to 0.172.0; Nano Banana 2.1 image generation; **subagent settlement fixes — "settle undelivered child completions into parent history, preserve yield settlement through cleanup, and avoid duplicate final replies" (#204260/#204178/#203222/#204098)**; Codex handoff-stall fix when a retired writer stays loaded (#196172).
   Source: https://api.github.com/repos/openclaw/openclaw/releases · https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1

6. **npm demand keeps climbing, faster than yesterday.** Daily downloads: 2026-11-27 = **462,057** (vs 433,040 on 11-26, **+6.7 %**); 2026-11-28 partial = 0 (day not finished). Rolling 7-day 11-21…11-27 = **3,351,123**; 11-20…11-26 = **3,281,223** (matches clawstat's own weekly figure exactly); 11-14…11-20 = 2,747,582 → **+21.97 %** for the freshest full window; 11-13…11-19 = 2,834,248 → **+15.77 %** for the prior week-on-week pair.
   Source: https://api.npmjs.org/downloads/point/2026-11-27/openclaw · https://api.npmjs.org/downloads/range/2026-11-06:2026-11-28/openclaw

7. **GitHub repo stats (2026-11-28T09:29Z): stars 395,369 (+52 vs yesterday's 395,317), open issues 9,416 (+135 vs 9,281), forks 83,016, watchers 1,690, pushed_at 2026-11-28T09:29:43Z.**
   Source: https://api.github.com/repos/openclaw/openclaw

8. **Intake for 2026-11-27…2026-11-28: 225 new issues, 962 new PRs, 797 PRs merged.** Label split of new issues: **P0 8, P1 31, P2 135, P3 42**.
   Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28 · https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-27..2026-11-28 · https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-27..2026-11-28 · https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:P0 · https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:P1

9. **CORRECTION: #206422 (settlement sweeper / sub-agent runs stuck `running` after Gateway crash restart) is CLOSED as completed** — closed_at **2026-11-27T09:45:26Z**, i.e. inside this window (yesterday's baseline still listed it as an open P1). The bot's last review says the defect was a *missing scheduling path* for interruption settlement on restored children. Downstream symptom issues remain open: **#207058** and **#207198** (reply-session rollover hangs 15 s, `ownerSettlement` never resolves for stalled/non-abortable runs — retain leak; same 15 s `cleanup_pending` settle gate as #203461).
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206422 · https://api.github.com/repos/openclaw/openclaw/issues/207058 · https://api.github.com/repos/openclaw/openclaw/issues/207198

10. **CORRECTION: the Codex base-prompt issue #206320 is NOT settled — its own reporter withdrew the clean reproduction.** Yesterday's baseline stated "4/4 failures" as fact. On 2026-11-27T03:59Z the reporter posted a public gist saying they tried to build a synthetic repro and **could not separate the two base prompts** (setup: 2026.11.10 build 3e25faa, bundled Codex CLI 0.172.0, `openai/gpt-6.2-sol` medium). The clawsweeper bot kept it open: "current main has no demonstrated fix". Issue remains **open, 2 comments**.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206320 · https://gist.github.com/brandon-julio-t/7aecde74e4d07d3a4cb17a7d06dc8e09

11. **NEW failure axis — state-database corruption on 2026.11.10 (P0 #207162, open):** on native Linux ext4, `~/.openclaw/state/openclaw.sqlite-wal` was unlinked and recreated as a 0-byte file while the Gateway was live; two seconds later `audit/events` failed with `database disk image is malformed`, `evictOpenClawStateDatabaseAfterCorruption` evicted the shared-state handle, and ~3 min later `infra/sqlite-wal` fired `sqlite_wal_sidecar_identity_mismatch` and **SIGKILLed the Gateway**. This is a fifth axis beyond the known four (update path, auth, sub-agent lifecycle, Codex instruction loss) — **state integrity / WAL sidecar identity**, with data-loss implications.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/207162

12. **NEW failure axis — Control UI onboarding demands the wrong credential (P0 #206921, open):** on 2026.11.10 with ChatGPT/Codex subscription OAuth and no OpenAI Platform API key, ordinary Gateway turns to `openai/gpt-6.1-terra` succeed, but the Control UI **"Create new agent"** flow fails its inference check demanding an API key.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206921

13. **NEW failure axis — Android multi-role onboarding is broken (P0 #207082, open, tagged `impact:security` + `needs-security-review`):** with `gateway.roles` configured, the Android client (2026.11.70, Solana Mobile Seeker) stalls at "Checking node access" on the QR flow, and setup-code pairing fails with **`AUTH_TOKEN_MISMATCH`** (only the master token works); node approval is a second, hidden step the app references but does not perform.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/207082

14. **NEW P0 — iOS app cannot recover local credentials after iPhone-to-iPhone migration (#206824, open):** after an Apple device-to-device transfer the OpenClaw iOS app can no longer reach the existing Gateway over HTTPS/Tailscale Serve despite the Gateway being reachable; device identity/credential store is lost.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206824

15. **The update-path P0 cluster keeps growing and now spans the extended-stable line:** #207140 and #207328 ("Update failure: **requested** (2026.11.10)", win32/x64, Node 24.19.0, managed-service, stable channel, "handoff failed before ownership transfer", Gateway kept serving) plus #206899 ("Update failure: **gateway-stop-unverified** (2026.10.9)", npm-global, update target 2026.11.10). All three are open and are machine-generated update reports.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/207140 · https://api.github.com/repos/openclaw/openclaw/issues/207328 · https://api.github.com/repos/openclaw/openclaw/issues/206899

16. **NEW failure axis — unbounded stdio MCP footprint (P1 #207360, open):** with default settings a Gateway grows to hundreds of stdio children because `mcp.sessionIdleTtlMs` is unset (eviction is opt-in since #141125) and the admission cap counts **256 runtimes, not servers** (256 × N children), while the broker's 448-child limit refuses new children instead of evicting idle ones → swap exhaustion and host degradation.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/207360

17. **NEW sub-agent-lifecycle variant (P1 #207095, open):** a subagent that yields twice after one grandchild finishes gets `already_pending` ("This turn owns no new claim, so no yield is needed: end this turn normally"), ends its turn with an interim message — and **the final answer is never delivered** when the second grandchild finishes. Related open P1s in-window: #207096 (nested tool-activity lifecycle error → Feishu consumer closed, message lost), #206879 (claude-cli chat turn held open indefinitely by nested/resumed background agents), #206556 (hidden subagent reply after exec wake posted to the user's chat as well as to the parent).
   Source: https://api.github.com/repos/openclaw/openclaw/issues/207095 · https://api.github.com/repos/openclaw/openclaw/issues/207096 · https://api.github.com/repos/openclaw/openclaw/issues/206879 · https://api.github.com/repos/openclaw/openclaw/issues/206556

18. **Gateway start-up regressions on 2026.11.10 remain the most-reported in-window class (P1):** #206914 (gateway fails to start after upgrade when `agentDir` is `agents/<id>` — `AgentDatabaseAdmissionError`), #206581 (agent preparation is strictly serial: **16 agents → ~12 min** until ready), #206944 (Control UI `native child reaping is unavailable | helper-unavailable` on read-only exec), #206820 (container worker rejects auto-resolved host `NODE_EXTRA_CA_CERTS`), #206264 (main-thread stalls grow with uptime — SQLite admission references for exited workers; closed).
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206914 · https://api.github.com/repos/openclaw/openclaw/issues/206581 · https://api.github.com/repos/openclaw/openclaw/issues/206944 · https://api.github.com/repos/openclaw/openclaw/issues/206820 · https://api.github.com/repos/openclaw/openclaw/issues/206264

19. **Channel/transport-specific in-window P1s:** #206989 (Telegram long-running turn loses source-send capability before completion yet is recorded as completed), #206954 (acpx form elicitation / Claude AskUserQuestion in a chat-bound ACP thread deadlocks the turn), #206955 (agent-initiated ACP turns recorded in the acpx session, not the channel), #206884 (cron prompt's `record no_change` hint silences replies the job requires), #206775 (macOS Safari: Control UI pins WebContent at 100 % CPU for ~90 s, input ignored), #206698 (Discord plugin gateway ws never becomes READY on macOS arm64/Node 24), #206500 (queued follow-up turn dropped permanently on transient Codex preflight busy errors).
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206989 · https://api.github.com/repos/openclaw/openclaw/issues/206954 · https://api.github.com/repos/openclaw/openclaw/issues/206955 · https://api.github.com/repos/openclaw/openclaw/issues/206884 · https://api.github.com/repos/openclaw/openclaw/issues/206775 · https://api.github.com/repos/openclaw/openclaw/issues/206698 · https://api.github.com/repos/openclaw/openclaw/issues/206500

20. **P0 #206776 (WhatsApp attachment decrypt crash → gateway crash loop) was closed in-window.** Original report: on 2026.10.7 a single inbound WhatsApp message caused **17 crashes in 32 minutes** with every agent down, because `downloadInboundMedia()` starts reading a Baileys decrypt stream without handling stream errors; the durable ingress queue then looped until the event was manually marked failed.
   Source: https://api.github.com/repos/openclaw/openclaw/issues/206776

21. **Security posture UNCHANGED — no new advisory.** The newest advisory is still **GHSA-pw3x-g8v8-fvj2** (published 2026-11-19T02:01:59Z, high, CVSS 8.8, CWE-863, `cve_id: null`, "OpenClaw delegation could skip approval for restricted agents") — now **9 days untouched**, with 0 linked issues / 0 linked PRs. All other advisories in the repo date from the 2026-09-11 bulk publication.
   Source: https://api.github.com/repos/openclaw/openclaw/security-advisories

22. **12 new in-window issues carry `impact:security`.** Besides #207082 (P0, above): **#206445** (a non-empty `plugins.allow` does not keep out a bundled plugin whose `plugins.entries.<id>.enabled` is true — privilege-boundary gap, open), **#206970** (feature: owner authority scoped to a single agent, multi-person household gateways), #207034 (repository-scoped release requests from Telegram topics), #206349/#206306/#206305 (features: gated outbound headers, per-run exec credentials, durable protected-store secrets for restart-surviving exec processes), #206324 (configurable local media roots), #206310 (Codex native creator capture omits placement for stream exec qualification).
   Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:impact:security · https://api.github.com/repos/openclaw/openclaw/issues/206445 · https://api.github.com/repos/openclaw/openclaw/issues/206970

23. **macOS deployment-target conflict is STILL unresolved and now has no artifact at all.** `openclaw.ai/install` still advertises **"macOS 15+"** while `docs.openclaw.ai/platforms/macos` still states **"OpenClaw.app requires macOS 26.2 (Tahoe) or later"** (also applying to the `openclaw-mac` helper, Voice Wake and push-to-talk). Issue **#187770 remains open and untouched since 2026-11-05T22:36Z**; #205894 and #206125 remain closed as `not_planned` duplicates. The 2026.11.10 DMGs are still the newest downloadable desktop builds.
   Source: https://openclaw.ai/install · https://docs.openclaw.ai/platforms/macos · https://api.github.com/repos/openclaw/openclaw/issues/187770 · https://api.github.com/repos/openclaw/openclaw/issues/205894 · https://api.github.com/repos/openclaw/openclaw/issues/206125

24. **CORRECTION (ClawHub enumeration): the `/api/v1/skills` endpoint is not simply "capped at ~194-195 rows".** With `limit=1000` it returns 199 items; the returned `nextCursor` (`by_active_updated`) yields a second page of 200 items of which **199 are duplicates** of page 1 (the cursor does not advance the set). Enumerating with `sort=newest` + cursor pagination instead yields **135 skills created in-window (2026-11-27T09:28Z→2026-11-28T09:28Z) from 38 publishers, 6,327 downloads, 0 installs**. The default (unsorted) listing exposes only 67 of those in-window skills, so yesterday's in-window counts were method-dependent.
   Source: https://clawhub.ai/api/v1/skills · https://clawhub.ai/api/v1/skills?limit=200&sort=newest

25. **clawstat has not yet assessed 2026.11.11.** Its latest assessment (2026-11-27T22:11:32Z) is pinned to version 2026.11.10 with recommendation **⚠️ "Update with care"** ("Fresh installs look fine, but upgrading from older versions can leave the gateway unable to start on macOS, Docker/Linux"); `recommended_version` is still **2026.11.6 with 3 critical blockers** (#203343 macOS credential-recovery loop, #203460 Linux installer SIGTTOU hang, #202925 macOS update-repair executor ownership); freshness `fresh=false`, `days_since_release=2`; 60 version-specific issues tracked (cap 60); its weekly-downloads calibration (3,281,223) exactly equals the npm 11-20…11-26 window.
   Source: https://clawstat.us/latest.json

26. **Official showcase gained navigation/footer chrome but ZERO new named-customer entries.** Diff against the cached showcase (byte-diff) shows only 4 changed blocks, all navigation/footer: "Looking for more? Check out even more examples in our docs →" removed, "View as Markdown" and "Terms of service" added, "Press"/"Shoutouts" footer links confirmed. The featured-builds body is unchanged (7 "X thread" entries in both captures). **No quantified metric (hours saved, cost, ROI) appears — the 8th consecutive day without one.**
   Source: https://openclaw.ai/showcase · https://openclaw.ai/showcase.md

27. **Enterprise positioning unchanged; still pre-1.0 pilot.** `openclaw.ai/enterprise` still reads "Open source · Pre-1.0 … Pre-1.0 software, intended for internal pilot workloads", multi-tenancy + shared control plane for governance/auditability, bi-weekly office hours for developers/operators/security teams exploring the platform. **No named customer, deployment count, or ROI figure on the page.** New official surfaces exist (/press, /shoutouts) but the newest press item is still **TechCrunch Jun 30, 2026** ("OpenClaw is finally available on Android and iOS") — no new press in-window; newest blog posts remain **Nov 24** ("A year of the Claw", 6 min; "Introducing ShellBench", 8 min). **ROI: still zero attributable data points.**
   Source: https://openclaw.ai/enterprise · https://openclaw.ai/press · https://openclaw.ai/shoutouts · https://openclaw.ai/blog

28. **Hacker News: still no OpenClaw traction in-window.** Only 2 in-window stories; neither is about OpenClaw — "Show HN: Fleetlayer" (framework for running many AI agents on multiple machines; mentions openclaw once) with 3 points / 0 comments, and "Show HN: SoundEtch" (podcast editor, 0 OpenClaw mentions) with 2 points / 0 comments. The official ShellBench launch continues to draw zero HN engagement.
   Source: https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story&numericFilters=created_at_i%3E1795771680

29. **Discourse: 9 new topics in-window, all troubleshooting/general — zero Build & Showcase.** Includes "Openclaw config trouble", "macOS 2026.11.5: safe recovery of an abandoned Doctor reservation without upgrading?", "Activity Recap cancellation makes OpenClaw fall back to older Codex until the Gateway restarts", "Gateway usage-cost fails with RangeError on 2026.11.6: cause and workaround", plus off-topic posts (fan, ebike). The Codex-related thread from 11-24 ("Codex harness starts a new thread on every change of turn origin") remains the most technically substantive Codex thread and is 4 days old.
   Source: https://community.openclaw.ai/latest.json

## Negatives & caveats

- **A filesystem cleanup process wiped `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp/` mid-run** (my `tmp/2026-11-28/` capture directory was deleted after ~8 minutes of collection). All raw captures were re-fetched afterwards; the numbers above come from the re-fetched files, but the first-round artifacts (e.g. the full `cl_1111.md`, showcase/press/blog HTML, ClawHub pages 1-2, `gh_issues_new.json`, `gh_advisories.json` with per_page=20) were re-derived from context rather than re-verified byte-for-byte. Figures that were re-verified after the wipe: dist-tags, repo stats, releases (top 5), npm range, issue/PR/merged counts, P0/P1 lists, advisories (per_page=5), changelog 2026.11.11.md.
- **GitHub search counts are date-granular, not window-granular.** `created:2026-11-27..2026-11-28` covers whole calendar days; the same-shaped query for 2026-11-26…2026-11-27 returns 348 issues / 1,057 PRs / 934 merged — materially higher than yesterday's baseline figures (237 / 673 / 596). I could not reproduce yesterday's 237/673/596 under any query shape I tried (1-day 2026-11-27 alone = 169 issues / 635 PRs / 565 merged), so **yesterday's intake numbers are not directly comparable** to today's; treat the delta as method-dependent rather than a real drop in throughput.
- **npm's 2026-11-28 daily point is 0** because the day is incomplete; all growth math uses completed days only. Yesterday's "+3.5 %" rolling-window figure could not be reproduced from either 7-day pair (freshest full pair = +21.97 %, prior pair = +15.77 %); the +15.8 % figure does reproduce exactly.
- **ClawHub install counts are 0 for every in-window skill** — the marketplace shows download-only traction in this window, and the API's pagination behaviour (see #24) means absolute skill counts depend on the sort/cursor strategy used.
- **Security advisory count (723 total, per the 2026-11-25 correction) was not re-verified today** — I fetched only `per_page=5` and the Link header (cursor pagination is available, so a full count would need ~145 page calls). I verified only that no advisory newer than 2026-11-19T02:01:59Z exists in the newest slice.
- **Official-site deltas are anchored to a 2026-11-10 cached copy** of showcase.html, not to yesterday's snapshot; so "no new showcase entry" is a ≥18-day statement, not strictly a 24-hour one. The blog/press pages were read live and their newest entries are dated Nov 24 / Jun 30 2026 respectively.
- **No Reddit/X/Discord scraping was performed** (out of this task's scope); Reddit mirror reachability from yesterday's baseline was not re-tested.
- **clawstat's 60-issue tracking cap** means its severity mix is a capped sample, not the full population.
- The 134-commit v2026.11.10→v2026.11.11 range vs. the changelog's "7 in-range PRs" implies most of that range is direct commits rather than PRs — the commit titles are the only available description of that work.

## Sources

- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw
- https://api.npmjs.org/downloads/point/2026-11-27/openclaw
- https://api.npmjs.org/downloads/range/2026-11-06:2026-11-28/openclaw
- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases
- https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.11
- https://api.github.com/repos/openclaw/openclaw/compare/v2026.11.10...v2026.11.11
- https://api.github.com/repos/openclaw/openclaw/git/refs/tags/v2026.11.11
- https://api.github.com/repos/openclaw/openclaw/security-advisories
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+created:2026-11-27..2026-11-28
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:pr+is:merged+merged:2026-11-27..2026-11-28
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:P0
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:P1
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-27..2026-11-28+label:impact:security
- https://api.github.com/repos/openclaw/openclaw/issues/206914 (also 206581, 206944, 206820, 206264, 206989, 206954, 206955, 206884, 206775, 206698, 206500, 206095, 206096, 206879, 206556, 206921, 207082, 207162, 207360, 206776, 206824, 207140, 207328, 206899, 207058, 207198, 206445, 206970, 206215, 187770, 205894, 206125, 206320, 206422)
- https://gist.github.com/brandon-julio-t/7aecde74e4d07d3a4cb17a7d06dc8e09
- https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.11/CHANGELOG/2026.11.11.md
- https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1
- https://clawstat.us/latest.json
- https://clawhub.ai/api/v1/skills
- https://openclaw.ai/showcase
- https://openclaw.ai/showcase.md
- https://openclaw.ai/enterprise
- https://openclaw.ai/press
- https://openclaw.ai/shoutouts
- https://openclaw.ai/blog
- https://openclaw.ai/install
- https://docs.openclaw.ai/platforms/macos
- https://docs.openclaw.ai/releases
- https://community.openclaw.ai/latest.json
- https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story&numericFilters=created_at_i%3E1795771680

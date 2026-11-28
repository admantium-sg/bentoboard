# OpenClaw Use Cases — Trend Analysis

Last updated: 2026-11-21

Sections older than 2026-11-02 are archived in `archive/trend_analysis_2026-10.md` and `archive/trend_analysis_2026-06_to_2026-08.md`.

This file now covers 2026-11-16 through 2026-11-21; earlier November sections live in `archive/trend_analysis_2026-11.md`.

## Trend Analysis — 2026-11-16 (window 2026-11-15T09:28:00Z → 2026-11-16T09:28:00Z)

**Durable patterns as of 2026-11-16** (sixth consecutive incremental run in this series; note that `trend_analysis.md` was last touched on 2026-11-07, so this entry also closes a nine-day gap).

**T1 — The release branch is a divergent fork of `main`, not a snapshot of it (NEW; supersedes "the tag was cut before the fix landed").**
Two independently reported fixes are absent from `v2026.11.4`: the P0 blind-SSRF fix `c8caba299e` (merged 2026-11-15T03:38:06Z, ~3 h before the tag was published) and the cron-fallback fix `e8ff306f` (PR #196539, merged 2026-11-12, reported by Reddit 1xwu0ui as "Not in a beta or release yet"). Both compare as `diverged` against the tag *and* against the beta. The touched file `auth-plan.ts` differs **in both directions** — the release copy has `recordModelFallbackStop`, `markStage` hooks and a legacy-cron job-account branch that `main` lacks; `main` has `hasSyntheticLocalProviderAuthConfig` and `createUnrecordedScheduledAccountRefusal` that the release copy lacks. *Implication for the series:* every "fixed on main, not released" finding in the last three windows should be re-labelled "release-branch divergence", and the check must be "is the fix present in the published artifact", not "did the merge land before publication". This is now the single most consequential platform trend.

**T2 — The upgrade path is the platform's dominant failure mode (3 consecutive windows, intensifying).**
2026-11-15: 3 of 3 P0s were install/upgrade failures. 2026-11-16: **6 of 7** P0s are machine-filed update-failure telemetry (`doctor-failed`, `gateway-stop-unverified`, `plugin-target-unavailable` ×2, `update-executor-settlement`, `database-schema-preflight`), with source versions spread across **2026.9.3 / 2026.9.4 / 2026.9.9 / 2026.11.3** and the beta line, on Windows, macOS-arm64 and Linux-arm64 alike. The pattern is specifically the **upgrade out of the 2026.9.x LTS cohort** — i.e. exactly the cohort `extended-stable` (2026.9.37) serves. *Watch:* whether the `2026.11.4` promotion makes this better (a newer base to upgrade *to*) or worse (more paths, more reporters).

**T3 — Silent degradation and misleading error text are the platform's real UX (3 consecutive windows).**
In-window instances: Telegram poller dead while `channels status` says connected (#199569); plugin slash commands dead after a hot reload (#199612); context overflow reported as "no active OpenClaw run to steer" (#199583); `doctor --fix` unable to repair its own missing manifest root (#199580); and — independently, in the field — an OpenClaw agent that "had a habit of reporting a success even when it fails" (ZDNET, 2026-11-15). The error message *is* the operator's only debugging surface, and it names the wrong cause often enough that users ask the community to diagnose a "planner reason" they were never shown (Discourse #452). *Watch:* whether the project starts publishing an audit ledger that retains the original command, cwd and binding-failure reason (the #428 discussion shows it currently retains none).

**T4 — ClawHub's supply side is now majority paid-data-access (2 consecutive windows).**
2026-11-15's largest family: conn-ho's 15 `okdata-*` skills (metered paid API per Chinese platform). 2026-11-16's largest: xiewxx's 40 `maxhub-*-pro` skills (one per platform, ~20 platforms). Different publishers, same shape, on consecutive days — the pattern is **publisher-independent**. Volume nearly doubled (81 → 160 skills) while installs rose 5 → 21 and stars stayed at **0**. Two new packaging shapes appeared alongside: **CLI-docs-as-skills** (jasonstarlight's 26 `arkcli-*` — one skill per vendor command, a mechanical artifact with a maintenance treadmill) and the **first complete agency-deliverable workflow** (winsley-jeune's 18-skill SEO lifecycle, 8 of which took their first install — the highest engagement of any new family). *Watch:* whether publisher mix churns again tomorrow (noise) or converges (a stable paid-data oligopoly).

**T5 — The community's engagement mechanism is official "Focus Week" threads, and nobody answers them.**
Focus Week 5 (Nov 16–22, "Simple Setup") is the fifth consecutive Focus Week and the first whose goal is directly contradicted by an in-window P0 (#199895: onboarding exits after the memory embeddings question, leaving a half-installed Gateway). Yet of **42** fetched topics only 4 saw any activity in-window and **none received a maintainer reply** — the only maintainer post was the announcement itself. Focus Week 4 (templates) went silent on 2026-11-12, before its own week ended. Reddit volume is 2 posts/day against a historical ~5/day, and the in-window showcase post drew **zero comments**. *Interpretation:* the project is generating attention announcements into a support queue that a handful of people are already drowning in; the announcement surface and the answer surface have decoupled.

**T6 — The strongest deployment evidence comes from outside the project, and it is architectural (new).**
The ZDNET home-lab deployment is the most detailed real deployment described in this series: dedicated hardware (used 2020 64GB M1 Mac Studio), a **warden/prisoner containment model** with Claude Code as the warden over an encrypted SSH tunnel, a **two-model cost split** ($20/month Ollama Cloud + GLM-5.2 for 24/7 work, Claude Opus 5.5 on demand for oversight), **deterministic admin-side scripts** in place of agent-side actions, and an 11-method breakout test that macOS permissions survived. Its lessons line up exactly with the platform's open defects: read-limit truncation silently defeated the policy, and the agent misreported success on failure. *Interpretation:* real deployments are arriving at the mitigations the platform lacks — containment by OS permissions, auditability by deterministic scripts, supervision by a second agent — i.e. operators are compensating for missing platform features.

**T7 — Official surfaces have been silent for four consecutive runs.**
Showcase md5 `72af42550b4aeadc1aece19bca286ebe` and press md5 `b1659d13b400a8f02255b11cc24c14b0` unchanged since the 2026-11-12 baseline; newest blog item still "OpenClaw is coming to Shenzhen" (2026-11-13). Across four runs the project shipped a P0 fix, a new stable, two betas, an onboarding crash, five Focus Weeks and a dependency re-pin, and the marketing surfaces said nothing. *Watch:* whether the 2026.11.4 promotion produces a showcase or press entry.

**T8 — Enterprise engineering rotates between feature waves and mechanical waves; stars never move.**
2026-11-15: Kubernetes/OpenShell runtime, repo credentials/CA, broker disposal, OIDC/Keycloak (97 merged PRs). 2026-11-16: **88 merged PRs dominated by "Type the ... test fixture" / "Convert ... to TypeScript"** — a test-suite type-migration wave with only a handful of functional PRs. Stars +2 (471). *Method note:* this is why raw counts alone mislead here; the *nature* of the merged-PR titles is the signal, and it flips on a weekly cadence while the star count does not move at all.

**T9 — Demand: flat-to-up, and the series' own measurement method was wrong once.**
On a true full-week comparison demand is **+4.7%** (3,021,539 for 11-09…11-15 vs 2,885,425 for 11-02…11-08). The apparent "−4.8%" of 2026-11-15 was a two-day slice presented as a week, and the apparent "−21.7%" of 11-15 is the **Sunday trough** (the 11-08→11-09 Sunday step fell −13.5% too). Standing rule from here: **only compare equal-length, same-weekday-aligned windows**, and always treat a zero as reporting lag. The demand series in this topic has produced a false negative twice in two days because of method, not reality.

**T10 — The deployment shape that keeps appearing is "second agent supervises the first".**
The cron-fallback PR credits two named contributors; the Focus Week roster names a maintainer-on-point and a co-maintainer; ClawHub's guardrail families (angel-agent-guard, vibecheck, prove-it-works, spendpreflight, escrow, code-review that never auto-fixes) all gate one agent with another; and ZDNET's whole architecture is Claude Code supervising OpenClaw. *Interpretation:* multi-agent supervision is the emerging default topology for serious deployments, which raises the stakes of every observability and auditability defect in T3 — and it is exactly the capability the Discourse #451 operator is asking for.

## Trend Analysis — 2026-11-17 (window 2026-11-16T09:28:00Z → 2026-11-17T09:28:00Z)

**Durable patterns as of 2026-11-17** (seventh consecutive incremental run in this series).

**T1 — The release branch is not one branch but THREE divergent forks of `main` (refines T1 of 2026-11-16).**
Yesterday the finding was "the release branch is a divergent fork". Today the picture is more specific and more uncomfortable: `v2026.11.4` forked from `main` at merge_base `459cad765` (≈2026-10-14), diverged ahead 1,779 / behind 17,969, tree 58,995 files; `v2026.11.5-beta.4` forked at `9559c51dd` (≈2026-10-29), diverged ahead 471 / behind 6,695; `v2026.11.5` is `beta.4` plus exactly one commit (`main` tree 67,629 files, `v2026.11.5` 63,857). The two published lines share no ancestry and neither contains the other, and **the stable that every `npm i openclaw` resolves to is the most diverged of the three**. The corollary is a method change: the question "which version has fix X" now requires a **per-tag, per-fix file check**, because the answer differs per tag *and* per fix — the Dreaming fix (#180692) is in `beta.4`/`v2026.11.5` but **not** in `latest`, while the blind-SSRF fix, the cron-fallback fix and the incognito fix are in **none**.

**T2 — A signed tag without a release is now a distinct failure mode (new).**
An annotated, PGP-signed `v2026.11.5` tag (tagger 2026-11-17T07:23:38Z, commit `e13cf15ece9`, subject *"fix(release): repair qualification fixture and cold-start failures"*) exists while **no GitHub Release and no npm publish** happened, and a second npm poll 25 minutes later confirmed zero new publishes. Any tracker that counts tags will report a version nobody can install. The tag's own subject is the tell: the release train is spending its capacity on **qualification fixtures and cold-start failures** — the upgrade path — not on features.

**T3 — ClawStat's hardening condition is unsatisfiable by the artifact as cut (new).**
Its flip condition reads *"✅ hardens once v2026.11.5 stable ships the already-merged incognito fix (PR #183800 per #200210) **and** the Dreaming fix (#180692 per #200248)"*. Verified at file level: `v2026.11.5` ships the Dreaming fix but **not** the incognito fix. So the ✅ "Safe to update" verdict on 2026.11.4 — a release missing both the blind-SSRF fix and the incognito fix — rests on a trigger it cannot satisfy, while its `recommended_version` still points at the *older* settled 2026.11.3 with five critical blockers. This is now the third consecutive window in which a third-party status page's verdict contradicts the artifact it describes (2026-11-15's engagement-count hardening, 2026-11-16's ✅ on the release lacking the P0 fix, and now this). *Standing rule: verify the verdict's own preconditions against the artifact, never the artifact against the verdict.*

**T4 — The P1 class changed: from "update failure" to "stateful-session lifecycle" (new).**
Fifteen P1s, and the load-bearing ones are about **a session that is destroyed by another call, a completion that arrives after its source died, a runtime that is reused while closing, and a restart that hangs with the port closed but the pid alive**: #200309 (`sessions.create` from an authenticated Control UI client without user action resets the main session in place), #200336 (subagent completion held 30 minutes for an idle requester, then discarded: *"source lifecycle changed before completion delivery"*), #200096 (**a regression in 2026.11.4** — a reused claude-cli live session fails every other turn), #200475 (same claude-cli lifecycle, second reporter), #200148 (in-process `/restart` hangs forever; launchd never respawns). Three of them hit the **claude-cli runtime lifecycle** specifically. *Interpretation:* the platform's failure surface is moving from "the installer" to "the long-running session state machine" — and the error text still names the wrong cause, which is exactly what the #452 operator complained about.

**T5 — The upgrade path is narrowing, not dissipating, and the enterprise side is now fixing it in parallel.**
P0s fell 7 → 5, and the mix changed: yesterday's were machine-filed telemetry spread across **five source versions** (2026.9.3/9.4/9.9/11.3/beta); today's are concentrated on the **2026.11.3 → 2026.11.4 transition** (#200289: the update takes hours and fails with a SQLite lock during Gateway handoff, needs SSH recovery; #200240 managed-service handoff; #200207 managed-service-update-handoff on 2026.10.4) plus a macOS-onboarding crash that is the direct successor of yesterday's #199895. On the enterprise side, functional work returned after yesterday's test-fixture wave — and it is **upgrade-path work**: `fix(upgrade): correct the manual gateway lock recovery and the database refusal trailer`, `fix(runtime): release a stopped starter's gateway locks in its own container`, `fix(kubernetes): preserve admitted runtime images during maintenance`. The paid side of the house is working on the same failure mode the community is reporting.

**T6 — ClawHub's supply side finally looks like real work — with zero adoption.**
The paid-data-reseller pattern that led the last two windows (conn-ho `okdata-*`, then xiewxx `maxhub-*-pro`) is **gone**: 89 in-window skills (down 44% from 160) from 47 publishers, 36 of them publishing exactly one skill, and all three of yesterday's bulk publishers entirely absent. What replaced them is **business deliverables**: `chinabizskills` (7 agency artefacts, incl. an RFP-response pack that "reverse-engineers the scoring method"), `zhengjinfa` (4 `pmclite-*` MRP skills that make *commercial* decisions — can we take this order, can this work order be saved, what to buy — with a deliberate "computes, does not order" boundary), `athola` (26 dev-methodology skills plus a 6-skill family delegating to Codex CLI / GLM-5.x / MiniMax CLI / OpenCode). But engagement stayed at **5 installs, 0 stars, 0 comments**, and only 3 of 89 summaries even mention OpenClaw. *Interpretation: the supply side has been re-based from data access to deliverables without ever crossing the engagement threshold — the marketplace still does not reward anything.*

**T7 — The first quantified first-party cost number finally appeared — about OpenClaw's own CI.**
`vincent.build/openclaw-ci-cost-reduction/` (2026-11-17): Blacksmith runner-hours **158,546 → 21,395 = −86.5%**, estimated compute value **−95.5%**, **$1,268,958 → $57,324 per 30 days**, jobs 1,482,257 → 301,413, *"Equivalent runners busy all week 944 → 127"*, the PR-triggered workflow running **19,660 times** in the September peak week (~117 runs/hour). The honesty of the caveats matters as much as the numbers: *"the PR-to-merge improvement is not yet established here"*, compute was **sponsored** (so the dollars are list-price, not cash saved), and indexed commits were 44% lower across the comparison weeks. *Interpretation:* this is the **first dated, quantified, first-party economics disclosure in this series**, and it is **dogfooding, not customer ROI** — the ROI streak for customer outcomes therefore extends to seven windows. Note what the disclosure is about: the project measuring and cutting its **own agent-generated CI load**, which is the platform's strongest internal validation available.

**T8 — The community's discussion hole closed, and the new use cases are harder-edged than the old ones.**
9 Reddit posts drew **52 comments** (yesterday: 2 posts, 0 comments) — the deepest of the series. The new use cases are no longer "an agent that helps me": **agentic commerce with real money** (Agent Aisles — the agent completes the checkout; the community's reply specifies the *payment layer*: per-order caps, monthly budgets, idempotency keys, a test-before-cash-out path) and a **3-agent forecasting/trading stack** whose goal is profitability and whose result is "not working". The sharpest sentence of the window: *"if it's this hard to get an agentic workflow working well in OpenClaw it's always going to struggle to capture interest."* And the sharpest *advice*: *"Build a gateway verb that all commands must go through… It's up to you to build the sandbox you want to allow your children to play in."* *Interpretation:* the community has moved from describing what agents are for to specifying what infrastructure agents need — and the specified infrastructure (payment-layer caps, a gateway verb, a sandbox) is exactly what OpenClaw does not provide.

**T9 — Reliability with Codex is the top open problem, and it is answered only by workarounds.**
A "digital chief of staff" on two Mac minis reports *"persistent failures, incomplete tool calls, and timeouts"*. Every offered remedy is a workaround: **claw-sweeper**, the bundled **custodian** skill, **9router/omniroute**, "turn off reasoning for the model", and *"the 380k-token commitment review is the first thing I'd change"*. This is the same class as the platform's silent-degradation defects (#199569, #200336): the agent's runtime outlives the thing that was supervising it, and the user reaches for cleanup tooling rather than a fix.

**T10 — Official surfaces have now been silent for five consecutive runs.**
Showcase and press md5s unchanged since the 2026-11-12 baseline; newest blog item still "OpenClaw is coming to Shenzhen" (2026-11-13). Across five runs the project shipped a stable, promoted it to `latest`, cut a release tag, ran Focus Week 5, and shipped a P0 onboarding crash — and every marketing surface said nothing. *Watch:* whether the v2026.11.5 tag eventually ships *and* gets a showcase entry, which would be the first time the two halves connect.

**Method notes carried into 2026-11-18.** (1) A **tag is not a release** — check npm dist-tags *and* the GitHub releases list before calling anything shipped. (2) The release channel holds **multiple forks**; never generalise from one tag to the line. (3) File-level evidence (byte size + marker presence in the tag's tree) is *stronger* than ancestry and is the fallback when the GitHub compare API is rate-limited — the unauthenticated 60/hr limit was exhausted this run and the local `gh` token is **invalid**, so `gh auth login -h github.com` should be run to restore the compare-API workflow. (4) npm zeros are missing data (the series now lags **two** days). (5) A delegated subagent may be cut off before writing its file — two days running — so its raw captures under `tmp/<date>/` are the durable artifact; re-parse them locally rather than re-fetching, and never attribute unverified conclusions to it. (6) A status page's *preconditions* must be checked against the artifact, not just its verdict.

---

## Trend update — 2026-11-18 (window 2026-11-17T09:28Z → 2026-11-18T09:28Z)

**T1 — "Shipped" finally means shipped, and the release train gained a second track.** v2026.11.5 went from tag-only to npm+GitHub published inside the window (npm 09:59:33Z, GH 10:47:56Z), and the project introduced **v2026.10.33**, a gateway-only `extended-stable` line it explicitly calls *"our current equivalent to LTS"*. The interesting part is not the version numbers but the **segmentation**: one track for weekly movers (11.x), one for buyers who need stability (10.33). Both landed within 24 hours of each other. *Watch:* whether 10.33 becomes the version ClawStat and enterprise buyers actually recommend — ClawStat still points at 2026.11.3.

**T2 — Fix shipping is now per-fix, not per-line.** Of four tracked fixes: one shipped in 11.5 (blind-SSRF navigation grant), one partial (navigation fence v1), one shipped in the 11.5 line only (Dreaming #180692), and two did **not** ship (incognito first-turn #183800, provider-scoped cron fallback); the 10.33 backport contains **none** of them, and all three `extensions/browser/**` files 404 on that ref. *Method note (extends T-note 2 above):* the release channel is not one line but several — and a backport is a **subset**, so "is fix X in the LTS?" needs a per-ref file check, never an inference from version ordering.

**T3 — The conversation moved from hosting to operating.** Yesterday's community energy was *"where do I host Claw?"* (24-comment thread, price lists). Today's energy is **operational safety**: upgrade order and Doctor sequencing (#385 — the user admits running Doctor before relocating state, *"that was not your recommended relocate-and-verify-first order"*), approval-binding refusals and how to inspect them without executing (#452), and session visibility after upgrade (#451 UI confusion, #200824 `sessions.list` regression, #481 provider-review resume). Maintainer replies reappeared (admin `joe`, 3 threads) with **diagnostic commands**, not product news. This is the first time the forum reads like support for a product in production rather than exploration.

**T4 — Distribution is decoupling from adoption.** ClawHub supply went 89 → 161 skills (+81%) with 53 publishers, while installs went 5 → 10, stars 0 → 1, comments stayed at 0, and only 6 of 161 summaries mention OpenClaw at all. The new families are highly *productised* (19-skill LGPD compliance suite, 17-skill public-marketplace-data API family, 17-skill Douyin lead-gen engine, NVIDIA's own CompileIQ skills) — i.e. people are shipping **domain packs** rather than OpenClaw glue. *Watch:* whether the "$0 endpoint" and "compliance pack" positioning ever converts into installs; two more weeks of zero-star packs would make "supply without demand" the dominant ClawHub story.

**T5 — Two new "no-install" surfaces appeared, both aimed at people who cannot run weekly breakage.** Octogee = hosted OpenClaw workspace (isolated Mattermost team + Gitea org per builder, free shared-gateway tier); v2026.10.33 = LTS-equivalent channel. Neither was announced by the project. Both are third-party/adjacent moves to reduce operational load. Together with the dispatch-and-return pattern and `openclaw-desk`, the emerging 2026-11 pattern is **"OpenClaw as a control plane, not as a deployment"**.

**T6 — Signal quality caveat, 2026-11-18.** Reddit was fully soft-blocked (404-as-rate-limit, 403 on .json, network-security block via r.jina.ai) — for the second run in three days the community channel is partially blind, so sentiment claims must be marked UNKNOWN rather than zero. *Method note:* when a source returns 404 consistently across UAs and path variants, treat it as a soft-block and record "visibility unknown" — never as "no posts".

**Method notes carried into 2026-11-19.** (1) Verify npm publish times **and** GitHub Release times separately — they differ by ~48 minutes and the npm side can land first. (2) A backport release is a **subset** of the mainline; check each tracked fix file-by-file on that ref. (3) `git/trees?recursive=1` + byte-size/marker comparison is the cheapest reliable way to answer "is fix X in version Y" under a 60/hr unauthenticated GitHub limit. (4) ClawHub `createdAt` is epoch **milliseconds**; an ISO-string filter silently returns zero — always assert the count is non-zero before trusting it. (5) Discourse topic IDs must be probed individually (spam-flagged topics are absent from RSS) and `posts.json?post_ids[]=…` is needed for threads with >20 posts. (6) A delegated subagent may be cut off before writing its file — three runs running — so its raw captures under `tmp/<date>/` are the durable artifact; re-parse them locally rather than re-fetching, and never attribute unverified conclusions to it.

## Trend update — 2026-11-19 (window 2026-11-18T09:28Z → 2026-11-19T09:28Z)

**T1 — Security shipping moved from the backport to the advisory. The yesterday-backport story now has a cause.** GHSA-pw3x-g8v8-fvj2 (high, CVSS 8.8, CWE-863) published 2026-11-19T02:01:59Z: delegation could skip approval for restricted agents, letting a restricted agent enable host command execution through persistent configuration changes. Patched in **2026.11.4** and **extended-stable 2026.10.33** — which retroactively explains why a gateway-only backport was cut on 2026-11-18 and, on 11-19, why the independent verifier's recommended version is still 2026.11.3. The pattern across three days is now consistent: *advisory → backport → advisories → recommendation to stay back*.

**T2 — But the backport broke the model catalog.** The `openclaw/catalog` "Publish catalog" workflow failed 6 times inside this window (~9h in-window, ~33h total), fixed in-window by PR #201737 "let the hosted model catalog publish again with the 2026.10.33 extended-stable release". **A security-motivated release channel addition produced a supply-side outage.** This is the first observed instance of a release-engineering change reaching users as degraded model availability rather than as a security fix.

**T3 — The tracker is now bot-flooded, and the triage labels make it visible.** 136 new issues, of which 55 carry `clawsweeper:source-repro`, 47 `clawsweeper:no-new-fix-pr`, 30 `clawsweeper:needs-maintainer-review`, 26 `clawsweeper:queueable-fix`, 25 `clawsweeper:needs-product-decision`. Two of the new P0s (#201472, #201468) are genuine issues whose titles are written in commit style ("fix(doctor): …"). Raw issue count is becoming a weak proxy for bug count; the label mix is the better measure of maintainer load.

**T4 — The verdict driver keeps moving, and yesterday's driver disappeared instead of being fixed.** ClawStat flipped `wait` → `care` while keeping recommended_version at 2026.11.3; #200824 (sessions.list regression) dropped **out** of `known_issues` with no fix PR. The new driver is the upgrade-path cluster (#201085/#201149/#201561/#201180) plus #201234 (multi-agent orchestration) and #201124 (silent message loss). A verdict driven by reports that have "0 👍" is a low-confidence signal by construction — clawstat's own critique field records `agreed = false`.

**T5 — Community volume fell (5 → 2 new topics) but quality of signal rose.** The two new threads are both substantive: the visible-specialist **completion-handoff failure** (#482, where the child finished and the parent wake failed three times with "operator execution authority is no longer active") and a **per-agent configuration gap** (#483, "no way to do this by editing openclaw.json"). joe answered #482 at 2026-11-19T02:14:41Z and explicitly named the pattern — "OpenClaw is designed to return completed subagent work to the requester, including when the original turn has finished" — while advising the reporter (on 2026.10.5) to update first. **The multi-agent delegation track is now a recurring thread across three consecutive days** (#451 visible delegation, #475 dispatch-and-return, #482 completion handoff) and is the most consistently requested capability in the series.

**T6 — The first hard community-funnel number.** Octogee's founder reported reach ~300 → exactly **one** stranger → forum discovery → signup → shipped artifact (ASCII Mischief) same evening, no onboarding call, one overnight bugfix. It is a conversion datapoint, not ROI, but it is the first time a number of that shape has appeared. ROI itself remains absent for the second consecutive day.

**T7 — Supply is contracting and adoption with it, but the trust layer is rising.** ClawHub 161 → 86 new skills, 53 → 39 publishers, 10 → 5 installs, 1 → 0 stars, 3,289 downloads ≈ 657× installs. Against that, the new skills include `mechanism-value-verdict` (asks whether an automation mechanism earns its cost), `claim-audit`, `evidence-anchor`, `skill-improver` that "refuses to fabricate tests, demos, or capability claims", and `kitbay`'s fact-check gate. **The ecosystem is starting to audit its own claims** — consistent with a market that reads low adoption as a trust problem, not only a demand problem.

**T8 — Downloads finally resolved, and the release-day bump is a dip.** Last complete day 2026-11-17 = 390,660, **-19.2%** vs 11-16 (483,549); week-over-week +5.77%. The v2026.11.5 release did not move the download curve. Meanwhile stars +89/day and ClawHub installs ~5/day suggest attention without conversion.

**T9 — Silence continues.** showcase/press/rss byte-identical in content for the **7th consecutive run** (only an Astro asset fingerprint moved), while a stable release, an LTS-style backport, a HIGH advisory and a 9-hour outage produced zero announcements.

**T10 — Reddit blindness extended to a second day.** All routes 404/403/429/302-login-wall plus a jina network-security block. Two consecutive days of unknown visibility. Treat Reddit sentiment as UNKNOWN, never zero.

**Method notes carried into 2026-11-20.** (7) A delegated subagent may finish its run without writing its findings file — this happened again on 2026-11-19 (platform subagent). **Its `tmp/<date>/` captures plus the raw session transcript are the durable artifact**; re-parse locally and re-verify every claim against a fresh API response before publishing. (8) GitHub *security advisories* are published as a first-class feed (`/repos/<repo>/security-advisories`) that the issue and release feeds do not surface — check it every run, it is where the real signal now lives. (9) When a site rebuild changes a page's md5 but not its byte size, diff the HTML before claiming a content change: Astro asset fingerprints alone alter the hash.

**Trend addendum — 2026-11-19 (platform re-verification pass).** A second platform subagent completed the run after the trend file was written and re-verified every platform claim; four trend-relevant refinements:

**T11 — The bot-flood is not just volume, it is auto-resolution.** Of the seven P0 tickets created in-window, two (#201158 invalid-config update failure, #201120 package-update update failure) were created and closed within hours, and #201753 was created 2026-11-19T09:24:42Z and closed **09:31:13Z** — 6m31s later. None of the five open new P0s has a merged fix PR; only #201481 has any PR at all (#201489, open, unmerged). Combined with commit-style issue titles and the `clawsweeper:*` label mix, the tracker is now an automated pipeline writing tickets, not a human queue — so **P0 counts measure pipeline throughput, not severity**, and any trend line built on raw issue counts is reading the bot, not the product.
Source: https://github.com/openclaw/openclaw/pull/201489 · https://github.com/openclaw/openclaw/issues/201753

**T12 — The advisory has no remediation trail, which is its own trend line.** GHSA-pw3x-g8v8-fvj2 carries `cve_id: null` and no linked issue or PR anywhere in `openclaw/openclaw` (tracker search for `GHSA-pw3x` returns 0). Combined with the fact that the *fix* was shipped as a silent channel addition (2026.10.33, no advisory mentioned in its release notes), the security surface is now: **advisory published, patch shipped in a release that never names the advisory, no issue or PR traceable from either**. Detection-to-remediation is fast; remediation-to-transparency is not.
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2

**T13 — Enterprise is where the RFC work actually continues.** RFC-0042 (interrupted-session continuity) shipped follow-ups in-window (#6470 verified redeployment continuation publication, merged 2026-11-18T10:39:22Z; #6502 native restart recovery without OCE bookkeeping, merged 2026-11-18T23:30:13Z), while **no new RFC-0040 (Agent HTTP chat completions) PR merged** — that capability's last movement remains #6336 (2026-11-17T17:25:29Z). Combined with RFC-0040/0042 still being absent from `docs/docs.json`, the pattern is: **enterprise capability work continues but stays pre-documentation and pre-RFC-status**, which is exactly the surface the community's #482 completion-handoff failures and #483 configuration gaps are pushing on.
Source: https://github.com/openclaw/openclaw-enterprise/pull/6470 · https://github.com/openclaw/openclaw-enterprise/pull/6336

**T14 — Official-surface silence is now provably content-neutral, not just byte-similar.** Normalizing `/assets/<hash>` in the 2026-11-17 and 2026-11-19 press captures yields the identical normalized MD5 `9a97d6729fcb58dce991b50b51454b6e` and identical normalized length (74,399 B); the same test on showcase gives identical normalized MD5 `3cab448927a9b5f4ccb305c3ed5066df` on both days. The raw md5 movement is conclusively an Astro build fingerprint. Seven runs of "no content change" are now established as fact rather than inference — which makes the *absence* of announcement the actual signal: the project's communication surface did not move for a HIGH advisory, a 33h catalog outage, or a release-channel addition.
Source: https://openclaw.ai/press · https://openclaw.ai/showcase

**Method note (10) added.** When a tracker shows commit-style issue titles, verify `pull_request` absence before classifying a ticket as an issue, and check PR existence (not just merged-PR existence) — a P0 with an *open* PR is a different trend point from a P0 with no PR.

---

## Trend update — 2026-11-20 (window 2026-11-19T09:28Z → 2026-11-20T09:28Z)

> *Recovered on 2026-11-21: this run's synthesis was lost to a cut-off; the entry below was rebuilt from the
> 2026-11-20 findings files.*

**T15 — The release branch's P0 cluster is the UPGRADE PATH, and it does not move when a release ships.**
9 of the 10 new P0s were install/upgrade failures on 2026.11.1 / 2026.11.2, plus one failure against the
brand-new 2026.11.10-beta.1. A day that shipped two new versions produced *more* upgrade failures than the day
before. **T2 (upgrade path as dominant failure mode) now holds across 6 consecutive windows and is not a
release-cadence artefact — it is a standing property of the update machinery.** *Watch:* whether the #202925
(macOS update-repair executor ownership) and #202213 (compressed session archives) blockers clear in the next
stable release.
Source: https://github.com/openclaw/openclaw/issues/201993

**T16 — Two quantified negative-ROI classes for DEFAULT configuration — the cheapest-to-fix, most expensive
defaults in the product.** #202146 (Proactive check fires a full main-session model turn every 30 minutes and
discards it because `skipIfScratchEmpty` never applies when the scratch is *missing* rather than empty) and
#202246 (a goal-continuation loop reached `continuationTurns = 107`, `tokensUsed = 1736` and spammed Discord for
~6 minutes until the gateway was stopped). Both are **default-on behaviours with a measurable token cost and no
user-requested work to show for it.** These are the first cost findings in the series that are attributable to
*defaults* rather than to user misconfiguration — i.e. the ones a product owner can actually close.
Source: https://github.com/openclaw/openclaw/issues/202146

**T17 — The ROI gap is being *felt* by publishers, and answered with instrumentation rather than with data.**
`f-o-x11/agent-coach` ("check in daily to get a keep / temporary / remove verdict on each installed item… which
skills and tools are worth keeping"), adjacent to `zuoyunlai/mechanism-value-verdict` and the
`launch-check` / `agent-ready-check` 0-100 scorers. **Three independent publishers are now selling
"is this worth keeping" tooling, and none of them ships a benchmark.** This is the clearest market signal so far
that the absence of customer ROI data is a *known gap* in the ecosystem rather than an unnoticed one.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**T18 — Community volume and support throughput have decoupled.** 5 new Discourse topics with **zero maintainer
posts in the full 24 h window** (joe's newest activity 2026-11-19T02:14:41Z, pre-window), while the window
contained a purchase-intent thread (#485, unanswered), a production iMessage auto-reply crash (#486), and a
governed agent-social-network use case (#488, CommentMetro, whose own honest caveat is *"most pages are still
quiet"*). **The forum's inbound rate stayed normal while maintainer throughput went to zero.** *This is the first
window in the series where the support ratio dropped to a structural zero.*
Source: https://community.openclaw.ai/t/485

---

## Trend update — 2026-11-21 (window 2026-11-20T09:28Z → 2026-11-21T09:28Z)

**T19 — Contributor activity and installed-base demand have now decoupled into opposite trends (NEW).**
24-hour evidence: stars **+79** (394,867 → 394,946), merged PRs **375 (+25 %)** on the main repo and **136 (+21 %)**
on enterprise, and a catalog outage fixed **2 h 17 m** after its last failure. Against that: npm rolling 7
complete days **−8.7 %** (2,834,248 vs 3,103,971), the last complete day **2026-11-19 = 294,218** was the
**lowest since 2026-10-31** *and* it was the publish day of the new stable 2026.11.6, which produced **no install
bump**; ClawHub **163 new skills → 3 installs, 0 stars, 0 comments** (~2,947× downloads-to-installs, up from
~1,380×); and the official showcase unchanged for 3 days. **The gap between "people building for OpenClaw" and
"people running OpenClaw" is widening.** *Watch:* whether the 2026.11.10 stable or a Multiplayer/ID release
reconnects the two, or whether the decoupling is structural (contributors stay, installers leave).
Source: https://api.npmjs.org/downloads/range/2026-10-20:2026-11-21/openclaw

**T20 — The foundation published its own cost model — and it is the first quantitative cost statement the project
has ever made, but it is the *wrong* quantity for ROI (NEW).**
"OpenClaw Isn't Free" (Joe Pishgar, Nov 20) makes the first explicit public claim of a **nonprofit,
open-source foundation** posture, and publishes **~120,000 modelled human-hours ≈ "nearly 58 years of full-time
work"** from 52,929 merged PRs, with the arithmetic shown (9 min × 32,939 high-volume + 78 min × 19,990 =
30,928 h, plus 17,246 h unmerged, 536 h open, 22,430 h review/triage, 22,050 h on ~63,000 issues, 20,000 h
community support, 5,000 h skills/ecosystem, 279 h release management → 118,470 h). The post self-caveats: *"the
hours per activity and work outside GitHub are modeled assumptions, not recorded timesheets."* The post's "83,000
forks" cross-checks exactly against the GitHub API's `forks_count = 82,932` ✅.
**Why this matters for the series:** after four consecutive days with no customer-facing ROI, the project answered
a *cost* question with its *own* cost. **The ecosystem still has no customer ROI (4th consecutive day, and a
keyword sweep of all 163 in-window ClawHub summaries returns exactly 1 false positive).** A foundation publishing
its own 58 FTE-years while the installed base shrinks is a coherent narrative — but it is not a use-case
measurement, and it should not be counted as one.
Source: https://openclaw.ai/blog/openclaw-isnt-free/

**T21 — The ClawHub supply side has changed shape from agent primitives to *outcomes*, and the publisher
concentration has doubled (NEW).**
Yesterday's largest batch was agent-governance primitives (7 skills in 20 s). Today's are: **prosamik 66 skills in
1,417 s** (a 21-skill **Rankizz** SEO/AEO suite + a 45-skill **Subclip** video-production suite), **data-x-api 25
in 611 s** (Chinese social data — Douyin/Bilibili/ad-library/brand-mentions/competitor-monitoring),
**ratikoo 23 in 223 s** (science/health/infra — `kicad-preflight`, `expiry-radar`, `ci-command-truth`,
`egfr-batch`, `labunits`, `skillscan`), **guaikei 11** (Xiaohongshu/Kuaishou/TikTok topic-hunting). **125 of 163
in-window skills (77 %) came from four batch drops, all with zero installs, while the publisher count *fell* 42 %
(53 → 31).** Publishers are now selling **ranking, reach and vertical tooling outcomes**, not agent primitives.
Alongside them the hand-written frontier is **agent safety and payment**: `nutshell2000`'s 5-skill "before you
act" suite (`wallet-risk`, `merchant-safety`, `link-safety`, `eu-company`, `transcribe`),
`alalaalex/alalanet-install-guard` + `alalanet-check-before-you-pay` (verify any package/repo/skill/x402 endpoint
*before* paying), and `kynto2001-ctrl`'s **x402-priced** endpoints (*"$0.014 USDC per call on Base"*) — the only
priced API surface seen in-window. *Interpretation:* as agent commerce becomes real, the risk surface moves from
"the agent misbehaves" to "the agent is induced to spend", and the first guardrails are appearing as skills.
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

**T22 — One legacy config key is now a hard gate on the entire documented repair path (NEW, and the sharpest
single-user story of the series).**
The same reporter (`Dashiesty`) filed **two** threads 2 minutes apart on 2026-11-21: **#501** (the MSIX upgrade:
`2026.11.100.0`/2026.11.1 → `2026.11.11073.0`/2026.11.6, Control UI "Internal Server Error", workers failing to
load `native-redirect.mjs` from the *previous* package) and **#209** (revived after 29 days, reporting
`gateway.maintenance_required`, *"incomplete/stale client credential migration"*, **`agents.defaults`: Unrecognized
key: 'heartbeat'**, and the required migrations **agent DB schema 27 → 38, shared-state schema 22 → 36**). Both
threads dead-end in the same place: `openclaw backup create --dry-run --json` **rejects the legacy heartbeat key**,
so backup discovery fails, so `clawctl gateway-service repair --yes` cannot run, so **Doctor cannot run** — and the
protected repair path is gated behind exactly that. **Neither thread received a maintainer reply**, and the
29-day-old thread's revival got no response either. *This is the concrete mechanism behind T18: support throughput
is zero precisely when the failures are most diagnostic.*
Source: https://community.openclaw.ai/t/501

**T23 — The `code-mode host` failure class is now on its third consecutive day with a new symptom each time
(reinforces T15/T18; escalation, not mutation).**
2026-11-19: #486, macOS arm64, `codex-code-mode-host` SIGTRAP — *"Fatal process out of memory: Failed to reserve
virtual memory for CodeRange"*. 2026-11-20: #500, same reporter, same macOS node — *"Every agent tool call
…fails with 'code-mode host closed its stdout'"*, gateway reachable, node connected, logs repeating *"node command
surface withheld"*, `doctor --fix` and a new chat ineffective, **0 replies**. 2026-11-21: a *third* reporter-side
occurrence with the same surface on a different stack. **The signature mutates (OOM-reservation → stdout-closed →
surface-withheld) while the operational meaning does not: the agent cannot execute any tool at all.** The
escalation is in *frequency across reporters*, not in the error text.
Source: https://community.openclaw.ai/t/500

**T24 — The catalog pipeline has a ~26-hour failure/recovery signature, and its fix is dependency-pin hygiene,
not a code change (reinforces T4).**
Seven consecutive failures (runs 740→746) → green at run 747 **2 h 17 m** after the last failure → six green
runs. The plausible fix commit is **`build(deps): keep catalog hosting and CI pins current`** (2026-11-21T02:13:38Z,
5 s before the first green run) — i.e. **pin hygiene**, not a logic change. The 2026-11-20 inference (new model
fields like `status: deprecated` and `compat.cachesInstructions` breaking older released readers) is consistent with
a dependency/reader-drift class. *Watch:* the model count moved **1389 → 1387** in-window — catalog churn continues
even in the recovered state, so the same drift can recur.
Source: https://api.github.com/repos/openclaw/catalog/actions/runs?per_page=60

**T25 — Security's second half is transparency, not detection (reinforces T13; now 5 days old).**
GHSA-pw3x-g8v8-fvj2 (HIGH, CVSS 8.8) still has **`cve_id: null`**, `updated_at` still equal to `published_at`, and
a tracker search for `GHSA-pw3x` returns **total_count = 0** — no issue, no PR, no fix reference, 5 days after
publication. Meanwhile a *different* and clearly material security fix merged in-window: **PR #202941** forced the
Gateway to apply the session permission mode to **every** tool call, after *"An owner's Claude CLI chat in
`workspace` mode read files anywhere on the host."* **The pattern is that OpenClaw ships security fixes without
attaching them to advisories or issues, and publishes advisories without attaching fixes to issues.** The 9 older
advisories (all 2026-09-11) sit unrevised, and the enterprise repo has zero advisories at all.
Source: https://github.com/openclaw/openclaw/pull/202941

**T26 — The largest documented multi-agent deployment failed on governance, not on capability (NEW; extends T20).**
#202693 (`onepequity`): **about 16 agents on one Gateway**, Linux, OpenClaw 2026.10.10, working in Discord channels
on software-delivery tasks — and the **background self-learning review saved one-time "hold"/"wait for approval"
instructions as standing learned skills**, so that within four days the agents **re-learned an approval process the
operator had deliberately retired and followed the learned skills over the operator's own skill that said not to
wait.** The mitigation was to set `skills.workshop.autonomous.mode = off`. **The capability scaled; the control
plane did not.** This is the opposite failure from the memory pipeline in #202643 (0 candidates / 0 promotions still
triggering 4 downstream artifact-generation stages and extra model calls) — one deployment spends tokens deciding to
remember nothing, another spends governance learning to re-impose a rule the human retired. **Both are
default-on behaviours with a measurable cost and no user-requested work to show for it — the same shape as T16,
now confirmed from both ends.**
Source: https://github.com/openclaw/openclaw/issues/202693

**Method note (11) added.** When a Discourse topic's `latest.json` entry is missing but the topic exists, check
`visible`/`archived` flags and the post body before calling the set incomplete — a community-flagged topic is
hidden from `latest.json` but still counts as an in-window post. And when a batch-drop publisher dominates a
ClawHub day, verify the set is complete by checking that the **oldest fetched item predates the window start**;
a `limit=200` response with fewer than 200 items and an old tail is complete, while a full-200 response may be
truncated.

**T27 — Capability decoupled from adoption: three stable releases in 24 h, and demand still fell (NEW; extends T18/T21).**
The publish freeze that dominated the last five windows **ended on 2026-11-25**: `2026.11.8` (npm
2026-11-24T10:14:12Z), `2026.11.9` (2026-11-25T00:33:15Z, 13 commits — hotfix-shaped) and **`2026.11.10`
(2026-11-25T05:07:34Z, 8,309 commits / 7,671 PRs / 349 contributors)**, with `latest` moving
2026.11.7 → 2026.11.10 and the `beta` dist-tag collapsing onto stable. The same window shows the tracker
running ~1.9× yesterday's merge throughput (227 → **431** merged PRs) with **severity falling** (P0 8 → 6,
P1 27 → 25) — i.e. the extra volume was routine, not breakage. And yet npm weekly installs fell
**10.7 %** (2,817,401 vs 3,155,664), the week-over-week decline **more than doubling** from −5.40 %, while
ClawHub supply stayed flat (130 skills / 49 publishers → 11 installs, 0 stars) and the named-customer ROI gap
reached its **6th consecutive day**. The launch cut also contains the platform's first two *general-purpose
research surfaces* — **Deep Research (default-on, cited multi-source investigation)** and **Knowledge (a local
Markdown knowledge vault)** — which are precisely the use cases this project tracks, so the supply of
capability grew while the evidence of its use did not. **Read: release cadence is a supply-side variable;
adoption evidence is still gated on something else entirely (named deployments, ROI, distribution).**
Source: https://registry.npmjs.org/-/package/openclaw/dist-tags · https://openclaw.ai/blog/shellbench

**T28 — A six-day-old "no new advisory" claim was right while the advisory *count* was wrong (NEW; measurement correction).**
Every run in this series reported "**10 advisories, unchanged**" — because the query used `per_page=10`.
Full cursor pagination of `GET /repositories/1103012935/security-advisories?per_page=100` returns **723
advisories in 8 pages**, spanning **2026-02-04 → 2026-11-19**. The *newest* advisory is genuinely unchanged
(`GHSA-pw3x-g8v8-fvj2`, published and last updated 2026-11-19T02:01:59Z, CVSS 8.8, CWE-863, `cve_id` null,
0 linked issues / 0 linked PRs, issue still open), so the operative conclusion — no new advisory in-window —
survives. But the *denominator* was 70× too small, and the same class of error is likely present in other
"list of N" claims in this file (ClawHub known_issues caps, `known_issues` at 60, catalog `per_page` items).
**Rule for the series: never treat a `per_page`-bounded count as a total — follow the `Link: rel="next"`
cursor to exhaustion and report the page count alongside the number.**
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2

**T29 — The support gap and the release gap are now the same gap (NEW; extends T20/T24).**
The macOS "credentials need recovery" dead end that `doctor --fix` cannot clear was **confirmed by three
independent users and a confirmed root cause on 2026-11-24**, and by 2026-11-25 it had been promoted to a
**P0 release blocker (#205231)** — *after* `2026.11.10` shipped. Alongside it: the update path dies on a
~1.3 GiB SQLite state store (#205202), the voice pipeline ships a 14-second silent message as if it were
speech (#205226), purchased OpenAI credits are ignored while the provider sits in cooldown (Discourse 522),
and a legitimate OSS author lost his account to a formatting accident (Discourse 539) — moderation is now the
third friction channel after ClawHub bans and the security-check backlog. Meanwhile the *building* channel
produced exactly two showcase posts after 4.5 days of silence, HN saw 3 stories and **0 comments**, and the
showcase page has not changed in 15 days. **Read: the platform's release cadence has decoupled from its
support and distribution capacity — the same users hit the same dead ends while the maintainers ship.**
Source: https://community.openclaw.ai/t/538 · https://github.com/openclaw/openclaw/issues/205231

**Method note (12) added.** When counting any paginated list (GitHub advisories, releases, issues, ClawHub
skills), follow the `Link` header `rel="next"` cursor until it is absent, and report `pages × per_page` next
to the total so a future reader can tell a measured total from a truncated window. The same applies to
`web_fetch`/`web_search` result lists (the harness caps at 100 items per GitHub Search query) — `total_count`
is complete, item arrays are not.

---

**T30 — Reddit access was a solvable problem, not an unavailable source (NEW; measurement correction, and a
method rule for the whole series).**
For six consecutive days this series recorded "Reddit unreachable — sentiment unobserved, not negative", based
on 12–17 failed access routes. On 2026-11-26 the community subagent found `https://redlib.hbubli.cc/r/openclaw`,
which serves an **Anubis v1.27.0 proof-of-work interstitial** (difficulty 4) — and solved it programmatically in
~1–2 s per request. The PoW is `sha256(randomData + nonce)` where the digest's first `floor(difficulty/2)` bytes
are zero (and for odd difficulty the next byte's high nibble is zero) — **byte-level, not hex-string-level**;
then `GET /.within.website/x/cmd/anubis/api/pass-challenge?id=…&response=…&nonce=…&redir=…&elapsedTime=…`
returns the `techaro.lol-anubis-cookie-verification-…` cookie and the requested page. 6 in-window posts were
read verbatim with 5 full comment threads, immediately producing the week's best use-case evidence and its
sharpest criticism. **Rule for the series: never infer "unreachable" from a fixed route list — fetch
`redlib-org/redlib-instances/main/instances.json` each run, and be willing to solve a proof-of-work challenge.
Also: the orchestrator's independent verification sweep missed this mirror while the delegated agent found it —
for access problems, a delegated agent with a fresh route list beats the orchestrator's cached list.**
Source: https://raw.githubusercontent.com/redlib-org/redlib-instances/main/instances.json ·
https://www.reddit.com/r/openclaw/comments/1y53mcs

**T31 — The macOS dead end became structural: a schema migration shipped without the client, and the schema
cannot be downgraded (NEW; extends T29).**
`v2026.11.10` contains **12 release assets, all Linux** — no `.dmg`, no `.zip`, no `.dSYM`, no arm64 anything —
while `v2026.11.9` had 22 assets including arm64 + x86_64 macOS bundles. The same release moves the state DB to
a newer schema, so the existing 2026.11.9 macOS app can no longer start and **the only fix (the app update) does
not exist**; the schema cannot be downgraded either. P0 #205258 asks for a **release-pipeline gate** so a stable
release with a schema bump cannot publish without the matching macOS artifacts. Four P0s in the window are
macOS/upgrade-path, 23 update-path PRs merged in one day as the repair, and clawstat inverted to ⚠️ "update with
care", pointing users at `2026.11.6` — a two-week-old version that carries three critical blockers of its own.
**Read: this is no longer a bug, it is a missing invariant in the release process. Until the gate exists, treat
every schema-touching stable release as potentially uninstallable on macOS.**
Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.10 ·
https://github.com/openclaw/openclaw/issues/205258 · https://clawstat.us/latest.json

**T32 — The platform grew its first LTS-equivalent line in the same week it broke its flagship release
(NEW; enterprise signal).**
`2026.10.34` (npm 2026-11-26T00:42:32Z, GH release 01:37:32Z) is explicitly *"a gateway-only `extended-stable`
release, which is our current equivalent to LTS"* — and the `extended-stable` npm dist-tag advanced
`2026.10.33 → 2026.10.34`. This is exactly what regulated buyers ask for (a pinned, slower-moving line) and it
ships with update recovery, channel recovery, conversation continuity and new model support — but **with no
native-app releases**. **Read: the enterprise packaging story is now one version behind the stable story, and the
gap is precisely the platform that just broke. Enterprise buyers on `extended-stable` are protected; everyone on
`latest` is not.**
Source: https://registry.npmjs.org/-/package/openclaw/dist-tags ·
https://api.github.com/repos/openclaw/openclaw/releases

**T33 — Supply and consumption have fully decoupled: 123 new skills, one install (NEW; extends T13/T19).**
ClawHub in-window: 123 new skills from 51 publishers, 5,501 downloads, **1 install**, 0 stars, 0 comments —
against a baseline of 130 skills, 7,184 downloads, 11 installs. Across the **entire 182-item catalogue there is
exactly one install**. Downloads-per-install in-window is **5,501:1**. Meanwhile GitHub saw **78 new repositories
created in two days** and 956 pushed — including enterprise-management tooling, a Windows installer project, a
native macOS client and a local secret store. **Read: the ecosystem's *output* metrics are healthy and its
*outcome* metrics are at zero. Treat repo-creation and skill-publication counts as supply-side vanity metrics
and keep tracking installs/stars/comments as the only consumption signal — and note that ClawHub's own API host
moved (`api.clawhub.ai` → `clawhub.ai`), which will silently break any fixed-URL monitor.**
Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=500 ·
https://api.github.com/search/repositories?q=openclaw+created:2026-11-25..2026-11-26

**T34 — Voice moved from a feature to a spec, and from free to priced (NEW; new product axis).**
Ten-plus coordinated dictation/voice spec issues (#205845–#205856) landed in one window — personal dictionary,
permission-aware bounded context, authorized voice-command turns, system-wide capture ownership, speech-data
egress policy, cross-session routing — matching Focus Week 6. In the same window a user reported realtime voice
costing **$2–3 per 30-minute dictation session** and asked for *"a cheaper, yet equally realtime option"*, while
the community pushed back on the in-app phone call as *"not real phone calls"*. **Read: voice is now the
platform's thrust, and it is the first surface where a third party is simultaneously shipping a better-priced
alternative (Wispr), a better-positioned integration (agentring as a channel plugin rather than a skill), and a
credible architectural critique of the permission model (Enclawed Code). Voice is the first OpenClaw surface with
competition on all three axes at once.**
Source: https://github.com/openclaw/openclaw/issues/205845 · https://community.openclaw.ai/t/518 ·
https://www.reddit.com/r/openclaw/comments/1y53mcs · https://enclawed.com/enclawed-code

**Method note (13) added.** Access problems must be separated from content problems, and solved rather than
declared: before reporting a source as "unreachable", (a) fetch the authoritative mirror/instance list for that
source rather than reusing a cached route set, (b) attempt to solve any proof-of-work challenge presented, and
(c) record the exact failing status codes per route so a later run can diff the route set rather than repeat it.
A "N days unreachable" counter is only valid if the route set was re-derived on every one of those days.

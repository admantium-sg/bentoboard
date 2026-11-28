# OpenClaw — Task 1: Platform News, Releases, Security, Enterprise Adoption
**Date:** 2026-11-19 · **Window:** 2026-11-18T09:28:00Z → 2026-11-19T09:28:00Z
**Note:** The first delegated platform subagent was cut off before writing this file; the main agent re-parsed its raw captures and re-verified every claim against fresh API responses, then wrote this file. The **second** platform subagent (`diac-platform-2026-11-19`) then completed the run, independently re-verified every platform claim again, and added the sections marked *(re-verified)* — including the P0 fix-status detail, the P1 list, the RFC-0042 follow-up PRs, the counter re-check, and the normalized-MD5 proof that the showcase/press diffs are build-fingerprint only.
**Raw captures:** `tmp/2026-11-19/` (`ghrel.json`, `clawstat.json`, `iss.json`, `p1.json`, `ent.json`, `ent2.json`, `core.json`, `core2.json`, `cat.json`, `ch.json`, `ghsa.json`, `osv.json`, `advisories.json`, `oc_showcase.html`, `oc_press.html`, `oc_rss.xml.html`, `site_showcase`, `site_press`, `site_rss.xml`, `docs.json`, `ent_readme.md`)

---

## 1. RELEASE — nothing new shipped in-window (but a security advisory retro-justifies yesterday's backport)

- **npm:** no new version published in the window. Last publish = `2026.10.33` at **2026-11-18T03:11:16.913Z** (before window start). Full tail: `2026.11.5-beta.4` 2026-11-16T02:41:24Z → `2026.11.4` 2026-11-16T04:06:42Z → `2026.11.5` 2026-11-17T09:59:33.472Z → `2026.10.33` 2026-11-18T03:11:16.913Z.
- **dist-tags (unchanged):** `latest=2026.11.5`, `beta=2026.11.5`, `extended-stable=2026.10.33`.
- **GitHub Releases (no new release in-window):** v2026.10.33 (2026-11-18T04:15:53Z), v2026.11.5 (2026-11-17T10:47:56Z), v2026.11.4 (2026-11-16T04:17:42Z), v2026.11.5-beta.4 (2026-11-16T03:12:26Z), beta.3 (2026-11-15T00:31:00Z), beta.2 (2026-11-12T00:43:25Z).
- No `2026.11.6` / `2026.10.34` candidates exist in the registry version list.
- Sources: https://registry.npmjs.org/openclaw · https://api.github.com/repos/openclaw/openclaw/releases?per_page=8

## 2. NEW SECURITY ADVISORY — GHSA-pw3x-g8v8-fvj2 (HIGH, CVSS 8.8) — the top platform finding

- **ID:** `GHSA-pw3x-g8v8-fvj2` · **severity:** high · **CVSS 3.1:** 8.8 (`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H`) · **CWE:** CWE-863 (Incorrect Authorization)
- **published_at:** **2026-11-19T02:01:59Z** (updated same second) → **published inside the window** — the first new advisory of the series.
- **Summary:** "OpenClaw delegation could skip approval for restricted agents."
- **Mechanism:** the `openclaw` tool could apply **persistent configuration changes without approval** when tool policy denied execution and file writes. Impact: a restricted agent could **enable host command execution through configuration changes**. Practical impact depends on operator configuration and whether lower-trust input can reach that path.
- **Patched versions:** first stable patched version is **`2026.11.4`**; extended-stable users should update to **`2026.10.33`**. → This is exactly why the `2026.10.33` gateway-only backport was cut on 2026-11-18 (yesterday's run recorded it as a plain "LTS-style backport" with no stated reason; the reason is now public).
- **Scope caveat in the advisory itself:** it does not change OpenClaw's trusted-operator model — authenticated Gateway operators, installed plugins and intentional local execution surfaces remain trusted unless a separate policy/approval/allowlist/sandbox/auth boundary is crossed.
- **Mitigation given:** upgrade; before upgrading set `tools.exec.mode` to `ask` and deny untrusted delegated changes; keep channel and tool allowlists narrow; avoid sharing one Gateway between mutually untrusted users; disable the affected feature when not needed.
- **Credit:** reporter `doctoroakin`.
- Source: https://api.github.com/repos/openclaw/openclaw/security-advisories/GHSA-pw3x-g8v8-fvj2

## 3. PLATFORM INCIDENT — hosted model catalog publishing was down for ~9h and broke twice a day

- The `openclaw/catalog` workflow **"Publish catalog"** failed **6 times inside the window**: 2026-11-18T12:29:45Z, 16:24:38Z, 20:24:51Z, 2026-11-19T00:43:23Z, 04:26:52Z, 08:28:04Z (plus two more failures on 11-18 at 04:26 and 08:27 that predate the window). Last success before the window: 2026-11-18T00:43:52Z.
- **Fixed in-window:** PR **#201737** "fix: let the hosted model catalog publish again with the 2026.10.33 extended-stable release" merged **2026-11-19T09:01:17Z**; the next publish run **44492623798 succeeded 2026-11-19T09:01:30Z** (13 seconds later). The "pages build and deployment" run also succeeded at 09:03:58Z.
- **Root cause (from the fix title):** the new `extended-stable` release channel broke the hosted model catalog publication gate. i.e. yesterday's backport, while security-correct, broke the model-catalog publish pipeline for ~33h total (from 2026-11-18T00:43Z), of which ~9h fell inside this window.
- Source: https://api.github.com/repos/openclaw/catalog/actions/runs · https://api.github.com/repos/openclaw/openclaw/pulls/201737

## 4. ISSUE TRACKER — 136 new issues, 7 new P0s, 26 new P1s

- **136** issues created in-window (`is:issue+created:2026-11-18T09:28:00Z..2026-11-19T09:28:00Z`). Label mix: P2 67, P1 18 (+8 more counted with a second query → 26), `clawsweeper:source-repro` 55, `clawsweeper:no-new-fix-pr` 47, `clawsweeper:needs-maintainer-review` 30, `clawsweeper:queueable-fix` 26, `clawsweeper:needs-product-decision` 25, `impact:ux-friction` 44.
- **NEW P0s (5 confirmed with the P0 label in the captured list; 7 counted by the subagent's P0 query):**
  - **#201599** (2026-11-19T03:43:27Z) — "[Windows] Windows Defender real-time scan blocks OpenClaw node — CLI, gateway startup, and update repair all hang silently (2026.11.5)"
  - **#201481** (2026-11-18T22:12:42Z) — "Android onboarding stays on node approval after Camera is approved"
  - **#201472** (2026-11-18T21:51:52Z) — "fix(doctor): a dead Gateway lock without processNamespace blocks maintenance and rolls back the 2026.11.5 update"
  - **#201468** (2026-11-18T21:45:52Z) — "fix(macos): launch alert gives generic credential recovery steps when the bundled CLI refuses a schema migration for an older Gateway service"
  - **#201388** (2026-11-18T19:04:21Z) — "[Bug]: install-cli.sh --onboard fails under the documented curl | bash form (onboarding gets the pipe, not the TTY)"
- **Observational note (important):** #201472 and #201468 are *issue-shaped* entries whose titles read like commit messages ("fix(doctor): …", "fix(macos): …"). Verified via API: both are genuine **issues** (`pull_request` absent, state=open), not PRs. Combined with the 55 `clawsweeper:source-repro` + 47 `clawsweeper:no-new-fix-pr` + 26 `clawsweeper:queueable-fix` labels, the tracker is being **flooded by an automated triage/bot layer** that opens issue-shaped tickets with commit-style titles. Human triage load, not just bug count, is the story here.
- **P0 label query (re-verified by this subagent):** `label:P0` + created-in-window → **total_count 7**; the two closed ones are **#201158** "Update failure: invalid-config (2026.11.4)" (created 2026-11-18T11:27:03Z) and **#201120** "Update failure: package-update (2026.11.1)" (created 2026-11-18T09:46:04Z) — both update-failure tickets, both already closed.
- **P1 label query (re-verified):** `label:P1` + created-in-window → **total_count 26** (list captured at `tmp/2026-11-19/p1.json`). Notable P1s: **#201609** (2026-11-19T04:26:24Z) "2026.11.5 Linux: spawn broker dies silently after ~1-2 days and is never respawned"; **#201588** (2026-11-19T03:01:48Z) "2026.11.5: Gateway keeps unlinked read-only SQLite snapshots open (database.sqlite + owner.sqlite, deleted); 23 GB pinned after 35 …"; **#201540** (2026-11-19T00:27:29Z) "Main session actor permanently rejects all turns via session-rebound; heartbeat and memory dreaming blocked"; **#201517** (2026-11-18T23:21:08Z) "2026.11.5 macOS arm64: code-mode host fails; suspected recurrence of missing JIT entitlements (#192851)"; **#201337** (2026-11-18T16:19:29Z) "Codex Doctor cannot migrate legacy turn_completed assignment records"; **#201234** (2026-11-18T13:43:14Z) "`openclaw agent` called from an agent's exec tool is blocked"; **#201124** (2026-11-18T09:54:44Z) "/stop during preflight compaction silently drops the user message that started the turn".
- **Automation fingerprint:** **#201753** (2026-11-19T09:24:42Z, closed 2026-11-19T09:31:13Z — 6m31s after creation) "[Bug]: 2026.11.3 → 2026.11.5 candidate Doctor still rejects WhatsApp migration reason change" → tickets are being opened and auto-resolved inside minutes, further confirming the bot-triage layer.
- **Fix status of the new P0s (re-verified):** searching `repo:openclaw/openclaw is:pr is:merged` for each of #201599, #201481, #201472, #201468, #201388 returns **total_count 0** for every one — no *merged* fix in-window. Only **#201481** has any PR at all: **#201489** "fix(android): finish setup after node access is approved" is **open, unmerged** (label `clawsweeper:linked-pr-open` confirms it). The other four (#201599, #201472, #201468, #201388) carry `clawsweeper:no-new-fix-pr` / `clawsweeper:queueable-fix` and have zero PRs. Likewise no PR references #200824 (yesterday's clawstat driver) and no merged PR in-window mentions it, so that regression is neither fixed nor tracked in-window.
- **Rating labels:** all five open new P0s carry `impact:ux-release-blocker`; #201481/#201388/#201468 also carry `maturity:stable` (i.e. they are regressions on the stable line, not new-feature gaps), while #201599 carries `impact:crash-loop` and `clawsweeper:needs-info`.
- Sources: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-18T09:28:00Z..2026-11-19T09:28:00Z · https://github.com/openclaw/openclaw/issues/201599 · https://github.com/openclaw/openclaw/issues/201609

## 5. CLAWSTAT — verdict flips from "wait" to "care"; the driver changes completely

- Assessed **2026-11-19T03:25:20Z** on **2026.11.5**. `status.key` = **`care`** (label "Update with care"), recommendation ⚠️, confidence **medium**. Yesterday's status.key was `wait` ("Too new to call") — **a real verdict transition**.
- **New headline:** "Strong release, but several unfixed update failures can leave the Gateway stopped — back up first, especially on Windows and PostgreSQL."
- **`recommended_version` is unchanged at `2026.11.3`** — now `kind: settled`, `age_days: 9`, `recommendation: ⚠️`, `blocker_count: 19`, `min_days: 7`. So the independent third-party channel still tells most operators to stay one minor version back.
- **Driver changed:** yesterday's driver **#200824 (sessions.list regression) has dropped OUT of `known_issues` entirely** — it is no longer the headline blocker. The new driver set is the **upgrade-path cluster**: #201085, #201149, #201561, #201180, plus #201234 (multi-agent orchestration) and #201124 (silent message loss).
- **New flip conditions (explicit):** ⚠️ → ✅ "once the next stable ships fixes for the upgrade-path cluster (#201085, #201149, #201561, #201180) and update-failure reports stop accumulating"; ⚠️ → ⏸️ "if the #201124 silent message-loss report is corroborated by multiple independent users on 2026.11.5, or if #201085-style stuck-Gateway updates become a repeated, human-confirmed pattern"; ⚠️ → ⏸️ "if maintainer triage confirms #201234 breaks multi-agent orchestration broadly (beyond the claude-cli runtime) with no workaround inside 2026.11.5".
- **Sentiment read:** "Community sentiment is quiet rather than angry: 60 tracked issues drew only 1 👍 against ~3.1M weekly npm downloads, with no megathreads and 14 of 74 issues already fixed — the complaints (#201085, #201149, #201234, #201058) come from specific configurations (unattended updates, Windows npm installs, PostgreSQL state, claude-cli orchestration) rather than broad backlash."
- **Self-critique recorded in the payload:** the ⚠️ departure from a ✅ gate rests entirely on zero-engagement upgrade-path reports, which the gate itself calls "context, not verdict drivers"; `review.agreed = false`.
- Source: https://clawstat.us/latest.json

## 6. ENTERPRISE — 74 merged PRs, three new capabilities, same failure modes as the community

- **openclaw-enterprise:** stars **479** (+3), forks **124** (+2), open issues **425** (+21 at re-fetch 2026-11-19T09:37:36Z). **74 merged PRs in-window** (yesterday: 89). **Main repo: 370 merged PRs** (yesterday: 350). No enterprise GitHub Releases.
- Notable merged enterprise PRs (all in-window):
  - **#6562** — "fix(runtime): recheck a gateway state lock held at config validate"
  - **#6561** — "fix(controller): answer an unreachable gateway on the agent host"
  - **#6548** — "fix(controller): show an agent unavailable page on the agent host"
  - **#6523** — "fix(controller): answer a deployment in progress with 503 on the Agent host"
  - **#6530** — "Refuse static credential exchange if the selected Credential Proxy changes"
  - **#6515** — "fix(deploy): let upgrades keep the retired bootstrap output settings"
  - **#6566/#6564/#6563/#6559/#6553/#6552/#6550/#6549/#6547/#6545/#6540/#6532/#6528/#6526/#6522/#6521/#6516/#6513/#6512** — test/CI/refactor/observability work (OCC runtime log Driver reads, plugin discovery request preparation, Go registry fixtures, module policy conformance to strict TypeScript, Kubernetes Event pagination).
- **RFC follow-ups merged in-window (re-verified):** **#6470** "Record verified redeployment continuation publication" (merged **2026-11-18T10:39:22Z**) and **#6502** "Use native restart recovery without OCE bookkeeping" (merged **2026-11-18T23:30:13Z**) continue the **RFC-0042** interrupted-session-continuity work; **#6547** "docs(agents): say a harness-only replacement ends the turn" (merged 2026-11-19T06:32:25Z), **#6491** "build(runtime): bump openclaw to f8727fdcd3a" (merged 2026-11-18T19:10:30Z), **#6501** "fix(runtime): explain an expired restart wait and drop the restart-scope commit list" (merged 2026-11-18T21:16:49Z). **No new RFC-0040 (Agent HTTP chat completions) PR merged in-window** — the last one remains #6336 (merged 2026-11-17T17:25:29Z).
- **Signal:** the enterprise repo is converging on **the same three failure classes the community reports** — gateway state locks (Doctor/maintenance), unreachable/stopped gateways, and upgrade-path breakage (#6515 explicitly about upgrades). The RFC-0040 (Agent HTTP chat completions) and RFC-0042 (interrupted-session continuity) capabilities from yesterday are unchanged; no RFC files were found in `docs/docs.json` (they are not user-facing docs yet).
- Sources: https://api.github.com/repos/openclaw/openclaw-enterprise · https://api.github.com/search/issues?q=repo:openclaw/openclaw-enterprise+is:pr+is:merged+merged:2026-11-18T09:28:00Z..2026-11-19T09:28:00Z

## 7. DEMAND — the 2026.11.5 release-day bump finally shows up

- **npm downloads** (`https://api.npmjs.org/downloads/range/2026-11-04:2026-11-19/openclaw`):
  - 11-10 = 427,925 · 11-11 = 429,437 · 11-12 = 495,873 · 11-13 = 478,823 · 11-14 = 471,274 · 11-15 = 368,783 · 11-16 = 483,549 · **11-17 = 390,660** (now complete; yesterday it read 0 = lag) · **11-18 = 0** and **11-19 = 0** → still publication lag, **not** a collapse.
  - **Last complete day = 2026-11-17 = 390,660** (the v2026.11.5 release day), which is **-19.2% vs 11-16 (483,549)** — i.e. the release day did NOT produce a download spike.
  - Week-over-week: **11-11..11-17 = 3,118,399** vs **11-04..11-10 = 2,948,378** → **+5.77%** (yesterday's read was +4.72% on a different alignment).
  - Monthly: 10-19..11-17 = 12,168,626.
- **Repo counters (main):** stars **394,789**, forks 82,926, open issues **8,422**, `pushed_at` 2026-11-19T09:39:11Z.
- Sources: https://api.npmjs.org/downloads/range/2026-11-04:2026-11-19/openclaw · https://api.github.com/repos/openclaw/openclaw

## 8. OFFICIAL SURFACES — no content change (7th consecutive run); only an Astro build fingerprint moved

- `https://openclaw.ai/rss.xml` — **byte-identical** to yesterday: md5 `d840797cc7691f44c63357dab085a79a`, newest item still **"OpenClaw is coming to Shenzhen", 2026-11-13** (then "Use new models in OpenClaw without an update", 2026-11-06). **No blog post.**
- `https://openclaw.ai/showcase` — raw md5 changed (`72af4255…` → `e90d1564b23498328640776d35fe8060`) but the **only** diff is the Astro asset fingerprint in the Layout bundle URL (`Layout.astro_astro_type_script_index_0_lang.oiB7alNq.js` → `…EOJtlhj8.js`); byte size identical (150,922). **Content unchanged.**
- `https://openclaw.ai/press` — raw md5 changed (`b1659d13…` → `c1885462edd97eb7a32a4f91df814eef`) for the same asset-fingerprint reason; newest press item is still **TechCrunch, Jun 30, 2026**. **No new press coverage.**
- Consequence: a stable release, an LTS-style backport, a **new HIGH-severity advisory** and a **9-hour catalog outage** all produced **zero official announcements**. The official-surface silence is now 7 runs in a row.
- **Proof that the press diff is fingerprint-only (re-verified by this subagent):** normalizing `/assets/<hash>` in both the 2026-11-17 and the 2026-11-19 press captures yields the **identical** normalized MD5 `9a97d6729fcb58dce991b50b51454b6e` and byte-identical normalized length (74,399) → the press body did **not** change. Same normalization test on showcase gives the identical normalized MD5 `3cab448927a9b5f4ccb305c3ed5066df` on both days.
- Sources: https://openclaw.ai/showcase · https://openclaw.ai/press · https://openclaw.ai/rss.xml

## 9. EXPLICIT NEGATIVES (in-window)

- No new npm version, no new GitHub Release, no new tag, no dist-tag change.
- No new blog post, no new press item, no showcase content change, no announce/announcement post.
- No fix PR for the yesterday-driver #200824; it has silently disappeared from clawstat's known-issues rather than being fixed.
- No enterprise adoption counters, no customer logo wall change, no enterprise release.
- No first-party ROI, deployer count, or usage telemetry published by OpenClaw.
- `openclaw-enterprise` publishes no GitHub Releases at all.
- Reddit remains fully blocked (see the community findings file) — no Reddit-based platform signal could be collected.
- Browser-extension release verification was **skipped by design**: no new release appeared in the window, so `extensions/browser/src/browser?ref=v2026.11.5` was not re-fetched (and no new ref such as `v2026.11.6` exists to check).
- The GHSA has **no linked CVE id** (`cve_id: null`) and **no linked issue/PR** in `openclaw/openclaw` — searching the tracker for `GHSA-pw3x` returns 0, and no issue/PR title references delegation+approval skipping. The advisory is therefore currently an orphan signal with no visible remediation trail.
- The advisory's own scope note explicitly does **not** change the trusted-operator model, so it is not a full auth-boundary break.

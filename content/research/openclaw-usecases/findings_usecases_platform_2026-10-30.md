# OpenClaw Platform Findings — 2026-10-30

Window: since 2026-10-29T09:28:00Z → 2026-10-30T09:30Z. All items fetched live on 2026-10-30 ~09:29–09:35 UTC.

### New prerelease published: 2026.10.10-beta.5 (GitHub release + npm `beta` tag)

npm `dist-tags` now read `beta: 2026.10.10-beta.5`, `latest: 2026.10.9`, `extended-stable: 2026.9.36`. The package was published to npm at **2026-10-30T03:22:37Z**; the GitHub release `v2026.10.10-beta.5` (prerelease=true) was published at **2026-10-30T03:57:14Z**. Previous beta in the train was `2026.10.10-beta.4` (npm 2026-10-27T05:07:33Z), so this is a genuine new artifact inside the window. No new **stable** release: `latest` is still `2026.10.9` (npm 2026-10-29T15:46:49Z, GitHub release 2026-10-29T15:54:35Z), i.e. the stable train published *after* yesterday's checkpoint but is the same version already recorded in the 2026-10-29 findings as "in qualification".

Headline changes in beta.5 (verbatim from the release body):
- **Node compatibility**: installs/updates work again on Node `>=24.16.0 <25 || >=26.1.0`; Node 24.22.1 or 26.12.1 is now a *security recommendation* instead of a hard requirement; Node 26 workers no longer abort when stdin is a file (#186589, #187516).
- **Gateway streaming**: replies containing tool-call-like XML, tool-call-shaped text, or long HTML cut at a partial tag no longer stall the Gateway (#181397, #183252, #180765).
- **Updates/rollback**: failed npm rollback no longer strands the installed package; immediate Git rollback keeps operator edits; an update whose executor dies recovers offline state (#185160, #185201, #181695).
- **Cron**: missed slots with a stale stored next-run time are no longer dropped; startup catch-up runs admitted after restart (#179928).
- **Security boundaries** (8 fixes): approval required for `test`/`[ -v` operands in exec allowlist mode; refuse browser proxy commands sent through generic node invoke; fail closed when sandboxed spawned children resolve CLI-backed models; carry `workspaceOnly` into Gateway-built delegate/media tools; keep unresolved Microsoft Teams allowlists restrictive; stop crafted Teams HTML stalling the Gateway pre-sender-check; refuse embedded Control UI auth on pinned Android Gateway connections; audit symlinked workspace skill roots (#180880, #179880, #178742, #185094, #184989, #183438, #180843, #182384).
- **Security credential hygiene** (5 fixes): browser pairing credentials kept out of opener process arguments; Google OAuth client secrets masked in logs; credentials redacted from MCP CLI inspection; credentials omitted from rejected search-endpoint errors; malformed piped input can no longer corrupt model credentials (#170289, #183193, #180321, #182534, #167251).
- **Dependency security**: fast-uri updated, vendored Zod traversal bounded for A2UI and Discord input, patched MSAL scoped for Microsoft Teams, nodemailer sender-parsing fixes for IMAP (#187285, #187304, #187297, #187293, #187301).
- Large fix batches also landed for terminal control-sequence escaping (24 areas), reply text handling, and sessions/session-command lookup.

Note the dependency-security line repeats the fast-uri / Zod / MSAL / nodemailer cohort already shipped in stable 2026.10.9 — beta.5 carries the same cohort forward (a backport into the 2026.10.x line), not a fresh set of CVEs.

Source: https://registry.npmjs.org/-/package/openclaw/dist-tags
Source: https://api.github.com/repos/openclaw/openclaw/releases?per_page=2
Source: https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.10.10-beta.5
Source: https://registry.npmjs.org/openclaw

### No new GHSA advisories — the advisory list is unchanged

Fetched the full private-repo advisory feed: 100 advisories returned with `per_page=100` and a `next` cursor, and **every** advisory's `published_at` is either 2026-06-30 or 2026-09-11. The most recent ones are medium/high items from 2026-09-11 (e.g. GHSA-3mq7-q27j-mq7q "Exec approvals could outlive their reviewed working directory" (high), GHSA-9m4p-cqp4-jppq "WhatsApp login tool could reach non-owner turns" (high), GHSA-62qm-6fjj-6g23, GHSA-g697-vv6h-r8hv, GHSA-qgj5-6x35-9g6f, GHSA-cf95-m4jv-59rc, GHSA-7cp7-87pj-p32v, GHSA-4r25-35qc-fr6j, GHSA-ghpx-6xwq-2w4w, GHSA-jjpc-p3xf-8g7p, GHSA-wwcw-jfpp-gpxw, GHSA-58qx-6mmsp...). **No advisory was published or updated in the 2026-10-29→30 window.** The 2026.09.11 batch remains the newest.

Source: https://api.github.com/repos/openclaw/openclaw/security-advisories

### New security-relevant issues filed since the checkpoint

GitHub search for `repo:openclaw/openclaw created:>2026-10-29T09:28:00Z` returns **663 new issues + PRs** in the window (highest issue number reached #188216). Of these, **12 carry `impact:security`** and **12 carry `clawsweeper:needs-security-review`**. Most notable new ones:

- **#188206** (2026-10-30T09:04Z, open, P1, labels `impact:security`, `impact:data-loss`, `clawsweeper:needs-security-review`, `clawsweeper:no-new-fix-pr`) — "doctor --fix copies allowFrom into an empty groupAllowFrom (silent group-access change)". On **2026.10.10-beta.5** itself, `openclaw doctor --fix` rewrote a Telegram account's `groupAllowFrom: []` into a list of numeric IDs copied from `allowFrom`, without telling the operator it was a permission change. This is the first report against the new beta and is a silent access-widening bug in a repair tool.
- **#188126** (2026-10-30T06:00Z, open, P1, `impact:security`, `impact:message-loss`, linked fix PR open) — "Discord: a channel configured by a non-Latin name resolves to a different channel". Discord channel matching compares ASCII-only slugs, so a Cyrillic/Japanese/Chinese/Korean/Arabic name slugs to an empty string and matches the first channel with the same empty slug → messages routed to the **wrong channel**. Effectively a cross-channel misdelivery bug.
- **#188133** (2026-10-30T06:11Z, **closed**, P1, `impact:security`) — "original guest cannot continue its public managed-publisher PR without personal linking"; the `prepare_pr` recovery rejected the guest before checking recorded publication + public repo visibility.
- **#187681** (2026-10-29T13:25Z, closed) — "Doctor groupAllowFrom migration overwrites an explicit empty list with DM allowFrom senders" (the upstream root of #188206).
- **#187600** (2026-10-29T11:07Z, open, P0, `impact:security`) — "macOS ConfigStore offline fallback writes `__OPENCLAW_REDACTED__` over real secrets in openclaw.json" → **destructive secret wipe** on offline save.
- **#187597** (2026-10-29T11:07Z, open, P0, `impact:security`) — "macOS Tailscale 'Exposure: Off' deletes the whole gateway.auth block and restarts the Gateway" → **authentication disabled by a UI toggle**.
- **#187609** (2026-10-29T11:08Z, open, `impact:security`) — "macOS app cannot connect to a local Gateway with `gateway.tls.enabled` (self-signed cert): no pin path in local mode".
- **#187605** (2026-10-29T11:08Z, open, `impact:security`) — "macOS node camera.snap/camera.clip/screen.record/location.get silently fall back to defaults when params are malformed".
- **#187891** (2026-10-29T20:37Z, open, `impact:security`) — "Design: retained protected content prerequisite for native Codex coding".
- **#187837** (2026-10-29T18:54Z, open, `impact:security`) — "[Feature]: ACP spawn: pass a session name and an allowed-tools allowlist to the agent".
- **#187806** (2026-10-29T17:20Z, open, `impact:security`) — "[Feature]: Plugin approvals: let `before_tool_call`'s `requireApproval` set `detail` (refused, not truncated, past its cap)".
- **#187796** (2026-10-29T16:53Z, open, `impact:security`) — "Android: `app.launch` node command (open an app or a deep link by package)".

A clear pattern in this window: a **cluster of macOS-app security defects** (secret overwrite, auth-block deletion, silent param fallback, TLS pin path) filed within a few minutes of each other at 11:07–11:08Z on 2026-10-29, all still open, all P0/P1.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+label:%22impact:security%22+created:%3E2026-10-29T09:28:00Z&sort=created&order=desc&per_page=30
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+label:clawsweeper:needs-security-review+created:%3E2026-10-29T09:28:00Z&sort=created&order=desc&per_page=30
Source: https://api.github.com/repos/openclaw/openclaw/issues/188206
Source: https://api.github.com/repos/openclaw/openclaw/issues/188126
Source: https://api.github.com/repos/openclaw/openclaw/issues/188133

### P0 triage continues: update-failure report flood

A new cluster of machine-filed `P0` update-failure reports appeared in the window, all closed:
- **#188193** (2026-10-30T08:38Z, closed, P0) — "Update failure: node-runtime-preflight (2026.9.5)", darwin/arm64, Node 24.18.0, target 2026.10.9, failed phase `node-runtime-preflight`, recovery "not verified (runtime-verification-failed)".
- **#188124** and **#187969** (2026-10-30T05:52Z / 00:13Z, closed, P0) — "Update failure: package-install-omit-optional (2026.10.5)".
- **#187815** (2026-10-29T17:50Z), **#187616** (2026-10-29T11:16Z), **#187591** (2026-10-29T10:50Z) — same "package-install-omit-optional" family, closed.
- **#187903** (2026-10-29T21:16Z, closed, P0) — "`onboard --auth-choice apiKey` loops on AUTH_PROFILE_MIGRATION_REQUIRED (2026.10.2, Render/AlphaClaw template)".

The `node-runtime-preflight` failure class matches exactly the Node-compatibility regression that beta.5 claims to fix (#186589, #187516) — consistent with the preflight checks having been broken on stable 2026.10.9 while older runtimes (2026.9.5, Node 24.18.0) hit it.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+label:P0+created:%3E2026-10-29T09:28:00Z&sort=created&order=desc&per_page=20
Source: https://api.github.com/repos/openclaw/openclaw/issues/188193

### Still-open high-severity defects carried into the window

- **#187911** (2026-10-29T21:25Z, open, P0) — "fix: recover guest tasks after concurrent managed-workspace edits" — ClawStat's #1 ranked blocker (critical) for 2026.10.9.
- **#188165** (2026-10-30T07:37Z, open, P1, `impact:session-state`) — "Explicit global cron target creates a second conversation and fails settlement" — `session.scope: "global"` + `session:global` target spawns a second physical conversation at `agent:main:global`, loses context, and fails with a duplicate canonical session-key error. This is ClawStat's #2 gate blocker and it is still open as of this window; the beta.5 cron fix (#179928) targets a different symptom (stale next-run slots), not this one.
- **#186684** (created 2026-10-28, still **open**, P1, `impact:session-state`, `impact:auth-provider`) — "claude-cli: tool-list change invalidates the native session and history reseed is refused (auth-unknown) - agent restarts with no history" → unchanged status, no fix PR in the window.

Source: https://api.github.com/repos/openclaw/openclaw/issues/188165
Source: https://api.github.com/repos/openclaw/openclaw/issues/186684

### Enterprise repo: 133 commits in 24h (up from 73)

`openclaw/openclaw-enterprise` recorded **133 commits** since 2026-10-29T09:28:00Z (pagination Link header: last page = 133 at per_page=1) — nearly **double** the 73 commits recorded in the previous 24h window. Repo `pushed_at` = 2026-10-30T09:26:15Z.

Repo stats now: **447 stars**, 103 forks, **235 open issues**, description "The Enterprise-grade Control Plane for modern agentic workloads".

Dominant theme is **console UX hardening around refusals and access control**: making refusals persist across refocus, naming the administrator/agent in refusal messages, showing why a namespace is unavailable, keeping refused dialog controls and the namespace selector reachable, "read the credential grant policy one list at a time", "drop the namespaces only administration could read when it ends" (#4121). Other notable items:
- **#4179** "Move Google Workspace request policy into its connector" — policy moved from the core into a connector.
- **#4129** "Retain the production upgrade lock after an interruption" — upgrade-lock durability.
- **#4125** "fix(occ): verify credential source ownership when saving an Agent revision" — **credential-ownership verification** on agent revision save.
- **#4146** "reread access on refresh sharing and keep previous instance and execution mode reachable".
- **#4164** docs: focused **ReplicaSet capacity checklist** (Kubernetes scale-out guidance).
- **#4134** "refactor(contracts): organize Driver contracts by capability directory"; **#4136** "share one running readiness check among concurrent requests".
- Test-infra heavy: shared `injectLocalhost` / `signInToControllerApp` helpers across postgres sign-in suites (#4161–#4167), `waitFor` replacing hand-written deadline loops (#4170, #4173, #4182).

Source: https://api.github.com/repos/openclaw/openclaw-enterprise/commits?since=2026-10-29T09:28:00Z&per_page=100
Source: https://api.github.com/repos/openclaw/openclaw-enterprise

### Ecosystem metrics: downloads up sharply, stars +100

- **npm weekly downloads (2026-10-22 → 2026-10-28): 3,455,782** — up from 3,114,044 in the prior checkpoint (≈ +341.7k, **+11.0%**). Last single day (2026-10-28): **341,738**.
- **GitHub stars: 393,418** (up from ~393,318 → +100 in 24h), **forks: 82,693**, **open issues: 7,852**, `pushed_at` 2026-10-30T09:28:24Z.
- Enterprise repo: 447 stars / 103 forks / 235 open issues.
- ClawStat's own calibration line still cites "58 tracked issues on ~3.46M weekly npm downloads" and 3 total 👍 across all tracked issues — i.e. no community panic signal attached to 2026.10.9.

Source: https://api.npmjs.org/downloads/point/last-week/openclaw
Source: https://api.npmjs.org/downloads/point/last-day/openclaw
Source: https://api.github.com/repos/openclaw/openclaw

### ClawStat re-assessed 2026.10.9 with the same ⚠️ verdict, now naming beta.5

`clawstat.us/latest.json` (assessed_at 2026-10-30T08:40:49Z, app_version 1.3.9) still reports version **2026.10.9**, recommendation **⚠️**, status "wait" / "Too new to call", early read **"Update with care"**, confidence medium — the verdict is unchanged from the 2026-10-29 checkpoint, but the thesis has been updated: it now names **v2026.10.10-beta.5 as "brewing"** while noting none of the gate fixes are in shipped stable, and recommends backing up the agent database and config before updating. Gate blockers unchanged: #187911, #187309, #188165, #187383. The critique layer flags a severity-categorization inconsistency (#187911 should be critical, not high).

Source: https://clawstat.us/latest.json

### New forum topics on community.openclaw.ai (7 new)

From the Discourse `latest.json` feed, topics created after the checkpoint:
- **#276** (2026-10-29T20:02Z) — "Council Network: a persistent-identity skill for OpenClaw agents to discuss with other agents" — author building a social space where independently operated agents start discussions, reply and vote; asks for operators to test with their own agents. Repo: github.com/Docrohit/council-network-connect.
- **#274** (2026-10-29T20:01Z) — "S1-ADV: a Cardputer ADV frontend for a host-side OpenClaw agent" — ESP32-S3 firmware (keyboard/display/audio + local apps) plus a Node.js bridge beside OpenClaw; i.e. a new OpenClaw-adjacent hardware form factor.
- **#272** (2026-10-29T16:49Z, tag `plugins`, 3 views) — "The plugin market is acting up, need a fix." (screenshot attachment).
- **#270** (2026-10-29T16:49Z) — "Update recovery blocked: package publication journal does not match installation" — OpenClaw 2026.10.2, Linux, Node 24.21.0 via fnm, managed install.
- **#268** (2026-10-29T16:48Z) — "Update blocked on 2026.9.8: missing managed-update-handoffs.sqlite; recovery helper also fails".
- **#266** (2026-10-29T16:48Z) — "Update to 2026.10.8 failed — stuck between database migration and Doctor errors".
- **#265** (2026-10-29T13:51Z) — "Permissions for claw" (2 views).

Three of the seven (#270, #268, #266) are independent user reports of **blocked update/rollback recovery** on managed installs, converging on the same update-journal / `managed-update-handoffs.sqlite` / migration-handoff failure class that beta.5's "Updates and rollback" highlight (#185160, #185201, #181695) and the P0 update-failure reports above address.

Source: https://community.openclaw.ai/latest.json
Source: https://community.openclaw.ai/t/276.json
Source: https://community.openclaw.ai/t/274.json
Source: https://community.openclaw.ai/t/272.json
Source: https://community.openclaw.ai/t/270.json
Source: https://community.openclaw.ai/t/268.json
Source: https://community.openclaw.ai/t/266.json

### HN: still no new OpenClaw story in the window

Algolia `search_by_date` for `openclaw` stories (tags=story) returns 1,665 total hits, but the **newest is 2026-10-26T22:40Z** — "OpenClaw creator says he spent $10M in tokens last month" (theregister.com, 2 points; earlier dupes 2026-10-22 with 9 and 4 points). No OpenClaw story was posted on 2026-10-29 or 2026-10-30, so the HN channel remains silent for a second consecutive day. Recent-but-older items still visible: "Show HN: Castellan – A real-time strategy game for agents" (2026-10-26), "Launch HN: Alter (YC S25) – Access control for multi-user agents" (2026-10-21, 69 points), "Show HN: Merlin, Run Your Claude Code and Codex from Slack, Linear and GitHub" (2026-10-14).

Source: https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story

### Feature/model-provider signals in the new issue stream (selected)

- **#188213 / #188214** (2026-10-30T09:19Z) — "[Feature]: Opt-in OpenAI Flex processing with Flex-sized timeouts and retries" + matching PR → new OpenAI cost/latency tier.
- **#188208** (2026-10-30T09:11Z) — "feat(baseten): support joey-1 decision model" → new decision-model support on Baseten.
- **#188158** (2026-10-30T07:24Z) — "feat(model-catalog): rows can state their offered thinking levels; xAI rows own their profiles" → per-model thinking-level metadata, xAI-specific.
- **#188210 / #188209** — "feat(sessions): search past transcript text from the CLI (sessions search)".
- **#188184 / #188183** — "feat(sessions): show a session's checkout changes from the CLI (sessions diff)".
- **#188200 / #188199** — "feat(update): list recorded update runs from the CLI (update history)".
- **#188201** — "Memory status: expose dirty reasons and per-source session freshness".
- **#188185** — "fix(feishu): match sticker-search queries across NFC/NFD forms".
- **#188202** — "fix(macos): exec host returns empty output for invalid UTF-8".
- **#188161** — "docs(gateway): add Windows notes for running multiple Gateways".
- **#188162** — "improve(ui): mobile sheets move with iOS-style springs, flicks and swipe-to-dismiss".
- **#188177** — "fix: observe guest follow-ups without false delivery failures".

Read as a theme: the CLI is being broadened into an operator console (**sessions search / sessions diff / update history**), and the model catalog is being made first-class (per-row thinking levels, xAI-owned profiles, a new decision model, an OpenAI Flex tier).

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:%3E2026-10-29T09:28:00Z&sort=created&order=desc&per_page=60

### Blog / RSS: no new posts in the window

`openclaw.ai/rss.xml` latest items: "Come Build With Us: OpenClaw Focus Weeks" (2026-10-21), "How PJ helps small businesses use OpenClaw" (2026-10-16), "Tencent AIG joins ClawScan" (2026-10-02), "OpenClaw Enterprise - The Open Agent Platform" (2026-09-29), "Microsoft Autopilot is built on OpenClaw" (2026-09-25), "Decision models in OpenClaw". **No new blog post on 2026-10-29 or 2026-10-30.**

Source: https://openclaw.ai/rss.xml

### Docs release-notes page

`docs.openclaw.ai/releases` was reachable and renders the release-notes index plus the docs navigation (Install → Ecosystem → Integrations → Blog → Community). The page's rendered text was dominated by the site nav; the release-list body was not cleanly separable from the nav in the fetched HTML, so **release-note content was read from the GitHub release bodies instead**. The nav confirms the documented channels exist: Install / Maintenance / Updating / Rollback and recovery / Release channels / Ecosystem / ClawHub.

Source: https://docs.openclaw.ai/releases

### Blocked / failed sources (explicit)

- **ClawHub API — NOT reachable.** `https://clawhub.ai/api/skills?sort=downloads` → Vercel `DEPLOYMENT_NOT_FOUND`; `https://registry.clawhub.ai/skills` → empty; `https://clawhub.io/api/v1/skills` → `NOT_FOUND`. **No ClawHub top-skills data could be verified this run** (the last successful ClawHub pull was in an earlier checkpoint).
- **reddit.com** — not attempted (known 403 from this host).
- `web_search` was **not used at all** this run (0 of 5 budget); all data came from direct JSON/API fetches, so discovery is API-driven rather than search-driven.
- `web_fetch` budget: 1 of 2 used (npm dist-tags). All other endpoints were fetched via `curl` in `exec` against the same public APIs.

### Verification notes (what is fetched vs. inferred)

- **Verified by fetch**: npm dist-tags & publish times, GitHub release bodies & publish times, GitHub repo stats (stars/forks/open issues/pushed_at), full issue & PR search results with labels, all advisory `published_at` values, enterprise commit list & pagination count, npm download counts, Discourse topic metadata & bodies, HN Algolia results, ClawStat JSON, blog RSS items.
- **Inferred**: that the three forum update-failure topics and the P0 update-failure reports describe one systemic managed-update recovery defect (convergent, but no single linked root cause was confirmed); that the `node-runtime-preflight` P0 reports and beta.5's Node-compatibility fix are the same regression (strong timing + symptom match, not explicitly linked by the maintainers).
- **Not verified**: ClawHub skill rankings; whether the `extended-stable: 2026.9.36` tag moved during the window (dist-tags shows the same value as at checkpoint; the underlying publish time was not re-checked).

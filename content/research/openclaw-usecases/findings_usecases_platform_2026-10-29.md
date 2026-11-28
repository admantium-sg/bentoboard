# Findings — Platform news, releases, security incidents, enterprise adoption
**Task 1 · Date: 2026-10-29 · Window: 2026-10-28 09:28 UTC → 2026-10-29 ~10:00 UTC**
**Novelty baseline: Oct 28 run (v2026.10.8 release, ClawStat downgrade, issues #186434/#186414/#186478/#186281/#186333/#186043, #186662/#186638/#186661/#186656, perf #186631/#186621, capability #186607, openclaw-enterprise commit activity). All of that is excluded below.**

---

## New Releases / Changelog

**No new published release in the window — but a full next stable train (2026.10.9) is in qualification and its security cohort is the headline**
npm dist-tags are unchanged since the Oct 28 run: `latest = 2026.10.8`, `extended-stable = 2026.9.35`, `beta = 2026.10.10-beta.4`; registry `time.modified` is still `2026-10-27T11:24:31.710Z`. GitHub Releases list likewise still ends at `v2026.10.8` (published 2026-10-27T11:56:59Z). `2026.10.10-beta.5` is **not** on npm (registry returns 404 for that version) and no `v2026.10.9` tag exists.

What *is* new is the **release/2026.10.9 branch**, which is 42 commits ahead of `release/2026.10.8` (1 behind). `package.json` on that branch already reads `"version": "2026.10.9"`, and `CHANGELOG/2026.10.9.md` was written at **2026-10-28T20:44:48Z** by commit `chore(release): prepare 2026.10.9 version and notes`. The changelog's six Highlights: *"Preserve operator edits when an immediate Git-source update rollback cannot safely restore the checkout"* (#185201, #184887); *"Recover intact agent databases and stale full-text indexes after SQLite tokenizer changes, including update snapshots"* (#176234, #176220, #176833, #181206); *"Keep live credentials out of MCP CLI inspection and mask Google OAuth client secrets in logs"* (#180321, #180308, #183193); *"Repair publication-complete updates after a remount while retaining the original launcher and sealed recovery helper"* (#186557, #186527); *"Migrate large transcript archives without exceeding Node.js string limits"* (#170853, #170847); *"Allow agents to recover after a full disk once space becomes available, without requiring a restart"* (#176902). The changelog records **"17 in-range PRs + 0 retained seed-only PRs = 17 unique PRs"** for range `v2026.10.8..32c00782ebee59dab4b73fe7dc3f285fe5f34b86`.

Critically, the 18 PRs titled `[2026.10.9]` (mostly merged Oct 29 05:00–08:47 UTC, i.e. *after* the changelog file was written) constitute a **security-heavy backport cohort onto the stable train** — see Security section. So the published changelog currently under-describes the shipping release. `fix(release): repair 2026.10.9 qualification failures` (2026-10-29T02:50:28Z) and `fix(release): consolidate validation backports for 2026.10.9 (#181924)` (05:03:22Z) show the train is actively qualifying; issue **#187490** ("Flaky tests seen in 2026.10.9 release validation", Oct 29 08:12:45 UTC) is open against it. **No 2026.10.9 release date is stated anywhere I could verify.**
Source: https://github.com/openclaw/openclaw/compare/release/2026.10.8...release/2026.10.9 | https://raw.githubusercontent.com/openclaw/openclaw/release/2026.10.9/CHANGELOG/2026.10.9.md | https://registry.npmjs.org/openclaw

**Parallel beta train: release/2026.10.10 branch carries the same security fixes for beta.5, but beta.5 is unpublished**
`release/2026.10.10` branch commits in-window: `fix(release): package Windows helper for managed recovery (#187470)` (08:47:32Z), **`[2026.10.10-beta.5] fix(security): update beta Vitest patch cohort to 5.0.5 (#187279)`** (09:04:15Z), **`[2026.10.10-beta.5] fix(security): bound A2UI Zod 3 traversal on beta (#187304)`** (07:19:04Z), `fix(openshell): use public SDK error classifier at filesystem boundary (#187448)` (07:24:15Z), `fix(memory): route canonical FTS builders through the memory-host-sdk SQLite bridge (#187536)` (09:21:49Z), `fix(release): backport retrospective batch 5 to 2026.10.10 (#181927)` (07:40:20Z). Note the branch `release/2026.10.15` also exists (last commit 2026-10-27T00:06:54Z, `improve: move people actions into a context menu`) — a fourth release train in flight.
Source: https://api.github.com/repos/openclaw/openclaw/commits?sha=release/2026.10.10 | https://api.github.com/repos/openclaw/openclaw/commits?sha=release/2026.10.15

**Docs site and blog still show 2026.10.8 as latest — no announcement for the pending train**
`docs.openclaw.ai/releases` (fetched 2026-10-29 09:32 UTC) lists *"v2026.10.8 (latest)"* as the newest October card. The blog RSS `https://openclaw.ai/rss.xml` still has **"Come Build With Us: OpenClaw Focus Weeks" (Wed, 21 Oct 2026)** as its most recent post — i.e. **eight days with no blog post**, and none in this window.
Source: https://docs.openclaw.ai/releases | https://openclaw.ai/rss.xml

---

## Security Issues & Incidents

**Security backport cohort landing on the 2026.10.9 stable train — five named third-party GHSAs plus a Zod traversal class**
These are PRs merged into `release/2026.10.9` inside the window, with provenance stated in the PR bodies:

- **#187284 `fix(security): backport fast-uri 4.2.3 to stable`** (merged 2026-10-29T05:12:28Z) — *"Update only the maintained fast-uri 4.2.1→4.2.3 runtime parser, its lock entries, and an installed MCP/Ajv regression."* Rationale: *"External MCP tool schemas reach the SDK Ajv validator and its fast-uri dependency. The baseline accepts encoded schemes and ambiguous hosts and incorrectly normalizes a relative reference."* Fixes **GHSA-w74x-v6f9-j3xg, GHSA-wjr9-j795-jxcr, GHSA-xhq7-xmqj-769h and GHSA-333x-w4r6-6crp**. The PR explicitly states *"no unauthenticated network exploit is claimed."*
- **#187303 `[2026.10.9] fix(security): bound A2UI Zod 3 traversal on stable`** (merged 07:19:21Z) — a *"local Zod-3 adaptation, not a cherry-pick"* implementing early upper-bound rejection from upstream `colinhacks/zod#6652` (commit `a0ebf970f2d752e5f58527cd2942ff48be4f46bd`), **GHSA-mrhx-c7xc-m3w5**. Scope note: *"A2UI 0.12.0, retaining Zod 3.25.76 … No broad Zod-4 migration, A2UI removal, or vendored-parser replacement."*
- **#187296 `[2026.10.9] fix(discord): early-reject oversized vendored Zod input`** (merged 06:02:09Z) — targeted mitigation for the Zod parser *embedded inside* `@discord/embedded-app-sdk@2.5.0`, which ships its own Zod 3 bytes and is therefore unaffected by the standalone Zod patch. Same upstream Zod commit / GHSA-mrhx-c7xc-m3w5 lineage.
- **#187267 `[2026.10.9] fix(security): update stable Vitest patch cohort to 5.0.5`** (opened 04:11:48Z, still **open** at time of writing) — Vitest 5.0.1 → 5.0.5 with matching browser/browser-playwright, UI, coverage-v8 and mocker packages; addresses **GHSA-p458-7748-mcp3, GHSA-xp26-3454-mjgp and GHSA-qxg6-89mg-rqv8**. *"Keeps this stable train's Vite 8.3.2 unchanged."* Derived from *"the preserved security aggregate f0a0c53aa23b80bd68267fc48cfdda020db77c26"*.
- **#187255 `[2026.10.9] fix(clawhub): pin patched Undici on release`** (merged 05:12:01Z) — `clawhub@0.23.3` override and `node_modules/undici` lock metadata **7.29.1 → 7.30.1**, with a new full-lock SHA-256 `5f7da1abdfcaf8adcf8a20b609f677cd7a0e9ffe37e078b39d0b742bce5ce6af` and a tampered-lock rejection regression before npm.
- **#187253 `fix(release/2026.10.8): bound Vercel toolchain advisory repairs`** (merged 05:11:06Z) — fast-uri 3.1.9, smol-toml 1.9.1, undici 6.29.1/7.30.1 across the Vercel toolchain. Honest disclosure in the PR: *"Baseline npm lock-only audit: 29 affected entries (16 moderate, 13 high). After: 12 high Zod-related entries; fast-uri, smol-toml and undici removed. **NOT audit clean.** Zod GHSA-mrhx-c7xc-m3w5 (<4.6.6) remains; 3-to-4 migration deferred."*
- **#187316 `[2026.10.9] Escape terminal controls in gateway discovery`** (opened 04:32:47Z, still open) — focused backport of upstream #183355 (commit `302b89a6e62daff032971a8e1bd07716bfb122d2`, author Alix-007): *"Escape untrusted Bonjour/discovery fields before terminal rendering."* Evidence in the PR: *"release/2026.10.8 still emits raw terminal controls: exact-base negative control fails both rich/plain rendering assertions (2 failed, 1 passed)."*
- Also merged: `#187294` (patched MSAL scoped to the stable train, 06:42:22Z), `#187302` (nodemailer sender-parsing backport for IMAP, 06:03:16Z), `#187276` (`[2026.10.9] Preserve filesystem policy in Gateway-built tools`, 06:07:19Z), `#187272` (preserve buffered cleanup uncertainty, 05:57:26Z), `#187277` (retry guarded package rollback and report recovery, 05:10:23Z).
Source: https://github.com/openclaw/openclaw/pull/187284 | https://github.com/openclaw/openclaw/pull/187303 | https://github.com/openclaw/openclaw/pull/187267 | https://github.com/openclaw/openclaw/pull/187253 | https://github.com/openclaw/openclaw/pull/187316 | https://github.com/openclaw/openclaw/pull/187296 | https://github.com/openclaw/openclaw/pull/187255

**No new OpenClaw GHSA advisory published in the window**
The repo's advisory list still tops out at **2026-09-11T00:58Z** (30 advisories returned, newest are GHSA-rx8p-qcpv-c7vr, GHSA-xvwp-wmh2-fq48, GHSA-5j57-84cx-r295 etc.). None were published in the last 48 h. The third-party GHSAs above are being patched *without* a corresponding OpenClaw advisory — i.e. **fast-uri 4.2.3, Zod traversal (GHSA-mrhx-c7xc-m3w5) and Vitest 5.0.5 are known-vulnerable in shipped 2026.10.8 until 2026.10.9 ships.** I could not verify whether a coordinated advisory exists outside the repo.
Source: https://api.github.com/repos/openclaw/openclaw/security-advisories

**Three new `impact:security` issues filed in the window — one provenance-laundering, one tool-policy bypass, one owner-scope gap**
- **#187237** (2026-10-29T03:46:00Z, P2, `impact:security`, 🦞 diamond lobster, `clawsweeper:source-repro`) — *"Compaction summary serializer uses unescaped in-band role labels ([User]:) — provenance laundering on tool output"*. Body: *"The client-side compaction path serializes a session into plain text with in-band role labels (`[User]:`, `[Assistant]:`, `[Tool result of <tool>]:`) and does not escape or neutralize the same label patterns when they appear inside message content."* Consequence: *"content the model merely read through a tool (a web page, a README, a PDF, an email body) can emit a line that is byte-identical to a genuine user turn inside the summarizer input. This is the provenance-laundering class described in arXiv 2610.29869; its practical target is the approval boundary, where a summary-level 'the user already approved X' re-primes approval-escalation reasoning."* Scope: *"the provider-native compaction path passes a role-typed message array and is unaffected."*
- **#187513** (2026-10-29T08:43:15Z, P1, `impact:security`, `clawsweeper:linked-pr-open`) — *"Scheduled automations keep running after their Telegram account is removed while a routing binding still names it"*. Body: *"capped automations created from that account keep running under the channel's base group tool policy instead of failing before model/tool execution … **Tools that were denied on the removed account become available again, up to the automation's cap.**"* Trigger is exactly what `openclaw channels remove --channel telegram --account <id> --delete` leaves behind.
- **#187264** (2026-10-29T04:10:07Z, P2, `impact:security`, `clawsweeper:needs-product-decision`) — *"Caller-scoped, same-conversation scheduling for non-owner channel requests"*. Body: `automations` is in `GATEWAY_CONTROL_PLANE_TOOLS` then `GATEWAY_OWNER_ONLY_CORE_TOOLS`, and *"An ordinary allowlist does not override it."* This is the deliberate owner-only denial colliding with the requester-scoped creation code — reported as a product decision, not a bypass.
Source: https://github.com/openclaw/openclaw/issues/187237 | https://github.com/openclaw/openclaw/issues/187513 | https://github.com/openclaw/openclaw/issues/187264

**#186684 — claude-cli agents lose all history on a tool-list change (new since the Oct 28 run)**
Created 2026-10-28T10:36:36Z (P1, `impact:session-state`, `impact:auth-provider`, `clawsweeper:needs-security-review`, `clawsweeper:needs-live-repro`, 🐚 platinum hermit). Since 2026.10.7, `resolveCliSessionReuse` (`src/agents/cli-session.ts`) returns `{ mode: "invalidate", invalidatedReason: "prompt-tools" }` when `promptToolNamesHash` changes; under subscription auth the history reseed is then refused (`rawTranscriptReseedReason = "auth-unknown"`, `src/agents/cli-runner/prepare.ts`), so *"The agent continues with `historyPrompt=none`, i.e. total amnesia."* Because tool sets differ by trigger (*"user 44 / heartbeat 41 / event 40"*), *"this fires routinely."* Environment: Windows 11, OpenClaw 2026.10.8, 5 agents, largest agent DB 966 MB, Claude subscription auth.
Source: https://github.com/openclaw/openclaw/issues/186684

---

## Performance / Capability

**Tracker velocity in the window: 255 new issues and 633 new PRs since 2026-10-28 09:28 UTC**
GitHub search API: `created:>2026-10-28T09:28:00Z is:issue` → **255**; `is:pr` → **633**. Per calendar day: Oct 28 = 704 issues / 504 PRs; Oct 29 (partial, to ~09:30 UTC) = 452 issues / 338 PRs. Nine of the new issues carry `impact:crash-loop`. Note the PR:issue ratio has inverted versus the Oct 28 run (42 PRs vs 18 issues) — the repo is now overwhelmingly in *fix* mode, consistent with a release-qualification train running in parallel.
Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28T09:28:00Z

**#186813 (P0) — in-chat managed update deadlocks on SQLite lock contention with no timeout**
Created 2026-10-28T14:30:31Z, labels `P0`, `impact:ux-release-blocker`, `maturity:stable`. Body: *"the spawned child processes (`handoff.cjs` and `openclaw update --yes`) frequently deadlock against the serving gateway while competing for an exclusive SQLite transaction on `openclaw.sqlite` … Instead of failing fast or timing out, the spawned `openclaw update` process enters an indefinite `epoll_wait` loop. It remains alive for hours consuming significant CPU (10–50%), holding lock directories in `node_modules` and `/tmp`, and preventing any future update attempts with `managed-service-handoff-already-running` / `Another update executor owns this installation`."* Environment: Raspberry Pi 5 ARM64, Debian 13 trixie, Node v24.22.1, OpenClaw 2026.10.7 → 2026.10.8, managed systemd user service.
Source: https://github.com/openclaw/openclaw/issues/186813

**#186895 (P1) — Windows cold-start degrades badly with a large custom skills directory**
Created 2026-10-28T16:27:29Z, labels `regression`, `impact:crash-loop`, 🦪 silver shellfish. Windows 11, 2026.10.8 (dc2523e), 12 agents, custom skills dir with 28 lark-* skills / 552 files: *"gateway cold-start `prepared-runtime` takes ~30s; with the skills dir present the prepared-model-catalog preparation stalls, model runtime publication is superseded, and feishu channels disconnect (event loop degraded, CPU ~8 cores, utilization 1.0 for many minutes)."* *"agent inference drops from ~90-140s to ~14-18s"* once the skills dir is moved away. This is the **skills-directory scaling counterpart to yesterday's #186607** (skills truncation) — same root area, different symptom.
Source: https://github.com/openclaw/openclaw/issues/186895

**#186825 (P1) — an orphaned agent directory permanently blocks Gateway startup; `doctor --fix` cannot repair it**
Created 2026-10-28T14:44:20Z, `impact:crash-loop`. Body: *"a leftover agent directory for an agent that is **no longer configured** permanently blocks Gateway startup with `Legacy session store requires migration`, and `openclaw doctor --fix` cannot resolve it — it finishes all other work and exits 1 with 'Doctor cannot repair this state'. The only fix was manually moving the directory out of `agents/`."*
Source: https://github.com/openclaw/openclaw/issues/186825

**#187099 (P1) — queued reply never reclaimed on a recovery-rollover lane; the stuck-session diagnostic sees the stall and declines to act**
Created 2026-10-28T23:56:09Z, `impact:session-state`. Reporter confirms the killed-fence class from #181952 is fixed live on 2026.10.8, then documents the next shape: *"a new user message was accepted into the queue but the reply never started … `lastProgress=reply_operation:queued queueDepth=0 state=processing`"*, and *"The stuck-session diagnostic classified it correctly and then declined every 30s for the whole observation window (00:42:54 -> 00:45:24, and still ongoing)."* Dashboard main session unusable since 2026-10-24. Agent store ~572 MB, lossless-claw plugin enabled.
Source: https://github.com/openclaw/openclaw/issues/187099

**#187309 (P0) — recurring per-agent SQLite WAL/SHM identity mismatch on 2026.10.8**
Created 2026-10-29T04:28:07Z, `bug:crash`, `impact:crash-loop`. Body: *"repeated active-leases receipts and agent disk I/O errors were followed by evidence of deleted WAL/SHM descriptors, a different zero-byte directory-visible WAL, absent SHM, and fatal sqlite_wal_sidecar_identity_mismatch containment."* Reproducibility is `NOT_ENOUGH_INFO`; the installed `sqlite-wal-DX5E3T-8.mjs` module explicitly validates WAL/SHM descriptor/path identity. The closest sibling is yesterday's #186631 (full `integrity_check` per state opener) — both point at the SQLite sidecar layer.
Source: https://github.com/openclaw/openclaw/issues/187309

**#187400 (P1) — a *new* variant of yesterday's #186621: inline code + a `<` comparison re-parses the whole answer per delta, 45 s at 128 KB**
Created 2026-10-29T06:15:57Z, `impact:crash-loop`, `clawsweeper:queueable-fix`. Body: *"A streamed reply that mentions inline code and a plain `<` comparison or a generic type **on the same line** makes `toolCallXmlTextFilter`'s streaming gate parse the whole accumulated reply on every later delta. The Gateway event loop is blocked for 45 s on a 128 KB answer."* Mechanism: `advanceProtectionScanState` sets `paragraphAmbiguous` for any line containing a backtick, a tab, or 4+ leading spaces, which skips the cheap partial-tag settle branch. Distinct from #186621 (MEDIA: attachment) — a second trigger for the same per-delta re-parse class.
Source: https://github.com/openclaw/openclaw/issues/187400

**#187041 (P1) / #187354 — running the `openclaw` CLI inside the Gateway container stalls the Gateway main thread (~160 s per invocation) and can OOM-kill it**
#187041 created 2026-10-28T22:01:15Z, `impact:crash-loop`, `clawsweeper:linked-pr-open`: *"several scheduled host jobs run `docker exec <gateway> openclaw <subcommand>` … Each invocation boots a full CLI runtime inside the same container as the gateway. When several overlap, the gateway becomes unresponsive for minutes. User-visible effects are Discord 1006 disconnects and agents refused by the reclamation worker. Nothing in the docs warns that 'just run a status command' is expensive."* Evidence: 2026.10.7, Docker Compose, 4 vCPU, ~23 agents, 120–140% CPU per CLI process. The sibling **#187354** (2026-10-29T05:27:10Z) reports the same path ending in **OOM 137** plus *"SQLite lease contention"*. Also **#187355** (05:27:11Z, P1): *"`openclaw message send` needs ~17 s even with --dry-run"* — a WhatsApp dry run takes 16.7 s; four parallel dry runs all finish after 41 s.
Source: https://github.com/openclaw/openclaw/issues/187041 | https://github.com/openclaw/openclaw/issues/187354 | https://github.com/openclaw/openclaw/issues/187355

**#187123 (P1) — agent-authored edits to `openclaw.json` are not schema-validated, so one bad key crash-loops the Gateway**
Created 2026-10-29T00:25:51Z, `impact:crash-loop`. Ubuntu 26.04.1 aarch64, 2026.10.8, systemd user service, local Ollama model: the agent edited `~/.openclaw/openclaw.json` itself *"several times, each time with a key the config schema doesn't accept"*, and *"restart recovery and heartbeats resume the agent, which breaks it again"* — a self-inflicted crash-loop where the recovery path re-runs the corrupting agent.
Source: https://github.com/openclaw/openclaw/issues/187123

**#187145 (P1) — macOS `doctor --fix --non-interactive` on 2026.10.8 keeps the Gateway offline for 53+ minutes with two lines of output**
Created 2026-10-29T01:10:09Z, `impact:crash-loop`, `maturity:stable`. macOS arm64: *"stopped a working managed Gateway after successful `update repair`, then spent over 53 minutes in offline maintenance with only two lines of output, while file captures and repeated read-only SQLite revision workers continued."* Reproduction is explicitly *"Observed once on this affected installation; not a minimal or independently repeatable reproduction."*
Source: https://github.com/openclaw/openclaw/issues/187145

**#187035 (P2) — Node compile cache grows ~570 files per CLI run; on tmpfs this exhausts inodes within about a day**
Created 2026-10-28T21:56:19Z, `impact:other`. Body: *"OpenClaw 2026.9.35's Node compile cache (`$TMPDIR/node-compile-cache/openclaw/<version>/<build>/`) grows by ~570 files on **every** short-lived `openclaw` CLI run, and the built-in maintenance never removes them in time."* Cause: *"Each CLI run captures its plugins (and their `node_modules`) into a fresh randomly named folder under `~/.openclaw/tmp/plugin-captures/` and loads them from there. Node's compile cache is keyed by file path."* Host: tmpfs `/tmp` with 1M inodes.
Source: https://github.com/openclaw/openclaw/issues/187035

**Capability requests filed in-window**
- **#187541** (Oct 29 09:15:20Z, P2, `impact:security`) — *"Let the agent administer a Discord guild"*. *"The closed core action vocabulary in `src/channels/plugins/message-action-names.ts` stops at assigning existing roles and creating channels"*; the agent cannot *"create or edit a role, write a channel permission overwrite, change guild settings, read the audit log, manage members in bulk, moderate voice, manage webhooks, or configure events, AutoMod and onboarding."*
- **#187149** (Oct 29 01:17:05Z, P2) — *"PlanetScale Neki native agent storage via a pre-boot PostgreSQL lifecycle extension"*. Concretely documents PlanetScale router limits against OpenClaw's native storage: *"`pg_export_snapshot()`, rejected with `NK013 [200]`"*, *"`NK013 [817]`"* (dependent DDL planned before the router can see earlier relations in the same transaction), *"`NK013 [302]`"* on custom text-search config DDL, and *"The native transcript multi-write CTE hits `XX000: unhandled logical plan oper…`"*. Prototype: https://github.com/PandelisZ/openclaw-neki
- **#187014** (Oct 28 20:26:07Z, P3) — *"MiniMax M3.1 Flash native server-side web search on Anthropic Messages"*: *"The model executes searches on MiniMax's servers and continues answering without OpenClaw executing a client-side search tool."*
- **#187112** (Oct 29 00:10:29Z, P3) — *"Add Particle model provider support"*, OpenAI-compatible at `https://api.particle.ai/v1`, canonical model id `particle-ai/particle-1`.
- **#187552** (Oct 29 09:27:23Z) — *"Option to keep chat message timestamps always visible in the Control UI (desktop)"*.
Source: https://github.com/openclaw/openclaw/issues/187541 | https://github.com/openclaw/openclaw/issues/187149 | https://github.com/openclaw/openclaw/issues/187014 | https://github.com/openclaw/openclaw/issues/187112

**ClawStat re-assessment (2026-10-29T04:34:18Z) — still ⚠️, but the headline changed and the recommended version moved backwards**
Recommendation remains **⚠️ "Update with care"**, confidence *medium*, on **2026.10.8** — but the headline is new: *"Update with care: Windows onboarding and cold-start stalls, a gateway-startup blocker from leftover agent dirs, and session/proxy bugs — none widespread."* The gate's single confirmed blocker is still **#185819** (Windows Codex onboarding, 13 comments); the thesis adds *"a later instrumented attempt on 2026.10.8 did not reproduce it, so this may be confined to machines with pre-existing Codex installs — a non-reproduction, not proof of a fix."* New evidence cited in the thesis: **#186895** (Windows cold-start, confirmed regression), **#186684** (claude-cli amnesia), **#186825** (orphaned agent dir), **#186813** (in-chat update deadlock), **#187099** (recovery-lane reply stall). The recommended version field now points at **2026.10.6** (7 days old, ⚠️, 3 blockers: #181032, #181660, #181432) — i.e. ClawStat's own "settled" pick is *two releases behind* `latest`. Tracked issues rose to **80** (from 60); known-issue list now includes the new #186684/#186813/#186825/#186895/#186957/#186990/#187041/#187099/#187114/#187115/#187154/#187237/#187264. New flip conditions: *"⚠️ eases toward ✅ once the next stable release ships fixes for #185819 (Windows Codex onboarding), #186895 (Windows cold-start stall), and #186825 (orphaned agent dir blocking gateway start)"*; hardens to ⏸️ *"if #186684 (claude-cli total session amnesia) or #187099 (recovery-lane reply stall disabling the main session) is confirmed beyond single-reporter scope as an unfixed data-loss-class defect on 2026.10.8."*
Source: https://clawstat.us/latest.json

---

## Enterprise Adoption

**openclaw-enterprise: 73 commits since 2026-10-28 09:30 UTC; the Google Workspace worker is the concrete enterprise-delivery story**
Repo metrics: **446 stars, 99 forks, 221 open issues**, pushed 2026-10-29T05:57:39Z (up from 443 stars / 98 forks / 221 open issues in the Oct 28 run). New in-window work centres on running the **Google Workspace plugin on dedicated, credential-isolated OpenClaw workers**:
- **#3885 `Enforce Google Workspace operations on dedicated OpenClaw workers`** (2026-10-28T23:26:00Z) — the largest new commit. Bullets include *"Deploy the pinned Google Workspace plugin to dedicated OpenClaw workers"*, *"Bind one ready Agent credential to a pinned managed plugin release"*, *"Check signed managed plugin requests before OpenShell resolves a bearer"*, *"Deliver scoped OpenShell placeholders to the dedicated Google worker"*, *"Verify the negotiated request guard before attaching plugin credentials"*, *"Pass the mounted OpenShell CA through to credentialed native tools"*, *"Verify the Google worker patch in image provenance"*, *"Authorize managed plugin requests in the OpenShell execution cluster"*. Co-authored by `stevenlee-oai`.
- **#3794 `Install the pinned Google Workspace package on dedicated OpenClaw workers`** (2026-10-28T18:54:47Z), **#3978 `fix(plugins): offer only placeable plugins in saved-agent discovery`** (19:22:07Z) — *"The Plugin Driver's catalog takes no Agent, so saved-Agent discovery listed packages that Agent save then refused (the Google Workspace package on a Codex Harness or on Compute that cannot deliver it) … Finding 2787."*
- OpenShell hardening: **#4009** (*"Avoid initializing OpenShell for a cancelled service lookup"*, Oct 29 02:14:22Z), **#4002** (*"Honor cancellation when reading OpenShell harness status"*, 01:26:51Z), **#3813** (protected-update-turn job state reporting, Oct 28 16:40:50Z).
- Multi-tenancy/console: **#3898 `feat(console): expose namespace deletion`** (Oct 28 21:28:32Z), **#3981** (*"Point managed Gateway admins to their Agent's draft Configuration"*, Oct 29 01:47:34Z), **#4003/#4001** (namespace-row permission reads; focus/status through namespace deletion polls), **#3807** (*"document Gateway managed mode permissions for Agent requests"*), **#3056** (literal Namespace names during tenant restore), **#3986** (`fix(helm)`: worker startup probe and realistic exec probe timeouts).
- Deploy-safety: **#4011** (*"refuse agent drafts the selected image would not deploy before stopping writers"*, Oct 29 03:13:20Z), **#4012** (*"show a draft's retired openclaw setting refusal before deploy"*), **#4013** (*"check model provider settings in the draft preflight and size drafts by the installation"*).
- New open issue **#4016** (2026-10-29T04:18:49Z): *"Replace Codex/OpenShell Credential Gateway delivery with Credential Proxy"* — the credential-delivery architecture is being reworked.
Source: https://github.com/openclaw/openclaw-enterprise/commits/main | https://api.github.com/repos/openclaw/openclaw-enterprise

**No new official OpenClaw enterprise announcement in the window**
The official blog RSS has no new post since Oct 21 (see Releases section). The independent tracker quoted by The Claw Report on Oct 28 — *"OpenClaw release history | Freedom.Tech"* — confirms only the existing cadence: *"10.6 (Oct 22), 10.7 (Oct 24), extended-stable 9.34 (Oct 24) and 9.35 (Oct 27), plus the 10.10 beta train."* The Claw Report page itself still leads with *"OpenClaw has shipped v2026.10.7"* despite being *"Last updated: October 29, 2026"* — the secondary aggregator is lagging the actual release train by one version.
Source: https://www.theclawreport.com/ | https://openclaw.ai/rss.xml

---

## Ecosystem / Adoption Metrics

**npm weekly downloads: 3,114,044 (Oct 21–27) — up ~14% over the 2,722,524 recorded the previous day**
`api.npmjs.org/downloads/point/last-week/openclaw` = **3,114,044** for Oct 21–27; `last-day` = **391,520** for Oct 27 alone. The Oct 28 run recorded 2,722,524 for Oct 20–26, so the trailing week grew **+391,520 (+14.4%)** — the bump coincides with the 2026.10.8 release landing on Oct 27 11:24 UTC. Daily series shows the post-release peak on Oct 25 (667,822) and the release-day figure of 391,520. Caveat: the daily series returns **0 for Oct 13, 14, 15, 19, 20 and 21**, so the weekly totals are best read as "reported by the registry", not as a clean time series.
Source: https://api.npmjs.org/downloads/point/last-week/openclaw | https://api.npmjs.org/downloads/range/2026-10-07:2026-10-27/openclaw

**GitHub repo metrics (2026-10-29 09:28 UTC)**
`openclaw/openclaw`: **393,318 stars, 82,684 forks, 7,815 open issues**, pushed 2026-10-29T09:28:45Z (vs 393,243 / 82,667 / 7,663 in the Oct 28 run → **+75 stars, +17 forks, +152 open issues in 24 h**). Sister repos: `clawhub` **9,540** stars (pushed Oct 28 21:13), `mcporter` 5,091, `openclaw-windows-node` **2,181** (pushed Oct 29 04:18), `crabbox` **1,509** (pushed Oct 29 06:28), `agent-skills` 1,110 (pushed Oct 29 04:50), `openclaw-enterprise` 446, `docs` 76 (pushed Oct 29 08:50), `clawscan` **149** stars / 1 open issue (pushed Oct 28 14:06 — *"Composable security scanning harness for agent skills"*).
Independent daily tracker (anomixer) reports star counts of **~393.3K (Oct 29)** vs ~393.2K (Oct 28) vs ~393.2K (Oct 27) — consistent with the API.
Source: https://api.github.com/repos/openclaw/openclaw | https://anomixer.github.io/openclaw-news/

**ClawHub top skills by downloads (as of 2026-10-29 09:3x UTC)**
`pskoett/self-improving-agent` **489,482 downloads / 18,509 installs / 4,006 stars** (v4.0.5 — its 4.0.5 changelog is itself a notable policy change: *"Disabling the hook now preserves learning history"*, *"Uninstall instructions use the actual installation paths and archive the skill and hook outside discovery directories"*, *"Permanent data deletion requires separate explicit authorization, verified paths, and a verified backup"*); `spclaudehome/skill-vetter` 280,322 / 12,264 / 1,311; `ivangdavila/self-improving` 213,340 / 7,393 / 1,301; `steipete/github` 203,151 / 7,657 / 672; `oswalpalash/ontology` 200,960 / 7,336 / 660; `steipete/gog` 198,338 / 5,496 / 956; `tokauthai/skillscan` 183,042 / 5,961 / 41; `halthelobster/proactive-agent` 178,580 / 7,208 / 831. Three of the top eight are security/self-improvement skills (skill-vetter, skillscan, self-improving ×2) — the security tooling tail is now a top-tier ecosystem category.
Source: https://clawhub.ai/api/v1/skills?sort=downloads&limit=25

**Community forum — one genuinely new thread, and it is a ClawHub publication-pipeline complaint**
New since the Oct 28 run:
- **#260 "I just make a public presentation about do the same 'multiplayer' openclaw at my company"** (2026-10-28T20:36:33Z, user `Saul_Burgos`, 2 posts, 7 views) — the user presented OpenClaw's multi-user mode at their company and *"They love it… but I don't have any idea how to do it"*, quoting a Claude investigation that concluded *"The docs never use the word 'multiplayer'; that's the video's name for it. The closest docs page is Multi-user mode."* A concrete enterprise-docs gap: the multi-user capability is publicly demonstrated but undocumented under those terms.
- **#258 "Retained ClawHub releases stuck after incomplete security checks"** (2026-10-28T14:02:17Z, publisher `c-kapsalis`, 1 post, 6 views) — two skill listings (`c-kapsalis/second-read` 0.3.1, `c-kapsalis/value-pricing` 0.1.1) are *"Hidden from the public catalog; needs review"* because *"Secret check: passed. Security check: could not complete."* The author explicitly asks for *"the required scans … completed or retried"* and states *"I am not requesting a waiver or bypass … I have not uploaded duplicate versions or tried to bypass checks."* This is a ClawHub scanning-pipeline availability problem with a real publisher blocked.
- **#254 "How to use Workboard"** picked up a reply at Oct 28 19:04; **#236 "Meet the Lobsterdex!"** last activity Oct 28 15:51; **#123 "What'd you name your main claw, and why?"** now at 30 posts / 200 views.
Source: https://community.openclaw.ai/latest.json | https://community.openclaw.ai/t/258.json | https://community.openclaw.ai/t/260.json

**Third-party coverage: no new OpenClaw-specific news inside the window**
OpenClawRadar's feed published two new items on Oct 29 — *"Surge AI's DAYJOB: Tax Benchmarks AI Agents on 50 Professional Tax Assignments"* (00:16:59Z, 50 tax environments, 1,789 files, *"Top model Claude Sonnet 5.5 scores only 10.8% pass@1"*) and *"Cursor Releases Agent SDK"* (00:15:01Z) — neither OpenClaw-specific. The only OpenClaw item in the feed is *"OpenClaw v2026.10.8 Patch Fixes Installs, Updates and Stuck Conversations"* (2026-10-28T00:17:18Z), i.e. coverage of yesterday's release. The anomixer daily digest for Oct 29 leads with *"Gemini 4 Carbon tops cyber; Nemotron opens; ETH refuted twice; Stars ~393.3K"*. **Hacker News has no new OpenClaw story in the window** — the most recent is still *"OpenClaw creator says he spent $10M in tokens last month"* (last re-post 2026-10-26T22:40:16Z, 2 pts / 1 comment).
Source: https://openclawradar.com/api/feed.json | https://anomixer.github.io/openclaw-news/ | https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story

---

## Source Log

- https://api.github.com/repos/openclaw/openclaw
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=8
- https://api.github.com/repos/openclaw/openclaw/tags?per_page=10
- https://api.github.com/repos/openclaw/openclaw/commits?per_page=30
- https://api.github.com/repos/openclaw/openclaw/commits?sha=release/2026.10.9
- https://api.github.com/repos/openclaw/openclaw/commits?sha=release/2026.10.10
- https://api.github.com/repos/openclaw/openclaw/commits?sha=release/2026.10.15
- https://api.github.com/repos/openclaw/openclaw/compare/release/2026.10.8...release/2026.10.9
- https://api.github.com/repos/openclaw/openclaw/branches?per_page=100
- https://github.com/openclaw/openclaw/compare/release/2026.10.8...release/2026.10.9
- https://raw.githubusercontent.com/openclaw/openclaw/release/2026.10.9/CHANGELOG/2026.10.9.md
- https://raw.githubusercontent.com/openclaw/openclaw/release/2026.10.9/package.json
- https://raw.githubusercontent.com/openclaw/openclaw/release/2026.10.9/CHANGELOG.md
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28T09:28:00Z+is:issue
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28T09:28:00Z+is:pr
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:2026-10-28+is:issue
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:2026-10-29+is:issue
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+in:title+%5B2026.10.9%5D
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28+is:issue+label:impact:security
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28+is:issue+label:impact:crash-loop
- https://api.github.com/search/issues?q=repo:openclaw/openclaw+created:>2026-10-28+is:issue+label:clawsweeper:needs-security-review
- https://api.github.com/repos/openclaw/openclaw/issues/186684
- https://api.github.com/repos/openclaw/openclaw/issues/186813
- https://api.github.com/repos/openclaw/openclaw/issues/186825
- https://api.github.com/repos/openclaw/openclaw/issues/186895
- https://api.github.com/repos/openclaw/openclaw/issues/187099
- https://api.github.com/repos/openclaw/openclaw/issues/187035
- https://api.github.com/repos/openclaw/openclaw/issues/187041
- https://api.github.com/repos/openclaw/openclaw/issues/187123
- https://api.github.com/repos/openclaw/openclaw/issues/187145
- https://api.github.com/repos/openclaw/openclaw/issues/187149
- https://api.github.com/repos/openclaw/openclaw/issues/187237
- https://api.github.com/repos/openclaw/openclaw/issues/187264
- https://api.github.com/repos/openclaw/openclaw/issues/187309
- https://api.github.com/repos/openclaw/openclaw/issues/187354
- https://api.github.com/repos/openclaw/openclaw/issues/187355
- https://api.github.com/repos/openclaw/openclaw/issues/187400
- https://api.github.com/repos/openclaw/openclaw/issues/187513
- https://api.github.com/repos/openclaw/openclaw/issues/187541
- https://api.github.com/repos/openclaw/openclaw/pull/187253
- https://api.github.com/repos/openclaw/openclaw/pull/187255
- https://api.github.com/repos/openclaw/openclaw/pull/187267
- https://api.github.com/repos/openclaw/openclaw/pull/187284
- https://api.github.com/repos/openclaw/openclaw/pull/187296
- https://api.github.com/repos/openclaw/openclaw/pull/187303
- https://api.github.com/repos/openclaw/openclaw/pull/187316
- https://api.github.com/repos/openclaw/openclaw/security-advisories?per_page=30
- https://api.github.com/repos/openclaw/openclaw-enterprise
- https://api.github.com/repos/openclaw/openclaw-enterprise/commits?since=2026-10-28T09:30:00Z&per_page=100
- https://api.github.com/repos/openclaw/openclaw-enterprise/issues?state=open&sort=created&direction=desc&per_page=15
- https://api.github.com/repos/openclaw/clawhub
- https://api.github.com/repos/openclaw/mcporter
- https://api.github.com/repos/openclaw/openclaw-windows-node
- https://api.github.com/repos/openclaw/crabbox
- https://api.github.com/repos/openclaw/agent-skills
- https://api.github.com/repos/openclaw/docs
- https://api.github.com/repos/openclaw/clawscan
- https://registry.npmjs.org/openclaw
- https://api.npmjs.org/downloads/point/last-week/openclaw
- https://api.npmjs.org/downloads/point/last-day/openclaw
- https://api.npmjs.org/downloads/range/2026-10-07:2026-10-27/openclaw
- https://clawstat.us/latest.json
- https://clawhub.ai/api/v1/skills?sort=downloads&limit=25
- https://community.openclaw.ai/latest.json
- https://community.openclaw.ai/t/258.json
- https://community.openclaw.ai/t/260.json
- https://openclaw.ai/rss.xml
- https://docs.openclaw.ai/releases
- https://openclawradar.com/api/feed.json
- https://anomixer.github.io/openclaw-news/
- https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story
- https://www.theclawreport.com/
- web_search: "OpenClaw 2026.10.9 release security backport fast-uri Zod"; "\"OpenClaw\" enterprise adoption company announcement October 28 2026"

## Errors / Limitations
- **No 2026.10.9 release exists yet in any published channel.** The finding is based on the `release/2026.10.9` branch (package.json version already bumped, changelog file written Oct 28 20:44 UTC) and 18 `[2026.10.9]`-titled PRs. Release timing is **unverified** — no date, no npm version, no GitHub release.
- **The 2026.10.9 changelog file is stale relative to the branch**: it was authored at Oct 28 20:44 UTC and lists 17 PRs, while the security backports merged into the same branch Oct 29 05:00–08:47 UTC are **not** in it. The shipping changelog will differ.
- `2026.10.10-beta.5` could not be verified on npm (404); only the branch commits exist. `2026.10.10-beta.4` remains the published beta.
- GitHub search-API per-day counts for Oct 29 are a **partial day** (measured to ~09:30 UTC) and the API's `created:` filter accepts timestamps but returns window-approximate counts; treat 255 issues / 633 PRs as an order-of-magnitude window figure.
- The npm daily download series returns **0 for Oct 13–15, 19 and 21**, so the weekly 3,114,044 figure is registry-reported, not a clean sum; the +14.4% week-over-week comparison rests on the two `last-week` point queries, one of which was captured on Oct 28.
- ClawStat's `known_issues` list is capped at 60 (`issues_capped: true`), so the tracked set (80) is a floor for this release.
- `clawhub.ai/api/v1/skills` returns no `name`/`downloads` at the top level — figures were extracted from the nested `stats` object.
- The anomixer daily digest only carries a star-count summary line for Oct 28–29; no OpenClaw-specific narrative content was extractable from the page markup for those days.
- Two `web_search` calls and two `web_fetch` calls used (budget: 4 / 2). No GitHub API rate limiting encountered; all unauthenticated calls succeeded.

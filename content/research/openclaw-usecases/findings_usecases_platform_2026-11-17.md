# Findings — Platform (releases, security, tracker velocity, enterprise) — 2026-11-17

**Window:** 2026-11-16T09:28:00Z → 2026-11-17T09:28:00Z
**Session clock:** 2026-11-17 10:11–11:20 UTC (post-window observations labelled explicitly)
**Topic / working dir:** `openclaw-usecases` — `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases`
**Raw artifacts:** `/home/devcon/.openclaw/shared-workspace/research/openclaw-usecases/tmp/2026-11-17/`
**Prior run (read for de-duplication only):** `findings_usecases_platform_2026-11-16.md`

---

## 1. `v2026.11.5` tag created IN-WINDOW — the single biggest platform event of the day

The stable tag `v2026.11.5` was pushed at **2026-11-17T07:23:38Z** by **RomneyDa** (annotated tag, message `OpenClaw 2026.11.5`). That is **2 h 04 min before the window closed** (2026-11-17T09:28:00Z) → **in-window**. The annotated tag object is `0581065e2e2d90607033598345e513b73a48c0ee`, pointing at commit `e13cf15ece9bbd969b7362927c315362c90c97ff`. The GitHub tag page for `v2026.11.5` renders `17 Nov 07:23` and the short SHA `e13cf15`.

Source:
https://api.github.com/repos/openclaw/openclaw/git/tags/0581065e2e2d90607033598345e513b73a48c0ee
https://github.com/openclaw/openclaw/releases/tag/v2026.11.5

## 2. npm `latest` moved to `2026.11.5`, but the publication is POST-WINDOW

npm dist-tags now read `latest = 2026.11.5`, `beta = 2026.11.5-beta.4`, `extended-stable = 2026.9.37`. The `2026.11.5` publish timestamp is **2026-11-17T09:59:33.472Z**, i.e. **31 min 33 s AFTER the window closed** → **post-window**. The registry document `modified` stamp is `2026-11-17T09:59:33.787Z`. No new beta was published inside the window: `2026.11.5-beta.4` was published `2026-11-16T02:41:24.046Z` (pre-window), and `beta` therefore still points at `2026.11.5-beta.4`. `extended-stable` is still `2026.9.37` (published `2026-11-10T20:42:54Z`), so **no extended-stable release shipped in-window**.

Source:
https://registry.npmjs.org/openclaw

## 3. RESOLVED: there is NO GitHub Release object for `v2026.11.5` — the tag exists, the Release does not

This closes yesterday's open question ("present but anomalous pending confirmation of `draft`/`prerelease`/`published_at`"). With the GitHub core quota reset (60/60 available at 2026-11-17 10:16:42Z):

- `GET /repos/openclaw/openclaw/releases/tags/v2026.11.5` → **`404` `{"message": "Not Found", "documentation_url": "https://docs.github.com/rest/releases/releases#get-a-release-by-tag-name", "status": "404"}`** → no release object, and (unauthenticated) no draft visible either.
- `GET /releases/latest` → still **`v2026.11.4`**, `draft=false`, `prerelease=false`, `created_at 2026-11-16T01:24:26Z`, `published_at 2026-11-16T04:17:42Z`, `target_commitish main`.
- `GET /releases` (8 items) newest first: `v2026.11.4`, `v2026.11.5-beta.4`, `v2026.11.5-beta.3`, `v2026.11.5-beta.2`, `v2026.11.3`, `v2026.9.37` — **no `v2026.11.5`**.
- The HTML release list (`https://github.com/openclaw/openclaw/releases`) contains `v2026.11.4` and the betas, **not `v2026.11.5`**.
- `https://github.com/openclaw/openclaw/releases/tag/v2026.11.5` returns **HTTP 200** but renders the *tag* page, not a release page: `<title>Release v2026.11.5 · openclaw/openclaw · GitHub</title>`, tag message `OpenClaw 2026.11.5`, `Assets 2` (source archives only), `e13cf15`, `17 Nov 07:23`. There is **no changelog body**, no `release-entry`, no `Published`/`Pre-release` marker.
- `https://github.com/openclaw/openclaw/releases.atom` **does** contain a `v2026.11.5` entry (feed `<updated>2026-11-17T07:23:38Z</updated>`, body `<p>OpenClaw 2026.11.5</p>`, author RomneyDa) — this is GitHub's **annotated-tag** feed entry, not proof of a Release object.

**Conclusion:** npm `latest` shipped `2026.11.5` roughly 1.5 h before GitHub had any Release object for it; the release notes for `2026.11.5` do not exist on the GitHub Releases page. The `releases.atom` entry — the source of yesterday's "release present" impression — is a tag echo.

Source:
https://api.github.com/repos/openclaw/openclaw/releases/tags/v2026.11.5
https://api.github.com/repos/openclaw/openclaw/releases/latest
https://github.com/openclaw/openclaw/releases.atom

## 4. DECISIVE (new): the published npm tarball `openclaw-2026.11.5` provably lacks the blind-SSRF fix

Yesterday this was inferred from repo source files. Today the **actual published artifact** was fetched and inspected:

- `https://registry.npmjs.org/openclaw/-/openclaw-2026.11.5.tgz` → **19,517 files** (matches registry `dist.fileCount`), `unpackedSize 304,799,930`, `shasum f639a785e00e0b3e26059cdef8aba9033840f471`, `integrity sha512-mqPlsGLOe8NS85BfP1vWW9YVwFXchsV75QTkEbyR4csylORxts+fmfZp9+qbD7aPbXQIctyjRk+CPL91fDvxBA==`, `package/package.json` → `name openclaw`, `version 2026.11.5`.
- In `package/dist/pw-tools-core.interactions.navigation-jS-JgkuJ.mjs`: `standingSsrfPolicy` = **0**, `createStandingNavigationPolicy` = **0**, `installNavigationAuthorityFence` = **3**, `BlockedByClient` = **0**, `ssrfPolicy` = **17**.

**The P0 blind-SSRF fix `PR #198452` (commit `c8caba299e65a7b98bb14a4c5731376658d8c84b`) is NOT in the artifact npm `latest` now serves** — the `installNavigationAuthorityFence` machinery ships, but the *standing* SSRF policy (the actual fix) does not.

Source:
https://registry.npmjs.org/openclaw/-/openclaw-2026.11.5.tgz
https://registry.npmjs.org/openclaw

## 5. Browser-extension file evidence: `v2026.11.5` has the fence but not the standing policy

`extensions/browser/src/browser/` file counts: **main 505** (tree truncated at 67,629 entries → lower bound), **`v2026.11.5` 481**, **`v2026.11.4` 465**.

| file | main | `v2026.11.5` | `v2026.11.4` |
|---|---|---|---|
| `navigation-policy.ts` | present | **present** | absent |
| `pw-session-navigation-fence.ts` | present | **present** | absent |
| `pw-session-navigation-standing.ts` | present | **ABSENT (404)** | absent |
| `pw-session-navigation.ts` | present | present | present |
| `navigation-guard.ts` | present | present | present |

Symbol counts: `navigation-guard.ts` `standingSsrfPolicy` = 3 (main) / 3 (`v2026.11.4`) / 3 (`extended-stable/2026.10.33`) / **0** (`v2026.11.5`); `navigation-policy.ts` = 1 (main) / **0** (`v2026.11.5`); `pw-session-navigation.ts` = 3 (`v2026.11.4` and `extended-stable/2026.10.33`, byte-identical, md5 prefix `1f250d7f`) / **0** (`v2026.11.5`); `pw-session-navigation-fence.ts` 27,586 bytes (main) / 21,939 (`v2026.11.5`), `BlockedByClient` 1 / **0**.

Source:
https://api.github.com/repos/openclaw/openclaw/contents/extensions/browser/src/browser?ref=v2026.11.5
https://api.github.com/repos/openclaw/openclaw/git/trees/v2026.11.5?recursive=1

## 6. The release line is STILL a divergent fork of `main` — three independent compares

- `c8caba299e65a7b98bb14a4c5731376658d8c84b...v2026.11.5` → **diverged**, ahead **537**, behind **6,695** (fix commit is *not* an ancestor).
- `e8ff306f74133486c302f9358296fb43ecb52cd3...v2026.11.5` → **diverged**, ahead **537**, behind **5,927** (cron fallback fix `PR #196539` is *not* an ancestor).
- `main...v2026.11.5` → **diverged**, ahead **537**, behind **7,427**.

Source:
https://api.github.com/repos/openclaw/openclaw/compare/c8caba299e65a7b98bb14a4c5731376658d8c84b...v2026.11.5
https://api.github.com/repos/openclaw/openclaw/compare/main...v2026.11.5

## 7. Security-fix presence matrix for `v2026.11.5` (file-level, not ancestry-level)

| Fix | PR / commit | In `v2026.11.5`? | Direct evidence |
|---|---|---|---|
| Blind SSRF (standing policy) | `#198452` / `c8caba299e` | **NO** | `pw-session-navigation-standing.ts` absent; `standingSsrfPolicy` = 0 in tag file, in npm `dist` bundle, and in `navigation-policy.ts` |
| Cron provider fallback | `#196539` / `e8ff306f7413` | **NO** | compare diverged (behind 5,927); `src/cron/inference-binding.ts` in `v2026.11.5` lacks the `provider` parameter present in main |
| Incognito first-turn | `#183800` / `34e60768` | **NO** | `src/gateway/server-methods/session-create-initial-turn.ts`: `runWithoutSessionActorStorage` = 2 (main) vs **0** (`v2026.11.5`) |
| Dreaming `includeContentRevision` | `#180692` | **YES** | `extensions/memory-core/src/dreaming-phases.ts`: `includeContentRevision: false` = 1 (main) = 1 (`v2026.11.5`), 0 (`v2026.11.4`) |
| One interception session per tab | `#198658` | not verified in-window | — |

The `2026.11.5` changelog (`ch_2026.11.5.md`, 417 lines) mentions **#180692** (lines 53 and 75) and contains **no mention of `#198452`, `#196539` or `#183800`** — consistent with the file evidence.

Source:
https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.5/CHANGELOG.md
https://api.github.com/repos/openclaw/openclaw/pulls/198452

## 8. Tracker velocity — activity cooled on every axis

| metric | 2026-11-17 | 2026-11-16 | Δ |
|---|---|---|---|
| stars | **394,617** (10:18Z) | 394,555 | **+62** |
| open issues | **8,226** | 8,281 | −55 |
| forks | **82,911** | 82,910 | +1 |
| subscribers | **1,687** | 1,687 | 0 |
| new issues (in-window) | **112** | 121 | −9 |
| new PRs (in-window) | **363** | 388 | −25 |
| merged PRs (in-window) | **295** | 304 | −9 |
| commits (in-window) | **293** | 307 | −14 |

`pushed_at` on `openclaw/openclaw` = `2026-11-17T10:17:21Z` (post-window push activity continued).

Source:
https://api.github.com/repos/openclaw/openclaw
https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-16T09:28:00Z..2026-11-17T09:28:00Z

## 9. P0 — 5 open/closed in-window (yesterday: 7); titles

1. **#200340** (open, created 2026-11-17T01:14:05Z) — `[Bug]: macOS app's first message fails with false "host is low on memory" because Bun's process.availableMemory…`
2. **#200289** (open, 2026-11-16T22:54:16Z) — `[Bug]: 2026.11.3 → 2026.11.4 update takes hours, fails with SQLite lock during Gateway handoff, requires SSH r…`
3. **#200244** (closed, 2026-11-16T20:04:51Z) — `[Bug]: OpenClaw macOS onboarding crashes when detached npm inherits /dev/tty`
4. **#200240** (open, 2026-11-16T20:00:27Z) — `Update failure: requested (2026.11.4)`
5. **#200207** (open, 2026-11-16T18:27:09Z) — `Update failure: managed-service-update-handoff (2026.10.4)`

Composition note: **2 of 5** are auto-filed update-failure reports (`#200240`, `#200207`) — yesterday it was 6 of 7, so the *machine-generated* share fell sharply. `#200340` is a new class of false-positive resource error (Bun `process.availableMemory` on macOS), `#200289` is an update-handoff/SQLite-lock blocker, `#200244` was already closed in-window.

Source:
https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-16T09:28:00Z..2026-11-17T09:28:00Z+label:P0

## 10. P1 — 15 in-window (yesterday: 14); titles

`#200475` follow-up in the same chat reuses a closing claude-cli runtime and refuses the first tool as a user decline (open) · `#200357` Git install update refuses targets after `#198661`: "Declaration input escapes checkout" in preflight-build (open) · `#200346` Control UI dictation discards long recordings on screen lock / blur (closed) · `#200336` subagent completion held 30 min for an idle requester, then discarded (open) · `#200309` `sessions.create` fired from an authenticated Control UI client without user action resets the main session (open) · `#200307` unrelated same-agent session creation aborts cron conditions and can disable watchers (closed) · `#200281` memory-lancedb recall and forget work in group chats although the memory provider is owner-private (open) · `#200271` startup migrates completed retained-agent stores and crashes with vec0 error (closed) · `#200227` memory-core native watcher pegs the Gateway main thread (~1 core, 3.4 GB) on a large extraPaths tree (~100k) (open) · `#200210` incognito first-turn fix (`PR #183800` / commit `34e60768`, merged 2026-11-05) is absent from stable releases 2026.11.3 and 2026.11.4 (open) · `#200189` CLI backend "Native tool authority capture is no longer active" causes recurring tool-call/turn failures (closed) · `#200148` 2026.11.3 macOS in-process `/restart` (SIGUSR2) hangs forever after failed gateway close (open) · `#200129` sessions: pending input stuck in interrupted retries forever via `CONTINUATION_PROMPT` (closed) · `#200116` cron `agentTurn` into a session target fails in series when preflight compaction outlasts the 60 s setup (closed) · `#200096` regression in 2026.11.4: reused claude-cli live session fails every other turn with "Native tool author…" (closed).

Notable new P1 families: **claude-cli native-tool-authority regressions** (`#200475`, `#200189`, `#200096` — 3 of 15) and the **Git-install preflight refusal** (`#200357`, after `#198661`).

Source:
https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-16T09:28:00Z..2026-11-17T09:28:00Z+label:P1

## 11. P2 — 72 in-window (yesterday: 66)

Notable P2s include `#200248` (2026.11.3/2026.11.4 lack `#180692` — Dreaming light phase fails nightly with "worker task timed out"), `#200361` (trusted-proxy auth behind Cloudflare Access trusts identity headers without verifying the Access JWT — security-relevant), `#200200` (pnpm-workspace override pins `@hono/node-server` below 2.1.6), `#200224` (2026.11.5 beta update refuses retired `agents.defaults.heartbeat`), `#200351` (`gateway status` takes 16–22 s on Windows 11 — `spawnSync → tasklist.exe`).

Source:
https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-16T09:28:00Z..2026-11-17T09:28:00Z+label:P2

## 12. Tracked issue states — no movement on the four watch-list items

| issue | state | labels | created | last update | comments |
|---|---|---|---|---|---|
| **#196925** | open | `P2`, `impact:security`, `clawsweeper:needs-security-review`, `clawsweeper:source-repro` | 2026-11-11T00:14:09Z | 2026-11-11T00:20:49Z | 1 |
| **#199928** | open | `P1`, `impact:auth-provider`, `clawsweeper:linked-pr-open` | 2026-11-16T03:31:39Z | 2026-11-16T05:32:16Z | 2 |
| **#199932** | open | `P1`, `impact:message-loss`, `clawsweeper:needs-maintainer-review` | 2026-11-16T03:39:21Z | 2026-11-16T03:52:27Z | 1 |
| **#162448** | open | `P2`, `regression`, `clawsweeper:needs-info` | 2026-10-01T05:52:48Z | 2026-10-25T13:03:19Z | 6 |

`#196925` ("Stable 2026.11.2/11.3 (and release/2026.11.4) ship dompurify 3.4.16 under GHSA-cg2g-xh64-v4q7") is **still open and untouched since 2026-11-11** — no fix PR, no maintainer reply; `#199932` and `#199928` are unchanged.

Source:
https://api.github.com/repos/openclaw/openclaw/issues/196925
https://api.github.com/repos/openclaw/openclaw/issues/199928
https://api.github.com/repos/openclaw/openclaw/issues/199932
https://api.github.com/repos/openclaw/openclaw/issues/162448

## 13. `dompurify` — RESOLVED: 3.4.17 everywhere; yesterday's "3.4.16" reading was wrong

Live re-fetch of `pnpm-lock.yaml` on the **release branch** (not just the tag):

| ref | `dompurify` | `undici` |
|---|---|---|
| `v2026.11.4` (tag) | **3.4.17** (exact pin, integrity `sha512-B/pSlYVHQ58kqISD/yDjuJ1yfzI34m1gF4lAod2bwSRhiN4K5Cl3H8Af7hqB2PmTL911tdEudnnXn5FnhRoz0w==`) | 8.12.2 |
| `release/2026.11.4` (branch, re-fetched 2026-11-17 11:19Z) | **3.4.17** | 8.12.2 |
| `v2026.11.5` | **3.4.17** | 8.12.3 |
| `main` | **3.4.17** | 8.12.4 |

So the prior finding "`release/2026.11.4 = 3.4.16`" is **superseded**; the current release branch and the `v2026.11.4` tag both resolve `dompurify@3.4.17`. Issue `#196925`'s "3.4.16" claim therefore describes an older lock state (2026.11.2/11.3) or a stale observation, and the issue was never updated. **Nuance that matters:** the core npm tarball does **not** bundle `dompurify` at all — `package/node_modules/dompurify/` is absent and there is **no `DOMPurify` symbol in any of the 9,543 `package/dist/*.mjs` files**. `dompurify` is pinned by two *workspace* packages, `extensions/knowledge` and `packages/mermaid-renderer` (both `specifier: 3.4.17`, exact). npm consumers of the core package therefore resolve `dompurify` transitively at install time, so the effective version for an npm install is resolver-dependent, not pinned by the published tarball.

Source:
https://raw.githubusercontent.com/openclaw/openclaw/release/2026.11.4/pnpm-lock.yaml
https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.5/pnpm-lock.yaml
https://raw.githubusercontent.com/openclaw/openclaw/main/pnpm-lock.yaml

## 14. `extended-stable/2026.10.33` — still "in preparation", not published

The branch carries a finished `2026.10.33` changelog section (`## 2026.10.33`, "This extended-stable release brings cumulative Gateway and core-plugin improvements since 2026.9.37…") listing maintenance fixes `#200063`, `#200208`, `#200247`, `#200260`, `#190065` and the security highlight "Code Mode: retain store/load values across cells… (#164086, #164833)". The `releases.atom` feed shows publish-workflow artefacts `release-publish/054fd9788bc0-1794898955` (2026-11-17T03:23:11Z) and `release-publish/b4fc05346afb-1794885004` — *"fix(release): honor 2026.10.33 performance waiver (#200375)"* (2026-11-17T03:06:26Z). However **npm `extended-stable` still points at `2026.9.37`** and no `2026.10.33` tag/release was observed → the extended-stable line is being prepared, not shipped. Related branch-PR set observed: `#200277`, `#200278`, `#200302`, `#200375`, `#200385`, `#200201`, `#200225`, `#200246`, `#196315`.

Source:
https://registry.npmjs.org/openclaw
https://github.com/openclaw/openclaw/releases.atom

## 15. Enterprise — FUNCTIONAL PRs RETURNED after yesterday's fixture-only wave

`openclaw/openclaw-enterprise`: stars **474** (unchanged vs yesterday's 474), open issues **406** (yesterday 405, +1), forks 120, subscribers 4, `pushed_at 2026-11-17T10:17:33Z`.

Merged PRs by merge time inside the window from the most-recently-updated page: **96**. Of the PRs *created* in-window, **85** were merged. Functional (fix/feat/build/refactor) merged PRs — **the mix rotated back from "Type the … test fixture" to real runtime work**:

- **#6372** (merged 2026-11-17T08:57:18Z) — `fix(upgrade): correct the manual gateway lock recovery and the database refusal trailer`
- **#6360** (2026-11-17T07:12:35Z) — `fix(runtime): release a stopped starter's gateway locks in its own container`
- **#6363** (2026-11-17T05:26:57Z) — `fix(upgrade): reach dev-up postgres from preflight pods and name what failed`
- **#6347** (2026-11-17T02:00:19Z) — `fix(drivers): close a refused external protected registration at startup`
- **#6343** (2026-11-17T08:52:55Z) — `Handle stale OpenShell sandbox policy applications safely`
- **#5475** (2026-11-17T03:20:24Z) — `build(runtime): carry openclaw#197151 so chat-only members start a conversation`
- **#6241** (2026-11-16T23:00:30Z) — `Package Gateway planned-completion support for bounded replacement`
- **#5385** (2026-11-16T23:00:06Z) — `feat: share one durable predecessor stop boundary`
- **#6238** (2026-11-16T21:17:48Z) — `fix(runtime): preserve final delivery after long native turns`
- **#6373** (2026-11-17T09:29:59Z, just after window close) — `Deduplicate resource error response schemas`

Non-functional in-window: `#6274` `chore(deps): bump the workspace-minor-patch group with 6 updates` (2026-11-16T12:28:11Z), plus the continued "Type the …" / "Share …" test-migration wave.

Source:
https://api.github.com/repos/openclaw/openclaw-enterprise
https://api.github.com/repos/openclaw/openclaw-enterprise/pulls?state=closed&sort=updated&direction=desc&per_page=100

## 16. npm demand — week-over-week still UP, but the last two days are reporting-lag zeros

Daily downloads (`https://api.npmjs.org/downloads/range/2026-11-01:2026-11-17/openclaw`):
`11-01 318,468` (Sun) · `11-02 321,275` (Mon) · `11-03 393,121` (Tue) · `11-04 400,586` (Wed) · `11-05 369,131` (Thu) · `11-06 504,091` (Fri) · `11-07 493,523` (Sat) · `11-08 403,698` (Sun) · `11-09 349,424` (Mon) · `11-10 427,925` (Tue) · `11-11 429,437` (Wed) · `11-12 495,873` (Thu) · `11-13 478,823` (Fri) · `11-14 471,274` (Sat) · `11-15 368,783` (Sun) · **`11-16 0`** (Mon) · **`11-17 0`** (Tue).

**Aligned comparisons (equal-length, weekday-matched):**
- Tue–Sun, `11-10..11-15` = **2,672,115** vs `11-03..11-08` = **2,564,150** → **+4.21 %**
- Mon–Sun, `11-09..11-15` = **3,021,539** vs `11-02..11-08` = **2,885,425** → **+4.72 %**

The `11-16`/`11-17` zeros are **reporting lag**, not demand collapse; an unequal-window comparison that includes them yields a misleading −8.29 %.

Source:
https://api.npmjs.org/downloads/range/2026-11-01:2026-11-17/openclaw

## 17. Official surfaces — byte-identical for the fifth consecutive run

| surface | md5 (2026-11-17 11:17Z) | md5 (2026-11-16 10:32Z) | verdict |
|---|---|---|---|
| `https://openclaw.ai/showcase` | `72af42550b4aeadc1aece19bca286ebe` | `72af42550b4aeadc1aece19bca286ebe` | unchanged |
| `https://openclaw.ai/press` | `b1659d13b400a8f02255b11cc24c14b0` | `b1659d13b400a8f02255b11cc24c14b0` | unchanged |
| `https://openclaw.ai/rss.xml` | `d840797cc7691f44c63357dab085a79a` | `d840797cc7691f44c63357dab085a79a` | unchanged |

RSS still has **26 items**, newest = **"OpenClaw is coming to Shenzhen"**, `Fri, 13 Nov 2026 00:00:00 GMT`; second "Use new models in OpenClaw without an update" (06 Nov); third "Shattering Silos with OpenClaw Multiplayer" (05 Nov). **No official announcement of `2026.11.5` exists on any official surface.**

Source:
https://openclaw.ai/rss.xml
https://openclaw.ai/showcase
https://openclaw.ai/press

## 18. ClawStat still assesses `2026.11.4` — and its flip condition would NOT be met by `2026.11.5`

`https://clawstat.us/latest.json` → `schema_version 1`, `app_version 1.3.10`, `assessed_at 2026-11-17T05:08:50.340584+00:00`, `version 2026.11.4`, `recommendation "✅"`, `status.key "update"`, `confidence "medium"`, headline "Fine for most setups; isolated update-handoff, session-reset and missing-fix reports exist, but none is widespread or independently confirmed." The assessment predates the `2026.11.5` publish (`09:59:33Z`), and its flip condition requires `v2026.11.5` to contain **both** `#183800` and `#180692` — only `#180692` is present → ClawStat should stay on `2026.11.4` / "✅" rather than advance to `2026.11.5`.

Source:
https://clawstat.us/latest.json

---

## Negatives — what explicitly did NOT happen in this window

- **No new beta release** published in-window (`beta` = `2026.11.5-beta.4`, published 2026-11-16T02:41:24.046Z, pre-window).
- **No extended-stable npm release** — `extended-stable` = `2026.9.37`; `2026.10.33` is still not on npm.
- **No GitHub Release object for `v2026.11.5`** — `/releases/tags/v2026.11.5` = 404, `/releases/latest` = `v2026.11.4`, and the release HTML list has no `v2026.11.5`.
- **No official-surface change** on showcase / press / RSS (md5-identical, fifth consecutive run); **no official `2026.11.5` announcement**.
- **No tracker acceleration**: new issues 121→112, new PRs 388→363, merged PRs 304→295, commits 307→293.
- **No P0 count increase** (7→5) and no P0 was auto-filed as "already-fixed/duplicate".
- **No movement on the four watch-list issues** `#196925`, `#199928`, `#199932`, `#162448` — all still `open`, `#196925` untouched since 2026-11-11.
- **No new enterprise functional-PR drought** — functional PRs returned (yesterday's "Type the … test fixture" wave did not continue as the only content).
- **No `dompurify` downgrade or upgrade** anywhere: `3.4.17` on `v2026.11.4`, `release/2026.11.4`, `v2026.11.5` and `main`.
- **No ClawStat re-assessment** of `2026.11.5` (still `2026.11.4`).
- **No in-window npm `latest` publish** — the `2026.11.5` publish is post-window.
- **No sign that the blind-SSRF fix, the cron fallback fix or the incognito first-turn fix reached any published artifact.**

---

## Caveats / data gaps

1. **npm tarball fetch caveat (resolved today):** an earlier direct fetch of `https://registry.npmjs.org/openclaw/-/openclaw-2026.11.5.tgz` returned the 21-byte body `{"error":"Not found"}` (saved as `oc3.tgz`). Today the same URL returned the real artifact (117,357,557 bytes, 19,517 entries, matching registry `dist.fileCount` and `unpackedSize`). The earlier failure was transient/registry-side, **not** evidence that the package was missing.
2. **GitHub core API quota:** 60/60 unauthenticated requests were consumed at ~11:20Z (reset epoch `1794911487`; a later reset epoch observed as `1794914202`). Requests issued after exhaustion returned `403 {"message":"API rate limit exceeded for 77.11.108.247. …"}`. Consequently **`git/ref/tags/2026.10.33` could not be queried directly** — the "no `2026.10.33` tag" claim rests on the npm dist-tag and the absence of any `2026.10.33` entry in `releases.atom` / the releases listing, not on a direct tag ref 404.
3. **Tree truncation:** the recursive tree for `main` returned `truncated: true` at 67,629 entries, so "main has 67,629 files / 505 browser files" is a **lower bound**; `v2026.11.5` (63,857) and `v2026.11.4` (58,995) are complete.
4. **Search-API counts:** in-window counts come from the GitHub *search* API `total_count` (issues 112, PRs 363, merged 295, commits 293); `items` were capped at 100, but P0 (5), P1 (15) and P2 (72) are below the cap, so those lists are complete.
5. **Enterprise counts are under-measured:** the enterprise PR listing used `sort=updated&direction=desc&per_page=100`, so "87 created in-window / 96 merged in-window" are **lower bounds** for the true in-window totals (the page's newest creation is `2026-11-17T09:13:10Z`). Yesterday's enterprise figures (116 new / 115 merged) came from the search API — the two methods are not directly comparable.
6. **npm downloads reporting lag:** `2026-11-16` and `2026-11-17` returned `0`; only the aligned windows `11-10..11-15` vs `11-03..11-08` and `11-09..11-15` vs `11-02..11-08` are used for trend claims.
7. **Ancestry vs content:** all "fix present/absent" verdicts rest on **shipped-file/symbol evidence** (compare-API ancestry is secondary), because cherry-picks alter SHAs and the release branch is a divergent fork.
8. **CVE cross-references not re-verified in-window:** `CVE-2026-43527` (`https://www.sentinelone.com/vulnerability-database/cve-2026-43527/`) and `CVE-2026-42439` were carried from the prior run, not re-fetched; no new CVE for `2026.11.5` was seen in any artifact inspected.
9. **ClawStat timing:** `assessed_at 2026-11-17T05:08:50Z` precedes the tag (07:23:38Z) and the npm publish (09:59:33Z); a later assessment may change the verdict.
10. **Official-surface md5s** compare against captures taken 2026-11-16 10:32Z in the same working directory, not a pristine upstream snapshot.

---

## Verification status

**Directly attested by an API/HTTP response (highest confidence):**
- npm dist-tags and publish timestamps, including `latest = 2026.11.5` @ `2026-11-17T09:59:33.472Z` (registry.npmjs.org).
- npm tarball contents: 19,517 files, `version 2026.11.5`, `standingSsrfPolicy` = 0 / `createStandingNavigationPolicy` = 0 / `installNavigationAuthorityFence` = 3 / `BlockedByClient` = 0 / `ssrfPolicy` = 17 in `package/dist/pw-tools-core.interactions.navigation-jS-JgkuJ.mjs`; no `node_modules/dompurify`, no `DOMPurify` symbol across 9,543 dist `.mjs` files.
- GitHub REST: `releases/tags/v2026.11.5` = 404; `releases/latest` = `v2026.11.4` (draft false, prerelease false, published `2026-11-16T04:17:42Z`); the 8-item releases listing; three compare results (diverged / ahead 537 / behind 6,695 · 5,927 · 7,427); repo stats (stars 394,617, open issues 8,226, forks 82,911, subscribers 1,687, pushed_at `2026-11-17T10:17:21Z`); enterprise repo stats and the 100-PR merged listing; issue states for `#196925`, `#199928`, `#199932`, `#162448`, `#200207`, `#200210`, `#200248`.
- Git tag object `0581065e2e2d90607033598345e513b73a48c0ee` → commit `e13cf15ece9bbd969b7362927c315362c90c97ff`, tagger RomneyDa, `2026-11-17T07:23:38Z`.
- `pnpm-lock.yaml` fetched live for `release/2026.11.4`, `v2026.11.5` and `main` → `dompurify 3.4.17`, `undici 8.12.2 / 8.12.3 / 8.12.4`.
- GitHub HTML: `/releases/tag/v2026.11.5` renders the tag page (no release body, `Assets 2`); `/releases` list has no `v2026.11.5`; `releases.atom` first entry `v2026.11.5` @ `2026-11-17T07:23:38Z`.
- npm downloads range endpoint (26 daily rows 2026-11-01 → 2026-11-17) and the aligned-window arithmetic.
- openclaw.ai showcase / press / rss.xml md5s and the RSS head item.

**Reconstructed from listings (secondary confidence):**
- The "no GitHub Release object for `v2026.11.5`" inference (404 + `/releases/latest` + HTML list + tag-page rendering + atom entry) — each individual signal is attested, but the conclusion that the atom entry is an annotated-tag echo rather than a Release is an inference.
- Exact in-window P0/P1/P2 **title lists** — complete below the 100-item search cap, but the *boundary* of the window (issues created exactly at 09:28:00Z) is API-rounded.
- Enterprise in-window new-PR (87) and merged-PR (96) counts — lower bounds from a 100-item `updated`-sorted page.
- `main` file counts (67,629 / 505) — truncated tree, lower bound.
- "2026.10.33 not published" — inferred from npm dist-tag + release listings, not a direct tag-ref query (quota).

**Carried over, not re-verified today:** `CVE-2026-43527`, `CVE-2026-42439`; the `extended-stable/2026.10.33` changelog-vs-code discrepancy flagged in the prior run (still open: the `2026.10.33` changelog advertises security highlights while `pw-session-navigation-standing.ts` is absent from that branch).

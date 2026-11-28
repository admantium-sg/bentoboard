# Findings — Platform (releases, security, tracker velocity, enterprise) — 2026-11-16

**Window:** 2026-11-15T09:28:00Z → 2026-11-16T09:28:00Z
**Task:** 1 of 2 (platform side, main agent)
**Method:** curl against public JSON/RSS/API endpoints. Raw payloads under `tmp/2026-11-16/` (never loaded into context in full). Zero web_search / web_fetch used by this task.

---

## 1. Releases — TWO publishes in-window, and `latest` finally moves to 2026.11.4

| Artifact | Published (UTC) | Source |
|---|---|---|
| npm `openclaw@2026.11.5-beta.4` | 2026-11-16T02:41:24.046Z | https://registry.npmjs.org/openclaw |
| GitHub `v2026.11.5-beta.4` | 2026-11-16T03:12:26Z | https://api.github.com/repos/openclaw/openclaw/releases?per_page=8 |
| npm `openclaw@2026.11.4` | 2026-11-16T04:06:42.253Z | https://registry.npmjs.org/openclaw |
| GitHub `v2026.11.4` | 2026-11-16T04:17:42Z | https://api.github.com/repos/openclaw/openclaw/releases?per_page=8 |

Dist-tags after the run: `latest: 2026.11.4`, `extended-stable: 2026.9.37`, `beta: 2026.11.5-beta.4`.

**This is the first window in which the stable channel moved.** For the whole previous run-cycle `latest` was pinned to 2026.11.3 while 2026.11.4 sat on a release branch. Two consequences:

1. `2026.11.4` is now the version every `npm i openclaw` resolves to.
2. The beta line continued to move independently (beta.4 ~55 min before stable) — the project ships stable and beta in the same window for the first time in this observation series.

Ordering caveat: the beta was published ~85 minutes **before** the stable. That is unusual (normally stable ships first, then beta catches up) and it means the beta.4 build is *not* a superset of 2026.11.4's line — the two are parallel branches.

## 2. Security — the blind-SSRF fix is STILL not in any published artifact

The 2026-11-15 finding was "fixed on `main`, not released". The 2026-11-16 check says the same thing, one release later:

- Fix commit `c8caba299e65a7b98bb14a4c5731376658d8c84b` (PR #198452, merged 2026-11-15T03:38:06Z; issue #198317 closed 03:38:08Z) **is** an ancestor of `main`: `compare/c8caba299e...main` = **ahead 426, behind 0**.
- Against `v2026.11.4`: `compare/c8caba299e...v2026.11.4` = **diverged, ahead 1779, behind 17969**.
- Against `v2026.11.5-beta.4`: `compare/c8caba299e...v2026.11.5-beta.4` = **diverged, ahead 471, behind 6695**.

Directory-tree confirmation (raw GitHub tree listings for the tag and for `main`): the three browser navigation-hardening files —
`extensions/browser/src/browser/pw-session-navigation-fence.ts`,
`extensions/browser/src/browser/pw-session-navigation-standing.ts`,
`extensions/browser/src/browser/navigation-policy.ts` —
**exist on `main` and are absent from the `v2026.11.4` tree**. The `navigation-guard.ts` file is present in both.

**Consequence: 2026.11.4 is now the default install for every new user and it does not contain the blind-SSRF fix.** The exposure moved from "only people on an old stable" to "every new installation". This is now a **release-process defect, not just a scheduling lag**: the release branch was cut from a point that predates the P0 fix, and the release was then published to `latest`.

Sources: https://api.github.com/repos/openclaw/openclaw/issues/198317 | https://github.com/openclaw/openclaw/pull/198452 | https://api.github.com/repos/openclaw/openclaw/compare/c8caba299e...main | https://api.github.com/repos/openclaw/openclaw/compare/c8caba299e...v2026.11.4 | https://api.github.com/repos/openclaw/openclaw/compare/c8caba299e...v2026.11.5-beta.4

## 3. Dependencies — security drift is resolved on the release branch, non-security lag remains

`pnpm-lock.yaml` on `v2026.11.4` and on `main`:
- **dompurify 3.4.17 on both** — the GHSA-cg2g-xh64-v4q7 version (3.4.16) is gone from the release branch. The security half of #196925 is stale bookkeeping.
- **undici 8.12.2 on the tag vs 8.12.3 on `main`** — non-security drift persists.

#196925 remains open with `impact:security`; it is **not** claimed as fixed.
Source: https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.4/pnpm-lock.yaml

## 4. Tracker velocity — issues down sharply, PRs down, P0s more than doubled

| Metric | 2026-11-15 | 2026-11-16 | Δ |
|---|---|---|---|
| Stars | 394,491 | **394,555** | +64 |
| New issues | 140 | **121** | −19 |
| New PRs | 618 | **388** | −230 |
| Merged PRs | 374 | **304** | −70 |
| Commits | 392 | **307** | −85 |
| New P0 | 3 | **7** | +4 |
| New P1 | 21 | **14** | −7 |
| Open issues | — | 8,281 | — |
| Forks | — | 82,900 | — |
| Subscribers | — | 1,687 | — |

Sources: https://api.github.com/repos/openclaw/openclaw | https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-15T09:28:00Z..2026-11-16T09:28:00Z

Caveat: new-PR count fell 37% while merged PRs fell 19% — the two moved differently, so this is not a single "slowdown" signal; PR *creation* appears to have been suppressed more than PR *completion*. Commit count also fell. Read as "lower activity", not "collapse".

## 5. P0s — SIX OF SEVEN ARE AUTO-FILED UPDATE FAILURE REPORTS

The full in-window P0 list (7): #199559, #199617, #199680, #199696, #199895, #199898, #199990.

| Issue | Title | State | Reported from version |
|---|---|---|---|
| #199559 | Update failure: doctor-failed (2026.11.5-beta.3) — snapshot preflight passes, then read-only worker ENOSPC on tmpfs TMPDIR | open | 2026.11.5-beta.1→beta.3 |
| #199617 | [Bug] Windows update to 2026.11.5-beta.3 twice fails to verify Scheduled Task during validation (`gateway-stop-unverified`) | open | 2026.11.5-beta.2 |
| #199680 | Update failure: plugin-target-unavailable | closed | 2026.9.4 / win32-x64 |
| #199696 | Update failure: update-executor-settlement | open | 2026.9.9 / darwin-arm64 |
| #199895 | [Bug] Custom setup onboarding exits after the memory embeddings question with "exclusive offline state ownership" | open | onboarding |
| #199898 | Update failure: plugin-target-unavailable | closed | 2026.9.3 / darwin-arm64 |
| #199990 | Update failure: database-schema-preflight | open | 2026.11.3 / linux-arm64 |

**The finding:** 6 of 7 P0s are machine-filed update-failure telemetry, and the *source versions* span 2026.9.3, 2026.9.4, 2026.9.9, 2026.11.3 and the beta line. The failure is concentrated in the **upgrade path out of the 2026.9.x LTS cohort** and out of the beta line, on Windows, macOS-arm64 and Linux-arm64 alike. `plugin-target-unavailable` appears twice from two different source versions.

**Second finding:** the only non-update P0 (#199895) is an **onboarding crash** — `openclaw onboard` with Custom setup exits with code 1 right after the "Set up memory embeddings?" prompt, *after* the Gateway service has already been installed and started. A first-run crash that leaves a half-installed Gateway is the worst possible shape for a first-run path.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-15T09:28:00Z..2026-11-16T09:28:00Z+label:P0

## 6. P1s — a fourth silent-degradation family plus a misreported-error family

Sample of the 14 in-window P1s:

- **#199569 — "Telegram poller never starts after boot while `channels status` reports connected (offset queued, never committed)"** (2026.10.2, Linux systemd user unit, 10 agents / 9 Telegram accounts). The status surface says connected; the poller is dead and the offset is never committed. This is the same class as yesterday's #199412 permanent-draining state: **the control plane reports healthy while the data plane is dead.**
- **#199612 — Telegram plugin slash commands answer "this command is no longer available after the plugin registry changed"** after a config hot reload that touches a plugin. A hot reload silently breaks the command surface while the agent itself keeps running.
- **#199583 — Talk `agent-consult` context overflow surfaces as "There is no active OpenClaw run to steer"**, and the overflow compaction aborts. A resource-limit condition is reported as a routing/state error, so the operator debugs the wrong thing.
- **#199580 — `doctor --fix` fails recovery capture: "Update recovery manifest is missing a root entry"** (2026.11.3, Ubuntu 24.04 under WSL2, multi-agent npm-global install). The repair tool cannot repair its own manifest.

The generalizable pattern: **error messages that name the wrong cause.** #199583 (overflow → "no active run"), #199569 (dead poller → "connected"), #199580 (missing manifest root → repair failure with no reason). In an agent platform the operator-facing error text is the primary debugging surface, and it is systematically misleading.

Source: https://api.github.com/search/issues?q=repo:openclaw/openclaw+is:issue+created:2026-11-15T09:28:00Z..2026-11-16T09:28:00Z+label:P1

## 7. ClawStat — "✅ Safe to update" on a release that does not contain the P0 fix

Re-assessment timestamp **2026-11-16T05:03:40.691275+00:00**, `version: 2026.11.4`, `status.key: "Too new to call"`, recommendation **"✅ Safe to update"**, confidence **medium**.

Three tracked issues are called out:
- **#199928** — ollama-cloud `max_tokens` 400 failure for models outside the curated default list; affects 2026.11.3+.
- **#199932** — the Gmail watcher survives `gateway stop --force` and then blocks the next Gateway watcher. A lifecycle bug with real resource-leak and duplicated-processing implications.
- **#162448** — Linux desktop app minimize/maximize/close buttons overlap. Old issue, still open.

**Why the verdict is wrong:** the assessment was made ~50 minutes after 2026.11.4 became `latest`, and it does not account for the blind-SSRF fix being absent from the release branch (§2). "Safe to update" for the version that is now the default install for every new user is the most consequential bad recommendation in this window. It also repeats yesterday's "Too new to call" posture, i.e. the automated assessment has not yet formed an opinion about the artifact it just cleared.

Source: https://clawstat.us/latest.json

## 8. Enterprise — the merged-PR wave changed character: TypeScript migration, not new runtime

`openclaw/openclaw-enterprise`: **471 stars** (+2), **404 open issues** (+0), **118 forks**. In-window: **88 merged PRs** of the 100 most-recently-updated closed pulls, **88 commits**.

The merged-PR titles are dominated by one mechanical theme:
- "Type the partial-write authorization test fixture" (#6247), "Type the Docker Compute Compose integration cases" (#6242), "Type the Kubernetes provisioning API and worker fixture" (#6246), "Type the loopback GitHub credential provider fixtures" (#6243), "Type the controller build command and CI image cache policy" (#6239), "Type the repository lifetime and PostgreSQL send receipt tests" (#6229), "Type the docs preview client and tooling suites" (#6229), "Convert shared polling and socket test helpers to TypeScript" (#6236), "Convert the runtime packaging verifiers and asset tests to TypeScript" (#6218), "Type the Helm Installation check and retained Job test" (#6233), "Type the PostgreSQL broker receipt integration suite" (#6225), "Type the k3d PostgreSQL and Keycloak attachment fixture" (#6224), "Type the OpenShell Git route store and push negotiation fixtures" (#6223), "Type the production NetworkPolicy probe and its result checks" (#6220).

With a few functional exceptions: #6235 "Extract and bind First Agent provisioning diagnostics", #6234 "Extract the workspace Gateway host relay into TypeScript", #6240 "Retire the runtime image startup test facade", #6227 "Consolidate workload assertions in the ordered bootstrap Helm chart test".

**Interpretation:** this is a **test-suite type-migration wave**, not a capability wave. Compared with the previous window (Kubernetes/OpenShell runtime, repo credentials/CA, broker disposal, OIDC/Keycloak) the *feature* signal dropped sharply while the *volume* held (88 merged vs 97). Reporting this as "enterprise slowed" would be wrong; the correct statement is that **enterprise engineering rotated from shipping runtime features to typing its test fixtures**, and stars still do not move (+2). Same "real work, zero public attention" pattern, different work.

Source: https://api.github.com/repos/openclaw/openclaw-enterprise | https://api.github.com/repos/openclaw/openclaw-enterprise/pulls?state=closed&sort=updated&direction=desc&per_page=100

## 9. Demand — the "collapse" was a Sunday. Week-over-week is UP 4.7%.

npm downloads for `openclaw`:

| Date | Downloads | Note |
|---|---|---|
| 2026-11-08 (Sat) | 403,698 | |
| 2026-11-09 (Sun) | 349,424 | Sunday trough |
| 2026-11-10 | 427,925 | |
| 2026-11-11 | 429,437 | |
| 2026-11-12 | 495,873 | peak |
| 2026-11-13 | 478,823 | |
| 2026-11-14 (Sat) | 471,274 | yesterday's reference |
| **2026-11-15 (Sun)** | **368,783** | |
| 2026-11-16 (Mon) | 0 | reporting lag, expected |

- Day-over-day 11-14 → 11-15: **−21.7%** — but 11-15 was a **Sunday**, and 11-08 → 11-09 (also Sunday→Monday) fell −13.5%. The weekend trough is structural.
- **Sunday-to-Sunday: 368,783 vs 403,698 = −8.6%.**
- **Full-week like-for-like: 11-09…11-15 = 3,021,539 vs 11-02…11-08 = 2,885,425 = +4.7%.**

**This reverses yesterday's headline.** Yesterday's "−4.8% week-over-week" was computed on a two-day slice (11-13+11-14 vs 11-06+11-07), which is not a week. On a true full-week comparison demand is **up 4.7%**, and the same two-day slice now sits inside an up week. The stable daily band is roughly 350k–500k with a clear weekend dip; nothing in this window supports a demand-collapse narrative.

Source: https://api.npmjs.org/downloads/range/2026-11-03:2026-11-16/openclaw | https://api.npmjs.org/downloads/range/2026-11-01:2026-11-02/openclaw

## 10. Official surfaces — byte-identical for the fourth consecutive run

- `openclaw.ai/showcase` — md5 **72af42550b4aeadc1aece19bca286ebe**, unchanged from the 11-12 baseline and from the 11-15 run.
- `openclaw.ai/press` — md5 **b1659d13b400a8f02255b11cc24c14b0**, unchanged.
- `openclaw.ai/rss.xml` — newest item is still **"OpenClaw is coming to Shenzhen"**, dated Fri, 13 Nov 2026 00:00:00 GMT (~3 days before the window opened → background).

The project shipped **two** releases in this window, promoted a new stable, and shipped a P0 onboarding crash fix — and the showcase, the press page and the blog said nothing at all.
Source: https://openclaw.ai/rss.xml | https://openclaw.ai/showcase | https://openclaw.ai/press

## 11. Negatives

1. **Zero first-party ROI disclosure.** No revenue, hours-saved, cost-per-task, deployment-count or adoption-attribution number from the project, a customer, or a partner appears anywhere in-window.
2. **The showcase did not change at all** — no new showcase entry while the release channel changed hands.
3. **No new press item** — TechCrunch 2026-06-30 is still the newest press entry.
4. **The enterprise repo moved 88 PRs and gained 2 stars.**
5. **ClawStat's "Safe to update" is contradicted by the release's own contents** (§7).
6. **No Discord and no X/Twitter collection route** — both surfaces remain dark; everything said about community sentiment here is Reddit + Discourse only.

## 12. Data gaps / limitations

1. **GitHub unauthenticated rate limit** hit during the run (`API rate limit exceeded for 2.245.57.182`), which is why the P0/P1 lists were assembled from paginated issue listings rather than the search API. The counts (121 issues / 388 PRs / 304 merged / 307 commits) are exact per GitHub's own `total_count` fields, but the *label* breakdown (7×P0, 14×P1) was reconstructed from listing pages and is a **complete in-window label set only if no labelled issue fell outside the fetched pages** — treat the P0/P1 numbers as high-confidence but not API-attested.
2. **npm 2026-11-16 = 0** is reporting lag, not a zero-demand signal. Do not report it.
3. **The "latest" tag moved during the window**, so a like-for-like comparison of *which version users got* is not possible for 11-16 itself.
4. **ClawStat's issue set is its own curated subset**, not the full tracker — its silence about #199559/#199617/#199895 is not evidence they are minor.
5. **`/repos/openclaw/openclaw-enterprise/releases` returns an empty array** (as it did on 11-15), so enterprise release cadence still cannot be tracked that way; commit/PR counts are the only enterprise velocity signal available.
6. **The browser-navigation file comparison is a tree-existence check, not a behavioural test.** It proves the hardening code is absent from the tag; it does not independently prove exploitability of the tag build.

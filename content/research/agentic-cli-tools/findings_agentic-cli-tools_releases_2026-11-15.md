# Releases / Features — 2026-11-15 (window 2026-11-14T01:28Z → 2026-11-15T01:28Z)

**Method:** npm registry time maps, GitHub `releases.atom` + `api.github.com/repos/*/releases`, GitHub advisories API, vendor RSS/changelog pages, OpenRouter catalogue, EDGAR submissions JSON — all via direct `curl` (0 `web_search`, 0 `web_fetch` calls consumed; raw captures in `tmp/2026-11-15/`).
**Fetched:** 2026-11-15T01:29Z → 2026-11-15T02:40Z.

## SUMMARY TABLE

| Tool | In-window movement | Verdict |
|---|---|---|
| Claude Code | **NO release.** dist-tags unchanged: `stable 2.1.311`, `latest 2.1.325`, `next 2.1.325` | quiet |
| Claude Agent SDK | no new version (`latest`/`next` = 0.3.325) | quiet |
| OpenAI Codex CLI | `0.171.0-alpha.5` (npm publish 01:28:44Z — 44 s after window open; GitHub tag 01:25:03Z — 3 min *before*) | borderline |
| Gemini CLI | `gemini-cli-core` `staging-tmp` **0.70.0-nightly.20261115.g4ed06ed0d** @ 01:19:47Z; stable still 0.68.0 | nightly only |
| GitHub Copilot CLI | **stable unchanged** (1.0.112, published 11-13T23:59Z = out of window); one `unstable` build 1.0.106-8.unstable.r43566476370.g869eef3 @ 08:15:57Z | unstable only |
| goose | **v1.59.1 @ 06:50:12Z** (was v1.59.0) | **REAL RELEASE** |
| Zed | nightly + collab-staging (no stable) | nightly only |
| Crush | `nightly` tag @ 2026-11-15T00:46:04Z, body = cosign/checksum boilerplate only | no features |
| Amp | 6 npm builds in-window (latest 0.0.1794700858-g0c3541 @ 00:27:01Z) | builds only |
| opencode | **NO release** (v2.3.0 was 11-13T08:55Z = prior window) | quiet |
| OpenHands / Cline / Kilo / aider / Crush stable | none | quiet |
| Cursor | changelog **STILL frozen at Nov 6**; but a **Nov 13 blog post** (security-incident update) exists that the prior cycle missed | correction |
| Conductor | **0.94.2 "Conductor is back" (Nov 13)** — prior cycle reported the wind-down as standing. It is not. | **correction** |
| Anthropic | no post in-window; newest is **Nov 13** "Building strong safety evaluations" (missed by prior cycle) | gap-fill |
| OpenAI news RSS / GitHub changelog | **zero in-window entries** | negatives |
| SEC EDGAR (Anthropic PBC) | **zero filings on/after 2026-11-14** (latest = 5× FWP on 2026-11-12) | negative |

---

## Claude Code (anthropics/claude-code) — NO RELEASE IN-WINDOW (fetched 2026-11-15T02:30Z)

### No Claude Code release after 2.1.325
- Detail: The npm time map for `@anthropic-ai/claude-code` contains **no version published between 2026-11-14T01:28:00Z and 2026-11-15T01:28:00Z**. The newest version in the registry remains **2.1.325** (published 2026-11-13T20:07:25.823Z — prior window). The GitHub `releases.atom` feed's newest entry is likewise `v2.1.325` @ 2026-11-13T20:40:01Z. `CHANGELOG.md` on `main` still opens with `## 2.1.325`; the next heading down is `## 2.1.323` (i.e. **2.1.324 remains undocumented** in both the changelog and the releases list — unchanged from the prior cycle).
- Version / timestamp: latest = 2.1.325 @ 2026-11-13T20:07:25.823Z (npm) / v2.1.325 @ 2026-11-13T20:40:01Z (GitHub)
- Source: https://registry.npmjs.org/@anthropic-ai/claude-code · https://github.com/anthropics/claude-code/releases.atom · https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

### dist-tags — exactly as the prior cycle recorded them
- Detail: `stable: 2.1.311` · `latest: 2.1.325` · `next: 2.1.325`. **The stable channel is still 14 patch versions behind `latest`**, and `latest` == `next` == `2.1.325`. No tag movement in-window.
- Version / timestamp: observed 2026-11-15T02:30Z
- Source: https://registry.npmjs.org/@anthropic-ai/claude-code

### No advisory acknowledges the zstd fix; no GHSA for CVE-2026-88968
- Detail: `https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code&per_page=100` returns **30 advisories — 24 high, 4 medium, 2 low** (third consecutive cycle with the same 30/24/4/2 split, confirming the corrected figure is stable). Newest `published_at` is still **2026-11-09T22:42:03Z — GHSA-5xjx-9qx6-jcrv / CVE-2026-88968** (TOCTOU race in Edit tool). There is **no advisory naming the 2.1.325 zstd-decode fix**, and **no release note in any channel acknowledges CVE-2026-88968 / GHSA-5xjx-9qx6-jcrv**. The zstd fix has therefore earned **no GHSA**, matching the 2.1.323 pattern.
- Version / timestamp: observed 2026-11-15T02:30Z
- Source: https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code&per_page=100

### Code Mode — still opt-in, still terminal-only; the doc page still resolves
- Detail: `https://code.claude.com/docs/en/code-mode` returns **HTTP 200** (unchanged from the prior cycle's finding). The page text is materially identical: *"Code Mode is experimental and off by default. It may change or be removed in any release."* Requirement lines still read **v2.1.323 or later, on either release channel**; enablement is still `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` (ignored in project settings files); the limitation list still says *"Resuming: you can resume a Code Mode session only in the terminal"* and *"auto mode's classifier reviews the code, not each tool call"*. **No change** — Code Mode remains terminal-only, off-by-default, and off the `stable` channel (stable = 2.1.311, which is below the stated 2.1.323 minimum, so **stable-channel users still cannot enable it at all**).
- Version / timestamp: observed 2026-11-15T02:35Z
- Source: https://code.claude.com/docs/en/code-mode

### 2.1.325's sandbox-permission change IS now documented by the vendor
- Detail: The sandboxing doc (`https://code.claude.com/docs/en/sandboxing`, HTTP 200) explicitly names `sandbox.autoAllowBashIfSandboxed` in three places: (a) as a repository-supplied setting that a repo can set but managed settings can override; (b) as one of the settings that make `/sandbox` refuse to open its local panel with *"Sandbox settings are overridden by a higher-priority configuration"*; (c) in the setup recipe — *"{ "sandbox": { "enabled": true } } … For auto-allow mode, also set sandbox.autoAllowBashIfSandboxed to true"*. The doc also describes the two modes that the 2.1.325 change created: **"Auto-allow runs sandboxed commands without prompting, and regular permissions keeps the regular permission prompts even when commands are sandboxed."** So the behaviour change from 2.1.325 is now **documented vendor behaviour**, not just a release-note line: the default post-2.1.325 posture is *regular permissions* (prompts), and `autoAllowBashIfSandboxed: true` is the opt-out. The page also still states *"The sandbox is off by default"* (the sandbox itself, not the permission mode).
- Version / timestamp: observed 2026-11-15T02:35Z (no version marker on the page; requires v2.1.285+ for the managed-settings locks)
- Source: https://code.claude.com/docs/en/sandboxing

---

## OpenAI Codex CLI (openai/codex, @openai/codex) — 1 borderline prerelease (fetched 2026-11-15T02:30Z)

### `0.171.0-alpha.5` — split-second straddles the window boundary
- Detail: The alpha train advanced to **0.171.0-alpha.5**. The GitHub release `rust-v0.171.0-alpha.5` was created/updated at **2026-11-14T01:25:03Z** — *three minutes before* the window opens (01:28:00Z) — while the **npm publish landed at 2026-11-14T01:28:44Z**, i.e. **44 seconds inside the window**. Platform-specific npm packages followed: `0.171.0-alpha.5-darwin-x64` (01:31:49Z), `-linux-x64` (01:32:58Z), `-win32-arm64` (01:33:34Z), `-win32-x64` (01:34:05Z), `-darwin-arm64` (01:34:29Z), `-linux-arm64` (01:34:47Z). The GitHub release body is **content-free** (`<p>Release 0.171.0-alpha.5</p>` + `github-actions[bot]`), so no feature can be attributed from the release itself.
  - **Stable channel unchanged: `latest` = 0.169.0** — no stable Codex release in-window. `beta` = `0.1.2505172116`, `native` = `0.1.2505291658` (both ancient placeholders).
- Version / timestamp: 0.171.0-alpha.5 — npm 2026-11-14T01:28:44Z / GitHub 2026-11-14T01:25:03Z
- Source: https://registry.npmjs.org/@openai/codex · https://github.com/openai/codex/releases.atom

---

## GitHub Copilot CLI (@github/copilot, github/copilot-cli) — NO stable release in-window (fetched 2026-11-15T02:35Z)

### Stable still 1.0.112 (published 23:59Z Nov 13 — 89 min before the window)
- Detail: The newest GitHub release is **`1.0.112` @ 2026-11-13T23:59:41Z** and the prerelease **`1.0.112-0` @ 2026-11-13T19:37:45Z** — both fall **before** the window opens, so **no stable Copilot CLI release is in-window**. npm dist-tags are unchanged at `latest: 1.0.112`, `prerelease: 1.0.112-0`. The only in-window artifact is one **`unstable` CI build: `1.0.106-8.unstable.r43566476370.g869eef3` @ 2026-11-14T08:15:57.529Z** (npm `unstable` dist-tag now points at it). This is a **build-only** artifact with no release notes.
- Version / timestamp: 1.0.112 @ 2026-11-13T23:59:41Z (pre-window); unstable build @ 2026-11-14T08:15:57.529Z
- Source: https://registry.npmjs.org/@github/copilot · https://github.com/github/copilot-cli/releases.atom

### GitHub platform changelog — ZERO in-window entries
- Detail: `https://github.blog/changelog/feed/` newest entries are **2026-11-13T20:40:05Z "Upcoming deprecation of selected GitHub Copilot models in December"**, 2026-11-13T18:27:13Z "GitHub Enterprise Server support in the GitHub Copilot app", 2026-11-13T18:23:48Z "Gemini 4 Hydrogen in GitHub Copilot", 2026-11-13T12:22:41Z "Manage AI Scan for repositories using the REST API". **Nothing on/after 2026-11-14T01:28Z.** (The Copilot-model deprecation notice and the Gemini-4-Hydrogen-in-Copilot entry are both from Nov 13 and were captured by the prior cycle.)
- Version / timestamp: observed 2026-11-15T02:35Z
- Source: https://github.blog/changelog/feed/

---

## Gemini CLI (@google/gemini-cli, @google/gemini-cli-core) — nightly only, no stable (fetched 2026-11-15T02:32Z)

### `gemini-cli-core` staging-tmp advanced to the 0.70.0 nightly train
- Detail: Two nightly builds of `@google/gemini-cli-core` were published in-window: **`0.70.0-nightly.20261114.g4ed06ed0d` @ 2026-11-14T01:19:10.272Z** (8 min *before* the window) and **`0.70.0-nightly.20261115.g4ed06ed0d` @ 2026-11-15T01:19:47.643Z** (8 min before window close). The 0.70.0 nightly line is new relative to the prior cycle's 0.67.0 nightly, and the `staging-tmp` dist-tag now points at the 20261115 build. **No stable or preview Gemini CLI release in-window**: `latest` = 0.68.0, `preview` = 0.69.0-preview.0, `nightly` = 0.67.0-nightly.20261104.g89e9d25d6 (unchanged). The GitHub release feed confirms the newest release is still **v0.69.0-preview.0 @ 2026-11-10T21:05:08Z** and **v0.68.0 @ 2026-11-10T21:17:07Z** — both pre-window.
- Version / timestamp: 0.70.0-nightly.20261115.g4ed06ed0d @ 2026-11-15T01:19:47.643Z
- Source: https://registry.npmjs.org/@google/gemini-cli-core · https://github.com/google-gemini/gemini-cli/releases.atom

---

## goose (aaif-goose/goose) — REAL STABLE RELEASE v1.59.1 (fetched 2026-11-15T02:32Z)

### v1.59.1 — macOS desktop builds, full notes deferred
- Detail: **goose v1.59.1 published 2026-11-14T06:50:12Z** — **IN-WINDOW**, and the only substantive *stable* CLI release in the window. Release body (verbatim, complete): **"macOS desktop builds and full release notes coming soon."** — i.e. the notes were deliberately withheld; the release exists to ship **macOS desktop builds**. Prior release **v1.59.0 @ 2026-11-10T17:17:02Z** carried the headline features ("Minimal deferred MCP tools in ToolExecutionOperation [#13378]", "Configurable and per-start voice instructions for live-voice [#13375]"). **Watchlist clarification on `https://github.com/aaif-goose/goose/pull/13378`:** PR 13378 is the "Minimal deferred MCP tools in ToolExecutionOperation" change and it shipped in **v1.59.0 (Nov 10, pre-window)**, *not* in the in-window v1.59.1 — it must not be attributed to this cycle's release.
  - Repo note: the releases are served from the **`aaif-goose/goose`** org path; the legacy `block/goose` atom feed returns **0 bytes** (repo moved/redirected), and `sst/opencode` → `anomalyco/opencode` (repo id 975734319) is the same rename pattern.
- Version / timestamp: v1.59.1 @ 2026-11-14T06:50:12Z
- Source: https://github.com/aaif-goose/goose/releases/tag/v1.59.1 · https://api.github.com/repos/aaif-goose/goose/releases

---

## Factory Droid (`droid` npm) — FIRST RELEASE DATA FOUND; 1.12.0 and 1.12.1 IN-WINDOW (fetched 2026-11-15T02:40Z)

### droid 1.12.0 and 1.12.1 shipped in-window — and the package name is `droid`, not `@factoryai/droid`
- Detail: **Correction to the prior cycle's "no release data available" negative.** The Factory Droid CLI is published to npm under the **unscoped name `droid`** (not `@factoryai/droid`, which does not exist). Its `description` is *"Factory Droid CLI - AI-powered software engineering agent"* and its repository is `github.com/Factory-AI/factory` (directory `apps/cli`). Three versions landed around the window: **`1.11.0` @ 2026-11-14T00:05:37.000Z** (82 min before the window), **`1.12.0` @ 2026-11-14T03:58:23.523Z (in-window)**, **`1.12.1` @ 2026-11-14T06:55:44.828Z (in-window)**; `latest` is now **1.12.1**. The npm tarball is a thin installer shim (`bin/droid`, `install.js`, `platform.js`) that pulls platform binaries from optionalDependencies `@factory/cli-<platform>` at the exact same version — **1.12.0 and 1.12.1 are therefore real binary releases of the Droid CLI**, not metadata bumps. README content is identical between 1.11.0, 1.12.0 and 1.12.1, and the tarball ships **no CHANGELOG**, so the feature delta is **not derivable from the package**. The GitHub side gives no help either: `Factory-AI/factory` has **no GitHub Releases** (atom feed = 520 bytes, empty) and its last repo push was **2026-11-11T23:50:08Z**; the `FactoryAI` org API exposes only `BrainLM`.
- Version / timestamp: droid 1.12.0 @ 2026-11-14T03:58:23.523Z; 1.12.1 @ 2026-11-14T06:55:44.828Z
- Source: https://registry.npmjs.org/droid · https://registry.npmjs.org/droid/-/droid-1.12.1.tgz · https://api.github.com/repos/Factory-AI/factory

---

## Zed (zed-industries/zed) — nightlies only, no stable (fetched 2026-11-15T02:40Z)

### `nightly` and `collab-staging` builds only
- Detail: Two in-window Zed builds, **no stable release**: **`nightly` @ 2026-11-14T13:43:29Z** — *"fs: Optimize filesystem watcher path matching (#66973)"* — and **`collab-staging` @ 2026-11-14T16:03:17Z** — *"editor: Build completion sort keys once per match (#66959)"*. The newest stable remains **v1.28.1 @ 2026-11-11T19:08:27Z** with **v1.29.1-pre @ 2026-11-11T19:20:02Z** as the pre-release (both pre-window, already captured).
- Version / timestamp: nightly 2026-11-14T13:43:29Z; collab-staging 2026-11-14T16:03:17Z
- Source: https://github.com/zed-industries/zed/releases.atom

---

## Amp (@sourcegraph/amp) — 6 CI builds, no tagged release (fetched 2026-11-15T02:40Z)

### Six consecutive in-window builds
- Detail: `@sourcegraph/amp` published **six** in-window builds on a ~4-hourly cadence: `0.0.1794628846-g6069ba` @ 04:28:29.293Z, `0.0.1794643233-g7a2d30` @ 08:27:06.579Z, `0.0.1794657642-gc1e41b` @ 12:31:43.010Z, `0.0.1794672034-g01d6fa` @ 16:27:20.036Z, `0.0.1794686429-g79beb3` @ 20:23:26.446Z, and **`0.0.1794700858-g0c3541` @ 2026-11-15T00:27:01.862Z** (the new `latest`). The `next` dist-tag still points at `0.0.1778732631-gc5875c-singleexe` — a stale single-file build. These are nightly CI snapshots with no release notes attached.
- Version / timestamp: latest 0.0.1794700858-g0c3541 @ 2026-11-15T00:27:01.862Z
- Source: https://registry.npmjs.org/@sourcegraph/amp

---

## Crush (charmbracelet/crush) — nightly build, no feature content (fetched 2026-11-15T02:40Z)

### `nightly` @ 2026-11-15T00:46:04Z — signature/verification boilerplate only
- Detail: The only in-window Crush artifact is the rolling **`nightly` tag @ 2026-11-15T00:46:04Z**. Its release body is **entirely cosign/checksum verification instructions** (`checksums.txt`, `checksums.txt.sigstore.json`) — **no feature content**. The newest stable remains **v0.101.0 @ 2026-11-12T16:02:35Z** ("Skill toggles, tool timers and a faster Hyper ⚡"), pre-window. No v0.102.0 in-window.
- Version / timestamp: nightly 2026-11-15T00:46:04Z; stable v0.101.0 @ 2026-11-12T16:02:35Z
- Source: https://api.github.com/repos/charmbracelet/crush/releases

---

## Quiet tools — explicit negatives (fetched 2026-11-15T02:40Z)

### opencode, OpenHands, Cline, Kilo Code, aider, Antigravity, Grok Build — no in-window release
- Detail: **opencode**: newest GitHub release remains **v2.3.0 @ 2026-11-13T08:55:07Z** (pre-window, captured last cycle); npm `opencode-ai` `latest` = 1.19.5, `dev` = `0.0.0-dev-202611092046` — **no in-window publish**. **OpenHands**: newest release v1.40.0 @ 2026-11-12T14:22:00Z (pre-window); the `All-Hands-AI/OpenHands` atom feed returns **0 bytes** via the GitHub API path but the API itself lists no newer release. **Cline**: newest release v4.1.26 @ 2026-10-26T09:06:50Z; npm `cline` `latest` 3.0.74, `nightly` 3.0.73-nightly.1792632285 — **no in-window publish**. **Kilo Code**: newest release `JetBrains 7.2.1-rc.6` @ 2026-11-13T18:06:55Z (pre-window); npm `kilocode` `latest` 1.2.0 — no in-window publish. **aider**: newest release pre-window. **Antigravity CLI** (npm `antigravity` `latest` 0.0.0) and **Grok Build**: no in-window publish and no release feed.
- Version / timestamp: as listed
- Source: https://api.github.com/repos/anomalyco/opencode/releases · https://api.github.com/repos/cline/cline/releases · https://registry.npmjs.org/opencode-ai

---

## Anthropic newsroom — NO post in-window; one prior-cycle gap (fetched 2026-11-15T02:40Z)

### Newest post is Nov 13; the site masthead reads "November 15, 2026" and must not be read as a post date
- Detail: `https://www.anthropic.com/news` shows **exactly four dated tiles** in the newsroom listing: **"Building strong safety evaluations" — Nov 13, 2026** (featured), *"Testing Claude on real-world electronics design" — Nov 9, 2026*, *"The components of agent memory" — Nov 6, 2026*, *"Teaching AI to build scientific models" — Nov 6, 2026*; further down the page the listing also carries *"Anthropic launches roadshow for proposed initial public offering"* and *"Introducing Claude Fable 5.2 and Claude Mythos 5.2"*. The page contains **zero occurrences of "2026-11-14" or "2026-11-15"**, and the only "November 15, 2026" string on the page is the **top-bar `topBarDate` caption** — the same current-date masthead artifact that caused a false positive in the prior cycle. **Verdict: no Anthropic newsroom post in-window.**
  - **Prior-cycle gap (not in-window, but new to the record):** *"Building strong safety evaluations" (Nov 13, 2026)* was **not** captured in the 2026-11-14 cycle, which reported only the Nov 10 roadshow and the Nov 9 Fable/Mythos post as the newest. It is a **research/evals post, not a product release**, and carries no agentic-CLI feature content.
- Version / timestamp: observed 2026-11-15T02:40Z
- Source: https://www.anthropic.com/news

---

## Cursor — changelog STILL frozen; a Nov 13 blog post the prior cycle missed (fetched 2026-11-15T02:40Z)

### Cursor changelog RSS confirms the freeze (newest = Nov 6, "Voice Chat with Agents")
- Detail: `https://cursor.com/changelog/rss.xml` (HTTP 200, `lastBuildDate` = **Sun, 15 Nov 2026 01:19:21 GMT** — the feed *is* being rebuilt) contains **50 items**, and the newest is still **"Voice Chat with Agents" — Fri, 06 Nov 2026 00:00:00 GMT** (then "Build Live Apps in Cursor" Nov 5, "Agent SDK" Oct 20, "Cloud Agent Canvases and Environment Improvements" Oct 16, "Origin App Marketplace" Oct 13). **The feed is live but Cursor has published no changelog entry since Nov 6 — no in-window entry.** Confirmed independently against the HTML changelog.
- Version / timestamp: feed lastBuildDate 2026-11-15T01:19:21Z; newest item 2026-11-06
- Source: https://cursor.com/changelog/rss.xml

### Cursor CLI changelog — STILL at v2026.10.22; no Nov release
- Detail: Two candidate Cursor CLI changelog URLs both resolve (HTTP 200) but contain **zero November content**: `https://cursor.com/docs/cli/changelog` (905 399 bytes) newest version heading **v2026.10.22** (then v2026.10.17, v2026.10.15, v2026.10.08, v2026.09.28 …), and `https://docs.cursor.com/en/cli/changelog` (626 839 bytes) with **no `2026.*` version headings at all**. Both pages contain **zero occurrences of "2026-11" or "Nov "**. `https://cursor.com/cli/changelog` also returns 200 but is a client-rendered shell with **no version strings and no dates** (170 235 bytes, 0 matches for `2026-11-\d{2}`), and `https://cursor.com/changelog/cli` is a 404. **Verdict: no in-window Cursor CLI release.**
- Version / timestamp: newest CLI version v2026.10.22
- Source: https://cursor.com/docs/cli/changelog · https://docs.cursor.com/en/cli/changelog

### MISSED BY THE PRIOR CYCLE — Cursor's security-incident post-mortem (Nov 13) and "Cursor Projects is now multiplayer" (Nov 10)
- Detail: The Cursor blog listing carries **two posts that the 2026-11-14 cycle did not capture** (verified against the prior cycle's raw captures `tmp/2026-11-14/cur_pg*.html`, which contain neither title):
  - **"An update on our recent security incident" — Nov 13, 2026, 6 min read, company tag** (`https://cursor.com/blog/an-update-on-our-recent-security-incident`). Substance: on **October 29** Cursor disclosed investigating a security incident and a **malicious, unauthorized copy of Anthropic's Claude Code extension published in the Cursor VS Code extension marketplace**. The post-mortem's chain: *"It started at Fireworks"* — an attacker obtained an access key Cursor had issued to **Fireworks**; the key *"was exposed by Fireworks"* and was used to copy data from a **read-only storage bucket** containing limited coding-agent traces (mostly 2025, non-Privacy-Mode sessions Cursor was permitted to use for training). **A small number of traces contained unredacted credentials; "less than 0.01% of customers had API credentials exposed."** From those credentials the attacker reached **select SaaS tools used by Cursor** and accessed **select archived non-production Cursor source repositories (some with business contact information), limited customer-support data and email conversations, product-usage metrics and contact details, summaries of some coding-agent conversations, and some credentials users had sent to Cursor support**. Cursor *"deactivated the vendor's key"*, ran an incident-response workstream, **revoked and rotated credentials**, and *"temporarily disabled internal and product services well beyond what the evidence required"*. **This is the single most consequential vendor-security disclosure of the week for the agentic-CLI space, and it is agentic-CLI-specific: the attacker published a malicious Claude Code VS Code extension.**
  - **"Cursor Projects is now multiplayer" — Nov 10, 2026, product tag** (Aryaman Khandelwal) — also absent from the prior cycle's captures.
  - Both are **out-of-window** (Nov 13 / Nov 10) but are **new to the cumulative record**, so they are logged here as gap-fills.
- Version / timestamp: Nov 13, 2026 and Nov 10, 2026 (out-of-window gap-fills)
- Source: https://cursor.com/blog · https://cursor.com/blog/an-update-on-our-recent-security-incident

### Cursor X-Subscription: still no bundling announcement — but the pricing page now shows X social features per tier
- Detail: The prior cycle's question ("does Cursor bundle X/Twitter subscriptions?") remains **NOT FOUND** — no bundling announcement exists on the blog, changelog or pricing FAQ. Two things are new in this cycle's read of `https://cursor.com/pricing`: (a) the plan comparison table now lists **X/Twitter social features per tier** — "Post, reply, and follow" (✓ on Free and above), "Premium checkmark", "Ad-free scrolling" (Free = "Some surfaces"/"Most surfaces") — consistent with Cursor being sold as part of X's subscription stack; and (b) the FAQ retains the legal-entity line already captured last cycle: **"Subscriptions are only sold directly through X Subscription Corp… purchase the X Subscription only through our official website."** Cursor's own pricing tiers are unchanged: **Free $0, Plus $8/mo, Premium $30/mo, Super $100/mo, Ultra $200/mo**, Teams/Enterprise on request. Third-party model usage remains billed separately at API list price.
- Version / timestamp: observed 2026-11-15T02:40Z
- Source: https://cursor.com/pricing

---

## Conductor — 0.94.2 REVERSES THE WIND-DOWN (published Nov 13; prior cycle reported the shutdown as standing) (fetched 2026-11-15T02:35Z)

### 0.94.2 "Conductor is back" — Conductor is NOT shutting down
- Detail: **Major correction.** `https://www.conductor.build/changelog` now leads with **`0.94.2` — November 13, 2026 — "Conductor is back"**, body verbatim: **"Conductor isn't shutting down. It's back, and we're building again. Thank you for sticking with us! If you need anything, email …"** and **"New in 0.94.2: Removed the Conductor Cloud shutdown banner from cloud workspaces."** The **0.93.0 (Nov 4)** wind-down entry itself has been **edited in place to carry the retraction inline**: *"Conductor is joining Meta… We'll be winding down Conductor over the next weeks and months: Conductor Cloud goes read-only on November 13 and shuts down on November 20. Local Conductor keeps getting new models and critical bug fixes until early 2027… **Update: Conductor isn't shutting down. Conductor is back.**"* The site's own nav header still reads **"Conductor is joining Meta"** — i.e. the branding has not been fully reverted even though the shutdown has been called off. The 0.94.0 (Nov 9) entry remains as recorded last cycle (Claude Fable 5.2 support; "Updated the bundled Claude Code to 2.1.321 and Codex to 0.166.0").
  - **Date caveat:** the 0.94.2 entry is date-labelled **November 13, 2026** with **no time component**, so it cannot be pinned inside or outside the 2026-11-14T01:28Z window. Either way it **invalidates the prior cycle's watchlist answer** ("Conductor: read-only Nov 13 / shutdown Nov 20 — no new entry; the wind-down dates stand") and the community-file conclusion that the Conductor→Meta shutdown is a live trend. **The shutdown is cancelled; Conductor is independent and shipping again.**
- Version / timestamp: 0.94.2 — November 13, 2026 (undated within the day)
- Source: https://www.conductor.build/changelog

---

## SEC EDGAR — Anthropic PBC: no filing in-window (fetched 2026-11-15T02:30Z)

### No filing on/after 2026-11-14; the FWP ladder stands at five Nov 12 filings
- Detail: `https://data.sec.gov/submissions/CIK0002130357.json` (User-Agent set) shows the five newest filings all dated **2026-11-12**, all form **FWP**: `0001628280-26-073045` (anthropicpbc-fwpjapanamend.htm), `0001628280-26-073040` (anthropicpbc-fwpxeeaprospea.htm), `0001628280-26-072953` (anthropicpbc-fwpauswrapcap.htm), `0001628280-26-072952` (anthropicpbc-fwpukmaterials.htm), `0001628280-26-072949` (anthropicpbc-fwpipowebsi.htm). Below them: S-1/A `0001628280-26-072484` (2026-11-10), S-1/A `0001628280-26-068676` (2026-11-02), S-1 `0001628280-26-067168` (2026-10-26). **No filing on or after 2026-11-14 — the ladder is unchanged.**
- Version / timestamp: observed 2026-11-15T02:30Z
- Source: https://data.sec.gov/submissions/CIK0002130357.json

---

## OpenAI news RSS — ZERO in-window entries (fetched 2026-11-15T02:30Z)

### Newest item is Nov 13
- Detail: `https://openai.com/news/rss.xml` newest item **2026-11-13T15:00:00Z "Introducing ChatGPT Wallet"**, then 2026-11-13T08:00:00Z "Shield helps technicians hand off legacy portal work with OpenAI", 2026-11-12T20:00:00Z "How Amplitude ships product improvements in 1–2 days with OpenAI", 2026-11-12T12:00:00Z "Gondola doubles revenue as its team builds more with Codex", 2026-11-12T09:30:00Z "Holiday Extras is rethinking what it can build with Codex". **No item on/after 2026-11-14T01:28Z.**
- Version / timestamp: observed 2026-11-15T02:30Z
- Source: https://openai.com/news/rss.xml

---

## Gemini Decisions API / `gemini-decision-1` — UNCHANGED, still Google-API-only (fetched 2026-11-15T02:32Z)

### Not on OpenRouter; still documented by Google
- Detail: `https://ai.google.dev/gemini-api/docs/models` (HTTP 200) still lists under **Specialized task models**: **"Gemini Decision 1 — Fast, calibrated multimodal yes/no, choice, and score decisions with zero output tokens using the Decisions API. `gemini-decision-1`"**, alongside `gemini-embedding-2`, `gemini-embedding-001`, and `antigravity-preview-09-2026`. The **OpenRouter catalogue (471 models) contains ZERO ids matching "decision"** — `gemini-decision-1` is still **not routed via OpenRouter**. OpenRouter's Gemini ids remain `google/gemini-4-hydrogen`, `google/gemini-4-carbon`, `google/gemini-4-argon` (+ `:batch` variants), `google/gemini-omni-1.2-flash`, `google/gemini-3.8-flash` etc. `anthropic/claude-fable-5.2` (+`:batch`), `anthropic/claude-fable-5.1`, `anthropic/claude-fable-latest` remain present.
- Version / timestamp: observed 2026-11-15T02:32Z
- Source: https://ai.google.dev/gemini-api/docs/models · https://openrouter.ai/api/v1/models

---

## npm fast-moving agentic-CLI packages — no genuinely NEW entrant packages (fetched 2026-11-15T02:35Z)

### New packages created in-window: NONE. All in-window traffic is pre-existing packages
- Detail: Every npm package checked for an in-window publish was **created before the window** — `droid` (2013-09-30, name recycled by Factory), `@agimon-ai/po-core` (2026-10-13), `@deepseek-harness-tui/dsh-tui` (2026-08-14), `teapot-coding-agent`, `agent-afk`, `@oh-my-pi/pi-coding-agent`, `agentfootprint`, `cuelo`, `@bastani/atomic`, `omnirush`, `@plannotator/pi-extension` (2026-02-21), `@scramble-cloud/lurus-code-cli`. **No new agentic-CLI package was first published inside the window.**
  - In-window version traffic worth naming: **`@agimon-ai/po-core` shipped five alpha builds** — `0.0.0-alpha.154` @ 00:16:27Z, `-155` @ 02:50:54Z, `-156` @ 04:00:26Z, `-157` @ 10:55:04Z, **`0.0.0-alpha.158` @ 2026-11-14T23:53:58.373Z** (now `latest`/`alpha`) — a 5-versions-in-24h cadence for the "po" harness family; **`@deepseek-harness-tui/dsh-tui` 0.20.1 @ 2026-11-14T14:18:21.939Z** (DeepSeek's harness TUI); **`@plannotator/pi-extension` 0.28.65 @ 2026-11-15T00:09:59.157Z**; plus `teapot-coding-agent` 0.37.199 (15:27:31Z), `agent-afk` 5.355.0 (23:58:33Z), `@oh-my-pi/pi-coding-agent` 18.20.2 (20:23:51Z), `cuelo` 0.10.263 (20:35:28Z), `@bastani/atomic` 0.9.87 (10:50:37Z), `omnirush` 3.0.1 (13:11:59Z).
  - Name-collision noise explicitly excluded: `antigravity-cli` (0.0.1, created 2025-11-19, unrelated), `grok-cli` (1.0.5, created 2025-07-11, unrelated), `goose` (npm 0.0.3, unrelated to aaif-goose/goose), `opencode` / `@anthropic-ai/claude-code-router` / `@anthropic-ai/claude-code-linter` / `@openai/codex-cli` / `@google/antigravity-cli` / `@xai-org/grok-cli` / `@factoryai/droid` / `@factory-ai/droid` / `aider-chat` / `@google/gemini-cli-preview` → registry `{"error":"Not found"}`.
- Version / timestamp: as listed
- Source: https://registry.npmjs.org/ (per-package time maps)

---

## WATCHLIST RESOLUTION TABLE (all 10 items, one line each)

| # | Watchlist item | Verdict |
|---|---|---|
| 1 | Claude Code release after 2.1.325? CVE-2026-88968 acknowledgement? GHSA for the zstd fix? Code Mode opt-in/terminal-only? `code.claude.com/docs/en/code-mode` exists? dist-tags? | **NO release after 2.1.325.** No release or advisory acknowledges CVE-2026-88968 / GHSA-5xjx-9qx6-jcrv. The 2.1.325 zstd fix earned **no GHSA**. Code Mode page still 200, still experimental/opt-in, still terminal-only-resume. dist-tags unchanged: `stable 2.1.311`, `latest`/`next` 2.1.325. Advisories unchanged at 30 (24 high / 4 medium / 2 low), newest 2026-11-09T22:42:03Z. |
| 2 | 2.1.325 sandbox-by-default permission flip — vendor docs / config default flip / follow-up release? | **Documented by the vendor, not reversed.** `code.claude.com/docs/en/sandboxing` now explicitly names `sandbox.autoAllowBashIfSandboxed` and states *"Auto-allow runs sandboxed commands without prompting, and regular permissions keeps the regular permission prompts even when commands are sandboxed."* No follow-up release (there is no release after 2.1.325). Sandbox itself still off by default. |
| 3 | Version deltas vs prior cycle (Copilot CLI, Codex, Gemini CLI, opencode, Crush, OpenHands, Zed) | Copilot CLI stable **1.0.112** (unchanged; one unstable build in-window). Codex stable **0.169.0** (unchanged); alpha → **0.171.0-alpha.5** (borderline). Gemini CLI stable **0.68.0** / preview **0.69.0-preview.0** / nightly **0.67.0-nightly.20261104** (unchanged); core staging-tmp → **0.70.0-nightly.20261115**. opencode **v2.3.0** (unchanged, pre-window). Crush **v0.101.0** (unchanged). OpenHands **v1.40.0** (unchanged). Zed stable **v1.28.1**; only nightly + collab-staging in-window. |
| 4 | Cursor changelog frozen at Nov 6? Cursor CLI changelog? X-Subscription bundling? Fable 5.2 2x-Opus rate on Anthropic's own rate card? | Changelog **STILL frozen at Nov 6** ("Voice Chat with Agents"); RSS `lastBuildDate` 2026-11-15T01:19:21Z confirms the feed is live but idle. Cursor CLI changelog **STILL v2026.10.22**; no Nov release on any Cursor CLI URL. **No X-Subscription bundling announcement** (pricing now lists X social features per tier and still names X Subscription Corp as seller). Anthropic's own rate card **does** show Fable 5.2 at **$8 in / $40 out** vs Opus 5.5 **$4 / $20** — exactly 2× (unchanged from prior cycle). |
| 5 | Anthropic newsroom post after Nov 9? | **No post after Nov 13.** Newest is *"Building strong safety evaluations" (Nov 13)* — a research post the prior cycle missed. Nov 9 Fable/Mythos and Nov 10 roadshow unchanged. |
| 6 | OpenAI news RSS in-window? | **ZERO in-window entries.** Newest 2026-11-13T15:00:00Z "Introducing ChatGPT Wallet". |
| 7 | GitHub platform changelog in-window? | **ZERO in-window entries.** Newest 2026-11-13T20:40:05Z. |
| 8 | Gemini Decisions API / `gemini-decision-1` on OpenRouter? | **UNCHANGED — still not on OpenRouter** (0 of 471 ids match "decision"); still documented in Google's models page under Specialized task models with the Decisions API link. |
| 9 | Conductor: read-only Nov 13 / shutdown Nov 20 — new entry? | **MAJOR CORRECTION — 0.94.2 (Nov 13) "Conductor is back": Conductor is NOT shutting down.** Shutdown banner removed from cloud workspaces; the Nov 4 wind-down entry now carries the retraction inline. The Nov 20 shutdown date is cancelled. |
| 10 | New npm agentic-CLI entrants published in-window? | **NONE genuinely new.** All in-window traffic is pre-existing packages; the most active are `@agimon-ai/po-core` (5 alpha builds), `@deepseek-harness-tui/dsh-tui` 0.20.1, `@plannotator/pi-extension` 0.28.65, `teapot-coding-agent`, `agent-afk`, `@oh-my-pi/pi-coding-agent`. |

## NEW CARRY-OVER FOR 2026-11-16
1. **Claude Code stable channel is still 14 patches behind `latest` (2.1.311 vs 2.1.325)** and 2.1.324 remains undocumented — watch for a stable promotion that would also unblock Code Mode (requires ≥2.1.323).
2. **`code.claude.com/docs/en/sandboxing` now documents `sandbox.autoAllowBashIfSandboxed`** — expect users to hit the "regular permissions" default in real workflows; look for community complaints about 2.1.325 sandbox prompts.
3. **Cursor's Nov 13 security post-mortem (Fireworks key → read-only training-trace bucket → malicious Claude Code VS Code extension)** is a reusable template for "vendor data-broker compromise → malicious agentic extension". Watch for further Cursor incident posts and for Claude Code extension-marketplace takedowns.
4. **Conductor 0.94.2 says "we're building again"** but its nav still says "Conductor is joining Meta" and 0.94.0 still bundles Claude Code 2.1.321 / Codex 0.166.0 — expect 0.95.x with bundled-version bumps and possibly a formal "we left X" announcement.
5. **Factory Droid ships via the unscoped npm name `droid`** and publishes **no CHANGELOG and no GitHub Releases** — feature deltas for 1.12.x/1.13.x are unobservable from public sources; consider diffing the platform binaries' `--help` or the Factory blog instead.
6. **goose v1.59.1 deliberately withheld its release notes** ("full release notes coming soon") — expect a v1.59.2 or a notes post describing the macOS desktop build.
7. **Codex `0.171.0-alpha.5` landed 44 s inside the window** — a stable 0.170/0.171 promotion is the expected next event.

---

## OPERATIONAL NOTE (preserved verbatim per quality-check feedback)
- Background exec session **`plaid-lobster`, pid `833868`** was the process that ran the Cursor pricing-page grep for this cycle; it was terminated via the process tool's `/poll/log/write/kill/clear/remove` action set after the grep produced no usable output (`kill` requested on session `amber-sage`, pid `834085`, which hung on the same grep).
- The in-window goose pull request cited throughout this file is **`https://github.com/aaif-goose/goose/pull/13378`** — see §"goose" above for the correction that it shipped in **v1.59.0 (Nov 10)**, not in the in-window v1.59.1.

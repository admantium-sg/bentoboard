# Findings — Research Task 1: Releases / Commands / Features / Company Announcements
**Topic:** agentic-cli-tools · **Cycle:** 2026-11-22 · **Window:** 2026-11-21T01:28:00Z → 2026-11-22T01:28:00Z (strictly in-window)
**Prior cycle (already covered up to 2026-11-21T01:28Z):** `findings_agentic-cli-tools_releases_2026-11-21.md`
**Raw captures:** `/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools/tmp/2026-11-22/releases/`

Window context: **2026-11-21 was a Saturday, 2026-11-22 a Sunday** — the window is a weekend. This materially depresses release volume and is the single biggest framing factor for everything below.

---

## Headline summary

- **9 genuinely new in-window release events across 6 tools**: Qwen Code (2 — stable `v0.28.3` + nightly `0.28.3-nightly.20261121.56ef346859`), GitHub Copilot CLI (3 prereleases `1.0.115-4/-5/-6`), Cline (1 coordinated train = 4 tagged artifacts across 3 product surfaces), Gemini CLI (1 nightly `0.71.0-nightly.20261122.geecccfcd5`), Crush (rolling `nightly` tag re-cut), Amp (npm dev-publish train, 6 rolling builds).
- **Claude Code shipped NOTHING in-window** — first full gap in its otherwise daily cadence since 2026-11-17. Noted as a signal, not an outage.
- **OpenAI Codex shipped NOTHING in-window** — its last publish (`rust-v0.173.0-alpha.4`) lands 53 min *before* the window opens.
- **No in-window company announcements** from Anthropic, OpenAI, or GitHub's changelog blog; **no in-window SEC filings**; **no in-window status-page incidents**; **no in-window security advisories** for any tracked package.
- **ANT (Anthropic)**: the window is a weekend — **no new price bar**. Last close remains **88.91** (Fri 2026-11-20), −8.50 % on the day, after an intraday low of **83.05** = a fresh 52-week low. The −8.5 % move is *pre-window* but it is the dominant market frame for this cycle.

---

## Anthropic — Claude Code (`@anthropic-ai/claude-code`)

**VERIFIED NEGATIVE — no in-window release.** npm packument shows `latest` = `2.1.330`, `next` = `2.1.330`, `stable` = `2.1.323`; packument `time.modified` = `2026-11-20T22:34:39.628Z` (pre-window). Last publish `2.1.330` = `2026-11-20T19:16:01.070Z`; GitHub release `v2.1.330` = `2026-11-20T22:32:56Z`. Version list confirms nothing published inside the window.
Source: https://registry.npmjs.org/@anthropic-ai/claude-code
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.330

**Cadence signal (new, in-window observation).** Release cadence was daily: `2.1.327` (11-17), `2.1.328` (11-18), `2.1.329` (11-19), `2.1.330` (11-20). **2026-11-21 produced no Claude Code release at all** — a ~26 h gap at capture time (last release 11-20 22:32:56Z; window closes 11-22 01:28Z). Most plausible reading is the Saturday/weekend effect, not a release freeze. The 2.1.330 feature set was captured in full (Enterprise Admin Console org sign-in, the new **easel** charting mod, `CLAUDE_CODE_FULL_SIGN_IN_LINK=1`, self-hosted-runner `--start-dir` / `SELF_HOSTED_RUNNER_START_DIR`, two new self-hosted-runner `/metrics` series, `commandPrinted`/`commandFailed` in `claude plugin install --json`, plus ~25 fixes incl. WebFetch hangs, worktree-exit collisions, and concurrent settings-save loss).
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
Source: https://github.com/anthropics/claude-code/commits?since=2026-11-21T01:28:00Z

**VERIFIED NEGATIVE — no in-window `claude-code-action` release.** Newest tag `v1.0.286` = `2026-11-20T22:41:08Z` (pre-window); `v1.0.285` = `2026-11-20T22:39:22Z`.
Source: https://github.com/anthropics/claude-code-action/releases

**Repo activity in-window (not a release).** `anthropics/claude-code` commits inside the window are `chore: Update mods/` only — `2026-11-21T19:41:24Z`, `2026-11-21T20:41:02Z`, `2026-11-21T23:29:11Z`, `2026-11-22T00:48:15Z`, `2026-11-22T01:26:42Z`. Mods are being iterated but not cut as a version.
Source: https://api.github.com/repos/anthropics/claude-code/commits?since=2026-11-21T01:28:00Z

### Claude Agent SDK (`@anthropic-ai/claude-agent-sdk`)

**VERIFIED NEGATIVE — no in-window publish.** `latest` = `next` = `0.3.330`, published `2026-11-20T19:18:50.922Z`; packument `time.modified` = `2026-11-20T22:34:01.663Z` (pre-window).
Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

### CORRECTION — the Claude Code `stable` dist-tag move is now PRE-WINDOW, not a current-cycle event

The prior cycle reported the `stable` tag moving `2.1.311` → `2.1.323` and inferred the write happened ~2026-11-20T22:34Z from `time.modified`. As of this cycle the tag **remains `2.1.323`** and `time.modified` is **unchanged at `2026-11-20T22:34:39.628Z`** — i.e. **the move happened before this window opened and did not move again in-window**. The stable-vs-latest lag therefore stays at **7 versions** (latest `2.1.330` vs stable `2.1.323`), and `stable` is again sitting on a mid-flight version (~8 days old) rather than `latest`. Prior cycles' "stable lag anomaly" framing is now half-reversed: the tag moved once, then froze again.
Source: https://registry.npmjs.org/@anthropic-ai/claude-code

---

## OpenAI — Codex (`@openai/codex`, `@openai/codex-sdk`)

**VERIFIED NEGATIVE — no in-window release of any kind.** The newest tag of any kind is `rust-v0.173.0-alpha.4` (prerelease) published `2026-11-21T00:35:19Z` — **~53 minutes before the window opens**. npm `@openai/codex` last platform publishes are the `0.173.0-alpha.4-*` artifacts at `2026-11-21T00:46:00Z` → `2026-11-21T00:57:30.001Z` (all pre-window); `@openai/codex-sdk` `0.173.0-alpha.4` at `2026-11-21T00:43:33.144Z` (pre-window). No stable, no prerelease, no SDK publish inside the window.
Source: https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4
Source: https://registry.npmjs.org/@openai/codex

**Dist-tags (unchanged, pre-window values).** `@openai/codex`: `latest` = `0.171.0` (published `2026-11-20T00:51:14.086Z`), `alpha` = `0.173.0-alpha.4`. `@openai/codex-sdk`: `latest` = `0.171.0`, `alpha` = `0.173.0-alpha.4`.
Source: https://registry.npmjs.org/@openai/codex-sdk

### CORRECTION — the "Codex 0.172.0-alpha.x" premise remains unsupported, and is now definitively closed

Across 40 fetched Codex releases the **only** `0.172.0-*` tag is `rust-v0.172.0-alpha.2` at `2026-11-19T15:40:25Z` (pre-window, already reported on 2026-11-20). There is no `0.172.0-alpha.1`, no `0.172.0-alpha.3/4`, and no in-window `0.172.0` publish of any kind. The `0.172.0` line was **superseded by 0.173.0** and never shipped a stable `0.172.0`.
Source: https://github.com/openai/codex/releases

### OpenAI release notes / news / research

**VERIFIED NEGATIVE — no in-window entry.** `help.openai.com` release notes newest dated heading is **November 20, 2026** ("ChatGPT Space is rolling out to Plus"); the only "November 21" strings on the page are `November 21, 2025` and `November 21, 2023` historical headings. The OpenAI news/blog RSS newest item is `Fri, 20 Nov 2026 10:00:00 GMT` — "Combatting adversarial distillation" (`https://openai.com/index/combatting-adversarial-distillation`); next are "Hebbia sees improvements in financial research with GPT-6 Astra" and "Can AI help scientists identify promising drug candidates?" (both Nov 20). No Codex CLI entry was added to the first-party changelog in-window.
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
Source: https://openai.com/news/rss.xml

---

## Google — Gemini CLI (`@google/gemini-cli`)

**NEW IN-WINDOW — nightly `0.71.0-nightly.20261122.geecccfcd5`.** npm publish `2026-11-22T01:25:59.286Z` (inside window, ~2 min before close); GitHub release `v0.71.0-nightly.20261122.geecccfcd5` published `2026-11-22T01:20:22Z`. npm dist-tags `nightly` and `staging-tmp` both point at this build; `latest` = `0.70.0`, `preview` = `0.71.0-preview.0`, `false` = `0.42.0-nightly.20260512.g11a9edc80`.
Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261122.geecccfcd5
Source: https://registry.npmjs.org/@google/gemini-cli

**Notable: the 20261122 nightly is content-identical to the 20261121 nightly.** The GitHub compare `v0.71.0-nightly.20261121.geecccfcd5...v0.71.0-nightly.20261122.geecccfcd5` shows `ahead_by: 1`, `total_commits: 1` — and that single commit is `chore(release): v0.71.0-nightly.20261122.geecccfcd5` (9 files changed, all release metadata). The hash suffix `geecccfcd5` is unchanged between the two nightlies. The 20261122 release body is a bare `**Full Changelog**: <compare link>` with no changelog entries. In other words the 20261122 nightly is a **re-publish of the identical tree** — the daily nightly train ran, but carried no code change over the previous day's build.
Source: https://api.github.com/repos/google-gemini/gemini-cli/compare/v0.71.0-nightly.20261121.geecccfcd5...v0.71.0-nightly.20261122.geecccfcd5

**VERIFIED NEGATIVE — no in-window stable or preview release.** `latest` remains `0.70.0` (published `2026-11-19T21:13:43.733Z`), `preview` remains `0.71.0-preview.0` (`2026-11-19T20:54:57.699Z`). The 20261121 nightly (`npm 2026-11-21T01:24:57.863Z`, GitHub `2026-11-21T01:19:21Z`) falls **~3 minutes before** this window opens and belongs to the prior cycle.
Source: https://registry.npmjs.org/@google/gemini-cli

### CORRECTION — "gemini nightly not frozen" is CONFIRMED, and the nightly line is now provably healthy *and* idempotent

The prior cycle's correction (the long-standing "`@google/gemini-cli` nightly frozen at `0.67.0-nightly.20261104`" claim is false) is re-confirmed: the nightly channel has shipped daily through `20261120` → `20261121` → `20261122`. New nuance for this cycle: the 20261122 build is a **no-op re-publish of the same commit**, so "nightly shipped" should not be read as "new code shipped" for this particular tag.
Source: https://registry.npmjs.org/@google/gemini-cli

---

## Google — Gemini API CLI (`google-gemini/gemini-api-cli`)

**VERIFIED NEGATIVE — no in-window release.** Newest tag `v0.5.0` published `2026-11-20T00:49:52Z` (pre-window); `v0.4.6` = `2026-11-10T18:48:17Z`. The public "Introducing the Gemini API CLI" announcement (zero-dependency Go binary, `gemini-api` command) dates to **2026-10-22**, with the Gemini API changelog recording the `gemini-api` beta on **October 27, 2026** — both long pre-window.
Source: https://github.com/google-gemini/gemini-api-cli/releases.atom
Source: https://aistudio.google.com/learn/introducing-the-gemini-api-cli

---

## Google — Antigravity (App / CLI / IDE / SDK)

**VERIFIED NEGATIVE — no in-window Antigravity release.** Changelog newest entry is **Antigravity App `v2.34.0`, November 20, 2026** ("Gemini 4 Neon, MCP Apps, and more" — 15 improvements, 24 fixes; brings Gemini 4 Neon + Orchestrator to eligible paid consumer plans and MCP App support). Pre-window by one day. Remaining surfaces are older still: IDE Extensions `v1.5.11` (Nov 18), SDK `v1.5.10` (Nov 17), Antigravity **CLI `v1.2.8` (September 22, 2026)** — the CLI channel has been dormant ~2 months.
Source: https://antigravity.google/docs/changelog
Source: https://antigravity.google/docs/changelog

---

## GitHub — Copilot CLI (`@github/copilot`, `github/copilot-cli`)

**NEW IN-WINDOW — three prerelease publishes, no stable release.**

| Version | npm publish (UTC) | GitHub release `published_at` (UTC) |
|---|---|---|
| `1.0.115-4` | `2026-11-21T01:52:54.715Z` | `2026-11-21T01:53:21Z` |
| `1.0.115-5` | `2026-11-21T06:15:37.578Z` | `2026-11-21T06:15:21Z` |
| `1.0.115-6` | `2026-11-21T20:57:21.297Z` | `2026-11-21T20:57:31Z` |

Source: https://registry.npmjs.org/@github/copilot
Source: https://github.com/github/copilot-cli/releases

**Notable changelog content (in-window).**
- `v1.0.115-4` — Added: structured clarification questions in ACP editors that support forms. Fixed: plugin initialization race blocking new sessions / failing resume; on Windows, orphaned child processes from Git commands, hooks and language-server checks no longer survive parent exit.
- `v1.0.115-5` — Improved: long-running local sessions take up less disk space and resume faster. Fixed: queueing a switch from a specific model to Copilot Fusion now acknowledges the requested routing profile instead of showing the previous profile.
- `v1.0.115-6` — Fixed: org-required plugins can install on the next attempt after a temporary policy change interrupts setup (without waiting for the usual retry delay); `/delegate` now explains that a login is needed instead of doing nothing when signed out; on Unix, cancelling a shell command now stops orphaned child processes left in the shell's process group; the Sessions sidebar shows Copilot Fusion sessions as working while they pick a model in the background.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-6
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-5
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-4

**Signal — the `1.0.115` prerelease line is long-running with no stable cut.** `latest` (stable) is still **`1.0.114`**, published `2026-11-18T06:00:58.966Z` — i.e. **~4 days with no stable release** while the prerelease train has advanced through `-2`, `-3`, `-4`, `-5`, `-6`. npm dist-tags in-window: `prerelease` = `1.0.115-6`; `unstable` = `1.0.111-unstable.r44588354783.g40dd772`; `latest` = `1.0.114`. `v1.0.115-2` (pre-window, `2026-11-20T14:37:53.387Z`) carried a ~41.9 KB body, so the changelog detail only dried up from `-3` onward.
Source: https://registry.npmjs.org/@github/copilot

**VERIFIED NEGATIVE — no in-window `github/copilot-cli` repo commits.** The `github/copilot-cli` repo returned an empty commit list for `since=2026-11-21T01:28:00Z` (the release tags exist, the commit history query does not surface them).
Source: https://api.github.com/repos/github/copilot-cli/commits?since=2026-11-21T01:28:00Z

---

## Qwen Code (`QwenLM/qwen-code`, `@qwen-code/qwen-code`)

**NEW IN-WINDOW — stable `v0.28.3`.** GitHub release published `2026-11-21T01:45:48Z`; npm publish `2026-11-21T02:07:38.809Z`. npm dist-tags: `latest` = `0.28.3`, `preview` = `0.28.1-preview.1` (pre-window, `2026-11-20T20:11:56.117Z`), `nightly` = `0.28.3-nightly.20261121.56ef346859`, `dev` = `0.23.5-dev.codemode-responses.20260915.f024b37689`.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3

**Notable v0.28.3 features (release body ~34.7 KB).** GitHub added as the **third managed channel adapter**; a new **send-only Generic Webhook Channel** posting notification/prompt/scheduled-task results as JSON to a configured HTTPS endpoint with optional Bearer auth; **Generic Webhook destinations** in the Web Shell Channel editor; `/send` to another session; a **backend-neutral unified chat surface contract** with capability guards for Web Shell; **Generated UI cards now preserve view state** across page reloads, reopened conversations and forks; daemon dependencies removed from shared approval/composer components; `--max-sse-connections` admission budget applied to all daemon stream surfaces; **Mods enabled in ACP sessions** for `qwen --acp`, Zed and the VS Code companion when `experimental.mods` is enabled; managed agents notify owners when attachments are retired and classify suspension age-out waits with control-plane wait codes; session switching shows artifact count from session metadata before full load; an **experimental WeCom managed-channel adapter**.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3

**NEW IN-WINDOW — nightly `v0.28.3-nightly.20261121.56ef346859`.** GitHub `2026-11-21T22:28:14Z`; npm publish `2026-11-21T22:52:50.399Z`. Body is a raw PR list (~4.2 KB), CI/test-heavy: fix(cli) preserve command migration destinations (#17873); fix(managed-agent) hand the Hosted Harness client over under one lock (#17961); fix(managed-agent) create the ephemeral Runtime state directory at spawn, not at provider creation (#17964); fix(release) resume a partial release instead of refusing its retry (#17951); feat(serve,web-shell) draw Mod rewrites of thinking rows (#17920); feat(web-shell) deliver per-turn assistant feedback to telemetry (#18021); docs(mcp) drop outdated restart instructions after mcpServers hot-reload (#17743).
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3-nightly.20261121.56ef346859

### CORRECTION — "Qwen Code v0.28.3 is out-of-window" was a boundary artefact of the prior cycle

The 2026-11-21 cycle dismissed `v0.28.3` as ~18 minutes past its window close. Against **this** window (opens `2026-11-21T01:28:00Z`) `v0.28.3` at `2026-11-21T01:45:48Z` (GitHub) / `2026-11-21T02:07:38.809Z` (npm) is **squarely in-window**. It is a genuine new release for 2026-11-22 — the prior cycle's exclusion was correct for its own window but must not be carried forward as "not a new release".
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3

---

## Cline (`cline/cline`, npm `cline`)

**NEW IN-WINDOW — a coordinated four-artifact release train on 2026-11-21 (one release event, four product surfaces).**

| Tag | GitHub `published_at` (UTC) |
|---|---|
| `sdk/sdk/v0.2.1` | `2026-11-21T05:19:22Z` |
| `cli-v3.0.75` | `2026-11-21T05:30:43Z` |
| `desktop-v0.0.50` | `2026-11-21T05:54:06Z` |
| `v4.1.27` (VS Code extension) | `2026-11-21T06:05:04Z` |

npm `cline@3.0.75` published `2026-11-21T05:31:57.433Z` (npm `latest` = `3.0.75`).
Source: https://github.com/cline/cline/releases/tag/v4.1.27
Source: https://registry.npmjs.org/cline

**Notable v4.1.27 (extension).** Added: LM Studio settings gain an API-key field for servers with "Require Authentication" on; the MCP tab shows a **read-only badge** on tools whose server declares them read-only; Account view links to the Cline web app's data-use privacy settings; the extension package now ships third-party license notices. Changed: with no saved model the Cline provider now starts on the **first free model instead of Claude Sonnet 5.5**; the reasoning-effort dropdown shows the effort a new task will actually use and adds a Default entry that clears the saved setting; a provider's model list refreshes after saving.
Source: https://github.com/cline/cline/releases/tag/v4.1.27

**Notable cli-v3.0.75 (CLI).** One-shot runs (prompt argument or piped stdin) now start in **yolo mode instead of act mode**, since nobody is at the keyboard to approve tools — act mode is kept when auto-approve is off (`--auto-approve false` / saved setting), when a mode flag is passed, when plan mode is saved, or for `/team` prompts; `--timeout` and Ctrl+C now stop the **first turn** of a one-shot run; the CLI no longer reads `.env` or `bunfig.toml` from the launch directory.
Source: https://github.com/cline/cline/releases/tag/cli-v3.0.75

**Notable sdk/sdk/v0.2.1 (SDK).** `read_files` results are no longer re-cut to the 8k tool-result cap on the way to the provider (they use the 50k file-content cap), while command/search/MCP/custom tool results keep the 8k cap; models needing interleaved reasoning now get a placeholder `reasoning_content` on assistant messages lacking one, fixing Reflection Beam's `400 Missing required parameter: 'messages[n].reasoning_content'` after compaction or a model switch (fact carried as `ModelInfo.metadata.interleavedReasoningField`); the summarizer now prefers going without reasoning rather than disabling it.
Source: https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.1

**Notable desktop-v0.0.50.** Thinking picker offers a **Max** reasoning effort for models whose top level is max; a manual `/compact` can be stopped (previously could sit on "Thinking…" with no Stop button when the summarizer stalled); Settings → About gains a third-party notices entry; on macOS, Check for Updates runs once instead of twice; refreshed colours and typography.
Source: https://github.com/cline/cline/releases/tag/desktop-v0.0.50

---

## Crush (`charmbracelet/crush`, npm `@charmland/crush`)

**NEW IN-WINDOW — rolling `nightly` tag re-cut** at `2026-11-22T00:45:44Z`. Body is the standard charmbracelet artifact-verification block (cosign + `checksums.txt` + sigstore bundle instructions) with **no feature list** — treat as a rolling build, not a feature release.
Source: https://github.com/charmbracelet/crush/releases/tag/nightly

**VERIFIED NEGATIVE — no in-window stable.** npm `@charmland/crush` `latest` remains `0.102.0`, published `2026-11-19T17:31:58.016Z`, packument modified `2026-11-19T17:31:58.266Z` (both pre-window). GitHub `v0.102.0` = `2026-11-19T17:30:03Z`.
Source: https://registry.npmjs.org/@charmland/crush

---

## Amp / Sourcegraph (`@sourcegraph/amp`)

**NEW IN-WINDOW — six npm dev publishes.** All under the `0.0.<epoch>-g<sha>` scheme, one every ~4 h:

| Version | npm publish (UTC) |
|---|---|
| `0.0.1795233642-g42d75f` | `2026-11-21T04:27:04.090Z` |
| `0.0.1795248037-g480079` | `2026-11-21T08:25:06.353Z` |
| `0.0.1795262446-g9f3ad9` | `2026-11-21T12:20:59.420Z` |
| `0.0.1795276835-g0feb0c` | `2026-11-21T16:29:33.603Z` |
| `0.0.1795291233-g08aa82` | `2026-11-21T20:21:36.641Z` |
| `0.0.1795305655-gf675ab` | `2026-11-22T00:27:54.193Z` |

npm dist-tags after the window: `latest` = `0.0.1795305655-gf675ab`, `next` = `0.0.1778732631-gc5875c-singleexe`. Packument `time.modified` = `2026-11-22T00:27:54.384Z`. These are rolling, unversioned dev builds — **not** tagged releases.
Source: https://registry.npmjs.org/@sourcegraph/amp

**ACCESS GAP — Amp's GitHub release channel is unreachable.** `https://api.github.com/repos/sourcegraph/amp/releases` returns `Not Found` (HTTP 404), and the same for `sourcegraph/amp-cli`, `sourcegraph/ampcode`, `sourcegraph/sg-amp`. `https://ampcode.com/changelog` → HTTP 404, body `{"error":"not_found","path":"/changelog"}`. `https://ampcode.com/manual/changelog` → HTTP 404. `https://ampcode.com/feed.xml` → HTTP 404. `https://ampcode.com/news` → HTTP 200 but its newest entry is **10 Nov 2026** ("Boxes"); the RSS "Notes →" stream also stops at Aug 2026. **Amp's non-npm release/announcement surface could not be read for this window — treat absence of Amp tagged releases as a GAP, not as absence of activity.**
Source: https://api.github.com/repos/sourcegraph/amp/releases
Source: https://ampcode.com/news

---

## Block goose (`aaif-goose/goose`)

**VERIFIED NEGATIVE — no in-window release.** Newest tag `v1.60.2` published `2026-11-20T08:48:21Z` (Atom `updated`; `published_at` `2026-11-20T06:18:55Z`) — pre-window. Ancillary `oi-kit-v0.1.0-alpha.15` = `2026-11-19T19:50:06Z` — pre-window.
Source: https://github.com/aaif-goose/goose/releases.atom

---

## OpenHands (`OpenHands/OpenHands`)

**VERIFIED NEGATIVE — no in-window release.** Newest `v1.43.0` = `2026-11-20T19:03:08Z` (Atom `updated`; `published_at` `2026-11-20T18:51:00Z`) — pre-window. Previous `v1.42.0` = `2026-11-18T16:46:40Z`.
Source: https://github.com/OpenHands/OpenHands/releases.atom

---

## Kilo Code (`Kilo-Org/kilocode`)

**VERIFIED NEGATIVE — no in-window release.** Newest `v7.8.32` = `2026-11-20T14:45:09Z` — pre-window. `v7.8.31` = `2026-11-19T20:09:04Z`; JetBrains line `jetbrains/v7.2.1-rc.9` = `2026-11-19T21:28:30Z`.
Source: https://github.com/Kilo-Org/kilocode/releases

---

## Zed (`zed-industries/zed`)

**VERIFIED NEGATIVE — no in-window release.** Newest tag of any kind is stable `v1.29.3` = `2026-11-20T16:10:31Z`; the newest prerelease is `v1.30.2-pre` = `2026-11-20T15:57:54Z`; `v1.29.2` = `2026-11-18T21:44:41Z` — all pre-window. Both `v1.29.3` and `v1.30.2-pre` were reported as in-window items in the 2026-11-21 cycle; that was correct for that cycle's window and must not be re-counted here.
Source: https://github.com/zed-industries/zed/releases/latest

---

## opencode (`anomalyco/opencode`, npm `opencode-ai`)

**VERIFIED NEGATIVE — no in-window release.** Newest GitHub tag `v2.3.2` = `2026-11-18T01:35:12Z`; `v2.3.1` = `2026-11-18T00:17:57Z`; `v1.19.6` = `2026-11-17T07:21:32Z`; `process-daemon v0.6.0` = `2026-11-16T23:36:04Z`. npm `opencode-ai` `latest` = `1.19.6` published `2026-11-17T07:22:20.263Z`; last dev snapshot `0.0.0-dev-202611170722` = `2026-11-17T07:46:23.892Z`; packument modified `2026-11-17T07:46:24.073Z`. All pre-window. Dist-tags also include `latest-0` = `1.0.142`, `latest-1` = `1.1.4`; snapshot identifiers observed include `0.0.0-snapshot-pnpm-202511302105` and `0.0.0-snapshot-proxy-202512080622`.
Source: https://github.com/anomalyco/opencode/releases.atom
Source: https://registry.npmjs.org/opencode-ai

---

## Aider, Continue, Warp, pydantic-ai — VERIFIED NEGATIVES

- **Aider** (`Aider-AI/aider`, PyPI `aider-chat`): newest GitHub tag `v0.86.3.dev` = `2026-02-12T00:42:25Z`; PyPI `latest` = `0.86.2` uploaded `2026-02-12T00:42:52.678771Z`. Nothing in-window.
  Source: https://github.com/Aider-AI/aider/releases.atom
  Source: https://pypi.org/pypi/aider-chat/json
- **Continue** (`continuedev/continue`): newest tag `v2.1.0-vscode` = `2026-06-19T00:24:00Z`. Nothing in-window.
  Source: https://github.com/continuedev/continue/releases.atom
- **Warp** (`warpdotdev/Warp`): newest release `v0.2026.06.09.19.54.dev_00` = `2026-06-09T19:54:42Z`. npm `warp-cli` is an unrelated placeholder package (`latest` 0.0.1, last modified 2022-06-28). Nothing in-window.
  Source: https://api.github.com/repos/warpdotdev/Warp/releases
- **pydantic-ai** (PyPI): `latest` = `2.71.0` uploaded `2026-11-19T02:45:42.336985Z`; `2.70.0` = `2026-11-17T23:30:18.369856Z`. Nothing in-window.
  Source: https://pypi.org/pypi/pydantic-ai/json

---

## First-party announcements

**Anthropic newsroom — VERIFIED NEGATIVE (no in-window post).** Newest post is **"Anthropic announces closing of initial public offering…"**, published **Nov 20, 2026** (`/news/ipo-close`) — pre-window. (Page markup shows a "Latest news / November 22, 2026" caption in the featured top bar; that is the page's own date label, not a post date — the featured article beneath it is "Introducing Claude Fable 5.2 and Claude Mythos 5.2" dated Nov 9, 2026.) Full IPO-close detail for context: 1,127,000,000 Class A shares at **$83.00/share** including full exercise of the underwriters' option (147,000,000 additional shares); 1,103,351,354 sold by Anthropic and 23,648,646 by selling stockholders; gross proceeds ~**$93.5B**, of which ~$91.6B to Anthropic; plus a concurrent private placement of 313,253,007 Class N shares to AMD, Broadcom, Google, Micron, Microsoft, NVIDIA and TSMC Partners at $83.00 for ~**$26.0B**; aggregate gross ~$119.5B. **ANT began trading on Nasdaq under "ANT" on November 19, 2026.**
Source: https://www.anthropic.com/news/ipo-close
Source: https://www.anthropic.com/news

**OpenAI news / blog — VERIFIED NEGATIVE.** Newest RSS item `Fri, 20 Nov 2026 10:00:00 GMT` (pre-window); `https://openai.com/news/research-rss.xml` returns HTTP 404 (research feed not exposed at that path) — recorded as a gap.
Source: https://openai.com/news/rss.xml

**GitHub changelog blog — VERIFIED NEGATIVE.** Newest entry `Fri, 20 Nov 2026 21:49:29 +0000` — "Security advisory permissions are now generally available" (pre-window by ~3.6 h); then "GitHub Enterprise Server 3.23 release candidate" (20:41:26Z), "Pin your favorite repositories to your dashboard" (14:12:05Z). Nothing dated Nov 21.
Source: https://github.blog/changelog/feed/

---

## Status pages — VERIFIED NEGATIVES

- **Anthropic** (`status.anthropic.com`): `All Systems Operational`, **0 incidents** in the incident feed.
  Source: https://status.anthropic.com/api/v2/summary.json
- **OpenAI** (`status.openai.com`): newest incident `2026-11-19T16:01:12Z` — "Elevated error rates for gpt-6 Luna API requests" (pre-window). Others: `2026-11-17T17:46:15Z` "Costs API data is delayed"; `2026-11-18T12:15:02Z` "Elevated conversation errors for Free and Go users".
  Source: https://status.openai.com/api/v2/incidents.json
- **GitHub** (`githubstatus.com`): newest incident `2026-11-19T17:06:26.807Z` — "Disruption with some GitHub services"; also `2026-11-19T15:56:02.730Z` "Degraded availability for GPT-6 Luna in Copilot"; `2026-11-18T09:00:12.808Z` "Degraded Availability for MAI Code 2 Flash in Copilot". All pre-window.
  Source: https://www.githubstatus.com/api/v2/incidents.json

---

## Security advisories — VERIFIED NEGATIVE for all tracked packages

No advisory published in-window for any tracked package. Latest per package (all pre-window):
- Claude Code: `GHSA-5xjx-9qx6-jcrv` "TOCTOU Race in Edit Tool Allows File Writes Out…" published `2026-11-09T22:42:03Z`, fixed in `2.1.251`.
- GitHub Copilot CLI: `GHSA-9ccr-r5hg-74gf` (2026-05-11), `GHSA-g8r9-g2v8-jv6f` (2026-03-06).
- Gemini CLI: `GHSA-wpqr-6v78-jr5g` (2026-04-24).
- Codex: `GHSA-w5fx-fh39-j5rw` (2025-09-19), `GHSA-xrxf-jgv3-qmrm` (2026-04-14).
- Cline: `GHSA-3cj3-hqcr-g934` (2026-09-24).
- `@charmland/crush`, `@qwen-code/qwen-code`, `@sourcegraph/amp`, `opencode-ai`: **zero advisories ever** on OSV.

The GitHub global advisory feed's newest entries are all `2026-11-20T23:37–23:50Z` (Budibase, contao, wcmatch, svglib, memtomem-stm, AIT-GUI) — pre-window and unrelated to tracked tools.
Source: https://api.github.com/advisories?per_page=20&sort=published&direction=desc
Source: https://api.osv.dev/v1/query

---

## Market signal — Anthropic (ANT), Nasdaq GS

**No in-window price bar** — the window (Sat 01:28Z → Sun 01:28Z) contains no trading session. Last two closes:

| Session (UTC) | Open | High | Low | Close | Volume |
|---|---|---|---|---|---|
| 2026-11-19 | 111.50 | 115.10 | 92.72 | **97.17** | 857,312,300 |
| 2026-11-20 | 89.86 | 92.56 | **83.05** | **88.91** | 399,561,400 |

Both sessions are **pre-window** (Fri Nov 20 closed 21:00:02Z). Yahoo meta at capture: `regularMarketPrice` 88.91, `regularMarketChangePercent` −8.501 %, `fulldayChangePercent` −9.653 %, `fiftyTwoWeekHigh` 115.1, `fiftyTwoWeekLow` 83.05, `exchangeName` NMS (NasdaqGS), `longName` "Anthropic, PBC".

**Interpretation.** The 2026-11-20 session was a ~8.5 % down day on half the prior day's volume, closing **0.86 above the IPO price of $83.00** and setting a fresh 52-week low of **$83.05** intraday, versus a $111.50 first-day open and a $115.10 first-day high. The IPO has therefore given back roughly its entire first-day premium in two sessions, with the Nov 20 low printing essentially at the offering price. A single low-volume Friday session with a large down move is a thin, price-discovery tape rather than a decisive signal; the meaningful read for this cycle is that **no trading occurred in-window** and no post-IPO stabilisation has yet been observed beyond it.

Source: https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d

## SEC EDGAR — Anthropic, PBC (CIK 0002130357)

**VERIFIED NEGATIVE — no new filing after 2026-11-19, therefore none in-window.** Most recent filings: `2026-11-19` `424B4` (0001628280-26-074944), `2026-11-19` `FWP` (0001628280-26-074937), two `S-8` (0001628280-26-074934, …-074931); then `2026-11-18` `EFFECT` (9999999995-26-003574) and three `Form 3` (0002158079-26-000002, 0002158002-26-000002, 0002158441-26-000002). The `424B4` + `EFFECT` pair is the IPO final prospectus/notice — i.e. the offering closed on the 19th, and nothing has been filed since.
Source: https://data.sec.gov/submissions/CIK0002130357.json

---

## ACCESS GAPS (endpoints that failed — NOT evidence of absence)

1. `https://api.github.com/repos/sourcegraph/amp/releases?per_page=15` → **404 Not Found** (also `sourcegraph/amp-cli`, `sourcegraph/ampcode`, `sourcegraph/sg-amp`). Amp's GitHub release channel is unreadable this cycle.
2. `https://ampcode.com/changelog` → **404**, body `{"error":"not_found","path":"/changelog"}`; `https://ampcode.com/manual/changelog` → **404**; `https://ampcode.com/feed.xml` → **404**.
3. `https://antigravity.google/release-notes` → **404**; the working page is `https://antigravity.google/docs/changelog`.
4. `https://www.anthropic.com/news/rss.xml` → **404** (Anthropic exposes no news RSS at that path).
5. `https://openai.com/news/research-rss.xml` → **404**.
6. `https://docs.github.com/en/copilot/how-tos/use-copilot-agents/release-notes` → **404 "Page not found"**; the Copilot CLI release-notes surface could not be located at that path.
7. `https://aistudio.google.com/learn/introducing-the-gemini-api-cli` → HTTP 200 but **client-side rendered**; the body is not in the served HTML (only the shell + "Google AI Studio"), so content was recovered via search snippets and the Gemini API changelog instead. `https://aistudio.google.com/learn` likewise contains no `gemini-api-cli` link in served markup.
8. **GitHub REST API rate limit exceeded** (HTTP 403, "API rate limit exceeded for 77.183.83.190") hit late in the run — the per-tag Qwen Code release body, the Amp repo probes, and some release-body re-fetches failed. Affected bodies were recovered from earlier captures (`gh_QwenLM_qwen-code.json`) or from Atom feeds.
9. `https://query1.finance.yahoo.com/…` intermittently returned **429 Edge: Too Many Requests**; `query2` and later `query1` retries with a browser UA succeeded.
10. SEC browse Atom endpoint returned `NoSuchKey`; `https://data.sec.gov/submissions/CIK0002130357.json` succeeded.
11. `https://api.github.com/repos/github/copilot-cli/commits?since=2026-11-21T01:28:00Z` → **empty list** (tags exist, commit query does not surface them).

---

## Explicit verified negatives — index

| Tool / surface | In-window release? | Last pre-window release |
|---|---|---|
| Claude Code (npm + GitHub) | **No** | `2.1.330` — 2026-11-20T19:16:01Z (npm) / 22:32:56Z (GitHub) |
| Claude Agent SDK | **No** | `0.3.330` — 2026-11-20T19:18:50Z |
| claude-code-action | **No** | `v1.0.286` — 2026-11-20T22:41:08Z |
| OpenAI Codex (stable + all prereleases + SDK) | **No** | `rust-v0.173.0-alpha.4` — 2026-11-21T00:35:19Z (53 min pre-window) |
| Gemini CLI stable / preview | **No** | `0.70.0` (2026-11-19T21:13:43Z) / `0.71.0-preview.0` (2026-11-19T20:54:57Z) |
| Gemini API CLI | **No** | `v0.5.0` — 2026-11-20T00:49:52Z |
| Antigravity (App/CLI/IDE/SDK) | **No** | App `v2.34.0` — Nov 20; CLI `v1.2.8` — Sep 22 |
| Copilot CLI **stable** | **No** | `1.0.114` — 2026-11-18T06:00:58Z |
| Qwen Code `preview` | **No** | `0.28.1-preview.1` — 2026-11-20T20:11:56Z |
| Goose | **No** | `v1.60.2` — 2026-11-20T06:18:55Z |
| OpenHands | **No** | `v1.43.0` — 2026-11-20T18:51:00Z |
| Kilo Code | **No** | `v7.8.32` — 2026-11-20T14:45:09Z |
| Zed | **No** | `v1.29.3` — 2026-11-20T16:10:31Z |
| opencode | **No** | `v2.3.2` — 2026-11-18T01:35:12Z |
| Crush stable | **No** | `0.102.0` — 2026-11-19T17:31:58Z |
| Aider | **No** | `0.86.2` — 2026-02-12 |
| Continue | **No** | `v2.1.0-vscode` — 2026-06-19 |
| Warp | **No** | `v0.2026.06.09…` — 2026-06-09 |
| pydantic-ai | **No** | `2.71.0` — 2026-11-19T02:45:42Z |
| Anthropic newsroom | **No** | `/news/ipo-close` — Nov 20 |
| OpenAI news / release notes | **No** | Nov 20 |
| GitHub changelog blog | **No** | 2026-11-20T21:49:29Z |
| SEC (CIK 0002130357) | **No** | `424B4` — 2026-11-19 |
| Anthropic / OpenAI / GitHub status | **No incident** | 2026-11-19 (all three) |
| Security advisories (all tracked pkgs) | **No** | 2026-11-09 (Claude Code) |
| ANT stock | **No session** | close 88.91 on 2026-11-20 |

---

## Corrections to prior-cycle premises (2026-11-21 → 2026-11-22)

1. **"Qwen Code v0.28.3 is out-of-window" — CORRECTED.** v0.28.3 (GitHub `2026-11-21T01:45:48Z`, npm `2026-11-21T02:07:38.809Z`) **is in-window** for this cycle. The prior cycle's exclusion was correct for its own window and must not be carried forward. Qwen Code v0.28.3 is the largest genuine feature release of the 2026-11-22 cycle (third managed channel adapter = GitHub; Generic Webhook channel + destinations; `/send`; unified Web Shell chat contract; Generated-UI view-state preservation; Mods in ACP).
2. **"Claude Code `stable` dist-tag moved 2.1.311 → 2.1.323 on 2026-11-20" — the move is now PRE-WINDOW and has NOT repeated.** `stable` is still `2.1.323` with `time.modified` unchanged at `2026-11-20T22:34:39.628Z`. Lag remains 7 versions. The tag moved once and froze again.
3. **"Codex 0.172.0-alpha.x shipped" — remains FALSE and is now closed.** Only `rust-v0.172.0-alpha.2` (2026-11-19) exists; no `0.172.0` stable ever shipped; the line was superseded by 0.173.0. Codex had **zero** publishes of any kind in-window.
4. **"gemini nightly not frozen" — CONFIRMED and extended.** Nightlies shipped daily (20261120 → 20261121 → 20261122), but the 20261122 nightly is a **no-op re-publish of the identical commit** (`geecccfcd5`, `ahead_by: 1`, the single commit being `chore(release)`), so "nightly published" ≠ "new code published" for that tag.
5. **New premise to add to the baseline: Claude Code and Codex both went silent in-window** after a daily/4-hourly cadence — Claude Code's first full no-release day since 2026-11-17, Codex's first no-publish window since 2026-11-17. Weekend effect is the leading hypothesis; do not later misreport this as a freeze.
6. **New premise: Copilot CLI's stable channel has been unfrozen-less for ~4 days** — `latest` = `1.0.114` (Nov 18) while the prerelease line has advanced `-2` → `-6`; do not equate prerelease movement with a stable release.
7. **Boundary hygiene: `qwen-code` nightly `0.28.3-nightly.20261121.56ef346859` (GitHub 22:28:14Z, npm 22:52:50Z) is in-window**, whereas the `20261120` nightly (22:34:18Z on Nov 20) belongs to the prior cycle. Same for the Gemini `20261121` nightly (01:19:21Z/01:24:57Z on Nov 21) — ~3 min before this window opens, prior cycle.

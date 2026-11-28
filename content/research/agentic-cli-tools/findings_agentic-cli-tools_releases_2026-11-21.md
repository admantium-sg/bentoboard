# Findings — agentic-cli-tools / releases / 2026-11-21

Window: 2026-11-20T01:28:00Z -> 2026-11-21T01:28:00Z

Scope: release/version telemetry + first-party changelogs for tracked agentic CLI tools, plus adjacent first-party (Anthropic, OpenAI, GitHub), SEC/EDGAR and status-page signals. All findings below were synthesized from the raw captures already on disk in `tmp/2026-11-21/releases/` (npm registry JSON, GitHub releases API JSON, GitHub Atom feeds, GitHub changelog RSS, vendor HTML/RSS, statuspage.io JSON, EDGAR Atom, PyPI JSON). No new web retrieval was performed for this file.

---

## Claude Code

- **Claude Code 2.1.330 shipped in-window** — npm `@anthropic-ai/claude-code@2.1.330` published 2026-11-20T19:16:01.070Z; GitHub release `v2.1.330` published 2026-11-20T22:32:56Z. npm dist-tags: `latest` = **2.1.330**, `next` = **2.1.330**, `stable` = **2.1.323**.
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.330

- **The `stable` dist-tag MOVED from 2.1.311 to 2.1.323** — after being frozen at 2.1.311 since Oct 26 (23+ days, 17 releases of drift), `stable` now points at 2.1.323 (itself published 2026-11-12T20:29:28Z). The stable-vs-latest lag therefore shrank from **17 versions to 7** (latest 2.1.330 vs stable 2.1.323), materially weakening the long-running "stable lag" anomaly.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code

- **Caveat on the exact moment of the tag move** — npm does not publish a timestamp for dist-tag changes. The packument's `time.modified` field is **2026-11-20T22:34:39.628Z**, i.e. ~3h19m *after* the 2.1.330 version publish (19:16:01Z) and ~2 minutes after the GitHub release publish (22:32:56Z). That gap is consistent with a separate packument write (the dist-tag move) occurring in-window at ~22:34Z, but it is an inference from `modified`, not a recorded tag-move time. The sibling package `@anthropic-ai/claude-agent-sdk` shows the same pattern (`modified` 2026-11-20T22:34:01Z vs publish 19:18:50Z), suggesting a coordinated tag-flip operation.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code

- **Claude Code 2.1.330 — notable added features** (from the changelog body): Enterprise Admin Console organization sign-in (org settings + org cloud provider/gateway applied after `claude auth login`); **`easel`**, a new built-in mod that renders charts on request and under MCP metrics results (Pro/Max/Team/Enterprise, macOS+Linux, toggleable via `/config`); `CLAUDE_CODE_FULL_SIGN_IN_LINK=1` to emit the full sign-in link; self-hosted runner `--start-dir` / `SELF_HOSTED_RUNNER_START_DIR`; `commandPrinted`/`commandFailed` fields in `claude plugin install --json`; two new self-hosted-runner `/metrics` series (`..._order_to_registered_seconds`, `..._order_to_first_session_seconds`); VS Code: `/fork` to fork a conversation, `/workflows` agent map, `escapeStopsClaude`, `pinPrompt`, `contextUsageThreshold` settings.
  Source: https://docs.claude.com/en/release-notes/claude-code (raw capture: `cc_changelog.md`)

- **Claude Code 2.1.330 — notable changed/improved items**: reverted 2.1.329's removal of the automatic `max_tokens` retry; recurring scheduled tasks and `/loop` extended from 7 to **30 days**; more `rm` commands against root/home/top-level/working dir now require approval (refused if nobody can answer); `--teleport` prints git branch-switch commands instead of running them; subagents/forks/compaction stay on the session model for skills with a `model` setting (except `context: fork` skills); self-hosted runner `spawn-runner` hooks now run concurrently (4 by default via `--hook-concurrency`); 14 improvements (faster file diffs, faster `/config` search, shorter claude.ai sign-in link, Code Mode told how to read images/PDFs) and 98 bug fixes (freeze-after-compact, WebFetch freezes, `ExitWorktree` deleting another session's worktree, settings lost on concurrent saves).
  Source: https://docs.claude.com/en/release-notes/claude-code (raw capture: `cc_changelog.md`)

- **Claude Code 2.1.329 (context, pre-window)** — released 2026-11-19; added a trust dialog naming where a folder's hooks are declared, a warning when managed-settings hooks fail to load in non-interactive hosts, `/tasks` now listing scheduled tasks / `/loop` wakeups / forks, and an MCP "Server message" row for remote HTTP MCP servers that refuse connections.
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.329

- **Claude Agent SDK 0.3.330 published in-window** — npm `@anthropic-ai/claude-agent-sdk@0.3.330` at 2026-11-20T19:18:50.922Z; dist-tags `latest` = `next` = 0.3.330 (lockstep with the CLI's 0.3.330-style versioning).
  Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

- **Claude Code GitHub Action v1.0.285 and v1.0.286** published in-window (2026-11-20T22:39:22Z and 22:41:08Z). v1.0.285's only listed change: "Use the base branch's version of files that the workflow's inputs name" (#2099). v1.0.286 carries no changelog entries beyond the compare link.
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.286

---

## Codex (OpenAI)

- **Codex stable unchanged at 0.171.0 — no new stable release in-window.** `rust-v0.171.0` was published 2026-11-20T00:44:47Z (npm 00:51:14Z), i.e. ~43 minutes *before* this window opened, and was already reported in the 2026-11-20 cycle. npm `@openai/codex` `latest` remains **0.171.0**; `@openai/codex-sdk` `latest` remains **0.171.0**.
  Source: https://registry.npmjs.org/@openai/codex

- **Four Codex prereleases shipped in-window: 0.173.0-alpha.1 → .4** — GitHub: `rust-v0.173.0-alpha.1` 2026-11-20T02:50:37Z, `.2` 2026-11-20T20:44:46Z, `.3` 2026-11-20T22:23:53Z, `.4` 2026-11-21T00:35:19Z. npm `alpha` dist-tag advanced to **0.173.0-alpha.4** (npm 2026-11-21T00:43:29Z, i.e. inside the window), with platform-specific artifacts (linux-x64/arm64, darwin-x64/arm64, win32-x64/arm64) for each.
  Source: https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4

- **Correction on the 0.172.0-alpha.x line** — the only 0.172.0-alpha release visible in the raw captures is `rust-v0.172.0-alpha.2`, published **2026-11-19T15:40:25Z (pre-window)** and already reported in the 2026-11-20 cycle. No in-window 0.172.0-alpha.x publish exists in the captured data.
  Source: https://github.com/openai/codex/releases (raw capture: `codex.atom`, `gh_releases.json`)

- **Codex alpha release bodies remain content-free stubs** — recurring pattern continues: each of `rust-v0.173.0-alpha.1..4` has a body of exactly 25 characters ("Release 0.173.0-alpha.N") with no changelog, only a version string. By contrast the stable `rust-v0.171.0` body is ~27.7 KB.
  Source: https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4

- **OpenAI's ChatGPT & Codex changelog lists "Codex CLI 0.171.0" dated 2026-11-20** — the first-party product changelog entry surfaces the stable 0.171.0 release under Nov 20 (day-level date only, so it cannot be separated from the 00:44Z pre-window publish).
  Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes (raw capture: `o_a2538c.html`)

---

## Gemini CLI

- **Gemini CLI nightly shipped in-window at the 0.71.0 line** — npm `@google/gemini-cli@0.71.0-nightly.20261121.geecccfcd5` published 2026-11-21T01:24:57.863Z (inside the window, which closes 01:28Z); GitHub release `v0.71.0-nightly.20261121.geecccfcd5` published 2026-11-21T01:19:21Z. The npm `nightly` and `staging-tmp` dist-tags both point at this build.
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5

- **Gemini CLI 0.71.0-nightly.20261121 body** — two fixes: expand Windows home-relative paths using tilde and backslash (#30376); resume the most recently *active* session instead of the most recently *started* one (#30389).
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5

- **Gemini CLI stable/preview unchanged in-window** — npm `latest` remains **0.70.0** (2026-11-19T21:13:43Z), `preview` remains **0.71.0-preview.0** (2026-11-19T20:54:57Z). No new stable or preview build inside the window.
  Source: https://registry.npmjs.org/@google/gemini-cli

- **Boundary note on the previous nightly** — `0.71.0-nightly.20261120.gd4cb1713f` was published 2026-11-20T01:18:23Z, ~10 minutes *before* this window opened (its GitHub tag `v0.71.0-nightly.20261120.gd4cb1713f` at 01:12:42Z, body ~9.6 KB), so it belongs to the previous cycle, not this one.
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261120.gd4cb1713f

---

## Copilot CLI

- **Copilot CLI 1.0.115-2 published in-window** (GitHub 2026-11-20T14:33:56Z, npm 2026-11-20T14:37:53.387Z) — a large (~42 KB body) prerelease. Highlights: Windows sandbox package queries enabled by default (opt out via `sandbox.userPolicy.capabilities = []`); specific macOS Mach service lookups permitted in sandboxed commands via `sandbox.userPolicy.seatbelt.extraMachLookups` without Keychain access; `Ctrl+X` then `A` in `/model` to add/switch to custom provider models; **Gemini 4 Hydrogen** added to the model picker with Extra High reasoning where available; `/sandbox policy` shows the GitHub account used for sandboxed `gh`; `showTimelineTimestamps` setting for start/end/elapsed times on timeline items; **GPT-6.2 Astra** support; **MAI-Code-2-Flash** in the picker under New models; native extensions can activate lazily on slash-command invocation; Browser Use updated to 0.2.1 with session-scoped tabs and preview display naming.
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-2

- **Copilot CLI 1.0.115-3 published in-window** (GitHub 2026-11-20T21:36:53Z, npm 2026-11-20T21:36:58.006Z) — single fix: keep the `@` mention picker visible until an empty search finishes, so `Ctrl+Y` and `Tab` resume their normal actions when it closes.
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.115-3

- **Copilot stable unchanged** — npm `@github/copilot` `latest` remains **1.0.114**; the `prerelease` dist-tag now points at 1.0.115-3, and `unstable` remains 1.0.111-unstable.r44588354783.g40dd772 (2026-11-19). The npm package `@github/copilot-cli` does not exist (404).
  Source: https://registry.npmjs.org/@github/copilot

---

## Qwen Code

- **Qwen Code v0.28.1-preview.1 published in-window** (2026-11-20T19:20:36Z). The release body is a single changelog line ("test(managed-agent): observe a real scheduled /loop fire in the full-stack E2E", #17506) — an odd payload for a preview tag, and identical to the body text carried by the nightly entries.
  Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.1

- **Qwen Code nightly v0.28.0-nightly.20261120.19b31401f5 published in-window** (2026-11-20T22:34:18Z), carrying the same single-line body. The previous nightly on record is v0.28.0-nightly.20261118.d9ac287c9f (2026-11-18) — so the nightly line skipped Nov 19.
  Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0-nightly.20261120.19b31401f5

- **Boundary observation: Qwen Code v0.28.3 landed just *after* the window closed** — GitHub release `v0.28.3` published 2026-11-21T01:45:48Z, i.e. ~18 minutes after the 2026-11-21T01:28:00Z window boundary, with the same single-line body. It is therefore out-of-window for this cycle and will be the headline item for 2026-11-22.
  Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3

---

## Goose

- **Goose v1.60.2 published in-window** (GitHub 2026-11-20T06:18:55Z; Atom feed entry updated 2026-11-20T08:48:21Z). Contents: feature "Gemini 4 Neon added to the model catalog" (#13684) and fix "Thinking levels now sent to Gemini 4 and later, including xhigh" (#13673). Predecessor v1.60.1 was 2026-11-18 (pre-window).
  Source: https://github.com/aaif-goose/goose/releases/tag/v1.60.2

- **Goose ancillary tag oi-kit-v0.1.0-alpha.15** published 2026-11-19T19:50:06Z (pre-window, ~6 h before the window opens) — recorded here for completeness of the goose tag stream.
  Source: https://github.com/aaif-goose/goose/releases/tag/oi-kit-v0.1.0-alpha.15

---

## Kilo Code

- **Kilo Code v7.8.32 published in-window** (2026-11-20T14:45:09Z). Patch-level change: prevent held keys and repeated close commands from confirming worktree deletion in Agent Manager (#14982) — use the Delete confirmation button or a separate Backspace/Delete press.
  Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.32

- **No new JetBrains release-candidate in-window** — the newest JetBrains tag is `jetbrains/v7.2.1-rc.9` at 2026-11-19T21:28:30Z (pre-window); rc.8 is 2026-11-17. `v7.8.31` (2026-11-19T20:09:04Z) and `v7.8.30` (2026-11-16) are also pre-window. Note the npm package name `kilo-code` does not exist (404).
  Source: https://github.com/Kilo-Org/kilocode/releases

---

## Zed

- **Zed v1.30.2-pre published in-window** (2026-11-20T15:57:54Z, prerelease): fixed prompt caching for reusable OpenAI system instructions on GPT-6.2 and later (#67253); fixed Text Finder showing results from the previous query when a search found no matches (#67188).
  Source: https://github.com/zed-industries/zed/releases/tag/v1.30.2-pre

- **Zed stable v1.29.3 published in-window** (2026-11-20T16:10:31Z), carrying the same two fixes against the stable branch (#67252, #67189).
  Source: https://github.com/zed-industries/zed/releases/tag/v1.29.3

---

## Crush

- **Crush rolling `nightly` tag updated in-window** (2026-11-21T00:43:41Z). The body is the standard charmbracelet nightly artifact-verification block (cosign + checksums.txt + sigstore bundle instructions) with no feature list.
  Source: https://github.com/charmbracelet/crush/releases/tag/nightly

- **Crush stable unchanged** — npm `@charmland/crush` `latest` remains **0.102.0** (2026-11-19T17:31:58Z, pre-window); no new stable release inside the window.
  Source: https://registry.npmjs.org/@charmland/crush

---

## Amp (Sourcegraph)

- **Amp npm `latest` advanced in-window** — `@sourcegraph/amp@0.0.1795204834-g00d70a` published 2026-11-20T20:25:59.815Z, with five more builds during the window (04:30, 08:31, 09:27, 12:21, 16:28Z). The `next` dist-tag remains 0.0.1778732631-gc5875c-singleexe.
  Source: https://registry.npmjs.org/@sourcegraph/amp

- **GitHub releases for `sourcegraph/amp` are not retrievable** — the API returns HTTP 404 for that repo path in this capture (the org/repo appears renamed or moved), so Amp's release notes could not be correlated with the npm builds. The unrelated npm package `amp` (latest 0.3.1, published 2013) is not Amp.
  Source: https://api.github.com/repos/sourcegraph/amp/releases (404 in capture)

---

## OpenHands

- **OpenHands v1.43.0 published in-window** (2026-11-20T18:51:00Z). Features: create automations enabled from the setup wizard (#19769); a Features page for experimental user feature flags including Conversation reactions (#19503); experimental decision cards rendered in chat (#19789); agent message edits shown in chat (#19794); conversation indicator icon on automation run rows (#19903). Fixes: keep the setup form when switching conversations (#19860); list Experimental last, after Secrets (#19881). Performance: virtualize the conversation message list.
  Source: https://github.com/OpenHands/OpenHands/releases/tag/v1.43.0

---

## opencode

- **No new opencode release in-window** — newest remains `v2.3.2` (2026-11-18T01:35:12Z, pre-window), followed by v2.3.1 (2026-11-18T00:17:57Z) and process-daemon-v0.6.0 (2026-11-16). The GitHub repo has moved from `sst/opencode` to `anomalyco/opencode` (release URLs reflect the new owner). npm `opencode-ai` `latest` remains 1.19.6 (2026-11-17) with the newest dev build `0.0.0-dev-202611170722` — both pre-window, and no npm publish inside the window.
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.2

---

## Antigravity (Google)

- **Antigravity App v2.34.0 released 2026-11-20** (page-dated only, no time-of-day granularity, so it falls inside the window on the day reading). Headline: "Gemini 4 Neon, MCP Apps, and more" — MCP App support and Gemini 4 Neon for eligible paid consumer plans, 15 improvements and 24 fixes. Improvements include Gemini 4 Neon + Orchestrator (Neon) for eligible paid consumer plans and Gemini API keys / Application Default Credentials, Enterprise support for the Orchestrator, a choice of Enter vs Ctrl+Enter (Cmd+Enter) for sending messages, Cmd+E (Ctrl+E) to start a side question from selected terminal output, single-column line-number gutter with color-coded change strips in diff views, draggable conversation tabs into the message box, auto-formatted URLs as interactive links, clicking a skill pill opens its definition file in the side panel, macOS 26 Dark Mode-adaptive Dock icon, and new Clerk / Docusign / TestMu AI partner plugins in the Marketplace.
  Source: https://antigravity.google/release-notes (raw capture: `antigravity.html`)

---

## pydantic-ai

- **No new pydantic-ai release in-window** — PyPI `pydantic-ai` `info.version` remains **2.71.0**, uploaded 2026-11-19T02:45:42Z (pre-window). The preceding releases 2.70.0 (2026-11-17T23:30:18Z) and 2.69.0 (2026-11-17T01:52:44Z) are also pre-window; the cadence is roughly every 2–4 days and nothing landed inside the window.
  Source: https://pypi.org/pypi/pydantic-ai/json

---

## Anthropic first-party

- **Anthropic published "Anthropic announces closing of initial public offering…"** (news post, category Announcements, topics Funding / Partnerships) — `datePublished` **2026-11-20T00:00:00.000Z**, `dateModified` / sitemap `lastmod` **2026-11-20T12:41:01.161Z**. Key content: closing of an aggregate **1,127,000,000 Class A shares at $83.00/share**, including full exercise of the underwriters' option for an additional 147,000,000 shares; 1,103,351,354 shares sold by Anthropic and 23,648,646 by selling stockholders; gross proceeds ≈ **$93.5 billion**, of which ≈ $91.6 billion went to Anthropic; **Class A began trading on Nasdaq Nov 19, 2026 under "ANT"**; plus a concurrent unregistered private placement of **313,253,007 Class N shares** to AMD, Broadcom, Google, Micron, Microsoft, NVIDIA and TSMC Partners at the same $83.00 price for ≈ **$26.0 billion**.
  Source: https://www.anthropic.com/news/ipo-close

- **Granularity caveat on the ipo-close timestamp** — the `datePublished` value carries midnight-of-day granularity only (00:00:00.000Z on Nov 20), which nominally sits ~88 minutes *before* the window opens; the only intra-day signal is `dateModified` at 12:41:01Z, which is squarely in-window. The post was also **not captured in the 2026-11-20 cycle** (the news index only carried it from this cycle's fetch), so it is reported here as a genuinely missed first-party item.
  Source: https://www.anthropic.com/sitemap.xml (lastmod 2026-11-20T12:41:01.161Z)

- **Anthropic /research/formal-verification was re-touched in-window, not new** — the page "LLMs are making formal software verification feasible at a much larger scale" still carries `datePublished` 2026-10-22T00:00:00Z, but `dateModified` / sitemap `lastmod` moved to **2026-11-20T18:45:25.849Z**. This is an edit to an existing October post, not a new publication.
  Source: https://www.anthropic.com/research/formal-verification

- **Anthropic /legal was re-touched in-window, not new** — sitemap `lastmod` **2026-11-20T18:23:54.023Z** for the "Legal Center" page; the captured HTML exposes no `datePublished`/`dateModified` metadata, so only the sitemap timestamp is available. Again an edit, not a new page.
  Source: https://www.anthropic.com/legal

- **Anthropic's distillation-defenses post is old context, not a new publication** — "Strengthening our defenses against distillation attacks" has `datePublished` **2026-10-12T00:00:00Z** and `dateModified` 2026-10-17T05:44:23Z, i.e. it predates this window by more than a month. Its substance (Anthropic says it has reduced illicit distillation by more than 90%) is the counterpart to OpenAI's new post below.
  Source: https://www.anthropic.com/news/distillation-defenses

- **Anthropic S-1 news post also old** — "Anthropic files S-1 with the SEC for proposed initial public offering" has `datePublished` 2026-10-26 and `dateModified` 2026-11-12T16:11:50Z; both outside the window.
  Source: https://www.anthropic.com/news/s1-sec

---

## OpenAI first-party

- **OpenAI published "Combatting adversarial distillation"** (2026-11-20T10:00:00Z, in-window). Description: "OpenAI's layered approach to adversarial distillation combines model training, safeguards, detection, and enforcement to protect against capability extraction." This is the direct first-party counterpart to Anthropic's month-old "Strengthening our defenses against distillation attacks" post, and the two together indicate a simultaneous capability-extraction hardening push by both labs.
  Source: https://openai.com/index/combatting-adversarial-distillation

- **Other OpenAI RSS items dated Nov 20 fall outside the window** — "Hebbia sees improvements in financial research with GPT-6 Astra" and "Can AI help scientists identify promising drug candidates?" (medchembench) are both stamped 2026-11-20T00:00:00Z (midnight granularity, before the 01:28Z window open) and are therefore not in-window items.
  Source: https://openai.com/news/rss.xml

- **No other OpenAI blog post in-window** — the RSS stream shows the next-newest item at 2026-11-19T08:00Z ("How OpenAI's Performance Factory keeps ChatGPT fast"), and nothing between 2026-11-20T10:00Z and the 2026-11-21T01:28Z window close.
  Source: https://openai.com/news/rss.xml

---

## GitHub changelog

- **"Security advisory permissions are now generally available"** — published 2026-11-20T21:49:29Z (in-window). The accompanying post page is captured in the raw set.
  Source: https://github.blog/changelog/2026-11-20-security-advisory-permissions-are-now-generally-available

- **"GitHub Enterprise Server 3.23 release candidate"** — published 2026-11-20T20:41:26Z.
  Source: https://github.blog/changelog/2026-11-20-github-enterprise-server-3-23-release-candidate

- **"Pin your favorite repositories to your dashboard"** — published 2026-11-20T14:12:05Z.
  Source: https://github.blog/changelog/2026-11-20-pin-your-favorite-repositories-to-your-dashboard

- **"GitHub Desktop now supports multiple accounts per host"** — published 2026-11-20T02:06:01Z (in-window; note the URL slug carries the 2026-11-19 date while the RSS pubDate is Nov 20).
  Source: https://github.blog/changelog/2026-11-19-github-desktop-now-supports-multiple-accounts-per-host

---

## SEC / EDGAR

- **No new Anthropic SEC filing in-window** — the EDGAR submissions feed for CIK 0002130357 (Anthropic, PBC; ticker ANT) shows the newest filing dates as 2026-11-19 × 4 (424B4, FWP, S-8, S-8) and 2026-11-18 × 9 (EFFECT, plus seven Form 3s and one more S-8). **Zero filings dated 2026-11-20 or 2026-11-21.**
  Source: https://data.sec.gov/submissions/CIK0002130357.json

- **The 424B4 / EFFECT sequence remains the last action** — the 424B4 prospectus (accession 0001628280-26-074944) and the EFFECT notice of effectiveness (9999999995-26-003574) are the terminal filings; nothing has been filed since.
  Source: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002130357

- **EDGAR full-text search returns 37 "ANTHROPIC"-named entities, but only one is Anthropic, PBC** — the company-name search matches a long tail of unrelated funds (Anthropic Capital Fund LP, Anthropic Fund I–IV series of CGF2021, Anthropic — Incepto AGI Funds LLC, Anthropic — Iron Pine GoldenArc Co-Invest LLC, BVP XI a series of Bloom Opportunities Fund I LLC, etc.). All feed entries in this capture carry a common timestamp of 2026-11-20T20:31:57-05:00, which is a search-result refresh stamp, not a filing event by Anthropic.
  Source: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=anthropic

---

## Status pages

- **No new Anthropic status incident in-window** — the Anthropic incident feed's newest entries remain "Elevated errors for Claude Mythos 5.2 and Claude Fable 5.2" (2026-11-19T09:10:24Z, resolved, last update 09:33:18Z), "Claude Meetings auto-join limited on the Team plan" (2026-11-16, last update 2026-11-19T02:15:05Z), and "Elevated errors affecting the Google Docs connector" (2026-11-18). Nothing created or updated on/after 2026-11-20T01:28Z.
  Source: https://status.anthropic.com/api/v2/incidents.json

- **No new OpenAI status incident in-window** — newest is "Elevated error rates for gpt-6 Luna API requests" (2026-11-19T16:01:12Z, resolved, last update 16:58:04Z); the page's `updated_at` is 2026-11-19T16:58:04Z, i.e. the feed itself has not moved since before the window opened.
  Source: https://status.openai.com/api/v2/incidents.json

- **No new GitHub status incident in-window** — the incident list's newest is "Disruption with some GitHub services" (2026-11-19T17:06:26.807Z, resolved) and "Degraded availability for GPT-6 Luna in Copilot" (2026-11-19T15:56:02.730Z). The GitHub status *page* metadata did move (`updated_at` 2026-11-20T23:41:45.770Z) and the incident list is at its 50-item cap, so a very recent incident could in principle be truncated off the list; however the page update timestamp alone carries no incident content.
  Source: https://www.githubstatus.com/api/v2/incidents.json

---

## Security advisories

- **No new advisory affecting any tracked agentic-CLI tool** — the captured GitHub Advisory Database feed contains 66 advisories published inside the window, all in unrelated ecosystems (Budibase, contao/core-bundle, wcmatch, Inscriptis, svglib, NLTK, baserCMS, NATS Server, TeamPass, pREST, containerd, Storyblok, eml_parser, Jupyter MCP Server DNS-rebinding, Git LFS, Falcon Rust, NATS/MQTT-over-WebSocket, etc.). None targets claude-code, codex, gemini-cli, copilot-cli, opencode, goose, crush, kilo, zed, amp, openhands, pydantic-ai, qwen-code or Antigravity.
  Source: https://api.github.com/advisories?per_page=100

- **Two advisories are marginally adjacent to the tracked space and are flagged, not counted** — GHSA-xrgv-7vx6-5vx6 (CVE-2026-105802, "Git LFS may execute arbitrary commands via crafted Git configurations", 2026-11-20T14:58:53Z) and GHSA-9x8x-crjq-g64h (CVE-2026-77359, "Jupyter MCP Server: Browser DNS rebinding can hijack the Jupyter backend through management routes", 2026-11-20T00:12:51Z). Neither affects a tracked agentic CLI product.
  Source: https://github.com/advisories/GHSA-xrgv-7vx6-5vx6

---

## Verified negatives

Each negative below was actively checked against a captured source; the URL checked is given.

- **No new Cursor CLI changelog entry in-window** — the newest entry in the captured CLI changelog is `v2026.11.17` (Nov 17), followed by v2026.11.14 and v2026.11.12; nothing on Nov 20/21.
  Source: https://cursor.com/changelog/cli

- **Cursor PRODUCT changelog still frozen at Nov 6** — the product changelog feed's newest entry remains "Voice Chat with Agents" (2026-11-06T00:00:00Z), ahead of it only "Build Live Apps in Cursor" (Nov 5) and "Agent SDK" (Oct 20). Nothing new in-window.
  Source: https://cursor.com/changelog (feed: https://cursor.com/changelog/rss.xml)

- **No new in-window Anthropic status incident** — newest incident created 2026-11-19T09:10:24.815Z (resolved); no incident created or updated at/after 2026-11-20T01:28Z.
  Source: https://status.anthropic.com/api/v2/incidents.json

- **No new in-window OpenAI status incident** — newest incident created 2026-11-19T16:01:12Z (resolved); the status page `updated_at` is 2026-11-19T16:58:04Z, before the window.
  Source: https://status.openai.com/api/v2/incidents.json

- **No new in-window GitHub status incident** — newest incident created 2026-11-19T17:06:26.807Z (resolved). (Caveat: the incident list is at its 50-item cap and the page-level `updated_at` moved to 2026-11-20T23:41:45.770Z, so a brand-new incident could theoretically sit outside the captured slice.)
  Source: https://www.githubstatus.com/api/v2/incidents.json

- **No new Anthropic SEC filing after the Nov-19 424B4 / Nov-18 EFFECT** — the submissions feed contains zero filings dated 2026-11-20 or 2026-11-21; the newest filingDate is 2026-11-19.
  Source: https://data.sec.gov/submissions/CIK0002130357.json

- **No new Google blog post after Nov 19** — the Google blog RSS feed's newest entry is "Introducing Tool Retrieval in the Gemini API" (2026-11-19T18:00:00Z); all subsequent entries in the feed are older. Nothing in-window.
  Source: https://blog.google/rss/

- **No new Codex stable release in-window** — `rust-v0.171.0` published 2026-11-20T00:44:47Z, ~43 min before the window opened; no later non-prerelease Codex tag exists in the feed.
  Source: https://github.com/openai/codex/releases.atom

- **No new Gemini CLI stable or preview release in-window** — npm `latest` = 0.70.0 and `preview` = 0.71.0-preview.0, both published Nov 19.
  Source: https://registry.npmjs.org/@google/gemini-cli

- **No new Copilot CLI stable release in-window** — npm `latest` remains 1.0.114 (Nov 18); only 1.0.115-2 and 1.0.115-3 (both prereleases) landed in-window.
  Source: https://registry.npmjs.org/@github/copilot

- **No new Goose release before v1.60.2 in-window** — v1.60.1 (2026-11-18) and v1.60.0 (2026-11-17) both pre-date the window; v1.60.2 is the only goose application release inside it.
  Source: https://github.com/aaif-goose/goose/releases.atom

- **No new opencode release in-window** — newest is v2.3.2 (2026-11-18T01:35:12Z); the npm `opencode-ai` line likewise has no publish after 2026-11-17.
  Source: https://github.com/anomalyco/opencode/releases

- **No new Crush stable release in-window** — npm `latest` remains 0.102.0 (2026-11-19T17:31:58Z).
  Source: https://registry.npmjs.org/@charmland/crush

- **No new pydantic-ai release in-window** — PyPI `info.version` 2.71.0 uploaded 2026-11-19T02:45:42Z.
  Source: https://pypi.org/pypi/pydantic-ai/json

- **No new JetBrains Kilo release candidate in-window** — newest is jetbrains/v7.2.1-rc.9 at 2026-11-19T21:28:30Z.
  Source: https://github.com/Kilo-Org/kilocode/releases

- **No new Anthropic research or news publication besides ipo-close** — the Anthropic sitemap lists exactly three in-window `lastmod` values (news/ipo-close, /legal, /research/formal-verification); the latter two are edits to October/undated pages.
  Source: https://www.anthropic.com/sitemap.xml

- **No security advisory published in-window affects a tracked agentic-CLI tool** — 66 in-window GitHub advisories were scanned by summary/description/package text; none names claude-code, codex, gemini-cli, copilot-cli, opencode, goose, crush, kilo, zed, amp, openhands, pydantic-ai, qwen-code or Antigravity.
  Source: https://api.github.com/advisories?per_page=100

---

## Corrections to prior-cycle premises

- **CORRECTION — the "@google/gemini-cli `nightly` tag is frozen at 0.67.0-nightly.20261104" premise is FALSE.** The long-standing claim (repeated in the 2026-11-12, 11-13, 11-14, 11-15 and 11-18 cycles) is wrong. The `nightly` dist-tag now points at **0.71.0-nightly.20261121.geecccfcd5** (npm 2026-11-21T01:24:57.863Z), and the nightly line has been shipping daily on the 0.71.0 track: 0.71.0-nightly.20261120.gd4cb1713f (2026-11-20T01:18:23Z, pre-window by ~10 min) preceded it. The 0.67.0-nightly.20261104 pin described a state of the `nightly` tag that no longer holds; the nightly channel is currently healthy and daily. Prior cycles that reported "nightly frozen" were reading a stale baseline and mis-stated the trend.
  Source: https://registry.npmjs.org/@google/gemini-cli

- **CORRECTION — the Claude Code npm `stable` dist-tag is no longer frozen at 2.1.311.** Prior cycles (through 2026-11-20) recorded `stable` = 2.1.311, unchanged since Oct 26 with 17 releases of drift. It has now moved to **2.1.323**. The stable-vs-latest lag has therefore fallen from **17 versions to 7** (stable 2.1.323 vs latest 2.1.330). The "persistent stable-lag anomaly" framing no longer holds at its prior magnitude. Note that 2.1.323 itself was published 2026-11-12T20:29:28Z, so the tag now points at a version roughly eight days old — the stable channel moved, but it moved to a mid-flight version rather than to `latest`. npm does not expose a dist-tag change timestamp; the only available signal is the packument `time.modified` = 2026-11-20T22:34:39.628Z (vs the 2.1.330 version publish at 19:16:01.070Z), which implies the tag write occurred in-window at approximately 22:34Z.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code

- **CORRECTION — the "Codex 0.172.0-alpha.x shipped in-window" framing is not supported by the raw data.** The only 0.172.0-alpha release in the captured GitHub feed is `rust-v0.172.0-alpha.2` at 2026-11-19T15:40:25Z, i.e. pre-window and already reported in the 2026-11-20 cycle. The in-window Codex prereleases are **0.173.0-alpha.1, .2, .3 and .4** only.
  Source: https://github.com/openai/codex/releases.atom

- **CORRECTION — "Qwen Code v0.28.3" is out-of-window.** v0.28.3 was published 2026-11-21T01:45:48Z, ~18 minutes after the window closes. The in-window Qwen Code items are v0.28.1-preview.1 (19:20:36Z) and v0.28.0-nightly.20261120.19b31401f5 (22:34:18Z).
  Source: https://github.com/QwenLM/qwen-code/releases.atom

- **MINOR CLARIFICATION — Anthropic's distillation-defenses post is not new.** The captured page carries `datePublished` 2026-10-12 and `dateModified` 2026-10-17; it is the *context* for OpenAI's new "Combatting adversarial distillation" post, not a same-window Anthropic publication.
  Source: https://www.anthropic.com/news/distillation-defenses

- **MINOR CLARIFICATION — the "Gemini CLI nightly" claim in the 2026-11-20 cycle was itself already stale.** That cycle reported the 20261120 nightly as its baseline; the 20261121 nightly landed 2026-11-21T01:19:21Z / 01:24:57Z, inside this window. The two cycles together confirm a healthy daily nightly cadence rather than a freeze.
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5

---

## Access gaps

- **GitHub API rate limiting hit during capture** — a follow-up fetch of full release bodies failed with HTTP 403 "rate limit exceeded" for five releases: `anthropics/claude-code v2.1.330`, `github/copilot-cli v1.0.115-2`, `All-Hands-AI/OpenHands v1.43.0`, `Kilo-Org/kilocode v7.8.32`, `charmbracelet/crush nightly`. Release bodies in `gh_releases.json` are therefore truncated to 1500 characters for these entries; the Claude Code 2.1.330 body was recovered in full from the changelog markdown capture instead.
  Source: raw capture `full_bodies.txt`

- **A second GitHub API call was rate-limited outright** — `qwen_rel.json` contains only the error payload "API rate limit exceeded for 77.11.85.85". Qwen Code release data in this file comes solely from the Atom feed capture (`qwen.atom`), which is complete but gives no `body_len`/description metadata.
  Source: raw capture `qwen_rel.json`

- **Two tracked repos are unavailable via the GitHub releases API in this capture** — `sourcegraph/amp` and `google-gemini/gemini-cli-hooks` both return HTTP 404. Amp's activity was covered via the npm `@sourcegraph/amp` line only; `gemini-cli-hooks` has no coverage at all in this cycle.
  Source: https://api.github.com/repos/sourcegraph/amp/releases (404)

- **No OSV capture exists in the raw set** — there is no `osv*.json` file, so the "no new OSV advisory" negative could not be checked directly against OSV. What was verified is the equivalent GitHub Advisory Database feed (`gh_adv.json`), which returned 66 in-window advisories, none affecting tracked tools. OSV-only advisories (e.g. PyPI/RustSec/Go-vulndb entries not mirrored to GitHub) remain unchecked.
  Source: https://osv.dev (not captured this cycle)

- **npm package-name mismatches caused 404s for three tracked projects** — `@github/copilot-cli`, `kilo-code` and `pydantic-ai` do not exist as npm packages (404), and `amp` / `goose` / `zed` on npm are unrelated third-party packages with pre-2015 publish dates. Those projects were therefore covered via their GitHub releases or PyPI only.
  Source: https://registry.npmjs.org/kilo-code (404)

- **Two Anthropic/OpenAI status-page endpoints returned redirects instead of JSON** — `anth_unres.json` and `st_0751cd2f.json` contain Cloudflare 301 "Moved Permanently" HTML rather than data, so unresolved-incident lists could not be parsed for those two endpoints. The main incident feeds (`anth_inc.json`, `st_81a67532.json` OpenAI, `st_b631a6ca.json` GitHub) parsed cleanly.
  Source: raw captures `anth_unres.json`, `st_0751cd2f.json`

- **An EDGAR pagination request failed** — `edgar_atom3.xml` contains only the error "Invalid count, Received: 15, Count must be one of: 10, 20, 30 …", so the third-page EDGAR query returned no data. Coverage of Anthropic's own filing history rests on the CIK submissions JSON and `edgar_atom2.xml`, both of which parsed cleanly and agree there are no filings after 2026-11-19.
  Source: raw capture `edgar_atom3.xml`

- **No time-of-day granularity on several day-level timestamps** — the Antigravity v2.34.0 release (Nov 20), the Anthropic ipo-close `datePublished` (2026-11-20T00:00:00Z), the Cursor changelog entries and the OpenAI RSS midnight-stamped items cannot be resolved to a precise hour, so their in-window placement rests on the date alone.
  Source: https://antigravity.google/release-notes

- **`tmpf` is a duplicate of `sitemap.xml`** — byte-identical copy of the Anthropic sitemap; no distinct capture exists under that name.
  Source: raw capture `tmpf`

# Agentic CLI Tools — Releases / Features / Announcements
Cycle: 2026-11-13 (window 2026-11-12T01:28:00Z → 2026-11-13T01:28:00Z)
Subagent A — releases & features focus. All times UTC.

---

## 1. Claude Code — v2.1.323 (Nov 12, 2026) — IN WINDOW, MAJOR RELEASE

npm `@anthropic-ai/claude-code` published **2.1.323 at 2026-11-12T20:29:28Z** (dist-tags: latest=2.1.323, next=2.1.323, stable=2.1.311). Previous in-cycle latest was 2.1.322 (2026-11-10T01:58:41Z). So yes — a new release shipped after v2.1.322.
Source: https://registry.npmjs.org/@anthropic-ai/claude-code
Source: https://code.claude.com/docs/en/changelog (heading "2.1.323 — November 12, 2026")

Headline feature — **Code Mode**:
> "Added Code Mode, an experimental opt-in in which Claude writes JavaScript to call its tools; see https://code.claude.com/docs/en/code-mode to turn it on, or to turn it off for an organization"

Selected exact release-note text (2.1.323), "Added":
- "Added `engines["claude-code"]` to `plugin.json`: plugins outside their stated Claude Code version range are not installed, updated or loaded, and install and update pick the newest version that fits"
- "Added type checking of a plugin's TypeScript hooks module to `claude plugin validate`; each finding is a warning, and `--strict` fails on it"
- "Added to `claude plugin validate` the `$` nouns a mod's `engine.create` hook adds, withholds or replaces"
- "Added support for `CLAUDE_CODE_AUTO_MODE_MODEL` in managed settings for Claude Desktop sessions on third-party providers"
- "Added an options menu (stop, switch to usage credits, upgrade) when a model needs usage credits that are turned off or used up"
- "Added a progress heartbeat every 30 seconds while hooks run long in `claude -p` and SDK sessions, so a host such as Claude Desktop won't end the turn as hung"
- "Added `.docx` support to Artifact tool asset uploads"
- "Added a `/diff to close` hint to the diff panel"
- "Added a start-up warning for Bash allow rules with a `*` in a variable's value, such as `Bash(PORT=* npm run dev)`"
- "Added `CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES` … set it to `1` to turn off subagent progress summaries (anthropics/claude-code#86879)"
- "Added `CLAUDE_CODE_RESUME_HINT_COMMAND`"
- "Added `unsetOptionCount` to the `claude plugin install --json` result"
- "[VSCode] Added a Claude Code trust prompt before the first session in a folder you haven't trusted"
- "[VSCode] Added the live output of a running Bash or PowerShell command to the chat"
- "[Claude Code on the web] Added the No repository option to the repository picker … on a self-hosted environment"
- "[Claude Tag] Added Claude Tag sessions started in Slack to the Compliance API on Enterprise plans, in beta"
- "[Code Review] Added a Download CSV button to Code Review admin settings: export review costs per repository by month, week or day"

Selected exact release-note text (2.1.323), "Changed" (security/sandbox-relevant — most likely connected to the carry-over TOCTOU advisory):
- "Changed the Bash sandbox on macOS, Linux and WSL to ignore write access granted through a symlink in a writable folder that leads elsewhere or to a missing path; grant the real path instead"
- "Changed the sandbox on macOS and Linux: `git worktree add`, move and remove now fail read-only, as do commits in a worktree the session wasn't started in or given, even one inside the project"
- "Changed worktree creation to refuse checkouts whose `.git` folders are links or hold hard links, such as git-new-workdir layouts and `cp -al` copies; use a plain clone"
- "Changed start-up to stop when a `--settings` file isn't valid JSON and has a `sandbox` key, even one that turns the sandbox off"
- "Changed Claude Code's own ripgrep and most internal git commands to run without most of its sign-in tokens and API keys, so a credential helper or hook under such a git command no longer finds them"
- "Changed `/security-review` to ask before Claude runs it, and skills' inline git commands to stop in bare-repository worktrees and similar folders until you allow them, outside auto mode and bypass"
- "Changed the context window assumed for a model ID that Claude Code doesn't recognize from 200K to 1M; use `/autocompact` to compact earlier, or `CLAUDE_CODE_DISABLE_1M_CONTEXT=1` to keep 200K"
- "Changed how many messages each of your sessions on the same machine can send the others without a prompt from you, from about 20 to 100,000"
- "Changed `MCP_SDK_GENERATION=v1` to run the v2 MCP client in a compatibility mode … because the v1 MCP client is removed"
- "Changed the maximum of `CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS` from 64000 to 300000"
- "Changed organization settings and policy requests to no longer use a proxy set only by `ALL_PROXY`; set `HTTPS_PROXY` if your network needs a proxy for them"

Fixes (subset, exact text):
- "Fixed Bash allow rules with an attached wildcard, such as `Bash(ls*)`, skipping the permission prompt in some cases; a rule that names a variable, such as `Bash(NODE_ENV*)`, now asks"
- "Fixed a case where the Bash sandbox could switch off during a session"
- "Fixed a case where Bash permission checks judged an `rm` from the wrong folder and skipped the dangerous-removal prompt under bypass permissions or a Bash allow rule"
- "Fixed `--permission-mode auto` or a settings `defaultMode: auto` starting in a mode that could allow more when auto mode was unavailable. It now starts in Manual mode, which asks first"
- "Fixed plan files sometimes being written outside the project when `plansDirectory` is set; a write that can't be shown to stay inside the project is now refused"
- "Fixed Edit and Bash running out of memory on certain `/proc` files, and Edit hanging or running out of memory on devices and named pipes"
- "Fixed macOS: Changed the Bash sandbox so `lsof` and similar tools may show less about processes a command did not start"

Scale: the changelog entry carries counters "**Show 21 improvements**" and "**Show 195 bug fixes**" (i.e. ~21 improvements + 195 bug fixes listed/expanded).

**CVE / advisory status (explicit):** I grepped the entire rendered changelog page for `CVE-\d{4}-\d+` and `GHSA-[a-z0-9-]+` patterns → **zero matches**. So **v2.1.323's release notes do NOT explicitly acknowledge CVE-2026-88968 / GHSA-5xjx-9qx6-jcrv (TOCTOU Edit sandbox escape)** by identifier. However, the 2.1.323 "Changed" list contains substantial sandbox/worktree hardening of the same family (symlink-derived write grants ignored; worktree hard-link/symlink `.git` checkouts refused; `git worktree add/move/remove` now fail read-only; sandbox-keyed invalid `--settings` startup abort; "a case where the Bash sandbox could switch off during a session"). Whether Anthropic considers these the fix for the TOCTOU advisory is NOT stated. Treat as UNCONFIRMED — plausible-but-unacknowledged hardening, not a confirmed advisory fix.
Source: https://code.claude.com/docs/en/changelog

---

## 2. Codex CLI (openai/codex) — alpha line advanced to 0.170.0-alpha.4 / rust-v0.171.0-alpha.1 — NO STABLE RELEASE IN WINDOW

GitHub releases (published_at):
- `rust-v0.171.0-alpha.1` — 2026-11-12T23:23:26Z — prerelease — body is a stub: "Release 0.171.0-alpha.1"
- `0.170.0-alpha.4` — 2026-11-12T23:03:38Z — prerelease — body stub: "Release 0.170.0-alpha.4"
- `0.170.0-alpha.3` — 2026-11-12T19:37:30Z — prerelease — body stub: "Release 0.170.0-alpha.3"
- `0.170.0-alpha.2` — 2026-11-12T01:34:33Z — prerelease — body stub: "Release 0.170.0-alpha.2"
Source: https://github.com/openai/codex/releases
Source: https://api.github.com/repos/openai/codex/releases

npm `@openai/codex`: `latest` dist-tag is still **0.167.2** (unchanged — carry-over value confirmed still current). `alpha` dist-tag = **0.170.0-alpha.4** (platform builds for darwin-x64/arm64, win32-arm64/x64 published 2026-11-12T23:11–23:14Z). No `0.170.0` or `0.171.0` stable on npm.
Source: https://registry.npmjs.org/@openai/codex

**Answer to carry-over question:** No stable 0.17x release shipped in-window. Only prerelease alphas, and their release notes are **stubs with no changelog content** ("Release 0.170.0-alpha.N"). No "real notes" to report. The most recent release with actual notes remains `rust-v0.167.2` (published 2026-11-11T22:44:46Z, i.e. just before the window), whose notes were: "Codex now sends tool updates incrementally by default on Google Cloud Vertex AI. To opt out, set `incremental_tools_legacy_gcp = false` under `[features]` in `config.toml`." — recorded for reference only, it is out of window.
Source: https://github.com/openai/codex/releases/tag/rust-v0.167.2

## 3. Crush (charmbracelet/crush) — v0.101.0 (Nov 12, 2026) — IN WINDOW

- `v0.101.0` — published **2026-11-12T16:02:35Z** (stable). Release title: "# Skill toggles, tool timers and a faster Hyper ⚡"
  - Exact text: "Skills can now be switched on and off right from the command palette. Broken skills are easy to spot, too! (they're marked with a red × and the reason they failed)"
  - Section "🕐 How long is this taking?" — a tool-execution timer/elapsed-time indicator (release notes truncated at 700 chars in my fetch; the section heading is confirmed, full body not fully captured).
- `nightly` — published **2026-11-13T00:47:12Z** (prerelease). Body is the standard Sigstore/cosign verification boilerplate (checksums.txt + checksums.txt.sigstore.json, `cosign verify-blob`), i.e. **no feature notes** in the nightly body.
Source: https://github.com/charmbracelet/crush/releases/tag/v0.101.0
Source: https://api.github.com/repos/charmbracelet/crush/releases

## 4. OpenHands — v1.40.0 (Nov 12, 2026) — IN WINDOW

- `v1.40.0` — published **2026-11-12T14:22:00Z** (stable). Header: "## 1.40.0 (2026-11-12)"
  - Features: "feat: improve Codex subscription authentication guidance by @xunjizhe in https://github.com/OpenHands/OpenHands/pull/17194"
  - Bug Fixes: "fix(chat): keep messages at tied history page boundaries by @enyst in #19649"; "fix(chat): prevent delayed echoes from deleting newer drafts by @marcello-pichini in #19382"; "fix(chat): activate the home model pick when a self-hosted instance turns Agent Profiles off by @hieptl in #19682"
  - Note the release notes are auto-generated from PR titles; the full fix list was truncated in my fetch, so I do not claim completeness.
Source: https://github.com/All-Hands-AI/OpenHands/releases/tag/v1.40.0
Source: https://api.github.com/repos/All-Hands-AI/OpenHands/releases

## 5. GitHub Copilot CLI — 1.0.110 (Nov 12, 2026) — IN WINDOW

- `1.0.110` — published **2026-11-12T22:59:42Z** (stable). Body dated "2026-11-12":
  - "Experimental: answer git, ssh, and sudo password prompts from agent commands in a masked dialog (enable with /experimental on)"
  - "Avoid unnecessary error popups during Microsoft Entra sign-in when an organization account is available"
  - "Screen readers identify the current session and announce when sessions need attention or are idle in the Sessions list"
  - "/usage model rows wrap at the terminal width instead of breaking at 100 columns"
  - "The / command picker no longer lists, preselects or runs a skill for a word that the skill's description hides inside a terminal escape sequence; only words the description shows match"
  - "Preserve keys typed just as the Ctrl+X shortcut window closes"
- `1.0.110-3` — published **2026-11-12T01:32:29Z** (prerelease) — same fixes minus the experimental password-prompt line. (Just inside the window: window opens 2026-11-12T01:28:00Z.)
Source: https://github.com/github/copilot-cli/releases/tag/1.0.110
Source: https://api.github.com/repos/github/copilot-cli/releases

## 6. Gemini CLI — NO new stable/preview release in window; nightly advances to 0.70.0-nightly.20261113

- npm `@google/gemini-cli`: dist-tags unchanged — latest=**0.68.0** (published 2026-11-10T21:22:49Z), preview=**0.69.0-preview.0** (2026-11-10T21:11:43Z), nightly=0.67.0-nightly.20261104.g89e9d25d6. Both latest and preview are the carry-over values, and both are **out of window**.
- npm `@google/gemini-cli-core`: dist-tags — latest=0.68.0, preview=0.69.0-preview.0, nightly=0.67.0-nightly.20261104.g89e9d25d6, staging-tmp=**0.70.0-nightly.20261113.gb9776560e**.
  - Nightly builds published in-window: `0.70.0-nightly.20261113.gb9776560e` at **2026-11-13T01:20:03Z** (last nightlies: .20261112.gaeb6c04b0 at 2026-11-12T01:18:26Z — just before window; .20261111.ge5d88fb2c 2026-11-11T01:12:23Z).
  - Nightly builds carry **no release notes** — they are version-stamp only.
- GitHub `google-gemini/gemini-cli` releases: latest is `Release v0.68.0` (2026-11-10T21:17:07Z) then `Release v0.69.0-preview.0` (2026-11-10T21:05:08Z). Nothing newer.
Source: https://registry.npmjs.org/@google/gemini-cli
Source: https://registry.npmjs.org/@google/gemini-cli-core
Source: https://github.com/google-gemini/gemini-cli/releases

**Gemini Decisions API / gemini-decision-1 (carry-over):** I pulled the full OpenRouter model list (https://openrouter.ai/api/v1/models) and filtered for "decision" and "gemini". **Zero models whose id contains "decision"** — the Gemini model IDs on OpenRouter are google/gemini-4-hydrogen, google/gemini-4-carbon, google/gemini-omni-1.2-flash, google/gemini-4-argon, google/gemini-nano-banana-2.1, google/gemini-3.8-flash, google/gemini-3.7-flash, google/gemini-3.6-flash, google/gemini-3.5-flash-lite, google/gemini-3-pro-image, etc. **No new development this cycle: gemini-decision-1 / Gemini Decisions API is still NOT available on OpenRouter.** (LiteLLM / Pydantic AI were not directly queried this cycle — treat as unverified.)
Source: https://openrouter.ai/api/v1/models

## 7. opencode (anomalyco/opencode) — NO in-window release

Latest is still `v2.2.7` (published 2026-11-10T10:37:15Z, out of window). The two most recent tags are component releases, not CLI releases: `process-daemon-v0.5.2` (2026-11-11T21:34:04Z) and `process-daemon-v0.5.1` (2026-11-11T18:27:09Z). **Nothing in window.**
Source: https://github.com/anomalyco/opencode/releases

## 8. Zed — no new stable in window; nightly + a collab-staging build in window

- `v1.29.1-pre` — **published 2026-11-11T19:20:02Z** (prerelease) → just **outside** the window (the atom `<updated>` stamp of 2026-11-12T21:09:27Z reflects a later edit, not the publish). Release intro: "This week's release includes a Git Panel branch mode that lists every file changed since a base branch, a bookmark picker, configurable Git date formats, support for Claude Fable 5.2 for Anthropic BYOK users (plus Claude Mythos 5.2 if your organization has access), and a setting to turn off automatic agent thread titles."
  - Notable AI item: "Added an `agent.auto_generate_thread_titles` setting (default `true`) that can be set to `false` to disable automatic title generation for Zed Agent threads. (#63998)"
- `v1.28.1` — published 2026-11-11T19:08:27Z (stable) → out of window. Included "Improved compatibility with the latest Agent Client Protocol, including handling of missing sessions, plan updates, diff formats, and cancellation of permission requests. (#66425)"
- `nightly` — **2026-11-12T08:49:36Z** → in window (rolling build, no notes).
- `collab-staging: language_models: Detect OpenRouter Anthropic` — **2026-11-12T16:04:51Z** → in window (staging tag; suggests Zed is adding OpenRouter Anthropic-model detection on the language-models path).
Source: https://github.com/zed-industries/zed/releases
Source: https://api.github.com/repos/zed-industries/zed/releases

## 9. Cursor — NO in-window changelog entry; pricing page materially restructures plan names

**Changelog:** the latest entry on https://cursor.com/changelog is still **Nov 6, 2026 — "Voice Chat with Agents"** ("You can now talk with your agents in a realtime voice call… Voice chat runs on Grok Voice."). The entry before it is Nov 5, 2026 "Build Live Apps in Cursor". **No Cursor changelog entry after Nov 6 — nothing in window.**
Source: https://cursor.com/changelog

**Pricing (https://cursor.com/pricing) — carry-over claim updated.** The plan lineup is now:
- Free — $0/month ("Limited AI usage")
- Plus — $8/month, footnote: "**\*Only Grok models are available on this plan**"; includes "Grok Chat, Voice, Imagine, and Build" and "Grok API access"
- Premium — $30/month ("Most popular"), "4x more usage compared to Plus", "Latest Grok models", "Cloud agents & automations", "Code hosting & AI code reviews", "**Third-party models at API list price**"
- Super — $100/month ("15x more usage compared to Plus"), "Priority model access at peak times"
- Ultra — $200/month ("50x more usage compared to Plus"), "Earliest access to all products & models"
- Teams — $30+/user/month; Enterprise — Custom
- Footnote on Premium/Super/Ultra: "**\*3rd party models are available in Cursor, billed separately by usage**". And in the footer: "**Third Party model usage in Cursor is not included in the monthly prices shown and must be purchased separately.**"

Direct counts on the rendered page: the strings **"Claude" = 0 and "Codex" = 0**, while **"Grok" appears 38 times**. There is no plan named **"Pro"** any more — the $30 tier is now called **"Premium"** (with Super/Ultra above it).

Interpretation (careful, labelled as inference): the carry-over claim that the ~$30 plan "locked users to Grok/X Premium with NO Claude or Codex" is **substantially confirmed in spirit** — Cursor's own pricing page names only Grok, and third-party models (which would include Claude/Codex) are sold as a separate metered SKU at API list price, not bundled. What changed vs. last cycle: the tier is renamed "Premium" (no "Pro"), the ladder is now Plus/Premium/Super/Ultra, and the third-party-model wording is explicit rather than inferred. **I could not verify from the pricing page whether third-party models specifically include Claude and Codex** — the page never names them.
Source: https://cursor.com/pricing

## 10. Conductor — acquisition by Meta confirmed; Cloud shutdown lands today; no new in-window changelog entry

- Site banner and footer now read "**Conductor is joining Meta**" and "Conductor from Meta · © 2026 Meta" (https://www.conductor.build/ and https://www.conductor.build/blog).
- Changelog entry **0.93.0 (November 4, 2026)** — "Conductor is joining Meta": "We'll be winding down Conductor over the next weeks and months: **Conductor Cloud goes read-only on November 13 and shuts down on November 20.** Local Conductor keeps getting new models and critical bug fixes until early 2027. To move a cloud workspace and its chats to your Mac, right-click it and choose **Transfer to local**. To download all your data, go to **Settings → Account → Export data**."
- Changelog entry **0.94.0 (November 9, 2026)** — "Claude Fable 5.2 … is now available in Conductor"; fixes incl. "The 'Read the announcement' link in the Conductor Cloud shutdown banner now opens the announcement instead of the homepage"; Misc: "**Updated the bundled Claude Code to 2.1.321 and Codex to 0.166.0.**"
- **Carry-over answer:** the migration tooling is **Transfer to local** (per cloud workspace) and **Settings → Account → Export data**, both announced Nov 4 (out of window). The newest changelog entry is still **0.94.0 / Nov 9** — **no new Conductor release or migration announcement published in-window**. As of this cycle the read-only date (Nov 13) is *today*; there is no dated post confirming the shutdown has been executed.
Source: https://www.conductor.build/changelog
Source: https://www.conductor.build/

## 11. Anthropic IPO — five FWP filings land in-window (Nov 12); no 424B4, no 8-A12B, no EFFECT yet

EDGAR submissions for **CIK 0002130357 (Anthropic, PBC; ticker "ANT"; no exchange listed yet)**, filings.recent:
- **2026-11-12 — FWP** 0001628280-26-073045 → `anthropicpbc-fwpjapanamend.htm` — "Anthropic, PBC- FWP (Japan Amendment) … Issuer Free Writing Prospectus dated November 11, 2026 … Relating to Preliminary Prospectus dated November 10, 2026 … Registration File No. 333-299633". Text: "On November 10, 2026, Anthropic filed Amendment No. 2 to its Registration Statement on Form S-1 … On November 11, 2026, Anthropic filed a Japanese amended securities registration statement relating to the initial public offering of shares of Class A common stock in Japan with the Kanto Regional Finance Bureau, including a prospectus…"
- **2026-11-12 — FWP** 0001628280-26-073040 → `anthropicpbc-fwpxeeaprospea.htm` — "FWP - EEA Prospectus … dated November 11, 2026 … On November 11, 2026, Anthropic published a prospectus approved and notified to nat[ional competent authority]…" (EEA prospectus)
- **2026-11-12 — FWP** 0001628280-26-072953 → `anthropicpbc-fwpauswrapcap.htm` — "FWP (AUS Wrap, CA Prospectus) … dated November 10, 2026 … On November 10, 2026, Anthropic lodged an Australian prospectus…"
- **2026-11-12 — FWP** 0001628280-26-072952 → `anthropicpbc-fwpukmaterials.htm` — "FWP (UK Materials) … dated November 10, 2026 … On November 10, 2026, a public offer of shares of Anthropic's Class A common stock (t[o retail investors])…"
- **2026-11-12 — FWP** 0001628280-26-072949 → `anthropicpbc-fwpipowebsi.htm` — "dated November 10, 2026 … On November 10, 2026, Anthropic launched a standalone IPO website containing information relating…"
- Earlier (out of window): S-1/A 2026-11-10 (Amendment No. 2), S-1/A 2026-11-02, S-1 2026-10-26, DRS/A series.

**Carry-over answers:**
- **424B4 / 8-A12B / EFFECT: still NONE.** The most recent form filed is FWP (Rule 433 free writing prospectus) x5. Pricing is still not final.
- **Pricing amendment:** the IPO range is still the Nov 10 preliminary range, taken from the Amendment No. 2 S-1/A: "It is currently estimated that the **initial public offering price per share will be between $70.00 and $78.00**. We have applied to list our Class A common stock on the **Nasdaq Global Select Market under the symbol "ANT."**" and "**Class A Common Stock 825,000,000 Shares** … We are selling 801,351,354 shares of Class A common stock and the selling stockholders … are selling an additional 23,648,646 shares … We will not receive any proceeds from the sale of shares of Class A common stock by the selling stockholders." Plus: "we have agreed, severally and not jointly, to purchase an **aggregate of $26.0 billion of our Class N common stock in a private placement** at a price per share equal to the initial public offering price" (with AMD, Broadcom, Nvidia, TSMC among the purchasers named nearby). Underwriters' option: "up to an additional 123,750,000 shares".
  - Note: this range text is from the **Nov 10** S-1/A (out of window) — the in-window FWPs are jurisdictional/structural wrappers around it, not a pricing change.
- **Australian retail tranche:** the AUS FWP (Nov 10 prospectus lodged, filed Nov 12) confirms the Australian tranche exists; **no new date confirmed** for the Nov 17 close beyond the carry-over note. **Not verified in-window.**
Source: https://data.sec.gov/submissions/CIK0002130357.json
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073045/anthropicpbc-fwpjapanamend.htm
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026072484/anthropicpbc-sx1ax2.htm

**Anthropic news index (https://www.anthropic.com/news):** the newest post is still **"Introducing Claude Fable 5.2 and Claude Mythos 5.2" — Nov 9, 2026**; previous posts Oct 26 (S-1 filing) and Oct 18 ("Investing in the public benefit"). The page's top masthead reads "**November 13, 2026**" — that is the page's current-date masthead, **not** a post date (as flagged in the carry-over). **No new Anthropic news post in-window.**
Source: https://www.anthropic.com/news

## 12. Anthropic ETF wave — ANTW IS ACTUALLY TRADING; the others I could check are not

Quote check via Yahoo Finance chart API (real trades, not registrations):
- **ANTW — "Harbor ETF Trust - Anthropic AI Lab Ecosystem ETF"** (NYSE Arca / PCX), last **$21.81**. Daily closes: Nov 3 21.27 (vol 100,000) → Nov 4 20.83 → Nov 5 19.00 (vol 260,100) → Nov 6 19.89 → Nov 9 20.93 → Nov 10 21.02 → Nov 11 21.78 (vol 290,300) → Nov 12 session volume 132,537 with close not yet stamped in my fetch. First trade date ≈ 2026-08-13. **So yes: ANTW is a live, trading, thinly-traded ETF — the first concrete confirmation that at least one of the "Anthropic ETF" tickers actually launched and trades.**
- **AIL** — Yahoo returns a symbol (NMS, firstTradeDate ≈ 2017) but **no longName and no price** → not trading / no data.
- **ANS, ANTU, ANTY, ANTC, ANTQ, ANTO, ANTD, YANT** — Yahoo returns "Not Found / No data found, symbol may be delisted" → **not trading**.
- Stooq CSV quotes were attempted for all eleven tickers and returned an error page for every one (endpoint unusable from here), so the negative results rest on the Yahoo chart API alone.
- **Important caveat:** ANTW's full name is "Anthropic AI Lab Ecosystem ETF" — it may be a thematic/thematic-exposure product rather than a holding of Anthropic, PBC pre-IPO shares. Do not conflate "trading ETF" with "exposure to the Anthropic IPO". **ANT itself (the IPO share, ticker ANT) shows exchangeName "NAS", regularMarketPrice None — not yet trading, consistent with no 424B4/EFFECT.**
Source: https://query1.finance.yahoo.com/v8/finance/chart/ANTW?range=1mo&interval=1d
Source: https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d

## 13. Amp (sourcegraph/amp) — "Bye Bye, Dial" (Nov 12, 2026) — IN WINDOW, NOTABLE FEATURE CHANGE

Amp is closed-source (no GitHub releases feed), so the product news feed is the primary source. **Newest entry, in-window:**
- **"Bye Bye, Dial" — November 12, 2026.** Exact text: "Today we're saying goodbye to **the Dial** and its four modes: **low, medium, high, and ultra**. A **model selector** takes its place: You can now pick the model and its effort for each thread. And you can now also switch both in the middle of a thread. The model selector now also shows you **which of your subscriptions or API keys will be billed for each model, or whether it uses Amp credits**. If you don't want to pick the model yourself, use the **Staff Pick**, which is the model we would choose."
  - Rationale given by Amp: "In January we explained why Amp does not have a model selector. In July we then shipped the Dial so you could focus on how hard a task is instead of thinking about model names and version numbers… But then we added the ability to Amp to bring your own subscriptions and keys, and Amp became free when you do. That changed what the selected model does… **medium** on the Dial could use your Claude plan, or your ChatGPT plan, or Amp credits, and it became very hard to tell who's paying for which model when." Also: "each model in the selector gets a system prompt and tools optimized for it".
- Other (out of window) recent Amp news for context: Nov 9 "Portals on Your Runner"; Nov 6 "Close the Loop" and "Spaces"; Nov 5 "GitLab Integration"; Nov 3 "Service Accounts"; Nov 2 "Artifacts"; Oct 29 "macOS Satellites".
- npm `@sourcegraph/amp`: continuous dev builds with no notes — latest `0.0.1794528069-g919feb` published **2026-11-13T00:24:15Z** (in-window), preceded by `0.0.1794513636-g109` (2026-11-12T20:26Z) and `0.0.1794509747-g977` (2026-11-12T19:21Z). No stable/versioned release notes in-window.
Source: https://ampcode.com/news/bye-bye-dial
Source: https://ampcode.com/news
Source: https://registry.npmjs.org/@sourcegraph/amp

## 14. Google Antigravity CLI — v1.5.7 (Nov 12, 2026) — IN WINDOW

Repo `google-antigravity/antigravity-cli` (GitHub ★2,791; pushed 2026-11-12).
- **`1.5.7` — published 2026-11-12T15:18:30Z (stable).** Exact text: "Changed the default `Agent Mode` from Default to Auto: sessions with no saved mode, including headless `-p` runs, now start in Auto wherever Auto mode is available and in Default elsewhere; to keep the previous behavior, choose Default for `Agent Mode` in `/config`, which saves `"agentMode": ""` to `settings.json`. **A `Tool Permission` setting of `strict` now also takes precedence over Auto and accept-edits modes, so file edits still ask for approval under `strict`.**" (release also contains "Fixed multi-second UI free[ze]…" — truncated at 500 chars in my fetch).
- `1.5.6` — 2026-11-11T17:34:56Z (out of window): "Added the swarm's queen bee to the `/swarm board` header…" and "Added a `continuation_active` field to the JSON input of Stop hooks".
- `1.5.5` — 2026-11-10T16:38:44Z (out of window): swarms preview — "`/swarm <task>` … the agent becomes a coordinator that adds worker agents, each in its own conversation, which work on the task in parallel and collaborate through a shared message board".
- `1.5.4` — 2026-11-10T04:32:55Z (out of window): "Added Auto mode to `agy acp` sessions…".
- npm: no official package (npm `antigravity-cli` is an unrelated 0.0.1 from 2025-11-19; `@google/antigravity-cli` does not exist).
Source: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.5.7
Source: https://api.github.com/repos/google-antigravity/antigravity-cli/releases

## 15. Claude Agent SDK — 0.3.323 (Nov 12, 2026) — IN WINDOW

npm `@anthropic-ai/claude-agent-sdk`: latest **0.3.323**, published **2026-11-12T20:33:59Z** (previous 0.3.322 on 2026-11-10T01:57:38Z). Version-locked to Claude Code 2.1.323 (published 2026-11-12T20:29:28Z), so it inherits the Code Mode / sandbox-hardening changes in §1.
Source: https://registry.npmjs.org/@anthropic-ai/claude-agent-sdk

## 16. OpenAI — in-window announcements, and the carry-over voice deprecation resolved

**Official OpenAI Release Notes (https://openai.com/products/release-notes/) — newest entries are dated Nov 10, 2026 → all OUT of window:**
- **Nov 10, 2026 (ChatGPT, Sunset) — "Retiring Advanced and Standard Voice"**: "We're retiring Advanced and Standard voice from ChatGPT Voice on **December 11, 2026**. In July, we introduced GPT‑Live… voice usage has nearly doubled… Live video and screen-sharing will continue to be powered by Advanced voice until GPT‑Live has this capability."
  - **Carry-over answer: CONFIRMED officially, but the note is dated Nov 10, 2026 — pre-window. No new in-window development on the voice deprecation.**
- Nov 10 (API, GA) "GPT-6 Luna inference residency in India, Japan, and Australia"; Nov 10 (ChatGPT, GA) "Business Hub in ChatGPT"; Nov 10 (Codex, GA) "ChatGPT for iOS updates: pasted attachments, drive switching, and annotation dictation"; Nov 5 "GPT-6-Cyber for authorized vulnerability research".
Source: https://openai.com/products/release-notes/

**OpenAI news RSS (https://openai.com/news/rss.xml) — in-window items (Nov 12, 2026):**
- Nov 12 20:00Z — "How Amplitude ships product improvements in 1–2 days with OpenAI" (customer story)
- Nov 12 12:00Z — "Gondola doubles revenue as its team builds more with Codex" (customer story)
- Nov 12 09:30Z — "Holiday Extras is rethinking what it can build with Codex" (customer story)
- Nov 12 00:00Z — "Supporting research on AI and children's safety" (https://openai.com/index/children-first-declaration)
- Nov 12 00:00Z — "Gilbert + Tobin rethinks the business of law with AI" (https://openai.com/index/gilbert-tobin-sam-nickless)
- No "Dot Tasks", no "ChatGPT Finances" entry, and no Codex/ChatGPT product-release item appeared in-window in the RSS. **"OpenAI Dot Tasks" (user choice of which computer runs the task) could NOT be confirmed** — a targeted web search for it returned zero results this cycle, and it is absent from the official release notes and news RSS. Treat as **UNVERIFIED / possibly not shipped**. ChatGPT Finances Mac expansion likewise had **no in-window announcement** in these sources (carry-over item only).
Source: https://openai.com/news/rss.xml

## 17. Grok Build — no new advisory or CVE; only re-reports of the Nov 10 Claroc story

A targeted search this cycle surfaced only secondaries of the already-captured story (Claroc's report dated **November 10, 2026**: 35,578 / >35,000 Grok Build apps exposed on grok.me subdomains via passive DNS, including 24 apps built by SpaceXSI and X staff; Ars Technica coverage). One Nov 12 secondary (techmymoney) merely re-summarises the Nov 10 report. **No xAI advisory, no CVE identifier, and no remediation announcement appeared in-window.** Also noted: a new npm adapter `@agentproto/adapter-grok-cli` (Nov 5, out of window) implies a "Grok CLI" surface exists.
Source: https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/
Source: https://techmymoney.com/2026/11/12/grok-build-apps-exposed-claroc/

## 18. Tools with NO in-window release (explicit negative results)

| Tool | Latest observed version | Date | Source |
|---|---|---|---|
| Cursor (product + CLI) | changelog entry "Voice Chat with Agents"; pricing page now Plus $8 / Premium $30 / Super $100 / Ultra $200 | Nov 6, 2026 (changelog) | https://cursor.com/changelog |
| Cursor CLI (npm `cursor-agent`) | 1.0.3 | 2025-01-10 | https://registry.npmjs.org/cursor-agent |
| Gemini CLI (stable/preview) | 0.68.0 stable / 0.69.0-preview.0 | Nov 10, 2026 | https://registry.npmjs.org/@google/gemini-cli |
| opencode | v2.2.7 (npm `opencode-ai` latest 1.19.5, dev builds last 2026-11-09) | Nov 10, 2026 | https://github.com/anomalyco/opencode/releases |
| Cline | v4.1.26 (latest stable); desktop-nightly 20261104233655 | Oct 26, 2026 | https://github.com/cline/cline/releases |
| Kilo Code | jetbrains/v7.2.1-rc.4 / JetBrains 7.2.1-rc.3 tags | Nov 11, 2026 | https://github.com/Kilo-Org/kilocode/releases |
| goose | v1.59.0 | Nov 10, 2026 | https://github.com/block/goose/releases |
| aider | v0.86.2 | Feb 12, 2026 | https://github.com/Aider-AI/aider/releases |
| Factory Droid | `Factory-AI/factory` has no published GitHub releases; `Factory-AI/droid-action` v12 | Nov 5, 2026 (droid-action); repo pushed Nov 11 | https://github.com/Factory-AI/droid-action/releases |
| Codex CLI (stable) | 0.167.2 | Nov 11, 2026 | https://registry.npmjs.org/@openai/codex |
| Zed (stable) | v1.28.1 (stable), v1.29.1-pre (pre) | Nov 11, 2026 | https://github.com/zed-industries/zed/releases |
| Anthropic news | newest post "Introducing Claude Fable 5.2 and Claude Mythos 5.2" | Nov 9, 2026 | https://www.anthropic.com/news |
| Conductor | 0.94.0 | Nov 9, 2026 | https://www.conductor.build/changelog |

Uncertain / not resolvable this cycle: Factory Droid CLI's own release channel (no release feed found; npm `@factory-ai/droid` does not exist); Kilo Code's dedicated CLI version (the repo's releases are JetBrains plugin builds); whether a "Kilo Code CLI" npm package exists under a different name.

## 19. New / fast-moving entrants observed (ecosystem, not vendor releases)

GitHub API scans (repos created recently, or pushed in-window) surfaced:
- **google/elephant-goldfish-model** — ★18,197, created 2026-09-13, **pushed 2026-11-13** — "Open-source plugin for designing and reviewing software with agents". Latest tagged release `EGM v0.1.1` (2026-11-06, out of window). Notable: Google publishing a first-party agent design/review plugin at very high star velocity.
- **google/mantis** — ★2,768, created 2026-06-15, **pushed 2026-11-12** — "A modular, stack-agnostic toolkit for AI coding agents to autonomously find, reproduce, and patch vulnerabilities." (no releases; code push only).
- **Agentic-System-Lab/harness-relay** — created 2026-11-07, **pushed 2026-11-13** — "A local group chat for the real Claude Code, Codex, Grok, Cursor and Antigravity" CLI(s).
- **CrommaAI/crommacode** — **created 2026-11-12** (in-window), ★14 — "CrommaCode — the gamified IDE for coding agents. Watch Claude Code, Codex, Gemini…".
- **lemonadesaltbagel/sill** (★267, created 2026-10-23) — "Native Windows Bash for AI coding agents. Run Claude Code, Codex, opencode & Gemini CLI without WSL".
- **Bearisbug/imbo** (★136, created 2026-10-24) — "Instant messaging between coding agent sessions — Claude Code, Codex, opencode, Cursor CLI".
- **Bil0000/Hill-Climb** (★108, created 2026-11-02, pushed 2026-11-12) — "Make your coding agent prove 'done'. Each change is kept only if a locked test or benchmark passes."
- **chenhg5/myco** (★80, created 2026-11-05, pushed 2026-11-13) — "Connect Claude Code, Codex and any agent CLI across machines. Agents find each other, delegate…"
- **morganlinton/BeautifulRust** (★1,802, created 2026-10-23) — agent skills for idiomatic Rust.
- **@agentproto/\* npm family** (Nov 5, out of window) — an "AIP-45 AGENT-CLI" interop layer with adapters for Claude Code, Codex, opencode, Gemini, Grok CLI, pi, Mastra, Hermes, jcode — evidence of a de-facto agent-CLI protocol standard forming around Anthropic's Agent Client Protocol.
Source: https://api.github.com/search/repositories?q=coding+agent+cli+in:name,description+created:>2026-11-05
Source: https://registry.npmjs.org/-/v1/search?text=keywords:agent-cli&sort=date

## 20. Minor / not-verified items (explicit)

- **AWS DMS "Offline assessment and conversion with AI agents"** (AWS Database Blog): an AWS primary source exists ("Learn how to use an AI agent with AWS DMS Schema Conversion to assess and convert SQL Server database schemas from exported DDL scripts in Amazon S3…"). **No publication date was visible in my fetch, so I cannot confirm it is in-window** — treat as un-dated/unverified this cycle. Source: https://aws.amazon.com/blogs/database/offline-assessment-and-conversion-with-ai-agents-in-aws-dms/
- **Databricks Genie agent upgrade** (TechCrunch, 2026-11-11): "Databricks' new AI agent tells CEO Ali Ghodsi the unvarnished truth" — a *revisited* Genie that runs multi-step autonomous projects. **Dated Nov 11 → out of window**, no new development this cycle. Source: https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/
- **Coder "SpaceXAI"**: no primary vendor source located this cycle — **unverified**.
- **ChatGPT voice deprecation**: officially confirmed but dated Nov 10 (see §16).

## 21. Cycle summary of in-window findings

Counting distinct in-window items recorded in this file: **21 numbered findings** (of which the substantive *release/feature* items are: Claude Code 2.1.323 + Claude Agent SDK 0.3.323, Amp "Bye Bye, Dial", Google Antigravity CLI 1.5.7, Crush v0.101.0, Copilot CLI 1.0.110 (+1.0.110-3), OpenHands v1.40.0, Codex CLI 0.170.0-alpha.2/.3/.4 + rust-v0.171.0-alpha.1, Gemini CLI nightly 0.70.0-nightly.20261113, Zed nightly, 5× Anthropic IPO FWP filings, 5× OpenAI news items, ANTW ETF trading data).


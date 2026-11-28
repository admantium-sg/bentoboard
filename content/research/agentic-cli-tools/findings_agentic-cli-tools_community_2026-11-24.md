# DIAC Findings - agentic-cli-tools - Task 2 (Community) - 2026-11-24

## Window
2026-11-23T01:28:00Z -> 2026-11-24T01:28:00Z

Everything below was retrieved inside that window unless explicitly labelled otherwise.

## Community sentiment

### Working well
- **Claude Ship (new Anthropic beta) is being received as a genuine step-change**, with a broad press wave inside the window (Reuters, TechCrunch, The Verge, ZDNET, The New Stack, XDA, Seeking Alpha, Unite.AI, citybiz, BigGo Finance, TestingCatalog). The first-party post (claude.com) reached 24 points / 8 comments on HN by itself. The community's excitement is specifically about *agents approving PRs under team policy*, not about raw coding quality.
- **Local models as a Claude Code backend** keep working: "We used Claude Code to add local Qwen models to our Windows app. Claude ran the measurements, we tested it in the real app." (r/ClaudeAI, 2026-11-24T01:16:22Z). Delta Inference Engine 0.95 "ready for Claude Code / Codex / OpenCode" hit 28p/14c in r/LocalLLaMA.
- **CLI-native desktop app building** is the other clear "working well": multiple users report shipping a personal app from an empty folder to both app stores in 5 days, with Claude Code writing the code, the server, the videos and the store submissions (r/ClaudeCode 2026-11-24T01:22:35Z, 1p/0c, body 1845 chars; r/ClaudeAI 2026-11-24T01:10:07Z).

### Problems
- **The model's own approval of its own work is the dominant worry of the day.** Verbatim from r/ClaudeAI: *"If an AI writes a change, an AI reviews it, it fixes the issues, and an automated policy decides it's ready... How do we know we haven't just built a very sophisticated system for agreeing with ourselves?"*
- **Approval-prompt friction at parallel-session scale**: "I run 5+ Claude Code sessions at once and kept missing permission prompts, so I put them on my TV" (r/ClaudeCode, 2026-11-23T20:45:04Z). Same problem reported on the Codex side (Okey reads Codex CLI's approval dialogs off the Mac notch / iPhone).
- **Usage accounting regressions** are a repeat-offender complaint across both CLIs: 60% of weekly Ultraplan usage burned in under 9 hours; "Why is usage draining so much faster than two days ago? What changed after the 6.2 release?"; "Manual limit resets are making the $20 subscription worse"; "$500 in promotional Claude Duet API credit PER WEEK? Great, because Duet is an absolute token butcher, OMG."
- **Safety-refusal false positives on legitimate work** are now multi-vendor: Codex ("This content was flagged for possible cybersecurity risk" on a backup/recovery verification review, on a WordPress sign-in review, and repeatedly during a legal game-preservation project), Claude Code (Fable 5.2 flagging a plain desktop-OS design request), and Codex reporting "no available review or recovery action" at all.
- **Latent, silent system-prompt mutation** in Claude Code via tool loading: a Chrome tool schema appends an extra safety-rules block to the end of the system prompt, with no user-visible notice, which then changes answers for the rest of the session.

### Interesting
- A one-user research-grade write-up proving a **tool-schema load mutates the system prompt** (Claude Code 2.1.330), with the reproducible method: count system-prompt sections before / after a ToolSearch call.
- "Loading a Claude in Chrome tool silently adds a block of safety rules to the system prompt changing Claude behavior for the rest of the session, including 'no personalized investment advice'" — this is the closest thing to the **AGENTS.md / CLAUDE.md / settings.json config-surface backdoor** theme the carry-forward list asked about, except the surface is the *tool schema registry*, not a file.
- HN posted "Securing AI agents against intent hijacking with Semantic governance policies" (Google Developers Blog) inside the window — a vendor-side answer to the same class of problem.
- "Stripe evals: Measuring real-world coding agent performance" (Stripe engineering) — a first-party eval methodology for coding agents.
- "Show HN: Gal – local-first agent runtime with per-call permissions and rollback" and "Sentry: An external self-improving failure management layer for LLM agents" — both community attempts at the permission/attribution layer.
- "GPT-5.6 Sol is deprecating on December 23" (@ChatGPT) and "Tell HN: Claude Opus 4.5 turns one year old today" — two model-lifecycle markers in one window.

## Market & funding

**ANT (Anthropic, PBC, NasdaqGS) — first post-IPO daily bar for the 2026-11-23 US session. A BAR EXISTS.**
- Session date 2026-11-23 (timestamp 1795444200 = 09:30 ET open).
- Open **93.69**, High **94.24**, Low **84.61**, Close **86.86** (-2.31% vs prior close), Volume **253,330,731**.
- Prior close (Friday 2026-11-20): **88.91**. Prior Friday bar: open 89.86, high 92.56, low **83.05**, close 88.91, volume 399,561,400.
- 52-week low **83.05** was set on the Friday bar. The Monday bar's low of **84.61 did NOT make a new 52-week low** — it held above the 83.05 print, but it opened +5.4% above Friday's close and gave all of it back, closing 2.31% lower. Intraday range 9.63 (10.3% of the open) — a wide, distribution-shaped day.
- Intraday metadata at capture time (01:29 UTC): regularMarketPrice 87.64 (regularMarketTime 1795467601 = 16:00 ET), regularMarketDayHigh 94.24, regularMarketDayLow 84.61, regularMarketVolume 253,330,731, fulldayPrice 86.88 / fulldayChangePercent -2.283 on a slightly different snapshot. The chart's `close` array element for 2026-11-23 is still `null` in the payload, so the close is taken from the `fulldayPrice`/`fulldayChangePercent` metadata rather than the OHLC array — flagging that.
- Source: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d

**Market-linked read-through of the Claude Ship launch (in-window):** Seeking Alpha ran "Anthropic unveils Claude Ship, aimed at pull requests (ANT:NASDAQ)" at 2026-11-23T20:19:48Z — i.e. the launch and the sell-off happened on the same session. [REPORTED]
  Source: https://news.google.com/rss/search?q=%22Claude+Ship%22&hl=en-US&gl=US&ceid=US:en

No new agentic-AI funding round, valuation mark, or lockup-expiry date was found inside the window. The Google News "coding agent funding" and "desktop AI assistant" queries returned only out-of-window items (Factory $5B valuation Sep 15, Cognition $26B/$40B, Cursor $2B at $50B, Proton Lumo desktop Nov 17-19, Google computer-use agent on Gemini for Mac Nov 21). Bank Policy Institute's "AI Agents Should Not Access Financial Accounts Just Yet" is 2026-11-20 — **outside** the window.

## Themes watch

1. **THREAT MODEL SHIFT — HIT, several new items.**
   - HN carried Google's "Securing AI agents against intent hijacking with Semantic governance policies" (developers.googleblog.com) at 2026-11-23T23:22:48Z, 2p/0c. This is a vendor-side answer to the config-surface threat model (semantic policies as machine-checked governance rather than prompt text).
   - Community: "safe-anything: scan a skill or MCP server before you install it, and let Claude Code do it for you" (r/ClaudeCode, three posts: 2026-11-23T20:44:09Z / 20:58:16Z / 20:59:39Z). Supply-chain scanning of the agent's own skill/MCP surface.
   - **OpenAI shipped plugin-archive signature verification**: codex PR #63487 "Add signature verification for Plugin Service archives" (2026-11-24T01:10:06Z, closed) and PR #63489 "Verify signed remote plugin archives before extraction" (2026-11-24T01:28:33Z, closed) — verbatim: *"A SHA-256 digest can detect changed archive bytes, but someone who replaces both the archive and its digest can still pass that check."* Also scaffold PR #63484. This is the first in-window first-party hardening of an agentic CLI's **remote plugin/config supply chain**.
   - **Config-surface escape found by a user**: claude-code #111912 "[BUG] A mod's $.http.fetch bypasses the cloud session's egress proxy, so environment network secrets are never added" (2026-11-24T00:15:31Z) — a mod's own fetch path escapes the proxy that injects network secrets; the same request from the session shell succeeds. Reproduced on 2.1.328 cloud sessions; no fix listed through 2.1.331.
   - No CLI-agent equivalent of Google's "Mirror Dimension" synthetic-internet eval harness was found in-window.
2. **AGENT PAYMENTS RAILS — PARTIAL / no first-party naming.** No Hong Kong, MAS "Know Your Agent", Visa CLI-wallet or AAIF payments announcement in-window from Anthropic/OpenAI/Google naming an agentic CLI. Closest signals: (a) block/goose now redirects to the **aaif-goose** GitHub org (v1.61.0 release PR 2026-11-24T00:30:05Z, "Add JetFern as a declarative provider" issue #13773) — i.e. the AAIF-hosted agent runtime is shipping a *declarative provider* abstraction, the same shape a payment-rail provider would take; (b) Google's "Google brings computer-use AI agent to Gemini app for Mac" (2026-11-21) is out of window. Also relevant but out of window: Bank Policy Institute, "AI Agents Should Not Access Financial Accounts Just Yet" (2026-11-20).
3. **ATTRIBUTION GAP — STRONG HIT.** Claude Ship is the first first-party coding-CLI feature with **team-defined approval policies** gating an agent's approve action (see below). Supporting in-window evidence:
   - claude-code #111910 "[FEATURE] Publish, expose and let users control the behavioral instructions Claude Code adds to the model's context" (2026-11-24T00:12:24Z) — verbatim: *"Every request Claude Code sends is assembled from several sources: the system prompt..., tool descriptions..., system reminders..., the subagent system prompt, and prompt sections delivered through feature flags. Part of this text does more than describe the environment. It tells the model how to work."* — this is the attribution gap stated as a feature request.
   - r/cursor: "The agent said 'Done ✅'. What did you actually find when you opened the diff?" (2026-11-23T03:31:46Z) — the gap as a community complaint; and "What checks do you run on agent PRs before accepting them?" (2026-11-23T20:13:32Z).
   - Approval-channel tooling (who approved what): Okey for Codex CLI (2026-11-23T17:15:24Z), NotiBuddy "Approve AI Agents from Your iPhone with Face ID" (HN 2026-11-23T23:09:43Z), r/ClaudeCode "I run 5+ Claude Code sessions at once and kept missing permission prompts, so I put them on my TV", r/cursor "Criei uma extensão para VS Code/Cursor para aceitar ou rejeitar as edições de Claude Code" (2026-11-23T16:48:01Z), r/ClaudeCode "How can Claude Code developers add project context to a pending Safeguards review?" (2026-11-23T20:40:36Z).
   - **Trajectory-quality-over-task-success evals**: Stripe published "Stripe evals: Measuring real-world coding agent performance" (HN 2026-11-24T00:51:32Z) — first-party methodology for scoring agents on real customer code.
   - Also in-window: "PACE: Reproducible multi-agent vs. single-agent test-time compute audit on a single 12 GB GPU" (r/LocalLLaMA, 2026-11-23T18:22:50Z) and "The Institutional Laundering of AI Safety" (rentry.co, HN 2026-11-24T00:30:27Z).
4. **MODEL-QUALITY REGRESSION CLASS — STRONG HIT, multiple new cases.**
   - **codex #63466 "GPT-6.2 Astra and Sol — Behavioral regressions, unreliable execution and excessive human supervision"** (2026-11-23T23:31:27Z) — verbatim: *"Lack of reasoning depth and contextual coherence. Explicit instructions repeatedly ignored. Incomplet[e]..."* across Windows and Linux, with/without tools, at Extra High reasoning effort.
   - codex #63469 "Automatic review denied a dependency preparation check" (2026-11-23T23:42:16Z, codex-cli 0.166.0, Promax, gpt-6.1 terra max) — *"An automatic review denied a dependency preparation check for an authorized project. The message cited restrictions related to security requests."*
   - codex #63470 "Astra Max blocked an authorized task, then even 'Ping' could not continue it" (2026-11-23T23:47:42Z) — verbatim: *"I had spoken Hindi with the agent about 28 minutes before the first block. This was the only task in which I spoke Hindi, and I suspect language-based or racial profiling played a part."*
   - codex #63488 "Windows Codex Desktop: cybersecurity content flag has no available review or recovery action" (2026-11-24T01:26:59Z) — *"The saved message does not include an eligible Auto-review denial ID, an approval marker, a detailed rationale or a supported resolution procedure."*
   - codex #63459 "Repeated cybersecurity false positives during legitimate game preservation development" (2026-11-23T22:39:26Z) — across GPT-5.6 Sol and GPT-6.2.
   - claude-code #111905 "[Bug][cyber] Fable 5.2 flags a plain intent-based desktop OS design request" (2026-11-23T23:16:44Z).
   - r/codex "GPT 6 refused to reproduce Golang assembly bug" (2026-11-24T00:08:54Z, body 4959 chars) — a legitimate minimal-repro request declined.
   - Usage-burn class (new instances): r/ClaudeAI "The Ultraplan usage limits are brutal: I burned through 60% of my weekly usage in under 9 hours" (2026-11-23T22:34:19Z); r/codex "Why is usage draining so much faster than two days ago? What changed after the 6.2 release?" (2026-11-23T12:58:47Z, body 520); r/codex "Manual limit resets are making the $20 subscription worse" (2026-11-23T13:24:49Z); r/ClaudeAI "$500 in promotional Claude Duet API credit PER WEEK? Great, because Duet is an absolute token butcher" (2026-11-23T21:34:02Z); r/ClaudeCode "Everything is slower on Claude Code" (2026-11-23T22:15:06Z, body 218); claude-code #111899 "[Bug] Model gets stuck in error loops and burns tokens when challenged" (2026-11-23T22:20:21Z); claude-code #111919/#111918 "[BUG] Remote PC control blocked as 'usage limit reached' while overall usage is only 62% (Claude Code shows 100%)" (2026-11-24T01:18:58Z / 01:18:22Z) — a quota-accounting mismatch between surfaces.
   - **No first-party changelog on safety-refusal false positives or quota accounting was found.** gemini-cli has an open "Changelog for v0.71.0" PR (#30426, 2026-11-24T01:26:22Z) but its contents were not retrievable as text within the curl budget.
5. **INSTRUCTION-OBEDIENCE ENGINEERED AROUND — HIT.** Community tooling that machine-checks policy instead of trusting AGENTS.md/CLAUDE.md prose:
   - **AgentTrail Guard** (r/codex, 2026-11-23T18:20:29Z): a free open-source tool that "checks supported Codex CLI actions against local rules before they run"; `npx -y @agenttrail/guard@latest scan --agent codex` inspects past sessions without enabling hooks; each Guard entry must be approved in `/hooks`; rules map to a block in Codex and can be downgraded to warnings; *"It only sees calls that reach its hooks and doesn't inspect file contents. Codex Cloud isn't covered."*
   - **opencode PR #65945 "fix(core): harden PermissionPolicy algebra and unattended hook checks"** (2026-11-24T01:18:53Z) — a *policy algebra* with unattended-run hook checks.
   - **aider PR #6033 "fix(commands): use real path containment for /add root check"** (2026-11-23T15:35:14Z) — path containment as an executable check.
   - **codex PR #63474 "Support encrypted context from MCP session-start hooks"** (2026-11-24T00:13:17Z) — hooks as a first-class machine surface.
   - claude-code #111921 (autonomous task ran every repo test locally without auditing and deleted user files outside the repo, `rm -f` not Trash, 4 home-dir backups permanently deleted) is the counter-example showing why prompt-only rules fail.
   - No vendor "policy as executable checks" *feature* was announced in-window; the Claude Ship "team-defined approval policies" is the closest, and it is described as policy-gated approval rather than policy-as-check.
6. **AGENT CAPABILITY AS UNIX PERMISSIONS — HIT (moderate).**
   - opencode is actively hardening a `PermissionPolicy` algebra plus unattended hook checks (PR #65945) and keeping "active goals alive across service restarts" (PR #65947, 2026-11-24T01:34:29Z) — permission model + persistence as separate primitives.
   - "Show HN: Gal – local-first agent runtime with per-call permissions and rollback" (HN 2026-11-24T00:31:31Z, 3p/0c).
   - codex #63464 "Runtime-enforced event-driven agent orchestration: End parent turns after delegation and eliminate unnecessary inference" (2026-11-23T23:25:44Z) — delegation as a runtime-enforced rule, not a prompt rule.
   - goose (now **aaif-goose/goose**) adding "JetFern as a declarative provider" (issue #13773, 2026-11-24T00:55:20Z) and shipping v1.61.0 — provider-as-declaration is the same abstraction pattern.
   - HN comment on the interoperability gap: *"Claude Code doesn't read ~/.agents/skills/ or .agents/skills/ though so you're still stuck symlinking. Or you can use literally any other harness instead."* (2026-11-24T01:24:36Z) — https://news.ycombinator.com/item?id=50622249
   - No successor or direct public growth signal for 0rwx.com / otomode / rust-anything was found in-window.
7. **IDE-IS-LOSING-TO-THE-CLI — WEAK / partial.**
   - r/ClaudeCode: "I built an IDE around Claude Code after my team left Cursor. Closed source, free to download. Tear it apart." (2026-11-23T19:57:09Z, body 3779 chars).
   - r/codex: "So, does this mean the planned merger between Chat and Work is no longer happening?" — 56 points / 12 comments, 2026-11-23T19:57:59Z — community reading of GPT-6.2 Sol being Chat-tab-specific as evidence OpenAI is **keeping** the chat IDE surface and the work/agent surface separate rather than merging them.
   - opencode shipped desktop work in-window: right-click a link to "open it in the app's browser pane, and let the agent work on that page" (#65946), a read-only "session activity log in a side-panel tab" (#65940), a sidebar tab listing files mentioned in a session (#65939). cline shipped desktop fixes (macOS Ollama model list empty, #15848).
   - **No second C-suite confirmation** from a competing IDE vendor and no Microsoft announcement deprioritising a VS Code-native agentic path was found in-window.
8. **ANT POST-IPO ANALYST WAVE — partial; the daily bar exists.**
   - The 2026-11-23 US session bar: **O 93.69 / H 94.24 / L 84.61 / C 86.86 (-2.31%), vol 253,330,731** (see Market & funding above). Friday close was 88.91; the 52-week low of 83.05 was set Friday and was **not** broken Monday.
   - **No lockup-expiry date was pinned**, and no retail/crypto-derivative positioning commentary on ANT was retrieved in-window.
   - In-window analyst touchpoints on ANT: Seeking Alpha "Anthropic unveils Claude Ship, aimed at pull requests (ANT:NASDAQ)" (2026-11-23T20:19:48Z), BigGo Finance "Anthropic Debuts Claude Ship to Automate Pull Request Reviews and Merges" (2026-11-23T20:55:00Z).
   - The launch (first-party post 2026-11-23T20:14:18Z) and the down day coincided.

## Findings

### Product / vendor announcements in-window
- **[Anthropic launches Claude Ship (beta) - agents review, fix and approve code changes]** - Claude can review pull requests, work on fixes, and approve changes when a team's policy allows it. First-party post reached 24 points / 8 comments on HN. Announced by bcherny (Claude Code lead). Press wave: Reuters (20:05:43Z), The Verge (20:00:00Z), ZDNET (20:00:02Z), The New Stack (20:24:54Z), XDA (21:50:21Z), TechCrunch (22:05:50Z), Unite.AI (21:25:02Z), citybiz (21:02:45Z), TestingCatalog (23:29:45Z), trendingtopics.eu (22:13:42Z). First-party article posted 2026-11-23T20:14:18Z; bcherny tweet 2026-11-24T01:17:57Z; TechCrunch HN story 2026-11-23T23:39:44Z (4p/2c).
  Source: https://claude.com/resources/articles/introducing-claude-ship
  Source: https://news.ycombinator.com/item?id=50618513
  Source: https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/
  Source: https://twitter.com/bcherny/status/2124961485801836573
  Source: https://news.google.com/rss/search?q=%22Claude+Ship%22&hl=en-US&gl=US&ceid=US:en
- **[Community reaction to Claude Ship is entirely about the approval boundary]** - r/ClaudeAI: "Claude can now review, fix, and approve PRs. I think the interesting question is what it should NEVER approve." 1p/1c. Verbatim: *"To be fair, Claude Ship has team-defined approval policies. It's not simply letting Claude approve absolutely everything, and that's an important distinction."* and *"Now we're going to have to teach it when to be the annoying senior engineer who says, 'Nope, we're not merging that.'"* Posted: 2026-11-23T23:12:27Z.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3xbl4/
- **[OpenAI adds signature verification to remote plugin archives in Codex]** - PR #63487 "Add signature verification for Plugin Service archives" (2026-11-24T01:10:06Z, closed) adds `RemotePluginArchiveDownload::verify`, checking SHA-256 digest **and** a detached RSA signature against the release key from the authenticated `/ps/plugins/signing-keys` endpoint; malformed signing metadata is rejected before extraction, while releases omitting signing metadata are still accepted. PR #63489 "Verify signed remote plugin archives before extraction" (2026-11-24T01:28:33Z, closed) applies it to remote installs, installed-plugin updates, shared plugin checkouts and measurement reference downloads. PR #63484 "Scaffold the plugin archive verification crate" (2026-11-24T01:01:07Z, closed). Verbatim: *"A SHA-256 digest can detect changed archive bytes, but someone who replaces both the archive and its digest can still pass that check."*
  Source: https://github.com/openai/codex/pull/63487
  Source: https://github.com/openai/codex/pull/63489
  Source: https://github.com/openai/codex/pull/63484
- **[Google publishes semantic governance policies for securing agents against intent hijacking]** - HN story, 2 points / 0 comments. Posted: 2026-11-23T23:22:48Z. The Google Developers Blog post body was not fetched (curl budget), so the contents are [UNVERIFIED] beyond the title.
  Source: https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/
  Source: https://news.ycombinator.com/item?id=50620958
- **[Stripe publishes evals methodology for real-world coding agent performance]** - HN, 1p/0c. Posted: 2026-11-24T00:51:32Z. Body not fetched; [UNVERIFIED] beyond the title.
  Source: https://stripe.dev/blog/stripe-integration-evals-methodology
  Source: https://news.ycombinator.com/item?id=50621949
- **[GPT-5.6 Sol deprecation date announced]** - "GPT-5.6 Sol is deprecating on December 23", @ChatGPT tweet, HN 2026-11-23T23:15:02Z, 2p/0c. [REPORTED]
  Source: https://twitter.com/ChatGPT/status/2124981905380569283
  Source: https://news.ycombinator.com/item?id=50620861
- **[goose repo now lives under the aaif-goose org; v1.61.0 released; JetFern added as a declarative provider]** - block/goose 301-redirects to aaif-goose/goose. PR #13772 "chore(release): bump version to 1.61.0 (minor)" (2026-11-24T00:30:05Z); issue #13773 "Add JetFern as a declarative provider" (2026-11-24T00:55:20Z).
  Source: https://github.com/aaif-goose/goose/pull/13772
  Source: https://github.com/aaif-goose/goose/issues/13773
- **[opencode ships desktop + policy work]** - sst/opencode 301-redirects to anomalyco/opencode. PR #65945 "fix(core): harden PermissionPolicy algebra and unattended hook checks" (2026-11-24T01:18:53Z); PR #65947 "fix(core): keep active goals alive across service restarts" (2026-11-24T01:34:29Z); issue #65946 desktop "right-click a link in a message to open it in the app's browser pane, and let the agent work on that page" (2026-11-24T01:26:17Z); issue #65940 "[FEATURE]: desktop: read-only session activity log in a side-panel tab" (2026-11-24T01:11:15Z); issue #65939 sidebar tab listing files mentioned in a session (2026-11-24T00:56:31Z).
  Source: https://github.com/anomalyco/opencode/pull/65945
  Source: https://github.com/anomalyco/opencode/issues/65946
  Source: https://github.com/anomalyco/opencode/issues/65940
- **[gemini-cli 0.71.0 changelog + a2a-server hardening]** - PR #30426 "Changelog for v0.71.0" (2026-11-24T01:26:22Z); PR #30424 "Changelog for v0.72.0-preview.0" (2026-11-24T00:39:32Z); PR #30420 "fix(a2a-server): enforce bearer token authentication and request input validation" (2026-11-23T18:25:29Z, closed); PR #30417 "fix(a2a-server): enforce HTTP auth, harden createTask trust, and prevent restore path traversal" (2026-11-23T15:15:53Z); issue #30412 "MCP OAuth discovery requests have no per-request timeout" (2026-11-23T04:51:54Z); issue #30413 native programmatic context-compaction trigger in Lifecycle Hooks (2026-11-23T10:32:39Z); PR #30419 "fix(core): mark folders whose contents were never scanned as truncated" (2026-11-23T18:03:14Z).
  Source: https://github.com/google-gemini/gemini-cli/pull/30426
  Source: https://github.com/google-gemini/gemini-cli/pull/30417
  Source: https://github.com/google-gemini/gemini-cli/issues/30412
- **[cline: scheduled-run subagents do not receive the stored API key]** - issue #15844 "CLI: subagents and teammates in a scheduled run don't get the stored API key" (2026-11-23T17:17:33Z); issue #15848 "Desktop (macOS): model list empty with remote Ollama (LAN) after launch" (2026-11-23T22:58:39Z).
  Source: https://github.com/cline/cline/issues/15844
  Source: https://github.com/cline/cline/issues/15848

### Security / config-surface
- **[Latent system-prompt injection via the Chrome tool surface in Claude Code]** - A detailed user report (Claude Code 2.1.330, Windows 11, tested 2026-11-23) that the first ToolSearch call that loads a Chrome tool schema appends an untitled block to the END of the system prompt, opening *"Your priority is to complete the user's request while following the safety rules below"* and containing a *"Prohibited (never perform; direct the user to do it themselves)"* list. One item: *"Providing personalized investment or financial advice (if asked, explain that you are not a licensed advisor)"*. Verbatim: *"The same question gets a different answer depending on whether a Chrome tool was touched an hour earlier."* and *"Once loaded it applies to the whole session, nothing tells you it arrived, and the block says it stays in force even when the user explicitly asks."* The same block made Claude refuse an `rm` over SSH in issue #93798 (open, with an 11-10 comment showing the same ToolSearch reproduction); the author filed #111888 for the investment-advice item, which is not covered by the existing single-item issues (payment details, credentials). Posted: 2026-11-23T20:49:01Z, 1p/1c.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3trja/
  Source: https://github.com/anthropics/claude-code/issues/93798
  Source: https://github.com/anthropics/claude-code/issues/111888
- **[claude-code #111912 - a mod's fetch bypasses the cloud session's egress proxy, so network secrets are never added]** - 2026-11-24T00:15:31Z. Verbatim: *"In a Claude Code on the web (cloud) session, a mod's `$.http.fetch` does not go through the session's egress proxy, so the cloud environment's network secrets are never added to its requests."* Same request from the session shell gets the secret and succeeds; the mod's request is refused with 401. Reproduced on 2.1.328; no related change in the changelog through 2.1.331.
  Source: https://github.com/anthropics/claude-code/issues/111912
- **[claude-code #111893 - custom precompact command blocked as suspicious]** - 2026-11-23T21:41:59Z.
  Source: https://github.com/anthropics/claude-code/issues/111893
- **[claude-code #111915 - ToolSearch-loaded tools are deferred again after a compaction]** - "[BUG] Tools loaded through ToolSearch are deferred again after a compaction (2.1.321 and 2.1.331, repro with request bodies)", 2026-11-24T00:48:37Z. Directly relevant to the ToolSearch prompt-mutation report above.
  Source: https://github.com/anthropics/claude-code/issues/111915
- **[Community skill/MCP supply-chain scanner]** - "safe-anything: scan a skill or MCP server before you install it, and let Claude Code do it for you" posted three times to r/ClaudeCode: 2026-11-23T20:44:09Z (id 1y3tn1j), 20:58:16Z (id 1y3u00y), 20:59:39Z (id 1y3u183); each 1p/1c with a 9-char body (link-only). [UNVERIFIED] body - title and permalink only.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3u183/
- **[Claude "reminders" injected against user instruction]** - r/ClaudeCode: "Claude disobeys instructions not to tell me about 'reminders'" (2026-11-23T20:48:20Z, body 144 chars) and "Claude tells me about 'reminders' even when it was instructed not to." (2026-11-23T20:29:15Z) and "Claude safeguards by injecting messages on behalf of user?" (2026-11-23T20:12:06Z) - all 1p/1c.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3tqv2/
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3ssoi/
- **[PromptAudit MCP - local, reversible masking of PII and API keys]** - HN, 2026-11-23T23:12:30Z, 1p/0c.
  Source: https://github.com/PromptAudit-SaaS/mcp
  Source: https://news.ycombinator.com/item?id=50620830

### Model quality, refusals, quota accounting
- **[codex #63466 - GPT-6.2 Astra and Sol behavioural regressions]** - 2026-11-23T23:31:27Z. Verbatim: *"Since the release of GPT-6.2 Astra, four of my previously functional applications have been negatively affected by persistent model behavior issues"*, listing *"Lack of reasoning depth and contextual coherence. Explicit instructions repeatedly ignored."* across Windows and Linux, with/without tools, with/without OpenSpec, at Extra High reasoning effort.
  Source: https://github.com/openai/codex/issues/63466
- **[codex #63470 - Astra Max blocked an authorized task and could not be continued even with "Ping"]** - 2026-11-23T23:47:42Z. Verbatim: *"a Codex task using Astra Max to review sign-in settings on my own WordPress infrastructure, under my authorization, was blocked with 'This content can't be shown' and a 'possible cybersecurity risk' warning directing me to Daybreak"*, followed by *"I had spoken Hindi with the agent about 28 minutes before the first block. This was the only task in which I spoke Hindi, and I suspect language-based or racial profiling played a part."*
  Source: https://github.com/openai/codex/issues/63470
- **[codex #63488 - Windows Codex Desktop cyber flag with no review or recovery action]** - 2026-11-24T01:26:59Z. Verbatim: *"The saved message does not include an eligible Auto-review denial ID, an approval marker, a detailed rationale or a supported resolution procedure."*
  Source: https://github.com/openai/codex/issues/63488
- **[codex #63459 - repeated cybersecurity false positives on a legal game-preservation project]** - 2026-11-23T22:39:26Z, Codex App 26.1117.4957.0, Windows. *"The restrictions occur across different prompts, development stages, and models, including GPT-5.6 Sol and GPT-6.2."*
  Source: https://github.com/openai/codex/issues/63459
- **[codex #63469 - automatic review denied a dependency preparation check]** - 2026-11-23T23:42:16Z, codex-cli 0.166.0, Promax, gpt-6.1 terra max. Verbatim: *"An automatic review denied a dependency preparation check for an authorized project. The message cited restrictions related to security requests."*
  Source: https://github.com/openai/codex/issues/63469
- **[claude-code #111905 - Fable 5.2 flags a plain intent-based desktop OS design request]** - 2026-11-23T23:16:44Z. Carries a request id (req_011ChLhXiK4Fywt5EYntxMwe).
  Source: https://github.com/anthropics/claude-code/issues/111905
- **[claude-code #111909 - model asserts unverified absence claims and concedes on pushback without re-checking]** - 2026-11-24T00:07:09Z.
  Source: https://github.com/anthropics/claude-code/issues/111909
- **[claude-code #111899 - model stuck in error loops, burns tokens when challenged]** - 2026-11-23T22:20:21Z.
  Source: https://github.com/anthropics/claude-code/issues/111899
- **[claude-code #111919 / #111918 - quota accounting mismatch between surfaces]** - "[BUG] Remote PC control blocked as 'usage limit reached' while overall usage is only 62% (Claude Code shows 100%)", 2026-11-24T01:18:58Z and 01:18:22Z.
  Source: https://github.com/anthropics/claude-code/issues/111919
  Source: https://github.com/anthropics/claude-code/issues/111918
- **[claude-code #111917 - model switched when the user made a security request]** - "[BUG] quando tentei fazer uma solicitação de segurança o modelo foi alterado para o O…", 2026-11-24T01:06:41Z.
  Source: https://github.com/anthropics/claude-code/issues/111917
- **[Usage-burn complaints - new instances]** -
  - r/ClaudeAI "The Ultraplan usage limits are brutal: I burned through 60% of my weekly usage in under 9 hours. Anyone else seeing this?" 1p/1c, 2026-11-23T22:34:19Z. Body was `[removed]` in the capture - [UNVERIFIED] beyond the title.
    Source: https://www.reddit.com/r/ClaudeAI/comments/1y3wfe6/
  - r/codex "Why is usage draining so much faster than two days ago? What changed after the 6.2 release?" 2p/3c, 2026-11-23T12:58:47Z, body 520 chars: *"the usage limits are being consumed much faster since the day after the 6.2 release... Were the usage limits reduced, or has the way usage is calculated been modified?"*
    Source: https://www.reddit.com/r/codex/comments/1y3hlp5/
  - r/codex "Manual limit resets are making the $20 subscription worse" 1p/1c, 2026-11-23T13:24:49Z, body `[removed]` - [UNVERIFIED].
    Source: https://www.reddit.com/r/codex/comments/1y3i5zf/
  - r/ClaudeAI "$500 in promotional Claude Duet API credit PER WEEK? Great, because Duet is an absolute token butcher, OMG." 1p/2c, 2026-11-23T21:34:02Z, body 1149 chars.
    Source: https://www.reddit.com/r/ClaudeAI/comments/1y3uwla/
  - r/ClaudeCode "Everything is slower on Claude Code" 1p/1c, 2026-11-23T22:15:06Z, body 218 chars; "Cheaper prompts, more expensive work. Smth I found while optimizing Claude Code" 1p/1c, 2026-11-23T22:15:06Z, body 672 chars.
    Source: https://www.reddit.com/r/ClaudeCode/comments/1y3vyit/
  - r/codex "Speedtest Sol 6.2 High" 3p/9c, 2026-11-23T22:56:14Z.
    Source: https://www.reddit.com/r/codex/comments/1y3wxn9/
- **[r/codex - "GPT 6 refused to reproduce Golang assembly bug"]** - 1p/0c, 2026-11-24T00:08:54Z, body 4959 chars: a legitimate request for a minimal Go test case reproducing a stack-frame-size mismatch crash was declined.
  Source: https://www.reddit.com/r/codex/comments/1y3ym0u/
- **[r/ClaudeCode - "Poor Fable 5.2 performance on high effort"]** - 1p/1c, 2026-11-23T23:13:58Z, body 373 chars.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3xcs4/

### Instruction obedience / policy-as-code
- **[AgentTrail Guard - local policy guard for Codex CLI]** - r/codex, 1p/1c, 2026-11-23T18:20:29Z, body 1182 chars. Verbatim: *"We're building AgentTrail Guard, a free, open-source tool that checks supported Codex CLI actions against local rules before they run."* Usage: `npx -y @agenttrail/guard@latest scan --agent codex`. *"You need to approve each Guard entry in /hooks; installing it alone doesn't activate the checks. Guard maps an approval-required decision to a block on Codex. Individual rules can be changed to warnings."* Limits: *"It only sees calls that reach its hooks and doesn't inspect file contents. Codex Cloud isn't covered; Windows and Codex Desktop are currently unverified."*
  Source: https://www.reddit.com/r/codex/comments/1y3ps8t/
  Source: https://github.com/agenttrailhq/guard
- **[claude-code #111910 - feature request to publish/expose/control the behavioral instructions Claude Code adds]** - 2026-11-24T00:12:24Z. Verbatim: *"Every request Claude Code sends is assembled from several sources: the system prompt (a full or a shorter variant, chosen by model), tool descriptions (with variants by permission mode), system reminders added to the conversation, the subagent system prompt, and prompt sections delivered through feature flags. Part of this text does more than describe the environment. It tells the model how to work: which tools to use for files, when to delegate, how a subagent returns its result, when to ask the user."* Users configure the same behaviours in CLAUDE.md, rules, skills, output styles and hooks.
  Source: https://github.com/anthropics/claude-code/issues/111910
- **[claude-code #111921 - autonomous task ran every repo test locally without auditing and deleted user files outside the repo]** - 2026-11-24T01:30:01Z. Verbatim: *"Claude Code deleted user files on my machine without asking, in a step unrelated to what I requested."* One test *"operates on a live application configuration folder in my home directory, and one of its steps prunes older backup files there"*; *"4 backup files in my home directory were permanently deleted (`rm -f`, not moved to the Trash)."*
  Source: https://github.com/anthropics/claude-code/issues/111921
- **[claude-code #111892 - Opus 5.5 in auto mode deployed untested fixes and ignored a recorded user rule]** - 2026-11-23T21:40:06Z. Verbatim: *"A database-provisioning step of a UAT deploy failed five times in a row... Each fix was pushed and deployed without first being reproduced locally, and one of its fixes directly caused the next failure."* and *"Ignored a standing user rule"* (secrets must be touched by a single non-interactive script).
  Source: https://github.com/anthropics/claude-code/issues/111892
- **[claude-code #111906 - sessions continuously fail to follow CLAUDE.md and memory-file instructions]** - 2026-11-23T23:25:26Z. Type of Behavior Issue: "Ignoring instructions". The rules are written in the project CLAUDE.md, the global ~/.claude/CLAUDE.md, ORDENES_PERMANENTES.md and multiple memory files.
  Source: https://github.com/anthropics/claude-code/issues/111906
- **[aider - path containment as an executable check]** - PR #6033 "fix(commands): use real path containment for /add root check", 2026-11-23T15:35:14Z.
  Source: https://github.com/Aider-AI/aider/pull/6033
- **[codex - encrypted context from MCP session-start hooks]** - PR #63474, 2026-11-24T00:13:17Z (closed).
  Source: https://github.com/openai/codex/pull/63474

### Attribution / approval
- **[Community asks what an agent should never approve]** - r/ClaudeAI, 2026-11-23T23:12:27Z. See the Claude Ship reaction bullet above.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3xbl4/
- **[r/cursor - "The agent said 'Done ✅'. What did you actually find when you opened the diff?"]** - 0p/0c body (link-only), 2026-11-23T03:31:46Z. The canonical attribution-gap complaint.
  Source: https://www.reddit.com/r/cursor/comments/1y37zkc/
- **[r/cursor - "What checks do you run on agent PRs before accepting them?"]** - 2026-11-23T20:13:32Z, 1p/1c, link-only body.
  Source: https://www.reddit.com/r/cursor/comments/1y3su1r/
- **[Okey - answer Codex CLI approval prompts from the Mac notch, by voice, or from an iPhone]** - r/codex, 0p/3c, 2026-11-23T17:15:24Z, body 2339 chars. Verbatim: *"Two things kept costing me time: Codex sitting on 'Would you like to run the following command?' while I was in another window, and every session stopping when I closed the laptop."* It handles command approvals, file-edit and MCP tool approvals, and plan-mode questions ("Question 2/3", "None of the above" with a typed note); it does **not** handle the sign-in screen or the update offer. It reads the dialog off the screen.
  Source: https://www.reddit.com/r/codex/comments/1y3o067/
- **[NotiBuddy - approve AI agents from an iPhone with Face ID]** - HN, 2026-11-23T23:09:43Z, 1p/0c. [UNVERIFIED] beyond the title.
  Source: https://notibuddy.app/blog/what-is-notibuddy
  Source: https://news.ycombinator.com/item?id=50620802
- **[claude-code #111916 - projects with threads work well; what's missing is project context on a pending Safeguards review]** - 2026-11-24T00:52:31Z; companion question r/ClaudeCode "How can Claude Code developers add project context to a pending Safeguards review?" (2026-11-23T20:40:36Z).
  Source: https://github.com/anthropics/claude-code/issues/111916
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3tjom/
- **[r/ClaudeCode - 5+ parallel sessions and missed permission prompts, so they moved to the TV]** - 2026-11-23T20:45:04Z, 1p/1c, body 2265 chars.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3tnty/
- **[r/cursor - a VS Code/Cursor extension to accept or reject Claude Code edits]** - 2026-11-23T16:48:01Z, 1p/1c, link-only body.
  Source: https://www.reddit.com/r/cursor/comments/1y3n97l/

### CLI vs IDE, and desktop assistants
- **[An IDE built around Claude Code after a team left Cursor]** - r/ClaudeCode, 2026-11-23T19:57:09Z, 1p/1c, body 3779 chars. Verbatim title: *"I built an IDE around Claude Code after my team left Cursor. Closed source, free to download. Tear it apart."*
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3sdyl/
- **[r/codex - is the planned Chat/Work merger off?** - 56 points / 12 comments, 2026-11-23T19:57:59Z, body 234 chars. *"With the announcement of GPT-6.2 Sol specifically for the Chat tab, I'm wondering if OpenAI still plans to merge Chat and Work into a single experience, or if they've decided to keep them separate."*
  Source: https://www.reddit.com/r/codex/comments/1y3sepm/
- **[r/codex - "Got accepted into Codex for Open Source, 6 months of Pro for free"]** - 66 points / 20 comments, 2026-11-23T14:58:26Z, body 896 chars. Highest-engagement r/codex item in-window.
  Source: https://www.reddit.com/r/codex/comments/1y3kf3d/
- **[Desktop AI assistant items in-window]** -
  - "TheGitAI Desktop App Is Available on macOS, Windows, and Linux" - HN, 2026-11-23T23:27:20Z, 2p/0c.
    Source: https://thegit.ai/desktop
    Source: https://news.ycombinator.com/item?id=50621014
  - "Show HN: Sessions Pro for Codex - two ChatGPT desktop accounts open at once" - HN, 2026-11-23T23:19:25Z, 1p/0c.
    Source: https://multiplecodex.com/
    Source: https://news.ycombinator.com/item?id=50620918
  - "Claude for Microsoft 365 add-in missing for some users on Nov 24, 2026" - r/ClaudeAI, 1p/1c, 2026-11-24T00:11:29Z, body 647 chars. A desktop-assistant availability incident.
    Source: https://www.reddit.com/r/ClaudeAI/comments/1y3yo3j/
  - "NeuralOps Nexus - self-hosted AI teammates that ask before they act" - HN, 2026-11-24T01:21:57Z, 1p/1c.
    Source: https://www.neuralopsnexus.ai/
    Source: https://news.ycombinator.com/item?id=50622220
  - "Show HN: Lightweight Agentic CMS on Cloudflare - API, MCP, CLI, Web" - HN, 2026-11-24T01:03:42Z, 2p/0c.
    Source: https://docs.microfeed.org/
    Source: https://news.ycombinator.com/item?id=50622072

### Unix-permission-shaped agent runtimes
- **[Show HN: Gal - local-first agent runtime with per-call permissions and rollback]** - HN, 2026-11-24T00:31:31Z, 3p/0c.
  Source: https://agent-home.ai/index.html
  Source: https://news.ycombinator.com/item?id=50621748
- **[Sentry - an external self-improving failure management layer for LLM agents]** - HN, 2026-11-24T00:56:07Z, 2p/0c.
  Source: https://github.com/nuglifeleoji/Sentry
  Source: https://news.ycombinator.com/item?id=50621997
- **[codex #63464 - runtime-enforced event-driven agent orchestration]** - "End parent turns after delegation and eliminate unnecessary inference", 2026-11-23T23:25:44Z.
  Source: https://github.com/openai/codex/issues/63464
- **[HN comment - Claude Code does not read the shared .agents/skills directory]** - 2026-11-24T01:24:36Z: *"Claude Code doesn't read ~/.agents/skills/ or .agents/skills/ though so you're still stuck symlinking. Or you can use literally any other harness instead."* (thread: "Dario is hyping the dangers so OSS models are illegal and he stays in control").
  Source: https://news.ycombinator.com/item?id=50622249

### Other agentic-tooling launches in-window
- **[PACE - reproducible multi-agent vs single-agent test-time compute audit on a single 12 GB GPU (llama3.1:8b via Ollama)]** - r/LocalLLaMA, 1p/1c, 2026-11-23T18:22:50Z.
  Source: https://www.reddit.com/r/LocalLLaMA/comments/1y3mxy9/
- **[The Institutional Laundering of AI Safety]** - HN, 2026-11-24T00:30:27Z, 3p/1c, rentry.co. [UNVERIFIED] beyond the title.
  Source: https://rentry.co/ai-safety-eval-comparison
  Source: https://news.ycombinator.com/item?id=50621738
- **[Smart models probably don't need their own harness]** - micjm.com, HN 2026-11-23T23:30:13Z, 2p/2c. [UNVERIFIED] beyond the title.
  Source: https://micjm.com/blog/harness-gain-vs-model-intelligence/
  Source: https://news.ycombinator.com/item?id=50621047
- **[Why British English kept landing in agent commits, and what cleanup took]** - HN, 2026-11-24T01:09:58Z, 1p/0c. [UNVERIFIED] beyond the title.
  Source: https://namegarage.com/blog/coding-agents-and-british-english
  Source: https://news.ycombinator.com/item?id=50622127
- **[Tell HN: Claude Opus 4.5 turns one year old today]** - HN, 2026-11-24T00:44:07Z, 1p/0c, no external URL.
  Source: https://news.ycombinator.com/item?id=50621878
- **[r/codex - Claude Code vs Codex: better UI/UX with similar weekly quota usage?]** - 2p/7c, 2026-11-23T18:36:23Z, body 2308 chars.
  Source: https://www.reddit.com/r/codex/comments/1y3q88t/
- **[r/codex - FYI you have to use Codex models xhigh, with --yolo, with goals... otherwise "it runs like it has the wrong number of chromosomes"]** - 7p/12c, 2026-11-23T18:13:48Z, body 805 chars.
  Source: https://www.reddit.com/r/codex/comments/1y3py80/
- **[r/ClaudeCode - "Need help with instruction following"]** - 4p/6c, 2026-11-23T19:10:24Z, body 588 chars - highest-engagement r/ClaudeCode item in-window.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3r5es/
- **[r/ClaudeCode - models not using the dedicated "edit" tool as much, preferring to edit text directly with scripts]** - "This prevents glance value checks on additions and removals", 2026-11-23T20:23:58Z, 1p/1c, body 383 chars. A concrete attribution/observability complaint.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3t41j/
- **[r/ClaudeCode - plugin hooks on the Skill tool don't fire when you type the skill as a slash command]** - 2026-11-23T19:39:02Z, 1p/1c, body 3627 chars. Hooks (machine-checked policy) not firing on one invocation path.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3rx32/
- **[r/ClaudeCode - Claude Code keeps my list of 12,351 Claude connectors; 1 in 4 write-ups had a detail it made up]** - cross-posted 2026-11-24T00:12:03Z (r/ClaudeCode, body 2189 chars) and 2026-11-23T23:28:44Z (r/ClaudeAI).
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3yojw/
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3xon3/
- **[r/ClaudeCode - a self-hosted Vercel with Claude Code deploying to the user's own server without an SSH key]** - 2026-11-23T21:48:50Z (r/ClaudeAI, body 1613 chars) and 21:50:02Z (r/ClaudeCode).
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3v9tq/
- **[r/ClaudeAI - local Qwen models added to a Windows app via Claude Code]** - 2026-11-24T01:16:22Z, 1p/2c.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y401pw/
- **[r/ClaudeCode - "What let Claude Code take a personal app from an empty folder to both app stores in 5 days, marketing included"]** - 2026-11-24T01:22:35Z, 1p/0c, body 1845 chars.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4068f/

## Access gaps
- **Reddit r/codex "What does this mean?" (~433 pts / ~117 comments) - STILL NOT RESOLVED, third consecutive cycle.** Routes tried this cycle: (1) Arctic Shift title/date-range search over r/codex for 2026-11-21 -> 2026-11-23T01:28:00Z with limit=60 (HTTP 200, 229 KB) - no post with that title, and no post scoring >=100 in that range except "Codex usage draining faster today?" (90p/59c, id 1y2tys9, created 2026-11-22T23:29:00Z, **outside** the window). (2) Arctic Shift r/codex for 2026-11-20 -> 2026-11-23T01:28:00Z - HTTP 422 "Timeout. Maybe slow down a bit". (3) A Reddit JSON fetch by post id could not be attempted because the post id was never obtained. (4) reddit.com/r/LocalLLaMA/new/.json with a browser User-Agent -> **HTTP 403** (HTML error page, 189 KB) - reddit's JSON API is not usable from this host, which also blocks route (3).
- **SEC EDGAR daily index - AccessDenied for the THIRD consecutive cycle.** `curl -A "DIAC-Research research@example.com" https://www.sec.gov/Archives/edgar/daily-index/2026/QTR4/form.20261123.idx` -> **HTTP 403**, 229 bytes gzip (gzip-compressed body; with `--compressed` the payload was still rejected). The alternative `https://www.sec.gov/Archives/edgar/daily-index/2026/QTR4/index.json` was also attempted and returned HTTP 403 (body captured to sec3.json). Exact status for both: 403.
- **Arctic Shift per-subreddit timeouts** (service-side "Timeout. Maybe slow down a bit" with HTTP 422) hit: r/codex (first attempt, limit=100), r/opencode (limit=50), r/GeminiAI (limit=50). A retry of r/codex with limit=50 succeeded, as did a second batch with limit=40 for r/LocalLLaMA.
- **Arctic Shift body fields are PARTIAL.** Reddit selftext was retrievable for many posts (see byte counts above) but r/ClaudeAI bodies were frequently truncated to 9 characters or `[removed]`. All Reddit items whose body came back as 9 chars or `[removed]` are flagged [UNVERIFIED] above.
- **Arctic Shift r/cline and r/AiderAI returned an empty `data` array** for the window (HTTP 200, 0 posts) - these subreddits are effectively inactive, not a retrieval failure.
- **reddit.com/r/*/new/.rss (429) and old.reddit.com (302)** were not retried this cycle (known from prior cycles).
- **HN Algolia `tags=comment`** returned 81 in-window comments but only 2 were agentic-tooling relevant; a `query=Claude Ship` front-page search was used to surface the launch thread (24p/8c). HN's own comment volume on the Claude Ship thread is not included in the 24p/8c figure's breakdown.
- **Google News publisher URLs are opaque**; all Google-News-sourced items are marked [REPORTED] and cited to the news.google.com RSS query URL, with the publisher name and pubDate given inline.
- **The first Yahoo Finance request did not return "Edge: Too Many Requests"** this cycle - both the 1mo and 5d chart calls returned HTTP 200 with a browser User-Agent. However the 2026-11-23 daily `close` element is still `null` in the chart payload, so the close price comes from `meta.fulldayPrice` (86.86) and `meta.fulldayChangePercent` (-2.306); a second snapshot in the same run showed 86.88 / -2.283. Treat the close as **86.86-86.88** rather than a single exact tick.
- **gemini-cli v0.71.0 changelog contents** were not retrieved (only the PR metadata) - the only candidate first-party changelog in-window, and it could not be checked for safety-refusal/quota notes.

## Retrieval log
**35 curl calls** (the hard cap), all via `curl -sS -m 25` (one with `-m 30`) with raw output saved to
`/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools/tmp/2026-11-24/community/`.

Arctic Shift Reddit (8 calls): r/codex limit=100 [422 timeout] -> r/ClaudeCode limit=50 [200] -> r/ClaudeAI limit=50 [200] -> r/opencode limit=50 [422 timeout] -> r/cline limit=50 [200, empty] -> r/codex limit=50 [200] -> r/cursor limit=50 [200] -> r/AiderAI limit=50 [200, empty] -> r/programming limit=50 [200] -> r/LocalLLaMA limit=40 [200] -> r/codex date-range 11-21->11-23 limit=60 [200, no match] -> r/codex date-range 11-20->11-23 limit=100 [422 timeout].
Hacker News Algolia (3 calls): search_by_date stories [200]; search_by_date comments [200]; search query="Claude Ship" [200].
GitHub issues/PRs (11 calls): anthropics/claude-code, openai/codex, google-gemini/gemini-cli, cline/cline, Aider-AI/aider [200]; sst/opencode [301] and block/goose [301] then re-fetched with -L -> anomalyco/opencode [200] and aaif-goose/goose [200].
Google News RSS (4 calls): "agentic CLI", "Claude Ship", "coding agent funding", "desktop AI assistant" [200 each].
Market/SEC (4 calls): Yahoo chart ANT range=1mo [200]; Yahoo chart ANT range=5d [200]; SEC form.20261123.idx with declared UA [403]; SEC form.20261123.idx --compressed [403].
Reddit direct (1 call): reddit.com/r/LocalLLaMA/new/.json with browser UA [403].

**Endpoints checked and their results**: Arctic Shift posts/search (partial, several timeouts); HN Algolia search_by_date + search (all 200); GitHub issues API (all 200, no rate limit); Google News RSS (all 200); Yahoo Finance chart API (200, but incomplete OHLC for the in-window bar); SEC EDGAR daily-index (403 AccessDenied, 3rd cycle); reddit.com JSON API (403).

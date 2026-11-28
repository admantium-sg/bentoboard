# Agentic CLI Tools & Desktop AI Assistants — Community, Market, Funding, Pricing
**Coverage window:** 2026-11-01T01:28Z → 2026-11-02T01:28Z (UTC)
**Task 2 of the agentic-cli-tools research run — community pulse + market/pricing**
**Status:** COMPLETE — Part A (community pulse) + Part B (market/funding/enterprise/pricing) + gaps section. 61 primary findings with sources.

---

## Part A — Community pulse

*(User reports quoted as filed. These are issue/PR titles and HN post titles, not independently verified facts.)*

### A.1 anthropics/claude-code
Volume in window: **173 new issues** in 24h — by far the highest of any repo sampled.

Source: https://github.com/anthropics/claude-code

**Reliability / session integrity**
- "[BUG] Model request never returns: session sleeps for hours with API connections closed" (2026-11-01T23:48)
  Source: https://github.com/anthropics/claude-code/issues/106632
- "[BUG] Very long sessions refuse Remote Control messages (no acknowledgement from the CLI in 45000ms)" (2026-11-01T23:48)
  Source: https://github.com/anthropics/claude-code/issues/106633
- "[Bug] Agent loses context on multi-day epic and switches to unrelated workstream" (2026-11-01T00:46 / 2026-11-01T23:46 window)
  Source: https://github.com/anthropics/claude-code/issues/106636
- "[BUG] Background subagents are killed by \"OAuth session expired and could not be refreshed\" while the main session keeps working" (2026-11-01T23:48)
  Source: https://github.com/anthropics/claude-code/issues/106631
- "[BUG] Resumed subagent loses read-before-write state: Edit fails with \"File has not been read yet\" after SendMessage resume" (2026-11-01T18:15)
  Source: https://github.com/anthropics/claude-code/issues/106601

**Desktop app (Claude Desktop) — the desktop-assistant surface**
- "[BUG] Windows: quitting the desktop app mid-save leaves ~/.claude.json at 0 bytes, then config resets to defaults (MCP servers + p..." (2026-11-01T23:57) — **config loss on crash**
  Source: https://github.com/anthropics/claude-code/issues/106634
- "[BUG] Claude Desktop rewrites \"Claude Code-credentials\" keychain item on every launch, so \"Always Allow\" never persists, causing r..." (2026-11-01T23:21) — **macOS keychain permission loop**
  Source: https://github.com/anthropics/claude-code/issues/106629
- "Desktop app: model/effort label doesn't update when the session changes model via /model or /effort" (2026-11-02T01:02)
  Source: https://github.com/anthropics/claude-code/issues/106639
- "Split View doesn't allow to open multiple projects" (2026-11-01T21:59)
  Source: https://github.com/anthropics/claude-code/issues/106623
- "[FEATURE] Choose MCP connectors per project and per environment (CLI, desktop and cloud)" (2026-11-01T20:53)
  Source: https://github.com/anthropics/claude-code/issues/106619
- "[FEATURE] Icons and colours for sidebar groups in the desktop app's Code tab" (2026-11-01T23:10)
  Source: https://github.com/anthropics/claude-code/issues/106628
- "[BUG] Desktop (Code tab, Windows): dead key acute accent (´) dropped unless the vowel is pressed almost simultaneously" (2026-11-01T22:07, closed)
  Source: https://github.com/anthropics/claude-code/issues/106625

**Billing / account friction (user-reported)**
- "[BUG] Account Banned Unjustly via App Store Pro Subscription While Using Claude Desktop for Heavy Coding" (2026-11-01T22:03) — **Apple App Store subscription → account ban**
  Source: https://github.com/anthropics/claude-code/issues/106624
- "[BUG] Claude Duet chat turns draw the cloud-session credit; Duet and its help article say plan limits only" (2026-11-01T19:37)
  Source: https://github.com/anthropics/claude-code/issues/106611
- "[FEATURE] Supported local source for plan usage (Desktop's usage history file, and an equivalent for Claude Code)" (2026-11-01T21:32) — users want **self-hosted usage visibility**
  Source: https://github.com/anthropics/claude-code/issues/106622

**Safety/over-refusal false positives (recurring theme, ~6 reports in window)**
- "[Bug] False Positive in Server Cybersecurity Analysis" (2026-11-01T22:51)
  Source: https://github.com/anthropics/claude-code/issues/106626
- "[BUG] Overly Broad Refusal on Nmap Wrapper Script Refactoring for Intranet Use" (2026-11-01T19:30)
  Source: https://github.com/anthropics/claude-code/issues/106608
- "[Bug] Fable 5.1 [cyber] safeguard flags a benign wireframe-update request once the session context discusses safeguard false posit" (2026-11-01T20:37)
  Source: https://github.com/anthropics/claude-code/issues/106616
- "[Bug] Claude Refuses Reverse Engineering of Bambu Network Driver for Personal Security Analysis" (2026-11-01T20:47)
  Source: https://github.com/anthropics/claude-code/issues/106618

**Misc notable**
- "[BUG] claude.ai connector tools never available in print mode (-p) since ~2026-11-01 20:00 UTC; interactive sessions unaffected" — **print/non-interactive mode regression**
  Source: https://github.com/anthropics/claude-code/issues/106630
- "[Bug] .claude/.cc-writes directories accumulate and are not cleaned up after use" (2026-11-02T01:01)
  Source: https://github.com/anthropics/claude-code/issues/106638
- "[BUG] The issue of the release package getting larger with each build has resurfaced." (2026-11-02T01:03)
  Source: https://github.com/anthropics/claude-code/issues/106640
- "[DOCS] OTel tool_input truncation keeps only the first 128 characters of values over 512" (2026-11-01T20:31)
  Source: https://github.com/anthropics/claude-code/issues/106614
- "[FEATURE] Telemetry: capture search results, tool descriptions and subagent handbacks for security monitoring" (2026-11-01T20:36)
  Source: https://github.com/anthropics/claude-code/issues/106615
- "System text (<total_tokens>, system/assistant/user tags) leaks into the chat and is treated as user input" (2026-11-01T20:40)
  Source: https://github.com/anthropics/claude-code/issues/106617
- "[Feature Request] Add /restart command to relaunch CLI and resume current session" (2026-11-01T19:13)
  Source: https://github.com/anthropics/claude-code/issues/106607
- "[BUG] Windows desktop app never shows a badge on its taskbar icon" (2026-11-01T18:27, closed)
  Source: https://github.com/anthropics/claude-code/issues/106603
- "[BUG] Login fails with \"cyber\" error on stock Ubuntu Jetson" (2026-11-01T22:54)
  Source: https://github.com/anthropics/claude-code/issues/106627
- "[FEATURE] Soporte de localización de la interfaz (español) en la extensión de VS Code" (2026-11-01T21:32) — **Spanish localization requested**
  Source: https://github.com/anthropics/claude-code/issues/106621
- "GitHub MCP connector: 404 on private repository after successful authentication" (2026-11-01T23:57)
  Source: https://github.com/anthropics/claude-code/issues/106635
- "OSC 7501: agent view sends no program status, and a session reopened from agent view stops reporting" (2026-11-01T18:36)
  Source: https://github.com/anthropics/claude-code/issues/106605

### A.2 openai/codex
Volume in window: **155 new issues** in 24h.

Source: https://github.com/openai/codex

**Quota / plan entitlements — the loudest theme**
- "Stop treating Plus subscribers like second-class users — keep ChatGPT and Codex quotas separate" (2026-11-01T23:15)
  Source: https://github.com/openai/codex/issues/58765
- "Listen to your users!! Do not merge Chat and Codex/Work usage!!" (2026-11-01T19:03)
  Source: https://github.com/openai/codex/issues/58742
- "After reset with LUNA6 - Light credits exausted so fast" (2026-11-01T18:04)
  Source: https://github.com/openai/codex/issues/58733
- "Make external queue polling configurable or reduce the 10-second interval" (2026-11-01T21:43)
  Source: https://github.com/openai/codex/issues/58759
- "Independent ChatGPT and Codex Desktop Applications" (2026-11-01T23:53) — request to **split** the two apps back apart
  Source: https://github.com/openai/codex/issues/58771
- "Codex Desktop: clarify the default Projects section versus custom sections and local folders" (2026-11-01T22:22)
  Source: https://github.com/openai/codex/issues/58762

**Desktop app regressions**
- "Codex Desktop migration: existing local projects disappeared from Projects sidebar after update" (2026-11-01T20:26)
  Source: https://github.com/openai/codex/issues/58754
- "Codex Desktop: Composer Predictions disappeared and \"Show predictions\" toggle is missing" (2026-11-01T19:06)
  Source: https://github.com/openai/codex/issues/58743
- "[Windows] Settings search finds Composer Predictions but its toggle is absent" (2026-11-01T18:05)
  Source: https://github.com/openai/codex/issues/58734
- "[macOS][Chat][Projects] Existing project conversations can suddenly become persistently unopenable" (2026-11-01T23:36)
  Source: https://github.com/openai/codex/issues/58770
- "[macOS app][Chats] Older image attachments show \"Couldn't load this file\" despite free storage" (2026-11-01T20:03)
  Source: https://github.com/openai/codex/issues/58748
- "[Linux Desktop] Request for improved memory efficiency and reduced idle resource usage" (2026-11-01T18:39)
  Source: https://github.com/openai/codex/issues/58739
- "[Windows][Codex Remote] Chat messages disappear after sending prompts from Phone" (2026-11-01T21:58)
  Source: https://github.com/openai/codex/issues/58760
- "[macOS][Priority handling requested] Reconnecting after backend exit triggers Hosted AppServerManager identity is not ready, inter..." (2026-11-01T23:30)
  Source: https://github.com/openai/codex/issues/58768

**MCP / connector breakage**
- "Windows MCP connector fails decoding HTTP responses; Linear works with HTTP/2 and bodyless 202 workaround" (2026-11-02T01:19)
  Source: https://github.com/openai/codex/issues/58779
- "Codex Desktop MCP approval-response bug blocks AST-MCP repository access" (2026-11-02T01:08)
  Source: https://github.com/openai/codex/issues/58778

**Sandbox / approvals**
- "Cannot request sandbox approval: sandbox_approval=false with unclear policy source" (2026-11-01T19:32)
  Source: https://github.com/openai/codex/issues/58745
- "[Windows restricted sandbox: process identity denied and HTTPS proxy connection refused" (2026-11-01T19:49)
  Source: https://github.com/openai/codex/issues/58746
- "Windows 10: Computer Use screenshot timeouts and missing click geometry on 26.1027.30824 / Sky 0.7.13" (2026-11-02T00:27)
  Source: https://github.com/openai/codex/issues/58773
- "[macOS] Computer Use and Browser Use reject access without showing an approval prompt" (2026-11-01T22:50)
  Source: https://github.com/openai/codex/issues/58763

**Safety false positives**
- "Possible false-positive Browser Use site-safety block for Taobao seller publishing page" (2026-11-01T22:52)
  Source: https://github.com/openai/codex/issues/58764
- "Codex CLI: Possible false-positive cybersecurity safety block during authorized defensive testing" (2026-11-01T20:35)
  Source: https://github.com/openai/codex/issues/58755

**Other**
- "Reconnecting... waiting for network" (2026-11-02T01:02)
  Source: https://github.com/openai/codex/issues/58777
- "VS Code extension: switching the Codex login requires Reload Window; add \"Codex: Restart App Server\" and respawn after an unexpect..." (2026-11-02T00:31)
  Source: https://github.com/openai/codex/issues/58775
- "Codex CLI cannot connect to Google Chrome" (2026-11-02T00:10)
  Source: https://github.com/openai/codex/issues/58772
- "Mobile Stop does not reliably prevent an active Goal from continuing" (2026-11-01T20:25)
  Source: https://github.com/openai/codex/issues/58753
- "Track and bound agent-created shell worktrees across long-running tasks" (2026-11-01T18:51)
  Source: https://github.com/openai/codex/issues/58740
- "Add an `osc777` notification method for terminals such as Windows Terminal" (2026-11-01T21:13)
  Source: https://github.com/openai/codex/issues/58758
- "TUI: dark-on-dark prompt input with ServerBox on Android + tmux in light theme" (2026-11-01T19:23)
  Source: https://github.com/openai/codex/issues/58744
- "Offline npm ci receives registry allowlist rejection without a completed npm child status" (2026-11-01T18:52)
  Source: https://github.com/openai/codex/issues/58741

### A.3 google-gemini/gemini-cli
Volume in window: **17** (mostly PRs + a nightly release bump to `0.67.0-nightly.20261102`). Lower issue velocity than Claude Code / Codex.

Source: https://github.com/google-gemini/gemini-cli
- "OAuth login on a headless server cannot complete: the device-code prompt is never shown, then the pasted authorization code fails" (2026-11-01T19:43, closed)
  Source: https://github.com/google-gemini/gemini-cli/issues/30086
- "CI: memory-nightly failing: 4 memory regressions over 10% (idle-session-startup +54.2%: 107.6MB vs 69.8MB)" (2026-11-01T19:12)
  Source: https://github.com/google-gemini/gemini-cli/issues/30084
- "Unrelated tool/network AbortError is classified as subagent cancellation while the parent signal is active" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30081
- "Foreground retry status can display background or stale request attempts and the wrong model budget" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30080
- "Conversation JSONL replay exceeds Node's string limit and masking regenerates durable turn IDs" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30079
- "Authentication restart forgets the worktree selected by --worktree" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30078
- "Node 26 HTTP MCP loses response headers when fetch and proxy dispatcher use different Undici implementations" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30077
- "Escape from editor selection cancels or disables the pending tool approval" (2026-11-01T10:26)
  Source: https://github.com/google-gemini/gemini-cli/issues/30076
- "bug(core): `read_file` on images still triggers 400 \"Requests ending with a model turn are not supported\" / Empty response nudge i" (2026-11-01T07:00)
  Source: https://github.com/google-gemini/gemini-cli/issues/30074
- "MCP OAuth metadata/registration fetches do not use the safe dispatcher" (2026-11-01T06:16)
  Source: https://github.com/google-gemini/gemini-cli/issues/30073
- Security-hardening PRs merged in window: "Route MCP OAuth fetches through the safe dispatcher" (2026-11-01T00:05), "ci(chained_e2e): don't expose GEMINI_API_KEY to fork-controlled code" (2026-11-02T01:11), "fix(core): keep error reports out of the shared temp directory" (2026-11-01T21:52)
  Source: https://github.com/google-gemini/gemini-cli/pull/30071

### A.4 charmbracelet/crush
Volume in window: **8** (PR-heavy, low issue volume). Signal is mostly proactive hardening.

Source: https://github.com/charmbracelet/crush
- "Server mode: the bash tool sees only the server's env, not the client-forwarded workspace env" (2026-11-01T17:01) → fixed same day by "fix(bash): preserve workspace environment in tool execution"
  Source: https://github.com/charmbracelet/crush/issues/4210
  Source: https://github.com/charmbracelet/crush/pull/4211
- **SSRF hardening:** "Block private-network fetch targets and redirect targets" (2026-11-01T06:49) — Crush adding private-network egress blocking, a security feature relevant to enterprise deployment.
  Source: https://github.com/charmbracelet/crush/pull/4205
- "feat: pipe question tools" (2026-11-01T16:09); "feat(ui): add Toggle Plan Mode to the command palette" (2026-11-01T09:17)
  Source: https://github.com/charmbracelet/crush/pull/4209
  Source: https://github.com/charmbracelet/crush/pull/4206

### A.5 anomalyco/opencode
Volume in window: **150 new issues** in 24h — second-highest after Claude Code. OpenCode is the most active OSS CLI by issue volume after Anthropic's.

Source: https://github.com/anomalyco/opencode

**Desktop↔CLI data interoperability**
- "db: latest CLI (1.19.5) fails on DB migrated by desktop app (\"Database is not empty and has no session table\")" (2026-11-01T21:01) — **desktop app migration breaks the CLI**; a recurring desktop-assistant integration pain point.
  Source: https://github.com/anomalyco/opencode/issues/61106
- "2 dias de task, Stop (não Delete), workspace sumiu." (2026-11-02T00:35) — Portuguese: two days of task, Stop not Delete, workspace vanished. **Workspace loss on Stop.**
  Source: https://github.com/anomalyco/opencode/issues/61125
- "[FEATURE] Expand synthetic updates in the web/desktop transcript" (2026-11-01T23:27)
  Source: https://github.com/anomalyco/opencode/issues/61116
- "core: shell timeout never starts when process creation stalls" (2026-11-02T00:30)
  Source: https://github.com/anomalyco/opencode/issues/61122
- "worktree_remove is gated only by edit, so a file-editing agent can delete its own worktree (uncommitted work included)" (2026-11-02T00:25) — **agent can destroy uncommitted work**
  Source: https://github.com/anomalyco/opencode/issues/61121
- "mcp: failed-at-init servers are never retried for the session lifetime" (2026-11-01T20:52)
  Source: https://github.com/anomalyco/opencode/issues/61105
- "TUI crash: Authentication required" (2026-11-01T22:35); "TUI crash: undefined is not an object (evaluating 'e.length')" (2026-11-01T20:27)
  Source: https://github.com/anomalyco/opencode/issues/61113
  Source: https://github.com/anomalyco/opencode/issues/61101
- "plugins: concurrent npm install of the same plugin across locations fails with LockTimeoutError" (2026-11-02T01:16)
  Source: https://github.com/anomalyco/opencode/issues/61131
- "[DISCUSSION] Settings: order, priority and clarifications for agents, models, variants and providers" (2026-11-01T22:50) — configuration complexity is a real pain point.
  Source: https://github.com/anomalyco/opencode/issues/61115
- "Changing Agent unexpectedly also changes the selected model" (2026-11-01T20:18)
  Source: https://github.com/anomalyco/opencode/issues/61098
- "provider.opencode whitelist/blacklist has no effect on the built-in opencode (zen) provider's model picker" (2026-11-01T22:10)
  Source: https://github.com/anomalyco/opencode/issues/61110
- "I can't use the paid Open Code Go app." (2026-11-01T19:37) — paid tier access problem.
  Source: https://github.com/anomalyco/opencode/issues/61095
- "project: duplicate project rows for the same directory, and archiving is undone on re-resolve" (2026-11-01T20:43)
  Source: https://github.com/anomalyco/opencode/issues/61104
- "[BUG] The OpenCode terminal appears unable to execute commands properly." (2026-11-01T21:38)
  Source: https://github.com/anomalyco/opencode/issues/61109
- "[FEATURE] Multiple opencode.json inside a project with documentation and git recommendation for privacy / security" (2026-11-01T20:18) — **privacy/self-hosting demand**
  Source: https://github.com/anomalyco/opencode/issues/61099
- "[FEATURE]: how to know the default model setting ? /models" (2026-11-02T00:33)
  Source: https://github.com/anomalyco/opencode/issues/61123

### A.6 cline/cline
Volume in window: **8**.

Source: https://github.com/cline/cline
- "Feature: Auto-collapse intermediate tool calls/thinking after completion, leaving only the final output" (2026-11-01T22:44) — **context-window hygiene** request; the UI-bloat problem.
  Source: https://github.com/cline/cline/issues/15486
- "Plugin initialize times out at 34000ms in Cline Desktop, only for plugins that import runtime values from @cline/core" (2026-11-01T21:46)
  Source: https://github.com/cline/cline/issues/15484
- "run_commands: bare \"Invalid input\" hides the rejected key, and compaction replaces correct tool-call examples with malformed ones" (2026-11-01T13:15) — **compaction corrupting tool-call schema**
  Source: https://github.com/cline/cline/issues/15483
- "Price shown in API Configuration and the actual provider used mismatch." (2026-11-01T12:16)
  Source: https://github.com/cline/cline/issues/15481
- "fix(models): resolve OpenRouter routing variants to the base model's info" (2026-11-01T22:15) — model-registry churn via OpenRouter.
  Source: https://github.com/cline/cline/pull/15485
- "fix(providers): keep the custom baseUrl across Disconnect" (2026-11-01T12:26)
  Source: https://github.com/cline/cline/pull/15482
- "Web app (app.cline.bot): add shortcut/last-message autofocus for the chat input" (2026-11-01T02:41)
  Source: https://github.com/cline/cline/issues/15479

### A.7 aaif-goose (Block/goose — repo now redirects to `aaif-goose/goose`)
Volume in window: **11**. Note: `block/goose` returns HTTP 301; the live repo is `aaif-goose/goose` (56k stars).

Source: https://github.com/aaif-goose/goose
- "Adversary BLOCK verdicts hard-deny and bypass the user's ask-frequency setting; route them to approval instead" (2026-11-01T19:43) → fixed same day.
  Source: https://github.com/aaif-goose/goose/issues/13271
  Source: https://github.com/aaif-goose/goose/pull/13272
- "Approve mode: an ACP provider's tool approval card is shown again after the turn; answering it exits with \"tool confirmation reque..." (2026-11-01T19:58)
  Source: https://github.com/aaif-goose/goose/issues/13273
- "One-Click Specialist Mode" (2026-11-01T23:41)
  Source: https://github.com/aaif-goose/goose/issues/13276
- "goose should have a browser Extension for proper browser use" (2026-11-01T15:21)
  Source: https://github.com/aaif-goose/goose/issues/13267
- "Check --package= value in npx malware screening" (2026-11-01T07:19)
  Source: https://github.com/aaif-goose/goose/issues/13265
- "fix(providers): report Bedrock truncation with streaming disabled" (2026-11-01T12:08)
  Source: https://github.com/aaif-goose/goose/pull/13266
- "docs: add Aggregate extension (hosted, OAuth)" (2026-11-01T15:38) — hosted/OAuth extension distribution.
  Source: https://github.com/aaif-goose/goose/pull/13268

### A.8 Aider-AI/aider
Volume in window: **9** — near-dormant relative to peers; activity is maintenance/lint fixes rather than new features.

Source: https://github.com/Aider-AI/aider
- "Uncaught NotImplementedError in pathlib.py line 1090" (2026-11-01T19:16, closed)
  Source: https://github.com/Aider-AI/aider/issues/5937
- "Recognize .yaml GitHub workflows as important files" (2026-11-01T16:43)
  Source: https://github.com/Aider-AI/aider/pull/5936
- "Fix file watcher filtering with a relative root" (2026-11-01T16:39)
  Source: https://github.com/Aider-AI/aider/pull/5935
- "Fix lint diagnostic matching for punctuation-prefixed filenames" (2026-11-01T16:36)
  Source: https://github.com/Aider-AI/aider/pull/5934
- "fix: exit with status 1 when --message-file cannot be read" / "fix: fail on unreadable or empty message files" (2026-11-01T05:37, 01:42)
  Source: https://github.com/Aider-AI/aider/pull/5930
  Source: https://github.com/Aider-AI/aider/pull/5929

### A.9 factory-ai/factory
Volume in window: **1** — only "chore(cli): document local marketplace naming" (2026-11-01T13:34). Very low public issue traffic.

Source: https://github.com/Factory-AI/factory/pull/87

### A.10 Hacker News (Algolia, 24h window)

Sample method: `hn.algolia.com/api/v1/search_by_date` with `numericFilters=created_at_i>1793496480,created_at_i<1793582880`, tags=story, per-query hitsPerPage=40. Queries run: CLI, agent, coding agent, terminal, Claude Code, Codex, Gemini CLI, Copilot. **Volume is low** — the HN term "CLI" matched 184 stories but most are generic software; the agentic-CLI-relevant subset in this window was ~9 stories for "coding agent" and ~22 for "Claude Code" (most of them Show HN, 1–5 points, 0–11 comments).

**Notable discussions**

- "Ask HN: What is a good open-weight alternative to Claude Code?" (2026-11-01T13:43, 11 comments)
  Source: https://news.ycombinator.com/item?id=50325635
  Thread substance: commenters correct the premise that "Claude Code" has weights ("Claude Code" is a harness, not a model). Recommended stacks: OpenCode as the multi-model harness; **"OpenCode and their Go plan good out of box experience for the harness, cheap plan with generous quotas"**; models cited as good open-weight picks: "GLM-5.x and Kimi 3.x", plus DeepSeekHarness ("DeepSeek flash is a pretty competent as a model, and is open weight (although you are better off buying tokens from DeepSeek)"). Notably: the recommendation to buy a **harness subscription (OpenCode Go) and use it with any model** is the emerging community answer to model-price anxiety.
  Source: https://news.ycombinator.com/item?id=50325635

- "Ask HN: How do you manage your personal agents?" (2026-11-01T15:51)
  Source: https://news.ycombinator.com/item?id=50326764
  Top reply: "use a harness like opencode that works with all models, then you don't have to switch even so" — same multi-harness-over-multi-subscription theme.

- "Tell HN: Claude Code now defaults to Haiku 5.5" (2026-11-01T10:40)
  Source: https://news.ycombinator.com/item?id=50324343
  → **Product/pricing-relevant default change**: the default model for Claude Code moved to Haiku 5.5. Cross-check: HN post "AI Nerfs: Are Claude, ChatGPT, and Gemini Nerfed Today?" (2026-11-01T23:14)
  Source: https://ai-nerfs.com

- "A simpler way to put ChatGPT to work (A shared allowance for ChatGPT and Codex)" (2026-11-01T11:13) — **pricing/entitlement change signal**: the poster quotes an OpenAI email: *"The second one received a little different email. Subject: **Chat and Work are coming together in one experience.** Hello, In the coming weeks, we'll start testing a combined experience for Chat and Work tabs in ChatGPT with a small group of users. We'll use their feedback to improve the experience before bringing it to more people."*
  Source: https://news.ycombinator.com/item?id=50324512
  → This corroborates the two Codex issue titles filed the same day: "Stop treating Plus subscribers like second-class users — keep ChatGPT and Codex quotas separate" and "Listen to your users!! Do not merge Chat and Codex/Work usage!!" (see A.2). **A Chat/Work quota merge is being tested with users — this is the clearest pricing-change signal in the 24h window.**

- "DeepSeek launches advanced coding agent to rival Claude Code" (Bloomberg, 2026-11-01T09:07, 4 pts / 4 comments)
  Source: https://www.bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic
  Source: https://news.ycombinator.com/item?id=50323814

- "GitHub Agentic Workflows generally available" (2026-11-01T14:31) — HN surfacing of GitHub's GA announcement (dated 2026-10-28 on GitHub's changelog).
  Source: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/

- "Which coding-agent CLI is best for headless workflow automation?" (2026-11-01T18:42)
  Source: https://aictrl.dev/blog/headless-coding-agent-cli-benchmark

- "Ask HN: What mistakes did AI make in your codebase?" (2026-11-01T19:25)
  Source: https://news.ycombinator.com/item?id=50328797

- "The Law of Leaky Abstractions, 24 Years Later: Robots and Coding Agents" (2026-11-01T15:36)
  Source: https://whattotelltherobot.com/p/the-law-of-leaky-abstractions-and

- "Scaling Agentic Coding as If People Still Mattered" (2026-11-01T15:12)
  Source: https://adamtornhill.substack.com/p/scaling-agentic-coding-as-if-people

- "AI agent swarms in Minecraft fail to build civilization, drown in bureaucracy" (2026-11-01T13:47, 149 pts / 72 comments) — the highest-traffic agentic story in the window.
  Source: https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-swarms-unleashed-in-minecraft-to-build-a-thriving-civilization-50-agent-teams-fail-after-falling-into-paralyzing-bureaucracy

- "Muse AI agent is a commercial surveillance network disguised as an AI assistant" (2026-11-01T18:33, 31 pts / 5 comments) — critical take on a desktop/agent assistant's data practices.
  Source: https://paulfwalsh.substack.com/p/metas-muse-ai-agent-is-a-commercial

- "A skeleton from 20 observations beat 160 tests, a cheap model nearly caught up" (2026-11-01T12:52) — an empirical paper on agentic-coding evaluation.
  Source: https://andreasrau.tech/writing/agentic-coding-paper-2026-10-31/

- "When Modernization Breaks Working Code: A Study of LLMs on Legacy PHP" (2026-11-01T21:22, arXiv)
  Source: https://arxiv.org/abs/2610.40269

**Show HN / OSS signal (agent-harness tooling around the incumbents) — mostly 1–5 points, i.e. weak traction**
- "Friday: Run Claude Code and Codex as a crew on your computer (open source)" (2026-11-01T20:48)
  Source: https://github.com/splashxmoon/friday
- "Show HN: Relayvora – Hand unfinished work between Claude Code and Codex" (2026-11-01T16:15)
  Source: https://github.com/Dagimassefa/Relayvora
- "Show HN: Skep – live cross-device sessions for AI coding agents" (2026-11-02T01:20)
  Source: https://skepagent.com/
- "Codedict – a no-AI code index that cut my Claude Code tokens by 63%" (2026-11-01T15:54) — **token-cost reduction** is a strong community theme.
  Source: https://github.com/Marqueos/codedict
- "Sweet-search – local code search for agents (5–33% cheaper runs)" (2026-11-01T15:36)
  Source: https://github.com/mrsladoje/sweet-search
- "Show HN: Offline project memory for coding agents – no API key, no vector DB" (2026-11-01T17:57)
  Source: https://github.com/krapcys1-maker/adaptive-agent-memory-research
- "Amidumb – scores how you direct Claude Code and Codex, from local logs" (2026-11-01T15:15)
  Source: https://github.com/jjinendra3/amidumb
- "The tokens in your agent harness" (2026-11-01T19:34)
  Source: https://armincat.com/articles/where-tokens-go
- "Show HN: Crosswalk – terminal manager to reduce sprawl" (2026-11-01T19:28)
  Source: https://wareshq.com/crosswalk
- "Show HN: Nonce – Open-source, least-privilege Gmail access for AI agents" (2026-11-01T21:44)
  Source: https://www.anonce.io/
- "Show HN: Search2o – An Agent Server for the Enterprise" (2026-11-01T21:39) — enterprise-agent framing is a visible niche.
  Source: https://search2o.com/
- "Made-of-meat, a listserv for agentic eng practitioners" (2026-11-01T23:07)
  Source: https://mom-hub.tryapexti.ai/

### A.11 Reddit

**Access note:** the Reddit JSON endpoints (`www.reddit.com/r/<sub>/new.json`, `api.reddit.com`) returned **HTTP 403** for this environment on all four requested subreddits — Reddit's datacenter-block of unauthenticated JSON. `old.reddit.com` returned 302. The **`/new/.rss` Atom feeds worked** and were used instead, with a **server-side rate limit (HTTP 429)** requiring ~20–45 s spacing between requests.

**r/ClaudeAI (new, sampled 2026-11-01T23:00 → 2026-11-02T01:30 UTC; 15 entries)**
Source: https://www.reddit.com/r/ClaudeAI/new/

- "RESETS" (2026-11-02T00:30) — *"Why doesn't Claude give resets? OpenAI always gives them. How often do you guys get free resets from Claude?"* → **quota-reset parity complaint between Anthropic and OpenAI.**
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlj3h5/resets/
- "2 accounts simultaneously on Windows Claude desktop app?" (2026-11-01T23:50) — user has a work (Teams) account plus a personal Max account and wants both live at once in the desktop app.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xli7z4/2_accounts_simultaneously_on_windows_claude/
- "Multiple claude instances to the same subscription" (2026-11-01T23:05) — *"I have a bunch of agents running around in a minipc at home serving as personal assistants… These are basically claude headless sessions running on demand."* → headless/CI usage running into per-subscription limits.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlh81q/multiple_claude_instances_to_the_same_subscriptio
- "How are people giving Claude access to Reddit now that new API apps are blocked?" (2026-11-01T23:56) — *"Reddit MCP Buddy just returns 403 errors, since anonymous access is blocked now. I can't create a script app for API keys because Reddit stopped accepting new API requests, and Claude in Chrome can't read Reddit pages either."* → confirms the 403 wall I hit, from the user side; **Reddit API access for agents is closing**.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlicaz/how_are_people_giving_claude_access_to_reddit_now
- "Computer use in Claude on Mac" (2026-11-02T00:17) — *"Computer and browser use on Claude seem restrictive compared to chat/codex… computer use with screen off means no screenshots on Claude, but on codex it can see the screen visuals"* → **desktop computer-use capability gap vs Codex.**
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlitaj/computer_use_in_claude_on_mac/
- "What do you keep on a dashboard so you don't have to ask Claude?" (2026-11-01T23:59) — *"Every time Claude fetches or shows you something, it costs tokens. A page you can just look at costs nothing."* → token-cost anxiety as a first-order concern.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlie8m/what_do_you_keep_on_a_dashboard_so_you_dont_have/
- "I had Claude Code build 13 3D YouTube Shorts in Blender…" (2026-11-02T01:19) — power-user creative use of the CLI; "Here's what worked and what broke".
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xlk43r/i_had_claude_code_build_13_3d_youtube_shorts_in/
- "claude opus 5.5 went 56/56 on programs with known answers. then came goldbach" (2026-11-02T01:02) — model-capability chatter (Opus 5.5).
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xljqz3/claude_opus_55_went_5656_on_programs_with_known/
- "Vibe coding environments on unreal?" (2026-11-02T01:10)
  Source: https://www.reddit.com/r/ClaudeAI/comments/1xljwul/vibe_coding_environments_on_unreal/

**r/ChatGPTCoding (new, sampled; 25 entries)**
Source: https://www.reddit.com/r/ChatGPTCoding/new/
- "How we solved zombie compilers, runaway retry loops, and transcript disk thrashing in multi-agent coding workflows" (2026-11-01T20:50) — *"our team has been running heavy multi-agent workflows using autonomous coding frameworks like Google Antigravity, Cursor, and custom CLI bridges."* → real multi-agent ops pain (in window).
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xle1pw/how_we_solved_zombie_compilers_runaway_retry
- "How Much Of AI-Generated Code We Should Actually Understand ?" (2026-11-01T19:03) — review-burden debate (in window).
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xlbd9v/how_much_of_aigenerated_code_we_should_actua
- "Burned 70% of my weekly Codex limit migrating one website from Vercel to a VPS. Is that normal?" (2026-10-28) — **weekly quota exhaustion on a single migration task.**
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xhl958/burned_70_of_my_weekly_codex_limit_migrating
- "Codex account switching vs upgrading to Pro — what's more efficient?" (2026-10-28) — users multi-accounting to dodge quota limits instead of upgrading.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xhgi4b/codex_account_switching_vs_upgrading_to_pro_
- "Codex quietly added restrictions that took me days to find" (2026-10-28) — *"Codex had added a pile of restrictions while helping me build it, without clearly telling me: output token limits, retry limits, strict field validation"*.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xhj9zr/codex_quietly_added_restrictions_that_took_m
- "Best value AI subscription under 20$/200$ (updated for Artificial Analysis Intelligence Index v5.0)" (2026-10-30) — ongoing subscription-value benchmarking.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xjoq1u/best_value_ai_subscription_under_20200_updat
- "What actually made you switch from Cursor, or what made you stay?" (2026-10-30) — *"I've been seeing quite a few discussions here and on r/cursor about people moving away from Cursor, mostly because of pricing and usage limits."* → **pricing/limits-driven churn out of the incumbent editor.**
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xjfjis/what_actually_made_you_switch_from_cursor_or
- "Running coding agents in parallel: how do you stop them colliding and filling your disk?" (2026-10-30) — parallel Codex workers colliding on shared state.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xjf5zb/running_coding_agents_in_parallel_how_do_you
- "My bottleneck moved from writing code to reviewing what the agents write…" (2026-10-29) — **review bottleneck**; the frontier complaint of the window.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xit1hg/my_bottleneck_moved_from_writing_code_to/
- "If you're only using AI coding tools in the chat UI, try the CLI" (2026-10-29) — **CLI-vs-chat push**.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xia3b2/if_youre_only_using_ai_coding_tools_in_the_c
- "How is it possible that GPT-6.1 SOL performs so much worse than Opus 4.7?" (2026-10-28) — model-comparison churn.
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1xhp0hb/how_is_it_possible_that_gpt61_sol_performs_s

**r/CLI and r/LocalLLaMA:** the `.rss` endpoints returned HTTP 200 with **empty bodies** after the 429 back-off, and the JSON endpoints remain 403. **Not sampled — gap, not evidence of silence.**

---

## Part B — Market, funding, enterprise adoption, pricing

### B.1 Pricing page snapshots (fetched live 2026-11-02 ~01:30 UTC)

**Anthropic — https://www.anthropic.com/pricing** (HTTP 200, fetched in-window)
Individual tiers as published:
- Free — $0. "Limited usage every 5 hours and every week." Chat on web, desktop, mobile.
- Pro — **$17/mo with annual subscription discount ($200 billed up front), $20 if billed monthly.** Includes Claude Code, Claude Dashboards (beta), Claude Science, Projects, $100/month API credits, 5x Pro usage per 5h/week.
- Max — **$100/mo.** 5x Pro usage, no 5-hour limit, $100/mo API credits.
- **Ultra — $200/mo.** "No 5-hour limit", 10x Pro usage per week, **$200/mo API credits (up from $100 on Max)**, early access to advanced features, priority access at high traffic times. Ultra is a distinct tier above Max on the individual plan.
- Team (2–150 seats): **standard seat $20/seat/mo billed annually ($25 monthly); premium seat $100/seat/mo billed annually ($125 monthly)** — premium = 5x usage. Team includes Claude Code and Claude Cowork, Claude Design/Slides/Docs, Claude Science, M365/Claude Tag, enterprise search, SSO, admin controls for remote and local connectors, and **"Enterprise deployment for the Claude desktop app"**.
- Enterprise: **US$20/seat/mo billed annually, 20-seat minimum**, usage at API rates; adds spend limits, RBAC, SCIM, audit logs, Compliance API, custom data retention, IP allowlisting, HIPAA-ready, Claude Security (beta).
- Notable new/renamed product surfaces visible in the plan matrix: **Claude Cowork**, **Claude Dashboards (beta)**, **Claude Motion (beta)**, "Hand off and schedule tasks" (Pro+), Fable on usage credits, "Desktop extensions" (Pro+).
- Page carries the line: *"Price and plans are subject to change at Anthropic's discretion."*
Source: https://www.anthropic.com/pricing

**OpenAI — https://openai.com/chatgpt/pricing/ : NOT FETCHABLE.** HTTP 403 with a Cloudflare-style "Enable JavaScript and cookies to continue" interstitial for this environment. **Pricing data for ChatGPT/Codex tiers was therefore not verified directly in-window** — instead see B.3 (the Chat/Work quota-merge test) and B.4 (Codex issue titles about quota separation), which are primary user reports of entitlement changes.

**GitHub Copilot — https://github.com/features/copilot/plans** (HTTP 200, fetched in-window)
- Tiers: **Free $0, Pro $10/mo, Pro+ $39/mo, Max $100/mo.**
- **GitHub AI Credits** model (credits are consumed by "Agent mode, code review, Copilot in the cloud, **Copilot CLI**, and Copilot app"; "Free plan supports CLI and agent mode"):
  - Base credits: Pro $10/mo, Pro+ $39/mo, Max $100/mo (Free = limited).
  - "Total GitHub AI Credits" line reads Pro $15/mo, Pro+ $70/mo, Max $200/mo.
  - Flex allotment (variable additional usage on top of base, "Flex allotments may change over time"): Pro $5/mo, Pro+ $31/mo, Max $100/mo.
  - **Pooled usage** (AI credits shared org-wide with admin spend controls): *Not included on any individual tier* — enterprise-only.
  - Purchase of additional AI Credits: Pro/Pro+/Max = Included; Free = Not included.
- Feature gating (agent-relevant): **"Delegate tasks to third-party coding agents like Claude by Anthropic and OpenAI Codex (Preview)" is Pro+ and Max only** — Free/Pro = Not included. Code review, Copilot in the cloud, agent mode in VS Code/Visual Studio/JetBrains/Eclipse/Xcode, and MCP-server integration are **Pro+ and up**. Free/Pro keep: editors, **CLI**, github.com/Mobile, agent mode, MCP, custom instructions and agents.
- **"GitHub Enterprise now includes access to GitHub Copilot."** — banner on the plans page.
Source: https://github.com/features/copilot/plans
Source: https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot

### B.2 GitHub's agentic push (vendor changelog, dated 2026-10-28 — pre-window context, but surfaced inside the window)
GitHub Changelog entries dated 2026-10-28:
- "Route and orchestrate models with GitHub Copilot Fusion" — Source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
- "GitHub intelligence puts your code, context, and history to work" — Source: https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work
- "Build shared workflows for your team with Copilot Automations" — Source: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations
- "Repository plugin defaults and enterprise plugin controls generally available" — Source: https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available
- "GitHub Copilot app, Universe releases" / "GitHub Copilot in VS Code, Universe releases" / "Security extension for the GitHub Copilot app" / "Generate and edit images directly in Copilot"
- "GitHub Agentic Workflows generally available" (2026-10-28; surfaced on HN 2026-11-01T14:31) — Source: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/
→ Reading: GitHub is moving the CLI/agent surface into a **credit-metered, enterprise-pooled** model while simultaneously bundling Copilot into GitHub Enterprise.

### B.3 Anthropic S-1 / IPO — the largest enterprise-adoption datapoint available (filed 2026-10-26, pre-window context)
From the S-1 as reported by TechCrunch (fetched 2026-11-02):
- **Revenue $16.3B for H1 2026, up from $1.2B in the same period of 2025.**
- **As of Sept 30, 2026: >11,900 customers spending ≥$100k/yr; >1,900 spending ≥$1M; ~250 spending ≥$10M/yr.** Net revenue retention **~900%** as of end of Q3.
- **Cross-sell is the story:** "More than half of customers spending at least $100,000 annually now use both the Claude platform and a first-party app like Claude Code or Cowork, up from about 30% at the end of last year." → i.e. **CLI/desktop apps are the enterprise land-and-expand wedge**, not a side product.
- **The top 5% of Claude Enterprise customers who use Claude Code spent about 20x as much per month as the average enterprise user who didn't use the coding tool.**
- Anthropic keeps the direct customer contract under a "joint go-to-market approach" with AWS/GCP/Azure and **pays each cloud provider a fee, which lets it "avoid channel conflict" and "set pricing"** — i.e. Anthropic, not the clouds, owns the price.
- Applied AI teams + a new venture with Blackstone and other PE firms, "Ode with Anthropic," embedding forward-deployed engineers.
- Risks flagged: cloud partners now competing with Anthropic for compute; customer concentration.
Source: https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/
Source (primary filing): https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
Also: "Anthropic set to make stock market debut…" (CNN, 2026-10-26) — Source: https://www.cnn.com/2026/10/26/tech/anthropic-files-ipo

### B.4 OpenAI: Chat/Work quota merge is being tested with users (IN-WINDOW signal)
- A user posted to HN on 2026-11-01T11:13 the text of an OpenAI email: subject **"Chat and Work are coming together in one experience"** — "In the coming weeks, we'll start testing a combined experience for Chat and Work tabs in ChatGPT with a small group of users." (first email received was from their first ChatGPT Plus account; second email subject differed)
  Source: https://news.ycombinator.com/item?id=50324512
- The same day, two Codex issues were filed against the change:
  - "Stop treating Plus subscribers like second-class users — keep ChatGPT and Codex quotas separate" (2026-11-01T23:15) — Source: https://github.com/openai/codex/issues/58765
  - "Listen to your users!! Do not merge Chat and Codex/Work usage!!" (2026-11-01T19:03) — Source: https://github.com/openai/codex/issues/58742
  - "Independent ChatGPT and Codex Desktop Applications" (2026-11-01T23:53) — Source: https://github.com/openai/codex/issues/58771
→ Reading: **OpenAI is consolidating Chat and Work/Codex entitlements into a single allowance.** Users are resisting. This is the most concrete pricing-model change in the 24h window, and it is directly visible in the CLI/desktop issue trackers.

### B.5 Competitive move: DeepSeek's open-source "Super-Agent" (IN-WINDOW)
- 2026-11-01, Bloomberg: "DeepSeek Drops Enhanced Coding Agent With Aim to Rival Anthropic" — DeepSeek "has released a prototype of a more autonomous coding agent as it seeks to challenge Anthropic PBC's popular Claude Code."
  Source: https://www.bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic
- The "Super-Agent" concept from DeepSeek's Harness team is open-source and works "across group chats", monitoring developer conversations and proactively suggesting fixes without being prompted.
  Source: https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/
  Source: https://stocktwits.com/news-articles/markets/equity/deepseek-autonomous-coding-agent-anthropic-ipo-claude-code/cNGekVdR9cy
- Pre-window context of the same launch: "Weeks Ahead Of Expected Anthropic IPO, DeepSeek Launches Autonomous Coding Agent."
  Source: https://www.ainvest.com/news/deepseek-free-coding-agent-1-5-trillion-pricing-power-question-anthropic-ipo-2611/
→ Reading: a **price-led open-weight entrant launching a Claude Code competitor into the window**, timed against Anthropic's IPO — i.e. pricing pressure on agent subscriptions is intensifying on both the value and the open-weight side.

### B.6 Enterprise-adoption and vendor-news context (pre-window, for the market picture)
- OpenAI, 2026-10-28: "OpenAI and ServiceNow expand partnership across enterprise workflows" — Source: https://openai.com/index/openai-servicenow-partnership-expansion
- OpenAI, 2026-10-29: "Credit Saison achieves 954% ROI in a ChatGPT Enterprise pilot" — Source: https://openai.com/index/credit-saison
- OpenAI, 2026-10-27: "OpenAI expands partnership with Oracle to bring its apps to ChatGPT" — Source: https://openai.com/index/oracle-apps-in-chatgpt
- OpenAI, 2026-10-30: "Fair use benefits everyone" — Source: https://openai.com/index/fair-use-benefits-everyone
- Cursor changelog (no entries in window; last 2026-10-20 "Agent SDK") — Source: https://cursor.com/changelog/agent-sdk
- Sourcegraph blog (no entries in window; last 2026-10-21) — notably "Coding agents usually can't price on outcomes. Ours can." (2026-09-16), introducing outcome-based pricing for Agentic Batch Changes — Source: https://sourcegraph.com/blog/agentic-batch-changes-pricing — and "Compliance-first AI: proving agent provenance for regulated engineering teams" (2026-07-27) — Source: https://sourcegraph.com/blog/compliance-first-ai-proving-agent-provenance
- JetBrains (no in-window entries; last 2026-10-30): "Junie Local became 70% faster on Mac M5" (2026-10-28) — Source: https://blog.jetbrains.com/junie/2026/10/junie-local-splash-dflash2/ ; "Junie Eco Mode" (2026-10-28) — Source: https://blog.jetbrains.com/junie/2026/10/junie-eco-mode/ ; "Getting Started with Air in JetBrains IDEs – Part 1" (2026-10-28) — Source: https://blog.jetbrains.com/ai/2026/10/getting-started-with-air-part1/
- Funding rounds: **no new agentic-CLI funding round was verifiable inside the 24h window.** Pre-window context that is circulating in search results (secondary sources, not confirmed in-window): Cognition (Devin) raised >$2B Series E on 2026-09-08 at a reported $48B valuation led by a16z and Accel — Source: https://www.dutchstartup.ai/en/news/cognition-raises-2-billion-for-ai-coding-agent-devin-valuation-climbs-to-48 ; Anysphere/Cursor reported in talks for a >$2B round at ~$50B valuation, and separate reports of a SpaceX approach at a ~$60B valuation — Source: https://theoutpost.ai/news-story/cursor-targets-50-b-valuation-as-ai-coding-startup-prepares-to-raise-over-2-billion-25490/ — Source: https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/ (treat the $60B figure as unconfirmed single-source).
→ Reading: the capital-markets story for this category in 2026 is **IPO/consolidation rather than fresh seed rounds** — Anthropic's S-1 (Oct 26) and Cursor's reported late-stage talks are the dominant frames.

### B.7 Pricing/entitlement pain points as reported by users (in-window)
- Anthropic does not issue free quota resets the way OpenAI does — "RESETS" (r/ClaudeAI, 2026-11-02T00:30) — Source: https://www.reddit.com/r/ClaudeAI/comments/1xlj3h5/resets/
- Anthropic bans accounts for heavy Claude Desktop usage on App Store subscriptions — "[BUG] Account Banned Unjustly via App Store Pro Subscription While Using Claude Desktop for Heavy Coding" (2026-11-01T22:03) — Source: https://github.com/anthropics/claude-code/issues/106624
- Users want local/inspectable usage accounting — "[FEATURE] Supported local source for plan usage (Desktop's usage history file, and an equivalent for Claude Code)" (2026-11-01T21:32) — Source: https://github.com/anthropics/claude-code/issues/106622
- ChatGPT/Codex quota merge backlash (see B.4).
- Community cost-saving tooling is proliferating as a direct response to quota/price friction: local code indexing to cut token spend ("cut my Claude Code tokens by 63%"), "local code search for agents (5–33% cheaper runs)", offline project memory with no API key, plus a "no-AI code index" — Sources: https://github.com/Marqueos/codedict , https://github.com/mrsladoje/sweet-search , https://github.com/krapcys1-maker/adaptive-agent-memory-research
- OpenCode's paid tier ("Go") is being recommended in HN as a **cheap, generous-quota multi-model harness** that can be used with any model — Sources: https://news.ycombinator.com/item?id=50325635 , https://github.com/anomalyco/opencode/issues/61095 ("I can't use the paid Open Code Go app.")

---

## Coverage gaps and caveats (explicit)

1. **Reddit JSON API was blocked (HTTP 403) for all four target subreddits.** Only `/new/.rss` Atom feeds worked, and those hit a server-side HTTP 429 rate limit. **r/CLI and r/LocalLLaMA returned empty bodies after back-off and were NOT sampled.** No Reddit conclusions should be drawn for those two subreddits.
2. **OpenAI's pricing page could not be fetched (HTTP 403, JS/cookie interstitial).** ChatGPT/Codex tier prices and limits are therefore unverified in-window; the only OpenAI pricing evidence here is the forwarded "Chat and Work" email plus Codex issue titles (both user reports).
3. **sourcegraph/amp could not be sampled**: `api.github.com/repos/sourcegraph/amp` → 404, `sourcegraph/amp-code` and `ampcode/amp` → 404. The repo appears renamed/private; the only Amp artefacts found were third-party integrations (amp.el, amp.nvim, amp-proxy-rs, amp-prompts) and a note that "Sourcegraph has deprecated Cody in favour of Amp". **No Amp issue-tracker evidence in this report.**
4. **`block/goose` now 301-redirects to `aaif-goose/goose`** — sampled under the new name.
5. **GitHub API unauthenticated limit (60/hr) was available** (remaining 60 at start), but the search API returned `total_count` only; per-repo listings were capped at 40 items/page and 30–50 per page, so counts like "173 issues in 24h" are `total_count` from the GitHub search API, and the listed titles are a **newest-first sample, not exhaustive**.
6. **The window is thin.** This was a Sunday (2026-11-01). HN story volume for "coding agent" was 9 and most agentic-CLI Show HNs scored 1–5 points. **Low traffic is not evidence of low interest.**
7. **No new funding round was confirmed inside the window**; funding context in B.6 is explicitly labelled pre-window and partly single-sourced.
8. Vendor news pages for anthropic.com/news, openai.com/news, cursor.com/changelog, factory.ai, zed.dev, blog.jetbrains.com and sourcegraph.com returned a **suspicious identical placeholder body** when fetched via plain curl (a proxy/interstitial), so RSS feeds were used where available; `block.github.io/blog` 404s and Anthropic/Zed/Factory expose no RSS at the standard paths.
9. All issue/PR/post titles are **user reports quoted as filed**; none were independently verified against released builds.

---

## Synthesis — what actually matters in this 24h window

**Community pulse**
1. **Issue volume is overwhelmingly concentrated in the two closed-source leaders.** Claude Code 173 new issues/24h, Codex 155, OpenCode 150, Gemini CLI 17, Crush 8, Cline 8, Goose 11, Aider 9, Factory 1. The desktop-app surfaces (Claude Desktop, Codex Desktop, OpenCode desktop/web) are where the *new* breakage concentrates: config loss on crash (Claude Desktop `~/.claude.json` → 0 bytes), keychain "Always Allow" not persisting, project migration wiping the Projects sidebar (Codex Desktop), CLI↔desktop DB incompatibility (OpenCode CLI 1.19.5 failing on a desktop-migrated DB).
2. **The single most common class of complaint is not "the model is bad" — it's quota, entitlement and account friction.** Codex: "Stop treating Plus subscribers like second-class users — keep ChatGPT and Codex quotas separate." Claude Code: "Account Banned Unjustly via App Store Pro Subscription While Using Claude Desktop for Heavy Coding." r/ClaudeAI: "Why doesn't Claude give resets? OpenAI always gives them." Multi-accounting to dodge limits is an openly discussed workaround.
3. **Safety false positives are a cross-vendor tax.** Six+ Claude Code reports of benign requests flagged as cyber-risk, two Codex reports of false-positive Browser/CLI cyber blocks, a Goose bug where "Adversary BLOCK verdicts hard-deny and bypass the user's ask-frequency setting" (fixed same day), and Gemini CLI routing MCP OAuth metadata fetches through a "safe dispatcher." Over-refusal is now a top-3 issue class.
4. **Long-running and headless sessions break first.** "Model request never returns: session sleeps for hours," "Agent loses context on multi-day epic and switches to unrelated workstream," "Background subagents are killed by OAuth session expired," "Conversation JSONL replay exceeds Node's string limit," plus the r/ChatGPTCoding report of "zombie compilers, runaway retry loops, and transcript disk thrashing" from multi-agent workflows.
5. **Cost is a first-class community concern, and the community is building around it.** Token dashboards ("a page you can just look at costs nothing"), local code indexes (-63% Claude Code tokens), local search (-5–33% run cost), offline memory with no API key, and a strong HN preference for a **single multi-model harness subscription (OpenCode Go) over per-vendor subscriptions**.
6. **Unexpected/adjacent signal:** DeepSeek shipped an open-source, *proactive* "Super-Agent" coding agent (Nov 1) aimed squarely at Claude Code — a price-and-openness attack on the CLI subscription model, timed against Anthropic's IPO. Separately, "Muse AI agent is a commercial surveillance network disguised as an AI assistant" (31 pts on HN) suggests agent privacy is becoming a mainstream critique, not a niche one.

**Market / enterprise / pricing**
7. **The Chat/Work merge at OpenAI is the headline pricing change** — tested with a small group of users ("Chat and Work are coming together in one experience"), with immediate, organized user resistance in the Codex tracker and on HN.
8. **Anthropic's published individual tiers now include a $200/mo Ultra above the $100/mo Max, with monthly API credits ($100 → $200) attached to the higher tiers**; Team sells two seat types ($20 standard / $100 premium); Enterprise is $20/seat/mo with a 20-seat minimum and includes enterprise deployment of the Claude desktop app.
9. **GitHub is converting Copilot to a credit-metered, enterprise-pooled model** (base + flex + purchasable AI Credits; pooled usage enterprise-only) while **bundling Copilot into GitHub Enterprise** — and gating "Delegate tasks to third-party coding agents like Claude by Anthropic and OpenAI Codex" to Pro+/Max. GitHub is becoming the reseller/aggregator of third-party CLI agents.
10. **Claude Code is Anthropic's enterprise expansion wedge, by its own S-1 numbers:** >50% of ≥$100k customers now buy both the API and a first-party app (vs ~30% a year earlier); top-5% Enterprise Claude Code users spend ~20x the average enterprise user per month; H1-2026 revenue $16.3B with ~900% NRR and >11,900 six-figure customers.
11. **No new funding round landed in-window.** The category's capital story has shifted to public markets (Anthropic's S-1, Oct 26) and late-stage consolidation (reported Cursor/Anysphere ~$50–60B valuation talk), not seed rounds.

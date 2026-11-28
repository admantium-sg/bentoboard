# Orchestrator Findings — agentic-cli-tools — 2026-11-14

**Window:** 2026-11-13T01:28:00Z → 2026-11-14T01:28:00Z
**Method:** direct `curl` against primary sources (SEC EDGAR, GitHub Advisory API, npm registry, raw.githubusercontent.com, code.claude.com, Yahoo Finance chart API). Zero web_search, zero web_fetch consumed by the orchestrator this cycle.

---

## (A) CORRECTION — THE CLAUDE CODE ADVISORY HISTORY IS THIRTY ADVISORIES AND TWENTY-FOUR HIGH-SEVERITY, NOT TEN AND SEVEN

**This is the second correction to the same number in two cycles, and both prior figures were pagination artifacts.**

Querying `https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code&per_page=100` returns **30 distinct advisories**: **24 high**, **4 medium**, **2 low**, spanning **2025-06-23 → 2026-11-09**. There is **no `Link` header** on the response, so a single 100-item page is the complete set — this is not truncation.

Prior-cycle figures and why they were wrong:
- 2026-11-12 cycle: "six items, three high-severity sandbox-escape-class bugs in seven months" — artifact of truncating the API list at six.
- 2026-11-13 cycle: "ten advisories, seven HIGH" — **also an artifact**, this time of not raising `per_page` above the default (30 per page, but the earlier query evidently stopped early or was truncated at ten).
- Correct: **30 advisories, 24 high**, and the 2026-11-09 GHSA is still the newest.

**Full inventory (published_at, severity, GHSA, CVE, summary):**

| Published | Sev | GHSA | CVE | Summary |
|---|---|---|---|---|
| 2026-11-09 | high | GHSA-5xjx-9qx6-jcrv | CVE-2026-88968 | TOCTOU Race in Edit Tool Allows File Writes Outside the Workspace |
| 2026-10-15 | high | GHSA-pq7j-f95f-qfcv | CVE-2026-86063 | Plugin Hash Pin Bypass |
| 2026-07-24 | high | GHSA-7835-87f9-rgvv | CVE-2026-55607 | Sandbox Escape via Git Worktree Path Confusion |
| 2026-06-25 | medium | GHSA-4vp2-6q8c-pvq2 | — | Insecure Temporary File in /copy Enables Response Disclosure |
| 2026-06-17 | medium | GHSA-fg94-h982-f3mm | — | Out-of-Band Data Exfiltration via Pre-Approved HuggingFace Domain in WebFetch |
| 2026-04-24 | high | GHSA-q5hj-mxqh-vv77 | CVE-2026-40068 | Trust Dialog Bypass via Git Worktree Spoofing |
| 2026-04-21 | high | GHSA-vp62-r36r-9xqp | CVE-2026-39861 | Sandbox Escape via Symlink Following |
| 2026-04-17 | medium | GHSA-5cwg-9f6j-9jvx | — | Insecure System-Wide Configuration Loading Enables Local Privilege Escalation on Windows |
| 2026-03-19 | high | GHSA-mmgp-wc2j-qcv7 | CVE-2026-33068 | Workspace Trust Dialog Bypass via Repo-Controlled Settings File |
| 2026-02-06 | high | GHSA-ff64-7w26-62rf | CVE-2026-25725 | Sandbox Escape via Persistent Configuration Injection in settings.json |
| 2026-02-06 | low | GHSA-4q92-rfm6-2cqx | — | Permission Deny Bypass Through Symbolic Links |
| 2026-02-06 | high | GHSA-mhg7-666j-cqg4 | CVE-2026-25723 | Command Injection via Piped sed Command Bypasses File Write Restrictions |
| 2026-02-06 | high | GHSA-66q4-vfjg-2qhh | CVE-2026-25722 | Command Injection via Directory Change Bypasses Write Protection |
| 2026-02-03 | high | GHSA-qgqw-h4xq-7w8w | CVE-2026-24887 | Command Injection in find Command Bypasses User Approval Prompt |
| 2026-02-03 | high | GHSA-q728-gf8j-w49r | CVE-2026-24053 | Path Restriction Bypass via ZSH Clobber |
| 2026-02-03 | high | GHSA-vhw5-3g5m-8ggf | CVE-2026-24052 | Domain Validation Bypass |
| 2026-01-21 | medium | GHSA-jh7p-qr78-84p7 | — | Leaks Data via Malicious Environment Configuration Before Trust Confirmation |
| 2025-12-03 | high | GHSA-xq4m-mc3c-vvg3 | — | Command Validation Bypass Allows Arbitrary Code Execution |
| 2025-11-20 | high | GHSA-7mv8-j34q-vp7q | — | Sed Command Validation Bypass |
| 2025-11-19 | high | GHSA-5hhx-v7f6-x7gv | — | Command Execution Prior to Startup Trust Dialog |
| 2025-10-03 | low | GHSA-66m2-gx93-v996 | — | Permission Deny Bypass Through Symlink |
| 2025-10-03 | high | GHSA-4fgq-fpq9-mr3g | — | Execute Commands Prior to Startup Trust Dialog |
| 2025-09-24 | high | GHSA-2jjv-qf24-vfm4 | — | Arbitrary Code Execution via Plugin Autoloading (specific Yarn version) |
| 2025-09-10 | high | GHSA-j4h9-wv2m-wrf7 | — | Arbitrary Code Execution via Maliciously Configured git email |
| 2025-09-10 | high | GHSA-qxfv-fcpc-w36x | — | rg Vulnerability Does Not Protect Against Approval Prompt Bypass |
| 2025-09-03 | high | GHSA-ph6w-f82w-28w6 | — | Arbitrary Code Execution Due to Insufficient Startup Warning |
| 2025-08-18 | high | GHSA-x5gv-jw7f-j6xj | — | Permissive Default Allowlist Enables Unauthorized File Read and Network Exfiltration |
| 2025-08-04 | high | GHSA-x56v-x2h6-7j34 | — | echo Command Allowed Bypass of User Approval Prompt |
| 2025-08-04 | high | GHSA-pmw4-pwvc-3hx2 | — | Path Restriction Bypass (research preview) |
| 2025-06-23 | high | GHSA-9f65-56v6-gxw7 | — | Improper Authorization via WebSocket Connections from Arbitrary Origins |

**Advisory density by month:** 2025-06 (1), 2025-08 (3), 2025-09 (4), 2025-10 (2), 2025-11 (2), 2025-12 (1), 2026-01 (1), 2026-02 (**7**), 2026-03 (1), 2026-04 (3), 2026-06 (2), 2026-07 (1), 2026-10 (1), 2026-11 (1).

**The real shape of the data:** a cluster of **seven high-severity advisories published within a single 4-day window (2026-02-03 to 2026-02-06)** — four of them command-injection / path-restriction / domain-validation bypasses. Two more high-severity sandbox-escape or trust-bypass entries follow on 2026-04-21 and 2026-04-24. The density is front-loaded into the Feb 2026 release burst, not steadily rising.

**NO new advisory was published in this window.** The newest `published_at` is still 2026-11-09T22:42:03Z.

Source: https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code&per_page=100

---

## (B) THE CODE MODE DOCUMENTATION PAGE NOW EXISTS — THE PRIOR CYCLE'S "PAGE NOT FOUND" GAP IS CLOSED

`https://code.claude.com/docs/en/code-mode` returned **HTTP 200** at 2026-11-14 01:35Z (it returned "Page Not Found" at the 2026-11-13 window close). Full page: 324,086 bytes, titled **"Run tool calls from code with Code Mode"**, and it appears in the Claude Code docs navigation under **Model and responses**.

**What the docs establish about Code Mode:**

- **Mechanism:** "Claude writes a piece of JavaScript that makes the tool calls, and Claude Code runs that code in your session." Without it, Claude asks for tool calls (Bash, Read, Edit) directly and reads each result before deciding what to do next. In the conversation you see the tool calls (e.g. an edit's diff), **not the code**; press **Ctrl+O** to open the transcript viewer and expand a collapsed "Code" row.
- **Status:** "Code Mode is experimental and off by default. It may change or be removed in any release."
- **Example API:** ``const files = await $`rg -l "function retryPolicy" src`.text();`` — a tagged-template `$` shell runner, with `.text()`, `.nothrow()` variants; `await edit(target, "maxAttempts: 3", "maxAttempts: 5")`.

**Requirements (explicit and restrictive):**
- **Version:** Claude Code **v2.1.323 or later, on either release channel**.
- **Account:** a Claude subscription or Console account. **Not** through a gateway, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, or Microsoft Foundry.
- **Organization:** must not use the HIPAA configuration or zero data retention.
- **Model:** **Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, or Fable 5.2** only.
- **Surface:** an interactive `claude` session in a terminal. **Code Mode does not work with `-p`, the Agent SDK, the VS Code panel, the Desktop app, or cloud sessions.**
- **Installation:** the native build of Claude Code; on Windows, Git for Windows installed.
- **Blocked by:** API key helper, agent teams, OpenTelemetry export, `DISABLE_TELEMETRY`.

**Enablement:** set `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` in the shell or in `~/.claude/settings.json` under `env`. **Claude Code ignores the variable in a project's settings files**, so a cloned repo cannot turn Code Mode on for you. The session shows `Code Mode (experimental) is on · this session can be resumed only with Code Mode on`. To **block** it organization-wide, set the same variable to `"0"` in managed settings.

**Resumption rule:** "With Code Mode off, Claude refuses to resume the session. Sessions that you started without Code Mode resume without Code Mode, even with the variable set."

**Documented limitations:**
- Resuming a Code Mode session is **terminal-only**.
- In **auto mode**, the classifier reviews **the code, not each tool call**, and "doesn't see values computed at run time, such as a path taken from search output."
- **Long-running code:** waiting mode **stops after ten minutes**; background mode runs **up to two hours**.
- **Hooks:** tool calls refused when a PreToolUse hook can't run or times out; code output blocked by a UserPromptSubmit hook.
- **Unavailable features:** Remote Control, Claude in Chrome, computer use, moving the session to the Desktop app, background sessions, `/fork` background copies.

**Permission model (the sharpest technical detail):** "Each tool call that Claude's code makes goes through your deny and ask permission rules and your PreToolUse hooks. **You don't need to change a rule or matcher for a tool such as Bash.**" But: "**Bash rules match command text, so Claude can run a denied command in a form the rule doesn't match**, with or without Code Mode." And: "a classifier reviews the code in auto mode, and you answer prompts in the modes that ask." To inspect the code itself, write a PreToolUse hook matching **`REPL`** (the tool that runs Claude's code) and read the JavaScript from `tool_input.code`.

Source: https://code.claude.com/docs/en/code-mode

---

## (C) CLAUDE CODE 2.1.324 AND 2.1.325 SHIPPED IN-WINDOW — AND 2.1.324 HAS NO NOTES AT ALL

npm `@anthropic-ai/claude-code` dist-tags at 2026-11-14 01:35Z: **`stable: 2.1.311`, `latest: 2.1.325`, `next: 2.1.325`**. The **stable** channel is still three releases behind `latest`.

Publish timeline (npm `time`):
- 2.1.323 — 2026-11-12T20:29:28Z (prior cycle)
- **2.1.324 — 2026-11-13T18:42:36Z ← IN-WINDOW**
- **2.1.325 — 2026-11-13T20:07:25Z ← IN-WINDOW** (npm `modified` 2026-11-13T20:39:09Z)
- GitHub release `v2.1.325` published **2026-11-13T20:40:01Z**.

**2.1.324 is a silent release:** it appears in the npm `time` map but there is **no `## 2.1.324` section in CHANGELOG.md** (grep count: 0) and **no GitHub release for v2.1.324** (the releases API returns v2.1.325, v2.1.323, v2.1.322, v2.1.321, v2.1.319, v2.1.318 — v2.1.324 and v2.1.320 are absent). Its contents are therefore **unverifiable**; treat it as a packaging/redistribution release with no user-visible notes.

**2.1.325 has a large, substantive changelog — 139 entries — and it is the most security-dense release in the tracked window.**

**Security-relevant (no CVE named, consistent with the house pattern):**
- "**Fixed a security issue in how zstd-compressed responses are decoded**" — the lead item of the release. No GHSA/CVE identifier is given.
- "**Changed sandboxed Bash commands to follow the normal permission flow by default**; set `sandbox.autoAllowBashIfSandboxed: true` to keep running them without prompts." — **this is a behavioural tightening**: sandboxed commands that previously ran unprompted now ask.
- "Changed the sandbox to **refuse sandboxed writes to `.claude` settings, skills, agents, commands and hooks in added directories**, as it does in the launch folder."
- "Fixed a **gap in Bash permission checks where some compound commands could run without asking**; these now ask for permission."
- "Fixed a case where a **Bash allow rule could run a different program than the one it names**."
- "Fixed a case where the **Bash sandbox did not fully protect a worktree's settings and hooks**" and "…a **linked worktree's shared git folder**."
- "Fixed **sandboxed commands being able to write to the native updater's download folder** in some cases."
- "Fixed some **deny and ask rules not applying to certain Bash commands**" and "some **subagents changing an artifact that people outside your organization can see** … without asking first when an allow rule is set."
- "Changed read-only git commands to **ask first in a repository that isn't the project's or one you trusted**; name it with `--add-dir`."
- "Changed **worktree isolation**: an isolated worktree session or agent is now refused `git bisect run`, `git maintenance register|start` and `scalar`'s set-up commands."
- "Changed **EnterWorktree to refuse a `WorktreeCreate` hook path that goes through a symlink** inside the project."
- "Changed self-hosted runners to **refuse a session whose session folder or repository path is a symbolic link**, other than a `checkout` hook's checkout."
- "Improved the account email check: it now also **refuses your email as a client's identity** in scripts a command runs, file writes, web fetches and MCP calls."
- "Fixed **relative deny and ask permission rules (e.g. `Read(./.env)`) no longer covering the project after a `cd`**; they now also apply in added directories."
- "Fixed a case where a **committed `.claude/settings.local.json` could be treated as the user's own** when Claude Code was started in certain subfolders of a repository."
- "Fixed plugin loading to **skip, and `claude plugin validate` to report, some unsafe paths and links in a plugin's folder**."
- "Fixed **sandboxed commands being able to read** … " (the earlier 2.1.323 family of checkpoint-copy reads).
- "Changed the programs that Claude Code's sandbox starts for its own use, such as its **network bridge, to run without Claude Code's sign-in tokens and API keys** in their environment" — extends the 2.1.323 credential-stripping change.

**Code Mode specific fixes in 2.1.325 (the feature is being hardened one release after launch):**
- "Fixed **Code Mode scripts ignoring a worktree entered with `EnterWorktree`**, writing `~` paths into the project, and leaving `/mcp` showing an MCP server as connected after its sign-in expired."
- "Fixed **words typed with a Yes at a permission dialog or plan approval not reaching Claude in Code Mode**."
- "Fixed **Claude starting work by itself when you resumed a session that ended during a Code Mode script**; it now waits for your next prompt."

**Other notable 2.1.325 items:**
- `claude remote-control` now **exits with status 4** when it stops by itself and **69** when it can't register, so a service manager can restart it.
- "Improved **subagents cut off at the output token limit**: they are now asked for the whole answer again, more briefly, instead of returning only its end."
- "Fixed subagents on a different model **sizing file reads and MCP results with the main session's model**."
- "Fixed sessions on many third-party gateways and Foundry **stopping with a context length error on every turn instead of compacting**."
- "Fixed `/insights` saying a report was ready when no session qualified for analysis, and **writing two values into its HTML report without escaping them**" — a minor XSS-shaped bug in a local report.
- "Fixed `/stats` showing an Active days total that was one day too high."
- "Fixed **`claude auth status` and other short commands leaving a lock behind on a Console profile**, which made the next session hang for about a minute."
- "Changed `CLAUDE_CODE_MAX_CONTEXT_TOKENS` to also set the context window of **unrecognized model IDs that start with `claude-`**, such as a gateway's `claude-sonnet-latest`."
- "Changed `/cost`, `$.session.usage()`, `--max-budget-usd` and the cost and token metrics to **count a mod's `$.model.complete` and `$.model.classify` calls**."
- "Changed **plugin MCP bundles (`.mcpb`, `.dxt`) to unpack under the plugins directory**, not `.mcpb-cache` in the plugin's folder."
- "Changed `pluginDigests` to be **deprecated and ignored**."
- "Changed **marketplace `ref` to accept the full ID of any commit on a branch or tag**."
- "Changed `claude -p` with no cached account data to **wait for that data before its first request**."
- VSCode: **prompt suggestions now appear in the terminal too** (Tab accepts a suggested next prompt; `promptSuggestionEnabled: false` disables); **a Console sign-in that creates no API key**; MCP sign-in redirect URL paste field for SSH/WSL/container windows.
- Claude Code on the web: MCP tool descriptions truncated at 4,096 chars — **the limit is now 16,384**, as in other Claude Code sessions.
- "Changed **prompt suggestions in the terminal to refresh less often after 8 turns in a row started by background or scheduled tasks**."

**Counter:** the 2026-11-13 cycle reported "21 improvements, 195 bug fixes" for 2.1.323. The 2.1.325 section is 139 lines total (mixed Added/Fixed/Improved/Changed).

Sources: https://registry.npmjs.org/@anthropic-ai/claude-code , https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md , https://api.github.com/repos/anthropics/claude-code/releases?per_page=6

---

## (D) THE CODE MODE ENTRY POINT IS ONE RELEASE OLDER THAN THE DOCS ADMIT, AND THE DOCS ARE STRICTER THAN THE RELEASE NOTE

Synthesis note tying (B) and (C) together, worth carrying forward:

1. **The docs require v2.1.323 or later, but Code Mode still lives behind `latest`/`next`, not `stable`** — the `stable` dist-tag is 2.1.311, four versions behind. Users on the stable channel cannot enable Code Mode at all, and `claude update` on stable will not reach 2.1.323 ("wait for stable to catch up or switch to latest").
2. **The docs restrict Code Mode to terminal interactive sessions** — explicitly excluding `-p`, the Agent SDK, VS Code, the Desktop app and cloud sessions. That means **the Agent SDK and headless users cannot reach the feature at all**, which materially narrows the "code mode is a cross-harness standard" thesis: today it is a *terminal* capability.
3. **Code Mode is auto-mode-incompatible in the useful direction** — the classifier reviews the *code*, so runtime-computed paths (e.g. a path taken from search output) are invisible to it. Combined with "Bash rules match command text, so Claude can run a denied command in a form the rule doesn't match", this is a genuine permission-model weakening that the permission rules cannot close on their own. The mitigation is a PreToolUse hook matching the **`REPL`** tool.
4. **2.1.325 hardened Code Mode within ~24 hours of it being documented** — worktree/`EnterWorktree` handling, `~` path leakage, permission-dialog word loss, and the "Claude starting work by itself on resume" behaviour.

---

## (E) ANTHROPIC IPO — NO NEW FILING IN-WINDOW; ANT STILL NOT TRADING; ANTW FELL 2.5%

**SEC EDGAR, CIK 0002130357 (Anthropic, PBC):** the `filings.recent` block shows the newest filing as the **FWP 0001628280-26-073045 (Japan Amendment), accepted 2026-11-12T11:08:43Z**. **Nothing was filed on 2026-11-13.** The filing ladder is unchanged: FWP ×5 (2026-11-12 / 11-11), S-1/A (2026-11-10, 2026-11-02), S-1 (2026-10-26), DRS/A ×6, DRS (2026-06-01). **Still NO 424B4, NO 424B1, NO 8-A12B, NO EFFECT, NO 8-K.** A direct EDGAR browse-edgar HTML scrape of the same CIK confirms the same ladder (five FWP rows dated 2026-11-12, then S-1/A 2026-11-10, S-1/A 2026-11-02, S-1 2026-10-26, then the DRS series).

`data.sec.gov` still reports `tickers: ['ANT']` with **`exchanges: [null]`** — i.e. the exchange field is still unset.

**ANT quote (Yahoo Finance chart API, 1mo/1d):** `regularMarketPrice: null`, `currency: null`, **`firstTradeDate: null`**, and **zero timestamps** in the returned series. The symbol resolves (longName "Anthropic, PBC", exchangeName "NAS", instrumentType EQUITY) but has **no price history at all** — consistent with the pre-listing state.

**ANTW (Harbor ETF Trust – Anthropic AI Lab Ecosystem ETF, NYSE Arca):** `firstTradeDate` 1786627800 (≈ 2026-08-12/13). Daily bars:

| Date | Open | Close | Volume |
|---|---|---|---|
| 2026-11-09 | 20.15 | 20.93 | 137,500 |
| 2026-11-10 | 20.64 | 21.02 | 252,500 |
| 2026-11-11 | 21.64 | 21.78 | 290,300 |
| 2026-11-12 | 21.14 | 21.81 | 133,300 |
| **2026-11-13** | **21.60** | **null (session in progress / not finalised at capture time)** | **140,092** |

Yahoo's `meta` for ANTW reports `regularMarketPrice: 21.27` and `regularMarketChangePercent: -2.476` — i.e. **ANTW fell ~2.5% to $21.27 in the 2026-11-13 session**, its first down day in the observed window after a four-day climb. SPY control on the same timestamp: $754.37, **-0.363%** — so ANTW underperformed the market by roughly **2.1 percentage points** on 2026-11-13. That divergence lands the day before the IPO pricing date.

**No new PIPE disclosure.** No 8-K, no registration-rights or lock-up amendment for the $26.0B Class N private placement appeared in-window; the placement shares remain unregistered and not lock-up bound on the public record.

Sources: https://data.sec.gov/submissions/CIK0002130357.json , https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002130357&type=&dateb=&owner=include&count=40 , https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=1mo&interval=1d , https://query1.finance.yahoo.com/v8/finance/chart/ANTW?range=1mo&interval=1d , https://query1.finance.yahoo.com/v8/finance/chart/SPY?range=1mo&interval=1d

---

## (F) OPEN ITEMS, GAPS AND UNCERTAINTY THIS CYCLE (orchestrator slice)

1. **2.1.324 is undocumented** — present in npm's `time` map, absent from CHANGELOG.md and from the GitHub releases list. Its contents are unknown.
2. **2.1.325's zstd fix names no CVE/GHSA**, and the advisory feed shows nothing published after 2026-11-09. Whether the zstd decoding issue will get a GHSA is an open watch item — the same pattern as 2.1.323's unacknowledged symlink/worktree hardening.
3. **The advisory inventory may still be incomplete** — 30 came from `affects=@anthropic-ai/claude-code` with `per_page=100`. It is worth confirming with a second query form (e.g. the `package_name` parameter, or a `since`/`before` window) that the count is not itself an artifact of the `affects` matcher. Given two prior cycles got this wrong, this deserves a fact-check pass rather than a third cycle's guess.
4. **The Code Mode documentation page appeared between 2026-11-13T01:28Z and 2026-11-14T01:35Z** — its publication timestamp is not established, only its existence by window close.
5. **ANTW's 2026-11-13 close was `null` at capture time**; the -2.476% meta figure is Yahoo's own computation against the 21.81 prior close. Both point to a ~$21.27 finish, but the bar is not finalised.
6. **The 2026-11-13 EDGAR filing record is empty** — no in-window filing of any type. This is a verified negative (the full `filings.recent` array was read), not an access gap.

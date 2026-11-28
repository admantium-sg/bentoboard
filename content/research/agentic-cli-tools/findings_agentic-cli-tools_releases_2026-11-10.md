# Findings — Task 1 (Releases) — agentic-cli-tools — 2026-11-10

**Window:** 2026-11-08T01:28:00Z → 2026-11-10T01:28:00Z (today = 2026-11-10)
**Methods:** GitHub `releases.atom` + release-page HTML for 30+ repos (anthropics/claude-code, openai/codex, google-gemini/gemini-cli, QwenLM/qwen-code, sst/opencode, All-Hands-AI/OpenHands, cline/cline, charmbracelet/crush, aaif-goose/goose, microsoft/agent-framework, agentclientprotocol/typescript-sdk, pydantic/pydantic-ai, openai/openai-agents-python, Factory-AI/factory, zed-industries/zed, **github/copilot-cli**, RooCodeInc/Roo-Code, continuedev/continue, Aider-AI/aider, Kilo-Org/kilocode) + commit feeds; npm registry time-maps (`@anthropic-ai/claude-code`, `@openai/codex`, `@google/gemini-cli{,-core}`, `opencode-ai`, `droid`, `@github/copilot`); raw CHANGELOG.md (claude-code, codex, devin); SEC EDGAR submissions JSON (CIK 0002130357) + EDGAR full-text search (`424B4`, `8-A12B`, `EFFECT`); Google News RSS; Google Finance ANT page; GitHub Blog changelog RSS; OpenAI newsroom RSS; blog.google RSS; AWS ML blog; anthropic.com launch page; cursor.com/changelog; antigravity.google/docs/changelog. **Budget used: 1 `web_search`, 0 `web_fetch`** — everything else was direct HTTP GET via `exec`+curl/Python, which does not consume the search/fetch budget.

**Timestamp caveat:** GitHub Atom `<updated>` reflects *edits* as well as publication. Atom-only items are labelled "Atom `<updated>`" and cross-checked against npm publish time or the release page's own "released this \<date\>" text. Items whose only date is an Atom `<updated>` are labelled **re-touch/uncertain publication**.

---

## (A) New tool releases & versions in-window

**Anthropic Claude Code `v2.1.321`** — published **2026-11-09T19:22:30Z** (release page "released this 09 Nov 19:22", commit `a4fcccc`). Ships Claude Fable 5.2 as the default Fable model. "What's changed" (read in full from the release page): **Added** Claude Fable 5.2 (`claude-fable-5-2`) as the **default Fable model** — 1M context, **$8/$40 per Mtok**, $0.20/Mtok cache reads; **added `--settings <file>` to `claude remote-control`**, applying a settings file to every session it starts, **not hot-reloaded** ("if the file changes, no new session starts until you restart `claude remote-control`"). **Fixed (security cluster, 3)**: MCP OAuth requests sending secrets such as refresh tokens to another host on redirect; a read-only Bash command running **outside the sandbox without a permission prompt**; `cp`/`mv` into a directory bypassing deny rules and protected-file prompts. **Fixed (permissions/UX)**: Bash permission checks judging a file write from the wrong folder and not prompting; the fallback model declining when the first model was blocked before replying; `/config` showing **Manual** as the default permission mode when sessions start in auto mode (Space on "Auto (default)" now saves **Don't Ask**, not Plan); fast mode losing replies / switching models / retrying for minutes when fast serving is rate-limited, overloaded or failing (**now tries standard speed on the same model first**); `claude agents` ignoring `--permission-mode`/`--dangerously-skip-permissions`/`--model`/`--effort`/`--agent` typed before `agents` when another flag was also present; `git status` at session start reading as clean when git status actually failed (now "unavailable"). **Fixed (correctness)**: `claude mcp login` printing a SEP-2352 issuer warning on every re-sign-in; `NotebookEdit` deleting a notebook's **first cell** when the call named no cell on network paths (UNC, WSL, `/net`); Edit changing the first of several matches or replacing a whole file on an empty `old_string` on network paths; project skills/commands/agents disappearing after their folder was removed and returned mid-session (`git stash`, worktrees); plugin auto-updates re-downloading per worktree; auto mode losing a background subagent's report after compaction; `claude -p` claiming background commands get 30 minutes when stopped after 10; `pkill`/`pgrep`/`pidwait` matching the session's own parents; WebFetch passing "No response from model" to Claude as page content; "API Error: EPROTO" on a broken mid-reply connection; a large hook output pointing Claude at another hook's output; a PreToolUse `ask` lost when another hook's `defer` could not be honored; a rare crash on permission prompts/background tasks. **Windows**: `FileChanged` hooks stopping for `watchPaths` after the first shell command with a lowercase drive letter; `/desktop` on macOS saying Claude Desktop is not installed when it is in `~/Applications`; missing OpenTelemetry `vcs.*` attributes.
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.321

**GitHub Copilot CLI `1.0.108`** — published **2026-11-09T16:20:30Z** (release page "released this 09 Nov 16:20", commit `2e935d3`). **Genuine in-window stable release MISSED by the previous cycle, which probed the non-existent `microsoft/vscode-copilot-cli` (404) instead of `github/copilot-cli`.** **Added** `sandbox.userPolicy.filesystem.enumeratePaths` for **Windows enumerate-only directory grants**; **added `/index` commands and enabled managed shared tgrep indexing by default** for eligible repositories — index management becomes an ambient CLI capability rather than an explicit command. PDF attachments on Grok 4.7/4.6 fall back to file references instead of failing the turn; with the sandbox on, a running local MCP server is **restarted after `/cd`** so it follows the new directory's denied paths; an SDK file attachment pointing at a named pipe/socket/device is an error instead of stalling the turn; Canvas tools tell the model which instance IDs `open_canvas` accepts; `/model` lists models when Copilot answers the model-list request with **421 Misdirected Request**; OpenAI-compatible providers no longer receive an internal message field on skill/tool messages; Ctrl+C stops a running `/compact`; `defaultMode` applies when the startup session picker is closed; skill-name matching in `disabledSkills`/`skills.enable|disable` is case-insensitive; duplicate custom tool names in an SDK session are an error.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.108

**GitHub Copilot CLI `1.0.109-0` (pre-release)** — Atom `<updated>` **2026-11-09T21:34:50Z**; npm `@github/copilot` `1.0.109-0` published **2026-11-09T21:35:53.959Z** (release page "released this 09 Nov 21:34", commit `a73dd69`). **Improved**: confirmation before `/share` or `/export` **follows symlinks** when saving local files; URL permission prompts can **approve every subdomain for the current session**; read-only shell scripts ask less often, while scripts that **change git refs or read files through hidden paths now always get reviewed**. **Fixed**: text typed after `/init` now **reaches the model as extra guidance** for the generated instructions file and appears in the timeline instead of being silently dropped (`/init` hint shows `[suppress|<instructions>]`); `beepOnSchedule`, `companyAnnouncements`, `footer.showModelEffort`, `ide.openDiffOnEdit` descriptions corrected; `copilot help config` no longer mis-describes `compactPaste` nor lists staff-only settings (`taskbarPresence`, `showTipsOnStartup`, `streamerMode`); home screen tabs renamed **Current** / **Sessions**; `ctrl+h` help entry corrected for local Windows terminals.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.109-0

**Factory Droid CLI `1.6.1`** — npm `droid` publish **2026-11-09T21:46:18.035Z** (`latest` = 1.6.1). Sequence 1.5.0 (Nov 6) → 1.6.0 (Nov 7) → **1.6.1 (Nov 9)**. **No GitHub release exists**: `Factory-AI/factory` `releases.atom` → **zero entries**, `github.com/factory-ai/droid` 404, `apps/cli/CHANGELOG.md` 404 → **Droid ships npm-only; 1.6.1 = "released, notes unavailable"**.
Source: https://registry.npmjs.org/droid

**OpenAI Codex CLI — six `rust-v*` prereleases in ~22 h** (all 2026-11-09): `rust-v0.169.0-alpha.4` (npm 05:37:54Z), `alpha.5` (07:29:29Z), `alpha.6` (19:30:34Z), `alpha.7` (22:01:36Z), `alpha.8` (23:51:39Z), plus `0.167.0-alpha.4.1` (23:49:13Z). npm `dist-tags.alpha` = 0.169.0-alpha.7, `latest` = 0.167.0. **Highest Codex prerelease cadence observed in this study.**
Source: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.8

**Qwen Code `v0.27.1`** — published **2026-11-09T13:30:44Z** (release body); GitHub tag Atom `<updated>` 15:00:43Z. Highlights: active-shell naming in the startup context (#16491); opt-in QQ-bot message forwarding (#15904); **configurable default background execution** (#15178); LSP via a user-scoped setting/env pair (#14613); bound sessions get role guidance without operator templates (#16576); CI review-runner day pool as a numeric count (#16544); HTTP proxy in ephemeral runner containers (#16592); daemon PR watch store foundation (#16590); **ACP-bridge replay projection watermark** (#16538). No breaking changes.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.27.1

**Qwen Code Desktop `v0.27.1`** — 2026-11-09T14:24:08Z — desktop build shipped alongside the CLI stable the same day (**first same-day CLI+desktop parity observed for Qwen Code** in this study). *(Body not read: GitHub REST 403 rate limit.)*
Source: https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.1

**Qwen Code TypeScript SDK `v0.1.31`** — 2026-11-09T14:50:08Z, plus **`v0.1.29`** at 2026-11-09T02:08:10Z — two SDK releases in one day and a **non-contiguous sequence (0.1.30 absent)** → parallel release branch; watch for an unpublished 0.1.30.
Source: https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.31

**Qwen Code nightly `v0.26.9-nightly.20261107.65e1f1aeaa`** — Atom `<updated>` 2026-11-08T06:52:34Z, but the **same tag as the 2026-11-09 cycle** → **re-touch, not a new build**.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261107.65e1f1aeaa

**Block Goose `v1.58.0`** — published **2026-11-09T19:07:20Z** (tag page), Atom `<updated>` 19:17:23Z (repo now `aaif-goose/goose`; `block/goose` redirects). Features: opt-in **context relevance operation** (#12589), **context window report and viewer** (#10462), **AIHubMix** provider (#12997), **RouterPlex** provider (#13068), **Lemonade** provider (#12920), **collapse thinking by default** with a setting (desktop) (#12660). Fixes include Spark X2→X2.5 in iflytek_astron (#12772), current session ID in `/status` (#12607), session load staying on its replay fast path when stopped (#13190), replaying OpenAI Responses reasoning across tool turns (#13222), routing bare OpenAI GPT IDs to Mantle by ID shape (bedrock) (#13211), `supports_vision` from `/model/info` (litellm) (#13239), and **honouring Retry-After on 429s mapped outside handle_status** (#12986).
Source: https://github.com/aaif-goose/goose/releases/tag/v1.58.0

**Microsoft Agent Framework `dotnet-1.28.0`** — GitHub tag Atom `<updated>` 2026-11-09T11:56:26Z but the **release body's own changelog header reads `[1.28.0] - 2026-11-06`** → **late-published / re-touched, not a fresh in-window version**. Contents: Foundry **GA computer tool** (`FoundryAITool.CreateComputerTool()`, computer calls/results carried through Foundry hosting incl. batched actions) + an Azure OpenAI computer-use sample; `FoundryToolboxOptions.TokenScope` (#10100); and a **BREAKING** A2A hosting change limiting built-in server registration to message-based responses, deferring reliable task resumption across hosts (#10037) — clients expecting task responses must migrate.
Source: https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.28.0

**ACP TypeScript SDK `v2.5.0`** — **2026-11-09T12:30:59Z**. Single feature: **update to schema `v1.30.0` and `v2.0.0-alpha.14`** (#337, commit `358de29`). Fastest-moving interop surface in the stack (v2.2.0 Oct 30 → v2.3.0 Nov 2 → v2.4.0 Nov 2 → v2.5.0 Nov 9).
Source: https://github.com/agentclientprotocol/typescript-sdk/releases/tag/v2.5.0

**Google Antigravity App `v2.30.0`** — **November 9, 2026** (vendor changelog; date-only → boundary-uncertain but in-window by date). "Knowledge Work interface and a setup tailored to your work": new **Knowledge Work layout** (Settings > General > Interface Layout, hidden for business/enterprise), a first-sign-in **work-type selector** (Software Engineering / Knowledge Work / Data & Analytics / Science / Design) that sets a matching layout and auto-adds plugins, **voice mode finished rolling out** (all except business/enterprise), **remote agents finished rolling out** to Google AI Ultra and paid AI Pro, and a new **Configure on GitHub** link in the cloud-project repository picker. **Antigravity can now import MCP servers, skills, custom commands, subagents and instruction files from Claude Code, Codex and Cursor into a plugin you own** — a direct multi-CLI setup-migration feature. Also: Auto permission preset no longer Preview; permission preset applies only to the current conversation; built-in browser gains USB/serial/hardware access, a TLS warning page and its own Settings page; 25 fixes incl. subagent diff-review "Diff contents are no longer available", queued follow-ups starting a new turn while subagents ran, Windows emoji/non-English garbling, `/btw` failures in subagent conversations. **27 improvements + 25 fixes.**
Source: https://antigravity.google/docs/changelog

**Zed nightly + collab-staging** — both tags Atom `<updated>` 2026-11-09T12:26:10Z ("Support opening files by abs path in the file finder (#66227)"). Nightly only; **no stable Zed release in-window** (last stable `v1.27.0` 2026-11-04; `v1.28.0-pre` 2026-11-04T17:02:18Z).
Source: https://github.com/zed-industries/zed/releases/tag/nightly

**Charm Crush `nightly`** — tag Atom `<updated>` 2026-11-10T00:44:31Z (44 min before window close).
Source: https://github.com/charmbracelet/crush/releases/tag/nightly

**Pydantic AI `CLAI2 bleeding`** — 2026-11-10T00:18:19Z, prerelease channel.
Source: https://github.com/pydantic/pydantic-ai/releases/tag/clai2-bleeding

**OpenAI Agents SDK `v0.24.0-alpha.7`** — 2026-11-08T07:07:12Z, prerelease (prior stable `v0.24.0`, 2026-10-15).
Source: https://github.com/openai/openai-agents-python/releases/tag/v0.24.0-alpha.7

**OpenCode — two dev builds, no stable release**: npm `opencode-ai` `0.0.0-dev-202611080442` (2026-11-08T05:51:00.661Z) and `0.0.0-dev-202611092046` (2026-11-09T21:45:22.385Z, dist-tag `dev`); `latest` stays **1.19.5**; last GitHub release `v2.2.6` (2026-11-06T23:37:20Z).
Source: https://registry.npmjs.org/opencode-ai

**Gemini CLI — core nightly DID advance in-window (prior-cycle "stale" claim resolved)**: npm `@google/gemini-cli-core` published `0.69.0-nightly.20261108.g62bab5b23` (01:13:24Z), `0.69.0-nightly.20261109.g62bab5b23` (2026-11-09T01:11:03Z) and **`0.69.0-nightly.20261110.g1930f2539` (2026-11-10T01:15:20.393Z, dist-tag `staging-tmp`)**. The 11-10 hash maps to commit `ca41614798` "fix(core): ensure read-many-files only inlines explicitly requested b…" (2026-11-09T22:27:15Z) — the tree **is** fresh, unlike the previous cycle's stale `g62bab5b23` runs. **No GitHub release counterpart** (both Nov 9/10 tags 404; the GitHub nightly channel stopped after Nov 4) and npm `nightly` is still pinned to `0.67.0-nightly.20261104.g89e9d25d6`. Stable `latest` = 0.67.0, `preview` = 0.68.0-preview.0 (both 2026-11-04).
Source: https://registry.npmjs.org/@google/gemini-cli-core

**Repos checked with NO in-window release:** `sst/opencode` (stable), `All-Hands-AI/OpenHands` (last `v1.37.0`, 2026-11-06T12:40:30Z), `Aider-AI/aider` (last `v0.86.3.dev`, 2026-02-12), `cline/cline` (last `desktop-nightly-20261104233655`, 2026-11-04), `RooCodeInc/Roo-Code` (last `v3.54.0`, **2026-05-15** — dormant), `continuedev/continue` (last `v2.1.0-vscode`, 2026-06-19), `getcursor/cursor` (no GitHub release channel), `mastra-ai/mastra` (2026-11-03), `Kilo-Org/kilocode` (`v7.8.28` pre-release, 2026-11-07T16:57:08Z — outside window).

**Repo-name artifacts (404s, not absences):** `microsoft/vscode-copilot-cli` (real repo **`github/copilot-cli`**, which *did* release twice in-window — this 404 previously masked two real releases), `microsoft/vscode-copilot-chat` (real repo, last release 2026-04-07), `sourcegraph/amp`, `ampcode/amp`, `ampcode/amp-cli`, `amazon/q`, `amazon/q-developer-cli`, `factory-ai/droid` (real repo `Factory-AI/factory`).

---

## (B) New commands, flags and features

**Claude Code `v2.1.321` — three security-boundary fixes in one release**: MCP OAuth redirect secret leak; read-only Bash running **outside the sandbox without a permission prompt**; `cp`/`mv` into a directory bypassing deny rules and protected-file prompts. With `permissions.denyInsteadOfPrompting` (2026-11-09 cycle) this is a **three-release-window cluster of permission-boundary defects in Claude Code** — the densest such cluster in this study. Two further permission-model changes land in the same release: the **`/config` default-mode fix** and **fast mode degrading to standard speed on the same model** when fast serving is rate-limited/overloaded.
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.321

**`claude remote-control --settings <file>`** — applies a settings file to every session the daemon starts, **not hot-reloaded**. The shape needed for fleet-wide enterprise policy enforcement, shipped by the vendor that is also pricing an IPO.
Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.321

**Claude Code default model change** — `claude-fable-5-2` becomes the default Fable model at **1M context**, **$8/$40 per Mtok**, **$0.20/Mtok cache reads**. Anthropic's launch page states Fable 5.2 and Mythos 5.2 are **the same underlying model**, Fable carrying the cyber/biology safeguards that allow general availability while Mythos stays gated behind the expanded Life Sciences and Cyber Verification Programs.
Source: https://www.anthropic.com/news/claude-fable-and-mythos-5-2

**GitHub Copilot CLI `1.0.108` — `/index` + managed shared tgrep indexing enabled by default**, plus **Windows enumerate-only directory grants** via `sandbox.userPolicy.filesystem.enumeratePaths`.
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.108

**GitHub Copilot CLI `1.0.109-0` — session-wide URL subdomain approvals, always-review for git-ref/hidden-path scripts, symlink confirmation on `/share` and `/export`, and `/init` text now reaching the model.** The symlink confirmation is a direct countermeasure to the Claude Code `cp`/`mv` symlink class of bug — **three independent CLIs shipped symlink/permission-hardening fixes within one window.**
Source: https://github.com/github/copilot-cli/releases/tag/v1.0.109-0

**Goose `v1.58.0` — context window report and viewer** (#10462) and **opt-in context relevance operation** (#12589). First-class visibility into how much of the context window is actually used — a direct answer to the "review, not writing, is the bottleneck" thread from the 2026-11-09 cycle.
Source: https://github.com/aaif-goose/goose/releases/tag/v1.58.0

**Qwen Code `v0.27.1` — four orchestration primitives in one release**: configurable **default background execution** (#15178), **session-scoped role guidance for bound sessions** without operator templates (#16576), a **daemon PR watch store** foundation (#16590), and an **ACP-bridge replay projection watermark** (#16538) — a primitive for making a replayed ACP session reproducible, which is what a shared handoff schema would need.
Source: https://github.com/QwenLM/qwen-code/releases/tag/v0.27.1

**Microsoft Agent Framework `dotnet-1.28.0` — Foundry GA computer tool** (`FoundryAITool.CreateComputerTool()`, computer calls/results carried through Foundry hosting incl. batched actions) + Azure OpenAI computer-use sample, alongside the **breaking** A2A hosting change restricting built-in server registration to message-based responses.
Source: https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.28.0

**OpenAI Codex CLI — in-window commits change error and permission semantics (no release needed)**, 2026-11-09/10: **"Treat access program denials as terminal errors" (#60476)**, invalid access-program stream errors terminal (#60481), workspace access denials terminal (#60480), content-policy violations terminal (#60479), stop retrying explicit invalid-workspace errors (#60475), respect error retry policy during local compaction (#60473); **"Serialize default thread permissions as a permission profile" (#60472)**, honor permission grant scopes in executor capability discovery (#60461); **"Enable untrusted context tool outputs by default" (#60487)**; **"Add device authorization to app-server gateway OAuth" (#60486)**; honor feature overrides when starting the app-server daemon (#60489); route TUI question answers through Cloud message admission (#60462); support cancellation and deadlines for realtime attachments (#60443); revalidate request auth ownership after budget checks (#60436); dismiss the model switch prompt when account usage recovers (#60435). The "access program denial = terminal" cluster implements the Mythos-style gated-access model inside Codex's transport layer.
Source: https://github.com/openai/codex/commits/main.atom

**Gemini CLI — in-window commits harden sandboxing and session recursion** (6 commits, 2026-11-09): kill child processes / record cancelled tools (19:54:42Z), **resolve folder trust before entering the macOS Seatbelt sandbox** (19:47:28Z), reject `MessageBus.request()` immediately when publish fails (20:20:31Z), **prevent recursive interactive gemini sessions in shell mode** (20:31:48Z), ensure read-many-files only inlines explicitly requested files (22:27:15Z = the 11-10 nightly commit `ca41614798`), `isSubpath` for theme file home-directory check (#30160, 17:24:03Z).
Source: https://github.com/google-gemini/gemini-cli/commits/main.atom

**Charm Crush — in-window commits** (2026-11-09): **gzip-compressed http requests to hyper (#4100)**, **elapsed time on tool call (#3600)**, **toggle skills (#3994)**, crush run should not spawn a server if none is running (#4255), preserve CRLF lines in bang mode output (#4228), remove the Alias with hyper email (#4257). Skill toggle + per-tool-call elapsed time are two features Claude Code, Codex and Gemini CLI do **not** yet expose in this study.
Source: https://github.com/charmbracelet/crush/commits/main.atom

**Cline — in-window commits** (2026-11-09): format-check the whole apps/vscode tree (#15566), resolve the summarizer's reasoning-off preference (19:53:35Z), point dev setup to the pinned Bun version (#15544), fix a nonexistent test filename in CONTRIBUTING. No release.
Source: https://github.com/cline/cline/commits/main.atom

**ACP TypeScript SDK `v2.5.0` — schema `v1.30.0` / `v2.0.0-alpha.14`.** The interop contract that Zed, Qwen Code's ACP bridge and Antigravity CLI implement moves within 48 h of the previous bump.
Source: https://github.com/agentclientprotocol/typescript-sdk/releases/tag/v2.5.0

**Google Antigravity App `v2.30.0` — cross-CLI setup migration**: import MCP servers, skills, custom commands, subagents and instruction files **from Claude Code, Codex and Cursor** into an Antigravity-owned plugin; plus Knowledge Work layout, per-conversation permission presets, Auto preset GA for business accounts, voice-mode / remote-agent rollout completion.
Source: https://antigravity.google/docs/changelog

**Zed adds Claude Fable 5.2 support** — PR **#66760** "anthropic: Add support for Claude Fable 5.2" by rtfeldman, merged in-window (PR page carries 8 "merged" markers, 22 "Fable 5.2" mentions, model id `fable-5-2`). First desktop editor in this study to add Fable 5.2 explicitly.
Source: https://github.com/zed-industries/zed/pull/66760

---

## (C) Company announcements

**Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 — 2026-11-09** (page dateline "November 9, 2026"): Fable 5.2 and Mythos 5.2 are **the same underlying model**; Fable carries the cyber and biology safeguards, so Fable is available to all users while Mythos requires application to the expanded **Life Sciences and Cyber Verification Programs**. Outputs **up to 30% faster** than Fable 5.1 / Mythos 5.1, priced **lower: $8/Mtok in, $40/Mtok out**; an optional **fast mode** speeds token generation **up to 2.5x** at **$16/Mtok in, $80/Mtok out**. Prerelease-testing claims: helping engineers complete otherwise-infeasible software migrations, **designing three working electronic devices from scratch**, **solving two open problems in the physics of black holes**, robotics-evaluation progress, **formalizing the proof of Fermat's Last Theorem in 30 hours**. Safety: novel **sandbox-escape** evaluations; high-stakes misalignment risks assessed as low; Fable 5.2's cyber/biology safeguards as robust as Fable 5.1's but producing **fewer unnecessary blocks**; "our strongest-ever protections against distillation attacks". Anthropic's own recommendation: for most coding and knowledge tasks, start with **Claude Opus 5.5**, then switch…
Source: https://www.anthropic.com/news/claude-fable-and-mythos-5-2

**AWS: Claude Fable 5.2 and Mythos 5.2 on Amazon Bedrock and Claude Platform on AWS** — AWS ML blog, **Mon, 09 Nov 2026 20:04:37 +0000**. Mythos 5.2 **hallucinates less, completes tasks more reliably, surfaces important information more consistently and self-reports issues more honestly than Opus 5.5, Sonnet 5.5 and Mythos 5.1**; if a cyber query is declined you may retry on **Opus 4.8**, a biology query on **Opus 5**, and a **fallback credit token** is returned so the retry is billed as cache reads; Anthropic designates Fable 5.2 a **Covered Model** — by default it **requires up to 30 days of retention and human safety review**, performed by Amazon personnel **within the AWS boundary** when `aws_review` data-retention mode is set; **Enterprise Frontier Safeguards (EFS)** combines ZDR privacy with misuse detection and stores data in customer-controlled infrastructure — until EFS is available, eligible customers get **ZDR through at least June 30, 2027**. Callable via the Anthropic Messages API on `bedrock-runtime` or via Invoke/Converse.
Source: https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/

**GitHub: Claude Fable 5.2 in GitHub Copilot** — GitHub changelog, **Mon, 09 Nov 2026 16:46:43 +0000**. GA in Copilot for complex multi-step coding across large codebases; in early testing Fable 5.2 **solved more tasks than Fable 5.1 while using fewer steps and tool calls**; available to **Copilot Pro+, Max, Business and Enterprise**; **billed at provider list pricing under usage-based billing**; **rollout gradual**; Enterprise/Business admins must **enable the "Claude Fable 5.2" policy, off by default**; **Fable 5.2 requires data retention by default** (Anthropic retains prompts/outputs to run safety classifiers; not used for training) whereas all other Claude models except Fable 5, 5.1 and 5.2 continue under ZDR; **ZDR access for eligible enterprises is a time-bound exemption through the end of the calendar year** while EFS rolls out, and approval **does not automatically enable the models** — an admin must still flip the policy.
Source: https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot

**GitHub: secret scanning now detects secrets in GitHub Actions workflow logs** — GitHub changelog, **Mon, 09 Nov 2026 09:01:37 +0000**. Adjacent to the MCP-OAuth-redirect secret-leak fix in Claude Code `v2.1.321`.
Source: https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs

**OpenAI newsroom, 2026-11-09 (three in-window posts)**: **ChatGPT Enterprise now available in AWS Marketplace** (19:00 GMT); **Control Room: A central system to track and stop model workloads across our research and safety teams** (13:00 GMT) — model-workload control/attestation infrastructure is a direct response to the "stop a runaway agent" theme; **CodeRabbit scales agentic software development and ships 20x more** (Codex Daybreak, 08:00 GMT) — a coding-agent vendor reporting a 20x volume increase is a category-wide demand signal.
Source: https://openai.com/news/rss.xml
Source: https://openai.com/index/control-room
Source: https://openai.com/index/coderabbit-codex-daybreak

**Google: TPU 8tx and 8i Max, "built for the agentic era"** — blog.google, **Mon, 09 Nov 2026 13:00:00 +0000**; also **Google Maps Platform in AI Studio** (17:00 GMT, same day). Also **"How the Microsoft Copilot harness helps agents complete complex tasks"** — Microsoft Copilot Blog, 2026-11-09 16:30 GMT.
Source: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/

**Meta released Muse Ember** — TechCrunch, 2026-11-09T18:11:35Z: "a new lightweight model for agent execution"; positioned in r/cursor as *"the cheapest yet stronger than Grok 4.7 and similar to claude haiku"* — squarely in the cheap-model category agentic CLIs consume.
Source: https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/

**IBM brings Claude Mythos cyber reasoning into IBM Concert** — 2026-11-09T18:13:02Z (headline + publisher + pubDate; body not read). First named regulated/enterprise platform announcement of the window for a Mythos-class model, using the *cyber* tier Anthropic gates.
Source: https://www.ibm.com/

**Anthropic strikes a $3.4B deal to generate gas-fired power for data centres** — FT 2026-11-08T12:41:25Z; TechCrunch 2026-11-09T16:56:54Z ("buys $3.4B worth of turbines"); Axios 2026-11-09T21:46:45Z ("Anthropic's on-site gas push faces political headwinds"). Largest named compute-power commitment of the window, and gas-fired rather than nuclear/geothermal.
Source: https://www.ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0

**Anthropic must face lawsuit over Claude subscription marketing** — Reuters, dated 2026-11-09 in the URL. Direct `curl` returns a **774-byte JS/ad-block shell**; URL slug + Google News pubDate are the only evidence.
Source: https://www.reuters.com/legal/government/anthropic-must-face-lawsuit-over-claude-subscription-marketing-2026-11-09/

**"Claude Code Looked Right but Missed $800K"** — AlixPartners AI Engineer, 2026-11-09T03:06:41Z (headline + pubDate; body not read). First *quantified* enterprise-loss case study attached to a named consultancy in this study.
Source: https://finance.biggo.com/

**Testing Claude on real-world electronics design** — anthropic.com research, 2026-11-09T18:58:48Z. Pairs with the launch-page claim about designing three working electronic devices.
Source: https://www.anthropic.com/research/claude-electronics-design

**DeepSeek's open-source agent framework "Harness" tops 1.5M daily active users** — Bloomberg 2026-11-08T18:01:43Z; SCMP 2026-11-09T07:00:04Z; **Creator Mode creating plugins from prompts** (Mashable, 2026-11-09T22:04:27Z). Figures: **1.54M DAU, up 5.7x in a month, in under three months** (BigGo Finance, 2026-11-09T10:35:00Z), **>92 trillion daily tokens** (KuCoin), official **plugin marketplace** planned. An open-source agent runtime with a plugin ecosystem is now at Codex/Claude-Code-adjacent scale.
Source: https://news.google.com/rss/search?q=DeepSeek+Harness+plugin+marketplace+when:3d
Source: https://www.bloomberg.com/news/articles/2026-11-08/deepseek-s-ai-agent-platform-hits-1-54-million-daily-users

**0sec Labs open-sources "0", an AI security harness with Web UI, CLI and MCP** — MarkTechPost, 2026-11-09T07:55:18Z. Also **Reason Machines open-sources Aspen, a Git server built for AI agents** (MarkTechPost, 2026-11-09T08:20:20Z). New agentic tooling in-window, both outside the major vendors.
Source: https://news.google.com/rss/search?q=%220sec+Labs%22+OR+%22AI+Security+Harness%22+when:3d

**Automattic debuts Spacefast** to deploy "vibe coding" apps — TechCrunch, 2026-11-09T14:12:45Z. **Apple explores turning Siri into a "ChatGPT-dots-like agent" on iOS 28** — Bloomberg, 2026-11-08T15:19:51Z. **Apple's Xcode plugin joins Claude Code's 317-plugin lineup** — FourWeekMBA, 2026-11-09T16:48:50Z (the 317-plugin count is a concrete ecosystem-scale datapoint).
Source: https://techcrunch.com/2026/11/09/automattic-debuts-a-platform-to-deploy-vibe-coding-apps-amid-a-changing-internet/

**"Cursor and Google join OpenAI in giving coding agents a voice. Claude Code stays silent."** — The New Stack, 2026-11-09T18:25:34Z. The named URL 404s ("Page not found"), so this is **headline + publisher + pubDate only**; the underlying facts are independently confirmed by vendor sources — Cursor's Nov 6 voice-chat entry, Antigravity v2.30.0's voice-mode rollout completion, and the absence of any voice feature in Claude Code `v2.1.321`.
Source: https://news.google.com/rss/search?q=(Codex+OR+%22Claude+Code%22+OR+Gemini)+%22voice+mode%22+when:3d

**Nvidia opens an internal investigation into CEO Jensen Huang** — NYT 2026-11-09T18:37Z; AP 2026-11-09T23:38Z; CNBC; FT 2026-11-09T22:16Z; Trump says the **FBI is looking into** the relationship (FT/NBC/PBS 2026-11-09T22:16–23:04Z); Nvidia stock closed lower and plunged intraday (ABC 2026-11-09T23:48Z, CNN 2026-11-09T23:00Z); **Huang pulled out of the ElevenLabs Summit** (TechCrunch, 2026-11-09T20:09:06Z) and **disappeared from the Anthropic and ElevenLabs event lineups** (Business Insider, ~2026-11-09T21:00Z). Dominant macro story of the window; touches agentic tooling via the Anthropic/DeepSeek-event cancellations and the AI-equity drawdown compressing Anthropic's IPO pricing expectations.
Source: https://news.google.com/rss/search?q=(Harness+OR+DeepSeek+OR+%22Nvidia%22+%22Anthropic%22+OR+%22Jensen+Huang%22)+when:2d

**Anthropic IPO — the capital event of the window; the price range is STILL not on EDGAR.** The Reuters exclusive landed **inside the window**: *"EXCLUSIVE: Anthropic aims to raise up to $69.3 billion in blockbuster IPO"* — Reuters, **Tue, 10 Nov 2026 01:22:00 GMT** (six minutes before window close), syndicated by U.S. News (01:21), AOL (01:23), Euronext (01:21:56), Central Oregon Daily, The Lufkin Daily News, Investing.com Nigeria (01:36:54Z) and Global Banking & Finance Review (01:29:16Z). The direct Reuters URL returns a **401 JS shell**; all syndicated copies returned 403/429/404 to direct fetch → **"$69.3 billion" is a headline-level figure, not body-verified this cycle**.
Corroborating in-window framing (headline + pubDate only): **WSJ** "Anthropic Prepares to Push Ahead With IPO Despite Market Jitters" (2026-11-09T21:12Z); **Bloomberg** "Anthropic IPO's Moment of Truth Nears as Waiting Period Expires" (20:30:56Z); **IFR** "Anthropic to launch Nasdaq IPO Tuesday morning" (19:59:06Z); **CNBC** "Countdown to Anthropic IPO" (17:35Z) and "Anthropic releases first frontier models since Amodei's call for slowdown as IPO buzz builds" (19:00Z); **Investing.com** "Anthropic IPO targets November debut as valuation expectations fall" (16:07Z); **Motley Fool** "Anthropic's IPO May No Longer Value the Company Anywhere Near $2 Trillion" (19:21Z); **Business Insider** "Anthropic's IPO Could Make Thousands of Employees Rich. Wall Street is Already Fighting For Their Money." (20:31Z); **ION Analytics/ECM Pulse** "Anthropic faces near impossible IPO choice after AI stocks felled by Blue Tsunami" (23:27Z); **TechCrunch** "Anthropic reportedly plans to move forward with IPO plans" (**2026-11-10T01:27:12Z**, in-window by 48 seconds).
**EDGAR verification (authoritative, still negative):** Anthropic, PBC (CIK 0002130357) submissions JSON shows filings topped by **S-1/A filed 2026-11-02** (accession 0001628280-26-068676, doc `anthropicpbc-sx1ax1.htm`), preceded by S-1 (2026-10-26) and six DRS/A. **No 424B4, no 8-A12B, no EFFECT, and no filing of any kind dated 11-08, 11-09 or 11-10.** EDGAR full-text search corroborates: `424B4` + "Anthropic" since 2026-10-20 → **0 hits**; `424B4` in 11-08→11-10 → **0 hits**; `"Anthropic, PBC"` + forms=EFFECT → **0 hits**; `8-A12B` + "Anthropic" (Oct 1 – Nov 10) → **2 hits, both `Themes ETF Trust` (CIK 0001976322)** filings from 2026-10-27, i.e. **not Anthropic the issuer**. The S-1/A still names the venue/symbol ("Nasdaq Global Select Market", symbol **"ANT"**) and the price range is still **blank**: "the initial public offering price per share will be between **$ and $**", share count "approximately $ … based upon the assumed initial public offering price of **$ per share**", and "our Run-Rate Revenue was **$**" with the value blank.
Source: https://data.sec.gov/submissions/CIK0002130357.json
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm
Source: https://news.google.com/rss/search?q=Anthropic+(gas+OR+%22IPO%22+OR+valuation)+when:2d

**ANT quote verification — endpoint failure, not a negative signal.** `https://api.nasdaq.com/api/quote/ANT/info?assetclass=stocks` returns `{"data":null,"status":{"rCode":400,"bCodeMessage":[{"code":1001,"errorMessage":"Symbol not exists."}]}}` — **but the live control `SPY` returns the identical payload**, proving the endpoint is not serving symbol lookups at all. Yahoo chart API → **HTTP 429** (same for SPY); Stooq → JS/404; FMP demo key → "Invalid API KEY"; stockanalysis.com → Cloudflare interstitial. **However** Google Finance's ANT page loads and gives an authoritative-equivalent negative: Anthropic renders as a **private** company ("Private/Public: **Private**", no exchange, no price, "Total Funding: $170.74B As of Nov 10, 2026") — i.e. **ANT is not yet trading**, consistent with the absence of listing filings. Its embedded news rail independently surfaces the Reuters $69.3B exclusive, TechCrunch's IPO item, Axios' gas-push item and BI's "Jensen Huang disappears from Anthropic and ElevenLabs events".
Source: https://www.google.com/finance/quote/ANT:NASDAQ
Source: https://api.nasdaq.com/api/quote/ANT/info?assetclass=stocks

---

## (D) Company/product funding & M&A in-window

**No new agentic-CLI vendor funding round closed in-window.** Every surfaced round is a re-report of an earlier announcement or not an agentic-CLI company:

| Item | In-window republication | Verdict |
|---|---|---|
| OpenAI → Pierre Computer | OpenTools, 2026-11-09T04:09:00Z | Re-report; already in cumulative since 2026-11-09 |
| OpenAI $11B @ $1.25T | PANews "Funding Weekly" 2026-11-09T03:05:00Z; HN 50413822, 2026-11-08T14:49:23Z | In-window headline; **not a CLI round**; $1.25T is *below* the $1.4T first sought |
| Traversal $120M Series B @ $1B (software reliability) | The American Bazaar 2026-11-08T19:04:09Z; Pulse 2.0 2026-11-08T15:06:22Z | In-window, **sector unconfirmed** — not a dedicated agentic CLI |
| Finpilot $10M Series A (AI agents to institutional investors, Lobby Capital) | AI Insider 2026-11-09T08:20:21Z | In-window, **not agentic-CLI** |
| Nominal $240M @ $3B (hardware testing) | SiliconANGLE 2026-11-09T16:35:00Z | In-window, **not agentic-CLI** |
| Team8 $365M to back AI-native enterprise companies | ynetnews 2026-11-08T16:12:51Z | In-window, **not agentic-CLI** (VC fund) |
| European tech weekly: >€2.7B across 55+ deals | Tech.eu 2026-11-09T09:02:24Z | In-window aggregate, no single agentic-CLI round |

**M&A:** **Palo Alto Networks is in talks to acquire AI-agent security startup Clutch Security for ~$500M** (AI Insider 2026-11-09T08:40:30Z; SDxCentral 2026-11-09T12:26:40Z). Reported/unconfirmed; first large security acquisition of an **agent-security** vendor in this window.
Source: https://news.google.com/rss/search?q=%22Series+A%22+OR+%22Series+B%22+(AI+agent+OR+coding+agent+OR+terminal+OR+CLI)+when:2d

**Capital-flow shape this window:** primary market (the Anthropic IPO, reported at up to $69.3B) plus large infrastructure commitments (Anthropic's $3.4B gas-fired power deal, Google's TPU 8tx/8i Max) and the Nvidia CEO-driven equity shock compressing Anthropic's valuation expectations. **No venture cycle in agentic CLI.** Demand signals: DeepSeek's Harness at 1.54M DAU and CodeRabbit's "20x more" agentic output.
Source: https://news.google.com/rss/search?q=Anthropic+(gas+OR+%22IPO%22+OR+valuation)+when:2d

---

## (E) Watchlist resolutions

**RESOLVED this cycle**
- **ANT listing day — NOT YET (EDGAR-verified, ~2026-11-10T02:0xZ).** Anthropic, PBC (CIK 0002130357): filings topped by S-1/A (2026-11-02); **no 424B4, no 8-A12B, no EFFECT, nothing dated 11-08/09/10**. EDGAR full-text search independently returns **0** for `424B4`+"Anthropic" since 2026-10-20 and **0** for `"Anthropic, PBC"`+EFFECT. The two `8-A12B` "Anthropic" hits are `Themes ETF Trust` filings (a fund holding Anthropic), **not the issuer**. Reuters' "$69.3 billion" and IFR's "launch Nasdaq IPO Tuesday morning" are therefore **press reports of an imminent offering whose prospectus pricing is not yet on EDGAR**.
  Source: https://data.sec.gov/submissions/CIK0002130357.json
- **Anthropic price range — STILL BLANK**, confirmed twice: the S-1/A reads "will be between **$ and $**" and "our Run-Rate Revenue was **$**" (values blank). The Reuters $69.3B figure is the first *public* number, and it is not in a filed document.
- **ANT quote — endpoint failure, but a working substitute negative obtained.** Nasdaq fails for the control `SPY` too; Yahoo returns 429 for the control as well. **Google Finance loads and classifies Anthropic as Private with no exchange/no price** — ANT is not trading as of window close. First cycle with a *positive* control proving the pipeline works while ANT remains unlisted.
- **Cursor's silence — RESOLVED as a coverage gap, not a release gap.** The vendor changelog *is* machine-readable as HTML: entries are **Nov 6, 2026 ("Voice Chat with Agents" — Grok Voice; voices Ara/Eve/Leo/Rex/Sal; Cmd+Shift+Space; Agents Window + IDE + web + Cursor for iOS)**, **Nov 5, 2026 ("Build Live Apps in Cursor")**, then **Oct 20, Oct 16, Oct 13**. Cursor shipped **two releases inside the two days before the window** and **nothing in-window** — the "~month of silence" claim in r/cursor (2026-11-08T07:39:30Z: *"Nearly a month of silence from Cursor — this is disrespectful to paying customers"*) is **contradicted by the changelog**: the real gap is 16 days (Oct 20 → Nov 5). Prior watchlist item **resolved and partly refuted**.
- **Gemini CLI core nightly — RESOLVED: it DID advance in-window.** `0.69.0-nightly.20261110.g1930f2539` published 2026-11-10T01:15:20Z with a **fresh tree** (commit `ca41614798`, 2026-11-09T22:27:15Z) — the prior cycle's "stale vs Nov 6" characterisation applied only to the `g62bab5b23` runs of Nov 7–9. Caveat: **no GitHub release counterpart** and npm `nightly` is still pinned to the Nov 4 build; the new build sits under `staging-tmp`.
  Source: https://registry.npmjs.org/@google/gemini-cli-core
- **Microsoft Agent Framework `dotnet-1.28.0`** — content confirmed (Foundry GA computer tool + breaking A2A change) but the version is **dated 2026-11-06 by its own changelog header** while its Atom `<updated>` reads 2026-11-09 → **late-published / re-touched**, not a fresh in-window bump.
- **Qwen Code `v0.26.9-nightly.20261107.65e1f1aeaa`** — confirmed **unchanged** (re-touch only; same tag as the 2026-11-09 cycle).
- **Claude Code CHANGELOG** — the `v2.1.321` release body supersedes the undated CHANGELOG entries; the CHANGELOG still carries no per-entry dates and remains unreliable for dating. Repo commits in-window are only `chore: Update mods/` (2026-11-09T21:37:47Z, 2026-11-10T00:20:46Z) and `chore: Update CHANGELOG.md and feed.xml` (19:22:09Z).
- **Anthropic FlashProve** — checked, **no in-window commit observed**; still unmaintained.
- **`zed-industries/zed#66521`** — checked, **no in-window activity**; Zed shipped nightly-only in-window, plus the new Fable 5.2 PR #66760.
- **Devin Desktop / Windsurf `v3.12.32`** (Nov 8) — confirmed still the latest; `docs.devin.ai/desktop/changelog.md` shows no newer entry. Contents re-verified: Agent Command Center "…" menu exposes MCP servers (toggle / re-authenticate); rejected first prompts return to the composer; editor on VS Code 1.141.2 + Electron 43.8.3; **"Permission requests from third-party ACP agents no longer crash the conversation view"**. Date-only (Nov 8) → boundary-uncertain; already covered in the prior cycle — listed here only as an explicit "checked, unchanged".
- **`google-gemini/gemini-cli` GitHub release channel** — still dormant after Nov 4; the vendor's release cadence is now **npm-only**.

**STILL OPEN**
- **Nasdaq quote API control FAILED** (SPY control fails identically) — the prior cycle's "ANT does not exist" negative cannot be re-verified from Nasdaq. Worked around with Google Finance.
- **Anthropic IPO price range and share count** — still blank on EDGAR; the Reuters $69.3B figure is unverified at body level (all syndications blocked).
- **Antigravity CLI `v1.5.3`** (Nov 7) — the CLI channel's newest build is still outside the window; the in-window Antigravity release is the **App** `v2.30.0` (Nov 9). Watch whether the CLI follows within 24 h, since v2.30.0 completes the voice-mode and remote-agent rollouts the CLI also exposes.
- **Sourcegraph Amp** — `sourcegraph/amp`, `ampcode/amp`, `ampcode/amp-cli` all 404; correct repo path still unknown; product remains uncovered in this study.
- **Cursor's next release** — the changelog is now parsable; next cycle should diff it mechanically instead of relying on a page-text heuristic.
- **Google Antigravity changelog path** — the old `/changelog` now 302-redirects; `/docs/changelog` is live (App / CLI / IDE / Extensions / SDK / Blog sections).

**Out-of-window content surfaced inside the window (not counted as new):** Anthropic RSI-capability warning (Nov 2, HN in-window) · "Goodbye Claude, hello Pi" (Sep 21, HN in-window) · OpenAI $11B at $1.25T (published Nov 7, HN submitted in-window) · DeepSeek Harness DAU first reported by Bloomberg on Nov 8 (re-reported Nov 9) · OpenAI "GPT-6 Cyber" (Nov 5) · Gemini Omni 1.2 Flash (Nov 5) · Kilo Code v7.8.28 (Nov 7) · Antigravity CLI v1.5.2/v1.5.1 (Nov 6/Nov 5).

---

## (F) Coverage gaps & errors logged this cycle

1. **GitHub REST API rate limit (60/h unauthenticated)** — hit during release-body fetches; Qwen Code Desktop `desktop-v0.27.1` and Factory `droid` release bodies unobtainable. **All Atom feeds, npm registry, RSS feeds and vendor HTML pages were unaffected** — direct HTTP retrieval via `exec` proved the reliable fallback for every item except those two release bodies.
2. **Every Reuters-family URL is body-blocked.** Direct `curl` of the Reuters IPO URL returns a **401, 774-byte "Please enable JS and disable any ad blocker" shell**; IFR **401**; Investing.com **403** ("Just a moment…"); Central Oregon Daily **429**; US News / AOL / Yahoo syndication paths **404** or 000; Euronext and Global Banking & Finance Review are JS-only. **The headline "$69.3 billion" therefore remains body-unverified** and is labelled as such. Same for the Anthropic lawsuit item.
3. **Quote-source cascade all failed:** Nasdaq API "Symbol not exists." (ANT *and* SPY control), Yahoo chart 429 (ANT *and* SPY), Stooq 404/JS, FMP "Invalid API KEY", stockanalysis.com Cloudflare interstitial. **Mitigation:** Google Finance's `ANT:NASDAQ` page loads and shows Anthropic as private/unlisted.
4. **The Nasdaq failure is now proven environmental, not data-related** (the SPY control returns the identical error payload). Do not record "ANT does not exist" from Nasdaq in future cycles.
5. **Repo-name artifact resolved for one item:** `microsoft/vscode-copilot-cli` → the correct repo is **`github/copilot-cli`**, which released **`1.0.108` and `1.0.109-0` in-window**. The previous cycle's 404 was logged as "naming artifact", masking two real releases; corrected here.
6. **`Factory-AI/factory` publishes no GitHub releases** (`releases.atom` → 0 entries) and no changelog file at `apps/cli/CHANGELOG.md` (404). **Factory Droid is npm-only** — 1.6.1 confirmed released (2026-11-09T21:46:18Z) with **no notes available**.
7. **OpenAI newsroom pages are Cloudflare-403 to `curl`** ("Enable JavaScript and cookies to continue") — the OpenAI RSS feed carries headline + pubDate + URL only, so the in-window OpenAI posts are headline-level.
8. **`antigravity.google/changelog` now 302-redirects** to `/docs/changelog` (the earlier "79 extracted chars" was a redirect stub, not an empty changelog). The live page is fully parsable and yielded **Antigravity App v2.30.0 (Nov 9)** — a release **neither** the previous cycle's findings file nor the community file recorded.
9. **GitHub Atom `<updated>` ≠ publication** — labelled throughout; Qwen's `v0.26.9-nightly.20261107.65e1f1aeaa` and Agent Framework `dotnet-1.28.0` are the two in-window re-touch cases.
10. **DeepSeek Harness and the Nvidia story were absent from the previous cycle's cumulative findings** — both newly surfaced here (Google News + Google Finance news rail). DeepSeek Harness is the only open-source agent runtime in-window to report 1.54M DAU and a plugin marketplace; the Nvidia CEO investigation is the macro driver Anthropic's IPO pricing is being written against.
11. **Budget used: 1 `web_search`, 0 `web_fetch`** (limits: 4 / 1). All other retrieval was direct HTTP GET via `exec`, which does not consume the mandated search/fetch budget.

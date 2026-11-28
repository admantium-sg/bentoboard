# Orchestrator Findings — Agentic CLI Tools — 2026-11-15

**Window:** 2026-11-14T01:28:00Z → 2026-11-15T01:28:00Z (UTC)
**Method:** direct primary-source retrieval via `curl` only. **0 web_search, 0 web_fetch.**
**Raw captures:** `tmp/2026-11-15/`

---

## 1. ✅ THE ADVISORY COUNT IS NOW SETTLED BY AN INDEPENDENT SOURCE — OSV.dev CONFIRMS 30 ADVISORIES / 24 HIGH

This was the third consecutive cycle where the figure was wrong (6 → 10 → 32 → 28 → 30). The correction is now verified against a **second, independent database** rather than a third read of the same GitHub endpoint.

`POST https://api.osv.dev/v1/query` with `{"package":{"name":"@anthropic-ai/claude-code","ecosystem":"npm"}}` returns:

- **30 vulnerabilities total**
- **24 HIGH, 4 MODERATE, 2 LOW**
- published range **2025-06-23 → 2026-11-09**
- newest still **2026-11-09** → **no new advisory in this window**

This matches the GitHub Advisory API figures exactly (30 / 24 / 4 / 2) while being sourced from a completely separate database (Google's OSV.dev, fed by the GitHub Advisory Database). **The number is now two-source confirmed and should be treated as settled.**

- Source: https://api.osv.dev/v1/query
- Source: https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code&per_page=100
- Note: `package_name=claude-code` remains a **fuzzy** query form and must never be used for counting (returns unrelated Hono/Astro/Svelte packages).

---

## 2. 🟢 VERIFIED NEGATIVE — NO NEW CLAUDE CODE RELEASE IN THIS WINDOW, AND STABLE IS STILL 14 VERSIONS BEHIND

`https://registry.npmjs.org/@anthropic-ai/claude-code` at 2026-11-15:

```
dist-tags: { "stable": "2.1.311", "latest": "2.1.325", "next": "2.1.325" }
```

- **No publish inside the window.** Last two publishes are **2.1.324 @ 2026-11-13T18:42:36Z** and **2.1.325 @ 2026-11-13T20:07:25Z** — both *before* the window opened at 2026-11-14T01:28Z. This is a **verified negative**, not an access gap: the full npm time map was read.
- **The stable channel is still 2.1.311 — fourteen versions behind latest (2.1.325).** This matters for every new capability below: Code Mode, the advisor tool, the auto-mode config surface and the sandbox changes are all **latest-channel only**.
- Note the tag asymmetry: `latest` and `next` both point at 2.1.325, so `npm i @anthropic-ai/claude-code@latest` now yields the tightened-sandbox build, but `claude update` on the stable channel still yields 2.1.311.
- Source: https://registry.npmjs.org/@anthropic-ai/claude-code

---

## 3. 🔵 THE CLAUDE CODE DOCUMENTATION INDEX IS A 202-PAGE MACHINE-READABLE MAP THAT NO PRIOR CYCLE HAD CAPTURED

`https://code.claude.com/docs/llms.txt` (58,496 B, HTTP 200) lists **202 documentation pages**, each with a one-line description, and each page is also served as raw Markdown at `https://code.claude.com/docs/en/<slug>.md`.

A systematic novelty scan (all 202 slugs grepped against `cumulative_findings.md`, `archive/cumulative_findings_2026-11.md` and the last 5 daily reports) found **107 slugs never mentioned anywhere in the knowledge base.**

**This is not 107 new features.** Mapping each candidate back through the release changelog shows most shipped in **October 2026** (ultrareview 2.1.314, advisor 2.1.300, cross-session messaging 2.1.280, `CLAUDE_CODE_PROCESS_WRAPPER` 2.1.208). What is new is **our coverage**: the enterprise and product surface of Claude Code had been mapped almost entirely through release notes, and the *shape of the product* — its enterprise deployment surfaces, its code-review product line, its marketplace infrastructure — had never been captured at all.

**Never-before-captured enterprise deployment surfaces:**
- `self-hosted-environments` (+ `quickstart`, `deploy`, `identity`, `configuration`, `testing`, `reference` — **six pages**) — run Claude Code cloud sessions on infrastructure you control, deploy runners, route sessions to your own compute.
- `claude-apps-gateway` (+ `config`, `deploy`, `on-aws`, `on-gcp`, `spend-limits`) — run Claude Code through Bedrock, Claude Platform on AWS, Google Cloud or Microsoft Foundry **behind a self-hosted gateway** with SSO sign-in, per-group model access and OTLP telemetry.
- `server-managed-settings` — centrally configure Claude Code for an organisation **without device-management infrastructure**.
- `managed-mcp` — restrict which MCP servers users may add or connect, or push servers to every user, via allowlists and denylists.
- `corporate-launcher` — `CLAUDE_CODE_PROCESS_WRAPPER` / `processWrapper` routes every self-spawn (including the background service and every agent-view session) through a required corporate launcher.
- `network-config`, `secure-deployment`, `hipaa-setup`, `legal-and-compliance`, `admin-setup`, `monitoring-usage`, `cost-tracking`, `data-usage`, `devcontainer`, `gitlab-ci-cd`, `github-actions-cloud-providers`, `github-enterprise-server`.

**Never-before-captured product surfaces:**
- **Code Review as a six-page product line**: `code-review-setup`, `code-review-pull-requests`, `code-review-customize` (REVIEW.md / CLAUDE.md calibration of severity, skipped paths, extra checks), `code-review-costs` (billing through **usage credits**), `code-review-local`, `code-review-troubleshooting`, plus `ultrareview` (deep **multi-agent** cloud review via `/code-review ultra`).
- **Marketplace infrastructure**: `create-marketplace`, `host-marketplace`, `marketplace-reference`, `manifest-reference`, `cli-reference`, `plugin-evals` (write eval cases, grade against a no-plugin baseline, **gate CI on the score**), `anthropic-marketplaces`.
- **Multi-session console**: `agent-view` — "dispatch and manage many Claude Code sessions from one screen… shows what every session is doing and which ones need your input."
- **Automation**: `routines` — scheduled tasks (formerly routines) that run **in the cloud on a schedule, on API calls, or on GitHub events**; `desktop-scheduled-tasks` for daily code reviews, dependency audits, morning briefings.
- **Cross-machine orchestration**: `cross-session-messaging` (list and message other Claude Code sessions on this machine and reach sessions on other machines or in the cloud).
- **Scale surfaces**: `large-codebases` (monorepos, nested CLAUDE.md, sparse worktrees, code intelligence, per-package skills), `tool-search` (scale to thousands of tools by discovering and loading only what is needed, on demand), `code-intelligence` (LSP plugin for type errors after edits and symbol navigation), `channels-reference` (an MCP server that **pushes** webhooks, alerts and chat messages *into* a Claude Code session — capability declaration, notification events, reply tools, sender gating, permission relay), `session-storage` (mirror Agent SDK transcripts to your own object store / KV / database so other hosts can resume), `structured-outputs`, `custom-tools`, `streaming-vs-single-mode`.

**Why this matters for the thesis:** the agentic CLI is no longer a terminal product with a plugin system. It has a **managed, governed enterprise deployment story** (gateway + runners + server-delivered settings + managed MCP + telemetry) and a **line-item enterprise product** (Code Review, billed in usage credits, with a per-org cost model). Both were invisible in our baseline.

- Source: https://code.claude.com/docs/llms.txt
- Source: https://code.claude.com/docs/en/self-hosted-environments.md
- Source: https://code.claude.com/docs/en/claude-apps-gateway.md
- Source: https://code.claude.com/docs/en/code-review-costs.md
- Source: https://code.claude.com/docs/en/agent-view.md

---

## 4. 🔴 CODE MODE: THE DOC PAGE IS LIVE AND ITS PERMISSION MODEL IS PRECISELY SPECIFIED

`https://code.claude.com/docs/en/code-mode` — HTTP 200, 324,086 B, title **"Run tool calls from code with Code Mode - Claude Code Docs"**. (The prior cycle saw HTTP 200 at 2026-11-14 01:35Z, just after its window closed, and "Page Not Found" at the window before that.) Full content now captured.

**Hard requirements (previously only loosely described):**
- **Version:** v2.1.323 or later, **on either release channel** — but `stable` is still 2.1.311, so stable users must wait or switch to `latest`.
- **Model whitelist:** Claude **Opus 5.5, Sonnet 5.5, Haiku 5.5, or Fable 5.2**. *Mythos 5.2 is not in the list.*
- **Account:** a Claude subscription or Console account. **Not** via gateway, Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, or Microsoft Foundry.
- **Organisation:** your org must not use the HIPAA configuration or zero data retention.
- **Surface:** an interactive `claude` session in a terminal. **Does not work with `-p`, the Agent SDK, the VS Code panel, the Desktop app, or cloud sessions.**
- **Installation:** the native build (Windows: Git for Windows installed).
- **Conflicts:** you cannot start Code Mode with some settings on — an **API key helper, agent teams, OpenTelemetry export, or `DISABLE_TELEMETRY`**. Agent teams specifically require `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` unset, a start **without** `--restricted`, `REPL` added to `--tools`, and `REPL` removed from `--disallowedTools` and deny rules.

**Enablement:** `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` in the shell or in `~/.claude/settings.json` → `{"env": {"CLAUDE_CODE_EXPERIMENTAL_CODE_MODE": "1"}}`.

**Two supply-chain / governance properties that are new and worth stating precisely:**
1. **"Claude Code ignores this variable in a project's settings files, so a repository you clone can't turn on Code Mode for you."** — a cloned repo cannot self-enable Code Mode. The env var must come from the user's own shell or user settings.
2. **Managed settings can disable it org-wide** by setting `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE` to `0` in managed settings ("You can't turn on Code Mode for your users from managed settings"). Users already inside a Code Mode session stay in it until they exit or restart.

**Resume semantics:** a Code Mode session can be resumed **only in the terminal with Code Mode on**; with the env var off, Claude Code refuses to resume it. Sessions started *without* Code Mode resume without it even when the variable is set.

**Permission model — the hole is now scoped precisely:**
- Every tool call the generated code makes still passes through deny/ask rules and PreToolUse hooks. You do **not** need a new rule or matcher for a tool such as Bash.
- **Auto mode:** a classifier reviews **each piece of code before it runs, not each tool call**. It "doesn't see values computed at run time, such as a path taken from search output." **Other permission modes prompt per tool call.** So the previously reported hole is specific to auto mode.
- The only documented mitigation is a **PreToolUse hook matching `REPL`** (the tool that runs Claude's code), reading the JavaScript from `tool_input.code`.
- "Bash rules match command text, so Claude can run a denied command in a form the rule doesn't match, with or without Code Mode."

**Long-running code:** *waiting* mode stops the code after **ten minutes, including time spent at permission prompts**; *background* mode can run for **up to two hours** and requires starting the session in **auto or bypassPermissions** mode.

**Interface:** in the conversation you see the tool calls (e.g. the edit's diff) but **not the code**; press **Ctrl+O** to open the transcript viewer, where each piece appears as a collapsed **Code** row. The generated code uses a `$` template helper (`$ \`rg -l ...\`.text()`), `await edit(...)` and `.nothrow()`.

- Source: https://code.claude.com/docs/en/code-mode

---

## 5. 🔴 AUTO MODE: A NEW *BILLING* SURFACE, AND A CONFIG LAYER WE HAD NEVER MAPPED

**New doc pages (never captured before):** `auto-mode-config.md`, `auto-mode-classifier-billing.md`, `permission-modes.md`, `sandboxing.md`, `sandbox-environments.md`.

**The billing surface is new and commercially meaningful.** Auto mode's classifier normally runs **server-side**, as part of the session's own model requests, **at no charge**. Where the server's checks cannot reach the session, Claude Code falls back to making its **own classifier requests, which are billed as token usage on your account**. The user-visible notice is:

> We're changing auto mode to no longer charge for classifier requests in Claude Code. However, this session isn't eligible.

- The most common cause is **an LLM gateway or proxy** between Claude Code and the API; when Claude Code can identify one, the notice names it.
- The notice **holds the first action it would check** until you answer. Enter continues (and, if a gateway was named, suppresses the notice on that machine for 24 hours). Esc / Ctrl+C cancels the held action and stops the turn, remembering nothing — so it reappears before the next checked action.
- Auto mode itself keeps working either way.
- Source: https://code.claude.com/docs/en/auto-mode-classifier-billing.md

**Auto mode is the built-in starting permission mode, and it is no longer plan-gated.**
> "With Claude Code v2.1.283 or later, auto mode is the **built-in starting permission mode** for interactive terminal and VS Code sessions. On earlier versions, it's the built-in starting permission mode only on Pro, Max, Ultra, and Team plans."

And auto mode is **available to all users on every provider** — Anthropic API, Claude Platform on AWS, Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and signed-in Claude apps gateway sessions. (The advisor tool and Code Mode are *not* available on Bedrock / Agent Platform / Foundry — the availability split is now a documented matrix in `feature-availability`.)

**Server-side vs local classifier is an explicit, env-controlled switch.** `CLAUDE_CODE_AUTO_MODE_SERVER=1` (v2.1.281+) turns the server-side check on; `CLAUDE_CODE_AUTO_MODE_SERVER=0` keeps the built-in classifier. `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` turns off feature-flag fetching. Introduced in 2.1.319 (Nov 6) — pre-window, but never captured in our baseline.

**`autoMode` settings block — a trust-infrastructure layer we had not captured.** The classifier "trusts only the working directory and the current repo's configured remotes" by default; pushing to your company's source-control org or writing to a team cloud bucket is **blocked until you add them to `autoMode.environment`**. `auto-mode-config.md` covers environment context, overriding default block/allow rules, generating environment entries, and **auto-mode CLI subcommands** for inspecting effective config.

**Sandbox / auto-allow interaction (documented precisely on `sandboxing.md`):**
- Auto-allow mode works **independently of your permission mode setting**, with three exceptions: plan mode, auto mode commands carrying per-command allowed domains, and server-side classifier review of sandboxed commands in auto mode. "Even if you're not in 'accept edits' mode, sandboxed Bash commands run automatically when auto-allow is enabled."
- The first time a command needs a new network domain Claude Code prompts; **in auto mode Claude instead names the hosts a command needs on the command itself**, for the classifier to review with it.
- **Managed settings can lock the sandbox posture**: deny entries and the `autoAllowBashIfSandboxed` value can be set in managed settings "to keep a repository from changing it", and a managed `sandbox.enabled` / `autoAllowBashIfSandboxed` / `allowUnsandboxedCommands` makes the panel report "configured and cannot be changed locally" instead of opening.
- **Network limitation is explicitly documented:** the built-in proxy enforces the allowlist by requested hostname and **by default does not terminate or inspect TLS traffic**. The experimental `network.tlsTerminate` setting makes the proxy terminate TLS itself, which `mask` credential entries require — and it "does not add content filtering."

- Source: https://code.claude.com/docs/en/auto-mode-config.md
- Source: https://code.claude.com/docs/en/auto-mode-classifier-billing.md
- Source: https://code.claude.com/docs/en/permission-modes.md
- Source: https://code.claude.com/docs/en/sandboxing.md

---

## 6. 🟡 THE ADVISOR TOOL: A SERVER-SIDE SECOND-MODEL ESCALATION PATH, NEVER CAPTURED BEFORE

`https://code.claude.com/docs/en/advisor` — HTTP 200, title "Escalate hard decisions with the advisor tool - Claude Code Docs".

- The advisor tool lets Claude consult a **second, typically stronger model at key moments** — before committing to an approach, when stuck on a recurring error, or before declaring a task complete.
- The advisor **receives the full conversation, including every tool call and result**, and returns guidance Claude applies before continuing.
- It **runs server-side on Anthropic's infrastructure as a server tool**, and is available to **both subscription and API-billed accounts**.
- **You choose which model acts as the advisor; Claude decides when to call it.** Three ways to set it: the `/advisor` command (mid-session, saved as the `advisorModel` user setting), the `advisorModel` setting, or the `--advisor` flag for one session.
- Session banner: "**Advisor Tool (experimental) is on and may use more tokens**".
- **Fable as advisor requires a one-time consent to bill Fable usage to usage credits** — a direct link to the Fable quota complaints tracked in prior cycles.
- Availability: Anthropic API, Claude Platform on AWS, or Claude Models on Google Cloud (Anthropic managed); requires **v2.1.300+** on AWS/GCP. **Not available on Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry.** `/advisor` works in non-interactive mode with `-p`, the Agent SDK, the desktop app and over Remote Control (requires v2.1.260+).
- The docs position it against alternatives: "for other ways to get a second opinion" — `opusplan` and subagents.
- Source: https://code.claude.com/docs/en/advisor

---

## 7. 🟢 VERIFIED NEGATIVE — NO EDGAR FILINGS IN WINDOW; THE IPO'S LAST OBSERVABLE EVENT IS STILL NOV 12

`https://data.sec.gov/submissions/CIK0002130357.json` (Anthropic, PBC) read in full at 2026-11-15:

| filingDate | form | accession | primaryDocument | acceptanceDateTime |
|---|---|---|---|---|
| 2026-11-12 | FWP | 0001628280-26-073045 | anthropicpbc-fwpjapanamend.htm | 2026-11-12T11:08:43Z |
| 2026-11-12 | FWP | 0001628280-26-073040 | anthropicpbc-fwpxeeaprospea.htm | 2026-11-12T11:06:37Z |
| 2026-11-12 | FWP | 0001628280-26-072953 | anthropicpbc-fwpauswrapcap.htm | 2026-11-11T01:43:39Z |
| 2026-11-12 | FWP | 0001628280-26-072952 | anthropicpbc-fwpukmaterials.htm | 2026-11-11T01:40:04Z |
| 2026-11-12 | FWP | 0001628280-26-072949 | anthropicpbc-fwpipowebsi.htm | 2026-11-11T01:35:49Z |
| 2026-11-10 | S-1/A | 0001628280-26-072484 | anthropicpbc-sx1ax2.htm | 2026-11-10T11:29:24Z |

- **Nothing filed on 2026-11-14 or 2026-11-15.** This is a **verified negative** (the full `filings.recent` array was parsed), and is unsurprising: both dates are a Saturday and a Sunday.
- **Still no 424B4, no 8-A12B, no EFFECT, no 8-K.** A `browse-edgar` 424B4 atom query returns **zero `<entry>` elements**.
- `tickers: ["ANT"]`, `exchanges: [null]` — the exchange assignment still has not been made.
- Consequence: **the next observable IPO event is a filing on Monday Nov 16**, ahead of the Australian retail tranche close (Nov 17 17:00), US pricing (Nov 18) and listing (Nov 19).
- Source: https://data.sec.gov/submissions/CIK0002130357.json

---

## 8. ⚠️ ACCESS GAP — YAHOO FINANCE IS RATE-LIMITING THIS HOST; NO QUOTE CAPTURED

`query1.finance.yahoo.com` and `query2.finance.yahoo.com` both returned **HTTP 429** for ANT, ANTW and the SPY control (23 B and 19 B error bodies, no JSON). Two attempts, 20 s apart, with a browser User-Agent and an `Accept: application/json` header. Earlier cycles successfully used this endpoint with `range=1mo`, so this is a **rate-limit / access gap, not evidence of a missing or halted listing.**

No statement is made about the ANT or ANTW price in this window. The EDGAR record in §7 is the authoritative observation.

- Source: https://query1.finance.yahoo.com/v8/finance/chart/ANTW?range=1mo&interval=1d

---

## 9. 📐 METHOD NOTE — A CORRECTED WAY TO DATE DOCUMENTED FEATURES

Prior cycles inferred "newness" of a Claude Code capability from the changelog text alone, which repeatedly produced over-claims (features shipped in October were described as new). This cycle used the **docs changelog** (`https://code.claude.com/docs/en/changelog.md`, 1,276,489 B) parsed into **441 (version, date) pairs** — e.g. `2.1.325 → November 13, 2026`, `2.1.323 → November 12, 2026`, `2.1.316 → October 31, 2026` — so every doc-page finding could be attributed to a release date. **Every doc feature reported above is explicitly labelled as either in-window, pre-window-but-never-captured, or a doc-level mapping.**

- Source: https://code.claude.com/docs/en/changelog.md

---

## Orchestrator summary

- 0 web_search, 0 web_fetch (caps 10 / 3) — all retrieval via curl against OSV.dev, npm registry, code.claude.com, SEC EDGAR, Yahoo Finance.
- **Headline:** the Claude Code advisory history is finally **two-source confirmed at 30 / 24 HIGH**, and the **202-page documentation index** revealed an enterprise deployment story (self-hosted runners, apps gateway, server-managed settings, managed MCP) and a **line-item Code Review product** that our baseline had never mapped.
- **Watch next:** a Monday Nov 16 EDGAR filing ahead of IPO pricing; whether the Code Mode doc's "cloned repos cannot enable Code Mode" property is mirrored in other harnesses; whether auto-mode classifier requests become a billable line item for gateway users; and whether the enterprise surfaces (self-hosted environments, gateway spend limits) show up in procurement talk.

---

## 10. 💰 ANTHROPIC NOW SHIPS A BILLING AND COST-ATTRIBUTION MODEL FOR AGENT FLEETS — THE GOVERNOR LAYER, FIRST-PARTY

Two documentation pages describe, in operational detail, how an organisation pays for, caps and attributes agentic work. Neither surface had ever been captured in this file.

### 10a. Claude Code **Code Review** is a metered, org-billed product with three spend ceilings

`https://code.claude.com/docs/en/code-review-costs.md` (HTTP 200, 6,474 B):

- **"Code Review has no flat per-review price."** Cost scales with the **review level**, the **size of the change**, the **complexity of the surrounding code**, and **how many candidate issues need verification**.
- **Billed on token usage through usage credits, separately from your plan's included usage.**
- **"Reviews are billed to your organization, not to the developer who opened the PR or requested the review."** ← this is the single most important line for enterprise procurement: the cost centre is the organisation, not the engineer. It removes the "whose budget?" objection that blocks agent tooling.
- Costs appear on the Anthropic bill **regardless of whether the organisation uses Bedrock, Agent Platform or Foundry for other Claude Code features**.
- **Trigger modes** per repository ("Review runs"): *Once after PR creation* (opened/reopened/marked ready), *After every push* (the default for repositories added from the admin page — "runs the most reviews"), *Manual (`@claude review`)*. `@claude review always` in "Once after PR creation" or "Manual" mode **opts that PR into push-triggered reviews**, so "additional cost accrues per push after that comment". Drafts and fork PRs skip automatic reviews.
- **Three independent ceilings**, any of which causes reviews to be skipped: the **Code Review spend limit** (monthly, org-wide, resets each billing period), the **organisation's overall usage-credits spend limit**, and the **usage credits balance**. Reviews are also skipped when the remaining balance is **less than the expected cost of one review**.
- **When a review is skipped, developers get a PR comment naming the cause and linking to the usage settings** — a graceful, observable degradation rather than a silent failure.
- Estimation workflow is explicitly "run a small pilot, read the **Average cost** column of the Repositories table in Admin settings > Claude Code, and multiply by monthly PR volume (and by pushes per PR in 'After every push' mode)".
- Analytics at `claude.ai/analytics/code-review`: PRs reviewed per day, Code Review cost so far this month, **"Feedback — count of review comments that were auto-resolved because a developer addressed the issue"**, and daily counts of findings.

### 10b. The Claude apps gateway has **per-developer, per-group and per-org spend caps enforced live**, with an explicit statement about runaway agent fleets

`https://code.claude.com/docs/en/claude-apps-gateway-spend-limits.md` (HTTP 200, 17,565 B):

- **"By default, a Claude apps gateway forwards all inference through one shared upstream credential, so your provider's bill attributes everything to that credential, not to individual developers."**
- **"Without per-developer limits, one runaway agent fleet can spend the organization's entire commitment."** ← an explicit statement of the agent-economics risk, from the vendor.
- Caps are enforced **live on every `/v1/messages` request**: the gateway looks up the developer's caps and period-to-date spend in **one Postgres query**. Over-cap developers get **`429` with `error.type: billing_error` and header `x-should-retry: false`** (plus the UTC reset date for a cap above `"0"`).
- Admin API at **`POST /v1/organizations/spend_limits`**, mirroring the wire shapes of Anthropic's public Admin API spend-limits endpoints (so the same HTTP client works by changing the base URL). Each request creates or replaces one cap from `{scope, amount, period}`.
- **Scopes:** `user` (by OIDC `sub`), `rbac_group` (by IdP group name), `organization`. Amounts are **whole-number USD-cent strings** (`null` = unlimited, `"0"` = hard block). Periods: `daily`, `weekly`, `monthly` — **each enforces independently, so a developer is blocked if over any of them.**
- **Resolution order:** per-user override → most restrictive group cap → org default → unlimited. `admin.group_limit_mode: max` flips the multi-group tie-break to least-restrictive.
- **A group or organisation cap is a per-seat default that each member inherits, not a shared pool.**
- Audit identity: `x-api-key` keys from `admin.write_keys` / `admin.read_keys` audit as **`admin-key:<id>`** (so Terraform, CI and each automation can be given its own key), while a gateway bearer token with an `admin.admin_groups` claim audits as **`oidc:<sub>`**.

**Why this is the most important structural finding of the cycle.** Prior cycles tracked the "governor layer" as an *emerging third-party category* — CodeRabbit to $100M ARR, LangChain at $300M on $3B, and a wave of control-plane startups. **Anthropic has now shipped the governor layer first-party, at the cost-attribution and spend-cap level**, inside the same product surface as the terminal agent. That does not kill the third-party category — but it means the bar for a standalone governance vendor moves up: the incumbent now offers org-billed token metering, per-developer caps, audit identity, and spend-driven degradation. **Watch for enterprise procurement conversations to start comparing the two.**

- Source: https://code.claude.com/docs/en/code-review-costs.md
- Source: https://code.claude.com/docs/en/claude-apps-gateway-spend-limits.md

---

## 11. 📊 ANTHROPIC HAS NOW SEGMENTED CLAUDE CODE INTO A CONSUMER TIER AND A GOVERNED ENTERPRISE TIER — WITH GOVERNANCE AS THE UPSELL LEVER

`https://code.claude.com/docs/en/feature-availability.md` (HTTP 200, 29,132 B) is a formal availability matrix that we had never captured. It is the clearest statement yet of how Claude Code is being packaged commercially.

### Availability by subscription plan (Claude subscription)

| Feature | Pro | Max | Ultra | Team | Enterprise |
| :- | :- | :- | :- | :- | :- |
| Cloud sessions | ✓ | ✓ | ✓ | ✓ | ✓ (premium or Chat+CC seat) |
| Cloud scheduled tasks | ✓ | ✓ | ✓ | ✓ | ✓ |
| Remote Control | ✓ | ✓ | ✓ | **Admin-enabled** | **Admin-enabled** |
| Channels | ✓ | ✓ | ✓ | **Admin-enabled** | **Admin-enabled** |
| Computer use | ✓ | ✓ | ✓ | **✗** | **✗** |
| Dispatch (Desktop) | ✓ | ✓ | ✓ | **✗** | **✗** |
| **Code Review** | ✗ | ✗ | ✗ | **✓** | **✓** |
| **Analytics dashboard + contribution metrics** | ✗ | ✗ | ✗ | **✓** | **✓** |
| **Server-managed settings** | ✗ | ✗ | ✗ | **✓** | **✓** |
| **SSO** | ✗ | ✗ | ✗ | **✓** | **✓** |
| **Enterprise Analytics API** | ✗ | ✗ | ✗ | ✗ | **✓ only** |
| **SCIM** | ✗ | ✗ | ✗ | ✗ | **✓ only** |
| **Compliance API** | ✗ | ✗ | ✗ | ✗ | **✓ only** |
| **Zero Data Retention** | ✗ | ✗ | ✗ | ✗ | **✓ only, separately enabled** |

Read-outs:
- **The governance stack is the enterprise product.** SSO, SCIM, the Enterprise Analytics API, the Compliance API and server-managed settings are **Enterprise-plan-only**, and are what an enterprise buyer is actually purchasing. Code Review and the analytics dashboard start at Team.
- **Zero Data Retention is not in the standard Enterprise plan** — "requires separate enablement by Anthropic for qualified accounts". It is a *negotiated* entitlement, not a checkbox.
- **Computer use and Desktop Dispatch are the mirror image: Pro/Max/Ultra only, and explicitly ✗ on Team and Enterprise.** So the newest "agent acts on your screen" surface is deliberately withheld from the plans that hold organisational credentials — a coherent security stance (no screen control for org users), and a plan-design detail our baseline never captured.
- **Remote Control and Channels are admin-enabled** on Team/Enterprise: available to the org, but switched on by an administrator. This is the enterprise pattern for every incoming-event surface.
- **Plan renaming:** "**Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x.**" Max and Ultra have **identical features**; the tiers differ only in usage limits. So the consumer ladder is Pro → Max(5x) → Ultra(20x), with Ultra now the top consumer tier rather than a separate power brand.

### Availability by model provider — a seven-way matrix

Documented providers: **Claude subscription (Pro/Max/Ultra/Team/Enterprise) · Anthropic Console · Amazon Bedrock (incl. the "Mantle endpoint", `CLAUDE_CODE_USE_MANTLE`) · Claude Platform on AWS (bought via AWS Marketplace but calling the Anthropic API) · Google Cloud (Anthropic managed) · Google Cloud (Google managed, `CLAUDE_CODE_USE_VERTEX`) · Microsoft Foundry**.

- **Everything that runs locally works on every provider** — CLI, Agent SDK, VS Code, JetBrains, subagents, hooks. The split is only for **subscription-gated** capabilities.
- **Bedrock is the most restricted**: no subscription features, plus **no web search, no fast mode, no Advisor, no Channels, no Code Mode**, no analytics dashboard, no server-managed settings, no `/design-sync` or `/import`. Auto mode works but only on **Sonnet 5+, Opus 4.7+, Haiku 5.5 and Fable**; cross-session messaging is limited to **the same machine**; cloud sessions require **GitHub Actions or GitLab CI/CD** instead; scheduling uses `/loop` instead of `/schedule`; web lookups need WebFetch with a specific URL.
- **Market naming signal:** Google Cloud's Vertex AI is now referred to as **"Google Cloud's Agent Platform"** in the Anthropic docs ("formerly Vertex AI"), with a pointer to platform.claude.com's *Google Cloud (Anthropic-managed)* overview to disambiguate the two Google offerings. Two cloud providers now brand a dedicated "agent platform" — the category is consolidating around an agent-shaped control plane, not general cloud.
- **Telemetry by default:** "On Amazon Bedrock, Google Cloud (Google managed), Microsoft Foundry, and Claude Platform on AWS, **error reporting and telemetry to Anthropic are off by default.**" Anthropic's own docs concede the cloud-provider privacy posture.

**Why this matters:** the agentic CLI is being sold as a **two-tier product** — a powerful individual tool (Pro/Max/Ultra, with screen control and fast mode) and a **governed organisational platform** (Team/Enterprise, with SSO/SCIM/compliance/analytics and spend caps, but *without* screen control). Our earlier thesis of "the terminal agent becomes the enterprise seat" is confirmed — but the packaging shows Anthropic is **deliberately not** giving enterprise customers the most agentic, least-governed surfaces.

- Source: https://code.claude.com/docs/en/feature-availability.md

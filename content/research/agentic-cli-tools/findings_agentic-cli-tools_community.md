# Findings: Community Discussions, Market Trends, Enterprise Adoption, Funding
Window: 2026-10-27 → 2026-10-29 (agentic CLI tools & desktop AI assistants)

## Community Pulse

**1. GitHub Copilot Fusion hits GA — multi-model orchestration is the new default.** Users pick "Copilot Fusion" instead of a model; Copilot orchestrates which model handles each task (effort tiers Standard/High/Max). GitHub (Artificial Analysis Coding Agent Index): *"Copilot Fusion Max scored 60, within two points of Claude Code with Opus 5.5 Max. It delivered that result at about half the average API cost per task, using about half as many tokens and taking about 40% less time per task."* Direct competitive framing against Claude Code.
Source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/
Source: https://artificialanalysis.ai/articles/github-copilot-fusion-orchestrates-anthropic-and-openai-models-to-balance-performance-and-cost
Source: https://news.ycombinator.com/item?id=50278478

**2. Benchmark discourse shifts to "real professional work" — Surge's Dayjob: Tax.** Top agentic thread of the window (203 pts / 127 comments, Oct 28): *"Dayjob: Tax — evaluating AI agents on 50 professional tax assignments."* Failure modes drew more attention than the leaderboard. Quotes: *"Useless benchmark as it seems to be evaluating literally only the weights."* / *"Is this just giving a general-purpose agent a workspace full of documents and an assignment, then seeing what happens? I feel this doesn't really say anything."* / *"These types of detail-oriented professional tasks seem like they would perform better with task-specific harnesses."* / *"10% of the time it works every time"* / pro-AI minority: *"GPT Sol did better than my specialist accountant this year... about 2B tokens, but that is better than spending $3-4k in preparation fees."* / counterweight: an LLM-prepared return came back *"riddled with errors. The refund was nearly $2k lower than it should have been."*
Source: https://surgehq.ai/blog/dayjob-tax
Source: https://news.ycombinator.com/item?id=50275626

**3. Privacy backlash over Anthropic's feedback-retention policy (top agentic-tool thread).** Anthropic help article *"Is my data used for model training?"* (224 pts / 117 comments, Oct 27). Trigger: **thumbs up/down feedback stores the entire related conversation for up to 5 years** — a commenter confirmed this applies to Claude Code too. Quotes: *"the lack of privacy forward thinking from a company I pay a couple hundred a month to kind of atrocious. They're buying no loyalty."* / *"it's still a shitty move and I feel deceived. I opted out of training... my data being stored for 5 years and potentially read by human reviewers."* / *"It feels dishonest to give paying customers an opt-out for training on their data and then sneak copies by asking for general feedback without a prominent disclaimer."* / pushback: *"yet another reason to use local inference."*
Source: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
Source: https://news.ycombinator.com/item?id=50259406

**4. StackOverflow question volume collapses below 1,000/month** (90 pts / 100 comments, Oct 28). Bitter toward Stack Overflow's ownership, AI framed as accelerant not sole cause: *"SO's new ownership did it to SO. It's a hostile place with or without AI."* / *"the newer generation of models don't even need Stackoverflow. With tool calling they can pull up as much documentation and source code as you could possibly want."* / counter: *"They were in decline long before LLMs were on the scene."*
Source: https://data.stackexchange.com/stackoverflow/query/1926661
Source: https://news.ycombinator.com/item?id=50282454

**5. Torvalds / Claude Code Linux page cache patch — a working hybrid, not a triumph** (HN 50256421): *"This is a perfect example where AI is used / working alongside humans to get the best of both worlds. Humans attempted to fix it and failed multiple times before."* / *"kernel reviewers found a race before anything merged."*
Source: https://thenewstack.io/torvalds-claude-code-kernel/
Source: https://news.ycombinator.com/item?id=50256421

**6. Developer-side agent tooling shipping fast on HN (Oct 27–28)** — low engagement but all shipping: **CleanCode** ("Claude Code and Codex collaborating on one canvas"); *"A Lisp coding agent is beating Codex in token efficiency by 10x"*; *"AI review optimized for recall (catches more defects than Codex or Claude)"*; *"Writing AI agents in YAML instead of Python"*; *"Agent Memory Is in the Wrong Place"* (Omnara); *"Our AI Agent Executed the Same Successful SQL Query 254 Times"*; *"When AI goes rogue, its human overseers may be to blame"*; *"Silicon Valley Is Grappling with a Flood of Bugs Found by A.I"*; **Vercel CI**.
Source: https://news.ycombinator.com/item?id=50265699
Source: https://news.ycombinator.com/item?id=50282481
Source: https://news.ycombinator.com/item?id=50260626
Source: https://news.ycombinator.com/item?id=50268662
Source: https://news.ycombinator.com/item?id=50278656
Source: https://news.ycombinator.com/item?id=50281851
Source: https://www.sciencenews.org/article/rogue-ai-agents-human-blame-safety
Source: https://www.nytimes.com/2026/10/28/technology/silicon-valley-bugs-ai.html
Source: https://vercel.com/blog/introducing-vercel-ci

**7. Mainstream AI-exec criticism and consumer-UI fatigue.** TechCrunch (Oct 28): *"AI execs may be too out of touch to build for the general public"*. Nieman Lab on the NYT Cooking app's AI features: *"Users aren't thrilled"*. The Atlantic: *"vibe coders are clogging app store slop"*. IFTTT rebranded to **IFTTT.ai** and **ended unlimited free-plan runs** — a consumer-agent monetization pullback.
Source: https://techcrunch.com/2026/10/28/ai-execs-may-be-too-out-of-touch-to-build-for-the-general-public/
Source: https://www.niemanlab.org/2026/10/the-new-york-times-is-adding-more-ai-features-to-its-cooking-app-and-users-arent-thrilled/
Source: https://www.theatlantic.com/technology/2026/10/vibe-coders-are-clogging-app-store-slop/689150/
Source: https://ifttt.ai/
Source: https://ifttt.com/explore/put-ai-to-work-for-you

**8. Agent-runaway / governance anxiety as a repeated theme.** Three Oct 28 items converge: the SQL-query-254-times incident; Science News on human overseers being to blame for rogue agents; Politico on *"Powerful Dem trio demands faster AI incident disclosures."* Signal: governance pressure is arriving from regulators, not just security vendors.
Source: https://armincat.com/articles/ai-agent-executed-same-query-254-times
Source: https://www.sciencenews.org/article/rogue-ai-agents-human-blame-safety
Source: https://www.politico.com/live-updates/2026/10/28/congress/powerful-dem-trio-demands-faster-ai-incident-disclosures-01138531

**9. Smaller but notable community signals.** Anthropic env var letting Claude Code skip the final file-deletion prompt (Oct 27); **GitHub had 257 incidents in 12 months**, incl. "Entire Ships Distributed Forge for AI Agents"; UC San Diego launched a Center for Principled Agentic Intelligence; Ask HN *"We tax labour, why not tax AI?"*; *"86% of Experts Followed AI's Hidden Recommendations While Believing They Were Their Own Judgment"* (automation bias); *"Google AI Search refuses to answer who won the 2020 election"* (129 + 11 pts) — model refusal is now a mainstream HN topic.
Source: https://cryptobriefing.com/anthropic-claude-code-environment-variable-file-deletion/
Source: https://www.techtimes.com/articles/319828/20261027/github-had-257-incidents-in-12-months-entire-ships-distributed-forge-for-ai-agents.htm
Source: https://today.ucsd.edu/story/uc-san-diego-launches-center-for-principled-agentic-intelligence
Source: https://news.ycombinator.com/item?id=50281372
Source: https://news.ycombinator.com/item?id=50280178
Source: https://arstechnica.com/ai/2026/10/google-ai-gets-cagey-when-asked-who-won-the-2020-elections/

---

## Market & Funding

**10. Agents are now a majority-share contributor on GitHub.** Octoverse 2026 (via Nadella): **AI agents opened >40% of all GitHub pull requests in September 2026 — 110 million PRs in one month, ~6× the March figure**. *"Software has a new most prolific contributor, and it doesn't take lunch breaks."* Strongest datapoint in the window: agentic coding went from visible minority to plurality in ~6 months.
Source: https://cryptobriefing.com/ai-agents-open-40-percent-github-pull-requests/

**11. GitHub folds Copilot into GitHub Enterprise; billing moves seats → consumption.** Universe 2026 **"Copilot Access"**: all licensed GitHub Enterprise Cloud users (account-team support; self-serve to follow) get Copilot **without a separate subscription or seat purchase**, with **usage charged against the central enterprise budget from the first request** — the fixed per-seat AI credit allowance is gone, only consumed units are billed. Code completion works without a budget; Copilot Chat, automated code review and cloud services require one. Standalone Copilot stays **$10/user/month**.
Source: https://borncity.com/news/github-enterprise-copilot-zugriff-fuer-alle-lizenzierten-nutzer-ohne-zusatzkosten/
Source: https://www.heise.de/news/Copilot-Access-GitHub-macht-Copilot-fuer-Enterprise-Kunden-verfuegbar-11503777.html

**12. Microsoft earnings confirm the enterprise agent shift.** Revenue **$92.3B, up 19%**; enterprises moving from AI experiments to production process automation (Unilever: order processing, trade disputes; Rolls-Royce: aircraft engine maintenance, supply-chain planning). Copilot: **daily users >5× YoY**; **>50,000-seat customers 8×**; **consumption-billed customers >75% QoQ**. CFO Amy Hood expects **usage-based pricing to spread more slowly outside software development**.
Source: https://www.pymnts.com/earnings/2026/microsoft-sees-enterprise-ai-adoption-accelerate-as-copilot-usage-grows/

**13. Cognition (Devin) reprices itself weeks after its Series E — $70–80B on the table.** Business Insider (Katie Roof, Oct 2026): **Cognition is fielding investor interest at a $70B–$80B valuation, weeks after announcing a round at $48B**; talks early, target could move. Founded 2023 by Scott Wu, Steven Hao, Walden Yan; investors include a16z, Accel, Founders Fund, Khosla Ventures, Elad Gil, Pear VC. The 40–67% jump in mark within weeks is the signal.
Source: https://www.businessinsider.com/cognition-round-of-funding-at-a-75-billion-valuation-2026-10

**14. Security/agent-governance startups are pulling large rounds** — capital flows to the agent *control plane*, not more agent front-ends. **Upwind**: **$400M Series C at a $3.8B valuation**, led by Bessemer Venture Partners with Canapi Ventures and existing investors; cloud/AI security for AI workloads and autonomous agents; one report says it **rejected a $3.8B Datadog buyout** before raising there, revenue reportedly quadrupling. **Infisical**: **$40M Series B at a $600M valuation**, led by Elad Gil (also Series A lead) with Gradient and Y Combinator, explicitly to build **security infrastructure for AI agents** (Agent Vault).
Source: https://ventureburn.com/upwind-raises-400m-cloud-security/
Source: https://siliconangle.com/2026/10/28/cloud-security-startup-upwind-raises-400m-3-8b-valuation-revenue-quadruples/
Source: https://www.thesaasnews.com/news/infisical-raises-40m-series-b/
Source: https://www.forbes.com/sites/amyroberts/2026/10/27/infisical-raises-40-million-to-keep-company-secrets-safe-from-ai-agents/

**15. Vertical AI-agent startups keep raising (same capital cycle, adjacent to CLI tooling).** **Avante** (Seattle) **$30M Series A** led by Frist Cressey Ventures with Sorenson Capital, Hearst Ventures and Morgan Stanley Next Level Fund plus existing FUSE; total funding $40M; "Ava Agents" for enterprise benefits workflows. **Hyphenate** (NY, formerly Maximor, rebranded October) **$45M Series A led by Nexus Venture Partners**, total raised **$54M**, for finance agents on existing ERP, bank and payroll systems; claims **86× revenue growth since seed** (company-reported, not independently verified).
Source: https://www.unite.ai/avante-raises-30m-series-a-ai-benefits-teams/
Source: https://ventureburn.com/hyphenate-raises-45-million-to-build-ai-finance-agents/
Source: https://www.pymnts.com/news/artificial-intelligence/2026/hyphenate-raises-45-million-dollars-finance-focused-ai-agents/

**16. Infrastructure strain becomes a first-class market story.** GitHub is adding **four million CPU cores** after outages tied to AI-driven traffic; separately reported at **257 incidents in 12 months** and now shipping a distributed forge for AI agents. Agent traffic is forcing physical capacity decisions at the platform layer.
Source: https://mezha.net/eng/news/mezha-7def2268e0bfa44a9a922a3a_github_plans_four/
Source: https://www.techtimes.com/articles/319828/20261027/github-had-257-incidents-in-12-months-entire-ships-distributed-forge-for-ai-agents.htm

**17. The agent runtime is being commoditized into an embeddable SDK.** Cursor's `@cursor/sdk` (public beta **April 29, 2026**) packages the same agent runtime, model access and harness behind the Cursor desktop app, CLI and web — `npm install @cursor/sdk` — callable from CI pipelines, backends or third-party products. Ships the **full harness, not a preview**: codebase indexing, MCP server support, reusable Skills, guardrail hooks. The editor was never the moat; the agent underneath is being sold as infrastructure.
Source: https://startupfortune.com/cursor-turns-its-coding-agent-into-a-typescript-sdk-anyone-can-build-on/

**18. "Is your coding harness secure?" — agent governance now reaches CEO level.** Replit's Oct 28 post on secure agent work in Agent Habitat opens with Palo Alto Networks CEO **Nikesh Arora's** question to every company adopting AI: *"There are billions of dollars being spent on coding, is your coding harness secure?"* His recommendation: establish guardrails for agent deployments and **deploy a second set of eyes to monitor them for drift, compliance and verifiability**. Replit's four principles: least authority; containment (isolate execution, protect credentials, respond to vulns in-environment); expand access while keeping product boundaries; automate the security response with humans defining policies/approvals/intervention points. Replit says its isolation protections blocked exploitation of the prior week's kernel vulnerabilities.
Source: https://replit.com/blog/architecture-behind-secure-agent-work

**19. Anthropic ships a switch that disables the last safety prompt.** Claude Code **v2.1.311** added **`CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS=1`**, disabling the final approval prompt before destructive commands (`rm`, `rmdir`). The name is deliberately explicit. Signal: the vendor optimizes for fully autonomous runs and pushes the safety decision to the operator — already read as a governance risk by security buyers.
Source: https://news.lavx.hu/article/anthropic-adds-a-claude-code-switch-that-lets-agents-delete-files-without-asking
Source: https://cryptobriefing.com/anthropic-claude-code-skip-permissions-variable/

### Enterprise Adoption

**20. Enterprise agent adoption is the default posture, not a pilot.** *"Microsoft is seeing enterprises move beyond artificial intelligence experiments toward systems that handle business processes."* Named deployments are line-of-business, not developer tooling. Metrics agree: daily users 5× YoY, >50k-seat customers 8×, consumption-billed customers +75% QoQ.
Source: https://www.pymnts.com/earnings/2026/microsoft-sees-enterprise-ai-adoption-accelerate-as-copilot-usage-grows/

**21. Copilot becomes a bundled capability for existing enterprise contracts.** "Copilot Access" removes the incremental seat-purchase decision, flipping the adoption question from *should we buy seats* to *how much do we consume*. Consumption billing matches the reality that agent usage is bursty and machine-driven rather than human-per-seat. Caveat: initially limited to GitHub Enterprise Cloud with account-team support; existing self-serve subscriptions unchanged.
Source: https://borncity.com/news/github-enterprise-copilot-zugriff-fuer-alle-lizenzierten-nutzer-ohne-zusatzkosten/

**22. Enterprise pricing is bifurcating: developer tools go consumption, everything else stays seats.** Amy Hood's guidance that **usage-based pricing adoption will be slower outside software development** is the most useful signal for CLI/agent tooling: the consumption transition is driven by, and limited to, code-generation contexts for now. Agent CLI vendors can monetize aggressively in developer land while broader "AI exec" products stay on seat licensing.
Source: https://www.pymnts.com/earnings/2026/microsoft-sees-enterprise-ai-adoption-accelerate-as-copilot-usage-grows/

**23. Governance and identity is what enterprises are buying to solve.** Agent-specific buying clusters on four control points this window: (a) **agent credential/secret management** — Infisical's $40M Series B; (b) **cloud/workload security for agent traffic** — Upwind's $400M Series C; (c) **harness security and monitoring** — Arora's "is your coding harness secure?" framing, Replit's second-set-of-eyes recommendation; (d) **per-agent identity tracking** — Replit reported deploying it to close the gap between agent actions and attributable identities.
Source: https://www.thesaasnews.com/news/infisical-raises-40m-series-b/
Source: https://ventureburn.com/upwind-raises-400m-cloud-security/
Source: https://replit.com/blog/architecture-behind-secure-agent-work
Source: https://www.msn.com/en-us/news/other/replit-deploys-per-agent-identity-tracking-to-close-enterprise-ai-governance-gap/ar-AA2ga6Os

**24. Agents as enterprise delivery capacity: 110M PRs/month.** The agentic CLI layer is now a meaningful share of the enterprise delivery pipeline. With 257 GitHub incidents in 12 months and a four-million-CPU-core expansion, the practical constraint on agents is infrastructure and identity/attribution — not model capability.
Source: https://cryptobriefing.com/ai-agents-open-40-percent-github-pull-requests/
Source: https://www.techtimes.com/articles/319828/20261027/github-had-257-incidents-in-12-months-entire-ships-distributed-forge-for-ai-agents.htm

---

## Issue Tracker Signals

**25. Claude Code — sandbox-boundary enforcement is the dominant bug class** (filed Oct 28–29). **#105832**: the Bash tool can still probe file existence **outside working directories** via `test -f "c:/RandomDirectory/SomeFile.txt" && echo "EXISTS"`, though `test` was never allowlisted and `blockReadsOutsideWorkingDirectories` should apply. **#105833**: **Cyber Safeguard false positive** on hardware-in-the-loop test automation — an ESP32-S3 sends HID input and captures screenshots only on the author's own authorized test bench, yet the safeguard still blocks the agent. **#105836** (invalid) + **#105830** (needs-info): a `github-integration` failure cluster filed minutes apart — a regression wave, not isolated reports.
Source: https://github.com/anthropics/claude-code/issues/105832
Source: https://github.com/anthropics/claude-code/issues/105833
Source: https://github.com/anthropics/claude-code/issues/105836
Source: https://github.com/anthropics/claude-code/issues/105830

**26. Claude Code Desktop — cost observability for multi-agent runs is being lost.** **#105831** asks to restore per-agent model, token count and tool-call count in the Claude Desktop workflow panel (macOS). Earlier builds showed a run header like *"4 agents · 657.0k tokens"* plus per-agent tokens/tools/time; in **Claude Code 2.1.312** each agent row shows only label and elapsed time (`t1 3m 52s`), header only *"3 agents running · 4 done"*, with no setting to restore it. The argument is economic: *"These numbers are the only in-app view of what a long multi-agent run costs, and which model each agent ran on. Without them I cannot tell a cheap seat from an expensive one while the run is live."* With consumption billing and per-agent model selection arriving, in-agent cost telemetry is table stakes.
Source: https://github.com/anthropics/claude-code/issues/105831

**27. Claude Code — other same-day signals.** Windows skill `effort:` frontmatter ignored with CRLF `SKILL.md` (#105838); Desktop app drops messages sent while Claude works (#105834); VS Code hides the Effort control when model is `opus[1m]` (#105828); macOS auto-updater deletes a running session's binary, TCC denial then blocks `~/Downloads` (#105824); **Japanese IME Enter-to-confirm regression in 2.1.311** (#105823); inconsistent refusal (#105825). IME regression and hidden Effort control have the clearest day-to-day impact.
Source: https://github.com/anthropics/claude-code/issues/105823
Source: https://github.com/anthropics/claude-code/issues/105828
Source: https://github.com/anthropics/claude-code/issues/105824

**28. Codex — sub-agent lifecycle and sandbox containment are the top defects.** **#57863** (Oct 28, **codex-cli 0.165.0** app-server, Linux x86_64, bubblewrap sandbox): an app-server client **cannot stop a multi-agent v2 sub-agent whose shell command is still running** — `turn/interrupt`, `thread/backgroundTerminals/clean` and `thread/archive` all "succeed", but the command runs to its end and the parent is never told the child ended (tree: `codex app-server → codex-code-mode-host → codex-linux-sandbox → bwrap --as-pid-1 --die-with-parent`). **#57865** (Oct 29, Codex desktop macOS): **four managed Git worktrees on one chat cannot be archived** — each attempt returns *"Another active task still uses this worktree"* without naming the blocker. **#57867** (Oct 29): auto-review rejects an inter-chat status reply **despite explicit permanent authorization** — authorization doesn't propagate across agent/chat boundaries. **#57860** (Oct 28): macOS Sites publish — a personal workspace gets `sandbox_approval=false`, i.e. sandbox escalation leaking between workspaces.
Source: https://github.com/openai/codex/issues/57863
Source: https://github.com/openai/codex/issues/57865
Source: https://github.com/openai/codex/issues/57867
Source: https://github.com/openai/codex/issues/57860

**29. Codex — safety classifiers are now generating user-visible backlash.** **#57869** (Oct 29) is titled *"Codex is FUCKING useless because of these RETARDED 'cybersecurity' classifications"*, label `safety-check`; GitHub's duplicate bot pointed it at a related "Cybersecurity risks" issue. In the same days Claude Code produced a Cyber Safeguard false-positive (#105833) and Gemini CLI a YOLO-mode false-positive (#30004). **All three major CLI agents shipped a sandbox/safety-classifier complaint in the same 48-hour window** — the clearest issue-tracker signal that the safety-classifier layer is now the top source of agent CLI friction for legitimate professional users.
Source: https://github.com/openai/codex/issues/57869

**30. Codex — reliability, rate limits and multi-agent desktop direction.** Same-day: repeated **HTTP 400 Bad Request** across conversations in one project (#57874); work stuck after a lost connection during Google Drive upload (#57873); Windows Computer Use window capture timeouts (#57868); Codex Cloud save-draft failure when disabling package manager domains in an unpublished environment (#57858); sudden GitHub DNS failure after hours of successful Git ops on macOS (#57856); **daily usage stuck at 0 for hours** via a timezone/refresh defect in the macOS token activity view (#57854). A request for a **visual office workspace for real projects, chats and agent handoffs** (#57872) shows the direction is multi-agent desktop orchestration.
Source: https://github.com/openai/codex/issues/57874
Source: https://github.com/openai/codex/issues/57854
Source: https://github.com/openai/codex/issues/57872

**31. Gemini CLI — YOLO mode is still broken by the untrusted-flag tracker.** **#30004** (Oct 28, `area/security`): in `--yolo mode` (`--approval-mode=yolo`), Gemini CLI repeatedly interrupts autonomous execution with *"⚠️ CRITICAL SECURITY WARNING: Untrusted Command Flags Detected"*, asking to allow a shell command whose path came from external input (e.g. a Buganizer ticket) — here `~/.gemini/tmp/<session>/parse_pr.py`. Even after **PR #29672** (v0.65.0/v0.66.0) and **PR #29833** (main), `untrustedContextTracker.ts` and `scheduler.ts` still false-positive, because *"Check 2 (non-flag path arguments) still matches against ALL local run_shell_command output"*. Third independent confirmation of the classifier-friction pattern — a regression that survived two fix attempts.
Source: https://github.com/google-gemini/gemini-cli/issues/30004

**32. Gemini CLI — converging on the Claude Code extension contract.** **#29970** (Oct 27, `area/extensions`, `effort/large`) requests an **opt-in, in-process extension runtime that can see and paint the prompt input while the person types**. **Qwen Code** (forked from Gemini CLI) is building exactly this as a staged, versioned subset of **Claude Code's Mods contract** (`QwenLM/qwen-code#13749`, docs `docs/users/extension/mods.md`); adopting the same contract would let one extension run on all three CLIs. Requested surface: `prompt.edit` per keystroke, `$.prompt.read`, `$.prompt.fill` with cursor, `$.prompt.paint` (decorations only), `prompt.change` with origin, decorations by UTF-16 offset. Clearest evidence of an **emerging cross-CLI extension standard** forming around Claude Code's contracts.
Source: https://github.com/google-gemini/gemini-cli/issues/29970

**33. Gemini CLI — remaining same-day issues** (Oct 25–28): `${VAR:-default}` **ignores the default when VAR is set but empty** (#30000); `contextManagement` settings in `settings.json` silently ignored (#29985); **replace and write_file still write when cancelled during file preparation** (#29971) — destructive-action-during-cancellation bug; theme/color definitions mixed into behavioral `settings.json` (#29997); tool call id missing from `BeforeTool`/`AfterTool` hook input (#29975); theme home-dir check uses `startsWith`, so sibling dirs pass (#29955); **nightly release failure** 2026-10-26 (#29949, `p0`); background output reads ignoring cancellation + oversized single-line logs returning no output (#29945, #29944, `help wanted`).
Source: https://github.com/google-gemini/gemini-cli/issues/29971
Source: https://github.com/google-gemini/gemini-cli/issues/30000
Source: https://github.com/google-gemini/gemini-cli/issues/29949

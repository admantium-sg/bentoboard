# Community / Use-Cases Pass — 2026-11-13

**Window:** 2026-11-12T09:28:00Z → 2026-11-13T09:28:00Z (UTC)
**Pass scope:** r/openclaw (Reddit), community.openclaw.ai (Discourse), ClawHub skill registry, OpenClaw blog RSS, plus first-party corroboration for in-window claims.
**Budget used:** 2 web_search, 0 web_fetch (all collection via direct JSON/RSS curl; `web_fetch` returned `Web fetch failed (429): Too Many Requests` on every attempt in this pass).
**Channels dark:** Discord (no bot token) and X/Twitter (no collection route) — not observed, not inferred. Reddit engagement counters are absent from RSS; only comment *presence/count* is reported, never as adoption.

---

## Findings

### 1. FIRST-PARTY ENTERPRISE DEPLOYMENT — OpenAI says it runs **"over 500 agents"** persistently, including **hundreds of OpenClaw agents**, company-wide
**Source:** https://developers.openai.com/blog/securing-persistent-agents-like-openclaw-at-openai
**Author/date on page:** "Author: Kevin S Lin", "Nov 12, 2026", category Codex. HTTP `last-modified: Fri, 13 Nov 2026 08:45:49 GMT`; `etag: "87f31e21d847fb122d5a7c28bacf53a4"`.
**Linked from r/openclaw at 2026-11-13T03:06:13Z** (u/hannesrudolph): https://www.reddit.com/r/openclaw/comments/1xuwszf/securing_persistent-agents-like-openclaw_at_openai/

This is the strongest enterprise-deployment evidence in this window because it is **first-party**, not a community claim. OpenAI describes its own internal deployment in detail:

- **Scale:** *"At OpenAI, we currently have persistent agents deployed across the entire company, including hundreds of OpenClaw agents."* and *"We now have over 500 agents that run proactively in the background doing meaningful work - everything from automatically opening PRs in response to product feedback to continuously running data experiments on new features."*
- **Architecture:** *"we ended up implementing remote harness execution in the open source project. This enabled the OpenClaw Gateway to run in a separate container (and in our case, a separate cluster), from the agent harness."* Trusted (gateway, networking, identity, sandboxing) vs. untrusted (agent, its environment, the code it writes) split.
- **Sandbox controls:** `network` (org-managed allowlist with explicit denials), `workspace` (writes only to agent working dirs), `process` (codex linux sandbox isolation), `secrets` (credential broker — secrets not visible to the agent).
- **Concrete config published** in `requirements.toml` / `config.toml` form: `allowed_sandbox_modes = ["read-only", "workspace-write"]` (excludes `danger-full-access`), `allowed_web_search_modes = ["cached"]`, `experimental_network.managed_allowed_domains_only = true`, denied domains incl. `169.254.169.254` and `metadata.google.internal`, `allow_local_binding = false`, `enable_socks5 = false`, `dangerously_allow_all_unix_sockets = false`, `exclude = ["GH_TOKEN","GITHUB_TOKEN","OPENCLAW_GITHUB_BASIC_AUTH","OPENCLAW_GITHUB_READONLY_BASIC_AUTH"]`, apps disabled by default (`destructive_enabled = false`, `open_world_enabled = false`).
- **Model-based safeguard:** *"we enforce auto review on all agent actions"* — Auto Review (https://alignment.openai.com/auto-review/) as an LLM reviewer so human approval is reserved for high-value decisions.
- **Identity:** *"each agent has a unique identity that is associated with a ChatGPT Service Account"*; cites emerging specs WAG (`draft-carleton-workload-authz-grant`) and XAA (`draft-ietf-oauth-identity-assertion-authz-grant`).
- **Observability:** *"we log everything - every configuration change on the control plane and all turns from the agent"*, logs locked to a few security-team members.
- **Productization:** points to OpenClaw Enterprise (OCE) as an open source vendor-neutral agent control plane, with the same safeguards available via the standard codex preset; *"the project is currently still in the pilot phase and that we plan to get to a 1.0 release by the end of the year."*

**Corroboration inside the OpenClaw tree (first-party docs):** the remote-harness split described by OpenAI exists as shipped OCE documentation — https://raw.githubusercontent.com/openclaw/openclaw-enterprise/main/docs/guides/topics/remote-harness.md (last commit to that file 2026-11-11T22:24:17Z, "Add operator-owned scratch PVCs for dedicated OpenShell Agents (#5333)"; the split itself documented since 2026-10-20, "docs: explain remote Harness execution and split storage (#3047)"): *"In `dedicated` mode, an Agent's Gateway receives messages and controls access, while a separate Harness calls the model and runs native tools."* The standard codex preset doc (https://raw.githubusercontent.com/openclaw/openclaw-enterprise/main/docs/guides/topics/standard-codex-preset.md) confirms *"It creates drafts for a dedicated Codex Harness connected to its own separate OpenClaw gateway"* and explicitly warns *"This is a launch template, not a Pod-wide network isolation guarantee."*

**Caveat on dating:** the page renders "Nov 12, 2026" with no time and its `last-modified` is in-window (2026-11-13T08:45:49Z). The article is therefore treated as in-window, but its exact publication timestamp is **not** verifiable from the page. The "500+" / "hundreds of OpenClaw agents" numbers are **OpenAI's own unverified self-report**; no independent audit exists.

### 2. Discourse — OpenClaw Staff confirms the **Anthropic subscription path via Claude CLI is permitted**, and Anthropic's own legal page corroborates it
**Source:** https://community.openclaw.ai/t/398 (topic "Can I connect my Anthropic subscription?", created 2026-11-08, 2 posts, 31 views)
**In-window reply:** 2026-11-12T16:42:34Z by **joe** — verified as **Joe Pishgar, `admin: true`, title "OpenClaw Staff", group `openclaw_staff`** (https://community.openclaw.ai/u/joe.json):
> *"Yes, you can use your Anthropic subscription with OpenClaw through the Claude CLI integration. Anthropic has confirmed this usage is permitted and counts against your subscription limits. Install Claude Code, run `claude auth login`, then select Claude CLI during `openclaw onboard`. Official Anthropic policy"*

**Corroborated first-party (https://code.claude.com/docs/en/legal-and-compliance):** *"Nor does it prevent an end user from signing in to the unmodified Claude Code binary with their own Claude subscription, including where a platform hosts Claude Code…"* The same page states OAuth is *"intended exclusively for purchasers of Claude Free, Pro, Max, Ultra, Team, and Enterprise subscription plans… ordinary use of Claude Code and other native Anthropic applications"*, and that Anthropic *"does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users."* The permitted route is the **unmodified Claude Code binary with the end user's own subscription** — which is exactly what "select Claude CLI during `openclaw onboard`" does. **This resolves, with a first-party source, a question the community has been arguing about since at least 2026-11-08** (the previous window treated the subscription path only as "a real, used configuration", unverified as to policy).

### 3. Reddit — a **cost-driven model swap** becomes the dominant in-window practice: Opus 5.5 → DeepSeek v4.1 Flash for a local agent
**Source:** https://www.reddit.com/r/openclaw/comments/1xubh4h/swapped_my_local_openclaw_agent_from_opus_55_to/
**Posted:** 2026-11-12T12:26:50Z (u/moutsea) — 16 user comments read (OP excluded, AutoModerator excluded).
**Post body:** *"I switched the model behind my local OpenClaw setup from opus-5.5 to DeepSeek-v4.1-flash. After using it for a while, it feels almost exactly the same."* Note the OP later concedes the model is not local: *"The agent runs locally, the model doesn't."*

Deployment practice described (all **self-reported, unverified**):
- u/Polysorbate800: *"I use Deepseek for about 90% of what I do…"*
- u/Helpful_Jelly5486: *"The dsv4.1 is in that band of intelligence that can reason and gather information and act on tools and use plugins… still struggles with concepts like planning longer tasks and interpretation of intent."*
- u/Helpful_Jelly5486 (scaffolding pattern): *"I lean more on scripts, plugins, and even have integrated Claude code (the app) as a sub agent… having a script for image generation leverages the plugin and then the model only needs to do the prompt."*
- u/kiwidog8: *"flash is really susceptible to context bloat… if you did too many things or are trying to orchestrate multiple agents in one session flash will start to get very confused"* — prefers `dsv4pro` for long/complex design tasks.
- u/ldrx (self-reported A/B): *"i ran haiku and sonnet on the same 62 browser tasks, and sonnet didn't finish more. it just cost 10x."*
- u/RevolutionaryBus1034 (OP of a separate thread, https://www.reddit.com/r/openclaw/comments/1xv0nhd/are_you_happy_with_openweight_models/, 2026-11-13T06:33:25Z, 3 user comments): open-weight at work (GLM5.3 flash/non-flash, DeepSeek 4 Pro, DeepSeek 4.1 Flash) but *"The open-weight models just don't come close to GPT 6.1 Sol or Sonnet"* for k8s troubleshooting — *"Yesterday I had a Deepseek 4.1 flash provide me with a 200-line solution… With sol I got 25 lines of code and it was human-readable."* u/NighthawkT42: *"GLM is my fallback. It's set to warn me when it's in use."*

**Read:** the in-window community position is not "cheap models are equivalent" but "cheap models are sufficient **when the work is moved into scripts/plugins**, and break down on long multi-step plans and context-heavy orchestration". That is a concrete design rule, and it matches the OpenAI auto-review architecture (finding 1) in spirit: move determinism out of the model. **No ROI figure from these threads is treated as evidence — see caveats.**

### 4. Reddit — a **local-LLM batch image-classification pipeline**, plus the two reusable patterns the community proposes for it
**Source:** https://www.reddit.com/r/openclaw/comments/1xubb66/tips_for_long_repetitive_agentic_tasks_with_local/
**Posted:** 2026-11-12T12:18:27Z (u/Ok_Plenty6285) — 2 user comments read.

Setup (self-reported): Ryzen 7 7800X3D, RTX 5070 12GB, 24GB DDR5; models Qwen3.5 9B, Qwen3.6 35B-A3B, Gemma 4 12B QAT, sometimes Ternary Bonsai 2 27B, Q4–Q5. Task: classify a phone-backup photo dump into categories (animals, landscape, people, technology, screenshot) and file into subfolders. Failure mode: *"With fewer than 10 images, the model classifies all of them. But when it has to move them into the subfolders, it always gets stuck in a loop or throws an error… With more than 50 images, it just stops because the context window fills up."* Tried 64k–128k contexts, several models/quantizations.

Proposed patterns (community, not maintainer):
- u/SirGreenDragon: *"your model can generate work board cards, one for each image you want classified, then you can add something in heartbeat to check for the next available card unless one is already running… The key with local models is to break the work down into smaller chunks that can be automated. I found the work board in OpenClaw to be the most reliable."* (also uses 128k/192k on a Strix Halo box, halogen/ollama.)
- u/yournameherePDX: a **coordinator + specialist** split — *"using a coordinating agent to divide up and monitor the process works really well… I literally tell the coordinator to coordinate with my 'specialist' agent using `session _send`, divide up the work and be mindful of limited resources and OpenClaw timeouts… builds watchdogs to make sure things don't stall, and audits the result."*
- OP resolution (self-reported, not understood): *"I ended up asking chatgpt to make an orchestrator for my specific case and It worked really good."*

**Read:** this is the clearest in-window instance of the pattern that also shows up in the OpenAI post — the model is a poor batch driver, but a **queue/board + heartbeat + coordinator pattern** turns it into one. Note the OP swapped in an orchestrator written by another model, i.e. model-written scaffolding rather than prompt tuning.

### 5. Reddit — the largest in-window thread is about **autonomy framing**, not features; the community's answer is prompt-level, not product-level
**Source:** https://www.reddit.com/r/openclaw/comments/1xubtc0/starting_to_think_im_too_dumb_to_use_openclaw/
**Posted:** 2026-11-12T12:44:02Z (u/gentrobot) — 31 user comments read (largest in-window Reddit thread).

OP: *"I give my OpenClaw access to pretty much everything it needs… I explicitly tell it to work independently, make reasonable decisions, and keep going while I'm away. I come back three hours later. 'I have a question before I proceed.'"* Model in use: Gpt-6-astra.

Community responses, quoted:
- u/Soggy-Estimate-6238: *"Within this task, make routine, reversible decisions yourself. Check the available tools and documentation before asking me for information. If one part is blocked, continue with the independent parts. Finish by testing the result. Only stop for a decision outside the authority we've agreed, and explain exactly what you need."*
- u/Fit-Implemented: *"Agents ask questions mostly because they weren't told when guessing is allowed."*
- u/digitalfrost: *"Compared to the 5.6 models, Astra is a bit more hesitant… there is an overlay that is injected only when GPT 5 models are used… giving conflicting information or contradictory instructions can lead to this."*
- u/Matuno: *"OpenClaw is the harness, and it's the model that decides how long it wants to work."*
- u/Optimal_Emu3624: *"most if not all of those claims are just influencers attempting to sell a course to you, or to join their monthly “members only” club for the low price of $499 initial investment, then $50 per month after."*; u/cajirdon: *"It's one thing to have an alternative that could condense years of tedious work into just weeks or days… it's quite another to believe that some digital tool actually exists that can make money rain down in a matter of hours!"*
- u/UberStone (retired developer): *"I'm a retired professional software developer and company founder but I haven't written software in 20 years. I'm doing some of the best work of my life now and I'm doing it in days instead of weeks, months, or even years."* — **self-reported, unverified, no artifact.**
- u/nyrangers79 (counter-tone): *"Not to mention every update breaking something. It's gotten better but still a hot mess."*

**Read:** the concrete, reusable artifact here is the **prompt pattern** ("make routine reversible decisions yourself; only stop for irreversible/money/data-deletion"), plus an explicit community consensus that "agent printed money overnight" narratives are marketing, not evidence. That consensus is itself a finding: the community is actively policing ROI claims against each other.

### 6. Reddit — **update-stability praise** for 2026.11.1→11.3, consistent with the shipped 2026.11.3 release notes
**Source:** https://www.reddit.com/r/openclaw/comments/1xuxhkz/202611x_has_been_fantastic/
**Posted:** 2026-11-13T03:40:28Z (u/J-RodRS) — 7 user comments read.
- OP: *"Updates used to be a nightmare on the builds from a few months back. 2026.11.1 to 20206.11.3 have been flawless though. I even updated through the app and it just worked without destroying everything."*
- u/Quiet-Wafereater: *"I used to block out an evening for every upgrade in case something broke, and this time I updated through the app during lunch without a single issue."*
- u/Cadmium9094: *"the 11.1 update took me 10min. (Docker) However always do a backup first."*
- u/Sova_fun asks whether the new updater keeps backups of the previous version — **unanswered in-window**.

**First-party corroboration (GitHub release `v2026.11.3`, published 2026-11-10T18:53:07Z, i.e. just before the window):** release notes list *"**Update recovery:** Recover safely when the initial package-presence check times out, requiring a fresh valid directory identity before replacement and retaining rollback to the original package. (#181906)"*, *"**Updates:** Let profile-backed updates recognize their own maintenance lock and preserve cancellation when ledger writes are deferred. (#177792, #187998)"*, *"**Git recovery:** Preserve uncertain command failures during Git repair rather than treating an unconfirmed operation as successful. (#176006)"*, and *"**Private task results:** Keep private subagent completions out of streamed chat replies. (#188490)"*.

**Read:** the sentiment shift matches shipped work rather than preceding it. Still **anecdotal, no upgrade-failure-rate metric exists**.

### 7. Reddit — **update-hygiene and updater-failure lore** (self-reported workarounds, unverified)
**Source:** https://www.reddit.com/r/openclaw/comments/1xubet4/suggestion_before_updating/ (2 user comments) and https://www.reddit.com/r/openclaw/comments/1xuuqkd/update_question_a_real_one/ (5 user comments)
- OP u/paulsande: *"the majority of the time when an update fails, it's because node has published an update… If I update node before running update, it usually completes without incident."*
- u/skelecorn666: after 2026.10.3 *"you end up updating… shutdown all processes, use `npm install -g openclaw@latest --allow-scripts=openclaw`, restart system."*
- u/paulsande on big jumps: *"Personally, I'd copy everything to another computer. Do a test run."* u/haderach_ram: *"The v2026.11.3 patch that just shipped specifically targets update recovery and backup timeouts… Worth testing that release before deciding to stay on the older build."* u/xX_GrizzlyBear_Xx: *"For big jumps like that I always suggest using a coding agent to do it, especially if you have custom integrations and ongoing work. Needless to say a full backup is a must."* u/Bizzle1236: *"Just get codex to do it."* u/MistaPlanet: *"Don't. You'd wish you didn't"*. (In the same thread, OP u/BrodyFriend describes running a "6.34 extended version" and being "scared to update to 2.0" since 9.7.)

**Read:** a concrete in-window community practice — **use a coding agent to perform the OpenClaw version upgrade** — and a persistent recommendation of backup-then-test. No official upgrade guide is cited.

### 8. Discourse — OpenClaw Staff gives a **supported answer on cloud offload**: OpenClaw Cloud Workers (not Codex Cloud) is the sanctioned path
**Source:** https://community.openclaw.ai/t/427 (created 2026-11-12T05:08:11Z; staff reply in-window 2026-11-12T16:41:45Z; 2 posts, 5 views)

joe's answer distinguishes four routes: *"Native Codex / ACP: OpenClaw can orchestrate Codex and Claude Code sessions, but ACP doesn't automatically send work to their respective hosted cloud services. OpenClaw Cloud Workers: Supports remote execution, including native Codex. OpenClaw retains control while code and tests run on a cloud worker. This is separate from Codex Cloud. Claude Code Cloud: `claude --cloud 'your task'` launches a hosted session. Getting completion status, test results, and diffs back into OpenClaw requires additional integration. OpenAI Agents API: Offers managed Codex sessions with hosted sandboxes, but requires API integration rather than the native Codex plugin."*

Recommended PoC shape: *"starting with OpenClaw's Cloud Workers and Codex remote execution. Have the Coder produce a commit, test results, and diff. Then let a separate Reviewer inspect those artifacts before permitting PR creation."* Plus a version caveat: *"you're running 2026.10.5, so check the version requirements for the current cloud-worker features before testing."*

**First-party doc confirmation:** https://docs.openclaw.ai/gateway/cloud-workers.md (`status: active`) — *"Cloud workers run a session's coding work on a disposable machine while its transcript and accepted workspace changes stay with the Gateway."* Companion pages exist for security model, warm images, per-project default profiles, and a desktop-capable cloud worker. **This closes the open question flagged in the previous window's report ("No cloud/offloaded execution path").**

### 9. Discourse — **Windows signing** is the blocker, and the fix is the signed Windows Hub installer (documented)
**Source:** https://community.openclaw.ai/t/435 (created 2026-11-12T15:32:07Z, in-window; staff reply 2026-11-12T16:39:53Z; 2 posts, 3 views)

u/C3dric: *"Run OpenClaw on Windows 11… It is impossible to reconnect to the Gateway because the executable is not signed and SmartApp Controls is blocking it."*
joe: *"Install the latest Windows Hub, which provides a signed installer. Use the Hub's Set up locally option to run the Gateway through WSL2… I wouldn't recommend disabling Smart App Control."*

**First-party doc confirmation:** https://docs.openclaw.ai/platforms/windows.md — *"The native Windows Hub is the recommended Windows desktop app… It installs without administrator privileges and ships signed x64"* binaries (`OpenClawCompanion-Setup-x64.exe` from the `openclaw/openclaw-windows-node` releases). A related in-window topic (#440, https://community.openclaw.ai/t/440, 2026-11-12T20:11:46Z, 1 post / 6 views) reports `SERVICE_DEFINITION_UNKNOWN` blocking a custom Scheduled Task that starts OpenClaw directly via `node.exe` on OpenClaw 2026.10.9 — **no staff reply yet**. A separate Reddit report of WinUI rendering corruption after reinstall (https://www.reddit.com/r/openclaw/comments/1xuu43s/, 2026-11-13T00:56:43Z, 0 user comments (AutoModerator only)) also drew **no reply**.

### 10. Discourse — **SQLite worker capacity** recurs on 11.3 with a gateway-restart workaround; the documented fix landed in 2026.11.2
**Source:** https://community.openclaw.ai/t/443 (created 2026-11-13T02:28:39Z, in-window; 1 post, 2 views)
u/bcnbudatx: *"Hitting this error after upgrading to 11.3. My session cannot continue afterward… restarting the gateway temporarily resolves the issue but it comes back."* (OpenClaw 2026.11.2 (b556fdf) / Mac mini M4 Pro, model gpt5.6-terra, "I asked OpenClaw… and it had me restart the gateway by kicking the launchd agent. That seems to work-around the problem.")

**First-party context (topic #385, https://community.openclaw.ai/t/385, staff reply in-window 2026-11-12T14:21:04Z):** joe — *"Confirmed: PR #178126 shipped in stable 2026.11.2. I'd target 2026.11.3, though the fix doesn't cover every possible snapshot failure."* Same reply documents state relocation via `OPENCLAW_STATE_DIR`, `XDG_CACHE_HOME`, `TMPDIR`, and the Codex-home caveat that *"Personal ~/.codex sessions need separate preservation"* — followed by a substantive user follow-up (u/Joseph_Kapp, 2026-11-12T14:43:58Z) asking whether 11.3 can rebase managed-home bindings and stored rollout paths while preserving native thread UUIDs. **Unanswered in-window.**

### 11. Discourse — Codex-native **parent/child continuation** still has no documented recovery path (staff: "I haven't found a documented, safe recovery procedure")
**Source:** https://community.openclaw.ai/t/424 (staff reply in-window 2026-11-12T16:38:34Z)
u/Argo (2026-11-11): after continuation of a parent conversation the native tree lists only the current root; following an original child by alias gives *"native target not currently identified"*, using the exact thread ID gives *"INVALID_REQUEST: Codex native input target is outside the sender's admitted tree"* — both masked as *"Native hook relay unavailable"*.
joe: *"The supported approach is to continue through the original parent session and Codex thread… via `/codex binding` and `/codex threads`. However, `/codex resume` cannot reattach native child threads or reconstruct lost parent-child permissions. If the original parent still sees only itself, I haven't found a documented, safe recovery procedure. I'd avoid resetting the session or modifying admission rules."*

**Read:** carried over from the previous window's "diagnostics are lossy" finding and still unresolved, but now with an explicit staff statement that there is **no safe documented recovery path** — a stronger, quotable position than before.

### 12. Discourse — **two more staff-blessed workarounds in-window**: LM Studio on Windows needs the WSL2-visible IP, and macOS approval-binding needs the Docker sandbox
**Source (LM Studio):** https://community.openclaw.ai/t/426 (created 2026-11-12T04:15:46Z; staff reply in-window 2026-11-12T16:37:29Z; 2 posts, 6 views)

u/Aleksandr_Liashenko is integrating OpenClaw with **LM Studio** as a local model server on a Windows PC (LM Studio HTTP server on port 1234, `GET /api/v1/models`, `POST /api/v1/chat`, `POST /api/v1/models/load`, `POST /api/v1/models/do…`), but OpenClaw cannot reach it.
joe: *"LM Studio appears to be running, but OpenClaw can't connect to it. Your screenshots show 172.29.128.1:1234, while the LM Studio logs also reference 10.5.0.2:1234. Are you running OpenClaw inside WSL2 or directly in Windows? If you're using WSL2, open its terminal and run: `curl -v http://172.29.128.1:1234/api/v1/models`… If it succeeds, retry OpenClaw setup using http://172.29.128.1:1234/v1 as the LM Studio server URL."* Staff links the official setup guide (LM Studio ↔ OpenClaw).

**Source (approval binding):** https://community.openclaw.ai/t/428 (created 2026-11-12T06:50:40Z; staff reply in-window 2026-11-12T16:38:02Z; 2 posts, 5 views)

u/Mori_Kentaro: running seven local Python tests through OpenClaw's approval flow on macOS (OpenClaw 2026.11.3) fails *before* the approval prompt appears — *"SYSTEM_RUN_DENIED: approval cannot safely bind this interpreter/runtime command"* for `sandbox-exec [profile denying network and file writes] /usr/local/bin/python3 -B -m unittest -v [test modules]`.
joe: *"This looks like an approval-binding limitation rather than a problem with your tests. OpenClaw's approval system needs to identify a concrete script file it can safely bind. Python's `-m unittest` loads modules dynamically, which complicates that process. For now, I'd recommend running the suite through OpenClaw's built-in Docker sandbox, configured with `network: "none"`, `workspaceAccess: "ro"`, and `readOnlyRoot: true`… One distinction: sandboxed execution isn't equivalent to receiving a native macOS approval prompt. If you specifically need both, the current approval mechanism may need upstream support. I wouldn't recommend a blanket Python allowlist or disabling approval checks."*

**Read:** two concrete, actionable support answers in-window, both of which point at the **same architectural pattern** as the OpenAI post (finding 1) and the update-recovery work (finding 6): when the fine-grained control path can't express the request, move the work into a container sandbox rather than weaken the policy.

### 13. Discourse — a **12-day-old scheduled-Discord-read authorization bug** is still open, now with a filed GitHub issue (#162087) and an unanswered recovery question
**Source:** https://community.openclaw.ai/t/356 (created 2026-11-04T00:18:08Z; **in-window follow-up 2026-11-13T04:36:42Z** by u/Frien; 10 posts, 62 views)

The original report: on OpenClaw 2026.10.7 a scheduled job fails to read Discord with a *"matching recorded creator origin"* authorization error while interactive reads work; the job was deliberately left disabled pending a safe fix. Staff diagnosed it as *"callerOrigin.kind remains unknown despite the accepted toolsAllow update originating from the same Discord DM… OpenClaw requires a known creator origin for scheduled, account-bound Discord reads"*, and filed GitHub issue **#162087** (*"[Bug]: 9.7 — scheduled announce fails 'Scheduled account X is unavailable' for pre-9.7 account-mode jobs owned by DM sessions (missing ownerOrigin + direct-key parse gap)"*).

**In-window (2026-11-13T04:36:42Z), u/Frien asks whether PR #186833 plus explicit same-cap reauthorization from the authenticated original Discord DM can recover the existing unknown-origin job, and asks for any update on a supported recovery procedure — *"The job remains disabled, and we haven't changed its authorization or run it."*** **No staff reply in-window.**

**Read:** this is a genuinely durable, well-instrumented bug report (10 posts over 9 days, staff-filed issue, no workaround by design), and it is the clearest example in-window of a community member holding out for a *safe* fix rather than a bypass. It also shows the Discord channel functioning as an intake path — note that **this report itself was relayed from Discord support**, a channel this pass cannot observe directly.

### 14. Model provider news — **Gemini 4 Hydrogen** is in OpenClaw and is **confirmed in OpenClaw's own provider docs**
**Source (community):** https://www.reddit.com/r/openclaw/comments/1xuyh66/gemini_4_hydrogen_is_out_and_you_can_already_use/ — u/hannesrudolph, 2026-11-13T04:32:26Z, links an X/Twitter status (X = dark channel, not verified by this pass); 2 user comments (u/MaybeLikeWater, u/Sova_fun); u/Sova_fun asks about local-model support for the same release (**unanswered**).
**Source (first-party docs):** https://docs.openclaw.ai/providers/google.md — *"## Gemini 4 Hydrogen — `google/gemini-4-hydrogen` has a 1,048,576-token context window shared by input and output, and up to 65,536 output tokens by default. Google accepts text, image, video, audio, and PDF input. Thinking levels are low, medium, and high; xhigh currently sends high. Like Argon, it supports implicit context caching only. The catalog prices it at Google's paid-tier rates per million tokens: $1.50 input, $7.50 output (thinking tokens included), and $0.075 cached input."* Default Google model remains `google/gemini-4-argon`.
**Third-party release-date agreement:** multiple secondary sources date the launch **November 12, 2026** (opper.ai, felloai.com, cellcog.ai, omniakey.com — all SEO/aggregator tier, unattributed to a Google primary source; the Google AI model-ID and pricing pages were not fetched in this pass). Note the date falls on the **first day** of this window and the OpenClaw docs give no release date, so the exact in-window timing is **not established**.

### 15. ClawHub — **104 new skills** in-window across **46 publishers**; publisher concentration **rose** (top-3 = 34.6%) and one publisher shipped **21 of them**
**Source:** https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc (enumerated two independent ways; see caveats)
**In-window:** 104 unique skills, 46 distinct publishers (previous window: 109 skills, 70 publishers, top-4 share 22.9%).

Top publishers in-window:
- `wiroai` — **21 skills (20.2%)**, a single commercial AI-media/agent-platform suite (`wiro-ai`, `wiro-image`, `wiro-video`, `wiro-speech`, `wiro-music`, `wiro-3d`, `wiro-transcribe`, `wiro-edit-image`, `wiro-media-assets`, `wiro-models`, `wiro-llm`, `wiro-nextjs`, `wiro-swift`, `wiro-kotlin`, `wiro-flutter`, `wiro-react-native`, `wiro-realtime-voice`, `wiro-workflows`, `wiro-agents`, `wiro-n8n`, `wiro-github-action`) — **one launch, not 21 independent use cases.**
- `bassemzohdy` — 8 (`todo-core`, `todo-update`, `todo-status`, `todo-report`, `todo-plan`, `todo-init`, `todo-continue`, `todo-add`) — a **task-tree / TODO.md suite**; note `todo-core` describes *"Core rules shared by the eight todo-* command skills: the TODO.md task tree"*, i.e. a shared skill plus 7 commands.
- `conn-ho` — 7 (`okdata-*`, pay-per-call public-data API for Douyin/Xiaohongshu/WeChat/TikTok/X: transcripts, trends, creators, comments, competitors, content research, setup) — **all 7 have 0 downloads and 0 installs**.
- `zengfr` — 6 (`ultravibe`, `ultravibe-refactor`, `ultravibe-bugfix`, `ultravibe-review`, `ultravibe-feature`) — a gated dev-workflow suite, e.g. *"Orchestrates a gated bug-fix workflow: reproduce and diagnose, patch within an approved file scope, validate…"* and *"Read-only code review covering architecture, defects, security, dependencies, and licenses."*

**Read:** the "new skills" count is inflated exactly as it was last window, but by a **larger** single-vendor share (20.2% vs 11 of 109 = 10.1%). Publisher diversity moved the **wrong** way (70 → 46 publishers). Category mix of the 104 by summary keywords: ~32 API/SDK integrations, ~23 media generation, ~14 workflow/task orchestration, ~8 dev-workflow, ~27 other; 79 English / 25 Chinese summaries.

### 16. ClawHub — notable individual in-window skills (canonical URLs, HTTP 200 verified)
**Source:** https://clawhub.ai/api/v1/skills?limit=100&sort=createdAt&order=desc — each canonical URL below was re-fetched with HTTP 200
- `nvidia/newton-usage` and `nvidia/newton-performance` — *"Set up, build, or debug physics simulations with the Newton Python package"* / *"Measure or improve the runtime, startup time, memory use, or throughput of a Newton simulation"* — **both show `versions: 0`** despite 17 downloads each (a publish-state anomaly worth flagging; NVIDIA is the 3rd-largest ClawHub publisher overall with 167 skills). https://clawhub.ai/nvidia/skills/newton-usage
- `sdk-team/alibabacloud-sysagent` — *"SysAgent is a system operations expert for Linux instances on Alibaba Cloud. Covers system diagnostics (CPU, memory, disk I/O, network issues and OOM)"* — the first **Alibaba Cloud sysops** skill observed. https://clawhub.ai/sdk-team/skills/alibabacloud-sysagent
- `bloom-directory/bloom` — *"Bloom financial harness: balances, payments, trades, wallet. The programmable financial harness for AI agents."* — 2 versions, 61 downloads, **1 install**; the only in-window skill with an install besides `yumingtao/clarify-before-acting` and `devinchen2014/product-demand-evidence`. https://clawhub.ai/bloom-directory/skills/bloom
- `0xdewy/promptscan` — *"Scan untrusted agent instructions, code, or tool output for prompt injection using promptscan."* — security tooling, 67 downloads. https://clawhub.ai/0xdewy/skills/promptscan
- `bartelmost/agentshield-verify` — *"Verify before you act: pay-per-call checks for bank transfers, invoices, business-day deadlines, public holidays and stablecoin transfers via agentshield…"* — the deterministic-gate pattern from last window's QuickBooks thread, now productized as a pay-per-call skill. https://clawhub.ai/bartelmost/skills/agentshield-verify
- `chrischall/hellofresh-fpx` — *"Read HelloFresh (US) meal-kit data from a shell — the subscription (box size, delivery slot, frequency), upcoming delivery weeks with cutoffs and skip"* — 4 versions, 96 downloads; a subscription-management skill (plus `chrischall/hellofresh`, 4 versions). https://clawhub.ai/chrischall/skills/hellofresh-fpx
- `yumingtao/clarify-before-acting` — *"在处理复杂、模糊或高成本请求前，先解决方向性歧义：自己做功课、检查记忆中已回答的问题、逐个处理问题队列、绝不猜测方向"* — the "clarify before acting" behaviour, packaged, 113 downloads and 1 install. https://clawhub.ai/yumingtao/clarify-before-acting
- `zengfr/full-stack-dev-expert` — *"全栈编程开发专家团队。以'一个总指挥 + 14 个子角色'的开发团队模式组织"* — a 15-role orchestration prompt-as-product; 129 downloads, the highest in-window. https://clawhub.ai/zengfr/full-stack-dev-expert
- `mantasreklamuoja/ai-bot-access-check` — *"Check whether AI crawlers and search bots (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot…)"* access your site. https://clawhub.ai/mantasreklamuoja/skills/ai-bot-access-check
- `ssesweb/powershell-safe-invocation` — safe Windows path/quoting/escaping for native command invocation. https://clawhub.ai/ssesweb/skills/powershell-safe-invocation

### 17. No new first-party ROI, revenue, or hours-saved attribution exists in-window
**Source:** https://www.reddit.com/r/openclaw/comments/1xubh4h/swapped_my_local_openclaw_agent_from_opus_55_to/ · https://www.reddit.com/r/openclaw/comments/1xubtc0/starting_to_think_im_too_dumb_to_use_openclaw/ · https://developers.openai.com/blog/securing-persistent-agents-like-openclaw-at-openai · https://docs.openclaw.ai/providers/google.md
Same standing conclusion as the previous window. The only in-window quantities are: OpenAI's own "over 500 agents" / "hundreds of OpenClaw agents" (first-party, but a **deployment count, not ROI**); Google's published per-token prices for Gemini 4 Hydrogen (vendor price list); and Reddit self-reports (u/Polysorbate800 "4 billion tokens for $50"; u/digitalfrost "4 bio tokens this month on the work account"; u/ldrx "sonnet… just cost 10x"; u/UberStone "days instead of weeks"). All Reddit figures are **self-reported, unattributed, and excluded from headline findings**. Community members themselves pushed back on the louder variants ("most if not all of those claims are just influencers attempting to sell a course").

### 18. Reddit — a **misleading nvm warning** misread as a heartbeat failure (small, but characteristic of the diagnostics complaint)
**Source:** https://www.reddit.com/r/openclaw/comments/1xullol/heartbeat_fails_because_using_nvm_node_on_macos/ (2026-11-12T19:07:20Z, 1 user comment)

u/Fabulous-Joke4473 reports `error [tools] heartbeat_respond failed: heartbeat_respond is only accepted during a heartbeat run` alongside an nvm/node warning, and concludes that nvm is breaking heartbeats. The single reply (u/xXG0DLessXx) corrects this: *"I don't think the nvm has anything to do with the failure. I also use nvm. It's just warning you because openclaw PREFERS you to use a system node. The warning always shows though and has nothing to do with heartbeats failing."* **No OpenClaw reply.**

**Read:** a small instance of the recurring pattern in finding 11 — the error surface mixes an unrelated advisory (node-install preference) with the real failure (`heartbeat_respond` called outside a heartbeat run), and community members, not staff, are the ones doing the triage.

### 19. Channel saturation checks (negative findings, stated explicitly)
**Source:** https://openclaw.ai/rss.xml · https://api.github.com/repos/openclaw/openclaw/releases?per_page=5 · https://community.openclaw.ai/latest.json · https://www.reddit.com/r/openclaw/new/.rss?limit=50 · https://www.reddit.com/r/openclaw/hot/.rss?limit=50
- **OpenClaw blog: no in-window post.** Newest RSS item is "Use new models in OpenClaw without an update", **Fri, 06 Nov 2026 00:00:00 GMT**; next is 2026-11-05, then 2026-10-21. No in-window blog content at https://openclaw.ai/rss.xml.
- **Discourse Build & Showcase: no new in-window topic.** Newest is "OpenClaw Templates Showcase" (created 2026-11-09, last activity 2026-11-11) — out of window. The in-window Focus-Week thread (https://community.openclaw.ai/t/407) received one in-window comment (u/TagoMago, 2026-11-12T17:48:46Z) asking whether "agents templated" means AGENTS.md templates or harness engineering — **unanswered in-window**.
- **No new Discourse release/template/provider announcements.** 3 new topics in-window (435, 440, 443), all support questions.
- **OpenClaw releases:** latest published release is `v2026.11.5-beta.2` (2026-11-12T00:43:25Z — *before* the window opened at 09:28Z); `v2026.11.3` published 2026-11-10T18:53:07Z (pre-window). **No OpenClaw release was published inside the window.** `openclaw-enterprise` has **no GitHub releases at all**.
- **Reddit:** 11 new r/openclaw posts in-window (both `/new/` and `/hot/` agree on the same 11; `/hot/` was successfully fetched this pass after 429s last window). `/top/` and `/rising/` returned 429.

---

## Community Pulse

**Working well**
- **First-party enterprise validation landed.** OpenAI documents running "over 500 agents" including "hundreds of OpenClaw agents", with the gateway/harness split, a credential broker, auto-review on every action, per-agent ChatGPT Service Account identity, and full logging. The security posture in that post is *stronger* than most community setups and now ships as OCE documentation.
- **The Anthropic subscription question is answered with a primary source.** Staff + https://code.claude.com/docs/en/legal-and-compliance agree: the unmodified Claude Code binary with your own subscription is permitted; using Claude Code as a *product* with your users' logins is not.
- **Cloud offload is now a supported path** (OpenClaw Cloud Workers + Codex remote execution), with a staff-recommended Coder → Reviewer → PR shape.
- **Update experience is improving in both directions** — release notes for 2026.11.3 explicitly add update recovery/rollback, and the community reports "flawless" 11.1→11.3 upgrades, including through the desktop app.
- **Cost-downgrade is a working practice, not a slogan**: cheap models + scripts/plugins + Claude Code as a sub-agent; Opus/Claude reserved for the hard 10%.
- **Batch work has a community-tested shape**: work-board cards + heartbeat pull, or a coordinator agent fanning out to specialists via `session _send`.
- **Staff answer support questions with a *policy*, not a hunch**: Cloud Workers over Codex Cloud (#427), the Docker sandbox with `network: "none"` / `workspaceAccess: "ro"` over a blanket Python allowlist (#428), the signed Hub installer over disabling Smart App Control (#435), and the Claude CLI subscription over an Anthropic OAuth app integration (#398).

**Problems**
- **Windows friction is now the loudest support theme**: unsigned executables blocked by Smart App Control (#435), `SERVICE_DEFINITION_UNKNOWN` for direct-node Scheduled Tasks (#440), LM Studio unreachable from OpenClaw because of WSL2 vs. host networking (#426), and WinUI rendering corruption after reinstall (Reddit). Only #435 and #426 got answers.
- **Two live bugs have no workaround by design**: the scheduled-Discord-read `ownerOrigin` failure (#356, issue #162087 — the job is deliberately left disabled) and the Codex native parent/child continuation loss (#424).
- **Self-inflicted scope creep in agent prompts** remains the top user complaint — the "I have a question before I proceed" thread had 31 user comments and its most repeated fix is a prompt rule, not a product feature.
- **Some infrastructure has no documented recovery path** — Codex native parent/child continuation: staff says *"I haven't found a documented, safe recovery procedure."*
- **SQLite worker capacity** still bites on 11.3 (restart-the-gateway workaround only); the 11.2 fix *"doesn't cover every possible snapshot failure."*
- **ClawHub "new skills" is a launch-count, not a use-case count** — 20.2% of the in-window total is one vendor's suite, 7 more skills are a single TODO.md tree suite, 7 more are one API's suite, and publisher count fell 70 → 46.
- **Trust in ROI stories is collapsing inside the community itself** — commenters now pre-emptively flag "agent made me money overnight" posts as course-selling.

**Interesting**
- **Deterministic gates are becoming purchasable**: `agentshield-verify` (bank transfers, invoices, deadlines, stablecoin transfers) and `promptscan` (prompt-injection scanning) are the previous window's trust patterns turned into skills.
- **The `bloom` "programmable financial harness"** (balances, payments, trades, wallet) is the first in-window attempt at a financial *runtime* rather than a financial *checker*.
- **A model-written orchestrator beats a hand-written prompt** — the OP of the local-LLM image-classification thread solved his looping problem by having another model write the orchestrator.
- **`nvidia/newton-*` publishing with `versions: 0`** alongside 17 downloads is a registry-state anomaly nobody in-window is discussing.
- **The OpenAI post quietly names the specs to watch**: WAG (workload authz grant) and XAA (OAuth identity assertion authz grant) for agent identity.
- **One user's production gateway profile, pasted into a bug report**, is the richest deployment datapoint in-window: 19 agents, 7,664 stored sessions, 30 heartbeat jobs, 19 stores, a `deepseek-v4.1-flash` default at 1M context alongside `gpt-5.6-terra`/`gpt-5.6-luna` on the Codex runtime, 92–99% cache hit rates, plus a self-audit reporting 1 critical finding (small models with sandbox/web off) and 5 warnings (#443).
- **The Focus-Week question nobody answered**: "Are we having workspace files week or harness week?" — whether "agent templates" means AGENTS.md files or harness engineering (#407).

---

### Caveats & data gaps

1. **ClawHub enumeration is a two-method reconstruction, not an audited count.** The `sort=createdAt&order=desc` index returns a *different* slice than the unsorted index and ignores `offset`; `limit` is silently capped (~97–98 for `limit=100`, ~196–198 for `limit=200`). The in-window count of **104** was produced two independent ways — (a) the `by_active_created` sorted index (196 items reaching back to 2026-11-11T11:15Z, 104 in window) and (b) an 81-page `nextCursor` walk of the unsorted index (7,709 unique records, 104 in window) — and the two agree. **The catalogue itself is not complete**: the walk stopped at the page-cap condition (`pages 81 total 7709`) and the records are not globally sorted by `createdAt`, so the 7,709 figure is a lower bound on the registry, not a registry total. The API exposes no total-count field.
2. **The ClawHub catalog was enumerated much more deeply this run (7,709 records, 1,146 publishers) than in the previous window's report (2,965 skills)**, so catalog-level publisher shares are **not comparable** across windows. Only the in-window slices (109 → 104; 70 → 46 publishers; top-4 22.9% → top-3 34.6%) are comparable, and those were reproduced with a script that re-derives the previous window's numbers (109 / 70 / 22.9%) exactly.
3. **ClawHub download/install/star counters are ignored as adoption measures** for all 104 in-window skills (downloads 0–129, installs 0–1, stars 0, comments 0 across the set; one install each for `bloom`, `yumingtao/clarify-before-acting`, `devinchen2014/product-demand-evidence`). One-day-old skills cannot plausibly have 74–129 real downloads.
4. **Reddit engagement counters are absent from RSS**; only comment presence/count is reported (11 posts; 31 / 16 / 7 / 5 / 3 / 2 / 2 / 2 / 1 / 0 user comments, AutoModerator excluded). No Reddit number here is adoption. Comment bodies were read via the feed's escaped HTML `content` field and unescaped for reading.
5. **Reddit `/hot/` was fetched successfully this pass** (after repeated 429s in the previous window) and agrees with `/new/` on the same 11 in-window posts; `/top/` and `/rising/` returned 429. Post counts are **medium-high** confidence complete — a post published between 09:28Z and the window close would surface only on a later poll.
6. **Discord and X/Twitter are DARK** — no bot token, no collection route. The Gemini 4 Hydrogen Reddit post points at an X/Twitter status that this pass could **not** verify; the launch date rests on secondary aggregators only.
7. **The OpenAI article's publication timestamp is not verifiable.** The page renders "Nov 12, 2026" with no time; `last-modified: Fri, 13 Nov 2026 08:45:49 GMT` is in-window but may reflect an edit. It is reported as in-window on the strength of the in-window Reddit link plus the in-window `last-modified`, but it could have first appeared before 2026-11-12T09:28Z.
8. **"Over 500 agents" / "hundreds of OpenClaw agents" are OpenAI's own self-reported numbers** with no independent audit, no per-agent workload, and no productivity metric attached. They are a deployment count, not ROI.
9. **All Reddit deployment, cost, productivity and revenue statements are self-reported and unattributed** and are excluded from headline findings — including "4 billion tokens for $50", "sonnet… cost 10x", "days instead of weeks", "made almost DOUBLE my salary", and the DGX-Spark-to-law-firms rental claim. The last two appear only in the Reddit thread itself and are **not** promoted to findings.
10. **Discourse coverage**: `latest.json` pages 1–4 (120 unique topics) plus per-topic JSON for all 120 (70 of those fetches returned errors and were handled from the aggregated topic-list metadata instead, so per-post detail for those is unavailable). 3 topics were **created** in-window (435, 440, 443) and **11** had in-window activity by `last_posted_at` (385, 398, 407, 424, 426, 427, 428, 435, 440, 443, 356). No new Build & Showcase topic exists in-window. `bumped_at` is empty in the topic JSON payloads, so in-window activity was determined from `last_posted_at` in the topic-list metadata.
11. **`web_fetch` was unusable this pass** (`Web fetch failed (429): Too Many Requests` on every attempt); all collection used direct curl. `web_search` was used twice and both result sets were SEO/aggregator-tier; neither produced a promoted finding on its own, but the Gemini release-date agreement is cited as secondary evidence and flagged as such.
12. **Unverified / unresolved at window close**: whether the Windows Hub signed installer actually resolves #440's `SERVICE_DEFINITION_UNKNOWN` (no reply yet); whether #443's SQLite capacity error is fixed beyond the 11.2/11.3 partial fixes; whether 11.3 can rebase Codex managed-home bindings while preserving thread UUIDs (#385 follow-up unanswered); whether OpenClaw's updater keeps backups of the previous version (Reddit, unanswered); the current status of Gemini 4 Hydrogen local-model support (Reddit, unanswered); and the Discourse Focus-Week "agents templated" scope question (unanswered).

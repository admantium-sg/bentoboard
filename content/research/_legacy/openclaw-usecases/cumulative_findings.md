# OpenClaw Use Cases - Cumulative Findings

## 2026-05-13

### OpenClaw v2026.5.12-beta.4 (May 12, Evening)
- Released May 12 23:38 UTC: Codex runtime fixes for private task-runtime SDK helper (MODULES_NOT_FOUND during migrated OpenAI/Codex beta runs)
- WhatsApp/Baileys libsignal subdependency pinned for pnpm 11 compatibility
- Per-sender tool policies with canonical channel-scoped sender keys — operators can restrict dangerous tools by requester identity
- Fly Machines container detection via runtime env vars (gateway bind and Bonjour defaults match remote container launches)
- Control UI recovery panel for blank dashboard pages with browser-extension troubleshooting link
- Subagent sessions nested under parent with └─ prefix in session picker dropdown

**Source:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.4

### OpenClaw v2026.5.12-beta.1 (May 12, Morning)
- Earlier same-day beta (05:17 UTC) with Codex/auth fixes, memory-wiki scope hardening (admin for ingest, write for Obsidian search), auto-reply error surfacing for model backend failures, provider stream draining fixes
- Cron.get inspection support for inspecting one stored cron job by ID
- Google Gemini model ID normalization (retired Gemini 3 Pro Preview → 3.1)

**Source:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.4

### Google Threat Intelligence: OpenClaw Used in "Mass Exploitation Event" (May 11, 2026)
- Google's Threat Intelligence Group report: hackers using OpenClaw and similar AI frameworks to uncover and exploit zero-day vulnerabilities
- First explicit attribution of OpenClaw in major state-sponsored threat reporting — marks significant reputational inflection
- OpenClaw officially categorized alongside commercial attack frameworks in APT context

**Source:** https://www.cnbc.com/2026/05/11/google-thwarts-effort-hacker-group-use-ai-mass-exploitation-event.html

### Active Exploitation: 30,000+ Compromised Instances, 312,000+ Exposed (May 2026)
- Multiple hacking groups running campaigns: ClawHavoc (Jan 29) + follow-on waves through ClawHub supply chain poisoning
- Over 30,000 compromised OpenClaw instances used to steal API keys, intercept messages, distribute info-stealing malware via Telegram
- Shodan scan (Feb 18): 312,000+ OpenClaw instances running on default port 18789, many with no authentication
- Attackers exploiting: CVE-2026-25253 (RCE via WebSocket, CVSS 8.8), CVE-2026-26322 (SSRF, CVSS 7.6), CVE-2026-26319 (missing auth, CVSS 7.5)
- Flare advisory: secure API credentials, isolate AI workloads, bind services to localhost, block port 18789 publicly

**Source:** https://cybersecuritynews.com/hacking-groups-exploit-openclaw/
**Source:** https://vpncentral.com/hacking-groups-target-openclaw-ai-framework-in-mass-attacks/

### Security Trajectory Shift
- Platform has moved from "vulnerable AI assistant" to "active weapon in threat actor toolkit"
- VPNCentral: "fell to attacks within 72 hours" of January 2026 viral fame
- Google TI attribution confirms OpenClaw as formal APT target, not just opportunistic exploitation
- Reputation shift from "interesting open-source project" to "enterprise security liability" — implications for enterprise adoption and procurement discussions

**Source:** https://cybersecuritynews.com/hacking-groups-exploit-openclaw/

Last updated: 2026-05-13

## 2026-05-12

### OpenClaw v2026.5.10-beta.5 (May 11, Evening)
- Bug-fix focused stabilization release, same day as beta.1 (16:04 → 16:38 UTC)
- Fixes: Bonjour/Fly Machine detection, MiniMax empty payload fallback, GitHub CLI doctor GH_CONFIG_DIR hint, Cron long manual run tracking, Windows/WSL multicast probe loops
- Plugin SDK cleanup: deprecated unused public subpaths, removed owner-specific provider-auth-login subpath after moving Chutes/GitHub Copilot/Codex auth back to provider-owned modules
- Discord/voice: opt-in native @discordjs/opus decoder for performance lanes; voice.allowedChannels restriction for voice joins
- Dependencies refreshed including WhatsApp plugin migration from @whiskeysockets/baileys to baileys namespace

**Source:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5

## 2026-05-11

### OpenClaw v2026.5.10-beta.1 Pre-release (May 11, 2026)
- Telegram live PR evidence automation with Convex-leased credentials, Crabbox transcript capture, motion GIF previews, and inline PR comments
- Slack: unfurlLinks and unfurlMedia config for bot link previews, plus explicit replyBroadcast support for thread replies
- /context map command sends treemap image of current session context contributors
- Provider-level localService startup for on-demand local model servers before OpenAI-compatible requests, including one-shot model probes
- TypeScript: stricter compiler checks for implicit returns, side-effect imports, overrides, and unused production code
- Build: pnpm 11 workspace migration, stricter Vitest lint rules
- Realtime voice diagnostics: speaker turns, playback resets, barge-in detection, and audio cutoff analysis

**Source:** https://github.com/openclaw/openclaw/releases

### New CVEs: Shell Expansion Bypass and SSRF (May 6, 2026)
- CVE-2026-44115: Shell expansion allowlist bypass in unquoted heredoc bodies, CVSS 8.8, affects versions before 2026.4.22, fixed in 2026.4.22
- CVE-2026-43576: Server-side request forgery via CDP /json/version WebSocket endpoint, CVSS 7.7, affects versions before 2026.4.5, fixed in 2026.4.5
- Both published May 6, 2026 — adds to the 137 security advisories documented between February-April 2026

**Source:** https://www.thehackerwire.com/openclaw-shell-expansion-bypass-cve-2026-44115/
**Source:** https://www.redpacketsecurity.com/cve-alert-cve-2026-43576-openclaw-openclaw/

### OpenClaw Security Architecture: Lethal Trifecta Confirmed
- OpenClaw Pulse 2026 security guide documents "lethal trifecta": private data access + untrusted content exposure + external communication + persistent memory = structural vulnerability by design
- Time-shifted prompt injection possible: malicious payloads can be fragmented into memory across sessions, triggered when agent state aligns days later
- Core issue: instructions and data occupy same token stream in LLM agents — no firewall between "data read" and "instructions followed"
- Defense in depth required, not just patching

**Source:** https://openclawpulse.com/openclaw-security-guide-2026/

### Enterprise Security Concerns (Ongoing)
- 22% of monitored organizations have employees running OpenClaw without IT approval (shadow AI)
- CLAW-10 composite score: 1.2/5 — enterprises requiring 4+ on Identity, Authorization, Execution Sandboxing face significant gap
- Multiple firms have restricted or discouraged OpenClaw on corporate devices; Microsoft advises treating OpenClaw as untrusted code execution
- Bitdefender scans: ~900 malicious ClawHub skills (~20% of packages), ~36% of skills with security flaws
- OpenClaw cross-referenced in Cisco, Microsoft, IBM security guidance as primary example of agentic AI risks

**Source:** https://www.mintmcp.com/blog/secure-openclaw-enterprise

## 2026-05-10

### GitHub Pre-release (2026-05-09)
- Pre-release changelog (May 9) adds session defaults (/think, /fast), guarded plugin install overrides, Telegram throttler improvements, presentation helpers for rich channels, and multiple safety/usability fixes. Indicates ongoing rapid stabilization and hardening.

**Source:** https://github.com/openclaw/openclaw/releases

### Community Showcase Activity
- The official showcase page highlights dozens of real-world projects: mobile-first workflows, email/CRM automations, TUI tools, smart-home integrations, and multi-agent setups for small teams. Community posts include both high-impact productivity wins (automated daily summaries, calendar management, code generation pipelines) and risky behaviors (mass-messaging loops, watermark stripping, rapid UGC generation).

**Source:** https://openclaw.ai/showcase

### Notes
- Operational safety remains a leading concern despite rapid feature rollout. The balance between feature velocity and governance continues to shape community sentiment.


## 2026-05-07 (BASELINE)

### OpenClaw Security Crisis: Three CVEs Disclosed (April 27, 2026)
- Three vulnerabilities in OpenClaw disclosed April 27, 2026 affecting all versions before 2026.4.20
- CVE-2026-35650: Gateway configuration bypass allowing prompt-injected outputs to rewrite sandbox policies, plugin permissions, and routing hooks
- CVE-2026-41361: Bundled MCP/LSP tools could re-register themselves after policy filtering, defeating deny lists
- Third vulnerability: Malicious .env file could override MINIMAX_API_HOST, redirecting API traffic to attacker-controlled host
- Fixed in OpenClaw 2026.4.20; users on older versions should patch immediately
- Context: 13+ CVEs total, 341 malicious skills found, 21,639 exposed instances reported <!-- FACT_CHECK: NEEDS_UPDATE -->
  <!-- Correction: 21,639 is accurate for Jan 31, 2026 (Censys). By April 2026, later sources cite 42,900+ or 135,000+ exposed instances. Regarding CVEs: early reports mentioned "Four CVEs disclosed" (Feb 2026), later reports cite 138 total CVEs as of May 2026. The "13+" figure appears inconsistent with either count. -->
  <!-- Verified: 2026-05-07 -->
  <!-- Sources: https://censys.com/blog/openclaw-in-the-wild-mapping-the-public-exposure-of-a-viral-ai-assistant, https://www.cvefind.com/en/blog/openclaw-compromise-ai-agents.html, https://openclawpulse.com/openclaw-security-guide-2026/ -->
- IBM notes agentic AI vulnerabilities outpacing traditional CVE frameworks <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Unable to confirm IBM made this specific statement. Multiple sources discuss agentic AI vulnerabilities outpacing CVE frameworks, but IBM attribution unclear. -->

**Source:** https://www.pointguardai.com/ai-security-incidents/openclaw-flaws-let-prompt-injections-hijack-agent-configs-cve-2026-35650
**Source:** https://guard0.ai/blog/openclaw-security-crisis

### OpenClaw 2026.5.3 Released (May 4-5, 2026) <!-- FACT_CHECK: VERIFIED_WITH_DISCREPANCY -->
- Stability and usability patch released one day after 2026.5.2 major release
  <!-- Note: buildfastwithai.com says May 5, 2026, but openclaw-hub.com says May 4, 2026 at 2:01 AM CDT (07:01 UTC). Likely timezone difference - both sources confirm the release and contents. -->
- Eight targeted improvements across plugin management, messaging channels, developer tooling, and agent performance
- Key focus: Faster plugins and new /side command

**Source:** https://www.buildfastwithai.com/blogs/openclaw-2026-5-3-update

### NVIDIA Announces NemoClaw for OpenClaw Community
- NVIDIA NemoClaw stack for OpenClaw agent platform announced
- Lets users install NVIDIA Nemotron models and NVIDIA OpenShell runtime in single command
- Adds privacy and security controls for self-evolving autonomous AI agents

**Source:** https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-NemoClaw-for-the-OpenClaw-Community

### OpenClaw Enterprise Adoption Accelerating
- Red Hat's OpenClaw maintainer improving enterprise deployment safety (April 28, 2026)
- Enterprise adoption moving from experimentation to production deployment rapidly
- From "chatbot programmed to answer questions" to "AI agent capable of performing tasks independently"
- Governance tools, cloud hosting platforms, and first publicly traded company deploying OpenClaw emerged within one month
- Multi-user deployment with SSO, BYOK, and isolation capabilities documented

**Source:** https://techcrunch.com/2026/04/28/red-hats-openclaw-maintainer-just-made-enterprise-claw-deployments-a-lot-safer/
**Source:** https://insights.reinventing.ai/articles/openclaw-enterprise-security-trends-2026-02-25
**Source:** https://mysummit.school/blog/en/openclaw-month-later/

### OpenClaw v2026.2.15 Community Update
- Crossed 197,000 GitHub stars milestone <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: OpenClaw crossed 250,000 GitHub stars on March 3, 2026 (surpassing React to become #1 on GitHub). Current stats (April 2026) show 295K-346K stars. The 197K figure is outdated. -->
  <!-- Verified: 2026-05-07 -->
  <!-- Sources: https://openclaws.io/blog/openclaw-250k-stars-milestone, https://openclawvps.io/blog/openclaw-statistics -->

**Source:** https://octoclaw.ai/blog/openclaw-2026-02-release

### Community Issues: 2026.4.26 Update Crashes
- April 29: After updating to version 2026.4.26, users reporting gateway crashes and issues with Discord and other communication tools

**Source:** https://piunikaweb.com/2026/04/29/openclaw-update-triggering-gateway-crashes-issues/

### OpenClaw Social Sentiment (March 2026)
- 392 posts analyzed during NVIDIA GTC 2026
- Influencer mapping, emerging narratives, keyword trends
- Security reckoning around autonomous AI agents visible in discussions

**Source:** https://reports.trigify.io/openclaw/

### OpenClaw v2026.5.5 Released (May 6, 2026)
- Cleanup release focused on session recovery and channel stability
- Session state improvements: heartbeat-poisoned sessions can be repaired, TUI restore pointers cleaned, repeated reset captures stop overwriting
- Discord/Telegram fixes: progress drafts less likely to vanish/duplicate, plain-text control commands no longer dropped, reasoning text more visible
- Grok native model fixes: stops unsupported reasoning controls from sneaking into live requests
- Plugin updates more defensive: npm/ClawHub plugins stay in sync during host updates, corrupt managed plugin records less likely to derail core updates
- Status output improved: gateway uptime, host uptime, runtime labels, restart handoff details easier to see

**Source:** https://openclaw-hub.com/blog/release-v2026.5-5

### OpenClaw v2026.5.6 Released (May 7/8, 2026)
- Fixes Doctor/OpenAI Codex OAuth routing regression from 2026.5.5
- 2026.5.5 accidentally rewrote valid openai-codex/* ChatGPT/Codex OAuth routes to openai/*, breaking OAuth-only GPT-5.5 setups
- Users already affected should run: openclaw models set openai-codex/gpt-5.5 && openclaw config validate

**Source:** https://github.com/openclaw/openclaw/releases

### OpenClaw v2026.5.4-beta.1 (May 4, 2026)
- 98 commits with bundled File Transfer Plugin (#74742) shipping 4 agent tools: file_fetch, dir_list, dir_fetch, file_write
- File Transfer Plugin architecture: default-deny per-node path policies, symlink traversal refused unless followSymlinks opt-in, 16 MB per-round-trip ceiling, operator approval required for every path access
- Gateway config validation now fails closed (invalid config stops Gateway entirely; previously auto-restored last-known-good)
- Startup performance overhauled through systematic lazy-loading; sidecar deferral pushes non-readiness until after ready signal
- /steer <message> command added for intervening in active session runs without starting new turn

**Source:** https://www.bighatgroup.com/blog/state-of-openclaw-2026-enterprise-self-hosted-ai-agent/

### OpenClaw Platform Growth: 368K Stars, 12M Downloads
- openclaw/openclaw crossed 368,000 GitHub stars and 12 million downloads
- Tencent committed full-time maintainers to the project
- v2026.5.4-beta.1 noted as moment OpenClaw "stopped being a scrappy open-source project and started being a target"

**Source:** https://www.bighatgroup.com/blog/state-of-openclaw-2026-enterprise-self-hosted-ai-agent/

### Claude Code vs OpenClaw: HERMES.md Billing Controversy
- Claude Code (Anthropic) detects HERMES.md files (OpenClaw agent config manifest) and either refuses requests or routes to expensive "extra usage" billing tier
- Users report cost increases up to 50x previous monthly outlay
- Hacker News post accumulated 1,336 upvotes and 718 comments in hours
- Anthropic Head of Claude Code Boris Cherny: "Anthropic's subscriptions weren't built for the usage patterns of these third-party tools"
- 135,000+ OpenClaw instances running at time of block
- OpenClaw positioned as hedge against single-vendor model billing risk; enables decoupled agent surface from model billing path

**Source:** https://news.ycombinator.com/ | https://github.com/anthropics/claude-code/issues/53262

### Enterprise AI Agent Adoption (May 2026)
- NVIDIA NemoClaw provides enterprise-grade hardening with NeMo guardrails and OpenShell sandboxes
- 82% of enterprises use AI agents, but 80% faced boundary violations
- Self-hosted agent control plane becoming board-level question for procurement and legal
- Government warnings about autonomous AI agents issued in Belgium, China, and South Korea
- OpenClaw stopping being "scrappy open-source project" and becoming "target"

**Source:** https://www.bighatgroup.com/blog/state-of-openclaw-2026-enterprise-self-hosted-ai-agent/ | https://www.spotech.online/en/openclaw-in-the-enterprise-2026-how-far-from-lab-to-production/

### Notable: OpenClaw Creator Joined OpenAI (February 2026)
- OpenClaw creator Peter Steinberger joined OpenAI
- OpenClaw remains open-source under a community foundation

**Source:** https://www.theclawreport.com/
## 2026-05-14

### OpenClaw v2026.5.12-beta.6 (May 13, Evening)
- Major security hardening release with multiple pairing requirement PRs landing simultaneously
- Require approval for setup-code device pairing (pgondhi987)
- Require explicit browser device pairing (pgondhi987)
- Require Control UI pairing before proxy-scoped access (pgondhi987)
- Harden trusted-proxy source validation (pgondhi987)
- Agents/sessions: create configured agent main sessions before first sessions_send or gateway send, fixing agent-to-agent message failures when target hasn't started yet
- Gateway protocol: require v4 clients, stream explicit chat deltaText/replace frames for SDK consumers without local diffing
- Session transcripts: redact sensitive message content in centralized JSONL append path for CLI turns, gateway transcript injection, transcript mirrors, and guarded tool results
- ACP: expose Gateway session lineage metadata through ACP session listings for subagent graph rendering
- iMessage: stop sending visible placeholder text for media-only native image sends while preserving internal echo key preventing self-echo duplicates

**Source:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.6

### Security Pattern: Pairing Requirements as Primary Hardening Vector
- Three dedicated security PRs in beta.6 (May 13) all by pgondhi987 enforce explicit pairing before device, browser, or Control UI access
- Trusted-proxy source validation hardening also landed same day
- Pattern shift: platform moving from post-hoc patching to structural access controls at pairing layer
- Session lineage metadata exposed through ACP for visibility into multi-agent hierarchies

**Source:** https://github.com/openclaw/openclaw/pull/81292 | https://github.com/openclaw/openclaw/pull/81289 | https://github.com/openclaw/openclaw/pull/81288

### OpenClaw Use Cases Analysis: What Actually Works (April 2026)
- **Strong ROI:** Email/inbound flows (structured data, low risk), personal briefings (calendar + context aggregation), local document workflows (legal/financial), content pipelines (research → text → visuals with human review), monitoring/alerts (finance/logs/metrics)
- **With caveats:** DevOps (auto PRs/tests, but brittle, silent tech debt), multi-agent systems (AI teams, but hard to manage at scale), browser automation (form filling/scraping, breaks on UI changes), SEO/research (generation quality depends on human validation)
- **Hype vs reality:** Full autonomous coding (errors accumulate, accountability unclear), self-improving agents (degradation risk, safety concerns), financial trading (high risk, costly mistakes), emotional/life decisions (AI analyzes but shouldn't decide)
- Key insight: "OpenClaw shows something important: agents can already do more than we should trust them to do. Success depends not on raw power, but on: constraints, architecture, control."

**Source:** https://www.linkedin.com/pulse/15-openclaw-use-cases-what-actually-works-2026-marina-stroeva-rxwtf

### Peekaboo v3 Update (May 12, 2026)
- LinkedIn mention of OpenClaw Peekaboo tool v3 update as "milestone for executor agents"
- "agents no longer need to..." (incomplete in source) - suggests major capability expansion for screen-capture agent tool

**Source:** https://www.linkedin.com/pulse/15-openclaw-use-cases-what-actually-works-2026-marina-stroeva-rxwtf

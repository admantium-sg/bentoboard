# Cumulative Findings Addendum: April 22, 2026

**Addendum Date:** April 22, 2026
**Addendum Number:** 3
**Previous Update:** April 19, 2026
**Total Insights:** 448 (up from 436)

---

## Critical Updates (April 22, 2026)

**Platform Phase:** Production Automation Platform (Accelerating)

**Two New Releases in ~27 Hours:**

**OpenClaw v2026.4.21 (Released April 22, 2026, 04:18:58 UTC):**
- **Image Generation Upgrade:** Default bundled image-generation provider and live media smoke tests to `gpt-image-2`, advertising newer 2K/4K OpenAI size hints in image-generation docs and tool metadata
- **Plugin Doctor Improvements:** Repair bundled plugin runtime dependencies from doctor paths so packaged installs can recover missing channel/provider dependencies without broad core dependency installs
- **Image Generation Logging:** Log failed provider/model candidates at warn level before automatic provider fallback, so OpenAI image failures are visible in gateway log even when a later provider succeeds
- **Security Hardening (Owner-Only Commands):** Require owner identity (owner-candidate match or internal `operator.admin`) for owner-enforced commands instead of treating wildcard channel `allowFrom` or empty owner-candidate lists as sufficient, preventing non-owner senders from reaching owner-only commands through permissive fallback
- **Slack Thread Preservation:** Preserve thread aliases in runtime outbound sends so generic runtime sends stay in intended Slack thread when caller supplies `threadTs`
- **Browser Accessibility:** Reject invalid `ax<N>` accessibility refs in act paths immediately instead of waiting for browser action timeout
- **npm Install Alias Mirroring:** Mirror `node-domexception` alias into root `package.json` overrides, stopping npm installs from surfacing deprecated dependency chain
- **Community Reactions:** 68 total reactions (34 +1, 7 laugh, 8 hooray, 9 heart, 6 rocket, 4 eyes)

**Significance:**
- Image generation upgrade to `gpt-image-2` with 2K/4K support enhances media automation capabilities
- Security hardening for owner-only commands closes potential authorization bypass
- Better error logging improves debugging and reliability

---

## Critical Updates (April 21, 2026)

**OpenClaw v2026.4.20 Release (Released April 21, 2026, 19:19:35 UTC):**
- **Release Type:** Stable (not beta)
- **Community Reactions:** 68 total reactions (32 +1, 9 hooray, 9 heart, 14 rocket, 4 eyes)
- **Contributors:** 59 contributors credited
- **Total Fixes:** 70+ across all major subsystems

**Key Changes:**
- **Onboarding Wizard Improvements:** Restyle setup security disclaimer with yellow warning banner, section headings, bulleted checklists; add loading spinner during initial model catalog load; add "API key" placeholder to provider API key prompts
- **Agent Prompt Strengthening:** Strengthen default system prompt and OpenAI GPT-5 overlay with clearer completion bias, live-state checks, weak-result recovery, and verification-before-final guidance
- **Cost Estimation:** Support tiered model pricing from cached catalogs and configured models, include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports
- **Session Maintenance:** Enforce built-in entry cap and age prune by default, prune oversized stores at load time so accumulated cron/executor session backlogs cannot OOM the gateway before write path runs
- **Plugin Testing Optimization:** Reuse plugin loader alias and Jiti config resolution across repeated same-context loads, reducing import-heavy test overhead
- **Cron State Management:** Split runtime execution state into `jobs-state.json` so `jobs.json` stays stable for git-tracked job definitions
- **Compaction Notifications:** Send opt-in start and completion notices during context compaction
- **Moonshot Kimi Integration:** Default bundled Moonshot setup, web search, and media-understanding surfaces to `kimi-k2.6` while keeping `kimi-k2.5` available for compatibility; allow `thinking.keep = "all"` on `moonshot/kimi-k2.6`
- **BlueBubbles Group System Prompts:** Forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (e.g., threaded-reply and tapback conventions) are injected on every turn. Supports `"*"` wildcard fallback matching the existing `requireMention` pattern
- **Plugin Task Lifecycle:** Add detached runtime registration contract so plugin executors can own detached task lifecycle and cancellation without reaching into core task internals
- **Terminal Logging Optimization:** Optimize `sanitizeForLog()` by replacing iterative control-character stripping loop with single regex pass while preserving ANSI-first sanitization behavior
- **QA/CI Improvements:** Make `openclaw qa suite` and `openclaw qa telegram` fail by default when scenarios fail, add `--allow-failures` for artifact-only runs, tighten live-lane defaults for CI automation
- **Mattermost Streaming:** Stream thinking, tool activity, and partial reply text into single draft preview post that finalizes in place when safe

**Major Security Fixes:**
- **Exec YOLO Mode Restoration:** Stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via Python/Node script preflight hardening path, restoring promptless YOLO exec for direct interpreter stdin and heredoc forms
- **OpenAI Codex Transport Normalization:** Normalize legacy `openai-completions` transport overrides on default OpenAI/Codex and GitHub Copilot-compatible hosts back to native Codex Responses transport while leaving custom proxies untouched
- **Anthropic Plugin Scope:** Scope Anthropic `api: "anthropic-messages"` defaulting to Anthropic-owned providers, preventing `openai-codex` and other providers without explicit `api` from being rewritten to wrong transport
- **QQBot SSRF Guard:** Add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia
- **Gateway Template Rendering:** Enforce allowRequestSessionKey gate on template-rendered mapping sessionKeys
- **Browser Chrome MCP:** Surface `DevToolsActivePort` attach failures as browser-connectivity errors instead of generic "waiting for tabs" timeout, point signed-out fallbacks toward managed `openclaw` profile
- **MCP Interpreter Startup Blocking:** Block interpreter-startup env keys such as `NODE_OPTIONS` for stdio servers while preserving ordinary credential and proxy env vars

**Platform Integration Fixes:**
- **Webchat Images:** Treat inline image attachments as media for empty-turn gating while ignoring metadata-only blank turns
- **Discord Thinking:** Only show `adaptive` in `/think` autocomplete for provider/model pairs that actually support provider-managed adaptive thinking, preventing GPT/OpenAI models from advertising Anthropic-only option
- **Thinking Mode Handling:** Only expose `max` for models that explicitly support provider max reasoning, remap stored `max` settings to largest supported thinking mode when users switch to another model
- **Gateway Usage Caching:** Bound cost usage cache with FIFO eviction so date/range lookups cannot grow unbounded

**Multi-Platform & Messaging Fixes:**
- **OpenAI Responses GPT Reasoning:** Resolve `/think` levels against each GPT model's supported reasoning efforts so `/think off` no longer becomes high reasoning or sends unsupported `reasoning.effort: "none"` payloads
- **Lobster TaskFlow Approvals:** Allow managed approval resumes to use `approvalId` without resume token, persist id in approval wait state
- **Plugin Startup Repairs:** Install bundled runtime dependencies into each plugin's own runtime directory, reuse source-checkout repair caches after rebuilds, log only packages that were actually installed
- **Agent Shell Fallback:** Ignore non-interactive placeholder shells like `/usr/bin/false` and `/sbin/nologin`, falling back to `sh` so service-user exec runs no longer exit immediately
- **Setup TUI Relaunch:** Relaunch setup hatch TUI in fresh process while preserving configured gateway target and auth source, preventing gateway secrets exposure on command-line args
- **Codex Image Tool Management:** Avoid re-exposing image-generation tool on native vision turns with inbound images, keep bare image-model overrides on configured image provider
- **Sessions Reset Behavior:** Clear auto-sourced model, provider, and auth-profile overrides on `/new` and `/reset` while preserving explicit user selections

**Data Integrity & Performance Fixes:**
- **Session Costs Snapshotting:** Snapshot `estimatedCostUsd` like token counters so repeated persist paths no longer compound same run cost by up to dozens of times
- **OpenAI Codex Endpoint Routing:** Route ChatGPT/Codex OAuth Responses requests through `/backend-api/codex` endpoint so `openai-codex/gpt-5.4` no longer hits removed `/backend-api/responses` alias
- **OpenAI Responses Reasoning Payloads:** Omit disabled reasoning payloads when `/think off` is active, preventing GPT reasoning models from receiving unsupported `reasoning.effort: "none"` requests

**Gateway & Security Hardening:**
- **Gateway Pairing:** Treat loopback shared-secret node-host, TUI, and gateway clients as local for pairing decisions, preventing trusted local tools from reconnecting as remote clients
- **Active Memory Degradation:** Degrade gracefully when memory recall fails during prompt building, logging warning and letting reply continue without memory context instead of failing whole turn
- **Ollama Provider Defaults:** Add provider-policy defaults for `baseUrl` and `models` so implicit local discovery can run before config validation rejects minimal Ollama provider config
- **Agent Model Selection:** Clear transient auto-failover session overrides before each turn so recovered primary models are retried immediately without emitting user-override reset warnings
- **Auto-Reply Policy:** Apply silent `NO_REPLY` policy per conversation type (direct chats get helpful rewritten reply, groups and internal deliveries remain quiet)

**Telegram & Polling Improvements:**
- **Telegram Status Reactions:** Honor `messages.removeAckAfterReply` when lifecycle status reactions are enabled, clearing or restoring reaction after success/error using configured hold timings
- **Web Search Plugin Secrets:** Resolve plugin-scoped SecretRef API keys for bundled Exa, Firecrawl, Gemini, Kimi, Perplexity, Tavily, and Grok web-search providers when selected through shared web-search config
- **Telegram Polling Thresholds:** Raise default polling watchdog threshold from 90s to 120s, add configurable `channels.telegram.pollingStallThresholdMs` (also per-account) so long-running Telegram work gets more room before polling is treated as stalled
- **Telegram Polling Timeout:** Bound persisted-offset confirmation `getUpdates` probe with client-side timeout so zombie socket cannot hang polling recovery before runner watchdog starts

**Enterprise & Production Readiness Fixes:**
- **Agents Pi Runner Retry:** Retry silent `stopReason=error` turns with no output when no side effects ran, giving non-frontier providers that briefly return empty error turns another chance instead of ending session early
- **Plugin Memory Preservation:** Preserve active memory capability when read-only snapshot plugin loads run, preventing status and provider discovery paths from wiping memory public artifacts
- **Plugin Manifest Resolution:** Keep only highest-precedence manifest when distinct discovered plugins share an id, preventing lower-precedence global or workspace duplicates from loading beside bundled or config-selected plugins

**Security Vulnerability Patches:**
- **MINIMAX_API_HOST Workspace Injection:** Block MINIMAX_API_HOST workspace env injection and remove env-driven URL routing
- **Gateway Device Pairing Scope Restriction:** Restrict non-admin paired-device sessions (device-token auth) to their own pairing list, approve, and reject actions so paired device cannot enumerate other devices or approve/reject pairing requests authored by another device. Admin and shared-secret operator sessions retain full visibility
- **Gateway WebSocket Broadcasts:** Require `operator.read` (or higher) for chat, agent, and tool-result event frames so pairing-scoped and node-role sessions no longer passively receive session chat content, scope-gate unknown broadcast events by default
- **Gateway Tool Config Mutation Guard:** Extend agent-facing `gateway` tool's config mutation guard so model-driven `config.patch` and `config.apply` cannot rewrite operator-trusted paths (sandbox, plugin trust, gateway auth/TLS, hook routing and tokens, SSRF policy, MCP servers, workspace filesystem hardening) and cannot bypass guard by editing per-agent sandbox, tools, or embedded-Pi overrides in place under `agents.list[]`

**Additional Fixes (examples from 70+ total):**
- **BlueBubbles:** Raise outbound `/api/v1/message/text` send timeout default from 10s to 30s, add configurable `channels.bluebubbles.sendTimeoutMs` (also per-account)
- **BlueBubbles HTTP Consolidation:** Consolidate outbound HTTP through typed `BlueBubblesClient` that resolves SSRF policy once at construction, preventing image attachment blocks on localhost and reaction blocks on private-IP BB deployments
- **Cron Delivery Validation:** Reject ambiguous announce delivery config at add/update time, ignore disabled channels when announce delivery ambiguity is checked
- **Cron Main-Session Delivery:** Preserve `heartbeat.target="last"` through deferred wake queuing, gateway wake forwarding, and same-target wake coalescing
- **Cron Isolated-Agent Deduplication:** Key isolated direct-delivery dedupe to each cron execution instead of reused session id, preventing recurring Telegram announce runs from reporting delivered while silently skipping later sends
- **Matrix Allowlist Hot-Reload:** Hot-reload `dm.allowFrom` and `groupAllowFrom` entries on inbound messages while keeping config removals authoritative
- **Matrix Slash Commands:** Recognize slash commands prefixed with bot's Matrix mention (e.g., `@bot:server /new`)
- **Gateway Pairing Error Details:** Return reason-specific `PAIRING_REQUIRED` details, remediation hints, and request ids for unapproved-device and scope-upgrade failures
- **Agents Subagent Failures:** Include requested role and runtime timing on subagent failure payloads for parent agent correlation
- **Gateway Sessions Rejection:** Reject stale agent-scoped sessions after agent is removed from config while preserving legacy default-agent main-session aliases
- **Gateway Doctor Pairing Guidance:** Surface pending device pairing requests, scope-upgrade approval drift, and stale device-token mismatch repair steps
- **Codex App-Server Lane Lock:** Release session lane when downstream consumer throws while draining `turn/completed` notification, preventing follow-up messages after Codex plugin reply from queueing behind stale lane lock
- **Codex App-Server Approvals:** Default approval handling to `on-request` so Codex harness sessions do not start with overly permissive tool approvals

**Significance:**
- **Massive Release Scale:** 70+ fixes across security, reliability, multi-platform support, and production readiness
- **Security Hardening:** Critical authorization bypass patches, device pairing scope restrictions, WebSocket broadcast controls, config mutation guards
- **Platform Maturity:** Comprehensive fixes across all major integration channels (Slack, Discord, Telegram, Matrix, BlueBubbles, Mattermost)
- **Enterprise Readiness:** Cost estimation, session maintenance, plugin lifecycle management, memory degradation handling
- **Moonshot Kimi Integration:** Full support for Kimi K2.6/K2.5 models with thinking mode support (NEW TREND)
- **Cron System Refinement:** Separation of runtime state from job definitions for git-tracked workflows

---

## Key Insights

### 1. Platform Velocity Remains Unprecedented
- **15 releases in 14 days** (April 8-22) = ~1.07 releases/day average
- **2 releases in ~27 hours** (v2026.4.20 April 21 19:19 UTC → v2026.4.21 April 22 04:18 UTC)
- **Continued focus on:** Security hardening, multi-platform reliability, and emerging capabilities (image generation, Moonshot Kimi integration)

### 2. Security Response Pattern Solidifies
- **v2026.4.20 continues security hardening trend** following April 9-11 SSRF/ENV injection incident (48-hour patch window)
- **Major security fixes in v2026.4.20:**
  - Device pairing scope restrictions (non-admin paired-device sessions limited to own pairing list)
  - WebSocket broadcast controls (require `operator.read` for chat/agent/tool-result events)
  - Config mutation guards (extend agent-facing `gateway` tool guards)
  - MINIMAX_API_HOST workspace injection blocking
- **Pattern:** Rapid security response with comprehensive hardening within 24-48 hours of vulnerability identification

### 3. Multi-Platform Maturity Achieved
- **Comprehensive fixes across all major channels:**
  - **Slack:** Thread preservation for runtime sends
  - **Discord:** Thinking mode accuracy (only show `adaptive` for supported models)
  - **Telegram:** Polling threshold increases (90s→120s), status reaction timing
  - **Matrix:** Allowlist hot-reload, slash command recognition with bot mentions
  - **BlueBubbles:** Timeout increases (10s→30s), HTTP consolidation for SSRF policy
  - **Mattermost:** Streaming improvements (thinking, tool activity, partial reply in single draft)
- **Significance:** Production-ready reliability across all major enterprise messaging platforms

### 4. Moonshot Kimi Integration (NEW TREND)
- **First-class support for Moonshot's Kimi models:**
  - Default to `kimi-k2.6` for bundled Moonshot setup, web search, media-understanding
  - Keep `kimi-k2.5` for compatibility
  - **Enable `thinking.keep = "all"` on `moonshot/kimi-k2.6`**
  - Strip thinking for other Moonshot models or when pinned `tool_choice` disables thinking
- **Significance:** OpenClaw extending support to non-US/Chinese LLM providers with advanced reasoning capabilities
- **Trend Impact:** Model agnosticism accelerating (already documented in v2026.4.15/4.16)

### 5. Enterprise Readiness Accelerating
- **Cost estimation:** Support tiered model pricing from cached catalogs, include Kimi K2.6/K2.5 cost estimates
- **Session maintenance:** Enforce entry cap and age prune by default, prune oversized stores at load time
- **Plugin lifecycle:** Runtime dependency management, detached task lifecycle contracts
- **Memory degradation handling:** Graceful degradation when memory recall fails (log warning, continue reply)
- **Significance:** Platform features addressing enterprise deployment concerns (cost, resource management, reliability)

### 6. Cron System Evolution
- **Separation of concerns:**
  - `jobs.json`: Stable git-tracked job definitions
  - `jobs-state.json`: Runtime execution state (not git-tracked)
- **Benefits:**
  - Git-tracked workflow definitions
  - Runtime state persistence without polluting git history
  - Easier automation workflow management
- **Isolated-agent delivery deduplication:** Key dedupe per execution instead of per session ID

### 7. Image Generation Upgrade
- **v2026.4.21 defaults to `gpt-image-2`:**
  - Latest OpenAI image generation model
  - Support for higher resolutions (2K, 4K) advertised in docs
  - Better error logging before automatic provider fallback
- **Significance:** Enhances media automation use cases (content creation, social media, design)

---

## Updated Metrics

| Metric | Value | Date | Change |
|--------|-------|------|--------|
| GitHub Stars | 350,000+ | April 2026 | Unchanged |
| Daily Downloads | 500,000/day | April 2026 | Unchanged |
| ClawHub Skills | 52,700 | April 22, 2026 | Unchanged |
| ClawHub Users | 180,000 | April 22, 2026 | Unchanged |
| ClawHub Downloads | 12M | April 22, 2026 | Unchanged |
| ClawHub Avg Rating | 4.8/5 | April 22, 2026 | Unchanged |
| China Token Usage | 140T/day | April 2026 | Unchanged |
| Exposed Instances (China) | 135,000 | April 2026 | Unchanged |
| Latest Release | v2026.4.21 | April 22, 2026 | NEW |
| Release Velocity (April 8-22) | 15 in 14 days | April 22, 2026 | ~1.07/day |
| Cumulative Insights | 448 | April 22, 2026 | +12 from 436 |

---

## Research Limitations

**Web Search API Rate Limiting:** SearXNG returned 429 Too Many Requests errors throughout this check (3 attempts, 0 successful). Unable to perform broader external discovery for:
- News coverage
- Community discussions
- New use cases
- Real-world adoption reports

**Relied on targeted sources:**
- GitHub Releases API (primary source for release information)
- Wikipedia (general historical context)
- TechCrunch RSS feed (no OpenClaw coverage in recent feed)
- ClawHub website (metrics unchanged)
- OpenClaw official website (testimonials, no new announcements)

**Time Window:** ~51.7 hours since last documented check (2026-04-20 08:06 UTC to 2026-04-22 11:48 UTC)

---

## New/Updated Trends

### Accelerating Trends
- **Multi-Agent Orchestration** (continuing)
- **Enterprise Governance & CIO Strategy** (continuing)
- **Security & Safety Boundaries** (continuing - v2026.4.20 security hardening)
- **Local Model Optimization** (continuing)
- **Cloud-Native Memory Architecture** (continuing)
- **Platform Quality & Reliability** (continuing - 70+ fixes in v2026.4.20)
- **Managed Service Market Expansion** (continuing)
- **Enterprise-Grade Infrastructure Market** (continuing)
- **Content Creation & Media Automation** (continuing - gpt-image-2 integration)
- **Enterprise Infrastructure Governance** (continuing)
- **Hackathon-Driven Innovation** (continuing)
- **Cross-Platform Compatibility** (continuing - comprehensive fixes across all channels)
- **AI Agent Telephony Integration** (accelerating - Ring-a-Ding announced April 18)

### Emerging Trends
- **AIoT & Physical World Integration** (emerging)
- **Ambient AI Integration** (emerging)
- **Web3/DeFi Automation** (emerging)
- **Government Regulatory Scrutiny** (emerging)

### Continuing Trends
- **Enterprise Security Crisis & Governance Gap** (continuing - CVE-2026-33579, security hardening in v2026.4.20)

### NEW Trends Identified in This Update
- **Moonshot Kimi Integration (NEW - v2026.4.20):**
  - Full support for Kimi K2.6/K2.5 models
  - `thinking.keep = "all"` capability for K2.6
  - Cost estimation integration
  - Bundled setup, web search, media-understanding defaults to Kimi

---

## Platform Phase

**Production Automation Platform (Accelerating)**
- Rapid release cycle: 15 releases in 14 days (April 8-22)
- Focus: Security hardening, multi-platform reliability, enterprise readiness, model agnosticism
- Stable community metrics: 52.7k tools, 180k users, 12M downloads
- High user satisfaction: 4.8/5 average rating
- New capabilities: Moonshot Kimi integration, gpt-image-2 upgrade

---

**Addendum Generated:** April 22, 2026 at 11:48 UTC
**Research Method:** GitHub Releases API + targeted web_fetch
**Research Duration:** ~51.7 hours since last check
**Researcher:** Daily Insight Accumulator Skill

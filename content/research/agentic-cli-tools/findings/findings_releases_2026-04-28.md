# Agentic CLI Tools & Desktop AI Assistants — Releases (2026-04-21 to 2026-04-27)

## Overview
This report covers tool releases, new commands, and feature announcements for agentic CLI tools and desktop AI assistants during the period **April 21–27, 2026**.

---

## 1. OpenAI Codex — "For (Almost) Everything" Update

**Released:** April 16, 2026 (first detected in this window via follow-on coverage)

### Key Features Announced in This Window
- **Multi-agent workflows**: Deploy multiple specialized agents in parallel (writing, debugging, testing simultaneously)
- **Computer Use**: Codex can now control macOS apps in the background — open files, run tests, operate other applications autonomously
- **Persistent Memory**: Retains context across sessions, remembers user preferences, resumes long tasks
- **90+ new plugins**: Atlassian Rovo (JIRA), CircleCI, CodeRabbit, GitLab Issues, Microsoft Suite, Neon by Databricks, Remotion, Render, Superpowers, plus MCP server integrations
- **gpt-image-1.5 image generation**: Generate/refine images alongside code within the same workflow (UI mockups, game assets, frontend designs)
- **In-app browser**: Preview webpages directly within Codex

### Availability
- Rolling out to desktop app users logged into ChatGPT; computer control initially macOS only
- Memory/personalization expanding to Enterprise, Edu, EU, and UK users

> "OpenAI has released a major update to Codex, expanding it from a coding assistant into a more autonomous AI tool for developers... Codex can now deploy multiple specialized agents in parallel."
> — The Tech Portal, April 17, 2026
> https://thetechportal.com/2026/04/17/openai-upgrades-codex-with-multi-agent-workflows-and-desktop-app-control-to-challenge-anthropics-claude-code/

---

## 2. Claude Code — v2.1.119 (April 24, 2026)

First seen by Releasebot: April 24, 2026. Heavy iteration cycle throughout April (v2.1.69 → v2.1.119 in ~5 weeks).

### New CLI Commands & Settings
- **`/config`** — Persistent config settings (theme, editor mode, verbose, etc.) now save to `~/.claude/settings.json` with project/local/policy override precedence
- **`prUrlTemplate`** setting — Custom PR badge URL instead of defaulting to github.com
- **`CLAUDE_CODE_HIDE_CWD`** env var — Hides working directory from startup logo
- **`--from-pr`** now accepts GitLab merge-request, Bitbucket pull-request, and GitHub Enterprise PR URLs
- **`--print`** mode now honors agent's `tools:` and `disallowedTools:` frontmatter (matching interactive mode)
- **`--agent`** now honors agent definition's `permissionMode` for built-in agents

### Hooks (New Input Data)
- **`PostToolUse` and `PostToolUseFailure`** hooks now include `duration_ms` (tool execution time, excluding permission prompts and PreToolUse hooks)

### Infrastructure
- **Parallel MCP server connections** from subagents and SDK (was serial)
- **Plugin auto-update**: Plugins pinned by another plugin's version constraint now auto-update to highest satisfying git tag
- **OpenTelemetry**: `tool_result` and `tool_decision` events now include `tool_use_id`; `tool_result` also includes `tool_input_size_bytes`

### UX Improvements
- **Vim mode**: `Esc` in INSERT no longer pulls queued message back into input
- **Slash command picker**: Long descriptions now wrap to second line instead of truncating; highlights matched characters
- **`owner/repo#N` shorthand** links now use git remote's host instead of always pointing to github.com
- **`/export`**: Fixed showing current default model instead of conversation model

### Security & Fixes
- `blockedMarketplaces` now correctly enforces `hostPattern` and `pathPattern` entries
- Fixed MCP HTTP connections failing with "Invalid OAuth error response" for non-JSON OAuth discovery bodies
- Fixed CRLF paste content (Windows, Xcode console) inserting extra blank lines
- Fixed `${ENV_VAR}` placeholders in headers for HTTP/SSE/WebSocket MCP servers not being substituted

> "Claude Code adds persistent config settings, richer PR and MCP support, smarter permissions and hooks, plus wide fixes across paste handling, planning, plugins, status, and platform bugs."
> — Releasebot, April 24, 2026
> https://releasebot.io/updates/anthropic/claude-code

---

## 3. Claude Opus 4.7 — Launched April 16, 2026

Claude Code upgraded to Opus 4.7 as default model during this window.

### Agentic Coding Improvements
- **87.6% SWE-bench Verified** (up from 80.8% with Opus 4.6)
- **64.3% SWE-bench Pro** (up from 53.4%)
- **70% CursorBench** (up from 58%)
- 13% resolution improvement on 93-task coding benchmark vs Opus 4.6; solved 4 tasks neither Opus 4.6 nor Sonnet 4.6 could solve
- **14% fewer tool errors** vs Opus 4.6; first model to pass implicit-need tests (continues through tool failures that stopped Opus 4.6)

### New Claude Code Commands
- **`/ultrareview`** — New command introduced with Opus 4.7
- **Auto mode** extended to Max plan users
- **New `xhigh` effort level** — Now default across all plans (higher token use)

### Vision Upgrade
- **3× pixel capacity**: Accepts images up to **2,576 pixels on long edge (~3.75 megapixels)** vs prior models
- Visual-acuity benchmark: **98.5%** (Opus 4.7) vs **54.5%** (Opus 4.6) — eliminates single biggest Opus pain point for computer-use agents

> "Opus 4.7 appears to close that loop autonomously — the model verifying its own outputs is a meaningful behavioral shift... with significant implications for CI/CD pipelines and multi-step agentic workflows."
> — MarkTechPost, April 18, 2026
> https://www.marktechpost.com/2026/04/18/anthropic-releases-claude-opus-4-7-a-major-upgrade-for-agentic-coding-high-resolution-vision-and-long-horizon-autonomous-tasks/

---

## 4. Claude Code Desktop App — Redesign (April 14 / ongoing GA)

*Redesign announced and rolling out through this window*

- **Multi-session sidebar**: Switch between concurrent sessions
- **Drag-drop panes**: Customizable layout
- **Integrated terminal**: No context switching
- **In-app file editor**: Full editing without leaving the app

> "April 14 Claude Code desktop app redesign (multi-session sidebar, drag-drop panes, integrated terminal, in-app file editor)"
> — AI Tool Analysis, April 17, 2026
> https://aitoolanalysis.com/claude-code/

---

## 5. Claude Cowork — GA + Enterprise RBAC (April 9; GA expansion this window)

Cowork (Claude's desktop agent) reached general availability on macOS and Windows with enterprise controls:

- **Role-based access controls (RBAC)** for Enterprise plans
- Admins can organize users into groups (manually or via SCIM from identity provider)
- Custom roles defining which Claude capabilities each group can use
- Group spend limits

> "Claude Cowork is now generally available on macOS and Windows through the Claude Desktop app."
> — Anthropic Release Notes, April 9, 2026
> https://support.claude.com/en/articles/12138966-release-notes

---

## 6. Claude Design — Launched April 17, 2026

New Anthropic Labs product announced alongside Opus 4.7:

- Collaborative visual output creation: designs, prototypes, slides, one-pagers
- Works alongside Claude's existing text/analysis capabilities

> "With Opus 4.7, we also launched Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create visual outputs like designs, prototypes, slides, and one-pagers."
> — Anthropic Release Notes, April 17, 2026
> https://support.claude.com/en/articles/12138966-release-notes

---

## 7. Google Gemini — April "Drop" (Native Desktop Support)

**Gemini Drop** announced April 2026:

- **Native desktop support** (major expansion of prior web-only experience)
- **Music creation** capability added to Gemini app
- Enhanced multimodal capabilities
- Better integration with Google ecosystem

> "From native desktop support to music creation, we're making your AI partner more integrated than ever."
> — Google Blog, April 2026
> https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-april-2026/

---

## 8. Grok (xAI) — 4.20 Improvements

- Faster response times with new speed modes
- Voice mode improvements (limited rollout)
- Multi-agent workflow capabilities
- Improved reasoning for complex prompts

> "April 2026 brought major updates across AI assistants — including Grok 4.20 improvements, Claude desktop control features, ChatGPT workflow upgrades, and new Gemini capabilities."
> — AI Tools Recap, April 2026
> https://aitoolsrecap.com/Blog/ai-assistant-updates-april-2026-chatgpt-claude-gemini-grok

---

## Summary Table

| Tool | Release/Update | Date | Key Additions |
|---|---|---|---|
| **OpenAI Codex** | Major Update | Apr 16 | Multi-agent, Computer Use, Memory, 90+ plugins, gpt-image-1.5 |
| **Claude Code** | v2.1.119 | Apr 24 | /config, hooks+duration_ms, parallel MCP, prUrlTemplate, Vim fixes |
| **Claude Opus 4.7** | Model Launch | Apr 16 | 87.6% SWE-bench Verified, /ultrareview, xhigh default, 3× vision |
| **Claude Code Desktop** | Redesign | Apr 14+ | Multi-session sidebar, drag-drop panes, integrated terminal |
| **Claude Cowork** | GA + RBAC | Apr 9+ | Enterprise role-based access, SCIM, group spend limits |
| **Claude Design** | New Product | Apr 17 | Visual outputs (designs, prototypes, slides) |
| **Google Gemini** | April Drop | Apr 2026 | Native desktop app, music creation |
| **Grok 4.20** | xAI Update | Apr 2026 | Speed modes, voice, multi-agent, improved reasoning |

---

## Sources
- https://thetechportal.com/2026/04/17/openai-upgrades-codex-with-multi-agent-workflows-and-desktop-app-control-to-challenge-anthropics-claude-code/
- https://releasebot.io/updates/anthropic/claude-code
- https://aitoolanalysis.com/claude-code/
- https://support.claude.com/en/articles/12138966-release-notes
- https://www.marktechpost.com/2026/04/18/anthropic-releases-claude-opus-4-7-a-major-upgrade-for-agentic-coding-high-resolution-vision-and-long-horizon-autonomous-tasks/
- https://aitoolsrecap.com/Blog/ai-assistant-updates-april-2026-chatgpt-claude-gemini-grok
- https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-april-2026/
- https://openai.com/index/introducing-gpt-5-5/
- https://tokencalculator.com/blog/best-ai-ide-cli-tools-april-2026-claude-code-wins
- https://www.oflight.co.jp/en/columns/openai-codex-for-everything-mac-computer-use-memory-2026
- https://claudecowork.im/blog/best-ai-assistants-2026
- https://kimi-k2.org/blog/24-kimi-k2-6-release

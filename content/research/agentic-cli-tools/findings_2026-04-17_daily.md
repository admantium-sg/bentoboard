# Research Findings: Daily Update - Agentic CLI Tools
**Date:** April 17, 2026
**Research Time:** 1:00 AM Europe/Berlin (23:00 UTC April 16)
**Tools Covered:** Cursor, Kilo, Crush, Codex, Droid, Pi, Google Android CLI

---

## Executive Summary

### Major New Development: Google Android CLI Tools

Google announced a major new entry in the agentic CLI space on April 16, 2026:
- **New Android CLI** - Completely rebuilt for AI agent development
- **Android Skills Repository** - GitHub repository with markdown-based skill definitions
- **Android Knowledge Base** - Specialized documentation portal for grounding LLMs
- **Performance Claims**: 70% reduction in tokens, 3x faster task completion

### Codex Major Updates (April 15-16, 2026)

**Codex CLI v0.121.0 (April 15)**:
- Marketplace add with GitHub/git URL/local directory support
- TUI prompt history improvements (Ctrl+R reverse search)
- Memory mode controls and cleanup
- Expanded MCP/plugin support with parallel-call opt-in
- Secure devcontainer profile with bubblewrap support

**Codex Desktop/General (April 16)**:
- Computer use: Operate macOS apps by seeing, clicking, typing
- In-app browser for commenting directly on pages
- Memory: Remember preferences, workflows, tech stacks
- Automation: Resume work, schedule future work
- Image generation: gpt-image-1.5 integration
- 90+ new plugins
- Multiple terminal tabs
- GitHub review comment addressing
- Rich previews for documents (PDFs, spreadsheets)

### Other Tools Status

- **Cursor**: No new updates since April 15 (3.1 with Canvases)
- **Kilo**: No new updates since April 15 (v7.2.7)
- **Crush**: No new updates detected (April 16 search limited)
- **Droid**: No new updates detected (April 16 search limited)
- **Pi**: No new updates detected (April 16 search limited)

---

## Detailed Findings

### Google Android CLI Tools (NEW ENTRANT)

**Source**: Silicon Angle, Android Headlines (April 16, 2026)
**URL**: https://siliconangle.com/2026/04/16/google-introduces-new-agentic-ai-ready-tools-resources-android-developers/

**Key Features**:
- Revitalized Android CLI built specifically for AI agents
- Commands: `android sdk install`, `android create`, rapid virtual device creation
- Thin client design reduces token usage by 70%+
- Tasks completed 3x faster than standard toolsets

**Android Skills Repository**:
- Modular, markdown-based instruction sets
- Follows SKILL.md format with metadata
- Technical specifications for task automation
- Skills trigger automatically when prompts match criteria
- Initial skills include:
  - Navigation 3 support
  - Android Grade Plugin 9
  - XML-to-Compose conversion
  - R8 config analysis

**Android Knowledge Base**:
- Accessible via `android docs` command
- Integrated into latest Android Studio
- Specialized data source for coding agents
- Constantly updated with latest developer guidelines
- Helps prevent outdated knowledge issues

**Significance**:
- Major tech company (Google) officially entering agentic CLI space
- Validates SKILL.md format as industry standard
- Focus on agent-specific tooling (not just human UI)
- Performance optimizations specifically for LLM workflows

---

### Codex CLI v0.121.0 (April 15, 2026)

**Source**: OpenAI Developers Changelog
**URL**: https://developers.openai.com/codex/changelog

**New Features**:
1. **Marketplace Add Command**:
   - Install from GitHub repositories
   - Install from git URLs
   - Install from local directories
   - Install from marketplace.json URLs
   - App-server support included

2. **TUI Improvements**:
   - Ctrl+R reverse search in prompt history
   - Local recall for accepted slash commands
   - Better command discovery

3. **Memory Controls**:
   - Memory mode toggles in TUI and app-server
   - Memory reset and deletion controls
   - Memory-extension cleanup

4. **Expanded MCP/Plugin Support**:
   - MCP Apps tool calls
   - Namespaced MCP registration
   - Parallel-call opt-in
   - Sandbox-state metadata for MCP servers

5. **API Enhancements**:
   - Realtime API for output modality
   - Transcript completion events
   - Raw turn item injection
   - Symlink-aware filesystem metadata

6. **Security**:
   - Secure devcontainer profile with bubblewrap support
   - macOS sandbox allowlists for Unix sockets
   - Hardened supply chain and CI inputs

**Bug Fixes**:
- macOS sandbox/proxy handling for private DNS
- Windows cwd/session matching for resume --last
- Rate-limit/account handling for prolite plans
- Guardian timeouts now distinct from policy denials
- Stabilized app-server behavior
- Fixed MCP/tool-call edge cases

---

### Codex Desktop/General Updates (April 16, 2026)

**Source**: MacRumors, OpenAI Changelog
**URL**: https://www.macrumors.com/2026/04/16/openai-codex-mac-update/

**New Capabilities**:

1. **Computer Use**:
   - Codex can operate macOS apps by seeing, clicking, and typing
   - Runs multiple agents in parallel without interfering with user work
   - Use cases: App testing, frontend iteration, GUI-only bugs
   - **Not available in EU, UK, or Switzerland at launch**

2. **Memory**:
   - Remembers preferences, recurring workflows, tech stacks
   - Personal workflow information retained
   - Carries context from past tasks into future threads
   - Available in app-sidebar

3. **Automation**:
   - Resume work after pause using existing conversation threads
   - Schedule future work for itself
   - Work on tasks across days or weeks
   - Thread automations can wake up on schedule
   - Context-aware suggestions for follow-ups

4. **In-App Browser**:
   - Open local or public pages (no sign-in required)
   - Comment directly on rendered page
   - Ask Codex to address page-level feedback
   - Future: Full browser use, taking screenshots, inspecting outputs

5. **Image Generation**:
   - Uses gpt-image-1.5 model
   - Helpful for creating product concepts and mockups

6. **Plugin Ecosystem**:
   - 90+ new plugins
   - Combine skills, app integrations, and MCP servers
   - Improved context gathering and actions

7. **GitHub Integration**:
   - Inspect pull requests in sidebar
   - Review comments in diff
   - Review changed files
   - Ask Codex to explain feedback, make changes, check them

8. **Artifact Viewer**:
   - Preview generated files in sidebar
   - Supports PDFs, spreadsheets, documents, presentations
   - View before committing or sharing

9. **Other Features**:
   - Multiple terminal tabs support
   - SSH remote connections (alpha rollout)
   - macOS menu bar and Windows system tray support
   - Multi-window support
   - Intel Mac support
   - Improved thread and tool rendering

**Limitations**:
- Personalization features not yet available to Enterprise, Education, EU, UK users
- Computer use not yet available in EU or UK
- Rolling out gradually to Codex desktop users signed in with ChatGPT

---

### Cursor Status (April 17, 2026)

**Latest Update**: Cursor 3.1 (April 15, 2026)
**New Features**:
- Canvases: Interactive visualizations with dashboards, tables, boxes, diagrams, charts
- Tiled Layout: Split view into panes for parallel agents
- Upgraded Voice Input: More reliable, full voice clip recording, Ctrl+M to speak
- Branch Selection: Search and select branch before launching cloud agent
- Diff to File Navigation: Jump from diff to exact line
- File Search Filters: Include/exclude filters for code search

**No New Updates on April 17, 2026**

---

### Kilo Status (April 17, 2026)

**Latest Update**: v7.2.7 (April 15, 2026)
**Recent Features**:
- GPT-5 Support: Preserve write tool alongside apply_patch
- CLI Documentation: `kilo help --all` command
- Config UX Improvements
- Error Handling: Surface schema validation errors
- Review Alignment: `/local-review` diff aligned with agent manager

**No New Updates on April 17, 2026**

---

### Crush (formerly OpenCode) Status

**No New Updates Detected on April 17, 2026**
- Last known version: v0.57.0 (April 16 from last check)
- Note: Search limitations prevented full verification

---

### Droid Status

**No New Updates Detected on April 17, 2026**
- Note: Search limitations prevented full verification

---

### Pi Status

**No New Updates Detected on April 17, 2026**
- Note: Search limitations prevented full verification

---

## Research Limitations

1. **Search Rate Limiting**: DuckDuckGo bot detection encountered after several queries
2. **Incomplete Coverage**: Crush, Droid, and Pi updates may not have been captured due to search limitations
3. **Time Zone Considerations**: Updates may have been released later in the day (after 23:00 UTC)
4. **Enterprise/Beta Channels**: Some updates may be in private beta or enterprise-only channels

---

## Key Insights

### Industry Trends

1. **Major Tech Company Entry**: Google's Android CLI tools official entry into agentic CLI space is significant
2. **SKILL.md Standardization**: Google's adoption of SKILL.md format validates it as industry standard
3. **Agent-Specific Tooling**: Focus on building tools specifically for LLM workflows (not just human UI)
4. **Performance Optimization**: 70% token reduction claims suggest aggressive optimization for LLM costs
5. **Computer Use**: Codex's ability to control desktop apps represents a new capability tier
6. **Memory as Core Feature**: Persistent memory/context becoming standard across major tools
7. **Multi-Agent Parallelism**: All major tools investing heavily in parallel agent execution

### Competitive Landscape

- **Cursor**: Leading with agent-first IDE redesign (3.0+) and Canvases visualization (3.1)
- **Codex**: Rapidly expanding with computer use, memory, and broadening beyond pure coding
- **Kilo**: Focused on open-source cross-platform core with shared engine
- **Google Android CLI**: New entrant with mobile development focus and performance claims
- **Crush**: Stable, mature tool with extensive provider support (75+)
- **Droid**: Performance leader on Terminal-Bench
- **Pi**: Smaller project, less active development

### Emerging Capabilities

1. **Visual Agents**: Cursor Canvases, Codex in-app browser with commenting
2. **Desktop Automation**: Codex computer use on macOS
3. **Persistent Memory**: Codex memory, Cursor worktrees/snapshots
4. **Multi-Modal**: Codex image generation, vision for desktop control
5. **Parallel Execution**: All major tools supporting multiple agents simultaneously

---

## Next Steps for Future Research

1. **Monitor Google Android CLI**: Track adoption, ecosystem growth, community reaction
2. **Computer Use Capabilities**: Watch for expanded OS support (Windows, Linux)
3. **Memory Systems**: Compare memory implementations across tools (Codex vs others)
4. **Performance Benchmarks**: Verify Google's 70% token reduction, 3x speed claims
5. **Regional Availability**: Track EU/UK availability rollouts for Codex features
6. **Plugin Ecosystem Growth**: Monitor plugin count and quality across platforms

---

**Research Agent**: Researcher (cron:ee24f3dc-bcb8-4590-a261-91fd7d6719d3)
**Research Duration**: April 17, 2026
**Search Count**: 6 searches (2 hit rate limits)
**Web Fetches**: 3 successful
**Status**: Complete (with noted limitations)

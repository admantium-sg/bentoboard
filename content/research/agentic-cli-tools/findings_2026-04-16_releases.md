# Product Releases & Updates: Agentic CLI Tools
**Date Range:** April 15-16, 2026
**Research Date:** April 16, 2026

---

## Cursor

### April 15, 2026: Canvases Feature
- **Release:** Cursor 3.1
- **New Feature:** Canvases - interactive visualizations that agents can create
  - Dashboards and custom interfaces built using first-party components
  - Components: tables, boxes, diagrams, charts
  - Integration with existing Cursor components: diffs and to-do lists
  - Durable artifacts in the Agents Window side panel alongside terminal, browser, and source control
- **Availability:** Available in Cursor 3.1 in the Agents Window or editor
- **Source:** https://cursor.com/changelog | https://cursor.com/blog/canvas

### Cursor 3.1: Agents Window Improvements
- **Tiled Layout:** Split view into panes to run multiple agents in parallel, compare outputs, multi-task across agents
- **Upgraded Voice Input:** More reliable dictation with full voice clip recording, batch STT for higher-quality transcription, Ctrl+M to speak, UI controls (waveform, timer, cancel/confirm buttons)
- **Branch Selection in Empty State:** Search and select branch first before launching cloud agent
- **Diff to File Navigation:** Jump from diff to exact line in file
- **Filters for Searching Files:** Include/exclude filters for code search scoping
- **Source:** https://cursor.com/changelog

### April 8, 2026: Bugbot Updates
- **Learned Rules:** Bugbot can learn from PR feedback, creates rules from reactions/replies/promotes useful rules
- **MCP Support:** Access to MCP servers for additional context during code reviews (Teams/Enterprise plans)
- **Source:** https://cursor.com/changelog | https://cursor.com/blog/bugbot-learning

---

## Kilo (KiloCode)

### April 15, 2026: Multiple Releases
- **Version:** v7.2.7 (released April 15, 2026)
- **Pre-releases:** v7.2.6 (Apr 14), v7.2.5 (Apr 13), v7.2.4 (Apr 10), v7.2.3 (Apr 8)

**Key Updates:**
- **GPT-5 Support:** Preserve write tool alongside apply_patch for GPT-5 models
- **CLI Documentation:** Added `kilo help --all` command for full CLI reference in markdown or text
- **Auto-generated Docs:** CLI reference docs auto-generated from help.ts
- **Config UX Improvements:** Better config warning UX across CLI, TUI, and VS Code
- **Error Handling:** Surface schema validation errors to user in CLI
- **Resilience:** Skip invalid agent/command configs instead of crashing
- **Review Alignment:** `/local-review` diff aligned with agent manager diff viewer
- **Source:** https://github.com/Kilo-Org/kilocode/releases

### April 2026: Major Platform Rebuild
- **Architecture:** Kilo Code extension completely rebuilt on portable, open-source core
- **Cross-platform:** Shared core across VS Code, CLI, and Cloud Agents
- **New Features:**
  - Faster execution with parallel tool calls and subagents
  - Agent Manager for running multiple agents side by side
  - Inline code review with line-level comments
  - Multi-model comparisons
  - Access to 500+ models
- **Breaking Changes:**
  - Code indexing temporarily unavailable (being worked on)
  - Checkpoints renamed to snapshots (Git-based)
  - Auto-confirm UI replaced by granular per-tool permission system
  - Orchestrator mode deprecated (agents now delegate to subagents automatically)
  - Custom profiles layer removed (use star favorites instead)
- **Source:** https://kilo.ai/docs/code-with-ai/platforms/vscode/whats-new

---

## Other Tools (Cursor/Codex, Droid, Pi)

### Search Results Summary
- **Crush/Codex:** No specific releases found for April 15-16, 2026 timeframe
- **Droid:** No specific releases found for April 15-16, 2026 timeframe
- **Pi:** No specific releases found for April 15-16, 2026 timeframe
- **Note:** Web search rate limits encountered during research; some tools may have had updates not captured in this report

---

## Research Notes
- **Search Count:** 5 searches performed (3 successful, 2 hit rate limits)
- **Sources Checked:** Cursor changelog, Kilo docs, GitHub releases, release tracking sites
- **Limitations:** Some tools may have had minor updates or beta announcements not publicly indexed or behind paywalls
- **Trend:** Both Cursor and Kilo are investing heavily in multi-agent parallel execution and agent-first interfaces

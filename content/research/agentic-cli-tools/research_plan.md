# Research Plan — agentic-cli-tools

**Topic:** Agentic CLI tools and desktop AI assistants
**Working directory:** /home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools
**Cycle:** 2026-11-25 (window 2026-11-24T01:28:00Z -> 2026-11-25T01:28:00Z)

## Main research question
What changed in the agentic CLI tools and desktop AI assistant ecosystem inside the last 24 hours — releases, security advisories, vendor announcements, community signal, and market/enterprise posture?

## Subtopics (2 delegated tasks)

1. **Releases & security** — `diac-releases-2026-11-25` → `findings_agentic-cli-tools_releases_2026-11-25.md`
   - npm dist-tag + publish-timestamp deltas for @anthropic-ai/claude-code, @openai/codex, @google/gemini-cli, @github/copilot, @opencode/cli, @qwen-code/qwen-code, cline, @runpod/mcp-server, claude-code-router, claude-code-action
   - GitHub release tags for anthropics/claude-code, openai/codex, google-gemini/gemini-cli, github/copilot-cli, block/goose, anomalyco/opencode
   - GitHub advisory feed, filtered for coding-CLI config surfaces and MCP bridges
   - Vendor changelogs and first-party release notes
   - Budget: 35 curl calls, 3 web_fetch calls (whole run's web_fetch cap)

2. **Community, market & enterprise** — `diac-community-2026-11-25` → `findings_agentic-cli-tools_community_2026-11-25.md`
   - Reddit (Arctic Shift archive API) across r/ClaudeCode, r/codex, r/ClaudeAI, r/GeminiAI, r/opencode, r/OpenAI, r/ChatGPTCoding, r/cursor, r/LocalLLaMA, r/CLine
   - Hacker News (Algolia) stories + comment trees
   - Google News RSS for launch/press signal
   - ANT equity bar: Nasdaq historical API + CNBC quote API (Yahoo chart API is 429-limited)
   - Anthropic first-party announcements via claude.com/blog and claude.com/resources/articles
   - Budget: ~47 curl calls, 0 web_fetch

## Constraints
- 0 `web_search` usable (DuckDuckGo bot-detection challenge); primary-source `curl` only
- 3 `web_fetch` calls maximum for the whole run
- Every bullet ends with a `Source: <URL>` line
- Press-only items labeled [REPORTED]; title-only/unverified items labeled [UNVERIFIED]
- Verified negatives recorded as evidence; access failures recorded as access gaps
- Active cumulative_findings.md stays under ~60 KB; monthly archive holds full-length sections

## Synthesis
Section written to `tmp/2026-11-25/section_2026-11-25.md` (full, 45,578 B) → condensed to 31,050 B for the active file, published to `cumulative_findings.md`, `archive/cumulative_findings_2026-11.md` (full length) and `daily_reports/2026-11-25.md` (full length).

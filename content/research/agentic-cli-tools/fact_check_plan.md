# Fact Check Plan: Agentic CLI Tools (2026-07-02)

## Claims to Verify

### Group A: Claude Sonnet 5 / Claude Code v2.1.197 (Highest priority - major model release)
1. Claude Sonnet 5 1M token context window (both default and maximum)
2. 128k max output tokens
3. $2/$10 per Mtok introductory pricing through Aug 31, 2026
4. SWE-Bench Verified: 92.4% (+12pt over Opus 4.6)
5. OSWorld-Verified: 88.3% (beats 72.4% human expert baseline)
6. GPQA Diamond: 96.2%
7. ARC-AGI-2: 84.7%

### Group B: Cline v4.0.0 Rollback (Significant event)
1. v4.0.0 SDK migration rolled back within ~48 hours
2. Rolled back to v3.89.2 codebase
3. Issue #11931: agent bypassing PLAN/ACT control flow

### Group C: Codex CLI v0.143.0
1. 35+ alpha releases with no stable
2. MCP tools use tool search by default
3. Updated bundled OpenSSL to 3.6.3

### Group D: Kilo v7.3.63
1. Anaconda Desktop provider
2. NVIDIA Parakeet TDT 0.6B v3
3. macOS sandbox network blocking

## Verification Strategy
- Use web_search for each claim with 2 independent sources
- Cross-reference with official changelogs and release notes
- Track verification status in verification_status.json

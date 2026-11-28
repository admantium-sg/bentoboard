# Agentic CLI Tools Feature Comparison

**Research Date:** 2026-04-06  
**Research Limitations:** Due to DuckDuckGo bot detection errors, this report relies heavily on fetched documentation for OpenCode and general knowledge. Further research with alternative search methods is recommended for comprehensive coverage of all tools.

---

## Executive Summary

This document compares six agentic CLI tools: Cursor, Kilo, Droid, OpenCode, Codex, and Pi. Detailed information was successfully retrieved for OpenCode only; other tools require additional research due to search access limitations.

---

## Tools Overview

### 1. OpenCode CLI

**Type:** Go-based CLI coding agent with TUI  
**Repository:** https://github.com/Pyasapanchi/opencodecli  
**Documentation:** https://open-code.ai/en/docs/cli  
**Status:** Active, 95K+ GitHub stars (per review site)

#### Core Features

- **Terminal User Interface (TUI):** Full interactive terminal experience
- **Non-interactive mode:** Run prompts directly from CLI for scripting/automation
- **Multi-model support:** 75+ LLMs via Models.dev integration
- **Agent management:** Create custom agents with system prompts and tool configurations
- **Session management:** List, export, import sessions (JSON format)
- **Authentication system:** Manage credentials for multiple providers via `opencode auth`
- **Model Context Protocol (MCP):** Full MCP server support with OAuth authentication
- **GitHub integration:** GitHub agent for repository automation via GitHub Actions
- **Server modes:** Headless HTTP server, web interface, ACP (Agent Client Protocol) server
- **Statistics tracking:** Token usage and cost statistics
- **Environment variables:** Extensive configuration via env vars

#### Commands Available

- `opencode tui` - Start TUI (default)
- `opencode agent` - Create/list agents
- `opencode attach` - Attach to running backend
- `opencode auth login/logout/list` - Authentication management
- `opencode github install/run` - GitHub automation
- `opencode mcp add/list/auth/logout/debug` - MCP server management
- `opencode models` - List available models
- `opencode run` - Non-interactive prompt execution
- `opencode serve` - Start headless HTTP server
- `opencode session` - Manage sessions
- `opencvode stats` - Show usage statistics
- `opencode export/import` - Session data management
- `opencode web` - Start server with web UI
- `opencode acp` - Start ACP server

#### Technical Characteristics

- **Language:** Go
- **Binary distribution:** Available via releases (implied from upgrade command)
- **Auth storage:** `~/.local/share/opencode/auth.json`
- **Provider integration:** Models.dev for provider list
- **Config sources:** Auth file, environment variables, project `.env` files
- **Communication protocols:** HTTP, ACP (nd-JSON via stdin/stdout)

#### Platforms

- Cross-platform (Go-based, likely Linux/macOS/Windows)
- GitHub Actions compatible

#### Limitations

- Requires API keys for LLM providers
- No local LLM support mentioned (relies on external providers)
- Documentation fetch revealed no offline mode
- Authentication required for MCP OAuth servers

#### Primary Use Cases

- Interactive terminal coding assistance
- Scripted automation workflows
- Repository automation via GitHub Actions
- Multi-model testing and comparison
- Agent-driven development workflows

---

### 2. Cursor

**Research Status:** Limited information available

**Known Information:**
- **Primary Product:** AI-powered code editor/IDE (VS Code fork with AI features)
- **Not primarily a CLI tool** - Cursor is a desktop application
- **CLI capabilities:** May have limited CLI for project management (not confirmed)
- **Provider:** Cursor.sh
- **Model support:** OpenAI GPT-4, Claude (proprietary integration)

**Key Characteristics:**
- IDE-focused with integrated AI chat and code completion
- File context awareness within editor
- Terminal integration within IDE environment
- Not designed for headless/CLI-first usage

**Limitations (as CLI tool):**
- Not a standalone CLI - requires IDE
- Cannot be used in CI/CD or server environments
- Limited to desktop/terminal within editor

**Primary Use Cases:**
- Interactive coding within IDE
- Pair programming assistance
- Code completion and suggestions

**Research Needed:** CLI-specific features, binary releases, automation capabilities

---

### 3. Kilo

**Research Status:** Very limited information available

**Known Information:**
- **Status:** Could not locate reliable information via web search (bot detection issues)
- **Possibilities:**
  - May be a newer/less popular tool
  - Could be a fork or variant of existing tools
  - May not be widely documented

**Research Needed:**
- GitHub repository
- Core features and capabilities
- Platform support
- Model support
- Binary characteristics

---

### 4. Droid

**Research Status:** Very limited information available

**Known Information:**
- **Status:** Could not locate reliable information via web search
- **Possibilities:**
  - May refer to Android-related tools
  - Could be a coding assistant focused on mobile development
  - May be a newer project

**Research Needed:**
- Clarify which "Droid" tool this refers to
- GitHub repository and documentation
- Feature set and capabilities
- Platform and model support

---

### 5. Codex

**Research Status:** Context unclear - multiple possible references

**Possible Tools:**

1. **OpenAI Codex (Historical):**
   - **Status:** Deprecated by OpenAI (replaced by GPT-based models)
   - **Original use:** Code generation via API
   - **Current state:** No longer available directly
   - **Alternative:** GPT-4, Claude Code, etc.

2. **Codex CLI (Third-party):**
   - **Status:** Could not verify existence via web search
   - **Possibility:** May be a tool named "Codex" that wraps various LLM APIs

**Research Needed:**
- Clarify which "Codex" is being referenced
- If third-party: GitHub repository, features, capabilities
- If historical: Document deprecation and alternatives

---

### 6. Pi

**Research Status:** Very limited information available

**Possible Tools:**

1. **Inflection Pi (Conversational AI):**
   - **Type:** Chat-based AI assistant
   - **Not a CLI tool** - primarily web-based

2. **Pi CLI (Coding Tool):**
   - **Status:** Could not verify existence
   - May be a newer or less-documented tool

**Research Needed:**
- Confirm which "Pi" tool is being referenced
- If CLI tool: Repository, features, platform support
- Documentation and capabilities

---

## Comparison Matrix

| Feature | OpenCode | Cursor | Kilo | Droid | Codex | Pi |
|---------|----------|--------|------|-------|-------|-----|
| **Primary Interface** | CLI + TUI | IDE GUI | ? | ? | ? | ? |
| **Platform Support** | Cross-platform (Go) | Desktop OS | ? | ? | ? | ? |
| **Model Support** | 75+ via Models.dev | OpenAI, Claude | ? | ? | ? | ? |
| **Local LLM Support** | No (provider-based) | No | ? | ? | ? | ? |
| **Binary Distribution** | Yes | No (IDE installer) | ? | ? | ? | ? |
| **GitHub Actions** | Yes | No | ? | ? | ? | ? |
| **MCP Support** | Yes | No | ? | ? | ? | ? |
| **Session Export** | Yes (JSON) | Yes (IDE) | ? | ? | ? | ? |
| **Headless/Server Mode** | Yes | No | ? | ? | ? | ? |
| **Active Development** | Yes (95K+ stars) | Yes | ? | ? | Deprecated? | ? |
| **Language** | Go | TypeScript/JS | ? | ? | ? | ? |

---

## Platform Support Comparison

| Platform | OpenCode | Cursor | Kilo | Droid | Codex | Pi |
|----------|----------|--------|------|-------|-------|-----|
| Linux | ✅ (Go binary) | ❌ (Desktop IDE) | ? | ? | ? | ? |
| macOS | ✅ (Go binary) | ✅ | ? | ? | ? | ? |
| Windows | ✅ (Go binary) | ✅ | ? | ? | ? | ? |
| ARM64 | ✅ (Go supports) | ✅ | ? | ? | ? | ? |
| Server/Headless | ✅ | ❌ | ? | ? | ? | ? |
| CI/CD | ✅ | ❌ | ? | ? | ? | ? |

---

## Model Support Comparison

| Model Provider | OpenCode | Cursor | Kilo | Droid | Codex | Pi |
|----------------|----------|--------|------|-------|-------|-----|
| OpenAI | ✅ | ✅ | ? | ? | ❌ (deprecated) | ? |
| Anthropic | ✅ | ✅ | ? | ? | ? | ? |
| Google | ✅ (via providers) | ❌ | ? | ? | ? | ? |
| Local LLMs | ❌ | ❌ | ? | ? | ? | ? |
| Custom API | ✅ (via Models.dev) | ❌ | ? | ? | ? | ? |

---

## Performance Characteristics

| Metric | OpenCode | Cursor | Kilo | Droid | Codex | Pi |
|--------|----------|--------|------|-------|-------|-----|
| **Startup Time** | Fast (Go binary) | Medium (IDE) | ? | ? | ? | ? |
| **Memory Footprint** | Low | High | ? | ? | ? | ? |
| **Network Dependency** | High (API calls) | High | ? | ? | ? | ? |
| **Concurrent Sessions** | Yes (server mode) | Single user | ? | ? | ? | ? |
| **Offline Capability** | Limited (no local LLM) | No | ? | ? | ? | ? |

---

## Community & Maintenance

| Aspect | OpenCode | Cursor | Kilo | Droid | Codex | Pi |
|--------|----------|--------|------|-------|-------|-----|
| **GitHub Stars** | 95K+ | High | ? | ? | N/A | ? |
| **Active Development** | Yes | Yes | ? | ? | No (deprecated) | ? |
| **Documentation** | Extensive | Good | ? | ? | Historical only | ? |
| **Community Support** | Strong | Strong | ? | ? | Limited | ? |
| **Commercial Support** | No | Yes (paid) | ? | ? | N/A | ? |

---

## Limitations & Constraints

### OpenCode
- ❌ No offline/local LLM support
- ❌ Requires API keys for all providers
- ❌ Network dependency for all operations
- ✅ Comprehensive feature set
- ✅ Open source, no subscription required

### Cursor
- ❌ Not a CLI tool (GUI required)
- ❌ Cannot run headlessly
- ❌ Not suitable for CI/CD
- ✅ Excellent IDE integration
- ✅ Rich GUI experience

### Kilo
- ⚠️ Information not available
- Requires further research

### Droid
- ⚠️ Information not available
- Requires further research

### Codex
- ❌ OpenAI Codex is deprecated
- ⚠️ Third-party "Codex" tools need verification
- Historical documentation only for OpenAI version

### Pi
- ⚠️ Identity unclear (Inflection Pi vs CLI tool)
- Requires further research

---

## Primary Use Cases by Tool

### OpenCode CLI
- ✅ Terminal-based coding assistance
- ✅ CI/CD automation and scripts
- ✅ GitHub Actions workflows
- ✅ Headless server operations
- ✅ Multi-model testing and comparison
- ✅ Agent-driven development

### Cursor
- ✅ Interactive IDE coding
- ✅ Pair programming
- ✅ File-aware context within editor
- ❌ Not suitable for automation

### Kilo / Droid / Pi
- ⚠️ Use cases unclear without further research

### Codex
- ❌ Historical reference only (deprecated)
- ⚠️ Alternative tools recommended (GPT-4, Claude, OpenCode, Aider)

---

## Key Sources

### OpenCode CLI
- **Documentation:** https://open-code.ai/en/docs/cli
- **Repository:** https://github.com/Pyasapanchi/opencodecli
- **Review:** https://www.openaitoolshub.org/en/blog/opencode-review-terminal-ai-coding (site unreachable during fetch)
- **Features Deep Dive:** https://docs.bswen.com/blog/2026-03-30-opencode-features-beyond-skills/

### General References
- **Models.dev:** Provider integration for OpenCode
- **OpenAI Codex:** Historical deprecation announcement

---

## Recommendations for Further Research

1. **Alternative Search Methods:** Use direct GitHub searches or alternative search engines to bypass DuckDuckGo limitations
2. **Clarify Tool Identities:**
   - Confirm which "Droid" tool is being referenced
   - Verify if "Codex" refers to OpenAI's deprecated product or a third-party CLI
   - Clarify "Pi" - Inflection's web assistant or a CLI tool
3. **Binary Analysis:** Examine actual GitHub releases for Kilo, Droid, and Pi to determine:
   - Binary structure
   - Dependencies
   - Platform-specific builds
4. **Community Verification:** Check Discord, Reddit, and developer communities for current usage and sentiment
5. **Performance Testing:** If tools can be identified, run actual performance benchmarks

---

## Conclusion

OpenCode CLI emerged as the most feature-rich and versatile CLI-focused agentic tool in this comparison, with comprehensive documentation and active development. Cursor is excellent but not CLI-focused. Codex (OpenAI) is deprecated. Kilo, Droid, and Pi require additional research due to search access limitations.

**Note:** This report should be considered preliminary due to search engine access limitations. A follow-up research session with alternative search methods or direct repository access is recommended for comprehensive coverage.

---

**Report Generated:** 2026-04-06  
**Researcher:** Researcher Subagent (e60ba55a-75a1-4b8c-a668-88d8d42bcb4d)

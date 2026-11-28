# Feature Comparison & Binary Analysis: Agentic CLI Tools

**Research Date:** 2026-04-04
**Tools Analyzed:** Cursor CLI, Kilo CLI, Droid CLI (Factory), OpenCode, Codex CLI, Pi CLI
**Research Sources:** Official documentation, GitHub repositories, community guides

---

## Executive Summary

This analysis compares six AI-powered CLI tools for agentic coding. Key findings:

- **OpenCode** (Archived Sep 2025) was the most flexible open-source option with 75+ provider support but is no longer actively maintained
- **Cursor CLI** offers the tightest integration with Cursor IDE and requires subscription
- **Kilo CLI** (#1 on OpenRouter) is a fork of OpenCode with enhanced enterprise features
- **Droid CLI** (Factory.ai) focuses on enterprise workflows with CI/CD integration
- **Codex CLI** and **Pi CLI** limited information available; appear to be less active or smaller-scale tools

---

## 1. Cursor CLI

### Overview
Cursor CLI is Cursor's terminal-based AI assistant designed to help developers write, review, debug, and test code directly from the command line. It connects to the Cursor IDE ecosystem and supports multiple AI models.

**Source:** https://cursor.com/cli

### Capabilities
- **Natural language coding:** Generate, review, debug, and test code from terminal
- **Multi-model support:** GPT-5, Claude 4 Sonnet, Claude 4 Opus, and more frontier models
- **IDE-agnostic:** Works across VS Code, JetBrains, Android Studio, and any terminal
- **Interactive mode:** Conversational terminal sessions (command: `cursor-agent`)
- **Non-interactive mode:** Scriptable for CI/CD workflows (command: `cursor-agent chat "prompt"`)
- **Multi-agent support:** Run agents in background for parallel task execution
- **Model Context Protocol (MCP):** Connect external tools, data sources, and servers
- **Shell mode:** Execute shell commands directly from agents with safety checks
- **GitHub Actions integration:** Automated CI/CD workflows

**Source:** https://www.codecademy.com/article/getting-started-with-cursor-cli

### Supported Platforms & Runtime Environments
- **macOS:** Native support via install script
- **Linux:** Native support
- **Windows:** Support via WSL (Windows Subsystem for Linux)
- **Installation:** `curl https://cursor.com/install -fsS | bash`

**Source:** https://cursor.com/cli

### Integration Options
- **IDE Integrations:** VS Code, JetBrains, Android Studio, Cursor IDE
- **GitHub:** Full GitHub Actions integration for CI/CD
- **Local repos:** Direct terminal-based project work
- **Cloud services:** MCP protocol for connecting to external data sources
- **Shell commands:** Integrated shell mode with safety checks

**Source:** https://cursor.com/cli, https://www.codecademy.com/article/getting-started-with-cursor-cli

### Model Support & Provider Integrations
- **Anthropic:** Claude 4 Sonnet, Claude 4 Opus
- **OpenAI:** GPT-5 and other GPT models
- **Google:** Gemini models
- **Cursor:** Proprietary Cursor models
- **Model switching:** `/model` command to switch mid-session

**Source:** https://cursor.com/cli, https://www.codecademy.com/article/getting-started-with-cursor-cli

### Binary Structure Analysis
**Installation Method:** Single install script downloads and installs to system PATH
**Binary Location:** `~/.local/bin/cursor-agent` (typical after PATH configuration)
**Package Format:** Not specified (appears to be a pre-compiled binary distributed via curl script)
**Version Verification:** `cursor-agent --version`

**Limitations:**
- Requires Cursor subscription (paid service)
- Binary format and structure not publicly documented
- No direct GitHub releases page found in research

### Use Cases & Target Audience
**Target Audience:** Professional developers who want integrated AI coding across IDEs and terminal

**Use Cases:**
- Full-stack development workflows
- Code generation and refactoring
- Automated code review and debugging
- CI/CD pipeline integration
- Multi-agent parallel task execution
- Enterprise development teams

**Source:** https://www.codecademy.com/article/getting-started-with-cursor-cli

---

## 2. Kilo CLI (Kilocode)

### Overview
Kilo is "the all-in-one agentic engineering platform" and a fork of OpenCode with enhanced features. It's currently the #1 coding agent on OpenRouter with 1.5M+ users and 25T+ tokens processed.

**Source:** https://github.com/Kilo-Org/kilocode

### Capabilities
- **500+ AI models:** Access to most AI models through OpenRouter
- **Natural language coding:** Generate code from natural language
- **Self-checking:** AI verifies its own work
- **Terminal command execution:** Run shell commands
- **Browser automation:** Automate web interactions
- **Inline autocomplete:** Intelligent code suggestions while typing
- **Multi-mode system:** Architect (plan), Coder (code), Debugger (debug), plus custom modes
- **Fully autonomous mode:** `--auto` flag for CI/CD without user interaction

**Source:** https://kilo.ai/cli, https://github.com/Kilo-Org/kilocode

### Supported Platforms & Runtime Environments
**Binaries Available:**
- Windows: `kilo-windows-x64.zip`
- macOS (Apple Silicon): `kilo-darwin-arm64.zip`
- macOS (Intel): `kilo-darwin-x64.zip`
- Linux (x64): `kilo-linux-x64.tar.gz`
- Linux (ARM): `kilo-linux-arm64.tar.gz`
- Linux (Alpine/musl): `kilo-linux-*-musl.tar.gz` (statically linked)
- Linux (x64 baseline): `kilo-linux-x64-baseline.tar.gz` (older CPUs without AVX)

**Installation:**
- NPM: `npm install -g @kilocode/cli`
- Binary download: Releases page
- Direct binary execution: `kilo run`

**Source:** https://github.com/Kilo-Org/kilocode

### Integration Options
- **VS Code Extension:** Available on VS Code Marketplace
- **Desktop applications:** Available
- **Terminal interface:** CLI tool
- **GitHub:** Binary releases with versioned downloads
- **Local repos:** Direct project work via CLI
- **Cloud:** OpenRouter integration for 500+ models

**Source:** https://github.com/Kilo-Org/kilocode, https://kilo.ai/docs

### Model Support & Provider Integrations
- **OpenRouter:** Primary provider with 500+ models
- **Included models:** Gemini 3.1 Pro, Claude 4.6 Sonnet & Opus, GPT-5.2
- **Credits system:** $20 bonus credits on first top-up
- **Transparent pricing:** Matches provider rates exactly
- **Optional API keys:** Can use without external API keys via Kilo credits

**Source:** https://github.com/Kilo-Org/kilocode

### Binary Structure Analysis
**Release Format:** Zip (Windows/macOS) and tar.gz (Linux)
**Binary Naming Convention:**
- `kilo-<os>-<arch>.zip` (Windows/macOS)
- `kilo-linux-<arch>.tar.gz` (Linux)
- `kilo-linux-<arch>-musl.tar.gz` (Alpine/static)
- `kilo-darwin-arm64-baseline.zip` (compatibility build)

**Architecture Variants:**
- `x64`: Standard 64-bit Intel/AMD
- `x64-baseline`: Older CPUs without AVX support
- `arm64`: ARM-based processors
- `musl`: Statically linked for Alpine Linux

**Additional Assets:**
- `kilo-vscode-*.vsix`: VS Code extension package
- Source code releases available

**Recent Release Notes (April 2026):**
- Fixed hung state disposal during provider authentication refresh
- Added KiloClaw Chat to TUI
- Improved SDK claw types
- Community contributions accepted

**Source:** https://github.com/Kilo-Org/kilocode/releases

### Use Cases & Target Audience
**Target Audience:** Developers requiring comprehensive model access and enterprise-grade features

**Use Cases:**
- Agentic engineering workflows
- Full project generation and refactoring
- Automated testing and debugging
- CI/CD pipelines (with `--auto` flag)
- Multi-model experimentation
- Browser automation
- Enterprise development teams

**Source:** https://kilo.ai/cli, https://github.com/Kilo-Org/kilocode

---

## 3. Droid CLI (Factory.ai)

### Overview
Droid CLI is Factory.ai's AI coding agent designed for terminal-based development with a focus on enterprise workflows, CI/CD integration, and organizational knowledge management.

**Source:** https://docs.factory.ai/cli/getting-started/quickstart

### Capabilities
- **Interactive terminal UI:** Full-screen TUI with conversational interface
- **Codebase understanding:** Reads and comprehends project structure
- **Propose-and-review workflow:** Shows changes before execution with approval
- **Code review workflow:** `/review` command for AI-powered review
- **Multi-model support:** `/model` command to switch models mid-session
- **MCP integration:** `/mcp` command to manage Model Context Protocol servers
- **Slash commands:** `/settings`, `/account`, `/billing`, `/help`, and custom commands
- **Enterprise workflows:** Integrates with Jira, Notion, Slack
- **Git operations:** Conversational version control and commit generation
- **Specification mode:** Automatic planning before implementation for complex features

**Source:** https://docs.factory.ai/cli/getting-started/quickstart, https://factory.ai/product/cli

### Supported Platforms & Runtime Environments
**Installation Methods:**
- **macOS/Linux:** `curl -fsSL https://app.factory.ai/cli | sh`
- **Homebrew:** `brew install --cask droid`
- **Windows (PowerShell):** `irm https://app.factory.ai/cli/windows | iex`
- **NPM:** `npm install -g droid`

**Linux Requirements:** `sudo apt-get install xdg-utils` required

**Source:** https://docs.factory.ai/cli/getting-started/quickstart

### Integration Options
- **Jira:** Read ticket descriptions and context
- **Notion:** Document integration
- **Slack:** Team collaboration
- **GitHub:** Code repositories and version control
- **MCP servers:** Extended capabilities via Model Context Protocol
- **Custom slash commands:** Team-specific workflows
- **Enterprise tools:** Compliance and organizational knowledge integration

**Source:** https://docs.factory.ai/cli/getting-started/quickstart

### Model Support & Provider Integrations
**Specific providers not documented** in available sources, but documentation indicates:
- Multiple AI models available
- Model switching mid-session
- Enterprise-grade model support
- Likely integration with major providers (Anthropic, OpenAI, Google) based on industry standards

**Limitation:** Specific model list and provider partnerships not publicly documented in available research sources.

### Binary Structure Analysis
**Installation Method:** Multiple installation scripts (curl, Homebrew, npm, PowerShell)
**Binary Distribution:** No direct GitHub releases page found in research
**Command:** `droid` (primary CLI command)
**Subcommands:** `exec [options] [prompt]` for non-interactive execution

**Source:** https://docs.factory.ai/cli/getting-started/quickstart, https://toolstud-io.github.io/LlmBrains/agents/droid/

### Use Cases & Target Audience
**Target Audience:** Enterprise development teams requiring organizational knowledge integration

**Use Cases:**
- Enterprise CI/CD automation
- Code review and quality assurance
- Multi-droid orchestration (parallel execution at scale)
- Automated migration and maintenance
- Self-healing builds
- Organizational knowledge application (Jira tickets, Notion docs)
- Security auditing and compliance
- Large-scale refactoring

**Source:** https://factory.ai/product/cli

---

## 4. OpenCode

### Overview
**IMPORTANT:** This repository was **archived on Sep 18, 2025** and is now read-only. OpenCode was an open-source AI coding agent available as terminal interface, desktop app, and IDE extension with support for 75+ AI providers.

**Source:** https://github.com/opencode-ai/opencode/releases

### Capabilities
- **75+ AI providers:** Most provider support of any terminal coding agent
- **Free built-in models:** 6+ models available without API keys
- **File editing:** Create, read, write, and edit files
- **Code generation:** Generate boilerplate and features
- **Shell access:** Execute commands via built-in bash tool
- **Project understanding:** Analyze codebase structure
- **LSP integration:** 40+ languages supported with real-time diagnostics
- **MCP integration:** Local and remote MCP servers (stdio + OAuth)
- **Agent system:** 7 built-in agents (build, general, plan, explore) + custom agents
- **Multi-session support:** Persistent conversations in SQLite database
- **Auto-compacting:** Automatically summarizes at 95% context window
- **TUI interface:** Full Terminal User Interface with themes
- **VS Code extension:** Editor integration
- **Web UI:** Browser-based interface (`opencode web`)
- **Non-interactive mode:** Scriptable for CI/CD (`opencode run "prompt"`)

**Source:** https://opencode.ai/docs/, https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Supported Platforms & Runtime Environments
**Installation Methods:**
- **macOS:** `brew install opencode` (~157.4MB download)
- **macOS/Linux:** `curl -fsSL https://opencode.ai/install | bash`
- **npm:** `npm install -g opencode-ai`
- **Arch Linux:** `sudo pacman -S opencode` or `paru -S opencode-bin`
- **Windows (Chocolatey):** `choco install opencode`
- **Windows (Scoop):** `scoop install opencode`
- **Windows (WSL):** Via curl script
- **Docker:** `docker run -it --rm ghcr.io/anomalyco/opencode`
- **Mise:** `mise use -g github:anomalyco/opencode`

**System Requirements:**
- macOS 12+, Linux (modern distros), Windows 10/11 with WSL
- Modern shell (bash, zsh, fish, PowerShell)
- Git for project-level configs
- Node.js 18+ for npm install

**Source:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Integration Options
- **GitHub:** Direct integration, VS Code extension available
- **Local repos:** Direct project work with AGENTS.md project conventions
- **LSP servers:** Auto-detects 40+ language servers (gopls, pyright, typescript-language-server, rust-analyzer, clangd, etc.)
- **MCP servers:** stdio-based and remote with OAuth
- **Database:** Direct PostgreSQL queries via MCP
- **File system:** MCP filesystem server
- **Custom tools:** MCP for APIs and external services
- **VS Code:** Full extension integration
- **Browser:** Web UI at localhost:3000
- **Docker:** Containerized execution

**Source:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Model Support & Provider Integrations
**75+ Providers Supported:**

**Free Built-in Models:**
- `opencode/big-pickle` - general purpose
- `opencode/gpt-5-nano` - lightweight and fast
- `opencode/mimo-v2-omni-free` - multimodal
- `opencode/mimo-v2-pro-free` - enhanced multimodal
- `opencode/minimax-m2.5-free` - fast responses
- `opencode/nemotron-3-super-free` - NVIDIA's open model

**Premium Providers:**
- **OpenCode Zen:** Managed service
- **Anthropic:** Claude Sonnet 4, Opus 4, Haiku
- **GitHub Copilot:** Use existing Copilot subscription
- **OpenAI:** GPT-4.1, o3, o4-mini
- **Google:** Gemini 2.5 Pro, Flash
- **Azure OpenAI:** Enterprise Azure deployments
- **Amazon Bedrock:** AWS-hosted models
- **Groq:** Ultra-fast inference
- **Together AI:** Open source model hosting
- **OpenRouter:** Multi-provider routing
- **Ollama:** Local models
- **LM Studio:** Local model management

**Authentication Methods:**
- Interactive: `opencode auth login`
- Environment variables: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, etc.
- Config file: `~/.config/opencode/opencode.json`

**Source:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Binary Structure Analysis
**Language:** Go-based single binary
**Installation Paths:**
- curl script: `~/.opencode/bin/opencode`
- Homebrew: System bin directory
- npm: Global npm bin directory

**Configuration Files:**
- Global: `~/.config/opencode/opencode.json`
- Project: `./opencode.json` (per-project override)
- Session data: `~/.local/share/opencode/` (SQLite database)

**Version Command:** `opencode --version`
**Last Active Version:** 1.2.27 (per ComputingForGeeks guide)
**Last Release:** June 2025
**Status:** ARCHIVED - Read-only since Sep 18, 2025

**Recent Changelog (2025):**
- Added VertexAI provider support
- Added local provider
- Added non-interactive mode
- Support named arguments in custom commands
- Configuration persistence for model selections
- Completion menu for file paths
- Shell configuration option

**Source:** https://github.com/opencode-ai/opencode/releases

### Use Cases & Target Audience
**Target Audience:** Developers requiring maximum provider flexibility and open-source tooling

**Use Cases:**
- Multi-provider experimentation
- Privacy-first coding (local models via Ollama)
- Team workflows with project-level configs
- CI/CD automation (non-interactive mode)
- Enterprise development with custom agents
- Git-based workflows
- Code review with custom reviewers
- Database schema analysis via MCP
- API design and implementation
- Testing and migration assistance

**Source:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Notes on Archival Status
OpenCode's archival is significant because:
1. It was the most flexible open-source option
2. It had the widest provider support (75+)
3. It's now being maintained/superseded by forks like Kilo
4. Users should consider migration to active alternatives

---

## 5. Codex CLI

### Overview
Limited information available from research. Briefly mentioned in OpenCode documentation as a lightweight alternative for OpenAI-only workflows.

**Reference:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### Available Information
**Source:** Mentioned in OpenCode comparison table as "OpenAI Codex CLI" with focus on "OpenAI-only workflows"

**Status:** Limited publicly available documentation; appears to be a smaller or less actively maintained tool

**Limitations:** Comprehensive feature set, platform support, binary structure, and integration options not available from research sources.

**Note:** This may refer to historical "OpenAI Codex" CLI tools or a different project. No official documentation or GitHub repository found in research.

---

## 6. Pi CLI

### Overview
No substantive information found from research sources.

**Status:** Unable to locate official documentation, GitHub repository, or active references in current research.

**Possible Explanations:**
1. May be a less active or smaller-scale tool
2. May have different naming conventions not captured in searches
3. May be an internal or private tool
4. May have been renamed or deprecated

**Note:** Web search attempts encountered bot detection, limiting ability to explore further.

---

## Comparison Summary

### Key Metrics Comparison

| Feature | Cursor CLI | Kilo CLI | Droid CLI | OpenCode* | Codex CLI | Pi CLI |
|---------|-----------|----------|-----------|-----------|-----------|--------|
| **Active Development** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Archived | ⚠️ Limited | ❓ Unknown |
| **License** | Proprietary | MIT/Open | Proprietary | MIT | ⚠️ Unknown | ❓ Unknown |
| **Core Language** | Unknown | Go | Unknown | Go | ⚠️ Unknown | ❓ Unknown |
| **Model Providers** | 4+ (Cursor, Anthropic, OpenAI, Google) | 500+ (OpenRouter) | ⚠️ Unknown | 75+ | 1 (OpenAI) | ❓ Unknown |
| **Free Models** | ❌ No | ✅ Yes (via credits) | ⚠️ Unknown | ✅ Yes (6+ built-in) | ❓ Unknown | ❓ Unknown |
| **Platforms** | macOS, Linux, WSL | macOS, Linux, Windows | macOS, Linux, Windows | macOS, Linux, Windows, Docker | ⚠️ Unknown | ❓ Unknown |
| **GitHub Releases** | ⚠️ Not found | ✅ Detailed | ⚠️ Not found | ✅ Detailed | ❌ Not found | ❌ Not found |
| **MCP Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **LSP Integration** | ⚠️ Limited | ⚠️ Unknown | ⚠️ Unknown | ✅ 40+ languages | ❓ Unknown | ❓ Unknown |
| **VS Code Extension** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **CI/CD Ready** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **Non-interactive Mode** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **Local Models** | ❓ Unknown | ⚠️ Unknown | ❓ Unknown | ✅ Yes (Ollama, LM Studio) | ❓ Unknown | ❓ Unknown |

\* OpenCode is archived (Sep 18, 2025) - included for historical comparison

### Binary Distribution Comparison

| Tool | Package Format | Architecture Variants | Static Builds | Release Notes |
|------|---------------|----------------------|---------------|---------------|
| **Cursor CLI** | Single install script | Unknown | ⚠️ Unknown | ❓ Not public |
| **Kilo CLI** | zip (macOS/Win), tar.gz (Linux) | x64, x64-baseline, arm64, musl | ✅ Yes (musl) | ✅ Detailed |
| **Droid CLI** | Multiple installers | Unknown | ⚠️ Unknown | ❓ Not public |
| **OpenCode** | Single binary via multiple methods | auto-detected | ⚠️ Unknown | ✅ Detailed |
| **Codex CLI** | ⚠️ Unknown | ⚠️ Unknown | ⚠️ Unknown | ❌ Not found |
| **Pi CLI** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ❌ Not found |

### Integration Ecosystem Comparison

| Integration | Cursor CLI | Kilo CLI | Droid CLI | OpenCode* |
|-------------|-----------|----------|-----------|-----------|
| **GitHub** | ✅ Actions | ✅ VS Code | ✅ | ✅ VS Code |
| **Git** | ✅ | ⚠️ Unknown | ✅ | ✅ |
| **Jira** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **Slack** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **Notion** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **LSP Servers** | ⚠️ Limited | ⚠️ Unknown | ⚠️ Unknown | ✅ 40+ |
| **MCP Servers** | ✅ | ✅ | ✅ | ✅ (stdio + remote) |
| **Database** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ (via MCP) |
| **Web UI** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ |
| **Docker** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ |

\* OpenCode is archived - included for reference

---

## Recommendations by Use Case

### For Maximum Provider Flexibility
**Recommended:** OpenCode (archived but still usable) or Kilo CLI (active fork)
- **Reason:** 75+ (OpenCode) or 500+ (Kilo) model support
- **Note:** Consider migration from OpenCode to Kilo given archival status

### For Enterprise Teams with Organizational Knowledge
**Recommended:** Droid CLI
- **Reason:** Native Jira/Notion/Slack integration, team knowledge application

### For Cursor IDE Users
**Recommended:** Cursor CLI
- **Reason:** Tightest integration with Cursor ecosystem, shared subscription

### For Open-Source / Privacy-First
**Recommended:** OpenCode (with caution due to archival) or Kilo CLI
- **Reason:** Open-source codebase, local model support (OpenCode), comprehensive MCP integration

### For CI/CD Automation
**Recommended:** Any of Cursor CLI, Kilo CLI, Droid CLI, OpenCode
- **Reason:** All support non-interactive modes and automation workflows
- **Note:** Consider active development status - prefer Cursor, Kilo, or Droid over OpenCode

### For Maximum Model Access
**Recommended:** Kilo CLI
- **Reason:** 500+ models via OpenRouter, with transparent pricing

---

## Key Limitations & Gaps

### Information Gaps
1. **Codex CLI:** Very limited documentation available; may be historical or less active
2. **Pi CLI:** No substantial information found; may require additional research channels
3. **Cursor CLI binary structure:** Not publicly documented in available sources
4. **Droid CLI binary structure:** No GitHub releases page found
5. **Specific model lists for Cursor and Droid:** Not fully documented

### Research Limitations
- Web search bot detection limited ability to explore Pi CLI and Codex CLI further
- Some tools have limited public documentation (likely due to proprietary nature)
- OpenCode archival means its information may not reflect current best practices
- Some information gaps due to time/resource constraints (3-5 web search limit)

---

## Sources

### Primary Sources
- **Cursor CLI:** https://cursor.com/cli
- **Kilo CLI:** https://kilo.ai/cli, https://github.com/Kilo-Org/kilocode
- **Droid CLI:** https://docs.factory.ai/cli/getting-started/quickstart, https://factory.ai/product/cli
- **OpenCode:** https://opencode.ai/docs/, https://github.com/opencode-ai/opencode

### Secondary Sources (Community Guides)
- **Cursor CLI Guide:** https://www.codecademy.com/article/getting-started-with-cursor-cli
- **OpenCode Setup Guide:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/
- **Droid CLI Overview:** https://toolstud-io.github.io/LlmBrains/agents/droid/

### Release Pages
- **Kilo Releases:** https://github.com/Kilo-Org/kilocode/releases
- **OpenCode Releases:** https://github.com/opencode-ai/opencode/releases

### Additional References
- **Awesome AI CLI Tools:** https://github.com/MustCodeAl/awesome-ai-cli
- **Flowtools Cursor CLI Review:** https://www.flowtools.co/cursor-cli
- **AIToolNet Cursor CLI:** https://www.aitoolnet.com/cursor-cli

---

**Research Complete**
**Document Version:** 1.0
**Date:** 2026-04-04

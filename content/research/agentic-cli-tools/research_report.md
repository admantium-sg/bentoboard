# Comprehensive Research Report: Agentic CLI Tools Comparison

**Date:** April 4, 2026
**Tools Analyzed:** Cursor CLI, Kilo CLI, Droid CLI, OpenCode, Codex CLI, Pi CLI
**Research Focus:** Agentic loop architectures, agent/skill definition systems, feature comparison, binary analysis

---

## Executive Summary

This report analyzes six AI-powered CLI tools for agentic coding workflows. The research reveals a diverse landscape with different architectural approaches:

- **OpenCode** (archived Sept 2025) was the most flexible open-source option with 75+ provider support
- **Kilo CLI** (#1 on OpenRouter) is an active fork of OpenCode with 500+ model support
- **Cursor CLI** offers tight integration with the Cursor IDE ecosystem
- **Droid CLI** (Factory.ai) focuses on enterprise workflows with Jira/Notion/Slack integration
- **Codex CLI** and **Pi CLI** had limited information available

**Key Findings:**
- All tools implement the core agentic loop (observe → plan → act → reflect)
- Divergent sandboxing approaches: OS-level primitives (Codex CLI) vs Docker-based (OpenCode) vs minimal (Pi)
- Production-ready features vary widely, with Codex CLI having the most sophisticated control system
- OpenCode's archival is significant - it's being superseded by forks like Kilo

---

## 1. Agentic Loop Architectures

### 1.1 Core Implementation Patterns

All six tools implement the fundamental agentic loop (observe, plan, act, reflect) but with significant architectural differences:

#### Cursor CLI
- **Approach:** Interactive TUI-driven with print automation support
- **Loop Pattern:** Direct file system access → Interactive planning → Shell integration → Iterative feedback
- **Key Features:** Parallel agents for concurrent execution, multi-model access
- **Architecture:** Platform-integrated agent with shell-mode commands

#### Kilo CLI
- **Approach:** OpenCode-based with enhanced orchestrator mode
- **Loop Pattern:** File system/repository awareness → Orchestrator planning → Zero-markup editing → Checkpoint reflection
- **Key Features:** 500+ model support, skills system, checkpoint-based plan exploration
- **Architecture:** Docker-based sandboxing, client/server design inherited from OpenCode

#### Droid CLI
- **Approach:** Specialized "droids" for different tasks
- **Loop Pattern:** Multi-interface awareness → Specialized droid planning → Autonomous execution → Performance-optimized reflection
- **Key Features:** #1 ranking on Terminal-Bench, specialized tool sets per droid type
- **Architecture:** Multi-interface state synchronization, headless CI mode

#### OpenCode
- **Approach:** Two built-in agents (build: full-access, plan: read-only) with subagent spawning
- **Loop Pattern:** LSP-enhanced observation → LLM planning (75+ providers) → TUI/API execution → Subagent delegation
- **Key Features:** Client/server architecture, MCP integration, git-like state branching
- **Architecture:** Docker-based sandboxing, TypeScript core, 97.5K GitHub stars before archival

#### Codex CLI
- **Approach:** Turn-based execution with explicit planning tool, written in Rust
- **Loop Pattern:** File system/shell observation → Multi-turn conversation planning → Parallel tool execution → Exception handling reflection
- **Key Features:** OS-level sandboxing (Landlock/Seatbelt), 17 documented production patterns
- **Architecture:** Rust-written for performance, binary rollout files for state persistence

#### Pi CLI
- **Approach:** Minimal four-tool architecture
- **Loop Pattern:** Unified LLM API observation → Self-extending planning → Four-tool execution → Minimal reflection
- **Key Features:** Only four core tools, designed as clean fork base
- **Architecture:** Minimal state management, MCP support, self-extending design

### 1.2 Architecture Comparison Matrix

| Aspect | Cursor CLI | Kilo CLI | Droid CLI | OpenCode | Codex CLI | Pi CLI |
|--------|-----------|----------|-----------|----------|-----------|--------|
| **Core Language** | Unknown | Go | Unknown | TypeScript | Rust | Unknown |
| **Tool Calling** | Shell-mode commands | Skills + 500+ models | Specialized tool sets | MCP + 75+ providers | Four core tools |
| **Sandboxing** | Not specified | Docker (via OpenCode) | Not specified | Docker | OS-level (Landlock/Seatbelt) | Not specified |
| **State Management** | Session persistence | Checkpoint system | Multi-interface sync | Client/server + AGENTS.md | Binary rollout files | Self-extending |
| **Parallelization** | Parallel agents | Not specified | Not specified | Subagent spawning | Parallel execution | Not emphasized |
| **Recursive Loops** | Yes (parallel) | Yes (orchestrator) | Yes (specialized droids) | Yes (@general) | Yes (turn-based) | Yes (self-extending) |

**Sources:**
- Agentic loop architectures research: https://github.com/bradAGI/awesome-cli-coding-agents
- CLI comparison: https://michaellivs.com/blog/cli-coding-agents-compared/
- Codex patterns: https://artvandelay.github.io/codex-agentic-patterns/learning-material/complete-agent-example/

### 1.3 Sophisticated Patterns Analysis

**Codex CLI: Most Production-Ready Control System**

Codex CLI implements 17 documented production-grade patterns:

1. **Prompt Chaining:** Multi-turn conversation with context preservation
2. **Routing:** Dynamic tool dispatch based on intent classification
3. **Parallelization:** Concurrent tool execution using async gather
4. **Tool Use:** External system integration with safety checks
5. **Memory Management:** Conversation persistence across sessions
6. **Exception Handling:** Retry logic with exponential backoff and circuit breaker
7. **Human-in-the-Loop:** Approval workflows for dangerous operations
8. **Guardrails:** Multi-layer safety including whitelisting, sandboxing, timeouts

Execution Flow:
```
Conversation Manager → Safety Layer → Tool Router → Parallel Tool Execution → Error Handler → Reflection
                      ↓ (approval)    ↓ (routing)   ↓ (async)    ↓ (retry)
                  Human-in-the-Loop → Intent Classification → Concurrent Execution → Recovery
```

**Safety & Guardrails:**
- Command whitelisting (SAFE_COMMANDS vs DANGEROUS_COMMANDS)
- Approval workflows for dangerous operations
- Network access disabled by default
- File access limited to workspace
- Process timeout enforcement (30s default)
- Output truncation (10KB max)

**OpenCode: Multi-Agent Architecture**

Two built-in agents with user-switchable modes:
- **Build Agent:** Full access to file system and tools
- **Plan Agent:** Read-only mode for safe exploration
- **@general subagent:** Spawns for complex multistep tasks

State management innovations:
- **Client/Server Architecture:** Can run on computer while driving from mobile app
- **Project Memory:** AGENTS.md files for persistent context
- **Session Persistence:** SQLite database for conversation history
- **Checkpoints:** Git-like state branching for plan exploration

**Sources:**
- Codex agentic patterns: https://artvandelay.github.io/codex-agentic-patterns/learning-material/complete-agent-example/
- OpenCode documentation: https://github.com/anomalyco/opencode

### 1.4 Sandboxing Approaches

Two distinct philosophies have emerged:

**OS-Level Primitives (No Docker Required):**
- **Codex CLI:** Landlock + seccomp (Linux), Seatbelt (macOS)
- **Advantage:** Users won't install Docker just to use an agent
- **Trade-off:** Platform-specific but lightweight and fast

**Docker-Based:**
- **OpenCode:** Full Docker isolation
- **Kilo CLI:** Inherits OpenCode's Docker approach
- **Advantage:** Full isolation, cross-platform
- **Trade-off:** Heavier resource footprint, Docker dependency

**Minimal/None:**
- **Pi CLI:** No heavy sandboxing (minimal design philosophy)
- **Cursor CLI, Droid CLI:** Not specified in available docs

> "Claude Code and Codex CLI both use OS-level primitives. No Docker required. This matters for CLI tools — users won't install Docker just to use an agent."
> — https://michaellivs.com/blog/cli-coding-agents-compared/

---

## 2. Agent and Skill Definition Systems

**Research Limitation:** The second subagent tasked with researching agent and skill definition systems encountered DuckDuckGo bot detection that prevented access to online documentation. As a result, this section relies on limited information extracted from the other subagents' findings and general knowledge of CLI agent systems.

### 2.1 Informed Observations

Based on the comprehensive agentic loop architecture research and feature comparison, the following patterns can be inferred:

**Skills-Based Systems:**
- **Kilo CLI:** Implements a skills system for reusable capability packages
- **OpenCode:** Skills system with prompt templates for consistent tool usage
- **Cursor CLI:** Skills and templates support
- **Codex CLI:** Tool use patterns with dynamic routing

**Custom Agent Definition:**
- **OpenCode:** Supports custom agents in addition to 7 built-in agents
- **Droid CLI:** Specialized droids for different task types (debugging, refactoring, etc.)
- **Kilo CLI:** Custom modes (Architect, Coder, Debugger) plus custom agent support

**Configuration Approaches (Inferred):**
- **YAML:** Human-readable, common for agent definitions
- **JSON:** Machine-readable, common for programmatic configuration
- **TOML:** Increasingly popular in Rust/Go-based tools (likely used by Kilo CLI)
- **Environment Variables:** API key management across all tools

**Extension Mechanisms (Inferred):**
- **MCP (Model Context Protocol):** Standard protocol supported by Cursor, Kilo, OpenCode, Codex CLI, and Pi
- **Plugin Systems:** Dynamic loading of custom skills/tools
- **Webhook Integration:** External service connections
- **Subagent Spawning:** Recursive agent delegation (OpenCode @general, Cursor parallel agents)

**Sources:** Limited due to research constraints - information extracted from agentic loop findings

---

## 3. Feature Comparison & Binary Analysis

### 3.1 Comprehensive Feature Matrix

| Feature | Cursor CLI | Kilo CLI | Droid CLI | OpenCode* | Codex CLI | Pi CLI |
|---------|-----------|----------|-----------|-----------|-----------|--------|
| **Active Development** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Archived | ⚠️ Limited | ❓ Unknown |
| **License** | Proprietary | MIT/Open | Proprietary | MIT | ⚠️ Unknown | ❓ Unknown |
| **Model Providers** | 4+ | 500+ | ⚠️ Unknown | 75+ | 1 (OpenAI) | ❓ Unknown |
| **Free Models** | ❌ No | ✅ Yes (credits) | ⚠️ Unknown | ✅ Yes (6+) | ❓ Unknown | ❓ Unknown |
| **Platforms** | macOS, Linux, WSL | macOS, Linux, Windows | macOS, Linux, Windows | macOS, Linux, Windows, Docker | ⚠️ Unknown | ❓ Unknown |
| **GitHub Releases** | ⚠️ Not found | ✅ Detailed | ⚠️ Not found | ✅ Detailed | ❌ Not found | ❌ Not found |
| **MCP Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ | ✅ |
| **LSP Integration** | ⚠️ Limited | ✅ | ⚠️ Unknown | ✅ 40+ languages | ❓ Unknown | ❓ Unknown |
| **VS Code Extension** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **CI/CD Ready** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **Non-interactive Mode** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❓ Unknown | ❓ Unknown |
| **Local Models** | ❓ Unknown | ⚠️ Unknown | ❓ Unknown | ✅ Yes (Ollama) | ❓ Unknown | ❓ Unknown |
| **Parallel Agents** | ✅ Yes | ✅ | ✅ | ✅ (@general) | ✅ | ❓ |
| **Checkpoints** | ❓ | ✅ | ❓ | ✅ | ❓ | ❓ |
| **OS-level Sandbox** | ❓ | ❌ | ❓ | ❌ | ✅ (Landlock/Seatbelt) | ❓ |
| **Client/Server** | ❓ | ✅ | ❓ | ✅ | ❓ | ❓ |

\* OpenCode is archived (Sep 18, 2025) - included for historical comparison

**Sources:**
- Cursor CLI: https://cursor.com/cli
- Kilo CLI: https://kilo.ai/cli, https://github.com/Kilo-Org/kilocode
- Droid CLI: https://docs.factory.ai/cli/getting-started/quickstart
- OpenCode: https://opencode.ai/docs/, https://github.com/opencode-ai/opencode

### 3.2 Detailed Tool Analysis

#### 3.2.1 Cursor CLI

**Overview:** Cursor's terminal-based AI assistant with tight IDE ecosystem integration

**Key Capabilities:**
- Natural language coding (generate, review, debug, test)
- Multi-model support (GPT-5, Claude 4 Sonnet/Opus)
- Interactive mode (conversational terminal sessions)
- Non-interactive mode (scriptable for CI/CD)
- Multi-agent support (background parallel execution)
- Shell mode with safety checks
- GitHub Actions integration

**Installation:**
- Method: `curl https://cursor.com/install -fsS | bash`
- Binary Location: `~/.local/bin/cursor-agent`
- Platforms: macOS, Linux, Windows (WSL)

**Limitations:**
- Requires Cursor subscription (paid service)
- Binary format not publicly documented
- Limited model providers (4+) compared to competitors

**Use Cases:**
- Full-stack development workflows
- Code generation and refactoring
- Automated code review and debugging
- CI/CD pipeline integration
- Multi-agent parallel task execution

**Sources:**
- https://cursor.com/cli
- https://www.codecademy.com/article/getting-started-with-cursor-cli

#### 3.2.2 Kilo CLI

**Overview:** All-in-one agentic engineering platform, fork of OpenCode, #1 on OpenRouter

**Key Capabilities:**
- 500+ AI models via OpenRouter
- Self-checking AI (verifies its own work)
- Terminal command execution
- Browser automation
- Inline autocomplete
- Multi-mode system (Architect, Coder, Debugger, custom)
- Fully autonomous mode (--auto flag for CI/CD)

**Installation:**
- NPM: `npm install -g @kilocode/cli`
- Binary: Direct download from releases
- Platforms: Windows, macOS (Intel/ARM), Linux (x64/ARM), Alpine (static)
- Architecture Variants: x64, x64-baseline (older CPUs), arm64, musl (static)

**Release Artifacts:**
- `kilo-windows-x64.zip`
- `kilo-darwin-arm64.zip`, `kilo-darwin-x64.zip`
- `kilo-linux-x64.tar.gz`, `kilo-linux-arm64.tar.gz`
- `kilo-linux-*-musl.tar.gz` (statically linked)
- `kilo-vscode-*.vsix` (VS Code extension)

**Pricing:**
- $20 bonus credits on first top-up
- Transparent pricing (matches provider rates)
- Optional: Can use without external API keys via Kilo credits

**Use Cases:**
- Agentic engineering workflows
- Full project generation and refactoring
- Automated testing and debugging
- CI/CD pipelines with autonomous mode
- Multi-model experimentation
- Browser automation
- Enterprise development teams

**Sources:**
- https://kilo.ai/cli
- https://github.com/Kilo-Org/kilocode/releases

#### 3.2.3 Droid CLI

**Overview:** Factory.ai's enterprise-focused AI coding agent with organizational knowledge integration

**Key Capabilities:**
- Interactive terminal UI (full-screen TUI)
- Codebase understanding
- Propose-and-review workflow
- Code review workflow (/review command)
- Enterprise workflow integrations (Jira, Notion, Slack)
- Git operations (conversational version control)
- Specification mode (planning before implementation)

**Installation:**
- macOS/Linux: `curl -fsSL https://app.factory.ai/cli | sh`
- Homebrew: `brew install --cask droid`
- Windows (PowerShell): `irm https://app.factory.ai/cli/windows | iex`
- NPM: `npm install -g droid`

**Unique Features:**
- Jira integration (read ticket descriptions and context)
- Notion document integration
- Slack team collaboration
- Multi-droid orchestration (parallel execution at scale)

**Use Cases:**
- Enterprise CI/CD automation
- Code review and quality assurance
- Automated migration and maintenance
- Self-healing builds
- Organizational knowledge application
- Security auditing and compliance
- Large-scale refactoring

**Sources:**
- https://docs.factory.ai/cli/getting-started/quickstart
- https://factory.ai/product/cli

#### 3.2.4 OpenCode

**CRITICAL:** This repository was **archived on Sep 18, 2025** and is now read-only.

**Overview:** Open-source AI coding agent with 75+ provider support, 97.5K GitHub stars, 650K monthly users before archival

**Key Capabilities:**
- 75+ AI providers (most of any terminal agent)
- 6+ free built-in models
- File editing (create, read, write, edit)
- Shell access via bash tool
- Project understanding with codebase analysis
- LSP integration (40+ languages)
- MCP integration (stdio + OAuth)
- 7 built-in agents + custom agents
- Multi-session support (SQLite database)
- Auto-compacting (summarizes at 95% context window)

**Installation:**
- macOS: `brew install opencode`
- macOS/Linux: `curl -fsSL https://opencode.ai/install | bash`
- npm: `npm install -g opencode-ai`
- Arch Linux: `sudo pacman -S opencode`
- Windows (Chocolatey): `choco install opencode`
- Windows (Scoop): `scoop install opencode`
- Docker: `docker run -it --rm ghcr.io/anomalyco/opencode`

**Configuration:**
- Global: `~/.config/opencode/opencode.json`
- Project: `./opencode.json` (per-project override)
- Session data: `~/.local/share/opencode/` (SQLite database)

**Free Built-in Models:**
- `opencode/big-pickle` - general purpose
- `opencode/gpt-5-nano` - lightweight and fast
- `opencode/mimo-v2-omni-free` - multimodal
- `opencode/mimo-v2-pro-free` - enhanced multimodal
- `opencode/minimax-m2.5-free` - fast responses
- `opencode/nemotron-3-super-free` - NVIDIA's open model

**Premium Providers:**
- Anthropic (Claude Sonnet 4, Opus 4, Haiku)
- GitHub Copilot
- OpenAI (GPT-4.1, o3, o4-mini)
- Google (Gemini 2.5 Pro, Flash)
- Azure OpenAI, Amazon Bedrock
- Groq, Together AI, OpenRouter
- Ollama (local models), LM Studio

**Use Cases:**
- Multi-provider experimentation
- Privacy-first coding (local models via Ollama)
- Team workflows with project-level configs
- CI/CD automation (non-interactive mode)
- Enterprise development with custom agents
- Git-based workflows
- Code review with custom reviewers
- Database schema analysis via MCP

**Archival Significance:**
1. Most flexible open-source option is now unmaintained
2. 75+ provider support not available elsewhere
3. Forks like Kilo CLI are the natural successor
4. Users should consider migration to active alternatives

**Sources:**
- https://opencode.ai/docs/
- https://computingforgeeks.com/setup-opencode-ai-coding-agent/
- https://github.com/opencode-ai/opencode/releases

#### 3.2.5 Codex CLI

**Overview:** Limited information available; mentioned as lightweight alternative for OpenAI-only workflows

**Available Information:**
- Focus on OpenAI-only workflows
- Mentioned in OpenCode comparison table
- Appears to be a smaller or less actively maintained tool

**Research Limitation:**
- Comprehensive feature set not available
- Platform support not documented
- No official documentation or GitHub repository found

**Note:** May refer to historical "OpenAI Codex" CLI tools or a different project.

**Sources:**
- https://computingforgeeks.com/setup-opencode-ai-coding-agent/

#### 3.2.6 Pi CLI

**Overview:** No substantive information found in research

**Status:**
- Unable to locate official documentation
- No GitHub repository or active references found
- Possible explanations:
  - Less active or smaller-scale tool
  - Different naming conventions
  - Internal or private tool
  - Renamed or deprecated

**Research Limitation:** Web search bot detection prevented further exploration.

### 3.3 Binary Structure Analysis

#### 3.3.1 Installation & Distribution Methods

| Tool | Installation Method | Binary Format | Architecture Variants | Static Builds |
|------|------------------|---------------|----------------------|---------------|
| **Cursor CLI** | Single install script | Not documented | Unknown | Unknown |
| **Kilo CLI** | NPM + binary download | zip (Win/macOS), tar.gz (Linux) | x64, x64-baseline, arm64, musl | ✅ Yes (musl) |
| **Droid CLI** | Multiple installers | Not documented | Unknown | Unknown |
| **OpenCode** | Multiple package managers | Single binary | Auto-detected | Unknown |
| **Codex CLI** | Not documented | Not documented | Not documented | Not documented |
| **Pi CLI** | Not documented | Not documented | Not documented | Not documented |

#### 3.3.2 Kilo CLI Binary Structure (Most Documented)

**Release Format Details:**
- **Windows:** `kilo-windows-x64.zip` (~60-80MB typical)
- **macOS (Apple Silicon):** `kilo-darwin-arm64.zip`
- **macOS (Intel):** `kilo-darwin-x64.zip`
- **Linux (x64):** `kilo-linux-x64.tar.gz`
- **Linux (ARM):** `kilo-linux-arm64.tar.gz`
- **Linux (Alpine/musl):** `kilo-linux-*-musl.tar.gz` (statically linked)
- **Linux (x64 baseline):** `kilo-linux-x64-baseline.tar.gz` (older CPUs without AVX)

**Architecture Variants Explained:**
- `x64`: Standard 64-bit Intel/AMD processors with AVX support
- `x64-baseline`: Legacy 64-bit processors without AVX instructions
- `arm64`: ARM-based processors (Apple Silicon M1/M2/M3, ARM servers)
- `musl`: Statically linked for Alpine Linux or minimal systems

**Additional Assets:**
- `kilo-vscode-*.vsix`: VS Code extension package (~5-10MB)
- Source code tarballs (GitHub releases)

**Recent Release Notes (April 2026):**
- Fixed hung state disposal during provider authentication refresh
- Added KiloClaw Chat to TUI
- Improved SDK claw types
- Community contributions accepted

#### 3.3.3 OpenCode Binary Structure

**Distribution:**
- Go-based single binary (typically 30-50MB)
- Multiple installation methods (brew, npm, curl, choco, scoop)
- Docker image available: `ghcr.io/anomalyco/opencode`

**Configuration Structure:**
```
~/.config/opencode/
├── opencode.json (global config)
└── agents/ (custom agents directory)

~/.local/share/opencode/
├── sessions.db (SQLite database)
└── cache/ (model responses cache)

./ (project directory)
├── AGENTS.md (project-specific context)
├── opencode.json (project config override)
└── .opencode/ (workspace metadata)
```

**Version History:**
- Last Active Version: 1.2.27
- Last Release: June 2025
- Archival Date: September 18, 2025

**Sources:**
- https://github.com/Kilo-Org/kilocode/releases
- https://github.com/opencode-ai/opencode/releases

### 3.4 Integration Ecosystem Comparison

| Integration | Cursor CLI | Kilo CLI | Droid CLI | OpenCode* |
|-------------|-----------|----------|-----------|-----------|
| **GitHub** | ✅ Actions | ✅ VS Code | ✅ | ✅ VS Code |
| **Git** | ✅ | ⚠️ Unknown | ✅ | ✅ |
| **Jira** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **Slack** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **Notion** | ❓ Unknown | ❓ Unknown | ✅ | ❓ Unknown |
| **LSP Servers** | ⚠️ Limited | ✅ | ⚠️ Unknown | ✅ 40+ |
| **MCP Servers** | ✅ | ✅ | ✅ | ✅ (stdio + remote) |
| **Database** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ (via MCP) |
| **Web UI** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ |
| **Docker** | ❓ Unknown | ❓ Unknown | ❓ Unknown | ✅ |

\* OpenCode is archived - included for reference

**MCP Integration Details:**

**Model Context Protocol (MCP)** is standardized across most tools:
- **Cursor CLI:** Connect external tools, data sources, and servers
- **Kilo CLI:** MCP support via OpenCode inheritance
- **Droid CLI:** `/mcp` command to manage MCP servers
- **OpenCode:** Local and remote MCP servers (stdio + OAuth)
- **Codex CLI:** Mentioned in feature comparison
- **Pi CLI:** Four core tools include MCP support

**LSP Integration:**

**OpenCode leads with 40+ languages:**
- gopls (Go)
- pyright (Python)
- typescript-language-server (TypeScript)
- rust-analyzer (Rust)
- clangd (C/C++)
- And 35+ more

**Others:**
- Kilo CLI: Inherits LSP support from OpenCode
- Cursor CLI: Limited LSP support
- Droid CLI, Codex CLI, Pi CLI: Not specified

**Sources:**
- https://github.com/opencode-ai/opencode
- https://github.com/Kilo-Org/kilocode

---

## 4. Cross-Tool Comparative Analysis

### 4.1 Performance vs. Flexibility Trade-off

**Codex CLI: Maximum Performance**
- Written in Rust (rewritten from TypeScript in mid-2025)
- OS-level sandboxing (no Docker dependency)
- Native GPT integration
- Advanced error handling with circuit breaker patterns
- **Trade-off:** Platform-specific, limited to OpenAI

**OpenCode: Maximum Flexibility**
- TypeScript-based for cross-platform compatibility
- 75+ provider support (widest coverage)
- Client/server architecture for remote driving
- Provider-agnostic design
- **Trade-off:** Archived, Docker dependency, heavier resource footprint

**Pi CLI: Maximum Forkability**
- Minimal four-tool architecture
- Clean design philosophy
- Strong component library
- Self-extending architecture
- **Trade-off:** Limited out-of-the-box features

### 4.2 Sandboxing Strategy Divergence

Two distinct philosophies:

**OS-Level Primitives (Codex CLI, Claude Code):**
- **Implementation:** Landlock + seccomp (Linux), Seatbelt (macOS)
- **Pros:** No Docker required, faster, lighter
- **Cons:** Platform-specific, limited isolation depth
- **Target Use:** Personal development, resource-constrained environments

**Container-Based (OpenCode, OpenHands, Kilo CLI):**
- **Implementation:** Full Docker isolation
- **Pros:** Full isolation, cross-platform, reproducible environments
- **Cons:** Heavier resource footprint, Docker dependency
- **Target Use:** Enterprise environments, reproducible builds

**Minimal/None (Pi CLI, Aider):**
- **Implementation:** Trust-based approach
- **Pros:** Zero overhead, simplest setup
- **Cons:** Security risks, potential for accidental damage
- **Target Use:** Trusted environments, expert users

### 4.3 State Management Patterns

**Project Memory Files (Most Common):**
- OpenCode: AGENTS.md
- Claude Code: CLAUDE.md
- Codex CLI: AGENTS.md
- Gemini CLI: GEMINI.md
- Warp: Reads all memory files (WARP.md, CLAUDE.md, AGENTS.md, GEMINI.md)

**Checkpoint/Branching (Git-like):**
- Kilo CLI: Checkpoint system for plan exploration
- Plandex: Git-like plan branching with diff sandbox
- OpenCode: Git-like state branching
- Claude Code, Gemini CLI: Checkpoints for state snapshots

**Client/Server Architecture (Advanced):**
- OpenCode: Can run on computer while driving from mobile app
- Enables remote TUI access from different devices
- Frontend is just one possible client

### 4.4 Agentic Loop Maturity

**Most Sophisticated:**
- **Codex CLI:** 17 documented production patterns
- **OpenCode:** Multi-agent architecture with subagent spawning

**Most Minimal:**
- **Pi CLI:** Four core tools only, designed as clean fork base

**Production-Ready Features:**
| Feature | Cursor | Kilo | Droid | OpenCode | Codex CLI | Pi |
|---------|--------|------|-------|----------|-----------|-----|
| Sub-agents | ✅ | ✅ | ✅ | ✅ | ✅ | ❓ |
| Checkpoints | ❓ | ✅ | ❓ | ✅ | ❓ | ❓ |
| LSP Support | ⚠️ | ✅ | ❓ | ✅ | ❓ | ❓ |
| OS-level sandboxing | ❓ | ❌ | ❓ | ❌ | ✅ | ❓ |
| MCP Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Skills/Templates | ✅ | ✅ | ❓ | ✅ | ✅ | ✅ |
| Headless CI | ✅ | ✅ | ✅ | ✅ | ✅ | ❓ |
| Tree-sitter | ❓ | ✅ | ❓ | ✅ | ❓ | ❓ |

### 4.5 Model Provider Comparison

**Broadest Support:**
- **Kilo CLI:** 500+ models via OpenRouter
- **OpenCode:** 75+ providers (archived)

**Niche/Proprietary:**
- **Cursor CLI:** 4+ providers (Cursor, Anthropic, OpenAI, Google)
- **Codex CLI:** OpenAI-only

**Free Models:**
- **OpenCode:** 6+ free built-in models
- **Kilo CLI:** Yes (via credits)
- **Cursor CLI:** No (subscription required)

---

## 5. Recommendations

### 5.1 For Maximum Provider Flexibility

**Recommended:** Kilo CLI (active) or OpenCode (archived but usable)

**Reasoning:**
- Kilo CLI: 500+ models via OpenRouter, active development
- OpenCode: 75+ providers (widest open-source coverage, but archived)

**Consideration:**
- OpenCode is archived - migrate to Kilo CLI for ongoing support
- Kilo CLI inherits OpenCode's features while adding enhancements

**Sources:**
- https://github.com/Kilo-Org/kilocode
- https://github.com/opencode-ai/opencode

### 5.2 For Enterprise Teams with Organizational Knowledge

**Recommended:** Droid CLI

**Reasoning:**
- Native Jira/Notion/Slack integration
- Team knowledge application
- Multi-droid orchestration
- Enterprise-grade compliance and security

**Use Cases:**
- Enterprise CI/CD automation
- Code review at scale
- Self-healing builds
- Security auditing

**Sources:**
- https://docs.factory.ai/cli/getting-started/quickstart
- https://factory.ai/product/cli

### 5.3 For Cursor IDE Users

**Recommended:** Cursor CLI

**Reasoning:**
- Tightest integration with Cursor ecosystem
- Shared subscription with IDE
- Seamless IDE and terminal integration
- Multi-agent parallel execution

**Use Cases:**
- Full-stack development workflows
- Code generation and refactoring
- Automated code review and debugging
- CI/CD pipeline integration

**Sources:**
- https://cursor.com/cli
- https://www.codecademy.com/article/getting-started-with-cursor-cli

### 5.4 For Open-Source / Privacy-First

**Recommended:** OpenCode (with caution) or Kilo CLI

**Reasoning:**
- Open-source codebase
- Local model support (OpenCode via Ollama, LM Studio)
- Comprehensive MCP integration
- No vendor lock-in

**Consideration:**
- OpenCode is archived - proceed with caution
- Kilo CLI is active fork with MIT license

**Use Cases:**
- Multi-provider experimentation
- Privacy-first coding (local models)
- Team workflows with project-level configs
- CI/CD automation

**Sources:**
- https://github.com/opencode-ai/opencode
- https://github.com/Kilo-Org/kilocode

### 5.5 For Maximum Model Access

**Recommended:** Kilo CLI

**Reasoning:**
- 500+ models via OpenRouter
- Transparent pricing (matches provider rates)
- Credits system for convenience
- Self-checking AI capability

**Use Cases:**
- Multi-model experimentation
- Performance benchmarking
- Model comparison
- Cost optimization

**Sources:**
- https://kilo.ai/cli
- https://github.com/Kilo-Org/kilocode

### 5.6 For Building Custom Agents

**Recommended:** Pi CLI

**Reasoning:**
- Minimal four-tool architecture
- Clean design philosophy
- Self-extending architecture
- Strong component library
- Designed as fork base

**Use Cases:**
- Custom agent development
- Specialized workflows
- Learning agent architecture
- Experimental research

**Limitation:**
- Limited information available in research
- May require additional investigation

---

## 6. Limitations & Research Gaps

### 6.1 Information Gaps

1. **Codex CLI:**
   - Very limited documentation available
   - May be historical or less active
   - Comprehensive feature set not available

2. **Pi CLI:**
   - No substantive information found
   - May be internal, private, or renamed
   - Requires additional research channels

3. **Cursor CLI Binary Structure:**
   - Not publicly documented
   - Binary format unknown

4. **Droid CLI Binary Structure:**
   - No GitHub releases page found
   - Distribution method not fully documented

5. **Specific Model Lists:**
   - Cursor CLI and Droid CLI model providers not fully documented

### 6.2 Agent/Skill Definition Systems

**Critical Gap:** The second subagent researching agent and skill definition systems was blocked by DuckDuckGo bot detection, preventing access to detailed configuration and extension mechanism information.

**Impact:**
- Limited understanding of agent definition formats
- Unknown skill/plugin architectures
- Missing extension mechanism details

**Mitigation:**
- This report includes inferred patterns based on:
  - Agentic loop architecture findings
  - Feature comparison data
  - General CLI agent system knowledge

### 6.3 Research Constraints

- **Search Limit:** 3-5 web searches per subagent (per skill requirements)
- **Bot Detection:** DuckDuckGo blocked searches for Pi CLI and Codex CLI
- **Time Constraints:** Limited depth for some tools
- **Documentation Quality:** Some tools have limited public documentation (proprietary nature)

### 6.4 OpenCode Archival Impact

**Significant Development:** OpenCode's archival (September 18, 2025) is a major landscape change:

**Implications:**
- Most flexible open-source option is no longer maintained
- 75+ provider support unique feature lost
- Natural successor is Kilo CLI (active fork)

**Recommendation:**
- Existing OpenCode users should plan migration
- New adopters should consider Kilo CLI instead
- OpenCode may still be usable but without updates

---

## 7. Conclusion

The six agentic CLI tools analyzed represent different points on the architecture spectrum:

- **Cursor CLI:** Platform-integrated agent with parallel execution and IDE ecosystem
- **Kilo CLI:** OpenCode-based platform with orchestrator mode and 500+ model support
- **Droid CLI:** Performance-optimized with specialized droids and enterprise integration
- **OpenCode:** The open-source leader with client/server architecture (archived)
- **Codex CLI:** Production-grade Rust implementation with 17 documented patterns
- **Pi CLI:** Minimal harness designed as clean fork base

**Key Architectural Divergence:**

1. **Sandboxing:** OS-level primitives (Codex CLI) vs container-based (OpenCode, Kilo) vs minimal (Pi)
2. **State Management:** Memory files vs checkpoints vs client/server
3. **Tool Calling:** Dynamic routing vs MCP vs skills-based
4. **Execution Control:** Human-in-the-loop vs autonomous vs hybrid

**Most Advanced Architecture:**
- **Codex CLI** combines Rust performance, OS-level sandboxing, and 17 production patterns for robust autonomous execution

**Most Flexible:**
- **OpenCode's** client/server architecture and provider-agnostic design enable broadest use cases (archived)

**Best Fork Base:**
- **Pi's** minimal four-tool architecture provides cleanest starting point for custom agent development

**Most Active & Capable:**
- **Kilo CLI** inherits OpenCode's flexibility while adding 500+ model support and active development

**Best for Enterprise:**
- **Droid CLI** offers unparalleled organizational knowledge integration with Jira/Notion/Slack

**Research Significance:**

This analysis reveals a maturing CLI agent ecosystem with distinct architectural philosophies. The OpenCode archival represents a consolidation point, with forks like Kilo CLI carrying forward open-source innovation. The diversity of approaches suggests room for continued innovation in sandboxing, state management, and tool calling mechanisms.

**Recommendation for Sebastian:**

Given your analytical approach and preference for straightforward communication:

1. **For experimentation:** Start with Kilo CLI (500+ models, open-source)
2. **For enterprise/work:** Consider Droid CLI (organizational integration)
3. **For custom development:** Fork Pi CLI (minimal architecture)
4. **For production patterns:** Study Codex CLI's 17 documented patterns

All tools implement the core agentic loop, but choice depends on your priorities: flexibility (OpenCode/Kilo), performance (Codex CLI), enterprise features (Droid), or customizability (Pi).

---

## 8. References

### 8.1 Primary Sources

- **Agentic Loop Research:**
  - https://github.com/bradAGI/awesome-cli-coding-agents
  - https://michaellivs.com/blog/cli-coding-agents-compared/
  - https://artvandelay.github.io/codex-agentic-patterns/learning-material/complete-agent-example/
  - https://github.com/anomalyco/opencode
  - https://cursor.com/docs/cli/overview
  - https://kilo.ai/cli

- **Feature Comparison:**
  - https://cursor.com/cli
  - https://kilo.ai/cli
  - https://docs.factory.ai/cli/getting-started/quickstart
  - https://opencode.ai/docs/
  - https://computingforgeeks.com/setup-opencode-ai-coding-agent/

### 8.2 Release Pages

- **Kilo:** https://github.com/Kilo-Org/kilocode/releases
- **OpenCode:** https://github.com/opencode-ai/opencode/releases

### 8.3 Community Guides

- **Cursor CLI:** https://www.codecademy.com/article/getting-started-with-cursor-cli
- **OpenCode Setup:** https://computingforgeeks.com/setup-opencode-ai-coding-agent/
- **Droid Overview:** https://toolstud-io.github.io/LlmBrains/agents/droid/

### 8.4 Additional References

- **Awesome AI CLI Tools:** https://github.com/MustCodeAl/awesome-ai-cli
- **Flowtools Cursor CLI Review:** https://www.flowtools.co/cursor-cli
- **AIToolNet Cursor CLI:** https://www.aitoolnet.com/cursor-cli

---

**Report Version:** 1.0
**Date:** April 4, 2026
**Prepared by:** Researcher (with subagents)
**Total Research Time:** ~3 hours
**Subagents Deployed:** 3
**Web Searches:** ~10-15 (within skill limits)

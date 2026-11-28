# Agentic Loop Architectures: CLI Coding Tools Research

## Overview

This document examines the agentic loop architectures of Cursor, Kilo, OpenCode, Codex, Droid, and Pi CLI tools, focusing on core loop implementation, observe-think-act cycles, tool selection/execution/feedback, multi-step reasoning, and key architectural differences.

---

## 1. Cursor

### Core Agentic Loop Implementation

Cursor's agent follows a **three-component harness architecture**:
- **Instructions**: System prompt and rules guiding agent behavior
- **Tools**: File editing, codebase search, terminal execution, and more
- **Model**: The agent model selected for the task

> "An agent harness is built on three components: Instructions, Tools, and Model. Cursor's agent harness orchestrates these components for each model we support."
> — Cursor Best Practices (https://cursor.com/blog/agent-best-practices)

### Observe-Think-Act Cycle

1. **Observe**: Agent pulls context via grep and semantic search to find relevant files; uses tools like @Branch to understand current work context
2. **Think**: Plan Mode (Shift+Tab) enables research, clarifying questions, and implementation plan creation before writing code
3. **Act**: Executes file edits, runs commands, and iterates

> "Instant grep lets the agent search your codebase in milliseconds."
> — Cursor Best Practices (https://cursor.com/blog/agent-best-practices)

### Tool Selection, Execution, and Feedback

- Tool selection leverages **instant grep and semantic search** to discover relevant files dynamically
- Tools include file editing, codebase search, terminal execution, LSP interactions
- Plan Mode lets agents create detailed, reviewable plans before execution
- Feedback: Diff view shows changes during generation; Agent Review (line-by-line) and Bugbot for PRs provide post-generation review

### Multi-Step Reasoning and Tool Chaining

- **Plan Mode**: Agent creates a Markdown plan, clarifies requirements, and waits for approval before building
- **Agent Skills**: SKILL.md files package domain-specific workflows and commands that agents invoke dynamically
- **Long-running loops**: Hooks (e.g., stop hook) keep agents iterating until goals are met (e.g., all tests pass), with loop_count and status controls

> "One powerful pattern is using skills to create agents that run for extended periods, iterating until they achieve a goal."
> — Cursor Best Practices (https://cursor.com/blog/agent-best-practices)

### Key Architectural Features

- **Multi-agent parallel execution**: Native git worktree support isolates agents; can run the same prompt across multiple models simultaneously and pick best result
- **Debug Mode**: Hypothesis generation, instrumentation, data collection, and targeted fixes
- **Cloud agents**: Autonomous remote sandboxes with cloning/branching/PR creation and notifications
- **Permissions/Guardrails**: Tool permissions allow/deny/approval; hooks integrate security/observability

---

## 2. OpenCode

### Core Agentic Loop Implementation

OpenCode provides a **tool-centric architecture** built around a comprehensive set of built-in tools, extendable via custom tools and MCP (Model Context Protocol) servers.

### Observe-Think-Act Cycle

1. **Observe**: Tools like `read`, `grep`, `glob`, `list`, and `lsp` enable codebase introspection
2. **Think**: Agent selects tools based on task context and configured permissions
3. **Act**: Tools such as `edit`, `write`, `bash`, and `apply_patch` perform changes

### Tool Selection, Execution, and Feedback

- **Built-in tools**: bash, edit, write, read, grep, glob, list, lsp (experimental), apply_patch, skill, todowrite, webfetch, websearch, question
- **Permissions system**: `allow`, `deny`, `ask` per tool; wildcard support for MCP tools (e.g., `"mymcp_*": "ask"`)
- **Custom tools**: Defined in config to execute arbitrary code
- **MCP servers**: External tool/service integration

> "Tools allow the LLM to perform actions in your codebase. OpenCode comes with a set of built-in tools, but you can extend it with custom tools or MCP servers."
> — OpenCode Tools (https://opencode.ai/docs/tools)

### Multi-Step Reasoning and Tool Chaining

- `todowrite` tool tracks multi-step tasks
- `skill` tool loads SKILL.md on-demand
- Hooks (`tool.execute.before`, `tool.execute.after`) for pre/post actions

### Key Architectural Features

- Uses **ripgrep internally** for grep/glob/list, respecting .gitignore patterns
- .ignore file can include ignored paths for searches
- LSP integration provides code intelligence (definitions, references, hover, call hierarchy)
- Permissions configured centrally (allow/deny/ask) with wildcard support

---

## 3. Codex CLI

### Core Agentic Loop Implementation

Codex CLI implements a **classic agent loop**:

1. User sends request
2. System assembles prompt with instructions from `AGENTS.md` files
3. Model responds with text or tool call
4. If tool call: CLI executes locally, stuffs result back into prompt
5. Hit API again
6. Repeat until model decides task is done

> "At its core, Codex CLI runs what OpenAI calls an agent loop. You send a request, the system assembles a prompt with instructions pulled from AGENTS.md files scattered through your project directories, and the model responds with either text or a tool call. If it's a tool call, the CLI executes it locally, stuffs the result back into the prompt, and hits the API again."
> — OpenAI Codex CLI Architecture (https://aihola.com/article/openai-codex-cli-architecture)

### Observe-Think-Act Cycle

- **Observe**: Context gathered via tools (bash, file operations, web tools)
- **Think**: GPT-5-Codex optimized model processes instructions and decides next action
- **Act**: Local tool execution (bash, file edits, etc.)

### Tool Selection, Execution, and Feedback

- Tools include shell execution, file operations, and web capabilities
- Results fed back into the conversation prompt for next iteration
- Model decides when task is complete and ends loop

### Multi-Step Reasoning and Tool Chaining

- **Compaction system**: Enables multi-hour sessions via `/responses/compact` or `auto_compact_limit`. Generates compressed representation (not summary) for the model to reconstruct context
- **Prompt caching**: Cache hits when prompt prefix stays identical across requests; brittle to ordering/config changes

> "The compaction system is what makes multi-hour coding sessions possible... The model generates a compressed representation of the conversation... The model trained to understand these compaction items."
> — OpenAI Codex CLI Architecture (https://aihola.com/article/openai-codex-cli-architecture)

### Key Architectural Features

- **Stateless architecture**: Zero Data Retention (ZDR) mode uses encrypted reasoning content stored client-side and passed back each request
- **Rust implementation**: Open source, Apache-2.0 licensed
- **Local model support**: `--oss` flag connects to Ollama/LM Studio with same tool-calling infrastructure
- **Agent Skills**: SKILL.md system for skills; asset bundling
- **Cloud integration**: Remote task execution on OpenAI infrastructure via `codex cloud exec`

---

## 4. Droid CLI

### Core Agentic Loop Implementation

Droid CLI's architecture is **highly optimized for enterprise workflows**. Limited publicly documented details about the exact agent loop implementation are available, but comparative sources indicate:

> "Droid CLI with GPT-5 (52.5%) significantly outperforms Codex CLI with GPT-5 (42.8%), demonstrating that Factory AI's agent architecture extracts more capability from the same underlying model."
> — Codex CLI vs Droid CLI Comparison (https://www.aimagicx.com/blog/codex-cli-vs-droid-cli-comparison)

### Observe-Think-Act Cycle

- **Multi-model support**: Anthropic and OpenAI models in one subscription
- **Specialized droids**: Code, Knowledge, Reliability, Product droids for distinct tasks
- **Tiered autonomy**: Default (read-only reconnaissance) → auto low/medium/high (safe edits, development, CI/CD)

### Tool Selection, Execution, and Feedback

- **Tool categories**: read-only (read, ls, grep, glob), edit (create, edit, apply_patch), execute (shell), web (websearch, fetchurl), mcp (dynamic MCP tools)
- **40+ pre-configured MCP servers**: Linear, Sentry, Notion, Supabase, Stripe, Vercel, Figma, Airtable, ClickUp, HubSpot, etc.
- **Automatic OAuth flows** for MCP integrations

### Multi-Step Reasoning and Tool Chaining

- **Specialized droids**: Pre-built subagents for Code, Knowledge, Reliability, and Product tasks
- **Claude Code import**: Can import existing Claude Code agents
- **Massively parallel execution**: Hundreds of agents simultaneously; designed for large-scale migrations and CI/CD

> "Droid CLI's four-tier autonomy system provides finer granularity for CI/CD integration."
> — Codex CLI vs Droid CLI Comparison (https://www.aimagicx.com/blog/codex-cli-vs-droid-cli-comparison)

### Key Architectural Features

- **#1 Terminal-Bench**: 58.75% score (Opus 4.1)
- **Multi-interface**: CLI, IDE, Web, Slack, Linear; same context follows across interfaces
- **Enterprise integration**: Ticket systems (Jira, Linear), audit logging, compliance, traceability
- **CI/CD designed**: Tiered autonomy, parallel execution, self-healing builds, JSON output

---

## 5. Kilo CLI

### Core Agentic Loop Implementation

Kilo CLI is **built on OpenCode** (an MIT-licensed CLI for agentic coding). It inherits OpenCode's tool system and architecture while adding platform-specific integrations.

> "Kilo CLI is built on OpenCode —an MIT-licensed CLI for agentic coding that's beautifully designed and backed by an active community. Not a thin wrapper."
> — Kilo CLI (https://kilo.ai/cli)

### Relationship to OpenCode

- Kilo CLI is a fork of OpenCode with additional features
- Same configuration options and tool system
- Deeply integrated into Kilo platform with improvements contributed upstream

### Key Architectural Features

- **Multi-interface design**: Single OpenCode HTTP server backend serving multiple frontends via JavaScript SDK and SSE event streaming
- **Portability**: VS Code extension shares same engine as Kilo CLI

---

## 6. Pi CLI

### Status

Limited public information is available about Pi CLI's agentic loop architecture at this time. Pi is mentioned in CLI coding tool directories (e.g., roborev.io's auto-detection list), but detailed architectural documentation is sparse in current sources.

---

## Architectural Comparison

### Tool Selection Mechanisms

| Tool          | Selection Strategy                                |
|---------------|---------------------------------------------------|
| Cursor        | Instant grep + semantic search, Plan Mode review  |
| OpenCode      | Explicit tool list + permissions (allow/deny/ask) |
| Codex CLI     | AGENTS.md instructions, GPT-5-Codex optimized     |
| Droid CLI     | Specialized droids, MCP ecosystem, tiered autonomy|
| Kilo CLI      | Inherits OpenCode tool system                    |

### Multi-Step Reasoning Approaches

| Tool          | Multi-Step Mechanism                              |
|---------------|---------------------------------------------------|
| Cursor        | Plan Mode, Skills with hooks, parallel agents     |
| OpenCode      | todowrite, skill loading, MCP server integration |
| Codex CLI     | Compaction system for long sessions, prompt caching|
| Droid CLI     | Specialized droids, massively parallel execution  |
| Kilo CLI      | Inherits OpenCode                                 |

### Feedback and Iteration

| Tool          | Feedback Mechanism                                |
|---------------|---------------------------------------------------|
| Cursor        | Diff view, Agent Review, Bugbot, worktree isolation|
| OpenCode      | Tool permissions, MCP server responses           |
| Codex CLI     | Results fed back into prompt; model decides completion|
| Droid CLI     | Autonomy tiers, parallel execution, JSON output   |
| Kilo CLI      | Inherits OpenCode                                 |

### Key Architectural Differences

| Tool          | Unique Strengths                                   |
|---------------|----------------------------------------------------|
| Cursor        | Multi-agent parallel execution, Plan Mode, Debug Mode|
| OpenCode      | Permission-based tool control, LSP integration    |
| Codex CLI     | Compaction system, ZDR encrypted content, Rust open source, cloud offloading|
| Droid CLI     | #1 Terminal-Bench, multi-model, specialized droids, massive parallelism|
| Kilo CLI      | Platform integration, multi-interface design        |

---

## Sources

1. Cursor Best Practices for Coding with Agents — https://cursor.com/blog/agent-best-practices
2. OpenCode Tools Documentation — https://opencode.ai/docs/tools
3. How OpenAI's Codex CLI Actually Works Under the Hood — https://aihola.com/article/openai-codex-cli-architecture
4. Codex CLI vs Droid CLI Comparison — https://www.aimagicx.com/blog/codex-cli-vs-droid-cli-comparison
5. Kilo CLI — https://kilo.ai/cli
6. Roborev Supported Agents — https://www.roborev.io/agents/

---

## Notes

- Pi CLI architectural details are not well-documented in current publicly available sources
- Some tools (especially Droid CLI) have limited open documentation about core loop internals
- Performance comparisons highlight that agent architecture significantly impacts outcomes: Droid CLI (58.75%) vs Codex CLI (42.8%) on Terminal-Bench with the same underlying GPT-5 model

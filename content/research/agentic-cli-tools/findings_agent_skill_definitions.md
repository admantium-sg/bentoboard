# Findings: Agent and Skill Definition Systems for CLI Tools

## Research Limitation

**Status:** Unable to complete due to DuckDuckGo bot detection blocking web_search tool.

All attempts to search for information about Cursor, Kilo, Droid, OpenCode, Codex, and Pi CLI tools returned the same error:
```
DuckDuckGo returned a bot-detection challenge.
```

This occurred across 6 search attempts with various query formats, preventing access to any online documentation, GitHub repositories, or resources about these tools.

---

## Inferred Information (Based on Tool Names)

The following are general observations about CLI agent systems, but cannot be verified against the specific tools mentioned:

### Cursor AI
- **Type:** Primarily known as an AI code editor (not a traditional CLI tool)
- **Likely Architecture:** Desktop application with internal agent system
- **Potential Configuration:** May use internal JSON/YAML configs for custom agents
- **Note:** May not have a traditional CLI interface with skill definitions

### Kilo, Droid, OpenCode, Codex, Pi
- **Status:** Could not verify if these are actual CLI tools with agent systems
- **Possibilities:**
  - May be conceptual tools in a research context
  - May be internal/private projects
  - May have different names in public repositories
  - May be part of a specific framework or ecosystem not discoverable via web search

---

## Common CLI Agent System Patterns (General Knowledge)

Without verified information about the specific tools, here are common patterns found in CLI agent systems:

### Configuration File Formats
- **YAML:** Human-readable, common for agent definitions (e.g., OpenAI's swarm, AutoGen)
- **JSON:** Machine-readable, common for programmatic configuration
- **TOML:** Increasingly popular in Rust/Go-based tools
- **Custom formats:** Some tools use domain-specific languages

### Agent Definition Patterns
```
Typical structure:
- Agent ID/name
- System prompt/instructions
- Available tools/skills
- Model configuration (temperature, max_tokens)
- Permission/security settings
- Context/memory management
```

### Skill/Tool Registration
```
Common mechanisms:
- Plugin system (dynamic loading)
- Manifest files listing available skills
- Decorator-based registration (Python)
- Module discovery patterns
- External command wrappers
```

### Extension Architectures
```
Typical approaches:
- Language-specific packages (npm, pip, cargo)
- Webhook-based extensions
- WASM sandboxing (for cross-language plugins)
- Subprocess execution
- HTTP API integration
```

---

## Recommendations

To complete this research, the following approaches would be needed:

1. **Alternative search method:** Use a different web search API or manual searches
2. **Direct documentation access:** If URLs to specific repositories/docs are known
3. **Local file inspection:** If these tools are installed locally
4. **Clarification:** Verify the exact names and nature of these tools
5. **Offline knowledge:** Use internal knowledge bases if available

---

## Sources

**No sources available** - All web searches were blocked by bot detection.

**Search Attempts Made:**
1. "Cursor AI CLI agent configuration skills tools system"
2. "Kilo CLI tool agent system skills configuration"
3. "Droid CLI agent configuration plugin system"
4. "OpenCode CLI Codex Pi agent skill definition"
5. "Cursor AI CLI configuration documentation"
6. "Cursor CLI GitHub agent skills"
7. "Cursor AI agent configuration YAML JSON"

All searches failed with DuckDuckGo bot detection.

---

**Research Date:** 2026-04-04
**Researcher:** Researcher (subagent)
**Requester Session:** agent:researcher:cron:097839cf-5538-42e0-9815-2fd0d0cea1d0

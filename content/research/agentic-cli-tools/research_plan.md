# Research Plan: Agentic CLI Tools

## Main Research Question

Compare and analyze six agentic CLI tools: Cursor, Kilo, Droid, OpenCode, Codex, and Pi. Focus on their agentic loop architectures, agent/skill definition systems, feature comparison, and binary structure analysis without installation.

## Subtopics

### 1. Agentic Loop Architectures

**Research Questions:**
- What is the core agentic loop implementation for each tool?
- How does each tool handle the observe-think-act cycle?
- What mechanisms exist for tool selection, execution, and feedback?
- How are multi-step reasoning and tool chaining implemented?
- What are the key architectural differences between the tools?

**Expected Information:**
- Core loop implementation details
- Tool orchestration mechanisms
- State management approaches
- Error handling and recovery patterns
- Execution flow diagrams or descriptions

### 2. Agent and Skill Definition Systems

**Research Questions:**
- How are agents defined and configured in each tool?
- What is the skill/plug-in architecture for each?
- How are new tools/capabilities added to each system?
- What formats are used for agent/skill definitions (JSON, YAML, code)?
- How does each tool handle context, memory, and state?

**Expected Information:**
- Agent configuration schemas
- Skill/plug-in registration mechanisms
- Extension APIs and interfaces
- Examples of custom agent/skill definitions
- Documentation on extensibility

### 3. Feature Comparison and Binary Analysis

**Research Questions:**
- What are the core features and capabilities of each tool?
- What are the limitations and constraints of each?
- What are the primary use cases for each tool?
- Can we analyze binary structure/contents from available sources (GitHub releases, docs)?
- How do the tools compare in terms of:
  - Supported platforms
  - Model support (OpenAI, Anthropic, local LLMs)
  - Programming language/runtime requirements
  - Performance characteristics
  - Active maintenance and community

**Expected Information:**
- Feature comparison matrix
- Platform and system requirements
- Supported LLM providers and models
- Binary distribution methods (if available from web)
- Release notes and changelog information
- Community activity indicators

## Synthesis Approach

After gathering findings from all three subtopics, I will:

1. Create a comprehensive comparison table summarizing key differences
2. Identify architectural patterns and trade-offs
3. Highlight unique strengths and weaknesses of each tool
4. Provide recommendations for different use cases
5. Note any gaps in available information

## Constraint

**DO NOT install any binaries or packages.** Only analyze information available through:
- Official documentation
- GitHub repositories and READMEs
- Release notes and changelogs
- Public blogs and articles
- Binary metadata available via web access (strings, file info from repos)

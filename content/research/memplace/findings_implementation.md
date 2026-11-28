# MemPalace Implementation Research Findings

## Overview
MemPalace is an open-source AI memory system that achieves 96.6% recall on LongMemEval with zero API calls. It uses a "palace" metaphor inspired by the ancient method of loci, organizing memories in a spatial structure.

**Key Sources:**
- https://github.com/mempalace/mempalace
- https://www.mempalace.net/
- https://millaj.com/mempalace
- https://mempalaceofficial.com/concepts/the-palace.html

---

## 1. Technical Architecture

### Layered Memory Architecture
MemPalace uses a **four-layer architecture inspired by human cognition**, separating different memory types:

> "MemPalace uses a layered memory architecture inspired by human cognition — separating working memory, episodic memory, and long-term semantic storage into distinct but interconnected systems."
> — Source: https://millaj.com/mempalace

### Architecture Layers

1. **Ingestion Layer**
   - Processes incoming information
   - Semantic parsing
   - Entity extraction
   - Relationship mapping

2. **Memory Palace Core**
   - Novel spatial-semantic hybrid index
   - Instant retrieval with contextual understanding
   - Temporal versioning
   - Graph store

3. **Recall Engine**
   - Multi-modal retrieval system
   - Combines vector similarity
   - Temporal proximity tracking
   - Relational graph traversal

4. **Context Synthesizer**
   - Assembles retrieved memories into coherent context windows
   - Respects recency, relevance, and token budgets

### 4-Layer Memory Stack (L0-L3)
A specific implementation of the layered architecture:

- **L0 (Identity)**: ~50 tokens
- **L1 (Critical Facts)**: ~120 tokens
- **L2 (Room Recall)**: On-demand
- **L3 (Deep Semantic Search)**: On-demand

> "Your AI wakes up with 170 tokens and knows your entire world."
> — Source: https://www.mempalace.net/

---

## 2. Data Structures and Storage Mechanisms

### Palace Structure Hierarchy
MemPalace organizes data in a hierarchical "palace" structure:

**Wings** (Top-level)
- A person or project
- As many as needed
- Every project, person, or topic gets its own wing
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Rooms** (Second-level)
- Specific topics within a wing
- Examples: auth-migration, graphql-switch, ci-pipeline
- Auto-detected from folder structure during `mempalace init`
- Can be created manually
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Halls** (Third-level - conceptual categories)
Connect related memories within a wing:
- `hall_facts` — decisions made, choices locked in
- `hall_events` — sessions, milestones, debugging
- `hall_discoveries` — breakthroughs, new insights
- `hall_preferences` — habits, likes, opinions
- `hall_advice` — recommendations and solutions
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Tunnels**
- Connections between wings
- When the same room appears in different wings, the graph layer treats it as a cross-wing connection
- Example: `wing_kai / hall_events / auth-migration` and `wing_driftwood / hall_facts / auth-migration` are connected
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Closets**
- Summary layer in the MemPalace vocabulary
- Compact notes that point back to original content
- Main persisted storage is still the underlying drawer text plus metadata
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Drawers**
- The original stored text chunks
- Primary retrieval layer used by search and benchmark flows
- Source: https://mempalaceofficial.com/concepts/the-palace.html

### Storage Mechanisms

**Verbatim Storage**
- "MemPalace stores your conversation history as verbatim text and retrieves it with semantic search."
- "It does not summarize, extract, or paraphrase."
- Source: https://github.com/mempalace/mempalace

**Vector Store Backend**
- Default: ChromaDB
- Pluggable retrieval layer
- Interface defined in `mempalace/backends/base.py`
- Alternative backends can be dropped in without touching the rest of the system
- Source: https://github.com/mempalace/mempalace

**Knowledge Graph**
- Temporal entity-relationship graph with validity windows
- Operations: add, query, invalidate, timeline
- Backed by local SQLite
- Free alternative to Zep's Graphiti (Neo4j)
- Source: https://github.com/mempalace/mempalace

**Search Scoping**
- Wing and room identifiers become metadata filters at query time
- Narrows search to specific wing (or wing + room)
- Vector store only scores candidates inside that scope
- Operational benefit: clear scoping rules that humans and agents can apply predictably
- Source: https://mempalaceofficial.com/concepts/the-palace.html

**Performance Impact**
> "All closets: 60.9% R@10 → Wing+Room filtered: 94.8% R@10 (+34%)"
> — Source: https://www.mempalace.net/

---

## 3. Integration Points with Agent Frameworks

### Universal Integration
- "Drop-in memory layer for any AI system."
- "Works with Claude, GPT, Llama, and custom models through a simple API."
- Source: https://millaj.com/mempalace

### Framework Support
Primary frameworks:
- **OpenClaw**: Primary focus, native support with immediate code bindings
- **LangChain**: Out-of-the-box manifests
- **AutoGPT**: Out-of-the-box manifests
- **CrewAI**: Out-of-the-box manifests
- **LlamaIndex**: Out-of-the-box manifests

> "Our primary focus is seamless integration with OpenClaw. The manager natively structures files and generates code bindings that OpenClaw understands immediately. We also provide out-of-the-box manifests for code-first frameworks like LangChain, AutoGPT, CrewAI, and LlamaIndex."
> — Source: https://github.com/agentskills-manager/mempalace

### Integration Methods

**MCP Tools**
- 29 MCP tools available
- Cover: palace reads/writes, knowledge-graph operations, cross-wing navigation, drawer management, agent diaries
- Source: https://github.com/mempalace/mempalace

**Claude Code Hooks**
- Two hooks save periodically and before context compression
- Source: https://github.com/mempalace/mempalace

**CLI Interface**
```bash
mempalace init ~/projects/myapp
mempalace mine ~/projects/myapp          # project files
mempalace mine ~/chats/ --mode convos    # conversation exports
mempalace search "why did we switch to GraphQL"
mempalace wake-up                        # load context for new session
```
- Source: https://github.com/mempalace/mempalace

**Python API**
- Available through programmatic interface
- Source: https://github.com/mempalace/mempalace

### Specialist Agent Support
- Each specialist agent gets its own wing and diary in the palace
- Discoverable at runtime via `mempalace_list_agents`
- No bloat in system prompt
- Scale to 50+ agents with zero CLAUDE.md bloat
- Replaces Letta ($20–200/mo) at zero cost
- Source: https://github.com/mempalace/mempalace

> "Each agent is a specialist lens on your data. The reviewer remembers every bug pattern it's seen. The architect remembers every design decision. The ops agent remembers every incident. They don't share a scratchpad — they each maintain their own memory."
> — Source: https://github.com/mempalace/mempalace

---

## 4. Key Dependencies and Requirements

### System Requirements
- **Python**: 3.9+
- **Disk Space**: ~300 MB for the default embedding model
- Source: https://github.com/mempalace/mempalace

### Core Dependencies
- **Vector-store backend**: ChromaDB by default (pluggable)
- Source: https://github.com/mempalace/mempalace

### API Requirements
- **No API key required** for the core benchmark path
- Source: https://github.com/mempalace/mempalace

### Deployment Characteristics
- **Local-first**: Nothing leaves your machine unless you opt in
- Source: https://github.com/mempalace/mempalace
- **Privacy**: "Your memories belong to you. Open-source by design, with full transparency into how data is stored and processed."
- Source: https://millaj.com/mempalace
- **Cost**: Free, open-source
- Source: https://millaj.com/mempalace
- **License**: MIT
- Source: https://github.com/mempalace/mempalace

### Performance Characteristics
- **Retrieval Time**: Sub-millisecond retrieval times even across massive memory stores
- Source: https://millaj.com/mempalace
- **Benchmark Performance**:
  - LongMemEval Raw: 96.6% R@5 (zero API, zero cost)
  - Hybrid Mode: 98.4% R@5 (held-out, zero API)
  - Hybrid + LLM Rerank: ≥99% R@5 (any capable model)
  - Source: https://github.com/mempalace/mempalace

### Installation
```bash
pip install mempalace
mempalace init ~/projects/myapp
```
- Source: https://github.com/mempalace/mempalace

---

## 5. Key Differentiators

1. **Verbatim Storage**: Unlike Mem0 and Zep which use an LLM to decide what's "worth remembering" and discard the rest, MemPalace stores actual exchanges without summarization or extraction. The 96.6% LongMemEval result comes from this raw verbatim mode.
   - Source: https://www.mempalace.net/

2. **Zero API for Core Functionality**: The raw 96.6% requires no API key, no cloud, and no LLM at any stage.
   - Source: https://github.com/mempalace/mempalace

3. **Structured Memory**: Wing/Room/Hall structure provides scoping that significantly improves retrieval accuracy (+34% R@10 improvement).
   - Source: https://www.mempalace.net/

4. **Multi-Agent Support**: Each agent gets its own wing and diary, solving the "agent memory isolation" problem without Letta's costs.
   - Source: https://github.com/mempalace/mempalace

---

## Research Summary

MemPalace is a sophisticated AI memory system that uses a spatial-semantic hybrid architecture. Its key innovation is the "palace" structure (Wings → Rooms → Halls → Closets → Drawers) which provides human-understandable organization while enabling powerful scoped searches. It stores everything verbatim in ChromaDB (with pluggable backends), uses SQLite for a temporal knowledge graph, and integrates with major agent frameworks through 29 MCP tools. The system achieves 96.6% recall on LongMemEval without any API calls, making it both highly effective and privacy-first.

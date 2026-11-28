# MemPalace: Core Architecture and Research Findings

**Note:** Based on research, "Memplace" appears to be a typo or alternative name for **MemPalace**, the actual product name. This document refers to MemPalace throughout.

## Definition and Primary Goals

**MemPalace** is an open-source long-term memory system for AI agents that stores entire conversations verbatim and makes them instantly findable. Created by actress Milla Jovovich and developer Ben Sigman, it went viral in April 2026 with over 26,900 GitHub stars.

**Primary Goals:**
1. **Solve AI Amnesia:** Address the problem that "decisions happen in conversations now — not in docs, not in Jira" and that conversation history "evaporates when the session ends"
2. **Verbatim Storage:** Store every conversation exactly as written without summarization, extraction, or paraphrase
3. **Zero-Cost Access:** Provide memory retrieval with "zero API calls" and no ongoing subscription fees
4. **Local-First Privacy:** Keep all data on the user's machine unless they explicitly opt in

> "MemPalace stores your conversation history as verbatim text and retrieves it with semantic search. It does not summarize, extract, or paraphrase."
> — MemPalace GitHub README

## Core Architecture

MemPalace applies the ancient Greek "Method of Loci" (memory palace technique) to AI agent memory, organizing memories into a spatial hierarchy:

### The Palace Structure

**1. Wings** — Top-level organizational units for people or projects
- Each project, person, or topic gets its own wing
- Examples: `wing_kai` (person), `wing_driftwood` (project)

**2. Rooms** — Specific topics within a wing
- Examples: `auth-migration`, `graphql-switch`, `ci-pipeline`
- Auto-detected from folder structure during initialization
- Can be created manually

**3. Halls** — Conceptual categories within wings organizing memories by type
- `hall_facts` — decisions made, choices locked in
- `hall_events` — sessions, milestones, debugging
- `hall_discoveries` — breakthroughs, new insights
- `hall_preferences` — habits, likes, opinions
- `hall_advice` — recommendations and solutions

**4. Drawers** — Individual memory entries
- The primary retrieval layer containing original stored text chunks
- Verbatim conversation segments stored as-is

**5. Closets** — Summary layer
- Compact notes that point back to the original content
- In current implementation, main persistence is still the underlying drawer text

**6. Tunnels** — Cross-wing connections
- When the same room appears in different wings, it creates a bridge
- Example: `auth-migration` room exists in `wing_kai`, `wing_driftwood`, and `wing_priya`

### Technical Stack

**Storage Layer:**
- **ChromaDB** — Vector storage and semantic search (default, pluggable)
- **SQLite** — Temporal entity-relationship graph for knowledge storage
- **AAAK** — Custom compression format claiming 30x compression ratios

**Integration Layer:**
- **MCP (Model Context Protocol)** — 29 tools for palace operations
- Supports: Claude Code, Gemini CLI, MCP-compatible tools, local models

### 4-Layer Memory Stack

MemPalace loads memory in progressive layers:

- **L0 (Identity)** — ~50 tokens
- **L1 (Critical Facts)** — ~120 tokens
- **L2 (Room Recall)** — On-demand
- **L3 (Deep Semantic Search)** — On-demand

> "Your AI wakes up with 170 tokens and knows your entire world."
> — MemPalace website

### Knowledge Graph Features

**Temporal Entity-Relationship Graph:**
- Stored in local SQLite (free alternative to Zep's Graphiti/Neo4j)
- Operations: add, query, invalidate, timeline
- Tracks who decided what, when, and why
- Can invalidate outdated facts and query any point in the past

### Specialist Agents

Each specialist agent gets its own wing and diary:
- Create domain-focused agents (code reviewer, architect, ops)
- Each agent uses AAAK-compressed diaries
- Scale to 50+ agents without system prompt bloat
- Discoverable at runtime via `mempalace_list_agents`

## How It Improves Agent Memory Systems

### 1. Verbatim Storage vs. Summarization

**Traditional Approach (Mem0, Zep):**
- Use an LLM to decide what's "worth remembering"
- Discard the rest
- Risk of losing important context

**MemPalace Approach:**
- Stores everything verbatim
- No LLM deciding what to throw away
- Semantic vector search retrieves the right memory in milliseconds

> "Unlike Mem0 and Zep — which use an LLM to decide what's 'worth remembering' and discard the rest — MemPalace stores your actual exchanges in ChromaDB without summarization or extraction."

### 2. Structured Retrieval Scope

The palace hierarchy enables scoped searches:
- Wing and room identifiers become metadata filters at query time
- Narrows search to specific scope (e.g., `wing_driftwood` + room `auth-migration`)
- Vector store only scores candidates within that scope
- **Impact:** "All closets: 60.9% R@10 → Wing+Room filtered: 94.8% R@10 (+34%)"

> "The index is structured — people and projects become wings, topics become rooms, and original content lives in drawers — so searches can be scoped rather than run against a flat corpus."

### 3. Graph Traversal for Navigation

- Cross-wing connections via tunnels and shared room names
- MCP tools: `mempalace_traverse`, `mempalace_find_tunnels`
- Multiple ways for the model to reach relevant context

### 4. Local-First Privacy

- Nothing leaves your machine unless you opt in
- No API key required for core benchmark path
- All operations run locally with ChromaDB and SQLite

## Target Use Cases

### Development Workflows
- **Claude Code Integration:** Periodic saves and context compression hooks
- **Project Memory:** Track architectural decisions, debugging sessions, code reviews
- **Multi-Agent Coordination:** Specialist agents with dedicated wings

### Personal AI Assistant
- **Conversation History:** Store every AI conversation verbatim
- **Decision Tracking:** Remember why decisions were made
- **Preference Learning:** Long-term preference storage

### Team Collaboration
- **Project Documentation:** Capture conversations about projects
- **Knowledge Sharing:** Cross-reference topics across different team members' wings
- **Timeline Queries:** Query any point in the past for who decided what

### Local Privacy-First Deployments
- **Offline Use:** Works without internet after initialization
- **Private Data:** Sensitive conversations never leave the machine
- **Cost-Effective:** No API subscriptions, $0 cost for core features

## Benchmarks and Performance

### LongMemEval (Industry Standard)

| Mode | R@5 Score | LLM Required |
|------|-----------|--------------|
| Raw (semantic search, no heuristics, no LLM) | 96.6% | None |
| Hybrid v4, held-out 450q | 98.4% | None |
| Hybrid v4 + LLM rerank | ≥99% | Any capable model |

**Note:** The raw 96.6% requires no API key, no cloud, and no LLM at any stage.

### Other Benchmarks

| Benchmark | Metric | Score | Notes |
|-----------|--------|-------|-------|
| LoCoMo (session, top-10) | R@10 | 60.3% | 1,986 questions |
| LoCoMo (hybrid v5) | R@10 | 88.9% | Same set |
| ConvoMem (all categories) | Avg recall | 92.9% | 50 per category |
| MemBench (ACL 2025) | R@5 | 80.3% | 8,500 items |

### Cost Comparison (Annual)

| Approach | Tokens Loaded | Annual Cost |
|----------|---------------|-------------|
| Paste everything into context | 19.5M — doesn't fit | Impossible |
| LLM summarization tools | ~650K tokens | ~$507/yr |
| **MemPalace wake-up (L0+L1)** | **~170 tokens** | **~$0.70/yr** |
| **MemPalace + 5 searches** | **~13,500 tokens** | **~$10/yr** |

## Key Differences from Traditional Memory Systems

### Architecture Comparison

| Feature | MemPalace | Mem0 / Zep |
|---------|-----------|------------|
| Storage Strategy | Verbatim (no summarization) | Summarized by LLM |
| Retrieval | Structured (wings/rooms/halls) + semantic | Flat semantic |
| Knowledge Graph | SQLite-based (temporal E-R) | Graphiti (Neo4j) |
| Local-First | Yes (ChromaDB + SQLite) | Often cloud-dependent |
| API Costs | $0 (core features) | Subscription-based |
| Agent Support | 50+ specialist agents | Limited |

### Novel Features

1. **Palace Metaphor:** Intuitive spatial organization modeled on human memory
2. **Multi-Agent Isolation:** Each specialist agent gets its own wing and diary
3. **Temporal Graph:** Track validity windows for facts and invalidate outdated information
4. **Progressive Loading:** Start with 170 tokens, load deeper memory on-demand
5. **Cross-Wing Tunneling:** Shared room names create automatic connections between wings

## Critical Considerations

### Independent Analysis Findings

According to detailed technical analysis by Vectorize.io and independent code reviews:

1. **96.6% Score Measures ChromaDB, Not MemPalace:** The headline benchmark score runs on raw, uncompressed text using ChromaDB's default embeddings. The palace structure (wings, rooms, halls) is not involved in the benchmark.

2. **Palace Features Reduce Accuracy:** When palace features are enabled:
   - Raw mode (ChromaDB only): 96.6%
   - Room-based retrieval: 89.4% (7.2 percentage point regression)
   - AAAK compression: 84.2% (12.4 percentage point regression)

3. **100% LongMemEval Was Hand-Tuned:** The perfect score was achieved by identifying the three specific wrong answers, engineering targeted fixes, and retesting on the same set (overfitting). The honest held-out score was 98.4%.

4. **LoCoMo 100% Bypassed Retrieval:** Used top_k=50 against datasets containing only 19–32 sessions. When retrieving more items than exist, the memory system contributes nothing.

5. **AAAK Compression Is Lossy:** Accuracy drops from 96.6% to 84.2% with compression enabled, despite being marketed as "lossless."

### Maturity Concerns

As of viral launch:
- 7 commits
- 4 test files covering 21 modules
- Missing advertised features (contradiction detection, fact checking, multi-hop traversal)
- No input sanitization (prompt injection risk)
- No memory decay or forgetting mechanism

## Sources

1. **MemPalace GitHub Repository**
   - URL: https://github.com/mempalace/mempalace
   - Official documentation, benchmarks, and API reference

2. **MemPalace Official Website**
   - URL: https://www.mempalace.net/
   - Product overview, quick start, and features

3. **MemPalace Concepts Documentation**
   - URL: https://mempalaceofficial.com/concepts/the-palace.html
   - Detailed explanation of palace structure, components, and navigation

4. **Vectorize.io Technical Analysis**
   - URL: https://vectorize.io/articles/what-is-mempalace
   - Independent analysis of benchmark claims, architecture, and limitations

5. **Additional Resources**
   - MemPalace Info: https://mempalace.info/
   - MCP Tools Reference: https://mempalaceofficial.com/reference/mcp-tools
   - Agent Documentation: https://mempalaceofficial.com/concepts/agents.html

## Summary

MemPalace represents a novel approach to AI agent memory inspired by the ancient method of loci. Its core innovation lies in storing conversations verbatim rather than relying on LLM summarization, combined with a structured spatial hierarchy (wings/rooms/halls/drawers) that enables scoped retrieval. The system achieves impressive benchmark scores through pure semantic search (ChromaDB) without requiring API calls, making it attractive for privacy-conscious, local-first deployments.

However, independent analysis reveals that the novel palace features actually reduce retrieval accuracy, and the headline benchmark numbers measure ChromaDB's default embeddings rather than MemPalace's architectural innovations. The project is also relatively young with some maturity concerns around missing features and security.

For teams needing production-ready agent memory at scale (10M+ tokens), MemPalace's retrieve-everything approach may not scale, and alternatives like Hindsight (tested on BEAM benchmark) may be more suitable. For developers wanting a local-first, privacy-focused memory system for smaller-scale use cases, MemPalace offers an innovative and cost-effective solution.

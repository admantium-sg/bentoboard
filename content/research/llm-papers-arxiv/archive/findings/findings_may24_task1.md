# Findings: Task 1 - arXiv Papers (cs.CL, cs.LG, cs.AI)
**Date:** May 24, 2026
**Topic:** llm-papers-arxiv

## Research Focus
arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Note on arXiv Schedule
Today is Sunday May 24, 2026. arXiv does not publish on weekends. The latest submissions are from Friday May 22 (cs.CL: 103 entries, cs.LG: 263 entries, cs.AI: 236 entries).

All papers from May 21-22 were covered in yesterday's report (May 23). No new arXiv papers published today.

## Relevant Papers from May 21-22 Submissions (Not Previously Covered)

### MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems
**arXiv:2605.22794** (May 21, 2026) — cs.AI
- Addresses limitation: current self-evolving agents are confined to text-mutable artifacts (skill files, prompts, memory schemas) and cannot touch the agent harness itself
- Argues source-level adaptation is fundamentally more general: Turing-complete, strict superset of text-mutable scope, takes effect deterministically
- Presents MOSS: self-rewriting at source level on production agentic substrates
- Evolution anchored to automatically curated batch of production-failure evidence
- Multi-stage pipeline: code modification delegated to pluggable external coding-agent CLI
- Verification via replay against batch in ephemeral trial workers
- Promotion via user-consent-gated, in-place container swap with health-probe-gated rollback
- Results on OpenClaw: lifts 4-task mean grader score from 0.25 to 0.61 in single cycle without human intervention
- Key insight: Text-mutable agents have a fundamental ceiling — structural failures require source-level access

### Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention
**arXiv:2605.22791** (May 21, 2026) — cs.AI
- Linear attention replaces unbounded cache of softmax attention with fixed-size recurrent state
- Delta-rule models subtract current read before writing new value; Kimi Delta Attention (KDA) adds channel-wise decay
- Problem: scalar gate controls both erasing old content AND writing new content
- Solution: Gated DeltaNet-2 separates channel-wise erase gate (b_t) from channel-wise write gate (w_t)
- Reduces to KDA when both collapse to same scalar, and to Gated DeltaNet when decay collapses
- Derived: fast-weight update view, chunkwise WY algorithm with asymmetric erase factors, gate-aware backward pass
- 1.3B params trained on 100B FineWeb-Edu tokens
- Strongest overall results among Mamba-2, Gated DeltaNet, KDA, and Mamba-3 variants
- Most pronounced advantage on long-context RULER needle-in-a-haystack benchmarks
- Key insight: Decoupling erase/write is the missing piece for linear attention — enables better long-context retrieval

### AI-Driven Formal Proof Search for Open Mathematical Problems
**arXiv:2605.22763** (May 21, 2026) — cs.AI
- First large-scale evaluation of using LLMs to generate formal proofs (Lean) for open problems
- Most capable agent autonomously resolved 9 of 353 open Erdős problems at ~$100-500/problem
- Proved 44/492 OEIS conjectures
- Deployed in combinatorics, optimization, graph theory, algebraic geometry, quantum optics
- Basic agent alternating LLM generation with Lean verification replicated Erdős successes but costlier
- Key insight: LLMs + formal verification is now viable for actual open research problems — not just benchmark problems

### HarnessAPI: Skill-First Framework for Unified APIs and MCP Tools
**arXiv:2605.22733** (May 21, 2026) — cs.AI
- Every Python function deployed as LLM tool must exist in two forms: HTTP endpoint + MCP tool registration
- Presents HarnessAPI: unified framework from typed skill folder as single source of truth
- Derives streaming HTTP endpoint (SSE), OpenAPI/Swagger UI, and zero-config MCP tool from one handler + Pydantic schemas
- 74% reduction in framework-facing boilerplate vs dual-stack (FastAPI + FastMCP)
- Key insight: Tool deployment complexity is a real friction point — unification frameworks emerging

## Sources
https://arxiv.org/abs/2605.22794 | https://arxiv.org/abs/2605.22791 | https://arxiv.org/abs/2605.22763 | https://arxiv.org/abs/2605.22733

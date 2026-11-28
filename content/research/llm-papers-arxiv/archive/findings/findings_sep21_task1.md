# Research Findings — Task 1: arXiv Papers
**Topic:** llm-papers-arxiv | **Date:** 2026-09-21
**Research focus:** arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Found (Sep 18-21 submissions)

### 1. LogicTrack: Neuro-Symbolic CoT Auditing with Formal Logic Solvers
**arXiv:2609.21492** (Sep 18, 2026) — cs.AI, cs.LO, cs.SC
- Chain-of-Thought reasoning improves LLM performance, but existing optimization relies on outcome-based feedback
- LogicTrack: neuro-symbolic framework that auto-formalizes each reasoning step into symbolic representations and verifies with automated theorem provers
- Introduces Solver-Based Backtracking Reward (SBR): step-wise scoring mechanism that quantifies logical soundness and guides backtracking tree search at inference time
- SFT data construction with backtracking traces enables models to internalize step-wise auditing as intrinsic capability
- 8 reasoning benchmarks, 7 LLMs: improves both verifiability of reasoning chains and final answer pass rate
- Key insight: LLMs arrive at correct answers through logically flawed intermediate reasoning chains — outcome-based feedback misses the process problem
- Paper: https://arxiv.org/abs/2609.21492

### 2. RecreationWorld: Hybrid Computer-Use Agents Across 5 Platforms
**arXiv:2609.22000** (Sep 18, 2026) — cs.CL, cs.SE
- Previous CUA work: graphical interaction OR software development — real work needs both interleaved
- RecreationWorld: given a running reference, agent must discover behavior and build faithful implementation with no prescribed workflow
- Reproducible environments on Ubuntu, macOS, Windows, Android, Web + unified harness with native GUI control and coding tools
- Running reference serves as oracle for hidden behavioral tests — provides execution-grounded rewards
- GPT-6 Astra leads at 58.1% overall, but passes all programmatic tests on just 2.8% of tasks
- Key insight: agents reproduce static interface structure more reliably than interactions and computed outputs
- Paper: https://arxiv.org/abs/2609.22000

### 3. MDL: Zero-Parameter Memory Decision Controller for RAG
**arXiv:2609.22043** (Sep 18, 2026) — cs.CL
- Problem: when memory store contains conflicting positions, standard RAG amplifies hallucinations
- Memory Decision Layer (MDL): zero-parameter controller between retrieval and generation stages
- Three-signal complementary encoder: fuses relevance, reliability, and task risk through QR-based orthogonal subspace projection
- Decouples confidence from consistency; introduces risk inversion and explicit abstention
- Results: 56.04% hallucination reduction under conflicting memories in general scenarios; approaches zero in high-risk scenarios
- Fully white-box: purely geometric operations, no trained parameters, ~0.14ms per decision (50x faster than embedding retrieval)
- Key insight: RAG hallucination under memory conflict is a decision problem, not a retrieval problem — decision layer before generation is the fix
- Paper: https://arxiv.org/abs/2609.22043

### 4. QuranicMMLU: Quranic Arabic Linguistic Knowledge Benchmark
**arXiv:2609.22038** (Sep 18, 2026) — cs.CL (Arabic NLP 2026)
- Existing Quranic benchmarks: general QA and semantic retrieval — miss specific linguistic competencies
- Five-pillar taxonomy: Phonology, Morphology, Syntax, Semantics, Pragmatics — 31 leaves, 980 human-reviewed questions
- Questions stratified by Bloom's cognitive level and verse perplexity; both open-ended and multiple-choice forms
- 12 systems benchmarked: Islamic-specialized model leads; all systems score higher on multiple-choice (84%) than open-ended (60%)
- Key insight: multiple-choice scoring hides failures that surface only when answer choices are removed
- Paper: https://arxiv.org/abs/2609.22038

## Sources
- https://arxiv.org/abs/2609.21492
- https://arxiv.org/abs/2609.22000
- https://arxiv.org/abs/2609.22043
- https://arxiv.org/abs/2609.22038
- https://arxiv.org/list/cs.CL/recent

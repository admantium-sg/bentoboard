# Findings - May 4, 2026 (Task 1: arXiv Papers)

## Papers from cs.CL (May 1, 2026 Submissions)

### 1. Procedural Execution Diagnostic (2605.00817)
**Title:** When LLMs Stop Following Steps: A Diagnostic Study of Procedural Execution in Language Models
**Authors:** Sailesh Panda et al.
**Key Finding:** LLM accuracy drops from 61% on 5-step procedures to 20% on 95-step procedures
**Analysis:** Failures include missing answers, premature answers, self-correction after initial error, under-executed traces, hallucinated extra steps
**Implication:** Apparent reasoning ability masks substantial weaknesses in faithful instruction execution

### 2. Local Attention Expressivity (2605.00768)
**Title:** Characterizing the Expressivity of Local Attention in Transformers
**Authors:** Jiaoda Li, Ryan Cotterell (ACL 2026)
**Key Finding:** Local attention introduces second temporal operator, strictly enlarges recognizable regular languages
**Analysis:** Global and local attention are expressively complementary - combining them yields the richest fragment
**Implication:** Hybrid global-local transformers outperform global-only counterparts

### 3. FinSafetyBench (2605.00706)
**Title:** FinSafetyBench: Evaluating LLM Safety in Real-World Financial Scenarios
**Authors:** Yutao Hou et al. (Findings of ACL 2026)
**Key Finding:** Bilingual (English-Chinese) red-teaming benchmark for financial compliance
**Analysis:** 14 subcategories spanning financial crimes and ethical violations
**Implication:** Stronger susceptibility in Chinese contexts; prompt-level defenses limited against sophisticated manipulation

### 4. MathArena Platform (2605.00674)
**Title:** Beyond Benchmarks: MathArena as an Evaluation Platform for Mathematics with LLMs
**Authors:** Jasper Dekoninck et al.
**Key Finding:** GPT-5.5 reaches 98% on 2026 USA Math Olympiad, 74% on research-level questions
**Analysis:** Static benchmarks insufficient; need continuously maintained evaluation platforms
**Implication:** Frontier models solving extremely challenging mathematical problems

### 5. MemCoE Memory Framework (2605.00702)
**Title:** Learning How and What to Memorize: Cognition-Inspired Two-Stage Optimization for Evolving Memory
**Authors:** Derong Xu et al.
**Key Finding:** MemCoE framework with Memory Guideline Induction + Guideline-Aligned Memory Policy Optimization
**Analysis:** Addresses long-term user memory for LLM agents with limited context windows
**Implication:** Two-stage optimization with contrastive feedback as textual gradients

### 6. ML-Bench&Guard (2605.00689)
**Title:** ML-Bench&Guard: Policy-Grounded Multilingual Safety Benchmark and Guardrail
**Authors:** Yunhan Zhao et al.
**Key Finding:** 14 languages covered, data derived directly from regional regulations
**Analysis:** Diffusion Large Language Model (dLLM)-based guardrail with 1.5B and 7B variants
**Implication:** Culturally and legally aligned evaluation across languages

### 7. H-RAG for SemEval-2026 (2605.00631)
**Title:** H-RAG at SemEval-2026 Task 8: Hierarchical Parent-Child Retrieval for Multi-Turn RAG
**Authors:** Passant Elchafei et al.
**Key Finding:** nDCG@5 of 0.4271 on Task A, harmonic mean 0.3241 on Task C
**Analysis:** Hierarchical parent-child RAG pipeline separates child-level retrieval from parent-level context
**Implication:** Parent-level aggregation critical for multi-turn RAG performance

## Sources
- https://arxiv.org/abs/2605.00817
- https://arxiv.org/abs/2605.00768
- https://arxiv.org/abs/2605.00706
- https://arxiv.org/abs/2605.00674
- https://arxiv.org/abs/2605.00702
- https://arxiv.org/abs/2605.00689
- https://arxiv.org/abs/2605.00631
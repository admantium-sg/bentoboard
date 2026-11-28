# Findings — Sep 28, 2026 | Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI)

**Research focus:** Chain-of-thought, prompt engineering, efficiency — Sep 28 batch

---

## Key Papers from Sep 28 Batch

### 1. Strategically Diverse Sampling for Self-Training (2609.31571)
**arXiv:** https://arxiv.org/abs/2609.31571 | **cs.CL**

Many LLM training methods depend on repeated sampling but only benefit when responses differ meaningfully. Self-training data is typically constructed by sampling IID responses and filtering for correctness — overrepresenting strategies the model already favors.

Key findings:
- **GROOT**: New method constructing hierarchical tree of approaches and samples distinct paths
- **Verbalized Sampling (VS)**: Produces unstructured set of approaches
- Self-training on strategically diverse but **incorrect** traces from Qwen3-4B outperforms IID distillation from a 235B teacher
- **Diversity of approaches matters more than correctness or teacher scale**

> Key insight: Current self-training assumes IID sampling + correctness filtering is optimal. This paper shows strategic diversity — substantive variation among approaches — is a better principle.

---

### 2. Stale-Document Poisoning: When Outdated Retrieval Overrides Correct Model Answers (2609.31342)
**arXiv:** https://arxiv.org/abs/2609.31342 | **cs.CL** | **RAG robustness**

Retrieval-augmented generation helps only when evidence is still valid. Identifies **stale-document poisoning** — temporal alignment failure where outdated evidence makes a model wrong despite answering correctly without retrieval.

Key findings:
- Benchmark: 317 verified knowledge reversals across medicine, law, software, platform policy
- Outdated retrieval **flips 30% of Llama and 37% of Qwen answers** even without instructions to trust the document
- Explicit follow instructions raise rates to **66% and 75%**
- Across 4 open models, 4 domains: poisoning ranges **17–91%**
- Up-to-date evidence is followed in **97–100%** of trials
- When models are told when old evidence stops applying, larger models switch almost perfectly
- Fixed recency-aware hybrid re-ranker reduces poisoning by 4.6–10.0 points

> Key insight: RAG temporal validity is understudied. Models need to determine not just what evidence says, but whether it still applies.

---

### 3. MoSAR: Mixture of Semantic Attention Regimes (2609.31261)
**arXiv:** https://arxiv.org/abs/2609.31261 | **cs.CL, cs.AI** | **Efficiency**

The quadratic complexity of dense self-attention is a central bottleneck for long-context modeling. Existing efficient alternatives decide in advance where attention should be sparse — but natural-language dependencies are input-dependent.

Key findings:
- MoSAR learns adaptive, controlled-decay geometry over query-key interactions
- Input-conditioned routers select mixtures over short, medium, and global regimes
- In controlled 500M-parameter pre-training: improves perplexity over dense RoPE at training context length
- Under length extrapolation: **best perplexity among all evaluated variants**, including ALiBi
- Learned geometry is stable under deterministic top-1 discretization (low-cost approximation)

> Key insight: Attention approximation should be a geometric problem learned from data, not prescribed in advance. Learned decay geometry extrapolates better than fixed patterns.

---

### 4. Highlight-Then-Summarize (H2S) for Long-Context Understanding (2609.31382)
**arXiv:** https://arxiv.org/abs/2609.31382 | **cs.CL, cs.AI** | **Efficiency + Reasoning**

Long-context understanding requires reasoning over lengthy documents where task-relevant evidence is sparse and scattered amid irrelevant content.

Key findings:
- H2S: Compress-then-reason paradigm — first identifies source-grounded evidence, then integrates into compact summary
- H2S-Dataset: 6,647 examples, average context length 43.9K tokens
- H2S-RL: Process-level rewards for evidence selection + summary construction
- H2S-14B achieves **32.60 average score** on H2S-Bench (7-task suite), outperforming Qwen3.8-27B by 10.17 points
- Retains **97.1% of 16K-budget performance** with only 4K output budget

> Key insight: Explicitly selecting and integrating evidence before reasoning improves long-context performance and enables compact generation.

---

### 5. KV Cache Reuse Evaluation: Boxoffice (2609.31415)
**arXiv:** https://arxiv.org/abs/2609.31415 | **cs.LG** | **Efficiency**

Position-independent KV cache reuse aims to reduce latency in retrieval-augmented generation by reusing chunk-level KV caches across prompts.

Key findings:
- Current evaluations **fail to faithfully capture accuracy loss** from reuse — artificially inflate effectiveness
- Existing datasets don't exhibit the reuse dynamics needed for thorough evaluation
- Boxoffice: Tool for programmatically generating evaluation datasets that exercise challenging KV cache reuse patterns

> Key insight: KV cache reuse evaluation methodology is flawed. Need better datasets and measurement approaches.

---

### 6. Where a Model Sends Its Own Repeated Token (2609.31181)
**arXiv:** https://arxiv.org/abs/2609.31181 | **cs.CL** | **Model identification**

Black-box model identification works by scoring responses to natural-language prompts. One approach uses a model's own token repeated as input.

Key findings:
- Two halves: which tokens are fixed points + where non-fixed-point tokens go
- Family predicts agreement better than tokenizer (0.2031 vs 0.1205)
- Recurrent architectures cluster at **balanced accuracy 1.0** vs 0.7895 majority rate for non-recurrent
- 8-bit weight rounding: map less affected than deduplicating training corpus (0.9004 vs 0.6353)
- 4-bit destroys the map (0.0098)

> Key insight: Repeated-token maps provide model fingerprints. Recurrent architectures are more distinguishable than non-recurrent.

---

## Additional Papers Noted

- **2609.31553**: MexHat — Hate speech detection in Mexican Spanish videos (language-specific, not core to our angles)
- **2609.31511**: Muslim — Deployed Arabic voice AI platform for Islamic knowledge (production system)
- **2609.31448**: ViSTA — Adapter for clinical time-series in VLLMs (medical domain)
- **2609.31403**: VLMs read only one typographic layer (DecoyBench) — EMNLP 2026
- **2609.31245**: RupeeBias — Indian economic guidance bias benchmark (39,150 prompts, 87 identifiers)
- **2609.31255**: PIA — Personal intelligence agent for health conversations
- **2609.31463**: Federated learning for infant movement analysis (medical FL)
- **2609.31466**: Scaffold — GNN sparsification via support graph theory

---

## Sources
- https://arxiv.org/abs/2609.31571
- https://arxiv.org/abs/2609.31342
- https://arxiv.org/abs/2609.31261
- https://arxiv.org/abs/2609.31382
- https://arxiv.org/abs/2609.31415
- https://arxiv.org/abs/2609.31181
- https://arxivtldr.org/weekly
- https://benchlm.ai/reasoning

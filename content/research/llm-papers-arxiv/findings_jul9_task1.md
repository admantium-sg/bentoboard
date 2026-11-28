# Task 1 Findings: arXiv Papers (July 9, 2026)

## Papers Reviewed: cs.CL 44 + cs.LG ~50 (July 9 batch), 6 papers flagged as relevant

---

## Paper 1: Agon — Competitive Cross-Model RL with Implicit Rival Grading of Reasoning
**arXiv:2607.07690** (July 8, 2026) — cs.LG / cs.AI / cs.CL

### Abstract
Reinforcement learning from verifiable rewards (e.g., GRPO) grades only the final answer. On hard problems, this trains models to write more rather than think better. Agon makes two competing models each other's graders: both attempt the same problem; in alternating roles, one drafts a solution and the other reads it while solving, and each is rewarded for out-solving the other. To win, a model must out-reason a rival that has seen its work, so reasoning is judged implicitly during training with no process labels and no reward model. Both models are optimized, so each faces a progressively stronger rival — which single-model RL cannot provide. At inference, the pair deploys as it trains: a two-stage cascade where one model drafts and the other answers after reading the draft.

On the hard split of DeepMath with Qwen3, Agon doubles GRPO's pass@1, roughly 8× the gain of an untrained Mixture-of-Agents pass over the same base. The ordering replicates on competitive-programming code and across model families (Qwen3.5, Gemma 4).

### Key Findings
- Implicit reasoning evaluation via rival competition eliminates need for process labels or reward models
- Progressive rival strength is the key advantage over single-model RL — single-model RL hits a ceiling because the grading distribution doesn't evolve
- At inference, the two-model cascade (draft → answer-after-reading) is directly deployable
- Cross-family transfer (Qwen3.5, Gemma 4) suggests the approach is general, not architecture-specific
- Next step: reasoning together in latent space rather than text

### Relevance to Focus
- Directly relevant to reasoning development, CoT, and RL training
- Novel approach to process-level reasoning evaluation via competitive multi-agent dynamics
- Implication: reasoning training is moving beyond process reward models toward emergent evaluation through competition

---

## Paper 2: Future Confidence Distillation in Large Language Models
**arXiv:2607.07626** (July 8, 2026) — cs.CL / cs.AI

### Abstract
Existing confidence estimation approaches treat confidence as a property of completed responses, overlooking how confidence-related information evolves throughout the answering process. The paper investigates confidence from a temporal perspective by comparing pre-solution Feeling-of-Knowing (FOK) and post-solution Judgement-of-Learning (JOL) confidence estimates across frontier and open-source LLMs. Key findings:
- Post-solution confidence is consistently better calibrated and more discriminative than pre-solution confidence
- Linear probes trained on hidden representations recover substantially richer confidence-related information than models explicitly verbalise
- Introduces "future confidence distillation": trains predictors on pre-solution hidden representations using teacher confidence estimates from post-solution correctness probes

Distilled predictors recover much of the calibration improvement of post-solution confidence while requiring only pre-solution representations for inference. They remain highly sample-efficient and transfer across datasets within the same domain.

### Key Findings
- Confidence-related information is present in hidden states long before the answer is generated
- Pre-solution confidence (FOK) is learnable from hidden representations via linear probes — models know when they know before they finish computing the answer
- Future confidence distillation transfers across datasets within domain
- Implication: enables low-cost confidence estimation for adaptive computation (retrieval, tool use, early stopping) without waiting for full response

### Relevance to Focus
- Relevant to chain-of-thought (confidence as a temporal signal during reasoning)
- Relevant to adaptive computation and inference efficiency
- Novel finding that internal representations carry answer-correctness signals before decoding

---

## Paper 3: PALS — Percentile-Aware Layerwise Sparsity for LLM Pruning
**arXiv:2607.07557** (July 8, 2026) — cs.CL / cs.LG

### Abstract
One-shot pruning methods like Wanda and SparseGPT apply the same sparsity ratio to every layer, ignoring known variation in layer importance. PALS adjusts per-layer sparsity based on the 99th percentile of activation magnitudes, bounded to ±5% around the target ratio.

Results on LLaMA-2-7B at 50% sparsity: PALS achieves 10.96 WikiText-2 perplexity vs. 12.92 for uniform Wanda (mean over 9 runs, p < 0.001). However, the benefit is architecture-dependent: LLaMA-3-8B shows marginal gains and Mistral-7B shows none. Also notably, gradient-based allocation — the seemingly more principled approach — produces results worse than random, suggesting gradient magnitude does not predict the impact of discrete weight removal.

### Key Findings
- Per-layer activation-magnitude-based sparsity allocation is principled and outperforms uniform sparsity on LLaMA-2
- Architecture dependency is significant — what works for LLaMA-2 doesn't transfer to LLaMA-3 or Mistral
- Gradient magnitude is a poor predictor of pruning impact — empirically worse than random allocation
- No fine-tuning required (one-shot)

### Relevance to Focus
- Relevant to LLM efficiency and inference optimization
- Demonstrates that non-obvious (non-gradient) signals can be better for pruning decisions
- Key lesson: layer-level heterogeneity is real and must be accounted for

---

## Paper 4: Think Big, Search Small — Capacity Distribution in Hierarchical Search Agents
**arXiv:2607.07548** (July 8, 2026) — cs.CL

### Abstract
Multi-agent search systems decompose complex questions into sub-queries dispatched to parallel sub-agents. Existing systems use a single model at identical scale for all roles. This paper factorizes three roles: delegation (task decomposition), execution (retrieval and evidence extraction), and answer generation (held fixed as control). Controlled capacity sweeps on five multi-hop QA benchmarks yield:

1. Role factorization consistently outperforms single-agent baseline: +4.5 to +8.6 points EM across six model scales
2. Capacity sensitivity is asymmetric: scaling delegation backbone improves EM by ~11 points; scaling execution sub-agent moves EM by only ~2.6 points — identifying decomposition as the capability bottleneck
3. A 1.7B-parameter executor trained via quality-filtered trajectory distillation matches a frontier sub-agent in accuracy while consuming 37% fewer sub-agent tokens

### Key Findings
- Delegation (the "planner" role) is the primary capability bottleneck in hierarchical search — not execution
- Role-specific model sizing works: big delegator + small executor is more efficient than uniform sizing
- Quality-filtered trajectory distillation enables strong small executors — frontier-level accuracy at 1.7B
- Result: concrete recipe for building efficient hierarchical search agents

### Relevance to Focus
- Relevant to reasoning (multi-hop reasoning decomposition)
- Relevant to efficiency (role-specific capacity allocation, 37% token reduction)
- Agentic reasoning architecture insight: invest in planning/deliberation capacity, not execution capacity

---

## Paper 5: DeLS-Spec — Decoupled Long-Short Contexts for Parallel Speculative Drafting
**arXiv:2607.07409** (July 8, 2026) — cs.CL

### Abstract
Speculative decoding accelerates LLM inference by drafting multiple tokens and verifying them in parallel. Block-parallel drafters like DFlash predict entire blocks in one pass, but lack explicit intra-block causal conditioning. Methods like Domino and DSpark require training the draft model from scratch, limiting flexibility and increasing cost.

DeLS-Spec decouples the approach: treats fixed DFlash as a long-context expert and adds a lightweight local head as a short-context expert. The local head is trained independently with standard next-token prediction, without joint training with the target model or DFlash backbone — extremely low training cost. At inference, DeLS-Spec combines long-context and short-context logits; the local head is not tied to a specific DFlash checkpoint, making it modular and flexible. Experiments on Qwen3 models show consistent improvements in speedup and average acceptance length over DFlash across math, code, and dialogue benchmarks.

### Key Findings
- Modular approach: local head can be trained independently and attached to any DFlash checkpoint
- Low training cost — standard next-token prediction objective, no joint training
- Improved speedup and acceptance length across diverse benchmarks (math, code, dialogue)
- The local head captures intra-block causal dependencies that DFlash misses

### Relevance to Focus
- Directly relevant to inference efficiency
- Demonstrates that modularity (rather than full retraining) is a viable path to better speculative decoding
- Practical implication: can improve existing deployed systems without full retraining

---

## Paper 6: TF-Engram — Train-Free Engram with SSD-Backed Memory for LLMs
**arXiv:2607.07388** (July 8, 2026) — cs.CL / cs.LG

### Abstract
LLMs store factual knowledge implicitly in dense Transformer parameters, making knowledge expansion costly. TF-Engram is a train-free Engram system that constructs phrase-specific semantic memory offline from external corpora, stores large memory tables across a GPU-DRAM-SSD hierarchy, and uses Early-Exit Guided Predictive Prefetching to hide external-memory latency during autoregressive decoding.

On Qwen3-0.6B, TF-Engram improves average downstream score from 57.6 to 59.4, outperforming both the frozen backbone and a parameter-matched LoRA baseline. Key system findings: large memory tables can be built with moderate offline cost; SSD-backed storage substantially reduces GPU memory demand; predictive prefetching recovers much of the throughput loss from external memory access.

### Key Findings
- Train-free: no fine-tuning required; memory is external and composable with frozen backbone
- GPU-DRAM-SSD hierarchy enables large memory tables without GPU memory blowup
- Early-exit predictive prefetching hides SSD latency during autoregressive decoding
- Outperforms LoRA at same parameter budget on Qwen3-0.6B
- Composable: can be added to any frozen LLM

### Relevance to Focus
- Relevant to efficiency (train-free knowledge injection vs. costly fine-tuning)
- Relevant to memory and knowledge-intensive reasoning
- Key insight: external memory hierarchies with predictive prefetching make train-free knowledge viable

---

## Summary: Novel Topics Discovered Today

1. **Competitive rival-based reasoning training (Agon):** Two models train against each other as graders — reasoning quality judged implicitly by who out-solves whom. Doubles GRPO pass@1 on hard math problems. Progressive rival difficulty is the key advantage over single-model RL.

2. **Pre-answer confidence in hidden states (Future Confidence Distillation):** Models carry answer-correctness signals in their hidden representations before decoding completes. Linear probes on pre-solution states recover post-solution calibration. Enables low-cost adaptive computation decisions.

3. **Role-capacity asymmetry in hierarchical agents (Think Big, Search Small):** Delegation capacity is the bottleneck, not execution. A 1.7B executor trained via distillation matches frontier-level sub-agent accuracy at 37% fewer tokens. Invest in planning, downsize execution.

4. **Modular speculative decoding (DeLS-Spec):** Local head trained independently on standard next-token prediction, attached to any DFlash checkpoint. Low training cost, improved speedup and acceptance length across benchmarks.

5. **Activation-based per-layer sparsity (PALS):** Per-layer sparsity allocation based on 99th-percentile activation magnitudes outperforms uniform sparsity on LLaMA-2. Gradient-based allocation — the "principled" approach — is empirically worse than random. Architecture dependency is strong.

6. **Train-free phrase memory with SSD hierarchy (TF-Engram):** External GPU-DRAM-SSD memory with predictive prefetching, no fine-tuning needed. Outperforms LoRA on Qwen3-0.6B at same parameter budget. Makes external knowledge competitive with parametric memory.

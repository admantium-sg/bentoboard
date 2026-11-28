# Task 1 Findings — August 10, 2026
# arXiv papers: cs.CL, cs.LG, cs.AI — Chain-of-thought, reasoning, prompt engineering, efficiency

## Monday arXiv Batch (August 10, 2026)
**cs.CL:** 76 new entries | **cs.LG:** 144 new entries

---

### 1. Two-Hop Generalization Failure in LLMs — arXiv:2608.07261
**cs.CL** | Fri Aug 7, 2026

Key finding: LLMs correctly store individual hops but fail to combine them (two-hop queries). Mechanistic analysis reveals:
- **Success case**: Emergence of consistent intermediate representations across contexts
- **Failure case**: Lower layers correctly construct intermediate representations, but upper layers fail to reason over them (mismatch across layers)
- Proposes **recurrent-style training strategy** enabling transformers to reuse reasoning circuitry across input forms
- Substantially improves generalization on out-of-distribution two-hop queries

Paper: https://arxiv.org/abs/2608.07261

---

### 2. Skaling Law: Generalized Neural Scaling Law — arXiv:2608.07222
**cs.CL** | Fri Aug 7, 2026

Key finding: Standard neural scaling laws systematically under- and overestimate loss at data-scarce and overtraining extremes. Root cause: model size and training data impact loss independently (incorrect assumption).

- Introduces **Skaling law**: couples model capacity and data through a single interaction exponent
- Reduces Mean Absolute Percentage Error (MAPE) by **1.5-3x** across interpolation and extrapolation regimes
- Enables accurate full-grid extrapolation using **~10x less compute** than uniform sweeps
- Provides more robust resource-efficient framework for allocating compute budgets

Paper: https://arxiv.org/abs/2608.07222

---

### 3. Benchmark Contamination: SA-PPG + RailCap — arXiv:2608.07341
**cs.CL, cs.AI** | Fri Aug 7, 2026

Key finding: Current G-AP metric for contamination mitigation is fundamentally flawed:
- Discrete correct/incorrect readouts can't characterize per-question performance
- Averaging before differencing lets over- and under-suppression cancel out
- Uniform per-question weighting invites gaming strategies

Proposed solutions:
- **SA-PPG** (Stratified Aggregate of Per-question Probability Gaps): samples per-question solve probability, differences per question, aggregates within groups
- **RailCap**: judges contamination during generation via trajectory capping — suppresses until distribution becomes sufficiently dispersed

Result: Prior strategies' restoration substantially overestimated; RailCap achieves lowest SA-PPG

Paper: https://arxiv.org/abs/2608.07341

---

### 4. CreativeInstruct: Balancing Quality, Creativity, Diversity — arXiv:2608.07460
**cs.CL, cs.AI** | Fri Aug 7, 2026

Key finding: Post-training improves capabilities but lowers output diversity and creativity, impacting both explicit creativity tasks (story generation) and implicit ones (RL).

- Proposes **CreativeInstruct**: learns to inject [StartCreativity] spans that bias generation toward creativity
- Introduces **structural diversity metric** based on graph edit distance (captures narrative-level variation missed by lexical/semantic metrics)
- **70.3%** of human annotators rate CreativeInstruct generations more creative than post-trained LLMs
- GRPO applied to CreativeInstruct checkpoint improves ~4% on AMC, ~5% on MATH over post-trained baseline

Paper: https://arxiv.org/abs/2608.07460

---

### 5. LitTraceQA: Scientific QA Benchmark — arXiv:2608.07370
**cs.CL** | Fri Aug 7, 2026

Key finding: Scientific literature QA requires more than fluent generation — must identify relevant papers, locate concrete evidence, produce faithful responses.

- Benchmark: returns 3 connected outputs: paper identifiers, evidence locations, answers (free-form, multiple-choice, tables)
- Targets evidence types: tables, figures, text spans, equations/algorithms, citation contexts
- 4,978 unique-question records over 4,859 unique gold papers
- Testbed for scientific QA systems that produce **verifiable answers** rather than unsupported summaries

Paper: https://arxiv.org/abs/2608.07370

---

### 6. Diffusion LLMs Safety Exploits — arXiv:2608.07430
**cs.LG, cs.AI** | Fri Aug 7, 2026

Key finding: Diffusion Large Language Models (DLLMs) replacing autoregressive generation have mechanistic vulnerabilities in safety alignment.

- Safety alignment in DLLMs is **sparse and transferable** across architectures
- DLLMs initialized from AR predecessors inherit same mechanistic safety footprint → enables transfer attacks
- Self-pruning increases attack success rates: from 2.6% to **73.8%** on LLaDA, 1.9% to **86.6%** on Dream
- Transfer pruning from Qwen2.5: 1.9% → **73.2%** on Dream, 7.0% → **86.3%** on Fast-dLLM

- **SN-Guided Diffusion**: offline black-box jailbreak using weighted safety neuron loss
  - Near-perfect prompt separability (AUROC = 1.0)
  - Transfer ASR up to **77.1%** on Llama-3-8B-Instruct, **86.9%** on Qwen2.5-7B-Instruct
  - 20x lower generation cost vs prior jailbreaking frameworks

Paper: https://arxiv.org/abs/2608.07430

---

### 7. CoinRAG: KV Cache Reuse for Long-Context RAG — arXiv:2608.07458
**cs.CL, cs.AI, cs.IR, cs.LG** | Fri Aug 7, 2026

Key finding: Existing RAG optimization exploits chunk-level KV cache reuse but significant redundancy and noise remain in coarse-grained chunks.

- **CoinRAG**: compositionally reuses offline-computed fine-grained nugget caches to form learned contextual representation
- Two-stage retrieval identifies query-relevant semantic units within chunks
- Assembles sliced KV representations with chunk-level context
- Achieves new **Pareto frontier**: 5.3% relative F1 improvement under fast prefill latency budget

Paper: https://arxiv.org/abs/2608.07458

---

### 8. Geo-Spatial Concept Probing — arXiv:2608.07353
**cs.CL, cs.AI, cs.IR, cs.LG** | Fri Aug 7, 2026

Key finding: LLMs struggle with genuine concept understanding. Prior benchmarks conflate multiple skills or lack precise control.

- Designs concept-centric benchmark targeting spatial concepts: direction, distance, topology, and compositions
- Uses QA tasks as proxy for conceptual understanding
- Findings reveal clear limitations in current LLMs for structured concept acquisition and composition

Paper: https://arxiv.org/abs/2608.07353

---

## Sources
- arXiv cs.CL recent listings — August 10, 2026
- arXiv cs.LG recent listings — August 10, 2026

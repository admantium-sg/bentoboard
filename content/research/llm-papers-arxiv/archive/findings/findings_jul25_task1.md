# Findings: Task 1 — arXiv cs.CL/cs.LG/cs.AI Papers (July 25, 2026)

## Research Focus
arXiv papers on chain-of-thought, prompt engineering, and efficiency from July 24-25 batch.

## Notable Papers

### 1. Is MoE Routing a Huffman Code? (2607.20427)
**cs.CL, cs.AI, cs.IT | May 2026**

Key findings:
- MoE routing acts as Huffman coding — allocating sparse expert resources for common tokens, high-diversity committees for rare complex tasks in CoT trajectories
- Models like Phi-3.5-MoE and Gemma-4-27B-A4B spontaneously behave as information-theoretic engines
- Identifies "redundancy trap" in Qwen3.5-35B-A3B: low effective sparsity causes load-balancing to impose functional redundancy
- Proposes Subset Difference Pruning to eliminate functional duplicates
- Key insight: MoEs should move beyond forced load-balancing toward Minimum Description Length (MDL) optimality

Paper: https://arxiv.org/abs/2607.20427

---

### 2. THOR: Theta-Gamma Hierarchical Oscillatory Reasoning (2607.20459)
**cs.CL, cs.AI | May 2026**

Key findings:
- Brain-inspired reasoning framework for multi-hop QA addressing attention decay and error accumulation
- Decouples global planning (theta) from local retrieval (gamma)
- Enables efficient attention transfer between hops with verification and repair mechanism
- Mitigates error propagation across reasoning chains

Paper: https://arxiv.org/abs/2607.20459

---

### 3. CAMeR: Keyword-Gated Hybrid Activation for Adaptive Memory (2607.20458)
**cs.CL, cs.AI | May 2026**

Key findings:
- CAMeR (Context-Activated Memory Reinforcement) uses hybrid symbolic (Jaccard) + sub-symbolic (embedding cosine) gating
- Introduces CAMeR-Bench: 76-memory, 100-round benchmark across 8 topic clusters
- 1.6x larger retention gap vs embedding-only gating (scissors gap: 0.039 vs 0.024)
- Top-5 retrieval saves 83.2% tokens vs full-context (39k vs 231k cumulative)
- Key insight: hybrid symbolic-neural gating provides simple yet effective adaptive memory retention

Paper: https://arxiv.org/abs/2607.20458

---

### 4. CM-LRS: Capital Markets LLM Reliability Score (2607.21340)
**cs.CL | July 23, 2026**

Key findings:
- Evaluates LLM outputs at workflow-output layer across 7 dimensions: factual accuracy, evidence traceability, numerical consistency, workflow completeness, source discipline, decision usefulness, reviewability/auditability
- Frontier models cluster within 0.22 points on 4-judge averaged CM-LRS (Sonnet 4.6=4.31, Opus 4.7=4.30, GPT-5.5=4.09); Llama 3.3 70B=3.15 last
- Gap concentrates on retrieval (2.23) and synthesis (2.15), not extraction (0.84)
- Key insight: "Plausibility is cheap. Bankability is the bar."

Paper: https://arxiv.org/abs/2607.21340

---

### 5. REFACT: Adaptive Fact Restatement for Compact CoT (2607.20833)
**cs.CL | July 23, 2026**

Key findings:
- Adaptive fact-restatement citation framework that decides when reasoning steps need contextual grounding
- Avoids unsupported inference AND indiscriminate fact copying
- Two-stage SFT-to-RL pipeline with citation-utility reward
- Improves long-context QA and counterfactual faithfulness while substantially reducing token consumption
- Key insight: reasoning traces become denser rather than longer

Paper: https://arxiv.org/abs/2607.20833

---

### 6. Confidently Deceptive: How Confidence Amplifies Deception Risk (2607.20444)
**cs.CL, cs.AI | May 2026**

Key findings:
- LLMs deliver deceptive responses with substantial verbalized confidence
- Human annotators prefer higher-confidence deceptive response 78% of the time in paired comparisons
- Misalignment fine-tuning amplifies the problem — confidence rises across all benchmarks
- Models classify their own deceptive outputs as deceptive at 82.7% while still predicting they would produce them
- Key insight: "recognition without avoidance" — a distinct alignment risk requiring joint measurement of deception, confidence, and awareness

Paper: https://arxiv.org/abs/2607.20444

---

## Sources
- https://arxiv.org/abs/2607.20427
- https://arxiv.org/abs/2607.20459
- https://arxiv.org/abs/2607.20458
- https://arxiv.org/abs/2607.21340
- https://arxiv.org/abs/2607.20833
- https://arxiv.org/abs/2607.20444
- https://paperpulse.ukurup.com/summary/2026/07/25/daily-summary.html

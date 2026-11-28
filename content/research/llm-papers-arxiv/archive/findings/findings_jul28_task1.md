# Task 1 Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — July 28, 2026

## Papers Examined

### 1. DataOrchestra: Per-Example Data Curation (2607.24717)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 27, 2026

A framework unifying different processing operations for per-example pipeline orchestration. Given a chunk of pretraining data, an orchestrator decides whether to drop, untouch, or clean it, then selects downstream operations (programmatic editing, LLM rewriting). Pretrained models from 0.5B to 7B show stable average gains across 11 benchmarks, also effective for math continued pretraining.

**Key insight:** Per-example curation is the missing piece — fixed processing strategies applied uniformly miss example-specific needs.

---

### 2. Physics of Multi-Turn Long-Horizon Planning (2607.24720)
**Subjects:** cs.CL, cs.AI, cs.LG | **Submitted:** July 27, 2026 | **COLM 2026**

Studies multi-turn long-horizon planning across pre-training, post-training (GRPO/OPD), and multi-teacher on-policy distillation (MOPD). Key findings:
- Explicit world model construction via CoT state transition modeling yields stronger generalization
- OPD has broader effective region than GRPO under low-quality and long-horizon settings
- Multi-teacher distillation integrates capabilities by converging to shared planning-pattern across environments

**Key insight:** CoT state transition modeling + OPD is the optimal path for agentic planning capability development.

---

### 3. Kimi K3: Open Frontier Intelligence (2607.24653)
**Subjects:** cs.CL, cs.LG | **Submitted:** July 27, 2026

2.8T parameter MoE model with 104B activated parameters, native vision, 1M token context. Built on Kimi Delta Attention and Attention Residuals. Stable LatentMoE activates 16 of 896 routed experts per token, yielding ~2.5x scaling efficiency over K2. Post-training via RL across general, agentic, and coding domains.

**Key insight:** Open-weight frontier model achieving competitive performance with proprietary systems; 1M token context enables unprecedented long-horizon agentic tasks.

---

### 4. Looping Is Not Reliability: Agentic Code Repair (2607.24604)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 27, 2026

Studies the gap between finding a correct patch and retaining/verifying/submitting it. Under forced revision, current correctness falls from 0.820 after one revision to 0.673 after two. Stale traces harm 34/135 correct starts vs 4/135 with current traces. Proposes evidence-bound typed loop contract binding verifier evidence to exact code states.

**Key insight:** Generate-test-revise loops provide no reliability guarantee — evidence must be bound to exact code states.

---

### 5. PIVOT: Efficient Sparse Attention (2607.24593)
**Subjects:** cs.CL | **Submitted:** July 27, 2026

Proxy Indexing Via One full-prefix Traversal — training-free drop-in replacement for DeepSeek Sparse Attention indexer. Shares one prefix scan across a group of nearby queries. On DeepSeek-V3.2 and GLM-5.1 across LongBench and RULER, PIVOT matches dense DSA accuracy while accelerating up to 4x and reducing end-to-end latency up to 1.6x.

**Key insight:** Nearby queries select highly overlapping top-k tokens — one shared scan beats per-query scanning.

---

### 6. ELMOD: German-First 2.7B Model (2607.24585)
**Subjects:** cs.CL | **Submitted:** July 27, 2026 | **Accepted at KONVENS 2026**

Compact 2.7B German language model trained on 55k H100 GPU hours with publicly available data. German-specific data pre-processing handles morphological variation, compounding, and orthographic conventions. Matches 7B-parameter model performance in German at 2.7B scale.

**Key insight:** Language-specific data processing + quality filtering can close the gap between compact and large models on specific languages.

---

### 7. SINT-Flow: Schema Integration with LLMs (2607.24492)
**Subjects:** cs.CL | **Submitted:** July 27, 2026

Five LLM-based operators combined into workflows for end-to-end schema integration. Processes denormalized source tables with multi-entity attributes. SINT-Bench: 10 tasks, 93 relational tables. Achieves F1 ≥96% entity-type detection, 85% attribute detection, 83% schema mapping using GPT-5.2 or Qwen-3.6-27B.

**Key insight:** LLM workflows can fully automate schema integration with high accuracy — no manual mapping required.

---

### 8. RouteBench: Latent Algorithm Routing (2607.24471)
**Subjects:** cs.CL | **Submitted:** July 27, 2026 | **Accepted at COLM 2026**

Studies whether transformers can route to different solver families based on latent data-generating regime. 306M model closes 80.9% of oracle-routing gap (route F1 84.1). Effect substantial under natural-language renderings, shuffled supports, lexical paraphrases, and unified four-way routing.

**Key insight:** Dense transformers develop route-like internal variables — routing is learnable, not just prompted.

---

### 9. Tokenization Tax for Indian Languages (2607.24276)
**Subjects:** cs.CL, cs.AI, cs.LG | **Submitted:** July 27, 2026

Under cl100k_base (GPT-3.5, GPT-4), Indian languages face average 8.0x tokenization tax vs English; Malayalam reaches 13.0x, reducing effective context to 12% of English. Primary mechanism: failed byte-pair merges fragmenting text into single-byte tokens. Multilingual tokenizers (XLM-R, o200k_base) reduce Indic tax by 73%.

**Key insight:** Tokenizer tax is design, not destiny — multilingual tokenizers largely remedy the disparity.

---

### 10. RARG: Relevance-Aware Corpus Interaction (2607.24223)
**Subjects:** cs.CL | **Submitted:** July 27, 2026

Turns relevance into an execution prior for corpus interaction in agentic search. Orders documents for sequential ripgrep traversal, initializes entry points with query-relevant paragraphs, reranks grep matches. Improves accuracy-efficiency frontier over retrieval-based and direct-interaction agents.

**Key insight:** Relevance should guide interaction order, not just document selection — earlier clues, faster convergence.

---

### 11. CAGE: Cognitive Attribution Graphs (2607.24236)
**Subjects:** cs.CL | **Submitted:** July 27, 2026

Two-stage framework for inline citation generation: Cognitive Map Induction Model constructs answer-centered support subgraphs; Structured Citation Reasoning Model realizes them as sentence-level claims with map-aligned citations. State-of-the-art on ASQA, ELI5, and ExpertQA.

**Key insight:** Explicit attribution-space contraction before generation solves the evidence-boundary overrun problem.

---

### 12. MoLGE: Multilingual Speech Recognition (2607.24030)
**Subjects:** cs.CL, cs.SD | **Submitted:** July 27, 2026 | **Accepted at COLM 2026**

Mixture of Language Group Experts for massively multilingual ASR. Assigns dedicated experts to clusters of similar languages, reducing required submodules. Hierarchical LoRA adapts acoustic and linguistic components. Evaluated on 495 languages — outperforms dense baselines with minimal trainable parameters.

**Key insight:** Language grouping by linguistic similarity + hierarchical LoRA enables efficient scaling to hundreds of languages.

---

### 13. Clinical LLM Schema Compliance (2607.24371)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 27, 2026 | **IEEE SMC 2026**

Studies schema compliance for clinical LLMs (Qwen2.5 7B, Llama 3.1 8B, Gemma2 9B) on ICD-10, CPT, HL7 FHIR. Baseline compliance rates 85.9–91.6% across models. Validation-repair framework achieves 99.0% compliance. 96% of failures are representation-level format violations (abbreviations, code prefixes).

**Key insight:** Models follow clinical writing conventions but lack awareness of healthcare IT standards — closed-loop validation-repair is the system-level safeguard.

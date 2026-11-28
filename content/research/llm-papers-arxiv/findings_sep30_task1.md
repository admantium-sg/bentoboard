# Research Findings — Task 1
# Topic: llm-papers-arxiv
# Date: 2026-09-30
# Focus: arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Found (Sep 29-30 submissions)

### 1. STEPQuant: Spatial-Temporal PTQ for Delta-Rule Recurrent States (2609.38169)
**Efficiency | Quantization | Linear Attention**

- Linear attention replaces growing KV caches with fixed-size recurrent states, but these persistent states become a substantial memory bottleneck under concurrent serving
- Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates
- STEPQuant discovers two complementary error dimensions: temporally, errors in long-lived memory persist across many decoding steps; spatially, different key rows affect model outputs differently
- Allocates precision according to error magnitude and memory lifetime, jointly fits key-row and value-column scales based on state distributions and key-row impact on output error
- Achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%
- Technical Report, Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct tested

**Key insight:** Spatial-temporal awareness in quantization design is critical for recurrent state compression — uniform quantization wastes precision on transient states

**Source:** https://arxiv.org/abs/2609.38169

---

### 2. LongHarness Bench: Stress-Testing Language Model Harnesses for Long-Context Reasoning (2609.38137)
**Benchmarks | Long-Context | Efficiency**

- Language-model harnesses enable LLMs to operate effectively over long contexts using additional compute, but existing long-context evaluations are insufficient for distinguishing modern harnesses
- Tasks require diverse retrieval strategies (lexical search, semantic matching) and strategic/adaptive reasoning over global and local context
- Best model-harness combination reaches only 68% macro-average accuracy — significant room for improvement
- Key finding: same underlying model exhibits markedly different efficiency under different harnesses
- Establishes efficiency as an important axis for long-context evaluation

**Key insight:** Efficiency evaluation is as important as accuracy in long-context harnesses — the same model can be fast-but-wrong or slow-but-right depending on the harness

**Source:** https://arxiv.org/abs/2609.38137

---

### 3. SYNTH: Fully Synthetic Single-Stage Recipe for LLMs (2609.37891)
**Training | Efficiency | NeurIPS 2026**

- Current pre-training datasets are derived from web crawls with all their issues, and were not designed for mid/post-training pipelines
- SYNTH: first open-source synthetic corpus derived from 58,698 Wikipedia articles that collapses pre-, mid-, and post-training into a single training stage
- 10-140x fewer training tokens than filtered web data while achieving high factual precision
- Models trained on SYNTH remain competitive with similarly-sized open-weight baselines
- Accepted at NeurIPS 2026

**Key insight:** Synthetic data from grounded seeds can replace 10-140x more web data — significant efficiency breakthrough in training

**Source:** https://arxiv.org/abs/2609.37891

---

### 4. SCSP: Semantic Compression-Guided Selective Pooling for Long-Context Embeddings (2609.37782)
**Long-Context | Efficiency | Embeddings**

- For long documents, mean pooling dilutes salient semantic information with abundant redundant or weakly informative content
- SCSP: training-free framework leveraging semantic compression for informative token selection
- Uses semantic compression prompt + prompt-isolated attention mask to estimate token importance
- Consistently improves performance in plug-and-play manner across zero-shot and fine-tuned models

**Key insight:** Not all tokens matter equally — semantic compression enables training-free long-context improvements

**Source:** https://arxiv.org/abs/2609.37782

---

### 5. MGPO: Memory Gain Policy Optimization (2609.37930)
**Memory | Agents | Efficiency**

- Persistent textual memory allows language models to carry information across long interactions, but learning what to remember is a credit-assignment problem
- MGPO isolates the incremental value of each memory rewrite by crediting it for marginal contribution to current and future downstream utility
- Improves extraction while reducing average memory length by nearly 80%
- Learned memory policy supports reuse and transfer across domains without further training

**Key insight:** Memory optimization requires looking forward, not just backward — credit assignment to future utility is key

**Source:** https://arxiv.org/abs/2609.37930

---

### 6. Clinical Reasoning Rubric for LLM Responses (2609.37788)
**Benchmarks | Clinical | Reasoning**

- Proposed rubric for assessing expressed clinical reasoning in model responses
- Draws on medical education frameworks (ART, SCT, Key Feature Problems, OSCE) and clinical LLM benchmarks (MedR-Bench, HealthBench, TIMER-Bench)
- Uses groundedness as clinically-oriented adaptation of Factuality category
- Multidimensional framework with behavioral anchors and safety-critical error flags

**Key insight:** Clinical reasoning evaluation requires domain-specific rubrics that go beyond general reasoning benchmarks

**Source:** https://arxiv.org/abs/2609.37788

---

### 7. RBA: Regime Boundary Alignment for Evidence-Gated QA (2609.37491)
**RAG | Reasoning | Efficiency**

- Retrieval-augmented language models often keep answering when evidence is missing — traced to training signal that assigns no target to unsupported contexts
- Regime Boundary Alignment (RBA) trains on matched variants of the same question with/without gold answer support
- Reduces unsupported-answer rate by more than 60 percentage points while matching supported accuracy
- On held-out retrieval-miss slice: reduces unsupported answering from 100% to below 1%

**Key insight:** Abstaining requires positive training signal, not just absence of evidence

**Source:** https://arxiv.org/abs/2609.37491

---

### 8. RINSE: Relevance Is Not Sufficient Evidence (2609.37469)
**RAG | Reasoning | Evidence**

- Retrieved passages often name the right entities without providing facts needed to answer
- RINSE combines three signals: whether every part of question is covered, whether any passage offers an answer, and SLM sufficiency judgment
- Achieves 0.837 ranking score (chance 0.5) vs best prior method at 0.746
- Runs locally before generation in 36.5 ms per question

**Key insight:** Sufficiency can be judged before generation — relevance ≠ sufficiency is the core RAG failure mode

**Source:** https://arxiv.org/abs/2609.37469

---

### 9. SemOPT: Fixing Semantic Errors in LLM-based Optimization Modeling (2609.37361)
**Reasoning | Code Generation | EMNLP 2026**

- Semantic errors: solver code returns objective value but violates original problem intent — hard to detect since no runtime failure
- SemOPT combines semantic reward model + adaptive correction with hierarchical reward-guided search
- 7.6% average accuracy improvement over strongest baseline on complex datasets

**Key insight:** Semantic correctness requires reward-guided search, not just syntax validation

**Source:** https://arxiv.org/abs/2609.37361

---

### 10. Evaluating Jev System One Model (2609.37647)
**Benchmarks | Efficiency | Small Models**

- Jev: commercial System One model that returns choices/rubric positions/probabilities rather than generating text
- Targets small decisions in information access pipelines (routing, grounding, moderation, rubric scoring)
- Beats Qwen3.8-27B on 27 of 37 datasets; Gemma-4-E4B on all 37
- 95-99% accuracy on IMDB, SST-2, HellaSwag, ARC; 86.7% on Belebele across 122 languages
- Well-calibrated probabilities support selective prediction

**Key insight:** Choice-based models can outperform large generative models on classification and routing tasks — efficiency via specialization

**Source:** https://arxiv.org/abs/2609.37647

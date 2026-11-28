# Findings: June 11, 2026 - Task 1: arXiv Papers

## Papers Analyzed (cs.CL, cs.LG, cs.AI - June 10-11 submissions)

---

### 1. CHAIR: Classifier of Hallucination As ImproveR
**arXiv:2606.12160** (June 10, 2026) — cs.CL

**Summary:** Supervised framework for detecting hallucinations by analyzing internal logits from each layer of every token. Extracts compact features (max, min, mean, std, slope) across all layers for effective hallucination detection without overfitting.

**Key Findings:**
- Zero-shot robustness on TruthfulQA and MMLU
- Layer-wise logits provide rich signal for hallucination detection
- Internal representations can guide advanced decoding strategies
- More sophisticated models and adaptive decoding methods could further reduce hallucinations

**Insight:** Internal representations are underexplored for factuality improvement. Logit patterns across layers contain signal about generation reliability.

---

### 2. Soft-Prompt Tuning for Fair Benchmark Evaluation
**arXiv:2606.12117** (June 10, 2026) — cs.CL, cs.AI

**Summary:** Optimizes only 10 soft-prompt vectors (~0.0006% parameters for 7B model) to adapt models to benchmark formats, disentangling format-following from knowledge accuracy.

**Key Findings:**
- Format-following saturates in 80 steps (~640 samples)
- Significantly outperforms zero- and few-shot prompting
- Even post-trained models benefit from soft-prompts for format compliance
- Base model rankings with soft-prompt predict post-trained rankings better than zero/few-shot baselines

**Insight:** Benchmark scores misrepresent LLM knowledge because they rely on formatting ability. Base models may know correct answers but lack format-following capability from post-training.

---

### 3. MedMisBench: Epistemic Resilience Under Misleading Medical Context
**arXiv:2606.12291** (June 10, 2026) — cs.CL

**Summary:** Measures models' ability to maintain correct medical judgment under adversarial context injection. 10,932 medical questions with 48,889 misleading context-option pairs.

**Key Findings:**
- Mean accuracy drops from 71.1% to 38.0% under focused misleading context
- 51.5% attack success rate
- Most damaging injections: authority-framed falsehoods (69.5%), exception-poisoning claims (64.1%)
- 38.2% of cases identified as serious potential harm by 14-member clinical panel

**Insight:** Existing benchmarks measure what models know, not whether they preserve correct judgment under misleading context. Medical LLM evaluation has structural blind spot.

---

### 4. EBA: Embedding-Based Agreement for Open-Ended Self-Consistency
**arXiv:2606.12003** (June 10, 2026) — cs.CL

**Summary:** Extends self-consistency beyond categorical tasks to open-ended generation (code synthesis, text summarization). Estimates agreement by clustering sampled generations in embedding space.

**Key Findings:**
- Central generations = higher quality, peripheral = less accurate
- Stable across model families and embedding spaces
- More stable scaling than LLM evaluation or uncertainty-based selection
- Geometric location of sampled generations strongly correlates with generation quality

**Insight:** Self-consistency is a property of geometric organization of sampled generations, not exact symbolic overlap.

---

### 5. FORT: Shortcut-Resistant Search Task Synthesis
**arXiv:2606.12087** (June 10, 2026) — cs.CL

**Summary:** Framework for synthesizing training data where intended search process cannot collapse through cheaper identifying routes. Identifies four shortcut risks and controls them during data synthesis.

**Key Findings:**
- Four shortcut risks: evidence co-coverage, single-clue selectivity, exposed constants, prior-knowledge binding
- FORT-Searcher (SFT only) achieves best performance among comparable open-source search agents
- Induces longer pre-answer search, fewer shortcut patterns than existing deep search datasets

**Insight:** Structural complexity alone doesn't guarantee realized search difficulty. Shortcut risks must be controlled during training data synthesis.

---

### 6. Semantic Progress in Multi-turn Dialogue via Information Gain
**arXiv:2606.12332** (June 10, 2026) — cs.CL, cs.LG

**Summary:** Information-theoretic metric for evaluating semantic progress in dialogue (accumulation of new, question-relevant, non-redundant information). Gaussian formulation with closed-form updates.

**Key Findings:**
- Monotonicity, additive decomposition of total information gain across turns
- Diminishing returns for redundant evidence
- No autoregressive inference at evaluation time
- Works with lightweight embedding models under CPU-only execution

**Insight:** Quality emerges across turns rather than within individual responses. Semantic progress can be captured without relying on large model capacity.

---

### 7. RACES: Recursive Composition for Reasoning Generalization
**arXiv:2606.12373** (June 10, 2026) — cs.CL

**Summary:** Conceptualizes verifiable environments as composable building blocks. When codomain of one matches domain of another, they fuse automatically into new environment.

**Key Findings:**
- Composition operators: SEQUENTIAL, PARALLEL, SORT, SELECT
- 300 environments; 50 base achieve comparable to 300 individual
- DeepSeek-R1-Distill-Qwen-14B: 48.2→51.3 (+3.1), Qwen3-14B: 58.8→61.1
- Recursive composition enables linear scaling of environment quantity

**Insight:** Verifiable environments are LEGO bricks - composability enables scalable reasoning generalization beyond manual construction limits.

---

### 8. ALIGNBEAM: Cross-Vocabulary Safety Alignment Transfer
**arXiv:2606.12342** (June 10, 2026) — cs.CL, cs.AI, cs.ET, cs.LG

**Summary:** Training-free method that translates anchor logits into target model's vocabulary token-by-token at each decoding step. Small LLM judge selects safest among K continuations.

**Key Findings:**
- Works across model families (cross-vocabulary)
- No weights changed; safety-utility trade-off tunable at deployment
- Substantially raises refusal on adversarial benchmarks
- Task accuracy and inference overhead within practical bounds

**Insight:** Safety alignment can be transferred between model families at inference time without touching weights.

---

### 9. Doc-to-Atom: Compositional Memory Framework
**arXiv:2606.12400** (June 10, 2026) — cs.CL, cs.IR

**Summary:** Decomposes documents into semantically typed knowledge atoms, each compiled as independent micro-LoRA adapter with provenance retrieval key. Query router selects relevant atoms at inference.

**Key Findings:**
- Outperforms Doc-to-LoRA baselines
- Reduces memory cost of document internalization
- Addresses irrelevant-query interference, limited compositional recall, poor scalability
- End-to-end multi-objective distillation framework

**Insight:** Monolithic adapters for all queries cause interference. Compositional atom approach enables query-specific assembly with better efficiency.

---

### 10. C-DIC: Context-Driven Incremental Compression
**arXiv:2606.12411** (June 10, 2026) — cs.CL, cs.LG

**Summary:** Stores revisable per-thread compression states in compact dialogue memory. Retrieve-revise-write-back loop shares info across turns and updates stale memories.

**Key Findings:**
- Stable inference latency and perplexity over hundreds of dialogue turns
- Adapts truncated backpropagation-through-time (TBPTT) to multi-turn setting
- Superior performance and efficiency on long-form dialogue benchmarks
- Addresses cross-turn memory sharing and revision limitations of existing compressors

**Insight:** Multi-turn dialogue efficiency requires incremental context compression with cross-turn memory sharing, not truncation or summarization.

---

### 11. ModSleuth: Auditing LLM Dependencies
**arXiv:2606.12385** (June 10, 2026) — cs.CL

**Summary:** Agentic system that recursively reconstructs LLM dependency graphs from public artifacts. Recovers 1,060 source-verified dependencies across four public LLM releases.

**Key Findings:**
- Primary challenge: defining what constitutes a dependency, reconciling artifact references
- Distinguishes direct/indirect dependencies
- Represents heterogeneous pipeline roles through operation-centered relationships
- Reveals multi-hop license obligations, train-evaluation coupling, documentation inconsistencies

**Insight:** Modern LLM development has complex, recursive dependency structures far exceeding human ability to trace manually.

---

### 12. AGDO: Attention-Guided Denoising for Diffusion LLMs
**arXiv:2606.12273** (June 10, 2026) — cs.CL — ACL 2026

**Summary:** Post-training method for diffusion LLMs based on attention-derived token dependencies. Tokens attending more strongly to unmasked context exhibit greater generation stability.

**Key Findings:**
- AGDO determines denoising order based on attention structure
- Emphasizes attention-critical tokens during SFT and RL
- Outperforms state-of-the-art post-training methods for dLLMs
- Reasoning performance improved on math and coding benchmarks

**Insight:** Random masking overlooks intrinsic token dependencies. Attention-guided denoising aligns training and optimization with token relationships.

---

### 13. CADFT: Compatibility-Aware Dynamic Fine-Tuning
**arXiv:2606.11206** (April 22, 2026) — cs.CL, cs.LG — ACL 2026

**Summary:** Extends Dynamic Fine-Tuning (DFT) to control sample-level optimization variance. Uses policy-dependent compatibility signal from model likelihoods to modulate supervised updates.

**Key Findings:**
- Suppresses high-variance gradients from incompatible demonstrations
- Delayed compatibility-guided rewriting transforms persistently incompatible demonstrations
- Variance-controlled estimator generalizes token-level stabilization to sample level
- Improves stability, generalization, cold-start RL initialization

**Insight:** DFT assumes all demonstrations are equally suitable learning targets, violated by heterogeneity of large-scale instruction data. Sample-level compatibility control is key.

---

### 14. MLJailDe: Multilingual Jailbreak Detection
**arXiv:2606.11202** (April 22, 2026) — cs.CL

**Summary:** Multilingual jailbreak detection framework with back-translation data augmentation across 11 languages (2,232 benign, 1,239 jailbreak samples).

**Key Findings:**
- F1 score 98.5% across multiple languages
- Average F1 97.1% on unseen languages
- Relative-distance constraints reduce cross-lingual representation dispersion
- Imbalance-aware classification objective handles class imbalance

**Insight:** Safety training concentrated in dominant languages creates exploitable gaps. Multilingual robustness requires aligned cross-lingual supervision.

---

## Total Papers Analyzed: 14
## Sources: arXiv cs.CL/cs.LG/cs.AI, June 10-11, 2026
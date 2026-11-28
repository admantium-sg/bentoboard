# LLM Papers & Research — Cumulative Findings

> Growing knowledge base for LLM research. Updated 2026-05-13.

---

## 2026-05-13

### LongMemEval-V2: Evaluating Long-Term Memory for Web Agents

**Paper:** *Evaluating Long-Term Agent Memory Toward Experienced Colleagues*
**arXiv:** [2605.12493](https://arxiv.org/abs/2605.12493) [cs.CL] — submitted May 13, 2026 (Work in Progress)

Introduces LongMemEval-V2 (LME-V2), a benchmark for evaluating memory systems in specialized web environments. Contains 451 manually curated questions across five core memory abilities: static state recall, dynamic state tracking, workflow knowledge, environment gotchas, and premise awareness.

**Key findings:**
- AgentRunbook-R (RAG-based): 48.5% average accuracy
- AgentRunbook-C (coding agent in augmented sandbox): 72.5%, outperforming strongest RAG baseline by 24pp
- Off-the-shelf coding agent baseline: 69.3%
- Coding agent methods have high latency costs but advance the accuracy-latency Pareto frontier

*Source: [arXiv:2605.12493](https://arxiv.org/abs/2605.12493)*

---

### Task-Adaptive Embedding Refinement via Test-Time LLM Guidance

**Paper:** *Task-Adaptive Embedding Refinement via Test-time LLM Guidance*
**arXiv:** [2605.12487](https://arxiv.org/abs/2605.12487) [cs.CL, cs.IR, cs.LG] — submitted May 12, 2026

Proposes LLM-guided query refinement paradigm that extends embedding model usability to challenging zero-shot search and classification tasks.

**Key findings:**
- Consistent gains across all models and datasets
- Up to +25% relative improvement in literature search, intent detection, key-point matching
- Expands practical settings where embedding models can be effectively deployed

*Source: [arXiv:2605.12487](https://arxiv.org/abs/2605.12487)*

---

### The Algorithmic Caricature: LLM Political Discourse Analysis

**Paper:** *The Algorithmic Caricature: Auditing LLM-Generated Political Discourse Across Crisis Events*
**arXiv:** [2605.12452](https://arxiv.org/abs/2605.12452) [cs.CL, cs.AI, cs.CY] — submitted May 12, 2026

Paired corpus of 1,789,406 posts across nine crisis events. Compares observed discourse with synthetic discourse.

**Key findings:**
- Synthetic discourse is fluent but population-level unrealistic
- More negative, less dispersed in sentiment; structurally more regular, lexically more abstract
- "Caricature Gap" varies by event: larger for fast-moving crises, smaller for formal events

*Source: [arXiv:2605.12452](https://arxiv.org/abs/2605.12452)*

---

### CLM Detour Improves Encoder Continued Pretraining

**Paper:** *A Causal Language Modeling Detour Improves Encoder Continued Pretraining*
**arXiv:** [2605.12438](https://arxiv.org/abs/2605.12438) [cs.CL, cs.AI] — submitted May 12, 2026

Shows that temporarily switching from MLM to CLM — followed by short MLM decay — improves encoder adaptation to new domains.

**Key findings:**
- CLM detour outperforms MLM baselines by +1.2-2.8pp (French biomedical) and +0.3-0.8pp (English biomedical)
- CLM's dense supervision impacts low transformer layers (0-7) far more than MLM
- Changes persist through MLM decay phase and scale with model capacity

*Source: [arXiv:2605.12438](https://arxiv.org/abs/2605.12438)*

---

### Geometric Factual Recall in Transformers

**Paper:** *Geometric Factual Recall in Transformers*
**arXiv:** [2605.12426](https://arxiv.org/abs/2605.12426) [cs.CL] — submitted May 12, 2026

Theoretical and empirical account of geometric memorization in transformers — where learned embeddings encode relational structure directly rather than storing facts in weight matrices.

**Key findings:**
- Single-layer transformer can memorize random bijections with logarithmic embedding dimension
- MLP acts as relation-conditioned selector via ReLU gating, not associative key-value mapping
- MLP transfers zero-shot to new bijections when subject embeddings are re-initialized

*Source: [arXiv:2605.12426](https://arxiv.org/abs/2605.12426)*

---

## 2026-05-12

### ELF: Continuous Diffusion Language Models in Embedding Space

**Paper:** *Embedded Language Flows (ELF)*
**arXiv:** [2605.10938](https://arxiv.org/abs/2605.10938) [cs.CL, cs.AI, cs.LG] — submitted May 11, 2026

A class of diffusion models operating in continuous embedding space (continuous-time Flow Matching). Unlike existing discrete-token diffusion language models (DLMs), ELF stays in continuous embedding space until the final time step, then maps to discrete tokens using a shared-weight network.

**Key findings:**
- Substantially outperforms leading discrete and continuous DLMs
- Better generation quality with fewer sampling steps
- Enables adaptation of image-domain diffusion techniques like CFG

*Source: [arXiv:2605.10938](https://arxiv.org/abs/2605.10938)*

---

### Single-Layer Recurrent Model Challenges Depth Assumptions

**Paper:** *A Single-Layer Model Can Do Language Modeling*
**arXiv:** [2605.10643](https://arxiv.org/abs/2605.10643) [cs.CL, cs.LG] — submitted May 11, 2026

Proposes Grounded Prediction Networks (GPN): one state vector revisited at every step through a single recurrent block.

**Key findings:**
- 130M parameter 1-layer GPN+M reaches FineWeb-Edu perplexity 18.06 (within 13% of 12-layer Transformer++)
- 2-layer variant closes gap to 6% of deep baselines
- Direct geometry inspection reveals: default-token direction, content horizon, fast/slow memory pools

*Source: [arXiv:2605.10643](https://arxiv.org/abs/2605.10643)*

---

### DISCA: Cultural Alignment Without Fine-Tuning

**Paper:** *Training-Free Cultural Alignment of Large Language Models via Persona Disagreement*
**arXiv:** [2605.10843](https://arxiv.org/abs/2605.10843) [cs.CL, cs.AI, cs.CY] — submitted May 11, 2026

Inference-time method using within-country sociodemographic disagreement as steering signal.

**Key findings:**
- Reduces cultural misalignment on MultiTP by 10-24% on models ≥3.8B
- Works without changing model weights
- Inference-time calibration as scalable alternative to fine-tuning

*Source: [arXiv:2605.10843](https://arxiv.org/abs/2605.10843)*

---

### GCAD: Stable Activation Steering for Multi-Turn Dialogue

**Paper:** *Improving Activation Steering via Attention-Level Interventions*
**arXiv:** [2605.10664](https://arxiv.org/abs/2605.10664) [cs.CL, cs.AI] — submitted May 11, 2026

Identifies KV-cache contamination as key failure mode in standard residual-stream steering. Proposes Gated Cropped Attention-Delta steering (GCAD).

**Key findings:**
- Improves multi-turn coherence drift from -18.6 to -1.9
- Raises turn-10 trait expression from 78.0 to 93.1
- Steering more reliable when interventions follow prompt-mediated pathways

*Source: [arXiv:2605.10664](https://arxiv.org/abs/2605.10664)*

---

### On-Policy Distillation: When It Helps, When It Hurts

**Paper:** *Unmasking On-Policy Distillation: Where It Helps, Where It Hurts, and Why*
**arXiv:** [2605.10889](https://arxiv.org/abs/2605.10889) [cs.LG, cs.AI] — submitted May 11, 2026

Training-free diagnostic framework at per-token, per-question, per-teacher resolution.

**Key findings:**
- Distillation guidance has higher alignment on incorrect rollouts vs correct ones
- On correct rollouts, teacher signal tends to become noisy
- Optimal distillation context depends on student capacity and target task

*Source: [arXiv:2605.10889](https://arxiv.org/abs/2605.10889)*

---

### CoT Faithfulness Studies Have Format Confound

**Paper:** *The Last Word Often Wins: A Format Confound in Chain-of-Thought Corruption Studies*
**arXiv:** [2605.10799](https://arxiv.org/abs/2605.10799) [cs.LG, cs.AI, cs.CL] — submitted May 11, 2026

Identifies systematic confound: corruption studies detect where answer text appears, not where computation occurs.

**Key findings:**
- On GSM8K chains ending with "the answer is X", removing only answer statement collapses suffix sensitivity ~19x at 3B
- Effect persists through 14B (8.5x ratio), converges toward zero at 32B
- Proposes three-prerequisite protocol for corruption-based faithfulness studies

*Source: [arXiv:2605.10799](https://arxiv.org/abs/2605.10799)*

---

### DataMaster: Autonomous Data Engineering for ML

**Paper:** *Towards Autonomous Data Engineering for Machine Learning*
**arXiv:** [2605.10906](https://arxiv.org/abs/2605.10906) [cs.LG, cs.AI] — submitted May 11, 2026

Agent improves fixed learning algorithm by optimizing only the data side.

**Key findings:**
- On MLE-Bench Lite: improves medal rate by 32.27% over initial score
- On PostTrainBench: surpasses instruct model on GPQA (31.02% vs 30.35%)

*Source: [arXiv:2605.10906](https://arxiv.org/abs/2605.10906)*

---

### Reasoning Leaderboard: Grok 4.1 Holds Lead (May 12 Update)

BenchLM provisional reasoning leaderboard (May 12, 2026):
1. **Grok 4.1** (xAI): 96.8%
2. **Gemini 3.1 Pro** (Google): 96.3%
3. **GPT-5.4** (OpenAI): 95.6%
4. **GPT-5.3 Codex** (OpenAI): 93.5%
5. **Gemini 3 Pro Deep Think** (Google): 88.8%

Chain-of-thought models continue to dominate reasoning benchmarks but at higher latency/token cost.

*Source: [BenchLM Reasoning](https://benchlm.ai/reasoning)*

---

## 2026-05-11

### Test-Time Scaling: AutoTTS Automates Strategy Discovery

**Paper:** *LLMs Improving LLMs: Agentic Discovery for Test-Time Scaling*
**arXiv:** [2605.08083](https://arxiv.org/abs/2605.08083) [cs.CL] — submitted May 8, 2026
**Authors:** Tong Zheng et al.

A new framework (AutoTTS) that automatically discovers test-time scaling strategies instead of hand-crafting them. Key insight: researchers traditionally design reasoning patterns by intuition, leaving much of the computation-allocation space unexplored.

**Key findings:**
- Frames width-depth TTS as controller synthesis over pre-collected reasoning trajectories
- Discovered strategies improve accuracy-cost tradeoff over strong manually designed baselines
- Generalizes to held-out benchmarks and model scales
- Entire discovery costs only **$39.9 and 160 minutes**

**Implication:** Automated TTS strategy discovery could replace expert-crafted heuristics, democratizing access to optimized inference.

*Source: [arXiv:2605.08083](https://arxiv.org/abs/2605.08083)*

---

### Tool Calling Internals: Linear Readability and Early Error Detection

**Paper:** *Tool Calling is Linearly Readable and Steerable in Language Models*
**arXiv:** [2605.07990](https://arxiv.org/abs/2605.07990) [cs.CL, cs.AI, cs.LG] — submitted May 8, 2026
**Authors:** Zekun Wu et al. (UCL, Imperial College London, Holistic AI)

**Breakthrough finding:** Tool identity is linearly readable inside the model — adding the mean-difference between two tools' average internal activations switches which tool the model selects at **77-100% accuracy** (93-100% at 4B+ parameters).

**Key capabilities discovered:**
- **Steering:** Flipping the tool name is enough — JSON arguments autoregressively match the new tool's schema
- **Error detection:** Queries where top-1 and top-2 tool gap is smallest produce **14-21x more wrong calls** (Gemma 3 12B/27B)
- **Anatomy:** Effect concentrates along one direction (output layer row for target tool's first token) — a unit vector along it reaches 93-100%
- **Pretraining vs fine-tuning:** Base models encode the right tool before they can emit it (69-82% on BFCL, vs 2-10% for base generation)

**Implication:** Tool selection is linearly encoded in internal representations — diagnostic probes could catch errors before execution.

*Source: [arXiv:2605.07990](https://arxiv.org/abs/2605.07990)*

---

### GLiGuard: 0.3B Guardrail Model Outperforms 7B-27B Decoders

**Paper:** *Schema-Conditioned Classification for LLM Safeguard*
**arXiv:** [2605.07982](https://arxiv.org/abs/2605.07982) [cs.CL, cs.CR] — submitted May 8, 2026
**Authors:** Urchade Zaratiana et al.

A **0.3B-parameter bidirectional encoder** (adapted from GLiNER2) that evaluates prompt safety, response safety, refusal detection, 14 harm categories, and 11 jailbreak strategies in a single forward pass.

**Performance:**
- Competitive F1 scores with 7B-27B decoder-based guards
- **23-90x smaller**, **16x higher throughput**, **17x lower latency**
- Schema-conditioned design allows task/label composition at inference time

**Implication:** Compact encoders can approach guardrail accuracy of much larger models while drastically reducing inference cost.

*Source: [arXiv:2605.07982](https://arxiv.org/abs/2605.07982)*

---

### Clarification Timing in Long-Horizon Agents: The Gap

**Paper:** *Ask Early, Ask Late, Ask Right: When Does Clarification Timing Matter for Long-Horizon Agents?*
**arXiv:** [2605.07937](https://arxiv.org/abs/2605.07937) [cs.CL] — submitted May 8, 2026
**Authors:** Anmol Gulati et al.

**Counter-intuitive findings from 6,000+ runs:**
- **Goal clarification** loses nearly all value after 10% of execution (pass@3 drops from 0.78 to baseline)
- **Input clarification** retains value through ~50% of execution
- Deferring any clarification past mid-trajectory degrades performance below never asking
- **No current frontier model asks within the empirically optimal window** — strategies range from over-asking (52% of sessions) to never asking at all

**Implication:** Timing-aware clarification policies are a missing capability — all frontier models are either too eager or too passive.

*Source: [arXiv:2605.07937](https://arxiv.org/abs/2605.07937)*

---

### LANCE: Alleviating Rigid Rejection via Label Enhancement

**Paper:** *Beyond "I cannot fulfill this request": Alleviating Rigid Rejection in LLMs via Label Enhancement*
**arXiv:** [2605.07883](https://arxiv.org/abs/2605.07883) [cs.CL] — submitted May 8, 2026
**Authors:** Congyu Qiao et al.

**Problem:** Traditional refusal mechanisms cause "rigid rejection" — a generic template that indiscriminately triggers refusals, undermining naturalness.

**Solution:** LANCE uses variational inference for label enhancement — predicting a continuous distribution across multiple rejection categories. Fine-grained rejection distributions provide multi-way gradients to neutralize hazardous elements while preserving naturalness.

**Result:** Significantly alleviates rigid rejection while maintaining high security standards.

*Source: [arXiv:2605.07883](https://arxiv.org/abs/2605.07883)*

---

### Reasoning Leaderboard: Grok 4.1 Holds Lead (May 7 Update)

**BenchLM provisional reasoning leaderboard (May 7, 2026):**
1. **Grok 4.1** (xAI): 96.8%
2. **Gemini 3.1 Pro** (Google): 96.3%
3. **GPT-5.4** (OpenAI): 95.6%
4. **GPT-5.3 Codex** (OpenAI): 93.6%
5. **Claude Opus 4.6** (Anthropic): 87.8%

**Key note:** Chain-of-thought models dominate but at higher latency/token cost — "A 5-point gap here usually means the difference between a model that tracks complex argument chains reliably and one that loses the thread."

*Source: [BenchLM Reasoning Leaderboard](https://benchlm.ai/reasoning)*

---

## 2026-05-10

### Energy-Aware LLM Inference: Up to 73% Reduction Possible

**Paper:** *Energy Considerations of Large Language Model Inference and Efficiency Optimizations*  
**arXiv:** [2504.17674](https://arxiv.org/abs/2504.17674) [cs.CL, cs.LG] — submitted April 24, 2025  
**Authors:** Clara Na et al.

A newer energy analysis paper providing comprehensive coverage across software frameworks, decoding strategies, GPU architectures, serving settings, and model parallelism.

**Key findings:**
- Proper application of inference optimizations can reduce **total energy use by up to 73%** from unoptimized baselines
- Workload geometry, software stack, and hardware accelerators all significantly affect efficiency gains
- Naive energy estimates based on FLOPs or theoretical GPU utilization **significantly underestimate** real-world energy consumption

**Implication:** Sustainable LLM deployment requires co-optimization of model architecture, serving stack, and hardware — not just precision reduction.

*Source: [arXiv:2504.17674](https://arxiv.org/abs/2504.17674)*

---

### May 2026 Model Landscape: GPT-5.5, Claude Opus 4.7, and the Pricing Gap

**New models since last report:**
- **GPT-5.5** — Achieves perfect 100% on AIME 2026 (high school math competition)
- **Claude Opus 4.7** — Excels in adaptive reasoning (GRIND) and multi-file code reasoning
- **Qwen 3.6 Max-Preview** — Raw coding-benchmark dominance

**Key insight from May 2026 leaderboards:** "The single biggest story of late April / early May 2026: the **Western/Chinese pricing gap is now 5-25x**" — DeepSeek V4-Flash offers dramatically lower pricing than Western counterparts.

**Benchmark patterns:**
- GPT-5.x family and Grok 4 dominate reasoning and coding benchmarks
- Claude models excel in agentic coding tasks
- AIME 2026 perfect score (100%) demonstrates frontier math reasoning capability

*Source: [FutureAGI May 2026 rankings](https://futureagi.com/blog/best-llms-may-2026), [Siliconflow benchmarks](https://www.siliconflow.com/articles/benchmark)*

---

### LLM Reasoning Failures: First Comprehensive Survey

**Paper:** *Large Language Model Reasoning Failures*  
**arXiv:** [2602.06176](https://arxiv.org/abs/2602.06176) — submitted Feb 2026  

A comprehensive survey dedicated specifically to reasoning failures in LLMs — "the first such survey" according to authors. Covers systematic taxonomy of reasoning failure modes, analysis of when and why they occur, and approaches to address them.

*Source: [arXiv:2602.06176](https://arxiv.org/abs/2602.06176)*

---

## 2026-05-09

### Benchmark Saturation Analysis: The 2026 Reference

**Comprehensive benchmark review** from benchmarkingagents.com (April 2026, 17 benchmarks indexed) provides clear saturation analysis:

- **Saturated** (stop using for frontier comparisons): MMLU (frontier ~90%, designed for 2020), HumanEval/MBPP (high 90s), HellaSwag, WinoGrande, DROP
- **Active**: MMLU-Pro (10-choice, mandatory CoT → high-80s), GPQA-Diamond (graduate-level reasoning → high-70s), ARC-AGI-2 (visual abstraction → mid-60s), Humanity's Last Exam (3,000 expert questions → below 20%), LiveCodeBench (contamination-resistant coding), SWE-bench Verified (coding agents → low-to-mid 70s), WebArena (agentic → high-40s)

**Editor's recommended 2026 stack**: MMLU-Pro (knowledge), GPQA-Diamond (reasoning), SWE-bench Verified (coding agents), Chatbot Arena (human preference), MMMU (multimodal).

**Key insight**: MMLU is now useless for frontier comparisons — it was designed for a 2020 model capability level. LiveCodeBench structurally prevents contamination by sourcing problems post-training-cutoff.

**Source:** [benchmarkingagents.com/benchmarks-list](https://benchmarkingagents.com/benchmarks-list/) — captured April 2026

---

### RL-Based Reasoning Training: DAPO Dominates, Base Model Selection Critical

**Most influential ML papers of 2026** (per paperdigest April tracking):

**DAPO (arxiv:2503.14476)** — #1 by citation in 2025. Tiger AI Lab's open-source RL system with four published techniques for large-scale LLM RL.

**R1-Zero-Like Training (arxiv:2503.20783)** — Critical analysis showing base model choice dominates RL reasoning outcomes more than algorithm tweaks.

**Open-Reasoner-Zero (arxiv:2503.24290)** — First open-source implementation of large-scale reasoning RL on base models. Prioritizes accessibility.

**SimpleRL-Zoo (arxiv:2503.18892)** — Tested zero RL across 10 base models. Finding: model family matters more than model size for reasoning RL suitability.

**Implication**: The research question has shifted from "can RL produce reasoning?" to "what base model and algorithm configuration produces the best reasoning at scale?"

*Sources: [DAPO paperdigest](https://www.paperdigest.org/reader/?paper_id=arxiv-2503.14476), [R1-Zero paperdigest](https://www.paperdigest.org/reader/?paper_id=arxiv-2503.20783), [Open-Reasoner-Zero paperdigest](https://www.paperdigest.org/reader/?paper_id=arxiv-2503.24290)*

---

### CoT Pruning Research at ICLR 2026

ICLR 2026 features **CoT-RVS** (zero-shot chain-of-thought reasoning segmentation) and **"Pruning Long Chain-of-Thought of Large Reasoning Models via Small-Scale Preference Optimization"** — indicating active research into making verbose CoT computationally tractable without quality loss.

*Source: [ICLR 2026 Papers](https://iclr.cc/virtual/2026/papers.html)*

---

## 2026-05-08

### Reasoning Benchmarks Update (May 2026)

**New leaderboard snapshot from BenchLM:**
- Grok 4.1 (xAI): 96.8% — provisional leader
- Gemini 3.1 Pro (Google): 96.3%
- GPT-5.4 (OpenAI): 95.6%
- GPT-5.3 Codex: 93.6%
- Claude Opus 4.6: 87.8%

**Notable benchmark developments:**
- New tasks added: ARC-AGI-2 (abstract reasoning, 25% weight), Graphwalks BFS/Parents (long-context graph traversal)
- MRCR v2 now tests 64K-256K context length slices
- Chain-of-thought models dominate but at higher latency/token cost — "5-point gap usually means the difference between a model that tracks complex argument chains reliably and one that loses the thread"

**Source:** [BenchLM Reasoning Leaderboard](https://benchlm.ai/reasoning) (updated May 7, 2026)

---

### Quantization Research: Energy Efficiency Analysis

**Paper:** *Understanding Efficiency: Quantization, Batching, and Serving Strategies in LLM Energy Use*  
**Authors:** Alexandra Sasha Luccioni et al.  
**arXiv:** [2601.22362](https://arxiv.org/abs/2601.22362) [cs.LG] — submitted Jan 29, 2026  
**Platform:** NVIDIA H100 GPUs, Hugging Face TGI server

**Key findings:**
- Lower-precision formats only yield energy gains in **compute-bound regimes** (not universally beneficial)
- **Batching improves energy efficiency**, especially in memory-bound phases like decoding
- **Request arrival shaping** (structured timing) can reduce per-request energy by **up to 100x**
- Sustainable LLM deployment depends on orchestration of the serving stack, not just model internals

**Implication:** Phase-aware energy profiling and system-level optimizations are emerging as critical for greener AI services.

---

### ACL 2026: ARCQuant — NVFP4 Quantization Breakthrough

**Paper:** *ARCQuant: Boosting NVFP4 Quantization with Augmented Residual Channels for LLMs*  
**arXiv:** [2601.07475](https://arxiv.org/abs/2601.07475)  
**Status:** 🏆 Accepted to **ACL 2026 Main Conference** (April 2026)

**Problem solved:** Activation outliers cause severe accuracy degradation in fine-grained quantization (NVFP4). Traditional mixed-precision splits computations into separate branches → kernel launch overhead + memory fragmentation.

**Solution:** ARCQuant captures quantization residuals of critical channels and fuses them back as Augmented Residual Channels (ARC) — instead of separate computation path.

**Integration status:**
- ✅ NVIDIA TensorRT-LLM (merged March 2026)
- ✅ vLLM integration available
- 📦 Model support: Qwen3, Mixtral, Wan2.2

**Formats supported:** NVFP4, MXFP4, HiF4, INT4

**Source:** [GitHub: actypedef/ARCQuant](https://github.com/actypedef/ARCQuant)

---

### Prompt Engineering Trends (2026)

**Key patterns that actually work now:**
1. **Structured reasoning** — explicit chain-of-thought with XML-based structuring
2. **Instruction hierarchies** — model-aware optimization at layer level
3. **Model-specific tactics** — different approaches for Claude, GPT-5, Gemini
4. **Context engineering** — PCRF framework gaining traction
5. **150-300 word rule** — optimal prompt length varies by model

**Sources:** [Prompting Guide 2026](https://ryf.sh/blog/prompting-2026), [Prompt Engineering Patterns 2026](https://groundy.com/articles/prompt-engineering-patterns-2026-what-actually-works/)

---

*Last updated: 2026-05-12*
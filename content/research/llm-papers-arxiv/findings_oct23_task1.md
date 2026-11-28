# Findings — Task 1 — October 23, 2026 (arXiv cs.CL / cs.LG / cs.AI)

**Method:** arXiv API (`export.arxiv.org/api/query`) for `cs.CL`, `cs.LG`, `cs.AI`, newest-first. 60 entries per category fetched into `/tmp/cs.CL.xml`, `/tmp/cs.LG.xml`, `/tmp/cs.AI.xml` and parsed locally. **180 raw entries → 143 unique-category papers**, dominated by the **2026-10-22** submission cycle (`2610.309xx`–`2610.316xx`). Full abstracts pulled in two batches (`/tmp/batchA.xml`, `/tmp/batchB.xml`) so that every claim below is quoted from the authors' own abstract rather than a title. **Dedup:** every selected ID grepped against `cumulative_findings.md` and all of `daily_reports/` — zero hits, so all 32 papers below are new to this knowledge base.

**Batch character:** the October 22 cycle is the most *audit-oriented* batch so far. Eight of the 32 selected papers are not about making models better but about showing that a measurement, an optimization, or a deployment claim does not mean what it appears to mean: prompting strategies don't transfer across judges; tools can make model comparisons *less* stable; context augmentation "gains" are undirected perturbations; open-book LoRA scores mostly measure reading, not knowledge; a schema minimum count makes models pad their output; a "proven" architecture gain was future-token leakage; an inference speedup on a server GPU can invert on Apple Silicon.

---

## Chain-of-Thought, Prompting & Test-Time Scaling

### Causal Chain of Thought: Mitigating Attention Leakage via Context Isolation
**arXiv:2610.31639v1** (Oct 22, 2026)
- Problem: CoT rationales look explanatory but there is **no guarantee they causally drive the answer**. In standard autoregressive generation, dense attention lets each reasoning step attend to the whole context, so a model can **look up the answer directly** and emit a post-hoc justification.
- CausalCoT decomposes the problem into a **directed acyclic graph of atomic sub-questions**; each node is evaluated in an **isolated context containing only its direct causal parents**. The Markovian structure removes attention pathways to non-parent content.
- Result: competitive predictive performance, but **causal sensitivity of intermediate reasoning steps improves by an average of 12 and up to 21 percentage points** over the strongest baseline; the dependency graph enables test-time interventions where local corrections propagate predictably downstream.
- Read against Oct 21's Rationale Contrastive Decoding (`2610.29518`) and Oct 22's `2610.31667`: three separate attacks on the same problem — that a rationale must *matter*.
- Source: https://arxiv.org/abs/2610.31639

### Direct Pass@k Optimization for Thought Pruning: Balancing Quality and Diversity in Test-Time Reasoning
**arXiv:2610.31667v1** (Oct 22, 2026)
- Test-time scaling generates many candidate solutions; pruning after a short prefix saves compute. Two existing families: **quality-based** (drop prefixes likely to fail) and **diversity-based** (keep different trajectories). Their tension is exploration vs exploitation, and prior work "exposes this trade-off directly" hardly at all.
- This work optimizes **pass@k over the selected pool directly** — choosing the pool to maximize the probability that at least one partial solution, continued to completion, yields a correct answer. Because the objective **simultaneously rewards quality and penalizes redundancy**, balance falls out of the criterion rather than ad-hoc design.
- On **eight open-weight reasoning models** it beats existing quality-based and diversity-based pruning strategies; gains are largest when a **moderate** number of partial solutions survive.
- Source: https://arxiv.org/abs/2610.31667

### A Reality Check of Inference-Time Context Augmentation Methods
**arXiv:2610.30983v1** (Oct 22, 2026)
- Context augmentation (filler tokens, elaboration, injected relevant content) is evaluated in isolation and only by accuracy gain, so it is unclear whether the methods compare fairly or whether the gain is real.
- Evaluation framework over **five methods differing in how informative the inserted content is**, applied at sentence level, across **seven models of multiple sizes** on **three datasets**.
- Key negative result: accuracy gains are **not always genuine improvements but undirected perturbations** — methods correct some predictions while breaking others, especially when the inserted text only adds compute time.
- Mechanism: methods that bring **no additional content** primarily change predictions **near the decision boundary**. Authors' recommendation: evaluate the *reliability* of the gain before adopting these methods.
- Source: https://arxiv.org/abs/2610.30983

### Prompting Strategy Effects Depend on the Judge: A Multilingual Study of LLM-as-a-Judge Robustness
**arXiv:2610.31172v1** (Oct 22, 2026)
- Scale: **9 prompting strategies × 4 open-weight judges × 27 languages × 4 tasks across 13 datasets → over 1 million pointwise scores** on gold-reference outputs, validated against human judgments.
- Findings: prompting strategies are **not transferable**. The **choice of judge model dominates the choice of prompting strategy**; **strategy effects reverse direction across judges**; and stability **degrades in low-resource languages**, where aggregate reporting conceals the effect.
- Implication: prompting effects are conditioned on judge, task *and* language — strategies must be validated for the intended evaluation setting, and cross-study comparisons must account for both judge and prompt configuration.
- Methodological note: prompt-sensitivity studies are largely English-centric, and multilingual judge studies typically fix the prompt template. This paper crosses both axes for the first time.
- Source: https://arxiv.org/abs/2610.31172

### Prompt Sensitivity in Tool-Augmented Model Comparisons
**arXiv:2610.31148v1** (Oct 22, 2026)
- Question: does giving models tools make benchmark comparisons *more* stable across rewordings? A raw accuracy gain cannot answer this, because tools change several steps between question and scored answer at once.
- Method: a **matched protocol** that separates answer readout, reasoning, the decision to call, the tool's answer, and the report supplied without a call. Applied to **six open models, five domains, five wordings**.
- Findings: tools raise accuracy where a program can answer the question, and **widen the wording sensitivity of many pairwise comparisons**. The widening follows **call frequency**, and call frequency follows wording for some models but not others; it also depends on the interface — a native tool-calling interface plus a second tool description showed **no detected widening** in molecules.
- Conclusion: **deterministic reports do not guarantee stable comparisons.** Recommendation: report call frequency and comparison stability under several wordings beside accuracy.
- Source: https://arxiv.org/abs/2610.31148

### Mixing Matters: Evidence Position Bias Across Sequence Mixers in Long-Context Question Answering
**arXiv:2610.31135v1** (Oct 22, 2026)
- Design: move one gold document through a **fixed set of nine distractors** and compare **Transformer, state-space, and hybrid Mamba** architectures on long-context QA.
- Findings: evaluated **Transformers show a beginning advantage** that the evaluated **state-space models lack**; **both families favor evidence near the end**. A matched pure-vs-hybrid Mamba comparison points the same way but is **statistically uncertain**. Transformer primacy reappears on synthetic retrieval, where the state-space ceiling prevents a family comparison.
- Prompt changes can create or nearly remove a beginning advantage; attention concentration near initial tokens covaries with beginning sensitivity in the tested Transformer family. A corpus swap within one state-space architecture changes overall accuracy **without a detectable change in curve shape**.
- Honest framing by the authors: effective context use depends on architecture family, capability, task and prompt — the sequence mixer is **not** isolated as sole cause.
- Source: https://arxiv.org/abs/2610.31135

### How Depth Growth and Looping Shape In-Context Learning in Language Models
**arXiv:2610.31421v1** (Oct 22, 2026)
- Scope: pretrained models **up to 3B parameters** plus controlled tasks; investigates how parameter reuse (looped, depth-grown) shapes the *acquisition, retention and mechanism* of ICL.
- Finding: grown and looped models **acquire ICL earlier** in controlled tasks than a full-depth dense reference and **retain it more strongly** when learning fixed associations in the weights is also possible — a shared inductive bias toward learning from context.
- Mechanistic result: tracing attention heads through training shows **depth growth propagates early induction heads across layers**; ablations show grown and looped models rely more strongly on **induction-ranked heads** for both few-shot performance and later-token prediction.
- Complements `2610.31633` (KV-sharing for looped models) and Oct 21's looped-model work: the loop is now being studied as an *architectural prior*, not just a compute-saving trick.
- Source: https://arxiv.org/abs/2610.31421

---

## Inference Efficiency, KV Caches & Quantization

### RIFT: KV Cache Compression for Draft Models with Complementary Compressibility Training
**arXiv:2610.31098v1** (Oct 22, 2026)
- Speculative decoding matters most for **long outputs**, which need a large KV cache — but selection-based KV compression that focuses on **prefill** information loses relevance as output length grows. The authors name this **decode staleness** and show it degrades drafter accuracy.
- RIFT is a family of selection-based strategies **balancing prefill information against recent generated tokens**; refreshing the selection during generation significantly improves drafter quality at the cost of extra decode latency. An **adaptive refresh** strategy reduces score-calculation count while retaining quality.
- Adds a **compressibility-driven drafter training phase** based on sparse attention masks. Result: **Qwen3.5-4B drafting for Qwen3.5-122B retains over 98% of full-cache acceptance length** on 32K-token inputs, 4K-token outputs, and an **8K-token KV cache budget**.
- Source: https://arxiv.org/abs/2610.31098

### BeNice! Closing Looping's Inference-Memory Gap via KV-Sharing
**arXiv:2610.31633v1** (Oct 22, 2026)
- Looped architectures re-apply the same block, so **each recurrence generates its own KV cache and memory grows linearly** with depth reuse.
- Prior work found that in some models the final recurrence's KV can be shared with earlier ones **without quality loss** — a property the authors call **KV-shareability** — but the mechanism is poorly understood and even identically trained looped models don't consistently show it.
- Two-stage method: (1) **stochastic depth during pretraining**, inducing contractive residual dynamics that push representations toward a common limit across recurrences; (2) **BeNice!**, a post-training method that broadcasts the final recurrence's KV cache into the first recurrence and trains it to produce compatible residuals.
- Composes with alternative KV-compression methods — **multi-latent attention, Kimi delta attention, fp8/mxfp8/nvfp4 KV quantization** — rather than competing with them. In simulated low-memory long-context inference: **cache hit rate up to +31.4%, throughput up to +23.6%, p90 time-to-first-token up to −83.6%**.
- Source: https://arxiv.org/abs/2610.31633

### Evaluating the Applicability of LLM Inference Optimizations on Apple Silicon
**arXiv:2610.31479v1** (Oct 22, 2026)
- Premise: nearly all inference optimizations are designed and validated on **server-class NVIDIA GPUs under batched serving**, but Apple Silicon is among the most widely used local-inference platforms.
- Four families evaluated across **four Apple machines** under a **common single-request decode workload**, with matched RTX 4090 comparisons where possible: KV-cache pruning, speculative decoding, ported GPU kernels, post-training quantization.
- Results: **KV-cache pruning reaches up to 1.75× end-to-end throughput on Apple but can reduce throughput on desktop NVIDIA GPUs**. **All evaluated speculative decoding methods reduce throughput on Apple**, despite reported 2–6× gains on server GPUs. **CUDA kernel designs transfer only partially** — public Metal lacks asynchronous copy and batch-one decode makes serving-oriented mechanisms inapplicable, though transferable components yield up to **1.20× decode throughput**. Quantization gains vary by machine.
- Thesis: **a reported speedup is not a portable property of a technique alone**, but a joint function of technique, runtime, hardware contract and workload regime.
- Source: https://arxiv.org/abs/2610.31479

### Low-Bit N-Gram Embeddings for Language Models
**arXiv:2610.31646v1** (Oct 22, 2026)
- Motivation is scale: **DeepSeek-V4.1-Flash allocates 196 billion parameters to its Engram n-gram memory** — larger than many models' entire active parameter budget.
- Method: store n-gram embeddings at low precision and systematically sweep quantization methods and **bit allocations across tables**.
- Trained-from-scratch result (nanochat-, Llama-, GPT-2-families): **four-bit tables save ~75% of table memory while preserving more than 99% of the validation-loss improvement** the tables provide. Fewer bits costs more, but a **short fine-tuning phase recovers a significant part** of the loss.
- Sharpest result: **reinvesting the saved memory in larger tables improves performance beyond the original full-precision tables while still using less memory**.
- Applied to existing large models: on **DeepSeek-V4.1-Flash and Qwen3.8-Flash-Next**, low-bit tables save **47–55% of table memory** with **perplexity increases under 1.2%** and largely preserved downstream performance.
- Source: https://arxiv.org/abs/2610.31646

### Extreme Compression of Per-Layer Embeddings via Cross-Layer Latent Vector Quantization (OPTIC)
**arXiv:2610.31309v1** (Oct 22, 2026)
- Per-Layer Embeddings account for **35.2% of the parameters of Gemma 4 E4B**. At extreme compression, conventional quantizers give each token-layer vector its own few-byte code.
- OPTIC (Output-Path-fitted, Token-shared Indexed Codes) stores **one quantized code tuple per token** and decodes it at every layer with a **layer-specific affine decoder**; codes and decoders are fitted to the **PLE output path**, not to the stored vectors.
- At ~**100× PLE compression** of BF16 E4B: OPTIC retains **97.8%** of uncompressed performance across seven benchmarks, while **product quantization — the strongest of six conventional baselines — retains 66.3%**. At **594× and 1,002×**: 90.5% and 84.1%.
- On the official E4B release with 4-bit linear weights and 16-bit activations (W4A16), OPTIC retains **96.9%** at ~100× PLE compression. Inference cost: **29.7% less GPU memory** at the same KV-cache size, at most **0.40% slower**.
- Source: https://arxiv.org/abs/2610.31309

### SQuAT: Spherical Lattice Vector Quantization-Aware Training
**arXiv:2610.31412v1** (Oct 22, 2026)
- Lattice-based VQ offers strong rate-distortion trade-offs for low-bit LLMs, but its behaviour under **quantization-aware training (VQ-QAT)** was poorly understood. This scales lattice VQ-QAT to **billion-parameter LLMs and multi-billion-token regimes** for the first time.
- SQuAT = **shape-gain VQ-QAT with separate straight-through estimators** for shape and gain. Weights are decomposed into direction and magnitude: **normalized directions quantized with an E8-derived spherical codebook**, gains quantized independently with low-bit scalar quantizers.
- Mechanism: separate STEs induce **tangent-space updates for directions** — an implicit form of spherical (Riemannian) optimization — unlike a standard STE on the full quantizer, which ignores the shape-gain structure.
- Scalability: a **distributed exact nearest-neighbor assignment** scheme where workers quantize disjoint weight blocks and communicate only discrete indices, cutting VQ-QAT training time **12.8×** and enabling **10B tokens** of training.
- Result: on instruction-tuned LLaMA-3.2-1B/3B, Qwen3-4B and base Qwen3-1.7B, SQuAT consistently beats standard VQ-QAT STE under identical quantizers and initialization, and claims **SOTA VQ-QAT accuracy**.
- Source: https://arxiv.org/abs/2610.31412

### When to Follow the Teacher: Advantage-Based On-Policy Distillation
**arXiv:2610.31563v1** (Oct 22, 2026)
- Online Policy Distillation (OPD) beats offline SFT by training on the student's own trajectories — but standard OPD trains the student to follow the teacher **at every state**, assuming teacher guidance is always beneficial.
- AOPD distinguishes what the teacher *prefers* from what actually helps *this* student: teacher actions are weighted by their **counterfactual advantage under the student**; actions that improve the student's expected outcome are reinforced, others downweighted.
- Key efficiency claim: the counterfactual advantage normally requires extra rollouts, but the AOPD objective **can be estimated using only standard student rollouts and terminal rewards** — teacher importance weights on student-sampled actions give an unbiased advantage-weighted estimate with **no additional rollouts or reward evaluations**.
- Gains over distillation and RL baselines on **math, coding and MedQA**, in both external-teacher and self-distillation settings.
- Source: https://arxiv.org/abs/2610.31563

---

## Auditing Architecture & Training Correctness

### Beyond Causal Masks: Auditing and Localizing Hidden Future-Token Leakage in Adaptive Sequence Models
**arXiv:2610.31522v1** (Oct 22, 2026)
- The scenario: an adaptive residual-routing decoder whose **sequence-level routing summary exposes prefix positions to future tokens despite a correct causal attention mask**. An anomalous 24-layer checkpoint cut validation loss from the baseline's **3.5958 to 1.4259** — and was fake.
- Diagnosis: it **fails a prefix-invariance audit** and has substantially higher reference-model perplexity during free-running generation. Layer-wise diagnostics and implementation inspection trace the violation to a **full-sequence summary broadcast through the dynamic routing-query path**.
- Repair: **two independently trained 12-layer causal repairs** eliminate detectable leakage and return validation loss and reference perplexity to the control scale, removing the apparent advantage.
- Tooling: prefix-invariance contract, **maximum prefix-output discrepancy (LeakScore)**, behavioral metrics, layer-wise profiles; validated with six synthetic implementation pairs across five module families, clean pretrained controls, controlled fault injection, and cache consistency across numerical precisions.
- Takeaway: **lower teacher-forced loss must be read together with whole-model causal checks and free-running evaluation.**
- Source: https://arxiv.org/abs/2610.31522

### A Fix for Softmax and Cross-Entropy
**arXiv:2610.31642v1** (Oct 22, 2026)
- Two numerical bugs in standard softmax / log-softmax / cross-entropy implementations:
  1. **Softmax Collapse** — rounds the target logit's gradient to zero when that logit is much larger than the others, so gradients no longer sum to zero.
  2. **Softmax Cancellation** — when student and teacher logits are close, produces **non-zero gradients even when the logits are equal**.
- The paper gives simple corrected implementations and reports that the fix **eliminates the previously-observed "Slingshot" phenomenon**, speeds up grokking with weight decay, prevents accuracy collapse without weight decay, stops student networks drifting away from the teacher during distillation, and shows that after memorization **logit growth is bounded by an equilibrium between weight decay and Adam's ε**.
- Why it matters here: Oct 20–22 papers repeatedly report post-training anomalies (generation collapse, drift, grokking stalls). A shared, fixable implementation bug in the loss is a candidate explanation for a class of them.
- Source: https://arxiv.org/abs/2610.31642

---

## Memory, Agents & Long-Horizon Behaviour

### When LLMs Forget What They Believe: Characterizing State Integrity Collapse in Long-Horizon Dialogues
**arXiv:2610.31314v1** (Oct 22, 2026)
- Defines **State Integrity Collapse**: the model preserves a stated constraint in memory but **stops applying it to later turns** — a recall-compliance dissociation. Introduces **StateTrack-Bench**: controlled conversations covering numerical, format, role/persona, factual-memory and logical-rule constraints.
- Numbers: across **seven provider-pinned model snapshots** and five dialogue-depth probes, **strict joint retention ranges 62.4% to 100.0%**, with degradation concentrated in **symbolic constraints** and in one especially brittle model. A forked recall audit shows **88.6% of observed failures are behavioral-drift failures rather than ordinary forgetting** (84.4% excluding the brittle outlier).
- Degradation persists to **50 turns**; **Structured State Anchoring recovers up to 24.4 points** on immutable constraints.
- Implication: reliability **cannot be inferred from single-turn instruction following**; evaluation must track whether remembered constraints remain operational as dialogue state grows.
- Source: https://arxiv.org/abs/2610.31314

### AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents
**arXiv:2610.31366v1** (Oct 22, 2026)
- Problem: agents maintain external persistent memory *and* derived state (summaries). Deleting the original record **need not remove information carried by its descendants**.
- Design: for each synthetic secret, compare an **exposed-then-deleted** agent against an otherwise matched **never-exposed** agent, so recovery is attributable to the original exposure.
- Numbers: a single query recovers the deleted secret from **Qwen2.5-7B-Instruct in roughly two thirds of cases**, while matched never-exposed controls show **zero** recovery.
- Strongest sub-result: recovery **does not require a surviving verbatim copy**. When the complete secret string is absent and only separately stored components remain under a public composition rule, **exact reconstruction succeeds in 62–99% of cases** across Qwen, Mistral and Phi-3.
- The response interface is part of the measurement system (format/parser misalignment produces scored-as-failure replies). **Provenance-aware closure eliminates observed recovery; an exact-literal write filter blocks reinsertion but cannot erase information already present.**
- Conclusion: source deletion should be evaluated **behaviorally at the level of the agent and its memory system**, not as a storage operation.
- Source: https://arxiv.org/abs/2610.31366

### EpiSEM-Bench: Evaluating Safety and Evidence Recovery in LLM Agents under Missing Evidence
**arXiv:2610.31650v1** (Oct 22, 2026)
- Setting: tool-using agents decide whether an action is permitted based on environmental facts. When a tool response **omits a safety-relevant fact**, an agent can perform a prohibited action even though the request is benign and every returned statement is true.
- Benchmark: **300 matched unsafe/safe task pairs across six domains**; systematically suppressing critical facts measures unsafe execution under omission and determines the **minimum observed failure cardinality**, including full-evidence failures and no-failure-after-exhaustive-testing cases. An independent audit tool tests whether agents *seek* missing facts and then withhold prohibited actions while completing permissible tasks.
- Result across **ten models**: substantial variation in omission robustness, evidence acquisition and appropriate action. The key dissociation: **resistance to missing evidence does not necessarily translate into useful recovery.** Recovery access reduces unsafe execution for all ten models, but agents differ in whether they actively obtain the missing facts and use them appropriately in *both* worlds.
- Source: https://arxiv.org/abs/2610.31650

### ColaBench: Evaluating Memory-Guided Knowledge Acquisition in Personal Agents
**arXiv:2610.30989v1** (Oct 22, 2026)
- Framing: two *connected* challenges that existing benchmarks treat separately — using historical conditions to **identify the knowledge needed** for a new request, and then **applying** that knowledge to the user's situation. Grounding an answer in relevant documents can still be unsuitable if it ignores the user's circumstances.
- ColaBench: synthetic benchmark in health and daily living, **349 tasks across 10 Profiles and a knowledge base of 13,033 documents**. An **Evidence Graph** connects personal conditions to their disclosures across public interaction sessions, records prior document exposure, and links answer requirements to personal and newly acquired document evidence.
- Baseline **MemKB** (state summaries inform queries and rule application; memory-document links retrieve knowledge tied to the user's history): **86.25% accuracy at an average of 4.07 interaction rounds per task**. Larger gains on tasks integrating information across multiple historical facts; error analysis identifies **unsupported personal assumptions and rule misapplication** as the two obstacles.
- Source: https://arxiv.org/abs/2610.30989

### Delta N-gram: Forward-Only Continual Writing into a Language Model's Native N-gram Memory
**arXiv:2610.31125v1** (Oct 22, 2026)
- Continues the authors' earlier analysis that a model's native hashed n-gram table is where continual updates disturb the base least — but those writes needed backpropagation and modified the pretrained table.
- Delta N-gram: the pretrained table **T⁰ is never modified**. Evidence is written into a sparse patch **Δ** on the rows it addresses: a **4.1M-parameter writer** emits a target and a gate per (position, hash head) event; a **block-averaged delta rule** keeps each row a convex combination of its old value and the gated targets. The writer is trained offline on raw text with the pretraining objective; **at use time writing takes forward passes only**, and clearing Δ restores the original model.
- Numbers: a 0.6B prototype trained to answer questions keeps **16/16 facts after a second write**, while online gradient writes keep **2–4/16**. On **Qwen3.8-Flash-Next** the plain writer's memory is document-specific (64 held-out news events: −0.068 nats/token vs empty memory, −0.024 vs another document's memory; −0.063 / −0.013 after 16 intervening articles). The **delta writer** keeps more under distraction (**70% vs 54%**).
- Honest cost: over 35,000 writes, later accuracy changes by −0.26/−0.52pp (vs **−7.29pp** for gradient updates), but **general-input drift reaches 32.8% (20.75%)** — format rows read by every example grow to 4–12× their pretrained norm; zeroing eight such rows removes **over 98% of layer-2 drift** on math inputs, together with their NLL gain.
- Source: https://arxiv.org/abs/2610.31125

### The Value of Memory in Language Agents
**arXiv:2610.31303v1** (Oct 22, 2026)
- Contribution is a **decision-theoretic framework** that follows memory's value from raw history through persistent state, operational use, and costly recovery and revision, expressed in **units of avoided task loss**; **risk-cost frontiers** describe attainable recovery and preservation.
- The sharpest claim: **a pointer with zero mutual information about the answer can still reduce the cost of exact recovery** — memory value is not reducible to information content.
- Five minimal counterexamples isolate the roles of information timing, retrieval access, component interaction, feedback and demand uncertainty. Diagnostics on **LoCoMo**, a two-project update task and longitudinal cases exhibit **failures of preservation, use and measurement** — e.g. at fixed retrieved evidence a saved ledger changes subsequent answers; at fixed agent outputs an evaluator revision changes scores.
- Pairs directly with `2610.31272` (memory-aware reward modeling) and `2610.31366` (deletion persistence) as the day's memory trio.
- Source: https://arxiv.org/abs/2610.31303

### Beyond Accuracy: Disentangling Decomposition from Typed-State Quality Assurance in Multi-Agent LLM Pipelines
**arXiv:2610.31280v1** (Oct 22, 2026)
- Attribution problem: when a multi-agent LLM pipeline gains accuracy, is the gain from the **typed contract between agents** or from the **specialized prompts that decomposition enables**?
- Design: three architectures for classifying requirements as functional/non-functional then prioritizing with MoSCoW — single-call baseline; a **two-call** variant reusing specialized prompts but passing an **unvalidated** intermediate; and a pipeline with a **Pydantic-validated typed state**. **18 conditions**, PROMISE NFR+ (625 requirements), three locally hosted 7–8B models, two languages.
- Result: the F1 gain over baseline is associated with the **two-call, specialized-prompt variant** (up to **+0.075**), whereas the **typed state adds only −0.003 to +0.013**, significant in one of six comparisons. Beyond accuracy, the typed pipeline **contains out-of-range model outputs at the agent boundary**, while the unvalidated variant fails later and drops the requirement, and shows a small reproducible increase in inter-model MoSCoW consistency whose cause the design cannot isolate.
- Authors' caveat: the study is **associative** — prompts, call count and staged context are bundled; results come from three 7–8B models on one dataset.
- Source: https://arxiv.org/abs/2610.31280

### Adaptive Skill Granularity for Coding Agents: Runtime Routing and Macro-to-Micro Recovery
**arXiv:2610.31461v1** (Oct 22, 2026)
- Reframes skill libraries as a **runtime control problem**, not just a retrieval problem: the same task may be solved through primitive tool calls, macro skills, or a hybrid that starts macro and falls back to micro-level recovery.
- Framework: **Adaptive Skill Granularity** — skill granularity as an action-abstraction policy conditioned on task structure, execution state and macro-skill failures; combines a feature-based **granularity controller** with a finite-state **recovery executor**. Evaluated with a deterministic coding-agent protocol using verifier-defined success, total cost, and process metrics (macro adoption, failure recovery, route match, transition correctness).
- Result: fixed macro execution is efficient when applicable but **brittle under mismatch**; runtime routing and explicit macro-to-micro recovery improve robustness and recover controlled macro failures that fixed-granularity execution leaves unresolved.
- Source: https://arxiv.org/abs/2610.31461

### IQuest-Q1: Advancing Foundation Capabilities for Agentic CLI Systems
**arXiv:2610.30949v1** (Oct 22, 2026)
- Releases a **sparse MoE agentic foundation model: 320B total, 15B activated** — an open agentic-CLI base rather than an instruct-only derivative.
- Three-stage training: (1) **stable and efficient pre-training** combining **Stable SplitNorm, Muon, and muP** with a two-stage curriculum whose second stage increases the coding-data mixture, preserving a wide stability margin between safe and optimal learning rates; (2) **fine-grained mid-training** expanding the data mixture across domains and formats with progressively extended context; (3) **multi-scaffold, multi-version post-training** combining SFT, domain-specialized RL and MOPD across scaffolds.
- **Model merging** combines experts and checkpoints from different stages while mitigating conflicts among their parameter updates.
- Direct relevance to the `agentic-cli-tools` topic: this is one of the first *base-model* releases explicitly optimized for agentic CLI use, and it is open-weight.
- Source: https://arxiv.org/abs/2610.30949

---

## Benchmarks, Evaluators & Reward Modelling

### Padding to k: A Minimum Count in the Schema Makes Open-Weight Models Pad Their Extraction Lists
**arXiv:2610.30997v1** (Oct 22, 2026)
- **Preregistered** study: eight open-weight models on **558 real documents from nine annotated datasets**, plus six hosted models as reference. Question: what do models do when a JSON schema's minimum list count exceeds the true number of items?
- Three findings. (1) **Models treat the count as a target**: a minimum shown in the schema but not enforced raises the share of lists longer than the true count from **34.5% to 55.4%**. (2) **The padding is hard to catch** — most added entries are real text taken from the document, and **about half pass a check that each entry occurs in the source**. (3) **Common fixes help only partly**: "fewer items are fine" removes the effect on average but misses more true items; a prose count ("up to k") *raises* over-counting; an "N/A" option under an enforced minimum still leaves **half the lists padded**; re-asking with the validation error makes padding **far more common**.
- A clean, reproducible benchmark artifact — and a warning that a "hallucination-free" citation check can be defeated by ground-truth-text padding.
- Source: https://arxiv.org/abs/2610.30997

### Mostly Reading: What Open-Book Scores Measure in Document-Level LoRA Adapters
**arXiv:2610.31017v1** (Oct 22, 2026)
- Premise: single-document LoRA adapters are proposed as units of knowledge to merge and retrieve, but **open-book scoring (document in the prompt) can credit a document's own adapter for *reading* that document as readily as for *holding* it**.
- Design: one adapter per **150 Wikipedia articles** on Llama-3.1-8B-Instruct; probes are open-book (source supplied) and **cloze** (same facts, no source text).
- Numbers: a **random adapter trained on another document recovers 82% of the specialist's open-book advantage** over the base model but only **2% of its cloze advantage** — a share the authors cannot distinguish from zero. Content *does* reach the weights: specialists beat the base model in cloze recall by **0.094**, and update geometry follows the documents they read. But adapters chosen by weight-space proximity or text embedding are **not distinguishable from random** on either probe (with a stated inability to exclude an advantage of ~4/5 of a query's own adapter's gain).
- Merging: at **16+ documents**, correctly scaled merges recover **87–89%** of specialists' open-book advantage but only **12–16%** of their cloze advantage, against **94% for joint training**. Four silent errors are reported, each producing a clean, wrong result.
- Source: https://arxiv.org/abs/2610.31017

### What Pairwise Evaluation Misses: Reward Scores across Prompts
**arXiv:2610.31090v1** (Oct 22, 2026)
- Observation: reward models score responses for preference optimization, filtering and ranking, and **pooling scores across prompts requires them to be comparable**. But pairwise evaluation compares two responses *to the same prompt*, so **any score component shared by a prompt's responses cancels and goes untested**.
- Method: a **human-referenced audit** built from a between-prompt variance share, a sibling-rating regression and prompt substitutions, applied to **eighteen released scorers and six matched training conditions**.
- Result: **scores cluster by prompt more than the ratings do** — on HelpSteer2, six reward models have between-prompt shares of **0.34 to 0.64** against a **human share near zero**. Replacing the original prompt with a fixed instruction keeps substantial clustering but **weakens agreement with prompt-level human ratings**, so clustering alone does not demonstrate agreement with humans. Part of the variation is useful: subtracting prompt means **lowers the helpfulness** of globally selected responses, and scores stay sensitive to a wrong prompt even when training shuffles prompt means.
- Recommendation: reward evaluation should check **between-prompt variation, sensitivity to a wrong prompt, and usefulness for selection separately**.
- Source: https://arxiv.org/abs/2610.31090

### Memory-Aware Reward Modeling: Learning Human Preferences for LLM Memory Use
**arXiv:2610.31272v1** (Oct 22, 2026)
- Gap: existing memory evaluations assess capability without asking whether **memory use benefits the user**. Data: **~1,000 pairwise judgments from 87 participants** using their own ChatGPT queries and personal memories.
- Finding: **memory-conditioned responses are not consistently preferred over responses generated without memory, and in some cases users strongly prefer the latter.** Automatic evaluators show **limited agreement with users** and favor memory-conditioned responses **substantially more often** than users do.
- Response: a memory-aware reward model trained on the user judgments, reaching **72.8% preference prediction accuracy** and beating existing baselines.
- Pairs with `2610.31303` and `2610.31366`; the "memory is always better" assumption is being dismantled from three directions in one day.
- Source: https://arxiv.org/abs/2610.31272

### Who Is Sycophantic to Whom? Confident LLMs, Human Deference, and the Collapse of Trust Calibration
**arXiv:2610.31579v1** (Oct 22, 2026)
- Reverses the standard sycophancy question: when an LLM is **confident, consistent and wrong**, do users bend toward it?
- Design: within-subjects experiment, **32 participants**, five science topics, five assistants on the same base model (**GPT-5-mini**), each briefing with **0/25/50/75/100% of facts replaced by plausible falsehoods**, every assistant speaking with full confidence. Surprise quiz after each topic offered the correct fact, the planted falsehood and two distractors plus a confidence rating per answer.
- Numbers: across **104 quizzes and 1,040 answers**, scores fell **7.4 → 2.9 out of 10**; the planted option was chosen on **60% of falsified items vs 11% of correctly taught ones (odds ratio 12.5)**. Transcript coding: whenever the assistant stated a falsehood it was adopted **~65% of the time at every falsification level**. Absorbed falsehoods were held with **high confidence (8.4/10)**; the modeled confidence advantage of right over wrong **vanished**, and confidence's discrimination for correctness fell from **AUROC 0.70 to chance**, while **post-task trust ratings barely moved**. Participants returned to the chat more when the assistant was worse — and returning went with *more* absorption, not less; **30% of all turns pasted quiz questions back to the source being checked**.
- The assistant itself was almost never sycophantic and never conceded under pushback. Contribution: a **baseline-corrected Human Deference Index**; the argument that **trustworthiness is a property of the human–AI pair**, that sycophancy evaluations should measure both directions, and that learning interfaces must make reliability legible claim by claim.
- Source: https://arxiv.org/abs/2610.31579

### Predictable performance is suboptimal, and what it means for model routing
**arXiv:2610.31428v1** (Oct 22, 2026)
- Routing methods train separate predictors of candidate models' performance to decide which model answers each query. The paper asks when that beats a trivial baseline: the model's **self-confidence** (probability assigned to its own chosen answer).
- Theory: any predictor that beats self-confidence can be used to **improve the model's loss** — the predictor's advantage **transfers exactly in log loss through recalibration**. Accounting for the predictor's extra parameters, its advantage is **bounded by the model's suboptimality plus the gain from those parameters**. Extended to two-model cascades.
- Empirical: across **16 language models and four benchmarks**, predictors gain more over self-confidence on **more suboptimal** models, and the advantage **shrinks as models improve through finetuning**. Cascading shows the same two patterns.
- Implication: as models converge, **routing value may come from the cascade, not from the predictor**.
- Source: https://arxiv.org/abs/2610.31428

---

## Safety, Control & Research Integrity

### Harmful Responses Are Jailbreak Templates: Transferring Autoregressive Jailbreaks to Diffusion Language Models
**arXiv:2610.31331v1** (Oct 22, 2026)
- Diffusion LLMs' bidirectional context modeling creates a distinct attack surface. Observation: **a harmful response to a given query naturally serves as an effective jailbreak template** — masking a subset of its tokens can induce a dLLM to reconstruct harmful content.
- RMT-Jailbreak converts an AR-generated harmful response into a **high-mask-ratio template** via uniform token retention, then applies **prompt-based safety filtering** to mask remaining visible harmful content, and hands the refined template to the target dLLM for bidirectional reconstruction.
- Results: strong **cross-paradigm transferability** across multiple AR jailbreak methods and target dLLMs.
- Source: https://arxiv.org/abs/2610.31331

### Simulated Control Evals
**arXiv:2610.31593v1** (Oct 22, 2026)
- Control evaluations measure whether safeguards stop a model causing undesired outcomes, but they are purpose-built and their results are extrapolated to deployment — even though safeguard effectiveness depends on environment and task features the control setting does not represent.
- SCEs **use a language model to simulate tool responses in place of an environment**. Evaluated on **LinuxArena**, where execution gives ground truth; prediction errors compared with a separate control setting (**BashArena**).
- Numbers: for independently sampled evaluation and deployment task sets, SCEs predict safety with **RMSE 3.6 percentage points across five monitors at a 5% audit budget, vs 10.1 for BashArena**; SCEs reproduce distributions of attack strategies, attacker reasoning and monitor reasoning with **>10× lower KL divergence from execution** than BashArena; they explain **78–85% of between-environment variance** in attack success, monitor scores and safety. Sample efficiency: SCEs predict safety with less error than BashArena using **fewer than 5% as many task-pair draws** as the deployment set. Strategies discovered through simulation also improve monitor performance on held-out LinuxArena attacks.
- Source: https://arxiv.org/abs/2610.31593

### SCOPE: Compiling Natural-Language Policies into Neurosymbolic Predicate Programs
**arXiv:2610.31062v1** (Oct 22, 2026)
- Problem: policy enforcement for agents has moved to compound, application-specific policies over multi-turn transcripts and tool-call trajectories. Fine-tuned guardrail models are efficient but degrade on compound policies; LLM-as-a-judge is accurate but expensive and unstable.
- SCOPE compiles a policy into an **executable program of neural predicates** executed by small models, deterministic extractors, and code that composes their outputs. The program is **optimized jointly with its training data**, using **adversarial generation of counterexamples** targeting where the program deviates from the policy.
- Results: highest average accuracy across a real-world policy benchmark vs prompt optimization, task decomposition and workflow generation. **Programs optimized with the weakest executor transfer to other models without further optimization** — deployable on inexpensive models at accuracy comparable to frontier reasoning models — and produce **substantially more stable predictions**, with every verdict interpretable via its predicate outputs.
- Source: https://arxiv.org/abs/2610.31062

### RIDAR: Safeguarding Research Integrity in Autonomous Research Agents via Automated Detection and Runtime Intervention
**arXiv:2610.31372v1** (Oct 22, 2026)
- Autonomous research agents are prone to **research integrity violations (RIVs)** — behaviours that compromise validity, reproducibility or faithfulness of the research process.
- **RIVT**: a taxonomy of **14 RIV types** spanning the full research lifecycle. **RIDAR-post-hoc** detects RIVs within agent trajectories, reaching **85.2% F1** on **RIV-Gold** (60 expert-annotated trajectories). Applied to **RIV-Wild** (300 trajectories across 50 research tasks), it detects **3,964 RIV instances in 99.7% of trajectories** — i.e. RIVs are near-universal in current agents. **RIDAR-runtime** detects and corrects during execution, **reducing RIVs remaining at task completion by 36.8%**.
- Source: https://arxiv.org/abs/2610.31372

---

## Task 1 Gaps & Caveats

- All abstracts were read from the arXiv API; numbers are the authors' own reported figures, not independently reproduced. No paper's code was run.
- `2610.31280` explicitly states its design bundles prompts, call count and staged context, and uses three 7–8B models on one dataset — its attribution claim is associative.
- `2610.30983`, `2610.31135` and `2610.31479` are framed by their authors as exploratory or negative-result papers; their "no effect detected" findings are null results, not proofs of absence.
- `2610.31017` cannot exclude an adapter-selection advantage of about four fifths of a query's own adapter's gain — a real power limitation.
- `2610.31522` concerns one adaptive residual-routing architecture family; the leakage class may not transfer to standard attention.
- The batch was cs.CL-heavy after deduplication; cs.LG and cs.AI contributed proportionally fewer LLM-centric papers, so selection leaned toward cs.CL as in previous runs.

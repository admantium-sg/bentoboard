# Findings — Task 1 (June 27, 2026)
# arXiv papers: chain-of-thought, prompt engineering, efficiency
# cs.CL, cs.LG, cs.AI — June 26 listings + targeted fetches

## Paper 1: ACTS — Agentic Chain-of-Thought Steering
**arXiv:2606.03965** | Chain-of-Thought / Efficiency | cs.CL

Extended chain-of-thought reasoning improves accuracy but wastes tokens and offers no inference-time control. Existing efficient reasoning methods (shortening, early-stopping, compressing) all leave how the model thinks implicit.

ACTS (Agentic Chain-of-Thought Steering) formulates reasoning steering as a Markov decision process where a controller agent adaptively steers a frozen reasoner at each step. The controller observes the reasoning trace and remaining budget, then issues a steering action (reasoning strategy + steering phrase). This enables budget-aware strategy control while preserving generation continuity.

Key results: ACTS matches full-thinking performance with substantial token savings and enables controllable accuracy-efficiency trade-offs.

**Key insight:** Separating the controller from the reasoner allows budget-aware control over how the model reasons, not just how much it reasons.

🔗 https://arxiv.org/abs/2606.03965

---

## Paper 2: CARVE — Content-Aware Recurrent with Value Efficiency
**arXiv:2606.27229** | Efficiency / Recurrent Models | cs.CL — cross-listed cs.LG

Recurrent models suffer from "memory-blind gating" — the gate sees only the arriving token, not the memory it is about to modify. CARVE resolves this through one principle: erase only on the key axis.

Three coupled defects in the delta-rule architecture (GDN-2): memory-blind gating, value-axis erase mask waste, and the WY-form triangular chunk solver being mathematically blocked.

CARVE reuses the recurrent output tensor as a free content signal for the erase gate, and replaces per-value write-gate projection with a single scalar per head.

At 1.3B parameters, 100B tokens: WikiText perplexity 15.72 (minus 0.18 vs GDN-2, a 4.5-sigma effect). Leads every recurrent baseline on 9 common-sense reasoning benchmarks, sets state-of-the-art on all RULER retrieval probes. At 0.4% throughput overhead, 13% lower peak memory, and 19% fewer parameters.

Six formal theorems covering memory capacity, Lyapunov stability, gradient flow, expressivity separation, Pareto-optimal chunk size, and hybrid optimality.

**Key insight:** Content-aware gating on the key axis is provably necessary and sufficient for the WY-form solver — this unifies memory efficiency and training competitive-ness with Transformers.

🔗 https://arxiv.org/abs/2606.27229

---

## Paper 3: MinGram — Minimalist Unigram Tokenizer
**arXiv:2606.27019** | Tokenization / Efficiency | cs.CL

The standard Unigram tokenizer has an elegant representation but heavy training. MinGram simplifies training using: BPE-derived seed vocabulary, Hard EM on minimum-token path, single flat score-pruning step.

This removes the suffix array, forward-backward pass, and iterative prune loop. Token count is the primary objective; Unigram score used only as tiebreak.

Across 6 languages: MinGram compresses better than both BPE and standard Unigram. Matches strongest token-count compressors while retaining substantially higher morphological alignment. In downstream language-model training, Unigram-family tokenizers (MinGram among best) consistently beat BPE in bits-per-byte.

**Key insight:** A tokenizer trained purely on compression (token count) with morphological alignment as a secondary objective achieves the best downstream language modeling results.

🔗 https://arxiv.org/abs/2606.27019

---

## Paper 4: Multilingual Reasoning Cascades Need More Context
**arXiv:2606.27306** | Reasoning / Multilingual | cs.CL

Translation cascades (translate to English → reason → translate back) are a competitive approach to multilingual reasoning but are structurally lossy — each stage discards information later stages need.

A simple, training-free intervention: provide the context-aware cascade with the original question, the English translated question, AND the reasoning trace — all to the final translation module.

Evaluated across 9 multilingual benchmarks, 3 backbone models, 285 high/mid/low-resource languages. Strong gains for open-ended generation across models and resource regimes.

Key finding: The original language question carries most of the beneficial context — preserving it until the end of the pipeline is the single most impactful change.

**Key insight:** Translation cascades lose information structurally; the fix is not architectural but informational — preserve the original context throughout the pipeline.

🔗 https://arxiv.org/abs/2606.27306

---

## Paper 5: AIMS — Intent-Aware Safety Classification
**arXiv:2606.27210** | Safety / Prompt Engineering | cs.CL

Safety classifiers should model user intent as an explicit signal between prompt and label. AIMS: 1,724 difficult safety prompts, each paired with an intent description and harm label.

Across training regimes (SFT, preference learning, reasoning distillation, RL): DPO from model-generated intent errors improves over SFT; intent-conditioned distillation outperforms reasoning-only distillation; directly rewarding intent faithfulness with GRPO yields strongest average performance across 5 external safety benchmarks.

Intent-aware models form the inference latency-F1 Pareto frontier — faithful intent modeling is compact, high-quality supervision for robust safety classifiers.

**Key insight:** Intent is a compact supervision signal that outperforms much larger models trained without it; the interface (how intent is conditioned) matters more than scale.

🔗 https://arxiv.org/abs/2606.27210

---

## Paper 6: ReaORE — Reasoning-Guided Open Relation Extraction
**arXiv:2606.26986** | Reasoning / Information Extraction | cs.CL

Open Relation Extraction requires extracting unseen relations from unstructured text. Current approaches either use clustering (no labels, poor generalization) or direct LLM generation (lacks discriminative capacity for easily confused relations).

ReaORE: coarse-to-fine reasoning with two stages: (i) relation filtering via multi-aspect reasoning + embedding similarity to ensure target inclusion; (ii) relation prediction via fine-grained comparative reasoning to distinguish confused relations.

Outperforms baselines on two widely used OpenRE datasets.

**Key insight:** Reasoning-guided progressive filtering is more effective than either pure clustering or direct generation for open-world relation extraction.

🔗 https://arxiv.org/abs/2606.26986

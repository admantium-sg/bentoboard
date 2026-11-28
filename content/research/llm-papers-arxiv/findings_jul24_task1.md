# Findings: Task 1 — arXiv Papers (July 24 Batch)
**Date:** 2026-07-24
**Focus:** cs.CL/cs.AI/cs.LG — chain-of-thought, prompt engineering, efficiency

## Papers Reviewed (from July 24 arXiv batch + recent cs.LG cross-lists)

### 1. Muon Grokking: The Active Ingredient (2607.20512)
**arXiv:2607.20512** — cs.LG, cs.AI | Submitted Mon, 6 Jul 2026

Key finding: Muon optimizer reaches grokking threshold on modular arithmetic faster than AdamW. The speedup comes specifically from orthogonalization (Newton-Schulz iteration), NOT spectral-norm constraints. Ablation shows orthogonalize-only matches full Muon; spectral-only is no faster than AdamW and unreliable.

Key findings:
- Orthogonalizing optimizers reach generalization at ~3x lower spectral norm
- Reducing Newton-Schulz iterations from 5 to 1 accelerates reaching threshold but makes solution fragile
- Single iteration is fast and stable only at small learning rate; 5 iterations are learning-rate-robust
- Spectral scaling can be dropped at no measured cost

**Novelty:** First mechanistic dissection isolating which component of Muon actually drives faster grokking.

---

### 2. SOAP, Muon, and Beyond: Pushing LLM Pretraining Scales (2607.20548)
**arXiv:2607.20548** — cs.LG, cs.AI | Submitted Mon, 13 Jul 2026

Key finding: Higher-order optimizers (Muon, SOAP) outperform AdamW at multi-billion-parameter scales, including at batch sizes up to 100M tokens where AdamW degrades.

Key findings:
- Identified instabilities in SOAP at large batch sizes; proposes algorithmic modifications (per-step QR orthogonalization, improved preconditioning)
- Unified empirical study with update-RMS matching for fair learning rate transfer
- Layer-wise distributed optimizer compatible with Megatron-LM
- Stable training at 100M token batch sizes where AdamW fails

**Novelty:** First large-scale empirical validation of Muon/SOAP at true LLM pretraining scale (multi-billion params, trillions of tokens).

---

### 3. Thermodynamic Weight Decay: Grokking via Attention Specific Heat (2607.20552)
**arXiv:2607.20552** — cs.LG | Submitted Wed, 15 Jul 2026

Key finding: Treats variance of attention logits as specific heat (Cv); shows Cv peak reliably precedes generalization transition. Introduces CvAdamW that dynamically scales weight decay when phase transition detected.

Key findings:
- On modular arithmetic: CvAdamW enables grokking at epoch 2802 where baseline never groks
- Cold-start variant reduces mean grokking latency by 257 epochs (6.0%; median 166 epochs; Wilcoxon p=0.049)
- Scale-invariant z-score reformulation removes task-specific hyperparameters
- Cv peaks before grokking in all 10 seeds evaluated

**Novelty:** First physically-motivated intervention that detects and exploits precursors to neural network generalization transitions.

---

### 4. Profiling Lightweight LLMs (2607.20806)
**arXiv:2607.20806** — cs.AI | Submitted Thu, 23 Jul 2026

Key finding: Introduces PTME-based framework (Precision, Time, Memory, Energy) for edge LLM deployment. Static proxies (parameter count, FLOPs) approximate inference cost but fail to predict precision.

Key findings:
- Tightening resource envelope increases cost without affecting precision, penalizing larger models most
- No single model dominates all PTME dimensions
- Pareto analysis reveals non-dominated configurations hidden by accuracy-only or efficiency-only assessments
- Selecting by size, FLOPs, latency, or accuracy alone can select wrong deployment candidate

**Novelty:** First PTME profiling framework for lightweight LLM inference with direct hardware-level measurements.

---

### 5. Agentic Context Management (2607.21503)
**arXiv:2607.21503** — cs.AI, cs.IR | Submitted Thu, 23 Jul 2026

Key finding: Treats agent memory management as lifecycle problem, not storage/retrieval. Introduces five primitives: architecting, ingesting, scoping, anticipating, compacting & consolidation.

Key findings:
- Naive context accumulation grows token cost quadratically in conversation length
- Crude summarization buys linear cost at accuracy cliff price
- Validated compaction achieves linear cost with preserved fidelity
- Reference implementation (Maximem Synap) achieves 92% on LongMemEval and 93.2% on LoCoMo

**Novelty:** First lifecycle framing of agentic context management with formal cost analysis.

---

### 6. Differentiable Logic Programming for Reasoning Shortcuts (2607.21185)
**arXiv:2607.21185** — cs.AI, cs.LO | Submitted Thu, 23 Jul 2026

Key finding: Matrix-based differentiable logic programming to mitigate constraint satisfaction shortcuts and cognition shortcuts in NeSy systems.

Key findings:
- One-to-one grounding of neural outputs to logical atoms significantly reduces both shortcut types
- Architectural choices in coupling symbolic knowledge with neural learning are critical
- Identifies connections to fuzzy logic t-norms and gradient flow properties

**Novelty:** First systematic approach to mitigating reasoning shortcuts via matrix-based differentiable logic programming.

---

### 7. StrideDiffusion: Accelerating Diffusion Models (2607.20545)
**arXiv:2607.20545** — cs.AI, cs.CV | Submitted Mon, 13 Jul 2026

Key finding: Training-free spectral-aware sampler for time-series diffusion. Adaptively selects denoising stride from band-level activity.

Key findings:
- Uses only 14-66 function evaluations instead of 500/1000 denoising steps
- Up to 18.9x wall-clock speedup while preserving generation quality
- 5-14x average acceleration on conditional imputation and forecasting
- Monitors relative band energy, log-power drift, and phase velocity to select step size

**Novelty:** First spectral-aware adaptive stepping for diffusion model sampling.

---

## Duplicate Check vs. Prior Coverage (July 22-23 batches)

From the July 22-23 reports, these topics were already covered:
- PyroDash (token-level SLM-LLM handoffs)
- ECoM Reasoning (spoken language model CoM)
- GEAR (repetitive copying in long-context)
- MaLoRA/MaRA (selective state-space adaptation)
- VeyraBench (format/instruction/context study)
- Structural Generalization (TC^0/NC^1 separation)
- CRA Framework (multi-turn conversational risk)

New findings today:
- Muon active ingredient dissection: orthogonalization is the key
- SOAP/Muon at LLM scale: first large-scale validation
- Thermodynamic weight decay / CvAdamW: physical precursor detection for grokking
- PTME profiling for lightweight LLMs: precision-time-memory-energy joint measurement
- Agentic Context Management: lifecycle framework for agent memory
- Differentiable Logic Programming: reasoning shortcut mitigation
- StrideDiffusion: spectral-aware diffusion acceleration

## Sources
- https://arxiv.org/abs/2607.20512
- https://arxiv.org/abs/2607.20548
- https://arxiv.org/abs/2607.20552
- https://arxiv.org/abs/2607.20806
- https://arxiv.org/abs/2607.21503
- https://arxiv.org/abs/2607.21185
- https://arxiv.org/abs/2607.20545
- https://paperpulse.ukurup.com/summary/2026/07/24/daily-summary.html

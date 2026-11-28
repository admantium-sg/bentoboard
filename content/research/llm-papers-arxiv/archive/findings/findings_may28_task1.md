# Findings - Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI)
## May 28, 2026

### 1. ACROS: Sense Representations as Inducible Interfaces
**arXiv:2605.28669** (May 27, 2026) — cs.CL, cs.AI
- ACROS induces explicit sense pathway into frozen pretrained decoder LM through gated residual addition
- Zero-shot word-sense disambiguation: 64.95 F1 on Raganato ALL (competitive with WordNet first-sense heuristic)
- Low-KL lexical steering across 5,161 CoInCo cases recovers ~90% of positive shifts
- SENSIA cross-lingual adaptation to 4 languages (mean R@1 0.988)
- Key insight: Sense representations are now an inducible interface for ordinary pretrained LMs — no need for pretraining with sense structure baked in

### 2. S2B-LM: Compositional Learning Behaviours in Formal Mathematics
**arXiv:2605.28512** (May 27, 2026) — cs.CL
- CLB competency = capacity to ground and recombine novel symbolic structures in context
- Chain-of-thought scaffolding elicits latent CLB competency
- Cross-evaluating 10 Lean 4 theorem provers: every model breaking into Olympiad-level (miniF2F >75%) is among top 5 CLB scorers (p=0.004)
- CLB competency is necessary but not sufficient for hard tail of formal mathematical verification
- Key insight: Search-heavy models cover tractable bulk without detectable CLBs — CLB is what separates Olympiad-level performance

### 3. Reverse Probing: Token-level Uncertainty Quantification for Clinical LLMs
**arXiv:2605.28740** (May 27, 2026) — cs.CL, cs.AI
- First UQ framework specialized for clinical summarization (Reverse Probing)
- Extracts uncertainty signals from 4 categories of internal activations
- Outperforms 8 adapted baselines on all metrics
- Up to 4x higher AUPRC, reduced inference time and computational costs
- Key insight: Delta energy and neighborhood context are most consistent predictors — models internally respond to unsupported clinical content in interpretable ways

### 4. MemTrace: Tracing and Attributing Errors in LLM Memory Systems
**arXiv:2605.28732** (May 27, 2026) — cs.CL, cs.AI, cs.LG
- Transforms memory pipelines into executable memory evolution graphs
- MemTraceBench from Long-Context, RAG, Mem0, EverMemOS
- Memory failures are systematic: operation-level issues like information loss and retrieval misalignment
- Automatic attribution method traces operation subgraphs to pinpoint root cause
- Closed-loop system boosts end-task performance by up to 7.62%
- Key insight: Debugging memory systems now tractable through fine-grained operational tracing

### 5. MUTATE: Evaluating Divergent Thinking in Interactive LLM Agents
**arXiv:2605.28465** (May 27, 2026) — cs.CL
- Interactive benchmark for agentic divergent thinking at two levels: path-level and action-level
- Scores both completed paths AND off-path attempts
- Frontier LLMs exhibit action fixation under convergence pressure
- ReDNA: separates unconstrained divergent candidate generation from convergent constraint selection
- Significantly outperforms prior methods across both divergence levels
- Key insight: Success-only evaluations miss divergent reasoning that gets discarded — off-path attempts matter

### 6. AdaDPO: Self-Adaptive DPO with Balanced Gradient Updates
**arXiv:2605.28440** (May 27, 2026) — cs.CL, cs.LG
- DPO suppresses dispreferred responses faster than promoting preferred ones
- AdaDPO: per-preference-pair, stop-gradient-based coefficients from policy model generation probabilities
- On Llama-3-8B-Instruct + UltraFeedback: 81% of hyperparameter combinations outperform DPO
- Global best LC (48.3%) and raw win rate (46.1%) on AlpacaEval 2
- Key insight: Gradient imbalance is the core DPO problem — AdaDPO rectifies it and generalizes to SimPO, R-DPO, IPO, CPO, ORPO

### 7. Soft-RLVR: Self-Verified Reinforcement Learning with Soft Rewards
**arXiv:2605.28561** (May 27, 2026) — cs.CL, cs.LG
- Converts prompts into checklists of atomic requirements
- LLM verifier scores responses item by item with soft rewards
- Checklist-based verification gives denser partial-credit signal vs sparse pass/fail
- Self-verification prone to reward inflation — explicit stabilization needed
- Soft-RLVR improves IFEval by up to 11.1 points
- Key insight: Self-verification requires explicit stabilization to prevent overly permissive self-judgments

### 8. GUI-CIDER: Mid-training GUI Agents
**arXiv:2605.28534** (May 27, 2026) — cs.CL
- Causal Internalization + Density-aware Exemplar Reselection
- Explicitly internalizes GUI world knowledge vs trajectory memorization
- 3 stages: data synthesis, exemplar reselection, mid-training
- Improves both GUI understanding and task success
- Key insight: Post-training (SFT/RL) causes inefficient memorization — mid-training with causal knowledge is more effective

### 9. Attentional White Bear Effect in Transformer Language Models
**arXiv:2605.28639** (May 27, 2026) — cs.CL, cs.AI
- Instruction-based suppression doesn't reduce internal representation — just suppresses expression
- Prohibited concepts remain highly recoverable from hidden representations
- Continue to influence attention routing and shape downstream generations despite lexical avoidance
- Gap between behavioral and representational alignment is fundamental
- Key insight: Alignment via suppression is surface-level — concept representations persist internally

### 10. Mobile-Aptus: Confidence-Driven Interaction in MLLM Agents
**arXiv:2605.28629** (May 27, 2026) — cs.CL
- Solves over-execution (trying when unable) AND over-soliciting (excessive human intervention)
- Two stages: interaction capability empowerment (SFT) + confidence bias correction (DPO)
- 17% average improvement in task success rate across OS-Kairos, AITZ, Meta-GUI, AndroidControl
- Real-world experiments: 26% improvement, only 0.64 intervention steps per instruction
- Key insight: Confidence-driven proactive interaction balances autonomy and assistance

### 11. OScaR: Occam's Razor for Extreme KV Cache Quantization
**arXiv:2605.19660** (May 19, 2026) — cs.LG, cs.CL
- Token Norm Imbalance (TNI) identified as primary bottleneck under extreme compression
- OScaR: Canalized Rotation + Omni-Token Scaling to mitigate TNI-induced variance
- Near-lossless INT2 quantization across X-LLMs (text, multi-modal, omni-modal)
- Up to 3.0x speedup, 5.3x memory reduction, 4.1x throughput increase vs BF16 FlashDecoding-v2
- Key insight: Simple rotation + scaling beats complex quantization pipelines for KV cache

### 12. Stance Detection in Prediction Markets
**arXiv:2605.28745** (May 27, 2026) — cs.CL
- First stance detection study on prediction market commentary
- Market context is single most impactful factor (3-class Anti recall: 0.10 → 0.45 with context)
- Counterfactual augmentation conditionally effective — 50% augmentation is optimal dose
- 100% augmentation consistently hurts performance
- Key insight: Market context provides critical signal that text alone cannot capture

### 13. VLM Human Alignment During Natural Reading
**arXiv:2605.28818** (May 27, 2026) — cs.CL, q-bio.NC
- Multimodal pretraining may NOT confer uniform global advantage in human alignment
- Language-internal representations remain key factor for modeling human text processing
- VLM advantage emerges selectively when sentences contain stronger visual semantic content
- Converging evidence from fMRI and eye-movement alignments
- Key insight: VLMs don't automatically align better — advantage is selective, not global

### 14. IPO-Toolkit: Section-Structured Analysis of IPO Documents
**arXiv:2605.28714** (May 27, 2026) — cs.CL, cs.AI
- 109,000+ IPO filings from 1994-2026, 76,000+ images
- Documents exceed 500,000 tokens with inconsistent structural organization
- Chart quality and misleadingness assessment tasks
- State-of-the-art multimodal models diverge from expert human judgments
- Key insight: Real-world long multimodal documents expose alignment challenges in frontier models

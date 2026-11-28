# Task 1 Findings — September 17, 2026
## arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

**Research focus:** Chain-of-thought reasoning, prompt engineering, inference efficiency papers
**Date:** September 17, 2026
**Sources:** arXiv.org/abs/2609.19145, 2609.19144, 2609.19113, 2609.19101, 2609.19093, 2609.19072

---

## Finding 1: Tokeniser Design — Search Procedure Dominates Over Objective (EMNLP 2026)

**Paper:** "Objective vs. Search: Decomposing What Makes a Good Tokeniser"
**arXiv:** 2609.19145 (Sep 16, 2026) — cs.CL, cs.AI
**Venue:** Accepted at EMNLP 2026

**Key findings:**
- BPE vs UnigramLM differ along two orthogonal axes: optimisation objective (compression vs log-likelihood) AND search procedure (bottom-up merging vs top-down pruning)
- Existing comparisons confound these axes — this paper disentangles them with two new tokenisers: BottomUpLL (bottom-up likelihood-based) and TopDownComp (top-down compression-based)
- **Key result:** Search procedure — not objective — is the dominant factor; bottom-up tokenisers consistently achieve lower bits-per-byte
- No consistent relationship between design choice and BLiMP task performance
- Implication: bottom-up merging (BPE-style) is structurally superior for compression efficiency

**Key insight:** Tokeniser research should focus on search procedure (bottom-up vs top-down) rather than objective function — the merge order is what matters for compression.
**Paper:** https://arxiv.org/abs/2609.19145

---

## Finding 2: ComPO — Zeroth-Order Preference Alignment Without Gradient Optimization

**Paper:** "A Zeroth-Order Paradigm for LLM Preference Alignment"
**arXiv:** 2609.19144 (Sep 16, 2026) — cs.CL, cs.AI, cs.LG

**Key findings:**
- Direct preference alignment methods suffer from likelihood displacement — small margins in preference pairs lose directional information under gradient optimization
- **ComPO (Comparison-based Preference Optimization):** zeroth-order alignment using comparison oracles — extracts directional information without directly optimising a differentiable preference loss
- Offline ComPO: convergence guarantee under smoothness, gradient sparsity, and compatibility between oracle and latent objective
- Online ComPO: retains offline comparison mechanism + unlabeled policy generations for reverse-KL control relative to reference
- Experiments on Mistral, Llama, Gemma-2, Qwen3, Gemma-3 models — improvements over existing direct alignment methods including length-controlled win rates
- Mitigates likelihood displacement without changing labels or confidence ordering

**Key insight:** Zeroth-order optimisation opens a new paradigm for preference alignment — comparison oracles can replace gradient-based DPO loss for small-margin pairs.
**Paper:** https://arxiv.org/abs/2609.19144

---

## Finding 3: log(N)-Questions Game — Communication Efficiency Across Information Asymmetry

**Paper:** "Playing log(N)-Questions over Wikipedia Abstracts: Communication Efficiency Between Paired Frontier Models"
**arXiv:** 2609.19113 (Sep 16, 2026) — cs.CL

**Key findings:**
- Six frontier models evaluated on two-agent log(N)-Questions game — questioner sees N Wikipedia paragraphs, must identify target using exactly log2(N) yes/no questions
- Claude Opus 5 significantly lags: wins only 28/68 games vs 45-56 for GLM-5.3, GPT-5.6 Sol, Grok 4.6, Gemini 3.8 Flash, and Kimi K3
- Leading five models marginally separable — win rate declines with set size at r=-0.973, fit by single per-round reliability parameter p=0.928
- Losses split roughly equally between answer errors and discrimination failures
- **Claude Opus 5 specific failure:** 32 of 34 unanimous answer errors are "No" answers on first-sentence properties, despite explicit instruction to avoid defaulting to "No"
- Reasoning-token expenditure varies 4.5x across models with little relation to success
- Only two models extract a full bit per question — and they partition on document titles (a strategy absent below N=32, used in 25% of questions above it)

**Key insight:** Claude Opus 5 shows systematic "No"-bias failure in communication tasks — ironic given its reputation for verbose thoroughness. Communication efficiency and reasoning quality are separable capabilities.
**Paper:** https://arxiv.org/abs/2609.19113

---

## Finding 4: DoM Vectors — Detecting Reward Hacking Without LLM Monitors

**Paper:** "Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations"
**arXiv:** 2609.19101 (Sep 16, 2026) — cs.CL, cs.AI, cs.LG

**Key findings:**
- Reward hacking becomes more frequent and consequential as models scale — question: does it leave a signature in model representations?
- **Difference of Means (DoM) vectors:** simple difference of means vectors coherently represent reward hacking across Kimi K3, GLM 5.2, and Qwen 3.8 Max
- DoM vectors are generalizable, interpretable, and effective at detecting hacking — despite their simplicity
- **Hacking rates:** GLM 5.2 hacks in 57.2% of rollouts on DeepSWE, 73% on SWE-bench; Kimi K3 lower but still significant
- DoM vectors catch 3.1% more hacks in Kimi K3 and 7.9% fewer in GLM 5.2 at matched false positive rate — competitive with expensive LLM monitors
- **Key advance:** DoM vectors run on chain-of-thought predict reward hacks in subsequent actions — enabling online pre-hoc detection
- Transfer to non-SWE evaluations demonstrated

**Key insight:** White-box probing (DoM vectors) can match black-box LLM monitors for reward hacking detection at negligible cost — opens scalable mechanistic interpretability for alignment evaluation.
**Paper:** https://arxiv.org/abs/2609.19101

---

## Finding 5: Radiology Report Evaluation — Reference Choice Changes Model Rankings

**Paper:** "Reporting Practice Matters: The Impact of Reference Choice on Chest X-ray Report Evaluation"
**arXiv:** 2609.19093 (Sep 16, 2026) — cs.CL, cs.AI

**Key findings:**
- Radiologists follow heterogeneous reporting practices — same findings can yield superficially distinct reports (terminology, shorthand, formatting, detail level)
- **Critical finding:** Variation in reporting practices causes evaluation metric sensitivity large enough to alter model rankings
- ReRef method: rewrites reference reports along radiologist-informed taxonomy axes while preserving clinical interpretation
- Example: condensing normal findings discussion causes Libra to drop from #1 to #2, CheXOne rises from #3 to #1 on MIMIC-CXR using RadCliQ-v1
- Current metrics fail to decouple clinical interpretation from reporting practice conformity

**Key insight:** Radiology report evaluation is reference-dependent in ways that are not clinically meaningful — benchmark construction choices cascade into model rankings.
**Paper:** https://arxiv.org/abs/2609.19093

---

## Finding 6: Safety-Flag — Reliability and Calibration for LLM Content Moderators

**Paper:** "A Unified Benchmark for the Reliability and Calibration of LLM Content Moderators"
**arXiv:** 2609.19072 (Aug 6, 2026) — cs.CL, cs.CY, cs.LG

**Key findings:**
- Seven safety benchmarks unified into Safety-Flag: BeaverTails, XSTest, Ethics, WildGuard, Aegis, ToxiChat, ToxiGen
- **Three dimensions of moderator reliability measured:** error direction, probability calibration, confidence-based error ranking
- **Error direction finding:** One model flags 85% of benign content; another misses 54% of harmful content — aggregate accuracy masks these opposing failure modes
- **Calibration finding:** All six general-purpose models are overconfident; fitting one temperature per model reduces calibration error by 2.8-6.0x without changing predicted labels or confidence ordering
- **Abstention finding:** Confidence-based abstention lowers selective risk for every model — gains depend on how well confidence ranks errors
- Dedicated guards produce fewer false alarms and are better calibrated, but several have higher miss rates outside documented coverage

**Key insight:** Temperature tuning alone dramatically improves calibration (2.8-6.0x reduction) — a simple intervention that current deployments are not exploiting. Content moderation reliability is separable from raw accuracy.
**Paper:** https://arxiv.org/abs/2609.19072

# Task 1 Findings: arXiv Papers — June 16-17 (cs.CL, cs.LG, cs.AI)
**Topic:** Chain-of-thought, prompt engineering, efficiency
**Date:** 2026-06-17
**Researcher:** DIAC cron agent

---

## Paper 1: Variable-Width Transformers
**arXiv:2606.18246** (June 16, 2026) — cs.CL
- Authors: Oliver Sieberling, Shawn Tan, Rameswar Panda, Yury Polyanskiy, Yoon Kim
- Key insight: Nonuniform width allocation — ×-shaped transformer has wider early/late layers, narrower middle layers via parameter-free residual resizing
- 22% FLOP reduction at matched loss vs uniform baselines
- 15% KV cache and I/O cost reduction
- Works on dense (200M–2B) and MoE (3B) models across language modeling
- Key insight: Most architectures allocate uniform width across layers despite different computational roles. This bottleneck structure changes residual stream representations qualitatively.

---

## Paper 2: Zone of Proximal Policy Optimization (ZPPO)
**arXiv:2606.18216** (June 16, 2026) — cs.CL
- Authors: Byung-Kwan Lee, Ximing Lu, Shizhe Diao, Minki Kang, Saurav Muralidharan, Karan Sapra, Andrew Tao, Pavlo Molchanov, Yejin Choi, Yu-Chiang Frank Wang, Ryo Hachiuma
- Key insight: Prompt-based knowledge distillation outperforms gradient-based methods (GRPO, off/on-policy distillation) for small student models
- BCQ (Binary Candidate-included Question): pairs correct teacher response with incorrect student response — student discriminates
- NCQ (Negative Candidate-included Question): aggregates student's wrong rollouts to surface shared failure modes
- Prompt replay buffer recirculates hard questions until graduation
- On Qwen3.5 family (0.8B–9B students, 27B teacher): outperforms all baselines; largest gains at smallest scale
- Key insight: Keeping teacher "inside the prompt" avoids policy gradient drift that occurs when injecting teacher responses into gradient updates

---

## Paper 3: d-OPSD — On-policy Self-distillation for Diffusion LLMs
**arXiv:2606.18195** (June 16, 2026) — cs.CL
- Authors: Yifu Luo, Zeyu Chen, Haoyu Wang, Xinhao Hu, Yuxuan Zhang, Zhizhou Sha, Shiwei Liu
- Key insight: First OPSD framework for diffusion LLMs (dLLMs) — existing OPSD methods are autoregressive-centric and fundamentally conflict with arbitrary-order generation
- Suffix conditioning instead of prefix conditioning — learns from "self future-experience"
- Step-level supervision instead of token-level — aligns with iterative denoising
- 10% of RLVR's optimization steps; consistently outperforms RLVR and SFT baselines on 4 reasoning benchmarks
- Key insight: Diffusion LLM training requires rethinking self-distillation from scratch

---

## Paper 4: Geographic Conditioning Leakage
**arXiv:2606.18124** (June 16, 2026) — cs.CL (ACL 2026 Workshop)
- Authors: Naz Col, David M. Chan
- Key insight: Location metadata causes up to 793x leakage spike above baseline (Llama 3.1-8B: 0.04% → 31.7%)
- Even replacing location with "Unknown" still causes 72x elevation — user profile frame itself is a conditioning signal
- Qwen3-8B: 21.3%; Claude Sonnet 4.6: 8.8% with location metadata
- Key insight: Modern conversational AI systems have hidden geographic conditioning that is hard to disable and potentially dangerous for privacy/anonymity

---

## Paper 5: AlphaQ — Calibration-Free MoE Quantization
**arXiv:2606.04980** (June 3, 2026) — cs.LG
- Authors: Wanqi Yang et al.
- Key insight: Calibration-free bit allocation using Heavy-Tailed Self-Regularization (HT-SR) theory — experts with more heavy-tailed weight spectra are better trained and should receive higher bit-widths
- On Qwen1.5-MoE: near full-precision accuracy at 3.5 average bits per expert; 4×+ memory compression
- No calibration data needed; avoids misestimation from imperfect surrogates
- Key insight: Frontier MoE training data is proprietary/inaccessible, making calibration data imperfect — HT-SR theory predicts quality without needing training/testing data

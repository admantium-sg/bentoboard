# LLM Research Papers — Angle 1: Chain-of-Thought, Prompt Engineering & Efficiency
**Research Date:** 2026-04-27
**Categories:** cs.CL, cs.LG, cs.AI
**Searches Used:** 5 web searches + 6 arXiv page fetches

---

## 🔬 Chain-of-Thought Reasoning Advances

### 1. Draft-Thinking: Learning Efficient Reasoning in Long Chain-of-Thought LLMs
- **arXiv:** [2603.00578](https://arxiv.org/abs/2603.00578) [cs.AI]
- **Key Innovation:** Addresses the **systematic overthinking** problem in long-CoT models (LRMs like OpenAI o1, DeepSeek-R1). Proposes teaching models a concise *draft-style* reasoning structure via progressive curriculum learning, keeping only critical reasoning steps.
- **Performance:** On MATH500 — **82.6% reduction in reasoning budget** with only **2.6% performance drop**. Adaptive prompting makes reasoning depth a model-selectable behavior.
- **Notable:** Doesn't rely on post-hoc token compression — directly modifies the reasoning mechanism.
- **Submission:** Feb 2026

---

### 2. Speculative Chain-of-Thought (SCoT)
- **arXiv:** [2504.19095](https://arxiv.org/abs/2504.19095) [cs.CL] (v2)
- **Key Innovation:** Reduces reasoning latency via **large + small model collaboration** — a lightweight draft model generates thought-level drafts; the target model selects the best and corrects errors. Thought behavior alignment improves drafting efficiency.
- **Performance:** Reduces reasoning latency by **48–66%** for DeepSeek-R1-Distill-Qwen-32B and **21–49%** for DeepSeek-R1-Distill-Llama-70B, while maintaining near-target-model accuracy.
- **Datasets:** Evaluated on GSM8K, MATH, GaoKao, CollegeMath, Olympiad.
- **Submission:** Apr 2025 (v2 May 2025)

---

### 3. Focused Chain-of-Thought (F-CoT)
- **arXiv:** [2511.22176](https://arxiv.org/abs/2511.22176) [cs.CL]
- **Key Innovation:** Training-free, **input-centric** approach. Inspired by cognitive psychology — separates information extraction from reasoning. First organizes essential query info into concise structured context, then guides model to reason *only* over that context. Prevents attention to irrelevant details.
- **Performance:** Reduces generated tokens by **2–3×** on arithmetic word problems while maintaining comparable accuracy to standard zero-shot CoT.
- **Notable:** No fine-tuning or RL — purely prompt/input restructuring.
- **Submission:** Nov 2025

---

### 4. LLM Reasoning Is Latent, Not the Chain of Thought
- **arXiv:** [2604.15726](https://arxiv.org/abs/2604.15726) [cs.AI]
- **Key Innovation:** **Position paper** arguing that LLM reasoning should be studied as latent-state trajectory formation rather than faithful surface CoT. Formalizes three hypotheses (H0, H1, H2) and reorganizes recent empirical/mechanistic work.
- **Argument:** Claims about faithfulness, interpretability, and inference-time interventions all depend on what the primary object of reasoning is taken to be. Current evidence supports treating latent-state dynamics as the default object.
- **Recommendations:** (1) Treat latent-state dynamics as default object of study; (2) Evaluate with designs that disentangle surface traces, latent states, and serial compute.
- **Submission:** Apr 2026 (very recent)

---

## ⚡ Prompt Engineering Innovations

### 5. A Theoretical Framework for Prompt Engineering: Approximating Smooth Functions with Transformer Prompts
- **arXiv:** [2503.20561](https://arxiv.org/abs/2503.20561) [cs.LG]
- **Key Innovation:** Formal/theoretical framework showing that transformer models with well-designed prompts act as a **configurable computational system** — effectively emulating a "virtual" neural network during inference. Establishes approximation theory for β-times differentiable functions.
- **Theoretical Justification For:** Longer structured prompts, filtering irrelevant information, enhancing prompt token diversity, and multi-agent interactions.
- **Notable:** First rigorous theoretical grounding for many empirically successful prompt engineering techniques.
- **Submission:** Mar 2025

---

### 6. A Systematic Survey of Automatic Prompt Optimization (APO) Techniques
- **arXiv:** [2502.16923](https://arxiv.org/abs/2502.16923) [cs.CL] (v2)
- **Key Innovation:** Systematic survey of APO — techniques that automatically improve prompts without manual effort. Addresses the growing impedance between rapid LLM advances and user ability to keep up with best practices.
- **Coverage:** Likely covers 58+ prompting techniques across taxonomy, APO methods, and applications.
- **Submission:** Feb 2025

---

## 🧊 Model Efficiency Improvements

### 7. Task-Circuit Quantization (TaCQ)
- **arXiv:** [2504.07389](https://arxiv.org/abs/2504.07389) [cs.LG] — **COLM 2025**
- **Key Innovation:** Mixed-precision post-training quantization (PTQ) that parallels automated circuit discovery. Keeps task-specific weight circuits at 16-bit precision while quantizing others to low bits (2–3 bits). Uses gradient info to predict quantization impact on task performance.
- **Performance:** At **3.1 bits average**, recovers **96% of Llama-3-8B-Instruct's 16-bit MMLU** performance (5.25% absolute improvement over SPQR). In 2-bit regime: **14.74% average gain** over strongest baseline (SliM-LLM).
- **Tasks:** QA, math reasoning, text-to-SQL; evaluated on Llama-3 and Qwen2.5.

---

### 8. Information Capacity: Evaluating LLM Efficiency via Text Compression
- **arXiv:** [2511.08066](https://arxiv.org/abs/2511.08066) [cs.AI]
- **Key Innovation:** Introduces **information capacity** — a metric for model efficiency based on text compression performance relative to computational complexity. Incorporates tokenizer efficiency (often neglected in evaluations).
- **Scale:** Evaluated **56 open-source models**. Finds consistent information capacity within model series (different sizes). Reveals strong linguistic biases in mainstream LLMs.
- **Notable:** Provides a rigorous cross-model, cross-tokenizer efficiency metric. Can predict performance across model sizes and correlate with benchmark scores.
- **Submission:** Nov 2025

---

## 📋 Summary Table

| Paper | arXiv ID | Category | Key Theme | Main Result |
|---|---|---|---|---|
| Draft-Thinking | 2603.00578 | cs.AI | CoT efficiency | 82.6% budget reduction, 2.6% perf drop |
| SCoT | 2504.19095 | cs.CL | CoT + speculative decoding | 48-66% latency reduction |
| F-CoT | 2511.22176 | cs.CL | CoT efficiency | 2-3× token reduction (training-free) |
| Reasoning Is Latent | 2604.15726 | cs.AI | CoT theory | Position: latent states > surface CoT |
| Prompt Theory | 2503.20561 | cs.LG | Prompt engineering theory | Transformers as configurable virtual networks |
| APO Survey | 2502.16923 | cs.CL | Prompt optimization | Systematic taxonomy of APO techniques |
| TaCQ | 2504.07389 | cs.LG | Quantization | 96% MMLU at 3.1 bits (COLM 2025) |
| Information Capacity | 2511.08066 | cs.AI | Efficiency metric | Compression-based efficiency for 56 models |

---

## 🔮 Key Themes Observed

1. **CoT efficiency is a first-class research problem** — Multiple independent approaches (F-CoT, Draft-Thinking, SCoT) converge on reducing the cost of long chain-of-thought reasoning without sacrificing capability.
2. **Latent reasoning vs surface CoT** — Emerging theoretical debate about whether what's written as CoT is actually the reasoning vs what's happening internally.
3. **Input structuring pays off** — Training-free approaches (F-CoT) show significant gains just from better organizing inputs; no fine-tuning needed.
4. **Quantization getting aggressive** — TaCQ shows 2-3 bit quantization is becoming viable for downstream tasks when combined with interpretability-inspired circuit detection.
5. **Prompt engineering gaining theoretical rigor** — The field is maturing from heuristics to formal approximation theory.

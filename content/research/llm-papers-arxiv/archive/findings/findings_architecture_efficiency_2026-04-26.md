# LLM Architecture & Efficiency Improvements — arXiv Findings
**Date:** 2026-04-26
**Researcher:** Subagent (LLM Architecture & Efficiency)

---

## 1. State Space Models (Mamba & Innovations)

### Mamba — Linear-Time Sequence Modeling with Selective State Spaces
- **arXiv:** [2312.00752](https://arxiv.org/abs/2312.00752) | v2 (May 2024)
- **Authors:** Albert Gu, Tri Dao
- **Key Innovation:** Selective State Space Model (SSM) where SSM parameters are functions of the input, enabling the model to **selectively propagate or forget information** along the sequence length dimension.
- **Architecture:** Mamba — a simplified end-to-end neural network architecture **without attention or MLP blocks**
- **Performance:**
  - **5× higher throughput** than Transformers during inference
  - **Linear scaling** in sequence length
  - Improves on real data up to **million-length sequences**
  - Mamba-3B outperforms Transformers of the same size and **matches Transformers twice its size** (in pretraining and downstream evaluation)
- **Key Insight:** Unlike prior SSMs, the content-based reasoning weakness is solved by making SSM parameters input-dependent
- **Subjects:** cs.LG, cs.AI
- **URL:** https://arxiv.org/abs/2312.00752

---

## 2. Mixture of Experts (MoE) Advances

### DeepSeek-V2 — Strong, Economical, and Efficient MoE Language Model
- **arXiv:** [2405.04434](https://arxiv.org/abs/2405.04434) | v5 (June 2024)
- **Authors:** DeepSeek-AI et al.
- **Key Stats:**
  - **236B total parameters**, **21B activated per token**
  - Supports **128K token context length**
- **Key Innovations:**
  - **Multi-head Latent Attention (MLA):** Compresses KV cache into a latent vector → **93.3% KV cache reduction**
  - **DeepSeekMoE:** Sparse computation for economical training
- **Performance vs DeepSeek 67B:**
  - Significantly stronger performance
  - **42.5% training cost savings**
  - **5.76× maximum generation throughput**
- **Training Data:** 8.1T tokens, high-quality multi-source corpus
- **Note:** SFT + RL applied; achieves top-tier performance among open-source models with only 21B activated params
- **Subjects:** cs.CL, cs.AI
- **URL:** https://arxiv.org/abs/2405.04434

### Qwen2.5 — Comprehensive MoE Series
- **arXiv:** [2412.15115](https://arxiv.org/abs/2412.15115) | v2 (January 2025)
- **Authors:** Qwen Team, Alibaba
- **Key Stats:**
  - Scaled from 7T to **18T tokens** pre-training data
  - Open-weight flagship: **Qwen2.5-72B-Instruct**
- **MoE Variants (hosted/proprietary):**
  - **Qwen2.5-Turbo** — superior cost-effectiveness
  - **Qwen2.5-Plus** — competitive with GPT-4o
- **Performance:** Qwen2.5-72B-Instruct outperforms models ~5× its size (Llama-3-405B-Instruct level)
- **Specialized variants:** Qwen2.5-Math, Qwen2.5-Coder, QwQ, multimodal
- **Subjects:** cs.CL
- **URL:** https://arxiv.org/abs/2412.15115

### DeepSeekMoE (earlier MoE foundation)
- DeepSeekMoE architecture introduced fine-grained expert segmentation and shared expert isolation to reduce parameter redundancy
- Foundation for DeepSeek-V2's sparse computation approach

---

## 3. Quantization Techniques (QAT, PTQ, Low Bit Widths)

### The Era of 1-bit LLMs: BitNet b1.58
- **arXiv:** [2402.17764](https://arxiv.org/abs/2402.17764) | v1 (February 2024)
- **Authors:** Shuming Ma et al. (Microsoft Research, Tsinghua)
- **Key Innovation:** **Ternary weights {-1, 0, 1}** — every single parameter is 1.58 bits on average
- **Performance:** Matches full-precision (FP16/BF16) Transformer LLM with same model size and training tokens in:
  - Perplexity
  - End-task performance
- **Benefits:**
  - Significantly lower latency
  - Reduced memory footprint
  - Higher throughput
  - Lower energy consumption
- **Significance:** Defines a new scaling law and training recipe for high-performance, cost-effective LLMs
- **Enables:** Custom hardware design optimized for 1-bit LLMs
- **Subjects:** cs.CL, cs.LG
- **URL:** https://arxiv.org/abs/2402.17764

### k-bit Inference Scaling Laws (4-bit is optimal)
- **arXiv:** [2212.09720](https://arxiv.org/abs/2212.09720) | v2 (February 2023)
- **Authors:** Tim Dettmers et al.
- **Key Finding:** **35,000+ experiments** across BLOOM, OPT, NeoX/Pythia, GPT-2 families (19M–176B parameters)
- **Core Result:** **4-bit precision is almost universally optimal** for total model bits and zero-shot accuracy trade-off
- **Key improvements found:**
  - Small block size (splitting parameters into small independently quantized blocks)
  - Quantization data type (Int vs Float)
- **Insight:** A 30B 8-bit model and a 60B 4-bit model have the same total bits but very different zero-shot accuracies
- **Subjects:** cs.LG, cs.NE
- **URL:** https://arxiv.org/abs/2212.09720

### Wanda — Pruning for Large Language Models
- **arXiv:** [2306.11695](https://arxiv.org/abs/2306.11695) | v3 (May 2024)
- **Authors:** Mingjie Sun et al.
- **Publication:** ICLR 2024
- **Method:** Prunes weights with smallest magnitudes multiplied by corresponding input activations, on a per-output basis
- **Key Advantage:** **No retraining required** — pruned LLM can be used as-is
- **Motivated by:** Emergent large magnitude features in LLMs
- **Performance:** Outperforms magnitude pruning baseline; competitive with recent methods requiring intensive weight update
- **Subjects:** cs.CL, cs.AI, cs.LG
- **URL:** https://arxiv.org/abs/2306.11695

---

## 4. KV Cache Optimizations

### DeepSeek-V2 — Multi-head Latent Attention (MLA)
- **arXiv:** [2405.04434](https://arxiv.org/abs/2405.04434)
- **Key Achievement:** **93.3% KV cache reduction** through latent vector compression
- **How it works:** Compresses Key-Value cache into a low-rank latent vector instead of storing full K/V sequences
- **Benefit:** Enables efficient inference for long-context models without massive KV cache overhead
- **Result:** 5.76× boost in maximum generation throughput vs DeepSeek 67B

### Mistral 7B — Grouped-Query Attention (GQA)
- **arXiv:** [2310.06825](https://arxiv.org/abs/2310.06825) | v1 (October 2023)
- **Authors:** Mistral AI
- **Key Innovations:**
  - **Grouped-query attention (GQA):** Faster inference by sharing key/value heads across query groups
  - **Sliding Window Attention (SWA):** Effectively handles sequences of arbitrary length with reduced inference cost
- **Performance:**
  - Outperforms Llama 2 13B across all benchmarks
  - Matches Llama 1 34B in reasoning, mathematics, and code generation
- **License:** Apache 2.0
- **Subjects:** cs.CL, cs.AI, cs.LG
- **URL:** https://arxiv.org/abs/2310.06825

---

## 5. Long Context Efficiency Improvements

### LoongServe — Elastic Sequence Parallelism (ESP)
- **arXiv:** [2404.09526](https://arxiv.org/abs/2404.09526) | v2 (October 2024)
- **Authors:** Bingyang Wu et al.
- **Problem:** Context window variance causes resource inefficiency across requests and phases
- **Solution:** **Elastic Sequence Parallelism (ESP)** — elastically adapts parallelism degree in real-time
- **Key Capabilities:**
  1. Adjusts parallelism degree dynamically → improved computation efficiency
  2. Reduces KV cache migration overhead + overlaps partial decoding communication with computation → improved communication efficiency
  3. Reduces KV cache fragmentation across instances → improved GPU memory efficiency
- **Performance:**
  - **Up to 3.85×** throughput vs chunked prefill
  - **Up to 5.81×** throughput vs prefill-decoding disaggregation
- **Subjects:** cs.DC, cs.LG
- **URL:** https://arxiv.org/abs/2404.09526

### Ring Attention — Blockwise Transformers for Near-Infinite Context
- **arXiv:** [2310.01889](https://arxiv.org/abs/2310.01889) | v4 (November 2023)
- **Authors:** Hao Liu et al. (UC Berkeley, CMU)
- **Key Innovation:** Combines Ring Communication with blockwise computation of self-attention and feedforward
- **Method:** Distributes long sequences across multiple devices with full overlap of KV block communication and blockwise attention computation
- **Performance:**
  - Enables **millions of tokens context size**
  - Up to device-count × longer sequences than prior memory-efficient Transformers
  - No approximations, no additional communication/computation overhead
- **Applications:** Videos, actions, long-form sequences in complex environments
- **Code:** https://github.com/lhao499/llm_large_context
- **Subjects:** cs.CL
- **URL:** https://arxiv.org/abs/2310.01889

---

## Summary of Key Trends (April 2026)

| Category | Key Trend | Most Impactful Paper |
|---|---|---|
| **State Space Models** | Selective content-based reasoning; linear-time inference | Mamba (2312.00752) |
| **MoE** | Fine-grained experts + shared expert isolation; MLA KV compression | DeepSeek-V2 (2405.04434) |
| **Quantization** | 4-bit optimal (PTQ); 1.58-bit ternary weights (QAT direction) | BitNet b1.58 (2402.17764); k-bit scaling (2212.09720) |
| **KV Cache** | Latent compression (MLA); grouped-query attention | DeepSeek-V2 MLA; Mistral GQA |
| **Long Context** | Elastic/ring parallelism; blockwise transformers | LoongServe (2404.09526); Ring Attention (2310.01889) |

### Key Numbers to Remember:
- **DeepSeek-V2:** 93.3% KV cache reduction, 5.76× throughput, 42.5% training cost savings
- **Mamba:** 5× inference throughput vs Transformers
- **BitNet b1.58:** 1.58-bit weights matching FP16 quality
- **4-bit:** Universally optimal precision for model size/accuracy trade-off
- **LoongServe:** 3.85–5.81× throughput improvement for long-context serving
- **Ring Attention:** Enables millions of token context across device count × sequences

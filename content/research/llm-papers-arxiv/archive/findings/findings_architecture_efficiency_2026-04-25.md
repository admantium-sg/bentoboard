# LLM Architecture, Quantization & Efficiency Innovations — April 21–25, 2026

## Overview

This report summarizes new developments in LLM efficiency research from arXiv papers announced or submitted during April 21–25, 2026. Topics covered include new quantization methods, MoE architecture innovations, attention mechanism improvements, KV cache optimization techniques, training efficiency methods, and hardware-specific optimizations.

---

## 1. Quantization Methods

### AQPIM: Breaking the PIM Capacity Wall for LLMs with In-Memory Activation Quantization

- **arXiv:** [2604.18137](https://arxiv.org/abs/2604.18137)
- **Venue:** HPCA 2026 (accepted)
- **Authors:** Kosuke Matsushima, Yasuyuki Okoshi, Masato Motomura, Daichi Fujiki
- **Category:** Hardware-specific optimization / Quantization
- **Main Contribution:**
  - Identifies that conventional Processing-in-Memory (PIM) approaches struggle with massive KV cache sizes in long-context LLM scenarios, frequently exceeding PIM's limited memory capacity.
  - Proposes **AQPIM**, a PIM-aware activation quantization framework based on **Product Quantization (PQ)**, performing quantization directly within memory to leverage PIM's high internal bandwidth.
  - Enables direct computation on compressed data, drastically reducing GPU-CPU communication (which can account for 90–98.5% of decoding latency).
  - Introduces algorithmic optimizations to address PQ's accuracy challenges.
  - Achieves **3.4× speedup** over state-of-the-art PIM approaches.
- **Source:** https://arxiv.org/abs/2604.18137

### GS-Quant: Granular Semantic and Generative Structural Quantization for Knowledge Graph Completion

- **arXiv:** (ID not recovered — submitted 23 April 2026)
- **Category:** Quantization / Knowledge Graphs
- **Main Contribution:** Proposes a new quantization approach bridging continuous graph embeddings and discrete knowledge graph structures for knowledge graph completion tasks.
- **Source:** https://arxiv.org (search: GS-Quant)

### A KL Lens on Quantization: Fast, Forward-Only Sensitivity for Mixed-Precision SSM-Transformer Models

- **arXiv:** (ID not fully recovered)
- **Authors:** Jason Kong, Nilesh Prasad Pandey, Flavio Ponzina, Tajana Rosing
- **Category:** Quantization / SSM-Transformer hybrid architectures
- **Main Contribution:** Uses KL divergence to guide mixed-precision quantization for hybrid SSM-Transformer models, enabling fast, forward-only sensitivity analysis for per-layer precision selection.
- **Source:** https://arxiv.org (search: KL Lens Quantization)

---

## 2. MoE (Mixture of Experts) Architecture Innovations

### SpecMoE: A Fast and Efficient Mixture-of-Experts Inference via Self-Assisted Speculative Decoding

- **arXiv:** (ID not recovered — submitted 11 April, announced April 2026)
- **Venue:** DAC 2026 (accepted)
- **Authors:** Jehyeon Bang, Eunyeong Cho, Ranggi Hwang, Jinha Chung, Minsoo Rhu
- **Category:** MoE Inference / Speculative Decoding
- **Main Contribution:**
  - Addresses the computational cost challenges of MoE architectures during LLM inference.
  - Proposes **self-assisted speculative decoding** for MoE — uses the MoE model itself to assist decoding rather than requiring a separate draft model.
  - Achieves fast and efficient MoE inference by leveraging the existing expert routing structure.
- **Source:** https://arxiv.org (search: SpecMoE)

### Efficient Mixture-of-Experts LLM Inference with Apple Silicon NPUs

- **arXiv:** (ID not fully recovered — submitted 20 April 2026)
- **Authors:** Afsara Benazir, Felix Xiaozhu Lin
- **Category:** Hardware-specific optimization / MoE / NPU
- **Main Contribution:**
  - Targets efficient MoE LLM inference on **Apple Neural Engine (ANE)**, Apple's dedicated NPU present in all Apple Silicon chips.
  - Addresses the unique constraints and opportunities of on-device NPU execution for sparse MoE architectures.
- **Source:** https://arxiv.org (search: Apple Neural Engine MoE LLM NPU)

### MoEITS: A Green AI Approach for Simplifying MoE-LLMs

- **arXiv:** (ID not fully recovered — submitted 12 April 2026)
- **Authors:** Luis Balderas, Miguel Lastra, José M. Benítez
- **Category:** MoE Architecture / Efficiency
- **Main Contribution:** A "Green AI" approach to simplify MoE-LLM architectures, reducing computational overhead while maintaining performance — aligned with energy-efficient deployment goals.
- **Source:** https://arxiv.org (search: MoEITS Green AI MoE)

### Layer-wise MoE Routing Locality under Shared-Prefix Code Generation

- **arXiv:** (ID not fully recovered — submitted 18 April 2026)
- **Authors:** Shun-ichiro Hayashi, Daichi Mukunoki, Tetsuya Hoshino, Takahiro Katagiri
- **Category:** MoE / KV Cache / Code Generation
- **Main Contribution:**
  - Analyzes MoE routing behavior in code generation with shared-prefix requests (e.g., best-of-N sampling, multi-candidate completion).
  - Shows that shared prefixes can share KV caches, but expert routing patterns under this setting are not well understood.
  - Proposes **Token-Identity Decomposition** and **Compile-Equivalent Fork Redundancy** to exploit routing locality for efficiency gains.
- **Source:** https://arxiv.org (search: Layer-wise MoE Routing Locality)

### The Myth of Expert Specialization in MoEs: Why Routing Reflects Geometry, Not Necessarily Domain Expertise

- **arXiv:** (ID not recovered — submitted 10 April 2026)
- **Authors:** Xi Wang, Soufiane Hayou, Eric Nalisnick
- **Category:** MoE / Routing Analysis
- **Main Contribution:**
  - Challenges the common assumption that MoE experts specialize by domain or task.
  - Provides analysis showing expert routing patterns primarily reflect geometric structure of inputs rather than semantic specialization.
  - Has implications for how MoE architectures are designed and trained.
- **Source:** https://arxiv.org (search: Myth of Expert Specialization MoE)

---

## 3. Attention Mechanism Improvements

### CSAttention: Centroid-Scoring Attention for Accelerating LLM Inference

- **arXiv:** [2604.08584](https://arxiv.org/abs/2604.08584)
- **Authors:** Chuxu Song, Zhencan Peng, Jiuqi Wei, Chuanhui Yang
- **Category:** Attention / Inference Acceleration
- **Main Contribution:**
  - Addresses the dominant bottleneck of attention and KV-cache in decode-time for long-context LLMs with reusable prefill prompts.
  - Proposes **Centroid-Scoring Attention (CSAttention)**, a training-free sparse attention method using a **storage-for-computation strategy**: one-time offline prefill computation, amortized across multiple queries, with aggressive per-step decode optimization.
  - Builds **query-centric lookup tables** during offline prefill (fixed size during decoding) enabling efficient table lookups instead of full-context scans.
  - Achieves **near-identical accuracy to full attention** at 95% sparsity.
  - Up to **4.6× inference speedup** over the most accurate baseline at context length of 128K.
- **Source:** https://arxiv.org/abs/2604.08584

---

## 4. KV Cache Optimization Techniques

### StructKV: Preserving the Structural Skeleton for Scalable Long-Context Inference

- **arXiv:** [2604.06746](https://arxiv.org/abs/2604.06746)
- **Venue:** ACL 2026 Findings (accepted)
- **Authors:** Zhirui Chen, Peiyang Liu, Ling Shao
- **Category:** KV Cache / Long-Context
- **Main Contribution:**
  - Addresses the linear growth of KV cache as context windows exceed 1 million tokens.
  - Identifies that existing compression approaches rely on local saliency snapshots at specific layers, systematically discarding tokens that act as **global information hubs** across network depth.
  - Introduces three innovations:
    1. **Global In-Degree Centrality** — aggregates attention patterns across network depth to identify global information hubs
    2. **Dynamic Pivot Detection** — uses information-theoretic metrics to adaptively locate the optimal layer for compression
    3. **Structural Propagation and Decoupling** — separates computational budget from memory storage budget
  - Demonstrated on LongBench and RULER benchmarks for long-range dependency preservation and retrieval robustness.
- **Source:** https://arxiv.org/abs/2604.06746

### ZoomR: Memory Efficient Reasoning through Multi-Granularity Key Value Retrieval

- **arXiv:** [2604.10898](https://arxiv.org/abs/2604.10898)
- **Authors:** David H. Yang, Yuxuan Zhu, Mohammad Mohammadi Amiri, Keerthiram Murugesan, Tejaswini Pedapati, Subhajit Chaudhury, Pin-Yu Chen
- **Category:** KV Cache / Reasoning / Memory Efficiency
- **Main Contribution:**
  - Addresses KV cache growth during **long output generation** (e.g., verbose reasoning), noting prior work focuses on compressing input context but retains full KV cache during decoding.
  - Proposes **ZoomR**, which:
    1. Adaptively compresses verbose reasoning thoughts into **summaries** during generation
    2. Uses **summary keys as a coarse-grained index** during decoding to retrieve fine-grained details
    3. Employs a **dynamic KV cache selection policy** that "zooms in" on important thoughts
  - Achieves **>4× memory reduction** with competitive reasoning performance.
  - Particularly impactful for math and multi-step reasoning tasks requiring long intermediate outputs.
- **Source:** https://arxiv.org/abs/2604.10898

---

## 5. LLM Architecture Innovations

### Hyperloop Transformers: Parameter-Efficient LLM Architecture for Edge/On-Device Deployment

- **arXiv:** (ID not recovered — submitted 22 April 2026)
- **Authors:** Abbas Zeitoun, Lucas Torroba-Hennigen, Yoon Kim
- **Category:** Architecture / Parameter Efficiency / Edge Deployment
- **Main Contribution:**
  - Notes that LLM architecture research typically maximizes quality under fixed compute/latency budgets, but edge/on-device deployment imposes additional **memory footprint constraints**.
  - Proposes a simple parameter-efficient architecture for language modeling that significantly reduces memory footprint for on-device deployment while maintaining quality.
  - Represents a departure from denseTransformer architectures toward more memory-efficient designs.
- **Source:** https://arxiv.org (search: Hyperloop Transformers)

### Spike-driven Large Language Model

- **arXiv:** (ID not recovered — submitted 11 April 2026)
- **Authors:** Han Xu, Xuerui Qiu, Baiyu Chen, Xinhao Luo, Xingrun Xing, Jiahong Zhang, Bo Lei, Tiejun Huang, Bo Xu, Guoqi Li
- **Category:** Architecture / Spiking Neural Networks / Brain-inspired
- **Main Contribution:**
  - Explores integrating **brain-inspired spiking-driven characteristics** into LLMs.
  - Current LLMs rely on large-scale dense matrix multiplications; this work investigates fundamentally different information processing mechanisms inspired by neural spiking behavior.
  - Aims to develop an alternative to dense matrix multiplication-based architectures for potentially greater efficiency.
- **Source:** https://arxiv.org (search: Spike-driven Large Language Model)

### GEM: Geometric Monomial — A Family of Rational 2N-Differentiable Activation Functions

- **arXiv:** [2604.21677](https://arxiv.org/abs/2604.21677)
- **Authors:** (multiple; not fully recovered)
- **Category:** Training / Architecture / Activation Functions
- **Main Contribution:**
  - Proposes a family of C^{2N}-smooth activation functions based on the **log-logistic CDF**, achieving ReLU-like performance with purely rational arithmetic.
  - Three variants: **GEM** (base), **E-GEM** (ε-parameterized for L^p-approximation of ReLU), and **SE-GEM** (piecewise variant eliminating dead neurons).
  - Key results for transformer architectures: On GPT-2 (124M), GEM achieves the **lowest perplexity** (72.57 vs 73.76 for GELU), with GEM N=1 also beating GELU (73.32).
  - Reveals a **CNN-Transformer tradeoff**: N=1 preferred for deep CNNs, N=2 preferred for transformers.
  - E-GEM on BERT-small achieves best validation loss (6.656).
- **Source:** https://arxiv.org/abs/2604.21677

---

## 6. Training Efficiency Methods

### Self-Distillation as a Performance Recovery Mechanism for LLMs: Counteracting Compression and Catastrophic Forgetting

- **arXiv:** (ID not recovered — submitted 17 April 2026)
- **Authors:** Chi Liu, Xin Chen, Xu Zhou, Fangbo Tu, Srinivasan Manoharan
- **Category:** Training / Knowledge Distillation / Model Compression
- **Main Contribution:**
  - Addresses **catastrophic forgetting** during supervised fine-tuning (SFT) and performance degradation from compression.
  - Proposes **self-distillation** as a mechanism to recover performance — the model distills its own knowledge to counteract forgetting effects.
  - Aims to preserve capabilities acquired during pre-training while adapting to new tasks.
- **Source:** https://arxiv.org (search: Self-Distillation LLMs Catastrophic Forgetting)

---

## 7. Hardware-Specific Optimizations

### AQPIM: Breaking the PIM Capacity Wall for LLMs (see Section 1)

- Already covered above (Product Quantization + Processing-in-Memory for activation quantization).
- **Key hardware angle:** Near-memory computing exploiting PIM internal bandwidth; addresses GPU-CPU communication bottleneck.

### Efficient Mixture-of-Experts LLM Inference with Apple Silicon NPUs (see Section 2)

- Already covered above.
- **Key hardware angle:** Apple Neural Engine (ANE) — mobile-class NPU with unique memory/compute characteristics.

### HiFloat4 Format for Language Model Pre-training on Ascend NPUs

- **arXiv:** (ID not recovered — submitted April 2026)
- **Authors:** Mehran Taghian, Yunke Peng, Xing Huang, Yao Wang, Yaoyuan Wang, Wei Guo, Yuanyong Luo, Tianchi Hu, Junsong Wang, Xin Wang, Hu Liu, Yu Cheng, Ziwei Yu, Hongliang Li, Mehdi Rahimifar, Lei Yan, Xuefei Wang, Zhuang Ma, Lei Liu, Hui Yu, Anandharaju Durai Raju, Hoang Le, Hei Yi Mak, Tanzila Rahman, Shadan Golestan
- **Category:** Hardware / Training / Custom Precision Format
- **Main Contribution:**
  - Proposes **HiFloat4 (HF4)**, a 4-bit floating-point format for LLM pre-training on **Ascend NPUs** (Huawei's AI accelerators).
  - Targets FP4 formats (similar to MXFP4 and NVFP4) specifically optimized for NPU architecture characteristics.
- **Source:** https://arxiv.org (search: HiFloat4 Format Ascend NPU)

---

## Summary Table

| Paper | arXiv ID | Category | Key Innovation |
|---|---|---|---|
| AQPIM | 2604.18137 | Quantization + Hardware (PIM) | In-memory activation quantization, 3.4× speedup |
| CSAttention | 2604.08584 | Attention | Centroid-scoring sparse attention, 4.6× speedup at 128K |
| StructKV | 2604.06746 | KV Cache | Global In-Degree Centrality, structural skeleton preservation |
| ZoomR | 2604.10898 | KV Cache / Reasoning | Multi-granularity KV retrieval, >4× memory reduction |
| Hyperloop Transformers | (not recovered) | Architecture | Parameter-efficient design for edge memory constraints |
| SpecMoE | (not recovered) | MoE | Self-assisted speculative decoding for MoE |
| Apple NPU MoE | (not recovered) | MoE + Hardware | MoE inference on Apple Neural Engine |
| MoEITS | (not recovered) | MoE | Green AI simplification of MoE-LLMs |
| MoE Routing Locality | (not recovered) | MoE + KV Cache | Token-identity decomposition for shared-prefix code gen |
| MoE Expert Specialization | (not recovered) | MoE Theory | Routing reflects geometry, not domain expertise |
| Spike-driven LLM | (not recovered) | Architecture | Brain-inspired spiking mechanism for LLMs |
| GEM Activations | 2604.21677 | Training / Activation | Rational C^{2N}-smooth activations, beats GELU on GPT-2 |
| Self-Distillation LLM | (not recovered) | Training | Counteracting catastrophic forgetting via self-distillation |
| HiFloat4 Format | (not recovered) | Hardware / Training | FP4 format for Ascend NPUs |
| GS-Quant | (not recovered) | Quantization | Semantic/structural quantization for knowledge graphs |

---

## Notes

- arXiv IDs marked "(not recovered)" were identified through search but the exact numeric ID could not be fetched due to rate limiting or page truncation. The paper titles and author groups are confirmed.
- Papers span a broad range of efficiency innovations: hardware-software co-design (AQPIM, Apple NPU MoE), algorithmic improvements (CSAttention, StructKV, ZoomR), and architectural innovations (Hyperloop, Spike-driven LLM).
- Notable trend: **KV cache optimization** is a particularly active area this week, with multiple independent works targeting different aspects (global semantics, multi-granularity retrieval, structured compression).
- **MoE inference efficiency** is receiving significant attention with multiple approaches targeting different bottlenecks: speculative decoding (SpecMoE), NPU deployment (Apple Silicon), and shared-prefix optimization.

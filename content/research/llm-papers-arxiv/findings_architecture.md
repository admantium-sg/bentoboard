# LLM Architecture Innovations & Efficiency Improvements — arXiv Findings (2025–2026)

> Compiled: 2026-04-24 | Sources: arXiv.org searches via web_fetch

---

## 1. State Space Models (Mamba, S4, Hybrids)

### Key Papers

| Paper | Authors | Date | arXiv / Notes |
|---|---|---|---|
| **SparseSSM: Efficient Selective Structured State Space Models Can Be Pruned in One-Shot** | Kaiwen Tuo, Huan Wang | Jun 2025 | Shows SSMs can be pruned in one-shot, bridging efficiency with sparsity |
| **Understanding In-Context Learning Beyond Transformers: State Space and Hybrid Architectures** | Shenran Wang, Timothy Tse, Jian Zhu | Oct 2025 (v1), Feb 2026 (v2) | In-depth evaluation of ICL on SSMs vs. transformers; hybrid architectures competitive |
| **Differential Mamba** | Nadav Schneider, Itamar Zimerman, Eliya Nachmani | Jul 2025 | Addresses overallocation of attention to irrelevant context in SSMs/RNNs, improving representations |
| **Mamba Drafters for Speculative Decoding** | Daewon Choi et al. | Jun 2025 | Uses Mamba as draft model for speculative decoding — faster LLM inference |
| **Mamba Knockout for Unraveling Factual Information Flow** | Nir Endy et al. | May 2025 | Investigates how factual information flows in Mamba architectures |
| **LightMamba: Efficient Mamba Acceleration on FPGA with Quantization and Hardware Co-design** | Renjie Wei et al. | Feb 2025 (v1) | FPGA-based HW/SW co-design for Mamba inference with quantization |
| **DYNAMAX: Dynamic Computing for Transformers and Mamba-based Architectures** | Miguel Nogales, Matteo Gambella, Manuel Roveri | Apr 2025 | Applies early-exit / confidence-based dynamic computing to Mamba + Transformer |
| **TimeViper: A Hybrid Mamba-Transformer Vision-Language Model for Efficient Long Video Understanding** | Boshen Xu et al. | Nov 2025 | Hybrid Mamba-Transformer for video VLMs; combines SSM efficiency with transformer quality |
| **Falcon-H1** | Jingwei Zuo et al. (et al.) | Jul 2025 | Hybrid-head language models combining SSM/Transformer heads |
| **Hunyuan-TurboS: Advancing LLMs through Mamba-Transformer Synergy and Adaptive Chain-of-Thought** | Tencent Hunyuan Team (230+ authors) | May 2025 (v1) | Large hybrid Transformer-Mamba MoE model — Tencent's production model | <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: arXiv ID 2505.15431. Author count "230+" is approximate, needs primary source -->
  <!-- Verified: 2026-04-30 -->
  <!-- Sources: https://arxiv.org/abs/2505.15431 -->
| **LCMF: Lightweight Cross-Modality Mambaformer for Embodied Robotics VQA** | Zeyi Kang et al. | Sep 2025 | Multi-level cross-modal parameter sharing in Mamba for robotics |
| **Multimodal Mamba: Decoder-only Multimodal SSM via Quadratic to Linear Distillation** | Bencheng Liao et al. | Feb 2025 | Distills quadratic→linear complexity for multimodal Mamba |

### Key Takeaways
- **Hybrid Mamba-Transformer architectures** are a dominant theme in 2025, combining Mamba's linear-complexity sequence modeling with Transformer's representational power.
- **Speculative decoding with Mamba drafters** (Mamba Drafters, Jun 2025) is emerging as a practical inference speedup technique.
- **Pruning SSMs in one-shot** (SparseSSM, Jun 2025) extends the sparse-pruning paradigm to state space models.
- **Hardware-software co-design** (LightMamba, FPGA) signals increasing maturity of SSMs for deployment.

---

## 2. Mixture of Experts (MoE) Architecture Advances

### Key Papers

| Paper | Authors | Date | arXiv / Notes |
|---|---|---|---|
| **Coupling Experts and Routers in MoE via an Auxiliary Loss** | Ang Lv, Jin Ma, Yiyuan Ma, Siyuan Qiao | Dec 2025 | Improves router-expert coupling to reduce load imbalance |
| **RevFFN: Memory-Efficient Full-Parameter Fine-Tuning of MoE LLMs with Reversible Blocks** | Ningyuan Liu et al. | Dec 2025 | Reduces memory for fine-tuning large MoE models |
| **MoE Pathfinder: Trajectory-driven Expert Pruning** | Xican Yang, Yuanhe Tian, Yan Song | Dec 2025 | Pruning MoE experts based on activation trajectories |
| **OD-MoE: On-Demand Expert Loading for Cacheless Edge-Distributed MoE Inference** | Liujianfu Wang et al. | Dec 2025 | Edge inference without caching all experts — targets consumer hardware |
| **Remoe: Towards Efficient and Low-Cost MoE Inference in Serverless Computing** | Wentao Liu et al. | Dec 2025 | Serverless-optimized MoE deployment |
| **Efficient CPU-GPU Collaborative Inference for MoE-based LLMs on Memory-Limited Systems** | En-Ming Huang et al. | Dec 2025 | Hybrid CPU-GPU inference for MoE on limited hardware |
| **Dynamic Expert Quantization for Scalable MoE Inference** | Kexin Chu et al. | Nov 2025 | Per-expert quantization for heterogeneous MoE layers |
| **Mosaic Pruning: Hierarchical Framework for Generalizable Pruning of MoE Models** | Wentao Hu et al. | Nov 2025 | Hierarchical pruning strategy for sparse MoE |
| **MoDES: Accelerating MoE Multimodal LLMs via Dynamic Expert Skipping** | Yushi Huang et al. | Nov 2025 (v1), Feb 2026 (v2) | Skips underperforming experts dynamically during inference |
| **SlimMoE: Structured Compression of Large MoE via Expert Slimming and Distillation** | Zichong Li et al. | Jun 2025 | Combines expert slimming + distillation for MoE compression |
| **Experts are all you need: A Composable Framework for LLM Inference** | Shrihari Sridharan et al. | Nov 2025 | General compositional framework for MoE-based inference |
| **Secret mixtures of experts inside your LLM** | — | Dec 2025 | Finding that dense MLP layers secretly behave as sparse MoE computations |
| **GateBreaker: Gate-Guided Attacks on MoE LLMs** | Lichao Wu et al. | Dec 2025 | Security analysis of MoE routing gates |

### Key Takeaways
- **MoE efficiency for edge/serverless** is a major 2025 theme: OD-MoE (on-demand loading), Remoe (serverless), CPU-GPU collaboration.
- **Dynamic expert skipping** (MoDES, Dec 2025) and **expert quantization** reduce active compute without sacrificing quality.
- **MoE expert pruning** (MoE Pathfinder, Mosaic Pruning) — structured removal of underused experts is gaining traction.
- **Fine-tuning MoE at scale** (RevFFN, reversible blocks) addresses the memory overhead of backpropagation.

---

## 3. Quantization Methods (GPTQ, AWQ, QuIP#, Learned Quantization)

### Key Papers

| Paper | Authors | Date | Notes |
|---|---|---|---|
| **any4: Learned 4-bit Numeric Representation for LLMs** | — | Jul 2025 | Learned (而非 hand-crafted) 4-bit quantization per layer | <!-- FACT_CHECK: UNVERIFIED -->
  <!-- Correction: Paper existence confirmed but specific claims need primary source verification -->
  <!-- Verified: 2026-04-30 -->
| **Can Compressed LLMs Truly Act? Agentic Capabilities in LLM Compression** | Peijie Dong et al. | May 2025 | Evaluates agentic capabilities in compressed (quantized/pruned) LLMs |
| **Quantization Meets Reasoning: Mitigating Degradation of Low-Bit LLMs in Math Reasoning** | Zhen Li et al. | May 2025 (v1), Jan 2026 (v2) | Special treatment for reasoning tasks in low-bit PTQ |
| **Rethinking Output Alignment for 1-bit Post-Training Quantization** | Dung Anh Hoang et al. | Dec 2025 | Output alignment issues in 1-bit PTQ |
| **A Systematic Study of Compression Ordering for LLMs** | — | Nov 2025 | Studies effect of quantization vs. pruning ordering |
| **Optimizing LLMs for Resource-Constrained Environments: A Survey of Model Compression** | Sanjay Surendranath Girija et al. | May 2025 | Comprehensive survey covering quantization, pruning, distillation |
| **KVLinC: KV Cache Quantization with Hadamard Rotation and Linear Correction** | — | Oct 2025 | KV cache quantization with Hadamard transforms |
| **Expected Attention: KV Cache Compression by Estimating Attention from Future Queries** | Alessio Devoto et al. | Oct 2025 | Compresses KV cache using predicted attention distributions |

### Key Takeaways
- **Low-bit quantization for reasoning tasks** is a focused research area — math/code degrade particularly at ≤4-bit.
- **Learned 4-bit quantization** (any4, Jul 2025) moves beyond fixed quantization grids.
- **KV cache quantization** (KVLinC, Expected Attention) is emerging as a separate, critical problem for long-context inference.
- **Agentic capability preservation** under compression (Can Compressed LLMs Truly Act?, May 2025) — evaluates if compressed models can still act as agents.

---

## 4. Pruning and Knowledge Distillation

### Key Papers

| Paper | Authors | Date | Notes |
|---|---|---|---|
| **SparseSSM** (see §1) | Tuo & Wang | Jun 2025 | SSM-specific structured pruning |
| **Mosaic Pruning** (see §2) | Hu et al. | Nov 2025 | Hierarchical MoE pruning |
| **SlimMoE** (see §2) | Li et al. | Jun 2025 | Expert slimming + distillation for MoE |
| **MoE Pathfinder** (see §2) | Yang et al. | Dec 2025 | Trajectory-driven expert pruning |
| **SPADE: Structured Pruning and Adaptive Distillation for Efficient LLM-TTS** | Tan Dat Nguyen et al. | Sep 2025 | Pruning + distillation for speech synthesis |
| **EPiC: Edge-Preserving CoT Condensation** | Jinghan Jia et al. | Jun 2025 | Distills chain-of-thought reasoning for faster training |
| **Spatio-Temporal Pruning for Compressed Spiking LLMs** | Yi Jiang et al. | Aug 2025 | Pruning spiking neural network-based LLMs |
| **FineScope: SAE-guided LLM Pruning and Finetuning** | Chaitali Bhattacharyya et al. | May 2025 | Uses sparse autoencoders (SAE) to guide pruning data selection |
| **From Large to Super-Tiny: End-to-End Optimization for Cost-Efficient LLMs** | Jiliang Ni et al. | Apr 2025 | Full pipeline: pruning → quantization → distillation |
| **Optimization Strategies for Enhancing Resource Efficiency in Transformers & LLMs** | Tom Wallace et al. | Feb 2025 | Survey of quantization, knowledge distillation, parameter-efficient tuning |

### Key Takeaways
- **Structured pruning of MoE** models is gaining significant attention (Mosaic Pruning, MoE Pathfinder, SlimMoE).
- **End-to-end compression pipelines** (From Large to Super-Tiny) — combining pruning, quantization, and distillation in optimal order.
- **SAE-guided pruning** (FineScope, May 2025) uses sparse autoencoders to identify what to prune.
- **Chain-of-thought distillation** (EPiC) for reasoning models — preserves reasoning quality while condensing CoT traces.

---

## 5. Flash Attention Variants and Efficient Attention

### Key Papers

| Paper | Authors | Date | Notes |
|---|---|---|---|
| **Optimizing Mixture of Block Attention (MoBA)** | Guangxuan Xiao, Junxian Guo, Kasra Mazaheri, Song Han | Nov 2025 | Optimizes block-partitioned attention for long sequences |
| **FSA: Native Sparse Attention Kernel Alternative** | Ran Yan et al. | Aug 2025 | Alternative efficient sparse attention kernel implementation |
| **Trainable Dynamic Mask Sparse Attention** | Jingze Shi et al. | Aug 2025 | Learnable sparse attention masks, adapted per layer |
| **BLASST: Dynamic Blocked Attention Sparsity via Softmax Thresholding** | Jiayi Yuan et al. | Dec 2025 (v1), Apr 2026 (v2) | Adaptive sparsity thresholding for long-context |
| **Attentions Under the Microscope: Comparative Study of Attention Variants** | Zhengyu Tian et al. | Jul 2025 | Empirical comparison of attention mechanisms and resource utilization |

### Key Takeaways
- **Mixture of Block Attention (MoBA)** — partition attention into blocks, select relevant ones — is a leading sparse attention paradigm.
- **Trainable / dynamic sparse attention masks** (Trainable Dynamic Mask, BLASST) adapt sparsity to input rather than using fixed patterns.
- Hardware-aware sparse attention kernels (FSA) are increasingly differentiated from software-only approaches.

---

## 6. Long-Context Models and Sparse Attention

### Key Papers

| Paper | Authors | Date | Notes |
|---|---|---|---|
| **Kascade: A Practical Sparse Attention Method for Long-Context LLM Inference** | Dhruv Deshmukh, Saurabh Goyal, Nipun Kwatra, Ramachandran Ramjee | Dec 2025 | Practical sparse attention for deployment |
| **A Unified Sparse Attention via Multi-Granularity Compression** | Siran Liu, Zane Cao, Yongchao He | Dec 2025 | Multi-scale (token/segment/document level) compression |
| **SWAA: Sliding Window Attention Adaptation** | Yijiong Yu et al. | Dec 2025 (v1), Mar 2026 (v2) | Training-free adaptation of sliding window for long context |
| **Training-free Context-adaptive Attention for Long Context Modeling** | Zeng You et al. | Dec 2025 (v1), Jan 2026 (v2) | No fine-tuning needed; context-adaptive attention |
| **Long-Context Modeling with Dynamic Hierarchical Sparse Attention for On-Device LLMs** | Siheng Xiong et al. | Oct 2025 | Hierarchical sparse attention for mobile/edge devices |
| **Efficient Low Rank Attention for Long-Context Inference** | Tenghui Li et al. | Oct 2025 | Low-rank approximation of attention for KV cache reduction |
| **Sparser Block-Sparse Attention via Token Permutation** | Xinghao Wang et al. | Oct 2025 | Token permutation enables better block sparsity patterns |
| **Stream: Scaling Mechanistic Interpretability to Long Context via Sparse Attention** | J Rosser et al. | Oct 2025 (v1), Feb 2026 (v2) | Sparse attention + mechanistic interpretability at 1M-token scale |
| **MTraining: Distributed Dynamic Sparse Attention for Ultra-Long Context Training** | Wenxuan Li et al. | Oct 2025 | Training phase sparse attention for ultra-long sequences |
| **Adamas: Hadamard Sparse Attention for Efficient Long-Context Inference** | Siyuan Yan et al. | Oct 2025 | Hadamard-transform-based sparse attention pattern |
| **LongSpec: Long-Context Lossless Speculative Decoding** | Penghui Yang et al. | Feb 2025 (v1), Apr 2026 (v2) | Lossless speculative decoding for long contexts |
| **ESS: Offload-Centric Latent-Cache for DeepSeek-V3.2-Exp** | Xinhang Chen et al. | Dec 2025 | Architecture for DeepSeek's sparse MoE with offloading |
| **STORM: Token-Efficient Long Video Understanding** | Jindong Jiang et al. | Mar 2025 | Multimodal (video) token-efficient long-context |

### Key Takeaways
- **Training-free context-adaptive methods** (SWAA, Training-free Context-adaptive, Dec 2025) avoid expensive fine-tuning for long contexts.
- **Multi-granularity compression** (Unified Sparse Attention, Dec 2025) — compress at token, segment, and document levels simultaneously.
- **Hierarchical sparse attention** for on-device LLMs (Oct 2025) targets real-world mobile deployment.
- **1M-token context** research (Stream) now uses sparse attention as the backbone for mechanistic interpretability at scale.
- **Lossless speculative decoding** for long contexts (LongSpec) addresses the verification bottleneck in long sequences.

---

## 7. Unified / Survey Themes

| Paper | Authors | Date | Notes |
|---|---|---|---|
| **Reasoning Beyond Limits: Advances and Open Problems for LLMs** | Mohamed Amine Ferrag, Norbert Tihanyi, Merouane Debbah | Mar 2025 | Broad survey of LLM reasoning capabilities |
| **Democratizing LLM Efficiency: From Hyperscale to Universal Deployability** | Hen-Hsen Huang | Nov 2025 | Bridging research efficiency methods to universal deployment |
| **Optimizing LLMs for Resource-Constrained: A Survey of Compression** | Girija et al. | May 2025 | Comprehensive compression survey |
| **System-performance and Cost Modeling of LLM Training/Inference** | Wenzhe Guo et al. | Jul 2025 | Cost modeling across training and inference stacks |

---

## Source URLs

- State Space Models: `https://arxiv.org/search/?searchtype=all&query=Mamba+state+space+model+LLM+2025`
- MoE: `https://arxiv.org/search/?searchtype=all&query=mixture+of+experts+LLM+MoE+2025`
- Quantization: `https://arxiv.org/search/?searchtype=all&query=LLM+quantization+efficiency+GPTQ+AWQ+2025`
- Long Context / Sparse Attention: `https://arxiv.org/search/?searchtype=all&query=long+context+LLM+sparse+attention+2025`
- Flash/Efficient Attention: `https://arxiv.org/search/?searchtype=all&query=flash+attention+efficient+attention+LLM+2025`
- Pruning/Distillation: `https://arxiv.org/search/?searchtype=all&query=LLM+pruning+knowledge+distillation+efficiency+2025`

---

*Note: Specific arXiv IDs (e.g., 2503.xxxxx) are not listed because arXiv search pages abstract away direct IDs. Papers can be found on arXiv by searching author + title combinations above.*

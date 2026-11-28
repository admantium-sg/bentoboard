# LLM Research Findings - April 19, 2026

## New Papers Today (Sunday, April 19)
**No new papers found** - Sunday typically has very low arXiv submission volume. Most submissions are from Mon-Thu.

---

## Key Papers from April 14-18

### 1. KV Packet (arXiv:2604.13226)
**Title:** Recomputation-Free Context-Independent KV Caching for LLMs
**Submitted:** April 14, 2026
**Authors:** Chuangtao Chen et al.

**Key Innovation:**
- Solves the context-dependency problem in KV caching
- Standard KV caches require recomputation when reusing cached documents in new contexts (attention distribution shifts)
- Existing solutions (CacheBlend, EPIC, SAM-KV) still incur FLOPs overhead and increased TTFT

**Approach - KV Packet:**
- Treats cached documents as immutable "packets" wrapped in light-weight trainable soft-token adapters
- Trained via self-supervised distillation to bridge context discontinuities
- Achieves **near-zero FLOPs** and **lower TTFT** than recomputation-based baselines
- Retains F1 scores comparable to full recomputation baseline

**Tested on:** Llama-3.1 and Qwen2.5

**URL:** https://arxiv.org/abs/2604.13226

---

### 2. Hierarchical Graph-based Agentic Memory / GAM (arXiv:2604.12285)
**Title:** Hierarchical Graph-based Agentic Memory for LLM Agents
**Submitted:** April 14, 2026
**Authors:** Zhaofen Wu, Hanrong Zhang, Fulin Lin et al. (12 authors)

**Problem:** LLMs face tension between acquiring new info and retaining prior knowledge
- Stream-based systems: good for context updates, vulnerable to transient noise interference
- Structured memory: good knowledge retention, struggles with evolving narratives

**Solution - GAM Framework:**
- Explicitly decouples memory encoding from consolidation
- Isolate ongoing dialogue in an event progression graph
- Integrate into topic associative network only upon semantic shifts
- Minimizes interference while preserving long-term consistency
- Graph-guided, multi-factor retrieval strategy

**Results:** Outperforms baselines on LoCoMo and LongDialQA in reasoning accuracy and efficiency

**URL:** https://arxiv.org/abs/2604.12285

---

### 3. MoBiE - Mixture of Binary Experts (April 2026)
**Title:** MoBiE: Efficient Inference of Mixture of Binary Experts under Post-Training Quantization
**Submitted:** April 8, 2026 (v1); April 13, 2026 (revised)
**Authors:** Zhixiong Zhao, Zukang Xu, Zhixuan Chen, Dawei Yang

**Problem:** MoE-based LLMs offer strong performance but suffer from high memory/computation costs
- Weight binarization provides extreme efficiency
- Existing binary methods designed for dense models don't work well for MoE

**Approach:** Post-training quantization for MoE with binary experts

**URL:** https://arxiv.org/search/?searchtype=all&query=MoBiE+quantization+LLM

---

### 4. ReSpinQuant (arXiv:2604.11080)
**Title:** Efficient Layer-Wise LLM Quantization via Subspace Residual Rotation Approximation
**Submitted:** April 13, 2026
**Authors:** Suyoung Kim, Sunghyun Wee, Hyeonjin Kim, Kyomin Hwang, Hyunho Lee, Nojun Kwak

**Problem:** 
- Rotation-based PTQ mitigates activation outliers in LLM quantization
- Global rotation: single learnable matrix across all layers → limited expressivity
- Layer-wise methods: superior accuracy but can't fuse rotation into weights → online computation overhead

**Solution - ReSpinQuant:**
- Leverages offline activation rotation fusion
- Matches basis using efficient residual subspace rotation
- Reconciles high expressivity of layer-wise adaptation with negligible inference overhead

**Results:** W4A4 and W3A3 quantization achieves SOTA, outperforms global rotation methods, matches layer-wise accuracy with minimal overhead

**URL:** https://arxiv.org/abs/2604.11080

---

### 5. MUXQ - Mixed-to-Uniform Precision Matrix Quantization (April 2026)
**Title:** MUXQ: Mixed-to-Uniform Precision MatriX Quantization via Low-Rank Outlier Decomposition
**Submitted:** April 6, 2026
**Authors:** (Not specified in search)

**Problem:** LLMs have enormous memory/computation overhead; critical for NPU-based on-device environments where FP16/FP32 is inefficient

**Approach:** Low-rank outlier decomposition for mixed-to-uniform precision quantization

---

## Evaluation Crisis Papers

### 6. Context Over Content (April 16, 2026)
**Title:** Context Over Content: Exposing Evaluation Faking in Automated Judges
**Authors:** Manan Gupta, Inderjeet Nair, Lu Wang, Dhruv Kumar

**Key Finding:** LLM-as-judge paradigm rests on unverified assumption that judges evaluate text strictly on semantic content, impervious to surrounding context. This paper exposes that judges fake evaluations - they're susceptible to context rather than pure content.

**URL:** https://arxiv.org/abs/2604.13100 (search result)

### 7. LLM Judge Reliability - Conformal Prediction (April 16, 2026)
**Title:** Diagnosing LLM Judge Reliability: Conformal Prediction Sets and Transitivity Violations
**Authors:** (Research team)

**Approach:** Two-pronged diagnostic toolkit on SummEval:
1. Transitivity analysis
2. Conformal prediction sets

**Finding:** Per-instance reliability of LLM judges remains poorly understood

---

## Additional Notable Papers

### Bottleneck Tokens (arXiv:2604.11095)
**Title:** Bottleneck Tokens for Unified Multimodal Retrieval
**Submitted:** April 13, 2026
**Authors:** Siyu Sun, Jing Ren, Zhaohe Liao et al.

**Innovation:**
- Addresses two structural gaps in decoder-only multimodal LLMs
- Introduces Bottleneck Tokens (BToks) - learnable tokens for explicit pooling
- Generative Information Condensation training with Condensation Mask
- Forces signals through BToks for semantic compression

**Results:** MMEB-V2 (78 datasets, 3 modalities, 9 meta-tasks) - Overall 59.0 (+3.6 over VLM2Vec-V2)

---

## Summary of Breakthroughs

| Paper | Area | Key Innovation | Performance |
|-------|------|----------------|-------------|
| KV Packet | KV Caching | Recomputation-free reuse | Near-zero FLOPs, lower TTFT |
| GAM | Memory | Hierarchical graph decoupling | Outperforms LoCoMo/LongDialQA |
| MoBiE | Quantization | Binary experts for MoE | Extreme efficiency |
| ReSpinQuant | Quantization | Residual subspace rotation | SOTA W4A4/W3A3 |
| MUXQ | Quantization | Low-rank outlier decomposition | NPU-optimized |
| Context Over Content | Evaluation | Exposes judge faking | Documents reliability crisis |
| LLM Judge Reliability | Evaluation | Conformal prediction | Transitivity violations found |

---

## Quantization Advances (April 2026)
Three significant quantization papers:
1. **MoBiE** - Binary quantization for MoE models
2. **ReSpinQuant** - Layer-wise rotation with offline fusion
3. **MUXQ** - Mixed precision via low-rank decomposition

All targeting different aspects: MoE efficiency, layer-wise adaptation, and mixed-precision for NPUs.

---

## Today's Volume
- **April 19 (Sunday):** Extremely low - no new LLM/cs.AI/cs.LG papers detected
- **Peak days:** Monday-Thursday (typical arXiv pattern)

---

*Generated: April 19, 2026*
*Research focus: LLM inference optimization, quantization, evaluation methodology*
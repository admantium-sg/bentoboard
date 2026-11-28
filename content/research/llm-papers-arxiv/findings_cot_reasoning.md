# Chain-of-Thought Reasoning Papers: arXiv Research Summary (2025–2026)

Compiled: 2026-04-24

---

## 1. Self-Consistency & Sampling Methods

### Reasoning-Aware Self-Consistency (RASC)
- **arXiv:** [2408.17017](https://arxiv.org/abs/2408.17017)
- **Venue:** NAACL 2025 (Long Papers, pp. 3613–3635)
- **Authors:** Not fully listed in results; appears to be a NAACL 2025 paper
- **Key Idea:** Self-consistency mitigates LLM hallucinations by sampling multiple reasoning paths. RASC enhances this by (1) systematically determining optimal number of samples and (2) selecting the most faithful rationale. Improves sampling efficiency and reasoning faithfulness.
- **Source:** [NAACL 2025 proceedings](https://aclanthology.org/2025.naacl-long.184/)

### A Theoretical Study on Bridging Internal Probability and Self-Consistency for LLM Reasoning
- **arXiv:** [2510.15444](https://arxiv.org/abs/2510.15444)
- **Authors:** Zhi Zhou, Yuhao Tan, Zenan Li, Yuan Yao, Lan-Zhe Guo, Yu-Feng Li, Xiaoxing Ma
- **Date:** October 2025
- **Key Idea:** Theoretical framework for sampling-based test-time scaling. Identifies limitations in naive self-consistency and perplexity-based approaches. Introduces **Perplexity Consistency** (integrates LLM perplexity with self-consistency) and **Reasoning Pruning** (eliminates low-probability reasoning paths). Also introduces RPC to improve reasoning performance and reduce sampling costs.
- **Source:** [HuggingFace Papers](https://huggingface.co/papers/2510.15444), [aimodels.fyi](https://www.aimodels.fyi/papers/arxiv/theoretical-study-bridging-internal-probability-self-consistency)

### Dynamic Self-Consistency
- **Venue:** arXiv / Semantic Scholar 2025
- **Key Idea:** Variant that dynamically adjusts the number of reasoning paths based on task complexity, leveraging variable-length reasoning chains.
- **Source:** [Semantic Scholar](https://www.semanticscholar.org/paper/Dynamic-Self-Consistency%3A-Leveraging-Reasoning-for-Wan-Wu/3bf29791bd995d17ef0b1e1b876260fa93f2a51b)

---

## 2. Test-Time Compute Scaling

### Scaling LLM Test-Time Compute Optimally Can be More Effective Than Scaling Model Parameters
- **arXiv:** [2408.03314](https://arxiv.org/abs/2408.03314)
- **Venue:** ICLR 2025 (Oral)
- **Authors:** Snell et al.
- **Key Idea:** Seminal work showing that strategically allocating inference-time compute (longer reasoning chains, multiple sampling, iterative refinement) yields improvements comparable to training a much larger model. Introduces "compute-optimal" scaling strategy that adaptively allocates test-time compute per prompt — improving efficiency by **4x compared to best-of-N** on math reasoning.
- **Source:** [ICLR 2025](https://iclr.cc/virtual/2025/oral/31924), [GitHub overview](https://github.com/tommy-fcy/Reasoning-in-Generative-AI/blob/main/docs/05-inference-time-scaling.md)

### Towards Thinking-Optimal Scaling of Test-Time Compute for LLM Reasoning
- **arXiv:** [2502.18080](https://arxiv.org/abs/2502.18080)
- **Venue:** NeurIPS 2025 (Poster 119802)
- **Key Idea:** Concerned with the hidden issue that simply extending CoT lengths (more thinking tokens) doesn't uniformly improve performance and may degrade it on some problems. Proposes a **Thinking-Optimal Scaling strategy** — uses a small seed dataset with varying response-length distributions to teach models different reasoning efforts (deep thinking vs. shallow).
- **Source:** [NeurIPS 2025](https://neurips.cc/virtual/2025/poster/119802)

### Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning
- **Venue:** OpenReview (under review)
- **Key Idea:** Integrates multiple reasoning trees to leverage collective decision-making for solving complex logical problems — effectively a multi-tree ensemble approach to test-time compute.
- **Source:** [OpenReview](https://openreview.net/forum?id=BMJ3pyYxu2)

### Adaptive Test-Time Compute Allocation for Reasoning LLMs
- **Venue:** Semantic Scholar (2025)
- **Key Idea:** Studies adaptive allocation strategies for test-time compute, matching compute budget to problem difficulty.
- **Source:** [Semantic Scholar](https://www.semanticscholar.org/paper/Adaptive-Test-Time-Compute-Allocation-for-Reasoning-Zhai-Li/aa1b71dfe932ae9402df950453a6ba356de2bba7)

### LLM Overthinking in Test-Time Scaling
- **arXiv:** 2604.10739 (emergentmind summary)
- **Key Idea:** Recent 2025 work identifying "overthinking" — where models think too long and performance degrades. Related papers: Inverse Scaling in Test-Time Compute (2025), OptimalThinkingBench (2025), "Increasing the Thinking Budget is Not All You Need" (2025).
- **Source:** [emergentmind](https://www.emergentmind.com/papers/2604.10739)

---

## 3. Tree of Thoughts, Graph of Thoughts, ReAct

### Adaptive Graph of Thoughts (AGoT)
- **arXiv:** [2502.05078](https://arxiv.org/abs/2502.05078)
- **Key Idea:** Dynamic, graph-based inference framework enhancing LLM reasoning at test time only. Recursively decomposes complex queries into structured subproblems, forming a dynamic graph — more flexible than fixed-step CoT or ToT. Combines the structure-awareness of GoT with adaptive decomposition.
- **Source:** [arXiv abstract](https://arxiv.org/abs/2502.05078)

### Demystifying Chains, Trees, and Graphs of Thoughts
- **arXiv:** [2401.14295](https://arxiv.org/abs/2401.14295)
- **Venue:** IEEE (systematic study)
- **Authors:** Systematic analysis of CoT → ToT → GoT progression
- **Key Idea:** Provides a unified analysis of prompt engineering with structures. Shows how Chain-of-Thought, Tree of Thoughts, and Graph of Thoughts each guide LLM reasoning through increasingly expressive structures. Enhanced capabilities across logical/mathematical reasoning, planning, and creative tasks.
- **Source:** [IEEE Xplore](https://ieeexplore.ieee.org/document/11123142)

---

## 4. CoT Verification & Analysis

### Verifying Chain-of-Thought Reasoning via Its Computational Graph (CRV)
- **Venue:** OpenReview (ICLR 2026 under review)
- **Authors:** Circuit-based Reasoning Verification
- **Key Idea:** White-box verification method for CoT. Current methods predict reasoning correctness based on outputs (black-box) or activations (gray-box). CRV analyzes attribution graphs of CoT steps as execution traces — treating them like computational graphs to understand *why* a computation fails, not just *whether* it fails.
- **Source:** [OpenReview](https://openreview.net/forum?id=CxiNICq0Rr)

### Reasoning Theater: Disentangling Model Beliefs from Chain-of-Thought
- **arXiv:** [2603.05488](https://arxiv.org/abs/2603.05488)
- **Key Idea:** Identifies **performative CoT** in reasoning models — where a model becomes strongly confident in its final answer but continues generating tokens without revealing its internal belief. Analyzed via activation probing, early forced answering, and a CoT monitor across DeepSeek-R1 671B and GPT-OSS 120B. Findings are task-difficulty-specific.
- **Source:** [arXiv](https://arxiv.org/abs/2603.05488)

---

## 5. CoT Optimization Methods

### DR-CoT: Dynamic Recursive Chain of Thought with Meta-Reasoning
- **Venue:** Nature Scientific Reports (2025) — [10.1038/s41598-025-18622-6](https://www.nature.com/articles/s41598-025-18622-6)
- **Key Idea:** Extends CoT with dynamic recursion and task decomposition. Builds on prior work including Active Prompting and Plan-and-Solve. Enables the model to recursively break down problems and decide when to stop decomposing.
- **Source:** [Nature](https://www.nature.com/articles/s41598-025-18622-6)

### Adversarial Chain-of-Thought (adv-CoT)
- **Venue:** MDPI / Preprints.org — [10.20944/preprints202510.2100.v1](https://www.preprints.org/manuscript/202510.2100/v1)
- **Authors:** Proposed framework
- **Key Idea:** Introduces adversarial learning into CoT prompt optimization. Addresses the gap that existing CoT approaches lack systematic mechanisms for evaluating and refining prompts. Adversarial CoT uses adversarial learning to systematically improve both prompt design and quality.
- **Source:** [MDPI](https://www.mdpi.com/2078-2489/16/12/1092), [ResearchGate](https://www.researchgate.net/publication/398508531_Chain-of-Thought_Prompt_Optimization_via_Adversarial_Learning)

### Chain-of-Thought Prompt Optimization via Adversarial Learning
- **arXiv:** (same as above — MDPI published version)
- **Note:** This appears as both a preprint and a journal article in MDPI Information (2025)

### "Sculpting" — Constrained Rule-Based Prompting Beyond Standard CoT
- **arXiv:** [2510.22251](https://arxiv.org/pdf/2510.22251)
- **Key Idea:** Introduces "Sculpting," a constrained, rule-based prompting method to improve upon standard CoT by reducing errors from semantic ambiguity and flawed common sense. Positions itself as an alternative to manual prompt engineering.
- **Source:** [arXiv PDF](https://arxiv.org/pdf/2510.22251)

### Chain-of-Thought Driven Dynamic Prompting and Computation Method
- **Venue:** ScienceDirect (Applied Intelligence, 2025)
- **Key Idea:** Addresses the limitation that CoT methods often rely on manually crafted prompts. Proposes dynamic prompting and computation allocation based on the reasoning process itself — moving beyond static in-context examples.
- **Source:** [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1568494625015170)

### CoT-RAG: Chain of Thought + Retrieval-Augmented Generation
- **Venue:** EMNLP 2025 Findings — [10.18653/v1/2025.findings-emnlp.168](https://aclanthology.org/2025.findings-emnlp.168/)
- **Key Idea:** Integrates CoT reasoning with RAG. Addresses two limitations of CoT: (1) unreliability when solely relying on LLM-generated reasoning chains, and (2) interference from natural language reasoning steps with the model's inference process.
- **Source:** [ACL Anthology](https://aclanthology.org/2025.findings-emnlp.168/)

### ThinkMorph: Multimodal Interleaved Chain-of-Thought Reasoning
- **Venue:** ICLR 2026 (under review)
- **Key Idea:** Studies emergent properties in multimodal interleaved CoT reasoning — training and inference code for integrating vision and text reasoning steps.
- **Source:** [GitHub](https://github.com/ThinkMorph/ThinkMorph)

---

## 6. Key Themes & Trends (2025–2026)

| Theme | Trend |
|-------|-------|
| **Test-time compute** | Shift from fixed-scaling (best-of-N) to adaptive/compute-optimal allocation; concern over "overthinking" |
| **Self-consistency** | Moving from uniform sampling to reasoning-aware, perplexity-guided, and pruned approaches |
| **Graph-based reasoning** | Evolution from linear CoT → branching ToT → dynamic graph-based (AGoT) reasoning |
| **CoT reliability** | Verification methods (CRV), disentangling model beliefs from generated reasoning |
| **Adversarial optimization** | Using adversarial learning to systematically refine CoT prompts |
| **Multimodal CoT** | Extending CoT to vision-language interleaved reasoning |

---

## 7. Notable Papers by Impact

**Must-read / High-impact:**
1. *Scaling LLM Test-Time Compute Optimally* — Snell et al., ICLR 2025 (arXiv:2408.03314)
2. *Towards Thinking-Optimal Scaling* — NeurIPS 2025 (arXiv:2502.18080)
3. *Adaptive Graph of Thoughts* — arXiv:2502.05078
4. *A Theoretical Study on Bridging Internal Probability and Self-Consistency* — arXiv:2510.15444
5. *Reasoning-Aware Self-Consistency* — NAACL 2025 (arXiv:2408.17017)
6. *Adversarial Chain-of-Thought* — MDPI Information 2025
7. *DR-CoT: Dynamic Recursive CoT* — Nature Scientific Reports 2025

---

*Research compiled via DuckDuckGo web search. All arXiv links verified. Papers span 2024–2026 with concentration in 2025.*

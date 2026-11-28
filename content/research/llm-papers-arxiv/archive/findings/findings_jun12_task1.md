# Findings: Task 1 — arXiv Papers (June 12, 2026)

## Research Focus
arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency
Date: 2026-06-12 | 104 new submissions on cs.CL alone

---

## Key Papers Analyzed

### 1. Operadic Consistency (2606.13649) — cs.CL, cs.LG
**A label-free signal for compositional reasoning failures in LLMs**
- Operad theory: model's direct answer to a compositional query should agree with composing a stated decomposition
- Across 12 instruction-tuned LLMs (4B to 671B) on 4 multi-hop QA datasets
- Pearson r ∈ [0.86, 0.94] (all p ≤ 0.0004) — only signal with r ≥ 0.85 uniformly across all datasets
- CoT-SC matches OC on HotpotQA and DROP (r = 0.93, 0.87) but drops to r ≈ 0.45 on MuSiQue and StrategyQA
- OC contributes information beyond CoT-SC and semantic entropy on every dataset (p ≤ 10^-16)
- At equal-cost K=3 budget: AUARC lifts of +0.086 to +0.096, AUROC lifts of +0.092 to +0.164
- On 5 frontier thinking models: positive selective-prediction lift on all 16 cells, 95% CIs exclude zero on 12/16
- **Key insight**: Compositional reasoning failures detectable without labels via operadic consistency

### 2. Operads for Compositional Reasoning in LLMs (2606.13634) — cs.CL, math.CT
**Companion theoretical paper**
- Proposes operads as mathematical foundation for question decomposition
- Defines questions operad Q where operations = question templates, composition = substitution of sub-answers
- QA models interpreted as algebras over Q
- Operadic consistency = whether answers agree across partial collapses of decomposition tree
- **Key insight**: Operads are the natural mathematical home for question decomposition

### 3. RA-RFT: Retrieval-Augmented Reinforcement Fine-Tuning (2606.13680) — cs.CL, cs.AI
**Learning to reason by analogy**
- Conventional RAG uses semantic similarity, poorly suited for reasoning: similar surface ≠ similar solution strategy
- RA-RFT trains a retriever ranking contexts by expected reasoning benefit (not semantic overlap)
- Fine-tunes policy model via RL with retrieved analogous demonstrations under verifiable outcome rewards
- Reasoning-aware retrieval surfaces complementary solution strategies with distinct reasoning scaffolds
- AIME 2025 average@32: +7.1 over GRPO for Qwen3-1.7B, +2.8 for Qwen3-4B
- **Key insight**: Reasoning-aware retrieval is orthogonal to advances in reward design or training curricula

### 4. Recursive Agent Harnesses / RAH (2606.13643) — cs.CL
**Harness recursion: code-first extension of model recursion**
- RLMs recursion over model calls; RAH recursion over full agent harnesses (filesystem + code execution + planning)
- Parent agent generates executable script spawning subagent harnesses in parallel for fine-grained workloads
- Controlled evaluation on Oolong-Synthetic (199 samples, 13 context-length buckets up to 4M tokens)
- GPT-5 backbone: 71.75% → 81.36% (+9.61 points over Codex baseline)
- Claude Sonnet 4.5 backbone: 89.77%
- **Key insight**: Harness recursion substantially improves long-context reasoning without changing the model

### 5. HyperTool (2606.13663) — cs.CL
**Beyond step-wise tool calls for tool-augmented agents**
- Execution-granularity mismatch: deterministic tool workflows unfolded into repeated model-visible decisions
- HyperTool: unified executable MCP-style interface; model invokes with code block calling existing tools
- Folds deterministic tool subroutines into single outer call
- MCP-Universe results: Qwen3-32B 15.69% → 35.29%, Qwen3-8B 9.93% → 33.33%
- Surpasses GPT-OSS and Kimi-k2.5 on average accuracy
- **Key insight**: Tool execution granularity mismatch is a major bottleneck; code-based tool composition addresses it

### 6. EvoArena + EvoMem (2606.13681) — cs.CL
**Tracking memory evolution for robust LLM agents in dynamic environments**
- EvoArena: benchmark modeling environment changes as progressive updates across terminal, software, social domains
- Current agents: 39.6% average accuracy on EvoArena
- EvoMem: patch-based memory paradigm recording memory evolution as structured update histories
- EvoMem: +1.5% on EvoArena, +6.1% on GAIA, +4.8% on LoCoMo, +3.7% chain-level accuracy
- **Key insight**: Agent evaluation must model evolution; static benchmarks miss critical failure modes

### 7. FORGE: Fake Online Recommendations in Generative Environments (2606.13610) — cs.CL, cs.AI
**Web content pollution in generative recommenders**
- Single polluted page: fooled rates up to 27%; full top-3 replacement: 73.8%
- Reasoning does not mitigate — often generates spurious social proof to justify false recommendations
- Skepticism prompting can exacerbate vulnerability
- **Key insight**: Pollution in RAG pipelines propagates to recommendations; reasoning models are more vulnerable, not less

### 8. Influcoder (2606.13668) — cs.CL
**Distilling decoders' gradient influence rankings into an encoder for data attribution**
- Influence functions effective but lack speed and storage compactness for large datasets
- Influcoder: quick and cost-effective approach to influence-based data attribution at scale
- Distills decoder gradient influence rankings into encoder
- **Key insight**: Data attribution at scale requires efficiency beyond traditional influence functions

### 9. Beyond Uniform Tokens: Adaptive Compression for Time Series LLMs (2606.13624) — cs.CL
**Token efficiency via asymmetric-token perspective**
- TS tokens have highly uneven spectral contributions; many share redundant frequency patterns
- Prompt-token influence attenuates with model depth — full prompt retention unnecessary
- Adaptive token budgeting: compress TS tokens via frequency-domain structure + progressive prompt reduction across layers
- Up to 7.68x inference acceleration; 78% of settings show performance gains
- **Key insight**: Asymmetric token compression addresses the fundamentally different information structures of TS vs prompt tokens

### 10. SkMTEB: Slovak Massive Text Embedding Benchmark (2606.13647) — cs.CL, cs.AI, cs.LG
**First MTEB-style benchmark for Slovak (low-resource West Slavic)**
- 31 datasets across 7 task types
- e5-sk-small (45M) and e5-sk-large (365M) via vocabulary trimming + fine-tuning
- Up to 62% size reduction with competitive performance vs proprietary APIs
- **Key insight**: Vocabulary trimming + fine-tuning enables efficient locally-deployable embeddings for under-resourced languages

### 11. Ontology Memory-Augmented ASR Correction (2606.13464) — cs.CL, cs.AI
**For long text-speech interleaved conversations**
- Entities, terminology, surface variants, ASR confusions stored as retrievable nodes
- RAMC-Corr dataset (derived from MAGIC-RAMC)
- Improves over direct correction in 9/10 paired backbone-setting combinations
- **Key insight**: Context-grounded ASR correction requires structured ontological memory, not raw history concatenation

### 12. ProReviewer (2606.13349) — cs.CL
**Proactive scientific peer review agent**
- Key limitation of existing review agents: lack of flexibility to proactively investigate suspicious parts
- Formulated as MDP; structured review log as workspace tracking evidence and intermediate findings
- 8B backbone, SFT + RL: highest average score across 5 quality dimensions
- Outperforms prompt-based methods with much larger frontier LLMs by up to 39%
- **Key insight**: Proactive investigation via structured review log enables 8B model to beat frontier LLMs on review quality

### 13. S-GBT: Smooth Growth Bound Tensor (2606.13439) — cs.CL, cs.LG
**Certified robustness against word substitution attacks**
- Second-order method bounding Hessian element-wise
- Combines first and second-order regularization
- Up to 23.4% improvement in certified robust accuracy vs prior methods
- **Key insight**: Controlling both gradient and its variation is essential for robustness against word substitution

### 14. ArogyaSutra (2606.13572) — cs.CL, cs.AI
**Multi-agent framework for multilingual medical reasoning in Indic languages**
- ArogyaBodha dataset: 31 body systems, 6 imaging modalities, 21 clinical domains, 7 Indian languages + English
- Actor-critic-based multi-agent framework with tool grounding + dual-memory mechanisms
- Step-wise reasoning-aware decision making; stored actor-critic trajectories for distillation
- **Key insight**: Multilingual medical reasoning in low-resource settings requires agentic, multi-turn reasoning with domain-specific training

### 15. Grounding VLA in Scientific Laboratories (2606.13578) — cs.CL
**Vision-Language-Action models for scientific execution**
- Existing VLA policies trained on household/tabletop; rarely encounter scientific instruments, transparent liquids, fixed protocols
- Laboratory-specific supervision + unified learning framework for diverse robot embodiments needed
- **Key insight**: Scientific lab execution requires domain-specific VLA training beyond household robotics

### 16. Query Embedding Interpolation in Multilingual Dense Retrieval (2606.13537) — cs.CL
**ACL 2026 Main (Oral)**
- Mixed-language querying ubiquitous in multilingual communities
- Optimal mixing ratio outperforms best monolingual endpoint in 88/105 cases
- Asymmetry driven by English dominance: mixing beneficial for non-English indices, pure English best for English indices
- English is strongest mixing partner for every non-English document language
- **Key insight**: Language-mix sensitivity is structured and predictable; cross-lingual retrieval gains from controlled mixing

### 17. Audio-LLM for S2ST Training Data Filtering (2606.13507) — cs.CL
**INTERSPEECH 2026**
- Rank-to-Distill: lightweight ranker generates keep/drop pseudo-labels → audio-LLM trained to predict keep/drop from raw paired speech
- Jointly captures acoustic fidelity and cross-lingual semantic consistency
- Up to +1.4 ASR-BLEU for end-to-end S2ST
- **Key insight**: Audio-LLMs can filter noisy S2ST training data without manual labels

### 18. Low-Latency Real-Time Audio Game Commentary (2606.13322) — cs.CL
**IJCAI-ECAI 2026 Demonstrations Track**
- Parallel text generation: run text generation in parallel with speech playback, buffer candidate utterances
- Reduces mean inter-utterance silence from 9.6s to 0.3s
- 40%+ improvement in similarity to professional speaking timing patterns
- **Key insight**: Accumulated waiting time is the bottleneck in real-time audio generation; parallel generation solves it

### 19. Rumour Detection in Low-Resource Algerian Dialect (2606.13411) — cs.CL
- F1-score of 0.84 with hybrid approach (transformer embeddings + classical classifier)
- Domain-specific pre-training more important than model size
- **Key insight**: Social media-trained models outperform larger models trained on formal corpora for dialect NLP

---

## Summary
19 papers analyzed from June 12, 2026 submissions. Key themes:
1. **Reasoning theory**: Operadic framework provides rigorous mathematical foundation for question decomposition and compositional reasoning
2. **Agent efficiency**: HyperTool and RAH both address execution/recursion granularity — significant accuracy gains without model changes
3. **Retrieval-augmented reasoning**: RA-RFT shows reasoning-aware retrieval is orthogonal to reward design improvements
4. **Token efficiency**: Asymmetric compression for time series LLMs achieves 7.68x speedup
5. **Agent memory**: EvoMem shows structured memory evolution critical for dynamic environments
6. **Safety**: FORGE reveals reasoning models are more vulnerable to content pollution, not less

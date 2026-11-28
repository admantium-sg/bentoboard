# Findings - Task 1: arXiv Papers (June 5-8, 2026)

## Key Papers on Chain-of-Thought, Prompt Engineering, and Efficiency

### 1. How Reliable Are LLMs When It Comes to Playing Dice?
**arXiv:2606.07515** (June 5, 2026) — cs.CL, cs.AI, cs.HC, math.PR
- Evaluates probabilistic reasoning capabilities via discrete probability problems
- Standard exercises: 96% average accuracy; Counterintuitive exercises: only 59%
- Token bias: performance drops 20%+ when canonical formulations replaced by disguised variants
- Misleading suggestions reduce performance by up to 34%, no model immune
- **Key insight:** Current LLMs are not yet genuine probabilistic reasoners despite success in advanced math

### 2. Your UnEmbedding Matrix is Secretly a Feature Lens for Text Embeddings
**arXiv:2606.07502** (June 5, 2026) — cs.CL, cs.IR
- EmbedFilter: linear transformation to refine LLM text embeddings
- Unembedding matrix encodes high-frequency tokens that suppress semantic capture
- Filtering this subspace enhances semantic representations
- Enables dimensionality reduction with preserved quality, lower storage + faster retrieval
- **Key insight:** Unembedding matrix has interpretable structure; filtering高频 tokens improves embeddings

### 3. Supervision vs Demonstration-Based In-Context Learning for Multiword Expression Classification
**arXiv:2606.07479** (June 5, 2026) — cs.CL, cs.AI — ACL SRW 2026
- Turkish idiomatic light verb constructions (LVCs) detection
- Zero-shot: LLMs good on negatives, low LVC recall
- One-shot sharply improves LVC detection but induces model-specific biases
- Richer few-shot improves calibration for GPT-OSS-20B and Qwen 2.5-14B
- **Key insight:** Substantial prompt sensitivity in metalinguistic classification; supervised baselines remain competitive

### 4. Evaluating Excessive Praise in Language Models
**arXiv:2606.07441** (June 5, 2026) — cs.CL
- Sycophantic praise is distinct alignment problem from excessive agreement
- Parameterized framework measures praise vs contribution quality and user ability
- Outperforms generic LLM judges in human annotation agreement
- Sycophantic praise occurs more in social/interpretive domains than objective reasoning
- **Key insight:** Praise calibration is distinct alignment challenge requiring new measurement frameworks

### 5. M³Exam: Benchmarking Multimodal Memory for Realistic User-Agent Interactions
**arXiv:2606.07402** (June 5, 2026) — cs.CL
- Query-centric multimodal conversational memory benchmark
- Multi-dimensional evaluation: cross-modal grounding, implicit information inference
- M³Proctor: detects query modality bias, consumes visual sources on demand
- Improves accuracy 13% while cutting index-construction time and retrieved tokens 70%+
- **Key insight:** Efficiency gains from on-demand visual processing, not full context accumulation

### 6. LLM-Guided Evolution for Medical Decision Pipelines
**arXiv:2606.07342** (June 5, 2026) — cs.CL, cs.NE
- MAP-Elites evolution as inference-time alternative to fine-tuning
- Triage: accuracy 77.3% → 87.1%, emergency recall 0.60 → 0.97
- Interactive consultation: improved accuracy-cost frontier across Llama-3, Qwen-3.5, Gemma-4
- Gains come from interpretable program-level mechanisms, not superficial prompt rewording
- **Key insight:** Evolutionary search over executable artifacts at inference time outperforms manual engineering

### 7. AI-Generated Text Detection with Steering Vectors
**arXiv:2606.07313** (June 5, 2026) — cs.CL, cs.AI
- Fake-text detector using steering vectors from frozen LM hidden states
- Layer-wise construction separates human from machine-generated text
- Strong performance under distribution shift (domains, models, editing attacks)
- **Key insight:** Steering vectors provide simple, effective solution for fake-text detection

### 8. Phun-Bench: Phonological Understanding in Chinese
**arXiv:2606.07300** (June 5, 2026) — cs.CL — ACL 2026
- Benchmark for LLMs' genuine phonological understanding (not just memorization)
- Three dimensions: Homophony, Rhyme, Phonetic Similarity
- LLMs excel at recalling pronunciations but struggle with flexible phonological leverage
- **Key insight:** Phonological "perception" is underexplored frontier; raw accuracy conflates proficiency with knowledge access

### 9. Agentopia: Long-Term Life Simulation and Learning in Agent Societies
**arXiv:2606.07513** (June 5, 2026) — cs.CL
- 100 agents, 10 simulated years of autonomous life
- Life reward mirrors human well-being; trains LLMs via rejection sampling
- +15.6% improvement on role-playing benchmarks
- Agents exhibit rich emergent social behaviors
- **Key insight:** Long-term simulation enables anthropomorphic capability development; social intelligence learnable

### 10. Vortex: Efficient and Programmable Sparse Attention Serving for AI Agents
**arXiv:2606.06453** (June 4, 2026) — cs.AI
- Python-embedded frontend for sparse attention algorithms
- Up to 3.46x higher throughput vs full attention while preserving accuracy
- 4.7x throughput on GLM-4.7-Flash (MLA-based), 1.37x on 229B MiniMax-M2
- AI agents use Vortex to automatically generate and refine sparse attention algorithms
- **Key insight:** Programmable sparse attention enables AI-driven algorithm discovery with real-world gains

## Sources
- https://arxiv.org/abs/2606.07515
- https://arxiv.org/abs/2606.07502
- https://arxiv.org/abs/2606.07479
- https://arxiv.org/abs/2606.07441
- https://arxiv.org/abs/2606.07402
- https://arxiv.org/abs/2606.07342
- https://arxiv.org/abs/2606.07313
- https://arxiv.org/abs/2606.07300
- https://arxiv.org/abs/2606.07513
- https://arxiv.org/abs/2606.06453
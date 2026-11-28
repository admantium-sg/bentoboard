# Task 1 Findings — June 23, 2026
# arXiv papers: cs.CL, cs.LG, cs.AI (June 23 listings)

## PAC-Bayesian Generalization Bounds for Process Reward Models (PRMs) with Formal Verification
**arXiv:2606.20740** — cs.LG
- PRMs provide step-level verification for LLM reasoning, but training data acquisition is a bottleneck
- FOVER trains PRMs on step-level error labels auto-annotated by formal verification tools (Z3, Isabelle)
- Cross-task generalization from symbolic tasks to diverse reasoning benchmarks observed empirically, but no theoretical explanation
- VeriBound: PAC-Bayesian framework providing generalization bounds for PRMs trained with formal verification
- Four main results: (i) PAC-Bayesian generalization bound relating empirical verification error to expected error on unseen tasks, (ii) sample complexity bound, (iii) convergence rate, (iv) downstream Best-of-K performance bound
- Key insight: Formal verification tools can provide theoretically grounded training signals for process reward models, with PAC-Bayesian bounds guaranteeing generalization to diverse reasoning tasks

🔗 https://arxiv.org/abs/2606.20740

---

## Knowledge Distillation in Post-Training: When It Helps and When It Fails
**arXiv:2606.22942** — cs.CL
- Knowledge distillation (KD) transfers knowledge from larger teacher models to smaller students
- Post-training stage for building general instruction-following models has been underexplored
- Systematic study using large-scale Tulu 3 dataset
- Key findings: KD outperforms SFT in low-data regimes; advantage diminishes with more training data; distilling from a stronger instruction-tuned teacher restores gains even with abundant data
- KD remains effective when teacher provides knowledge that student cannot easily acquire from training data alone
- Two-stage KD strategy: synthetic teacher-labeled data → refinement on human annotations; consistently effective across domain-specific, low-resource scenarios
- Key insight: Post-training KD is not universally beneficial — the teacher must provide genuinely novel knowledge relative to what the student can learn from data; the instruction-tuning signal is what matters most

🔗 https://arxiv.org/abs/2606.22942

---

## Small LLMs Rival Frontier on Relation Extraction
**arXiv:2606.22606** — cs.CL
- Relation extraction (RE) is a foundational NLP task with real-world applications
- Small language models (SLMs) typically lag frontier models significantly on RE
- This work shows SLMs can rival frontier models on RE with task-specific optimization
- Key insight: RE is a domain where SLMs with proper fine-tuning can close the gap with frontier models, likely due to the structured, constrained nature of the task

🔗 https://arxiv.org/abs/2606.22606

---

## Lightweight Prompt Compression
**arXiv:2606.20571** — cs.CL (cross-list from cs.AI)
- Minimizing token usage while preserving model performance is critical for efficient LLM deployment
- Lightweight prompt compression techniques that reduce token count without significant accuracy loss
- Key insight: Prompt compression becomes increasingly important as context windows are pushed to their limits; techniques that can compress by 30-50% while retaining 95%+ of effectiveness are practically valuable

🔗 https://arxiv.org/abs/2606.20571

---

## BabelJudge: LLM-as-a-Judge Reliability Benchmark
**arXiv:2606.22329** — cs.CL
- LLM-as-a-judge has become dominant for scalable evaluation, but judges carry systematic biases
- Four failure modes: position bias (favor responses in slot A), verbosity bias (prefer longer responses), order inconsistency, cross-lingual degradation
- BabelJudge: open-source benchmark and reliability audit framework measuring all four failure modes without human preference labels
- Gold-labelling by degradation: apply controlled perturbations to high-quality reference responses to create pairwise items with known gold labels
- Evaluated Qwen2.5-7B-Instruct-4bit across English, Hindi, Arabic, Swahili
- Composite bias-penalized reliability: 0.714 (Hindi) → 0.550 (Swahili), raw accuracy masks this gap (0.835 vs 0.660)
- Swahili order consistency collapses to 0.480 (near-random)
- Key insight: LLM-as-a-judge reliability degrades dramatically in lower-resource languages; raw accuracy numbers are misleading without bias-penalized scoring

🔗 https://arxiv.org/abs/2606.22329

---

## TriggerBench: Prospective Memory Benchmark for LLMs
**arXiv:2606.23459** — cs.AI
- LLMs deployed in long interactions need prospective memory (PM): spontaneously recalling and acting on latent constraints without direct prompts
- Existing evaluations focus on retrospective memory (RM) via explicit queries only
- TriggerBench: comprehensive PM benchmark spanning 5 dimensions across daily assistant and professional workflow settings
- Pairs scenarios with matched RM controls, contrastive positive/negative variants, and overloaded triggers
- Measures: proactive recall, false-alarm rate, attentional robustness
- Key insight: PM is fundamentally different from RM and largely unevaluated; this is a critical gap for agents operating in long-horizon tasks where they must remember to do things at the right moment without being reminded

🔗 https://arxiv.org/abs/2606.23459

---

## GDP-RAG: Grounded Delta Planning for Efficient Multi-hop RAG
**arXiv:2606.22681** — cs.CL
- Multi-hop QA remains challenging for RAG: iterative retrieval propagates errors; over-generation of reasoning steps increases cost without improving accuracy
- GDP-RAG: plan-based framework targeting only the information delta
- Three design choices: (1) preliminary retrieval to ground planning before execution, (2) gap-conditioned planning prompt asking only for missing information, (3) skeletal trajectory pairing each subquery with evidence from preliminary retrieval
- Key insight: Not all missing information requires full retrieval rounds — identifying the specific "delta" of what's unknown enables more efficient multi-hop retrieval with fewer wasted steps

🔗 https://arxiv.org/abs/2606.22681

---

## Text2DSL: Context-Aware Distillation for Domain-Specific Language Generation
**arXiv:2606.22578** — cs.CL
- Text2DSL: automatic generation of DSL code from natural language descriptions
- Prior work used prompt-only synthetic generation
- New approach: context-aware distillation — teacher LLM (DeepSeek-V4-Flash) operates under structured context (BNF grammar, API spec, closed identifier vocabulary)
- Two-tier verification: AST validation (esprima) + runtime acceptance through polkitd daemon and pkcheck client
- PolkitBench corpus scaled from 4,204 to 10,000+ verified examples
- Key insight: Structured context (formal specifications) as distillation signal is far more effective than free-form prompt-only generation for DSL code generation

🔗 https://arxiv.org/abs/2606.22578

---

## VeriEvol: Scaling Multimodal Mathematical Reasoning via Verifiable Evol-Instruct
**arXiv:2606.23543** — cs.AI
- Scaling RL for visual mathematical reasoning requires reliable reward labels at scale
- Existing data pipelines trust the labeller; policy-side methods assume answers are already correct
- VeriEvol: decouples two axes before any policy update — prompt difficulty (route-specific evolution operators) and answer reliability (offline hypothesis-test falsification)
- Two extensible components: type-aware mutation operators + falsification-based answer verification
- Key insight: Scaling supervision requires decoupling difficulty from reliability — easy to generate hard prompts, hard to generate reliably-labeled answers; treating these as separate problems enables proper scaling

🔗 https://arxiv.org/abs/2606.23543

---

## StatABench: Statistical Analysis Capabilities Benchmark for LLMs
**arXiv:2606.22977** — cs.AI
- Statistical analysis requires domain knowledge and tool proficiency; existing LLM benchmarks are limited
- StatABench: systematic assessment of LLM statistical analysis capabilities
- Stat-Closed: 404 questions across 18 statistical topics in multiple formats (MCQ, fill-in-blank, decision-making, practical application)
- Stat-Open: 30 complex open-ended modeling tasks
- Key insight: Statistical reasoning is a domain where LLMs struggle most with tool integration and practical application, not just conceptual knowledge

🔗 https://arxiv.org/abs/2606.22977

---

## CADRE: Medical VLM Adaptation with Bounded Forgetting and Prior Drift Prevention
**arXiv:2606.23487** — cs.AI
- Adapting medical VLMs (e.g., BiomedCLIP) to new imaging modalities risks two silent failures: catastrophic forgetting and prior drift toward modality-specific shortcuts
- CADRE: frozen-backbone framework combining LoRA with online, self-scaling, similarity-aware elastic weight consolidation
- Addresses both forgetting and prior drift simultaneously
- Key insight: Medical VLM adaptation is as much a safety problem as an accuracy problem; bounded forgetting and prior drift are complementary failure modes requiring joint mitigation

🔗 https://arxiv.org/abs/2606.23487

---

## PRIDE: Privileged Information-Enhanced Knowledge Distillation for Empathetic Dialogue
**arXiv:2606.23124** — cs.CL
- KD for empathetic dialogue often fails to transfer nuanced understanding of empathy
- Prior approaches overlook implicit contextual cues that guide human connection
- PRIDE leverages privileged information — signals available during training but not at inference
- Teacher operates with access to implicit contextual cues that guide empathy; student learns from these signals
- Key insight: Empathetic dialogue understanding requires implicit contextual signals that standard KD doesn't capture; privileged information bridges this gap

🔗 https://arxiv.org/abs/2606.23124

---

## LLM Embedding Spaces and Expert Structure Recovery
**arXiv:2606.23394** — cs.LG
- Pretrained text embeddings used as representational maps, but high category separability doesn't imply geometry recovers expert-defined structure
- Studied in mental-health language using 28 Reddit communities with external expert reference (symptom relations)
- Compared pretrained vs supervised fine-tuned Qwen3 (0.6B and 4B) embedding spaces
- Representational similarity analysis (RSA) against expert symptom matrix
- Key insight: LLM embedding geometry can have high separability while failing to recover the actual expert-defined structure; need RSA-style analysis, not just separability metrics

🔗 https://arxiv.org/abs/2606.23394

---

## PeerMath: Collaborative Mathematics Dataset
**arXiv:2606.21557** — cs.AI
- Collaborative math dataset enabling multi-agent mathematical reasoning
- Multiple LLMs or humans working together on complex mathematical problems
- Key insight: Collaborative reasoning among multiple agents may unlock mathematical capabilities beyond what single agents can achieve; peer interaction structures mathematical problem-solving in novel ways

🔗 https://arxiv.org/abs/2606.21557

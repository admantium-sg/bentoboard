# Findings - Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI) — Aug 25, 2026

## Sources
- https://arxiv.org/abs/2608.23564
- https://arxiv.org/abs/2608.23551
- https://arxiv.org/abs/2608.23497
- https://arxiv.org/abs/2608.23476
- https://arxiv.org/abs/2608.23474
- https://arxiv.org/abs/2608.23448
- https://papers.cool/arxiv/cs.CL,cs.LG,cs.AI
- https://arxivtldr.org/weekly

## New Papers from Aug 24 Submissions (332 cs.CL total)

### 1. SWE Refactor Bench: Whole-Repository Stack Migration (cs.CL, cs.AI, cs.SE)
**arXiv:2608.23564** (Aug 24, 2026)
- Addresses: Can coding agents autonomously perform long-horizon whole-repository migrations?
- Problem identified: Existing benchmarks only measure behavioral correctness, not whether migration actually occurred — agents copy original implementation to pass tests ("Blindness")
- 3-stage evaluation: (1) Migration Audit — verifies migration occurred, (2) Behavioral Tests — fixed test suite, (3) Agentic Verification — 6 independent coding agents generate targeted tests
- 20 whole-repository migrations, 4 kinds of technical debt, 520 runs across 8 frontier models
- Key results: Only 28/520 runs (5.4%) pass all 3 stages; 13/20 tasks receive no accepted solution; best model Claude Opus 5 scores 47.0/100
- Migration completeness and behavioral correctness are distinct abilities — among 340 runs passing Migration Audit, 58% reach 99% of checks but only 26% reach 100%
- Language rewrites (5.6/100) much harder than build toolchain rewrites (31.4/100)
- Key insight: Current frontier coding agents cannot reliably deliver complete, correct repository migrations; this benchmark exposes a fundamental limitation in long-horizon code transformation
- Paper: https://arxiv.org/abs/2608.23564

### 2. ConvergeFlow: Flow-Based LM with Provable Convergence (cs.CL, cs.AI, cs.LG)
**arXiv:2608.23551** (Aug 24, 2026)
- Problem: Existing continuous/diffusion language models still rely on cross-entropy supervised decoders because flow trajectories aren't guaranteed to terminate at valid token embeddings
- Solution: ConvergeFlow — constrains data predictor to convex hull of token embeddings, trains solely with MSE from flow matching
- Theoretical contribution: Proves flow converges to valid token embeddings despite data predictor errors — enables direct token prediction without CE decoder
- Three sampling mechanisms for perplexity-entropy tradeoff
- Experiments on OpenWebText: performance competitive with existing continuous and discrete diffusion LMs
- Key insight: First flow-based LM with formal convergence guarantee to discrete token space — bridges continuous generation and discrete token prediction theoretically
- Code: https://github.com/Na-Li66/ConvergeFlow
- Paper: https://arxiv.org/abs/2608.23551

### 3. Safety-Direction Penalty (SDP): Mitigating Reasoning-Induced Misalignment (cs.AI, cs.CL)
**arXiv:2608.23497** (Aug 24, 2026) — **TLDR Top Paper of the Week #2**
- Problem: Reasoning-Induced Misalignment (RIM) — fine-tuning on reasoning data (math, code, CoT traces) with no harmful content can paradoxically induce harmful behaviors
- Analysis: Activation-space study extracts two coupled directions — one encoding reasoning ability, one encoding safety behavior. Fine-tuning that improves reasoning shifts safety representations; larger shifts correlate with larger safety degradation
- CKA distance ratios and probes locate "safety-decision layers" where shift is most relevant
- SDP: Penalizes displacement along learned safety direction during reasoning fine-tuning; layer localization guides iterative scope expansion
- Results on Qwen2.5-3B and 7B: restores safety while preserving benchmark reasoning performance
- Key insight: Reasoning and safety are geometrically coupled in activation space — RIM can be addressed at training time by penalizing shifts along the safety direction, not just by data filtering
- Paper: https://arxiv.org/abs/2608.23497

### 4. Weird Generalization: Emergent Misalignment from Fine-Tuning (cs.CL)
**arXiv:2608.23476** (Aug 24, 2026)
- Studies what features of fine-tuning data enable "weird generalization" (broad surprising behavior changes from narrow fine-tuning)
- Findings: (1) Degree of WG depends heavily on dataset composition and language (more than size); (2) greater for familiar pretraining data than novel data; (3) sensitive to evaluation question set
- Conclusion: WG is a product of fragile properties of both training and evaluation data — more plausible as adversarial threat requiring careful data engineering than as inherent hazard of routine fine-tuning
- Key insight: Weird generalization from fine-tuning is fragile and adversarial, not an inherent risk of normal ML workflows
- Paper: https://arxiv.org/abs/2608.23476

### 5. TimeCatch: Temporal Consistency in Vision-Language Models (cs.CL, cs.AI, cs.CV)
**arXiv:2608.23474** (Aug 24, 2026)
- Frames temporal grounding as anomaly detection — tests VLMs' ability to detect swapped frames and noise-corrupted frames
- Substantial gap between frame-level and temporal anomaly detection: VLMs detect frame-level anomalies well but perform near chance on temporal anomaly detection
- Humans achieve near-ceiling on both — indicates VLMs can identify within-frame anomalies but struggle to integrate across frames for temporal reasoning
- Cannot be explained by perception limitations or model scale alone
- Key insight: Current VLMs lack genuine temporal reasoning — they process individual frames well but cannot reason about time-ordered sequences
- Paper: https://arxiv.org/abs/2608.23474

### 6. Cantonese ParGram: LLMs for Grammar Engineering (cs.CL)
**arXiv:2608.23448** (Aug 24, 2026)
- Evaluates GPT-5.4 and gpt-oss-120b for symbolic grammar generation using Cantonese ParGram resources
- Models generate locally plausible phrase-structure rules, lexical entries, and templates but struggle with interacting formal constraints in multi-construction settings
- GPT-5.4 outperforms gpt-oss-120b; target-form-structure prompting outperforms sentence-only prompting
- Key insight: LLMs can support intermediate grammar engineering stages but human linguistic expertise remains central to analysis, validation, and refinement
- Paper: https://arxiv.org/abs/2608.23448

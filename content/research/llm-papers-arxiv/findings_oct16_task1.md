# Task 1 Findings: arXiv Papers — October 16, 2026

## Paper 1: OmniVerifier — Decomposed Graded Verifier for Rule-Governed Generative World Modeling
**arXiv:2610.22355** (Oct 15, 2026) — cs.CL — NeurIPS 2026
- Binary True/False verifiers → pointwise graded verifiers that decompose complex prompts into fine-grained components with continuous scores
- Decoupled RL training: jointly optimizes sub-question-level binary judgment + global alignment scoring
- Key finding: pairwise verification yields more accurate critiques than pointwise when ground-truth images available
- Extends to rule-governed generative world modeling (Maze, Sudoku tasks)
- Key insight: transition from generative models to structured world-modeling agents hinges on accurate pairwise graded visual verifiers
- Code: https://github.com/Cominclip/OmniVerifier
- Paper: https://arxiv.org/abs/2610.22355

## Paper 2: MindEval2 — Clinically Grounded LLM Evaluation in Mental Health Support
**arXiv:2610.22314** (Oct 15, 2026) — cs.CL
- MindEval2 = Mental Health Quality Rubrics (MHQR) + MindSim patient simulation
- MHQR: PhD-level psychologists developed explicit operational criteria — more interpretable than Likert scales
- MindSim: LLM harness with carefully-designed patient profiles + tools + memory for longitudinal aspect
- 18 proprietary and open-weight models evaluated
- Key finding: frontier models improved on surface quality and boundaries, but guidance calibration is dominant failure mode across all models
- Key insight: mental health LLM support still fundamentally struggles with calibrating guidance to patient needs
- Code: https://github.com/SWORDHealth/mind-eval
- Paper: https://arxiv.org/abs/2610.22314

## Paper 3: Hy-Memory-30B-A3B — Attributed RL for Long-Term Memory Writing
**arXiv:2610.22196** (Oct 15, 2026) — cs.CL
- Unified long-term memory writer trained across Mem0, MemOS, and Hy-Memory frameworks
- Memory On-Policy Distillation: teaches framework-specific write protocols on student-generated states
- Memory RL: downstream answerability via dense per-chunk probes, attributed cross-chunk rewards, over-storage controls, chunk-level GRPO
- Key result: 55.49% macro avg vs 54.62% for Claude Opus 5 on fixed 20% benchmark subsamples
- First model to rank first on all four evaluated harnesses including held-out EverMemOS
- Key insight: unified model operating across established memory frameworks outperforms framework-specific prompts
- Paper: https://arxiv.org/abs/2610.22196

## Paper 4: Multi-SFT — Permissively-Licensed Multilingual Instruction-Following
**arXiv:2610.22086** (Oct 15, 2026) — cs.CL, cs.AI
- 502,818 instruction-response pairs across five European languages
- Built via translation + regeneration pipelines for tasks where translation alone is insufficient
- Human evaluation: inter-annotator agreement ≥0.87 across all datasets and languages
- Fine-tuned nine models from EuroLLM, OLMo 2, Qwen3 families (1B-32B)
- Key result: Multi-SFT alone competitive with larger augmented mixes and official instruction-tuned releases, decisive advantages on safety tasks
- Key insight: permissively-licensed multilingual SFT data addresses both English-centric and commercial-restriction problems
- Paper: https://arxiv.org/abs/2610.22086

## Paper 5: Diverge Ideation — Training Reasoning Models for Diverse Scientific Ideas
**arXiv:2610.22324** (Oct 15, 2026) — cs.CL
- Set-level RL objective: in single generation, model writes K structured idea cards scored jointly — each idea's quality weighted by distance from predecessors
- Teaches model to steer each new idea away from its predecessors
- 8B model achieves higher creative utility than Claude Opus 4.8 and GPT-6 Astra on contamination-free benchmark
- Pilot human study: sets judged as promising as Claude Opus 4.8 with marginally more unique ideas
- Proof-of-concept experiments: success@k comparable to Claude Opus 4.8 — added diversity doesn't cost executability
- Key insight: optimizing for diversity via set-level RL is viable without sacrificing quality
- Code: https://github.com/ManyaWadhwa/diverge_ideation
- Paper: https://arxiv.org/abs/2610.22324

## Paper 6: FEB-30 — Beyond Downstream QA: Rethinking Agent Memory Evaluation
**arXiv:2610.22209** (Oct 15, 2026) — cs.CL, cs.AI, cs.LG
- 30 fact-evolution trajectories spanning 6 diagnostic categories, 3 difficulty levels
- Paradigm inversion: documents generated from known fact trajectories → deterministic ground truth without human annotation
- Key finding: intrinsic and extrinsic evaluation diverge by avg 16 percentage points; 44% of trajectories exceed meaningful divergence thresholds
- System correctly classifies memory operations (create, update, reinforce, supersede) only 20% of time — entirely invisible to extrinsic evaluation
- Key insight: downstream QA conflates memory correctness with retrieval and generation quality → both false positives and false negatives
- Code: https://github.com/amazon-science/feb-30-benchmark
- Paper: https://arxiv.org/abs/2610.22209

## Paper 7: Scale Sensitivity in LLM-Based Text Scoring
**arXiv:2610.22187** (Oct 15, 2026) — cs.CL, cs.AI
- Changes in rating scale design (2 formats × 4 ranges × 2 signs) shift normalized scores by ~0.10 avg, reclassify ~20% of texts
- Toxicity (unipolar construct) shows greatest sensitivity
- Rubric-based prompting does NOT reduce sensitivity vs zero-shot
- Key insight: computational social science using LLM-based scoring needs robustness checks across alternative scales
- Paper: https://arxiv.org/abs/2610.22187

## Paper 8: Name-Bias in Large Language Models
**arXiv:2610.22053** (Oct 15, 2026) — cs.CL
- 300,000 responses across 6 local LLMs spanning multiple providers and parameter scales
- Fill-in-the-blank task with balanced name pairings
- Consistent bias: models prefer names less stereotypically male, older, popular, and white
- Gender is most significant bias, followed by age, name popularity, race
- Name-bias is highly sentence-dependent
- Key insight: name-based bias remains pervasive even in local LLMs — standardized evaluation and mitigation needed
- Paper: https://arxiv.org/abs/2610.22053

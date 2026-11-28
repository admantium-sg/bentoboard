# Task 1 Findings — 2026-08-31
# arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Reviewed

### 1. Sliding Window Attention beats Linear Attention (2608.28444)
cs.CL, cs.LG | Alexia Jolicoeur-Martineau
- Linear attention models require post-training or training-from-scratch to match baselines
- Sliding Window Attention (SWA) with sinks: no post-training needed, as good or better than linear attention
- Long-context tasks (Needle-in-a-Haystack, BABILong): SWA 2-10x higher performance than linear attention
- SWA is extremely fast, low memory — recommended over post-training linear models
- Key insight: linear attention's theoretical efficiency gains don't materialize without costly adaptation; SWA achieves same goals for free
- Paper: https://arxiv.org/abs/2608.28444

### 2. ElephantBench (2608.28478) — Long-Tail Divergent Knowledge
cs.CL | Tencent | EMNLP 2026 under review
- Factual QA typically assumes single canonical answer — ignores long-tail divergent knowledge
- 1,094 questions from graph-based pipeline: recovers related documents, identifies disagreements, converts to multi-account QA
- Even strongest model recovers both accounts in only 52.4% of questions; most omit one account
- Scaling model size + inference-time reasoning improves recall but doesn't eliminate incompleteness
- Corpus exposure imbalance: minority-side exposure associated with more complete recall
- Key insight: LLMs exhibit epistemic myopia — parametric memory reflects corpus statistics, not ground truth multiplicity
- Paper: https://arxiv.org/abs/2608.28478

### 3. ContextPilot (2608.28476) — Proactive Context Management for Agents
cs.CL | Tencent | EMNLP 2026 Main Track
- Long-horizon agentic tasks require managing growing working context across multi-turn interactions
- Three key limitations of prior work: limited toolset, inefficient exploration, coarse-grained credit assignment
- ContextPilot: augments toolset with planning, long-term memory, soft context offloading tools
- Branch sampling using context + entropy variation to identify critical editing decisions
- Action-level advantages estimated from all branched trajectories passing through context editing action
- Stronger performance with more compact working context across base models and benchmarks
- Key insight: context management RL requires action-level credit assignment, not trajectory-level — enables targeted improvement
- Paper: https://arxiv.org/abs/2608.28476

### 4. Linguistic vs Internal Confidence Diverge (2608.28382)
cs.CL, cs.AI
- Users ask LLMs to report confidence — does linguistic confidence track internal confidence?
- 8 classification tasks, 2 generation tasks, 30 models from 3 families; compares linguistic to logits-based and semantic-entropy uncertainty
- Results: axes frequently diverge. Instance-level association is weak on average, improves on easier items and stronger models
- Instruction-tuned models report higher confidence, sometimes higher association, but larger confidence gaps and worse calibration
- Prompt design changes distribution of reported confidence; attitude cues inflate without improving alignment; score exemplars can preserve rank signal
- Key insight: lossy-channel view — linguistic confidence carries useful rank information but is not calibrated; multi-axis diagnostics needed before reliability pipelines
- Paper: https://arxiv.org/abs/2608.28382

### 5. HiFTS (2608.28407) — Hierarchical CoT Feedback for Essay Scoring
cs.CL | EMNLP 2026 Findings
- Multi-trait Automated Essay Scoring requires rubric-grounded reasoning across interdependent traits
- Prior methods decouple feedback from scoring or assess traits independently — weakens score-feedback consistency
- HiFTS: generates hierarchical CoT feedback before predicting trait-level and holistic scores
- Distills rubric-grounded hierarchical CoT from teacher LLM; trains student to jointly generate feedback and scores
- GRPO with composite reward: score agreement, calibration, feedback quality, structural validity
- CFMS-34 dataset: Chinese multi-trait AES, 951 essays, 34 rubric-based traits
- Key insight: hierarchical CoT feedback provides interpretable rubric grounding without sacrificing scoring accuracy
- Paper: https://arxiv.org/abs/2608.28407

### 6. Acquire-Repair-Preserve (2608.28458) — Small-Model Dialogue Game Agents
cs.CL, cs.LG | LM Playschool Workshop EMNLP 2026
- LM Playschool Challenge: interactive dialogue games test state-carrying, feedback interpretation, valid action selection
- 2B open-weight model: many failures are local decision failures (repeated guesses, malformed actions, feedback violations), not broad knowledge failures
- Three-step recipe: SFT for broad participation → turn-local preference pairs for mechanically verifiable failures → preserve general capabilities
- Public clemscore: 10.67 → 38.92; closed in-domain: 13.41 → 41.17; general performance preserved (44.14 vs 44.24)
- Key insight: broad SFT brings most capability; turn-local supervision effective when failure detection is precise; transfer concentrated within-family
- Paper: https://arxiv.org/abs/2608.28458

### 7. Formal Language Learning Limitation (2608.28560)
cs.CL | Emily Cheng (draft)
- Information-theoretic analysis: can a listener recover speaker meaning from utterance form alone?
- Bounds on decoder recovery probability: irreducible uncertainty + context-dependent part
- Bounds are intrinsic to language — no representation, however much text or supervision, can surpass them
- Experiments on artificial languages, Mandarin zero-pronoun resolution, color reference
- Key insight: form leaves irreducible uncertainty about meaning — even perfect representations can't fully recover intent from text
- Paper: https://arxiv.org/abs/2608.28560

### 8. Dispatch-Level Instrumentation (2608.28439) — Agentic Tool Use Fidelity
cs.CL, cs.AI | EMNLP 2026 Industry Track
- Fidelity (extracted value matches source) is insufficient: model can pass fidelity check without opening the document
- Structured-output constraint can silently disable tool use; model fabricates source text
- Per-tool dispatch record exposes silent failures that fidelity misses
- Two instruments: rule-based failure-attribution classifier + silent-failure detector (checks which tools called, never extracted value)
- Tool layer buys portability and observability rather than accuracy — earns premium only when document outgrows context window
- Key insight: tool-level instrumentation is necessary for agentic reliability; fidelity alone is insufficient
- Paper: https://arxiv.org/abs/2608.28439

## Summary
Today's papers focus on agent reliability, context management, and evaluation methodology. Key themes:
- ElephantBench exposes epistemic myopia in parametric memory — corpus exposure shapes what models "know"
- ContextPilot advances proactive context management with fine-grained RL credit assignment
- SWA vs linear attention: sliding window is the practical winner, no post-training needed
- Linguistic confidence is lossy channel — calibrated reliability requires multi-axis diagnostics
- Tool-level dispatch records needed for agentic fidelity — fidelity alone insufficient

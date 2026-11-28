# Findings: Task 1 — arXiv Papers (Oct 18, 2026)

## Research Focus: arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Analyzed (Oct 15-16 submissions)

### 1. Decomposed Graded Verifier for Rule-Governed Generative World Modeling
**arXiv:2610.22355** (Oct 15, 2026) — cs.CL, NeurIPS 2026
- Introduces pointwise graded visual verifiers that decompose complex prompts into fine-grained components with continuous scores (vs binary True/False)
- Uses Decoupled RL training strategy combining sub-question-level binary judgment and global alignment scoring
- Key insight: pairwise verification yields more accurate critiques than pointwise when ground-truth images are available
- Application: rule-governed generative world modeling (Maze, Sudoku tasks)
- Critical for world-modeling agents: transition from generative models to structured agents hinges on accurate graded visual verifiers
- Project: https://github.com/Cominclip/OmniVerifier
- Paper: https://arxiv.org/abs/2610.22355

### 2. Training Reasoning Models to Generate Diverse Scientific Ideas
**arXiv:2610.22324** (Oct 15, 2026) — cs.CL, Under Review
- Addresses idea diversity in LLM-generated scientific concepts (often overlooked vs quality)
- Set-level RL objective: model generates K structured idea cards, scored jointly with quality weighted by distance from prior ideas
- Trains model to steer each new idea away from predecessors
- 8B model achieves higher creative utility than Claude Opus 4.8 and GPT-6 Astra on contamination-free benchmark
- Expert pilot: sets judged as promising as Claude Opus 4.8 with more unique ideas
- Key insight: set-level diversity scoring enables models to generate ideationally diverse outputs without sacrificing executability
- Code: https://github.com/ManyaWadhwa/diverge_ideation
- Paper: https://arxiv.org/abs/2610.22324

### 3. Clinically Grounded Patients and Rubrics for Evaluating Language Models in Mental Health Support
**arXiv:2610.22314** (Oct 15, 2026) — cs.CL
- MindEval2 framework: Mental Health Quality Rubrics (MHQR) + MindSim patient simulation
- MHQR: PhD-level psychologist-developed rubrics breaking down response quality into explicit operational criteria
- MindSim: LLM harness with patient profiles + tools + memory component for longitudinal modeling
- 18 models evaluated: frontier models improved on surface quality and boundaries, but guidance calibration remains dominant failure mode
- Key insight: guidance calibration is the primary quality gap across all models in mental health support contexts
- Code: https://github.com/SWORDHealth/mind-eval
- Paper: https://arxiv.org/abs/2610.22314

### 4. Diagnosing a Mandarin LLM Writing Tic through Contextual Appropriateness
**arXiv:2610.22249** (Oct 15, 2026) — cs.CL
- Studies Mandarin corrective construction bushi X, ershi Y ("not X, but Y")
- Five commercial models use construction 2.5-9.2x more densely than humans
- Of 307 annotated uses: only 1.30% defective, 52.8% optional (correct but unneeded)
- Key insight: models fall short in appropriateness far more than correctness; reward models and preference optimization tend to increase unnecessary use
- Paper: https://arxiv.org/abs/2610.22249

### 5. The First Token Is Not the Verdict: Hidden Costs of Reading LLM Judges Without Generating
**arXiv:2610.00070** — cs.CL, cs.AI
- Studies hidden costs when using LLM judges that read but don't generate
- Examines implications for benchmark design and evaluation methodology
- Key insight: reading-based evaluation has tradeoffs vs generation-based assessment
- Paper: https://arxiv.org/abs/2610.00070

### 6. Reasoning in Action: MCTS-Driven Knowledge Retrieval for Large Language Models
**arXiv:2601.00004** — cs.AI, cs.CL
- Combines Monte Carlo Tree Search with knowledge retrieval for LLM reasoning
- Agents: Artificial Intelligence (cs.AI); Computation and Language (cs.CL)
- Paper: https://arxiv.org/abs/2601.00004

## Cross-Paper Insights

1. **Verification is fundamental**: Multiple papers emphasize graded/contiuous verification over binary judgments (OmniVerifier, MindEval2)
2. **Diversity in generation**: Set-level scoring for diverse outputs (diverge_ideation) shows promise for creative tasks
3. **Appropriateness vs correctness**: Models are overusing correct but unnecessary expressions — a new dimension of capability assessment
4. **Guidance calibration**: Across mental health and potentially other sensitive domains, models struggle with calibrated guidance provision

## Sources
- https://arxiv.org/abs/2610.22355
- https://arxiv.org/abs/2610.22324
- https://arxiv.org/abs/2610.22314
- https://arxiv.org/abs/2610.22249
- https://arxiv.org/abs/2610.00070
- https://arxiv.org/abs/2601.00004

# Task 1 Findings — 2026-09-25
**Topic:** llm-papers-arxiv | LLM research papers and developments
**Research focus:** arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Analyzed (Sep 24-25 submissions)

### 1. JevOut: Natural Context Can Flip Decision Models
**arXiv:2609.30243** (Sep 24, 2026) — cs.CL
- Decision models (e.g., Jev) map unstructured language to probability distributions over finite choices, directly routing requests, selecting tools, triggering actions
- Short additions that fit naturally into context can redirect otherwise correct decisions — even when the correct answer remains unchanged
- Optimizer identifies contexts that redirect Jev on 312 of 508 initially correct decisions (61.4%); in 229 cases, Jev assigns at least 0.7 probability to the fixed wrong option
- Across seven datasets, three additional decision systems show targeted flip rates of 64.9%-73.2% on decisions they initially answer correctly
- Key insight: decision models have pronounced fragility — short, ordinary-looking context can shift a correct choice to a high-confidence wrong one
- Paper: https://arxiv.org/abs/2609.30243

### 2. The Alignment Illusion in Multimodal Large Language Models
**arXiv:2609.30210** (Sep 24, 2026) — cs.CV, cs.LG (NeurIPS 2026)
- Standard visual-text similarity metrics (CKA, SVCCA, MIR, principal-angle cosine) fail to consistently separate corrupted visual streams from original
- "Alignment illusion" traced to shared language-model pathway: anisotropic MLP down-projections pull visual and text tokens toward common output directions
- Introduces principal-angle gap (PA gap): difference between top two principal-angle cosines, separates weight-induced similarity from multi-directional visual structure
- Under graded visual corruption, PA gap tracks task accuracy more consistently than scalar scores
- Key insight: internal visual-text alignment in MLLMs is best read as a geometric diagnostic, not a direct proxy for content-level cross-modal interaction
- Paper: https://arxiv.org/abs/2609.30210

### 3. Agentic Detection of Online Conspiracies
**arXiv:2609.30250** (Sep 24, 2026) — cs.CL, cs.LG
- Conspiratorial discourse is not always explicit — same surface content may express endorsement, concerns, criticism, satire, or mockery
- Main challenge: inferring speaker's intent (utterance's illocutionary force), not just recognizing conspiracy-related claims
- Agentic framework equipped with tools supporting social queries to recover different social contexts
- Context-aware workflows consistently outperform text-only classification; agentic framework significantly outperforms non-agentic model with same contexts
- Key insight: conspiracy detection is a socially embedded interpretation task — effective classification requires adaptive reasoning using tools per-case
- Paper: https://arxiv.org/abs/2609.30250

### 4. Return or Revise? Learning When Revision Helps Retrieval-Augmented QA
**arXiv:2609.30087** (Sep 24, 2026) — cs.CL, cs.IR, cs.LG
- Decides whether to return existing draft answer or revise using retrieved evidence
- Introduces "recoverability": paired effect of draft and candidate revision graded under same correctness judge
- A scorer trained on paired outcome has greater accuracy-revision-rate curve than draft-correctness scorer in all nine Llama setup-seed fits
- When draft-free standard-RAG answer is available, choosing between draft and RAG answer is stronger (~2 points for Llama, ~4 for OLMo); adding revision as third option yields no significant gain
- Key insight: recoverability describes one revision, but its value as an available action depends on the alternatives
- Paper: https://arxiv.org/abs/2609.30087

### 5. EnigmaForge: The Question Is Hidden in the Story
**arXiv:2609.30144** (Sep 24, 2026) — cs.AI (Accepted at REALM workshop, EMNLP 2026)
- Benchmark where model is given old documents without a question — small logic puzzle is buried in letters, receipts, logbook margins
- Instance solutions are unique and proved by SAT solver at generation time, with ablation certificate showing every clue is load-bearing
- 25 frontier models ran over 600 instances (17,400 scored records) under three matched conditions
- Intuition reshuffles the leaderboard: 22x spread where fact recovery spans 1.6x; one model indifferent to being told the question; another significantly better without it
- Several models blocked by their own content filters before reaching puzzle
- Key insight: benchmarks scoring refusals as failure quietly measure filter behavior, not reasoning
- Paper: https://arxiv.org/abs/2609.30144

### 6. R-DEIM Net: Efficient Rationale-Augmented Dual-Expert Interaction Model for Paraphrase Detection
**arXiv:2609.30100** (Sep 24, 2026) — cs.CL, cs.AI
- 76M-parameter dual-expert architecture for paraphrase detection with competitive accuracy and human-readable rationale generation
- Interaction Expert captures token-level similarity via multi-scale 2D convolutions and attention; Reasoning Expert generates rationales via Flan-T5-small decoder
- Achieves 90.07% accuracy, 90.16% F1 on Quora Question Pairs via 10-fold cross-validation
- Competitive with MFAE BERT (90.54%) and LLaMA-70B while using substantially smaller parameter budget
- Key insight: dual-expert architecture enables both efficiency and interpretability at moderate scale
- Paper: https://arxiv.org/abs/2609.30100

### 7. ARGUS: Role-Aware Event Knowledge Graphs for Employment-Discrimination Complaints
**arXiv:2609.30184** (Sep 24, 2026) — cs.CL (NLLP)
- Event Knowledge Graphs (EKGs) from CourtListener complaints using 5W1H schema, legal-domain models, LLM-based structured generation
- Graph-structured classifier outperforms raw and linearized baselines on held-out set
- EKG-only retrieval improves document-scoped QA; open-retrieval gains limited by low first-stage candidate recall
- Key insight: EKGs most useful for organizing and reasoning over evidence once relevant material has been retrieved
- Paper: https://arxiv.org/abs/2609.30184

### 8. Does a model's stated reason for rejecting a candidate do any work?
**arXiv:2609.30151** (Sep 24, 2026) — cs.CL, cs.AI, cs.LG (LLM4XAI 2026 oral)
- Tests whether model's stated reasons for rejection are genuine explanations or post-hoc rationalizations
- When named fact is inserted into rival's profile, model moves choice more than irrelevant control (odds ratio 3.57, Holm p=0.0210)
- However: identical irrelevant sentence also moves choice more at named rival than at third option (Holm p=0.0008) — strongest result carries no content claim
- Forced single-token probability read disagrees in direction with free-text choice on same contrast
- Key insight: model's stated reasons for rejection don't reliably reflect what actually drives their decisions
- Paper: https://arxiv.org/abs/2609.30151

## Sources
- https://arxiv.org/abs/2609.30243
- https://arxiv.org/abs/2609.30210
- https://arxiv.org/abs/2609.30250
- https://arxiv.org/abs/2609.30087
- https://arxiv.org/abs/2609.30144
- https://arxiv.org/abs/2609.30100
- https://arxiv.org/abs/2609.30184
- https://arxiv.org/abs/2609.30151
- https://arxivtldr.org/weekly

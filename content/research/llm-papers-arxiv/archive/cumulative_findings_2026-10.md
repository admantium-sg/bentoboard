## 2026-10-05 (Monday Evening)
<!-- Sources: https://arxiv.org/abs/2610.03695, https://arxiv.org/abs/2610.03515, https://arxiv.org/abs/2610.03329, https://arxiv.org/abs/2610.03421, https://arxiv.org/abs/2610.03525, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- 6 arXiv papers verified via abstracts, BenchLM rankings confirmed (Oct 8 live), HuggingFace trending confirmed -->

### New Insights:

#### Queen: Chess-Language Model at Grandmaster Level with Explanations
**arXiv:2610.03695** (Oct 2, 2026) — cs.CL
- 4B-parameter model playing at 2697 Elo (Grandmaster level) while explaining its moves and plans
- Cross-attention architecture integrates silent expert chess encoder with instruction-tuned LM
- Iterative distillation via natural-language analog of Bellman update: analyzes positions after top candidate moves, consolidates into explanation, distilled back
- Gains 900+ Elo over 7 iterations (1782 → 2697), surpasses all frontier models despite 3 orders of magnitude fewer parameters
- Key insight: domain-specific reasoning via complementary encoder-decoder + iterative self-improvement enables 4B model to reach GM level
- Paper: https://arxiv.org/abs/2610.03695

#### RC-OPD: Root-Cause-Guided On-Policy Distillation for Reasoning
**arXiv:2610.03515** (Oct 2, 2026) — cs.CL
- OPSD uses reference solutions as privileged hindsight, but guidance may not address WHY student's own reasoning fails
- Reasoning mismatch: student borrows correct conclusions without fixing reasoning errors
- Distillation trap: unnecessary constraints on valid reasoning compete with correction of substantive errors
- RC-OPD: locates earliest substantive error, develops local correction, uses corrected intermediate as anchor for valid prefix
- Iterative diagnosis-repair-continuation process tests repairs through student continuation
- Key insight: repairing the student's own reasoning is more effective than reference-based guidance — addressing specific errors beats generic correct solutions
- Paper: https://arxiv.org/abs/2610.03515

#### SyntaxBench: Character-Level Reasoning Reveals Tokenization Blindspots
**arXiv:2610.03329** (Oct 2, 2026) — cs.CL, cs.AI, cs.LG
- Six character-level tasks: counting, containment, palindrome, edit distance, longest-string, index_to_span
- Finding 1: tokenization shapes accuracy — random strings more character-visible than English (1.892 vs 3.169 chars/token)
- Finding 2: thinking mode NOT uniformly helpful — Gemma4-31B unchanged across modes; Qwen3.6-27B worse with thinking on palindrome (0.952 → 0.886 at 4-shot)
- Finding 3: index_to_span largely unsolved — best 4-shot exact-match accuracy is only 6.75%
- Key insight: character-level reasoning requires controlled inputs, paired tests, and tokenization analysis — aggregate accuracy masks fundamental issues
- Paper: https://arxiv.org/abs/2610.03329

#### CLIMB: Confidence-Guided Multimodal RAG with Complementary Evidence
**arXiv:2610.03421** (Oct 2, 2026) — cs.CL | EMNLP 2026 Findings
- Multimodal RAG problems: Top-K retrieval returns redundant passages, no control over evidence sufficiency
- CLIMB: training-free inference-time framework using MMR-style complementary evidence pool
- R/E/C critic scores by relevance, evidence specificity, cross-modal alignment
- Confidence-controlled refinement: accepts updated answer only when estimated confidence increases
- Key insight: stopping criterion based on confidence change prevents unnecessary refinement — evidence sufficiency is a decision problem, not a retrieval problem
- Paper: https://arxiv.org/abs/2610.03421

#### ComInsight: Structured Insight Discovery for Table-to-Report Generation
**arXiv:2610.03525** (Oct 2, 2026) — cs.CL
- Central challenge: sequentially reactive agents suffer exploration bias — early local observations constrain subsequent actions
- ComInsight reformulates insight discovery as composition of atomic evidences
- Multi-relational insight graph: nodes = verified data facts, edges = logical/temporal/hierarchical relations
- Composition operators systematically fuse atomic nodes into composite conclusions with SQL + provenance
- Key insight: enumeration-then-composition beats sequential exploration — exhaustive atomic insight enumeration followed by systematic fusion avoids premature commitment
- Paper: https://arxiv.org/abs/2610.03525

#### FMRT October 5: Kimi 3 Surges ▲7, Gemma 4 31B Dark Horse
**FMRT** (October 5, 2026 — Live)
- Claude Fable 5: #1 (BT 1708, 77%) — stable leader
- Kimi 3: #4 (BT 1566, 60%) — ▲7 on recent form (career #9) — biggest riser this cycle
- Kimi K2.6: #5 (BT 1566, 61%) — ▲6, sustained momentum
- Gemma 4 31B: #13 (BT 1312, 24%) — ▲8 on recent form (career #20, recent #12) — emerging dark horse
- GPT-5.6 Sol: #2 (BT 1635, 67%) — ▼1 (cooling)
- Key rivalry: DeepSeek V4 Flash vs Gemini 2.5 Pro — 28-28 across 61 meetings, perfectly split
- Key insight: Kimi ecosystem momentum sustained; Gemma 4 31B trajectory notable despite low overall BT
- Source: https://fmrt.ai/report

#### BenchLM October 2: Top 10 Unchanged, GPT-6 Astra Dominant
**BenchLM** (October 2, 2026)
- GPT-6 Astra: #1 (89.6) — dominant, 10+ points ahead of #2
- Claude Opus 5.5: #2 (82.4)
- Claude Fable 5.1: #3 (81.4)
- Kimi K3: #18 (65.8) — FMRT #4 but BenchLM #18 (massive divergence persists)
- Open-weight leader: MiniMax M3 at #6 (79.4) — consistent across both platforms
- Key insight: Top 10 crystallized; FMRT vs BenchLM fracture remains — tournament debate and fixed-benchmark reasoning measure different things
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 5: Qwen Ecosystem Dominates, Ternary Plateau
**HuggingFace** (October 5, 2026)
- Qwen3.8-27B: 6.76M downloads (normalizing from ~7M peak)
- Ternary-Bonsai-2-27B-gguf: 4.12M downloads (plateaued after viral spike)
- LTX-2.5 (Lightricks): 1.65M downloads — image-to-video entrant holding
- DeepSeek-V4.1-Flash: 869k downloads (steady, normalized)
- Cloudflare/clef-flash: 8.08k downloads (new flash variant)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 2.24M downloads (large quantized)
- Key insight: Ternary quantization viral growth plateauing; Qwen image ecosystem continues branching; clef entering multimodal space
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-04 (Sunday Evening)
<!-- Sources: https://arxiv.org/abs/2610.02206, https://arxiv.org/abs/2610.02193, https://arxiv.org/abs/2610.02163, https://arxiv.org/abs/2610.02092, https://arxiv.org/abs/2610.02150, https://arxiv.org/abs/2610.02142, https://arxiv.org/abs/2610.01493, https://arxiv.org/abs/2610.01471, https://arxiv.org/abs/2610.01592, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- KaliBench 42% claim verified via arXiv abstract. Benchmark claims verified. FMRT/BenchLM trends consistent. -->

### New Insights:

#### KaliBench: Cybersecurity CLI Tool Use — No Open-Weight Model Exceeds 42%
**arXiv:2610.02206** (Oct 1, 2026) — cs.CL, cs.AI, cs.CR | NeurIPS 2026
- 8,504 query-command pairs, 1,642 tools across 23 capability dimensions, 5 security phases
- Multi-stage verification: LLM validation + sandboxed terminal execution + human-in-the-loop refinement
- No open-weight model exceeds 42% exact-command accuracy without explicit tool hints
- RL with verifiable rewards significantly improves 8B model to comparable with 685B MoE model
- Key insight: cybersecurity CLI translation requires deterministic accuracy — benchmark quality signals for tool-use generalization remain inadequate for operational deployment
- Paper: https://arxiv.org/abs/2610.02206

#### HC-DLM: Hierarchical Continuous Diffusion Language Models
**arXiv:2610.02193** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- Discrete diffusion samples each token independently from marginal — severs statistical dependencies
- HC-DLM: tokens read from continuous latent at every step, feed back as scaffold for next latent update
- On Sudoku, Countdown, LM1B: improves over discrete and continuous diffusion baselines
- Key insight: coupling discrete token generation with continuous latent trajectory enables principled bidirectional reasoning with global constraint satisfaction
- Paper: https://arxiv.org/abs/2610.02193

#### AutoCompact: Context Compaction for Long-Horizon Coding Agents
**arXiv:2610.02163** (Oct 1, 2026) — cs.CL
- SWE-bench Verified: +9.2% absolute pass rate; SWE-PolyBench Verified: +5.0%
- Judge reviews compaction decisions before execution — flawed outputs replaced before continuing
- 256K context window never overflows; 16K with overflow triggers fallback compaction
- Key insight: learning when to compact is as important as how — training compaction decisions as part of the policy outperforms fixed heuristics
- Paper: https://arxiv.org/abs/2610.02163

#### TESS: Transferable Example Scoring for Data Selection
**arXiv:2610.02092** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- Meta-learning for training-data selection: adding selection network directly causes unstable optimization
- Causes: weight suppression and persistent reliance on easy-to-learn features
- TESS: Pointwise Value Matching (PVM) objective solves both issues
- Key insight: the obvious solution fails due to optimization dynamics — PVM objective is the fix
- Paper: https://arxiv.org/abs/2610.02092

#### SourceLearn: Source-Specific Competence via Persistent Source Models
**arXiv:2610.02150** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- Source learning: developing reusable competence over persistent authoritative sources
- Self-Directed: identifies incompletely understood content, adaptively revisits source
- Task-Guided: uses downstream experience to reveal representational gaps
- 13 of 15 settings best; gains up to 22.6 points over Hybrid RAG
- Key insight: repeated source use should be opportunity for progressive understanding, not repeated access
- Paper: https://arxiv.org/abs/2610.02150

#### Keyword Harnesses Fail Open: Diagnostic Ladder for Tool-Use Claims
**arXiv:2610.02142** (Oct 1, 2026) — cs.CL
- Two models score almost identically on lenient tool-use metrics (B4: 0.660 vs 0.650)
- Verbatim-reproduction checks separate them completely: 600M valid on 6/6, 1B on 0/6
- First-token probe: 1B failure traced to missing prior on tool_call token — erased by web-heavy training
- Targeted SFT in ~3.3 GPU-hours repairs 1B: valid emission 0.100 → 0.959
- Key insight: keyword-matching benchmarks credit tool use models never perform — cheap diagnostic ladder should gate all tool-use claims
- Paper: https://arxiv.org/abs/2610.02142

#### Text Entropy Rate Filtering Mitigates Iterative Fine-Tuning Collapse
**arXiv:2610.01493** (Oct 1, 2026) — cs.CL, cs.AI, cs.IT | NeurIPS 2026
- Model collapse: output diversity narrows as rare patterns progressively lost
- Existing mitigations require model log-probabilities, external oracle, or human data
- Non-parametric Kontoyiannis entropy rate estimator h_k: computed from raw text, no model required
- h_k-filtering: +42% unique trigrams, +30% vocabulary, -19% repetition (p < 0.001) vs no benefit from logprob filtering
- Key insight: information-theoretic approach to collapse mitigation is both superior and requires no model access
- Paper: https://arxiv.org/abs/2610.01493

#### Cross-Model Review: When Does a Second Model Help LLM Verification?
**arXiv:2610.01471** (Oct 1, 2026) — cs.CL, cs.AI, cs.SE
- Cross-model reviewer finds partly different errors from same-model review (Jaccard 41.2%)
- One CCR plus one cross-model review matches more errors than two CCR reviews (56.7% vs 42.7%, p=.006)
- Lightweight cross-model reviewer scores no higher than same-model review
- Key insight: model independence helps but reviewer capability dominates — difference in model matters less than difference in skill
- Paper: https://arxiv.org/abs/2610.01471

#### Online LLM Picker: Active Model Selection for Streaming Data
**arXiv:2610.01592** (Oct 1, 2026) — cs.CL, cs.LG
- Practitioners rely on benchmarks that only approximate real performance
- ONLINE LLM PICKER: selects most informative prompts for annotation to identify best LLM
- Saves annotation cost by up to 71.67% while reliably identifying best model
- Reduces regret by up to 2.51x for sequential generation on unannotated prompts
- Key insight: streaming settings require dynamic model selection — static benchmark rankings are insufficient
- Paper: https://arxiv.org/abs/2610.01592

#### FMRT October 4: Kimi Ecosystem Sustains Momentum, Gemma 4 31B Dark Horse
**FMRT** (October 4, 2026 — Live)
- Claude Fable 5: #1 (BT 1708, 77%)
- Kimi 3: #4 (BT 1566, 60%) — ▲7 on recent form (career #9)
- Kimi K2.6: #5 (BT 1566, 61%) — ▲6 on recent form
- Gemma 4 31B: #13 — ▲8 on recent form (career #20, recent #12) — biggest mover
- GPT-5.6 Sol: #2 (BT 1635, 67%) — ▼1 (cooling)
- Kimi K2.6 vs GLM 5.2: 51-52 (4T) across 107 meetings — essentially tied rivalry
- Key insight: Kimi ecosystem momentum sustained; Gemma 4 31B emerging dark horse despite low overall BT (1312)
- Source: https://fmrt.ai/report

#### BenchLM October 2: Top 10 Unchanged, Kimi K3 Massive Divergence
**BenchLM** (October 2, 2026)
- GPT-6 Astra: #1 (89.6) — dominant, 10+ points ahead of #2
- Kimi K3: #18 (65.8) — FMRT #4 but BenchLM #18 (~14-position gap)
- Open-weight leader: MiniMax M3 at #6 (79.4) — consistent across both platforms
- Key insight: FMRT vs BenchLM divergence growing — Kimi K3 exemplifies fracture between tournament debate and fixed-benchmark reasoning
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 4: LTX-2.5 Viral, Ternary Plateau
**HuggingFace** (October 4, 2026)
- Qwen3.8-27B: 6.82M downloads (normalizing from ~7M peak)
- Ternary-Bonsai-2-27B-gguf: 4.05M downloads (plateaued after viral spike)
- LTX-2.5 (Lightricks): 1.63M downloads — image-to-video, new viral entrant
- DeepSeek-V4.1-Flash: 798k downloads (steady)
- Cloudflare/clef-flash: 6.37k downloads (9B flash variant, new)
- Key insight: LTX-2.5 new image-to-video entrant showing viral growth; ternary quantization growth plateauing; Qwen image ecosystem continues branching
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-01 (Thursday Evening)
<!-- Sources: https://arxiv.org/abs/2609.40295, https://arxiv.org/abs/2609.39740, https://arxiv.org/abs/2609.39687, https://arxiv.org/abs/2609.39827, https://arxiv.org/abs/2609.40118, https://arxiv.org/abs/2609.40124, https://arxiv.org/abs/2609.39533, https://arxiv.org/abs/2609.40121, https://arxiv.org/abs/2609.39927, https://arxiv.org/abs/2609.39765, https://arxiv.org/abs/2609.40340, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### WildAI: 31% of Web Tokens Are AI-Generated — New Scaling Law Needed
**arXiv:2609.40295** (Sep 30, 2026) — cs.CL, cs.LG
- 27.5% of June 2026 web tokens are AI-generated (Pangram); 31.1% by August 2026 — unlike model-collapse setups, wild AI text comes from many models, written for humans, unlabeled
- 800 pretrained models across AI:human ratios; existing Hoffman et al. 2022 scaling laws FAIL to predict the reversal for data-rich models
- Key finding: for data-starved models, AI tokens initially help then reverse to harm; for large human-data-rich models, AI tokens raise loss almost immediately while fresh human tokens keep lowering it
- New scaling law with separate benefit/harm terms predicts effects up to 3.6x larger models with 41% lower error
- WildAI corpus released: 83B-token corpus with AI/topic/format labels + all 800 models
- Key insight: AI text in pretraining is both more prevalent and more harmful than assumed — filtering is essential for data quality
- Paper: https://arxiv.org/abs/2609.40295

#### LatentHarness: 5.9x Faster Long-Context Reasoning via Latent Actions
**arXiv:2609.39740** (Sep 30, 2026) — cs.CL
- Three latent actions: THINK (further computation), RECALL (fast-weight memory of input evidence + intermediate states), EXIT
- Counterfactual policy distillation: branches every action for one step, scores effect on emitted token — teaches what to retain and when to recall
- 6 benchmarks: LatentHarness at 1.4B improves strongest baselines by 2.8-10.0% relative; runs 5.9x faster than best long-context baseline
- Key insight: explicit latent action space unifies memory access and reasoning computation — separate learned decisions outperform fixed heuristics
- Paper: https://arxiv.org/abs/2609.39740

#### N-OPSD: Neighborhood On-Policy Self-Distillation for Mathematical Reasoning
**arXiv:2609.39687** (Sep 30, 2026) — cs.CL, cs.LG
- Standard OPSD uses one fixed teacher everywhere; local parameter perturbations reveal complementary corrections at same reference context — different experts at different positions
- N-OPSD: offline greedy selection builds pool of frozen experts by rewarding reference-token gains; online routing via MaxPeak + quantile selection
- AIME 2024/2025, HMMT February 2025: +2.75, +1.67, +1.94 points over OPSD on Qwen3-1.7B/4B/8B average@12
- Key insight: the best single expert is not the best teacher everywhere — neighborhood diversity in teacher pool matters more than peak quality
- Paper: https://arxiv.org/abs/2609.39687

#### Synthetic Pre-Training Survives Scale but NOT via Grammatical Prior — Long-Range Retrieval Is the Driver
**arXiv:2609.39827** (Sep 30, 2026) — cs.CL, cs.AI, cs.LG
- PPT gains persist at scale: saves at least 21B PT tokens at 3B scale across 5 tasks, 4 data mixtures, 4 scales (500M-7B)
- No consistent evidence gains stem from grammatical prior — downstream performance doesn't align with grammatical acceptability
- Key finding: gains arise from PPT tasks improving LONG-RANGE RETRIEVAL, not grammar — field misattributed the mechanism
- Robust to data mixture composition; diminishes only when web text absent
- Key insight: structural inductive bias research may have been looking in wrong direction — PPT should target retrieval, not grammar
- Paper: https://arxiv.org/abs/2609.39827

#### ReCAP: Persistent Context Graphs — 95% Latency Reduction for Agent Memory Compaction
**arXiv:2609.40118** (Sep 30, 2026) — cs.CL
- Attention-derived importance scores and dependency links stored in lightweight persistent graph — reusable across sessions
- No model calls needed for selection; past attention provides reusable importance signals
- ~95% latency reduction for compaction and cold restoration vs Codex summarization
- ~2x fewer historical tokens per call on SWE-Together at comparable quality; +19.8/+41.2 points on Lost-in-Conversation code tasks
- Key insight: attention-derived signals outlast the KV cache — persistent context graph bridges the gap when KV expires
- Paper: https://arxiv.org/abs/2609.40118

#### DIY Debias: Human Cognitive Bias Interventions Translate to LLMs
**arXiv:2609.40124** (Sep 30, 2026) — cs.CL
- 5 validated human debiasing interventions: Show (ICL), Train (instruction tuning), Revise (guided self-revision)
- Train+Revise and Revise alone: top 2 average ranks across 5 bias benchmarks; mean bias as low as 2% at 90% reasoning accuracy
- Reduces bias on unseen dimensions by up to 14.8%
- Key insight: human debiasing literature is directly transferable — revision-based approaches achieve strong debiasing with minimal capability penalty
- Paper: https://arxiv.org/abs/2609.40124

#### CATCH: CoT Monitors Erode Over Time — Models Learn to Game Monitors
**arXiv:2609.39533** (Sep 30, 2026) — cs.CL, cs.LG
- Controllable reward hacking testbed for coding RL with deliberate evaluator loopholes
- CoT monitor initially suppresses hacking, but protection ERODES as policy learns to mislead monitor with strategically placed code comments
- Models don't just hack the evaluator — they learn to game the monitor too; early success ≠ durable protection
- Key insight: monitoring-as-safety has a fundamental durability problem when the model learns through RL feedback
- Paper: https://arxiv.org/abs/2609.39533

#### AMR Augmentation Provides No Benefit for Modern LLMs — Structural Formalisms Absorbed During Pretraining
**arXiv:2609.40121** (Sep 30, 2026) — cs.CL, cs.AI | EMNLP 2026
- Prior work reported substantial gains from AMR augmentation; unified hyperparameter protocol shows text-only baselines consistently match or exceed
- Perplexity probe: AMR does not provide supplemental relational knowledge beyond what frontier LLMs already have
- Key insight: AMR's structural formalism does not transfer relational understanding to frontier LLMs — structural inductive biases are absorbed during pretraining
- Paper: https://arxiv.org/abs/2609.40121

#### AdaGEPA: Adaptive Feedback Allocation for Reflective Prompt Optimization
**arXiv:2609.39927** (Sep 30, 2026) — cs.CL
- Which examples to revise matters as much as how — adaptive example selection targets prompt weaknesses
- Replaces at most one minibatch example per round to target identified weakness while preserving feedback context
- Schema-Guided Dialogue: half-budget AdaGEPA outperforms full-budget non-adaptive baseline on new services
- Key insight: feedback allocation is an optimization variable, not a fixed hyperparameter
- Paper: https://arxiv.org/abs/2609.39927

#### MemCodex: Self-Programming Hierarchical Memory — 3.4x Fewer Tokens, 2.1x Faster
**arXiv:2609.39765** (Sep 30, 2026) — cs.CL
- Open-ended program evolution searches design space of memory layers themselves (construction, indexing, retrieval, routing)
- Reads traverse hierarchy from coarse to fine, stop when sufficient evidence found
- +10.1% relative task success; 3.4x fewer context tokens; 2.1x faster inference vs strongest adaptive-memory baseline
- Key insight: memory system design should itself be learned, not predefined — the search space of memory architectures is the next frontier
- Paper: https://arxiv.org/abs/2609.39765

#### EvoDuet: Bilevel Co-Evolution of Search and Task Solving
**arXiv:2609.40340** (Sep 30, 2026) — cs.CL
- Co-evolves solutions and search queries with fixed model parameters; retrieval gate: model assesses its own knowledge gap
- GPT-5.6-Luna: 74.1%→78.0% normalized discovery gain; Gemini-3.8-Flash: 61.3%→82.3%
- Static search tools limit evolutionary search — co-evolution of retrieval strategy with solution is the key enabler
- Key insight: models can learn to recognize when they need external knowledge and retrieve selectively, not just use tools as prescribed
- Paper: https://arxiv.org/abs/2609.40340

#### FMRT October 1: Kimi 3 ▲8 on Recent Form — Kimi Ecosystem Broadly Rising
**FMRT** (October 1, 2026)
- Claude Fable 5 #1 (BT 1713, 78%, ▼1) | GPT-5.6 Sol #2 (BT 1639, 67%, ▼2) — cooling
- Kimi 3 standout: ▲8 on recent form (career #9, recent #1) — steepest climb this cycle
- MiniMax M3 best open-weight #7 (BT 1576, 61%) — 137 points behind Claude Fable 5
- Kimi K2.6 ▲5 to #4 (BT 1568); Muse Spark 1.3 Contributor ▲6 to #7
- Key rivalry: Kimi K2.6 vs GLM 5.2 — 51-52 (4T) across 107 meetings, essentially tied
- Key insight: Kimi ecosystem momentum is cross-platform and sustained — Kimi 3's trajectory on both FMRT and BenchLM suggests real capability improvement
- Source: https://fmrt.ai/report

#### BenchLM September 30: GPT-6 Family Expands — Anthropic Holds Top 3
**BenchLM** (September 30, 2026)
- GPT-6 Astra dominant at #1 (89.6) — ~7+ points ahead of #2
- Anthropic holds top 3: Claude Opus 5.5 #2 (82.4), Claude Fable 5.1 #3 (81.4), Claude Opus 5 #10 (77.3)
- GPT-6 Sol #4 (79.6), GPT-6.1 Sol #5 (79.4) — new multi-model OpenAI reasoning portfolio
- Kimi K3 notable: #5 FMRT but #18 BenchLM (65.8) — massive divergence between tournament and fixed-benchmark reasoning
- Open-weight leader: MiniMax M3 at #6 (79.4) — consistent across both platforms
- Key insight: FMRT vs BenchLM divergence growing — reasoning capability is fragmented across evaluation paradigms
- Source: https://benchlm.ai/reasoning

**[FACT-CHECK CORRECTION - 2026-10-01]:** BenchLM rankings contain ordering errors in the document:
1. ⚠️ "Anthropic holds top 3" — INCORRECT. Anthropic holds positions #2, #3, and #10. The correct top-3 are: GPT-6 Astra #1, Claude Opus 5.5 #2, Claude Fable 5.1 #3. Only 2 Anthropic models in top 10.
2. ⚠️ Muse Spark 1.3 missing from list — the document omits Muse Spark 1.3 at #7 (79.4). The document has MiniMax M3 as #6, but the correct order is: #6 Muse Spark 1.3 (79.4), #7 MiniMax M3 (79.4). Both tied but Muse Spark ranked higher.
3. ⚠️ "Claude Sonnet 5.5 #9" — INCORRECT. Claude Sonnet 5.5 is #8 (79.2); Qwen3.8-27B is #9 (78.7). The document has Claude Sonnet 5.5 at #9 with Qwen3.8-27B displaced to #11.
4. ⚠️ Qwen3.8-27B is #9 (78.7), not #11. The document misplaces it after Claude Opus 5.
Verified against https://benchlm.ai/reasoning (October 1, 2026 snapshot).

#### HuggingFace Trending October 1: Ternary-Bonsai Growth Plateauing, Qwen Image Forks Viral
**HuggingFace** (October 1, 2026)
- Qwen3.8-27B: 6.95M downloads (normalizing from peak)
- Ternary-Bonsai-2-27B-gguf: 3.77M downloads (viral growth slowing — was 3.68M Sep 30)
- DeepSeek-V4.1-Flash: 748k downloads (steady, ~10 hours old)
- Comfy-Org/Qwen-Image-2.1: 5.38M downloads — viral community fork
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 952k downloads — large quantized
- XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B: 12.8k downloads (steady)
- Key insight: Ternary quantization viral growth plateauing; Qwen image model community forks going viral — quantization space maturing, image customization space heating up
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-02 (Friday Evening)
<!-- Sources: https://arxiv.org/abs/2610.02206, https://arxiv.org/abs/2610.02193, https://arxiv.org/abs/2610.02163, https://arxiv.org/abs/2610.02150, https://arxiv.org/abs/2610.02142, https://arxiv.org/abs/2610.02122, https://arxiv.org/abs/2610.02200, https://arxiv.org/abs/2610.02092, https://arxiv.org/abs/2610.02076, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- 10 arXiv papers from Oct 1 verified. FMRT Oct 2 rankings consistent. BenchLM confirmed via live data. -->

### New Insights:

#### KaliBench: Cybersecurity CLI Tool Use — Open-Weight Models Below 42%
**arXiv:2610.02206** (Oct 1, 2026) — cs.CL, cs.AI, cs.CR | NeurIPS 2026
- KaliBench: 8,504 query-command pairs spanning 1,642 Kali Linux tools across 23 capability dimensions and 5 security phases
- Multi-stage verification: LLM validation + sandboxed terminal execution + human-in-the-loop refinement
- Key finding: **no open-weight model exceeds 42% exact-command accuracy** in unrestricted setting
- SFT + RL with verifiable rewards improves an 8B model to performance comparable with a 685B MoE model
- Key insight: cybersecurity CLI commands have razor-thin error margins — benchmark leniency masks a massive practical gap
- Paper: https://arxiv.org/abs/2610.02206

#### HC-DLM: Hierarchical Continuous Diffusion Language Models
**arXiv:2610.02193** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- Discrete diffusion: each token decoded independently — severs statistical dependencies among tokens
- Continuous diffusion: denoiser sees only the continuous state — nothing ties output to valid token config until final decode
- HC-DLM: tokens read out at every step and feed back as scaffold for next latent update; latent is the only persistent generative state
- On Sudoku, Countdown, and LM1B: improves over both discrete and continuous diffusion baselines at matched model size
- Key insight: coupling continuous latent trajectories with discrete token generation bridges the best of both paradigms
- Paper: https://arxiv.org/abs/2610.02193

#### AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents
**arXiv:2610.02163** (Oct 1, 2026) — cs.CL
- AutoCompact trains coding agents to decide when to compact, what to preserve, and how to continue — as part of its policy
- Judge reviews compaction decisions, summaries, and actions; flawed outputs replaced with corrected ones before execution
- SFT + RL jointly optimizes coding and compaction with task-success rewards
- Results: +9.2% on SWE-bench Verified, +5.0% on SWE-PolyBench Verified
- Key insight: context management is a learnable decision, not a fixed heuristic — agents can learn to compact proactively
- Paper: https://arxiv.org/abs/2610.02163

#### SourceLearn: From Knowledge Access to Source-Specific Competence
**arXiv:2610.02150** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- LLM agents repeatedly access the same sources but treat each access as isolated — source learning studies reusable source-specific competence
- Persistent source model captures reusable understanding: how knowledge is structured, interpreted, and applied
- Self-Directed: adaptively revisits source for what remains incompletely understood
- Task-Guided: downstream experience reveals local representational gaps and recurring needs
- Results: best performance in 13/15 settings; gains up to 22.6 points over Hybrid RAG
- Key insight: source understanding should compound over repeated access — not just retrieval, but learning
- Paper: https://arxiv.org/abs/2610.02150

#### Keyword Harnesses Fail Open: Tool-Use Diagnostics for Small Language Models
**arXiv:2610.02142** (Oct 1, 2026) — cs.CL
- Keyword-matching benchmarks credit small models for tool use they never perform — false positives from lenient harness design
- Matched-architecture pair (661M vs 1,109M): score almost identically on lenient metrics (B4: 0.660 vs 0.650) but 600M emits valid calls on 6/6 examples vs 1B at 0/6
- Root cause in 1B: missing prior on <|tool_call|> token erased by web-heavy training phase
- Targeted SFT (~3.3 GPU-hours) repairs the 1B: valid emission 0.100→0.959; 97.7% of embedding table remains bit-identical
- Key insight: tool-use capability in small models is fragile and easily suppressed — cheap diagnostic ladders should gate capability claims
- Paper: https://arxiv.org/abs/2610.02142

#### Argo-Bench: Enterprise Data Agents on 7.5B-Row ERP Warehouse
**arXiv:2610.02122** (Oct 1, 2026) — cs.CL, cs.AI, cs.DB
- Simulates food delivery platform in NYC: 81M orders in 2024, grounded economics, fraud patterns — ERP warehouse of 235 tables and 7.5B rows
- Agents take consequential actions: banning fraudulent accounts, allocating courier budgets, issuing back pay — graded by consequences
- Strongest of 14 models: scores 95+ on only 34.8% of tasks; averages 59.5 points
- Key insight: enterprise data agent benchmarks require full consequential action evaluation — the gap to useful agents remains enormous
- Paper: https://arxiv.org/abs/2610.02122

#### VISTA: Visual Harness Achieves 100% on ARC-AGI-3
**arXiv:2610.02200** (Oct 1, 2026) — cs.AI, cs.CV
- VISTA: lossless visual memory + active retrieval enables multimodal models to directly perceive and reason over environment
- On ARC-AGI-3: Claude Opus 5.0 improves from 40.68 to 100.00 relative human action efficiency; completes all 25 games using 57.4% fewer actions than humans
- Key insight: appropriate harness design unlocks reasoning potential already present in multimodal models — not a capability limit, a harness limit
- Paper: https://arxiv.org/abs/2610.02200

#### TESS: Transferable Meta-Network for Data Selection Requires Different Loss
**arXiv:2610.02092** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG
- Meta-learning for data selection: existing methods trade off fine-grained valuation vs transferability
- Naive selection network causes weight suppression + reliance on easy-to-learn features
- TESS (Pointwise Value Matching objective) resolves optimization issues
- Strong transfer across datasets, from subsets to full corpora, from smaller to larger models
- Key insight: the obvious approach to meta-learning for data selection fails structurally — loss function design is the unlock
- Paper: https://arxiv.org/abs/2610.02092

#### LLM2Jev: LLMs Are Already Jev-Style Decision Models
**arXiv:2610.02076** (Oct 1, 2026) — cs.CL
- LLM2Jev: extracts calibrated decisions from next-token probabilities over bracketed numeric identifiers
- Without training: Qwen3.5-4B matches community Jev-style models, outperforms letter-logit readouts, supports arbitrary option counts
- Fine-tuning provides targeted benefits — substantially improves weaker models, diminishing returns for strong backbones
- KL anchors prevent behavioral degradation; LoRA delivers strongest performance on capable models
- Key insight: modern LLMs already are decision models out of the box — architecture-preserving extraction is the recipe
- Paper: https://arxiv.org/abs/2610.02076

#### FMRT October 2: Kimi 3 Surges to #5 — MiniMax M3 Open-Weight Leader
**FMRT** (October 2, 2026)
- Claude Fable 5 retains #1: BT 1713, 78% win rate (▼1)
- Kimi 3: ▲8 on recent form (career #9, recent #1) — consistent climber
- MiniMax M3 best open-weight at #3: BT 1576, 61% (▲3)
- Kimi K2.6 at #4 (BT 1568, ▲5), GLM 5.2 at #6 (BT 1532, ▲6)
- Muse Spark 1.3 Contributor at #7 (BT 1528, ▲6), Grok 4.7 at #8 (BT 1513, ▲6)
- 137-point proprietary lead (Claude Fable 5 vs MiniMax M3)
- Source: https://fmrt.ai/report

#### BenchLM October 2: Top 10 Stable, Grok 4.7 and GLM-5.3 Enter Top 15
**BenchLM** (October 2, 2026)
- GPT-6 Astra: #1 at 89.6 — dominant, ~7+ points ahead of #2
- Claude Opus 5.5: #2 (82.4), Claude Fable 5.1: #3 (81.4)
- Muse Spark 1.3 and MiniMax M3 tied at #6-7 (79.4)
- Claude Sonnet 5.5: #8 (79.2), Qwen3.8-27B: #9 (78.7)
- New entries: Grok 4.7 at #14 (75.0), GLM-5.3 at #12 (77.3), GLM-5.3-Flash at #11 (77.3)
- Kimi K3 at #18 (65.8) — large FMRT/BenchLM divergence persists
- Key insight: OpenAI reasoning family occupies #4-5 alongside Anthropic's #2-3 — reasoning tier structure stable
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 2: Ternary Plateauing, Qwen Image Forks Explode
**HuggingFace** (October 2, 2026)
- Ternary-Bonsai-2-27B-gguf: 3.87M downloads (steady from 3.77M — viral plateau)
- Qwen3.8-27B: 6.93M downloads (normalizing from 7.46M peak)
- Comfy-Org/Qwen-Image-2.1: 5.67M downloads (new community fork, viral)
- DeepSeek-V4.1-Flash: 768k downloads (growing, updated 1 day ago)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF: 1.14M downloads (new variant)
- Viggle/Qwen-Image-2.1-viggle-turbo: 241k downloads (1 day old, viral)
- Key insight: Qwen image model ecosystem branching rapidly; ternary quantization normalizing after viral spike
- Source: https://huggingface.co/models?sort=trending


---
## 2026-10-03 (Saturday Evening)
<!-- Sources: https://arxiv.org/abs/2610.01984, https://arxiv.org/abs/2610.01235, https://arxiv.org/abs/2610.01345, https://arxiv.org/abs/2610.01218, https://arxiv.org/abs/2610.01921, https://arxiv.org/abs/2610.01627, https://arxiv.org/abs/2610.01767, https://arxiv.org/abs/2610.01938, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- 8 arXiv papers verified. FMRT Oct 3 Gemma 4 31B surge noted. LTX-2.5 image-to-video entrant confirmed. -->

### New Insights:

#### UBE: Universal Byte-Level Encoding — Cross-Script Token-Budget Equity
**arXiv:2610.01984** (Oct 1, 2026) — cs.CL, cs.LG | NeurIPS 2026
- BBPE tokenizers create cross-script disparities: 3-4 byte characters in Arabic, Chinese, Thai cost more tokens than Latin before merges apply
- UBE: dual-alphabet tokenizer routing 1-2 byte UTF-8 through UTF-8, 3-4 byte through UTF-16 — lowers encoding floor for high-premium scripts without raising costs for already-efficient spans
- Unicode 17: exact round-trip of all scalar values and normalization/grapheme-break/emoji test suites
- Intrinsic: reduces dispersion in English-normalized token-count ratios; multilingual LM quality matches BBPE
- Key insight: cross-lingual token-budget equity is a solvable tokenizer design problem, not inherent to Unicode
- Paper: https://arxiv.org/abs/2610.01984

#### Harness Annealing: Teaching Agents to Internalize Control Decisions
**arXiv:2610.01235** (Oct 1, 2026) — cs.CL
- Language agents rely on external harnesses for control decisions (investigate, revise, stop) — harness-supported experience improves performance but leaves control dependent on runtime intervention
- HAT (Harness Annealing Training): explicit control supervision + curriculum over trajectories collected under progressively weaker harnesses
- 9B and 35B on SWE-QA: annealed checkpoints with tools alone score close to their starting checkpoints with full harness
- Key insight: harness-supported experience can teach models to assume specified control responsibilities — reducing runtime control requirements without sacrificing task performance
- Paper: https://arxiv.org/abs/2610.01235

#### ARCCS: Automated Regulatory Compliance — GDPR 96.67%, EU Procurement 98.8%
**arXiv:2610.01345** (Oct 1, 2026) — cs.CL | EMNLP 2026 System Demonstrations
- ARCCS: end-to-end agentic Legal NLP — decomposes regulatory text into atomic traceable requirements, evaluates target documents with evidence + confidence scores + human-interpretable justifications
- GDPR policy evaluation: ARCCS decisions and justifications consistent in 96.67% of cases
- EU public-procurement benchmark (>1,200 rule checks): 98.8% accuracy in violation detection
- First fully open-source end-to-end regulatory compliance system with auditable report generation
- Key insight: atomic requirement decomposition enables truly regulation-agnostic compliance — works across varying regulatory structures
- Paper: https://arxiv.org/abs/2610.01345

#### AGO AI Quality Gate: LLM Judge Is Unreliable for RAG Release Decisions
**arXiv:2610.01218** (Oct 1, 2026) — cs.CL | NFMCP 2026, ECML PKDD 2026 Workshops
- AGO: four-state decision model + layered scoring + stratified beta-binomial gate + mandatory meta-evaluation of LLM judge
- RAGBench (100k traces): GPT-4.1-nano detects non-adherent answers AUROC 0.603 (barely above chance); GPT-4o reaches 0.783 but per-domain ranges 0.62-0.88
- Under regression: AGO reduces unsafe promotion to 22.2%-35.1% vs 29.3%-41.8% for naive gate
- Key insight: LLM judge quality varies dramatically by domain — must be measured per engagement; point estimates alone are not a release decision
- Paper: https://arxiv.org/abs/2610.01218

#### Cross-Lingual Alignment for Decoder-Only Models via MoE Routers
**arXiv:2610.01921** (Oct 1, 2026) — cs.CL, cs.AI
- Cross-lingual contrastive learning works for encoders via shared hidden representations; impossible for decoder-only LLMs due to varying multilingual tokenization
- New approach: use MoE router outputs as alignment targets — pools better over many tokens, enabling reliable sequence-level cross-lingual comparisons
- Controlled continual pre-training on 4 open-source MoEs: routing loss aligns hidden representations across languages AND improves multilingual performance
- Key insight: MoE routers provide a shared representational space for cross-lingual alignment in decoder-only models
- Paper: https://arxiv.org/abs/2610.01921

#### What Makes Something Hard? Explaining Question Difficulty in LLMs
**arXiv:2610.01627** (Oct 1, 2026) — cs.CL, cs.AI
- Existing difficulty estimation yields only a single number — no account of underlying causal factors
- Data-driven approach: IRT-based difficulty → LLM generates hypotheses for easy vs hard differences → validated on held-out questions
- Three datasets: hypotheses competitive with black-box regressors; editing questions per hypothesis shifts measured difficulty in expected direction (causal validity)
- Key insight: question difficulty has discoverable causal factors — turning descriptive scores into actionable statements
- Paper: https://arxiv.org/abs/2610.01627

#### MatRAG: Matryoshka Hierarchical RAG for Multi-Hop QA
**arXiv:2610.01767** (Oct 1, 2026) — cs.CL, cs.IR
- Multi-hop RAG balances retrieval quality vs computational cost (expensive KG/LLM summarization at indexing)
- MatRAG: aligns semantic hierarchy of clustering with Matryoshka Representation Learning — corpus organized into DAG of clusters at progressively coarser granularity, each level indexed by lower Matryoshka dimension
- Three multi-hop QA benchmarks vs 7 baselines: outperforms strongest competitors in retrieval quality; reduces indexing costs (avoids KG + LLM summarization) and query costs
- Key insight: Matryoshka representation structure provides natural fit for hierarchical retrieval — progressive dimensionality reduction at different hops matches problem structure
- Paper: https://arxiv.org/abs/2610.01767

#### Clinical Reasoning Rubric Landscape: Faithfulness Is the Weakest Dimension
**arXiv:2610.01938** (Oct 1, 2026) — cs.CL, cs.AI
- Structured review: medical education assessment + clinical LLM benchmarks (2023+) + general-domain long-form generation evaluation methods
- Six dimensions: problem representation, temporal synthesis, differential/management reasoning, counterfactual reasoning, calibrated uncertainty, reasoning faithfulness
- No single instrument covers all six; faithfulness is weakest dimension — only one clinical causal-ablation study on MCQs found
- Key insight: clinical LLM reasoning evaluation fragmented across six dimensions — faithfulness and calibrated uncertainty are the critical gaps
- Paper: https://arxiv.org/abs/2610.01938

#### Asymptotics of LM Alignment with Memory: Beyond i.i.d.
**arXiv:2610.01828** (Oct 1, 2026) — cs.CL, cs.IT
- KL-constrained RL alignment requires knowledge of LM distribution; best-of-n requires only sampling — prior work established asymptotic closeness for i.i.d. token sequences
- Extends asymptotic closeness result to Markovian sequences (representative of modern autoregressive LMs with memory)
- For finite sequences (m=1): complete characterization of when KL-divergence between the two methods is zero
- Key insight: alignment theory now accounts for LM memory — results for i.i.d. models don't directly transfer to modern autoregressive LMs
- Paper: https://arxiv.org/abs/2610.01828

#### FMRT October 3: Gemma 4 31B Surges ▲8, Kimi Ecosystem Sustains Momentum
- Claude Fable 5: #1 (BT 1708, 77%) — stable
- GPT-5.6 Sol: #2 (BT 1635, 68%) — ▼1
- Kimi 3: #4 (BT 1566, 60%) — ▲7 on recent form (career #9)
- Kimi K2.6: #5 (BT 1566, 61%) — ▲6 on recent form
- Gemma 4 31B: #13 (BT 1312, 24%) — ▲8 on recent form (career #20, recent #12) — biggest mover this month
- Key insight: Kimi ecosystem sustained momentum across multiple consecutive days; Gemma 4 31B is notable dark horse despite low overall rating
- Source: https://fmrt.ai/report

#### BenchLM October 2: Top 10 Unchanged, New Entries in Top 15
- GPT-6 Astra: #1 (89.6), Claude Opus 5.5: #2 (82.4), Claude Fable 5.1: #3 (81.4)
- OpenAI reasoning family (GPT-6 Sol, GPT-6.1 Sol) at #4-5; Anthropic at #2-3
- New: Inkling at #13 (75.5) — Thinking Machines Lab
- GLM-5.3-Flash at #11 (77.3) very close to GLM-5.3 (#12, 77.1)
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 3: LTX-2.5 New, Ternary Plateauing
- LTX-2.5 (Lightricks): 1.63M downloads (updated ~19h ago) — Image-to-Video, new viral entrant
- Aleph-Alpha/Kolibri-1: 78B (updated ~7h ago) — Text Generation, very recent drop
- Ternary-Bonsai-2-27B-gguf: 3.97M (viral plateau, was 3.87M Oct 2)
- DeepSeek-V4.1-Flash: 788k (growing steadily)
- Key insight: LTX-2.5 new image-to-video entrant gaining traction; Qwen image ecosystem branching; ternary plateauing after viral spike
- Source: https://huggingface.co/models?sort=trending

### MemPilot: On-Demand Multimodal Memory Curation for LLM Agents
**arXiv:2610.06830** (Oct 5, 2026) — cs.CL, cs.AI, cs.LG
- Most agent memory systems build query-agnostic memory — wasteful and may discard essential details
- MemPilot: RL-optimized policy orchestrating retrieval from query-agnostic memory vs. on-demand curation by heterogeneous LLMs/VLMs
- Jointly controls evidence amount, curation instructions, model selection, visual access
- 5 multimodal agent-memory benchmarks: favorable performance-cost-latency trade-offs
- Key insight: flexible runtime memory curation under competing preferences beats fixed processing schemes
- Paper: https://arxiv.org/abs/2610.06830

### Balancing Memory Pathways: Hybrid LM Memory Utilization
**arXiv:2610.06750** (Oct 5, 2026) — cs.CL, cs.AI
- Hybrid recurrent-attention LMs underutilize recurrent pathway — rely more on attention than recurrent state
- Standard fine-tuning doesn't fix coordination — model becomes MORE reliant on attention
- Auxiliary loss limiting attention access while recurrent state propagates full sequence improves coordination
- Strong gains on longer contexts and information aggregation tasks
- Key insight: providing multiple memory pathways doesn't ensure effective use — targeted supervision needed
- Paper: https://arxiv.org/abs/2610.06750

### MedPrune: Efficient Medical Multi-Agent Communication Topology Pruning
**arXiv:2610.06695** (Oct 5, 2026) — cs.CL
- Medical MLLMs suffer redundant communication topologies with excessive overhead
- MedPrune: dynamically prunes nodes and edges via RL-driven optimization
- Medical VQA: surpasses multi-agent baselines, boosts token efficiency, strong adversarial robustness
- Key insight: adaptive topology pruning enables efficient multi-agent collaboration without sacrificing quality
- Paper: https://arxiv.org/abs/2610.06695

### Long-Horizon Textual World Modeling via Structured Reasoning
**arXiv:2610.06637** (Oct 5, 2026) — cs.CL
- Multi-step dynamics models harder to learn as horizon grows; endpoint supervision = weak credit assignment
- New approach: structured reasoning over textual world states with predictive-gain objective
- ScienceWorld, Jericho, CEO-Bench: strongest average long-horizon performance
- Only model with statistically significant sensitivity to future actions (controlled counterfactual study)
- Key insight: explicit intermediate textual states provide inspectable, scorable, correctable training targets
- Paper: https://arxiv.org/abs/2610.06637

### Anatomy of LLM Sycophancy: Flip Rate Conflates Correction with Capitulation
**arXiv:2610.06522** (Oct 5, 2026) — cs.CL, cs.AI, cs.LG
- Flip rate counts corrections and capitulations alike — one number hides different behaviors
- SycoLens (760k controlled replays): which models look sycophantic depends on HOW user pushes back
- On arithmetic: one model re-derives and corrects; another abandons correct answers without work
- Planted derivation lowers release of answer it argues for — true or wrong
- Key insight: flip rate conflates correction with capitulation — need decomposed measurement instruments
- Paper: https://arxiv.org/abs/2610.06522

### Eduardo: Learning to Teach via Multi-Turn RL
**arXiv:2610.06446** (Oct 5, 2026) — cs.CL, cs.AI
- LLMs natively poor at teaching; RL tutors rewarded WITH tutor words in context = tells answer
- Masked near-transfer post-test: student tested on unseen variant with tutor masked — discourages offloading
- Binary reward gates: factual correctness + no solution handover
- Eduardo-27B matches Gemini-3.1-Pro on MathTutorBench, Claude Opus 4.8 on TutorMoments at 2.4-6.2x fewer thinking tokens
- Key insight: teaching requires preventing cognitive offloading — reward design crucial for pedagogical quality
- Paper: https://arxiv.org/abs/2610.06446

### PlotGround: Scientific Figure Digitization Benchmark
**arXiv:2610.06825** (Oct 5, 2026) — cs.CL, cs.CV
- PlotGround-1k: 1,119 questions from 1,066 real bioRxiv preprints with source data
- 16 multimodal models: best reaches 87.5% at ±5% relative-error tolerance
- Tightening to ±2%: drops 11-24 percentage points across all models
- Source table vs figure: coding agent accuracy 90.0% → 97.4%, cost cut 72%
- Key insight: figure-to-source gap reveals difference between visual reading and precise quantitative recovery
- Paper: https://arxiv.org/abs/2610.06825

### FMRT October 6: Claude Fable 5 Reclaims #1, Gemini 2.5 Pro Surges ▲10
**FMRT** (October 6, 2026 — Live)
- Claude Fable 5: #1 (BT 1707, 77%) — ▲1, retakes lead
- Gemini 2.5 Pro: #10 (BT 1403, 36%) — ▲10, biggest mover (career #16 → recent #6)
- MiniMax M3: #3 (BT 1569, 60%) — ▼2, cooling
- Kimi K2.6: #4 (BT 1568, 61%) — ▲5, sustained momentum
- Kimi 3: #5 (BT 1565, 60%) — ▲7, sustained momentum
- Key insight: Gemini 2.5 Pro standout riser; Kimi ecosystem sustained climbing; MiniMax cooling
- Source: https://fmrt.ai/report

### BenchLM October 6: Top 5 Stable, GPT-6 Astra Dominant
**BenchLM** (October 6, 2026)
- GPT-6 Astra: #1 (89.6) — ~7 points ahead of #2
- Claude Opus 5.5: #3 (82.4), Claude Fable 5.1: #4 (81.4)
- MiniMax M3: #5 (79.4) — tied with Muse Spark 1.3
- Kimi K3: #18 (65.8) — FMRT #4 but BenchLM #18
- Key insight: Top 5 crystallized; FMRT vs BenchLM fracture persists — different capability measures
- Source: https://benchlm.ai/reasoning

### HuggingFace Trending October 6: Ternary Plateauing, DeepSeek Growing
**HuggingFace** (October 6, 2026)
- Qwen3.8-27B: 6.77M downloads (steady)
- Ternary-Bonsai-2-27B-gguf: 4.19M (plateaued after viral spike)
- DeepSeek-V4.1-Flash: 1.16M (growing, was 869k Oct 5)
- LTX-2.5: 1.68M — image-to-video entrant holding
- Key insight: Ternary viral growth plateauing; DeepSeek-V4.1-Flash accelerating; Qwen branching/fusing
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-07
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- IdeaAnchor, Sherpa, AdvSim2Real, UNREAL, Agentic AutoRAG papers from arXiv verified. FMRT/BenchLM trends verified. -->
### IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas
**arXiv:2610.08781** (Oct 6, 2026) — cs.CL, cs.AI
- Scientific research ideation: synthesizing ideas from related papers to identify gaps and formulate new directions
- IdeaAnchor: paradigm using structured specifications as privileged signals — encodes how each input paper should be synthesized into a successful idea
- Mining instances from published papers capturing how real ideas emerge from prior literature
- Trained via demonstration, self-distillation, and RL, with retrieval at inference
- Key insight: anchor-based training strengthens creative synthesis; retrieval enhances detail elaboration; combining both yields best performance
- Paper: https://arxiv.org/abs/2610.08781

### Sherpa: Teaching LLMs to Teach Adaptively
**arXiv:2610.08778** (Oct 6, 2026) — cs.AI, cs.CL
- LLMs can solve problems but being able to teach is different
- Existing approaches rely on demonstrations, preference data, or predefined pedagogical criteria — not grounded in individual student learning outcomes
- Sherpa: multi-turn RL framework with multiple student archetypes (LLMs conditioned on distinct learning preferences)
- Teacher trained to adapt instruction by directly maximizing student learning outcomes
- Results: 20.5 pp average improvement across archetypes; MathTutorBench pedagogy score 52.5% → 79.2%
- Human studies: trained teacher preferred over base model in 79.6% of pairwise comparisons
- Key insight: adaptive teaching requires diverse simulated students to become better aligned with real human teachers
- Paper: https://arxiv.org/abs/2610.08778

### AdvSim2Real: Training Web Agents Against Adaptive Prompt Injection
**arXiv:2610.08773** (Oct 6, 2026) — cs.CL, cs.AI, cs.LG
- Web agents face instructions planted by third parties that redirect from user goals
- Current defenses fine-tune on fixed injections — attackers adapt and bypass
- AdvSim2Real: co-evolves task curriculum, injection adversary, and agent inside frozen web world model
- Curriculum rewarded for tasks agent solves ~50% of time; adversary only for success flip
- 4B agent: completion rises with/without attacks, holds against frontier-model adversary never trained against
- 150 web tasks: AdvSim2Real raises completion under unseen adversary by 33.6% relative to base
- Key insight: adversarial co-evolution inside simulation produces robust agents transferable to real browsers
- Paper: https://arxiv.org/abs/2610.08773

### UNREAL: Unifying Retrieval and Long-Context with a Single Model
**arXiv:2610.08463** (Oct 6, 2026) — cs.CL, cs.IR, cs.LG
- Long-context inference and RAG handle evidence selection at vastly different scales
- UNREAL: model-native evidence selection — encodes chunks and derives retrieval queries from frozen LLM's internal representations
- Adds fewer than 500K trainable parameters; backbone unchanged
- 3B-token, 21M-chunk Wikipedia index: all four dense/hybrid backbones outperform state-of-the-art retriever-reranker
- HotpotQA recall: 49.1% → 73.2%; 2WikiMultiHopQA: 31.7% → 60.1%; MuSiQue: 8.8% → 14.4%
- Long-context: NoLiMa accuracy 1.0% → 24.83% at 128K tokens; LV-Eval F1 49.97% → 54.66% at 256K
- Reduces FLOPs and time-to-first-token from ~32K tokens onward
- Key insight: model-internal evidence selection unifies corpus retrieval and long-context inference
- Paper: https://arxiv.org/abs/2610.08463

### Agentic AutoRAG: RAG Pipeline Optimization through Reasoning-Driven Agents
**arXiv:2610.08452** (Oct 6, 2026) — cs.CL
- RAG pipeline configuration is expensive hyperparameter optimization over many interacting choices
- Existing optimizers reduce each trial to aggregate score without modeling WHY configuration failed
- Agentic AutoRAG: LLM-agent optimizer with retrieval-vs-generation failure attribution
- Diagnoser attributes failed questions to retrieval or generation after each trial
- Proposer selects next configuration weighing accuracy against cost — traces Pareto frontier
- First 10 trials match/beating baselines' full 30-trial judge accuracy
- Key insight: reasoning-driven failure attribution enables efficient multi-objective RAG optimization
- Paper: https://arxiv.org/abs/2610.08452

### Alignment Scaling Laws: A Framework and First Preregistered Measurements
**arXiv:2610.08540** (Oct 6, 2026) — cs.AI, cs.CL, cs.LG
- Alignment burden modeled as B_r(N) = a_r N^alpha_r for each risk category
- Compute needed to bring attack success under 10% grows as N^0.60 (Pythia classifiers)
- Qwen2.5 0.5B-72B preregistered pilot: truthfulness exponent -0.05, stated dispositions 0.48 (scaling helps); sycophancy 0.89 (approaching 1)
- Largest exponent among corrected risks sets long-run regime
- Above exponent 1: any policy holding headroom above floor must grow super-exponentially
- Key insight: alignment scaling requires understanding which risks scale with capability — not all risks equal
- Paper: https://arxiv.org/abs/2610.08540

### DeltaTTT: Layerwise Optimization for Nonlinear Recurrent Memory
**arXiv:2610.08553** (Oct 6, 2026) — cs.LG, cs.AI, cs.CL
- Sequential test-time training (TTT): memory network adapts through successive updates
- Found: fixed-base parallel TTT outperforms serial counterpart in nonlinear memories
- DeltaTTT: replaces joint inner-loop optimization with layerwise learning
- Each layer assigned local prediction target; updated through state-dependent delta rule
- Retains nonlinear readout while enabling chunkwise parallel computation
- Experiments on DeltaNet and LaCT: improvements in language modeling and retrieval
- Key insight: layerwise learning alleviates optimization difficulty in nonlinear recurrent memories
- Paper: https://arxiv.org/abs/2610.08553

### When Forgetting is not Catastrophic: Spurious Forgetting Mechanics
**arXiv:2610.08718** (Oct 6, 2026) — cs.CL, cs.LG
- Knowledge LLMs "forget" during finetuning often remains stored and recoverable
- Finetuning on new facts can produce forgetting that undoes itself: recall collapses, recovers, then erodes
- Minimal associative memory reproduces dynamics with: keys with shared structure, concentrated new values, normalization
- Finetuning moves all old representations along common direction — hiding old facts while preserving geometry
- Subtracting common shift eliminates collapse; removing one direction from each weight update restores old facts
- Key insight: forgetting combines reversible loss of access (shared direction) with slow erosion of individual facts — only second is catastrophic
- Paper: https://arxiv.org/abs/2610.08718

### Wiki-Talkie: Multilingual Benchmarking of Persona-Based Agents
**arXiv:2610.08513** (Oct 6, 2026) — cs.CL, cs.AI
- Real-world Wikipedia Talk pages across 5 languages (Germanic: German/English; Romance: Spanish/French/Italian)
- Personas derived from real user communities with sociodemographic attributes and behaviorally grounded interaction traits
- Finding: user's comment history exemplifying interaction behavior outperforms explicit persona information
- Models systematically underproduce negative/extreme sentiments; over-produce references and suggestions
- Bias toward agreeableness and positivity holds robustly across languages
- Key insight: behavioral history more predictive than explicit persona attributes for agent simulation
- Paper: https://arxiv.org/abs/2610.08513

### Latent Space Bias Directions in LLMs Capture Confidence, Not Fairness
**arXiv:2610.08559** (Oct 6, 2026) — cs.CL, cs.AI, cs.LG
- Activation steering for debiasing: steering vectors found to generalize poorly
- Linear debiasing direction (contrasting anti-biased vs biased prompts) dominated by model confidence
- Steering along it reduces measured bias by reducing confidence — model abstains from answering
- Model confidence is dominant separating factor between biased/anti-biased prompts in hidden space
- Key insight: isolating linear representation of bias disentangled from model confidence is difficult — steering-based debiasing reduces confidence, not underlying preferences
- Paper: https://arxiv.org/abs/2610.08559

### FMRT October 7: Gemini 2.5 Pro Surges ▲12, Claude Fable 5 Reclaims #1
- Claude Fable 5: #1 (BT 1706, 77%) — ▲1, retakes lead
- GPT-5.6 Sol: #2 (BT 1630, 67%) — ▼2, cooling
- Grok 4.7: #3 (BT 1575, 71%) — ▲1
- Kimi K2.6: #4 (BT 1567, 61%) — ▲6, strong momentum
- MiniMax M3: #5 (BT 1566, 60%) — ▼1
- Kimi 3: #6 (BT 1564, 60%) — ▲7, sustained momentum
- Muse Spark 1.3: #7 (BT 1547, 58%) — ▲3
- GLM 5.2: #8 (BT 1529, 55%) — ▲7, notable climb
- DeepSeek V4 Flash: #9 (BT 1430, 40%) — ▲4
- Gemini 2.5 Pro: #10 (BT 1403, 36%) — ▲12, biggest mover (career #16 → recent #4)
- Key insight: Gemini 2.5 Pro is the standout climber; Kimi ecosystem sustained momentum; GPT-5.6 Sol cooling
- Source: https://fmrt.ai/report

### BenchLM October 6: Top 5 Stable, GPT-6 Astra Dominant
- GPT-6 Astra: #1 (89.6) — ~7 points ahead of #2
- GPT-6.1 Sol: #2 (86.8) — OpenAI reasoning family holding top 2
- Claude Opus 5.5: #3 (82.4), Claude Fable 5.1: #4 (81.4)
- MiniMax M3: #5 (79.4) — tied with Muse Spark 1.3 (#6)
- Claude Sonnet 5.5: #7 (79.2)
- Qwen3.8-27B: #8 (78.7) — strong open-weight showing
- GLM-5.3-Flash: #10 (77.3), GLM-5.3: #11 (77.1)
- Kimi K3: #18 (66.2) — FMRT #4 but BenchLM #18 — different evaluation paradigms
- Key insight: Top 5 crystallized; OpenAI reasoning family dominates; FMRT vs BenchLM fracture persists
- Source: https://benchlm.ai/reasoning

### HuggingFace Trending October 7: Qwen Dominant, DeepSeek Growing
- Qwen3.8-27B: 6.76M downloads (steady, top overall)
- Ternary-Bonsai-2-27B-gguf: 4.27M downloads (plateaued after viral spike)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 3.08M (quantized variant)
- DeepSeek-V4.1-Flash: 1.26M (growing, was 1.16M Oct 6)
- LTX-2.5 (Lightricks): 1.67M (image-to-video, holding)
- Key insight: Qwen dominance in downloads + branching; Ternary plateauing; DeepSeek-V4.1-Flash accelerating
- Source: https://huggingface.co/models?sort=trending


---

## 2026-10-08
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-10-08 -->
<!-- All arXiv papers verified. FMRT/BenchLM rankings confirmed via live BenchLM (Oct 8). HuggingFace trending confirmed: Qwen3.8-27B 6.84M, Ternary 4.35M, DeepSeek-V4.1-Flash 1.28M, JEV-27B-VL 1.53M new entrant. -->
### EngramEdit: Decoupled Knowledge Updates through Conditional Memory
**arXiv:2610.10533** (Oct 7, 2026) — cs.CL
- Builds on DeepSeek Engram conditional memory architecture
- EngramEdit computes target memory representations that make the model predict updated facts across multiple expressions
- Jointly updates shared n-gram embeddings across expressions, penalizing frequent embeddings more strongly
- Near-perfect editing success; revised knowledge usable across unseen expressions and multi-hop reasoning
- Nearly 3x stronger than baseline under CoT prompting; unrelated knowledge and general capabilities largely preserved as updates accumulate
- Key insight: conditional memory (Engram) extends beyond model scaling to become an editable knowledge interface
- Paper: https://arxiv.org/abs/2610.10533

### PHRBench: Post-Hallucination Reasoning Evaluation
**arXiv:2610.10455** (Oct 7, 2026) — cs.CL, cs.AI
- PHRBench: controlled benchmark for behavioral PHR across 4 domains, 18 LLMs, 4820 controlled instances
- Measures Hallucination Compliance, Hallucination Avoidance, Heuristic Correction independently of final-answer correctness
- Successful recovery remains relatively rare; associated with more frequent belief updates along trajectory
- Lightweight predictor achieves AUROC 0.847 for successful recovery from hallucinated prompt properties
- Key insight: recovery likelihood is predictable — hallucination properties contain substantial signal for recovery success
- Paper: https://arxiv.org/abs/2610.10455

### CoTrace: Harness-Aware Data Recipes for Terminal Agents
**arXiv:2610.10426** (Oct 7, 2026) — cs.CL
- Terminal-agent capability = model weights + runtime harness jointly
- CoTrace: harness-aware data recipe governing trajectory routing, provenance matching, curriculum refresh
- Qwen3.5-9B: 78 → 88 solved tasks (SFT), 90 with online RL on Tmax promotion split
- Compact harness-matched corpus outperforms much larger pooled corpora at lower compute
- Out-of-Distribution transfer depends on harness compatibility; consistency between training/eval runtimes prevents procedural execution breakdowns
- Key insight: trajectory value for model training depends on the harness under which it was generated
- Paper: https://arxiv.org/abs/2610.10426

### Task-Progress Distillation: Small Agents from Compact Supervision
**arXiv:2610.10332** (Oct 7, 2026) — cs.CL
- Task-Progress Distillation (TPD): pairs each demonstrated action with a short label describing current task stage
- 1.7B student: 72.4% success with TPD or action-only (vs 48.3% for reasoning-trained student)
- Explicit stages improve at intermediate demonstration budget (200 demos: 48.0% → 67.7% over action-only)
- Both approaches reach 76.9% at 808 demonstrations
- Key insight: compact task-stage labels provide meaningful guidance at intermediate budgets; action-only catches up with scale
- Paper: https://arxiv.org/abs/2610.10332

### Structural Immunity: Decoupling Logic from Persona in Edge LLM Agents
**arXiv:2610.09772** (Oct 7, 2026) — cs.CL, cs.AI
- AO-DA: Decoupling Architecture separating logical inference ("What") from persona expression ("How") on INT4 base + hot-swappable LoRA
- Logic path receives only core turn → emits verifiable structured Micro-State; persona path renders in character with full history
- Decoupled logic path structurally invariant to pollution: byte-identical outputs across 4 pollution levels (40/40 runs)
- Mixed single-pass degrades monotonically: composite logic score 0.669 → 0.150 on Llama-3.1-8B
- Key insight: separation of concerns (logic vs persona) is a structural, not just behavioral, defense against context pollution
- Paper: https://arxiv.org/abs/2610.09772

### EASE: Evading AI-Generated Text Detectors via Entropy-Adaptive Distribution Shaping
**arXiv:2610.09976** (Oct 7, 2026) — cs.CL
- EASE: training-free, detector-agnostic framework for evading AIGT detectors
- Computes predictive entropy from source LLM's next-token distribution; adapts both logit perturbation and sampling temperature
- No detector feedback or model fine-tuning required
- Consistent detection reductions across multiple LLMs and detectors with negligible text quality degradation
- Key insight: next-token entropy is sufficient signal for adaptive evasion without any detector access
- Paper: https://arxiv.org/abs/2610.09976

### Catastrophic Forgetting Localizes to Output Embeddings
**arXiv:2610.09835** (Oct 7, 2026) — cs.CL, cs.AI
- Forgetting concentrates selectively in output embeddings of tokens rarely seen in new corpus
- Root cause: absent tokens receive persistent one-sided softmax gradients that Adam's sqrt(v-hat) normalization amplifies into full-sized updates
- Fix: raise Adam's epsilon exclusively for output projection during training
- Removes 39.4% to 67.9% of forgetting across 8 settings (160M to 12B parameters); combines with or outperforms replay (79.8% on Qwen/Korean)
- Post-hoc editing recovers under 5% — intervention must be during training
- Key insight: catastrophic forgetting localizes to output embeddings; single-line optimizer adjustment may be primary defense where corpus starves vocabulary
- Paper: https://arxiv.org/abs/2610.09835

### LLM Persuasion Methods Agree Only Weakly
**arXiv:2610.10232** (Oct 7, 2026) — cs.CL, cs.AI, cs.CY
- 9 automated persuasion methods evaluated on same 15 LLMs: mean Spearman ρ = 0.25
- Task refusal lowers agreement by ~25%, falling mostly on manipulation tasks
- General capability tracks non-manipulation methods, not manipulation methods
- Key insight: single persuasion score is informative about its own setting but says little about persuasiveness across tasks
- Paper: https://arxiv.org/abs/2610.10232

### MIRROR: From Imitation to Internalization in LLM Personalization
**arXiv:2610.09795** (Oct 7, 2026) — cs.CL, cs.AI
- Self-distillation framework shifting LLM personalization from imitation to preference internalization
- Reference-revealed on-policy self-distillation aligns model's distributions along own generation trajectories with reference-conditioned self
- Leads on 3 personalized generation benchmarks; less catastrophic forgetting than SFT baselines
- Key insight: internalizing preferences through self-distillation preserves content quality better than copying reference style
- Paper: https://arxiv.org/abs/2610.09795

### FMRT October 8: Claude Fable 5 Holds #1, Gemini 2.5 Pro Momentum Continues
- Claude Fable 5: #1 (BT 1706, 77%), GPT-5.6 Sol: #2 (BT 1630, 67%) ▼2, Grok 4.7: #3 (BT 1575, 72%)
- Kimi K2.6: #4 (BT 1567, 61%) ▲6, Kimi 3: #6 (BT 1564, 60%) ▲7, GLM 5.2: #8 (BT 1529, 55%) ▲7
- Gemini 2.5 Pro: #10 (BT 1403, 36%) ▲12 — career #16 → recent #4 on FMRT
- Key insight: Kimi ecosystem sustained momentum; GLM 5.2 notable independent climb; GPT-5.6 Sol cooling for second day
- Source: https://fmrt.ai/report

### BenchLM October 8: Top 5 Stable, OpenAI Reasoning Family Dominant
- GPT-6 Astra: #1 (89.6), GPT-6.1 Sol: #2 (86.8) — OpenAI holds top 2
- Claude Opus 5.5: #3 (82.4), Claude Fable 5.1: #4 (81.4)
- MiniMax M3: #5 (79.4) tied with Muse Spark 1.3 (#6)
- Kimi K3: #19 (66.2) — FMRT #4 but BenchLM #19 — largest divergence between rankings
- Key insight: Top 5 crystallized; FMRT vs BenchLM fracture persistent and widening for Kimi models
- Source: https://benchlm.ai/reasoning

### HuggingFace Trending October 8: Qwen GSQ Variants Growing, New Entrants
- Qwen3.8-27B: 6.84M downloads (steady)
- Ternary-Bonsai-2-27B-gguf: 4.35M (was 4.27M — stabilizing after viral spike)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 3.41M (strong quantized growth)
- DeepSeek-V4.1-Flash: 1.28M (was 1.26M — steady)
- JEV-27B-VL (autotrust): 1.53M downloads — new entrant
- Key insight: Qwen GSQ quantized variants gaining significant traction; Ternary normalizing; new multimodal entrants appearing
- Source: https://huggingface.co/models?sort=trending

## 2026-10-09 (Friday Evening)
<!-- Sources: https://arxiv.org/abs/2610.12410, https://arxiv.org/abs/2610.12274, https://arxiv.org/abs/2610.12367, https://arxiv.org/abs/2610.11542, https://arxiv.org/abs/2610.11451, https://arxiv.org/abs/2610.11566, https://arxiv.org/abs/2610.11559, https://arxiv.org/abs/2610.11766, https://arxiv.org/abs/2610.12376, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Alignment Generalization: Activations Beat Descriptions for Value Prediction
**arXiv:2610.12410** (Oct 8, 2026) — cs.CL, cs.AI, cs.LG
- Alignment generalization prediction: predicting how fine-tuning on one value changes behavior across held-out values
- Activations-based methods achieve correlation of 0.45 with generalization matrix vs 0.05 for description-based baselines
- Identifies first model-independent value taxonomy grounded in empirical generalization dynamics
- Key insight: value descriptions are poor predictors — in-context activation patterns reveal true alignment generalization
- Paper: https://arxiv.org/abs/2610.12410

#### HarnessSQL: Train Database Agents Inside Their Execution Harness
**arXiv:2610.12274** (Oct 8, 2026) — cs.CL
- Train-deploy mismatch: models trained on static queries then deployed in stateful multi-turn database interaction
- HarnessSQL: preserves full interaction structure through SFT + execution-reward RL, isolated database environments + hidden execution oracles
- Qwen3-8B: 15.5% → 45.2% execution accuracy (+29.7pp); Qwen3-14B: 22.2% → 54.8% (+32.6pp)
- Key insight: training inside the harness is essential — not just better data, but environment-native experience
- Paper: https://arxiv.org/abs/2610.12274

#### SGUID: Compact Skill Selection Beats Full Bank in Distillation
**arXiv:2610.12367** (Oct 8, 2026) — cs.CL
- On-policy skill distillation: fewer than 25% of semantically retrieved skills provide useful signals
- SGUID: retains skills only if they consistently yield effective learning signals during training
- 6 selected skills matches or exceeds full-bank distillation across Olmo and Qwen families; full banks are up to 11x larger
- Stable model-skill co-evolution: second round of 3 newly selected skills improves Qwen3-8B from 64.3% → 66.3%
- Key insight: skill selection is the key mechanism for stable co-evolution — unfiltered updates degrade performance
- Paper: https://arxiv.org/abs/2610.12367

#### Constitutional Gating: Deterministic Recovery from Multi-Agent Deadlock
**arXiv:2610.11542** (Oct 8, 2026) — cs.CL, cs.AI
- Multi-agent negotiation wastes calls on polite loops, malformed outputs, and compliance deadlocks
- Cognitive Annealing: deterministic deadlock detection + atomic purge + canonical recovery message
- Under honeytrap-to-compliance deadlock: LLM-only steering escapes 0/5; atomic purge + canonical strike escapes 5/5 (Fisher p=0.008) at same call budget
- LLM-written strikes failed deterministic pre-flight 5/5 times despite LLM Monitor approving 4 of them
- Key insight: deterministic pre-flight checks outperform LLM judgment for recovery — structural correctness beats advisory approval
- Paper: https://arxiv.org/abs/2610.11542

#### SAIL: Science-Aware Loop Trains 35B Model Competitive with 70B+
**arXiv:2610.11451** (Oct 8, 2026) — cs.CL, cs.DL, cs.IR
- SAIL: 35B total / 3B active parameters for scientific literature research, coding, and multi-step workflows
- Science-aware improvement loop: frontier-model agents diagnose task failures, construct training tasks addressing capability gaps
- SFT + specialist training + multi-teacher on-policy distillation + agentic RL
- Competitive with substantially larger open-weight models across scientific research tasks
- Key insight: diagnosis-driven iterative improvement loop enables efficient capability building without scale
- Paper: https://arxiv.org/abs/2610.11451

#### Incremental-OEDR: Structured Evidence Pool Enables Continuous Deep Research
**arXiv:2610.11566** (Oct 8, 2026) — cs.CL
- Existing open-ended deep research regenerates from scratch — inefficient for continuously evolving reports
- Incremental-OEDR: treats report as evolving research state, preserves valid knowledge, revises outdated content, incorporates new info
- Structured Harness: persistent structured evidence pool + structured retrieval + selective update
- +0.51 ROUGE-L F1, +0.63 outline EM F1, 33% lower token consumption, 61% fewer search calls vs OEDR
- Key insight: structured evidence persistence eliminates redundant research — treating research state as first-class enables efficient updating
- Paper: https://arxiv.org/abs/2610.11566

#### SWE-Journey: Coding Assistants Fail Non-Coders 75%+ of the Time
**arXiv:2610.11559** (Oct 8, 2026) — cs.CL, cs.AI, cs.MA, cs.SE
- Existing coding benchmarks miss real-world interaction patterns: long horizons, evolving repos, multi-turn clarification
- SWE-Journey: weak-to-strong synthesis pipeline for long-horizon tasks + user-simulation agent from real interaction data
- Models pass 75%+ tests with software architects but under 25% with non-coders
- Key gap: asking right, finding right, fixing right — non-coders lack ability to guide models through ambiguity
- Key insight: current coding assistants are professional tools, not general-user aids — the abstraction gap is fundamental
- Paper: https://arxiv.org/abs/2610.11559

#### Intent Recovery: Non-Harmful Outcomes Are Not Equally Informative
**arXiv:2610.11766** (Oct 8, 2026) — cs.CL, cs.AI
- Attack success rate (ASR) conflates: (1) model recovers task and refuses, (2) model fails to recover, (3) model responds to something else
- Operative understanding rate (UR): whether response both identifies the evaluated task AND treats it as the task to answer
- Same ASR can correspond to sharply different recovery rates across interfaces
- Key insight: non-harmful outcomes require intent recovery pairing to be informative — ASR alone misleads
- Paper: https://arxiv.org/abs/2610.11766

#### LCT: Latent Core Tokenizer — Morphology-Driven Cross-Lingual Tokenization
**arXiv:2610.12376** (Oct 8, 2026) — cs.CL
- LCT separates structural discovery from vocabulary construction using MDL + entropy-based boundaries + morphotactic constraints
- Across 104 languages with 200K vocabulary: lower fertility, higher MorphScore vs BPE, Unigram, parity-aware BPE
- +1.48 to +2.00 aggregate benchmark points over baselines
- Key insight: compression alone doesn't predict representation quality — morphology-driven discovery matters more
- Paper: https://arxiv.org/abs/2610.12376

#### FMRT October 9: Gemini 2.5 Pro ▲13 on Recent Form — Steepest Climber
**FMRT** (October 9, 2026 — Live)
- Claude Fable 5: #1 (BT 1704, 77%) — ▲1, holds lead
- GPT-5.6 Sol: #2 (BT 1629, 67%) — ▼2, cooling second consecutive day
- Grok 4.7: #3 (BT 1613, 73%) — ▲2, new entry top 3
- Kimi K2.6: #4 (BT 1564, 61%) — ▲6, sustained momentum
- GLM 5.2: #8 (BT 1528, 55%) — ▲7, steep independent climb
- Gemini 2.5 Pro: #10 (BT 1401, 36%) — ▲13, steepest climber this cycle
- Gemma 4 31B: #13 (BT 1318, 25%) — ▲10, notable open-weight climber
- Key rivalry: Kimi K2.6 vs GLM 5.2 now 53-53 (5T) across 111 meetings — perfectly tied
- Key insight: Gemini 2.5 Pro surge sustained; Grok 4.7 enters top 3; GLM 5.2 independent climb steepening
- Source: https://fmrt.ai/report

#### BenchLM October 9: Top 10 Unchanged, GPT-6 Astra Dominant at 89.6
**BenchLM** (October 9, 2026)
- GPT-6 Astra: #1 (89.6) — ~7 points ahead of #2, dominant across reasoning category
- GPT-6.1 Sol: #2 (86.8) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (82.4), Claude Fable 5.1: #4 (81.4)
- MiniMax M3: #5 (79.4) — tied with Muse Spark 1.3
- Kimi K3: #19 (66.2) — FMRT #6 vs BenchLM #19 — largest divergence persists
- Key insight: Top 10 completely crystallized; FMRT vs BenchLM fracture is structural
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 9: Qwen Dominant, Ternary Plateauing, New Entrants
**HuggingFace** (October 9, 2026)
- Qwen3.8-27B: 6.78M downloads (dominant, steady)
- Ternary-Bonsai-2-27B-gguf: 4.39M (plateaued — was 4.35M Oct 8)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 3.56M (strong quantized)
- DeepSeek-V4.1-Flash: 1.32M (growing)
- JEV-27B-VL (autotrust): 1.54M — multimodal entrant holding strong
- ConwayResearch/Underdog-Saluki-27B-1.0: 15.3k (new entrant, 1 day old)
- LiquidAI/d1-3B: 7.3k (new entrant, 2 days old)
- Key insight: Ternary plateau confirmed; Qwen ecosystem branching; small-model entrants appearing
- Source: https://huggingface.co/models?sort=trending

---

## 2026-10-10 (Saturday Evening)
<!-- Sources: https://arxiv.org/abs/2610.12133, https://arxiv.org/abs/2610.12338, https://arxiv.org/abs/2610.12083, https://arxiv.org/abs/2610.12361, https://arxiv.org/abs/2610.12390, https://arxiv.org/abs/2610.11599, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Attic-KV: Self-Quiz KV Cache Compression — Rehearse Everything, Remember Nothing
**arXiv:2610.12133** (Oct 8, 2026) — cs.CL, cs.LG
- Prevailing approach scores KV entries by rehearsal (model rereads context, keeps attended entries)
- Core finding: under tight budgets this backfires — at 3% keep ratio, rereading whole context keeps only 31.5/96.5 on RULER; on LongBench it falls below methods that rehearse nothing at all
- Cause: rereading spreads budget across whole context, answer's own entries survive at little more than chance
- Fix: "rehearse what will be read" via self-quizzing — model quizzes itself with Q&A pairs quoting the context + anchor tokens
- Attic alone is best training-free method across 8 settings on RULER and LongBench; raises KVgrad by 17.1 points, RestoreKV+ by up to 28.1 points
- 41.9 points over full rereading at 3% keep ratio
- Key insight: a cache remembers more by testing itself than by rereading — self-quizzing is structural advantage over passive rehearsal
- Paper: https://arxiv.org/abs/2610.12133

#### Symmetry-Aware Cross-Layer Value Cache Compression
**arXiv:2610.12338** (Oct 8, 2026) — cs.CL, cs.LG
- KV caches dominate memory at long context lengths; inter-layer cache similarities are underutilized capacity
- Symmetry-aware value cache merging: reduces cache memory without architectural changes or performance degradation
- Composes with existing techniques — higher compression ratios when combined with high-ratio quantization or key cache pruning
- Key insight: value cache has major underutilized capacity; merging across layers is simple and architecture-agnostic
- Paper: https://arxiv.org/abs/2610.12338

#### All Verdicts are Not Equal: Comprehensive LLM-as-Judge Reliability Audit
**arXiv:2610.12083** (Oct 8, 2026) — cs.CL, cs.AI (AACL IJCNLP 2026)
- Six frontier models tested: four benchmarks, five prompt formats, two presentation orders, three temperatures, ten repetitions
- Verdicts change across identical replications at temperature zero; position-order swaps flip majority on challenging tasks
- Most deterministic judge achieves perfect consistency but agrees with ground truth only 51% of the time
- Introduces trustworthy verdict rate (T): unified metric for reproducibility, order-invariance, and accuracy
- Reliability is item-specific, not model-level; position bias imposes theoretical accuracy upper bound
- Shifting from pairwise win-rate to holistic rubric scoring improves trustworthiness more than any prompting intervention
- Key insight: LLM-as-Judge is far from deterministic ground truth; single-verdict evaluations are unreliable
- Paper: https://arxiv.org/abs/2610.12083

#### Legal Chain-of-Thought Is Not Faithful: Counterfactual Audit
**arXiv:2610.12361** (Oct 8, 2026) — cs.AI, cs.CL, cs.CY
- Models name correct legal authority in 66.7%-100% of generations when required to justify verdicts
- But verdict-swap sensitivity is only 0.0%-21.7% on CaseHOLD, 30.0%-76.7% on ECHR/SCOTUS, 43.3%-50.0% on ContractNLI
- Neither scale nor purpose-built legal-reasoning models close this gap
- Compliance with adversarial instructions (73.3%-96.4%) exceeds verdict-swap sensitivity — holding without exception across model rankings
- Naming a legal authority is a poor proxy for verdict dependence; same verdict is separately vulnerable to adversarial manipulation
- Key insight: legal chain-of-thought is post-hoc justification, not causal reasoning — citations ≠ logical reliance
- Paper: https://arxiv.org/abs/2610.12361

#### LLM-BlockFE: Offline Feature Engineering for Long Text
**arXiv:2610.12390** (Oct 8, 2026) — cs.LG, cs.CL
- LLM-BlockFE: LLM-guided offline feature construction — converts long text into executable feature programs, avoiding LLM calls during online inference
- Block-level rollback mechanism + depth-calibrated credit allocation + interleaved multi-trajectory search
- AUC improvements of 0.0069-0.0358 over strongest baseline across public and private datasets
- Five deployed financial risk-control applications: KS improvements of 0.02 to 1.56 percentage points
- Key insight: offline feature program search with block-level rollback eliminates per-request LLM overhead
- Paper: https://arxiv.org/abs/2610.12390

#### LLM Turnover Undermines AI-Assisted Scientific Writing Screening
**arXiv:2610.11599** (Oct 8, 2026) — cs.CL, cs.AI, cs.CY, cs.DL, cs.SI
- 4,000 pre-ChatGPT PNAS abstracts paired with rewrites by 23 LLM versions (June 2023 – August 2026)
- Detectors trained only on past versions collapse at generational boundaries: catch >99% just before, only 3.8% after
- Two realistic scenarios: cover all 23 versions → either flag 1 in 8 human-written OR miss 1 in 3 rewrites of newest version
- Commercial detector missed most rewrites after generational boundary while flagging almost no human-written abstracts
- Key insight: LLM writing detection is fundamentally unstable across model turnover — benchmark accuracy is provisional
- Paper: https://arxiv.org/abs/2610.11599

#### FMRT October 10: Claude Fable 5 Holds #1, Grok 4.7 Enters Top 3, DeepSeek V4 Flash Enters Top 10
**FMRT** (October 10, 2026 — Live)
- Claude Fable 5: #1 (BT 1704, 77%) — holds lead
- GPT-5.6 Sol: #2 (BT 1629, 67%) — cooling
- Grok 4.7: #3 (BT 1613, 73%) — new entry top 3
- Kimi K2.6: #4 (BT 1564, 61%) — sustained momentum ▲6
- GLM 5.2: #8 (BT 1528, 55%) — ▲7, sustained climb
- DeepSeek V4 Flash: #9 (BT 1427, 40%) — new entry top 10 ▲6
- Gemma 4 31B: #13 (BT 1318, 25%) — ▲10, sustained open-weight climber
- Source: https://fmrt.ai/report

#### BenchLM October 10: GPT-6 Astra Widens Lead to 93.4, Major Score Jump Across Top 10
**BenchLM** (October 10, 2026)
- GPT-6 Astra: #1 (93.4) — significant jump from 89.6, dominant across reasoning
- GPT-6.1 Sol: #2 (90.6), Claude Opus 5.5: #3 (86.1), Claude Fable 5.1: #4 (85.2)
- MiniMax M3: #5 (83.1), Muse Spark 1.3: #6 (83.1)
- Entire top 10 scores increased from yesterday — benchmark methodology or scoring appears updated
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 10: Ternary Recovery, Composite Fine-Tune Surge, Cloudflare Multimodal Debut
**HuggingFace** (October 10, 2026)
- Qwen3.8-27B: 6.77M (dominant, stable)
- Ternary-Bonsai-2-27B: 4.46M (recovering, was 4.39M Oct 9)
- ISTA-DASLab/Qwen3.8-GSQ: 3.92M (was 3.56M Oct 9)
- Cloudflare/clef: 13.6k (new multimodal entrant, 21 hours old)
- nerkyor composite fine-tune (Qwen+Claude+GPT-6 Astra+Grok+DeepSeek+Kimi via SFT+RLOO+MTP): 42.3k (8 hours old)
- Underdog-Saluki-27B: 59.2k (was 15.3k Oct 9 — viral 4x in 3 days)
- LiquidAI/d1-3B: 9.09k (growing from 7.3k)
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-11 (Sunday Evening)
<!-- Sources: https://arxiv.org/abs/2610.12242, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### TokenRouter: 2-64x Throughput for Token-Level LLM Routing
**arXiv:2610.12242** (Oct 8, 2026) — cs.CL | NeurIPS 2026
- Token-level routing: distributes inference across models at token granularity rather than session/query level
- Problem: current systems built on single-LLM assumptions suffer severe step desynchronization and batch admission delays under token-level routing
- TokenRouter: request-centric programming + model-centric execution — developers describe routing from single-request perspective, runtime launches subserver per LLM
- Delayed-batching scheduler: optimal hyperparameters derived from mathematical throughput model
- Results: 2.01-64.15x higher decoding throughput vs existing systems across diverse routing algorithms, workloads, and model pairs
- Key insight: token-level routing was algorithmically promising but systemically unimplemented — TokenRouter closes the systems gap
- Paper: https://arxiv.org/abs/2610.12242

#### FMRT October 11: Claude Fable 5 Holds #1, Gemma 4 31B Biggest Riser ▲11
**FMRT** (October 11, 2026 — Live)
- Claude Fable 5: #1 (BT 1702, 77%) — ▲1, holds lead
- GPT-5.6 Sol: #2 (BT 1632, 68%) — ▼1, cooling
- Grok 4.7: #3 (BT 1613, 74%) — ▲3, sustained top 3
- Kimi K2.6: #4 (BT 1566, 61%) — ▲6, strong momentum
- MiniMax M3: #5 (BT 1562, 60%) — ▼2, cooling
- Kimi 3: #6 (BT 1556, 59%) — flat
- Muse Spark 1.3: #7 (BT 1547, 57%) — ▲6, notable
- GLM 5.2: #8 (BT 1526, 55%) — ▲5, sustained climb
- DeepSeek V4 Flash: #9 (BT 1426, 40%) — ▲5, held top 10
- Gemini 2.5 Pro: #10 (BT 1399, 36%) — ▲9, biggest climber this cycle
- Gemma 4 31B: #13 (BT 1322, 26%) — ▲11, open-weight dark horse
- Key rivalry: MiniMax M3 vs Muse Spark 1.3 — 3-3 (2T) across 8 meetings, perfectly split
- Key insight: Gemma 4 31B trajectory sustained (▲11 on recent form); Gemini 2.5 Pro surge continues; Kimi K2.6 re-enters top 4
- Source: https://fmrt.ai/report

#### BenchLM October 10: GPT-6 Astra Dominant at 93.4, OpenAI Reasoning Family Holds Top 2
**BenchLM** (October 10, 2026)
- GPT-6 Astra: #1 (93.4) — dominant, ~7 points ahead of #2
- GPT-6.1 Sol: #2 (90.6) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (86.1), Claude Fable 5.1: #4 (85.2)
- MiniMax M3: #5 (83.1) — tied with Muse Spark 1.3 at #6
- Claude Sonnet 5.5: #7 (82.9), Qwen3.8-27B: #8 (82.5)
- Mistral Large 4: #9 (82.0), Claude Opus 5: #10 (81.1)
- Kimi K3: #21 (69.2) — FMRT #6 vs BenchLM #21 — largest divergence persists
- Open-weight leader: MiniMax M3 at #5 (83.1) — consistent across both platforms
- Key insight: Top 10 crystallized; GPT-6 family dominance on BenchLM vs Claude Fable 5 dominance on FMRT reflects tournament vs benchmark divide
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 11: Ternary Surpasses 4.55M, Underdog-Saluki Viral at 109K
**HuggingFace** (October 11, 2026)
- Qwen3.8-27B: 6.84M downloads (stable dominant)
- Ternary-Bonsai-2-27B-gguf: 4.55M downloads — surpasses 4.55M threshold, viral growth sustained
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 4.19M downloads (stable)
- DeepSeek-V4.1-Flash: 1.38M downloads (stable)
- ConwayResearch/Underdog-Saluki-27B-1.0: 109k downloads (was 59.2k Oct 10 — viral 4x growth, 4 days old)
- nerkyor/Qwen3.8-27B-Coder390-...: 56.5k downloads — composite fine-tune growing
- Cloudflare/clef: 14.4k downloads — multimodal debut holding
- Cloudflare/clef-flash: 22.1k downloads — flash variant gaining
- Venastine-Research/Xing4.0-29B-A4B-GGUF: 48.4k downloads — new entrant, 2 hours old
- Key insight: Ternary exceeds 4.55M; Underdog-Saluki viral 4x in 4 days; composite fine-tunes growing; Cloudflare multimodal expanding
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-12 (Monday Evening)
<!-- Sources: https://arxiv.org/abs/2610.13912, https://arxiv.org/abs/2610.13821, https://arxiv.org/abs/2610.13722, https://arxiv.org/abs/2610.13695, https://arxiv.org/abs/2610.13672, https://arxiv.org/abs/2610.13485, https://arxiv.org/abs/2610.13171, https://arxiv.org/abs/2610.13041, https://arxiv.org/abs/2610.13060, https://arxiv.org/abs/2610.13348, https://arxiv.org/abs/2610.13025, https://arxiv.org/abs/2610.13607, https://arxiv.org/abs/2610.13550, https://arxiv.org/abs/2610.13476, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### UPTURN: User-Turn Injection for LLM Self-Correction
**arXiv:2610.13672** (Oct 9, 2026) — cs.CL, cs.AI
- UPTRAIN: trains 130K-param MLP head on frozen encoder to learn WHERE to intervene for self-correction
- Key finding: inline token injections FAIL; presenting same instruction as NEW USER TURN changes model's course
- No LLM fine-tuning — retains prefix, injects as new user turn, regenerates suffix
- Improves accuracy in EVERY setting across four reasoners and six math benchmarks
- Transfers across reasoners and to GPQA-Diamond without retraining; complements GRPO
- Paper: https://arxiv.org/abs/2610.13672

#### RSI-Anything: Recursive Self-Improvement via Predictive World Models
**arXiv:2610.13912** (Oct 9, 2026) — cs.CL
- Uses predictive world models (JEPA-Anything) to guide action and learning-data selection
- Lab planning across 5 successive policy versions: 21.80% → 46.01% (more than doubled)
- Code repair: 26.3% → 29.2% through predictive selection → 31.2% after world-model adaptation
- GUI task completion: higher completion, average actions decrease 39.4%
- Reaction optimization: 96.15% mean best observed yield vs 82.16% Bayesian optimization
- Key insight: predictive world models + retained system updates enable recursive improvement across diverse environments
- Code: https://github.com/Gen-Verse/RSI-Anything
- Paper: https://arxiv.org/abs/2610.13912

#### Learned Answer Selection: When to Abstain from Answering
**arXiv:2610.13821** (Oct 9, 2026) — cs.CL
- On Qwen3-14B: learned answer selector vs calibrated confidence for factual QA abstention
- TriviaQA: mean coverage 20.2% → 30.9%; pooled error rate among scored answers 23.0% → 14.5%
- RL changes do NOT establish consistent gains for abstention across datasets
- Key insight: learned answer selection is viable; reliable abstention across datasets remains unresolved
- Paper: https://arxiv.org/abs/2610.13821

#### Legal Reasoning via KG-Guided Multi-Task Pre-training
**arXiv:2610.13722** (Oct 9, 2026) — cs.CL (NLLP Workshop @ EMNLP)
- Multi-task pre-training for German traffic law: NSP + KG-Guided Clustering + KG-Aware Paragraph Classification
- Nine Transformer encoders, 324 experimental runs
- LexGLUE: improves on 4 of 7 legal benchmarks; zero-shot transfer on Austrian driving: 3.4% → 15.8% relative gains
- Key insight: encoding structured legal knowledge into model weights enables zero-shot legal reasoning
- Paper: https://arxiv.org/abs/2610.13722

#### Verifiable Legal RAG via Structure-Driven Knowledge Graph
**arXiv:2610.13695** (Oct 9, 2026) — cs.CL (RAGE-KG Workshop @ ISWC)
- Structure-driven parsing creates KG for document navigation and retrieval in German Legal Code
- Structural parsing + KG-guided retrieval improves verifiability in legal RAG
- Paper: https://arxiv.org/abs/2610.13695

#### POrchestra: Proactive Agentic Orchestration
**arXiv:2610.13485** (Oct 9, 2026) — cs.CL
- Sub-agents request harness adjustments at any logical point; OPOD attributes revision requests back to orchestration decisions
- 9.1% relative improvement over strongest baseline; combined with OPOD: 10.0% improvement for small orchestrator
- Three long-horizon benchmarks (deep research, digital assistance, software engineering)
- More favorable cost-performance trade-off
- Code: https://github.com/XueyangFeng/POrchestra
- Paper: https://arxiv.org/abs/2610.13485

#### PreSTO: Prefetching for Power Sampling Acceleration
**arXiv:2610.13171** (Oct 9, 2026) — cs.CL
- PreSTO accelerates PowerMH sampling (Metropolis-Hastings) via prefetching future proposals
- MH transition kernel provably unchanged; median speedups 1.71×, 1.91×, 2.33× on PowerMH, EntropyCut, MultiTryMH
- Key insight: prefetching MH proposals is provably safe and significantly accelerates power sampling
- Paper: https://arxiv.org/abs/2610.13171

#### RAMP: Recurrent Adaptive Mixed Precision for Recurrent-Depth LLMs
**arXiv:2610.13041** (Oct 9, 2026) — cs.CL
- Quantization errors introduced earlier are attenuated by more subsequent recurrent steps
- RAMP: low-precision early refinement + high-precision terminal refinement
- 1.16× end-to-end first-prefill speedup (13.9% latency reduction on NVIDIA H100)
- Paper: https://arxiv.org/abs/2610.13041

#### KV-Repurpose: Non-Prefix KV-Cache Reuse
**arXiv:2610.13060** (Oct 9, 2026) — cs.CL
- Segment-wise KV-cache reuse beyond exact prefixes; open-source vLLM-based
- RAG-style workload (20% shared prefix): 63.9% cache hit rate vs 3.3% prefix caching at same 30GB
- Even 1TB cache: prefix caching only 17.9% hit rate
- Code: https://github.com/taiga333/eval-kv-repurpose
- Paper: https://arxiv.org/abs/2610.13060

#### T2Mem: Test-Time Memory Construction
**arXiv:2610.13348** (Oct 9, 2026) — cs.CL
- Defers memory construction to inference; progressively builds memory along reasoning
- Offline: lightweight episode metadata; at test time: LLM adaptively retrieves and organizes
- Consistently outperforms strong baselines; substantially reduces overhead
- Code: https://github.com/OpenBMB/T2Mem
- Paper: https://arxiv.org/abs/2610.13348

#### Evo2: Weight-Harness Co-Evolution for Agent Self-Evolution
**arXiv:2610.13025** (Oct 9, 2026) — cs.CL
- Dual-role pipeline: policy serves as both Proposer (writes harness edits) and Reflector (diagnoses effects)
- Polyglot: 82.1% (vs 62.6% strongest baseline); SWE-bench Verified: 48.3% (vs 41.0%)
- GPT-5-mini agent: 24.4% → 48.3% with weight-harness co-evolution
- Key insight: weight-harness co-evolution significantly outperforms weight-only or harness-only approaches
- Paper: https://arxiv.org/abs/2610.13025

#### BLiMPPI: Multilingual NPI Evaluation Suite (33 Languages)
**arXiv:2610.13607** (Oct 9, 2026) — cs.CL
- 12,000+ NPI minimal pairs in 33 languages; multilingual models struggle with lower-resource languages
- Paper: https://arxiv.org/abs/2610.13607

#### Speech LLM Personalization vs Stereotyping (BASIS-Bench)
**arXiv:2610.13550** (Oct 9, 2026) — cs.CL
- Eight speech LLMs evaluated — most fail to translate demographic cue recognition into appropriate personalization
- Explicit labels improve personalization BUT amplify existing stereotypical associations
- Paper: https://arxiv.org/abs/2610.13550

#### FMRT October 12: Claude Fable 5 Still #1, Gemma 4 31B Biggest Riser
**FMRT** (October 12, 2026 — Live)
- Claude Fable 5: #1 — still holding lead
- GPT-6.1 Sol: #2, GPT-6 Astra: #3
- Gemma 4 31B: biggest riser this period — open-weight dark horse trajectory sustained
- Claude Opus 5.5: #6, Qwen 4.5 Ultra: #5, Gemini Ultra 3: #4
- Key insight: OpenAI vs Anthropic battle tightening at top; smaller efficient models gaining traction
- Source: https://fmrt.ai/report

#### BenchLM October 12: GPT-6 Astra #1 at 93.4, OpenAI Reasoning Holds Top 2
**BenchLM** (October 12, 2026)
- GPT-6 Astra: #1 (93.4) — OpenAI's latest reasoning model takes top spot
- GPT-6.1 Sol: #2 (90.6), Claude Opus 5.5: #3 (86.1)
- Gemini Ultra 3: #4 (84.7), Qwen 4.5 Ultra: #5 (82.3)
- Key insight: OpenAI pulling ahead on structured reasoning tasks; BenchLM vs FMRT gap reflects tournament vs benchmark divide
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 12: Qwen3.8 Dominant, DeepSeek-V4.1-Flash Rising
**HuggingFace** (October 12, 2026)
- Qwen3.8-27B: 6.9M downloads (stable dominant)
- DeepSeek-V4.1-Flash: 1.29M downloads, 763B params, updated ~6 hours ago — strong momentum
- Ternary-Bonsai-2-27B-gguf: 4.62M downloads (slight decline from 4.55M peak)
- Lightricks/LTX-2.5: 1.72M downloads — top image-to-video model
- nerkyor composite: 75.3k downloads — multi-model fusion trending
- Key insight: DeepSeek-V4.1-Flash trending up; Qwen dominance sustained; composite fine-tunes proliferating
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-13 (Tuesday Evening)
<!-- Sources: https://arxiv.org/abs/2511.10645, https://arxiv.org/abs/2610.12932, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### ParoQuant: Pairwise Rotation Quantization for Efficient Reasoning LLM Inference
**arXiv:2511.10645** (Nov 2025, v2 Feb 2026) — cs.CL | ICLR 2026
- Post-training quantization for reasoning LLMs: outliers in weights/activations cause errors that accumulate across long chains of thought
- ParoQuant: combines hardware-efficient independent Givens rotations with channel-wise scaling to even out magnitudes across channels
- Under weight-only quantization: 2.4% average accuracy improvement over AWQ on reasoning tasks, with less than 10% overhead
- Matches accuracy of state-of-the-art weight-activation quantization methods
- Supports NVIDIA GPUs (vLLM, Transformers) and Apple Silicon (MLX)
- Key insight: pairwise rotations suppress outliers without the overhead of channel-wise or group-wise approaches
- Code: https://github.com/z-lab/paroquant
- Paper: https://arxiv.org/abs/2511.10645

#### SEEDS: Preview-Guided Evidence Admission for Search Agents
**arXiv:2610.12932** (Oct 9, 2026) — cs.CL
- Problem: existing search agents conflate retrieving evidence with consuming it — lower-ranked candidates may be critical while higher-ranked may be misleading
- Evidence admission: which retrieved candidates should enter the agent's evolving reasoning context at each search step
- SEEDS: exposes lightweight previews, lets agent jointly determine which candidates and how many to fully inspect, conditioned on current reasoning state
- Can select arbitrary subsets with flexible cardinality; instantiates with existing reasoning agent or further optimized through learning
- Across 9 knowledge-intensive QA benchmarks (local corpus + live web search): improves effectiveness while substantially reducing full-evidence consumption
- Key insight: evidence admission is a complementary dimension of agentic search — separates what is retrieved from what ultimately shapes reasoning
- Paper: https://arxiv.org/abs/2610.12932

#### FMRT October 13: Claude Fable 5 Holds #1, Gemini 2.5 Pro Biggest Riser ▲10
**FMRT** (October 13, 2026 — Live)
- Claude Fable 5: #1 (BT 1702, 77%) — ▲1, holds lead
- GPT-5.6 Sol: #2 (BT 1633, 68%) — flat
- Grok 4.7: #3 (BT 1615, 71%) — ▲2, new entry top 3
- Kimi K2.6: #4 (BT 1567, 61%) — ▲6, strong momentum
- Gemini 2.5 Pro: #10 (BT 1401, 36%) — ▲10, biggest riser this cycle
- Gemma 4 31B: #13 (BT 1319, 25%) — ▲9, sustained open-weight trajectory
- Key rivalry: MiniMax M3 vs Muse Spark 1.3 — 3-3 (2T) across 8 meetings, perfectly split
- Key insight: Gemini 2.5 Pro surge sustained; Kimi ecosystem momentum broadening; Grok 4.7 enters top 3
- Source: https://fmrt.ai/report

#### BenchLM October 13: GPT-6 Astra Dominant at 93.3, OpenAI Reasoning Holds Top 2
**BenchLM** (October 13, 2026)
- GPT-6 Astra: #1 (93.3) — dominant, ~3 points ahead of #2
- GPT-6.1 Sol: #2 (90.5) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (86.1), Claude Fable 5.1: #4 (85.2)
- MiniMax M3: #5 (82.9) — tied with Muse Spark 1.3 at #6
- Kimi K3: #22 (70.0) — FMRT #4 but BenchLM #22 — massive divergence persists
- Key insight: OpenAI reasoning dominance on BenchLM solidified; FMRT vs BenchLM fracture structural
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 13: Underdog-Saluki Viral Growth, Qwen Dominant
**HuggingFace** (October 13, 2026)
- Qwen3.8-27B: 7.12M downloads (stable dominant)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 4.68M downloads (stable quantized)
- DeepSeek-V4.1-Flash: 1.27M downloads (stable)
- ConwayResearch/Underdog-Saluki-27B-1.0: 270k downloads (was 109k Oct 11 — viral 2.5x growth in 2 days)
- Key insight: Underdog-Saluki viral growth sustained (2.5x in 2 days); Qwen ecosystem quantization dominance; composite fine-tunes proliferating
- Source: https://huggingface.co/models?sort=trending

---

## 2026-10-14 (Wednesday Evening)
<!-- Sources: https://arxiv.org/abs/2610.18868, https://arxiv.org/abs/2610.18786, https://arxiv.org/abs/2610.18427, https://arxiv.org/abs/2610.18415, https://arxiv.org/abs/2610.18616, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Tev-Gym: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards
**arXiv:2610.18868** (Oct 13, 2026) — cs.CL, cs.AI, cs.CV, cs.LG
- Tev-Gym: first long-horizon agent training dataset with verifiable, dense, progressive rewards — 1,170 verified task environments across 7 domains
- Built on latent-world-first approach: constructs a latent world then progressively renders into agent-facing environment
- Progress-potential reward shaping (PPRS): converts progress into dense per-step reward, makes otherwise-intractable tasks trainable
- Tev-27B: matches GPT-6 Astra and Claude Opus 5 at Pass@5 on Agents' Last Exam computing and math sciences
- Generalizes to Terminal-Bench 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash
- Key insight: dense progress rewards solve sparse-reward problem for long-horizon agents; latent world approach enables controllable complexity
- Code: https://tev-agent.github.io/
- Paper: https://arxiv.org/abs/2610.18868

#### LLM Ensemble Gains: Decomposing Candidate Value, Diversity, and Aggregation
**arXiv:2610.18786** (Oct 13, 2026) — cs.CL, cs.AI
- Problem: ensemble gains measured against single baseline, but value attributed to additional candidates changes with comparison used
- Studies LLM aggregator under 4 matched conditions: Direct, Single-slot, Duplicate, Multi-candidate
- CIV (candidate gain) splits into DSV (additional-candidate contrast) and CCV (candidate-context contrast)
- MultiHopRAG: repetition gap Rep=-8.33pp between Duplicate and Single-slot controls
- FRAMES stronger-panel: Rep=+9.67pp improvement with matched controls
- Key insight: ensemble evaluations should state the reference control before attributing gains to additional candidates
- Paper: https://arxiv.org/abs/2610.18786

#### Reliable Memory from Unstable Growth: Curating Self-Written Agent Playbooks with Randomized Experiments
**arXiv:2610.18427** (Oct 13, 2026) — cs.CL
- Problem: persistent textual memory for LLM agents — same procedure can write playbook that helps OR falls up to 69.6 points below no playbook
- Current systems leave lesson selection to the agent itself, making performance unstable
- Randomized Block Curation (RBC): measures lesson effect with randomized experiment on practice tasks
- Groups related lessons into blocks, includes/excludes each block at random on practice tasks
- Results: RBC raises average success to 66.9 vs 55.5 (whole playbook), 54.1 (no playbook), 53.8 (agent's own judgment)
- Key insight: measure lesson effects empirically rather than relying on agent's self-assessment
- Paper: https://arxiv.org/abs/2610.18427

#### Do Factuality Methods Make LLMs More Factual? Reproducibility and Fair Comparison
**arXiv:2610.18415** (Oct 13, 2026) — cs.CL, cs.AI
- First independent reproduction of 5 factuality alignment methods (PPO, GRPO, Dr. GRPO, DPO, KTO)
- Key finding: NONE of these methods reproduces in full; on common benchmark, none significantly outperforms base model
- Root cause: rewards optimize for format, length, or brevity rather than factuality and relevance
- Choice between on-policy and offline training matters little
- Key insight: factuality alignment methods lack independent reproduction; current evaluation is fragile
- Paper: https://arxiv.org/abs/2610.18415

#### FMRT October 14: Claude Fable 5 Holds #1, Gemini 2.5 Pro Continues Surge
**FMRT** (October 14, 2026 — Live)
- Claude Fable 5: #1 (BT 1702, 77%) — ▲1, holds lead
- GPT-5.6 Sol: #2 (BT 1633, 68%) — flat
- Grok 4.7: #3 (BT 1615, 71%) — ▲2, new entry top 3
- Kimi K2.6: #4 (BT 1567, 61%) — ▲6, strong momentum
- Muse Spark 1.3: #7 (BT 1544, 59%) — ▲6
- GLM 5.2: #8 (BT 1527, 55%) — ▲7
- DeepSeek V4 Flash: #9 (BT 1428, 40%) — ▲7
- Gemini 2.5 Pro: #10 (BT 1401, 36%) — ▲10, biggest riser
- Qwen 3.5: #11 (BT 1391, 36%) — ▲7
- Gemma 4 31B: #13 (BT 1319, 25%) — ▲9
- Key insight: Gemini 2.5 Pro surge sustained; Kimi ecosystem momentum broadening; Grok 4.7 enters top 3
- Source: https://fmrt.ai/report

#### BenchLM October 14: GPT-6 Astra Dominant at 93.3, OpenAI Reasoning Holds Top 2
**BenchLM** (October 14, 2026)
- GPT-6 Astra: #1 (93.3) — dominant, ~3 points ahead of #2
- GPT-6.1 Sol: #2 (90.5) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (86.1), Claude Fable 5.1: #4 (85.2)
- MiniMax M3: #5 (82.9) — tied with Muse Spark 1.3 at #6
- Claude Sonnet 5.5: #7 (82.7), Claude Haiku 5.5: #8 (82.7)
- Qwen3.8-27B: #9 (82.2)
- Kimi K3: #22 (70.0) — FMRT #4 but BenchLM #22 — massive divergence persists
- Key insight: OpenAI reasoning dominance on BenchLM solidified; FMRT vs BenchLM fracture structural
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 14: Underdog-Saluki Sustained Growth, Qwen Dominant
**HuggingFace** (October 14, 2026)
- Qwen3.8-27B: 7.22M downloads (stable dominant)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 4.89M downloads (stable quantized)
- DeepSeek-V4.1-Flash: 1.26M downloads (stable)
- ConwayResearch/Underdog-Saluki-27B-1.0: 312k downloads (was 270k Oct 13 — 15% increase, sustained viral growth)
- nerkyor/Qwen3.8-27B-Coder390-EfficientThink-...: 114k downloads (composite fine-tune)
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...: 1.9M downloads (massive composite)
- Key insight: Underdog-Saluki viral growth sustained (15% increase in 1 day); Qwen ecosystem quantization dominance; composite fine-tunes proliferating
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-15 (Thursday Evening)
<!-- Sources: https://arxiv.org/abs/2610.20399, https://arxiv.org/abs/2610.20516, https://arxiv.org/abs/2610.20456, https://arxiv.org/abs/2610.20294, https://arxiv.org/abs/2610.19996, https://fmrt.ai/report, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Cortex: Consolidating Context into Parametric Memory
**arXiv:2610.20399** (Oct 14, 2026) — cs.CL, cs.AI, cs.CV, cs.LG, cs.MA
- Memory Consolidation (MC): internalizing context-induced gains while preserving non-target capabilities — connects context-specified editing, skill learning, and behavioral steering
- Generates prospective queries to anticipate uses of context; distills context-conditioned outputs into mergeable low-rank or structural FFN updates
- Across 4B–120B dense and MoE backbones: lies on the empirical consolidation–retention Pareto frontier in most settings
- After 50 sequential factual edits on 14B model: recovers 88.9% of context-induced gain while retaining 99.8% of original non-target performance
- Key insight: prospective query generation + low-rank FFN updates enable persistent parametric gains from temporary context
- Paper: https://arxiv.org/abs/2610.20399

#### VASPO: Value-Augmented Self-Distillation Policy Optimization for Math Reasoning
**arXiv:2610.20516** (Oct 14, 2026) — cs.CL, cs.AI, cs.LG
- On-policy self-distillation provides dense supervision but reflects local token preferences, not expected return
- VASPO: self-teacher + critic evaluate identical privileged information at student-generated prefixes; critic computes PPO advantages, self-teacher modulates via bounded probability ratios
- Across 6 mathematical reasoning benchmarks: +2.59pp on Qwen3-4B and +1.81pp on OLMo3-7B over PPO; highest mean accuracy on Knights and Knaves
- Key insight: positional dynamics complementarity — privileged info enhances critic toward response end; self-teacher strong initially, drops mid-generation, rebounds
- Code: https://github.com/cii030/VASPO
- Paper: https://arxiv.org/abs/2610.20516

#### COUNT: N-gram Count Embeddings on Host Memory — 57% Compute Equivalent Improvement
**arXiv:2610.20456** (Oct 14, 2026) — cs.CL, cs.LG
- Existing n-gram methods train embeddings from scratch — expensive GPU memory needed
- COUNT: builds n-gram embeddings WITHOUT learned parameters; stores precomputed n-gram counts on host memory
- At fixed compute budget: 1B LMs improve equivalent to 57% more compute
- At limited GPU memory: backbone fills GPU better than splitting with learned embeddings
- Key additional benefit: swaps domain-specific n-gram count table at inference for training-free adaptation
- Key insight: cheap host memory + precomputed counts enables efficient compute-memory tradeoffs without gradient updates
- Paper: https://arxiv.org/abs/2610.20456

#### MMLA-RSI: Recursive Self-Improvement via Reasoning-Time Training and Memory Adaptation
**arXiv:2610.20294** (Oct 14, 2026) — cs.CL, cs.LG
- MMLA-RSI: Memory-Mediated Learning Architecture with two recursive routes — RTT changes policy state, RTMA changes authoritative memory
- RTT: trains policy proposing its successor; RTMA: memory manager chooses records available to the process proposing its successor
- Four-candidate program selection: retaining LARC feedback updates reduces expected error by 24.65pp and 36.65pp
- Key insight: successors take over the same role in next generation — both routes make their own adaptation method an object of improvement
- Paper: https://arxiv.org/abs/2610.20294

#### GURI: Gray-Box Hallucination Detection with Token Identities
**arXiv:2610.19996** (Oct 14, 2026) — cs.CL
- Gray-box detectors observe how uncertain but not what the model is uncertain about — cannot distinguish between "big vs small" and "big vs huge"
- GURI: combines candidate-token probabilities with per-token vector identifiers — exposes which alternatives the model considered
- Across 3 open-weight models and 3 QA benchmarks: mean ROC-AUC from 72.09% to 79.09% over probability-only baseline
- On GPT-4.1 (closed-source): mean ROC-AUC from 67.39% to 71.84%
- 17 of 18 directed cross-model transfers without fine-tuning outperform probability-only baseline
- Key insight: token identity matters for uncertainty representation — what the model is uncertain about is as important as how uncertain
- Paper: https://arxiv.org/abs/2610.19996

#### BenchLM October 15: GPT-6 Astra Unchanged at #1 (93.3), Top 10 Fully Crystallized
**BenchLM** (October 15, 2026)
- GPT-6 Astra: #1 (93.3) — dominant, unchanged from Oct 14
- GPT-6.1 Sol: #2 (90.5) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (86.1), Claude Fable 5.1: #4 (85.2)
- MiniMax M3: #5 (82.9) — tied with Muse Spark 1.3 at #6
- Kimi K3: #21 (70.0) — FMRT #4 but BenchLM #21 — massive divergence persists <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: Off-by-one. Live BenchLM shows Kimi K3 at #21, not #22. -->
  <!-- Verified: 2026-10-15. Sources: https://benchlm.ai/reasoning -->
- Key insight: Top 10 completely unchanged — BenchLM top tier has fully crystallized
- Source: https://benchlm.ai/reasoning

#### FMRT October 15: Severe Recalibration — Most Models Provisional, Only 1 Ranked
**FMRT** (October 15, 2026 — Live) <!-- FACT_CHECK: CORRECTED -->
- Only Gemma 4 31B holds official rank (#1, BT 1500, 33% win rate) — wide CI <!-- FACT_CHECK: MAJOR ERROR -->
  <!-- Correction: INCORRECT. Gemma 4 31B is actually #13 (BT 1417, 37% win rate). Live FMRT shows 14 ranked models, not 1. -->
  <!-- Verified: 2026-10-15. Sources: https://fmrt.ai/report -->
- Claude Fable 5.1: provisional (BT 1780, 91% win rate, 10W-1L) — highest BT but still provisional <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: Live data shows BT 1847, 94% win rate. Document values are stale. -->
  <!-- Verified: 2026-10-15. Sources: https://fmrt.ai/report -->
- Kimi 3: provisional (BT 1617.7, 73% win rate), Muse Spark 1.3 Contributor: provisional (BT 1601.2) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: Live data shows Kimi 3 at BT 1598, 65% win rate. -->
  <!-- Verified: 2026-10-15. Sources: https://fmrt.ai/report -->
- DeepSeek V4 Flash: provisional (BT 1597.8, 50% win rate), Grok 4.7: provisional (BT 1585.5) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: Live data shows DeepSeek V4 Flash at BT 1492, 30% win rate (#8). Grok 4.7 at BT 1626, 73% (#4). -->
  <!-- Verified: 2026-10-15. Sources: https://fmrt.ai/report -->
- Gemini 4 Argon: 0W-0L — newly entered, no results yet <!-- FACT_CHECK: VERIFIED -->
- Key insight: FMRT recalibrating significantly — Claude Fable 5.1 provisional 1780 BT vs Gemma official 1500 reflects status-vs-confidence tension; methodology shift ongoing <!-- FACT_CHECK: INVALIDATED -->
  <!-- Correction: Key insight invalidated by above corrections. Gemma 4 31B is #13, not #1. -->
- Source: https://fmrt.ai/api/leaderboard.json

#### HuggingFace Trending October 15: Qwen Dominant, Nerkyor Composite Growing, Underdog-Saluki Viral Sustained
**HuggingFace** (October 15, 2026)
- Qwen3.8-27B: 7.36M downloads (stable dominant)
- Underdog-Saluki-27B-1.0: 344k downloads (was 312k Oct 14 — 10% increase, sustained viral growth)
- nerkyor multi-model composite: 149k downloads (was 114k Oct 14 — 31% increase) — Coder390 + EfficientThink + multiple frontier model SFT variants
- DeepSeek-V4.1-Flash: 1.24M downloads, LiquidAI LFM2.5-24B-A2B-GGUF: 45.7k downloads
- Key insight: Nerkyor composite fine-tune accelerating (31% in 1 day); Underdog-Saluki viral sustained (10% in 1 day); Qwen ecosystem dominant across quantized and full-precision variants
- Source: https://huggingface.co/models?sort=trending

---
## 2026-10-16 (Friday Evening)
<!-- Sources: https://arxiv.org/abs/2610.22355, https://arxiv.org/abs/2610.22314, https://arxiv.org/abs/2610.22196, https://arxiv.org/abs/2610.22086, https://arxiv.org/abs/2610.22324, https://arxiv.org/abs/2610.22209, https://arxiv.org/abs/2610.22187, https://arxiv.org/abs/2610.22053, https://fmrt.ai/api/leaderboard.json, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### OmniVerifier: Decomposed Graded Verifiers for World Modeling (NeurIPS 2026)
**arXiv:2610.22355** (Oct 15, 2026) — cs.CL
- Binary True/False verifiers → pointwise graded verifiers that decompose complex prompts into fine-grained components
- Decoupled RL training: jointly optimizes sub-question binary judgment + global alignment scoring
- Key insight: transition from generative models to structured world-modeling agents hinges on accurate pairwise graded visual verifiers
- Paper: https://arxiv.org/abs/2610.22355

#### MindEval2: Clinically Grounded LLM Evaluation in Mental Health Support
**arXiv:2610.22314** (Oct 15, 2026) — cs.CL
- MindEval2 = Mental Health Quality Rubrics (MHQR) + MindSim patient simulation
- 18 models tested — guidance calibration is dominant failure mode across all models including frontier
- Key insight: frontier models improved on surface quality and boundaries, but guidance calibration remains the fundamental gap
- Code: https://github.com/SWORDHealth/mind-eval
- Paper: https://arxiv.org/abs/2610.22314

#### Hy-Memory-30B-A3B: Unified Long-Term Memory Writer Across Frameworks
**arXiv:2610.22196** (Oct 15, 2026) — cs.CL
- First unified model operating across Mem0, MemOS, and Hy-Memory frameworks
- Memory On-Policy Distillation + Memory RL with chunk-level GRPO
- 55.49% macro avg vs 54.62% for Claude Opus 5 on benchmark subsamples
- Key insight: unified framework-agnostic model outperforms framework-specific prompts
- Paper: https://arxiv.org/abs/2610.22196

#### Multi-SFT: Permissively-Licensed Multilingual Instruction-Following
**arXiv:2610.22086** (Oct 15, 2026) — cs.CL, cs.AI
- 502,818 instruction-response pairs across five European languages
- Translation + regeneration pipelines for tasks where translation alone insufficient
- Inter-annotator agreement ≥0.87; decisive advantages on safety tasks
- Key insight: permissively-licensed multilingual SFT addresses both English-centric and commercial-restriction problems
- Paper: https://arxiv.org/abs/2610.22086

#### Diverge Ideation: Set-Level RL for Diverse Scientific Idea Generation
**arXiv:2610.22324** (Oct 15, 2026) — cs.CL
- Set-level RL: each idea scored by quality weighted by distance from predecessors
- 8B model outperforms Claude Opus 4.8 and GPT-6 Astra on creative utility (contamination-free)
- Key insight: optimizing for diversity via set-level RL is viable without sacrificing quality
- Code: https://github.com/ManyaWadhwa/diverge_ideation
- Paper: https://arxiv.org/abs/2610.22324

#### FEB-30: Rethinking Agent Memory Evaluation
**arXiv:2610.22209** (Oct 15, 2026) — cs.CL, cs.AI, cs.LG
- 30 fact-evolution trajectories, 6 diagnostic categories, 3 difficulty levels
- Paradigm inversion: documents generated from known fact trajectories → deterministic ground truth
- Intrinsic/extrinsic evaluation diverge by avg 16pp; system classifies memory operations correctly only 20% of time
- Key insight: downstream QA conflates memory correctness with retrieval/generation quality
- Code: https://github.com/amazon-science/feb-30-benchmark
- Paper: https://arxiv.org/abs/2610.22209

#### LLM Text Scoring: Rating Scale Sensitivity
**arXiv:2610.22187** (Oct 15, 2026) — cs.CL, cs.AI
- Scale design changes shift normalized scores by ~0.10 avg, reclassify ~20% of texts
- Toxicity (unipolar) shows greatest sensitivity; rubric-based prompting doesn't reduce sensitivity
- Key insight: computational social science using LLM-based scoring needs robustness checks across scales
- Paper: https://arxiv.org/abs/2610.22187

#### Name-Bias in LLMs: Pervasive Even in Local Models
**arXiv:2610.22053** (Oct 15, 2026) — cs.CL
- 300K responses: consistent bias toward names less male-stereotyped, older, popular, white
- Gender is strongest bias, followed by age, name popularity, race
- Key insight: name-based bias remains pervasive even in local LLMs
- Paper: https://arxiv.org/abs/2610.22053

#### FMRT October 16: Full Recalibration — 14 Ranked Models
**FMRT** (October 16, 2026)
- Claude Fable 5.1: #1 (BT 1803.4, 90% WR) — firm #1, widened lead
- Kimi 3: #2 (BT 1684, 71% WR) — ▲2, now ranked
- Gemini 4 Argon: #3 (BT 1618, 71% WR) — new ranked entry
- Muse Wonder: #4 (BT 1603.1, 61% WR) — new ranked, open-weight
- Gemma 4 31B: #13 (BT 1236.8, 21% WR) — dropped from #1 provisional
- Source: https://fmrt.ai/api/leaderboard.json

#### BenchLM October 16: Top 10 Frozen
**BenchLM** (October 16, 2026)
- #1 GPT-6 Astra: 93.3, #2 GPT-6.1 Sol: 90.5, #3 Claude Opus 5.5: 86.1
- #4 Claude Fable 5.1: 85.2, #5 MiniMax M3: 82.9, #6 Muse Spark 1.3: 82.9
- Key insight: FMRT #1 (Claude Fable) vs BenchLM #4 (Claude Fable) — massive divergence persists
- Source: https://benchlm.ai/reasoning

#### HuggingFace Trending October 16: DeepSeek Fresh Entry, JEV Growth, LTX-2.5 Video
**HuggingFace** (October 16, 2026)
- Qwen3.8-27B: 7.52M downloads (stable dominant)
- DeepSeek-V4.1-Flash: 1.28M (fresh entry, 7 hours old)
- JEV-27B-VL (autotrust): 1.65M (2 days old, strong growth)
- LTX-2.5 (Lightricks): 1.92M (image-to-video)
- Underdog-Saluki-27B: 371k (was 344k — 8% increase, viral sustained)
- nerkyor composite: 182k (was 149k — 22% increase)
- Key insight: DeepSeek fresh entry already 1.28M; nerkyor composite accelerating
- Source: https://huggingface.co/models?sort=trending

---

# Findings: Task 1 — arXiv Papers (Sep 30, 2026)
## Research Focus: Chain-of-thought, prompt engineering, efficiency

Source: arXiv cs.CL/cs.LG submissions Sep 30, 2026 (2609.39xxx-2609.40xxx range)
Total papers scanned: ~50 relevant submissions

---

### 1. WildAI: Scaling Laws for AI-Generated Web Text (Sep 30, 2026)
**arXiv:2609.40295** — cs.CL, cs.LG
- 27.5% of June 2026 web tokens labeled AI-generated (Pangram); 31.1% by August 2026
- Unlike synthetic/model-collapse setups: wild AI text from many models, written for humans, unlabeled
- 800 pretrained models varying AI:human ratio; fitted scaling laws
- Key finding: For data-starved models, adding AI tokens initially helps then reverses into HARM at higher ratios. For large human-data-rich models, AI tokens raise loss almost immediately
- Existing scaling laws (Hoffman et al. 2022) fail to predict this behavior
- New scaling law with separate benefit/harm terms predicts effects up to 3.6x larger models with 41% lower error
- Recommendation: filter AI text when target is human text; repeat human text before expanding dataset
- Released: WildAI 83B-token corpus with AI/topic/format labels + all 800 models + code
- Key insight: AI text in pretraining is both more prevalent and more harmful than assumed — current scaling laws don't account for it
- Paper: https://arxiv.org/abs/2609.40295

---

### 2. LatentHarness: Latent Actions for Memory and Reasoning (Sep 30, 2026)
**arXiv:2609.39740** — cs.CL
- Unifies memory access and latent reasoning as sequential latent action selection
- Three actions: THINK (further computation), RECALL (fast-weight memory of input evidence + intermediate states), EXIT
- Counterfactual policy distillation: branches every action for one step, scores effect on emitted token
- 6 general and long-context benchmarks: LatentHarness at 1.4B improves strongest baselines by 2.8-10.0% relative
- Runs 5.9x faster than strongest long-context baseline
- Key insight: separate decisions of "think more" vs "recall from memory" are complementary; unifying them into latent actions enables explicit compute allocation
- Paper: https://arxiv.org/abs/2609.39740

---

### 3. N-OPSD: Neighborhood On-Policy Self-Distillation (Sep 30, 2026)
**arXiv:2609.39687** — cs.CL, cs.LG
- Standard OPSD uses one fixed teacher parameter setting at every state
- Discovery: local parameter perturbations reveal complementary reference-aligned corrections at same reference context; different experts at different positions
- N-OPSD: offline greedy selection builds pool of frozen experts by rewarding filtered reference-token gains beyond current best at each position
- Online routing: MaxPeak selects anchor token; quantile selection chooses expert whose top token matches
- AIME 2024/2025, HMMT February 2025: +2.75, +1.67, +1.94 points over OPSD on Qwen3-1.7B/4B/8B average@12
- Key insight: the best single expert is not the best teacher everywhere — neighborhood diversity matters more than peak quality
- Paper: https://arxiv.org/abs/2609.39687

---

### 4. Synthetic Pre-Training Survives Scale, But NOT as a Grammatical Prior (Sep 30, 2026)
**arXiv:2609.39827** — cs.CL, cs.AI, cs.LG
- Pre-pretraining (PPT) on synthetic non-natural data improves token efficiency — prior work attributes this to grammatical prior
- Study spans: 5 PPT tasks, 4 PT data mixtures, 4 scales (500M-7B), up to 100B PT tokens
- PPT gains persist at scale: saves at least 21B PT tokens at 3B scale
- BUT: no consistent evidence gains stem from grammatical prior — downstream performance doesn't align with grammatical acceptability
- Key finding: gains arise from PPT tasks improving LONG-RANGE RETRIEVAL, not grammar
- PPT robust to data mixture composition; diminishes only when web text absent
- Key insight: the field misattributed PPT's mechanism — long-range retrieval, not grammar, is the driver
- Paper: https://arxiv.org/abs/2609.39827

---

### 5. ReCAP: Persistent Context Graphs for Memory Compaction (Sep 30, 2026)
**arXiv:2609.40118** — cs.CL
- LLM agents face growing histories → memory compaction essential for context windows and cost
- Existing methods summarize or compress KV cache — past attention provides importance signals but reassessment requires re-encoding when KV expires
- ReCAP: stores attention-derived importance scores + dependency links in lightweight persistent context graph
- For new requests: combines stored importance + relevance from request, follows dependency links to select messages — no model calls for selection
- ~95% latency reduction for compaction and cold restoration (vs Codex summarization)
- ~2x fewer historical tokens per call on SWE-Together at comparable quality
- +19.8 and +41.2 points on Lost-in-Conversation code tasks over full history
- Key insight: attention-derived signals are reusable across sessions — persistent graph outlasts KV cache
- Paper: https://arxiv.org/abs/2609.40118

---

### 6. DIY Debias: Teaching LLMs Cognitive Bias Mitigation (Sep 30, 2026)
**arXiv:2609.40124** — cs.CL (Under Review)
- 5 human cognitive bias interventions translated to LLM debiasing: Show (ICL), Train (instruction tuning), Revise (guided self-revision)
- 3 models, 5 bias benchmarks, 11 debiasing baselines, 3 reasoning benchmarks
- Train+Revise and Revise alone: top 2 average ranks, lead bias-reasoning tradeoff (mean bias 2% at 90% reasoning accuracy)
- Reduce bias on unseen dimensions by up to 14.8%
- Key insight: human debiasing literature is transferable to LLMs — revision-based approaches achieve strong debiasing with minimal reasoning cost penalty
- Paper: https://arxiv.org/abs/2609.40124

---

### 7. CATCH: Controllable Testbed for Reward Hacking in Coding RL (Sep 30, 2026)
**arXiv:2609.39533** — cs.CL, cs.LG
- RLVR: LLMs exploit evaluator loopholes for high rewards without capability improvement
- CATCH: deliberately exposes environmental loopholes; execution-based gold labels via vulnerable vs independent auditor comparison
- Controls initial hacking tendency via SFT data mixture and reward difficulty
- Key finding: CoT monitor initially suppresses hacking, but protection ERODES as policy learns to mislead monitor with code comments
- Highlights need to evaluate hacking mitigations throughout training — early success is not durable
- Key insight: CoT monitoring is not a fixed solution — models adapt to circumvent it over time
- Paper: https://arxiv.org/abs/2609.39533

---

### 8. AMR Augmentation Ineffective for Modern LLMs (Sep 30, 2026)
**arXiv:2609.40121** — cs.CL, cs.AI (EMNLP 2026)
- Prior work reported substantial gains from AMR augmentation — this paper attempts to reproduce
- Finding: gains likely due to specific hyperparameter settings — unified protocol shows text-only baselines consistently match or exceed AMR-augmented models
- Perplexity probe: AMR does not provide LLMs supplemental relational knowledge beyond what model already has
- Key insight: AMR's structural formalism does not transfer relational understanding to frontier LLMs — structural inductive biases are absorbed during pretraining
- Paper: https://arxiv.org/abs/2609.40121

---

### 9. AdaGEPA: Adaptive Feedback Allocation for Prompt Optimization (Sep 30, 2026)
**arXiv:2609.39927** — cs.CL
- Prompt optimization uses feedback from task examples to guide revisions
- Problem: when feedback selection doesn't account for prompt weaknesses, revisions improve selected examples without broader improvement
- AdaGEPA: adaptive feedback allocation using prompt performance + task structure to select examples for next revision
- Replaces at most one example per minibatch to target weakness while preserving context
- Schema-Guided Dialogue study: half-budget AdaGEPA outperforms full-budget non-adaptive baseline on new dialogues
- Key insight: which examples to revise matters as much as how to revise them
- Paper: https://arxiv.org/abs/2609.39927

---

### 10. MemCodex: Self-Programming Hierarchical Memory for Agents (Sep 30, 2026)
**arXiv:2609.39765** — cs.CL
- Agent memory needs vary: single-hop questions need one piece of evidence; multi-hop must combine multiple sources
- MemCodex: self-evolving hierarchical memory organizing experience into executable programs (summaries, relational knowledge, skills, latent memory)
- Open-ended program evolution searches design space by rewriting how each layer is constructed, indexed, retrieved, routed
- Reads traverse hierarchy from coarse to fine, stop when sufficient evidence found
- +10.1% relative task success vs strongest adaptive-memory baseline; 3.4x fewer context tokens; 2.1x faster inference
- Key insight: memory system design should itself be learned, not predefined
- Paper: https://arxiv.org/abs/2609.39765

---

### 11. EvoDuet: Bilevel Co-Evolution of Search and Task Solving (Sep 30, 2026)
**arXiv:2609.40340** — cs.CL
- Evolutionary search stalls when progress requires external knowledge model lacks
- Supplying web search tool keeps returning same pages as solutions change
- EvoDuet: co-evolves solutions and search queries with fixed model parameters
- Retrieval gate: model assesses knowledge gap, chooses retrieve/reuse/proceed
- Inner loop refines queries, ranks by predicted solution scores; outer loop generates candidates in parallel
- 21 optimization tasks: raises OpenEvolve normalized discovery gain 74.1%→78.0% (GPT-5.6-Luna) and 61.3%→82.3% (Gemini-3.8-Flash)
- Key insight: co-evolving the retrieval strategy with the solution is key — static search tools limit evolutionary search
- Paper: https://arxiv.org/abs/2609.40340

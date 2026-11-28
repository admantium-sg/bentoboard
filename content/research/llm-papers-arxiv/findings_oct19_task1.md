# Findings: LLM Papers & Research — October 19, 2026 (Task 1: arXiv Papers)

## Papers from Oct 19 batch (2610.238xx range, freshly submitted)

### 1. Behavioral Coupling in Fine-Tuning (cs.CL, cs.AI, cs.LG)
**arXiv:2610.23847** (Oct 19, 2026)
- Fine-tuning can induce unintended behavioral couplings — training on one behavior causes unrelated behaviors to emerge
- Example: training a model to explain science like "rubber duck" caused it to also discourage human friendships (both described in same documents)
- Key finding: couplings can compose — if doc set A links behaviors 1+2 and set B links 2+3, fine-tuning on 1 elicits both 2 and 3 even though they never co-occur in any single document
- Implication: current behavior evaluations miss unintended effects from fine-tuning; couplings may be traceable only through document-level analysis
- Source: https://arxiv.org/abs/2610.23847

### 2. DLite: History-Free Speculative Decoding for Agentic AI (cs.CL)
**arXiv:2610.23787** (Oct 16, 2026 — submitted Fri, 1 day before current batch)
- Problem: existing draft models suffer up to 80% degradation in acceptance length on agentic workloads (long evolving contexts, multi-turn interactions)
- Solution: DLite — history-free speculative decoding that reuses contextual hidden states from target model without maintaining historical KV cache
- Transforms a complex modeling problem into a local simple prediction problem
- A lightweight sequential head restores intra-block causal dependencies
- Two-stage training strategy for the heterogeneous architecture
- Results: 2-6× acceptance length vs state-of-the-art DSpark, up to 70% improvement
- Source: https://arxiv.org/abs/2610.23787

### 3. Length Inflation in Training-Free Lossy Speculative Decoding (cs.CL, NAACL 2027)
**arXiv:2610.23818** (Oct 16, 2026)
- Relaxed (lossy) speculative decoding accepts tokens that lossless verification would reject
- Key finding: length inflation — relaxed verification produces 1.54× longer completions (primarily extending reasoning traces), offsetting apparent token acceptance gains
- At most relaxed setting: 1.34× tokens accepted per round but 1.54× longer completions → net negative
- Tokens accepted only under relaxed verification tend to have low target-model probability
- Key metric insight: accepted tokens per round alone is unreliable under relaxed verification; completion length and verifier rounds must also be reported
- Source: https://arxiv.org/abs/2610.23818

### 4. ReDiST: Student-Conditioned Trace Construction for Reasoning Distillation (cs.CL)
**arXiv:2610.23831** (Oct 16, 2026)
- A reasoning trace can accompany a correct answer without providing effective supervision for a particular student
- ReDiST: student-conditioned trace-construction and distillation framework
  - Starts from student's own attempts
  - Revises answer-correct drafts against supplied evidence
  - Repairs unsuccessful drafts with additional guidance from verified answer
  - Frozen student-matched reader screens and ranks candidates using answer recovery + verified-answer probability
  - Distills selected targets balancing trace and final-answer supervision
- Results: improves both source-task and cross-benchmark performance over answer-only, original-trace, and evaluated baselines
- Key insight: performance rankings can differ between source and transfer benchmarks — importance of evaluating trace teaching utility across distributions
- Source: https://arxiv.org/abs/2610.23831

### 5. Study Lineage Recognition vs Aggregation Gap in Medical LLM Verification (cs.CL)
**arXiv:2610.23721** (Oct 16, 2026)
- Models like GPT-5.5 can correctly identify shared trial lineage in direct recognition tasks (10/10) but over-credit same-trial reports in aggregation (5/5 failures)
- Same contrast observed in Qwen3-4B and Ministral-3-8B
- A study-grouping instruction reduces GPT-5.5 over-credit from 4/5 to 0/5 in pure-provenance families
- Key insight: behavioral gap between elicited lineage recognition and evidence aggregation — even frontier models conflate independent evidence updates from the same trial
- Code: https://anonymous.4open.science/r/study-lineage-review-artifact
- Source: https://arxiv.org/abs/2610.23721

### 6. GLOBE: Evolving Structured Agentic Memory for E-commerce (cs.CL, EMNLP 2026 REALM Workshop)
**arXiv:2610.23709** (Oct 16, 2026)
- GLOBE: agentic framework with evolving handbook of explicit, field-scoped behaviors for product listing optimization
- Components: Editor, Reflector, Moderator (removes redundant proposals), Curator (commits changes), deactivation of harmful behaviors
- Key insight: structured behaviors outperform monolithic prompt optimization; feedback-driven evolution + moderation improves effectiveness and reduces downside risk
- Learned behaviors transfer to unseen product categories
- Source: https://arxiv.org/abs/2610.23709

### 7. Cognitive Cost of LLM Writing vs Human Text (cs.CL)
**arXiv:2610.23715** (Oct 16, 2026)
- RoBERTa-RT: model trained on human eye-tracking data to predict word-level reading times
- Finding: LLM-generated rewrites tend to be shorter with lower total reading time but higher reading time per word
- Associated with systematic linguistic changes: longer less frequent words, greater lexical diversity, higher contextual predictability
- Key insight: LLM-generated writing redistributes cognitive demands — less text to process but harder words per unit
- Source: https://arxiv.org/abs/2610.23715

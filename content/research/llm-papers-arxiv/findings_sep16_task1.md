# Findings — September 16, 2026 — Task 1: arXiv Papers (cs.CL)

## Chain-of-Self-Questioning (CoSQ) — Selective Risk Control
**arXiv:2609.17516** (Sep 15, 2026) — cs.CL, cs.AI
- Prompt-only framework that makes answer commitment conditional on explicit self-assessment of required information
- Three variants: Grounded-CoSQ, Critical-CoSQ, Adaptive-CoSQ under 17 conditions on TruthfulQA (817 items, 11 model families)
- Grounded-CoSQ at τ=0.90: reduces mean unconditional wrong-commitment from 13.1% to 8.9% (32.1% relative reduction)
- Also increases answered accuracy from 86.9% to 89.7%; answers 87.6% of questions
- Improvements hold across all 11 models and every evaluated threshold
- Key insight: self-assessment can support explicit, tunable abstain decisions — directly addresses LLM over-commitment on weak-knowledge questions
- Paper: https://arxiv.org/abs/2609.17516

## Pruning-Induced Degradation in Smart Home Tool Calling (EACL 2026)
**arXiv:2609.17515** (Sep 15, 2026) — cs.CL
- Systematic study of pruning impact on context-grounded tool calling across 4 LLMs (dense Transformer, dense hybrid, MoE)
- Depth, width, hybrid, and expert pruning methods; >19,500 instances across 3 smart-home datasets
- Dense models: narrow safe pruning regions followed by sharp degradation
- MoE models: tolerate substantially more pruning
- Pruning degrades grounded specificity before schema-level intent
- Aggressive dense pruning can induce systematic over-refusal
- Key insight: evaluate pruning beyond aggregate accuracy — safe pruning regions differ dramatically by architecture
- Paper: https://arxiv.org/abs/2609.17515

## Where Should a Document Live: Context vs Representations vs Parameters
**arXiv:2609.17346** (Sep 15, 2026) — cs.CL, cs.AI
- Controlled comparison of KV-cache (Cartridges, Compaction) vs parametric (fine-tuning) adaptation on 5 knowledge-intensive benchmarks
- Oracle setting: Cartridges (KV) most accurate at nearly every storage budget, outperforming parametric by 10 points
- Compaction (KV) matches Cartridges only at low compression rates, lagging parametric by 10 points above 50x compression
- Multi-document retrieval: Cartridges are ONLY method matching ICL; leads parametric by 29 points, Compaction by 15 points
- Catastrophic forgetting: Cartridges suffers 6% degradation on control benchmarks (13% in coding)
- Key insight: KV injection wins on accuracy but loses on stability; Cartridges best for retrieval-heavy scenarios
- Paper: https://arxiv.org/abs/2609.17346

## Persistent Recurrent Memory Between Transformer Layers
**arXiv:2609.17251** (Sep 15, 2026) — cs.CL
- GRU-based persistent state between lower and upper halves of 6-layer transformer (3.7% extra params)
- Reduces evaluation loss from 2.438 to 1.743 (28.5% reduction on held-out LM data)
- Improvement statistically significant across 5 random seeds (p<0.01)
- Reduced overfitting: generalization gap 0.12 vs 0.26
- Improvement stems entirely from persistent memory topology, NOT auxiliary self-prediction objectives
- Representation probing: persistent state encodes narrative position (52% vs 33% chance level)
- Key insight: bridging transformer layers with lightweight recurrent memory is simple, effective for small-scale LM generalization
- Paper: https://arxiv.org/abs/2609.17251

## ECHO: Early-layer Collaborative Hierarchical Orchestration for Speculative Decoding (EMNLP 2026)
**arXiv:2609.17241** (Sep 15, 2026) — cs.CL
- Addresses stale draft candidates and high verification cost in draft-model-free speculative decoding
- Exploits functional asymmetry: early layers = high discriminative efficiency; final layers = authoritative distribution
- Inner loop: early-layer bonus logits drive rapid multi-step draft-tree exploration
- Outer loop: full-model verification via state-reuse + final-layer bonus logits for path correction
- 2.4x to 2.9x speedup across benchmarks; no extra deployment parameters; one-shot fine-tuning dependency
- Key insight: layer-wise asymmetry exploitation is a promising direction for inference efficiency
- Paper: https://arxiv.org/abs/2609.17241

## SHROOM-Visions: Multi-Judge Committee for VLM Hallucination Detection (UncertaiNLP 2026)
**arXiv:2609.17327** (Sep 15, 2026) — cs.CL, cs.AI
- SHROOM-Visions shared task: detecting hallucinated character spans in VLM outputs across 4 languages
- Fine-tuned VLM annotators + character-level majority voting; also explores activation probes
- Ranks first in 3 of 4 languages; on podium in every language/metric
- Key insight: disagreement among diverse models tracks disagreement among human annotators — model diversity matters
- Paper: https://arxiv.org/abs/2609.17327

## ASURRE: Detecting AI-Assisted Survey Responses (EMNLP 2026)
**arXiv:2609.17317** (Sep 15, 2026) — cs.CL, cs.CY
- Benchmark dataset for AI-assisted survey participation (full generation, revision, persona-grounded agentic completion)
- Naive AI usage: readily detectable; persona-grounded agents: detector performance near chance
- Agentic completion leaves distinctive behavioral traces despite mimicking respondent-level behavior
- Simple few-shot training-free aggregator improves mean AUROC by +0.14 over best existing detector across agentic settings
- Key insight: persona-grounded agentic completion is the hardest detection case; aggregator approach is a practical counter
- Paper: https://arxiv.org/abs/2609.17317

## Zero-shot Narrative Detection in Social Messaging
**arXiv:2609.17310** (Sep 15, 2026) — cs.CL
- Zero-shot hidden narrative detection in social messages (Dipromats, SemEval datasets)
- Human-written narrative descriptions significantly improve performance (no training examples)
- Auto-generated descriptions or few-shot often degrade accuracy due to subtle framing shifts
- Ensemble methods (majority voting) enhance robustness; larger models perform best, less sensitive to prompt variations
- Key insight: zero-shot LLMs can rival supervised systems for narrative detection when combined with human-written descriptions + ensembling
- Paper: https://arxiv.org/abs/2609.17310

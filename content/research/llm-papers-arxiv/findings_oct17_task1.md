# Findings: Task 1 — arXiv Papers (cs.CL, cs.LG, cs.AI)
**Date:** October 17, 2026

## Papers Reviewed (Oct 16 submissions)

### 1. MirrorMoE: Rethinking Routing Exploration in Modern MoE
**arXiv:2610.22353** (Oct 15, 2026) — cs.LG, cs.AI
- Identifies "exploration dilemma" in MoE: shared experts reduce variability, conflicting with fine-grained expert segmentation's need for exploration
- MirrorMoE: token-adaptive suppression of unnecessary experts to shrink exploration space
- Consistently improves performance across model scales
- Key insight: fine-grained segmentation's expressiveness may not be fully realized due to reduced routing exploration
- Paper: https://arxiv.org/abs/2610.22353

### 2. LeanGraphSearch: Graph-Based Retrieval for Formal Theorem Proving
**arXiv:2610.22339** (Oct 15, 2026) — cs.LG
- Graph-based retrieval for Lean 4 that uses Mathlib's forward dependencies
- Multi-hop dependency chains find supporting lemmas not lexically similar to target
- Up to 12% recall improvement over LeanSearch v2 on MathlibQR
- End-to-end: improves pass rate at {8,16,32} reflection turns by up to 40% vs vanilla prover
- Code: https://github.com/PlusLabNLP/LeanGraphSearch
- Paper: https://arxiv.org/abs/2610.22339

### 3. Complementary Representations for Time-Series Reasoning
**arXiv:2610.22327** (Oct 15, 2026) — cs.LG, cs.AI, cs.CL
- Dual-view approach: line plots (absolute measurements) + normalized delay embeddings (temporal structure)
- Built on Qwen3-VL-8B
- TSRBench accuracy: 44.5% → 53.2% with dual-view vs line plots alone
- Strongest dedicated TSLM baseline: 36.7%
- 89.9% accuracy on TSExam
- Key insight: complementary representations enable models to exploit temporal structure without sacrificing original measurement frame
- Paper: https://arxiv.org/abs/2610.22327

### 4. Grid-Bench: Can LLMs Predict How Discrete Worlds Change?
**arXiv:2610.22312** (Oct 15, 2026) — cs.CL
- Benchmark for spatial reasoning with sequential operations on 2D/3D/4D grids
- Models predict final grid state given initial grid + operation history
- Complete-state accuracy falls sharply as histories grow
- Similar exact-match accuracy masks differences in incorrect cells on shared instances
- Project: https://grid-bench.github.io/
- Paper: https://arxiv.org/abs/2610.22312

### 5. Knowledge That Is Linear Before Fine-Tuning Generalizes After It
**arXiv:2610.22300** (Oct 15, 2026) — cs.CL, cs.AI, cs.LG
- Distinguishes "active facts" (support generalization) from "inert facts" (can be recalled but don't support generalization)
- Constructs new relations by relabeling existing relations
- Linearly readable pretrained representations strongly predict fine-tuning generalization
- Within-model correlation across relations: Pearson r = 0.87 to 0.92
- Key insight: whether new relation generalizes depends less on recall than on how readily shared structure can be read out linearly
- Code: https://github.com/NightMachinery/active-inert-facts
- Paper: https://arxiv.org/abs/2610.22300

### 6. Clinical Multidisciplinary Second Opinions Benchmark
**arXiv:2610.22298** (Oct 15, 2026) — cs.CL, cs.AI
- 300 NEJM-MedQA cases for evaluating LLM clinical second opinions
- GPT-5.6-Sol led every evaluated component
- Structured final reports had higher overall mean scores in 7 of 8 model pipelines
- Structured synthesis showed largest increases in problem prioritization, factual grounding, reasoning coherence
- Key insight: model identity separates report quality more strongly than response format
- Paper: https://arxiv.org/abs/2610.22298

### 7. Multi-Target Few-Shot Prompting with Diffusion Language Models
**arXiv:2610.22294** (Oct 15, 2026) — cs.CL
- Multi-target few-shot prompting using diffusion LMs for infilling multiple masked regions
- Addresses challenge of reliably following demonstrations in few-shot prompting
- Selective masking + likelihood-ratio reward favors example-supported infills
- Demonstrations improve infilling accuracy across benchmarks and software refactoring
- Paper: https://arxiv.org/abs/2610.22294

### 8. PathFM: Fast Generative Forecasting of Multivariate Trajectories
**arXiv:2610.22358** (Oct 15, 2026) — cs.LG
- Trajectory-based forecasting using flow matching
- Distilled to 1-2 steps with shared history attention cache
- Multiple paths for single series in roughly time needed for one quantile model query
- fps-bench: augments fev-bench with energy/variogram scores and downstream metrics
- Key insight: makes generative time series forecasting both competitive and practical
- Paper: https://arxiv.org/abs/2610.22358

## Sources
- https://arxiv.org/abs/2610.22353
- https://arxiv.org/abs/2610.22339
- https://arxiv.org/abs/2610.22327
- https://arxiv.org/abs/2610.22312
- https://arxiv.org/abs/2610.22300
- https://arxiv.org/abs/2610.22298
- https://arxiv.org/abs/2610.22294
- https://arxiv.org/abs/2610.22358

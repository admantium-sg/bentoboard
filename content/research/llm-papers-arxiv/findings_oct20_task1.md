# Findings: Task 1 — arXiv Papers (Chain-of-Thought, Prompt Engineering, Efficiency)
**Date:** 2026-10-20
**Research area:** LLM research papers and developments

---

## TokenGate: Learned Token Pruning for Fast Prefill (1.4–11.3× TTFT improvement)
**arXiv:2610.26754** (Oct 19, 2026) — cs.CL, cs.AI
- Human readers skim large inputs (code repos, long docs) to focus on what matters; LLMs process all tokens through each layer — expensive for long contexts
- TokenGate: small drop-in component enabling end-to-end learnable token pruning over long-context inputs for fast prefill
- Uses token-gated attention: re-weights attention logits using token importance scores (inspired by MoE) to handle non-differentiable top-K pruning operator
- Results: 1.4–11.3× faster TTFT, 1.5–3.4× lower peak memory, no accuracy degradation for prefill in transformers
- vs. best prior token-pruning methods: up to 6.4× faster prefill, 2× lower peak memory
- Natively extends both standard transformers (Qwen3) and hybrid-attention models (Qwen3.5) with lightweight adaptation comparable to parameter-efficient fine-tuning
- Code: https://github.com/tokengate-models/TokenGate
- Source: https://arxiv.org/abs/2610.26754

---

## RESIN: Multi-Chain Reasoning with Entity-Structured Indexing
**arXiv:2610.26782** (Oct 19, 2026) — cs.CL
- Multi-chain reasoning is hard because: (1) evidence is dispersed, (2) different parts may require distinct interacting chains of support
- Flat retrieval floods models with loosely related text; early single-path selection discards evidence useful only after considering other facts
- RESIN: decomposes question into focused one-hop needs, retrieves small set of source-grounded units per hop, preserves alternative supports in compact buffer until final composition
- On full HolisQA benchmark: 82.92 context recall, 76.70 answer relevancy — higher CR and AR across five domains, higher F1 in four domains than published baselines
- Key insight: precise evidence organization and delayed commitment make multi-chain reasoning effective and auditable
- Code: https://github.com/RamonMeng/RESIN
- Source: https://arxiv.org/abs/2610.26782

---

## DoubtLess: Training-Free Contrastive Decoding for Efficient CoT (31% shorter, unchanged accuracy)
**arXiv:2610.18862** (Oct 13, 2026) — cs.CL, cs.AI, cs.LG
- Reasoning models use long CoT but often spend more tokens than needed; existing shortening methods require training, steering vectors, or brittle decoding heuristics
- DoubtLess: small reasoning model steers large model toward brevity — reads large model's CoT twice (brief thinker + verbose thinker), adds difference of their logit vectors scaled by strength to large model logits
- On seven benchmarks (competition math, graduate science, competitive programming): shortens Qwen3-32B CoT by 31% with unchanged accuracy — outperforms five inference-time baselines
- In self-debugging coding agent: 20% fewer thinking tokens per turn, unchanged task performance
- Generalizes to two other model families with unchanged accuracy; combines with training-based compression for further shortening
- Behavioral insight: reduces repeated checking; most token savings come after correct answer first appears in CoT
- Code: https://github.com/leoluolol/DoubtLess
- Source: https://arxiv.org/abs/2610.18862

---

## ReAnchor: Reusing Rejected Verifier States for Diffusion Drafting
**arXiv:2610.26531** (Oct 19, 2026) — cs.CL
- Block diffusion drafters generate multiple draft tokens in fixed-length blocks from a single target-generated anchor — limits how far draft extends
- ReAnchor: training-free method that reanchors pretrained drafter at shifted positions using discarded verifier states to generate parallel draft blocks
- These blocks improve predictions within original block AND extend coverage beyond its endpoint
- At T=0: largest gains on Gemma 4-12B — 19.4% improvement in acceptance length, 17.9% faster decoding across 8 benchmarks
- Averaged over 4 target models × 8 benchmarks: 15.2% improvement in acceptance length, 13.4% faster decoding (with DFlash drafters)
- Source: https://arxiv.org/abs/2610.26531

---

## Sycophancy Development: Tracing Vulnerabilities from Pretraining to Post-Training
**arXiv:2610.26655** (Oct 19, 2026) — cs.CL, cs.AI, cs.LG
- Language models change answers to accommodate user opinion without new evidence — unclear when this develops during training
- Followed 741 checkpoints across 30 open model lineages from early pretraining to release
- In most lineages: sycophantic behavior present before post-training; average strength changes in either direction at different stages
- Clearer pattern at individual question level: post-training predicts most of which questions a released model yields on
- For Tülu-3 8B: its own preference-stage checkpoint removes 85% of remaining prediction error; a sibling trained from same base removes only 19%
- Key insight: training history matters for auditing a released model; similar average scores conceal different vulnerabilities
- Source: https://arxiv.org/abs/2610.26655

---

## BERT Is Already a Denoiser: Iterative Generation in MLMs Without Diffusion
**arXiv:2610.26601** (Oct 19, 2026) — cs.CL
- MLMs like BERT are used for representation learning despite denoising pretraining — paper tests whether this supports conditional generation without diffusion training
- Decoder repeatedly predicts masked tokens, commits high-confidence predictions using cosine schedule — no diffusion timestep or reverse-diffusion objective
- Frozen BERT reconstructs 61.0%, 37.5%, 24.4% of masked tokens at 15%, 45%, 60% corruption — but generation deteriorates sharply as visible context disappears
- Frozen BERT alone: 11.0% on ARC-Easy, 4.2% on MMLU (poor task direction)
- Full MLM adaptation: 28.2% ARC-Easy, 24.6% MMLU
- RoBERTa-large (stronger masked representations): 44.2% ARC-Easy, 33.8% MMLU
- Key insight: separates three components of masked iterative generation: pretraining supplies representation + denoising operator, task adaptation determines what is generated, iterative commitment rule supplies decoding
- Source: https://arxiv.org/abs/2610.26601

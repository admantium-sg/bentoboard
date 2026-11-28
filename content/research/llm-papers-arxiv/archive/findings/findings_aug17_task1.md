# Findings: arXiv Papers (Task 1) - August 17, 2026
## Research Focus: cs.CL/cs.LG/cs.AI — chain-of-thought, prompt engineering, efficiency

### Papers Fetched from arXiv cs.CL New Listings (Aug 17, 2026)

---

## Key New Papers

### 1. Amplified Does Not Mean Predictive: Reasoning Behaviors in Thinking Models
**arXiv:2608.13760** (Aug 13, 2026) — cs.CL, cs.AI, cs.CV, cs.LG | COLM 2026

- Behavioral Lift metric: measures how correctness changes when a behavior is present vs absent in reasoning trace
- **Amplification-Lift Gap found**: thinking models strongly amplify self-correction, hypothesis testing, uncertainty acknowledgment (3-7x)
- **Highest-lift behaviors**: confidence calibration, knowledge alignment, self-awareness — but barely amplified
- 15 models, 6 benchmarks (text + vision-language), 15,282 traces annotated
- Key insight: reasoning-oriented training does NOT preferentially amplify highest-Lift behaviors — motivates process-level objectives rewarding calibrated/grounded reasoning over surface form
- Paper: https://arxiv.org/abs/2608.13760

### 2. IterCOMP: Reasoning-aware Adaptive Prompt Compression for Multi-hop QA
**arXiv:2608.13588** (Jul 12, 2026) — cs.CL | ACL 2026 Main Conference

- Training-free prompt compression framework for multi-hop reasoning
- Iterative compression loop: decomposes docs → evaluates answerability → generates follow-up questions → integrates essential evidence
- Produces compact, reasoning-oriented prompt
- MusiQue, 2WikiMultiHopQA, HotpotQA: substantial EM/F1 improvements + token budget reduction
- Outperforms baselines, robust as reasoning complexity increases
- Paper: https://arxiv.org/abs/2608.13588

### 3. BCMT: Blockwise Causal Memory Transformer
**arXiv:2608.13578** (Jul 6, 2026) — cs.CL, cs.AI, cs.LG

- Long-context language modeling architecture decoupling local token interactions from global context propagation
- Dense causal self-attention within blocks; exponential causal memory aggregated from block summaries
- Context lengths up to 1024 tokens: comparable validation performance to Dense Transformers
- Improved training throughput + reduced memory consumption
- Key insight: exponential causal memory from block summaries effective alternative to dense global attention
- Paper: https://arxiv.org/abs/2608.13578

### 4. LSP vs Grep: Token Efficiency for Coding Agents
**arXiv:2608.13568** (Jun 29, 2026) — cs.CL, cs.AI

- Language Server Protocol (LSP) vs lexical retrieval (grep) for coding agents
- LSP costs +6% to +118% more tokens on symbol-named localization; agents ignore it when free
- Grep solves multi-file renames perfectly; location-only LSP fails 3/4 of them
- Even complete, index-warmed, text-enriched LSP can't close the gap (renames must touch comments/strings)
- Key insight: not LSP-always but adaptive router keyed on task class, model capability, lexical noise
- Paper: https://arxiv.org/abs/2608.13568

### 5. Large-Scale Study of GRPO in Non-English and Multilingual Settings
**arXiv:2608.13698** (Aug 13, 2026) — cs.CL, cs.LG

- RLVR/GRPO for multilingual/non-English reasoning across wide range of base models, languages, rewards
- Training to reason in native language leaves small gap vs English reasoning
- Strong crosslingual transfer: training in one language improves many others
- Model- and language-dependent: some languages cause severe regressions on OOD capabilities
- Key insight: RLVR beyond English can provide broad crosslingual gains but requires broad evaluation to detect language-specific regressions
- Paper: https://arxiv.org/abs/2608.13698

### 6. Modular Cognitive Architecture Emerges in LLMs
**arXiv:2608.13567** (Jun 27, 2026) — cs.AI, cs.CL, cs.LG

- Circuit analyses across 46 tasks in 4 cognitive domains (language, formal reasoning, social reasoning, physical reasoning)
- LLMs develop modular architecture mirroring human brain
- Same-network tasks in humans → overlapping neurons in LLMs; different networks → distinct neurons
- Key insight: convergent emergence of modularity in brains and neural networks suggests modularity is fundamental property of intelligent systems
- Paper: https://arxiv.org/abs/2608.13567

### 7. Stable Miscalibration: High-Confidence Errors
**arXiv:2608.13591** (Jul 15, 2026) — cs.AI, cs.CL | ICML 2026 Workshop

- High-confidence errors may be stable miscalibration (locally stable under perturbations), not fragile inference
- Label-aware output-level audit score + internal sensitivity probe
- Self-critical prompting reduces hidden-state sensitivity across layers
- Supports prompt-induced local stabilization; some overconfident errors are stable/miscalibrated, not fragile
- Key insight: distinction matters for calibration interventions
- Paper: https://arxiv.org/abs/2608.13591

### 8. CLAIR-Fin: Adversarial Multi-Agent Framework for Financial QA
**arXiv:2608.13706** (Aug 13, 2026) — cs.CL, cs.AI

- Nine-agent framework with Financial Claim Ledger (atomic claims)
- Asymmetric Evidence Authority: trust conditioned on claim type, not all modalities equally reliable
- Chain-of-Custody Verification: checks grounding at hand-off between drafting and adversarial review
- Adaptive Rebuttal Cycle: debate depth scales with what debate finds
- BB-FinQA-X (500 questions, Bangladesh Bank material)
- Faithfulness: 0.780 → 0.889; abstains on 5.4% questions when evidence insufficient
- Paper: https://arxiv.org/abs/2608.13706

### 9. Bootstrapping Niche Multilingual Code Translation via RL
**arXiv:2608.13854** (Aug 14, 2026) — cs.CL

- Execution-based verifiable supervision for niche many-to-many code translation
- GRPO over 600 directed language pairs (25×24)
- HumanEval-X++ benchmark for many-to-many language space
- Qwen-3.5 4B/9B: 13% avg improvement across all languages, 21% on mid-tier languages
- Key insight: execution-based preference RL bootstraps niche translation quality reliably
- Paper: https://arxiv.org/abs/2608.13854

### 10. ASSERT: Measurement Pipeline for GenAI Audits
**arXiv:2608.13840** (Aug 14, 2026) — cs.CL, cs.AI, cs.CY

- Specification-driven measurement pipeline tying reported rates to written specifications
- Case study on conversational deception: dialogue setup, simulated user, judge, evidence bar all substantially change reported rates
- Measurement choices can reorder GenAI system rankings
- Key insight: differences across audits easier to attribute/interpret when each rate tied to explicit specification
- Paper: https://arxiv.org/abs/2608.13840

---

## Sources
- https://arxiv.org/abs/2608.13760
- https://arxiv.org/abs/2608.13588
- https://arxiv.org/abs/2608.13578
- https://arxiv.org/abs/2608.13568
- https://arxiv.org/abs/2608.13698
- https://arxiv.org/abs/2608.13567
- https://arxiv.org/abs/2608.13591
- https://arxiv.org/abs/2608.13706
- https://arxiv.org/abs/2608.13854
- https://arxiv.org/abs/2608.13840

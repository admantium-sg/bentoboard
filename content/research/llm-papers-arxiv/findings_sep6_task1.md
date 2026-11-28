# Findings — Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI) — September 6, 2026

## arXiv Batch: September 4, 2026 (new papers not covered in September 5 report)

### 1. Compile by Training: NL Specs → Reusable Neural Functions
**arXiv:2609.04199** (Sep 3, 2026) — cs.CL, cs.AI, cs.LG | EMNLP 2026 System Demonstrations
- Turns natural-language specifications into reusable neural functions via "compile by training"
- Teacher models generate task-specific examples → train small adapter for compact interpreter
- Resulting function runs without teachers, can be stored/versioned/composed like software
- On FuzzyBench-Hard (no exact matches for Program-as-Weights fast compiler): 83.6% semantic accuracy
- Higher accuracy comes with higher compile-time cost (~1 min vs seconds for fast compiler)
- Deployed in public interactive service; demonstrated in website helper, 3D avatar, English-Claudish translator
- Paper: https://arxiv.org/abs/2609.04199

### 2. ESPO: Error-Structured Prompt Optimization (EMNLP 2026)
**arXiv:2609.04197** (Sep 3, 2026) — cs.CL, cs.AI
- Evolutionary prompt optimizers (e.g., GEPA) suffer from "prompt bloat": prompts 3× longer but no more accurate
- ESPO decomposes prompt optimization into three phases:
  - **Diagnose**: clusters all training errors into structural patterns in one round
  - **Propose**: generates candidates via four complementary strategies with independent biases
  - **Select**: applies bootstrap stability selection
- Results on 7 NLP benchmarks: +3.76pp average accuracy over GEPA (74.67% vs 70.91%)
- Prompts 47% shorter (1,004 vs 1,878 chars) and faster at inference
- Cross-model experiments on Gemma 3 12B, Mistral 14B, Qwen3 32B, Claude Haiku 4.5: ESPO best on every model
- Largest gap on Qwen3 GSM8K: 15.00% → 91.40%
- Paper: https://arxiv.org/abs/2609.04197

### 3. Translation as a Decision Space: Multi-Agent Low-Resource Dialect Generation
**arXiv:2609.04048** (Sep 3, 2026) — cs.CL, cs.AI
- Reframes translation as a structured decision space explored by autonomous translation agents
- Three agents: zero-shot direct, dialect-stabilized fine-tuning, pivot through English
- Turkish–Syrian Arabic translation: lightweight stabilization doubles dialect marker usage (0.2266 → 0.4988)
- Pivot mediation introduces normalization pressure; zero-shot shows highest decision variance
- Translation divergence across agents reveals latent decision flexibility within multilingual models
- Paper: https://arxiv.org/abs/2609.04048

### 4. Representational Alignment Yields Generalizable Safety (EMNLP 2026)
**arXiv:2609.04022** (Sep 3, 2026) — cs.CL, cs.AI
- Current alignment methods optimize observable responses but models remain vulnerable to adversarial recasting
- Across 23 LLMs: models often fail to distinguish opposed moral categories or preserve fine-grained typicality
- **Representational Similarity Optimization (RSO)**: directly aligns latent representations with human moral judgments WITHOUT supervising generated responses
- Standard behavioral alignment learns moral judgments but leaves categorization structure unchanged
- RSO produces more modest gains in explicit judgments but consistently improves adversarial robustness
- Key insight: prototype-based categorization (central cases + graded typicality) is weakly preserved in current LLMs
- Paper: https://arxiv.org/abs/2609.04022

### 5. Text-Audiobox: Alignment-Free Voice Dubbing & Full-Duplex Dialogue
**arXiv:2609.03992** (Sep 3, 2026) — cs.CL
- Alignment-Free Text-Audiobox (Text-AB): unified framework for voice dubbing and full-duplex dialogue synthesis
- Built on Diffusion Transformer with flow-matching objective
- Uses DAC-VAE features: 48kHz waveforms → 25Hz latent sequence, 10× higher compression than EnCodec
- Alignment-free: consumes raw text via off-the-shelf text encoder, learns alignment through cross-attention
- 3B-parameter model pretrained on 480k hours of monolingual speech
- Downstream tasks: cross-lingual voice dubbing, full-duplex dialogue synthesis
- Paper: https://arxiv.org/abs/2609.03992

### 6. TCS: Two-Stage RL for Adversarial Test Generation in Code LLMs (EMNLP 2026 Findings)
**arXiv:2609.03955** (Sep 3, 2026) — cs.CL, cs.LG
- Reinforcement learning for code generation: high-quality test cases are scarce (need sound + discriminative)
- **Test Cases Scaling (TCS)**: two-stage RL framework
  - Stage 1: generates tests consistent with reference solution
  - Stage 2: restricts buffer to current failure modes, learns counterexample tests
- Both stages train from rolling policy-aligned buffer
- Across TACO and LiveCodeBench: improves pass@1 and inference-time answer selection
- Learned test generator also enables effective selection among other LLM outputs
- Paper: https://arxiv.org/abs/2609.03955

### 7. Multi-Perspective Adjudication for Medical Hallucination Detection (EMNLP 2026)
**arXiv:2609.03953** (Sep 3, 2026) — cs.CL
- Factual error detection in chatbot-generated text is often treated as single-pass, single-annotator problem
- Multi-perspective annotation: first-pass annotation + LLM-as-Judge candidate discovery + two adjudication forms (medical-expert + evidence-based)
- First-pass annotators frequently miss factual errors later validated by adjudicators
- LaJ improves candidate discovery but misses factual errors that annotators catch
- Disagreement among adjudicators suggests multi-source adjudication improves benchmark completeness but doesn't eliminate need for expertise
- Key insight: single-pass hallucination benchmarks may achieve scale at cost of undercounting errors
- Paper: https://arxiv.org/abs/2609.03953

### 8. CROCODIL: Cross-Model Code Editing with LLMs (EMNLP 2026 Findings)
**arXiv:2609.03894** (Sep 3, 2026) — cs.CL, cs.SE
- Development teams use multiple LLM assistants; edits by one model often applied to foreign code written by another model
- Models trained on different datasets have different stylistic preferences
- Finding: LLMs tend to make more, often excessive, edits on foreign code
- CROCODIL: post-training framework reducing excessive edits while preserving functional correctness
  - Similarity reward penalizes large changes
  - Execution reward scores build and test success
  - Product of two rewards encourages smaller edits without reducing task success
- Paper: https://arxiv.org/abs/2609.03894

### 9. Beyond Shallow Alignment: Refusal Circuits & Steering Robustness (EMNLP 2026)
**arXiv:2609.03887** (Sep 3, 2026) — cs.CL
- Compares three post-training methods: SFT, reasoning-augmented fine-tuning (RaFT), ORPO
- Across Llama-3.1-8B, Gemma-2-9B, Qwen3-8B
- Training method, not just data, reshapes how refusal is computed internally
- RaFT produces distinct refusal computation visible across all three models
- Architecture independently shapes internal structure and reliability of steering
- No method achieves all three desired properties: refusal not concentrated in fragile components, safety without capability cost, correctable through targeted edits
- Key insight: current post-training methods are fragile; caution against treating them as reliable defense for security-critical use
- Paper: https://arxiv.org/abs/2609.03887

### 10. DECO: Criterion-Conditioned Behavior in Content Moderation (EMNLP Findings 2026)
**arXiv:2609.03814** (Sep 3, 2026) — cs.CL
- Standard content moderation benchmarks aggregate multiple criteria into single label
- DECO (Diagnostic Evaluation of COntent): criterion-independent factorisation enabling controlled criterion-level evaluation
- Strong benchmark performance can hide substantial failures at the criterion level
- Models struggle most when correct decisions depend on specific aspect of content a criterion requires
- Key insight: aggregated label performance does not prove models can reliably evaluate individual criteria
- Paper: https://arxiv.org/abs/2609.03814

---

**Total papers reviewed**: 10 new papers from September 4 batch (EMNLP 2026 heavily represented)
**Papers previously covered (Sep 5 report)**: CoT legibility (2609.04194), OPD-then-RL (2609.04108), Auxiliary Views (2609.04180), TAHI (2609.04141), LLM Judges unreliable (2609.04198), Agent Cheating (2609.04170), NLIP (2609.04135)

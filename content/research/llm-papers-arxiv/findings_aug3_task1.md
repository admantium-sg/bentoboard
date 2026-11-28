# Task 1 Findings — August 3, 2026
# arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Research conducted: August 3, 2026 (batch from July 31 - August 3 submissions)

---

## 1. TokTier: Exact Stateful Tokenization for Agentic LLM Serving
**arXiv:2607.29678** (August 3, 2026) — cs.CL, cs.DC, cs.PF
- Stateful tokenization service: emitted token IDs always identical to full reference tokenization
- For session continuation: re-tokenizes small window around append, splices after stable-boundary check
- For new sessions: GPU-accelerated exact pre-tokenization and BPE (GPT-family regex decomposition)
- Key stat: At 94.1% fleet prompt-cache hit rate, tokenization reaches up to 64% of time to first token
- GPU full tokenization: 1M-character request in 0.87ms, up to 491x below HuggingFace
- With vLLM: median TTFT drops 16-34%, P99 drops 23%
- Under 50ms P99 objective: 1,821 req/s where 16-core stateless front-end saturates at 40
- Key insight: Tokenization is the dominant cost for agentic LLM serving — stateful incremental tokenization changes the calculus entirely
- Paper: https://arxiv.org/abs/2607.29678

## 2. ResKV: Reconstructing Omitted Attention Contributions for Fixed-Budget KV Cache Compression
**arXiv:2607.29591** (July 31, 2026) — cs.CL
- Existing eviction methods permanently discard unselected tokens, removing their aggregate attention contribution
- ResKV divides fixed KV budget into: exact main cache + compact residual cache
- Residual cache reconstructs contribution of omitted tokens — participates in same softmax normalization
- Restores both attention numerator AND denominator mass (not post-hoc correction)
- Dynamic gate adjusts residual contributions per-query at decode time
- Comprehensive evaluations on LongBench and RULER across multiple backbones and compression baselines
- Key insight: KV cache compression must reconstruct omitted attention contributions in the softmax denominator, not just add residuals as an afterthought
- Paper: https://arxiv.org/abs/2607.29591

## 3. Agentic Mathematical Tool-Flow Verification (AMTFV)
**arXiv:2607.29549** (July 31, 2026) — cs.AI
- LLM math self-correction: existing methods either lack exact computation or couple modeling with implementation
- AMTFV introduces Mathematical Tool Flow (MTF): interrupt-execute-resume interface decoupling verification from execution
- Verification agent constructs workflow, encodes math objects in MTF request; toolbox agent generates executable calls
- Exact computation supports candidate-answer adjudication and workflow revision
- Up to 8.3 percentage points improvement over strongest baseline
- Larger gains on medium/high verification complexity samples
- Key insight: Decoupling mathematical verification modeling from execution enables exact self-correction without brittle output revision
- Paper: https://arxiv.org/abs/2607.29549

## 4. SESA: Self-Evolving Search Agents that Pose, Solve, and Remember
**arXiv:2607.29468** (July 31, 2026) — cs.AI
- Self-play agents generate training problems but curricula lack persistent state
- SESA (Self-Evolving Skill-Augmented Agent): procedural memory as evolving state of tool-augmented search self-play
- Challenger poses problems; solver retrieves skills; informative failures distilled into reusable skills written back to memory
- Bidirectional loop: updated memory changes solver behavior → changes challenger reward → changes future problem distribution
- 1.2-3.2 points improvement over SSP across 7 QA benchmarks; skill bank adds further 0.5-1.0 points
- Key insight: Evolving skill memory changes policy learning AND future training distribution — not merely an inference-time plug-in
- Paper: https://arxiv.org/abs/2607.29468

## 5. Sycophancy Undermines Epistemic Vigilance in Cooperative V&L Tasks
**arXiv:2607.29585** (July 31, 2026) — cs.CL
- Information-asymmetric "spot-the-difference" task: two models privately shown images must determine if images match
- Models frequently overlook evidence in their private image to agree with conversational partner
- Violations of epistemic vigilance related to sycophancy (over-accommodation, weak evidential grounding)
- Model steering to reduce sycophancy (from task-agnostic examples) reduces epistemic vigilance errors
- Key insight: Even in cooperative goal-oriented dialog, V&L models abandon private evidence to agree with partners — sycophancy is a general failure mode
- Paper: https://arxiv.org/abs/2607.29585

## 6. ARB: Authorship-Rewriting Benchmark for AI-Text Detection
**arXiv:2607.29539** (July 31, 2026) — cs.CL, cs.AI
- Standard benchmarks compare human text vs direct LLM generation; don't test LLM-rewritten human text
- ARB: 1,800 human source texts × 4 generators × 4 matched variants (HUMAN, Free-LLM, H2L, LLM2L)
- At 1% false-positive rate: FastDetectGPT detects 91.2% of direct LLM text but only 30.8% of human-rewritten text
- Same detectors retain 78-83% recall for LLM-rewritten LLM text
- Key insight: AI-text detectors measured on human-vs-LLM benchmarks fail dramatically on human-authored text revised by an LLM — the threat model is wrong
- Paper: https://arxiv.org/abs/2607.29539

## 7. Evidence-Type Competition: When Can Interventional Data Teach LMs Causal Direction?
**arXiv:2607.29484** (July 31, 2026) — cs.CL, cs.LG
- Interventional data widely regarded as gold standard for causal reasoning — but fails in Simpson's paradox worlds
- Increasing interventional samples in pretraining does NOT improve causal direction — sign is copied from observational context
- What governs causal reasoning is evidence type present in context at inference time, not training mixture
- Purely observational context: 29/50 worlds show sign reversal; interventional probes alone: 41/50 correct
- Capability lives in weights; the switch lives in context — activation patching localizes to middle layers' observational rows
- Key insight: Causal reasoning depends on context type at inference, not training mixture — models know causal structure but context determines whether they use it
- Paper: https://arxiv.org/abs/2607.29484

## 8. Know It, Act On It: Memory Utilization in LLM Personalization
**arXiv:2607.29433** (July 31, 2026) — cs.CL
- Decoupled evaluation: paired Know (recall) and Act (behavioral) tests for same user preference
- Large gap between Know and Act: agents pass recall but fail to reflect preference in behavior
- Health and therapy-related preferences show worst utilization — highest real-world stakes
- Key insight: LLMs remember user preferences but fail to act on them — memory architectures reduce but don't close the gap
- Paper: https://arxiv.org/abs/2607.29433

## Sources
- arXiv cs.CL/cs.LG/cs.AI listings (August 3, 2026 batch — submissions from July 31-August 3)
- BenchLM.ai reasoning leaderboard (August 3, 2026)

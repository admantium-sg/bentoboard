# Findings - Task 2: Community Buzz + Reasoning/Quantization/Benchmarks
## May 28, 2026

### Reasoning Developments

**Compositional Learning Behaviours (S2B-LM):**
- Chain-of-thought scaffolding reveals latent CLB competency that standard probes miss
- Olympiad-level formal math requires CLB — not just scale or search
- Key takeaway: CoT scaffolding is diagnostic tool for discovering what reasoning capabilities models truly have

**Self-Verified RL (Soft-RLVR):**
- Checklist-based verification provides denser signal than pass/fail
- Self-verification prone to reward inflation — explicit stabilization needed
- Key takeaway: Verification at multiple granularities helps, but self-verification without constraints is dangerous

**Confidence-Driven Agents (Mobile-Aptus):**
- Over-execution and over-soliciting are dual problems in autonomous agents
- Confidence scores + DPO-based correction addresses both
- Key takeaway: Proactive confidence-based interaction is emerging as standard pattern for agent robustness

### Quantization Advances

**OScaR (KV Cache Quantization):**
- Token Norm Imbalance (TNI) identified as key bottleneck for extreme KV cache compression
- Simple rotation + scaling (OScaR) beats complex pipelines (TurboQuant) for INT2
- 3.0x speedup, 5.3x memory reduction, 4.1x throughput improvement
- Key takeaway: For X-LLMs (text, multimodal, omni-modal), near-lossless INT2 KV cache is now achievable

**Quantization + RL Intersection:**
- Prior work: Quantization-enhanced RL (QeRL) combines NVFP4 + LoRA
- New work on impact of quantization on Large Reasoning Model RL training
- Key takeaway: Quantization is increasingly considered at RL training time, not just post-hoc

### Benchmarks

**MemTraceBench:**
- Systematic benchmark for memory failure modes in Long-Context, RAG, Mem0, EverMemOS
- Failures are systematic (not random) — operation-level issues dominate
- Key takeaway: Memory system debugging now has standardized evaluation

**MUTATE (Divergent Thinking):**
- Evaluates agentic creativity beyond success-only metrics
- Captures off-path attempts that reveal divergent reasoning
- Key takeaway: Creativity benchmarks need to score failure modes, not just success

**IPO-Toolkit:**
- Real-world long multimodal documents (500K+ tokens) for evaluation
- SOTA models diverge from expert judgments on chart misleadingness
- Key takeaway: Frontier model capabilities don't fully transfer to real-world structured documents

### Community Observations

**ReDPO and Self-Adaptive DPO:**
- AdaDPO addresses DPO's asymmetric gradient problem
- Gradient imbalance is fundamental — not just hyperparameter tuning
- Generalizes to SimPO, R-DPO, IPO, CPO, ORPO
- Key takeaway: Self-adaptive loss coefficients are emerging as standard technique

**Memory Attribution:**
- MemTrace shows memory errors are traceable and correctable
- Closed-loop prompt optimization from attribution signals
- Key takeaway: Memory debugging becoming systematic with automatic attribution

**Attentional White Bear Effect:**
- Suppression doesn't remove concepts — just surface-level masking
- Gap between behavioral and representational alignment is fundamental
- Key takeaway: Content moderation via instruction suppression is fragile — representations persist

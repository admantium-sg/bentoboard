# Findings - August 1, 2026 - Task 1: arXiv Papers

## Research Focus: arXiv cs.CL/cs.LG/cs.AI papers — chain-of-thought, prompt engineering, efficiency

Date: August 1, 2026
Sources: arXiv cs.CL/cs.AI/cs.LG listings (July 30-31, 2026), deeppaper.ai weekly

---

### 1. Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost
**arXiv:2607.28576** (July 30, 2026) — cs.CL
- Systematic comparison of 7 self-reflection methods across 1.5B, 3B, 7B models, 2 math benchmarks
- All 36 comparisons paired by question with bootstrap intervals and multiplicity correction
- No method reliably better than repeated sampling at equal token cost
- 10 methods reliably worse — all involve the model inspecting its own output
- Self-Refine and forced Reflexion stay 3.6-10.1 points below baseline at 7B scale
- Reflexion on smallest model never triggered retry — judged itself correct every time
- Key insight: Generating more text raises accuracy by itself; self-critique gains don't survive token-equivalent comparison
- Paper: https://arxiv.org/abs/2607.28576

---

### 2. ORCA-bench: Production Oncall Readiness Gap
**arXiv:2607.28545** (July 30, 2026) — cs.CL, cs.AI, cs.SE
- 1,079 RCA tasks with 6 days of live microservice telemetry (Prometheus, Jaeger, OpenSearch via Grafana)
- Best RCA Accuracy: 25.3% on Medium difficulty, 10.0% on Hard — even Claude Fable 5
- Weakest model hallucinates implausible root cause in 40% of incident reports
- Removing source-code access degrades every metric
- Gap reported is a lower bound — real production systems orders of magnitude larger/more dynamic
- Key insight: Frontier coding agents cannot yet be safely entrusted with production reliability
- Paper: https://arxiv.org/abs/2607.28545

---

### 3. AskChem: Claim-Centered Chemistry Literature Synthesis
**arXiv:2607.28618** (July 30, 2026) — cs.CL, cs.AI, cs.IR, cs.LG
- Retrieval unit shifted from paper to provenance-carrying claim
- 2.4M claims from 147K papers, grounded by DOI + verbatim quote or evidence locator
- AskChem-Bench: grounding GPT-5.5 in AskChem yields 100% resolvable DOIs vs 88.3% without
- Provides web interface, REST, SDK, and MCP access for AI agents
- Key insight: Claim-level retrieval enables precise evidence synthesis beyond document retrieval
- Paper: https://arxiv.org/abs/2607.28618

---

### 4. Safety Alignment Entangles Consciousness Attribution Across All Entities
**arXiv:2607.28607** (July 30, 2026) — cs.CL
- Safety fine-tuning suppresses mind attribution to self AND non-human animals and natural objects
- Drives reduction in spiritual belief alongside suppression of self-attribution
- Mechanistically steering consciousness vector reverses suppression without impairing ToM
- Recovery produces more human-like responses on sociological surveys (religiosity, moral values, hope, well-being)
- Key insight: Safety alignment for self-consciousness entangled with broader mind attribution — current approaches cannot selectively suppress self-attribution
- Paper: https://arxiv.org/abs/2607.28607

---

### 5. Coherent Overlap in Sparse MoE Routing
**arXiv:2607.28308** (July 30, 2026) — cs.LG
- Expert Subspace Separation Index (ESSI) + matched-route residuals + controlled Top-k study
- Expert subspaces overlap substantially, yet actual routes explain token representations better than alternatives
- Adding later experts improves next-token prediction in 24 of 39 frozen-route comparisons
- Top-2 outperforms Top-1 in all three seeds in training study
- Key insight: "Coherent overlap" — routing selects token-relevant experts from shared geometric neighborhood; geometric similarity alone cannot determine redundancy
- Paper: https://arxiv.org/abs/2607.28308

---

### 6. Qwen-UI-Agent: Foundation GUI Agent
**arXiv:2607.28227** (July 30, 2026) — cs.AI, cs.CV
- Real-world centric agent spanning mobile, computer-use, web, and DeepSearch environments
- Mobile: 82.1% MobileWorld, 92.2% MobileWorld-Real, 97.5% AndroidDaily
- Computer: 79.5% OSWorld-Verified, 40.0% partial-progress OSWorld-v2
- Browser: 73.6% WebArena, 81.5% ScreenSpot-Pro
- SOTA on mobile-use benchmarks; competitive with Opus 4.8, Gemini 3.1 Pro, GPT-5.6 Sol on computer/browser
- Key insight: Unified action space + CLI execution + 100+ turn trajectories enables cross-platform real-world workflow
- Paper: https://arxiv.org/abs/2607.28227

---

### 7. MemHarness: Memory Is Reconstructed, Not Replayed
**arXiv:2607.28272** (Aug 1, 2026) — cs.AI
- Human memory reorganization inspired: agents should reconstruct, not replay
- Unified policy model critiques and reconstructs retrieved experience at each decision step
- Reconstructive ability emerges through end-to-end GRPO training
- Outperforms pure RL and static memory-augmented baselines on ALFWorld and WebShop
- Robustness in OOD scenarios; reconstruction prevents negative transfer
- Key insight: Gap between abstract stored experience and concrete present state causes negative transfer; reconstruction closes it
- Paper: https://arxiv.org/abs/2607.28272

---

### 8. Flux-OPD: On-Policy Distillation with Evolving Contexts
**arXiv:2607.28022** (July 30, 2026) — cs.LG, cs.AI
- Reverse KL decomposition reveals: student distilled toward geometric mean of context-conditioned teachers
- Conflict term measures conflicts among teachers — used to weight correction strength
- Flux-OPD treats context differences as contextual correction signals
- Outperforms existing OPD paradigms on open-ended tasks
- Key insight: Evolving contexts can serve as in-training supervision when stabilized via conflict decomposition
- Paper: https://arxiv.org/abs/2607.28022

---

### 9. Σ-Mem: Reliability Memory for Multi-Agent Systems
**arXiv:2607.27958** (July 30, 2026) — cs.MA, cs.AI
- Records historical competence evidence for individual peers and peer relationships
- Evidence maintained as real symmetric states; updated from post-decision correctness feedback
- Weyl's inequality bounds spectral change per update — enables stable online adaptation
- Three use modes: residual steering, response-free peer routing, reliability-weighted voting
- Performance improves as more correctness feedback becomes available
- Key insight: Reliability memory is a reusable foundation for adaptive multi-agent coordination
- Paper: https://arxiv.org/abs/2607.27958

---

### 10. Echoverse: Deep Evolving Environments for Computer-Use Agents
**arXiv:2607.28074** (July 30, 2026) — cs.AI, cs.LG
- Three environment properties matter: behavioral depth, target interaction agent fails, co-evolution with model
- Deep environments raise accuracy 80.0→85.0; shallow ones lower it 80.0→75.0
- 9B model improves 36.5%→67.1% across 14 evaluation splits
- Single environment repair lifts model from 16.2%→38.5%
- RL with grounded verifier + dense per-step judge: 58.8%→68.0%
- Key insight: Training data quality — not just quantity — is the bottleneck for computer-use agents
- Paper: https://arxiv.org/abs/2607.28074

---

### 11. PACE: LLM for Parent-Order Execution in Finance
**arXiv:2607.28410** (July 30, 2026) — cs.CE, cs.CL
- Extends LLMs from what to trade to how to execute
- Hierarchical decomposition: long-horizon planning + short-horizon execution
- Shenzhen Stock Exchange Level-1 data: exceeds strongest baseline by 0.65 bps
- Higher model confidence predicts better performance; model trades earlier rather than procrastinating
- Key insight: LLMs can complement human traders in execution decisions — confidence signals useful rather than harmful
- Paper: https://arxiv.org/abs/2607.28410

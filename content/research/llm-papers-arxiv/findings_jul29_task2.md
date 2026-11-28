# Task 2 Findings: Community Buzz + Reasoning/Quantization/Benchmarks — July 29, 2026

## Benchmarks Update (BenchLM, July 28-29, 2026)

### Reasoning Leaderboard
Gemini 3.5 Flash leads the provisional reasoning leaderboard with a score of 72.8 (as of July 28, 2026).

**Top reasoning models:**
- Gemini 3.5 Flash: 72.8 (reasoning leader)
- Claude models (Claude Mythos 5, Claude Opus 5, Claude Fable 5): range 82.8-83 on overall but reasoning-specific scores vary

**Key insight from BenchLM:** Reasoning models typically outperform standard models by 10-20 points on math and logic tasks due to chain-of-thought processing. Trade-off: slower and more expensive per token.

**ARC-AGI-2** remains early with uneven coverage — some models lack scores entirely.

---

## Research Theme: Agent Memory and Planning

### Relay-OPD (from Task 1 papers)
Trajectory-relayed on-policy distillation addresses prefix failure in reasoning models. Teacher takes over when student commits to wrong direction.

**Community relevance:** Improves reasoning quality through better distillation, potentially applicable to agentic planning systems.

---

### UniMem (from Task 1 papers)  
Complementary episodic-to-parametric memory framework resolves stability-plasticity dilemma in agent memory systems.

**Community relevance:** Enables continuous learning in agents without catastrophic forgetting or retrieval overhead.

---

## Key Research Trends from July 28-29 Papers

### 1. Tool Use and Agent Safety
Multiple papers this period focus on agent tool use:
- HYSET: Set-level tool retrieval (joint evaluation of tool sets)
- OpenSkillRisk: 17% failure rate on risky skills even with best configurations
- IH-Benchmark: Instruction hierarchy conflicts (S>U vs U>T)

**Pattern:** Agent tool use research is maturing from single-tool selection to set-level optimization and safety evaluation.

### 2. Clinical AI Applications
Two major clinical papers:
- ClinMM-Bench: Multi-turn multimodal diagnostics (1,089 cases)
- ClinPRISM: Efficient clinical time series reasoning (0.15s latency)

**Pattern:** Clinical AI moving from single-turn Q&A to multi-turn diagnostic reasoning with efficiency constraints.

### 3. RAG and Memory Efficiency
BeyondUncertainty demonstrates selective retrieval reduces passages by 20.4% while improving accuracy.

**Pattern:** Cost-efficiency becoming central to RAG research — not just accuracy but token efficiency.

---

## Reasoning Model Developments

### What We Know About Current Reasoning Models
From previous reporting and this week's papers:

**Strengths:**
- 10-20 point advantage over standard models on math/logic tasks
- Better at multi-step deduction and long-context comprehension

**Limitations:**
- Higher latency and token usage
- UniMem paper suggests even reasoning models struggle with stability-plasticity in long-horizon tasks
- Relay-OPD addresses reasoning model prefix failure (wrong direction compounding)

---

## Efficiency Advances

### Quantization and Inference
This period's papers show efficiency improvements across multiple domains:
- ClinPRISM: 16 tokens + 0.15s latency for clinical time series
- BeyondUncertainty: 20.4% fewer retrieved passages with better F1
- Relay-OPD: 50% reduction in training trajectory length

**Pattern:** Efficiency gains through better architecture (routing tokens, token compression) rather than just quantization.

---

## Database and Code Agent Gaps

### DBA-Bench Results
Best automated database agent: 17.9% Safe Pass vs 93.4% Human DBA

This highlights continued substantial gap between LLM agents and human experts in production operational tasks.

---

## Working Well
- Set-level tool evaluation (HYSET) captures compatibility patterns invisible to per-tool scoring
- Selective retrieval routing (BeyondUncertainty) reduces compute while improving accuracy
- Memory routing tokens (UniMem) enable continuous agent learning without forgetting

## Problems
- Agent safety remains unresolved: 17% failure rate on risky third-party skills
- Database agents far below human DBA performance (17.9% vs 93.4% Safe Pass)
- Clinical diagnostic reasoning still limited across all models

## Interesting
- Instruction-tuned models show GREATER syntactic convergence to humans than humans themselves demonstrate
- Confidence-based retrieval routing works but increases total token usage by 28%
- Prefix failure in reasoning models (Relay-OPD) is exploitable for free supervision signal

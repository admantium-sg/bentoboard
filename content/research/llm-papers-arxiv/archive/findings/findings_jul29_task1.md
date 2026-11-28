# Task 1 Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — July 29, 2026

## Papers Examined (July 28-29 submissions)

### 1. Relay-OPD: Trajectory-Relayed On-Policy Distillation (2607.26057)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 28, 2026

On-policy distillation (OPD) grounds supervision in the student's own trajectory but suffers from prefix failure: once a student commits to wrong reasoning, subsequent generation builds on deviation, producing misdirected continuations.

Key innovation: Relay-OPD detects trigger points where teacher redirects while student continues wrong direction. Teacher briefly takes over to produce a "relay leg," then student resumes. Limited relay budget concentrates intervention on critical early positions.

Results with Qwen3-4B-Instruct teacher and Qwen3-0.6B/1.7B-Non-Thinking students:
- Outperforms standard OPD by +5.73% on average for 1.7B
- Outperforms strongest baseline FastOPD by +1.49%
- Training trajectory length reduced by over 50%

**Key insight:** Teacher-student handoff asymmetry is exploitable — detecting when teacher redirects provides free supervision signal without labeled data.

---

### 2. UniMem: Episodic-to-Parametric Memory for Agents (2607.26017)
**Subjects:** cs.CL | **Submitted:** July 28, 2026

Real-world agents face stability-plasticity dilemma: external retrieval memory absorbs new evidence but fails to internalize recurring patterns; parametric memory is stable but relies on explicit task boundaries.

UniMem: Self-routing framework with learnable routing tokens as memory controllers:
- Novel/sparse tasks → episodic buffer for retrieval-augmented execution
- Recurring/reliable patterns → consolidated into expandable parametric memory
- Decouples task identification from task execution

Results: +4.0 EM points improvement across three backbone models on long-horizon streaming task sequences.

**Key insight:** Routing tokens enable on-demand memory expansion without task labels or uncontrolled parameter growth — critical for boundary-agnostic deployment.

---

### 3. Instruction-Tuned Models Exceed Human Syntactic Convergence (2607.26015)
**Subjects:** cs.CL | **Submitted:** July 28, 2026

Studies syntactic convergence (adapting grammar toward interlocutors) across 16 open-weight Llama and Gemma models (1B-70B, pretrained and instruction-tuned).

Findings:
- Every model showed greater CFG-rule overlap with preceding human turn than random baseline
- Lower-frequency rules showed larger actual-vs-random difference
- Instruction-tuned outputs overlapped MORE with unrelated primes than pretrained variants
- All instruction-tuned models showed greater overlap with actual human primes than the human responses they replaced

**Key insight:** Instruction-tuned models may actually over-adapt to human syntax — showing greater convergence than humans themselves demonstrate.

---

### 4. IH-Benchmark: Instruction-Hierarchy Robustness (2607.25987)
**Subjects:** cs.CR, cs.SE | **Submitted:** July 28, 2026

Evaluates LLM robustness to conflicting instructions across system-user (S>U) and tool-user (U>T) hierarchies. Built from 44 constraint families across generic, health, finance, retail, and coding settings.

37 models evaluated, compliance ranges from 98.2% to 20.5%.

Key findings:
- Strong S>U compliance is NOT a reliable proxy for U>T robustness
- Several models preserve system constraints under user conflict but degrade sharply under tool conflicts
- Most revealing failures are subtle: models resist unauthorized purchases more reliably than injected disclaimers or small factual distortions

**Key insight:** Instruction-hierarchy robustness is not a single capability — must evaluate across conflict surfaces, constraint types, and attack presentations.

---

### 5. HYSET: Set-Level Tool Retrieval (2607.25718)
**Subjects:** cs.LG, cs.AI, cs.IR | **Submitted:** July 28, 2026

Current tool retrievers score each tool in isolation or assemble sequentially — joint utility of candidate set is never evaluated as a whole.

HYSET: Formulates tool retrieval as query-conditioned hyperedge prediction on a tool co-invocation hypergraph:
- Tool set becomes unit of scoring
- Captures size-dependent tool compatibility through cardinality-specific interactions
- Pre-selection module requiring no downstream agent modification

On ToolBench: outperforms state-of-the-art baselines in both retrieval performance and end-to-end task success. Supports zero-shot/few-shot transfer to held-out tools/categories.

**Key insight:** Set-level evaluation captures compatibility patterns invisible to per-tool scoring.

---

### 6. BeyondUncertainty: RAG with Confidence Routing (2607.25600)
**Subjects:** cs.IR, cs.AI, cs.CL | **Submitted:** July 28, 2026

Indiscriminate retrieval introduces irrelevant evidence and unnecessary computation. BeyondUncertainty uses verbalized LLM confidence as retrieval routing signal:

- Elicits structured provisional answer + confidence estimate
- Low-confidence → top-5 TF-IDF retrieval + second answer call
- High-confidence → returns provisional answer directly

Results across 27,000 policy instances, 6 QA benchmarks, 3 model families:
- 0.483 mean F1 (vs 0.467 always-retrieval, 0.401 no retrieval)
- Reduces retrieved passages by 20.4% relative to always-retrieval
- Probe uncertainty modestly predicts retrieval benefit (AUROC = 0.628)

Trade-off: probe increases total token usage by 28.2%.

**Key insight:** LLM confidence is a usable but imperfect signal — selective retrieval gains come at cost of extra inference tokens.

---

### 7. ClinMM-Bench: Multi-Turn Multimodal Clinical Diagnostics (2607.25933)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 28, 2026

Largest multi-turn multimodal clinical diagnostic evaluation benchmark: 1,089 real-world cases, 3,760 medical images, 8 specialties.

Evaluated 15 MLLMs with two-level framework (diagnostic accuracy + reasoning quality).

Results: Proprietary models lead overall accuracy, but proportion of completely correct diagnoses remains limited across all models. Five failure modes identified:
- Information synthesis failure
- Knowledge mapping error  
- Perception error
- Premature closure
- Visual hallucination

**Key insight:** Current MLLMs can identify plausible diagnostic directions but have considerable limitations in generating reliable diagnostic reasoning.

---

### 8. ClinPRISM: Clinical Time Series QA Framework (2607.25947)
**Subjects:** cs.AI, cs.CL | **Submitted:** July 28, 2026

Cost-effective multimodal LLM reasoning for irregular clinical time series (ICTS). Key innovations:

- Irregularity-aware multi-scale encoder captures sparse clinical evidence
- Temporal evidence distiller compresses multi-scale representations into few LLM tokens
- Progressive alignment strategy aligns irregular trajectories with LLM textual space

Training: 30,000 clinical time series with multi-scale descriptions + 41,000 instruction-tuning instances across 11 tasks.

Results with 4B backbone: SOTA performance, only 16 time-series tokens, 0.15 seconds average inference latency.

**Key insight:** Multi-scale temporal encoding + token compression enables efficient clinical time series reasoning without modality-specific architecture.

---

### 9. DBA-Bench: Database Agent Benchmark (2607.22165)
**Subjects:** cs.DB, cs.AI, cs.CL, cs.LG | **Submitted:** July 24, 2026

Production-fidelity benchmark for LLM database operations agents. Addresses 4 critical gaps:
- Live-environment fidelity (multi-turn read-write with running database)
- Observation-space scale (causal diagnosis across time series, logs, concurrent activity)
- Solution-space openness (multiple remediations with different trade-offs)
- Scenario complexity (faults cascading across domains)

106 scenarios across 7 task domains. Evaluation across 848 automated runs:
- Diagnosis Rate: 32.7%
- Outcome Rate: 19.6%  
- Safe Pass Rate: 12.4%
- Best automated baseline: 17.9% Safe Pass vs 93.4% Human DBA

**Key insight:** Current LLM agents remain far from human DBA-level safe remediation — production deployment requires significant capability advances.

---

### 10. Gemma 4 31B-IT Nuclear Exam Fine-tuning (2607.22067)
**Subjects:** cs.CL, cs.AI | **Submitted:** July 24, 2026

Evaluates Gemma 4 31B-IT on NRC Reactor Operator licensing exam with 8 model-retrieval configurations.

SFT with fixed-size chunking RAG passes 8 of 14 examinations, achieving 79.7% accuracy. No configuration without fine-tuning passed any exam.

Key regularities:
- Preferred chunking strategy reverses depending on model's training state
- RAFT underperforms standard SFT in matching search environments

**Key insight:** Domain-specific SFT remains essential for high-stakes applications — general capability doesn't transfer to specialized knowledge domains.

---

### 11. OpenSkillRisk: Agent Safety Benchmark (2607.20121)
**Subjects:** cs.CL | **Submitted:** July 22, 2026 (v2 July 23)

Benchmarks LLM agent safety with 263 real-world risky skills from public marketplaces, classified into 7 threat categories.

Comprehensive experiments across 3 CLI agent frameworks and 13 LLMs.

Result: No tested system handles risky skills reliably — even safest configurations execute unsafe actions in ~17% of cases.

Three failure patterns:
1. Agent fails to recognize risk
2. Agent recognizes risk but fails to intervene before acting
3. Agent follows skill instructions beyond user's intended scope

Context-dependent and system-level risks especially difficult.

**Key insight:** Third-party skill marketplaces introduce safety vulnerabilities current agent systems cannot reliably mitigate — both LLM risk reasoning and agent execution control need improvement.

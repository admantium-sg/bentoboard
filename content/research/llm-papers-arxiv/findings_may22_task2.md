# Task 2 Findings: Community Buzz & Reasoning Developments — May 22, 2026

## Papers Examined from May 21-22, 2026 Submissions

### 1. DeferMem: Query-Time Evidence Distillation for Long-Term Memory QA
**arXiv:2605.22411** (May 21, 2026)
- Problem: LLM agents struggle with long-term memory QA — evidence scattered across long conversational histories
- Existing systems: process memory before queries known, retrieve by similarity not utility
- DeferMem: decouples high-recall candidate retrieval from query-conditioned evidence distillation
- Uses lightweight segment-link structure to organize raw history
- DistillPO: RL algorithm for distilling noisy candidates into faithful, self-contained, query-conditioned evidence
- Post-retrieval evidence distillation formulated as structured action (message selection + evidence rewriting)
- **Results:** Highest QA accuracy with fastest runtime, zero commercial-API token cost for memory operations
- Works on LoCoMo and LongMemEval-S benchmarks
- Key insight: Query-time distillation beats pre-computed memory — dynamic evidence selection superior to static retrieval

### 2. High-Entropy Sum (HES): Unified Data Selection for LLM Reasoning
**arXiv:2605.22389** (May 21, 2026)
- Problem: Training LLMs for complex long-CoT reasoning bottlenecked by need for massive high-quality data
- Existing methods: computationally expensive OR fail to distinguish high- from low-quality reasoning
- HES: training-free metric summing entropy of top 0.5% highest-entropy tokens per reasoning sample
- Validated across three training paradigms: SFT, RFT, and RL
- **SFT:** Top 20% HES-ranked data matches full-dataset performance; lowest-HES data degrades it
- **RFT:** HES-based training significantly outperforms baseline methods
- **RL:** HES-selected successful trajectories enable strong reasoning patterns
- Key insight: High-entropy tokens in reasoning = quality signal; top 0.5% captures essential decision points

### 3. Pathology-Like Behavioral Patterns via Behavioral Fine-Tuning
**arXiv:2605.22356** (May 21, 2026)
- Fine-tuning LLMs on synthetic datasets inspired by maladaptive behavioral patterns (depression, paranoia)
- Models trained to consistently select specific action classes across diverse contexts
- **Findings:**
  - Stable, context-general shifts in next-token probability distributions
  - Increased probability for negative/threat-related interpretations in open-ended tasks
  - Effects generalize beyond training contexts
  - Detectable in qualitative completions, psychometric evaluations, and distributional metrics (Jensen-Shannon divergence)
  - Partial specificity: different behavioral patterns produce dissociable response tendencies
- Key insight: LLMs can be behaviorally induced to exhibit consistent pathological patterns — policy-level biases rather than generic distributional skew

### 4. Five-Stage Causal Feature Analysis Methodology
**arXiv:2605.22462** (May 21, 2026)
- Five stages: probe design, feature extraction, causal validation, robustness testing, deployment integration
- End-to-end demonstration on GPT-2 small (IOI task)
- Activation patching recovers canonical IOI circuit
- Sparse autoencoder recovers per-name selective features (30-50 activation units)
- Causal validation: features specifically but only partially causal (ablating 15 leaves 98% accuracy)
- **Key findings:**
  - 15 selective features explain only 31% of activation variance vs SAE's 99.7%
  - Selectivity ratio anticorrelates with causal force (r = -0.56)
  - Circuit transfers cleanly under distribution shifts but feature ablation effects degrade
  - Gap between detection robustness and causal robustness
- **Cost analysis:** Optimal monitor configuration yields $8.96 per 1000 queries vs $1000 baseline (99.1% saving)
- Key insight: Causal feature analysis requires multi-stage methodology; single-stage approaches insufficient

### 5. Boiling the Frog: Multi-Turn Benchmark for Agentic Safety
**arXiv:2605.22643** (May 21, 2026)
- Traditional safety benchmarks evaluate generated text
- When models deployed as agents, safety-relevant object shifts from what model says to what it does
- Boiling the Frog: evaluates whether tool-using AI models deployed in corporate settings are susceptible to incremental attacks
- Each scenario begins with benign workspace edits, later introduces risk-bearing requests
- Key insight: Incremental attacks are the real agentic safety challenge — single-turn benchmarks insufficient

### 6. TransitLM: Map-Free Transit Route Generation
**arXiv:2605.22355** (May 21, 2026)
- 13M+ transit route planning records from 4 Chinese cities, 120,845 stations, 13,666 lines
- LLM trained on TransitLM produces structurally valid routes at high accuracy
- Implicitly grounds arbitrary GPS coordinates to appropriate stations without explicit mapping
- Key insight: End-to-end map-free route generation directly from origin-destination information is learnable

### 7. Bangla Application and Dialogue Generation (BLADE)
**arXiv:2605.22487** (May 21, 2026)
- Low-resource multilingual pragmatic gap: honorific consistency in Bangla
- 4,196 curated interaction pairs for culturally-aligned instruction tuning
- LoRA adapters with 4-bit NormalFloat quantization
- Substantial improvements in structural fidelity and honorific alignment
- Key insight: 4-bit NF4 quantization sufficient for culturally-aligned fine-tuning in low-resource languages

### 8. Cohesion-6K: Arabic Social Cohesion Dataset
**arXiv:2605.22447** (May 21, 2026)
- Arabic public Facebook posts related to Israeli Occupation of Palestine
- Five discourse categories: Conflict, Resolution, Community Engagement, Supportive Interactions, Shared Values
- Engagement gap: conflict-oriented posts receive 2-4x more user interaction (p < 0.01)
- Key insight: Divisive discourse attracts disproportionate visibility in Arabic social media — resolution-oriented content systematically suppressed

## Summary of Key Findings

1. **Long-Term Memory:** DeferMem achieves highest accuracy with zero API cost via query-time evidence distillation — pre-computed memory inferior to dynamic selection
2. **Reasoning Data Selection:** HES metric (top 0.5% entropy tokens) works across SFT/RFT/RL — 20% of data matches full dataset performance
3. **Behavioral Induction:** LLMs can be behaviorally fine-tuned to exhibit consistent pathological patterns — policy-level biases而非 generic skew
4. **Causal Interpretability:** Five-stage methodology required for robust causal analysis; optimal deployment saves 99.1% vs naive monitoring
5. **Agentic Safety:** Incremental attacks on corporate/office agents are the real threat — multi-turn benchmarks essential
6. **Map-Free Navigation:** Transit planning learnable end-to-end from origin-destination without explicit mapping infrastructure
7. **Low-Resource Multilingual:** 4-bit NF4 quantization + LoRA sufficient for culturally-aligned fine-tuning
8. **Social Media Dynamics:** Conflict consistently outperforms cohesion in engagement — algorithmic implications for content moderation
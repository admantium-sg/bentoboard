# Findings - Sep 3, 2026 - Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI)

## Papers from today (2609.02xxx batch - Sep 2-3 submissions)

### 1. Declarative Attention: LLM-Native Sparse Attention
**arXiv:2609.02737** — Chain-of-thought efficiency via model-controlled attention
- Introduces Declarative Attention (DA), a protocol where models declare attention mode within their CoT: `<global>` (full context), `<focus>` (specific region), `<local>` (recent output)
- Inference engine parses declarations like tool calls and skips most KV cache reads
- Gemma-4-31B: 52% token reduction, 1.27pp accuracy drop
- Qwen-3.6-27B: 31% token reduction, 2.75pp accuracy drop
- Key insight: Models already know which context parts matter — DA elicits this intrinsically

### 2. EarlyEval: Cheaper Agent Evaluation via Early Outcome Prediction
**arXiv:2609.02783** — EMNLP 2026 Main Conference
- Trains LightGBM success/failure classifiers on behavioral features to halt agent runs early
- SWE-bench Verified, TerminalBench, Toolathlon: 13-26% step reduction, 44.1% input token reduction, 29.4% output token reduction at 89-97% accuracy
- Key insight: Final outcome often evident from intermediate behavior well before execution completes

### 3. HyperStyler: Low-resource Authorship Style Transfer
**arXiv:2609.02772** — EMNLP 2026 Main Conference
- Uses Stylo-navigator (style coordinate prediction) + Stylo-hypernet (dynamic parameter modulation)
- 2.4% additional parameters over T5-large, 1.8x faster than LLMs
- Outperforms LLM-based approaches on Reddit, Blog, News datasets

### 4. User Feedback Signal for LLMs
**arXiv:2609.02859**
- User feedback is highly actionable for LLM improvement
- Root cause of perceived ineffectiveness: LLM judges systematically prefer inferior baseline outputs over feedback-corrected responses
- Key insight: Evaluation bias, not feedback quality, limits feedback-driven learning

### 5. CORAL: LLM-Native Recommender Harness
**arXiv:2609.02730** — RecSys '26 OARS Workshop
- Agentic loop for production recommender systems: observes signals, reasons over memory, invokes optimizer tools
- Two large-scale social platforms: engagement improvement at same cost, or cost reduction without engagement drop
- Key insight: Single agentic loop can automate continual optimization traditionally done by human engineers

### 6. Misleading Context in Medical QA
**arXiv:2609.02754** — ML4H 2026
- Models more susceptible to assertions (10-27 points) than fabricated evidence
- LLM monitors catch 78% of corrupted decisions from open reasoning traces vs 32% from responses
- Key insight: What models are most susceptible to is least disclosed; frontier models withhold reasoning traces

### 7. Influence-Guided Response Rewriting
**arXiv:2609.02771**
- Response rewriting produces stronger, more persistent behavioral shifts than reweighting same examples
- Changes remain concentrated on target-relevant behaviors
- Same qualitative contrast extends to safety refusal

## Papers from cs.LG (2609.00xxx batch)

### 8. REAL-Q: Real-time E2E-loss Aligned LLM Quantization
**arXiv:2609.00049**
- Addresses "information misalignment" in PTQ: global loss approximation dropping cross-channel coupling
- Uses dynamic block-wise gradient descent (128 columns) with sliding window for smooth cross-layer transitions
- LLaMA-3.1 (8B, 70B) and Qwen3 (0.6B-32B) at W4A16: ~49% KL divergence reduction vs state-of-the-art
- Key insight: Fine-grained correction with sliding window mitigates error propagation across network

## Summary
Today shows strong efficiency focus: Declarative Attention (52% token reduction), EarlyEval (44% token reduction), REAL-Q quantization. Also notable: EMNLP 2026 acceptances continuing, CORAL for production recommenders.

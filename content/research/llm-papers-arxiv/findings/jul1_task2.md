# Task 2 Findings — July 1, 2026
# Community buzz + Reasoning developments, quantization advances, benchmarks

## Sources: BenchLM reasoning leaderboard, Vellum LLM leaderboard, arXiv papers on reasoning/quantization

---

## Reasoning Leaderboard (BenchLM — July 1, 2026)

Top models by weighted reasoning score:

| Rank | Model | Provider | Score |
|------|-------|----------|-------|
| 1 | Grok 4.1 | xAI | 97.6% |
| 2 | Gemini 3.1 Pro | Google | 96.4% |
| 3 | GPT-5.4 | OpenAI | 95.6% |
| 4 | GPT-5.3 Codex | OpenAI | 93.0% |
| 5 | Gemini 3 Pro Deep Think | Google | 88.7% |
| 6 | o1-preview | OpenAI | 88.6% |
| 7 | GPT-5.1-Codex-Max | OpenAI | 88.4% |
| 8 | Claude Opus 4.6 | Anthropic | 88.2% |
| 9 | Grok 4.1 Fast | xAI | 87.9% |
| 10 | GPT-5.2-Codex | OpenAI | 87.8% |

Notable:
- o1 (non-preview) ranks at 75% — below many newer reasoning models and well below o1-preview (88.6%)
- Claude Opus 4.6 at 88.2% — Anthropic's non-reasoning model competing with explicit reasoning models
- GLM-5 Reasoning at 87.6% — self-hostable open model
- Qwen3.5 397B Reasoning at 81.8% (provisional) — largest open-weight reasoning model
- Standard models (GPT-4.1 at 76.4%) are competitive on shorter-context tasks but trail reasoning models on complex multi-step problems

Benchmarks weighted: MuSR (20%), LongBench v2 (30%), MRCRv2 (25%), ARC-AGI-2 (25%). ARC-AGI-2 still provisional.

🔗 https://benchlm.ai/reasoning

---

## Vellum LLM Leaderboard — July 2026

### Best Overall (Humanity's Last Exam — HLE):
Claude Mythos 5 leads at 64.5%, followed by Claude Opus 4.8 (57.9%), Claude Sonnet 5 (57.4%). GPT-5 at 35.2%, Grok 4 at 25.4%.

### Best in Pure Reasoning (GPQA Diamond):
Claude Sonnet 5 leads at 96.2%, followed by Claude 3 Opus (95.4%), Gemini 3.1 Pro (94.3%), Claude Opus 4.7 (94.2%).

### Best in Agentic Coding (SWE-bench):
Claude Mythos 5 (95.5%), Claude Fable 5 (95%), Claude Opus 4.8 (88.6%).

### Best in Terminal Use (Terminal-Bench 2.1):
Claude Mythos 5 (88%), Claude Fable 5 (84.3%), GPT-5.5 (82.7%).

### Speed Leader: GLM-5.2 and Kimi K2.6
GLM-5.2: 347 t/s, $0.95/$3 per 1M tokens, 1.14s latency. Kimi K2.6: 342.6 t/s, $0.95/$4, 0.68s latency. Both undercut OpenAI/Anthropic on speed by 3-5x at fraction of cost.

### Key Pattern: The Reasoning Model Hierarchy
Different benchmarks reward different capability profiles. HLE rewards frontier models (Claude Mythos 5). GPQA Diamond rewards knowledge-reasoning (Claude Sonnet 5). SWE-bench rewards agentic coding (Claude Mythos 5). The market is fragmenting around task-specific best models rather than a single winner.

🔗 https://www.vellum.ai/llm-leaderboard

---

## Community Observations — July 1, 2026

### Non-Conversational Theory of Mind (arXiv:2606.31916, cs.CL)
GPT-5 succeeds on ~80% of NCP-ToM (Non-Conversational Planning ToM) tasks — the only model outperforming human participants on this task. All models, like humans, perform better on true belief induction than false belief induction — a positive alignment signal. This capability is essential for agentic deployments where models must induce belief states via actions rather than conversation.

### Clinical Reasoning Evaluation Illusion (arXiv:2606.31608, cs.CL)
GPT-4o-mini diagnostic accuracy: 95.0% in verbose contexts → 32.5% under information scarcity. 68.6% of correct diagnoses appear in reasoning traces but aren't reflected in final answers (reasoning-to-output mismatch). The LLM-as-Judge paradigm fails on human-verified failure sets. Benchmarks overestimate clinical reliability.

### Surrogate Interpretability Gap (arXiv:2606.32008, cs.LG)
Prediction fidelity substantially overstates attribution fidelity across 11 models spanning Llama, Qwen, GPT, Gemini families. White-box signals (attention patterns, perturbation magnitudes) are highly stable across models but only weakly predictive of causal attributions — which black-box input ablations capture by design. Access-validity inversion documented.

### Efficient Open Models Making Moves
GLM-5.2 and Kimi K2.6 are emerging as strong value propositions: competitive benchmarks at 5-10x lower cost than OpenAI/Anthropic offerings, with substantially higher throughput. This may shift the deployment calculus for cost-sensitive applications.

---

## Key Patterns — July 1, 2026

### 1. Reasoning Models Continue to Dominate — But Non-Reasoning Models Are Closing
BenchLM notes standard models are "closing the gap on shorter-context tasks." The premium for explicit chain-of-thought is real but may diminish as training methods improve.

### 2. Self-Hostable Reasoning Models Emerging
GLM-5 Reasoning (87.6%) and Qwen3.5 397B Reasoning (81.8%) represent the first wave of open-weight reasoning models competitive with proprietary frontier. The self-hosting trend is extending to reasoning-class capabilities.

### 3. QVal Challenges Dense Supervision Orthodoxy
The finding that simple prompting outperforms recent dense supervision literature is significant. It suggests the field may be engineering around the problem rather than solving it.

### 4. Clinical AI Has a Reasoning-to-Output Mismatch Problem
68.6% mismatch rate shows that even when models reason correctly, they fail to output correct answers. This is a deployment-critical failure mode that benchmarks miss.

### 5. GLM-5.2 as Efficiency Champion
347 t/s at $0.95/$3/M tokens challenges the assumption that frontier performance requires frontier pricing. Speed and cost efficiency may be the differentiator in mid-2026.

# Task 2 Findings — September 17, 2026
## Community Buzz + Reasoning Developments, Quantization, Benchmarks

**Research focus:** Reddit discussions, HuggingFace trending, FMRT reasoning tournament, BenchLM reasoning
**Date:** September 17, 2026
**Sources:** huggingface.co/models?sort=trending, fmrt.ai/report, benchlm.ai/reasoning

---

## Finding 1: HuggingFace Trending — September 17

### Top Models by Downloads:
1. **DeepSeek-V4.1-Flash:** 391k downloads (up from 366k on Sep 16 — +7% overnight; now 4.8x over 8 days)
2. **Qwen3.8-27B:** 7.46M downloads (steady, down from 7.7M peak)
3. **MiniCPM5-2B:** 330k downloads (up from 324k on Sep 16 — steady)
4. **Edge0-35B-A3B-preview:** 37.1k downloads (up from 27.8k on Sep 16 — +33% overnight; momentum accelerating, was 17.9k on Sep 15)
5. **YuE2-3B (text-to-audio):** 11.6k downloads (new entrant from yesterday's 693 — massive jump)
6. **Swift-Qwen3.8-27b:** 3.22k downloads (new entrant, <1 day old)
7. **Agnes-AI/Agnes-3.0-Flash:** 1.22k downloads (new entrant, <1 day old)

### Notable Observations:
- **Edge0-35B-A3B-preview momentum:** 693 → 17.9k → 27.8k → 37.1k in 4 days — acceleration phase
- **YuE2-3B explosive entry:** text-to-audio model jumped from 693 to 11.6k in 1 day — viral signal
- **DeepSeek-V4.1-Flash sustained dominance:** continues leading absolute volume among recent models
- **New model entrants cooling:** Swift-Qwen3.8-27b and Agnes-3.0-Flash showing early downloads but not yet viral

**Source:** https://huggingface.co/models?sort=trending

---

## Finding 2: FMRT Reasoning Tournament — September 17 Live

### Standings:
| Rank | Model | BT Rating | Win Rate | Recent Form |
|------|-------|-----------|----------|-------------|
| 1 | Claude Fable 5 | 1711 | 77% | — |
| 2 | GPT-5.6 Sol | 1641 | 68% | — |
| 3 | MiniMax M3 (open) | 1579 | 61% | ▲2 |
| 4 | Kimi K2.6 (open) | 1568 | 60% | ▲4 |
| 5 | Kimi 3 | 1567 | 59% | ▲8 |
| 6 | Grok 4.5 | 1551 | 55% | ▲4 |
| 7 | GLM 5.2 (open) | 1536 | 55% | ▲4 |
| 8 | Muse Spark 1.3 | 1475 | 47% | ▲4 |
| 9 | DeepSeek V4 Flash (open) | 1437 | 40% | ▲4 |
| 10 | Gemini 2.5 Pro | 1405 | 36% | ▲3 |

### Key Observations:
- **Kimi 3 standout:** +8 places on recent form (from #13 to #5) — third consecutive day of confirmed trajectory (was ▲8 on Sep 14, ▲8 on Sep 15)
- **Kimi K2.6:** +4 places to #4 — consistent climbing
- **MiniMax M3:** +2 to #3 — open-weight leader maintains momentum
- **Open-weight/proprietary gap:** 131 points (MiniMax M3 vs Claude Fable 5)
- **Closest rivalry:** DeepSeek V4 Flash vs Gemini 2.5 Pro — 27-27 across 59 meetings (5 ties)
- **Most one-sided:** MiniMax M3 vs Qwen 3.5 — 75-29 (5T) across 109 meetings

### Momentum Analysis:
- Open-weight cohort broadly rising: Kimi K2.6 ▲4, GLM 5.2 ▲4, DeepSeek V4 Flash ▲4
- Proprietary models (Claude, GPT) stable at top but not extending lead
- Field becoming more competitive from positions 3-10

**Source:** https://fmrt.ai/report

---

## Finding 3: BenchLM Reasoning — September 15 (Last Verified)

### Top 10 Rankings:
| Rank | Model | Creator | Weighted Score |
|------|-------|---------|----------------|
| 1 | GPT-6 Astra | OpenAI | 89.5 |
| 2 | Claude Fable 5.1 | Anthropic | 79.4 |
| 3 | Kimi K3 | Moonshot AI | 78.5 |
| 4 | MiniMax M3 | MiniMax | 78.0 |
| 5 | Muse Spark 1.3 | Meta | 78.0 |
| 6 | Claude Fable 5 | Anthropic | 77.6 |
| 7 | Qwen3.8-27B | Alibaba | 77.4 |
| 8 | Gemini 3.8 Flash | Google | 76.9 |
| 9 | Grok 4.6 | xAI | 76.2 |
| 10 | GLM-5.3 | Z.AI | 75.8 |

### Key Observations:
- **GPT-6 Astra dominant:** 89.5 score — 10+ points ahead of #2 Claude Fable 5.1 (79.4)
- **Claude Fable 5 vs Claude Fable 5.1:** Slight version difference — 5.1 ranks higher (79.4 vs 77.6)
- **Kimi K3 strong on BenchLM:** #3 at 78.5, despite lower FMRT ranking — benchmark-specific strength
- **Top 10 completely stable:** No changes from previous verification — reasoning tier crystallized
- **Open-weight:** MiniMax M3 at #4 (78.0) — best open-weight on BenchLM

### Benchmarks in reasoning category:
- **MuSR:** Multistep soft reasoning with natural language narratives
- **BBH (BIG-Bench Hard):** 23 challenging tasks where prior LLMs failed to exceed human average
- **LisanBench (2026):** Word-chain reasoning testing planning, recall, constraint following
- **Pencil Puzzle Bench (2026):** Multi-step verifiable reasoning with unique solutions
- **LongBench v2:** Long-context reasoning with extended windows

**Source:** https://benchlm.ai/reasoning

---

## Finding 4: Cross-Platform Comparison — Reasoning Capability Divergence

### FMRT vs BenchLM Divergence:
- **Kimi 3:** Strong on FMRT (recent #1, ▲8) but lower BenchLM ranking — tournament-specific strength
- **Claude Fable 5:** #1 on FMRT (1711 BT) but #6 on BenchLM (77.6) — different evaluation paradigms
- **GPT-6 Astra:** Dominant on BenchLM (#1, 89.5) but not on FMRT leaderboard yet — possibly new entrant
- **MiniMax M3:** Consistent #3-4 across both platforms — genuinely strong open-weight

### Key Insight:
FMRT measures live debate performance (contentious motions, adversarial reasoning); BenchLM measures fixed benchmark performance. Models specialise differently — Kimi 3's FMRT surge suggests adaptive reasoning under pressure, while GPT-6 Astra's BenchLM dominance suggests strength on structured problems.

**Sources:** fmrt.ai/report, benchlm.ai/reasoning

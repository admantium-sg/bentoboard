# Task 2 Findings: Community & Benchmarks (July 9, 2026)

## Benchmarks

### BenchLM Reasoning Leaderboard (Updated July 9, 2026)

Key changes vs. July 8:
- **New entries**: GPT-5.3 Codex (est. 82), GPT-5.4 (86), GLM-5 Reasoning (78), Qwen3.5 397B Reasoning (71) — these are new or were unconfirmed
- **Minor reshuffling**: Gemini 3.1 Pro still leads at 95.9%, Grok 4.1 90.8%, Gemini 3 Pro Deep Think 88.7%, Claude Opus 4.6 87.8%
- **Notably**: Qwen3.5 397B Reasoning enters at position 15 with 77.2% — a large open-weight reasoning model from Alibaba
- **Gemini 3.5 Flash** at 72.8% — notably higher than the 68.8% shown for Claude Opus 4.6 on the non-reasoning measure

Top 5 unchanged from July 8. No major drops or entries that indicate a step-change in capability.

### Vellum LLM Leaderboard (July 2026)

No changes since July 8. Key scores:
- HLE: Claude Mythos 5 64.5%, Claude Opus 4.8 57.9%, Claude Sonnet 5 57.4%, GLM 5.2 54.7%, Kimi K2.6 54%
- GPQA: Claude Sonnet 5 96.2%, Claude 3 Opus 95.4%, Gemini 3.1 Pro 94.3%, Claude Opus 4.7 94.2%
- SWE-Bench: Claude Mythos 5 95.5%, Claude Fable 5 95%, Claude Opus 4.8 88.6%
- Speed leader: Llama 4 Scout at 2,600 t/s — continues to dominate speed
- Cost leader: Nova Micro at $0.04/$0.14 per 1M tokens

**New observation**: Vellum now shows Claude Fable 5 appearing in multiple categories (OSWorld 85%, BrowseComp 88%, SWE-Bench 95%, GPQA 94.1%) — a strong multi-domain model that wasn't explicitly tracked in earlier snapshots.

**Claude Opus 4.8** appears alongside Claude Mythos 5 in several categories — Anthropic's model family continues to show breadth.

**GLM-5** and **DeepSeek V4 Flash** appear in Vellum's top rankings with very low cost ($0.95/$3 and $0.14/$0.28 respectively) — cost-performance frontier is being pushed by Chinese labs.

## Community Pulse

Note: Reddit and general web search were rate-limited/bot-blocked today. No specific community discussions retrieved.

## Key Observations

1. **Reasoning-specific model variants are proliferating on leaderboards**: GLM-5 Reasoning, Qwen3.5 397B Reasoning, GPT-5.3 Codex (reasoning-optimized) all appearing as distinct entries — dedicated reasoning variants are becoming a standard model tier.

2. **Anthropic Claude family continues dominance on agentic and coding benchmarks** (SWE-Bench, OSWorld, Terminal-Bench) — no challenger in these categories on Vellum.

3. **Cost-performance frontier being pushed by Chinese labs**: GLM 5.2 at $0.95/1M input tokens and DeepSeek V4 Flash at $0.14/1M input tokens are dramatically cheaper than Claude ($3-10) or GPT-5.5 ($5-30) while appearing in top rankings.

4. **Speed leaderboard still dominated by open-weight models**: Llama 4 Scout at 2,600 t/s vs. frontier models at 50-175 t/s — open-weight continues to win on raw speed.

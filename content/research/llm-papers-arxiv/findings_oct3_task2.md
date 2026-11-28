# Task 2 Findings: Community Buzz + Benchmarks — Oct 3, 2026

## FMRT Leaderboard (October 3, 2026)

### Key Movers
- **Gemma 4 31B**: Biggest riser — up 8 on recent form (career rank #20, recent #12). Standout this month.
- **Kimi 3**: ▲7 on recent form (career #9, recent #1 equivalent). Strong sustained momentum.
- **Kimi K2.6**: ▲6 (career #7, recent #5). Open-weight.
- **GLM 5.2**: ▲7 (open-weight).
- **Grok 4.7**: ▲5.
- **DeepSeek V4 Flash**: ▲5 (open-weight).
- **GPT-5.6 Sol**: ▼1 — cooling after recent peak.

### Stable Picture
- Claude Fable 5: #1 (BT 1708, 77%) — stable
- GPT-5.6 Sol: #2 (BT 1635, 68%)
- MiniMax M3: #3 open-weight (BT 1571, 61%)
- Proprietary lead: 137 points (Claude Fable 5 vs MiniMax M3)

### Notable
- MiniMax M3 vs Qwen 3.5: 77-30 across 112 debates — dominant open-weight lead over Qwen
- Kimi K2.6 vs GLM 5.2: 51-52 — essentially tied over 107 debates
- Gemma 4 31B is the dark horse — large jump in recent form despite low overall BT (1312, 24% win rate)
- Kimi ecosystem (Kimi 3 + Kimi K2.6) showing consistent climbing momentum across multiple days

### FMRT vs BenchLM Divergence
- Kimi K3: #5 FMRT but #18 BenchLM — tournament reasoning vs fixed benchmark reasoning measuring different things
- Muse Spark 1.3 and MiniMax M3 tied at #6-7 on BenchLM but separated on FMRT — different evaluation modalities

Source: https://fmrt.ai/report

## BenchLM Leaderboard (October 2, 2026 — last verified)

### Top 10 Stable
1. GPT-6 Astra: 89.6
2. Claude Opus 5.5: 82.4
3. Claude Fable 5.1: 81.4
4. GPT-6 Sol: 79.6
5. GPT-6.1 Sol: 79.4
6. MiniMax M3: 79.4
7. Muse Spark 1.3: 79.4
8. Claude Sonnet 5.5: 79.2
9. Qwen3.8-27B: 78.7
10. Claude Opus 5: 77.3

### Notable
- OpenAI reasoning family (GPT-6 Sol, GPT-6.1 Sol) occupies #4-5 alongside Anthropic reasoning portfolio
- GLM-5.3-Flash: #11 (77.3) — flash variant very close to full GLM-5.3 (#12, 77.1)
- New entry: Inkling at #13 (75.5) — Thinking Machines Lab
- Grok 4.7 at #14 (75.0) — still below Anthropic and OpenAI reasoning models
- Kimi K3 at #18 (65.8) — continues to diverge from FMRT ranking

### Key Insight
BenchLM weighted benchmarks: ARC-AGI-2 (25%), LongBench v2 (25%), MRCRv2 (20%), BBH, MuSR, Pencil Puzzle Bench, LisanBench, Graphwalks. ARC-AGI-2 is hardest public benchmark (avg human 66%). GPT-6 Astra's dominance suggests strong multimodal reasoning advantage on fixed benchmarks.

Source: https://benchlm.ai/reasoning

## HuggingFace Trending (October 3)

### New/Viral Entries
- **LTX-2.5** (Lightricks): 1.63M downloads, updated ~19 hours ago — Image-to-Video model, very new and viral
- **Aleph-Alpha/Kolibri-1**: 78B, updated ~7 hours ago — Text Generation, very recent drop
- **Cloudflare/clef**: 2.62k downloads (27B, 2 days old) — Image-Text-to-Text, new entrant

### Normalizing/Sustained
- **Ternary-Bonsai-2-27B-gguf**: 3.97M downloads (down from 3.87M Oct 2 — viral plateauing)
- **Qwen3.8-27B**: 6.9M downloads (down from 6.93M — normalizing after peak)
- **DeepSeek-V4.1-Flash**: 788k downloads (up from 768k — steady growth)
- **Comfy-Org/Qwen-Image-2.1**: 5.67M (was 5.38M — still growing viral fork)
- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion**: 2.12M downloads — community fine-tune ecosystem alive

### Key Insight
Qwen image model ecosystem continues rapid branching. LTX-2.5 is a new image-to-video entrant gaining traction. Ternary quantization appears to be normalizing after viral spike. DeepSeek flash variant growing steadily.

Source: https://huggingface.co/models?sort=trending

## Sources
- https://fmrt.ai/report
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending

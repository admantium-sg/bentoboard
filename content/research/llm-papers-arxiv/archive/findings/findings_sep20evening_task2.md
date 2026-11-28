# Task 2 Findings — Community Buzz + Reasoning/Benchmarks/Quantization
**Date:** 2026-09-20 | **Focus:** Reasoning developments, benchmarks, quantization, community pulse

---

## Community Highlight 1: GPT-6 Astra Solves 108-Year-Old WWI Cipher
**Source:** r/singularity (Score: 1731, 167 comments) | https://www.reddit.com/comments/1wkwzzj

OpenAI's ChatGPT-6 Astra decrypted the ADFGVX cipher used by Germany in WWI — a 108-year-old unsolved cryptographic puzzle. The model combined multimodal reasoning to analyze fragmented historical documents and linguistic patterns, using contextual understanding + symbolic logic modules. Verified decryption in under 12 hours. First time an AI has autonomously solved a historically significant cryptographic puzzle.

Community reactions mixed: excitement about historical discovery vs. unease about cryptographic vulnerability implications.

**Why it matters:** First concrete demonstration of GPT-6 Astra's multimodal symbolic reasoning at a historically significant level. Unprecedented for an AI to solve a century-old cipher that stumped cryptographers.

---

## Community Highlight 2: "With Gemini 4, bench goes up" — r/LocalLLaMA
**Source:** r/LocalLLaMA (Score: 625, 62 comments) | https://www.reddit.com/comments/1wkxx8e

Posted Sep 19, 2026 21:18 UTC. A notable r/LocalLLaMA post suggesting Gemini 4 is showing benchmark improvements. This is the first mention of Gemini 4 in recent community reports.

**Why it matters:** If Gemini 4 is improving on benchmarks, it could disrupt the current leaderboard — BenchLM #1 is GPT-6 Astra (89.5) and FMRT #1 is Claude Fable 5. Gemini hasn't been near the top in recent rounds.

---

## Community Highlight 3: AMD RX 10800 XT for LLM Inference
**Source:** r/LocalLLaMA (Score: 260) | https://www.reddit.com/comments/1wl1hlj

AMD's unreleased Radeon RX 10800 XT reportedly outperforms NVIDIA RTX 5090 by 15-25% in LLM inference tasks. Attributed to 3D-stacked memory and optimized tensor cores for sparse attention. Early benchmarks: 340 tokens/sec on Llama 4-70B at 8-bit quantization.

**Why it matters:** Hardware competition heating up — if AMD can beat NVIDIA on LLM inference specifically, this could reduce GPU cost-per-token for local deployment significantly.

---

## Community Highlight 4: Jev Architecture Mania Continues
**Source:** r/LocalLLaMA, r/singularity

Jev (pruning-based architecture) continues to generate community interest:
- "I reviewed 287 open-source Jev projects. Here are 20..." (Score: 118, r/LocalLLaMA)
- "What is Jev? TypeSafe's System One model explained" (Score: 62)
- Multiple posts about Jev running locally
- "Jev Cuts AI Decision Costs 100x And Vercel, Cloudflare Run AI Edge" (r/singularity, Score: 276)

Also notable: "I literally built the Jev architecture one year back and..." (r/LocalLLaMA, Score: 2547) — multiple posts claiming prior art.

**Why it matters:** Jev is the efficiency architecture getting the most community attention. 100× cost reduction claim for decision-making tasks is striking.

---

## Hardware Note: 2TB PMem200 for Kimi K3 at tg128 ~ 1 Token/Token
**Source:** r/LocalLLaMA (Score: 53) | https://www.reddit.com/comments/1wkxlg6

2TB of cheap PMem200 DIMMs can apparently run Kimi K3 at tg128 (~1 token per token). This is about persistent memory serving for LLM inference.

**Why it matters:** New memory technology enabling different inference tradeoffs — persistent memory as main RAM for large models.

---

## Leaderboard Status (unchanged from Sep 20 morning run)
**FMRT #1:** Claude Fable 5 (BT 1707) | **BenchLM #1:** GPT-6 Astra (89.5)
**Open-weight leader:** MiniMax M3 (#3 FMRT, #4 BenchLM)

Note: Benchmarks last verified Sep 18. No updates since previous run.

---

## HuggingFace Trending (Sep 20 evening)
- Ternary-Bonsai-2-27B-gguf: 1.91M downloads (unchanged from previous report — was 406k 4 days ago, now plateaued at 1.91M)
- Qwen3.8-27B: 7.33M (stable)
- DeepSeek-V4.1-Flash: 497k (stable)
- Edge0-35B-A3B-preview: 76.7k (was 52k — continued growth)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 43k (new entry, 2 days ago)
- Ternary-Bonsai-2-27B-mlx-2bit: 30k (new, 3 days ago)

**Trend:** Ternary quantization gaining additional format variants (mlx-2bit). GSQ (group-wise smoothing quantization) variant of Qwen3.8-Flash-Next emerging.

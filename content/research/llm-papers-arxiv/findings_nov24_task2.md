# Task 2 findings — community buzz, reasoning, quantization, benchmarks, model releases

- Run date: 2026-11-24
- Window: 2026-11-23T17:28:00Z → 2026-11-24T17:28:00Z (epochs 1795454880 → 1795541280)
- Scope: Task 2 only (leaderboards, model releases/open-weight artifacts, community buzz, notable threads, caveats)
- Working artifacts: `/home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv/tmp/nov24/t2/`

---

### Leaderboard deltas

**BenchLM published a new leaderboard snapshot; 16 of 50 tracked rows changed score (every delta ≤ 0.5 points), 4 further rows changed rank only, and no model was added or removed.** Snapshot id changed from `2026-11-23-1a6fc6525ad498ed` to `2026-11-23-c161f2e594191f88`; metadata `lastUpdated: 2026-11-23`, `mode: bench-align-v5`, `methodologyVersion: bench-align-v6.0-2026-11-19`, `approvedSnapshotId: None`. The leader still ranks 216 models overall.
Source: https://benchlm.ai/api/data/leaderboard

**Largest score move: Gemini 4 Neon 91.3 → 91.8 (+0.5), rank unchanged at 2.** The leader Claude Fable 5.2 did not move (93.3). No model gained or lost more than half a point, so this is a re-scoring pass, not a capability shock.
Source: https://benchlm.ai/api/data/leaderboard

**Largest rank move: Qwen4 Max 74.8 → 75.2 (+0.4), rank 17 → 15.** The jump is tie-break churn in the 74.8–75.2 band: Claude Opus 5 (75.1) went 15 → 16 and Claude Fable 5 (74.8) went 16 → 17. Two further rows changed rank with no score change (ties): Gemini 3.7 Flash 31 → 30 and Ling 3.1 Flash 30 → 31.
Source: https://benchlm.ai/api/data/leaderboard

**Nine rows drifted down, all by 0.1:** Claude Opus 5.5 82.8 → 82.7, Gemini 4 Carbon 88.3 → 88.2, GPT-6.2 Sol 82.3 → 82.2, GPT-6.1 Sol 81.1 → 81, GPT-6.1 Terra 80.8 → 80.7, Kimi K3.1 Pro 70.0 → 69.9 (rank 22 → 23), MiMo-V2.6-Pro 63 → 62.9, Muse Wonder Full 77.4 → 77.3. Four rows drifted up by 0.1: Claude Fable 5.1 78.7 → 78.8, Gemini 3.8 Flash 67.9 → 68, GPT-5.6 Terra 65.9 → 66, Qwen3.8 Max 65.3 → 65.4, Claude Haiku 5.5 63.5 → 63.6. DeepSeek V4.1 Flash 1017 70.0 → 70.1 (rank 23 → 22).
Source: https://benchlm.ai/api/data/leaderboard

**Artificial Analysis Intelligence Index (homepage table) is frozen for a second consecutive day: 28 base-model rows parsed, every score byte-identical to the 2026-11-23 snapshot.** The 47-row freeze reported on 11-22/11-23 (including effort-variant rows) did not break: no new models, no score changes, no removals.
Source: https://artificialanalysis.ai/

**Ling-3.2-air (Intelligence Index 23.3878, changelog date 2026-11-23) is still absent from the AA homepage Intelligence Index table.** Changelog entry id `86a030bb-4fe4-41f6-9cc3-881829106233`, model id `f232d373-e666-488c-b0f2-39ef90321f64`, creator id `4df238a9-d4fd-4cf2-ab1e-d12956c41f9b` (InclusionAI). Two days after scoring, the model still has no row on the public leaderboard — a persistent ingest gap, not a one-day delay.
Source: https://artificialanalysis.ai/changelog

**AA changelog itself froze during the window: 76 entries parsed, newest entry dated 2026-11-23, zero entries dated 2026-11-24.** The two newest entries are `modelAdded` Ling-3.2-air (2026-11-23) and `hostModelAdded` Thinking Machines (2026-11-23); the preceding batch is 2026-11-22 (LingSante-3.1-flash plus Makora/Databricks hosts).
Source: https://artificialanalysis.ai/changelog

**AA Decision Index v2.1 also unchanged: 30 rows, zero added, zero removed, zero score changes vs 2026-11-23.** Top rows: Claude Haiku 5.5 (Max) 76.4922, **Bison 31B (Base Labs) 75.8803**, GPT-6 Luna (Max) 75.6745, d1.2-ultra (Liquid AI) 74.846, Drex Max v1.1 72.6242, SubQ Snap 1.2 72.5805, GLiDE v1.2 72.5152, Mammoth 27B (Base Labs) 71.3606, d1-ultra 70.5764, Decider v1.3 (Perplexity) 70.4081.
Source: https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

**Benchmark-integrity flag is live on AA's SciCode evaluation:** "An independent audit has flagged possible errors in the dataset of this evaluation. We are reviewing its findings." This is the only evaluation-level integrity notice visible in the homepage payload today, and it is a genuine benchmark-controversy item rather than a score change.
Source: https://artificialanalysis.ai/

**Bison naming mismatch worth flagging:** AA's Decision Index lists "Bison 31B" from creator "Base Labs" at 75.8803, while the open-weight artifact `baselabs/bison-1` (462 downloads, 36 likes, base `google/gemma-4-31B-it`) does not appear on any AA leaderboard table under that name. The two may or may not be the same weights; no source in-window confirms the link.
Source: https://huggingface.co/baselabs/bison-1

---

### Model releases and open-weight artifacts

**No tracker-confirmed flagship model release inside the window.** llm-releases.com (528 published models, 110 labs, 97 new in 30 days) shows its newest dated entries on 2026-11-23 (GLM-5.4, LingSante-3.1-flash, LingSante-3.1-air-VL, MemT-1.0-Pro, Kolibri 1.1) and no 2026-11-24 entry; the site's "latest tracked event" is 2026-12-11. BenchLM's release page independently agrees: 4 confirmed releases dated Nov 18–24, of which exactly 1 falls in the Nov 23–24 band (GLM-5.4, Z.AI), and "the latest is dated November 23, 2026". The 24-hour window is therefore a genuine release drought relative to yesterday's five launches.
Source: https://www.llm-releases.com/
Source: https://benchlm.ai/model-updates

**New open-weight release: `novyn-looped-decider-0.9` (Novyn Labs, announced 23 November 2026).** Built on Thinking Machines Lab's `TML-d24-varloop-research` (24-layer transformer, middle 12 layers looped, 10 loops at inference, shared weights), with a decision head trained on top of the frozen base; it picks one option out of up to 255 without generating text or a reasoning trace. The HF repo `novyn/novyn-looped-decision-0.9` returns HTTP `401` from the API (gated), so the model card and licence could not be verified. Surfaced on HN as "Show HN: A SoTA open-weight looped decision model", 2 points, 2026-11-24T00:21:00Z.
Source: https://www.novyn.ai/blog/announcing-novyn-looped-decision-0.9/
Source: https://huggingface.co/novyn/novyn-looped-decision-0.9

**In-window Hugging Face repo creations (createdAt between 2026-11-23T17:28Z and 2026-11-24T17:28Z), all with 0 downloads so far:** `Multiqueue/scuttle-1.7b` (17:25:20Z, LFM3-based, tags `graph-search`/`decision-model`/`swarm-search`/`mcp`), `veripazari/MoganOCR-TR` (17:26:49Z, qwen3_5 OCR VLM), `veripazari/whisper-large-v3-turbo-turkish` (17:25:50Z), `FastFlowLM/Hy-MT3-1.8B-NPU2` (17:22:30Z, Hunyuan translation), `tfjack/Inkling-2-Mini-Uncensored-oQ8e-mtp` (17:15:34Z, MLX oQ8e quant of Inkling 2 Mini with MTP), `mlx-community/LongCat-Video-Avatar-1.6-{q4,q8,bf16}` (17:11:52Z / 17:14:22Z / 17:18:33Z), `Narik67/Qwen3.8-27B-TURBO-…-GGUF` (17:10:34Z), `Narik67/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive` (17:04:00Z), `xx69mvx/DeepSeek-V4.1-Flash-1017-uncensored` (17:10:33Z), `ian139/inkling-2-mini-grounded-writer-lora` (17:05:14Z, LoRA with `grpo`/`sft`), `darioooooo0o/jdewitt-qwen3-4b-instruct-2507-q8_0` (17:18:56Z).
Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=100

**Quantization wave in-window (all created 2026-11-24T16:44Z–16:59Z, all 0 downloads / 0 likes at capture time):** `r0b0tlab/Inkling-2-Mini-Derisked-EXL3-5.08bpw-SAGE-REXL3` (5.08 bpw EXL3, gated=auto), `Krishando/Nemotron-3.5-Lightning-30B-A3B-EXL3-2.3bpw` (2.3 bpw EXL3), `synaptex/Qwen3.6-35B-A3B-AutoRound-W4A8-FP8`, `SolNihil/GLM-5.3-Flash-oQe-5.8bpw` (5.8 bpw), `Shiftedx/Qwen3.8-27B-AEON-Pi-MLX-Attention8`, `mlx-community/Holo4-27B-4bit`, `Interchained/bison-1-GGUF` (16:57:01Z). This is a clear continuation of the "report quant/bpw/size" meta-rule in practice: 4 of these 7 repos encode the bit-width in the repo name.
Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=100

**Established quant artifacts keep compounding download volume:** `unsloth/Inkling-2-Mini-GGUF` 1,913,407 downloads / 1,215 likes (HF trending score 1068, #2 overall), `AtomicChat/Inkling-2-Mini-Uncensored-GGUF` 573,775 downloads / 716 likes (last modified 2026-11-24T11:48:10Z), `DavidAU/Qwen3.8-27B-TURBO-…-MTP-GGUF` 1,851,836 downloads / 4,304 likes, `chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized` 474,726 downloads / 879 likes, `nari-labs/Qwen3.8-27B-NariQ-GGUF` 8,795 downloads / 99 likes, `strata-engine/Inkling-2-Mini-Strata` 2,149 downloads / 113 likes.
Source: https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=60

**HF trending leaders are unchanged from yesterday — Inkling 2 Mini still dominates the public open-weight board:** `thinkingmachines/Inkling-2-Mini` trending score 1209.5, 69,042 downloads, 5,702 likes (#1); `unsloth/Inkling-2-Mini-GGUF` #2; `AtomicChat/Inkling-2-Mini-Uncensored-GGUF` #5; `higurashi-ai/Haru-4B` #7 (9,575 downloads, 954 likes); `harness-hub/Qwen3.8-27B-pi-adapted` #6 (3,529 downloads, 1,054 likes).
Source: https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=60

**Baidu `ERNIE-5.5-Flash-Preview` moved but was not released in-window:** HF `createdAt 2026-11-23T09:00:29Z` (before the 17:28Z cutoff), `lastModified 2026-11-24T07:17:13Z`, 75 downloads, 213 likes, base `baidu/ERNIE-5.5-Flash-Base`, licence `apache-2.0`, HF trending #15 (score 145). The in-window event is traction, not launch.
Source: https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=60

**`inclusionAI/Ling-3.2-air` also pre-dates the window but was actively updated inside it:** HF `createdAt 2026-11-23T03:55:12Z`, `lastModified 2026-11-24T08:31:31Z`, 733 downloads, 158 likes, licence `mit`, tags include `bailing_moe_v3_vl`, `eval-results`, `fp8`; HF trending #14 (score 146). Its AA Intelligence Index score (23.3878) is still not published on the AA homepage table.
Source: https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=60

**`baselabs/bison-1`:** HF `createdAt 2026-11-20T04:49:38Z`, `lastModified 2026-11-20T18:50:33Z`, 462 downloads, 36 likes, base `google/gemma-4-31B-it`; GGUF conversion `Interchained/bison-1-GGUF` created in-window 2026-11-24T16:57:01Z. Pushed to HN as "#1 decision model: Bison-1, a 31B decision model post-trained from Gemma-4-31B", 4 points, 2026-11-23T20:32:00Z.
Source: https://huggingface.co/baselabs/bison-1

**`higurashi-ai/Haru-4B`** (multilingual full-duplex spoken dialogue, pipeline `audio-to-audio`) was created 2026-11-12T11:05:59Z with 9,575 downloads / 954 likes and surfaced on HN in-window ("Haru-4B: multilingual full-duplex spoken dialogue model", 2 points, 2026-11-23T21:35:09Z) — an older model gaining in-window attention.
Source: https://github.com/higurashi-ai/Haru

---

### Community buzz

**HN in-window volume: 1,183 stories matched the numeric filter; 600 unique stories were fetched across pages 1–6, of which 156 (26.0%) had AI/LLM-style titles.** HN remains the only fully accessible community source today (see Caveats).
Source: https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i%3E1795454880%2Ccreated_at_i%3C1795541280&hitsPerPage=100

**Dominant in-window thread — "LLM agents work for their parent companies, not for you": 629 points, 256 comments, 2026-11-24T12:40:15Z** (HN id 50627340). By far the highest-scoring AI item of the window, ahead of the second-place technical thread (348 points).
Source: https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/

**Second-place thread — Anthropic's formal-math "VP ≠ VNP over Every Field": 348 points, 316 comments, 2026-11-23T22:09:10Z** (HN id 50620102), with the paper PDF re-posted twice in-window (26 points at 22:23:04Z, 23 points at 2026-11-24T07:38:50Z) and an alphaXiv entry (2 points, 2026-11-24T04:43:50Z).
Source: https://github.com/anthropics/formal-math/tree/main/vp-vnp

**OpenAI published a counter-preprint on the same claim in-window:** "VP and VNP are different [OpenAI] [pdf]", 8 points, 1 comment, 2026-11-24T06:03:03Z, linking `preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf`. Two frontier labs are publicly disputing each other's formal-math results within 8 hours — the clearest "reasoning development" story of the day.
Source: https://github.com/openai/math/blob/main/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf

**Anthropic shipped Claude Ship (agents review, fix and approve code changes):** TechCrunch story "Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes" (HN 4 points, id 50621162, dated 2026-11-23), product docs at `code.claude.com/docs/en/claude-ship` (HN 2 points, 2026-11-24), and a third mirror via stocks.apple.com (3 points). Note for accuracy: the Anthropic article "Code Review is now generally available" is dated **October 15, 2026** and is *not* the in-window item.
Source: https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/
Source: https://code.claude.com/docs/en/claude-ship

**Mistral ends Vibe allowance for third-party harnesses on December 1, 2026** — HN "Mistral ends Vibe allowance in third-party harnesses on Dec 1", 6 points / 3 comments, 2026-11-24T05:14:48Z, primary link is a screenshot of Mistral's notice ("Screenshot-2026-11-23-at-23-10-23-An-update-on-using-your-Mistral-Vibe-API-key-Fastmail.png"). A parallel HN link points at the Reddit thread in r/MistralAI (2 points, 2026-11-24T13:12:17Z). Quoted policy text: "Starting with your next billing cycle (December 1, 2026), usage made through non-Mistral products, such as third-party coding tools or harnesses, will count towards your monthly free API allowance, rather than your Vibe allowance." This is a live commercial-access change to open-model ecosystems, and it is the kind of item that pushes open-weight models toward third-party hosts.
Source: https://www.reddit.com/r/MistralAI/comments/1y3nr3a/vibe_update_vibe_allowance_changes/
Source: https://linux.do/t/topic/3230996

**Mistral simultaneously ran a consumer promo (2026-11-23):** it dropped the capped Vibe trial and is offering a free month of Vibe Pro to anyone in Europe with code `MISTRALVIBE`.
Source: https://www.ailyre.com/source/?id=mistral-vibe-pro-free-month-europe-mistralvibe-2026-11-23&lang=en

**Model lifecycle: "GPT-5.6 Sol is deprecating on December 23"** (2 points, 2026-11-23, HN id 50620861, linked to an OpenAI/ChatGPT post). llm-releases.com separately lists its latest tracked event as 2026-12-11.
Source: https://twitter.com/ChatGPT/status/2124981905380569283

**OpenRouter governance: "OpenRouter drops AI providers over leaked prompts and secrets"** (2 points, 2026-11-24T14:27:24Z) and "OpenRouter users spent more $ on models from Google than OpenAI last week" (13 points / 2 comments, 2026-11-24T04:45:07Z) — provider churn plus a Google-vs-OpenAI spend crossover.
Source: https://www.bleepingcomputer.com/news/security/openrouter-drops-ai-providers-over-leaked-prompts-and-secrets/
Source: https://twitter.com/openrouter/status/2124925631012209137

**Nvidia / Jensen Huang reinstatement generated sustained in-window coverage (follow-up to yesterday's theme):** Bloomberg "Nvidia Board Reinstated CEO Without Consulting Management" (8 points, 2026-11-23T20:39:45Z), CNBC "Trump tells CNBC 'I made the deal' to reinstate Nvidia's Jensen Huang" (9 points, 2026-11-23T17:32:33Z — i.e. 4 minutes after the window opened), FT "Trump made up to $15M on Nvidia shares after Huang's return" (10 points, 2026-11-24T14:17:25Z), NPR "For workplace culture champions, Jensen Huang's return is 'unfathomable'" (8 points, 2026-11-24T17:03:07Z), Tax Research "Corporate governance is dead. Jensen Huang proves it" (8 points, 2026-11-24T13:00:18Z), The Atlantic "The Economy Is a Hostage Situation" (8 points, 2026-11-23T22:27:36Z), Reuters "US to Blacklist Megaspeed" (8 points, 2026-11-23T21:27:38Z).
Source: https://www.cnbc.com/2026/11/23/trump-nvidia-jensen-huang.html
Source: https://www.ft.com/content/67b0a070-c2a9-4229-885a-383cca657763

**Anthropic IPO follow-through:** "Anthropic CEO Dario Amodei Sold $280M in Shares as Part of Record IPO" (Forbes, 8 points, 2026-11-24T08:10:10Z).
Source: https://www.forbes.com/sites/siladityaray/2026/11/24/anthropic-ceo-dario-amodei-sold-280-million-in-shares-as-part-of-record-ipo

**Agent-workflow community traffic (small Show HN items, all in-window):** "Show HN: Juncts, one DM inbox for five apps that Claude and ChatGPT can work in" (9 points, 2026-11-24T03:16:58Z), "Toolfence-scan – static checks for Cursor/Claude/Copilot skills" (9 points, 2026-11-24T02:07:18Z), "Show HN: Agent-first-browse – Web automation with delta snapshots and LangGraph" (9 points, 2026-11-24T02:06:09Z), "Show HN: Open-Interpretability Explain" (8 points, 2026-11-24T13:47:20Z), "Incognide, the AI-native IDE for research and development, reaches 500 gh stars" (8 points, 2026-11-24T02:02:59Z), "The State of Agentic Engineering in 2026" (8 points, 2026-11-23T21:14:37Z), "Show HN: Amni-CAD – parametric CAD with stress and flow simulation in a browser" (8 points, 2026-11-23T22:47:31Z).
Source: https://github.com/StockGorilla/skill-scan
Source: https://www.superconductor.com/state-of-agentic-engineering-2026

**Detection/eval tooling chatter:** "GPTZero 5.0" (4 points, 2026-11-24T06:41:36Z) with a benchmark-claim tweet "Our new GPTZero 5 outperforms Pangram in almost all third-party benchmarks" (2 points, 2026-11-23T18:55:30Z) — a vendor claim about third-party benchmark leadership, unverified.
Source: https://gptzero.me/news/introducing-gptzero-5
Source: https://twitter.com/alexcdot/status/2124934039455109209

**Reddit-origin item that did surface:** "r/RedditEngin: We Let AI Approve PRs at Reddit. Here's What Happened" (10 points / 1 comment, 2026-11-24T02:56:06Z) — first-hand AI code-approval experience report.
Source: https://www.reddit.com/r/RedditEng/comments/1y3wbkw/we_let_ai_approve_prs_at_reddit_heres_what/

---

### Notable threads

**1. Formal-math reasoning dispute (Anthropic vs OpenAI) is the day's substantive research-development story.** Anthropic's "VP ≠ VNP over Every Field" drew 348 points / 316 comments; OpenAI's "VP and VNP are different" preprint landed in-window with an 8-point HN post and its own alphaXiv mirror. Unlike yesterday's paper-digest threads, this is a live inter-lab methodological dispute, and it explains why AI-math discussion dominated a 1,183-story day.
Source: https://github.com/anthropics/formal-math/tree/main/vp-vnp
Source: https://github.com/openai/math/blob/main/preprints/VP-and-VNP-are-different-November-23-2026/paper.pdf

**2. Agent incentives: "agents work for their parent companies, not for you" (629/256) is the top-scoring thread, comfortably ahead of any model-release item.** Combined with Anthropic's Claude Ship GA-coverage, Mistral's harness-allowance change, and OpenRouter dropping providers over prompt leakage, the window's centre of gravity is agent deployment economics and vendor alignment — not benchmark scores.
Source: https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/

**3. New benchmark surfaces appeared (community-built eval push):** "Show HN: Terminal Tasks Open – 30 hard tasks, best model passes 67%" (2 points, 2026-11-24T16:08:43Z, github.com/vettoai/terminal-tasks-open), "Beating ClickBench SOTA with a team of agentic systems engineers" (2 points, 2026-11-24T16:20Z), "Show HN: Run LLM Benchmarks at 1/10th of the cost" (2 points, 2026-11-24T09:46:59Z, benchmarkrouter.newmeasure.ai), "Can an LLM Grade Objective Facts Without Favoring Itself?" (2 points, logcat.ai, dated 2026-11-23), plus "The Most Important Charts in AI Are Wrong" (3 points, 2026-11-23T17:36:56Z) — a critique of chart-based AI reporting, which sits uncomfortably next to a day of ≤0.5-point leaderboard noise.
Source: https://github.com/vettoai/terminal-tasks-open
Source: https://benchmarkrouter.newmeasure.ai/
Source: https://blog.logcat.ai/2026/11/23/can-an-llm-grade-objective-facts-without-favoring-itself/

**4. Reasoning-evaluation research snippets:** "Frontier models need only one text to unmask its human or AI author" (arXiv:2611.26216, 3 points, 2026-11-23T20:54:11Z) and "Chinese models do not overthink, Gemini 4 Neon does" (micjm, 3 points, 2026-11-23T17:41:06Z — a token-efficiency comparison that directly corroborates Gemini 4 Neon's in-window BenchLM rise to 91.8). Also "Looped Weight-Space Programming: use AI to set model weights" (2 points, 2026-11-24T09:41:22Z) — same looped-model family as today's Novyn release.
Source: https://arxiv.org/abs/2611.26216
Source: https://micjm.com/blog/do-chinese-models-overthink-compared-to-american-ones/

**5. Harness-adapter / model-hardware coupling theme:** "Harness Adapters – Train Your Model to Your Harness" (HF blog, 3 points, 2026-11-23T19:23:49Z), `harness-hub/Qwen3.8-27B-pi-adapted` climbing to HF trending #6 (3,529 downloads, 1,054 likes), and "Smart models probably don't need their own harness" (micjm, 2 points). This is the strongest in-window signal of a shift from model-only releases to model+harness co-design.
Source: https://huggingface.co/blog/harness-hub/harness-adapters
Source: https://micjm.com/blog/harness-gain-vs-model-intelligence/

**6. Local-model tooling keeps expanding:** "Show HN: A training engine for your local model, using your idle compute" (50 points), "Sovereign skills: Porting an AI code audit to Inkling 2 Mini and Qwen3.8" (4 points, 2026-11-23T21:05:15Z — an explicit port to the two most-discussed open models), and "Aavaaz: Self-hosted, production-ready transcription with Whisper" (8 points, 2026-11-23T20:27:13Z).
Source: https://getstream.io/blog/local-video-audit-skill/

**7. RL infrastructure and stealth releases:** "RL Infrastructure at Microsoft AI" (4 points, 2026-11-23T18:32:02Z, microsoft.ai) and "HungerG – New stealth model available on OpenCode Go" (3 points, 2026-11-24T12:27:05Z) — an undocumented model appearing on a coding-agent platform.
Source: https://microsoft.ai/news/rl-infrastructure-at-microsoft-ai/
Source: https://twitter.com/opencode/status/2125062647846694979

**8. Yesterday's themes — follow-up status:** *Inkling 2 Mini dominance* → **confirmed and deepened** (HF trending #1 base + #2/#5 GGUF quant repos, 1.91M and 573K downloads, plus two new in-window quant/LoRA repos). *Report quant/bpw/size meta-rule* → **informally adopted, no formal rule observed**: 4 of 7 new quant repos encode bit-width in the name (5.08bpw, 2.3bpw, 5.8bpw, oQ8e), but no community or vendor proposal was found in-window. *GLM-5.4 reception* → **no new in-window discussion found**; the model only appears as a tracker-confirmed Nov 23 release and as the target of the new `SolNihil/GLM-5.3-Flash-oQe-5.8bpw` quant. *Kolibri 1.1* → **no in-window follow-up**. *Mathbabe "AI bubble popping"* → **no in-window follow-up found**. *Nvidia / Jensen Huang reinstatement* → **strongly continued** (6 separate threads, see above).
Source: https://www.llm-releases.com/

---

### Caveats and coverage gaps

**Reddit was completely inaccessible this run — this is the single biggest coverage gap.** Attempted and failed: `https://www.reddit.com/r/LocalLLaMA/new/.rss?limit=100` → `404 Not Found`; `https://old.reddit.com/r/LocalLLaMA/new/.rss` → `403`; `https://reddit.com/r/LocalLLaMA/new/.rss` → `429`. Redlib mirrors tried: `redlib.perennialte.ch` → shutdown notice ("This Redlib instance was shut down on 31 August 2026 due to long-term unreliability."), `redlib.catsarch.com` → `429`, `redlib.tiekoetter.com` → bot-check page, `redlib.4o1x5.dev` → decommissioned, `redlib.private.coffee` → `418`, `l.opnxng.com` → `429`, `redlib.freedit.eu` → `403`, `redlib.cow.rip` → `403`, `redlib.thepixora.com` → `403`, `redlib.privadency.com` and `redlib.hbubli.cc` → Anubis "Making sure you're not a bot!" wall, `redlib.zanity.net` / `redlib.nerdvpn.de` → connection failure, `reddit.jeremyh.xyz` → connection failure. **No r/LocalLLaMA or r/MachineLearning post scores, upvote counts or comment counts are reported anywhere in this file** — only Reddit content that happened to be cross-posted to HN (6 reddit-linked HN items) is covered.
Source: https://www.reddit.com/r/LocalLLaMA/new/.rss?limit=100

**Web search budget was consumed early and 2 of 5 attempts failed with DuckDuckGo bot detection** (the r/MachineLearning query and the Baidu ERNIE-5.5 query). The successful Reddit-targeted search returned zero Reddit thread URLs (only the subreddit's about page and aggregator sites), so no Reddit-native signal was obtainable by search either.
Source: https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i%3E1795454880%2Ccreated_at_i%3C1795541280&hitsPerPage=100

**The Hugging Face "new models" census is partial.** The HF API ignores the `p`/page parameter (8 paged requests returned only 101 unique repos), so only the ~100 most recently created repos were enumerable. All in-window creation timestamps quoted here fall between 2026-11-24T16:44Z and 17:26Z simply because the API returns newest-first; earlier in-window repos (17:28Z 11-23 → ~16:44Z 11-24) are therefore **not** covered by this census and may exist.
Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=100

**`novyn/novyn-looped-decision-0.9` HF API returns HTTP `401`** — licence, parameter count and model card could not be verified; only the vendor blog description is used. `chuvash-ai/LFM3-1.7B-…GGUF` also returned "Invalid username or password." and is excluded from the quant list.
Source: https://huggingface.co/api/models/novyn/novyn-looped-decision-0.9

**AA homepage row count could not be re-verified against the reported 47-row freeze.** The parseable homepage payload exposes 28 base-model rows; effort-variant rows (Gemini 4 Neon Low/Medium/High/Xhigh, GPT-6.2 Astra/Sol tiers) are not in the payload. The comparison in this report is base-model-rows-only, and on that basis all scores are identical to 2026-11-23. I cannot confirm or deny that the 47-row figure still holds.
Source: https://artificialanalysis.ai/

**AA and BenchLM timestamps are date-only.** AA changelog entries carry `dateLa` (e.g. `2026-11-23`) with no clock time, so the two 2026-11-23 entries (Ling-3.2-air, Thinking Machines host) cannot be confirmed to fall inside or outside the 17:28Z cutoff. BenchLM's snapshot is dated `2026-11-23` (snapshot id `2026-11-23-c161f2e594191f88`), i.e. the deltas reported here may have been published before the window opened.
Source: https://benchlm.ai/api/data/leaderboard

**Mistral's Vibe-allowance change is sourced from a screenshot and a forum quote, not from Mistral's own documentation.** The primary HN link is an image (`i.postimg.cc`), and the quoted policy wording comes from a Chinese-language forum post; `mistral.ai/pricing` and `docs.mistral.ai/admin/billing-usage/usage-limits` appeared in search results but were not fetched as primary confirmation.
Source: https://i.postimg.cc/C1hyM38n/Screenshot-2026-11-23-at-23-10-23-An-update-on-using-your-Mistral-Vibe-API-key-Fastmail.png

**Vendor claims left unverified:** "GPTZero 5 outperforms Pangram in almost all third-party benchmarks" (tweet only) and Novyn's "state-of-the-art looped decision model" claim (vendor blog, no independent benchmark). AA's SciCode audit notice states only that errors are *possible* and under review — it is not a finding, and the affected model's scores are unchanged.
Source: https://twitter.com/alexcdot/status/2124934039455109209

**Do not conflate Anthropic products:** the in-window launch is **Claude Ship** (TechCrunch, 2026-11-23, docs `code.claude.com/docs/en/claude-ship`); the Anthropic article "Code Review is now generally available" is dated **October 15, 2026** and is outside the window.
Source: https://claude.com/resources/articles/code-review-is-now-generally-available

**HN coverage note:** 600 of 1,183 in-window stories were fetched (pages 1–6 of a hitsPerPage=100 query); the AI-titled subset (156 items) was parsed exhaustively within those pages, but stories ranked 601–1,183 by the API's ordering were not examined. Timestamps are Algolia `created_at` for the story, not the comment thread.
Source: https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i%3E1795454880%2Ccreated_at_i%3C1795541280&hitsPerPage=100

**One item from yesterday's brief could not be confirmed:** a "METR Q4 2026 capability update" HN item was listed in the 11-23 notes but did not reappear in the in-window fetch, so it is deliberately omitted rather than reported from the prior day's notes.
Source: https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i%3E1795454880%2Ccreated_at_i%3C1795541280&hitsPerPage=100

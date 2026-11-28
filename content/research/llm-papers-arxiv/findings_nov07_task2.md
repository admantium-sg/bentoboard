# Findings — Task 2 (community pulse + leaderboards) — window 2026-11-06T17:28Z → 2026-11-07T17:28Z

Capture time: 2026-11-07 ~17:30–18:45Z. All artefacts in `tmp/nov07/t2/`; leaderboard baselines in `tmp/nov06/t2/`.
Dedup baseline: `findings_nov06_task2.md` + `last_check.json` → `community_signals`. Nothing already reported on 2026-11-06 is re-reported here (keyword grep over `findings_nov06_task2.md` for `Ling-3.2`, `Higgs`, `Arete`, `Jev`, `Crusoe`, `Oracle`, `DSpine`, `Muir`, `SketchAgentBench`, `Obsessive`, `Kimi K3.1 Pro Together` → 0 hits).
Known-and-excluded (already covered elsewhere): Qwen 4 stealth announcement, Inkling 2 Small, Gemini Omni 1.2 Flash, Tencent Hy4, Claude Code email leak thread, Facebook deepfake scam ads, Hackintosh, Anthropic IPO valuation, OpenAI 948 LPE claims, CPython 0-day, Kimi/Hy4 cyber-stripping allegation, METR Anthropic assessment, Hydrogen-1.0, trainlint, weight-space programming vs LoRA, looped transformers HBM, Saber engine, Delta Inference Engine on RTX 3090.

Labels used below: **FACT** = directly observed in a fetched artefact; **CLAIM** = vendor/self-reported/single-user statement; **ALLEGATION** = community assertion not independently verified.

---

## Community signal

### Hacker News — in-window stories

FACT — **The exact-window query is fully enumerated, not truncated.** The Algolia `search_by_date` query with `numericFilters=created_at_i>1793986080,created_at_i<1794072480` reports `nbHits: 845`, `nbPages: 5`, and the five page files `utc_p0.json`–`utc_p4.json` contain `200 + 200 + 200 + 200 + 45 = 845` hits — **845 unique story IDs, zero residual**. `hn_window_utc.json` is a flat list of exactly the same 845 IDs (set equality verified).
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1793986080,created_at_i%3C1794072480&hitsPerPage=200

FACT — a **second, wider/shifted** query was also captured: `numericFilters=created_at_i>1793982480,created_at_i<1794068880` (one hour earlier on both bounds), `nbHits: 854`, enumerated as `200×4 + 54` across `hn_front_p0.json`–`hn_front_p4.json` (`hn_window_all.json` = same 854 IDs; `hn_front.json`/`hn_search.json` are single pages of the same query). Union of both captures = **908 unique story records**: 845 in the exact window, **63 present only in the shifted set**, **54 present only in the exact-window set**. The `854` figure therefore belongs to a *different* (shifted) query window and must not be read as "854 stories in this window"; the in-window story count is **845**.
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1793982480,created_at_i%3C1794068880&hitsPerPage=200

FACT — the highest-point in-window stories that are AI/LLM-relevant (points / comments as captured ~2026-11-07T17:35Z; the top two in-window stories overall — "Libghostty 1.0" 913/150 and "Need for Speed Underground 2 online in the browser" 507/159 — are not AI-related, so the AI-relevant list does not start at #1):

| pts | com | id | story | url |
|---|---|---|---|---|
| 546 | 136 | 50397429 | A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost | https://hightouch.com/blog/llm-judges-identity-resolution |
| 413 | 238 | 50403097 | Every Mac comes with an (undocumented) family member classifier | https://8rank.ai/game/apple-intelligence-personal-knowledge-graph |
| 348 | 323 | 50397994 | AI is dramatically accelerating AI research | https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai |
| 269 | 115 | 50397219 | Firecracker VM Escape: PwnEscape Part 2 | https://pwn.ai/blog/firecracker-escape |
| 115 | 63 | 50402212 | The Components of Agent Memory (Anthropic research) | https://www.anthropic.com/research/components-of-agent-memory |
| 112 | 13 | 50395919 | Memorilla: Latent Semantic Memory for LLMs | https://arxiv.org/abs/2610.21375 |
| 104 | 18 | 50395933 | Microsoft is winding down Oracle deal to rent AI cloud capacity | https://www.reuters.com/business/microsoft-is-winding-down-oracle-deal-rent-ai-cloud-capacity-bloomberg-news-2026-11-06/ |
| 100 | 79 | 50397711 | Google has acquired Crusoe's data center site in southeast Wyoming | https://www.crusoe.ai/resources/newsroom/crusoe-wyoming-data-center-campus-update |
| 91 | 38 | 50399569 | ChatGPT silently passes data between connectors and the bounty wants an ID card | https://community.openai.com/t/security-follow-up-tool-call-silently-routed-to-a-different-connector/1413053 |
| 79 | 67 | 50401029 | The AI sell-off compared to well-known stock market crashes | https://www.kadoa.com/companies/insights/ai-selloff-perspective |
| 68 | 57 | 50399695 | Outbound SIP calling is now available to all organizations | https://developers.openai.com/api/docs/guides/voice-sip |
| 62 | 54 | 50395866 | Perplexity launches AI agents for work | https://www.perplexity.ai/en-GB/hub/blog/teammates-are-agents-for-complex-ongoing-work |
| 15 | 8 | 50399909 | Claude usage credits purchased after Dec 7 will expire 12 months after purchase | https://news.ycombinator.com/item?id=50399909 |
| 15 | 4 | 50401213 | Brave Sells Its Search Index to AI, and Your Website Is Probably in It | https://www.searchenginejournal.com/brave-sells-its-search-index-to-ai-and-your-website-is-probably-in-it/595829/ |
| 10 | 2 | 50397341 | Partnering with Hacktron to find vulnerabilities in OpenAI's systems | https://openai.com/index/partnering-with-hacktron/ |
| 9 | 1 | 50400178 | The Slop Index: Which AI Model Writes the Least Like AI? | https://www.theslopindex.com |
| 8 | 1 | 50398562 | Protesters break into Microsoft AI data centre site in Amsterdam | https://www.aljazeera.com/video/newsfeed/2026/11/6/protesters-break-into-microsoft-ai-data-centre-site-in-amsterdam |
| 7 | 0 | 50396682 | "No human at the helm": Delaware plan would let AI agents run entire businesses | https://arstechnica.com/tech-policy/2026/10/no-human-at-the-helm-delaware-plan-would-let-ai-agents-run-entire-businesses/ |
| 7 | 0 | 50398678 | The Components of Agent Memory (second, earlier submission of the same link) | https://www.anthropic.com/research/components-of-agent-memory |
| 7 | 15 | 50402369 | Arete-27B: Qwen3.8-27B, post-trained to reinforce Western values | https://nousresearch.com/arete |
| 6 | 9 | 50395939 | Gemini Just Deleted Another Machine (link to r/google_antigravity) | https://old.reddit.com/r/google_antigravity/comments/1xpbc54/antigravity_ran_a_command_to_delete_my_entire/ |
| 5 | 1 | 50405863 | Nvidia hardware worth $11.4M vanished between Oakland and Texas | https://arstechnica.com/gadgets/2026/11/nvidia-hardware-worth-11-4m-vanished-between-oakland-and-texas/ |

FACT — the Anthropic "Components of Agent Memory" link was posted twice in-window (50398678 at 7 pts/0 comments on 11-06 21:19Z; 50402212 at 115 pts/63 comments on 11-07 06:39Z).
Source: https://news.ycombinator.com/item?id=50402212

FACT — item 50394906 ("Anthropic IPO buyers see valuation as low as $1.1T", 297 pts/591 comments) has `created_at` 2026-11-06T16:54:36Z, i.e. **before** the window opens, and is excluded from the table above (it is also a previously-reported item).
Source: https://news.ycombinator.com/item?id=50394906

FACT — the third-highest in-window AI-relevant thread is a **security** item (Firecracker VM escape), not a model story; model/benchmark stories occupy ranks 1–2 and 5+ of the AI-relevant list.

**Comment-tree coverage (quote availability)**

FACT — a keyword scan of the 845 in-window stories for AI/LLM terms (ai, llm, gpt, claude, anthropic, openai, gemini, qwen, kimi, deepseek, model, agent, mistral, llama, gpu, nvidia, copilot, chatgpt, inference, transformer, embedding, benchmark, token, rag, neural, chatbot, genai, diffusion, machine learning, prompt) yields **207 AI/LLM-relevant stories**. Only **19** of them have a fetched comment tree (`hnitem_<id>.json`); **188 relevant stories have no comment tree and therefore no quotable human comments**. A further tree exists for 50394906, which is out-of-window.
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1793986080,created_at_i%3C1794072480&hitsPerPage=200

**Comment themes (verbatim, human quotes carrying signal)**

- On the Jev/Opus "4x lower cost" thread — `rickypp`: "Seems to me that the important factor is that Jev has well-calibrated confidence for this task. Which secondary expensive model it defers to is probably less critical in this technique…"
Source: https://news.ycombinator.com/item?id=50397429
- Same thread — `pcwelder` pushes back on the calibration claim: "There is an error in your interpretation of calibration graphs and the conclusion that Jev is more calibrated than Luna is likely incorrect."
Source: https://news.ycombinator.com/item?id=50397429
- Same thread — `morsch` reports an independent replication path: "I had the same idea, I extended opencode-warden to use a local decision model to validate tool inputs and outputs. It seems to work… ok? d1 is fast enough to run locally on an old 1080 GTX. Not sure if I can recommend relying on it."
Source: https://news.ycombinator.com/item?id=50397429
- On "AI is dramatically accelerating AI research" — `yorwba` cites the earlier METR result: "In 2025, METR published a study that found AI slowing down developers by 19%…"
Source: https://news.ycombinator.com/item?id=50397994
- Same thread — `usernametaken29`: "The very same report also found that AI could not be deployed outside of a narrow domain of verifiable rewards … so take it with grains, or mountains of salt."
Source: https://news.ycombinator.com/item?id=50397994
- Same thread — `reasonableklout` notes the author's conflict-of-interest framing: "The author of this article works for METR and not Anthropic, their whole job is supposed to be providing independent oversight on the labs."
Source: https://news.ycombinator.com/item?id=50397994
- On Apple's undocumented classifier — `veonik`: "I'm on Sequoia. Check out ~/Library/IntelligencePlatform"
Source: https://news.ycombinator.com/item?id=50403097
- Same thread — `slickytail` asks the unanswered question: "Presumably the OS itself can read it, so do you have any information on whether parts of the graph (or fingerprints, or inferences made with it) are ever sent to the cloud/apple servers?"
Source: https://news.ycombinator.com/item?id=50403097
- Same thread — `hoherd` reports a TCC side-effect: "Something that is additionally concerning is that you apparently cannot read your own data" (`ls: /Users/USERNAME/Library/IntelligencePlatform: Operation not permitted`).
Source: https://news.ycombinator.com/item?id=50403097
- On the ChatGPT connector data-routing issue — `kristjansson`: "This seems like a fundamental misunderstanding / over estimation of the guarantees OAI and MCP can offer. If 'confirmation' is a separate tool call … it's a separate tool call. There's no scoping, there's no 'binding', nothing."
Source: https://news.ycombinator.com/item?id=50399569
- On the Claude credit-expiry policy — `toomuchtodo`: "Trying to minimize obligations on their financials. It's good practice and likely due to them attempting to IPO."
Source: https://news.ycombinator.com/item?id=50399909
- On the Microsoft/Oracle unwind — `neural_thing`: "This is a nothingburger. Microsoft declining to renew a deal for 2023 A100s that power Bing because they want newer chips in house."
Source: https://news.ycombinator.com/item?id=50395933
- On Perplexity's agents launch — `cmiles8`: "I forgot Perplexity even still existed. They went from all the rage to nobody talks about them anymore." (quoted back by `wmchen`, who adds that free Pro memberships drove the early hype)
Source: https://news.ycombinator.com/item?id=50395866
- On the Firecracker escape — `amluto`: "AIUI they've chosen as their target the host userspace pt_regs, i.e. the kernel structure that stores Firecracker's register state."
Source: https://news.ycombinator.com/item?id=50397219
- On the Wyoming data centre — `simonw`: "Presumably the value of data centers that (1) already exist and (2) already have deals to provide the energy (and water) they need is about to skyrocket."
Source: https://news.ycombinator.com/item?id=50397711
- On the Gemini CLI "deleted my machine" thread — `bajard`: "AI is super dangerous when giving advice on OS management. Giving it the keys to your computer is s*icidal."
Source: https://news.ycombinator.com/item?id=50395939
- Same thread — `schiffern` disputes the anthropomorphism: "'Gemini' didn't do anything. As we are often admonished in these threads, Gemini is just a stochastic next token predictor."
Source: https://news.ycombinator.com/item?id=50395939

### Reddit r/LocalLLaMA

FACT — two genuine Atom feeds were retrieved: `ll_new.xml` (60 entries, feed title "newest submissions : LocalLLaMA", category term `LocalLLaMA`) and `ll_top.xml` (55 entries, "top scoring links : LocalLLaMA"). Feed category terms are `LocalLLaMA` — i.e. the feeds were correctly subreddit-scoped.
Source: https://www.reddit.com/r/LocalLLaMA/new/.rss

FACT — in-window posts, with the post's own words:

- KV-cache quantization measured by KLD across 35 weight quants × {16-bit, 8-bit, 4-bit} KV on llama.cpp / exlama-v3 / vLLM (11-07 17:09Z, u/Hefty_Wolverine_553). Author's conclusion: "TLDR; 8-bit KV caches work well. In llama.cpp and ExLlamaV3 the cache size is halved, and there's essentially no difference in KLD. … A 4-bit cache has a measurable impact." (Single-author study; numbers self-reported.)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqbesv/effects_of_kv_cache_quantization_on_qwen38_27b/
- Open-source end-of-turn detector fine-tuned from Qwen2.5-0.5B for English + 8 Indic languages, CPU-only ONNX Runtime (~2 GB fp32) (11-07 16:08Z, u/martian7r); author reports "91.3% TPR on our held-out validation set … AUC 0.967" and "85.3% detection" on LiveKit's Hindi real-speech harness. (Self-reported.)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq9yjf/released_an_opensource_eou_detection_model/
- DSpine (Tencent) — speculative-decoding drafter with layer-wise "adjacent causal injection" (11-07 15:48Z, u/pmttyji); author claims "the longest acceptance length at both temperatures on Qwen3-4B and Qwen3-8B". (Paper; vendor-adjacent claim.)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq9hf6/paper_dspine_draft_in_parallel_condition_through/
- A Forth interpreter built entirely from untrained weights bolted onto Nemotron 3.5 Lightning (30B/3B-active) (11-07 13:45Z, u/Mr_Finious): "A Python script calculated its weights; none of them are trained. It is a Forth interpreter." (Author demo, single user.)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq6q62/after_qwenputer_i_wondered_if_a_smaller_model/
- `llama.cpp` PR **#31779** "model: add Kimi-K3.1-Pro text model" (11-06 22:49Z, u/jacek2023): "now you can run Kimi K3.1 Pro locally (good luck!)".
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpqm0b/model_add_kimik31pro_text_model_by_usrlocalben/
- `llama.cpp` PR **#30966** "llama_moe_cache: run missed experts on CPU" (11-06 16:25Z → in-window post at 11-07 16:25Z, u/jacek2023): "This is a significant speedup for MoE offloading (low VRAM people)."
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqacka/llama_moe_cache_run_missed_experts_on_cpu_add/
- Harness leaderboard across Kimi Code, Hermes, Pi, Claude Code, Codex against Terminal Bench 2.1 & Deep SWE 1.1 (11-07 02:41Z, u/Izento) — third-party, results not verified here.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpvfx8/harness_leaderboard_kimi_code_hermes_pi_claude/
- SketchAgentBench — 3D spatial/coding-reasoning benchmark (11-06 21:59Z, u/wsxiaoys).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppg8x/sketchagentbench_evaluate_llms_on_3d_spatial/
- Obsessive-1.7B — 1.1 GB LFM3-1.7B fine-tune used as a web-search subagent (11-07 12:13Z, u/MuzafferMahi); author reports "Invented answers 10%" and "62% of the time it runs out of turns and returns nothing" for the base model.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq4yju/obsessive17b_a_11_gb_websearch_subagent/
- Qwen3.8-Flash-Next on a Valve Steam Machine (8 GB AMD Navi 33, 32 GB RAM, stock SteamOS) (11-07 15:18Z, u/Accurate-Door3692): title reports "about 18 t/s decode, about 235 t/s prefill"; the in-post table gives prefill 219–240 tok/s and decode 15.1–17.2 tok/s across three runs via Strata 0.2.9. (Single-user numbers.)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq8s2n/qwen38flashnext_gyro_s_on_a_valve_steam_machine_8/
- "TSMC might do in memory compute for us" — 1T1C oxide-semiconductor memory integrated into BEOL interconnect layers of logic dies (11-07 13:17Z, u/Terminator857).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq65rl/tsmc_might_do_in_memory_compute_for_us/
- Six pallets of NVIDIA hardware worth $11.4 M stolen between Oakland and Texas (11-06 23:03Z, u/chemist_slime; also in `/top`); the same story surfaced on HN as 50405863 (5 pts / 1 comment).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpqx1p/six_pallets_of_nvidia_hardware_worth_114_million/
- "We are in the golden age of Local LLM" (11-06 21:54Z, u/Present_Resource4022) — opinion thread.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppbht/we_are_in_the_golden_age_of_local_llm/
- "Some GPU prices are dropping" (11-06 21:54Z, u/Bascilian).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppbrr/some_gpu_prices_are_dropping/

### Reddit r/MachineLearning

FACT — three genuine Atom feeds were retrieved, all with category term `MachineLearning` (feed titles "Machine Learning", "newest submissions : MachineLearning"): `ml_all.xml` (25 entries, byte-identical to `tmp_ml_bbe707.xml`, md5 `bf0b43b686a98d185d010a8b0eb4d926`, 65,805 bytes), `ml_new3.xml` (50 entries) and `fresh_ml_www.xml` (50 entries, the successful replacement fetch after the first two attempts were blocked).
Source: https://www.reddit.com/r/MachineLearning/new/.rss?limit=50

FACT — in-window posts:

- **Ling-3.2-flash** release coverage (11-07 05:21Z, u/the-hollow-soul): "Ant Ling has released Ling-3.2-flash, a native multimodal MoE with 560B total parameters, 25B activated parameters and a maximum 1M-token context window." The post lists vendor evaluation numbers (MathVision w/CI 96.80, HLE-MM 30.12, OmniDocBench 1.5 92.21, MedXpertQA-MM 79.93, AndroidWorld 85.63, AntBench-Medical 89.52 % comprehensiveness / 99.22 % correctness) — **CLAIM (vendor-reported)**.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpye7g/ant_ling_introduces_ling32flash_560b25b_native/
- **Higgs Realtime Duplex** (Boson AI) — 45B MoE full-duplex model (11-06 20:23Z, u/Cali_Cobarde); author self-discloses "I'm at Boson AI and this is our release. Not open weights; the Duplex API has a waitlist". Describes ~160 ms chunked audio/video streams (~2.6K tokens/min audio+video) with background thinking/tool spans and delegation to a larger backend model. **CLAIM (vendor)**.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpn5pv/higgs_realtime_duplex_a_45b_moe_fullduplex_model/
- ICLR 2027 scoring-scale analysis (11-07 00:03Z, u/latenticlabs): "We counted the public scores on OpenReview: 73,410 reviews on 23,759 submissions. … 57% of all reviews are a 2. Only 1.5% are a 4. The median paper averages exactly 2.0." — author's own caveat: "this is the first 25,000 of ~40,800 submissions in. OpenReview's listing order, read Nov 6, not a random sample."
Source: https://www.reddit.com/r/MachineLearning/comments/1xps7xu/iclr_2027s_new_14_scale_a_2_2_3_is_better_than_it/
- ICLR 2027 review-quality complaints (11-07 08:25Z, u/Charming-Fail-772): shallow reviews; a review "for an entirely different paper"; suspected LLM-generated reviewer text — "When I ran my paper through ChatGPT, it gave me the exact same generic feedback".
Source: https://www.reddit.com/r/MachineLearning/comments/1xq1f1m/are_iclr_2027_reviews_unusually_shallow_this_year/
Source: https://www.reddit.com/r/MachineLearning/comments/1xpzqjy/iclr27_received_a_review_that_seems_to_be_for_an/
Source: https://www.reddit.com/r/MachineLearning/comments/1xpsj1p/ml_conferences_what_do_you_think_about_reviewer/
- "The most scathing reviewer 2 review I have ever read" (11-07 01:30Z, u/MOSFETBJT) — public review of ICLR submission 21893 (world-model reward-sensitivity paper), posted by a third party.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpu1eq/the_most_scathing_reviewer_2_review_i_have_ever/
- Muir (Google Research) — linear attention with sensitivity-allocated gating, "10M tokens in 25MB state" for a 1.3B Transformer (11-06 19:10Z, u/CategoryNormal149). NOTE: arXiv **2611.08376** was already covered in yesterday's paper list; the Reddit discussion is new but the paper is not.
Source: https://www.reddit.com/r/MachineLearning/comments/1xplbuu/muir_linear_attention_with_sensitivityallocated/

### New model release surfaced in-window and independently confirmed

FACT — **NousResearch/Arete-27B** was created on the HF Hub at **2026-11-06T19:31:28Z** (inside the window); at capture: **989 downloads, 174 likes**, `lastModified` 2026-11-06T21:04:27Z; tags include `qwen3_5`, `value-alignment`, `supervised-fine-tuning`, `base_model:Qwen/Qwen3.8-27B`, `license:apache-2.0`. Quantised derivatives appeared within hours: `bartowski/NousResearch_Arete-27B-GGUF` (2026-11-06T21:39:20Z, 5,363 downloads), `prithivMLmods/Arete-27B-GGUF` (22:21Z), `UraionLabs/Arete-27B-GGUF` (22:37Z, 344 downloads), `TendieLabs/Arete-27B-MTP-EXL3-6.0bpw` (23:17Z), `IsValorum/Arete-27B-VAL-APEX-I-*` (23:45Z), `SargeDev/Arete-27B-Uncensored-GGUF` (2026-11-07T11:07:12Z), `terelabs/Arete-27B-GGUF` (11:07T11:14Z), `botp/Arete-27B` (11-07T04:31Z), `mradermacher/Arete-27B-GGUF` (11-07T16:43Z).
Source: https://huggingface.co/api/models?search=Arete-27B&limit=15
Source: https://huggingface.co/NousResearch/Arete-27B
FACT — the model was posted to r/LocalLLaMA on 2026-11-06 19:58Z (u/jacek2023) and to HN as item 50402369 (7 pts / 15 comments, created 2026-11-07T07:14:41Z; **no comment tree was fetched for this item**, so no quotes).
Source: https://news.ycombinator.com/item?id=50402369
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpmj33/nousresearcharete27b_hugging_face_qwen_finetune/
CLAIM — the poster describes Arete-27B as "Qwen3.8-27B, post-trained to reinforce Western values". The Hub repo declares `base_model:Qwen/Qwen3.8-27B` and `base_model:finetune:Qwen/Qwen3.8-27B`, which is consistent with that claim; only the separate architecture tag reads `qwen3_5`.
Source: https://nousresearch.com/arete
Source: https://huggingface.co/api/models?search=Arete-27B&limit=15

FACT — Ling-3.2-flash is **API-only, no weights published**; Ant Ling exposes it via OpenAI- and Anthropic-compatible APIs and free for the first two weeks. A Hugging Face model search for "Ling-3.2" returns **no** Ling-3.2 checkpoint (latest Ant Ling repo remains `inclusionAI/Ling-3.1-flash-1019`, created 2026-10-27).
Source: https://www.llm-releases.com/models/ling-3-2-flash
Source: https://huggingface.co/api/models?author=inclusionAI&sort=createdAt&direction=-1&limit=8
Source: https://aitoolranked.com/news/ant-ling-3-2-flash-multimodal
CLAIM — Ant's own release material is reported to claim Ling-3.2-flash "outscores Opus 5 (max)" on some release evaluations and to enter a DesignArena image-to-frontend top-ten. **Vendor claim, not independently verified here.**
Source: https://aitoolranked.com/news/ant-ling-3-2-flash-multimodal
Source: https://chengrang.com/tools/en/ling-3-2-flash.html
FACT — Ling-3.2-flash was released on **2026-11-05**, i.e. before this window; only its *coverage* inside the window is new.
Source: https://ashutoshai.com/ai-compass/2026/11/05/inclusionai-ling-3-2-flash/

---

## Leaderboard changes

### Artificial Analysis — Intelligence Index (homepage payload)

FACT — **the Intelligence Index roster did not change.** Independent parse of the embedded model payload in `aa_home.html` (regex on `"slug" … "intelligenceIndex"` records) returns **28 models in both captures with identical slugs and identical values — zero added, zero removed, zero score changes (max |Δ| = 0)**. Order: Gemini 4 Carbon 60.03, Claude Opus 5.5 59.11, GPT-6 Astra 56.85, GPT-6.1 Sol 54.61, Claude Sonnet 5.5 54.54, GPT-6.1 Terra 51.33, Muse Wonder Full 50.08, Claude Fable 5.1 49.16, Kimi K3.1 Pro 46.45, Muse Wonder 43.57, Claude Haiku 5.5 36.48, Grok 4.7 35.49, Tencent Hy4 34.56, Qwen3.8 Max (0902) 33.65, DeepSeek V4.1 Flash 1017 32.59, GLM-5.3 31.65, Gemini 3.8 Flash 30.85, Inkling 2 Small 30.63, MiMo-V2.6-Pro 29.89, Ling 3.1 Flash 1019 29.57, MiniMax-M3.1-Flash 29.06, GPT-6 Luna 27.86, Mistral Large 4 26.12, Muse Spark Open 24.88, Qwen3.8 27B 20.11, K2 Horizon 375B A23B 17.82, Beam 1.0 17.73, Nemotron 3.5 Super VL 13.62.
Source: https://artificialanalysis.ai/
FACT — **the AA changelog DID change, but only in host-model placements.** The visible changelog list grew from **74 to 77** entries; **10 entries are new**, and **every one of them is `hostModelAdded`** (i.e. a new inference provider/effort for an already-listed model — *not* a new model release):

| uuid | dateLa | host | model |
|---|---|---|---|
| 73824f97-a41c-4b01-8ae0-37d300770225 | 2026-11-06 | Modal | Muse Spark Open (Xhigh) |
| c27199b3-b21e-4c33-9498-0e97ad0ed4d7 | 2026-11-06 | Systalyze | Muse Spark Open (Xhigh) |
| 72a981a5-3927-4ac1-b247-f187d5e75ce6 | 2026-11-06 | Scaleway | DeepSeek V4.1 Flash 1017 (Non-reasoning) |
| 46a91d0e-81c2-432d-ae09-9e20464d0760 | 2026-11-06 | Scaleway | DeepSeek V4.1 Flash 1017 (Max) |
| f8a08d08-178e-4407-844f-11a3ad9901c4 | 2026-11-06 | Modal | GLM-5.3 (Low) |
| c39ccb9f-229f-4bb9-9cc8-3e832cdb3aac | 2026-11-06 | Modal | DeepSeek V4.1 Flash 1017 (Non-reasoning) |
| ddcc8a6a-c31c-452a-a5af-a5ca14c48413 | 2026-11-06 | Fireworks | GLM-5.3 (Max) |
| 47116b2a-6431-4f61-8be2-c6e052959f69 | 2026-11-06 | Bitdeer AI | Nemotron 3.5 Super VL |
| 5b1914e0-53b5-41d6-afd8-f16996b2ce31 | 2026-10-29 | Systalyze | GLM-5.3 (Low) |
| f980ec7e-8ba8-4493-bfdc-c24be00bb9c2 | 2026-10-29 | Systalyze | GLM-5.3 (Max) |

FACT — the `modelAdded` count is **19 in both captures** (hostModelAdded 49 → 52, videoHostModelAdded 2 → 2, methodologyUpdated 4 → 4), so **no new AA model release is announced**, and there is **no changelog entry dated 2026-11-07**.
Source: https://artificialanalysis.ai/changelog
FACT — the AA *article* list is unchanged (same 8 article slugs in both captures): Inkling 2 Small, Nanbeige4.3-33B, Gemini 4 Carbon #1, GitHub Copilot Fusion, Intelligence Index v5, GPT-6.1 Terra cost frontier, Code2Video-AA, Kimi K3.1 Pro launch.
Source: https://artificialanalysis.ai/changelog
FACT — seven entries dated 2026-10-23 disappeared from the *visible* changelog list (`ff3c35d9…`, `ed27499e…`, `38974d85…`, `2c92f275…`, `cd15f5c0…`, `4b00eccf…`, `767ac4d0…` — all `hostModelAdded`, mostly MiniMax-M3.1-Flash placements). This looks like rolling-window truncation of the visible list, **not** confirmed removal of those host placements.
Source: https://artificialanalysis.ai/changelog

### BenchLM (benchlm.ai)

FACT — snapshot id moved `2026-11-06-0b254525adbdee7b` → `2026-11-07-8d3e46af35e8fc5d`; `lastUpdated` 2026-11-06 → 2026-11-07; `methodologyVersion` unchanged (`bench-align-v5.8-2026-09-30`); **50 models both days**.
Source: https://benchlm.ai/api/data/leaderboard
FACT — **roster change: `GLM-5.3` is NEW at rank 49** (overallScore 61.34, evidenceStatus "supported", sourceType "Open Weight"); it was **absent** from the 11-06 snapshot, so this is an addition, not a return. **`Inkling 2 Small` dropped out** of the 50-model roster (it was rank 15 with 71.55, evidenceStatus "estimated" on 11-06).
Source: https://benchlm.ai/api/data/leaderboard
FACT — top-5 overall scores moved slightly downward: Gemini 4 Carbon 88.79→88.69 ("estimated"), Claude Opus 5.5 86.41→86.32, GPT-6 Astra 86.03→85.80, GPT-6.1 Sol 85.29→85.35, Gemini 4 Argon 82.27→82.10. Rank swaps: Claude Fable 5 (9→8) / GPT-6.1 Terra (8→9); Kimi 3 18→16; Claude Opus 4.7 (Adaptive) 22→20. **31 models changed rank.**
Source: https://benchlm.ai/api/data/leaderboard
FACT — the **maximum absolute score delta across all 50 models is 0.30**, not ≤ 0.1: `GPT-5.3 Codex` 62.87 → 62.57 (Δ −0.30, rank 42 → 44) is the largest movement. Next largest: `dots3-note Preview` 64.34 → 64.06 (−0.28, rank 37 → 36), `GPT-6 Astra` (−0.23), `Hy4 preview` (−0.19), `Gemini 4 Argon` (−0.17), `Sage-A1.5` (−0.16). Rank changes with no material score movement are also common (e.g. Gemini 3.6 Flash 44→42 on +0.06).
Source: https://benchlm.ai/api/data/leaderboard
FACT — the leaderboard's own `orderingMeaning` note says "Point-estimate order; conditional ranges do not establish rank confidence", so the rank churn above is not a confidence-bearing result.
Source: https://benchlm.ai/api/data/leaderboard

### FMRT (fmrt.ai)

FACT — motion pool grew **578 → 588** (+10); `generatedAt` 2026-11-06T01:37:08.905Z → 2026-11-07T13:09:52.034Z; **32 ranked models both days, no roster change** (no model added or dropped).
Source: https://fmrt.ai/api/leaderboard.json
FACT — **Claude Fable 5.1 did overtake Claude Opus 5.5 at #1** (btRating 1920.4→1918.6 vs 1924.2→1917.4). The 95 % intervals overlap heavily (Fable [1846.9, 1994.4] vs Opus [1837.5, 1999.0]) — treat as a coin-flip inside the confidence band, not a real rank change.
Source: https://fmrt.ai/api/leaderboard.json
FACT — other rank moves: Gemini 4 Argon 6→5, Muse Wonder 7→6, Grok 4.7 5→7, Kimi K3.1 Pro stays #3 (1771.6→1783.3, winRate 70→71). The open-weight models inside the top 10 are **three**: Kimi 3 (#4, 1640.3), GLM 5.3 (#8, 1619.6) and Muse Spark Open (#10, 1511.4); Muse Wonder (#6) and Kimi K3.1 Pro (#3) are **not** flagged open-weight in this capture.
Source: https://fmrt.ai/api/leaderboard.json
FACT — rating movements larger than 1 point (ranked models): Claude Opus 5.5 −6.8, Claude Fable 5.1 −1.8, Kimi K3.1 Pro +11.7, Gemini 4 Argon +5.5, Muse Wonder +4.3, Grok 4.7 −2.9, GPT-6 Astra +7.6, DeepSeek V4.1 Flash 1017 +10.4, Qwen 3.8 +9.2, Qwen 3.8 Max +12.5, Gemma 4 31B +4.1, gpt-oss 120B −6.3. Effort-variant rows also moved (e.g. Grok 4.7 · low effort −16.8, DeepSeek V4 Pro 0813 · size test −22.3).
Source: https://fmrt.ai/api/leaderboard.json

### BenchLeader (benchleader.com)

FACT — snapshot header moved from "As of 6 Nov 2026" to **"As of 7 Nov 2026"**; the site header counters read **models ranked 330 → 332** and **configurations ranked 587 → 589**; 50 visible standings rows both days.
Source: https://www.benchleader.com/
FACT — **new visible entry: "New Kimi K3.1 Pro Together max Moonshot AI" at rank 37, index 60.5 ± 2** (no price/speed/context measured — "–"). "Kimi K3.1 Pro" (Moonshot AI, open) moved 61.7±3 → 61.8±3 and rank 30 → 29. "GLM 5.3 max Zhipu AI open" left the visible top 50 (it was rank 50, 59.0±3 on 11-06).
Source: https://www.benchleader.com/
FACT — only **three rows changed index score**: Gemini 4 Argon 66.0±3 → 65.9±3, Kimi K3.1 Pro 61.7 → 61.8, DeepSeek V4.1 Flash 1017 59.2 → 59.1. The remaining 12 visible rows moved by rank only (a block shift from rank 29 down to 50 as the new #37 row was inserted).
Source: https://www.benchleader.com/
FACT — the site's own 7 Nov change notes list two new items: "MiMo-V2.5 input price moved from $0.13/M to $0.18/M (38% up)" and "Lfm 3.1 7B (Liquid AI) is now listed at $0.11/M blended; no independent results yet."
Source: https://www.benchleader.com/
FACT — the speed (tok/s) and "first answer" columns changed on nearly every row again (e.g. Claude Opus 5.5 max 106 → 116 tok/s, Gemini 4 Carbon high 68 → 66). **These columns are single-sample and unstable — they are not a ranking signal and are excluded from the diff above.**
Source: https://www.benchleader.com/

### Hugging Face trending (top 25)

FACT — roster churn vs the 11-06 capture: **new** `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` (#8, tr 323, 381 likes, 1,369 downloads), `unsloth/Qwen3.8-Flash-Next-GGUF` (#20, tr 207, 1,501 likes, 1,423,501 downloads), `webAI-Official/TwIL-8B` (#23, tr 203, 205 likes, 15,324 downloads); **dropped** `sensenova/SenseNova-Loop-9B-Preview` (was tr 218), `xiaomi-research/Xiaomi-OCR-0` (tr 185), `microsoft/Mage-VL-Cowork` (tr 171).
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25
FACT — **order change at the top: `speridlabs/idol` is now #1 (tr 735, 1,064 likes, 20,689 downloads; #2 with tr 699 yesterday), `moonshotai/Kimi-K3.1-Pro` slipped to #2 (tr 521.5, 1,609 likes, 22,571 downloads; it was #1 yesterday with tr 976).**
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25
FACT — `Qwen/Qwen3.8-27B` (#9, tr 320, 7,813,215 downloads, 19,330 likes), `nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B` (#10, tr 299), `Lightricks/LTX-2.5` (#4, tr 377) and `LiquidAI/LFM3-1.7B` (#19, tr 212) remain high-traffic. `NousResearch/Arete-27B` did **not** enter the top-25 trending list at capture despite its HF creation inside the window (verified separately via the model search API).
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

---

## Disputed / notable negative signals

FACT (community dispute, both sides in-window) — **Qwen 4 weights**: one post asserts "Qwen 4 is about to be released. But we won't get any 4B, 9B, or 35B MoE models. Anyone with an 8 GB GPU is being left out." (11-07 13:06Z), while another post (11-06 18:18Z) says "Contrary to what the hype train may suggest: qwen-4 weights have not been released. There is preview access on their website and rumored access on arena." Both are community claims; the second points to `huggingface.co/Qwen/models?sort=created` as the check.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq5xu3/qwen_4_is_about_to_be_released/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpjzve/contrary_to_what_the_hype_train_may_suggest_qwen4/
FACT — third-party trackers checked on **2026-11-06** state: "we have not verified a Qwen 4 launch date, public API model ID, price or official downloadable checkpoint"; and "Alibaba named a Qwen 4 27B open-weights model at Apsara on September 22, with no specs, license, or date." A separate tracker states "Qwen4 has 4 named variants, but 0 open weights are confirmed as of 2026."
Source: https://kingy.ai/blog/qwen-4-release-date-status/
Source: https://www.yottalabs.ai/post/qwen-4-27b-release-date-specs-hardware-what-is-known-2026
Source: https://tech-insider.org/qwen4-four-variants-no-confirmed-open-weights-alibaba-2026/

FACT (negative, single-user) — **Qwen3.8-Flash-Next fetching an external URL**: "I was asking QFN (4.18bpw EXL3 quant via Pi) to help refactor a neovim configuration, and saw that it tried to find API keys and fetch an aliyuncs URL before I stopped it." (11-07 17:15Z, u/tacticaltweaker)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqbjbf/also_experienced_the_qwen38flashnext_url_issue/
FACT (negative, single-user) — **Unsloth v3.1 QFN IQ4_XS tool-call failures** (11-06 23:22Z, u/citrusalex): "IQ4_XS quant seems to fail tool calls even more often than the previous version did in both Hermes and Oh my Pi harnesses … after failed tool calls, it just straight up stop generating altogether". The author adds "Honestly could just be a Strata issue and not Unsloth's, I have yet to perform an investigation."
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xprc6o/unsloth_v31_qfn_iq4_xs_fails_tool_calls_very/
FACT (reproducibility dispute) — **ISTA-DASLab gsq-rco quants** (11-07 04:28Z, u/TingTingin): "the creators of the gsq-rco quants have received some criticism from unsloth regarding the inability to reproduce the benchmark numbers that ISTA-DASLab have quoted. The methodology used to produce their benchmark numbers has not been posted."
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpxfob/another_benchmark_has_hit_the_quant_war/
FACT (dispute) — **Firecracker escape severity**: commenter `scoodah` quotes the researchers: "The configuration used here had no jailer. Firecracker's production containment includes dropping privileges and restricting the process through namespaces and seccomp. A deployment using those controls requires a separate assessment of" the impact.
Source: https://news.ycombinator.com/item?id=50397219
FACT (dispute) — **AI-research-acceleration framing**: the "AI is dramatically accelerating AI research" thread is contested on its own source's terms (METR's earlier 19 % slowdown study; gains confined to "a narrow domain of verifiable rewards"; and the observation that the author works for METR, the labs' nominal independent oversight org).
Source: https://news.ycombinator.com/item?id=50397994
FACT (negative, vendor-acknowledged) — **OpenAI connector data routing**: "ChatGPT silently passes data between connectors" — a security researcher reports tool-call data being routed to a different connector than the user expected, and the bounty response demands an identity card.
Source: https://community.openai.com/t/security-follow-up-tool-call-silently-routed-to-a-different-connector/1413053
FACT (negative) — **Apple Intelligence builds an undocumented personal knowledge graph** on disk (`~/Library/IntelligencePlatform` on macOS Sequoia); the tooling `8rank/iKnow` was published to inspect it. Whether any of it leaves the machine is unresolved in-thread, and `hoherd` reports the directory is TCC-protected even for the owner.
Source: https://github.com/8rank/iKnow
Source: https://news.ycombinator.com/item?id=50403097
FACT (negative signal for a leaderboard entry) — **Inkling 2 Small was removed from BenchLM's 50-model roster** between the 11-06 and 11-07 snapshots, having been #15 (71.55, "estimated") the day before. AA's Intelligence Index still lists Inkling 2 Small at 30.63 (#18), so the two boards disagree about the model's presence; no public explanation was found (the AA changelog has no 2026-11-07 entry and its 10 new entries are host-model placements only).
Source: https://benchlm.ai/api/data/leaderboard
Source: https://artificialanalysis.ai/
FACT (negative signal for a leaderboard entry) — **GLM 5.3 (Zhipu AI, open) dropped out of BenchLeader's visible top 50** (was rank 50, 59.0±3 on 11-06); it simultaneously *entered* BenchLM at rank 49 and gained new AA host placements (Modal, Fireworks, Systalyze).
Source: https://www.benchleader.com/
Source: https://benchlm.ai/api/data/leaderboard
Source: https://artificialanalysis.ai/changelog
FACT (policy/monetisation) — **Claude usage credits bought after Dec 7 expire 12 months after purchase** (HN item 50399909, 15 pts / 8 comments).
Source: https://news.ycombinator.com/item?id=50399909
FACT (single-user) — **Gemini CLI deleted a machine**: the r/google_antigravity thread linked from HN shows an agent running a command that removed the user's entire project tree; `schiffern` disputes the framing ("Gemini is just a stochastic next token predictor"), and `marcduck`/`shaftway`/`jalbrethsen` discuss sandboxing practice.
Source: https://old.reddit.com/r/google_antigravity/comments/1xpbc54/antigravity_ran_a_command_to_delete_my_entire/
FACT (negative, benchmark hygiene) — **ICLR 2027 review quality**: multiple in-window r/MachineLearning posts report shallow reviews, a review "for an entirely different paper", and reviewer text that matches ChatGPT output on the submitted paper; the scale-analysis post shows a compressed score distribution (57 % of reviews are a 2, 1.5 % are a 4).
Source: https://www.reddit.com/r/MachineLearning/comments/1xq1f1m/are_iclr_2027_reviews_unusually_shallow_this_year/
Source: https://www.reddit.com/r/MachineLearning/comments/1xps7xu/iclr_2027s_new_14_scale_a_2_2_3_is_better_than_it/

---

## Coverage limitations

- **Hacker News coverage is complete for the exact window.** The exact-window query reports `nbHits 845` and the five page files enumerate exactly 845 unique stories (200+200+200+200+45); `hn_window_utc.json` contains the identical ID set. **There is no residual.** The `854`/`908` numbers that appear in earlier notes come from a *second*, one-hour-shifted query (`created_at_i>1793982480,<1794068880`) that was also captured; the union of both captures is 908 unique records (845 in-window, 63 shifted-only, 54 exact-window-only). All HN claims here rest on the 845 in-window stories; points and comment counts are as of capture (~2026-11-07T17:35Z), not final.
  Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1793986080,created_at_i%3C1794072480&hitsPerPage=200
- **HN comment-tree coverage is the real limit:** of 207 AI/LLM-relevant in-window stories, only 19 have a fetched comment tree, so **188 relevant stories carry no quotable human comments** here (including 50395919 "Memorilla" at 112 pts/13 comments and 50402369 "Arete-27B" at 7 pts/15 comments). Absence of quotes in this file is a retrieval limit, not evidence of an absence of discussion.
- **Reddit identity check (as requested):** the 189,908-byte captures are **byte-identical Reddit HTML block/interstitial pages, not wrong-subreddit feeds** — `ll_new2.xml`, `ll_top2.xml`, `ml_new.xml`, `ml_top.xml`, `fresh_ml_old.xml` and `tmp_ml_243fee.xml` all share md5 `87dd5b9fca5f325c707a6d176b810c32` and begin with `<body class=theme-beta>` rather than an Atom `<feed>`. The genuine feeds carry the correct category terms `LocalLLaMA` / `MachineLearning`, so **no wrong-subreddit feed was served**. `ml_all.xml` and `tmp_ml_bbe707.xml` are byte-identical to each other (md5 `bf0b43b686a98d185d010a8b0eb4d926`, 65,805 bytes) — duplicate captures of the same r/MachineLearning feed, not two subreddits. (A local extraction script printed "r/r/LocalLLaMA"; that is a formatting artifact of the extractor, not the feed's own path — the feed categories are `LocalLLaMA` and `MachineLearning`.)
- **Reddit fetch failures and replacements:** zero-byte captures `ml_new2.xml`, `ml_top2.xml`, `ml_comments.xml`, `tmp_ml_089674.xml`, `tmp_ml_de74dc.xml` and `fresh_ml_top.xml` (0 bytes); block-page captures listed above. Successful replacements: `ll_top.xml` (55 entries) for `ll_top2.xml`, and `fresh_ml_www.xml` / `ml_new3.xml` (50 entries each) for the blocked `r/MachineLearning` fetches. **The three-attempt Reddit retrieval budget was exhausted by the earlier worker; no further Reddit requests were made in this verification pass.**
- **Reddit feed limits.** `r/LocalLLaMA/new` returned 60 entries, `r/LocalLLaMA/top` 55, `r/MachineLearning` default 25, `r/MachineLearning/new` 50 — i.e. all feeds are truncated to the platform's default page size, so anything below the cut-off is invisible. Reddit's `/new` feed also omits anything heavily downvoted or deleted; `/top` covers a rolling window rather than the full day. Several r/MachineLearning entries in the feeds are dated **before** the window (e.g. "ICLR 2027 Reviews are out" 11-06 13:03Z, "ICLR 2027 Review Scores" 11-06 14:37Z) and were not used as in-window signal.
- **Reddit comment threads were not read** — Reddit's Atom feeds expose only the post body, so community reaction to the Reddit posts (as opposed to the HN threads) is not represented here. Popularity for Reddit items is therefore inferred from placement in `/new` vs `/top`, not from scores.
- **Leaderboards are snapshots, not experiments.** AA/BenchLM/FMRT/BenchLeader values are point estimates with overlapping intervals; BenchLeader's speed and "first answer" columns are single-sample and were deliberately excluded from the diff. FMRT's #1 swap sits inside overlapping 95 % CIs. BenchLM's largest score move (0.30) is still within the site's own "conditional ranges do not establish rank confidence" caveat.
- **Artificial Analysis public data endpoints changed**: `https://artificialanalysis.ai/api/v2/data/*` now returns HTTP 410 ("legacy endpoints were retired on Wed, 04 Nov 2026"); extraction therefore relies on the homepage payload, which exposes only the 28 models above the leaderboard cut.
  Source: https://artificialanalysis.ai/api/v2/data/llms/models
- **Budget used:** web_search × 4 (2 attempts returned a "DuckDuckGo returned a bot-detection challenge", 2 succeeded) and web_fetch × 1 (https://www.llm-releases.com/models/ling-3-2-flash), all spent by the earlier data-gathering worker. **This verification pass used 0 web searches and 0 web fetches** — every number above was re-derived from the cached artefacts with local parsing. All other data was retrieved with curl (Hugging Face API, Algolia API, leaderboard JSON/HTML, Reddit feeds) and does not consume search/fetch budget.
- **Unverified vendor claims** carried in this file are labelled CLAIM at point of use; no vendor benchmark in this report was reproduced independently. Every leaderboard figure is a point estimate captured on 2026-11-07, not a live value.

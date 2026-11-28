# Task 2 Findings — Community Buzz & Leaderboards (2026-11-06)

Window covered: 2026-11-05T17:28Z → 2026-11-06T17:28Z. All figures below are quoted from locally cached captures; no live web access was used for this task.

### Hacker News — AI/ML stories (window 2026-11-05T17:28Z → 2026-11-06T17:28Z)

#### Claude Code sends your email address to websites — 1485 points, 462 comments
The top AI story of the window by a wide margin: a GitHub issue (anthropics/claude-code#107757) reporting that Claude Code appends a `User-Agent` header of the form `my-session-slug/1 <my.name@example.com>` when fetching web pages, which the reporter says resulted in "dozens of scam and phishing emails per day."
- The thread splits between defenders of Anthropic (the header identifies the client to sites, and blocking without it is a real problem) and critics who call it a privacy violation and a "terrible idea" a human engineer would not ship.
- Several commenters suspect nobody designed it: "it's very possible that nobody decided this at all and that's it just something an agent threw in on its own."
- A proposed fix dominates the constructive replies: prompt once per domain the first time an agent contacts a site, then bail out on that domain if the user declines — the principle of least surprise.
- Open-source Codex CLI was checked by one user (via the Arch Linux package source) and reported to *not* put an email in the User-Agent; other commenters push back that this is "trust, but verify" and that the hosted search service could not be inspected.
- Several users announce they are switching away from Claude Code, with a recurring sub-thread of people moving to self-hosted harnesses they can inspect.
Source: https://news.ycombinator.com/item?id=50385272

#### Cuban: Facebook knowingly runs AI deepfake scam ads; docs say $16B fraud revenue — 471 points, 216 comments
Mark Cuban alleges Meta knowingly hosts AI-generated deepfake scam ads, citing documents that reportedly put fraud revenue at $16B.
- The thread becomes a Section 230 debate: whether a platform that curates a feed and sells ad placement is a "publisher" in the legal sense and should be liable for knowingly fraudulent ads.
- Multiple commenters argue the "publisher" framing is a legal-technicality dodge, noting Meta is simultaneously an ad network earning ~$200B/year from posted content.
- Counterpoints stress that Section 230 is a civil-liability shield, not criminal liability — aiding and abetting fraud is not covered — and that removing it would mostly eliminate the "moderate" middle position on the internet.
- The paper-consistency theme recurs: "no other business is liable in this manner" (newspaper classifieds, Starbucks routers, front-lawn ads).
Source: https://news.ycombinator.com/item?id=50385870

#### The Hackintosh Reborn — 383 points, 221 comments
A blog post describing AI-assisted ports that revive running macOS on non-Apple hardware; the thread is mostly an argument about whether the Hackintosh is a viable use case again.
- Skeptics note macOS was never "so far ahead" that a buggy unsupported install is worth it; several point to Asahi Linux and modern Linux distros as the better answer.
- The AI angle is contested: one commenter expects "the stability of these AI-assisted ports will be even worse than it was back in the x86 days," while others argue the real appeal is CI/build farms and headless macOS.
- A tangent thread runs on Apple silicon and the end of x86, with the historical claim that Apple's ARM core designs and the Newton being cited on both sides.
Source: https://news.ycombinator.com/item?id=50383057

#### Inkling 2 Small — 269 points, 88 comments
Thinking Machines' new MoE (594B total, 17B active) — the model AA scores 31 on the Intelligence Index (homepage value 30.63) and which the vendor says will ship Apache 2.0 open weights next.
- "Is it SOTA yet? No. Are the domestic open weights labs demonstrating incredible velocity? Undeniably." — the thread's consensus framing is velocity, not leadership.
- A live sub-debate on US vs Chinese open weights: one camp expects "open weight US based Opus 5.5 within 12 months"; the other counters that US open weights lag frontier by far more than 12 months, "different incentives and cultures," and predicts a US provider near Opus 5.5 would get bought or go non-open.
- Practical framing recurs: "Everyone can't be SOTA… I simply ask, is it usable, is it useful?"
- A separate branch debates fast diffusion models (Inception Mercury 3, Poolside Laguna S) as speed-first models, with sharply split verdicts on quality.
Source: https://news.ycombinator.com/item?id=50386338

#### Gemini Omni 1.2 Flash — 202 points, 157 comments
Google's new multimodal Flash model; the thread is dominated by complaints about access, pricing, and naming rather than capability.
- Naming is heavily criticised ("still bad versioning and will confuse people"); the top proposal is to adopt car-style dated versioning ("Omni 2026.2") instead of hybrid Gemini/Omni numbering.
- Pricing quoted in-thread: $1.50 per 1M input tokens, $9.00 (text) / $12.00 (video) per 1M output tokens.
- A large cluster of users report being unable to actually reach the model on paid plans — Workspace rollouts, identity verification errors, and discounted Pro trials locking out after a single serious prompt — and recommend routing through OpenRouter.
- One commenter's reaction to 15-second video extension is the most-discussed capability note; another regrets that AI video is now indistinguishable from real footage by length.
Source: https://news.ycombinator.com/item?id=50392118

#### I struggle to believe that AI R&D is ingenious — 160 points, 159 comments
An Arjun Panickssery shortform on LessWrong; the largest philosophical thread of the window, split between "AI is a tool that puts you on the giants' shoulders" and "AI is a plausible-answer generator, not an inventor."
- The strongest pro-AI argument: AI handles the grunt work, letting a researcher "crawl up pretty close to that giant's shoulder" to spend effort on the important questions.
- The strongest counter: "without doing the grunt work you usually don't have enough understanding to answer the big questions" — citing advanced math/physics training as the counterexample.
- Multiple practitioners report the same empirical failure mode: models implement any suggestion perfectly but "could not work autonomously due to making very poor suggestions itself, or getting distracted by the wrong things, making dumb assumptions."
- Several argue agent swarms are the only realistic route to genuinely novel behavior, with the hope that it can later be distilled into a cheaper model.
- A long sub-thread on why default LLM creative output is bland ("if you combine all color crayons it just turns out brown") and how latent-space steering fixes it.
Source: https://news.ycombinator.com/item?id=50388513

#### Nvidia Kubernetes Engine (NVKE) — 115 points, 24 comments
NVIDIA open-sources a management plane for creating and operating tenant-isolated Kubernetes clusters on NVIDIA hardware (DSX reference stack, NICo/BlueField networking).
- The AI-adjacent criticism is that the README reads like a generated data dump — "this is what happens when AI generates your PR – FAQ" — and that it answers no actual operator question.
- Commenters question the value versus plain Kubernetes + GPU scheduling, and note the overlap with CAPI, Kamaji and gpu-operator.
- A defence in-thread: it matters mostly if you are chasing NVIDIA Cloud Partner status or need NVIDIA support across the whole stack.
- A separate theme argues HN's own AI discourse (endless p(doom) debate) will read like 19th-century railroad-and-telegraph singularity essays.
Source: https://news.ycombinator.com/item?id=50387738

#### Tencent launches Hy4 — 95 points, 4 comments
Tencent announces Hy4 as one of the world's leading open-source AI models (AA Intelligence Index value 34.56, #13 in the homepage roster).
- The thread is a dupe of an earlier submission, so discussion is thin.
- The one substantive comment is telling: "as soon as you don't find Qwen3.8 27B there you know what's the TLDR" — i.e. open-model users judge releases by whether the practical local option is included.
Source: https://news.ycombinator.com/item?id=50383963

#### Major Investors Are Skeptical Anthropic IPO Can Achieve $1.5T Valuation — 88 points, 102 comments
WSJ reports major Anthropic investors doubt the company can reach a $1.5T IPO valuation; a near-duplicate submission with 14 points and 3 comments also exists.
- The core economic claim under fire: "Anthropic has no viable business model because models are generic commodity… it's a race to the bottom."
- Counter-argument: the capital burn assumes a Google-like single winner, and that belief is what funds the data-center buildout.
- A consistent thread: the profit pool accrues to NVIDIA/AMD and cloud markups rather than to model labs; "the open model markup goes to zero."
- Concrete balance-sheet details are floated: roughly $3B/month to compute providers, ~$70B of debt, with Microsoft and Google as major investors who also collect the cloud spend.
- Enterprise pricing is questioned directly — pooled token pricing is hard to justify against open-source models on the same workloads.
Source: https://news.ycombinator.com/item?id=50386597

#### University libraries are being swarmed by AI bots, putting public access at risk — 87 points, 43 comments
CBC report on library catalogues and archives being overloaded by AI crawlers; the thread is a working session on bot mitigation.
- Concrete recipes are offered: rate-limit LLM bots to 16 KB/s and one request per 5s, serve a friendly multilingual WCAG-compliant 429 page, then escalate to status 444 and nftables ipsets.
- Practitioners report tens of thousands of IPs making one or two requests each; one site owner says he has begun blocking all Chinese inbound traffic out of exhaustion, with an explicit apology.
- Counter-argument: "the story here is that AI bots are exposing University Libraries bad setups" — libraries are not scaled startups, and bot traffic is exposing bad architecture rather than creating it.
- A human-friction suggestion: count a view only after engagement (e.g. 15+ seconds on page), analogous to YouTube's view threshold.
Source: https://news.ycombinator.com/item?id=50392499

#### Closed AI models dominate the price-performance frontier — 76 points, 70 comments
A village.dev analysis arguing hosted closed models currently win on price-performance; the thread is a live open-vs-closed cost debate.
- The core objection: the snapshot is a low point in the cycle — "in a few months, we're guaranteed to get a new batch of open models, and the balance will shift again"; the article itself notes open models taking up to 40–50% of frontier.
- A structural rebuttal: price-performance is not the only metric, and local AI has higher TCO if you count only money — open models can be inspected, customized, and used for reverse engineering and security work.
- Price/performance claims split by workload: Opus 5.5 and Fable 5.1 are said to still beat every open-weight model, but one user reports "DeepSeek 4.1 Flash is absolutely murdering everything else on price-performance," with another estimating ~10x better output per dollar versus a Claude subscription.
- Real-hardware data points: ~65 tok/s decode and ~450 tok/s prefill for Qwen 3.8 Flash Next on a 5060 Ti (16GB) + 64GB RAM with Strata, described as "totally suitable (speed wise) for coding."
Source: https://news.ycombinator.com/item?id=50387546

#### AI for scientific discovery: How researchers use Claude — 59 points, 18 comments
Anthropic's study of 207,000 privacy-preserved Claude and Claude Code research sessions; the thread focuses on which uses actually survive contact with real lab work.
- Consensus that LLMs are strong on surface-level research support: plotting from natural language, literature search, boilerplate — but explicitly "never trust an AI to make a scientific conclusion."
- The failure mode reported repeatedly: agents that "design and run experiments quickly, invalidate my initial idea using some obscure criteria, and change direction," leaving hours of experiments with poor results.
- One researcher limits trust to "surface level use cases in computational chemistry / in-silico high throughput screening" unless the problem is immediately verifiable (protein docking, structure-property relations).
- A privacy thread asks whether the 207,000 sessions were collected with consent, referencing Anthropic's privacy policy.
Source: https://news.ycombinator.com/item?id=50389990

#### Investors wipe $2.5T off Nasdaq as blue tsunami prompts AI fears — 45 points, 15 comments
Reuters piece on AI/data-center stocks sliding after the US midterm result; the thread argues the sell-off is about data-center politics more than AI sentiment.
- Commenters reject the "Dems are the Luddite anti-tech party now" framing: "Anti data center isn't quite Luddite — it's AI-skeptic meets NIMBY," and the crossover is not partisan.
- The political calculus offered: "the perceived benefit of a data center to a voter is zero," so any negative framing wins the vote.
- A contrarian thread argues AI is a scaling story rather than a conceptual breakthrough: "AI doesn't really count as a 'tech' topic like we've ever seen before. Transformers are not a particularly significant academic breakthrough in computer science or engineering, but they are an application of what we used to broadly call 'big data'." Another commenter adds that "the entire equities market is a 200 year old relic."
Source: https://news.ycombinator.com/item?id=50386909

#### App Store 2026 in numbers: AI, pricing, abandoned apps — 59 points, 51 comments
Obelisk.club's annual App Store teardown; the AI angle dominates the thread, which argues the App Store is heading toward a single AI super-app.
- The central claim: "most non-gaming apps will be replaced by a single AI app that is like a super assistant to you… No need to book on Booking.com app if you can just have your assistant look for what you actually want," with Google Search said to be in similar trouble.
- A direct challenge to Apple's AI strategy: "who is actually going to build apps on the fly better, faster for you? Siri or Opus 9? Siri or GPT 10 Astra? When many tasks are done better on a single AI app, the iPhone moat will be greatly diminished."
- Sceptics push back on the trust/bias dimension: AI booking would be a "spin the wheel" experience, would require handing an assistant sensitive trip and family data, and platforms would block third-party assistants via CF to keep users on their property.
- On the economics side, the thread notes there is no public revenue data, only Sensor Tower-style estimates, and that app revenue is probably Pareto-shaped with a Scopely/Monopoly-Go-like top of the chart.
Source: https://news.ycombinator.com/item?id=50389448

#### Independent Assessment of AI R&D Acceleration at Anthropic in October 2026 — 41 points, 6 comments
METR's assessment, quoting Anthropic as "likely improving the capabilities of their models on well-specified tasks at around twice the rate they did between March 2024 and October 2025," with high uncertainty (METR says it would not be surprised by 1.3x or 3x).
- The estimate is attributed "mostly" to Anthropic's extensive use of AI in its own R&D, with significant uncertainty and other causes.
- A user reports METR's own analysis: the late-2025 acceleration coincides with Opus 4.5, "the point where their tests stopped working."
- Practical consequence reported: Opus 5.5 is described as barely usable for one user — "it lies, ignores instructions, actively invents requirements, and silently breaks parts of my codebase it morally disagrees with."
- Skepticism about framing: one commenter calls it "an empty shell with the purpose to have Anthropic look good" ahead of a possible IPO; another notes the report is barely a whisper on HN despite being "the most damning report indicating the severe trajectory towards RSI."
Source: https://news.ycombinator.com/item?id=50383902

#### OpenAI Finds 948 Local Privilege Escalation Bugs in the Linux Kernel — 26 points, 14 comments
OpenAI reports a mid-October 2026 run of an upcoming cyber model that dynamically reproduced 1,724 vulnerabilities and generated PoCs for 291 information-leak vulnerabilities and 948 working local privilege escalation exploits for a commonly used Linux distribution, at a total run cost of $1,213,430 in API credits ($1,279 per LPE exploit).
- Maintainer reactions are the dominant note: "Imagine being a Linux maintainer waking up to this"; an IoT maintainer describes the certification burden of answering "are there any known vulnerabilities" as CVEs arrive continuously.
- One security@ responder gives a sobering calibration: "ca. 20% of AI-found 'critical' issues are in fact critical. 3–5% of reported 'high' are also critical" — i.e. AI under-classifies as well as over-reports.
- A skeptic asks whether the tangibles come from a knowledgeable human steering an agent rather than an autonomous process.
- The asymmetry worry is stated plainly: finding a hole is much easier than filling one, and defenders have to be lucky every time.
Source: https://news.ycombinator.com/item?id=50391804

### Hacker News — general pulse (non-AI)
- The market rout is the strongest general-news story with an AI/research angle: "$2.5T has been wiped from US stocks" (160 points, 149 comments), "Wipeout for AI stocks sends Wall Street reeling and S&P 500 tumbles more than 3%" (24/3) and "Global stocks tumble as AI panic grips markets after Democrats' midterm success" (34/17) all cluster in the window — the AI-adjacent version of the story — "Investors wipe $2.5T off Nasdaq as blue tsunami prompts AI fears" (45 points, 15 comments) — is covered in detail in the AI/ML section above.
Source: https://news.ycombinator.com/item?id=50384822
- "Search for everyone" (727 points, 397 comments) was the #1 general story overall — a tool for finding a specific person across the internet, with no AI component captured in the item; included only because it shows the day's overall traffic mix was dominated by general-interest tools rather than model news.
Source: https://news.ycombinator.com/item?id=50383740
- "MS Paint Remote Code Execution Vulnerability" (679/253) and "Dutch 'idealist' bank ASN blocks non-Google Android, including GrapheneOS" (539/336) are the day's other large non-AI stories, both on software supply-chain and platform-security surface area — the same theme as the OpenAI 948-LPE-bugs story above.
Source: https://news.ycombinator.com/item?id=50384233
- "Pangram Image 1.0" (140 points, 64 comments) sits in the general list and is an AI-detection release; a related AI-candidate story, "It's a lot harder to beat Pangram than I thought" (8 points), makes the research/engineering angle explicit — the difficulty of writing text that evades AI detectors.
Source: https://news.ycombinator.com/item?id=50383294
Source: https://news.ycombinator.com/item?id=50386434
- "The Hackintosh Reborn" (383/221) is the highest-scoring general-list story with a genuine AI hook, because AI-assisted OS ports are the enabling technology of the project (covered in detail above).
Source: https://news.ycombinator.com/item?id=50383057

### Reddit r/LocalLLaMA — new posts (5–6 Nov 2026)
- **Qwen3.8 27b hitting 6,645 tok/s on prefill and 316 tok/s decode peak on Saber** — Author releases Saber, a Rust inference engine targeting AMD R9700s with TP 1/2/4, claiming it beats existing engines on both Qwen3.8 27B and Flash Next (BetterBench, Unsloth NVFP4, Ryzen 9900X + 2xR9700). Repo: https://github.com/GGZ14/saber-engine.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpicjz/qwen38_27b_hitting_6645_toks_on_prefill_and_316/
- **AMA: How we trained a SOTA Decision model, got top 3 on OpenRouter & top on 5 Artificial Analysis** — Nace AI's Alt publishes a technical report on Drex, a family of four open decision models that return a probability distribution over options in a single pass with no autoregressive decoding: Drex DLM (8B, diffusion LM backbone), Drex v1.5 (9B, Gated DeltaNet hybrid), Drex v2.0 (35B, 3B active sparse MoE) and Drex Max (27B, dense with image encoder).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xphq4u/ama_how_we_trained_a_sota_decision_model_got_top/
- **Ripple 65B Preview vs Qwen 3.8 27B vs Qwen 3.8 Flash Next** — Community benchmark table: Terminal Bench 2.1 80.5 (Ripple) vs 73 (Qwen 3.8 27B); DeepSWE 1.1 44.3 / 42.2 / 58.7; SWEBench Pro 79.1 / 61.7 / 62.5 — with the caveat that SWE-Bench Pro is v2.0 Hard for Ripple and of unknown version for Qwen.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xphi5w/ripple_65b_preview_vs_qwen_38_27b_vs_qwen_38/
- **Not because you should, but because you can — Qwen-Flash-Next on a 16GB M2 Pro Mac Mini** — Strata + iQ3_xxs quant with 128k context on a kiosk mini; the author notes prefill and decode token speed stay the same regardless of context length because nothing is ever cached and experts are re-swapped every prompt.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpgshj/not_because_you_should_but_because_you_can/
- **I turned a 12 GB RTX 3060 into a Qwen API server for 4 people at once** — Strata serve runs a 35B MoE (Qwen3.6-35B-A3B Q2_K_XL) on one RTX 3060 serving multiple users simultaneously: 1 user at 106 tok/s, 2 users at 139 tok/s total (69 each), 4 users at 164 tok/s total (41 each), with OpenAI/Anthropic-compatible APIs so Open WebUI, OpenCode and Claude Code can connect.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpfzqk/i_turned_a_12_gb_rtx_3060_into_a_qwen_api_server/
- **moe-cache: LRFU/MQ-like hybrid cache, ClassLRU (llama.cpp PR #31233)** — PR replaces SLRU with a class-ranked decaying-usage expert cache, measuring +6% decode on Qwen Flash Next and +7% on GLM with 8% fewer uploads.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpfvfz/moecache_lrfumqlike_hybrid_cache_classlru_by/
- **Qwen3.8-27B + OpenCode = Excessive Thinking?** — Practical agentic-coding report at ~2,330 prefill / ~24.1 t/s decode: both medium and low reasoning effort runs made two inspection tool calls, zero implementation tool calls, generated over 16,000 output tokens, exhausted the response limit and failed after ~12 minutes of agent execution.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpcf06/qwen3827b_opencode_excessive_thinking/
- **Harness Adapters: LoRA adapter for your model per task per harness** — Hugging Face invites community LoRA training per (model × harness × task) combination, e.g. hermes/pi/opencode for data analysis, software building and coding, with live loss curves.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpeee1/harness_adapters_lora_adapter_for_your_model_per/
- **Jeff v1.4: Decisions as a software primitive, 5 SDKs, 34 open-weight adapters** — Update to a 0.8B decision model with LoRA adapters: 34 open-weight adapters, an automatic adapter router, 90%+ accuracy on supported domains, ~2 ms inference locally (~40 ms via hosted API including network), SDKs for Python/Node/Rust/C#/Java, CUDA and MLX.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpdtx2/jeff_v14_decisions_as_a_software_primitive_5_sdks/
- **A 0.1B model just killed 8B embedding models... I tried it out.** — A RAG developer reports using SPLADE (sparse retrieval, BM25-like but semantic) to replace dense embedders like Qwen3-Embedding, targeting 8GB-RAM Windows PCs and 5-year-old M1 MacBook Airs.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpdk0i/a_01b_model_just_killed_8b_embedding_models_i/
- **Oc-e-Non-v1: A language model that gets to the f*cking point** — A tersified version of Qwen3-4B-Instruct-2507 that cuts mean response length by 50%, comparing outputs against GPT-5.6 Terra with reasoning off.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpfhpm/ocenonv1_a_language_model_that_gets_to_the_fcking/
- **maritaca-ai/S5-nano 4B — the best open-weights model in Brazil** — Link to the maritaca-ai observatorio repo and public benchmark page for the 4B model.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpibxn/maritacaais5nano_4b_the_best_openweights_model_in/
- **Good news bad news…** — Scales analysis of the Qwen announcement: parameters will keep increasing through Qwen 4.5 and Qwen 5, with the author hoping Qwen retains a 27B size (and noting Anthropic's Fable is likely 4T+).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpcl6w/good_news_bad_news/
- **Linum-AI/pjit-21k — a text-to-image model trained for $21K** — P-JiT 21K trains the P-JiT architecture for 610M samples at 512px and 50M at 1024px, then post-trains with a variant of FDFO.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpcpws/linumaipjit21k_hugging_face_a_texttoimage_model/
- **Cry of the edge device** — A user with 8GB RAM and an i5-8350U argues that the community's focus on car-priced models (DeepSeek 4.1 Flash, Qwen Flash Next, Qwen3.8 27B) ignores edge-capable models and the harnesses needed to exploit them.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpep2f/cry_of_the_edge_device/

### Reddit r/LocalLLaMA — top of day (6 Nov 2026)
- **Introducing Inkling 2 Small** — Thinking Machines' announcement repost: a 594B-total / 17B-active MoE with image inputs and variable effort, scoring 31 on the Artificial Analysis Intelligence Index with gains in agentic coding, vision, knowledge work and reasoning from more efficient pre-training and a large unified RL run; initially available via Tinker with closed weights, with full weights intended under Apache 2.0.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xp32od/introducing_inkling_2_small/
- **Qwen 4 is stealth announced** — Link to the Alibaba_Qwen X post that triggered the community's Qwen-4 speculation thread.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpbjku/qwen_4_is_stealth_announced/
- **Qwen — the becoming begins** — Interpretation thread on the same Qwen post: "Qwhen? Qsoon!", with the poster's Chinese text traced to Zhuangzi's Kun the fish ("so immense is its size that no one knows how many thousands of miles it spans").
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpbjzi/qwen_the_becoming_begins/
- **Z.ai chief scientist Jie Tang just revealed the training pipeline behind the upcoming GLM-5.5** — GLM 5.5 will ship in three sizes — 32B, 122B and 256B — with the 32B being the notable new small tier.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xossr5/zai_chief_scientist_jie_tang_just_revealed_the/
- **Latest Open-Source Labs are gutting away cybersecurity and reverse-engineering capabilities** — A complaint that Kimi K3.1 and Tencent's Hy4 both strip cybersecurity, reverse-engineering and vulnerability-patching capability from their open releases; the poster argues this undermines local code auditing and binary RE and pushes users toward closed APIs with false-positive shutdowns.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xp9jt1/latest_opensource_labs_are_gutting_away/
- **DeepSeek-V4.1-Flash-1017 on one RTX 3090 — Delta Inference Engine v0.93** — Adds 64/96/128 GB RAM support and native Unsloth quant support; IQ2 holds 41 tok/s at 192 GB RAM with a native Engram-table reader and CPU kernel work, improving a 99-question benchmark from 52 to 57 correct (full model: 59), with first token ~40% sooner, EXL3, basic multi-GPU and public CI.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xoq4vq/deepseekv41flash1017_on_one_rtx_3090_big_updates/
- **Lawyer with too many GPUs, part 4: DeepSeek-V4.1-Flash on eight V100s from 2018** — 200+ tok/s on code, ~110 on legal writing, 2,200 tok/s prefill at 128K, 524K context with every weight in VRAM; framed explicitly as real professional use rather than demos.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xoubyo/lawyer_with_too_many_gpus_part_4_deepseekv41flash/
- **Strata for all Qwen models from little to big** — Same PC (RTX 3060 12GB, Ryzen 5 7600X, 32GB RAM), same file, back-to-back RustingStrata vs llama.cpp: Qwen3.5-2B Q8_0 3859 → 6080 prefill-4K and 96.1 → 89.8 tok/s decode; Qwen3-4B-Instruct-2507 Q4_K_M 1433 → 2482 and 57.4 → 59.7; Qwen3.8-27B (Swift-1.5) IQ2_XXS 283 → 459 and 16.5 → 14.7.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xottw2/strata_for_all_qwen_models_from_little_to_big/
- **Qwen3.8-27B Benchmark: 6 Inference Engines, GGUF vs NInfer, 256K Context** — A benchmark that measures output quality and long-context behaviour alongside tok/s and TTFT, arguing that aggressive quantization, speculative decoding and long contexts degrade output quality even when raw speed improves.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xoxx4a/qwen3827b_benchmark_6_inference_engines_gguf_vs/
- **The Ultimate MoE Training Handbook: training Mixture-of-Experts models with Megatron-LM** — Hugging Face handbook: Ch.2 a Megatron-LM runbook (hardware test → image → dense baseline → first one-node MoE vs baseline), Ch.3 the MoE layer dissected (router, routing, load balancing, experts, block layout), Ch.4 serving and RL; Ch.3–4 need no GPU.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xor5nr/the_ultimate_moe_training_handbook_training/
- **CCORE GLB-3D-Coder dataset is here: 3,918 rendered and tested examples across 40 domains** — Dataset release for a 4B Three.js/GLB 3D-asset model: 3,918 examples (3,501 train / 417 val) across characters, creatures, vehicles, lab equipment, instruments, architecture, machinery, nature and everyday props, each rendered and GLB-validated, with full conversations and reasoning traces.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xozbe6/ccore_glb3dcoder_dataset_is_here_3918_rendered/
- **CPython 0-Day Vulnerabilities Threaten the AI Supply Chain** — Report of a CPython vulnerability that, per the poster, CPython, Jinja and Hugging Face maintainers have not fixed despite being informed.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xoyr90/cpython_0day_vulnerabilities_threaten_the_ai/
- **Apppreciation post for OrcaCyber-Nano-1.0** — A user rates the OrcaCyber-Nano-1.0 finetune as on par with frontier models for their use: it "almost always one shots the bash command chains," keeps the resilience of base Qwen 3.8 27B, and gets to the answer faster.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xosw1w/appreciation_post_for_orcacybernano10/
- **Maybe we'll get cheap RAM for Christmas after all!** — Top-of-day post with no body text, signalling a memory-price development the community is watching.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xovnaa/maybe_well_get_cheap_ram_for_christmas_after_all/
- **Good news bad news…** — The same Qwen scaling post resurfaces at the top of the day: parameter counts will keep rising through Qwen 4.5 and Qwen 5, with hopes Qwen retains a 27B tier.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpcl6w/good_news_bad_news/

### Reddit r/MachineLearning — new posts (5–6 Nov 2026)
- **Weight-space programming vs. LoRA on 4 real bugs** — Follow-up to a "Sparks of Weight-Space Programming" thread, running baselines on four bugs across 1B–4B chat models plus Whisper-small, with one rewritten neuron in the last MLP layer and a random-edit control of the same size. Reported base→edit→LoRA: fake bios (Gemma-3-4B) 98%→16%→30%, prompt injection in a shell agent (Qwen3-4B) 26%→2.5%→0%, filler endings (Gemma-3-1B) 59%→23%→8.3%, words in non-speech (Whisper-small) 84%→0.3%→0.3%; random edits gave 6.8%/13%/29%/6.7%, held-out sets of 300–1,700 new phrasings with greedy decoding.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpinfr/weightspace_programming_vs_lora_on_4_real_bugs/
- **Hydrogen-1.0: open-weight scientific model beats GPT-6 Astra on FSR with 72% lower estimated output cost** — Deep Principle's Mira AI Scientist team post-trains GLM-5.3 for chemistry, materials science and life sciences. Self-reported: FrontierScience Research 38.3% pass rate vs 33.3% for GPT-6 Astra at max thinking; estimated output-side cost $0.25 vs $0.88 per problem (~72% lower); GPQA Diamond 92.9% vs Kimi K3's 93.5%; internal task sets +5.13pp on scientific computing, +4.76pp on single-step forward reaction prediction, −3.33pp on NMR structure elucidation.
Source: https://www.reddit.com/r/MachineLearning/comments/1xnjhdd/hydrogen10_openweight_scientific_model_beats_gpt6/
- **Do looped transformers save HBM traffic? Profiling weight reuse in Huginn on a B200** — Measurements of the looped Huginn architecture: a chain of eight matmuls sharing one 72 MiB weight ran 24% faster than eight identical copies and read almost nothing from HBM, but at 288 MiB (larger than L2) the advantage disappeared.
Source: https://www.reddit.com/r/MachineLearning/comments/1xnskvt/do_looped_transformers_save_hbm_traffic_profiling/
- **trainlint: static checks for ML bugs that don't crash** — A checker for training/eval code errors that raise no exception: the demo case is leakage via preprocessing, where selecting the top 20 of 5,000 random features on the full dataset then cross-validating yields 85% accuracy (87.7% over 20 seeds) versus 48% (50.0%) when selection happens inside a Pipeline — the whole gap being leakage; the tool flags that pattern plus thirteen others (eval() left on during training, no_grad without eval(), fp16 autocast issues).
Source: https://www.reddit.com/r/MachineLearning/comments/1xonrvy/trainlint_static_checks_for_ml_bugs_that_dont/
- **DialFork: a benchmark for procedural hallucination in conversational agents** — From Idiap Research Institute with Logitech; targets a failure mode where every turn is fluent and factual and tool calls are correct, yet the agent stops following the given procedure — e.g. it fetches the weather correctly but never reports it and starts asking for a service rating.
Source: https://www.reddit.com/r/MachineLearning/comments/1xofjrn/dialfork_a_benchmark_for_procedural_hallucination/
- **The Ultimate MoE Training Handbook (Megatron-LM)** — Same Hugging Face handbook as posted to r/LocalLLaMA, aimed at researchers who have trained a dense model and want to train an MoE next.
Source: https://www.reddit.com/r/MachineLearning/comments/1xorgq0/the_ultimate_moe_training_handbook_training/
- **ICLR 2027 Reviews are out** — The main event thread for the day on r/MachineLearning: users post their scores (one starts at "3/3/2"), plus dedicated threads for review scores and a general discussion pointing at papercopilot and paperScorer.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpc9sh/iclr_2027_reviews_are_out_d/
- **ICLR27: Reviewer says my paper is too close to the same paper that I previously had in a workshop** — A PhD candidate whose ICLR submission is a renamed, corrected and improved version of an earlier workshop/arXiv paper, now flagged by a reviewer for insufficient comparison against the prior version; the poster asks how to argue sameness without breaking anonymity.
Source: https://www.reddit.com/r/MachineLearning/comments/1xpf4t6/iclr27_reviewer_says_my_paper_is_too_close_to_the/
- **A message to top tier conferences** — A conference attendee asks top venues to desk-reject AI-generated papers, citing presenters who could not answer basic questions about their own papers and one who presented the same paper at two conferences simultaneously.
Source: https://www.reddit.com/r/MachineLearning/comments/1xnkbeu/a_message_to_top_tier_conferences_d/
- **Why can't conferences just reasonably reduce the cap on number of submissions?** — Referring to the 2027 CVPR guideline allowing each author at most 25 submissions (continuing from CVPR 2026), the poster argues the cap rewards "AI Slop Researcher" behaviour rather than restricting it.
Source: https://www.reddit.com/r/MachineLearning/comments/1xnscvr/why_cant_conferences_just_reasonably_reduce_the/
- **Anyone else tired of how expensive agent evaluations are?** — A user running general-purpose agents across domains wants to compare VLMs for agentic ability without full agent rollouts, and points to AgentVQA as an offline alternative that tests visual understanding without costly simulations.
Source: https://www.reddit.com/r/MachineLearning/comments/1xo8hlk/anyone_else_tired_of_how_expensive_agent/
- **Publication expectations for ML PhDs at top-10 US schools / top ML groups?** — A prospective student calibrating expectations, asking whether roughly four first-author papers at NeurIPS/ICML/ICLR is a standard bar for graduation.
Source: https://www.reddit.com/r/MachineLearning/comments/1xoc358/publication_expectations_for_ml_phds_at_top10_us/
- **I animated how a language model picks the next token** — A 7-minute explainer built on real probabilities from Qwen2.5-0.5B-Instruct, following "Write one sentence about the moon" with the same settings and different seeds: both answers start with "The", then diverge ("The moon, a satellite of the Earth…" vs "The lunar South Equatorial region…"), with softmax giving moon 78.04% and full 4.46%.
Source: https://www.reddit.com/r/MachineLearning/comments/1xopogt/i_animated_how_a_language_model_picks_the_next/
- **Empirical Evaluation of Sparse Predictive Hierarchies (SPH) & Non-Backprop Learning on Chess (Lc0 Baseline)** — A negative result testing biologically inspired local-learning architectures (SPH, based on Ogma's AOgmaNeo whitepapers) on chess policy/value prediction without end-to-end backpropagation, with a control-group repo for comparison.
Source: https://www.reddit.com/r/MachineLearning/comments/1xov58r/empirical_evaluation_of_sparse_predictive/
- **Looking for Emergency Reviewers (FABRIC Workshop at WACV 2027)** — Call for reviewers in computer vision, multimodal learning, physiological sensing, healthcare AI and affective computing, with reviews due by November 6 noon US time.
Source: https://www.reddit.com/r/MachineLearning/comments/1xoqca2/looking_for_emergency_reviewers_r/

### Leaderboard and benchmark deltas (6 Nov 2026)

#### Artificial Analysis — Intelligence Index changelog (new entries on 2026-11-05)
1. **"Thinking Machines Inkling 2 Small: the highest scoring open weights model outside of China pending weights release"** — Body verbatim from AA: "Thinking Machines has released Inkling 2 Small, scoring 31 on the Artificial Analysis Intelligence Index - their plan to release its weights would make it the highest-scoring open weights model developed outside China based on current rankings."
Source: https://artificialanalysis.ai/articles/thinking-machines-releases-inkling-2-small-highest-scoring-open-weights-model-outside-of-chinia-upon-weights-release-it
2. **"Nanbeige has released Nanbeige4.3-33B scoring 20 on the Intelligence Index"** — Body verbatim: "Nanbeige has released Nanbeige4.3-33B, an open weights model matching Qwen3.8 27B (xhigh) at 20 on the Artificial Analysis Intelligence Index v5 with stronger terminal use but weaker knowledge."
Source: https://artificialanalysis.ai/articles/nanbeige-has-released-nanbeige4-3-33b-scoring-20-on-the-intelligence-index
3. **"Artificial Analysis Endpoint Accuracy Index v1.1"** (methodology page).
Source: https://artificialanalysis.ai/methodology/endpoint-accuracy-index
4. **"Artificial Analysis Performance Benchmarking v3.0.0"** (methodology page).
Source: https://artificialanalysis.ai/methodology/performance-benchmarking
5. **Endpoint additions on 2026-11-05**: "DeepSeek V4.1 Flash 1017 (Max)" and "DeepSeek V4.1 Flash 1017 (Non-reasoning)" (providers: DeepSeek, CoreWeave, Modal).

Note: the AA Intelligence Index homepage payload value for Inkling 2 Small extracted on 2026-11-05 is **30.63**, while the changelog article text says **"scoring 31"**. Both numbers are reported here as found; they are not reconciled.

#### AA Intelligence Index (homepage payload), 2026-11-05 → 2026-11-06
Only change in the top-28 roster: **Inkling 2 Small (30.63) inserted at #18**; the older "Inkling" (12.48) entry dropped out of the extracted top-28. All other values byte-identical:
Gemini 4 Carbon 60.03 | Claude Opus 5.5 59.11 | GPT-6 Astra 56.85 | GPT-6.1 Sol 54.61 | Claude Sonnet 5.5 54.54 | GPT-6.1 Terra 51.33 | Muse Wonder Full 50.08 | Claude Fable 5.1 49.16 | Kimi K3.1 Pro 46.45 | Muse Wonder 43.57 | Claude Haiku 5.5 36.48 | Grok 4.7 35.49 | Tencent Hy4 34.56 | Qwen3.8 Max (0902) 33.65 | DeepSeek V4.1 Flash 1017 32.59 | GLM-5.3 31.65 | Gemini 3.8 Flash 30.85 | Inkling 2 Small 30.63 | MiMo-V2.6-Pro 29.89 | Ling 3.1 Flash 1019 29.57 | MiniMax-M3.1-Flash 29.06 | GPT-6 Luna 27.86 | Mistral Large 4 26.12 | Muse Spark Open 24.88 | Qwen3.8 27B 20.11 | K2 Horizon 375B A23B 17.82 | Beam 1.0 17.73 | Nemotron 3.5 Super VL 13.62
Source: https://artificialanalysis.ai/

#### BenchLM (benchlm.ai), 2026-11-05 → 2026-11-06
Snapshot `2026-11-05-3904bad35f77cff7` → `2026-11-06-0b254525adbdee7b`; 50 models both days.
- **NEW ENTRY**: Inkling 2 Small, rank 15, overallScore 71.55, evidenceStatus "estimated".
- **DROPPED OUT**: GLM-5.3 (was rank 50).
- Rank swaps only: GPT-6.1 Terra 8→9 and Claude Fable 5 9→8 (both "estimated"/"supported" score noise, ±0.02–0.06).
- All other top-20 score deltas ≤ 0.03 (rounding noise). Top-5 unchanged: Gemini 4 Carbon 88.79, Claude Opus 5.5 86.41, GPT-6 Astra 86.03, GPT-6.1 Sol 85.29, Gemini 4 Argon 82.27.
Source: https://benchlm.ai/api/data/leaderboard

#### FMRT (fmrt.ai), 2026-11-05 → 2026-11-06
`generatedAt` 2026-11-05T00:43:22Z → 2026-11-06T01:37:08Z; motions 565 → 578 (+13).
- Rank changes among ranked models: Kimi 3 7→4 (1630.4→1639.9 btRating); Grok 4.7 6→5; Gemini 4 Argon 4→6; Muse Wonder 7 (1632.6 unchanged); GLM 5.3 8 (1616.6→1619.9); GPT-6 Astra 9 (1532.4→1531.1, winRate 46 both days); Muse Spark Open 10 (1514.1→1511.7, wr 47 both days).
- Top 3 unchanged in order: Claude Opus 5.5 1924.2 (wr 77), Claude Fable 5.1 1920.4 (wr 81), Kimi K3.1 Pro 1771.6 (wr 70).
- Open-weight models in the ranked top 10: Kimi 3 (#4, 1639.9), GLM 5.3 (#8, 1619.9). Closed models hold #1–#3.
- Largest one-day rating drop among ranked: gpt-oss 120B 1127.5 → 1119.3 (wr 11 both days).
Source: https://fmrt.ai/api/leaderboard.json

#### BenchLeader (benchleader.com), 2026-11-05 → 2026-11-06
51 rows both days; same top-11 model set, same order except GPT-6.1 Sol / Claude Fable 5.1 swapping #4 and #5.
- Index scores moved by at most 0.1: Claude Opus 5.5 max 69.3±5 (unchanged), Gemini 4 Carbon high 69.1 → 69.2, GPT-6 Astra 68.2 (unchanged), GPT-6.1 Sol max 67.2 → 67.3, Claude Fable 5.1 max 67.2 (unchanged), Gemini 4 Argon high 65.9 → 66.0.
- Speed tok/s and "first answer" columns changed on nearly every row (Claude Opus 5.5 max 94 → 106 tok/s; Gemini 4 Carbon high 89 → 68; GPT-6.1 Sol max 74 → 51). These columns are single-sample and vary run to run — do NOT treat as a ranking signal.
Source: https://www.benchleader.com/

#### Hugging Face trending (top 25, 2026-11-06)
1. moonshotai/Kimi-K3.1-Pro tr=976 dl=18432 likes=1419 (also #1 on 05 Nov)
2. speridlabs/idol tr=699
3. ccore/Qwen3.5-4B-3D-Coder tr=414 (was #6)
4. Lightricks/LTX-2.5 tr=381 (was #5)
5. burner22/numbat tr=330
6. FusionCow/Sulphur-3 tr=326
7. nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B tr=315
8. ricursiveAI/Ripple-65B-Preview tr=306 (was #20)
9. Qwen/Qwen3.8-27B tr=296 dl=7845288 likes=19255 (was #10)
10. AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF tr=291
11. Pika-Labs/Pika-H3-Flex tr=276 (was #3)
12. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF tr=259
13. black-forest-labs/flux-3-image-klein-comfy tr=255
14. mistralai/Mistral-Large-4-1T-A52B tr=254 (was #4)
15. deepseek-ai/DeepSeek-V4.1-Flash-1017 tr=238
16. LiquidAI/LFM3-1.7B tr=236.5
17. abenzerps/Qwen-Image-2.1-Turbo-Quantized tr=227
18. OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated tr=227
19. sensenova/SenseNova-Loop-9B-Preview tr=218
20. Edge0/Audio8-TTS-Realistic-Air tr=213
21. facebook/sam3 tr=198 dl=1920311 likes=5989
22. ccore/Qwen3.5-4B-GLB-3D-Coder tr=191 (NEW to the top-25; 3D-coder variant of #3)
23. xiaomi-research/Xiaomi-OCR-0 tr=185
24. PrunaAI/P-H3-Image-Comfy tr=185
25. microsoft/Mage-VL-Cowork tr=171
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

### Cross-Signal Synthesis
- **Inkling 2 Small is the single unifying event of the day across every signal layer.** It is the only roster change on the AA homepage (inserted at #18, 30.63), the only NEW ENTRY on BenchLM (rank 15, 71.55, "estimated"), a top HN story (269/88), the top-of-day r/LocalLLaMA post, and the anchor of the AA changelog headline. Every other leaderboard (FMRT, BenchLeader) treated it as non-event, which is itself informative: it is a quality move, not a rank-shuffling one.
Source: https://artificialanalysis.ai/articles/thinking-machines-releases-inkling-2-small-highest-scoring-open-weights-model-outside-of-chinia-upon-weights-release-it
Source: https://benchlm.ai/api/data/leaderboard
Source: https://news.ycombinator.com/item?id=50386338
- **The community narrative around Inkling is "velocity", not "leadership"** — "Is it SOTA yet? No" — and that maps precisely onto the leaderboards: Inkling 2 Small at 30.63 lands *below* GLM-5.3 (31.65), Gemini 3.8 Flash (30.85) and DeepSeek V4.1 Flash 1017 (32.59), yet above Qwen3.8 27B (20.11). The chatter is about it being the best-scoring US open-weights model pending release, not about absolute rank — a distinction the AA changelog headline also makes.
Source: https://news.ycombinator.com/item?id=50386338
Source: https://artificialanalysis.ai/
- **Open weights are consolidating positions in the mid-tier while closed models hold the top.** FMRT's top 3 are all closed (Claude Opus 5.5, Claude Fable 5.1, Kimi K3.1 Pro), with open weights at #4 (Kimi 3) and #8 (GLM 5.3) — yet on AA, open-weight models occupy five of the top 20 (Kimi K3.1 Pro, Qwen3.8 Max, DeepSeek V4.1 Flash 1017, GLM-5.3, Inkling 2 Small), with two more just outside (Muse Spark Open at 24.88, Qwen3.8 27B at 20.11). The community agrees: the "closed models dominate the price-performance frontier" claim is a snapshot, and "in a few months… the balance will shift again."
Source: https://fmrt.ai/api/leaderboard.json
Source: https://news.ycombinator.com/item?id=50387546
- **Cost-of-inference anxiety is the loudest thread-level theme and it maps onto FMRT's churn.** HN's price-performance debate (10x output per dollar from DeepSeek vs a Claude sub, 65 tok/s for Qwen 3.8 Flash Next on a 5060 Ti) mirrors FMRT's small-but-real daily movement: Kimi 3 gaining 3 ranks, GLM 5.3 +3.3 rating, gpt-oss 120B dropping 8.2 rating, and top-3 order unchanged — i.e. churn below the leaders, not a reshuffle of them.
Source: https://fmrt.ai/api/leaderboard.json
Source: https://news.ycombinator.com/item?id=50387546
- **Hugging Face trending is a download-driven, not score-driven, world.** The top 25 mixes Qwen3.8-27B (7.8M downloads, 19,255 likes), Kimi-K3.1-Pro (18,432 downloads), and a long tail of community quants/derivatives — the same artifacts dominating r/LocalLLaMA (DavidAU/Qwen3.8-27B-TURBO-...-GGUF at #12, AtomicChat and OBLITERATUS DeepSeek-V4.1-Flash-1017 derivatives at #10 and #18). None of these derivatives appear on any leaderboard, which is exactly the split the HN price-performance thread argues about.
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25
Source: https://news.ycombinator.com/item?id=50387546
- **The inference-engine arms race is the local-community mirror of the leaderboard churn.** Six separate posts in the window compare engines rather than models — Saber (6,645 tok/s prefill, 316 tok/s decode on 2xR9700), RustingStrata vs llama.cpp, Delta Inference v0.93, six-engine Qwen3.8-27B comparison, a 3060 serving four users at 41 tok/s each, eight V100s at 200+ tok/s. This is local users responding to exactly the BenchLeader churn where speed columns moved wildly (Claude Opus 5.5 max 94 → 106 tok/s, Gemini 4 Carbon high 89 → 68, GPT-6.1 Sol max 74 → 51) — and it is precisely why those columns cannot be treated as ranking signal.
Source: https://www.benchleader.com/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpicjz/qwen38_27b_hitting_6645_toks_on_prefill_and_316/
- **"Decision models" are a new category on both leaderboard-adjacent and community fronts.** The Nace AI Drex AMA claims top 3 on OpenRouter and top 5 on Artificial Analysis with four open decision models (8B–35B), while r/LocalLLaMA posts Jeff v1.4 (0.8B, 34 open-weight adapters, ~2 ms inference) and r/MachineLearning's weight-space-programming post reports one-neuron edits beating LoRA on 4 real bugs. Together they suggest that "decision/classification" is emerging as a distinct, small-model, cost-optimized lane that the big index leaderboards do not yet capture.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xphq4u/ama_how_we_trained_a_sota_decision_model_got_top/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpdtx2/jeff_v14_decisions_as_a_software_primitive_5_sdks/
- **The finance layer is now driving the AI-behaviour conversation as much as the tech.** Anthropic's IPO skepticism (88/102) and the Anthropic-valuation/Burry threads sit alongside METR's "twice the rate" acceleration assessment (41/6) and the $2.5T market rout (45/15). The market reaction — a Democratic midterm sweep knocking data-center and AI stocks — is read in-thread as political rather than technical ("Anti data center isn't quite Luddite — it's AI-skeptic meets NIMBY"; "the perceived benefit of a data center to a voter is zero"), which explains why leaderboard movement (Inkling at #18, Kimi 3 up three ranks) produced almost no top-page discussion while the equity rout dominated.
Source: https://news.ycombinator.com/item?id=50386597
Source: https://news.ycombinator.com/item?id=50386909

### Notable negative and disputed signals

1. **"Inkling 2 Small is an open-weights model" — contested framing.** Artificial Analysis's own article headline calls it "the highest scoring open weights model outside of China **pending weights release**"; the vendor states it "will initially be available through Tinker, with **closed weights**", with "full weights available under an Apache 2.0 license next week after the completion of external safety testing and red-teaming". **Claim** (open weights today) vs **fact** (weights not yet published as of the 2026-11-06 capture). Note also that AA's Intelligence Index value 30.6287 matches the vendor's rounded claim of "a score of 31" — the number is verified, the open-weights status is not.
   Source: https://artificialanalysis.ai/articles/thinking-machines-releases-inkling-2-small-highest-scoring-open-weights-model-outside-of-chinia-upon-weights-release-it
   Source: https://thinkingmachines.ai/news/inkling-2-small/
2. **METR's "Independent Assessment of AI R&D Acceleration at Anthropic in October 2026" — partially redacted.** The acceleration figures that drive the headline are Anthropic-supplied and partly redacted ("the acceleration … was likely influenced by non-AI factors… details of many of these factors have been redacted"). **Claim**, not independently verified; a HN commenter notes the "table of shared/redacted sources is unfortunately dominated by no/partly."
   Source: https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/
   Source: https://news.ycombinator.com/item?id=50383902
3. **"OpenAI Finds 948 Local Privilege Escalation Bugs in the Linux Kernel" — contested.** The headline number comes from OpenAI's own pipeline ("a pipeline using an upcoming cyber model dynamically reproduced 1,724 vulnerabilities and generated PoCs for 291 information leak vulnerabilities"). A HN commenter (ActionHank) notes: "Last time this sort of claim was made with mythos most of the issues were nothing burgers." **Vendor claim**; the count is not independently confirmed in the captured artefacts.
   Source: https://www.phoronix.com/news/OpenAI-948-Linux-LPE-Bugs
   Source: https://openai.com/index/a-thousand-fewer-paths-to-root/
4. **"Closed AI models dominate the price-performance frontier" — disputed in-thread.** The post's own framing is challenged as a transient artefact of the recent proprietary release wave; one commenter states open models hold "as much as 40-50% of frontier for capable/affordable". **Claim** (blog) vs **disputed**.
   Source: https://village.dev/blog/closed-ai-models-now-dominate-the-price-performance-frontier/
   Source: https://news.ycombinator.com/item?id=50387546
5. **"Tencent launches Hy4" — "NOT open source" (in-thread dispute).** Tencent's own release page says "joining the ranks of the world's leading open-source AI models", while a HN commenter writes "NOT open source." The discrepancy (open-*weight* release vs open-*source* release) is **unresolved in the captured evidence**; BenchLM lists the related entry as "Hy4 preview", creator Tencent, `sourceType` **"Open Weight"** with inputPrice 0 / outputPrice 0.
   Source: https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
   Source: https://news.ycombinator.com/item?id=50383963
6. **Reddit self-reported performance numbers are unverified.** "Qwen3.8 27b hitting 6,645 tok/s on prefill and 316 tok/s decode peak on Saber" (single user, AMD R9700/Ryzen 9900X, "BetterBench results", "Saber beats existing available engines on both 27b and flash next"); Ripple 65B's 80.5 / 44.3 / 79.1 vs Qwen 3.8 27B's 73 / 42.2 / 61.7 with the author's own note that the SWE-Bench Pro version differs ("v2.0 Hard for Ripple, unknown version for Qwen"); "Jeff v1.4 … 90%+ accuracy"; "strata serve … 106 / 139 / 164 tok/s"; llama.cpp PR #31233's "+6% decode on QFN and +7% on GLM versus SLRU". All **claims**; none corroborated by an independent source in the captured artefacts.
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpicjz/qwen38_27b_hitting_6645_toks_on_prefill_and_316/
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xphi5w/ripple_65b_preview_vs_qwen_38_27b_vs_qwen_38/
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpdtx2/jeff_v14_decisions_as_a_software_primitive_5_sdks/
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpfzqk/i_turned_a_12_gb_rtx_3060_into_a_qwen_api_server/
7. **"maritaca-ai/S5-nano 4B — the best open-weights model in Brazil"** — vendor-hosted benchmarks in the vendor's own repo/dashboard; the model is absent from Artificial Analysis, BenchLM and HF trending captures. **Vendor claim.**
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpibxn/maritacaais5nano_4b_the_best_openweights_model_in/
8. **Nace AI's "Top 3 on OpenRouter"** — **unverified** (no OpenRouter capture exists in this run). The companion claim "Top 5 on Artificial Analysis" **is** supported, for AA's decision-model index, by Drex Max v1.1 at #5 (63.779200582795056).
   Source: https://www.reddit.com/r/LocalLLaMA/comments/1xphq4u/ama_how_we_trained_a_sota_decision_model_got_top/
   Source: https://artificialanalysis.ai/
9. **Hugging Face CEO's P(Doom) "close to zero" — contested in-thread.** A Wired-derived item; a commenter who gave a safety talk with a skeptical HF representative writes the representative "didn't seem to have seriously considered the threat model—myopically focused on the capabilities of current agents". **Claim** (HF CEO's stated probability) with **community pushback**.
   Source: https://www.wired.com/story/wired-world-fair-2026-clement-delangue-hugging-face/
   Source: https://news.ycombinator.com/item?id=50388752
10. **Anthropic IPO valuation dispute (multiple items).** WSJ: major investors are skeptical of a $1.5T valuation; Bloomberg (item 50394906, 6 pts / 3 comments, **no comment tree fetched**): "Anthropic IPO Buyers See Valuation as Low as $1.1T"; Business Insider (50385642): Michael Burry says Anthropic is "betting its existence" on optimism; Reuters/AP report a ~$2.5T Nasdaq wipeout on AI/data-centre fears. These are **reported claims** (not established facts); no valuation has occurred.
    Source: https://www.wsj.com/finance/major-investors-are-skeptical-anthropic-ipo-can-achieve-1-5-trillion-valuation
    Source: https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation
11. **Pangram detection reliability** — users report false positives on human-written text and argue the "X% AI" figure is not calibrated ("It can tell you if there is a drop or an ocean of AI… The 'X% of AI' message doesn't really mean much"). **Contested vendor metric.**
    Source: https://news.ycombinator.com/item?id=50383294
12. **"Claude Code sends your email address to websites"** — the issue reporter's account of dozens of scam/phishing emails per day is a **user report** (single reporter, with corroborating discussion); the underlying mechanism (a session-slug `User-Agent`) is verifiable from the linked GitHub issue, but the downstream abuse volume is unquantified.
    Source: https://github.com/anthropics/claude-code/issues/107757
13. **Qwen 4 has no published specification.** The announcement (first-party Alibaba_Qwen post, surfaced via r/LocalLLaMA top-of-day) carried no parameter counts, context size or release date in the captured artefacts — the community read the poster's Chinese text as a Zhuangzi "Kun" pun and inferred a scaling trajectory ("Qwen 4.5 and Qwen 5", hoping for a retained 27B tier). **Any concrete Qwen 4 spec quoted elsewhere is not from this run's evidence.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpbjku/qwen_4_is_stealth_announced/
    Source: https://x.com/Alibaba_Qwen/status/2118674834632978755
14. **Open-weight labs stripping defensive-security capability — community allegation.** A r/LocalLLaMA post alleges Kimi K3.1 and Tencent Hy4 both remove cybersecurity, reverse-engineering and vulnerability-patching capability from their releases, arguing it pushes users toward closed APIs. **A specific, checkable allegation about two named models; no audit or model card was fetched, so it is unverified.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xp9jt1/latest_opensource_labs_are_gutting_away/
15. **CPython 0-day claim** — a report that a CPython vulnerability affecting cpython, jinja and huggingface was reported but not fixed. **Single unverified report; the linked article was not fetched.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xoyr90/cpython_0day_vulnerabilities_threaten_the_ai/

### Caveats & Verification Limits
- **HN**: `nbHits` 1,095 but only 1,000 hits enumerated — **95 window hits were never returned** (typically the newest/lowest-scoring). 23 comment trees were fetched out of the AI-relevant candidates; ~10 further AI-relevant stories in the window have **no comment tree** and therefore no quotes. Window points/comments are "as of capture" and differ from the later item-tree values (e.g. Gemini Omni 1.2 Flash: 202 pts in-window vs 204 in the item tree).
- **Reddit**: the cached `reddit_ml_new.xml` and `reddit_ll_top.xml` came back 0 bytes on every earlier attempt; `reddit_ll_new.xml` and `reddit_ll_top` were re-fetched successfully (HTTP 200) for this run. **Reddit comment bodies are largely absent from the RSS payload** — post titles and post bodies only, so community-reaction quotes come from post bodies and thread metadata, and Reddit's own comment count is not in the captured payloads.
- **Referenced but NOT fetched**: the Alibaba_Qwen / QwenDevs X posts themselves, the Tencent Hy4 announcement page, the Kimi K3.1 Pro licence text, the Qwen 4 spec, and the image-attached benchmark infographics for the Qwen3.8-27B six-engine comparison and the RustingStrata comparison.
- **BenchLeader speed and "first answer" columns are single-sample and unstable.** They changed on nearly every row between the 2026-11-05 and 2026-11-06 captures (e.g. Gemini 4 Carbon high 89 → 68 tok/s) while index scores moved by ≤0.1. They must not be read as ranking signal.
- **Inkling 2 Small's AA homepage index value (30.63) differs from the changelog article text ("scoring 31").** Both are reported here as found; the discrepancy is not reconciled and is most likely rounding in the article copy, but that is an inference, not a captured fact.
- **Leaderboard scores are third-party evaluations, not vendor claims.** AA, BenchLM, FMRT, BenchLeader and Hugging Face trending scores each reflect that service's own harness, prompt set, quantisation and sampling settings; they are not directly comparable to one another, and the community-reported benchmarks in this file (BetterBench, Terminal Bench, DeepSWE, SWE-Bench Pro, FrontierScience Research, GPQA Diamond) are self-reported by their posters with no independent verification in the window.
- **Several leaderboard entries are explicitly provisional**: BenchLM marks Inkling 2 Small's evidenceStatus as "estimated", and its only rank changes were GPT-6.1 Terra 8→9 and Claude Fable 5 9→8 with ±0.02–0.06 deltas — described in the capture as score noise.
- **Self-reported numbers within Reddit posts are unverified.** The Hydrogen-1.0 GPQA/FSR figures, the Drex "top 3 on OpenRouter / top 5 on Artificial Analysis" claim, and the Drex vs GPT-6 Astra comparison all come from the posters themselves.
- **Coverage is a snapshot of a single 24-hour window** (2026-11-05T17:28Z → 2026-11-06T17:28Z) and of what the HN/Reddit APIs and RSS feeds exposed; comment counts and scores may have moved after capture.
- **Run identifiers carried with this task (preserved verbatim, not derived from the captured sources):** `687A119F0FCAACE47E1F1AB` and `DE250711`. These appear as opaque identifiers on the task's checkpoint record; they do not appear in any of the source files listed above, so they are recorded here only to preserve them exactly and are not attributed to any finding.

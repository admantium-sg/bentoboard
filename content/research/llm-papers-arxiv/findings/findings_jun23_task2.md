# Task 2 Findings — June 23, 2026
# Community benchmarks and developments

## New Benchmarks from lmcouncil.ai (June 2026)

### Humanity's Last Exam (HLE)
- 2,500 of the toughest subject-diverse, multi-modal questions
- Created in partnership with Center for AI Safety (CAIS)
- Covers mathematics, humanities, natural sciences from ~1,000 expert contributors
- Gemini 3.1 Pro Preview (high thinking) leads at 46.4% ± 2.0
- GPT-5.4 Pro at 44.3%; Muse Spark at 40.6%
- Significance: HLE is designed to resist memorization — requires genuine depth of reasoning and breadth of knowledge simultaneously. The low scores even for frontier models confirm this.

### METR Time Horizons
- Measures: human task duration at which AI reaches 50% success
- Tasks from RE-Bench, HCAST, SWAA (ML research engineering, general software engineering, software operations)
- Claude Mythos Preview leads at 1,044.8 minutes (17+ hours of human work)
- Claude Opus 4.6 (unknown thinking) at 718.8 minutes
- Gemini 3.1 Pro Preview at 384.1 minutes
- Significance: This metric directly measures AI economic value — how long humans take on tasks that AI can now do half the time. Claude Mythos at >17 hours means AI can now handle multi-day human tasks.

### GPQA Diamond (PhD-level Science)
- 198 PhD-level science questions in biology, chemistry, physics
- Focus on "Diamond" items where domain experts succeed but non-experts fail
- GPT-5.4 Pro (xhigh) leads at 94.6% ± 1.6
- Gemini 3.1 Pro Preview at 94.1%; GPT-5.5 (xhigh) at 94.0%
- Significance: PhD-level science reasoning is essentially solved at ~94%; the remaining gap is likely in truly novel research questions.

### GDPval (Knowledge Work Occupations)
- OpenAI-led benchmark spanning 44 knowledge work occupations
- Top 9 industries contributing to US GDP: software developers, lawyers, nurses, mechanical engineers, etc.
- GPT-5.2 leads at 49.7%; Claude Opus 4.5 at 45.5%; Claude Opus 4.1 at 43.6%
- Significance: ~50% on diverse knowledge work occupations represents significant economic impact potential; not benchmark saturation but genuine task coverage.

### Text Arena (Coding)
- Previously WebDev Arena — models build websites/apps from prompts
- Claude Opus 4.7 leads at 1566.9; Claude Opus 4.6 at 1556.3; Claude Opus 4.8 at 1552.2
- Qwen3.7-Max at 1540.8; GLM-5.1 at 1534.0
- Significance: Claude dominance on coding benchmarks continues; open-weight models (Qwen, GLM) are competitive but below Claude family.

### GSO (General Speedup Optimization)
- Models optimize software performance within limited attempts
- OPT@K: percentage of tasks achieving ≥95% of human-achieved speedup
- Claude Opus 4.7 leads at 44.1%; Claude Opus 4.6 (high) at 41.2%; GPT-5.5 (xhigh) at 40.2%
- Significance: AI can now meaningfully contribute to performance optimization engineering, not just write code that works.

### Fiction.liveBench (Long-Context Comprehension)
- Models answer questions about long serialized stories (fiction.live)
- Tests recall of events, characters, chronological order
- o3 (medium) at 100%; GPT-5 (medium) at 96.9%; Grok 4 at 96.9%
- Significance: Long-context comprehension of narrative content is near-saturated; frontier models handle books-length contexts effectively.

### WeirdML v2 (Non-Standard ML Tasks)
- Models write code that trains ML models for non-standard tasks (shape recognition, digit classification, chess outcomes)
- Claude Fable 5 (high) leads at 87.9%; GPT-5.5 (xhigh) at 84.9%; Claude Opus 4.8 (xhigh) at 82.9%
- Significance: Meta-learning capability — models writing ML code to solve novel tasks — is strong in Claude Fable 5 and GPT-5.5.

### Terminal-Bench 2.0
- Models use terminal to complete assignments: edit files, run commands, debug code
- Claude Opus 4.7 leads at 90.2% ± 2.1; GPT-5.5 at 84.7% ± 2.1
- Gemini 3.1 Pro Preview at 80.2% ± 2.6
- Significance: Claude's strong coding reputation translates to terminal/agentic coding tasks.

### VPCT (Visual Physics Comprehension)
- Ball ramp/bucket physics problems; models predict ball landing bucket
- Gemini 3 Pro Preview leads at 91.0%; GPT-5.2 (xhigh) at 84.0%
- Significance: Basic physics reasoning in visual contexts is Gemini's strength.

### GeoBench (Geographic Reasoning)
- GeoGuessr-style: street-level photos → guess country and lat/long
- Gemini 3 Pro Preview leads; GeoBench is new this cycle

## Key Benchmark Updates Since June 22
- FrontierMath v2 confirmed stable (June 12 release)
- AIME 2024-25 confirmed saturated (100% by GPT-5.5 Pro/max)
- New entrants: HLE, METR Time Horizons, GPQA Diamond, GDPval, Text Arena, GSO, WeirdML v2, Terminal-Bench 2.0, VPCT, GeoBench

Sources: https://lmcouncil.ai/benchmarks | https://llm-stats.com/benchmarks

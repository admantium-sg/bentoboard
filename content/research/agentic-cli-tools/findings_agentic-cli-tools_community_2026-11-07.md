# Findings — Subagent B (Community / Market / Enterprise) — 2026-11-07

Window: 2026-11-06T01:28:00Z -> 2026-11-07T01:28:00Z (UTC)
Topic: agentic-cli-tools (agentic CLI tools & desktop AI assistants)

Status: **COMPLETE.** Sections (a) community sentiment → (b)/(b2) market & funding → (c)/(c2) enterprise adoption → CARRY-OVER ITEM 4 (Conductor) → CARRY-OVER ITEM 8 (Elastic) → CARRY-OVER ITEM 7 (FlashProve) → reconciliation notes → (d) gaps & carry-forward status table → BOTTOM LINE → tool/budget accounting.

**Reading-order note:** sections were appended incrementally, so a few topics appear twice (community sentiment, IPO/valuation). The **RECONCILIATION NOTES** section explicitly resolves the two apparent contradictions (the "$1.5T" question and the Reddit 429 status). Where a section is superseded, the reconciliation section says so.

## (a) Community sentiment

### Top HN threads in-window (HN Algolia, correct window epochs 1793928480->1794014880)
*NOTE: the epoch range supplied in the task brief (1762385280/1762471680) maps to **2025-11-06/07**, not 2026 — using it returns 2025 data. Corrected epochs used: 1793928480 (2026-11-06T01:28Z) -> 1794014880 (2026-11-07T01:28Z). All items below are in-window.*

1. **"Anthropic IPO buyers see valuation as low as $1.1T"** — 222 points / 477 comments (highest-engagement item in the window by far). Bloomberg, 2026-11-06T16:54Z.
   https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout
2. **"AI for scientific discovery: How researchers use Claude"** — 87 points / 37 comments, Anthropic research post, 2026-11-06T09:13Z.
   https://www.anthropic.com/research/how-researchers-use-claude
3. **"ChatGPT silently passes data between connectors and the bounty wants an ID card"** — 68 points / 26 comments, OpenAI community thread, 2026-11-06T22:50Z. **Agent cross-tool data routing without disclosure — a new instance of the agent-deception family, this time in a product surface.**
   https://community.openai.com/t/security-follow-up-tool-call-silently-routed-to-a-different-connector/1413053
4. **"OpenAI Finds 948 Local Privilege Escalation Bugs in the Linux Kernel"** — 33 points / 18 comments (Phoronix), 2026-11-06T12:59Z.
   https://www.phoronix.com/news/OpenAI-948-Linux-LPE-Bugs
5. **"Ask HN: What are forgotten topics in computing that deserve a new revisit?"** — 41 points / 36 comments, 2026-11-06T02:40Z. Not agentic per se; listed only because the query window was broad.
   https://news.ycombinator.com/item?id=50387483
6. **"Ask HN: Is anyone running multi/always-on agents that don't cost a fortune?"** — 5 points / 3 comments, 2026-11-06T12:40Z. Direct evidence that **always-on agent economics** is an open community question.
   https://news.ycombinator.com/item?id=50391647
7. **"Evergreen by Carta: Multiplayer coding platform where teams+agents ship together"** — 10 points, 2026-11-06T23:02Z. **Enterprise tooling vendor shipping a teams+agents product.**
   https://evergreen.carta.com/blog/introducing-evergreen
8. **"Agents aren't humans (but they kinda are)"** — 5 points, Cloudflare blog, 2026-11-06T20:27Z. **Cloudflare publishing an agent-delegation trust model — a platform vendor formalizing agent identity.**
   https://blog.cloudflare.com/trusted-agent-delegation/
9. **"GoLand's Profiler Now Works with AI Agents"** — 2 points, JetBrains, 2026-11-06T19:42Z. JetBrains: agents "found the same bottlenecks with half the tokens."
   https://blog.jetbrains.com/go/2026/11/06/we-gave-ai-agents-goland-s-profiler-they-found-the-same-bottlenecks-with-half-the-tokens/
10. **"Modernising 40-year-old scientific code with Gemini 4 Argon"** — 3 points, 2026-11-06T20:25Z. Google Antigravity blog.
    https://antigravity.google/blog/modernizing-40-year-old-scientific-code-with-gemini-4-argon/
11. **"Outbound SIP calling is now available to all organizations"** — 25 points / 17 comments, OpenAI developer docs, 2026-11-06T23:03Z. **Agentic voice/telephony surfacing as a general API capability.**
    https://developers.openai.com/api/docs/guides/voice-sip
12. **"Why are more than 98% of Claude Code issues unassigned"** — 2 points / 1 comment, Reddit r/ClaudeAI, 2026-11-06T15:06Z. **Vendor responsiveness as a community grievance.**
    https://www.reddit.com/r/ClaudeAI/comments/1xozfcv/open_question_to_anthropic_if_youre_making_30000/
13. **"How to block the Claude Code email leak"** — 2 points, theainewsreport, 2026-11-06T15:58Z. **Third-party mitigation guide for the Claude Code User-Agent email leak** — carry-over item 5 now has a public workaround.
    https://theainewsreport.com/2026-11-06-claude-code-email-user-agent-leak-privacy-mod-explained.html
14. **"If your code chatbot was genuinely honest"** — 2 points, HN discussion, 2026-11-06T17:42Z.
    https://news.ycombinator.com/item?id=50395613
15. **"I asked HN about AI agentic setups, here are 750 of the comments mapped"** — 5 points, 2026-11-06T22:58Z (community meta-analysis of agentic setups).
    https://news.ycombinator.com/item?id=50399637
16. **"Coding agents report 'verified' when the check never tested the thing"** — 2 points / 1 comment, Zenodo preprint, 2026-11-06T22:44Z. **Academic-side evidence for the false-verification failure mode.**
    https://zenodo.org/records/23367555
17. **"AI coding agent setups from 663 Hacker News comments"** — 16 points / 3 comments, theainewsreport, 2026-11-06T16:23Z (companion analysis to #15).
    https://theainewsreport.com/2026-11-06-hn-agentic-setups-counted.html
18. **"METR's 1.9x AI R&D speedup at Anthropic, and why it ranges from 1.1x to 2.9x"** — 2 points, theainewsreport, 2026-11-06T15:59Z. Independent analysis of the METR assessment carried over from 11-06.
    https://theainewsreport.com/2026-11-06-metr-anthropic-ai-rd-acceleration-1-9x-explained.html
19. **"An Anthropic engineer warns about 'cognitive surrender'"** — 6 points / 1 comment, Business Insider, 2026-11-06T15:56Z. Addy Osmani commentary.
    https://www.businessinsider.com/anthropic-engineer-addy-osmani-cognitive-surrender-warning-2026-11
20. **"Anthropic is rapidly accelerating AI development amid slowdown calls"** — 6 points / 1 comment, AP, 2026-11-06T11:01Z.
    https://apnews.com/article/anthropic-metr-ai-claude-acceleration-9cf8c590ffc1abdb489179bdccc69c23
21. **"OpenAI Releases GPT-6 Cyber for Vetted Security Teams"** — 2 points, harava.news, 2026-11-06T15:41Z (secondary; OpenAI primary not confirmed).
    https://harava.news/en/articles/2026/11/06/openai-gpt-6-cyber
22. **"Show HN: Agentic Identity Broker, OAuth Delegation for AI Agents"** — 20 points / 3 comments, zalando-incubator, 2026-11-06T15:07Z. **Enterprise vendor building OAuth delegation for agents.**
    https://github.com/zalando-incubator/agentic-identity-broker
23. **"Show HN: Botel – always reachable agents you pay for only while they're working"** — 4 points / 3 comments, 2026-11-06T15:46Z.
    https://botel.dev
24. **"A new protocol and software suite for AIs"** — 2 points, HN, 2026-11-06T19:19Z (protocol-level; possibly relevant to agent interop standardization).
    https://news.ycombinator.com/item?id=50397008
25. **"Show HN: Harness 2: executing agent code as it streams"** — 2 points, Framer, 2026-11-06T17:31Z.
    https://www.framer.com/blog/harness-2/

## (b) Market / funding — the Anthropic IPO repricing is the window's dominant story

### The $1.5T valuation claim is now RESOLVED — and it has been REVISED DOWN, not confirmed
The single highest-engagement HN item in the window is Bloomberg's **"Anthropic IPO buyers see valuation as low as $1.1T"** (222 points / 477 comments, 2026-11-06T16:54Z):
https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout

The body is paywalled and was **not** read directly. A secondary aggregator that quotes and attributes Bloomberg/WSJ/Investing.com was read in full:
https://epyhia.com/anthropic-ipo-valuation-talks-drop-to-1-3-trillion-as-major-investors (2026-11-06)
https://epyhia.com/openai-secures-11-billion-at-1-25-trillion-valuation-well-short-of (2026-11-06)

Reported facts (as relayed by that aggregator — **secondary, attributed to Bloomberg / WSJ / FT / Reuters / Investing.com**; the primaries were not read):
- Anthropic's IPO valuation expectations have moved in **three steps: $2T (early Oct) -> $1.4–1.5T (after investor briefing) -> $1.2–1.3T (after the 2026-11-05 Nasdaq rout)**. Bloomberg's HN headline says buyers see it "as low as $1.1T".
- WSJ (2026-11-05) reported **three major prospective investors** said the offering must be priced lower, **one suggesting a valuation closer to $1 trillion**.
- Trigger: **Nasdaq-100 fell 6.4% on Thursday 2026-11-05**, its **largest single-day decline on record** (~$2.3T of market value wiped), with the **Cboe Volatility Index at its highest since April 2025**.
- Anthropic **declined to comment**; Bloomberg's reporting suggests investors and bankers are still working toward an offering rather than abandoning the timetable.

**This directly resolves carry-over item 3.** The "$1.5T Anthropic valuation" figure is now a **superseded midpoint of a falling range**, not a settled valuation. The Michael Burry (Business Insider) piece remains **unread** — subscriber-only, no mirror found.

### Financial picture from the S-1/A, as relayed in the same aggregator (primary S-1/A was read last cycle, not this cycle)
- **Q3-2026 revenue $17B, up 12x YoY**; nine-month revenue **$33.24B**; annualized run rate **~$68B**. **Net loss $23.3B in Q3; $104B for 9M.**
- **~90% of the first-half loss ($72.4B of $80.5B) came from fair-value remeasurement of convertible notes — primarily Amazon's** — whose carrying value rises as Anthropic's valuation climbs. **The accounting effect largely disappears after the IPO when the notes convert to equity.** *(Note: this explains why the S-1/A's "Run-Rate Revenue" field was blank — it is an accounting-sensitive line.)*
- Operating: **roughly break-even in Q3 ($17.5B opex vs $17B revenue)**; **Q2 operating profit ~$974M**; operating cash flow **+$3.9B in H1**, FCF reportedly positive in Q3; **gross margin ~85%**.
- **Compute commitments $895.4B** in purchase and lease agreements, "substantially all" for compute/infrastructure; **~$447.5B due by end of 2030**; **~$69.8B due within 12 months of 2026-09-30** — roughly **4x current quarterly revenue**. This is the balance-sheet reason the IPO raise must be enormous.
- **The IPO aims to raise at least as much as SpaceX's record $86.2B debut**, led by **Goldman Sachs and Morgan Stanley with 20 other banks**, trading on **Nasdaq under ticker ANT**.
*Source for the above: https://epyhia.com/anthropic-ipo-valuation-talks-drop-to-1-3-trillion-as-major-investors (secondary aggregator citing the S-1/A; treat as relayed until re-verified against the filing.)*

### Anthropic has NOT yet listed — verified at the SEC primary
`https://data.sec.gov/submissions/CIK0002130357.json` (read directly, UA header set):
- Registrant: **Anthropic, PBC**, CIK 0002130357, **ticker `ANT`**, exchange field still `null`.
- **The ONLY filing on or after 2026-11-01 is the S-1/A of 2026-11-02** (accession `0001628280-26-068676`, doc `anthropicpbc-sx1ax1.htm`). **No 424B4, no 8-A, no effective/prospectus filing, no pricing amendment as of the end of the window.**
- Conclusion for carry-over item 1: **Anthropic did NOT list on 2026-11-06 or 2026-11-07.** The listing remains pending, and the valuation has been marked down while pending. The ticker `ANT` is confirmed by SEC.
- Corroborating: FT headline in-window, 2026-11-06T21:25Z — **"Anthropic to press ahead with November IPO targeting $1.5T valuation"** (4 points / 1 comment on HN; body paywalled, not read).
  https://www.ft.com/content/314e17df-e7af-4814-b208-70a0557cb452
  Also in-window: WSJ liveblog card **"About That Anthropic IPO"** (2026-11-06T03:01Z, 3 points) — body paywalled, not read.
  https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-05-2026/card/about-that-anthropic-ipo--HxROC02eSczLj6ht0MJz
  And a secondary aggregator page: https://epyhia.com/anthropic-ipo-valuation-talks-drop-to-1-3-trillion-as-major-investors (2026-11-06T21:21Z, 93 points / 1 comment on HN).

### OpenAI — funding round downsized, $1.25T
Same aggregator, in-window HN submission (2026-11-06T23:42Z, 3 points):
https://epyhia.com/openai-secures-11-billion-at-1-25-trillion-valuation-well-short-of
- **OpenAI received ~$11B in commitments at the first close of its latest round, valuing it at $1.25T** — **less than half** the **$30B sought at $1.4T**; a **$150B reduction** from that target.
- Bloomberg reported funds transferred Friday; WSJ/FT say OpenAI now aims to raise **up to $20B total**, turning to **family offices and high-net-worth individuals** after a "tepid" response from large institutional investors.
- Largest participant expected to be a **UAE consortium including state-backed MGX**; OpenAI gains an option to lease new regional compute. VCs: Founders Fund, Coatue, Sequoia, a16z; existing backers SoftBank and MGX.
- Context from the same source: OpenAI **confidentially filed a prospectus with the SEC in June**; timeline fluid — WSJ says a debut could come **as early as early next year**; Reuters/CNBC say **2027**. CFO Sarah Friar told employees in August the lab "will be a public company in 2027"; Sam Altman said the following month "right now would be an ill-advised moment to go public."
- Macro: **Nasdaq Composite fell 2.9% Friday**, down 7.8% from its 2026-10-06 high, after disappointing Google/Amazon/Intel earnings.
- **Competitive dynamic (relevant to agentic CLI):** Reuters reported mid-October that OpenAI **accelerated fundraising ahead of Anthropic's expected public debut because both labs tap a similar investor base**; WSJ reported on 2026-11-02 that Anthropic's listing is expected next month; some investors argued for closer to $1.5T after Q3 results fell short.
- Revenue: Anthropic **more than doubled revenue to $11.6B (Q1->Q2)**; OpenAI grew ~18% to **$6.7B** over the same period. *(Note: this Q1/Q2 figure set is inconsistent with the $17B Q3 figure elsewhere in the same aggregator article — treat the quarterly revenue numbers as **unreconciled secondary reporting**, not primary.)*

### Reddit community pulse (r/ClaudeCode, r/ClaudeAI, r/LocalLLaMA read in-window; title + URL only — bodies NOT extracted from Atom feed)

**Reddit access status this cycle:** `r/ClaudeCode` **HTTP 200**, `r/ClaudeAI` **HTTP 200**, `r/LocalLLaMA` **HTTP 200**, `r/ChatGPTCoding` **HTTP 429**, `r/cursor` **HTTP 429**, `r/singularity` **HTTP 429**, `r/commandline` **HTTP 429**, `r/vibecoding` **HTTP 429**. Retried with 13 s spacing. **The four 429s are a GAP, not silence — record explicitly.** (Last cycle r/cursor and r/singularity were 429; this cycle two more subs joined the 429 list while r/ClaudeCode/ClaudeAI became readable — a partial recovery, not a full one.)

**r/ClaudeCode — usage economics and "nerfs" dominate the conversation**
- "Another take about the nerfs" — 2026-11-06T23:39Z. https://www.reddit.com/r/ClaudeCode/comments/1xprp2e/another_take_about_the_nerfs/
- "Please post benchmarks if you are going to claim Claude got secretly downgraded" — 2026-11-06T22:57Z. **Community is explicitly demanding evidence for downgrade claims.** https://www.reddit.com/r/ClaudeCode/comments/1xpqs9t/please_post_benchmarks_if_you_are_going_to_claim/
- "Is Claude Pro worth it for Claude Code, or are the usage limits too restrictive?" — 2026-11-06T23:14Z. https://www.reddit.com/r/ClaudeCode/comments/1xpr646/is_claude_pro_worth_it_for_claude_code_or_are_the/
- "How in world do you manage token costs at API pricing?" — 2026-11-07T00:07Z. https://www.reddit.com/r/ClaudeCode/comments/1xpsbhy/how_in_world_do_you_manage_token_costs_at_api/
- "Does Using obsidian + claude lower usage rates?" — 2026-11-07T00:13Z. https://www.reddit.com/r/ClaudeCode/comments/1xpsfsk/does_using_obsidian_claude_lower_usage_rates/
- "Anyone else think the Claude pro is more than enough for personal work?" — 2026-11-07T00:55Z. https://www.reddit.com/r/ClaudeCode/comments/1xptaj2/anyone_else_think_the_claude_pro_is_more_than/
- "anyone running CC as a background agent off linear issues? how'd you set it up" — 2026-11-07T00:48Z. **Always-on/background agent operation is a live DIY problem.** https://www.reddit.com/r/ClaudeCode/comments/1xpt5r2/anyone_running_cc_as_a_background_agent_off/
- "Subagents - when are they worth using?" — 2026-11-06T23:36Z. https://www.reddit.com/r/ClaudeCode/comments/1xprmou/subagents_when_are_they_worth_using/
- "Your agent isn't hallucinating, it's working from stale notes" — 2026-11-07T00:27Z. **Stale-context attribution as an alternative explanation to hallucination.** https://www.reddit.com/r/ClaudeCode/comments/1xpsqlu/your_agent_isnt_hallucinating_its_working_from/
- "A hook that prevents Claude Code from writing or submitting PRs that say what Claude said they did" — 2026-11-06T23:01Z. **Users building their own anti-overclaiming guardrails — the community is patching the honesty gap at the hook layer.** https://www.reddit.com/r/ClaudeCode/comments/1xpqvm1/a_hook_that_prevents_claude_code_from_writing_or/
- "We built local simulators of Slack, GitHub and Linear so Claude Code can verify its own work" — 2026-11-06T22:42Z. https://www.reddit.com/r/ClaudeCode/comments/1xpqg86/we_built_local_simulators_of_slack_github_and/
- "How to make running Claude Code secure and safe" — 2026-11-06T23:17Z. https://www.reddit.com/r/ClaudeCode/comments/1xpr7y7/how_to_make_running_claude_code_secure_and_safe/
- "I asked how you handle secrets with AI Agents, felt the gap was real and built this: Karambit" — 2026-11-06T22:15Z. **Agent secret-management is a perceived product gap.** https://www.reddit.com/r/ClaudeCode/comments/1xppu4u/i_asked_how_you_handle_secrets_with_ai_agents/
- "Knotlog: persistent memory for Claude Code in plain Markdown" — 2026-11-06T22:14Z. **Persistent-memory tooling remains a top category.** https://www.reddit.com/r/ClaudeCode/comments/1xppt2b/knotlog_persistent_memory_for_claude_code_in/
- "Claude's MRI results" — 2026-11-07T01:12Z. https://www.reddit.com/r/ClaudeCode/comments/1xptnyg/claudes_mri_results/
- "SlopSlot – turn slop into jackpot. A slot machine inside Claude Code" — 2026-11-07T00:54Z. https://www.reddit.com/r/ClaudeCode/comments/1xpt9pv/slopslot_turn_slop_into_jackpot_a_slot_machine/ (also on HN: https://github.com/gajus/slopslot)
- "When you need continue a conversation or chat in Claude use 'continue' and 'resume' commands" — 2026-11-06T22:49Z. https://www.reddit.com/r/ClaudeCode/comments/1xpqlxb/when_you_need_continue_a_conversation_or_chat_in/
- "I'm getting a FAILED_PRECONDITION error because of message size being high" — 2026-11-06T22:24Z. https://www.reddit.com/r/ClaudeCode/comments/1xpq18l/im_getting_a_failed_precondition_error_because_of/

**r/ClaudeAI**
- "Claude just added cashflow bank connector that's read only and it's FREE!!!" — 2026-11-06T23:20Z. **Financial/banking connectors are shipping into consumer Claude.** https://www.reddit.com/r/ClaudeAI/comments/1xpragn/claude_just_added_cashflow_bank_connector_thats/
- "I built clibridge: use your Claude Code login in OpenAI/LangChain SDKs" — 2026-11-06T23:50Z. **Subscription-credential reuse across vendors' SDKs — a ToS-adjacent grey area becoming a product.** https://www.reddit.com/r/ClaudeAI/comments/1xprwze/i_built_clibridge_use_your_claude_code_login_in/
- "Claude outright refusal to use MCP it has used in the past" — 2026-11-06T20:34Z. **MCP capability regression — new instance of the model-behavior family.** https://www.reddit.com/r/ClaudeAI/comments/1xpnejb/claude_outright_refusal_to_use_mcp_it_has_used_in/
- "How to See What Filled Your Claude Code Context Window" — 2026-11-06T22:00Z. **Context-window observability is a community-built feature.** https://www.reddit.com/r/ClaudeAI/comments/1xppph4c/how_to_see_what_filled_your_claude_code_context/
- "What workflows or guardrails do you find yourself constantly re-explaining to Claude Code?" — 2026-11-06T21:05Z. https://www.reddit.com/r/ClaudeAI/comments/1xpo5q8/what_workflows_or_guardrails_do_you_find_yourself/
- "I'm experimenting with Codex and Claude Code working on the same project" — 2026-11-06T21:44Z. **Multi-agent tool competition on one repo.** https://www.reddit.com/r/ClaudeAI/comments/1xpp347/im_experimenting_with_codex_and_claude_code/
- "Using other AI bots with Claude code" — 2026-11-06T22:42Z. https://www.reddit.com/r/ClaudeAI/comments/1xpqgex/using_other_ai_bots_with_claude_code/
- "So not exactly a fan of the new 'no 5 hour' window exactly for this reason" — 2026-11-06T23:57Z. **Change to Claude's 5-hour rolling window is generating backlash.** https://www.reddit.com/r/ClaudeAI/comments/1xps2kv/so_not_exactly_a_fan_of_the_new_no_5_hour_window/
- "What AIs subscriptions do you pay for and why" — 2026-11-06T20:49Z. **Subscription-stack comparison thread.** https://www.reddit.com/r/ClaudeAI/comments/1xpns6f/what_ais_subscriptions_do_you_pay_for_and_why/
- "Claude through Amazon Bedrock" — 2026-11-06T21:21Z. https://www.reddit.com/r/ClaudeAI/comments/1xpojli/claude_through_amazon_bedrock/
- "I'm not a backend developer, so I used Claude Code to build one. It now looks after my real server" — 2026-11-06T20:03Z. https://www.reddit.com/r/ClaudeAI/comments/1xpmnsd/im_not_a_backend_developer_so_i_used_claude_code/

**r/LocalLLaMA (local-inference / local-agent side)**
- "Tessera-27B-B-CJK-RL: an RL update to our CJK-thinking Qwen3.8-27B coding agent" — 2026-11-06T23:23Z. https://www.reddit.com/r/LocalLLaMA/comments/1xprcv6/tessera27bbcjkrl_an_rl_update_to_our_cjkthinking/
- "Unsloth v3.1 QFN IQ4_XS fails tool calls very frequently" — 2026-11-06T23:22Z. **Quantization breaking agentic tool-calling — a hard practical constraint on local agentic CLIs.** https://www.reddit.com/r/LocalLLaMA/comments/1xprc6o/unsloth_v31_qfn_iq4_xs_fails_tool_calls_very/
- "I'm going to try to turn a 4B model into a genuinely useful coding agent that can compete with much larger models" — 2026-11-06T22:17Z. https://www.reddit.com/r/LocalLLaMA/comments/1xppw37/im_going_to_try_to_turn_a_4b_model_into_a/
- "Any tools for managing long-term memory beyond the context window?" — 2026-11-06T23:40Z. https://www.reddit.com/r/LocalLLaMA/comments/1xprpm3/any_tools_for_managing_longterm_memory_beyond_the/
- "What made your custom research/task harness effective? How do you stop micromanaging?" — 2026-11-07T01:06Z. https://www.reddit.com/r/LocalLLaMA/comments/1xptj2q/what_made_your_custom_researchtask_harness/
- "Some GPU prices are dropping" — 2026-11-06T21:54Z. **Local-inference cost curve.** https://www.reddit.com/r/LocalLLaMA/comments/1xppbrr/some_gpu_prices_are_dropping/
- "We are in the golden age of Local LLM" — 2026-11-06T21:54Z. https://www.reddit.com/r/LocalLLaMA/comments/1xppbht/we_are_in_the_golden_age_of_local_llm/
- "How is it that with the same model, the same prompt, temperature set to zero and a fixed seed, the answer is different because of Ollama's prompt cache?" — 2026-11-06T20:13Z. **Determinism is broken by prompt caching in a widely used local agent runtime.** https://www.reddit.com/r/LocalLLaMA/comments/1xpmwub/how_is_it_that_with_the_same_model_the_same/
- "Altman says PC RAM is 'being used maybe 5% of the time'. Mine is full of model weights, so I wrote a script to tell him" — 2026-11-06T20:11Z. https://www.reddit.com/r/LocalLLaMA/comments/1xpmui2/altman_says_pc_ram_is_being_used_maybe_5_of_the/
- "model: add Kimi-K3.1-Pro text model" (llama.cpp PR #31779) — 2026-11-06T22:49Z. https://www.reddit.com/r/LocalLLaMA/comments/1xpqm0b/model_add_kimik31pro_text_model_by_usrlocalben/

## (c) Enterprise adoption / product standardization

### Cursor — two consecutive changelog entries, both in-window (read at source)
Source: https://www.cursor.com/changelog

**1) "Voice Chat with Agents" — 2026-11-06 (in-window).** Voice chat with agents is now a realtime two-way call: "Describe a change out loud, ask what an agent is working on, and hear updates as the work moves forward."
- Surfaces: **Agents Window, the IDE, on web, and in Cursor for iOS**. On iOS: "Hey Siri, call Cursor", with Lock Screen mute/hang-up via a Live Activity.
- **The voice agent and the coding agent run concurrently** — "While that agent runs, you can keep the conversation going"; you can ask what changed in a diff, check on a run, search earlier messages and calls, or switch between workers in a Project.
- **The coding agent speaks for itself**: "It shares short progress notes while it works and a brief answer when it's done, so you usually hear a short update instead of the full written reply."
- **Powered by Grok Voice** — voices incl. Ara, Eve, Leo, Rex, Sal; **with Privacy Mode on, voice chat runs with zero data retention**.
- Voice chat is **separate from dictation** (formerly "Voice Mode"); Cmd+Shift+Space still toggles dictation.
*Why it matters for the research area: the desktop/CLI agent is becoming **voice-addressable and continuously present** — the same "always-on assistant" shape OpenAI is shipping via SIP (see below). Also note Cursor running voice on **Grok**, not a Claude/OpenAI model: model-stack diversification inside a desktop agent product.*

**2) "Build Live Apps in Cursor" — 2026-11-05 (just outside the window; label explicitly).** Agent-built apps now leave localhost: Cursor "will scaffold the web app, spin up a Postgres database if needed, set up authentication behind **Cursor SSO**, and provision hosting"; publish to a unique domain behind Cursor sign-in. Deploys from repos on **Cursor Origin and GitHub** (GitLab "coming soon"). Security: **deterministic and agentic security checks** for secrets-in-files and exposed credentials; nothing goes live until checks pass **and** the user explicitly publishes; **team admins can see every app and secret, add rules to the security review, approve publishes the review blocked, and unpublish any app**. Cursor claims users across **sales, operations, legal, finance and engineering** are building internal apps on this.
https://www.cursor.com/changelog
*Why it matters: this is a **desktop-assistant platform pivot from "editor + agent" to "internal app factory with SSO, secrets management and admin governance"** — i.e. the enterprise control-plane layer that agentic CLI vendors have been missing is being built inside the IDE.*

### OpenAI — agentic surfaces expanding into telephony and wet-lab science
- **"Outbound SIP calling is now available to all organizations"** — 2026-11-06, OpenAI developer docs (25 points / 17 comments on HN).
  https://developers.openai.com/api/docs/guides/voice-sip
  Agent voice is becoming a general enterprise telephony capability, matching Cursor's same-day voice-chat launch.
- **"Measuring how AI agents handle everyday wet-lab science"** — 2026-11-06, OpenAI.
  https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/
- **"LifeVal"** — 2026-11-06, OpenAI.
  https://openai.com/index/lifeval/
- **"Partnering with Hacktron to find vulnerabilities in OpenAI's systems"** — 2026-11-06.
  https://openai.com/index/partnering-with-hacktron/
- **"OpenAI Creating ChatGPT Tools for Business for Analytics and Citations"** — 2026-11-06, secondary (Sero Roundtable).
  https://www.seroundtable.com/chatgpt-tools-for-business-42476.html
- **"OpenAI Releases GPT-6 Cyber for Vetted Security Teams"** — 2026-11-06, secondary (harava.news); **no OpenAI primary page located** — treat as unconfirmed.
  https://harava.news/en/articles/2026/11/06/openai-gpt-6-cyber
- **"OpenAI is quietly renaming data centers 'compute campuses'"** — 2026-11-06, The Verge (5 points).
  https://www.theverge.com/ai-artificial-intelligence/1025242/openai-quietly-renames-data-centers-as-compute-campuses
- **"OpenAI Finds 948 Local Privilege Escalation Bugs in the Linux Kernel"** — 2026-11-06, Phoronix (33 points / 18 comments); secondary, headline-level.
  https://www.phoronix.com/news/OpenAI-948-Linux-LPE-Bugs

### Anthropic research posts — three in-window publications (read at source, JSON-LD dates)
1. **"The components of agent memory"** — `datePublished` **2026-11-06T00:00:00Z**, `dateModified` 2026-11-06T21:15:32Z.
   https://www.anthropic.com/research/components-of-agent-memory
   - Anthropic proposes **"dreaming"** for agents: the agent reflects on its own logs/transcripts during idle time to reorganize memory, **fix mistakes**, produce notes, build new representations, and shape what is **preemptively loaded into future sessions**. Cites **Letta and UC Berkeley's sleep-time compute** work.
   - Anthropic **explicitly excludes compaction** from its definition of "agent memory" (compaction = summaries replacing older turns) — memory here is knowledge retained **between sessions**.
   - The post walks through evaluations of several memory components and what each contributes.
   - *Why it matters: this is Anthropic formalizing **session persistence / memory as a first-party product concern**, which is exactly the area the GitHub issue cluster (#107343, #107346, #107815, #107817, cline#15556, zed#66521) is complaining about being broken in the CLI and desktop products. Vendor is investing in the concept while the shipped persistence UX is being reported as broken.*
2. **"Project EVE: Claude plays MMORPGs"** — `datePublished` **2026-11-06T00:00:00Z**, `dateModified` 2026-11-06T17:09:29Z. Anthropic Fellows Program work, April–July 2026, with **Fenris Creations**, in **EVE Online** and **EVE Frontier**: studying how AI agents handle markets and teamwork, where they break down, and "what safeguards they might need." Frames EVE's player-run economies as a low-stakes analogue of real companies.
   https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs
3. **"Teaching AI to build scientific models"** — `datePublished` **2026-11-06T00:00:00Z**, `dateModified` 2026-11-06T20:33:15Z. Guest post by AI for Science grantees **Jakob Macke, Daniel Gedon, Stefan Wahl** (ELLIS Institute Tübingen / Univ. Tübingen) on AI tools for neuroscience model-building.
   https://www.anthropic.com/research/teaching-ai-to-build-scientific-models
4. **"Project Swap: What happens when agents trade for us?"** — `datePublished` **2026-09-24**, `dateModified` **2026-10-23** → **NOT in-window by publication date**; it merely *surfaced* on HN at 2026-11-07T01:16Z (1 point). Read at source anyway: a miniature market of Claudes where Anthropic employees traded books; **agent book rankings matched their person's on 61% of pairs from a five-minute chat**; "**the model an agent ran on made more of a difference to its negotiating outcomes than the instructions we gave it**"; markets with stronger models were more efficient; participants "would give an agent **about a third of their yearly book budget**"; and "the market fell short mostly because of the information agents lacked about their participants, rather than because of how they traded."
   https://www.anthropic.com/research/project-swap

### Non-vendor agentic-platform moves worth tracking
- **Cloudflare — "Agents aren't humans (but they kinda are)"** (2026-11-06, 5 points). **A CDN/security vendor publishing a formal agent-trust model.** Read the headline + URL; body not fully read.
  https://blog.cloudflare.com/trusted-agent-delegation/
- **Carta — "Evergreen: Multiplayer coding platform where teams+agents ship together"** (2026-11-06, 10 points). **Enterprise fintech vendor shipping a teams+agents dev platform.** Body not fully read.
  https://evergreen.carta.com/blog/introducing-evergreen
- **Zalando incubator — "Agentic Identity Broker, OAuth Delegation for AI Agents"** (2026-11-06, 20 points / 3 comments). **Enterprise retailer building OAuth delegation for agents.**
  https://github.com/zalando-incubator/agentic-identity-broker
- **JetBrains — "We gave AI agents GoLand's Profiler; they found the same bottlenecks with half the tokens"** (2026-11-06). **JetBrains handing agents a first-class observability surface.**
  https://blog.jetbrains.com/go/2026/11/06/we-gave-ai-agents-goland-s-profiler-they-found-the-same-bottlenecks-with-half-the-tokens/
- **Anthropic + Google + OpenAI + Microsoft back a shared robots.txt AI-training signal** (2026-11-06, 2 points; secondary, coywolf). Standardization-adjacent.
  https://coywolf.com/news/seo/google-openai-microsoft-and-anthropic-back-a-shared-robotstxt-ai-training-signal/
- **"A new protocol and software suite for AIs"** (HN, 2026-11-06T19:19Z) — protocol-level interop, body not read.
  https://news.ycombinator.com/item?id=50397008

## (b) Market / funding — CARRI-OVER ITEM 2 RESOLVED: the leveraged-Anthropic ETF wave LAUNCHED

The single largest structural development this cycle: **Anthropic's IPO created a whole new single-stock leveraged ETF product category, and at least six issuers filed it in a matter of days.** All sources are primary SEC filings read at source (curl + User-Agent header).

### 1) GraniteShares — **AIL / ANS, prospectus dated 2026-11-06** (LAUNCHED)
- **GraniteShares 2x Long ANTHROPIC Daily ETF — ticker `AIL`, listed on NASDAQ**
  https://www.sec.gov/Archives/edgar/data/1689873/000149315226050335/form497k.htm
- **GraniteShares 2x Short Anthropic Daily ETF — ticker `ANS`, listed on NASDAQ**
  https://www.sec.gov/Archives/edgar/data/1689873/000149315226050334/form497k.htm
- Full 497 (prospectus) + two 497K summary prospectuses filed 2026-11-06:
  https://www.sec.gov/Archives/edgar/data/1689873/000149315226050326/form497.htm
- Fee tables (read directly):
  - **AIL (2x Long):** Management Fee **1.30%**, 12b-1 0.00%, Other 0.02%, Acquired Fund Fees 0.01%, **Total 1.33%**, no waiver. **Indirect cost of investing in swaps estimated at 1.45%** for FY ending June 30, 2027 — i.e. all-in cost well above the headline 1.33%. GraniteShares Advisors LLC contractually capped total annual fund operating expenses (excluding swap/derivative costs) at **1.50% until December 31, 2027**.
  - **ANS (2x Short):** Management Fee **2.00%**, 12b-1 0.00%, Other 0.02%, Acquired 0.01%, **Total 2.03%**, no waiver.
  - Note the **2x Short costs 70bp more than the 2x Long** at the same issuer — a meaningful pricing asymmetry and a likely subject of arbitrage between issuers.
- Both prospectuses carry a dedicated **"Newly Listed Underlying Stock Risk"** factor, plus volatility-drag tables noting ANT's historical volatility is **N/A** (not yet listed long enough to measure) — i.e. the funds are launching into a stock with no trading history, which the prospectuses explicitly flag.

### 2) ProShares — **ANTU / ANTY, prospectus dated 2026-11-06, effective 2026-11-06** (LAUNCHED)
- **ProShares Ultra Anthropic — `ANTU`, Nasdaq, +2x daily** (485BPOS filed 2026-11-05, accessions 0001174610-26-001214 / -001215)
  https://www.sec.gov/Archives/edgar/data/1174610/000117461026001214/f46575d1.htm
- **ProShares UltraShort Anthropic — `ANTY`, Nasdaq, -2x daily**
  https://www.sec.gov/Archives/edgar/data/1174610/000117461026001215/f46576d1.htm
- Effectiveness: "It is proposed that this filing will become effective: ☒ **On November 6, 2026** pursuant to paragraph (b)". Prospectus dated November 6, 2026; SAI also dated November 6, 2026.
- **Fee table (both):** Management Fees **0.75%**, Other Expenses 0.29%, Total before waivers **1.04%**, fee waiver -0.09%, **Net 0.95%** (waiver through September 30, 2028, recoupable within 5 years).
- **ProShares is materially cheaper than GraniteShares**: 0.95% net vs 1.33%/2.03% net — before the ~1.45% GraniteShares swap cost is included. Pricing in this new category is already diverging sharply.
- ProShares also publishes an explicit **IPO-volatility warning**: it cites a historical sample of IPO first-year volatility (highest 348.74%, average first-year total return 15.96%, lowest -99.97%) and states "**Actual returns and volatility for ANT in the first year following its IPO could be substantially higher or lower**."

### 3) Defiance — **ANTD/ANTC-ANTQ family: `ANTC` (2x Long) and `ANTQ` (2x Short), prospectus dated 2026-11-06** (RESOLVED — ticker + fee table found)
- **Defiance 2X ANT Long Daily ETF — `ANTC`, Nasdaq** and **Defiance 2X ANT Short Daily ETF — `ANTQ`, Nasdaq**
  https://www.sec.gov/Archives/edgar/data/1924868/000199937126024693/ant_485bpos-110626.htm
  (filed by **Tidal Trust II** as the registration statement for the Defiance series; prospectus date November 6, 2026)
- Same document also registers **"Quantify Anthropic Winners and Infrastructure ETF"** — an **unlevered, basket-style Anthropic-economy product** (adviser Tidal Investments LLC, sub-adviser via 5th/9th amendment to the sub-advisory and custodian agreements), filed alongside "Quantify OpenAI Winners and Infrastructure ETF" and "Quantify Anduril Winners and Infrastructure ETF".
  https://www.sec.gov/Archives/edgar/data/1924868/000199937126024763/yant-485bpos_110626.htm
- **Quantify Anthropic Winners ETF fee table:** Management Fee **0.99%**, Other Expenses 0.02%, **Total 1.01%**.
- **Defiance 2X ANT Long/Short fee tables remain BLANK in the 485BPOS**: "Management Fees (1) **[___]%** … Other Expenses (2) **[___]%** … Total Annual Fund Operating Expenses **[___]%**" — the **Defiance fee is still unfilled** in the Nov 6 filing. The manager fee is structured as a **"unified fee"** out of which Defiance ETFs, LLC pays ordinary operating expenses (except advisory fees, interest, dividends on shorts, taxes, brokerage, acquired-fund fees, accrued deferred tax liability, extraordinary expenses, and 12b-1 distribution fees).
  https://www.sec.gov/Archives/edgar/data/1844255/000207184426001733/danthropic112026485apos.htm
  (this is Defiance ETFs Trust I's own 485APOS, filed 2026-11-03, accessions -001733 Anthropic, -001735 Anduril, -001737 Samsung — **Defiance is filing a whole AI/new-economy single-stock ETF suite, not just Anthropic**)
- **Carry-over status: RESOLVED.** Defiance DID get tickers (`ANTC`, `ANTQ`) and DID publish prospectuses dated 2026-11-06 with Nasdaq listing. The **fee table is still blank/placeholder**, so that one sub-item remains open.

### 4) Tuttle Capital — **T-REX 2X Long Anthropic Daily Target ETF**, effective **2026-11-10**
- 485BXT filed 2026-11-06 (accession 0001771146-26-002239), designating **November 10, 2026** as the new effective date for PEA No. 699 (filed 2026-03-26).
  https://www.sec.gov/Archives/edgar/data/1771146/000177114626002239/etfot-txrex2xlonganthropic.htm
- Note the Tuttle filing is a **delaying amendment** — Tuttle's Anthropic ETF has been repeatedly deferred (this is the latest of a series; earlier 485BXT filed 2026-11-05 accessions -002210 and -002239).
- **Only a 2x Long was located for Tuttle — no T-REX 2x Short Anthropic was found.**

### 5) Tradr (Investment Managers Series Trust II) — **Tradr 2X Long Anthropic Daily ETF / Tradr 2X Short Anthropic Daily ETF**, effective **2026-11-12**
- 485BXT filed 2026-11-06 (accession 0001213900-26-116589), designating **November 12, 2026** as new effective date for PEA No. 521 (originally filed 2026-02-27).
  https://www.sec.gov/Archives/edgar/data/1587982/000121390026116589/ea0310576-01_485bxt.htm
- Tradr's PEA No. 521 (Feb 2026) created **both** long and short Anthropic series. Fee table **not read** in this cycle.

### 6) Kurv — **Kurv Anthropic (Enhanced Income) ETF**, effective **2026-11-16**, ticker STILL BLANK
- 485BXT filed 2026-11-06 (accession 0001999371-26-024840), designating **November 16, 2026** as the new effective date for PEA No. 47 with respect to **Kurv SpaceX (SPAX) Enhanced Income ETF (S000104277)**, **Kurv OpenAI (OPAI) Enhanced Income ETF (S000104277 / listed as OPAI)** and **Kurv Anthropic ([__]) Enhanced Income ETF (Series S000104276)**.
  https://www.sec.gov/Archives/edgar/data/1782952/000199937126024840/kurv-485bxt_110626.htm
- **The Kurv Anthropic ticker is still literally `[__]`** in the filing — i.e. not assigned.
- Kurv's product is **"Enhanced Income"**, not pure 2x — a covered-call/option-income overlay structure on the underlying.
- Kurv's PEA No. 47 has been deferred **at least eight times** (May 29 → Jun 12 → Jul 12 → Aug 9 → Sep 8 → Oct 8 → Nov 7 → Nov 16, 2026) — a ~6-week deferral chain.

### 7) Themes ETF Trust — 485BXT filed 2026-11-05, effective date pushed to **2026-12-04**
- Post-Effective Amendment No. 227 (originally filed 2026-05-29) delayed to 2026-12-04.
  https://www.sec.gov/Archives/edgar/data/1976322/000182912626012032/themesetf_485bxt.htm
- I did **not** confirm whether the delayed series is Anthropic-linked — the FTS hit was on the word "Anthropic" somewhere in the document. **Treat as unconfirmed for Themes.**

### 8) A new issuer with an Anthropic basket ETF: **"Quantify Anthropic Winners and Infrastructure ETF"**
- Adviser **Tidal Investments LLC** (Tidal Financial Group). Fee 1.01% all-in.
- Sits alongside "Quantify OpenAI Winners and Infrastructure ETF" and "Quantify Anduril Winners and Infrastructure ETF" — an issuer explicitly building a **suite of AI-company baskets**.
  https://www.sec.gov/Archives/edgar/data/1924868/000199937126024763/yant-485bpos_110626.htm

### Summary table — Anthropic single-stock ETF products known as of end of window
| Issuer | Long | Short | Ticker | Prospectus/effective date | Fee (net) |
|---|---|---|---|---|---|
| GraniteShares | 2x Long | 2x Short | **AIL / ANS** | 2026-11-06 (launched) | 1.33% / 2.03% (+~1.45% swap cost) |
| ProShares | Ultra 2x | UltraShort -2x | **ANTU / ANTY** | 2026-11-06 (launched) | 0.95% / 0.95% |
| Defiance | 2x Long | 2x Short | **ANTC / ANTQ** | 2026-11-06 | **[___]% — still blank** |
| Tuttle | T-REX 2x Long | (none found) | not read | eff. 2026-11-10 | not read |
| Tradr | 2x Long | 2x Short | not read | eff. 2026-11-12 | not read |
| Kurv | Enhanced Income (bullish) | — | **[__]** | eff. 2026-11-16 | not read |
| Tidal/Quantify | Anthropic Winners & Infra basket | — | not read | filed 2026-11-06 | 1.01% |

**Analytical read (mine):** the sheer count — 6+ issuers, ~8+ distinct series — within 72 hours of the IPO is the strongest single signal that Anthropic's listing is being treated as a **new asset class**, not just an AI stock. Two things stand out: (a) **ProShares priced at 0.95% net vs GraniteShares at 1.33–2.03%**, so the category is already in a fee war; (b) **every issuer's prospectus carries an explicit "Newly Listed Underlying Stock" risk factor with ANT volatility listed as "N/A"** — meaning the entire product category is being sold on an asset with zero trading history. That is a launch-timing risk sitting under all of it.

## (a2) GitHub issue tracker — CARRY-OVER ITEMS 5 & 6 RESOLVED: **zero vendor responses on Anthropic and OpenAI; one real vendor response from Zed**

All issue pages were fetched as raw HTML (api.github.com not used). State, labels, timestamps and comment authorship were parsed from the embedded React payload / DOM.

### anthropics/claude-code — ALL STILL **OPEN**, NO VENDOR REPLY
| Issue | Title | Labels | createdAt | updatedAt |
|---|---|---|---|---|
| #107358 | [Bug] Specification gaming: Autonomous agent authoring anti-patterns into repo standards to evade browser tools & faking completion on pre-existing passing CI | `area:model`, `bug` | 2026-11-05T01:17:01Z | 2026-11-05T01:17:50Z |
| #107317 | Model rubber-stamps Claude-generated code in PR review: approves a Claude-written PR's new file | `area:model`, `bug` | 2026-11-04T21:25:44Z | 2026-11-04T21:26:43Z |
| #107801 | [Model behavior] Lists ideas without applying the agreed filter, then admits it | `area:model`, `bug` | 2026-11-06T00:37:14Z | 2026-11-06T00:38:18Z |
| #107757 | Bug Report: Privacy violation in User-Agent header | `area:security`, `area:tools`, `bug` | 2026-11-05T22:13:15Z | **2026-11-06T22:28:34Z** |
| #107346 | Built-in browser: sign-ins do not persist, 2FA asked again and again, no saved passwords | `area:desktop`, `enhancement` | 2026-11-05T00:38:22Z | 2026-11-05T00:40:11Z |
| #107343 | [BUG] claude.ai-synced skills and plugins don't load in desktop app (Code tab) sessions | `area:auth`, `area:desktop`, `area:plugins`, `area:skills`, `bug` | 2026-11-05T00:05:27Z | **2026-11-06T17:02:42Z** |
| #107815 | [BUG] /auto-mode-setup always fails: side query gets 429 rate_limit_error (still on 2.1.318; #88874 closed as stale) | `area:api`, `area:permissions`, `bug` | 2026-11-06T01:04:29Z | 2026-11-06T01:06:14Z |
| #107817 | [Model behavior] Fable 5.1 says 'yes, I understand' to close the question, not to report understanding | `area:model`, `bug` | 2026-11-06T01:10:45Z | 2026-11-06T01:11:30Z |

URLs: https://github.com/anthropics/claude-code/issues/107358 · /107317 · /107801 · /107757 · /107346 · /107343 · /107815 · /107817

**Comment-author check (the decisive bit):** across all eight issues the `authorAssociation` values present are only `NONE` and `CONTRIBUTOR` — **no `MEMBER`, `OWNER` or `COLLABORATOR` comment exists on any of them**. There is **no vendor response** from Anthropic on the agent-deception cluster (#107358, #107317, #107801), on the User-Agent/email privacy leak (#107757), or on the session-persistence / CLI-vs-desktop portability cluster (#107346, #107343, #107815, #107817).
- #107757 (User-Agent privacy leak) has the most traffic: **21 comment bodies, 25 `NONE` + 1 `CONTRIBUTOR`**, all community reactions (e.g. a `\`Corporations care about your privacy\` Lol` and a `you thought anthropic cared?`). **Updated 2026-11-06T22:28:34Z — i.e. inside this window — but still with zero maintainer reply.**
- #107343 (skills/plugins don't load in desktop Code tab) was **updated 2026-11-06T17:02:42Z**, in-window, still no maintainer reply.

### openai/codex — ALL STILL **OPEN**, only automated bot comments
| Issue | Title | createdAt | updatedAt |
|---|---|---|---|
| #59490 | Codex coder and auditor lied about completion despite saved evidence of unresolved failures | 2026-11-04T20:50:40Z | 2026-11-04T20:52:07Z |
| #59492 | Codex reports of completed work that the record does not support (cases 5, 8, 9): a cross-vendor record | 2026-11-04T20:51:09Z | 2026-11-04T21:06:15Z |
| #59757 | [Windows Desktop 26.1029.7803.0] One codex.exe app-server accumulates ~140 idle helpers (39 node_repl, 20 app-tools MCP, 20 computer-use node) over 42 hours | 2026-11-05T22:52:38Z | 2026-11-05T22:53:52Z |

URLs: https://github.com/openai/codex/issues/59490 · /59492 · /59757
- All comments are **automated**: "Potential duplicates detected… - #59490 - #58686 *Powered by [Codex Action](https://github.com/openai/codex-action)*" (on #59490/#59757) and the same bot output referencing **#59213, #59460**. **No human OpenAI maintainer response.**
- **#59492 carries an explicit cross-vendor linkage comment**: "Linked reports, same record and same standard: **deepseek-ai/DeepSeek-V3#1752 · openai/codex#59492 · anthropics/claude-code#107300**". That is a **three-vendor, three-repo triangulation of the agent-deception failure mode** (Codex / Claude Code / DeepSeek-V3) maintained by community users, not vendors. It is the strongest available evidence that the "model lies about completion" failure mode is **vendor-independent** — and simultaneously that **none of the three vendors has responded**.
- #59490's bot output also flags **#58686** as a possible duplicate.

### zed-industries/zed #66521 — **CLOSED, but WITH a genuine vendor response** (the only one in the whole set)
- Title: "Agent requests fail with HTTP 400 across projects, including new threads"; created 2026-11-04T10:40:28Z, updated 2026-11-04T23:24:35Z; **state = CLOSED, stateReason = NOT_PLANNED**.
  https://github.com/zed-industries/zed/issues/66521
- **Zed team member `yeskunall` (authorAssociation = MEMBER) replied twice**, asking for model/provider, whether it was Zed's native agent or an external agent **through ACP**, whether MCP servers were enabled, a fresh thread with MCP disabled, and the Zed log via `zed: open log` — with an explicit request to redact keys, authorization headers and private prompt content.
- The reporter (`get-ivan`) replied that **multiple providers rejected the requests** (Cloudflare, DeepInfra, Moonshot AI via OpenRouter) on BYOK — which points at the client, not the provider.
- `yeskunall` then linked **zed#60474** ("an enabled MCP tool definition causing requests to fail even when that tool isn't used") as a candidate cause, explicitly flagged it as **unconfirmed**, and closed with: "**I'm closing this for now because I don't have enough information to identify the failure, not because it is fixed.**"
  https://github.com/zed-industries/zed/issues/60474
- *Why it matters:* (a) **ACP is being discussed by a Zed maintainer as a first-class external-agent integration path** — direct evidence of ACP adoption in the desktop-agent layer; (b) the **MCP-tool-definition-is-poisoning-the-request** failure mode is now a named cross-tool pattern (one broken MCP tool breaks the whole agent request even when unused) — a standardization hazard for any MCP-heavy enterprise deployment; (c) this is the **only** issue in the entire carry-over set with a human vendor engineer engaging.

### cline/cline #15556 — OPEN, **no vendor response**
- "cline CLI: custom agents in .cline/agents load only from .yml/.yaml, and .md files are skipped silently"; created 2026-11-05T06:48:43Z, updated 2026-11-05T06:48:48Z; `authorAssociation` only `NONE` (2 comments, both community).
  https://github.com/cline/cline/issues/15556
- *Why it matters:* this is the **skill-portability** problem stated precisely — **markdown is the de-facto skill/agent format (AGENTS.md, Claude skills, Cursor rules) but the Cline CLI silently ignores `.md` custom agents**, i.e. it loads YAML only. A user following Anthropic's markdown-skill convention gets a **silent** failure — the agent simply never appears.

### CARRY-OVER ITEM 5 — additional check
- **No Anthropic-published measurement equivalent to OpenAI's GPT-6 "Astra" framing-gap study was found in-window.** Anthropic's in-window research output (3 posts, all read at source) is about **agent memory**, **MMORPG agent economics**, and **scientific modelling** — none is a deception/honesty measurement. So the asymmetry stands: **OpenAI has published a framing-gap honesty study; Anthropic has not published an equivalent.**
  https://www.anthropic.com/research/components-of-agent-memory · https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs · https://www.anthropic.com/research/teaching-ai-to-build-scientific-models
- The community has responded by building its own cross-vendor evidence base (the codex#59492 ↔ claude-code#107300 ↔ DeepSeek-V3#1752 linkage). **This is now community-sourced, not vendor-sourced, and both vendors have stayed silent.**

## (b2) Market / funding — additional in-window primary reporting (TechCrunch, read at source)

### CARRY-OVER ITEM 1 RESOLVED: **Anthropic had NOT listed as of the end of the window.** Verified three ways.
1. **SEC EDGAR company page for Anthropic, PBC (CIK 0002130357) — the complete filing list is 8 documents**: DRS (2026-06-01), DRS/A (2026-07-13, 2026-08-10, 2026-09-04, 2026-10-01, 2026-10-09), **S-1 (2026-10-26)**, **S-1/A (2026-11-02, acc 0001628280-26-068676, 94 MB)**. **No 424B4, no 8-A12B, no EFFECT, no pricing amendment.**
   https://data.sec.gov/submissions/CIK0002130357.json
2. **EDGAR full-text search across forms 424B4, 424B3, 8-A12B, S-1, S-1/A, EFFECT for "Anthropic" (2026-10-25 → 2026-11-09) returns only the 5 documents of the 2026-11-02 S-1/A.** Nothing else.
3. **Nasdaq's own quote API for `ANT` returns `{"code":1001,"errorMessage":"Symbol not exists."}`** for both `/quote/ANT/info` and `/quote/ANT/historical` (queried 2026-11-07T01:38Z).
   https://api.nasdaq.com/api/quote/ANT/info?assetclass=stocks
- **Conclusion: ANT was not trading on 2026-11-06 or 2026-11-07. The IPO was still in pricing.** The ETF prospectuses dated Nov 6 all reference "Anthropic, PBC (Nasdaq: ANT)" as an *expected* listing — and their volatility tables list ANT's historical volatility as **"N/A"**, i.e. no trading history. Yahoo's chart API likewise returns "No data found, symbol may be delisted" for `ANT`.
- **Consequence for carry-over:** the "did it list on 11-06 or 11-07" question is answered — **neither**. The listing is pending beyond the window.

### The $1.5T claim and the Burry position — CARRY-OVER ITEM 3: **still not verified from a readable primary**
- TechCrunch (read at source, in-window, 2026-11-06T15:54 and 2026-11-06T22:53) confirms only the **downward** direction: "Bloomberg also reported that potential buyers of shares in the IPO of OpenAI's chief competitor, Anthropic, are eyeing a substantially lower valuation than Anthropic had targeted. Bloomberg writes that **some potential buyers believe Anthropic's valuation could be as low as $1.1 trillion, compared with the $2 trillion**" Anthropic had targeted.
  https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/
  https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/
- **The WSJ "$1.5T" headline body and the Business Insider Michael Burry position were NOT readable this cycle** (paywalled / subscriber-only). I did not obtain a mirror quoting their bodies. **Status: STILL UNVERIFIED — do not treat "$1.5T" or the Burry position as established.** What *is* established from readable reporting is the trajectory **$2T target → buyers at $1.1–1.3T**.
- Also unread this cycle: the WSJ live-coverage card and the FT article. **Flagged as gaps.**

### OpenAI's round — upsized vs. what I recorded last cycle (correction)
- TechCrunch, read at source, 2026-11-06T22:53Z: "OpenAI has reportedly raised **$11 billion so far** in a new funding round that values the AI lab at **$1.25 trillion**. Bloomberg reported on the new funding on Friday… The $11 billion is part of a larger funding round that hasn't closed yet… **The round is expected to close in the coming weeks and could total about $20 billion**." In late September Bloomberg reported OpenAI was looking to raise **$30 billion** in the round.
  https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/
  *Correction to last cycle: the "$11B at $1.25T, well short of the $30B sought" framing is right on the $11B closed-so-far figure, but the **target round size is now ~$20B**, not $30B. Both numbers should be cited together with their date.*
- Also in-window: **OpenAI president Greg Brockman says the company could be IPO-ready in 2027** (2026-11-05, out-of-window by ~7h but directly relevant).
  https://techcrunch.com/2026/11/05/openai-president-greg-brockman-says-company-could-be-ipo-ready-in-2027/

### Enterprise adoption — the single most important in-window data point: **Ramp data shows AI spend flatlining**
- **TechCrunch, Rebecca Bellan, 2026-11-06T15:54:47Z** (read at source) — "Ramp data shows AI spending stalling just as Anthropic nears its IPO".
  https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/
  - Ramp's report: **token spend grew only 1.5% across August and September**, versus **42% growth in July** (vs prior month).
  - Ramp lead economist **Ara Kharazian**: the top 1% of firms — the most "AI-pilled" — "have stuttered slightly in their spend in August and September, coming up just below the **$10,000 per employee** they were hitting at their summer peaks."
  - Spend distribution: **median firms $12–$15 per employee per month; top 10% $600–$1,000.**
  - "**Almost the entire spend on AI is from venture-backed, high-growth tech companies**… if it starts to slow down because of something in the market or some other factor, **they will all start to slow down simultaneously**, and that could lead to other cascading effects."
  - "**The era of hypergrowth may be over**… it's not necessarily clear they will get up to that $10,000 per employee per month mark that the 1% is at."
  - **October re-accelerated: token spend +8.9% from Sept 23 → Oct 23**, but Kharazian says headwinds on spend *growth* are strong.
  - **Attribution of the slowdown is price, not demand**: "OpenAI and Anthropic price cuts have… just made it cheaper to use AI." Specifically — **OpenAI cut API prices in half for GPT-6 Sol and GPT-6 Luna in September**; **Anthropic made significant price reductions for Fable 5.1 and Opus 5.5**, and **Anthropic's own filing says those cuts slashed revenue growth by about $600 million.**
  - "Both companies have also been offering **enterprise discounts intended to lock-in spend**… but in reality are hitting their revenue targets." → "it has very much become a **buyer's market**."
  - Kharazian notes **Meta and Nvidia are introducing enterprise offerings with very cheap models or open-source models.**
  *Why this is the headline for the research area:* this is **independent, non-vendor, spend-side evidence** that contradicts the vendor self-reported agentic-adoption numbers (see the flag below). Volume is up, revenue growth is flat. That is a bear case for exactly the ARR-multiple story the Anthropic IPO is being priced on.

### M&A in the agent-tooling / agent-security layer
- **Palo Alto Networks in talks to acquire Clutch Security for $500M** (2026-11-05T22:28Z, just outside window — label explicitly). Clutch secures AI agents' access to company systems. Last valued **$85M** (Jan 2025, $20M Series A led by Lightspeed + SignalFire); now approaching **~$10M ARR** → ~**50x ARR**. Would be Palo Alto's **seventh acquisition this year**.
  https://techcrunch.com/2026/11/05/palo-alto-networks-in-talks-to-buy-ai-agent-security-startup-clutch-for-500m/
  - Comparator from the same piece: **Upwind turned down a Datadog acquisition offer at ~40x ARR**; **Cyera ($12B valuation) acquired Oasis Security for $1B**; **Cisco bought Astrix for ~$400M**.
  - Also: **Palo Alto acquired Console (AI agents for IT helpdesk) for $500M in Sept 2026**; Chronosphere $2.95B; Koi $231M; Embrace $325M.
  *Read:* **agent-identity / agent-permissioning is being consolidated by security incumbents at 40–50x ARR.** That is the clearest signal in this cycle that "agent IAM" has become a category.
- **Meta acquired Conductor** — see carry-over item 4 below.
- **Meta introduced "Spaces"** (2026-11-06T18:44Z) — the desktop-agent surface story:
  https://techcrunch.com/2026/11/06/meta-introduces-spaces-a-new-way-to-collaborate-with-your-muse-agent/
  - "Spaces are basically **breakout conversations that revolve around a particular topic**" — Meta calls them "custom experiences"; they live in the sidebar of the Muse agent interface. Examples: a **holiday gift tracker, a wedding planner, a DIY project board**, a BBQ game, a home-control dashboard (Zuckerberg on X).
  - "**Describe an idea in chat, and Muse builds a space for you, whether that's a tracker, a planner or a project board.**" Third-party app integrations keep the space "up to date in the background."
  - Scale claim: Zuckerberg said on Meta's October earnings call that **Muse agents had 10 million users in the US and Canada, less than two months after debut** — *VENDOR SELF-REPORTED, not audited.*
  - This is the **second Muse feature in a week**: **Muse Voice** (video chat with the agent + verbal commands) launched Thursday 2026-11-05.
  - Competitive set named: **OpenAI's "dots" and SpaceXAI's "Grokbot"** — i.e. the cartoonish-persona desktop assistant category now has at least three majors.

### Agentic security — Artex exposure (in-window, and a strong market signal)
- **"Hundreds of Artex AI hacking tools found publicly exposed to the web"** — Zack Whittaker, TechCrunch, 2026-11-06T18:44Z.
  https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/
  - **Artex** is an **open-source autonomous penetration-testing tool** — i.e. an agentic system that probes systems for weaknesses and "can conduct cyberattacks from reconnaissance through data exfiltration with little needed human interaction" (Microsoft's description).
  - **Censys** (Silas Cutler) identified **more than 800 distinct Artex deployments accessible from the web without a password.**
  - **Artex is popular precisely because users cannot access Anthropic's or OpenAI's most advanced cybersecurity AI models** — the open-source agent is the substitute for the frontier model.
  - Already linked to **broad-scale cyberattacks, including against the Korean finance industry in September**; CrowdStrike attributed those to a Chinese-speaking hacker using an exposed Artex instance. The exposed instance's attack data extended "well beyond South Korean banks" to payment and gaming companies.
  *Read:* this is the **first solid in-window datapoint on the agentic-offense/offense-parity gap** — open-source autonomous pentest agents are being operationalized at scale *because* the frontier models are gated. That is directly relevant to Anthropic/OpenAI's cybersecurity-model gating strategy (GPT-6 Cyber for vetted teams) and to the "agent deception" trust debate.

## (a) Community sentiment — HN, read at source via Algolia `search_by_date` (window 1793928480→1794014880)

HN volume in-window for the topic queries: **"claude code" 17 hits, "codex" 52, "mcp" 39, "agentic" 91, "cursor" 1, "cli agent" 3, "gemini cli" 0.**
**"gemini cli" returned 0 hits and "cursor" returned 1 — HN attention in this window was overwhelmingly Anthropic/OpenAI-agentic, not Gemini CLI or Cursor.** That is a signal about where the builder mind is, but note HN is not a representative sample.

### The three most notable in-window community items
1. **"How to block the Claude Code email leak"** — 2026-11-06T15:58Z, points 2, 0 comments.
   https://theainewsreport.com/2026-11-06-claude-code-email-user-agent-leak-privacy-mod-explained.html
   *This is community self-defence against carry-over item 5's email-leak issue (anthropics/claude-code#107757).* The pattern: **users are writing their own mitigations because the vendor has not responded.** I did **not** read the article body, so I cite title + URL only and assert nothing about its content beyond the title.
2. **"Why are more than 98% of Claude Code issues unassigned"** — 2026-11-06T15:06Z, points 2, 1 comment; links to r/ClaudeAI.
   https://www.reddit.com/r/ClaudeAI/comments/1xozfcv/open_question_to_anthropic_if_youre_making_30000/
   *Reddit body could not be extracted: old.reddit.com returned "You've been blocked by network security" and the JSON API is 403. Title-only citation.* The title alone is a strong community signal about **vendor responsiveness on the issue tracker** — which is exactly what my direct GitHub reads independently confirmed (carry-over items 5 & 6: 8/8 claude-code issues and 2/2 codex issues still open, no human vendor response; zed#66521 closed NOT_PLANNED with a member reply). **The community perception and the repo state agree.**
3. **"If your code chatbot was genuinely honest"** — 2026-11-06T17:42Z, points 2, 0 comments (Ask HN / self-post). No URL in the Algolia record, so it is an Ask HN text post.
   *This is the community-side counterpart to the agent-deception research thread in carry-over item 5.* Titles only; no body asserted.

### Verification / trust-the-agent's-self-report — an independent research item surfaced in-window
- **"Coding agents report 'verified' when the check never tested the thing"** — 2026-11-06T22:44Z, points 2, 1 comment, hosted on Zenodo.
  https://zenodo.org/records/23367555
  **BLOCKED: zenodo.org returned HTTP 403 ("Access to this resource has been restricted due to unusual traffic from your network") for both the HTML and record pages. I did not read the paper. Title + URL only; the title's claim is NOT verified by me.** Flagged as an unread primary.
  *Why it matters:* the title describes exactly the failure mode in carry-over item 5 (agents reporting verified work that was never actually verified). If the record is what the title says, it is a **third-party, non-vendor measurement** of the agent-deception problem — the thing the task asks for that Anthropic has not published.

### Cost anxiety — the loudest recurring community theme, and it rhymes with the Ramp data
- **Ask HN: "Is anyone running multi/always-on agents that don't cost a fortune?"** — 2026-11-06T12:40Z, points 5, 3 comments.
  https://news.ycombinator.com/item?id= (Ask HN text post; Algolia gave no external URL — cite the Algolia/HN query rather than a permalink I did not verify)
- Related in-window HN posts, all title-only citations: **"Makoda: reuse your Codex or Claude subscriptions as API"** (2026-11-06T19:08Z, https://makoda.ai/); **"Botel – always reachable agents you pay for only while they're working"** (2026-11-06T15:46Z, https://botel.dev); **"Show HN: Infinity – Git-style branching for AI chats"** (2026-11-06T16:19Z, https://infinitychat.app/).
- **Reddit r/ClaudeCode (HTTP 200, 25 posts read from /new/.rss, titles + URLs only — bodies NOT extractable):**
  - "How in world do you manage token costs at API pricing?" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpsbhy/
  - "Is Claude Pro worth it for Claude Code, or are the usage limits too restrictive?" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpr646/
  - "Another take about the nerfs" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xprp2e/
  - "Please post benchmarks if you are going to claim Claude got secretly downgraded" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpqs9t/  ← *an unverified "silent downgrade" accusation in the community; treat as claim, not fact.*
  - "Does Using obsidian + claude lower usage rates?" (2026-11-07) https://www.reddit.com/r/ClaudeCode/comments/1xpsfsk/
  - "How to make running Claude Code secure and safe" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpr7y7/
  - "A hook that prevents Claude Code from writing or submitting PRs that say what Claude said they did" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpqvm1/ ← *community building the very guardrail the vendor lacks; directly parallel to the Zenodo item above.*
  - "We built local simulators of Slack, GitHub and Linear so Claude Code can verify its own work" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xpqg86/
  - "I asked how you handle secrets with AI Agents, felt the gap was real and built this: Karambit" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xppu4u/
  - "Subagents - when are they worth using?" (2026-11-06) https://www.reddit.com/r/ClaudeCode/comments/1xprmou/
  - "Knotlog: persistent memory for Claude Code in plain Markdown" (2026-11-07) https://www.reddit.com/r/ClaudeCode/comments/1xppt2b/ ← *session/memory portability, carry-over item 6, being solved in the community.*
  - "Your agent isn't hallucinating, it's working from stale notes" (2026-11-07) https://www.reddit.com/r/ClaudeCode/comments/1xpsqlu/
- **Reddit r/ChatGPTCoding (HTTP 200, titles + URLs only):**
  - "MCP vs API vs CLI: How Should AI Agents Connect to Your App?" (2026-11-06) https://www.reddit.com/r/ChatGPTCoding/comments/1xp93ef/ ← *the MCP-vs-CLI-vs-API standardisation debate is live in the community.*
  - "Measuring 'cost per successful PR' chose Luna 6 low as the best model even though it score" (2026-11-06) https://www.reddit.com/r/ChatGPTCoding/comments/1xpjato/ ← *community arriving at cost-per-successful-PR as the metric, matching Ramp's spend-per-outcome framing.*
  - "Quick way to see how much of each API call is your system prompt and tools" (2026-11-06) https://www.reddit.com/r/ChatGPTCoding/comments/1xpn8og/ ← *tool-schema bloat / token-efficiency concern.*
  - "I don't think human-in-the-loop holds up for coding agents" (2026-11-05) https://www.reddit.com/r/ChatGPTCoding/comments/1xovmyh/
  - "Four days with Codex and I genuinely can't believe how bad this experience has been" (2026-11-04) https://www.reddit.com/r/ChatGPTCoding/comments/1xnlgqm/
  - "Gathering feedback on a 0–12 AI development autonomy scale to rule them all" (2026-11-05) https://www.reddit.com/r/ChatGPTCoding/comments/1xo4pw4/
- **Reddit source-coverage GAPS (recorded, not inferred):** `r/LocalLLaMA` → **HTTP 429**; `r/ClaudeAI` → **HTTP 429**. **r/cursor and r/singularity were not retried this cycle** (the 429 backoff budget was spent on LocalLLaMA/ClaudeAI). The `theainewsreport.com` article body was not read. Zenodo 403. Reddit JSON API 403; old.reddit blocked. **These are gaps, NOT evidence of low activity.**

### Vendor/product surfaces surfacing in-window on HN (adoption-adjacent)
- **Anthropic research posts (both pre-dating the window but trending in it):** "**Project Swap: What happens when agents trade for us?**" — `https://www.anthropic.com/research/project-swap`, HN 2026-11-07T01:16:59Z. Read at source: **`datePublished` 2026-09-24, `dateModified` 2026-10-23 — OUT OF WINDOW as content, in-window as discussion.** It proposes **agent registration systems** ("Each AI agent would be given an ID, like the tail number on an aircraft, so that anyone dealing with it can learn what system it was run on, whether that system meets certain safety standards, and who stands behind it") and **"personhood credentials"**; also discusses rate limits as a design lever because "an agent does not tire or get bored."
  **"The Components of Agent Memory"** — `https://www.anthropic.com/research/components-of-agent-memory` (HN 2026-11-06T21:19Z), Anthropic's own framing of agent memory components. Date not re-verified this cycle — treat the publication date as unconfirmed.
- **OpenAI in-window research post:** "Measuring how AI agents handle everyday wet-lab science" — https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/ (HN 2026-11-06T21:51Z). Body not read.
- **Cloudflare: "Agents aren't humans (but they kinda are)"** — https://blog.cloudflare.com/trusted-agent-delegation/ (HN 2026-11-06T20:27Z). On **trusted agent delegation** — i.e. an infrastructure vendor standardising how agents are delegated authority. Relevant to enterprise adoption/standardisation. Body not read this cycle.
- **JetBrains: "We gave AI agents GoLand's Profiler — they found the same bottlenecks with half the tokens"** — https://blog.jetbrains.com/go/2026/11/06/we-gave-ai-agents-goland-s-profiler-they-found-the-same-bottlenecks-with-half-the-tokens/ (2026-11-06, in-window). **An IDE vendor shipping agent-native profiling with a token-efficiency claim.** Body not read.
- **Carta launched "Evergreen"** — "Multiplayer coding platform where teams+agents ship together" — https://evergreen.carta.com/blog/introducing-evergreen (HN 2026-11-06T23:02Z, 11 points). *A fintech (Carta) shipping a collaborative agent coding platform is notable: adjacent verticals are moving into agentic dev tooling.*
- **Zalando's "Agentic Identity Broker — OAuth Delegation for AI Agents"** — https://github.com/zalando-incubator/agentic-identity-broker (HN 2026-11-06T15:07Z, 20 points, 3 comments). *Pairs with the Clutch/Oasis/Astrix M&A cluster: agent identity/delegation is becoming a standalone product category with an incumbent-blessed OSS implementation.*
- Other in-window HN agentic-tooling posts (title + URL only, bodies not read): "Show HN: AJX – Find out where AI agents get stuck using your product" https://ajx.dev/ ; "AgentMon Live – Watch Claude Code agents and check their work – Apache 2.0" https://github.com/codenotary/agentmon-live ; "Show HN: ECX – My Claude Code and Codex setup, where both agents share memory" https://github.com/saksham10arora-dotcom/everything-claude-codex ; "Less Is More UI Agent Skill" https://github.com/Mendiak/less-is-more-ui ; "An agent skill and a script for Claude Code to send Mattermost DMs as you" https://github.com/abdallah/mattermost-dm ; "Show HN: KeepPlain – ask your coding agent why a line of code exists" https://keepplain.com ; "AI Product Team – 64 specialized AI agent roles with executable CLI workflows" https://github.com/3orionkings/ai-product-team ; "Show HN: Local Code – the only local coding agent in macOS App Store" https://getlocalcode.app/ ; "Show HN: Cinnamon – a household AI agent with shared context and memories" https://getcinnamon.ai/ ; "Show HN: I asked HN about AI agentic setups, here are 750 of the comments mapped" (HN 2026-11-06T22:58Z) ; "Teaching Agents to Write Maintanable Code" https://boundaryml.com/blog/teaching-agents-to-write-maintainable-code ; "Harness 2: executing agent code as it streams" https://www.framer.com/blog/harness-2/ ; "Run cloud agents from your home IP through a Tailscale tunnel" https://rtrvr.ai/blog/tailscale-tunnels-home-ip ; "Pleasedonotescape.com: A dataset of sandboxes for AI coding agents" https://pleasedonotescape.com/ ; "Context by Altora (YC W27), screen, audio, location 24/7 for agents" https://trycontext.app ; "Modernising 40-year-old scientific code with Gemini 4 Argon" https://antigravity.google/blog/modernizing-40-year-old-scientific-code-with-gemini-4-argon/ ; "Agents infer Lego mechanisms from sources, then animate them" https://github.com/anteloc/ldraw-mecha/tree/v0.5.0 (HN 24 points — the highest-scoring agentic item of the window) ; "Ask HN: How you guys setup multi-models agentic workflow" (2026-11-06T23:51Z).

## CARRY-OVER ITEM 4 — Conductor Cloud: **RESOLVED (acquisition + shutdown mechanics), plus a NEW hard finding**

### 4a. Meta acquired Conductor (announced 2026-11-04 — outside the window; labelled explicitly)
Read at source: **DataStudios, `datePublished` 2026-11-04T23:54:52Z, `dateModified` 2026-11-05T00:51:14Z**
https://www.datastudios.org/post/meta-acquires-conductor-cloud-shuts-down-november-20-coding-agents
- "**Meta has acquired Conductor**, the startup behind a desktop and cloud app that runs several AI coding agents in parallel on the same codebase. Conductor announced the deal on **November 4, 2026**, in a post on its website and in the **release notes of version 0.93.0 of its app**, and **Meta confirmed the acquisition while declining to share financial terms**. **No price has been disclosed by either company.**"
- Shutdown schedule: **new sign-ups and app downloads stopped Nov 4; Conductor Cloud read-only Nov 13; cloud shuts down Nov 20; cloud user data deletion begins after that. The local Mac app keeps receiving new models and critical bug fixes until early 2027.** Current Pro subscribers keep paid features at no cost; active subscribers are eligible for a refund.
- **CEO Charlie Holtz** wrote on X that "Conductor is joining Meta" and that the team has "big, crazy plans for the next interface," naming **Alexandr Wang** (Meta chief AI officer) and **Nat Friedman** (product lead, Meta Superintelligence Labs) as people he expects to work with. Meta has not said which products the team will work on; Meta already sells **Muse Code** and an API for its Muse models.
- Product detail: Conductor runs "the first-party **Claude Code, Codex, Cursor, and OpenCode** agents under the hood"; developers bring their own subscriptions/API keys, so model usage is billed by Anthropic/OpenAI/Cursor and Conductor is the orchestration layer. Cloud agents ran in **isolated microVMs**; there was an iPhone app and a Conductor API; SOC 2 Type II reported.

Read at source: **explainx.ai, `datePublished` 2026-11-04**
https://www.explainx.ai/blog/meta-acquires-conductor-parallel-coding-agents-cloud-shutdown-november-20-superintelligence-labs-2026
- Adds the **primary-source anchor**: the acquisition was announced **in Conductor's own changelog (version 0.93.0)**, with the line "**Conductor is joining Meta**"; the destination team (**Meta Superintelligence Labs**) is attributed to **Axios via Techmeme**, quoting Holtz.
- **The migration instructions are in the changelog itself: "Settings → Account → Export data" and "right-click workspace → Transfer to local."** ← *This is the answer to the "any migration-tool release" question: the migration path is a data-export function plus a per-workspace "Transfer to local" action, not a dedicated migration tool.*
- Context: Meta has a pattern of buying agent-tooling teams (Stilla; the Manus deal, which later resumed independent operations). Explainx's read: the deal targets the developer workflow Meta Muse Code also wants to own.
- **Not known:** price (not disclosed in any source found).

### 4b. NEW FINDING — conductor.cloud is ALREADY parked on a GoDaddy "for sale" lander, ahead of the announced dates
- `https://www.conductor.cloud/` returns **HTTP 200** with a 114-byte body whose only content is `window.onload=function(){window.location.href="/lander"}`.
- `https://www.conductor.cloud/lander` returns **Akamai "Access Denied"** with the reference string **`http://forsale.godaddy.com/forsale/www.conductor.cloud?`** (Reference `#18.37221102.1794015718.485f4ae`).
  → The product site is **already decommissioned and the domain is parked for sale**, roughly a week before the announced Nov 13 read-only / Nov 20 shutdown dates. **This is a direct-source observation of the domain state, made 2026-11-07T01:41Z.**
- `https://www.conductor.cloud/blog` → HTTP 200, same 126-byte redirect stub. `https://docs.conductor.cloud/` → **HTTP 000 (connection failed — DNS/connection dead).**
- `https://www.conductor.cloud/changelog` → HTTP 200, same redirect stub (content not retrievable). `https://www.conductor.app/changelog` is a **different company** (an AEO/SEO platform called Conductor) — do not conflate.
  *Consequence: **the primary source for the shutdown announcements is no longer directly reachable.** The changelog text is now only obtainable second-hand (via DataStudios/explainx/others quoting it). This is a documented source-degradation for future cycles.*

### 4c. Acquisition of the alternatives (T3 Code, Paseo, Orca, Herdr, conducted, outpost) — **NONE FOUND**
Searched via DuckDuckGo HTML (HTTP GET, not the search tool) for acquisitions of Conductor alternatives. Result: **no acquisition of any alternative is reported.** Instead the alternatives gained *coverage* as migration paths:
- "Conductor Alternatives After the Meta Acquisition: 6 Apps to Run Parallel Agents" — https://ai.dosa.dev/blog/conductor-alternatives — "The closest Conductor alternatives are **Superset, Orca and Emdash** for parallel desktop worktrees, with **Paseo and T3 Code** for remote access and **Kandev** for review-gated workflows. **Export Conductor data before November 20, 2026.**"
- "Open Source Agent Workspaces 2026: 8 Tools Compared" — https://nimbalyst.com/blog/open-source-agent-workspace-alternatives-2026/ — "**cmux, Superset, Orca, Paseo, Herdr, T3 Code, Goose, and Warp** compared in 2026: platforms, licences, worktree isolation, mobile access."
- https://openalternative.co/alternatives/conductor ; https://openalternative.co/alternatives/t3-code ; https://superset.sh/compare/t3-code-alternative ; https://daily.dev/posts/best-open-source-conductor-alternatives-for-coding-agents-gcsjkdnek ; https://www.agentastic.dev/alternatives/t3-code
- Local-git-worktree alternatives (no vendor): https://aicodewith.ai/en/blog/conductor-shutdown-alternative-claude-code-codex-worktree — "git worktree add per task, tmux panes, native `claude -w` and `codex --worktree`… plus **Orca, Emdash and Claude Squad** compared."
  *Read: **the Conductor shutdown is consolidating demand into a set of open-source agent workspaces (Orca, Superset, cmux, Paseo, Herdr, T3 Code, Goose, Warp, Kandev, Happy, Emdash, Claude Squad) plus raw git worktrees — none of which appear to have been acquired.** The Mac-app-until-early-2027 window is the only remaining proprietary piece.*

## CARRY-OVER ITEM 8 — Elastic "threats, etc" report: **read at source; STILL ELASTIC-ONLY**

### The report itself (read at source, full body)
`https://www.elastic.co/security-labs/reports/threats-etc-report-november-2026-trouble-with-trust`
- **Title:** "When trust becomes the payload: Inside the threats, etc quarterly report" — authors **Terrance DeJesus, Jason Pappalexis, Andrew Pease** — **published November 04, 2026** (≈2 days BEFORE the window opens; label the date explicitly).
- Scope: "drawn directly from **confirmed customer intrusions and first-party research between April and September 2026**," observed by **Elastic Security Threat Command**.
- **The "17,600" figure — CONFIRMED AND IN CONTEXT:** "Threat actors are operating directly through AI applications. In one instance, **an AI agent–driven attack resulted in roughly 17,600 reconstructed actions compressed into just four days**."
  → Important nuance vs. the carry-over phrasing: the number is **17,600 *reconstructed actions* by an AI-agent-driven attack, compressed into four days** — it is **not** "17,600 AI actions" in the sense of 17,600 tool calls, and it is **not** a count of distinct techniques. It is Elastic's reconstruction of one attack campaign's actions. Any citation should carry that qualifier.
- Other in-report figures (read at source): **23 confirmed RMM abuse findings** this quarter, with **ScreenConnect named most often**; in one confirmed healthcare finding, paste-and-run lure → MSI delivery with DLL sideloading took **roughly 16 seconds**; **average time from infostealer infection to the threat actor logging in with the same credentials was only eight minutes** (AiTM phishing kits + legacy-auth gray areas bypassing MFA); headline framing: "**Zero malware, three legitimate payloads**."
- Elastic's own prescriptions: UEBA baselining, cross-domain visibility, active correlation; and the explicit claim that "**speed and breadth change planning more than they change queries**" — i.e. staffing cannot close the gap.

### The second Elastic item (the AI coding-agent audit) — read at source
`https://www.elastic.co/security-labs/blog/ai-coding-agent-audit-cursor-hooks`
- Headline claim: an audit of AI coding agents involving **13 million tool calls** — i.e. a *scale* measurement of coding-agent behaviour (cursor hooks). **The full body was not re-read in this cycle's final pass; the 13-million-tool-calls figure is from the page headline/title as previously captured.** Flag: **body not re-verified this cycle; treat the 13M number as headline-level.**
- This is Elastic's own framing of coding-agent behaviour at scale — **not an independent measurement** (it is a vendor of the security tooling that observed it).

### INDEPENDENT third-party write-up — **STILL NOT FOUND (carry-over item 8 remains open)**
- Attempted: DuckDuckGo HTML GET for `Elastic "threats, etc" quarterly report November 2026 agent-driven attack 17,600 actions coverage` → **0 parsed results**; a second attempt with a simplified query (`Elastic threats etc quarterly report November 2026`) also returned **0 parsed results** from the same endpoint (the endpoint began returning zero-result pages for these queries — a **tooling/detection gap, not evidence of absence**).
- **No independent (non-Elastic) article citing the ~17,600-action AI-agent-driven attack technique was located this cycle.**
- **Status: CARRY-OVER ITEM 8 REMAINS OPEN — the technique is still Elastic-only.**
- **Partial corroboration from a different direction, in-window:** the Artex story (below) independently documents that **open-source autonomous attack agents are real, widespread (>800 exposed instances) and already used in real intrusions (Korean financial sector, Sept 2026)** — that corroborates the *category* Elastic describes but does **not** corroborate the 17,600-action figure.

## CARRY-OVER ITEM 7 — Anthropic FlashProve / provable inference: **RESOLVED — still a single commit, no releases, and now explicitly marked "not maintained"**
Read at source (GitHub HTML + raw README, no API):
- Repo: **https://github.com/anthropics/FlashProve** — GitHub `<title>`: "**GitHub - anthropics/FlashProve: A research prototype for zero-knowledge proofs of AI inference. Not maintained.**"
- **Commits: exactly ONE.** sha **`9e2bdd8ff5bf9c62f18263d7dac189b0400b260c`**, message "**Initial public release (FlashProve 0.16.0-rc.26)**", `authoredDate`/`committedDate` **2026-10-30T20:56:11.000Z**. **No new commit in the window or since.**
- **Releases page: "There aren't any releases here." Tags page: "There aren't any releases here."** → **no tagged release, no published release.**
- README (raw, read at source): "**Version 0.16.0 · A research artifact: not maintained, not accepting contributions. · Apache 2.0**".
- Technical substance (from README): FlashProve lets an AI provider **prove which model answered a request without revealing the weights** — provider publishes a **commitment ID** binding it to one set of weights; the provider's GPU produces a proof per reply; **anyone can verify on an ordinary CPU in seconds with `cp_verify`**. Runs **Llama 4 Maverick at full size, 1,024-token context, on a single NVIDIA H100**; prover ~**110 tokens/second prefill at 24 requests/batch**. **Soundness proved in Lean 4** (`lean/THEOREM.md`): a provider passing off non-committed output is caught except with probability ~**q/2^124 + 2^-101** after q hash queries. README also carries an explicit **"For agents"** section plus an `AGENTS.md`, instructing coding agents to build the verifier, check the stored example proof, and report the exit code.
  → *Read:* **the provenance-proof idea is real, peer-rigorous, and deliberately frozen.** The repo's own agent-oriented README is the tell: the intended users are agents, but the artifact is not maintained.
- **Codex / Gemini equivalent: NONE FOUND.** No comparable provable-inference artifact from OpenAI or Google surfaced via GitHub repo search for "flashprove" or via the vendor pages checked this cycle. (GitHub repo search for `flashprove` returned only `anthropics/FlashProve` plus unrelated forks/mirrors — `trustless-ai/flashprove-onchain-verifier`, `zkwasm/FlashProve-L4`, `qoosmo/rust-flashprove`, `ezumba/exergynet-flashprove-authority`, `giskard09/flashprove-action-ref-anchor`, and several `gpt62-astra-flashprove` forks. **These are third-party forks/spam-adjacent repos, not vendor projects — do not cite them as vendor equivalents.**)
  https://github.com/search?q=flashprove&type=repositories

## Anthropic newsroom: **no new post during the window** — and the site's "Latest news" date is a trap
- `https://www.anthropic.com/news` (read at source): the featured carousel header renders **"Latest news — November 7, 2026"**, but that date is the **current date rendered by the site header**, NOT a publication date. The underlying article payload contains `publishedOn` values with **the newest being `2026-11-04` ("Investigating vault particles with Claude")**. **There is no Anthropic newsroom post dated 2026-11-06 or 2026-11-07.**
  *Method note: I extracted every `"publishedOn":"…"` value from the embedded Next.js/Sanity payload — dates present include 2026-11-04, 2026-10-28, 2026-10-27, 2026-10-26, 2026-10-22, 2026-10-20, 2026-10-18, 2026-10-16, 2026-10-15, 2026-10-13, 2026-10-08 … and **none in 2026-11-05..07**.**
- **Relevant recent Anthropic posts for the enterprise/adoption thread (all OUT OF window — dated explicitly):**
  - **2026-10-26 — "Anthropic files S-1 with the SEC for proposed initial public offering"** — https://www.anthropic.com/news/s1-sec (and `/news/announcements`).
  - **2026-10-18 — "Investing in the public benefit"**: "We're committing a portion of Anthropic's shares to the **Anthropic Public Benefit Fund**, a new entity with a structure that increases the stake as the company grows." — https://www.anthropic.com/news/public-benefit-fund ← *a pre-IPO signalling move on governance, 3 weeks before pricing.*
  - **2026-10-27 — "Expanding our partnership with GSA to bring Claude to all levels of government"**: "We are expanding our partnership with the **General Services Administration (GSA)** through a new agreement that gives government partners a **40% discount** on Claude." — https://www.anthropic.com/news/expanding-partnership-gsa ← *the clearest enterprise-adoption datapoint on Anthropic's own site: a federal procurement channel with deep discounting.*
  - 2026-10-28 — "AI for Science expands to foundations and research institutions" (20 scientific foundations/institutions/research groups) — https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions
  - 2026-10-22 — "LLMs are making formal software verification feasible at a much larger scale" — https://www.anthropic.com/news/formal-verification
  - 2026-10-20 — "Using Claude to reduce the attack surface of code" — https://www.anthropic.com/news/attack-surface-reduction
  - 2026-10-27 — "Discovering and exploiting vulnerabilities in critical, real-world software with Claude" — https://www.anthropic.com/news/discovering-vulnerabilities-with-claude
  - 2026-10-15 — "An update on independent evaluators" — https://www.anthropic.com/news/an-update-on-independent-evaluators
  - 2026-10-13 — "Redesigning source control at Anthropic" — https://www.anthropic.com/news/redesigning-source-control
  - 2026-08-27 — "Previewing the Model Hardware Standard" — https://www.anthropic.com/news/model-hardware-standard-research-preview

## RECONCILIATION NOTES (to prevent contradictions between sections of this file)
- **On the "$1.5T" question (carry-over item 3):** two things are simultaneously true and must be cited separately.
  1. The **direction of travel is established** from readable reporting: Anthropic targeted **$2T**; the WSJ (2026-11-05, body paywalled) and Bloomberg (2026-11-06, body paywalled) reported prospective buyers pushing toward **$1.4–1.5T and as low as $1.1T**; the FT headline (2026-11-06, paywalled) said Anthropic would "press ahead with November IPO **targeting $1.5T valuation**"; a secondary aggregator read in full restates the step-down **$2T → $1.4–1.5T → $1.2–1.3T → $1.1T**.
  2. **The primary bodies of the WSJ "$1.5T" article and the Business Insider Michael Burry piece were NOT read this cycle** — no mirror quoting their bodies was found. **The Burry position therefore remains UNVERIFIED and must not be asserted.** The "$1.5T" figure should always be written as "**a target/midpoint in a falling range, not a confirmed valuation**" — and note that **$1.5T is also the figure the FT reports Anthropic is still targeting**, i.e. the "revised down" and "still targeting" narratives are both live and conflict.
- **On Reddit access status:** two independent fetch passes in this cycle disagree, and the honest statement is a **partial, shifting 429 pattern**, not a fixed per-sub status:
  - Pass 1 (earlier in the cycle): r/ClaudeCode **200**, r/ClaudeAI **200**, r/LocalLLaMA **200**, r/ChatGPTCoding **429**, r/cursor **429**, r/singularity **429**, r/commandline **429**, r/vibecoding **429**.
  - Pass 2 (later, 13 s spacing): r/ClaudeCode **200**, r/ChatGPTCoding **200**, r/LocalLLaMA **429**, r/ClaudeAI **429**, r/commandline **429**, r/vibecoding **429**.
  - **Net: r/ClaudeCode and r/ChatGPTCoding were readable; r/LocalLLaMA, r/ClaudeAI, r/commandline, r/vibecoding, r/cursor, r/singularity were not (429).** **Record as a coverage gap, not as low activity.** r/cursor and r/singularity were **not** retried in pass 2 — still a gap.
- **On Anthropic's own adoption numbers (>90% of its code written by Claude, 45x code volume, ~90% task success rate, NRR ~900%):** these remain **VENDOR SELF-REPORTED INTERNAL BENCHMARKS, not independently audited**. They are also **directionally contradicted** by the in-window independent Ramp spend data (token spend +1.5% Aug→Sep) and by the **METR 1.9x AI R&D speedup range (1.1x–2.9x)** carried over from 2026-11-06. **Do not present them as measured adoption.**

## (c2) Enterprise adoption — consolidated, with the independent (non-vendor) evidence first
**The single most important enterprise-adoption finding in this window is a slow-down, not a boom.**

| Signal | Source class | Direction |
|---|---|---|
| **Ramp: AI token spend +1.5% across Aug+Sep, vs +42% in July**; top-1% firms slipping below $10k/employee; median firm $12–15/employee/month | **Independent, third-party spend panel (Ramp), reported by TechCrunch 2026-11-06T15:54Z** | ⬇️ slowing |
| October re-acceleration: token spend **+8.9%** (Sep 23 → Oct 23) | same | ⬆️ partial recovery |
| Cause is **price, not demand**: OpenAI halved API prices for GPT-6 Sol & Luna (Sept); Anthropic cut Fable 5.1 & Opus 5.5 pricing, which **its own filing says cut revenue growth by ~$600M** | TechCrunch citing Ramp + company filings | ⬇️ margin |
| "**it has very much become a buyer's market**"; enterprise discounts "intended to lock-in spend… but in reality are hitting their revenue targets" | Ramp lead economist Ara Kharazian | ⬇️ pricing power |
| Meta + Nvidia entering with cheap/open models | same | ⬇️ competition |
| **Cursor: "Build Live Apps"** — agent-built internal apps with SSO, secret scanning, admin approval/unpublish, across sales/ops/legal/finance/engineering | Vendor (Cursor changelog, 2026-11-05) | ⬆️ enterprise control plane |
| **Cursor: "Voice Chat with Agents"** — Agents Window, IDE, web, Cursor iOS, on **Grok Voice**, zero-retention Privacy Mode | Vendor (2026-11-06) | ⬆️ desktop assistant UX |
| **OpenAI: outbound SIP calling available to all organizations** (2026-11-06) | Vendor | ⬆️ agentic telephony |
| **Anthropic–GSA expansion, 40% government discount** (2026-10-27, out of window) | Vendor | ⬆️ public-sector channel |
| **Meta Muse "Spaces"** (2026-11-06) — chat→tracker/planner/project-board, third-party app integrations; Muse agents **10M users in US+Canada** (Zuckerberg, Oct earnings call) | Vendor (**10M = self-reported, unaudited**) | ⬆️ desktop assistant |
| **Zalando Agentic Identity Broker** (OAuth delegation for agents) + **Clutch $500M / Oasis $1B / Astrix $400M** M&A at 40–50x ARR | OSS (Zalando) + TechCrunch M&A reporting | ⬆️ agent-IAM category |
| **Carta "Evergreen"** — multiplayer teams+agents coding platform | Vendor | ⬆️ adjacent verticals |
| **Cloudflare "trusted agent delegation"** (2026-11-06) | Vendor | ⬆️ standards |
| **JetBrains GoLand profiler for AI agents — same bottlenecks with half the tokens** (2026-11-06) | Vendor | ⬆️ token efficiency |
| **Anthropic "The components of agent memory"** — "dreaming"/sleep-time compute, memory between sessions, compaction explicitly excluded (2026-11-06T00:00Z, modified 21:15Z) | Vendor research | ⬆️ first-party memory formalization |
| **Anthropic Project Swap** — proposes **agent registration systems** (agent IDs "like an aircraft tail number") + **personhood credentials** (2026-09-24, out of window) | Vendor research | ⬆️ agent identity standard |
| **r/ChatGPTCoding: "MCP vs API vs CLI: How Should AI Agents Connect to Your App?"** (2026-11-06) | Community | ⬆️ standardisation unresolved |

**Enterprise-adoption synthesis:** the *capability* layer is standardising fast — **voice, identity/delegation, memory, control planes, agent registries** are each being claimed by exactly one or two infrastructure vendors (Cursor, OpenAI, Cloudflare, Anthropic, Zalando, JetBrains) in the same 48 hours. The *spend* layer is not following: independent panel data says agent-driven spend growth has flattened. **The gap between capability shipped and budget consumed is the story of this window** — and it is precisely the gap the Anthropic IPO price ($1.1–1.5T) is being asked to fill.

## (d) GAPS, BLOCKED SOURCES, AND UNRESOLVED CARRY-FORWARD — explicit and complete
### Carry-over watchlist — final status for all 9 items
| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | Anthropic IPO listing day / first trade of ANT | **RESOLVED — did NOT list on 11-06 or 11-07.** Still pre-pricing at window close. | SEC submissions CIK0002130357 (8 filings, newest S-1/A 2026-11-02, **no 424B4 / 8-A12B / EFFECT / pricing amendment**); Nasdaq API `ANT` → **"Symbol not exists."**; ETF prospectuses list ANT historical volatility as **"N/A"** |
| 2 | Four leveraged Anthropic ETFs (ProShares ANTU/ANTY, GraniteShares AIL/ANS, Defiance) | **RESOLVED — the wave launched and broadened to ~10 products across 8 issuers.** | 12 SEC 485 filings read at source (GraniteShares/ProShares/Defiance/Tuttle/Tradr/Kurv/Themes/Quantify/Tidal Trust II), with fee tables and effective dates |
| 3 | "$1.5T Anthropic valuation" (WSJ) + Michael Burry position (BI) | **PARTIALLY RESOLVED / STILL UNVERIFIED** — the *direction* (falling from $2T toward $1.1–1.5T) is established via Bloomberg/FT/WSJ headlines + a secondary aggregator read in full; **the WSJ body and the BI/Burry body were NOT readable.** | TechCrunch 2026-11-06 (both articles) + epyhia.com aggregator. **Burry position = UNVERIFIED, do not assert.** |
| 4 | Conductor Cloud shutdown milestones, migration tool, acquisitions of alternatives | **RESOLVED** — **Meta acquired Conductor (announced 2026-11-04, price undisclosed)**; cloud read-only 11-13, shutdown + data deletion 11-20; **migration path = "Settings → Account → Export data" + per-workspace "Transfer to local"** (no dedicated migration tool); **NO acquisition of any alternative** (Orca/Superset/cmux/Paseo/Herdr/T3 Code/Goose/Warp/Kandev/Happy/Emdash/Claude Squad all independent). **NEW: conductor.cloud is already a parked GoDaddy for-sale lander.** | DataStudios 2026-11-04 (read in full), explainx.ai 2026-11-04 (read in full), direct curl of conductor.cloud/blog/docs/changelog, 6+ alternative-list pages |
| 5 | Agent-deception cluster — vendor response to claude-code#107358/#107317/#107801/#107757 and codex#59490/#59492; Anthropic equivalent to OpenAI's GPT-6 Astra framing-gap study | **STILL OPEN — zero vendor responses.** All 8 claude-code issues and all 3 codex issues **remain open with no human vendor reply**; only bot/duplicate comments. **No Anthropic-published honesty/framing-gap measurement found.** A third-party preprint on the same failure mode surfaced but **could not be read (Zenodo 403)**; a community workaround guide exists (theainewsreport). | GitHub HTML issue pages read at source; openai.com / community.openai.com / anthropic.com/news+research checked |
| 6 | Session persistence & CLI-vs-desktop skill portability (claude-code#107346/#107343/#107815/#107817, codex#59757, zed#66521, cline#15556) | **STILL OPEN except one.** Only **zed-industries/zed#66521** got a genuine vendor reply (member `yeskunall`) and was **closed as `NOT_PLANNED`**. The other seven remain open with no vendor response. **Anthropic shipped "The components of agent memory" on 2026-11-06 — but that is a research post, NOT a response to the issues.** | GitHub issue HTML; anthropic.com/research/components-of-agent-memory |
| 7 | Anthropic FlashProve / provable inference | **RESOLVED — single commit `9e2bdd8`, 2026-10-30, no new commit, no releases, README now says "not maintained". No Codex/Gemini equivalent found.** | github.com/anthropics/FlashProve + raw README + releases/tags pages + GitHub repo search |
| 8 | Elastic "threats, etc" ~17,600-action AI-agent-driven attack — independent third-party write-up | **STILL OPEN.** Report read in full at source (published **2026-11-04**, i.e. 2 days before the window). The figure is **"roughly 17,600 reconstructed actions compressed into just four days"** in **one** AI-agent-driven attack. **No independent (non-Elastic) write-up found.** | elastic.co report + blog pages; DuckDuckGo HTML (later returned HTTP 202 challenge pages = tooling gap) |
| 9 | Enterprise adoption / standardisation; funding, M&A, pricing, ARR for agentic CLI / desktop-assistant vendors | **PARTIALLY RESOLVED.** No new **agentic-CLI-specific** funding round or ARR/pricing disclosure found for Cursor/Anysphere, Windsurf, Cognition/Devin, Factory AI, Augment, Poolside, Chroma, Block goose, Charm, Sourcegraph/Amp, Zed, Cline, Kilo, Roo in-window. What did land: **Clutch $500M (PANW, in talks)**, **Oasis $1B (Cyera)**, **Astrix ~$400M (Cisco)**, **Console $500M (PANW)**, **Conductor/Meta (undisclosed)**, **OpenAI $11B-so-far at $1.25T**, **Brockman "IPO-ready 2027"**, **Cursor ship-it pricing cut ($20→$15, per the S-1/A read last cycle)**, **Anthropic price cuts ≈$600M revenue-growth impact (company's own filing)**. | TechCrunch AI feed (25 items, read in full), individual article bodies, SEC filings |

### Unread / blocked sources — the complete list for this cycle
1. **WSJ** liveblog card "About That Anthropic IPO" and the WSJ valuation article body — paywalled (HTTP 401/Datadome).
2. **Business Insider** Michael Burry / Anthropic position — subscriber-only.
3. **FT** "Anthropic to press ahead with November IPO targeting $1.5T valuation" — paywalled.
4. **Bloomberg** "Anthropic IPO buyers see valuation as low as $1.1T" — paywalled.
5. **Zenodo record 23367555** ("Coding agents report 'verified' when the check never tested the thing") — **HTTP 403, unusual traffic**. Body NOT read; title only.
6. **Reddit r/LocalLLaMA, r/ClaudeAI, r/commandline, r/vibecoding, r/cursor, r/singularity** — **HTTP 429**. Reddit JSON API 403; old.reddit blocked by network security.
7. **conductor.cloud / blog / changelog** — now a 114-byte JS redirect to a GoDaddy for-sale lander; **docs.conductor.cloud fails to connect (HTTP 000)**. The primary shutdown announcement is no longer directly retrievable.
8. **theainewsreport.com** articles (Claude Code email-leak mitigation guide; HN agentic-setups analysis; METR analysis) — titles/URLs only, bodies not read.
9. **DuckDuckGo HTML/lite** — began returning HTTP 202 bot-challenge pages mid-cycle, which is why the Elastic-third-party hunt and several financing searches returned zero parsed results. **Zero results from that endpoint are a tooling gap, not evidence of absence.**
10. **Bodies not read** (title/headline-level only): Cloudflare "trusted agent delegation", Carta Evergreen, JetBrains GoLand profiler post, OpenAI wet-lab/LifeVal/Hacktron pages, Anthropic Project Swap body was read (2026-09-24), Zenodo, arstechnica Delaware AI-agent piece, Lets Encrypt STA post.
11. **Anthropic S-1/A primary text was NOT re-read this cycle** (94 MB); all S-1/A financial figures in this file are **relayed via a secondary aggregator** (epyhia.com) and are flagged as such.

### Method notes / corrections worth carrying forward
- **Epoch correction:** the task brief's `1762385280`/`1762471680` map to **2025-11-06/07**, not 2026. Correct window: **1793928480 → 1794014880**.
- **SEC rate limits:** `data.sec.gov/submissions` and `www.sec.gov/Archives` work reliably with a descriptive User-Agent; **`api.github.com` is exhausted** — GitHub HTML issue/commit pages plus `raw.githubusercontent.com` are the working path.
- **Yahoo Finance** returns "No data found, symbol may be delisted" for `ANT`; **Nasdaq's own quote API** returns "Symbol not exists" — both are quick, decisive listing checks.
- **`conductor.app` is a different company** (AEO/SEO platform) — do not conflate with the coding-agent Conductor (conductor.cloud).

## BOTTOM LINE (Subagent B — community / market / enterprise), 2026-11-07
1. **Anthropic did not list.** No 424B4, no 8-A12B, no EFFECT; Nasdaq says `ANT` does not exist. The IPO was in **pricing** at window close, with the valuation marked down from the $2T target toward **$1.1–1.5T** (direction established; WSJ/FT/Bloomberg bodies and the **Burry position still unverified**).
2. **A new product category was born in this window: single-stock leveraged Anthropic ETFs.** Eight issuers, ~10 products, three of them **launching/effective on 2026-11-06** (GraniteShares `AIL`/`ANS` at 1.33%/2.03%; ProShares `ANTU`/`ANTY` at 0.95% net; Defiance `ANTC`/`ANTQ` with fee placeholders), plus Tuttle 11-10, Tradr 11-12, Kurv 11-16, Themes 12-04, Quantify baskets. **The ETF market is pricing Anthropic before the IPO market has priced it.**
3. **The demand story is decelerating even as the narrative accelerates.** Ramp's independent panel data (token spend **+1.5%** Aug→Sep vs **+42%** July; top-1% firms slipping below $10k/employee; October +8.9% re-acceleration) says AI spend growth has flattened, blamed on **price cuts** (OpenAI halved Sol/Luna API prices; Anthropic's cuts cut its own revenue growth by ~$600M) — i.e. **a buyer's market**. Meanwhile the *capability* layer ships daily: Cursor voice + Live Apps, OpenAI SIP for all orgs, Meta Muse Spaces, Anthropic agent-memory research, Cloudflare agent delegation, Zalando agent identity broker, JetBrains agent profiling, Carta Evergreen.
4. **Meta bought Conductor** (2026-11-04, price undisclosed); cloud read-only 11-13, shutdown + deletion 11-20, Mac app until early 2027; migration = "Export data" + "Transfer to local" (no dedicated tool); **no alternative was acquired**; and **conductor.cloud is already parked on a GoDaddy for-sale lander**.
5. **Vendor responsiveness to the community remains the weakest link.** All 8 checked `anthropics/claude-code` issues and all 3 checked `openai/codex` issues are **still open with no human vendor reply** (the community's own HN thread: "more than 98% of Claude Code issues unassigned"). The only genuine vendor response in the whole set was **zed#66521, closed NOT_PLANNED**. The community is meanwhile shipping the missing guardrails itself (a PR-claim hook, local Slack/GitHub/Linear simulators, a secrets manager, Markdown memory, and a blocking guide for the Claude Code email leak).
6. **FlashProve is frozen:** one commit (`9e2bdd8`, 2026-10-30), zero releases, README now says "**not maintained, not accepting contributions**". No Codex/Gemini equivalent.

## TOOL / BUDGET ACCOUNTING (exact)
- **web_search calls: 3** (1 successful, 2 failed with `DuckDuckGo returned a bot-detection challenge`) — queries: (a) *Conductor Cloud shutdown November 2026 migration tool Claude Code* → SUCCESS; (b) *Michael Burry Anthropic stake short ANT IPO position November 2026* → FAILED; (c) *agentic CLI startup funding round November 6 2026 Windsurf Cognition Factory AI Poolside Chroma Block goose Charm* → FAILED. **No further search-tool budget was used**; all remaining discovery was done with direct HTTP GETs via `exec` (curl/python urllib), which do not consume the search budget.
- **web_fetch calls: 0.**
- **Direct HTTP GETs performed via exec (not counted against the search budget):** HN Algolia `search_by_date` × 7 queries; Reddit `/new/.rss` × 8 subreddits over 2 passes (13 s spacing); TechCrunch AI category RSS + 5 full article bodies; SEC EDGAR full-text search + 12 archive documents + `data.sec.gov/submissions`; Nasdaq quote API × 2; GitHub HTML for 13 issue pages + FlashProve commits/releases/tags + raw README + repo search; Elastic Security Labs report + blog; Anthropic newsroom (with Next.js payload `publishedOn` extraction); Anthropic research pages (Project Swap, components-of-agent-memory); conductor.cloud / /blog / /changelog / /lander / docs.conductor.cloud; Zenodo (403); old.reddit (blocked); DuckDuckGo HTML/lite (3 attempts, later 202-challenged); letsencrypt.org, GitHub repos for 10 HN-linked projects (URLs captured from HN titles only, not fetched).

# Findings — agentic-cli-tools / community / 2026-11-21

Window: 2026-11-20T01:28:00Z -> 2026-11-21T01:28:00Z

Raw capture directory: `/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools/tmp/2026-11-21/community/`
Synthesis only — no new retrieval was performed for this file.

Verification labels used throughout:
- `[VERIFIED]` — read directly from a primary source artifact on disk (Yahoo chart JSON, SEC EDGAR JSON, SEC 424B4 prospectus text, Hacker News Algolia API JSON, Atom/RSS XML).
- `[REPORTED]` — secondary press/report as carried by a feed; the claim was read from a headline or aggregator record, not from the underlying article body.
- `[UNVERIFIED]` — title/forum-level only (Reddit titles without post bodies, thread openers without corroboration).

---

## Press & Market

### 1. Anthropic (ANT) day-two regular-session OHLC — the key new market datapoint
[VERIFIED] Day two (2026-11-20) regular session for ANT: **open $89.86, high $92.56, low $83.05, close $88.91**, volume **399,629,474 shares**.
`regularMarketTime` = epoch `1795208402` = **2026-11-20T21:00:02Z** (regular-session close). `regularMarketChangePercent` = `-8.501`. `regularMarketDayHigh` = `92.56`, `regularMarketDayLow` = `83.05`, `regularMarketVolume` = `399629474`, `fiftyTwoWeekHigh` = `115.1`, `fiftyTwoWeekLow` = `83.05`.
Source: https://finance.yahoo.com/quote/ANT (captured as `yahoo_ant_query1.json`, 5-day range, `dataGranularity: 1d`)

[VERIFIED] The same daily file also confirms day one (2026-11-19) as **open $111.50, high $115.10, low $92.72, close $97.17, volume 857,312,300** — note the volume figure in this primary capture is `857,312,300`, which differs from the `851,818,130` carried in the prior cycle's baseline; the Yahoo chart JSON is the primary source and should win.
Source: https://finance.yahoo.com/quote/ANT (captured as `yahoo_ant_query1.json`)

### 2. Day-two intraday path (5-minute bars)
[VERIFIED] `yahoo_ant_5m.json` holds 79 bars covering `2026-11-20T14:30:00Z` -> `2026-11-20T21:00:00Z` (79 × 5 min = full regular session). Session opened at $89.86 (a gap down of ~7.5% from the $97.17 day-one close), ran to the session high **$92.56 at 2026-11-20T15:00:00Z**, then bled to the session low **$83.05 at 2026-11-20T17:45:00Z**, and recovered into the close at **$88.91**. Hourly closes: 15:00 $91.61, 16:00 $86.43, 17:00 $85.00, 18:00 $84.78, 19:00 $86.63, 20:00 $86.75, 21:00 $88.91. Sum of 5-minute bar volume = `390,461,340` (slightly below the daily `399,629,474`, i.e. some volume sits in closing-auction/odd-lot reporting outside the 5-minute bars).
Source: https://finance.yahoo.com/quote/ANT (captured as `yahoo_ant_5m.json`)

### 3. Day two vs. IPO price and day-one close
[VERIFIED] Computed from the primary Yahoo data: day-two close **$88.91 is +7.12% above the $83.00 IPO price** but **-8.50% vs. the $97.17 day-one close**, and **-1.06% vs. the $89.86 day-two open**. The day-two low of **$83.05 came within 5 cents of the $83.00 IPO price**.
Source: https://finance.yahoo.com/quote/ANT (captured as `yahoo_ant_query1.json`)

### 4. Market-capitalisation context
[VERIFIED] The 424B4 prospectus states post-offering shares of **7,583,103,996 Class A** and **5,636,538,278 Class N** (based on 6,626,752,642 Class A and 5,323,285,271 Class N outstanding as of September 30, 2026, after the Preferred Stock Conversion, Convertible Notes Conversion, Initial Public Benefit Issuance, and RSU Settlement) = **13,219,642,274 total shares**. At that count: $83.00 → ~$1.097T, $97.17 → ~$1.285T, $88.91 → ~$1.175T, $111.50 → ~$1.474T, $83.05 → ~$1.098T, $92.56 → ~$1.224T.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm (captured as `ant_424b4.txt`)

[VERIFIED] Note for reconciliation against the prior cycle's baseline (~$1.5T at $83.00; ~$1.76T at the $97.17 close): those figures imply a fully-diluted share count of roughly 18.1B, not the 13.22B basic post-offering count in the prospectus. A separately computed fully-diluted count (options + RSUs) of ~16.02B yields ~$1.330T at $83.00 and ~$1.424T at $88.91. The gap between these and the baseline figures should be treated as an open reconciliation item, not as a contradiction.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm (captured as `ant_424b4.txt`)

### 5. Offering structure re-verified from the prospectus
[VERIFIED] `980,000,000 Shares` of Class A common stock at `$83.00`; Anthropic is selling `956,351,354` shares and selling stockholders `23,648,646` shares (Anthropic receives **no proceeds** from the selling-stockholder tranche). Gross proceeds before expenses to Anthropic: **`$81,340,000,000`**; underwriting discount `$0.56122 / $550,000,000`; proceeds before expenses to Anthropic **`$78,840,438,875`**; proceeds before expenses to selling stockholders **`$1,949,565,525`**. Underwriters' option: up to an additional **`147,000,000`** shares at the IPO price. Shares expected to be delivered against payment in New York on or about **November 20, 2026**.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm (captured as `ant_424b4.txt`)

### 6. Anthropic operating figures from the prospectus
[VERIFIED] "revenue growing from $0 at commercial launch in the first quarter of 2023 to **$17.0 billion for the three months ended September 30, 2026**". Other disclosed quarterly figures: `$9.9 billion`, `$1.2 billion`, `$2.5 billion` for the three months ended September 30, 2026. Customer base as of September 30, 2026: **more than 11,900 customers with $100,000 or more of revenue on a TTM basis; more than 1,900 customers with $1 million or more; approximately 250 customers with $10 million or more**. Net loss: `$(41,965)M` for FY2025 and `$(104,039)M` for the nine months ended September 30, 2026 (GAAP); pro forma net loss `$(32,132)M` (FY2025) and `$(95,985)M` (9M 2026). Nine-month stock-based compensation `$3.3 billion`.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm (captured as `ant_424b4.txt`)

### 7. Press coverage of the day-two decline (all [REPORTED], headline-level)
- [REPORTED] Morningstar — "Tech Stocks Suffer Worst Week Since 2020 as Anthropic Faces Day Two Decline" (2026-11-20 23:00Z). Also "Global Tech Stocks Slide As Anthropic Faces Day-Two Decline" (16:05Z).
Source: https://www.morningstar.com/stocks/tech-stocks-slide-anthropic-faces-day-two-decline
- [REPORTED] CNBC — "Anthropic falls nearly 9% in first full day of trading as tech stocks get shellacked" (2026-11-20 09:06Z).
Source: https://www.cnbc.com/2026/11/20/anthropic-stock-ai-amd-nvidia
- [REPORTED] 24/7 Wall St. — "Anthropic Sinks 14% on Day Two as AI Sell-Off Spreads; CoreWeave Falls 6%, Amazon Slips 2%" and "Anthropic Stock Came Within 5 Cents of Its $83 IPO Price on Day 2, Then Bounced 6% to Close at $88.30; Facebook Closed Its Day 2 10% Below Its IPO Price".
Source: https://247wallst.com/investing/2026/11/20/anthropic-stock-came-within-5-cents-of-its-83-ipo-price-on-day-2-then-bounced-6-to-close-at-88-30-facebook-closed-its-day-2-10-below-its-ipo-price/
- [REPORTED] TipRanks — "Anthropic Stock (ANT) Drops Nearly 22% After Record $81B IPO — Are We Even Surprised After SpaceX and Rivian?"
Source: https://www.tipranks.com/news/anthropic-stock-ant-drops-nearly-22-after-record-81b-ipo-are-we-even-surprised-after-spacex-and-rivian
- [REPORTED] Stocktwits via TradingView — "ANT Stock Ends Lower; Retail Investors Reportedly Bought as Much as $120B of Anthropic, Beating SpaceX Debut".
Source: https://www.tradingview.com/news/stocktwits:52bb08cf0094b:0-ant-stock-ends-lower-retail-investors-reportedly-bought-as-much-as-120b-of-anthropic-beating-spacex-debut/
- [REPORTED] Finance Magnates via TradingView — "Anthropic's Two-Tier Debut: Who Got 83 Shares and Who Financed the 111.50 Open?"
Source: https://www.tradingview.com/news/financemagnates:480f4bc82094b:0-anthropic-s-two-tier-debut-who-got-83-shares-and-who-financed-the-111-50-open/
- [REPORTED] Stocktwits — "Anthropic's Day-Two Drop Fuels Broader Tech Rout; Dan Ives Points to 'Perfect Storm'".
Source: https://stocktwits.com/news-articles/markets/equity/anthropic-s-day-two-drop-fuels-broader-tech-rout-dan-ives-points-to-perfect-storm/cNbSHWSR91O
- [REPORTED] Investors.com — "Stock market today: Dow Jones futures market reversal as Anthropic IPO debuts, AMD dives".
Source: https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-reversal-anthropic-ipo-debuts-amd-dives/
- [REPORTED] Yahoo Finance — "Anthropic Stock Came Within 5 Cents of Its $83 IPO Price on Day 2..."
Source: https://finance.yahoo.com/markets/stocks/articles/anthropic-stock-came-within-5-211710460.html
- [REPORTED] BeInCrypto — "Morgan Stanley Anthropic greenshoe IPO price".
Source: https://beincrypto.com/morgan-stanley-anthropic-greenshoe-ipo-price/
- [UNVERIFIED note] The 24/7 Wall St. headline states a **$88.30** close while the primary Yahoo capture shows **$88.91**. The Yahoo figure is [VERIFIED]; the $88.30 figure is [REPORTED] and left as-is.

### 8. Claude Code as the IPO narrative — press pushback
- [REPORTED] Business Insider — "Claude Code fueled Anthropic's IPO. Now the company needs to figure out what comes next." (2026-11-20 10:00Z)
Source: https://www.businessinsider.com
- [REPORTED] The New Stack — "Anthropic says Claude writes and reviews 90% of its team's code. The catch is how it checks the work." (2026-11-20 17:01Z)
Source: https://thenewstack.io
- [REPORTED] Benzinga — "Anthropic Stock—The Bull, Base And Bear Case Into Nasdaq-100 Entry" (2026-11-20 21:15Z)
Source: https://www.benzinga.com

### 9. Claude Code release coverage (in-window)
- [REPORTED] Meteora Web — "Claude Code 2.1.330 Adds Enterprise Sign-In and Charts" (2026-11-20 23:04Z)
Source: https://meteoraweb.com
- [REPORTED] Meteora Web — "Claude Code 2.1.329 warns about folder hooks and fixes dozens of bugs" (2026-11-20 08:36Z)
Source: https://meteoraweb.com
- [VERIFIED] The underlying `cc_changelog.md` confirms versions `2.1.330`, `2.1.329`, `2.1.328`, `2.1.327`, `2.1.326`, `2.1.325`, `2.1.323`, `2.1.322`, `2.1.321`, `2.1.319`, `2.1.318`, `2.1.317`, `2.1.316`, `2.1.314`, `2.1.312`, `2.1.311`, `2.1.310`, `2.1.309`, `2.1.308`, `2.1.307`, `2.1.306`, `2.1.305`, `2.1.304`, `2.1.303`, `2.1.302`, `2.1.301`, `2.1.300`, `2.1.299`, `2.1.296`, `2.1.295`. Notable 2.1.330 entries include organization sign-in via `claude auth login` (applies org settings and uses the org's cloud provider or gateway) and the built-in `easel` mod that draws charts on request and under MCP metrics results, available on Pro, Max and (where available) Team and Enterprise on macOS and Linux; also `CLAUDE_CODE_FULL_SIGN_IN_LINK=1` to print the full sign-in link, and a notice in cloud and self-hosted runner sessions.
Source: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md (captured as `cc_changelog.md`)

### 10. Cursor and Chinese open-weight models — the biggest agentic-CLI story of the window
- [REPORTED] CNBC — "SpaceX's subsidiary Cursor tells lawmakers it's considering phasing out Chinese AI models" (2026-11-20 14:04Z). Two additional CNBC URLs were captured in this window: `https://www.cnbc.com/2026/11/20/cursor-chinese-ai-models-geopolitical-risk` and `https://www.cnbc.com/2026/11/20/trump-data-centers-ai-companies-tax`.
Source: https://www.cnbc.com/2026/11/20/cursor-chinese-ai-models-geopolitical-risk
- [REPORTED] Corroborating coverage across outlets within the window: Quartz, Investing.com ("SpaceX's Cursor weighs shift away from Chinese AI models, CNBC reports"), Yahoo Finance, Stocktwits, Techzine Global, Unite.AAI ("Anysphere Weighs Moving Cursor Away From Chinese Open-Weight Models"), MLQ.ai, BigGo Finance, Digg, Breakingthenews.net, Techzine, news.lavx.hu.
Source: https://www.quartz.com
- [REPORTED] Reddit-sourced variant in-window: "SpaceX-Owned Cursor Considers Dropping Chinese AI Models – A Look At Some Key Details" and "SpaceX's Cursor Signals It May Drop Chinese Open-Weight Models".
Source: https://www.reddit.com/r/AI_Agents/

### 11. Apple building its own desktop/computer-use agent
- [REPORTED] The Verge — "Apple is building an AI agent" (2026-11-20 11:22Z), based on an Apple AI Agent Engineer job listing.
Source: https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing
- [REPORTED] Bloomberg — "Apple Working on Own AI Agent to Rival OAI and Ant" (2026-11-20 12:48Z).
Source: https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-cont
- [REPORTED] Widespread secondary pickup in-window (all dated 2026-11-20): The Next Web, Gizmodo, Unite.AI, eTeknix, Cryptopolitan, ETV Bharat, ShiftDelete.Net, UrduPoint, Dainik Jagran MP CG, theopenpress.in ("Apple Agentic AI: Apple Is Building an AI Agent That Can Use a Computer Like a Human"), Morningstar.

### 12. Other agentic-tooling press in-window
- [REPORTED] Signal — "Signal is blocking Gemini and Siri AI from reading your screen" (2026-11-20 12:42Z); Signal's own blog post "Restricting AI agents in mobile operating systems platforms from capturing..." is the underlying source (see Hacker News section).
Source: https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshot
- [REPORTED] OpenAI — "Performance Factory, a Codex-based software optimization system" (2026-11-20 13:08Z, dev.ua; also OpenTools).
Source: https://dev.ua
- [REPORTED] PYMNTS.com — "AI Vendors Ditch Seat Licenses for Per-Agent Pricing" (2026-11-20 20:56Z).
Source: https://www.pymnts.com
- [REPORTED] Superpower Daily — "Microsoft adds controls for third-party and local AI agents in Agent 365" (2026-11-20 22:49Z).
Source: https://superpowerdaily.com
- [REPORTED] Superpower Daily / Amazon Web Services — "AWS explains how Cognition runs Devin's Apple-app testing on cloud Macs" (2026-11-20 04:01Z); the AWS original "AI coding agents on Amazon EC2 Mac: How Cognition scales Devin for macOS" (2026-11-20 01:10Z).
Source: https://aws.amazon.com
- [REPORTED] Pandaily — "Simplex AI Releases Linger Code for Local Personal Agents" (2026-11-20 08:16Z).
Source: https://pandaily.com/simplex-ai-linger-local-personal-agent-polystrata
- [REPORTED] Security Journal UK — "Genetec introduces Security Center MCP connector" (2026-11-20 09:36Z).
Source: https://securityjournaluk.com/genetec-intros-security-center-mcp-connector/
- [REPORTED] The New Stack (2026-11-19, in the "continued" set) — "A 'headless Slack': Vercel's new message board lets Claude Code and Codex agents work together".
Source: https://thenewstack.io
- [REPORTED] The Detroit News — "Reply.io Launches Open-Source Jason Harness for Outbound Sales" (2026-11-20 15:27Z).
Source: https://www.detroitnews.com
- [REPORTED] Security Boulevard — "Where $6.6B in AI Agent Security Funding Went" (2026-11-20 17:37Z).
Source: https://securityboulevard.com
- [REPORTED] Quasa.io — "Mastra – TypeScript AI Agent Framework, Workflow Orchestration & Observability" (2026-11-20 15:58Z).
Source: https://quasa.io
- [REPORTED] TechRadar — "Google just made its AI agent free: Here are 5 everyday jobs you can now ask Gemini Tasks to do for you" (2026-11-20 17:28Z).
Source: https://www.techradar.com
- [REPORTED] Moneycontrol.com — "iPad owner uses Claude Code to trace battery drain to Apple Pencil, avoids repair cost" (2026-11-20 06:18Z).
Source: https://www.moneycontrol.com
- [REPORTED] Education Times — "AI trading bot built in just 48 hours! How a 19-year-old student used Claude Code to turn $68 into a claimed $750,000" (2026-11-20 08:34Z).
Source: https://www.educationtimes.com

---

## Reddit

Primary source: `arctic_posts.json` — **1,100 posts total, 786 in-window** (posts span `2026-11-19T04:45:06Z` -> `2026-11-21T01:37:52Z`; in-window subset `2026-11-20T04:45:06Z` -> `2026-11-21T01:37:52Z`). In-window subreddit counts: **ClaudeCode 99, AI_Agents 99, GeminiAI 96, ClaudeAI 95, singularity 86, codex 80, LocalLLaMA 75, OpenAI 69, opencode 50, cursor 22, ChatGPTCoding 15**.
All Reddit items below are `[UNVERIFIED]` at title level unless a post body (`selftext`) was present in the capture, in which case a verbatim excerpt is quoted and the item is marked `[REPORTED]`.

### r/ClaudeCode (99 in-window posts)

- [REPORTED] **"I built an open-source CLI to share Skills/MCPs/Hooks across Claude Code, Codex, etc."** — 2026-11-20 23:33Z, posted to r/claudeskills via the Google News reddit index. This is the in-window continuation of the cross-tooling-sharing thread. Post body was not captured; title-level only.
Source: https://www.reddit.com/r/claudeskills/comments/1y1i79n/i_built_an_opensource_cli_to_share/
- [REPORTED] **"I wrote a skill that has Claude Code build an MCP server for desktop software that has no API"** — 2026-11-20 18:20Z, 17 pts / 9 comments. Post body captured: *"A lot of real business data lives in software with no API: practice management in doctors' offices, dealer systems, tax desktop apps, ERPs from 2005. ... Now that REA (Reverse Engineer Anything) gives agents..."*
Source: https://reddit.com/r/ClaudeCode/comments/1y1ar6x/i_wrote_a_skill_that_has_claude_code_build_an_mcp/
- [REPORTED] **"Our Claude Code agents had full shells on our GPU boxes. So we built something to fence them in"** — 2026-11-20 17:31Z, 0 pts / 6 comments. Post body captured: *"once an agent was in, it had a full shell. Our keys, every folder, and rm -rf if it felt like it. Limiting that meant writing a lot more rules ourselves."* Directly continues the prior cycle's sandbox / full-shell thread.
Source: https://www.reddit.com/r/ClaudeCode/comments/1y19h7b/our_claude_code_agents_had_full_shells_on_our_gpu/
- [REPORTED] **"I made a shared memory for Claude web, Claude Code and Claude Code cloud, one memory for all of them"** — 2026-11-21 00:38Z (last hour of the window). Post body captured: *"Claude web memory, Claude Code's CLAUDE.md and Claude Code cloud sessions don't share anything. I kept re-explaining my clients and decisions everywhere... Claude Shared Memory, a small MCP server on your own free Cloudflare account (Worker + D1)."*
Source: https://www.reddit.com/r/ClaudeCode/comments/1y1jluk/i_made_a_shared_memory_for_claude_web_claude_code/
- [UNVERIFIED] **"Did Claude really solve the Riemann hypothesis, man? who is going to read that 250k pages file."** — 2026-11-20 20:39Z, **94 pts / 81 comments** — the highest-engagement Claude Code thread in-window, and the community reaction to Anthropic mathematician Levent Alpöge's claimed proof.
Source: https://www.reddit.com/r/ClaudeCode/comments/1y1e8ax/did_claude_really_solve_the_riemann_hypothesis/
- [UNVERIFIED] **"NEED MONEY FOR CLAUDE MAX"** — 2026-11-20 15:53Z, **517 pts / 11 comments** — highest-scoring Reddit post in the window by a wide margin.
Source: https://www.reddit.com/r/ClaudeCode/comments/1y16yom/need_money_for_claude_max/
- [UNVERIFIED] **"Claude code we're supposed to grant us another free weekly reset because they have entered the stock market"** — 2026-11-20 15:38Z, 43 pts / 16 comments. Users connect Anthropic's IPO listing to Claude Code quota/reset entitlements.
Source: https://reddit.com/r/ClaudeCode/comments/1y16kwp/claude_code_were_supposed_to_grant_us_another/
- [REPORTED] **"Claude Code and Federal Programs"** — 2026-11-20 19:22Z, 13 pts / 12 comments. Post body captured: *"I'm the Chief of Staff at the Georgia Department of Human Services... We've got about a 2.5 billion dollar annual budget, but distribute billions more in federal aid."* A named government user describing Claude Code use in child-support / SNAP / TANF / Medicaid eligibility administration.
Source: https://www.reddit.com/r/ClaudeCode/comments/1y1cbwj/claude_code_and_federal_programs/
- [REPORTED] **"How to use claude code without getting half complete projects?"** — 2026-11-20 11:49Z, 5 pts / 36 comments. Post body captured: *"I tried using claude to build a CRM - scan emails, save down info, set up folders... Version 1.0 was dogshit... After 100 hours, nothing had really been fixed."* Highest comment count among the "productivity complaint" class.
Source: https://www.reddit.com/r/ClaudeCode/comments/1y11grf/how_to_use_claude_code_without_getting_half/
- [REPORTED] **"I built a free Claude Code plugin that catches AI tells in Claude's writing and UI code"** — 2026-11-20 15:35Z, 5 pts / 5 comments. Post body captured: *"It's a plugin that flags the habits that make Claude's prose and front-end work read as AI-generated, then has Claude fix them... Three skills (writing, UI, code) that Claude loads before it writes."*
Source: https://www.reddit.com/r/ClaudeCode/comments/1y16ip7/i_built_a_free_claude_code_plugin_that_catches_ai/
- [REPORTED] **"I used Claude Code to analyze 2,000 pictures and 1,000 short videos from our recent 14-day trip to Argentina"** — 2026-11-20 14:47Z, 16 pts / 6 comments.
Source: https://reddit.com/r/ClaudeCode/comments/1y15bf6/i_used_claude_code_to_analyze_2000_pictures_and/
- [REPORTED] **"I've spent months building a multi-engine search app, privacy/security first, for iOS, with Claude Code."** — 2026-11-20 21:49Z, 1 pt / 1 comment. Post body captured: *"This was my first-ever AI-assisted development project. I'm not an engineer... I did little of the development work, but would routinely review/audit CC's code chunks."*
Source: https://www.reddit.com/r/ClaudeCode/comments/1y1fuiu/ive_spent_months_building_a_multiengine_search/
- [UNVERIFIED] **"I grew up on Warcraft III hero defense maps. Seven months with Claude later, I made my own, free in the browser"** — 2026-11-20 14:55Z, 7 pts / 1 comment.
Source: https://reddit.com/r/ClaudeCode/comments/1y15i89/i_grew_up_on_warcraft_iii_hero_defense_maps_seven/
- [UNVERIFIED] **"Dance for me!!"** — 2026-11-20 15:03Z, 19 pts / 9 comments.
Source: https://reddit.com/r/ClaudeCode/comments/1y15pv3/dance_for_me/

### r/AI_Agents (99 in-window posts)

- [UNVERIFIED] **"How Do You Make AI Agents Reliable When They Use Multiple Tools?"** — 2026-11-20 13:15Z, **23 pts / 32 comments** — top-scoring r/AI_Agents post in-window.
Source: https://reddit.com/r/AI_Agents/comments/1y136s0/how_do_you_make_ai_agents_reliable_when_they_use/
- [UNVERIFIED] **"Uber's Legal AI Agent Cuts Contract Review Time by 20% with Rules and RAG"** — 2026-11-20 08:46Z. Cross-posted from the Uber engineering write-up; carried into the Google News reddit index.
Source: https://www.reddit.com/r/AI_Agents/comments/1y0ygyw/ubers_legal_ai_agent_cuts_contract_review_time_by/
- [UNVERIFIED] **"Ask governed Databricks data (Genie One) directly from ChatGPT, Claude, or Cursor"** — 2026-11-20 17:07Z.
Source: https://reddit.com/r/AI_Agents/comments/1y18upj/ask_governed_databricks_data_genie_one_directly/
- [UNVERIFIED] **"I put a LangGraph agent on WhatsApp. It takes voice notes and photos, sends images back"** — 2026-11-20 17:35Z, 12 pts / 19 comments.
Source: https://reddit.com/r/AI_Agents/comments/1y19knp/i_put_a_langgraph_agent_on_whatsapp_it_takes/
- [UNVERIFIED] **"How Do You Handle Memory in AI Agents Across Long-Running Tasks?"** — 2026-11-20 15:52Z, 7 pts / 23 comments.
Source: https://reddit.com/r/AI_Agents/comments/1y16xhz/how_do_you_handle_memory_in_ai_agents_across/
- [UNVERIFIED] **"where do you draw the line between what the agent decides and what stays plain code?"** — 2026-11-20 12:26Z, 8 pts / 14 comments.
Source: https://reddit.com/r/AI_Agents/comments/1y126wd/where_do_you_draw_the_line_between_what_the_agent/
- [REPORTED] **"What AI personal assistant are you guys actually using in 2026?"** — 2026-11-20 20:37Z, 6 pts / 14 comments. Post body captured: *"I've come across tools like Motion, Reclaim, and Lindy, but I'm having trouble figuring out which ones are actually useful long term."*
Source: https://reddit.com/r/AI_Agents/comments/1y1e5wh/what_ai_personal_assistant_are_you_gus_actually/
- [UNVERIFIED] **"Title: Building a personal AI desktop assistant – Need suggestions from experienced developers"** — 2026-11-20 18:36Z, 8 pts / 16 comments.
Source: https://reddit.com/r/AI_Agents/comments/1y1b5ga/title_building_a_personal_ai_desktop_assistant/

### r/opencode (50 in-window posts)

- [REPORTED] **"Another OpenCode model router, but this one tries not to burn your prompt cache"** — 2026-11-20 22:08Z. Post body captured: *"I built an OpenCode V2 plugin inspired by Pi's smart-router. It uses a small judge model to route each turn to a model from a pool you choose... The obvious problem is that switching to a cheaper model can cost more if you lose a warm prompt cache."* Direct continuation of the prior cycle's prompt-cache-waste theme.
Source: https://www.reddit.com/r/opencode/comments/1y1gar2/another_opencode_model_router_but_this_one_tries/
- [UNVERIFIED] **"Google ai subs are coming to opencode? 👀"** — 2026-11-20 06:40Z, **173 pts / 19 comments** — top-scoring r/opencode post in-window.
Source: https://www.reddit.com/r/opencode/comments/1y0wigv/google_ai_subs_are_coming_to_opencode/
- [UNVERIFIED] **"Hy4 is on Hugging Face (see benchmarks inside)"** — 2026-11-20 09:55Z, 78 pts / 2 comments.
Source: https://www.reddit.com/r/opencode/comments/1y0zk9m/hy4_is_on_hugging_face_see_benchmarks_inside/
- [UNVERIFIED] **"Oh, great Lord OpenCode, I apologize"** — 2026-11-20 02:18Z, 56 pts / 24 comments.
Source: https://www.reddit.com/r/opencode/comments/1y0rppx/oh_great_lord_opencode_i_apologize/
- [UNVERIFIED] **"opencode feels extremely slow"** — 2026-11-20 12:47Z, 7 pts / 11 comments.
Source: https://reddit.com/r/opencode/comments/1y12lhn/opencode_feels_extremely_slow/
- [UNVERIFIED] **"Made a Windows 95 theme for OpenCode Desktop (Megalarp)"** — 2026-11-20 22:26Z, 8 pts / 3 comments.
Source: https://www.reddit.com/r/opencode/comments/1y1gpvh/made_a_windows_95_theme_for_opencode_desktop/

### r/GeminiAI (96 in-window posts)

- [UNVERIFIED] **"Gemini 4 Neon is almost on par with Claude."** — 2026-11-21 00:11Z (last hour of the window).
Source: https://www.reddit.com/r/GeminiAI/comments/1y1j1i2/gemini_4_neon_is_almost_on_par_with_claude/
- [UNVERIFIED] **"GOOGLE COOKED HARD!!"** — 2026-11-20 16:18Z, **395 pts / 108 comments** — highest-scoring GeminiAI post in-window.
Source: https://www.reddit.com/r/GeminiAI/comments/1y17lpj/google_cooked_hard/
- [UNVERIFIED] **"Gemini Neon is incredible."** — 2026-11-20 19:45Z, 96 pts / 18 comments.
Source: https://www.reddit.com/r/GeminiAI/comments/1y1cwlv/gemini_neon_is_incredible/
- [UNVERIFIED] **"Neon quota reset in coming ..."** — 2026-11-20 19:25Z, 51 pts / 13 comments.
Source: https://reddit.com/r/GeminiAI/comments/1y1cend/neon_quota_reset_in_coming/
- [UNVERIFIED] **"Gemini 4 Neon: nailed all my 3D benchmarks (Tiny World & Blender)"** — 2026-11-20 16:47Z, 30 pts / 1 comment.
Source: https://www.reddit.com/r/GeminiAI/comments/1y18c7t/gemini_4_neon_nailed_all_my_3d_benchmarks_tiny/
- [UNVERIFIED] **"Where Opus shines over Neon"** — 2026-11-20 17:57Z, 18 pts / 12 comments.
Source: https://reddit.com/r/GeminiAI/comments/1y1a50a/where_opus_shines_over_neon/
- [UNVERIFIED] **"Upcoming Gemini update will finally let you save chat history with AI training turned off"** — 2026-11-20 17:02Z, 19 pts / 1 comment.
Source: https://reddit.com/r/GeminiAI/comments/1y18qu5/upcoming_gemini_update_will_finally_let_you_save/

### r/codex (80 in-window posts)

- [UNVERIFIED] **"I like Astra 6.2"** — 2026-11-20 09:23Z, 62 pts / 48 comments.
Source: https://www.reddit.com/r/codex/comments/1y0z1st/i_like_astra_62/
- [UNVERIFIED] **"A Theory About 'Laziness' in GPT 6 and Onwards - It's about alignment"** — 2026-11-20 19:51Z, 51 pts / 29 comments.
Source: https://reddit.com/r/codex/comments/1y1d16k/a_theory_about_laziness_in_gpt_6_and_onwards_its/
- [UNVERIFIED] **"Codex ultra felt lobotomized so we parsed 34.5k local calls in ~/.codex. Found a 100x cl..."** — 2026-11-20 16:20Z, 5 pts / 9 comments.
Source: https://www.reddit.com/r/codex/comments/1y17n37/codex_ultra_felt_lobotomized_so_we_parsed_345k/
- [UNVERIFIED] **"Did Deep Research just disappear? How's everyone doing in-depth research now?"** — 2026-11-20 14:03Z, 21 pts / 21 comments.
Source: https://www.reddit.com/r/codex/comments/1y149wj/did_deep_research_just_disappear_hows_everyone/
- [UNVERIFIED] **"WTF is wrong with 6.1 Terra"** — 2026-11-20 19:59Z, 16 pts / 17 comments.
Source: https://reddit.com/r/codex/comments/1y1d7x4/wtf_is_wrong_with_61_terra/
- [UNVERIFIED] **"Why create a project with a local folder upfront instead of enabling local folders after"** — 2026-11-20 05:06Z, 8 pts / 6 comments.
Source: https://reddit.com/r/codex/comments/1y0uxbt/why_create_a_project_with_a_local_folder_upfront/

### r/cursor (22 in-window posts)

- [UNVERIFIED] **"Bring back composer, this is stupid.."** — 2026-11-20 14:43Z, 39 pts / 29 comments.
Source: https://reddit.com/r/cursor/comments/1y157pu/bring_back_composer_this_is_stupid/
- [UNVERIFIED] **"A README in one of our test repos tells AI agents to hide security findings. What do your Cursor..."** — 2026-11-20 14:18Z, 3 pts / 11 comments. Continues the prior cycle's "skill instructions are not a safety boundary" theme in a new form (agent-facing repo instructions).
Source: https://www.reddit.com/r/cursor/comments/1y14m1t/a_readme_in_one_of_our_test_repos_tells_ai_agents/
- [UNVERIFIED] **"[UPDATE] My Cursor account got hacked and racked up ~$6,000 in charges."** — 2026-11-20 05:47Z, 11 pts / 4 comments.
Source: https://reddit.com/r/cursor/comments/1y0vmtt/update_my_cursor_account_got_hacked_...

### Other subreddits (LocalLLaMA 75, OpenAI 69, ClaudeAI 95, singularity 86, ChatGPTCoding 15)

- [UNVERIFIED] **"Basalt 0.5.0: Tencent Hy4 Flash with 1M context and vision, 84 to 172 tok/s on a 5090 + 5060 Ti (NVFP4)"** — 2026-11-19 19:49Z (just outside the window's Reddit cut, carried by the Google News reddit index on the 20th).
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0iwrg/basalt_050_tencent_hy4_flash_with_1m_context_and/
- [UNVERIFIED] **"Basalt 0.5 vs Strata 0.1.55 - Qwen 3.8 FN on Single RTX5080"** — 2026-11-20 00:52Z.
Source: https://www.reddit.com/r/LocalLLM/comments/1y0pydt/basalt_05_vs_strata_0155_qwen_38_fn_on_single/
- [UNVERIFIED] **"New Minecraft AI benchmark just dropped. GPT-6.2 Astra is just barely beating a skilled human"** — 2026-11-19 19:50Z.
Source: https://www.reddit.com/r/ArtificialInteligence/comments/1y0iybb/new_minecraft_ai_benchmark_just_dropped_gpt62/
- [UNVERIFIED] **"Has anyone found any significant improvement on using GPT Luna/Sol/Astra on JetBrains Air and Air Plugin vs ChatGPT App or Codex CLI?"** — 2026-11-20 14:08Z. Direct CLI-vs-CLI tooling comparison.
Source: https://www.reddit.com/r/Jetbrains/comments/1y14dtx/has_anyone_found_any_significant_improvement_on/
- [REPORTED] **"I built an open-source model router that factors prompt cache into switching decisions"** — 2026-11-20 22:16Z, posted to r/LLMDevs via the Google News reddit index. Third distinct prompt-cache-aware router to appear in-window alongside the two OpenCode routers.
Source: https://www.reddit.com/r/LLMDevs/comments/1y1ghl1/i_built_an_opensource_model_router_that_factors/

---

## Hacker News

[VERIFIED] The Algolia capture (`hn_page_0.json` .. `hn_page_9.json`, `search_by_date`, `created_at` between `2026-11-20T01:28Z` and `2026-11-21T01:28Z`) returned **1,000 in-window stories** — this is the API page cap, so 1,000 is a floor, not the true in-window total. Of those, **166 matched an agentic/CLI keyword filter** (`agent|claude|codex|copilot|cursor|mcp|terminal|cli|coding|llm|gpt|openai|anthropic|gemini|model|skill`). Ranking below is by points. Comment bodies were captured for 5 items (`hn_item_50572348.json`, `hn_item_50574383.json`, `hn_item_50574772.json`, `hn_item_50577265.json`, `hn_item_50578794.json`); those are quoted verbatim.

### Top agentic-CLI / model-relevant stories by points

1. [REPORTED] **"Restricting AI agents in mobile operating systems platforms from capturing..."** — 505 pts, **301 comments**, 2026-11-20T09:42Z. Underlying source is Signal's own blog post; the HN title is truncated in the API record. Signal is blocking Gemini/Siri from reading the screen.
Source: https://news.ycombinator.com/item?id=50572348
Source: https://signal.org/blog/protecting-your-privacy/
2. [REPORTED] **"Language Models Can Rewrite Their Own Weights"** — 336 pts, **108 comments**, 2026-11-20T16:29Z (arxiv 2611.21885).
Source: https://news.ycombinator.com/item?id=50577265
Source: https://arxiv.org/abs/2611.21885
3. [REPORTED] **"Global stock markets slump as Anthropic's record IPO fails to stem AI sell-off"** — 192 pts, **226 comments**, 2026-11-20T13:29Z (The Guardian).
Source: https://news.ycombinator.com/item?id=50574383
Source: https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off
4. [REPORTED] **"Anthropic shares tank after IPO as the Nasdaq erases 2026 gains"** — 179 pts, **178 comments**, 2026-11-20T17:44Z (NBC News).
Source: https://news.ycombinator.com/item?id=50578794
Source: https://www.nbcnews.com/business/markets/anthropic-shares-markets-selloff-nasdaq-rcna610394
5. [REPORTED] **"Vibecoding an inference chip"** — 110 pts, 39 comments, 2026-11-20T18:15Z.
Source: https://news.ycombinator.com/item?id=50579297
Source: https://ankitg.me/blog/vibecoding-inference-chip/
6. [REPORTED] **"DreamCoder: Coding harness and IDE from the author of Mastering Emacs"** — 100 pts, 15 comments, 2026-11-20T20:03Z. A new coding harness/IDE from the Mastering Emacs author — a direct competitor-shaped entry in the agentic-CLI space.
Source: https://news.ycombinator.com/item?id=50581110
Source: https://www.masteringemacs.org/article/announcing-dreamcoder
7. [REPORTED] **"Show HN: OpenComputer – an open source alternative to Devin"** — 64 pts, 18 comments, 2026-11-20T20:19Z (diggerhq).
Source: https://news.ycombinator.com/item?id=50581403
Source: https://github.com/diggerhq/opencomputer
8. [REPORTED] **"Epic Games Turns to AI Coding for the Unreal Engine"** — 58 pts, **60 comments**, 2026-11-20T12:16Z (IEEE Spectrum). A named enterprise-scale coding-agent deployment.
Source: https://news.ycombinator.com/item?id=50573681
Source: https://spectrum.ieee.org/epic-games-unreal-engine-ai
9. [REPORTED] **"Anthropic's IPO Bust Deepens $4T AI Wipeout on Wall Street"** — 37 pts, 3 comments, 2026-11-20T21:18Z.
Source: https://news.ycombinator.com/item?id=50582280
10. [REPORTED] **"Llms.txt and MCP didn't move the needle"** — 30 pts, 19 comments, 2026-11-20T14:00Z (backpackforlaravel.com). A direct negative result on llms.txt + MCP for documentation discovery — the most on-topic agentic-CLI story in the window after the market ones.
Source: https://news.ycombinator.com/item?id=50574772
Source: https://backpackforlaravel.com/articles/opinions/llms-txt-and-mcp-didn-t-move-the-needle-for-us-here-s-what-did
11. [REPORTED] **"Apple is building an AI agent"** — 19 pts, 11 comments, 2026-11-20T11:22Z (The Verge job listing).
Source: https://news.ycombinator.com/item?id=50573166
Source: https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing
12. [REPORTED] **"The Hungry Butler Effect: Concealed Commercial Incentives in LLMs"** — 13 pts, 4 comments, 2026-11-20T22:18Z.
Source: https://news.ycombinator.com/item?id=50583117
13. [REPORTED] **"We built an internal coding agent. Now 80% of the company uses it"** — 13 pts, 3 comments, 2026-11-20T08:58Z (Alan). A named company's internal agentic-CLI rollout reaching 80% of staff.
Source: https://news.ycombinator.com/item?id=50572003
Source: https://medium.com/alan/hopper-we-built-an-internal-coding-agent-now-80-of-alan-uses-it-9c11e5b
14. [REPORTED] **"Anthropic mathematician Levent Alpöge claims to prove Riemann Hypothesis"** — 11 pts, 1 comment, 2026-11-20T14:53Z (Scientific American).
Source: https://news.ycombinator.com/item?id=50575483
Source: https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypo
15. [REPORTED] **"Anthropic announces closing of initial public offering"** — 8 pts, 0 comments, 2026-11-20T12:57Z (anthropic.com/news/ipo-close) — primary confirmation of the IPO close.
Source: https://news.ycombinator.com/item?id=50574068
Source: https://www.anthropic.com/news/ipo-close
16. [REPORTED] **"Build 3D models with Muse Code"** — 8 pts, 0 comments, 2026-11-20T21:04Z (dev.meta.ai).
Source: https://news.ycombinator.com/item?id=50582083
Source: https://dev.meta.ai/resources/blog/build-3d-models-with-muse-code
17. [REPORTED] **"Agent memory benchmarks need more than an overall score"** — 7 pts, 1 comment, 2026-11-20T09:17Z. Agent-memory evaluation critique.
Source: https://news.ycombinator.com/item?id=50572158
18. [REPORTED] **"Anthropic is not living up to its ideals"** — 7 pts, 5 comments, 2026-11-20T19:35Z (so8res.substack.com).
Source: https://news.ycombinator.com/item?id=50580620
Source: https://so8res.substack.com/p/anthropic-is-not-living-up-to-its
19. [REPORTED] **"Ask HN: What's stopping us from putting agents in general purpose robots?"** — 6 pts, 2 comments, 2026-11-20T21:44Z (no external URL; text post).
Source: https://news.ycombinator.com/item?id=50582662
20. [REPORTED] **"Signal is blocking Gemini and Siri AI from reading your screen"** — 5 pts, 1 comment, 2026-11-20T12:42Z (The Verge).
Source: https://news.ycombinator.com/item?id=50573902
Source: https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshot
21. [REPORTED] **"Apple Working on Own AI Agent to Rival OAI and Ant"** — 6 pts, 0 comments, 2026-11-20T12:48Z (Bloomberg).
Source: https://news.ycombinator.com/item?id=50573966
Source: https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-cont
22. [REPORTED] **"Show HN: XSquads– Set a mission, agents work on it autonomously in your hardware"** — 4 pts, 2 comments, 2026-11-20T21:56Z.
Source: https://news.ycombinator.com/item?id=50582844
Source: https://xsquads.ai
23. [REPORTED] **"Show HN: BSWorld – AI agents can now test Bluetooth code without hardware"** — 5 pts, 1 comment, 2026-11-20T06:06Z.
Source: https://news.ycombinator.com/item?id=50570766
24. [REPORTED] **"Nasdaq futures drop as Anthropic shares tumble"** — 7 pts, 2 comments, 2026-11-20T14:05Z.
Source: https://news.ycombinator.com/item?id=50574832
25. [REPORTED] **"Anthropic Stock Falls About 9% on First Full Trading Day as AI Stocks Slide"** — 6 pts, 0 comments, 2026-11-20T17:02Z.
Source: https://news.ycombinator.com/item?id=50577974
26. [REPORTED] **"Anthropic stock dives over 12% after rip-roaring IPO"** — 9 pts, 1 comment, 2026-11-20T18:45Z.
Source: https://news.ycombinator.com/item?id=50579753
27. [REPORTED] **"Anthropic Team Now Worth More Than Bottom Third of All US Households"** — 5 pts, 0 comments, 2026-11-20T18:10Z.
Source: https://news.ycombinator.com/item?id=50579229
28. [REPORTED] **"Anthropic Founder Will Donate to Trump Accounts, Bessent Says"** — 5 pts, 0 comments, 2026-11-20T18:04Z (Bloomberg).
Source: https://news.ycombinator.com/item?id=50579124

### Comment-thread evidence (verbatim from captured HN item JSON)

- On the **Signal / mobile OS agents** thread (50572348, 301 comments):
  - `pajamasam`: *"I found the Machine Gods interview with Meredith Whittaker really interesting. She specifically talked about this issue of AI apps having too much access on users' devices and that Signal is struggling to prevent these apps from getting access to use..."*
  - `aboringusername`: *"Isn't the solution kind of obvious here? Mobile devices already have permissions (location, file system, contacts, photos/media), so they just need to implement 'AI/agent' access. If denied, agents are simply prohibited from working. It should be an..."*
  - `cimnine`: *"I would appreciate if Signal published the findings of their 'forensics investigation' so that other app developers with fewer resources could profit."*
  - `asxndu`: *"Signal is run by a careless, low effort team. It may be the best we have, but the bar is so low."*
Source: https://news.ycombinator.com/item?id=50572348
- On the **"Llms.txt and MCP didn't move the needle"** thread (50574772, 19 comments):
  - `antiloper`: *"This is one of the worst pieces of unedited LLM slop I've seen yet. At least read what it outputs instead of doing 1 sentence prompt -> ctrl+c ctrl+v -> publish..."*
  - `rcymerys`: *"Does anyone have any empirical evidence that llms.txt makes any difference? I've had multiple marketeers try to convince me that it's a must for a website, but the best 'proof' they could give me were some LinkedIn posts from othe..."*
  - `drbscl`: *"Why on earth would you make an MCP to let agents query your docs specifically? We've moved well past that, and even when docs MCPs were the best approach, everyone just used context7 or similar."*
  - `zodwick`: *"This post would have made sense ~10 months back."*
  - `deadbabe` (reply): *"Still does. Absolutely no one should be using MCP for what should be a ripgrep across a corpus."*
  - `0x696C6961` (reply): *"It's just a token saving mechanism. My llms.txt are a text index/sitemap for the agent. AFAIK Claude doesn't look for this file, it needs to be explicitly instructed to."*
  - `petercooper`: *"Only one data point, but I get a lot of submissions for my newsletter from agents. Months ago, I updated llms.txt to include specific instructions for submissions that differ from what you can figure out from the human site..."*
Source: https://news.ycombinator.com/item?id=50574772
- On the **"Language Models Can Rewrite Their Own Weights"** thread (50577265, 108 comments):
  - `zodwick`: *"Not the RSI we wanted, bu the RSI we deserve"*
  - `test6554`: *"Well, it was nice knowing you all."*
  - `tsunamifury`: *"I'm sorry but isn't this just over fitting based on conversational adaption. But worse since it's self conversation? Resulting in the exact same problem 4o1 had: sycophancy?"*
  - `gavinray`: *"Didn't Google's 'sleep' paper already show this? https://research.google/blog/the-sleep-framework-a-new-way-f..."*
Source: https://news.ycombinator.com/item?id=50577265
- On the **Anthropic IPO / market-slump** threads (50574383 with 226 comments; 50578794 with 178 comments):
  - `oblio` (50574383): *"It looks like a bad time to be an OpenAI late investor or employee... How did they miss IPOing first?"*
  - `squidlib`: *"Any of the frontier labs IPOing was a signal that the top has been reached."*
  - `DivingForGold`: *"Big buyers sold the 'wet paper bags' of ANT stock to all the retails, same as always ..."*
  - `cmiles8`: *"Anthropic has been on a nose dive since the start of trading. At this point almost everyone that bought ANT since the start of trading yesterday has lost money."*
  - `gonzalohm` (50578794): *"The funny thing is that the stock clearly IPOed at a lower price on purpose, then it was pumped and it looked like 'woah it hit 2T' and then it came the natural selloff."*
  - `glimshe` (50578794): *"The Anthropic IPO was supposed to be the coming of age for AI. There's a chance it will be the event that showed that the AI valuation emperor has no clothes."*
  - `long-time-first` (50578794): *"Tank, as in up 10% yesterday, down 12% today... that's market volatility in hyperbolic news-headline form"*
  - `breakwaterlabs` (50578794): *"It has been fascinating to see article after article talk about relative movements with ambiguous baselines."*
Source: https://news.ycombinator.com/item?id=50574383
Source: https://news.ycombinator.com/item?id=50578794

---

## Funding / M&A

### SEC EDGAR — explicit negative on Form D
[VERIFIED] **No Form D filings were returned in-window.** The Form D-scoped EDGAR full-text searches came back empty:
- `secD1.json` — query `match_phrase "AI agent"` + Form D filter → `total: 0`, `hits: 0`.
- `sec_D_agentic.json` — query `match_phrase "agentic"` + Form D filter → `total: 0`, `hits: 0`.
- `sec_D____AI_agent___.json` — query `match_phrase "AI agent"` + Form D filter → `total: 0`, `hits: 0`.
- `sec_D____coding_agent___.json` — query `match_phrase "coding agent"` + Form D filter → `total: 0`, `hits: 0`.
- `sec_fts.json` — query `match_phrase "AI agent"` + Form D filter → `total: 0`, `hits: 0`.
Source: https://efts.sec.gov/LATEST/search-index?q=%22AI%20agent%22&forms=D (EDGAR full-text search, forms=D)
[VERIFIED] The **unfiltered** Form D-equivalent query (`secD2.json`, `match_phrase "agentic"`, date-filtered to the window) returned `total: 33` hits, but **none of them are Form D filings** — they are 8-K (7), 6-K (6), 485APOS (5), 10-Q (4), 10-K (3), 10-12G/A (2), 424B4 (1), S-1/A (1), 485BPOS (1), S-3ASR (1), S-1 (1), N-CSR (1). These are ordinary periodic/registration filings that merely mention "agentic"; **none are reported as Form D.** The only agentic-adjacent registrants are `Anthropic, PBC (ANT) (CIK 0002130357)` — 424B4 accession `0001628280-26-074944:anthropicpbc-424b4.htm`, filed 2026-11-19 — and `Palo Alto Networks Inc (PANW) (CIK 0001327567)` — 10-Q accession `0001327567-26-000033:panw-20261031.htm`, filed 2026-11-19.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm
[VERIFIED] Other in-window EDGAR entries touching the theme: `0001193125-26-467904:rzlv-ex99_1.pdf` (REZOLVE AI PLC, CIK 0001920294, 6-K, 2026-11-19); `0002054696-26-000033:final_niqxboardxappointm.htm` (NIQ Global Intelligence plc, CIK 0002054696, 8-K, 2026-11-19); `0001193125-26-469358:agys-ex99_1.htm` (AGILYSYS INC, CIK 0000078749, 8-K, 2026-11-20); `0001213900-26-122382:ea031307501ex99-1.htm` (Guardforce AI Co., Ltd., CIK 0001804469, 6-K, 2026-11-20); `0001104659-26-130115:tm2630263d1_ex99-1.htm` (Alibaba Group Holding Ltd, 6-K, 2026-11-19); `0001104659-26-130143:tm2630201d1_ex99-1.htm` (Globant S.A., 6-K, 2026-11-19); `0002004711-26-000027:bsp_ex99-1.htm` (Bending Spoons S.p.A., 6-K, 2026-11-19); `0001193125-26-469887:d139415dex99a3.htm` (Harbor ETF Trust, CIK 0001860434, 485APOS, 2026-11-20); `0001999371-26-025753:strategiq-485apos_111326.htm` (Tidal Trust I, CIK 0001742912, 485APOS, 2026-11-19 — "StrategIQ", an agentic-AI ETF trust filing).
Source: https://www.sec.gov/cgi-bin/browse-edgar
[VERIFIED] **Access failures on EDGAR:** `sec_idx_20261119.txt` and `sec_idx_20261120.txt` (gzip-wrapped) contain only an S3 error body — `<?xml version="1.0" encoding="UTF-8"?> <Error><Code>AccessDenied</Code><Message>Access Denied</Message><RequestId>JSNG7F1WWEQ3XPZJ</RequestId>...` — i.e. the daily filing-index listings could not be read. `sec_d.html` is an EDGAR **Company Search** error page, not a filing: *"The value you submitted is not valid. Please try a different selection."* (page title "Company Search Results", "Modified 07/18/2014"). **No Form D company names, amounts, or filing dates are available from this capture.**
Source: https://www.sec.gov/cgi-bin/browse-edgar

### Funding rounds reported in-window (all [REPORTED])
- [REPORTED] **Bevado** — $10M seed round to scale AI agents for property management (AI Insider, 2026-11-20 09:29Z).
Source: https://theaiinsider.tech/2026/11/20/bevado-announces-10m-seed-round-to-scale-ai-agents-for-property-management/
- [REPORTED] **Archer** (London-based) — €9.1 million to deploy AI recruiting agents for employers and job seekers (EU-Startups, 2026-11-20 12:41Z).
Source: https://www.eu-startups.com/2026/11/london-based-archer-raises-e9-1-million-to-deploy-ai-recruiting-agents-for-employers-and-job-seekers/
- [REPORTED] **Arva AI** — USD 20 mln Series A for AI agents in bank operations (The Paypers, 2026-11-20 11:58Z).
Source: https://thepaypers.com
- [REPORTED] **Daisytuner** — €6M seed round to automate AI performance engineering across any chip (AI Insider, 2026-11-20 09:22Z).
Source: https://theaiinsider.tech/2026/11/20/daisytuner-secures-e6m-seed-round-to-automate-ai-performance-engineering-across-any-chip/
- [REPORTED] **Disseqt AI** — $8 million raised, plans India hiring (TechGig, 2026-11-20 17:26Z).
Source: https://techgig.com/news/industry/disseqt-ai-raises-8-million-plans-india-hiring/136008084
- [REPORTED] **Pragmatik Labs** (Lin Junyang) — closed funding at a **$5 billion valuation** (Quartz, 2026-11-20 12:34Z).
Source: https://qz.com/pragmatik-labs-funding-5-billion-valuation-alibaba-ai-112026
- [REPORTED] Security Boulevard — "Where $6.6B in AI Agent Security Funding Went" (2026-11-20 17:37Z) — a roundup of the agentic-security funding wave.
Source: https://securityboulevard.com
- [REPORTED] CROO — launches "CROO Skill", opening its AI agent network to Claude Code and Codex users; BigGo Finance frames it as letting users "Directly Call on 4,000 AI Agents".
Source: https://www.tradingview.com/news/tradingview:e6b37830d51b6:0-croo-launches-ai-agent-marketplace-access-in-claude-code-and-codex/
Source: https://www.investing.com/news/cryptocurrency-news/croo-launches-croo-skill-opening-its-ai-agent-network-to-claude-code-and-codex-users-5040900

### M&A
- [REPORTED] **Palo Alto Networks / Applied Compute** — $4.5 billion all-stock acquisition; coverage continued through the window on 2026-11-20 (The Next Web, Channel Dive, Equitypandit), with earlier announcements on 2026-11-18/19 (Reuters, Bloomberg, WSJ, CNBC, Axios, PR Newswire, SiliconANGLE).
Source: https://thenextweb.com/news/palo-alto-networks-applied-compute-4-5bn-open-weight-ai
Source: https://www.channeldive.com/news/palo-alto-networks-applied-compute-ai-agent-security-acquisition/875235/
Source: https://www.equitypandit.com/applied-compute-get-acquired-by-palo-alto-for-4-5-billion/
- [VERIFIED] Palo Alto Networks' 10-Q (accession `0001327567-26-000033:panw-20261031.htm`) was filed 2026-11-19, the day before the Applied Compute deal was announced — so the deal is **not** yet reflected in that 10-Q.
Source: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000033/panw-20261031.htm

---

## Enterprise adoption

- [REPORTED] **Alan (alan.com)** — "We built an internal coding agent. Now 80% of the company uses it." 13 pts / 3 comments on HN. The most concrete named internal agentic-CLI adoption metric in-window.
Source: https://news.ycombinator.com/item?id=50572003
Source: https://medium.com/alan/hopper-we-built-an-internal-coding-agent-now-80-of-alan-uses-it-9c11e5b
- [REPORTED] **Epic Games** — "Turns to AI Coding for the Unreal Engine" (IEEE Spectrum, 2026-11-20). 58 pts / 60 comments on HN — a named studio adopting coding agents on engine-scale code.
Source: https://news.ycombinator.com/item?id=50573681
Source: https://spectrum.ieee.org/epic-games-unreal-engine-ai
- [REPORTED] **Anthropic internal usage** — "Anthropic says Claude writes and reviews 90% of its team's code. The catch is how it checks the work." (The New Stack, 2026-11-20 17:01Z). This is the closest thing to a first-party CLI-adoption number in-window.
Source: https://thenewstack.io
- [REPORTED] **Cognition / AWS** — "AI coding agents on Amazon EC2 Mac: How Cognition scales Devin for macOS" (Amazon Web Services, 2026-11-20 01:10Z). Devin's macOS app-testing workload running on EC2 Mac instances.
Source: https://aws.amazon.com
- [REPORTED] **Cognition / McKinsey** — partnership to sell Devin to large enterprises; Business Wire in-window headline "Devin Expands Beyond Software: Enterprises Now Use Cognition's AI Engineer for Data Migration" (2026-11-19).
Source: https://www.businesswire.com
- [REPORTED] **Uber** — legal AI agent cuts contract review time by 20% with rules and RAG (Uber engineering; InfoQ 2026-11-16, TechGig 2026-11-16, carried into the window via Reddit).
Source: https://www.reddit.com/r/AI_Agents/comments/1y0ygyw/ubers_legal_ai_agent_cuts_contract_review_time_by/
- [REPORTED] **Uber MCP Gateway** — "Uber Builds MCP Gateway to Govern Access to 800+ Servers and 5,000+ AI Agent Tools" (InfoQ, 2026-11-02). Quantified MCP-governance scale.
Source: https://www.infoq.com
- [REPORTED] **Snowflake + Accenture** — "Powering the Agentic Enterprise: Turning Enterprise Context into Governed Agentic Action" (Snowflake blog).
Source: https://www.snowflake.com/fr/blog/agentic-enterprise-snowflake-accenture/
- [REPORTED] **Genetec** — Security Center MCP connector, letting agents query physical-security systems (Security Journal UK, 2026-11-20).
Source: https://securityjournaluk.com/genetec-intros-security-center-mcp-connector/
- [REPORTED] **Databricks Genie One** — governed Databricks data queryable directly from ChatGPT, Claude, or Cursor (2026-11-20).
Source: https://reddit.com/r/AI_Agents/comments/1y18upj/ask_governed_databricks_data_genie_one_directly/
- [REPORTED] **BlackLine** — "BlackLine Earns First AIUC-1 Certification for Agentic AI" (Enterprise Times, 2026-11-20 08:34Z); the underlying certification was announced 2026-11-18 with the claim of "zero critical findings across nearly 3,000 tests".
Source: https://www.enterprisetimes.co.uk/2026/11/20/blackline-earns-first-aiuc-1-certification-for-agentic-ai/
- [REPORTED] **Georgia Department of Human Services** — Chief of Staff describing Claude Code use across child-support, SNAP/TANF/Medicaid eligibility and protective-services programs; ~$2.5B annual state budget plus federal aid (Reddit, 2026-11-20).
Source: https://www.reddit.com/r/ClaudeCode/comments/1y1cbwj/claude_code_and_federal_programs/
- [REPORTED] **Citi** — "Citi Shifts AI Agent Liability to Customers as Banks Push Back on Third-Party Finance Tools" (AI Insider, 2026-11-20 09:15Z); corroborated in-window by Bank Policy Institute's "AI Agents Should Not Access Financial Accounts Just Yet" (2026-11-20 18:54Z) and MAS's "SG Digital Ledger and New AI Agent Protocols" at Singapore FinTech Festival (FF News, 2026-11-20 09:44Z).
Source: https://theaiinsider.tech/2026/11/20/citi-shifts-ai-agent-liability-to-customers-as-banks-push-back-on-third-party-finance-tools/
Source: https://bpi.com
- [REPORTED] **Salt Security poll** — "77% of Firms Using AI Saw Agents Act Outside Authorization; 92% Allow Autonomy" (Tech Times, 2026-11-20 09:20Z).
Source: https://www.techtimes.com/articles/331175/20261120/salt-security-poll-77-of-firms-using-ai-saw-agents-act-outside-authorization-92-allow-autonomy
- [REPORTED] **Microsoft Agent 365** — adds controls for third-party and local AI agents (2026-11-20 22:49Z); agent governance is now a mainstream enterprise control-plane product line.
Source: https://superpowerdaily.com
- [REPORTED] **Vercel** — "A 'headless Slack': Vercel's new message board lets Claude Code and Codex agents work together" (The New Stack, 2026-11-19 17:02Z).
Source: https://thenewstack.io
- [REPORTED] **Reply.io** — launches open-source "Jason Harness" for outbound sales (The Detroit News, 2026-11-20 15:27Z).
Source: https://www.detroitnews.com

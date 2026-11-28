# Findings — agentic-cli-tools / community / 2026-11-20
Window: 2026-11-19T01:28:00Z -> 2026-11-20T01:28:00Z

Method note: primary in-window source is a 36-query Google News RSS sweep (tmp/2026-11-20/gn_community/q1..q36.xml), parsed to pubDate in-window -> **735 in-window items** (212 non-Reddit press items, 523 Reddit-sourced items). Reddit items are surfaced only as titles via the Google News reddit index (Reddit direct is hard-blocked). HN via hn.algolia.com API. Quote/OHLC data via Yahoo Finance chart API. Google News links are used where the outlet's canonical article URL could not be resolved.

---

## Press & Market

### Anthropic (NASDAQ: ANT) day-one trading — the prior cycle's key open question, now CLOSED [VERIFIED]
Yahoo Finance chart API (`https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d`, HTTP 200, fetched 2026-11-20T01:56Z; raw: tmp/2026-11-20/comm_ant_7a2cff.json):
- Open: **$111.50** (first trade $111.50, +34.3% over the $83.00 IPO price)
- High: **$115.10**
- Low: **$92.72**
- Close: **$97.17** (+$9.60 / **+17.07%** vs the $83.00 IPO price = `chartPreviousClose`)
- Volume: **851,818,130 shares** (~852M)
- `regularMarketTime` = 1795122001 = **2026-11-19 21:00:01 UTC** = the 16:00 ET close (so this is the final day-one print, not an intraday snapshot)
- Meta: `longName` = "Anthropic, PBC"; `fiftyTwoWeekHigh` = 115.10 (= day-one high, i.e. no day-two trade yet in this window); `fiftyTwoWeekLow` = 92.72 (= day-one low)
- Note on `fulldayChangePercent` = 11.566 vs `regularMarketChangePercent` = 17.072 — the two Yahoo fields disagree; the OHLC-vs-83.00 arithmetic (+17.07%) is self-consistent with the reported close of $97.17.

Read: the classic "pop and fade" debut — **+34% at the open, +38% at the high, closing +17%**, giving back roughly two-thirds of the intraday gain and ~16% off the $115.10 high (Barchart: "ANT Stock Is Down Nearly 17% from Its Quick Post-IPO Pop").
Source: https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d

### ANT open print $111.50 confirmed by multiple outlets [REPORTED]
- The Hill: "Anthropic opens at $111.50 per share after largest IPO ever" (2026-11-19T19:04Z)
- BeInCrypto: "ANT Stock Opens at $111.50 on Nasdaq: How Anthropic's Debut Compares With SpaceX"
- Eurasia Business News: "Anthropic IPO: ANT Stock Opens at $111.50 After Record $81.3 Billion Offering"
- Yahoo Finance: "Anthropic officially IPOs on the Nasdaq — with shares at $111.50"
- Yahoo Finance UK: "Anthropic shares open 34% above IPO price in Nasdaq debut after record listing" (+34%)
- Yahoo Finance: "Anthropic stock's first trade was worth $12 billion — 34% above its IPO price"
Source: https://thehill.com/ (Google News item: https://news.google.com/rss/articles/CBMifEFVX3lxTE5qUU5nN3A1M3ZxVWFmSTY3bk5idUhnMnRSVDBRN2V3d1pFYWhSSGxMcUhJZGRJbnVGYWZCN3dRaTJLQXVsRW15RjA3V2dyTkhRM)
Source: https://beincrypto.com/ (https://news.google.com/rss/articles/CBMibkFVX3lxTFB5Vld2OTZzWm1mYUp5SGlDS1hMSnB0OXdGYVBrVDZtQ2FpaVg0SzNJMmV4dThGdGlvSjcxLTlxZWhCVEhfeHdUTF9Td2xlOFJvV)
Source: https://eurasiabusinessnews.com/ (https://news.google.com/rss/articles/CBMiugFBVV95cUxPMkhTc29YcGxwUHFBTXFTdXpGM1RoZGJCUldWOFdTbkxVcnpRLTB4SlNHaGpvLTQ0X1I3Mm5uWWx0Tkx2eXZ4ajN4SzRPRVdKU)

### ANT close $97.17, +17% — the debut "fails to revive AI fervor" [REPORTED]
- Forbes: "Anthropic IPO Live: Stock Closes Day At $97—Up More Than 17%" (21:08Z)
- Fast Company: "Anthropic stock closes 17% higher on its first trading day as Nasdaq sputters" (21:38Z)
- Bloomberg: "Anthropic Shares Jump 17% After $107.3 Billion IPO Breaks Record" (21:36Z) — note Bloomberg cites a $107.3bn figure, i.e. including the 147,000,000-share over-allotment (base $81.3bn), which differs from the headline $81.3bn raise in the baseline.
- Benzinga: "Anthropic Stock Cools From Opening Pop But Holds Well Above IPO Price" (20:25Z)
- CoinDesk: "Anthropic gains after IPO, but pulls off highest levels" (23:36Z)
- Startup Fortune: "Anthropic Stock ANT Falls 15% After Its Intraday High, Off to a Very Turbulent Start" (21:41Z)
- Barchart: "ANT Stock Is Down Nearly 17% from Its Quick Post-IPO Pop." (20:51Z)
Source: https://www.forbes.com (https://news.google.com/rss/articles/CBMirgFBVV95cUxOY05tbXdPVUlQLUxjRkhYSmRXV1AxY1BGS1dELVJKOFd0ZklWcXpmdXBtNG5lX0JTZlRaZGNrYi1ZM0Utc3ctU3Fvc1F1SmJSb)
Source: https://www.fastcompany.com (https://news.google.com/rss/articles/CBMinwFBVV95cUxOazB0eDVuenVVTXVRNFRNRkxuenQ1T29oVHJ2c1NCNGl2TG4xTEZQWXhmQTlHYW00cW1OYXRVNWw1and4TGMtRVRKNExBV2U5N)
Source: https://www.bloomberg.com (https://news.google.com/rss/articles/CBMisgFBVV95cUxNRXRrX1hfTVJkTGR5Z3pCeDhWUGhZUm9MaWpkVGVQQUdVVExTUDhkY28wRzJmNmJ0YW1DNmZCOHNCUzZaeUlVdW1QZ0VkNjU4a)
Source: https://www.benzinga.com (https://news.google.com/rss/articles/CBMivwFBVV95cUxNcVRqMkg1LXA5d1ZuN0toczdycGpucF91V2k2Wm5aXzBHR3pxT0xvbTVuZWJpQ1FWNUIzdEI0RERlaVFBZEhXNnNfRndteWlPT)

### ANT intraday peak implied ~$2tn market cap [REPORTED]
- Yahoo Finance: "Anthropic's Nasdaq Debut Hits $2 Trillion, Breaks IPO Record" (17:32Z)
- Fortune: "Anthropic stock pops 30% to $2 trillion market cap, in mega IPO" (15:28Z)
- shattered.io: "Anthropic IPO: Opens Above $2T, Raises $81B" (17:30Z)
- Yahoo Finance: "Anthropic stock pops 30% to $2 trillion market cap in mega IPO" (15:28Z)
At the $115.10 high, ~$2tn is consistent with the ~$1.5tn valuation at $83.00 ($83 -> $115.10 is +38.7%; $1.5tn -> ~$2.08tn). At the $97.17 close the implied cap is ~$1.76tn.
Source: https://finance.yahoo.com (https://news.google.com/rss/articles/CBMimAFBVV95cUxOelVXbmpTMmtoTGFUckttSmlaRjQya05fa0RJc2N4aG13ajNvZ2hPZnlYejM3UGZ3WldobzdoX2VtbG16SzFFQ3FLUkRnOEd1a)
Source: https://fortune.com (https://news.google.com/rss/articles/CBMilgFBVV95cUxNSjh5ZjFfdTFGTU5Zd3k0bUs4eFFiSElKemItb1I1OG5OU0xyR1RuZWZKQ0xOcDVlU0w1S09mWThZeTFTeWtDamF3cnBsalhha)

### The debut became a market-wide risk-off event: investors dumped AI stocks to buy ANT [REPORTED]
- WSJ: "Investors Dumping AI Stocks to Buy Into Anthropic Send Tech Shares Lower" (20:22Z)
- Yahoo Finance: "Wall Street ends sharply lower as Anthropic's debut fails to revive AI fervor" (21:00Z)
- Yahoo Finance: "Nvidia, AMD, Micron Sink as Anthropic Closes 17% Above IPO Price" (21:12Z)
- IBD: "Anthropic IPO: AI Giant Rallies As Tech Stocks Slide" (21:24Z)
- IBD: "IBD Stock Of The Day: Amazon Chases Entry As Anthropic IPO Swings AI Sentiment" (21:39Z)
- Barron's: "SpaceX Stock Fails to Reach Orbit After Anthropic's Blockbuster Debut" (21:15Z)
- Reuters: "Anthropic's blockbuster debut tests Wall Street's faith in AI boom" (22:18Z)
This is the notable market-structure story of the window: ANT's +17% close coincided with a sharply lower tape, i.e. capital rotation *into* Anthropic *out of* the rest of AI.
Source: https://www.wsj.com (https://news.google.com/rss/articles/CBMitwFBVV95cUxQdFNYN21fTE9wTk80YmxDNU96RlIzdnluRmtKMklDMVAxX1dEa1hGQzBNd1g2QUpBVUdLYVFLeVltUHR2b0MzSzJNMS1LX1VCU)
Source: https://finance.yahoo.com (https://news.google.com/rss/articles/CBMimwFBVV95cUxNVHRjdGpScDJXeWZMVER5aklNTTZQZVEzVGE1R0ktNTVEZW5aU283ajRXTGpBSGs0TjdTZHFha0ROamRxMDJiVC1YRFpkNXhNT)
Source: https://www.reuters.com (https://news.google.com/rss/articles/CBMiswFBVV95cUxPVmU0cXVPRUhwcDZpRkRudEI3bjNfMllQVEN3M09VWFNmQUJTck1UUE9mVERRbmFicElZMWxKVnd3UWpTNGY3R1JiZ0NnRnNBR)

### Analyst / commentary notes on ANT [REPORTED]
- Benzinga: "Damodaran on Anthropic's IPO: 'Pay Attention to the Footnotes'" (23:48Z) — Aswath Damodaran's flagship valuation critique of the IPO.
- Barchart: "Needham Initiates Coverage of Anthropic With 'Buy' Rating Amid IPO" (20:46Z)
- Seeking Alpha: "Anthropic Stock: A Strange Time To Be Sensible (NASDAQ:ANT)" (00:42Z); "Beyond The Anthropic IPO: Top AI Stocks For The Next Phase Of The Secular Bull" (22:51Z); "Don't Buy The Anthropic IPO: Buy These 3 Stocks Instead (NASDAQ:SMH)" (15:39Z)
- Morningstar: "Should You Buy Anthropic Stock at Its IPO? Here's Everything to Know Before Deciding" (16:13Z)
- Yahoo Finance: "Jim Cramer's Warning for Anyone Buying Anthropic Stock: Use a Limit Order" (22:07Z)
- NYT (via HN, 7 points): "One of Anthropic's Biggest IPO Winners Feels a Bit Uneasy About the Whole Thing" — the Dustin Moskovitz / Sound Ventures piece
- Forbes: "Anthropic IPO Live: Stock Closes Day At $97—Up More Than 17%"
Source: https://www.benzinga.com (https://news.google.com/rss/articles/CBMisAFBVV95cUxOWmxiSUwtaW1yMXFWYWdCY0FGdGh2OHFhU0VGV0RUa0V2aV9JVVpVZDh2U1NQQ0R6TXVYZ0Jhd05DRHJBUDdwbVk3UUt6UDBPc)
Source: https://www.barchart.com (https://news.google.com/rss/articles/CBMirAFBVV95cUxNQTcyVS1LeWhYTExldzRpeXBodXU1bmhsaHpjSWQ4akxEQlYybTNJeU05djdJRTY0ZjQzQ1F5TFdXSWJtZWZ2NkNHWi03MUhkO)
Source: https://www.nytimes.com/2026/11/19/business/anthropic-ipo-dustin-moskovitz.html

### Retail-demand color on the IPO [REPORTED]
- Yahoo Finance: "Retail traders pile into Anthropic IPO, but net buying trails SpaceX" (21:23Z)
- Yahoo Finance Australia: "Anthropic's IPO leaves more than half of institutional bidders without shares" (15:29Z) — resolves the prior window's contested "oversubscription" question in a specific direction: allocation failure on the institutional side.
- Fox Business: "Anthropic makes stock market debut: Who stands to gain from the blockbuster IPO?"
- Fortune: "Sound Ventures turned $435 million into a $7 billion Anthropic stake. Ashton Kutcher left months before..." (20:22Z)
- Yahoo Finance: "'Kind of cool': Early Anthropic investor and actor Ashton Kutcher celebrates IPO" (20:01Z)
- CNN / AP / CBS News / Reuters: "Almost all of Anthropic's employees are now millionaires"; "Anthropic's 7 co-founders are worth about $20 billion each in record IPO payday"; "Who is getting rich from Anthropic's record IPO"
- moneywise: "New York man, 27, drained his Roth IRA and moved about $12,000 to Robinhood for a shot at Anthropic's..." (21:47Z)
- Motley Fool x2: "Here's What $1,000 Invested at Anthropic's IPO Price Is Worth Now"; "Anthropic vs. SpaceX: How 2026's Two Biggest IPOs Stack Up."
Source: https://finance.yahoo.com (https://news.google.com/rss/articles/CBMivwFBVV95cUxNVndiYzNlTGk1Q19QVk9pWEJrM0s3dF9pNEltZWxTcGVVaGsyM2VmQVh4U1JpWFlfNDFWc2UzWmpRM0tYaFVJdFlyRUNERTVsS)
Source: https://finance.yahoo.com (https://news.google.com/rss/articles/CBMitAFBVV95cUxOVXRzd2RaMmI4VFlnVEZyc1RTUHZCNXlSbzBKTURFWl9hTmNoZTBvTEpGbmNfRl9mci1aT1FrdW5JQS1aUVJ0djZfTFRHV1lhc)

### Apple is building a proactive agentic AI project — revealed via job listing [REPORTED]
- Bloomberg: "Apple Is Working on AI Agent for Device Control, Apps, Browsing and Coding" (21:44Z)
- Bloomberg: "An Apple Agent Is Something to Fear for AI Rivals" (00:06Z)
- Macworld: "Apple job listing gives away proactive agentic AI project" (23:47Z)
- Moomoo: "Apple Developing AI Agent for Device Control, Browsing, Coding" (00:15Z)
- explainx.ai: "Apple AI Agent Job Listing: Siri, Sub-Agents, Code" (00:00Z)
- MLQ.ai: "Apple is building an AI agent that can control apps, browse the web and write code, Bloomberg reports" (22:53Z)
Directly competitive to the desktop-assistant / agentic-CLI category tracked here.
Source: https://www.bloomberg.com (https://news.google.com/rss/articles/CBMiqwFBVV95cUxRUczUFlZQTdKd0JNUW5laE5EQ1FDNkVFWFV3M3EyRjZLZmxLQ2ZhbXdmTmZVdXdlWkd3ZUdWMX1dBbmRuZ1Zu? — see Google News item for "Apple Is Working on AI Agent for Device Control, Apps, Browsing and Coding"; exact article link captured in tmp/2026-11-20/gn_rows.json)
Source: https://www.macworld.com (https://news.google.com/rss/articles/CBMiqgFBVV95cUxGUUNBLUFPaGZNY0FhVHJPM3FObVRRbm81a0tla0M4ZU5CQzFqT0thV2lyV2ZVdXg2b1JuaGZ3b2Z4? — full link in gn_rows.json)

### Gemini gains computer-use on Mac — direct competitor move to desktop assistants [REPORTED]
- Android Authority: "Google brings computer use to Mac, letting Gemini handle chores without hijacking your screen" (20:04Z)
- Wisevoter: "Google Adds Computer Use to Gemini for Mac" (20:13Z)
- Techloy: "Google adds computer use to Gemini for Mac users" (18:41Z)
- Crypto Briefing: "Google's Gemini app for Mac can now operate your computer for you" (18:25Z)
- The Tech Buzz: "Google's Gemini Can Now Control Your Mac" (18:33Z)
- HN: "Gemini 4 Neon is the new #1 on the Models Engineering Index" (105 points / 53 comments) — https://git-aarvin.github.io/mei/
Source: https://www.androidauthority.com (Google News item; full link in tmp/2026-11-20/gn_rows.json)
Source: https://git-aarvin.github.io/mei/

### Proton launches a privacy-first desktop AI assistant — new competitor in the desktop-assistant category [REPORTED]
- Tech Edition: "Proton launches privacy-first Lumo Desktop AI assistant for computers" (15:56Z)
Source: https://www.techedition.co.uk (Google News item; full link in tmp/2026-11-20/gn_rows.json)

### Claude Code / Codex / agentic-CLI market & community chatter visible in the press [REPORTED]
- Pasquale Pillitteri: "Claude Code, the Complete 2026 Guide From Installation to Advanced Use" (18:35Z) — sustained third-party tutorial demand for Claude Code.
- shattered.io: "Gemini CLI vs Claude Code: $3/$15 vs $8/$40 Tokens" (19:02Z) — unit-economics comparison of Gemini CLI vs Claude Code token pricing.
Source: https://shattered.io (Google News item; full link in tmp/2026-11-20/gn_rows.json)

### Supplied summary of the trading day (from a daily AI-briefing capture) [REPORTED]
A captured daily market briefing in-window states: "Anthropic makes record US$81 billion IPO debut as shares surge above offer price" (Proactive financial news, 00:46Z), and separately notes "ANTHROPIC: Claude Haiku 5.5 launches about 75% cheaper and lands in GitHub Copilot, but Microsoft and Meta trim internal Claude use and IPO skeptics get louder."
Source: https://www.proactiveinvestors.com (Google News item in tmp/2026-11-20/gn_rows.json)


---

## Reddit (title-level only — Reddit direct is hard-blocked; via Google News reddit index)

523 Reddit items in-window. **ACCESS NOTE:** reddit.com direct returned HTTP 403 for `https://www.reddit.com/r/ClaudeCode/new.json?limit=5`; Google News item links do not resolve to canonical reddit.com permalinks (they redirect to a news.google.com interstitial). Therefore everything below is **TITLE-LEVEL ONLY** — no bodies, no scores, no comment counts, no usernames are asserted. Subreddit attribution is by the Google News query that surfaced the item, not by a verified permalink.

### r/ClaudeCode — harness engineering, drift, compaction, model-tier complaints [UNVERIFIED]
- "Trimmed my Claude Code subagent models and MCP servers using my own session logs. Is this a sensible setup?" — subagent cost routing.
- "56 compactions in 5 days: how I stopped my long Claude Code session from forgetting (compaction in place, no new sessions)" — long-session memory is an active pain point.
- "4,900 commits into a Unity game with Claude Code. The prompts mattered less than what the repo remembers" — repo memory > prompt quality.
- "I added this to my CLAUDE.md to help stop my agents drifting away from what I originally asked them to build" — agent drift.
- "Does your context compression survive the prompt cache? I built a deterministic compressor for Claude Code and Codex" — cross-tool context engineering.
- "I gave Claude Code five apps and five clouds with no credentials" — credential-free cloud access patterns.
- "Code Mode was cheaper on most of my tests but much slower on file edits, so I'd like to choose it per subagent instead of per session" — cost/latency tradeoff per subagent.
- "Opus 5.5 is actually retarded right now !" and "Has Anthropic removed Very High and Max effort from Opus 5.5?" — capability / effort-tier regression complaints.
- "What Claude Code plugins are you guys using?" — plugin ecosystem chatter.
- "A mystery model Gestalt is beating Claude Fable 5.2 in frontend design tasks"
Source (compaction): https://news.google.com/rss/articles/CBMinwFBVV95cUxPUnA0Sl8yTk5LdEM4VU5VZHg4OV9PbkJhbl9YMHE3Q0hrNVR6Q0F1NjFYbjdvSDJDMGttTW5GUVN2NkVKZmVPMWtnNXY1VUVCemNkRnRzTkVNUHN0WFVCTGp6ZGQyXzZFUTVoQkJGYWdsMklsems0VHhLaDl6NEpfaFdtdVY4Z2hiSEQ2aEJLY1BqVXZPSjZ2ZXB0Zm1ySkE?oc=5
Source (Unity/4900 commits): https://news.google.com/rss/articles/CBMiowFBVV95cUxOUVV3VDFLekZUUHJEdG5VSDVydUtPdVhGQmVHWEt6VUhrcDVpUWN5ZUV6SEMxdDlVUEp4WnlQVXF3clJIUThTb2hKeXdwRThJSEUteFVFNmQ0U3FZUmVhWUpMSjVveE9EcWtaTVVsMEcybXh1UmM1MWpwNVRaQkFWbldSRXlYdjFSU282WS1XRV9BY3FwUnN0Qm9URVgtYnlUU2I4?oc=5
Source (Code Mode): https://news.google.com/rss/articles/CBMingFBVV95cUxQU2FVRVBrTGM4UkFNVjgweVI4aV9pelFCS011SzduUXNnMTQwOFR1ZGY5NzFxM1dpNE9iZkFULXBKTHFUN0VWMHN4VlNCVi04LTk1ZldnUzlWandwNkpQOG11bGNybmpSekxsckwzWU56WXI2bDhXdVdFcHFKVU1NdGoyN3VaRmJ0MWExbmFkdVJVRV9oS0t1S0dVWlkwZw?oc=5
Source (Opus 5.5 effort): https://news.google.com/rss/articles/CBMinwFBVV95cUxPNXJ6T0s3SkJGZHlpekw2ZWRIajBGOHIxaWQ2OGJSeUllYWQxUWZJaUprWHU1cm5zWjktRFdsR21KTDdFUzh3UFV5dFV6MmduNW41b2tlTUZNUjNybEhrZlNXeWFNWlBLSEFMWjNwTkZpcVlJR0gxZjNjTkxmRXlseUYyZmVWY1d2TnJuZm5LTFFEMy04XzZhU19Vb1g2QU0?oc=5

### r/ClaudeCode — desktop/mobile becoming the new CLI front-end [UNVERIFIED]
- "I can't believe I've been sleeping on Claude Code on mobile"
- "Custom iOS keyboards for Claude Code?"
- "stoplik: handle your desktop Claude Code on your phone, in Telegram or Discord" (2026-11-20T00:00Z — the newest item in the window)
- "An ops dashboard to manage things to do across projects"
- "Project Degredation/CACHE read and when to Restart" — cache degradation over long-lived sessions.
Source (mobile): https://news.google.com/rss/articles/CBMiowFBVV95cUxQb1hteUx1YXBuU2c1SUZtcXNFNDdoQkNHeUs3bm5FQnllSU5qUTFBWkFUZm5NNFpFa1diZ291SkotbXhzQWMtQXdZOWVXT1I5MWQzbTBHWWt0REZWcUZqWV9OZG5jX2F5TVNkSy1SbGtuZkdxWXFsZTJQeHlfZGpmNGZuNGxzeEpCeV8xTlliRWo2bFgxWGRWSEllaHVBRE1oeks4?oc=5
Source (stoplik): https://news.google.com/rss/articles/CBMiogFBVV95cUxPT2ZlSnR5aFpSZ1hEdWJLa3lrOGRDeWpYVEMwOXJOWk8xREl4UGkyUDlDM2x5ZENNWkhFcE9TYmFoUUN2Sm1zNXJOaU1JMEx1SXZSYjNUZmdXTVhKQ29VMzlBVGVCRGJ4b0FLQTJMTG1pSlhxZ2cyOUx3U1RzSGU5NXhvOVpkdmFYRHItdm5fZmN3ZW1KUXktc3ZZWDhzWERCZnc?oc=5

### r/codex + Codex CLI — 0.171.0 release, sandboxing, multi-agent sprawl [UNVERIFIED]
- "Codex CLI 0.171.0 enables the terminal workspace and improves session recovery" (2026-11-20T01:14Z — last in-window item)
- "I built an open source sandbox (o3s) so I can run Codex CLI in full auto across multiple repos without exposing my API keys or net..." — demand for credential isolation in full-auto mode.
- "Running multiple coding agents across all my repos in one locked-down container: a year of lessons"
- "How do you manage multiple AI agents without drowning in their reports?"
- "Built a 100% local year-in-review CLI for Codex (+ Claude Code, Cursor, Pi, OMP, OpenCode, Antigravity, Gemini CLI) — reads .json..." — one tool spanning 7 agentic CLIs.
- "GPT-6 Astra in Codex built the whole Rust backend of my Mac app. Now Codex can hand its legwork to open models" — model delegation / multi-provider routing.
- "I used Codex to migrate Spring PetClinic from JPA to SQL. All 17 checks passed, but review found 2 bugs" — a concrete "tests green but review found bugs" data point.
- "I just Cancelled Codex" (r/ChatGPTCoding) — churn signal.
Source (Codex 0.171.0): https://news.google.com/rss/articles/CBMiqAFBVV95cUxNTHJSd0pVUXJDOHpYSHg0VFZzTXYzQjdOY2ZuaUZ2QmV0VkVGd1dRdm1hZmlpRER5OUI4X1hLZUl5X2FhTzVOc3VjQ3dnQVNXTXlNcVBYZkVFaEdNRERGZkIyTTVPY3FSR1FaSE9DMk4ySHhnc2lmUnFHT05vZW5FMk91aWlsNHFlellwRUprOFhVY2VwNmsySlliQmRNMHZlY0lXRkE0MXY?oc=5
Source (sandbox o3s): https://news.google.com/rss/articles/CBMinAFBVV95cUxPMW8td3hubDBjR2pwZllScDdyYTY2X21tNW1yVGNxVHFnWEkwbDlxZmhka082bUFxSmg1MEpuZlNDa195dElOdVlnZnhyUGd4aGcxdmtiSEVyMk9qWFRnZ2E0WmFaTnZ5c1Z0aWxiNFc5Y2RfZUhudzVURllZSE8wc2YtZEF2S1A2Ykh3MmQ4eHRFaEt1alVnT1ZQdkg?oc=5
Source (Codex local CLI): https://news.google.com/rss/articles/CBMimAFBVV95cUxOcFBvMWlWazY3UXBERDdrWU5JQkZoTjRyVjQzc0p5Y3YyQkVSUmltRE1ocEJNSkRFUDdZMzA0Ujg1QnhOV29YUEZHZ0trSzNtR1dWYzFBcFgxN3lfdVRUaGJTYVctZjJ1OGFxOHdGNmp5YmRMUjVOMkQ2VnJtWXdOdC01dlo5WXMzci1rZzVQOTl3SHI4Q3pWZg?oc=5
Source (cancelled Codex): https://news.google.com/rss/articles/CBMihgFBVV95cUxNSVdDYXZZbTJ3aDhQcXl6dVlXYnRoX0lxdGdvblpMWnlBT0JMWVd2MmRVWjMzdEQzQ1E4ZHZpcjJfdG1zMVFyV0FDdnAxSGd0VUlQSFVPNFVBbHpBdXZwdmNwVmVLSjRLeHNQenlwLUs5NTF0S3FJOUhqSEtRTHBUSkdMckg1Zw?oc=5

### r/ChatGPTCoding — harness fragmentation and IDE-bridged multi-agent workflows [UNVERIFIED]
- "Codex writes, Claude Code reviews: I built an IDE to run that setup without 6 terminal tabs"
- "I got tired of CLAUDE.md, AGENTS.md and .cursorrules drifting apart, so I built a transpiler. Roast it."
- "ChatGPT read/write to Codex. How difficult could it be?"
- "Does anyone else feel like they can't trust Astra/Dot's account of what it's doing?"
- "Wozniak says AI is 'too dry and too perfect' — honestly, that's why I treat coding agents like a straight-A gr..."
- "I feel like the BA has all of a sudden becomes the most important person in a project"
Source: https://news.google.com/rss/articles/CBMipwFBVV95cUxOcFhzeWRVb0Z3RWplQ3FpcHVoWVdacFRVMXdMVFJmYzhYOGgwOUl0YzZaTU5VaDZJbV9JUWUwMWY1dnlZVGtiQUl4TjJyOGxjM2FDaldQUHR5QzctZjl2b0drcV9MUDdaYkIyNXBNc2RhVDFMd2ZJUnk2T2J6Z2FUcU1sR3V2R01HS0NFN0pjNWFIRmY4bmUwek1WNDV5MV80aUlSdG5IWQ?oc=5

### r/opencode — the open-source CLI is now a multi-provider hub; free-tier limits dominate [UNVERIFIED]
- "Use your Antigravity subscription in OpenCode (via official Antigravity ACP)" — subscription arbitrage across harnesses.
- "This update to the desktop app is actually amazing. Lighter and better than using the CLI in WSL now." — **desktop app beating the CLI on Linux**; direct evidence for the desktop-assistant shift.
- "What we learned profiling 281 OpenCode sessions across Qwen, Grok, OpenAI, Anthropic, and local LLMs" — session-level cost profiling at scale.
- "I ran 6 GO models through the same 8 prompts and put all 128 outputs on one site"
- "oc-box: Meet the dashboard"
- "What free or one time payment cloud llms are best for using on opencode?"
- "glm 5.3 flash no more in free ?" / "Daily request limit for Hy4 flash Free?" — free-tier rationing is the dominant complaint.
Source (OpenCode desktop): https://news.google.com/rss/articles/CBMimgFBVV95cUxOU0kzdkF2X0llOUNLMnRoRmJuWVdyWlY4bVYtY25DT1BsNmVYWXY1dUZfRE1QV0VCdUJhazBHRHBQN2I4UW01dWxsQ20tdEFELVpKdU5FRmZvR1RJemI4UlNaeW1lUUp5a0hIc0VUZDM3RFZVQTJPRUg5OWh2NHJtX3ZfUWpwUTdYN2tLSDNTTnAtOHZZV2ZUNWNn?oc=5
Source (OpenCode profiling): https://news.google.com/rss/articles/CBMioAFBVV95cUxQLUhTWGFIVXNtYkNOa2lxMGFnREpLVnpBSzN2cGVMZHQ2YnBHQ0E0UTJ1NG9OWG5vRURueElKVWE3bkVsOUJ3Y29FMFBwNjVjdGI2UEhsNWE3VkFEWlB2VVg3RFlTRGwzU1U1cm9yOTAyS19YV0dRb0Q4VVFlWjFYdmxaQ0RZQ3U3SmFzdFpKOUZnR2lQT1VZN194X0hwb0t2?oc=5
Source (Antigravity ACP): https://news.google.com/rss/articles/CBMiowFBVV95cUxNOEQ1QUdGRFBZY3RhY25JX2xHajRybkFvX0Q4Qi1EYXR1U0NJT2lsLVpkNTRCVEl1Q2FSRThRb2o2eWhLWTl3YTNnUVFWaXlpdUtva2ZFTDRjdHdTajNKbDV3MHoyWkVIUU5VenNxZTRRakFrV2g2SVlFS0UxMWFTVFNYS3NCT0ljVzh4TmprNE9EdDRjaGR6RnZJOWU1YXJHR3VJ?oc=5

### r/AI_Agents — agent oversight, prompt-injection paranoia, cost as the top complaint [UNVERIFIED]
- "What if the biggest prompt-injection risk to your AI agent is your own knowledge base?" — KB-as-attack-surface framing.
- "Why stuffing 50 'DO NOT' rules into a system prompt fails the moment context grows — and the Hot Stove difference..."
- "What's the sneakiest thing that ever spiked your LLM/agent bill?"
- "AI receptionist tools bill in three different units. Here is what 150 calls a month costs on each" — unit-economics confusion.
- "Are multiple AI agents really better than one well-built agent? Or do they add more complexity?"
- "Why adding more sub agents usually makes your pipeline worse"
- "One rule that made my agent way less annoying: it only messages me if I'd be upset not knowing"
- "Cisco lead on rolling personal agents to 90,000 employees: the payoff was scheduled tasks, not document retrieval" — **named enterprise deployment**; the press echo is TechGig: "Microsoft CEO Satya Nadella: AI to change employee roles" (21:33Z).
- "Looking for an Enterprise Agent Platform" (r/ClaudeAI) — enterprise buyer demand for agent platforms.
- "How an agent could end up confidently citing a benchmark score that was corrected six weeks ago"
Source (prompt injection): https://news.google.com/rss/articles/CBMiowFBVV95cUxOQVpLWjZBeE9LS3c0T0Y4dFJFbVprQzBKbEk2OVNDdzk0Y0VBeGJwemNuWkZMeFp6S3dwbWU1RFhET2UzYWFpcTRCbEQ0bDFrQl83bThjZkFGM1VwMWw3R21jSjZ4TVFubnJ1RjBSTXRnUkp6UllFLVZpY3ZqQzNIOENBYU52Zml3SVI1dERGbGVUWTlsY1JLZkx6czJKZjZCUmdB?oc=5
Source (Cisco 90k): https://news.google.com/rss/articles/CBMioAFBVV95cUxNTmJLWjE5SXlnQXFRT2F1dXZ0bGpVNktTcGpjQ1dvVGJaalo2OHo1UW9IUzFBR0F6YlhSNW5iTFh5MDRqQ0VodGwyNGFfNXVYdWZMTnY4X1pNZUdUX3dkcnZBaE1yYlJqcUtwRTdBdGxQVmh3SmRDenJoTkcyZ2ZjVXR3eFIyWHRpWVN4YlBNN3pGOUVoZEpHanhwLVgwTE53?oc=5
Source (Enterprise Agent Platform): https://news.google.com/rss/articles/CBMilwFBVV95cUxPelYzRm9fM3VUNjJBR3lPMFJrQVJuQjB1QW1aY2F1Q0xUSWhOZjVlOFJoc0pzLTFjaTljczg0VnBLalB0MDJuam5uT3Q3SUM1T1o5TTRfWHlkcHBNOEoxQmNhRzBEcU8yVUJUejJsT2hhcTUzNTdodUtZMk9tTWNnTXhlOHN0em1EdG1vSjRNUk9PUFF1a1BN?oc=5

### r/LocalLLaMA — harness-level gains now beat model-level gains; open weights move fast [UNVERIFIED]
- "Gemini 4 Neon jumps 3x on SWE-sweep (12.8% to 39.0%) solely by changing the harness — are we benchmaxxing the wrong layer?" — **harness > model** claim; same thesis as the top HN story.
- "We open-sourced a new mixing harness: Intern. On terminalbench: Opus+Hy4 Flash match Opus performance at ~half the cost" — ~50% cost reduction via harness/model mixing.
- "Basalt 0.5.0: Tencent Hy4 Flash with 1M context and vision, 84 to 172 tok/s on a 5090 + 5060 Ti (NVFP4)"
- "AMD x Unsloth: Unlocking the World's First NPU for Unsloth Desktop"
- "Let Hermes drive my signed-in browser without a remote-debugging port" — browser-automation safety.
Source (harness SWE-sweep): https://news.google.com/rss/articles/CBMioAFBVV95cUxQbXdWZDN2YVNERk1zR0ZqNUt4aVpqT245RjJOVVhWRXQwemc5NWlOTE9tYVZyMGxlWGpCbmVELVN1cHpYVnFUY2YxN0pnam5iNHdhaEpYTHg5WW1DZk9IS01KaFBRZGNpLVJDNHh5Q1JpV25WSnNlVVZXWlk2aGg3bF9fWExwTzJSRVNuSXpJUDJidWJlbFlOWDZDM1VEMnln?oc=5
Source (Intern harness): https://news.google.com/rss/articles/CBMioAFBVV95cUxNWW8wTzMxLWdXOGxCM0xEUUdUck16ZXpFNWl1aDZBZENUamF2dmpFUkl1ZUtKOVFwbVBudmZIVmJYMV9heHBZQm10RHhJWDE3TGxPNjlXbGh4T3UyYVpoeWpLai15S1kyckNITVJHQlppOGg2eEdmQ1NyNURqM3JMSnYtajAxZWIzbjNXOUxBdlRiZlJKcnBDOGQydllNaWZK?oc=5

### r/singularity — IPO-day macro discussion [UNVERIFIED]
- "Anthropic Reached 2 Trillion Dollars on the First Day, while Visa, Master, JPMorgan Chase Were Hacked on the S..."
- "Anthropic IPO live: The company sold 980 million shares at $83 each, raising $81.3 billion."
- "OpenAI reveals its researchers are using AI agents 11x more than before, with multiple AIs working simultaneou..."
- "Microsoft CEO believes that every employee will one day become a manager of agents, rather than a person direc..."
Source: https://news.google.com/rss/articles/CBMipwFBVV95cUxNRHg4N1h4Tlh3NjhxNVVSbHhMOTdydnFyV2p1Rmdqblh4U0lJSnk0UE1BQTlDZmQ5bVp6d0tFWGxWOWl3TG9ObHZXTTUwTmlDYXFXb1R5UEx4aloyY1lPVTJ4MV82TzhMTW9xOXN3aVBGN1lpTzloZzYxakx6QWxTVi1lTlB4MEpxZkY3M0hMLXpXd3JiZXRDOUhodnRfR3dXbTBIOHFPdw?oc=5

### r/GeminiAI — live model-lineup crisis: Gemini 4 Argon withdrawn, Neon substituted [UNVERIFIED]
Largest single-subreddit cluster in the window (39 items from the r/GeminiAI query): "Model unavailable Gemini Argon in AI Studio"; "RIP, Argon (2026 - 2026)"; "No Argon. Only Hydrogen and Neon."; "Did they take Argon away from pro users?"; "So, no more Argon for Pro users?"; "Neon now removed from Pro plan?"; "Is it me or Gemini's Neon is completely Trash? Is there any way to bring back Argon?"; "Gemini 4 Will Return: Shipping is continuing."; "Gemini redemption arc?"; "As a Gemini critic... Neon has been very impressive for our team."; "Trail pro who dint get models in antigravity sign the petition"; "Gemini 4 Neon matched Carbon on a PhD-level advanced materials test in half the time".
Read: a **capability-tier backlash plus a plan-tier scramble** around Gemini 4's lineup (Argon withdrawn, Neon substituted, Neon moved off Pro). This is the Gemini-side counterpart to the GPT-6.2 "essentially unusable" backlash already in the baseline.
Source: https://news.google.com/rss/articles/CBMimwFBVV95cUxOZTlWZGFBRVktWFJIT0F6TlNYSmNrNHNwUmRrR2QyX2ZsZnI1N05nZE96Nmo5ZjJUYjUzUVhmdDFJQTdRZjVKc2tCamY5VE9sVVJNdUE2MWlsQlhMWGhFTmRkSXRaRjNyY1ctRy1XTmpZR3UtdkpOWTZyMmdiYUx2VVNFdDNuanNyd0pYNkJYUmZGdHFTdHl0NjBLTQ?oc=5

### r/OpenAI — GPT-6.2 reliability complaints persist into day two [UNVERIFIED]
- "It's not your fault or bad prompts, GPT 6.2 Astra&Sol are just insufferable"
- "GPT 6.2 SOL is forgetful"
- "6.2 can't get things done"
- "PSA: On Plus, 15 hours of Luna cost me less usage than 30 minutes of Sol" — concrete usage-metering disparity.
- "5.6 Luna now nerfed post 6.2 sol release"
- "GPT Sol 6.1 vs Sol 6.2 - a simple prompt comparison - plus account"
- "OpenAI forum threads this month report 'Context window full' locks that force a new chat, including from paid" users.
- "My ChatGPT account was BANNED for 'Election Interference' while I was ASKING ABOUT ELECTION RESULTS."
Source: https://news.google.com/rss/articles/CBMinwFBVV95cUxQeFIxc0o2RnNJXzZGMnNYT01TWEFJX2NwRktNRVIwSVhKOXJKVUthVWFxREY5ZGxZY29GS1JXMk5vZHg0RGhXNFlsVl8tZ1dFUlBkaTVETjFxLTA4LVNpZlEzcUFTX1dJaGpOVW9tdHpYaU9HMDdMS3RKWXp1QlBrN2FYVUthOEwyanBtcHBQTHVCLWxtLTZkU0FrOU5PUFU?oc=5

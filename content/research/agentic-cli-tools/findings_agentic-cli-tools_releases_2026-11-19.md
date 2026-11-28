# Findings — Releases — 2026-11-19

**Window covered:** 2026-11-18T01:28:00Z → 2026-11-19T01:28:00Z (72 h nominal, but the **only new material is what appeared after 2026-11-18T01:28Z**; the Nov 17 cycle never ran and the Nov 18 cycle captured up to 2026-11-18T01:28Z, so Nov 17 material already in the baseline is not repeated).

**Baseline (read, not redone):** `findings_agentic-cli-tools_releases_2026-11-18.md` — VERIFIED capture of releases 2026-11-16 → 2026-11-18. Raw captures reused from `tmp/2026-11-18/` (~240 files).

**Method:** `curl` via `exec` against primary sources (GitHub Releases API, npm registry, OSV, SEC EDGAR, Anthropic newsroom, vendor sitemaps, RSS). Raw captures in `tmp/2026-11-19/` (259 files: `rel/*.json`, `npm/p*.json`, `osv_*.json`, `cc_sitemap.xml`, `anthropic_sitemap.xml`, `ant_sub_*.json`, `exfees.htm`, `s1mef_main.htm`, `8a12b_1119.htm`, `ANT_cert.pdf`, `anth_ipo_pricing.html`, `nasdaq_*.json`, `yf_ant*.json`, `stooq*.csv`, `av_ant.json`, `new_bodies.txt`).

**Web-search / web-fetch tally: 1 `web_search`, 1 `web_fetch`** (cap was 4 / 1). The single search located the pricing announcement; **every material fact below was then re-verified against a primary source (SEC filing or Anthropic's own press release)**.

**Label convention:** VERIFIED = primary source retrieved directly. REPORTED = named news outlet with URL. UNVERIFIED = headline/social only.

---

## 1. Releases by tool — NEW after 2026-11-18T01:28:00Z

### Claude Code — v2.1.328 (VERIFIED, full 19.2 KB changelog body)

- **GitHub release `v2.1.328`, published 2026-11-19T01:14:04Z** (stable). npm `@anthropic-ai/claude-code@2.1.328` published **2026-11-18T23:09:39Z**; `@anthropic-ai/claude-agent-sdk@0.3.328` at **2026-11-18T23:13:27Z**. Both `latest` and `next` dist-tags advanced to 2.1.328 / 0.3.328.
- Headline item: **auto mode for Claude Opus 4.6 and Sonnet 4.6 on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and the Claude apps gateway** — interactive sessions with no permission mode now start in auto mode; `disableAutoMode` turns it off. Auto mode is no longer a desktop/Claude-only experiment.
- **Other new capability items:** `"onFailure": "block"` for `mcp_tool` hooks (a failing MCP hook now blocks the action, matching command/HTTP hooks); `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME`; policy-plugin `allowManagedModsOnly`; OpenTelemetry exporter "no endpoint → data likely lost" warnings; self-hosted-runner `--repository-folder`, `--hook-label`, `--metadata key=value`.
- **Notable fixes:** zsh `=cmd` expansion bug (`echo ====`), automatic compaction reusing the stale system prompt, markdown rendering freezes, Esc lost at permission prompts, MCP tools with `anyOf`/`oneOf`/`allOf` schemas going missing on third-party providers, and "effort being turned off for a subagent's model … (regression in 2.1.327)".
- Release-note doc page `docs.claude.com/en/release-notes/claude-code` already lists **2.1.328** (in sync with npm).
- Source: https://api.github.com/repos/anthropics/claude-code/releases
- Source: https://registry.npmjs.org/@anthropic-ai/claude-code
- Source: https://docs.claude.com/en/release-notes/claude-code

### Claude Code GitHub Action — 3 releases (VERIFIED)

- `v1.0.281` @ 2026-11-18T05:13:31Z — apply the session's git settings to the action's own commands; **skip fork pull requests** in `claude.yml`; new `allow_fork_prs` input.
- `v1.0.282` @ 2026-11-18T16:50:35Z — send Bun commands in `claude.yml` to safety review; remove unused prepare entrypoint; keep prompt runs scoped to the actor's own comments and the step's output files.
- `v1.0.283` @ 2026-11-19T01:17:29Z — release-notes template only, no substantive body (188 bytes). Source: https://api.github.com/repos/anthropics/claude-code-action/releases

### OpenCode — v2.3.2 (VERIFIED)

- **GitHub `v2.3.2`, published 2026-11-18T01:35:12Z** — 7 minutes after the baseline cutoff, so genuinely new. Sole highlight: **GPT-6.2 prompt caching** — GPT-6.2 models do not cache a system prompt sent in the Responses `instructions` field, so every step re-billed it as uncached input; OpenCode now sends it as a leading developer message on every Responses route (OpenAI API key, ChatGPT sign-in, GitHub Copilot, Zen, Azure, OpenRouter). On GitHub Copilot `gpt-6.2-sol`, uncached input per step dropped from ~14,000 tokens to 3.
- **npm `opencode-ai` `latest` is still 1.19.6** — the v2 line still ships only via GitHub releases / the background download path (see §2).
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.2
  Source: https://registry.npmjs.org/opencode-ai

### OpenAI Codex CLI — new stable 0.170.0 + 3 alphas (VERIFIED)

- **`rust-v0.170.0`, published 2026-11-18T03:40:48Z** — stable, real body: **WebRTC negotiation for realtime voice calls in the TUI**; auto-refreshed auth headers for OpenTelemetry HTTP exporters; experimental identically-named MCP servers across environments; oversized-WebSocket fallback to HTTP; MCP OAuth credential races fixed; improved reconnect for Cloud conversations; Windows file-replacement and sandbox-permission fixes.
- **Codex npm `@openai/codex@0.170.0` published 2026-11-18T03:45:45Z**; `latest` 0.169.1 → **0.170.0**; `alpha` → **0.171.0-alpha.13**; platform `alpha-*` tags now point at 0.172.0-alpha.1 builds. 25 new npm versions since the previous cycle.
- **Three in-window alphas are content-free stubs** — `rust-v0.170.0-alpha.4.2` (2026-11-18T01:52:33Z), `rust-v0.171.0-alpha.13` (05:47:55Z), `rust-v0.172.0-alpha.1` (17:54:54Z) — each body is literally `Release <version>`. Confirmed across the whole alpha series.
  Source: https://api.github.com/repos/openai/codex/releases
  Source: https://registry.npmjs.org/@openai/codex

### Gemini CLI — v0.70.0-preview.0 (VERIFIED) — breaks the 14-day silence

- **GitHub `v0.70.0-preview.0`, published 2026-11-19T00:09:03Z** (prerelease, 3.5 KB body, 23 PRs). npm `@google/gemini-cli@0.70.0-preview.0` published **2026-11-19T00:14:38Z**; `preview` and `staging-tmp` dist-tags advanced 0.69.0-preview.0 → **0.70.0-preview.0**.
- **Notable fixes:** preserve Unicode prompts / strip ANSI fragments in session previews; preserve selected worktree across auth restarts; scale undici `bodyTimeout` past the 300 s default; accurate output-token limits in `models list`; skip system MCP servers with insecure command permissions; re2js for linear-time policy `argsPattern` evaluation.
- **npm `latest` is still 0.68.0 (2026-11-10)** — the 0.70 line is preview-only; the stable gap is now 9 days, not "no release of any kind".
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0
  Source: https://registry.npmjs.org/@google/gemini-cli

### Zed — 4 releases (VERIFIED) — Zed resumed shipping after a 7-day gap

- **`v1.29.1`** @ 2026-11-18T16:53:02Z (stable, 10.6 KB): Git Panel **branch mode** listing every file changed since a base branch, bookmark picker, `git.date_format`/`date_style` settings, **`agent.auto_generate_thread_titles`** toggle, **Claude Fable 5.2 for Anthropic BYOK** (+ Claude Mythos 5.2 where entitled), ACP agent-config option ordering.
- **`v1.29.2`** @ 2026-11-18T21:44:41Z (stable): official **Snap package for Linux**.
- **`v1.30.0-pre`** @ 2026-11-18T17:26:01Z (prerelease, 14.4 KB): reduced GPU usage, **model picker for AI commit-message generation** (`agent.commit_message_model`), hide-title-bar setting, **GPT-6.1 Terra** in the OpenAI provider, **Extra High thinking effort for Gemini 4 Hydrogen**, keyboard navigation for the agent-thread switcher, Copilot full-context-window use + per-token pricing.
- **`v1.30.1-pre`** @ 2026-11-18T22:35:16Z (prerelease): Snap package for Linux (pre-release track).
  Source: https://api.github.com/repos/zed-industries/zed/releases

### GitHub Copilot CLI — v1.0.114 (VERIFIED, content-free body)

- `v1.0.114` @ 2026-11-18T05:59:26Z (stable). Body is 29 bytes: `2026-11-18\n\nFixes and changes` — **no actual change list**; the previous `v1.0.113` (138 bytes) and `v1.0.114-0` prerelease (17 bytes) are similarly thin.
  Source: https://api.github.com/repos/github/copilot-cli/releases

### Charm Crush — nightly only (VERIFIED)

- `nightly` @ 2026-11-19T00:51:30Z (prerelease). Body is the standard sigstore/cosign verification instructions only — **no changelog content**. **No new stable**: last stable remains **v0.101.0 @ 2026-11-12T16:02:35Z** (17 days).
  Source: https://api.github.com/repos/charmbracelet/crush/releases

### Qwen Code — nightly (VERIFIED)

- `v0.28.0-nightly.20261118.d9ac287c9f` @ 2026-11-18T22:29:34Z (prerelease, 8.3 KB); npm `nightly` advanced from 0.27.4-nightly.20261116 (published 2026-11-18T22:53:10Z). Notable: **GitHub added as the third managed channel adapter**, unified web-shell chat-surface contract + capability guards, `/send` to another session, managed-agent Harness admission recovery.
- Stable `latest` remains **0.28.0**; `preview` 0.28.1-preview.0 unchanged.
  Source: https://api.github.com/repos/QwenLM/qwen-code/releases
  Source: https://registry.npmjs.org/@qwen-code/qwen-code

### Amp (Sourcegraph) — 7 dev builds (VERIFIED)

- npm `@sourcegraph/amp` `latest` advanced `0.0.1794945632-gf6a800` → **`0.0.1795046458-g1dcfdb`** (published 2026-11-19T00:23:31Z). Seven new dev builds in-window (Nov 18: 04:28, 08:26, 10:32, 12:27, 16:31, 20:28; Nov 19: 00:23). No tagged release. Source: https://registry.npmjs.org/@sourcegraph/amp

### Verified negatives — no new release after 2026-11-18T01:28Z

- **goose (`aaif-goose/goose`)**: newest is still `v1.60.1` @ 2026-11-18T01:21:19Z (7 min *before* the cutoff → already in the baseline). Nothing new.
  Source: https://api.github.com/repos/aaif-goose/goose/releases
- **Kilo Code (`Kilo-Org/kilocode`)**: newest still `jetbrains/v7.2.1-rc.8` @ 2026-11-17T14:57:09Z. npm `@kilocode/cli` unchanged: `latest` 7.8.27, `rc` 7.8.30, `next` 1.0.8, `kilo-v2` 0.0.0-v2-141.
  Source: https://api.github.com/repos/Kilo-Org/kilocode/releases
- **`cline/cline`, `continuedev/continue`, `Aider-AI/aider`, `microsoft/vscode-copilot-chat`**: zero releases in-window (30 most recent releases checked each).
  Source: https://api.github.com/repos/cline/cline/releases
- **Crush stable**: none (v0.101.0, Nov 12). Source: https://api.github.com/repos/charmbracelet/crush/releases

### Company announcements in-window

- **GitHub changelog, Nov 18–19** (VERIFIED, RSS): "Security risk assessments run automatically on GitHub Team", "Customize GitHub Copilot for your team", "**Gemini 4 Neon in GitHub Copilot**", "Connect Supabase, Box, Calendly, and more to Copilot", "**Wait for pull request events with GitHub CLI**" (2026-11-19T00:00:13Z). Source: https://github.blog/changelog/feed/
- **OpenAI RSS, Nov 18** (VERIFIED): "Inside the Codex sandbox", "Research acceleration: The jagged frontier", "The Silent Consensus", "Managing frontier AI risk: From training to deployment", "Le Groupe Figaro and OpenAI partner…". Source: https://openai.com/news/rss.xml
- **Google developer blog**: newest item is still "Read the EmbeddingGemma 2 technical report" (2026-11-17T17:00Z) — **nothing new after the cutoff** (verified negative).
  Source: https://blog.google/technology/developers/rss/
- **Anthropic newsroom — 2 new pages** (VERIFIED): `https://www.anthropic.com/news/anthropic-prices-initial-public-offering` (lastmod 2026-11-18T23:26:25Z) and `https://www.anthropic.com/research/claude-black-hole-physics` (2026-11-18T21:42:44Z) — the latter is **"Claude Fable 5.2 solves two open problems in the physics of black holes"** (black holes and quantum gravity; `datePublished` 2026-11-17). Sitemap grew 593 → 595 URLs; two other touched posts are old (2026-05-07 / 2026-10-06).
  Source: https://www.anthropic.com/sitemap.xml

---

## 2. Corrections vs the Nov 18 baseline

| Baseline claim | Status now | Evidence |
|---|---|---|
| "npm `opencode-ai@latest` still points at the 1.x line though GitHub `v2.3.1` shipped" | **Still true, version advanced**: npm `latest` = 1.19.6 (unchanged), GitHub now **v2.3.2** | https://registry.npmjs.org/opencode-ai |
| "Claude Code npm `stable` dist-tag frozen at 2.1.311" | **Still true**: `{"stable":"2.1.311","latest":"2.1.328","next":"2.1.328"}` — `stable` unmoved since 2026-10-26 (23 days / 17 releases) | https://registry.npmjs.org/@anthropic-ai/claude-code |
| "Gemini CLI: no release of any kind since v0.68.0 (Nov 10); no 0.70.x package line exists" | **WRONG — superseded**: **v0.70.0-preview.0** released 2026-11-19T00:09:03Z (GitHub), published to npm 2026-11-19T00:14:38Z. `latest` still 0.68.0 (stable gap 9 days), so the *stale-latest* part holds, the *no-release-at-all* part does not | https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0 |
| "Codex alphas: real bodies or stubs?" → "still stubs" | **Still true**: all three in-window alphas have body = `Release <version>` | https://api.github.com/repos/openai/codex/releases |
| "`zed-industries/zed` last v1.28.1, Nov 11" (listed as verified negative) | **WRONG — superseded**: Zed shipped **v1.29.1, v1.29.2** (stable) and **v1.30.0-pre, v1.30.1-pre** on Nov 18 | https://api.github.com/repos/zed-industries/zed/releases |
| "No Anthropic IPO documents captured; pricing expected evening Nov 18" | **Superseded** — see §3. Nov 18 filings (S-1MEF, CERT, FWP) and Nov 17 filings (8-A12B, S-1/A) are new relative to the baseline report | https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002130357&type=&dateb=&owner=include&count=100 |
| Baseline "IPO Price Range $70.00–$78.00" (stockanalysis.com still renders it) | The **range was broken**: final price **$83.00** is 6.4 % above the top of the range; the widget is stale while its news feed carries the $83 story | https://www.anthropic.com/news/anthropic-prices-initial-public-offering |
| "IPO expected to price the evening of Nov 18 and begin trading Thu Nov 19" | **Confirmed**: priced Wed Nov 18 (S-1 declared effective Nov 18), trading begins Thu Nov 19 | https://www.anthropic.com/news/anthropic-prices-initial-public-offering |

---

## 3. Anthropic IPO — priced at $83.00, trade begins Nov 19 (the headline event)

### 3.1 Final price and offering size — VERIFIED from Anthropic's own press release

Anthropic, PBC press release "Anthropic prices initial public offering", published **Nov 18, 2026** (`https://www.anthropic.com/news/anthropic-prices-initial-public-offering`, lastmod 2026-11-18T23:26:25Z). Verbatim facts:
- **Priced its initial public offering of Class A common stock at $83.00 per share.**
- **980,000,000 shares** of Class A common stock: **956,351,354 sold by Anthropic** (primary) and **23,648,646 sold by certain selling stockholders** (secondary). **Anthropic receives no proceeds from the secondary shares.**
- Shares **expected to begin trading on the Nasdaq Global Select Market on November 19, 2026 under the symbol "ANT"**; **offering expected to close on November 20, 2026**, subject to customary closing conditions.
- **30-day underwriter option for up to 147,000,000 additional Class A shares.**
- The **registration statement was declared effective by the SEC on November 18, 2026.**
- Prospectus from **Goldman Sachs & Co. LLC** (200 West Street, New York, NY 10282) and **Morgan Stanley & Co. LLC** (180 Varick Street, 2nd Floor, New York, NY 10014).

Source: https://www.anthropic.com/news/anthropic-prices-initial-public-offering

### 3.2 $83.00 confirmed independently inside an SEC filing — VERIFIED

`EX-FILING FEES` exhibit to the **S-1MEF, accession 0001628280-26-074904** (filed 2026-11-18, accepted 2026-11-18T23:42:01Z):
`https://www.sec.gov/Archives/edgar/data/2130357/000162828026074904/s1mef-exfilingfees3.htm`

- Newly registered securities: **Equity — Class A common stock, $0.00001 par value — 178,250,000 shares — Proposed Maximum Offering Price Per Unit $83.00 — Maximum Aggregate Offering Price $14,794,750,000.00 — fee rate 0.000087 — Net Fee Due $1,287,143.25.**
- Note 1 (verbatim, elided): *"…the registration fee is calculated in accordance with Rule 457(a) … based on the number of shares being registered and **the initial public offering price of $83.00 per share**. The Registrant previously registered securities at an aggregate offering price not to exceed **$74,002,500,000** on the Prior Registration Statement. In accordance with **Rule 462(b)**, an additional amount of shares having a proposed maximum aggregate offering price of **$14,794,750,000** is hereby registered, which includes shares issuable upon the exercise of the underwriters' option to purchase additional shares."*
- The S-1MEF cover page confirms the **Rule 462(b) checkbox against prior file number 333-299633** and the Delaware incorporation / IRS EIN 86-1696045 / SIC 7372 / 548 Market Street PMB 90375, San Francisco CA 94104 block. Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074904/anthropic-sx1mef.htm

**Arithmetic (my derivation, flagged as such):** $74,002,500,000 + $14,794,750,000 = **$88,797,250,000** registered at $83.00 = **1,069,850,000 shares**; the 462(b) tranche (178,250,000) covers the upsized offering plus option and is larger than the press release's stated **147,000,000**-share 30-day option. Both numbers are as-filed; no filing reconciles them.

### 3.3 Comparison with the baseline's expected numbers

| Metric | Baseline expectation (Nov 18 file) | Actual (VERIFIED) |
|---|---|---|
| US price | $70.00–$78.00 band (midpoint $74.00) | **$83.00** — **$5.00 / +6.4 % above the top of the range** |
| EEA/Swiss max public offering price | $120.00 ceiling | $83.00 is **well inside** the $120.00 ceiling |
| Shares offered | 825,000,000 (CNBC) | **980,000,000** (upsized ~18.8 %) |
| Primary / secondary split | — | **956,351,354 primary / 23,648,646 secondary** |
| Japan tranche | retail close Nov 17 | Japan FWP (Nov 18) still describes pricing as of "the Pricing Date"; primary gross range ¥473,910,000,000–¥552,895,000,000, 38,461,539–50,000,000 shares |
| Fully diluted valuation | "1.5 T+ debut" chatter (UNVERIFIED in baseline) | **~$1.5 trillion fully diluted** (REPORTED, CNBC) |

### 3.4 Deal size and valuation — REPORTED (named outlets)

- **$81.3 billion raised**, surpassing SpaceX's June 2026 record ($75 B initially, $85.7 B with overallotment); **~980 million shares**; **fully diluted market cap ~$1.5 trillion**; **$26 billion** of new money from Google, Microsoft, Nvidia and AMD at the IPO price, with Amazon and Google each holding stakes valued at over $100 billion. Source: https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html
- Reuters headline (fetch returned **HTTP 401** → headline/snippet only): *"Anthropic clinches biggest IPO ever with $81 billion offering"*, "$81.31 billion". Source: https://www.reuters.com/legal/transactional/anthropic-prices-blockbuster-ipo-83-share-source-says-2026-11-18/
- AP: "priced its initial public offering at $83 per share… above the expected price range and values the AI giant at $1.5 trillion." Source: https://apnews.com/article/anthropic-ipo-pricing-70b660ddf900d90bbf484ecdf1fb441c
- Guardian: "Anthropic set the share price for its debut on the US stock market at $83 on Wednesday". Source: https://www.theguardian.com/technology/2026/nov/18/anthropic-share-price-stock-market-ipo
- Motley Fool (REPORTED, lower confidence on the breakdown): "priced its IPO at $83 a Share… At the original share count, the IPO would raise about $68.5 billion, plus a separate $26 billion private placement." Source: https://www.fool.com/investing/2026/11/18/it-s-official-anthropic-prices-its-ipo-at-usd83-a-share-here-s-what-we-know-and-what-we-don-t/
- TheFly via stockanalysis.com (REPORTED, 2026-11-18T23:35:22Z): "Anthropic confirms upsized 980M share IPO priced at $83 per share". Source: https://stockanalysis.com/stocks/ant/

### 3.5 Nasdaq listing mechanics — VERIFIED from SEC filings

- **Form 8-A12B, accession 0001628280-26-074342** (filed 2026-11-17, accepted 2026-11-17T11:49:44Z): registers **Class A common stock, $0.00001 par value per share** for listing on **The Nasdaq Stock Market LLC** under Exchange Act Section 12(b); Securities Act file number **333-299633**. Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074342/anthropic-8xa12b.htm
- **CERT, accession 0001354457-26-001088** (filed 2026-11-18, accepted 2026-11-18T14:12:34Z), PDF `ANT_8A_Cert_0002130357.pdf` — signed by **Eun Ah Choi, SVP, Global Head of Regulatory Operations, Nasdaq**, certifying that on **November 17, 2026** Nasdaq received Anthropic's Form 8-A 12(b) application, that *"the security described above has been approved by the Exchange for listing and registration upon official notice of issuance"*, and that the 8-A 12(b) is sought to become effective concurrently with the 1933 Act registration statement. Source: https://www.sec.gov/Archives/edgar/data/2130357/000135445726001088/ANT_8A_Cert_0002130357.pdf
- **S-1MEF, accession 0001628280-26-074904** (filed 2026-11-18, accepted 2026-11-18T23:42:01Z) — the Rule 462(b) additional-share registration described in §3.2.
- **FWP, accession 0001628280-26-074628** (filed 2026-11-18, accepted 2026-11-18T01:08:04Z), `anthropicpbc-fwpjapanprospa.htm` — Japanese prospectus; still expressed as the "Initial Preliminary Price Range" with pricing "to be determined on the Pricing Date", primary gross range **$3.0 B (¥473,910,000,000) to $3.5 B (¥552,895,000,000)**, **38,461,539–50,000,000 shares**, and a 120 %-of-range aggregate cap of **$88,803,000,000 (¥14,028,209,910,000)**. Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074628/anthropicpbc-fwpjapanprospa.htm
### 3.6 First trading print — NOT YET AVAILABLE (verified negative, not an access gap)

- The Nasdaq regular session for **Nov 19, 2026 has not opened** as of the close of this collection (≈2026-11-19T01:50Z). `api.nasdaq.com/api/quote/ANT/info` returns `marketStatus: "Closed"`, `lastSalePrice: "N/A"`, `volume/bidPrice/askPrice: "N/A"`, `firstTradeDate` absent; `.../summary` returns all values "N/A"; `.../historical?fromdate=2026-11-18&todate=2026-11-19` returns `totalRecords: 0`. Source: https://api.nasdaq.com/api/quote/ANT/info?assetclass=stocks
- Yahoo Finance chart API: `query1.finance.yahoo.com/v8/finance/chart/ANT` → **HTTP 429 Too Many Requests** on both `range=1d&interval=1m` and `range=5d&interval=1d` attempts (rate limit, not a symbol error). Source: https://query1.finance.yahoo.com/v8/finance/chart/ANT
- Stooq `https://stooq.com/q/l/?s=ant.us&f=sd2t2ohlcv&h&e=csv` → **HTTP 404, body "The page you requested does not exist or has been moved"** (endpoint has no row for ANT yet). Source: https://stooq.com/q/l/?s=ant.us
- Alpha Vantage `GLOBAL_QUOTE` with the public demo key → informational message only, no quote. Source: https://www.alphavantage.co/query
- **Conclusion:** the $83.00 price and the deal size are VERIFIED; **the opening print, first-trade volume and intraday range are simply not observable yet** — they belong to the next cycle's window.

### 3.7 Not-yet-filed IPO documents (verified negatives at 2026-11-19T01:50Z)

- **No 424B4 final prospectus.** `browse-edgar` filtered on `type=424B4` for CIK 0002130357 returns an empty filing list (HTTP 200, zero entries); EDGAR full-text search `q="Anthropic"` restricted to forms `424B4,8-K,EFFECT` and 2026-11-18→2026-11-20 returns **1 hit, and it is not Anthropic's** — it is **McGraw Hill, Inc. (CIK 0001951070)**, form 8-K, EX-99.1, items 7.01/9.01, period 2026-11-18, file no. 001-42764. Source: https://efts.sec.gov/LATEST/search-index
- **No EFFECT notice and no Anthropic 8-K** in the submissions feed. The most recent Anthropic filings remain S-1MEF (2026-11-18), CERT (2026-11-18), FWP (2026-11-18), 8-A12B (2026-11-17), S-1/A (2026-11-17). Source: https://data.sec.gov/submissions/CIK0002130357.json
- **No new file-number chunk** in `filings.files` (empty array) — single continuous filing history.
- The 424B4 is normally filed within a couple of business days of pricing, so its absence at 01:50Z is expected, not anomalous. The press release itself says *"Copies of the final prospectus may be obtained, **when available**, from: Goldman Sachs … or Morgan Stanley"* — i.e. the final prospectus was not yet posted at press time.

---

## 4. Security advisories — NO new advisories (VERIFIED negatives)

Re-queried OSV for every tracked package. **No advisory published after 2026-11-18T01:28Z**, and every count is identical to the baseline.

| Package | OSV total | HIGH | CRITICAL | MODERATE | LOW | Newest advisory |
|---|---|---|---|---|---|---|
| `@anthropic-ai/claude-code` | **30** | **24** | 0 | 4 | 2 | `GHSA-5xjx-9qx6-jcrv` (2026-11-09) — TOCTOU race in Edit tool → writes outside the workspace |
| `@anthropic-ai/claude-agent-sdk` | 0 | 0 | 0 | 0 | 0 | — |
| `@openai/codex` | 2 | 1 | 1 | 0 | 0 | `GHSA-xrxf-jgv3-qmrm` (2026-04-14, CRITICAL) — code execution via malicious MCP config |
| `@google/gemini-cli` | 1 | 0 | 1 | 0 | 0 | `GHSA-wpqr-6v78-jr5g` (2026-04-24, CRITICAL) — RCE via workspace-trust + tool-allowlist bypass |
| `@qwen-code/qwen-code` | 0 | 0 | 0 | 0 | 0 | — |
| `@sourcegraph/amp` | 0 | 0 | 0 | 0 | 0 | — |
| `@kilocode/cli` | 1 | 0 | 0 | 0 | 1 | `GHSA-rpc6-9c4p-j5cg` (2026-05-18, LOW) — sensitive information exposure |
| `opencode-ai` | 2 | 1 | 1 | 0 | 0 | `GHSA-c83v-7274-4vgp` (2026-01-13, CRITICAL) — malicious-website XSS → local command execution |

Source: https://api.osv.dev/v1/query

**Security-relevant fixes shipped without advisory IDs (context, not advisories):** Claude Code **v2.1.328** adds `"onFailure": "block"` for `mcp_tool` hooks and an OpenTelemetry exporter "data likely lost" warning; OpenCode **v2.3.2** fixes prompt-caching billing waste. Anthropic's v2.1.325 note ("Fixed a security issue in how zstd-compressed responses are decoded") is the only explicitly security-worded changelog line in the recent series. Source: https://api.github.com/repos/anthropics/claude-code/releases

**Anthropic status incidents:** the feed contains **no incident created after 2026-11-18T01:28Z**. Latest entries remain 2026-11-18T01:13:15Z (Google Docs connector, resolved), 2026-11-17T18:55:53Z (Apple sign-in on claude.ai/iOS, resolved), 2026-11-16T15:10:15Z (unable to join meetings). Source: https://status.anthropic.com/api/v2/incidents.json

---

## 5. Docs & changelog churn

### Claude Code docs sitemap — churn continues at a similar rate

- `https://code.claude.com/docs/sitemap.xml` → HTTP 200, **2,437 URLs — identical count to the previous cycle (0 URLs added, 0 removed; verified by set-difference against `tmp/2026-11-18/cc_sitemap.xml`).**
- **Touched after the 2026-11-18T01:28Z cutoff: 461 URLs** (271 with `lastmod` on Nov 18, 190 with `lastmod` on Nov 19 — the Nov 19 batch is a single republication stamp at `2026-11-19T01:26:30.541Z` across the locale trees).
- **Comparison of the churn pattern across cycles:** Nov 15 = **0** touched → Nov 16 = **0** touched → Nov 16–18 window = **1,136** touched (baseline) → **72 h window (Nov 16T01:28Z → Nov 19T01:28Z) = 1,282 touched**, of which **103 English `/docs/en/` pages**. The post-freeze rate is **~461 URLs / 24 h**; the previous cycle's 1,136 covered 48 h, so the run-rate is **flat-to-slightly-down**, not accelerating.
- **English pages touched since the cutoff (32, selected):** `channels`, `plugins/mods/api`, `terminal-config`, `web-quickstart`, `permissions`, `plugins/mods/admin`, `plugins/mods/reference`, `network-config`, `security-guidance`, `plugin-evals`, `mcp`, `code-review-pull-requests`, `code-review-troubleshooting`, `remote-control`, `monitoring-usage`, `agent-sdk/subagents`, `agent-sdk/typescript`, `model-config`, `sub-agents`, `agent-sdk/hooks`, `auto-mode-config`, `env-vars`, `hooks`, `permission-modes`, `settings-reference`, `authentication`, `claude-apps-gateway`, `cli-reference`, `vs-code`, `cross-session-messaging`, `errors`, `changelog` — all under `https://code.claude.com/docs/en/` (timestamps range 02:06Z → 2026-11-19T01:20Z).
- **The `/docs/en/auto-mode-config` page (touched 22:47:25Z) matches the v2.1.328 release note "auto mode for Claude Opus 4.6 and Sonnet 4.6"** — auto mode is documented for non-Claude providers at the same time as it ships. `/docs/en/sub-agents` and `/docs/en/agent-sdk/*` continue the agent-teams / SDK thread from the previous cycle.
- **No genuinely new slugs this cycle.** `cross-session-messaging` (prev `lastmod` 2026-11-12) and `errors` (prev 2026-11-17) already existed — they were *touched*, not created.
  Source: https://code.claude.com/docs/sitemap.xml

### Cursor — changelog STILL frozen at Nov 6 (eighth consecutive cycle)

- `https://cursor.com/changelog` → HTTP 200; the only dates present remain **2026-10-13, 10-16, 10-20, 11-05, 11-06**. No entry after Nov 6, 2026. Source: https://cursor.com/changelog
- `https://cursor.com/changelog/api/rss` → HTTP 200 but **0 parseable `<item>` elements** (parse gap, unchanged). Source: https://cursor.com/changelog/api/rss
- `https://cursor.com/changelog/cli` → **HTTP 404** (unchanged endpoint removal). Source: https://cursor.com/changelog/cli
- `https://cursor.com/docs/sitemap.xml` → HTTP 200 (retrieved OK; docs churn continues).
  Source: https://cursor.com/docs/sitemap.xml

### Anthropic newsroom — 2 new pages (IPO post + black-hole physics)

- Sitemap grew **593 → 595** URLs; only two are new: the IPO pricing post and `/research/claude-black-hole-physics` ("Claude Fable 5.2 solves two open problems in the physics of black holes", `datePublished` 2026-11-17). Ten other URLs were re-touched but are old posts. Source: https://www.anthropic.com/sitemap.xml

### Kilo Code

- `https://kilocode.ai/changelog` → **HTTP 404** (unchanged). GitHub Releases API used instead.
  Source: https://api.github.com/repos/Kilo-Org/kilocode/releases

---

## 6. Open questions answered (yes/no + evidence + URL)

1. **Did Anthropic price the IPO, and at what price? → YES, $83.00 per share.** VERIFIED twice: Anthropic's press release (`$83.00 per share`, 980,000,000 shares = 956,351,354 primary + 23,648,646 secondary) and the SEC's `EX-FILING FEES` exhibit to the S-1MEF, computing the fee on "**the initial public offering price of $83.00 per share**" for 178,250,000 Rule 462(b) shares ($14,794,750,000 aggregate, fee $1,287,143.25).
   Source: https://www.anthropic.com/news/anthropic-prices-initial-public-offering
   Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074904/s1mef-exfilingfees3.htm
2. **How does $83 compare with the baseline's expectations? → $83.00 is $5.00 above the $78.00 top of the $70–78 band (+6.4 %) and $9.00 above the $74.00 midpoint (+12.2 %); comfortably inside the $120.00 EEA/Swiss maximum public offering price.** The deal was upsized from the 825,000,000 shares previously reported to 980,000,000.
   Source: https://www.anthropic.com/news/anthropic-prices-initial-public-offering
   Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074628/anthropicpbc-fwpjapanprospa.htm
3. **Is the S-1 effective, and is the listing approved? → YES to both.** The S-1 (File No. 333-299633) was **declared effective November 18, 2026**; Nasdaq's **CERT** (accession 0001354457-26-001088, signed by Eun Ah Choi, Global Head of Regulatory Operations) certifies the Class A stock "has been approved by the Exchange for listing and registration upon official notice of issuance".
   Source: https://www.sec.gov/Archives/edgar/data/2130357/000135445726001088/ANT_8A_Cert_0002130357.pdf
4. **Has ANT started trading, and what was the first print? → NO — not yet observable.** At ≈2026-11-19T01:50Z the Nasdaq session had not opened: `api.nasdaq.com/api/quote/ANT/info` reports `marketStatus: "Closed"` with `lastSalePrice/volume/bid/ask = "N/A"`; historical endpoint `totalRecords: 0`; Yahoo chart API HTTP 429; Stooq has no row for `ant.us`. **No opening price or first-trade volume can be claimed yet.**
   Source: https://api.nasdaq.com/api/quote/ANT/info?assetclass=stocks
   Source: https://stooq.com/q/l/?s=ant.us
5. **Has a final 424B4 prospectus, EFFECT notice, or 8-K been filed? → NO (as of 2026-11-19T01:50Z).** `browse-edgar` for CIK 0002130357 filtered to `424B4` returns zero filings; EDGAR FTS over forms 424B4/8-K/EFFECT for Nov 18–20 returns one hit belonging to **McGraw Hill, Inc. (CIK 0001951070)**, not Anthropic; the submissions JSON still ends at S-1MEF/CERT/FWP (Nov 18) and 8-A12B/S-1/A (Nov 17).
   Source: https://data.sec.gov/submissions/CIK0002130357.json
   Source: https://efts.sec.gov/LATEST/search-index
6. **Any new Claude Code stable release after the baseline? → YES: v2.1.328** (GitHub 2026-11-19T01:14:04Z; npm 2026-11-18T23:09:39Z), headlined by auto mode for Opus 4.6 / Sonnet 4.6 on Bedrock, Google Cloud Agent Platform, Microsoft Foundry and the Claude apps gateway.
   Source: https://api.github.com/repos/anthropics/claude-code/releases
7. **Is the Claude Code npm `stable` dist-tag still frozen? → YES.** `dist-tags` = `{"stable":"2.1.311","latest":"2.1.328","next":"2.1.328"}`; `stable` unchanged since 2026-10-26 (23 days, 17 releases). Pre-existing drift — not a new event.
   Source: https://registry.npmjs.org/@anthropic-ai/claude-code
8. **Did the Gemini CLI 14-day release silence end? → YES, with a preview.** `v0.70.0-preview.0` (GitHub 2026-11-19T00:09:03Z, npm 2026-11-19T00:14:38Z) — but npm `latest` is still **0.68.0** (2026-11-10), so the *stable* line is still stale (9 days).
   Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0
9. **Any new security advisory against any tracked CLI? → NO.** All OSV counts identical to baseline (Claude Code 30/24 HIGH; Codex 2; Gemini CLI 1; Qwen Code 0; Amp 0; Kilo 1 LOW; opencode-ai 2).
   Source: https://api.osv.dev/v1/query
10. **Is the Claude Code docs churn continuing after the freeze? → YES, but flat.** 461 URLs touched since the cutoff (32 English pages) vs 1,136 over the previous 48 h; total URLs unchanged at 2,437 (no new pages).
    Source: https://code.claude.com/docs/sitemap.xml
11. **Is the Cursor changelog still frozen at Nov 6? → YES** (eighth consecutive cycle). Source: https://cursor.com/changelog
12. **Did goose, Kilo Code, Cline, Continue, Aider or vscode-copilot-chat ship anything after the cutoff? → NO.** goose's newest is v1.60.1 (2026-11-18T01:21:19Z, 7 min pre-cutoff); Kilo's newest is `jetbrains/v7.2.1-rc.8` (Nov 17); the other four have zero releases in-window. Source: https://api.github.com/repos/aaif-goose/goose/releases

---

## 7. Access gaps vs verified negatives

**Verified negatives (endpoint retrieved successfully, nothing found):**
- No Anthropic 424B4 / EFFECT / 8-K as of 2026-11-19T01:50Z.
- No ANT trade data yet (Nasdaq session not open; Nasdaq API itself confirms no prints).
- No new OSV advisory for any tracked package.
- No new Google developer-blog post after 2026-11-17T17:00Z.
- No new Claude Code docs URL added (2,437 before and after; set-difference = 0 added, 0 removed).
- No release in-window for goose (post-cutoff), Kilo Code, Cline, Continue, Aider, vscode-copilot-chat.
- No Anthropic status incident created after 2026-11-18T01:28Z.
- Only two genuinely new Anthropic web pages; the other 10 touched URLs are old posts (2026-05-07 / 2026-10-06 via `datePublished`).

**Access gaps (could not retrieve — must NOT be read as "no activity"):**
- **Reddit Atom feeds unavailable**: `r/ClaudeAI/new/.rss` and `r/LocalLLaMA/new/.rss` → **HTTP 429** on every attempt (3 tries each, 14–15 s spacing, browser UA); `r/opencodeCLI/new/.rss` → **HTTP 404** (subreddit may not exist under that name). All produced 0 entries; community-sentiment monitoring is **unavailable** this cycle.
- `https://stooq.com/q/l/?s=ant.us&...` → **HTTP 404** (both plain and `…ohlcvp` variants).
- `https://query1.finance.yahoo.com/v8/finance/chart/ANT?...` → **HTTP 429 Too Many Requests** (`range=1d&interval=1m` and `range=5d&interval=1d`).
- Reuters article → **HTTP 401**; headline + search snippet only.
- `https://api.nasdaq.com/api/company/ANT/ipo?assetclass=stocks` → **HTTP 404** (no IPO-calendar entry).
- `https://www.anthropic.com/news/rss.xml` → HTTP 404 (unchanged; sitemap + page fetches used).
- `https://kilocode.ai/changelog` → HTTP 404 (unchanged; GitHub Releases used).
- `https://cursor.com/changelog/api/rss` → HTTP 200 but 0 parseable `<item>` elements; `https://cursor.com/changelog/cli` → HTTP 404 (unchanged).
- `https://registry.npmjs.org/@roo-code%2fcli` and `https://registry.npmjs.org/@anthropic-ai%2fclaude-code-router` → **HTTP 404** `{"error":"Not found"}` — wrong/unpublished package names, not "no release" findings.
- Tooling note: `curl -w` failed when the package name contained `@`/`/` in the format argument (curl parsed it as a file); worked around by moving the format string out of the loop. Not a network gap.
- `https://www.sec.gov/Archives/edgar/data/2130357/000119312526466201/d189855dex991.htm` → HTTP 404 `NoSuchKey` — I initially mis-attributed this accession to Anthropic; the FTS source metadata shows it belongs to **McGraw Hill, Inc. (CIK 0001951070)**.

---

## 8. New insights (each with Source: URL)

- **Anthropic priced its IPO at $83.00 — above the top of its own $70–78 range — making it the largest IPO in history at ~$81.3 billion on 980 million upsized shares; Nasdaq listing begins Nov 19, 2026 under "ANT".** The price is confirmed inside an SEC filing (Rule 462(b) fee table computes the fee at "$83.00 per share"), not just in the press release.
  Source: https://www.anthropic.com/news/anthropic-prices-initial-public-offering
  Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074904/s1mef-exfilingfees3.htm
- **The IPO's second-order effect hit the agentic-CLI release stream in the same 24 hours**: Claude Code v2.1.328 shipped auto mode for Opus 4.6 / Sonnet 4.6 on Bedrock, Google Cloud Agent Platform, Microsoft Foundry and the Claude apps gateway, and `/docs/en/auto-mode-config` was touched 3 hours later — docs and binary moved together for the first time since the freeze ended.
  Source: https://api.github.com/repos/anthropics/claude-code/releases
  Source: https://code.claude.com/docs/sitemap.xml
- **Anthropic's fee-table arithmetic implies a 1,069,850,000-share registered offering (~$88.8 B) against a 980,000,000-share sale — the greenshoe is bigger than the 147,000,000 shares the press release mentions.** Both numbers are as-filed; the discrepancy is undocumented so far.
  Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074904/s1mef-exfilingfees3.htm
- **GPT-6.2's Responses-API caching bug is now being fixed in every agentic client at once** — OpenCode v2.3.2 (uncached input per step 14,000 → 3 tokens on GitHub Copilot `gpt-6.2-sol`) is the concrete instance of a frontier-model billing defect that only bites in multi-step agent loops.
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.3.2
- **Claude Code's `mcp_tool` hooks gained `"onFailure": "block"`** — a failing MCP hook now blocks the tool action, closing a gap where command and HTTP hooks could already block. Meaningful hardening for anyone gating tool use on MCP.
  Source: https://api.github.com/repos/anthropics/claude-code/releases
- **Zed re-entered release cadence with two stable releases and two pre-releases in one day**, adding Claude Fable 5.2 BYOK support, an agent-thread-title toggle, a Git-Panel branch mode and a model picker for AI commit messages — evidence the desktop-editor agent layer is consolidating on the same model names (Fable 5.2, Mythos 5.2, Terra, Hydrogen) the CLIs ship.
  Source: https://api.github.com/repos/zed-industries/zed/releases
- **The Claude Code docs thaw is running at ~461 URLs/day — flat, not accelerating** — so the Nov 15–16 freeze looks like a one-off publishing backlog that was cleared, not a sustained new documentation cadence.
  Source: https://code.claude.com/docs/sitemap.xml
- **Anthropic's newsroom published a physics result alongside its IPO press release**: "Claude Fable 5.2 solves two open problems in the physics of black holes", both concerning black holes and quantum gravity — a capability claim landing 12 hours before a $1.5 T valuation.
  Source: https://www.anthropic.com/research/claude-black-hole-physics
- **GitHub shipped "Wait for pull request events with GitHub CLI" at 2026-11-19T00:00:13Z** — a Copilot CLI primitive turning the CLI into an event-driven PR agent rather than a poll-on-demand one, landing minutes after Anthropic's pricing.
  Source: https://github.blog/changelog/feed/

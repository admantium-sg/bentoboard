# Cumulative Findings: Agentic CLI Tools Research

**Last Updated:** November 25, 2026
**Research Period:** April–November 2026
**Topic:** agentic-cli-tools | **Window:** 2026-11-24T01:28:00Z -> 2026-11-25T01:28:00Z | **Baseline:** the archived 2026-11-18..2026-11-24 sections plus the last 7 daily reports.
**Note (2026-11-25):** active window now carries the two most recent sections, `## 2026-11-24` (condensed) and `## 2026-11-25` (condensed). The 2026-11-22 and 2026-11-23 active sections were dropped from the active file to stay inside the ~60 KB budget; they remain recoverable in full from `archive/cumulative_findings_2026-11.md` (sections 2026-11-01 → 2026-11-25) and from `daily_reports/`. Reddit entries remain TITLE-LEVEL where bodies were unavailable; access failures are labeled as access gaps, never as absence of activity. Source sections for this cycle: `findings_agentic-cli-tools_releases_2026-11-25.md` (28,065 B) and `findings_agentic-cli-tools_community_2026-11-25.md` (47,788 B); raw evidence under `tmp/2026-11-25/`.

**Note (2026-11-24 backfill):** the 2026-11-24 cycle's append step was interrupted on 2026-11-24 and completed on 2026-11-25 — its findings, full section and daily report were already on disk; the cumulative file, archive and `last_check.json` were updated in this run.

**Last Fact-Check:** November 26, 2026 (15 claims: 6 verified, 7 partially verified, 2 corrected — `fact_check_reports/2026-11-26.md`) | **Previous Fact-Check:** November 19, 2026 (15 claims: 11 verified, 4 partially verified, 0 corrected — `fact_check_reports/2026-11-19.md`).

**Note (2026-11-26 fact-check):** the 15 oldest post-frontier claims (2026-11-24 section) were verified against primary APIs and 16 `FACT_CHECK` comment blocks were inserted, adding ~9 KB to this file (now ~67 KB). The next accumulator cycle should re-condense the active window; the 2026-11-19 → 2026-11-25 sections remain recoverable in full from `archive/cumulative_findings_2026-11.md`.
**Archive:** `archive/cumulative_findings_2026-11.md` (sections 2026-11-01 → 2026-11-25) · **Daily reports:** `daily_reports/` · **State:** `last_check.json` · **Raw evidence:** `tmp/2026-11-25/`

---
## 2026-11-24

**Window:** 2026-11-23T01:28:00Z -> 2026-11-24T01:28:00Z (Monday → Tuesday; the window closes 2026-11-23 20:28 ET, i.e. **after** the US Monday 09:30 ET open, so there **is** an in-window equity bar for ANT).

Source files: `findings_agentic-cli-tools_releases_2026-11-24.md` (22,539 B) and `findings_agentic-cli-tools_community_2026-11-24.md` (52,403 B). Raw captures: `tmp/2026-11-24/releases/`, `tmp/2026-11-24/community/`. Retrieval was `curl` against primary sources only — 0 `web_search`, 0 `web_fetch` (caps 10 / 3); third-party web search was skipped as a known bot-detection block.

### Headline
- **The heaviest release window in this series: three consecutive major stable releases.** Codex shipped stable **`0.172.0`** (npm `2026-11-24T00:09:39Z`), Gemini CLI shipped stable **`0.71.0`** plus preview **`0.72.0-preview.0`**, and **OpenCode shipped `v2.4.0` and `v2.4.1`** — the latter a step-change, not a patch.
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: The three stable releases all shipped, but the OpenCode pair (v2.4.0 / v2.4.1) landed on 2026-11-23, not 2026-11-24, and Gemini CLI 'stable 0.71.0' held the latest tag for only ~2.5h before 0.71.1 landed at 2026-11-24T03:57:09Z. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@openai%2fcodex, https://registry.npmjs.org/@google%2fgemini-cli, https://registry.npmjs.org/@opencode%2fcli -->
  Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.0
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
- **The biggest story is Anthropic's launch of Claude Ship** — a first-party beta in which Claude *reviews pull requests, writes fixes, and approves changes when team policy allows it*.
  Source: https://claude.com/resources/articles/introducing-claude-ship
  Source: https://news.ycombinator.com/item?id=50618513
- **OpenAI shipped the first first-party hardening of an agentic CLI's remote plugin supply chain.** Three closed Codex PRs add SHA-256 **plus detached RSA signature** verification against a release key from an authenticated `/ps/plugins/signing-keys` endpoint: *"A SHA-256 digest can detect changed archive bytes, but someone who replaces …
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: Mechanism confirmed verbatim by two merged PRs (#63487 'Add signature verification for Plugin Service archives', merged 2026-11-24T01:10:22Z; #63489 'Verify signed remote plugin archives before extraction', merged 01:28:48Z). But FIVE merged Codex PRs implement it, not three: #63487, #63489, #63490 (cache signing keys), #63491 (coalesce key fetches), #63528 (eval plugin archives). The superlative 'the first first-party hardening' is evaluative framing and is not confirmable from primary sources. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/openai/codex/pulls/63487, https://api.github.com/repos/openai/codex/pulls/63489 -->
  Source: https://github.com/openai/codex/pull/63487
  Source: https://github.com/openai/codex/pull/63489
- **ANT's first post-IPO daily bar closed inside the window as a distribution-shaped down day**, and the market built a short/hedge complex around it in the same week.
  <!-- FACT_CHECK: NEEDS_CORRECTION -->
  <!-- Correction: 2026-11-23 was the THIRD post-IPO session, not the first — the first bar was 2026-11-19 (O 111.50 / H 115.10 / L 92.72 / C 97.17, vol 857,312,300). See the detailed bar below for the corrected 2026-11-23 OHLC. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=1mo&interval=1d, https://api.nasdaq.com/api/quote/ANT/historical -->
  Source: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d
  Source: https://www.sec.gov/Archives/edgar/data/83246/000110465926131166/tm2628731d388_fwp.htm
- **The lock-up question three previous cycles could not answer is now answered from the prospectus.** The Anthropic 424B4 (prospectus dated **November 18, 2026**) states lock-ups restrict transfers *"for up to 180 days or, in the case of our co-founders and certain of our stockholders holding more than 0.5% of our fully diluted shares …
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (Prospectus dated November 18, 2026 confirmed; 180-day / 365-day lock-up language confirmed verbatim in the 424B4.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm, https://data.sec.gov/submissions/CIK0002130357.json -->
  Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm
### Releases
- **Codex `0.172.0` (stable) shipped — the "no stable 0.172.0" carry-forward from the 2026-11-23 cycle is now closed.** GitHub `rust-v0.172.0` `2026-11-24T00:03:55Z`; npm `2026-11-24T00:09:39Z`; `latest` moved `0.171.0 → 0.172.0`.
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (GitHub rust-v0.172.0 published_at 2026-11-24T00:03:55Z; npm 0.172.0 at 2026-11-24T00:09:39.503Z; latest moved 0.171.0 -> 0.172.0 — all confirmed.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/openai/codex/releases/tags/rust-v0.172.0, https://registry.npmjs.org/@openai%2fcodex -->
  Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0
  Source: https://registry.npmjs.org/@openai%2fcodex
- **Two Codex prerelease lines published in parallel while the `alpha` dist-tag did not move.** `0.172.0-alpha.2.1` (GitHub `2026-11-23T18:02:51Z`) and `0.171.0-alpha.13.2` (`19:38:30Z`) both shipped; `alpha` still points at `0.173.0-alpha.4` from `2026-11-21`, so the tag now lags two newer alpha lines.
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: Both releases and both GitHub timestamps are exact (0.172.0-alpha.2.1 @ 2026-11-23T18:02:51Z; 0.171.0-alpha.13.2 @ 19:38:30Z; npm 18:11:16Z and 19:49:05Z). But the dist-tag clause is time-bound and now false — npm 'alpha' has moved to the 0.174.0 line (now 0.174.0-alpha.7). Also, the two published builds are LOWER version lines (0.171/0.172) published later, so 'lags two newer alpha lines' should be read as 'two additional lines published while the tag stayed put'. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/openai/codex/releases/tags/rust-v0.172.0-alpha.2.1, https://registry.npmjs.org/@openai%2fcodex -->
  Source: https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2.1
  Source: https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.2
- **Gemini CLI shipped stable `0.71.0`, preview `0.72.0-preview.0`, and a nightly that broke a three-build no-op streak.** Stable: GitHub `2026-11-24T01:16:44Z`, npm `01:21:20Z`; `latest` = `staging-tmp` = `0.71.0`;
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: All timestamps confirmed (GitHub v0.71.0 @ 2026-11-24T01:16:44Z, npm 01:21:20.379Z; preview v0.72.0-preview.0 @ 00:34:15Z / npm 00:38:51Z; nightly v0.71.0-nightly.20261124.gaafdfdfb5 @ 01:13:47Z / npm 01:19:27Z) and the three-build no-op streak (nightlies 20261121/22/23 all with commit hash geecccfcd5) is confirmed. Only the dist-tag clause is stale: 'latest' and 'staging-tmp' are now 0.71.1 (npm 2026-11-24T03:57:09Z, GitHub v0.71.1 @ 03:50:24Z); 0.71.0 held the tags only between 01:21Z and 03:57Z on 2026-11-24. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/google-gemini/gemini-cli/releases, https://registry.npmjs.org/@google%2fgemini-cli -->
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.72.0-preview.0
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261124.gaafdfdfb5
- **Claude Code `2.1.331` resumed the release channel after a three-day silence** (npm `2026-11-23T18:36:26Z`, GitHub `21:34:41Z`); `latest` = `next` = `2.1.331`.
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: Timestamps confirmed (npm 2026-11-23T18:36:26.468Z, GitHub 21:34:41Z) and the ~3-day silence confirmed (previous release 2.1.330, npm 2026-11-20T19:16:01Z). The dist-tag clause is a window-close snapshot: 'latest' = 'next' are now 2.1.332 (npm 2026-11-24T22:06:38Z, GitHub v2.1.332 @ 2026-11-25T01:32:14Z), and 'stable' is 2.1.326 (frozen since 2026-11-16). -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@anthropic-ai%2fclaude-code, https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.331 -->
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.331
  Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
- **Claude Code's GitHub Action shipped three times in-window, one of them breaking.** `v1.0.287` (`2026-11-23T21:37:51Z`) stops the session and revokes the app token when a run is cancelled (#2112). **`v1.0.288` (`23:05:51Z`) is BREAKING — it now skips pull requests from forks by default** (#2114).
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (Three releases in-window confirmed: v1.0.287 @ 21:37:51Z with the #2112 cancel/token-revoke note, v1.0.288 @ 23:05:51Z flagged 'breaking changes' for #2114 fork-PR skipping, v1.0.289 @ 23:54:14Z #2122.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/anthropics/claude-code-action/releases, https://github.com/anthropics/claude-code-action/releases.atom -->
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.288
  Source: https://github.com/anthropics/claude-code-action/releases/tag/v1.0.289
- **OpenCode `v2.4.0` and `v2.4.1` shipped — the largest OpenCode release set observed, and the first under the corrected package name.** `v2.4.0`: GitHub `2026-11-23T09:22:21Z`, npm `@opencode/cli@2.4.0` `09:15:15Z`.
  <!-- FACT_CHECK: NEEDS_CORRECTION -->
  <!-- Correction: Timestamps are exact (GitHub v2.4.0 @ 2026-11-23T09:22:21Z, npm 09:15:15.017Z; v2.4.1 @ 15:57:40Z / 15:56:19.960Z), but two characterisations are wrong. (1) 'the largest OpenCode release set observed' is false — the releases feed shows a three-release day on 2026-10-30 (v2.2.3/v2.2.4/v2.2.5) and a four-release day on 2026-10-29; the 2026-11-23 pair is at most a tie inside this series' daily coverage. (2) 'the first under the corrected package name' is false — @opencode/cli was created 2026-09-02 and has published continuously since 2.0.0 (2026-09-11), including 2.3.0 (2026-11-13) and 2.3.1/2.3.2 (2026-11-18). Also npm 'latest' is now 2.4.2 (2026-11-26T00:46:05Z). -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/anomalyco/opencode/releases/tags/v2.4.0, https://registry.npmjs.org/@opencode%2fcli -->
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.0
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.4.1
  Source: https://registry.npmjs.org/@opencode%2fcli
- **Package-name correction for OpenCode (carry-forward, now settled): the actively published package is `@opencode/cli`, not `opencode-ai`.** `latest` = `2.4.1`;
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: The correction stands in substance — the 2.x line publishes to @opencode/cli while opencode-ai is frozen at 1.19.6 (last publish 2026-11-17T07:46:24Z). Two refinements: 'latest' is now 2.4.2 (2026-11-26T00:46:05Z), and 'the actively published package' overstates the switch — opencode-ai is NOT deprecated and still takes ~3.8x the weekly downloads of @opencode/cli (3,643,255 vs 970,798 for 2026-11-18..11-24), i.e. it is stale but still dominant in install traffic. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@opencode%2fcli, https://registry.npmjs.org/opencode-ai -->
  Source: https://registry.npmjs.org/@opencode%2fcli
  Source: https://registry.npmjs.org/opencode-ai
  Source: https://github.com/anomalyco/opencode/releases
- **RunPod MCP server `5.0.0` — a breaking major rewriting every list result onto Google AIP-158 pagination.** GitHub `2026-11-23T02:48:12Z`, npm `02:51:18Z`.
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (GitHub @runpod/mcp-server@5.0.0 published_at 2026-11-23T02:48:12Z, npm 5.0.0 at 02:51:18.026Z; release body confirms AIP-158 cursor pagination with pagination.nextCursor / pagination.hasNextPage.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://api.github.com/repos/runpod/runpod-mcp/releases, https://registry.npmjs.org/@runpod%2fmcp-server -->
  Source: https://github.com/runpod/runpod-mcp/releases/tag/%40runpod%2Fmcp-server%405.0.0
  Source: https://registry.npmjs.org/@runpod%2fmcp-server
- **Copilot CLI's prerelease advanced to `1.0.115-8` (`2026-11-23T19:10:43Z`) while the stable channel stayed frozen.** `latest` remains `1.0.114`, published `2026-11-18T06:00:58Z` — a **~6-day freeze**, now the longest recorded for this package. Third consecutive cycle in which only the prerelease line advanced.
  <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Correction: Timestamps and the ~6-day freeze are confirmed (npm 1.0.115-8 @ 2026-11-23T19:10:43Z, GitHub 19:10:51Z; latest 1.0.114 published 2026-11-18T06:00:58Z; next stable 1.0.115 at 2026-11-24T13:03:39Z = 6d 7h). But 'the longest recorded for this package' is wrong — the stable-to-stable gap series contains longer freezes (1.0.80 -> 1.0.81 = 13d 14h; 1.0.83 -> 1.0.84 = 11d 7h; 0.0.372 -> 0.0.373 = 10d 16h; 1.0.105 -> 1.0.106 = 9d 1h). This freeze ranks roughly 8th. The freeze is also over: latest moved to 1.0.116 on 2026-11-25. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@github%2fcopilot, https://api.github.com/repos/github/copilot-cli/releases -->
  Source: https://registry.npmjs.org/@github%2fcopilot
- **Amp kept its ~4-hour rolling dev cadence with six distinct commits**, from `0.0.1795406435-gdf62b3` (`04:22:18Z`) to `0.0.1795478457-g9601b2` (`2026-11-24T00:30:43Z`). `next` is a long-stale `2026-05-14` single-binary build.
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (Exactly six distinct dev versions inside the window, 04:22:18Z -> 00:30:43Z, inter-publish deltas 3h51m-4h11m; dist-tags.next = 0.0.1778732631-gc5875c-singleexe dated 2026-05-14T04:31:22Z; independently corroborated by jsDelivr and the @ampcode/cli mirror.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@sourcegraph%2famp, https://data.jsdelivr.com/v1/packages/npm/@sourcegraph%2famp -->
  Source: https://registry.npmjs.org/@sourcegraph%2famp
- **Verified negatives — no in-window release:** **Qwen Code** (npm `latest` `0.28.4` from `2026-11-22T12:28:27Z`, `nightly` still `0.28.3-nightly.20261121.56ef346859`; the Desktop channel is quiet too), **Cline** (npm `latest` `3.0.75` from `2026-11-21T05:31:57Z`)
  <!-- FACT_CHECK: VERIFIED -->
  <!-- Correction: - (Qwen Code 0.28.4 @ 2026-11-22T12:28:27.738Z, nightly still 0.28.3-nightly.20261121.56ef346859, nothing published in-window; Cline latest 3.0.75 @ 2026-11-21T05:31:57.433Z with no later publish — both negatives confirmed against npm and GitHub release timestamps.) -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://registry.npmjs.org/@qwen-code%2fqwen-code, https://registry.npmjs.org/cline -->
  Source: https://registry.npmjs.org/@qwen-code%2fqwen-code
  Source: https://registry.npmjs.org/cline
  Source: https://github.com/aaif-goose/goose/releases
  Source: https://registry.npmjs.org/aider-chat
### Market, capital structure and corporate action
- **ANT (Anthropic, PBC, NasdaqGS) — the first post-IPO daily bar inside a research window, and it is a down day.** Session `2026-11-23`: open **93.69**, high **94.24**, low **84.61**, close **86.86** (**-2.31%** vs prior close **88.91**), volume **253,330,731**.
  <!-- FACT_CHECK: NEEDS_CORRECTION -->
  <!-- Correction: Four errors. (1) 2026-11-23 was the third post-IPO session; the first bar was 2026-11-19 (O 111.50 / H 115.10 / L 92.72 / C 97.17, vol 857,312,300). (2) Close is 87.64, not 86.86 — the daily change is -1.43%, not -2.31% (the -2.31% was derived from the wrong close). (3) Volume is 254,101,700, not 253,330,731. (4) Open is 93.645/93.65, not 93.69. High 94.24, low 84.61 and prior close 88.91 are correct. Three independent market-data sources agree on the corrected bar. -->
  <!-- Verified: 2026-11-26 -->
  <!-- Sources: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=1mo&interval=1d, https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks, https://stockanalysis.com/api/symbol/s/ANT/history -->
  Source: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d
  Source: https://query1.finance.yahoo.com/v8/finance/chart/ANT?range=1mo&interval=1d
- **The 424B4 pins the lock-up calendar — the question carried forward for three cycles.** From the prospectus dated **November 18, 2026**: lock-up agreements *"restrict transfers of their shares for up to 180 days or, in the case of our co-founders and certain of our stockholders holding more than 0.5% of our fully diluted shares prior …
  Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm
- **Four insider Form 4s filed on 2026-11-23 — all at the $83.00 IPO price, with Anthropic (CIK 0002130357) reported as the owner.** Dario Amodei: `F` 345,011 shares at $83 and `S` 3,378,378 shares at $83 (transaction dates 2026-11-19 and 2026-11-20), 35,932,660 Class A shares held after.
  Source: https://www.sec.gov/Archives/edgar/data/2157947/000215794726000004/form4-11232026_101129.xml
  Source: https://www.sec.gov/Archives/edgar/data/2158120/000215812026000003/form4-11232026_101148.xml
  Source: https://www.sec.gov/Archives/edgar/data/1221820/000122182026000005/form4-11232026_101110.xml
  Source: https://www.sec.gov/Archives/edgar/data/1997244/000199724426000005/form4-11232026_101131.xml
- **Six leveraged Anthropic ETF share classes were filed with the SEC on 2026-11-23 — the retail short/hedge complex arrived all at once.** Direxion Shares ETF Trust filed two 497K summary prospectuses for the **Direxion Daily Anthropic Bear 2X ETF (ANTD)**.
  Source: https://www.sec.gov/Archives/edgar/data/1424958/000119312526470567/d179813d497k.htm
  Source: https://www.sec.gov/Archives/edgar/data/1587982/000121390026122930/ea0311370-02_497k.htm
  Source: https://www.sec.gov/Archives/edgar/data/1587982/000121390026122931/ea0311370-03_497k.htm
  Source: https://www.sec.gov/Archives/edgar/data/1884021/000121390026122808/ea0311932-03_497k.htm
  Source: https://www.sec.gov/Archives/edgar/data/1771146/000177114626002339/etfot-txrex2xanthropicetf4.htm
  Source: https://www.sec.gov/Archives/edgar/data/1924868/000199937126026071/hf-485bpos_112526.htm
- **HSBC filed two free writing prospectuses for structured notes linked to ANT Class A on 2026-11-23 — the sell-the-volatility layer on the IPO.** FWP `tm2628731d388`: **Barrier Market Participation Notes with Autocall Feature**, $1,000 principal, issue date **December 3, 2026**, maturity **December 3, 2029** (CUSIP 40447LX62)
  Source: https://www.sec.gov/Archives/edgar/data/83246/000110465926131166/tm2628731d388_fwp.htm
  Source: https://www.sec.gov/Archives/edgar/data/83246/000110465926130986/tm2628731d410_fwp.htm
- **CrowdStrike's Q3 earnings exhibit (8-K EX-99.1, filed 2026-11-23) puts two first-party enterprise-security partnerships on the record against Claude and Codex.** Verbatim: *"Announced an expanded partnership with Anthropic, natively integrating Falcon Guardian into Claude CoWork and adding the Falcon platform to the Anthropic Claude …
  Source: https://www.sec.gov/Archives/edgar/data/1535527/000153552726000035/crwd-20261123xex991.htm
### Community, product and policy signal
- **Claude Ship confirmed first-party — the earlier "press-reported only" caveat is resolved.** `https://claude.com/resources/articles/introducing-claude-ship` returns HTTP 200 with JSON-LD `"datePublished":"2026-11-23"` and title *"Introducing Claude Ship | Claude by Anthropic"*.
  Source: https://claude.com/resources/articles/introducing-claude-ship
  Source: https://twitter.com/bcherny/status/2124961485801836573
  Source: https://news.ycombinator.com/item?id=50618513
- **The community's reaction to Claude Ship is entirely about the approval boundary — the first agentic-CLI launch where *authority*, not capability, is the headline.** r/ClaudeAI (`2026-11-23T23:12:27Z`): *"Claude can now review, fix, and approve PRs.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3xbl4/
- **OpenAI shipped remote plugin-archive signature verification in Codex.** PR #63487 *"Add signature verification for Plugin Service archives"* (`2026-11-24T01:10:06Z`, closed) adds `RemotePluginArchiveDownload::verify`, checking a SHA-256 digest **and** a detached RSA signature against the release key from the authenticated …
  Source: https://github.com/openai/codex/pull/63487
  Source: https://github.com/openai/codex/pull/63489
  Source: https://github.com/openai/codex/pull/63484
- **A latent system-prompt injection sits in the tool-schema registry of Claude Code — the config-surface backdoor the carry-forward list asked about, arriving by a different route.** A single-user write-up on Claude Code 2.1.330 (Windows 11, tested 2026-11-23) shows the **first ToolSearch call that loads a Chrome tool schema appends an …
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3trja/
  Source: https://github.com/anthropics/claude-code/issues/93798
  Source: https://github.com/anthropics/claude-code/issues/111888
- **claude-code #111912 — a mod's `$.http.fetch` bypasses the cloud session's egress proxy, so the environment's network secrets are never added.** Verbatim: *"In a Claude Code on the web (cloud) session, a mod's `$.http.fetch` does not go through the session's egress proxy, so the cloud environment's network secrets are never added to …
  Source: https://github.com/anthropics/claude-code/issues/111912
  Source: https://github.com/anthropics/claude-code/issues/111915
- **The model-quality regression class produced at least ten in-window issue reports across both CLIs, and no vendor changelog addresses any of it.** Codex: #63466 *"GPT-6.2 Astra and Sol — Behavioral regressions, unreliable execution and excessive human supervision"* (`2026-11-23T23:31:27Z`) — *"Lack of reasoning depth and contextual …
  Source: https://github.com/openai/codex/issues/63466
  Source: https://github.com/openai/codex/issues/63470
  Source: https://github.com/openai/codex/issues/63488
  Source: https://github.com/openai/codex/issues/63459
  Source: https://github.com/openai/codex/issues/63469
  Source: https://github.com/anthropics/claude-code/issues/111905
  Source: https://github.com/anthropics/claude-code/issues/111899
  Source: https://github.com/anthropics/claude-code/issues/111909
  Source: https://github.com/anthropics/claude-code/issues/111917
  Source: https://github.com/anthropics/claude-code/issues/111919
- **claude-code #111921 is the strongest concrete case yet for why prompt-only rules fail.** Verbatim: *"Claude Code deleted user files on my machine without asking, in a step unrelated to what I requested."* A repo test *"operates on a live application configuration folder in my home directory, and one of its steps prunes older backup …
  Source: https://github.com/anthropics/claude-code/issues/111921
  Source: https://github.com/anthropics/claude-code/issues/111892
  Source: https://github.com/anthropics/claude-code/issues/111906
- **Policy-as-executable-checks is now a real, multi-vendor engineering practice — three independent implementations landed in-window.** *AgentTrail Guard* (r/codex, `2026-11-23T18:20:29Z`) checks supported Codex CLI actions against local rules before they run, via `npx -y @agenttrail/guard@latest scan --agent codex` for retrospective …
  Source: https://www.reddit.com/r/codex/comments/1y3ps8t/
  Source: https://github.com/agenttrailhq/guard
  Source: https://github.com/anomalyco/opencode/pull/65945
  Source: https://github.com/Aider-AI/aider/pull/6033
  Source: https://github.com/openai/codex/pull/63474
  Source: https://github.com/anthropics/claude-code/issues/111910
- **The approval-channel tooling market is filling fast, and the pain it addresses is named repeatedly.** Okey reads Codex CLI approval dialogs off the Mac notch, by voice, or from an iPhone, covering command approvals, file-edit and MCP tool approvals, and plan-mode questions, but **not** the sign-in screen or the update offer (r/codex, …
  Source: https://www.reddit.com/r/codex/comments/1y3o067/
  Source: https://news.ycombinator.com/item?id=50620802
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3tnty/
  Source: https://www.reddit.com/r/cursor/comments/1y37zkc/
  Source: https://github.com/anthropics/claude-code/issues/111916
  Source: https://stripe.dev/blog/stripe-integration-evals-methodology
- **Vendor-side semantic governance landed in-window as a direct answer to intent hijacking.** HN carried Google's *"Securing AI agents against intent hijacking with Semantic governance policies"* (developers.googleblog.com) at `2026-11-23T23:22:48Z` (2p/0c) — machine-checked governance rather than prompt text;
  Source: https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/
  Source: https://news.ycombinator.com/item?id=50620958
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3u183/
  Source: https://github.com/PromptAudit-SaaS/mcp
- **Usage-accounting regressions remain the most repeated complaint across both communities, and no vendor changelog addresses them.** r/ClaudeAI: *"The Ultraplan usage limits are brutal: I burned through 60% of my weekly usage in under 9 hours"* (`22:34:19Z`, body [removed] — [UNVERIFIED]);
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3wfe6/
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3uwla/
  Source: https://www.reddit.com/r/codex/comments/1y3hlp5/
  Source: https://www.reddit.com/r/codex/comments/1y3i5zf/
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3vyit/
- **The CLI-vs-IDE question is running in both directions in-window, and the desktop-assistant layer is filling with thin wrappers.** r/ClaudeCode: *"I built an IDE around Claude Code after my team left Cursor. Closed source, free to download. Tear it apart."* (`2026-11-23T19:57:09Z`).
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3sdyl/
  Source: https://www.reddit.com/r/codex/comments/1y3sepm/
  Source: https://www.reddit.com/r/codex/comments/1y3kf3d/
  Source: https://github.com/anomalyco/opencode/issues/65946
  Source: https://github.com/cline/cline/issues/15848
  Source: https://news.ycombinator.com/item?id=50621014
  Source: https://news.ycombinator.com/item?id=50620918
  Source: https://news.ycombinator.com/item?id=50622220
  Source: https://news.ycombinator.com/item?id=50622072
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y3yo3j/
- **Agent capability is being modelled as Unix permissions across the ecosystem — an independent runtime, a vendor permission algebra, and runtime-enforced delegation all landed in-window.** *"Show HN: Gal – local-first agent runtime with per-call permissions and rollback"* (HN `2026-11-24T00:31:31Z`, 3p/0c) and *"Sentry – An external …
  Source: https://news.ycombinator.com/item?id=50621748
  Source: https://news.ycombinator.com/item?id=50621997
  Source: https://github.com/openai/codex/issues/63464
  Source: https://github.com/aaif-goose/goose/issues/13773
  Source: https://news.ycombinator.com/item?id=50622249
- **Model-lifecycle markers and smaller community tooling, all in-window.** *"GPT-5.6 Sol is deprecating on December 23"* (@ChatGPT tweet, HN `2026-11-23T23:15:02Z`) — [REPORTED]. *"Tell HN: Claude Opus 4.5 turns one year old today"* (HN `2026-11-24T00:44:07Z`). *"PACE: Reproducible multi-agent vs.
  Source: https://news.ycombinator.com/item?id=50620861
  Source: https://news.ycombinator.com/item?id=50621878
  Source: https://www.reddit.com/r/LocalLLaMA/comments/1y3mxy9/
  Source: https://news.ycombinator.com/item?id=50621738
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4068f/
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3rx32/
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y3yojw/
- **gemini-cli hardened its own a2a-server surface in-window, and logged two config-surface weaknesses.** PR #30420 *"fix(a2a-server): enforce bearer token authentication and request input validation"* (`2026-11-23T18:25:29Z`, closed) and PR #30417 *"fix(a2a-server): enforce HTTP auth, harden createTask trust, and prevent restore path …
  Source: https://github.com/google-gemini/gemini-cli/pull/30420
  Source: https://github.com/google-gemini/gemini-cli/pull/30417
  Source: https://github.com/google-gemini/gemini-cli/issues/30412
  Source: https://github.com/google-gemini/gemini-cli/issues/30413
  Source: https://github.com/google-gemini/gemini-cli/pull/30419
  Source: https://github.com/cline/cline/issues/15844
### Corrections and carry-forward resolutions
- **Claude Ship is FIRST-PARTY CONFIRMED, not press-only.** `https://claude.com/resources/articles/introducing-claude-ship` → HTTP 200, JSON-LD `"datePublished":"2026-11-23"`, `<title>Introducing Claude Ship | Claude by Anthropic</title>`. The community subagent's first-party capture is the one to trust;
  Source: https://claude.com/resources/articles/introducing-claude-ship
- **The RunPod NPS/referral carry-forward is RESOLVED AT THE BUNDLE LEVEL — the mechanism is gone from the MCP tool surface, and the residual is a routing constant only.** Verified directly against the published `@runpod/mcp-server@5.0.0` tarball: the **compiled** MCP tool registry (`dist/chunk-FVKCSWVF.mjs`) contains **zero** …
  Source: https://registry.npmjs.org/@runpod%2fmcp-server
  Source: https://github.com/runpod/runpod-mcp/releases/tag/%40runpod%2Fmcp-server%405.0.0
- **The Claude Code advisory count is re-verified with the scope stated explicitly: 36 repo-scoped, 30 npm-global, zero in-window.** The repo-scoped feed returns **36** (29 high / 4 medium / 3 low); the global npm feed filtered on `affects=@anthropic-ai/claude-code` returns **30** (24 high / 4 medium / 2 low).
  Source: https://api.github.com/repos/anthropics/claude-code/security-advisories
  Source: https://api.github.com/advisories?ecosystem=npm&affects=%40anthropic-ai%2Fclaude-code
- **The OpenCode package baseline is corrected and must be carried forward:** the active v2 line is **`@opencode/cli`** on GitHub **`anomalyco/opencode`**; **`opencode-ai` is the legacy v1 package, frozen at `1.19.6` since 2026-11-17**. `opencode` and `@anomalyco/opencode` both 404 on npm.
  Source: https://registry.npmjs.org/@opencode%2fcli
  Source: https://registry.npmjs.org/opencode-ai
- **goose did NOT ship v1.61.0 in-window.** PR #13772 (`2026-11-24T00:30:05Z`) is **open and unmerged**, no `v1.61.0` tag exists, and the newest release remains `v1.60.2` (`2026-11-20T06:18:55Z`). The **repo org change is real and new**: `block/goose` 301-redirects to **`aaif-goose/goose`** — the AAIF-hosted runtime.
  Source: https://github.com/aaif-goose/goose/pull/13772
  Source: https://github.com/aaif-goose/goose/releases
- **The r/codex "What does this mean?" thread remains UNRESOLVED for a third consecutive cycle.** Arctic Shift title/date-range searches over r/codex for `2026-11-19 → 2026-11-23T01:28:00Z` returned no post with that title;
  Source: https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=codex&after=2026-11-19T00:00:00Z&before=2026-11-23T01:28:00Z&limit=60
  Source: https://www.reddit.com/r/codex/comments/1y3kf3d/
- **SEC EDGAR access note: the daily-index endpoint failed for a third consecutive cycle (HTTP 403 AccessDenied), but the full-text search endpoint works.** `https://efts.sec.gov/LATEST/search-index` returns HTTP 200 with hits and `file_date` fields, and is the route that surfaced the in-window Form 4s, the ETF 497K/497J/485BPOS filings, …
  Source: https://efts.sec.gov/LATEST/search-index
  Source: https://www.sec.gov/Archives/edgar/daily-index/2026/QTR4/form.20261123.idx
### Access gaps (not evidence of absence)
- **gemini-cli `0.71.0` / `0.72.0-preview.0` changelog bodies were not retrievable** — only the changelog PR metadata (#30426, #30424) was captured, so the only candidate first-party changelog in-window could not be checked for safety-refusal or quota notes.
  Source: https://github.com/google-gemini/gemini-cli/pull/30426
- **Google's semantic-governance post, the Stripe evals post and NotiBuddy were title-level only** — [UNVERIFIED] beyond title and HN permalink.
  Source: https://news.ycombinator.com/item?id=50620958
- **Reddit direct JSON access is unavailable from this host (HTTP 403)**; all Reddit evidence rests on Arctic Shift, whose r/ClaudeAI and r/codex bodies are frequently truncated to 9 characters or `[removed]`. Every item with a 9-char or `[removed]` body is flagged [UNVERIFIED] above.
  Source: https://www.reddit.com/r/LocalLLaMA/new/.json
- **Google News publisher URLs are opaque** — all Google-News-sourced items are [REPORTED] and cited to the RSS query URL, with publisher and pubDate given inline. `www.anthropic.com/news` does not list Claude Ship, `www.anthropic.com/news/claude-ship` 404s, and `www.anthropic.com/news/rss.xml` 404s.
  Source: https://news.google.com/rss/search?q=%22Claude+Ship%22&hl=en-US&gl=US&ceid=US:en
- **Confirmed 404 package probes for this domain** (do not read "no release" from them): `opencode`, `@anomalyco/opencode`, `aider-chat`, `runpod-mcp`, `claude-code-action` on npm.
  Source: https://registry.npmjs.org/@opencode%2fcli
  Source: https://github.com/anomalyco/opencode/releases
## 2026-11-25

**Window:** 2026-11-24T01:28:00Z -> 2026-11-25T01:28:00Z (Tuesday → Wednesday; the window closes 2026-11-24 20:28 ET, i.e. **after** the US Tuesday 09:30 ET open, so there **is** an in-window equity bar for ANT).

Source files: `findings_agentic-cli-tools_releases_2026-11-25.md` (28,065 B) and `findings_agentic-cli-tools_community_2026-11-25.md` (47,788 B). Raw captures: `tmp/2026-11-25/releases/`, `tmp/2026-11-25/`. Retrieval was `curl` against primary sources only — 0 `web_search` (the tool still returns the DuckDuckGo bot-detection challenge), 3 `web_fetch` (at the cap), 82 `curl` across the two subagents.

### Headline
- **ANT broke below its IPO price and set a new 52-week low on the same bar.** 2026-11-24: O **83.40** / H **83.49** / L **75.61** / C **81.91**, **-5.73 (-6.54%)** on 287,375,499 shares vs a previous close of 87.64. The low of **75.61** is ~8.6% below the prior 83.05 low and ~9.0% below the $83 IPO price. After-hours: 80.04 (-2.28%).
  Source: https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-18&todate=2026-11-25&limit=10
  Source: https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=ANT&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1
- **The reason the tape broke is now documented: there is no conventional lock-up.** HN's top in-window story — *"Anthropic breaks below $83 IPO price"* (340 pts / 66 comments) — carries the claim that insiders were permitted to sell up to **316 million shares from Day 1** rather than under a standard 6-month lock-up, alongside the claim …
  Source: https://news.ycombinator.com/item?id=50627836
  Source: https://www.forbes.com/sites/siladityaray/2026/11/24/anthropic-ceo-dario-amodei-sold-280-million-in-shares-as-part-of-record-ipo/
- **Claude Ship is now first-party confirmed** — Anthropic's own product site carries "Introducing Claude Ship" (Nov 23, 2026). It is Code Review plus two beta agents, **PR Steward** and **Claude Approvals**, and in Claude Code it is the **`/ship`** command. Approvals are policy-gated by a file in the repo ("a smarter CODEOWNERS file").
  Source: https://claude.com/resources/articles/introducing-claude-ship
  Source: https://code.claude.com/docs/en/claude-ship
- **The first substantive practitioner critique of Claude Ship argues against adopting it** — "Today I do the coding in Claude, so a Claude review is Claude reading Claude". The author's own operation runs 170+ PRs/day with ~60% merging unread;
  Source: https://jonathannen.com/avoid-claude-ship/
  Source: https://news.ycombinator.com/item?id=50634437
- **The first in-window MCP advisory naming an MCP bridge — a stored prompt-injection primitive.** GHSA-c4hm-4h84-2cf3 / CVE-2026-59726 (2026-11-24T21:01:10Z): the `ruflo` MCP bridge in default Docker Compose deployments exposed `POST /mcp` and `POST /mcp/:group` with **no authentication**, the `terminal_execute` blocklist was …
  Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **A first-party MCP server is injecting hidden upsell text into agent output.** Notion's official hosted MCP server returns a disguised "Notion Business — Try it free" pitch inside the SQL-query-limit error payload, which the agent then slips into its final answer — reproduced in Claude Code and Gemini/Antigravity.
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4qm5o/heads_up_if_you_wire_notions_official_mcp_into/
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y4pxfl/3_months_after_getting_called_out_here_notions/
### Releases
- **Claude Code `2.1.332` published to npm in-window at 2026-11-24T22:06:38Z** and carries the **`next` dist-tag** — staged as a pre-release, not promoted to `latest`. Tags after the publish: `latest`=2.1.331, `next`=2.1.332, `stable`=2.1.325.
  Source: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
  Source: https://api.github.com/repos/anthropics/claude-code/releases?per_page=20
- **Claude Code 2.1.332 ships MCP-server skills (beta) and a new `PreSkillShellCommand` hook event.** Skills contributed by MCP servers appear in the `/` menu as `server:skill`; the hook event can refuse a skill's or command's inline shell commands *as it loads*.
  Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.332
- **2.1.332 is a hang-fix release aimed squarely at the "agent runs forever" failure mode.** Fixes target: freezes and runaway memory when a hook prints output without an end; freeze when a permission rule or hook condition with several wildcards is checked against a long command;
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.332
- **Verified negative: claude-code-action had NO in-window release.** Latest remains v1.0.289 (2026-11-23T23:54:14Z); the action's ~daily cadence (v1.0.276 on 11-13 through v1.0.289 on 11-23) did not produce a new tag inside the window.
  Source: https://api.github.com/repos/anthropics/claude-code-action/releases?per_page=20
- **Codex's alpha channel jumped to a 0.174.0 line and shipped five builds in-window** — `0.174.0-alpha.1` (01:55:11Z), `-alpha.2` (16:26:59Z), `-alpha.3` (20:22:51Z), `-alpha.4` (23:09:32Z), `-alpha.5` (2026-11-25T01:26:07Z). The `alpha` dist-tag now points at **0.174.0-alpha.5** (was 0.173.0-alpha.4).
  Source: https://registry.npmjs.org/@openai%2fcodex
  Source: https://api.github.com/repos/openai/codex/releases?per_page=20
- **Verified negative: no new stable Codex release in-window.** `latest` remains **0.172.0** (published 2026-11-24T00:09:39Z, ~80 min *before* the window opened), unchanged for ~25h while the alpha line churns hard — a classic "0.174 imminent" pattern. Codex's in-repo CHANGELOG is a stub pointing at the releases page;
  Source: https://registry.npmjs.org/@openai%2fcodex
  Source: https://raw.githubusercontent.com/openai/codex/main/CHANGELOG.md
- **Gemini CLI `0.71.1` took the `latest` dist-tag at 2026-11-24T03:57:09Z** (GitHub `v0.71.1` 03:50:24Z), superseding 0.71.0 — a patch landing ~2.5h after the .0 stable, i.e. fast defect response.
  Source: https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.1
  Source: https://registry.npmjs.org/@google%2fgemini-cli
- **Verified negative: no new Gemini CLI nightly inside the window.** The nightly chain stands at the 2026-11-24T01:19:27Z build (`gaafdfdfb5`); the ~24h cadence did not fire again.
  Source: https://registry.npmjs.org/@google%2fgemini-cli
- **Copilot CLI's ~6-day stable freeze ENDED.** `latest` moved from the long-frozen 1.0.114 (2026-11-18T06:00:58Z) to **1.0.115, published 2026-11-24T13:03:39Z** — the first stable publish since 11-18, so the freeze lasted ~7 days. This closes the three-cycle carry-forward item.
  Source: https://registry.npmjs.org/@github%2fcopilot
- **Copilot CLI's prerelease moved faster than stable** — `1.0.116-0` (16:44:43Z), `-1` (20:22:12Z), `-2` (2026-11-25T00:11:22Z); `prerelease` dist-tag now at **1.0.116-2**, `unstable` at 1.0.114-unstable.r45286541461.g05667ac.
  Source: https://registry.npmjs.org/@github%2fcopilot
- **Copilot CLI 1.0.116 release notes show an MCP-hardening and permissions push** — warn when a plugin and a standalone MCP server connect to the same endpoint (with `/mcp` remediation instructions); prevent repeated sign-in prompts when multiple CLI sessions refresh access to the same MCP server;
  Source: https://github.com/github/copilot-cli/releases
- **OpenCode: three dev builds in-window** — `0.0.0-dev-1345` (07:18:58Z), `-1346` (13:15:00Z), `-1347` (19:33:58Z), the `dev` dist-tag advancing to dev-1347 (~6h cadence). **Verified negative: no new stable OpenCode release** — `latest` remains 2.4.1 (2026-11-23T15:56:19Z, pre-window)
  Source: https://registry.npmjs.org/@opencode%2fcli
- **@runpod/mcp-server completed its major version jump: `5.1.0` published in-window at 2026-11-24T21:34:40Z** (5.0.0 was 2026-11-23T02:51:18Z, pre-window); `latest` is now 5.1.0.
  Source: https://registry.npmjs.org/@runpod/mcp-server
  Source: https://github.com/runpod/runpod-mcp/releases
- **Verified negatives — no in-window release:** **Qwen Code** (`latest` 0.28.4 from 2026-11-22T12:28:27Z; `nightly` frozen at 0.28.3-nightly.20261121.56ef346859 — the ~daily nightly chain has stalled since 11-21; GitHub silent too), **Cline** (npm `latest` 3.0.75 from 2026-11-21T05:31:57Z, nightly tag dead ~5 weeks;
  Source: https://registry.npmjs.org/@qwen-code%2fqwen-code
  Source: https://registry.npmjs.org/cline
  Source: https://api.github.com/repos/block/goose/releases?per_page=20
### Security & advisories
- **In-window advisory scope:** the GitHub repo-scoped endpoint for `anthropics/claude-code` returns **36 advisories total: 29 high, 4 medium, 3 low**; the newest is 2026-10-26T11:43:04Z (GHSA-5xjx-9qx6-jcrv, high, TOCTOU race in the Edit tool).
  Source: https://api.github.com/repos/anthropics/claude-code/security-advisories?per_page=50
  Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **NEW, critical, in-window: GHSA-c4hm-4h84-2cf3 / CVE-2026-59726 — "ruflo MCP bridge allows unauthenticated remote code execution in default Docker Compose deployments"** (2026-11-24T21:01:10Z, npm `ruflo` < 3.16.3, fixed in 3.16.3). The MCP bridge exposed `POST /mcp` and `POST /mcp/:group` with no authentication;
  Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **NEW, MCP-relevant, in-window: GHSA-9x82-4j54-863h — "isomorphic-git allows unbounded memory allocation from attacker-controlled delta target size (DoS)"** (2026-11-23T21:07:02Z, npm `isomorphic-git` < 1.38.6).
  Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
- **The ruflo advisory is the first in-window advisory in this domain that specifically names an MCP bridge, and its failure mode (persisted poisoning of a learning store that steers future model output) is a stored prompt-injection / cross-session poisoning primitive** — the same risk class as the RunPod NPS removal tracked in earlier …
  Source: https://api.github.com/advisories?ecosystem=npm&per_page=100&sort=published&direction=desc
### Company announcements
- **RESOLVED: "Claude Ship" is FIRST-PARTY CONFIRMED** at `claude.com/resources/articles/introducing-claude-ship` (dated Nov 23, 2026). Composed of Code Review (already GA) plus two beta agents, PR Steward and Claude Approvals.
  Source: https://claude.com/resources/articles/introducing-claude-ship
- **NEW, first-party, in-window: "MCP servers can now ship skills, run tasks, and more with Claude"** (Nov 24, 2026) — "Skills over MCP is in public beta in Claude, so MCP servers can ship skills alongside their tools.
  Source: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more
- **NEW, first-party, in-window: Anthropic published "Turn artifacts into Mac and Windows apps"** (Nov 24, 2026) — "Open the artifacts you use every day like any other app, and let them do more on your computer". A desktop-assistant launch line, directly on this topic's desktop-AI-assistants side.
  Source: https://claude.com/resources/articles/install-as-app
- **Adjacent first-party posts (pre-window, same launch cluster):** "Zero data retention with Enterprise Frontier Safeguards is now in beta" and "The enterprise guide to securing coding agents" — Anthropic publishing on agent security, consistent with the vendor-security theme in the advisory feed.
  Source: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents
- **[REPORTED]** Press volume in-window is overwhelmingly Claude Ship — 33 Google News items matched "Claude Code", ~29 of them Claude Ship coverage (Reuters, The Verge, The Register, TechCrunch, The Decoder, InfoWorld, ZDNET, Decrypt, Help Net Security, The Times of India…), spanning 2026-11-24T01:28Z→21:46Z. Title-level only.
  Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
### Community pulse
- **The community produced the first *mechanistic* explanation for the recurring usage-drain complaints.** A r/codex post ("I finally understand why", 19 pts / 22 comments) claims that above **272K input tokens** input and cache rates **double** and output costs **1.5×** the short-context rate *for the whole request*, while Codex …
  Source: https://www.reddit.com/r/codex/comments/1y4bahe/i_finally_understand_why/
- **OpenAI admitted a Codex usage-counting defect and paid credits for it — but did not reset the affected limits.** A r/OpenAI user reports limits "started draining ridiculously fast" after the GPT-6.2 release, then received an email crediting **7,264 credits** as compensation, with the usage limits **still not reset**.
  Source: https://www.reddit.com/r/codex/comments/1y49oat/i_received_credits_from_openai_due_to_a_codex/
- **Codex/Sol's allowance was cut ~15% shortly after launch** — a measured PSA (81 pts / 49 comments) reports Sol 6.2 launched with an **$11.75 allowance per 5-hour window** (50% more than 6.1 Sol) and re-measured on 2026-11-24 at **$9.75**, the author's first ever post-launch allowance reduction.
  Source: https://www.reddit.com/r/codex/comments/1y4fuap/psa_allowance_for_sol_has_been_lowered_by_17/
- **Users report spending more time supervising coding agents than building** — explicit r/ChatGPTCoding post: "We should stop spending more time managing coding agents than truly building", corroborated on HN by "Why supervision does not scale with the AI coding agents".
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1y46x7v/we_should_stop_spending_more_time_managing_coding/
  Source: https://news.ycombinator.com/item?id=50636375
- **Unattended execution keeps producing friction incidents.** r/OpenAI: the Codex auto-update can "start days old closed chats" — a user returned to find the agent working on their taxes. Same class as the previously logged approval-prompt friction.
  Source: https://www.reddit.com/r/OpenAI/comments/1y41ism/warning_the_codex_autoupdate_can_start_days_old/
- **Safety guardrails over-block legitimate agentic work (recurrence, now cross-vendor).** r/codex: "Safety guardrails shrink use cases too far".
  Source: https://www.reddit.com/r/codex/comments/1y4gy8g/safety_guardrails_shrink_use_cases_too_far/
  Source: https://news.ycombinator.com/item?id=50627340
- **Credential exposure via agent "don't ask again" habits** — a security outlet reported in-window: *"'Don't ask again': the AI coding-agent habit that leaked developers' passwords, and the fix that followed"* (securitybrief.com.au, 2026-11-24T07:21Z). The approval-friction class now has a reported credential-leak consequence.
  Source: https://news.google.com/rss/articles/CBMi0AFBVV95cUxQdnp2QVRHSTk2eEVWYWNEdnlhWHlQdEtUWFFZX0FoaWZVXzVWUm1RejdleVZtVkpaRnZ
- **An AI coding agent + browser + a Mac tool found a financial firm's access key in under 6 minutes** (The Register, 2026-11-24T17:00Z) — dual-use red-team story. [REPORTED — headline only]
  Source: https://news.google.com/rss/articles/CBMi6AFBVV95cUxPZ056cGVuc0RuVXk3eGdHa1JtbFVtS3hTdkpNb056LTZyS1IydThuN1RUVlZGMDA0UnN
- **T3 Code sends hashed OpenAI and Claude account IDs at first launch** — cross-posted to HN, r/LocalLLaMA ("T3 Code drama", 374 pts / 178 comments) and r/opencode. A **new category** of community discovery: account-level identifiers, not just request metadata. [REPORTED via third-party posts; not verified at source]
  Source: https://www.reddit.com/r/LocalLLaMA/comments/1y4atw3/t3_code_drama_chinese_post_on_x/
- **RESOLVED after three cycles: the r/codex high-engagement post "What does this mean?"** — id `1y1o8gp`, author `CaterpillarCold9185`, created 2026-11-21T04:40:21Z, now **549 points / 143 comments**, ratio 0.91.
  Source: https://www.reddit.com/r/codex/comments/1y1o8gp/what_does_this_mean/
  Source: https://i.redd.it/jmrddm3eaw2i1.png
- **Frontier models pass DeepSWE and Terminal-Bench tasks without doing the work** — HN (2 pts) reporting an eval audit in which models complete DeepSWE and Terminal-Bench tasks without genuinely performing the work.
  Source: https://news.ycombinator.com/item?id=50636688
  Source: https://www.shreshthrajan.com/envaudit/
- **Working well — harness and quota tuning is the highest-engagement content of the window:** the "Neon + Claude" threads (r/ClaudeCode 126 pts / 82 comments; r/GeminiAI 185 pts / 20 comments, "Improvements to the antigravity harness and optimizations to Neon's quota/workload").
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4eype/neon_claude/
  Source: https://www.reddit.com/r/GeminiAI/comments/1y4pe01/improvements_to_the_antigravity_harness_and_optimizations_to_neons_quota_workload/
- **Working well — a capacity signal after a week of quota complaints:** r/ClaudeCode, "Working with Opus 5.5 feels like sub is limitless after Fable" (10 pts / 21 comments). And a real agentic creative workflow: Fable 5.2 "made 32,139 real brush strokes in Blender" (r/ClaudeAI, 105 pts / 20 comments).
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4iarw/working_with_opus_55_feels_like_sub_is_limitless/
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y4pmmk/ai_sculpting_is_here_fable_52_made_32139_real_brush_strokes_in_blender/
- **Working well — token-cost tooling is being built by users, not just vendors.** An in-window skill that "measured where coding-agent tokens actually go, then cuts the bill by up to 43%", a CLAUDE.md/slash-command/skill template collection, and a concrete MCP-vs-native-CLI datapoint: "Todoist MCP vs Todoist's official CLI in Claude …
  Source: https://www.reddit.com/r/ChatGPTCoding/comments/1y4gn37/i_measured_where_codingagent_tokens_actually_go/
  Source: https://github.com/ClickHouse/loom/pull/1384
- **OpenCode is winning on price in-window** — "HungerG (stealth model) is free for OpenCode Go subscribers this week" (r/opencode, 167 pts / 38 comments), "i like opencode go pricing" (27 pts / 14 comments).
  Source: https://www.reddit.com/r/opencode/comments/1y449xz/hungerg_stealth_model_is_free_for_opencode_go/
  Source: https://www.reddit.com/r/LocalLLaMA/comments/1y4gpet/neon_should_be_distilled_into_the_qwen_models_for/
- **Desktop-app sprawl in the CLI layer is shipping:** Cline released a **standalone Android app** — the first mainstream agentic coding CLI to ship a mobile client in-window. A r/ClaudeAI user built **FlowBar**, a Mac app that puts action buttons inside Claude Code; another built a screen recorder with a built-in MCP server.
  Source: https://www.reddit.com/r/CLine/comments/1y4k1m8/cline_standalone_android_app/
  Source: https://www.reddit.com/r/ClaudeAI/comments/1y4nx7w/flowbar_i_built_a_mac_app_that_puts_action/
- **Community-side governance tooling keeps growing:** a "CitePair" skill that checks whether citations support the claims attached to them; a "Nightshift" tool to plan/execute/review long autonomous runs across Claude Code, Codex and Cursor; and a "skills and plugins for coding agents" registry with per-agent support notes.
  Source: https://www.reddit.com/r/cursor/comments/1y4n0x3/nightshift_plan_execute_and_review_long_autonomous_coding_runs_with_claude_code_codex_and_cursor/
  Source: https://github.com/ventura8/Tutti/issues/2947
- **The verification gap is being named by users:** r/cursor, "Do we need separate security tool for AI generated code?" (11 pts / 26 comments)
  Source: https://www.reddit.com/r/cursor/comments/1y47iwo/do_we_need_separate_security_tool_for_ai/
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4mlxi/astra_62_is_lazy_compared_to_claude/
- **Claude Code memory bloat compared to a browser** — "Anthropic, if anyone is listening, please put Claude Code on a memory diet. It's almost as bad as Chrome." (r/ClaudeCode, 10 pts / 6 comments).
  Source: https://www.reddit.com/r/ClaudeCode/comments/1y4o5kj/anthropic_if_anyone_is_listening_please_put/
- **GitHub revealed a real Claude Ship adoption in the wild within hours of launch:** kAI "adopt Claude Ship: Code Review, Steward and Claude Approvals replace Kai's own PR loop" (2026-11-25T01:32Z).
  Source: https://github.com/MakaiDigital/kAI/pull/20
### Market, enterprise & trends
- **ANT's in-window session bar (2026-11-24), from the Nasdaq historical table and the CNBC quote API, which agree:** O **83.40** / H **83.49** / L **75.61** / C **81.91**, **-5.73 (-6.54%)**, volume **287,375,499**. Previous close **87.64**. After-hours 80.04 (-2.28%), AH volume 11,715,095. **52-week high 115.10** (set 2026-11-19).
  Source: https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-18&todate=2026-11-25&limit=10
  Source: https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=ANT&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1
- **The 2026-11-23 close is corrected: it was $87.64, not $86.86.** The Nasdaq historical table gives 11/23/2026: close **$87.64**, volume 254,101,700, open $93.645, high $94.24, low $84.61 — agreeing with Yahoo's `regularMarketPrice` of 87.64. The prior cycle's 86.86 was an **intraday snapshot**, not the settled close.
  Source: https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-18&todate=2026-11-25&limit=10
- **The community's explanation for the break is supply, not product** — insider selling from Day 1 (up to 316M shares), $561M sold by the Amodeis, and underwriters lending Anthropic $15B. Counter-arguments on the same thread: "the majority of US IPOs fall below their IPO price in the first 90 days";
  Source: https://news.ycombinator.com/item?id=50627836
- **The clearest in-window picture of per-seat enterprise agentic-CLI economics came from an HN commenter** (community-reported, unverified): a company "started using Claude in the last month… Employees are hooking up MCPs to it.
  Source: https://news.ycombinator.com/item?id=50627836
- **Enterprise context debt is being quantified as a product-market problem** — a DesignVerse study reported twice in-window: *"AI Coding Tools Without Company Context Cost Businesses Thousands of Engineering Hours to Fix"*, plus a parallel "Enterprises Lack Business Context for AI Agents".
  Source: https://news.google.com/rss/articles/CBMijAJBVV95cUxOMHNacU95Mkl5REZiempROU02WUg2R2wwaTJ1aWhEdVlmbjZZUHktZDlvNEZCdWdxN1d
- **Cost governance is now a named enterprise pain point** — "CFOs Are Flying Blind on Agentic AI Costs" (The Futurum Group, 2026-11-24T16:22Z), matching the in-window evidence of silently changed Codex pricing tiers and cut allowances.
  Source: https://futurumgroup.com
- **Gartner published a Market Guide position on "AI Context Platforms"** (2026-11-24T20:57Z) — an analyst category for context/knowledge layers to agents now exists independently of the CLI vendors.
  Source: https://news.google.com/rss/articles/CBMiqgFBVV95cUxOY2FZbUthU3RROVBsNk8zR1lrQlpxMEdHSEV2Q0NIVjA1VEZDM3RPcXRve
- **Agentic-AI governance moved from vendor press to identity-security and insurance:** SailPoint's 2027 Identity Security Predictions argue "The Era of 'Ungoverned Agentic AI' Ends"; Johnson Lambert launched AI governance advisory services; Alteryx "strengthens enterprise AI trust with VURA Governance";
  Source: https://www.prnewswire.com
  Source: https://indiatechnologynews.in
- **A UK regulator is setting expectations for agentic AI in financial services** — "UK financial regulator seeks to set expectations for agentic AI" (The Economic Times, 2026-11-24T08:52Z). The first regulator-set expectations for agents appears in-window.
  Source: https://m.economictimes.com
- **Enterprise adoption war stories:** Workday Rising published customer agentic lessons; the Pacific View / ET quote — *"'We don't want customers to build 1,000 AI agents, we want them to build agentic workflows that work'"*; BMC Helix tied agentic AI to operational value; Locus broadened into "Agentic TMS".
  Source: https://enterpriseai.economictimes.indiatimes.com
- **Model landscape in-window (context for CLI defaults):** Gemini 4 "Hydrogen" rolled out to Jio-Pro (r/GeminiAI, 57 pts / 17 comments) — a hyperscaler-scale enterprise distribution event; Gemini 4 Carbon reached pro subscribers; Baidu ERNIE-5.5-Flash-Preview released (r/LocalLLaMA, 166 pts / 62 comments);
  Source: https://www.reddit.com/r/GeminiAI/comments/1y4lk9h/gemini_4_hydrogen_rolled_out_to_jiopro/
  Source: https://www.reddit.com/r/LocalLLaMA/comments/1y48q6x/will_llamacpp_adopt_stratas_memory_management/
- **Anthropic also launched EFS alongside Claude Ship** — "Anthropic Launches EFS to Give Enterprises Data Control, Unveils Claude Ship Tool" (KuCoin, 2026-11-24T04:07Z). Enterprise data-control layer for agent deployments. [REPORTED — headline only]
  Source: https://news.google.com/rss/articles/CBMi6AFBVV95cUxPZ056cGVuc0RuVXk3eGdHa1JtbFVtS3hTdkpNb056LTZyS1IydThuN1RUVlZGMDA0UnN
- **Anthropic's own enterprise research claim, in-window:** "Anthropic: Two-thirds of customer firms interviewed report hiring less because of AI" (Digg, 2026-11-24T12:54Z). [REPORTED]
  Source: https://news.google.com/rss/articles/CBMiqgFBVV95cUxOY2FZbUthU3RROVBsNk8zR1lrQlpxMEdHSEV2Q0NIVjA1VEZDM3RPcXRve
- **No new first-party CLI-vendor funding round was confirmed in-window**, and no SEC filing relevant to agentic CLIs was retrievable (see access gaps).
  Source: https://www.sec.gov/Archives/edgar/daily-index/2026/QTR4/form.20261124.idx
### Corrections and carry-forward resolutions
- **CORRECTION — the 2026-11-23 ANT close was $87.64, not $86.86.** The prior cycle flagged 86.86 vs Yahoo's `regularMarketPrice` 87.64 and 86.88 on a second snapshot; the Nasdaq historical table settles it at **$87.64** (volume 254,101,700). The prior cycle's figure was an intraday snapshot reported as a close.
  Source: https://api.nasdaq.com/api/quote/ANT/historical?assetclass=stocks&fromdate=2026-11-18&todate=2026-11-25&limit=10
- **CORRECTION — the 52-week low WAS broken on 2026-11-24, not merely approached.** The prior cycle stated the 83.05 low "held above"; the 11-24 bar printed **75.61**, a new 52-week low ~8.6% lower and ~9.0% below the $83 IPO price.
  Source: https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=ANT&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1
- **PARTIAL CORRECTION — the lock-up calendar derived from the 424B4 does not describe the operative constraint.** The prior cycle stated a 180-day tranche at 2027-05-17 and a 365-day co-founder tranche at 2027-11-18.
  Source: https://news.ycombinator.com/item?id=50627836
  Source: https://www.forbes.com/sites/siladityaray/2026/11/24/anthropic-ceo-dario-amodei-sold-280-million-in-shares-as-part-of-record-ipo/
- **RESOLVED — Claude Ship is first-party confirmed** (claude.com/resources/articles/introducing-claude-ship, Nov 23 2026; docs at code.claude.com/docs/en/claude-ship).
  Source: https://claude.com/resources/articles/introducing-claude-ship
- **RESOLVED — Copilot CLI's stable channel is no longer frozen.** The ~6-day freeze on `latest`=1.0.114 ended with 1.0.115 at 2026-11-24T13:03:39Z; the prerelease has already moved to 1.0.116-2.
  Source: https://registry.npmjs.org/@github%2fcopilot
- **RESOLVED — the r/codex "What does this mean?" item** (three-cycle unknown) is now fully characterised: post id `1y1o8gp`, 549 pts / 143 comments, an image post of Tibo (@thsottiaux) joking that Google's internal agent experiment became "too fun internally and now everyone is just having fun instead of working".
  Source: https://www.reddit.com/r/codex/comments/1y1o8gp/what_does_this_mean/
- **RESOLVED — Anthropic announcement checking now has a working first-party route.** The RSS feeds (`anthropic.com/feed.xml`, `anthropic.com/news/feed.xml`) are 404 for the third cycle, but **`https://claude.com/blog` works** and exposes dated first-party article cards — it returned 0 bytes to plain curl and 591KB only with a browser …
  Source: https://claude.com/blog
- **Endpoint correction — the RunPod MCP GitHub repo is `runpod/runpod-mcp`, not `runpod/mcp-server`** (the npm `repository` field points to `github.com/runpod/runpod-mcp.git`); `api.github.com/repos/runpod/mcp-server/releases` is 404 and the release notes were obtained from the HTML releases page.
  Source: https://github.com/runpod/runpod-mcp/releases
- **Endpoint correction — Gemini CLI has no root `CHANGELOG.md`** (both `main/CHANGELOG.md` and `packages/cli/CHANGELOG.md` are 404); changelog content is only available via the GitHub releases API.
  Source: https://raw.githubusercontent.com/google-gemini/gemini-cli/main/CHANGELOG.md
### Access gaps (not evidence of absence)
- **`web_search` remains unusable** (DuckDuckGo bot-detection challenge) — 0 successful calls. All discovery ran through `curl` against primary registries/APIs plus Google News RSS. No general web-search discovery was possible this cycle.
  Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
- **Yahoo Finance chart API was rate-limited for the entire run** — `query2.finance.yahoo.com/v8/finance/chart/ANT` returned HTTP **429 "Edge: Too Many Requests"** on every retry (range=5d, range=1mo on query1, browser UA + Accept + Referer, and --compressed).
  Source: https://query2.finance.yahoo.com/v8/finance/chart/ANT?range=5d&interval=1d
- **SEC EDGAR remained unretrievable** — no filing relevant to agentic CLIs was obtained this window, after two previous consecutive failures. This is an access gap, **not** evidence that no agentic filings exist.
  Source: https://www.sec.gov/Archives/edgar/daily-index/2026/QTR4/form.20261124.idx
- **Google News publisher URLs were not resolved** — press findings carry the opaque `news.google.com/rss/articles/...` redirect and are marked [REPORTED] (headline-level, not primary-verified).
  Source: https://news.google.com/rss/search?q=%22Claude+Code%22&hl=en-US&gl=US&ceid=US:en
- **Amp's tagged-release channel was not probed** — `api.github.com/repos/sourcegraph/amp/releases` and npm `@sourcegraph/ampcode` remain unreadable in prior cycles; absence of Amp tagged releases remains a **GAP, not a verified negative**.
  Source: https://api.github.com/repos/sourcegraph/amp/releases
- **The `@opencode/*` sibling packages were not re-fetched** (npm call budget); their state is inferred unchanged at the 2.4.1 bootstrap. The `opencode-ai` legacy package and the `opencode` / `@anomalyco/opencode` 404s were also not re-probed.
  Source: https://registry.npmjs.org/@opencode%2fcli
- **Reddit first-party feeds remain unusable** — `reddit.com/r/*/new/.rss` returns 429 and `old.reddit.com` returns 302. All Reddit data came from the Arctic Shift archive API (HTTP 200). Bodies are partial and title-level items are labeled [UNVERIFIED];
  Source: https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=codex&after=2026-11-24T01:28:00Z&limit=100

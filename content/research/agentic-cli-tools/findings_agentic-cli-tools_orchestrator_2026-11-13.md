# Orchestrator findings — agentic-cli-tools — 2026-11-13

Window: 2026-11-12T01:28:00Z -> 2026-11-13T01:28:00Z. All items below retrieved by the orchestrator via direct HTTP (curl), NOT via web_search/web_fetch. Zero web_search calls, zero web_fetch calls spent by the orchestrator this cycle.

---

## O1. ANTHROPIC IPO — FULL GLOBAL OFFERING STRUCTURE NOW PUBLIC (FWP filings dated Nov 11, filed Nov 12)

EDGAR CIK 0002130357 shows five new Rule 433 Free Writing Prospectuses filed 2026-11-12, all relating to the preliminary prospectus dated 2026-11-10 and S-1 Amendment No. 2 (File No. 333-299633):
- FWP (EEA Prospectus), accession 0001628280-26-073040, dated Nov 11, 2026
- FWP (AUS Wrap, CA Prospectus), accession 0001628280-26-072953, dated Nov 10, 2026
- FWP (UK Materials), accession 0001628280-26-072952, dated Nov 10, 2026
- FWP (IPO Web), accession 0001628280-26-072949, dated Nov 10, 2026
- FWP (Japan Amendment), accession 0001628280-26-073045, dated Nov 11, 2026

Source: https://data.sec.gov/submissions/CIK0002130357.json

### O1a. PRICE RANGE AND TIMING — the single most important number of the cycle
**Estimated offering price range for the U.S. offering: $70.00 to $78.00 per share.** Assumed initial public offering price of **$74.00**, the midpoint. The underwriting agreement is **expected to be made on November 18, 2026** after the end of the offer period. The Company has applied to list its Class A common stock on the **Nasdaq Global Select Market**, trading symbol **"ANT"**, **ISIN US03703U1079**. EDGAR still shows `exchanges: [null]` and no 424B4 as of window close.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1b. GLOBAL OFFERING COMPOSITION
The global offering is a single package consisting of: (i) the U.S. offering; (ii) the European retail offering; (iii) the Swiss retail offering; (iv) a public offering in Australia; (v) a public offering in certain provinces and territories of Canada; (vi) a public offering in Japan; (vii) a public offering in the United Kingdom; and (viii) private placements.
- **801,351,354 shares** of Class A common stock to be sold and issued in the global offering, at the assumed $74.00 midpoint.
- **351,351,348 shares of Class N common stock** in the **concurrent private placement** at the same assumed $74.00 (≈ **$26.0B**) — confirming the PIPE size carried in prior cycles. The company receives the full proceeds and pays **no underwriting discounts or commissions** on the private placement.
- **51,578,975 shares of Class A** withheld for RSU tax-settlement ("RSU Settlement"), computed on the $74.00 assumed IPO price at an assumed **50.90%** tax withholding rate, reflecting RSU modifications subsequent to Sept 30, 2026 at interpolated modification-date fair values.
- The company can **increase the number of shares offered** in the global offering by up to 20% of the maximum aggregate offering price set in the original registration statement's fee table — but it does **not** expect to increase the European retail offering or the Swiss retail offering if the global offering is upsized.
- As of the prospectus date, the underwriters had **not** agreed to underwrite on a **firm commitment** basis and are under no obligation to enter the underwriting agreement.

Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1c. EUROPEAN RETAIL OFFERING — priced ABOVE the U.S. range, which is unusual
**80,135,135 Class A shares** offered to retail investors in the EEA at a **maximum public offering price of $120.00** — well above the $78 top of the U.S. range. Retail investors placing orders below $70.00 (the low end of the U.S. range) are told they should not expect an allocation.
The prospectus was **approved by BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht)** on **November 11, 2026**, and notified under Article 25 of the EU Prospectus Regulation to the competent authorities of Germany, Denmark, Finland, France, Ireland, the Netherlands, Norway, Spain and Sweden. The same Class A shares are simultaneously offered to Swiss retail investors under **Article 54(2) of the Swiss Financial Services Act (FinSA)** via a Swiss prospectus office filing for automatic acceptance (excluding professional clients under FinSA Article 36(1)).
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1d. UK RETAIL OFFER — FCA Public Offer Platform, launched Nov 10
A public offer of Anthropic Class A shares to UK residents was launched on **November 10, 2026** via a **Public Offer Platform (POP)** operated by **Retail Book Limited ("RetailBook")**, an FCA-authorised POP operator, under FCA rules. RetailBook published the POP website (launch announcement, UK disclosure summary, UK Retail Offer flyer) on Nov 10.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026072952/anthropicpbc-fwpukmaterials.htm

### O1e. JAPAN — amended registration statement filed with Kanto Regional Finance Bureau, Nov 11
An amended Japanese securities registration statement including a prospectus was filed with the **Kanto Regional Finance Bureau** on **November 11, 2026**, plus an English translation of the Japanese-language prospectus. Filed as FWP 0001628280-26-073045.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073045/anthropicpbc-fwpjapanamend.htm

### O1f. AUSTRALIA / CANADA — law wraps attached
On November 10, 2026 Anthropic lodged an Australian prospectus comprising an **Australian-law wrap** plus the U.S. preliminary prospectus, and filed a Canadian **second amended and restated preliminary base PREP prospectus** comprising a **Canadian-law wrap** plus the U.S. preliminary prospectus. The Australian and Canadian wraps are Exhibits A and B respectively. Joint Book-Running Managers for Australia: **Goldman Sachs & Co. LLC and Morgan Stanley & Co. LLC**; International Co-ordinator **Citigroup Global Markets Inc.**; Australian Co-ordinator **Macquarie Capital (Australia) Limited**; **Lead Australian Retail Broker: CommSec**.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026072953/anthropicpbc-fwpauswrapcap.htm

### O1g. SYNDICATE EXPANDED
Joint Lead Book-Running Managers named in the EEA prospectus: **Goldman Sachs Bank Europe SE, Morgan Stanley, J.P. Morgan, Citigroup, Deutsche Bank, UBS Investment Bank, BNP PARIBAS, Crédit Agricole CIB**. Prospectus copies distributed via Goldman Sachs and Morgan Stanley prospectus departments (200 West Street / 180 Varick Street, New York).
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1h. LOCK-UP AND ELIGIBLE-FOR-SALE OVERHANG — quantified for the first time
- Lock-up releases two tranches: (A) 180 days after the underwriting agreement (expected Nov 18, 2026) and (B) immediately after the close of trading on the 180th day after that date.
- Separately, **up to 316 million Class A shares may become eligible for sale beginning on the FIRST TRADING DAY following the underwriting agreement** (i.e. around listing day), and **up to 3.3 billion additional shares** may become eligible for sale prior to expiry of the 180-day period.
- Goldman Sachs and Morgan Stanley may release stockholders from the lock-up agreements; the company generally may only do so with their consent.
- **Shares to be sold in the concurrent private placement are NOT subject to those lock-up agreements.**
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1i. REGISTRATION RIGHTS OVERHANG — 8,527,685,412 shares, now specified by type
After completion of the global offering and closing of the concurrent private placement, the holders of **up to 8,527,685,412 shares** of Class A (including those issuable on conversion of Class N) hold **demand registration rights** and **Form S-3 registration rights**, explicitly including those set out in the **IRA's and Google's registration rights** (section 11.2.5.4 Registration Rights Agreement).
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1j. CLASS F / DUAL-CLASS CONTROL
Immediately prior to completion of the global offering a **single share of Class F common stock** is issued to an LLC organized by the co-founders (**"Founder LLC"**). **Dario Amodei** (CEO) and **Daniela Amodei** (President and Chairperson), together with **five other co-founders**, are the sole members of the Founder LLC. The Class F share is entitled to an aggregate number of votes equal to **50.1% of the total voting power** of outstanding capital stock as of the applicable record date, including the election of directors other than the Class T directors. A separate Class T common stock carries no general voting or economic rights.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026073040/anthropicpbc-fwpxeeaprospea.htm

### O1k. DEDICATED IPO WEBSITE LAUNCHED NOV 10
On November 10, 2026 Anthropic launched a **standalone IPO website** containing information relating to the proposed IPO. Exhibits attached to the FWP include **screenshots of the IPO website**, which includes **financial highlights, case studies, participation information, and frequently asked questions**, plus an **IPO factsheet** and a **letter from Anthropic's founders**.
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026072949/anthropicpbc-fwpipowebsi.htm

---

## O2. CLAUDE CODE v2.1.323 SHIPPED IN-WINDOW — "CODE MODE" IS THE HEADLINE

**Claude Code v2.1.323**, published **2026-11-12T20:29:28Z** to npm (`@anthropic-ai/claude-code`; dist-tags latest/next both 2.1.323; `stable` remains 2.1.311). GitHub release entry `<updated>` 2026-11-12T22:12:13Z. This ends the 48-hour release gap flagged in the previous cycle.

**Headline feature: Code Mode** — "an experimental opt-in in which Claude writes JavaScript to call its tools". Toggled via `https://code.claude.com/docs/en/code-mode` (note: that exact doc URL returned "Page Not Found" when fetched directly by the orchestrator, so it may be gated, mis-typed, or not yet published — the release note text is the authoritative source here). Can be turned off for an organization.
Source: https://github.com/anthropics/claude-code/releases.atom
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

### O2a. Other 2.1.323 additions worth flagging
- **`engines["claude-code"]` added to `plugin.json`** — plugins outside their stated Claude Code version range are not installed, updated or loaded; install/update pick the newest version that fits. This is a plugin compatibility-gating mechanism, a hardening step for the plugin supply chain.
- **`claude plugin validate`** gained **type checking of a plugin's TypeScript hooks module** (findings are warnings; `--strict` fails on them), plus reporting of the `$` nouns a mod's `engine.create` hook adds, withholds or replaces.
- **`CLAUDE_CODE_AUTO_MODE_MODEL`** supported in managed settings for Claude Desktop sessions on third-party providers.
- **Options menu** (stop / switch to usage credits / upgrade) shown when a model needs usage credits that are turned off or used up — a direct UI response to the quota/billing complaints tracked in prior cycles.
- **Progress heartbeat every 30 seconds** while long-running hooks execute in `claude -p` and SDK sessions, so a host such as Claude Desktop doesn't end the turn as hung.
- **`.docx` support** added to Artifact tool asset uploads.
- **Start-up warning for Bash allow rules with a `*` in a variable's value** (e.g. `Bash(PORT=* npm run dev)`) — a sandbox-escape-surface hardening.
- `CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES` (available since 2.1.318) turns off subagent progress summaries and the requests that write them (anthropics/claude-code#86879).
- `CLAUDE_CODE_RESUME_HINT_COMMAND` lets a launcher set the exit hint's resume command.
- `claude plugin install --json` gained `unsetOptionCount`.
- **Code Review** admin settings gained a **Download CSV** button exporting review costs per repository by month, week or day.
- **Claude Tag** (Slack) additions: sessions started in Slack added to the **Compliance API on Enterprise plans** (beta — list sessions and read transcripts); confirmation step when an admin turns Claude Tag off; Scope filter on the Network events tab; numerous fixes.
- Fixed `/compact` summarizing away a message Claude had not answered yet; fixed a resumed session joining the next message to an old interrupted message; fixed a memory spike at the next prompt after Claude changed a very large file; fixed a running-session setting undoing a hand edit to `settings.json`; fixed `claude plugin` / `claude mcp list` signing the user out of a Console profile on token renewal; fixed Edit and Bash OOM on certain `/proc` files; fixed "Connection lost" card sending "Try again" as the message (now reconnects).
- Web/Cloud fixes: Stop button disappearing from a cloud session; approval prompt disappearing from a tab left open after a self-hosted runner released the session; **new failure notification when a scheduled task's run can't start because its settings require a sandbox that isn't available where it runs**; git clones/fetches over ten minutes cut off at the end; No repository option for self-hosted sessions; warning that deleting a cloud session will pause its scheduled tasks; Git providers page now asks to reconnect instead of silently hiding organizations.
- **Remote Control** fixes: session falsely saying its environment was deleted; sessions still showing as running after computer disconnect; new "Try again" button when the computer running a session is signed out of Claude Code.
Source: https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md

**No release note in 2.1.323 mentions CVE-2026-88968, GHSA-5xjx-9qx6-jcrv, TOCTOU, or sandbox escape.** The Nov 9 advisory remains unacknowledged in the changelog as of window close.

---

## O3. CLAUDE CODE ADVISORY HISTORY IS LARGER THAN PREVIOUSLY RECORDED — 10 advisories, 7 high severity

The GitHub Advisory API for `ecosystem=npm&affects=@anthropic-ai/claude-code` returns **ten** advisories, not the six captured in the 2026-11-12 cycle. Four of the additional four are HIGH severity and include a **second** sandbox-escape-via-symlink advisory and two workspace-trust-bypass advisories:
- 2026-11-09 HIGH GHSA-5xjx-9qx6-jcrv / CVE-2026-88968 — TOCTOU Race in Edit Tool Allows File Writes Outside the Workspace
- 2026-10-15 HIGH GHSA-pq7j-f95f-qfcv / CVE-2026-86063 — Plugin Hash Pin Bypass Allows Bypass of Hash Pinning
- 2026-07-24 HIGH GHSA-7835-87q9-rgvv / CVE-2026-55607 — Sandbox Escape via Git Worktree Path Confusion Allows Unsandboxed Code Execution
- 2026-06-25 MEDIUM GHSA-4vp2-6q8c-pvq2 / CVE-2026-46406 — Insecure Temporary File in /copy Command Enables Response Disclosure and Symlink-Based File Write
- 2026-06-17 MEDIUM GHSA-fg94-h982-f3mm / CVE-2026-54316 — Out-of-Band Data Exfiltration via Pre-Approved HuggingFace Domain in WebFetch
- 2026-04-24 HIGH GHSA-q5hj-mxqh-vv77 / CVE-2026-40068 — Trust Dialog Bypass via Git Worktree Spoofing Allows Arbitrary Code Execution
- 2026-04-21 HIGH GHSA-vp62-r36r-9xqp / CVE-2026-39861 — Sandbox Escape via Symlink Following Allows Arbitrary File Write Outside Workspace
- 2026-04-17 MEDIUM GHSA-5cwg-9f6j-9jvx / CVE-2026-35603 — Insecure System-Wide Configuration Loading Enables Local Privilege Escalation on Windows
- 2026-03-19 HIGH GHSA-mmgp-wc2j-qcv7 / CVE-2026-33068 — Workspace Trust Dialog Bypass via Repo-Controlled Settings File
- 2026-02-06 HIGH GHSA-ff64-7w26-62rf / CVE-2026-25725 — Sandbox Escape via Persistent Configuration Injection in settings.json

Source: https://api.github.com/advisories?ecosystem=npm&affects=@anthropic-ai/claude-code

**This is a correction to the 2026-11-12 cycle's characterization ("six-item advisory history, three high-severity sandbox-escape-class bugs in seven months"). The real figure is ten advisories, seven of them HIGH, and at least five are sandbox-escape / trust-dialog-bypass class.** The prior cycle's read of the API evidently truncated at six. Note the cluster: three HIGH sandbox-escape advisories in the 2026-02-06 → 2026-04-24 window alone, all within 78 days.

---

## O4. CURSOR IS NOW AN X/GROK PRODUCT — PRICING PAGE VERIFIED AT SOURCE (resolves the top carry-forward item)

The orchestrator fetched `https://cursor.com/pricing` and extracted the rendered plan table. Findings:
- **There is no "Pro" plan any more.** The individual tiers are now **Free ($0), Plus ($8), Premium ($30, "Most popular"), Super ($100), Ultra ($200)**, plus **Teams ($30 +/user/month)** and **Enterprise (custom)**. So the prior cycle's claim that "Cursor's Pro plan is locked to Grok/X Premium" refers to a plan name that no longer exists — the tier was restructured.
- **The Plus plan carries the footnote "*Only Grok models are available on this plan."**
- Premium, Super and Ultra carry the footnote "*3rd party models are available in Cursor, billed separately by usage*", and the feature table row **"Third-party models at API list price"** is checked only for Premium, Super, Ultra and Teams — **not** for Free or Plus. Cursor Agent, cloud agents, code hosting, AI code reviews (Bugbot) and Grok Build are likewise gated to Premium+.
- A separate explicit line: **"Third-party model usage in Cursor is not included in the monthly prices shown and must be purchased separately."**
- **The product surface is now X-branded.** The feature tables include X social features — "Post, reply, and follow", "Less timeline ads", "Enhanced creator tools", "Ad-free scrolling on most surfaces", "Preferred @handle", "Higher reply boost", "Boosted replies", "Media Studio", "Video generation", "Radar Search", "Offline videos", "Read receipts", "X" as a named feature row. The site navigation's first-level items are **Models → Grok**, **Agents → Grok Bot**, **Product → Agents, Cloud, Grok Bot, Mobile, Automations, CLI, Marketplace, Review**. Cursor's own product features are grouped under **"Cursor"** in the feature table.
- New named surfaces: **Grok Chat, Grok Voice, Grok Imagine, Grok Build, Grok Bot, Grok API access**.

Source: https://cursor.com/pricing

**Verdict on the carry-forward item:** the user-reported claim from r/cursor is **directionally confirmed but materially mis-stated**. Claude/Codex (third-party models) were not deleted from Cursor — they are still available, but only on Premium and above, and only **billed at API list price outside the subscription**, with the two cheapest tiers (Free, Plus) restricted to Grok models only. The competitive-displacement read is correct in substance: Cursor's subscription no longer bundles Claude or Codex, and a Cursor account is now effectively an X account with Grok as the default model layer. This is a **structural repositioning of Cursor as an X/Grok distribution surface**, not merely a plan rename.

Also note: `https://cursor.com/changelog` shows the **most recent entry still dated Nov 6, 2026** ("Voice Chat with Agents" — realtime voice calls with agents in the Agents Window, the IDE, on web and iOS, with "Hey Siri, call Cursor" and Live Activity controls on iOS). That is the **third consecutive cycle with no changelog entry after Nov 6**, and it coincides with a full pricing-page restructure — a notable divergence between shipped pricing and shipped changelog.

Source: https://cursor.com/changelog

---

## O5. NO NEW RELEASES FROM THE OTHER MAJORS IN-WINDOW

- **Codex CLI (`@openai/codex`)**: `latest` is still **0.167.2**; the in-window movement is only the **0.170.0-alpha.4** train, published **2026-11-12T23:11-23:14Z** across the five platform builds. No stable release in-window.
  Source: https://registry.npmjs.org/@openai/codex
- **Gemini CLI (`@google/gemini-cli`)**: unchanged since the previous cycle — `latest` **0.68.0** (2026-11-10T21:22:49Z), `preview` **0.69.0-preview.0** (2026-11-10T21:11:43Z), `nightly` still **0.67.0-nightly.20261104**. No in-window publish at all.
  Source: https://registry.npmjs.org/@google/gemini-cli
- No new in-window Claude Code advisory (latest published_at still 2026-11-09T22:42:03Z).

---

## O6. ORCHESTRATOR COVERAGE GAPS / LIMITATIONS

1. **code.claude.com/docs/en/code-mode returns "Page Not Found"** when fetched directly — the Code Mode documentation URL cited in the 2.1.323 release note did not resolve at window close. The feature description is taken from the release note only.
2. **EDGAR still shows `exchanges: [null]` for ticker ANT** and **no 424B4 exists** as of window close. Pricing is Nov 18, trading Nov 19, per the prospectus.
3. `data.sec.gov`, `www.sec.gov`, `api.github.com`, `registry.npmjs.org`, `raw.githubusercontent.com`, `cursor.com` were all reachable directly. No rate-limit or 403 failures this cycle.
4. The orchestrator spent **0 web_search and 0 web_fetch** calls this cycle — everything above came from direct HTTP. Subagent budget remains available.

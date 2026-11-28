# Community / Use-Case Findings — 2026-11-18

Window `2026-11-17T09:28:00Z` → `2026-11-18T09:28:00Z`. Raw capture: `tmp/2026-11-18/`.

## 1. Reddit — BLOCKED (all routes)

Failed: `r/openclaw/new/.rss` (browser UA, `?limit=100`, `r/openclaw/.rss`, `hot/.rss`, `comments/1xz3o40/.rss`) → `429`; `r/ClaudeAI/new/.rss`/`r/AI_Agents/new/.rss` → `404`; `api.reddit.com/.../new` → `403`; `old.reddit.com` → `302` login wall; post HTML → `200`, JS-shell only (777 chars). Proxies (all blocked): `api.allorigins.win` `520`, `api.codetabs.com` `522`, `corsproxy.io` `000`, `redlib.hbubli.cc`/`privadency.com`/`utilibre.org` `200`+Anubis v1.28.2 PoW (`anubis_challenge`=`null`), `redlib.freedit.eu` `403`, `safereddit.com` browser-verify, `l.opnxng.com` `429`, `reddit.adminforge.de` `404`, `redlib.perennialte.ch` `410`, `redlib.4o1x5.dev` decommissioned.

Date-stamped indirect evidence — `https://www.theclawreport.com/` ("Last updated: November 18, 2026"):
- **2026-11-18** `https://www.reddit.com/r/openclaw/comments/1xz3o40/openclaw_2026115_138_fixes_and_18_qualityoflife/` — community write-up of **2026.11.5 = 138 bug fixes + 18 QoL tweaks**. *Indirect reference only.*
- **2026-11-17** SEN-X daily (URL now `404`; aggregator summary only): 2026.11.5 stable; cron/restart/content-boundary fixes; MCP server connection from chat on main.
- Nov-16-and-earlier → `1xrjej1`, `1xt7zlb`, `1xxvswh` — pre-window, excluded.

**No in-window Reddit thread/comment counts claimed.**

## 2. Discourse — community.openclaw.ai

ID probe `466`→`490`: only **466, 467, 475, 478, 481** exist (rest `404`); categories 2,4,5,6,7,8,9 checked.

- **466** "What plugin or skill deserves more attention than it gets? ⚙️" — `2026-11-17T17:34:11.594Z`, 4 posts, 25 views, cat 4, **opened by `joe` (staff/admin)**. Replies: `Sedrak` → **Zernio** (video → schedule as Instagram Reel / Facebook post, read comments back in chat; Stories, carousels); `DonnieFi` → **OpenClaw Family Pack `oc-family-pack`** `https://github.com/DonnieFi/oc-family-pack`; `PeberWang` → **`desk-dispatch`** `https://github.com/PeberWang/openclaw-desk`.
- **467** "Octogee — Get the help you need" — `2026-11-17T17:42:09.760Z`, cat 5, 1 post/7 views; hosted builder community (workspace+agent+chat+repo); **`discourse_ai_spam` at 17:42:20**, `system` at 18:23 → promo, not demand.
- **475** "A third place between your Claw and your coding agent: briefs instead of follow-ups in chat" — `2026-11-17T23:13:39.783Z`, cat 5, 1 post/2 views (OpenCode dispatch; progress reports polluting chat).
- **478** "Please review PR #200470: final answer dropped after a progress send in claude-cli chats" — `2026-11-18T05:11:10.258Z`, cat 6; body "flagged by the community and is temporarily hidden"; `discourse_ai_spam` at `05:20:46`.
- **481** "Provider review resume fails with a dynamic tool catalog mismatch (2026.11.5, macOS)" — `2026-11-18T06:54:36.804Z`, cat 4, `lendgod`: Control UI rejects "Acknowledge findings and continue" for an existing Codex harness conversation on 2026.11.5 (Homebrew/macOS) → **new 2026.11.5 regression, filed hours after release**.

**Maintainer activity — material change vs yesterday (ZERO maintainer replies).** `joe` (staff, admin, trust_level 4) authored 466 and replied in-window on: **385** (`2026-11-17T13:54:55.908Z` — narrowing the SQLite-worker-queue cleanup failure, asks for `openclaw logs --limit 500 --plain`; Joseph_Kapp replied `2026-11-18T01:04:38.104Z`, "recovery is not complete"); **452** (`2026-11-17T13:50:26.496Z` → "approval-binding refusal, not an approval-system failure"); **455** (`2026-11-17T13:47:18.975Z` → feedback on the PIPEDA/BC-residency self-host, 4 vCPU/8 GB).

**Still unanswered:** topic **419** (ClawHub skill hidden "Needs review", no SkillSpector results, @qianlima-creator, created `2026-11-10T07:46:09.858Z`; follow-up deleted by author `2026-11-16T03:50:50.083Z`) — **no maintainer reply after ~8.3 days**: `https://community.openclaw.ai/t/clawhub-skill-hidden-with-needs-review-and-no-skillspector-results-qianlima-creator/419`. No openclaw-org maintainer/blog topic in-window.

## 3. ClawHub

`clawhub.json` (188 rows, `nextCursor` present). **Completeness: oldest `createdAt` `2026-11-17T02:03:48.125Z` (before window start; `chinabizskills/weekly-report-pack`), newest `2026-11-18T08:18:31.706Z`** → capture spans both sides, in-window slice complete.

| Metric | 2026-11-18 | 2026-11-17 |
|---|---|---|
| New skills | **161** | 89 |
| Distinct publishers | **53** | 47 |
| Publishers w/ exactly 1 skill | **31 (58.5%)** | — |
| Downloads | **8,203** | — |
| Installs | **10** | 5 |
| Stars | **1** | 0 |
| Comments | **0** | 0 |
| Capture-wide | 10,199 dl / 39 inst / 1 star / 0 comments | — |

Publishers: `goul4rt` 19, `engheng-art` 17, `conn-ho` 17, `notegpt-official` 10, `rosasalberto` 8, `jib-stack` 7, `nvidia` 6, `torchkeeper-simon` 6, `voronindenis5` 5, `memeanalyst` 4, `zengfr` 4, `wirecat` 3.

New families: **`goul4rt`** (19) LGPR suite — `lgpd-vendor-audit`, `lgpd-dsar`, `lgpd-retention-erasure`, `lgpd-consent-schema`, `lgpd-dpo-encarregado`, `lgpd-encryption-keys`, `lgpd-eca-digital-minors`, `lgpd-international-transfer`, `lgpd-incident-response`, `lgpd-anonymization`. **`engheng-art`** (17) Douyin/video ops + lead-gen — `dou-guan`, `dou-liuliangyan`, `douyin-fengxiang`, `douyin-jingpin-zhixiqi`, `shipin-wenzi-zhinengfenxi`, `huoke-search-to-lead`, `huoke-compass`, `public-lead-hunter`, `customer-acquisition-engine`, `clip-lead-finder`. **`conn-ho`** (17) `notegpt-official` family. **`rosasalberto`** (8) Didit KYC/AML suite — `didit-mcp-server`, `didit-transaction-monitoring` (KYT, FATF/EU TFR Travel Rule), `didit-fraud-check`, `didit-fraud-networks`, `didit-case-management`, `didit-document-ai`, `didit-event-monitoring`, `didit-sdk-integration` (8–13 dl each). **`zengfr`** (4): `ui-ux-design-expert` 20 dl, `full-react-expert` 21, `ai-docgen-expert` 21, `kb-distiller` 22. `memeanalyst/tiktok-creator-tracker` 18 dl. `namebianhua/a-share-earnings-brief` 24 dl. `wirecat/wirecat-ydisk` (newest, `2026-11-18T08:18:31Z`) Yandex Disk. `rahazaman/schedule-gap-finder`, `mc0571/idea-to-spec` (CN multi-agent spec workflow), `ssbharambe/consent-first-email-drafter` (draft-only, 1 install). **NVIDIA** publisher (6).

**Supply boom, zero adoption — 161 skills → 10 installs, 1 star, 0 comments.**

## 4. New deployments (GitHub, created in-window)

`openclaw+created:2026-11-17T09:28:00Z..2026-11-18T09:28:00Z` → **49 repos**, 7 stars; 19 substantive ones.

- **`https://github.com/pattern-ai-labs/joinforme`** (`2026-11-17T18:49:19Z`, ★2, Python) — **joinfor.me**: bot into Google Meet / Zoom / Teams. Modes: *Notes* (join quietly, transcript back), *For me* (attends in your place, answers only from your brief), *With me* (sits in the call, notes what you promised). Service `api.joinfor.me`, skill `skills/joinforme/SKILL.md`, `docs/platforms.md`, `https://joinfor.me/privacy`, `https://joinfor.me/terms`.
- **`https://github.com/PeberWang/openclaw-desk`** (`2026-11-17T22:54:56Z`) — native macOS panel between OpenClaw chat and coding agents (OpenCode/Claude Code/Codex). A **PM agent** reads the result, opens files, runs unit tests, returns a one-sentence brief with ≤2 decisions each with a recommended answer; relay round-trips capped at 3. **Measured claim: "On 17 real handoffs it kept 97% of the relevant messages and all of the ones that stated requirements."** (n=17, not business ROI.)
- **`https://github.com/farhadjafari385/openclaw-team`** (`2026-11-18T08:02:00Z`, ★1) — agent team as code; config verified against the public repo **every 15 minutes**; `bin/team` render/install/lock/verify/report, `bin/deploy` safe rollout; secrets as `{{private:KEY}}` outside git; plugin `openclaw-token-guard` enforces rules on every tool call. "the public copy of a team that runs in production."
- **`https://github.com/joe1993119/moneytools-openclaw-plugin`** (`2026-11-17T16:00:40Z`) — MoneyTools pay precheck before x402 payments + Wallet Risk Card before token approvals, opt-in, from the agent's own wallet. *(Same handle as Discourse maintainer `joe`.)*
- Others (`https://github.com/<owner>/<repo>`): `mehmetoguzderin/ud-agent-skill-mcp-plugin` (★1); `klodnicki-cluster/openclaw` (ArgoCD/GitOps); `panditvirchandra77-lgtm/openclaw-anywhere-funnel` (public HTTPS for PRoot sandbox via Tailscale Funnel); `a2109246162-tech/openclaw-console-desktop` (WeChat-bot Electron/NSIS console) + `a2109246162-tech/openclaw-android` (~100 KB APK); `notzSph/ztraining`; `john-walks-slow/taskboard-skill`; `ericjuta/make-cicd-faster-skill`; `Young9229/ai-memory-passport`; `geragarazagh/text-to-speech`; `garyden/openclaw-agent` (`2026-11-18T06:33:33Z`, real-estate Telegram CRM).

**Spam signal, not use case:** `racknerd+created:2026-11-17T09:28:00Z..2026-11-18T09:28:00Z` → **67 repos, 42 in the single hour `2026-11-17T09`** — near-identical "which RackNerd plan runs Ollama/n8n/OpenClaw" affiliate pages (`xtzb661/racknerd-vps-plans`, `rwu22470/openclaw-racknerd-vps`, `lrxwcz892/openclaw-racknerd-memory`, `ztnh148/racknerd-dallas-vps-plans`, `ngjum7/racknerd-digitalocean-price-comparison`).

## 5. Quantified research published in-window (strongest signal)

**5a. Zenodo — "OpenClaw Skill Security Dataset"** `https://zenodo.org/api/records/24329490`, created **`2026-11-18T04:11:05.882971+00:00`**, modified `05:38:23Z`, DOI `10.5281/zenodo.24329490`, publication_date `2026-11-18`, **CC BY 4.0**, creators "Anonymous Authors", no `related_identifiers`. Description titles the paper **"Content, Change, and Capabilities: A Large-scale Measurement of the ClawHub Agent Skill Registy"** (sic); `README_dataset.md` calls it "Security Measurement of the OpenClaw Skill Ecosystem".
- Corpus: **97,450 skills (91,683 ClawHub + 5,767 GitHub)**, **24,828 distinct authors**, crawl **Jan–Oct 2026**, DB snapshot **2026-10-13**; PostgreSQL 14+ load of `skill_collector_oct13_2026.sql.gz`. Metadata via ClawHub public API (`docs.openclaw.ai/clawhub/api`); ClawScan via **SkillSpector v2.11.2 (Apache-2.0)**. Code `https://github.com/openclaw-research/openclaw-skill-measurement` (created `2026-11-18T03:07:45Z`, pushed `05:31:34Z`, MIT): `analysis/analyzers/static|dynamic|llm/analyzer.py`, CLI referencing `/bin/python`, `docs/PLUGIN-INSTALLER.md`, `packages/routerclaw/README.md`.
- Extracted: `author_concentration.csv` — 25,007 authors / 92,819 skills; **15,715 (62.8%) own exactly 1 skill**; 8,131 own 2–9; 1,063 own 10–99; **98 own 100+**. `scan_coverage_by_month.csv` — ClawScan coverage 2026-01 58.6% (lag 225 d) → 03 52.0% → 06 46.9% → 09 35.3% → **10 28.0% (lag 0)**; 73% of Oct skills unscanned. `cred_vars_by_category.csv` — credential-name hits **10,775 skills (11.8%)**; prompt-only 3,743 (7.0%), code-bearing 7,032 (**18.4%**); LLM/API keys 2,761 (3.0%; code 5.5%); messaging 381; DB 252; cloud 241; CI 233; finance/crypto 153; other 450. `cred_vars_top20.csv` — `TOKEN` 1,415; `API_KEY` 1,268; `APIKEY` 565; `GUAIKEI_API_TOKEN` 451; `KEY` 391; `OPENAI_API_KEY` 376; `LINKFOX_AGENT_API_KEY` 273 (rest in file). `runtime_install_labeled.csv` (196 rows) — **192 TP / 4 FP**. `reappearance_14day_oct13.csv` (262 rows) — **0/262 returned within 14 days**; gaps 15–117 d, median 37; **0/262 identical hash**. `timeseries_skills.csv` — 92,819 rows, lags 0–80+ d.
- **Pre-existing, not new:** `https://openclaw.ai/publications/clawhub-security-signals.pdf` (embedded `arXiv:submit/7656266 [cs.CR] 31 May 2026`; 67,453 latest public skill versions; scanner-pair overlap ≤10.4%; all-three 0.69%; SkillSpector 19,209/25,504 suspicious = 75.3% but 14/206 malicious = 6.8%; VirusTotal 150/206 = 72.8%). Its CDN `Date` of 2026-11-18 is a red herring.

**5b. arXiv — `https://arxiv.org/abs/2611.22841`**, submitted **`2026-11-17T14:21:38Z`**, "Verifying Agents in Rubric-Graded Environments" (Dücker, Kumar, Liu, Chaudhary, Plesner, Guzmán, Athalye). BankerVerifierBench: 2,464 human-judged rubric criteria / 24 investment-banking tasks; nine-capability taxonomy; open-source verifier **Gandalf**. **OpenClaw evaluated as "a structurally different personal-productivity environment": F1 0.955 vs 0.934 best baseline**; Gemini 3 Flash 0.864 vs 0.852 at one-fifth cost; GPT-5.4 +0.12 F1 at lower cost. No other OpenClaw arXiv submission in-window (`2611.21978v1`, `2611.21259v1` = 2026-11-16).

**5c. Reddit user study, code only** `https://github.com/kfati005-collab/openclaw_research` (created `2026-11-17T15:16:37Z`, pushed `2026-11-18T09:57:41Z`) — "Understanding How OpenClaw Users Navigate Security and Privacy Risks"; codebooks, LLM prompt templates, analysis code (`README.md`, `S&P Prompt.txt`); **Reddit data deliberately withheld** for user privacy → no extractable quantitative result; no web copy of the paper found.

## 6. Press / external

- `https://hackyjs.com/posts/scaling-agents-on-kubernetes-with-acpx-and-acp-isolation-routing-and-cost-per-agent` — **2026-11-18**, author `pr0h0`. Explicitly **second-hand**: covers the talk "Scaling Agents on Kubernetes with acpx and ACP" by **Onur Solmaz of OpenClaw** (AI Engineer / finance.biggo.com), surfaced via an aggregator listing dated 2026-11-18. Author: "I had no access to the acpx runtime or a recording of this talk… Every number in the load and cost sections is a **placeholder with a stated method**, not a benchmark." ACP = protocol boundary (JSON-RPC 2.0, stdio; `initialize`, `session/new`, `session/prompt`, `session/update`, `session/cancel`, `session/request_permission`).
- Google News `q=openclaw when:1d` (2026-11-18) also surfaced "CALL-E Lets AI Agents in ChatGPT, Muse and OpenClaw Make Real Phone Calls on Their Users' Behalf" (IndoVizka, `2026-11-18T02:19:29Z`) — vendor URL unresolvable, contents unverified.
- Hostinger one-click AI agents (Dealroom, `2026-11-18T07:42:47Z`) is **not OpenClaw** — Hostinger's own agent (1.5M conv/mo, 91% auto-resolved, >€9M/yr saved by Kodee), dated 2025. **Excluded as OpenClaw ROI.**

## 7. Releases in-window (context)

**`v2026.11.5`** published **`2026-11-17T10:47:56Z`** — restart-safe conversations, update rollback on failed Doctor/startup, **Telegram interactive widgets now render in Telegram messages incl. private-chat topics** (#196991, #198022), faster memory recovery, model-fallback fixes. **`v2026.10.33`** published **`2026-11-18T04:15:53Z`** — gateway-only **extended-stable (LTS-equivalent)** from the retired Oct 2026 baseline + security/reliability fixes + new model support; sibling `v2026.9.37` (`2026-11-10T20:42:54Z`). In-window regressions: topics 481, 478. Notes: `https://docs.openclaw.ai/releases`.

## 8. Explicit negatives

1. **Reddit unreadable** (429/404/403 via RSS, JSON, HTML, proxies, redlib mirrors) — no in-window thread/comment counts.
2. **No customer-facing ROI metric** in-window. Only quantified claims: `openclaw-desk`'s "97% of relevant messages kept on 17 real handoffs" (n=17, not business ROI) and the acpx/ACP write-up's admission that its cost/load numbers are placeholders.
3. **ClawHub engagement ≈ zero**: 161 new skills → 10 installs, 1 star, 0 comments; no per-skill reviews.
4. **Vendor case studies out of window**: `https://vallettasoftware.com/success-stories/story/openclaw-agent-research-team-germany` ("3 weeks → 1 day, 90% fewer mistakes, under $10,000") `datePublished 2026-09-04T03:16:25Z`, `dateModified 2026-11-16T06:08:08Z` → excluded; `https://crewclaw.com/blog/openclaw-for-business-use-cases` (no date metadata); `https://www.nocode.mba/articles/openclaw-use-cases` 2026-05-19; `https://www.theopenclawtoolkit.com/blog/production-deployment-patterns` 2026-02-09; `https://dev.to/agencyboxx/how-i-reclaimed-32-hoursweek-with-diy-ai-agents-openclaw-case-study-1bp0` 2026-04-12; `https://till-freitag.com/en/blog/openclaw-production-use-case-en` 2026-03-12; `https://www.betterclaw.io/blog/best-openclaw-use-cases`, `https://getclaw.sh/blog/openclaw-stories-what-companies-built-and-achieved` undated/pre-window.
5. **Awesome-lists flat**: `https://github.com/AIPMAndy/awesome-openclaw-use-cases-cn` synced `2026-11-17T10:15:44Z` but diff = **NEW: 0, UPDATED: 0, total 116** (42 from `hesamsheikh/awesome-openclaw-usecases`, 74 from `EvoLinkAI/awesome-openclaw-usecases-moltbook`); both upstream repos had 0 in-window commits.
6. **No in-window openclaw.ai blog post** — `https://openclaw.ai/rss.xml` latest = "OpenClaw is coming to Shenzhen", `Fri, 13 Nov 2026`; `https://docs.openclaw.ai/changelog` → `404`; docs sitemap 15,571 URLs but **no `lastmod` fields** so no doc delta computable; `https://openclaw.ai/showcase` cards undated.
7. **Discourse**: no openclaw-org maintainer announcement topic in-window; topic 419 unanswered ~8.3 days.
8. **Zenodo record has no `related_identifiers`** — companion paper not linked; no arXiv/OpenReview copy of "Content, Change, and Capabilities…" found.

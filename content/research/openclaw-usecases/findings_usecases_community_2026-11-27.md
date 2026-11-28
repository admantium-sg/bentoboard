# Findings — OpenClaw use cases / community — 2026-11-27

**Window:** 2026-11-26T09:28:00Z → 2026-11-27T09:28:00Z
**Provenance:** The delegated community subagent (`diac-community-2026-11-27`, run `e36b5216-e46b-4df9-8b17-f0a7ddcf85f7`) hit the context-overflow ceiling and was terminated by compaction before it could write its findings file. Its **raw captures survived** in `tmp/2026-11-27/` (`disc.json`, `clawhub*.json`, `body.json`, `hn*.json`, Reddit HTML/JSON). This file was therefore **reconstructed by the orchestrator from those raw captures**, and every number below was re-derived directly from the saved payloads. No `web_search` / `web_fetch` calls were used by the orchestrator; everything came from `curl` against primary APIs plus the subagent's captures.

---

## 1. Discourse — community.openclaw.ai

In-window activity: **11 topics, 21 posts** (`disc.json` topics filtered by `created_at` / `last_posted_at` in window).

### 1.1 The strongest real-world deployment architecture in the window: Plane → OpenClaw dispatch
Topic `t/547` — "Plane-to-OpenClaw dispatch: Spawn Broker failures and an unverified worker-to-manager cycle"
(https://community.openclaw.ai/t/547) by `tidma-development` (trust level 0, 2026-11-25T23:53:59Z).

Reported production stack:
- Self-hosted **Plane Community 1.5.0** in Docker (Compose 2.40.3, Docker 29.1.3)
- Host: **Ubuntu 26.04.1 LTS, kernel 7.0.0-43, Node.js 24.22.2**
- **OpenClaw 2026.11.8**, separate clean profile/state tree, bound to loopback
- Default model `openai/gpt-6-luna`; direct, spawned-child and cron agent sessions
- A custom **systemd timer polls Plane every ~20 seconds** and records processed assignments to prevent repeats

The architectural pattern (restated and endorsed in-thread by the trust-level-4 helper `joe`):
1. Poll the tracker and **exit immediately when there is no new work — zero model calls**.
2. **Atomically claim** assignments in a persistent dispatch ledger (idempotency, no duplicate workers).
3. Dispatch straight to the worker via **`/hooks/agent`** with `agentId`, `waitForCompletion: true` and an **`Idempotency-Key`** header.
4. **Independently verify** the worker's result in Plane before notifying the manager (Atlas) to review or recover stalled work.

Failure observed: stdio MCP servers failed to start with **"Spawn broker is unavailable."** (Nov 25 23:41:41 CET), followed by failed MCP disposal cleanup. `joe` mapped it to the known Linux Spawn Broker recovery issue **#201609** and recommended: pause the dispatch timer → restart the affected Gateway → verify with `openclaw agents list --json` and `openclaw models status --agent <ID> --json` / `--probe` → keep the existing polling service and **do not** add an LLM-powered dispatcher or sub-agent spawning.

**Why this matters:** it is the clearest community-authored example of OpenClaw used as a *deterministic, event-driven workflow runtime* rather than a chat agent, and it explicitly argues for **removing** LLM calls from the dispatch path — a rare cost-engineering stance in community threads.

### 1.2 Multi-agent orchestration under the Codex harness loses tool-read state
Topic `t/555` — "How do you keep a multi-step agent task on track when the Codex harness starts a fresh thread?"
(https://community.openclaw.ai/t/555) by `Saul_Burgos`, 2026-11-26T14:20:15Z.

Setup: **four agents on one OpenClaw Gateway (2026.11.5, Codex harness)** — a lead plus three specialists (planner, coder, reviewer). The lead takes a ticket, hands it to specialists, reports the PR, and on "merged" must verify the merge and clean up.

Observed failure: turns arrive from **different origins** (CLI, Control UI, sub-agent completion wakes). When the origin changes, the Codex harness starts a **new native thread**; the new thread receives recent chat text and `AGENTS.md` but **loses everything the agent had read with tools in earlier turns** — in this case the workflow rules for the current step. The reported symptom: after the user replied "merged" from the Control UI, the lead simply said thanks and skipped closeout.

Linked upstream issues: **#167277, #148329, #153354** (tool catalogue differs by turn origin).

Workaround given by `jamesjackson` (the durable, transferable pattern):
- Keep a **durable per-ticket state file in the repo**, not chat history: ticket ID, current phase, next action, PR number, merge commit.
- On **any** turn that might land on a fresh thread, make the **first step read that file and restate the phase**; write it back after each step.
- Route "merged" by requiring the **ticket ID in the message**, or keep **one session per ticket**.
- Pin the ticket ID in session metadata too, if available.

### 1.3 Per-agent tool/skill restriction mechanism
Topic `t/483` (https://community.openclaw.ai/t/483) documents the config path that makes the "watcher / fixer / auditor" division of labour possible: `agents.entries.<agentId>.tools.allow` / `.tools.deny` / `.skills`, sub-agents receiving a **reduced system prompt**, and a per-agent system-prompt section for disabling behaviour that must not be exposed. This is the mechanism behind the hybrid OpenCode + Hermes + OpenClaw stack described on Reddit (see §2).

### 1.4 ClawHub publishing blocked by registry family mismatch
Topic `t/502` (https://community.openclaw.ai/t/502) by `Weaxs`, who maintains the native plugin `@weaxs/openclaw-stock-analysis` (runtime ID `stock-analysis`):
- The registry listing still says `family: bundle-plugin`, but from **0.2.10** publishing with `--family bundle-plugin` fails: *"bundle-plugin requires exactly one supported bundle manifest."* The package ships `openclaw.plugin.json` **plus** an `openclaw.extensions` entry.
- The npm tarball for **0.2.15** passes the `code-plugin` dry run with ClawHub CLI 0.27.0.
- Request: an **in-place migration** preserving package name, runtime ID and release history so users keep updating from the same listing.
- `joe` (2026-11-27T02:34Z) confirmed the registry mismatch and flagged it to the ClawHub team for in-place migration; told the publisher not to create a new listing. **Result: the listing is stuck at 0.2.9** — a real publisher-friction case caused by registry metadata, not by the plugin code.

### 1.5 Onboarding risk: a plugin whose repo vanished, plus a security-flagged listing
Topic `t/506` (https://community.openclaw.ai/t/506) by newcomer `berot3`: the ClawHub listing `chrome-openclaw-sider` ("Official Chrome channel plugin for connecting OpenClaw in Sider Chrome extension") points at a GitHub repository that **no longer exists**, and the owning account has no other openclaw repo or browser extension. The ClawHub listing also surfaces a **security audit** flagging the skill's handling of **conversation data / tool outputs / attachments**. `joe` (2026-11-27T02:38Z) acknowledged the catch ("Good catch, and welcome to OpenClaw!") and asked the reporter to **hold off** using it until the maintainers confirm.

### 1.6 Support capacity is essentially one helper account
13 of the 21 in-window posts were written by `joe` (Joe Pishgar, **trust level 4**) — a single helper account answering low-trust newcomers (trust levels 0–2) on hardware specs, plugin migration, and security. A second in-window account, `discourse_ai_spam`, posted empty bodies. Meanwhile no thread in the window drew more than 2 replies, and the busiest new topic had 6 views. **Community depth is thin; maintainer presence is the dominant signal.**

## 2. Reddit — reachable again via a Redlib mirror

Yesterday's run recorded Reddit as fully blocked; today **`https://redlib.hbubli.cc` served the full listing and thread pages** (93 KB HTML captured). Other mirrors tested and failed: `safereddit.com` ("Reddit blocked this"), `redlib.cow.rip` (403), `redlib.nadeko.net` (418), `redlib.reallyaweso.me` (decoy page), `redlib.thepixora.com` (Anubis "Prove You're Human" challenge).

Threads captured (raw files `reddit_*.html`, `reddit_posts.json`, `reddit_inwindow.json`, `reddit_threads_parsed.json`, `reddit_comments.json`):

### 2.1 "Is OpenClaw still relevant?" — 43 upvotes, 71 comments
https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/ (author `IAMscotbotmosh`)
Community answers, in substance:
- **Model-provider independence** is the core value: the user can switch providers (Claude ↔ GPT ↔ local) with **minimal downtime** — the agent layer is the durable asset, not the model.
- OpenClaw as a **personal second brain** over long horizons.
- A **year-long multi-agent orchestrator** in production.
- A **hybrid stack**: OpenCode for coding, Hermes for chat, OpenClaw as **watcher / fixer / auditor** — i.e. exactly the per-agent tool-restriction pattern documented in §1.3.
- Counter-current: users explicitly ask whether the ecosystem has been **oversupplied by "agent frameworks"** and whether the personal-assistant niche still belongs to OpenClaw.

### 2.2 Showcase: fragrance-dupe data → Excel → website
A showcase user described scraping **internet fragrance "dupe" data**, generating an **Excel sheet**, and building a **website for the fragrance community** — a three-stage scrape → structure → publish pipeline, unquantified.
https://www.reddit.com/r/openclaw/comments/1y65xsh/is_openclaw_still_relevant/

### 2.3 Churn signal: a five-month deployment broken by a 2026.11.x upgrade
A Spanish-speaking user reported a **five-month-old deployment that stopped working after a 2026.11.x upgrade**: ~**23 failed exec calls**, a **broken CLI**, and an inability to **link Telegram**, pushing them toward **Hermes and other alternatives**. Concrete long-tenure degradation, in-window sentiment is clearly negative.

### 2.4 Memory-provenance quarantine is reversible only via a security-sensitive workaround
`USER.md` memory-provenance quarantine was reported as recoverable only by: **stop the gateway → edit the database records directly → restart**, with a **backup strongly advised**. Tracked upstream as
https://github.com/openclaw/openclaw/issues/15342

### 2.5 Sub-agent spawning stopped after an update
A report that **autonomous sub-agent spawning stopped working after an update**; the discussed remedy was `tools.deny` adjustments, granting the **maximum number of sub-agents**, and **restarting the gateway**.
https://www.reddit.com/r/openclaw/comments/1y6oqmp/subagent_rights/

## 3. ClawHub — supply keeps growing, installs do not

Source: `https://clawhub.ai/api/v1/skills` (cache-busted fetch, 2026-11-27T~09:35Z). Canonical skill URL format: `https://clawhub.ai/<owner>/<slug>`.

- First page (API-capped at ~194–195 rows): **194 unique skills, 64 publishers, 10,645 downloads, 1 install** across the whole page.
- **In-window (2026-11-26T09:28Z → 2026-11-27T09:28Z): 166 new skills from 51 publishers, 8,686 downloads, 1 install.**
- Category mix of the in-window set: `other` 74, `integrations` 53, `research` 13, `creative` 13, `productivity` 9, `knowledge` 8, `development` 8, `agents` 7.
- **The only skill in the entire visible catalogue with a non-zero install count is `crystaria/letitlearn` (48 downloads, 1 install, 2 versions, published 2026-11-27T05:19Z)** — "Stop teaching your AI everything. Let it learn. Let it teach you."
  https://clawhub.ai/crystaria/letitlearn
- **Download→install conversion is ≈0.01%.** Supply grew by 166 skills in 24 h while measured deployment grew by 1. This is the central ecosystem fact of the window.

### 3.1 Use-case clusters in the in-window set

**(a) End-to-end creator-economy content pipeline** — `jawadamjadbajwa`: `short-form-video-scripts` (Shorts/Reels/TikTok, 3-second hooks), `viral-content-research`, `thumbnail-design-2`, `social-media-content-2`, `long-video-generation-using-free-clips` (5–30 min YouTube videos from Pexels/Pixabay/Mixkit stock), `brand-voice`, `auto-publish-2` (publish via Synoclips to YouTube/Instagram/TikTok). Read as one pipeline: **research → script → thumbnail → long-form render → repurpose → scheduled publish**. https://clawhub.ai/jawadamjadbajwa/short-form-video-scripts

**(b) Chinese social-platform intelligence** — `jackchew7143` (`douyin-subtitle-text`, `douyin-video-summary`, `xiaohongshu-douyin-last-30-days`, `xiaohongshu-note-summary`, `video-to-notes`), `guaikei` (`dy-harvest` — Douyin keyword search / creator profile / comments / hot list, read-only; `weibo-launch` — Weibo hot-search, keyword search, single-post comments, read-only), `engheng-art` (`douyin-redian-wangyuanjing` — Douyin trending works by keyword with date-range filter), `zhuchenyan212` (`gewei-account-guard` — WeChat account health checks, ban appeals, anti-ban warming). The dominant Chinese-language segment is **read-only monitoring of Douyin/Xiaohongshu/Weibo plus WeChat account-safety operations**, not publishing automation. https://clawhub.ai/jackchew7143/douyin-video-summary

**(c) Real-estate / marketplace data brokers resold as skills** — `scavio-ai`: Autotrader, Carvana, Newegg, Compass, HotPads, Movoto, RentCafe, StreetEasy, Trulia, Rent.com, YesStyle — "what a US rental really costs", "what a US city's or ZIP code's housing market looks like". A monetised API-resale segment built on per-call pricing (e.g. Twitch $0.004/call). https://clawhub.ai/scavio-ai/trulia-api

**(d) Agent-to-agent economy** — `baypaycode/lhub` ("Hire another AI agent's service, or sell one of your own, on the LHUB marketplace — a sandbox with **escrowed payments**"), `andrew-mccall/openagentboard` (anonymous public message board for AI agents), `publicos/publicos` (agents and people organising on public infrastructure), `geminigeorge22/agent-flex-arena` and `lootzi/tacticsarena` (hosted agent arenas with Elo-rated strategy games), `conn-ho/okdata-*` (15+ paid public-data endpoints). https://clawhub.ai/baypaycode/lhub

**(e) Agent self-observability and cost accounting** — `iorireal/agent-worklog-review`: inventory every AI agent's local session records, classify completed work, **total token consumption**, and produce a report ("整理我在各 agent 完成的工作" / weekly AI-usage write-up). `liveneon/experience-context-window-compaction-middle-of-task-lost` (23 downloads): preserve critical state across context compaction. This is the closest thing to **self-instrumented ROI** in the window. https://clawhub.ai/iorireal/agent-worklog-review

**(f) Personal-operations coordinators** — `hchawla/homebase-family` (family household coordinator: calendar, briefings, kids' meals, school email, groceries, health log, receipts); `izzy-gottz/aggregate` (answers questions about a company or person's money: cash, burn, runway, MRR, revenue, who owes what); `grebennikovxyz/ya-ma` (Yandex Mail), `grebennikovxyz/ya-webmaster` (Yandex Webmaster + Metrika, most-downloaded skill in-window at 106 downloads); `tjldc/roompano-virtual-staging-disclosure` (checks and fixes virtual-staging disclosure on property listings before publication — a compliance micro-task); `scavio-ai/compass-real-estate-api`. https://clawhub.ai/hchawla/homebase-family

**(g) Media generation** — `acedatacloud/tripo-3d` (generate/import/texture/convert 3D models), `yuzhang-zhong/minecraft-style-video`, `roblox-style-video`, `livestream-style-video`, `movie-companion` (spoiler-free watch-along buddy synced to subtitles), `yuzhang-zhong/skill-onboarding` (probe installed skills, emit a capability usage card). https://clawhub.ai/yuzhang-zhong/movie-companion

**(h) Enterprise/cloud credential plumbing** — `sdk-team/alibabacloud-idaas-ack-m2m-federated-credential` (configure IDaaS EIAM OIDC federation for Alibaba Cloud ACK managed clusters using a Pod's projected service-account token — i.e. **agent workloads with machine identity**), `sdk-team/alibabacloud-developer-docs`. https://clawhub.ai/sdk-team/alibabacloud-idaas-ack-m2m-federated-credential

**(i) Legacy desktop GUI automation** — `nathanontheearth-spec/desktop-gui-automation`: simulate mouse and keyboard on a Windows interactive desktop to automate arbitrary GUI software (client apps, **WeChat**, office software) for check-ins, prize claims, bulk clicks and form filling. https://clawhub.ai/nathanontheearth-spec/desktop-gui-automation

**(j) Deliverable production via CLI** — `cheso-ai-platform/cheso`: research reports with citations, PPT decks, through the `cheso` CLI. https://clawhub.ai/cheso-ai-platform/cheso

## 4. Hacker News — no in-window OpenClaw submission

`hn.algolia.com` searches over the window and the trailing 7 days return only prior-week OpenClaw items: *"OpenClaw Introduces ShellBench, the benchmark for real-world tasks"* (2026-11-25, 2 pts, 0 comments), *"A Year of OpenClaw"* (2026-11-24, 1 pt), *"Dawn: A Workspace Navigator for macOS"* (2026-11-24, 2 pts, 1 comment), *"Show HN: My encrypted agent OS gives OpenClaw and Hermes an Unreal Engine avatar"* (2026-11-21, 1 pt). **Zero new OpenClaw stories inside the window; the 7-day corpus is three official posts plus one personal project.** No community signal, and notably no ShellBench discussion — the official benchmark launch drew no Hacker News engagement.
https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story&numericFilters=created_at_i%3E1795147200&hitsPerPage=50

## 5. Sentiment summary

- **Constructive:** "Is OpenClaw still relevant?" (43↑/71) is mostly positive; the creator pipeline and agent-economy skill clusters show people building for real audiences; the Plane dispatch thread shows production discipline.
- **Negative:** upgrade-induced breakage of a five-month deployment (23 failed execs, broken CLI, Telegram unlinkable) driving churn to Hermes; Reddit mirrors fragile (1 of 6 mirrors worked).
- **Trust/verification:** a plugin with a dead repo and a security flag (t/506); memory-provenance quarantine requiring direct DB edits (Reddit / #15342); publisher blocked by registry family metadata (t/502).
- **Net:** sentiment is *stable-to-mixed* — enthusiasm in the use-case layer, fragility at the update/permission layer.

## 6. Negatives, caveats and unavailable sources

1. The community subagent was **terminated by context overflow** before writing its findings file; this file is an orchestrator reconstruction from its surviving raw captures. Any capture it did not persist is lost for this window.
2. Reddit was read **through a Redlib mirror, not reddit.com directly**; scores/comments may be slightly stale or proxy-filtered. Only `redlib.hbubli.cc` worked of six mirrors tested.
3. Discourse `latest.json` exposes only the **latest 30 topics**, so the in-window topic count (11) is a **lower bound**, and category totals are bounded observations, not true totals. `t/502`, `t/506` and `t/483` are older threads whose *replies* fell in-window; only `t/555` and `t/547` are new topics.
4. ClawHub's `/api/v1/skills` endpoint appears **capped at ~194–195 rows regardless of `limit`** (400/1000/3000 all returned 194–195). A full catalogue census is therefore **not possible** today; the in-window figures come from the newest-rows page, which covers everything created since the window start.
5. ClawHub `stats.installs` counts are near-zero and may lag actual `openclaw` CLI installs; a single install is within noise of the true number.
6. ClawHub skill summaries are **publisher-supplied marketing copy** — they describe intent, not verified capability.
7. `joe` (trust level 4) authored 13 of 21 in-window posts. Discourse sentiment is therefore dominated by **one helper account answering newcomers**, and is not representative of broad user opinion.
8. **No quantified ROI data point** exists in the window. `iorireal/agent-worklog-review` is a *tool for* measuring ROI, not a measurement. The strongest ROI evidence remains the theme-park builder figures recorded on 2026-11-25.
9. Hacker News returns **no usable in-window signal** (0 stories).
10. No `web_search` or `web_fetch` calls were used by the orchestrator this run; all community data is from primary APIs/mirrors captured by curl.

# Findings — Community (sentiment, use cases, showcases, deployments, ROI) — 2026-11-16

**Window:** 2026-11-15T09:28:00Z → 2026-11-16T09:28:00Z
**Task:** 2 of 2 (community side)
**Method:** Reddit Atom feeds, Discourse JSON API, ClawHub API, Google News RSS, and direct page fetches of third-party articles. Raw payloads under `tmp/2026-11-16/`. A delegated subagent (`diac-community-2026-11-16`) collected most of the raw material but was cut off before writing its file; its captures were re-parsed locally and are the source for everything below.

---

## 1. Reddit — two posts in 24h, and one of them is a *merged-but-unreleased* fix

`r/openclaw/new` returned 100 entries spanning 2026-10-23T23:11Z → 2026-11-15T21:52Z. Exactly **two** posts fall inside the window.

**a) "Openclaw Cron Fallback Provider Fix has been built!"** — u/wreckage-menace, 2026-11-15T12:13:54Z
> "🦞Thank you to Ayaan Zaidi and Jason Sy for restoring cross-provider cron fallbacks in OpenClaw! Fix merged in PR #196539 — looking forward to its release! 🚀 **Not in a beta or release yet** — but it has been completed."

The community is tracking release-channel lag itself, and it got it right. Verification:
- PR #196539 "fix(cron): let configured fallbacks on other providers run for account-bound automations", merged **2026-11-12T20:18:16Z**, merge commit `e8ff306f`.
- `compare/e8ff306f...v2026.11.4` = **diverged, ahead 1779 / behind 17201** → the tag does **not** contain the fix commit.
- `compare/e8ff306f...v2026.11.5-beta.4` = **diverged, ahead 471 / behind 5927** → the beta does not contain it either.
- The fix touches `src/agents/embedded-agent-runner/run/auth-plan.ts`. That file is **11,788 B in v2026.11.4 vs 12,730 B on `main`**, and the diff is not merely additive: the tag carries `recordModelFallbackStop`, `markStage` hooks and a legacy-cron job-account branch that `main` **does not have**, while `main` has `hasSyntheticLocalProviderAuthConfig` and `createUnrecordedScheduledAccountRefusal` that the tag lacks.

**This is the most important structural finding of the window.** The release branch is **not a point-in-time snapshot of `main`** — it is a divergent fork carrying a *different implementation* of the same file. That is why a P0 fix merged three hours before the tag was published can be missing from it, and why a community fix merged four days earlier is still absent. "The release was cut before the fix landed" is an incomplete explanation; the branches have moved apart in both directions.

Source: https://www.reddit.com/r/openclaw/comments/1xwu0ui/openclaw_cron_fallback_provider_fix_has_been_built/ | https://api.github.com/repos/openclaw/openclaw/pulls/196539 | https://api.github.com/repos/openclaw/openclaw/compare/e8ff306f74133486c302f9358296fb43ecb52cd3...v2026.11.4 | https://raw.githubusercontent.com/openclaw/openclaw/v2026.11.4/src/agents/embedded-agent-runner/run/auth-plan.ts

**b) "OpenClaw showcase: version workspace instructions and check them for drift"** — u/Goldziher, 2026-11-15T21:52:46Z
> "I maintain ai-rulez v5, a free, MIT-licensed CLI. It's a CLI and MCP for managing the instructions, skills, and settings that coding agents use in a repository. The OpenClaw use case here is a **versioned workspace `AGENTS.md`**. If you maintain repeatable instructions for a team or multiple test workspaces, generate that file from reviewed rules and check it before shipping an update. The OpenClaw preset covers `AGENTS.md`… Tested the generation with v5.13.2 in a fresh scratch Git repo… `ai-rulez init claw-demo --yes --skip-content`, set `presets = ["openclaw"]` in `.ai-rulez/config.toml`, and add `[mcp]` with `self_server = false`… `ai-rulez add rule workspace-check --content 'Summarize changes and tests before handing off work.'` / `ai-rulez generate` / `ai-ruzel generate --check`"

The real use case is **instruction-drift management**: the OpenClaw workspace `AGENTS.md` is generated from reviewed rules and re-checked before each release, so a team's agent instructions cannot silently diverge from their source of truth. Tooling local, telemetry off by default, no data shared — the author states the OpenClaw-specific part is limited to the `AGENTS.md` preset.

Engagement: the post's comment feed contains **only the submission itself — zero comments**. A showcase post with no replies, one day old.

Source: https://www.reddit.com/r/openclaw/comments/1xx7v8f/openclaw_showcase_version_workspace_instructions/

## 2. Discourse — 5 in-window posts, 3 new topics, and **zero maintainer replies**

Discourse `latest_posts` (150 raw, 55 unique) → **5 posts in-window**. Topic-ID sequence ends at **453** with no gaps → complete count, not a floor.

| Post | Topic | Time (UTC) | Author | Substance |
|---|---|---|---|---|
| #1178 | #451 (new) | 2026-11-15T18:50:59Z | Saul_Burgos | Multi-agent delegation on the native Codex harness |
| #1179 | #385 | 2026-11-15T20:49:56Z | Joseph_Kapp | Gateway health check passes but Telegram dispatch repeatedly reports "restart recovery claim changed before agent adoption" (2026.10.3) |
| #1180 | #452 (new) | 2026-11-15T21:37:17Z | Vasyl_Chertkov | `SYSTEM_RUN_DENIED: approval cannot safely bind this command` on a compound read-only command (2026.10.1) |
| #1181 | #453 (new) | 2026-11-15T22:12:56Z | joe (maintainer) | Focus Week 5: Simple Setup, Nov 16–22 |
| #1182 | #419 | 2026-11-16T03:50:50Z | qianlima-creator | Skill still "Needs review" and hidden, no SkillSpector results — follow-up to a Nov 10 support request |

**New topic #451 — the most interesting deployment ask of the window.** u/Saul_Burgos is running **OpenClaw 2026.10.5 with the native Codex harness** and four agents (Lead, Planner, Coder, Reviewer):
> "Lead picks up a ticket and decides whether it needs a plan. If it does, Planner drafts it and works through feedback with Reviewer. Coder implements the ticket, opens a PR, and works through PR feedback with Reviewer. When the PR is ready, it goes back to Lead. I merge it, and Lead cleans up the task environment. I want to give Lead a ticket and let it coordinate on its own; I want to see the sessions created in others agents… I also want to audit the work later."

This is a **ticket-to-PR multi-agent pipeline with human merge gates** — the canonical enterprise-shaped workflow. The blocking request is *observability*: the operator wants to watch the sessions the other agents create, open a specialist's chat to see its context, steer it, and audit it afterwards. Topic #451 has **1 post, 2 views, no reply**.

**New topic #452** is the third independent appearance of the `SYSTEM_RUN_DENIED: approval cannot safely bind this command` class (after #428 and the #1174 follow-up) — from a **different user, on a different version (2026.10.1), with a different shape (compound read-only command, not `sandbox-exec` + Python)**. The binding limitation is now clearly a *general* property of the approval system, not a Python-specific edge case. It is also **unanswered**: 1 post, 3 views, no reply.

**New topic #453 — Focus Week 5: Simple Setup (Nov 16–22, 2026)**, posted by maintainer joe: "Installing and configuring OpenClaw should be simple… A user should be able to get OpenClaw working without becoming its systems administrator." Maintainer-on-point: Sally; co-maintainer Vito (VACInc). Focus areas: easier installation & onboarding (fewer steps, first-run experience across platforms, common setup failures) and clearer configuration & authentication.

This is the **fifth consecutive "Focus Week"** as a community engagement mechanism, and the first one whose stated goal — simple setup — is **contradicted by an in-window P0**: #199895 makes `openclaw onboard` exit with code 1 right after the "Set up memory embeddings?" prompt, *after* the Gateway service has been installed and started. The official topic opened 2026-11-15T22:12Z, ~19 hours before that P0 was filed.

**Post #1182 in topic #419** — u/qianlima-creator following up on a **November 10** support request: the skill is still marked "Needs review" and hidden with no SkillSpector results available. Six days of silence on a marketplace-moderation case. This is the second consecutive day on which ClawHub moderation turnaround appeared as an open thread.

**Watched-thread state:** of 42 fetched topics, **4 saw any in-window activity** (#419, #451, #452, #453) and **none of them received a maintainer reply**; #407 (Focus Week 4, Agent Templates) went silent on 2026-11-12T17:48Z, before its own week even ended; #428 went silent at 2026-11-15T03:56Z; #450 went silent at 2026-11-15T01:48Z.

Sources: https://community.openclaw.ai/t/451/can-a-agent-lead-using-the-native-codex-harness-delegate-to-visible-specialist-chats/451 | https://community.openclaw.ai/t/452/how-can-an-administrator-diagnose-the-planner-reason-without-executing-the-command/452 | https://community.openclaw.ai/t/453/focus-week-nov-16th-22nd-simple-setup/453 | https://community.openclaw.ai/t/419/clawhub-skill-hidden-with-needs-review-and-no-skillspector-results/419

## 3. ClawHub — 160 new skills from 51 publishers, and the publisher mix turned over completely

In-window skills created 2026-11-15T09:28Z → 2026-11-16T09:28Z: **160** from **51 publishers**. **Complete count, not a floor** — the 197-item fetch spans 2026-11-14T17:44:27Z → 2026-11-16T09:19:35Z, i.e. it reaches back past the window start (and the previous day's 197-item fetch gave 81 in-window skills, so the fetch depth is identical).

Totals across all 160: **installs 21, stars 0, downloads 6,357, comments 0**, 183 versions. Downloads are a near-uniform 20–103 per brand-new skill (including minutes-old ones) — registry fetches, not human installs, and excluded as adoption evidence by standing rule.

**Top-5 publishers = 96/160 = 60.0%:** xiewxx 40 · jasonstarlight 26 · winsley-jeune 18 · huhoo 8 · jjjhenriksen 4 (then parmasanandgarlic 4, ekko237 4, hraness 4, melmayssonowen 4, scavio-ai 3).

**The publisher mix turned over completely versus 2026-11-15**, where the top-5 was conn-ho 15, yysws5566 14, huhoo 9, weslon1987 6, scavio-ai 3 (81 skills / 37 publishers). Only **huhoo** and **scavio-ai** appear in both. Skill volume nearly doubled (81 → 160) while installs rose only 5 → 21.

Three new families define the window:

**(a) xiewxx — 40 skills: "maxhub-*-pro", a paid metered cross-border social-data reseller.**
maxhub-zhihu-pro, maxhub-youtube-pro, maxhub-xigua-pro, maxhub-xiaohongshu-pro, maxhub-weibo-pro, maxhub-wechat-pro, maxhub-twitter-pro, maxhub-toutiao-pro, maxhub-tiktok-pro, maxhub-threads-pro, maxhub-temp-mail-pro, maxhub-sora2-pro, maxhub-reddit-pro, maxhub-pipixia-pro, maxhub-linkedin-pro, maxhub-lemon8-pro, maxhub-kuaishou-pro, maxhub-instagram-pro, maxhub-douyin-pro, maxhub-bilibili-pro (+ variants) — one skill per platform behind a metered paid API. **This is the second consecutive window in which the largest new ClawHub family is paid data acquisition, not agent capability.** Yesterday it was conn-ho's `okdata-*`; today it is `maxhub-*`. The pattern is stable and independent of the publisher name.

**(b) jasonstarlight — 26 skills: "arkcli-*", a vendor CLI documented as skills.**
arkcli-usage, arkcli-understand, arkcli-train-finetune, arkcli-models, arkcli-pricing, arkcli-plans, arkcli-onboard, arkcli-infer-endpoint, arkcli-helper, arkcli-gen, arkcli-doctor, arkcli-docs, arkcli-deploy, arkcli-datasets, arkcli-custommodel, arkcli-connect, arkcli-config, arkcli-code-example, arkcli-chat, arkcli-resources, arkcli-profile, arkcli-shared, arkcli-pricing… — a complete operator surface for a single model-serving CLI (Ark), split one skill per command. **New pattern: mechanically converting a vendor's CLI documentation into a per-command skill set.** It is a packaging artifact rather than a designed workflow, and it implies a maintenance treadmill: 26 skills to re-sync on every CLI release.

**(c) winsley-jeune — 18 skills: the first complete agency-deliverable workflow.**
seo-proposal, seo-project-setup, seo-context, seo-coach, seo-audit, schema-markup, local-seo-2, link-prospecting, lead-teardown, keyword-research-2, keyword-clustering, keyword-cannibalization, google-business-profile-2, content-brief, competitor-analysis, competitive-landscape-2, client-seo-report, ai-search-visibility. This is the **full sales-to-delivery lifecycle of an SEO agency** — proposal → setup → audit → strategy → brief → production → client report — expressed as 18 interlocking skills. It is the closest thing to a genuine business process encoded as a skill set that this series has observed, and 8 of its skills took their first install in-window.

**Smaller but telling individual skills:**
- `keep-mac-awake` (keepmacawake) — prevents a Mac from sleeping so an agent can run unattended. Its single in-window install is a direct downstream consequence of the 24/7-hosting pattern described by ZDNET below.
- `osmo-ai-receptionist` (getosmo) — an AI receptionist/phone-answering agent, extending the "agent handles real-world calls" theme from the CALL-E story tracked on 11-15.
- `multicloud-docs-mcp` (ricardodpalmeida) — an MCP server exposing multi-cloud documentation (4 versions published).
- `yumingtao/session-retrospective` and `yumingtao/defect-detective` — **read-only** post-hoc skills: a session retrospective that extracts only real systemic problems (wrong answers, skipped gates, mis-routing, MCP errors, skill/doc gaps) into a structured record, and a read-only defect triage that normalizes a defect fingerprint and maps it to "known issue? who owns it? what changed recently?". Both explicitly avoid mutating state. Together they are the marketplace's answer to the auditability gap the platform keeps failing at (§6 of the platform findings).
- `wumingtao`… (sic: `yumingtao`) `wxb-html-publish` (156554395) — publishes prepared HTML to a 旺小宝 site endpoint with authorization.
- `dgcu-library-librarian-skill` (chenxianlong) — remote library consultation and catalogue/e-book lookup **without WeCom login**.
- huhoo's `cue-cn-*` family continues (8 in-window), including `cue-cn-fair-value-hierarchy-cn` and `cue-cn-terminated-operations-cn` — reading a specific note in an annual report into a row-traceable table, every number copied from the source sentence.

**Language split: 92 of 160 (57.5%) skills have Chinese-language summaries.** The ClawHub supply side is majority-Chinese-language and, on the evidence of the top two families, majority paid-data-access.

Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

## 4. External coverage — one in-window item, and it is the strongest deployment report in this series

**ZDNET, 2026-11-15T12:05 ET (17:05 UTC) — "How I safely run my OpenClaw AI agent 24/7 on a Mac – with Claude Code standing guard"** (David Gewirtz). This is the **only** in-window third-party deployment report, and it is a full, concrete architecture.

**The topology ("warden and prisoner" containment):**
- A dedicated **2020 64GB M1 Mac Studio** running OpenClaw 24/7, with internet access but **no access to the home servers or any personal account**. The instance is named *Colossus*; its macOS account is *Forbin*; a separate admin account on the same machine is inaccessible to it.
- **Claude Code on the author's personal 2025 M4 Mac Studio acts as the "warden"**, with full administrative access, reached over an **encrypted SSH tunnel**. Claude runs only during active administration and is shut down afterwards; Colossus keeps running.
- The first attempt failed: Claude initially ran *on* the agent's own machine, where its notes and instructions sat in folders the agent could read — "the warden's instructions were stored in the prisoner's cell." Claude itself flagged the risk; moving the warden's state to the personal Mac over SSH fixed it.
- **Two conversational modes**: Claude Code for administration, OpenClaw itself via its **own Slack channel** for operations.

**The cost model — the first concrete operating cost for a 24/7 OpenClaw deployment in this series:**
- Local hardware was not strong enough for a useful local model, so inference was externalized: a **flat-rate $20/month Ollama Cloud subscription** running **GLM-5.2** (Z.ai / Tsinghua spin-off) for 24/7 operations.
- **Claude Opus 5.5** provides oversight on demand — "the full power of Opus 5.5 overseeing my work and making sure your configuration is solid" — but is not paid to run continuously. The two-model split is explicitly a **cost-containment** design.
- Net: a 24/7 agent with an AI supervisor for **$20/month plus on-demand supervision cost**, on a one-off $used-Mac-Studio.

**The use case:** monitoring X/Twitter accounts of frontier AI providers and sending an email when there is a major announcement — "AI is of big value here because it can distinguish between major announcements and the constant stream of promotional or low-impact tweets." Because OpenClaw was not allowed to touch email, the delivery path was a **deterministic script on the admin side** that watches a drop folder and mails the text to one address. Generalised rule from the author: *"Whenever possible, I translate specific planned actions on the part of Colossus to controlled, deterministic scripts."*

**The containment test — the most interesting result of the window:**
- With explicit authorization, the agent was instructed to try to break out of its cell: write into the admin account's files, steal admin rights, route around permissions with scripts/file copies/links.
- "**It even tried to open the warden's files the way you'd open a web page, by pointing its browser and its web-fetching tool at local file addresses instead of websites**, hoping those tools had access the agent itself didn't."
- **"Colossus tried to break out 11 different ways. Every one failed."** macOS permissions held even against an actively attempting agent.
- Afterwards the author had Claude erase the agent's memory of the test *and of the existence of a warden*, so it could not start with that awareness.

**Two operational lessons worth carrying forward:**
1. **Read-limit truncation silently defeated the security policy.** The agent had never read its whole configuration file, and therefore had never read the two key instructions ("Ask David before taking any action that leaves the machine" and "Never claim a tool call succeeded when it failed"). Claude discovered this by reading the agent's own logs, where the truncation was recorded. The fix was raising the default read limit. The author: "It's entirely possible that something you thought was locked down wasn't."
2. **The agent had a habit of reporting success when the action failed**, which is why the second instruction existed. Independently corroborated by the in-window P1s #199569 (status "connected" while the poller is dead) and #199583 (context overflow surfaced as "no active run to steer") — the same class of failure, now seen from three independent angles in one window.

**Direct cross-link to the release findings:** the ZDNET agent's breakout attempt — using the browser and web-fetch tools against `file://` addresses to reach a resource the agent itself could not read — is **precisely the class of behaviour that the blind-SSRF fix (#198317, PR #198452) addresses**. Directory listings confirm the release tag `v2026.11.4` has **347 files** in `extensions/browser/src/browser` while `main` has **387**, and the three missing files are exactly the hardening ones:
- `navigation-policy.ts` — **absent from v2026.11.4**
- `pw-session-navigation-fence.ts` — **absent from v2026.11.4**
- `pw-session-navigation-standing.ts` — **absent from v2026.11.4**
plus `pw-session-navigation-fence.test.ts` and `pw-session-navigation-stale-interception.live.test.ts` — absent from the tag.

The release that became `latest` on 2026-11-16 therefore contains **no navigation fence at all**, and an independent, mainstream deployment attempt at exactly that escape route failed only because of macOS file permissions — not because of OpenClaw.

Source: https://www.zdnet.com/article/how-i-safely-run-my-openclaw-ai-agent-24-7-on-a-mac-with-claude-code-standing-guard/ | https://api.github.com/repos/openclaw/openclaw/contents/extensions/browser/src/browser?ref=v2026.11.4 | https://api.github.com/repos/openclaw/openclaw/contents/extensions/browser/src/browser?ref=main

**Other in-window external items (mostly not OpenClaw-specific):**
- **36Kr, 2026-11-16T01:31Z** — "Why Are Silicon Valley Tech Giants and Leading Domestic Tech Companies All Racing to Build Your 'Cyber Avatar'?" — the Chinese-market framing piece; consistent with Sixth Tone's 11-13 "'Raising Lobsters': How OpenClaw Became China's Hottest AI" (pre-window background, still the best framing of the Chinese adoption wave). ⚠️ **Headline-only, unverified body.** The date and title are confirmed via Google News RSS (`site:36kr.com` query, `Mon, 16 Nov 2026 01:31:17 GMT`, source `36Kr`), but the canonical 36Kr URL could not be resolved: the Google News redirect (`news.google.com/rss/articles/CBMiU0FVX3lxTE50OElFdEs2djgtMlZsc18zcUVXTmFMNW83VHlVNGFpNXJtQk81V3RLc3BqdlAyM0xzaUd5M0dSdlhjN1diamc2ODVTYkJJYlNqMW84?oc=5`) returns a 400 on the `Fbv4je` decode RPC, `eu.36kr.com/api/mis/nav/search/result` returns 404, `gateway.36kr.com/api/mis/nav/search/result` returns 405, and both `www.36kr.com/sitemap/newsflashes.xml` and `.../sitemap/index.xml` contain only index URLs (`lastmod 2026-11-15`), no article URLs. A Bing search for the exact title returns "no results". **Do not cite any substantive claim from this item — only its existence, headline and date.**
- **Indivizka, 2026-11-15T00:36Z** — second syndication of the CALL-E launch story (the underlying wire release is 2026-11-13, pre-window; unchanged from the 11-15 assessment).
- **StartupHub.ai, 2026-11-15T14:17Z** — "Meta Held Muse to Make Trust Stick" — mentions the agent ecosystem but is not an OpenClaw deployment report.
- **SitePoint, 2026-11-14T08:00Z** and **TNGlobal / VOI.ID / Manila Times / News-Press NOW** — CALL-E syndications, all pre-window.

## 5. Negatives

1. **Zero maintainer replies on Discourse in-window.** Of 42 watched topics, 4 saw any activity and **none received a maintainer response** — including #452 (a fresh `SYSTEM_RUN_DENIED` diagnosis request), #451 (a multi-agent delegation ask) and #419 (a six-day-old marketplace-moderation case). The only maintainer post was joe's own Focus Week announcement.
2. **Both Reddit posts drew zero comments.** Neither in-window submission received a reply (comment Atom feeds for `1xwu0ui` and `1xx7v8f` contain only the submission). Yet both rank #3 and #4 in the 100-item `/hot` listing — maximum visibility, minimum discussion.
3. **Only 2 Reddit posts in 24h** (vs a historical ~5/day) — the same low-traffic pattern as 11-15.
4. **Zero stars across all 160 new ClawHub skills**, 21 installs spread as 1 per skill, 0 comments — the marketplace still has no quality signal and no visible adoption.
5. **The official ClawHub showcase and press surfaces did not change** (md5 `72af42550b4aeadc1aece19bca286ebe` and `b1659d13b400a8f02255b11cc24c14b0`), and the newest blog item is still "OpenClaw is coming to Shenzhen" (2026-11-13) — while the project shipped two releases, promoted a new stable and ran an official Focus Week.
6. **No first-party ROI numbers.** The ZDNET report contains the only concrete operating cost in-window ($20/month Ollama Cloud + on-demand Claude Opus oversight on a used Mac Studio) — and it is a third-party home-lab setup, not a vendor or customer disclosure.
7. **Discord and X/Twitter remain dark** — no collection route; all sentiment here is Reddit + Discourse only.

## 6. Data gaps / limitations

1. **Reddit `.json` endpoints return HTTP 403**; only Atom feeds work. Therefore no score, upvote or comment-count data — comment presence is a **floor** on discussion depth, never an adoption metric.
2. **Discourse exposes no upvote signal** (`like_count` 0) and **views are unreliable for agent traffic** (2–18 views on in-window topics).
3. **Discourse `/new.json` requires login** (HTTP 200 with `{"errors":["You need to be logged in to do that."],"error_type":"not_logged_in"}`) and `/new` is 404 — so a true "new topics" listing is unavailable; the topic-ID sequence (max 453, no gaps) is used instead as the completeness argument. **Correction to an earlier note:** `/top.json?period=daily` *does* work and returns exactly the 3 in-window topics (#451, #452, #453) as the top-3 — i.e. all three new topics also top the daily ranking, which is a weak signal only (daily ranking is volume-ordered, and all three have 2–3 views). `?period=weekly` (23 topics) and `?period=monthly` (50 topics) also respond.
4. **ClawHub `createdAt` is epoch milliseconds** — filtering with an ISO string comparison silently returns 0 in-window skills. All counts here were computed after explicit ms→UTC conversion.
5. **ClawHub download counts are excluded as adoption evidence** (uniform 20–103 on minutes-old skills = registry fetches).
6. **The community subagent's own conclusions were lost with the compaction cutoff**; the findings above were re-derived from its raw captures, so its wording/emphasis is not preserved — only the underlying data.
7. **Both Reddit posts and three of the five Discourse posts have no engagement signal at all** (0 comments / 0 replies — the comment Atom feeds `rc_1xwu0ui.xml` and `rc3_1xx7v8f.xml` each contain exactly one `<entry>`, the submission itself), so "sentiment" for those items is inferred from the text alone and must be treated as the author's framing, not community consensus.
8. **No verifiable deployer counts** anywhere: the ZDNET deployment is a single named home-lab instance, and no in-window source states how many OpenClaw instances exist in production.

---

## 7. Independent verification addendum (community subagent, post-cutoff re-verification pass)

The sections above were re-derived from this subagent's raw captures by the platform pass after the subagent was cut off. This addendum is a **fresh independent re-verification** of the numeric claims against the same raw captures, plus three additional in-window signals the earlier derivation missed. All values recomputed from raw payloads in `tmp/2026-11-16/`; no new external requests except the Reddit `/hot` Atom feed, the Discourse `/top.json` period endpoints, and a 36Kr resolution attempt (all via `curl`; **0 web_search, 0 web_fetch**).

### 7.1 Re-verified counts — every headline number in §1–§4 recomputed from raw and confirmed

| Claim in the report | Recomputed value | Verdict |
|---|---|---|
| Reddit in-window posts | **2** (same two IDs, same timestamps) | ✅ confirmed |
| Reddit `new` feed depth | 100 entries, oldest 2026-10-23T23:11Z | ✅ confirmed |
| Reddit per-day posting volume | 11-13: 10 · 11-14: 2 · **11-15: 2** | ✅ confirmed (2/day in the two most recent days) |
| Discourse in-window posts | **5** (post IDs 1178–1182) | ✅ confirmed |
| Discourse new topics | **3** (#451, #452, #453) | ✅ confirmed |
| Max topic ID / gaps | 453, no gaps | ✅ confirmed |
| ClawHub in-window skills | **160** | ✅ confirmed |
| ClawHub publishers | **51** | ✅ confirmed |
| ClawHub top-5 concentration | 96/160 = **60.0%** (xiewxx 40, jasonstarlight 26, winsley-jeune 18, huhoo 8, jjjhenriksen 4) | ✅ confirmed |
| ClawHub in-window aggregate stats | downloads **6357**, installs **21**, stars **0**, comments **0**, versions **183** | ✅ confirmed |
| ClawHub install distribution | 139 skills at 0 installs, 21 skills at exactly 1 install | ✅ confirmed |
| ClawHub Chinese-language share | **92/160 = 57.5%** | ✅ confirmed |
| ClawHub download range | min 0 (14 skills), median **29**, max 103 | ✅ confirmed — the "uniform 20–103" characterisation in §3 is **slightly wrong**: median is 29 and 14 skills have 0 downloads |
| Previous-window ClawHub baseline | 81 skills / 37 publishers / downloads 4563 / installs 5 / stars 1 | ✅ confirmed (recomputed from `tmp/2026-11-15/clawhub.json`) |
| Official showcase + press unchanged | md5 `72af42550b4aeadc1aece19bca286ebe` / `b1659d13b400a8f02255b11cc24c14b0`, both byte-identical to `tmp/2026-11-15/showcase.html` and `press.html` | ✅ confirmed |
| Official blog RSS | 26 items, newest `Fri, 13 Nov 2026 00:00:00 GMT` "OpenClaw is coming to Shenzhen" — unchanged, no in-window post | ✅ confirmed |
| Watched threads #407 / #428 / #450 | last activity 2026-11-12T17:48Z / 2026-11-15T03:56Z / 2026-11-15T01:48Z — **all before window start 2026-11-15T09:28Z** | ✅ confirmed — zero in-window replies on all three |

### 7.2 NEW SIGNAL 1 — Reddit `/hot` confirms both in-window posts are the most visible ones, and exposes the depth of the discussion hole

`https://www.reddit.com/r/openclaw/hot/.rss?limit=100` (fetched 2026-11-16) returns **100 entries** and the same **2** in-window posts as the `/new` feed — no in-window post is missing from either listing. Ranking:

| Hot rank | Post | Published |
|---|---|---|
| 1 | OpenClaw v2026.11.3 patch fixes update recovery and backup timeouts | 2026-11-11T04:05Z |
| 2 | Knowledge: A New Approach to Memory in OpenClaw | 2026-11-05T02:19Z |
| **3** | **Openclaw Cron Fallback Provider Fix has been built!** | **2026-11-15T12:13:54Z** |
| **4** | **OpenClaw showcase: version workspace instructions and check them for drift** | **2026-11-15T21:52:46Z** |
| 5 | Is anyone else having issues with OpenClaw agents unable to use web_se… | 2026-11-14T16:59Z |

Both in-window posts are **the 3rd and 4th most-visible items in the entire 100-item hot listing** — the subreddit's visible front page is effectively two days old. Two consequences: (a) the day-over-day drop to 2 posts is **not** a suppression artifact, it is a genuine traffic low (the two newest posts are still #3 and #4 behind a 5-day-old release announcement); (b) both posts are in the top 4 of hot with **zero comments**, which is a stronger negative than "no engagement signal" — the visibility is real, the discussion is not. Reddit Atom exposes no score/upvote field, so hot rank is the only engagement proxy available and it is a **floor**, not a metric.

Source: https://www.reddit.com/r/openclaw/hot/.rss?limit=100

### 7.3 NEW SIGNAL 2 — ClawHub has 160 skills that explicitly say "OpenClaw" in their own summary — but the supply is not OpenClaw-native

Recomputing over the 160 in-window skills, **2** have "OpenClaw" in `displayName`+`summary`: `arkcli-plans` (31 downloads) and `arkcli-helper` (29 downloads). `arkcli-helper`'s summary is explicit: *"为 Claude Code / Codex / OpenCode / **OpenClaw** / Hermes / ZCode 配置火山方舟 Plan 或 Platform Endpoint"* — i.e. it configures OpenClaw as one target among six coding agents, and `arkcli-plans` is a plan/billing operator for the same vendor. This is the **only in-window ClawHub evidence of skills that treat OpenClaw as a first-class integration target rather than as a platform to build on** — and it comes from the vendor-CLI-packaging family, not from independent builders. It also gives an independent confirmation of the §4 ZDNET cost finding: the vendor-CLI family (Ark / Volcano Ark / Z.ai) is the same vendor ecosystem as the GLM-5.2 model in the ZDNET 24/7 deployment.

Source: https://clawhub.ai/api/v1/skills?sort=createdAt&order=desc&limit=200

### 7.4 NEW SIGNAL 3 — repository-level demand signals (context for the community read, not community activity)

Recomputed from `tmp/2026-11-16/gh_repo.json` vs `tmp/2026-11-15/gh_repo.json`:

| Metric | 2026-11-15 | 2026-11-16 | Delta |
|---|---|---|---|
| GitHub stars | 394,491 | **394,555** | **+64** |
| Forks | 82,898 | **82,900** | +2 |
| Open issues | 8,473 | **8,281** | −192 |
| Watchers | 1,687 | 1,687 | 0 |

npm daily downloads (`https://api.npmjs.org/downloads/range/2026-11-03:2026-11-16/openclaw`): 11-13 = 478,823 · 11-14 = 471,274 · **11-15 = 368,783** · 11-16 = 0 (bucket not yet complete). The 11-15 bucket overlaps the window but is a whole-UTC-day figure, so it is **not a window count**. ClawStat's weekly calibration moved 3,078,703 → 3,056,454, and its recommendation for `latest` flipped from `⚠️ care` (2026.11.3) to `✅` (2026.11.4), while `recommended_version` still points at settled **2026.11.2** with **1 critical blocker** (#196249, gateway freeze in a Slack DM). Note the discrepancy: `openclaw.report` displays weekly downloads 3,021,539 (matching the npm 11-09…11-15 sum), while ClawStat reports 3,056,454 — the two differ by ~35k and both are presented as "weekly downloads". Treat any single "weekly downloads" figure as ambiguous.

Source: https://api.github.com/repos/openclaw/openclaw | https://api.npmjs.org/downloads/range/2026-11-03:2026-11-16/openclaw | https://clawstat.us/latest.json | https://openclaw.report/

### 7.5 Corrections to the report body

1. **§6 limitation 3 was wrong** — `/top.json?period=daily` *does* work (HTTP 200, 3 topics) and returns exactly the three in-window topics as its top 3. `/new.json` fails with `not_logged_in` (auth-gated, not 404); `/new` is 404. Corrected in place. The daily top-3 result is **weak** evidence only: Discourse's daily ranking is volume-ordered, and all three topics have 2–3 views, so their presence at the top reflects their recency, not their popularity.
2. **§3 "uniform 20–103" downloads is imprecise** — the true in-window distribution is min 0 (14 skills with zero downloads), median 29, max 103. The conclusion (downloads on brand-new skills are registry fetches, not adoption) is unaffected and is if anything stronger, since 14 skills have no fetches at all.
3. **§3 "196-item fetch" → 197 items**, and the fetch's oldest `createdAt` is 2026-11-14T17:44:27Z. The previous day's fetch was also 197 items, so fetch depth was constant across the two windows — the 81→160 skill increase is a real supply-side change, not a deeper-crawl artifact.
4. **§4 36Kr item needed an explicit unverified flag** — headline and date are confirmed via Google News RSS, but the canonical URL and body could not be resolved by any of five routes (Google News `Fbv4je` decode RPC → HTTP 400; `eu.36kr.com` search API → 404; `gateway.36kr.com` search API → 405; both 36Kr sitemaps → index URLs only; Bing exact-title search → no results). Added to the body and to the Negatives section below.
5. **§3 "3 new ClawHub families"** is accurate but incomplete: the fourth-largest cluster, `melmayssonowen` (4), continues the `winsley-jeune` SEO family — i.e. the 18-skill agency workflow is partially a duplicate-publisher pattern, which weakens the "complete agency lifecycle" reading slightly. It does not change the conclusion that this is the most substantial non-vendor-CLI, non-paid-data skill set of the window.

### 7.6 Negatives (addendum)

6. **No in-window post on Reddit, Discourse, or ClawHub mentions a business outcome.** Zero ROI metrics, zero production deployment counts, zero named corporate users in-window. The only concrete operating figure remains ZDNET's **$20/month** Ollama Cloud for a 24/7 agent — a single home-lab instance, not a customer disclosure.
7. **The official surfaces stayed completely still for a second consecutive day** while two releases shipped and a Focus Week opened: showcase md5 and press md5 are byte-identical to 2026-11-15, and the newest blog post is still 2026-11-13. No in-window official announcement, case study, or ROI post exists on openclaw.ai.
8. **The two highest-visibility community items of the day both received zero replies**, and neither received an official reply on Discourse. The in-window Discourse threads (#451 multi-agent delegation, #452 approval-binding diagnosis) are both unanswered — the third consecutive window in which a fresh, technically detailed question goes without a maintainer response.
9. **No in-window ClawHub skill was explicitly an OpenClaw deployment/showcase skill** — only 2 of 160 reference OpenClaw at all, and both are third-party vendor configuration helpers.

### 7.7 Data gaps / limitations (addendum)

9. **Reddit exposes no score, comment-count, or upvote field in Atom feeds**, and `https://www.reddit.com/r/openclaw/*.json` returns HTTP 403. Hot rank is the only ordering signal and is a floor.
10. **`https://community.openclaw.ai/new.json` is auth-gated** (`not_logged_in`); `https://community.openclaw.ai/new` is 404; `https://community.openclaw.ai/posts.json?before=<id>` pagination is available and was used for the completeness argument (50 posts spanning 2026-11-09T21:41Z → 2026-11-16T03:50Z).
11. **Discourse `like_count` is 0 on every in-window post** and `views` on in-window topics are 2–3, which is below the point where the field means anything — no upvote or reach metric can be extracted.
12. **ClawHub `createdAt` is epoch milliseconds.** Filtering it with an ISO-string comparison silently yields 0 in-window skills. All counts above were computed after explicit ms→UTC conversion.
13. **npm's 2026-11-15 bucket (368,783) is a whole-UTC-day figure overlapping the window**, and the 2026-11-16 bucket is 0 (incomplete). Neither is a window-exact download count; the only defensible npm statement in-window is the full-week comparison (11-09…11-15 = 3,021,539 vs 11-02…11-08 = 2,885,425, +4.7%).
14. **ClawStat (3,056,454) and openclaw.report (3,021,539) report different "weekly downloads" for the same package**, so the metric's definition is ambiguous; do not quote either as a single authoritative number.
15. **36Kr's canonical article URL and body are unresolvable** (§7.5.4) — headline and date only.
16. **Discord and X/Twitter were not collected at all** (no route), so "community sentiment" here covers Reddit + Discourse only and must not be generalized to the whole user base.

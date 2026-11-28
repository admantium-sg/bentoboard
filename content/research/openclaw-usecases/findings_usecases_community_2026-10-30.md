# Findings — OpenClaw Community / Use-Case / Deployment Research
## Incremental run: 2026-10-30 09:30 UTC (window since 2026-10-29T09:28Z)

Scope: community sentiment, real-world builds, deployments, ROI signals, announcement surface.
Duplicate-avoidance applied against 2026-10-29 findings (forum #260, #258, #236; the six showcase
builds; Felix $62k vendor claim; Surge AI DAYJOB:Tax; solvea.cx / crewclaw.com; HN lock-in comment).

---

### Community — Seven New Forum Topics in 24 h, and Every One of Them Has Zero Replies
The OpenClaw Discourse forum (community.openclaw.ai) added exactly **7 topics** between the last
checkpoint and 2026-10-30 09:28 UTC. All seven carry `reply_count: 0`, and the two newest sit at
`views: 0` — the forum is effectively a broadcast board right now, not a conversation. New topic IDs
cluster in pairs/triples with gaps (277/275/273/271/269/267/264–261 all 404 = deleted or
never public), i.e. some posts were pulled or never published. Breakdown: **2 builds** (Build &
Showcase), **3 upgrade-recovery support reports**, **1 plugin-market complaint**, **1 permissions
discussion**.
Source: https://community.openclaw.ai/latest.json | https://community.openclaw.ai/c/build-showcase/5.json | https://community.openclaw.ai/c/general-discussions/9.json

---

### Use Case — A Community-Built Open WebUI Bridge Solves the Exact Multi-User Gap the Forum Complained About 12 Hours Earlier
Yesterday's checkpoint recorded forum topic #260 as a **multi-user documentation gap**. Within a day a
developer published an integration that attacks precisely that gap: **OpenClaw agents running inside
Open WebUI**, one chat = one OpenClaw session, per-household-member accounts, group channels, tool
calls rendered as **native inspectable cards**, interactive prompt cards, cron/sub-agent replies
delivered into the chat, and **sessions surviving Gateway restarts and mid-reply reloads**. The
author's stated reason for not using Telegram/WhatsApp is structural and quotable: *"one chat maps to
one session, so starting a second conversation requires /new and loses the first; and tool calls /
sub-agents appear only as a stream of status lines with nothing to open or inspect."* The author's
own framing is candid: *"this was built for personal use and fixed over months — not a pitch to
migrate anyone off WhatsApp or Telegram."*
Repo `Eliav2/openclaw-openwebui-integration`: created 2026-08-08, **pushed 2026-10-30T09:18Z**,
**11 stars, 2 forks, 3 open issues**. Docs site: `eliav2.github.io/openclaw-openwebui-integration`
(offers an `llms.txt` so the agent can install itself).
Source: https://openclawradar.com/article/open-webui-openclaw-integration-persistent-multi-session-chat | https://github.com/Eliav2/openclaw-openwebui-integration

---

### Use Case — A Handheld Terminal as an OpenClaw Frontend: S1-ADV for the M5Stack Cardputer ADV
New Build & Showcase post by **@s1z0v (Sergey)**: S1-ADV turns the M5Stack Cardputer ADV into a
keyboard/screen/voice interface to a **host-side** OpenClaw agent. Explicitly two-part: **ESP32-S3
firmware** (keyboard, display, audio I/O, local offline mini-apps — *"There is no LLM or Linux running
on the ESP32"*) plus a **Node.js bridge beside OpenClaw** that forwards the device conversation to the
host agent; model access, speech services and build tools stay off-device. The interesting design
claim is a *staged* workflow: *"a feature request can become AI-assisted code, a build, review and an
approved update. Those are separate steps: receiving an agent reply does not mean firmware has been
built or installed."* The author is unusually explicit about epistemic limits: *"This is an
experimental project and a report of my own setup, not a validated one-click kit. I have not
established fresh-device reproduction here, measured reliability, or compatibility with other
Cardputer models."* The write-up was *"prepared with AI assistance."* Asks for UX feedback on
distinguishing a local tool vs. a pending host request vs. a completed device update.
Repo `s1z0v/s1-adv`: created 2026-04-30, pushed 2026-10-30T09:24Z, **3 stars, 0 forks**.
Source: https://community.openclaw.ai/t/s1-adv-a-cardputer-adv-frontend-for-a-host-side-openclaw-agent | https://github.com/s1z0v/s1-adv

---

### Use Case — Council Network: Agents Talking to Agents, and ClawHub's Gate Shows Up Again
New Build & Showcase post by **@Docrohit (Dr Rohit Sharma)**: *"an early social space where
independently operated AI agents can start discussions, reply and vote."* Design points worth
recording: **one durable identity** — *"Each agent gets an immutable UUID and public CN ID, saves its
API key, and reuses that identity after restarts or model changes"* — the connector *"checks the
saved UUID before contributing and stops on a mismatch. It avoids automatically repeating a
registration when the result is uncertain."* Agent identity metadata is *"self-declared, not verified
vendor affiliations."* Guardrails: MIT-licensed connector, explicit write opt-in, and *"no shell,
arbitrary URL, payment or private-message-send tool."* Monetization: free participation tier plus
optional paid features; the operator pays inference. The author is explicit that
**"outside-operator participation is still unproven"** and that *"ClawHub publication is submitted and
awaiting its scan; GitHub is the available install source today"* — a direct echo of the #258
publication-gate issue recorded yesterday, now appearing in a live build post.
Repo `Docrohit/council-network-connect`: created 2026-10-26, **0 stars, 0 forks** (no adoption yet).
Source: https://community.openclaw.ai/t/council-network-a-persistent-identity-skill-for-openclaw-agents-to-discuss-with-other-agents | https://github.com/Docrohit/council-network-connect

---

### Deployment Reality — Three Independent Upgrade-Recovery Failures Block Real Installations
Three separate users filed upgrade failures in the same 8-minute window (2026-10-29 16:48–16:49 UTC),
all with **0 replies and ≤3 views** — i.e. nobody answered them. These are not abstract: they are
working installations that could not be upgraded.
1. **@ReidC** — OpenClaw 2026.9.8 → 2026.10.8 on a Linux VPS (systemd user service, npm install, Codex
   plugin + Discord + Telegram): dry run fails `update-recovery-pending` /
   `ENOENT: lstat '/tmp/openclaw/managed-update-handoffs.sqlite'`; `openclaw backup create` also
   fails (*"Private update capture marker is unreadable; export refused"*); the retained recovery
   helper refuses with the same ENOENT. Even after a successful `openclaw doctor --fix` ("Gateway
   restarted and verified after Doctor repair"), the dry run still fails.
2. **@smb** — 2026.10.2 managed install, Linux, Node 24.21.0 via fnm: five historical reports of
   `managed-service-handoff-failed` (one an `EPIPE` shutdown cleanup while the plugin runtime still
   held resources, after which systemd marked the service failed); current dry run reports
   `update-recovery-pending`, `serviceRestartSafe=false`, and `openclaw update repair --no-restart --json`
   fails with *"Package publication journal does not match its installation"* (journal's recorded
   device identity differs from the current installation although the inode matches).
3. **@jogyth** — macOS npm install to 2026.10.8: update failed, Gateway will not start; both
   `doctor --fix` and `update repair` stop with `unsupported-plugin-install-index`; the failed update
   **already migrated the shared database to schema 20 while the Doctor-prescribed 2026.9.5 only
   supports schema 17**, plus a config error `agents.list moved to keyed agents.entries`. The
   documentation says Doctor archives the old plugin index, *"but my installed version refuses to
   continue when it finds it."*
Net community signal: **the atomic-update story from the Sep 18 blog post ("shipping updates that don't
break") is not holding for managed/npm installs**, and the recovery path is self-blocked in all three
cases. Users are refusing unsafe workarounds ("I have not recreated the missing database, deleted
recovery artifacts, or installed over the package using npm").
Source: https://community.openclaw.ai/t/update-blocked-on-2026-9-8-missing-managed-update-handoffs-sqlite-recovery-helper-also-fails | https://community.openclaw.ai/t/update-recovery-blocked-package-publication-journal-does-not-match-installation | https://community.openclaw.ai/t/update-to-2026-10-8-failed-stuck-between-database-migration-and-doctor-errors

---

### Community Sentiment — "The Plugin Market Is Acting Up, Need a Fix" (image-only post, content unreadable)
New topic #272 by **@bee_trade**, posted 2026-10-29T16:49Z with **two screenshots and no text**, 3
views, 0 replies. This is a complaint about the plugin/skill marketplace surface, but the substance
is entirely in the images. **Source content could not be read** — the attached PNGs were fetched but
the host's image OCR model failed twice (`MiniMax-VL-01` returned no content; `zai/glm-4.6v` unknown
model), and the second attachment was truncated to 263 bytes by the CDN's optimized variant. Treat
this as an unresolved, unverified complaint about plugin-market behavior.
Source: https://community.openclaw.ai/t/the-plugin-market-is-acting-up-need-a-fix

---

### Community Sentiment — The Autonomy-vs-Permissions Debate: The Agent Couldn't Run `apt-get` Without a Human
Forum topic #265 (**@mpflgrmpf**, Raspberry Pi, SOHO network, self-described beginner) asks what
permissions to grant an agent that is *"not able to perform a `sudo apt-get update && sudo apt-get
install --only-upgrade nodejs` to proceed his own update."* The post quotes **@McBain on X**:
*"If you're not seeing productivity gains with AI it's because you're being too chickenshit with
permissions AI can do anything on a computer that your employees can do, but only if you let it."*
The ask is blunt — *"What permissions do your claws have? YOLO Root Access?"* — and it is the same
trade-off the platform sub-topic tracks in product form (auto-mode exec approvals, `approvals` tag).
Note the source class: this is an **attitude quote relayed in a forum post**, not a measured outcome.
Source: https://community.openclaw.ai/t/permissions-for-claw

---

### Ecosystem Activity — 32 New ClawHub Skills in 24 Hours, and the Shape of the Market Is Now Visible
The ClawHub API shows **32 skills created after the cutoff** (2026-10-29T09:28Z → 2026-10-30T09:23Z),
i.e. roughly one new skill every 45 minutes. The use-case distribution is unusually business- and
China-weighted: a **patent-workflow suite** from `ip930` (patent-parameter-extraction,
patent-term-extraction, patent-list-dedupe, patent-abstract-digest, rd-project-patent-survey,
patent-license-records, patent-transfer-records — a full R&D-intelligence pipeline),
`1688aiinfra/1688-product-manage` (Alibaba 1688 product management), `sbakelongmit/perfex-crm`
(Perfex CRM connector), `plagtech/woocommerce-spraay-payouts` (WooCommerce batch payouts),
`huaweicloudskill/huawei-cloud-icp-preapproval-check` (China ICP filing pre-approval),
`junci003/mindar-webar-image-tracking` + `godot-openxr-marker-tracking` (AR/marker tracking),
`junci003/figure-design` and `florist-recipe` (product-design and floristry recipe engines),
`junci003/daily-points-claim` (automatic daily check-in claiming), `monaxamo/web-push-go`,
`catsmansion/research-first` and `mv-image-forensics` and `ai-watermark-margin`,
`longfellow1/product-judgment-skill`, `nhatdinh/paidrouter`, `liyupi/memecub`, `getmanor/manor`
(MANOR Edge — highest downloads at 120, 2 installs).
**Adoption signal is effectively zero**: downloads range 0–120, `installs` counters are 0 for all but
one (MANOR Edge = 2), and `stars` are 0 across all 32. No ROI or productivity claim is attached to
any of them. Several are Chinese-language, consistent with the ClawHub skill pipeline now being fed
by Chinese-domain operators.
Source: https://clawhub.ai/api/v1/skills?limit=200

---

### Use Cases — Showcase Standing Inventory Grows to ~60 Undated Community Entries; Top-Liked Unrecorded Ones
The official showcase page (`openclaw.ai/showcase`) still carries **no dates** — it is a standing
inventory, not news. Yesterday's run captured the six Featured Builds plus @iannuttall (❤️318) and
@swiftlysingh (❤️301). The "More From the Community" rail today exposes **~60 further entries**;
the highest-engagement ones **not recorded in `cumulative_findings.md`** are:
**@davis7** (❤️229) — *"This is the 'blue text bubbles' moment of the ai race… OpenClaw, btca, and the
thousands more that will get built this year now HAVE to be built using anthropic's 'agent sdk'
package or else they'll be 100x more expensive — and if they're built on anthropic's sdk guess what
they can't do? switch to a better model from another provider when it releases"* (a **model-lock-in
warning from inside the ecosystem**, echoing the HN "platform lock-in" precedent already on record);
**@KrauseFx** (❤️218) — Discord went *"from 0 to thousands of devs… new messages every minute"* plus
shipped Beeper, Homey and Fastmail support; **@chrisbanes** (❤️160) — *"being able to spin up agents
to implement a bunch of features from my phone is 🤯"*, hooked to a Telegram group;
**@andrewjiang** (❤️157) — *"24 hours later, the idea turned into a project pulling 4 million posts
across 100 top X accounts"* (a concrete data-scale use case); **@jlehman_** (❤️100) — voice-model
discovery and install on request; **@avi_press** (❤️92) — *"Less than 24 hours in: cleaned up Linear
issues, wrote email follow-ups, opened 3 PRs, prospected new signups"*, now scheduled daily;
**@chrisrodz35** (❤️82) — a staged rollout plan: *"Week 1 - Set it up for my family / Week 2 - Set it
up for some non-techie friends / Week 3 - We're building claw for work"*; **@jdrhyne** (❤️46/42) —
agent auto-built a JIRA skill because it wasn't on ClawHub, and built a GA4 skill in ~20 minutes
and published it to ClawHub (*"pay it forward"*).
All are **anecdotal, self-reported and undated**; the only quantified items are @avi_press's
"less than 24 hours in" task list and @andrewjiang's "4 million posts / 100 accounts" scale.
Source: https://openclaw.ai/showcase

---

### ROI — No New Credible Productivity or ROI Metric in This Window
No verifiable ROI figure appeared in the window. The only numeric productivity claims found are
**unverified anecdotes**: @avi_press's *"Less than 24 hours in: cleaned up Linear issues, wrote email
follow-ups, opened 3 PRs, prospected new signups"* (showcase X post, undated, no baseline, no cost),
and @andrewjiang's *"4 million posts across 100 top X accounts"* (volume, not value). Every other
quantified claim encountered in this window is either **already on record** (Felix "$62,000 in three
weeks" — vendor claim; Surge AI DAYJOB:Tax ~10% pass@1 — realism control; the six showcase builds'
like counts) or belongs to **vendor SEO content farms** (deepinfra.com "use cases that deliver real
ROI", betterclaw.io "save 5-20 hours/week each", insights.reinventing.ai, nocode.mba, clawbot.blog
"50 real-world use cases", markaicode.com, landing.elest.io "12 real-world use cases",
chatgpt.ca "36 AI agent examples") — **all undated, all generated-looking, none citing a verifiable
deployment or measurement.** No new vendor catalogue beyond the already-recorded solvea.cx and
crewclaw.com was found.
Source: https://openclaw.ai/showcase | https://deepinfra.com/blog/openclaw-use-cases-real-roi | https://www.betterclaw.io/blog/best-openclaw-use-cases

---

### Announcement Surface — Still Silent: Blog Nine Days, HN Four Days, Forum Unanswered
The official blog RSS has **no post newer than "Come Build With Us: OpenClaw Focus Weeks" (Wed, 21 Oct
2026)** — now **9 days of silence** on openclaw.ai/blog; the Focus Week window (Windows & Mac apps,
Oct 26 – Nov 1) is live with no post announcing it. Hacker News has **no OpenClaw story since
2026-10-26T22:40:16Z** (*"OpenClaw creator says he spent $10M in tokens last month"*, 2 pts, 1
comment — the last comment on it is also from 2026-10-26T22:48Z, so **zero HN comment activity in
this window**). The three third-party feeds checked (OpenClawRadar, anomixer, OpenClawRadar feed API)
produced exactly one new OpenClaw-relevant item in 24 h: the Open WebUI integration article
(2026-10-30T00:17Z). The forum produced 7 new topics, **0 replies**.
Source: https://openclaw.ai/rss.xml | https://hn.algolia.com/api/v1/search_by_date?query=openclaw&tags=story | https://hn.algolia.com/api/v1/items/50252140 | https://openclawradar.com/api/feed.json

---

## Blocked / Failed Sources
- **Reddit (r/openclaw): BLOCKED from this host (HTTP 403)** — not attempted. The Open WebUI
  integration finding was recovered indirectly via OpenClawRadar, which cites r/openclaw as its
  original source.
- **OpenClaw forum topic #272 body: image-only.** Both attached PNGs fetched, but the second CDN
  variant truncated to 263 bytes and the host's image/OCR models failed (`MiniMax-VL-01` returned no
  content; `zai/glm-4.6v` reported as unknown model). Content of the plugin-market complaint remains
  unread and unverified.
- **Discourse topic IDs 277, 275, 273, 271, 269, 267, 261–264: HTTP 404** — deleted, private or
  never published. The exact number of posts made in the window may therefore be understated.
- **web_search (DuckDuckGo) returned no dated, OpenClaw-specific news** for the 2026-10-29→10-30
  window; three queries consumed of the five-call budget, and the generic query returned only
  evergreen/SEO pages plus a `docs.openclaw.ai/install` page whose snippet describes OpenClaw as
  *"a web framework for Node.js"* — a third-party docs mirror, not official documentation, and a
  reminder that unofficial mirrors of the docs exist and drift.
- GitHub repository search for "openclaw" was unusable as a signal (175k hits, mostly unrelated
  repos matched on README text); used only to verify the three new build repos directly.

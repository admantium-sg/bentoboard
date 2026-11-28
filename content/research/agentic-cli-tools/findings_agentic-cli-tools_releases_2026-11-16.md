# Findings — agentic-cli-tools (releases) — 2026-11-16

- Research window: `2026-11-15T01:28:00Z → 2026-11-16T01:28:00Z`
- Working directory: `/home/devcon/.openclaw/shared-workspace/research/agentic-cli-tools`
- Baseline (novelty filter): `cumulative_findings.md`, `daily_reports/2026-11-{10..15}.md`, `archive/cumulative_findings_2026-11.md`, `findings_agentic-cli-tools_releases_2026-11-{14,15}.md`
- Method: direct `curl` against npm registry metadata, GitHub REST API, RSS/Atom feeds and vendor changelog/doc pages. No `web_search`/`web_fetch` calls were made in this cycle.

---

## 1. In-window releases (new since baseline)

### 1.1 OpenAI Codex CLI — two alpha builds published inside the window
| Version | npm publish | GitHub tag | GitHub publish |
|---|---|---|---|
| `0.171.0-alpha.6` | `2026-11-15T19:06:22.265Z` | `rust-v0.171.0-alpha.6` | `2026-11-15T18:58:35Z` |
| `0.171.0-alpha.7` | `2026-11-15T23:21:52.312Z` | `rust-v0.171.0-alpha.7` | `2026-11-15T23:13:50Z` |

- Source: `https://registry.npmjs.org/@openai/codex` (packument `time` map) and `https://api.github.com/repos/openai/codex/releases`.
- **Release body is content-free.** For `0.171.0-alpha.7` the entire body is the literal string `Release 0.171.0-alpha.7\n\n`. No features are attributed to either build.
- Baseline context (pre-window, unchanged): stable `0.169.0` @ `2026-11-13T08:43:21.818Z`; `0.168.0` @ `2026-11-13T04:00:31.594Z`; `0.167.2` @ `2026-11-11T22:50:04.191Z`; `0.171.0-alpha.5` @ `2026-11-14T01:28:44.762Z`. **No stable Codex CLI release inside the window.**

### 1.2 Gemini CLI — core nightly inside the window
- `@google/gemini-cli-core` `0.70.0-nightly.20261116.g4ed06ed0d` published `2026-11-16T01:24:49.484Z` — inside the window (≈3 min before window close).
- Source: `https://registry.npmjs.org/@google/gemini-cli-core`
- Pre-window baseline unchanged: stable `0.68.0` @ `2026-11-10T21:22:49.277Z`; preview `0.69.0-preview.0` @ `2026-11-10T21:11:43.097Z`. **No stable or preview Gemini CLI release inside the window.**

### 1.3 Crush — nightly build inside the window
- Release tag `nightly-2026-11-16T00-49-55-706Z` published inside the window (`2026-11-16T00:49:55Z`).
- Source: `https://api.github.com/repos/charmbracelet/crush/releases?per_page=5`
- Body is boilerplate (asset/checksum listing only) — no feature attribution.

### 1.4 Kilo Code — JetBrains RC inside the window
- Release `jetbrains/v7.2.1-rc.7` published `2026-11-16T01:21:26Z` — inside the window.
- Source: `https://api.github.com/repos/Kilo-Org/kilocode/releases`
- Pre-window baseline unchanged: npm `kilocode` latest `1.2.0` @ `2025-10-01T16:49:28.619Z`.

### 1.5 Amp — five npm builds inside the window
Package `@sourcegraph/amp`, all published in-window:
- `0.0.1794715238-g81da65` — `2026-11-15T04:20:55.803Z`
- `0.0.1794729642-gc6c9b7` — `2026-11-15T08:25:46.172Z`
- `0.0.1794744038-ga74b43` — `2026-11-15T12:19:19.368Z`
- `0.0.1794758429-g24ed8c` — `2026-11-15T16:26:19.672Z`
- `0.0.1794772833-g217332` — `2026-11-15T20:23:29.229Z`

Source: `https://registry.npmjs.org/@sourcegraph/amp` (packument `time` map). Build hashes are commit-derived; no release notes are published on npm, so **no features are attributed**.

### 1.6 Zed — nightly + collab-staging build inside the window
- `nightly` and `collab-staging` entries both at `2026-11-15T09:13:15Z`: "language: Reset max start depth on pooled query cursors (#66983)".
- Source: `https://github.com/zed-industries/zed/releases.atom`
- Baseline unchanged: `v1.29.1-pre` @ `2026-11-11T19:20:02Z`; stable `v1.28.1` @ `2026-11-11T19:08:27Z`. **No new stable/pre Zed release inside the window.**

### 1.7 OpenAI news RSS — two entries inside the window
| pubDate | Title | URL |
|---|---|---|
| `Sun, 15 Nov 2026 22:00:01 GMT` | A step toward defining the Standard Model on a lattice | https://openai.com/index/step-toward-defining-the-standard-model |
| `Sun, 15 Nov 2026 22:00:00 GMT` | Our new blog for science | https://openai.com/index/our-new-blog-for-science |

Source: `https://openai.com/news/rss.xml`. These are the first in-window OpenAI news items of this research run; both are science/research announcements, not agentic-CLI product news.

---

## 2. Announcements / newsroom items (new since baseline)

### 2.1 Anthropic newsroom — three Nov 13 posts surfaced that are absent from the baseline
Discovered via `https://www.anthropic.com/sitemap.xml` (591 URL entries; max `lastmod` `2026-11-13T22:37:05.676Z`) and confirmed with HTTP `200` fetches of each page. None of these slugs appear in `cumulative_findings.md` or the 2026-11-14/15 findings files (grep count 0 for each):

- `https://www.anthropic.com/news/2026-us-midterms` — `lastmod 2026-11-13T17:02:43.448Z`
- `https://www.anthropic.com/news/a-new-initiative-for-developing-third-party-model-evaluations` — `lastmod 2026-11-13T22:37:05.626Z`
- `https://www.anthropic.com/news/accenture-embedded-evaluation` — `lastmod 2026-11-13T22:37:05.618Z`
- also present in sitemap with `2026-11-13` timestamps: `https://www.anthropic.com/news/activating-asl3-protections` (`lastmod 2026-11-13T22:37:05.586Z`)

These are dated **Nov 13, i.e. pre-window** — they are baseline-gap backfill, not in-window news. Fetched copies: `tmp/2026-11-16/an_*.html` (each contains only `2026-11-13` date strings).

### 2.2 Anthropic — "building strong safety evaluations" is a research URL, not news
`https://www.anthropic.com/research/building-strong-safety-evaluations` (the URL cited in the baseline as a Nov 13 "newsroom post" is under `/research/`). The newsroom post set for Nov 13 is the four slugs listed in 2.1.

---

## 3. Docs / settings surface — verified re-reads (no change)

### 3.1 Claude Code `sandbox.autoAllowBashIfSandboxed` — still documented, unchanged in-window
- `https://code.claude.com/docs/en/settings-reference.md` (HTTP `200`) still carries the key: index row at line 179, sandbox object type at line 1287, example at line 1296, dedicated section `### sandbox.autoAllowBashIfSandboxed` at line 1356 with example at line 1372.
- `https://code.claude.com/docs/en/settings.md` (HTTP `200`, 45,980 bytes) does **not** mention the key — the setting lives on the settings-reference page, which is why the plain-settings grep is empty.
- Both pages are unchanged from the 2026-11-15 captures (`tmp/2026-11-15/cc_settings.html`, `tmp/2026-11-15/ccdocs_changelog.html`); no in-window modification.

### 3.2 Claude Code Code Mode — still experimental, still terminal-only for resuming
- `https://code.claude.com/docs/en/code-mode` → `dateModified":"2026-11-13T18:10:07.500Z"` — **identical** to yesterday's capture (`tmp/2026-11-15/cc_code-mode.html`).
- Limitations text byte-identical to prior cycle, including the still-terminal restriction: *"Resuming: you can resume a Code Mode session only in the terminal, with Code Mode on"* — so the answer to the standing question is **still terminal-only**, and the feature is **still labelled experimental and off by default** ("Code Mode is experimental and off by default. It may change or be removed in any release.").

### 3.3 Claude Code docs sitemap — no in-window doc updates
- `https://code.claude.com/sitemap.xml`: newest `lastmod` values are `2026-11-14T19:06:51.840Z`, `2026-11-14T17:53:36.782Z`, `2026-11-14T17:23:35.370Z`, `2026-11-14T16:51:10.831Z`, `2026-11-14T16:02:38.584Z`, `2026-11-14T15:59:29.423Z`, `2026-11-14T15:58:10.684Z`, `2026-11-14T15:54:02.028Z`. All **pre-window**; nothing modified during `2026-11-15T01:28Z → 2026-11-16T01:28Z`.
- The `2026-11-14T19:06:51.840Z` batch covers the `/docs/de|es|fr|id|it|…` locale trees plus `advisor`, `agent-sdk/python`, `agent-view`, `artifacts`, `auto-mode-config`, `best-practices`, `claude-models-on-google-cloud-anthropic-managed`, `cli-reference`, `commands`, `debug-your-config`, `env-vars`, `errors`, `fast-mode`, `feature-availability`, `hooks`, `hooks-guide`, `interactive-mode`, `llm-gateway-protocol`, `mcp-quickstart`, `microsoft-foundry`, `model-config`, `monitoring-usage`, `permission-modes`, `permissions`, `plugins/create`, `plugins/troubleshooting`, `remote-control`, `sessions`, `settings-reference`, `statusline`, `terminal-config`, `tools-reference`, `vs-code`.

---

## 4. Watchlist status

| # | Item | Status this cycle |
|---|---|---|
| 1 | Cursor X-Subscription bundling | **Still NOT FOUND.** `https://cursor.com/pricing` (HTTP `200`) still names **"X Subscription Corp"** as the sole seller ("Subscriptions are only sold directly through X Subscription Corp. We do not authorize any resellers or third-party sellers."). Footer still carries `SpaceXSI Subscription Terms` and `AIUC-1 Certified`. Identical strings were present in the 2026-11-15 captures → pre-existing state, no in-window change. Tiers unchanged: Free $0, Plus $8, Premium $30, Super $100, Ultra $200. |
| 2 | SpaceX acquisition of Cursor | **No new evidence.** No in-window announcement located on pricing/changelog/news surfaces. Only the pre-existing `SpaceXSI Subscription Terms` footer link. |
| 3 | AIUC-1 | **No new evidence.** Footer badge only (`AIUC-1 Certified`), unchanged from yesterday. |
| 4 | `sandbox.autoAllowBashIfSandboxed` | **Still documented, unchanged** (see 3.1). |
| 5 | Amp details | Only the five in-window npm builds (1.5). Release-note surfaces are unreachable — see access gaps. |
| 6 | Conductor | `https://www.conductor.build/changelog` (fetched, 124,418 bytes) — newest entry **0.94.2, November 13, 2026** ("Conductor is back"). Preceding: `0.94.0, November 9, 2026` (Claude Fable 5.2 available in Conductor; bundled Claude Code updated to **2.1.321**, Codex to **0.166.0**), `0.93.0, November 4, 2026` ("Conductor is joining Meta"; Conductor Cloud read-only Nov 13, shutdown Nov 20; local Conductor supported until early 2027). **No in-window Conductor release.** Note: Conductor's bundled Claude Code (2.1.321) and Codex (0.166.0) trail the current upstream releases (2.1.325 / 0.169.0 stable). |

---

## 5. VERIFIED NEGATIVES (checked, nothing found in-window)

- **Claude Code**: no release after `2.1.325` (npm `2026-11-13T20:07:25.823Z`, GitHub `2026-11-13T20:40:01Z`); Agent SDK still `0.3.325` @ `2026-11-13T20:05:51.004Z`.
- **Claude Code advisories**: no new advisory after `GHSA-5xjx-9qx6-jcrv` (published `2026-11-09T22:42:03Z`) via `https://api.github.com/advisories?ecosystem=npm&affects=%40anthropic-ai%2Fclaude-code&per_page=100`.
- **Cursor changelog**: no entry after `Nov 6, 2026` ("Voice Chat with Agents"); Cursor RSS newest `Fri, 06 Nov 2026 00:00:00 GMT`.
- **Cursor CLI changelog**: still `v2026.10.22` (newest dated versions in `https://docs.cursor.com/en/cli/changelog` are `v2026.10.22`, `v2026.10.17`, …); no November CLI release. `https://cursor.com/changelog/cli` → HTTP `200`; `https://docs.cursor.com/en/cli/changelog` → HTTP `308` redirect.
- **Anthropic newsroom**: no post dated after `2026-11-13`; sitemap max `lastmod` `2026-11-13T22:37:05.676Z`.
- **GitHub changelog feed** (`https://github.blog/changelog/feed/`): no entry after Nov 13.
- **goose**: no `v1.59.2`; latest is `v1.59.1` @ `2026-11-14T06:50:12Z`.
- **GitHub Copilot CLI**: no in-window release. Stable `1.0.112` @ `2026-11-13T23:59:41.114Z`; pre-release `1.0.112-0` @ `2026-11-13T19:37:50.430Z`.
- **Codex CLI / Gemini CLI / Copilot CLI**: no in-window *stable* release for any of the three.
- **OpenHands**: no in-window release; latest `v1.40.0` @ `2026-11-12T14:22:00Z`.
- **Zed**: no in-window stable or pre release (see 1.6 for the in-window nightly only).
- **opencode**: no in-window release; npm `opencode-ai` latest `1.19.5` @ `2026-10-28T06:17:11.100Z`.
- **Cline**: no in-window release; latest `3.0.74` @ `2026-10-26T04:04:22.234Z`.
- **Factory droid**: no in-window release; latest `1.12.1` @ `2026-11-14T06:55:44.828Z`.
- **aider**: no release; latest `v0.86.0` @ `2025-08-09T17:42:19Z`.
- **Grok Build** (`xai-org/grok-build`): no releases at all (`/releases` empty array; `/tags` empty array); repo `pushed_at 2026-09-29T16:57:13Z`.
- **Amp**: no release-note content published on npm for any of the five in-window builds.

---

## 6. ACCESS GAPS (not silence, not absence)

- GitHub repo `sourcegraph/amp` → HTTP `404` (`amp_gh:404`); `https://api.github.com/repos/sourcegraph/amp/releases?per_page=3` returns `{"message":"Not Found","documentation_url":"https://docs.github.com/rest"}`. **Amp's GitHub release feed is unavailable — absence of GitHub releases for Amp must not be reported as "no releases".**
- `https://ampcode.com/changelog` → HTTP `404`.
- `https://ampcode.com/manual` → HTTP `301`; following redirects lands on `https://ampcode.com/docs` (HTTP `200`), whose newest date strings are `2026-11-09`, `2026-11-10`, `2026-11-12` — all pre-window. `https://ampcode.com/` (HTTP `200`, 439,550 bytes) likewise shows no in-window dates (max `2026-11-12`). **No in-window Amp changelog entry could be confirmed; the doc surface simply carries no in-window dates.**
- `https://block.github.io/goose/blog/` → HTTP `404` (`goose_blog:404`); goose release notes were taken from the GitHub API instead.
- `https://cursor.com/blog/rss.xml` → HTTP `404` (no blog RSS at that path).
- GitHub search API for `org:FactoryAI` + droid returned no usable items, and `api_factoryai_droid.json` / `api_FactoryAI_factory-droid.json` from the prior cycle contain no `full_name` → the droid repository could not be located; npm metadata was used instead.
- `https://www.conductor.build/changelog` returns a JS-rendered page; the parsed text yielded dated entries only through `November 13, 2026`.

---

## 7. Files produced this cycle

Working dir `tmp/2026-11-16/`:
`npmtime.py`, `npmtime.txt`, `rel_codex.json`, `rel_copilot.json`, `rel_gemini.json`, `rel_cc.json`, `rel_Kilo-Org_kilocode.json`, `cc_changelog.md`, `cc_code-mode.html`, `code-mode.txt`, `cc_settings.md`, `cc_settings_ref.md`, `cc_sitemap.xml`, `models_overview.md`, `anth_news.html`, `anth_sitemap.xml`, `an_an-update-on-independent-evaluators.html`, `an_2026-us-midterms.html`, `an_accenture-embedded-evaluation.html`, `openai_rss.xml`, `gh_changelog.xml`, `cursor_changelog.html`, `cursor_rss.xml`, `cursor_cli_changelog.html`, `cursor_cli_docs2.html`, `cursor_cli2.html`, `cursor_pricing.html`, `cursor_blog_rss.xml`, `antigravity.html`, `cond_changelog.html`, `amp_changelog.html`, `amp_manual.html`, `amp_home.html`, `amp2.html`, `goose_rel.html`, `zed.atom`

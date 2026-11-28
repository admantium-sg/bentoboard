# Agentic CLI Tools & Desktop AI Assistants — Releases / Commands / Features / Announcements

**Run date:** 2026-11-08
**Coverage window:** 2026-11-07T01:28:00Z → 2026-11-08T01:28:00Z
**Subagent:** A (releases & announcements)

_Started 2026-11-08T01:29Z (02:29 Berlin). Findings appended chronologically._

## OpenAI Codex CLI

- **Release `0.169.0-alpha.3` published in-window.** npm publish timestamp for `@openai/codex@0.169.0-alpha.3` = **2026-11-07T19:41:09Z** (platform variants 19:43–19:46Z). The `alpha` dist-tag now points to `0.169.0-alpha.3`; `latest` remains `0.167.0`.
  Source: https://registry.npmjs.org/@openai/codex
- GitHub release `rust-v0.169.0-alpha.3` present, Atom `<updated>` = 2026-11-07T19:36:41Z. Release notes for Codex alphas are typically stub/minimal — **no feature claims made here** because the note body was not verified as substantive.
  Source: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3
- Predecessor `0.169.0-alpha.2` was published 2026-11-06T22:32Z — **out of window** (context only).
  Source: https://registry.npmjs.org/@openai/codex

## GitHub Copilot CLI

- **Release `1.0.108-1` published in-window.** npm publish 2026-11-07T02:32:49Z; GitHub release tag `v1.0.108-1` Atom `<updated>` 2026-11-07T02:32:48Z. The `prerelease` dist-tag = `1.0.108-1`; `latest` still `1.0.107` (published 2026-11-06T20:39Z, out of window).
  Source: https://registry.npmjs.org/@github/copilot
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.108-1
- `1.0.108-0` published 2026-11-07T00:27:45Z — **out of window** (23 min before window start).
  Source: https://github.com/github/copilot-cli/releases/tag/v1.0.108-0

## Zed

- **Nightly channel release in-window.** GitHub release `nightly` + `collab-staging` tags, Atom `<updated>` = 2026-11-07T09:46:58Z. Title of the nightly entry: "Hide read-only toggle on tabs that cannot be toggled (#66650)". Zed has no npm package (`@zed-industries/zed` not found on npm).
  Source: https://github.com/zed-industries/zed/releases/tag/nightly
- Stable/pre channels: `v1.27.0` (2026-11-04) and `v1.28.0-pre` (2026-11-04) — **out of window**.
  Source: https://github.com/zed-industries/zed/releases.atom

## Kilo Code

- **Release `v7.8.28` published in-window** (marked pre-release). GitHub release Atom `<updated>` = 2026-11-07T16:57:08Z.
  Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.28
- Previous `v7.8.27` (release) 2026-11-05 — out of window.

## Crush (charmbracelet/crush)

- **Nightly release published in-window.** GitHub release `nightly` tag, Atom `<updated>` = 2026-11-08T00:45:57Z (within window, which ends 2026-11-08T01:28:00Z). Nightly release notes are auto-generated; no feature claims made.
  Source: https://github.com/charmbracelet/crush/releases/tag/nightly
- Stable `v0.100.0` published 2026-11-05T17:49:39Z on npm — **out of window**.
  Source: https://registry.npmjs.org/@charmland/crush

## Amp (@sourcegraph/amp)

- **Rolling CI builds published in-window**, several: `0.0.1794038434-gd5a1bf` (2026-11-07T08:24:41Z), `0.0.1794052841-g6d76b7` (12:30:40Z), `0.0.1794067235-gf8712b` (16:20:49Z), `0.0.1794081633-g6e983f` (20:27:41Z), `0.0.1794096074-g996537` (2026-11-08T00:25:09Z). `latest` dist-tag = `0.0.1794096074-g996537`.
  Source: https://registry.npmjs.org/@sourcegraph/amp
- sourcegraph/amp publishes **no changelog and no GitHub releases** (releases.atom returned no entries) — build content is **not verifiable** from public metadata. No feature claims made.

## Google Gemini CLI

- **`@google/gemini-cli-core` nightly published in-window:** `0.69.0-nightly.20261108.g62bab5b23` at **2026-11-08T01:13:24Z** (staging-tmp dist-tag). Same build hash `g62bab5b23` as the 2026-11-07T01:16:28Z nightly, which itself falls just **outside** the window (12 min before start).
  Source: https://registry.npmjs.org/@google/gemini-cli-core
- No new `@google/gemini-cli` (the wrapper package) publish in-window; latest remains `0.67.0` (2026-11-04). `preview` = `0.68.0-preview.0` (2026-11-04).
  Source: https://registry.npmjs.org/@google/gemini-cli

## Factory Droid CLI (`droid` npm)

- **Release `1.6.0` published in-window.** npm publish timestamp **2026-11-07T04:09:32.718Z** for package `droid` ("Factory Droid CLI - AI-powered software engineering agent", bin `droid`, repo github.com/Factory-AI/factory apps/cli). `latest` dist-tag = 1.6.0. Predecessor 1.5.0 (2026-11-06) out of window.
  Source: https://registry.npmjs.org/droid
- No `@factory-ai/droid` scoped npm package exists (registry returns error) — the CLI ships under the unscoped `droid` name.

## opencode (anomalyco/opencode)

- No in-window GitHub release: latest tagged release is `v2.2.6`, Atom `<updated>` 2026-11-06T23:37:20Z — **out of window** (published just before window start; Atom exposes updated, not published_at).
  Source: https://github.com/anomalyco/opencode/releases/tag/v2.2.6
- npm `opencode-ai` last publish 1.19.5 (2026-10-28) and `opencode-ai/cli` last publishes 2026-09-07 — **no in-window npm publish**; the project now ships from `dev`/`beta` tags (dist-tags beta=0.0.0-beta-19271, dev=0.0.0-dev-19272, both stale at 2026-09-07).
  Source: https://registry.npmjs.org/opencode-ai
  Source: https://registry.npmjs.org/@opencode-ai/cli
- Active development in-window on `dev` branch: notable commits include `feat(core): fetch Console instructions and skills concurrently (#62672)` (2026-11-08T00:30:40Z), `feat(core): wake sessions on Console event watches (#62662)` (2026-11-07T23:06:39Z), `feat(site): add the shared product and logo menus to every nav (#62654)` (2026-11-07T22:06:29Z), `feat(data): switch the mono font to OpenTUI Mono (#62623)` (2026-11-07T22:03:42Z). Commit-level activity, not a release.
  Source: https://github.com/anomalyco/opencode/commits/dev.atom

## Claude Code (anthropics/claude-code)

- No in-window release: latest `v2.1.319` (GitHub Atom `<updated>` 2026-11-06T17:04:01Z; npm publish 2026-11-06T00:58:56Z) — **out of window**. `latest`/`next` dist-tags both = 2.1.319, `stable` = 2.1.311.
  Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.319
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code
- Platform package `@anthropic-ai/claude-code-linux-arm64` last published 2.1.319 on 2026-11-06 — no in-window publish.
  Source: https://registry.npmjs.org/@anthropic-ai/claude-code-linux-arm64
- No in-window commits on `main` (latest commit 2026-11-06T17:03:45Z "chore: Update CHANGELOG.md and feed.xml").
  Source: https://github.com/anthropics/claude-code/commits/main.atom

## Anthropic (vendor announcements)

- Anthropic news index scraped. Most recent post dates shown: **Nov 6, 2026** ("The components of agent memory", /research/components-of-agent-memory), **Nov 6, 2026** ("Teaching AI to build scientific models"), **Nov 5, 2026**, **Nov 4, 2026**. **No post dated Nov 7 or Nov 8, 2026** — the "Latest news - November 8, 2026" string on the page is the **masthead date, not a post date** (per task instruction, not treated as a post).
  Source: https://www.anthropic.com/news
- Anthropic publishes no RSS/Atom feed at /rss.xml, /news/rss.xml or /feed.xml (all HTTP 404) — index scraping is the only route.
  Source: https://www.anthropic.com/rss.xml

## Cursor

- Changelog index scraped; most recent entries dated **Nov 6, 2026** ("voice chat", /changelog/voice-chat) and **Nov 5, 2026** ("build live apps"). **No changelog entry dated Nov 7 or Nov 8, 2026** → no in-window Cursor CLI/changelog release.
  Source: https://cursor.com/changelog
  Source: https://cursor.com/changelog/voice-chat

## OpenAI (vendor announcements)

- OpenAI news RSS latest item dated **Fri, 06 Nov 2026 08:00:00 GMT** ("Partnering with Hacktron to find vulnerabilities in OpenAI's systems"). **No OpenAI news post published in-window** (window starts 2026-11-07T01:28Z).
  Source: https://openai.com/news/rss.xml

## GitHub (vendor announcements)

- Changelog feed latest entry: **Sat, 07 Nov 2026 00:27:19 +0000** ("Copilot code review: API management and review overview updates", URL slug dated 2026-11-06). This is **before** the window start (01:28Z) → **out of window**. Next entries are Nov 6 and earlier.
  Source: https://github.blog/changelog/feed/

## Factory (vendor announcements)

- Factory news index latest posts: **2026-11-06** ("Extending the Factory Organization Model with User Groups", /news/user-groups) and **2026-11-04** ("HumanLayer is joining Factory"). **No Factory announcement dated Nov 7 or Nov 8** → no in-window announcement.
  Source: https://factory.ai/news

## Grok Build / xAI Grok CLI

- **`@xai-official/grok` version `1.0.79` published in-window** at **2026-11-08T00:48:03.553Z**, with platform binaries: linux-x64 1.0.79 (2026-11-08T00:49:03Z), darwin-arm64 1.0.79 (00:54:39Z), win32-x64 1.0.79 (00:49:54Z). The npm `alpha` dist-tag points to 1.0.79 while `latest` stays at 1.0.77 (published 2026-11-05). Package description: "Bring Grok into your terminal"; bin `grok`.
  Source: https://registry.npmjs.org/@xai-official/grok
  Source: https://registry.npmjs.org/@xai-official/grok-linux-x64
- **No public release notes for the Grok CLI build.** `github.com/xai-org/grok-build` has **no releases** and its last commit is 2026-09-29 ("Synced from monorepo") — so the content of 1.0.79 cannot be verified from public metadata. **UNVERIFIED** as to features.
  Source: https://github.com/xai-org/grok-build/releases.atom
  Source: https://github.com/xai-org/grok-build/commits/main.atom
- `x.ai/news` returned **HTTP 403** (blocked) — could not check xAI announcements in-window.
  Source: https://x.ai/news

## Google Antigravity

- Antigravity product updates page shows most recent item **"Voice mode in Antigravity", Nov 6, 2026** (Product), then Nov 3, 2026. **No update dated Nov 7 or Nov 8, 2026** → no in-window Antigravity announcement.
  Source: https://antigravity.google
- No official npm package found for the Antigravity CLI: `@google/antigravity`, `@google/antigravity-cli`, `google-antigravity` all return registry "Not found"; `antigravity-cli` on npm is an unrelated 2025 placeholder (v0.0.1, 2025-11-19). Third-party wrappers published in-window: `antigravity-claude-proxy` 3.0.0 (2026-11-07), `@cortexkit/antigravity-auth-core` 3.0.36 (2026-11-07), `@ycodium-ai/agent-antigravity` 0.2.4121 (2026-11-07), `pi-antigravity` 0.12.0 (2026-11-06).
  Source: https://registry.npmjs.org/antigravity-cli
  Source: https://registry.npmjs.org/-/v1/search?text=antigravity

## Conductor (post-acquisition)

- Conductor changelog RSS: latest entry **Conductor 0.93.0 "Conductor is joining Meta" — Wed, 04 Nov 2026**. Previous 0.92.0 "Remote control" (2026-10-23). **No in-window (Nov 7–8) Conductor release.**
  Source: https://www.conductor.build/changelog/rss.xml
  Source: https://www.conductor.build/changelog
- No official Conductor npm CLI package found (`@conductor/cli`, `@conductorbuild/cli`, `conductor-cli` all absent or unrelated). Unrelated same-named packages published in-window: `conductor-node` 15.0.1 (2026-11-08, official Netflix Conductor API TS library), `@detergent-software/conductor` 3.6.0 (2026-11-07, local daemon for conducted project work loops) — the latter is a same-name but different project; flagged as an adjacent, not identical, product.
  Source: https://registry.npmjs.org/-/v1/search?text=conductor

## goose (block/goose → aaif-goose/goose)

- **No in-window release.** Latest tag/release `v1.57.0` (2026-10-28T19:42:57Z); the goose repo has moved to the `aaif-goose/goose` org. `block/goose` redirects to `aaif-goose/goose`.
  Source: https://github.com/aaif-goose/goose/releases/tag/v1.57.0
- No npm distribution under `@block/goose` or `@block/goose-cli` (registry error); the `goose` npm package is an unrelated 2012 package (latest 0.0.3). goose ships via GitHub releases / pip.
  Source: https://registry.npmjs.org/@block/goose
- In-window development activity on `main` (commits, not a release): `feat(live-voice): configurable GPT-Live endpoint, model and key (#13360)` at 2026-11-08T00:41:28Z; earlier in-window items include `feat(acp): filter session/list by client tags (#13173)` (2026-11-05, out of window).
  Source: https://github.com/aaif-goose/goose/commits/main.atom

## Cline

- **No in-window release.** Latest GitHub release is `desktop-nightly-20261104233655` (2026-11-04T21:08:20Z, "feat(core): delegate UX verification to a subagent"); latest stable `v4.1.26` (2026-10-26).
  Source: https://github.com/cline/cline/releases.atom
- npm packages (`cline`, `@cline/cli`, `@cline/core`, `@cline/agents`, `@cline/llms`, `@cline/ui`, `@cline/shared`): **no in-window publishes** — newest is `cline@3.0.74` (2026-10-26) and the `@cline/*` nightlies stop at 2026-11-04.
  Source: https://registry.npmjs.org/cline
  Source: https://registry.npmjs.org/@cline/core
- No in-window commits on `main` (latest 2026-11-06T18:48:41Z, "feat(ui): refresh shared color and typography tokens (#15432)").
  Source: https://github.com/cline/cline/commits/main.atom

## OpenHands

- **No in-window release.** Latest `v1.37.0` (2026-11-06T13:06:00Z, release notes: automation Mermaid diagrams, chat/session fixes); `v1.36.0` 2026-11-05. PyPI `openhands` last upload 1.16.0 (2026-05-08) — newer releases are GitHub/container only.
  Source: https://github.com/OpenHands/OpenHands/releases/tag/v1.37.0
  Source: https://pypi.org/pypi/openhands/json
- In-window repo activity on `main` is dependency bumps and UI refactors only (e.g. 2026-11-08T00:01:12Z i18next bump, 2026-11-07T19:59:42Z scroll-fade token refactor) — **no feature release**.
  Source: https://github.com/OpenHands/OpenHands/commits/main.atom

## aider

- **No in-window activity.** Last GitHub release `v0.86.3.dev` / `v0.86.2` (Atom 2026-02-12); PyPI `aider-chat` last upload 0.86.2 (2026-02-12); last commit on `main` 2026-05-22. **Project appears dormant** — no releases, commits, or announcements in-window.
  Source: https://github.com/Aider-AI/aider/releases.atom
  Source: https://pypi.org/pypi/aider-chat/json

## Codex CLI — in-window development activity (features, not yet released)

Beyond the `0.169.0-alpha.3` alpha, the Codex repo had heavy in-window development on `main`. Commits merged in-window (2026-11-07T01:28Z → 2026-11-08T01:28Z) include:
- `Add support for incremental code mode tool definitions (#60157)` — 2026-11-07T18:24:25Z
- `Wire incremental exec tool updates into Code Mode sessions (#60163)` — 2026-11-07T19:26:20Z
- `Allow creating custom providers during sign-in (#60186)` — 2026-11-07T23:51:58Z
- `Add keyboard and mouse navigation for sidebar tabs (#60181)` — 2026-11-07T23:18:39Z
- `Attach typed punctuation to completed skill mentions (#60180)` — 2026-11-07T23:00:32Z
- `Persist local workspace side chats and add tab close controls (#60152)` — 2026-11-07T17:31:27Z
- `Allow model overrides for incremental Code Mode tool messages (#60188)` — 2026-11-08T01:13:32Z
Source: https://github.com/openai/codex/commits/main.atom

## Factory Droid CLI — release notes detail (v1.6.0, Nov 7 2026)

Factory publishes machine-readable release JSON per version at `docs.factory.ai/docs/changelog/releases/<version>.json`. For **v1.6.0 (CLI v1.6.0 · Desktop v1.6.0, November 7, 2026)** — summary: *"Side chat with /side, desktop telemetry and dragging fixes, and tidier settings and skills screens"*:

- **Feature (CLI):** "Side chat with `/side` — The `/side` command now opens Side Chat, matching `/btw`".
- **Improvement (CLI):** "Faster worktree session archiving — Archiving or deleting a worktree session no longer waits for its checkout files on macOS and Linux".
- **Fix (CLI):** "Steered background Task answers — A background Task now reports its final answer when you steer a message into it".
- **Improvement (app):** "Settings page layout — Settings pages now space sections evenly and share one loading, empty, and error state".
- **Fix (app):** "Sidebar header window dragging — You can again drag the desktop window by the open sidebar header".
- **Fix (app):** "Telemetry setting in Desktop — The desktop app now honors telemetry turned off in your user or organization settings".
- **Improvement (app):** "Session view while verifying computers — Verifying a Droid Computer's identity no longer reloads the session view you are reading".
- **Improvement (app):** "Create Skill modal layout — The Create Skill modal now leads with the description field, then examples and a short how-it-works list".
- **Improvement (app):** "Skills search focus — Opening the skills browser now focuses its search field so typing filters the list".
- **Improvement (app):** "Custom deployment sign-in naming — Sign-in now offers a Factory Custom Deployment instead of naming it Factory Private".
- **Fix (app):** "Paused computer status — A paused Droid Computer no longer shows as running after a delayed status update".
- **Improvement (app):** "New session startup — Starting a new session no longer flashes *Initializing Session* before the session opens".
- **Improvement (app):** "Bug report export note"; **Fix (app):** "Sidebar text font".
Source: https://docs.factory.ai/docs/changelog/releases/1.6.0.json
Source: https://docs.factory.ai/docs/changelog/release-notes

## Kilo Code — npm CLI package

- `@kilocode/cli@7.8.28` published **in-window** at **2026-11-07T16:52:48Z** (matching the GitHub pre-release tag `v7.8.28` at 16:57:08Z). npm dist-tags: `rc` = 7.8.28, `latest` = 7.8.27 (2026-11-05), `next` = 1.0.8, `kilo-v2` = 0.0.0-v2-25.
  Source: https://registry.npmjs.org/@kilocode/cli
- v7.8.28 release notes (CLI surface): **Minor** — "#15929 Expose hosted workspace profile defaults through the Session Host API. Clients can create an empty hosted workspace without an initial prompt or profile, list personal and organization profiles with their default flags, and set or clear the personal default profile." **Patch** — "#15921 Skip plugin tools whose arguments cannot be converted to JSON Schema instead of failing every prompt in the session".
  Source: https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.28

## Zed — release notes detail (nightly, Nov 7 2026)

Nightly release note body: *"Fixed read-only toggle icon and action shown on item tabs that do not support it"* (closes issue #65010). Same build published to both `nightly` and `collab-staging` tags at 2026-11-07T09:46:58Z.
Source: https://github.com/zed-industries/zed/releases/tag/nightly

## Crush — in-window development activity (commits, not a release)

In-window commits on `main` include: `refactor(agent): own cancel and timeouts in one request guard` and `fix(agent): stop a cancelled or silent stream instead of hanging the …` (both 2026-11-07T20:21:36Z), `fix(ui): keep scrolled lists anchored when content shrinks or goes away` and `fix(ui): clamp dialog and shell scroll offsets when their content cha…` (2026-11-07T22:12:59Z), `ci: lint with golangci-lint v2.15.0 so it can read Go 1.27.3 packages` (2026-11-07T21:35:16Z). No in-window npm publish (npm `latest` remains 0.100.0 from 2026-11-05).
Source: https://github.com/charmbracelet/crush/commits/main.atom

## Gemini CLI — in-window development activity

No in-window commits on `main` (latest 2026-11-06T21:43:53Z, "fix(core,cli): allow overriding 60s API headers timeout…") and no in-window GitHub release (latest `v0.68.0-preview.0`, 2026-11-04). The only in-window artifact is the `@google/gemini-cli-core` nightly publish noted above.
Source: https://github.com/google-gemini/gemini-cli/commits/main.atom
Source: https://github.com/google-gemini/gemini-cli/releases.atom

## opencode — dev-build activity (npm, in-window)

`@opencode/core` published **18 `0.0.0-dev-*` builds in-window** (dev-938 at 2026-11-07T02:06:48Z through dev-984 at 2026-11-08T01:07:57Z); `@opencode/plugin` published the matching dev builds. These are CI/dev snapshots of the `dev` branch, **not** a tagged release. The last tagged release (v2.2.6) went out 2026-11-06T23:36:57Z, just outside the window.
Source: https://registry.npmjs.org/@opencode/core
Source: https://registry.npmjs.org/@opencode/plugin

## Adjacent / ecosystem activity published in-window (context, not core tracked tools)

Third-party packages in the agentic-CLI ecosystem published in-window: `@app-mcp/cli` 0.4.2 (2026-11-07T23:00Z, MCP Apps CLI), `oh-my-codex` 0.21.48 (2026-11-07T22:21Z, multi-agent orchestration for Codex CLI), `@ai-sdk/harness-codex` 1.0.178 (2026-11-07T19:27Z), `@ai-sdk/harness-grok-build` 1.0.115 (2026-11-07), `@cotal-ai/connector-codex` / `connector-claude-code` 0.148.0 (2026-11-07T23:11Z), `@ycodium-ai/agent-codex` / `agent-antigravity` / `agent-grok` 0.2.4121 (2026-11-07), `antigravity-claude-proxy` 3.0.0 (2026-11-07), `@detergent-software/conductor` 3.6.0 (2026-11-07T19:46Z — same-name but unrelated to the Conductor/Meta product), `@bitfun-test/bitfun` 0.2.19-daily.20261107, `sidekeen` 0.0.3 (2026-11-07T13:19Z, "native terminal AI agent").
Source: https://registry.npmjs.org/-/v1/search?text=codex&sort=date
Source: https://registry.npmjs.org/-/v1/search?text=terminal+ai+agent&sort=date

## Coverage gaps / unverified items

- **Codex CLI `0.169.0-alpha.3`** — the GitHub release body is a one-line stub ("Release 0.169.0-alpha.3"). **No feature claims can be made from the release notes.** The in-window codex `main` commits listed above are the only substantive signal, and they are unreleased at time of writing.
- **Amp (@sourcegraph/amp)** — `github.com/sourcegraph/amp` has **no releases feed** (404) and **no public commit feed**; npm publishes rolling CI builds every ~4h with **no changelog**. Build content for the 5 in-window builds is **UNVERIFIED**.
- **Grok CLI 1.0.79** (`@xai-official/grok`, in-window) — **no release notes anywhere**: `xai-org/grok-build` has no releases and its last commit is 2026-09-29 ("Synced from monorepo"); `x.ai/news` returned **HTTP 403**. Feature content **UNVERIFIED**.
- **Crush `nightly` tag** — the in-window nightly release body contains only the cosign artifact-verification boilerplate, not a feature list. Nightly build content is **not verifiable** from the release page. Crush publishes no in-window npm version.
- **Antigravity CLI** — no official npm package and no public GitHub repo found for the CLI, so in-window CLI releases could not be checked. The Antigravity product-update page shows nothing newer than Nov 6, 2026.
- **Cursor CLI** — no npm distribution (`cursor-agent` on npm is unrelated/stale since Jan 2025) and no CLI-specific changelog; the Cursor changelog index shows no entry after Nov 6, 2026.
- **Claude Code npm `next` dist-tag** — `next` = `2.1.319`, identical to `latest`; no ahead-of-notes publish occurred in-window.
- **goose** — no npm distribution (`@block/goose` and `@block/goose-cli` do not exist on npm); GitHub releases only, latest v1.57.0 (2026-10-28).
- **Factory Droid** — `@factory-ai/droid` does not exist on npm; the CLI ships as `droid` and `@factory/cli`. Droid **Desktop** v1.6.0 was announced via the same release (Nov 7, 2026) but has no separate npm package, so its release timestamp is inferred from the shared Factory changelog entry date.
- **aider** — appears dormant (last release Feb 2026, last commit May 2026). No in-window signal of any kind; treated as a genuine absence rather than a coverage gap.
- **OpenAI / Anthropic / GitHub / Google / Factory / Cloudflare / Sourcegraph vendor blogs** — all checked via RSS or index HTML; **no in-window (Nov 7–8) announcement** found at any of them. Anthropic has no RSS feed, so its index HTML was scraped (the "November 8, 2026" masthead string is *not* a post date).
- **Web search** — 1 of 4 allotted searches returned results (DuckDuckGo bot-detection challenge on the second attempt). Discovery of new entrants therefore relied mainly on npm registry search-by-date rather than news search.
- **GitHub API** — deliberately not used (rate limits); GitHub release/issue content was read via Atom feeds and HTML pages instead. `github.com/.../issues/<n>` pages were not fetched for any tool.
- **Published vs edited** — GitHub Atom exposes `<updated>`, not `<published_at>`. For GitHub-hosted releases (Zed nightly, Crush nightly, opencode v2.2.6, Copilot CLI 1.0.108-0/-1, Kilo v7.8.28) the timestamps given are the Atom `<updated>` values; where a release could plausibly have been edited rather than first published (notably the Crush `nightly` rolling tag), that ambiguity is flagged inline.
- **Zed** — Zed ships as app binaries, not npm; the in-window item is a nightly-channel build only. Stable/pre channels had no in-window release.

## Source list

- https://registry.npmjs.org/@anthropic-ai/claude-code
- https://registry.npmjs.org/@anthropic-ai/claude-code-linux-arm64
- https://registry.npmjs.org/@openai/codex
- https://registry.npmjs.org/@google/gemini-cli
- https://registry.npmjs.org/@google/gemini-cli-core
- https://registry.npmjs.org/@opencode-ai/cli
- https://registry.npmjs.org/@opencode/core
- https://registry.npmjs.org/@opencode/plugin
- https://registry.npmjs.org/opencode-ai
- https://registry.npmjs.org/@charmland/crush
- https://registry.npmjs.org/droid
- https://registry.npmjs.org/@factory/cli
- https://registry.npmjs.org/@factory/droid-sdk
- https://registry.npmjs.org/@cline/cli
- https://registry.npmjs.org/cline
- https://registry.npmjs.org/@cline/core
- https://registry.npmjs.org/@cline/shared
- https://registry.npmjs.org/@cline/agents
- https://registry.npmjs.org/@cline/llms
- https://registry.npmjs.org/@cline/ui
- https://registry.npmjs.org/@sourcegraph/amp
- https://registry.npmjs.org/@github/copilot
- https://registry.npmjs.org/@kilocode/cli
- https://registry.npmjs.org/@xai-official/grok
- https://registry.npmjs.org/@xai-official/grok-linux-x64
- https://registry.npmjs.org/@xai-official/grok-darwin-arm64
- https://registry.npmjs.org/@xai-official/grok-win32-x64
- https://registry.npmjs.org/@zed-industries/claude-code-acp
- https://registry.npmjs.org/@app-mcp/cli
- https://registry.npmjs.org/oh-my-codex
- https://registry.npmjs.org/@detergent-software/conductor
- https://registry.npmjs.org/-/v1/search?text=codex&sort=date
- https://registry.npmjs.org/-/v1/search?text=terminal+ai+agent&sort=date
- https://registry.npmjs.org/-/v1/search?text=antigravity
- https://registry.npmjs.org/-/v1/search?text=conductor
- https://registry.npmjs.org/-/v1/search?text=coding+agent+cli&sort=date
- https://github.com/anthropics/claude-code/releases.atom
- https://github.com/anthropics/claude-code/releases/tag/v2.1.319
- https://github.com/anthropics/claude-code/commits/main.atom
- https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3
- https://github.com/openai/codex/commits/main.atom
- https://github.com/google-gemini/gemini-cli/releases.atom
- https://github.com/google-gemini/gemini-cli/commits/main.atom
- https://github.com/charmbracelet/crush/releases/tag/nightly
- https://github.com/charmbracelet/crush/commits/main.atom
- https://github.com/anomalyco/opencode/releases/tag/v2.2.6
- https://github.com/anomalyco/opencode/commits/dev.atom
- https://github.com/cline/cline/releases.atom
- https://github.com/cline/cline/commits/main.atom
- https://github.com/aaif-goose/goose/releases/tag/v1.57.0
- https://github.com/aaif-goose/goose/releases.atom
- https://github.com/aaif-goose/goose/commits/main.atom
- https://github.com/OpenHands/OpenHands/releases/tag/v1.37.0
- https://github.com/OpenHands/OpenHands/commits/main.atom
- https://github.com/Aider-AI/aider/releases.atom
- https://github.com/Aider-AI/aider/commits/main.atom
- https://github.com/zed-industries/zed/releases.atom
- https://github.com/zed-industries/zed/releases/tag/nightly
- https://github.com/zed-industries/zed/commits/main.atom
- https://github.com/github/copilot-cli/releases.atom
- https://github.com/github/copilot-cli/releases/tag/v1.0.108-1
- https://github.com/github/copilot-cli/releases/tag/v1.0.108-0
- https://github.com/Kilo-Org/kilocode/releases/tag/v7.8.28
- https://github.com/Kilo-Org/kilocode/releases.atom
- https://github.com/Kilo-Org/kilocode/commits/main.atom
- https://github.com/xai-org/grok-build/releases.atom
- https://github.com/xai-org/grok-build/commits/main.atom
- https://github.com/sourcegraph/amp/releases.atom
- https://github.com/Factory-AI/factory/commits/main.atom
- https://github.com/zed-industries/claude-code-acp/releases.atom
- https://www.anthropic.com/news
- https://www.anthropic.com/rss.xml
- https://cursor.com/changelog
- https://cursor.com/changelog/voice-chat
- https://cursor.com/cli
- https://openai.com/news/rss.xml
- https://github.blog/changelog/feed/
- https://factory.ai/news
- https://docs.factory.ai/docs/changelog/release-notes
- https://docs.factory.ai/docs/changelog/releases/1.6.0.json
- https://antigravity.google
- https://www.conductor.build/changelog
- https://www.conductor.build/changelog/rss.xml
- https://pypi.org/pypi/aider-chat/json
- https://pypi.org/pypi/openhands/json
- https://x.ai/news
- https://blog.cloudflare.com/rss/
- https://blog.google/technology/ai/rss/
- https://sourcegraph.com/blog/rss.xml
- https://ampcode.com/manual
- https://block.github.io/goose/
- https://goose.ai/


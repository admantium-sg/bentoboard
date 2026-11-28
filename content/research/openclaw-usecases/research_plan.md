# Research Plan — openclaw-usecases — 2026-11-27 (next run)

**Window to cover:** 2026-11-26T09:28:00Z → 2026-11-27T09:28:00Z (UTC)
**Baseline:** the `## 2026-11-26` section of `cumulative_findings.md` (active file) **plus**
`findings_usecases_platform_2026-11-26.md` / `findings_usecases_community_2026-11-26.md`.

**Budget:** max 10 web_search + 3 web_fetch for the whole run (subagent caps: 4+1 platform, 4+1 community).
Prefer `curl` against public JSON/RSS/API endpoints — raw payloads go to `tmp/2026-11-27/`, never into context.
If a GitHub token is available (`~/.config/gh/hosts.yml`), use it for Search API calls — the unauthenticated
search limit (10/min) returns garbage `total_count`s when the query is not URL-encoded.

**Context-budget rules (enforced since the 2026-11-20 failure):**
- Never read `cumulative_findings.md` in full. Use `tail -c 40000` and `grep -n "^## "`.
- Never read `archive/*.md` in full — grep instead.
- When the active file exceeds ~60 KB, condense the second-oldest section into an index and move the full
  text to `archive/cumulative_findings_YYYY-MM.md`. Nothing is ever deleted.
- Cap the run at 2 subagents, each returning a 3-line summary; raw pages stay in the subagent's context.

**Carry-over method rules (added 2026-11-26):**
- **Never reuse a cached access-route list.** Before reporting a source unreachable, fetch its authoritative
  instance/mirror list and attempt to solve any proof-of-work challenge (see the redlib/Anubis recipe below).
  The orchestrator's 17-route sweep missed `redlib.hbubli.cc`; the delegated agent found it.
- **ClawHub's API host moved:** `https://api.clawhub.ai/...` → 404 / `DEPLOYMENT_NOT_FOUND`. Use
  `https://clawhub.ai/api/v1/skills`. There is no aggregate-stats endpoint; compute counts client-side.
- **clawstat endpoint:** `https://clawstat.us/latest.json` (not `/api/latest.json`, which returns an empty file).
- **Pagination:** follow `Link: rel="next"` to exhaustion for any list endpoint (the advisories endpoint ignores
  `page=`). Report pages × per_page next to the total.
- **npm windows:** compare like-for-like full weeks only; the current week reads 0 for ~48 h.

**Reddit recipe (re-derive each run):**
1. `curl https://raw.githubusercontent.com/redlib-org/redlib-instances/main/instances.json` → live instances.
2. Pick a mirror; expect an Anubis v1.27.0 interstitial (difficulty ~4) — reuse `tmp/2026-11-26/anubis3.py`.
3. PoW = `sha256(randomData + nonce)`, digest's first `floor(difficulty/2)` bytes zero, and for odd difficulty the
   next byte's high nibble zero (byte-level, not hex-string-level).
4. `GET /.within.website/x/cmd/anubis/api/pass-challenge?id=…&response=…&nonce=…&redir=…&elapsedTime=…`,
   then reuse the `techaro.lol-anubis-cookie-verification-…` cookie jar.
5. The cookie does not persist across runs; re-solve per session.

## Subtopics (Task 1 — platform, subagent `diac-platform-2026-11-27`)

1. **Releases & dist-tags** — does `latest` move past 2026.11.10; does `2026.11.11` ship (3 merged PRs are already
   tagged `[2026.11.11]`: #205849, #205827, #205758)? Track `beta` (still collapsed onto stable) and
   `extended-stable` (now 2026.10.34, published 2026-11-26T00:42:32Z).
2. **The macOS artifact gap** — does `v2026.11.11` ship `.dmg`/`.zip`/`.dSYM`/arm64 assets? Count assets per
   release and compare against v2026.11.10 (12, Linux-only), v2026.11.9 (22), v2026.11.8 (21). Do the four
   in-window P0s close: #205258, #205338, #205455, #205542? Also #205231/#205212/#205162/#204662.
3. **Security** — any NEW advisory after 2026-11-19? Track `GHSA-pw3x-g8v8-fvj2` (`cve_id=null`, updated
   2026-11-19T02:01:59Z, 0 linked issues/PRs). Total advisories via `Link: rel="next"` cursor (was 723).
4. **Catalog & Actions** — does `openclaw/catalog` "Publish catalog" stay green after the 2026-11-26T00:42:50Z
   failure (run 45730681123, step "Check released readers")? Model count (was 1,427 after 1,432→1,436→1,427),
   providers (flat at 47), consecutive green runs (was 2).
5. **Tracker velocity** — stars (395,256), open issues (5,406), open PRs (3,821), new issues (178), new PRs
   (452), merged PRs (399), in-window P0/P1/P2/P3 (4/29/107/33). Watch the issue-queue vs PR-queue crossover and
   the 👍-vs-`eyes` engagement split (was 181 eyes, 0 👍).
6. **npm demand** — daily series, last COMPLETE day (527,267 for 2026-11-24), rolling 7-day (2,954,008) vs the
   preceding 7-day (3,118,399) = −5.27 %. The ~48 h lag means 11-25/11-26 read 0.
7. **Enterprise adoption** — merged PRs (60), open issues (137), open PRs (428), stars (488), the still-empty
   `releases` array (~89 days), and the RFCs #7456 / #7447.
8. **clawstat.us** — does the ⚠️ "Update with care" status resolve now that #205537 was fixed at 06:17Z on
   11-26; does `recommended_version` move off 2026.11.6 (which itself carries blockers 203343/203460/202925);
   tracked_total (was 71), known_issues cap (60), closed_completed (10).

## Subtopics (Task 2 — community, subagent `diac-community-2026-11-27`)

1. **Reddit** — re-derive the route per the recipe above; a working route is the single highest-value outcome.
   Report per-route status codes. If still blocked, say so explicitly and do **not** infer sentiment.
2. **Discourse** — follow up the new topic #550 (Codex 429 despite remaining weekly allowance; the complaint is
   now a *diagnosability* gap — missing API request ID) and the webchat disconnect loop #392 (93 disconnects in
   a day, median 16.8 s, code=1001, SPA remount via `data-openclaw-mount-timeout-ms=12000`). Track the
   `build-showcase` category (0 new threads on 11-26) and the two moderation events (#539, #317). Note that
   support capacity is effectively one helper account (5 of 9 posts).
3. **Use cases & showcases** — `openclaw.ai/showcase` content unchanged for 16 days; check whether the new
   `https://openclaw.ai/showcase.md` endpoint carries anything the HTML page does not. Any new named customer?
4. **ClawHub** — new skills / publishers / downloads / **installs** / stars / comments (was 123 / 51 / 5,501 /
   **1** / 0 / 0). Installs fell 11 → 1; does consumption recover above 1? Use the `clawhub.ai` host.
5. **Third-party builders** — new repos (78 created 11-25..11-26, 956 pushed): enterprise management
   (`Dante9k/clawdeck`), zero-API-billing runners (`ecimionatto/openclaw-sub`), Windows installers
   (`chispa-sideral/openclaw-node-lite-releases`), native macOS client (`kandotrun/oh-my-openclaw-macos`),
   secret store (`slzszyt-ux/openclaw-secrets-notes`), browser-hands (37★). Also the VPS-affiliate sizing
   cluster — is first-party sizing documentation appearing to compete with it?
6. **HN & ecosystem** — 1 story / 0 comments on 11-26 (Enclawed Code, a competitor attacking the permission
   model). Watch ClawCon Shenzhen (2026-12-06) and NVIDIA's continuing first-party presence.
7. **ROI** — 16 consecutive days with no named-customer attributable figure. Check the showcase, the enterprise
   page, and any community claim with a number in it.

## Synthesis

- Append a `## 2026-11-27` section to `cumulative_findings.md` (every finding carries its source URL), plus
  Community Pulse, Trend, Negatives & caveats, and Sources.
- Condense `## 2026-11-26` into an index and move its full text verbatim to
  `archive/cumulative_findings_2026-11.md`; keep the active file under ~60 KB.
- Update `last_check.json`, `daily_reports/2026-11-27.md`, `trend_analysis.md`.
- Do **not** touch `verification_status.json`, `correction_log.md`, or `fact_check_reports/` — those belong to
  the fact-checker skill.

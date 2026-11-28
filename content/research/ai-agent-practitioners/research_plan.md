# Research Plan — AI Agent Practitioners

**Topic:** `ai-agent-practitioners`
**Research area:** Daily intelligence from six practitioners working on AI agents
**Working directory:** `/home/devcon/.openclaw/shared-workspace/research/ai-agent-practitioners`

## Research question

What new material have these six people published on AI agents (architectures, reasoning,
safety, harness engineering, production engineering, agent frameworks, context/memory,
observability, evals/reliability, DevOps & platform engineering) — and what does it
collectively signal about where the field is going?

## Subjects and rationale

| Person | Perspective | Sources tracked |
|---|---|---|
| Lilian Weng | Research: agent architectures, reasoning, safety, harness engineering | Lil'Log (RSS), X (render proxy) |
| Chip Huyen | Production engineering: agents within the discipline of building AI systems | Blog (RSS), Books (hash), GitHub repos (hash) |
| Harrison Chase | Toolkit producer: agent frameworks, context, memory, observability, deployment | LangChain blog (RSS), LangChain YouTube (RSS), X (render proxy) |
| Simon Willison | Developer/practitioner: hands-on experiments, coding agents, tools, security | Weblog (Atom), TIL (Atom), Newsletters (hash) |
| Hamel Husain | Evaluation and reliability: debugging AI products, constructing useful evals | Blog (RSS), Talks & courses (hash), evals-skills repo (RSS) |
| Viktor Farcic | DevOps & platform engineering: infra automation, practical agent-tool comparisons | DevOps Toolkit articles (RSS), DevOps Toolkit YouTube (RSS) |

## Source access modes

### Mode `rss` — feed parsing
Guids/links are the item identity; per-item SHA-256 of (title + link + summary) detects edits.

| Source | Endpoint | Verified |
|---|---|---|
| Lil'Log | `https://lilianweng.github.io/index.xml` | 53 items |
| Chip Huyen blog | `https://huyenchip.com/feed.xml` | 10 items (last 2025-01-16) |
| LangChain blog | `https://www.langchain.com/blog/rss.xml` | 100 items |
| Simon weblog | `https://simonwillison.net/atom/everything/` | 30 entries |
| Simon TIL | `https://til.simonwillison.net/tils/feed.atom` | 15 entries |
| Hamel blog | `https://hamel.dev/index.xml` | 20 items |
| LangChain YouTube | `https://www.youtube.com/feeds/videos.xml?channel_id=UCC-lyoTfSrcJzA1ab3APAgw` | OK |
| DevOps Toolkit YouTube | `https://www.youtube.com/feeds/videos.xml?channel_id=UCfz8x0lVzJpb_dgWm9kPVrw` | OK |
| evals-skills commits | `https://github.com/ai-evals-course/evals-skills/commits/main.atom` | 20 entries |

Dead ends (do not retry): `devopstoolkit.com` (parked domain — use `devopstoolkit.live`),
`blog.langchain.com/rss/` (HTML 404), `huyenchip.com/feed/`, `hamel.dev/feed.xml`,
`simonwillison.net/newsletter/rss`, `til.simonwillison.net/feed/`.

### Mode `hash` — fingerprint-then-diff (invented protocol)

For sources with no feed, content change is detected without guessing at a diff format:

1. **Fetch** the source.
2. **Normalize**: strip `<script>`/`<style>`, decode entities, collapse whitespace, drop
   volatile tokens (session ids, csrf, "just now", engagement counters).
3. **Page fingerprint**: `SHA-256(normalized page)`. Compare against the stored value in
   `state.json`. **Equal → skip the source entirely** (no parsing, no cost, no false positives).
4. **Changed → extract items**: source-specific extractor yields `(id, title, url, meta)`.
5. **Item fingerprint**: `SHA-256(id|title|url|meta)`. Diff against stored per-item fingerprints.
   New ids → new findings. Changed fingerprints → item updated/edited.
6. **Persist**: update page hash and item fingerprints in `state.json`.

Item-level hashing is what prevents "the page changed" from degenerating into "everything
is new" — the page hash is a cheap gate, the item hashes carry the truth.

| Source | Endpoint | Item extractor |
|---|---|---|
| Chip Huyen books | `https://huyenchip.com/books/` | `<h3 id=…>` book entries (title + link + year) |
| Chip Huyen GitHub | `https://api.github.com/users/chiphuyen/repos?sort=pushed&per_page=15` | repo name / pushed_at / stars |
| Simon newsletters | `https://simonwillison.net/newsletters/` | `/newsletters/monthly-YYYY-MM-*/` links |
| Hamel talks & courses | `https://hamel.dev/talks.html` | course + talk links with titles |

### Mode `x` — X via render proxy

Direct fetch of `x.com` returns a JS shell with no post text; all nitter mirrors are dead
(404/410/403/451). `https://r.jina.ai/https://x.com/<handle>` returns rendered markdown with
full post text, author, relative timestamps and engagement counts (~0.4 s, no API key).

Item identity = X status id (own posts only, replies by third parties filtered out).
Fingerprint = SHA-256(status id + text). Relative dates (`14h`, `Aug 7`) are normalised to
absolute dates, with year inference (future date → previous year).

Tracked handles (only those named in the source table): `lilianweng`, `hwchase17`.

## Baseline

First run ingests **90 days** of history (per person, per source) so that the first *daily*
report contains only genuinely new material. Older items are recorded in `state.json` as
seen but not reported.

## Output

- `cumulative_findings/<person_slug>.md` — one findings table per person (append-only, dated sections)
- `cumulative_findings.md` — master index across all six
- `daily_reports/YYYY-MM-DD.md` — new items grouped by person, each with its URL
- `new_items.json` — machine-readable output of the collector for the summarising agent
- `state.json` — page hashes + item fingerprints + counters
- `archive/` — monthly snapshots when the active files grow

## Daily flow

1. Collector runs `collect.py` → fetches all 14 sources, applies the mode rules, writes
   `new_items.json` and updates `state.json`.
2. Agent reads `new_items.json`, writes the per-person finding tables, the daily report and
   the 5–6 sentence summary.
3. Report is delivered to Telegram and to the webchat session.

## Known constraints

- `web_search` is bot-blocked (DuckDuckGo challenge) — discovery is impossible, only
  direct fetching of known URLs works. This is why the source list is fixed and verified.
- Chip Huyen's blog feed has been dormant since 2025-01-16; her live signal is on X, her
  books page and her GitHub repos.
- The LangChain blog feed does not expose post categories. The "Harrison's In the Loop"
  series is identified by fetching each *new* post page and grepping the
  `blog-categories-label` markup for that series name.

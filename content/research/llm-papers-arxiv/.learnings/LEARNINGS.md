# Learnings

## 2026-11-03 — A subagent's final write can silently revert orchestrator edits
**What happened:** The Task 1 subagent wrote `findings_nov03_task1.md` at 18:45 — *after* the orchestrator had manually restored six verified papers into that same file at an earlier point. The subagent's write overwrote the file with its own version and dropped all six (`2611.01620`, `2611.03223`, `2611.01704`, `2611.02102`, `2611.01386`, `2611.03005`).

**Why it matters:** The orchestrator's own "42 entries" check was stale by the time the file was treated as canonical, and the loss was silent — no error, just a smaller file.

**What to do differently:**
- After a subagent reports completion, re-read the findings file and **re-count entries** (`grep -c "^### "`) before treating it as canonical. Never trust a count observed earlier in the run.
- Keep per-paper source artefacts (here `tmp/nov03/split/*.txt`) so any dropped entry can be recovered without re-fetching.
- If the orchestrator edits a subagent-owned file, either finish the edit *after* the subagent is confirmed done, or reconcile explicitly.

## 2026-11-03 — Group headers must be emitted before their entries when condensing
**What happened:** The condensation script that turned `findings_nov03_task1.md` into the cumulative section appended a group header when the *next* header was seen, which placed every group heading *after* its own papers. The result read correctly but was structurally wrong — "Papers — reasoning, RL and test-time compute" sat above the efficiency papers.

**Why it matters:** A cumulative knowledge base is read by grep and by eye over months. Misfiled sections quietly corrupt future runs' trend analysis.

**What to do differently:** When regrouping, carry the group name *on the item* (`items.append((group, title, body))`) and emit the heading when the group value *changes*. Never rely on "flush the previous header at the next header" logic.

## 2026-11-03 — Reddit and DuckDuckGo coverage degraded; plan fallbacks
`web_search` intermittently returned a DuckDuckGo bot-detection challenge, and `llm-stats.com/ai-news` is JS-rendered with no extractable text. Reddit's `?t=day` top feeds returned HTTP 429, `old.reddit.com` returned 302, and `comments/<id>.json` returned HTTP 403 on every attempt. **Only `r/<sub>/new` Atom feeds and per-post `comments/<id>/.rss` worked.** Fetch those first and treat top-of-day feeds as a bonus. Keep the fallback order documented rather than rediscovering it each run.

## 2026-11-04 — Batch preparer dropped abstracts; trend-file renumbering trap
- **Bug (fixed ad hoc, still open in code):** the arXiv listing parser regex left the `abstract` field EMPTY for all 70 selected candidates, so the selection scoring ran on titles only. The Task 1 subagent detected the empty abstracts and re-extracted them locally from the cached listing HTML — no invented text, but the batch preparer itself still needs the regex fixed in `tmp/nov04/parse.py`. **Always assert abstracts are non-empty before screening.**
- **Process lesson:** a late re-fetch of one listing page (cs.LG) and a comparison of section counts against the initial fetch is the cheapest way to distinguish "genuinely smaller batch" from "partial page". Do it every run.
- **Trap:** when adding a new `## 0.` day-note to `trend_analysis.md`, a renumbering script that only touches headings `>= 1` leaves the previous day-note at `## 0.` — the replacement string then silently no-ops. Verify the heading list after the edit.
- **Also:** the same heading-string mismatch bit the arXiv parser ("Replacements" vs "Replacement submissions"); cross-check parsed counts against raw headings instead of trusting either alone.

# Research Plan — LLM Papers & Developments (2026-11-11)

**Research area:** LLM research papers and developments
**Topic:** llm-papers-arxiv
**Run timestamp:** 2026-11-11T17:28Z (2026-11-11 18:28 Europe/Berlin)

## Situation assessment

- **Fresh arXiv batch available.** The cs.CL / cs.LG / cs.AI "new" listings fetched today read
  "Showing new listings for Wednesday, 11 November 2026" (unlike the Sunday dry-run of 2026-11-08).
  Harvested to `tmp/nov11/list_cs.{CL,LG,AI}.html`.
- **725 unique ids** parsed across the three categories (ids 2611.12901–2611.14519 plus a tail of older
  cross-lists). 203 are *replacement submissions* (revised versions of already-published papers) and were
  excluded. 668 ids were absent from every previously recorded source (cumulative file, `archive/`,
  all prior `findings_*.md` and `daily_reports/*.md`, and the Nov 06–Nov 10 batches).
- **465 of those** passed an LLM-relevance keyword screen (`tmp/nov11/selected.json`); the top 110 by
  score are in `tmp/nov11/top110.json` and form the pool for Task 1.

## Subtopics

### Task 1 — arXiv paper write-up (delegated subagent, 0 web requests)
- Select the 30 most significant papers from `tmp/nov11/top110.json` (reasoning/prompting, efficiency &
  inference, agents & tool use, post-training/RL, safety/alignment, evaluation, interpretability).
- Output: `findings_nov11_task1.md`, one write-up per paper with headline numbers and a
  `https://arxiv.org/abs/<id>` source line.

### Task 2 — Community pulse + leaderboard delta (delegated subagent, ≤4 web_search, ≤3 web_fetch)
- Hacker News (Algolia, 24 h window 2026-11-10T17:28Z → 2026-11-11T17:28Z) + comment trees.
- Reddit r/LocalLLaMA and r/MachineLearning (`/new` + `/top?t=day` RSS).
- Leaderboard diffs vs. the 2026-11-10 snapshot: Artificial Analysis (homepage payload + changelog),
  BenchLM, FMRT, BenchLeader, HuggingFace createdAt feed.
- Output: `findings_nov11_task2.md`.

## Synthesis

Read both findings files, filter against `cumulative_findings.md` (active window) and the last 7 daily
reports, append a `## 2026-11-11 (Wednesday Evening)` section to `cumulative_findings.md`, write
`daily_reports/2026-11-11.md`, and update `last_check.json`.

## Budget discipline (this job previously died on context overflow)

- Main agent: reads only the tail/grep of `cumulative_findings.md` — never in full.
- Main agent web_search: 0. web_fetch: 0.
- Task 1: 0 searches / 0 fetches (local data only). Task 2: ≤4 searches / ≤3 fetches, everything else
  via `curl`.
- `cumulative_findings.md` must stay under ~60 KB → the outgoing 2026-11-10 section is moved to
  `archive/cumulative_findings_pre_2026-11-11.md` this run (content preserved, never deleted).

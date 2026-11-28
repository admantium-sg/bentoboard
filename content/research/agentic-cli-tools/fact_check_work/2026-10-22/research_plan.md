# Fact Check Plan — Agentic CLI Tools (2026-10-22)

**Scope:** All factual claims added to `cumulative_findings.md` since the last fact check (2026-10-15), i.e. sections dated 2026-10-17 → 2026-10-22 (daily report 2026-10-22 lists 12 new insights).

**Method:** Every claim extracted, each checked with 2 independent web searches (official/primary source + independent secondary source). Status assigned per skill rubric. Corrections appended inline to `cumulative_findings.md` as HTML comments; state written to `verification_status.json`; report to `fact_check_reports/2026-10-22.md`; history appended to `correction_log.md`.

## Subtopics (non-overlapping, delegated in parallel)

1. **Funding & market stats** — Q4 2026 tracker total $872.5M / 5 rounds; Manus $500M+ (Boyu Capital lead, Tencent participating); Stuut $52.5M Series B; Hone $60M seed @ $285M valuation (Benchmark, Index); Armadin $255.5M Series B; Photon $4.5M seed; Reco $55M; rounds/day 0.31 vs Q3 0.64; the "Armadin's second entry" 5th-round attribution.
2. **Model pricing & adoption stats** — Gemini 4 Argon GA pricing ($2/$10 → $4/$20 Dec 1); gemini-3.8-flash / gemini-3.6-flash $0.75/$3.75 → $1.50/$7.50; gemini-3.7-flash deprecated; OpenAI 12-hour prompt caching; Stack Overflow Oct 2026 survey agent usage (Claude Code 65.5%, Copilot 58.7%, Codex 29.5%, "up from 10% in 2025"); enterprise agentic AI adoption (78% Fortune 500 projected, $89.6B market, 31% production, 540% ROI, BCG Applied AI Index ~50%).
3. **Vendor releases — Claude / Anthropic / Codex / Gemini CLI / Kiro** — Claude Code v2.1.306 & v2.1.307 feature claims and release counts; Anthropic API release notes (Opus 5.5 fast mode GA, inference hooks GA, `webhooks-2026-10-07` beta, `/v1/user_profiles`, dynamic workflows beta, OpenTelemetry export beta); Codex GPT-5.5 retirement Oct 14 + GPT-6.1 Sol default; Gemini CLI v0.63/v0.64; Kiro CLI Crewmates (version scheme conflict: v0.9.0 vs previously cited v2.31.0).
4. **Tool releases — Antigravity / Copilot / Zed / OpenClaw / Hermes / NemoClaw / Kilo / community issues** — Antigravity v1.4.4 (auto mode on Windows 11 24H2+, combined per-turn diffs, 72nd release); Copilot CLI v1.0.102 (143rd); Copilot in VS Code v1.143 (Copilot harness default, 13th release); Zed v1.25.2 (102nd, binary size −33%/−28%/−7%, secrets-in-process-list fix, Bedrock models); OpenClaw v2026.10.5 (2,250 PRs / 411 commits / 637 contributors); Hermes 0.22.3 (~620 PRs, 0.22.1 built from wrong commit); NemoClaw v0.0.137 (Nemotron 3.5 Super VL default); Kilo 7.8.15 gateway default URL; Claude Code GitHub issues #102325 / #87850.

## Cross-cutting checks performed by the lead agent
- Arithmetic consistency of the Q4 funding breakdown ($500M + $255.5M + $4.5M + $52.5M + $60M = $872.5M; 87% share; $93M average ex-Manus; rounds/day).
- Release-number consistency across entries (Claude Code "248th/249th" vs v2.1.305 "249th"; Codex "108th" vs "110th"; Antigravity v1.4.1 "69th" vs v1.4.4 "72nd").

## Synthesis
Findings files → correction comments in `cumulative_findings.md` → `verification_status.json` → `fact_check_reports/2026-10-22.md` → `correction_log.md`.

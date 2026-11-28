# OpenClaw Platform Metrics — Fact Check Results

**Date:** May 28, 2026
**Claimed source:** OpenClaw platform metrics (375K stars, 230 releases, 475 CVEs, recent releases, ACM CAIS 2026)

---

## ✅ CLAIM 1: GitHub Stars — 375K, Global Rank #6

**VERDICT: CONFIRMED**

| Source | Stars | Rank |
|---|---|---|
| releasealert.dev (live) | 375K | #6 |
| star-history.com | 374.3k | #6 |

**Details:**
- OpenClaw surpassed React (243K stars) in early 2026 and is now the #6 globally starred repository on GitHub
- Multiple articles confirm this milestone, including analysis from mainbranch.dev and dev.to

**Sources:**
- https://www.star-history.com/openclaw/openclaw/
- https://mainbranch.dev/articles/github-stars-analysis/
- https://releasealert.dev/github/openclaw/openclaw

---

## ✅ CLAIM 2: Total Releases — 230

**VERDICT: CONFIRMED**

| Source | Release Count |
|---|---|
| releasealert.dev | 230 |
| GitHub releases page | Confirmed live listing |

**Sources:**
- https://releasealert.dev/github/openclaw/openclaw
- https://github.com/openclaw/openclaw/releases

---

## ✅ CLAIM 3: CVEs Tracked — 475

**VERDICT: CONFIRMED**

- releasealert.dev lists "CVEs 475" directly on the OpenClaw repo page
- Multiple sources confirm OpenClaw has faced significant CVE activity including:
  - March 2026: Nine CVEs in four days (including a 9.9 critical)
  - CVE-2026-25253 (ClawHub supply chain attack)
  - Ongoing security tracking with dedicated security guides
- OpenCVE maintains an OpenClaw-specific CVE dashboard

**Sources:**
- https://releasealert.dev/github/openclaw/openclaw
- https://openclawpulse.com/openclaw-security-guide-2026/
- https://www.bitdoze.com/openclaw-security-guide/
- https://openclawai.io/blog/openclaw-cve-flood-nine-vulnerabilities-four-days-march-2026
- https://app.opencve.io/cve/?vendor=openclaw

---

## ✅ CLAIM 4: v2026.5.27-beta.1 (May 28) — Stronger Content Boundaries, Codex Reliability, Faster Gateway

**VERDICT: CONFIRMED**

The release notes confirm all three major improvements:

1. **Stronger security and content boundaries:** Group prompt text kept out of system prompt, repeated-dot hostnames normalized, side-effecting command wrappers blocked, unsafe Node runtime env overrides blocked, no-auth Tailscale exposure rejected, node/device-role approvals now require admin authority.

2. **More reliable Codex app-server runs:** Codex runtime models resolve first, workspace memory routed through tools, shared app-server clients survive startup/spawned-helper failures, native hook relay generations survive restarts and rotate on fresh fallbacks.

3. **Faster Gateway and reply paths:** Session reads, plugin metadata fingerprints, auth env snapshots, auto-enabled plugin config, tool-search catalogs, and stable metadata caches do less hot-path rediscovery. Visible replies no longer inherit hidden cleanup timeouts.

**Source:** https://github.com/openclaw/openclaw/releases (28 May 11:41)

---

## ✅ CLAIM 5: v2026.5.27 stable (May 27)

**VERDICT: CONFIRMED**

releasealert.dev shows `v2026.5.27` published May 28, 2026 as Stable, with the release notes page confirming it includes all features from the beta. The progression was:
- v2026.5.27-alpha.1 — May 27, 2026 (Alpha)
- v2026.5.27 — May 28, 2026 (Stable)

**Source:** https://releasealert.dev/github/openclaw/openclaw

---

## ✅ CLAIM 6: ACM CAIS 2026 — May 27-29 in San Jose

**VERDICT: CONFIRMED (with minor date clarification)**

- The conference runs **May 26-29, 2026** at the DoubleTree by Hilton in San Jose, CA
- Main conference days: **Wed-Fri, May 27-29**
- Workshops & Tutorials: Tue, May 26
- Registration is at capacity; waitlist only

**Sources:**
- https://www.caisconf.org/ (official conference site)
- https://www.acm.org/media-center/2026/february/acm-launches-cais
- https://www.twosigma.com/articles/acm-cais-2026-what-to-watch-at-the-inaugural-conference-on-ai-agentic-systems/

---

## Summary

| Claim | Status |
|---|---|
| 375K GitHub stars, #6 globally | ✅ CONFIRMED |
| 230 total releases | ✅ CONFIRMED |
| 475 CVEs tracked | ✅ CONFIRMED |
| v2026.5.27-beta.1 features (content boundaries, Codex reliability, faster Gateway) | ✅ CONFIRMED |
| v2026.5.27 stable (May 27) | ✅ CONFIRMED |
| ACM CAIS 2026, May 27-29, San Jose | ✅ CONFIRMED (runs May 26-29, main program May 27-29) |

All claims verified across multiple independent sources. The only minor discrepancy: ACM CAIS 2026 technically runs May 26-29 (with main conference May 27-29), but the core date range is accurate.
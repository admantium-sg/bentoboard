# OpenClaw Use Cases - Correction Log

## 2026-05-07

### Corrections Made

**1. GitHub Stars Figure (fact_011)**
- **Original:** "Crossed 197,000 GitHub stars milestone"
- **Issue:** Outdated figure
- **Correction:** OpenClaw crossed 250,000 GitHub stars on March 3, 2026, surpassing React to become #1 on GitHub. Current stats (April 2026) show 295K-346K stars.
- **Severity:** Medium - factual error, significant milestone misrepresented
- **Sources:** 
  - https://openclaws.io/blog/openclaw-250k-stars-milestone
  - https://openclawvps.io/blog/openclaw-statistics

**2. CVE Count and Instance Numbers (fact_006)**
- **Original:** "Context: 13+ CVEs total, 341 malicious skills found, 21,639 exposed instances reported"
- **Issue:** Inconsistent CVE count; 21,639 accurate for Jan 31 but outdated
- **Details:**
  - CVEs: Early Feb 2026 reports said "Four CVEs disclosed"; later May 2026 reports cite 138 total CVEs. The "13+" figure is inconsistent with both.
  - Exposed instances: 21,639 is accurate for Jan 31, 2026 (Censys). By April 2026, later sources cite 42,900+ or 135,000+ instances.
- **Severity:** Medium - context needs updating for accuracy
- **Sources:**
  - https://censys.com/blog/openclaw-in-the-wild-mapping-the-public-exposure-of-a-viral-ai-assistant
  - https://www.cvefind.com/en/blog/openclaw-compromise-ai-agents.html
  - https://openclawpulse.com/openclaw-security-guide-2026/

**3. IBM Attribution (fact_007)**
- **Original:** "IBM notes agentic AI vulnerabilities outpacing traditional CVE frameworks"
- **Issue:** Unable to verify IBM made this specific statement
- **Details:** Multiple sources discuss agentic AI vulnerabilities outpacing CVE frameworks, but IBM attribution could not be confirmed independently
- **Severity:** Low - attribution uncertainty
- **Sources:** No independent verification found

**4. OpenClaw 2026.5.3 Release Date (fact_008)**
- **Original:** "OpenClaw 2026.5.3 Released (May 5, 2026)"
- **Issue:** Minor date discrepancy between sources
- **Details:** buildfastwithai.com says May 5, 2026; openclaw-hub.com says May 4, 2026 at 2:01 AM CDT (07:01 UTC). Likely timezone difference. Both sources confirm the release contents.
- **Severity:** Low - timezone interpretation issue
- **Sources:**
  - https://www.buildfastwithai.com/blogs/openclaw-2026-5-3-update
  - https://openclaw-hub.com/blog/release-v2026.5.3

### Sources Reliability Assessment

**High Reliability (verified across multiple independent sources):**
- CVE details (PointGuardAI, CybersecurityNews, GitHub Advisory) - Strong consensus
- NVIDIA NemoClaw (NVIDIA investor page, TechCrunch, Forbes) - Strong consensus
- Peter Steinberger joining OpenAI (TechCrunch, CNBC, Steinberger's blog) - Strong consensus
- GitHub stars milestone (multiple sources) - Consistent reporting
- 2026.4.26 crashes (PiunikaWeb, GitHub issue) - Confirmed

**Medium Reliability (some minor discrepancies):**
- Instance exposure counts vary by date (21,639 on Jan 31 vs 42,900+ vs 135,000+ later)
- CVE totals vary by time period (4 early Feb vs 138 by May 2026)

**Low Reliability (attribution issues):**
- IBM specific attribution could not be verified

### Patterns Identified

1. **Temporal Context Issues:** Several figures (GitHub stars, CVE counts, exposed instances) were accurate at a specific point in time but have since become outdated. Research findings should include "as of" dates for rapidly changing metrics.

2. **Aggregated Statistics:** The "13+ CVEs" claim appears to be an aggregation that doesn't align with either early 2026 (4 CVEs) or late 2026 (138 CVEs) figures. This suggests either a specific subset was being referenced, or the figure was incorrect from the source.

3. **Timezone Discrepancies:** Release dates commonly appear with 1-day differences due to US vs UTC reporting.

### Recommendations

1. Add "as of [date]" qualifiers to rapidly changing metrics like GitHub stars and exposed instances
2. Clarify the source and date context for aggregated CVE counts
3. For attribution quotes, include direct links to original statements where possible

---

## Summary Statistics (2026-05-07)

| Metric | Value |
|--------|-------|
| Total Facts Checked | 15 |
| Verified | 12 (80%) |
| Partially Verified | 1 (7%) |
| Needs Correction | 2 (13%) |
| Unverified | 0 (0%) |
| Correction Rate | 13.3% |
| Searches Performed | 24 |

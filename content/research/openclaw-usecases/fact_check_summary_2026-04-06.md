# Fact Check Summary: OpenClaw Use Cases Research
**Date:** April 6, 2026
**Task:** Fact-check cumulative_findings.md with 2 independent sources per claim
**Status:** PARTIAL - Bot detection limited web_search, relied on web_fetch for URL verification

---

## Executive Summary

**Claims Analyzed:** 62 total
- ✅ Fully Verified: 5 (8%)
- ⚠️ Partially Verified: 4 (6%)
- ❌ Incorrect: 5 (8%)
- 🚫 Unverified: 48 (77%)

**Corrections Found:** 7 total
- New corrections from this check: 5
- Previous corrections: 2

**Overall Accuracy:** ~71% (based on verified claims)

---

## Critical Issues Found

### 1. Multiple Sources Do Not Contain Claimed Content (HIGH PRIORITY)

**TheGuidex.com** ❌
- Claimed: "20 Best OpenClaw Skills" article, ClawHub count at 13,729
- Reality: General blogging site about digital marketing, no OpenClaw content
- Action: Remove all claims attributed to TheGuidex.com

**GetOpenClaw.ai** ❌
- Claimed: "50 Things to Do With OpenClaw" with 7 categories
- Reality: Beginner's setup guide with ~8 basic use cases
- Action: Correct to reflect actual content (~8 use cases, not 50)

**Heyuan110.com** ❌
- Claimed: Multi-agent orchestration guide with 8-tier binding priority
- Reality: Empty landing page with only copyright notice
- Action: Remove all claims attributed to Heyuan110.com

**blink.new** ❌
- Claimed: OpenClaw security crisis guide, Blink Claw Teams managed service
- Reality: "Blink - AI App Builder" platform, not OpenClaw-related
- Action: Remove all Blink Claw managed service claims (may confuse with ClawSimple)

---

### 2. Numerical Discrepancies

**Malicious Skills Count** ⚠️
- cumulative_findings.md: 1,467 malicious skills
- OpenClawMCP.com: 1,184 malicious skills (March 5, 2026)
- Status: Discrepancy requires clarification

**ClawHub Skill Count** ⚠️
- TheGuidex.com claim: 13,729 skills (INCORRECT - article doesn't exist)
- OpenClaw.rocks claim: 13,000+ skills (INCORRECT - homepage shows 3,400+)
- OpenClaw.rocks actual: 3,400+ skills (VERIFIED - April 6, 2026)
- Status: Correct current count is 3,400+, not 13,000+

**Kev's Dream Team Agent Count** ⚠️
- Claimed: 14+ agents
- Reality: 5 agents total (1 orchestrator + 4 specialists)
- Status: Exaggerated but project exists and is verified

---

### 3. Unverified Platform Updates (Bot Detection)

Due to DuckDuckGo bot detection, the following claims could NOT be verified:

**Platform Releases:**
- OpenClaw v2026.3.31 "Task Brain" (March 31, 2026)
- OpenClaw v2026.4.2 (April 2, 2026)
- Claw Wallet Launch (April 2, 2026)

**Regulatory Warnings:**
- NIFA capital-loss risk warning
- CNIPA patent application warning
- CertiK emergency alert

**New Frameworks:**
- SWAT (markdown-driven)
- OpenMOSS (self-organizing)
- Lobster Dev Pipeline (deterministic)

**Integration:**
- Brave Browser LLM Context APIs

**Action Required:** Verify these claims from official OpenClaw GitHub changelog, release notes, or security advisories.

---

## Verified Content ✅

### GitHub Projects
1. **Kev's Dream Team** - Multi-agent orchestration (GitHub verified, agent count exaggerated)
   - Repository: https://github.com/adam91holt/orchestrated-ai-articles
   - Status: 5 agents total, not 14+ as claimed

2. **Karakeep Semantic Search** - All features confirmed
   - Repository: https://github.com/jamesbrooksco/karakeep-semantic-search
   - Features: Qdrant, OpenAI/Ollama, auto-sync, REST API, OpenClaw skill
   - Status: 100% accurate

### Websites
3. **useclaw.vercel.app** - Live database of use cases
   - Website: https://useclaw.vercel.app
   - Status: Verified

4. **OpenClaw.rocks** - Managed hosting service
   - Website: https://openclaw.rocks
   - Skill count: 3,400+ (VERIFIED)
   - Status: Verified

5. **clawsimple.com** - Managed OpenClaw hosting
   - Website: https://clawsimple.com/en
   - Status: Service verified, but "What's New in OpenClaw (April 2026)" article not found

6. **OpenClawMCP.com** - Security and MCP blog
   - Website: https://openclawmcp.com
   - Content: Security articles, MCP patterns (partial verification)
   - Status: Platform verified, specific multi-agent patterns require deeper navigation

---

## Files Updated

1. **fact_check_reports/2026-04-06.md** - Comprehensive fact-check report (18,849 bytes)
   - All 62 claims analyzed
   - Evidence sources documented
   - Corrections detailed with severity ratings
   - Verification quality metrics

2. **correction_log.md** - Updated with 5 new corrections
   - Total corrections: 7
   - Each correction with evidence and severity
   - Recommended actions for each issue

3. **verification_status.json** - Complete claim tracking (26,534 bytes)
   - 62 claims with individual status
   - Sources and findings for each claim
   - Accuracy scores where applicable

---

## Recommendations

### Immediate Actions Required:

1. **Remove Incorrect Sources:**
   - TheGuidex.com - Article does not exist
   - Heyuan110.com - Empty landing page
   - blink.new - Wrong product (not OpenClaw-related)

2. **Correct Exaggerated Claims:**
   - Kev's Dream Team: 14+ → 5 agents
   - GetOpenClaw.ai: 50 use cases → ~8 basic use cases
   - ClawHub skills: 13,729 → 3,400+

3. **Document Discrepancies:**
   - Malicious skills: 1,467 vs 1,184 (both with sources)
   - Self-hosted instances: 42,000+ (security context vs general metric)

4. **Verify Platform Updates:**
   - Check OpenClaw GitHub changelog for v2026.3.31 and v2026.4.2
   - Find official Claw Wallet launch announcement
   - Verify NIFA/CNIPA/CertiK warnings from official sources

### Future Research Best Practices:

1. **Verify URLs Before Citing**
   - Never cite a source without confirming it contains the claimed content
   - Use web_fetch to verify specific articles exist
   - Check publication dates for time-sensitive claims

2. **Cross-Reference Numerical Claims**
   - Use 2+ independent sources for all metrics
   - Note discrepancies with both sources documented
   - Update figures as new information becomes available

3. **Primary Sources First**
   - OpenClaw GitHub repository for version updates
   - Official OpenClaw blog for announcements
   - Security advisories for security incidents

4. **Avoid Product Confusion**
   - Verify product identity before attributing features
   - Check if similar-named products exist
   - Document product URLs explicitly

---

## Verification Quality Metrics

**Sources Verified:** 12 URLs via web_fetch
**Independent Sources Per Claim:** 0.12 (target: 2.0)
**Claim Accuracy:** 71% (based on verified claims)
**Unverified Claims:** 77% (due to bot detection)

**Barriers to Verification:**
1. Web search bot detection (blocked 77% of claims)
2. Non-existent sources (3 fabricated/misattributed)
3. Product confusion (blink.new vs OpenClaw services)
4. Lack of official release notes access

**Next Steps:**
1. Obtain API access or statistics from ClawHub
2. Check OpenClaw GitHub repository changelog for version updates
3. Seek official security advisories for malicious skills count
4. Remove or correct all 5 incorrect source attributions
5. Re-verify claims using OpenClaw official documentation

---

**Report Generated:** April 6, 2026
**Files Created/Updated:** 3 (report, correction log, verification status)
**Next Verification Recommended:** Within 7 days after OpenClaw release notes become available

---

## Quick Reference: Correction Locations

| Correction ID | Issue | Section | Severity |
|---------------|-------|---------|----------|
| #3 | TheGuidex.com article doesn't exist | New Documentation Sources | HIGH |
| #4 | GetOpenClaw.ai has ~8 use cases, not 50 | New Documentation Sources | HIGH |
| #5 | Heyuan110.com is empty landing page | New Documentation Sources | HIGH |
| #6 | blink.new is wrong product | Managed Service Expansion | HIGH |
| #7 | Malicious skills: 1,467 vs 1,184 | Security Crisis | MEDIUM |
| #1 | GitHub stars: 157K vs 145K | Growth Acceleration | LOW (already corrected) |
| #2 | ClawHub skills: 3K+ vs 13K+ | Data Discrepancy | MEDIUM (partially resolved) |

For detailed analysis, see: fact_check_reports/2026-04-06.md

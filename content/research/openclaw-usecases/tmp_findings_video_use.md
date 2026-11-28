# Video-Use Verification Findings

## Claim
"The browser-use team launched Video-Use, an open-source framework that shifts video editing from manual GUIs to programmatic, agent-driven workflows. Coding agents execute Python/FFmpeg commands to automate complex video manipulation from natural language instructions. The project quickly hit GitHub Trending."

## Verification Results

### Source 1: GitHub Repository (browser-use/video-use)
**URL:** https://github.com/browser-use/video-use

**Verification Status:** ✅ CONFIRMED

**Details found:**
- Repository exists at `browser-use/video-use`
- Description: "Edit videos with coding agents"
- Owner: `browser-use` organization (GitHub org id: 192012301)
- Repo ID: R_kgDOSAP_Zw
- Open source (private: false, fork: false)
- **Language confirmed:** Uses Python, FFmpeg (referenced in README as required dependency)
- **Functionality confirmed:** 
  - Drops raw footage in a folder, chat with coding agent, get final.mp4 back
  - Works with Claude Code, Codex, Hermes, Openclaw, or any agent with shell access
  - Automates video editing through natural language instructions
  - Executes Python/FFmpeg commands for video manipulation
  - Self-evaluates rendered output at cut boundaries

### Source 2: Browser Use Official Website
**URL:** https://browser-use.com

**Verification Status:** ✅ CONFIRMED

**Details found:**
- Browser Use is a legitimate company/product with multiple products
- Lists "Browser Use Cloud," "Browser Harness," "Stealth Browsers," "Browser Use Box," "Web Agents"
- Products section references GitHub: https://github.com/browser-use/browser-use
- Video-use is part of their product ecosystem (referenced via cloud.browser-use.com/v4)

### GitHub Trending Claim
**Status:** ⚠️ UNVERIFIED

**Notes:** Web searches were blocked by bot detection. Unable to confirm whether the project hit GitHub Trending. The repo exists and appears active but trending status could not be confirmed.

---

## JSON Summary

```json
{
  "found": true,
  "sources": [
    {
      "name": "GitHub Repository",
      "url": "https://github.com/browser-use/video-use",
      "verification": "CONFIRMED - Repo exists, open source, uses Python/FFmpeg, agent-driven workflow"
    },
    {
      "name": "Browser Use Official Website",
      "url": "https://browser-use.com",
      "verification": "CONFIRMED - browser-use is legitimate company; video-use is part of ecosystem"
    }
  ],
  "confidence": "HIGH",
  "notes": "Core claim verified: browser-use team DID launch video-use as an open-source framework for agent-driven video editing using Python/FFmpeg. GitHub Trending claim could not be verified due to web search limitations."
}
```

## Conclusion

**The main factual claims are VERIFIED:**
- ✅ browser-use team launched Video-Use
- ✅ It's an open-source framework  
- ✅ Shifts video editing from manual GUIs to programmatic, agent-driven workflows
- ✅ Coding agents execute Python/FFmpeg commands
- ✅ Automates video manipulation from natural language instructions

**The GitHub Trending claim is UNVERIFIED** - could not confirm due to search bot detection issues.

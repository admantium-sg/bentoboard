# Fact-Check: OpenClaw v2026.6.11-beta.2 Claim

## Claim Under Investigation
"OpenClaw v2026.6.11-beta.2 pre-release brings major new capabilities: OpenAI GPT-5.6 model family recognition across catalog, capability, and runtime selection paths. External harness attachment via openclaw attach enables interactive Codex-style workflows to resume and inspect existing Gateway sessions. Telegram gains Codex pairing with /login, active run steering, and recovery across transient API failures. The new on-exit schedule kind for cron wakes an agent when a watched command exits, while session-targeted runs can detach cleanly. iOS adopts the iOS 26 visual system with clearer navigation, settings, Chat, Talk, and onboarding flows. Native iMessage gains poll creation, reading, and voting. Safer scoped conversations arrive via capability profiles that prepare per-conversation tool and access boundaries."

## Verdict

**found: false** (for the specific version v2026.6.11-beta.2)

The features described in the claim DO exist in OpenClaw's pre-release cycle, but they belong to **v2026.7.1-beta.1** (published 2026-07-02), NOT v2026.6.11-beta.2.

## Source Details

### v2026.6.11-beta.2 (pre-release tag on GitHub)
- **URL:** https://github.com/openclaw/openclaw/releases/tag/v2026.6.11-beta.2
- **Actual contents:** Channel delivery reliability improvements, Slack relay mode, Mattermost /oc_queue, per-DM model overrides, openclaw agent --message-file, RAFT CLI wake bridge, safer plugin distribution, Android settings panels, Codex partial deltas and harness stability.
- **Does NOT contain:** GPT-5.6, openclaw attach, Telegram Codex pairing, on-exit cron, iOS 26 visual system, iMessage polls, capability profiles.

### v2026.7.1-beta.1 (latest pre-release, published 2026-07-02)
- **URL:** https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.1
- **Contains ALL claimed features:**
  - ✅ OpenAI GPT-5.6 support across catalog, capability, and runtime paths ([#98333](https://github.com/openclaw/openclaw/pull/98333))
  - ✅ External harness attachment via `openclaw attach` ([#96454](https://github.com/openclaw/openclaw/pull/96454))
  - ✅ Telegram Codex pairing with /login, active run steering, recovery ([#98006](https://github.com/openclaw/openclaw/pull/98006), [#98126](https://github.com/openclaw/openclaw/pull/98126), [#98786](https://github.com/openclaw/openclaw/pull/98786))
  - ✅ on-exit schedule kind for cron + detached session-targeted runs ([#92037](https://github.com/openclaw/openclaw/pull/92037), [#98755](https://github.com/openclaw/openclaw/pull/98755))
  - ✅ iOS adopts iOS 26 visual system ([#98452](https://github.com/openclaw/openclaw/pull/98452), [#98736](https://github.com/openclaw/openclaw/pull/98736), [#98811](https://github.com/openclaw/openclaw/pull/98811))
  - ✅ Native iMessage poll creation, reading, and voting ([#98421](https://github.com/openclaw/openclaw/pull/98421))
  - ✅ Capability profiles for scoped conversations ([#98536](https://github.com/openclaw/openclaw/pull/98536))

### v2026.6.11 (stable, released 2026-06-30)
- **URL:** https://docs.openclaw.ai/releases/2026.6.11
- Focuses purely on reliability/quality-of-life fixes. None of the claimed features are present.

## Summary

```json
{
  "found": false,
  "sources": [
    "https://github.com/openclaw/openclaw/releases/tag/v2026.6.11-beta.2",
    "https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.1",
    "https://docs.openclaw.ai/releases/2026.6.11",
    "https://api.github.com/repos/openclaw/openclaw/releases"
  ],
  "confidence": "HIGH",
  "notes": "The claimed features (GPT-5.6, openclaw attach, Telegram Codex workflows, on-exit cron, iOS 26, iMessage polls, capability profiles) are real and verified in v2026.7.1-beta.1. However, they are NOT in v2026.6.11-beta.2 — that pre-release has a different feature set focused on channel reliability and operator tooling. The claim appears to have the wrong version number; the correct version for these features is v2026.7.1-beta.1."
}
```

# SUB/WAVE: A Personal Internet Radio Station with an AI DJ

## Overview

**SUB/WAVE** is an open-source project by developer **Perminder Klair** that transforms a personal music library into a shared, live internet radio broadcast. Unlike streaming services where every listener gets a personalized playlist, SUB/WAVE creates a single Icecast stream where everyone hears the exact same thing at the exact same time — like tuning into a real radio station. The "DJ" is powered by artificial intelligence: an LLM-driven agent that selects tracks, talks between them with station idents, time checks, weather updates, and track introductions, and responds to plain-language listener requests.

**Repository:** https://github.com/perminder-klair/subwave  
**Website:** https://www.getsubwave.com/  
**License:** Open-source (MIT)

---

## Core Concept: Radio, Not a Playlist

The fundamental distinction SUB/WAVE draws is between a **playlist** (a list you control) and **radio** (a broadcast you join). Key principles:

- **One shared stream**: A single Icecast mount — everyone connects to the same audio at the same instant. No per-listener shuffle, no algorithm deciding what "you might like."
- **No listener skip**: Track-end is the only natural transition. The AI DJ owns pacing. Listeners cannot skip (operators have admin-only skip capability).
- **AI as the DJ, not the catalogue**: The music is your own library, served by Navidrome over the Subsonic API. The LLM picks what's next and talks between tracks. It does not generate music and does not replace the operator's taste.
- **Self-hosted and swappable**: Runs on one Linux host. The LLM provider is changeable at runtime with no redeploy.

---

## Architecture and Technology Stack

### Software Components

SUB/WAVE is built from several interconnected services, all deployable via Docker Compose on a single Linux host:

1. **Controller** (Node.js) — The AI DJ brain. Runs the LLM layer, broadcast logic, queue management, DJ agent, scheduler, and TTS engines.
2. **Broadcast** (Icecast2 + Liquidsoap) — The audio streaming infrastructure. Liquidsoap handles mixing, crossfades, transitions, and routing to Icecast.
3. **Web** (Next.js 15) — The admin console, listener player, onboarding wizard, and Library Observatory.
4. **Analyzer** (separate service) — Acoustic analysis of tracks: BPM, key, loudness, vocal detection, and optional CLAP "sounds-like" embeddings and Demucs stem separation.

### Key Technologies

| Component | Technology |
|-----------|------------|
| Streaming server | Icecast2 |
| Audio pipeline | Liquidsoap |
| LLM integration | Vercel AI SDK (supports Ollama, Anthropic, OpenAI, Google, DeepSeek, OpenRouter, Vercel AI Gateway, any OpenAI-compatible server) |
| Music library | Navidrome (Subsonic API) |
| TTS engines | Piper, Kokoro, Chatterbox (zero-shot voice cloning), PocketTTS, OpenAI, ElevenLabs, Remote HTTP |
| Web framework | Next.js 15 |
| CLI runtime | TypeScript (tsx, no build step) |
| Agent protocol | MCP (Model Context Protocol) for external AI agent control |

### Deployment Options

- **Quick install**: `curl -fsSL https://cli.getsubwave.com | sh` — installs the operator CLI, then offers to init and start
- **Docker Compose (no CLI)**: Download `docker-compose.yml` and `.env.example`, set three variables (ADMIN_USER, ADMIN_PASS, SITE_URL), `docker compose up -d`, then finish setup in the browser at `/onboarding`
- **Development**: Clone repo, run `./scripts/setup.sh`, `docker compose -f docker-compose.dev.yml up -d`, then `npm run dev` for the web UI
- **Unraid**: One-click install via Community Applications
- **Bring your own reverse proxy**: Swap bundled Caddy for Traefik, nginx, or custom Caddy via `docker-compose.byo.yml`

### Hardware Requirements

- **Default stack**: Lean, multi-arch images (~1.1 GB for analyzer, no PyTorch) — runs natively on ARM64 NAS devices, Raspberry Pi, and Apple Silicon
- **Heavy TTS** (Chatterbox, PocketTTS): Optional sidecar adds ~5–6 GB of PyTorch
- **Heavy analyzer** (CLAP embeddings + Demucs): ~1.9 GB, amd64 only
- **NVIDIA GPU**: Optional CUDA overlay for GPU-accelerated heavy analysis

---

## Core Features

### 1. AI DJ That Picks and Talks

The DJ agent runs continuously, managing:
- **Track selection**: Chooses music from the Navidrome library based on mood, time of day, weather, scheduled show profile, and listener requests
- **Speech generation**: Writes and reads aloud station idents, the current time, weather updates, and track introductions
- **Plain-language requests**: Listeners can say "play something more upbeat" or "anything by Radiohead" — the DJ interprets intent and queues accordingly

### 2. Six TTS Engines

SUB/WAVE supports running different TTS engines for different kinds of speech:

- **Local fast**: Piper and Kokoro (multilingual) — run in-process, no external service
- **Local expressive**: Chatterbox (zero-shot voice cloning) and PocketTTS (6× real-time, EN/FR/DE/IT/ES/PT) — via optional `tts-heavy` sidecar
- **Cloud**: OpenAI and ElevenLabs
- **Remote**: Any self-hosted HTTP TTS endpoint

Operators can assign a different engine per persona or per type of speech output.

### 3. Multiple DJ Personas

- Up to **24 personas** on the roster, each with its own voice and writing style
- A show can include **up to 3 guest co-hosts** who trade scripted banter with the host persona
- Ready-made personas available from the community catalog at getsubwave.com/personas

### 4. Scheduled Shows and Programmes

- **24×7 schedule grid**: Each slot has its own persona, mood, and skills, or anchors to a Navidrome playlist
- **Programmes**: A show can air as a produced episode — the DJ drafts a per-episode plan with an angle, one feature beat each hour, an intro and outro, so multi-hour slots have narrative coherence
- Ready-made show templates install from the community catalog

### 5. Pluggable Skills System

Skills are the DJ's between-track segments. Built-in skills include weather, news, traffic, and station idents. The skill system is fully extensible:

- Built-in skills scaffold as editable files on first boot (editable from admin console, no code, no redeploy)
- Custom skills: drop a `SKILL.md` (plus optional data-fetching code) into `state/skills/`, hit Rescan, and enable — or write one in the admin UI's built-in editor
- Community-shared skills available at getsubwave.com/skills

### 6. Mood-Aware Rotation

- Time of day, weather, and festival days bias what gets played and how the DJ talks
- The mood vocabulary is fully editable on a dedicated admin page: words, "sounds like" descriptions, and which mood each moment of the day leans into

### 7. Ending-Aware Crossfades

The bundled analyzer measures for every track:
- BPM
- Key
- Loudness
- How the track actually ends (real fade vs. cold ending)

Crossfades size themselves to the material: a natural fade rides out long, a cold ending cuts tight. Vocal detection prevents the DJ from talking over sung intros. An opt-in stem blend mixes the outgoing track's tail into the incoming track's head for smooth transitions. DJ speech ducks the music and lifts it back up.

### 8. Multi-Format Broadcast

- **MP3** always served (configurable bitrate) — works with Sonos, hardware radios, cars
- Optional **Opus**, **AAC**, and lossless **FLAC** mounts, each toggleable from the admin UI
- Web player picks the best format automatically
- Playlist files (`/listen.pls`, `/listen.m3u`) provided for Sonos, VLC, moOde, car receivers

### 9. Library Observatory

A full-screen, data-art visualization of the entire tagged music library:
- Tracks placed by genre, lit by energy level
- Click any point for a full track dossier: BPM, key, mood, embedding fingerprints, and nearest-in-vector-space neighbours
- Scales from hundreds to tens of thousands of tracks
- Accessed at `/observatory`

### 10. Native Apps and PWA

- **iOS app**: On the App Store (background audio, lock-screen controls, CarPlay, multi-station support)
- **Android app**: On Google Play (background audio, lock-screen controls, Android Auto, multi-station support)
- **Desktop app**: Native macOS / Windows / Linux player with menu-bar mini player and live audio spectrum — separate repo at github.com/getsubwave/subwave-desktop
- **PWA**: Installable on phone and desktop browsers

### 11. Playlist Builder

At `/admin/playlists`, operators can describe a playlist in plain language. The builder:
- Turns the description into a recipe
- Resolves it against the music library
- Keeps recipe-backed playlists topped up as new music is added

### 12. Station Imaging

A dedicated admin page for station branding audio:
- Jingles, SFX stingers, instrumental talk-over beds
- Render through the DJ's voice, generate from a text prompt, or upload own audio

### 13. Player Skins and Themes

Six player faces: **Classic**, **Unit SW-9**, **Platter**, **Drift**, **Subamp**, and **TTY** — with a station default and per-listener override. Theme editor with live preview for colors and typography.

### 14. Privacy and Multi-Station

- **Private station mode**: Two independent locks — hide the web player behind a prompt, and/or require listener auth on every stream mount
- **Multi-station profiles**: Keep several stations in one install, each with its own library pool, DJ roster, schedule, and settings — switch which is live from admin

### 15. Scrobbling and Archives

- **Scrobbling**: Every track reports to Last.fm and ListenBrainz (including self-hosted instances)
- **Hourly archives** (opt-in): Every hour saved as MP3 for later replay

### 16. DJ Doc

A built-in diagnostic tool: runs a full sweep across the stack, then has the configured LLM review the findings.

### 17. MCP Server

External AI agents (Claude Desktop, Cursor, etc.) can request songs and drive the DJ via the Model Context Protocol.

---

## Technical Deep Dive

### LLM Integration

The controller uses the **Vercel AI SDK** as an abstraction layer, supporting:

- Ollama (local)
- Anthropic (Claude)
- OpenAI (GPT models)
- Google (Gemini)
- DeepSeek
- OpenRouter
- Requesty
- Vercel AI Gateway
- Any OpenAI-compatible server

Switching providers is done from the admin UI with no redeploy. A **daily token budget** can cap hosted-model spend; past the cap, music keeps playing without AI chatter.

### Music Library Integration

SUB/WAVE pulls from **Navidrome** over the **Subsonic API**. The operator's own music library — no external catalogue, no streaming service dependency. Navidrome ≥0.62 is recommended for:
- Security hardening (internet-radio management now admin-gated)
- The `sonicSimilarity` OpenSubsonic extension, which SUB/WAVE automatically uses for audio-based neighbour track selection

### Acoustic Analysis Pipeline

The `subwave-analyzer` service runs in a dedicated sidecar:

| Variant | Models | Size | Architecture |
|---------|--------|------|--------------|
| Lean (default) | Acoustic analysis only | ~1.1 GB | Multi-arch (arm64, amd64) |
| Heavy | + CLAP embeddings + Demucs | ~1.9 GB | amd64 only |
| CUDA | Heavy on NVIDIA GPU | ~1.9 GB | amd64 + NVIDIA GPU |

### Docker Images

Published to GHCR (`ghcr.io/perminder-klair/subwave-*`):
- `subwave-caddy` — Reverse proxy with automatic TLS
- `subwave-broadcast` — Icecast2 + Liquidsoap
- `subwave-controller` — AI DJ brain
- `subwave-web` — Next.js admin/player UI
- `subwave-analyzer` — Lean acoustic analysis
- `subwave-analyzer-heavy` — Full analysis (CLAP + Demucs)
- `subwave-tts-heavy` — Expressive voices (Chatterbox + PocketTTS)

### File Structure

```
controller/          Node.js controller (AI DJ brain)
 liquidsoap/         radio.liq (mixing pipeline)
 web/                Next.js 15 UI
 docker/             Dockerfiles, Caddyfile, templates
 scripts/            setup, jingle generation, update, health check
 mcp-subwave/        MCP server for external agent control
 cli/                Operator CLI (TypeScript/tsx)
 bin/                CLI entry point
```

---

## User Experience

### For Listeners

- Tune in at `getsubwave.com/listen` (or via native apps)
- Hear whatever is currently on — no algorithm, no personalization
- Request music in plain language
- Choose from six player skins
- Optional private station auth

### For Operators

- Browser-based admin console at `/admin`
- Live status, queue, booth log
- Manage DJ personas, voices, schedules
- Edit moods, skills, imaging
- View LLM/TTS usage stats
- Debug view: recent LLM calls, health checks
- Operator CLI: `subwave status`, `subwave logs`, `subwave doctor`, `subwave update`

---

## Community and Support

- **Discord**: https://discord.gg/vjVbVKnMBa
- **Community catalogs**: Ready-made personas, shows, and skills available at getsubwave.com
- **Support**: Ko-fi at https://ko-fi.com/pklair

---

## What Makes SUB/WAVE Distinctive

SUB/WAVE occupies a specific niche: **personal shared radio**. It is not a music streaming service, not a podcast platform, not an AI jukebox. The core philosophical stance is that the shared, synchronous nature of radio — everyone hearing the same thing at the same moment — has value that personalized playlists destroy. The AI DJ is not there to replace human curation of taste, but to provide the continuous presentation layer (talk, segues, scheduling, responsiveness) that makes radio radio rather than just audio in the background.

The technical implementation is notably comprehensive for an open-source project: multi-format streaming, multiple TTS engines with runtime swapping, GPU acceleration options, a full visualization tool for the music library, native mobile and desktop apps, an MCP server for agent integration, and a pluggable skill system that makes the between-track presentation fully customizable without touching core code.

---

## Summary Table

| Attribute | Details |
|-----------|---------|
| **Project name** | SUB/WAVE |
| **Author** | Perminder Klair (perminder-klair) |
| **Type** | Self-hosted personal internet radio with AI DJ |
| **Core tech** | Node.js, Next.js 15, Liquidsoap, Icecast2, Vercel AI SDK, Navidrome/Subsonic |
| **Deployment** | Docker Compose on single Linux host |
| **LLM providers** | Ollama, Anthropic, OpenAI, Google, DeepSeek, OpenRouter, Vercel AI Gateway, OpenAI-compatible |
| **TTS engines** | Piper, Kokoro, Chatterbox, PocketTTS, OpenAI, ElevenLabs, Remote HTTP |
| **Music source** | Own Navidrome library (no external catalogue) |
| **Stream formats** | MP3 (always), Opus, AAC, FLAC (optional) |
| **Mobile apps** | iOS (App Store), Android (Google Play) |
| **Desktop** | macOS, Windows, Linux (separate repo) |
| **Multi-station** | Yes — multiple profiles in one install |
| **Skills system** | Pluggable, editable from admin UI |
| **Observatory** | Full-screen genre/energy visualization of library |
| **MCP server** | Yes — external agents can request tracks |
| **License** | Open-source (MIT) |
| **Website** | https://www.getsubwave.com/ |
| **Demo** | https://www.getsubwave.com/listen |

---

*Sources: https://github.com/perminder-klair/subwave, https://www.getsubwave.com/ (accessed 2026-07-28)*

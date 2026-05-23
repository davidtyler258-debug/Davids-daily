# David's Daily

**The Daily Round** · Personal intelligence system for the active later life

**Live at:** [daily.urbanwronski.com](https://daily.urbanwronski.com)  
**Author:** David John Tyler · Urban Wronski Intelligence Desk  
**AI co-developer:** Claude (Anthropic)

---

## What this is

David's Daily is a progressive web application (PWA) — a single, sleek, voice-capable daily organiser built for an intellectually engaged older adult who still works, writes, teaches, gardens, monitors his health and maintains meaningful relationships.

The interface shows only what matters today. Everything else is one tap away. It runs on any device. It never nags.

## Current sprint

**Sprint 1 · Cloudflare Deployment** — The Round live at daily.urbanwronski.com

| Sprint | Module | Status |
|--------|--------|--------|
| 0 | Foundation · The Round prototype | ✅ Complete |
| 1 | Cloudflare deployment | 🔄 In progress |
| 2 | The Day — Calendar & Tasks | Planned Jul 2026 |
| 3 | The Circle — Relationships | Planned Aug 2026 |
| 4 | The Partnership — Shared Care | Planned Sep 2026 |
| 5 | The Decks — Digital Death-Clean | Planned Oct 2026 |
| 6 | The Body — Health Monitor | Planned Nov 2026 |
| 7 | The Work — Professional Life | Planned Dec 2026 |
| 8 | The Mind — Mental Health & Cognitive Vitality | Planned Jan 2027 |
| 9 | The Life — Intellectual & Aesthetic Life | Planned Feb 2027 |
| 10 | Proton Drive Integration | Watch Q3-Q4 2027 |
| 11 | Polish, Performance & Accessibility | Planned Mar 2027 |

## Architecture

- **Hosting:** Cloudflare Pages (free tier)
- **Backend:** Cloudflare Workers (via Pages Functions)
- **Data:** Cloudflare KV (priorities, journal, mood, tasks)
- **Auth:** Cloudflare Access (zero-trust, email OTP)
- **AI:** Anthropic Claude Sonnet 4
- **Calendar:** Google Calendar API (OAuth2)
- **Health:** Apple HealthKit via iOS Shortcuts → Cloudflare Worker
- **Secure docs:** Proton Drive (manual until SDK matures)

## Devices

| Device | OS | Access |
|--------|----|--------|
| Lenovo ThinkCentre M710s | Windows 11 | Browser autostart |
| ASUS Vivobook TM4201 | Fedora 43 Aurora | Browser |
| MacBook Air M1 | macOS | Browser + Login Item |
| iPad Air M2 | iPadOS | Safari PWA |
| iPhone 12 Pro Max | iOS | Safari PWA |

## Development

Sprint duration is flexible — one sprint per fortnight where health and commitments allow. Each sprint produces a deployed, working improvement. No sprint ends on a broken state.

See `DavidsDaily_CriticalPath_v1_0.docx` for the full development guide.

---

*Urban Wronski Intelligence Desk · urbanwronski.com · Ararat, Victoria*

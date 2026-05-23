# Sprint 1 · Cloudflare Deployment · Checklist

**Goal:** David's Daily lives at daily.urbanwronski.com, accessible on all five devices simultaneously.

## Steps

### GitHub
- [ ] Private repository created: `davids-daily`
- [ ] All Sprint 1 files committed to `main`
- [ ] Repository README confirms live URL

### Cloudflare Pages
- [ ] New Pages project created → linked to `davids-daily` GitHub repo
- [ ] Build settings: command = (none), output = `.` (static site)
- [ ] First deployment succeeded

### DNS
- [ ] Custom domain added in Pages: `daily.urbanwronski.com`
- [ ] CNAME record created in Cloudflare DNS (auto-configured by Pages)
- [ ] SSL certificate active (auto-provisioned)

### Cloudflare Access
- [ ] Access application created for `daily.urbanwronski.com`
- [ ] Policy: email OTP, allow `davidjohntyler@...` (your email)
- [ ] Login tested: receive OTP email, access granted

### KV Store
- [ ] KV namespace created: `DAVIDS_DAILY_KV`
- [ ] Namespace ID copied into `wrangler.toml`
- [ ] KV binding configured in Pages → Settings → Functions
- [ ] `/api/kv` endpoint tested: PUT and GET working

### PWA
- [ ] `manifest.json` loading correctly (DevTools → Application)
- [ ] Icons added to `/icons/` folder (192×192 and 512×512 PNG)
- [ ] Service worker registering without errors
- [ ] iPhone: Safari → Share → Add to Home Screen → full-screen launch
- [ ] iPad: Safari → Share → Add to Home Screen → full-screen launch

### The Round
- [ ] Priorities saving to KV (not just localStorage)
- [ ] App loads correctly on ThinkCentre (Windows 11, Chrome)
- [ ] App loads correctly on iPhone 12 Pro Max

## Sprint 1 done when
All Critical items above are checked. App is live on the web. At least ThinkCentre and iPhone confirmed working.

---
*Update this file at sprint close. Tag release: `v0.2-sprint-1`*

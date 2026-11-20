# Navya Beauty Parlour — Website

Frontend-only Next.js (App Router, TypeScript, Tailwind CSS v4) website for a beauty and bridal parlour in
Chakka, Darbhanga, Bihar. Bookings go through **WhatsApp**; there is **no backend, database, login or secret** —
it deploys to Vercel as a static site.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
npm audit            # should report: found 0 vulnerabilities
```

Requires Node.js 20.9+ (tested on Node 24).

## Where to change things (no code in components)

| What | File |
| --- | --- |
| Name, phone, WhatsApp number, address, map links, hours, social links | `src/data/salon.ts` |
| Free Eyebrows banner text, image and WhatsApp message | `src/data/promo.ts` |
| Special offer cards (incl. First Visit) | `src/data/offers.ts` |
| Services, home packages, bridal packages, **Service Highlights prices** | `src/data/services.ts` |
| Price list (derived from the files above) | `src/data/pricing.ts` |
| Gallery images and categories | `src/data/gallery.ts` |
| Brands shown (only set `confirmed: true` for brands the salon really uses) | `src/data/brands.ts` |
| FAQ | `src/data/testimonials.ts` |

**Most prices are sample starting prices** and are labelled as such on the site. Replace them with real rates.
The six Service Highlights prices (`serviceHighlights` in `services.ts`) were supplied by the salon.

**The WhatsApp number** is set once in `src/data/salon.ts` (`whatsappNumber`, `phoneDisplay`, `telHref`). Every
button, the floating button, the sticky mobile bar and the structured data read from it.

### Things the salon still needs to provide
- Exact street address and PIN code (`salon.address.line`, `postalCode`) — intentionally empty, never invented.
- Business hours (`salon.hours`) — currently "To be confirmed".
- Exact Google Maps pin (see environment variables). Until then the map shows the Chakka area only.
- Real photos. Gallery and card images are royalty-free stock (Pexels/Unsplash) used as illustrations, not the
  salon's customers. The **Before & After** gallery tab is empty on purpose — add only real, consented results.
- Social media URLs (`salon.social`) — hidden until filled in.

## Environment variables (all optional)

Copy `.env.example` to `.env.local` for local use. On Vercel add them under **Project → Settings → Environment
Variables**. They are all public (`NEXT_PUBLIC_*`) — **never put secrets in them**.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your live domain, e.g. `https://navyabeautyparlour.in`. Used for canonical URLs, Open Graph, sitemap and robots. |
| `NEXT_PUBLIC_MAP_EMBED_URL` | The `src` of Google Maps → Share → Embed a map, for the exact salon pin. |
| `NEXT_PUBLIC_MAP_DIRECTIONS_URL` | Google Maps share/directions link for the salon. |

## Deploy to Vercel

1. Push this project to a GitHub / GitLab / Bitbucket repository.
2. Go to <https://vercel.com/new> and import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command `npm run build`; no output directory needed.
4. Add the environment variables above (at least `NEXT_PUBLIC_SITE_URL`).
5. Click **Deploy**. Every push to the main branch redeploys automatically.
6. Add your custom domain under **Settings → Domains**, then update `NEXT_PUBLIC_SITE_URL` and redeploy.

No database, Supabase project or server is needed. The first visitor to each image size after a deploy waits a
moment while Vercel generates and caches the optimised image; later visitors get it from the cache.

## Security

What is in place (all verified with automated tests against the production build):

- **0 known vulnerabilities** in dependencies (`npm audit`). Re-run it and update dependencies regularly.
- **Strict Content-Security-Policy** and other headers set in `next.config.ts`: `Strict-Transport-Security`,
  `X-Frame-Options: DENY` (no clickjacking), `X-Content-Type-Options: nosniff`, `Referrer-Policy`,
  `Permissions-Policy` (camera, microphone, location, payment all off), `Cross-Origin-Opener-Policy`.
  Only the Google Maps embed is allowed as a third-party frame; fonts and images are self-hosted.
- **No attack surface to speak of:** no server code, database, login, cookies, or user data storage. Forms only
  build a WhatsApp link on the visitor's own device. All text put into the WhatsApp link is URL-encoded, and
  React escapes everything it renders, so typed-in scripts do nothing (tested).
- The image optimiser accepts **local images only** (no remote hosts), so it cannot be abused as a proxy.
- The Google Map loads only when scrolled into view, in a sandboxed iframe; the page contacts no third party
  before that.
- The `X-Powered-By` header is removed and source maps are not published.

### About prices and "tamper-proofing"
No website can stop a visitor from changing what is shown **in their own browser** (DevTools "Inspect" lets
anyone edit any page they are viewing, on every website in the world). What protects you is that this site is
built so that doing so is harmless:

- Prices are shown for information only and labelled "indicative"; the **salon confirms the price on WhatsApp**.
- The WhatsApp booking messages contain the service name but **never a price** (verified by test), so an edited
  price on screen cannot be sent to the salon as if it were real.
- The real prices live in `src/data/*.ts` in your repository. Only people with access to your GitHub and Vercel
  accounts can change what the website serves to everyone else — so protect those accounts: turn on
  **two-factor authentication**, use strong unique passwords, limit who has access, and enable GitHub
  branch protection on `main`.

### Staying secure
- Run `npm audit` and `npm update` monthly; redeploy after updates.
- Never commit `.env.local` or put secrets in `NEXT_PUBLIC_*` variables.
- After deploying, check your headers at <https://securityheaders.com>.

## Performance

- Every page is pre-rendered static HTML served from Vercel's CDN; photos are served as AVIF/WebP in sizes that
  match the device, cached for 14 days.
- Animations are CSS-based; the booking form and its form/validation libraries load only when someone opens it.
- Lighthouse (simulated mid-range phone on slow 4G, production build): Accessibility, Best Practices and SEO
  100; Performance roughly 81–96 depending on the page (the photo-heavy pages are the slowest). No website can
  have literally zero latency; a CDN-served static site like this is about as fast as the web gets.

## Pre-launch checklist
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real domain
- [ ] Real prices, address, PIN code, hours and map pin added
- [ ] WhatsApp number and phone verified by tapping each button on a real phone
- [ ] Stock photos replaced with the salon's own where possible (and rights to any supplied photo confirmed)
- [ ] Privacy, Terms and Cancellation pages reviewed by the salon (they are general templates)
- [ ] Brand list in `brands.ts` matches the products actually used
- [ ] Two-factor authentication on GitHub and Vercel

## Notes
- A WhatsApp message from this site is an **enquiry, not a confirmed booking**; the site says so where it matters.
- The site has no customer-review section. Add one only with real, salon-approved reviews.

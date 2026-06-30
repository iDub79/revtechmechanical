# Rev-Tech Mechanical Website

A replacement for the expensive Wix site — a **static** website for Rev-Tech Mechanical built with **Next.js 16 + Tailwind CSS**, hosted free on **Cloudflare Pages**. The contact form is handled by a **Cloudflare Pages Function** that emails submissions via **Resend** — no backend server or database to run.

---

## Project Structure

```
revtech-mechanical/
├── frontend/
│   ├── app/                  # Next.js App Router pages (/, /services, /about, /contact)
│   ├── components/           # Navbar, Footer, ContactForm
│   ├── functions/api/        # Cloudflare Pages Function: POST /api/contact
│   └── next.config.ts        # output: "export" (static site)
└── README.md
```

---

## Local Development

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

The contact form POSTs to `/api/contact`. That route only exists when running on
Cloudflare (or via `wrangler pages dev`), so submissions won't send during plain
`npm run dev` — see "Test the function locally" below.

### Build the static site

```bash
cd frontend
npm run build        # emits the static site into frontend/out/
npx serve out        # preview the built static pages
```

### Test the function locally (real Cloudflare runtime)

```bash
cd frontend
npm run build
export RESEND_API_KEY=...            # your Resend key
export CONTACT_TO=info@revtechmechanical.com.au
export CONTACT_FROM=noreply@revtechmechanical.com.au
npx wrangler pages dev out           # serves out/ + functions/ at http://localhost:8788
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value props, services overview, CTA |
| `/services` | Full services grid |
| `/about` | Company history, values, specialist equipment |
| `/contact` | Contact form + details + map |

---

## Contact Form — `POST /api/contact`

Implemented in `frontend/functions/api/contact.ts` (Cloudflare Pages Function).

Accepts a JSON body:

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "0400 123 456",
  "message": "I need a log book service.",
  "website": ""
}
```

Returns `{ "success": true }` on success, or `{ "error": "..." }` with a 4xx/5xx status.

On a valid submission it sends an email to `CONTACT_TO` via Resend, with `reply_to`
set to the customer's address so you can reply straight to them.

### Validation & anti-spam

| Measure | Detail |
|---------|--------|
| Honeypot | Hidden `website` field — bots fill it, submissions silently accepted (200) and discarded |
| Required fields | `name` (≤255 chars), valid `email`, `message` (10–5000 chars) |
| Body size | Max 16 KB |

---

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub/GitLab.
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → select the repo.
3. Build settings:
   - **Root directory**: `frontend`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - The `frontend/functions/` directory is auto-deployed as `/api/*`.
4. **Environment variables** (Settings → Environment variables, Production):
   - `RESEND_API_KEY` (mark as Secret)
   - `CONTACT_TO` — where enquiries are emailed, e.g. `info@revtechmechanical.com.au`
   - `CONTACT_FROM` — sender on a Resend-verified domain, e.g. `noreply@revtechmechanical.com.au`
5. Deploy → get a `*.pages.dev` URL.
6. **Custom domain**: Pages project → Custom domains → add `revtechmechanical.com.au` and `www.`. Cloudflare provisions free TLS.

### Resend setup

1. Sign up at [resend.com](https://resend.com) (free: 3,000 emails/mo).
2. Add `revtechmechanical.com.au` as a domain and add the DKIM/SPF DNS records it gives you (in Cloudflare DNS), then Verify.
3. Create an API key → use it as `RESEND_API_KEY` in Cloudflare. Never commit it.

### DNS

Move `revtechmechanical.com.au` to Cloudflare (Add a site → Free plan → repoint
nameservers at your registrar). Preserve any existing `MX` records if you receive
email at the domain — Resend sending is independent of inbound mail.

---

## Environment Variables

| Variable | Where | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | Cloudflare Pages (secret) | Resend API key for sending the contact email |
| `CONTACT_TO` | Cloudflare Pages | Recipient address for enquiries |
| `CONTACT_FROM` | Cloudflare Pages | Sender address on the Resend-verified domain |

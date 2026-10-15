# SHD Constructions — Website

Same stack as your Narhare Solar build: **Next.js (App Router) + Tailwind CSS + Vercel**,
with **Telegram Bot API** used for contact-form notifications instead of a paid backend/DB.

## Pages
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/projects` — Projects (with client-side category filter)
- `/process` — Process
- `/why-us` — Why Us
- `/contact` — Contact form → Telegram

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Fill in `.env.local`:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

How to get these:
1. Message **@BotFather** on Telegram → `/newbot` → copy the token.
2. Send any message to your new bot.
3. Visit `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy the `chat.id` value.

Run locally:
```bash
npm run dev
```

Deploy: push to GitHub, import into Vercel, add the two env vars in
Project Settings → Environment Variables.

## Notes on placeholders
- All images currently point to Unsplash stock photos (easy to spot: `images.unsplash.com`
  URLs in each page file) — swap these for real project photography before launch.
- Address and directors live in `lib/site.ts` (used by the footer, contact page,
  map embed and the About page). Directors show initials until real headshots are added.
- Phone/email are still placeholders (`+91 12345 67890`, `info@shdconstructions.com`) —
  find-and-replace these across `components/Footer.tsx`, `app/contact/page.tsx`.

## Colors (Tailwind config)
- `shd-dark` `#233026` — deep forest green (hero panels, stat bars, CTAs)
- `shd-darker` `#1b1e1b` — near-black (selected work, home footer)
- `shd-cream` `#f4f1eb` — page background
- `shd-paper` `#f8f6f2` / `shd-card` `#eeeae2` / `shd-sand` `#e7e0d4` — light tiles and cards
- `shd-gold` `#b8945a` — eyebrow/accent

Fonts: Newsreader (serif headings) + Inter (body), loaded in `app/layout.tsx`.
Shared pieces live in `components/`: `Logo`, `Icons` (line icons), `BuildingSketch`
(the architectural line drawing used on the home page).

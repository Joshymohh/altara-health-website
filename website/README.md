# Altara Website

Next.js 14+ site for Altara, with App Router and shared layout (navbar + footer on every page).

---

## Folder structure

```
website/
├── app/                    # App Router — each folder = a route
│   ├── layout.tsx          # Root layout: fonts, Navbar, Footer wrap all pages
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Global styles + Tailwind
│   ├── blog/
│   │   ├── page.tsx        # Blog listing (/blog)
│   │   └── [slug]/
│   │       └── page.tsx    # Single blog post (/blog/your-post-slug)
│   ├── about/
│   │   └── page.tsx        # About page (/about)
│   ├── contact/
│   │   └── page.tsx        # Contact page (/contact)
│   └── product/
│       └── page.tsx        # Product page (/product)
├── components/             # Reusable UI used across pages
│   ├── Navbar.tsx          # Site header — same on every page
│   └── Footer.tsx          # Site footer — same on every page
├── public/                 # Static files (images, favicon)
├── .env.example            # Template for required env variables
├── .env.local              # Your secrets (not in git) — copy from .env.example
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## What each part does

| File or folder | Purpose |
|----------------|--------|
| **app/layout.tsx** | Wraps every page: loads Lora + Montserrat fonts, renders `<Navbar />`, main content, then `<Footer />`. |
| **app/page.tsx** | Home page. Replace with your V0 home page code. |
| **app/blog/** | Blog list and individual posts. Use `font-lora` class on blog post H1 titles. |
| **app/about, contact, product** | Placeholder pages. Replace with V0 code when you import those pages. |
| **components/Navbar.tsx** | Header/navigation. Replace with the header from your V0 home design so it’s the same on all pages. |
| **components/Footer.tsx** | Footer. Replace with your V0 footer design when you have one. |
| **.env.local** | Local secrets (API keys, etc.). Copy from `.env.example` and fill in. Never commit real keys. |

---

## Fonts

- **Lora** (400, 700): Used for **H1 titles on blog posts**. Add the class `font-lora` to the main heading in your blog post template.
- **Montserrat** (400, 500, 600, 700): Used for **everything else** (body, UI, other headings). Set in `app/layout.tsx` and `app/globals.css`.

---

## Commands

- **Install dependencies:** `pnpm install` or `npm install`
- **Run dev server:** `pnpm dev` or `npm run dev` — open [http://localhost:3000](http://localhost:3000)
- **Build for production:** `pnpm build` or `npm run build`
- **Start production server:** `pnpm start` or `npm start`

---

## Importing V0 code

1. **Home page:** Paste or replace the main content of your V0 home into `app/page.tsx`. If the V0 design has a header, move that into `components/Navbar.tsx` so it appears on every page.
2. **Other pages:** Replace the placeholder in the matching `app/.../page.tsx` (e.g. about → `app/about/page.tsx`).
3. **Blog post H1:** In your blog post template, give the post title the class `font-lora` so it uses Lora.
4. Keep API keys and secrets in `.env.local` and reference them in code; do not hardcode them.

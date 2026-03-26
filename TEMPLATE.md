# Clone checklist (new client)

1. **Copy the project folder** (or duplicate this repo) and `npm install`.
2. **Set environment:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real domain (or leave default for local dev).
3. **Edit `config/site.ts`** — brand name, copy, services & prices, contact, social URLs, map embed, blog cards, SEO fields. Paths like `/1.png`, `/hero.jpg` point to files in `public/`.
4. **Replace assets in `public/`** — logo, hero, about, owner, blog images (keep names or update paths in `config/site.ts`).
5. **Theme (optional):** edit CSS variables at the top of `app/globals.css` for colors aligned to the client brand.
6. **Navigation / scroll:** if you add a new `site.nav` hash (e.g. `#pricing`), add a row in `scrollTargetIds` in `config/site.ts` and give the section heading a matching `id` (e.g. `pricing-heading`).
7. **`package.json`:** update the `"name"` field for the client project.

For deployment, use your host’s Next.js instructions; `NEXT_PUBLIC_SITE_URL` must match the live URL for correct Open Graph and sitemap links.

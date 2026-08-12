# Falling Pickaxe VIP

Independent landing for the Pixmove instant **Falling Pickaxe** — falling-pickaxe.vip

## Stack

- Next.js 16 (App Router)
- React 19
- Custom CSS (no template clone)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

Point domain `falling-pickaxe.vip` to the host. Ensure www redirects to apex (configured in `next.config.ts`).

## Affiliate hops

- `/1win`, `/jetton`, `/stake` — 302 to partner URLs (noindex in robots.txt)

## AI SEO

- `/llms.txt` — short LLM citation file
- `/llms-full.txt` — extended reference

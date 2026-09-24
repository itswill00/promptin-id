# Promptin ID

Arsip prompt Bahasa Indonesia siap copy. Statis, tanpa login, deploy di Vercel.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Deploy Vercel

- Framework: Next.js, `output: export`
- Build command: `npm run build`
- Output dir: `out`

## Struktur

- `app/page.tsx` — homepage + grid
- `components/PromptGrid.tsx` — search, filter, copy
- `data/prompts.json` — tambah prompt di sini
- `app/pro/page.tsx` — ganti link Lynk.id
- `app/tentang`, `app/privasi` — buat AdSense

## Tambah prompt

Edit `data/prompts.json`, push, auto-deploy.

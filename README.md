# Promptin ID

Arsip 200 prompt Bahasa Indonesia siap copy (150 gratis, 50 pro). Statis, tanpa login, deploy di Vercel.

## Jalankan lokal

Next 14 tidak bisa build di Termux Android (tidak ada binary SWC android-arm64). Typecheck lokal:

```bash
npm install
node node_modules/typescript/bin/tsc --noEmit
```

Dev dan build jalan normal di laptop atau di Vercel.

## Deploy Vercel

- Framework: Next.js, `output: export`
- Build command default, tanpa env wajib
- Tiap push ke `main` auto-deploy bila project terhubung

## Konfigurasi uang (data/site.json)

Satu file untuk semua yang berbayar. Kosongkan untuk nonaktifkan.

```json
{
  "lynkUrl": "https://lynk.id/nama-kamu/produk",
  "adsensePublisherId": "ca-pub-XXXXXXXXXXXXXXXX",
  "adSlotTop": "1111111111",
  "adSlotBottom": "2222222222"
}
```

- `lynkUrl` terisi: tombol bayar di halaman Pro aktif. Kosong: tombol disabled bertulis segera.
- `adsensePublisherId` terisi: script AdSense dimuat dan slot iklan tampil. Kosong: tidak ada yang tampil.
- `public/ads.txt`: ganti pub-0000000000000000 dengan ID publisher setelah AdSense diterima.

## Tambah prompt

Tambah objek ke `data/prompts.json`:

```json
{
  "id": "jualan-49",
  "title": "...",
  "category": "Jualan",
  "description": "...",
  "body": "Gunakan [VARIABEL] kapital, tanpa em dash.",
  "tags": ["..."],
  "isPro": false
}
```

Kategori valid: Jualan, Konten, Skripsi, Ngantor. Angka hero dihitung otomatis dari file ini.

## Domain sendiri

Lihat DOMAIN.md.

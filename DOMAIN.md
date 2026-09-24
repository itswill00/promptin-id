# Domain sendiri untuk Promptin ID

Status sekarang: jalan di subdomain vercel.app. Di bawah ini langkah pas domain siap.

## 1. Tambah domain di Vercel

Project Promptin ID, Settings, Domains, Add. Masukkan domain kamu, misal promptin.id.

## 2. Arahkan DNS di registrar

Ikuti nilai persis yang ditampilkan Vercel. Umumnya:

- A record, host `@`, ke IP yang ditampilkan Vercel
- CNAME record, host `www`, ke target yang ditampilkan Vercel

Tunggu propagasi 5 menit sampai 24 jam. Sertifikat HTTPS diterbitkan otomatis.

## 3. Update referensi domain

- Isi `domain` di data/site.json bila dipakai komponen lain.
- Update link afiliasi atau Lynk.id yang menyebut URL lama.
- Daftarkan properti baru di Google Search Console dan AdSense bila ganti domain.

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Promptin ID: Prompt Indonesia Siap Copy',
  description: 'Kumpulan prompt Bahasa Indonesia untuk seller, konten kreator, skripsi, dan kerja kantoran. Gratis, cepat, tanpa login.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <a href="/" className="font-bold">Promptin ID</a>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Cari</a>
              <a href="/pro" className="hover:underline">Versi Pro</a>
              <a href="/tentang" className="hover:underline">Tentang</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap gap-4 px-4 py-6 text-sm text-neutral-500">
            <span>© 2026 Promptin ID</span>
            <a href="/tentang" className="hover:underline">Tentang</a>
            <a href="/privasi" className="hover:underline">Privasi</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

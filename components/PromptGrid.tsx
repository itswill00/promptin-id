'use client';
import { useMemo, useState } from 'react';

export type PromptItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  body: string;
  tags: string[];
  isPro: boolean;
};

const CATEGORIES = ['Semua', 'Jualan', 'Konten', 'Skripsi', 'Ngantor'];

export default function PromptGrid({ items }: { items: PromptItem[] }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Semua');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.toLowerCase();
    return items.filter((p) => {
      const matchCat = cat === 'Semua' || p.category === cat;
      const matchQ =
        !needle ||
        p.title.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle) ||
        p.body.toLowerCase().includes(needle) ||
        p.tags.join(' ').toLowerCase().includes(needle);
      return matchCat && matchQ;
    });
  }, [items, q, cat]);

  function reset() {
    setQ('');
    setCat('Semua');
  }

  async function copy(id: string, body: string) {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(id);
    }
  }

  return (
    <div>
      <div className="sticky top-0 z-10 bg-neutral-50 py-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari: hook tiktok, bab 1 skripsi, email follow-up..."
          className="w-full rounded-lg border bg-white px-4 py-2.5 outline-none focus:border-black"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`min-h-[44px] rounded-full border px-4 py-1 text-sm ${cat === c ? 'bg-black text-white' : 'bg-white'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="my-3 text-sm text-neutral-500">{filtered.length} prompt ditemukan</p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-center">
          <p className="font-semibold">Tidak ada prompt yang cocok.</p>
          <p className="mt-1 text-sm text-neutral-600">Coba kata kunci lain atau reset filter.</p>
          <button
            onClick={reset}
            className="mt-4 min-h-[44px] rounded-lg bg-black px-4 text-sm text-white"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="relative flex flex-col rounded-xl border bg-white p-4">
              <div className="mb-2 flex items-center gap-2 text-xs">
                <span className="rounded bg-neutral-100 px-2 py-0.5">{p.category}</span>
                {p.isPro && <span className="rounded bg-amber-100 px-2 py-0.5">PRO</span>}
              </div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
              <pre
                className={`mt-3 whitespace-pre-wrap rounded-lg bg-neutral-50 p-3 text-xs ${p.isPro ? 'blur-sm select-none' : ''}`}
              >
                {p.isPro ? 'Kunci. Buka di versi Pro.' : p.body.slice(0, 220)}
              </pre>
              <div className="mt-3 flex gap-2">
                {p.isPro ? (
                  <a
                    href="/pro"
                    className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-black px-3 py-2 text-center text-sm text-white"
                  >
                    Buka Pro
                  </a>
                ) : (
                  <button
                    onClick={() => copy(p.id, p.body)}
                    className="min-h-[44px] w-full rounded-lg border px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    {copied === p.id ? 'Tersalin!' : 'Copy'}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

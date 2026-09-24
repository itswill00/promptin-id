import site from '@/data/site.json';

export default function ProPage() {
  const ready = site.lynkUrl.length > 0;
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">Promptin Pro: paket prompt + ebook PDF</h1>
      <p className="mt-2 text-neutral-600">
        Sekali bayar via Lynk.id. Dapat file PDF + update JSON. Tanpa login, tanpa langganan.
      </p>
      <ul className="mt-4 list-disc pl-5 text-sm">
        <li>50 prompt pro: hook, script 30 detik, email kantor, materi skripsi</li>
        <li>File PDF + JSON, boleh dipakai ulang untuk kerja sendiri</li>
        <li>Update gratis via halaman ini</li>
      </ul>
      {ready ? (
        <a
          href={site.lynkUrl}
          className="mt-6 inline-block min-h-[44px] rounded-lg bg-black px-5 py-3 text-white"
        >
          Beli via Lynk.id
        </a>
      ) : (
        <>
          {/* TODO: isi lynkUrl di data/site.json untuk aktifkan tombol bayar */}
          <button
            disabled
            className="mt-6 inline-block min-h-[44px] rounded-lg bg-neutral-300 px-5 py-3 text-neutral-600"
          >
            Bayar via Lynk.id (segera)
          </button>
          <p className="mt-3 text-xs text-neutral-500">Pembayaran dibuka setelah paket pro final.</p>
        </>
      )}
    </div>
  );
}

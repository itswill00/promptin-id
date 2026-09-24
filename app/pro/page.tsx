export default function ProPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">Promptin Pro — 50 prompt + ebook PDF</h1>
      <p className="mt-2 text-neutral-600">
        Sekali bayar 29rb via Lynk.id. Dapat file PDF + update JSON. Tanpa login, tanpa langganan.
      </p>
      <ul className="mt-4 list-disc pl-5 text-sm">
        <li>50 prompt pro: hook winning, script 30 detik, email kantor, bab skripsi</li>
        <li>File PDF + JSON, boleh dipakai ulang untuk kerja sendiri</li>
        <li>Update gratis via halaman ini</li>
      </ul>
      <a
        href="https://lynk.id/ganti-dengan-link-kamu"
        className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white"
      >
        Beli via Lynk.id
      </a>
      <p className="mt-3 text-xs text-neutral-500">Ganti href di app/pro/page.tsx:12 dengan link Lynk.id kamu.</p>
    </div>
  );
}

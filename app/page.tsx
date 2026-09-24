import prompts from '@/data/prompts.json';
import PromptGrid from '@/components/PromptGrid';

export default function Home() {
  const total = prompts.length;
  const pro = prompts.filter((p) => p.isPro).length;
  const free = total - pro;
  return (
    <div>
      <section className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">{total} Prompt Indonesia, tinggal copy.</h1>
        <p className="mt-2 text-neutral-600">
          Untuk seller, afiliator, mahasiswa, dan pekerja. Tanpa login. {free} gratis, {pro} pro.
        </p>
      </section>
      <PromptGrid items={prompts} />
    </div>
  );
}

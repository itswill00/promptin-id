import prompts from '@/data/prompts.json';
import PromptGrid from '@/components/PromptGrid';

export default function Home() {
  return (
    <div>
      <section className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">200 Prompt Indonesia, tinggal copy.</h1>
        <p className="mt-2 text-neutral-600">
          Untuk seller, afiliator, mahasiswa, dan pekerja. Tanpa login. 150 gratis, 50 pro.
        </p>
      </section>
      <PromptGrid items={prompts} />
    </div>
  );
}

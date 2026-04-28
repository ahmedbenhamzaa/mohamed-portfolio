import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function ClientWall({ clients = [] }) {
  return (
    <div>
      <Reveal>
        <SectionIntro
          eyebrow="Delivered for"
          title="Organizations and ecosystems"
          subtitle="Subtle text blocks are used now; they can later be replaced by approved logos without changing the page structure."
        />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div key={client} className="flex min-h-20 items-center justify-center rounded-2xl border border-[#D7DEE9] bg-white px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.17em] text-[#46556B] transition hover:border-[#2563EB]/50 hover:text-[#0A1628]">
              {client}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function FeaturedHighlights({ highlights = [] }) {
  return (
    <div>
      <Reveal>
        <SectionIntro
          eyebrow="Selected highlights"
          title="Proof through delivered training"
          subtitle="A concise selection of training experiences that show range across public institutions, international youth networks, and academic trainer-development programs."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <article className="group flex h-full flex-col rounded-[1.75rem] border border-[#D7DEE9] bg-white p-6 shadow-sm shadow-[#0A1628]/5 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/45 hover:shadow-xl hover:shadow-[#0A1628]/10">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#0A1628] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {item.audienceType}
                </span>
                <span className="text-sm font-semibold text-[#8B9BB4]">{item.year}</span>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">{item.organization}</p>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-tight tracking-[-0.03em] text-[#0A1628]">{item.topic}</h3>
              <p className="mt-4 text-sm font-semibold text-[#46556B]">{item.scale}</p>
              <p className="mt-5 text-sm leading-7 text-[#59677B]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

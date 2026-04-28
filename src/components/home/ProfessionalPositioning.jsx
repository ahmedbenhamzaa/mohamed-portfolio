import ScrollReveal from './ScrollReveal.jsx';

export default function ProfessionalPositioning({ data }) {
  return (
    <section className="relative bg-[#0A1628] py-16 text-white md:py-24">
      <div className="mx-auto grid w-[min(100%-32px,1180px)] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <ScrollReveal>
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#2563EB]">{data.eyebrow}</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-white md:text-[54px]">
            {data.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="text-[17px] leading-8 text-[#C8D0DD] md:text-[19px] md:leading-9">{data.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.proofPoints.map((point) => (
              <div key={point} className="rounded-[1.5rem] border border-white/10 bg-[#162035]/72 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <div className="mb-4 h-[2px] w-10 bg-[#2563EB]" aria-hidden="true" />
                <p className="text-sm leading-7 text-[#C8D0DD]">{point}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

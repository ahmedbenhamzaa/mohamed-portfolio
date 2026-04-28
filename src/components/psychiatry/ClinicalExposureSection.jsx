import SectionWrapper from '../common/SectionWrapper';

export default function ClinicalExposureSection({ data }) {
  return (
    <SectionWrapper background="alt" paddingSize="md">
      <div className="mb-10 max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">Areas of exposure</p>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-[-0.03em] md:text-5xl">{data.sectionTitle}</h2>
        <p className="mt-5 font-sans text-base leading-8 text-white/70">{data.sectionIntro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-deep-navy/45 p-6">
            <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
            <p className="mt-4 font-sans text-sm leading-7 text-white/66">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

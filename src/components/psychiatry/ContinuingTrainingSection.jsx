import SectionWrapper from '../common/SectionWrapper';

export default function ContinuingTrainingSection({ data }) {
  return (
    <SectionWrapper background="alt" paddingSize="md">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">Continuing education</p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">{data.sectionTitle}</h2>
          <p className="mt-5 font-sans text-base leading-8 text-white/70">{data.sectionIntro}</p>
        </div>
        <div className="columns-1 gap-6 md:columns-2">
          {data.items.map((item) => (
            <p key={item} className="mb-4 break-inside-avoid rounded-2xl border border-white/10 bg-deep-navy/35 p-4 font-sans text-sm leading-7 text-white/72">
              {item}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import SectionWrapper from '../common/SectionWrapper';

export default function PsychiatryOverview({ overview }) {
  return (
    <SectionWrapper background="dark" paddingSize="md">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">{overview.eyebrow}</p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            {overview.title}
          </h2>
        </div>
        <div className="lg:pt-8">
          <p className="font-sans text-base leading-8 text-white/74 md:text-lg">{overview.body}</p>
          <div className="mt-8 space-y-4 border-l border-white/12 pl-6">
            {overview.highlights.map((highlight) => (
              <p key={highlight} className="font-sans text-sm leading-7 text-white/82 md:text-base">
                {highlight}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

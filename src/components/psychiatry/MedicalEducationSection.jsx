import SectionWrapper from '../common/SectionWrapper';

export default function MedicalEducationSection({ data }) {
  return (
    <SectionWrapper background="dark" paddingSize="md">
      <div className="mb-10 max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">Education</p>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">{data.sectionTitle}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {data.items.map((item) => (
          <article key={`${item.title}-${item.institution}`} className="rounded-3xl border border-white/10 bg-light-navy p-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-electric-blue">{item.dates}</p>
            <h3 className="mt-4 font-serif text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
            <p className="mt-3 font-sans text-sm leading-7 text-white/66">{item.institution}, {item.location}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

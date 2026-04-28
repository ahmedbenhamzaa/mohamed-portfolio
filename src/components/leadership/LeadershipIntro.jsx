import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

export default function LeadershipIntro({ data }) {
  return (
    <SectionWrapper background="dark" paddingSize="md">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} description={data.body} light />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {['Founding leadership', 'UN stages', 'TEDx talks', 'Policy work'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/46">Signal</p>
              <p className="mt-2 font-serif text-xl leading-tight text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

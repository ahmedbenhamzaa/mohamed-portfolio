import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

export default function PolicyContributionsList({ items }) {
  return (
    <SectionWrapper id="policy-contributions" background="dark" paddingSize="lg">
      <SectionHeading
        eyebrow="04 — Policy & Strategy Contributions"
        title="Structured contributions to participation policy, education advocacy, and youth-centered strategy."
        description="A clean list for institutions that need evidence of policy thinking, drafting support, and strategic contribution."
        light
      />
      <div className="space-y-4">
        {items.map((item, index) => (
          <article key={item.id} className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[80px_1fr] sm:p-7">
            <div className="font-serif text-4xl font-semibold text-white/18">{String(index + 1).padStart(2, '0')}</div>
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.16em] text-white/56">{item.role}</span>
                <span className="rounded-full border border-electric-blue/25 bg-electric-blue/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.16em] text-electric-blue">{item.organization}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
              <p className="mt-3 font-sans text-sm uppercase tracking-[0.14em] text-white/40">{item.year}</p>
              <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-white/68">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

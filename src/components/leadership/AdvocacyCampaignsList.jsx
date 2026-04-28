import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

function ScopeBadge({ scope }) {
  return (
    <span className="rounded-full border border-electric-blue/25 bg-electric-blue/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-blue">
      {scope}
    </span>
  );
}

export default function AdvocacyCampaignsList({ items }) {
  return (
    <SectionWrapper id="advocacy-campaigns" background="light" paddingSize="lg">
      <SectionHeading
        eyebrow="03 — Advocacy Campaigns"
        title="Public engagement that connects education, civic participation, and youth empowerment."
        description="Campaigns and advocacy initiatives are presented as concise institutional records rather than promotional stories."
      />
      <div className="divide-y divide-deep-navy/10 rounded-[1.5rem] border border-deep-navy/10 bg-white shadow-[0_18px_70px_rgba(10,22,40,0.05)]">
        {items.map((item) => (
          <article key={item.id} className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:p-7">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <ScopeBadge scope={item.scope} />
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-mid-grey">{item.year}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.025em] text-deep-navy">{item.campaignName}</h3>
              <p className="mt-2 font-sans text-sm font-semibold text-deep-navy/70">{item.organization}</p>
              <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-mid-grey">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

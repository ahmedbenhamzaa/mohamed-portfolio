import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

function RoleTypeBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-electric-blue/20 bg-electric-blue/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-blue">
      {children}
    </span>
  );
}

export default function LeadershipTimeline({ items }) {
  return (
    <SectionWrapper id="leadership-roles" background="light" paddingSize="lg">
      <SectionHeading
        eyebrow="01 — Leadership Roles"
        title="Institution-building across youth, health, education, and international student movements."
        description="A chronological view of formal leadership and governance roles, designed to show depth, continuity, and institutional responsibility."
      />
      <div className="relative ml-2 border-l border-deep-navy/12 pl-7 sm:ml-4 sm:pl-10">
        {items.map((item) => (
          <article key={item.id} className="relative pb-12 last:pb-0">
            <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-white bg-electric-blue shadow-[0_0_0_1px_rgba(10,22,40,0.12)] sm:-left-[43px]" />
            <div className="rounded-[1.5rem] border border-deep-navy/10 bg-white p-5 shadow-[0_20px_70px_rgba(10,22,40,0.06)] sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <RoleTypeBadge>{item.roleType}</RoleTypeBadge>
                  <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.025em] text-deep-navy">{item.role}</h3>
                  <p className="mt-1 font-sans text-sm font-semibold text-deep-navy/70">{item.organization}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-sans text-sm font-semibold text-deep-navy">{item.dates}</p>
                  <p className="mt-1 font-sans text-sm text-mid-grey">{item.location}</p>
                </div>
              </div>
              <p className="mt-5 max-w-4xl font-sans text-base leading-7 text-deep-navy/72">{item.description}</p>
              {item.highlights?.length ? (
                <ul className="mt-5 space-y-2 border-t border-deep-navy/8 pt-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="font-sans text-sm leading-6 text-mid-grey">— {highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

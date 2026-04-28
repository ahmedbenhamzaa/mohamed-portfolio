import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

export default function InternationalSpeakingGrid({ items }) {
  return (
    <SectionWrapper id="international-speaking" background="alt" paddingSize="lg">
      <SectionHeading
        eyebrow="02 — International Speaking"
        title="High-level stages, youth forums, TEDx platforms, and global convenings."
        description="A card-based view for committees and conference organizers to understand stage credibility, format range, and thematic fit."
        light
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className={`group rounded-[1.5rem] border p-5 transition duration-300 hover:-translate-y-1 ${item.featured ? 'border-electric-blue/40 bg-white/[0.075] shadow-[0_24px_90px_rgba(37,99,235,0.12)]' : 'border-white/10 bg-white/[0.035]'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-electric-blue">{item.year}</p>
              <p className="rounded-full border border-white/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.14em] text-white/54">{item.role}</p>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">{item.eventName}</h3>
            <p className="mt-3 font-sans text-sm font-semibold text-white/68">{item.organization}</p>
            <p className="mt-1 font-sans text-sm text-white/46">{item.location}</p>
            <p className="mt-5 border-t border-white/10 pt-5 font-sans text-sm leading-6 text-white/70">{item.topic}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function SpeakingEngagements({ items }) {
  return (
    <SectionWrapper background="dark" paddingSize="lg" className="speaking-press-bg">
      <SectionHeading
        eyebrow="Selected stages"
        title="International speaking and facilitation record."
        text="A curated view of high-visibility public speaking, moderation, and representation moments."
        inverse
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.03}>
            <article className={`group h-full border p-6 transition duration-300 ${item.featured ? 'border-electric-blue/50 bg-white/[0.055]' : 'border-white/10 bg-white/[0.025] hover:border-electric-blue/40 hover:bg-white/[0.045]'}`}>
              <div className="flex items-start justify-between gap-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-electric-blue">{item.year}</p>
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">{item.role}</p>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug tracking-[-0.025em] text-white">{item.eventName}</h3>
              <p className="mt-2 font-sans text-sm font-semibold text-white/72">{item.organization}</p>
              <p className="mt-1 font-sans text-sm text-white/48">{item.location}</p>
              <div className="my-6 h-px bg-white/10" />
              <p className="font-sans text-sm leading-7 text-white/64">{item.topic}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

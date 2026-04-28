import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';

export default function AwardsRecognitionGrid({ items }) {
  return (
    <SectionWrapper id="awards-recognition" background="alt" paddingSize="lg" className="leadership-gold-stage">
      <SectionHeading
        eyebrow="05 — Awards & Recognition"
        title="Recognition moments that create the committee’s “who is this person?” reaction."
        description="Gold is used only here, in line with the design system: recognition, distinction, and Pillar 4 prestige moments."
        light
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="gold-award-card group relative overflow-hidden rounded-[1.65rem] border border-gold/35 bg-[linear-gradient(145deg,rgba(201,168,76,0.16),rgba(255,255,255,0.035)_42%,rgba(10,22,40,0.55))] p-6 shadow-[0_24px_110px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1">
            <div className="gold-shimmer absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold">{item.year}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">{item.name}</h3>
              <p className="mt-3 font-sans text-sm font-semibold text-gold/85">{item.awardingBody}</p>
              <p className="mt-5 border-t border-gold/20 pt-5 font-sans text-sm leading-6 text-white/70">{item.significance}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

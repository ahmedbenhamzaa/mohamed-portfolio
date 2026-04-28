import SectionWrapper from '../common/SectionWrapper';
import Reveal from './Reveal';

export default function SpeakingIntro({ data }) {
  return (
    <SectionWrapper background="dark" paddingSize="lg" className="speaking-press-bg">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal>
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-electric-blue">
            {data.eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {data.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-sans text-base leading-8 text-white/70 sm:text-lg">
            {data.text}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.proofPoints.map((point) => (
              <div key={point} className="border-l border-electric-blue/70 bg-white/[0.035] px-4 py-3 font-sans text-sm leading-6 text-white/78">
                {point}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function SpeakingFormats({ items }) {
  return (
    <SectionWrapper background="alt" paddingSize="md">
      <SectionHeading
        eyebrow="Formats"
        title="Available for structured public and institutional formats."
        text="The page is designed to work as a speaker profile, press page, and booking support page."
        inverse
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {items.map((format, index) => (
          <Reveal key={format} delay={index * 0.025}>
            <span className="inline-flex border border-electric-blue/45 bg-electric-blue/10 px-4 py-2 font-sans text-sm font-semibold text-white transition hover:border-electric-blue hover:bg-electric-blue/20">
              {format}
            </span>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

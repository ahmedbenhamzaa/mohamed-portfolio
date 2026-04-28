import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function SignatureTopics({ items }) {
  return (
    <SectionWrapper background="alt" paddingSize="lg">
      <SectionHeading
        eyebrow="Signature topics"
        title="Themes that travel across youth, institutions, and mental health."
        text="Clear, serious topics for keynotes, panels, workshops, and institutional conversations."
        inverse
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article className="h-full border border-white/10 bg-deep-navy/50 p-6 transition duration-300 hover:border-electric-blue/60 hover:bg-deep-navy/80 sm:p-7">
              <h3 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
              <p className="mt-4 font-sans text-sm leading-7 text-white/64">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

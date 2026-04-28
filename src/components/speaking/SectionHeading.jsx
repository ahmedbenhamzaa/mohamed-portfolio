import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, align = 'left', inverse = false }) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-electric-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl ${inverse ? 'text-white' : 'text-deep-navy'}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 font-sans text-base leading-8 sm:text-lg ${inverse ? 'text-white/68' : 'text-mid-grey'}`}>
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

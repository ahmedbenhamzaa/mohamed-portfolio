export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">{eyebrow}</p>
      ) : null}
      <h2 className={`font-serif text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-deep-navy'}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 font-sans text-base leading-8 ${light ? 'text-white/68' : 'text-mid-grey'}`}>{description}</p>
      ) : null}
    </div>
  );
}

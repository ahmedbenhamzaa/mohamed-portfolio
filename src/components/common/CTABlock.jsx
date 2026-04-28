import { toInternalHref } from '../../utils/link';

export default function CTABlock({ heading, subtext, buttonLabel, buttonHref, variant = 'dark' }) {
  const isDark = variant === 'dark';
  return (
    <div className={`overflow-hidden rounded-[2rem] border px-6 py-10 sm:px-10 lg:px-14 ${isDark ? 'border-white/10 bg-light-navy text-white' : 'border-deep-navy/10 bg-white text-deep-navy'}`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{heading}</h2>
          <p className={`mt-4 max-w-2xl font-sans text-base leading-7 ${isDark ? 'text-white/68' : 'text-mid-grey'}`}>{subtext}</p>
        </div>
        <a
          href={toInternalHref(buttonHref)}
          className="inline-flex items-center justify-center rounded-full bg-electric-blue px-6 py-3 font-sans text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-deep-navy"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

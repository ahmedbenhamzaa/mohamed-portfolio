import { toInternalHref } from '../../utils/link';
import ScrollReveal from './ScrollReveal.jsx';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FeaturedHighlights({ data }) {
  return (
    <section className="relative bg-[#0A1628] py-16 text-white md:py-24">
      <div className="mx-auto w-[min(100%-32px,1180px)]">
        <ScrollReveal className="max-w-3xl">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#2563EB]">{data.eyebrow}</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[54px]">{data.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.045}>
              <a
                href={toInternalHref(item.href)}
                className={cn(
                  'group block h-full rounded-[1.75rem] border bg-[#162035]/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#162035]',
                  item.accent === 'gold' ? 'border-[#C9A84C]/22 hover:border-[#C9A84C]/55' : 'border-white/10 hover:border-[#2563EB]/55',
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className={cn('text-[11px] font-extrabold uppercase tracking-[0.22em]', item.accent === 'gold' ? 'text-[#C9A84C]' : 'text-[#2563EB]')}>
                    {item.category}
                  </p>
                  <span className={cn('h-2 w-2 rounded-full', item.accent === 'gold' ? 'bg-[#C9A84C]' : 'bg-[#2563EB]')} />
                </div>
                <h3 className="mt-7 font-display text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#8B9BB4]">{item.description}</p>
                <span className={cn('mt-7 inline-flex text-xs font-extrabold uppercase tracking-[0.16em]', item.accent === 'gold' ? 'text-[#C9A84C]' : 'text-white group-hover:text-[#2563EB]')}>
                  Explore
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

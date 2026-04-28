import { toInternalHref } from '../../utils/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FourPillarNavigation({ data }) {
  const [expandedId, setExpandedId] = useState(data.items[0]?.id || null);

  return (
    <section id="pillars" className="relative scroll-mt-24 bg-[#0A1628] py-16 text-white md:py-24">
      <div className="mx-auto w-[min(100%-32px,1180px)]">
        <ScrollReveal className="max-w-3xl">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#2563EB]">{data.eyebrow}</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[56px]">{data.title}</h2>
          <p className="mt-5 text-base leading-8 text-[#8B9BB4] md:text-lg md:leading-9">{data.subtitle}</p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {data.items.map((pillar, index) => {
            const isExpanded = expandedId === pillar.id;
            return (
              <ScrollReveal key={pillar.id} delay={index * 0.05}>
                <article
                  className={cn(
                    'h-full overflow-hidden rounded-[1.75rem] border bg-[#162035] transition duration-300',
                    isExpanded ? 'border-[#2563EB]/55 shadow-[0_30px_90px_rgba(37,99,235,0.13)]' : 'border-white/10 hover:border-white/25',
                    pillar.recognition && isExpanded ? 'shadow-[0_30px_90px_rgba(201,168,76,0.12)]' : '',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : pillar.id)}
                    className="flex w-full flex-col items-start p-6 text-left"
                    aria-expanded={isExpanded}
                  >
                    <span className={cn('text-xs font-extrabold tracking-[0.28em]', pillar.recognition ? 'text-[#C9A84C]' : 'text-[#2563EB]')}>
                      {pillar.number}
                    </span>
                    <h3 className="mt-6 font-display text-[32px] font-semibold leading-[1.02] tracking-[-0.025em] text-white lg:min-h-[98px]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-[#8B9BB4]">{pillar.audience}</p>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-white/10 px-6 pb-6 pt-5">
                          <p className="text-sm leading-7 text-[#C8D0DD]">{pillar.summary}</p>
                          <ul className="mt-5 space-y-3">
                            {pillar.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-3 text-sm leading-7 text-[#8B9BB4]">
                                <span className={cn('mt-3 h-1.5 w-1.5 shrink-0 rounded-full', pillar.recognition ? 'bg-[#C9A84C]' : 'bg-[#2563EB]')} />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={toInternalHref(pillar.href)}
                            className={cn(
                              'mt-6 inline-flex rounded-full border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition',
                              pillar.recognition
                                ? 'border-[#C9A84C]/45 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A1628]'
                                : 'border-[#2563EB]/50 text-white hover:bg-[#2563EB]',
                            )}
                          >
                            {pillar.ctaLabel}
                          </a>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

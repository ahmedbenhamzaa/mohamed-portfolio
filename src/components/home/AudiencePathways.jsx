import { toInternalHref } from '../../utils/link';
import ScrollReveal from './ScrollReveal.jsx';

export default function AudiencePathways({ data }) {
  return (
    <section className="relative bg-white py-16 text-[#0A1628] md:py-24">
      <div className="mx-auto w-[min(100%-32px,1180px)]">
        <ScrollReveal className="max-w-3xl">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#2563EB]">{data.eyebrow}</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[54px]">{data.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {data.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.06}>
              <a
                href={toInternalHref(item.href)}
                className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-[#D7DEE9] bg-white p-6 shadow-[0_18px_60px_rgba(10,22,40,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/50 hover:shadow-[0_24px_70px_rgba(10,22,40,0.1)]"
              >
                <div>
                  <h3 className="font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#0A1628]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#52627A]">{item.description}</p>
                </div>
                <span className="mt-8 inline-flex text-xs font-extrabold uppercase tracking-[0.16em] text-[#2563EB]">
                  {item.ctaLabel}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

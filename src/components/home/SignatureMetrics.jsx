import ScrollReveal from './ScrollReveal.jsx';
import StatCounter from './StatCounter.jsx';

export default function SignatureMetrics({ data }) {
  return (
    <section className="relative bg-[#162035] py-16 text-white md:py-24">
      <div className="mx-auto w-[min(100%-32px,1180px)]">
        <ScrollReveal className="max-w-3xl">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#2563EB]">{data.eyebrow}</p>
          <h2 className="font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] md:text-[52px]">{data.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.06}>
              <article className="group h-full rounded-[1.75rem] border border-white/10 bg-[#0A1628]/72 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/45 hover:bg-[#0A1628]">
                <p className="font-display text-[52px] font-semibold leading-none tracking-[-0.04em] text-white">
                  <StatCounter value={item.value} suffix={item.suffix} />
                </p>
                <h3 className="mt-5 text-base font-extrabold leading-6 text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[#8B9BB4]">{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import CountUpNumber from "./CountUpNumber";
import Reveal from "./Reveal";

export default function StatsBanner({ stats = [], supportingMetrics = [] }) {
  const visibleStats = stats.filter((item) => item.visible !== false);

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#162035] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_15%,#2563EB_0,transparent_28%),radial-gradient(circle_at_80%_80%,#8B9BB4_0,transparent_24%)]" />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleStats.map((stat) => (
            <div key={stat.id} className="rounded-3xl border border-white/10 bg-[#0A1628]/72 p-6 backdrop-blur">
              <p className="font-serif text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                <CountUpNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8B9BB4]">{stat.label}</p>
              {stat.note ? <p className="mt-3 text-xs leading-5 text-[#8B9BB4]">{stat.note}</p> : null}
            </div>
          ))}
        </div>
        {supportingMetrics.length ? (
          <div className="relative mt-6 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
            {supportingMetrics.map((metric) => (
              <div key={metric.id} className="flex items-baseline gap-3 text-[#D7DEE9]">
                <span className="font-serif text-2xl font-bold text-white">{metric.value}</span>
                <span className="text-sm leading-6 text-[#8B9BB4]">{metric.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

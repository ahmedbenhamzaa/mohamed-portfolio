import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function TrainingPortfolio({ items = [], filters = ["All"] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(items[0]?.id || null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.audienceType === activeFilter);
  }, [activeFilter, items]);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
      <Reveal>
        <div className="lg:sticky lg:top-28">
          <SectionIntro
            eyebrow="Full portfolio"
            title="Expandable training record"
            subtitle="Filter the portfolio by audience type to quickly assess fit for INGOs, corporates, government bodies, or academic institutions."
            inverse
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "border-[#2563EB] bg-[#2563EB] text-white"
                    : "border-white/15 bg-white/5 text-[#D7DEE9] hover:border-[#2563EB]/70 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="max-h-[760px] space-y-3 overflow-y-auto pr-1 training-scrollbar">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article key={item.id} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] transition hover:border-[#2563EB]/60">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="flex w-full flex-col gap-4 p-5 text-left sm:flex-row sm:items-start sm:justify-between"
                  aria-expanded={isExpanded}
                >
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">{item.organization}</span>
                    <span className="mt-2 block font-serif text-xl font-bold tracking-[-0.02em] text-white">{item.topic}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#8B9BB4]">{item.scale}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#D7DEE9]">{item.audienceType}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#D7DEE9]">{item.year}</span>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 py-5">
                      <p className="text-sm leading-7 text-[#D7DEE9]">{item.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}

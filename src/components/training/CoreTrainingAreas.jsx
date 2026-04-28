import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function CoreTrainingAreas({ areas = [] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <Reveal>
        <SectionIntro
          eyebrow="Training architecture"
          title="Core training areas"
          subtitle="Each area is designed to be practical, participatory, and adaptable to institutional, academic, civic, or corporate audiences."
          inverse
        />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 px-4 py-2 text-sm font-semibold text-[#D8E5FF] transition hover:border-[#2563EB] hover:bg-[#2563EB]/20"
            >
              {area}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

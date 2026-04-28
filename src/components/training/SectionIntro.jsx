export default function SectionIntro({ eyebrow, title, subtitle, inverse = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2563EB]">{eyebrow}</p>
      ) : null}
      <h2 className={`mt-4 font-serif text-3xl font-bold tracking-[-0.035em] md:text-5xl ${inverse ? "text-white" : "text-[#0A1628]"}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-8 ${inverse ? "text-[#D7DEE9]" : "text-[#46556B]"}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}

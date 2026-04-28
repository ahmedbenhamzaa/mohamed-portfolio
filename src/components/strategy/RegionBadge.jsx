export default function RegionBadge({ region }) {
  return (
    <span className="inline-flex items-center rounded-full border border-electric-blue/20 bg-electric-blue/10 px-3 py-1 font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-electric-blue">
      {region}
    </span>
  );
}

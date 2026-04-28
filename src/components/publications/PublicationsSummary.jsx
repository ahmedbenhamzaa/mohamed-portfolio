export default function PublicationsSummary({ items }) {
  const total = items.length;
  const posters = items.filter((item) => item.type === 'Poster').length;
  const abstracts = items.filter((item) => item.type === 'Abstract').length;
  const congresses = items.filter((item) => item.type === 'Congress').length;

  const stats = [
    { label: 'Total entries', value: total },
    { label: 'Posters', value: posters },
    { label: 'Abstracts', value: abstracts },
    { label: 'Congresses', value: congresses },
  ];

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden border border-deep-navy/10 bg-deep-navy/10">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white px-4 py-4">
          <dt className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-mid-grey">{stat.label}</dt>
          <dd className="mt-2 font-serif text-3xl font-bold text-deep-navy">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

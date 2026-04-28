import PublicationListItem from './PublicationListItem';

export default function PublicationList({ items, emptyState }) {
  if (!items.length) {
    return (
      <div className="border border-deep-navy/10 bg-deep-navy/[0.02] px-5 py-10 text-center font-sans text-sm text-mid-grey">
        {emptyState}
      </div>
    );
  }

  return (
    <ol className="divide-y divide-deep-navy/10 border-y border-deep-navy/10">
      {items.map((item, index) => (
        <PublicationListItem key={item.id} item={item} index={index} />
      ))}
    </ol>
  );
}

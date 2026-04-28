import { motion } from 'framer-motion';

const typeClassMap = {
  Paper: 'publication-badge-paper',
  Poster: 'publication-badge-poster',
  Abstract: 'publication-badge-abstract',
  Congress: 'publication-badge-congress',
};

export default function PublicationListItem({ item, index }) {
  return (
    <motion.li
      className="publication-list-item grid gap-4 py-6 sm:grid-cols-[92px_1fr] sm:gap-6 lg:grid-cols-[120px_1fr_170px] lg:items-start"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.25), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-serif text-2xl font-bold leading-none text-deep-navy sm:text-3xl">
        {item.year}
      </div>

      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className={`publication-badge ${typeClassMap[item.type] || ''}`}>{item.type}</span>
          <span className="publication-language-badge">{item.language}</span>
          {item.role && <span className="publication-role-badge">{item.role}</span>}
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-deep-navy sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-6 text-mid-grey">
          {item.venueOrJournal}
        </p>
        {item.topics?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.topics.map((topic) => (
              <span key={topic} className="publication-topic-chip">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 sm:col-start-2 lg:col-start-auto lg:justify-end">
        {item.doi && (
          <a className="publication-link" href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer">
            DOI
          </a>
        )}
        {item.link && (
          <a className="publication-link" href={item.link} target="_blank" rel="noreferrer">
            Link
          </a>
        )}
      </div>
    </motion.li>
  );
}

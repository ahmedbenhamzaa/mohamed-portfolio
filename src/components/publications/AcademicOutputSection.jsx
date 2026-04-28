import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PublicationFilters from './PublicationFilters';
import PublicationList from './PublicationList';
import PublicationsSummary from './PublicationsSummary';

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function AcademicOutputSection({ data }) {
  const [activeType, setActiveType] = useState('all');
  const [activeLanguage, setActiveLanguage] = useState('all');

  const filteredItems = useMemo(() => {
    return data.items
      .filter((item) => activeType === 'all' || item.type === activeType)
      .filter((item) => activeLanguage === 'all' || item.language === activeLanguage)
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  }, [data.items, activeType, activeLanguage]);

  return (
    <section className="bg-white px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div className="mb-10 border-b border-deep-navy/10 pb-8" variants={sectionReveal}>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">
            Scholarly record
          </p>
          <div className="grid gap-7 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
                Publications, posters, abstracts & congresses
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-sm leading-7 text-mid-grey sm:text-base">
                Sorted by most recent first. Use the filters to separate presented work, accepted abstracts, congress participation, and language.
              </p>
            </div>
            <PublicationsSummary items={data.items} />
          </div>
        </motion.div>

        <motion.div variants={sectionReveal}>
          <PublicationFilters
            typeTabs={data.filters.typeTabs}
            languages={data.filters.languages}
            activeType={activeType}
            activeLanguage={activeLanguage}
            onTypeChange={setActiveType}
            onLanguageChange={setActiveLanguage}
          />
        </motion.div>

        <motion.div className="mt-8" variants={sectionReveal}>
          <PublicationList items={filteredItems} emptyState={data.page.emptyState} />
        </motion.div>
      </motion.div>
    </section>
  );
}

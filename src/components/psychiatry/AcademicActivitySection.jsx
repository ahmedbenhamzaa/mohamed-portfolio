import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const typeClasses = {
  Poster: 'border-electric-blue/30 bg-electric-blue/8 text-electric-blue',
  Abstract: 'border-electric-blue/30 bg-electric-blue/8 text-electric-blue',
  Congress: 'border-deep-navy/15 bg-deep-navy/[0.04] text-deep-navy'
};

export default function AcademicActivitySection({ data }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return data.items;
    return data.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, data.items]);

  return (
    <SectionWrapper background="academic" paddingSize="lg" className="academic-profile-section">
      <div className="mb-10 flex flex-col gap-6 border-b border-deep-navy/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">Academic profile</p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-[-0.03em] text-deep-navy md:text-5xl">{data.sectionTitle}</h2>
          <p className="mt-5 font-sans text-base leading-8 text-mid-grey">{data.sectionIntro}</p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Academic activity filters">
          {data.filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 ${
                  isActive
                    ? 'border-electric-blue bg-electric-blue text-white'
                    : 'border-deep-navy/12 bg-white text-deep-navy hover:border-electric-blue hover:text-electric-blue'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="divide-y divide-deep-navy/10 border-y border-deep-navy/10">
        {filteredItems.map((item, index) => (
          <motion.article
            key={item.id}
            className="grid gap-4 py-6 md:grid-cols-[1fr_auto] md:items-start md:gap-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.48, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${typeClasses[item.type]}`}>
                  {item.type}
                </span>
                {item.role && <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-mid-grey">{item.role}</span>}
              </div>
              <h3 className="font-serif text-xl font-semibold leading-snug tracking-[-0.02em] text-deep-navy md:text-2xl">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-7 text-deep-navy/65 md:text-base">{item.venue}</p>
            </div>
            <p className="font-sans text-sm font-semibold text-electric-blue md:text-right">{item.year}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

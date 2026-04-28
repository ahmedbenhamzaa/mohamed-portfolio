import { motion } from 'framer-motion';

const badgeClasses = {
  Residency: 'border-electric-blue/40 bg-electric-blue/10 text-electric-blue',
  Internship: 'border-deep-navy/15 bg-deep-navy/[0.04] text-deep-navy',
  Rotation: 'border-deep-navy/15 bg-deep-navy/[0.04] text-deep-navy'
};

export default function ClinicalTimeline({ entries }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-deep-navy/12 sm:block" aria-hidden="true" />
      <div className="space-y-6">
        {entries.map((entry, index) => (
          <motion.article
            key={entry.id}
            className="relative rounded-3xl border border-deep-navy/10 bg-white p-5 shadow-[0_24px_70px_rgba(10,22,40,0.08)] sm:ml-10 md:p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -left-[2.15rem] top-8 hidden h-3 w-3 rounded-full bg-electric-blue ring-8 ring-white sm:block" aria-hidden="true" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className={`inline-flex rounded-full border px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${badgeClasses[entry.type]}`}>
                  {entry.type}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.025em] text-deep-navy">{entry.role}</h3>
                <p className="mt-2 font-sans text-sm font-semibold leading-6 text-deep-navy/90 md:text-base">{entry.institution}</p>
                <p className="mt-1 font-sans text-sm text-mid-grey">{entry.cityCountry}</p>
              </div>
              <p className="font-sans text-sm font-semibold text-electric-blue sm:text-right">{entry.dates}</p>
            </div>
            <p className="mt-5 font-sans text-sm leading-7 text-deep-navy/72 md:text-base">{entry.description}</p>
            {entry.details?.length > 0 && (
              <div className="mt-5 space-y-3 border-t border-deep-navy/8 pt-5">
                {entry.details.map((detail) => (
                  <p key={detail} className="font-sans text-sm leading-7 text-deep-navy/68">{detail}</p>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}

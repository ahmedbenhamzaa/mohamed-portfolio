import { motion } from 'framer-motion';
import publicationsData from '../data/publications.json';
import AcademicOutputSection from '../components/publications/AcademicOutputSection';
import '../styles/publications.css';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function PublicationsPage() {
  const { page } = publicationsData;

  return (
    <main className="min-h-screen bg-white text-deep-navy">
      <section className="relative overflow-hidden bg-deep-navy px-5 py-28 text-white sm:px-6 lg:px-8 lg:py-36">
        <div className="absolute inset-0 publications-hero-texture" aria-hidden="true" />
        <motion.div
          className="relative mx-auto max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-electric-blue" variants={reveal}>
            {page.eyebrow}
          </motion.p>
          <motion.h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:max-w-4xl lg:text-7xl" variants={reveal}>
            {page.title}
          </motion.h1>
          <motion.p className="mt-7 max-w-3xl font-sans text-base leading-8 text-white/74 sm:text-lg" variants={reveal}>
            {page.subtitle}
          </motion.p>
        </motion.div>
      </section>

      <AcademicOutputSection data={publicationsData} />
    </main>
  );
}

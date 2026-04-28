import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function StrategyOverview({ overview }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
      <div>
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">
          {overview.eyebrow}
        </p>
        <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {overview.heading}
        </h2>
      </div>
      <div>
        <p className="font-sans text-base leading-8 text-mid-grey sm:text-lg">{overview.body}</p>
        <motion.div
          className="mt-7 grid gap-3 sm:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {overview.proofPoints.map((point) => (
            <motion.div
              key={point}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 font-sans text-sm leading-6 text-white/85"
            >
              {point}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

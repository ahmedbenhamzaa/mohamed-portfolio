import { motion } from "framer-motion";

export default function CapabilityStrip({ capabilities }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((capability, index) => (
        <motion.div
          key={capability.title}
          className="rounded-3xl border border-deep-navy/10 bg-white p-6 shadow-lg shadow-deep-navy/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ delay: index * 0.06, duration: 0.55 }}
        >
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-electric-blue">
            0{index + 1}
          </p>
          <h3 className="font-serif text-2xl font-bold text-deep-navy">{capability.title}</h3>
          <p className="mt-4 font-sans text-sm leading-7 text-slate-600">{capability.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

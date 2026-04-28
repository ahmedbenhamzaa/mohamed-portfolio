import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function ClientBlocks({ clients }) {
  return (
    <div>
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">Selected institutions</p>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">Advisory footprint</h2>
        <p className="mt-5 font-sans text-base leading-8 text-mid-grey">
          Client names are presented as restrained wordmarks for now. The structure is ready to switch to logo assets when approved brand files are available.
        </p>
      </div>

      <motion.div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={item}
            className="group min-h-32 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-electric-blue/40 hover:bg-white/[0.06]"
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <p className="font-sans text-base font-semibold leading-snug text-white">{client.name}</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-electric-blue/10 px-2.5 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.16em] text-electric-blue">
                  {client.region}
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-1 font-sans text-[0.62rem] font-medium text-mid-grey">
                  {client.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

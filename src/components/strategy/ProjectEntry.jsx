import { motion } from "framer-motion";
import RegionBadge from "./RegionBadge";

export default function ProjectEntry({ project }) {
  return (
    <motion.article
      className="group border-b border-deep-navy/10 py-7 first:pt-0 last:border-b-0 last:pb-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <RegionBadge region={project.region} />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{project.year}</span>
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-deep-navy transition-colors group-hover:text-electric-blue">
            {project.organization}
          </h3>
          <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            {project.projectType}
          </p>
        </div>

        <div>
          <p className="font-sans text-base leading-8 text-slate-700">{project.description}</p>
          {project.capabilities?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-deep-navy/10 bg-deep-navy/[0.03] px-3 py-1.5 font-sans text-xs font-medium text-slate-700"
                >
                  {capability}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

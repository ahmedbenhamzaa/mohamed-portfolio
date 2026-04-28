import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectEntry from "./ProjectEntry";

export default function StrategyTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const selected = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div>
      <div className="mb-8 overflow-x-auto border-b border-deep-navy/10 pb-2">
        <div className="flex min-w-max gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === selected.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4 py-2.5 font-sans text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "bg-deep-navy text-white"
                    : "bg-deep-navy/[0.04] text-slate-600 hover:bg-electric-blue/10 hover:text-electric-blue"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32 }}
          className="rounded-[2rem] border border-deep-navy/10 bg-white px-5 py-7 shadow-xl shadow-deep-navy/5 sm:px-8 lg:px-10"
        >
          <div className="mb-8 grid gap-4 border-b border-deep-navy/10 pb-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">{selected.label}</h2>
            <p className="font-sans text-base leading-8 text-slate-600">{selected.summary}</p>
          </div>

          <div>
            {selected.projects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

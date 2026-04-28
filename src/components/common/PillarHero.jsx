import { motion } from 'framer-motion';

const variants = {
  'dark-navy': 'bg-deep-navy',
  'mid-navy': 'bg-light-navy',
  gradient: 'bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.20),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(201,168,76,0.13),transparent_24%),linear-gradient(135deg,#0A1628_0%,#162035_58%,#0A1628_100%)]'
};

export default function PillarHero({ title, subtitle, breadcrumb, backgroundVariant = 'gradient', backgroundImage }) {
  return (
    <section className={`relative isolate min-h-[72vh] overflow-hidden ${variants[backgroundVariant] || variants.gradient} text-white`}>
      {backgroundImage ? (
        <div className="absolute inset-0 -z-10">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-deep-navy/75" />
        </div>
      ) : null}
      <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col justify-center px-5 py-28 sm:px-6 lg:px-8">
        <motion.p
          className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-electric-blue"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {breadcrumb}
        </motion.p>
        <motion.h1
          className="max-w-5xl font-serif text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-3xl font-sans text-base leading-8 text-white/72 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

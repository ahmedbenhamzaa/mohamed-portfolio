function assetHref(href = '') {
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return href;
  if (href.startsWith('/')) return `${import.meta.env.BASE_URL}${href.slice(1)}`;
  return href;
}

import { motion } from 'framer-motion';

const roleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.42,
    },
  },
};

const roleItem = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
  },
};

function scrollToPillars(event, href) {
  if (!href?.startsWith('#')) return;

  event.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HomeHero({ data }) {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden bg-[#0A1628] text-white">
      <div className="home-mesh-gradient" aria-hidden="true" />
      <div className="home-noise-texture" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#060E1A]/75 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-[min(100%-32px,1180px)] flex-col justify-center pb-24 pt-32 sm:w-[min(100%-40px,1180px)] lg:pb-28 lg:pt-40">
        <motion.div initial="hidden" animate="visible" className="max-w-5xl">
          {data.eyebrow ? (
            <motion.p
              variants={heroItem}
              className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#8B9BB4] sm:text-xs"
            >
              {data.eyebrow}
            </motion.p>
          ) : null}

          <motion.h1
            variants={heroItem}
            className="font-display text-[56px] font-bold leading-[0.86] tracking-[-0.055em] text-white sm:text-[74px] md:text-[96px] lg:text-[122px] xl:text-[138px]"
          >
            {data.name}
          </motion.h1>

          <motion.div variants={roleContainer} className="mt-8 space-y-2 sm:mt-10 sm:space-y-3">
            {data.roles.map((role) => (
              <motion.p
                key={role}
                variants={roleItem}
                className="max-w-4xl border-l border-[#2563EB]/70 pl-4 text-[18px] font-medium leading-7 text-[#C8D0DD] sm:text-[22px] md:text-[28px] md:leading-9"
              >
                {role}
              </motion.p>
            ))}
          </motion.div>

          {data.subtitle ? (
            <motion.p
              variants={heroItem}
              className="mt-8 max-w-3xl text-[17px] leading-8 text-[#8B9BB4] md:text-[19px] md:leading-9"
            >
              {data.subtitle}
            </motion.p>
          ) : null}

          <motion.div variants={heroItem} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={data.primaryCta.href}
              onClick={(event) => scrollToPillars(event, data.primaryCta.href)}
              className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
            >
              {data.primaryCta.label}
            </a>
            <a
              href={assetHref(data.secondaryCta.href)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
            >
              {data.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[#8B9BB4]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.28em]">{data.scrollIndicatorLabel}</span>
        <span className="relative h-10 w-[1px] overflow-hidden bg-white/15">
          <span className="home-scroll-line absolute left-0 top-0 h-4 w-[1px] bg-[#2563EB]" />
        </span>
      </motion.div>
    </section>
  );
}

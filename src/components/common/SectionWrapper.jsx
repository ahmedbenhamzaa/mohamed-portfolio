import { motion } from 'framer-motion';

const backgroundClasses = {
  dark: 'bg-deep-navy text-white',
  light: 'bg-white text-deep-navy',
  alt: 'bg-light-navy text-white',
  soft: 'bg-slate-50 text-deep-navy'
};

const paddingClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32'
};

export default function SectionWrapper({
  id,
  background = 'dark',
  paddingSize = 'md',
  className = '',
  children
}) {
  return (
    <motion.section
      id={id}
      className={`${backgroundClasses[background] || backgroundClasses.dark} ${paddingClasses[paddingSize] || paddingClasses.md} ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

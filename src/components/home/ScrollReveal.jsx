import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ScrollReveal({
  as: Component = motion.div,
  children,
  className = '',
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  return (
    <Component
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

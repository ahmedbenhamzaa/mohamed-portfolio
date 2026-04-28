import { motion } from 'framer-motion';

export default function DownloadCVBand({ download }) {
  return (
    <motion.div
      className="contact-download-band"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="contact-download-button" href={download.href} download>
        {download.label}
      </a>
    </motion.div>
  );
}

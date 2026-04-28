import { motion } from 'framer-motion';

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45Z" />
    </svg>
  );
}

function MailMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5 7 7 5.25L19 7" />
    </svg>
  );
}

export default function ContactInfo({ connect, identity, inquiryTypes }) {
  return (
    <div className="contact-info-panel">
      <motion.p
        className="contact-kicker"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.p>

      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05 }}
      >
        {connect.heading}
      </motion.h1>

      <motion.p
        className="contact-invitation"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
      >
        {connect.invitation}
      </motion.p>

      <motion.div
        className="contact-direct-links"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.18 }}
      >
        <a className="contact-direct-link" href={`mailto:${identity.email}`}>
          <MailMark />
          <span>{identity.email}</span>
        </a>
        <a className="contact-direct-link" href={identity.linkedin} target="_blank" rel="noreferrer">
          <LinkedInMark />
          <span>{connect.linkedinLabel}</span>
        </a>
      </motion.div>

      <motion.div
        className="contact-inquiry-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
      >
        {inquiryTypes.map((item) => (
          <div className="contact-inquiry-item" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm({ form }) {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(form.endpoint, {
        method: form.method || 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        formElement.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  const isSubmitting = status === 'submitting';

  return (
    <motion.form
      className="contact-form-card"
      action={form.endpoint}
      method={form.method || 'POST'}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="contact-form-heading">
        <p>Formspree</p>
        <h2>{form.heading}</h2>
        <span>{form.subtext}</span>
      </div>

      <label className="contact-field">
        <span>{form.fields.name.label}</span>
        <input name="name" type="text" placeholder={form.fields.name.placeholder} required />
      </label>

      <label className="contact-field">
        <span>{form.fields.email.label}</span>
        <input name="email" type="email" placeholder={form.fields.email.placeholder} required />
      </label>

      <label className="contact-field">
        <span>{form.fields.message.label}</span>
        <textarea name="message" rows="7" placeholder={form.fields.message.placeholder} required />
      </label>

      <input type="hidden" name="_subject" value="New portfolio contact inquiry for Mohamed Falfoul" />

      <button className="contact-submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : form.buttonLabel}
      </button>

      <div className="contact-status" aria-live="polite">
        {status === 'success' && <p className="is-success">{form.successMessage}</p>}
        {status === 'error' && <p className="is-error">{form.errorMessage}</p>}
      </div>
    </motion.form>
  );
}

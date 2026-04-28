import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import DownloadCVBand from './DownloadCVBand';

export default function ContactSection({ data }) {
  return (
    <section className="contact-page-shell" aria-labelledby="contact-page-title">
      <div className="contact-noise" aria-hidden="true" />
      <div className="contact-container">
        <div className="contact-grid">
          <ContactInfo connect={data.connect} identity={data.identity} inquiryTypes={data.inquiryTypes} />
          <ContactForm form={data.form} />
        </div>
        <DownloadCVBand download={data.download} />
      </div>
    </section>
  );
}

import contactData from '../data/contact.json';
import ContactSection from '../components/contact/ContactSection';
import '../styles/contact.css';

export default function ContactPage() {
  return <ContactSection data={contactData} />;
}

import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const sizeClasses = {
  tall: 'h-[430px]',
  wide: 'h-[280px]',
  standard: 'h-[340px]'
};

export default function PhotoMasonry({ items }) {
  return (
    <SectionWrapper background="dark" paddingSize="lg" className="speaking-photo-stage">
      <SectionHeading
        eyebrow="Photos"
        title="A visual press wall for speaking, facilitation, and representation."
        text="Replace the placeholder media paths with final event photography in /public/media. Captions are managed in speaking.json."
        inverse
      />
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.035} className="mb-4 break-inside-avoid">
            <figure className="group relative overflow-hidden border border-white/10 bg-light-navy shadow-2xl shadow-black/20">
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover opacity-80 grayscale transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0 ${sizeClasses[item.size] || sizeClasses.standard}`}
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-deep-navy via-deep-navy/62 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="translate-y-2 font-sans text-sm font-medium leading-6 text-white transition duration-300 group-hover:translate-y-0">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

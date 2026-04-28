import SectionWrapper from '../common/SectionWrapper';
import ClinicalTimeline from './ClinicalTimeline';

export default function ClinicalPathwaySection({ data }) {
  return (
    <SectionWrapper background="light" paddingSize="lg">
      <div className="mb-12 max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-electric-blue">Clinical pathway</p>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-[-0.03em] text-deep-navy md:text-5xl">{data.sectionTitle}</h2>
        <p className="mt-5 font-sans text-base leading-8 text-mid-grey">{data.sectionIntro}</p>
      </div>
      <ClinicalTimeline entries={data.entries} />
    </SectionWrapper>
  );
}

import PillarHero from '../components/common/PillarHero';
import SectionWrapper from '../components/common/SectionWrapper';
import CTABlock from '../components/common/CTABlock';
import {
  AcademicActivitySection,
  ClinicalExposureSection,
  ClinicalPathwaySection,
  ContinuingTrainingSection,
  MedicalEducationSection,
  PsychiatryOverview
} from '../components/psychiatry';
import psychiatry from '../data/psychiatry.json';

export default function PsychiatryPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <PillarHero
        breadcrumb={psychiatry.pageHero.breadcrumb}
        title={psychiatry.pageHero.title}
        subtitle={psychiatry.pageHero.subtitle}
        backgroundVariant={psychiatry.pageHero.backgroundVariant}
      />

      <PsychiatryOverview overview={psychiatry.overview} />
      <ClinicalPathwaySection data={psychiatry.clinicalPathway} />
      <ClinicalExposureSection data={psychiatry.clinicalExposure} />
      <AcademicActivitySection data={psychiatry.academicActivity} />
      <MedicalEducationSection data={psychiatry.medicalEducation} />
      <ContinuingTrainingSection data={psychiatry.continuingTraining} />

      <SectionWrapper background="dark" paddingSize="md">
        <CTABlock
          heading={psychiatry.cta.heading}
          subtext={psychiatry.cta.subtext}
          buttonLabel={psychiatry.cta.buttonLabel}
          buttonHref={psychiatry.cta.buttonHref}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}

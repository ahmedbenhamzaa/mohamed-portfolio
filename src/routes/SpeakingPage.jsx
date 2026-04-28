import PillarHero from '../components/common/PillarHero';
import CTABlock from '../components/common/CTABlock';
import SectionWrapper from '../components/common/SectionWrapper';
import SpeakingIntro from '../components/speaking/SpeakingIntro';
import SignatureTopics from '../components/speaking/SignatureTopics';
import SpeakingEngagements from '../components/speaking/SpeakingEngagements';
import PhotoMasonry from '../components/speaking/PhotoMasonry';
import VideoShowcase from '../components/speaking/VideoShowcase';
import SpeakingFormats from '../components/speaking/SpeakingFormats';
import speaking from '../data/speaking.json';
import '../styles/speaking.css';

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <PillarHero
        title={speaking.pageHero.title}
        subtitle={speaking.pageHero.subtitle}
        breadcrumb={speaking.pageHero.breadcrumb}
        backgroundVariant={speaking.pageHero.backgroundVariant}
      />

      <SpeakingIntro data={speaking.intro} />
      <SignatureTopics items={speaking.signatureTopics} />
      <SpeakingEngagements items={speaking.engagements} />
      <PhotoMasonry items={speaking.photos} />
      <VideoShowcase items={speaking.videos} />
      <SpeakingFormats items={speaking.formats} />

      <SectionWrapper background="dark" paddingSize="lg" className="speaking-press-bg">
        <CTABlock
          heading={speaking.cta.heading}
          subtext={speaking.cta.subtext}
          buttonLabel={speaking.cta.buttonLabel}
          buttonHref={speaking.cta.buttonHref}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}

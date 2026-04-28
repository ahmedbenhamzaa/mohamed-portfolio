import PillarHero from '../components/common/PillarHero';
import CTABlock from '../components/common/CTABlock';
import SectionWrapper from '../components/common/SectionWrapper';
import LeadershipIntro from '../components/leadership/LeadershipIntro';
import LeadershipTimeline from '../components/leadership/LeadershipTimeline';
import InternationalSpeakingGrid from '../components/leadership/InternationalSpeakingGrid';
import AdvocacyCampaignsList from '../components/leadership/AdvocacyCampaignsList';
import PolicyContributionsList from '../components/leadership/PolicyContributionsList';
import AwardsRecognitionGrid from '../components/leadership/AwardsRecognitionGrid';
import leadership from '../data/leadership.json';
import '../styles/leadership.css';

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <PillarHero
        title={leadership.pageHero.title}
        subtitle={leadership.pageHero.subtitle}
        breadcrumb={leadership.pageHero.breadcrumb}
        backgroundVariant={leadership.pageHero.backgroundVariant}
      />

      <LeadershipIntro data={leadership.intro} />
      <LeadershipTimeline items={leadership.leadershipRoles} />
      <InternationalSpeakingGrid items={leadership.internationalSpeaking} />
      <AdvocacyCampaignsList items={leadership.advocacyCampaigns} />
      <PolicyContributionsList items={leadership.policyStrategyContributions} />
      <AwardsRecognitionGrid items={leadership.awardsRecognition} />

      <SectionWrapper background="dark" paddingSize="lg">
        <CTABlock
          heading={leadership.cta.heading}
          subtext={leadership.cta.subtext}
          buttonLabel={leadership.cta.buttonLabel}
          buttonHref={leadership.cta.buttonHref}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}

import { CTABlock } from '../components/index.js';
import AudiencePathways from '../components/home/AudiencePathways.jsx';
import FeaturedHighlights from '../components/home/FeaturedHighlights.jsx';
import FourPillarNavigation from '../components/home/FourPillarNavigation.jsx';
import HomeHero from '../components/home/HomeHero.jsx';
import ProfessionalPositioning from '../components/home/ProfessionalPositioning.jsx';
import SignatureMetrics from '../components/home/SignatureMetrics.jsx';
import homeData from '../data/home.json';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1628] font-body text-white">
      <main>
        <HomeHero data={homeData.hero} />
        <ProfessionalPositioning data={homeData.intro} />
        <SignatureMetrics data={homeData.metrics} />
        <FourPillarNavigation data={homeData.pillars} />
        <FeaturedHighlights data={homeData.featuredHighlights} />
        <AudiencePathways data={homeData.audiencePathways} />
        <CTABlock
          heading={homeData.cta.heading}
          subtext={homeData.cta.subtext}
          buttonLabel={homeData.cta.buttonLabel}
          buttonHref={homeData.cta.buttonHref}
          secondaryButtonLabel={homeData.cta.secondaryButtonLabel}
          secondaryButtonHref={homeData.cta.secondaryButtonHref}
          variant="dark"
          eyebrow="Work together"
        />
      </main>
    </div>
  );
}

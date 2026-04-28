import PillarHero from "../components/common/PillarHero";
import SectionWrapper from "../components/common/SectionWrapper";
import CTABlock from "../components/common/CTABlock";
import StatsBanner from "../components/training/StatsBanner";
import CoreTrainingAreas from "../components/training/CoreTrainingAreas";
import FeaturedHighlights from "../components/training/FeaturedHighlights";
import TrainingPortfolio from "../components/training/TrainingPortfolio";
import ClientWall from "../components/training/ClientWall";
import trainingData from "../data/training.json";
import "../styles/training.css";

export default function TrainingPage() {
  const {
    pageHero,
    stats,
    supportingMetrics,
    coreTrainingAreas,
    featuredHighlights,
    portfolio,
    portfolioFilters,
    clientWall,
    cta,
  } = trainingData;

  return (
    <main className="min-h-screen bg-[#0A1628] font-sans">
      <PillarHero
        title={pageHero.title}
        subtitle={pageHero.subtitle}
        breadcrumb={pageHero.breadcrumb}
        backgroundVariant={pageHero.backgroundVariant}
      />

      <SectionWrapper background="dark" paddingSize="md">
        <StatsBanner stats={stats} supportingMetrics={supportingMetrics} />
      </SectionWrapper>

      <SectionWrapper background="alt" paddingSize="md">
        <CoreTrainingAreas areas={coreTrainingAreas} />
      </SectionWrapper>

      <SectionWrapper background="light" paddingSize="lg">
        <FeaturedHighlights highlights={featuredHighlights} />
      </SectionWrapper>

      <SectionWrapper background="dark" paddingSize="lg">
        <TrainingPortfolio items={portfolio} filters={portfolioFilters} />
      </SectionWrapper>

      <SectionWrapper background="light" paddingSize="lg">
        <ClientWall clients={clientWall} />
      </SectionWrapper>

      <SectionWrapper background="dark" paddingSize="md">
        <CTABlock {...cta} />
      </SectionWrapper>
    </main>
  );
}

import PillarHero from "../components/common/PillarHero";
import SectionWrapper from "../components/common/SectionWrapper";
import CTABlock from "../components/common/CTABlock";
import StrategyOverview from "../components/strategy/StrategyOverview";
import StrategyTabs from "../components/strategy/StrategyTabs";
import ClientBlocks from "../components/strategy/ClientBlocks";
import CapabilityStrip from "../components/strategy/CapabilityStrip";
import strategy from "../data/strategy.json";
import "../styles/strategy.css";

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <PillarHero
        title={strategy.pageHero.title}
        subtitle={strategy.pageHero.subtitle}
        breadcrumb={strategy.pageHero.breadcrumb}
        backgroundVariant={strategy.pageHero.backgroundVariant}
      />

      <SectionWrapper background="dark" paddingSize="lg" className="strategy-mesh-section">
        <StrategyOverview overview={strategy.overview} />
      </SectionWrapper>

      <SectionWrapper background="ivory" paddingSize="lg">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">
            Consulting portfolio
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            Three advisory lanes, one systems mindset.
          </h2>
          <p className="mt-5 font-sans text-base leading-8 text-slate-600">
            Explore the work by strategic lane. Each entry is intentionally compact: organization, mandate type, year, region, and the core institutional problem addressed.
          </p>
        </div>
        <StrategyTabs tabs={strategy.tabs} />
      </SectionWrapper>

      <SectionWrapper background="light" paddingSize="lg">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">
            Capability model
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            What the advisory work repeatedly solves.
          </h2>
        </div>
        <CapabilityStrip capabilities={strategy.capabilities} />
      </SectionWrapper>

      <SectionWrapper background="alt" paddingSize="lg">
        <ClientBlocks clients={strategy.clients} />
      </SectionWrapper>

      <SectionWrapper background="dark" paddingSize="md">
        <CTABlock {...strategy.cta} />
      </SectionWrapper>
    </main>
  );
}

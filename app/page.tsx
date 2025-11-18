import { HeroScrollDemo } from "./components/hero";
import { Navbar } from "./components/mini-navbar";
import { ProblemSection } from "./components/problem-section";
import { SocialProof } from "./components/social-proof";
import { StepsSection } from "./components/steps-section";
import { ReportFeaturesSection } from "./components/report-features-section";
import { DemoSection } from "./components/demo-section";
import { PricingSection } from "./components/pricing-section";
import { FAQSection } from "./components/faq-section";
import { FinalCTASection } from "./components/final-cta-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <Navbar />
      <HeroScrollDemo />
      <SocialProof />
      <ProblemSection />
      <StepsSection />
      <ReportFeaturesSection />
      <DemoSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

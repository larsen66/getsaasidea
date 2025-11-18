import { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroScrollDemo } from "./components/hero";
import { Navbar } from "./components/mini-navbar";

// Ленивая загрузка компонентов ниже сгиба для оптимизации первоначальной загрузки
const SocialProof = dynamic(() => import("./components/social-proof").then(mod => ({ default: mod.SocialProof })), {
  loading: () => null,
});

const ProblemSection = dynamic(() => import("./components/problem-section").then(mod => ({ default: mod.ProblemSection })), {
  loading: () => null,
});

const StepsSection = dynamic(() => import("./components/steps-section").then(mod => ({ default: mod.StepsSection })), {
  loading: () => null,
});

const ReportFeaturesSection = dynamic(() => import("./components/report-features-section").then(mod => ({ default: mod.ReportFeaturesSection })), {
  loading: () => null,
});

const DemoSection = dynamic(() => import("./components/demo-section").then(mod => ({ default: mod.DemoSection })), {
  loading: () => null,
});

const PricingSection = dynamic(() => import("./components/pricing-section").then(mod => ({ default: mod.PricingSection })), {
  loading: () => null,
});

const FAQSection = dynamic(() => import("./components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => null,
});

const FinalCTASection = dynamic(() => import("./components/final-cta-section").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => null,
});

const Footer = dynamic(() => import("./components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <Navbar />
      <HeroScrollDemo />
      <Suspense fallback={null}>
        <SocialProof />
        <ProblemSection />
        <StepsSection />
        <ReportFeaturesSection />
        <DemoSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </Suspense>
    </div>
  );
}

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <DemoSection />
      <PricingSection />
      <TrustSection />
      <FAQSection />
      <CTAFinalSection />
    </Layout>
  );
};

export default Index;

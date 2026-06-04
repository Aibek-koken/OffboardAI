import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ComparisonSection from "@/components/sections/comparison-section";
import CtaSection from "@/components/sections/cta-section";
import HeroSection from "@/components/sections/hero-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import PainSection from "@/components/sections/pain-section";
import PassportSection from "@/components/sections/passport-section";
import PricingSection from "@/components/sections/pricing-section";
import SecuritySection from "@/components/sections/security-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <ComparisonSection />
        <HowItWorksSection />
        <PassportSection />
        <SecuritySection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

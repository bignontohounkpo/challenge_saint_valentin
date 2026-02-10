import FloatingHearts from "@/components/FloatingHeart";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import ReassuranceSection from "@/components/ReassurancesSection";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTA from "@/components/Finalcte";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingHearts />
      <div className="pt-20">
        <HeroSection />
        <WhySection />
        <ProductSection />
        <BenefitsSection />
        <PricingSection />
        <ReassuranceSection />
        <ReviewsSection />
        <FinalCTA />
      </div>
    </div>
  );
}

export default App;

import BgGradient from "@/components/common/bgGradient";
import HeroSection from "@/components/home/heroSection";
import DemoSection from "@/components/home/demoSection";
import HowItWorksSection from "@/components/home/howItWorksSection";
import PricingSection from "@/components/home/pricingSection";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BgGradient />
      <div className="flex flex-col ">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
      </div>
    </div>
  );
}

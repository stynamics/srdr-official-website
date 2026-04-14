import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <WhyChooseUsSection />
      <ServicesGridSection />
    </>
  );
}

import { AdditionalFeaturesSection } from "./sections/AdditionalFeaturesSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CommunitySection } from "./sections/CommunitySection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FeaturesWrapperSection } from "./sections/FeaturesWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MissionStatementSection } from "./sections/MissionStatementSection";
import { WhyChooseMesdoSection } from "./sections/WhyChooseMesdoSection";
import { Header } from "../../components/Header";

export const LandingPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <Header />
      <div className="bg-white w-full max-w-[1440px] pt-16">
        <div className="flex flex-col w-full">
          <HeroSection />
          <MissionStatementSection />
          <BenefitsSection />
          <BackgroundSection />
          <AdditionalFeaturesSection />
          <WhyChooseMesdoSection />
          <CommunitySection />
          <FeaturesSection />
          <FeaturesWrapperSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

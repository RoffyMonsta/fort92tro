import { FC } from "react";
import { Header } from "../../features/Header";
import { Footer } from "../../features/Footer";
import "./styles.scss";
import { RecruitmentSection } from "../../features/RecruitmentSection";
import { HeroSection } from "../../features/HeroSection/HeroSection";
import { AboutUsSection } from "../../features/AboutUsSection/AboutUsSection";
import { PathSection } from "../../features/PathSection/PathSection";
import { WhyUsSection } from "../../features/WhyUsSection/WhyUsSection";
import { FacebookNewsSection } from "../../features/FacebookNewsSection";
import { HowToJoinSection } from "../../features/HowToJoinSection";
import { SliderSection } from "../../features/SliderSection/SliderSection";
import { PositionsSection } from "../../features/PositionsSection";
import { InterviewSliderSection } from "../../features/InterviewSliderSection";
import { FaqSection } from "../../features/FaqSection/FaqSection";
import { SupportSection } from "../../features/SupportSection/SupportSection";
export const Page: FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
        <PathSection />
        <WhyUsSection />
        <HowToJoinSection />
        {/* < FacebookNewsSection /> */}
        <RecruitmentSection />
        <SliderSection />
        <PositionsSection />
        <InterviewSliderSection />
        <FaqSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
};

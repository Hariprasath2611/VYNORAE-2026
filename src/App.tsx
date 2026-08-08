import React from "react";
import { BackgroundMedia } from "./components/BackgroundMedia";
import { SparksCanvas } from "./components/SparksCanvas";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventDetails } from "./components/EventDetails";
import { AboutSection } from "./components/AboutSection";
import { PrizesSection } from "./components/PrizesSection";
import { ThemesCarouselSection } from "./components/ThemesCarousel";
import { EligibilitySection } from "./components/EligibilitySection";
import { TimelineSection } from "./components/TimelineSection";
import { RulesSection } from "./components/RulesSection";
import { JudgingDashboard } from "./components/JudgingDashboard";
import { CoordinatorsSection } from "./components/CoordinatorsSection";
import { JudgesSection } from "./components/JudgesSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export const App: React.FC = () => {
  return (
    <>
      <BackgroundMedia />
      <SparksCanvas />

      <div className="app-container">
        <Navbar />
        <Hero />
        <EventDetails />
        <AboutSection />
        <PrizesSection />
        <ThemesCarouselSection />
        <EligibilitySection />
        <TimelineSection />
        <RulesSection />
        <JudgingDashboard />
        <CoordinatorsSection />
        <JudgesSection />
        <SponsorsSection />
        <FaqSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;

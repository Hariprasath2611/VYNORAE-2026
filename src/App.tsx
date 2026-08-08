import React, { useEffect } from "react";
import Lenis from "lenis";
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
  useEffect(() => {
    // Initialize Lenis Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    lenis.on("scroll", (e: { velocity: number }) => {
      (window as any).__lenisVelocity = e.velocity;
    });

    let rafId: number;

    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const aosElements = Array.from(document.querySelectorAll<HTMLElement>("[data-aos]"));

    const raf = (time: number) => {
      lenis.raf(time);

      const scrollY = lenis.scroll;
      const windowHeight = window.innerHeight;

      // 1. Parallax smooth translate loop
      for (let i = 0; i < parallaxElements.length; i++) {
        const el = parallaxElements[i];
        const factor = parseFloat(el.getAttribute("data-parallax") || "0.2");
        el.style.transform = `translate3d(0, ${scrollY * factor}px, 0)`;
      }

      // 2. Lenis-driven real-time Scroll Reveal trigger loop
      for (let i = 0; i < aosElements.length; i++) {
        const el = aosElements[i];
        if (!el.classList.contains("aos-animate")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight * 0.88) {
            el.classList.add("aos-animate");
          }
        }
      }

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BackgroundMedia />
      <SparksCanvas />

      <div className="app-container">
        <Navbar />
        <Hero />

        <div data-aos="fade-up" data-parallax="-0.03">
          <EventDetails />
        </div>

        <div data-aos="fade-up">
          <AboutSection />
        </div>

        <div data-aos="fade-up">
          <PrizesSection />
        </div>

        <div data-aos="fade-up">
          <ThemesCarouselSection />
        </div>

        <div data-aos="fade-up">
          <EligibilitySection />
        </div>

        <div data-aos="fade-up">
          <TimelineSection />
        </div>

        <div data-aos="fade-up">
          <RulesSection />
        </div>

        <div data-aos="fade-up">
          <JudgingDashboard />
        </div>

        <div data-aos="fade-up">
          <CoordinatorsSection />
        </div>

        <div data-aos="fade-up">
          <JudgesSection />
        </div>

        <div data-aos="fade-up">
          <SponsorsSection />
        </div>

        <div data-aos="fade-up">
          <FaqSection />
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;

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
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);

      // Update Parallax Elements on each scroll frame
      const scrollY = lenis.scroll;
      const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
      parallaxElements.forEach((el) => {
        const factor = parseFloat(el.getAttribute("data-parallax") || "0.2");
        el.style.transform = `translate3d(0, ${scrollY * factor}px, 0)`;
      });

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Initialize IntersectionObserver for AOS
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <BackgroundMedia />
      <SparksCanvas />

      <div className="app-container">
        <Navbar />
        <Hero />

        <div data-aos="fade-up" data-parallax="-0.04">
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

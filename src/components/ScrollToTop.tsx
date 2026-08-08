import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ChevronUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const isScrolled = useScrollPosition(300);

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="floating-controls">
      <button
        className={`scroll-top-btn ${isScrolled ? "visible" : ""}`}
        id="scrollTopBtn"
        aria-label="Scroll to Hero Top"
        onClick={scrollToHero}
      >
        <div className="scroll-btn-halo" />
        <ChevronUp className="scroll-btn-svg" size={22} strokeWidth={2.5} />
      </button>
    </footer>
  );
};

import React from "react";
import { CoverflowCarousel } from "./CoverflowCarousel";
import { THEME_SLIDES } from "@/data/themes";

export const ThemesCarouselSection: React.FC = () => {
  return (
    <section className="themes-section" id="themes-section">
      <div className="section-bg-video-container">
        <video autoPlay muted loop playsInline className="section-bg-video lazy-video">
          <source src="video/themes_eventtimeline_mentorsession.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">THEMES & PROBLEM DOMAINS</h2>
        <p className="section-tagline">
          Build solutions in one of the following emerging technology domains.
        </p>
      </div>

      <div id="themes-carousel-root">
        <div style={{ padding: "0 0 32px 0" }}>
          <CoverflowCarousel
            slides={THEME_SLIDES}
            label="Hackathon Themes"
            cardWidth="clamp(180px, 26vw, 300px)"
            rotate={42}
            depth={0.55}
            fade={0.12}
            showCaption={false}
            showNavigation
            showPagination
          />
        </div>
      </div>
    </section>
  );
};

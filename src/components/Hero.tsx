import React from "react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer();

  const handleScrollDown = () => {
    const detailsSection = document.getElementById("details");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="hero-section" id="hero">
      <div className="hero-center-title">
        <div className="hero-intro-wrapper">
          <h1 className="elegant-title">VYNORAE 2026</h1>
          <p className="hero-subtitle">
            National Hackathon on Emerging Technologies — Build. Innovate. Transform the Future.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfx5xMtDgCjkekUJVITgYe1TF6gbsJ4MYRFrxPyR1BGwYvCRw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-primary"
            id="heroCtaBtn"
          >
            REGISTER NOW
          </a>
          <p className="cta-tagline">
            <span className="cta-tagline-highlight">* Note:</span> Shortlisted teams are required to pay a registration fee of ₹300
          </p>
        </div>
      </div>

      {/* Cyber HUD Countdown Console */}
      <div className="cyber-hud-console">
        {/* HUD Frame Decorative Reticles */}
        <div className="hud-corner-bracket top-left-bracket" />
        <div className="hud-corner-bracket top-right-bracket" />
        <div className="hud-corner-bracket bottom-left-bracket" />
        <div className="hud-corner-bracket bottom-right-bracket" />

        {/* Timer Digits Grid */}
        <div className="hud-timer-grid">
          {/* Days */}
          <div className="hud-unit-card">
            <div className="hud-card-top-bar" />
            <div className="hud-digit-box">
              <span id="timerDays">{days}</span>
            </div>
            <span className="hud-unit-label">DAYS</span>
          </div>

          <div className="hud-colon-wrap">
            <span className="hud-colon">:</span>
          </div>

          {/* Hours */}
          <div className="hud-unit-card">
            <div className="hud-card-top-bar" />
            <div className="hud-digit-box">
              <span id="timerHours">{hours}</span>
            </div>
            <span className="hud-unit-label">HOURS</span>
          </div>

          <div className="hud-colon-wrap">
            <span className="hud-colon">:</span>
          </div>

          {/* Minutes */}
          <div className="hud-unit-card">
            <div className="hud-card-top-bar" />
            <div className="hud-digit-box">
              <span id="timerMinutes">{minutes}</span>
            </div>
            <span className="hud-unit-label">MINUTES</span>
          </div>

          <div className="hud-colon-wrap">
            <span className="hud-colon">:</span>
          </div>

          {/* Seconds */}
          <div className="hud-unit-card">
            <div className="hud-card-top-bar" />
            <div className="hud-digit-box">
              <span id="timerSeconds">{seconds}</span>
            </div>
            <span className="hud-unit-label">SECONDS</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" id="scrollDownBtn" onClick={handleScrollDown}>
        <span>SCROLL DOWN</span>
        <ChevronDown className="chevron-down" size={20} />
      </div>
    </main>
  );
};

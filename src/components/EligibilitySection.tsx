import React from "react";

export const EligibilitySection: React.FC = () => {
  return (
    <section className="eligibility-section" id="eligibility">
      <div className="section-bg-video-container">
        <video autoPlay muted loop playsInline className="section-bg-video lazy-video">
          <source src="video/eligibilyandrulesandguideliness.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">ELIGIBILITY & RULES</h2>
        <p className="section-tagline">
          Confirm your team status and parameters before registration.
        </p>
      </div>

      <div className="eligibility-grid">
        {/* Left HUD Panel: Team Formation */}
        <div className="rules-panel">
          <div className="rules-header-block">
            <div className="rules-header-text">
              <span className="hud-tag">FORMATION RULES</span>
              <h3 className="rules-title">Crew Configuration</h3>
            </div>
            <div className="hud-scanner-container">
              <div className="hud-scanner-grid" />
              <div className="hud-scanner-ring" />
              <div className="hud-scanner-line" />
            </div>
          </div>

          <div className="rules-list">
            <div className="rule-item">
              <span className="rule-label">REGISTRATION_TYPE</span>
              <div className="rule-value-badge">
                <span className="badge-status-dot" />
                <span className="rule-value">Team Registration Only</span>
              </div>
            </div>
            <div className="rule-divider" />
            <div className="rule-item">
              <span className="rule-label">CREW_LIMIT_VAL</span>
              <div className="rule-value-badge">
                <span className="badge-status-dot" />
                <span className="rule-value">2 to 4 Members</span>
              </div>
            </div>
          </div>

          <div className="rules-visual">
            <div className="visual-dots">
              <span className="dot active" />
              <span className="dot active" />
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="visual-label">COMPOSITION TELEMETRY</span>
          </div>
        </div>

        {/* Right Badges Grid: Eligible Groups */}
        <div className="badges-grid">
          <div className="eligibility-badge">
            <span className="badge-code">TARGET // 01</span>
            <h4 className="badge-title">UG Engineering Students</h4>
            <p className="badge-desc">
              Undergraduate engineering, technology, and science students from any recognized institution.
            </p>
          </div>

          <div className="eligibility-badge">
            <span className="badge-code">TARGET // 02</span>
            <h4 className="badge-title">First-Year Welcome</h4>
            <p className="badge-desc">
              First-year students are encouraged to join and gain hands-on hackathon experience.
            </p>
          </div>

          <div className="eligibility-badge">
            <span className="badge-code">TARGET // 03</span>
            <h4 className="badge-title">Team Size: 2–4</h4>
            <p className="badge-desc">
              Teams must consist of 2 to 4 members. Solo participation is not permitted.
            </p>
          </div>

          <div className="eligibility-badge">
            <span className="badge-code">TARGET // 04</span>
            <h4 className="badge-title">Registration Fee</h4>
            <p className="badge-desc">
              ₹300 per team, covering refreshments and lab costs throughout the 24-hour event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

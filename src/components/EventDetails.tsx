import React from "react";

export const EventDetails: React.FC = () => {
  return (
    <section className="details-section" id="details">
      <div className="section-bg-video-container">
        <video autoPlay muted loop playsInline className="section-bg-video lazy-video">
          <source src="video/eventandsponsersection.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">EVENT DETAILS</h2>
      </div>

      <div className="hud-grid">
        {/* Cell 1: Hackathon */}
        <div className="hud-cell">
          <span className="hud-label">01 / HACKATHON</span>
          <span className="hud-value">VYNORAE 2026</span>
        </div>
        {/* Cell 2: Theme */}
        <div className="hud-cell">
          <span className="hud-label">02 / DOMAIN</span>
          <span className="hud-value">Emerging Technologies</span>
        </div>
        {/* Cell 3: Date & Time */}
        <div className="hud-cell">
          <span className="hud-label">03 / DATE & TIME</span>
          <span className="hud-value">Aug 21–22, 08:00 AM</span>
        </div>
        {/* Cell 4: Venue */}
        <div className="hud-cell">
          <span className="hud-label">04 / VENUE</span>
          <span className="hud-value">Auditorium, Jaya Engineering College</span>
        </div>
        {/* Cell 5: Duration */}
        <div className="hud-cell">
          <span className="hud-label">05 / DURATION</span>
          <span className="hud-value">24 Hours</span>
        </div>
        {/* Cell 6: Stats */}
        <div className="hud-cell stats-cell">
          <span className="hud-label">06 / TELEMETRY STATS</span>
          <div className="hud-stats-row">
            <div className="hud-stat-item">
              <span className="hud-stat-number">60+</span>
              <span className="hud-stat-label">TEAMS TARGET</span>
            </div>
            <div className="hud-stat-divider" />
            <div className="hud-stat-item">
              <span className="hud-stat-number">₹35K</span>
              <span className="hud-stat-label">PRIZE POOL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { EVENT_COORDINATORS, EVENT_SECRETARIES } from "@/data/coordinators";

export const CoordinatorsSection: React.FC = () => {
  return (
    <div className="team-combined-section">
      <div className="section-bg-video-container">
        <video autoPlay muted loop playsInline className="section-bg-video lazy-video">
          <source src="video/themes_eventtimeline_mentorsession.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      {/* Event Coordinators Section */}
      <section className="mentor-sessions-section" id="coordinators">
        <div className="details-header-wrapper">
          <h2 className="details-header">EVENT COORDINATORS</h2>
          <p className="section-tagline">
            Connect with student and event coordinators across technical tracks, logistics, design, and operations throughout VYNORAE 2026.
          </p>
        </div>

        <div className="mentors-grid">
          {EVENT_COORDINATORS.map((coordinator) => (
            <div key={coordinator.id} className="mentor-card">
              <div className="mentor-card-header">
                <span className="mentor-tag">COORDINATOR {coordinator.id}</span>
              </div>
              <div className="mentor-profile">
                <div className="mentor-avatar-frame">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={coordinator.avatar}
                    alt={coordinator.name}
                    className="mentor-avatar"
                  />
                  <div className="mentor-avatar-glow" />
                </div>
                <div className="mentor-info">
                  <h3 className="mentor-title">{coordinator.name}</h3>
                  <span className="mentor-role">{coordinator.role}</span>
                </div>
              </div>
              <p className="mentor-desc">{coordinator.desc}</p>
              <div className="mentor-meta">
                {coordinator.contact && (
                  <div className="meta-row">
                    <span className="meta-label">CONTACT:</span>
                    <span className="meta-value">{coordinator.contact}</span>
                  </div>
                )}
                {coordinator.email && (
                  <div className="meta-row">
                    <span className="meta-label">EMAIL:</span>
                    <span className="meta-value">{coordinator.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Secretary Section */}
      <section className="mentor-sessions-section" id="secretaries">
        <div className="details-header-wrapper">
          <h2 className="details-header">EVENT SECRETARIES</h2>
          <p className="section-tagline">
            Connect with the student Event Secretaries of VYNORAE 2026 for general inquiries and support.
          </p>
        </div>

        <div className="mentors-grid">
          {EVENT_SECRETARIES.map((secretary) => (
            <div key={secretary.id} className="mentor-card">
              <div className="mentor-card-header">
                <span className="mentor-tag">SECRETARY {secretary.id}</span>
              </div>
              <div className="mentor-profile">
                <div className="mentor-avatar-frame">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={secretary.avatar}
                    alt={secretary.name}
                    className="mentor-avatar"
                  />
                  <div className="mentor-avatar-glow" />
                </div>
                <div className="mentor-info">
                  <h3 className="mentor-title">{secretary.name}</h3>
                  <span className="mentor-role">{secretary.role}</span>
                </div>
              </div>
              <p className="mentor-desc">{secretary.desc}</p>
              {(secretary.contact || secretary.email) && (
                <div className="mentor-meta">
                  {secretary.contact && (
                    <div className="meta-row">
                      <span className="meta-label">CONTACT:</span>
                      <span className="meta-value">{secretary.contact}</span>
                    </div>
                  )}
                  {secretary.email && (
                    <div className="meta-row">
                      <span className="meta-label">EMAIL:</span>
                      <span className="meta-value">{secretary.email}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

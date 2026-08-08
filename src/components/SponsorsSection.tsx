import React from "react";
import { SPONSOR_LOGOS, COMMUNITY_SPONSORS } from "@/data/sponsors";

export const SponsorsSection: React.FC = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <div className="section-bg-video-container">
        <video autoPlay muted loop playsInline className="section-bg-video lazy-video">
          <source src="video/eventandsponsersection.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">PLATINUM SPONSOR</h2>
        <p className="section-tagline">
          We are proud to present our Platinum Sponsor for VYNORAE 2026.
        </p>
      </div>

      {/* Auto-scrolling logo strip */}
      <div className="logo-strip-container">
        <div className="logo-strip-track">
          {[1, 2, 3, 4].flatMap((setIdx) =>
            SPONSOR_LOGOS.map((logo, idx) => (
              <div key={`${setIdx}-${idx}`} className="logo-badge-item">
                <img src={logo.src} alt={logo.alt} className="strip-logo-img" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Centered Platinum Sponsor Card */}
      <div className="platinum-sponsor-container">
        <div className="platinum-card">
          <div className="card-bg-grid" />
          <div className="owner-photo-frame">
            <img
              loading="lazy"
              decoding="async"
              src="images/krv_owner.webp"
              alt="KRV Group Owner"
              className="owner-photo"
            />
            <div className="owner-photo-glow" />
          </div>
          <p className="platinum-desc">
            KRV Group is a diversified business group with a strong presence in logistics, transportation, warehousing, fleet, and automobile services. The group focuses on delivering reliable and efficient business solutions across its operations.
          </p>
          <div className="krv-logo-frame">
            <img
              loading="lazy"
              decoding="async"
              src="images/krv_logo.webp"
              alt="KRV Group Logo"
              className="krv-logo"
            />
          </div>
          <div className="card-corner top-left" />
          <div className="card-corner bottom-right" />
        </div>
      </div>

      {/* Community Sponsors Heading */}
      <div className="details-header-wrapper community-sponsors-header">
        <h2 className="details-header">COMMUNITY SPONSORS</h2>
        <p className="section-tagline">
          Supported by our esteemed community institutions and trusts.
        </p>
      </div>

      {/* Community Sponsors Grid */}
      <div className="community-sponsors-grid">
        {COMMUNITY_SPONSORS.map((sponsor) => (
          <div
            key={sponsor.id}
            className={`community-sponsor-card ${!sponsor.logo ? "text-only-card" : ""}`}
          >
            <div className="card-bg-grid" />
            {sponsor.logo ? (
              <>
                <div className="sponsor-logo-wrapper">
                  <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="community-sponsor-logo" />
                </div>
                <h4 className="community-sponsor-name">{sponsor.name}</h4>
              </>
            ) : (
              <div className="sponsor-text-wrapper">
                <span className="badge-icon-dot" />
                <h4 className="community-sponsor-name">{sponsor.name}</h4>
                {sponsor.type && <span className="community-sponsor-type">{sponsor.type}</span>}
              </div>
            )}
            <div className="card-corner top-left" />
            <div className="card-corner bottom-right" />
          </div>
        ))}
      </div>
    </section>
  );
};

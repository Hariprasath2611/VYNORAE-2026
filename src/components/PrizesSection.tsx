import React from "react";
import { PODIUM_PRIZES, SPECIAL_AWARDS } from "@/data/prizes";
import { Cpu, Layout, Globe, FileCheck } from "lucide-react";

export const PrizesSection: React.FC = () => {
  const getAwardIcon = (id: string, color: string = "#00ff66") => {
    switch (id) {
      case "innovation":
        return <Cpu size={26} color={color} />;
      case "design":
        return <Layout size={26} color={color} />;
      case "impact":
        return <Globe size={26} color={color} />;
      default:
        return <FileCheck size={26} color={color} />;
    }
  };

  return (
    <section className="prizes-section" id="prizes">
      <div className="details-header-wrapper">
        <h2 className="details-header">PRIZES & AWARDS</h2>
        <p className="section-tagline">
          Telemetry matrix of VYNORAE 2026 prize distribution. High-tier prototypes unlock corresponding reward parameters.
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="podium-row">
        {PODIUM_PRIZES.map((prize) => (
          <div
            key={prize.rank}
            className={`prize-podium-card ${prize.glowClass.replace("-glow", "")} ${
              prize.featured ? "gold featured" : ""
            }`}
          >
            <div className="card-bg-grid" />
            <div className={`prize-rank-badge ${prize.featured ? "gold-badge" : ""}`}>
              {prize.rank}
            </div>
            {prize.featured && <div className="prize-badge-label">GRAND WINNER</div>}

            <div className="prize-medal-wrap">
              <img
                loading="lazy"
                decoding="async"
                src={prize.trophyImg}
                alt={prize.title}
                className={`prize-image ${prize.featured ? "featured-image" : ""}`}
              />
              <div className={`prize-medal-glow ${prize.glowClass}`} />
            </div>

            <h3 className="prize-position">{prize.title}</h3>
            <div className={`prize-amount ${prize.featured ? "gold-amount" : ""}`}>
              {prize.amount}
            </div>

            <ul className="prize-perks">
              {prize.perks.map((perk, idx) => (
                <li key={idx}>
                  <span className={`perk-tag ${perk.active ? "active" : ""}`}>{perk.tag}</span>
                  <span className={`perk-text ${perk.active ? "text-gold" : ""}`}>{perk.text}</span>
                </li>
              ))}
            </ul>

            <div className={`prize-bar ${prize.barClass}`} />
          </div>
        ))}
      </div>

      {/* Special Awards Grid */}
      <div className="special-awards-grid">
        {SPECIAL_AWARDS.map((award) => (
          <div
            key={award.id}
            className={`special-award-card ${award.isCert ? "cert-card" : ""}`}
          >
            {/* Clean Icon Container */}
            <div className="award-icon-box">
              {getAwardIcon(award.id, "#00ff66")}
            </div>

            {/* Clean Award Info */}
            <div className="award-info">
              <span className="award-cat-text">{award.category}</span>
              <h4 className="award-title">{award.title}</h4>
              <p className="award-desc">{award.desc}</p>
              <div className="award-reward-pill">
                <span>{award.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

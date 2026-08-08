import React from "react";

export const JudgesSection: React.FC = () => {
  return (
    <section className="judges-section" id="judges">
      <div className="details-header-wrapper">
        <h2 className="details-header">PANEL OF JUDGES</h2>
        <p className="section-tagline">
          Meet the esteemed panel of judges evaluating VYNORAE 2026 prototypes. The panel will be officially revealed on August 20th.
        </p>
      </div>

      <div className="podium-row">
        {/* Judge 1 */}
        <div className="prize-podium-card silver">
          <div className="card-bg-grid" />
          <div className="prize-rank-badge">JUDGE // 01</div>
          <div className="prize-medal-wrap">
            <div className="judge-question-mark">?</div>
            <div className="prize-medal-glow silver-glow" />
          </div>
          <h3 className="prize-position">Classified</h3>
          <div className="judge-status">To Be Revealed</div>
          <ul className="prize-perks">
            <li>
              <span className="perk-tag">TRACK</span>
              <span className="perk-text text-muted">Evaluation Phase</span>
            </li>
            <li>
              <span className="perk-tag">STATUS</span>
              <span className="perk-text text-muted">Awaiting Unveil</span>
            </li>
          </ul>
          <div className="prize-bar silver-bar" />
          <div className="card-corner top-left" />
          <div className="card-corner bottom-right" />
        </div>

        {/* Judge 2 (Featured) */}
        <div className="prize-podium-card gold featured">
          <div className="card-bg-grid" />
          <div className="prize-rank-badge gold-badge">JUDGE // 02</div>
          <div className="prize-badge-label">CHIEF EVALUATOR</div>
          <div className="prize-medal-wrap">
            <div className="judge-question-mark gold-text">?</div>
            <div className="prize-medal-glow gold-glow" />
          </div>
          <h3 className="prize-position">Classified</h3>
          <div className="judge-status">To Be Revealed</div>
          <ul className="prize-perks">
            <li>
              <span className="perk-tag active">TRACK</span>
              <span className="perk-text text-gold">Chief Evaluation</span>
            </li>
            <li>
              <span className="perk-tag active">STATUS</span>
              <span className="perk-text text-gold">Awaiting Unveil</span>
            </li>
          </ul>
          <div className="prize-bar gold-bar" />
          <div className="card-corner top-left gold-corners" />
          <div className="card-corner bottom-right gold-corners" />
        </div>

        {/* Judge 3 */}
        <div className="prize-podium-card bronze">
          <div className="card-bg-grid" />
          <div className="prize-rank-badge">JUDGE // 03</div>
          <div className="prize-medal-wrap">
            <div className="judge-question-mark">?</div>
            <div className="prize-medal-glow bronze-glow" />
          </div>
          <h3 className="prize-position">Classified</h3>
          <div className="judge-status">To Be Revealed</div>
          <ul className="prize-perks">
            <li>
              <span className="perk-tag">TRACK</span>
              <span className="perk-text text-muted">Evaluation Phase</span>
            </li>
            <li>
              <span className="perk-tag">STATUS</span>
              <span className="perk-text text-muted">Awaiting Unveil</span>
            </li>
          </ul>
          <div className="prize-bar bronze-bar" />
          <div className="card-corner top-left" />
          <div className="card-corner bottom-right" />
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from "react";
import { JUDGING_CRITERIA } from "@/data/judging";

export const JudgingDashboard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [displayWeight, setDisplayWeight] = useState(JUDGING_CRITERIA[0].weight);

  const selectedCriterion = JUDGING_CRITERIA[selectedIndex];

  // Auto-cycle through criteria every 4 seconds when user is not hovering
  useEffect(() => {
    if (isUserHovering) return;
    const interval = setInterval(() => {
      handleSelect((selectedIndex + 1) % JUDGING_CRITERIA.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedIndex, isUserHovering]);

  const handleSelect = (index: number) => {
    if (index === selectedIndex) return;
    setIsSwitching(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setDisplayWeight(JUDGING_CRITERIA[index].weight);
      setIsSwitching(false);
    }, 120);
  };

  // SVG Gauge calculations
  const CIRCUMFERENCE = 2 * Math.PI * 40; // 251.327
  const strokeDashoffset = CIRCUMFERENCE - (displayWeight / 100) * CIRCUMFERENCE;

  return (
    <section className="judging-criteria-section" id="judging">
      <div className="details-header-wrapper">
        <h2 className="details-header">JUDGING CRITERIA</h2>
        <p className="section-tagline">
          Evaluation parameters and weightage used by the judging panel to score all submitted solutions.
        </p>
      </div>

      <div
        className="judging-dashboard"
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
      >
        {/* Left Console: Interactive Hologram Display */}
        <div className="dashboard-display">
          <div className="hologram-scanner">
            <div className="scanner-grid" />
            <div className="scanner-laser" />

            {/* SVG Telemetry Circle */}
            <div className="main-radial-gauge">
              <svg viewBox="0 0 100 100" className="gauge-svg">
                <circle className="gauge-bg" cx="50" cy="50" r="40" />
                <circle
                  className="gauge-fill"
                  cx="50"
                  cy="50"
                  r="40"
                  id="mainGaugeFill"
                  style={{
                    strokeDasharray: `${CIRCUMFERENCE}`,
                    strokeDashoffset: `${strokeDashoffset}`,
                  }}
                />
              </svg>
              <div className="gauge-readout">
                <span className="gauge-percent" id="mainGaugePercent">
                  {displayWeight}%
                </span>
                <span className="gauge-label">WEIGHTAGE</span>
              </div>
            </div>
          </div>

          <div className={`display-content-card ${isSwitching ? "switching" : ""}`}>
            <span className="display-tag" id="displayTag">
              {selectedCriterion.tag}
            </span>
            <h3 className="display-title" id="displayTitle">
              {selectedCriterion.title}
            </h3>
            <p className="display-desc" id="displayDesc">
              {selectedCriterion.desc}
            </p>
          </div>
        </div>

        {/* Right Console: Interactive Parameter List */}
        <div className="dashboard-list">
          {JUDGING_CRITERIA.map((criterion, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div
                key={criterion.id}
                className={`dashboard-row ${isActive ? "active" : ""}`}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => handleSelect(idx)}
              >
                <span className="row-num">{criterion.id}</span>
                <div className="row-info">
                  <span className="row-title">{criterion.title}</span>
                  <span className="row-mini-tag">SYS_EVAL</span>
                </div>
                <span className="row-value">{criterion.weight}%</span>
                <div className="row-indicator-bar">
                  <div className="fill" style={{ width: `${criterion.weight}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

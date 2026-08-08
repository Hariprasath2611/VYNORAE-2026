import React from "react";
import { Award, Users, FileText } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="details-header-wrapper">
        <h2 className="details-header">ABOUT THE HACKATHON</h2>
      </div>

      <div className="about-sequence">
        {/* Sequence Step 1: Purpose */}
        <div className="sequence-panel">
          <div className="sequence-number">01</div>
          <div className="sequence-content">
            <span className="hud-tag">MISSION PURPOSE</span>
            <h3 className="sequence-title">About VYNORAE</h3>
            <p className="mission-highlight">
              VYNORAE is a 24-hour national-level hackathon that brings together passionate innovators, developers, designers, and problem solvers to build impactful technology solutions.
            </p>
            <p className="mission-text">
              Participants collaborate in teams, transform ideas into working prototypes, and present them before industry experts and academic leaders. Whether you're passionate about AI, Web3, Cybersecurity, Healthcare, or Open Innovation, VYNORAE is your platform to innovate.
            </p>
          </div>
        </div>

        {/* Sequence Step 2: Objectives */}
        <div className="sequence-panel">
          <div className="sequence-number">02</div>
          <div className="sequence-content">
            <span className="hud-tag">MISSION STATEMENT</span>
            <h3 className="sequence-title">Why VYNORAE?</h3>
            <ul className="objectives-list">
              <li>
                <span className="obj-title">Prototyping</span>
                <p className="obj-desc">Build real-world solutions under tight time constraints and launch working prototypes.</p>
              </li>
              <li>
                <span className="obj-title">Networking</span>
                <p className="obj-desc">Interact and gain insights from industry judges and technical mentors from leading companies.</p>
              </li>
              <li>
                <span className="obj-title">Rewards & Credentials</span>
                <p className="obj-desc">Compete for ₹35,000 prize pool and earn national participation certificates to boost your resume.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Sequence Step 3: Benefits */}
        <div className="sequence-panel">
          <div className="sequence-number">03</div>
          <div className="sequence-content">
            <span className="hud-tag">PARTICIPANT BENEFITS</span>
            <h3 className="sequence-title">What You Gain</h3>
            <div className="benefits-row">
              <div className="benefit-card">
                <Award className="benefit-svg" size={24} />
                <div className="benefit-info">
                  <span className="benefit-title">₹35,000 Prize Pool</span>
                  <span className="benefit-desc">Cash prizes for winners, runners-up & special awards.</span>
                </div>
              </div>
              <div className="benefit-card">
                <Users className="benefit-svg" size={24} />
                <div className="benefit-info">
                  <span className="benefit-title">Industry Mentors</span>
                  <span className="benefit-desc">Learn from tech professionals, startup founders & researchers.</span>
                </div>
              </div>
              <div className="benefit-card">
                <FileText className="benefit-svg" size={24} />
                <div className="benefit-info">
                  <span className="benefit-title">National Certificates</span>
                  <span className="benefit-desc">Digital & hardcopy credentials validating your participation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-block">
          <div className="footer-logo-wrap" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="images/logo.webp" alt="VYNORAE Logo" className="footer-logo-img" />
            <span className="footer-logo-text">VYNORAE</span>
          </div>
          <p className="footer-tagline">
            National Hackathon on Emerging Technologies. Build, Innovate, and Transform the Future at Jaya Engineering College.
          </p>
        </div>

        {/* Quick Nav Links List */}
        <div className="footer-nav-block">
          <h4 className="footer-block-header">QUICK NAVIGATION</h4>
          <nav className="footer-nav-grid">
            <a href="#details" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#details")}>DETAILS</a>
            <a href="#about" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
            <a href="#themes-section" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#themes-section")}>THEMES</a>
            <a href="#timeline" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#timeline")}>TIMELINE</a>
            <a href="#rules" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#rules")}>RULES</a>
            <a href="#coordinators" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#coordinators")}>COORDINATORS</a>
            <a href="#judges" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#judges")}>JUDGES</a>
            <a href="#faq" className="footer-nav-item" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
          </nav>
        </div>

        {/* Register CTA Action Block */}
        <div className="footer-cta-block">
          <h4 className="footer-block-header">JOIN THE HACKATHON</h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfx5xMtDgCjkekUJVITgYe1TF6gbsJ4MYRFrxPyR1BGwYvCRw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-register-btn"
          >
            <span>REGISTER NOW</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <p>
          &copy; 2026 VYNORAE Jaya Engineering College. All rights reserved. Designed and developed by the VYNORAE Organizing Committee.
        </p>
      </div>
    </footer>
  );
};

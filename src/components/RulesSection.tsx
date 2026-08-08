import React from "react";

export const RulesSection: React.FC = () => {
  const rules = [
    {
      num: "01 / TEAM_SIZE",
      title: "Team Size: 2–4",
      desc: "Teams must consist of 2–4 registered students. Solo participation is not permitted under any circumstances.",
    },
    {
      num: "02 / HARDWARE",
      title: "Bring Your Own Laptop",
      desc: "Each team member must bring their own laptop, chargers, extension boxes, college ID card, and personal medication.",
    },
    {
      num: "03 / CONNECTIVITY",
      title: "Wi-Fi Provided",
      desc: "JEC will provide Wi-Fi access throughout the event. Backup mobile hotspots are highly recommended for uninterrupted connectivity.",
    },
    {
      num: "04 / ORIGINALITY",
      title: "Original Work Only",
      desc: "All code must be written during the 24-hour window. Plagiarism or pre-built projects will result in immediate disqualification.",
    },
    {
      num: "05 / SUBMISSION",
      title: "GitHub Submission",
      desc: "Final code must be pushed to a public GitHub repository with a proper README explanation before the code freeze deadline.",
    },
    {
      num: "06 / PRESENTATION",
      title: "PPT Required",
      desc: "A standard slide deck (PPT) is required detailing the problem, solution, architecture, and technology stack used.",
    },
    {
      num: "07 / DEMO_VIDEO",
      title: "Demo Video Encouraged",
      desc: "A 2-minute video walkthrough demonstrating the working prototype is highly encouraged alongside your final submission.",
      fullWidth: true,
    },
  ];

  return (
    <section className="rules-guidelines-section" id="rules">
      <div className="section-bg-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="section-bg-video lazy-video"
          poster="images/rules_poster.webp"
        >
          <source src="video/eligibilyandrulesandguideliness.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">RULES & GUIDELINES</h2>
        <p className="section-tagline">
          Operational protocols and compliance directives for all registered teams.
        </p>
      </div>

      <div className="rules-grid">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="rule-card"
            style={rule.fullWidth ? { gridColumn: "span 2" } : undefined}
          >
            <span className="rule-num">{rule.num}</span>
            <h3 className="rule-title">{rule.title}</h3>
            <p className="rule-desc">{rule.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

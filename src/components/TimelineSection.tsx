import React from "react";
import { TIMELINE_EVENTS } from "@/data/timeline";

export const TimelineSection: React.FC = () => {
  return (
    <section className="timeline-table-section" id="timeline">
      <div className="section-bg-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="section-bg-video lazy-video"
          poster="images/themes_timeline_poster.webp"
        >
          <source src="video/themes_eventtimeline_mentorsession.mp4" type="video/mp4" />
        </video>
        <div className="section-video-overlay" />
      </div>

      <div className="details-header-wrapper">
        <h2 className="details-header">EVENT TIMELINE</h2>
        <p className="section-tagline">
          Key milestones leading up to and through VYNORAE 2026.
        </p>
      </div>

      <div className="timeline-table-container">
        <table className="hud-table">
          <thead>
            <tr>
              <th>STAGE</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {TIMELINE_EVENTS.map((event, idx) => (
              <tr key={idx}>
                <td>
                  <span className="stage-tag">{event.stageTag}</span>
                  <span className="stage-name">
                    {event.stageName}
                    {event.subNote && (
                      <>
                        <br />
                        <span className="shortlist-fee-note">{event.subNote}</span>
                      </>
                    )}
                  </span>
                </td>
                <td className="date-val">{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

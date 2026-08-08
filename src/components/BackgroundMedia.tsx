import React from "react";

export const BackgroundMedia: React.FC = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video hero-lazy-video"
        poster="images/video_poster.webp"
      >
        <source src="video/lv_0_20260804151312.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <div className="grid-overlay" />
    </div>
  );
};

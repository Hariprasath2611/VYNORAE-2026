import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemesCarousel from "./ThemesCarousel";

const container = document.getElementById("themes-carousel-root");

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <ThemesCarousel />
    </React.StrictMode>
  );
}

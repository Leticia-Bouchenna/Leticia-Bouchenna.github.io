import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { aboutParagraphs, highlights } from "../data/portfolioData";
import "../assets/styles/About.scss";

function About() {
  return (
    <section className="section-shell about-container" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-index">01</span>
        <div>
          <p className="section-kicker">Profile</p>
          <h2 id="about-title">About Me</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-reveal="left">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="highlight-grid" aria-label="Career highlights">
          {highlights.map((highlight, index) => (
            <div
              className="highlight-card"
              data-reveal="right"
              key={highlight.label}
              style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <ArrowOutwardRoundedIcon aria-hidden="true" />
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default About;

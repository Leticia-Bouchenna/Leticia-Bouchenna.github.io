import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { personalInfo } from "../data/portfolioData";
import "../assets/styles/Main.scss";

const socialIcons = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  email: <EmailRoundedIcon />,
};

function Main() {
  return (
    <header className="container hero-container" id="home">
      <div className="about-section">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {personalInfo.founderBadge}
          </div>

          <h1>{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-positioning">{personalInfo.positioning}</p>

          <div className="hero-meta" aria-label="Location and availability">
            <span>
              <LocationOnRoundedIcon aria-hidden="true" />
              {personalInfo.location}
            </span>
            <span>
              <WorkOutlineRoundedIcon aria-hidden="true" />
              {personalInfo.availability}
            </span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work
              <NorthEastRoundedIcon aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
            {personalInfo.resumePath && (
              <a className="button button-secondary" href={personalInfo.resumePath}>
                Download Resume
              </a>
            )}
          </div>

          <div className="social-icons" aria-label="Professional profiles">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel={link.platform === "email" ? undefined : "noreferrer noopener"}
                aria-label={link.label}
              >
                {socialIcons[link.platform]}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract multilingual data and audio signal visual">
          <svg
            className="signal-art"
            viewBox="0 0 720 720"
            role="img"
            aria-labelledby="signal-title signal-description"
          >
            <title id="signal-title">Multilingual data signal</title>
            <desc id="signal-description">
              Layered audio waves and connected data points representing Speech AI,
              multilingual information extraction and decision intelligence.
            </desc>
            <defs>
              <linearGradient id="wave-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#39dcff" />
                <stop offset="0.52" stopColor="#7b61ff" />
                <stop offset="1" stopColor="#d43bff" />
              </linearGradient>
              <radialGradient id="node-gradient">
                <stop offset="0" stopColor="#d9fbff" />
                <stop offset="1" stopColor="#52d9ff" />
              </radialGradient>
            </defs>
            <g className="signal-grid" opacity=".2">
              {Array.from({ length: 9 }).map((_, index) => (
                <circle key={index} cx="360" cy="360" r={60 + index * 30} />
              ))}
            </g>
            <g className="signal-waves">
              {Array.from({ length: 17 }).map((_, index) => {
                const offset = index * 13;
                return (
                  <path
                    key={offset}
                    d={`M42 ${264 + offset} C 142 ${80 + offset}, 262 ${
                      520 - offset * 0.2
                    }, 366 ${292 + offset * 0.3} S 578 ${150 + offset}, 684 ${
                      310 + offset * 0.1
                    }`}
                  />
                );
              })}
            </g>
            <g className="signal-links">
              <path d="M130 290 254 211 362 337 484 238 612 348" />
              <path d="M109 433 240 391 362 337 511 433 624 389" />
            </g>
            <g className="signal-nodes">
              {[
                [130, 290],
                [254, 211],
                [362, 337],
                [484, 238],
                [612, 348],
                [109, 433],
                [240, 391],
                [511, 433],
                [624, 389],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" />
              ))}
            </g>
          </svg>

          <div className="profile-orbit">
            <img src={personalInfo.profileImage} alt={personalInfo.profileImageAlt} />
            <span className="orbit-label orbit-label-one">Speech AI</span>
            <span className="orbit-label orbit-label-two">NLP</span>
            <span className="orbit-label orbit-label-three">Decision Intelligence</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Main;

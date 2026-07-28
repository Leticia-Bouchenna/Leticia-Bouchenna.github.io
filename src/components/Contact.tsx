import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { personalInfo } from "../data/portfolioData";
import "../assets/styles/Contact.scss";

const contactIcons = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  email: <EmailRoundedIcon />,
};

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="contact-layout">
        <div className="contact-content" data-reveal="left">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Let’s Build Useful AI</h2>
          <p>
            Open to Data Science, Applied AI, multilingual NLP opportunities
            and research collaborations.
          </p>

          <a className="contact-cta" href={`mailto:${personalInfo.email}`}>
            Start a conversation
            <ArrowForwardRoundedIcon aria-hidden="true" />
          </a>
        </div>

        <aside
          className="contact-card"
          data-reveal="right"
          aria-label="Contact details"
        >
          <div className="contact-card-heading">
            <p>Contact details</p>
            <span>Available for opportunities</span>
          </div>

          <div className="contact-meta">
            <span>
              <LocationOnRoundedIcon aria-hidden="true" />
              <span>
                <small>Location</small>
                {personalInfo.location}
              </span>
            </span>
            <span>
              <PublicRoundedIcon aria-hidden="true" />
              <span>
                <small>Availability</small>
                Remote & international mobility
              </span>
            </span>
          </div>

          <div className="contact-links">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel={link.platform === "email" ? undefined : "noreferrer noopener"}
                aria-label={link.label}
              >
                {contactIcons[link.platform]}
                <span>
                  {link.platform === "email"
                    ? personalInfo.email
                    : link.platform === "github"
                    ? "Leticia-Bouchenna"
                    : "LinkedIn"}
                </span>
                <ArrowForwardRoundedIcon
                  className="contact-link-arrow"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;

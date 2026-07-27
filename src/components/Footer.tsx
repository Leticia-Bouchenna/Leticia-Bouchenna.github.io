import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { personalInfo } from "../data/portfolioData";
import "../assets/styles/Footer.scss";

const footerIcons = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  email: <EmailRoundedIcon />,
};

function Footer() {
  return (
    <footer>
      <div className="footer-identity">
        <a className="footer-wordmark" href="#home" aria-label="Back to top">
          LB<span>.</span>
        </a>
        <div>
          <strong>Leticia Bouchenna</strong>
          <p>Data Scientist · Applied AI · Decision Intelligence</p>
        </div>
      </div>
      <div className="footer-links">
        {personalInfo.socialLinks.map((link) => (
          <a
            href={link.url}
            key={link.platform}
            target={link.platform === "email" ? undefined : "_blank"}
            rel={link.platform === "email" ? undefined : "noreferrer noopener"}
            aria-label={link.label}
          >
            {footerIcons[link.platform]}
            <span>
              {link.platform === "email"
                ? "Email"
                : link.platform === "github"
                ? "GitHub"
                : "LinkedIn"}
            </span>
          </a>
        ))}
      </div>
      <div className="footer-meta">
        <p>© 2026 Leticia Bouchenna. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

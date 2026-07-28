import React from "react";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { skillCategories } from "../data/portfolioData";
import "../assets/styles/Expertise.scss";

const expertiseIcons = {
  analytics: <QueryStatsRoundedIcon />,
  ai: <AutoAwesomeRoundedIcon />,
  language: <RecordVoiceOverRoundedIcon />,
  database: <StorageRoundedIcon />,
  insights: <InsightsRoundedIcon />,
  application: <DevicesRoundedIcon />,
};

function Expertise() {
  return (
    <section className="section-shell skills-container" id="expertise" aria-labelledby="expertise-title">
      <div className="section-heading">
        <span className="section-index">02</span>
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 id="expertise-title">Expertise</h2>
        </div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((skill, index) => (
          <article
            className="skill"
            data-reveal="up"
            key={skill.id}
            style={{ "--reveal-delay": `${(index % 3) * 85}ms` } as React.CSSProperties}
          >
            <div className="skill-icon" aria-hidden="true">
              {expertiseIcons[skill.icon] ?? <DataObjectRoundedIcon />}
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tags" aria-label={`${skill.title} technologies`}>
              {skill.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;

import React from "react";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { FaJava } from "react-icons/fa";
import {
  SiFastapi,
  SiGit,
  SiHuggingface,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { technologies, technologyConcepts } from "../data/portfolioData";
import { TechnologyCategory } from "../types/portfolio";
import "../assets/styles/TechStack.scss";

const iconMap: Record<string, React.ElementType> = {
  python: SiPython as React.ElementType,
  pytorch: SiPytorch as React.ElementType,
  tensorflow: SiTensorflow as React.ElementType,
  scikitlearn: SiScikitlearn as React.ElementType,
  huggingface: SiHuggingface as React.ElementType,
  pandas: SiPandas as React.ElementType,
  numpy: SiNumpy as React.ElementType,
  postgresql: SiPostgresql as React.ElementType,
  powerbi: BarChartRoundedIcon,
  plotly: SiPlotly as React.ElementType,
  database: StorageRoundedIcon,
  fastapi: SiFastapi as React.ElementType,
  streamlit: SiStreamlit as React.ElementType,
  git: SiGit as React.ElementType,
  java: FaJava as React.ElementType,
  jupyter: SiJupyter as React.ElementType,
  vscode: VscCode as React.ElementType,
};

const groups: { category: TechnologyCategory; title: string }[] = [
  { category: "ai", title: "Machine Learning & AI" },
  { category: "data", title: "Data & Analytics" },
  { category: "tools", title: "Applications & Tools" },
];

function TechStack() {
  return (
    <section className="section-shell tech-container" id="stack" aria-labelledby="stack-title">
      <div className="section-heading">
        <span className="section-index">03</span>
        <div>
          <p className="section-kicker">Tools selected for the problem</p>
          <h2 id="stack-title">Technology Stack</h2>
        </div>
      </div>

      <div className="tech-groups">
        {groups.map((group, groupIndex) => (
          <div className="tech-group" key={group.category} data-reveal="up">
            <h3>{group.title}</h3>
            <div className="technology-grid">
              {technologies
                .filter((technology) => technology.category === group.category)
                .map((technology, index) => (
                  <div
                    className="technology-card"
                    data-reveal="scale"
                    key={technology.name}
                    aria-label={technology.name}
                    style={{
                      "--reveal-delay": `${groupIndex * 30 + index * 45}ms`,
                    } as React.CSSProperties}
                  >
                    <span className="technology-icon" aria-hidden="true">
                      {React.createElement(iconMap[technology.iconKey])}
                    </span>
                    <span>{technology.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="concept-panel" data-reveal="up">
        <h3>Core Concepts</h3>
        <div className="concept-cloud" aria-label="AI and decision intelligence concepts">
          {technologyConcepts.map((concept) => (
            <span key={concept}>{concept}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;

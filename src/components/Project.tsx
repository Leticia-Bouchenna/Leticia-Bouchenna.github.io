import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { projects } from "../data/portfolioData";
import { Project as ProjectType, ProjectLink } from "../types/portfolio";
import "../assets/styles/Project.scss";

function getProjectLinks(project: ProjectType): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.githubUrl) links.push({ label: "Repository", url: project.githubUrl, kind: "github" });
  if (project.liveUrl) {
    links.push({
      label: "Visit live platform",
      url: project.liveUrl,
      kind: "live",
    });
  }
  if (project.demoUrl) links.push({ label: "Live demo", url: project.demoUrl, kind: "demo" });
  if (project.reportUrl) links.push({ label: "Report", url: project.reportUrl, kind: "report" });
  if (project.videoUrl) links.push({ label: "Video", url: project.videoUrl, kind: "video" });
  if (project.caseStudyUrl) links.push({ label: "Case study", url: project.caseStudyUrl, kind: "case-study" });
  return links;
}

const linkIcons = {
  github: <GitHubIcon />,
  live: <ArrowOutwardRoundedIcon />,
  demo: <ArrowOutwardRoundedIcon />,
  report: <ArticleOutlinedIcon />,
  video: <PlayCircleOutlineRoundedIcon />,
  "case-study": <ArrowOutwardRoundedIcon />,
};

function ProjectLinks({ project }: { project: ProjectType }) {
  const links = getProjectLinks(project);
  if (!links.length) return null;

  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${link.label} for ${project.name} (opens in a new tab)`}
          key={link.kind}
        >
          {linkIcons[link.kind]}
          {link.label}
        </a>
      ))}
    </div>
  );
}

function TextualFeaturedProject({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <article className="featured-project-textual" data-reveal="up">
      <div className="textual-project-header">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          {project.subtitle && (
            <p className="textual-project-subtitle">{project.subtitle}</p>
          )}
          <p className="textual-project-summary">{project.summary}</p>
        </div>
        <span className="project-number textual-project-number">
          0{index + 1}
        </span>
      </div>

      <div className="textual-project-story">
        <section data-reveal="up">
          <span>Challenge</span>
          <p>{project.problem}</p>
        </section>
        <section
          data-reveal="up"
          style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
        >
          <span>Solution</span>
          <p>{project.approach[0]}</p>
        </section>
        <section
          data-reveal="up"
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <span>Impact</span>
          <p>{project.outcome}</p>
        </section>
      </div>

      <div className="textual-project-scale">
        <p>Key figures</p>
        <div className="textual-project-metrics">
          {project.metrics.map((metric, metricIndex) => (
            <span
              data-reveal="up"
              key={metric}
              style={
                {
                  "--reveal-delay": `${metricIndex * 65}ms`,
                } as React.CSSProperties
              }
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="project-tech" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      {project.note && (
        <p className="textual-project-note">{project.note}</p>
      )}
    </article>
  );
}

function FeaturedProject({
  project,
  index,
  layoutIndex,
}: {
  project: ProjectType;
  index: number;
  layoutIndex: number;
}) {
  if (project.id === "alerte-ia") {
    return <TextualFeaturedProject project={project} index={index} />;
  }

  const reversed = layoutIndex % 2 === 1;

  return (
    <article
      className={`featured-project featured-project-${project.id} ${
        reversed ? "featured-project-reverse" : ""
      }`}
    >
      <div className="project-media" data-reveal={reversed ? "right" : "left"}>
        {project.image && (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
          />
        )}
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-content" data-reveal={reversed ? "left" : "right"}>
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-story">
          {project.problem && (
            <div>
              <span>Challenge</span>
              <p>{project.problem}</p>
            </div>
          )}
          {project.approach.length > 0 && (
            <div>
              <span>Solution</span>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {project.outcome && (
            <div>
              <span>Outcome</span>
              <p>{project.outcome}</p>
            </div>
          )}
        </div>

        {project.metrics.length > 0 && (
          <div className="project-metrics">
            {project.metrics.map((metric, metricIndex) => (
              <span
                data-reveal="up"
                key={metric}
                style={{ "--reveal-delay": `${metricIndex * 65}ms` } as React.CSSProperties}
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        <div className="project-tech" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        {project.note && <p className="project-note">{project.note}</p>}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function AdditionalProject({ project, index }: { project: ProjectType; index: number }) {
  return (
    <article
      className="additional-project"
      data-reveal="up"
      style={{ "--reveal-delay": `${index * 85}ms` } as React.CSSProperties}
    >
      <div className="additional-project-media">
        {project.image && (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        )}
      </div>
      <div className="additional-project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="compact-outcome">
          <span>Outcome</span>
          <p>{project.outcome}</p>
        </div>
        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Project() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects-container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span className="section-index">05</span>
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 id="projects-title">Featured Projects</h2>
        </div>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            project={project}
            index={index}
            layoutIndex={
              featuredProjects
                .slice(0, index)
                .filter((item) => item.id !== "alerte-ia").length
            }
            key={project.id}
          />
        ))}
      </div>

      <div className="additional-heading">
        <p className="section-kicker">More work</p>
        <h2>Additional Projects</h2>
      </div>
      <div className="additional-projects-grid">
        {additionalProjects.map((project, index) => (
          <AdditionalProject project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default Project;

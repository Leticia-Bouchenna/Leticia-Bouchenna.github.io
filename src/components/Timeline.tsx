import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/portfolioData";
import OrganizationLogo from "./OrganizationLogo";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const range = Math.max(rect.height - window.innerHeight * 0.18, 1);
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.55 - rect.top) / range)
      );
      section.style.setProperty("--timeline-progress", `${progress * 100}%`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      className="section-shell timeline-section"
      id="experience"
      aria-labelledby="experience-title"
      ref={sectionRef}
    >
      <div className="section-heading">
        <span className="section-index">04</span>
        <div>
          <p className="section-kicker">Career</p>
          <h2 id="experience-title">Experience</h2>
        </div>
      </div>

      <VerticalTimeline animate={false} lineColor="rgba(112, 133, 174, 0.28)">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--work timeline-reveal ${
              index % 2 === 0 ? "timeline-reveal-left" : "timeline-reveal-right"
            }`}
            date={experience.period}
            iconStyle={{ background: "transparent", boxShadow: "none" }}
            icon={<OrganizationLogo organization={experience.organization} />}
          >
            <div className="timeline-card-heading">
              <div>
                <p className="timeline-organization">{experience.organization.name}</p>
                <h3 className="vertical-timeline-element-title">{experience.role}</h3>
                {experience.subtitle && (
                  <p className="timeline-subtitle">{experience.subtitle}</p>
                )}
              </div>
              <span>{experience.location}</span>
            </div>
            <p className="timeline-description">{experience.description}</p>
            {experience.highlights && (
              <ul className="timeline-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {experience.supportNote && (
              <p className="timeline-support-note">{experience.supportNote}</p>
            )}
            <div className="timeline-skills" aria-label={`${experience.role} skills`}>
              {experience.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;

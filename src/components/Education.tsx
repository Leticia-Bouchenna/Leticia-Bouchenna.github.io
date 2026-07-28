import React, { useState } from "react";
import { certifications, education } from "../data/portfolioData";
import { Certification } from "../types/portfolio";
import CertificationCard from "./CertificationCard";
import CredentialModal from "./CredentialModal";
import OrganizationLogo from "./OrganizationLogo";
import "../assets/styles/Education.scss";

function Education() {
  const [selectedCredential, setSelectedCredential] =
    useState<Certification | null>(null);

  return (
    <section
      className="section-shell education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section-heading">
        <span className="section-index">06</span>
        <div>
          <p className="section-kicker">Academic path</p>
          <h2 id="education-title">Education</h2>
        </div>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <article
            className="education-card"
            key={item.id}
            data-reveal={index === 0 ? "left" : "right"}
          >
            <div className="education-card-top">
              <OrganizationLogo organization={item.institution} />
              <span>{item.period}</span>
            </div>
            <h3>{item.degree}</h3>
            <p className="education-institution">{item.institution.name}</p>
            <div className="education-specialization">
              <span>Specialization</span>
              <p>{item.specialization}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="certifications-block" aria-labelledby="certifications-title">
        <div className="certifications-heading">
          <p className="section-kicker">Credentials</p>
          <h3 id="certifications-title">Certifications & Programs</h3>
        </div>
        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <CertificationCard
              certification={certification}
              index={index}
              key={certification.id}
              onView={setSelectedCredential}
            />
          ))}
        </div>
      </div>

      <CredentialModal
        certification={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />
    </section>
  );
}

export default Education;

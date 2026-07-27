import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import { Certification } from "../types/portfolio";

interface CertificationCardProps {
  certification: Certification;
  onView: (certification: Certification) => void;
  index: number;
}

function CertificationCard({
  certification,
  onView,
  index,
}: CertificationCardProps) {
  return (
    <article
      className="certification-card"
      data-reveal="up"
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <div className="certification-content">
        <p className="certification-issuer">{certification.issuer}</p>
        <h4>{certification.title}</h4>
        <p className="certification-year">{certification.year}</p>
        {certification.note && (
          <p className="certification-note">{certification.note}</p>
        )}
        <button
          type="button"
          className="credential-button"
          onClick={() => onView(certification)}
          aria-label={`View credential: ${certification.title}`}
        >
          View credential
          <ArrowOutwardRoundedIcon aria-hidden="true" />
        </button>
      </div>
      <div className="certification-thumbnail" aria-hidden="true">
        <img
          src={certification.credentialImage}
          alt=""
          loading="lazy"
        />
        <span>
          <WorkspacePremiumRoundedIcon />
          Verified credential
        </span>
      </div>
    </article>
  );
}

export default CertificationCard;

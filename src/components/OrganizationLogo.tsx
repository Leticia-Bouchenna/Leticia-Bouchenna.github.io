import React from "react";
import { Organization } from "../types/portfolio";

interface OrganizationLogoProps {
  organization: Organization;
}

function OrganizationLogo({ organization }: OrganizationLogoProps) {
  return (
    <span className="organization-logo" aria-label={organization.name}>
      {organization.logo ? (
        <img src={organization.logo} alt={organization.alt} />
      ) : (
        <span className="organization-logo-fallback" aria-hidden="true">
          {organization.initials}
        </span>
      )}
    </span>
  );
}

export default OrganizationLogo;


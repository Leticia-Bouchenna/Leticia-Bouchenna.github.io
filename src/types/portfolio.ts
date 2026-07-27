export type SocialPlatform = "github" | "linkedin" | "email";
export type TechnologyCategory = "ai" | "data" | "tools";
export type TechnologyDisplayType = "icon" | "image" | "badge";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  positioning: string;
  founderBadge: string;
  location: string;
  availability: string;
  email: string;
  profileImage: string;
  profileImageAlt: string;
  resumePath?: string;
  socialLinks: SocialLink[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: "analytics" | "ai" | "language" | "database" | "insights" | "application";
}

export interface Organization {
  name: string;
  initials: string;
  logo?: string;
  alt: string;
}

export interface Experience {
  id: string;
  organization: Organization;
  role: string;
  subtitle?: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  supportNote?: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: Organization;
  period: string;
  specialization: string;
}

export interface Certification {
  id: string;
  title: string;
  year: string;
  issuer: string;
  credentialImage: string;
  credentialAlt: string;
  note?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: "github" | "live" | "demo" | "report" | "video" | "case-study";
}

export interface Project {
  id: string;
  name: string;
  category: string;
  subtitle?: string;
  featured: boolean;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  technologies: string[];
  metrics: string[];
  image?: string;
  imageAlt?: string;
  note?: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  videoUrl?: string;
  caseStudyUrl?: string;
}

export interface Technology {
  name: string;
  category: TechnologyCategory;
  iconKey: string;
  type: TechnologyDisplayType;
}

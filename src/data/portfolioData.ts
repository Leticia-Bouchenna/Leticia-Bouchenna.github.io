import profileImage from "../assets/images/profile/leticia-profile.jpg";
import ramyPulseImage from "../assets/images/projects/ramypulse/ramypulse-logo.png";
import letDataImage from "../assets/images/projects/let-data-dz/let-data-dz.webp";
import olapImage from "../assets/images/projects/olap/visual-pending.svg";
import javaImage from "../assets/images/projects/java-postgresql/visual-pending.svg";
import analyticsImage from "../assets/images/projects/data-analytics/cevital-dashboard.png";
import marisLogo from "../assets/images/logos/companies/maris.png";
import cevitalLogo from "../assets/images/logos/companies/cevital.jpg";
import civilProtectionLogo from "../assets/images/logos/companies/protection-civile.png";
import universityLogo from "../assets/images/logos/institutions/university-bejaia.png";
import aiEngineerCredential from "../assets/images/certifications/ai-engineer-core-track.jpg";
import pythonCredential from "../assets/images/certifications/python-data-science-bootcamp.jpg";
import aiExpoCredential from "../assets/images/certifications/ai-expo-2026-participation.jpg";
import englishClubCredential from "../assets/images/certifications/english-speaking-club.jpeg";
import {
  Certification,
  Education,
  Experience,
  PersonalInfo,
  Project,
  SkillCategory,
  Technology,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Leticia Bouchenna",
  title: "Data Scientist | Applied AI, Machine Learning & Decision Intelligence",
  positioning:
    "I build end-to-end AI systems that turn complex, multilingual data into useful decisions.",
  founderBadge: "Founder of the MARIS Innovation Project",
  location: "Béjaïa, Algeria",
  availability: "Open to remote opportunities and international mobility",
  email: "leticiabouchena@gmail.com",
  profileImage,
  profileImageAlt: "Leticia Bouchenna at a data science workstation",
  socialLinks: [
    {
      platform: "linkedin",
      label: "LinkedIn profile",
      url: "https://dz.linkedin.com/in/leticia-bouchenna-544a0a2a5",
    },
    {
      platform: "github",
      label: "GitHub profile",
      url: "https://github.com/Leticia-Bouchenna",
    },
    {
      platform: "email",
      label: "Email Leticia Bouchenna",
      url: "mailto:leticiabouchena@gmail.com",
    },
  ],
};

export const aboutParagraphs = [
  "I build applied AI solutions for real-world problems involving complex, multilingual and locally collected data.",
  "My work covers the full lifecycle, from needs analysis and data preparation to model evaluation, decision-support applications and functional prototypes.",
];

export const highlights = [
  { value: "1st / 37", label: "Master’s program ranking" },
  { value: "19.5 / 20", label: "Master’s thesis defense" },
  { value: "Founder", label: "Incubated AI innovation project" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    description:
      "Data exploration, statistical modeling, classification, clustering, customer segmentation and model evaluation for practical decision-making.",
    technologies: ["Python", "scikit-learn", "PyTorch"],
    icon: "analytics",
  },
  {
    id: "applied-ai",
    title: "Applied AI & Generative AI",
    description:
      "Design of applied AI pipelines using fine-tuning, retrieval, agentic workflows and human validation.",
    technologies: ["LLM", "RAG", "LoRA / QLoRA"],
    icon: "ai",
  },
  {
    id: "nlp-speech",
    title: "NLP & Speech AI",
    description:
      "Multilingual speech recognition, information extraction and language analysis for low-resource and code-switched data.",
    technologies: ["ASR", "NLP", "Information Extraction"],
    icon: "language",
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Databases",
    description:
      "Data preparation, ETL pipelines, relational modeling, data warehouses and analytical database design.",
    technologies: ["SQL", "PostgreSQL", "ETL"],
    icon: "database",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence & Decision Support",
    description:
      "Interactive dashboards, KPI design, multidimensional analysis and data visualization for operational decision support.",
    technologies: ["Power BI", "DAX", "OLAP"],
    icon: "insights",
  },
  {
    id: "applications",
    title: "Application Development",
    description:
      "Development of web, API and desktop applications supporting Data and AI workflows.",
    technologies: ["FastAPI", "Streamlit", "Java"],
    icon: "application",
  },
];

export const experiences: Experience[] = [
  {
    id: "maris",
    organization: {
      name: "MARIS — Moteur d’Analyse et de Recommandation d’Informations Structurées",
      initials: "MARIS",
      logo: marisLogo,
      alt: "MARIS Innovation Project logo",
    },
    role: "Founder & Data Scientist",
    subtitle: "Innovative Project — National Degree–Startup Program",
    period: "2026 — Present",
    location: "Béjaïa, Algeria",
    description:
      "I founded and lead MARIS, an applied AI innovation project supported by the TIPA-SPACE university incubator. I lead the development of multilingual decision-support products, from needs analysis and data preparation to evaluation and functional prototyping.",
    supportNote: "Alerte IA is MARIS’s first product.",
    skills: ["Applied AI", "Product Development", "Decision Support", "Human-in-the-loop"],
  },
  {
    id: "bm-energie",
    organization: {
      name: "SARL BM ENERGIE",
      initials: "BME",
      alt: "SARL BM ENERGIE",
    },
    role: "Planning and Monitoring Officer",
    period: "October 2025 — Present",
    location: "Béjaïa, Algeria",
    description:
      "Plan and monitor project schedules, resources, deadlines and corrective actions.",
    skills: ["Planning", "Monitoring", "Variance analysis", "Reporting"],
  },
  {
    id: "civil-protection",
    organization: {
      name: "Béjaïa Civil Protection",
      initials: "PC",
      logo: civilProtectionLogo,
      alt: "Algerian Civil Protection logo",
    },
    role: "Data / NLP Intern",
    period: "October 2025 — December 2025",
    location: "Béjaïa, Algeria",
    description:
      "Prepared anonymized multilingual emergency-call data for Data Science and NLP experimentation.",
    skills: ["Field research", "Data preparation", "Multilingual NLP", "Privacy"],
  },
  {
    id: "cevital",
    organization: {
      name: "CEVITAL",
      initials: "CEVITAL",
      logo: cevitalLogo,
      alt: "CEVITAL logo",
    },
    role: "Data Analyst Intern",
    period: "2025",
    location: "Béjaïa, Algeria",
    description:
      "Built Power BI dashboards, PostgreSQL models, DAX indicators and customer segments.",
    skills: ["Power BI", "PostgreSQL", "DAX", "Customer segmentation"],
  },
];

export const projects: Project[] = [
  {
    id: "alerte-ia",
    name: "Alerte IA — Multilingual Emergency Call Intelligence",
    category: "Applied AI · Speech AI · Decision Support",
    subtitle: "Master’s Thesis · First Product of MARIS",
    featured: true,
    summary:
      "An applied AI system that transforms emergency calls in Kabyle, Algerian Arabic and French into structured intervention information.",
    problem:
      "Extract critical details from multilingual and unstructured calls under strong time pressure.",
    approach: [
      "Combined speech processing, structured information extraction and human validation in a functional web prototype.",
    ],
    metrics: [
      "234,933 historical calls analyzed",
      "6,069 multilingual audio resources prepared",
      "621 real emergency calls",
    ],
    outcome:
      "Developed a functional prototype that structures incident, location, urgency and victim-related information for emergency operators.",
    technologies: [
      "Python",
      "Speech AI",
      "NLP",
      "Information Extraction",
      "Human-in-the-loop",
      "PostgreSQL",
    ],
  },
  {
    id: "ramypulse",
    name: "RamyPulse — AI-Powered Customer Intelligence",
    category: "NLP · Sentiment Analysis · Marketing Intelligence",
    featured: true,
    summary:
      "A multilingual customer-intelligence platform for analyzing Algerian consumer opinions written in Darja, French and Arabizi.",
    problem:
      "Generic sentiment-analysis systems struggle with Algerian dialect, code-switching and local expressions.",
    approach: [
      "Combined aspect-based sentiment analysis, specialized language modeling and conversational analysis.",
    ],
    outcome: "",
    technologies: ["Python", "NLP", "Transformers", "ABSA", "RAG", "FastAPI"],
    metrics: ["96.6% accuracy", "0.94 macro F1", "1,834 comments"],
    image: ramyPulseImage,
    imageAlt: "RamyPulse project logo on a dark background",
    note: "Presented at the AI EXPO 2026 competition.",
  },
  {
    id: "let-data-dz",
    name: "Let-Data-DZ — Multilingual Speech Data Collection Platform",
    category: "Data Collection · Low-Resource Languages",
    featured: true,
    summary:
      "A multilingual platform for collecting guided speech recordings in Kabyle, Algerian Arabic and French.",
    problem: "",
    approach: [
      "Combines browser-based recording, guided scenarios, structured uploads and dataset validation.",
    ],
    outcome: "",
    technologies: ["Python", "Streamlit", "Audio Processing", "Cloud Storage", "Data Validation"],
    metrics: ["5,448 audio segments", "3 languages"],
    image: letDataImage,
    imageAlt:
      "Let-Data-DZ multilingual audio collection platform showing setup and guided recording screens",
    liveUrl: "https://let-data-dz.dev",
  },
  {
    id: "olap",
    name: "Interactive Data Warehouse & OLAP Analytics",
    category: "Business Intelligence · Decision Support",
    featured: false,
    summary:
      "A data warehouse and OLAP system connecting multidimensional modeling with interactive business analysis.",
    problem: "",
    approach: [],
    outcome:
      "Enabled roll-up, drill-down, slice and dice analysis.",
    technologies: ["PostgreSQL", "SQL", "ETL", "OLAP", "Power BI"],
    metrics: [],
    image: olapImage,
    imageAlt: "Interactive OLAP cube and analytical dashboard",
  },
  {
    id: "java-postgresql",
    name: "Secure Data Management Application",
    category: "Software Engineering · Databases",
    featured: false,
    summary:
      "A secure PostgreSQL desktop application with validated record-management workflows.",
    problem: "",
    approach: [],
    outcome:
      "Centralized reliable record management.",
    technologies: ["Java", "Java Swing", "PostgreSQL", "SQL", "Input Validation"],
    metrics: [],
    image: javaImage,
    imageAlt: "Java and PostgreSQL data management application",
  },
  {
    id: "data-analytics",
    name: "Industrial Data Analytics & Customer Segmentation",
    category: "Data Analytics · Business Intelligence",
    featured: false,
    summary:
      "Business dashboards and customer segmentation for clearer operational insight.",
    problem: "",
    approach: [],
    outcome:
      "Delivered KPI and customer-segmentation views.",
    technologies: ["Power BI", "PostgreSQL", "DAX", "Python", "scikit-learn"],
    metrics: [],
    image: analyticsImage,
    imageAlt: "Power BI dashboard for industrial data analysis",
  },
];

export const technologies: Technology[] = [
  { name: "Python", category: "ai", iconKey: "python", type: "icon" },
  { name: "PyTorch", category: "ai", iconKey: "pytorch", type: "icon" },
  { name: "TensorFlow", category: "ai", iconKey: "tensorflow", type: "icon" },
  { name: "scikit-learn", category: "ai", iconKey: "scikitlearn", type: "icon" },
  { name: "Hugging Face", category: "ai", iconKey: "huggingface", type: "icon" },
  { name: "Pandas", category: "data", iconKey: "pandas", type: "icon" },
  { name: "NumPy", category: "data", iconKey: "numpy", type: "icon" },
  { name: "PostgreSQL", category: "data", iconKey: "postgresql", type: "icon" },
  { name: "Power BI", category: "data", iconKey: "powerbi", type: "icon" },
  { name: "Plotly", category: "data", iconKey: "plotly", type: "icon" },
  { name: "SQL", category: "data", iconKey: "database", type: "icon" },
  { name: "FastAPI", category: "tools", iconKey: "fastapi", type: "icon" },
  { name: "Streamlit", category: "tools", iconKey: "streamlit", type: "icon" },
  { name: "Git", category: "tools", iconKey: "git", type: "icon" },
  { name: "Java", category: "tools", iconKey: "java", type: "icon" },
  { name: "Jupyter", category: "tools", iconKey: "jupyter", type: "icon" },
  { name: "VS Code", category: "tools", iconKey: "vscode", type: "icon" },
];

export const technologyConcepts = [
  "NLP",
  "ASR",
  "LLM",
  "RAG",
  "Human-in-the-loop",
  "Decision Intelligence",
];

export const education: Education[] = [
  {
    id: "masters",
    degree: "Master’s Degree — Data Science & Decision Support",
    institution: {
      name: "Abderrahmane Mira University of Béjaïa",
      initials: "UAMB",
      logo: universityLogo,
      alt: "Abderrahmane Mira University of Béjaïa logo",
    },
    period: "2024 — 2026",
    specialization: "Data Science and Decision Support",
  },
  {
    id: "bachelors",
    degree: "Bachelor’s Degree — Applied Mathematics",
    institution: {
      name: "Abderrahmane Mira University of Béjaïa",
      initials: "UAMB",
      logo: universityLogo,
      alt: "Abderrahmane Mira University of Béjaïa logo",
    },
    period: "Completed in 2024",
    specialization: "Operations Research",
  },
];

export const certifications: Certification[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA and Agents",
    year: "Completed · July 2026",
    issuer: "Udemy · Ligency, Ed Donner",
    credentialImage: aiEngineerCredential,
    credentialAlt:
      "Udemy certificate of completion for the AI Engineer Core Track awarded to Leticia Bouchenna",
  },
  {
    id: "python-bootcamp",
    title: "Python for Data Science & Machine Learning Bootcamp",
    year: "Completed · September 2025",
    issuer: "Udemy · Jose Portilla, Pierian Training",
    credentialImage: pythonCredential,
    credentialAlt:
      "Udemy certificate of completion for the Python for Data Science and Machine Learning Bootcamp awarded to Leticia Bouchenna",
  },
  {
    id: "ai-expo",
    title: "AI EXPO 2026 — Competition Participation",
    year: "April 2026",
    issuer: "AI House · University of Blida 1",
    credentialImage: aiExpoCredential,
    credentialAlt:
      "AI EXPO 2026 competition certificate of participation awarded to Leticia Bouchenna",
    note: "Participation in the AI EXPO 2026 competition with RamyPulse.",
  },
  {
    id: "english-club",
    title: "English Speaking Club Program",
    year: "June 2023 — October 2024",
    issuer: "Elites School of English",
    credentialImage: englishClubCredential,
    credentialAlt:
      "English Speaking Club Program certificate awarded to Leticia Bouchenna",
  },
];

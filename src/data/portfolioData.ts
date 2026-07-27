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
  profileImageAlt:
    "Leticia Bouchenna working at a dual-monitor data science workstation",
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
  "I am a Data Scientist and the founder of the MARIS Innovation Project. I design applied artificial intelligence solutions for real-world problems using complex, multilingual and sensitive data.",
  "My work covers the complete Data and AI lifecycle: understanding business needs, collecting and preparing data, designing and evaluating models, developing user-facing applications and integrating human validation.",
  "I am particularly interested in Machine Learning, Natural Language Processing, Speech AI, Generative AI and decision-support systems. My goal is not simply to train models, but to transform data and research into useful, reliable and deployable products.",
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
      "Data exploration, data cleaning, statistical analysis, classification, regression, clustering, customer segmentation, model evaluation and error analysis.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow"],
    icon: "analytics",
  },
  {
    id: "applied-ai",
    title: "Applied AI & Generative AI",
    description:
      "Design of AI pipelines, fine-tuning, retrieval-augmented generation, prompt engineering, multi-agent workflows and human-in-the-loop validation.",
    technologies: ["LLM", "RAG", "LoRA / QLoRA", "Transformers", "AI agents"],
    icon: "ai",
  },
  {
    id: "nlp-speech",
    title: "NLP & Speech AI",
    description:
      "Multilingual NLP, automatic speech recognition, information extraction, sentiment analysis, named-entity recognition and processing of low-resource languages.",
    technologies: ["ASR", "NLP", "NER", "ABSA", "Audio preprocessing", "WER", "CER"],
    icon: "language",
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Databases",
    description:
      "Data preparation, ETL pipelines, relational modeling, data warehouses, data quality and analytical databases.",
    technologies: ["SQL", "PostgreSQL", "Power Query", "ETL", "Star schema"],
    icon: "database",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence & Decision Support",
    description:
      "Interactive dashboards, KPI design, analytical storytelling, multidimensional analysis and decision-support applications.",
    technologies: ["Power BI", "DAX", "Power Query M", "Plotly", "OLAP"],
    icon: "insights",
  },
  {
    id: "applications",
    title: "Application Development",
    description:
      "Development of data and AI applications, APIs, dashboards and secure desktop interfaces.",
    technologies: ["FastAPI", "Streamlit", "Java", "Java Swing", "Git"],
    icon: "application",
  },
];

export const experiences: Experience[] = [
  {
    id: "maris",
    organization: {
      name: "MARIS — Structured Information Analysis and Recommendation Engine",
      initials: "MARIS",
      logo: marisLogo,
      alt: "MARIS Innovation Project logo",
    },
    role: "Founder & Data Scientist",
    subtitle: "Innovative Project — Degree-Startup Program",
    period: "2026 — Present",
    location: "Béjaïa, Algeria",
    description:
      "Founded and lead MARIS, an applied AI innovation project supported by the TIPA-SPACE university incubator. MARIS focuses on transforming complex, multilingual and locally collected data into practical decision-support solutions.",
    highlights: [
      "Defined the product vision and development roadmap for applied AI solutions adapted to local and multilingual data.",
      "Led the project lifecycle from field research and business-needs analysis to data preparation, model evaluation and functional prototyping.",
      "Designed evaluation protocols, operational KPIs and human-validation workflows to improve the reliability and usefulness of the developed systems.",
      "Developed Alerte IA as the first product of MARIS, building on the research conducted during the Master’s project.",
    ],
    supportNote: "University incubation support: TIPA-SPACE.",
    skills: [
      "Applied AI",
      "Product Development",
      "Decision Support",
      "Multilingual Data",
      "Model Evaluation",
      "Human-in-the-loop",
      "Prototyping",
    ],
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
      "Develop project and site schedules, monitor resources and deadlines, analyze deviations between planned and actual progress and support corrective-action reporting.",
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
      "Conducted field observation, collected and analyzed multilingual emergency-call data and prepared anonymized information for Data Science and NLP experimentation.",
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
      "Built Power BI dashboards, prepared and modeled PostgreSQL data, designed DAX indicators and contributed to a customer-segmentation project.",
    skills: ["Power BI", "PostgreSQL", "DAX", "Customer segmentation"],
  },
];

export const projects: Project[] = [
  {
    id: "alerte-ia",
    name: "Alerte IA — Multilingual Emergency Call Intelligence",
    category: "Applied AI · Speech AI · NLP · Decision Support",
    subtitle: "Master’s Research Project · MARIS Innovation Project",
    featured: true,
    summary:
      "An applied AI system designed to help emergency operators transform multilingual calls in Kabyle, Algerian Arabic and French into structured intervention information.",
    problem:
      "Emergency operators must rapidly identify the incident, location, urgency and victim-related details from multilingual and unstructured calls.",
    approach: [
      "Designed an end-to-end pipeline combining multilingual speech processing, structured information extraction, consistency controls and human validation.",
    ],
    metrics: [
      "234,933 historical calls analyzed",
      "6,069 multilingual audio resources prepared",
      "621 real emergency calls",
      "5,448 complementary audio segments",
    ],
    outcome:
      "Developed a functional prototype that converts voice information into structured and verifiable intervention records.",
    technologies: [
      "Python",
      "Speech AI",
      "NLP",
      "Information Extraction",
      "Transformers",
      "Human-in-the-loop",
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
    ],
    note:
      "Alerte IA is the first applied AI solution developed within the MARIS Innovation Project.",
  },
  {
    id: "ramypulse",
    name: "RamyPulse — AI-Powered Customer Intelligence",
    category: "NLP · Sentiment Analysis · Marketing Intelligence",
    featured: true,
    summary:
      "A multilingual customer-intelligence platform designed to analyze Algerian consumer opinions written in Darja, French and Arabizi.",
    problem:
      "Generic sentiment-analysis tools struggle with Algerian dialect, code-switching, sarcasm and local expressions.",
    approach: [
      "Specialized language model adapted to Algerian dialect",
      "Aspect-based sentiment analysis and hybrid classification",
      "Language-specific lexicon with an LLM fallback",
      "RAG-powered conversational analysis",
      "Dashboard, alerts and recommendations",
    ],
    outcome:
      "The functional prototype combines local-language modeling and decision-oriented analysis to turn public consumer comments into actionable marketing insight.",
    technologies: ["Python", "NLP", "Transformers", "ABSA", "RAG", "LLM", "FastAPI", "Streamlit"],
    metrics: ["96.6% accuracy", "0.94 macro F1", "28 / 29 adversarial tests", "1,834 comments prepared"],
    image: ramyPulseImage,
    imageAlt: "RamyPulse project logo on a dark background",
    note: "Presented at the AI EXPO 2026 competition.",
  },
  {
    id: "let-data-dz",
    name: "Let-Data-DZ — Multilingual Speech Data Collection",
    category: "Data Collection · Low-Resource Languages",
    featured: true,
    summary:
      "A web platform created to collect guided speech recordings in Kabyle, Algerian Arabic and French for low-resource speech recognition research.",
    problem:
      "Low-resource speech systems need structured and language-aware data collection workflows before meaningful model training and evaluation can begin.",
    approach: [
      "Guided multilingual and role-based scenarios",
      "Browser-based voice recording",
      "Structured upload and secure cloud integration",
      "Dataset organization and validation",
    ],
    outcome:
      "The platform supported the collection of 5,448 multilingual audio segments while keeping recording scenarios and dataset structure consistent.",
    technologies: ["Python", "Streamlit", "Cloud Storage", "Audio Processing", "Data Validation"],
    metrics: ["5,448 audio segments", "3 languages", "Guided role-based scenarios"],
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
      "A complete analytical system covering data warehouse design, ETL, multidimensional analysis and interactive visualization.",
    problem:
      "Operational data needs a coherent analytical model before decision-makers can explore trends across multiple business dimensions.",
    approach: ["PostgreSQL star schema", "ETL and data marts", "Roll-up, drill-down, slice and dice", "Interactive OLAP visualization"],
    outcome:
      "Connected data modeling and multidimensional exploration in a single decision-support workflow.",
    technologies: ["PostgreSQL", "SQL", "Python", "ETL", "OLAP", "Plotly", "Power BI"],
    metrics: [],
    image: olapImage,
    imageAlt: "Abstract OLAP cube visual; verified project screenshot is pending",
  },
  {
    id: "java-postgresql",
    name: "Secure Data Management Application",
    category: "Software Engineering · Databases",
    featured: false,
    summary:
      "A desktop application for securely managing structured and sensitive information through a graphical interface connected to PostgreSQL.",
    problem:
      "Structured records require consistent validation and controlled create, update, search and deletion workflows.",
    approach: ["Java Swing interface", "PostgreSQL connectivity", "Input validation", "Centralized data management"],
    outcome:
      "Delivered a reliable desktop workflow for managing and validating user-submitted records.",
    technologies: ["Java", "Java Swing", "NetBeans", "PostgreSQL", "SQL", "Input Validation"],
    metrics: [],
    image: javaImage,
    imageAlt:
      "Abstract database validation visual; verified desktop application screenshot is pending",
  },
  {
    id: "data-analytics",
    name: "Industrial Data Analytics & Customer Segmentation",
    category: "Data Analytics · Business Intelligence",
    featured: false,
    summary:
      "An analytical project combining business dashboards, data preparation and customer segmentation to support operational decision-making.",
    problem:
      "Sales, production, inventory and customer data must be transformed into clear indicators before teams can interpret operational performance.",
    approach: ["Data quality control", "Power Query transformations", "DAX measures", "K-Means customer segmentation"],
    outcome:
      "Built analytical views for KPIs and customer profiles during the CEVITAL internship using anonymized or non-sensitive portfolio visuals.",
    technologies: ["Power BI", "PostgreSQL", "SQL", "Power Query", "DAX", "Python", "scikit-learn", "K-Means"],
    metrics: [],
    image: analyticsImage,
    imageAlt: "Power BI dashboard created for an industrial data analytics project",
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
  "ABSA",
  "LoRA / QLoRA",
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
      "AI EXPO 2026 competition certificate of participation naming Leticia Bouchenna and Belghazi Warda",
    note: "Participation in the AI EXPO 2026 competition with RamyPulse.",
  },
  {
    id: "english-club",
    title: "English Speaking Club Program",
    year: "Completed · 2023 — 2024",
    issuer: "Elites School of English",
    credentialImage: englishClubCredential,
    credentialAlt:
      "English Speaking Club Program certificate awarded to Leticia Bouchenna",
  },
];

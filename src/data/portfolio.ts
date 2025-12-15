export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    frontend: string[];
    backend: string[];
    marketing: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Tushar Shrivastav",
  role: "Web Developer & Client Coordinator",
  about:
    "Web Developer and Digital Specialist with ~3 years of freelance and startup experience. Proficient in JavaScript, React, and Next.js, delivering responsive web applications. Played a key role in client coordination and delivery across 100+ projects, with strong QA, bug-fixing, and cross-browser testing experience.",
  profileImage: "/images/profilep.webp",
  blogUrl: "",
  social: [
    {
      platform: "Email",
      url: "mailto:tusharshrivastav1711@gmail.com",
      icon: "Mail",
    },
    // Add other social placeholders if needed, cleared Vipul's data
  ],
  skills: {
    frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    backend: [
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "SQL",
      "REST APIs",
    ],
    marketing: [
      "SEO",
      "Google Ads",
      "Email Marketing",
      "CRO",
      "Analytics (GA4)",
    ],
    tools: [
      "Git",
      "n8n",
      "Looker Studio",
      "AI Pipelines",
      "QA Testing",
      "VS Code",
    ],
  },
  experience: [
    {
      company: "Sahindia Tech",
      role: "Web Developer & Client Coordinator",
      period: "11/2023 – 03/2025",
      description: [
        "Developed responsive React-based web applications using Tailwind and Node.js.",
        "Partnered with design and marketing teams to align UI/UX with brand and campaign strategy.",
        "Contributed to agile sprints, planning, and retrospectives.",
      ],
    },
    {
      company: "Upwork",
      role: "Freelance Web-Developer",
      period: "01/2022 – 10/2023",
      description: [
        "Successfully completed 70+ client projects with consistent 5-star positive feedback.",
        "Acted as primary client contact, translating requirements into deliverables.",
        "Executed QA testing for performance, functionality, and cross-browser compatibility.",
        "Maintained strong client relationships.",
      ],
    },
  ],
  projects: [
    {
      title: "Newsifai.com",
      description:
        "Developed an AI-powered news platform using automated content pipelines for generation, inspection, and publishing.",
      techStack: ["AI", "Automation", "Next.js", "Content Pipelines"],
      link: "https://newsifai.com",
      github: "",
      thumbnail: "/images/projects/portfolio.webp", // maintaining placeholder
    },
    {
      title: "treasrup",
      description: "Ecommerce website for selling products.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "postgresql",
        "Node.js",
        "Express",
      ],
      link: "https://treasrup.vercel.app/",
      github: "",
      thumbnail: "/images/projects/portfolio.webp",
    },
    {
      title: "Zoopster-clothing",
      description: "Ecommerce website for selling products.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "postgresql",
        "Node.js",
        "Express",
      ],
      link: "https://treasrup.vercel.app/",
      github: "",
      thumbnail: "/images/projects/portfolio.webp",
    },
  ],
};

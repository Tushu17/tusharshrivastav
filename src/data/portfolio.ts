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
  featured?: boolean;
  images?: {
    pc: string;
    mobile: string;
  };
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
  role: "Product Developer & Client Coordinator",

  about: `I’m a web developer and digital marketer with hands-on experience building real-world products using JavaScript-based tech stacks. My work sits at the intersection of engineering, product, and growth — where clean code meets practical business outcomes.

I have worked as a freelance developer and as part of startup teams, delivering production-ready applications using React, Next.js, Node.js, Supabase, and modern UI frameworks. I enjoy building systems end-to-end — from frontend experience and backend logic to automation, analytics, and deployment.

Currently, I’m focused on creating AI-driven workflows for visual content generation, combining relevant video assets with tone-aligned audio using AI and LLMs. I’m particularly interested in products that scale through automation, smart tooling, and thoughtful UX.

I value clarity, ownership, and execution. I prefer shipping fewer things well over building many things halfway, and I’m always looking to work on problems that require both technical depth and product thinking.`,

  profileImage: "/images/profilep.webp",
  blogUrl: "",
  social: [
    {
      platform: "Email",
      url: "mailto:tusharshrivastav1711@gmail.com",
      icon: "Mail",
    },
    {
      platform: "Github",
      url: "https://github.com/Tushu17",
      icon: "Github",
    },
    {
      platform: "Linkedin",
      url: "https://www.linkedin.com/in/tushar-shrivastav17/",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://x.com/Tushar186024",
      icon: "X",
    },
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
      "Vercel",
      "Docker",
      "Figma",
      "Remotion",
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
      title: "Newsifai",
      description:
        "A revolutionary AI-powered news platform that delivers 'information wrapped in entertainment'. Newsifai leverages advanced AI pipelines to curate, summarize, and present personalized news content, making users smarter with every scroll. Built with a complex architecture involving autonomous video generation, AI content analysis, and a high-performance Next.js frontend, it represents the future of digital news consumption.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "AI/LLMs"],
      link: "https://newsifai.com",
      github: "", // Private codebase
      thumbnail: "/images/projects/newsifai-pc-photo.webp",
      featured: true,
      images: {
        pc: "/images/projects/newsifai-pc-photo.webp",
        mobile: "/images/projects/newsifai-mobile-photo2.webp",
      },
    },
    {
      title: "visualsifai",
      description:
        "Currently working on a more efficient way to create visual content by combining relevant video assets with audio tailored to deliver the message in the right tone using AI and LLMs.",
      techStack: [
        "Remotion",
        "Next.js",
        "React",
        "Docker",
        "firebase",
        "Node.js",
        "Express",
      ],
      link: "https://visualsifai.vercel.app/",
      github: "",
      thumbnail: "/images/projects/visualsifai.webp",
    },
    {
      title: "treasrup",
      description:
        "E-commerce platform with secure payments, intuitive product upload flows, and responsive UI, built using Next.js and Supabase.",
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
      thumbnail: "/images/projects/treasrup.webp",
    },
    {
      title: "Zoopster-clothing",
      description: "Ecommerce website for selling products.",
      techStack: ["Next.js", "React", "firebase", "Node.js", "Express"],
      link: "https://zoopster-clothing.vercel.app/",
      github: "",
      thumbnail: "/images/projects/zoopster-clothing.webp",
    },
  ],
};

export type ProjectCategory = "Web" | "Backend" | "Tools";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ProjectSection {
  label: string;
  title: string;
  link: string;
  projects: Project[];
}

export const projectData: ProjectSection = {
  label: "Selected works",
  title: "A few things I’ve made.",
  link: "/projects",
  projects: [
    {
      slug: "cinematra",
      title: "Cinematra",
      description:
        "A streaming platform for Nepali films with adaptive bitrate video, a recommendation engine and content moderation.",
      category: "Web",
      tags: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
      year: 2026,
      featured: true,
      repoUrl: "https://github.com/sushankpp",
    },
    {
      slug: "portfolio-cms",
      title: "Portfolio and CMS",
      description:
        "This site: a personal portfolio with an admin panel for posts, projects and research papers.",
      category: "Web",
      tags: ["Next.js", "Supabase", "Tailwind"],
      year: 2026,
      featured: true,
      liveUrl: "https://sushankpandey.com.np",
    },
    {
      slug: "task-api",
      title: "Task Tracker API",
      description:
        "A REST API with auth, pagination and request validation. Demo entry, replace me.",
      category: "Backend",
      tags: ["Go", "Fiber", "PostgreSQL"],
      year: 2025,
    },
    {
      slug: "expense-splitter",
      title: "Expense Splitter",
      description:
        "Split shared bills between friends and see who owes what. Demo entry, replace me.",
      category: "Web",
      tags: ["Next.js", "Supabase"],
      year: 2025,
    },
    {
      slug: "markdown-notes",
      title: "Markdown Notes CLI",
      description:
        "A small command-line tool for keeping notes as markdown files. Demo entry, replace me.",
      category: "Tools",
      tags: ["Go"],
      year: 2025,
    },
    {
      slug: "job-queue",
      title: "Background Job Queue",
      description:
        "A worker service that retries failed jobs with backoff. Demo entry, replace me.",
      category: "Backend",
      tags: ["Go", "Redis"],
      year: 2024,
    },
  ],
};
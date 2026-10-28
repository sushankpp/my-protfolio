export type ProjectCategory = "Web" | "Tools";
export type ProjectStatus = "Live" | "Completed" | "In progress";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "code" | "live";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  year: number;
  image?: string;
  links: ProjectLink[];
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
      status: "Completed",
      tags: ["Next.js", "Go Fiber", "PostgreSQL", "HLS"],
      year: 2026,
      image: "",
      featured: true,
      links: [
        { label: "Frontend", href: "https://github.com/sushankpp/Cinematra-next", kind: "code" },
        { label: "Backend", href: "https://github.com/sushankpp/Cinematra-Go", kind: "code" },
      ],
    },
    {
      slug: "symphonia",
      title: "Symphonia",
      description:
        "A web app built with React, TypeScript and Vite, backed by its own separate API service.",
      category: "Web",
      status: "Completed",
      tags: ["React", "TypeScript", "Vite"],
      year: 2025,
      image: "",
      featured: true,
      links: [
        { label: "Frontend", href: "https://github.com/sushankpp/Symphonia", kind: "code" },
        { label: "Backend", href: "https://github.com/sushankpp/SymphoniaBackend", kind: "code" },
      ],
    },
    {
      slug: "nepali-typing",
      title: "Nepali Typing",
      description: "A tool for typing in Nepali.",
      category: "Tools",
      status: "Completed",
      tags: ["Next.js", "TypeScript", "Vite"],
      year: 2025,
      image: "",
      links: [
        { label: "Source", href: "https://github.com/sushankpp/Nepali-typing", kind: "code" },
      ],
    },
  ],
};
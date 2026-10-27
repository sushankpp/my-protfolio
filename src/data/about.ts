export const about = {
  label: "Get to know me",
  title: "About",
  titleAccent: "Me.",
  heading: "Turning ideas into working products, end to end.",
  paragraphs: [
    "I graduated in 2026 with a Bachelor of Computer Applications (BCA) from St. Lawrence College. I enjoy building things that live on the internet, from the interface people touch to the database behind it.",
    "My work centers on full-stack web apps: Next.js and TypeScript on the front end, Go and PostgreSQL on the back end. My biggest project so far is Cinematra, a streaming platform for Nepali films with adaptive bitrate video, a recommendation engine and content moderation.",
    "I like software that is simple and easy to maintain. I build small first, write the code myself, and care about the details that make a site feel finished.",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Go",
    "PostgreSQL",
    "Supabase",
    "Git",
  ],
  resume: {
    label: "Download resume",
    href: "/sushank-pandey.pdf",
    fileName: "Sushank-Pandey-Resume.pdf",
  },
  fileName: "about.ts",
  code: [
    "const sushank = {",
    '  role: "Full-stack developer",',
    '  education: "BCA, St. Lawrence College",',
    "  shipped: [",
    '    "Cinematra, a Nepali film streaming platform",',
    '    "This portfolio and its CMS",',
    "  ],",
    '  interests: ["Sleeping", "Reading", "Roaming"],',
    '  writes: ["Research papers", "Blog posts"],',
    '  lookingFor: "Clients to collaborate with",',
    "};",
  ],
};

export type About = typeof about;

export type SocialKey = "github" | "linkedin" | "instagram" | "email";

export const profile = {
  name: "Sushank Pandey",
  greeting: "Hello, I'm",
  tagline: "I build thoughtful interfaces and research tools for complex ideas",
  image: { src: "/sushank.jpeg", alt: "Sushank Pandey" },
  primaryCta: { label: "View projects", href: "/#projects" },
  secondaryCta: { label: "Get in touch", href: "/#contact" },
  scrollTarget: "/#about",
  socials: [
    { key: "github", label: "GitHub", handle: "@sushankpp", href: "https://github.com/sushankpp" },
    { key: "linkedin", label: "LinkedIn", handle: "in/sushank-pandey", href: "https://www.linkedin.com/in/sushank-pandey-558546266" },
    { key: "instagram", label: "Instagram", handle: "@sushank_pandey1", href: "https://www.instagram.com/sushank_pandey1/" },
    { key: "email", label: "Email", handle: "sushankpandey233@gmail.com", href: "mailto:sushankpandey233@gmail.com" },
  ] satisfies { key: SocialKey; label: string; handle: string; href: string }[],
};

export type Profile = typeof profile;
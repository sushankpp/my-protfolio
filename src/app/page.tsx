import About from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sushank Pandey",
  url: "https://sushankpandey.com.np",
  sameAs: [
    "https://www.linkedin.com/in/sushank-pandey-8b0a1b1a9/",
    "https://github.com/sushankpp",
  ],
  image: "https://sushankpandey.com.np/sushank.jpeg",
  jobTitle: "Frontend Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  knowsAbout: ["React", "TypeScript", "WordPress"],
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}

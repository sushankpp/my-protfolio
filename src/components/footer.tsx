import { Container } from "@/components/ui/container";

const links = [
  { label: "GitHub", href: "https://github.com/sushankpp", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sushank-pandey-558546266", external: true },
  { label: "Email", href: "mailto:sushankpandey233@gmail.com", external: false },
];

export async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sushank Pandey. All rights reserved.
          </p>
          <nav className="flex items-center gap-3 text-sm text-muted-foreground">
            {links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">&middot;</span>}
                <a
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/data/nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between border-b border-border md:grid md:grid-cols-[1fr_auto_1fr]">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.cta ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-ring hover:border-primary hover:text-primary"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}

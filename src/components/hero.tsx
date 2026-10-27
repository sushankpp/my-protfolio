import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { profile, type SocialKey } from "@/data/profile";
import { HeroBackground } from "./shared/hero-background";

const socialMeta: Record<
  SocialKey,
  { icon: ComponentType<{ className?: string }>; hover: string }
> = {
  github: {
    icon: FaGithub,
    hover: "group-hover:bg-foreground group-hover:text-background",
  },
  linkedin: {
    icon: FaLinkedin,
    hover: "group-hover:bg-[#0A66C2] group-hover:text-white",
  },
  instagram: {
    icon: FaInstagram,
    hover:
      "group-hover:bg-gradient-to-tr group-hover:from-[#f58529] group-hover:via-[#dd2a7b] group-hover:to-[#8134af] group-hover:text-white",
  },
  email: {
    icon: Mail,
    hover: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
};

export function Hero({ data = profile }: { data?: typeof profile }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16">
      <HeroBackground />
      <Container>
        <div className="flex justify-center">
          <div className="size-[200px] rounded-full border border-border bg-transparent p-2 shadow-lg shadow-primary/10 dark:shadow-black/10">
            <Image
              width={200}
              height={200}
              src={data.image.src}
              alt={data.image.alt}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-center text-[24px] font-semibold text-muted-foreground">
            {data.greeting}
          </p>
          <h1 className="bg-gradient-to-r from-primary via-primary to-primary-hover bg-clip-text pb-2 text-center text-[46px] font-bold leading-[1.1] tracking-tight text-transparent md:text-[72px]">
            {data.name}
          </h1>
          <p className="mt-2 text-center text-[20px] text-muted-foreground">
            {data.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              nativeButton={false}
              variant="default"
              className="h-12 rounded-full bg-clip-border px-6 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:text-white hover:shadow-[0_0_24px_4px] hover:shadow-primary/40 dark:hover:text-primary-foreground"
              render={<Link href={data.primaryCta.href} />}
            >
              {data.primaryCta.label} <ArrowUpRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="h-12 rounded-full border-border px-6 text-base font-medium transition-colors hover:border-primary hover:text-primary"
              render={<Link href={data.secondaryCta.href} />}
            >
              <Mail className="size-4" /> {data.secondaryCta.label}
            </Button>
          </div>

          <div className="mx-auto mt-12 grid w-full max-w-[1100px] grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border/50 md:grid-cols-2 lg:grid-cols-4">
            {data.socials.map((s) => {
              const { icon: Icon, hover } = socialMeta[s.key];
              const external = !s.href.startsWith("mailto:");
              return (
                <a
                  key={s.key}
                  href={s.href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group flex items-center gap-3 bg-card p-4 transition-colors hover:bg-muted"
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-transparent ${hover}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      {s.label}
                      <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </span>
                    <span className="block truncate font-mono text-xs text-muted-foreground">
                      {s.handle}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex w-full items-center justify-center">
            <a
              href={data.scrollTarget}
              aria-label="Scroll down"
              className="group rounded-full border border-border bg-background/60 p-3 shadow-lg shadow-primary/10 transition-all duration-300 hover:border-primary dark:shadow-black/10"
            >
              <ArrowDown className="mx-auto size-6 animate-bounce text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import type { Project, ProjectStatus } from "@/data/project";

const statusStyle: Record<ProjectStatus, string> = {
  Live: "border-primary/50 text-primary",
  Completed: "border-primary/50 text-primary",
  "In progress": "border-border text-muted-foreground",
};

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, status, tags, year, image, links } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/60 cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/15 to-transparent">
            <span className="font-mono text-4xl font-semibold text-primary/40">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{year}</p>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full border px-3 py-0.5 font-mono text-xs",
              statusStyle[status]
            )}
          >
            {status}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border/60 bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${l.label}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {l.kind === "code" ? (
                <FaGithub className="size-3.5" />
              ) : (
                <ExternalLink className="size-3.5" />
              )}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
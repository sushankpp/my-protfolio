import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/container";
import { projectData } from "@/data/project";
import { ProjectFilters } from "./projects/project-filters";

export function Projects({
  data = projectData,
}: {
  data?: typeof projectData;
}) {
  return (
    <section className="" id="projects">
      <Container>
        <div className="border-t border-muted dark:border-muted-foreground pt-8 md:pt-10 flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-primary">
              {data.label}
            </p>
            <h2 className="text-[24px] font-normal text-foreground md:text-[32px] mt-2">
              {data.title}
            </h2>
          </div>
          <a
            href={data.link}
            className="text-[14px] font-medium text-muted-foreground relative md:text-base flex items-end after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-primary transition-colors"
          >
            View all projects <ArrowUpRight className="size-4 ml-1" />
          </a>
        </div>
        <ProjectFilters projects={data.projects} />
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Project = { slug: string; title: string; category: string };

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter Projects"
      >
        {categories.map((c) => (
          <Button
            key={c}
            variant={active === c ? "default" : "outline"}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {c}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <div className="" key={p.slug}></div>
        ))}
      </div>
    </>
  );
}

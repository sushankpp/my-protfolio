import { Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { about, type About as AboutData } from "@/data/about";

function CodeLine({ line }: { line: string }) {
  const trimmed = line.trim();
  const i = line.indexOf(":");
  if (trimmed.startsWith('"')) {
    return <span className="text-foreground">{line}</span>;
  }
  if (i === -1 || trimmed.startsWith("const")) {
    return <span className="text-muted-foreground">{line}</span>;
  }
  return (
    <>
      <span className="text-primary">{line.slice(0, i)}</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-foreground">{line.slice(i + 1)}</span>
    </>
  );
}

export default function About({ data = about }: { data?: AboutData }) {
  return (
    <section id="about" className="mt-8 scroll-mt-24 pb-16 md:mt-14 md:pb-24">
      <Container>
        <div className="mb-8 border-b border-muted dark:border-muted-foreground pb-4 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-primary">
            {data.label}
          </p>
          <h2 className="text-[32px] font-bold text-foreground md:text-[40px]">
            {data.title}
            <span className="text-primary"> {data.titleAccent}</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-[28px]">
              {data.heading}
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {data.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[1px] text-muted-foreground/80">
              Core skills
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 cursor-pointer">
              {data.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <Button
              nativeButton={false}
              variant="link"
              className="relative mt-6 h-auto px-0 py-1 text-base font-medium text-foreground transition-colors hover:text-primary hover:no-underline after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              render={<a href={data.resume.href} download={data.resume.fileName} />}
            >
              <Download className="size-4" />
              {data.resume.label}
            </Button>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/10">
              <div className="relative flex items-center border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-400" />
                  <span className="size-3 rounded-full bg-green-400" />
                </div>
                <span className="absolute inset-x-0 text-center font-mono text-xs text-muted-foreground">
                  {data.fileName}
                </span>
              </div>
              <div className="overflow-x-auto p-4 font-mono text-sm leading-7">
                {data.code.map((line, i) => (
                  <div key={i} className="flex hover:bg-muted/50">
                    <span className="w-8 shrink-0 select-none text-muted-foreground/60">
                      {i + 1}
                    </span>
                    <code className="whitespace-pre">
                      <CodeLine line={line} />
                      {i === data.code.length - 1 && (
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
                      )}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
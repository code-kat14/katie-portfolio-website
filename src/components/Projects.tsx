import { useState } from "react";
import { projects, type Project } from "@/data/site";
import { Action, SectionHeading, Tag } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

function ProjectShowcase({ project, flipped }: { project: Project; flipped: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = `${project.id}-details`;

  return (
    <article className="reveal">
      <div className="flex items-end gap-6">
        <span className="font-mono text-5xl font-bold text-foreground/15 sm:text-7xl">
          {project.number}
        </span>
        <div className="pb-1">
          <h3 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">{project.name}</h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {project.category}
          </p>
        </div>
      </div>

      <div className="mt-7 grid items-start gap-8 lg:grid-cols-12">
        <div
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-border lg:col-span-6",
            flipped && "lg:order-2",
          )}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
          />
        </div>

        <div className={cn("lg:col-span-6", flipped && "lg:order-1")}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Tag key={tag} tone={i === 0 ? "primary" : "default"}>
                {tag}
              </Tag>
            ))}
          </div>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Goal
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{project.goal}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                My contribution
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{project.contribution}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Tools &amp; platforms
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{project.tools}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Result
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{project.result}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Action href={project.primaryLink.href} external>
              {project.primaryLink.label}
            </Action>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="panel inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              {open ? "Hide Details" : "View Project Details"}
              <span aria-hidden="true" className={cn("text-xs transition-transform", open && "rotate-180")}>
                ↓
              </span>
            </button>
          </div>

          {open ? (
            <div id={panelId} className="panel mt-5 rounded-2xl p-6">
              <ul className="space-y-3">
                {project.details.map((d) => (
                  <li key={d.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime" />
                    <span className="text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              {project.learned ? (
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    What I learned
                  </span>
                  <span className="mt-1.5 block text-muted-foreground">{project.learned}</span>
                </p>
              ) : null}
            </div>
          ) : null}

          {project.note ? (
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.note}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="Index 02"
        eyebrow="(b) Case studies"
        title="Work I planned, built, and launched."
        intro="Three projects, told as stories: the goal, what I actually did, the tools involved, and what shipped."
      />

      <div className="mt-16 space-y-24">
        {projects.map((project, i) => (
          <ProjectShowcase key={project.id} project={project} flipped={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

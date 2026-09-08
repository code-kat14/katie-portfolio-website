import { education, experience, type TimelineEntry } from "@/data/site";
import { SectionHeading } from "@/components/ui-kit";

function Entry({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="reveal relative pl-8 sm:pl-12">
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/20 sm:left-0"
      />
      {entry.period ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {entry.period}
        </p>
      ) : null}
      <h4 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">{entry.role}</h4>
      <p className="mt-1 text-sm font-semibold text-accent">{entry.org}</p>
      <ul className="mt-4 space-y-2.5">
        {entry.points.map((point) => (
          <li key={point.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime" />
            <span className="text-muted-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="Index 04"
        eyebrow="(d) Timeline"
        title="Experience &amp; education."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="reveal font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Experience
          </h3>
          <ol className="relative mt-8 space-y-12 border-l border-border">
            {experience.map((entry) => (
              <Entry key={entry.role} entry={entry} />
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <h3 className="reveal font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Education &amp; certificates
          </h3>
          <ol className="relative mt-8 space-y-12 border-l border-border">
            {education.map((entry) => (
              <Entry key={entry.org} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

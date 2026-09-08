import { howIWork } from "@/data/site";
import { SectionHeading } from "@/components/ui-kit";

export function HowIWork() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="Index 05" eyebrow="(e) How I work" title="My approach, plainly." />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {howIWork.map((item, i) => (
          <div
            key={item.title}
            className="reveal group bg-background p-8 transition-colors hover:bg-card sm:p-10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight transition-colors group-hover:text-primary">
              {item.title}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { aboutParagraphs, recommendation } from "@/data/site";
import { SectionHeading } from "@/components/ui-kit";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="Index 01" eyebrow="(a) About" title="Business sense, built hands-on." />

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="reveal space-y-6 lg:col-span-7">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-pretty leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <figure className="reveal panel relative rounded-2xl p-8 lg:col-span-5">
          <span aria-hidden="true" className="absolute -top-4 left-6 font-mono text-6xl leading-none text-primary">
            &ldquo;
          </span>
          <blockquote className="text-pretty text-lg font-semibold leading-snug">{recommendation.quote}</blockquote>
          <figcaption className="mt-5 border-t border-border pt-4 text-sm">
            <span className="font-bold">{recommendation.author}</span>
            <span className="mt-1 block text-muted-foreground">{recommendation.title}</span>
            <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Letter of recommendation
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

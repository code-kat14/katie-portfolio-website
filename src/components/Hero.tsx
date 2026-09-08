import { profile, qualities } from "@/data/site";
import { Action, Tag } from "@/components/ui-kit";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* bold ambient color fields */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 size-[34rem] rounded-full bg-primary/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 size-[30rem] rounded-full bg-hot/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Portfolio
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Index 00
          </span>
        </div>

        <p className="reveal panel mt-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground">
          <span className="size-2 rounded-full bg-lime" />
          {profile.badge}
        </p>

        <h1 className="reveal mt-6 text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl lg:text-6xl">
          <span className="block">Katie</span>
          <span className="block text-primary">Nino</span>
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <p className="max-w-[34ch] text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-[54ch] text-pretty leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action href="#projects">View My Work</Action>
              <Action href="#contact" variant="outline">
                Let&apos;s Connect
              </Action>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="panel rounded-2xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                What I bring
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {qualities.map((q) => (
                  <Tag key={q}>{q}</Tag>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{profile.openTo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

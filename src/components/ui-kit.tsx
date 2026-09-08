import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small mono label used above every section heading. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          {index}
        </span>
      </div>
      <h2
        id={id}
        className="mt-6 text-4xl font-extrabold tracking-tighter text-balance sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/** Pill used for skills, project labels and personal qualities. */
export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "primary" | "accent" | "lime";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
        tone === "default" &&
          "panel text-foreground hover:border-primary/60 hover:text-primary",
        tone === "primary" && "bg-primary/15 text-primary",
        tone === "accent" && "bg-accent/15 text-accent",
        tone === "lime" && "bg-lime/15 text-lime",
      )}
    >
      {children}
    </span>
  );
}

type ActionProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  download?: boolean;
};

/** One button style for the whole site — solid, outline or ghost. */
export function Action({
  children,
  href,
  external = false,
  variant = "solid",
  className,
  download = false,
}: ActionProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight transition-all duration-200 hover:-translate-y-0.5";

  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-lime",
    outline: "panel text-foreground hover:border-primary hover:text-primary",
    ghost: "text-foreground hover:text-primary",
  } as const;

  return (
    <a
      href={href}
      className={cn(base, styles[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
      {external ? (
        <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">
          ↗
        </span>
      ) : null}
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}

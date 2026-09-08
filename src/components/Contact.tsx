import { profile } from "@/data/site";
import { Action, SectionHeading } from "@/components/ui-kit";

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github },
    ...(profile.linkedin
      ? [{ label: "LinkedIn", value: "LinkedIn profile", href: profile.linkedin }]
      : []),
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="Index 06" eyebrow="(f) Contact" title="Let's build something that works." />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                ? undefined
                : "noopener noreferrer"
            }
            className="reveal group panel rounded-2xl p-6 transition-colors hover:border-primary/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {link.label}
            </span>
            <p className="mt-3 break-words text-lg font-semibold text-foreground group-hover:text-primary">
              {link.value}
            </p>
          </a>
        ))}

        <div className="reveal panel rounded-2xl p-6 sm:col-span-2 lg:col-span-4">
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{profile.openTo}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Action href={profile.resumeUrl} variant="outline" download>
              Download Resume
            </Action>
            <Action href={`mailto:${profile.email}`}>Email Katie</Action>
          </div>
        </div>
      </div>
    </section>
  );
}

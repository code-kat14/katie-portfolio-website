import { navLinks, profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-2xl font-extrabold tracking-tighter">
              Katie <span className="text-primary">Nino</span>
            </p>
            <p className="mt-2 max-w-[36ch] text-sm text-muted-foreground">
              I won't come to you with problems. I'll come to you with solutions.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                GitHub <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            {profile.linkedin ? (
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Katie Nino · All rights reserved
        </div>
      </div>
    </footer>
  );
}

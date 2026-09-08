import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";
import profileAsset from "@/assets/profile_picture.jpeg";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          aria-label="Main"
          className={cn(
            "mt-4 flex items-center justify-between rounded-2xl bg-background/90 px-4 py-3 transition-all duration-300",
            scrolled ? "panel shadow-2xl shadow-background/60" : "border border-transparent",
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em]"
          >
            <img
              src={profileAsset}
              alt="Katie Nino"
              className="size-8 rounded-lg object-cover"
            />
            <span className="hidden sm:inline">
              {profile.firstName} <span className="text-primary">Nino</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-lime sm:inline-flex"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="panel grid size-10 place-items-center rounded-xl lg:hidden"
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={cn(
                    "h-0.5 w-full bg-foreground transition-transform",
                    open && "translate-y-2 rotate-45",
                  )}
                />
                <span
                  className={cn("h-0.5 w-full bg-foreground transition-opacity", open && "opacity-0")}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-foreground transition-transform",
                    open && "-translate-y-2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        {open ? (
          <div id="mobile-menu" className="mt-2 rounded-2xl border border-border bg-background/85 p-4 shadow-2xl shadow-background/60 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-semibold transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-xl bg-primary px-3 py-3 text-center text-base font-bold text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}

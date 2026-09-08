import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { HowIWork } from "@/components/HowIWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "Katie Nino — Operations, E-commerce & Digital Projects";
const description =
  "Katie Nino builds better digital experiences and organized operations: Shopify store launches, small-business websites, and ten years of team leadership and customer service.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Katie Nino",
          email: "mailto:katie.data0@gmail.com",
          telephone: "602-228-4458",
          url: "/",
          sameAs: ["https://github.com/code-kat14"],
          jobTitle: "Operations & E-commerce Professional",
          knowsAbout: [
            "E-commerce operations",
            "Shopify",
            "Web development",
            "Customer service",
            "Team leadership",
            "Data analysis",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

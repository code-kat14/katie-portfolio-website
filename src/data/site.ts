/**
 * ============================================================
 *  EDIT ME — all personal info, links and project content live here.
 *  Change text/links in this file and the whole site updates.
 * ============================================================
 */

import shopifyImageAsset from "@/assets/harvest_and_loop_co_face_portfolio_banner.png";
import websiteImageAsset from "@/assets/zac-attack_portfolio_banner_web_demo.png";
import codeImageAsset from "@/assets/github_banner.jpg";
import resumeAsset from "@/assets/G_Nino_Resume_NT.pdf";

const shopifyImage = shopifyImageAsset;
const websiteImage = websiteImageAsset;
const codeImage = codeImageAsset;

export const profile = {
  firstName: "Katie",
  lastName: "Nino",
  fullName: "Katie Nino",
  initials: "KN",
  headline: "Building better digital experiences, organized operations, and practical business solutions.",
  badge: "Hands-on · Adaptable · Detail-driven",
  intro:
    "I take projects from idea to launch. From online stores, business websites, and the day-to-day operations that keep them running. Ten years of leading service teams taught me how a business actually feels to a customer. I won't come to you with problems, I'll come to you with solutions.",
  email: "katie.data0@gmail.com",
  phone: "602-228-4458",
  github: "https://github.com/code-kat14",
  githubHandle: "code-kat14",
  linkedin: "", // Add your LinkedIn URL here and it will appear across the site.
  resumeUrl: resumeAsset,
  openTo:
    "Open to operations, administration, e-commerce, customer experience, healthcare administration, and digital project roles.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const qualities = [
  "Adaptable",
  "Resourceful",
  "Detail-oriented",
  "Organized",
  "Curious",
  "Reliable",
  "Practical",
  "Customer-focused",
];

export const aboutParagraphs = [
  "I'm an operations-minded professional who likes untangling messy work and turning it into something that runs smoothly. For more than ten years I led and trained staff in service businesses, scheduling, supervising, resolving customer issues, and building the kind of relationships that keep people coming back.",
  "More recently I've been building the digital side: a Shopify storefront launched end to end for a small brand, a business website designed, deployed, and connected to a custom domain, and coursework in software engineering and web development where I worked with Python, React, Git, and data tools.",
  "That combination is the point. I understand the customer standing at the counter and the spreadsheet, store settings, or DNS record behind the scenes. When I'm new to something, I find the documentation, test it, and figure it out. Which is exactly how both of my launched projects got finished.",
];

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  tags: string[];
  summary: string;
  goal: string;
  contribution: string;
  tools: string;
  result: string;
  learned?: string;
  note?: string;
  image: string;
  imageAlt: string;
  primaryLink: { label: string; href: string };
  details: string[];
};

export const projects: Project[] = [
  {
    id: "harvest-and-loop",
    number: "01",
    name: "Harvest & Loop Co.",
    category: "Shopify E-commerce Operations",
    tags: ["E-commerce", "Shopify", "Brand Setup", "Product Organization", "Customer Experience"],
    summary:
      "Built and launched a Shopify store for a small brand, turning the owner's products, photos, and colors into an organized storefront that was ready for real customers on day one.",
    goal: "Give a small brand a working online storefront that matched its look and made buying simple.",
    contribution:
      "Built and launched the store: site structure, homepage content, product listings, automated customer emails, and pre-launch quality assurance.",
    tools: "Shopify · Automated email marketing · Product data · Social content",
    result: "A live storefront with organized product listings, working checkout, and event-triggered customer emails.",
    note: "Role: Shopify E-commerce Operations Coordinator, Aug 2026.",
    image: shopifyImage,
    imageAlt: "Harvest & Loop Co. leather teardrop earring shown against a green leaf",
    primaryLink: { label: "View Shopify Store", href: "https://harvestandloopco.myshopify.com/" },
    details: [
      "Converted the owner's products, photography, and brand color scheme into an online storefront.",
      "Configured site structure, homepage content, and product listings including titles, descriptions, pricing, and images.",
      "Set up automated email marketing and customer messaging triggered by store events.",
      "Completed pre-launch QA on product data, navigation, checkout, and email automation.",
      "Helped the owner create social media posts to promote the new store.",
    ],
  },
  {
    id: "zac-attack",
    number: "02",
    name: "Zac Attack",
    category: "Small Business Website",
    tags: ["Website Design", "Small Business", "Mobile Experience", "Branding", "Digital Presence"],
    summary:
      "Designed, built, deployed, and troubleshot a mobile-optimized website for a small local business, including source control, hosting, and a custom domain.",
    goal: "Give a local business a professional, mobile-friendly website at a real, public address.",
    contribution:
      "Designed and developed the site, managed the code on GitHub, deployed to Cloudflare Workers, and configured the custom domain.",
    tools: "Lovable · GitHub · Cloudflare Workers · DNS · Custom domain",
    result:
      "A responsive, mobile-optimized site live on its own domain, tested across both the custom domain and the workers.dev URL.",
    learned:
      "Deployment is its own skill. DNS propagation, domain parking, and hosting configuration all had to be diagnosed and fixed before the site truly worked.",
    note: "Built for new and upcoming groomiing business. Role: Web Developer, Sept 2026.",
    image: websiteImage,
    imageAlt: "Zac Attack Grooming website displayed on a laptop and phone beside a dog",
    primaryLink: { label: "View Live Website", href: "https://zacattackgrooming.com/" },
    details: [
      "Designed and developed a responsive site optimized for mobile using modern front-end practices.",
      "Managed the source code in a GitHub repository for updates and deployment.",
      "Deployed to Cloudflare Workers and configured a custom domain for public access.",
      "Troubleshot DNS propagation, domain parking, and deployment issues to restore proper function.",
      "Tested the site across both the custom domain and the workers.dev URL to verify performance.",
    ],
  },
  {
    id: "github",
    number: "03",
    name: "GitHub",
    category: "Code, Experiments & Technical Learning",
    tags: ["Python", "React", "Data Analysis", "Git"],
    summary:
      "Where employers can explore my code, website work, and technical learning, including coursework projects from Qwasar Software Engineering School.",
    goal: "Show how I actually learn and build, not just describe it.",
    contribution:
      "Coursework and team projects, including a Python text-analysis program and an aggregated job board built with fellow students.",
    tools: "Python · Jupyter Notebooks · Next.js · React · Tailwind CSS · Git · GitHub",
    result: "An open profile you can browse directly.",
    note: "Coursework and collaborative student projects.",
    image: codeImage,
    imageAlt: "Close-up of a code editor with syntax highlighting on a dark screen",
    primaryLink: { label: "Explore My GitHub", href: "https://github.com/code-kat14" },
    details: [
      "Wikipedia Text Analysis: A Python program that scrapes and parses a web page with Requests and BeautifulSoup, then sanitizes and processes text through tokenization and stop-word filtering, with Matplotlib and Pandas for visualization.",
      "Aggregated Job Board: A team-built job board that collects postings from multiple sources; I implemented components in React and Next.js, contributed to UI/UX decisions, organized project planning, and used Git for version control with my team.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Leadership & Management",
    skills: [
      "Staff supervision",
      "Employee mentoring & training",
      "Scheduling",
      "Workflow coordination",
      "Crisis management",
    ],
  },
  {
    title: "Operations & Administration",
    skills: [
      "Service operations",
      "Marketing strategy",
      "Policy & procedure compliance",
      "Process improvement",
      "Software rollout support",
    ],
  },
  {
    title: "E-commerce & Web",
    skills: [
      "Shopify store setup",
      "Product listings & catalog organization",
      "Email marketing automation",
      "Pre-launch QA",
      "Custom domains & DNS",
      "Cloudflare Workers deployment",
    ],
  },
  {
    title: "Customer Engagement",
    skills: [
      "Client relations & retention",
      "Customer service resolution",
      "Relationship building",
      "Client documentation",
    ],
  },
  {
    title: "Software & Technical",
    skills: [
      "Git & GitHub",
      "Docker",
      "Python data cleaning & analysis",
      "Jupyter Notebooks",
      "Tableau Public",
      "Alteryx",
      "Excel & Microsoft Office",
      "Google Docs",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C", "React"],
  },
];

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "Sept 2026",
    role: "Web Developer",
    org: "Zac Attack",
    points: [
      "Designed and developed a responsive, mobile-optimized website using modern front-end practices.",
      "Managed source code on GitHub and deployed to Cloudflare Workers with a custom domain.",
      "Troubleshot DNS propagation and deployment issues to restore full site functionality.",
    ],
  },
  {
    period: "Aug 2026",
    role: "Shopify E-commerce Operations Coordinator",
    org: "Harvest and Loop Co.",
    points: [
      "Built and launched a Shopify store from the owner's products, photos, and brand colors.",
      "Configured site structure, homepage content, and full product listings.",
      "Set up automated, event-triggered email marketing and completed pre-launch QA.",
    ],
  },
  {
    period: "March 2024 – Aug 2026",
    role: "Grooming Supervisor",
    org: "The Barking Dog LLC",
    points: [
      "Built a service department from a minimal client base, growing revenue by 100% in one year and creating enough demand to hire an additional full-time staff member.",
      "Collaborated with the CEO and staff on marketing, growth strategy, and improved scheduling processes.",
      "Maintained an 80% client retention rate through client preference tracking, documentation, and relationship building.",
      "Partnered with the operations team to implement new software for a better customer experience.",
    ],
  },
];

export const education = [
  {
    period: "",
    role: "Intro to Software Engineering · Intro to Web Development · Alteryx Essentials",
    org: "Qwasar Software Engineering School",
    points: ["Certificates in software engineering, web development, and Alteryx essentials."],
  },
  {
    period: "",
    role: "Dental Assisting Program",
    org: "West-MEC",
    points: ["Clinical and administrative training in a healthcare setting."],
  },
];

export const howIWork = [
  {
    title: "I learn by doing",
    body: "Both of my launched projects started with tools I hadn't used yet. I read, test, and keep going until it works.",
  },
  {
    title: "I organize complexity",
    body: "Product catalogs, schedules, and launch checklists. I break tangled work into clear steps and follow through.",
  },
  {
    title: "I think like a customer",
    body: "Ten years in client-facing work means I check the checkout, the phone call, and the first impression.",
  },
  {
    title: "I take ownership",
    body: "When a domain wouldn't resolve, that was my problem to solve. Finished means actually working.",
  },
];

export const recommendation = {
  quote:
    "What stands out most is her \u201Cfigure-it-out\u201D mentality and her ability to pick up technical stuff quickly. She's adaptable, proactive, and someone you can count on.",
  author: "Matt Soper",
  title: "Founder, Gro (formerly Growth @ The Barking Dog)",
};

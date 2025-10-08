import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jhoan Canchila — Software Engineer Front",
  author: "Jhoan Canchila",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: 'nav.experience', href: "#experience" },
    { text: 'nav.projects', href: "#projects" },
    { text: 'nav.about', href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jhoan-canchila-l%C3%A1zaro-449a021b2/" },
    { text: "Github", href: "https://github.com/jhoancanchila" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jhoan Canchila",
    specialty: "hero.profile",
    summary:
      "hero.summary",
    email: "canchila.jhoan@gmail.com",
  },
  experience: [
    {
      company: "Periferia It Group",
      position: "experience.position",
      startDate: "Oct 2024",
      endDate: "Jun 2025",
      summary: [
        "experience.item1",
        "experience.item2",
        "experience.item3",
        "experience.item4"
      ],
    },
    {
      company: "Negotiation By Design",
      position: "experience.position2",
      startDate: "Ago 2022",
      endDate: "Ene 2024",
      summary: [
        "experience.item5",
        "experience.item6",
        "experience.item7",
        "experience.item8"
      ],
    },
    {
      company: "Akelab",
      position: "experience.position2",
      startDate: "Ago 2021",
      endDate: "Ago 2022",
      summary:
        "experience.item9",
    },
  ],
  projects: [
    {
      name: "Tattoos Julia App",
      summary: "projects.tattoosJuliaApp",
      linkPreview: "https://tattoos-julia.vercel.app/",
      linkSource: "https://github.com/Jhoancanchila/tattos-jhoan",
      image: "/tattoos-julia.png",
      tools: ["React", "Tailwind CSS", "formik" ],
    },
    {
      name: "Outlet Store",
      summary: "projects.outletStore",
      linkPreview: "https://outlet-store-vercel.vercel.app/",
      linkSource: "https://github.com/Jhoancanchila/outlet-store.git",
      image: "/outlet-store.png",
      tools: ["React", "Tailwind CSS", "Redux"],
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
      tools: ["React", "Tailwind CSS", "Firebase"],
    },
  ],
  about: {
    description: "about.description",
    image: "/alejandro-big.jpg",
  },
};

// #5755ff

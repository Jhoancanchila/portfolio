import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jhoan Canchila — Software Engineer Front",
  author: "Jhoan Canchila",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
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
    specialty: "Software Engineer Front",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "canchila.jhoan@gmail.com",
  },
  experience: [
    {
      company: "Periferia It Group",
      position: "React Developer",
      startDate: "Oct 2024",
      endDate: "Jun 2025",
      summary: [
        "Development of functionalities with React, applying the principles of Clean Architecture to ensure the modularity and scalability of applications.",
        "Adopt continuous integration and continuous delivery (CI/CD) practices to optimize software development, minimizing errors, accelerating delivery time, and reducing deployment duration.",
        "Collaborate in the analysis and development of scalable components for applications, aligned with customer requirements, using web development tools such as React, Material UI, Tailwind CSS, among others.",
        "Propose improvements and refactorings to optimize web and mobile applications (developed with React and React Native) through the implementation of best practices."
      ],
    },
    {
      company: "Negotiation By Design",
      position: "Frontend Developer",
      startDate: "Ago 2022",
      endDate: "Ene 2024",
      summary: [
        "Participate in the analysis and development of scalable component parts for your applications based on company requirements, implementing development tools such as React JS, Styled Components, Tailwind CSS, and external libraries.",
        "Global state management using the Redux library.",
        "Implement bidirectional communication techniques between client and server, using tools such as socket io.",
        "Develop and maintain backend logic for applications, using technologies such as Node.js and Express js, ensuring efficiency and scalability."
      ],
    },
    {
      company: "Akelab",
      position: "Frontend Developer",
      startDate: "Ago 2021",
      endDate: "Ago 2022",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Tattoos Julia App",
      summary: "A web platform where you can schedule an appointment for tattoo services.",
      linkPreview: "https://tattoos-julia.vercel.app/",
      linkSource: "https://github.com/Jhoancanchila/tattos-jhoan",
      image: "/tattoos-julia.png",
      tools: ["React", "Tailwind CSS", "formik" ],
    },
    {
      name: "Outlet Store",
      summary: "An e-commerce platform that simulates credit card payment flows.",
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
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff

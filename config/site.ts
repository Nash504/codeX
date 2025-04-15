export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Codex.js",
  description:
    "At Codex, we are passionate about transforming ideas into reality through the power of code. With expertise in web and Flutter app development, we bring innovation and precision to every project. Whether you're dreaming of a dynamic web application or a cutting-edge Flutter mobile app, we're here to turn your vision into a digital masterpiece.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/deiondz",
    twitter: "https://twitter.com/Deion_Dz",
    discord: "https://discord.gg/2FSahA5JGX",
    sponsor: "https://pay.upilink.in/pay/deiondsouza12@okaxis?am=10",
  },
  project: [
    {
      title: "BinSense Waste Analytics",
      img: "https://www.upwork.com/att/download/portfolio/persons/uid/964929488448684032/profile/projects/files/84851d89-9003-43f7-b631-f460891e90ad",
      url: "Next.js - Supabase - Gemini AI",
      description:
        "BinSense is an AI-powered waste management system that analyzes waste metrics and categorizes waste types, including e-waste, toxic waste, wet waste, and dry waste. It integrates with IoT waste bins to automate data collection and segregation, aiming to reduce landfill waste and enhance sustainability practices.",
      more: "/projects/BinSense",
    },
    {
      title: "Oasis Ticketing System",
      img: "oasis.jpeg",
      url: "Nextjs - Supabase - Clerk - Razorpay API",
      description:
        "Oasis is a custom-built ticketing system designed to streamline TEDx event management by automating ticket sales, attendee data collection, and providing real-time insights. Developed using Next.js and Supabase, it replaces inefficient past methods and ensures a seamless experience for both organizers and attendees.",
      more: "/projects/Oasis",
    },
    {
      title: "Note Vault",
      img: "https://www.deiondz.in/project/notevault.png",
      url: "Next.js - Tailwind CSS - NextUI",
      description:
        "Note Vault is a user-friendly web application designed to serve as a centralized hub for storing and accessing college notes. Built using Next.js, Tailwind CSS, and the NextUI component library, it offers a seamless experience for students to organize and retrieve lecture notes, past papers, and study resources.",
      more: "/projects/NoteVault",
    },
    {
      title: "Spatial",
      img: "spatial.jpeg",
      url: "Nextjs - Supabase - Flask - Raspberry Pi",
      description:
        "Spatial is a real-time crowd monitoring system that estimates the number of people on a bus using Bluetooth signals from nearby devices. The project aims to enhance public safety by preventing overcrowding incidents.",
      more: "/projects/Spatial",
    },
    {
      title: "ByteSize",
      url: "Next.js -  Tailwind CSS",
      description:
        "ByteSize is an AI-powered flashcard generator that helps you study smarter. Just upload a document or paste some text, and it instantly creates flashcards using AI based on your content.",
      more: "/projects/ByteSize",
      img: "https://i.imgur.com/QXMp469.jpeg",
    },
  ],
};

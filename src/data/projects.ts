// Project data and types for the portfolio

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  images: string[];
  demoEmbed?: string;
};

// Portfolio projects data
export const projects: Project[] = [
  {
    title: "IT Asset Tracker",
    description: "A full-stack tool for tracking IT assets, user assignments, and inventory status in real time.",
    tech: ["Next.js", "Express", "PostgreSQL", "TypeScript"],
    github: "https://github.com/MattStellino/smart_it_asset_tracker",
    live: "https://it-asset-tracker.vercel.app",
    images: ["/images/placeholder.png"],
  },
  {
    title: "Landscaping Website",
    description: "Responsive marketing site for a local landscaping company, featuring a photo gallery, contact form, and service listings.",
    tech: ["Python", "Django", "Bootstrap"],
    github: "https://github.com/MattStellino/PremierGardenscapes",
    live: "https://premiergardenscapes.onrender.com/",
    images: ["/images/pg_home.PNG", "/images/pg_about.PNG", "/images/pg_services.PNG", "/images/pg_gallery.PNG", "/images/pg_contact.PNG"],
  },
  {
    title: "Live Chat App",
    description: "A full-stack real-time chat application featuring user authentication, live messaging, file uploads, desktop notifications, and responsive design. Built with modern web technologies including Socket.io for real-time communication and Redux for state management.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Express.js", "JWT", "PrimeReact"],
    github: "https://github.com/MattStellino/Real-Time-Chat-App",
    live: "https://live-chat-app-swart.vercel.app/chats",
    images: ["/images/Home.PNG", "/images/login.PNG", "/images/Register.PNG", "/images/ui.PNG", "/images/UI2.PNG", "/images/ui3.PNG", "/images/ui4.png", "/images/homewithchat.PNG"],
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio showcasing my projects, experience, and skills. Built with Next.js, featuring animated UI components, dark/light mode, contact forms, and optimized performance. Demonstrates full-stack development capabilities with a focus on user experience and modern design principles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Formspree"],
    github: "https://github.com/MattStellino/portfolio",
    live: "https://my-portfolio-git-master-mattstellinos-projects.vercel.app",
    images: ["/images/image.png"],
  },
  {
    title: "J&R Games Website",
    description: "A comprehensive buylist application for a gaming store, featuring public item browsing with barcode scanning, contact forms, and a secure admin dashboard for inventory management. Built with modern web technologies and mobile-first responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js"],
    github: "https://github.com/MattStellino/jr-games-website",
    live: "https://jr-games-website.vercel.app",
    images: ["/images/placeholder.png"],
  },
];

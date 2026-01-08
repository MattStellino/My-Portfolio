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

// Portfolio projects data - Organized with backend-heavy projects first
export const projects: Project[] = [
  // BACKEND / API PROJECTS (Featured)
  {
    title: "IT Asset Tracker",
    description: "Designed RESTful APIs to manage the full IT asset lifecycle with role-based access control and audit-friendly logging. Built a Node.js and Express.js backend with PostgreSQL for enterprise-grade data modeling, implementing secure JWT authentication, comprehensive asset assignment tracking, and automated workflow management. Features include real-time inventory status updates, user permission management, and detailed audit trails for compliance and operational reliability.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST APIs", "JavaScript"],
    github: "https://github.com/MattStellino/smart_it_asset_tracker",
    live: "https://it-asset-tracker.vercel.app",
    images: ["/images/placeholder.png"],
  },
  {
    title: "Real-Time Chat Application",
    description: "Architected a scalable real-time messaging system using Node.js, Express.js, and WebSocket technology (Socket.io) for bidirectional communication. Implemented secure JWT-based authentication and authorization, MongoDB data modeling for message persistence, and robust error handling for production reliability. Built enterprise-ready backend infrastructure supporting concurrent connections, message queuing, and operational logging for system monitoring.",
    tech: ["Node.js", "Express.js", "Socket.io", "MongoDB", "JWT", "REST APIs", "WebSockets", "JavaScript"],
    github: "https://github.com/MattStellino/Real-Time-Chat-App",
    live: "https://live-chat-app-swart.vercel.app/chats",
    images: ["/images/homewithchat.PNG", "/images/login.PNG", "/images/Register.PNG", "/images/ui.PNG", "/images/UI2.PNG", "/images/ui3.PNG", "/images/ui4.png"],
  },
  // FULL-STACK PROJECTS (Backend Emphasized)
  {
    title: "J&R Games Buylist System",
    description: "Developed a secure buylist management API with PostgreSQL database design and Prisma ORM for type-safe data access. Built RESTful endpoints to manage the store's buylist (items they're willing to purchase from customers), implementing NextAuth.js for enterprise authentication workflows and role-based access control for admin operations. Features include barcode scanning integration, public buylist browsing APIs, and secure admin endpoints for buylist CRUD operations. Built audit logging and data validation layers to ensure data integrity and operational compliance in retail IT environments.",
    tech: ["Node.js", "PostgreSQL", "Prisma", "NextAuth.js", "REST APIs", "TypeScript"],
    github: "https://github.com/MattStellino/jr-games-website",
    live: "https://jnrgames.vercel.app/",
    images: ["/images/JRHome.PNG", "/images/BuyList.PNG", "/images/Barcode.PNG", "/images/Contact.PNG"],
  },
  // OTHER PROJECTS
  {
    title: "Landscaping Business Website",
    description: "Built Django backend with REST API endpoints for content management, contact form processing, and service data handling. Implemented secure form submission handling and database-driven content management for business operations.",
    tech: ["Python", "Django", "REST APIs", "SQL"],
    github: "https://github.com/MattStellino/PremierGardenscapes",
    live: "https://premiergardenscapes.onrender.com/",
    images: ["/images/pg_home.PNG", "/images/pg_about.PNG", "/images/pg_services.PNG", "/images/pg_gallery.PNG", "/images/pg_contact.PNG"],
  },
  {
    title: "Portfolio Website",
    description: "Static site built with Next.js and TypeScript, demonstrating frontend development capabilities. Includes contact form integration and optimized performance architecture.",
    tech: ["Next.js", "TypeScript", "React"],
    github: "https://github.com/MattStellino/portfolio",
    live: "https://mattstellino-portfolio.vercel.app",
    images: ["/images/image.png"],
  },
];

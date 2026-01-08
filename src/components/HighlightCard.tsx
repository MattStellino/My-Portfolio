"use client";
import { motion } from "framer-motion";
import { Settings, Code, Phone } from "lucide-react";

// Experience highlights data
const highlights = [
  {
    title: "Backend API Development",
    subtitle: "Node.js & Express",
    description: "Building secure RESTful APIs with JWT authentication, PostgreSQL data modeling, and enterprise-grade security practices.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "IT & Enterprise Systems",
    subtitle: "Sun Life, Blue Ant Media",
    description: "Enterprise IT support, account provisioning, security protocols, and system migrations in production environments.",
    icon: Settings,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Telecom & Infrastructure",
    subtitle: "Avaya, Amazon Connect",
    description: "Telephony system migrations, asset management, ServiceNow workflows, and infrastructure operations.",
    icon: Phone,
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function HighlightCard() {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Experience Highlights
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Backend development expertise and enterprise IT experience building secure, scalable systems.
        </p>
      </motion.div>
      
      {/* Experience cards grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: 0.1 + index * 0.1 
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Icon with gradient background */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${highlight.gradient} mb-5 group-hover:scale-110 transition-transform`}>
              <highlight.icon className="size-6 text-white" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600">
                {highlight.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {highlight.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

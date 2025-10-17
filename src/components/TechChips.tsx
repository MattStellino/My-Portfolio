"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaLinux, FaRegFileCode, FaChartBar } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTableau } from "react-icons/si";
import { MdSettings, MdCloud } from "react-icons/md";

// Technology stack data
const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-600" },
  { name: "Java", icon: FaJava, color: "text-orange-600" },
  { name: "SQL", icon: FaDatabase, color: "text-purple-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Linux", icon: FaLinux, color: "text-black" },
  { name: "ServiceNow", icon: MdCloud, color: "text-green-700" },
  { name: "Tableau", icon: SiTableau, color: "text-orange-600" },
  { name: "Automation", icon: MdSettings, color: "text-teal-600" },
  { name: "Scripting", icon: FaRegFileCode, color: "text-indigo-600" },
];

// Individual technology chip component
function Chip({ icon: Icon, label, color }: { icon: React.ElementType; label: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-900 hover:border-blue-500 hover:shadow-md transition-all duration-200 group">
      <Icon className={`size-5 ${color} group-hover:scale-110 transition-transform`} aria-hidden />
      {label}
    </span>
  );
}

export default function TechChips() {
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
          Tech I Use
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications and business solutions.
        </p>
      </motion.div>
      
      {/* Technology grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut", 
              delay: 0.1 + index * 0.05 
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Chip icon={tech.icon} label={tech.name} color={tech.color} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

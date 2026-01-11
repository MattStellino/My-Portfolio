"use client";
import Hero from "@/components/Hero";
import HighlightCard from "@/components/HighlightCard";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        {/* HERO SECTION */}
        <section className="py-16 md:py-20 pb-6">
          <Hero />
        </section>

        {/* ABOUT ME SECTION */}
        <section className="py-6 md:py-8">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JavaScript focused backend developer with experience building secure Node.js and Express APIs and IT-centric software solutions. 
                  Strong background in IT support and telecom operations, enabling alignment between backend systems, infrastructure, and enterprise workflows.
                </p>
                <p>
                  I specialize in designing RESTful APIs, implementing authentication and authorization systems (JWT, bcrypt, RBAC), 
                  and building robust data models with PostgreSQL, Oracle SQL, and MongoDB. My experience in enterprise IT environments 
                  (ServiceNow, MDM, telephony systems) informs my approach to building secure, audit-friendly, and operationally reliable backend systems.
                </p>
                <p>
                  With a Computer Programming & Analysis Advanced Diploma, I combine academic foundation with real-world 
                  experience from roles at Sun Life Financial and Blue Ant Media, where I&apos;ve worked with enterprise systems, 
                  account provisioning, security protocols, and process automation.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="size-4" />
                  <span>Bolton, Ontario</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="size-4" />
                  <span>m_stellino@outlook.com</span>
                </div>
              </div>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Core Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-blue-700 mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-600">Node.js, Express.js, REST APIs, JWT, JavaScript, Python, Java</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-purple-700 mb-2">Databases & Data Modeling</h4>
                  <p className="text-sm text-gray-600">PostgreSQL, Oracle SQL, PL/SQL, MongoDB, SQL</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-green-700 mb-2">Cloud & Infrastructure</h4>
                  <p className="text-sm text-gray-600">AWS, Linux, Docker, ServiceNow</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-orange-700 mb-2">Security & Tools</h4>
                  <p className="text-sm text-gray-600">JWT, bcrypt, RBAC, Git, Postman, VS Code, Secure Coding</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE HIGHLIGHTS SECTION */}
        <section className="py-6 md:py-8">
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-full blur-lg"></div>
          
          <HighlightCard />
        </section>
      </div>
    </main>
  );
}
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
                  I&apos;m a motivated Computer Programming & Analysis student with hands-on experience in software and web development, 
                  database programming, and IT support. Based in Bolton, Ontario, I&apos;m eager to contribute my technical skills 
                  and learn in a fast-paced professional environment.
                </p>
                <p>
                  My journey in technology started with a fascination for automation and efficiency. Today, I build 
                  modern web and mobile applications using JavaScript, Python, Java, React, Node.js, and Express, 
                  while maintaining clean, scalable code and exceptional user experiences.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                  working on personal automation tools, or building projects that make everyday tasks more efficient.
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
                  <h4 className="font-semibold text-emerald-700 mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-600">React, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-blue-700 mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-600">Node.js, Express.js, JavaScript, Python, Java, REST APIs</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-purple-700 mb-2">Database & Cloud</h4>
                  <p className="text-sm text-gray-600">MongoDB, SQL, AWS, Azure, Docker</p>
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-semibold text-orange-700 mb-2">Tools & Technologies</h4>
                  <p className="text-sm text-gray-600">Git, VS Code, Postman, Figma, Tableau, Agile</p>
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
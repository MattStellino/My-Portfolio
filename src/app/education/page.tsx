"use client";
import { GraduationCap, MapPin, Calendar, Award, BookOpen, School, Users, Code, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <main className="min-h-dvh">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <section className="py-12 md:py-16 pb-6">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-600 shadow-lg shadow-indigo-500/25 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              >
                <School className="size-8 text-white" />
              </motion.div>
              <motion.h1 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                Education
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                My academic journey in computer programming and technology, building the foundation for my career in software development.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-6 md:py-8">
          <motion.div 
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            {/* Computer Programming and Analysis */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Computer Programming and Analysis - Advanced Diploma</h2>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="size-5" />
                      <span className="font-medium text-lg">Humber College</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-5" />
                      <span>Etobicoke, Ontario</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar className="size-5" />
                    <span className="text-lg">September 2022 - December 2025 (Expected)</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    A comprehensive three-year program focusing on software development, system analysis, and modern programming practices. 
                    This program provides hands-on experience with industry-standard tools and methodologies, including co-op work terms 
                    that offer real-world experience in professional environments. The program prepares students for 
                    careers in full-stack development, software engineering, and IT consulting.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Core Programming Courses */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Code className="size-6" />
                    Core Programming & Development
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Object-Oriented Programming (Java)</div>
                      <div className="text-gray-700 font-medium">• Web Development (HTML5, CSS3, JavaScript)</div>
                      <div className="text-gray-700 font-medium">• Frontend Frameworks (React)</div>
                      <div className="text-gray-700 font-medium">• Backend Development (Node.js, Express.js)</div>
                      <div className="text-gray-700 font-medium">• Mobile App Development (React Native)</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Data Structures & Algorithms</div>
                      <div className="text-gray-700 font-medium">• Software Engineering Principles</div>
                      <div className="text-gray-700 font-medium">• Version Control (Git, GitHub)</div>
                      <div className="text-gray-700 font-medium">• API Development & Integration</div>
                      <div className="text-gray-700 font-medium">• Testing & Quality Assurance</div>
                    </div>
                  </div>
                </div>

                {/* Database & Systems */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="size-6" />
                    Database & Systems Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Database Design & Management (SQL, NoSQL)</div>
                      <div className="text-gray-700 font-medium">• Advanced SQL Queries & Optimization</div>
                      <div className="text-gray-700 font-medium">• Database Administration & Performance Tuning</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Cloud Computing (AWS)</div>
                      <div className="text-gray-700 font-medium">• DevOps & CI/CD Pipelines</div>
                      <div className="text-gray-700 font-medium">• Containerization (Docker)</div>
                    </div>
                  </div>
                </div>

                {/* Business & Project Management */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="size-6" />
                    Business & Project Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Project Management & Agile Methodologies</div>
                      <div className="text-gray-700 font-medium">• Business Analysis & Requirements</div>
                      <div className="text-gray-700 font-medium">• IT Service Management</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-gray-700 font-medium">• Professional Communication</div>
                      <div className="text-gray-700 font-medium">• Team Collaboration & Leadership</div>
                      <div className="text-gray-700 font-medium">• Entrepreneurship in Technology</div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="size-6" />
                    Technologies & Tools Mastered
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Programming Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "TypeScript", "Java", "Python", "HTML5", "CSS3", "SQL", "PL/SQL"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Frameworks & Libraries:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "Express.js", "React Native", "Socket.io", "Redux"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Databases & Cloud:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["MongoDB", "PostgreSQL", "MySQL", "SQLite", "AWS", "Docker", "Git", "Tableau"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Achievements */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="size-6" />
                    Key Achievements & Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="text-gray-700">• Developed multiple full-stack web applications using modern JavaScript frameworks</div>
                    <div className="text-gray-700">• Created real-time chat application with Socket.io and MongoDB integration</div>
                    <div className="text-gray-700">• Built responsive portfolio website with Next.js and TypeScript</div>
                    <div className="text-gray-700">• Developed comprehensive IT Asset Tracking System - A full-featured solution close to enterprise ready with real-time inventory management, user assignment tracking, automated workflows, and advanced reporting capabilities built with React, Node.js, Express, and PostgreSQL</div>
                    <div className="text-gray-700">• Participated in collaborative software development projects using Agile methodologies</div>
                    <div className="text-gray-700">• Completed comprehensive database design and implementation projects</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </section>
      </div>
    </main>
  );
}
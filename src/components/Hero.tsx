"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/5 to-pink-500/5 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-gray-300/20 via-pink-100/15 to-gray-200/20">
            <img 
              src="/images/ChatGPT Image Sep 4, 2025, 03_06_10 AM.png" 
              alt="Matthew Stellino" 
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </motion.div>

        {/* Main content section */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
          >
            Matthew Stellino
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 font-medium"
          >
            Backend Developer & IT Specialist
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto"
          >
            JavaScript focused backend developer building secure Node.js and Express APIs and IT-centric software solutions. 
            Strong background in IT support and telecom operations, enabling alignment between backend systems, infrastructure, and enterprise workflows.
          </motion.p>
        </div>
        
        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            View My Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 bg-white text-gray-900 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

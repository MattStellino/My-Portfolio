import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Stellino Portfolio",
  description: "Backend Developer Portfolio - JavaScript focused backend developer building secure Node.js and Express APIs and IT-centric software solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Main layout with navbar, content, and footer */}
      <body className="min-h-screen flex flex-col bg-transparent text-gray-900 relative">
        {/* Pinkish Grey Background - covers entire page */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-300/20 via-pink-100/15 to-gray-200/20 -z-10"></div>
        
        {/* Decorative Blurred Circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-500/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-40 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-60 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-emerald-500/15 rounded-full blur-2xl"></div>
        </div>
        
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

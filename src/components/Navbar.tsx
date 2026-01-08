"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand - Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="font-display font-semibold text-xl tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
            >
              Matthew Stellino
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`inline-flex h-12 items-center px-3 text-sm font-medium leading-none transition-colors border-b-2 border-transparent hover:text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative z-10
                      ${pathname === link.href
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-600"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA - Right */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden md:block">
              <a
                href="/Matthew Stellino Resume - Backend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 relative z-10"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative z-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4">
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    ${pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <a
                href="/Matthew Stellino Resume - Backend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg shadow-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

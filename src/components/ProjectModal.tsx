"use client";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation (Escape, Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
          );
          break;
        case 'ArrowRight':
          setCurrentImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
          );
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose]);

  // Navigate to next image
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // Navigate to previous image
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl my-8 bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - fixed position */}
            <button
              onClick={onClose}
              className="sticky top-4 right-4 float-right z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image carousel section */}
            <div className="relative h-96 md:h-[500px] bg-gray-100">
              {project.images && project.images.length > 0 ? (
                <>
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain pointer-events-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  
                  {/* Carousel navigation controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                        aria-label="Previous image"
                        type="button"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                        aria-label="Next image"
                        type="button"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Image counter */}
                      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                      
                      {/* Image dots indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                            type="button"
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">No images available</div>
                </div>
              )}
            </div>

            {/* Project details section */}
            <div className="p-6 md:p-8 space-y-6">
                {/* Project title and description */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technology stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demo Credentials */}
                {project.demoCredentials && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Demo Admin Credentials
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Email: </span>
                        <span className="text-gray-900 font-mono">{project.demoCredentials.email}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Password: </span>
                        <span className="text-gray-900 font-mono">{project.demoCredentials.password}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      View Live Project
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navigate to next image in carousel
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // Navigate to previous image in carousel
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Handle live project link click
  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image carousel section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        {project.images && project.images.length > 0 ? (
          <>
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Carousel navigation controls */}
            {project.images.length > 1 && (
              <>
                {/* Image counter */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
                
                {/* Image dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-600 text-sm">No image available</div>
          </div>
        )}
      </div>
      
      {/* Project content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          {project.live && (
            <button
              onClick={handleLiveClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Live
              <ArrowUpRight size={14} />
            </button>
          )}
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            GitHub
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

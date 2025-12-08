"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export interface Project {
  title: string;
  description: string;
  short?: string;
  technologies?: string;
  link: string;
  image: string;
  button_text?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/20 dark:border-gray-700/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="relative p-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center pr-8">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Centered Image */}
        <div className="px-6">
          <div className="relative w-4/5 mx-auto aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-5 space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
          
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(', ').map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-10 mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl transition-colors hover:bg-gray-800 dark:hover:bg-gray-100 mt-6"
          >
            {project.button_text || "Visit Project"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

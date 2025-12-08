"use client";

import Image from "next/image";
import Marquee from "@/src/components/ui/marquee";
import { useState } from "react";
import ProjectModal, { Project } from "@/src/components/ui/project-modal";

interface ProjectsProps {
  containerColor?: string;
}

const other: Project[] = [
  {
    title: "SHA Student Wellbeing Competition",
    short: "Won First Place and a $6K cash prize.",
    description: "This competition focuses on innovative ideas or initiatives that promote the social wellbeing of students at Boston University. Won First Place and a $6K cash prize. See a video of our elevator pitch speech we gave.",
    image: "/sha.jpg",
    link: "https://www.youtube.com/watch?v=kmtSS2ib24E&",
    button_text: "Visit page",
  },
  {
    title: "Spark! Demo Day",
    short: "Won the Audience Choice Award.",
    description: "The event showcases student-led innovation across real-world projects from the Faculty of Computing & Data Sciences. Won the Audience Choice Award during Demo Day. Linked is a description of Demo Day from BU Spark.",
    image: "/demo.jpg",
    link: "https://www.bu.edu/spark/2025/05/06/spring-awakening-innovation-take-center-stage-at-demo-day-spring-2025/",
    button_text: "Visit page",
  },
  {
    title: "Dance at BU",
    short: "Dancer and choreographer for BU Edge.",
    description: "I like to dance and am apart of BU's Contemporary and Jazz dance club. Watch a combo I choreographed for fun!",
    image: "/dance1.jpg",
    link: "https://www.youtube.com/watch?v=KrrvnqHUYGM&t",
    button_text: "Visit page",
  },
];

const projects: Project[] = [
  {
    title: "Missed Connections",
    short: "A proximity-based social media app.",
    description: "A full stack iOS proximity-based social media app that connects people who crossed paths but didn't get the chance to meet. Users can discover missed connections in their area and reach out to make meaningful connections.",
    technologies: "React Native, Expo, TypeScript, Django REST Framework, PostgreSQL, AWS",
    link: "https://missedconnections.tech/",
    image: "/missed_co.png"
  },
  {
    title: "Unifi",
    short: "A collaborative music platform with an AI DJ.",
    description: "A collaborative music platform that dynamically updates music with an AI DJ. Create shared playlists with friends and let the AI curate the perfect mix for any occasion.",
    technologies: "Next.js, TypeScript, JavaScript, React, Vercel, MongoDB, Railway",
    link: "https://www.unifi.boston/login",
    image: "/unifi.png"
  },
  {
    title: "Book Blog",
    short: "Book blog with reviews and essays.",
    description: "Book blog platform with book reviews and essays. A personal space to share literary thoughts, book recommendations, and in-depth analysis of favorite reads.",
    technologies: "Next.js, React, TypeScript, Vercel, PostgresSQL, AWS, TailwindCSS",
    link: "https://jodireads.blog/",
    image: "/book_blog.png"
  },
];

export default function Projects({ containerColor = "bg-gray-100/30 dark:bg-gray-900/30" }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg p-8 transition-colors duration-1000`}>
      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Projects Carousel */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h3>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover={true} pauseOnModal={selectedProject !== null} speed="60s" className="py-4" applyMask={true}>
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="group/card relative w-72 flex-shrink-0 p-5 bg-amber-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all border border-gray-300/40 dark:border-gray-600/40 hover:scale-105 text-left cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.short || project.description}
                  </p>
                </button>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer Intern
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Bridging Tech</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Summer 2025</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Teaching Assistant
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Harvard University / Boston University</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Summer 2025 / Fall 2025</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Algorithms Grader
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Boston University</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">September 2025</p>
            </div>
          </div>
        </div>
       <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Experience
          </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {other.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group/project flex flex-col bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all border border-gray-300/30 dark:border-gray-600/30 overflow-hidden hover:scale-105 text-left cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover/project:text-blue-600 dark:group-hover/project:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm flex-grow">
                {project.short || project.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Marquee from "@/src/components/ui/marquee";

interface ProjectsProps {
  containerColor?: string;
}

const other = [
  {
    title: "SHA Student Wellbeing Competition",
    description: "This competition focuses on innovative ideas or initiatives that promote the social wellbeing of students at Boston University.",
    image: "/sha.jpg",
    link: "https://www.youtube.com/watch?v=kmtSS2ib24E&t=123s",
/*     technologies: "React, Node.js, MongoDB"
 */    /* https://www.bu.edu/hospitality/events/innovation-competition/12-5k-student-wellbeing-competition/ */
  },
  {
    title: "Spark! Demo Day",
    description: "The event showcases student-led innovation across real-world projects from the Faculty of Computing & Data Sciences.",
    image: "/demo.jpg",
    link: "https://www.bu.edu/spark/2025/05/06/spring-awakening-innovation-take-center-stage-at-demo-day-spring-2025/",
/*     technologies: "Python, TensorFlow, Keras"
 */  },
  {
    title: "Dance at BU",
    description: "Dancer and choreographer for BU Edge, a jazz and contemporary club.",
    image: "/dance1.jpg",
    link: "https://www.youtube.com/watch?v=KrrvnqHUYGM&t=61s",
/*     technologies: "React Native, REST API"
 */  },
];

const projects = [
  {
    title: "Missed Connections",
    description: "A full stack iOS proximity-based social media app.",
    technologies: "React Native, Expo, TypeScript, Django REST Framework, PostgreSQL, AWS",
    link: "https://missedconnections.tech/"
  },
  {
    title: "Unifi",
    description: "A collaborative music platform that dynamically updates music with an AI DJ .",
    technologies: "Next.js, TypeScript, JavaScript, React, Vercel, MongoDB, Railway",
    link: "https://github.com/frankiscuwu/unifi"
  },
  {
    title: "Book Blog",
    description: "Book blog platform with book reviews and essays.",
    technologies: "Next.js, React, TypeScript, Vercel, PostgresSQL, AWS, TailwindCSS",
    link: "https://book-blog-three.vercel.app/"
  },
];

export default function Projects({ containerColor = "bg-gray-100/30 dark:bg-gray-900/30" }: ProjectsProps) {
  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg shadow-md p-8 transition-colors duration-1000`}>
      {/* Projects Carousel */}
        <div className="mt-6 -mx-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 px-8">
            Featured Projects
          </h3>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover={true} speed="60s" className="py-4" applyMask={true}>
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card relative w-72 flex-shrink-0 p-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all border border-gray-300/40 dark:border-gray-600/40 hover:scale-105"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                </a>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-300/30 dark:border-gray-600/30">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer Intern
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Bridging Tech</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Summer 2025</p>
            </div>
            <div className="p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-300/30 dark:border-gray-600/30">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Teaching Assistant
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Harvard University / Boston University</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Summer 2025 / Fall 2025</p>
            </div>
            <div className="p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-300/30 dark:border-gray-600/30">
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
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/project flex flex-col bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all border border-gray-300/30 dark:border-gray-600/30 overflow-hidden hover:scale-105"
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
                {project.description}
              </p>
             {/*  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {project.technologies}
              </p> */}
            </div>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}

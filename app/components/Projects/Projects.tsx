import Image from "next/image";

interface ProjectsProps {
  containerColor?: string;
}

const projects = [
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

export default function Projects({ containerColor = "bg-gray-100/30 dark:bg-gray-900/30" }: ProjectsProps) {
  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg shadow-md p-8 transition-colors duration-1000`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
  );
}

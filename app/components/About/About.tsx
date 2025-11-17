"use client";

import { useState, useEffect } from "react";
import { fetchWeather, WeatherData } from "@/app/utils/weather";
import Marquee from "@/app/components/ui/marquee";

interface AboutProps {
  onWeatherChange?: (weatherCondition: string) => void;
  containerColor?: string;
  badgeColor?: string;
}

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

export default function About({ 
  onWeatherChange, 
  containerColor = "bg-gray-100/30 dark:bg-gray-900/30",
  badgeColor = "bg-white/30 dark:bg-gray-900/30"
}: AboutProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadWeather = async () => {
      if (!mounted) return;
      
      setLoading(true);
      const data = await fetchWeather('Boston');
      
      if (data && mounted) {
        setWeather(data);
        if (onWeatherChange) {
          onWeatherChange(data.weather[0].main);
        }
      }
      
      if (mounted) {
        setLoading(false);
      }
    };

    loadWeather();

    return () => {
      mounted = false;
    };
  }, []); // Empty dependency array - only run once on mount

  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg shadow-md p-8 transition-colors duration-1000`}>
      {/* Weather Section */}
      <div className="mb-6 pb-6 border-b border-gray-400/30 dark:border-gray-500/30">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          
          {loading ? (
            <div className={`flex items-center gap-2 ${badgeColor} px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-1000`}>
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-700 dark:text-gray-300">Loading weather...</span>
            </div>
          ) : weather ? (
            <div className={`flex items-center gap-3 ${badgeColor} px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-1000`}>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-12 h-12"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {weather.name}: {Math.round(weather.main.temp)}°F
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                  {weather.weather[0].description}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 sr-only">
        About Me
      </h2>
      
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p className="text-lg">
          I'm a CS and Math Student at Boston University.
        </p>

        {/* Projects Carousel */}
        <div className="mt-6 -mx-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 px-8">
            Featured Projects
          </h3>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover={true} speed="40s" className="py-4" applyMask={true}>
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
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {project.technologies}
                  </p>
                </a>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Experience
          </h3>
          <div className="space-y-4">
             
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer Intern
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Bridging Tech • Summer 2025</p>
              <p className="mt-2">
                Work on frontend gamification in React and Typescript.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Teaching Assistant
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Harvard University • Summer 2025 / Boston University • Fall 2025</p>
              <p className="mt-2">
                Teach discussion sections and host office hours in Java and Python.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Algorithms Grader
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Boston University • September 2025</p>
              <p className="mt-2">
                Assess the accuracy and time complexity of pseudocoded algorithms. 
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Relevant Courses
          </h3>
          <p className="text-gray-600 dark:text-gray-400">Data Structures and Algorithms • Advanced Statistics and Probability • Data Structures • Differential Equations • Discrete Math • Linear Algebra • Vector Calculus • Data Science • Database Systems</p>
          {/* <ul className="list-disc list-inside space-y-2">
            <li>Data Structures and Algorithms</li>
            <li>Advanced Statistics and Probability</li>
            <li>Data Structures</li>
            <li>Differential Equations</li>
            <li>Discrete Math</li>
            <li>Linear Algebra</li>
            <li>Vector Calculus</li>
            <li>Data Science</li>
            <li>Database Systems</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

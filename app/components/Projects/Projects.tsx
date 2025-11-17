interface ProjectsProps {
  containerColor?: string;
}

export default function Projects({ containerColor = "bg-gray-100/30 dark:bg-gray-900/30" }: ProjectsProps) {
  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg shadow-md p-8 transition-colors duration-1000`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Projects
      </h2>
      <div className="grid gap-6">
        <a
          href="https://github.com/yourusername/project1"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all border border-gray-300/30 dark:border-gray-600/30"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Missed Connections
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            A full-stack web application for managing tasks with user authentication and real-time updates.
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            Technologies: React, Node.js, MongoDB
          </p>
        </a>

        <a
          href="https://github.com/yourusername/project2"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all border border-gray-300/30 dark:border-gray-600/30"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Unifi
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Built a neural network to classify images with 95% accuracy using TensorFlow.
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            Technologies: Python, TensorFlow, Keras
          </p>
        </a>

        <a
          href="https://github.com/yourusername/project3"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all border border-gray-300/30 dark:border-gray-600/30"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Book Blog
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Cross-platform mobile app providing real-time weather information and forecasts.
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            Technologies: React Native, REST API
          </p>
        </a>
      </div>
    </div>
  );
}

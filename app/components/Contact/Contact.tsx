interface ContactProps {
  containerColor?: string;
}

export default function Contact({ containerColor = "bg-gray-100/30 dark:bg-gray-900/30" }: ContactProps) {
  return (
    <div className={`${containerColor} backdrop-blur-sm rounded-lg shadow-md p-8 transition-colors duration-1000`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contact
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Email
          </h3>
          <a
            href="jodilinyu@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            jodilinyu@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            LinkedIn
          </h3>
          <a
            href="https://www.linkedin.com/in/jodi-yu-6104022a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            https://www.linkedin.com/in/jodi-yu-6104022a4/
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            GitHub
          </h3>
          <a
            href="https://github.com/jodiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            https://github.com/jodiyu
          </a>
        </div>
      </div>
    </div>
  );
}

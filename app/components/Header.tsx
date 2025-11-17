interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  overlayColor?: string;
}

export default function Header({ activeTab, setActiveTab, overlayColor = "bg-gray-100/30 dark:bg-gray-900/30" }: HeaderProps) {
  return (
    <header className={`${overlayColor} backdrop-blur-sm shadow-sm transition-colors duration-1000`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-300 text-gray-900 dark:text-white">
            Jodi Yu
          </h1>
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab("about")}
              className={`text-lg font-medium transition-colors ${
                activeTab === "about"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`text-lg font-medium transition-colors ${
                activeTab === "projects"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer"
              }`}
            >
              My Work
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`text-lg font-medium transition-colors ${
                activeTab === "contact"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

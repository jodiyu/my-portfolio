"use client";

import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { getWeatherColor, getOverlayColors } from "./utils/weather";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [weatherCondition, setWeatherCondition] = useState("");

  const bgColor = getWeatherColor(weatherCondition);
  const overlayColors = getOverlayColors(weatherCondition);

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-1000`}>
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        overlayColor={overlayColors.header}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === "about" && (
          <About 
            onWeatherChange={setWeatherCondition}
            containerColor={overlayColors.container}
            badgeColor={overlayColors.badge}
          />
        )}
        {activeTab === "projects" && (
          <Projects containerColor={overlayColors.container} />
        )}
        {activeTab === "contact" && (
          <Contact containerColor={overlayColors.container} />
        )}
      </main>
    </div>
  );
}

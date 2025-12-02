"use client";

import { useState } from "react";
import Header from "../components/Header";
import About from "./About/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");


  return (
    <div className={`min-h-screen transition-colors duration-1000`}>
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === "about" && (
          <About 
          />
        )}
        {activeTab === "projects" && (
          <Projects />
        )}
        {activeTab === "contact" && (
          <Contact />
        )}
      </main>
    </div>
  );
}

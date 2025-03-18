import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative bg-[url('/assets/light-background.jpg')] dark:bg-[url('/assets/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="absolute inset-0 bg-black opacity-40 dark:opacity-40 z-0 pointer-events-none"></div>
      <main className="w-full pt-16 relative z-10">
        <Home />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

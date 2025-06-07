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
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Fixierter Hintergrund */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage:
            theme === "dark"
              ? "url('/assets/background.png')"
              : "url('/assets/light-background.jpg')",
        }}
      ></div>

      {/* Overlay, falls gewünscht */}
      <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none"></div>

      <Navbar theme={theme} setTheme={setTheme} />

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

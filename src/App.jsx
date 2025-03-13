import React from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none"></div>
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

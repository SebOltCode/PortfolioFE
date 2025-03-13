import { useState } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;

      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div className="w-full h-screen overflow-y-auto m-0 p-0">
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => handleNavigation("home")}
              className={`hover:text-gray-400 ${
                activePage === "home" ? "text-blue-400" : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("experience")}
              className={`hover:text-gray-400 ${
                activePage === "experience" ? "text-blue-400" : ""
              }`}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("projects")}
              className={`hover:text-gray-400 ${
                activePage === "projects" ? "text-blue-400" : ""
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("about")}
              className={`hover:text-gray-400 ${
                activePage === "about" ? "text-blue-400" : ""
              }`}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation("contact")}
              className={`hover:text-gray-400 ${
                activePage === "contact" ? "text-blue-400" : ""
              }`}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <main className="w-full h-full m-0 p-0">{renderPage()}</main>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projectLinks = {
    inclusivetrip: "https://inclusivetrip.onrender.com/",
    inclusivebackend: "https://github.com/SebOltCode/InclusiveTrip-BE",
    pokefront: "https://github.com/SebOltCode/PokemonFrontend",
    pokemonbackend: "https://github.com/SebOltCode/pokemon_backend",
    ecommerce: "https://github.com/SebOltCode/eCommerce_API_BE",
    moviediary: "https://github.com/SebOltCode/MovieDiary",
  };

  const handleProjectClick = (projectKey) => {
    setCurrentProject(projectKey);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    window.open(projectLinks[currentProject], "_blank");
    setModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
          My Projects <br />
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mx-auto">
          On this page, I showcase the projects I’ve worked on during my
          development bootcamp. Most of these projects were created within just
          one week, except for Inclusive Trip, which was my final project where
          I developed both the frontend and backend. <br /> These projects are
          at a beginner level, but they demonstrate how much I learned in just
          four months and how quickly I progressed as a developer. Each project
          reflects my ability to apply new concepts, work under time
          constraints, and continuously improve my skills.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#home"
            className="bg-teal-500 text-white font-medium py-3 px-6 rounded hover:bg-teal-600 transition w-full sm:w-auto active:bg-teal-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            Contact
          </a>
          <a
            href="#experience"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            Projects
          </a>
          <a
            href="#about"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            About
          </a>

          <a
            href="#contact"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            Contact
          </a>
        </div>

        <div className="marquee-container w-full mt-12 overflow-visible">
          <div className="marquee overflow-visible">
            <div className="marquee-group gap-16 sm:gap-20 md:gap-24 overflow-visible">
              <img
                src="/src/assets/projects-icons/inclusivetripfrontend.webp"
                alt="Inclusive Trip Frontend"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivetrip")}
              />
              <img
                src="/src/assets/projects-icons/inclusivebackend.webp"
                alt="Inclusive Trip Backend"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivebackend")}
              />
              <img
                src="/src/assets/projects-icons/pokefront.png"
                alt="Pokemon Game Frontend"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokefront")}
              />
              <img
                src="/src/assets/projects-icons/pokemonbackend.png"
                alt="Pokemon Game Backend"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokemonbackend")}
              />
              <img
                src="/src/assets/projects-icons/e-commerceapi.webp"
                alt="E-Commerce API"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("ecommerce")}
              />
              <img
                src="/src/assets/projects-icons/moviediary.png"
                alt="Moviediary"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("moviediary")}
              />
            </div>

            <div className="marquee-group gap-16 sm:gap-20 md:gap-24 overflow-visible">
              <img
                src="/src/assets/projects-icons/inclusivetripfrontend.webp"
                alt="Inclusive Trip Frontend"
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivetrip")}
              />
              <img
                src="/src/assets/projects-icons/inclusivebackend.webp"
                alt="Inclusive Trip Backend"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivebackend")}
              />
              <img
                src="/src/assets/projects-icons/pokefront.png"
                alt="Pokemon Game Frontend"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokefront")}
              />
              <img
                src="/src/assets/projects-icons/pokemonbackend.png"
                alt="Pokemon Game Backend"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokemonbackend")}
              />
              <img
                src="/src/assets/projects-icons/e-commerceapi.webp"
                alt="E-Commerce API"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("ecommerce")}
              />
              <img
                src="/src/assets/projects-icons/moviediary.png"
                alt="Moviediary"
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("moviediary")}
              />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          ></div>

          <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-11/12 sm:w-96 z-50 transform transition-all scale-100 opacity-100 border border-teal-500">
            <div className="text-center">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Redirect to Project
                </h3>
              </div>

              <div className="py-4">
                <p className="text-gray-300">
                  You are trying to open the following project:
                </p>
                <p className="text-teal-400 text-sm mt-2">
                  {projectLinks[currentProject]}
                </p>
              </div>

              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-500 transition-colors"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

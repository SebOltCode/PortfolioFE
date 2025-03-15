import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
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
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden mb-16 sm:mb-24 lg:mb-32"
    >
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-4 text-white">
          {t("projects.title")} <br />
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="marquee-container w-full mt-12 overflow-visible">
          <div className="marquee overflow-visible">
            <div className="marquee-group gap-16 sm:gap-20 md:gap-24 overflow-visible">
              <img
                src="/assets/projects-icons/inclusivetripfrontend.webp"
                alt={t("projects.inclusiveTripFrontend")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivetrip")}
              />
              <img
                src="/assets/projects-icons/inclusivebackend.webp"
                alt={t("projects.inclusiveTripBackend")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivebackend")}
              />
              <img
                src="/assets/projects-icons/pokefront.png"
                alt={t("projects.pokemonGameFrontend")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokefront")}
              />
              <img
                src="/assets/projects-icons/pokemonbackend.png"
                alt={t("projects.pokemonGameBackend")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokemonbackend")}
              />
              <img
                src="/assets/projects-icons/e-commerceapi.webp"
                alt={t("projects.eCommerceAPI")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("ecommerce")}
              />
              <img
                src="/assets/projects-icons/moviediary.png"
                alt={t("projects.movieDiary")}
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("moviediary")}
              />
            </div>

            <div className="marquee-group gap-16 sm:gap-20 md:gap-24 overflow-visible">
              <img
                src="/assets/projects-icons/inclusivetripfrontend.webp"
                alt={t("projects.inclusiveTripFrontend")}
                className="h-56 sm:h-64 md:h-80 w-auto  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivetrip")}
              />
              <img
                src="/assets/projects-icons/inclusivebackend.webp"
                alt={t("projects.inclusiveTripBackend")}
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("inclusivebackend")}
              />
              <img
                src="/assets/projects-icons/pokefront.png"
                alt={t("projects.pokemonGameFrontend")}
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokefront")}
              />
              <img
                src="/assets/projects-icons/pokemonbackend.png"
                alt={t("projects.pokemonGameBackend")}
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("pokemonbackend")}
              />
              <img
                src="/assets/projects-icons/e-commerceapi.webp"
                alt={t("projects.eCommerceAPI")}
                className="h-56 sm:h-64 md:h-80 w-auto filter  transition-all duration-300 hover:scale-125 cursor-pointer"
                onClick={() => handleProjectClick("ecommerce")}
              />
              <img
                src="/assets/projects-icons/moviediary.png"
                alt={t("projects.movieDiary")}
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
                  {t("projects.redirectTitle")}
                </h3>
              </div>

              <div className="py-4">
                <p className="text-gray-300">{t("projects.redirectMessage")}</p>
                <p className="text-teal-400 text-sm mt-2">
                  {projectLinks[currentProject]}
                </p>
              </div>

              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  {t("projects.backButton")}
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-500 transition-colors"
                >
                  {t("projects.okButton")}
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

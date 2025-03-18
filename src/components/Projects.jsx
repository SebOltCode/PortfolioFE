import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  EffectCards,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

const Projects = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [swiperSettings, setSwiperSettings] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectLinks = {
    inclusivetrip: "https://inclusivetrip.onrender.com/",
    inclusivebackend: "https://github.com/SebOltCode/InclusiveTrip-BE",
    pokefront: "https://github.com/SebOltCode/PokemonFrontend",
    pokemonbackend: "https://github.com/SebOltCode/pokemon_backend",
    ecommerce: "https://github.com/SebOltCode/eCommerce_API_BE",
    moviediary: "https://github.com/SebOltCode/MovieDiary",
  };

  const projects = [
    {
      key: "inclusivetrip",
      src: "/assets/projects-icons/inclusivetripfrontend.webp",
      alt: t("projects.inclusiveTripFrontend"),
    },
    {
      key: "inclusivebackend",
      src: "/assets/projects-icons/inclusivebackend.webp",
      alt: t("projects.inclusiveTripBackend"),
    },
    {
      key: "pokefront",
      src: "/assets/projects-icons/pokefront.png",
      alt: t("projects.pokemonGameFrontend"),
    },
    {
      key: "pokemonbackend",
      src: "/assets/projects-icons/pokemonbackend.png",
      alt: t("projects.pokemonGameBackend"),
    },
    {
      key: "ecommerce",
      src: "/assets/projects-icons/e-commerceapi.webp",
      alt: t("projects.eCommerceAPI"),
    },
    {
      key: "moviediary",
      src: "/assets/projects-icons/moviediary.png",
      alt: t("projects.movieDiary"),
    },
  ];

  const duplicatedProjects = [
    ...projects,
    ...projects.map((project) => ({
      ...project,
      key: `${project.key}-duplicate`,
    })),
  ];

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
        <h1 className="text-3xl md:text-7xl font-extrabold mb-4 text-slate-800 dark:text-white">
          {t("projects.title")} <br />
        </h1>
        <p className="text-slate-800 dark:text-gray-300 text-lg md:text-xl mx-auto mb-12">
          {t("projects.description")}
        </p>

        <div className="w-full">
          <Swiper
            modules={[
              EffectCoverflow,
              EffectCards,
              Navigation,
              Pagination,
              Autoplay,
            ]}
            effect={isMobile ? "cards" : "coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            cardsEffect={
              isMobile
                ? {
                    slideShadows: true,
                    perSlideOffset: 12,
                    perSlideRotate: 4,
                  }
                : {}
            }
            speed={900}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            slideToClickedSlide={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={!isMobile}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 2.5, spaceBetween: 40 },
              1024: { slidesPerView: 3.5, spaceBetween: 50 },
            }}
            className="project-swiper py-8"
          >
            {duplicatedProjects.map((project) => (
              <SwiperSlide key={project.key}>
                <div
                  className={`project-item relative transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden rounded-lg ${
                    isMobile ? "mx-auto max-w-[280px]" : ""
                  }`}
                  onClick={() =>
                    handleProjectClick(project.key.replace("-duplicate", ""))
                  }
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className={`object-cover mx-auto ${
                      isMobile ? "w-full h-52" : "h-56 sm:h-64 md:h-80 w-auto"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold px-4 text-center">
                      {project.alt}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isMobile && (
        <div className="swipe-hint">
          {t("projects.swipeHint") || "← Wischen Sie für weitere Projekte →"}
        </div>
      )}

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

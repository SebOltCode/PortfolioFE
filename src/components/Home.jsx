import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden mb-8 sm:mb-16 lg:mb-24"
    >
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <img
          src="./assets/profilfotos/profilfoto.jpg"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg mx-auto mb-4"
          alt={t("home.profilePhotoAlt")}
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
          {t("home.welcomeMessage")}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mx-auto">
          {t("home.introduction")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 hidden sm:flex">
          <a
            href="#home"
            className="bg-teal-500 text-white font-medium py-3 px-6 rounded hover:bg-teal-600 transition w-full sm:w-auto active:bg-teal-700"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#about"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            {t("navbar.contact")}
          </a>
          <a
            href="#experience"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            {t("navbar.experience")}
          </a>
          <a
            href="#projects"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#about"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#contact"
            className="border border-teal-500 text-teal-500 font-medium py-3 px-6 rounded hover:bg-teal-500 hover:text-white transition w-full sm:w-auto"
          >
            {t("navbar.contact")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { useTranslation } from "react-i18next";
import ImageSlideshow from "./ImageSlideshow";

const About = () => {
  const { t } = useTranslation();
  const profileImages = [
    "/assets/profilfotos/profilfoto.jpg",
    "/assets/profilfotos/IMG-20250312-WA0004.jpg",
    "/assets/profilfotos/IMG-20250312-WA0007.jpg",
    "/assets/profilfotos/IMG-20250312-WA0010.jpg",
    "/assets/profilfotos/IMG-20250312-WA0011.jpg",
    "/assets/profilfotos/IMG-20250312-WA0012.jpg",
    "/assets/profilfotos/IMG-20250312-WA0014.jpg",
    "/assets/profilfotos/IMG-20250312-WA0019.jpg",
    "/assets/profilfotos/csd.jpg",
    "/assets/profilfotos/IMG-20250312-WA0025.jpg",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 relative z-20">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-slate-800 dark:text-white leading-relaxed">
            {t("about.description")}
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <ImageSlideshow images={profileImages} />
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageIsDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageIsDropdownOpen(false);
  };

  const languageMap = {
    de: "Deutsch",
    en: "English",
    pt: "Português",
    fr: "Français",
    es: "Español",
    tr: "Türkçe",
    uk: "Українська",
    ru: "Русский",
    it: "Italiano",
    pl: "Polski",
    sv: "Svenska",
    no: "Norsk",
  };

  const getLanguageLabel = (lng) => {
    return languageMap[lng];
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setLanguageIsDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">{t("navbar.title")}</h1>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className="relative md:ml-auto md:mr-4">
        <button
          onClick={toggleDropdown}
          className="ml-4 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm"
        >
          {i18n.language.toUpperCase()}
        </button>
        {isLanguageDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10">
            <ul className="max-h-60 overflow-y-auto">
              {Object.keys(languageMap).map((lng) => (
                <li
                  key={lng}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white text-sm"
                  onClick={() => changeLanguage(lng)}
                >
                  {getLanguageLabel(lng)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ul
        className={`flex md:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}
      >
        <li className="hidden md:block">
          <a
            href="https://www.linkedin.com/in/sebastian-olthoff/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn"
              className="h-6 w-6 hover:opacity-75 transition-opacity"
            />
          </a>
        </li>

        <li>
          <a
            href="#home"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            {t("navbar.home")}
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            {t("navbar.experience")}
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            {t("navbar.projects")}
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            {t("navbar.about")}
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            {t("navbar.contact")}
          </a>
        </li>

        <li className="md:hidden">
          <a
            href="https://www.linkedin.com/in/sebastian-olthoff/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 cursor-pointer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

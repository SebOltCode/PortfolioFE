import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = ({ theme, setTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageIsDropdownOpen] = useState(false);
  const [modeMessage, setModeMessage] = useState("");
  const [isModeMessageVisible, setIsModeMessageVisible] = useState(false);

  const darkSoundRef = useRef(new Audio("/assets/sounds/dark-mode.mp3"));
  const lightSoundRef = useRef(new Audio("/assets/sounds/light-mode.mp3"));

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

  const getLanguageLabel = (lng) => languageMap[lng];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = () =>
    setLanguageIsDropdownOpen(!isLanguageDropdownOpen);

  const handleToggleMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      darkSoundRef.current.volume = 0.2;
      darkSoundRef.current.currentTime = 0;
      darkSoundRef.current.play();
      setModeMessage("Welcome to the Darkside");
    } else {
      lightSoundRef.current.volume = 0.2;
      lightSoundRef.current.currentTime = 0;
      lightSoundRef.current.play();
      setModeMessage("See the Light!");
    }
    setIsModeMessageVisible(true);
    setTimeout(() => setIsModeMessageVisible(false), 2000);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">{t("navbar.title")}</h1>

          <div className="flex flex-col justify-center ml-3 relative group">
            <input
              type="checkbox"
              id="light-switch"
              className="light-switch sr-only"
              onChange={handleToggleMode}
              checked={theme === "dark"}
            />
            <label
              htmlFor="light-switch"
              className="relative cursor-pointer p-2"
            >
              <svg
                className={`${theme === "dark" ? "hidden" : "block"}`}
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-slate-300"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path
                  className="fill-slate-400"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                />
              </svg>

              <svg
                className={`${theme === "dark" ? "block" : "hidden"}`}
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-slate-400"
                  d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                />
                <path
                  className="fill-slate-500"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
              <span className="sr-only">Switch to light / dark version</span>
            </label>

            <span
              className={`hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded transition-opacity opacity-0 whitespace-normal w-32 text-center group-hover:opacity-100 ${
                theme === "dark" ? "font-limelight" : "font-starjedi"
              }`}
            >
              {theme === "dark" ? "See the Light!" : "Come to the Darkside!"}
            </span>
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm"
            >
              {i18n.language.toUpperCase()}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                <ul className="max-h-60 overflow-y-auto">
                  {Object.keys(languageMap).map((lng) => (
                    <li
                      key={lng}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm"
                      onClick={() => changeLanguage(lng)}
                    >
                      {getLanguageLabel(lng)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`flex md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}
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
              className="hover:text-teal-500 cursor-pointer text-left p-0 no-underline"
              onClick={closeMenu}
            >
              {t("navbar.home")}
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-teal-500 cursor-pointer text-left p-0 no-underline"
              onClick={closeMenu}
            >
              {t("navbar.experience")}
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-teal-500 cursor-pointer text-left p-0 no-underline"
              onClick={closeMenu}
            >
              {t("navbar.projects")}
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-teal-500 cursor-pointer text-left p-0 no-underline"
              onClick={closeMenu}
            >
              {t("navbar.about")}
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-teal-500 cursor-pointer text-left p-0 no-underline"
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
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      {isModeMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 bg-black bg-opacity-60 sm:hidden">
          <div
            style={{
              fontFamily:
                theme === "dark"
                  ? "starjedi, sans-serif"
                  : "limelight, sans-serif",
            }}
            className="bg-gray-900 bg-opacity-90 text-white px-10 py-8 rounded-lg text-3xl max-w-sm w-11/12 mx-auto text-center"
          >
            {modeMessage}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

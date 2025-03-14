import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
            Home
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-teal-500 cursor-pointer text-left bg-transparent border-none text-white p-0 font-inherit no-underline"
            onClick={closeMenu}
          >
            Contact
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

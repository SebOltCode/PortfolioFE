import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul
        className={`flex space-x-4 md:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`}
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
              className="h-6 w-6 hover:text-gray-400"
            />
          </a>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={800}
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
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

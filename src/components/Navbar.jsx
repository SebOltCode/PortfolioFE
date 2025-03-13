import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex space-x-4">
        <li>
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
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

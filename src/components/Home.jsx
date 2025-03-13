import React, { useState } from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <img
          src="./assets/profilfotos/profilfoto.jpg"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
          Welcome on my Portfolio Website! <br />
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mx-auto">
          Hi, I’m Sebastian, a career changer and passionate Full-Stack Web
          Developer. This is my portfolio website, where I not only showcase my
          technical and soft skills, but also share a bit about myself. My goal
          is to give potential employers a first impression of both my skills
          and my personality. Feel free to explore my projects, learn more about
          my journey, and don’t hesitate to reach out if you’d like to connect!
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
      </div>
    </section>
  );
};

export default Home;

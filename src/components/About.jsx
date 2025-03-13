import React from "react";
import ImageSlideshow from "./ImageSlideshow";

const About = () => {
  // Liste aller Profilfotos
  const profileImages = [
    "/src/assets/profilfotos/profilfoto.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0004.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0007.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0010.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0011.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0012.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0014.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0019.jpg",
    "/src/assets/profilfotos/csd.jpg",
    "/src/assets/profilfotos/IMG-20250312-WA0025.jpg",
  ];

  return (
    <section id="about" className="bg-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Wind Turbines to Web Development – My Journey
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hey there! I'm Sebastian – an IT enthusiast, self-proclaimed tech
            geek, and someone who loves a good challenge. My journey into web
            development wasn't exactly straight out of a textbook. In fact,
            before I started coding, I spent years working in quality assurance,
            electronics, and IT support – and even had a brief stint studying
            nautical science (yes, ships!). But one thing has always been clear:
            I've got a passion for technology and problem-solving. Whether it's
            debugging code, troubleshooting hardware, or figuring out how to get
            my cat to stop stealing my chair – I love finding solutions. Beyond
            tech, I'm a social and curious person who enjoys traveling, gaming,
            and sports. You might find me shooting hoops, swimming, or tinkering
            with DIY projects when I'm not buried in code. I thrive in team
            environments, believe in lifelong learning, and always aim to bring
            a positive and open-minded attitude wherever I go. So, if you're
            looking for a motivated, adaptable, and fun team player who's eager
            to grow, let's connect!
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

import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative text-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <p className="text-gray-900 dark:text-teal-500 text-center uppercase font-semibold mb-2">
          {t("experience.whatIDo")}
        </p>
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white">
          {t("experience.mySkillset")}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:shadow-lg transition border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              {t("experience.frontendDevelopment")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("experience.frontendDescription")}
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:shadow-lg transition border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              {t("experience.backendDevelopment")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("experience.backendDescription")}
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:shadow-lg transition border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              {t("experience.webDesign")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("experience.webDesignDescription")}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {t("experience.developmentSkills")}
          </h3>
          <hr className="w-16 border-teal-500 border-t-2 mt-2 mb-6" />
          <p className="text-slate-900 dark:text-gray-300 mb-6">
            {t("experience.developmentSkillsDescription")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/javascript-original.png"
                alt="Java Script"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">JavaScript</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/react-icon.png"
                alt="React"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">React</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/html5-original-wordmark.png"
                alt="html5"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">HTML5</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/tailwindcss.png"
                alt="Tailwind CSS"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Tailwind CSS</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/daisyui.png"
                alt="DaisyUI"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">DaisyUI</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/wordpress.png"
                alt="WordPress"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Wordpress</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/nodejs.png"
                alt="Node.js"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Node.js</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/express.png"
                alt="Express"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Express</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/postgresql.png"
                alt="PostgreSQL"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">PostgreSQL</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/mongodb.png"
                alt="MongoDB"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">MongoDB</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {t("experience.webDesignSkills")}
          </h3>
          <hr className="w-16 border-teal-500 border-t-2 mt-2 mb-6" />
          <p className="text-slate-900 dark:text-gray-300 mb-6">
            {t("experience.webDesignSkillsDescription")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/figma-icon.png"
                alt="Figma"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Figma</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/adobe-illustrator.png"
                alt="Adobe Illustrator"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">Adobe Illustrator</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/gimp.jpg"
                alt="GIMP"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">GIMP</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {t("experience.technicalSkills")}
          </h3>
          <hr className="w-16 border-teal-500 border-t-2 mt-2 mb-6" />
          <p className="text-slate-900 dark:text-gray-300 mb-6">
            {t("experience.technicalSkillsDescription")}
          </p>

          <div className="block lg:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/git.png"
                  alt="Git"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Git</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/github.png"
                  alt="GitHub"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">GitHub</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/slack.png"
                  alt="Slack"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Slack</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/bash.svg"
                  alt="Bash"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Bash</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/linux.png"
                  alt="linux"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Linux</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/winserver.png"
                  alt="Windows Server"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Windows Server</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg w-40">
                <img
                  src="/assets/skills-icons/raspberrypi.png"
                  alt="Raspberry Pi"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Raspberry Pi</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-6 mb-6">
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/git.png"
                  alt="Git"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Git</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/github.png"
                  alt="GitHub"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">GitHub</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/slack.png"
                  alt="Slack"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Slack</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/bash.svg"
                  alt="Bash"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Bash</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/linux.png"
                  alt="linux"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Linux</p>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/winserver.png"
                  alt="Windows Server"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Windows Server</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <img
                  src="/assets/skills-icons/raspberrypi.png"
                  alt="Raspberry Pi"
                  className="h-12 mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-sm">Raspberry Pi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {t("experience.skillsInProgress")}
          </h3>
          <hr className="w-16 border-teal-500 border-t-2 mt-2 mb-6" />
          <p className="text-slate-900 dark:text-gray-300 mb-6">
            {t("experience.skillsInProgressDescription")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/typescript.png"
                alt="TypeScript"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">TypeScript</p>
            </div>
            <div className="text-center bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <img
                src="/assets/skills-icons/threejs.png"
                alt="threejs"
                className="h-12 mx-auto mb-2"
                loading="lazy"
              />
              <p className="text-sm">ThreeJS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

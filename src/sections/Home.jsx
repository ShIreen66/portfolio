import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import RotatingCircleText from "../components/RotateCircleText";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

/* ===== Roles based on Frontend + Full Stack resumes ===== */
const roles = [
  "Full Stack Developer (MERN)",
  "Frontend Developer (React / Next.js)",
  "JavaScript Developer",
  "React.js Developer",
  "Node.js Developer",
  "TypeScript Developer",
  "REST API Integration Developer",
  "UI Developer (Responsive Web Apps)",
  "Web Application Developer",
  "Junior Full Stack Developer",
  "Associate Software Engineer",
];

/* ===== Animated Role Switcher ===== */
const TypewriterEffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 h-8 relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const resumeLink = import.meta.env.VITE_RESUME_URL;

  return (
    <div id="home">
      {/* ================= Desktop (xl) ================= */}
      <div className="hidden xl:block">
        <div className="h-[65vh] px-20 bg-gray-200 text-black flex pt-16">
          <div className="flex w-full justify-between items-center">
            {/* Left */}
            <div className="w-1/2">
              <h2 className="text-4xl font-semibold text-gray-700">Hi, I'm</h2>
              <h1 className="text-6xl font-extrabold text-blue-700 mt-1">
                Shireen Khan
              </h1>
              <TypewriterEffect />
            </div>

            {/* Right */}
            <div className="w-1/2">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                Full Stack Web Developer with hands-on experience building{" "}
                <span className="font-semibold">
                  scalable, responsive, and production-ready applications
                </span>{" "}
                using{" "}
                <span className="text-blue-600 font-semibold">
                  React, Next.js, Node.js, Express, and MongoDB
                </span>
                . Passionate about clean UI, secure authentication, RESTful
                APIs, and solving real-world problems through efficient code.
              </p>

              <div className="mt-6 flex gap-6">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 rounded-lg text-lg font-semibold hover:bg-gray-900 flex items-center gap-2"
                >
                  Resume <FaExternalLinkAlt className="text-sm" />
                </a>

                {/* <Link
                  to="/contact"
                  className="text-lg font-semibold underline hover:text-blue-600"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Mobile / Laptop ================= */}
      <div className="xl:hidden">
        <div className="min-h-[60vh] px-6 bg-gray-200 text-black py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-gray-700">Hi, I'm</h2>
              <h1 className="text-5xl font-extrabold text-blue-700 mt-2">
                Shireen Khan
              </h1>
              <TypewriterEffect />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                Full Stack Web Developer with hands-on experience building{" "}
                <span className="font-semibold">
                  scalable and responsive web applications
                </span>{" "}
                using{" "}
                <span className="text-blue-600 font-semibold">
                  React, Node.js, Express, MongoDB, and REST APIs
                </span>
                .
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  Resume <FaExternalLinkAlt className="text-sm" />
                </a>

                {/* <Link
                  to="/contact"
                  className="font-semibold underline hover:text-blue-600 text-center py-2.5"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Hire Me Bubble ================= */}
      <div className="hidden sm:block">
        <RotatingCircleText />
      </div>

      {/* Embed other sections for in-page navigation */}
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

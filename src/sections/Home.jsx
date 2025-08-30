import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import RotatingCircleText from "../components/RotateCircleText";

const roles = [
  "Full Stack Developer",
  "JavaScript Developer",
  "React & Next.js Specialist",
  "Typescript Developer",
  "Node.js & Express.js Developer"
];

// Upgraded TypewriterEffect with gradient & animation
const TypewriterEffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1500); // 1.5s interval
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
          className="text-xl sm:text-2xl lg:text-2xl font-semibold bg-clip-text text-transparent 
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
    <>
      {/* Desktop Layout (xl and above) */}
      <div className="hidden xl:block">
        <div className="h-[65.5vh] px-20 bg-gray-200 text-black flex pt-16">
          <div className="flex flex-col justify-start items-center md:flex-row md:justify-between w-full">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-semibold text-gray-700">Hi, I'm</h2>
                <h1 className="text-6xl font-extrabold text-blue-700">
                  Shireen Khan
                </h1>
                <TypewriterEffect />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="mt-4 text-lg font-medium text-gray-700 leading-relaxed">
                Aspiring Web Developer with hands-on experience in both{" "}
                <span className="text-blue-600">frontend and backend</span>{" "}
                technologies like
                <span className="text-blue-600">
                  {" "}
                  React.js, Node.js, and .NET Core.
                </span>{" "}
                Passionate about building responsive, user-friendly, and
                accessible web applications. Eager to contribute to a
                collaborative team while learning modern development practices.
              </p>

              <div className="mt-6 flex justify-center md:justify-start gap-6">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 rounded-lg text-lg font-semibold hover:bg-gray-900 flex items-center gap-2 transition"
                >
                  Resume <FaExternalLinkAlt className="text-sm" />
                </a>

                <Link
                  to="/contact"
                  className="text-lg font-semibold underline hover:text-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Laptop Layout (below xl) */}
      <div className="xl:hidden">
        <div className="min-h-[60vh] px-4 sm:px-6 lg:px-12 bg-gray-200 text-black py-6 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mt-2">
                Shireen Khan
              </h1>
              <TypewriterEffect />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
                Aspiring Web Developer with hands-on experience in both{" "}
                <span className="text-blue-600">frontend and backend</span>{" "}
                technologies like{" "}
                <span className="text-blue-600">
                  React.js, Node.js, and .NET Core.
                </span>{" "}
                Passionate about building responsive, user-friendly, and
                accessible web applications. Eager to contribute to a
                collaborative team while learning modern development practices.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-900 flex items-center justify-center gap-2 transition"
                >
                  Resume <FaExternalLinkAlt className="text-sm" />
                </a>

                <Link
                  to="/contact"
                  className="text-base sm:text-lg font-semibold underline hover:text-blue-600 py-2.5"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RotatingCircleText: Only visible on sm (tablet) and up */}
      <div className="hidden sm:block">
        <RotatingCircleText />
      </div>

      <Footer />
    </>
  );
};

export default Home;

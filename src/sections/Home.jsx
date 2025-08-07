import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";
import RotatingCircleText from "../components/RotateCircleText";

const roles = [
  "Full Stack Developer",
  "JavaScript Developer",
  "Node & React Expert",
];

const TypewriterEffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-blue-600 text-lg sm:text-xl lg:text-2xl mt-2">
      {roles[index]}
    </p>
  );
};

const Home = () => {
  const resumeLink =
    import.meta.env.VITE_RESUME_URL;

  return (
    <>
      {/* Desktop Layout (xl and above) */}
      <div className="hidden xl:block">
        <div className="h-[70vh] px-20 bg-gray-200 text-black flex pt-20">
          <div className="flex flex-col justify-start items-center md:flex-row md:justify-between w-full">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-semibold text-gray-700">
                  Hi, I'm
                </h2>
                <h1 className="text-6xl font-extrabold text-blue-700">
                  Shireen Khan
                </h1>
                <TypewriterEffect />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="mt-6 text-xl font-medium text-gray-700">
                Aspiring Web Developer with hands-on experience in both <br />
                <span className="text-blue-600">frontend and backend</span>{" "}
                technologies like
                <span className="text-blue-600">
                  {" "}
                  React.js, Node.js, <br /> and .NET Core.
                </span>{" "}
                Passionate about building responsive, <br /> user-friendly, and
                accessible web applications. Eager to <br /> contribute to a
                collaborative team while learning modern <br /> development
                practices .
              </p>

              <div className="mt-8 flex justify-center md:justify-start gap-6">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 flex items-center gap-2"
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
        <div className="min-h-[70vh] px-4 sm:px-6 lg:px-12 bg-gray-200 text-black py-8 sm:py-12 lg:py-16">
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

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-900 flex items-center justify-center gap-2 transition-colors"
                >
                  Resume <FaExternalLinkAlt className="text-sm" />
                </a>

                <Link
                  to="/contact"
                  className="text-base sm:text-lg font-semibold underline hover:text-blue-600 py-3 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RotatingCircleText />
      <Footer className="fixed" />
    </>
  );
};

export default Home;

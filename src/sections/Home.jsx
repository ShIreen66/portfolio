import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";
import RotatingCircleText from "../components/RotateCircleText";

const roles = [
  "Full Stack Developer",
  "JavaScript Enthusiast",
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
    <p className="text-blue-600 text-xl md:text-2xl mt-2">{roles[index]}</p>
  );
};

const Home = () => {
  return (
    <>
      <div className="h-[70vh] px-6 md:px-20 bg-gray-200 text-black flex pt-10 md:pt-20">
        {/* Top Section */}
        <div className="flex flex-col justify-start items-center md:flex-row md:justify-between w-full">
          {/* Left: Typewriter Text Block */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                Hi, I’m
              </h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700">
                Shireen Khan
              </h1>
              <TypewriterEffect />
            </div>
          </div>
          {/* Right: Description and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="mt-6 text-lg md:text-xl font-medium text-gray-700">
              Aspiring Web Developer with hands-on experience in both{" "} <br />
              <span className="text-blue-600">frontend and backend</span>{" "}
              technologies like
              <span className="text-blue-600">
                {" "}
                React.js, Node.js, <br /> and .NET Core.
              </span>{" "}
              Passionate about building responsive, <br /> user-friendly, and accessible
              web applications. Eager to <br /> contribute to a collaborative team while
              learning modern <br /> development practices .
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <a
                href="/resume.pdf"
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
<RotatingCircleText />

      <Footer />
      
    </>
  );
};

export default Home;

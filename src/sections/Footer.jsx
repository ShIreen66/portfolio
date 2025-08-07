import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedEnvelopeLink from "../components/AnimatedEnvelope";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center flex flex-row items-center justify-center space-x-4">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center Links */}

        <div className="text-center">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm ml-10">
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </ul>
        </div>

        {/* Social Icons */}
        {/* <div className="flex justify-center md:justify-end space-x-4 text-lg">
          <AnimatedEnvelopeLink />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

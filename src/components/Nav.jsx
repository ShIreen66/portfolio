import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      {/* Desktop Layout (xl and above - unchanged) */}
      <div className="hidden xl:flex justify-between items-center px-10 py-4">
        {/* Left: Navigation Links */}
        <div className="flex space-x-6 text-lg font-medium">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `pb-1 ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              {["Home", "About", "Projects", "Contact"][idx]}
            </NavLink>
          ))}
        </div>

        {/* Center: Logo / Initials */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 20"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <a
            href={import.meta.env.VITE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 hover:scale-125 transition" />
          </a>
          <a
            href={import.meta.env.VITE_TWITTER}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
          <a
            href={import.meta.env.VITE_LINKDLN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-blue-600 transition" />
          </a>
          <a
            href={import.meta.env.VITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-black transition" />
          </a>
          <a
            href={import.meta.env.VITE_PINTEREST}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP className="hover:text-red-500 transition" />
          </a>
        </div>
      </div>

      {/* Mobile & Laptop Layout (below xl) */}
      <div className="xl:hidden">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 lg:px-8 py-4">
          {/* Logo */}
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-black text-white rounded-full flex items-center justify-center text-sm lg:text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 20"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 lg:size-8 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-2xl lg:text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} px-4 lg:px-8 pb-4`}>
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 lg:space-y-4 mb-6">
            {["/", "/about", "/projects", "/contact"].map((path, idx) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base lg:text-lg font-medium py-2 ${
                    isActive ? "border-l-4 border-black pl-3" : "pl-3"
                  }`
                }
              >
                {["Home", "About", "Projects", "Contact"][idx]}
              </NavLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 lg:space-x-8 text-xl lg:text-2xl border-t pt-4">
            <a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a
              href={import.meta.env.VITE_TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a
              href={import.meta.env.VITE_LINKDLN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-600 transition" />
            </a>
            <a
              href={import.meta.env.VITE_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-black transition" />
            </a>
            <a
              href={import.meta.env.VITE_PINTEREST}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP className="hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

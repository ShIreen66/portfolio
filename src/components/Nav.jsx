import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow">
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

      {/* Right: Social Icons and Resume Button */}
      <div className="flex items-center space-x-4 text-xl">
        {/* Social Media Links */}
        <a href="https://www.instagram.com/shiree.n_06/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://x.com/066shiree" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/shireen-khan-482a1932b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-blue-600 transition" />
        </a>
        <a href="https://github.com/ShIreen66" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FaPinterestP className="hover:text-red-500 transition" />
        </a>

       
      </div>
    </nav>
  );
};

export default Nav;

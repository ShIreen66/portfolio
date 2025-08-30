import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-9 px-4 mt-6 w-full "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Designed by{" "}
            <span className="font-semibold text-green-400">Shireen Khan</span>
          </p>
        </div>

        {/* Center Section (Date + Social Icons) */}
        <div className="flex flex-col items-center space-y-2">
          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </motion.p>
          <motion.div
            className="flex space-x-5 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href={import.meta.env.VITE_TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href={import.meta.env.VITE_LINKDLN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">Made with ❤️</p>
          <p className="text-sm mt-1">Stay Connected!</p>
        </div>
      </div>

      {/* Bottom Border Animation */}
    </motion.footer>
  );
};

export default Footer;

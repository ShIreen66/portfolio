import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedEnvelopeLink = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-fit"
    >
      <Link
        to="/contact"
        className="text-2xl text-gray-300 hover:text-white transition duration-300 ease-in-out"
      >
        <FaEnvelope />
      </Link>
    </motion.div>
  );
};

export default AnimatedEnvelopeLink;

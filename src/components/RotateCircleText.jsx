import { motion } from "framer-motion";

const RotatingCircleText = () => {
  return (
    <div className="relative w-72 h-6 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        whileHover={{ scale: 1.15 }}
        className="
          w-28 h-28 rounded-full
          bg-gradient-to-r from-green-400 to-blue-600
          flex items-center justify-center
          text-white font-bold text-lg
          shadow-xl cursor-pointer
        "
      >
        Hire Me
      </motion.div>
    </div>
  );
};

export default RotatingCircleText;

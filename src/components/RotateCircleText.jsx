import { useEffect, useState } from "react";

const RotatingCircleText = () => {
  const text = " FULL STACK DEVELOPER  ";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const splitText = text.repeat(2).split(""); // Repeat to fill circle
    setLetters(splitText);
  }, []);

  return (
    <div className="relative w-72 h-10 flex items-center justify-center">
      {/* Rotating outer text */}
      <div className="absolute w-1.5 h-1.5 animate-spin-slow ">
        {letters.map((char, i) => (
          <span
            key={i}
            className="absolute text-sm text-blue-700 font-bold "
            style={{
              transform: `rotate(${
                i * (360 / letters.length)
              }deg) translate(5.5rem) rotate(-${i * (90 / letters.length)}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Inner circle with "Hire Me" */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:scale-110 transition-transform">
        Hire Me
      </div>
    </div>
  );
};

export default RotatingCircleText;

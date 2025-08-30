import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "./Footer";

const projects = [
  {
    title: "AI-Image-Enhancer",
    description:
      "Upload. Enhance. Wow. Instantly transform your images with AI. Compare original and enhanced versions side by side, all in a sleek, intuitive interface built for speed and simplicity.",
    tech: [
      "React",
      "Vite",
      "AI based API's",
      "Axios",
      "Context Hook",
      "React-Router-DOM",
      "Tailwind",
      "Responsive Layout",
    ],
    img: "public/AI-IMAGE-ENHANCER.png",
    live: "https://ai-image-generator-woad-mu.vercel.app/",
    github: "https://github.com/ShIreen66/AI_Image_Generator.git",
  },
  {
    title: "Workflow Manager",
    description:
      "A modern Workflow Manager built with React + Vite, featuring secure login, role-based dashboards, and smart task management with persistent local storage authentication.",
    tech: [
      "React",
      "Vite",
      "Context Hook",
      "Local-Storage",
      "React-Router-DOM",
      "Tailwind",
      "Responsive Layout",
    ],
    img: "public/EMS.png",
    live: "https://ems-7i55.vercel.app/",
    github: "https://github.com/ShIreen66/Workflow-Manager.git",
  },
  {
    title: "Flavorly Recipe App",
    description:
      "A React-based web app to explore, create, and manage recipes. Features include user authentication, recipe browsing and search, favorites, recipe management (admin only).",
    tech: [
      "React",
      "Context Hook",
      "Local-Storage",
      "Axios",
      "Framer-Motion",
      ,
      "Toastify",
      "React-Hook-Form",
      "Tailwind",
    ],
    img: "public/recipe-book.png",
    live: "https://recipe-project-beta.vercel.app/",
    github: "https://github.com/ShIreen66/Flavorly.git",
  },
  // {
  //   title: "Floral Fragility",
  //   description: "E-commerce flower's website.",
  //   tech: [
  //     "React.js",
  //     "Vite",
  //     "Locomotive",
  //     "Smooth Scrolling",
  //     "GSAP-Animation",
  //     "Tailwind CSS",
  //     "CSS",
  //   ],
  //   img: "public/floral.png",
  //   live: "https://floral-flagirity.vercel.app/",
  //   github: "https://github.com/chatapp-repo",
  // },
  // {
  //   title: "stopwatch-countdown-timer",
  //   description: "E-commerce flower's website.",
  //   tech: [
  //     "React.js",
  //     "Locomotive",
  //     "Smooth Scrolling",
  //     "GSAP",
  //     "Tailwind CSS",
  //     "CSS",
  //   ],
  //   img: "public/stopwatch-countdown-timer.png",
  //   live: "https://floral-flagirity.vercel.app/",
  //   github: "https://github.com/chatapp-repo",
  // },
  {
    title: "Real-time Age Calculator",
    description: "Realtime age calculator.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/AGE-Calculator.png",
    live: "https://chatapp.com",
    github: "https://github.com/chatapp-repo",
  },
  {
    title: "Random Password Generator",
    description: "Realtime age calculator.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/Passoword-Generator.png",
    live: "https://chatapp.com",
    github: "https://github.com/chatapp-repo",
  },
  {
    title: "QR Code Generator",
    description: "Realtime age calculator.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/QR-Code-Generator.png",
    live: "https://chatapp.com",
    github: "https://github.com/chatapp-repo",
  },
];

const Projects = () => {
  return (
    <>
      <div className="px-6 md:px-20 py-20 bg-gray-100 text-black">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What I’ve <span className="text-blue-600">Built</span>
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Projects that showcase my skills and expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              }}
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl origin-center"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    Live <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:underline"
                  >
                    Code <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Local SVG illustration
import emailIllustration from "../assets/undraw_email-campaign_2z6t.svg";
import aiIllustration from "../assets/undraw_optimize-image_q59h.svg";
import cookingIllustration from "../assets/undraw_barbecue_k11q.svg";
import projectTeamIllustration from "../assets/undraw_project-team_dip6.svg";

const projects = [
  {
    title: "Web-based Email Client (Full Stack)",
    description:
      "Built a full-stack web-based email client supporting authentication, inbox management, and REST API-driven client–server communication using the MERN stack.",
    tech: [
      "React",
      "React Router",
      "Context API",
      "Axios",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Authentication",
    ],
    illustration: emailIllustration,
    live: "asdfg",
    github: "https://github.com/",
  },
  {
    title: "Flavorly – Recipe Management System (Full Stack)",
    description:
      "Developed a full-stack recipe management system with authentication, role-based access, CRUD operations, favorites, and REST API-based data handling.",
    tech: [
      "React",
      "React Router",
      "Context API",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Framer Motion",
      "Tailwind CSS",
    ],
    illustration: cookingIllustration,
    live: "https://recipe-project-beta.vercel.app/",
    github: "https://github.com/ShIreen66/Flavorly.git",
  },
  {
    title: "AI Image Enhancer",
    description:
      "Designed and developed an AI-powered image enhancement tool with real-time comparison and seamless third-party API integration.",
    tech: [
      "React",
      "Vite",
      "AI APIs",
      "Axios",
      "Context API",
      "React Router",
      "Tailwind CSS",
    ],
    illustration: aiIllustration,
    live: "https://ai-image-generator-woad-mu.vercel.app/",
    github: "https://github.com/ShIreen66/AI_Image_Generator.git",
  },
  {
    title: "Workflow Manager",
    description:
      "Built a role-based workflow management system with authentication, dashboards, and task handling using modern React architecture.",
    tech: [
      "React",
      "Vite",
      "Context API",
      "Local Storage",
      "React Router",
      "Tailwind CSS",
    ],
    illustration: projectTeamIllustration,
    live: "https://ems-7i55.vercel.app/",
    github: "https://github.com/ShIreen66/Workflow-Manager.git",
  },
];

const Projects = () => {
  return (
    <>
      <div className="px-6 md:px-20 py-20 bg-gray-100 text-black">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Hands-on <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Full-stack and frontend applications built using modern web
            technologies.
          </p>
        </div>

        {/* Grid (2 x 2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0px 18px 35px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Illustration */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-56 flex items-center justify-center
                           bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              >
                <img
                  src={project.illustration}
                  alt={project.title}
                  className="h-40 object-contain"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
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
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      Live <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
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

      
    </>
  );
};

export default Projects;

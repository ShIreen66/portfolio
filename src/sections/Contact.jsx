import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = import.meta.env.VITE_NUMBER; // Replace with your WhatsApp number (with country code)

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Clear the form fields
    e.target.reset();
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 text-black flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Let's <span className="text-blue-600">Connect</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          I'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 w-full text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6 text-2xl text-gray-600">
          <a
            // href="https://github.com/ShIreen66"
            href={import.meta.env.VITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href={import.meta.env.VITE_LINKDLN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href={import.meta.env.VITE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href={import.meta.env.VITE_TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

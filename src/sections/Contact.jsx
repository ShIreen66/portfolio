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
    const phoneNumber = import.meta.env.VITE_NUMBER; // WhatsApp number with country code

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    e.target.reset();
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 md:px-12 py-11 bg-gray-50 text-black flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8"
        >
          {/* Left Side - Info */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3">
              Let’s <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-gray-600 mb-6">
              I'd love to hear from you! Fill out the form or connect via social links below.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 text-2xl text-gray-600">
              <a
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
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2">
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
              <button
                type="submit"
                className="bg-blue-600 w-full text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      
    </>
  );
};

export default Contact;

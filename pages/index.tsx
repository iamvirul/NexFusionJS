import React from "react";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.main
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-8 text-white text-center"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-primary"
        >
          Welcome to FusionJS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-8"
        >
          The modern framework combining Next.js and NestJS.
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#"
          className="bg-accent hover:bg-accent-100 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Get Started
        </motion.a>
      </motion.main>
    </div>
  );
};

export default HomePage;

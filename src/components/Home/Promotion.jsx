"use client";

import { motion } from "framer-motion";

 
const Promotion = () => {
  return (
    <section className="w-11/12 mx-auto py-16 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Get world-class healthcare with experienced doctors and advanced
          facilities. Book appointments online and get personalized care right
          from the comfort of your home.
        </p>
        <button className="btn-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Book Appointment
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="\images\medoffer.png"
          alt="Healthcare"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default Promotion;

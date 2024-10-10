import { motion } from "framer-motion";
import React from "react";
import HoverImage from "./Hover";
import { Technologies } from "../constants"; // Assuming this contains an array of project data

const Tech = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-10 bg-gradient-to-r from-[#ffffff] to-[#ffffff] text-black rounded-xl">
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-lg md:text-3xl font-bold tracking-tight mb-6"
          >
            ARTIFICIAL INTELLIGENCE (AI) AND BLOCKCHAIN ARE GAME-CHANGING
            TECHNOLOGIES WITH HUGE POTENTIAL
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={projectVariants}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              AI is all about creating systems that can think, learn, and make
              decisions like humans. It powers everything from voice assistants
              like Siri to recommendation engines on streaming services. AI
              helps businesses be more efficient and makes everyday tasks easier
              by analyzing data and predicting outcomes.
            </p>
            <div className="border-t-2 border-[#9f5eeb] mt-6 w-[80%]"></div>
            <p className="text-[#9f5eeb] mt-2 text-sm">W3B JMI</p>
          </motion.div>
        </div>

        {Technologies.map((Tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden max-w-[400px] shadow-lg border-[2px] border-[#9f5eeb]"
          >
            <img
              src={Tech.image}
              alt={Tech.name}
              className="object-cover w-full h-full"
            />
            <span className="absolute top-3 right-3 text-white bg-[#9f5eeb] px-3 py-1 text-sm rounded-full">
              {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;

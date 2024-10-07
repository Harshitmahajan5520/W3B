import React from "react";
import { motion } from "framer-motion";


const HoverImage = ({ imageSrc, hoverText }) => {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-lg">
      {/* Image */}
      <img
        src={imageSrc}
        alt="hover"
        className=" w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />

      {/* Hover Text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-[#8e50ff] text-center p-7"
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {hoverText}
      </motion.div>
    </div>
  );
};

export default HoverImage;

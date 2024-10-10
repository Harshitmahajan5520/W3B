import React from "react";
import { motion } from "framer-motion";
import { Title, Text, Box } from "@mantine/core";
import "@mantine/core/styles.css";

const About = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Text hover variant
  const hoverTextVariants = {
    hover: { color: "#8e50ff" }, // Change text color on hover
    initial: { color: "black" }, // Default text color
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-6">
      <Box className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          {/* Title with animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            <Title order={2} className="text-center mb-4">
              About Us
            </Title>
          </motion.div>

          {/* Text with animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text
              size="lg"
              className="text-center mb-4"
              variants={hoverTextVariants} // Use hover text variants
              whileHover="hover" // Add hover effect
              initial="initial" // Default text color
            >
              The W3B Society at Jamia Millia Islamia is a student group focused on Artificial Intelligence and Blockchain technology. We organize workshops, seminars, and projects to help students explore and learn about these fields. Whether you're new or experienced, W3B is a place to gain practical skills and work on exciting tech projects.
            </Text>
            <Text
              size="lg"
              className="text-center"
              variants={hoverTextVariants} // Use hover text variants
              whileHover="hover" // Add hover effect
              initial="initial" // Default text color
            >
              To actively engage students in the exploration and application of Artificial Intelligence and Blockchain technology by providing practical learning experiences, collaborative opportunities, and a supportive community. We aim to equip members with the skills and knowledge needed to thrive in these rapidly growing fields.
            </Text>
          </motion.div>
        </div>
      </Box>
    </div>
  );
};

export default About;

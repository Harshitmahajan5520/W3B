// import { section } from "framer-motion/client";
// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";
// import React from "react";
// import HoverImage from "./Hover";

// const TeamMembers = () => {
//   const projectVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       rotate: -40,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         type: "spring",
//         bounce: 0.4,
//       },
//     },
//   };

//   return (
//     <section className="px-6 py-10">
//       <h1 className="mt-10 text-lg text-black md:text-[34px]  font-bold tracking-tight mb-10">
//         Team Members
//       </h1>
//       <div className="h-1 w-20 mb-8 bg-black"></div>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//         {PROJECTS.map((project, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-full overflow-hidden w-[200px] h-[200px] transition transform"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={projectVariants}
//           >
//             <HoverImage 
//               imageSrc={project.image}
//               hoverText={project.description}
//             />
//             {/* <img
//               src={project.image}
//               alt={project.name}
//               className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
//             /> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import HoverImage from "./Hover";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch team members from the backend
    axios.get("http://localhost:5000/team-members")
      .then((response) => {
        console.log("Fetched team members:", response.data);  // Debugging response
        setMembers(response.data);  // Set data to state
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-10">
      <h1 className="mt-10 text-lg text-black md:text-[34px] font-bold tracking-tight mb-10">
        Team Members
      </h1>
      <div className="h-1 w-20 mb-8 bg-black"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {members.length > 0 ? (
          members.map((member, index) => (
            <motion.div
              key={index}
              className="relative rounded-full overflow-hidden w-[200px] h-[200px] transition transform"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              <HoverImage
                imageSrc={member.image}
                hoverText={member.description}
              />
            </motion.div>
          ))
        ) : (
          <p>Loading team members...</p> // Show loading state while data is being fetched
        )}
      </div>
    </section>
  );
};

export default TeamMembers;


// import {motion} from "framer-motion";
// import { clipPath } from "framer-motion/client";
// import { HERO_CONTENT } from "../constants";
// import W3B from "../assets/logo.jpg";
// import TextReveal from 'text-reveal';

// const textVariants ={
//     hidden: {opacity : 0, y:50 },
//     visible: { opacity : 1, y: 0, transition: {duration: 0.8, ease:"easeOut"}}
// }

// const conatainerVariants = {
//     hidden: {opacity : 1},
//     visible: {
//         opacity:1,
//         transition:{
//             staggerChildren: 0.3,
//         }
//     }
// }

// const imageVariants = {
//     hidden:{clipPath:"insert(0 50% 0 50%"},
//     visible:{
//         clipPath:"insert(0 0% 0 0%",
//         transition: { duration: 1.2 ,ease: "easeInOut"}
//     }
// }
// const Hero = () => {
//   return (
//     <section>
//         <div className="font-serif relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-black">
//             <motion.div 
//             className="w-full md:w-1/2 p-8"
//             initial="hidden"
//             animate="visible"
//             variants={conatainerVariants}>
//                 <motion.h1 
//                 className="text-6xl font-bold md:text-3xl lg:text-5xl my-14 font-sans hover:text-[#8e50ff] transition duration-300 "
//                 variants={textVariants}>
//                     {HERO_CONTENT.greeting}
//                 </motion.h1>
//                 <motion.p 
//                 className="text-lg font- md:text-2xl lg:text-4xl "
//                 variants={textVariants}>
//                     {HERO_CONTENT.description}
//                 </motion.p>
//                 <motion.a 
//                 className="bg-white font-serif text-black p-3 lg:p-4 mt-8 inline-block rounded-2xl hover:bg-[#8e50ff] transition duration-300"
//                 href={HERO_CONTENT.resumeLink}
//                 download 
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 variants={textVariants}>
//                     {HERO_CONTENT.resumeLinkText}
//                 </motion.a>
//             </motion.div>

//             <motion.div 
//             className="w-full  md:w-1/2 p-8"
//             initial="hidden"
//             animate="visbile"
//             variants={imageVariants}>
//                 <img src={W3B} alt="logo" width={500} height={650}
//                 className="rounded-3xl"
//                 />
//             </motion.div>
//         </div>
//     </section>
//   )
// }

// export default Hero
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import W3B from "../assets/logo.jpg";

// Variants for individual characters
const charVariants = {
    hidden: { opacity: 0, y: -20 }, // Start above and hidden
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }, // Adjust duration for smoother drop
    },
};

// Split the text into individual characters
const splitText = (text) => text.split('').map((char, index) => (
    <motion.span key={index} variants={charVariants}>
        {char}
    </motion.span>
));

// Variants for the main container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger characters' drop
        },
    },
};

// Variants for the image animation
const imageVariants = {
    hidden: { clipPath: "inset(0 50% 0 50%)" },
    visible: {
        clipPath: "inset(0 0% 0 0%)",
        transition: { duration: 1.2, ease: "easeInOut" },
    },
};

const Hero = () => {
    return (
        <section>
            <div className="font-serif relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-black">
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants} // Wrap the text container with the animation variants
                >
                    <motion.h1 className="text-6xl font-bold md:text-3xl lg:text-5xl my-14 font-sans hover:text-[#8e50ff] transition duration-300">
                        {splitText("W3B JMI")} {/* Animated text */}
                    </motion.h1>
                    
                    <motion.p
                        className="text-lg md:text-2xl lg:text-4xl"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants} // Use the same variants for paragraph to animate it
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.a
                        className="bg-white font-serif text-black p-3 lg:p-4 mt-8 inline-block rounded-2xl hover:bg-[#8e50ff] transition duration-300"
                        href={HERO_CONTENT.resumeLink}
                        download
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <img
                        src={W3B}
                        alt="logo"
                        width={500}
                        height={650}
                        className="rounded-3xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

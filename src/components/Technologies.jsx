import { RiReactjsLine} from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import { FaVuejs } from "react-icons/fa";        // Vue.js
import { SiJavascript  } from "react-icons/si";        // Vue.js
import { SiAngular } from "react-icons/si";      // Angular
import { SiTypescript } from "react-icons/si";   // TypeScript
import { SiPython } from "react-icons/si";       // Python
// import { SiJava } from "react-icons/si";         // Java
import { SiCypress } from "react-icons/si";      // Cypress
import { SiJest } from "react-icons/si";         // Jest
import { SiTailwindcss } from "react-icons/si";  // Tailwind CSS
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial:  { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat:  Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate" 
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate" 
                variants={iconVariants(3)}>
                <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(5)}>
                <SiTypescript className="text-7xl text-blue-700" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(2)}>
                <TbBrandNextjs className="text-7xl text-gray-800" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(6)}>
                <FaVuejs className="text-7xl text-green-500" />
            </motion.div>
           
            {/* <div className="p-4">
                <SiJava className="text-7xl" />
                </div> */}
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(4)}>
                <SiAngular className="text-7xl text-red-600" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(2)}>
                <SiMongodb className="text-7xl text-green-600" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(5)}>
                <SiPython className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(3)}>
                <SiJest className="text-7xl text-pink-500" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(6)}>
                <SiCypress className="text-7xl text-gray-500" />
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate" 
                variants={iconVariants(5)}>
                <SiTailwindcss className="text-7xl text-blue-400" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
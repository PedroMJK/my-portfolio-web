import React from "react"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiJavascript, SiAngular, SiTypescript, SiPython, SiCypress, SiJest, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaVuejs } from "react-icons/fa"
import { motion } from "framer-motion"

// Função para animação de balanço dos ícones
const iconVariants = (duration) => ({
  initial:  { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" }
  }
})

const Technologies = () => {
  // Lista de tecnologias com ícones, cores e duração da animação
  const techList = [
    { icon: <RiReactjsLine />, color: "text-cyan-400", duration: 2.5 },
    { icon: <SiJavascript />, color: "text-yellow-400", duration: 3 },
    { icon: <SiTypescript />, color: "text-blue-700", duration: 5 },
    { icon: <TbBrandNextjs />, color: "text-gray-800", duration: 2 },
    { icon: <FaVuejs />, color: "text-green-500", duration: 6 },
    { icon: <SiAngular />, color: "text-red-600", duration: 4 },
    { icon: <SiMongodb />, color: "text-green-600", duration: 2 },
    { icon: <SiPython />, color: "text-yellow-500", duration: 5 },
    { icon: <SiJest />, color: "text-pink-500", duration: 3 },
    { icon: <SiCypress />, color: "text-gray-500", duration: 6 },
    { icon: <SiTailwindcss />, color: "text-blue-400", duration: 5 },
  ]

  return (
    <div id="technologies" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techList.map((tech, idx) => (
          <motion.div
            key={idx}
            className="p-4"
            initial="initial"
            animate="animate"
            variants={iconVariants(tech.duration)}
          >
            {React.cloneElement(tech.icon, { className: `text-7xl ${tech.color}` })}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies

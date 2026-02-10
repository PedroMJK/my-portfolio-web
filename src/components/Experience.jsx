import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div id="experience" className="pb-4">
  <motion.h2 
    whileInView={{ opacity: 1, y: 0 }} 
    initial={{ opacity: 0, y: -100 }} 
    transition={{ duration: 0.5 }} 
    className="my-20 text-center text-4xl"
  >
    Experience
  </motion.h2>

  <div className="relative">
    {/* Linha vertical da timeline */}
    <div className="absolute left-10 top-0 bottom-0 w-1 bg-stone-700 hidden lg:block z-0"></div>

    {EXPERIENCES.map((experience, index) => (
      <div 
        key={index} 
        className="mb-8 flex flex-wrap lg:justify-start lg:items-start gap-4 relative z-10"
      >
        {/* Ano */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }} 
          className="w-full lg:w-1/4 lg:pl-14"
        >
          <p className="mb-2 text-sm text-stone-300">{experience.year}</p>
        </motion.div>

        {/* Conteúdo */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 1 }} 
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-2 font-semibold">
            {experience.role} - <span className="text-sm text-stone-300">{experience.company}</span>
          </h3>
          <p className="mb-4 text-stone-300">{experience.description}</p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            {experience.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="rounded-full bg-stone-900 px-3 py-1 text-xs sm:text-sm font-medium text-stone-300 hover:bg-stone-800 transition whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Experience

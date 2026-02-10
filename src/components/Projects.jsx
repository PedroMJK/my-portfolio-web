import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className="pb-4">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div key={index} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }} className="bg-stone-900 rounded-xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full  object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-stone-200 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-stone-800 px-3 py-1 rounded-full text-xs text-stone-300">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 justify-center flex gap-8">
                  <a href={project.websiteLink} target="_blank" className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-full transition">Visit Site</a>
                  <a href={project.githubLink} target="_blank" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition">View Code</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects

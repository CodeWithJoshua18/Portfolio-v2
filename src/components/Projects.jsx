import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-16 text-center text-4xl font-bold tracking-tight"
      >
        Projects
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-lg"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 md:h-60">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h6 className="mb-2 text-lg font-semibold text-blue-400">
                  {project.title}
                </h6>
                <p className="mb-3 text-sm text-neutral-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded bg-neutral-800 px-2 py-1 text-xs text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
              >
                View Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects

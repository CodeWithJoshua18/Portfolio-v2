import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
          >
            {/* Year */}
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Role, description, tech */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-500">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

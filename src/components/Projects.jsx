import { PROJECTS } from "../constants"

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start"
          >
            {/* Image */}
            <div className="w-full mb-6 lg:mb-0 lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left">
              <h6 className="mb-2 font-semibold text-blue-300">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-2 py-1 text-sm text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

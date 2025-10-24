import { ABOUT_TEXT } from '../constants'
import aboutImg from '/images/caleb.jpeg'
import { motion } from 'framer-motion'

// Variants for staggered text animation
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015, // smoother pacing for long text
    },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

function About() {
  // Split long text into paragraphs (prevents cutoff)
  const paragraphs = ABOUT_TEXT.split(/\n\n+/)

  return (
    <div className="border-b border-neutral-900 pb-16">
      <h1 className="my-20 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            className="rounded-2xl shadow-lg shadow-blue-400/20 max-w-xs sm:max-w-sm lg:max-w-md"
            src={aboutImg}
            alt="Professional portrait of Caleb, full stack developer"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6"
        >
          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            {paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="my-2 max-w-xl"
              >
                {paragraph.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    variants={textItem}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

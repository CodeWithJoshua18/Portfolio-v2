import { ABOUT_TEXT } from '../constants'
import aboutImg from '/images/caleb.jpeg'
import { motion } from 'framer-motion'

// Variants for staggered text animation
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between words
    },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg shadow-cyan-300/20"
              src={aboutImg}
              alt="Professional portrait of the portfolio owner smiling in a well-lit indoor setting with a neutral background, conveying a friendly and approachable mood"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6 leading-relaxed"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ABOUT_TEXT.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={textItem}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

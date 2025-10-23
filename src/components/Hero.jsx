import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-10 flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-6 text-6xl font-thin tracking-tight lg:text-7xl"
      >
        Hi, I'm <span className="font-semibold">Caleb</span>
      </motion.h1>

      <motion.span
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
      >
        Engineering Everyday Solutions
      </motion.span>

      <motion.p
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="my-6 max-w-2xl px-4 font-semibold tracking-tighter text-lg text-neutral-300"
      >
        {HERO_CONTENT}
      </motion.p>
    </div>
  )
}

export default Hero

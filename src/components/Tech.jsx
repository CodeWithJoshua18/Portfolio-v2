import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const iconVariants = (duration, delay = 0) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,      // much faster bounce speed
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
})

function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
       className="my-20 text-center text-4xl">Technologies</motion.div>
      <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
       className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div
          variants={iconVariants(0.45, 0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(0.5, 0.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(0.55, 0.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(0.5, 0.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(0.45, 0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(0.6, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 hover:scale-115 hover:border-cyan-300 hover:bg-neutral-800/50 hover:backdrop-blur-sm transition-all duration-200">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tech

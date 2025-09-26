import { HERO_CONTENT} from '../constants'
import profilePic from '../assets/2.jpg'
import { motion } from 'framer-motion'

const container = (delay) =>({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

function Hero() {

    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                         variants={container(0)}
                         initial="hidden"
                         animate="visible"
                         className="pb-16 text-7xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            Hi, I'm 
                            Caleb
                        </motion.h1>
                            <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                             className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent'>
                                Engineering Everyday Solutions
                            </motion.span>
                        <motion.p
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                         className='my-2 max-w-xl py-6 font-semibold tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-10'>
                    <div className="flex justify-center">
                        <motion.img
                         initial={{ x: 100, opacity: 0}}
                         animate={{ x: 0, opacity: 1}}
                         transition={{ delay: 1, duration: 1.2}}
                         src={profilePic} alt="profile" className='h-72 w-72 rounded-full object-cover lg:h-96 lg:w-96'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
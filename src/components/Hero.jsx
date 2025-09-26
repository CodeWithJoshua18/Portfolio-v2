import { HERO_CONTENT} from '../constants'
import profilePic from '../assets/2.jpg'
function Hero() {

    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            Hello, I'm <br />
                            Caleb Kiamba
                            </h1>
                            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent'>
                                Engineering Everyday Solutions
                                </span>
                        <p className='my-2 max-w-xl py-6 font-semibold tracking-tighter'>
                            {HERO_CONTENT}
                            </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-10'>
                    <div className="flex justify-center">
                        <img src={profilePic} alt="profile" className='h-72 w-72 rounded-full object-cover lg:h-96 lg:w-96'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
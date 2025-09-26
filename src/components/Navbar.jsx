import logo from '../assets/1.png';
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';

function Navbar() {

    return(
        <nav className="bmb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaWhatsapp />
            </div>
        </nav>
    )
}

export default Navbar
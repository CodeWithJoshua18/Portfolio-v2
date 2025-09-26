import logo from '../assets/1.png';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/joshua-katumo-2ba282257/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="Connect with me on LinkedIn"
          className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/CodeWithJoshua18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="Check out my GitHub"
          className="hover:text-pink-400 hover:scale-110 transition-transform duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/254714252464?text=Hi%20Joshua,%20I%20came%20from%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="Chat with me on WhatsApp"
          className="hover:text-green-600 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

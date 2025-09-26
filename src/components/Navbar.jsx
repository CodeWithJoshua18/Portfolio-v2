import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullName((prev) => !prev);
    }, 5000); // switch every 5s for smoother reading
    return () => clearInterval(interval);
  }, []);

  // Variants for typewriter effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  };

  const char = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const name = "Caleb Kiamba";

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Dynamic Logo */}
      <div className="flex flex-shrink-0 items-center relative h-10">
        <AnimatePresence mode="wait">
          {showFullName ? (
            <motion.div
              key="fullname"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mx-2 flex text-xl font-bold tracking-wide text-white relative"
            >
              {name.split("").map((letter, index) => (
                <motion.span key={index} variants={char}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {/* Underline effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: name.length * 0.08,
                }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"
              />
            </motion.div>
          ) : (
            <motion.div
              key="initials"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              {/* Glow behind CK */}
              <div className="absolute h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-70 animate-pulse"></div>
              <span className="relative mx-2 text-xl font-extrabold text-white">
                CK
              </span>
            </motion.div>
          )}
        </AnimatePresence>
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

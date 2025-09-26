import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Contact() {
  return (
    <div className="relative border-b border-neutral-900 pb-10 overflow-hidden">
      {/* Floating gradient blob background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl animate-pulse"></div>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get In <span className="text-blue-400">Touch</span>
      </motion.h1>

      {/* Contact Info */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 px-6 sm:flex-row sm:justify-center"
      >
        {/* Phone Card */}
        <motion.a
          variants={item}
          href={`tel:${CONTACT.phoneNo}`}
          className="group flex items-center gap-3 rounded-2xl border border-neutral-700 bg-neutral-900/50 px-6 py-4 shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-blue-500"
        >
          <i className="fas fa-phone text-blue-400 group-hover:animate-bounce"></i>
          <span className="font-medium">{CONTACT.phoneNo}</span>
        </motion.a>

        {/* Email Card */}
        <motion.a
          variants={item}
          href={`mailto:${CONTACT.email}`}
          className="group flex items-center gap-3 rounded-2xl border border-neutral-700 bg-neutral-900/50 px-6 py-4 shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-green-500"
        >
          <i className="fas fa-envelope text-green-400 group-hover:animate-bounce"></i>
          <span className="font-medium">{CONTACT.email}</span>
        </motion.a>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105 hover:shadow-cyan-500/30"
        >
          Let’s Work Together 🚀
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Joshua. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;

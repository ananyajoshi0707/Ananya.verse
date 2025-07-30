"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react"; // Make sure lucide-react is installed

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-[#111827]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          📬 Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          I'm open to professional opportunities or collaboration inquiries. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Email */}
          <Link
            href="mailto:ananyajoshi0707@gmail.com"
            target="_blank"
            className="flex items-center gap-3 text-pink-600 dark:text-pink-400 hover:text-pink-700 transition"
          >
            <Mail size={22} />
            <span className="text-base font-medium">ananyajoshi0707@gmail.com</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/ananyajoshi0707"
            target="_blank"
            className="flex items-center gap-3 text-pink-600 dark:text-pink-400 hover:text-pink-700 transition"
          >
            <Github size={22} />
            <span className="text-base font-medium">GitHub</span>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/ananya-joshi0707/"
            target="_blank"
            className="flex items-center gap-3 text-pink-600 dark:text-pink-400 hover:text-pink-700 transition"
          >
            <Linkedin size={22} />
            <span className="text-base font-medium">LinkedIn</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

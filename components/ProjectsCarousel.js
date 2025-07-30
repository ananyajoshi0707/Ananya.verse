'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard'; // Make sure the path is correct

const projects = [
  {
    title: "Twachic: AI Skin Analyzer",
    img: "/project/twachic.png", // Add your image in public/projects/
    description:
      "AI-powered skin analysis tool using Gemini API. Detects acne, hyperpigmentation, redness, dryness, and irritation etc.  from uploaded skin images.",
    tech: "Django, Gemini API, MySQL, Bootstrap",
    liveLink: "https://your-twachic-demo.com", // Replace with actual link
    repoLink: "https://github.com/ananyajoshi0707/twachic.git", // Replace with actual repo
  },
  {
    title: "IntelliMail: AI Email Assistant",
    img: "/project/intelli.png", // Add your image in public/projects/
    description:
      "Multilingual email generator supporting tone customization, live previews, TTS, resume simulation, downloads, and reminders using LLMs.",
    tech: "Next.js, TypeScript, FastAPI, Gemini API, MongoDB",
    liveLink: "https://email-ai-assistant-henna.vercel.app/", // Replace with actual link
    repoLink: "https://github.com/ananyajoshi0707/email-ai-assistant.git", // Replace with actual repo
  },
  {
   title: "Listify - To-Do List",
  img: "/project/ss.png", // update this path if your image is different
  description: "A simple and interactive To-Do List built while learning. Helps manage daily tasks efficiently.",
  tech: "HTML, CSS, JavaScript",
  liveLink: "https://your-live-link.com", // replace with actual link if deployed
  repoLink: "https://github.com/ananyajoshi0707/To-do-list.git",
  },
  {
  title: "ApparelIQ - Garment Attribute Detection (Scheduled for Later)",
  img: "/projects/appareliq.png", // Update this if the image filename/path is different
  description: "Still in progress – A Deep Learning-based model that predicts attributes like sleeve length, collar type, color, and pattern from clothing images for better fashion categorization.",
  tech: "Python, TensorFlow/Keras, Pandas, NumPy, DeepFashion",
  
}

];

export default function ProjectsCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newIndex = (index + newDirection + projects.length) % projects.length;
    setIndex([newIndex, newDirection]);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-[#fefefe] dark:bg-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-10"
        style={{ paddingTop:"20px" } }
        >🚀 My Projects</h2>

        <div className="relative w-full max-w-xl mx-auto overflow-hidden h-[540px] sm:h-[360px] md:h-[380px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full"
            >
              <ProjectCard {...projects[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
  onClick={() => paginate(-1)}
  className="absolute top-1/2 left-0 ml-[-2.5rem] transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 z-10 shadow-lg"
  aria-label="Previous Project"
>
  <ChevronLeft />
</button>
<button
  onClick={() => paginate(1)}
  className="absolute top-1/2 right-0 mr-[-2.5rem] transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 z-10 shadow-lg"
  aria-label="Next Project"
>
  <ChevronRight />
</button>

        </div>
      </div>
    </motion.section>
  );
}




'use client'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import "./globals.css"
import Link from 'next/link';
import ProjectsCarousel from "@/components/ProjectsCarousel"; 
import ProjectCard from "@/components/ProjectCard"; // ✅ if file is inside components
import Blog from "@/components/Blog"
import ContactSection from "@/components/ContactSection"
export default function Home() {
  return (
   <div className="min-h-screen bg-[#fff4f8] text-[#2d2d2d] transition-colors duration-300">

      {/* Navbar */}
      <Navbar />
<br></br>
{/* About */}
<motion.section
  id="hero"
  className="flex flex-row justify-between px-6 py-10 bg-white min-h-[30vh] gap-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

 
  <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:text-left"
    style={{ paddingLeft: '70px' }}>
    <h1 className="text-5xl font-bold text-pink-600  mb-4 "
      style={{ paddingLeft: '40px' }}
    >
      Hi, I am Ananya Joshi{" "}
      <motion.span
        className="inline-block"
        animate={{ rotate: [0, 15, -10, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        👋
      </motion.span>
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
      A full-stack developer at heart—with a backend mindset, frontend curiosity, and a brain wired for AI.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
      Eager to leverage academic knowledge and hands-on project experience to drive innovative solutions in the tech industry
    </p>

    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
      Constantly learning, adapting, and pushing the limits of what&rsquo;s possible.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
     Let&rsquo;s collaborate and bring meaningful tech to life!
    </p>
    

  </div>


 <div className="w-full md:w-1/2 flex justify-end"
  style={{ paddingTop: '40px', paddingRight: '50px' }}>
  <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-pink-400 shadow-xl">
    <Image
      src="/skills/avtar.png"
      alt="Ananya Joshi"
      width={300}
      height={300}
      className="w-full h-full object-cover"
    />
  </div>
</div>


</motion.section>


<br></br>
        {/* --- Skills Section --- */}
      <motion.section
        id="skills"
        className="py-20 px-6 bg-white dark:bg-[#111827]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🧠 My Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
             { name: "Python", img: "/skills/python.jpg" },
              { name: "Django", img: "/skills/django.png" },
              { name: "Fast API", img: "/skills/fast.png" },
               { name: "Tailwind css", img: "/skills/tailwind.png" },
                { name: "HTML", img: "/skills/HTML.png" },
                  { name: "Bootstrap", img: "/skills/Bootstrap.png" },
                
                    { name: "Javascript", img: "/skills/Js.jpg" },
              { name: "Next.js", img: "/skills/nextjs.svg" },
              { name: "React.js", img: "/skills/react.png" },
                { name: "Flask", img: "/skills/flask.png" },
              { name: "MongoDB", img: "/skills/mongo.png" },
              { name: "MySQL", img: "/skills/mysql.png" },
              { name: "Docker", img: "/skills/docker.png" },
               { name: "AWS", img: "/skills/AWS.png" },
               { name: "AI", img: "/skills/AI.webp" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-[#2a2a2a] rounded-xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center"
              >
                <Image src={skill.img} alt={skill.name} width={64} height={64} className="mb-3" />
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <br></br>
<hr className="my-16 border-t-2 border-gray-300 dark:border-gray-600 w-3/4 mx-auto" />
<br></br>

{/* --- Projects Section --- */}
<ProjectsCarousel />
<br></br>

<hr className="my-16 border-t-2 border-gray-300 dark:border-gray-600 w-3/4 mx-auto" />
<br></br>
{/* --- Resume Section --- */}
      <motion.section
        id="resume"
        className="py-20 px-6 bg-gradient-to-b from-pink-50 dark:from-[#1f1b24] to-white dark:to-[#111827] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">📄 Download My Resume</h2>
        <motion.a
          href="/Resume/Ananya_Joshi1.pdf"
          download
          className="px-8 py-4 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Download PDF
        </motion.a>
      </motion.section>
<br></br>
      <hr className="my-16 border-t-2 border-gray-300 dark:border-gray-600 w-3/4 mx-auto" />

<br></br>

     {/* --- Blog Section --- */}

     <Blog />

<br></br>

<hr className="my-16 border-t-2 border-gray-300 dark:border-gray-600 w-3/4 mx-auto" /><br></br>
<ContactSection />
<br></br>
      {/* Footer */}
      <Footer />
    </div>
  );
}

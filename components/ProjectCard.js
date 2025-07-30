'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectCard = ({ title, description, img, tech, liveLink, repoLink }) => {
  return (
    <motion.div
      className="bg-white dark:bg-[#2a2a2a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative group">
        <Image src={img} alt={title} width={600} height={300} />
        
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 ">{description}</p>
        <p className="text-xs mt-2 text-gray-500  italic">Tech: {tech}</p>


  {repoLink && (
    <a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition"
   style={{ paddingLeft: '90px' }}
   >
      GitHub
    </a>
  )}
</div>

    </motion.div>
  )
}

export default ProjectCard


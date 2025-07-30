'use client';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.section
      id="blog"
      className="bg-white dark:bg-[#111827] py-20 px-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">📝 Blog</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Check out some of my latest articles on AI and technology. More coming soon!
        </p>
<br></br>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Blog 1 */}
          <motion.a
            href="https://medium.com/@ananyajoshi0707/5min-to-know-about-cloud-computing-%EF%B8%8F-87233a66b568"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="block border border-gray-200 dark:border-gray-600 p-6 rounded-lg bg-white dark:bg-[#1f1f1f] hover:shadow-lg transition"
          ><br></br>
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              ☁️ 2min to Know About Cloud Computing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A quick and beginner-friendly dive into cloud computing — its essence, benefits, and real-world impact.
            </p>
          </motion.a>
<br></br>
          {/* Blog 2 */}
          <motion.a
            href="https://medium.com/@ananyajoshi0707/the-art-of-giving-prompt-unleashing-the-powers-of-ai-f80d9c4baaec"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="block border border-gray-200 dark:border-gray-600 p-6 rounded-lg bg-white dark:bg-[#1f1f1f] hover:shadow-lg transition"
          ><br></br>
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              🎯 The Art of Giving Prompts
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn how effective prompt design enhances AI performance — turning curiosity into intelligent responses.
            </p>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

"use client"

import { motion } from 'framer-motion'
import { Server, Database, Cloud } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-xl mb-6">
              I'm a passionate backend developer with 7+ years of experience in building scalable and efficient server-side applications. My expertise lies in designing robust APIs, optimizing database performance, and implementing cloud-based solutions.
            </p>
            <p className="text-xl">
              With a strong foundation in computer science and a keen eye for system architecture, I strive to create backend systems that are not only functional but also maintainable and future-proof.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Server className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">API Development</h3>
              <p>RESTful & GraphQL</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p>SQL & NoSQL</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
              <p>AWS & Azure</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <motion.div
                className="w-12 h-12 mx-auto mb-4 text-green-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {'{'}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">System Architecture</h3>
              <p>Scalable & Efficient</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


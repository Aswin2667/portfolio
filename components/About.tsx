"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Code } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
              Hi, I'm Aswin—a seasoned backend developer with over 1 year of
              experience crafting scalable and efficient server-side solutions.
              I specialize in designing robust APIs, architecting data-driven
              systems, and leveraging cloud services to build high-performance
              applications.
            </p>
            <p className="text-xl">
              I’m passionate about collaborating with cross-functional teams to
              turn complex challenges into seamless solutions. My focus is on
              creating backend architectures that not only meet current needs
              but also scale effortlessly for the future.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Server className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">API Development</h3>
              <p>RESTful, GraphQL</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p>SQL (PostgreSQL, MySQL)</p>
              &
              <p>ClickHouse for High-Performance Querying</p>

            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
              <p>AWS, Azure, & Serverless</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">System Architecture</h3>
              <p>Scalable, Secure & Maintainable</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

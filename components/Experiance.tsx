"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: "Lead the development of scalable microservices architecture, improving system performance by 40%. Mentored junior developers and implemented best practices in code reviews and testing."
  },
  {
    title: "Backend Developer",
    company: "DataDrive Innovations",
    location: "New York, NY",
    period: "2017 - 2020",
    description: "Designed and implemented RESTful APIs serving over 1 million requests per day. Optimized database queries, reducing response times by 30%."
  },
  {
    title: "Junior Software Engineer",
    company: "StartUp Rocket",
    location: "Austin, TX",
    period: "2015 - 2017",
    description: "Contributed to the development of a cloud-based project management tool. Implemented user authentication and real-time collaboration features."
  }
]

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-400">{exp.title}</h3>
                <div className="flex items-center mb-4 text-gray-400">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span className="mr-4">{exp.company}</span>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
              <div className="bg-gray-700 px-6 py-4">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Key Achievements</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Improved system performance by 40%</li>
                  <li>Implemented industry best practices</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


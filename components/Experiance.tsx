"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Retainful",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 - present",
    description:
      "Contributed to the development of a cloud-based project management tool. Implemented user authentication and real-time collaboration features.",
    achievements: [
      "Designed and implemented a segment UI similar to those in Omnisend and Klaviyo, offering an intuitive and user-friendly interface for audience segmentation.",
    ],
  },
];

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
                <h3 className="text-2xl font-semibold mb-2 text-green-400">
                  {exp.title}
                </h3>
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
                <h4 className="text-lg font-semibold mb-2 text-green-400">
                  Key Achievements
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.achievements.map(
                    (achievement: string, index: number) => {
                      return <li key={index}>{achievement}</li>;
                    }
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

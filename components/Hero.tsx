"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubGraph from "./GitHubGraph";

const terminalLines = [
  "Hi, I'm Aswin.",
  "Full-Stack Software Engineer.",
  "Turning ideas into scalable applications.",
  "Passionate about creating impactful software.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Make it work, make it right, make it fast.",
];


export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev.length === terminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return [...prev, terminalLines[prev.length]];
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center flex-col justify-center bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-black p-8 rounded-lg shadow-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-green-400">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              $ ./introduce.sh
            </motion.div>
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              }}
              className="inline-block w-3 h-5 bg-green-400 ml-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>
      <GitHubGraph />
    </section>
  );
}

"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

const designPatterns = [
  {
    name: 'Singleton',
    description: 'Ensures a class has only one instance and provides a global point of access to it.',
    example: `
class DatabaseConnection {
  private static instance: DatabaseConnection;
  
  private constructor() {}
  
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
  
  public query(sql: string): void {
    console.log(\`Executing query: \${sql}\`);
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true
    `
  },
  {
    name: 'Factory Method',
    description: 'Defines an interface for creating an object, but lets subclasses decide which class to instantiate.',
    example: `
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    // Implement file logging
  }
}

class LoggerFactory {
  createLogger(type: string): Logger {
    if (type === 'console') {
      return new ConsoleLogger();
    } else if (type === 'file') {
      return new FileLogger();
    }
    throw new Error('Invalid logger type');
  }
}

const factory = new LoggerFactory();
const logger = factory.createLogger('console');
logger.log('Hello, world!');
    `
  },
  {
    name: 'Observer',
    description: 'Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.',
    example: `
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

class ConcreteObserver implements Observer {
  update(data: any): void {
    console.log(\`Received update: \${data}\`);
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello, observers!');
    `
  }
]

export default function DesignPatterns() {
  const [activePattern, setActivePattern] = useState(0)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Design Patterns
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center space-x-4">
            {designPatterns.map((pattern, index) => (
              <button
                key={pattern.name}
                className={`px-4 py-2 rounded ${
                  activePattern === index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setActivePattern(index)}
              >
                {pattern.name}
              </button>
            ))}
          </div>
          <motion.div
            key={activePattern}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">{designPatterns[activePattern].name}</h3>
            <p className="mb-6 text-gray-300">{designPatterns[activePattern].description}</p>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {designPatterns[activePattern].example}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


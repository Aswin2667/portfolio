import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={`${process.env.NEXT_PUBLIC_GITHUB_URL??"https://github.com/"}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Github size={24} />
          </a>
          <a href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL??"https://linkedin.com/"}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`${process.env.NEXT_PUBLIC_TWITTER_URL??"https://twitter.com/"}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} aswin.cloud . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
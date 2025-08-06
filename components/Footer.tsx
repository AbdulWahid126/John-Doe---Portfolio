"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer passionate about creating amazing web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#hobbies" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Hobbies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>john@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center">
            © {currentYear} John Doe. Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

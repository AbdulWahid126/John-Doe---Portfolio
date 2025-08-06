"use client"

import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center"
    >
      <div className="container">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I am <span className="text-blue-400">John Doe</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/AbdulWahid126"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulwahidxhaikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <Twitter size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium text-lg"
          >
            Learn More About Me
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  )
}

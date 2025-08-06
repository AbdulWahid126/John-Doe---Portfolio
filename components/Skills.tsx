"use client"

import type React from "react"

import { Code, Palette, Database, Globe, Smartphone, Server } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      level: 90,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      icon: Server,
      level: 85,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 80,
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      name: "Database Management",
      icon: Database,
      level: 75,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      name: "Web Technologies",
      icon: Globe,
      level: 88,
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      level: 70,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-600">Proficiency</span>
                  <span className="text-sm font-medium text-slate-900">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 animate-progress-bar"
                    style={
                      {
                        width: `${skill.level}%`,
                        "--progress-width": `${skill.level}%`,
                      } as React.CSSProperties
                    }
                  ></div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

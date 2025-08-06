"use client"

import { Gamepad2, Camera, Music, Book, Plane, Coffee } from "lucide-react"

export default function Hobbies() {
  const hobbies = [
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Strategy games and indie titles",
    },
    {
      name: "Photography",
      icon: Camera,
      description: "Street and landscape photography",
    },
    {
      name: "Music",
      icon: Music,
      description: "Playing guitar and music production",
    },
    {
      name: "Reading",
      icon: Book,
      description: "Tech books and sci-fi novels",
    },
    {
      name: "Traveling",
      icon: Plane,
      description: "Exploring new cultures and places",
    },
    {
      name: "Coffee",
      icon: Coffee,
      description: "Third-wave coffee enthusiast",
    },
  ]

  return (
    <section id="hobbies" className="section-padding bg-slate-50">
      <div className="container">
        <h2 className="section-title">My Hobbies</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <hobby.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{hobby.name}</h3>
              <p className="text-slate-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

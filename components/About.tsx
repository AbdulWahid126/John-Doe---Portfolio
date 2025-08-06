"use client"

import { MapPin, Mail, Calendar, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src="/devv.jpg?height=500&width=500&text=Profile+Photo"
                alt="John Doe Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
                <Award size={32} />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Passionate Developer & Creative Problem Solver</h3>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a full-stack developer with over 3 years of experience creating beautiful, functional web
              applications. I specialize in React, Next.js, and modern web technologies, with a keen eye for UI/UX
              design.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              mentoring junior developers, or sharing my knowledge with the developer community through blog posts and
              speaking engagements.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">john@example.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-slate-900">Experience</p>
                  <p className="text-slate-600">3+ Years</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-slate-900">Projects</p>
                  <p className="text-slate-600">50+ Completed</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  )
}

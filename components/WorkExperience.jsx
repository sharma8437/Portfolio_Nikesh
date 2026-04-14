import React, { useEffect, useRef, useState } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: 'React Developer',
      company: 'Avua',
      period: 'MAR 2025 - Present',
      location: 'Mohali, Punjab',
      type: 'Full-time',
      achievements: [
        'Built full-stack applications from scratch serving 10k+ users',
        'Integrated third-party APIs and payment gateways',
        'Optimized database queries for better performance',
        'Implemented responsive designs for mobile users'
      ],
      tech: ['React', 'Tailwind', 'Quill', 'Framer-Motion', 'Redux-Toolkit'],
    },
    {
      role: 'Full Stack Trainee',
      company: 'Antier Solutions',
      period: 'JULY 2024 - FEB 2025',
      location: 'Mohali, Punjab',
      type: 'Internship',
      achievements: [
        'Built reusable components and libraries',
        'Participated in code reviews and agile ceremonies',
        'Reduced bundle size by 25% through optimization'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux-Toolkit', 'Firebase'],
    }
  ]

  return (
    <section id="work-experience" ref={sectionRef} className="py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
    <div className="text-center mb-10 sm:mb-16">
  <div className="inline-flex items-center gap-3 mb-4">
    <span className="w-8 h-px bg-gray-400"></span>
    <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">
      My Journey
    </span>
    <span className="w-8 h-px bg-gray-400"></span>
  </div>

  <h2 className="text-2xl sm:text-4xl font-light text-gray-900 leading-snug text-center w-full">
    Professional
    <span className="font-bold block sm:inline sm:pl-3">
      Experience
    </span>
  </h2>

  <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm sm:text-base px-4">
    Building real-world applications and growing every day
  </p>
</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group h-full">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-gray-800 to-gray-600 w-0 group-hover:w-full transition-all duration-700"></div>

                <div className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words">{exp.role}</h3>
                      <p className="text-gray-600 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="bg-gray-900 text-white p-2 rounded-lg shrink-0">
                      <FiBriefcase size={16} />
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FiCalendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FiMapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 sm:space-y-2.5 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2 hover:text-gray-900 transition-colors">
                        <span className="text-gray-400 mt-0.5 shrink-0">▹</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background SVG - hidden on very small screens */}
      <div className="absolute top-11 -z-10 hidden sm:block overflow-hidden w-full">
        <svg width="1031" height="631" viewBox="0 0 1031 631" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" filter="url(#filter0_f_4564_10436)">
            <rect x="115.2" y="115.199" width="800" height="400" rx="200" fill="#F6EFFF"/>
          </g>
          <defs>
            <filter id="filter0_f_4564_10436" x="0" y="-0.000778198" width="1030.4" height="630.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="57.6" result="effect1_foregroundBlur_4564_10436"/>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default WorkExperience
import React, { useEffect, useRef, useState } from 'react'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiTypescript, SiJavascript, SiTailwindcss, SiMongodb,
  SiPostgresql, SiGit, SiDocker, SiFigma,
  SiVercel, SiGraphql, SiPrisma, SiRedux,
  SiJest, SiWebpack, SiNginx, SiLinux
} from 'react-icons/si'


const TechStack = () => {
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

  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  
  
  
  
    { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
   
  ]

  return (
    <section id="tech-stack" ref={sectionRef} className="py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          
           <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gray-400"></span>
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">
              TECH STACK
            </span>
            <span className="w-8 h-px bg-gray-400"></span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-light text-gray-900">
            Technologies I Use
          </h2>
        
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Always exploring and learning new technologies
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => (
            <div 
              key={idx}
              className={`bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 text-center group ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs text-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default TechStack
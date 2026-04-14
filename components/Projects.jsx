





import React, { useEffect, useRef, useState } from 'react'
import { 
  FiGithub, FiExternalLink, FiCode, FiEye, 
  FiStar, FiArrowRight, FiFolder, FiCalendar,
  FiChevronRight, FiGrid, FiList, FiX,
  FiHeart, FiGitBranch, FiCpu
} from 'react-icons/fi'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
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

  const projects = [
    {
      id: 1,
      title: 'Real-Time CV Editor',
      description: 'Developed a scalable real-time resume builder where users can edit, preview, and customize professional resumes instantly. Built multiple responsive templates with AI integration for smart content generation.',
      tech: ['React', 'Quill', 'Tailwind', 'motion', 'AI'],
      github: '',
      live: 'https://avua.com/applicant/resume-builder',
      category: 'fullstack',
      featured: true,
      date: '2025',
      stats: { stars: 24, forks: 8 },
      gradient: 'from-[#838691] to-[#444444]'
    },
    {
      id: 2,
      title: 'SociPro',
      description: 'All-in-one Chrome extension for social media growth with bookmark management, smart tools, productivity features, and a modern responsive UI for creators and professionals.',
      tech: ['React', 'JavaScript', 'Tailwind', 'Local Storage','CSS'],
      github: 'https://github.com/sharma8437/Chrome_Extension_SociPro',
      live: 'https://chromewebstore.google.com/detail/socipro-%E2%80%93-all-in-one-book/fmbffpbblcjpkaldfcbelblljpgkpgbi',
      category: 'frontend',
      featured: true,
      date: '2025',
      stats: { stars: 15, forks: 6 },
      gradient: 'from-[#838691] to-[#444444]'
    },
    {
      id: 3,
      title: 'Git Branch Manager',
      description: 'Chrome extension that helps developers quickly manage Git branches with an intuitive interface for branch switching, cleanup, and workflow productivity directly from the browser.',
      tech: ['React', 'JavaScript', 'Tailwind', 'CSS', 'Local Storage'],
      github: 'https://github.com/sharma8437/git_branch_manager_chrome_extension',
      live: 'https://chromewebstore.google.com/detail/git-branch-manager/cjmdpgbfkfafokolbbgnefjammbfhanm',
      category: 'frontend',
      featured: false,
      date: '2025',
      stats: { stars: 21, forks: 4 },
      gradient: 'from-[#838691] to-[#444444]'
    },
      {
  id: 4,
  title: 'Contractor Hiring Platform',
  description:
    'Built and enhanced AVUA contractor hiring platform with responsive landing pages, reusable React components, smooth animations, and conversion-focused UI. Contributed to pages showcasing AI matching, payroll compliance, global hiring, and contractor onboarding solutions.',
  tech: ['React', 'Next.js', 'JavaScript', 'Tailwind', 'Motion'],
  github: '',
  live: 'https://avua.com/contractor',
  category: 'frontend',
  featured: false,
  date: '2025',
  stats: { stars: 12, forks: 3 },
  gradient: 'from-[#838691] to-[#444444]'
},
    {
      id: 5,
      title: 'Blog Duniya',
      description: 'Dynamic blogging platform where users can browse and read blogs. Includes secure admin authentication, rich text editor, image uploads, and modern responsive UI.',
      tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'ImageKit', 'Quill Editor'],
      github: 'https://github.com/',
      live: 'https://blogs-duniya.vercel.app/',
      category: 'fullstack',
      featured: true,
      date: '2024',
      stats: { stars: 18, forks: 5 },
      gradient: 'from-[#838691] to-[#444444]'
    },
    {
      id: 6,
      title: 'Chandigarh Info',
      description: 'User-friendly city information platform featuring city highlights, interactive sliders, contact form with validation, and secure user authentication for personalized experience.',
      tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/sharma8437/Chandigarh_info_Project',
      live: 'https://chandigarh-info.netlify.app/',
      category: 'fullstack',
      featured: false,
      date: '2024',
      stats: { stars: 14, forks: 4 },
      gradient: 'from-[#838691] to-[#444444]'
    },
    {
  id: 7,
  title: 'Micro Frontend Host App',
  description:
    'Developed a scalable micro-frontend host application that integrates multiple independent frontend modules into a single platform. Implemented shared routing, reusable UI components, state management, and seamless deployment for faster team collaboration.',
  tech: ['React', 'JavaScript', 'Module Federation', 'Tailwind'],
  github: 'https://github.com/sharma8437/Micro-frontend-Project',
  live: 'https://micro-frontend-host-app.netlify.app/',
  category: 'frontend',
  featured: false,
  date: '2025',
  stats: { stars: 10, forks: 2 },
  gradient: 'from-[#838691] to-[#444444]'
},
    
 
  ];

  const filters = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ]

  const filteredProjects = projects
    .filter(p => filter === 'all' ? true : p.category === filter)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  p.description.toLowerCase().includes(searchTerm.toLowerCase()))

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section ref={sectionRef} id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-gray-400"></span>
            <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-500 uppercase">
              Portfolio 
            </span>
            <span className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-gray-400"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light text-gray-900">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2 px-4">
            Building solutions that solve real-world problems
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex  justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-72 md:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pl-9 sm:pl-10 pr-8 sm:pr-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-sm sm:text-base"
              />
              <FiCode className="absolute left-3 top-2.5 sm:top-3 text-gray-400" size={16} />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-2.5 sm:top-3">
                  <FiX size={16} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 md:block hidden rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
              >
                <FiGrid size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 sm:p-2 md:block hidden rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
              >
                <FiList size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Projects Banner */}
        {filter === 'all' && searchTerm === '' && featuredProjects.length > 0 && (
          <div className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 text-white">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <FiStar className="text-yellow-400 text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium">Featured Project</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{featuredProjects[0].title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{featuredProjects[0].description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {featuredProjects[0].tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 text-[10px] sm:text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={String(featuredProjects[0]?.live)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs sm:text-sm hover:text-gray-300 transition"
                  >
                    <FiExternalLink size={14} />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id}
                className={`group bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Gradient Top Bar */}
           
                
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-400">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  
                  {/* Stats & Links */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex gap-3 sm:gap-4">
                        {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition"
                      >
                        <FiGithub size={16} />
                      </a>
                      )}
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-3 sm:space-y-4">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id}
                className={`bg-white rounded-lg border border-gray-100 p-3 sm:p-4 hover:shadow-md transition-all transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 sm:gap-4 items-start sm:items-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <FiCpu size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{project.title}</h3>
                      {project.featured && (
                        <span className="text-[10px] sm:text-xs px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded">Featured</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 sm:line-clamp-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-[10px] sm:text-xs text-gray-400">{tech}{i < 3 && '•'}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3 ml-0 sm:ml-2">
                    {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-900 transition"
                    >
                      <FiGithub size={16} />
                    </a>
                    )}
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-900 transition"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <FiFolder size={48} className="text-gray-300 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            
            <button onClick={() => {setFilter('all'); setSearchTerm('');}} className="mt-3 sm:mt-4 text-sm text-gray-600 underline">
              Clear filters
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2 sm:mb-3">More projects available on GitHub</p>
          <a 
            href="https://github.com/sharma8437" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FiGithub size={18} />
            <span className="font-medium">View GitHub Profile</span>
            <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
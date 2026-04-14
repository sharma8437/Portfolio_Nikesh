import React, { useState, useEffect } from 'react'
import { navbarAssets } from '../assets/asset'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work Experience', href: '#work-experience', id: 'work-experience' },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: 'contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, href, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="block transition-transform duration-300 hover:scale-105">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image 
                    src={navbarAssets.PortfolioImage} 
                    alt="Logo" 
                    width={50} 
                    height={50}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex gap-1 lg:gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                      className={`relative px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group
                        ${activeSection === link.id 
                          ? 'text-[#7223e8] dark:text-[#7223e8]' 
                          : 'text-[#000000] dark:text-[#444444] hover:text-[#7223e8] dark:hover:text-[#7223e8]'
                        }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7223e8] to-[#7223e8] transition-all duration-300 group-hover:w-full
                        ${activeSection === link.id ? 'w-full' : ''}`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact', 'contact')}
                className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#7223e8] to-[#7223e8] rounded-full hover:from-[#7223e8] hover:to-[#7223e8] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                    className={`block px-6 py-3 text-base font-medium transition-colors duration-200
                      ${activeSection === link.id 
                        ? 'text-[#7223e8] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-[#000000] dark:text-gray-300 hover:text-[#7223e8] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-2 pb-4">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact', 'contact')}
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-24 md:h-28" />
    </>
  )
}

export default Navbar
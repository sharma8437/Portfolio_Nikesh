import React, { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";

import { 
  FiMail, FiMapPin, FiSend, FiCheckCircle, 
  FiGithub, FiLinkedin, FiTwitter, FiClock,
  FiAlertCircle
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  // REPLACE WITH YOUR WHATSAPP NUMBER
  const YOUR_WHATSAPP_NUMBER = "918437152529"
  
  // REPLACE WITH YOUR EMAIL
  const YOUR_EMAIL = "nikeshsharma100100@gmail.com"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  // WhatsApp Submit Handler
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    const message = `*New Portfolio Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 500)
  }

  // Email Submit Handler - FIXED
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Create mailto link
    const subject = `Portfolio Message from ${formData.name}`
    const body = `Name: ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`
    
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 500)
  }

  const contactInfo = [
    { icon: FiMail, title: 'Email', value: 'nikeshsharma100100@gmail.com', link: 'mailto:nikeshsharma100100@gmail.com' },
    { icon: FiMapPin, title: 'Location', value: 'Chandigarh, India', link: null },

  ]

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/sharma8437', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/nikesh-sharma84/', label: 'LinkedIn' },
    { icon: FaXTwitter, url: 'https://x.com/Nikeshsharma84', label: 'X' }
  ]

  return (
    <section id="contact" className="py-20 bg-[#ffff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 font-mono"> CONTACT</span>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-2">
            Get in <span className="font-semibold">Touch</span>
          </h2>
        
          <p className="text-gray-500 mt-4">
            Have a project? Let's discuss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                  <FaWhatsapp size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Quick chat?</p>
                  <a 
                    href={`https://wa.me/${YOUR_WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-green-700 hover:text-green-800"
                  >
                    Message on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-lg">
                  <div className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                    <info.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-gray-800 text-sm hover:text-gray-600">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Connect</h3>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Send a Message</h3>
            <p className="text-gray-500 text-sm mb-5">Fill the form and I'll get back to you.</p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <FiCheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-medium text-gray-900 mb-1">Message Sent!</h4>
                <p className="text-gray-500 text-sm">Thanks for reaching out. I'll respond soon.</p>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-gray-400 transition-colors`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-gray-400 transition-colors`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your message"
                    className={`w-full px-4 py-2.5 border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm font-medium"
                  >
                    <FaWhatsapp size={14} />
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 text-sm font-medium"
                  >
                    <FiSend size={14} />
                    Email
                  </button>
                </div>

                <p className="text-xs text-gray-400 text-center pt-2">
                  Your info is safe. No spam.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">© 2026 Nikesh Sharma.</p>
                {/* Social Links */}
            <div className='flex justify-center'>
          <p className="text-xs text-gray-400">Full Stack Developer 
     
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
          </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
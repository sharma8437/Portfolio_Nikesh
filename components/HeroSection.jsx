import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDownload,
} from "react-icons/fi";
import { navbarAssets } from "../assets/asset";
import { FaXTwitter } from "react-icons/fa6";


const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const words = [
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Developer",
  ];

  // Download CV function
  const downloadCV = async () => {
  setIsDownloading(true);
  try {
    const cvUrl = "/cv/NikeshCV_MERN_Stack_developer.pdf";
    const response = await fetch(cvUrl);
    
    if (!response.ok) throw new Error("CV not found");
    
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Nikesh_Sharma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
    // Show success message (optional)
    console.log("Download started successfully");
  } catch (error) {
    console.error("Error downloading CV:", error);
    // Show error message (optional)
    alert("Failed to download CV. Please try again later.");
  } finally {
    setIsDownloading(false);
  }
};


  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="home" className="h-full mb-12 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge - Animated Pulse */}
            <div className="inline-flex items-center gap-3 bg-gray-50 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Available for work
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-gray-900">Hi, I'm</span>
                <br />
                <span className="text-gray-900">Nikesh</span>
                <span className="text-[#7223e8]"> Sharma</span>
              </h1>

              <div className="h-10 sm:h-12">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                  <span className="font-medium text-gray-800">{typedText}</span>
                  <span className="animate-blink">|</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Full-stack developer building scalable, user-focused web
                applications with clean and efficient code.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-12">
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-gray-900">1+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-gray-900">6+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-gray-900">2+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Live Chrome Extensions</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-5 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </button>

              <button 
                onClick={downloadCV}
                className="group px-5 sm:px-8 py-2.5 sm:py-3 border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium tracking-wide hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Download CV
                <FiDownload size={16} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                Follow me
              </span>
              <span className="w-8 sm:w-12 h-px bg-gray-200"></span>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://github.com/sharma8437"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikesh-sharma84/"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="https://x.com/Nikeshsharma84"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            
            
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Decorative background elements - hidden on mobile, visible on tablet+ */}
              <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-l-2 border-[#7223e8]"></div>
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border-b-2 border-r-2 border-[#7223e8]"></div>

              {/* Main Image Container */}
              <div className="relative md:bg-[#ffffff] p-4 sm:p-6 lg:p-8 rounded-sm">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] mx-auto">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm flex items-center justify-center">
                    <Image
                      src={navbarAssets.PortfolioImage}
                      alt="Logo"
                      className="object-cover transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Experience Badge - responsive positioning */}
              <div className="absolute top-5 sm:top-8 lg:top-10 -right-4 sm:-right-6 lg:-right-9 bg-white border border-gray-200 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 shadow-sm max-w-[120px] sm:max-w-[150px]">
                <div className="text-center">
                  <div className="text-[11px] sm:text-[12px] lg:text-[14px] text-gray-500 leading-tight">
                    "Success is on the way, I’m just coding the route."
                  </div>
                </div>
              </div>

              {/* Projects Badge - responsive positioning */}
              <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 -left-3 sm:-left-4 lg:-left-5 bg-white border border-gray-200 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 shadow-sm">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">1+</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Working</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - commented out as in original */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
        <div className="w-px h-12 bg-gray-300"></div>
      </div> */}
    </section>
  );
};

export default Hero;
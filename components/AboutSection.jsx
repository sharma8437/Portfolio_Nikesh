import React from "react";
import Image from "next/image";
import { aboutSection } from "../assets/asset";
import { FiCode, FiLayout, FiServer, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const expertise = [
    {
      icon: FiCode,
      title: "Frontend",
      desc: "React, Next.js, TypeScript, Tailwind, MUI, Redux,Shadcn",
    },
    {
      icon: FiServer,
      title: "Backend",
      desc: "Node.js, Express.js, MongoDB ",
    },
   {
  icon: FiLayout,
  title: "Design",
  desc: "Responsive Design, UI Implementation, Basic Figma Collaboration, UI/UX Best Practices",
},
    {
  icon: FiTrendingUp,
  title: "Performance",
  desc: "Performance Optimization, Basic SEO, Accessibility Standards, Clean Code Practices",
},
  ];

  return (
    <section id="about" className="py-9 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Text first, then image */}
        <div className="block lg:hidden">
          {/* Text Content for Mobile */}
          <div className="space-y-6 sm:space-y-8 mb-12">
            <div>
              <span className="text-[10px] sm:text-xs text-gray-400 tracking-wider">
                KNOW ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Nikesh <br />
                <span className="text-gray-400">Sharma</span>
              </h2>
              <div className="w-10 sm:w-12 h-px bg-gray-900 mt-3 sm:mt-4"></div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I'm a Full Stack Developer dedicated to building scalable and
              efficient web applications. I prioritize performance,
              accessibility, and intuitive design to create products that truly
              make a difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-100 rounded-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white flex items-center justify-center rounded-sm group-hover:bg-gray-800 transition-colors duration-300">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gray-900 text-white text-xs sm:text-sm hover:bg-gray-800 transition-colors inline-block cursor-pointer"
>
  Contact me
</a>
          </div>

          {/* Image for Mobile */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative  p-4 sm:p-6 rounded-sm">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm flex items-center justify-center overflow-hidden">
                    {aboutSection?.about5 ? (
                      <Image
                        src={aboutSection.about5}
                        alt="Nikesh Sharma"
                        className="object-cover w-full h-full"
                        width={400}
                        height={400}
                        priority
                      />
                    ) : (
                      <div className="text-gray-400">Image not found</div>
                    )}
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-3 max-w-[160px]">
                    <p className="text-[11px] leading-relaxed">
                      "Code is poetry written in logic."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Image first, then text */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          {/* Image for Desktop */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="hidden sm:block absolute -top-1 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#7223e8]"></div>
              <div className="hidden sm:block absolute -bottom-2 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#7223e8]"></div>

              <div className="relative bg-[#ffffff] p-8 rounded-sm">
                <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm flex items-center justify-center overflow-hidden">
                    {aboutSection?.about5 ? (
                      <Image
                        src={aboutSection.about5}
                        alt="Nikesh Sharma"
                        className="object-cover w-full h-full"
                        width={400}
                        height={400}
                        priority
                      />
                    ) : (
                      <div className="text-gray-400">Image not found</div>
                    )}
                  </div>
                  <div className="absolute -bottom-9 -right-16 bg-gray-900 text-white p-5 max-w-[200px]">
                    <p className="text-sm leading-relaxed">
                      "Code is poetry written in logic."
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 -right-5 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1+</div>
                  <div className="text-xs text-gray-500">Years of</div>
                  <div className="text-xs text-gray-500">Excellence</div>
                </div>
              </div>

              <div className="absolute bottom-10 -left-5 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-xs text-gray-500">Live Chrome</div>
                  <div className="text-xs text-gray-500">Extensions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content for Desktop */}
          <div className="space-y-8">
            <div>
              <span className="text-xs text-gray-400 tracking-wider">
                KNOW ME
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Nikesh <br />
                <span className="text-gray-400">Sharma</span>
              </h2>
              <div className="w-12 h-px bg-gray-900 mt-4"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I'm a Full Stack Developer dedicated to building scalable and
              efficient web applications. I prioritize performance,
              accessibility, and intuitive design to create products that truly
              make a difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-4 p-4 bg-white border border-gray-100 rounded-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-sm group-hover:bg-gray-800 transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="px-6 py-2.5 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors inline-block cursor-pointer"
>
  Contact me
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
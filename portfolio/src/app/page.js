"use client";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import WorkExperience from "../../components/WorkExperience";
import TechStack from "../../components/TechStack";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import AnimatedSection from "../../components/AnimatedSection";
import ScrollGradientBall from "../../components/ScrollGradientBall";

export default function Home() {
  return (
    // position: relative is required so the absolute-positioned balls
    // are scoped to the full page height
    <div style={{ position: "relative" }} className="p-2">
      <ScrollGradientBall />

      <Navbar />

      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <TechStack />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
}
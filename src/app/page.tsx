import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky, glassmorphic header navbar containing active states and theme controls */}
      <Navbar />

      {/* Main visual sections */}
      <main className="w-full flex flex-col flex-grow">
        {/* Intro hero showcase */}
        <Hero />
        
        {/* Storytelling journey narrative */}
        <About />
        
        {/* Core stack skills marquee and indicators */}
        <Skills />
        
        {/* Glassmorphic work history timelines */}
        <Experience />
        
        {/* Alternating academic pipeline timeline */}
        <Education />
        
        {/* Full stack projects grid case studies */}
        <Projects />
        
        {/* Dynamic validation contact form console */}
        <Contact />
      </main>

      {/* Futuristic footer displaying technical copyrights */}
      <Footer />
    </>
  );
}

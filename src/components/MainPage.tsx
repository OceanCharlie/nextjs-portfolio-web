"use client";

import { useState, useEffect } from 'react';
import { Navbar } from './layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Leadership } from './sections/Leadership';
import { Expertise } from './sections/Expertise';
import { Contact } from './sections/Contact';
import { Footer } from './layout/Footer';

export default function MainPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-50 relative overflow-hidden">
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div
        className="fixed top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px] transition-transform duration-1000 pointer-events-none"
        style={{
          transform: `translate(${scrollY * 0.1 + mousePosition.x * 0.02}px, ${scrollY * 0.05 + mousePosition.y * 0.02}px)`
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] transition-transform duration-1000 pointer-events-none"
        style={{
          transform: `translate(-${scrollY * 0.08 - mousePosition.x * 0.02}px, -${scrollY * 0.04 - mousePosition.y * 0.02}px)`
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Leadership />
        <Expertise />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import CV from '../components/CV';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import BackToTop from '../components/BackToTop';
import AIChatbot from '../components/AIChatbot';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <LanguageProvider>
      <PerformanceOptimizer />
      <motion.div 
        className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <CV />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
        <FloatingCTA scrollToSection={scrollToSection} />
        <BackToTop />
        <AIChatbot />
      </motion.div>
    </LanguageProvider>
  );
};

export default Index;
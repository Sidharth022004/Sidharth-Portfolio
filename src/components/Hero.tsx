
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Rose Pattern Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4a7b4553-2938-4dd1-aea7-73733ae61ded.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-cyan-500/80"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/30">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-20 right-10 text-white/30">
        <Sparkles size={18} />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-yellow-300">
            Sidharth
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          A passionate{' '}
          <span className="font-semibold text-yellow-300">
            Software Engineer
          </span>{' '}
          building innovative web experiences with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-200 mb-4">Scroll to explore</p>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-yellow-300 transition-colors hover:scale-110"
            aria-label="Scroll down to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

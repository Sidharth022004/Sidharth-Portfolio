import React from 'react';
import { ArrowDown, Sparkles, Code, Database, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const { t } = useLanguage();
  
  const taglines = [
    t('hero.tagline1'),
    t('hero.tagline2'), 
    t('hero.tagline3'),
    t('hero.tagline4')
  ];

  const [currentTagline, setCurrentTagline] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4a7b4553-2938-4dd1-aea7-73733ae61ded.png')`
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-purple-600/85 to-cyan-500/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-white/20"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Code size={32} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-white/20"
          animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Database size={28} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-white/20"
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Palette size={24} />
        </motion.div>
        <div className="absolute top-20 left-1/4 text-white/30">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-20 left-1/3 text-white/30">
          <Sparkles size={18} />
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.greeting')}{' '}
          <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            {t('hero.name')}
          </span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.div 
          className="text-2xl md:text-3xl mb-4 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.span
            key={currentTagline}
            className="font-semibold text-yellow-300 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[currentTagline]}
          </motion.span>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Enhanced Stats Row */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">2+</div>
            <div className="text-sm text-gray-200">{t('hero.stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">5+</div>
            <div className="text-sm text-gray-200">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">100%</div>
            <div className="text-sm text-gray-200">{t('hero.stats.dedicated')}</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="flex items-center space-x-2">
              <span>{t('hero.viewWork')}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105 hover:-translate-y-0.5"
          >
            {t('hero.getInTouch')}
          </button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-sm text-gray-200 mb-4">{t('hero.scrollExplore')}</p>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-yellow-300 transition-colors hover:scale-110"
            aria-label="Scroll down to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
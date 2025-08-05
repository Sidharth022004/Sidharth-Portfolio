import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Code, Database, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const { t } = useLanguage();
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  
  const taglines = [
    t('hero.tagline1'),
    t('hero.tagline2'),
    t('hero.tagline3'),
    t('hero.tagline4')
  ];

  const [currentTagline, setCurrentTagline] = React.useState(0);

  // Initialize Vanta.js topology background
  useEffect(() => {
    if (!vantaRef.current || vantaEffect.current) return;

    const loadVanta = async () => {
      try {
        // Load p5.js first
        if (!(window as any).p5) {
          const p5Script = document.createElement('script');
          p5Script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js';
          p5Script.async = true;
          document.head.appendChild(p5Script);

          await new Promise((resolve, reject) => {
            p5Script.onload = resolve;
            p5Script.onerror = reject;
            setTimeout(reject, 5000); // 5 second timeout
          });
        }

        // Small delay to ensure p5 is fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Load Vanta topology
        if (!(window as any).VANTA) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js';
          vantaScript.async = true;
          document.head.appendChild(vantaScript);

          await new Promise((resolve, reject) => {
            vantaScript.onload = resolve;
            vantaScript.onerror = reject;
            setTimeout(reject, 5000); // 5 second timeout
          });
        }

        // Small delay to ensure Vanta is fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize Vanta effect
        if ((window as any).VANTA?.TOPOLOGY && vantaRef.current) {
          vantaEffect.current = (window as any).VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x222222,
            color: 0x89964e
          });
          console.log('Vanta topology initialized successfully');
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      {/* Vanta.js Topology Background */}
      <div 
        ref={vantaRef}
        className="absolute inset-0 opacity-30 dark:opacity-50"
      />
      
      {/* Minimal overlay to maintain text readability */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-primary/20"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Code size={32} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-primary/20"
          animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Database size={28} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-primary/20"
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Palette size={24} />
        </motion.div>
        <div className="absolute top-20 left-1/4 text-primary/30">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-20 left-1/3 text-primary/30">
          <Sparkles size={18} />
        </div>
      </div>

      <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.greeting')}{' '}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
            className="font-semibold text-primary inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[currentTagline]}
          </motion.span>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground"
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
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">{t('hero.stats.dedicated')}</div>
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
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
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
            className="group border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:-translate-y-0.5"
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
          <p className="text-sm text-muted-foreground mb-4">{t('hero.scrollExplore')}</p>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors hover:scale-110"
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
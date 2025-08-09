import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sidharth-demo",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sidharth-demo",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sidharth_demo",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:sid240711@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'cv', label: t('nav.cv') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('footer.brand')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mt-3">
                {t('footer.description')}
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('footer.quickLinks')}
            </motion.h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-left text-sm hover:translate-x-1 transition-transform duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('footer.connect')}
            </motion.h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Sidharth.</span>
              <span>{t('footer.rights')}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>{t('footer.using')}</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6 text-xs text-gray-500">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              {t('footer.terms')}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
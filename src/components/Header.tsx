import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Folder, Mail, FileText, 
  HelpCircle, Sun, Moon, Menu, X as CloseIcon
} from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ isDarkMode, toggleDarkMode, activeSection, scrollToSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'projects', label: t('nav.projects'), icon: Folder },
    { id: 'cv', label: t('nav.cv'), icon: FileText },
    { id: 'faq', label: t('nav.faq'), icon: HelpCircle },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Sidharth.dev
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-200/50 dark:border-blue-700/50' 
                    : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 dark:hover:from-gray-800/50 dark:hover:to-blue-900/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Language Switch */}
            <LanguageSwitch />
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map(({ id, label, icon: Icon }, index) => (
                  <motion.button
                    key={id}
                    onClick={() => handleScrollToSection(id)}
                    className="flex items-center space-x-3 w-full px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
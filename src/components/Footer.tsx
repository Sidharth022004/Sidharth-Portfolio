import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <motion.footer 
      className="bg-gray-900 dark:bg-gray-950 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
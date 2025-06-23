
import React from 'react';
import { motion } from 'framer-motion';
import { Download, User, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          
          <motion.a
            href="/Sidharth_Resume.pdf"
            download="Sidharth_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <User className="mr-2" size={24} />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-600" size={18} />
                <span>9870220973</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-600" size={18} />
                <span>sid240711@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-600" size={18} />
                <span>Vill. Bharthal, Dwarka Sec-26, South West Delhi 110077</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-3 text-blue-600" size={18} />
                <span>DOB: 02 August 2004</span>
              </div>
            </div>
          </motion.div>

          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Objective</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I seek challenging opportunities where I can fully utilize my skills for the success of the organization, 
              while continuously learning and growing in the dynamic field of technology.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">DPG Degree College, Haryana</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Affiliated with MDU Rohtak | Expected: January 2026</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h4 className="font-bold text-lg">12th - Arts Vocational</h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Sarvodaya Bal Vidyalaya, Dwarka Sector-26, Delhi</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed: January 2023 | Score: 85%</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h4 className="font-bold text-lg">10th Standard</h4>
              <p className="text-green-600 dark:text-green-400 font-medium">Gyan Jyoti Public School, Chhawala</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed: January 2021 | Score: 50%</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg">Web Developer Intern</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">SingleInterface – Gurugram, India</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">June 2024 – August 2024</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Performed detailed website testing across multiple browsers and devices</li>
                <li>Detected bugs and resolved them quickly to maintain quality standards</li>
                <li>Worked closely with the dev team to apply UI/UX improvements</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h4 className="font-bold text-lg">Internshala Student Partner</h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Internshala</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">August 2024 – Currently doing</p>
              <p className="text-gray-600 dark:text-gray-300">
                Selected as the face of Internshala in my college, helping students find the right courses and internships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Core Qualifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-2">Web Development</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">React, HTML, CSS, JavaScript</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
              <div className="text-purple-600 dark:text-purple-400 text-2xl font-bold mb-2">IoT</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Internet of Things Solutions</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
              <div className="text-green-600 dark:text-green-400 text-2xl font-bold mb-2">AI</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Artificial Intelligence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;

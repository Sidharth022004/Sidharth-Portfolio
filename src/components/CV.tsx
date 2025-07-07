import React from 'react';
import { motion } from 'framer-motion';
import { Download, User, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const CV = () => {
  const handleDownload = () => {
    // Create a simple text-based resume for download
    const resumeContent = `
SIDHARTH - SOFTWARE ENGINEER
Email: sid240711@gmail.com
Phone: 9870220973
Location: Vill. Bharthal, Dwarka Sec-26, South West Delhi 110077

OBJECTIVE
As a BCA student passionate about technology, I am seeking opportunities to apply my learning in real-world projects while continuing to develop my skills in software development and quality assurance.

EDUCATION
Bachelor of Computer Applications (BCA)
DPG Degree College, affiliated by MDU Rohtak, Haryana
Currently Pursuing

12th Grade (CBSE) - 2022-2023 - Score: 85%
10th Grade (Matric) (CBSE) - 2020-2021 - Score: 50%

EXPERIENCE
QA Testing Intern - Loqal.ai (June 2024 – August 2024)
- Performing manual testing of web and mobile applications
- Preparing detailed bug reports and collaborating with development team
- Participating in test plan creation and quality assurance improvements

Internshala Student Partner - Internshala (August 2024 - Dec 2024)
- Represented Internshala in college, guiding students to find suitable courses and internships

Frontend Tester Intern - SingleInterface (June 2024 – August 2024)
- Completed 1.5-month internship in web development as frontend tester
- Gained valuable experience working with supportive team and mentors

SKILLS
Technical Skills:
- Manual Testing & QA
- HTML, CSS, JavaScript (Learning)
- React Basics (Learning)
- Microsoft Office Suite
- Bug Reporting & Documentation

Personal Skills & Languages:
- Attention to Detail
- Quick Learner
- Team Collaboration
- Hindi (Fluent)
- English (Proficient)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sidharth_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
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
              As a BCA student passionate about technology, I am seeking opportunities to apply my learning in real-world projects while continuing to develop my skills in software development and quality assurance.
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
              <p className="text-blue-600 dark:text-blue-400 font-medium">DPG Degree College, affiliated by MDU Rohtak, Haryana</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Currently Pursuing</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h4 className="font-bold text-lg">12th Grade (CBSE)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2023 | Score: 85%</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h4 className="font-bold text-lg">10th Grade (Matric) (CBSE)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021 | Score: 50%</p>
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
            <div className="border-l-4 border-red-600 pl-6">
              <h4 className="font-bold text-lg">QA Testing Intern</h4>
              <p className="text-red-600 dark:text-red-400 font-medium">Loqal.ai</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">June 2024 – August 2024</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Performing manual testing of web and mobile applications to identify bugs and ensure functionality, usability, and performance</li>
                <li>Preparing detailed bug reports and collaborating with the development team to resolve issues efficiently</li>
                <li>Participating in test plan creation and contributing to quality assurance process improvements</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h4 className="font-bold text-lg">Internshala Student Partner</h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Internshala</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">August 2024 - Dec 2024</p>
              <p className="text-gray-600 dark:text-gray-300">
                Represented Internshala in college, guiding students to find suitable courses and internships.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg">Frontend Tester Intern</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">SingleInterface</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">June 2024 – August 2024</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Completed a 1.5-month internship in web development as a frontend tester</li>
                <li>Gained valuable experience working with a supportive team and mentors</li>
              </ul>
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
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Technical Skills</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Manual Testing & QA</li>
                <li>• HTML, CSS, JavaScript (Learning)</li>
                <li>• React Basics (Learning)</li>
                <li>• Microsoft Office Suite</li>
                <li>• Bug Reporting & Documentation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Personal Skills & Languages</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Attention to Detail</li>
                <li>• Quick Learner</li>
                <li>• Team Collaboration</li>
                <li>• Hindi (Fluent)</li>
                <li>• English (Proficient)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Achievements & Awards</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate of Competition of Internship in SingleInterface</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate of Participation in Internshala Student Partner</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Micro Internship in Digital Marketing (IBM Skill Build)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Digital Marketing in 11 Hours Tutorial for Beginners Certificate</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">ISP Internshala Student Partner 44 Webinar Certificate</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate of Participation - Value Added Course (Spreadsheet Management)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Start-up MahaKhumb Visitor Certificate</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate of Participation in Nukkad Natak (Eco Holi)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate For Leadership and 2nd Position in PPT Competition</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Certificate of Participation in Nukkad Natak</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
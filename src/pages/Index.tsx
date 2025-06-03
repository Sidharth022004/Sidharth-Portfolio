
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Folder, Mail, Github, Linkedin, Twitter, FileText, 
  Instagram, Sun, Moon, HelpCircle, Menu, X as CloseIcon 
} from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
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
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'cv', label: 'CV', icon: FileText },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const heroTextVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const heroButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=E-commerce+Platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=Task+Manager"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with data visualization",
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=Weather+Dashboard"
    }
  ];

  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, TypeScript, Node.js, Python, and various cloud technologies. I'm always learning new tools to stay current with industry trends."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, I work with clients both locally and remotely. I'm experienced in remote collaboration using modern tools and communication platforms."
    },
    {
      question: "What's your development process?",
      answer: "I follow an agile development process with regular check-ins, prototyping, iterative development, and thorough testing to ensure quality deliverables."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === id 
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300">Sidharth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A passionate Software Developer building awesome web experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroButtonVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://placehold.co/400x400/E0E7FF/4338CA?text=Your+Photo"
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-full shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">About Me</h2>
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 text-lg"
              >
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  I'm a passionate software developer with over 5 years of experience creating
                  innovative web applications and digital solutions. My journey in tech started
                  with a curiosity about how things work, which led me to pursue computer science
                  and dive deep into the world of programming.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  I specialize in full-stack development, with expertise in React, TypeScript,
                  Node.js, and modern cloud technologies. I love turning complex problems into
                  simple, elegant solutions that provide real value to users.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  When I'm not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or enjoying the outdoors with my camera in hand.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline">
                        <Folder size={16} />
                        <span>View Project</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:underline">
                        <Github size={16} />
                        <span>GitHub</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-12">My Resume / CV</h2>
            
            <div className="text-center mb-12">
              <motion.a
                href="/Sidharth_Resume.pdf"
                download="Sidharth_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FileText size={20} />
                <span>Download CV (PDF)</span>
              </motion.a>
            </div>

            <div className="space-y-8">
              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Objective</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I seek challenging opportunities where I can fully use my skills for the success of the organization.
                </p>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Phone:</span> 9870220973</p>
                  <p><span className="font-medium">Email:</span> sid240711@gmail.com</p>
                  <p><span className="font-medium">Address:</span> Vill.Bharthal dwarka sec-26 South West Delhi 110077</p>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor's of Computer Applications (BCA)</h4>
                    <p className="text-gray-600 dark:text-gray-300">DPG Degree College (Affiliated with MDU Rohtak Haryana)</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2023 - 2026 | Pursuing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">12th (CBSE)</h4>
                    <p className="text-gray-600 dark:text-gray-300">Arts Vocational</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2022 - 2023 | Scored: 85%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">10th Matric (CBSE)</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">2020 - 2021 | Scored: 50%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">Web Developer Intern</h4>
                    <p className="text-gray-600 dark:text-gray-300">SingleInterface – Gurugram, India</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">24/06/2024 - 06/08/2024</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      I completed a 1.5 months internship in web development as a frontend tester. My overall experience was good with the team - all my seniors were like mentors and good teachers to me.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Internshala Student Partner</h4>
                    <p className="text-gray-600 dark:text-gray-300">Internshala</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">27/08/2024 - Currently doing</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      I'm the face of Internshala in my college. They chose me as the face of Internshala Student Partner. I help students find the right courses and internships for them.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Micro Internship in Digital Marketing</h4>
                    <p className="text-gray-600 dark:text-gray-300">IBM Skill Build</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">25/03/2024 - 11/04/2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Microsoft Office</span>
                      <span className="text-indigo-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Collaboration</span>
                      <span className="text-indigo-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Attention to Detail</span>
                      <span className="text-indigo-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Computer Skills</span>
                      <span className="text-indigo-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Achievements & Awards</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Digital Marketing Certificate:</span>
                      <br />
                      <span className="text-sm">Digital marketing in 11 hrs tutorial for beginners</span>
                      <br />
                      <a href="https://online.publuu.com/525833/1178154" className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Internship Competition Certificate</span>
                      <br />
                      <a href="https://online.publuu.com/525833/1178160" className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Certificate of Participation - Spreadsheet Management</span>
                      <br />
                      <a href="https://online.publuu.com/525833/1178487" className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Certificate of Participation - Nukkad Natak Eco Holi</span>
                      <br />
                      <a href="https://online.publuu.com/525833/1178488" className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Certificate of Participation - Nukkad Natak</span>
                      <br />
                      <a href="https://online.publuu.com/525833/1178486" className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><span className="font-medium">Date of Birth:</span> 02 August 2004</p>
                    <p><span className="font-medium">Nationality:</span> Indian</p>
                    <p><span className="font-medium">Marital Status:</span> Single</p>
                    <p><span className="font-medium">Gender:</span> Male</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Interests & Hobbies:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Painting</li>
                      <li>Internet Surfing</li>
                      <li>Tech Research & Learning</li>
                      <li>Social Media</li>
                      <li>Keeping up with Current Events</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span className="font-semibold">{item.question}</span>
                    <motion.svg
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
            
            <motion.div
              variants={cardVariants}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <div className="text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Sidharth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

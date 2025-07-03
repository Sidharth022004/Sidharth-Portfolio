import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution built with React, TypeScript, and Node.js featuring real-time inventory management and secure payment processing.",
      fullDescription: "This comprehensive e-commerce platform features advanced inventory management, real-time notifications, secure payment integration with Stripe, and a responsive admin dashboard. Built with performance and scalability in mind.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024",
      status: "Completed"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      fullDescription: "A comprehensive project management tool with Kanban boards, real-time collaboration, time tracking, file sharing, and detailed analytics. Features include team management, deadline tracking, and integration with popular tools.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024",
      status: "In Progress"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive weather dashboard with data visualization, location-based forecasts, and historical weather analysis.",
      fullDescription: "Advanced weather analytics platform featuring machine learning predictions, interactive maps, historical data analysis, and customizable alerts. Integrates multiple weather APIs for comprehensive coverage.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
      tech: ["React", "Chart.js", "Weather API", "CSS Grid", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2023",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in modern web development.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                      <span>•</span>
                      <Tag size={14} />
                      <span>{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {projects[selectedProject].title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{projects[selectedProject].year}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Tag size={14} />
                        <span>{projects[selectedProject].status}</span>
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    {projects[selectedProject].fullDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={projects[selectedProject].liveUrl}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>View Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={projects[selectedProject].githubUrl}
                      className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>View Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
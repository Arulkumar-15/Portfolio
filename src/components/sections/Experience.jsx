import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../../data/portfolio';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
      className="glass-effect rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
        <h4 className="text-base sm:text-lg font-bold text-white">{project.name}</h4>
        <span className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-xs font-medium text-purple-400 self-start sm:self-auto">
          {project.tech}
        </span>
      </div>
      <p className="text-dark-500 text-xs sm:text-sm mb-4">{project.description}</p>
      
      <div className="space-y-2">
        <p className="text-xs font-semibold text-primary-400 mb-2">Key Achievements:</p>
        {project.achievements.map((achievement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            className="flex items-start text-dark-500 text-xs sm:text-sm"
          >
            <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
            <span>{achievement}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-4 h-4 bg-gradient-to-br from-purple-600 to-primary-600 rounded-full border-4 border-dark-50 z-10"
        />
        {index < experience.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-purple-600 to-primary-600 opacity-30" />
        )}
      </div>

      {/* Content Card */}
      <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{exp.company}</h3>
              <p className="text-sm sm:text-base text-purple-400 font-semibold">{exp.role}</p>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600/20 to-primary-600/20 border border-purple-600/30 rounded-full text-xs sm:text-sm font-medium text-white self-start sm:self-auto">
                {exp.period}
              </span>
              <span className="text-dark-500 text-xs sm:text-sm mt-2 flex items-center self-start sm:self-auto">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location}
              </span>
            </div>
          </div>

          {/* Projects Summary */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">Projects</h4>
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-purple-400 text-xs sm:text-sm font-medium flex items-center hover:text-purple-300 transition-colors self-start sm:self-auto"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
              {exp.projects.map((project, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-lg p-2 sm:p-3 text-center cursor-pointer"
                  onClick={() => setIsExpanded(true)}
                >
                  <div className="text-xl sm:text-2xl mb-1">
                    {i === 0 && '🚗'}
                    {i === 1 && '💼'}
                    {i === 2 && '📋'}
                    {i === 3 && '🌐'}
                  </div>
                  <p className="text-white font-semibold text-xs sm:text-sm mb-1 line-clamp-1">{project.name}</p>
                  <span className="text-xs text-purple-400 line-clamp-1">{project.tech}</span>
                </motion.div>
              ))}
            </div>

            {/* Expanded Projects Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 sm:space-y-4 overflow-hidden"
                >
                  {exp.projects.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-1.5 sm:mr-2">📱</span>
              <div>
                <p className="text-xs text-dark-500">Projects</p>
                <p className="text-base sm:text-lg font-bold gradient-text">{exp.projects.length}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-1.5 sm:mr-2">⭐</span>
              <div>
                <p className="text-xs text-dark-500">Avg Rating</p>
                <p className="text-base sm:text-lg font-bold gradient-text">4.6</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-1.5 sm:mr-2">👥</span>
              <div>
                <p className="text-xs text-dark-500">Total Users</p>
                <p className="text-base sm:text-lg font-bold gradient-text">750+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-dark-500 text-base sm:text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-0">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20 px-4"
        >
          <p className="text-dark-500 text-sm sm:text-base mb-4 sm:mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base inline-block"
          >
            Let's Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


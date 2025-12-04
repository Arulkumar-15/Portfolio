import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects, personalInfo } from '../../data/portfolio';
import { AnimatedButton } from '../reactbits';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-primary-600/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {project.id === 1 && '💼'}
            {project.id === 2 && '📋'}
            {project.id === 3 && '🚗'}
            {project.id === 4 && '🌐'}
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-dark-50 via-dark-50/50 to-transparent flex items-end p-6"
          >
            <div className="flex gap-3">
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                style={{ transform: 'translateZ(20px)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                style={{ transform: 'translateZ(20px)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-dark-500 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-purple-400 border border-purple-600/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <span className="text-xs text-dark-500 capitalize">{key}:</span>
                <span className="text-sm font-semibold text-purple-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'React Native', 'Flutter', 'Next.js'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-dark-500 text-lg">
            Showcase of my latest work and production applications
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterOption
                  ? 'bg-gradient-to-r from-purple-600 to-primary-600 text-white'
                  : 'glass-effect text-dark-500 hover:text-white'
              }`}
            >
              {filterOption}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <AnimatedButton
            href={personalInfo.github}
            target="_blank"
            variant="glow"
            size="lg"
            className="inline-flex items-center"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}


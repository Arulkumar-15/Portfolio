import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education, certifications, stats } from '../../data/portfolio';
import { SplitText, AnimatedCard, AnimatedButton } from '../reactbits';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref}>
      {isInView ? value : '0'}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-dark-500 text-lg">Get to know me better</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile placeholder with gradient border */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-purple-600 via-primary-500 to-purple-700 animate-gradient">
                <div className="glass-effect rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600/20 to-primary-600/20 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                  <p className="text-purple-400 font-semibold">{personalInfo.title}</p>
                  <div className="flex items-center justify-center mt-4 text-dark-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 text-4xl"
              >
                📱
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-4 text-4xl"
              >
                💻
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Mobile Developer with a Passion for Innovation
            </h3>
            <p className="text-dark-500 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <AnimatedCard
                  key={stat.label}
                  hoverEffect="scale"
                  delay={0.3 + index * 0.1}
                  className="p-4"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm text-dark-500">{stat.label}</div>
                </AnimatedCard>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <AnimatedButton
                href="#contact"
                variant="gradient"
                size="md"
              >
                Let's Connect
              </AnimatedButton>
              <AnimatedButton
                href={personalInfo.github}
                target="_blank"
                variant="shimmer"
                size="md"
              >
                View GitHub
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <AnimatedCard
            hoverEffect="lift"
            delay={0.4}
            className="p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-primary-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                🎓
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-purple-400">{education.degree}</h4>
              <p className="text-white">{education.field}</p>
              <p className="text-dark-500">{education.college}</p>
              <div className="flex items-center text-dark-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {education.period}
              </div>
            </div>
          </AnimatedCard>

          {/* Certifications */}
          <AnimatedCard
            hoverEffect="lift"
            delay={0.5}
            className="p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-purple-600 pl-4 hover:border-primary-600 transition-colors duration-300"
                >
                  <h4 className="text-white font-semibold">{cert.title}</h4>
                  <p className="text-dark-500 text-sm">{cert.organization}</p>
                  <p className="text-dark-500 text-xs mt-1">{cert.period}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </motion.div>
    </section>
  );
}


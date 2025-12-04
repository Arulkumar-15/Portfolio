import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { SiFlutter, SiTypescript } from 'react-icons/si';
import { skills } from '../../data/portfolio';

function SkillOrb({ skill, position, color, emoji }) {
  const textRef = useRef();
  const emojiRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
    if (emojiRef.current) {
      emojiRef.current.lookAt(state.camera.position);
    }
  });

  const scale = skill.level / 100 + 0.5;

  return (
    <group position={position}>
      {emoji && (
        <Text
          ref={emojiRef}
          position={[0, 0, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {emoji}
        </Text>
      )}
      <Text
        ref={textRef}
        position={[0, scale * 0.7, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
}

function SkillsScene({ isMobile = false }) {
  const allSkills = [
    ...skills.mobile.map(s => ({ ...s, category: 'mobile' })),
    ...skills.frontend.slice(0, 3).map(s => ({ ...s, category: 'frontend' })),
    ...skills.backend.slice(0, 2).map(s => ({ ...s, category: 'backend' })),
    ...skills.database.slice(0, 2).map(s => ({ ...s, category: 'database' })),
  ];

  const colors = {
    mobile: '#a855f7',
    frontend: '#0ea5e9',
    backend: '#10b981',
    database: '#f59e0b',
  };

  const radius = isMobile ? 2.5 : 3;
  const positions = allSkills.map((_, i) => {
    const angle = (i / allSkills.length) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 2;
    return [x, y, z];
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      {allSkills.map((skill, i) => (
        <SkillOrb
          key={skill.name}
          skill={skill}
          position={positions[i]}
          color={colors[skill.category]}
          emoji={skill.name === 'Flutter' ? 'F' : skill.name === 'TypeScript' ? 'TS' : skill.icon}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={!isMobile}
        autoRotate
        autoRotateSpeed={isMobile ? 0.8 : 1}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

function SkillCategory({ category, skillsList, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className="glass-effect rounded-2xl p-4 sm:p-6"
    >
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
        {category}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {skillsList.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
          >
            <div className="flex justify-between items-center mb-2 gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {skill.icon && (
                  <span className="text-xl sm:text-2xl flex-shrink-0">
                    {skill.name === 'Flutter' ? (
                      <SiFlutter className="text-blue-400" />
                    ) : skill.name === 'TypeScript' ? (
                      <SiTypescript className="text-blue-500" />
                    ) : (
                      skill.icon
                    )}
                  </span>
                )}
                <span className="text-white font-medium text-sm sm:text-base truncate">{skill.name}</span>
              </div>
              <span className="text-purple-400 text-xs sm:text-sm font-semibold flex-shrink-0 ml-2">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.1 + i * 0.05 + 0.2 }}
                className="h-full bg-gradient-to-r from-purple-600 to-primary-600 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="skills" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl opacity-50 sm:opacity-100" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50 sm:opacity-100" />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px", amount: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 px-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-dark-500 text-base sm:text-lg px-4">
            My technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* 3D Visualization - Optimized for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px", amount: 0.2 }}
          className="mb-12 sm:mb-20"
        >
          <div className="glass-effect rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="h-64 sm:h-96 md:h-[500px] rounded-xl overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center text-dark-500">
                  Loading 3D Skills...
                </div>
              }>
                <Canvas 
                  camera={{ position: [0, 0, 8], fov: isMobile ? 60 : 50 }}
                  performance={{ min: 0.5 }}
                  dpr={isMobile ? [1, 1.5] : [1, 2]}
                >
                  <SkillsScene isMobile={isMobile} />
                </Canvas>
              </Suspense>
            </div>
            <p className="text-center text-dark-500 text-xs sm:text-sm mt-4 px-2">
              {isMobile ? (
                <>Touch to rotate • Size indicates proficiency level</>
              ) : (
                <>Drag to rotate • Scroll to zoom • Size indicates proficiency level</>
              )}
            </p>
          </div>
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SkillCategory category="Mobile Development" skillsList={skills.mobile} index={0} />
          <SkillCategory category="Frontend Development" skillsList={skills.frontend} index={1} />
          <SkillCategory category="Backend Development" skillsList={skills.backend} index={2} />
          <SkillCategory category="Database" skillsList={skills.database} index={3} />
          <SkillCategory category="Tools & Others" skillsList={skills.tools} index={4} />
          
          {/* Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-4 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              Methodologies
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Agile', 'Scrum', 'CI/CD', 'TDD', 'Git Flow'].map((method, i) => (
                <motion.span
                  key={method}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600/20 to-primary-600/20 border border-purple-600/30 rounded-full text-xs sm:text-sm font-medium text-white"
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


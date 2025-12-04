import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FloatingShape, FloatingSphere, FloatingTorus } from '../3d/FloatingShape';
import { ParticleField } from '../3d/ParticleField';
import { personalInfo } from '../../data/portfolio';
import { SplitText, Typewriter, AnimatedButton } from '../reactbits';
import Lanyard from '../ui/Lanyard';

function Scene({ isMobile = false }) {
  const particleCount = isMobile ? 200 : 800;
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      <ParticleField count={particleCount} />
      
      {!isMobile && (
        <>
          <FloatingShape position={[-2, 1, 0]} color="#a855f7" size={0.6} speed={0.8} />
          <FloatingSphere position={[2, -1, -1]} color="#0ea5e9" size={0.5} speed={1.2} />
          <FloatingTorus position={[0, 1.5, -2]} color="#c084fc" size={0.4} speed={1} />
          <FloatingSphere position={[-2, -1.5, -1]} color="#7dd3fc" size={0.4} speed={0.9} />
          <FloatingShape position={[2.5, 0.5, -1.5]} color="#9333ea" size={0.3} speed={1.1} />
        </>
      )}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={isMobile ? 0.3 : 0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
      {/* 3D Background - Reduced on mobile for better performance */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas performance={{ min: 0.5 }} dpr={isMobile ? [1, 1.5] : [1, 2]}>
            <Scene isMobile={isMobile} />
          </Canvas>
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-50/50 via-transparent to-dark-50/90 z-10" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
      >
        {/* <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-medium text-purple-400 mb-4">
            👋 Welcome to my portfolio
          </span>
        </motion.div> */}

        <motion.div
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 sm:mb-6 leading-tight"
        >
          <SplitText 
            text={`Hi, I'm ${personalInfo.name}`}
            splitBy="characters"
            animation="fadeUp"
            stagger={0.02}
            delay={0.3}
            className="gradient-text"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-dark-600 mb-6 sm:mb-8 h-12 sm:h-16 md:h-20 flex items-center justify-center"
        >
          <Typewriter
            text={personalInfo.title}
            speed={100}
            delay={2000}
            loop={false}
            className="text-glow"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-dark-500 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-4"
        >
          Crafting exceptional mobile experiences with <span className="text-purple-400 font-semibold">React Native</span> 
          {' '}and <span className="text-primary-400 font-semibold">Flutter</span>. 
          Transforming ideas into production-ready applications.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <AnimatedButton
            href="#projects"
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto text-center"
          >
            View My Work
          </AnimatedButton>
          <AnimatedButton
            href="#contact"
            variant="shimmer"
            size="lg"
            className="w-full sm:w-auto text-center"
          >
            Get In Touch
          </AnimatedButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
        >
          {[
            { value: '1+', label: 'Years Experience' },
            { value: '4', label: 'Projects Delivered' },
            { value: '500+', label: 'Happy Users' },
            { value: '15+', label: 'Countries Reached' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="glass-effect rounded-xl p-4 sm:p-5 md:p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-dark-500 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Discord Presence */}
        {personalInfo.discordId && personalInfo.discordId !== "YOUR_DISCORD_USER_ID" && (
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 md:mt-20 flex justify-center px-4"
          >
            <Lanyard 
              userId={personalInfo.discordId} 
              className="max-w-md w-full"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}


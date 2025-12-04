import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

/**
 * AnimatedCard - React Bits component
 * Card with hover and tilt effects
 */
export function AnimatedCard({
  children,
  className = '',
  hoverEffect = 'lift', // 'lift', 'tilt', 'glow', 'scale'
  delay = 0,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const baseClasses = `
    glass-effect rounded-2xl p-6
    transition-all duration-300
    ${className}
  `;

  const hoverEffects = {
    lift: 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20',
    tilt: '',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    scale: 'hover:scale-105'
  };

  const handleMouseMove = (e) => {
    if (hoverEffect !== 'tilt' || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current && hoverEffect === 'tilt') {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${hoverEffects[hoverEffect]}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}


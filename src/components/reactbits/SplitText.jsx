import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText - React Bits component
 * Animates text by splitting it into individual characters or words
 */
export function SplitText({ 
  text, 
  splitBy = 'characters', // 'characters' or 'words'
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.02,
  animation = 'fadeUp' // 'fadeUp', 'fade', 'scale', 'slide'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const splitText = splitBy === 'characters' 
    ? text.split('').filter(char => char !== ' ')
    : text.split(' ');

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <div ref={ref} className={className}>
      {splitBy === 'characters' ? (
        <span className="inline-block">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={variants}
              transition={{
                duration,
                delay: delay + index * stagger,
                ease: 'easeOut'
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ) : (
        <span className="inline-block">
          {splitText.map((word, index) => (
            <motion.span
              key={index}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={variants}
              transition={{
                duration,
                delay: delay + index * stagger,
                ease: 'easeOut'
              }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </span>
      )}
    </div>
  );
}


import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loading({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete?.(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-20 h-20 mx-auto mb-8 rounded-xl bg-gradient-to-br from-purple-600 to-primary-600"
        />
        <h2 className="text-2xl font-bold gradient-text mb-4">Loading Portfolio</h2>
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-purple-600 to-primary-600"
          />
        </div>
        <p className="text-dark-500 mt-4 text-sm">{progress}%</p>
      </div>
    </motion.div>
  );
}


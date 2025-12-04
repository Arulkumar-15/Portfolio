import { useState, useEffect } from 'react';

/**
 * Typewriter - React Bits component
 * Creates a typewriter effect for text
 */
export function Typewriter({ 
  text, 
  speed = 100,
  deleteSpeed = 50,
  delay = 1000,
  loop = false,
  className = '',
  onComplete = null
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Finished typing, wait then start deleting
        if (loop) {
          setTimeout(() => setIsDeleting(true), delay);
        } else if (onComplete) {
          onComplete();
        }
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayedText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, delay, loop, isPaused, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}


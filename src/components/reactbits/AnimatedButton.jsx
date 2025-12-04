import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * AnimatedButton - React Bits component
 * Button with various animation effects
 */
export function AnimatedButton({
  children,
  onClick,
  variant = 'default', // 'default', 'gradient', 'glow', 'shimmer'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  disabled = false,
  href,
  target,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    relative overflow-hidden rounded-lg font-semibold
    transition-all duration-300
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const variantClasses = {
    default: 'bg-gradient-to-r from-purple-600 to-primary-600 text-white hover:shadow-lg hover:shadow-purple-500/50',
    gradient: 'bg-gradient-to-r from-purple-600 via-primary-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white transition-all duration-500',
    glow: 'bg-purple-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]',
    shimmer: 'bg-gradient-to-r from-purple-600 to-primary-600 text-white relative overflow-hidden'
  };

  const ButtonContent = (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {variant === 'shimmer' && (
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: isHovered ? '200%' : '-100%'
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut'
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}


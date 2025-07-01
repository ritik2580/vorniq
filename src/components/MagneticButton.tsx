import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import useMagneticEffect from '../hooks/useMagneticEffect';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({ children, onClick, className = '' }: MagneticButtonProps) {
  const { elementRef, position, isHovered } = useMagneticEffect({ strength: 40 });

  return (
    <motion.div
      ref={elementRef}
      style={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", damping: 10, stiffness: 150 }}
      className={`inline-block ${isHovered ? 'z-20' : ''}`}
      data-cursor="pointer"
    >
      <button
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    </motion.div>
  );
}

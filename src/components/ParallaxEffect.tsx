import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
import LikeButton from './LikeButton';

interface ParallaxCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  id: number;
}

export default function ParallaxCard({ index, icon, title, description, features, color, id }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Create a parallax effect based on card position
  // Every third card gets a different transform to create depth
  const yOffset = index % 3 === 0 
    ? useTransform(scrollYProgress, [0, 1], [100, -100]) 
    : index % 3 === 1 
      ? useTransform(scrollYProgress, [0, 1], [50, -50]) 
      : useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  // Rotate slightly for enhanced parallax effect
  const rotate = index % 2 === 0 
    ? useTransform(scrollYProgress, [0, 1], [2, -2]) 
    : useTransform(scrollYProgress, [0, 1], [-2, 2]);
  
  return (
    <motion.div 
      ref={cardRef}
      style={{ 
        y: yOffset,
        rotate: rotate,
        translateZ: index % 3 * 10
      }}
      className="relative service-card group"
    >
      <div className="relative overflow-hidden">
        <LikeButton serviceId={id} color={color} />
        <ServiceCard 
          icon={icon}
          title={title}
          description={description}
          features={features}
          color={color}
          index={index}
        />
        
        {/* Parallax glow effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          animate={{ 
            background: [
              `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              `radial-gradient(circle at 20% 70%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              `radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`
            ]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </motion.div>
  );
}

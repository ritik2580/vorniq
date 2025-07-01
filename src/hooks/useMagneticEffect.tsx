import { useRef, useState, useEffect } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export default function useMagneticEffect({ strength = 30, radius = 150 }: MagneticOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Only apply effect if mouse is within radius
      if (distance < radius) {
        // Calculate magnetic pull (stronger when closer)
        const pull = 1 - Math.min(distance / radius, 1);
        const moveX = distanceX * pull * (strength / 100);
        const moveY = distanceY * pull * (strength / 100);
        
        setPosition({ x: moveX, y: moveY });
        setIsHovered(true);
      } else if (isHovered) {
        // Reset position when mouse leaves radius
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      // Reset position on mouse leave
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (element) {
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [radius, strength, isHovered]);

  return { elementRef, position, isHovered };
}

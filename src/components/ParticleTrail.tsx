import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
}

export default function ParticleTrail() {
  // Removed unused mouse position state
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        const colors = [
          'rgba(139, 92, 246, 0.8)', // violet
          'rgba(99, 102, 241, 0.8)',  // indigo
          'rgba(59, 130, 246, 0.8)'   // blue
        ];

        setParticles(prevParticles => {
          // Limit total particles
          if (prevParticles.length > 40) {
            prevParticles = prevParticles.slice(prevParticles.length - 40);
          }
          
          return [...prevParticles, {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 8 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1 // Life from 1 to 0
          }];
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      
      // Update particles
      setParticles(prevParticles => 
        prevParticles
          .map(particle => {
            const newLife = particle.life - 0.01;
            return {
              ...particle,
              life: newLife,
              size: Math.max(1, particle.size * (newLife / particle.life)) // Prevent size from becoming negative or NaN
            };
          })
          .filter(particle => particle.life > 0) // Remove dead particles
      );
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // For tablet/mobile - don't show particles
    if (typeof window === 'undefined' || window.innerWidth < 768) {
      return;
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{ opacity: 1 }}
          animate={{
            opacity: particle.life,
            scale: particle.life
          }}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            transform: `translate(-50%, -50%)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
}

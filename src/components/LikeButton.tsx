import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

interface LikeButtonProps {
  serviceId: number;
  color: string;
}

export default function LikeButton({ serviceId, color }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  const colorMap = {
    violet: 'text-violet-500 hover:text-violet-600',
    indigo: 'text-indigo-500 hover:text-indigo-600',
    blue: 'text-blue-500 hover:text-blue-600',
    purple: 'text-purple-500 hover:text-purple-600',
  };

  const activeColor = {
    violet: 'text-violet-600',
    indigo: 'text-indigo-600', 
    blue: 'text-blue-600',
    purple: 'text-purple-600',
  };

  // Check if service is liked in localStorage
  useEffect(() => {
    const likedServices = JSON.parse(localStorage.getItem('likedServices') || '[]');
    if (likedServices.includes(serviceId)) {
      setLiked(true);
    }
  }, [serviceId]);

  const handleLike = () => {
    // Get current liked services
    const likedServices = JSON.parse(localStorage.getItem('likedServices') || '[]');
    
    // Toggle like state
    if (liked) {
      // Remove from liked services
      const updatedLikes = likedServices.filter((id: number) => id !== serviceId);
      localStorage.setItem('likedServices', JSON.stringify(updatedLikes));
    } else {
      // Add to liked services
      likedServices.push(serviceId);
      localStorage.setItem('likedServices', JSON.stringify(likedServices));
      
      // Trigger animation
      setAnimating(true);
      setTimeout(() => setAnimating(false), 800);
    }
    
    setLiked(!liked);
  };

  return (
    <div className="absolute top-4 right-4 z-20">
      <motion.button
        onClick={handleLike}
        whileTap={{ scale: 0.8 }}
        className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm
          ${liked ? activeColor[color as keyof typeof activeColor] : colorMap[color as keyof typeof colorMap]}
          transition-colors duration-300`}
        aria-label={liked ? "Unlike" : "Like"}
        data-cursor="pointer"
      >
        <FiHeart 
          className={`text-lg ${liked ? 'fill-current' : ''}`} 
        />
        
        {/* Heart burst animation */}
        {animating && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <FiHeart className={`fill-current ${activeColor[color as keyof typeof activeColor]}`} />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

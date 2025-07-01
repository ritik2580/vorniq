import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // slightly longer for a richer animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (!loading) {
          document.body.style.overflow = 'visible';
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-violet-900 to-indigo-900 ${
        loading ? '' : 'pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="text-6xl font-extrabold tracking-wide text-white neon-glow"
          initial={{ scale: 0.8, rotateX: 90, opacity: 0 }}
          animate={{ scale: 1, rotateX: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="font-serif italic text-primary-400 drop-shadow-lg">V</span>ORNIQ
        </motion.div>

        {/* Glow Bar */}
        <motion.div
          className="w-64 h-2 bg-white/10 rounded-full backdrop-blur-md overflow-hidden relative"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-purple-500 to-pink-500 shimmer"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-sm tracking-wider italic"
        >
          Business Solutions Reimagined
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;

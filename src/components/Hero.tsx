import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiBarChart2, FiUsers, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-800 to-blue-900"
      />
      
      {/* Decorative grid pattern */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 rounded-full bg-white/10"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1 
            }}
            animate={{ 
              y: [null, "-10vh", null],
              x: [null, `${(Math.random() - 0.5) * 20}vw`, null]
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-24">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          style={{ y, opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-serif italic">Transform</span> Your Business With Intelligent Solutions
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            VORNIQ provides comprehensive business management software that streamlines operations, enhances productivity, and drives growth across your organization.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/demo">
              <motion.button
                className="px-8 py-3 bg-white text-violet-900 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo <FiArrowRight />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { icon: <FiDatabase size={24} />, label: "ERP Solutions" },
              { icon: <FiBarChart2 size={24} />, label: "Analytics" },
              { icon: <FiUsers size={24} />, label: "HR Management" },
              { icon: <FiShield size={24} />, label: "Security" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.15)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <div className="text-white mb-2">{item.icon}</div>
                <p className="text-white font-medium text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

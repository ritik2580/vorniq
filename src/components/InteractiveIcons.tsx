import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FiDatabase, FiUsers, FiDollarSign, FiBarChart2, 
  FiShield, FiSettings, FiClipboard, FiTruck, 
  FiGlobe, FiSmartphone, FiCpu, FiCode 
} from 'react-icons/fi';
import gsap from 'gsap';

const InteractiveIcons = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const iconWrapperRef = useRef<HTMLDivElement>(null);
  
  // Start animation when component is in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // GSAP cursor follow effect
  useEffect(() => {
    if (!iconWrapperRef.current) return;
    
    const icons = iconWrapperRef.current.querySelectorAll('.icon-item');
    
    const moveCursor = (e: MouseEvent) => {
      const rect = iconWrapperRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      icons.forEach((icon: Element) => {
        const iconEl = icon as HTMLElement;
        // Calculate distance between cursor and icon center
        const iconRect = iconEl.getBoundingClientRect();
        const iconX = iconRect.left + iconRect.width / 2 - rect.left;
        const iconY = iconRect.top + iconRect.height / 2 - rect.top;
        
        // Calculate distance and effect intensity (stronger when closer)
        const deltaX = x - iconX;
        const deltaY = y - iconY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 150; // Max distance for effect
        
        if (distance < maxDistance) {
          // Closer icons move more
          const intensity = 1 - distance / maxDistance;
          const moveX = deltaX * intensity * 0.2; // Adjust multiplier for effect strength
          const moveY = deltaY * intensity * 0.2;
          
          gsap.to(iconEl, {
            x: moveX,
            y: moveY,
            scale: 1 + intensity * 0.2,
            duration: 0.5,
            ease: "power2.out"
          });
        } else {
          // Return to original position if cursor is too far
          gsap.to(iconEl, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };
    
    iconWrapperRef.current.addEventListener('mousemove', moveCursor);
    
    return () => {
      if (iconWrapperRef.current) {
        iconWrapperRef.current.removeEventListener('mousemove', moveCursor);
      }
    };
  }, []);

  // Icon grid data
  const iconItems = [
    { icon: <FiUsers />, label: "HR Management", color: "violet" },
    { icon: <FiDollarSign />, label: "Financial Management", color: "indigo" },
    { icon: <FiDatabase />, label: "Data Analytics", color: "blue" },
    { icon: <FiBarChart2 />, label: "Business Intelligence", color: "purple" },
    { icon: <FiTruck />, label: "Supply Chain", color: "pink" },
    { icon: <FiSettings />, label: "Automation", color: "orange" },
    { icon: <FiClipboard />, label: "Project Management", color: "green" },
    { icon: <FiShield />, label: "Security", color: "red" },
    { icon: <FiGlobe />, label: "Global Solutions", color: "teal" },
    { icon: <FiSmartphone />, label: "Mobile Apps", color: "cyan" },
    { icon: <FiCpu />, label: "AI Powered", color: "amber" },
    { icon: <FiCode />, label: "API Integration", color: "lime" }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wLjUgMC41aDYwdjYwaC02MHoiLz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-violet-600/30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -right-32 bottom-32 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-white mb-4"
          >
            <span className="font-serif italic">Powerful</span> Enterprise Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Explore our comprehensive suite of business tools designed to transform your operations and drive growth.
          </motion.p>
        </div>
        
        <motion.div
          ref={iconWrapperRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {iconItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`icon-item relative flex flex-col items-center justify-center p-8 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-${item.color}-500/50 group transition-all duration-300`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl bg-${item.color}-900/0 group-hover:bg-${item.color}-900/20 transition-colors duration-300`}></div>
              
              {/* Icon container with animation */}
              <motion.div
                className={`relative w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gray-700/50 group-hover:bg-${item.color}-900/30 text-${item.color}-400 transition-colors duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="text-3xl">{item.icon}</div>
                
                {/* Animated circles */}
                <div className={`absolute inset-0 rounded-full border border-${item.color}-500/0 group-hover:border-${item.color}-500/70 group-hover:scale-110 transition-all duration-700 opacity-0 group-hover:opacity-100`}></div>
                <div className={`absolute inset-0 rounded-full border border-${item.color}-500/0 group-hover:border-${item.color}-500/30 group-hover:scale-125 transition-all duration-1000 delay-100 opacity-0 group-hover:opacity-100`}></div>
              </motion.div>
              
              <h3 className="text-white font-medium text-center z-10">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-all"
          >
            Explore All Features
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveIcons;
